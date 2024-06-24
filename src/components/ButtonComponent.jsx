const ButtonComponent = (props) => {
  return (
    <button className="btn btn-primary my-3" onClick={() => {}}>
      {props.btnText}
    </button>
  );
};

export default ButtonComponent;
