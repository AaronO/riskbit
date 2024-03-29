(function () {
    if (!this.clearbitRequire) {
        var f = {}
            , l = {}
            , m = function (k, a) {
                var d = h(a, k), c = h(d, "./index"), b;
                if (b = l[d] || l[c])
                    return b;
                if (c = f[d] || f[d = c])
                    return b = {
                        id: d,
                        exports: {}
                    },
                        l[d] = b.exports,
                        c(b.exports, function (c) {
                            return m(c, d.split("/").slice(0, -1).join("/"))
                        }, b),
                        l[d] = b.exports;
                throw "module " + k + " not found";
            }
            , h = function (k, a) {
                var d = [], c, b;
                c = /^\.\.?(\/|$)/.test(a) ? [k, a].join("/").split("/") : a.split("/");
                for (var n = 0, g = c.length; n < g; n++)
                    b = c[n],
                        ".." == b ? d.pop() : "." != b && "" != b && d.push(b);
                return d.join("/")
            };
        this.clearbitRequire = function (k) {
            return m(k, "")
        }
            ;
        this.clearbitRequire.define = function (k) {
            for (var a in k)
                f[a] = k[a]
        }
            ;
        this.clearbitRequire.modules = f;
        this.clearbitRequire.cache = l
    }
    return this.clearbitRequire
}
).call(this);
this.clearbitRequire.define({
    "risk/fingerprint": function (f, l, m) {
        (function () {
            var h, k;
            h = l("./fontdetect");
            k = function () {
                function a() { }
                a.calculate = function (d) {
                    return (new this).calculate(d)
                }
                    ;
                a.prototype.calculate = function (d) {
                    var c;
                    c = this.getProperties();
                    return this.getBattery(function (b) {
                        c.battery = b;
                        return d(c)
                    })
                }
                    ;
                a.prototype.getCanvasPrint = function () {
                    var d, c;
                    d = document.createElement("canvas");
                    c = null;
                    try {
                        c = d.getContext("2d")
                    } catch (b) {
                        return
                    }
                    c.textBaseline = "top";
                    c.font = "14px 'Arial'";
                    c.textBaseline = "alphabetic";
                    c.fillStyle = "#f60";
                    c.fillRect(125, 1, 62, 20);
                    c.fillStyle = "#069";
                    c.fillText("Fingerprint 1.0", 2, 15);
                    c.fillStyle = "rgba(102, 204, 0, 0.7)";
                    c.fillText("Fingerprint 1.0", 4, 17);
                    return d.toDataURL()
                }
                    ;
                a.prototype.isSupportedCodec = function (d) {
                    if (window.MediaSource)
                        return window.MediaSource.isTypeSupported(d);
                    if (window.WebKitMediaSource)
                        return window.WebKitMediaSource.isTypeSupported(d)
                }
                    ;
                a.prototype.getCodecs = function () {
                    var d, c, b;
                    b = ['video/mp4; codecs="avc1.42c00d"', 'video/ogg; codecs="theora"', 'video/webm; codecs="vorbis,vp8"', 'video/webm; codecs="vorbis,vp9"', 'video/mp2t; codecs="avc1.42E01E,mp4a.40.2"'];
                    d = 'audio/mpeg,audio/mp4; codecs="mp4a.40.2",audio/ogg; codecs="vorbis",audio/ogg; codecs="opus",audio/webm; codecs="vorbis",audio/wav; codecs="1"'.split(",");
                    b = function () {
                        var d, g, e;
                        e = [];
                        d = 0;
                        for (g = b.length; d < g; d++)
                            c = b[d],
                                this.isSupportedCodec(c) && e.push(c);
                        return e
                    }
                        .call(this);
                    d = function () {
                        var b, g, e;
                        e = [];
                        b = 0;
                        for (g = d.length; b < g; b++)
                            c = d[b],
                                this.isSupportedCodec(c) && e.push(c);
                        return e
                    }
                        .call(this);
                    return {
                        audio: d,
                        video: b
                    }
                }
                    ;
                a.prototype.fontTypes = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin".split(";");
                a.prototype.getCSSFonts = function () {
                    var d, c, b, a, g, e;
                    d = new h;
                    g = this.fontTypes;
                    e = [];
                    b = 0;
                    return d.detectBatch(g);

                    /*
                    for (a = g.length; b < a; b++)
                        c = g[b],
                            d.detect(c) && e.push(c);
                    return e
                    */
                }
                    ;
                a.prototype.getNavigatorProperties = function () {
                    var d, c, b, a;
                    c = {};
                    b = window.navigator;
                    for (d in b)
                        a = b[d],
                            "object" !== typeof a && "function" !== typeof a && (c[d] = a);
                    return c
                }
                    ;
                a.prototype.getRegularPlugins = function () {
                    var d, c, b, a, g, e, k, h, f;
                    k = [];
                    h = navigator.plugins;
                    d = 0;
                    for (b = h.length; d < b; d++) {
                        e = h[d];
                        f = {
                            name: e.name,
                            filename: e.filename,
                            description: e.description,
                            version: e.version,
                            mimeTypes: []
                        };
                        c = 0;
                        for (a = e.length; c < a; c++)
                            g = e[c],
                                f.mimeTypes.push({
                                    description: g.description,
                                    suffixes: g.suffixes,
                                    type: g.type
                                });
                        k.push(f)
                    }
                    return k
                }
                    ;
                a.prototype.getIEPlugins = function () {
                    var d, c, b, a, g, e;
                    e = [];
                    a = "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(";");
                    d = 0;
                    for (c = a.length; d < c; d++) {
                        b = a[d];
                        try {
                            g = new ActiveXObject(b),
                                e.push({
                                    name: b,
                                    version: g.GetVariable("$version")
                                })
                        } catch (k) { }
                    }
                    navigator.plugins && (e = e.concat(this.getRegularPlugins()));
                    return e
                }
                    ;
                a.prototype.getPlugins = function () {
                    return window.ActiveXObject ? this.getIEPlugins() : this.getRegularPlugins()
                }
                    ;
                a.prototype.getScreenProperties = function () {
                    var d, c, b, a;
                    d = {};
                    b = window.screen;
                    for (c in b)
                        a = b[c],
                            "object" !== typeof a && (d[c] = a);
                    return d
                }
                    ;
                a.prototype.getSystemColors = function () {
                    var d, c, b, a, g, e;
                    c = document.createElement("div");
                    d = {};
                    a = "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText".split(" ");
                    if (window.getComputedStyle) {
                        g = 0;
                        for (e = a.length; g < e; g++)
                            b = a[g],
                                document.body.appendChild(c),
                                c.style.color = b,
                                d[b] = window.getComputedStyle(c).getPropertyValue("color"),
                                document.body.removeChild(c);
                        return d
                    }
                }
                    ;


                a.prototype.getSystemColorsBatch = function () {
                    var parent = document.createElement("div");
                    var colors = {};
                    var variants = "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText".split(" ");
                    if (!window.getComputedStyle) {
                        return colors;
                    }

                    // Batch inserts
                    for (var variant of variants) {
                        var d = document.createElement("div");
                        d.style.color = variant;
                        parent.appendChild(d);
                    }

                    // Attach parent to body
                    document.body.appendChild(parent);

                    // Batch measures
                    for (var index in variants) {
                        var node = parent.childNodes.item(index);
                        var variant = variants[index];
                        colors[variant] = window.getComputedStyle(node).getPropertyValue("color");
                    }

                    // Remove parent
                    document.body.removeChild(parent);

                    return colors;
                };

                a.prototype.getBattery = function (d) {
                    return navigator.getBattery ? navigator.getBattery().then(function (c) {
                        return d({
                            charging: c.charging,
                            chargingTime: c.chargingTime,
                            dischargingTime: c.dischargingTime,
                            level: c.level
                        })
                    }) : d()
                }
                    ;
                a.prototype.getProperties = function () {
                    var d;
                    d = new Date;
                    var c;
                    a: {
                        try {
                            c = this.getCodecs();
                            break a
                        } catch (a) { }
                        c = void 0
                    }
                    var b = d.getTime() / 1E3, k = document.URL, g = document.documentMode, e;
                    a: {
                        try {
                            e = this.getCSSFonts();
                            break a
                        } catch (a) { }
                        e = void 0
                    }
                    var h;
                    a: {
                        try {
                            h = this.getNavigatorProperties();
                            break a
                        } catch (a) { }
                        h = void 0
                    }
                    var f;
                    a: {
                        try {
                            f = this.getPlugins();
                            break a
                        } catch (a) { }
                        f = void 0
                    }
                    var l;
                    a: {
                        try {
                            l = this.getScreenProperties();
                            break a
                        } catch (a) { }
                        l = void 0
                    }
                    var m;
                    a: {
                        try {
                            //m = this.getSystemColors();
                            m = this.getSystemColorsBatch();
                            break a
                        } catch (a) { }
                        m = void 0
                    }
                    return {
                        codecs: c,
                        deviceTime: b,
                        documentUrl: k,
                        documentMode: g,
                        fonts: e,
                        navigator: h,
                        plugins: f,
                        screen: l,
                        systemColors: m,
                        timezoneOffset: d.getTimezoneOffset()
                    }
                }
                    ;
                return a
            }();
            m.exports = k
        }
        ).call(this)
    }
});
this.clearbitRequire.define({
    "risk/fontdetect": function (f, l, m) {
        m.exports = function () {
            // NOTES: could optimize these initial measures by combining their read/writes
            // with the other measurements in .detectBatch()
            var h = ["monospace", "sans-serif", "serif"]
                , k = document.getElementsByTagName("body")[0]
                , a = document.createElement("span");
            a.style.fontSize = "72px";
            a.innerHTML = "mmmmmmmmmmlli";
            var d = {}, c = {}, b;
            for (b in h)
                a.style.fontFamily = h[b],
                    k.appendChild(a),
                    d[h[b]] = a.offsetWidth,
                    c[h[b]] = a.offsetHeight,
                    k.removeChild(a);
            this.detect = function (b) {
                var g = !1, e;
                for (e in h) {
                    a.style.fontFamily = b + "," + h[e];
                    k.appendChild(a);
                    var f = a.offsetWidth != d[h[e]] || a.offsetHeight != c[h[e]];
                    k.removeChild(a);
                    g = g || f
                }
                return g
            }
            this.detectBatch = function (fonts) {
                // Create parent
                var parent = document.createElement("div");

                // Add all spans to parent
                for (var font of fonts) {
                    for (var fallbackFont of h) {
                        var s = document.createElement("span");
                        s.style.fontSize = "72px";
                        s.innerText = "mmmmmmmmmmlli";
                        s.style.fontFamily = font + "," + fallbackFont;
                        parent.appendChild(s);
                    }
                }

                // Attach parent to body
                k.appendChild(parent);

                // Measure (and filter)
                var availableFonts = fonts.filter((font, index) => {
                    var equalDims = false;
                    for (var fallbackIdx in h) {
                        var idx = index * 3 + Number(fallbackIdx);
                        var node = parent.childNodes.item(idx);
                        var equalDims = (node.offsetWidth === d[h[fallbackIdx]] && node.offsetHeight === c[h[fallbackIdx]]);
                        if (equalDims) {
                            return false;
                        }
                    }
                    return true;
                });

                // Remove parent (and child nodes)
                k.removeChild(parent);

                return availableFonts;
            }
        }
    }
});
this.clearbitRequire.define({
    "risk/json": function (f, l, m) {
        f = {
            parse: function (h) {
                return eval("(" + h + ")")
            },
            stringify: function () {
                var h = Object.prototype.toString
                    , k = Array.isArray || function (b) {
                        return "[object Array]" === h.call(b)
                    }
                    , a = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t"
                    }
                    , d = function (b) {
                        return a[b] || "\\u" + (b.charCodeAt(0) + 65536).toString(16).substr(1)
                    }
                    , c = /[\\"\u0000-\u001F\u2028\u2029]/g;
                return function n(a) {
                    if (null == a)
                        return "null";
                    if ("number" === typeof a)
                        return isFinite(a) ? a.toString() : "null";
                    if ("boolean" === typeof a)
                        return a.toString();
                    if ("object" === typeof a) {
                        if ("function" === typeof a.toJSON)
                            return n(a.toJSON());
                        if (k(a)) {
                            for (var e = "[", f = 0; f < a.length; f++)
                                e += (f ? ", " : "") + n(a[f]);
                            return e + "]"
                        }
                        if ("[object Object]" === h.call(a)) {
                            e = [];
                            for (f in a)
                                a.hasOwnProperty(f) && e.push(n(f) + ": " + n(a[f]));
                            return "{" + e.join(", ") + "}"
                        }
                    }
                    return '"' + a.toString().replace(c, d) + '"'
                }
            }()
        };
        m.exports = window.JSON || f
    }
});
this.clearbitRequire.define({
    "risk/utils": function (f, l, m) {
        (function () {
            var h, k, a;
            k = l("./json");
            f.onDocumentReady = function (a) {
                var c, b;
                c = !1;
                b = function () {
                    if (!c)
                        return c = !0,
                            a()
                }
                    ;
                if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll)
                    return setTimeout(b);
                if (document.addEventListener)
                    return document.addEventListener("DOMContentLoaded", b, !1),
                        document.addEventListener("load", b, !1);
                document.attachEvent("onreadystatechange", b);
                return window.attachEvent("onload", b)
            }
                ;
            a = function () {
                return "Microsoft Internet Explorer" === navigator.appName && window.XDomainRequest
            }
                ;
            f.postJSON = function (d, c, b) {
                var f, g, e;
                a() ? (e = new XDomainRequest,
                    e.onprogress = function () { }
                    ,
                    e.ontimeout = function () { }
                    ,
                    e.onerror = function () { }
                ) : e = new window.XMLHttpRequest;
                f = !1;
                g = function () {
                    if (!f)
                        return f = !0,
                            "function" === typeof b ? b(e) : void 0
                }
                    ;
                e.onreadystatechange = function () {
                    if (3 < e.readyState)
                        return g()
                }
                    ;
                e.onload = function () {
                    return g()
                }
                    ;
                e.open("POST", d, !0);
                "function" === typeof e.setRequestHeader && e.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                return e.send(k.stringify(c))
            }
                ;
            f.environment = ("undefined" !== typeof localStorage && null !== localStorage ? localStorage.CB_ENV : void 0) || "production";
            h = {
                local: {
                    "https://risk.clearbit.com": ""
                },
                development: {
                    "https://risk.clearbit.com": "https://risk.dev.clearbit.io"
                },
                staging: {
                    "https://risk.clearbit.com": "https://risk.staging.clearbit.io"
                },
                edge: {
                    "https://risk.clearbit.com": "https://risk-edge.clearbit.com"
                }
            };
            f.endpoint = function (a) {
                var c, b;
                return null != (c = null != (b = h[f.environment]) ? b[a] : void 0) ? c : a
            }
        }
        ).call(this)
    }
});
this.clearbitRequire.define({
    "risk/webrtc": function (f, l, m) {
        (function () {
            var f;
            f = function () {
                function f() { }
                var a, d;
                d = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                a = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                f.isSupported = function () {
                    return !!d
                }
                    ;
                f.getIPs = function (a) {
                    try {
                        return this.getIPsUnguarded(a)
                    } catch (b) {
                        return "undefined" !== typeof console && null !== console ? "function" === typeof console.error ? console.error(b) : void 0 : void 0
                    }
                }
                    ;
                f.getIPsUnguarded = function (c) {
                    var b, f, g;
                    f = {};
                    b = function (b) {
                        b = a.exec(b)[1];
                        if (!f[b])
                            return f[b] = !0,
                                c(b)
                    }
                        ;
                    g = new d({
                        iceServers: [{
                            urls: "stun:stun.services.mozilla.com",
                            url: "stun:stun.services.mozilla.com"
                        }]
                    }, {
                            optional: [{
                                RtpDataChannels: !0
                            }]
                        });
                    g.onicecandidate = function (a) {
                        if (a.candidate)
                            return b(a.candidate.candidate)
                    }
                        ;
                    g.createDataChannel("");
                    g.createOffer(function (a) {
                        return g.setLocalDescription(a, function () { }, function () { })
                    }, function () { });
                    if (g.localDescription && "string" === typeof g.localDescription.sdp)
                        return setTimeout(function () {
                            return g.localDescription.sdp.split("\n").forEach(function (a) {
                                if (0 === a.indexOf("a=candidate:"))
                                    return b(a)
                            })
                        }, 1E3)
                }
                    ;
                return f
            }();
            m.exports = f
        }
        ).call(this)
    }
});
(function () {
    var f, l, m, h, k, a, d, c = function (a, c) {
        return function () {
            return a.apply(c, arguments)
        }
    };
    m = clearbitRequire("risk/webrtc");
    f = clearbitRequire("risk/fingerprint");
    d = clearbitRequire("risk/utils");
    k = d.onDocumentReady;
    a = d.postJSON;
    h = d.endpoint;
    l = function () {
        function b() {
            this.sendFingerprint = c(this.sendFingerprint, this);
            this.onClientIP = c(this.onClientIP, this);
            this.onFingerprint = c(this.onFingerprint, this);
            this.clientIPs = [];
            m.isSupported() && m.getIPs(this.onClientIP);
            f.calculate(this.onFingerprint);
            setTimeout(this.sendFingerprint, 1E3)
        }
        b.prototype.endpoint = h("https://risk.clearbit.com");
        b.prototype.onFingerprint = function (a) {
            this.fingerprint = a
        }
            ;
        b.prototype.onClientIP = function (a) {
            return this.clientIPs.push(a)
        }
            ;
        b.prototype.sendFingerprint = function () {
            if (this.fingerprint)
                return this.fingerprint.clientIPs = this.clientIPs,
                    a(this.endpoint + "/v1/fingerprint", this.fingerprint)
        }
            ;
        return b
    }();
    k(function () {
        return new l
    })
}
).call(this);
