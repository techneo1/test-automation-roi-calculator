import { LineChart } from 'react-chartkick'
import 'chart.js'
import './App.scss';
import CalculatorForm from './CalculatorForm/CalculatorForm';

export default function App() {
  const savingsChartData = [
    { "name": "Total Savings due to Automation", "data": { "now": 0, "1 years": 160000, "2 years": 240000, "3 years": 320000 } }
  ];

  const roiChartData = [
    { "name": "Effective ROI", "data": { "now": 0, "1 years": 43, "2 years": 114, "3 years": 186 } }
  ];

  return (
    <div className="container">
      <h1 className="text-center m-4">Test Automation ROI Calculator</h1>
      <div className="row mb-5">
        <div className="col-md-2"></div>
        <div className="col-12 col-md-9 col-xl-8 center">
          <div className="card form">
            <div className="card-body">
              <CalculatorForm />
            </div>
          </div>
        </div>

        <div className="card-deck mt-5 mx-auto">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="card-title">€320,000</h1>
              <h3 className="card-title">Savings<sup>*</sup></h3>
              <LineChart
                data={savingsChartData}
                legend="bottom"
                prefix="€"
                thousands=","
                dataset={{ borderColor: "#ff5000", pointBackgroundColor: "#777777", pointBorderColor: "#777777", pointStyle: "rectRounded" }}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <h1 className="card-title">186</h1>
              <h3 className="card-title">ROI<sup>*</sup></h3>
              <LineChart
                data={roiChartData}
                legend="bottom"
                dataset={{ borderColor: "#498fab", pointBackgroundColor: "#777777", pointBorderColor: "#777777", pointStyle: "rectRounded" }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
