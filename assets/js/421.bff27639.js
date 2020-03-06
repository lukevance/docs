(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{171:function(t,e,a){t.exports=a.p+"assets/img/callable-recipe-trigger.6078bbfd.png"},2513:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"callable-recipes-new-call-for-recipe-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#callable-recipes-new-call-for-recipe-trigger"}},[t._v("#")]),t._v(" Callable Recipes - New call for recipe trigger")]),t._v(" "),n("p",[t._v("This trigger creates a job whenever it is called, in real-time. It can be called from "),n("router-link",{attrs:{to:"/features/callable-recipes/call-recipe-action.html"}},[t._v("another recipe")]),t._v(" or from another system as a "),n("router-link",{attrs:{to:"/api-management.html"}},[t._v("API Platform REST endpoint")]),t._v(".")],1),t._v(" "),n("blockquote",[n("p",[t._v("API Platform must be enabled for your account before a callable recipe can be exposed as a REST endpoint.")])]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(171),alt:"New call for recipe trigger",width:"1157",height:"453"}}),t._v(" "),n("em",[t._v("New call for recipe trigger")])],1),t._v(" "),n("h3",{attrs:{id:"input-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Input field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",[t._v("Give this callable recipe trigger a name that describes its function.")])]),t._v(" "),n("tr",[n("td",[t._v("Input schema")]),t._v(" "),n("td",[t._v("If this recipe expects JSON, use this to describe the expected JSON structure.")])]),t._v(" "),n("tr",[n("td",[t._v("Response schema")]),t._v(" "),n("td",[t._v("If this recipe responds with JSON data, use this to describe the JSON structure.")])]),t._v(" "),n("tr",[n("td",[t._v("Request type")]),t._v(" "),n("td",[t._v("Select the request data format. Defaults to "),n("strong",[t._v("JSON request body")]),t._v(" if left blank.")])]),t._v(" "),n("tr",[n("td",[t._v("Response type")]),t._v(" "),n("td",[t._v("Select the response data format. Defaults to "),n("strong",[t._v("JSON response")]),t._v(" if left blank.")])])])]),t._v(" "),n("h3",{attrs:{id:"output-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),n("p",[t._v("Certain output fields are only available if the recipe is called as an API platform REST endpoint. More information can be found on the "),n("router-link",{attrs:{to:"/api-management.html"}},[t._v("API platform")]),t._v(" documentation.\n\x3c!--")],1),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Called as a REST endpoint")]),t._v(" "),n("th",[t._v("Output field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("Calling job ID")]),t._v(" "),n("td",[t._v("ID of the job in the parent recipe that made the call.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("Calling recipe ID")]),t._v(" "),n("td",[t._v("Id of the parent recipe that made the call.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☒")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("Calling IP address")]),t._v(" "),n("td",[t._v("IP address of the client calling this recipe as a REST endpoint.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☒")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("Access profile")]),t._v(" "),n("td",[t._v("Contains "),n("strong",[t._v("ID")]),t._v(", "),n("strong",[t._v("Name")]),t._v(", and "),n("strong",[t._v("authentication method")]),t._v(" of the access profile used to perform the request.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☒")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("API client")]),t._v(" "),n("td",[t._v("Contains "),n("strong",[t._v("API client ID")]),t._v(" and "),n("strong",[t._v("API client name")]),t._v(" used to perform the request.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☒")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("JWT claims")]),t._v(" "),n("td",[n("em",[t._v("Only available if a JWT token is used")]),t._v("."),n("br"),t._v("Contains "),n("strong",[t._v("Audience")]),t._v(", "),n("strong",[t._v("JWT ID")]),t._v(", "),n("strong",[t._v("Issuer")]),t._v(", and "),n("strong",[t._v("Expiration time")]),t._v(", "),n("strong",[t._v("Not before")]),t._v(" and "),n("strong",[t._v("Issued at")]),t._v(" values of the JWT used to authenticate the request.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☒")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Only if the request type is "),n("strong",[t._v("Raw request body")])]),t._v(" "),n("td",[t._v("Content type")]),t._v(" "),n("td",[n("code",[t._v("Content-type")]),t._v(" header from the incoming request.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☒")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Only if the request type is "),n("strong",[t._v("Raw request body")])]),t._v(" "),n("td",[t._v("Request body (raw)")]),t._v(" "),n("td",[t._v("Full raw request body.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("☑")]),t._v(" "),n("td",[t._v("Recipe input")]),t._v(" "),n("td",[t._v("This will contain the datapills as defined in the response schema.")])])])]),t._v(" "),n("p",[t._v("--\x3e")]),t._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",{attrs:{colspan:"3",width:"40%"}},[t._v("Output field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{attrs:{colspan:"3"}},[t._v("Calling job ID")]),t._v(" "),n("td",[t._v("ID of the job in the parent recipe that made the call.")])]),t._v(" "),n("td",{attrs:{colspan:"3"}},[t._v("Calling recipe ID")]),t._v(" "),n("td",[t._v("ID of the parent recipe that made the call.")]),t._v(" "),n("tr",[n("td",{attrs:{rowspan:"6"}},[n("i",[t._v("Only available if called as an API Platform "),n("b",[t._v("REST endpoint")])])]),t._v(" "),n("td",{attrs:{colspan:"2"}},[t._v("Calling IP address")]),t._v(" "),n("td",[t._v("\n        IP address of the client calling this recipe as a REST endpoint.\n      ")])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("Access profile")]),t._v(" "),n("td",[t._v("\n        Contains "),n("b",[t._v("ID")]),t._v(", "),n("b",[t._v("name")]),t._v(" and "),n("b",[t._v("authentication method")]),t._v(" of the access profile used to perform the request.\n      ")])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("API client")]),t._v(" "),n("td",[t._v("\n        Contains "),n("b",[t._v("API client ID")]),t._v(" and "),n("b",[t._v("API client name")]),t._v(" values to perform the request.\n      ")])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("JWT claims")]),t._v(" "),n("td",[n("i",[t._v("Only available a JWT token is used.")]),n("br"),t._v("\n        Contains "),n("b",[t._v("Audience")]),t._v(", "),n("b",[t._v("JWT ID")]),t._v(", "),n("b",[t._v("Issuer")]),t._v(", and "),n("b",[t._v("Expiration Time")]),t._v(", "),n("b",[t._v("Not before")]),t._v(" and "),n("b",[t._v("Issued At")]),t._v(" values of the JWT used to authenticate the request.\n      ")])]),t._v(" "),n("tr",[n("td",{attrs:{rowspan:"2"}},[n("i",[t._v("Only if request type is "),n("b",[t._v("Raw request body")])])]),t._v(" "),n("td",[t._v("Content type")]),t._v(" "),n("td",[n("code",[t._v("Content-Type")]),t._v(" header value from the incoming request.\n      ")])]),t._v(" "),n("tr",[n("td",[t._v("Request body (raw)")]),t._v(" "),n("td",[t._v("\n        Full raw request body.\n      ")])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"3"}},[t._v("Recipe input")]),t._v(" "),n("td",[t._v("This output object will contain all the fields defined in "),n("b",[t._v("Input schema")]),t._v(".")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);