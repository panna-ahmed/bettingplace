import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xce1993c3a27E87068052cc031b5fbc9449040c10'
);

export default instance;
