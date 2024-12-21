import Home from "./homepage";
import { useParams } from "react-router-dom";

const EntryPage = () => {
	const {id} = useParams();
    console.log(id); // Logs the value of 'id' for debugging

	return <Home />;
};

export default EntryPage;
