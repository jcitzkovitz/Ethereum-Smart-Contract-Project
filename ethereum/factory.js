import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xCaAB220d54238A8Ad182F493E7115C77eFb6006E"
);

export default instance;
