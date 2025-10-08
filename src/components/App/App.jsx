import "./App.css";
import Button from "../ui/Button/Button.jsx";
const App = () => {
  return (
    <>
      <div>DEMAT Breizh</div>
      <Button
        value="Benjammin"
        nb={1285}
        arr={[1, 2]}
        bool={true}
        func={() => {}}
        obj={{ a: "c" }}
      />
    </>
  );
};

export default App;
