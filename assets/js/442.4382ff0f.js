(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{2126:function(e,t,s){"use strict";s.r(t);var i=s(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"security-best-practices-for-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-best-practices-for-apis"}},[e._v("#")]),e._v(" Security Best Practices for APIs")]),e._v(" "),s("p",[e._v("Workato Callable recipes as APIs are a powerful feature that allows access to Workato functionality from other recipes as well as from sources external to Workato. But, since recipes can perform operations on your business systems, it is important to avoid unauthorized access to them through APIs.")]),e._v(" "),s("p",[e._v("Here are some recommendations for maintaining security when using APIs:")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("Treat API tokens like a password")]),e._v(". They are confidential information that can grant access to your API to anyone who possesses them. As a best practice, don't distribute them to clients through insecure channels such as email. Use a secure messaging system or a document system such as Dropbox to which both the API owner and the intended client have access.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Don't distribute the same API token to multiple people")]),e._v(". An API token identifies a client and enables monitoring requests in the API dashboard on a per-client basis. If multiple people have the same API token, there is no ready way to determine who is making calls to your API.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Consider having a policy to periodically refresh API tokens")]),e._v('. This is similar to expiring a password and ensures that any compromise of an API token does not provide very long-term access to systems. Alternatively, distribute a JWT token with an expiration time set ("exp" claim). This will give the token a limited lifetime.')])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Use IP whitelisting")]),e._v(" (part of the "),s("router-link",{attrs:{to:"/api-mgmt/api-client-mgmt.html"}},[e._v("Access Profile")]),e._v(" for a client) to restrict the originating IPs that are allowed to have API access. A whitelist is a best practice from a security perspective. However, some clients may not have a fixed IP address (for example, clients connected from a home network may get varied IPs from their providers), or may connect from multiple IP addresses (for example, while traveling). In this case, it may not be readily possible\nto whitelist their IPs.")],1)]),e._v(" "),s("li",[s("p",[e._v("Consider distributing a JWT token encapsulating the Auth Token secret instead of the secret itself. JWT tokens are signed, include the client identity and can have an expiration. Learn how to set up a "),s("router-link",{attrs:{to:"/api-mgmt/access-tokens.html#jwt-tokens"}},[e._v("JWT token")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("If a person should no longer have access to APIs (e.g. because they are leaving employment), ensure that a person's client profile is disabled or deleted in Workato.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);