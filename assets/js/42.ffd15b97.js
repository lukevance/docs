(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{2309:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"amazon-s3-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amazon-s3-connection"}},[t._v("#")]),t._v(" Amazon S3 Connection")]),t._v(" "),o("h2",{attrs:{id:"how-to-connect-to-amazon-s3-on-workato"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-amazon-s3-on-workato"}},[t._v("#")]),t._v(" How to connect to Amazon S3 on Workato")]),t._v(" "),o("p",[t._v("The Amazon S3 connector uses the "),o("a",{attrs:{href:"http://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS Signature Version 4"),o("OutboundLink")],1),t._v(" to authenticate to Amazon S3. There are 2 ways to connect:")]),t._v(" "),o("ol",[o("li",[t._v("Using "),o("a",{attrs:{href:"#connect-to-amazon-s3-using-access-key"}},[t._v("Access Key")])]),t._v(" "),o("li",[t._v("Using "),o("a",{attrs:{href:"#connect-to-amazon-s3-using-iam-role"}},[t._v("IAM role")])])]),t._v(" "),o("h2",{attrs:{id:"connect-to-amazon-s3-using-access-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-amazon-s3-using-access-key"}},[t._v("#")]),t._v(" Connect to Amazon S3 using Access Key")]),t._v(" "),o("p",[t._v("The simplest way to connect to Amazon S3 is to provision a Workato IAM user. For this authentication method, you will need to provide the "),o("a",{attrs:{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("user credentials"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Workato will perform operations in your Amazon S3 as this IAM User. To use the full set of triggers and actions, the IAM User should have "),o("strong",[t._v("List")]),t._v("/"),o("strong",[t._v("Read")]),t._v("/"),o("strong",[t._v("Write")]),t._v(" permission to specific buckets & folders.")]),t._v(" "),o("p",[t._v("Refer to "),o("a",{attrs:{href:"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon documentation"),o("OutboundLink")],1),t._v(" to learn how to create an IAM User.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(882),alt:"Authorization method - Access key",width:"2834",height:"2197"}}),t._v(" "),o("em",[t._v("Authorization method - Access key")])],1),t._v(" "),o("h3",{attrs:{id:"input-fields-for-access-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-for-access-key"}},[t._v("#")]),t._v(" Input fields for Access Key")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Connection name")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Give this connection a unique name that identifies which S3 instance it is connected to.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization type")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Select "),o("strong",[t._v("Access Key")]),t._v(".")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Access key ID")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The ID of the IAM user.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Secret access key")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The secret of the IAM user.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Restrict to bucket")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Define which bucket this connection is restricted to.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Region")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Provide the region for this S3 account.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Download threads")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The default is one thread.")])])])]),t._v(" "),o("h2",{attrs:{id:"connect-to-amazon-s3-using-iam-role"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-amazon-s3-using-iam-role"}},[t._v("#")]),t._v(" Connect to Amazon S3 using IAM Role")]),t._v(" "),o("p",[t._v("If you prefer not to share your Amazon S3 access key, you can connect using "),o("a",{attrs:{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IAM Role"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("In this method, you will create an IAM Role for an external Workato's Amazon S3 account to access your Amazon S3. Learn more about IAM Role and granting access to third-party in this "),o("a",{attrs:{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon documentation"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(883),alt:"Authorization method - IAM role",width:"2841",height:"2328"}}),t._v(" "),o("em",[t._v("Authorization method - IAM role")])],1),t._v(" "),o("h3",{attrs:{id:"input-fields-for-iam-role"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-for-iam-role"}},[t._v("#")]),t._v(" Input fields for IAM role")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Connection name")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Give this connection a unique name that identifies which S3 instance it is connected to.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization type")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Select "),o("strong",[t._v("IAM role")]),t._v(".")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("IAM role ARN")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The IAM role ARN. Find out how to retrieve this "),o("a",{attrs:{href:"#how-to-retrieve-iam-role-arn"}},[t._v("here")]),t._v(".")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("External ID")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The external ID assigned to Workato to access the IAM role.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Restrict to bucket")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Define which bucket this connection is restricted to.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Region")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Provide the region for this S3 account.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Download threads")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The default is one thread.")])])])]),t._v(" "),o("h3",{attrs:{id:"how-to-retrieve-iam-role-arn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-retrieve-iam-role-arn"}},[t._v("#")]),t._v(" How to retrieve IAM role ARN")]),t._v(" "),o("p",[t._v("Follow these steps to retrieve the "),o("strong",[t._v("Role ARN")]),t._v(" and "),o("strong",[t._v("External ID")]),t._v(" required for the connection setup.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Steps")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("1.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Navigate to "),o("strong",[t._v("My Security Credentials")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(884),alt:"My Security Credentials",width:"2660",height:"700"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("2.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Select "),o("strong",[t._v("Roles")]),t._v(" > "),o("strong",[t._v("Create role")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(885),alt:"Create role",width:"2658",height:"1282"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("3.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Select "),o("strong",[t._v("Another AWS account")]),t._v(". Input Workato's Amazon S3 Account ID ("),o("code",[t._v("353360065216")]),t._v(")."),o("br"),o("DocImage",{attrs:{src:a(886),alt:"Workato Amazon S3 Account ID",width:"2660",height:"1006"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("4. (optional)")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("To increase security, select "),o("strong",[t._v("Require external ID")]),t._v(". Provide a meaningful "),o("strong",[t._v("External ID")]),t._v(" and record this down. You will need this in the "),o("a",{attrs:{href:"#input-fields-for-iam-role"}},[t._v("connection setup")]),t._v(" when creating a connection in Workato."),o("br"),o("DocImage",{attrs:{src:a(887),alt:"Require External ID",width:"1324",height:"809"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("5.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Select proper permissions for Workato to run automation in your Amazon S3. At the minimum, Workato should have List/Read/Write access to specific buckets or folders. In this tutorial, we will select "),o("code",[t._v("AmazonS3FullAccess")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(888),alt:"Select permissions",width:"2852",height:"1533"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("6. (optional)")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("If you are using object taggings, select an appropriate tag for this IAM role."),o("br"),o("DocImage",{attrs:{src:a(889),alt:"Add tag",width:"2880",height:"1800"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("7.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Give this IAM Role an appropriate name & description."),o("br"),o("DocImage",{attrs:{src:a(890),alt:"Review role",width:"2864",height:"1290"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("8.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("The IAM Role is now created. Select the role."),o("br"),o("DocImage",{attrs:{src:a(891),alt:"Select IAM role",width:"2879",height:"1449"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("9.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Copy the "),o("strong",[t._v("Role ARN")]),t._v(". You will need to use this in the "),o("a",{attrs:{href:"#input-fields-for-iam-role"}},[t._v("connection setup")]),t._v(" when creating an Amazon S3 connection in Workato."),o("br"),o("DocImage",{attrs:{src:a(892),alt:"Copy role ARN",width:"2862",height:"1286"}})],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("10.")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("To view the "),o("strong",[t._v("external ID")]),t._v(". Locate the "),o("strong",[t._v("Trust relationships")]),t._v(" tab."),o("br"),o("DocImage",{attrs:{src:a(893),alt:"Copy role ARN",width:"2862",height:"1382"}})],1)])])])])}),[],!1,null,null,null);e.default=n.exports},882:function(t,e,a){t.exports=a.p+"assets/img/auth-access-key.4a8d513b.png"},883:function(t,e,a){t.exports=a.p+"assets/img/auth-iam-role.29e64fba.png"},884:function(t,e,a){t.exports=a.p+"assets/img/security-credentials.fc0be1d3.png"},885:function(t,e,a){t.exports=a.p+"assets/img/create-role.ddedc8c0.png"},886:function(t,e,a){t.exports=a.p+"assets/img/trusted-entity.6d77608e.png"},887:function(t,e,a){t.exports=a.p+"assets/img/require-external-id.53fc967d.png"},888:function(t,e,a){t.exports=a.p+"assets/img/select-permissions.ffbdf5e5.png"},889:function(t,e,a){t.exports=a.p+"assets/img/add-tag.ef7b43f3.png"},890:function(t,e,a){t.exports=a.p+"assets/img/review-role.90c751cd.png"},891:function(t,e,a){t.exports=a.p+"assets/img/select-iam-role.c0dfde26.png"},892:function(t,e,a){t.exports=a.p+"assets/img/copy-role-arn.7e1585cf.png"},893:function(t,e,a){t.exports=a.p+"assets/img/find-external-id.c864bcee.png"}}]);