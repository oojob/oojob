import { Avatar, Button, Card, Col, Form, Input, Layout, List, Radio, Row, Spin, Typography, Tabs } from 'antd'
import { EditOutlined, PlusOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons'
import React, { ReactNode, useState, useEffect } from 'react'

import ExperienceTab from './experience-tab'
import Loading from 'components/loading'
import BioForm from 'app/form/profile/bio-form'
import ContactForm from 'app/form/profile/contact-form'
import style from './style.module.less'
import { withRouter } from 'react-router-dom'
import EducationForm from 'app/form/profile/education-form'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography
const { TabPane } = Tabs

const ProfileBase: React.FC = () => {
	const [key, setKey] = useState<string>('1')

	const { user, isLoading } = {
		user: { picture: 'http://dummy.duck', email: 'dodo@duck', name: 'dummy user' },
		isLoading: false
	}
	const submitBio = (e) => {
		// Mutation for updating Bio
		console.log(e)
	}

	const submitContact = (e) => {
		// Mutation for updating Bio
		console.log(e)
	}
	const submitEducation = (e) => {
		// Mutation for adding bio
		console.log(e)
	}

	return (
		<Loading loading={isLoading || !user}>
			<Content className={style['container']}>
				<Tabs
					className={style.tabs}
					defaultActiveKey={key}
					animated={false}
					size="large"
					tabPosition="top"
					onChange={(e) => {
						setKey(e)
					}}
					tabBarStyle={{ padding: '10px 10px' }}>
					<TabPane className={`${style['tabs-pane']} ${style['experience-tab']}`} tab="Experience" key="1">
						<div className={style['experience-content']}>
							<ExperienceTab />
						</div>
					</TabPane>
					<TabPane className={`${style['tabs-pane']} ${style['education-tab']}`} tab="Education" key="2">
						<div className={style['education-content']}>
							<EducationForm onSubmit={submitEducation} />
						</div>
					</TabPane>
					<TabPane className={`${style['tabs-pane']} ${style['bio-tab']}`} tab="Bio" key="3">
						<div className={style['bio-content']}>
							<BioForm onSubmit={submitBio} />
						</div>
					</TabPane>
					<TabPane className={`${style['tabs-pane']} ${style['contact-tab']}`} tab="Contact" key="4">
						<div className={style['contact-content']}>
							<ContactForm onSubmit={submitContact} />
						</div>
					</TabPane>
				</Tabs>
			</Content>
		</Loading>
	)
}

export const Profile = withRouter(ProfileBase)
export default Profile
