import Home from "./HomePage";
import { useParams } from "react-router-dom";

const EntryPage = () => {
	const { id } = useParams();
	console.log(id); // Logs the value of 'id' for debugging

	return <>
		<Home id={id} />
	</>;
};

export default EntryPage;
