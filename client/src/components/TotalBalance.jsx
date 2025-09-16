const TotalBalance = ({ total = 0 }) => {
	return (
		<div
			className={`${
				total >= 5500 ? 'bg-red-600' : 'bg-[#1E293B]'
			}   text-white w-full text-center py-10 text-3xl font-bold shadow-md`}
		>
			Total: ₱{total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
		</div>
	);
};

export default TotalBalance;
