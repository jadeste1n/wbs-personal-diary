const FullEntry = ({ DiaryEntry = null }) => {
	return (
		<>
			{
				DiaryEntry ?
					(<div className="flex flex-col">
						< figure >
							<img
								src={`${DiaryEntry.image}`}
								alt={`${DiaryEntry.title}`}
							/>
						</figure >
						<p className="justify-start text-xs text-left">{DiaryEntry.date}</p>
						<h2 className="card-title">{DiaryEntry.title}</h2>
						<p>{DiaryEntry.content}</p>
					</div >) : (<div>404 Entry not found</div>)}
		</>
	);
};

export default FullEntry
