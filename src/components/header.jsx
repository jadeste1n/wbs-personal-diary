const Header = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Dear Diary</a>
			</div>
			<div className="flex-none">
				<button className="btn btn-sm" onClick={()=>document.getElementById('my_modal_4').showModal()}>New entry</button>
			</div>
		</div>
	);
};

export default Header;
