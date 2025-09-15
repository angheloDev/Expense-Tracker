const mockExpenses = [
	{ id: 1, name: 'Groceries', amount: 800 },
	{ id: 2, name: 'Gas', amount: 800 },
	{ id: 3, name: 'Coffee', amount: 800 },
];

const ExpenseList = () => {
	return (
		<div>
			<h2 className='text-lg font-bold mb-4'>Your Expenses</h2>
			<div className='flex flex-col gap-3 max-h-72 overflow-y-auto pr-2'>
				{mockExpenses.map((expense) => (
					<div
						key={expense.id}
						className='flex justify-between items-center bg-white px-4 py-2 rounded-full shadow'
					>
						<span className='font-medium'>{expense.name}</span>
						<div className='flex items-center gap-3'>
							<span className='text-red-500 font-semibold'>
								₱{expense.amount.toFixed(2)}
							</span>
							<button className='text-red-500 font-bold'>✕</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExpenseList;
