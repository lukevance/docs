(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{2316:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"triggers-actions-in-salesforce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#triggers-actions-in-salesforce"}},[e._v("#")]),e._v(" Triggers/actions in Salesforce")]),e._v(" "),s("h2",{attrs:{id:"salesforce-triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#salesforce-triggers"}},[e._v("#")]),e._v(" Salesforce triggers")]),e._v(" "),s("p",[e._v("In Workato, a Trigger refers to a condition that is set to start off a recipe. All the triggers on the Salesforce connector deals with "),s("strong",[e._v("Objects")]),e._v(". The name of the trigger tells you exactly what event must occur for a recipe to take place. The Salesforce connector supports several different trigger types:")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/connectors/salesforce/salesforce-real-time.html"}},[e._v("Real-time triggers")])],1),e._v(" "),s("li",[e._v("Polling triggers")]),e._v(" "),s("li",[e._v("Bulk triggers")])]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(257),alt:"Unconfigured fields selector",width:"750",height:"570"}}),e._v(" "),s("em",[e._v("Unconfigured fields selector. All account data fields are retrieved in the datatree by default.")])],1),e._v(" "),s("h3",{attrs:{id:"configuring-a-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-trigger"}},[e._v("#")]),e._v(" Configuring a trigger")]),e._v(" "),s("p",[e._v("In the example below, we will configure a simple polling trigger. Polling triggers check the connected Salesforce account every 5 or 10 minutes (this interval is dependent on your Workato plan) for new or updated objects.")]),e._v(" "),s("p",[e._v("All the triggers on the Salesforce connector deals with "),s("strong",[e._v("Objects")]),e._v('. The name of the trigger tells you exactly what event must occur for a recipe to take place. The term "object" is exactly the same as how it is used within Salesforce itself, and refers to things such as leads, opportunities, accounts, as well as custom objects you may have created for your organization. Simply click on the Object field\'s dropdown list and you will be able to see all the objects associated with the instance of Salesforce you have connected to a recipe. For example, you use the trigger '),s("strong",[e._v('"New/Updated Record"')]),e._v(" and select "),s("strong",[e._v("Lead")]),e._v(" as the object. Your recipe will trigger every time a new lead is created or updated.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(920),alt:"New/updated lead trigger",width:"1376",height:"1402"}}),e._v(" "),s("em",[e._v("The recipe will now trigger when there is a new/updated lead")])],1),e._v(" "),s("h3",{attrs:{id:"fields-input-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fields-input-field"}},[e._v("#")]),e._v(" Fields input field")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Fields")]),e._v(" list input field allows users to select the fields they wish to use in the recipe. This ensures that the recipe will be affected only by changes to these subset of fields, and therefore minimize impact on the recipe due to schema changes.")]),e._v(" "),s("p",[e._v("The benefits of using the "),s("code",[e._v("Fields")]),e._v(" list are:")]),e._v(" "),s("ol",[s("li",[e._v("Improved recipe performance")]),e._v(" "),s("li",[e._v("Improved recipe usability due to smaller datatree with only relevant datapills")]),e._v(" "),s("li",[e._v("Minimizes impact on recipe by Salesforce object schema changes")])]),e._v(" "),s("h3",{attrs:{id:"how-to-use-fields-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-fields-list"}},[e._v("#")]),e._v(" How to use Fields list")]),e._v(" "),s("p",[e._v("Salesforce triggers and actions have an optional input field called "),s("code",[e._v("Fields")]),e._v(". This is a multi-select field for you to select the data fields you want to use in the recipe. If left blank, the Salesforce trigger/action will retrieve all data fields in the datatree by default.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(257),alt:"Unconfigured fields selector",width:"750",height:"570"}}),e._v(" "),s("em",[e._v("Unconfigured fields selector. All Account fields are retrieved in the data tree by default.")])],1),e._v(" "),s("p",[e._v("All data fields of your selected object will be available in the "),s("code",[e._v("Fields")]),e._v(" list.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(921),alt:"Available base object fields",width:"760",height:"570"}}),e._v(" "),s("em",[e._v("Fields selector displays all available data fields for your selected object by default")])],1),e._v(" "),s("p",[e._v("By selecting any subset of these fields, the data tree will be regenerated to display only the selected datapills.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(922),alt:"Configured base object fields selector",width:"750",height:"570"}}),e._v(" "),s("em",[e._v("Configuring the fields selector - the data tree is regenerated when any fields are selected")])],1),e._v(" "),s("p",[e._v("In Salesforce, you can choose to retrieve related objects' data as well, e.g. if your trigger is a new opportunity in Salesforce, we can retrieve data about the Salesforce account the opportunity is related to. If your trigger is a new case, we can retrieve data about the Salesforce contact, lead or account the opportunity is related to. To tell Workato the fields to select, first select the related objects you're interested in, then select the fields of this related object you're interested in.")]),e._v(" "),s("p",[e._v("In the following example, we first selected "),s("code",[e._v("account")]),e._v(" as the primary base object, then "),s("code",[e._v("parent account")]),e._v(" as the join object. The "),s("code",[e._v("Fields")]),e._v(" multi-select list is promptly populated with fields belonging to the parent account as well. Similarly, if the "),s("code",[e._v("Fields")]),e._v(" list is not configured, all "),s("code",[e._v("account")]),e._v(" and "),s("code",[e._v("parent account")]),e._v("fields will be fetched from Salesforce.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(923),alt:"Available join object fields",width:"752",height:"570"}}),e._v(" "),s("em",[e._v("Available join object fields will be shown when the related join objects is selected")])],1),e._v(" "),s("p",[e._v("All data fields of your selected base and related join objects will be available in the "),s("code",[e._v("Fields")]),e._v(" list. By selecting any subset of these fields, the datatree will be regenerated to display only the selected datapills.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(924),alt:"Configured join object fields selector",width:"752",height:"570"}}),e._v(" "),s("em",[e._v("Configuring the fields selector containing base and related join object data fields - the datatree is regenerated when any fields are selected")])],1),e._v(" "),s("p",[e._v("By limiting the datatree to the fields we're interested in using, we mitigate the effects of Salesforce schema changes on our recipe.")]),e._v(" "),s("h2",{attrs:{id:"deleted-record-trigger-in-salesforce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleted-record-trigger-in-salesforce"}},[e._v("#")]),e._v(" Deleted record trigger in Salesforce")]),e._v(" "),s("p",[e._v("The deleted record trigger allows you to trigger a recipe when a record is deleted. The object picklist fetches only soft-deleted records which are still stored in Salesforce (usually for 15 days) after deletion.")]),e._v(" "),s("p",[e._v("If you cannot find the object you need in the picklist, this may mean that the records for the object are hard deleted immediately when you delete them - Salesforce does not store them in the recycle bin. These objects cannot be supported by the Deleted object trigger.")]),e._v(" "),s("p",[e._v("To try and resolve the issue, configure the object to have records be soft deleted (and placed on a deleted item list/Recycle Bin for 15 days), depending on the record setup. Note that junction records (records that create many-to-many relationships between objects) are usually hard deleted and cannot be configured for soft-deletion. Check with your Salesforce administrator if more information is needed regarding soft/hard deletions.")]),e._v(" "),s("h3",{attrs:{id:"create-update-search-upsert-actions-in-salesforce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-update-search-upsert-actions-in-salesforce"}},[e._v("#")]),e._v(" Create/update/search/upsert actions in Salesforce")]),e._v(" "),s("p",[e._v("When working with Salesforce Actions on Workato, you should find it extremely easy if you are familiar with the fields in the objects on your Salesforce account.")]),e._v(" "),s("p",[e._v("When you select an object to use in a create/update/search action, you will see all the fields associated with that object appearing in your action. For example, if you were to choose "),s("strong",[e._v("Lead")]),e._v(" you will see fields like phone, email, lead status etc. Simply drag and drop pills into the associated fields you want to populate in a create/update action, or for the field you want to search with in the search action.")]),e._v(" "),s("h2",{attrs:{id:"attachments-in-salesforce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attachments-in-salesforce"}},[e._v("#")]),e._v(" Attachments in Salesforce")]),e._v(" "),s("h3",{attrs:{id:"uploading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploading"}},[e._v("#")]),e._v(" Uploading")]),e._v(" "),s("p",[e._v("To upload an attachment "),s("strong",[e._v("to")]),e._v(" Salesforce using Workato, you can use the "),s("strong",[e._v("Create Object")]),e._v(" Action, and select "),s("strong",[e._v("Attachment")]),e._v(" under the "),s("strong",[e._v("Object")]),e._v(" field. Before that however, you need to have a step that downloads the file that is to be uploaded to Salesforce. You may use the "),s("strong",[e._v("Box")]),e._v(" action "),s("strong",[e._v("get file download URL")]),e._v(", followed by using the "),s("strong",[e._v("utilities")]),e._v(" tool to upload it from the obtained URL, or a similar flow of actions with another connector.  You can check out "),s("a",{attrs:{href:"http://docs.workato.com/handling-files-and-attachments.html#example-of-using-utilities-to-download-file-from-public-url",target:"_blank",rel:"noopener noreferrer"}},[e._v("this example here"),s("OutboundLink")],1),e._v(" on how to download a file to Workato.")]),e._v(" "),s("h3",{attrs:{id:"downloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading"}},[e._v("#")]),e._v(" Downloading")]),e._v(" "),s("p",[e._v("To download an attachment "),s("strong",[e._v("from")]),e._v(" Salesforce, you can use the "),s("strong",[e._v("Download file")]),e._v(" Action.  The "),s("strong",[e._v("file ID")]),e._v(" must be obtained from a previous step, usually from the "),s("strong",[e._v("Get object details")]),e._v(" step. Once that step is properly set up, you will be able to use the attachment as a pill in the other steps of the recipe, for example, you can use the "),s("strong",[e._v("Upload file")]),e._v(" action in the "),s("strong",[e._v("Box")]),e._v(" connector.")]),e._v(" "),s("h3",{attrs:{id:"prevent-schema-errors-with-fields-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prevent-schema-errors-with-fields-list"}},[e._v("#")]),e._v(" Prevent schema errors with Fields list")]),e._v(" "),s("p",[e._v("When using a Salesforce trigger/action in a recipe, all object fields (standard and custom fields) are requested from Salesforce by default, "),s("strong",[e._v("even if these fields are not used in the recipe")]),e._v(".")]),e._v(" "),s("p",[e._v("If a Salesforce admin changes the Salesforce object schema, e.g. deletes fields in the object, the recipe throws an error when making API requests to Salesforce for that object. This is because these deleted fields are still being requested from Salesforce by the recipe, which is an invalid request. On the other hand, if fields are added to the Salesforce object, there will not be any recipe errors as Workato will simply not request for these additional fields.")]),e._v(" "),s("p",[e._v("Such schema differences between Salesforce and Workato can be resolved by a schema refresh. However, if frequent schema changes are expected, we can utilize the "),s("code",[e._v("Fields")]),e._v(" input field to control the fields that we request from Salesforce. This will ensure that schema changes unrelated to the recipe will not cause the recipe to break or experience errors.")])])}),[],!1,null,null,null);t.default=o.exports},257:function(e,t,a){e.exports=a.p+"assets/img/unconfigured-fields-selector.b9223083.gif"},920:function(e,t,a){e.exports=a.p+"assets/img/trigger-new-updated-lead.30e945a1.png"},921:function(e,t,a){e.exports=a.p+"assets/img/available-base-object-fields.652c5170.gif"},922:function(e,t,a){e.exports=a.p+"assets/img/configured-fields-selector-base-object.b73be9f9.gif"},923:function(e,t,a){e.exports=a.p+"assets/img/available-join-object-fields.9dd2fdce.gif"},924:function(e,t,a){e.exports=a.p+"assets/img/configured-fields-selector-join-object.ad88af38.gif"}}]);