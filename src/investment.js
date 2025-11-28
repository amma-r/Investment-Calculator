// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investmentValue = initialInvestment;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;

        totalInterest += interestEarnedInYear;

        const investedCapital = initialInvestment + annualInvestment * (i + 1);

        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            totalInterest: totalInterest, // this was generated through chatgpt
            investedCapital: investedCapital, //this was generated thorught chatgpt
            valueEndOfYear: investmentValue,
        });
    }

    return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
