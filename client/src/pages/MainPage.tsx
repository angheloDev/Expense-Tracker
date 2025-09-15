import {
	Header,
	TotalBalance,
	ExpenseForm,
	ExpenseList,
} from '../components/components-exporter';

const MainPage = () => {
	return (
		<div className='min-h-screen bg-white flex flex-col items-center'>
			{/* Header */}
			<Header />

			{/* Total Balance */}
			<TotalBalance total={200000} />

			{/* Content Section */}
			<div className='flex flex-col md:flex-row w-full max-w-4xl px-4 mt-6 gap-6'>
				{/* Expense Form */}
				<div className='w-full md:w-1/2 bg-white p-4 rounded-lg'>
					<ExpenseForm />
				</div>

				{/* Expense List */}
				<div className='w-full md:w-1/2 bg-[#E2E8F0] p-4 rounded-lg'>
					<ExpenseList />
				</div>
			</div>
		</div>
	);
};

export default MainPage;
