(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1e3:function(t,e,r){t.exports=r.p+"assets/img/updated-csv-trigger.8921c464.png"},2340:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"new-updated-csv-file-in-directory-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-csv-file-in-directory-trigger"}},[t._v("#")]),t._v(" New/updated CSV file in directory trigger")]),t._v(" "),a("p",[t._v("This triggers picks up new or updated CSV files in a specified folder. New and updated CSV files in subfolders will also be picked up.")]),t._v(" "),a("p",[t._v("Workato collates CSV lines and processes them in batches. The default batch size is "),a("code",[t._v("100")]),t._v(" and max batch size is "),a("code",[t._v("1000")]),t._v(".")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(1e3),alt:"New/updated CSV in directory trigger",width:"2469",height:"1858"}}),t._v(" "),a("em",[t._v("New/updated CSV in directory trigger")])],1),t._v(" "),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Directory")]),t._v(" "),a("td",[t._v("Select the folder that you want to track. You can choose from the dropdown menu or enter the folder path directly.")])]),t._v(" "),a("tr",[a("td",[t._v("Column names")]),t._v(" "),a("td",[t._v("Enter CSV headers. You can enter them manually or provide a sample CSV file.")])]),t._v(" "),a("tr",[a("td",[t._v("Column delimiter")]),t._v(" "),a("td",[t._v("Select the character that separates columns in the CSV file.")])]),t._v(" "),a("tr",[a("td",[t._v("Contains header row")]),t._v(" "),a("td",[t._v("Indicate if there is a header line.")])]),t._v(" "),a("tr",[a("td",[t._v("Batch size")]),t._v(" "),a("td",[t._v("Number of CSV rows to process per batch. The max batch size is "),a("code",[t._v("1000")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("Expected encoding")]),t._v(" "),a("td",[t._v("Expected encoding of the CSV files.")])]),t._v(" "),a("tr",[a("td",[t._v("Keep track of columns by")]),t._v(" "),a("td",[t._v("Configure this if your CSV content does not have a fixed column order.")])]),t._v(" "),a("tr",[a("td",[t._v("Quote character")]),t._v(" "),a("td",[t._v("The character used to quote CSV cell values.")])])])]),t._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("p",[t._v("The output of this action is a "),a("strong",[t._v("list of records")]),t._v(", with each record containing the schema as defined in the "),a("strong",[t._v("CSV column names")]),t._v(". As this is list datapill, you would have to use a "),a("router-link",{attrs:{to:"/recipes/steps.html#repeat-step"}},[t._v("repeat action")]),t._v(" to iterate through the each record.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("File name")]),t._v(" "),a("td",[t._v("The filename of the CSV.")])]),t._v(" "),a("tr",[a("td",[t._v("First batch")]),t._v(" "),a("td",[t._v("Whether this is the first batch of CSV rows.")])]),t._v(" "),a("tr",[a("td",[t._v("Last batch")]),t._v(" "),a("td",[t._v("Whether this is the last batch of CSV rows.")])]),t._v(" "),a("tr",[a("td",[t._v("Lines")]),t._v(" "),a("td",[t._v("This is a "),a("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List datapill")]),t._v(", representing the list of records.")],1)]),t._v(" "),a("tr",[a("td",[a("em",[t._v("List schema")])]),t._v(" "),a("td",[t._v("Datapills defined by your CSV column names.")])]),t._v(" "),a("tr",[a("td",[t._v("List size")]),t._v(" "),a("td",[t._v("Total number of rows.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);