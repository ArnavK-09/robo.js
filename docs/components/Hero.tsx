import Image from 'next/image'
import Link from 'next/link'

export default function Hero({ stars = 100 }: { stars?: number }) {
	return (
		<>
			<section id="HERO">
				<div className="container opacity-100 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-4/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="break-words text-4xl md:text-6xl leading-relaxed mb-4 font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-gray-500 via-neutral-700 dark:from-white dark:via-gray-200 dark:to-neutral-600">
							<span className="text-5xl md:text-6xl">Robo.js,</span>
							<br className="md:hidden my-1" /> Transform Ideas into Bots
						</h1>
						<p className="mb-8 mt-4 leading-relaxed break-words font-medium text-black dark:text-white tracking-wide">
							Unlock Bot Brilliance with Robo.js; Your Ultimate Framework for Seamless Discord Bot Development. Explore
							Features, Plugins, Guides and Community Support for Optimal Bot Performance!
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
							<div className="text-center grid place-content-center">
								<Link
									href={'/docs'}
									aria-label="GetStarted"
									className="text-white w-full text-center font-semibold inline-flex rounded-full px-10 py-4 bg-gradient-to-br from-sky-500 to-blue-500 transition ease-in-out hover:scale-110 scale-105 hover:shadow-2xl hover:shadow-sky-700/40 hover:brightness-110"
								>
									Get Started <span>→</span>
								</Link>
							</div>
							<div className="text-center grid place-content-center">
								<Link
									href={'https://github.com/Wave-play/robo.js'}
									aria-label="GetStarted"
									target="_blank"
									className="text-black w-full text-center font-semibold inline-flex rounded-full px-10 py-4 bg-gradient-to-br from-yellow-300 to-amber-400 transition ease-in-out hover:scale-110 scale-105 hover:shadow-2xl hover:shadow-amber-700/40 hover:brightness-110"
								>
									Star Github<span className="ml-1">☆</span>
									{stars}
								</Link>
							</div>
						</div>
					</div>
					<div className="lg:max-w-md lg:w-full md:w-3/5 w-5/6">
						<div className="">
							<div className="rounded-full ">
								<Image
									draggable={false}
									width={100000}
									height={100000}
									className="w-full scale-90 h-full object-cover object-center"
									alt="Sage Avatar"
									src="/sage.png"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
