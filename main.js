(function() {
	window.c = {}; //register namespace
	c.cssRules = [];

	for(var i = 0, iLen = document.styleSheets.length; i < iLen; i++) {
		var styleSheet = document.styleSheets[i];
		
		if(getDomain(styleSheet.href) == getDomain(window.location.href)) { //Necessary to avoid Cross-Origin Problems
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
	}
	
	function getDomain(url) {
		if(typeof url == "string") {
			var fullDomain = (url.match(/:\/\/(.[^/]+)/)[1]).replace('www.','');
			var domain = fullDomain.split('.');

			if(domain.length == 2) {
				return domain[0];
			} else {
				return domain[1];
			}
		}
	}
})();