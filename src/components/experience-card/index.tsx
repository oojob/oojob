import React from 'react'
import { Card, Row, Col, Avatar, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import style from './style.module.less'

const { Title, Paragraph } = Typography

interface IExperienceCardProps {
	key: string
	isActive: boolean
	logo?: string
	companyName: string
	role: string
	location: string
	startDate: string
	endDate: string
}

const ExperienceCard: React.FC<IExperienceCardProps> = ({
	key,
	isActive,
	companyName,
	role,
	location,
	startDate,
	endDate
}) => (
	<Card className={`${style.card} ${isActive ? style.active : ''}`}>
		<Row className={style['container']}>
			<Col className={style['avatar']} span={6}>
				<Avatar size={96} src="https://picsum.photos/200/200" icon={<UserOutlined />} />
			</Col>
			<Col className={style['content']} span={17}>
				<Row className={style['header']}>
					<Col>
						<Title className={style['role']} level={3}>
							{role}
						</Title>
					</Col>
					<Col></Col>
				</Row>
				<Row>
					<Title className={style['company']} level={4}>
						{companyName}
					</Title>
				</Row>
				<Row>
					<span className={style['interval']}>
						({startDate} - {endDate}) | 7 months
					</span>
				</Row>
				<Row>
					<span className={style['location']}>{location}</span>
				</Row>
			</Col>
		</Row>
	</Card>
)

export default ExperienceCard
