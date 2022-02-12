import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'One who created the campaign',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum contribution (wei)',
        description: 'Least Wei',
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Balance',
        description: 'Balance Wei',
      },
      {
        header: requestsCount,
        meta: 'Request Count',
        description: 'Request counts',
      },
      {
        header: approversCount,
        meta: 'Approvers Count',
        description: 'Approver count',
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Show</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
