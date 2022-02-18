import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x046E438E19a894c74762Bf5bAfA5dBfbF81f2b3e'
);

export default instance;
