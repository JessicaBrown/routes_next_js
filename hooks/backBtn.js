export default function BackButton() {
	const router = useRouter();
	// wont see this log when drilled down into the id and clientprojectid
	console.log("index.js of clients", router.query);
	function loadBackButton() {
        
		router.push("/");
	}
	return (
		<div>
			<button onClick={loadBackButton}>Phone HOME</button>
		</div>
	);
}