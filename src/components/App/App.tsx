import "./App.css";
import Button from "../ui/Button/Button.jsx";

import "./App.css";
const App = () => {
  return (
    <>
      <div>DEMAT Breizh</div>
      <Button
        bgcolor="aquamarine"
        type="button"
        style={{
          textDecoration: "underline",
          fontStyle: "italic",
          backgroundColor: "grey",
        }}
        clickAction={(unArg) => {
          console.trace(unArg);
        }}
      >
        Benjammin
      </Button>
      <Button bgcolor="skyblue">
        <div>coucou</div>
      </Button>
      <br />
      <Button>
        <div>div1</div>
        <div>div2</div>
      </Button>
      <Button />
    </>
  );
};

export default App;
