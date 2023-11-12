export default function Why() {
	const reasons: string[] = [
		'Easy to Learn: Approachable for developers of all levels.',
		'No Learning Curve: Get started quickly without hurdles.',
		'Extensive Plugin Support: Customize and enhance functionality effortlessly.',
		'Highly Customizable: Tailor the framework to meet your unique needs.',
		'Long-Term Support (LTS): Ensuring stability and updates over time.',
		'Active Community: Join a vibrant community for support and collaboration.',
		'Open Source: Contribute and benefit from a transparent, collaborative development model.'
		// Add more reasons as needed
	]

	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<div>
					<p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-white dark:text-black uppercase rounded-full bg-black dark:bg-white">
						Just do it
					</p>
				</div>
				<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-gray-500 via-neutral-700 dark:from-white dark:via-gray-200 dark:to-neutral-700 sm:text-4xl md:mx-auto">
					<span className="relative inline-block">
						<svg
							viewBox="0 0 52 24"
							fill="currentColor"
							className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-neutral-700/50 dark:text-gray-100/20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
						>
							<defs>
								<pattern id="a0b40128-6963-4319-aeeb-471e92fa2d74" x="0" y="0" width=".135" height=".30">
									<circle cx="1" cy="1" r=".7"></circle>
								</pattern>
							</defs>
							<rect fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)" width="52" height="24"></rect>
						</svg>
						<span className="relative scale-110 text-transparent bg-clip-text bg-gradient-to-tl from-neutral-800 to-gray-500 via-neutral-700 dark:from-white dark:via-gray-200 dark:to-neutral-700">
							Why
						</span>{' '}
					</span>{' '}
					<span className="line-through">not</span> to use Robo.js???
				</h2>
				<p className="text-base text-neutral-800 dark:text-gray-300 font-medium md:text-lg">
					Choose our framework and unlock a world of effortless innovation, seamless integration, and unparalleled
					efficiency, because your bot deserves nothing less.
				</p>
			</div>
			<div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
				{reasons.map((reason, i) => {
					return (
						<div
							key={i}
							className="hover:scale-105 flex break-words items-center p-2 duration-300 transform border rounded-2xl shadow cursor-pointer border-gray-800 dark:border-gray-300"
						>
							<div className="mr-2">
								<svg className="w-6 h-6 sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</div>
							<span className="text-gray-900 font-semibold dark:text-gray-200">{reason}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
