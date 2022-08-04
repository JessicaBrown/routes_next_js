import { useRouter } from "next/router";

export default function BlogPostsPage() {
	const router = useRouter();
    // logs an array with [...slug] as the file name
    // catches anything other than blog in the url
    // send request to filter for blogs ex: /2020/blog1
	console.log(router.query);
	return (
		<div>
			<h1>The Blog Post</h1>
		</div>
	);
}
