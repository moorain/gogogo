import React from 'react'
import styles from './index.css'

const ChangeInfo = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div className={styles.showInfo}>
        <div style={{ fontSize: '1.4em' }}>数据分析:</div>
        <div>相比于刚开始，你一共瘦了{<span style={{ fontSize: '1.6em' }}>{12}</span>}kg，加油！</div>
        <div>相比上次数据，你瘦了{<span style={{ fontSize: '1.6em' }}>{12}</span>}kg，继续加油！</div>
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