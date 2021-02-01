import React from 'react'
import styles from './index.css';

const Title = (props) => {
	if (!props?.count) return <>暂无数据</>
	return (
		<div className={styles.title}>
			亲爱的，你已坚持
			<span style={{ fontSize: '2em', color: 'rgb(125, 137, 115)' }}>{props.count}</span>天
		</div>
	)
}

export default Title;