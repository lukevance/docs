(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{2488:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multipart-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form"}},[t._v("#")]),t._v(" Multipart Form")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multipart form request"),s("OutboundLink")],1),t._v(" is typically used to send large files and data to a server.")]),t._v(" "),s("p",[t._v("This request format can be declared in any blocks ("),s("code",[t._v("execute")]),t._v(", "),s("code",[t._v("acquire")]),t._v(", "),s("code",[t._v("fields")]),t._v(" etc.) in your custom adapter code. This is done by embedding the data format inside the "),s("code",[t._v("Content-Type")]),t._v(" header.")]),t._v(" "),s("h2",{attrs:{id:"sample-code-snippet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-code-snippet"}},[t._v("#")]),t._v(" Sample code snippet")]),t._v(" "),s("p",[t._v("Let's use the Convert document endpoint in "),s("a",{attrs:{href:"https://www.ibm.com/watson/developercloud/document-conversion/api/v1/#convert-document",target:"_blank",rel:"noopener noreferrer"}},[t._v("IBM Watson API"),s("OutboundLink")],1),t._v(" as an example. This endpoint accepts a document in multipart/form-data format.")]),t._v(" "),s("p",[t._v("A cURL example looks like this:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2015")]),t._v("-12-15 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{username}"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{password}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("conversion_target"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("answer_units"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file=@sample.pdf;type=application/pdf"')]),t._v("\n")])])]),s("p",[t._v("Workato:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IBM Watson"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    upload_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input_fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file_data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conversion_target"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n          params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-12-15"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n          request_format_multipart_form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n          payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file_data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/pdf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"conversion_target\\":\\"'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'conversion_target'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('\\"}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    output_fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  triggers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  object_definitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("In the SDK, notice that the "),s("code",[t._v("file")]),t._v(" key in the payload takes an array of length 2. This defines the request as form data. The first item in the array is the file data and the second item is the media type (MIME type) of the input file.")]),t._v(" "),s("h2",{attrs:{id:"components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",[t._v("cURL")]),t._v(" "),s("th",[t._v("Workato")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("curl https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version=2015-12-15 -X POST")])]),t._v(" "),s("td",[s("code",[t._v('post("https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document")')]),s("br"),s("code",[t._v('.params(version: "2015-12-15")')])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v('-u "{username}":"{password}"')])]),t._v(" "),s("td",[t._v("This is defined in the [connection](../authentication/basic-authentication.md) block and is automatically added onto the outgoing request.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v('-F config="{\\"conversion_target\\":\\"answer_units\\"}"')]),s("br"),s("code",[t._v('-F "file=@sample.pdf;type=application/pdf"')])]),t._v(" "),s("td",[s("code",[t._v(".request_format_multipart_form")]),s("br"),s("code",[t._v(".payload(")]),s("br"),t._v("    "),s("code",[t._v("file: [input['file_data'], 'application/pdf'], ")]),s("br"),t._v("    "),s("code",[t._v("file_name: input['file_name'],")]),s("br"),t._v("    "),s("code",[t._v('config: "{\\"conversion_target\\":\\"#{input[\'conversion_target\']}\\"}")')])])])])]),t._v(" "),s("h2",{attrs:{id:"variations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variations"}},[t._v("#")]),t._v(" Variations")]),t._v(" "),s("p",[t._v("In some cases, the name of the file must be explicitly stated in the multipart form as part of the file payload, instead of a separate key-value pair, like the previous example. To satisfy this, you can adjust your payload to this.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: this file name is different from the payload key ("),s("code",[t._v("file:")]),t._v(")")])]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-12-15"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    request_format_multipart_form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file_data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/pdf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"conversion_target\\":\\"'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'conversion_target'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('\\"}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("h2",{attrs:{id:"other-data-formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-data-formats"}},[t._v("#")]),t._v(" Other data Formats")]),t._v(" "),s("p",[t._v("Check out the other data formats we support. "),s("router-link",{attrs:{to:"/developing-connectors/sdk/data-format.html"}},[t._v("Learn more")])],1),t._v(" "),s("h2",{attrs:{id:"next-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),s("p",[t._v("If you're already familiar with the data formats we support, check out the authentication types that our SDK supports as well as how to implement them. "),s("router-link",{attrs:{to:"/developing-connectors/sdk/authentication.html"}},[t._v("Learn more")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);