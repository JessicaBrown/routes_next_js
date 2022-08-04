import { useRouter } from "next/router";

export default function ClientProjectsPage() {
	const router = useRouter();
	// wont see this log when drilled down into the id and clientprojectid
	console.log("index.js of clients", router.query);
	function loadProjectHandler() {
        // After SUBMIT FORM you want to push to diff page
		// router replace replaces and can not go back after navitation
        
		// router.push("/clients/max/projecta");
		//ALTERNATIVE METHOD
		router.push({
			pathname: "/clients/[id]/[clientprojectid]",
			query: { id: "max", clientprojectid: "projecta" },
		});
	}
	return (
		<div>
			<h1>The Projects of a Given Client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}
