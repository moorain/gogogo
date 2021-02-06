import React from 'react'
import styles from './index.css'

function DateDiff(sDate1, sDate2) {    //sDate1和sDate2是2002-12-18格式 
  var aDate, oDate1, oDate2, iDays
  aDate = sDate1.split("-")
  oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])    //转换为12-18-2002格式 
  aDate = sDate2.split("-")
  oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数 
  return iDays
}
const ChangeInfo = (props: any) => {
  const first = props?.data?.[0]?.count
  const last = props?.data?.[props?.data?.length - 1]?.count;
  const last2 = props?.data?.[props?.data?.length - 2]?.count;
  const change = last2 - last > 0 ? '瘦了' : '胖了';

  const changeInfo = last2 - last > 0 ? '继续加油' : '注意哦';
  let info: any = <>你{change}{<span style={{ fontSize: '1.6em' }}>{(Math.abs(last2 - last)).toFixed(2)}</span>}kg，{changeInfo}！</>
  if (last2 - last == 0) {
    info = '你的体重暂无变化，继续加油！'
  }

  const start = props?.data?.[0]?.date;
  const end = props?.data?.[props?.data?.length - 1]?.date;
  console.log(DateDiff(start, end))
  return (
    <div style={{ marginTop: '20px' }}>
      <div className={styles.showInfo}>
        <div style={{ fontSize: '1.4em' }}>数据分析: </div>
        <div>最近一次数据 :
          <span style={{ fontSize: '1.6em' }}>{props?.data?.[props?.data?.length - 1]?.count}kg</span>
          <span style={{ fontSize: '0.6em' }}>---{props?.data?.[props?.data?.length - 1]?.date}</span>
        </div>
        <div>相比于刚开始，你一共瘦了{<span style={{ fontSize: '1.6em' }}>{(first - last).toFixed(2)}</span>}kg，加油！</div>
        <div>相比上次数据，{info}</div>
      </div>
      <div className={styles.showInfo}>
        <div style={{ fontSize: '1.4em', marginTop: 20 }}>食谱（一阶段）:</div>
        <div style={{ marginTop: '.2em ' }}>8:00 - 牛奶或豆浆250ml、麦片 + 鸡蛋</div>
        <div style={{ marginTop: '.2em ' }}>10:30 - 脱脂酸奶150g</div>
        <div style={{ marginTop: '.2em ' }}>12:30 - 主食50g，蛋白质100g，蔬菜250g</div>
        <div style={{ marginTop: '.2em ' }}>15:30 - 水果200g</div>
        <div style={{ marginTop: '.2em ' }}>17:30 - 主食50g，蛋白质100g，蔬菜250g</div>
      </div>
    </div>
  )
}

export default ChangeInfo;