import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
    const router = useRouter()

    console.log(router.pathname)
    // query gives access to value
    //allows to send reqest to backend to fetch data with id of router.query.id
    console.log(router.query)
	return (
		<div>
			<h1>Portfolio Project Page in the house!!!</h1>
		</div>
	);
}
