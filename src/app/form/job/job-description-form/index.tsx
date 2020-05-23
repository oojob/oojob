import { Button, Checkbox, Col, Form, Input, Row, Select, Upload, DatePicker, InputNumber } from 'antd'
import React, { useState, useEffect } from 'react'

import Range from 'components/range'
import SalaryInput from 'components/SalaryInput'
import { UploadOutlined } from '@ant-design/icons'
import style from '../style.module.less'

const { Option } = Select
const { Search } = Input

interface IJobDescriptionFormProps {
	// onSubmit: (values: any) => void
	next: () => void
	prev: () => void
}

const JobDescriptionForm: React.FC<IJobDescriptionFormProps> = ({ next, prev }) => {
	const [form] = Form.useForm()

	const validateRange = (rule, value) => {
		if (!(value.min > 0)) {
			return Promise.reject('Min value must be greater than zero!')
		}
		if (!(value.max > 0)) {
			return Promise.reject('Max values must be greater than zero!')
		}
		if (value.min >= value.max) {
			return Promise.reject('Max value must be greater than Min value')
		}

		return Promise.resolve()
	}
	useEffect(() => {
		// console.log(localStorage.getItem('basic-detail'))
		const ls = localStorage.getItem('job-description')
		if (ls !== null) {
			const values = JSON.parse(ls)
			form.setFieldsValue({ ...values })
		}
	}, [form])

	const onFinish = (e) => {
		// onSubmit(e)
		localStorage.setItem('job-description', JSON.stringify(e))
		next()
	}

	return (
		<Form className={style.form} name="job-description-form" onFinish={onFinish} form={form}>
			<Form.Item name="name">
				<Input placeholder="Job Name" />
			</Form.Item>
			<Form.Item name="desc">
				<Input.TextArea rows={4} placeholder="Enter Description" />
			</Form.Item>
			<Row>
				<Col span={11}>
					<Form.Item name="sallary" label="Salary Range" rules={[{ validator: validateRange }]}>
						<Range />
					</Form.Item>
				</Col>
				<Col span={11} offset={2}>
					<Form.Item name="type" label="Type" style={{ padding: '0 2px' }}>
						<Select style={{ width: '100%' }}>
							<Option value="REMOTE">Remote</Option>
							<Option value="INOFFICE">inoffice</Option>
							<Option value="CONTRACT">contract</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={11}>
					<Form.Item name="experience" label="Experience(years)" rules={[{ validator: validateRange }]}>
						<Range />
					</Form.Item>
				</Col>
				<Col span={11} offset={2}>
					<Form.Item name="working_hours" label="Working Hours" style={{ padding: '0 2px' }}>
						<InputNumber min={1} max={10} defaultValue={8} style={{ width: '100%' }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={11}>
					<Form.Item name="time" label="Valid Till">
						<DatePicker style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col span={11} offset={2}>
					<Form.Item name="status" label="Status">
						<Select style={{ width: '100%' }}>
							<Option value="ACTIVE">Active</Option>
							<Option value="HOLD">Hold</Option>
							<Option value="EXPIRED">Expired</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Row className={style.footer}>
				<Col span={11}>
					<Form.Item>
						<Button type="primary" block htmlType="submit" onClick={prev}>
							Back
						</Button>
					</Form.Item>
				</Col>
				<Col span={11} offset={2}>
					<Form.Item>
						<Button type="primary" htmlType="submit" block>
							Save and Continue
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default JobDescriptionForm
