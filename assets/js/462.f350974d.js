(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{2183:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"google-drive-trigger-new-file-or-folder-in-folder-hierarchy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#google-drive-trigger-new-file-or-folder-in-folder-hierarchy"}},[e._v("#")]),e._v(" Google Drive trigger - New file or folder in folder hierarchy")]),e._v(" "),i("p",[e._v("This trigger checks periodically for new files or folders created in a specified folder and its subfolders. Each new file and folder generates a new job. Use this to listen on a family of folders.")]),e._v(" "),i("p",[e._v("This trigger is compatible with "),i("router-link",{attrs:{to:"/features/file-streaming.html"}},[e._v("streaming")]),e._v(", allowing it to send large amounts of data from Google Drive to other streaming compatible connectors in Workato.")],1),e._v(" "),i("h2",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field name")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Folder")]),e._v(" "),i("td",[e._v("The folder to monitor for new files or folders. Sub-folders will be monitored as well. Select a folder from the picklist or enter the folder ID directly.")])]),e._v(" "),i("tr",[i("td",[e._v("Chunk size (KB)")]),e._v(" "),i("td",[e._v("Defaults to 1024 KB. This denotes the chunk size when sending data from Google drive to a downstream application. Only applicable when the downstream application is streaming compatible as well.")])])])]),e._v(" "),i("h2",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),i("p",[e._v("Note that in Google Drive API, the terms "),i("code",[e._v("folder")]),e._v(" and "),i("code",[e._v("file")]),e._v(" are used interchangeably. A "),i("code",[e._v("folder")]),e._v(" is technically a special "),i("code",[e._v("file")]),e._v(". So whenever the field name or field description mentions "),i("code",[e._v("file")]),e._v(", it also applies to "),i("code",[e._v("folder")]),e._v(".")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field name")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Is folder")]),e._v(" "),i("td",[e._v("Whether this is a folder.")])]),e._v(" "),i("tr",[i("td",[e._v("Is google file")]),e._v(" "),i("td",[e._v("Whether this is a Google file i.e. Google Sheets, Google Docs, Google Slides, etc.")])]),e._v(" "),i("tr",[i("td",[e._v("Is other file")]),e._v(" "),i("td",[e._v("Whether this is a non-Google file i.e. csv, pdf, docx, etc.")])]),e._v(" "),i("tr",[i("td",[e._v("File contents")]),e._v(" "),i("td",[e._v("Full contents of the file. This is a "),i("router-link",{attrs:{to:"/features/file-streaming.html"}},[e._v("streaming object")]),e._v(".")],1)]),e._v(" "),i("tr",[i("td",[e._v("ID")]),e._v(" "),i("td",[e._v("ID of the file.")])]),e._v(" "),i("tr",[i("td",[e._v("Name")]),e._v(" "),i("td",[e._v("Name of the file  older")])]),e._v(" "),i("tr",[i("td",[e._v("Mime type")]),e._v(" "),i("td",[e._v("Mime type of this file, as stated in "),i("a",{attrs:{href:"https://developers.google.com/drive/api/v3/mime-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google documentation"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("tr",[i("td",[e._v("Description")]),e._v(" "),i("td",[e._v("A short description of the file.")])]),e._v(" "),i("tr",[i("td",[e._v("Starred")]),e._v(" "),i("td",[e._v("Whether the user has starred the file.")])]),e._v(" "),i("tr",[i("td",[e._v("Trashed")]),e._v(" "),i("td",[e._v("Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.")])]),e._v(" "),i("tr",[i("td",[e._v("Explicitly trashed")]),e._v(" "),i("td",[e._v("Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder (e.g. when you trashed the whole parent folder)")])]),e._v(" "),i("tr",[i("td",[e._v("Parents")]),e._v(" "),i("td",[e._v("The list of the parent folders which contain the file.")])]),e._v(" "),i("tr",[i("td",[e._v("- ID")]),e._v(" "),i("td",[e._v("The ID of the parent folder which contain the file.")])]),e._v(" "),i("tr",[i("td",[e._v("- List size")]),e._v(" "),i("td",[e._v("The number of the parent folders which contain the file.")])]),e._v(" "),i("tr",[i("td",[e._v("Version")]),e._v(" "),i("td",[e._v("A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.")])]),e._v(" "),i("tr",[i("td",[e._v("Web content link")]),e._v(" "),i("td",[e._v("A link for downloading the content of the file in a browser. This is only available for files with binary content in Drive.")])]),e._v(" "),i("tr",[i("td",[e._v("Web view link")]),e._v(" "),i("td",[e._v("A link for opening the file in a relevant Google editor or viewer in a browser.")])]),e._v(" "),i("tr",[i("td",[e._v("Icon link")]),e._v(" "),i("td",[e._v("A static, unauthenticated link to the file's icon.")])]),e._v(" "),i("tr",[i("td",[e._v("Thumbnail link")]),e._v(" "),i("td",[e._v("A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.")])]),e._v(" "),i("tr",[i("td",[e._v("Viewed by me")]),e._v(" "),i("td",[e._v("Whether the file has been viewed by this user.")])]),e._v(" "),i("tr",[i("td",[e._v("Viewed by me time")]),e._v(" "),i("td",[e._v("The last time the file was viewed by this user (RFC 3339 date-time).")])]),e._v(" "),i("tr",[i("td",[e._v("Created time")]),e._v(" "),i("td",[e._v("The time at which the file was created (RFC 3339 date-time).")])]),e._v(" "),i("tr",[i("td",[e._v("Modified time")]),e._v(" "),i("td",[e._v("The last time the file was modified by anyone (RFC 3339 date-time).")])]),e._v(" "),i("tr",[i("td",[e._v("Modified by me time")]),e._v(" "),i("td",[e._v("The last time the file was modified by this user (RFC 3339 date-time).")])]),e._v(" "),i("tr",[i("td",[e._v("Sharing user")]),e._v(" "),i("td",[e._v("The user who shared the file with the requesting user, if applicable.")])]),e._v(" "),i("tr",[i("td",[e._v("- Display name")]),e._v(" "),i("td",[e._v("A plain text displayable name for this user.")])]),e._v(" "),i("tr",[i("td",[e._v("- Email address")]),e._v(" "),i("td",[e._v("The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.")])]),e._v(" "),i("tr",[i("td",[e._v("- Permission ID")]),e._v(" "),i("td",[e._v("The user's ID as visible in Permission resources.")])]),e._v(" "),i("tr",[i("td",[e._v("- Photo link")]),e._v(" "),i("td",[e._v("A link to the user's profile photo, if available.")])]),e._v(" "),i("tr",[i("td",[e._v("- Me")]),e._v(" "),i("td",[e._v("Whether this user is the requesting user.")])]),e._v(" "),i("tr",[i("td",[e._v("Owners")]),e._v(" "),i("td",[e._v("The list of owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for Team Drive files.")])]),e._v(" "),i("tr",[i("td",[e._v("- Display name")]),e._v(" "),i("td",[e._v("A plain text displayable name for this user.")])]),e._v(" "),i("tr",[i("td",[e._v("- Email address")]),e._v(" "),i("td",[e._v("A link to the user's profile photo, if available.")])]),e._v(" "),i("tr",[i("td",[e._v("- Permission ID")]),e._v(" "),i("td",[e._v("The user's ID as visible in Permission resources.")])]),e._v(" "),i("tr",[i("td",[e._v("- Photo link")]),e._v(" "),i("td",[e._v("A link to the user's profile photo, if available.")])]),e._v(" "),i("tr",[i("td",[e._v("- Me")]),e._v(" "),i("td",[e._v("Whether this user is the requesting user.")])]),e._v(" "),i("tr",[i("td",[e._v("- List size")]),e._v(" "),i("td",[e._v("Number of owners in this list.")])]),e._v(" "),i("tr",[i("td",[e._v("Last modifying user")]),e._v(" "),i("td",[e._v("The last user to modify the file.")])]),e._v(" "),i("tr",[i("td",[e._v("- Display name")]),e._v(" "),i("td",[e._v("A plain text displayable name for this user.")])]),e._v(" "),i("tr",[i("td",[e._v("- Email address")]),e._v(" "),i("td",[e._v("The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.")])]),e._v(" "),i("tr",[i("td",[e._v("- Permission ID")]),e._v(" "),i("td",[e._v("The user's ID as visible in Permission resources.")])]),e._v(" "),i("tr",[i("td",[e._v("- Photo link")]),e._v(" "),i("td",[e._v("A link to the user's profile photo, if available.")])]),e._v(" "),i("tr",[i("td",[e._v("- Me")]),e._v(" "),i("td",[e._v("Whether this user is the requesting user.")])]),e._v(" "),i("tr",[i("td",[e._v("Shared")]),e._v(" "),i("td",[e._v("Whether the file has been shared. Not populated for Team Drive files.")])]),e._v(" "),i("tr",[i("td",[e._v("Owned by me")]),e._v(" "),i("td",[e._v("Whether the user owns the file. Not populated for Team Drive files.")])]),e._v(" "),i("tr",[i("td",[e._v("Viewers can copy content")]),e._v(" "),i("td",[e._v("Deprecated.")])]),e._v(" "),i("tr",[i("td",[e._v("Writers can share")]),e._v(" "),i("td",[e._v("Whether users with only writer permission can modify the file's permissions. Not populated for Team Drive files.")])]),e._v(" "),i("tr",[i("td",[e._v("Original filename")]),e._v(" "),i("td",[e._v("The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Drive.")])]),e._v(" "),i("tr",[i("td",[e._v("Full file extension")]),e._v(" "),i("td",[e._v('The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.')])]),e._v(" "),i("tr",[i("td",[e._v("File extension")]),e._v(" "),i("td",[e._v("The final component of fullFileExtension. This is only available for files with binary content in Drive.")])]),e._v(" "),i("tr",[i("td",[e._v("MD5 checksum")]),e._v(" "),i("td",[e._v("The MD5 checksum for the content of the file. This is only applicable to files with binary content in Drive.")])]),e._v(" "),i("tr",[i("td",[e._v("Size")]),e._v(" "),i("td",[e._v("The size of the file's content in bytes. This is only applicable to files with binary content in Drive.")])]),e._v(" "),i("tr",[i("td",[e._v("Quota byte used")]),e._v(" "),i("td",[e._v("The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.")])]),e._v(" "),i("tr",[i("td",[e._v("Head revision ID")]),e._v(" "),i("td",[e._v("The ID of the file's head revision. This is currently only available for files with binary content in Drive.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);