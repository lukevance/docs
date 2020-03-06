(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{2501:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"poll-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#poll-trigger"}},[t._v("#")]),t._v(" Poll Trigger")]),t._v(" "),a("p",[t._v("Records (tickets, leads, items etc.) are called events in a poll. A poll trigger constantly executes a poll block for new events at fixed time intervals. This time interval depends on a user's subscription (5 or 10 minutes). At the same time, it is also able to support pagination. This is useful to prevent request timeouts when making requests with large response results. A trigger can execute immediate consecutive polls to retrieve events from successive pages.")]),t._v(" "),a("p",[t._v("No need to define any type to use the classic trigger. In the example below, we go through how you would create a "),a("code",[t._v("Updated ticket")]),t._v(" trigger as well as the various components you need to define in the trigger object to create a polling trigger.")]),t._v(" "),a("h2",{attrs:{id:"sample-code-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-code-snippet"}},[t._v("#")]),t._v(" Sample code snippet")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Freshdesk connector'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    updated_ticket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'since'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last_updated_since"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        updated_since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last_updated_since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'since'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iso8601\n\n        tickets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helpdesk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('.freshdesk.com/api/v2/tickets.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n                  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updated_at'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         order_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         per_page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" page_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        next_updated_since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updated_at'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unless")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blank"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          next_poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" next_updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          can_poll_more"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" page_size\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      dedup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\n      output_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("object_definitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ticket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now lets go through the various blocks that are required in every polling trigger.")]),t._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" "),a("code",[t._v("input_fields:")])]),t._v(" "),a("p",[t._v("In this object, you can define the input fields that end users will have to fill in to begin running your trigger. Over here, we have defined a single input field called 'since'. You'll be able to add more input fields by adding more hashes into the array.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("input_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'since'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("While we have kept this example relatively simple, we also offer capabilities to dynamically generate input fields as well as store these input field definitions in "),a("code",[t._v("object definitions")]),t._v(" to keep your custom connector code DRY.")])]),t._v(" "),a("h2",{attrs:{id:"poll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[t._v("#")]),t._v(" "),a("code",[t._v("poll:")])]),t._v(" "),a("p",[t._v("This is analogous to the "),a("code",[t._v("execute:")]),t._v(" block in actions. Over here, we do all the heavy lifting of sending out requests every polling interval and also define the logic of the trigger.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last_updated_since"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n  updated_since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last_updated_since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'since'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iso8601\n\n  tickets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helpdesk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('.freshdesk.com/api/v2/tickets.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updated_at'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   order_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   per_page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" page_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  next_updated_since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updated_at'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unless")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blank"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    next_poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" next_updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    can_poll_more"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" page_size\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("connection")]),t._v(" "),a("td",[a("code",[t._v("connection")]),t._v(" object, frequently used to access domain or subdomain information from the user.")])]),t._v(" "),a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[a("code",[t._v("input")]),t._v(" object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from.")])]),t._v(" "),a("tr",[a("td",[t._v("last_updated_since")]),t._v(" "),a("td",[t._v('A cursor "stored" from a previous poll. This is crucial to a good trigger design. It is used to determine where the last poll stopped and where to begin next. As an example, it is usually given the last (latest) "updated"/"created" time. When the trigger is first started, this value is '),a("code",[t._v("nil")]),t._v(".")])])])]),t._v(" "),a("p",[t._v("A ruby hash is returned in each poll. This hash is expected to follow the same structure below.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    next_poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" next_updated_since"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    can_poll_more"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tickets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" page_size\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("The array of events, or data, should be passed into the "),a("code",[t._v("events")]),t._v(" key. Each index in the array will be processed as a separate job.")])]),t._v(" "),a("li",[a("p",[t._v("At the same time, a cursor is saved in "),a("code",[t._v("next_page")]),t._v("/"),a("code",[t._v("next_poll")]),t._v(" (depending on the trigger type). This cursor provides information about where the current poll stopped, and used in the next poll.")])]),t._v(" "),a("li",[a("p",[t._v("A classic type trigger has an additional boolean key "),a("code",[t._v("can_poll_more")]),t._v(", which can be defined to conditionally fire immediate polls for multi-page results.")])])]),t._v(" "),a("p",[a("strong",[t._v("Important")]),t._v(":\nThis trigger type does not have automatic-immediate polling. Immediate polling is determined by "),a("code",[t._v("can_poll_more")]),t._v(", which is a boolean value for whether an immediate poll should be made.")]),t._v(" "),a("p",[t._v("Example JSON response:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-08-13T00:53:44Z"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-14T02:25:00Z"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("When a get request receives this JSON response, it looks up the array for the last record (latest record) and passes it as the cursor for the next poll. It also checks the response array size. If it is equal to the size limit, it is likely that there are more records matching this request in consequtive pages. Hence the expression given to "),a("code",[t._v("can_poll_more")]),t._v(" evaluates to true and invokes an immediate successive poll. This loop continues until response array size is smaller than page limit.")]),t._v(" "),a("p",[t._v("At the end of the loop. The last (latest) created date is passed as "),a("code",[t._v("next_poll")]),t._v(". This value will be used in the next poll cycle to pick up new records.")]),t._v(" "),a("h2",{attrs:{id:"dedup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dedup"}},[t._v("#")]),t._v(" "),a("code",[t._v("dedup:")])]),t._v(" "),a("p",[t._v('The dedup block is used to identify individual events. It is given a single argument "event", which corresponds to individual elements in the records array passed into "events".')]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("dedup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ticket")]),t._v(" "),a("td",[t._v("A typical dedup input is "),a("code",[t._v("event[‘id’]")]),t._v(" where the "),a("code",[t._v("event")]),t._v(" argument name can be replaced to make the code more readable.")])])])]),t._v(" "),a("p",[t._v("In some instances, a record needs to be processed as separate events. A typical scenario is updated records. To do this, append updated timestamp field to the dedup expression like so.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("dedup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ticket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v('With this, 2 occurence of a record with the same "ID" but with different "updated_at" values will be recorded as separate events.')]),t._v(" "),a("h2",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" "),a("code",[t._v("output_fields:")])]),t._v(" "),a("p",[t._v("You can define output_fields in the same way you define input_fields. This time, however, we have used something called object_definitions to define the output schema, where we defined the schema for the "),a("code",[t._v("ticket")]),t._v(" object once and can continue to reuse this same schema by referencing it in multiple areas in the custom connector code.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("output_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("object_definitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("object_definitions")]),t._v(" "),a("td",[t._v("This allows us to access a static or dynamic definition declared in the object_definitions block")])])])]),t._v(" "),a("p",[t._v("This is something we will cover later on in our "),a("router-link",{attrs:{to:"/developing-connectors/sdk/object-definition.html"}},[t._v("object definitions")]),t._v(" section.")],1),t._v(" "),a("h2",{attrs:{id:"sample-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-output"}},[t._v("#")]),t._v(" "),a("code",[t._v("sample_output:")])]),t._v(" "),a("p",[t._v("This is an optional block that populates the datapills defined in the "),a("code",[t._v("output_fields:")]),t._v(" block with some sample information for users. It is exposed as grey text next to datapills. Check out "),a("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" section on how to use sample_outputs.")],1),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("sample_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    accounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format_api_output_field_names"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/accounts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       return_object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shallow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[a("DocImage",{attrs:{src:e(26),alt:"Sample output",width:"1082",height:"1118"}}),t._v(" "),a("em",[t._v("Sample outputs make your datapills more usable by giving some context to users.")])],1),t._v(" "),a("h2",{attrs:{id:"other-optional-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-optional-blocks"}},[t._v("#")]),t._v(" Other optional blocks")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Block")]),t._v(" "),a("th",{attrs:{width:"20%"}},[t._v("Example")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("title:")])]),t._v(" "),a("td",[a("code",[t._v('title: "This is the title of the action"')])]),t._v(" "),a("td",[t._v("This shows up as the main action/trigger name and override the name given to the action block. This is useful in naming actions and triggers that have special characters"),a("br"),t._v(" "),a("img",{attrs:{src:e(27)}})])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("subtitle:")])]),t._v(" "),a("td",[a("code",[t._v('subtitle: "This is a subtitle"')])]),t._v(" "),a("td",[t._v("This shows up below the main action name when users are looking at the dropdown of possible actions"),a("br"),t._v(" "),a("img",{attrs:{src:e(28)}})])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("description:")])]),t._v(" "),a("td",[a("code",[t._v('description: "This is a description"')])]),t._v(" "),a("td",[t._v("This is what shows up as the summary of an action when looking at the recipe."),a("br"),t._v(" "),a("img",{attrs:{src:e(29)}})])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("help:")])]),t._v(" "),a("td",[a("code",[t._v('help: "This is a help text"')])]),t._v(" "),a("td",[t._v("This shows up as the help hint when users are configuring the action. Use this to detail any important information the user should have"),a("br"),t._v(" "),a("img",{attrs:{src:e(30)}})])])])]),t._v(" "),a("h2",{attrs:{id:"other-trigger-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-trigger-types"}},[t._v("#")]),t._v(" Other trigger types")]),t._v(" "),a("p",[t._v("Check out the other trigger types we support. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/trigger.html"}},[t._v("Go back to our list of triggers.")])],1),t._v(" "),a("h2",{attrs:{id:"next-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),a("p",[t._v("If you're already familiar with the trigger types we support, check out the various types of HTTP requests that our SDK supports as well as how to use them in your "),a("code",[t._v("connection:")]),t._v(", "),a("code",[t._v("actions:")]),t._v(" and "),a("code",[t._v("triggers:")]),t._v(" blocks. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/http-requests-and-response-handling.html"}},[t._v("Go to our HTTP methods documentation")]),t._v(" or check our our "),a("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" for some tips on building triggers.")],1)])}),[],!1,null,null,null);s.default=n.exports},26:function(t,s,e){t.exports=e.p+"assets/img/sample_output_sample.271867aa.png"},27:function(t,s,e){t.exports=e.p+"assets/img/title.5d31000a.png"},28:function(t,s,e){t.exports=e.p+"assets/img/subtitle.af1f85c5.png"},29:function(t,s,e){t.exports=e.p+"assets/img/description.4655ec2d.png"},30:function(t,s,e){t.exports=e.p+"assets/img/help.55bf1b97.png"}}]);