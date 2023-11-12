import React from 'react'

export default function Features() {
	type Feature = {
		title: string
		description: string
		icon?: React.FC
	}
	const features: Feature[] = [
		{
			title: 'Easy to Use',
			description: 'User-Friendly Excellence, Made Easy',
			icon: () => (
				<>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
						/>
					</svg>
				</>
			)
		},
		{
			title: 'Batteries Included',
			description: 'Start Strong, Your Toolkit Comes Fully Loaded',
			icon: () => (
				<>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
						/>
					</svg>
				</>
			)
		},
		{
			title: 'Powered by Discord.JS',
			description: 'Building Excellence on the Foundation of Discord.js',
			icon: () => (
				<>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
						/>
					</svg>
				</>
			)
		},
		{
			title: 'No Learning Curve',
			description: 'Effortless Development with No Learning Curve',
			icon: () => (
				<>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
						/>
					</svg>
				</>
			)
		},
		{
			title: 'Plugins Support',
			description: 'Infinite Possibilities, Explore Our Plugins Ecosystem',
			icon: () => (
				<>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
						/>
					</svg>
				</>
			)
		},
		{
			title: 'Official Support',
			description: 'Instant Assistance, Any Hour, Every Day',
			icon: () => (
				<>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
						/>
					</svg>
				</>
			)
		}
	]
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="flex flex-col mb-6 lg:flex-row md:mb-10">
				<div className="lg:w-1/2">
					<h2 className="max-w-md mb-6 f text-3xl font-extrabold tracking-tight sm:text-4xl sm:leading-none xl:max-w-lg text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-gray-500 via-neutral-700 dark:from-white dark:via-gray-200 dark:to-neutral-700">
						Features Packed!
					</h2>
				</div>
				<div className="lg:w-1/2">
					<p className="text-base md:text-right md:text-lg break-words font-medium text-black dark:text-white tracking-wide">
						Next-Level Functionality, Right at Your Fingertips.
					</p>
				</div>
			</div>
			<div className="grid gap-8 place-items-center grid-cols-1 md:grid-cols-3">
				{features.map((feature, i) => {
					return (
						<div
							key={i}
							className="w-full grid group hover:scale-105 hover:brightness-125 cursor-pointer transition ease-in-out bg-gradient-to-br dark:to-neutral-950 dark:via-neutral-900 dark:from-neutral-950 from-gray-300 via-gray-200 to-gray-300 py-5 md:py-7 place-items-center max-w-md brightness-110 rounded-3xl shadow px-2 break-words text-center"
						>
							<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-300 dark:bg-neutral-800">
								<div className="w-10 h-10 stroke-neutral-900 dark:stroke-gray-100">{feature.icon(null)}</div>
							</div>
							<h6 className="mb-2 font-semibold leading-5 text-black dark:text-white">{feature.title}</h6>
							<p className="mb-3 text-sm text-neutral-950 dark:text-gray-300">{feature.description}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
