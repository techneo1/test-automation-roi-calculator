(this["webpackJsonptest-automation-roi-calculator"]=this["webpackJsonptest-automation-roi-calculator"]||[]).push([[0],{10:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var r=s(2),c=s.n(r),a=s(5),o=s.n(a),n=(s(10),s(4)),l=(s(11),s(14),s(0));function i(){return Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"totalManHours",children:"How much total time(man hours) is spent to execute tests(Regression, Smoke etc.) manually/execution in hours?"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("input",{type:"text",className:"form-control",id:"totalManHours","aria-label":"l Man hours",placeholder:"Enter Total Man hours to execute tests"}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("span",{className:"input-group-text",children:"hours"})})]})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"costOfResourceInEuros",children:"How much do you pay for each resource per hour?"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",children:"\u20ac"})}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"costOfResourceInEuros","aria-label":"Cost/Hr of 1 resource in Euros",placeholder:"Enter Cost/Hr of 1 resource"}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("span",{className:"input-group-text",children:"EUR"})})]})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"automationConsultingCost",children:"How much do you spend on automation consulting per year?"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",children:"\u20ac"})}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"automationConsultingCost","aria-label":"Automation Consulting Cost",placeholder:"Enter Automation Consulting Cost"}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("span",{className:"input-group-text",children:"EUR"})})]})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"infrastructureCostsPerYear",children:"How much do you spend on infrastructure per year?"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",children:"\u20ac"})}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"infrastructureCostsPerYear","aria-label":"Infrastructure Costs/Year",placeholder:"Enter Infrastructure Costs/Year"}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("span",{className:"input-group-text",children:"EUR"})})]})]}),Object(l.jsx)("div",{className:"form-group text-center",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-lg col-md-6 mx-auto",children:"Calculate results"})})]})}function d(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"text-center m-4",children:"Test Automation ROI Calculator"}),Object(l.jsxs)("div",{className:"row mb-5",children:[Object(l.jsx)("div",{className:"col-md-2"}),Object(l.jsx)("div",{className:"col-12 col-md-9 col-xl-8 center",children:Object(l.jsx)("div",{className:"card form",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)(i,{})})})})]}),Object(l.jsxs)("div",{className:"row card-deck my-5",children:[Object(l.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(l.jsxs)("div",{className:"card-body text-center",children:[Object(l.jsxs)("h1",{className:"card-title",children:[Object(l.jsx)("em",{children:"\u20ac"})," 320,000"]}),Object(l.jsxs)("h3",{className:"card-title",children:["Savings",Object(l.jsx)("sup",{children:"*"})]}),Object(l.jsx)(n.a,{data:[{name:"Total Savings due to Automation",data:{now:0,"1 years":16e4,"2 years":24e4,"3 years":32e4}}],legend:"bottom",prefix:"\u20ac",thousands:",",dataset:{borderColor:"#ff5000",pointBackgroundColor:"#777777",pointBorderColor:"#777777",pointStyle:"rectRounded"}})]})}),Object(l.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(l.jsxs)("div",{className:"card-body text-center",children:[Object(l.jsx)("h1",{className:"card-title",children:"186"}),Object(l.jsxs)("h3",{className:"card-title",children:["ROI",Object(l.jsx)("sup",{children:"*"})]}),Object(l.jsx)(n.a,{data:[{name:"Effective ROI",data:{now:0,"1 years":43,"2 years":114,"3 years":186}}],legend:"bottom",dataset:{borderColor:"#498fab",pointBackgroundColor:"#777777",pointBorderColor:"#777777",pointStyle:"rectRounded"}})]})}),Object(l.jsx)("div",{className:"inputCard col-sm-12 col-md-4",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"totalNumberOfTests",children:"Number of tests"}),Object(l.jsx)("input",{id:"totalNumberOfTests",type:"number",className:"form-control",min:"500",max:"10000",step:"500"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"numberOfCrossPlatforms",children:"Number of supported cross browser/platform devices"}),Object(l.jsx)("input",{id:"numberOfCrossPlatforms",type:"number",className:"form-control",min:"1",max:"10",step:"1"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"numberOfReleasesPerYear",children:"Number of releases / year"}),Object(l.jsx)("input",{id:"numberOfReleasesPerYear",type:"number",className:"form-control",min:"5",max:"100",step:"5"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"numberOfCheckinsPerDay",children:"Number of checkins / day"}),Object(l.jsx)("input",{id:"numberOfCheckinsPerDay",type:"number",className:"form-control",min:"1",max:"50",step:"1"})]})]})})]})]})}var u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.1ecd99e4.chunk.js.map