const ButtonComponent = (props) => {
  return (
    <button
      className="btn btn-primary
   my-3"
    >
      {props.btnText}
    </button>
  );
};

export default ButtonComponent;
