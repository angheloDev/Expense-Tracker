import mongoose from 'mongoose';

const expensesSchema = new mongoose.Schema(
	{
		value: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Expenses = mongoose.model('Expenses', expensesSchema);

export default Expenses;
