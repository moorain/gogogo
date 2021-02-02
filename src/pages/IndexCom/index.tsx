import React from 'react'
import Title from './Title'
import Line from './LineChart'
import { Input, Button } from 'antd'
import ChangeInfo from './ChangeInfo'

const IndexCom = () => {
  const mockData: any = {
    'name': 'Bob',
    'gender': 'Male',
    'age': 33,
    'activities': [
      { "date": "2021-01-24", "count": 56.8 },
      { "date": "2021-01-31", "count": 55.5 },
      { "date": "2021-02-01", "count": 54.9 },
      { "date": "2021-02-02", "count": 54.5 },
      // { "date": "2018-10-6", "count": 61 },
      // { "date": "2018-10-7", "count": 71 },
      // { "date": "2018-10-8", "count": 57 },
      // { "date": "2018-10-9", "count": 14 },
      // { "date": "2018-10-10", "count": 72 },
      // { "date": "2018-10-11", "count": 75 },
      // { "date": "2018-10-12", "count": 35 },
      // { "date": "2018-10-13", "count": 27 },
      // { "date": "2018-10-14", "count": 57 },
      // { "date": "2018-10-15", "count": 77 }
    ]
  }

  return (
    <div>
      <Title count={22} />
      <div style={{ padding: '10px 0px', height: 240, background: 'rgb(182, 193, 177)' }}>
        <Line user={mockData} />
      </div>
      <div>
        <ChangeInfo data={mockData.activities} />
      </div>
      <div style={{ position: 'fixed', bottom: 0, height: '3em', width: '100%', fontFamily: 'gogogo' }}>
        <div>今日体重：<Input style={{ display: 'inline-block', width: '30%' }} />
          <Button style={{ width: '30%', marginLeft: '.6em' }}><span >提交</span></Button></div>
      </div>
    </div>
  )
}

export default IndexCom;
