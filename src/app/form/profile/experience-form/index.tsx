import React, { useState, useEffect } from 'react'
import style from '../style.module.less'
import { Row, Col, Input, Button, Form } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

interface IInitialValues {
	companyName: string
	location: string
	startDate: string
	endDate: string
	role: string
	description: string
}

interface IExperienceFormProps {
	values?: IInitialValues
	onSubmit: (e: any, isEdit: boolean) => void
	isEdit: boolean
	disabled: boolean
	setDisabled: (boolean) => void
}

const ExperienceForm: React.FC<IExperienceFormProps> = ({ values, onSubmit, isEdit, disabled, setDisabled }) => {
	const [form] = Form.useForm()

	useEffect(() => {
		form.setFieldsValue({ ...values })
	}, [values])

	const onFinish = (e) => {
		/* eslint-disable no-console */
		onSubmit(e, isEdit)
		if (isEdit) {
			setDisabled((state) => !state)
		}
	}

	return (
		<Form className={style['form']} onFinish={onFinish} layout="vertical" style={{ padding: '8px 0' }} form={form}>
			<Row>
				<Col span={24}>
					<Form.Item label="Campany" name="companyName">
						<Input size="large" placeholder="Company Name" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Role" name="role">
						<Input size="large" placeholder="Role" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row justify="space-between">
				<Col span={11}>
					<Form.Item label="Start Date" name="startDate">
						<Input size="large" placeholder="Start Date" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col span={11}>
					<Form.Item label="End Date" name="endDate">
						<Input size="large" placeholder="End Date" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Location" name="location">
						<Input size="large" placeholder="location" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item label="Description" name="description">
						<TextArea rows={6} placeholder="Description" readOnly={disabled} />
					</Form.Item>
				</Col>
			</Row>
			{isEdit ? (
				<>
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
				</>
			) : (
				<Row>
					<Button type="ghost" htmlType="submit" size="large" block>
						Add
					</Button>
				</Row>
			)}
		</Form>
	)
}

export default ExperienceForm
