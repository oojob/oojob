import React, { useState } from 'react'
import style from '../style.module.less'
import moment from 'moment'
import { Row, Col, Input, Button, Form, Select, DatePicker } from 'antd'

const { Option } = Select
interface IInitialValues {
	first_name: string
	last_name: string
	headline: string
	current_position: string
}

interface IBioFormProps {
	// disabled: boolean
	// // initialValues: IInitialValues
	// setBioFormDisabled: (e: any) => any
	onSubmit: (e: any) => void
}

const BioForm: React.FC<IBioFormProps> = ({ onSubmit }) => {
	const [disabled, setDisabled] = useState<boolean>(true)

	const initialValues = {
		first_name: 'Amit',
		middle_name: '',
		last_name: 'Rawat',
		gender: 'male',
		headline: 'Full Stack Developer | MERN',
		current_position: 'Self Employeed'
	}

	const onFinish = (e) => {
		/* eslint-disable no-console */
		onSubmit(e)
		setDisabled((state) => !state)
	}

	return (
		<Form
			className={style['form']}
			layout="vertical"
			style={{ padding: '8px 0' }}
			// form={form}
			onFinish={onFinish}
			initialValues={{ ...initialValues }}>
			<Row justify="space-between">
				<Col span={7}>
					<Form.Item label="First Name" name="first_name">
						<Input size="large" placeholder="First Name" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col span={7}>
					<Form.Item label="Middle Name" name="middle_name">
						<Input size="large" placeholder="Middle Name" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col span={7}>
					<Form.Item label="Last Name" name="last_name">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row justify="space-between">
				<Col span={11}>
					<Form.Item label="Gender" name="gender">
						<Select
							style={{
								width: '100%',
								backgroundColor: 'white'
							}}
							disabled={disabled}>
							<Option value="male">Male</Option>
							<Option value="female">Female</Option>
							<Option value="other">Other</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={11}>
					<Form.Item label="Birthday" name="birthday">
						<DatePicker
							defaultValue={moment('01/01/2015', 'DD/MM/YYYY')}
							format={'DD/MM/YYYY'}
							disabled={disabled}
							style={{
								width: '100%',
								backgroundColor: 'white'
							}}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Headline" name="headline">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Current Position" name="current_position">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>

			<Row>
				{!disabled && (
					<Button type="primary" size="large" block htmlType="submit">
						Update
					</Button>
				)}
			</Row>
			<Row>
				{disabled && (
					<Button type="ghost" size="large" block onClick={() => setDisabled((state) => !state)}>
						Edit
					</Button>
				)}
			</Row>
		</Form>
	)
}

export default BioForm
