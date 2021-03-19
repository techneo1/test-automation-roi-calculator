export default function CalculatorForm() {
    return (
        <form>
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
                <label htmlFor="costOfResourceInEuros">How much do you pay for each resource per hour?</label>

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
                <label htmlFor="totalNumberOfTests">How much tests do you have?</label>
                <input id="totalNumberOfTests" type="number" className="form-control" min="500" max="10000" step="500" />
            </div>

            <div className="form-group">
                <label htmlFor="numberOfReleasesPerYear">How many number of releases do you have per year?</label>
                <input id="numberOfReleasesPerYear" type="number" className="form-control" min="5" max="100" step="5" />
            </div>

            <div className="form-group">
                <label htmlFor="numberOfCheckinsPerDay">How many number of checkins do you have per day?</label>
                <input id="numberOfCheckinsPerDay" type="number" className="form-control" min="1" max="50" step="1" />
            </div>

            <div className="form-group">
                <label htmlFor="numberOfCrossPlatforms">How many cross browser/platform devices do you support?</label>
                <input id="numberOfCrossPlatforms" type="number" className="form-control" min="1" max="10" step="1" />
            </div>

            <div className="form-group text-center">
                <button type="submit" className="btn btn-lg col-md-6 mx-auto">Calculate results</button>
            </div>
        </form>
    )
}