import { useState } from 'react';

const ExpenseForm = () => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState<number | ''>('');

	return (
		<form className='flex flex-col gap-4'>
			<div>
				<label className='block text-sm font-semibold text-gray-700 mb-1'>
					Expense Name
				</label>
				<input
					type='text'
					placeholder='Enter expense name...'
					className='w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E6097]'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label className='block text-sm font-semibold text-gray-700 mb-1'>
					Amount (₱)
				</label>
				<input
					type='number'
					placeholder='0.00'
					className='w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E6097]'
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
				/>
			</div>

			<button
				type='submit'
				className='bg-[#1E293B] text-white font-semibold py-2 rounded-lg hover:bg-[#3E6097] transition'
			>
				Add Expense
			</button>
		</form>
	);
};

export default ExpenseForm;
