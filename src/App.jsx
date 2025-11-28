import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults, formatter } from "./investment";

const INITIAL_INVESTMENT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1
}

function App() {

  const [investmentData, setInvestmentData] = useState(INITIAL_INVESTMENT_DATA)

  const annualData = calculateInvestmentResults(investmentData).map(yearlyData => {
    return <tr>
      <td>{yearlyData.year}</td>
      <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
      <td>{formatter.format(yearlyData.interest)}</td>
      <td>{formatter.format(yearlyData.totalInterest)}</td>
      <td>{formatter.format(yearlyData.investedCapital)}</td>
    </tr>
  })



  console.log(annualData)

  return (
    <><div className="app-container">
      <UserInput
        investmentData={investmentData}
        setInvestmentData={setInvestmentData}
      />
      {investmentData.duration > 0 && <Result
        annualData={annualData}
      />}
    </div>
    </>
  );
}

export default App;
