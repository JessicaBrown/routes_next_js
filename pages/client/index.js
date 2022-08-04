import Link from "next/link";

export default function ClientsPage() {
	const clients = [
		{ id: "max", name: "MAXIMILIAN" },
		{ id: "jess", name: "JESSICA" },
	];
	return (
		<div>
			<h1>The Clients Page</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						{/* BETTER WAY */}
						<Link
							href={{
								pathname: "/clients/[id]",
								query: { id: client.id },
							}}
						>
							{client.name}
						</Link>
						{/* 
                        WITH LONG URLS THIS CAN BE CUMBERSOM
                        <Link href={`/clients/${client.id}`}>{client.name}</Link> 
                        */}
					</li>
				))}
				{/* 
                HARD CODED BUT MOST TIME DATA WILL BE DYNAMIC 
                <li>
					<Link href="/clients/max">MAXIMILIAN</Link>
				</li>
				<li>
					<Link href="/clients/jess">Jessica</Link>
				</li> 
                */}
			</ul>
		</div>
	);
}
