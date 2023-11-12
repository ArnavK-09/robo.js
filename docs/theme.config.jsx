// imports
import Image from 'next/image'
import { useConfig } from 'nextra-theme-docs'

// logo
const logo = (
	<>
		<div id="LOGO" className="inline-flex align-middle">
			<Image
				draggable={false}
				priority
				className="h-10 w-10 rounded-full"
				alt="Logo"
				src="/sage.png"
				width={400}
				height={400}
			/>
			{/* <span className="text-xl font-semibold tracking-wider hidden md:block text-black dark:text-white">Robo.js</span> */}
		</div>
		<style jsx>{`
			#LOGO {
				width: 2.5rem !important;
				mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.2) 50%, black 75%);
				mask-size: 400%;
				mask-position: 0%;
			}
			#LOGO:hover {
				mask-position: 100%;
				transition: mask-position 1s ease, -webkit-mask-position 1s ease;
			}
		`}</style>
	</>
)

// config
export default {
	logo,
	project: {
		link: 'https://github.com/Wave-play/robo.js'
	},
	docsRepositoryBase: 'https://github.com/Wave-play/robo.js/tree/main/documentation',
	useNextSeoProps() {
		return {
			titleTemplate: '%s | Robo.js'
		}
	},
	toc: {
		backToTop: true
	},
	head: function useHead() {
		const { title } = useConfig()

		return (
			<>
				<meta name="msapplication-TileColor" content="#58a8e0" />
				<meta name="theme-color" content="#58a8e0" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="description"
					content="Unlock Bot Brilliance with Robo.js; Your Ultimate Framework for Seamless Discord Bot Development. Explore Features, Plugins, Guides and Community Support for Optimal Bot Performance!"
				/>
				<meta
					name="og:description"
					content="Unlock Bot Brilliance with Robo.js; Your Ultimate Framework for Seamless Discord Bot Development. Explore Features, Plugins, Guides and Community Support for Optimal Bot Performance!"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={'/sage.png'} />
				<meta name="twitter:site:domain" content="docs.roboplay.dev" />
				<meta name="twitter:url" content="https://docs.roboplay.dev" />
				<meta name="og:title" content={title} />
				<meta name="og:image" content={'/sage.png'} />
				<meta name="apple-mobile-web-app-title" content="Nextra" />
				<link rel="icon" href="/sage.png" type="image/png" />
			</>
		)
	},
	editLink: {
		text: 'Contribute to this page →'
	},
	primaryHue: 190,
	primarySaturation: 100,
	chat: {
		link: 'https://roboplay.dev/discord',
		icon: (
			<svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
					fill="currentColor"
				/>
			</svg>
		)
	},
	navigation: {
		prev: true,
		next: true
	},
	themeSwitch: {
		useOptions() {
			return {
				light: 'Daylight',
				dark: 'Midnight',
				system: 'Auto'
			}
		}
	},
	footer: {
		text: (
			<span>
				MIT {new Date().getFullYear()} ©{' '}
				<a
					className="dark:text-white text-black font-semibold underline underline-offset-8 text-base hover:underline-offset-4 transition-all"
					href="//roboplay.dev"
					aria-label="Robo.js Footer"
					target="_blank"
				>
					Robo.js
				</a>{' '}
				By{' '}
				<a
					className="dark:text-white text-black font-semibold underline underline-offset-8 text-base hover:underline-offset-4 transition-all"
					href="//waveplay.com"
					target="_blank"
					aria-label="Wavplay"
				>
					Waveplay
				</a>
				.
			</span>
		)
	}
	// banner: {
	//   key: beta-release',
	//   text: (
	//     <a href="://github.com/Wave-Play/robo.js" target="_blank">
	//       🎉 Robo.js is released. Read more →
	//     </a>
	//   )
	// }
}
