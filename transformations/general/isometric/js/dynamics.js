(function() {
    var t, e, n, r, o, i, s, a, u, l, f, h, p, c, m, d, g, y, v, b, w, x, M, S, k, T, C, H, R, q, X, I, Y, j, z, F, G, A, O, V, Z, E, L, D, P, W, N, $, B, U, K, J, Q, _, te, ee, ne, re = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    q = function() {
        return "visible" === document.visibilityState || null != C.tests
    }, z = function() {
        var t;
        return t = [], "undefined" != typeof document && null !== document && document.addEventListener("visibilitychange", function() {
            var e, n, r, o;
            for (o = [], n = 0, r = t.length; r > n; n++) e = t[n], o.push(e(q()));
            return o
        }),
            function(e) {
                return t.push(e)
            }
    }(), M = function(t) {
        var e, n, r;
        n = {};
        for (e in t) r = t[e], n[e] = r;
        return n
    }, w = function(t) {
        var e;
        return e = {},
            function() {
                var n, r, o, i, s;
                for (r = "", i = 0, s = arguments.length; s > i; i++) n = arguments[i], r += n.toString() + ",";
                return o = e[r], o || (e[r] = o = t.apply(this, arguments)), o
            }
    }, j = function(t) {
        return function(e) {
            var n, r, o;
            return e instanceof Array || e instanceof NodeList || e instanceof HTMLCollection ? o = function() {
                var o, i, s;
                for (s = [], r = o = 0, i = e.length; i >= 0 ? i > o : o > i; r = i >= 0 ? ++o : --o) n = Array.prototype.slice.call(arguments, 1), n.splice(0, 0, e[r]), s.push(t.apply(this, n));
                return s
            }.apply(this, arguments) : t.apply(this, arguments)
        }
    }, g = function(t, e) {
        var n, r, o;
        o = [];
        for (n in e) r = e[n], o.push(null != t[n] ? t[n] : t[n] = r);
        return o
    }, y = function(t, e) {
        var n, r, o;
        if (null != t.style) return v(t, e);
        o = [];
        for (n in e) r = e[n], o.push(t[n] = r.format());
        return o
    }, v = function(t, e) {
        var n, r, o, i, s;
        e = F(e), i = [], n = X(t);
        for (r in e) s = e[r], te.contains(r) ? i.push([r, s]) : (null != s.format && (s = s.format()), "number" == typeof s && (s = "" + s + ne(r, s)), n && U.contains(r) ? t.setAttribute(r, s) : t.style[A(r)] = s);
        return i.length > 0 ? n ? (o = new l, o.applyProperties(i), t.setAttribute("transform", o.decompose().format())) : (s = i.map(function(t) {
            return ee(t[0], t[1])
        }).join(" "), t.style[A("transform")] = s) : void 0
    }, X = function(t) {
        var e, n;
        return "undefined" != typeof SVGElement && null !== SVGElement && "undefined" != typeof SVGSVGElement && null !== SVGSVGElement ? t instanceof SVGElement && !(t instanceof SVGSVGElement) : null != (e = null != (n = C.tests) && "function" == typeof n.isSVG ? n.isSVG(t) : void 0) ? e : !1
    }, Z = function(t, e) {
        var n;
        return n = Math.pow(10, e), Math.round(t * n) / n
    }, f = function() {
        function t(t) {
            var e, n, r;
            for (this.obj = {}, n = 0, r = t.length; r > n; n++) e = t[n], this.obj[e] = 1
        }
        return t.prototype.contains = function(t) {
            return 1 === this.obj[t]
        }, t
    }(), _ = function(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }, O = new f("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")), T = new f("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")), te = new f("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")), U = new f("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")), ne = function(t, e) {
        return "number" != typeof e ? "" : O.contains(t) ? "px" : T.contains(t) ? "deg" : ""
    }, ee = function(t, e) {
        var n, r;
        return n = ("" + e).match(/^([0-9.-]*)([^0-9]*)$/), null != n ? (e = n[1], r = n[2]) : e = parseFloat(e), e = Z(parseFloat(e), 10), (null == r || "" === r) && (r = ne(t, e)), "" + t + "(" + e + r + ")"
    }, F = function(t) {
        var e, n, r, o, i, s, a, u;
        r = {};
        for (o in t)
            if (i = t[o], te.contains(o))
                if (n = o.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/), n && n[2].length > 0) r[o] = i;
                else
                    for (u = ["X", "Y", "Z"], s = 0, a = u.length; a > s; s++) e = u[s], r[n[1] + e] = i;
            else r[o] = i;
        return r
    }, k = function(t) {
        var e;
        return e = "opacity" === t ? 1 : 0, "" + e + ne(t, e)
    }, H = function(t, e) {
        var n, r, o, i, s, a, f, h, p, c, m;
        if (i = {}, n = X(t), null != t.style)
            for (s = window.getComputedStyle(t, null), f = 0, p = e.length; p > f; f++) r = e[f], te.contains(r) ? null == i.transform && (o = n ? new l(null != (m = t.transform.baseVal.consolidate()) ? m.matrix : void 0) : u.fromTransform(s[A("transform")]), i.transform = o.decompose()) : (a = s[r], null == a && U.contains(r) && (a = t.getAttribute(r)), ("" === a || null == a) && (a = k(r)), i[r] = S(a));
        else
            for (h = 0, c = e.length; c > h; h++) r = e[h], i[r] = S(t[r]);
        return i
    }, S = function(t) {
        var e, n, o, u, l;
        for (o = [r, s, i, a], u = 0, l = o.length; l > u; u++)
            if (n = o[u], e = n.create(t), null != e) return e;
        return null
    }, a = function() {
        function t(t) {
            this.parts = t, this.format = re(this.format, this), this.interpolate = re(this.interpolate, this)
        }
        return t.prototype.interpolate = function(e, n) {
            var r, o, i, s, a, u;
            for (s = this.parts, r = e.parts, i = [], o = a = 0, u = Math.min(s.length, r.length); u >= 0 ? u > a : a > u; o = u >= 0 ? ++a : --a) i.push(null != s[o].interpolate ? s[o].interpolate(r[o], n) : s[o]);
            return new t(i)
        }, t.prototype.format = function() {
            var t;
            return t = this.parts.map(function(t) {
                return null != t.format ? t.format() : t
            }), t.join("")
        }, t.create = function(e) {
            var n, r, s, a, u, l, f, h, p, c, m;
            for (e = "" + e, s = [], f = [{
                re: /(#[a-f\d]{3,6})/gi,
                klass: o,
                parse: function(t) {
                    return t
                }
            }, {
                re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/gi,
                klass: o,
                parse: function(t) {
                    return t
                }
            }, {
                re: /([-+]?[\d.]+)/gi,
                klass: i,
                parse: parseFloat
            }], h = 0, c = f.length; c > h; h++)
                for (l = f[h], u = l.re; r = u.exec(e);) s.push({
                    index: r.index,
                    length: r[1].length,
                    interpolable: l.klass.create(l.parse(r[1]))
                });
            for (s = s.sort(function(t, e) {
                return t.index > e.index
            }), a = [], n = 0, p = 0, m = s.length; m > p; p++) r = s[p], r.index < n || (r.index > n && a.push(e.substring(n, r.index)), a.push(r.interpolable), n = r.index + r.length);
            return n < e.length && a.push(e.substring(n)), new t(a)
        }, t
    }(), s = function() {
        function t(t) {
            this.format = re(this.format, this), this.interpolate = re(this.interpolate, this), this.obj = t
        }
        return t.prototype.interpolate = function(e, n) {
            var r, o, i, s, a;
            s = this.obj, r = e.obj, i = {};
            for (o in s) a = s[o], i[o] = null != a.interpolate ? a.interpolate(r[o], n) : a;
            return new t(i)
        }, t.prototype.format = function() {
            return this.obj
        }, t.create = function(e) {
            var n, r, o;
            if (e instanceof Object) {
                r = {};
                for (n in e) o = e[n], r[n] = S(o);
                return new t(r)
            }
            return null
        }, t
    }(), i = function() {
        function t(t) {
            this.format = re(this.format, this), this.interpolate = re(this.interpolate, this), this.value = parseFloat(t)
        }
        return t.prototype.interpolate = function(e, n) {
            var r, o;
            return o = this.value, r = e.value, new t((r - o) * n + o)
        }, t.prototype.format = function() {
            return Z(this.value, 5)
        }, t.create = function(e) {
            return "number" == typeof e ? new t(e) : null
        }, t
    }(), r = function() {
        function t(t) {
            this.values = t, this.format = re(this.format, this), this.interpolate = re(this.interpolate, this)
        }
        return t.prototype.interpolate = function(e, n) {
            var r, o, i, s, a, u;
            for (s = this.values, r = e.values, i = [], o = a = 0, u = Math.min(s.length, r.length); u >= 0 ? u > a : a > u; o = u >= 0 ? ++a : --a) i.push(null != s[o].interpolate ? s[o].interpolate(r[o], n) : s[o]);
            return new t(i)
        }, t.prototype.format = function() {
            return this.values.map(function(t) {
                return null != t.format ? t.format() : t
            })
        }, t.createFromArray = function(e) {
            var n;
            return n = e.map(function(t) {
                return S(t) || t
            }), n = n.filter(function(t) {
                return null != t
            }), new t(n)
        }, t.create = function(e) {
            return e instanceof Array ? t.createFromArray(e) : null
        }, t
    }(), t = function() {
        function t(t, e) {
            this.rgb = null != t ? t : {}, this.format = e, this.toRgba = re(this.toRgba, this), this.toRgb = re(this.toRgb, this), this.toHex = re(this.toHex, this)
        }
        return t.fromHex = function(e) {
            var n, r;
            return n = e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i), null != n && (e = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), r = e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i), null != r ? new t({
                r: parseInt(r[1], 16),
                g: parseInt(r[2], 16),
                b: parseInt(r[3], 16),
                a: 1
            }, "hex") : null
        }, t.fromRgb = function(e) {
            var n, r;
            return n = e.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/), null != n ? new t({
                r: parseFloat(n[1]),
                g: parseFloat(n[2]),
                b: parseFloat(n[3]),
                a: parseFloat(null != (r = n[4]) ? r : 1)
            }, null != n[4] ? "rgba" : "rgb") : null
        }, t.componentToHex = function(t) {
            var e;
            return e = t.toString(16), 1 === e.length ? "0" + e : e
        }, t.prototype.toHex = function() {
            return "#" + t.componentToHex(this.rgb.r) + t.componentToHex(this.rgb.g) + t.componentToHex(this.rgb.b)
        }, t.prototype.toRgb = function() {
            return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
        }, t.prototype.toRgba = function() {
            return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
        }, t
    }(), o = function() {
        function e(t) {
            this.color = t, this.format = re(this.format, this), this.interpolate = re(this.interpolate, this)
        }
        return e.prototype.interpolate = function(n, r) {
            var o, i, s, a, u, l, f, h;
            for (a = this.color, o = n.color, s = {}, h = ["r", "g", "b"], l = 0, f = h.length; f > l; l++) i = h[l], u = Math.round((o.rgb[i] - a.rgb[i]) * r + a.rgb[i]), s[i] = Math.min(255, Math.max(0, u));
            return i = "a", u = Z((o.rgb[i] - a.rgb[i]) * r + a.rgb[i], 5), s[i] = Math.min(1, Math.max(0, u)), new e(new t(s, o.format))
        }, e.prototype.format = function() {
            return "hex" === this.color.format ? this.color.toHex() : "rgb" === this.color.format ? this.color.toRgb() : "rgba" === this.color.format ? this.color.toRgba() : void 0
        }, e.create = function(n) {
            var r;
            if ("string" == typeof n) return r = t.fromHex(n) || t.fromRgb(n), null != r ? new e(r) : null
        }, e
    }(), n = function() {
        function t(t) {
            this.props = t, this.applyRotateCenter = re(this.applyRotateCenter, this), this.format = re(this.format, this), this.interpolate = re(this.interpolate, this)
        }
        return t.prototype.interpolate = function(e, n) {
            var r, o, i, s, a, u, l, f, h, p, c, m;
            for (i = {}, p = ["translate", "scale", "rotate"], s = 0, f = p.length; f > s; s++)
                for (o = p[s], i[o] = [], r = a = 0, c = this.props[o].length; c >= 0 ? c > a : a > c; r = c >= 0 ? ++a : --a) i[o][r] = (e.props[o][r] - this.props[o][r]) * n + this.props[o][r];
            for (r = u = 1; 2 >= u; r = ++u) i.rotate[r] = e.props.rotate[r];
            for (m = ["skew"], l = 0, h = m.length; h > l; l++) o = m[l], i[o] = (e.props[o] - this.props[o]) * n + this.props[o];
            return new t(i)
        }, t.prototype.format = function() {
            return "translate(" + this.props.translate.join(",") + ") rotate(" + this.props.rotate.join(",") + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(",") + ")"
        }, t.prototype.applyRotateCenter = function(t) {
            var e, n, r, o, i, s;
            for (n = b.createSVGMatrix(), n = n.translate(t[0], t[1]), n = n.rotate(this.props.rotate[0]), n = n.translate(-t[0], -t[1]), r = new l(n), o = r.decompose().props.translate, s = [], e = i = 0; 1 >= i; e = ++i) s.push(this.props.translate[e] -= o[e]);
            return s
        }, t
    }(), b = "undefined" != typeof document && null !== document ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0, l = function() {
        function t(t) {
            this.m = t, this.applyProperties = re(this.applyProperties, this), this.decompose = re(this.decompose, this), this.m || (this.m = b.createSVGMatrix())
        }
        return t.prototype.decompose = function() {
            var t, e, r, o, i;
            return o = new h([this.m.a, this.m.b]), i = new h([this.m.c, this.m.d]), t = o.length(), r = o.dot(i), o = o.normalize(), e = i.combine(o, 1, -r).length(), new n({
                translate: [this.m.e, this.m.f],
                rotate: [180 * Math.atan2(this.m.b, this.m.a) / Math.PI, this.rotateCX, this.rotateCY],
                scale: [t, e],
                skew: r / e * 180 / Math.PI
            })
        }, t.prototype.applyProperties = function(t) {
            var e, n, r, o, i, s, a, u;
            for (e = {}, i = 0, s = t.length; s > i; i++) r = t[i], e[r[0]] = r[1];
            for (n in e) o = e[n], "translateX" === n ? this.m = this.m.translate(o, 0) : "translateY" === n ? this.m = this.m.translate(0, o) : "scaleX" === n ? this.m = this.m.scale(o, 1) : "scaleY" === n ? this.m = this.m.scale(1, o) : "rotateZ" === n ? this.m = this.m.rotate(o) : "skewX" === n ? this.m = this.m.skewX(o) : "skewY" === n && (this.m = this.m.skewY(o));
            return this.rotateCX = null != (a = e.rotateCX) ? a : 0, this.rotateCY = null != (u = e.rotateCY) ? u : 0
        }, t
    }(), h = function() {
        function t(t) {
            this.els = t, this.combine = re(this.combine, this), this.normalize = re(this.normalize, this), this.length = re(this.length, this), this.cross = re(this.cross, this), this.dot = re(this.dot, this), this.e = re(this.e, this)
        }
        return t.prototype.e = function(t) {
            return 1 > t || t > this.els.length ? null : this.els[t - 1]
        }, t.prototype.dot = function(t) {
            var e, n, r;
            if (e = t.els || t, r = 0, n = this.els.length, n !== e.length) return null;
            for (n += 1; --n;) r += this.els[n - 1] * e[n - 1];
            return r
        }, t.prototype.cross = function(e) {
            var n, r;
            return r = e.els || e, 3 !== this.els.length || 3 !== r.length ? null : (n = this.els, new t([n[1] * r[2] - n[2] * r[1], n[2] * r[0] - n[0] * r[2], n[0] * r[1] - n[1] * r[0]]))
        }, t.prototype.length = function() {
            var t, e, n, r, o;
            for (t = 0, o = this.els, n = 0, r = o.length; r > n; n++) e = o[n], t += Math.pow(e, 2);
            return Math.sqrt(t)
        }, t.prototype.normalize = function() {
            var e, n, r, o, i;
            r = this.length(), o = [], i = this.els;
            for (n in i) e = i[n], o[n] = e / r;
            return new t(o)
        }, t.prototype.combine = function(e, n, r) {
            var o, i, s, a;
            for (i = [], o = s = 0, a = this.els.length; a >= 0 ? a > s : s > a; o = a >= 0 ? ++s : --s) i[o] = n * this.els[o] + r * e.els[o];
            return new t(i)
        }, t
    }(), e = function() {
        function t() {
            this.toMatrix = re(this.toMatrix, this), this.format = re(this.format, this), this.interpolate = re(this.interpolate, this)
        }
        return t.prototype.interpolate = function(e, n, r) {
            var o, i, s, a, u, l, f, h, p, c, m, d, g, y, v, b, w, x;
            for (null == r && (r = null), s = this, i = new t, w = ["translate", "scale", "skew", "perspective"], d = 0, b = w.length; b > d; d++)
                for (f = w[d], i[f] = [], a = g = 0, x = s[f].length - 1; x >= 0 ? x >= g : g >= x; a = x >= 0 ? ++g : --g) i[f][a] = null == r || r.indexOf(f) > -1 || r.indexOf("" + f + ["x", "y", "z"][a]) > -1 ? (e[f][a] - s[f][a]) * n + s[f][a] : s[f][a];
            if (null == r || -1 !== r.indexOf("rotate")) {
                if (h = s.quaternion, p = e.quaternion, o = h[0] * p[0] + h[1] * p[1] + h[2] * p[2] + h[3] * p[3], 0 > o) {
                    for (a = y = 0; 3 >= y; a = ++y) h[a] = -h[a];
                    o = -o
                }
                for (o + 1 > .05 ? 1 - o >= .05 ? (m = Math.acos(o), l = 1 / Math.sin(m), c = Math.sin(m * (1 - n)) * l, u = Math.sin(m * n) * l) : (c = 1 - n, u = n) : (p[0] = -h[1], p[1] = h[0], p[2] = -h[3], p[3] = h[2], c = Math.sin(piDouble * (.5 - n)), u = Math.sin(piDouble * n)), i.quaternion = [], a = v = 0; 3 >= v; a = ++v) i.quaternion[a] = h[a] * c + p[a] * u
            } else i.quaternion = s.quaternion;
            return i
        }, t.prototype.format = function() {
            return this.toMatrix().toString()
        }, t.prototype.toMatrix = function() {
            var t, e, n, r, o, i, s, a, l, f, h, p, c, m, d, g;
            for (t = this, o = u.I(4), e = c = 0; 3 >= c; e = ++c) o.els[e][3] = t.perspective[e];
            for (i = t.quaternion, f = i[0], h = i[1], p = i[2], l = i[3], s = t.skew, r = [
                [1, 0],
                [2, 0],
                [2, 1]
            ], e = m = 2; m >= 0; e = --m) s[e] && (a = u.I(4), a.els[r[e][0]][r[e][1]] = s[e], o = o.multiply(a));
            for (o = o.multiply(new u([
                [1 - 2 * (h * h + p * p), 2 * (f * h - p * l), 2 * (f * p + h * l), 0],
                [2 * (f * h + p * l), 1 - 2 * (f * f + p * p), 2 * (h * p - f * l), 0],
                [2 * (f * p - h * l), 2 * (h * p + f * l), 1 - 2 * (f * f + h * h), 0],
                [0, 0, 0, 1]
            ])), e = d = 0; 2 >= d; e = ++d) {
                for (n = g = 0; 2 >= g; n = ++g) o.els[e][n] *= t.scale[e];
                o.els[3][e] = t.translate[e]
            }
            return o
        }, t
    }(), u = function() {
        function t(t) {
            this.els = t, this.toString = re(this.toString, this), this.decompose = re(this.decompose, this), this.inverse = re(this.inverse, this), this.augment = re(this.augment, this), this.toRightTriangular = re(this.toRightTriangular, this), this.transpose = re(this.transpose, this), this.multiply = re(this.multiply, this), this.dup = re(this.dup, this), this.e = re(this.e, this)
        }
        return t.prototype.e = function(t, e) {
            return 1 > t || t > this.els.length || 1 > e || e > this.els[0].length ? null : this.els[t - 1][e - 1]
        }, t.prototype.dup = function() {
            return new t(this.els)
        }, t.prototype.multiply = function(e) {
            var n, r, o, i, s, a, u, l, f, h, p, c, m;
            for (c = e.modulus ? !0 : !1, n = e.els || e, "undefined" == typeof n[0][0] && (n = new t(n).els), h = this.els.length, u = h, l = n[0].length, o = this.els[0].length, i = [], h += 1; --h;)
                for (s = u - h, i[s] = [], p = l, p += 1; --p;) {
                    for (a = l - p, m = 0, f = o, f += 1; --f;) r = o - f, m += this.els[s][r] * n[r][a];
                    i[s][a] = m
                }
            return n = new t(i), c ? n.col(1) : n
        }, t.prototype.transpose = function() {
            var e, n, r, o, i, s, a;
            for (a = this.els.length, e = this.els[0].length, n = [], i = e, i += 1; --i;)
                for (r = e - i, n[r] = [], s = a, s += 1; --s;) o = a - s, n[r][o] = this.els[o][r];
            return new t(n)
        }, t.prototype.toRightTriangular = function() {
            var t, e, n, r, o, i, s, a, u, l, f, h, p, c;
            for (t = this.dup(), a = this.els.length, o = a, i = this.els[0].length; --a;) {
                if (n = o - a, 0 === t.els[n][n])
                    for (r = f = p = n + 1; o >= p ? o > f : f > o; r = o >= p ? ++f : --f)
                        if (0 !== t.els[r][n]) {
                            for (e = [], u = i, u += 1; --u;) l = i - u, e.push(t.els[n][l] + t.els[r][l]);
                            t.els[n] = e;
                            break
                        }
                if (0 !== t.els[n][n])
                    for (r = h = c = n + 1; o >= c ? o > h : h > o; r = o >= c ? ++h : --h) {
                        for (s = t.els[r][n] / t.els[n][n], e = [], u = i, u += 1; --u;) l = i - u, e.push(n >= l ? 0 : t.els[r][l] - t.els[n][l] * s);
                        t.els[r] = e
                    }
            }
            return t
        }, t.prototype.augment = function(e) {
            var n, r, o, i, s, a, u, l, f;
            if (n = e.els || e, "undefined" == typeof n[0][0] && (n = new t(n).els), r = this.dup(), o = r.els[0].length, l = r.els.length, a = l, u = n[0].length, l !== n.length) return null;
            for (l += 1; --l;)
                for (i = a - l, f = u, f += 1; --f;) s = u - f, r.els[i][o + s] = n[i][s];
            return r
        }, t.prototype.inverse = function() {
            var e, n, r, o, i, s, a, u, l, f, h, p, c;
            for (f = this.els.length, a = f, e = this.augment(t.I(f)).toRightTriangular(), u = e.els[0].length, i = [], f += 1; --f;) {
                for (o = f - 1, r = [], h = u, i[o] = [], n = e.els[o][o], h += 1; --h;) p = u - h, l = e.els[o][p] / n, r.push(l), p >= a && i[o].push(l);
                for (e.els[o] = r, s = c = 0; o >= 0 ? o > c : c > o; s = o >= 0 ? ++c : --c) {
                    for (r = [], h = u, h += 1; --h;) p = u - h, r.push(e.els[s][p] - e.els[o][p] * e.els[s][o]);
                    e.els[s] = r
                }
            }
            return new t(i)
        }, t.I = function(e) {
            var n, r, o, i, s;
            for (n = [], i = e, e += 1; --e;)
                for (r = i - e, n[r] = [], s = i, s += 1; --s;) o = i - s, n[r][o] = r === o ? 1 : 0;
            return new t(n)
        }, t.prototype.decompose = function() {
            var t, n, r, o, i, s, a, u, l, f, p, c, m, d, g, y, v, b, w, x, M, S, k, T, C, H, R, q, X, I, Y, j, z, F, G, A, O, V;
            for (s = this, x = [], v = [], b = [], f = [], u = [], t = [], n = X = 0; 3 >= X; n = ++X)
                for (t[n] = [], o = I = 0; 3 >= I; o = ++I) t[n][o] = s.els[n][o];
            if (0 === t[3][3]) return !1;
            for (n = Y = 0; 3 >= Y; n = ++Y)
                for (o = j = 0; 3 >= j; o = ++j) t[n][o] /= t[3][3];
            for (l = s.dup(), n = z = 0; 2 >= z; n = ++z) l.els[n][3] = 0;
            if (l.els[3][3] = 1, 0 !== t[0][3] || 0 !== t[1][3] || 0 !== t[2][3]) {
                for (c = new h(t.slice(0, 4)[3]), r = l.inverse(), M = r.transpose(), u = M.multiply(c).els, n = F = 0; 2 >= F; n = ++F) t[n][3] = 0;
                t[3][3] = 1
            } else u = [0, 0, 0, 1];
            for (n = G = 0; 2 >= G; n = ++G) x[n] = t[3][n], t[3][n] = 0;
            for (d = [], n = A = 0; 2 >= A; n = ++A) d[n] = new h(t[n].slice(0, 3));
            if (v[0] = d[0].length(), d[0] = d[0].normalize(), b[0] = d[0].dot(d[1]), d[1] = d[1].combine(d[0], 1, -b[0]), v[1] = d[1].length(), d[1] = d[1].normalize(), b[0] /= v[1], b[1] = d[0].dot(d[2]), d[2] = d[2].combine(d[0], 1, -b[1]), b[2] = d[1].dot(d[2]), d[2] = d[2].combine(d[1], 1, -b[2]), v[2] = d[2].length(), d[2] = d[2].normalize(), b[1] /= v[2], b[2] /= v[2], a = d[1].cross(d[2]), d[0].dot(a) < 0)
                for (n = O = 0; 2 >= O; n = ++O)
                    for (v[n] *= -1, o = V = 0; 2 >= V; o = ++V) d[n].els[o] *= -1;
            g = function(t, e) {
                return d[t].els[e]
            }, m = [], m[1] = Math.asin(-g(0, 2)), 0 !== Math.cos(m[1]) ? (m[0] = Math.atan2(g(1, 2), g(2, 2)), m[2] = Math.atan2(g(0, 1), g(0, 0))) : (m[0] = Math.atan2(-g(2, 0), g(1, 1)), m[1] = 0), w = g(0, 0) + g(1, 1) + g(2, 2) + 1, w > 1e-4 ? (y = .5 / Math.sqrt(w), C = .25 / y, H = (g(2, 1) - g(1, 2)) * y, R = (g(0, 2) - g(2, 0)) * y, q = (g(1, 0) - g(0, 1)) * y) : g(0, 0) > g(1, 1) && g(0, 0) > g(2, 2) ? (y = 2 * Math.sqrt(1 + g(0, 0) - g(1, 1) - g(2, 2)), H = .25 * y, R = (g(0, 1) + g(1, 0)) / y, q = (g(0, 2) + g(2, 0)) / y, C = (g(2, 1) - g(1, 2)) / y) : g(1, 1) > g(2, 2) ? (y = 2 * Math.sqrt(1 + g(1, 1) - g(0, 0) - g(2, 2)), H = (g(0, 1) + g(1, 0)) / y, R = .25 * y, q = (g(1, 2) + g(2, 1)) / y, C = (g(0, 2) - g(2, 0)) / y) : (y = 2 * Math.sqrt(1 + g(2, 2) - g(0, 0) - g(1, 1)), H = (g(0, 2) + g(2, 0)) / y, R = (g(1, 2) + g(2, 1)) / y, q = .25 * y, C = (g(1, 0) - g(0, 1)) / y), f = [H, R, q, C], p = new e, p.translate = x, p.scale = v, p.skew = b, p.quaternion = f, p.perspective = u, p.rotate = m;
            for (k in p) {
                S = p[k];
                for (i in S) T = S[i], isNaN(T) && (S[i] = 0)
            }
            return p
        }, t.prototype.toString = function() {
            var t, e, n, r, o;
            for (n = "matrix3d(", t = r = 0; 3 >= r; t = ++r)
                for (e = o = 0; 3 >= o; e = ++o) n += Z(this.els[t][e], 10), (3 !== t || 3 !== e) && (n += ",");
            return n += ")"
        }, t.matrixForTransform = w(function(t) {
            var e, n, r, o, i, s;
            return e = document.createElement("div"), e.style.position = "absolute", e.style.visibility = "hidden", e.style[A("transform")] = t, document.body.appendChild(e), r = window.getComputedStyle(e, null), n = null != (o = null != (i = r.transform) ? i : r[A("transform")]) ? o : null != (s = C.tests) ? s.matrixForTransform(t) : void 0, document.body.removeChild(e), n
        }), t.fromTransform = function(e) {
            var n, r, o, i, s, a;
            for (i = null != e ? e.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0, i ? (n = i[1].split(","), n = n.map(parseFloat), r = 6 === n.length ? [n[0], n[1], 0, 0, n[2], n[3], 0, 0, 0, 0, 1, 0, n[4], n[5], 0, 1] : n) : r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], s = [], o = a = 0; 3 >= a; o = ++a) s.push(r.slice(4 * o, 4 * o + 4));
            return new t(s)
        }, t
    }(), G = w(function(t) {
        var e, n, r, o, i, s, a, u, l, f;
        if (void 0 !== document.body.style[t]) return "";
        for (o = t.split("-"), i = "", s = 0, u = o.length; u > s; s++) r = o[s], i += r.substring(0, 1).toUpperCase() + r.substring(1);
        for (f = ["Webkit", "Moz", "ms"], a = 0, l = f.length; l > a; a++)
            if (n = f[a], e = n + i, void 0 !== document.body.style[e]) return n;
        return ""
    }), A = w(function(t) {
        var e;
        return e = G(t), "Moz" === e ? "" + e + (t.substring(0, 1).toUpperCase() + t.substring(1)) : "" !== e ? "-" + e.toLowerCase() + "-" + _(t) : _(t)
    }), V = "undefined" != typeof window && null !== window ? window.requestAnimationFrame : void 0, m = [], d = [], W = !1, N = 1, "undefined" != typeof window && null !== window && window.addEventListener("keyup", function(t) {
        return 68 === t.keyCode && t.shiftKey && t.ctrlKey ? C.toggleSlow() : void 0
    }), null == V && (I = 0, V = function(t) {
        var e, n, r;
        return e = Date.now(), r = Math.max(0, 16 - (e - I)), n = window.setTimeout(function() {
            return t(e + r)
        }, r), I = e + r, n
    }), L = !1, E = !1, B = function() {
        return L ? void 0 : (L = !0, V(D))
    }, D = function(t) {
        var e, n, r, o;
        if (E) return void V(D);
        for (n = [], r = 0, o = m.length; o > r; r++) e = m[r], c(t, e) || n.push(e);
        return m = m.filter(function(t) {
            return -1 === n.indexOf(t)
        }), 0 === m.length ? L = !1 : V(D)
    }, c = function(t, e) {
        var n, r, o, i, s, a, u, l;
        if (null == e.tStart && (e.tStart = t), i = (t - e.tStart) / e.options.duration, s = e.curve(i), r = {}, i >= 1) r = e.curve.returnsToSelf ? e.properties.start : e.properties.end;
        else {
            l = e.properties.start;
            for (n in l) o = l[n], r[n] = R(o, e.properties.end[n], s)
        }
        return y(e.el, r), "function" == typeof(a = e.options).change && a.change(e.el), i >= 1 && "function" == typeof(u = e.options).complete && u.complete(e.el), 1 > i
    }, R = function(t, e, n) {
        return null != t && null != t.interpolate ? t.interpolate(e, n) : null
    }, $ = function(t, e, n, r) {
        var o, s, f, h, p, c, g, y;
        if (null != r && (d = d.filter(function(t) {
                return t.id !== r
            })), C.stop(t, {
                timeout: !1
            }), !n.animated) return C.css(t, e), void("function" == typeof n.complete && n.complete(this));
        e = F(e), c = H(t, Object.keys(e)), o = {}, g = [];
        for (h in e) y = e[h], null != t.style && te.contains(h) ? g.push([h, y]) : (s = S(y), s instanceof i && null != t.style && (s = new a([s, ne(h, 0)])), o[h] = s);
        return g.length > 0 && (f = X(t), f ? (p = new l, p.applyProperties(g)) : (y = g.map(function(t) {
            return ee(t[0], t[1])
        }).join(" "), p = u.fromTransform(u.matrixForTransform(y))), o.transform = p.decompose(), f && c.transform.applyRotateCenter([o.transform.props.rotate[1], o.transform.props.rotate[2]])), m.push({
            el: t,
            properties: {
                start: c,
                end: o
            },
            options: n,
            curve: n.type.call(n.type, n)
        }), B()
    }, Q = [], J = 0, P = function(t) {
        return q() ? t.realTimeoutId = setTimeout(function() {
            return t.fn(), x(t.id)
        }, t.delay) : void 0
    }, p = function(t, e) {
        var n;
        return J += 1, n = {
            id: J,
            tStart: Date.now(),
            fn: t,
            delay: e,
            originalDelay: e
        }, P(n), Q.push(n), J
    }, x = function(t) {
        return Q = Q.filter(function(e) {
            return e.id === t && clearTimeout(e.realTimeoutId), e.id !== t
        })
    }, Y = function(t, e) {
        var n;
        return null != t ? (n = t - e.tStart, e.originalDelay - n) : e.originalDelay
    }, "undefined" != typeof window && null !== window && window.addEventListener("unload", function() {}), K = null, z(function(t) {
        var e, n, r, o, i, s, a, u, l, f;
        if (E = !t, t) {
            if (L)
                for (n = Date.now() - K, i = 0, u = m.length; u > i; i++) e = m[i], null != e.tStart && (e.tStart += n);
            for (s = 0, l = Q.length; l > s; s++) r = Q[s], r.delay = Y(K, r), P(r);
            return K = null
        }
        for (K = Date.now(), f = [], o = 0, a = Q.length; a > o; o++) r = Q[o], f.push(clearTimeout(r.realTimeoutId));
        return f
    }), C = {}, C.linear = function() {
        return function(t) {
            return t
        }
    }, C.spring = function(t) {
        var e, n, r, o, i, s;
        return null == t && (t = {}), g(t, C.spring.defaults), o = Math.max(1, t.frequency / 20), i = Math.pow(20, t.friction / 100), s = t.anticipationSize / 1e3, r = Math.max(0, s), e = function(e) {
            var n, r, o, i, a;
            return n = .8, i = s / (1 - s), a = 0, o = (i - n * a) / (i - a), r = (n - o) / i, r * e * t.anticipationStrength / 100 + o
        }, n = function(t) {
            return Math.pow(i / 10, -t) * (1 - t)
        },
            function(t) {
                var r, i, a, u, l, f, h, p;
                return f = t / (1 - s) - s / (1 - s), s > t ? (p = s / (1 - s) - s / (1 - s), h = 0 / (1 - s) - s / (1 - s), l = Math.acos(1 / e(p)), a = (Math.acos(1 / e(h)) - l) / (o * -s), r = e) : (r = n, l = 0, a = 1), i = r(f), u = o * (t - s) * a + l, 1 - i * Math.cos(u)
            }
    }, C.bounce = function(t) {
        var e, n, r, o;
        return null == t && (t = {}), g(t, C.bounce.defaults), r = Math.max(1, t.frequency / 20), o = Math.pow(20, t.friction / 100), e = function(t) {
            return Math.pow(o / 10, -t) * (1 - t)
        }, n = function(t) {
            var n, o, i, s;
            return s = -1.57, o = 1, n = e(t), i = r * t * o + s, n * Math.cos(i)
        }, n.returnsToSelf = !0, n
    }, C.gravity = function(t) {
        var e, n, r, o, i, s, a;
        return null == t && (t = {}), g(t, C.gravity.defaults), n = Math.min(t.bounciness / 1250, .8), o = t.elasticity / 1e3, a = 100, r = [], e = function() {
            var r, o;
            for (r = Math.sqrt(2 / a), o = {
                a: -r,
                b: r,
                H: 1
            }, t.returnsToSelf && (o.a = 0, o.b = 2 * o.b); o.H > .001;) e = o.b - o.a, o = {
                a: o.b,
                b: o.b + e * n,
                H: o.H * n * n
            };
            return o.b
        }(), s = function(n, r, o, i) {
            var s, a;
            return e = r - n, a = 2 / e * i - 1 - 2 * n / e, s = a * a * o - o + 1, t.returnsToSelf && (s = 1 - s), s
        },
            function() {
                var i, s, u, l;
                for (s = Math.sqrt(2 / (a * e * e)), u = {
                    a: -s,
                    b: s,
                    H: 1
                }, t.returnsToSelf && (u.a = 0, u.b = 2 * u.b), r.push(u), i = e, l = []; u.b < 1 && u.H > .001;) i = u.b - u.a, u = {
                    a: u.b,
                    b: u.b + i * n,
                    H: u.H * o
                }, l.push(r.push(u));
                return l
            }(), i = function(e) {
            var n, o, i;
            for (o = 0, n = r[o]; !(e >= n.a && e <= n.b) && (o += 1, n = r[o]););
            return i = n ? s(n.a, n.b, n.H, e) : t.returnsToSelf ? 0 : 1
        }, i.returnsToSelf = t.returnsToSelf, i
    }, C.forceWithGravity = function(t) {
        return null == t && (t = {}), g(t, C.forceWithGravity.defaults), t.returnsToSelf = !0, C.gravity(t)
    }, C.bezier = function() {
        var t, e, n;
        return e = function(t, e, n, r, o) {
            return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * n + 3 * (1 - t) * Math.pow(t, 2) * r + Math.pow(t, 3) * o
        }, t = function(t, n, r, o, i) {
            return {
                x: e(t, n.x, r.x, o.x, i.x),
                y: e(t, n.y, r.y, o.y, i.y)
            }
        }, n = function(t, e, n) {
            var r, o, i, s, a, u, l, f, h, p;
            for (r = null, h = 0, p = e.length; p > h && (o = e[h], t >= o(0).x && t <= o(1).x && (r = o), null === r); h++);
            if (!r) return n ? 0 : 1;
            for (f = 1e-4, s = 0, u = 1, a = (u + s) / 2, l = r(a).x, i = 0; Math.abs(t - l) > f && 100 > i;) t > l ? s = a : u = a, a = (u + s) / 2, l = r(a).x, i += 1;
            return r(a).y
        },
            function(e) {
                var r, o, i;
                return null == e && (e = {}), i = e.points, r = function() {
                    var e, n, o;
                    r = [], o = function(e, n) {
                        var o;
                        return o = function(r) {
                            return t(r, e, e.cp[e.cp.length - 1], n.cp[0], n)
                        }, r.push(o)
                    };
                    for (e in i) {
                        if (n = parseInt(e), n >= i.length - 1) break;
                        o(i[n], i[n + 1])
                    }
                    return r
                }(), o = function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : n(t, r, this.returnsToSelf)
                }, o.returnsToSelf = 0 === i[i.length - 1].y, o
            }
    }(), C.easeInOut = function(t) {
        var e, n;
        return null == t && (t = {}), e = null != (n = t.friction) ? n : C.easeInOut.defaults.friction, C.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{
                    x: .92 - e / 1e3,
                    y: 0
                }]
            }, {
                x: 1,
                y: 1,
                cp: [{
                    x: .08 + e / 1e3,
                    y: 1
                }]
            }]
        })
    }, C.easeIn = function(t) {
        var e, n;
        return null == t && (t = {}), e = null != (n = t.friction) ? n : C.easeIn.defaults.friction, C.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{
                    x: .92 - e / 1e3,
                    y: 0
                }]
            }, {
                x: 1,
                y: 1,
                cp: [{
                    x: 1,
                    y: 1
                }]
            }]
        })
    }, C.easeOut = function(t) {
        var e, n;
        return null == t && (t = {}), e = null != (n = t.friction) ? n : C.easeOut.defaults.friction, C.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{
                    x: 0,
                    y: 0
                }]
            }, {
                x: 1,
                y: 1,
                cp: [{
                    x: .08 + e / 1e3,
                    y: 1
                }]
            }]
        })
    }, C.spring.defaults = {
        frequency: 300,
        friction: 200,
        anticipationSize: 0,
        anticipationStrength: 0
    }, C.bounce.defaults = {
        frequency: 300,
        friction: 200
    }, C.forceWithGravity.defaults = C.gravity.defaults = {
        bounciness: 400,
        elasticity: 200
    }, C.easeInOut.defaults = C.easeIn.defaults = C.easeOut.defaults = {
        friction: 500
    }, C.css = j(function(t, e) {
        return v(t, e, !0)
    }), C.animate = j(function(t, e, n) {
        var r;
        return null == n && (n = {}), n = M(n), g(n, {
            type: C.easeInOut,
            duration: 1e3,
            delay: 0,
            animated: !0
        }), n.duration = Math.max(0, n.duration * N), n.delay = Math.max(0, n.delay), 0 === n.delay ? $(t, e, n) : (r = C.setTimeout(function() {
            return $(t, e, n, r)
        }, n.delay), d.push({
            id: r,
            el: t
        }))
    }), C.stop = j(function(t, e) {
        return null == e && (e = {}), null == e.timeout && (e.timeout = !0), e.timeout && (d = d.filter(function(n) {
            return n.el !== t || null != e.filter && !e.filter(n) ? !0 : (C.clearTimeout(n.id), !1)
        })), m = m.filter(function(e) {
            return e.el !== t
        })
    }), C.setTimeout = function(t, e) {
        return p(t, e * N)
    }, C.clearTimeout = function(t) {
        return x(t)
    }, C.toggleSlow = function() {
        return W = !W, N = W ? 3 : 1, "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("dynamics.js: slow animations " + (W ? "enabled" : "disabled")) : void 0
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = C : "function" == typeof define ? define("dynamics", function() {
        return C
    }) : window.dynamics = C
}).call(this);