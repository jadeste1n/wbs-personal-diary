const FullEntry = ({entry}) => {
	return (
		<div className="flex flex-col">
			<figure>
				<img
					src={`${entry.image}`}
					alt={`${entry.title}`}
				/>
			</figure>
			<p className="justify-start text-xs text-left">{entry.date}</p>
			<h2 className="card-title">{entry.title}</h2>
			<p>{entry.content}</p>
		</div>
	);
};

export default FullEntry
