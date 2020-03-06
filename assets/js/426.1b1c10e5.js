(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{1582:function(t,e,a){t.exports=a.p+"assets/img/jwt-account-heirarchy.6694f40f.png"},2559:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jwt-direct-linking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-direct-linking"}},[t._v("#")]),t._v(" JWT Direct Linking")]),t._v(" "),s("p",[t._v("Direct linking is the feature that allows an OEM partner to link their platform to a secure resource within a Workato account. This is especially relevant when Workato pages are embedded by IFrame on the partner’s platform.")]),t._v(" "),s("p",[t._v("A Workato session for the user is created before providing access to the secure resource. The access is granted using a JWT token generated using RS256 algorithm using an asymmetric key pair.")]),t._v(" "),s("h2",{attrs:{id:"account-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account-structure"}},[t._v("#")]),t._v(" Account structure")]),t._v(" "),s("p",[t._v("Typically the account structure for OEM partners and their customers will be as follows:\n"),s("DocImage",{attrs:{src:a(1582),alt:"OEM team structure",width:"1206",height:"784"}}),t._v(" "),s("em",[t._v("OEM account hierarchy")])],1),t._v(" "),s("h2",{attrs:{id:"required-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required-information"}},[t._v("#")]),t._v(" Required information")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Information")])]),t._v(" "),s("th",[s("strong",[t._v("Required")])]),t._v(" "),s("th",[s("strong",[t._v("Source")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("RSA public key")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Partner will provide the public key used to sign the JWT token to Workato. See "),s("a",{attrs:{href:"#generate-jwt-keys"}},[t._v("Generate JWT keys")]),t._v(" for more details.")])]),t._v(" "),s("tr",[s("td",[t._v("OEM vendor API Key")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Please contact Workato when beginning the implementation of direct linking. Workato will provide the OEM vendor API key securely.")])]),t._v(" "),s("tr",[s("td",[t._v("Customer team account ID")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("This is the Workato user ID or external ID for every customer account created. If created using managed_users API, it is returned as the output. "),s("br"),t._v(" If using UI to create the account, "),s("ul",[s("li",[t._v("The ID of the customer is  in the URL when you click on it "),s("b",[t._v("OR")])]),s("li",[t._v(" Can be obtained when in the customer account in the data tree in any recipe (User ID) ")])]),t._v(" If the external id is passed, it should be prefixed with an "),s("b",[s("i",[t._v("E")])]),t._v(" (eg: EA2300) and the resulting id should be URL encoded. "),s("br"),t._v(" I.e. If the external id is AM10:XV303 the url encoded value will be "),s("i",[t._v("EAM10%3AXV303")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("Customer user ID")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("This is the Workato user ID for a user within the customer team. Usually, this account belongs to: "),s("ul",[s("li",[t._v(" An individual within the customer organization "),s("b",[t._v("OR")])]),s("li",[t._v(" The representative assigned by the partner to manage the customer account.")])]),t._v("  If created using managed_users API, it is returned as the output. "),s("br"),s("br"),t._v(" If using UI to create the account, "),s("ul",[s("li",[t._v(" The ID of the customer is in the URL when you click on it "),s("b",[t._v("OR")])]),s("li",[t._v(" Can be obtained when in the customer account in the data tree in any recipe (User ID) ")])])])]),t._v(" "),s("tr",[s("td",[t._v("Paths to Workato assets")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("The paths to Workato pages the partner wishes to link to. "),s("br"),t._v(" E.g. If trying to link to community recipes, the Workato URL is: "),s("a",{attrs:{href:"https://www.workato.com/recipes/browse",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.workato.com/recipes/browse"),s("OutboundLink")],1),t._v(". "),s("br"),t._v(" Paths include all the parameters and fragments that append "),s("a",{attrs:{href:"https://www.workato.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.workato.com/"),s("OutboundLink")],1),t._v(".")])])])]),t._v(" "),s("h2",{attrs:{id:"oem-partner-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oem-partner-implementation"}},[t._v("#")]),t._v(" OEM partner implementation")]),t._v(" "),s("p",[t._v("A direct link URL generation micro service should be added to the vendor's server ("),s("a",{attrs:{href:"https://www.vendor.com/integrate_direct_link",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.vendor.com/integrate_direct_link"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("The endpoint should require vendor authentication.")]),t._v(" "),s("li",[t._v("This service should accept the path to the workato asset")]),t._v(" "),s("li",[t._v("The service should generate a url as follows:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'https://www.workato.com/direct_link/' + path + '?' + query_params + '#' + fragment\n")])])])]),t._v(" "),s("li",[t._v("The service should generate the JWT token as follows:\n"),s("ul",[s("li",[s("strong",[t._v("Header section")]),t._v(" "),s("ul",[s("li",[t._v("The "),s("em",[t._v("typ")]),t._v(" claim should be set to JWT")]),t._v(" "),s("li",[t._v("The "),s("em",[t._v("alg")]),t._v(" claim should be set RS256")])])]),t._v(" "),s("li",[t._v("Payload section\n"),s("ul",[s("li",[t._v("The "),s("em",[t._v("sub")]),t._v(" claim should be set to")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<OEM_VENDOR_API_KEY>:<CUSTOMER_TEAM_ID>:<CUSTOMER_USER_ID>\n")])])]),s("ul",[s("li",[t._v("The "),s("em",[t._v("iat")]),t._v(" claim should be set to the current time in epoch")]),t._v(" "),s("li",[t._v("The "),s("em",[t._v("jti")]),t._v(" claim should be set to a globally unique value. The value should be used only once in a 10 minute duration.")])])]),t._v(" "),s("li",[t._v("Sign using the private key using RS256 algorithm (this should be the private key to the public key previously provided to Workato)")])])]),t._v(" "),s("li",[t._v("The service should redirect to the new url with parameter "),s("code",[t._v("workato_dl_token")]),t._v(" set to the JWT token.")])]),t._v(" "),s("p",[t._v("Use the direct link url to refer to any Workato asset in the vendor HTML page. Vendor should never expose JWT token in any HTML page.")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("https://www.vendor.com/integrate_direct_link/recipes/1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("_blank")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      Salesforce to Vendor lead sync\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"generate-jwt-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-jwt-keys"}},[t._v("#")]),t._v(" Generate JWT keys")]),t._v(" "),s("h3",{attrs:{id:"private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-key"}},[t._v("#")]),t._v(" Private key")]),t._v(" "),s("p",[t._v("To generate the private key from scratch, use the following:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ openssl genrsa -out private.key "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" private.key\n-----BEGIN RSA PRIVATE KEY-----\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n-----END RSA PRIVATE KEY-----\n")])])]),s("h3",{attrs:{id:"public-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-key"}},[t._v("#")]),t._v(" Public key")]),t._v(" "),s("p",[t._v("Then, extract the public key using the following:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ openssl rsa -in private.key -pubout -out public.key\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" public.key\n-----BEGIN PUBLIC KEY-----\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n-----END PUBLIC KEY-----\n")])])]),s("h3",{attrs:{id:"converting-keys-to-pem-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-keys-to-pem-format"}},[t._v("#")]),t._v(" Converting keys to PEM format")]),t._v(" "),s("p",[t._v("You may need to convert your keys from other formats before sending it to Workato if you used a different approach to generate them.")]),t._v(" "),s("p",[t._v("To convert from an SSH public key:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-keygen -f key.pkcs -e -m pem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" key.pem\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);