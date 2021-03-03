import "./App.scss";

export default function App() {
  return (
    <div className="container">
      <h2 className="text-center m-4">Test Automation ROI Calculator</h2>
      {/* <p className="text-center">some description goes here...</p> */}
      <div className="card">
        <h4 className="card-header">1. Calculate ROI</h4>
        <div className="card-body">
          <h5 className="card-title">
            <div className="alert alert-info" role="alert">
              Enter below data and know the projection of
              <strong> Savings from Automation</strong> and{" "}
              <strong>ROI </strong>
              upto the next 5 years in a blink!
            </div>
          </h5>
          <form className="form">
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr className="alert-light">
                  <th className="col-sm-3 align-middle"></th>
                  <th className="col-sm-1 align-middle">Current Situation</th>
                  <th className="col-sm-1 align-middle">Year 1</th>
                  <th className="col-sm-1 align-middle">Year 2</th>
                  <th className="col-sm-1 align-middle">Year 3</th>
                  <th className="col-sm-1 align-middle">Year 4</th>
                  <th className="col-sm-1 align-middle">Year 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Total Number of Tests
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Total Number of Automated Tests
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Number of Releases/year &nbsp;
                    <span title="Number of Testing cycle per year">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Total Man hours &nbsp;
                    <span
                      title="Total Time(Man Hours) to execute tests(Regression, Smoke etc.)
                  manually/execution in hours"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </th>

                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>

                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Total manual effort(in Hours) UAT &nbsp;
                    <span title="Manual test time in a year(Regression as a part of UAT)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Total manual effort(in Hours) Insprint testing
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Cost/Hr of 1 resource in Euros
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Total Cost of Manual testing In euros (UAT and Non UAT
                    Manual)
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-secondary">
                  <th scope="col" className="text-right">
                    Total Saving Due to Automation
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Test Consulting + Infra Cost [Investment]
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-dark">
                  <th scope="col" className="text-right">
                    ROI &nbsp;
                    <span title="(Gains - Investment / Investment) * 100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              {/* <tfoot className="text-center">
                <tr className="alert-light">
                  <td colSpan={8}>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Calculate Results
                    </button>
                  </td>
                </tr>
              </tfoot> */}
            </table>
          </form>
        </div>
      </div>
      <div className="card mt-3">
        <h4 className="card-header">2. Improve your ROI</h4>
        <div className="card-body">
          <form className="form pt-3">
            <p className="lead">
              1. Running Automation tests on a daily basis to Increase ROI
            </p>
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr className="alert-light">
                  <th className="col-sm-3 align-middle"></th>
                  <th className="col-sm-1 align-middle">Current Situation</th>
                  <th className="col-sm-1 align-middle">Year 1</th>
                  <th className="col-sm-1 align-middle">Year 2</th>
                  <th className="col-sm-1 align-middle">Year 3</th>
                  <th className="col-sm-1 align-middle">Year 4</th>
                  <th className="col-sm-1 align-middle">Year 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Automation Run on daily basis/Year &nbsp;
                    <span title="We encourage the team to run automation on a Daily basis to increase ROI and catch bugs early">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Time Saved/ execution in Hrs
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-secondary">
                  <th scope="col" className="text-right">
                    Total Saving Due to Automation
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-dark">
                  <th scope="col" className="text-right">
                    Effective ROI
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
          <form className="form pt-3">
            <p className="lead">
              2. Running Automation On Cross Platform/Browser
            </p>
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr className="alert-light">
                  <th className="col-sm-3 align-middle"></th>
                  <th className="col-sm-1 align-middle">Current Situation</th>
                  <th className="col-sm-1 align-middle">Year 1</th>
                  <th className="col-sm-1 align-middle">Year 2</th>
                  <th className="col-sm-1 align-middle">Year 3</th>
                  <th className="col-sm-1 align-middle">Year 4</th>
                  <th className="col-sm-1 align-middle">Year 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Automation Run on daily basis/Year &nbsp;
                    <span title="We encourage the team to run automation on a Daily basis to increase ROI and catch bugs early">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Cross Browser/Platform Index/Device
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Time Saved Per execution in Hrs <br />
                    (multi browser/platform)
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-secondary">
                  <th scope="col" className="text-right">
                    Total Saving Due to Automation
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-dark">
                  <th scope="col" className="text-right">
                    Effective ROI
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
          <form className="form pt-3">
            <p className="lead">
              3. Running Automation tests on a daily basis to Increase ROI
              (DevOps Way of work)
            </p>
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr className="alert-light">
                  <th className="col-sm-3 align-middle"></th>
                  <th className="col-sm-1 align-middle">Current Situation</th>
                  <th className="col-sm-1 align-middle">Year 1</th>
                  <th className="col-sm-1 align-middle">Year 2</th>
                  <th className="col-sm-1 align-middle">Year 3</th>
                  <th className="col-sm-1 align-middle">Year 4</th>
                  <th className="col-sm-1 align-middle">Year 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Number of checkins Per day
                  </th>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>

                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Automation Runs Per year <br />
                    (Number of Check Ins)
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-light">
                  <th scope="col" className="text-right">
                    Time Saved Per execution in Hrs
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-secondary">
                  <th scope="col" className="text-right">
                    Total Saving Due to Automation
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="alert-dark">
                  <th scope="col" className="text-right">
                    Effective ROI
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
