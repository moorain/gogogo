import React from 'react'
import Title from './Title'
import Line from './LineChart'
import { Input, Button } from 'antd'
import ChangeInfo from './ChangeInfo';

function DateDiff(sDate1, sDate2) {    //sDate1和sDate2是2002-12-18格式 
  var aDate, oDate1, oDate2, iDays
  aDate = sDate1.split("-")
  oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])    //转换为12-18-2002格式 
  aDate = sDate2.split("-")
  oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数 
  return iDays
}

const IndexCom = () => {
  const mockData: any = {
    'name': '彭帆',
    'gender': 'Male',
    'age': 28,
    'activities': window?.data || []
  }
  const start = mockData?.activities?.[0]?.date;
  const end = mockData?.activities?.[mockData?.activities?.length - 1]?.date;

  return (
    <div>
      <Title count={DateDiff(start, end)} />
      <div style={{ padding: '10px 0px', height: 240, background: 'rgb(182, 193, 177)' }}>
        <Line user={mockData} />
      </div>
      <div>
        <ChangeInfo data={mockData.activities} />
      </div>
      {/* <div style={{ position: 'fixed', bottom: 0, height: '3em', width: '100%', fontFamily: 'gogogo' }}>
        <div>今日体重：<Input style={{ display: 'inline-block', width: '30%' }} />
          <Button style={{ width: '30%', marginLeft: '.6em' }}><span >提交</span></Button></div>
      </div> */}
    </div>
  )
}

export default IndexCom;
