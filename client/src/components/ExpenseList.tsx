import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { showToast } from '../utils/toaster';

interface Expense {
	id: number;
	name: string;
	amount: number;
}

interface ExpenseListProps {
	refreshFlag: boolean;
}

const ExpenseList = ({ refreshFlag }: ExpenseListProps) => {
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchExpenses = async () => {
			try {
				const response = await fetch('/api/expense/get-expenses');

				const data = await response.json();
				if (!response.ok) {
					console.log(data.message);
					showToast(data.message || 'Something went wrong', 'failure');
				}
				setExpenses(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchExpenses();
	}, [refreshFlag]);

	console.log(expenses);

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>Your Expenses</h2>
			{loading ? (
				<>
					<FaSpinner className='animate-spin text-3xl text-gray-600 mx-auto' />
					<span className='text-center w-full text-gray-600'>Loading...</span>
				</>
			) : !expenses.length ? (
				<div className='mt-10 grid grid-col gap-3'>
					<div className='text-8xl text-center'>💸</div>
					<h1 className='text-2xl text-gray-600 text-center'>
						No expenses yet
					</h1>
					<p className='text-base text-center text-gray-600'>
						Start tracking your expenses by adding your first expense above!
						Keep your budget on track with easy expense monitoring
					</p>
				</div>
			) : (
				<div className='flex flex-col gap-3 max-h-72 overflow-y-auto pr-2'>
					{expenses.map((expense) => (
						<div
							key={expense.id}
							className='flex justify-between items-center bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow duration-200'
						>
							<span className='font-medium truncate'>{expense.name}</span>
							<div className='flex items-center gap-3'>
								<span className='text-red-500 font-semibold'>
									₱{expense.amount.toFixed(2)}
								</span>
								<button className='text-red-500 font-bold hover:text-red-700 transition-colors duration-200 cursor-pointer hover:scale-125 hover:font-bold'>
									✕
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ExpenseList;
