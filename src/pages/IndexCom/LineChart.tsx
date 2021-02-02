import React, { Component } from 'react';
import './index.css';
import LineChart from '@/component/Charts/LineChart';

export default class View4 extends Component {
  render() {
    const { user } = this.props;
    const width = 370;
    const height = 200;

    return (
      <div id='view4' className='pane' >
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
          <LineChart data={user} width={width} height={height} />
        </div>
      </div>
    )
  }
}