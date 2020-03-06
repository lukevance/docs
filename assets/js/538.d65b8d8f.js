(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{2562:function(t,e,a){"use strict";a.r(e);var r=a(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oem-vendor-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oem-vendor-apis"}},[t._v("#")]),t._v(" OEM Vendor APIs")]),t._v(" "),a("p",[t._v("Workato's OEM vendor platform APIs allow OEM partners to control and even automate the provisioning of customer accounts and assets within them like recipes and connections.")]),t._v(" "),a("p",[t._v("The requests are authenticated by the credentials of the partner's OEM vendor account. To start using the APIs listed below, the OEM vendor Workato account has to first be assigned the "),a("code",[t._v("oem_vendor")]),t._v(" privilege.")]),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("All API requests must contain:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("X-USER-TOKEN")]),t._v(" and "),a("code",[t._v("X-USER-EMAIL")]),t._v(" in the request headers\nOR")]),t._v(" "),a("li",[a("code",[t._v("user_token")]),t._v(" & "),a("code",[t._v("user_email")]),t._v(" in the query parameters")])]),t._v(" "),a("p",[t._v("For all OEM vendor APIs, the token and email belong to the main OEM account.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("user_token")]),t._v("/"),a("code",[t._v("X-USER-TOKEN")]),t._v(" can be found in the "),a("a",{attrs:{href:"https://www.workato.com/users/current/edit#api_key",target:"_blank",rel:"noopener noreferrer"}},[t._v("settings page"),a("OutboundLink")],1),t._v(". Alternatively, navigate to account settings by clicking on "),a("code",[t._v("Account Settings")]),t._v(" in the dropdown of the top right of the homepage in Workato. The API key can be found in the left navigation panel in the subsequent page.")]),t._v(" "),a("h3",{attrs:{id:"supported-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-formats"}},[t._v("#")]),t._v(" Supported Formats")]),t._v(" "),a("p",[t._v("Workato API supports sending request body with the "),a("code",[t._v("application/json")]),t._v(" content-type. All replies are also encoded in "),a("code",[t._v("application/json; charset=utf-8")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"http-response-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-response-codes"}},[t._v("#")]),t._v(" HTTP response codes")]),t._v(" "),a("table",{staticClass:"api-input"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample reply")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("200")])]),t._v(" "),a("td",[t._v("Success")]),t._v(" "),a("td",[a("code",[t._v('{"Success": true}')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("400")])]),t._v(" "),a("td",[t._v("Bad request")]),t._v(" "),a("td",[a("code",[t._v('{"message": "Bad request"}')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("401")])]),t._v(" "),a("td",[t._v("Unauthorized")]),t._v(" "),a("td",[a("code",[t._v('{"message": "Unauthorized"}')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("404")])]),t._v(" "),a("td",[t._v("Not found")]),t._v(" "),a("td",[a("code",[t._v('{"message": "Not found"}')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("500")])]),t._v(" "),a("td",[t._v("Server error")]),t._v(" "),a("td",[a("code",[t._v('{"message":"Server error","id":"3188c2d0-29a4-4080-908e-582e7ed82580"}')])])])])]),t._v(" "),a("h2",{attrs:{id:"connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[t._v("#")]),t._v(" Connectors")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/adapters.html#list-connector-metadata"}},[t._v("/api/integrations")])],1),t._v(" "),a("td",[t._v("Query connector metadata.")])])])]),t._v(" "),a("h2",{attrs:{id:"connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[t._v("#")]),t._v(" Connections")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/connections.html#list-connections"}},[t._v("/api/managed_users/:managed_user_id/connections")])],1),t._v(" "),a("td",[t._v("Returns a list of connections in a customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/workato-api/connections.html"}},[t._v("/api/managed_users/:id/connections")])],1),t._v(" "),a("td",[t._v("Allows the OEM vendor to add a shell connection in a customer account.")])])])]),t._v(" "),a("h2",{attrs:{id:"picklists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picklists"}},[t._v("#")]),t._v(" Picklists")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/picklists.html"}},[t._v("/managed_users/:id/connections/:connection_id/pick_list")]),t._v(")")],1),t._v(" "),a("td",[t._v("Obtains a list of picklist values for a specified connection in an OEM customer account.")])])])]),t._v(" "),a("h2",{attrs:{id:"folders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folders"}},[t._v("#")]),t._v(" Folders")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/folders.html"}},[t._v("/api/managed_users/:id/folders")])],1),t._v(" "),a("td",[t._v("Creates a new folder in a customer account.")])])])]),t._v(" "),a("h2",{attrs:{id:"manage-customer-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-customer-accounts"}},[t._v("#")]),t._v(" Manage customer accounts")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/managed-users.html#create-customer-account"}},[t._v("/api/managed_users")])],1),t._v(" "),a("td",[t._v("Create customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/managed-users.html#get-customer-account"}},[t._v("/api/managed_users/:id")])],1),t._v(" "),a("td",[t._v("Get customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/managed-users.html#upgrade-customer-account"}},[t._v("/api/managed_users/:id/upgrade")])],1),t._v(" "),a("td",[t._v("Upgrade customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/managed-users.html#downgrade-customer-account"}},[t._v("/api/managed_users/:id/downgrade")])],1),t._v(" "),a("td",[t._v("Downgrade customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/managed-users.html#add-member-to-customer-account"}},[t._v("/api/managed_users/:id/member")])],1),t._v(" "),a("td",[t._v("Add member to customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("DELETE")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/managed-users.html#remove-member-from-customer-account"}},[t._v("/api/managed_users/:id/member")])],1),t._v(" "),a("td",[t._v("Remove member from customer account.")])])])]),t._v(" "),a("h2",{attrs:{id:"recipes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recipes"}},[t._v("#")]),t._v(" Recipes")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/recipes.html#list-recipes-in-a-customer-account"}},[t._v("/api/managed_users/:id/recipes")])],1),t._v(" "),a("td",[t._v("List recipes belonging to a customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/recipes.html#search-for-public-recipes"}},[t._v("/api/recipes/search")])],1),t._v(" "),a("td",[t._v("Search for public recipes.")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/recipes.html#start-recipe-in-a-customer-account"}},[t._v("/api/managed_users/:managed_user_id/recipes/:recipe_id/start")])],1),t._v(" "),a("td",[t._v("Start a recipe in a customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/recipes.html#stop-recipe-in-a-customer-account"}},[t._v("/api/managed_users/:managed_user_id/recipes/:recipe_id/stop")])],1),t._v(" "),a("td",[t._v("Stop a recipe in a customer account.")])])])]),t._v(" "),a("h2",{attrs:{id:"recipe-lifecycle-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recipe-lifecycle-management"}},[t._v("#")]),t._v(" Recipe lifecycle management")]),t._v(" "),a("p",[t._v("The endpoints listed below are OEM vendor only endpoints for importing a package into a customer account.")]),t._v(" "),a("p",[t._v("The APIs for exporting a package are available "),a("router-link",{attrs:{to:"/workato-api.html#recipe-lifecycle-management"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/recipe-lifecycle-management.html#import-package-into-a-customer-account"}},[t._v("/api/managed_users/:id/imports")])],1),t._v(" "),a("td",[t._v("Import package into a folder in a customer account.")])]),t._v(" "),a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/oem/oem-api/recipe-lifecycle-management.html#get-package-status"}},[t._v("/api/managed_users/:id/recipes")])],1),t._v(" "),a("td",[t._v("Get status of an imported package.")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);