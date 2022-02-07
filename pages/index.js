import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render() {
    return (
      <div>
        <h1>Our games</h1>
        <ul>
          {this.props.campaigns.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CampaignIndex;
