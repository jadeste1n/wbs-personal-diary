import Form from './EntryForm'

import { useLocation } from 'react-router-dom';


const Modal = ({entry}) => {
	const location = useLocation(); // Get the current location


	return (
		<div>
			<dialog id="my_modal_4" className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					{/*Use the value of location.pathname to check the current route and display specific components.*/ }
					{location.pathname === '/'? <Form /> : <FullEntry entry={entry} />}
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
