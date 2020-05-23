import React, { useState } from 'react'
import style from '../style.module.less'
import { Row, Col, Input, Button, Form, Layout } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

interface IInitialValues {}

interface IEducationFormProps {
	// disabled: boolean
	// initialValues: IInitialValues
	// onFinish: (e: any) => any
	onSubmit: (e: any) => void
}

const rules = [{ required: true }]

const EducationForm: React.FC<IEducationFormProps> = ({ onSubmit }) => {
	const [disabled, setDisabled] = useState<boolean>(true)

	const initialValues = {
		education: "Bachelor's Degree"
	}

	const onFinish = (e) => {
		/* eslint-disable no-console */
		onSubmit(e)
		setDisabled((state) => !state)
	}

	return (
		<Form onFinish={onFinish} className="my-form">
			<Form.List name="users">
				{(fields, { add, remove }) => (
					/**
					 * `fields` internal fill with `name`, `key`, `fieldKey` props.
					 * You can extends this into sub field to support multiple dynamic fields.
					 */
					<div>
						{fields.map((field, index) => (
							<Layout
								key={field.key}
								style={{
									padding: '10px 10px',
									backgroundColor: 'white',
									border: '1px solid #D3D3D3',
									marginBottom: '5px'
								}}>
								<Row style={{ width: '100%' }}>
									<Form.Item
										name={[field.name, 'instituteName']}
										// fieldKey={[field.fieldKey, 'instituteName']}
										rules={rules}
										style={{ width: '100%' }}>
										<Input placeholder="Institute Name" />
									</Form.Item>
								</Row>
								<Row justify="space-between">
									<Col span={11}>
										<Form.Item name={[field.name, 'program']} rules={rules}>
											<Input placeholder="Program" />
										</Form.Item>
									</Col>
									<Col span={11}>
										<Form.Item name={[field.name, 'standard']} rules={rules}>
											<Input placeholder="Degree/Standard" />
										</Form.Item>
									</Col>
								</Row>
								<Row justify="space-between">
									<Col span={11}>
										<Form.Item name={[field.name, 'startDate']} rules={rules}>
											<Input placeholder="Start Date" />
										</Form.Item>
									</Col>
									<Col span={11}>
										<Form.Item name={[field.name, 'endDate']} rules={rules}>
											<Input placeholder="End Date" />
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Button
										type="ghost"
										onClick={() => {
											remove(field.name)
										}}
										style={{ width: '100%' }}>
										Remove
									</Button>
								</Row>
							</Layout>
						))}
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => {
									add()
								}}
								style={{ width: '100%' }}>
								<PlusOutlined /> Add field
							</Button>
						</Form.Item>
					</div>
				)}
			</Form.List>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default EducationForm
