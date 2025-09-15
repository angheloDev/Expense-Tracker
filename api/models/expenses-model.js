import mongoose from 'mongoose';

const expensesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Expense = mongoose.model('Expense', expensesSchema);

export default Expense;
