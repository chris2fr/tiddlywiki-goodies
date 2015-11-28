/*\  vim :set ts=4 sw=4 sts=4 et :
title: afterLastSlash
type: application/javascript
module-type: macro
description: Grabs last part of string after last /
caption: afterLastSlash
tags: $:/plugins/howwownow/goodies 
creator: Christopher Mann <christopher@mann.fr>
created: 20151128000000000

Macro to only show what is after the last / of a name

\*/
/*\
title: afterLastSlash
type: application/javascript
module-type: macro

Just eliminates non-conform spaces

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "afterLastSlash";

exports.params = [
	{name: "title",
   default: ""}
];

/*
Run the macro
*/
exports.run = function(title) {
  return "" + title.split("/").pop()
};

})();
