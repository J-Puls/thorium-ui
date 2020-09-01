export const mapPropsToMotion = (props) => {
  return {
    initial: props.initial,
    animate: props.animate,
    exit: props.exit,
    transition: props.transition,
    variants: props.variants,
  };
};
export default mapPropsToMotion;
