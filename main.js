(function() {
	window.ç = {};
	ç.cssRules = [];

	for(var i = 0, iLen = document.styleSheets.length; i < iLen; i++) {
		var styleSheet = document.styleSheets[i];

		for(var j = 0, jLen = styleSheet.cssRules.length; j < jLen; j++) {
			var cssRule = styleSheet.cssRules[j];

			if(cssRule instanceof CSSStyleRule) {
				console.log(cssRule.selectorText);

				ç.cssRules.push(cssRule.cssText);
				ç[cssRule.selectorText] = cssRule.style;
			}
		}
	}
	});
})();