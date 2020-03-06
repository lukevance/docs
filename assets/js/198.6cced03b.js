(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1082:function(e,t,a){e.exports=a.p+"assets/img/response_body_input_field.0550cd58.png"},1083:function(e,t,a){e.exports=a.p+"assets/img/individual_field_pop_up.b2fb4cda.png"},1084:function(e,t,a){e.exports=a.p+"assets/img/sample_json_pop_up.48bb1579.png"},2363:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"splunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splunk"}},[e._v("#")]),e._v(" Splunk")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.splunk.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Splunk"),s("OutboundLink")],1),e._v(" is software that enables monitoring, reporting and analyzing of real-time data to deliver operational intelligence for security, IT and business.")]),e._v(" "),s("h2",{attrs:{id:"working-with-the-splunk-connector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-splunk-connector"}},[e._v("#")]),e._v(" Working with the Splunk connector")]),e._v(" "),s("h3",{attrs:{id:"run-query-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-query-action"}},[e._v("#")]),e._v(" Run query action")]),e._v(" "),s("p",[e._v("This action lets you run an ad hoc query in your Splunk instance, from a Workato recipe. We cover the input fields in this action in the following segments:")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"#output-field-list"}},[e._v("Output field list")])])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#search-query"}},[e._v("Search query")])])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#earliest-latest-time"}},[e._v("Earliest/latest time")])])])]),e._v(" "),s("h4",{attrs:{id:"output-field-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-field-list"}},[e._v("#")]),e._v(" Output field list")]),e._v(" "),s("p",[e._v("Every Splunk query has an expected response. When working with Splunk queries on Workato, you will need to define this response as output schema for the function being called. This output schema defined will be used to build the "),s("router-link",{attrs:{to:"/workato-concepts.html#datatree-and-datapills"}},[e._v("output datatree")]),e._v(" for the action. This datatree allows you to map the variables returned from the Splunk query in subsequent recipe actions.")],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1082),alt:"Schema Designer",width:"1786",height:"1242"}}),e._v(" "),s("em",[e._v("Response body input field")])],1),e._v(" "),s("p",[e._v("There are 2 ways to define this output schema:")]),e._v(" "),s("ol",[s("li",[e._v("Add individual fields")]),e._v(" "),s("li",[e._v("Use sample JSON")])]),e._v(" "),s("h5",{attrs:{id:"_1-add-individual-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-individual-fields"}},[e._v("#")]),e._v(" 1. Add individual fields")]),e._v(" "),s("p",[e._v("Click on "),s("code",[e._v("+ Add new field")]),e._v(" to bring up the following schema designer widget.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1083),alt:"Single field pop up",width:"1782",height:"1228"}}),e._v(" "),s("em",[e._v("Schema designer widget (Single field)")])],1),e._v(" "),s("p",[e._v("Define the field name and type for each field returned from this search. Click on "),s("code",[e._v("Add field")]),e._v(" to update the output schema with this new field.")]),e._v(" "),s("h5",{attrs:{id:"_2-use-sample-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-use-sample-json"}},[e._v("#")]),e._v(" 2. Use sample JSON")]),e._v(" "),s("p",[e._v("Click on "),s("code",[e._v("generate from JSON sample")]),e._v(" to bring up the following schema designer widget.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1084),alt:"Sample JSON pop up",width:"1784",height:"1234"}}),e._v(" "),s("em",[e._v("Schema designer widget (JSON)")])],1),e._v(" "),s("p",[e._v("If you have a sample JSON response for your query, you can simply paste it in the widget to generate the output datatree. The schema will be automatically generated into the Workato schema definition structure. An example JSON is as follows.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"category"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sales"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"count"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"percent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("29.71")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h4",{attrs:{id:"search-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-query"}},[e._v("#")]),e._v(" Search query")]),e._v(" "),s("p",[e._v("Provide the Splunk query to run here. Refer to the "),s("a",{attrs:{href:"https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Usethesearchlanguage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Search Tutorial"),s("OutboundLink")],1),e._v(" by Splunk for more details.")]),e._v(" "),s("h4",{attrs:{id:"earliest-latest-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#earliest-latest-time"}},[e._v("#")]),e._v(" Earliest/latest time")]),e._v(" "),s("p",[e._v("Events stored in Splunk are saved together with its timestamp (time when the event occurred) as the default field "),s("code",[e._v("_time")]),e._v(" in UNIX time notation. Search queries generally contain a time period "),s("code",[e._v("earliest")]),e._v(" or "),s("code",[e._v("latest")]),e._v(", in order to search for events with timestamp beginning/ending, or between the specified timestamps.")]),e._v(" "),s("p",[e._v("Refer to the "),s("a",{attrs:{href:"https://docs.splunk.com/Documentation/SplunkCloud/6.6.3/SearchReference/SearchTimeModifiers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time Modifiers Documentation"),s("OutboundLink")],1),e._v(" by Splunk for more details.")])])}),[],!1,null,null,null);t.default=r.exports}}]);