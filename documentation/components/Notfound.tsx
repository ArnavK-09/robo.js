export default function Notfound() {
	return (
		<>
			<div className="h-full md:h-auto flex items-center">
				<div>
					<h1 className="my-4 break-words text-left font-black text-7xl text-black dark:text-white underline-offset-8 underline decoration-inherit decoration-dotted">
						Not Found
					</h1>
					<p className="my-4 font-semibold text-left text-neutral-800 dark:text-gray-200 text-xl break-words">
						Whoops! The page you're looking for is playing hide-and-seek. Let's start the search party
					</p>
				</div>
			</div>
		</>
	)
}
