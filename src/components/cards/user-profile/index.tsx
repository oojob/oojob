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

import React from 'react'
import style from 'components/cards/user-profile/style.module.less'

interface IUserProfileCard {
	candidateImage?: string
	candidateName: string
	companyName: string
	candidateScore: number
}
const UserProfile: React.FC<IUserProfileCard> = ({ candidateName, companyName, candidateScore, candidateImage }) => (
	<div className={style.singleCandidateInfo}>
		<div>
			<input type={style.checkbox} />
		</div>
		<div>
			<img alt={candidateName} src={candidateImage} />
		</div>
		<h2 className={style.text}>{candidateName}</h2>
		<p className={style.text2}>{companyName}</p>
		<h2 className={style.text2}>{candidateScore}</h2>
	</div>
)

export default UserProfile
