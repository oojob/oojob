import React from 'react'
import style from './style.module.less'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useToggleMenuContext } from 'app/contexts/toggle-secondary-menu'

interface ISecondaryMenuLayoutProps {
	handle?: string
}

const SecondaryMenuLayout: React.FC<ISecondaryMenuLayoutProps> = ({ children }) => {
	const { toggle } = useToggleMenuContext()

	return (
		<div className={style['secondary']}>
			<div
				className={style['top-bar']}
				style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
				<div className={style.username} style={{ fontSize: 'large', color: 'grey' }}>
					@georgianamit
				</div>
				<div
					className={style.collapse}
					style={{ fontSize: 'large', color: 'grey', cursor: 'pointer' }}
					onClick={toggle}>
					<ArrowLeftOutlined />
				</div>
			</div>
			{/* <Divider style={{ color: 'blue', margin: '0', padding: '0 20px' }} /> */}
			<hr style={{ width: '90%' }} />
			{children}
		</div>
	)
}

export default SecondaryMenuLayout
