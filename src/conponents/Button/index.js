import myAlert from "~/myAlert"; // tuong duong ./src/myAlert

function Button() {
  const handleClick = () => {
    myAlert();
  };
  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
