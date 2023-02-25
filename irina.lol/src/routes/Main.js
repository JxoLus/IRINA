import React, { useState } from "react";
import Api from "../components/Api";

function Main() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerInfo, setSummonerInfo] = useState("");

  return (
    <div className="App">
      <div className="Mainpage">
        <h1>IRINA.lol</h1>
        <input
          type="text"
          placeholder="Enter the Summoner Name"
          onChange={(e) => setSummonerName(e.target.value)}
        ></input>
        <button onClick={(e) => Api.searchForSummoner(e)}>Search</button>
      </div>
    </div>
  );
}

export default Main;
