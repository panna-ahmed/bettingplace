import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x64e6fEe7C809F7D51E93245eC83BC37323aa015a'
);

export default instance;
