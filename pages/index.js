import Link from "next/link";
// do not put in {} bc link is the default export

export default function HomePage() {
	// can add link as anchor tag but will lose state when clicked
	// bc its a new request with new page
	// DO NOT USE ANCHOR

	// Link auto pre fetches data on page as soon as user hovers over link
	// replace prop = replace so you cant go back
	return (
		<div>
			<h1>Home Page HERO!!! Yeaaah Yeaaaah</h1>
			<ul>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/client">Clients</Link>
				</li>
				<li>
					<Link href="/blog">Blogs</Link>
				</li>
			</ul>
		</div>
	);
}
