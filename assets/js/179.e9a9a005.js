(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{139:function(t,e,a){t.exports=a.p+"assets/img/list_datapill_in_output_tree.20c81ae4.png"},2232:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mysql-insert-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-insert-actions"}},[t._v("#")]),t._v(" MySQL - Insert actions")]),t._v(" "),r("h2",{attrs:{id:"insert-row"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#insert-row"}},[t._v("#")]),t._v(" Insert row")]),t._v(" "),r("p",[t._v("This action inserts a single row into the selected table.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(678),alt:"Insert row action",width:"1492",height:"840"}}),t._v(" "),r("em",[t._v("Insert row action")])],1),t._v(" "),r("h3",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),r("p",[t._v("First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),r("h3",{attrs:{id:"columns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),r("p",[t._v("Next, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to insert datapills.")]),t._v(" "),r("h2",{attrs:{id:"insert-batch-of-rows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#insert-batch-of-rows"}},[t._v("#")]),t._v(" Insert batch of rows")]),t._v(" "),r("p",[t._v("This action allows you to insert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to MySQL. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(679),alt:"Insert batch of rows action",width:"1482",height:"1052"}}),t._v(" "),r("em",[t._v("Insert batch of rows action")])],1),t._v(" "),r("h3",{attrs:{id:"table-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-2"}},[t._v("#")]),t._v(" Table")]),t._v(" "),r("p",[t._v("Just like with the single row insert action, you need to select the target table first.")]),t._v(" "),r("h3",{attrs:{id:"rows-source-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rows-source-list"}},[t._v("#")]),t._v(" Rows source list")]),t._v(" "),r("p",[t._v("Unlike the "),r("strong",[t._v("Insert row")]),t._v(" action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the "),r("em",[t._v("source")]),t._v(" of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(139),alt:"A list datapill from the datatree",width:"722",height:"944"}}),t._v(" "),r("em",[t._v("A list datapill from the datatree")])],1),t._v(" "),r("p",[t._v("If you do not map a list datapill to this field, this action will insert only 1 row and will behave like the "),r("strong",[t._v("Insert row")]),t._v(" action.")]),t._v(" "),r("h3",{attrs:{id:"columns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#columns-2"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),r("p",[t._v("Finally, you will need to map the required fields from the output datatree here to insert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.")]),t._v(" "),r("p",[t._v("Refer to the "),r("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List management")]),t._v(" guide for more information about working with batches.")],1)])}),[],!1,null,null,null);e.default=s.exports},678:function(t,e,a){t.exports=a.p+"assets/img/insert-row-action.f53500b2.png"},679:function(t,e,a){t.exports=a.p+"assets/img/insert-rows-batch-action.7c38a9ae.png"}}]);