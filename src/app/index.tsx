/*
 * Created on Thu April 23 2020
 *
 * Main App composition where we combine different component to from an
 * base starting point for application rendering
 *
 * @author nirajgeorgian@oojob.io (Niraj Georgian)
 *
 * Copyright (c) 2020 - oojob
 */

import { Col, Layout, Row } from 'antd'

import AppBody from 'app/_body'
import AppNavigation from 'app/_header'
import Contexts from 'app/contexts'
import React, { useEffect } from 'react'
import styles from 'app/style.module.less'
import { useToggleMenuContext } from 'app/contexts/toggle-secondary-menu'

const AppLayout: React.FC = ({ children }) => (
	<Contexts>
		<div className={styles.pageWrapper}>
			<div className={styles.mainWrapper}>{children}</div>
		</div>
	</Contexts>
)

const App: React.FC = () => {
	const { navigationSpan, contentSpan } = useToggleMenuContext()

	console.log('values', navigationSpan, contentSpan)

	return (
		<AppLayout>
			<Row>
				<Layout hasSider={true}>
					<Col className={styles.mainMenu} span={navigationSpan}>
						<AppNavigation />
					</Col>
					<Col span={contentSpan}>
						<AppBody />
					</Col>
				</Layout>
			</Row>
		</AppLayout>
	)
}

export default App
