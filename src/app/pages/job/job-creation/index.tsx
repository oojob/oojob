import React, { useState, useEffect } from 'react'

import { Steps, Button, message } from 'antd'
import BasicDetailForm from 'app/form/job/basic-detail-form'
import JobDescriptionForm from 'app/form/job/job-description-form'
import DiversityForm from 'app/form/job/diversity-form'
import { cleanup } from '@testing-library/react'

const { Step } = Steps

interface IJobCreationProps {
	createJob: (values: any) => void
	setVisible: (boolean) => void
}

const JobCreation: React.FC<IJobCreationProps> = ({ setVisible, createJob }) => {
	const [current, setCurrent] = useState<number>(0)

	const next = () => {
		setCurrent((state) => state + 1)
	}

	const prev = () => {
		setCurrent((state) => state - 1)
	}

	useEffect(() => {
		if (localStorage.getItem('basic-detail')) {
			setCurrent(1)
		}
		if (localStorage.getItem('job-description')) {
			setCurrent(2)
		}
	}, [])

	const onSubmit = (e) => {
		const basicDetail = localStorage.getItem('basic-detail')
		const jobDescription = localStorage.getItem('job-description')
		const diversity = localStorage.getItem('diversity')
		if (basicDetail !== null && jobDescription !== null && diversity !== null) {
			const allValues = {
				...JSON.parse(basicDetail),
				...JSON.parse(jobDescription),
				...JSON.parse(diversity)
			}
			createJob(allValues)
			setVisible(false)
			localStorage.clear()
		}
	}

	const steps = [
		{
			title: 'Basic Details',
			content: <BasicDetailForm next={next} />
		},
		{
			title: 'Job Description',
			content: <JobDescriptionForm next={next} prev={prev} />
		},
		{
			title: 'Diversity',
			content: <DiversityForm onSubmit={onSubmit} prev={prev} />
		}
	]

	return (
		<div>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className="steps-content">{steps[current].content}</div>
		</div>
	)
}

export default JobCreation
