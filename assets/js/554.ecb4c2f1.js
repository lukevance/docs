(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{2620:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"security-best-practices-for-recipes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security-best-practices-for-recipes"}},[e._v("#")]),e._v(" Security Best Practices for Recipes")]),e._v(" "),i("h2",{attrs:{id:"handling-sensitive-data"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#handling-sensitive-data"}},[e._v("#")]),e._v(" Handling Sensitive Data")]),e._v(" "),i("p",[e._v("When authoring recipes, Workato strongly recommends that you avoid\nplacing sensitive data as plain text within the steps of a\nrecipe. This especially applies to tokens or keys used for\nauthentication to remote services, but also to personal information\n(such as names, addresses, emails) and anything else that should be\nkept private to the recipe author.")]),e._v(" "),i("p",[e._v("To avoid sensitive data in recipe steps:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Do not place authentication information used for a Connector (the HTTP Connector for example) in the recipe, as a hard-coded string. For example, don't specify a URL such as "),i("code",[e._v("https://www.myapp.com/services/api-method?token=3ababe3235Z2z")]),e._v(" in the recipe. The best practice is to store the authentication token in the properties for the Connection. See for example "),i("router-link",{attrs:{to:"/developing-connectors/http/connection-setup.html#authentication-type-query-params"}},[e._v("setting up authentication with a query parameter")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("For other sensitive data, consider placing it in the "),i("router-link",{attrs:{to:"/features/account-properties.html"}},[e._v("Account Properties")]),e._v(" and make reference to it as needed in recipes.")],1)]),e._v(" "),i("li",[i("p",[e._v("Another approach is to use a data pill to pass the sensitive data from a previous step to the current step. (This assumes that prior step has also not used hard-coded sensitive data).")])])]),e._v(" "),i("p",[e._v("Following these guidelines will have the following security benefits:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Sensitive data will not be exposed to other users within your Workato Team environment.")])]),e._v(" "),i("li",[i("p",[e._v("Sensitive data will not be exposed when a recipe is cloned. When a recipe is cloned, and copied into another Workato account, data that is part of the recipe steps will be copied, but Connection properties and Account Properties are not copied, nor are the dynamic contents of data pills.")])]),e._v(" "),i("li",[i("p",[e._v("It will be easier to maintain and manage sensitive information, because that information will be centralized, rather than spread across disparate recipes.")])]),e._v(" "),i("li",[i("p",[e._v("If you decide to share your recipe with the community at some point by making it public, no sensitive data will be exposed.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);