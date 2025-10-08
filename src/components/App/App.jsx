import "./App.css";
import Button from "../ui/Button/Button.jsx";

import "./App.css";
const App = () => {
  return (
    <>
      <div>DEMAT Breizh</div>
      <Button
        type="button"
        style={{
          textDecoration: "underline",
          fontStyle: "italic",
          backgroundColor: "grey",
        }}
      >
        Benjammin
      </Button>
      <Button>
        <div>coucou</div>
      </Button>
      <br />
      <Button>
        <div>div1</div>
        <div>div2</div>
      </Button>
      <Button  />
    </>
  );
};

export default App;
