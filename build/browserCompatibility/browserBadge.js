!(function() {

	var exports = {};

	exports.buildBadge = buildBadge;
	function buildBadge(browsers) {
		var browserVersions = browsers.versions;
		var browserImages  = browsers.images;
		var browserNames = Object.keys(browserVersions);
		var width = browserNames.length * 52 + 2;
		var height = Math.max.apply(null, browserNames.map(function (name) {
			return Object.keys(browserVersions[name]).length * 11 + 58;
		}));
		
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext('2d');
		
		ctx.fillStyle = 'rgb(55,55,55)';
		round(ctx, 0, 0, width, height, 8);
		ctx.fill();
		
		browserNames.forEach(function (name, ix) {
			ctx.fillStyle = 'rgb(62,62,62)';
			round(ctx, 2 + ix * 52, 2, 50, height - 4, 8);
			ctx.fill();
		});
		
		(function next (ix) {
			var name = browserNames[ix];
			if(!name) { return; }
				
				var img = new Image();
				img.addEventListener('load', drawImg);
				img.src = browserImages[name]; // 'static2/' + name + '.png'
				
				function drawImg() {
					var w = img.width;
					var h = img.height;
					var x = 2 + 52 * ix + (52 - w) / 2;
					
					ctx.drawImage(img, x, 5, w, h);
					drawVersions(ctx, browserVersions[name], 5 + 52 * ix);
				}

				
				next(ix + 1);
		})(0);
		
		return;
	}

	function drawVersions (ctx, versions, x) {
		var keys = Object.keys(versions).sort();
		keys.forEach(function (key, i) {
			var v = versions[key];
			var y = 58 + i * 11;
			
			ctx.font = 'bold 12px sans-serif';
			// ok -> ✓ green. fail -> ⚑ red
			ctx.fillStyle = v ? 'rgb(51,255,26)' : 'rgb(255,51,26)';
			ctx.fillText(v ? '✓' : '⚑', x, y);
			
			ctx.font = 'normal 10px sans-serif';
			ctx.fillText(key, x + 12, y);
		});
	}

	function round (ctx, x, y, w, h, r) {
		ctx.beginPath();
		ctx.moveTo(x, y + r);
		
		for (var angle = 0; angle <= 2 * Math.PI; angle += Math.PI / 2) {
			var c = Math.cos(angle);
			var s = Math.sin(angle);
			
			ctx.arcTo(x, y, x + w * c, y + h * s, r);
			ctx.lineTo(x + c * r, y + s * r);
			
			x += c * w;
			y += s * h;
		}
		ctx.closePath();
	}

	window.BrowserBadge = exports;
}(window))
