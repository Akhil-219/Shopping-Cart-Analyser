import { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();
export const useBudgetContext = () => useContext(BudgetContext);
export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("user-budget");
    return savedBudget ? JSON.parse(savedBudget) : 0;
  });
  useEffect(() => {
    localStorage.setItem("user-budget", JSON.stringify(budget));
  }, [budget]);
  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};
