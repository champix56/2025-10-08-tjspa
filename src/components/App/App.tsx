import "./App.css";
import Button from "../ui/Button/Button.jsx";
import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(-100);
  useEffect(() => {
    setCounter(0);
   console.log('mount',counter)
  }, []);
  useEffect(() => {
   console.log('useEffect->',counter)
  }, [counter]);
  useEffect(() => {
    console.log('all refresh mount and unmount');
    
  });
  return (
    <div style={{ textAlign: "center" }}>
      <div>Valeur du count : {counter}</div>
      <hr />
      <Button
        bgcolor="tomato"
        clickAction={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        bgcolor="skyblue"
        clickAction={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
