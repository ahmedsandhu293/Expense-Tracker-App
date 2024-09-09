import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex:1
  },
});
