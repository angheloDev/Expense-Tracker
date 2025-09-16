import {
	Header,
	TotalBalance,
	ExpenseForm,
	ExpenseList,
} from '../components/components-exporter';

const MainPage = () => {
	return (
		<div className='min-h-screen bg-white flex flex-col'>
			{/* Header */}
			<Header />

			{/* Total Balance */}
			<TotalBalance total={200000} />

			{/* Content Section */}
			<div className='flex flex-col md:flex-row w-full flex-1 gap-6 max-w-full mx-auto'>
				{/* Expense Form */}
				<div className='w-full md:w-1/2 bg-white p-4 rounded-lg flex flex-col flex-1'>
					<div className='w-full max-w-md mx-auto mt-10'>
						<ExpenseForm />
					</div>
				</div>

				{/* Expense List */}
				<div className='w-full md:w-1/2 bg-[#E2E8F0] p-4 rounded-4xl flex flex-col flex-1'>
					<div className='w-full max-w-md mx-auto mt-6'>
						<ExpenseList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
