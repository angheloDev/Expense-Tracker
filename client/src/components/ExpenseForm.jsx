import { useState } from 'react';
import { showToast } from '../utils/toaster';
import { FaSpinner } from 'react-icons/fa';

const ExpenseForm = ({ onAdd, total }) => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [atLimit, setAtLimit] = useState(false);

	async function addExpense(e) {
		e.preventDefault();

		setIsLoading(true);
		if (!name || amount === '') {
			showToast('Please fill out both fields', 'warning');
			setIsLoading(false);
			return;
		} else if ((total += amount) > 5000) {
			showToast('Limit reached', 'warning');
			setAtLimit(true);
			setIsLoading(false);

			return;
		}

		try {
			const res = await fetch('/api/expense/add-expense', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, amount }),
			});

			const data = await res.json();

			if (!res.ok || data.success === false) {
				showToast(data?.message ?? 'Failed to add expense', 'failure');
				return;
			}

			showToast('Expense added!', 'success');
			setName('');
			setAmount('');
			onAdd();
		} catch (err) {
			showToast(err.message ?? 'Something went wrong', 'failure');
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form className='flex flex-col gap-4 max-w-4xl' onSubmit={addExpense}>
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
				className='bg-[#1E293B] text-white font-semibold py-2 rounded-lg hover:bg-[#3E6097] transition cursor-pointer'
			>
				{isLoading ? (
					<FaSpinner className='animate-spin text-2xl text-gray-200 mx-auto' />
				) : (
					'Add expense'
				)}
			</button>
		</form>
	);
};

export default ExpenseForm;
