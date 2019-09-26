/**
 * Webpack Configuration File.
 */
const path = require( 'path' );
const autoprefixer = require( 'autoprefixer' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );

const PluginStylesheetsConfig = ( mode ) => {
	return [
		MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: [
					autoprefixer({
						browsers: [
							'>1%',
							'last 4 versions',
							'Firefox ESR',
							'not ie < 9' // React doesn't support IE8 anyway
						],
						flexbox: 'no-2009'
					})
				]
			}
		},
		{
			loader: 'sass-loader',
			options: {
				outputStyle: 'production' === mode ? 'compressed' : 'nested'
			}
		}
	];
};

const recursiveIssuer = ( m ) => {
	if ( m.issuer ) {
		return recursiveIssuer( m.issuer );
	} else if ( m.name ) {
		return m.name;
	} else {
		return false;
	}
};

module.exports = ( env, options ) => {
	const mode = options.mode;
	const config = {
		watch: 'development' === mode ? true : false,
		entry: {
			'block.build': './src/js/block.js',
			'faq-block-for-gutenberg': './src/js/faq-block-for-gutenberg.js',
			'style': './src/css/style.scss',
		},
		output: {
			path: path.resolve( __dirname, 'assets/js' ),
			filename: `[name].js`
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					settingsStyles: {
						name: 'styles',
						test: ( m, c, entry = 'styles' ) => 'CssModule' === m.constructor.name && recursiveIssuer( m ) === entry,
						chunks: 'all',
						enforce: true
					}
				}
			}
		},
		devtool: 'development' === mode ? 'cheap-eval-source-map' : false,
		module: {
			rules: [
				{
					test: /\.(js|jsx|mjs)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							babelrc: false,
							presets: [ '@babel/preset-env' ],
							cacheDirectory: true,
							'plugins': [ '@babel/plugin-transform-runtime' ]
						}
					}
				},
				{
					test: /\.s?css$/,
					use: PluginStylesheetsConfig( mode )
				},
				{
					test: /\.svg/,
					use: {
						loader: 'svg-url-loader'
					}
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: `../../assets/css/[name].css`
			}),
			new FixStyleOnlyEntriesPlugin()
		]
	};

	return config;
};