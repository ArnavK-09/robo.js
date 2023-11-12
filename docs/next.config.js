const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.jsx',
	defaultShowCopyCode: true
})

module.exports = withNextra({
	redirects: () => [
		{
			source: '/docs/getting-started',
			destination: '/docs/',
			permanent: true
		}
	]
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
