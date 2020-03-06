(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{121:function(t,e,a){t.exports=a.p+"assets/img/use_datapill_in_where_complex.693b1ad9.png"},2142:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"google-bigquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-bigquery"}},[t._v("#")]),t._v(" Google BigQuery")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.google.com/bigquery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google BigQuery"),s("OutboundLink")],1),t._v(" is a serverless, highly-scalable, and cost-effective cloud data warehouse with an in-memory BI Engine and machine learning built in. The Workato connector to Google BigQuery allows you to automate various actions on datasets in your BigQuery instance such as inserting rows or performing queries on existing datasets. You are also able to trigger recipes off new rows in datasets.")]),t._v(" "),s("h2",{attrs:{id:"how-to-connect-to-bigquery-on-workato"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-bigquery-on-workato"}},[t._v("#")]),t._v(" How to connect to BigQuery on Workato")]),t._v(" "),s("p",[t._v("The BigQuery connector uses OAuth2 to authenticate with BigQuery.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(427),alt:"Configuring BigQuery connection",width:"1310",height:"280"}})],1),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Connection name")]),t._v(" "),s("td",[t._v("Give this BigQuery connection a unique name that identifies which BigQuery instance it is connected to.")])])])]),t._v(" "),s("h2",{attrs:{id:"rate-limits-on-bigquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rate-limits-on-bigquery"}},[t._v("#")]),t._v(" Rate limits on BigQuery")]),t._v(" "),s("p",[t._v("We highly recommend using batch actions to insert multiple rows at a time. "),s("a",{attrs:{href:"https://cloud.google.com/bigquery/quotas#standard_tables",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigQuery's rate limits"),s("OutboundLink")],1),t._v(" on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.")]),t._v(" "),s("h2",{attrs:{id:"working-with-the-bigquery-connector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-bigquery-connector"}},[t._v("#")]),t._v(" Working with the BigQuery connector")]),t._v(" "),s("p",[t._v("After establishing a connection with the BigQuery connector, most actions will require some additional parameter inputs.")]),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Project")]),t._v(" "),s("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),s("tr",[s("td",[t._v("Dataset")]),t._v(" "),s("td",[t._v("The dataset which the action or trigger will pull the possible tables from.")])]),t._v(" "),s("tr",[s("td",[t._v("Table")]),t._v(" "),s("td",[t._v("The table inside the dataset.")])]),t._v(" "),s("tr",[s("td",[t._v("Location")]),t._v(" "),s("td",[t._v("The geographical location of where the job should be run.")])])])]),t._v(" "),s("h3",{attrs:{id:"single-row-vs-batch-of-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-row-vs-batch-of-rows"}},[t._v("#")]),t._v(" Single row vs batch of rows")]),t._v(" "),s("p",[t._v("The BigQuery connector can read or write to your database either as a single row or in batches. When using batch read actions/triggers, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 50000, with 50000 being the maximum batch size.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(428),alt:"Batch trigger inputs",width:"2470",height:"962"}}),t._v(" "),s("em",[t._v("Batch trigger inputs")])],1),t._v(" "),s("p",[t._v("Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(429),alt:"Single row output",width:"428",height:"330"}}),t._v(" "),s("em",[t._v("Single row output")])],1),t._v(" "),s("p",[t._v("However, a trigger that processes rows in batches will output them as an array of rows. The "),s("kbd",[t._v("Rows")]),t._v(" datapill indicates that the output is a list containing data for each row in that batch.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(430),alt:"Batch trigger output",width:"434",height:"584"}}),t._v(" "),s("em",[t._v("Batch trigger output")])],1),t._v(" "),s("p",[t._v("As a result, the output of batch triggers/actions needs to be handled differently. In cases where there are downstream batch actions which accept "),s("em",[t._v("Rows source list")]),t._v(" input fields, you'll be able to map the rows array pill to it to tell Workato you want to map the entire array.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(431),alt:"Using batch trigger output",width:"2444",height:"1016"}}),t._v(" "),s("em",[t._v("Using batch trigger output")])],1),t._v(" "),s("h3",{attrs:{id:"where-condition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),s("p",[t._v("This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:")]),t._v(" "),s("ul",[s("li",[t._v("filter rows to be picked up in triggers")]),t._v(" "),s("li",[t._v("filter rows in "),s("strong",[t._v("Select rows")]),t._v(" action")]),t._v(" "),s("li",[t._v("filter rows to be deleted in "),s("strong",[t._v("Delete rows")]),t._v(" action")])]),t._v(" "),s("p",[t._v("This clause will be used as a "),s("code",[t._v("WHERE")]),t._v(" statement in each request. This should follow basic SQL syntax. Refer to this "),s("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigQuery documentation"),s("OutboundLink")],1),t._v(" for a full list of rules for writing SQL statements compatible with BigQuery.")]),t._v(" "),s("h4",{attrs:{id:"simple-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-statements"}},[t._v("#")]),t._v(" Simple statements")]),t._v(" "),s("p",[t._v("Knowing the data types of the column in BigQuery are important to build working queries. When comparing string values, values must be enclosed in single quotes ("),s("code",[t._v("''")]),t._v(") and columns used must exist in the table. When comparing integer values, the supplied value should not be enclosed in single quotes.")]),t._v(" "),s("p",[t._v("A simple "),s("code",[t._v("WHERE")]),t._v(" condition to filter rows based on values in a single column looks like this.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("string_column "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USD'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" integer_column "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),t._v("\n")])])]),s("p",[t._v("If used in a "),s("strong",[t._v("Select rows")]),t._v(" action, this "),s("code",[t._v("WHERE")]),t._v(" condition will return all rows that have the value 'USD' in the "),s("code",[t._v("currency")]),t._v(" column. Just remember to wrap datapills with single quotes in your inputs.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(432),alt:"Using datapills in WHERE condition",width:"2492",height:"796"}}),t._v(" "),s("em",[t._v("Using datapills in "),s("code",[t._v("WHERE")]),t._v(" condition")])],1),t._v(" "),s("h4",{attrs:{id:"complex-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complex-statements"}},[t._v("#")]),t._v(" Complex statements")]),t._v(" "),s("p",[t._v("Your "),s("code",[t._v("WHERE")]),t._v(" condition can also contain subqueries. The following query can be used on the "),s("code",[t._v("users")]),t._v(" table.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" zendesk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tickets "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" priority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When used in a "),s("strong",[t._v("Delete rows")]),t._v(" action, this will delete all rows in the "),s("code",[t._v("users")]),t._v(" table where at least one associated row in the "),s("code",[t._v("tickets")]),t._v(" table has a value of 2 in the "),s("code",[t._v("priority")]),t._v(" column.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(121),alt:"Using datapills in WHERE condition with subquery",width:"2200",height:"536"}}),t._v(" "),s("em",[t._v("Using datapills in "),s("code",[t._v("WHERE")]),t._v(" condition with subquery")])],1),t._v(" "),s("h3",{attrs:{id:"defining-your-output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-your-output-fields"}},[t._v("#")]),t._v(" Defining your output fields")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(433),alt:"Export CSV from BigQuery",width:"3360",height:"1720"}})],1),t._v(" "),s("p",[t._v("Define your output fields easily using the output schema designer by using our CSV uploader. Workato is unable to introspect schema automatically when your query runs for too long, processes too many bytes or contains datapills. In these cases, simply run a sample query in the BigQuery console like above and export a CSV. Upload this CSV into the schema wizard and automatically generate all fields for you.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(434),alt:"CSV schema wizard",width:"1413",height:"860"}})],1)])}),[],!1,null,null,null);e.default=n.exports},427:function(t,e,a){t.exports=a.p+"assets/img/connection.672da5ed.png"},428:function(t,e,a){t.exports=a.p+"assets/img/batch_trigger_input.acca6ac0.png"},429:function(t,e){t.exports="data:image/png;base64,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"},430:function(t,e,a){t.exports=a.p+"assets/img/batch_trigger_output.b6db1aa6.png"},431:function(t,e,a){t.exports=a.p+"assets/img/using_batch_output.b91403a8.png"},432:function(t,e,a){t.exports=a.p+"assets/img/use_datapill_in_where.3ceafb52.png"},433:function(t,e,a){t.exports=a.p+"assets/img/export-results.41b8337a.png"},434:function(t,e,a){t.exports=a.p+"assets/img/csv-wizard.431521ab.gif"}}]);