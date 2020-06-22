import parse from "html-react-parser";

const parseTag = (tag, name, index, last, theme) => {
  let tagName;
  let attrNames;
  const noAttrsPattern = /(<\w*>)/g;

  if (name === "open") {
    const noAttrs = noAttrsPattern.test(tag);
    tagName = tag.match(/<(\w+)(\.\w+)?/g)[0].replace("<", "");
    tag = tag.replace(`<${tagName}`, "").replace(">", "");

    if (!noAttrs) {
      attrNames = parseAttributes(tag, theme);
    } else {
      attrNames = [""];
    }
  } else {
    tagName = tag.match(/<(\/\w+)(\.\w+)?/g)[0].replace("<", "");
  }

  const tSpanOpen = `<span style="color: ${theme.tag}">`,
    aSpanOpen = `<span style="color: ${theme.attr}">`,
    spanClose = `</span>`,
    oSpanClose = `</span>>`,
    spanCloseNL = `</span>></br>`;

  let result = "";
  if (name === "open") {
    if (attrNames && attrNames[0] !== "") {
      result += `<${tSpanOpen}${tagName}${spanClose} ${aSpanOpen}${attrNames}${oSpanClose}`;
    } else {
      result += `<${tSpanOpen}${tagName}${spanClose}>`;
    }
    return result;
  } else if (name === "close" && index !== last) {
    return `<` + tSpanOpen + tagName + spanCloseNL;
  } else {
    result += `<${tSpanOpen}${tagName}${spanClose}>`;
    return result;
  }
};

const parseAttributes = (tag, theme) => {
  const keyPattern = /\w+=/g,
    valuePattern = /(["{][^"}]*["}])/g,
    keyValPair = /\w+=["{][^"}]+["}]/g,
    keyValPairs = tag.match(keyValPair) || null,
    keys = [],
    values = [];

  if (keyValPairs) {
    keyValPairs.forEach((pair) => {
      keys.push(pair.match(keyPattern));
      values.push(pair.match(valuePattern));
      tag = tag.replace(pair, "");
    });
  }

  let boolAttrs = [];
  if (tag.trim()) {
    boolAttrs = tag
      .trim()
      .split(" ")
      .filter((val) => {
        return val !== "";
      });
  }
  const spanOpen = (val, theme) => {
    let color;
    if (val) {
      if (val.includes('"')) color = theme.str;
      else if (val.includes("{")) color = theme.var;
    } else color = theme.attr;
    return `<span style="color: ${color}">`;
  };
  let result = "";
  if (keyValPairs) {
    keyValPairs.forEach((pair, ind) => {
      const key = keys[ind][0];
      const val = values[ind][0];
      result += `${key.trim()}${spanOpen(val, theme)}${val}</span> `;
    });
  }
  if (boolAttrs) {
    boolAttrs.forEach((attr, ind) => {
      result += `${attr.trim()}${spanOpen("", theme)}</span>`;
      if (ind !== boolAttrs.length - 1) result += " ";
    });
  }
  return result.trim();
};

export const codeParser = (str, theme, lang) => {
  if (lang !== "html") return str;
  let result = "";
  const lines = str.split("\n");
  for (let line of lines) {
    const indents = line.match(/(~>)/g);
    const index = lines.indexOf(line);
    const openingTag = line.match(/(<[^>/]+>)/g) || null;
    const closingTag = line.match(/(<\/[^>]+>)/g) || null;
    const tagText = line
      .replace(/(~>)+/, "")
      .replace(openingTag, "")
      .replace(closingTag, "")
      .trim();
    if (indents) {
      for (let indent of indents) {
        result += indent.replace("~>", "  ");
      }
    }
    if (openingTag && !closingTag) {
      result += `${parseTag(
        openingTag[0],
        "open",
        index,
        lines.length - 1,
        theme
      )}\n`;
    } else if (openingTag && closingTag) {
      result += parseTag(openingTag[0], "open", index, lines.length - 1, theme);
      result += tagText;
      result += parseTag(
        closingTag[0],
        "close",
        index,
        lines.length - 1,
        theme
      );
    } else if (!openingTag && closingTag) {
      result += tagText;
      closingTag &&
        (result += parseTag(
          closingTag[0],
          "close",
          index,
          lines.length - 1,
          theme
        ));
    }
  }

  return parse(result, false);
};
