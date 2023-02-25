import axios from "axios";
import Main from "../routes/Main";

function Api() {
  const API_KEY = "RGAPI-8d2bef28-2435-4a32-b348-2765cdf0aa14";

  function searchForSummoner(event) {
    var APICallString = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${Api.summonerName}?api_key=${API_KEY}`;
    axios
      .get(APICallString)
      .then((res) => {
        if (res.status >= 400) {
          console.log(res.status);
        }
        Main.setSummonerInfo(res.data);
      })
      .catch((error) => console.log(error));
  }
}

export default Api;
