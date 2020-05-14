import React from 'react'
import style from 'components/cards/user-profile/style.module.less'

const UserProfile = () => (
	<div className={style.singleCandidateInfo}>
		<span>
			<input type={style.checkbox} />
		</span>
		<span>
			<img alt="#" src="img.jpg" />
		</span>
		<span className={style.text}>abc</span>
		<span className={style.text2}>pqr</span>
		<span className={style.text2}>00</span>
	</div>
)

export default UserProfile
