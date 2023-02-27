module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2020': true
	},
	"root": true,
	"parser": "@typescript-eslint/parser",
	"plugins": [
	  "@typescript-eslint"
	],
	"extends": [
	  "eslint:recommended",
	  "plugin:@typescript-eslint/eslint-recommended",
	  "plugin:@typescript-eslint/recommended"
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
