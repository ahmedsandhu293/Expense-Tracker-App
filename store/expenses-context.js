import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-06-18"),
  },
  {
    id: "e2",
    description: "A pair of trouser",
    amount: 89.99,
    date: new Date("2023-11-8"),
  },
  {
    id: "e3",
    description: "A pair of earbuds",
    amount: 129.5,
    date: new Date("2024-02-24"),
  },
  {
    id: "e4",
    description: "A pair of shirts",
    amount: 39.5,
    date: new Date("2022-06-19"),
  },
  {
    id: "e5",
    description: "A pair of caps",
    amount: 159.5,
    date: new Date("2024-04-02"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-06-18"),
  },
  {
    id: "e7",
    description: "A pair of trouser",
    amount: 89.99,
    date: new Date("2023-11-8"),
  },
  {
    id: "e8",
    description: "A pair of earbuds",
    amount: 129.5,
    date: new Date("2024-02-24"),
  },
  {
    id: "e9",
    description: "A pair of shirts",
    amount: 39.5,
    date: new Date("2022-06-19"),
  },
  {
    id: "e10",
    description: "A pair of caps",
    amount: 159.5,
    date: new Date("2024-04-02"),
  },
];
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
