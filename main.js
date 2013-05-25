(function() {
	window. = {}; //register namespace
	c.cssRules = [];

	for(var i = 0, iLen = document.styleSheets.length; i < iLen; i++) {
		var styleSheet = document.styleSheets[i];

		if(styleSheet.cssRules) {
			for(var j = 0, jLen = styleSheet.cssRules.length; j < jLen; j++) {
				var cssRule = styleSheet.cssRules[j];

				if(cssRule instanceof CSSStyleRule) {
					c.cssRules.push(cssRule.cssText);
					c[cssRule.selectorText] = cssRule.style;
				}
			}
		}
	}
})();