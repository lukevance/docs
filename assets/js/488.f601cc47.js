(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{2312:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"amazon-s3-trigger-new-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#amazon-s3-trigger-new-file"}},[e._v("#")]),e._v(" Amazon S3 trigger - New file")]),e._v(" "),i("p",[e._v("Triggers when a new file is added in a selected bucket/folder in Amazon S3.")]),e._v(" "),i("p",[e._v("Checks selected folder for new file once every poll interval. The output includes the file’s metadata and file contents. The file contents is returned as a "),i("router-link",{attrs:{to:"/features/file-streaming.html"}},[e._v("streaming object")]),e._v(" and can handle unlimited file size.")],1),e._v(" "),i("p",[e._v("Note that in Amazon S3, when a file is renamed, it is considered a new file. When a file is uploaded and overwrites an existing file with the same name, it is considered an updated file but not a new file.")]),e._v(" "),i("h2",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field name")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("When first started, this recipe should pick up events from")]),e._v(" "),i("td",[e._v("When recipe starts for the first time, it will pick up files created from this specified time. Once recipe has been run or tested, value cannot be changed. "),i("router-link",{attrs:{to:"/recipes/triggers.html#since-from"}},[e._v("Learn more about this field here")]),e._v(".")],1)]),e._v(" "),i("tr",[i("td",[e._v("Bucket region")]),e._v(" "),i("td",[e._v("The region of the bucket to monitor for new file, e.g. us-west-2. In Amazon S3, go to "),i("strong",[e._v("Bucket > Properties > Static website hosting")]),e._v(" to find your region in the Endpoint URL.")])]),e._v(" "),i("tr",[i("td",[e._v("Bucket")]),e._v(" "),i("td",[e._v("The bucket to monitor for new file. Select a bucket from the picklist or enter the bucket name directly.")])]),e._v(" "),i("tr",[i("td",[e._v("Folder")]),e._v(" "),i("td",[e._v("The folder to monitor for new file. Select a folder from the picklist or enter the folder path directly.")])]),e._v(" "),i("tr",[i("td",[e._v("Include sub-folders")]),e._v(" "),i("td",[e._v("Select "),i("strong",[e._v("Yes")]),e._v(" to monitor sub-folders for new files as well.")])]),e._v(" "),i("tr",[i("td",[e._v("Chunk size"),i("br"),e._v("(in kilobytes)")]),e._v(" "),i("td",[e._v("File contents will be "),i("router-link",{attrs:{to:"/features/file-streaming.html"}},[e._v("streamed")]),e._v(" in chunks of this size. Default is 1024 KB, minimum is 32 KB. Workato manages the chunk size automatically by default. Configure this when you want to optimize the data throughput yourself. Larger chunk size will increase throughput, but may exceed API limit.")],1)])])]),e._v(" "),i("p",[e._v("This trigger supports "),i("router-link",{attrs:{to:"/recipes/triggers.html#trigger-conditions"}},[e._v("Trigger Condition")]),e._v(", which allows you to filter trigger events.")],1),e._v(" "),i("h2",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field name")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("File name")]),e._v(" "),i("td",[e._v("The name of the file. Note that this is not file path.")])]),e._v(" "),i("tr",[i("td",[e._v("Last modified")]),e._v(" "),i("td",[e._v("The last modified date/time of the file.")])]),e._v(" "),i("tr",[i("td",[e._v("E tag")]),e._v(" "),i("td",[e._v("The hash of the file object, generated by Amazon S3.")])]),e._v(" "),i("tr",[i("td",[e._v("Size")]),e._v(" "),i("td",[e._v("The file size in bytes.")])]),e._v(" "),i("tr",[i("td",[e._v("Storage class")]),e._v(" "),i("td",[i("a",{attrs:{href:"https://aws.amazon.com/s3/storage-classes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage class"),i("OutboundLink")],1),e._v(" of this file object. Usually "),i("code",[e._v("S3 Standard")]),e._v(".")])]),e._v(" "),i("tr",[i("td",[e._v("File contents")]),e._v(" "),i("td",[e._v("Contents of the file. This is a "),i("router-link",{attrs:{to:"/features/file-streaming.html"}},[e._v("streaming object")]),e._v(" and can handle unlimited file size.")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);