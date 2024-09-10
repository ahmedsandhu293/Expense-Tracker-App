import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  const editiedExpenseId = route.params?.expenseId;
  const isEditing = !!editiedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editiedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editiedExpenseId, {
        description: "Test.....",
        amount: 28.11,
        date: new Date("2021-05-11"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 84.76,
        date: new Date("2023-08-10"),
      });
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
      <Text>Hello</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
