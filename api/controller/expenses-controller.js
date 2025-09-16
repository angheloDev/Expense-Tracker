import { customError } from '../middleware/errorHandler.js';
import Expense from '../models/expenses-model.js';

export const addExpense = async (req, res, next) => {
	const { name, amount } = req.body;

	if (!name || !amount) {
		return next(customError(400, 'All fields are required to be filled'));
	}

	try {
		const newExpense = new Expense({ name, amount });
		await newExpense.save();

		res.json({ success: true, message: 'New expense added' });
	} catch (error) {
		console.error(error);
		return next(error);
	}
};

export const getExpenses = async (req, res, next) => {
  try {
		const expenses = await Expense.find().sort({ createdAt: -1 });
		res.status(200).json(expenses);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Failed to fetch expenses' });
	}
}
