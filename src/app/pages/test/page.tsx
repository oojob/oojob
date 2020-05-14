/* eslint-disable */
import React, { Component } from "react"

import UserProfile from "components/cards/user-profile";
import wasm from './js_plumbing.wasm'

class Canvas extends Component<any, any> {

	componentDidMount() {
		this.loadWasm()
		const _canvas = this.refs.canvas as HTMLCanvasElement
		const canvas = _canvas.getContext('2d')
		if (canvas) {
			let mag = 200;
			let panX = 2;
			let panY = 1.25;
			let maxIter = 100;

			for (let x = 10; x < this.props.height; x++) {
				for (let y = 10; y < this.props.width; y++) {
					let m = this.mandelIter(x / mag - panX, y / mag - panY, maxIter);
					canvas.fillStyle = (m === 0) ? '#000' : 'hsl(0, 100%, ' + m + '%)';
					canvas.fillRect(x, y, 1, 1);
				}
			}
		}
	}

	loadWasm = async () => {
		try {
			const wasm = await import("./js_plumbing.wasm")
			this.setState({ wasm });
		} catch (err) {
			console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
		}
	};

	mandelIter(x, y, maxIter) {
		let r = x;
		let i = y;
		for (let a = 0; a < maxIter; a++) {
			let tmpr = r * r - i * i + x;
			let tmpi = 2 * r * i + y;

			r = tmpr;
			i = tmpi;

			if (r * i > 5) {
				return a / maxIter * 100;
			}
		}

		return 0;
	}

	render() {
		console.log(this.state)
		return (
			<>
				<UserProfile />
				<canvas ref="canvas" width={500} height={500} />
			</>
		)
	}
}

export default Canvas
