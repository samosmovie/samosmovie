! function(n) {
	"use strict";
	var i = function(i, o) {
			var t, a, l, r, e, c = this,
				s = n(i);
			return this.repeat = function() {
				return s[0].novacancy ? !0 : (s[0].novacancy = !0, !1)
			}, this.writeCSS = function() {
				var i = c.css(),
					o = n("<style>" + i + "</style>");
				n("body").append(o)
			}, this.selector = function() {
				var n = s[0].tagName;
				return s[0].id && (n += "#" + s[0].id), s[0].className && (n += "." + s[0]
					.className), n
			}, this.css = function() {
				var n = this.selector(),
					i = "",
					o = "",
					a = "";
				null !== t.color && (i += "color: " + t.color + ";", o += "color: " + t.color +
					"; opacity: 0.3;"), null !== t.glow && (a += "text-shadow: " + t.glow.toString() +
					";", i += a);
				var l = "";
				return l += n + " .novacancy." + t.classOn + " { " + i + " }\n", l += n +
					" .novacancy." + t.classOff + " { " + o + " }\n"
			}, this.rand = function(n, i) {
				return Math.floor(Math.random() * (i - n + 1) + n)
			}, this.blink = function(n) {
				c.off(n), n[0].blinking = !0, setTimeout(function() {
					c.on(n), n[0].blinking = !1, c.reblink(n)
				}, c.rand(t.blinkMin, t.blinkMax))
			}, this.reblink = function(n) {
				setTimeout(function() {
					c.rand(1, 100) <= t.reblinkProbability && c.blink(n)
				}, c.rand(t.blinkMin, t.blinkMax))
			}, this.on = function(n) {
				n.removeClass(t.classOff).addClass(t.classOn)
			}, this.off = function(n) {
				n.removeClass(t.classOn).addClass(t.classOff)
			}, this.buildHTML = function() {
				var i = "";
				return n.each(s.contents(), function(o, a) {
					if (3 == a.nodeType) {
						var l = a.nodeValue.split("");
						n.each(l, function(n, o) {
							i += '<span class="novacancy ' + t.classOn + '">' + o + "</span>"
						})
					} else i += a.outerHTML
				}), i
			}, this.arrayMake = function() {
				var i, o, a = r.length,
					l = c.randomArray(a),
					e = t.off,
					s = t.blink;
				return e = Math.min(e, a), e = Math.max(0, e), o = l.splice(0, e), n.each(
						o,
						function(n, i) {
							c.off(r.eq(i))
						}), s = 0 === s ? a : s, s = Math.min(s, a - e), s = Math.max(0, s), i =
					l.splice(0, s)
			}, this.randomArray = function(n) {
				var i, o, t, a = [];
				for (i = 0; n > i; ++i) a[i] = i;
				for (i = 0; n > i; ++i) o = parseInt(Math.random() * n, 10), t = a[o], a[o] =
					a[i], a[i] = t;
				return a
			}, this.loop = function() {
				if (a && 0 !== e.length) {
					var n, i;
					n = e[c.rand(0, e.length - 1)], i = r.eq(n), i[0].blinking || c.blink(i),
						l = setTimeout(function() {
							c.loop()
						}, c.rand(t.loopMin, t.loopMax))
				}
			}, this.blinkOn = function() {
				a || (a = !0, l = setTimeout(function() {
					c.loop()
				}, c.rand(t.loopMin, t.loopMax)))
			}, this.blinkOff = function() {
				a && (a = !1, clearTimeout(l))
			}, this.bindEvent = function() {
				s.on("blinkOn", function(n) {
					c.blinkOn()
				}), s.on("blinkOff", function(n) {
					c.blinkOff()
				})
			}, c.repeat() ? !0 : (t = o, a = !1, l = 0, s.html(c.buildHTML()), r = s.find(
				"span.novacancy"), e = c.arrayMake(), c.bindEvent(), c.writeCSS(), void(t
				.autoOn && c.blinkOn()))
		},
		o = function(i) {
			var o = n.extend({
				reblinkProbability: 1 / 3,
				blinkMin: .01,
				blinkMax: .5,
				loopMin: .5,
				loopMax: 2,
				color: "ORANGE",
				glow: ["0 0 80px Orange", "0 0 30px Red", "0 0 6px Yellow"],
				off: 0,
				blink: 0,
				classOn: "on",
				classOff: "off",
				autoOn: !0
			}, i);
			return o.reblinkProbability *= 100, o.blinkMin *= 1e3, o.blinkMax *= 1e3, o.loopMin *=
				1e3, o.loopMax *= 1e3, o
		};
	n.fn.novacancy = function(t) {
		return n.each(this, function(n, a) {
			new i(this, o(t))
		})
	}
}(jQuery);
