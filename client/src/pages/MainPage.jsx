import { useState, useEffect } from 'react';
import {
	Header,
	TotalBalance,
	ExpenseForm,
	ExpenseList,
} from '../components/components-exporter.js';

const MainPage = () => {
	const [refreshFlag, setRefreshFlag] = useState(false);
	const [totalExpenses, setTotalExpenses] = useState(0);

	const triggerRefresh = () => setRefreshFlag((prev) => !prev);

	useEffect(() => {
		const fetchTotal = async () => {
			try {
				const res = await fetch('/api/expense/get-total-espenses');
				const data = await res.json();
				if (!res.ok) {
					console.log(data.message);
				}
				setTotalExpenses(data.total);
			} catch (err) {
				console.error(err);
			}
		};

		fetchTotal();
	}, [refreshFlag]);

	return (
		<div className='min-h-screen bg-white flex flex-col'>
			{/* Header */}
			<Header />

			{/* Total Balance */}
			<TotalBalance total={totalExpenses} />

			{/* Content Section */}
			<div className='flex flex-col md:flex-row w-full flex-1 gap-6 max-w-full mx-auto'>
				{/* Expense Form */}
				<div className='w-full md:w-1/2 bg-white p-4 rounded-lg flex flex-col flex-1'>
					<div className='w-full max-w-md mx-auto mt-10'>
						<ExpenseForm onAdd={triggerRefresh} />
					</div>
				</div>

				{/* Expense List */}
				<div className='w-full md:w-1/2 bg-[#E2E8F0] p-4 rounded-4xl flex flex-col flex-1'>
					<div className='w-full max-w-lg mx-auto mt-6'>
						<ExpenseList refreshFlag={refreshFlag} onDelete={triggerRefresh} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
