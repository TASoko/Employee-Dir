import React from "react";
import "./App.css";
import DirectoryTitle from "./components/Title";
import Table from "./components/Table";
import Search from "./components/Search"

function App() {
  return (
    <div>
      <DirectoryTitle />
      <Search/>
      <Table />
    </div>
  );
}

export default App;
