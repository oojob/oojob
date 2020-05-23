import React, { createContext, useContext, useMemo, useState } from 'react'
import { Menu } from 'antd'

interface IToggleMenuContext {
	navigationSpan: number
	contentSpan: number
	primarySpan: number
	secondarySpan: number
	collapse: boolean
	toggle?: () => void
}
const ToggleMenuContext = createContext<IToggleMenuContext>({
	navigationSpan: 6,
	contentSpan: 18,
	primarySpan: 6,
	secondarySpan: 18,
	collapse: false,
	toggle: () => {}
})
const ToggleMenu: React.FC = (props) => {
	const [navigationSpan, setNavigationSpan] = useState<number>(6)
	const [contentSpan, setContentSpan] = useState<number>(18)
	const [primarySpan, setPrimarySpan] = useState<number>(6)
	const [secondarySpan, setSecondarySpan] = useState<number>(18)
	const [collapse, setCollapse] = useState<boolean>(false)

	const toggle = () => {
		if (collapse) {
			console.log('values: uncollapse')
			setNavigationSpan(6)
			setContentSpan(18)
			setPrimarySpan(6)
			setSecondarySpan(18)
		} else {
			console.log('values: collapse')
			setNavigationSpan(2)
			setContentSpan(22)
			setPrimarySpan(24)
			setSecondarySpan(0)
		}
		setCollapse((state) => !state)
	}

	return (
		<ToggleMenuContext.Provider value={{ primarySpan, secondarySpan, navigationSpan, contentSpan, collapse, toggle }}>
			{props.children}
		</ToggleMenuContext.Provider>
	)
}

const useToggleMenuContext = () => {
	const context = useContext(ToggleMenuContext)
	if (!context) {
		throw new Error('Could not toggle the Secondary Menu')
	}

	return context
}

export { ToggleMenu as ToggleMenuProvider, ToggleMenuContext, useToggleMenuContext }
