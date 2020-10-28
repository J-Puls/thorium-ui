/* React */
import React, {
  Children,
  forwardRef,
  cloneElement,
  useState,
  useEffect,
  useRef
} from "react";
/* Sub-components */
import { DropdownDivider as Divider } from "./DropdownDivider";
import { DropdownItem as Item } from "./DropdownItem";
import { DropdownLink as Link } from "./DropdownLink";
import { DropdownMenu as Menu } from "./DropdownMenu";
import { DropdownTrigger as Trigger } from "./DropdownTrigger";
import { DropdownContainer as Container } from "./DropdownContainer";
/* Utils */
import { mapPropsToAttrs } from "../utils/mapPropsToAttrs";
import { variants } from "../utils/propValidation";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  defaultOpen: PropTypes.bool,
  displayType: PropTypes.oneOf(["block", "float"]),
  icons: PropTypes.bool,
  remoteTrigger: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "normal", "lg"]),
  targetID: PropTypes.string,
  text: PropTypes.string,
  triggerType: PropTypes.oneOf(["click", "hover"]),
  variant: PropTypes.oneOf(variants)
};

const defaultProps = {
  defaultOpen: false,
  displayType: "block",
  icons: false,
  remoteTrigger: false,
  size: "normal",
  targetID: null,
  text: null,
  triggerType: "click",
  variant: "primary"
};

export const Dropdown = forwardRef((props, ref) => {
  const [active, setActive] = useState(props.defaultOpen);
  const [menuTop, setMenuTop] = useState(0);
  useEffect(() => {
    props.onToggle && props.onToggle(active);
  }, [active]);
  
  const toggle = () => {
    if (props.triggerType === "click") {
      setActive(!active);
    }
  };
  const collapse = () => {
    if (props.collapseOnClick) {
      props.toggleBurger && props.toggleBurger();
      setActive(false);
    }
  };
  const handleMouseEnter = () => {
    props.triggerType === "hover" && setActive(true);
  };
  const handleMouseLeave = () => {
    props.triggerType === "hover" && setActive(false);
  };

  let trigger = useRef();
  useEffect(() => {
    setMenuTop(trigger.current.offsetHeight);
  }, []);

  let children;
  if (props.collapseOnClick) {
    children = Children.map(props.children, (child) => {
      return cloneElement(child, {
        onClick: () => collapse()
      });
    });
  }
  let style;
  props.remoteTrigger && (style = { display: "none" });

  return (
    <div ref={ref} data-active={active}>
      <Container
        {...mapPropsToAttrs(props)}
        displayType={props.displayType}
        style={{ marginLeft: 0, marginRight: 0, ...props.style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Trigger
          ref={trigger}
          variant={props.variant}
          icons={props.icons}
          active={active}
          onClick={toggle}
          text={props.text}
          size={props.size}
          id={props.targetID || props.id}
          style={style}
        />
        <Menu
          displayType={props.displayType}
          active={active}
          height={props.height}
          top={menuTop}
          size={props.size}
          scrollable={props.scrollable}
        >
          {children || props.children}
        </Menu>
      </Container>
    </div>
  );
});

/**
 * A collapsible, animated menu with a customizable trigger.
 */
// export class Dropdown extends Component {
//   constructor(props, ref) {
//     super();
//     this.ref = ref;
//     this.state = {
//       active: props.defaultOpen,
//       menuTop: 0
//     };
//     this.toggle = () => {
//       props.triggerType === "click" &&
//         this.setState({ active: !this.state.active });
//     };
//     this.collapse = () => {
//       props.collapseOnClick && props.toggleBurger();
//       this.setState({ active: false });
//     };
//     this.handleMouseEnter = () => {
//       props.triggerType === "hover" && this.setState({ active: true });
//     };
//     this.handleMouseLeave = () => {
//       props.triggerType === "hover" && this.setState({ active: false });
//     };
//   }
//   componentDidMount() {
//     this.setState({ menuTop: this.trigger.offsetHeight });
//   }
//   render() {
//     let children;
//     if (this.props.collapseOnClick) {
//       children = Children.map(this.props.children, (child) => {
//         return cloneElement(child, {
//           onClick: () => this.collapse()
//         });
//       });
//     }
//     let style;
//     this.props.remoteTrigger && (style = { display: "none" });

//     return (
//       <Container
//         {...mapPropsToAttrs(this.props)}
//         displayType={this.props.displayType}
//         style={{ marginLeft: 0, marginRight: 0, ...this.props.style }}
//         onMouseEnter={this.handleMouseEnter}
//         onMouseLeave={this.handleMouseLeave}
//       >
//         <Trigger
//           ref={(el) => (this.trigger = el)}
//           variant={this.props.variant}
//           icons={this.props.icons}
//           active={this.state.active}
//           onClick={this.toggle}
//           text={this.props.text}
//           size={this.props.size}
//           id={this.props.targetID || this.props.id}
//           style={style}
//         />
//         <Menu
//           displayType={this.props.displayType}
//           active={this.state.active}
//           height={this.props.height}
//           top={this.state.menuTop}
//           size={this.props.size}
//           scrollable={this.props.scrollable}
//         >
//           {children || this.props.children}
//         </Menu>
//       </Container>
//     );
//   }
// }

Dropdown.Divider = Divider;
Dropdown.Item = Item;
Dropdown.Link = Link;
Dropdown.Menu = Menu;
Dropdown.Trigger = Trigger;
Dropdown.Container = Container;
Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

export default Dropdown;
