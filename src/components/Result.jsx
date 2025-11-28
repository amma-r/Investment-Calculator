export default function Result({annualData}) {



    return <>
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {annualData}
                    {/* <tr>
                        <td>1</td>
                        <td>16000</td>
                        <td>825</td>
                        <td>825</td>
                        <td>15000</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    </>
}