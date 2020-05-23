import { Button, Col, Layout, Modal, Row, Typography } from 'antd'
import React, { useState } from 'react'

import JobList from './list'
import style from './style.module.less'
import { PlusCircleOutlined } from '@ant-design/icons'
import { mutationCreateJob } from 'graph/company/mutatioon'
import { useMutation } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import JobCreation from './job-creation'

const { Content } = Layout
const { Title } = Typography

const JobPage: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(false)
	const [addJob, { loading, data }] = useMutation(mutationCreateJob)

	const onSubmit = (values: any) => {
		/* eslint-disable no-console */
		console.log(values)
		// addJob({
		// 	variables: {
		// 		input: {
		// 			company: 'xyz',
		// 			...values
		// 		}
		// 	}
		// })
	}

	return (
		<>
			<Content className={style['job-content']}>
				<div className={style['header']}>
					<Title className={style['title']} level={2}>
						JOBS
					</Title>
					<Button type="primary" icon={<PlusCircleOutlined />} size="large" onClick={() => setVisible(!visible)}>
						Add A Job
					</Button>
				</div>
				<JobList />
			</Content>
			<Modal
				title="Add A Job"
				width={900}
				closable={true}
				visible={visible}
				onCancel={() => setVisible(!visible)}
				destroyOnClose={true}
				footer={null}>
				<div className={style['modal-container']}>
					<JobCreation setVisible={setVisible} createJob={onSubmit} />
				</div>
			</Modal>
		</>
	)
}

export const Job = withRouter(JobPage)
export default Job
