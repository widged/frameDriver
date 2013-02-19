var browsers = {
	versions: {
		"explorer" : {" 6.0":true, " 7.0":true, " 8.0":true, " 9.0":true, "10.0":true},
		"firefox"  : {" 6.0":true,"10.0":true,"14.0":true, "15.0":true, "nightly":true},
		"chrome"   : {"17.0":true, "21.0":true, "22.0":true, "canary":true},
		"safari"   : {" 4.0": true,  "5.0.5": true, " 5.1": true},
		"opera"    : {"11.0":true,"12.0":true, "next":true}
	},
	images : {
		"chrome"   : "data:image/png;base64,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",
		"explorer" : "data:image/png;base64,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",
		"firefox"  : "data:image/png;base64,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",
		"opera"    : "data:image/png;base64,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",
		"safari"   : "data:image/png;base64,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"
	}
};
