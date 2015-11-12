/*\
title: addTag
type: application/javascript
module-type: macro
tags: Chris2Fr/TiddlyBox

Macro to output tiddlers matching a filter to Plugin

\*/
/*\
title: addTag
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

exports.name = "checkShortName";

exports.params = [
	{name:"targetTiddler"},
  {name:"targetTag"}
];

/*
Run the macro
*/
exports.run = function(targetTiddler, targetTag) {
  store.setTiddlerTag(targetTiddler,true,targetTag);
  return "added " + targetTiddler + " to " + targetTag;
};

})();
