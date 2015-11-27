/*\
title: afterLastSlash
type: application/javascript
module-type: macro
tags: HowWowNow/Goodies

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
