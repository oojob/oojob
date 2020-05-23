import React, { useState } from 'react'
import style from '../style.module.less'
import { Row, Col, Input, Button, Form } from 'antd'

interface IInitialValues {
	address: string
	city: string
	state: string
	pincode: string
	country: string
}

interface IContactFormProps {
	// disabled: boolean
	// // initialValues: IInitialValues
	// setContactFormDisabled: (e: any) => any
	onSubmit: (e: any) => void
}

const ContactForm: React.FC<IContactFormProps> = ({ onSubmit }) => {
	const [disabled, setDisabled] = useState<boolean>(true)

	const initialValues = {
		phone: '7833678273',
		website: 'georgianamit.me',
		address: '342/A Streets',
		city: 'Roorkee',
		pincode: '247667',
		state: 'Uttarakhand',
		country: 'India'
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
			<Row>
				<Col span={24}>
					<Form.Item label="Contact No." name="phone">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Personal Website" name="website">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Address" name="address">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row justify="space-between">
				<Col span={11}>
					<Form.Item label="City" name="city">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col span={11}>
					<Form.Item label="State" name="state">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row justify="space-between">
				<Col span={11}>
					<Form.Item label="Pincode" name="pincode">
						<Input size="large" placeholder="input placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col span={11}>
					<Form.Item label="Country" name="country">
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

export default ContactForm
