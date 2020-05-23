/*
 * Created on Thu April 23 2020
 *
 * Base component for App Composition
 * App => (Header/Body)
 *
 * @author nirajgeorgian@oojob.io (Niraj Georgian)
 *
 * Copyright (c) 2020 - oojob
 */

import { Col, Layout, Row } from 'antd'
import Navigation, { Primary } from 'app/navigation'

import Loading from 'components/loading'
import { PrimaryRoutes } from 'app/routes'
import React from 'react'
import styles from 'app/style.module.less'
import { useToggleMenuContext } from 'app/contexts/toggle-secondary-menu'

const { Sider } = Layout

const AuthenticatedAppNavigation: React.FC<{ primarySpan: number | undefined; secondarySpan: number | undefined }> = ({
	primarySpan,
	secondarySpan
}) => {
	const { user } = {
		user: { picture: 'http://dummy.duck', email: 'dodo@duck', name: 'dummy user' }
	}

	return (
		<Sider width="100%" className={styles.navigation} collapsedWidth="0" breakpoint="lg">
			<Row>
				<Navigation>
					<Col span={primarySpan} className={styles.menu}>
						<Primary user={user} isAuthenticated={false} />
					</Col>
					<Col span={secondarySpan}>
						<PrimaryRoutes />
					</Col>
				</Navigation>
			</Row>
		</Sider>
	)
}

const UnauthenticatedAppNavigation: React.FC<{
	loading: boolean
	primarySpan: number | undefined
	secondarySpan: number | undefined
}> = ({ loading, primarySpan, secondarySpan }) => (
	<Sider width="100%" className={styles.navigation} collapsedWidth="0" breakpoint="lg">
		<Row>
			<Navigation>
				<Col span={primarySpan} className={styles.menu}>
					<Loading loading={loading}>
						<Primary user={null} isAuthenticated={true} />
					</Loading>
				</Col>
				<Col span={secondarySpan}>
					<Loading loading={loading}>
						<PrimaryRoutes />
					</Loading>
				</Col>
			</Navigation>
		</Row>
	</Sider>
)

const AppNavigation: React.FC = () => {
	const { isLoading } = { isLoading: false }
	const { primarySpan, secondarySpan } = useToggleMenuContext()

	if (isLoading) {
		return (
			<UnauthenticatedAppNavigation
				loading={Boolean(isLoading)}
				primarySpan={primarySpan}
				secondarySpan={secondarySpan}
			/>
		)
	}

	return <AuthenticatedAppNavigation primarySpan={primarySpan} secondarySpan={secondarySpan} />
}

export default AppNavigation
