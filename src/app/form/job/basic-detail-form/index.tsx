import { Button, Checkbox, Col, Form, Input, Row, Select, Upload } from 'antd'
import React, { useState, useEffect } from 'react'

import Range from 'components/range'
import SalaryInput from 'components/SalaryInput'
import { UploadOutlined } from '@ant-design/icons'
import style from '../style.module.less'

const { Option } = Select
const { Search } = Input

interface IBasicDetailFormProps {
	// onSubmit: (values: any) => void
	next: () => void
}

const BasicDetailForm: React.FC<IBasicDetailFormProps> = ({ next }) => {
	const [form] = Form.useForm()

	const checkSalary = (rule, salary) => {
		if (salary.value > 0) {
			return Promise.resolve()
		}

		return Promise.reject('Salary must be greater than zero!')
	}

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
		const ls = localStorage.getItem('basic-detail')
		if (ls !== null) {
			const values = JSON.parse(ls)
			form.setFieldsValue({ ...values })
		}
	}, [form])

	const onFinish = (e) => {
		// onSubmit(e)
		localStorage.setItem('basic-detail', JSON.stringify(e))
		next()
	}

	return (
		<Form
			className={style.form}
			name="basic-detail-form"
			onFinish={onFinish}
			form={form}
			initialValues={{
				sallary_max: {
					value: 0,
					currency: 'INR'
				},
				sallary: {
					max: 0,
					min: 0
				},
				status: 'ACTIVE',
				employementType: 'FULL'
			}}>
			<Form.Item name="category">
				<Select mode="tags" style={{ width: '100%' }} placeholder="Enter Categories">
					{[]}
				</Select>
			</Form.Item>
			<Form.Item name="skills_required">
				<Select mode="tags" style={{ width: '100%' }} placeholder="Skills Required">
					{[]}
				</Select>
			</Form.Item>
			<Form.Item name="qualification">
				<Select mode="tags" style={{ width: '100%' }} placeholder="Enter Qualification">
					{[]}
				</Select>
			</Form.Item>
			<Row>
				<Col span={11}>
					<Form.Item name="sallary" label="Salary Range" rules={[{ validator: validateRange }]}>
						<Range />
					</Form.Item>
				</Col>
				<Col span={11} offset={2}>
					<Form.Item name="employementType" label="Employment Type" style={{ padding: '0 2px' }}>
						<Select style={{ width: '100%' }}>
							<Option value="FULL">Full Time</Option>
							<Option value="PART">Part Time</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Form.Item name="location">
				<Search placeholder="company Location. ex: Bangalore" loading />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" block>
					Save and Continue
				</Button>
			</Form.Item>
		</Form>
	)
}

export default BasicDetailForm
