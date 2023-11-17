import "./App.css";
import Button from "./Components/Button";
import Header from "./Components/Header";
import List from "./Components/List";
import Person from "./Components/Person";

function App() {
  const buttonClick = () => {
    console.log("button clicked");
  };

  const listOfTeams = ["IND", "SA", "AUS", "PAK", "NZ", "BAN", "WI", "AFG"];

  return (
    <>
      <Person name="chirag" age="19" />
      <Button text="click me" onClick={buttonClick} />
      <Header title="World Cup FINALS" />
      <List items={listOfTeams} />
    </>
  );
}

export default App;
