import "./App.scss";

export default function App() {
  return (
    <div className="container">
      <h2 className="text-center m-4">Test Automation ROI Calculator</h2>
      {/* <p className="text-center">some description goes here...</p> */}
      <div className="row mb-5">
        <div className="col-md-2"></div>
        <div className="col-12 col-md-9 col-xl-8 center">
          {/* <p className="fancy-title">
            Enter below data and know the projection of
              <strong> Savings from Automation</strong> and
                  <strong> ROI </strong>
              upto the next 5 years in a blink!
          </p> */}
          <div className="alert alert-light">
            Know the projection of
              <strong> Savings from Automation</strong> and
                  <strong> ROI </strong>
              upto the next 5 years in a blink!
                </div>

          <div className="card">
            {/* <h4 className="card-header">1. Calculate ROI</h4> */}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="totalNumberOfTests">How much tests do you have?</label>
                  <input type="text" className="form-control" id="totalNumberOfTests"
                    placeholder="Enter Total Number of Tests" />
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfReleasesPerYear">How many number of releases do you have per year?</label>
                  <input type="text" className="form-control" id="numberOfReleasesPerYear"
                    placeholder="Enter Number of Releases/year" />
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfCheckinsPerDay">How many number of checkins do you have per day?</label>
                  <input type="text" className="form-control" id="numberOfCheckinsPerDay"
                    placeholder="Enter Number of checkins/day" />
                </div>


                <div className="form-group">
                  <label htmlFor="totalManHours">How much total time(man hours) is spent to execute tests(Regression, Smoke etc.) manually/execution in hours?</label>

                  <div className="input-group">
                    <input type="text" className="form-control"
                      id="totalManHours" aria-label="l Man hours"
                      placeholder="Enter Total Man hours to execute tests" />

                    <div className="input-group-append">
                      <span className="input-group-text">hours</span>
                    </div>
                  </div>

                  {/* <small id="totalManHoursHelp" className="form-text text-muted">Total Time(Man Hours) to execute tests(Regression, Smoke etc.) manually/execution in hours</small> */}
                </div>

                <div className="form-group">
                  <label htmlFor="costOfResourceInEuros">How much you pay to each resource per hour?</label>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">€</span>
                    </div>
                    <input type="text" className="form-control"
                      id="costOfResourceInEuros" aria-label="Cost/Hr of 1 resource in Euros"
                      placeholder="Enter Cost/Hr of 1 resource" />

                    <div className="input-group-append">
                      <span className="input-group-text">EUR</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="automationConsultingCost">How much do you spend on automation consulting per year?</label>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">€</span>
                    </div>
                    <input type="text" className="form-control"
                      id="automationConsultingCost" aria-label="Automation Consulting Cost"
                      placeholder="Enter Automation Consulting Cost" />

                    <div className="input-group-append">
                      <span className="input-group-text">EUR</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="infrastructureCostsPerYear">How much do you spend on infrastructure per year?</label>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">€</span>
                    </div>
                    <input type="text" className="form-control"
                      id="infrastructureCostsPerYear" aria-label="Infrastructure Costs/Year"
                      placeholder="Enter Infrastructure Costs/Year" />
                    <div className="input-group-append">
                      <span className="input-group-text">EUR</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfCrossPlatforms">How many cross browser/platform devices do you support?</label>
                  <input type="text" className="form-control" id="numberOfCrossPlatforms" aria-describedby="numberOfCrossPlatformsHelp"
                    placeholder="Enter Number of Supported Cross Platforms" />
                  {/* <small id="numberOfCrossPlatformsHelp" className="form-text text-muted">Select number of supported cross platforms</small> */}
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-lg col-md-6 mx-auto">Calculate results</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
