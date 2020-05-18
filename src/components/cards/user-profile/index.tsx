/*
 * Created on Fri Map 15 2020
 *
 * User Profile card used for showing applied candidates
 *
 * @author nirajgeorgian@oojob.io (Niraj Georgian)
 * @author hiaayuv@gmail.com (Aayushi Varshney)
 *
 * Copyright (c) 2020 - oojob
 */

import { Avatar, Divider, Radio, Table } from 'antd'

import React from 'react'
import style from 'components/cards/user-profile/style.module.less'

const TABLE_TITLE = [
	{
		title: 'Image',
		dataIndex: 'image',
		render: (text: string) => (
			<a href="/dodo">
				<Avatar src={text} />
			</a>
		)
	},
	{
		title: 'Title',
		dataIndex: 'title'
	},
	{
		title: 'Description',
		dataIndex: 'description'
	},
	{
		title: 'Score',
		dataIndex: 'score'
	}
]

const data = [
	{
		key: '1',
		image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		title: 32,
		description: 'New York No. 1 Lake Park',
		score: 80
	},
	{
		key: '2',
		image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		title: 32,
		description: 'New York No. 1 Lake Park',
		score: 80
	},
	{
		key: '3',
		image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		title: 32,
		description: 'New York No. 1 Lake Park',
		score: 80
	},
	{
		key: '4',
		image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		title: 32,
		description: 'New York No. 1 Lake Park',
		score: 80
	}
]

interface IUserProfileCard {
	candidateImage?: string
	candidateName: string
	companyName: string
	candidateScore: number
}
const UserProfile: React.FC<IUserProfileCard> = ({ candidateName, companyName, candidateScore, candidateImage }) => (
	<div>
		<Radio.Group>
			<Radio value="radio">radio</Radio>
		</Radio.Group>

		<Divider />

		<Table columns={TABLE_TITLE} dataSource={data} />
	</div>
)

export default UserProfile
