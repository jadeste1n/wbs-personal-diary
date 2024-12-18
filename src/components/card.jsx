import { Link } from "react-router-dom";

const Card = ({entry}) => {
	return (
		<div className="card card-side bg-base-100 shadow-xl ">
			<div className="card-body flex flex-col gap-6">
                <p className="justify-start text-xs text-left">{entry.date}</p>
				<h2 className="card-title">{entry.title}</h2>
				{/* You can open the modal using document.getElementById('ID').showModal() method */}
				<div className="card-actions justify-start">
					<Link to='' onClick={() => document.getElementById("my_modal_4").showModal()} className="btn btn-primary">Read</Link>
				</div>
			</div>
            <figure>
				<img
					src={`${entry.image}`}
					alt={`${entry.title}`}
				/>
			</figure>
		</div>
	);
};

export default Card
