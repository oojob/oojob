import { Avatar, Typography } from 'antd'

import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import style from './style.module.less'

const { Title } = Typography

const AvatarCard: React.FC = () => (
	<div className={style['avatar-card']}>
		<Avatar className={style['avatar']} icon={<UserOutlined />} src="https://picsum.photos/200/200" />
		<Title style={{ marginBottom: '0px' }} className={style['name']} level={3}>
			Amit Rawat
		</Title>
		<Title style={{ marginTop: '0px', fontWeight: 200 }} className={style['location']} level={4}>
			Roorkee, Uttarakhand
		</Title>
	</div>
)

export default AvatarCard
