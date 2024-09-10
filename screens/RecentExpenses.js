import { StyleSheet } from "react-native";
import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expenses) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expenses.date > date7DaysAgo && expenses.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses register for the last 7 days"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
