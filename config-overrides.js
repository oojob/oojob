/* eslint-disable */
const path = require('path')
const {
	override,
	fixBabelImports,
	addLessLoader,
	adjustStyleLoaders,
	disableEsLint,
	addBundleVisualizer,
	addWebpackModuleRule
} = require('customize-cra')

module.exports = (config, env) => {
	const _config = override(
		// disable eslint in webpack
		disableEsLint(),

		// add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
		process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

		fixBabelImports('import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: true
		}),
		addLessLoader({
			javascriptEnabled: true,
			modifyVars: {}
		}),
		adjustStyleLoaders(({ use: [, css, , resolve, processor] }) => {
			delete css.options.localIdentName

			if (resolve) {
				resolve.options.sourceMap = true
			}

			// pre-processor
			if (processor && processor.loader.includes('less-loader')) {
				processor.options.sourceMap = true
			}
		})
	)(config, env)

	// wasn configuration
	const wasmExtensionRegExp = /\.wasm$/
	_config.resolve.extensions.push('.wasm')

  _config.module.rules.forEach(rule => {
    (rule.oneOf || []).forEach(oneOf => {
      if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
        // make file-loader ignore WASM files
        oneOf.exclude.push(wasmExtensionRegExp);
      }
    })
  })

  // add a dedicated loader for WASM
  _config.module.rules.push({
    test: wasmExtensionRegExp,
		include: path.resolve(__dirname, 'src'),
		type: "javascript/auto",
		use: [{
			loader: require.resolve('wasm-loader'),
			options: {}
		}]
  })

	return _config
}
