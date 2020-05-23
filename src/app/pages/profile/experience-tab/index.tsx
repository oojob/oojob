import { Col, Layout, Row, Typography, Button, Modal } from 'antd'
import React, { useState } from 'react'

import ExperienceCard from 'components/experience-card'
import style from './style.module.less'
import ExperienceForm from 'app/form/profile/experience-form'

const { Content } = Layout

const experiences = [
	{
		companyName: 'Informatica',
		location: 'Banglore, India',
		startDate: 'Jan, 2016',
		endDate: 'May, 2018',
		role: 'Full Stack Developer',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus tempora ullam voluptates cum ipsum obcaecati sequi odio numquam odit quo quibusdam molestias blanditiis esse nemo, iusto laborum optio veritatis provident ipsam rem totam iste! Quam sed aut expedita illo ab eum porro molestias distinctio cum facilis! Aut, alias! Vero?'
	},
	{
		companyName: 'Microsoft',
		location: 'Hyderabad, India',
		startDate: 'Jan, 2016',
		endDate: 'May, 2018',
		role: 'Technical Support',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus tempora ullam voluptates cum ipsum obcaecati sequi odio numquam odit quo quibusdam molestias blanditiis esse nemo, iusto laborum optio veritatis provident ipsam rem totam iste! Quam sed aut expedita illo ab eum porro molestias distinctio cum facilis! Aut, alias! Vero?'
	},
	{
		companyName: 'Informatica',
		location: 'Banglore, India',
		startDate: 'Jan, 2016',
		endDate: 'May, 2018',
		role: 'Full Stack Developer',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus tempora ullam voluptates cum ipsum obcaecati sequi odio numquam odit quo quibusdam molestias blanditiis esse nemo, iusto laborum optio veritatis provident ipsam rem totam iste! Quam sed aut expedita illo ab eum porro molestias distinctio cum facilis! Aut, alias! Vero?'
	}
]

const ExperienceTab: React.FC = () => {
	const [active, setActive] = useState<string>('0')
	const [visible, setVisible] = useState<boolean>(false)
	const [disabled, setDisabled] = useState<boolean>(true)

	const onSubmit = (e, isEdit) => {
		if (isEdit) {
			// Update Mutation here
			console.log(e)
		} else {
			// Add Mutation here
			console.log(e)
			setVisible((state) => !state)
		}
	}

	return (
		<Content className={style['container']}>
			<Row justify="space-around" className={style['inner-container']}>
				<Col span={10} className={style['experience-container']}>
					<div className={style['experience-list']}>
						<Button type="ghost" size="large" block onClick={() => setVisible((state) => !state)}>
							Add
						</Button>

						{experiences.map(({ companyName, location, startDate, endDate, role }, key) => (
							<div key={key} onClick={() => setActive(`${key}`)}>
								<ExperienceCard
									key={`${key}`}
									isActive={key === parseInt(active)}
									companyName={companyName}
									location={location}
									role={role}
									startDate={startDate}
									endDate={endDate}
								/>
							</div>
						))}
					</div>
				</Col>
				<Col span={13} className={style['experience-detail']}>
					<p>
						<ExperienceForm
							values={experiences[active.valueOf()]}
							disabled={disabled}
							setDisabled={setDisabled}
							onSubmit={onSubmit}
							isEdit={true}
						/>
					</p>
				</Col>
			</Row>
			<Modal
				title="Add A Job"
				width={720}
				closable={true}
				visible={visible}
				onCancel={() => setVisible(!visible)}
				destroyOnClose={true}
				footer={null}>
				<ExperienceForm onSubmit={onSubmit} isEdit={false} disabled={false} setDisabled={setDisabled} />
			</Modal>
		</Content>
	)
}

export default ExperienceTab
