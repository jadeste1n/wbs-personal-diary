import Header from "../components/header";
import Card from "../components/card";
import originalEntries from "../data/diaryEntries";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Home = () => {
	//set State
	const [entries, setEntries] = useState(originalEntries); //initial array for entries

	// Sync entries to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem("entries", JSON.stringify(entries));
	}, [entries]);

	return (
		<>
			<Header />

			<div className="grid grid-cols-1 auto-rows-auto	gap-6 ">
				{entries.map((entry) => (
					<Card key={entry.id} entry={entry} />
				))}
			</div>

			<Modal setEntries={setEntries} />
		</>
	);
};

export default Home;
