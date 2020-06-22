import React, { Component } from "react";
import { Layer, Block } from "../";
import Header from "./Header";
import Cell from "./Cell";
import Row from "./Row";
import Body from "./Body";
import { tableStyle } from "../Styles";

export class Table extends Component {
  render() {
    const style = { ...tableStyle.wrapper };
    this.props.bordered && (style.border = "1px solid gray");
    this.props.rounded && (style.borderRadius = ".25rem");
    return (
      <Layer justify={this.props.justify}>
        <Block
          all={this.props.all}
          xs={this.props.xs}
          sm={this.props.sm}
          md={this.props.md}
          lg={this.props.lg}
          xl={this.props.xl}
          style={{ ...style, ...this.props.style }}
        >
          <table style={tableStyle.table}>{this.props.children}</table>
        </Block>
      </Layer>
    );
  }
}
Table.Header = Header;
Table.Cell = Cell;
Table.Row = Row;
Table.Body = Body;
export default Table;
