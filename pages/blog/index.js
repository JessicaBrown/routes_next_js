// import Link from "next/router";

export default function BlogPage() {
    //COULDNT GET THIS TO WORK LIKE CLIENTS
    //THINK IT IS TO DO WITH FILE STRUCTURE
	// const blogs = [
	// 	{ id: '1', name: "Where the blog grows" },
	// 	{ id: '2', name: "Help I have fallen into a blog" },
	// ];
	return (
		<div>
			<h1>Blog Page!!!</h1>
			{/* <ul>
				{blogs.map((blog) => (
					<li key={blog.id}>
						<Link
							href={{
								pathname: "/blog/[slug]/",
								query: { id: blog.id },
							}}
						>
							{blog.name}
						</Link>
					</li>
				))}
			</ul> */}
		</div>
	);
}
