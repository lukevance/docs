(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{2465:function(e,o,t){"use strict";t.r(o);var r=t(0),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"workato-s-advanced-connector-building-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workato-s-advanced-connector-building-guide"}},[e._v("#")]),e._v(" Workato's advanced connector building guide")]),e._v(" "),t("p",[e._v("Here is a final guide that focuses on the usability and the code quality of a connector. We will be going through exercises that can help you plan out robust connectors as well as guidelines on writing connector code. At this point, we assume that you have read through the basics of connector building found over "),t("router-link",{attrs:{to:"/developing-connectors/sdk.html"}},[e._v("here.")])],1),e._v(" "),t("p",[e._v("In this guide, we introduce the concept of object-based connectors, something that you should have seen before if you have used NetSuite, Coupa, Salesforce or numerous other connectors on Workato. Object-based connectors are ones that reduce the amount of clutter by allowing users to first select a verb such as “Create” or “Update” before selecting the object they want to create or update.")]),e._v(" "),t("h2",{attrs:{id:"what-should-i-expect-to-gain-from-this-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-should-i-expect-to-gain-from-this-guide"}},[e._v("#")]),e._v(" What should I expect to gain from this guide?")]),e._v(" "),t("p",[e._v("This guide should help organize your thoughts around building connectors that are usable by a wide audience. While custom connectors could be used as a quick way for your team to connect to unsupported web APIs on Workato, this guide looks at a sustainable approach of connector building. Workato also allows users from our community to promote their custom connectors to become platform-wide connectors - ones that can be found and used by anyone on the platform.")]),e._v(" "),t("p",[e._v("If you're reading this guide to build a connector on Workato to your own web API, one great resource would be this guide by google over "),t("a",{attrs:{href:"https://cloud.google.com/apis/design/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" which goes through resource-oriented API designs. Well built APIs greatly ease the connector building experience as well as integration experience for users of your application when creating recipes on Workato.")]),e._v(" "),t("h2",{attrs:{id:"looking-to-submit-your-custom-connector-to-our-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looking-to-submit-your-custom-connector-to-our-platform"}},[e._v("#")]),e._v(" Looking to submit your custom connector to our platform?")]),e._v(" "),t("p",[e._v("If you're building this connector to be accessible by our active community of Workato chefs, head over to our "),t("a",{attrs:{href:"https://support.workato.com/support/tickets/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("support site to submit a ticket"),t("OutboundLink")],1),e._v(". We'll route you to the proper channels and also set up some time to review your connector.")]),e._v(" "),t("p",[t("strong",[e._v("Expect to see the following benefits:")])]),e._v(" "),t("ol",[t("li",[e._v("Increased usage of your API for your customers as they integrate with Workato")]),e._v(" "),t("li",[e._v("More leads for your services as users on Workato are constantly searching for new business applications that make their lives easier")]),e._v(" "),t("li",[e._v("Greater exposure to integration use cases from our fantastic community")])]),e._v(" "),t("h2",{attrs:{id:"object-based-connectors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-based-connectors"}},[e._v("#")]),e._v(" Object-based connectors")]),e._v(" "),t("p",[e._v("You may find yourself wondering what object-based connectors are in the first place but before that we must first clarify what resources and procedures are in applications.")]),e._v(" "),t("p",[e._v("When looking at a cloud based application, we often see that most applications have several resources at their core. These resources hold data in structures that users of the application can interact with and appreciate. For example, a resource in a banking application could be a "),t("code",[e._v("Customer")]),e._v(" which contains all relevant information to a customer in the bank.")]),e._v(" "),t("p",[e._v("On the other hand, applications also provide a whole host of other services beyond holding data in certain organized resources for their users. These processes that applications perform on resources in their systems also create large amounts of business value for their users. For example, a process in the same banking application could be a "),t("code",[e._v("Bank Transfer")]),e._v(". This process could also include certain validations such a checking the balance of each account as well as ensuring the atomicity of the operation.")]),e._v(" "),t("p",[e._v("When building connectors in Workato, we've found that object-based connectors can encompass "),t("strong",[e._v("both")]),e._v(" but often, we see that working with resources is often the foundation of a connector before moving on to specific processes.")]),e._v(" "),t("p",[e._v("In the next chapter, we will go through thought exercises that can better help you plan out your connectors.")]),e._v(" "),t("h4",{attrs:{id:"next-chapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-chapter"}},[e._v("#")]),e._v(" Next Chapter")]),e._v(" "),t("h5",{attrs:{id:"planning-your-connector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning-your-connector"}},[e._v("#")]),e._v(" "),t("router-link",{attrs:{to:"/developing-connectors/cookbook/connector-planning.html"}},[e._v("Planning your connector")])],1)])}),[],!1,null,null,null);o.default=a.exports}}]);