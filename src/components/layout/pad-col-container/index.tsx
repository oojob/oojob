import { Col, Row, Layout } from 'antd'
import React, { ReactNode } from 'react'

import style from 'components/layout/pad-col-container/style.module.less'
const { Sider, Content } = Layout

interface IPadColContainerProps {
	side: ReactNode
	sideSpan: number
	contentSpan: number
	spacing: number
}

const PadColContainer: React.FC<IPadColContainerProps> = ({ children, side, sideSpan, contentSpan, spacing }) => (
	<Row className={style['pad-col-container']}>
		<Layout>
			<Col span={sideSpan}>
				<Sider theme="light" width="100%" className={style['sider']}>
					{side}
				</Sider>
			</Col>
			<Col span={contentSpan} offset={spacing}>
				<Layout className="site-layout">
					<Content className={style.content}>{children}</Content>
				</Layout>
			</Col>
		</Layout>
	</Row>
)

export default PadColContainer
