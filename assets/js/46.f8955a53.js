(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1301:function(e,t,r){e.exports=r.p+"assets/img/error-redirect-url-mismatch.d721c2b4.png"},1302:function(e,t,r){e.exports=r.p+"assets/img/create-oauth-client-web-app.e10710bc.png"},1303:function(e,t,r){e.exports=r.p+"assets/img/create-oauth-client-id.be8c2aca.png"},1304:function(e,t,r){e.exports=r.p+"assets/img/oauth-credentials-form.63bfa99d.png"},1305:function(e,t,r){e.exports=r.p+"assets/img/oauth-credentials.c17e9e9a.png"},1306:function(e,t,r){e.exports=r.p+"assets/img/add-scope.0eb509f3.png"},1307:function(e,t,r){e.exports=r.p+"assets/img/authorize-workato.cfeca540.png"},1308:function(e,t,r){e.exports=r.p+"assets/img/valid-authoized-redirect-uri.f43ab8ac.png"},1309:function(e,t,r){e.exports=r.p+"assets/img/new-workato-client.7473416a.png"},1310:function(e,t,r){e.exports=r.p+"assets/img/completed-client-credential.847ca835.png"},1311:function(e,t,r){e.exports=r.p+"assets/img/webmaster-central-recommended.1a53789d.png"},2473:function(e,t,r){"use strict";r.r(t);var o=r(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"registering-a-new-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registering-a-new-client"}},[e._v("#")]),e._v(" Registering a new client")]),e._v(" "),o("p",[e._v("The prebuilt Workato connectors are designed to cater to most of your business needs. However, there will be instances where you have a use-case with requirements that go beyond the scope of Workato's prebuilt connectors.")]),e._v(" "),o("h2",{attrs:{id:"why-register-a-new-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-register-a-new-client"}},[e._v("#")]),e._v(" Why register a new client")]),e._v(" "),o("p",[e._v("In cases where the scope of the prebuilt connector is insufficient, you need to register a custom client with relevant scopes to satisfy your use-case.")]),e._v(" "),o("p",[e._v("This applies only to connectors that use OAuth2 authentication. These connectors use OAuth2 clients to interact with the API on behalf of your account, and usually have a fixed set of scopes attached to it. This means that the connector may not be able to interact with all the endpoints of an API.")]),e._v(" "),o("h4",{attrs:{id:"use-custom-clients-with-workato-s-connected-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-custom-clients-with-workato-s-connected-apps"}},[e._v("#")]),e._v(" Use custom clients with Workato's connected apps")]),e._v(" "),o("p",[e._v("To use a custom client, you will need to create a custom connector. Use your custom client credentials with the "),o("router-link",{attrs:{to:"/developing-connectors/http-v2.html"}},[e._v("HTTP universal connector")]),e._v(" or the "),o("router-link",{attrs:{to:"/developing-connectors/sdk.html"}},[e._v("SDK")]),e._v(". This way, you can make use of the additional scopes from your custom client together with all the other connectors on Workato's platform.")],1),e._v(" "),o("h2",{attrs:{id:"callback-url"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#callback-url"}},[e._v("#")]),e._v(" Callback URL")]),e._v(" "),o("p",[e._v("Many cloud apps use OAuth2 for authentication. Part of the OAuth2 flow involves a callback URL (or "),o("strong",[e._v("Redirect URL")]),e._v("). Use the callback URL "),o("code",[e._v("https://www.workato.com/oauth/callback")]),e._v(" to complete the flow with Workato.")]),e._v(" "),o("p",[e._v("Some cloud apps, like Google, require you to register this callback URL at the point of client registration. It may also involve authorizing this URL. This is a security measure to prevent unwanted access to your account. If you do not register the callback URL, you may encounter an error like this.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1301),alt:"400 Error. Redirect URI mismatch",width:"2872",height:"1810"}}),e._v(" "),o("em",[e._v("400 Error. Redirect URI mismatch")])],1),e._v(" "),o("h2",{attrs:{id:"registering-new-client-with-callback-url"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registering-new-client-with-callback-url"}},[e._v("#")]),e._v(" Registering new client with callback URL")]),e._v(" "),o("p",[e._v("Let's go through an example of registering a new client on Google Cloud Platform.")]),e._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",{attrs:{width:"10%"}},[e._v("Step")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("\n        Select "),o("b",[e._v("Create credentials")]),e._v(" > "),o("b",[e._v("OAuth client ID")]),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(261)}}),o("br"),e._v(" "),o("i",[e._v("Google Cloud Platform API Credentials")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("\n        Select "),o("b",[e._v("Web application")]),e._v(" and fill in the following fields:\n        "),o("ul",[o("li",[e._v("Name")]),e._v(" "),o("li",[e._v("Authorized redirect URIs")]),e._v("\n          Use "),o("code",[e._v("https://www.workato.com/oauth/callback")])]),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1302)}}),o("br"),e._v(" "),o("i",[e._v("Create OAuth client ID")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("\n        This is where most people encounter an "),o("code",[e._v("Invalid Redirect")]),e._v(" message. To resolve this, select "),o("b",[e._v("authorized domains list")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("blockquote",[e._v("If you "),o("b",[e._v("do not")]),e._v(" encounter this issue (i.e. the callback URL is accepted), click "),o("b",[e._v("Create")]),e._v(" and\n        skip to "),o("a",{attrs:{href:"#retrieve-client-credentials"}},[e._v("Client credentials")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:r(1303)}}),o("br"),e._v(" "),o("i",[e._v("Invalid redirect URL")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("4")]),e._v(" "),o("td",[e._v("\n        You will be brought to the "),o("b",[e._v("OAuth consent screen")]),e._v(" page. On this page, you will need to designate the following (steps 5-7):"),o("br"),e._v(" "),o("ul",[o("li",[e._v("Application name")]),e._v(" "),o("li",[e._v("Scope for Google APIs")]),e._v(" "),o("li",[e._v("Authorized domain")])]),e._v("\n        Alternatively, you can access this page from  "),o("b",[e._v("APIs & Services")]),e._v(" > "),o("b",[e._v("Credentials")]),e._v(" > "),o("b",[e._v("OAuth consent screen")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1304)}}),e._v(" "),o("br"),e._v(" "),o("i",[e._v("OAuth consent screen")]),o("br")])]),o("tr",[o("td",[e._v("5")]),e._v(" "),o("td",[e._v("\n        Copy "),o("code",[e._v("Workato")]),e._v(" into "),o("b",[e._v("Application name")]),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1305)}}),e._v(" "),o("br"),e._v(" "),o("i",[e._v("Application name")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("6")]),e._v(" "),o("td",[e._v("\n        Select "),o("b",[e._v("Add scope")]),e._v(" and copy the following scopes:"),o("br"),e._v("\n        - "),o("code",[e._v("https://www.googleapis.com/auth/admin.directory.group")]),o("br"),e._v("\n        - "),o("code",[e._v("https://www.googleapis.com/auth/admin.directory.user")]),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1306)}}),o("br"),e._v(" "),o("i",[e._v("Add scope")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("7")]),e._v(" "),o("td",[e._v("\n        Copy "),o("code",[e._v("workato.com")]),e._v(" into "),o("b",[e._v("Authorized domains")]),e._v(" and click "),o("b",[e._v("Save")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1307)}}),o("br"),e._v(" "),o("i",[e._v("Authorize Workato.com")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("8")]),e._v(" "),o("td",[e._v("\n        Once again, select "),o("b",[e._v("Create credentials")]),e._v(" > "),o("b",[e._v("OAuth client ID")]),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(261)}}),o("br"),e._v(" "),o("i",[e._v("Google Cloud Platform API Credentials")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("9")]),e._v(" "),o("td",[e._v("\n        Select "),o("b",[e._v("Web application")]),e._v(" and fill in the following fields:\n        "),o("ul",[o("li",[e._v("Name")]),e._v(" "),o("li",[e._v("Authorized redirect URIs")]),e._v("\n          Use "),o("code",[e._v("https://www.workato.com/oauth/callback")])]),e._v("\n        Click "),o("b",[e._v("Create")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1308)}}),o("br"),e._v(" "),o("i",[e._v("Accepted redirect URL")]),o("br")])]),e._v(" "),o("tr",[o("td",[e._v("10")]),e._v(" "),o("td",[e._v("\n        Done! You have created a custom client on Google Cloud Platform."),o("br"),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:r(1309)}}),o("br"),e._v(" "),o("i",[e._v("New custom client")]),o("br")])])])]),e._v(" "),o("h2",{attrs:{id:"retrieve-client-credentials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-client-credentials"}},[e._v("#")]),e._v(" Retrieve client credentials")]),e._v(" "),o("p",[e._v("Now your custom client is ready to be connected to Workato. Open your custom client (e.g. "),o("code",[e._v("Workato")]),e._v(") to view the client credentials. You will need the "),o("strong",[e._v("client ID")]),e._v(" and "),o("strong",[e._v("client secret")]),e._v(" for OAuth2 authentication.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1310),alt:"Client credentials",width:"2500",height:"1494"}}),e._v(" "),o("em",[e._v("Client credentials")])],1),e._v(" "),o("hr"),e._v(" "),o("h4",{attrs:{id:"frequently-encountered-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frequently-encountered-problems"}},[e._v("#")]),e._v(" Frequently encountered problems")]),e._v(" "),o("p",[e._v("We noticed that some of our customers were misdirected to verify the domain "),o("code",[e._v("http://www.workato.com")]),e._v(" on Google Cloud Platform like in the screenshot below.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1311),alt:"Request to verify domain",width:"901",height:"754"}}),e._v(" "),o("em",[e._v("Request to verify domain")])],1),e._v(" "),o("p",[o("strong",[e._v("This is not a required step.")]),e._v(" If you find yourself at this page, please circle back to "),o("strong",[e._v("APIs & Services")]),e._v(" > "),o("strong",[e._v("Credentials")]),e._v(" ("),o("a",{attrs:{href:"#registering-new-client-with-callback-url"}},[e._v("Step 1")]),e._v(").")])])}),[],!1,null,null,null);t.default=a.exports},261:function(e,t,r){e.exports=r.p+"assets/img/gcp-api-credentials.30009295.png"}}]);