(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{2611:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[t._v("#")]),t._v(" Extensions")]),t._v(" "),a("p",[t._v("Enterprises often have on-prem applications and databases that are deployed behind a corporate firewall.")]),t._v(" "),a("p",[t._v("Workato’s On-prem extensions allows you to connect to legacy applications using Java. Extensions are registered as Servlets in the Workato On-Premise Agent, and expose as REST endpoints which can be used from within a recipe.")]),t._v(" "),a("p",[t._v("When to use this:")]),t._v(" "),a("ul",[a("li",[t._v("Application does not have REST / SOAP APIs.")]),t._v(" "),a("li",[t._v("Application has a supported Java library.")])]),t._v(" "),a("p",[t._v("When not to use this:")]),t._v(" "),a("ul",[a("li",[t._v("Application has REST / SOAP APIs. Use the "),a("router-link",{attrs:{to:"/developing-connectors/http-v2.html"}},[t._v("HTTP Connector")]),t._v(" or build a custom connection with the "),a("router-link",{attrs:{to:"/developing-connectors/sdk.html"}},[t._v("Connector SDK")]),t._v(".")],1),t._v(" "),a("li",[t._v("You want to execute simple command-line scripts. Use "),a("router-link",{attrs:{to:"/on-prem/agents/profile.html#command-line-scripts-profile"}},[t._v("Command-line scripts")]),t._v(" instead.")],1)]),t._v(" "),a("h3",{attrs:{id:"pre-requisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[t._v("#")]),t._v(" Pre-requisites:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 8 SDK"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("To explain Extensions, we'll walkthrough how to create a simple extension that performs a SHA-256 message digest. This extension takes the request body and returns a SHA-256 encrypted version of it. We will then enable it as a REST endpoint so that you can use this extension in a recipe.")]),t._v(" "),a("h4",{attrs:{id:"build-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-extension"}},[t._v("#")]),t._v(" Build Extension")]),t._v(" "),a("p",[t._v("Download the "),a("a",{attrs:{href:"https://github.com/workato/opa-extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("repository"),a("OutboundLink")],1),t._v(" for this extension. This is a Gradle project which will serve as a base template that you can leverage on to write your own extensions.")]),t._v(" "),a("p",[t._v("The source file for the On-prem extension is located in\n"),a("code",[t._v("src/main/java/com/mycompany/onprem/SecurityExtension.java")])]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./gradlew jar")]),t._v(" on the root folder to bootstrap Gradle and build the project. You will find the output in "),a("code",[t._v("build/libs/opa-extensions-0.1.jar")])]),t._v(" "),a("h4",{attrs:{id:"install-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-extension"}},[t._v("#")]),t._v(" Install Extension")]),t._v(" "),a("p",[t._v("To install the OPA extension, create a new directory called "),a("code",[t._v("ext")]),t._v(" under the Workato agent directory and place "),a("code",[t._v("opa-extensions-0.1.jar")]),t._v(" in the "),a("code",[t._v("ext")]),t._v(" folder.")]),t._v(" "),a("p",[t._v("Update "),a("code",[t._v("conf/config.yml")]),t._v(" with the classpath and newly added extension. This tells the on-prem agent where to find the jar files:")]),t._v(" "),a("div",{staticClass:"language-YAML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("classpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\\Program Files\\\\Workato Agent\\\\ext\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controllerClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mycompany.onprem.SecurityExtension\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HA63A3043AMMMM\n")])])]),a("p",[t._v("Note that the "),a("code",[t._v("classpath")]),t._v(" value above should be set to the appropriate location, which may differ in your environment.")]),t._v(" "),a("p",[t._v("If you have multiple extensions, place all jar files in the ext folder and add a new entry under extensions:")]),t._v(" "),a("div",{staticClass:"language-YAML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("classpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\\Program Files\\\\Workato Agent\\\\ext\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controllerClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mycompany.onprem.SecurityExtension\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HA63A3043AMMMM\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("otherextension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controllerClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mycompany.onprem.OtherExtension\n")])])]),a("p",[t._v("The "),a("strong",[t._v("server")]),t._v(" parameter configuration property is as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("classpath")]),t._v(" "),a("td",[t._v("Specifies the location of user-defined class")])])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("extensions")]),t._v(" parameter configuration properties are as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("security")]),t._v(" "),a("td",[t._v("This is the extension profile name that will be used in the SDK. Use a unique name for each extension.")])]),t._v(" "),a("tr",[a("td",[t._v("controllerClass")]),t._v(" "),a("td",[t._v("A required field to inform the OPA which Java class to map the extension to.")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("Optional environment property that is used in the Java class. Multiple properties can be added.")])])])]),t._v(" "),a("h4",{attrs:{id:"build-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-sdk"}},[t._v("#")]),t._v(" Build SDK")]),t._v(" "),a("p",[t._v("In order to use the extension in a recipe, we need a custom connector (SDK) in Workato.\nCreate an custom connector in the "),a("a",{attrs:{href:"https://www.workato.com/custom_adapters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connectors page"),a("OutboundLink")],1),t._v(" with the following code:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'On-prem security'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secure_tunnel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'On-prem security connection profile'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    authorization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    apply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Workato-Connector'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enforce'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost/ext/'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('/computeDigest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sha256_digest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Create SHA-256 digest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Create <span class=\"provider\">SHA-256</span> digest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      input_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'payload'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      output_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'signature'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost/ext/'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('/computeDigest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Take note of the following in the SDK code:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("secure_tunnel")]),t._v(" is set to true which allows you to select an OPA when creating a connection. Make sure to select the OPA that has the extension.")])]),t._v(" "),a("li",[a("p",[t._v("Header "),a("code",[t._v("X-Workato-Connector: enforce")]),t._v(" is used to inform the OPA that this is a request to communicate with the OPA extension")])]),t._v(" "),a("li",[a("p",[t._v("The path "),a("code",[t._v("http://localhost/ext/#{connection['profile']}/computeDigest")]),t._v(" is defined in the Java class")])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/computeDigest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);