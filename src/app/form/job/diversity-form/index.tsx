import { Button, Col, Form, Input, Row, Select, Upload } from 'antd'
import React, { useEffect } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import style from '../style.module.less'

const { Search } = Input

interface IDiversityFormProps {
	onSubmit: (values: any) => void
	prev: () => void
}

const DiversityForm: React.FC<IDiversityFormProps> = ({ onSubmit, prev }) => {
	const [form] = Form.useForm()

	useEffect(() => {
		// console.log(localStorage.getItem('basic-detail'))
		const ls = localStorage.getItem('basic-detail')
		if (ls !== null) {
			const values = JSON.parse(ls)
			form.setFieldsValue({ ...values })
		}
	}, [form])

	const onFinish = (e) => {
		localStorage.setItem('diversity', JSON.stringify(e))
		onSubmit(e)
	}

	return (
		<Form className={style.form} name="diversity-form" onFinish={onFinish} form={form}>
			<Form.Item name="name">
				<Input placeholder="Job Name" />
			</Form.Item>
			<Form.Item name="desc">
				<Input.TextArea rows={4} placeholder="Enter Description" />
			</Form.Item>
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
			<Form.Item name="location">
				<Search placeholder="company Location. ex: Bangalore" loading />
			</Form.Item>
			<Form.Item name="attachment" label="Attachments">
				<Upload>
					<Button>
						<UploadOutlined /> Click to Upload
					</Button>
				</Upload>
			</Form.Item>

			<Row>
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
							Create
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default DiversityForm
