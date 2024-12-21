import Form from './EntryForm'
import { useLocation } from 'react-router-dom';
import FullEntry from "./FullEntry"


const Modal = ({ setEntries, DiaryEntry = null }) => {
	const location = useLocation(); // Get the current location


	return (
		<div>
			<dialog
				id="my_modal_4"
				className="modal"
				open={location.pathname !== '/'}>
				<div className="modal-box w-11/12 max-w-5xl">
					{/*Use the value of location.pathname to check the current route and display specific components. Pass down data to components*/}
					{location.pathname === '/' ? <Form setEntries={setEntries} /> : <FullEntry DiaryEntry={DiaryEntry} />}
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button, it will close the modal */}
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Modal
