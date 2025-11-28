
export default function UserInput({investmentData, setInvestmentData}) {

    // console.log(investmentData)

    function handleInvestmentDataChange(field, newValue){
        setInvestmentData(prevInvestmentData =>    {
            return {...prevInvestmentData, [field] : newValue >= 0 ? newValue : ""}}        
        )
    }

    return <>
        <div id="user-input">

            <div className="input-group">
                <div>
                    {/* I was not converting the target values to numbers hence the values were being taken as string and were being concatenated 
                    and were become very big values inside the table, i has to use the Number() method to convert them to numbers */}
                    <label htmlFor="initial-investment">Initial Investment</label> 
                    <input type="number" onChange={(e) => handleInvestmentDataChange('initialInvestment', Number(e.target.value))} id="initial-investment" value={investmentData.initialInvestment} />
                </div>

                <div>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" onChange={(e) => handleInvestmentDataChange('annualInvestment', Number(e.target.value))} id="annual-investment" value={investmentData.annualInvestment} />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" onChange={(e) => handleInvestmentDataChange('expectedReturn', Number(e.target.value))} id="expected-return" value={investmentData.expectedReturn}/>
                </div>

                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" onChange={(e) => handleInvestmentDataChange('duration', Number(e.target.value))} id="duration" value={investmentData.duration}/>
                </div>
            </div>

        </div>
    </>
} 