function show_and_hide() {
    var t = document.getElementById("track_your_request_menu");
    $(window).width() >= 1024 ? "flex" === t.style.display ? t.style.display = "none" : t.style.display = "flex" : $("#track_your_request a").attr("href", "track_your_order.html")
}

function close_menu() {
    document.getElementById("track_your_request_menu").style.display = "none"
}

function activate_tab(t) {

    if (t == 1) { $("#hero-area").addClass("header-home").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")  }
    else if (t == 2) { $("#hero-area").addClass("header-tab2").removeClass("header-home header-tab3 header-tab4 header-tab5") }
    else if (t == 3) { $("#hero-area").addClass("header-tab3").removeClass("header-home header-tab2 header-tab4 header-tab5") }
    else if (t == 4) { $("#hero-area").addClass("header-tab4").removeClass("header-home header-tab2 header-tab3 header-tab5") }
    else if (t == 5) { $("#hero-area").addClass("header-tab5").removeClass("header-home header-tab2 header-tab3 header-tab4") }

    $(".tab-home").removeClass("active"), $("#button_tab_" + t).addClass("active"), $(".tab-pane.fade").removeClass("show").removeClass("active"), $("#tabs_" + t).addClass("show").addClass("active"), $("body,html").animate({
        scrollTop: $("#visa_search_tabs").offset().top - 100
    }, 2e3)
} ! function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function (t, e, i) {
    "use strict";

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t) {
        var e = t.getBoundingClientRect(),
            i = {};
        for (var o in e) i[o] = e[o];
        if (t.ownerDocument !== document) {
            var s = t.ownerDocument.defaultView.frameElement;
            if (s) {
                var r = n(s);
                i.top += r.top, i.bottom += r.top, i.left += r.left, i.right += r.left
            }
        }
        return i
    }

    function s(t) {
        var e = (getComputedStyle(t) || {}).position,
            i = [];
        if ("fixed" === e) return [t];
        for (var o = t;
            (o = o.parentNode) && o && 1 === o.nodeType;) {
            var n = void 0;
            try {
                n = getComputedStyle(o)
            } catch (t) { }
            if (null == n) return i.push(o), i;
            var s = n,
                r = s.overflow,
                a = s.overflowX,
                l = s.overflowY;
            /(auto|scroll|overlay)/.test(r + l + a) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(n.position) >= 0) && i.push(o)
        }
        return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
    }

    function r() {
        S && document.body.removeChild(S), S = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var i = e.documentElement,
            o = n(t),
            s = D();
        return o.top -= s.top, o.left -= s.left, void 0 === o.width && (o.width = document.body.scrollWidth - o.left - o.right), void 0 === o.height && (o.height = document.body.scrollHeight - o.top - o.bottom), o.top = o.top - i.clientTop, o.left = o.left - i.clientLeft, o.right = e.body.clientWidth - o.width - o.left, o.bottom = e.body.clientHeight - o.height - o.top, o
    }

    function l(t) {
        return t.offsetParent || document.documentElement
    }

    function c() {
        if (j) return j;
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        d(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var i = t.offsetWidth;
        e.style.overflow = "scroll";
        var o = t.offsetWidth;
        i === o && (o = e.clientWidth), document.body.removeChild(e);
        var n = i - o;
        return j = {
            width: n,
            height: n
        }
    }

    function d() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
            if (e)
                for (var i in e) ({}).hasOwnProperty.call(e, i) && (t[i] = e[i])
        }), t
    }

    function u(t, e) {
        if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
            e.trim() && t.classList.remove(e)
        });
        else {
            var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                o = f(t).replace(i, " ");
            m(t, o)
        }
    }

    function p(t, e) {
        if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
            e.trim() && t.classList.add(e)
        });
        else {
            u(t, e);
            var i = f(t) + " " + e;
            m(t, i)
        }
    }

    function h(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = f(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(i)
    }

    function f(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function m(t, e) {
        t.setAttribute("class", e)
    }

    function g(t, e, i) {
        i.forEach(function (i) {
            -1 === e.indexOf(i) && h(t, i) && u(t, i)
        }), e.forEach(function (e) {
            h(t, e) || p(t, e)
        })
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + i >= e && e >= t - i
    }

    function y() {
        return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
    }

    function b() {
        for (var t = {
            top: 0,
            left: 0
        }, e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
        return i.forEach(function (e) {
            var i = e.top,
                o = e.left;
            "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof o && (o = parseFloat(o, 10)), t.top += i, t.left += o
        }), t
    }

    function w(t, e) {
        return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function k(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function () {
            var t = e,
                i = a(e),
                o = i,
                n = getComputedStyle(e);
            if (e = [o.left, o.top, i.width + o.left, i.height + o.top], t.ownerDocument !== document) {
                var s = t.ownerDocument.defaultView;
                e[0] += s.pageXOffset, e[1] += s.pageYOffset, e[2] += s.pageXOffset, e[3] += s.pageYOffset
            }
            Q.forEach(function (t, i) {
                "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? e[i] += parseFloat(n["border" + t + "Width"]) : e[i] -= parseFloat(n["border" + t + "Width"])
            })
        }(), e
    }
    var x = function () {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function (e, i, o) {
            return i && t(e.prototype, i), o && t(e, o), e
        }
    }(),
        C = void 0;
    void 0 === C && (C = {
        modules: []
    });
    var S = null,
        T = function () {
            var t = 0;
            return function () {
                return ++t
            }
        }(),
        _ = {},
        D = function () {
            var t = S;
            t && document.body.contains(t) || ((t = document.createElement("div")).setAttribute("data-tether-id", T()), d(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), S = t);
            var e = t.getAttribute("data-tether-id");
            return void 0 === _[e] && (_[e] = n(t), I(function () {
                delete _[e]
            })), _[e]
        },
        j = null,
        O = [],
        I = function (t) {
            O.push(t)
        },
        E = function () {
            for (var t = void 0; t = O.pop();) t()
        },
        M = function () {
            function t() {
                o(this, t)
            }
            return x(t, [{
                key: "on",
                value: function (t, e, i) {
                    var o = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: i,
                        once: o
                    })
                }
            }, {
                key: "once",
                value: function (t, e, i) {
                    this.on(t, e, i, !0)
                }
            }, {
                key: "off",
                value: function (t, e) {
                    if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                        if (void 0 === e) delete this.bindings[t];
                        else
                            for (var i = 0; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i
                }
            }, {
                key: "trigger",
                value: function (t) {
                    if (void 0 !== this.bindings && this.bindings[t]) {
                        for (var e = 0, i = arguments.length, o = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) o[n - 1] = arguments[n];
                        for (; e < this.bindings[t].length;) {
                            var s = this.bindings[t][e],
                                r = s.handler,
                                a = s.ctx,
                                l = s.once,
                                c = a;
                            void 0 === c && (c = this), r.apply(c, o), l ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
    C.Utils = {
        getActualBoundingClientRect: n,
        getScrollParents: s,
        getBounds: a,
        getOffsetParent: l,
        extend: d,
        addClass: p,
        removeClass: u,
        hasClass: h,
        updateClasses: g,
        defer: I,
        flush: E,
        uniqueId: T,
        Evented: M,
        getScrollBarSize: c,
        removeUtilElements: r
    };
    var A = function () {
        return function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var i = [],
                    o = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return i
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        $ = (x = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }
            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), function (t, e, i) {
            for (var o = !0; o;) {
                var n = t,
                    s = e,
                    r = i;
                o = !1, null === n && (n = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(n, s);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var l = a.get;
                    if (void 0 === l) return;
                    return l.call(r)
                }
                var c = Object.getPrototypeOf(n);
                if (null === c) return;
                t = c, e = s, i = r, o = !0, a = c = void 0
            }
        });
    if (void 0 === C) throw new Error("You must include the utils.js file before tether.js");
    var s = (U = C.Utils).getScrollParents,
        l = (a = U.getBounds, U.getOffsetParent),
        p = (d = U.extend, U.addClass),
        u = U.removeClass,
        c = (g = U.updateClasses, I = U.defer, E = U.flush, U.getScrollBarSize),
        r = U.removeUtilElements,
        z = function () {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
                var o = e[i];
                if (void 0 !== t.style[o]) return o
            }
        }(),
        P = [],
        L = function () {
            P.forEach(function (t) {
                t.position(!1)
            }), E()
        };
    ! function () {
        var t = null,
            e = null,
            i = null,
            o = function o() {
                return void 0 !== e && e > 16 ? (e = Math.min(e - 16, 250), void (i = setTimeout(o, 250))) : void (void 0 !== t && y() - t < 10 || (null != i && (clearTimeout(i), i = null), t = y(), L(), e = y() - t))
            };
        "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
            window.addEventListener(t, o)
        })
    }();
    var H = {
        center: "center",
        left: "right",
        right: "left"
    },
        W = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        F = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        N = function (t) {
            var e = t.left,
                i = t.top;
            return void 0 !== F[t.left] && (e = F[t.left]), void 0 !== F[t.top] && (i = F[t.top]), {
                left: e,
                top: i
            }
        },
        q = function (t) {
            var e = t.split(" "),
                i = A(e, 2);
            return {
                top: i[0],
                left: i[1]
            }
        },
        R = q,
        B = function (t) {
            function e(t) {
                var i = this;
                o(this, e), $(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), P.push(this), this.history = [], this.setOptions(t, !1), C.modules.forEach(function (t) {
                    void 0 !== t.initialize && t.initialize.call(i)
                }), this.position()
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, M), x(e, [{
                key: "getClass",
                value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes;
                    return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function (t) {
                    var e = this,
                        i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                    this.options = d({
                        offset: "0 0",
                        targetOffset: "0 0",
                        targetAttachment: "auto auto",
                        classPrefix: "tether"
                    }, t);
                    var o = this.options,
                        n = o.element,
                        r = o.target,
                        a = o.targetModifier;
                    if (this.element = n, this.target = r, this.targetModifier = a, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
                        if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                        void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                    }), p(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = R(this.options.targetAttachment), this.attachment = R(this.options.attachment), this.offset = q(this.options.offset), this.targetOffset = q(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = s(this.target), !1 !== this.options.enabled && this.enable(i)
                }
            }, {
                key: "getTargetBounds",
                value: function () {
                    if (void 0 === this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) return this.target === document.body ? {
                        top: pageYOffset,
                        left: pageXOffset,
                        height: innerHeight,
                        width: innerWidth
                    } : ((s = {
                        height: (t = a(this.target)).height,
                        width: t.width,
                        top: t.top,
                        left: t.left
                    }).height = Math.min(s.height, t.height - (pageYOffset - t.top)), s.height = Math.min(s.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), s.height = Math.min(innerHeight, s.height), s.height -= 2, s.width = Math.min(s.width, t.width - (pageXOffset - t.left)), s.width = Math.min(s.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), s.width = Math.min(innerWidth, s.width), s.width -= 2, s.top < pageYOffset && (s.top = pageYOffset), s.left < pageXOffset && (s.left = pageXOffset), s);
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0,
                            e = this.target;
                        e === document.body ? (e = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(e);
                        var i = getComputedStyle(e),
                            o = 0;
                        (e.scrollWidth > e.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (o = 15);
                        var n = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - o,
                            s = {
                                width: 15,
                                height: .975 * n * (n / e.scrollHeight),
                                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                            },
                            r = 0;
                        n < 408 && this.target === document.body && (r = -11e-5 * Math.pow(n, 2) - .00727 * n + 22.58), this.target !== document.body && (s.height = Math.max(s.height, 24));
                        var l = this.target.scrollTop / (e.scrollHeight - n);
                        return s.top = l * (n - s.height - r) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (s.height = Math.max(s.height, 24)), s
                    }
                }
            }, {
                key: "clearCache",
                value: function () {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function (t, e) {
                    return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable",
                value: function () {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    !1 !== this.options.addTargetClasses && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable",
                value: function () {
                    var t = this;
                    u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    var t = this;
                    this.disable(), P.forEach(function (e, i) {
                        e === t && P.splice(i, 1)
                    }), 0 === P.length && r()
                }
            }, {
                key: "updateAttachClasses",
                value: function (t, e) {
                    var i = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                    var o = this._addAttachClasses;
                    t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
                    var n = [];
                    ["left", "top", "bottom", "right", "middle", "center"].forEach(function (t) {
                        n.push(i.getClass("element-attached") + "-" + t), n.push(i.getClass("target-attached") + "-" + t)
                    }), I(function () {
                        void 0 !== i._addAttachClasses && (g(i.element, i._addAttachClasses, n), !1 !== i.options.addTargetClasses && g(i.target, i._addAttachClasses, n), delete i._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function () {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var i = function (t, e) {
                            var i = t.left,
                                o = t.top;
                            return "auto" === i && (i = H[e.left]), "auto" === o && (o = W[e.top]), {
                                left: i,
                                top: o
                            }
                        }(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, i);
                        var o = this.cache("element-bounds", function () {
                            return a(t.element)
                        }),
                            n = o.width,
                            s = o.height;
                        if (0 === n && 0 === s && void 0 !== this.lastSize) {
                            var r = this.lastSize;
                            n = r.width, s = r.height
                        } else this.lastSize = {
                            width: n,
                            height: s
                        };
                        var d = this.cache("target-bounds", function () {
                            return t.getTargetBounds()
                        }),
                            u = d,
                            p = w(N(this.attachment), {
                                width: n,
                                height: s
                            }),
                            h = w(N(i), u),
                            f = w(this.offset, {
                                width: n,
                                height: s
                            }),
                            m = w(this.targetOffset, u);
                        p = b(p, f), h = b(h, m);
                        for (var g = d.left + h.left - p.left, v = d.top + h.top - p.top, y = 0; y < C.modules.length; ++y) {
                            var k = C.modules[y].position.call(this, {
                                left: g,
                                top: v,
                                targetAttachment: i,
                                targetPos: d,
                                elementPos: o,
                                offset: p,
                                targetOffset: h,
                                manualOffset: f,
                                manualTargetOffset: m,
                                scrollbarSize: _,
                                attachment: this.attachment
                            });
                            if (!1 === k) return !1;
                            void 0 !== k && "object" == typeof k && (v = k.top, g = k.left)
                        }
                        var x = {
                            page: {
                                top: v,
                                left: g
                            },
                            viewport: {
                                top: v - pageYOffset,
                                bottom: pageYOffset - v - s + innerHeight,
                                left: g - pageXOffset,
                                right: pageXOffset - g - n + innerWidth
                            }
                        },
                            S = this.target.ownerDocument,
                            T = S.defaultView,
                            _ = void 0;
                        return T.innerHeight > S.documentElement.clientHeight && (_ = this.cache("scrollbar-size", c), x.viewport.bottom -= _.height), T.innerWidth > S.documentElement.clientWidth && (_ = this.cache("scrollbar-size", c), x.viewport.right -= _.width), -1 !== ["", "static"].indexOf(S.body.style.position) && -1 !== ["", "static"].indexOf(S.body.parentElement.style.position) || (x.page.bottom = S.body.scrollHeight - v - s, x.page.right = S.body.scrollWidth - g - n), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function () {
                            var e = t.cache("target-offsetparent", function () {
                                return l(t.target)
                            }),
                                i = t.cache("target-offsetparent-bounds", function () {
                                    return a(e)
                                }),
                                o = getComputedStyle(e),
                                n = i,
                                s = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                                s[t.toLowerCase()] = parseFloat(o["border" + t + "Width"])
                            }), i.right = S.body.scrollWidth - i.left - n.width + s.right, i.bottom = S.body.scrollHeight - i.top - n.height + s.bottom, x.page.top >= i.top + s.top && x.page.bottom >= i.bottom && x.page.left >= i.left + s.left && x.page.right >= i.right) {
                                var r = e.scrollTop,
                                    c = e.scrollLeft;
                                x.offset = {
                                    top: x.page.top - i.top + r - s.top,
                                    left: x.page.left - i.left + c - s.left
                                }
                            }
                        }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), e && E(), !0
                    }
                }
            }, {
                key: "move",
                value: function (t) {
                    var e = this;
                    if (void 0 !== this.element.parentNode) {
                        var i = {};
                        for (var o in t)
                            for (var n in i[o] = {}, t[o]) {
                                for (var s = !1, r = 0; r < this.history.length; ++r) {
                                    var a = this.history[r];
                                    if (void 0 !== a[o] && !v(a[o][n], t[o][n])) {
                                        s = !0;
                                        break
                                    }
                                }
                                s || (i[o][n] = !0)
                            }
                        var c = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        },
                            u = function (t, i) {
                                if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                    var o = void 0,
                                        n = void 0;
                                    if (t.top ? (c.top = 0, o = i.top) : (c.bottom = 0, o = -i.bottom), t.left ? (c.left = 0, n = i.left) : (c.right = 0, n = -i.right), window.matchMedia) window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (n = Math.round(n), o = Math.round(o));
                                    c[z] = "translateX(" + n + "px) translateY(" + o + "px)", "msTransform" !== z && (c[z] += " translateZ(0)")
                                } else t.top ? c.top = i.top + "px" : c.bottom = i.bottom + "px", t.left ? c.left = i.left + "px" : c.right = i.right + "px"
                            },
                            p = !1;
                        if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (c.position = "absolute", u(i.page, t.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (c.position = "fixed", u(i.viewport, t.viewport)) : void 0 !== i.offset && i.offset.top && i.offset.left ? function () {
                            c.position = "absolute";
                            var o = e.cache("target-offsetparent", function () {
                                return l(e.target)
                            });
                            l(e.element) !== o && I(function () {
                                e.element.parentNode.removeChild(e.element), o.appendChild(e.element)
                            }), u(i.offset, t.offset), p = !0
                        }() : (c.position = "absolute", u({
                            top: !0,
                            left: !0
                        }, t.page)), !p)
                            if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                            else {
                                for (var h = !0, f = this.element.parentNode; f && 1 === f.nodeType && "BODY" !== f.tagName;) {
                                    if ("static" !== getComputedStyle(f).position) {
                                        h = !1;
                                        break
                                    }
                                    f = f.parentNode
                                }
                                h || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            } var m = {},
                                g = !1;
                        for (var n in c) {
                            var y = c[n];
                            this.element.style[n] !== y && (g = !0, m[n] = y)
                        }
                        g && I(function () {
                            d(e.element.style, m), e.trigger("repositioned")
                        })
                    }
                }
            }]), e
        }();
    B.modules = [], C.position = L;
    var Y = d(B, C),
        d = (A = function () {
            return function (t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function (t, e) {
                    var i = [],
                        o = !0,
                        n = !1,
                        s = void 0;
                    try {
                        for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                    } catch (t) {
                        n = !0, s = t
                    } finally {
                        try {
                            !o && a.return && a.return()
                        } finally {
                            if (n) throw s
                        }
                    }
                    return i
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), a = (U = C.Utils).getBounds, U.extend),
        Q = (g = U.updateClasses, I = U.defer, ["left", "top", "right", "bottom"]);
    C.modules.push({
        position: function (t) {
            var e = this,
                i = t.top,
                o = t.left,
                n = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var s = this.cache("element-bounds", function () {
                return a(e.element)
            }),
                r = s.height,
                l = s.width;
            if (0 === l && 0 === r && void 0 !== this.lastSize) {
                var c = this.lastSize;
                l = c.width, r = c.height
            }
            var u = this.cache("target-bounds", function () {
                return e.getTargetBounds()
            }),
                p = u.height,
                h = u.width,
                f = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function (t) {
                var e = t.outOfBoundsClass,
                    i = t.pinnedClass;
                e && f.push(e), i && f.push(i)
            }), f.forEach(function (t) {
                ["left", "top", "right", "bottom"].forEach(function (e) {
                    f.push(t + "-" + e)
                })
            });
            var m = [],
                v = d({}, n),
                y = d({}, this.attachment);
            return this.options.constraints.forEach(function (t) {
                var s = t.to,
                    a = t.attachment,
                    c = t.pin;
                void 0 === a && (a = "");
                var d = void 0,
                    u = void 0;
                if (a.indexOf(" ") >= 0) {
                    var f = a.split(" "),
                        g = A(f, 2);
                    u = g[0], d = g[1]
                } else d = u = a;
                var b = k(e, s);
                "target" !== u && "both" !== u || (i < b[1] && "top" === v.top && (i += p, v.top = "bottom"), i + r > b[3] && "bottom" === v.top && (i -= p, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && i < b[1] ? (i += p, v.top = "bottom", i += r, y.top = "top") : "top" === y.top && i + r > b[3] && i - (r - p) >= b[1] && (i -= r - p, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && i + r > b[3] ? (i -= p, v.top = "top", i -= r, y.top = "bottom") : "bottom" === y.top && i < b[1] && i + (2 * r - p) <= b[3] && (i += r - p, v.top = "top", y.top = "top")), "middle" === v.top && (i + r > b[3] && "top" === y.top ? (i -= r, y.top = "bottom") : i < b[1] && "bottom" === y.top && (i += r, y.top = "top"))), "target" !== d && "both" !== d || (o < b[0] && "left" === v.left && (o += h, v.left = "right"), o + l > b[2] && "right" === v.left && (o -= h, v.left = "left")), "together" === d && (o < b[0] && "left" === v.left ? "right" === y.left ? (o += h, v.left = "right", o += l, y.left = "left") : "left" === y.left && (o += h, v.left = "right", o -= l, y.left = "right") : o + l > b[2] && "right" === v.left ? "left" === y.left ? (o -= h, v.left = "left", o -= l, y.left = "right") : "right" === y.left && (o -= h, v.left = "left", o += l, y.left = "left") : "center" === v.left && (o + l > b[2] && "left" === y.left ? (o -= l, y.left = "right") : o < b[0] && "right" === y.left && (o += l, y.left = "left"))), "element" !== u && "both" !== u || (i < b[1] && "bottom" === y.top && (i += r, y.top = "top"), i + r > b[3] && "top" === y.top && (i -= r, y.top = "bottom")), "element" !== d && "both" !== d || (o < b[0] && ("right" === y.left ? (o += l, y.left = "left") : "center" === y.left && (o += l / 2, y.left = "left")), o + l > b[2] && ("left" === y.left ? (o -= l, y.left = "right") : "center" === y.left && (o -= l / 2, y.left = "right"))), "string" == typeof c ? c = c.split(",").map(function (t) {
                    return t.trim()
                }) : !0 === c && (c = ["top", "left", "right", "bottom"]), c = c || [];
                var w = [],
                    x = [];
                i < b[1] && (c.indexOf("top") >= 0 ? (i = b[1], w.push("top")) : x.push("top")), i + r > b[3] && (c.indexOf("bottom") >= 0 ? (i = b[3] - r, w.push("bottom")) : x.push("bottom")), o < b[0] && (c.indexOf("left") >= 0 ? (o = b[0], w.push("left")) : x.push("left")), o + l > b[2] && (c.indexOf("right") >= 0 ? (o = b[2] - l, w.push("right")) : x.push("right")), w.length && function () {
                    var t;
                    t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), w.forEach(function (e) {
                        m.push(t + "-" + e)
                    })
                }(), x.length && function () {
                    var t;
                    t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), x.forEach(function (e) {
                        m.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), I(function () {
                !1 !== e.options.addTargetClasses && g(e.target, m, f), g(e.element, m, f)
            }), {
                top: i,
                left: o
            }
        }
    });
    var U, a = (U = C.Utils).getBounds,
        g = U.updateClasses;
    I = U.defer;
    C.modules.push({
        position: function (t) {
            var e = this,
                i = t.top,
                o = t.left,
                n = this.cache("element-bounds", function () {
                    return a(e.element)
                }),
                s = n.height,
                r = n.width,
                l = this.getTargetBounds(),
                c = i + s,
                d = o + r,
                u = [];
            i <= l.bottom && c >= l.top && ["left", "right"].forEach(function (t) {
                var e = l[t];
                e !== o && e !== d || u.push(t)
            }), o <= l.right && d >= l.left && ["top", "bottom"].forEach(function (t) {
                var e = l[t];
                e !== i && e !== c || u.push(t)
            });
            var p = [],
                h = [];
            return p.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach(function (t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), u.length && h.push(this.getClass("abutted")), u.forEach(function (t) {
                h.push(e.getClass("abutted") + "-" + t)
            }), I(function () {
                !1 !== e.options.addTargetClasses && g(e.target, h, p), g(e.element, h, p)
            }), !0
        }
    });
    A = function () {
        return function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var i = [],
                    o = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return i
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return C.modules.push({
        position: function (t) {
            var e = t.top,
                i = t.left;
            if (this.options.shift) {
                var o = this.options.shift;
                "function" == typeof this.options.shift && (o = this.options.shift.call(this, {
                    top: e,
                    left: i
                }));
                var n = void 0,
                    s = void 0;
                if ("string" == typeof o) {
                    (o = o.split(" "))[1] = o[1] || o[0];
                    var r = A(o, 2);
                    n = r[0], s = r[1], n = parseFloat(n, 10), s = parseFloat(s, 10)
                } else n = o.top, s = o.left;
                return {
                    top: e += n,
                    left: i += s
                }
            }
        }
    }), Y
}),
    function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, function () {
        return function (t) {
            function e(o) {
                if (i[o]) return i[o].exports;
                var n = i[o] = {
                    exports: {},
                    id: o,
                    loaded: !1
                };
                return t[o].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "dist/", e(0)
        }([function (t, e, i) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var n = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
                }
                return t
            },
                s = (o(i(1)), i(6)),
                r = o(s),
                a = o(i(7)),
                l = o(i(8)),
                c = o(i(9)),
                d = o(i(10)),
                u = o(i(11)),
                p = o(i(14)),
                h = [],
                f = !1,
                m = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                g = function () {
                    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (f = !0), f) return h = (0, u.default)(h, m), (0, d.default)(h, m.once), h
                },
                v = function () {
                    h = (0, p.default)(), g()
                };
            t.exports = {
                init: function (t) {
                    m = n(m, t), h = (0, p.default)();
                    var e = document.all && !window.atob;
                    return function (t) {
                        return !0 === t || "mobile" === t && c.default.mobile() || "phone" === t && c.default.phone() || "tablet" === t && c.default.tablet() || "function" == typeof t && !0 === t()
                    }(m.disable) || e ? void h.forEach(function (t, e) {
                        t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                    }) : (document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? g(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, function () {
                        g(!0)
                    }) : document.addEventListener(m.startEvent, function () {
                        g(!0)
                    }), window.addEventListener("resize", (0, a.default)(g, m.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(g, m.debounceDelay, !0)), window.addEventListener("scroll", (0, r.default)(function () {
                        (0, d.default)(h, m.once)
                    }, m.throttleDelay)), m.disableMutationObserver || (0, l.default)("[data-aos]", v), h)
                },
                refresh: g,
                refreshHard: v
            }
        }, function (t, e) { }, , , , , function (t, e) {
            (function (e) {
                "use strict";

                function i(t, e, i) {
                    function n(e) {
                        var i = u,
                            o = p;
                        return u = p = void 0, v = e, f = t.apply(o, i)
                    }

                    function r(t) {
                        var i = t - g;
                        return void 0 === g || i >= e || i < 0 || x && t - v >= h
                    }

                    function l() {
                        var t = k();
                        return r(t) ? c(t) : void (m = setTimeout(l, function (t) {
                            var i = e - (t - g);
                            return x ? w(i, h - (t - v)) : i
                        }(t)))
                    }

                    function c(t) {
                        return m = void 0, C && u ? n(t) : (u = p = void 0, f)
                    }

                    function d() {
                        var t = k(),
                            i = r(t);
                        if (u = arguments, p = this, g = t, i) {
                            if (void 0 === m) return function (t) {
                                return v = t, m = setTimeout(l, e), y ? n(t) : f
                            }(g);
                            if (x) return m = setTimeout(l, e), n(g)
                        }
                        return void 0 === m && (m = setTimeout(l, e)), f
                    }
                    var u, p, h, f, m, g, v = 0,
                        y = !1,
                        x = !1,
                        C = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return e = s(e) || 0, o(i) && (y = !!i.leading, h = (x = "maxWait" in i) ? b(s(i.maxWait) || 0, e) : h, C = "trailing" in i ? !!i.trailing : C), d.cancel = function () {
                        void 0 !== m && clearTimeout(m), v = 0, u = g = p = m = void 0
                    }, d.flush = function () {
                        return void 0 === m ? f : c(k())
                    }, d
                }

                function o(t) {
                    var e = void 0 === t ? "undefined" : r(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function n(t) {
                    return "symbol" == (void 0 === t ? "undefined" : r(t)) || function (t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : r(t))
                    }(t) && y.call(t) == c
                }

                function s(t) {
                    if ("number" == typeof t) return t;
                    if (n(t)) return l;
                    if (o(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = o(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(d, "");
                    var i = p.test(t);
                    return i || h.test(t) ? f(t.slice(2), i ? 2 : 8) : u.test(t) ? l : +t
                }
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                    a = "Expected a function",
                    l = NaN,
                    c = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    u = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    h = /^0o[0-7]+$/i,
                    f = parseInt,
                    m = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
                    g = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                    v = m || g || Function("return this")(),
                    y = Object.prototype.toString,
                    b = Math.max,
                    w = Math.min,
                    k = function () {
                        return v.Date.now()
                    };
                t.exports = function (t, e, n) {
                    var s = !0,
                        r = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return o(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), i(t, e, {
                        leading: s,
                        maxWait: e,
                        trailing: r
                    })
                }
            }).call(e, function () {
                return this
            }())
        }, function (t, e) {
            (function (e) {
                "use strict";

                function i(t) {
                    var e = void 0 === t ? "undefined" : s(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function o(t) {
                    return "symbol" == (void 0 === t ? "undefined" : s(t)) || function (t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : s(t))
                    }(t) && v.call(t) == l
                }

                function n(t) {
                    if ("number" == typeof t) return t;
                    if (o(t)) return a;
                    if (i(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = i(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(c, "");
                    var n = u.test(t);
                    return n || p.test(t) ? h(t.slice(2), n ? 2 : 8) : d.test(t) ? a : +t
                }
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                    r = "Expected a function",
                    a = NaN,
                    l = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    d = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    p = /^0o[0-7]+$/i,
                    h = parseInt,
                    f = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e,
                    m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                    g = f || m || Function("return this")(),
                    v = Object.prototype.toString,
                    y = Math.max,
                    b = Math.min,
                    w = function () {
                        return g.Date.now()
                    };
                t.exports = function (t, e, o) {
                    function s(e) {
                        var i = u,
                            o = p;
                        return u = p = void 0, v = e, f = t.apply(o, i)
                    }

                    function a(t) {
                        var i = t - g;
                        return void 0 === g || i >= e || i < 0 || x && t - v >= h
                    }

                    function l() {
                        var t = w();
                        return a(t) ? c(t) : void (m = setTimeout(l, function (t) {
                            var i = e - (t - g);
                            return x ? b(i, h - (t - v)) : i
                        }(t)))
                    }

                    function c(t) {
                        return m = void 0, C && u ? s(t) : (u = p = void 0, f)
                    }

                    function d() {
                        var t = w(),
                            i = a(t);
                        if (u = arguments, p = this, g = t, i) {
                            if (void 0 === m) return function (t) {
                                return v = t, m = setTimeout(l, e), k ? s(t) : f
                            }(g);
                            if (x) return m = setTimeout(l, e), s(g)
                        }
                        return void 0 === m && (m = setTimeout(l, e)), f
                    }
                    var u, p, h, f, m, g, v = 0,
                        k = !1,
                        x = !1,
                        C = !0;
                    if ("function" != typeof t) throw new TypeError(r);
                    return e = n(e) || 0, i(o) && (k = !!o.leading, h = (x = "maxWait" in o) ? y(n(o.maxWait) || 0, e) : h, C = "trailing" in o ? !!o.trailing : C), d.cancel = function () {
                        void 0 !== m && clearTimeout(m), v = 0, u = g = p = m = void 0
                    }, d.flush = function () {
                        return void 0 === m ? f : c(w())
                    }, d
                }
            }).call(e, function () {
                return this
            }())
        }, function (t, e) {
            "use strict";

            function i(t) {
                t && t.forEach(function (t) {
                    var e = Array.prototype.slice.call(t.addedNodes),
                        i = Array.prototype.slice.call(t.removedNodes);
                    e.concat(i).filter(function (t) {
                        return t.hasAttribute && t.hasAttribute("data-aos")
                    }).length && o()
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () { };
            e.default = function (t, e) {
                var n = window.document,
                    s = new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(i);
                o = e, s.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }, function (t, e) {
            "use strict";

            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function (e, i, o) {
                    return i && t(e.prototype, i), o && t(e, o), e
                }
            }(),
                n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function () {
                    function t() {
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return o(t, [{
                        key: "phone",
                        value: function () {
                            var t = i();
                            return !(!n.test(t) && !s.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function () {
                            var t = i();
                            return !(!r.test(t) && !a.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function () {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new l
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t, e) {
                var i = window.pageYOffset,
                    o = window.innerHeight;
                t.forEach(function (t, n) {
                    ! function (t, e, i) {
                        var o = t.node.getAttribute("data-aos-once");
                        e > t.position ? t.node.classList.add("aos-animate") : void 0 !== o && ("false" === o || !i && "true" !== o) && t.node.classList.remove("aos-animate")
                    }(t, o + i, e)
                })
            }
        }, function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(12));
            e.default = function (t, e) {
                return t.forEach(function (t, i) {
                    t.node.classList.add("aos-init"), t.position = (0, o.default)(t.node, e.offset)
                }), t
            }
        }, function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(13));
            e.default = function (t, e) {
                var i = 0,
                    n = 0,
                    s = window.innerHeight,
                    r = {
                        offset: t.getAttribute("data-aos-offset"),
                        anchor: t.getAttribute("data-aos-anchor"),
                        anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (t = document.querySelectorAll(r.anchor)[0]), i = (0, o.default)(t).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += t.offsetHeight;
                        break;
                    case "top-center":
                        i += s / 2;
                        break;
                    case "bottom-center":
                        i += s / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        i += s / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += s;
                        break;
                    case "bottom-top":
                        i += t.offsetHeight + s;
                        break;
                    case "center-top":
                        i += t.offsetHeight / 2 + s
                }
                return r.anchorPlacement || r.offset || isNaN(e) || (n = e), i + n
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: i,
                    left: e
                }
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t) {
                return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function (t) {
                    return {
                        node: t
                    }
                })
            }
        }])
    }), AOS.init(), AOS.init({
        disable: !1,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: !1,
        disableMutationObserver: !1,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 40,
        delay: 150,
        duration: 1e3,
        easing: "ease",
        once: !0,
        mirror: !1,
        anchorPlacement: "top-bottom",
        disable: function () {
            return window.innerWidth < 991
        }
    }),
    function (t) {
        "use strict";
        var e = t("body"),
            i = (t(window), t("#site-wrapper"), t(document), {});
        i.animation = {
            delay: 40,
            itemQueue: [],
            queueTimer: null,
            $wrapper: null,
            init: function () {
                var i = this;
                i.$wrapper = e, i.itemQueue = [], i.queueTimer = null, "undefined" != typeof delay && (i.delay = delay), i.itemQueue.animated_0 = [], e.find("#content").find(">div,>section").each(function (e) {
                    t(this).attr("data-animated-id", e + 1), i.itemQueue["animated_" + (e + 1)] = []
                }), setTimeout(function () {
                    i.registerAnimation()
                }, 0)
            },
            registerAnimation: function () {
                var e = this;
                t("[data-animate]:not(.animated)", e.$wrapper).waypoint(function () {
                    var i = this.element ? this.element : this,
                        o = t(i);
                    if (o.is(":visible")) {
                        var n = o.closest("[data-animated-id]"),
                            s = "0";
                        n.length && (s = n.data("animated-id")), e.itemQueue["animated_" + s].push(i), e.processItemQueue()
                    } else o.addClass(o.data("animate")).addClass("animated")
                }, {
                    offset: "90%",
                    triggerOnce: !0
                })
            },
            processItemQueue: function () {
                var e = this;
                e.queueTimer || (e.queueTimer = window.setInterval(function () {
                    var i = !1;
                    for (var o in e.itemQueue)
                        if (e.itemQueue[o].length) {
                            i = !0;
                            break
                        } if (i) {
                            for (var o in e.itemQueue) {
                                var n = t(e.itemQueue[o].shift());
                                n.addClass(n.data("animate")).addClass("animated")
                            }
                            e.processItemQueue()
                        } else window.clearInterval(e.queueTimer), e.queueTimer = null
                }, e.delay))
            }
        }, t(document).ready(function () {
            i.animation.init()
        })
    }(jQuery),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";
        var e = window.Slick || {};
        (e = function () {
            var e = 0;
            return function (i, o) {
                var n, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(i),
                    appendDots: t(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, i) {
                        return t('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
        }()).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, o) {
            var n = this;
            if ("boolean" == typeof i) o = i, i = null;
            else if (i < 0 || i >= n.slideCount) return !1;
            n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : o ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === o ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function (e, i) {
            var o = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function (t) {
                    t = Math.ceil(t), !1 === n.options.vertical ? (o[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(o))
                },
                complete: function () {
                    i && i.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? o[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(o), i && setTimeout(function () {
                n.disableTransition(), i.call()
            }, n.options.speed))
        }, e.prototype.getNavTarget = function () {
            var e = this.options.asNavFor;
            return e && null !== e && (e = t(e).not(this.$slider)), e
        }, e.prototype.asNavFor = function (e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function (t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function () {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function () {
            var e, i, o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) i.append(t("<li />").append(o.options.customPaging.call(this, o, e)));
                o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function () {
            var t, e, i, o, n, s, r, a = this;
            if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), t = 0; t < n; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = t * r + (e * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    o.appendChild(l)
                }
                a.$slider.empty().append(o), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function (e, i) {
            var o, n, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (o in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
                null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = n), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function (e, i) {
            var o, n, s = this,
                r = t(e.currentTarget);
            switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === o ? s.options.slidesToScroll : s.options.slidesToShow - o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === o ? s.options.slidesToScroll : o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, i);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function (t) {
            var e, i;
            if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = i;
                        break
                    }
                    i = e[o]
                }
            return t
        }, e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function () {
            var t, e = this;
            e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function (t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function (e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function (t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function (t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function () {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function (t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                i.stopImmediatePropagation();
                var o = t(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, e.prototype.getDotCount = function () {
            var t = this,
                e = 0,
                i = 0,
                o = 0;
            if (!0 === t.options.infinite)
                if (t.slideCount <= t.options.slidesToShow) ++o;
                else
                    for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) o = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return o - 1
        }, e.prototype.getLeft = function (t) {
            var e, i, o, n, s = this,
                r = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? n = -1.5 : 1 === s.options.slidesToShow && (n = -2)), r = i * s.options.slidesToShow * n), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function () {
            var t, e = this,
                i = 0,
                o = 0,
                n = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n
        }, e.prototype.getSlick = function () {
            return this
        }, e.prototype.getSlideCount = function () {
            var e, i, o = this;
            return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (n, s) {
                if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * o.swipeLeft) return e = s, !1
            }), Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function (e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function () {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (t) {
                    return t >= 0 && t < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                var n = o.indexOf(i);
                t(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + i,
                    tabindex: -1
                }), -1 !== n && t(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + n
                })
            }), e.$dots.attr("role", "tablist").find("li").each(function (n) {
                var s = o[n];
                t(this).attr({
                    role: "presentation"
                }), t(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + n,
                    "aria-controls": "slick-slide" + e.instanceUid + s,
                    "aria-label": n + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var n = e.currentSlide, s = n + e.options.slidesToShow; n < s; n++) e.$slides.eq(n).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
        }, e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, e.prototype.initUI = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        o = t(this).attr("data-srcset"),
                        n = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            o && (e.attr("srcset", o), n && e.attr("sizes", n)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function () {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, i])
                        })
                    }, r.onerror = function () {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                    }, r.src = i
                })
            }
            var i, o, n, s = this;
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? n = (o = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(o + s.options.slidesToShow), !0 === s.options.fade && (o > 0 && o--, n <= s.slideCount && n++)), i = s.$slider.find(".slick-slide").slice(o, n), "anticipated" === s.options.lazyLoad)
                for (var r = o - 1, a = n, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
            e(i), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
        }, e.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function () {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function () {
            this.autoPlayClear(), this.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function () {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function (e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, e.prototype.prev = e.prototype.slickPrev = function () {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var i, o, n, s, r, a = this,
                l = t("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), o = i.attr("data-lazy"), n = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
                n && (i.attr("srcset", n), s && i.attr("sizes", s)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, o]), a.progressiveLazyLoad()
            }, r.onerror = function () {
                e < 3 ? setTimeout(function () {
                    a.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad())
            }, r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function (e) {
            var i, o, n = this;
            o = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > o && (n.currentSlide = o), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {
                currentSlide: i
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function () {
            var e, i, o, n = this,
                s = n.options.responsive || null;
            if ("array" === t.type(s) && s.length) {
                for (e in n.respondTo = n.options.respondTo || "window", s)
                    if (o = n.breakpoints.length - 1, s.hasOwnProperty(e)) {
                        for (i = s[e].breakpoint; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                        n.breakpoints.push(i), n.breakpointSettings[i] = s[e].settings
                    } n.breakpoints.sort(function (t, e) {
                        return n.options.mobileFirst ? t - e : e - t
                    })
            }
        }, e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
            var o = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : o.slideCount - 1 : !0 === e ? --t : t, o.slideCount < 1 || t < 0 || t > o.slideCount - 1) return !1;
            o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.setCSS = function (t) {
            var e, i, o = this,
                n = {};
            !0 === o.options.rtl && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", n[o.positionProp] = t, !1 === o.transformsEnabled ? o.$slideTrack.css(n) : (n = {}, !1 === o.cssTransitions ? (n[o.animType] = "translate(" + e + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + e + ", " + i + ", 0px)", o.$slideTrack.css(n)))
        }, e.prototype.setDimensions = function () {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function () {
            var e, i = this;
            i.$slides.each(function (o, n) {
                e = i.slideWidth * o * -1, !0 === i.options.rtl ? t(n).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(n).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, i, o, n, s, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (o = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (o = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[o] = n;
            else if ("multiple" === s) t.each(o, function (t, e) {
                r.options[t] = e
            });
            else if ("responsive" === s)
                for (i in n)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(n[i])
                    } a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function () {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function (t) {
            var e, i, o, n, s = this;
            if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + t, i.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
        }, e.prototype.setupInfinite = function () {
            var e, i, o, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
                for (o = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - o; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < o + n.slideCount; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function (t) {
            t || this.autoPlay(), this.interrupted = t
        }, e.prototype.selectHandler = function (e) {
            var i = this,
                o = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                n = parseInt(o.attr("data-slick-index"));
            n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
        }, e.prototype.slideHandler = function (t, e, i) {
            var o, n, s, r, a, l = null,
                c = this;
            if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
                if (!1 === e && c.asNavFor(t), o = t, l = c.getLeft(o), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== i ? c.animateSlide(r, function () {
                    c.postSlide(o)
                }) : c.postSlide(o));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== i ? c.animateSlide(r, function () {
                    c.postSlide(o)
                }) : c.postSlide(o));
                else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = o < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), s = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(n, function () {
                        c.postSlide(n)
                    })) : c.postSlide(n), void c.animateHeight();
                    !0 !== i ? c.animateSlide(l, function () {
                        c.postSlide(n)
                    }) : c.postSlide(n)
                }
        }, e.prototype.startLoad = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function () {
            var t, e, i, o, n = this;
            return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === n.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function (t) {
            var e, i, o = this;
            if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
            if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (i = o.swipeDirection()) {
                    case "left":
                    case "down":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                }
                "vertical" != i && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, e.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function (t) {
            var e, i, o, n, s, r, a = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + o * n : a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, e.prototype.swipeStart = function (t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function () {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function (t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function () {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function () {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function () {
            var t, i, o = this,
                n = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (t = 0; t < r; t++)
                if ("object" == typeof n || void 0 === n ? o[t].slick = new e(o[t], n) : i = o[t].slick[n].apply(o[t].slick, s), void 0 !== i) return i;
            return o
        }
    }),
    function (t) {
        "use strict";
        t.fn.fitVids = function (e) {
            var i = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var o = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("div");
                n.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', o.appendChild(n.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function () {
                var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var o = ".fitvidsignore";
                i.ignore && (o = o + ", " + i.ignore);
                var n = t(this).find(e.join(","));
                (n = (n = n.not("object object")).not(o)).each(function (e) {
                    var i = t(this);
                    if (!(i.parents(o).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                        i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                        var n = ("object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height()) / (isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10));
                        if (!i.attr("id")) {
                            var s = "fitvid" + e;
                            i.attr("id", s)
                        }
                        i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * n + "%"), i.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function () {
        "use strict";
        var t = 0,
            e = {};

        function i(o) {
            if (!o) throw new Error("No options passed to Waypoint constructor");
            if (!o.element) throw new Error("No element option passed to Waypoint constructor");
            if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = i.Adapter.extend({}, i.defaults, o), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
        }
        i.prototype.queueTrigger = function (t) {
            this.group.queueTrigger(this, t)
        }, i.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, i.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete e[this.key]
        }, i.prototype.disable = function () {
            return this.enabled = !1, this
        }, i.prototype.enable = function () {
            return this.context.refresh(), this.enabled = !0, this
        }, i.prototype.next = function () {
            return this.group.next(this)
        }, i.prototype.previous = function () {
            return this.group.previous(this)
        }, i.invokeAll = function (t) {
            var i = [];
            for (var o in e) i.push(e[o]);
            for (var n = 0, s = i.length; n < s; n++) i[n][t]()
        }, i.destroyAll = function () {
            i.invokeAll("destroy")
        }, i.disableAll = function () {
            i.invokeAll("disable")
        }, i.enableAll = function () {
            for (var t in i.Context.refreshAll(), e) e[t].enabled = !0;
            return this
        }, i.refreshAll = function () {
            i.Context.refreshAll()
        }, i.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight
        }, i.viewportWidth = function () {
            return document.documentElement.clientWidth
        }, i.adapters = [], i.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, i.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = i
    }(),
    function () {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }
        var e = 0,
            i = {},
            o = window.Waypoint,
            n = window.onload;

        function s(t) {
            this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, e += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new s(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        s.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, s.prototype.checkEmpty = function () {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                o = this.element == this.element.window;
            t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key])
        }, s.prototype.createThrottledResizeHandler = function () {
            var t = this;

            function e() {
                t.handleResize(), t.didResize = !1
            }
            this.adapter.on("resize.waypoints", function () {
                t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
            })
        }, s.prototype.createThrottledScrollHandler = function () {
            var t = this;

            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", function () {
                t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(e))
            })
        }, s.prototype.handleResize = function () {
            o.Context.refreshAll()
        }, s.prototype.handleScroll = function () {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var o = e[i],
                    n = o.newScroll > o.oldScroll ? o.forward : o.backward;
                for (var s in this.waypoints[i]) {
                    var r = this.waypoints[i][s];
                    if (null !== r.triggerPoint) {
                        var a = o.oldScroll < r.triggerPoint,
                            l = o.newScroll >= r.triggerPoint;
                        (a && l || !a && !l) && (r.queueTrigger(n), t[r.group.id] = r.group)
                    }
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, s.prototype.innerHeight = function () {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }, s.prototype.remove = function (t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, s.prototype.innerWidth = function () {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }, s.prototype.destroy = function () {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var o = 0, n = t.length; o < n; o++) t[o].destroy()
        }, s.prototype.refresh = function () {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            for (var s in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
                var r = t[s];
                for (var a in this.waypoints[s]) {
                    var l, c, d, u, p = this.waypoints[s][a],
                        h = p.options.offset,
                        f = p.triggerPoint,
                        m = 0,
                        g = null == f;
                    p.element !== p.element.window && (m = p.adapter.offset()[r.offsetProp]), "function" == typeof h ? h = h.apply(p) : "string" == typeof h && (h = parseFloat(h), p.options.offset.indexOf("%") > -1 && (h = Math.ceil(r.contextDimension * h / 100))), l = r.contextScroll - r.contextOffset, p.triggerPoint = Math.floor(m + l - h), c = f < r.oldScroll, d = p.triggerPoint >= r.oldScroll, u = !c && !d, !g && (c && d) ? (p.queueTrigger(r.backward), n[p.group.id] = p.group) : !g && u ? (p.queueTrigger(r.forward), n[p.group.id] = p.group) : g && r.oldScroll >= p.triggerPoint && (p.queueTrigger(r.forward), n[p.group.id] = p.group)
                }
            }
            return o.requestAnimationFrame(function () {
                for (var t in n) n[t].flushTriggers()
            }), this
        }, s.findOrCreateByElement = function (t) {
            return s.findByElement(t) || new s(t)
        }, s.refreshAll = function () {
            for (var t in i) i[t].refresh()
        }, s.findByElement = function (t) {
            return i[t.waypointContextKey]
        }, window.onload = function () {
            n && n(), s.refreshAll()
        }, o.requestAnimationFrame = function (e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }, o.Context = s
    }(),
    function () {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }
        var i = {
            vertical: {},
            horizontal: {}
        },
            o = window.Waypoint;

        function n(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        n.prototype.add = function (t) {
            this.waypoints.push(t)
        }, n.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function () {
            for (var i in this.triggerQueues) {
                var o = this.triggerQueues[i],
                    n = "up" === i || "left" === i;
                o.sort(n ? e : t);
                for (var s = 0, r = o.length; s < r; s += 1) {
                    var a = o[s];
                    (a.options.continuous || s === o.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function (e) {
            this.waypoints.sort(t);
            var i = o.Adapter.inArray(e, this.waypoints);
            return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
        }, n.prototype.previous = function (e) {
            this.waypoints.sort(t);
            var i = o.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, n.prototype.queueTrigger = function (t, e) {
            this.triggerQueues[e].push(t)
        }, n.prototype.remove = function (t) {
            var e = o.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, n.prototype.first = function () {
            return this.waypoints[0]
        }, n.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function (t) {
            return i[t.axis][t.name] || new n(t)
        }, o.Group = n
    }(),
    function () {
        "use strict";
        var t = window.jQuery,
            e = window.Waypoint;

        function i(e) {
            this.$element = t(e)
        }
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, e) {
            i.prototype[e] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function (e, o) {
            i[o] = t[o]
        }), e.adapters.push({
            name: "jquery",
            Adapter: i
        }), e.Adapter = i
    }(),
    function () {
        "use strict";
        var t = window.Waypoint;

        function e(e) {
            return function () {
                var i = [],
                    o = arguments[0];
                return e.isFunction(arguments[0]) && ((o = e.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
                    var n = e.extend({}, o, {
                        element: this
                    });
                    "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]), i.push(new t(n))
                }), i
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(),
    function (t) {
        "use strict";
        t.fn.counterUp = function (e) {
            var i, o = t.extend({
                time: 400,
                delay: 10,
                offset: 100,
                beginAt: 0,
                formatter: !1,
                context: "window",
                callback: function () { }
            }, e);
            return this.each(function () {
                var e = t(this),
                    n = {
                        time: t(this).data("counterup-time") || o.time,
                        delay: t(this).data("counterup-delay") || o.delay,
                        offset: t(this).data("counterup-offset") || o.offset,
                        beginAt: t(this).data("counterup-beginat") || o.beginAt,
                        context: t(this).data("counterup-context") || o.context
                    };
                e.waypoint(function (s) {
                    ! function () {
                        var s = [],
                            r = n.time / n.delay,
                            a = t(this).attr("data-num") ? t(this).attr("data-num") : e.text(),
                            l = /[0-9]+,[0-9]+/.test(a),
                            c = ((a = a.replace(/,/g, "")).split(".")[1] || []).length;
                        n.beginAt > a && (n.beginAt = a);
                        var d = /[0-9]+:[0-9]+:[0-9]+/.test(a);
                        if (d) {
                            var u = a.split(":"),
                                p = 1;
                            for (i = 0; u.length > 0;) i += p * parseInt(u.pop(), 10), p *= 60
                        }
                        for (var h = r; h >= n.beginAt / a * r; h--) {
                            var f = parseFloat(a / r * h).toFixed(c);
                            if (d) {
                                f = parseInt(i / r * h);
                                var m = parseInt(f / 3600) % 24,
                                    g = parseInt(f / 60) % 60,
                                    v = parseInt(f % 60, 10);
                                f = (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g) + ":" + (v < 10 ? "0" + v : v)
                            }
                            if (l)
                                for (;
                                    /(\d+)(\d{3})/.test(f.toString());) f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            o.formatter && (f = o.formatter.call(this, f)), s.unshift(f)
                        }
                        e.data("counterup-nums", s), e.text(n.beginAt);
                        e.data("counterup-func", function () {
                            e.data("counterup-nums") ? (e.html(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null), o.callback.call(this))) : o.callback.call(this)
                        }), setTimeout(e.data("counterup-func"), n.delay)
                    }(), this.destroy()
                }, {
                    offset: n.offset + "%",
                    context: n.context
                })
            })
        }
    }(jQuery),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() { }
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    o = i[t] = i[t] || [];
                return -1 == o.indexOf(e) && o.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = i.indexOf(e);
                return -1 != o && i.splice(o, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var s = i[n];
                    o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t, e, n) {
            if (!(this instanceof o)) return new o(t, e, n);
            var s = t;
            return "string" == typeof t && (s = document.querySelectorAll(t)), s ? (this.elements = function (t) {
                return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? l.call(t) : [t]
            }(s), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || t))
        }

        function n(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var r = t.jQuery,
            a = t.console,
            l = Array.prototype.slice;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function (t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), o = 0; o < i.length; o++) {
                    var n = i[o];
                    this.addImage(n)
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (o = 0; o < s.length; o++) {
                        var r = s[o];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, o = i.exec(e.backgroundImage); null !== o;) {
                    var n = o && o[2];
                    n && this.addBackground(n, t), o = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function (t) {
            var e = new n(t);
            this.images.push(e)
        }, o.prototype.addBackground = function (t, e) {
            var i = new s(t, e);
            this.images.push(i)
        }, o.prototype.check = function () {
            function t(t, i, o) {
                setTimeout(function () {
                    e.progress(t, i, o)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function (t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
        }, o.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, n.prototype = Object.create(e.prototype), n.prototype.check = function () {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
        }, n.prototype.getIsImageComplete = function () {
            return this.img.complete && this.img.naturalWidth
        }, n.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, n.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, n.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, n.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(n.prototype), s.prototype.check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function (e) {
            (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function (t, e) {
                return new o(this, t, e).jqDeferred.promise(r(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function (t, e) {
        "use strict";

        function i(i, s, a) {
            (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function (t) {
                return "string" == typeof t ? function (t, e, o) {
                    var n, s = "$()." + i + '("' + e + '")';
                    return t.each(function (t, l) {
                        var c = a.data(l, i);
                        if (c) {
                            var d = c[e];
                            if (d && "_" != e.charAt(0)) {
                                var u = d.apply(c, o);
                                n = void 0 === n ? u : n
                            } else r(s + " is not a valid method")
                        } else r(i + " not initialized. Cannot call methods, i.e. " + s)
                    }), void 0 !== n ? n : t
                }(this, t, n.call(arguments, 1)) : (function (t, e) {
                    t.each(function (t, o) {
                        var n = a.data(o, i);
                        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
                    })
                }(this, t), this)
            }, o(a))
        }

        function o(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var n = Array.prototype.slice,
            s = t.console,
            r = void 0 === s ? function () { } : function (t) {
                s.error(t)
            };
        return o(e || t.jQuery), i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() { }
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    o = i[t] = i[t] || [];
                return -1 == o.indexOf(e) && o.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = i.indexOf(e);
                return -1 != o && i.splice(o, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = 0,
                    n = i[o];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                    var r = s && s[n];
                    r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1]
                }
                return this
            }
        }, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e(t) {
            var e = getComputedStyle(t);
            return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function i() {
            if (!l) {
                l = !0;
                var i = document.createElement("div");
                i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
                var s = document.body || document.documentElement;
                s.appendChild(i);
                var r = e(i);
                o.isBoxSizeOuter = n = 200 == t(r.width), s.removeChild(i)
            }
        }

        function o(o) {
            if (i(), "string" == typeof o && (o = document.querySelector(o)), o && "object" == typeof o && o.nodeType) {
                var s = e(o);
                if ("none" == s.display) return function () {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < a; e++) t[r[e]] = 0;
                    return t
                }();
                var l = {};
                l.width = o.offsetWidth, l.height = o.offsetHeight;
                for (var c = l.isBorderBox = "border-box" == s.boxSizing, d = 0; d < a; d++) {
                    var u = r[d],
                        p = s[u],
                        h = parseFloat(p);
                    l[u] = isNaN(h) ? 0 : h
                }
                var f = l.paddingLeft + l.paddingRight,
                    m = l.paddingTop + l.paddingBottom,
                    g = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    y = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = c && n,
                    k = t(s.width);
                !1 !== k && (l.width = k + (w ? 0 : f + y));
                var x = t(s.height);
                return !1 !== x && (l.height = x + (w ? 0 : m + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (m + b), l.outerWidth = l.width + g, l.outerHeight = l.height + v, l
            }
        }
        var n, s = "undefined" == typeof console ? function () { } : function (t) {
            console.error(t)
        },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            a = r.length,
            l = !1;
        return o
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i] + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function (e, i) {
            return e[t](i)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var i = {
            extend: function (t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function (t, e) {
                return (t % e + e) % e
            },
            makeArray: function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "object" == typeof t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e
            },
            removeFrom: function (t, e) {
                var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
            },
            getParent: function (t, i) {
                for (; t.parentNode && t != document.body;)
                    if (t = t.parentNode, e(t, i)) return t
            },
            getQueryElement: function (t) {
                return "string" == typeof t ? document.querySelector(t) : t
            },
            handleEvent: function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            },
            filterFindElements: function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!o) return void n.push(t);
                        e(t, o) && n.push(t);
                        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
                    }
                }), n
            },
            debounceMethod: function (t, e, i) {
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    t && clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n]
                    }, i || 100)
                }
            },
            docReady: function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
            },
            toDashed: function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i
                }).toLowerCase()
            }
        },
            o = t.console;
        return i.htmlInit = function (e, n) {
            i.docReady(function () {
                var s = i.toDashed(n),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    d = r + "-options",
                    u = t.jQuery;
                c.forEach(function (t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(d);
                    try {
                        i = s && JSON.parse(s)
                    } catch (e) {
                        return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, i);
                    u && u.data(t, n, a)
                })
            })
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var o = document.documentElement.style,
            n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            r = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[n],
            a = {
                transform: s,
                transition: n,
                transitionDuration: n + "Duration",
                transitionProperty: n + "Property",
                transitionDelay: n + "Delay"
            },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function () {
            this.size = e(this.element)
        }, l.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                e[a[i] || i] = t[i]
            }
        }, l.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
                a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
        }, l.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                o = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[n];
            e[s] = this.getXValue(a), e[r] = "";
            var l = o ? "paddingTop" : "paddingBottom",
                c = o ? "top" : "bottom",
                d = o ? "bottom" : "top",
                u = this.position.y + t[l];
            e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                s = parseInt(e, 10),
                r = n === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), !r || this.isTransitioning) {
                var a = t - i,
                    l = e - o,
                    c = {};
                c.transform = this.getTranslate(a, l), this.transition({
                    to: c,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function (t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, l._nonTransition = function (t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var c = "opacity," + function (t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }(s);
        l.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: c,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(r, this, !1)
            }
        }, l.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = d[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function (t) {
                    for (var e in t) return !1;
                    return !0
                }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var u = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function () {
            this.css(u)
        }, l.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function () {
            return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, l.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, l.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
            return e(t, i, o, n, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, i, o, n) {
        "use strict";

        function s(t, e) {
            var i = o.getQueryElement(t);
            if (i) {
                this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
                var n = ++d;
                this.element.outlayerGUID = n, u[n] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            l = t.jQuery,
            c = function () { },
            d = 0,
            u = {};
        s.namespace = "outlayer", s.Item = n, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = s.prototype;
        o.extend(p, e.prototype), p.option = function (t) {
            o.extend(this.options, t)
        }, p._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, p._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, p.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, p._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                var s = new i(e[n], this);
                o.push(s)
            }
            return o
        }, p._filterFindItemElements = function (t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, p.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, p.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, p._init = p.layout, p._resetLayout = function () {
            this.getSize()
        }, p.getSize = function () {
            this.size = i(this.element)
        }, p._getMeasurement = function (t, e) {
            var o, n = this.options[t];
            n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
        }, p.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, p._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, p._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function (t) {
                    var o = this._getItemLayoutPosition(t);
                    o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
                }, this), this._processLayoutQueue(i)
            }
        }, p._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, p._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, p.updateStagger = function () {
            var t = this.options.stagger;
            return null == t ? void (this.stagger = 0) : (this.stagger = function (t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    o = e && e[2];
                return i.length ? (i = parseFloat(i)) * (h[o] || 1) : 0
            }(t), this.stagger)
        }, p._positionItem = function (t, e, i, o, n) {
            o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
        }, p._postLayout = function () {
            this.resizeContainer()
        }, p.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, p._getContainerSize = c, p._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, p._emitCompleteOnItems = function (t, e) {
            function i() {
                n.dispatchEvent(t + "Complete", null, [e])
            }

            function o() {
                ++r == s && i()
            }
            var n = this,
                s = e.length;
            if (e && s) {
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o)
                })
            } else i()
        }, p.dispatchEvent = function (t, e, i) {
            var o = e ? [e].concat(i) : i;
            if (this.emitEvent(t, o), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var n = l.Event(e);
                    n.type = t, this.$element.trigger(n, i)
                } else this.$element.trigger(t, i)
        }, p.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, p.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, p.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, p.unstamp = function (t) {
            (t = this._find(t)) && t.forEach(function (t) {
                o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, p._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), o.makeArray(t)
        }, p._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, p._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, p._manageStamp = c, p._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                o = this._boundingRect,
                n = i(t);
            return {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            }
        }, p.handleEvent = o.handleEvent, p.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, p.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, p.onresize = function () {
            this.resize()
        }, o.debounceMethod(s, "onresize", 100), p.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, p.needsResizeLayout = function () {
            var t = i(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, p.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, p.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, p.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, p.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, p.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, p.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, p.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, p.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, p.getItems = function (t) {
            t = o.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, p.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), o.removeFrom(this.items, t)
            }, this)
        }, p.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, s.data = function (t) {
            var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
            return e && u[e]
        }, s.create = function (t, e) {
            var i = r(s);
            return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return s.Item = n, s
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            o = i._create;
        i._create = function () {
            this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
        }, i.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var n = i.destroy;
        return i.destroy = function () {
            n.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var o = i.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
            o[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), o.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, o._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, o.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, o.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, o.getSegmentSize = function (t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, o.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, o.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, o.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function (t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return o._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, o.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                s = n / o,
                r = o - n % o;
            s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1)
        }, o.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                x: this.columnWidth * o.col,
                y: o.y
            }, s = o.y + t.size.outerHeight, r = i + o.col, a = o.col; a < r; a++) this.colYs[a] = s;
            return n
        }, o._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }, o._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
            return e
        }, o._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }, o._getHorizontalColPosition = function (t, e) {
            var i = this.horizontalColIndex % this.cols;
            i = t > 1 && i + t > this.cols ? 0 : i;
            var o = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }, o._manageStamp = function (t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this._getOption("originLeft") ? o.left : o.right,
                s = n + i.outerWidth,
                r = Math.floor(n / this.columnWidth);
            r = Math.max(0, r);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, o._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, o._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            this.items = this.isotope.filteredItems, r.call(this)
        };
        var a = o._getOption;
        return o._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, i._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
            i = e.prototype;
        return i._resetLayout = function () {
            this.y = 0
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function () {
            return {
                height: this.y
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function (t, e, i, o, n, s, r) {
        var a = t.jQuery,
            l = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            c = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = s, c.LayoutMode = r;
        var d = c.prototype;
        d._create = function () {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
        }, d.reloadItems = function () {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d._itemize = function () {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                t[i].id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d._initLayoutMode = function (t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, d._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.arrange = function (t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, d._init = d.arrange, d._hideReveal = function (t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, d._getIsInstant = function () {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, d._bindArrangeComplete = function () {
            function t() {
                e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
            }
            var e, i, o, n = this;
            this.once("layoutComplete", function () {
                e = !0, t()
            }), this.once("hideComplete", function () {
                i = !0, t()
            }), this.once("revealComplete", function () {
                o = !0, t()
            })
        }, d._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = s(a);
                    l && i.push(a), l && a.isHidden ? o.push(a) : l || a.isHidden || n.push(a)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, d._getFilterTest = function (t) {
            return a && this.options.isJQueryFiltering ? function (e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return o(e.element, t)
            }
        }, d.updateSortData = function (t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = u(i)
            }
        }, d._updateItemsSortData = function (t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                t[i].updateSortData()
            }
        };
        var u = function () {
            return function (t) {
                if ("string" != typeof t) return t;
                var e = l(t).split(" "),
                    i = e[0],
                    o = i.match(/^\[(.+)\]$/),
                    n = function (t, e) {
                        return t ? function (e) {
                            return e.getAttribute(t)
                        } : function (t) {
                            var i = t.querySelector(e);
                            return i && i.textContent
                        }
                    }(o && o[1], i),
                    s = c.sortDataParsers[e[1]];
                return s ? function (t) {
                    return t && s(n(t))
                } : function (t) {
                    return t && n(t)
                }
            }
        }();
        c.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        }, d._sort = function () {
            if (this.options.sortBy) {
                var t = n.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = function (t, e) {
                    return function (i, o) {
                        for (var n = 0; n < t.length; n++) {
                            var s = t[n],
                                r = i.sortData[s],
                                a = o.sortData[s];
                            if (r > a || r < a) return (r > a ? 1 : -1) * ((void 0 !== e[s] ? e[s] : e) ? 1 : -1)
                        }
                        return 0
                    }
                }(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, d._getIsSameSortBy = function (t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, d._mode = function () {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, d._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, d.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, d.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
                var s = this._filter(e).matches;
                for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var p = d.remove;
        return d.remove = function (t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, o = 0; i && o < i; o++) {
                var s = e[o];
                n.removeFrom(this.filteredItems, s)
            }
        }, d.shuffle = function () {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d._noTransition = function (t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var o = t.apply(this, e);
            return this.options.transitionDuration = i, o
        }, d.getFilteredItemElements = function () {
            return this.filteredItems.map(function (t) {
                return t.element
            })
        }, c
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define([], e(t)) : "object" == typeof exports ? module.exports = e(t) : t.smoothScroll = e(t)
    }("undefined" != typeof global ? global : this.window || this.global, function (t) {
        "use strict";
        var e, i, o, n, s, r = {},
            a = "querySelector" in document && "addEventListener" in t,
            l = {
                selector: "[data-scroll]",
                selectorHeader: "[data-scroll-header]",
                speed: 500,
                easing: "easeInOutCubic",
                offset: 0,
                updateURL: !0,
                callback: function () { }
            },
            c = function () {
                var t = {},
                    e = !1,
                    i = 0,
                    o = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);
                for (var n = function (i) {
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e && "[object Object]" === Object.prototype.toString.call(i[o]) ? t[o] = c(!0, t[o], i[o]) : t[o] = i[o])
                }; o > i; i++) {
                    n(arguments[i])
                }
                return t
            };
        r.escapeCharacters = function (t) {
            "#" === t.charAt(0) && (t = t.substr(1));
            for (var e, i = String(t), o = i.length, n = -1, s = "", r = i.charCodeAt(0); ++n < o;) {
                if (0 === (e = i.charCodeAt(n))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                s += e >= 1 && 31 >= e || 127 == e || 0 === n && e >= 48 && 57 >= e || 1 === n && e >= 48 && 57 >= e && 45 === r ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && 57 >= e || e >= 65 && 90 >= e || e >= 97 && 122 >= e ? i.charAt(n) : "\\" + i.charAt(n)
            }
            return "#" + s
        };
        var d = function (t, e, i) {
            var o = 0;
            if (t.offsetParent)
                do {
                    o += t.offsetTop, t = t.offsetParent
                } while (t);
            return o = Math.max(o - e - i, 0), Math.min(o, p() - u())
        },
            u = function () {
                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            },
            p = function () {
                return Math.max(t.document.body.scrollHeight, t.document.documentElement.scrollHeight, t.document.body.offsetHeight, t.document.documentElement.offsetHeight, t.document.body.clientHeight, t.document.documentElement.clientHeight)
            },
            h = function (t) {
                return null === t ? 0 : function (t) {
                    return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
                }(t) + t.offsetTop
            };
        r.animateScroll = function (i, r, a) {
            var u = function (t) {
                return t && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {}
            }(r ? r.getAttribute("data-options") : null),
                f = c(e || l, a || {}, u),
                m = "[object Number]" === Object.prototype.toString.call(i),
                g = m ? null : "#" === i ? t.document.documentElement : t.document.querySelector(i);
            if (m || g) {
                var v = t.pageYOffset;
                o || (o = t.document.querySelector(f.selectorHeader)), n || (n = h(o));
                var y, b, w = m ? i : d(g, n, parseInt(f.offset, 10)),
                    k = w - v,
                    x = p(),
                    C = 0;
                m || function (e, i) {
                    t.history.pushState && (i || "true" === i) && "file:" !== t.location.protocol && t.history.pushState(null, null, [t.location.protocol, "//", t.location.host, t.location.pathname, t.location.search, e].join(""))
                }(i, f.updateURL);
                var S = function () {
                    y = (y = (C += 16) / parseInt(f.speed, 10)) > 1 ? 1 : y, b = v + k * function (t, e) {
                        var i;
                        return "easeInQuad" === t && (i = e * e), "easeOutQuad" === t && (i = e * (2 - e)), "easeInOutQuad" === t && (i = .5 > e ? 2 * e * e : (4 - 2 * e) * e - 1), "easeInCubic" === t && (i = e * e * e), "easeOutCubic" === t && (i = --e * e * e + 1), "easeInOutCubic" === t && (i = .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1), "easeInQuart" === t && (i = e * e * e * e), "easeOutQuart" === t && (i = 1 - --e * e * e * e), "easeInOutQuart" === t && (i = .5 > e ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e), "easeInQuint" === t && (i = e * e * e * e * e), "easeOutQuint" === t && (i = 1 + --e * e * e * e * e), "easeInOutQuint" === t && (i = .5 > e ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e), i || e
                    }(f.easing, y), t.scrollTo(0, Math.floor(b)),
                        function (e, o, n) {
                            var s = t.pageYOffset;
                            (e == o || s == o || t.innerHeight + s >= x) && (clearInterval(n), m || (g.focus(), document.activeElement.id !== g.id && (g.setAttribute("tabindex", "-1"), g.focus(), g.style.outline = "none")), f.callback(i, r))
                        }(b, w, s)
                };
                0 === t.pageYOffset && t.scrollTo(0, 0), clearInterval(s), s = setInterval(S, 16)
            }
        };
        var f = function (t) {
            if (0 === t.button && !t.metaKey && !t.ctrlKey) {
                var i = function (t, e) {
                    var i, o, n = e.charAt(0),
                        s = "classList" in document.documentElement;
                    for ("[" === n && (i = (e = e.substr(1, e.length - 2)).split("=")).length > 1 && (o = !0, i[1] = i[1].replace(/"/g, "").replace(/'/g, "")); t && t !== document && 1 === t.nodeType; t = t.parentNode) {
                        if ("." === n)
                            if (s) {
                                if (t.classList.contains(e.substr(1))) return t
                            } else if (new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(t.className)) return t;
                        if ("#" === n && t.id === e.substr(1)) return t;
                        if ("[" === n && t.hasAttribute(i[0])) {
                            if (!o) return t;
                            if (t.getAttribute(i[0]) === i[1]) return t
                        }
                        if (t.tagName.toLowerCase() === e) return t
                    }
                    return null
                }(t.target, e.selector);
                if (i && "a" === i.tagName.toLowerCase()) {
                    if (i.origin !== location.origin || i.pathname !== location.pathname) return;
                    t.preventDefault();
                    var o = r.escapeCharacters(i.hash);
                    r.animateScroll(o, i, e)
                }
            }
        },
            m = function (t) {
                i || (i = setTimeout(function () {
                    i = null, n = h(o)
                }, 66))
            };
        return r.destroy = function () {
            e && (t.document.removeEventListener("click", f, !1), t.removeEventListener("resize", m, !1), e = null, i = null, o = null, n = null, s = null)
        }, r.init = function (i) {
            a && (r.destroy(), e = c(l, i || {}), o = t.document.querySelector(e.selectorHeader), n = h(o), t.document.addEventListener("click", f, !1), o && t.addEventListener("resize", m, !1))
        }, r
    }),
    function (t) {
        "use strict";
        var e = {
            cache: {},
            support: {},
            objects: {},
            init: function (e) {
                return this.each(function () {
                    t(this).unbind("click.lightcase").bind("click.lightcase", function (i) {
                        i.preventDefault(), t(this).lightcase("start", e)
                    })
                })
            },
            start: function (i) {
                e.origin = lightcase.origin = this, e.settings = lightcase.settings = t.extend(!0, {
                    idPrefix: "lightcase-",
                    classPrefix: "lightcase-",
                    attrPrefix: "lc-",
                    transition: "elastic",
                    transitionOpen: null,
                    transitionClose: null,
                    transitionIn: null,
                    transitionOut: null,
                    cssTransitions: !0,
                    speedIn: 250,
                    speedOut: 250,
                    width: null,
                    height: null,
                    maxWidth: 800,
                    maxHeight: 500,
                    forceWidth: !1,
                    forceHeight: !1,
                    liveResize: !0,
                    fullScreenModeForMobile: !0,
                    mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
                    disableShrink: !1,
                    fixedRatio: !0,
                    shrinkFactor: .75,
                    overlayOpacity: .9,
                    slideshow: !1,
                    slideshowAutoStart: !0,
                    timeout: 5e3,
                    swipe: !0,
                    useKeys: !0,
                    useCategories: !0,
                    useAsCollection: !1,
                    navigateEndless: !0,
                    closeOnOverlayClick: !0,
                    title: null,
                    caption: null,
                    showTitle: !0,
                    showCaption: !0,
                    showSequenceInfo: !0,
                    inline: {
                        width: "auto",
                        height: "auto"
                    },
                    ajax: {
                        width: "auto",
                        height: "auto",
                        type: "get",
                        dataType: "html",
                        data: {}
                    },
                    iframe: {
                        width: 800,
                        height: 500,
                        frameborder: 0
                    },
                    flash: {
                        width: 400,
                        height: 205,
                        wmode: "transparent"
                    },
                    video: {
                        width: 400,
                        height: 225,
                        poster: "",
                        preload: "auto",
                        controls: !0,
                        autobuffer: !0,
                        autoplay: !0,
                        loop: !1
                    },
                    attr: "data-rel",
                    href: null,
                    type: null,
                    typeMapping: {
                        image: "jpg,jpeg,gif,png,bmp",
                        flash: "swf",
                        video: "mp4,mov,ogv,ogg,webm",
                        iframe: "html,php",
                        ajax: "json,txt",
                        inline: "#"
                    },
                    errorMessage: function () {
                        return '<p class="' + e.settings.classPrefix + 'error">' + e.settings.labels.errorMessage + "</p>"
                    },
                    labels: {
                        errorMessage: "Source could not be found...",
                        "sequenceInfo.of": " of ",
                        close: "Close",
                        "navigator.prev": "Prev",
                        "navigator.next": "Next",
                        "navigator.play": "Play",
                        "navigator.pause": "Pause"
                    },
                    markup: function () {
                        e.objects.body.append(e.objects.overlay = t('<div id="' + e.settings.idPrefix + 'overlay"></div>'), e.objects.loading = t('<div id="' + e.settings.idPrefix + 'loading" class="' + e.settings.classPrefix + 'icon-spin"></div>'), e.objects.case = t('<div id="' + e.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>')), e.objects.case.after(e.objects.close = t('<a href="#" class="' + e.settings.classPrefix + 'icon-close"><span>' + e.settings.labels.close + "</span></a>"), e.objects.nav = t('<div id="' + e.settings.idPrefix + 'nav"></div>')), e.objects.nav.append(e.objects.prev = t('<a href="#" class="' + e.settings.classPrefix + 'icon-prev"><span>' + e.settings.labels["navigator.prev"] + "</span></a>").hide(), e.objects.next = t('<a href="#" class="' + e.settings.classPrefix + 'icon-next"><span>' + e.settings.labels["navigator.next"] + "</span></a>").hide(), e.objects.play = t('<a href="#" class="' + e.settings.classPrefix + 'icon-play"><span>' + e.settings.labels["navigator.play"] + "</span></a>").hide(), e.objects.pause = t('<a href="#" class="' + e.settings.classPrefix + 'icon-pause"><span>' + e.settings.labels["navigator.pause"] + "</span></a>").hide()), e.objects.case.append(e.objects.content = t('<div id="' + e.settings.idPrefix + 'content"></div>'), e.objects.info = t('<div id="' + e.settings.idPrefix + 'info"></div>')), e.objects.content.append(e.objects.contentInner = t('<div class="' + e.settings.classPrefix + 'contentInner"></div>')), e.objects.info.append(e.objects.sequenceInfo = t('<div id="' + e.settings.idPrefix + 'sequenceInfo"></div>'), e.objects.title = t('<h4 id="' + e.settings.idPrefix + 'title"></h4>'), e.objects.caption = t('<p id="' + e.settings.idPrefix + 'caption"></p>'))
                    },
                    onInit: {},
                    onStart: {},
                    onFinish: {},
                    onResize: {},
                    onClose: {},
                    onCleanup: {}
                }, i, e.origin.data ? e.origin.data("lc-options") : {}), e.objects.document = t("html"), e.objects.body = t("body"), e._callHooks(e.settings.onInit), e.objectData = e._setObjectData(this), e._addElements(), e._open(), e.dimensions = e.getViewportDimensions()
            },
            get: function (t) {
                return e.objects[t]
            },
            getObjectData: function () {
                return e.objectData
            },
            _setObjectData: function (i) {
                var o = t(i),
                    n = {
                        this: t(i),
                        title: e.settings.title || o.attr(e._prefixAttributeName("title")) || o.attr("title"),
                        caption: e.settings.caption || o.attr(e._prefixAttributeName("caption")) || o.children("img").attr("alt"),
                        url: e._determineUrl(),
                        requestType: e.settings.ajax.type,
                        requestData: e.settings.ajax.data,
                        requestDataType: e.settings.ajax.dataType,
                        rel: o.attr(e._determineAttributeSelector()),
                        type: e.settings.type || e._verifyDataType(e._determineUrl()),
                        isPartOfSequence: e.settings.useAsCollection || e._isPartOfSequence(o.attr(e.settings.attr), ":"),
                        isPartOfSequenceWithSlideshow: e._isPartOfSequence(o.attr(e.settings.attr), ":slideshow"),
                        currentIndex: t(e._determineAttributeSelector()).index(o),
                        sequenceLength: t(e._determineAttributeSelector()).length
                    };
                return n.sequenceInfo = n.currentIndex + 1 + e.settings.labels["sequenceInfo.of"] + n.sequenceLength, n.prevIndex = n.currentIndex - 1, n.nextIndex = n.currentIndex + 1, n
            },
            _prefixAttributeName: function (t) {
                return "data-" + e.settings.attrPrefix + t
            },
            _determineLinkTarget: function () {
                return e.settings.href || t(e.origin).attr(e._prefixAttributeName("href")) || t(e.origin).attr("href")
            },
            _determineAttributeSelector: function () {
                var i = t(e.origin),
                    o = "";
                if (void 0 !== e.cache.selector) o = e.cache.selector;
                else if (!0 === e.settings.useCategories && i.attr(e._prefixAttributeName("categories"))) {
                    var n = i.attr(e._prefixAttributeName("categories")).split(" ");
                    t.each(n, function (t, i) {
                        t > 0 && (o += ","), o += "[" + e._prefixAttributeName("categories") + '~="' + i + '"]'
                    })
                } else o = "[" + e.settings.attr + '="' + i.attr(e.settings.attr) + '"]';
                return e.cache.selector = o, o
            },
            _determineUrl: function () {
                var i, o = e._verifyDataUrl(e._determineLinkTarget()),
                    n = 0,
                    s = 0,
                    r = "";
                return t.each(o, function (t, o) {
                    switch (e._verifyDataType(o.url)) {
                        case "video":
                            var a = document.createElement("video"),
                                l = e._verifyDataType(o.url) + "/" + e._getFileUrlSuffix(o.url);
                            "probably" !== r && r !== a.canPlayType(l) && "" !== a.canPlayType(l) && (r = a.canPlayType(l), i = o.url);
                            break;
                        default:
                            e._devicePixelRatio() >= o.density && o.density >= s && e._matchMedia()("screen and (min-width:" + o.width + "px)").matches && o.width >= n && (n = o.width, s = o.density, i = o.url)
                    }
                }), i
            },
            _normalizeUrl: function (t) {
                var e = /^\d+$/;
                return t.split(",").map(function (t) {
                    var i = {
                        width: 0,
                        density: 0
                    };
                    return t.trim().split(/\s+/).forEach(function (t, o) {
                        if (0 === o) return i.url = t;
                        var n = t.substring(0, t.length - 1),
                            s = t[t.length - 1],
                            r = parseInt(n, 10),
                            a = parseFloat(n);
                        "w" === s && e.test(n) ? i.width = r : "h" === s && e.test(n) ? i.height = r : "x" !== s || isNaN(a) || (i.density = a)
                    }), i
                })
            },
            _isPartOfSequence: function (i, o) {
                var n = t("[" + e.settings.attr + '="' + i + '"]');
                return new RegExp(o).test(i) && n.length > 1
            },
            isSlideshowEnabled: function () {
                return e.objectData.isPartOfSequence && (!0 === e.settings.slideshow || !0 === e.objectData.isPartOfSequenceWithSlideshow)
            },
            _loadContent: function () {
                e.cache.originalObject && e._restoreObject(), e._createObject()
            },
            _createObject: function () {
                var i;
                switch (e.objectData.type) {
                    case "image":
                        (i = t(new Image)).attr({
                            src: e.objectData.url,
                            alt: e.objectData.title
                        });
                        break;
                    case "inline":
                        (i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>')).html(e._cloneObject(t(e.objectData.url))), t.each(e.settings.inline, function (t, o) {
                            i.attr(e._prefixAttributeName(t), o)
                        });
                        break;
                    case "ajax":
                        i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'), t.each(e.settings.ajax, function (t, o) {
                            "data" !== t && i.attr(e._prefixAttributeName(t), o)
                        });
                        break;
                    case "flash":
                        i = t('<embed src="' + e.objectData.url + '" type="application/x-shockwave-flash"></embed>'), t.each(e.settings.flash, function (t, e) {
                            i.attr(t, e)
                        });
                        break;
                    case "video":
                        (i = t("<video></video>")).attr("src", e.objectData.url), t.each(e.settings.video, function (t, e) {
                            i.attr(t, e)
                        });
                        break;
                    default:
                        (i = t("<iframe></iframe>")).attr({
                            src: e.objectData.url
                        }), t.each(e.settings.iframe, function (t, e) {
                            i.attr(t, e)
                        })
                }
                e._addObject(i), e._loadObject(i)
            },
            _addObject: function (t) {
                e.objects.contentInner.html(t), e._loading("start"), e._callHooks(e.settings.onStart), !0 === e.settings.showSequenceInfo && e.objectData.isPartOfSequence ? (e.objects.sequenceInfo.html(e.objectData.sequenceInfo), e.objects.sequenceInfo.show()) : (e.objects.sequenceInfo.empty(), e.objects.sequenceInfo.hide()), !0 === e.settings.showTitle && void 0 !== e.objectData.title && "" !== e.objectData.title ? (e.objects.title.html(e.objectData.title), e.objects.title.show()) : (e.objects.title.empty(), e.objects.title.hide()), !0 === e.settings.showCaption && void 0 !== e.objectData.caption && "" !== e.objectData.caption ? (e.objects.caption.html(e.objectData.caption), e.objects.caption.show()) : (e.objects.caption.empty(), e.objects.caption.hide())
            },
            _loadObject: function (i) {
                switch (e.objectData.type) {
                    case "inline":
                        t(e.objectData.url) ? e._showContent(i) : e.error();
                        break;
                    case "ajax":
                        t.ajax(t.extend({}, e.settings.ajax, {
                            url: e.objectData.url,
                            type: e.objectData.requestType,
                            dataType: e.objectData.requestDataType,
                            data: e.objectData.requestData,
                            success: function (t, o, n) {
                                "json" === e.objectData.requestDataType ? e.objectData.data = t : i.html(t), e._showContent(i)
                            },
                            error: function (t, i, o) {
                                e.error()
                            }
                        }));
                        break;
                    case "flash":
                        e._showContent(i);
                        break;
                    case "video":
                        "function" == typeof i.get(0).canPlayType || 0 === e.objects.case.find("video").length ? e._showContent(i) : e.error();
                        break;
                    default:
                        e.objectData.url ? (i.on("load", function () {
                            e._showContent(i)
                        }), i.on("error", function () {
                            e.error()
                        })) : e.error()
                }
            },
            error: function () {
                e.objectData.type = "error";
                var i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>');
                i.html(e.settings.errorMessage), e.objects.contentInner.html(i), e._showContent(e.objects.contentInner)
            },
            _calculateDimensions: function (t) {
                e._cleanupDimensions();
                var i = {
                    ratio: 1,
                    objectWidth: t.attr("width") ? t.attr("width") : t.attr(e._prefixAttributeName("width")),
                    objectHeight: t.attr("height") ? t.attr("height") : t.attr(e._prefixAttributeName("height"))
                };
                if (!e.settings.disableShrink) switch (i.maxWidth = parseInt(e.dimensions.windowWidth * e.settings.shrinkFactor), i.maxHeight = parseInt(e.dimensions.windowHeight * e.settings.shrinkFactor), i.maxWidth > e.settings.maxWidth && (i.maxWidth = e.settings.maxWidth), i.maxHeight > e.settings.maxHeight && (i.maxHeight = e.settings.maxHeight), i.differenceWidthAsPercent = parseInt(100 / i.maxWidth * i.objectWidth), i.differenceHeightAsPercent = parseInt(100 / i.maxHeight * i.objectHeight), e.objectData.type) {
                    case "image":
                    case "flash":
                    case "video":
                    case "iframe":
                    case "ajax":
                    case "inline":
                        if ("image" === e.objectData.type || !0 === e.settings.fixedRatio) {
                            i.differenceWidthAsPercent > 100 && i.differenceWidthAsPercent > i.differenceHeightAsPercent && (i.objectWidth = i.maxWidth, i.objectHeight = parseInt(i.objectHeight / i.differenceWidthAsPercent * 100)), i.differenceHeightAsPercent > 100 && i.differenceHeightAsPercent > i.differenceWidthAsPercent && (i.objectWidth = parseInt(i.objectWidth / i.differenceHeightAsPercent * 100), i.objectHeight = i.maxHeight), i.differenceHeightAsPercent > 100 && i.differenceWidthAsPercent < i.differenceHeightAsPercent && (i.objectWidth = parseInt(i.maxWidth / i.differenceHeightAsPercent * i.differenceWidthAsPercent), i.objectHeight = i.maxHeight);
                            break
                        }
                    case "error":
                        !isNaN(i.objectWidth) && i.objectWidth > i.maxWidth && (i.objectWidth = i.maxWidth);
                        break;
                    default:
                        (isNaN(i.objectWidth) || i.objectWidth > i.maxWidth) && !e.settings.forceWidth && (i.objectWidth = i.maxWidth), (isNaN(i.objectHeight) && "auto" !== i.objectHeight || i.objectHeight > i.maxHeight) && !e.settings.forceHeight && (i.objectHeight = i.maxHeight)
                }
                if (e.settings.forceWidth) {
                    try {
                        i.objectWidth = e.settings[e.objectData.type].width
                    } catch (t) {
                        i.objectWidth = e.settings.width || i.objectWidth
                    }
                    i.maxWidth = null
                }
                if (t.attr(e._prefixAttributeName("max-width")) && (i.maxWidth = t.attr(e._prefixAttributeName("max-width"))), e.settings.forceHeight) {
                    try {
                        i.objectHeight = e.settings[e.objectData.type].height
                    } catch (t) {
                        i.objectHeight = e.settings.height || i.objectHeight
                    }
                    i.maxHeight = null
                }
                t.attr(e._prefixAttributeName("max-height")) && (i.maxHeight = t.attr(e._prefixAttributeName("max-height"))), e._adjustDimensions(t, i)
            },
            _adjustDimensions: function (t, i) {
                t.css({
                    width: i.objectWidth,
                    height: i.objectHeight,
                    "max-width": i.maxWidth,
                    "max-height": i.maxHeight
                }), e.objects.contentInner.css({
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    "max-width": "100%"
                }), e.objects.case.css({
                    width: e.objects.contentInner.outerWidth()
                }), e.objects.case.css({
                    "margin-top": parseInt(-e.objects.case.outerHeight() / 2),
                    "margin-left": parseInt(-e.objects.case.outerWidth() / 2)
                })
            },
            _loading: function (t) {
                "start" === t ? (e.objects.case.addClass(e.settings.classPrefix + "loading"), e.objects.loading.show()) : "end" === t && (e.objects.case.removeClass(e.settings.classPrefix + "loading"), e.objects.loading.hide())
            },
            getViewportDimensions: function () {
                return {
                    windowWidth: t(window).innerWidth(),
                    windowHeight: t(window).innerHeight()
                }
            },
            _verifyDataUrl: function (t) {
                return !(!t || void 0 === t || "" === t) && (t.indexOf("#") > -1 && (t = "#" + (t = t.split("#"))[t.length - 1]), e._normalizeUrl(t.toString()))
            },
            _getFileUrlSuffix: function (t) {
                return t.toLowerCase().split("?")[0].split(".")[1]
            },
            _verifyDataType: function (t) {
                var i = e.settings.typeMapping;
                if (!t) return !1;
                for (var o in i)
                    if (i.hasOwnProperty(o))
                        for (var n = i[o].split(","), s = 0; s < n.length; s++) {
                            var r = n[s].toLowerCase(),
                                a = new RegExp(".(" + r + ")$", "i"),
                                l = t.toLowerCase().split("?")[0].substr(-5);
                            if (!0 === a.test(l) || "inline" === o && t.indexOf(r) > -1) return o
                        }
                return "iframe"
            },
            _addElements: function () {
                void 0 !== e.objects.case && t("#" + e.objects.case.attr("id")).length || e.settings.markup()
            },
            _showContent: function (t) {
                switch (e.objects.document.attr(e._prefixAttributeName("type"), e.objectData.type), e.cache.object = t, e._calculateDimensions(t), e._callHooks(e.settings.onFinish), e.transition.in()) {
                    case "scrollTop":
                    case "scrollRight":
                    case "scrollBottom":
                    case "scrollLeft":
                    case "scrollHorizontal":
                    case "scrollVertical":
                        e.transition.scroll(e.objects.case, "in", e.settings.speedIn), e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
                        break;
                    case "elastic":
                        e.objects.case.css("opacity") < 1 && (e.transition.zoom(e.objects.case, "in", e.settings.speedIn), e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn));
                    case "fade":
                    case "fadeInline":
                        e.transition.fade(e.objects.case, "in", e.settings.speedIn), e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
                        break;
                    default:
                        e.transition.fade(e.objects.case, "in", 0)
                }
                e._loading("end"), e.isBusy = !1, e.cache.firstOpened || (e.cache.firstOpened = e.objectData.this), e.objects.info.hide(), setTimeout(function () {
                    e.transition.fade(e.objects.info, "in", e.settings.speedIn)
                }, e.settings.speedIn)
            },
            _processContent: function () {
                switch (e.isBusy = !0, e.transition.fade(e.objects.info, "out", 0), e.settings.transitionOut) {
                    case "scrollTop":
                    case "scrollRight":
                    case "scrollBottom":
                    case "scrollLeft":
                    case "scrollVertical":
                    case "scrollHorizontal":
                        e.objects.case.is(":hidden") ? (e.transition.fade(e.objects.contentInner, "out", 0), e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent()
                        })) : e.transition.scroll(e.objects.case, "out", e.settings.speedOut, function () {
                            e._loadContent()
                        });
                        break;
                    case "fade":
                        e.objects.case.is(":hidden") ? e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent()
                        }) : e.transition.fade(e.objects.case, "out", e.settings.speedOut, 0, function () {
                            e._loadContent()
                        });
                        break;
                    case "fadeInline":
                    case "elastic":
                        e.objects.case.is(":hidden") ? e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent()
                        }) : e.transition.fade(e.objects.contentInner, "out", e.settings.speedOut, 0, function () {
                            e._loadContent()
                        });
                        break;
                    default:
                        e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent()
                        })
                }
            },
            _handleEvents: function () {
                e._unbindEvents(), e.objects.nav.children().not(e.objects.close).hide(), e.isSlideshowEnabled() && (!0 !== e.settings.slideshowAutoStart && !e.isSlideshowStarted || e.objects.nav.hasClass(e.settings.classPrefix + "paused") ? e._stopTimeout() : e._startTimeout()), e.settings.liveResize && e._watchResizeInteraction(), e.objects.close.click(function (t) {
                    t.preventDefault(), e.close()
                }), !0 === e.settings.closeOnOverlayClick && e.objects.overlay.css("cursor", "pointer").click(function (t) {
                    t.preventDefault(), e.close()
                }), !0 === e.settings.useKeys && e._addKeyEvents(), e.objectData.isPartOfSequence && (e.objects.nav.attr(e._prefixAttributeName("ispartofsequence"), !0), e.objects.nav.data("items", e._setNavigation()), e.objects.prev.click(function (t) {
                    t.preventDefault(), !0 !== e.settings.navigateEndless && e.item.isFirst() || (e.objects.prev.unbind("click"), e.cache.action = "prev", e.objects.nav.data("items").prev.click(), e.isSlideshowEnabled() && e._stopTimeout())
                }), e.objects.next.click(function (t) {
                    t.preventDefault(), !0 !== e.settings.navigateEndless && e.item.isLast() || (e.objects.next.unbind("click"), e.cache.action = "next", e.objects.nav.data("items").next.click(), e.isSlideshowEnabled() && e._stopTimeout())
                }), e.isSlideshowEnabled() && (e.objects.play.click(function (t) {
                    t.preventDefault(), e._startTimeout()
                }), e.objects.pause.click(function (t) {
                    t.preventDefault(), e._stopTimeout()
                })), !0 === e.settings.swipe && (t.isPlainObject(t.event.special.swipeleft) && e.objects.case.on("swipeleft", function (t) {
                    t.preventDefault(), e.objects.next.click(), e.isSlideshowEnabled() && e._stopTimeout()
                }), t.isPlainObject(t.event.special.swiperight) && e.objects.case.on("swiperight", function (t) {
                    t.preventDefault(), e.objects.prev.click(), e.isSlideshowEnabled() && e._stopTimeout()
                })))
            },
            _addKeyEvents: function () {
                t(document).bind("keyup.lightcase", function (t) {
                    if (!e.isBusy) switch (t.keyCode) {
                        case 27:
                            e.objects.close.click();
                            break;
                        case 37:
                            e.objectData.isPartOfSequence && e.objects.prev.click();
                            break;
                        case 39:
                            e.objectData.isPartOfSequence && e.objects.next.click()
                    }
                })
            },
            _startTimeout: function () {
                e.isSlideshowStarted = !0, e.objects.play.hide(), e.objects.pause.show(), e.cache.action = "next", e.objects.nav.removeClass(e.settings.classPrefix + "paused"), e.timeout = setTimeout(function () {
                    e.objects.nav.data("items").next.click()
                }, e.settings.timeout)
            },
            _stopTimeout: function () {
                e.objects.play.show(), e.objects.pause.hide(), e.objects.nav.addClass(e.settings.classPrefix + "paused"), clearTimeout(e.timeout)
            },
            _setNavigation: function () {
                var i = t(e.cache.selector || e.settings.attr),
                    o = e.objectData.sequenceLength - 1,
                    n = {
                        prev: i.eq(e.objectData.prevIndex),
                        next: i.eq(e.objectData.nextIndex)
                    };
                return e.objectData.currentIndex > 0 ? e.objects.prev.show() : n.prevItem = i.eq(o), e.objectData.nextIndex <= o ? e.objects.next.show() : n.next = i.eq(0), !0 === e.settings.navigateEndless && (e.objects.prev.show(), e.objects.next.show()), n
            },
            item: {
                isFirst: function () {
                    return 0 === e.objectData.currentIndex
                },
                isFirstOpened: function () {
                    return e.objectData.this.is(e.cache.firstOpened)
                },
                isLast: function () {
                    return e.objectData.currentIndex === e.objectData.sequenceLength - 1
                }
            },
            _cloneObject: function (t) {
                var i = t.clone(),
                    o = t.attr("id");
                return t.is(":hidden") ? (e._cacheObjectData(t), t.attr("id", e.settings.idPrefix + "temp-" + o).empty()) : i.removeAttr("id"), i.show()
            },
            isMobileDevice: function () {
                return !!navigator.userAgent.toLowerCase().match(e.settings.mobileMatchExpression)
            },
            isTransitionSupported: function () {
                var t = e.objects.body.get(0),
                    i = !1,
                    o = {
                        transition: "",
                        WebkitTransition: "-webkit-",
                        MozTransition: "-moz-",
                        OTransition: "-o-",
                        MsTransition: "-ms-"
                    };
                for (var n in o) o.hasOwnProperty(n) && n in t.style && (e.support.transition = o[n], i = !0);
                return i
            },
            transition: {
                in: function () {
                    return e.settings.transitionOpen && !e.cache.firstOpened ? e.settings.transitionOpen : e.settings.transitionIn
                },
                fade: function (t, i, o, n, s) {
                    var r = "in" === i,
                        a = {},
                        l = t.css("opacity"),
                        c = {},
                        d = n || (r ? 1 : 0);
                    !e.isOpen && r || (a.opacity = l, c.opacity = d, t.css(a).show(), e.support.transitions ? (c[e.support.transition + "transition"] = o + "ms ease", setTimeout(function () {
                        t.css(c), setTimeout(function () {
                            t.css(e.support.transition + "transition", ""), !s || !e.isOpen && r || s()
                        }, o)
                    }, 15)) : (t.stop(), t.animate(c, o, s)))
                },
                scroll: function (t, i, o, n) {
                    var s = "in" === i,
                        r = s ? e.settings.transitionIn : e.settings.transitionOut,
                        a = "left",
                        l = {},
                        c = s ? 0 : 1,
                        d = s ? "-50%" : "50%",
                        u = {},
                        p = s ? 1 : 0,
                        h = s ? "50%" : "-50%";
                    if (e.isOpen || !s) {
                        switch (r) {
                            case "scrollTop":
                                a = "top";
                                break;
                            case "scrollRight":
                                d = s ? "150%" : "50%", h = s ? "50%" : "150%";
                                break;
                            case "scrollBottom":
                                a = "top", d = s ? "150%" : "50%", h = s ? "50%" : "150%";
                                break;
                            case "scrollHorizontal":
                                d = s ? "150%" : "50%", h = s ? "50%" : "-50%";
                                break;
                            case "scrollVertical":
                                a = "top", d = s ? "-50%" : "50%", h = s ? "50%" : "150%"
                        }
                        if ("prev" === e.cache.action) switch (r) {
                            case "scrollHorizontal":
                                d = s ? "-50%" : "50%", h = s ? "50%" : "150%";
                                break;
                            case "scrollVertical":
                                d = s ? "150%" : "50%", h = s ? "50%" : "-50%"
                        }
                        l.opacity = c, l[a] = d, u.opacity = p, u[a] = h, t.css(l).show(), e.support.transitions ? (u[e.support.transition + "transition"] = o + "ms ease", setTimeout(function () {
                            t.css(u), setTimeout(function () {
                                t.css(e.support.transition + "transition", ""), !n || !e.isOpen && s || n()
                            }, o)
                        }, 15)) : (t.stop(), t.animate(u, o, n))
                    }
                },
                zoom: function (t, i, o, n) {
                    var s = "in" === i,
                        r = {},
                        a = t.css("opacity"),
                        l = s ? "scale(0.75)" : "scale(1)",
                        c = {},
                        d = s ? 1 : 0,
                        u = s ? "scale(1)" : "scale(0.75)";
                    !e.isOpen && s || (r.opacity = a, r[e.support.transition + "transform"] = l, c.opacity = d, t.css(r).show(), e.support.transitions ? (c[e.support.transition + "transform"] = u, c[e.support.transition + "transition"] = o + "ms ease", setTimeout(function () {
                        t.css(c), setTimeout(function () {
                            t.css(e.support.transition + "transform", ""), t.css(e.support.transition + "transition", ""), !n || !e.isOpen && s || n()
                        }, o)
                    }, 15)) : (t.stop(), t.animate(c, o, n)))
                }
            },
            _callHooks: function (i) {
                "object" == typeof i && t.each(i, function (t, i) {
                    "function" == typeof i && i.call(e.origin)
                })
            },
            _cacheObjectData: function (i) {
                t.data(i, "cache", {
                    id: i.attr("id"),
                    content: i.html()
                }), e.cache.originalObject = i
            },
            _restoreObject: function () {
                var i = t('[id^="' + e.settings.idPrefix + 'temp-"]');
                i.attr("id", t.data(e.cache.originalObject, "cache").id), i.html(t.data(e.cache.originalObject, "cache").content)
            },
            resize: function () {
                e.isOpen && (e.isSlideshowEnabled() && e._stopTimeout(), e.dimensions = e.getViewportDimensions(), e._calculateDimensions(e.cache.object), e._callHooks(e.settings.onResize))
            },
            _watchResizeInteraction: function () {
                t(window).resize(e.resize)
            },
            _unwatchResizeInteraction: function () {
                t(window).off("resize", e.resize)
            },
            _switchToFullScreenMode: function () {
                e.settings.shrinkFactor = 1, e.settings.overlayOpacity = 1, t("html").addClass(e.settings.classPrefix + "fullScreenMode")
            },
            _open: function () {
                switch (e.isOpen = !0, e.support.transitions = !!e.settings.cssTransitions && e.isTransitionSupported(), e.support.mobileDevice = e.isMobileDevice(), e.support.mobileDevice && (t("html").addClass(e.settings.classPrefix + "isMobileDevice"), e.settings.fullScreenModeForMobile && e._switchToFullScreenMode()), e.settings.transitionIn || (e.settings.transitionIn = e.settings.transition), e.settings.transitionOut || (e.settings.transitionOut = e.settings.transition), e.transition.in()) {
                    case "fade":
                    case "fadeInline":
                    case "elastic":
                    case "scrollTop":
                    case "scrollRight":
                    case "scrollBottom":
                    case "scrollLeft":
                    case "scrollVertical":
                    case "scrollHorizontal":
                        e.objects.case.is(":hidden") && (e.objects.close.css("opacity", 0), e.objects.overlay.css("opacity", 0), e.objects.case.css("opacity", 0), e.objects.contentInner.css("opacity", 0)), e.transition.fade(e.objects.overlay, "in", e.settings.speedIn, e.settings.overlayOpacity, function () {
                            e.transition.fade(e.objects.close, "in", e.settings.speedIn), e._handleEvents(), e._processContent()
                        });
                        break;
                    default:
                        e.transition.fade(e.objects.overlay, "in", 0, e.settings.overlayOpacity, function () {
                            e.transition.fade(e.objects.close, "in", 0), e._handleEvents(), e._processContent()
                        })
                }
                e.objects.document.addClass(e.settings.classPrefix + "open"), e.objects.case.attr("aria-hidden", "false")
            },
            close: function () {
                switch (e.isOpen = !1, e.isSlideshowEnabled() && (e._stopTimeout(), e.isSlideshowStarted = !1, e.objects.nav.removeClass(e.settings.classPrefix + "paused")), e.objects.loading.hide(), e._unbindEvents(), e._unwatchResizeInteraction(), t("html").removeClass(e.settings.classPrefix + "open"), e.objects.case.attr("aria-hidden", "true"), e.objects.nav.children().hide(), e.objects.close.hide(), e._callHooks(e.settings.onClose), e.transition.fade(e.objects.info, "out", 0), e.settings.transitionClose || e.settings.transitionOut) {
                    case "fade":
                    case "fadeInline":
                    case "scrollTop":
                    case "scrollRight":
                    case "scrollBottom":
                    case "scrollLeft":
                    case "scrollHorizontal":
                    case "scrollVertical":
                        e.transition.fade(e.objects.case, "out", e.settings.speedOut, 0, function () {
                            e.transition.fade(e.objects.overlay, "out", e.settings.speedOut, 0, function () {
                                e.cleanup()
                            })
                        });
                        break;
                    case "elastic":
                        e.transition.zoom(e.objects.case, "out", e.settings.speedOut, function () {
                            e.transition.fade(e.objects.overlay, "out", e.settings.speedOut, 0, function () {
                                e.cleanup()
                            })
                        });
                        break;
                    default:
                        e.cleanup()
                }
            },
            _unbindEvents: function () {
                e.objects.overlay.unbind("click"), t(document).unbind("keyup.lightcase"), e.objects.case.unbind("swipeleft").unbind("swiperight"), e.objects.prev.unbind("click"), e.objects.next.unbind("click"), e.objects.play.unbind("click"), e.objects.pause.unbind("click"), e.objects.close.unbind("click")
            },
            _cleanupDimensions: function () {
                var t = e.objects.contentInner.css("opacity");
                e.objects.case.css({
                    width: "",
                    height: "",
                    top: "",
                    left: "",
                    "margin-top": "",
                    "margin-left": ""
                }), e.objects.contentInner.removeAttr("style").css("opacity", t), e.objects.contentInner.children().removeAttr("style")
            },
            cleanup: function () {
                e._cleanupDimensions(), e.objects.loading.hide(), e.objects.overlay.hide(), e.objects.case.hide(), e.objects.prev.hide(), e.objects.next.hide(), e.objects.play.hide(), e.objects.pause.hide(), e.objects.document.removeAttr(e._prefixAttributeName("type")), e.objects.nav.removeAttr(e._prefixAttributeName("ispartofsequence")), e.objects.contentInner.empty().hide(), e.objects.info.children().empty(), e.cache.originalObject && e._restoreObject(), e._callHooks(e.settings.onCleanup), e.cache = {}
            },
            _matchMedia: function () {
                return window.matchMedia || window.msMatchMedia
            },
            _devicePixelRatio: function () {
                return window.devicePixelRatio || 1
            },
            _isPublicMethod: function (t) {
                return "function" == typeof e[t] && "_" !== t.charAt(0)
            },
            _export: function () {
                window.lightcase = {}, t.each(e, function (t) {
                    e._isPublicMethod(t) && (lightcase[t] = e[t])
                })
            }
        };
        e._export(), t.fn.lightcase = function (i) {
            return e._isPublicMethod(i) ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.lightcase") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function (t) {
        t.fn.niceSelect = function (e) {
            function i(e) {
                e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                var i = e.next(),
                    o = e.find("option"),
                    n = e.find("option:selected");
                i.find(".current").html(n.data("display") || n.text()), o.each(function (e) {
                    var o = t(this),
                        n = o.data("display");
                    i.find("ul").append(t("<li></li>").attr("data-value", o.val()).attr("data-display", n || null).addClass("option" + (o.is(":selected") ? " selected" : "") + (o.is(":disabled") ? " disabled" : "")).html(o.text()))
                })
            }
            if ("string" == typeof e) return "update" == e ? this.each(function () {
                var e = t(this),
                    o = t(this).next(".nice-select"),
                    n = o.hasClass("open");
                o.length && (o.remove(), i(e), n && e.next().trigger("click"))
            }) : "destroy" == e ? (this.each(function () {
                var e = t(this),
                    i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""))
            }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
            this.hide(), this.each(function () {
                var e = t(this);
                e.next().hasClass("nice-select") || i(e)
            }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function (e) {
                var i = t(this);
                t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
            }), t(document).on("click.nice_select", function (e) {
                0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
            }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (e) {
                var i = t(this),
                    o = i.closest(".nice-select");
                o.find(".selected").removeClass("selected"), i.addClass("selected");
                var n = i.data("display") || i.text();
                o.find(".current").text(n), o.prev("select").val(i.data("value")).trigger("change")
            }), t(document).on("keydown.nice_select", ".nice-select", function (e) {
                var i = t(this),
                    o = t(i.find(".focus") || i.find(".list .option.selected"));
                if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? o.trigger("click") : i.trigger("click"), !1;
                if (40 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var n = o.nextAll(".option:not(.disabled)").first();
                        n.length > 0 && (i.find(".focus").removeClass("focus"), n.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (38 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var s = o.prevAll(".option:not(.disabled)").first();
                        s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
                else if (9 == e.keyCode && i.hasClass("open")) return !1
            });
            var o = document.createElement("a").style;
            return o.cssText = "pointer-events:auto", "auto" !== o.pointerEvents && t("html").addClass("no-csspointerevents"), this
        }
    }(jQuery),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function (t) {
        var e, i, o, n, s, r, a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            d = "Open",
            u = "Change",
            p = "mfp",
            h = "." + p,
            f = "mfp-ready",
            m = "mfp-removing",
            g = "mfp-prevent-close",
            v = function () { },
            y = !!window.jQuery,
            b = t(window),
            w = function (t, i) {
                e.ev.on(p + t + h, i)
            },
            k = function (e, i, o, n) {
                var s = document.createElement("div");
                return s.className = "mfp-" + e, o && (s.innerHTML = o), n ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
            },
            x = function (i, o) {
                e.ev.triggerHandler(p + i, o), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(o) ? o : [o]))
            },
            C = function (i) {
                return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
            },
            S = function () {
                t.magnificPopup.instance || ((e = new v).init(), t.magnificPopup.instance = e)
            };
        v.prototype = {
            constructor: v,
            init: function () {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function () {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {}
            },
            open: function (i) {
                var n;
                if (!1 === i.isObj) {
                    e.items = i.items.toArray(), e.index = 0;
                    var r, a = i.items;
                    for (n = 0; n < a.length; n++)
                        if ((r = a[n]).parsed && (r = r.el[0]), r === i.el[0]) {
                            e.index = n;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (!e.isOpen) {
                    e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = k("bg").on("click" + h, function () {
                        e.close()
                    }), e.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (t) {
                        e._checkIfClose(t.target) && e.close()
                    }), e.container = k("container", e.wrap)), e.contentContainer = k("content"), e.st.preloader && (e.preloader = k("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (n = 0; n < l.length; n++) {
                        var u = l[n];
                        u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
                    }
                    x("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (w(c, function (t, e, i, o) {
                        i.close_replaceWith = C(o.type)
                    }), s += " mfp-close-btn-in") : e.wrap.append(C())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: b.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: o.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && o.on("keyup" + h, function (t) {
                        27 === t.keyCode && e.close()
                    }), b.on("resize" + h, function () {
                        e.updateSize()
                    }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
                    var p = e.wH = b.height(),
                        m = {};
                    if (e.fixedContentPos && e._hasScrollBar(p)) {
                        var g = e._getScrollbarSize();
                        g && (m.marginRight = g)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                    var v = e.st.mainClass;
                    return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), x("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                        e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), o.on("focusin" + h, e._onFocusIn)
                    }, 16), e.isOpen = !0, e.updateSize(p), x(d), i
                }
                e.updateItemHTML()
            },
            close: function () {
                e.isOpen && (x(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m), setTimeout(function () {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function () {
                x(a);
                var i = m + " " + f + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var n = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
                }
                o.off("keyup.mfp focusin" + h), e.ev.off(h), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, x("AfterClose")
            },
            updateSize: function (t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        o = window.innerHeight * i;
                    e.wrap.css("height", o), e.wH = o
                } else e.wH = t || b.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize")
            },
            updateItemHTML: function () {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var o = i.type;
                if (x("BeforeChange", [e.currItem ? e.currItem.type : "", o]), e.currItem = i, !e.currTemplate[o]) {
                    var s = !!e.st[o] && e.st[o].markup;
                    x("FirstMarkupParse", s), e.currTemplate[o] = !s || t(s)
                }
                n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
                var r = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](i, e.currTemplate[o]);
                e.appendContent(r, o), i.preloaded = !0, x(u, i), n = i.type, e.container.prepend(e.contentContainer), x("AfterChange")
            },
            appendContent: function (t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(C()) : e.content = t : e.content = "", x("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function (i) {
                var o, n = e.items[i];
                if (n.tagName ? n = {
                    el: t(n)
                } : (o = n.type, n = {
                    data: n,
                    src: n.src
                }), n.el) {
                    for (var s = e.types, r = 0; r < s.length; r++)
                        if (n.el.hasClass("mfp-" + s[r])) {
                            o = s[r];
                            break
                        } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = o || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, x("ElementParse", n), e.items[i]
            },
            addGroup: function (t, i) {
                var o = function (o) {
                    o.mfpEl = this, e._openClick(o, t, i)
                };
                i || (i = {});
                var n = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, o)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, o) : (i.items = t, t.off(n).on(n, o)))
            },
            _openClick: function (i, o, n) {
                if ((void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (b.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), n.el = t(i.mfpEl), n.delegate && (n.items = o.find(n.delegate)), e.open(n)
                }
            },
            updateStatus: function (t, o) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), o || "loading" !== t || (o = e.st.tLoading);
                    var n = {
                        status: t,
                        text: o
                    };
                    x("UpdateStatus", n), t = n.status, o = n.text, e.preloader.html(o), e.preloader.find("a").on("click", function (t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function (i) {
                if (!t(i).hasClass(g)) {
                    var o = e.st.closeOnContentClick,
                        n = e.st.closeOnBgClick;
                    if (o && n) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (o) return !0
                    } else if (n && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function (t) {
                return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || b.height())
            },
            _setFocus: function () {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function (i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function (e, i, o) {
                var n;
                o.data && (i = t.extend(o.data, i)), x(c, [e, i, o]), t.each(i, function (i, o) {
                    if (void 0 === o || !1 === o) return !0;
                    if ((n = i.split("_")).length > 1) {
                        var s = e.find(h + "-" + n[0]);
                        if (s.length > 0) {
                            var r = n[1];
                            "replaceWith" === r ? s[0] !== o[0] && s.replaceWith(o) : "img" === r ? s.is("img") ? s.attr("src", o) : s.replaceWith(t("<img>").attr("src", o).attr("class", s.attr("class"))) : s.attr(n[1], o)
                        }
                    } else e.find(h + "-" + i).html(o)
                })
            },
            _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: v.prototype,
            modules: [],
            open: function (e, i) {
                return S(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function () {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function (e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function (i) {
            S();
            var o = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var n, s = y ? o.data("magnificPopup") : o[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    s.items ? n = s.items[r] : (n = o, s.delegate && (n = n.find(s.delegate)), n = n.eq(r)), e._openClick({
                        mfpEl: n
                    }, o, s)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), y ? o.data("magnificPopup", i) : o[0].magnificPopup = i, e.addGroup(o, i);
            return o
        };
        var T, _, D, j = "inline",
            O = function () {
                D && (_.after(D.addClass(T)).detach(), D = null)
            };
        t.magnificPopup.registerModule(j, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function () {
                    e.types.push(j), w(a + "." + j, function () {
                        O()
                    })
                },
                getInline: function (i, o) {
                    if (O(), i.src) {
                        var n = e.st.inline,
                            s = t(i.src);
                        if (s.length) {
                            var r = s[0].parentNode;
                            r && r.tagName && (_ || (T = n.hiddenClass, _ = k(T), T = "mfp-" + T), D = s.after(_).detach().removeClass(T)), e.updateStatus("ready")
                        } else e.updateStatus("error", n.tNotFound), s = t("<div>");
                        return i.inlineElement = s, s
                    }
                    return e.updateStatus("ready"), e._parseMarkup(o, {}, i), o
                }
            }
        });
        var I, E = "ajax",
            M = function () {
                I && t(document.body).removeClass(I)
            },
            A = function () {
                M(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(E, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function () {
                    e.types.push(E), I = e.st.ajax.cursor, w(a + "." + E, A), w("BeforeChange." + E, A)
                },
                getAjax: function (i) {
                    I && t(document.body).addClass(I), e.updateStatus("loading");
                    var o = t.extend({
                        url: i.src,
                        success: function (o, n, s) {
                            var r = {
                                data: o,
                                xhr: s
                            };
                            x("ParseAjax", r), e.appendContent(t(r.data), E), i.finished = !0, M(), e._setFocus(), setTimeout(function () {
                                e.wrap.addClass(f)
                            }, 16), e.updateStatus("ready"), x("AjaxContentAdded")
                        },
                        error: function () {
                            M(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(o), ""
                }
            }
        });
        var $, z = function (i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var o = e.st.image.titleSrc;
            if (o) {
                if (t.isFunction(o)) return o.call(e, i);
                if (i.el) return i.el.attr(o) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function () {
                    var i = e.st.image,
                        o = ".image";
                    e.types.push("image"), w(d + o, function () {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), w(a + o, function () {
                        i.cursor && t(document.body).removeClass(i.cursor), b.off("resize" + h)
                    }), w("Resize" + o, e.resizeImage), e.isLowIE && w("AfterChange", e.resizeImage)
                },
                resizeImage: function () {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function (t) {
                    t.img && (t.hasSize = !0, $ && clearInterval($), t.isCheckingImgSize = !1, x("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function (t) {
                    var i = 0,
                        o = t.img[0],
                        n = function (s) {
                            $ && clearInterval($), $ = setInterval(function () {
                                return o.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval($), void (3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)))
                            }, s)
                        };
                    n(1)
                },
                getImage: function (i, o) {
                    var n = 0,
                        s = function () {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, x("ImageLoadComplete")) : 200 > ++n ? setTimeout(s, 100) : r())
                        },
                        r = function () {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = o.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(o, {
                        title: z(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? ($ && clearInterval($), i.loadError ? (o.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (o.removeClass("mfp-loading"), e.updateStatus("ready")), o) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, o.addClass("mfp-loading"), e.findImageSize(i)), o)
                }
            }
        });
        var P;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function () {
                    var t, i = e.st.zoom,
                        o = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var n, s, r = i.duration,
                            c = function (t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    o = "all " + i.duration / 1e3 + "s " + i.easing,
                                    n = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    s = "transition";
                                return n["-webkit-" + s] = n["-moz-" + s] = n["-o-" + s] = n[s] = o, e.css(n), e
                            },
                            d = function () {
                                e.content.css("visibility", "visible")
                            };
                        w("BuildControls" + o, function () {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void d();
                                (s = c(t)).css(e._getOffset()), e.wrap.append(s), n = setTimeout(function () {
                                    s.css(e._getOffset(!0)), n = setTimeout(function () {
                                        d(), setTimeout(function () {
                                            s.remove(), t = s = null, x("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), w(l + o, function () {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.st.removalDelay = r, !t) {
                                    if (!(t = e._getItemToZoom())) return;
                                    s = c(t)
                                }
                                s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function () {
                                    s.css(e._getOffset())
                                }, 16)
                            }
                        }), w(a + o, function () {
                            e._allowZoom() && (d(), s && s.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function () {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function (i) {
                    var o, n = (o = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                        s = parseInt(o.css("padding-top"), 10),
                        r = parseInt(o.css("padding-bottom"), 10);
                    n.top -= t(window).scrollTop() - s;
                    var a = {
                        width: o.width(),
                        height: (y ? o.innerHeight() : o[0].offsetHeight) - r - s
                    };
                    return void 0 === P && (P = void 0 !== document.createElement("p").style.MozTransform), P ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left, a.top = n.top), a
                }
            }
        });
        var L = "iframe",
            H = function (t) {
                if (e.currTemplate[L]) {
                    var i = e.currTemplate[L].find("iframe");
                    i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(L, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function () {
                    e.types.push(L), w("BeforeChange", function (t, e, i) {
                        e !== i && (e === L ? H() : i === L && H(!0))
                    }), w(a + "." + L, function () {
                        H()
                    })
                },
                getIframe: function (i, o) {
                    var n = i.src,
                        s = e.st.iframe;
                    t.each(s.patterns, function () {
                        return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
                    });
                    var r = {};
                    return s.srcAction && (r[s.srcAction] = n), e._parseMarkup(o, r, i), e.updateStatus("ready"), o
                }
            }
        });
        var W = function (t) {
            var i = e.items.length;
            return t > i - 1 ? t - i : 0 > t ? i + t : t
        },
            F = function (t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function () {
                    var i = e.st.gallery,
                        n = ".mfp-gallery";
                    return e.direction = !0, !(!i || !i.enabled) && (s += " mfp-gallery", w(d + n, function () {
                        i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function () {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), o.on("keydown" + n, function (t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), w("UpdateStatus" + n, function (t, i) {
                        i.text && (i.text = F(i.text, e.currItem.index, e.items.length))
                    }), w(c + n, function (t, o, n, s) {
                        var r = e.items.length;
                        n.counter = r > 1 ? F(i.tCounter, s.index, r) : ""
                    }), w("BuildControls" + n, function () {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var o = i.arrowMarkup,
                                n = e.arrowLeft = t(o.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                                s = e.arrowRight = t(o.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                            n.click(function () {
                                e.prev()
                            }), s.click(function () {
                                e.next()
                            }), e.container.append(n.add(s))
                        }
                    }), w(u + n, function () {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void w(a + n, function () {
                        o.off(n), e.wrap.off("click" + n), e.arrowRight = e.arrowLeft = null
                    }))
                },
                next: function () {
                    e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML()
                },
                prev: function () {
                    e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML()
                },
                goTo: function (t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function () {
                    var t, i = e.st.gallery.preload,
                        o = Math.min(i[0], e.items.length),
                        n = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function (i) {
                    if (i = W(i), !e.items[i].preloaded) {
                        var o = e.items[i];
                        o.parsed || (o = e.parseEl(i)), x("LazyLoad", o), "image" === o.type && (o.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                            o.hasSize = !0
                        }).on("error.mfploader", function () {
                            o.hasSize = !0, o.loadError = !0, x("LazyLoadError", o)
                        }).attr("src", o.src)), o.preloaded = !0
                    }
                }
            }
        });
        var N = "retina";
        t.magnificPopup.registerModule(N, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize." + N, function (t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), w("ElementParse." + N, function (e, o) {
                            o.src = t.replaceSrc(o, i)
                        }))
                    }
                }
            }
        }), S()
    }),
    function () {
        "use strict";
        var t = !1;
        window.JQClass = function () { }, JQClass.classes = {}, JQClass.extend = function e(i) {
            var o = this.prototype;
            t = !0;
            var n = new this;
            for (var s in t = !1, i)
                if ("function" == typeof i[s] && "function" == typeof o[s]) n[s] = function (t, e) {
                    return function () {
                        var i = this._super;
                        this._super = function (e) {
                            return o[t].apply(this, e || [])
                        };
                        var n = e.apply(this, arguments);
                        return this._super = i, n
                    }
                }(s, i[s]);
                else if ("object" == typeof i[s] && "object" == typeof o[s] && "defaultOptions" === s) {
                    var r, a = o[s],
                        l = i[s],
                        c = {};
                    for (r in a) c[r] = a[r];
                    for (r in l) c[r] = l[r];
                    n[s] = c
                } else n[s] = i[s];

            function d() {
                !t && this._init && this._init.apply(this, arguments)
            }
            return d.prototype = n, d.prototype.constructor = d, d.extend = e, d
        }
    }(),
    function ($) {
        "use strict";

        function camelCase(t) {
            return t.replace(/-([a-z])/g, function (t, e) {
                return e.toUpperCase()
            })
        }
        JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            deepMerge: !0,
            _getMarker: function () {
                return "is-" + this.name
            },
            _init: function () {
                $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                var t = camelCase(this.name);
                $[t] = this, $.fn[t] = function (e) {
                    var i = Array.prototype.slice.call(arguments, 1),
                        o = this,
                        n = this;
                    return this.each(function () {
                        if ("string" == typeof e) {
                            if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                            var s = $[t][e].apply($[t], [this].concat(i));
                            if (s !== o && void 0 !== s) return n = s, !1
                        } else $[t]._attach(this, e)
                    }), n
                }
            },
            setDefaults: function (t) {
                $.extend(this.defaultOptions, t || {})
            },
            _attach: function (t, e) {
                if (!(t = $(t)).hasClass(this._getMarker())) {
                    t.addClass(this._getMarker()), e = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(t), e || {});
                    var i = $.extend({
                        name: this.name,
                        elem: t,
                        options: e
                    }, this._instSettings(t, e));
                    t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
                }
            },
            _instSettings: function (t, e) {
                return {}
            },
            _postAttach: function (t, e) { },
            _getMetadata: function (elem) {
                try {
                    var data = elem.data(this.name.toLowerCase()) || "";
                    for (var key in data = data.replace(/(\\?)'/g, function (t, e) {
                        return e ? "'" : '"'
                    }).replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
                        var o = data.substring(0, i).match(/"/g);
                        return o && o.length % 2 != 0 ? e + ":" : '"' + e + '":'
                    }).replace(/\\:/g, ":"), data = $.parseJSON("{" + data + "}"), data)
                        if (data.hasOwnProperty(key)) {
                            var value = data[key];
                            "string" == typeof value && value.match(/^new Date\(([-0-9,\s]*)\)$/) && (data[key] = eval(value))
                        } return data
                } catch (t) {
                    return {}
                }
            },
            _getInst: function (t) {
                return $(t).data(this.name) || {}
            },
            option: function (t, e, i) {
                var o = (t = $(t)).data(this.name),
                    n = e || {};
                if (!e || "string" == typeof e && void 0 === i) return (n = (o || {}).options) && e ? n[e] : n;
                t.hasClass(this._getMarker()) && ("string" == typeof e && ((n = {})[e] = i), this._optionsChanged(t, o, n), $.extend(o.options, n))
            },
            _optionsChanged: function (t, e, i) { },
            destroy: function (t) {
                (t = $(t)).hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
            },
            _preDestroy: function (t, e) { }
        }), $.JQPlugin = {
            createPlugin: function (t, e) {
                "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
                var i = camelCase(e.name);
                JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
            }
        }
    }(jQuery),
    function (t) {
        "use strict";
        t.JQPlugin.createPlugin({
            name: "datepick",
            defaultRenderer: {
                picker: '<div class="datepick"><div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}<div class="datepick-clear-fix"></div></div>',
                monthRow: '<div class="datepick-month-row">{months}</div>',
                month: '<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div><table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
                weekHeader: "<tr>{days}</tr>",
                dayHeader: "<th>{day}</th>",
                week: "<tr>{days}</tr>",
                day: "<td>{day}</td>",
                monthSelector: ".datepick-month",
                daySelector: "td",
                rtlClass: "datepick-rtl",
                multiClass: "datepick-multi",
                defaultClass: "",
                selectedClass: "datepick-selected",
                highlightedClass: "datepick-highlight",
                todayClass: "datepick-today",
                otherMonthClass: "datepick-other-month",
                weekendClass: "datepick-weekend",
                commandClass: "datepick-cmd",
                commandButtonClass: "",
                commandLinkClass: "",
                disabledClass: "datepick-disabled"
            },
            commands: {
                prev: {
                    text: "prevText",
                    status: "prevStatus",
                    keystroke: {
                        keyCode: 33
                    },
                    enabled: function (t) {
                        var i = t.curMinDate();
                        return !i || e.add(e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), 1 - t.options.monthsToStep, "m"), t), 1), -1, "d").getTime() >= i.getTime()
                    },
                    date: function (t) {
                        return e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), -t.options.monthsToStep, "m"), t), 1)
                    },
                    action: function (t) {
                        e.changeMonth(this, -t.options.monthsToStep)
                    }
                },
                prevJump: {
                    text: "prevJumpText",
                    status: "prevJumpStatus",
                    keystroke: {
                        keyCode: 33,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.curMinDate();
                        return !i || e.add(e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), 1 - t.options.monthsToJump, "m"), t), 1), -1, "d").getTime() >= i.getTime()
                    },
                    date: function (t) {
                        return e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), -t.options.monthsToJump, "m"), t), 1)
                    },
                    action: function (t) {
                        e.changeMonth(this, -t.options.monthsToJump)
                    }
                },
                next: {
                    text: "nextText",
                    status: "nextStatus",
                    keystroke: {
                        keyCode: 34
                    },
                    enabled: function (t) {
                        var i = t.get("maxDate");
                        return !i || e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), t.options.monthsToStep, "m"), t), 1).getTime() <= i.getTime()
                    },
                    date: function (t) {
                        return e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), t.options.monthsToStep, "m"), t), 1)
                    },
                    action: function (t) {
                        e.changeMonth(this, t.options.monthsToStep)
                    }
                },
                nextJump: {
                    text: "nextJumpText",
                    status: "nextJumpStatus",
                    keystroke: {
                        keyCode: 34,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.get("maxDate");
                        return !i || e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), t.options.monthsToJump, "m"), t), 1).getTime() <= i.getTime()
                    },
                    date: function (t) {
                        return e.day(e._applyMonthsOffset(e.add(e.newDate(t.drawDate), t.options.monthsToJump, "m"), t), 1)
                    },
                    action: function (t) {
                        e.changeMonth(this, t.options.monthsToJump)
                    }
                },
                current: {
                    text: "currentText",
                    status: "currentStatus",
                    keystroke: {
                        keyCode: 36,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.curMinDate(),
                            o = t.get("maxDate"),
                            n = t.selectedDates[0] || e.today();
                        return (!i || n.getTime() >= i.getTime()) && (!o || n.getTime() <= o.getTime())
                    },
                    date: function (t) {
                        return t.selectedDates[0] || e.today()
                    },
                    action: function (t) {
                        var i = t.selectedDates[0] || e.today();
                        e.showMonth(this, i.getFullYear(), i.getMonth() + 1)
                    }
                },
                today: {
                    text: "todayText",
                    status: "todayStatus",
                    keystroke: {
                        keyCode: 36,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.curMinDate(),
                            o = t.get("maxDate");
                        return (!i || e.today().getTime() >= i.getTime()) && (!o || e.today().getTime() <= o.getTime())
                    },
                    date: function () {
                        return e.today()
                    },
                    action: function () {
                        e.showMonth(this)
                    }
                },
                clear: {
                    text: "clearText",
                    status: "clearStatus",
                    keystroke: {
                        keyCode: 35,
                        ctrlKey: !0
                    },
                    enabled: function () {
                        return !0
                    },
                    date: function () {
                        return null
                    },
                    action: function () {
                        e.clear(this)
                    }
                },
                close: {
                    text: "closeText",
                    status: "closeStatus",
                    keystroke: {
                        keyCode: 27
                    },
                    enabled: function () {
                        return !0
                    },
                    date: function () {
                        return null
                    },
                    action: function () {
                        e.hide(this)
                    }
                },
                prevWeek: {
                    text: "prevWeekText",
                    status: "prevWeekStatus",
                    keystroke: {
                        keyCode: 38,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.curMinDate();
                        return !i || e.add(e.newDate(t.drawDate), -7, "d").getTime() >= i.getTime()
                    },
                    date: function (t) {
                        return e.add(e.newDate(t.drawDate), -7, "d")
                    },
                    action: function () {
                        e.changeDay(this, -7)
                    }
                },
                prevDay: {
                    text: "prevDayText",
                    status: "prevDayStatus",
                    keystroke: {
                        keyCode: 37,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.curMinDate();
                        return !i || e.add(e.newDate(t.drawDate), -1, "d").getTime() >= i.getTime()
                    },
                    date: function (t) {
                        return e.add(e.newDate(t.drawDate), -1, "d")
                    },
                    action: function () {
                        e.changeDay(this, -1)
                    }
                },
                nextDay: {
                    text: "nextDayText",
                    status: "nextDayStatus",
                    keystroke: {
                        keyCode: 39,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.get("maxDate");
                        return !i || e.add(e.newDate(t.drawDate), 1, "d").getTime() <= i.getTime()
                    },
                    date: function (t) {
                        return e.add(e.newDate(t.drawDate), 1, "d")
                    },
                    action: function () {
                        e.changeDay(this, 1)
                    }
                },
                nextWeek: {
                    text: "nextWeekText",
                    status: "nextWeekStatus",
                    keystroke: {
                        keyCode: 40,
                        ctrlKey: !0
                    },
                    enabled: function (t) {
                        var i = t.get("maxDate");
                        return !i || e.add(e.newDate(t.drawDate), 7, "d").getTime() <= i.getTime()
                    },
                    date: function (t) {
                        return e.add(e.newDate(t.drawDate), 7, "d")
                    },
                    action: function () {
                        e.changeDay(this, 7)
                    }
                }
            },
            defaultOptions: {
                pickerClass: "",
                showOnFocus: !0,
                showTrigger: null,
                showAnim: "show",
                showOptions: {},
                showSpeed: "normal",
                popupContainer: null,
                alignment: "bottom",
                fixedWeeks: !1,
                firstDay: 0,
                calculateWeek: null,
                monthsToShow: 1,
                monthsOffset: 0,
                monthsToStep: 1,
                monthsToJump: 12,
                useMouseWheel: !0,
                changeMonth: !0,
                yearRange: "c-10:c+10",
                shortYearCutoff: "+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                defaultDate: null,
                selectDefaultDate: !1,
                minDate: null,
                maxDate: null,
                dateFormat: "mm/dd/yyyy",
                autoSize: !1,
                rangeSelect: !1,
                rangeSeparator: " - ",
                multiSelect: 0,
                multiSeparator: ",",
                onDate: null,
                onShow: null,
                onChangeMonthYear: null,
                onSelect: null,
                onClose: null,
                altField: null,
                altFormat: null,
                constrainInput: !0,
                commandsAsDateFormat: !1,
                commands: {}
            },
            regionalOptions: {
                "": {
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    dateFormat: "mm/dd/yyyy",
                    firstDay: 0,
                    renderer: {},
                    prevText: "&lt;Prev",
                    prevStatus: "Show the previous month",
                    prevJumpText: "&lt;&lt;",
                    prevJumpStatus: "Show the previous year",
                    nextText: "Next&gt;",
                    nextStatus: "Show the next month",
                    nextJumpText: "&gt;&gt;",
                    nextJumpStatus: "Show the next year",
                    currentText: "Current",
                    currentStatus: "Show the current month",
                    todayText: "Today",
                    todayStatus: "Show today's month",
                    clearText: "Clear",
                    clearStatus: "Clear all the dates",
                    closeText: "Close",
                    closeStatus: "Close the datepicker",
                    yearStatus: "Change the year",
                    earlierText: "&#160;&#160;▲",
                    laterText: "&#160;&#160;▼",
                    monthStatus: "Change the month",
                    weekText: "Wk",
                    weekStatus: "Week of the year",
                    dayStatus: "Select DD, M d, yyyy",
                    defaultStatus: "Select a date",
                    isRTL: !1
                }
            },
            _disabled: [],
            _popupClass: "datepick-popup",
            _triggerClass: "datepick-trigger",
            _disableClass: "datepick-disable",
            _monthYearClass: "datepick-month-year",
            _curMonthClass: "datepick-month-",
            _anyYearClass: "datepick-any-year",
            _curDoWClass: "datepick-dow-",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            _msPerDay: 864e5,
            ATOM: "yyyy-mm-dd",
            COOKIE: "D, dd M yyyy",
            FULL: "DD, MM d, yyyy",
            ISO_8601: "yyyy-mm-dd",
            JULIAN: "J",
            RFC_822: "D, d M yy",
            RFC_850: "DD, dd-M-yy",
            RFC_1036: "D, d M yy",
            RFC_1123: "D, d M yyyy",
            RFC_2822: "D, d M yyyy",
            RSS: "D, d M yy",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yyyy-mm-dd",
            formatDate: function (t, e, i) {
                if ("string" != typeof t && (i = e, e = t, t = ""), !e) return "";
                t = t || this.defaultOptions.dateFormat;
                for (var o = (i = i || {}).dayNamesShort || this.defaultOptions.dayNamesShort, n = i.dayNames || this.defaultOptions.dayNames, s = i.monthNamesShort || this.defaultOptions.monthNamesShort, r = i.monthNames || this.defaultOptions.monthNames, a = i.calculateWeek || this.defaultOptions.calculateWeek, l = function (e, i) {
                    for (var o = 1; h + o < t.length && t.charAt(h + o) === e;) o++;
                    return h += o - 1, Math.floor(o / (i || 1)) > 1
                }, c = function (t, e, i, o) {
                    var n = "" + e;
                    if (l(t, o))
                        for (; n.length < i;) n = "0" + n;
                    return n
                }, d = function (t, e, i, o) {
                    return l(t) ? o[e] : i[e]
                }, u = "", p = !1, h = 0; h < t.length; h++)
                    if (p) "'" !== t.charAt(h) || l("'") ? u += t.charAt(h) : p = !1;
                    else switch (t.charAt(h)) {
                        case "d":
                            u += c("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += d("D", e.getDay(), o, n);
                            break;
                        case "o":
                            u += c("o", this.dayOfYear(e), 3);
                            break;
                        case "w":
                            u += c("w", a(e), 2);
                            break;
                        case "m":
                            u += c("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += d("M", e.getMonth(), s, r);
                            break;
                        case "y":
                            u += l("y", 2) ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += Math.floor(e.getTime() / 1e3);
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : p = !0;
                            break;
                        default:
                            u += t.charAt(h)
                    }
                return u
            },
            parseDate: function (t, e, i) {
                if (null == e) throw "Invalid arguments";
                if ("" === (e = "object" == typeof e ? e.toString() : e + "")) return null;
                t = t || this.defaultOptions.dateFormat;
                var o = (i = i || {}).shortYearCutoff || this.defaultOptions.shortYearCutoff;
                o = "string" != typeof o ? o : this.today().getFullYear() % 100 + parseInt(o, 10);
                for (var n = i.dayNamesShort || this.defaultOptions.dayNamesShort, s = i.dayNames || this.defaultOptions.dayNames, r = i.monthNamesShort || this.defaultOptions.monthNamesShort, a = i.monthNames || this.defaultOptions.monthNames, l = -1, c = -1, d = -1, u = -1, p = !1, h = !1, f = null, m = function (e, i) {
                    for (var o = 1; w + o < t.length && t.charAt(w + o) === e;) o++;
                    return w += o - 1, Math.floor(o / (i || 1)) > 1
                }, g = function (t, i) {
                    var o = [2, 3, m(t, i) ? 4 : 2, 11, 20]["oy@!".indexOf(t) + 1],
                        n = new RegExp("^-?\\d{1," + o + "}"),
                        s = e.substring(b).match(n);
                    if (!s) throw "Missing number at position {0}".replace(/\{0\}/, b);
                    return b += s[0].length, parseInt(s[0], 10)
                }, v = function (t, i, o, n) {
                    for (var s = m(t, n) ? o : i, r = 0; r < s.length; r++)
                        if (e.substr(b, s[r].length).toLowerCase() === s[r].toLowerCase()) return b += s[r].length, r + 1;
                    throw "Unknown name at position {0}".replace(/\{0\}/, b)
                }, y = function () {
                    if (e.charAt(b) !== t.charAt(w)) throw "Unexpected literal at position {0}".replace(/\{0\}/, b);
                    b++
                }, b = 0, w = 0; w < t.length; w++)
                    if (h) "'" !== t.charAt(w) || m("'") ? y() : h = !1;
                    else switch (t.charAt(w)) {
                        case "d":
                            d = g("d");
                            break;
                        case "D":
                            v("D", n, s);
                            break;
                        case "o":
                            u = g("o");
                            break;
                        case "w":
                            g("w");
                            break;
                        case "m":
                            c = g("m");
                            break;
                        case "M":
                            c = v("M", r, a);
                            break;
                        case "y":
                            var k = w;
                            p = !m("y", 2), w = k, l = g("y", 2);
                            break;
                        case "@":
                            l = (f = this._normaliseDate(new Date(1e3 * g("@")))).getFullYear(), c = f.getMonth() + 1, d = f.getDate();
                            break;
                        case "!":
                            l = (f = this._normaliseDate(new Date((g("!") - this._ticksTo1970) / 1e4))).getFullYear(), c = f.getMonth() + 1, d = f.getDate();
                            break;
                        case "*":
                            b = e.length;
                            break;
                        case "'":
                            m("'") ? y() : h = !0;
                            break;
                        default:
                            y()
                    }
                if (b < e.length) throw "Additional text found at end";
                if (-1 === l ? l = this.today().getFullYear() : l < 100 && p && (l += -1 === o ? 1900 : this.today().getFullYear() - this.today().getFullYear() % 100 - (l <= o ? 0 : 100)), u > -1) {
                    c = 1, d = u;
                    for (var x = this.daysInMonth(l, c); d > x; x = this.daysInMonth(l, c)) c++, d -= x
                }
                if ((f = this.newDate(l, c, d)).getFullYear() !== l || f.getMonth() + 1 !== c || f.getDate() !== d) throw "Invalid date";
                return f
            },
            determineDate: function (t, i, o, n, s) {
                o && "object" != typeof o && (s = n, n = o, o = null), "string" != typeof n && (s = n, n = "");
                return i = i ? e.newDate(i) : null, t = void 0 === t ? i : "string" == typeof t ? function (t) {
                    try {
                        return e.parseDate(n, t, s)
                    } catch (t) { }
                    for (var i = ((t = t.toLowerCase()).match(/^c/) && o ? e.newDate(o) : null) || e.today(), r = /([+-]?[0-9]+)\s*(d|w|m|y)?/g, a = null; a = r.exec(t);) i = e.add(i, parseInt(a[1], 10), a[2] || "d");
                    return i
                }(t) : "number" == typeof t ? isNaN(t) || t === 1 / 0 || t === -1 / 0 ? i : e.add(e.today(), t, "d") : e.newDate(t)
            },
            daysInMonth: function (t, e) {
                return e = t.getFullYear ? t.getMonth() + 1 : e, t = t.getFullYear ? t.getFullYear() : t, this.newDate(t, e + 1, 0).getDate()
            },
            dayOfYear: function (t, i, o) {
                var n = t.getFullYear ? t : e.newDate(t, i, o),
                    s = e.newDate(n.getFullYear(), 1, 1);
                return Math.floor((n.getTime() - s.getTime()) / e._msPerDay) + 1
            },
            iso8601Week: function (t, i, o) {
                var n = t.getFullYear ? new Date(t.getTime()) : e.newDate(t, i, o);
                n.setDate(n.getDate() + 4 - (n.getDay() || 7));
                var s = n.getTime();
                return n.setMonth(0, 1), Math.floor(Math.round((s - n) / e._msPerDay) / 7) + 1
            },
            today: function () {
                return this._normaliseDate(new Date)
            },
            newDate: function (t, e, i) {
                return t ? t.getFullYear ? this._normaliseDate(new Date(t.getTime())) : new Date(t, e - 1, i, 12) : null
            },
            _normaliseDate: function (t) {
                return t && t.setHours(12, 0, 0, 0), t
            },
            year: function (t, e) {
                return t.setFullYear(e), this._normaliseDate(t)
            },
            month: function (t, e) {
                return t.setMonth(e - 1), this._normaliseDate(t)
            },
            day: function (t, e) {
                return t.setDate(e), this._normaliseDate(t)
            },
            add: function (t, i, o) {
                if ("d" === o || "w" === o) this._normaliseDate(t), t.setDate(t.getDate() + i * ("w" === o ? 7 : 1));
                else {
                    var n = t.getFullYear() + ("y" === o ? i : 0),
                        s = t.getMonth() + ("m" === o ? i : 0);
                    t.setTime(e.newDate(n, s + 1, Math.min(t.getDate(), this.daysInMonth(n, s + 1))).getTime())
                }
                return t
            },
            _applyMonthsOffset: function (i, o) {
                var n = o.options.monthsOffset;
                return t.isFunction(n) && (n = n.apply(o.elem[0], [i])), e.add(i, -n, "m")
            },
            _init: function () {
                this.defaultOptions.commands = this.commands, this.defaultOptions.calculateWeek = this.iso8601Week, this.regionalOptions[""].renderer = this.defaultRenderer, this._super()
            },
            _instSettings: function (i) {
                return {
                    selectedDates: [],
                    drawDate: null,
                    pickingRange: !1,
                    inline: t.inArray(i[0].nodeName.toLowerCase(), ["div", "span"]) > -1,
                    get: function (i) {
                        return t.inArray(i, ["defaultDate", "minDate", "maxDate"]) > -1 ? e.determineDate(this.options[i], null, this.selectedDates[0], this.options.dateFormat, this.getConfig()) : this.options[i]
                    },
                    curMinDate: function () {
                        return this.pickingRange ? this.selectedDates[0] : this.get("minDate")
                    },
                    getConfig: function () {
                        return {
                            dayNamesShort: this.options.dayNamesShort,
                            dayNames: this.options.dayNames,
                            monthNamesShort: this.options.monthNamesShort,
                            monthNames: this.options.monthNames,
                            calculateWeek: this.options.calculateWeek,
                            shortYearCutoff: this.options.shortYearCutoff
                        }
                    }
                }
            },
            _postAttach: function (i, o) {
                o.inline ? (o.drawDate = e._checkMinMax(e.newDate(o.selectedDates[0] || o.get("defaultDate") || e.today()), o), o.prevDate = e.newDate(o.drawDate), this._update(i[0]), t.fn.mousewheel && i.mousewheel(this._doMouseWheel)) : (this._attachments(i, o), i.on("keydown." + o.name, this._keyDown).on("keypress." + o.name, this._keyPress).on("keyup." + o.name, this._keyUp), i.attr("disabled") && this.disable(i[0]))
            },
            _optionsChanged: function (i, o, n) {
                if (n.calendar && n.calendar !== o.options.calendar) {
                    var s = function (t) {
                        return "object" == typeof o.options[t] ? null : o.options[t]
                    };
                    n = t.extend({
                        defaultDate: s("defaultDate"),
                        minDate: s("minDate"),
                        maxDate: s("maxDate")
                    }, n), o.selectedDates = [], o.drawDate = null
                }
                var r = o.selectedDates;
                t.extend(o.options, n), this.setDate(i[0], r, null, !1, !0), o.pickingRange = !1, o.drawDate = e.newDate(this._checkMinMax((o.options.defaultDate ? o.get("defaultDate") : o.drawDate) || o.get("defaultDate") || e.today(), o)), o.inline || this._attachments(i, o), (o.inline || o.div) && this._update(i[0])
            },
            _attachments: function (i, o) {
                i.off("focus." + o.name), o.options.showOnFocus && i.on("focus." + o.name, this.show), o.trigger && o.trigger.remove();
                var n = o.options.showTrigger;
                o.trigger = n ? t(n).clone().removeAttr("id").addClass(this._triggerClass)[o.options.isRTL ? "insertBefore" : "insertAfter"](i).click(function () {
                    e.isDisabled(i[0]) || e[e.curInst === o ? "hide" : "show"](i[0])
                }) : t([]), this._autoSize(i, o);
                var s = this._extractDates(o, i.val());
                s && this.setDate(i[0], s, null, !0);
                var r = o.get("defaultDate");
                o.options.selectDefaultDate && r && 0 === o.selectedDates.length && this.setDate(i[0], e.newDate(r || e.today()))
            },
            _autoSize: function (t, i) {
                if (i.options.autoSize && !i.inline) {
                    var o = e.newDate(2009, 10, 20),
                        n = i.options.dateFormat;
                    if (n.match(/[DM]/)) {
                        var s = function (t) {
                            for (var e = 0, i = 0, o = 0; o < t.length; o++) t[o].length > e && (e = t[o].length, i = o);
                            return i
                        };
                        o.setMonth(s(i.options[n.match(/MM/) ? "monthNames" : "monthNamesShort"])), o.setDate(s(i.options[n.match(/DD/) ? "dayNames" : "dayNamesShort"]) + 20 - o.getDay())
                    }
                    i.elem.attr("size", e.formatDate(n, o, i.getConfig()).length)
                }
            },
            _preDestroy: function (e, i) {
                i.trigger && i.trigger.remove(), e.empty().off("." + i.name), i.inline && t.fn.mousewheel && e.unmousewheel(), !i.inline && i.options.autoSize && e.removeAttr("size")
            },
            multipleEvents: function () {
                var t = arguments;
                return function () {
                    for (var e = 0; e < t.length; e++) t[e].apply(this, arguments)
                }
            },
            enable: function (e) {
                if ((e = t(e)).hasClass(this._getMarker())) {
                    var i = this._getInst(e);
                    i.inline ? e.children("." + this._disableClass).remove().end().find("button,select").prop("disabled", !1).end().find("a").attr("href", "#") : (e.prop("disabled", !1), i.trigger.filter("button." + this._triggerClass).prop("disabled", !1).end().filter("img." + this._triggerClass).css({
                        opacity: "1.0",
                        cursor: ""
                    })), this._disabled = t.map(this._disabled, function (t) {
                        return t === e[0] ? null : t
                    })
                }
            },
            disable: function (e) {
                if ((e = t(e)).hasClass(this._getMarker())) {
                    var i = this._getInst(e);
                    if (i.inline) {
                        var o = e.children(":last"),
                            n = o.offset(),
                            s = {
                                left: 0,
                                top: 0
                            };
                        o.parents().each(function () {
                            if ("relative" === t(this).css("position")) return s = t(this).offset(), !1
                        });
                        var r = e.css("zIndex");
                        r = ("auto" === r ? 0 : parseInt(r, 10)) + 1, e.prepend('<div class="' + this._disableClass + '" style="width: ' + o.outerWidth() + "px; height: " + o.outerHeight() + "px; left: " + (n.left - s.left) + "px; top: " + (n.top - s.top) + "px; z-index: " + r + '"></div>').find("button,select").prop("disabled", !0).end().find("a").removeAttr("href")
                    } else e.prop("disabled", !0), i.trigger.filter("button." + this._triggerClass).prop("disabled", !0).end().filter("img." + this._triggerClass).css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    this._disabled = t.map(this._disabled, function (t) {
                        return t === e[0] ? null : t
                    }), this._disabled.push(e[0])
                }
            },
            isDisabled: function (e) {
                return e && t.inArray(e, this._disabled) > -1
            },
            show: function (i) {
                i = t(i.target || i);
                var o = e._getInst(i);
                if (e.curInst !== o && (e.curInst && e.hide(e.curInst, !0), !t.isEmptyObject(o))) {
                    o.lastVal = null, o.selectedDates = e._extractDates(o, i.val()), o.pickingRange = !1, o.drawDate = e._checkMinMax(e.newDate(o.selectedDates[0] || o.get("defaultDate") || e.today()), o), o.prevDate = e.newDate(o.drawDate), e.curInst = o, e._update(i[0], !0);
                    var n = e._checkOffset(o);
                    o.div.css({
                        left: n.left,
                        top: n.top
                    });
                    var s = o.options.showAnim,
                        r = o.options.showSpeed;
                    if (r = "normal" === r && t.ui && parseInt(t.ui.version.substring(2)) >= 8 ? "_default" : r, t.effects && (t.effects[s] || t.effects.effect && t.effects.effect[s])) {
                        var a = o.div.data();
                        for (var l in a) l.match(/^ec\.storage\./) && (a[l] = o._mainDiv.css(l.replace(/ec\.storage\./, "")));
                        o.div.data(a).show(s, o.options.showOptions, r)
                    } else o.div[s || "show"](s ? r : 0)
                }
            },
            _extractDates: function (t, i) {
                if (i !== t.lastVal) {
                    t.lastVal = i, i = i.split(t.options.multiSelect ? t.options.multiSeparator : t.options.rangeSelect ? t.options.rangeSeparator : "\0");
                    for (var o = [], n = 0; n < i.length; n++) try {
                        var s = e.parseDate(t.options.dateFormat, i[n], t.getConfig());
                        if (s) {
                            for (var r = !1, a = 0; a < o.length; a++)
                                if (o[a].getTime() === s.getTime()) {
                                    r = !0;
                                    break
                                } r || o.push(s)
                        }
                    } catch (t) { }
                    return o.splice(t.options.multiSelect || (t.options.rangeSelect ? 2 : 1), o.length), t.options.rangeSelect && 1 === o.length && (o[1] = o[0]), o
                }
            },
            _update: function (i, o) {
                i = t(i.target || i);
                var n = e._getInst(i);
                if (!t.isEmptyObject(n))
                    if ((n.inline || e.curInst === n) && (!t.isFunction(n.options.onChangeMonthYear) || n.prevDate && n.prevDate.getFullYear() === n.drawDate.getFullYear() && n.prevDate.getMonth() === n.drawDate.getMonth() || n.options.onChangeMonthYear.apply(i[0], [n.drawDate.getFullYear(), n.drawDate.getMonth() + 1])), n.inline) {
                        var s = t("a, :input", i).index(t(":focus", i));
                        i.html(this._generateContent(i[0], n));
                        var r = i.find("a, :input");
                        r.eq(Math.max(Math.min(s, r.length - 1), 0)).focus()
                    } else e.curInst === n && (n.div || (n.div = t("<div></div>").addClass(this._popupClass).css({
                        display: o ? "none" : "static",
                        position: "absolute",
                        left: i.offset().left,
                        top: i.offset().top + i.outerHeight()
                    }).appendTo(t(n.options.popupContainer || "body")), t.fn.mousewheel && n.div.mousewheel(this._doMouseWheel)), n.div.html(this._generateContent(i[0], n)), i.focus())
            },
            _updateInput: function (i, o) {
                var n = this._getInst(i);
                if (!t.isEmptyObject(n)) {
                    for (var s = "", r = "", a = n.options.multiSelect ? n.options.multiSeparator : n.options.rangeSeparator, l = n.options.altFormat || n.options.dateFormat, c = 0; c < n.selectedDates.length; c++) s += o ? "" : (c > 0 ? a : "") + e.formatDate(n.options.dateFormat, n.selectedDates[c], n.getConfig()), r += (c > 0 ? a : "") + e.formatDate(l, n.selectedDates[c], n.getConfig());
                    n.inline || o || t(i).val(s), t(n.options.altField).val(r), !t.isFunction(n.options.onSelect) || o || n.inSelect || (n.inSelect = !0, n.options.onSelect.apply(i, [n.selectedDates]), n.inSelect = !1)
                }
            },
            _getBorders: function (t) {
                var e = function (t) {
                    return {
                        thin: 1,
                        medium: 3,
                        thick: 5
                    }[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            },
            _checkOffset: function (e) {
                var i = e.elem.is(":hidden") && e.trigger ? e.trigger : e.elem,
                    o = i.offset(),
                    n = t(window).width(),
                    s = t(window).height();
                if (0 === n) return o;
                var r = !1;
                t(e.elem).parents().each(function () {
                    return !(r = r || "fixed" === t(this).css("position"))
                });
                var a = document.documentElement.scrollLeft || document.body.scrollLeft,
                    l = document.documentElement.scrollTop || document.body.scrollTop,
                    c = o.top - (r ? l : 0) - e.div.outerHeight(),
                    d = o.top - (r ? l : 0) + i.outerHeight(),
                    u = o.left - (r ? a : 0),
                    p = o.left - (r ? a : 0) + i.outerWidth() - e.div.outerWidth(),
                    h = o.left - a + e.div.outerWidth() > n,
                    f = o.top - l + e.elem.outerHeight() + e.div.outerHeight() > s;
                e.div.css("position", r ? "fixed" : "absolute");
                var m = e.options.alignment;
                return (o = "topLeft" === m ? {
                    left: u,
                    top: c
                } : "topRight" === m ? {
                    left: p,
                    top: c
                } : "bottomLeft" === m ? {
                    left: u,
                    top: d
                } : "bottomRight" === m ? {
                    left: p,
                    top: d
                } : "top" === m ? {
                    left: e.options.isRTL || h ? p : u,
                    top: c
                } : {
                    left: e.options.isRTL || h ? p : u,
                    top: f ? c : d
                }).left = Math.max(r ? 0 : a, o.left), o.top = Math.max(r ? 0 : l, o.top), o
            },
            _checkExternalClick: function (i) {
                if (e.curInst) {
                    var o = t(i.target);
                    0 !== o.closest("." + e._popupClass + ",." + e._triggerClass).length || o.hasClass(e._getMarker()) || e.hide(e.curInst)
                }
            },
            hide: function (i, o) {
                if (i) {
                    var n = this._getInst(i);
                    if (t.isEmptyObject(n) && (n = i), n && n === e.curInst) {
                        var s = o ? "" : n.options.showAnim,
                            r = n.options.showSpeed;
                        r = "normal" === r && t.ui && parseInt(t.ui.version.substring(2)) >= 8 ? "_default" : r;
                        var a = function () {
                            n.div && (n.div.remove(), n.div = null, e.curInst = null, t.isFunction(n.options.onClose) && n.options.onClose.apply(i, [n.selectedDates]))
                        };
                        if (n.div.stop(), t.effects && (t.effects[s] || t.effects.effect && t.effects.effect[s])) n.div.hide(s, n.options.showOptions, r, a);
                        else {
                            var l = "slideDown" === s ? "slideUp" : "fadeIn" === s ? "fadeOut" : "hide";
                            n.div[l](s ? r : "", a)
                        }
                        s || a()
                    }
                }
            },
            _keyDown: function (i) {
                var o = i.data && i.data.elem || i.target,
                    n = e._getInst(o),
                    s = !1,
                    r = null;
                if (n.inline || n.div) {
                    if (9 === i.keyCode) e.hide(o);
                    else if (13 === i.keyCode) e.selectDate(o, t("a." + n.options.renderer.highlightedClass, n.div)[0]), s = !0;
                    else
                        for (var a in n.options.commands)
                            if (n.options.commands.hasOwnProperty(a) && (r = n.options.commands[a]).keystroke.keyCode === i.keyCode && !!r.keystroke.ctrlKey == !(!i.ctrlKey && !i.metaKey) && !!r.keystroke.altKey === i.altKey && !!r.keystroke.shiftKey === i.shiftKey) {
                                e.performAction(o, a), s = !0;
                                break
                            }
                } else (r = n.options.commands.current).keystroke.keyCode === i.keyCode && !!r.keystroke.ctrlKey == !(!i.ctrlKey && !i.metaKey) && !!r.keystroke.altKey === i.altKey && !!r.keystroke.shiftKey === i.shiftKey && (e.show(o), s = !0);
                return n.ctrlKey = i.keyCode < 48 && 32 !== i.keyCode || i.ctrlKey || i.metaKey, s && (i.preventDefault(), i.stopPropagation()), !s
            },
            _keyPress: function (i) {
                var o = e._getInst(i.data && i.data.elem || i.target);
                if (!t.isEmptyObject(o) && o.options.constrainInput) {
                    var n = String.fromCharCode(i.keyCode || i.charCode),
                        s = e._allowedChars(o);
                    return i.metaKey || o.ctrlKey || n < " " || !s || s.indexOf(n) > -1
                }
                return !0
            },
            _allowedChars: function (t) {
                for (var e = t.options.multiSelect ? t.options.multiSeparator : t.options.rangeSelect ? t.options.rangeSeparator : "", i = !1, o = !1, n = t.options.dateFormat, s = 0; s < n.length; s++) {
                    var r = n.charAt(s);
                    if (i) "'" === r && "'" !== n.charAt(s + 1) ? i = !1 : e += r;
                    else switch (r) {
                        case "d":
                        case "m":
                        case "o":
                        case "w":
                            e += o ? "" : "0123456789", o = !0;
                            break;
                        case "y":
                        case "@":
                        case "!":
                            e += (o ? "" : "0123456789") + "-", o = !0;
                            break;
                        case "J":
                            e += (o ? "" : "0123456789") + "-.", o = !0;
                            break;
                        case "D":
                        case "M":
                        case "Y":
                            return null;
                        case "'":
                            "'" === n.charAt(s + 1) ? e += "'" : i = !0;
                            break;
                        default:
                            e += r
                    }
                }
                return e
            },
            _keyUp: function (i) {
                var o = i.data && i.data.elem || i.target,
                    n = e._getInst(o);
                if (!t.isEmptyObject(n) && !n.ctrlKey && n.lastVal !== n.elem.val()) try {
                    var s = e._extractDates(n, n.elem.val());
                    s.length > 0 && e.setDate(o, s, null, !0)
                } catch (t) { }
                return !0
            },
            _doMouseWheel: function (i, o) {
                var n = e.curInst && e.curInst.elem[0] || t(i.target).closest("." + e._getMarker())[0];
                if (!e.isDisabled(n)) {
                    var s = e._getInst(n);
                    s.options.useMouseWheel && (o = o < 0 ? -1 : 1, e.changeMonth(n, -s.options[i.ctrlKey ? "monthsToJump" : "monthsToStep"] * o)), i.preventDefault()
                }
            },
            clear: function (i) {
                var o = this._getInst(i);
                if (!t.isEmptyObject(o)) {
                    o.selectedDates = [], this.hide(i);
                    var n = o.get("defaultDate");
                    o.options.selectDefaultDate && n ? this.setDate(i, e.newDate(n || e.today())) : this._updateInput(i)
                }
            },
            getDate: function (e) {
                var i = this._getInst(e);
                return t.isEmptyObject(i) ? [] : i.selectedDates
            },
            setDate: function (i, o, n, s, r) {
                var a = this._getInst(i);
                if (!t.isEmptyObject(a)) {
                    t.isArray(o) || (o = [o], n && o.push(n));
                    var l = a.get("minDate"),
                        c = a.get("maxDate"),
                        d = a.selectedDates[0];
                    a.selectedDates = [];
                    for (var u = 0; u < o.length; u++) {
                        var p = e.determineDate(o[u], null, d, a.options.dateFormat, a.getConfig());
                        if (p && (!l || p.getTime() >= l.getTime()) && (!c || p.getTime() <= c.getTime())) {
                            for (var h = !1, f = 0; f < a.selectedDates.length; f++)
                                if (a.selectedDates[f].getTime() === p.getTime()) {
                                    h = !0;
                                    break
                                } h || a.selectedDates.push(p)
                        }
                    }
                    if (a.selectedDates.splice(a.options.multiSelect || (a.options.rangeSelect ? 2 : 1), a.selectedDates.length), a.options.rangeSelect) {
                        switch (a.selectedDates.length) {
                            case 1:
                                a.selectedDates[1] = a.selectedDates[0];
                                break;
                            case 2:
                                a.selectedDates[1] = a.selectedDates[0].getTime() > a.selectedDates[1].getTime() ? a.selectedDates[0] : a.selectedDates[1]
                        }
                        a.pickingRange = !1
                    }
                    a.prevDate = a.drawDate ? e.newDate(a.drawDate) : null, a.drawDate = this._checkMinMax(e.newDate(a.selectedDates[0] || a.get("defaultDate") || e.today()), a), r || (this._update(i), this._updateInput(i, s))
                }
            },
            isSelectable: function (i, o) {
                var n = this._getInst(i);
                return !t.isEmptyObject(n) && (o = e.determineDate(o, n.selectedDates[0] || this.today(), null, n.options.dateFormat, n.getConfig()), this._isSelectable(i, o, n.options.onDate, n.get("minDate"), n.get("maxDate")))
            },
            _isSelectable: function (e, i, o, n, s) {
                return !1 !== ("boolean" == typeof o ? {
                    selectable: o
                } : t.isFunction(o) ? o.apply(e, [i, !0]) : {}).selectable && (!n || i.getTime() >= n.getTime()) && (!s || i.getTime() <= s.getTime())
            },
            performAction: function (e, i) {
                var o = this._getInst(e);
                if (!t.isEmptyObject(o) && !this.isDisabled(e)) {
                    var n = o.options.commands;
                    n[i] && n[i].enabled.apply(e, [o]) && n[i].action.apply(e, [o])
                }
            },
            showMonth: function (i, o, n, s) {
                var r = this._getInst(i);
                if (!t.isEmptyObject(r) && (void 0 !== s || r.drawDate.getFullYear() !== o || r.drawDate.getMonth() + 1 !== n)) {
                    r.prevDate = e.newDate(r.drawDate);
                    var a = this._checkMinMax(void 0 !== o ? e.newDate(o, n, 1) : e.today(), r);
                    r.drawDate = e.newDate(a.getFullYear(), a.getMonth() + 1, void 0 !== s ? s : Math.min(r.drawDate.getDate(), e.daysInMonth(a.getFullYear(), a.getMonth() + 1))), this._update(i)
                }
            },
            changeMonth: function (i, o) {
                var n = this._getInst(i);
                if (!t.isEmptyObject(n)) {
                    var s = e.add(e.newDate(n.drawDate), o, "m");
                    this.showMonth(i, s.getFullYear(), s.getMonth() + 1)
                }
            },
            changeDay: function (i, o) {
                var n = this._getInst(i);
                if (!t.isEmptyObject(n)) {
                    var s = e.add(e.newDate(n.drawDate), o, "d");
                    this.showMonth(i, s.getFullYear(), s.getMonth() + 1, s.getDate())
                }
            },
            _checkMinMax: function (t, i) {
                var o = i.get("minDate"),
                    n = i.get("maxDate");
                return t = o && t.getTime() < o.getTime() ? e.newDate(o) : t, t = n && t.getTime() > n.getTime() ? e.newDate(n) : t
            },
            retrieveDate: function (e, i) {
                var o = this._getInst(e);
                return t.isEmptyObject(o) ? null : this._normaliseDate(new Date(parseInt(i.className.replace(/^.*dp(-?\d+).*$/, "$1"), 10)))
            },
            selectDate: function (i, o) {
                var n = this._getInst(i);
                if (!t.isEmptyObject(n) && !this.isDisabled(i)) {
                    var s = this.retrieveDate(i, o);
                    if (n.options.multiSelect) {
                        for (var r = !1, a = 0; a < n.selectedDates.length; a++)
                            if (s.getTime() === n.selectedDates[a].getTime()) {
                                n.selectedDates.splice(a, 1), r = !0;
                                break
                            } !r && n.selectedDates.length < n.options.multiSelect && n.selectedDates.push(s)
                    } else n.options.rangeSelect ? (n.pickingRange ? n.selectedDates[1] = s : n.selectedDates = [s, s], n.pickingRange = !n.pickingRange) : n.selectedDates = [s];
                    n.prevDate = n.drawDate = e.newDate(s), this._updateInput(i), n.inline || n.pickingRange || n.selectedDates.length < (n.options.multiSelect || (n.options.rangeSelect ? 2 : 1)) ? this._update(i) : this.hide(i)
                }
            },
            _generateContent: function (i, o) {
                var n = o.options.monthsToShow;
                n = t.isArray(n) ? n : [1, n], o.drawDate = this._checkMinMax(o.drawDate || o.get("defaultDate") || e.today(), o);
                for (var s = e._applyMonthsOffset(e.newDate(o.drawDate), o), r = "", a = 0; a < n[0]; a++) {
                    for (var l = "", c = 0; c < n[1]; c++) l += this._generateMonth(i, o, s.getFullYear(), s.getMonth() + 1, o.options.renderer, 0 === a && 0 === c), e.add(s, 1, "m");
                    r += this._prepare(o.options.renderer.monthRow, o).replace(/\{months\}/, l)
                }
                var d = this._prepare(o.options.renderer.picker, o).replace(/\{months\}/, r).replace(/\{weekHeader\}/g, this._generateDayHeaders(o, o.options.renderer)),
                    u = function (t, n, s, r, a) {
                        if (-1 !== d.indexOf("{" + t + ":" + r + "}")) {
                            var l = o.options.commands[r],
                                c = o.options.commandsAsDateFormat ? l.date.apply(i, [o]) : null;
                            d = d.replace(new RegExp("\\{" + t + ":" + r + "\\}", "g"), "<" + n + (l.status ? ' title="' + o.options[l.status] + '"' : "") + ' class="' + o.options.renderer.commandClass + " " + o.options.renderer.commandClass + "-" + r + " " + a + (l.enabled(o) ? "" : " " + o.options.renderer.disabledClass) + '">' + (c ? e.formatDate(o.options[l.text], c, o.getConfig()) : o.options[l.text]) + "</" + s + ">")
                        }
                    };
                for (var p in o.options.commands) o.options.commands.hasOwnProperty(p) && (u("button", 'button type="button"', "button", p, o.options.renderer.commandButtonClass), u("link", 'a href="javascript:void(0)"', "a", p, o.options.renderer.commandLinkClass));
                if (d = t(d), n[1] > 1) {
                    var h = 0;
                    t(o.options.renderer.monthSelector, d).each(function () {
                        var e = ++h % n[1];
                        t(this).addClass(1 === e ? "first" : 0 === e ? "last" : "")
                    })
                }
                var f = this;

                function m() {
                    (o.inline ? t(this).closest("." + f._getMarker()) : o.div).find(o.options.renderer.daySelector + " a").removeClass(o.options.renderer.highlightedClass)
                }
                d.find(o.options.renderer.daySelector + " a").hover(function () {
                    m.apply(this), t(this).addClass(o.options.renderer.highlightedClass)
                }, m).click(function () {
                    f.selectDate(i, this)
                }).end().find("select." + this._monthYearClass + ":not(." + this._anyYearClass + ")").change(function () {
                    var e = t(this).val().split("/");
                    f.showMonth(i, parseInt(e[1], 10), parseInt(e[0], 10))
                }).end().find("select." + this._anyYearClass).click(function () {
                    t(this).css("visibility", "hidden").next("input").css({
                        left: this.offsetLeft,
                        top: this.offsetTop,
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    }).show().focus()
                }).end().find("input." + f._monthYearClass).change(function () {
                    try {
                        var e = parseInt(t(this).val(), 10);
                        e = isNaN(e) ? o.drawDate.getFullYear() : e, f.showMonth(i, e, o.drawDate.getMonth() + 1, o.drawDate.getDate())
                    } catch (t) {
                        window.alert(t)
                    }
                }).keydown(function (e) {
                    13 === e.keyCode ? t(e.elem).change() : 27 === e.keyCode && (t(e.elem).hide().prev("select").css("visibility", "visible"), o.elem.focus())
                });
                var g = {
                    elem: o.elem[0]
                };
                d.keydown(g, this._keyDown).keypress(g, this._keyPress).keyup(g, this._keyUp), d.find("." + o.options.renderer.commandClass).click(function () {
                    if (!t(this).hasClass(o.options.renderer.disabledClass)) {
                        var n = this.className.replace(new RegExp("^.*" + o.options.renderer.commandClass + "-([^ ]+).*$"), "$1");
                        e.performAction(i, n)
                    }
                }), o.options.isRTL && d.addClass(o.options.renderer.rtlClass), n[0] * n[1] > 1 && d.addClass(o.options.renderer.multiClass), o.options.pickerClass && d.addClass(o.options.pickerClass), t("body").append(d);
                var v = 0;
                return d.find(o.options.renderer.monthSelector).each(function () {
                    v += t(this).outerWidth()
                }), d.width(v / n[0]), t.isFunction(o.options.onShow) && o.options.onShow.apply(i, [d, o]), d
            },
            _generateMonth: function (i, o, n, s, r, a) {
                var l = e.daysInMonth(n, s),
                    c = o.options.monthsToShow;
                c = t.isArray(c) ? c : [1, c];
                var d = o.options.fixedWeeks || c[0] * c[1] > 1,
                    u = o.options.firstDay,
                    p = (e.newDate(n, s, 1).getDay() - u + 7) % 7,
                    h = d ? 6 : Math.ceil((p + l) / 7),
                    f = o.options.selectOtherMonths && o.options.showOtherMonths,
                    m = o.pickingRange ? o.selectedDates[0] : o.get("minDate"),
                    g = o.get("maxDate"),
                    v = r.week.indexOf("{weekOfYear}") > -1,
                    y = e.today(),
                    b = e.newDate(n, s, 1);
                e.add(b, -p - (d && b.getDay() === u ? 7 : 0), "d");
                for (var w = b.getTime(), k = "", x = 0; x < h; x++) {
                    for (var C = v ? '<span class="dp' + w + '">' + (t.isFunction(o.options.calculateWeek) ? o.options.calculateWeek(b) : 0) + "</span>" : "", S = "", T = 0; T < 7; T++) {
                        var _ = !1;
                        if (o.options.rangeSelect && o.selectedDates.length > 0) _ = b.getTime() >= o.selectedDates[0] && b.getTime() <= o.selectedDates[1];
                        else
                            for (var D = 0; D < o.selectedDates.length; D++)
                                if (o.selectedDates[D].getTime() === b.getTime()) {
                                    _ = !0;
                                    break
                                } var j = t.isFunction(o.options.onDate) ? o.options.onDate.apply(i, [b, b.getMonth() + 1 === s]) : {},
                                    O = (f || b.getMonth() + 1 === s) && this._isSelectable(i, b, j.selectable, m, g);
                        S += this._prepare(r.day, o).replace(/\{day\}/g, (O ? '<a href="javascript:void(0)"' : "<span") + ' class="dp' + w + " " + (j.dateClass || "") + (_ && (f || b.getMonth() + 1 === s) ? " " + r.selectedClass : "") + (O ? " " + r.defaultClass : "") + ((b.getDay() || 7) < 6 ? "" : " " + r.weekendClass) + (b.getMonth() + 1 === s ? "" : " " + r.otherMonthClass) + (b.getTime() === y.getTime() && b.getMonth() + 1 === s ? " " + r.todayClass : "") + (b.getTime() === o.drawDate.getTime() && b.getMonth() + 1 === s ? " " + r.highlightedClass : "") + '"' + (j.title || o.options.dayStatus && O ? ' title="' + (j.title || e.formatDate(o.options.dayStatus, b, o.getConfig())) + '"' : "") + ">" + (o.options.showOtherMonths || b.getMonth() + 1 === s ? j.content || b.getDate() : "&#160;") + (O ? "</a>" : "</span>")), e.add(b, 1, "d"), w = b.getTime()
                    }
                    k += this._prepare(r.week, o).replace(/\{days\}/g, S).replace(/\{weekOfYear\}/g, C)
                }
                var I = this._prepare(r.month, o).match(/\{monthHeader(:[^\}]+)?\}/);
                I = I[0].length <= 13 ? "MM yyyy" : I[0].substring(13, I[0].length - 1), I = a ? this._generateMonthSelection(o, n, s, m, g, I, r) : e.formatDate(I, e.newDate(n, s, 1), o.getConfig());
                var E = this._prepare(r.weekHeader, o).replace(/\{days\}/g, this._generateDayHeaders(o, r));
                return this._prepare(r.month, o).replace(/\{monthHeader(:[^\}]+)?\}/g, I).replace(/\{weekHeader\}/g, E).replace(/\{weeks\}/g, k)
            },
            _generateDayHeaders: function (t, e) {
                for (var i = "", o = 0; o < 7; o++) {
                    var n = (o + t.options.firstDay) % 7;
                    i += this._prepare(e.dayHeader, t).replace(/\{day\}/g, '<span class="' + this._curDoWClass + n + '" title="' + t.options.dayNames[n] + '">' + t.options.dayNamesMin[n] + "</span>")
                }
                return i
            },
            _generateMonthSelection: function (t, i, o, n, s, r) {
                if (!t.options.changeMonth) return e.formatDate(r, e.newDate(i, o, 1), t.getConfig());
                for (var a = t.options["monthNames" + (r.match(/mm/i) ? "" : "Short")], l = r.replace(/m+/i, "\\x2E").replace(/y+/i, "\\x2F"), c = '<select class="' + this._monthYearClass + '" title="' + t.options.monthStatus + '">', d = 1; d <= 12; d++)(!n || e.newDate(i, d, e.daysInMonth(i, d)).getTime() >= n.getTime()) && (!s || e.newDate(i, d, 1).getTime() <= s.getTime()) && (c += '<option value="' + d + "/" + i + '"' + (o === d ? ' selected="selected"' : "") + ">" + a[d - 1] + "</option>");
                c += "</select>", l = l.replace(/\\x2E/, c);
                var u = t.options.yearRange;
                if ("any" === u) c = '<select class="' + this._monthYearClass + " " + this._anyYearClass + '" title="' + t.options.yearStatus + '"><option>' + i + '</option></select><input class="' + this._monthYearClass + " " + this._curMonthClass + o + '" value="' + i + '">';
                else {
                    u = u.split(":");
                    var p = e.today().getFullYear(),
                        h = u[0].match("c[+-].*") ? i + parseInt(u[0].substring(1), 10) : (u[0].match("[+-].*") ? p : 0) + parseInt(u[0], 10),
                        f = u[1].match("c[+-].*") ? i + parseInt(u[1].substring(1), 10) : (u[1].match("[+-].*") ? p : 0) + parseInt(u[1], 10);
                    c = '<select class="' + this._monthYearClass + '" title="' + t.options.yearStatus + '">', h = e.add(e.newDate(h + 1, 1, 1), -1, "d"), f = e.newDate(f, 1, 1);
                    var m = function (t, e) {
                        0 !== t && (c += '<option value="' + o + "/" + t + '"' + (i === t ? ' selected="selected"' : "") + ">" + (e || t) + "</option>")
                    },
                        g = null,
                        v = null;
                    if (h.getTime() < f.getTime()) {
                        for (h = (n && n.getTime() > h.getTime() ? n : h).getFullYear(), f = (s && s.getTime() < f.getTime() ? s : f).getFullYear(), g = Math.floor((f - h) / 2), (!n || n.getFullYear() < h) && m(h - g, t.options.earlierText), v = h; v <= f; v++) m(v);
                        (!s || s.getFullYear() > f) && m(f + g, t.options.laterText)
                    } else {
                        for (h = (s && s.getTime() < h.getTime() ? s : h).getFullYear(), f = (n && n.getTime() > f.getTime() ? n : f).getFullYear(), g = Math.floor((h - f) / 2), (!s || s.getFullYear() > h) && m(h + g, t.options.earlierText), v = h; v >= f; v--) m(v);
                        (!n || n.getFullYear() < f) && m(f - g, t.options.laterText)
                    }
                    c += "</select>"
                }
                return l = l.replace(/\\x2F/, c)
            },
            _prepare: function (t, e) {
                var i = function (e, i) {
                    for (; ;) {
                        var o = t.indexOf("{" + e + ":start}");
                        if (-1 === o) return;
                        var n = t.substring(o).indexOf("{" + e + ":end}");
                        n > -1 && (t = t.substring(0, o) + (i ? t.substr(o + e.length + 8, n - e.length - 8) : "") + t.substring(o + n + e.length + 6))
                    }
                };
                i("inline", e.inline), i("popup", !e.inline);
                for (var o = /\{l10n:([^\}]+)\}/, n = null; n = o.exec(t);) t = t.replace(n[0], e.options[n[1]]);
                return t
            }
        });
        var e = t.datepick;
        t(function () {
            t(document).on("mousedown.datepick", e._checkExternalClick).on("resize.datepick", function () {
                e.hide(e.curInst)
            })
        })
    }(jQuery), jQuery(document).on("ready", function (t) {
        t("#status").fadeOut(), t(window).on("scroll", function () {
            var e = t(".sticky-header");
            t(window).scrollTop() < 265 ? e.removeClass("sticky") : e.addClass("sticky")
        }), smoothScroll.init({
            speed: 1e3,
            offset: 200
        }), t("a[data-rel^=lightcase]").lightcase(), t(window).on("load", function () {
            t(".portfolio-items").isotope({
                itemSelector: ".item",
                masonry: {
                    columnWidth: ".col-xs-12"
                }
            })
        });
        var e = t(".portfolio-items").isotope({});
        e.imagesLoaded().progress(function () {
            e.isotope("layout")
        });
        var i = t(".filters-group ul li");
        i.on("click", function () {
            i.removeClass("active"), t(this).addClass("active");
            var e = t(this).attr("data-filter");
            t(".portfolio-items").isotope({
                filter: e
            })
        });
        var o = t(".go-up");
        t(window).on("scroll", function () {
            t(this).scrollTop() >= 50 ? o.fadeIn() : o.fadeOut()
        }), t(".counter").counterUp({
            delay: 10,
            time: 5e3,
            offset: 100,
            beginAt: 0,
            formatter: function (t) {
                return t.replace(/,/g, ".")
            }
        }), t(document).ready(function () {
            t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            })
        }), t(".filter-toggle").on("click", function () {
            t(this).parent().find("form").stop(!0, !0).slideToggle()
        });
        var n = {
            hide: function () {
                t(".modal").fadeOut(), t("html, body").removeClass("hid-body")
            }
        };
        t(".modal-open").on("click", function (e) {
            e.preventDefault(), t(".modal").fadeIn(), t("html, body").addClass("hid-body")
        }), t(".close-reg").on("click", function () {
            n.hide()
        }), t(".tabs-menu a").on("click", function (e) {
            e.preventDefault(), t(this).parent().addClass("current"), t(this).parent().siblings().removeClass("current");
            var i = t(this).attr("href");
            t(".tab-contents").not(i).css("display", "none"), t(i).fadeIn()
        });
        var s = document.getElementsByClassName("loader-overlay")[0];
        console.log(s);
        s.className = s.className.replace("loader-overlay invisible ", "loader-overlay "), setTimeout(function () {
            s.className = s.className.replace("loader-overlay", "loader-overlay invisible")
        }, 3e3), t(window).width() < 770 && (s.className = s.className.replace(" loader-overlay", "loader-overlay invisible"))
    }(jQuery)), $(function () {
        /*$(".ui_nationality").change(function(){$value=$(this).find(":selected").attr("data-href"),"select"!=$value&&(window.location.href=$value+".html")}),*/
        $(window).width() <= 991 && ($(".buttons-services .col-buttons").removeClass("col").addClass("col-12"), $(".buttons-services .arrow-box").click(function () {
            $(this).next().hasClass("show-data") ? ($(this).next().removeClass("show-data"), $(this).next().hide()) : ($(".arrow-data").removeClass("show-data"), $(this).next().addClass("show-data"), $(this).next().show())
        })), $(".tab-home").click(function () {
            $("#hero-area").addClass("header-home").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-china").click(function () {
            $("#hero-area").addClass("header-china").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-brazil").click(function () {
            $("#hero-area").addClass("header-brazil").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-country").click(function () {
            $("#hero-area").addClass("header-country").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-uae").click(function () {
            $("#hero-area").addClass("header-country").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-usa").click(function () {
            $("#hero-area").addClass("header-usa").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-egypt").click(function () {
            $("#hero-area").addClass("header-egypt").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-maldives").click(function () {
            $("#hero-area").addClass("header-maldives").removeClass("header-tab2 header-tab3 header-tab4 header-tab5")
        }), $(".tab-header2").click(function () {
            $("#hero-area").addClass("header-tab2").removeClass("header-home header-tab3 header-tab4 header-tab5")
        }), $(".tab-header3").click(function () {
            $("#hero-area").addClass("header-tab3").removeClass("header-home header-tab2 header-tab4 header-tab5")
        }), $(".tab-header4").click(function () {
            $("#hero-area").addClass("header-tab4").removeClass("header-home header-tab2 header-tab3 header-tab5")
        }), $(".tab-header5").click(function () {
            $("#hero-area").addClass("header-tab5").removeClass("header-home header-tab2 header-tab3 header-tab4")
        })
    }), $(document).ready(function () {
        $("select").select2(), $('[data-toggle="tooltip"]').tooltip(), $(window).on("scroll load", function () {
            $("#header.cloned #logo img").attr("src", $("#header #logo img").attr("data-sticky-logo"))
        }), $(".dropdown-filter").on("click", function () {
            $(".explore__form-checkbox-list").toggleClass("filter-block")
        }), $(".ui.dropdown").dropdown(), $("#birthdatepicker").datepick({
            dateFormat: "dd-mm-yyyy"
        }), $("#datepicker").datepick({
            dateFormat: "dd-mm-yyyy"
        });
        var t = document.getElementById("track_your_request_menu");
        window.addEventListener("resize", function () {
            $(window).width() < 1024 && (t.style.display = "none")
        }), $("body").on("click", "#view_all_home_countries_link", function (t) {
            return t.preventDefault(), $("#home_flags").hasClass("d-none") ? ($("#home_flags").toggleClass("d-none"), $(this).html("View Less")) : ($("#home_flags").toggleClass("d-none"), $(this).html("View All")), !1
        })
    });