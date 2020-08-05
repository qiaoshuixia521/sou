(window.webpackJsonp = window.webpackJsonp || []).push([[30, 10], {
    1077: function (e, t, n) {
        "use strict";
        var a = n(17), r = n(25), i = n(1), o = n(4), s = n(6), c = n(10), l = n(9), u = n(7), d = n(8), h = n(0),
            p = n(3), g = n.n(p), f = n(2), m = n(34), A = n(24), C = n(877), b = n.n(C), v = n(74), E = n.n(v);

        function w(e, t) {
            return t ? e.trim() : e
        }

        var S, I, O, B = {useTrim: !0}, y = {
            required: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = (arguments.length > 1 && arguments[1], arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B),
                    n = t.useTrim;
                return "" !== w(e, n)
            }, maxLength: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B, a = n.useTrim;
                return w(e, a).length <= t
            }, minLength: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B, a = n.useTrim;
                return w(e, a).length >= t
            }, pattern: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B, a = n.useTrim;
                return t.test(w(e, a))
            }
        };

        function j() {
            return function (e) {
                return function (e) {
                    var t = e.contextTypes, n = e.defaultProps, a = Object.assign({}, e.prototype);

                    function r(e) {
                        for (var t = a[e], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        return "function" == typeof t ? t.apply(void 0, r) : void 0
                    }

                    Object.assign(e.prototype, {
                        componentWillMount: function () {
                            var e = this.context.form;
                            e && (e.attachToForm(this), this.setState({_value: "", _validations: []}));
                            for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                            return r.apply(void 0, ["componentWillMount"].concat(n))
                        }, componentWillUnmount: function () {
                            var e = this.context.form;
                            e && e.detachFromForm(this);
                            for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                            return r.apply(void 0, ["componentWillUnmount"].concat(n))
                        }, getValue: function () {
                            var e = (this.state || {})._value;
                            return null == e ? "" : e
                        }, setValue: function (e, t) {
                            this.setState({_value: e}, function () {
                                "function" == typeof t && t()
                            })
                        }, getValidationMessage: function () {
                            var e = this.getValidationMessages();
                            return e && e[0]
                        }, getValidationClassName: function () {
                            var e = (this.state || {})._validations;
                            return e && e[0] && e[0].className
                        }, getValidationMessages: function () {
                            var e = (this.state || {})._validations;
                            return e && e.map(function (e) {
                                return e.message
                            })
                        }, setValidations: function (e) {
                            var t = this;
                            this.setState({_validations: e}, function () {
                                return t.forceUpdate()
                            })
                        }, clearValidations: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 ? arguments[1] : void 0, n = this.state || {},
                                a = n._validations;
                            a && a.length > 0 && this.setState(Object.assign({}, e, {_validations: []}), t)
                        }, addValidation: function (e) {
                            this.setState(function (t) {
                                var n = t._validations;
                                return {_validations: [e].concat(Object(o.a)(n || []))}
                            })
                        }, addManualValidation: function (e) {
                            this.addValidation({type: "manual", message: e})
                        }, validate: function () {
                            this.context.form.validate(this)
                        }
                    }), Object.assign(e, {
                        contextTypes: Object.assign({}, t, {form: g.a.object}),
                        defaultProps: Object.assign({}, n, {validations: []})
                    })
                }(e)
            }
        }

        n.d(t, "b", function () {
            return k
        }), n.d(t, "a", function () {
            return j
        });
        var k = Object(A.connect)(function (e) {
            return {isWechat: e.env.userAgent.Wechat}
        })((O = I = function (e) {
            function t() {
                var e, n;
                Object(s.a)(this, t);
                for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
                return (n = Object(l.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(r)))).state = {isValid: !0}, n.inputs = [], n.attachToForm = function (e) {
                    var t = e.props.name;
                    if (!t || n.inputs.includes(t)) throw new Error("form input must specify a unqie name, but current is ".concat(t));
                    n.inputs.push(e)
                }, n.detachFromForm = function (e) {
                    var t = n.inputs.indexOf(e);
                    -1 !== t && (n.inputs = [].concat(Object(o.a)(n.inputs.slice(0, t)), Object(o.a)(n.inputs.slice(t + 1))))
                }, n.validate = function (e) {
                    var t = e.state._value, n = e.props.validations, a = [], r = [];
                    return n ? (!Array.isArray(n) && n.type && (n = [n]), n.forEach(function (e) {
                        var n = e.type, i = e.value, s = e.options, c = y[n];
                        if (!c) throw new Error("no ".concat(n, " rules, please define it at Form.validateRules"));
                        var l = c(t, i, s);
                        b()(l) ? r = [].concat(Object(o.a)(r), [l.then(function () {
                        }, function () {
                            a.push(e)
                        })]) : l || (a = [].concat(Object(o.a)(a), [e]))
                    }), Promise.all(r).then(function () {
                        return e.setValidations(a), a
                    })) : a
                }, n.handleSubmit = function (e) {
                    e.preventDefault();
                    var t = n.props, a = t.onPreSubmit, r = t.onSubmit, o = t.isWechat;
                    a(), o ? new Promise(function (e) {
                        var t = n.inputs.find(function (e) {
                            return "username" === e.props.name
                        });
                        t && !t.state._value && Object(m.findDOMNode)(t.inputEl).value && t.handleChange({target: {value: Object(m.findDOMNode)(t.inputEl).value}});
                        var a = n.inputs.find(function (e) {
                            return "password" === e.props.name
                        });
                        a && !a.state._value && t && Object(m.findDOMNode)(t.inputEl).value && a.handleChange({target: {value: Object(m.findDOMNode)(a.inputEl).value}}), e()
                    }).then(function () {
                        n.validateAll().then(function (e) {
                            if (e) {
                                var t = n.inputs.reduce(function (e, t) {
                                    return Object.assign({}, e, Object(i.a)({}, t.props.name, t.state._value))
                                }, {});
                                r(t)
                            }
                        })
                    }) : n.validateAll().then(function (e) {
                        if (e) {
                            var t = n.inputs.reduce(function (e, t) {
                                return Object.assign({}, e, Object(i.a)({}, t.props.name, t.state._value))
                            }, {});
                            r(t)
                        }
                    })
                }, n
            }

            return Object(d.a)(t, e), Object(c.a)(t, [{
                key: "getChildContext", value: function () {
                    return {
                        form: {
                            attachToForm: this.attachToForm,
                            detachFromForm: this.detachFromForm,
                            getValue: this.getValue,
                            setValue: this.setValue,
                            validate: this.validate
                        }
                    }
                }
            }, {
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "validateAll", value: function () {
                    var e = this, t = this.props, n = t.onValid, a = t.onInvalid, r = [], i = [];
                    return this.inputs.forEach(function (t) {
                        var n = e.validate(t);
                        b()(n) ? i = [].concat(Object(o.a)(i), [n.then(function (e) {
                            r = [].concat(Object(o.a)(r), Object(o.a)(e))
                        })]) : n && (r = [].concat(Object(o.a)(r), Object(o.a)(n)))
                    }), Promise.all(i).then(function () {
                        var t = 0 === r.length;
                        return e.setState({isValid: t}, function () {
                            t ? n() : a(r.map(function (e) {
                                return e.message
                            }))
                        }), t
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = E()(this.props, ["onValid", "onInvalid", "onSubmit", "onPreSubmit", "isWechat", "dispatch"]),
                        t = e.children, n = e.onRef, i = Object(r.a)(e, ["children", "onRef"]);
                    return Object(h.d)("form", Object(a.default)({
                        noValidate: !0,
                        onSubmit: this.handleSubmit,
                        ref: n
                    }, i), t)
                }
            }]), t
        }(f.Component), I.childContextTypes = {form: g.a.object}, I.propTypes = {
            onValid: g.a.func,
            onInvalid: g.a.func,
            onSubmit: g.a.func,
            onPreSubmit: g.a.func
        }, I.validateRules = y, I.defaultProps = {
            onValid: function () {
            }, onInvalid: function () {
            }, onSubmit: function () {
            }, onPreSubmit: function () {
            }
        }, S = O)) || S
    }, 1103: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return I
        });
        var a, r, i, o = n(1), s = n(17), c = n(25), l = n(6), u = n(10), d = n(9), h = n(7), p = n(8), g = n(0),
            f = n(3), m = n.n(f), A = n(2), C = n(15), b = n.n(C), v = n(74), E = n.n(v), w = n(112), S = n(1077),
            I = (n(1608), Object(S.a)()((i = r = function (e) {
                function t() {
                    var e, n;
                    Object(l.a)(this, t);
                    for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                    return (n = Object(d.a)(this, (e = Object(h.a)(t)).call.apply(e, [this].concat(r)))).handleErrorHide = function () {
                        n.getValidationMessage() && n.setState({errorMaskShown: !1}, function () {
                            n.clearValidations({errorMaskShown: !0}, function () {
                                return n.inputEl.focus()
                            })
                        })
                    }, n.handleKeyUp = function (e) {
                        8 !== e.keyCode && 9 !== e.keyCode || n.clearValidations()
                    }, n.handleChange = function (e) {
                        var t = e.target.value, a = n.props.onChange;
                        n.setValue(t), "function" == typeof a && a(t)
                    }, n
                }

                return Object(p.a)(t, e), Object(u.a)(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this.props.defaultValue;
                        e && this.setValue(e), this.setState({errorMaskShown: !0})
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.manualValidateError, a = t.type, r = t.smsType,
                            i = e.manualValidateError, o = e.type, s = e.defaultValue, c = e.smsType;
                        !n && i || "string" == typeof n && n !== i ? this.addManualValidation(i) : n && !i && this.clearValidations({errorMaskShown: !0}), a === o && r === c || (this.setValue(s), this.clearValidations({errorMaskShown: !0}))
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this,
                            n = E()(this.props, ["validations", "defaultValue", "onChange", "smsType", "manualValidateError", "dispatch"]),
                            a = n.className, r = n.inputClassName, i = n.errorMessageClassName,
                            l = Object(c.a)(n, ["className", "inputClassName", "errorMessageClassName"]),
                            u = (this.state || {}).errorMaskShown, d = this.getValue(), h = this.getValidationMessage();
                        return Object(g.d)("div", {className: b()("SignFlowInput", a)}, Object(g.d)(w.a, Object(s.default)({
                            onRef: function (e) {
                                t.inputEl = e
                            },
                            value: d,
                            onChange: this.handleChange,
                            onKeyUp: this.handleKeyUp,
                            onClick: this.handleErrorHide,
                            onBlur: function () {
                                return t.validate()
                            },
                            className: r
                        }, l)), Object(g.d)("div", {
                            className: b()("SignFlowInput-errorMask", this.getValidationClassName(), (e = {}, Object(o.a)(e, i, h), Object(o.a)(e, "SignFlowInput-requiredErrorMask", !d), Object(o.a)(e, "SignFlowInput-errorMask--hidden", !h || !u), e)),
                            onClick: this.handleErrorHide
                        }, h))
                    }
                }]), t
            }(A.Component), r.propTypes = {
                inputClassName: m.a.string,
                errorMessageClassName: m.a.string,
                manualValidateError: m.a.node
            }, a = i)) || a)
    }, 1149: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("path", {
                d: "M14.782 16.78a.737.737 0 0 1-1.052 0L9.218 12.53a.758.758 0 0 1 0-1.063L13.73 7.22a.737.737 0 0 1 1.052 0c.29.294.29.77.001 1.063L11 12l3.782 3.716c.29.294.29.77 0 1.063z",
                fillRule: "evenodd"
            }))
        };
        o.defaultProps = {name: "ArrowLeft"}, t.a = o
    }, 1352: function (e, t, n) {
        "use strict";
        var a, r, i, o = n(17), s = n(25), c = n(6), l = n(10), u = n(9), d = n(7), h = n(8), p = n(0), g = n(3),
            f = n.n(g), m = n(2), A = n.n(m), C = n(24), b = n(156), v = n(74), E = n.n(v), w = n(193), S = n(1103),
            I = n(26), O = n(794);
        n(1611), m.Component, n(1612);
        var B = Object(C.connect)(function (e) {
            return {supportedCountries: e.sms.supportedCountries}
        }, {getSupportedCountries: w.b})((i = r = function (e) {
            function t() {
                var e, n;
                Object(c.a)(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                return (n = Object(u.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(r)))).state = {selectedCountry: null}, n.handleSelect = function (e, t) {
                    var a = n.props, r = a.supportedCountries, i = a.onSelect, o = r[t];
                    n.setState({selectedCountry: o}), i(o)
                }, n
            }

            return Object(h.a)(t, e), Object(l.a)(t, [{
                key: "componentDidMount", value: function () {
                    var e = this.props, t = e.supportedCountries, n = e.getSupportedCountries;
                    t && t.length || n()
                }
            }, {
                key: "render", value: function () {
                    var e = E()(this.props, ["getSupportedCountries", "onSelect"]), n = e.supportedCountries,
                        a = e.onChange, r = e.defaultPhoneNo, i = e.type, c = e.defaultSelectedCountry,
                        l = e.supportedCountriesShown, u = e.placeholderPrefix, d = void 0 === u ? "" : u,
                        h = Object(s.a)(e, ["supportedCountries", "onChange", "defaultPhoneNo", "type", "defaultSelectedCountry", "supportedCountriesShown", "placeholderPrefix"]),
                        g = this.state.selectedCountry || c, f = g.name, m = g.code, C = Boolean(l && n && n.length);
                    return Object(p.d)("div", {className: "SignFlow-account"}, C && Object(p.d)(A.a.Fragment, null, Object(p.d)("div", {className: "SignFlow-supportedCountriesSelectContainer"}, Boolean(n) && Boolean(n.length) && Object(p.d)(b.b, {
                        plain: !0,
                        text: "".concat(f, " ").concat(m),
                        onChange: this.handleSelect
                    }, n.map(function (e, t) {
                        var n = e.name, a = e.code;
                        return Object(p.d)(b.a, {key: t, value: "".concat(n, " ").concat(a)})
                    }))), Object(p.d)("span", {className: "SignFlow-accountSeperator"}, " ")), Object(p.d)(S.a, Object(o.default)({
                        className: "SignFlow-accountInputContainer",
                        name: "register" === i ? "phoneNo" : "username",
                        inputClassName: "SignFlow-accountInput",
                        placeholder: t.getPlaceholder(i, d),
                        onChange: a,
                        defaultValue: r,
                        validations: [{type: "required", message: t.getPlaceholder(i, "请输入")}],
                        type: "digits" === i || "register" === i ? "tel" : "text"
                    }, h)))
                }
            }]), t
        }(m.Component), r.propTypes = {
            defaultPhoneNo: f.a.string,
            defaultSelectedCountry: f.a.object,
            supportedCountries: f.a.array,
            onSelect: f.a.func,
            onChange: f.a.func,
            getSupportedCountries: f.a.func,
            type: f.a.oneOf(["register", "digits", "password"]).isRequired,
            supportedCountriesShown: f.a.bool,
            placeholderPrefix: f.a.string
        }, r.defaultProps = {
            defaultPhoneNo: "",
            defaultSelectedCountry: {name: "中国", code: "+86"},
            supportedCountriesShown: !0
        }, r.getPlaceholder = function (e, t) {
            var n = "digits" === e || "register" === e ? "手机号" : "手机号或邮箱";
            return "".concat(t).concat(n)
        }, a = i)) || a;
        t.a = B
    }, 1354: function (e, t, n) {
    }, 1355: function (e, t, n) {
        "use strict";
        var a = n(17), r = n(25), i = n(6), o = n(10), s = n(9), c = n(7), l = n(8), u = n(0), d = n(3), h = n.n(d),
            p = n(2), g = n(1103), f = (n(1615), function (e) {
                function t() {
                    return Object(i.a)(this, t), Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
                }

                return Object(l.a)(t, e), Object(o.a)(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.onChange, n = e.validations,
                            i = Object(r.a)(e, ["onChange", "validations"]);
                        return Object(u.d)(g.a, Object(a.default)({
                            className: "SignFlow-username",
                            onChange: t,
                            validations: n || [{type: "required", message: "请输入用户名"}]
                        }, i))
                    }
                }]), t
            }(p.Component));
        f.propTypes = {onChange: h.a.func.isRequired}, t.a = f
    }, 1419: function (e, t, n) {
        "use strict";
        var a = n(6), r = n(10), i = n(9), o = n(7), s = n(8), c = n(0), l = n(3), u = n.n(l), d = n(2), h = n(24),
            p = n(103), g = n(4), f = n(15), m = n.n(f), A = n(793), C = n(21), b = n(1103), v = n(1609), E = n.n(v),
            w = n(1610), S = n.n(w), I = (n(1354), function (e) {
                function t() {
                    var e, n;
                    Object(a.a)(this, t);
                    for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                    return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {hovered: !0}, n.handleMouseEnter = function () {
                        n.setState({hovered: !0})
                    }, n.handleMouseLeave = function () {
                        n.setState({hovered: !1})
                    }, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentWillReceiveProps", value: function (e) {
                        this.props.position !== e.position && this.handleMouseLeave()
                    }
                }, {
                    key: "shouldComponentUpdate", value: function (e, t) {
                        return this.props.position !== e.position || this.state.hovered !== t.hovered
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.position, n = e.onUnMark, a = this.state.hovered, r = a ? E.a : S.a;
                        return Object(c.d)(C.c, {
                            className: "ChineseCaptchaPoint",
                            style: t,
                            onClick: n,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            preset: "plain"
                        }, Object(c.d)(S.a, {
                            className: m()("ChineseCaptchaPoint-backIcon", {"ChineseCaptchaPoint-backIcon--hovered": a}),
                            fill: a ? "#0f88eb" : "#aad9ff",
                            width: 20,
                            height: 20
                        }), Object(c.d)(r, {
                            className: m()("ChineseCaptchaPoint-frontIcon", {"ChineseCaptchaPoint-frontIcon--hovered": a}),
                            fill: a ? "#ffffff" : "#0f88eb",
                            width: a ? 8 : 12,
                            height: a ? 8 : 12
                        }))
                    }
                }]), t
            }(d.Component));
        I.propTypes = {onUnMark: u.a.func.isRequired, position: u.a.object.isRequired};
        var O = I, B = 7, y = 10, j = "最多只能选择 ".concat(B, " 个点"), k = 60, Q = 16, T = function (e) {
            function t() {
                var e, n;
                Object(a.a)(this, t);
                for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {
                    markPositionsArray: [],
                    isClient: !1
                }, n.updateSize = function () {
                    if (n.chineseCaptchaImg) {
                        var e = n.chineseCaptchaImg.getBoundingClientRect();
                        n.chineseImgWidth = e.width, n.chineseImgHeight = e.height
                    }
                }, n.handleMarkPoint = function (e) {
                    if (n.chineseCaptchaImg) {
                        var t = n.state.markPositionsArray, a = n.props.onValidation;
                        if (t.length >= B) a({validationMessage: j}); else {
                            var r = e.pageX, i = e.pageY;
                            n.updateSize();
                            var o = n.chineseCaptchaImg.getBoundingClientRect(), s = o.top, c = o.left,
                                l = i - s - window.pageYOffset - y, u = r - c - window.pageXOffset - y,
                                d = [].concat(Object(g.a)(t), [{top: l, left: u + k + Q}]);
                            n.updateMarkPoint(d)
                        }
                    }
                }, n.handleUnMarkPoint = function (e) {
                    var t = Object(g.a)(n.state.markPositionsArray);
                    t.splice(e, 1), n.updateMarkPoint(t)
                }, n.updateMarkPoint = function (e) {
                    n.setState({markPositionsArray: e}, function () {
                        n.props.onUpdateInput(n.parseMarkPositionsArrayToInputValue(e))
                    })
                }, n.parseMarkPositionsArrayToInputValue = function (e) {
                    return JSON.stringify({
                        img_size: [n.chineseImgWidth, n.chineseImgHeight],
                        input_points: e.map(function (e) {
                            var t = e.top;
                            return [e.left + y - k - Q, t + y]
                        })
                    })
                }, n
            }

            return Object(s.a)(t, e), Object(r.a)(t, [{
                key: "componentDidMount", value: function () {
                    this.setState({isClient: !0}), this.updateSize()
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    this.props.url !== e.url && this.props.isChinese && this.setState({markPositionsArray: []})
                }
            }, {
                key: "shouldComponentUpdate", value: function (e, t) {
                    return this.props.url !== e.url || this.props.validationMessage !== e.validationMessage || this.props.isShown !== e.isShown || this.props.className !== e.className || this.state.markPositionsArray !== t.markPositionsArray
                }
            }, {
                key: "renderCaptcha", value: function () {
                    var e = this, t = this.props, n = t.url, a = t.isChinese, r = t.onRefresh;
                    return n ? Object(c.d)("div", {className: a ? "Captcha-chineseContainer" : "Captcha-englishContainer"}, Object(c.d)("img", {
                        "data-tooltip": "看不清楚？换一张",
                        className: a ? "Captcha-chineseImg" : "Captcha-englishImg",
                        src: n,
                        alt: "图形验证码",
                        onClick: a ? this.handleMarkPoint : r,
                        ref: a && function (t) {
                            e.chineseCaptchaImg = t
                        }
                    }), a ? this.state.markPositionsArray.map(function (t, n) {
                        return Object(c.d)(O, {
                            key: n, onUnMark: function () {
                                return e.handleUnMarkPoint(n)
                            }, position: t
                        })
                    }) : null) : null
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.isChinese, n = e.validationMessage, a = e.className, r = e.onUpdateInput,
                        i = e.validations, o = e.isShown, s = e.onRefresh, l = this.state.isClient,
                        u = this.renderCaptcha();
                    return Object(c.d)("div", {
                        className: m()("Captcha", a, {"Captcha-chinese": t && l}),
                        style: o ? {} : {
                            width: "0",
                            height: "0",
                            opacity: "0",
                            overflow: "hidden",
                            margin: "0",
                            padding: "0",
                            border: "0"
                        }
                    }, t ? Object(c.d)("div", null, Object(c.d)("div", {className: "Captcha-chineseOperator"}, Object(c.d)("span", {className: m()("Captcha-info", {"Captcha-error": Boolean(n)})}, n || "请点击图中倒立的文字"), Object(c.d)(C.c, {
                        className: "Captcha-chineseRefreshButton",
                        preset: "plain",
                        onClick: s
                    }, Object(c.d)(A.a, {size: 20}))), u) : Object(c.d)("div", null, Object(c.d)(b.a, {
                        name: "captcha",
                        type: "text",
                        errorMessageClassName: "Captcha-errorMessage",
                        placeholder: "验证码",
                        onChange: r,
                        validations: o ? i : [],
                        manualValidateError: n,
                        tabIndex: o ? 0 : -1
                    }), Object(c.d)("span", {className: "Captcha-englishImage"}, u)))
                }
            }]), t
        }(d.Component);
        T.propTypes = {
            isChinese: u.a.bool,
            url: u.a.string,
            validationMessage: u.a.string,
            onValidation: u.a.func,
            onRefresh: u.a.func.isRequired,
            onUpdateInput: u.a.func.isRequired,
            isShown: u.a.bool,
            validations: u.a.array
        }, T.defaultProps = {
            isChinese: !1,
            isShown: !1,
            validations: [{type: "required", message: "请填写验证码", className: "Captcha-requiredErrorMessage"}]
        };
        var N, R, M, D = T;
        var V = Object(h.connect)(function (e) {
            var t = e.captcha;
            return {captchaNeeded: t.captchaNeeded, captchaBase64String: t.captchaBase64String}
        }, {checkIfCaptchaNeeded: p.c, requestForCaptcha: p.e, resetCaptchaInfo: p.f})((M = R = function (e) {
            function t() {
                var e, n;
                Object(a.a)(this, t);
                for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {validationMessage: ""}, n.handleValidation = function (e) {
                    var t = e.message, a = e.needsRefresh;
                    t && n.setState({validationMessage: t});
                    var r = n.props, i = r.captchaNeeded, o = r.checkIfCaptchaNeeded, s = r.requestForCaptcha;
                    !i && a ? o(n.lang) : a && s(n.lang)
                }, n.handleRefresh = function () {
                    n.props.requestForCaptcha(n.lang)
                }, n
            }

            return Object(s.a)(t, e), Object(r.a)(t, [{
                key: "componentDidMount", value: function () {
                    var e = this.props, t = e.type, n = e.isChinese, a = e.checkIfCaptchaNeeded;
                    this.lang = n ? "cn" : "en", this.type = "register" === t ? "register" : "login", a(this.lang)
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    var t = this.props, n = t.validationResult, a = void 0 === n ? {} : n, r = t.captchaNeeded,
                        i = t.requestForCaptcha, o = e.validationResult, s = void 0 === o ? {} : o, c = e.captchaNeeded;
                    !r && c && i(this.lang), a.timestamp !== s.timestamp && this.handleValidation(s)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.props.resetCaptchaInfo()
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.type, n = e.isChinese, a = e.onUpdateInput, r = e.captchaNeeded,
                        i = e.className, o = e.canCaptchaShown, s = e.captchaBase64String,
                        l = this.state.validationMessage, u = Boolean(o && r && s),
                        d = "digitsLogin" !== t ? D.defaultProps.validations : [];
                    return Object(c.d)(D, {
                        className: i,
                        isShown: u,
                        isChinese: n,
                        url: "data:image/jpg;base64,".concat(s),
                        validationMessage: l,
                        onRefresh: this.handleRefresh,
                        onValidation: this.handleValidation,
                        validations: d,
                        onUpdateInput: a
                    })
                }
            }]), t
        }(d.Component), R.propTypes = {
            canCaptchaShown: u.a.bool,
            isChinese: u.a.bool,
            type: u.a.oneOf(["login", "digitsLogin", "register"]).isRequired,
            validationResult: u.a.object,
            captchaNeeded: u.a.bool,
            captchaBase64String: u.a.string,
            onUpdateInput: u.a.func,
            checkIfCaptchaNeeded: u.a.func,
            requestForCaptcha: u.a.func
        }, R.defaultProps = {canCaptchaShown: !1, isChinese: !1}, N = M)) || N;
        t.a = V
    }, 1437: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        });
        var a = n(17), r = n(25), i = n(6), o = n(10), s = n(9), c = n(7), l = n(8), u = n(0), d = n(3), h = n.n(d),
            p = n(2), g = n(21), f = n(1510), m = n(1438), A = n(74), C = n.n(A), b = n(1103),
            v = (n(1614), function (e) {
                function t(e) {
                    var n;
                    return Object(i.a)(this, t), (n = Object(s.a)(this, Object(c.a)(t).call(this, e))).handleSwitchPasswordInputType = function () {
                        n.setState(function (e) {
                            return {inputType: "password" === e.inputType ? "text" : "password"}
                        })
                    }, n.handleChange = function (e) {
                        n.state.hasValue !== Boolean(e) && n.setState({hasValue: Boolean(e)}), n.props.onChange(e)
                    }, n.state = {hasValue: Boolean(e.defaultValue), inputType: e.defaultType}, n
                }

                return Object(l.a)(t, e), Object(o.a)(t, [{
                    key: "render", value: function () {
                        var e = C()(this.props, ["onChange", "defaultType"]), t = e.switchDisabled,
                            n = e.placeholderPrefix, i = Object(r.a)(e, ["switchDisabled", "placeholderPrefix"]),
                            o = this.state, s = o.inputType, c = o.hasValue;
                        return Object(u.d)("div", {className: "SignFlow-password"}, Object(u.d)(b.a, Object(a.default)({
                            name: "password",
                            inputClassName: "password" === s && c ? "SignFlow-passwordInput" : "",
                            type: s,
                            placeholder: "".concat(n || "", "密码"),
                            onChange: this.handleChange,
                            errorMessageClassName: "SignFlow-passwordErrorMask",
                            validations: [{
                                type: "required",
                                message: "请输入密码",
                                className: "SignFlow-requiredPasswordErrorMask"
                            }]
                        }, i)), !t && Object(u.d)(g.c, {
                            className: "SignFlow-switchPassword",
                            tabIndex: -1,
                            preset: "plain",
                            onClick: this.handleSwitchPasswordInputType,
                            icon: "password" === s ? f.a : m.a
                        }))
                    }
                }]), t
            }(p.Component));
        v.propTypes = {
            onChange: h.a.func.isRequired,
            switchDisabled: h.a.bool,
            defaultType: h.a.string
        }, v.defaultProps = {defaultType: "password"}
    }, 1438: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("path", {
                d: "M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z",
                opacity: ".9",
                fillRule: "evenodd"
            }))
        };
        o.defaultProps = {name: "EyeSlash"}, t.a = o
    }, 1439: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("path", {
                d: "M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z",
                fillRule: "evenodd"
            }))
        };
        o.defaultProps = {name: "WeChat"}, t.a = o
    }, 1440: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("path", {
                fill: "#FB6622",
                d: "M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131 6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346 4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097 3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z",
                fillRule: "evenodd"
            }))
        };
        o.defaultProps = {name: "Weibo"}, t.a = o
    }, 1510: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("path", {
                d: "M1 11.5C1 15 7 19 12 19s11-4 11-7.5S17 4 12 4 1 8 1 11.5zm11 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z",
                fillRule: "evenodd"
            }))
        };
        o.defaultProps = {name: "Eye"}, t.a = o
    }, 1511: function (e, t, n) {
        "use strict";
        var a = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        t.a = function (e) {
            return a.test(e)
        }
    }, 1523: function (e, t, n) {
        "use strict";
        var a = n(17), r = n(25), i = n(6), o = n(10), s = n(9), c = n(7), l = n(8), u = n(0), d = n(3), h = n.n(d),
            p = n(2), g = n(15), f = n.n(g), m = n(21), A = n(74), C = n.n(A), b = (n(1613), function (e) {
                function t(e) {
                    var n;
                    return Object(i.a)(this, t), (n = Object(s.a)(this, Object(c.a)(t).call(this, e))).clearTimer = function () {
                        n.timer && window.clearInterval(n.timer)
                    }, n.handleClick = function (e) {
                        n.state.isCounting || n.startTiming(e)
                    }, n.state = {countDownTime: e.countDownTime, isCounting: !1}, n.isInitialState = !0, n
                }

                return Object(l.a)(t, e), Object(o.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.props.startAtOnce && this.startTiming()
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.interceptTime, a = t.reStartTime, r = e.interceptTime, i = e.reStartTime;
                        n !== r && this.resetTiming(), a !== i && (this.resetTiming(), this.startTiming())
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.clearTimer()
                    }
                }, {
                    key: "resetTiming", value: function () {
                        this.clearTimer(), this.setState({countDownTime: this.props.countDownTime, isCounting: !1})
                    }
                }, {
                    key: "startTiming", value: function (e) {
                        var t = this, n = this.props, a = n.event, r = n.countDownEndEvent;
                        "function" == typeof a && a(e), this.isInitialState = !1, this.setState({isCounting: !0}), this.timer = setInterval(function () {
                            var e = t.state.countDownTime;
                            e <= 0 ? (r && r(), t.resetTiming()) : t.setState({countDownTime: e - 1})
                        }, 1e3)
                    }
                }, {
                    key: "renderText", value: function () {
                        var e = this.props, t = e.initialText, n = e.resetText, a = e.countingText, r = this.state,
                            i = r.countDownTime;
                        return r.isCounting ? a({count: i}) : this.isInitialState ? t : n || t
                    }
                }, {
                    key: "render", value: function () {
                        var e = C()(this.props, ["initialText", "resetText", "countingText", "startAtOnce", "countDownTime", "event", "interceptTime", "countDownEndEvent", "reStartTime"]),
                            t = e.className, n = e.disabled, i = Object(r.a)(e, ["className", "disabled"]),
                            o = this.state.isCounting;
                        return Object(u.d)(m.c, Object(a.default)({className: f()("CountingDownButton", t, {"is-counting": o})}, i, {
                            onClick: this.handleClick,
                            disabled: n || o
                        }), this.renderText())
                    }
                }]), t
            }(p.Component));
        b.propTypes = {
            countDownTime: h.a.number,
            startAtOnce: h.a.bool,
            initialText: h.a.string.isRequired,
            resetText: h.a.string,
            countingText: h.a.func.isRequired,
            event: h.a.func,
            countDownEndEvent: h.a.func,
            interceptTime: h.a.number,
            reStartTime: h.a.number
        }, b.defaultProps = {countDownTime: 60, startAtOnce: !1, interceptTime: -1, reStartTime: -1}, t.a = b
    }, 1524: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var a = Number.isInteger || function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        };

        function r(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return function () {
                for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                var o = r[r.length - 1] || {};
                return n.reduce(function (t, n, i) {
                    return t.concat(a(n) && r[n] || o[n], e[i + 1])
                }, [e[0]]).join("")
            }
        }
    }, 1525: function (e, t, n) {
    }, 1585: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function () {
            return S
        });
        var a, r = n(1), i = n(6), o = n(10), s = n(9), c = n(7), l = n(8), u = n(0), d = n(2), h = n(24), p = n(21),
            g = n(215), f = n(366), m = n(103), A = n(1077), C = n(1352), b = n(1437), v = n(1355), E = n(1419),
            w = (n(1525), n(1616), {phoneNoError: null, fullnameError: null, passwordError: null, digitsError: null}),
            S = Object(g.b)()(a = Object(h.connect)(function (e) {
                var t = e.captcha, n = t.captchaNeeded, a = t.captchaValidationMessage, r = e.register;
                return {
                    captchaNeeded: n,
                    registerValidateErrors: r.registerValidateErrors,
                    captchaValidationMessage: a,
                    registerConfirmSucceeded: r.registerConfirmSucceeded
                }
            }, {checkCaptcha: m.b, validateAndRegister: f.f, resetRegisterValidateResult: f.d})(a = function (e) {
                function t() {
                    var e, n;
                    Object(i.a)(this, t);
                    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                    return (n = Object(s.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).state = {
                        email: "",
                        password: "",
                        fullname: "",
                        captcha: "",
                        customErrorInputMap: Object.assign({}, w)
                    }, n.handleChange = function (e) {
                        return function (t) {
                            n.setState(Object(r.a)({}, e, t))
                        }
                    }, n.runBeforeCheckCaptcha = function (e) {
                        var t = n.state.captcha, a = n.props, r = a.captchaNeeded, i = a.checkCaptcha;
                        if (!n.captchaValidated && r) return t ? void i(t).then(function (t) {
                            t.payload.success && (n.captchaValidated = !0, e())
                        }) : void n.setState({
                            validationResult: {
                                message: "请输入验证码",
                                needsRefresh: !1,
                                timestamp: Date.now()
                            }, smsInputInterceptTime: Date.now()
                        });
                        e()
                    }, n.handleSubmit = function () {
                        n.runBeforeCheckCaptcha(function () {
                            var e = n.props, t = e.validateAndRegister;
                            (0, e.resetRegisterValidateResult)();
                            var a = n.state;
                            t({
                                source: "com.zhihu.web",
                                registerType: "email",
                                email: a.email,
                                password: a.password,
                                fullname: a.fullname
                            })
                        })
                    }, n
                }

                return Object(l.a)(t, e), Object(o.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.props.isLogin && (location.href = "https://www.zhihu.com/logout?next=/email-register")
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.captchaValidationMessage, a = t.registerConfirmSucceeded,
                            r = e.captchaValidationMessage, i = e.registerConfirmSucceeded;
                        !a && i && (location.href = "/"), !n && r && this.setState({
                            smsInputInterceptTime: Date.now(),
                            validationResult: {message: r, needsRefresh: Boolean(r), timestamp: Date.now()}
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state.validationResult, t = this.props.registerValidateErrors, n = t.email,
                            a = (n = void 0 === n ? {} : n).message, r = t.fullname,
                            i = (r = void 0 === r ? {} : r).message, o = t.password,
                            s = (o = void 0 === o ? {} : o).message;
                        return Object(u.d)(A.b, {
                            className: "SignContainer-content EmailRegister",
                            onSubmit: this.handleSubmit
                        }, Object(u.d)(v.a, {
                            onChange: this.handleChange("fullname"),
                            name: "fullname",
                            placeholder: "用户名",
                            manualValidateError: i
                        }), Object(u.d)(C.a, {
                            type: "register",
                            placeholder: "输入邮箱",
                            onChange: this.handleChange("email"),
                            manualValidateError: a,
                            supportedCountriesShown: !1
                        }), Object(u.d)(b.a, {
                            onChange: this.handleChange("password"),
                            manualValidateError: s
                        }), Object(u.d)(E.a, {
                            className: "SignFlow-captchaContainer Register-captcha",
                            type: "register",
                            isChinese: this.captchaIsChinese,
                            canCaptchaShown: !0,
                            onUpdateInput: this.handleChange("captcha"),
                            validationResult: e
                        }), Object(u.d)(p.c, {
                            className: "EmailRegister-submitButton",
                            preset: "primary",
                            color: "blue",
                            type: "submit"
                        }, "注册"))
                    }
                }]), t
            }(d.Component)) || a) || a
    }, 1608: function (e, t, n) {
    }, 1609: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({viewBox: "0 0 8 8"}, e), r.default.createElement("path", {
                d: "M7.755 1.434A.839.839 0 0 0 7.75.248.837.837 0 0 0 6.565.244L4 2.81 1.434.245A.839.839 0 0 0 .248.248c-.33.33-.33.86-.004 1.186L2.81 4 .246 6.566A.839.839 0 0 0 .25 7.752c.33.33.86.33 1.185.004L4 5.19l2.566 2.565a.839.839 0 0 0 1.186-.004c.33-.33.33-.86.004-1.185L5.19 4l2.565-2.566z",
                fillRule: "evenodd"
            }))
        };
        t.default = o
    }, 1610: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({viewBox: "0 0 20 20"}, e), r.default.createElement("circle", {
                cx: "83",
                cy: "111",
                r: "10",
                transform: "translate(-73 -101)"
            }))
        };
        t.default = o
    }, 1611: function (e, t, n) {
    }, 1612: function (e, t, n) {
    }, 1613: function (e, t, n) {
    }, 1614: function (e, t, n) {
    }, 1615: function (e, t, n) {
    }, 1616: function (e, t, n) {
    }, 1707: function (e, t, n) {
    }, 1708: function (e, t, n) {
    }, 1709: function (e, t, n) {
        "use strict";
        var a;
        !function (r) {
            function i(e, t, n) {
                var a, r, i, o, s, c, l, u, A, C = 0, b = [], v = 0, E = !1, w = [], S = [], I = !1, O = !1;
                if (a = (n = n || {}).encoding || "UTF8", A = n.numRounds || 1, i = m(t, a), A !== parseInt(A, 10) || 1 > A) throw Error("numRounds must a integer >= 1");
                if ("SHA-1" === e) s = 512, c = x, l = H, o = 160, u = function (e) {
                    return e.slice()
                }; else if (0 === e.lastIndexOf("SHA-", 0)) if (c = function (t, n) {
                    return J(t, n, e)
                }, l = function (t, n, a, r) {
                    var i, o;
                    if ("SHA-224" === e || "SHA-256" === e) i = 15 + (n + 65 >>> 9 << 4), o = 16; else {
                        if ("SHA-384" !== e && "SHA-512" !== e) throw Error("Unexpected error in SHA-2 implementation");
                        i = 31 + (n + 129 >>> 10 << 5), o = 32
                    }
                    for (; t.length <= i;) t.push(0);
                    for (t[n >>> 5] |= 128 << 24 - n % 32, n += a, t[i] = 4294967295 & n, t[i - 1] = n / 4294967296 | 0, a = t.length, n = 0; n < a; n += o) r = J(t.slice(n, n + o), r, e);
                    if ("SHA-224" === e) t = [r[0], r[1], r[2], r[3], r[4], r[5], r[6]]; else if ("SHA-256" === e) t = r; else if ("SHA-384" === e) t = [r[0].a, r[0].b, r[1].a, r[1].b, r[2].a, r[2].b, r[3].a, r[3].b, r[4].a, r[4].b, r[5].a, r[5].b]; else {
                        if ("SHA-512" !== e) throw Error("Unexpected error in SHA-2 implementation");
                        t = [r[0].a, r[0].b, r[1].a, r[1].b, r[2].a, r[2].b, r[3].a, r[3].b, r[4].a, r[4].b, r[5].a, r[5].b, r[6].a, r[6].b, r[7].a, r[7].b]
                    }
                    return t
                }, u = function (e) {
                    return e.slice()
                }, "SHA-224" === e) s = 512, o = 224; else if ("SHA-256" === e) s = 512, o = 256; else if ("SHA-384" === e) s = 1024, o = 384; else {
                    if ("SHA-512" !== e) throw Error("Chosen SHA variant is not supported");
                    s = 1024, o = 512
                } else {
                    if (0 !== e.lastIndexOf("SHA3-", 0) && 0 !== e.lastIndexOf("SHAKE", 0)) throw Error("Chosen SHA variant is not supported");
                    var B = 6;
                    if (c = q, u = function (e) {
                        var t, n = [];
                        for (t = 0; 5 > t; t += 1) n[t] = e[t].slice();
                        return n
                    }, "SHA3-224" === e) s = 1152, o = 224; else if ("SHA3-256" === e) s = 1088, o = 256; else if ("SHA3-384" === e) s = 832, o = 384; else if ("SHA3-512" === e) s = 576, o = 512; else if ("SHAKE128" === e) s = 1344, o = -1, B = 31, O = !0; else {
                        if ("SHAKE256" !== e) throw Error("Chosen SHA variant is not supported");
                        s = 1088, o = -1, B = 31, O = !0
                    }
                    l = function (e, t, n, a, r) {
                        var i, o = B, c = [], l = (n = s) >>> 5, u = 0, d = t >>> 5;
                        for (i = 0; i < d && t >= n; i += l) a = q(e.slice(i, i + l), a), t -= n;
                        for (e = e.slice(i), t %= n; e.length < l;) e.push(0);
                        for (e[(i = t >>> 3) >> 2] ^= o << 24 - i % 4 * 8, e[l - 1] ^= 128, a = q(e, a); 32 * c.length < r && (e = a[u % 5][u / 5 | 0], c.push((255 & e.b) << 24 | (65280 & e.b) << 8 | (16711680 & e.b) >> 8 | e.b >>> 24), !(32 * c.length >= r));) c.push((255 & e.a) << 24 | (65280 & e.a) << 8 | (16711680 & e.a) >> 8 | e.a >>> 24), 0 == 64 * (u += 1) % n && q(null, a);
                        return c
                    }
                }
                r = L(e), this.setHMACKey = function (t, n, i) {
                    var u;
                    if (!0 === E) throw Error("HMAC key already set");
                    if (!0 === I) throw Error("Cannot set HMAC key after calling update");
                    if (!0 === O) throw Error("SHAKE is not supported for HMAC");
                    if (t = (n = m(n, a = (i || {}).encoding || "UTF8")(t)).binLen, n = n.value, i = (u = s >>> 3) / 4 - 1, u < t / 8) {
                        for (n = l(n, t, 0, L(e), o); n.length <= i;) n.push(0);
                        n[i] &= 4294967040
                    } else if (u > t / 8) {
                        for (; n.length <= i;) n.push(0);
                        n[i] &= 4294967040
                    }
                    for (t = 0; t <= i; t += 1) w[t] = 909522486 ^ n[t], S[t] = 1549556828 ^ n[t];
                    r = c(w, r), C = s, E = !0
                }, this.update = function (e) {
                    var t, n, a, o = 0, l = s >>> 5;
                    for (e = (t = i(e, b, v)).binLen, n = t.value, t = e >>> 5, a = 0; a < t; a += l) o + s <= e && (r = c(n.slice(a, a + l), r), o += s);
                    C += o, b = n.slice(o >>> 5), v = e % s, I = !0
                }, this.getHash = function (t, n) {
                    var a, i, s, c;
                    if (!0 === E) throw Error("Cannot call getHash after setting HMAC key");
                    if (s = f(n), !0 === O) {
                        if (-1 === s.shakeLen) throw Error("shakeLen must be specified in options");
                        o = s.shakeLen
                    }
                    switch (t) {
                        case"HEX":
                            a = function (e) {
                                return d(e, o, s)
                            };
                            break;
                        case"B64":
                            a = function (e) {
                                return h(e, o, s)
                            };
                            break;
                        case"BYTES":
                            a = function (e) {
                                return p(e, o)
                            };
                            break;
                        case"ARRAYBUFFER":
                            try {
                                i = new ArrayBuffer(0)
                            } catch (e) {
                                throw Error("ARRAYBUFFER not supported by this environment")
                            }
                            a = function (e) {
                                return g(e, o)
                            };
                            break;
                        default:
                            throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
                    }
                    for (c = l(b.slice(), v, C, u(r), o), i = 1; i < A; i += 1) !0 === O && 0 != o % 32 && (c[c.length - 1] &= 4294967040 << 24 - o % 32), c = l(c, o, 0, L(e), o);
                    return a(c)
                }, this.getHMAC = function (t, n) {
                    var a, i, m, A;
                    if (!1 === E) throw Error("Cannot call getHMAC without first setting HMAC key");
                    switch (m = f(n), t) {
                        case"HEX":
                            a = function (e) {
                                return d(e, o, m)
                            };
                            break;
                        case"B64":
                            a = function (e) {
                                return h(e, o, m)
                            };
                            break;
                        case"BYTES":
                            a = function (e) {
                                return p(e, o)
                            };
                            break;
                        case"ARRAYBUFFER":
                            try {
                                a = new ArrayBuffer(0)
                            } catch (e) {
                                throw Error("ARRAYBUFFER not supported by this environment")
                            }
                            a = function (e) {
                                return g(e, o)
                            };
                            break;
                        default:
                            throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
                    }
                    return i = l(b.slice(), v, C, u(r), o), A = c(S, L(e)), a(A = l(i, o, s, A, o))
                }
            }

            function o(e, t) {
                this.a = e, this.b = t
            }

            function s(e, t, n) {
                var a, r, i, o, s, c = e.length;
                if (t = t || [0], s = (n = n || 0) >>> 3, 0 != c % 2) throw Error("String of HEX type must be in byte increments");
                for (a = 0; a < c; a += 2) {
                    if (r = parseInt(e.substr(a, 2), 16), isNaN(r)) throw Error("String of HEX type contains invalid characters");
                    for (i = (o = (a >>> 1) + s) >>> 2; t.length <= i;) t.push(0);
                    t[i] |= r << 8 * (3 - o % 4)
                }
                return {value: t, binLen: 4 * c + n}
            }

            function c(e, t, n) {
                var a, r, i, o, s = [];
                s = t || [0];
                for (r = (n = n || 0) >>> 3, a = 0; a < e.length; a += 1) t = e.charCodeAt(a), i = (o = a + r) >>> 2, s.length <= i && s.push(0), s[i] |= t << 8 * (3 - o % 4);
                return {value: s, binLen: 8 * e.length + n}
            }

            function l(e, t, n) {
                var a, r, i, o, s, c, l = [], u = 0;
                l = t || [0];
                if (t = (n = n || 0) >>> 3, -1 === e.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                if (r = e.indexOf("="), e = e.replace(/\=/g, ""), -1 !== r && r < e.length) throw Error("Invalid '=' found in base-64 string");
                for (r = 0; r < e.length; r += 4) {
                    for (s = e.substr(r, 4), i = o = 0; i < s.length; i += 1) o |= (a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(s[i])) << 18 - 6 * i;
                    for (i = 0; i < s.length - 1; i += 1) {
                        for (a = (c = u + t) >>> 2; l.length <= a;) l.push(0);
                        l[a] |= (o >>> 16 - 8 * i & 255) << 8 * (3 - c % 4), u += 1
                    }
                }
                return {value: l, binLen: 8 * u + n}
            }

            function u(e, t, n) {
                var a, r, i, o = [];
                o = t || [0];
                for (a = (n = n || 0) >>> 3, t = 0; t < e.byteLength; t += 1) r = (i = t + a) >>> 2, o.length <= r && o.push(0), o[r] |= e[t] << 8 * (3 - i % 4);
                return {value: o, binLen: 8 * e.byteLength + n}
            }

            function d(e, t, n) {
                var a, r, i = "";
                for (t /= 8, a = 0; a < t; a += 1) r = e[a >>> 2] >>> 8 * (3 - a % 4), i += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r);
                return n.outputUpper ? i.toUpperCase() : i
            }

            function h(e, t, n) {
                var a, r, i, o = "", s = t / 8;
                for (a = 0; a < s; a += 3) for (r = a + 1 < s ? e[a + 1 >>> 2] : 0, i = a + 2 < s ? e[a + 2 >>> 2] : 0, i = (e[a >>> 2] >>> 8 * (3 - a % 4) & 255) << 16 | (r >>> 8 * (3 - (a + 1) % 4) & 255) << 8 | i >>> 8 * (3 - (a + 2) % 4) & 255, r = 0; 4 > r; r += 1) o += 8 * a + 6 * r <= t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - r) & 63) : n.b64Pad;
                return o
            }

            function p(e, t) {
                var n, a, r = "", i = t / 8;
                for (n = 0; n < i; n += 1) a = e[n >>> 2] >>> 8 * (3 - n % 4) & 255, r += String.fromCharCode(a);
                return r
            }

            function g(e, t) {
                var n, a = t / 8, r = new ArrayBuffer(a);
                for (n = 0; n < a; n += 1) r[n] = e[n >>> 2] >>> 8 * (3 - n % 4) & 255;
                return r
            }

            function f(e) {
                var t = {outputUpper: !1, b64Pad: "=", shakeLen: -1};
                if (e = e || {}, t.outputUpper = e.outputUpper || !1, !0 === e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad), !0 === e.hasOwnProperty("shakeLen")) {
                    if (0 != e.shakeLen % 8) throw Error("shakeLen must be a multiple of 8");
                    t.shakeLen = e.shakeLen
                }
                if ("boolean" != typeof t.outputUpper) throw Error("Invalid outputUpper formatting option");
                if ("string" != typeof t.b64Pad) throw Error("Invalid b64Pad formatting option");
                return t
            }

            function m(e, t) {
                var n;
                switch (t) {
                    case"UTF8":
                    case"UTF16BE":
                    case"UTF16LE":
                        break;
                    default:
                        throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
                }
                switch (e) {
                    case"HEX":
                        n = s;
                        break;
                    case"TEXT":
                        n = function (e, n, a) {
                            var r, i, o, s, c, l = [], u = [], d = 0;
                            l = n || [0];
                            if (o = (n = a || 0) >>> 3, "UTF8" === t) for (r = 0; r < e.length; r += 1) for (u = [], 128 > (a = e.charCodeAt(r)) ? u.push(a) : 2048 > a ? (u.push(192 | a >>> 6), u.push(128 | 63 & a)) : 55296 > a || 57344 <= a ? u.push(224 | a >>> 12, 128 | a >>> 6 & 63, 128 | 63 & a) : (r += 1, a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(r)), u.push(240 | a >>> 18, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | 63 & a)), i = 0; i < u.length; i += 1) {
                                for (s = (c = d + o) >>> 2; l.length <= s;) l.push(0);
                                l[s] |= u[i] << 8 * (3 - c % 4), d += 1
                            } else if ("UTF16BE" === t || "UTF16LE" === t) for (r = 0; r < e.length; r += 1) {
                                for (a = e.charCodeAt(r), "UTF16LE" === t && (a = (i = 255 & a) << 8 | a >>> 8), s = (c = d + o) >>> 2; l.length <= s;) l.push(0);
                                l[s] |= a << 8 * (2 - c % 4), d += 2
                            }
                            return {value: l, binLen: 8 * d + n}
                        };
                        break;
                    case"B64":
                        n = l;
                        break;
                    case"BYTES":
                        n = c;
                        break;
                    case"ARRAYBUFFER":
                        try {
                            n = new ArrayBuffer(0)
                        } catch (e) {
                            throw Error("ARRAYBUFFER not supported by this environment")
                        }
                        n = u;
                        break;
                    default:
                        throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
                }
                return n
            }

            function A(e, t) {
                return e << t | e >>> 32 - t
            }

            function C(e, t) {
                return 32 < t ? (t -= 32, new o(e.b << t | e.a >>> 32 - t, e.a << t | e.b >>> 32 - t)) : 0 !== t ? new o(e.a << t | e.b >>> 32 - t, e.b << t | e.a >>> 32 - t) : e
            }

            function b(e, t) {
                return e >>> t | e << 32 - t
            }

            function v(e, t) {
                var n = null;
                n = new o(e.a, e.b);
                return 32 >= t ? new o(n.a >>> t | n.b << 32 - t & 4294967295, n.b >>> t | n.a << 32 - t & 4294967295) : new o(n.b >>> t - 32 | n.a << 64 - t & 4294967295, n.a >>> t - 32 | n.b << 64 - t & 4294967295)
            }

            function E(e, t) {
                return 32 >= t ? new o(e.a >>> t, e.b >>> t | e.a << 32 - t & 4294967295) : new o(0, e.a >>> t - 32)
            }

            function w(e, t, n) {
                return e & t ^ ~e & n
            }

            function S(e, t, n) {
                return new o(e.a & t.a ^ ~e.a & n.a, e.b & t.b ^ ~e.b & n.b)
            }

            function I(e, t, n) {
                return e & t ^ e & n ^ t & n
            }

            function O(e, t, n) {
                return new o(e.a & t.a ^ e.a & n.a ^ t.a & n.a, e.b & t.b ^ e.b & n.b ^ t.b & n.b)
            }

            function B(e) {
                return b(e, 2) ^ b(e, 13) ^ b(e, 22)
            }

            function y(e) {
                var t = v(e, 28), n = v(e, 34);
                return e = v(e, 39), new o(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b)
            }

            function j(e) {
                return b(e, 6) ^ b(e, 11) ^ b(e, 25)
            }

            function k(e) {
                var t = v(e, 14), n = v(e, 18);
                return e = v(e, 41), new o(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b)
            }

            function Q(e) {
                return b(e, 7) ^ b(e, 18) ^ e >>> 3
            }

            function T(e) {
                var t = v(e, 1), n = v(e, 8);
                return e = E(e, 7), new o(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b)
            }

            function N(e) {
                return b(e, 17) ^ b(e, 19) ^ e >>> 10
            }

            function R(e) {
                var t = v(e, 19), n = v(e, 61);
                return e = E(e, 6), new o(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b)
            }

            function M(e, t) {
                var n = (65535 & e) + (65535 & t);
                return ((e >>> 16) + (t >>> 16) + (n >>> 16) & 65535) << 16 | 65535 & n
            }

            function D(e, t, n, a) {
                var r = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & a);
                return ((e >>> 16) + (t >>> 16) + (n >>> 16) + (a >>> 16) + (r >>> 16) & 65535) << 16 | 65535 & r
            }

            function V(e, t, n, a, r) {
                var i = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & a) + (65535 & r);
                return ((e >>> 16) + (t >>> 16) + (n >>> 16) + (a >>> 16) + (r >>> 16) + (i >>> 16) & 65535) << 16 | 65535 & i
            }

            function F(e, t) {
                var n, a, r;
                return n = (65535 & e.b) + (65535 & t.b), r = (65535 & (a = (e.b >>> 16) + (t.b >>> 16) + (n >>> 16))) << 16 | 65535 & n, n = (65535 & e.a) + (65535 & t.a) + (a >>> 16), new o((65535 & (a = (e.a >>> 16) + (t.a >>> 16) + (n >>> 16))) << 16 | 65535 & n, r)
            }

            function P(e, t, n, a) {
                var r, i, s;
                return r = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & a.b), s = (65535 & (i = (e.b >>> 16) + (t.b >>> 16) + (n.b >>> 16) + (a.b >>> 16) + (r >>> 16))) << 16 | 65535 & r, r = (65535 & e.a) + (65535 & t.a) + (65535 & n.a) + (65535 & a.a) + (i >>> 16), new o((65535 & (i = (e.a >>> 16) + (t.a >>> 16) + (n.a >>> 16) + (a.a >>> 16) + (r >>> 16))) << 16 | 65535 & r, s)
            }

            function U(e, t, n, a, r) {
                var i, s, c;
                return i = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & a.b) + (65535 & r.b), c = (65535 & (s = (e.b >>> 16) + (t.b >>> 16) + (n.b >>> 16) + (a.b >>> 16) + (r.b >>> 16) + (i >>> 16))) << 16 | 65535 & i, i = (65535 & e.a) + (65535 & t.a) + (65535 & n.a) + (65535 & a.a) + (65535 & r.a) + (s >>> 16), new o((65535 & (s = (e.a >>> 16) + (t.a >>> 16) + (n.a >>> 16) + (a.a >>> 16) + (r.a >>> 16) + (i >>> 16))) << 16 | 65535 & i, c)
            }

            function z(e) {
                var t, n = 0, a = 0;
                for (t = 0; t < arguments.length; t += 1) n ^= arguments[t].b, a ^= arguments[t].a;
                return new o(a, n)
            }

            function L(e) {
                var t, n = [];
                if ("SHA-1" === e) n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]; else if (0 === e.lastIndexOf("SHA-", 0)) switch (n = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], e) {
                    case"SHA-224":
                        break;
                    case"SHA-256":
                        n = t;
                        break;
                    case"SHA-384":
                        n = [new o(3418070365, n[0]), new o(1654270250, n[1]), new o(2438529370, n[2]), new o(355462360, n[3]), new o(1731405415, n[4]), new o(41048885895, n[5]), new o(3675008525, n[6]), new o(1203062813, n[7])];
                        break;
                    case"SHA-512":
                        n = [new o(t[0], 4089235720), new o(t[1], 2227873595), new o(t[2], 4271175723), new o(t[3], 1595750129), new o(t[4], 2917565137), new o(t[5], 725511199), new o(t[6], 4215389547), new o(t[7], 327033209)];
                        break;
                    default:
                        throw Error("Unknown SHA variant")
                } else {
                    if (0 !== e.lastIndexOf("SHA3-", 0) && 0 !== e.lastIndexOf("SHAKE", 0)) throw Error("No SHA variants supported");
                    for (e = 0; 5 > e; e += 1) n[e] = [new o(0, 0), new o(0, 0), new o(0, 0), new o(0, 0), new o(0, 0)]
                }
                return n
            }

            function x(e, t) {
                var n, a, r, i, o, s, c, l = [];
                for (n = t[0], a = t[1], r = t[2], i = t[3], o = t[4], c = 0; 80 > c; c += 1) l[c] = 16 > c ? e[c] : A(l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16], 1), s = 20 > c ? V(A(n, 5), a & r ^ ~a & i, o, 1518500249, l[c]) : 40 > c ? V(A(n, 5), a ^ r ^ i, o, 1859775393, l[c]) : 60 > c ? V(A(n, 5), I(a, r, i), o, 2400959708, l[c]) : V(A(n, 5), a ^ r ^ i, o, 3395469782, l[c]), o = i, i = r, r = A(a, 30), a = n, n = s;
                return t[0] = M(n, t[0]), t[1] = M(a, t[1]), t[2] = M(r, t[2]), t[3] = M(i, t[3]), t[4] = M(o, t[4]), t
            }

            function H(e, t, n, a) {
                var r;
                for (r = 15 + (t + 65 >>> 9 << 4); e.length <= r;) e.push(0);
                for (e[t >>> 5] |= 128 << 24 - t % 32, t += n, e[r] = 4294967295 & t, e[r - 1] = t / 4294967296 | 0, t = e.length, r = 0; r < t; r += 16) a = x(e.slice(r, r + 16), a);
                return a
            }

            function J(e, t, n) {
                var a, r, i, s, c, l, u, d, h, p, g, f, m, A, C, b, v, E, z, L, x, H, J, q = [];
                if ("SHA-224" === n || "SHA-256" === n) p = 64, f = 1, H = Number, m = M, A = D, C = V, b = Q, v = N, E = B, z = j, x = I, L = w, J = K; else {
                    if ("SHA-384" !== n && "SHA-512" !== n) throw Error("Unexpected error in SHA-2 implementation");
                    p = 80, f = 2, H = o, m = F, A = P, C = U, b = T, v = R, E = y, z = k, x = O, L = S, J = W
                }
                for (n = t[0], a = t[1], r = t[2], i = t[3], s = t[4], c = t[5], l = t[6], u = t[7], g = 0; g < p; g += 1) 16 > g ? (h = g * f, d = e.length <= h ? 0 : e[h], h = e.length <= h + 1 ? 0 : e[h + 1], q[g] = new H(d, h)) : q[g] = A(v(q[g - 2]), q[g - 7], b(q[g - 15]), q[g - 16]), d = C(u, z(s), L(s, c, l), J[g], q[g]), h = m(E(n), x(n, a, r)), u = l, l = c, c = s, s = m(i, d), i = r, r = a, a = n, n = m(d, h);
                return t[0] = m(n, t[0]), t[1] = m(a, t[1]), t[2] = m(r, t[2]), t[3] = m(i, t[3]), t[4] = m(s, t[4]), t[5] = m(c, t[5]), t[6] = m(l, t[6]), t[7] = m(u, t[7]), t
            }

            function q(e, t) {
                var n, a, r, i, s = [], c = [];
                if (null !== e) for (a = 0; a < e.length; a += 2) t[(a >>> 1) % 5][(a >>> 1) / 5 | 0] = z(t[(a >>> 1) % 5][(a >>> 1) / 5 | 0], new o((255 & e[a + 1]) << 24 | (65280 & e[a + 1]) << 8 | (16711680 & e[a + 1]) >>> 8 | e[a + 1] >>> 24, (255 & e[a]) << 24 | (65280 & e[a]) << 8 | (16711680 & e[a]) >>> 8 | e[a] >>> 24));
                for (n = 0; 24 > n; n += 1) {
                    for (i = L("SHA3-"), a = 0; 5 > a; a += 1) s[a] = z(t[a][0], t[a][1], t[a][2], t[a][3], t[a][4]);
                    for (a = 0; 5 > a; a += 1) c[a] = z(s[(a + 4) % 5], C(s[(a + 1) % 5], 1));
                    for (a = 0; 5 > a; a += 1) for (r = 0; 5 > r; r += 1) t[a][r] = z(t[a][r], c[a]);
                    for (a = 0; 5 > a; a += 1) for (r = 0; 5 > r; r += 1) i[r][(2 * a + 3 * r) % 5] = C(t[a][r], Z[a][r]);
                    for (a = 0; 5 > a; a += 1) for (r = 0; 5 > r; r += 1) t[a][r] = z(i[a][r], new o(~i[(a + 1) % 5][r].a & i[(a + 2) % 5][r].a, ~i[(a + 1) % 5][r].b & i[(a + 2) % 5][r].b));
                    t[0][0] = z(t[0][0], Y[n])
                }
                return t
            }

            var K, W, Z, Y;
            W = [new o((K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])[0], 3609767458), new o(K[1], 602891725), new o(K[2], 3964484399), new o(K[3], 2173295548), new o(K[4], 4081628472), new o(K[5], 3053834265), new o(K[6], 2937671579), new o(K[7], 3664609560), new o(K[8], 2734883394), new o(K[9], 1164996542), new o(K[10], 1323610764), new o(K[11], 3590304994), new o(K[12], 4068182383), new o(K[13], 991336113), new o(K[14], 633803317), new o(K[15], 3479774868), new o(K[16], 2666613458), new o(K[17], 944711139), new o(K[18], 2341262773), new o(K[19], 2007800933), new o(K[20], 1495990901), new o(K[21], 1856431235), new o(K[22], 3175218132), new o(K[23], 2198950837), new o(K[24], 3999719339), new o(K[25], 766784016), new o(K[26], 2566594879), new o(K[27], 3203337956), new o(K[28], 1034457026), new o(K[29], 2466948901), new o(K[30], 3758326383), new o(K[31], 168717936), new o(K[32], 1188179964), new o(K[33], 1546045734), new o(K[34], 1522805485), new o(K[35], 2643833823), new o(K[36], 2343527390), new o(K[37], 1014477480), new o(K[38], 1206759142), new o(K[39], 344077627), new o(K[40], 1290863460), new o(K[41], 3158454273), new o(K[42], 3505952657), new o(K[43], 106217008), new o(K[44], 3606008344), new o(K[45], 1432725776), new o(K[46], 1467031594), new o(K[47], 851169720), new o(K[48], 3100823752), new o(K[49], 1363258195), new o(K[50], 3750685593), new o(K[51], 3785050280), new o(K[52], 3318307427), new o(K[53], 3812723403), new o(K[54], 2003034995), new o(K[55], 3602036899), new o(K[56], 1575990012), new o(K[57], 1125592928), new o(K[58], 2716904306), new o(K[59], 442776044), new o(K[60], 593698344), new o(K[61], 3733110249), new o(K[62], 2999351573), new o(K[63], 3815920427), new o(3391569614, 3928383900), new o(3515267271, 566280711), new o(3940187606, 3454069534), new o(4118630271, 4000239992), new o(116418474, 1914138554), new o(174292421, 2731055270), new o(289380356, 3203993006), new o(460393269, 320620315), new o(685471733, 587496836), new o(852142971, 1086792851), new o(1017036298, 365543100), new o(1126000580, 2618297676), new o(1288033470, 3409855158), new o(1501505948, 4234509866), new o(1607167915, 987167468), new o(1816402316, 1246189591)], Y = [new o(0, 1), new o(0, 32898), new o(2147483648, 32906), new o(2147483648, 2147516416), new o(0, 32907), new o(0, 2147483649), new o(2147483648, 2147516545), new o(2147483648, 32777), new o(0, 138), new o(0, 136), new o(0, 2147516425), new o(0, 2147483658), new o(0, 2147516555), new o(2147483648, 139), new o(2147483648, 32905), new o(2147483648, 32771), new o(2147483648, 32770), new o(2147483648, 128), new o(0, 32778), new o(2147483648, 2147483658), new o(2147483648, 2147516545), new o(2147483648, 32896), new o(0, 2147483649), new o(2147483648, 2147516424)], Z = [[0, 36, 3, 41, 18], [1, 44, 10, 45, 2], [62, 6, 43, 15, 61], [28, 55, 25, 21, 56], [27, 20, 39, 8, 14]], void 0 === (a = function () {
                return i
            }.call(t, n, t, e)) || (e.exports = a)
        }()
    }, 1710: function (e, t, n) {
    }, 1711: function (e, t, n) {
    }, 1712: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({
                width: "116",
                height: "116",
                viewBox: "0 0 116 116"
            }, e), r.default.createElement("path", {d: "M58 106c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm0-5c23.748 0 43-19.252 43-43S81.748 15 58 15 15 34.252 15 58s19.252 43 43 43zm-7.495-32.502L80.113 38.89a3.017 3.017 0 0 1 4.262-.017c1.184 1.176 1.17 3.075-.015 4.26l-31.71 31.71c-1.183 1.182-3.096 1.194-4.27.02l-12.52-12.52a2.997 2.997 0 0 1-.008-4.24 2.996 2.996 0 0 1 4.242.008L50.507 68.5z"}))
        };
        t.default = o
    }, 1713: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({
                width: "116",
                height: "116",
                viewBox: "0 0 116 116"
            }, e), r.default.createElement("path", {
                d: "M58 106c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm0-5c23.748 0 43-19.252 43-43S81.748 15 58 15 15 34.252 15 58s19.252 43 43 43zm-4-19c0-2.21 1.795-4 4-4 2.21 0 4 1.795 4 4 0 2.21-1.795 4-4 4-2.21 0-4-1.795-4-4zm1-48.993A3.006 3.006 0 0 1 58 30c1.657 0 3 1.334 3 3.007v36.986A3.006 3.006 0 0 1 58 73c-1.657 0-3-1.334-3-3.007V33.007z",
                fillRule: "evenodd"
            }))
        };
        t.default = o
    }, 1714: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({
                width: "52",
                height: "52",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e), r.default.createElement("defs", null, r.default.createElement("path", {
                id: "id-14580708-a",
                d: "M0 0h48a4 4 0 0 1 4 4v48L0 0z"
            })), r.default.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.default.createElement("mask", {
                id: "id-14580708-b",
                fill: "#fff"
            }, r.default.createElement("use", {xlinkHref: "#id-14580708-a"})), r.default.createElement("use", {
                fill: "#0084FF",
                xlinkHref: "#id-14580708-a"
            }), r.default.createElement("path", {
                fill: "#FFF",
                d: "M22.125 4h13.75A4.125 4.125 0 0 1 40 8.125v27.75A4.125 4.125 0 0 1 35.875 40h-13.75A4.125 4.125 0 0 1 18 35.875V8.125A4.125 4.125 0 0 1 22.125 4zm6.938 34.222c1.139 0 2.062-.945 2.062-2.11 0-1.167-.923-2.112-2.063-2.112-1.139 0-2.062.945-2.062 2.111 0 1.166.923 2.111 2.063 2.111zM21 8.333v24h16v-24H21z",
                mask: "url(#id-14580708-b)"
            }), r.default.createElement("g", {mask: "url(#id-14580708-b)"}, r.default.createElement("path", {
                fill: "#FFF",
                d: "M46.996 15.482L39 19.064l-7.996-3.582A1.6 1.6 0 0 1 32.6 14h12.8a1.6 1.6 0 0 1 1.596 1.482zM47 16.646V24.4a1.6 1.6 0 0 1-1.6 1.6H32.6a1.6 1.6 0 0 1-1.6-1.6v-7.754l8 3.584 8-3.584z"
            }), r.default.createElement("path", {
                fill: "#0084FF",
                d: "M31 15.483v1.17l8 3.577 8-3.577v-1.17l-8 3.581z",
                fillRule: "nonzero"
            }))))
        };
        t.default = o
    }, 1715: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({
                width: "52",
                height: "52",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e), r.default.createElement("defs", null, r.default.createElement("path", {
                id: "id-3938311804-a",
                d: "M0 0h48a4 4 0 0 1 4 4v48L0 0z"
            })), r.default.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.default.createElement("mask", {
                id: "id-3938311804-b",
                fill: "#fff"
            }, r.default.createElement("use", {xlinkHref: "#id-3938311804-a"})), r.default.createElement("use", {
                fill: "#0084FF",
                xlinkHref: "#id-3938311804-a"
            }), r.default.createElement("image", {
                width: "52",
                height: "52",
                mask: "url(#id-3938311804-b)",
                xlinkHref: "data:image/png;base64,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"
            })))
        };
        t.default = o
    }, 1716: function (e, t, n) {
    }, 1717: function (e, t, n) {
        "use strict";
        var a = n(80);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = a(n(2)), i = a(n(519)), o = function (e) {
            return r.default.createElement(i.default, Object.assign({
                width: "20",
                height: "20"
            }, e), r.default.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.default.createElement("path", {
                fill: "#0084FF",
                d: "M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"
            }), r.default.createElement("path", {d: "M0 0h20v20H0z"}), r.default.createElement("path", {
                fill: "#FFF",
                d: "M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"
            })))
        };
        t.default = o
    }, 1718: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.a.createElement("path", {
                fill: "#0F88EB",
                d: "M2.64 13.39c1.068.895 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 2.4 2.24 2.278l-.198.016c1.387-.122 3.21.655 4.083 1.734l-.125-.154c.876 1.084 2.304 1.092 3.195.027l-.127.152c.895-1.068 2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.279-2.238l.017.197c-.122-1.388.655-3.212 1.734-4.084l-.154.125c1.083-.876 1.092-2.304.027-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.279l.198-.017c-1.387.123-3.21-.654-4.083-1.733l.125.153c-.876-1.083-2.304-1.092-3.195-.027l.127-.152c-.895 1.068-2.733 1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.279 2.24L4.4 6.363c.122 1.387-.655 3.21-1.734 4.084l.154-.126c-1.083.878-1.092 2.304-.027 3.195l-.152-.127z"
            }), r.a.createElement("path", {
                fill: "#FFF",
                d: "M9.78 15.728l-2.633-2.999s-.458-.705.242-1.362c.7-.657 1.328-.219 1.328-.219l1.953 2.132 4.696-4.931s.663-.348 1.299.198c.636.545.27 1.382.27 1.382s-3.466 3.858-5.376 5.782c-.98.93-1.778.017-1.778.017z"
            })))
        };
        o.defaultProps = {name: "BadgeCert"}, t.a = o
    }, 1816: function (e, t, n) {
        "use strict";
        var a = n(6), r = n(10), i = n(9), o = n(7), s = n(8), c = n(0), l = n(2), u = n.n(l), d = n(15), h = n.n(d),
            p = n(205), g = n(22), f = n(215), m = n(1), A = n(39), C = n(24), b = n(328), v = n(21), E = n(1149),
            w = n(817), S = n(19), I = n(366), O = n(103), B = n(1077), y = n(1419), j = n(1352), k = n(326), Q = n(17),
            T = n(25), N = n(3), R = n.n(N), M = n(1523), D = n(1524), V = n(1103);
        n(1707);

        function F() {
            var e = Object(k.a)(["", " 秒后可重发"]);
            return F = function () {
                return e
            }, e
        }

        var P = function (e) {
            function t() {
                return Object(a.a)(this, t), Object(i.a)(this, Object(o.a)(t).apply(this, arguments))
            }

            return Object(s.a)(t, e), Object(r.a)(t, [{
                key: "render", value: function () {
                    var e, t = this.props, n = t.countDownEvent, a = t.countDownEndEvent, r = t.startAtOnce,
                        i = t.interceptTime, o = t.isEmail, s = t.reStartTime, l = t.smsType,
                        u = Object(T.a)(t, ["countDownEvent", "countDownEndEvent", "startAtOnce", "interceptTime", "isEmail", "reStartTime", "smsType"]);
                    return e = o ? "邮箱" : "voice" === l ? "语音" : "短信", Object(c.d)("div", {className: "SignFlow SignFlow-smsInputContainer"}, Object(c.d)(V.a, Object(Q.default)({
                        name: "digits",
                        className: "SignFlow-smsInput",
                        type: "number",
                        smsType: l,
                        errorMessageClassName: "SignFlow-smsInputErrorMessage",
                        placeholder: "输入 6 位".concat(e, "验证码"),
                        validations: [{
                            type: "required",
                            message: "请输入".concat(e, "验证码"),
                            className: "SignFlow-smsInputRequiredErrorMask"
                        }]
                    }, u)), Object(c.d)(M.a, {
                        className: "SignFlow-smsInputButton",
                        preset: "plain",
                        initialText: "获取".concat(e, "验证码"),
                        resetText: "重新获取".concat(e, "验证码"),
                        countingText: Object(D.a)(F(), "count"),
                        startAtOnce: r,
                        event: n,
                        countDownEndEvent: a,
                        interceptTime: i,
                        reStartTime: s
                    }))
                }
            }]), t
        }(l.Component);
        P.propTypes = {
            countDownEvent: R.a.func.isRequired,
            startAtOnce: R.a.bool,
            interceptTime: R.a.number,
            reStartTime: R.a.number,
            isEmail: R.a.bool,
            countDownEndEvent: R.a.func,
            smsType: R.a.string
        }, P.defaultProps = {startAtOnce: !1, isEmail: !1};
        var U, z = P, L = n(1437), x = n(1355), H = n(45), J = n.n(H),
            q = (n(1708), {phoneNoError: null, fullnameError: null, passwordError: null, digitsError: null}),
            K = (Object(w.b)(function () {
                return {module: "SignUpForm", view: {id: 233}, trackCardShow: !0}
            })(U = Object(C.connect)(function (e) {
                var t = e.captcha, n = t.captchaNeeded, a = t.captchaValidationMessage, r = e.register;
                return {
                    captchaNeeded: n,
                    sendDigitsError: r.sendDigitsError,
                    registerValidateErrors: r.registerValidateErrors,
                    captchaValidationMessage: a,
                    registerConfirmSucceeded: r.registerConfirmSucceeded
                }
            }, {
                sendDigits: I.e,
                checkCaptcha: O.b,
                validateDigits: I.g,
                confirmRegister: I.a,
                validateRegister: I.h,
                validateRegisterForm: I.i,
                resetRegisterValidateResult: I.d
            })(U = function (e) {
                function t(e) {
                    var n;
                    return Object(a.a)(this, t), (n = Object(i.a)(this, Object(o.a)(t).call(this, e))).handleCountDownEndEvent = function () {
                        n.setState({smsBackUpDisplay: !0})
                    }, n.handleChange = function (e) {
                        return function (t) {
                            n.setState(Object(m.a)({}, e, t))
                        }
                    }, n.testPhoneNo = function () {
                        var e = n.state, t = e.selectedCountry.code, a = e.phoneNo;
                        return "+86" !== t || /^\d{11}$/.test(a)
                    }, n.handleBackUpDigits = function () {
                        n.setState({smsType: "text" === n.state.smsType ? "voice" : "text", reStartTime: Date.now()})
                    }, n.sendDigits = function () {
                        var e = n.props, t = e.sendDigits, a = e.validateRegisterForm;
                        (0, e.resetRegisterValidateResult)();
                        var r = n.state, i = r.phoneNo, o = r.selectedCountry, s = r.smsType,
                            c = "".concat(o.code).concat(i);
                        a({phoneNo: c}).then(function (e) {
                            if (e.payload.success) return n.setState({smsBackUpDisplay: !1}), void t(c, s);
                            n.setState({smsInputInterceptTime: Date.now()})
                        })
                    }, n.runBeforeCheckCaptcha = function (e) {
                        var t = n.state.captcha, a = n.props, r = a.captchaNeeded, i = a.checkCaptcha;
                        if (!n.captchaValidated && r) return t ? void i(t, n.captchaIsChinese ? "cn" : "en").then(function (t) {
                            t.payload.success && (n.captchaValidated = !0, e())
                        }) : void n.setState({
                            validationResult: {
                                message: n.captchaIsChinese ? "请点击图中倒立的文字" : "请输入验证码",
                                needsRefresh: !1,
                                timestamp: Date.now()
                            }, smsInputInterceptTime: Date.now()
                        });
                        e()
                    }, n.runBeforeResetValidateResult = function (e) {
                        n.props.resetRegisterValidateResult(), n.setState({
                            customErrorInputMap: Object.assign({}, q),
                            validationResult: {needsRefresh: !1, timestamp: Date.now()}
                        }, function () {
                            e()
                        })
                    }, n.handleSendDigits = function () {
                        g.default.trackEvent(Object(A.default)(n), {id: 4940}), n.runBeforeResetValidateResult(function () {
                            var e = n.state.phoneNo;
                            n.testPhoneNo() ? n.runBeforeResetValidateResult(function () {
                                n.runBeforeCheckCaptcha(function () {
                                    n.sendDigits()
                                })
                            }) : n.setState({
                                customErrorInputMap: Object.assign({}, n.state.customErrorInputMap, {phoneNoError: e ? "请输入正确的手机号" : "请输入手机号"}),
                                smsInputInterceptTime: Date.now()
                            })
                        })
                    }, n.parseErrorMessages = function () {
                        var e = n.props, t = e.registerValidateErrors, a = void 0 === t ? {} : t, r = e.onChangeToSigin,
                            i = a.phoneNo, o = void 0 === i ? {} : i, s = a.fullname, l = void 0 === s ? {} : s,
                            u = a.password, d = void 0 === u ? {} : u, h = a.username, p = void 0 === h ? "" : h,
                            g = o.code, f = o.message;
                        return {
                            phoneNoError: g === S.r ? Object(c.d)("span", null, "该手机号已注册 · ", Object(c.d)(v.c, {
                                preset: "plain",
                                style: {color: "#3f3f3f"},
                                onClick: function () {
                                    r()
                                }
                            }, "直接登录")) : f, fullnameError: l.message, passwordError: d.message, usernameError: p
                        }
                    }, n.handlePhoneNumberFormSubmit = function (e) {
                        g.default.trackEvent(Object(A.default)(n), {id: 4942}), n.runBeforeCheckCaptcha(function () {
                            n.runBeforeResetValidateResult(function () {
                                var t = e.digits, a = n.props, r = a.validateDigits, i = a.onSetShowHeader, o = n.state,
                                    s = o.phoneNo, c = o.selectedCountry;
                                s && t && r("".concat(c.code).concat(s), t).then(function (e) {
                                    e.payload.success ? n.setState({digitsValidated: !0}, function () {
                                        i(!1)
                                    }) : n.setState({customErrorInputMap: Object.assign({}, n.state.customErrorInputMap, {digitsError: "验证码填写错误"})})
                                })
                            })
                        })
                    }, n.handleSetNameFormSubmit = function (e) {
                        n.runBeforeCheckCaptcha(function () {
                            n.runBeforeResetValidateResult(function () {
                                var t = n.state, a = t.phoneNo, r = t.digits, i = t.password, o = t.fullname,
                                    s = t.selectedCountry, c = n.props, l = c.confirmRegister, u = c.validateRegister,
                                    d = c.nextUrl,
                                    h = {phoneNo: "".concat(s.code).concat(a), password: i, digits: r, fullname: o},
                                    p = Object(b.d)(d), g = p.utm_source, f = p.utm_medium;
                                u(h).then(function (t) {
                                    t.payload.success && l({
                                        phoneNo: "".concat(s.code).concat(a),
                                        digits: r,
                                        password: i,
                                        fullname: o || e.fullname,
                                        registerType: "phone_digits",
                                        source: "com.zhihu.web",
                                        utmSource: g,
                                        refSource: f
                                    })
                                })
                            })
                        })
                    }, n.state = {
                        fullname: "",
                        password: "",
                        captcha: "",
                        phoneNo: "",
                        digits: "",
                        smsType: "text",
                        digitsValidated: !1,
                        smsBackUpDisplay: !0,
                        selectedCountry: {name: "中国", code: "+86"},
                        validationResult: {},
                        customErrorInputMap: Object.assign({}, q),
                        smsInputInterceptTime: -1,
                        reStartTime: Date.now()
                    }, n.captchaIsChinese = Math.random() < .5, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.captchaValidationMessage, a = t.registerConfirmSucceeded,
                            r = t.sendDigitsError, i = t.isInSignPage, o = t.nextUrl, s = e.captchaValidationMessage,
                            c = e.registerConfirmSucceeded, l = e.sendDigitsError;
                        if (!a && c) {
                            var u = this.state, d = u.selectedCountry.code, h = u.phoneNo;
                            return g.default.trackEvent(this, {
                                action: "StatusReport",
                                id: 234
                            }, {
                                status: {result: "Success", event: {action: "SignUp", element: "Button"}},
                                account: {phone: "".concat(d).concat(h), type: "Zhihu"}
                            }), void(o ? location.href = o : i ? location.href = "/" : location.reload())
                        }
                        if (!r && l || a !== c && !1 === c) {
                            var p = {};
                            !r && l && (p = {
                                smsInputInterceptTime: Date.now(),
                                smsBackUpDisplay: !0
                            }, this.captchaValidated = !1), this.setState(Object.assign({}, p, {
                                validationResult: {
                                    message: r,
                                    needsRefresh: !0,
                                    timestamp: Date.now()
                                }
                            }))
                        }
                        !n && s && this.setState({
                            smsInputInterceptTime: Date.now(),
                            validationResult: {message: s, needsRefresh: Boolean(s), timestamp: Date.now()}
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state, n = t.phoneNo, a = t.smsType, r = t.password, i = t.reStartTime,
                            o = t.digitsValidated, s = t.validationResult, l = t.smsBackUpDisplay,
                            d = t.customErrorInputMap, p = t.smsInputInterceptTime, f = this.props,
                            m = f.sendDigitsError, A = f.onSetShowHeader, C = this.parseErrorMessages(),
                            b = C.phoneNoError, w = C.fullnameError, S = C.passwordError, I = C.usernameError,
                            O = d.phoneNoError, k = d.digitsError;
                        return Object(c.d)("div", {className: "Register"}, o ? Object(c.d)("div", {className: "Register-padName"}, Object(c.d)("div", {className: "Register-padNameHeader"}, Object(c.d)(v.c, {
                            onClick: function () {
                                e.setState({digitsValidated: !1}, function () {
                                    A(!0)
                                })
                            }
                        }, Object(c.d)(E.a, {size: 30})), Object(c.d)("span", {className: "Register-padNameTitle"}, "设置用户名和密码")), Object(c.d)(B.b, {onSubmit: this.handleSetNameFormSubmit}, Object(c.d)(x.a, {
                            name: "fullname",
                            placeholder: "用户名",
                            onChange: this.handleChange("fullname"),
                            manualValidateError: w
                        }), Object(c.d)(L.a, {
                            defaultValue: r,
                            onChange: this.handleChange("password"),
                            manualValidateError: S
                        }), Object(c.d)(v.c, {
                            className: "Register-getIn",
                            type: "submit",
                            preset: "primary",
                            color: "blue"
                        }, "进入知乎"))) : Object(c.d)(u.a.Fragment, null, Object(c.d)("div", {className: "Register-content"}, Object(c.d)(B.b, {onSubmit: this.handlePhoneNumberFormSubmit}, Object(c.d)(j.a, {
                            type: "register",
                            onChange: this.handleChange("phoneNo"),
                            onSelect: this.handleChange("selectedCountry"),
                            manualValidateError: b || O || I
                        }), Object(c.d)(y.a, {
                            className: "SignFlow-captchaContainer Register-captcha",
                            type: "register",
                            isChinese: this.captchaIsChinese,
                            canCaptchaShown: Boolean(n),
                            onUpdateInput: this.handleChange("captcha"),
                            validationResult: s
                        }), Object(c.d)("div", {className: "Register-SMSInput"}, Object(c.d)(z, {
                            smsType: a,
                            reStartTime: i,
                            onChange: this.handleChange("digits"),
                            countDownEvent: this.handleSendDigits,
                            countDownEndEvent: this.handleCountDownEndEvent,
                            interceptTime: p,
                            manualValidateError: k || m
                        }), Object(c.d)("div", {className: h()("Register-smsBackUp", {"Register-hiddenSmsBackUp": !l})}, Object(c.d)("span", {onClick: this.handleBackUpDigits}, "接收", "text" === a ? "语音" : "短信", "验证码"))), Object(c.d)(v.c, {
                            className: "Register-submitButton",
                            preset: "primary",
                            color: "blue",
                            type: "submit"
                        }, "注册")), Object(c.d)("div", {className: "Register-footer"}, Object(c.d)("span", {className: "Register-declaration"}, "注册即代表同意", Object(c.d)("a", {href: "//".concat(J.a.wwwHost, "/term/zhihu-terms")}, "《知乎协议》"), Object(c.d)("a", {href: "//".concat(J.a.wwwHost, "/term/privacy")}, "《隐私保护指引》")), Object(c.d)("a", {
                            className: "Register-org",
                            href: "//".concat(J.a.wwwHost, "/org/signup"),
                            onClick: function (e) {
                                return g.default.trackEvent(e.currentTarget, {id: 4943})
                            }
                        }, "注册机构号")))))
                    }
                }]), t
            }(l.Component)) || U), n(1585), n(164)), W = n.n(K), Z = n(377), Y = n(20), G = n(1709), _ = n.n(G),
            X = "c3cef7c66a1843f8b3a9e6a1e3160e20";
        "".concat("z_").concat("c0"), "".concat("SZYUpkoc0tvY").concat("Xh0V2E2UTB").concat("UID096dwe");
        var $, ee = function (e, t) {
            var n = Date.now(), a = new _.a("SHA-1", "TEXT");
            return a.setHMACKey("d1b964811afb40118a12068ff74a12f4", "TEXT"), a.update(e), a.update(X), a.update("com.zhihu.web"), a.update(String(n)), Object.assign({
                clientId: X,
                grantType: e,
                timestamp: n,
                source: "com.zhihu.web",
                signature: a.getHMAC("HEX")
            }, t)
        }, te = {phoneNoError: null, fullnameError: null, digitsError: null}, ne = Object(C.connect)(function (e) {
            var t = e.captcha, n = t.captchaNeeded, a = t.captchaValidationMessage, r = e.register,
                i = r.registerConfirmError, o = r.registerValidateErrors, s = r.registerConfirmSucceeded, c = e.login,
                l = c.loginConfirmSucceeded, u = c.validateDigitsError, d = c.loginConfirmError;
            return {
                captchaNeeded: n,
                sendDigitsError: c.sendDigitsError,
                registerConfirmError: i,
                registerValidateErrors: o,
                captchaValidationMessage: a,
                registerConfirmSucceeded: s,
                loginConfirmSucceeded: l,
                validateDigitsError: u,
                loginConfirmError: d
            }
        }, {
            showNotification: Y.h,
            checkCaptcha: O.b,
            validateDigits: Z.i,
            sendLoginDigits: Z.g,
            validateAndLogin: Z.h,
            validateAndRegister: I.f,
            getSocialInfo: I.c,
            validateRegisterForm: I.i,
            resetLoginValidateResult: Z.f,
            resetRegisterValidateResult: I.d
        })($ = function (e) {
            function t() {
                var e, n;
                Object(a.a)(this, t);
                for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {
                    fullname: n.props.defaultFullname || "",
                    avatarPath: "",
                    phoneNo: "",
                    digits: "",
                    captcha: "",
                    isRegister: null,
                    smsBackUpDisplay: !0,
                    smsType: "text",
                    selectedCountry: {name: "中国", code: "+86"},
                    smsInputInterceptTime: -1,
                    reStartTime: -1,
                    customErrorInputMap: Object.assign({}, te),
                    validationResult: {}
                }, n.captchaIsChinese = Math.random() < .5, n.getSocialInfo = function (e) {
                    var t = e || n.props, a = t.getSocialInfo, r = t.socialType;
                    r && a(r).then(function (e) {
                        var t = e.payload, a = t.name, r = t.profileImageUrl;
                        n.setState({avatarPath: r.split("/").reverse()[0], fullname: a})
                    })
                }, n.testPhoneNo = function () {
                    var e = n.state, t = e.selectedCountry.code, a = e.phoneNo;
                    return "+86" !== t || /^\d{11}$/.test(a)
                }, n.handleChange = function (e) {
                    return function (t) {
                        n.setState(Object(m.a)({}, e, t))
                    }
                }, n.handleBackUpDigits = function () {
                    n.setState({smsType: "text" === n.state.smsType ? "voice" : "text", reStartTime: Date.now()})
                }, n.handleCountDownEndEvent = function () {
                    n.setState({smsBackUpDisplay: !0})
                }, n.parseServerError = function (e) {
                    var t = e || n.props, a = t.showNotification, r = t.registerValidateErrors, i = t.loginConfirmError,
                        o = t.registerConfirmError, s = t.sendDigitsError, c = i || {}, l = c.username, u = c.password,
                        d = c.digits, h = c.captcha, p = o || {}, g = p.username, f = p.password, m = p.digits,
                        A = p.undefined;
                    A && a(A, "red");
                    var C = s || {}, b = C.username, v = C.captcha, E = (r || {}).fullname;
                    return {
                        usernameServerError: l || b,
                        passwordServerError: u || f,
                        digitsServerError: d || m,
                        captchaServerError: h || v,
                        fullnameServerError: (E = void 0 === E ? {} : E).message || g
                    }
                }, n.runBeforeCheckCaptcha = function (e) {
                    var t = n.state.captcha, a = n.props, r = a.captchaNeeded, i = a.checkCaptcha;
                    if (!n.captchaValidated && r) return t ? void i(t, n.captchaIsChinese ? "cn" : "en").then(function (t) {
                        t.payload.success && (n.captchaValidated = !0, e())
                    }) : void n.setState({
                        validationResult: {
                            message: n.captchaIsChinese ? "请点击图中倒立的文字" : "请输入验证码",
                            needsRefresh: !1,
                            timestamp: Date.now()
                        }, smsInputInterceptTime: Date.now()
                    });
                    e()
                }, n.runBeforeResetValidateResult = function (e) {
                    n.setState({
                        customErrorInputMap: Object.assign({}, te),
                        validationResult: {needsRefresh: !1, timestamp: Date.now()}
                    }, function () {
                        e()
                    })
                }, n.handleSendDigits = function () {
                    var e = n.state.phoneNo;
                    e && n.testPhoneNo() ? n.runBeforeCheckCaptcha(function () {
                        n.runBeforeCheckCaptcha(n.sendDigits)
                    }) : n.setState({
                        customErrorInputMap: Object.assign({}, n.state.customErrorInputMap, {phoneNoError: e ? "请输入正确的手机号" : "请输入手机号"}),
                        smsInputInterceptTime: Date.now()
                    })
                }, n.sendDigits = function () {
                    var e = n.state, t = e.selectedCountry, a = e.phoneNo, r = e.smsType, i = n.props.sendLoginDigits;
                    n.props.validateRegisterForm({phoneNo: "".concat(t.code).concat(a)}).then(function (e) {
                        var o = e.payload;
                        n.setState({
                            smsBackUpDisplay: !1,
                            isRegister: !(o.phoneNo && o.phoneNo.code === S.r)
                        }), i("".concat(t.code).concat(a), r)
                    })
                }, n.handleSumbit = function () {
                    n.runBeforeCheckCaptcha(function () {
                        n.runBeforeResetValidateResult(function () {
                            var e = n.state, t = e.selectedCountry, a = e.phoneNo, r = e.digits, i = e.isRegister,
                                o = e.fullname, s = e.avatarPath, c = n.props, l = c.validateAndLogin,
                                u = c.validateAndRegister, d = c.nextUrl, h = c.socialType, p = Object(b.d)(d),
                                g = p.utm_source, f = p.utm_medium;
                            i ? u(Object.assign({
                                source: "com.zhihu.web",
                                registerType: "phone_digits",
                                phoneNo: "".concat(t.code).concat(a),
                                fullname: o,
                                digits: r,
                                refSource: f,
                                utmSource: g
                            }, s && {avatarPath: s}, {}, h && {socialRegisterType: h})) : l(ee("digits", {
                                username: "".concat(t.code).concat(a),
                                digits: r,
                                refSource: f,
                                utmSource: g
                            }))
                        })
                    })
                }, n
            }

            return Object(s.a)(t, e), Object(r.a)(t, [{
                key: "componentDidMount", value: function () {
                    if (W.a.get("atoken")) {
                        this.getSocialInfo();
                        var e = W.a.get("accountcallback");
                        if (!this.state.fullname && e) {
                            var t = JSON.parse(decodeURIComponent(e));
                            this.setState({fullname: t.fullname})
                        }
                    } else this.props.onResetRegister()
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    var t = this.props, n = t.nextUrl, a = t.socialType, r = t.defaultFullname, i = t.sendDigitsError,
                        o = t.loginConfirmError, s = t.loginConfirmSucceeded, c = t.registerConfirmSucceeded,
                        l = t.captchaValidationMessage, u = e.socialType, d = e.defaultFullname, h = e.sendDigitsError,
                        p = e.loginConfirmError, g = e.loginConfirmSucceeded, f = e.registerConfirmSucceeded,
                        m = e.captchaValidationMessage;
                    if (!a && u && this.getSocialInfo(e), r !== d && this.setState({fullname: d}), !s && g || !c && f) n ? location.href = n : location.reload(); else {
                        if (!o && p && p.validateDigitsError && this.setState({
                            customErrorInputMap: Object.assign({}, this.state.customErrorInputMap, {digitsError: p.validateDigitsError}),
                            smsInputInterceptTime: Date.now()
                        }), !i && h) {
                            var A = this.parseServerError(e).captchaServerError;
                            this.setState({
                                validationResult: {message: A, needsRefresh: !0, timestamp: Date.now()},
                                smsInputInterceptTime: Date.now()
                            })
                        }
                        !l && m && this.setState({
                            smsInputInterceptTime: Date.now(),
                            validationResult: {message: m, needsRefresh: Boolean(m), timestamp: Date.now()}
                        })
                    }
                }
            }, {
                key: "render", value: function () {
                    var e = this.state, t = e.smsInputInterceptTime, n = e.customErrorInputMap, a = e.smsBackUpDisplay,
                        r = e.validationResult, i = e.reStartTime, o = e.isRegister, s = e.phoneNo, l = e.smsType,
                        u = e.fullname, d = this.props.onResetRegister, p = n.phoneNoError, g = n.digitsError,
                        f = this.parseServerError(), m = f.usernameServerError, A = f.fullnameServerError,
                        C = f.digitsServerError;
                    return Object(c.d)(B.b, {
                        className: "Register-content",
                        onSubmit: this.handleSumbit
                    }, Object(c.d)("div", {
                        className: "Register-socialHeader",
                        key: "header"
                    }, Object(c.d)("div", {className: "Register-socialTitle"}, Object(c.d)(v.c, {onClick: d}, Object(c.d)(E.a, {size: 30})), "绑定手机号")), Object(c.d)(x.a, {
                        className: h()("Register-socialName", {"Register-hiddenSocialName": !o}),
                        name: "fullname",
                        key: "fullname",
                        placeholder: "用户名",
                        value: u,
                        onChange: this.handleChange("fullname"),
                        manualValidateError: A,
                        validations: []
                    }), Object(c.d)(j.a, {
                        type: "register",
                        onChange: this.handleChange("phoneNo"),
                        onSelect: this.handleChange("selectedCountry"),
                        manualValidateError: p || m
                    }), Object(c.d)(y.a, {
                        className: "SignFlow-captchaContainer",
                        type: "register",
                        isChinese: this.captchaIsChinese,
                        canCaptchaShown: Boolean(s),
                        onUpdateInput: this.handleChange("captcha"),
                        validationResult: r
                    }), Object(c.d)(z, {
                        smsType: l,
                        reStartTime: i,
                        onChange: this.handleChange("digits"),
                        countDownEvent: this.handleSendDigits,
                        countDownEndEvent: this.handleCountDownEndEvent,
                        interceptTime: t,
                        manualValidateError: g || C
                    }), Object(c.d)("div", {className: h()("Register-smsBackUp", {"Register-hiddenSmsBackUp": !a})}, Object(c.d)("span", {onClick: this.handleBackUpDigits}, "接收", "text" === l ? "语音" : "短信", "验证码")), Object(c.d)(v.c, {
                        className: "Register-submitButton",
                        type: "submit",
                        preset: "primary",
                        color: "blue"
                    }, "进入知乎"))
                }
            }]), t
        }(l.Component)) || $, ae = n(27), re = n(1511), ie = n(26), oe = (n(1710), function (e) {
            var t = e.onBack, n = e.data, a = n.phoneNo, r = n.code, i = n.targetNo, o = e.onSubmit;
            return Object(c.d)("div", {className: "SMSIdentify"}, Object(c.d)("div", {
                className: "SMSIdentify-back",
                onClick: t
            }, Object(c.d)(E.a, {
                fill: "#8590a6",
                size: 36,
                center: !0
            }), "返回"), Object(c.d)("div", {className: "SMSIdentify-title"}, "身份验证"), Object(c.d)("div", {className: "SMSIdentify-tip"}, "请用手机号 ", a.slice(0, -8), "****", a.slice(-4), " 发送短信"), Object(c.d)("div", {className: "SMSIdentify-content"}, Object(c.d)("div", null, "短信内容", Object(c.d)("span", null, r)), Object(c.d)("div", null, "发送到号码", Object(c.d)("span", null, i))), Object(c.d)("div", {className: "SMSIdentify-submitTip"}, "发送完成后，请点击下方按钮进行校验"), Object(c.d)(v.c, {
                className: "SMSIdentify-submit",
                preset: "primary",
                color: "blue",
                onClick: o
            }, "我已发送"))
        }), se = (n(1711), Object(C.connect)(null, {
            getSMSIdentify: Z.d,
            postSMSIdentify: Z.e,
            showNotification: Y.h
        })(function (e) {
            var t = e.getSMSIdentify, n = e.postSMSIdentify, a = e.showNotification, r = e.onBack, i = e.phoneNo,
                o = Object(l.useState)({code: "", phoneNo: "", targetNo: ""}), s = Object(ie.a)(o, 2), u = s[0],
                d = s[1];
            Object(l.useEffect)(function () {
                g.default.trackCardShow(null, {id: 5935})
            }, []), Object(l.useEffect)(function () {
                i && t(i).then(function (e) {
                    var t = e.payload;
                    t && d(t)
                }).catch(function (e) {
                    var t = e.payload;
                    t && d(t)
                })
            }, [t, i]);
            var h = oe;
            return Object(c.d)(h, {
                onBack: r, onSubmit: function () {
                    g.default.trackEvent(null, {id: 23456}), n(i).then(function (e) {
                        var t = e.payload;
                        g.default.trackEvent(null, {
                            id: 6729,
                            action: "Click",
                            name: t.success ? "通过" : "失败"
                        }), t.success ? r() : a("没有收到短信，请稍后重试", "red")
                    })
                }, data: u
            })
        }));

        function ce(e, t) {
            if (!e) return {};
            var n, a = e = e.trim(), r = Object(re.a)(e);
            if (!r) {
                var i = {
                    hasCode: (n = e).startsWith("+") || n.startsWith("00"),
                    parsedPhoneNo: n.startsWith("00") ? "+".concat(n.slice(2)) : n
                };
                a = i.hasCode ? i.parsedPhoneNo : "".concat(t).concat(e)
            }
            return {value: a, isEmail: r}
        }

        var le = {sina: "Weibo", qq: "QQ", wechat: "Wechat"};

        function ue(e, t, n, a) {
            g.default.trackEvent(e, {action: t, element: "Button", element_name: a}, {account: n})
        }

        function de(e, t, n, a) {
            g.default.trackEvent(e, {id: 236, action: "StatusReport", element_name: a}, {
                status: {
                    result: "Success",
                    event: {action: t, element: "Button"}
                }, account: n
            })
        }

        var he, pe, ge, fe = n(391), me = n(824), Ae = n(1712), Ce = n.n(Ae), be = n(1713), ve = n.n(be), Ee = n(1714),
            we = n.n(Ee);
        var Se, Ie, Oe, Be, ye, je = Object(C.connect)(function (e) {
                var t = e.login;
                return {
                    qrcodeLoginToken: t.qrcodeLoginToken,
                    qrcodeLoginTokenExpires: t.qrcodeLoginTokenExpires,
                    qrcodeLoginScanStatus: t.qrcodeLoginScanStatus,
                    qrcodeLoginError: t.qrcodeLoginError,
                    qrcodeLoginReturnNewToken: t.qrcodeLoginReturnNewToken
                }
            }, {getQrcodeLoginToken: Z.c, checkQrcodeScanStatus: Z.a})(he = Object(ae.withRouter)((ge = pe = function (e) {
                function t(e) {
                    var n;
                    return Object(a.a)(this, t), (n = Object(i.a)(this, Object(o.a)(t).call(this, e))).cancelCheckQrcodeScanStatus = function () {
                        n.timer && window.clearInterval(n.timer)
                    }, n.checkQrcodeScanStatus = function (e) {
                        var t = n.props.checkQrcodeScanStatus;
                        n.timer = setInterval(function () {
                            t({token: e})
                        }, 2e3)
                    }, n.handleChangestatus = function (e, t) {
                        n.setState({status: e}), "init" !== e || t || n.getToken()
                    }, n.handleChangeLoginType = function () {
                        var e = n.props.onChangeType;
                        n.cancelCheckQrcodeScanStatus(), e()
                    }, n.state = {type: "password", status: "init", errorMessage: ""}, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.getToken()
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.qrcodeLoginToken, a = t.qrcodeLoginScanStatus, r = e.qrcodeLoginToken,
                            i = e.qrcodeLoginScanStatus, o = e.qrcodeLoginError, s = e.qrcodeLoginReturnNewToken;
                        "" !== r && n !== r ? (this.cancelCheckQrcodeScanStatus(), "init" !== this.state.status && this.handleChangestatus("init", !0), this.checkQrcodeScanStatus(r)) : a !== i ? 2 !== i && this.handleChangestatus(1 === i ? "success" : "init", s || 1 === a && 0 === i) : o && o.code && (this.cancelCheckQrcodeScanStatus(), 40321 === o.code && this.setState({
                            status: "error",
                            errorMessage: o.message
                        }))
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.cancelCheckQrcodeScanStatus()
                    }
                }, {
                    key: "getToken", value: function () {
                        this.props.getQrcodeLoginToken()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.className, a = t.qrcodeLoginToken, r = this.state, i = r.status,
                            o = r.errorMessage, s = null;
                        return s = "init" === i ? Object(c.d)("div", {className: "Qrcode-content"}, Object(c.d)("div", {className: "Qrcode-img"}, a ? Object(c.d)("img", {
                            width: "150",
                            height: "150",
                            src: "//".concat(J.a.wwwHost, "/api/v3/account/api/login/qrcode/").concat(a, "/image"),
                            alt: "二维码"
                        }) : Object(c.d)(me.a, {count: 3})), Object(c.d)("p", null, "打开", Object(c.d)("a", {
                            href: "https://www.zhihu.com/app/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, " ", "知乎 App")), Object(c.d)("p", null, "在「我的」页面顶部打开扫一扫")) : "success" === i ? Object(c.d)(l.Fragment, null, Object(c.d)("div", {className: "Qrcode-content"}, Object(c.d)("div", {className: "Qrcode-scanResultStaus"}, Object(c.d)(Ce.a, {
                            fill: "#2db370",
                            size: 58
                        })), Object(c.d)("p", {className: "Qrcode-scanResultTips"}, "扫描成功"), Object(c.d)("p", null, "请在手机上「确认登录」")), Object(c.d)("div", {className: "Qrcode-cutButton"}, Object(c.d)("span", {
                            onClick: function () {
                                return e.handleChangestatus("init")
                            }
                        }, "返回二维码"))) : Object(c.d)("div", {className: "Qrcode-content Qrcode-failure"}, Object(c.d)("div", null, Object(c.d)(ve.a, {
                            fill: "#ffaa00",
                            size: 58
                        })), Object(c.d)("p", null, o)), Object(c.d)("div", {className: h()("Qrcode-container", n)}, Object(c.d)("div", {className: "Qrcode-title"}, "扫码登录"), s, Object(c.d)(we.a, {onClick: this.handleChangeLoginType}))
                    }
                }]), t
            }(l.Component), pe.propTypes = {
                type: R.a.string,
                isShowPasswordLogin: R.a.bool,
                onChangeType: R.a.func,
                getQrcodeLoginToken: R.a.func,
                checkQrcodeScanStatus: R.a.func
            }, pe.defaultProps = {qrcodeLoginToken: "", qrcodeLoginScanStatus: ""}, he = ge)) || he) || he, ke = n(1715),
            Qe = n.n(ke), Te = (n(1716), {username: null, password: null, captcha: null, digits: null}),
            Ne = Object(c.d)("div", {className: "SignFlow-snackBar"}, Object(c.d)("span", {className: "Login-accountBlockEmphasis"}, "帐号已停用。"), Object(c.d)("span", null, "如有疑问，请发邮件至"), Object(c.d)("a", {
                className: "SignFlow-snackBarLink",
                href: "mailto:i@zhihu.com"
            }, " i@zhihu.com "), Object(c.d)("span", null, "联系管理员"));
        var Re, Me, De, Ve, Fe, Pe, Ue, ze = (Se = Object(C.connect)(function (e) {
                var t = e.captcha, n = t.captchaValidationMessage, a = t.captchaNeeded, r = t.captchaValidated, i = e.login,
                    o = i.loginConfirmSucceeded, s = i.loginConfirmError, c = i.sendDigitsError, l = i.needSMSIdentify,
                    u = i.loginUnregisteredError, d = e.register;
                return {
                    loginConfirmSucceeded: o,
                    loginConfirmError: s,
                    sendDigitsError: c,
                    loginUnregisteredError: u,
                    captchaValidationMessage: n,
                    captchaNeeded: a,
                    captchaValidated: r,
                    registerValidateErrors: d.registerValidateErrors,
                    registerConfirmError: d.registerConfirmError,
                    registerConfirmSucceeded: d.registerConfirmSucceeded,
                    needSMSIdentify: l
                }
            }, {
                validateAndLogin: Z.h,
                validateAndRegister: I.f,
                resetLoginValidateResult: Z.f,
                validateSendDigits: Z.j,
                showNotification: Y.h,
                checkCaptcha: O.b
            }), Ie = Object(w.b)(function (e) {
                return {module: "digits" === e.type ? "SMSSignInForm" : "SignInForm", trackCardShow: !0, view: {id: 235}}
            }), Se(Oe = Object(ae.withRouter)(Oe = Ie((ye = Be = function (e) {
                function t(e) {
                    var n;
                    Object(a.a)(this, t), (n = Object(i.a)(this, Object(o.a)(t).call(this, e))).checkAllInputFilled = function () {
                        if (n.allInputFilled) return n.allInputFilled;
                        var e = n.props.type, t = n.state, a = t.username, r = t.password;
                        return n.allInputFilled = "digits" === e ? Boolean(a) : Boolean(a) && Boolean(r), n.allInputFilled
                    }, n.handleChange = function (e, t) {
                        n.props.resetLoginValidateResult(), n.setState(Object(m.a)({}, e, t))
                    }, n.handleChangeType = function (e) {
                        var t = n.props, a = t.type, r = t.onChangeType;
                        (0, t.resetLoginValidateResult)(), r(e), "qrcode" !== e && "password" !== e || g.default.trackEvent(Object(A.default)(n), {
                            action: "Click",
                            name: "qrcode" === e ? "使用二维码登录" : "使用密码登录"
                        }, {account: {type: "Zhihu"}}), "qrcode" !== e && (n.setState(function (e) {
                            var t = e.username;
                            return {username: "password" === a && Object(re.a)(t) ? "" : t, smsBackUpDisplay: !0}
                        }), g.default.trackEvent(Object(A.default)(n), {
                            action: "Switch",
                            element: "Button"
                        }, {account: {type: "Zhihu"}}))
                    }, n.handleChangeSmsType = function (e) {
                        g.default.trackEvent(e.currentTarget, {id: 4941}), n.setState(function (e) {
                            var t = e.smsType;
                            return {
                                smsType: "text" === t ? "voice" : "text",
                                smsBackUpName: "text" === t ? "短信" : "语音",
                                reStartTime: Date.now()
                            }
                        })
                    }, n.handleCountDownEndEvent = function () {
                        n.setState({smsBackUpDisplay: !0})
                    }, n.testPhoneNo = function () {
                        var e = n.state, t = e.selectedCountry.code, a = e.username;
                        return "+86" !== t || /^\d{11}$/.test(a)
                    }, n.handleSendDigits = function () {
                        n.runBeforeResetValidateResult(function () {
                            var e = n.props, t = e.validateSendDigits, a = e.captchaNeeded, r = e.resetLoginValidateResult,
                                i = n.state, o = i.username, s = i.selectedCountry.code, c = i.captcha,
                                l = i.customErrorInputMap, u = i.validationResult, d = i.smsType;
                            if (r(), n.testPhoneNo()) {
                                if (o && (!a || c)) return t({
                                    username: ce(o, s).value,
                                    captcha: c,
                                    smsType: d,
                                    type: "login",
                                    lang: n.captchaIsChinese ? "cn" : "en"
                                }), void n.setState({smsBackUpDisplay: !1});
                                var h = a && !c ? {
                                    message: n.captchaIsChinese ? "请点击图中倒立的文字" : "请输入验证码",
                                    needsRefresh: !1,
                                    timestamp: Date.now()
                                } : Object.assign({}, u);
                                n.setState({
                                    customErrorInputMap: Object.assign({}, l, {username: o ? "" : "请输入手机号"}),
                                    smsInputInterceptTime: Date.now(),
                                    validationResult: h
                                }), n.handleLogSubmitValidateError({
                                    username: o ? "" : "请输入手机号",
                                    captcha: a && !c ? "请输入验证码" : ""
                                })
                            } else n.setState({
                                customErrorInputMap: Object.assign({}, n.state.customErrorInputMap, {username: o ? "请输入正确的手机号" : "请输入手机号"}),
                                smsInputInterceptTime: Date.now()
                            })
                        })
                    }, n.handleSupportedCountriesShown = function (e) {
                        n.setState(function (t) {
                            var n = t.supportedCountriesShown;
                            return {supportedCountriesShown: e || !n}
                        })
                    }, n.runBeforeResetValidateResult = function (e) {
                        n.props.resetLoginValidateResult(), n.setState({
                            customErrorInputMap: Object.assign({}, Te),
                            validationResult: {needsRefresh: !1, timestamp: Date.now()}
                        }, function () {
                            e()
                        })
                    }, n.runBeforeCheckCaptcha = function (e) {
                        var t = n.state.captcha, a = n.props, r = a.captchaNeeded, i = a.checkCaptcha,
                            o = a.captchaValidated;
                        if (!n.captchaValidated && !o && r) return t ? void i(t, n.captchaIsChinese ? "cn" : "en").then(function (t) {
                            t.payload.success && (n.captchaValidated = !0, e())
                        }) : void n.setState({
                            validationResult: {
                                message: n.captchaIsChinese ? "请点击图中倒立的文字" : "请输入验证码",
                                needsRefresh: !1,
                                timestamp: Date.now()
                            }, smsInputInterceptTime: Date.now()
                        });
                        e()
                    }, n.handleSubmit = function (e) {
                        g.default.trackEvent(Object(A.default)(n), {id: 4948}), n.runBeforeResetValidateResult(function () {
                            var t = n.props, a = t.type, r = t.passwordType;
                            "digits" !== a && "oversea" !== r || n.testPhoneNo() ? n.runBeforeCheckCaptcha(function () {
                                var t = n.props, a = t.validateAndLogin, r = t.type, i = t.nextUrl, o = n.state,
                                    s = o.selectedCountry, c = o.captcha, l = Object(b.d)(i), u = l.utm_source,
                                    d = l.utm_medium, h = Object.assign({}, e, {
                                        username: ce(e.username, s.code).value,
                                        captcha: c,
                                        lang: n.captchaIsChinese ? "cn" : "en",
                                        utmSource: u,
                                        refSource: d
                                    });
                                a(ee(r, h))
                            }) : n.setState({
                                customErrorInputMap: Object.assign({}, n.state.customErrorInputMap, {username: n.state.username ? "请输入正确的手机号" : "请输入手机号"}),
                                smsInputInterceptTime: Date.now()
                            })
                        })
                    }, n.parseServerError = function (e) {
                        var t = e || n.props, a = t.loginConfirmError, r = t.sendDigitsError, i = t.showNotification,
                            o = t.registerValidateErrors, s = a || {}, c = s.username, l = s.password, u = s.digits,
                            d = s.captcha, h = s.undefined, p = s.validateDigitsError, g = o || {}, f = g.fullname,
                            m = g.password, A = (m = void 0 === m ? {} : m).message, C = r || {}, b = C.username,
                            v = C.undefined;
                        return (h || v) && i(h || v, "red"), {
                            usernameServerError: b || c,
                            passwordServerError: l || A,
                            digitsServerError: u || p,
                            captchaServerError: d,
                            fullnameError: f
                        }
                    }, n.handleResetPassword = function (e) {
                        g.default.trackEvent(e.currentTarget, {id: 4947});
                        var t = n.props.onClose;
                        g.default.trackEvent(Object(A.default)(n), {
                            action: "Click",
                            element: "Button",
                            element_name: "ResetPassword"
                        }), t && t(), window.open("".concat(S.D, "/account/password_reset"), "_blank")
                    }, n.handleLogSubmit = function () {
                        ue(Object(A.default)(n), "SignIn", n.buildZAAccount(), "digits" === n.props.type ? "SMSSignIn" : null)
                    }, n.handleLogSubmitValidateError = function (e) {
                        !function (e, t, n, a, r) {
                            var i = "object" == typeof a ? Object.keys(a).map(function (e) {
                                return "object" == typeof a[e] ? a[e].message : a[e]
                            }) : [a];
                            g.default.trackEvent(e, {action: "StatusReport", element_name: r}, {
                                status: {
                                    result: "Fail",
                                    error_msg: i,
                                    event: {action: t, element: "Button"}
                                }, account: n
                            })
                        }(Object(A.default)(n), "SignIn", n.buildZAAccount(), e, "digits" === n.props.type ? "SMSSignIn" : null)
                    }, n.trackOtherLoginButtonClick = function (e) {
                        var t = e.currentTarget, n = t.textContent;
                        g.default.trackEvent(t, {id: 4949}, {button: {text: n}})
                    }, n.handleSetting = function (e) {
                        return function (t) {
                            n.setState(Object(m.a)({}, e, t))
                        }
                    }, n.handleRegister = function () {
                        return n.runBeforeCheckCaptcha(function () {
                            var e = n.state, t = e.selectedCountry.code, a = e.username, r = e.fullname, i = e.digits,
                                o = e.password;
                            n.props.validateAndRegister({
                                source: "com.zhihu.web",
                                registerType: "phone_digits",
                                phoneNo: "".concat(t).concat(a),
                                fullname: r,
                                digits: i,
                                password: o
                            })
                        })
                    };
                    var r = e.selectedCountry, s = e.username, c = e.password;
                    return n.state = {
                        smsType: "text",
                        smsBackUpName: "语音",
                        smsBackUpDisplay: !0,
                        reStartTime: -1,
                        supportedCountriesShown: !1,
                        captcha: "",
                        selectedCountry: r,
                        username: s,
                        password: c,
                        fullname: "",
                        customErrorInputMap: Object.assign({}, Te),
                        validationResult: {},
                        smsInputInterceptTime: -1
                    }, n.captchaIsChinese = Math.random() < .5, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.sendDigitsError, a = t.captchaValidationMessage,
                            r = t.registerConfirmSucceeded, i = t.loginConfirmSucceeded, o = t.loginConfirmError,
                            s = t.isInSignPage, c = t.nextUrl, l = e.sendDigitsError, u = e.captchaValidationMessage,
                            d = e.registerConfirmSucceeded, h = e.loginConfirmSucceeded, p = e.loginConfirmError,
                            g = e.onShowExtraInfo;
                        if (!n && l || i !== h && !1 === h) {
                            var f = !n && l ? {smsInputInterceptTime: Date.now()} : {},
                                m = this.parseServerError(e).captchaServerError;
                            this.setState(Object.assign({}, f, {
                                validationResult: {
                                    message: m,
                                    needsRefresh: !0,
                                    timestamp: Date.now()
                                }
                            })), this.handleLogSubmitValidateError(l || p), !p || !p.extra || o && o.extra === p.extra || g(Ne)
                        } else if (a !== u) {
                            var A = u ? {smsInputInterceptTime: Date.now()} : {};
                            this.setState(Object.assign({
                                validationResult: {
                                    message: u,
                                    needsRefresh: Boolean(u),
                                    timestamp: Date.now()
                                }
                            }, A)), u && this.handleLogSubmitValidateError(u)
                        } else (!i && h || !r && d) && (Object(fe.b)(this.state.username), this.handleLogSubmitSuccess(), c ? location.href = c : s ? location.href = "/" : location.reload());
                        (u || (n || l) && null === p) && this.handleCountDownEndEvent()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.props.resetLoginValidateResult()
                    }
                }, {
                    key: "buildZAAccount", value: function () {
                        var e = this.state, t = ce(e.username, e.selectedCountry.code), n = t.value, a = t.isEmail;
                        return {email: a && n ? n : null, phone: a || !n ? null : n, type: "Zhihu"}
                    }
                }, {
                    key: "handleLogSubmitSuccess", value: function () {
                        de(this, "SignIn", this.buildZAAccount(), "digits" === this.props.type ? "SMSSignIn" : null)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.type, a = t.passwordType, r = t.loginUnregisteredError,
                            i = this.state, o = i.supportedCountriesShown, s = i.selectedCountry, l = i.username,
                            u = i.password, d = i.validationResult, p = i.smsType, g = i.smsBackUpName,
                            f = i.smsBackUpDisplay, m = i.customErrorInputMap.username, A = i.smsInputInterceptTime,
                            C = i.reStartTime, b = this.parseServerError(), w = b.usernameServerError,
                            S = b.passwordServerError, I = b.digitsServerError, O = b.fullnameError,
                            k = !this.captchaValidated && Object(c.d)(y.a, {
                                className: "SignFlow-captchaContainer",
                                canCaptchaShown: this.checkAllInputFilled(),
                                type: "digits" === n ? "digitsLogin" : "login",
                                isChinese: this.captchaIsChinese,
                                onUpdateInput: function (t) {
                                    return e.handleChange("captcha", t)
                                },
                                validationResult: d
                            });
                        return "qrcode" === n ? Object(c.d)(je, {
                            className: "SignInQrcode", onChangeType: function () {
                                return e.handleChangeType("password")
                            }
                        }) : this.props.needSMSIdentify ? Object(c.d)(se, {
                            onBack: this.props.resetLoginValidateResult,
                            phoneNo: "".concat(s.code).concat(l)
                        }) : r && "digits" === n ? Object(c.d)(B.b, {
                            key: "setting",
                            className: "SignFlow-setting",
                            onSubmit: this.handleRegister,
                            onPreSubmit: this.handleLogSubmit
                        }, Object(c.d)("div", {
                            className: "SignFlow-back",
                            onClick: this.props.resetLoginValidateResult
                        }, Object(c.d)(E.a, {
                            center: !0,
                            size: 28,
                            fill: "#8590a6"
                        }), "返回"), Object(c.d)("div", {className: "SignFlow-settingTitle"}, "设置用户名和密码"), Object(c.d)(x.a, {
                            name: "fullname",
                            placeholder: "用户名",
                            onChange: this.handleSetting("fullname"),
                            manualValidateError: O
                        }), Object(c.d)(L.a, {
                            onChange: this.handleSetting("password"),
                            defaultValue: u,
                            placeholderPrefix: "8 位数字或字母",
                            defaultType: "text",
                            manualValidateError: S
                        }), Object(c.d)(v.c, {
                            type: "submit",
                            className: "SignFlow-submitButton",
                            preset: "primary",
                            color: "blue"
                        }, "进入知乎")) : Object(c.d)(B.b, {
                            className: "SignFlow Login-content",
                            onSubmit: this.handleSubmit,
                            onPreSubmit: this.handleLogSubmit,
                            onInvalid: this.handleLogSubmitValidateError
                        }, Object(c.d)("div", {className: "SignFlow-tabs"}, Object(c.d)("div", {
                            className: h()("SignFlow-tab", {"SignFlow-tab--active": "digits" === n}),
                            onClick: function () {
                                "digits" !== n && e.handleChangeType("digits")
                            }
                        }, "免密码登录"), Object(c.d)("div", {
                            className: h()("SignFlow-tab", {"SignFlow-tab--active": "password" === n}),
                            onClick: function () {
                                "password" !== n && e.handleChangeType("password")
                            }
                        }, "密码登录"), Object(c.d)("div", {
                            className: "SignFlow-qrcodeTab", onClick: function () {
                                e.handleChangeType("qrcode")
                            }
                        }, Object(c.d)(Qe.a, null))), Object(c.d)(j.a, {
                            type: "digits" === n || o ? "digits" : "password",
                            supportedCountriesShown: "digits" === n || "oversea" === a,
                            onChange: function (t) {
                                return e.handleChange("username", t)
                            },
                            onSelect: function (t) {
                                return e.handleChange("selectedCountry", t)
                            },
                            defaultSelectedCountry: s,
                            manualValidateError: w || m,
                            defaultValue: l
                        }), "digits" === n && k, "digits" === n && Object(c.d)(z, {
                            countDownEvent: function () {
                                return e.handleSendDigits()
                            },
                            countDownEndEvent: this.handleCountDownEndEvent,
                            interceptTime: A,
                            manualValidateError: I,
                            smsType: p,
                            reStartTime: C,
                            onChange: this.handleSetting("digits")
                        }), "password" === n && Object(c.d)(L.a, {
                            onChange: function (t) {
                                return e.handleChange("password", t)
                            }, manualValidateError: S, defaultValue: u
                        }), "password" === n && k, Object(c.d)("div", {className: "Login-options"}, Object(c.d)(v.c, {
                            preset: "plain",
                            className: "Login-switchType",
                            onClick: function () {
                                "digits" !== n && e.handleChangeType("email" === a ? "oversea" : "email")
                            }
                        }, "digits" === n ? "" : "email" === a ? "海外手机号登录" : "邮箱账号登录"), Object(c.d)(v.c, {
                            preset: "plain",
                            className: "Login-cannotLogin",
                            onClick: "digits" === n ? this.handleChangeSmsType : this.handleResetPassword
                        }, "digits" === n ? f && "接收".concat(g, "验证码") : "忘记密码？")), Object(c.d)(v.c, {
                            type: "submit",
                            className: "SignFlow-submitButton",
                            preset: "primary",
                            color: "blue"
                        }, "password" === n ? "" : "注册/", "登录"), Object(c.d)("div", {className: "SignContainer-tip"}, Object(c.d)("div", null, Object(c.d)("div", null, "未注册手机验证后自动登录，注册即代表同意", Object(c.d)("a", {href: "https://www.zhihu.com/term/zhihu-terms"}, "《知乎协议》"), Object(c.d)("a", {href: "https://www.zhihu.com/term/privacy"}, "《隐私保护指引》")))))
                    }
                }]), t
            }(l.Component), Be.propTypes = {
                validateAndLogin: R.a.func,
                resetLoginValidateResult: R.a.func,
                validateSendDigits: R.a.func,
                loginConfirmSucceeded: R.a.bool,
                loginConfirmError: R.a.object,
                sendDigitsError: R.a.object,
                captchaValidationMessage: R.a.string,
                captchaNeeded: R.a.bool,
                onShowExtraInfo: R.a.func,
                selectedCountry: R.a.object,
                username: R.a.string,
                password: R.a.string,
                type: R.a.oneOf(["password", "digits", "qrcode"]),
                onChangeType: R.a.func
            }, Be.defaultProps = {
                selectedCountry: {name: "中国", code: "+86"},
                username: "",
                password: ""
            }, Oe = ye)) || Oe) || Oe) || Oe), Le = Object(ae.withRouter)((De = Me = function (e) {
                function t() {
                    var e, n;
                    Object(a.a)(this, t);
                    for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                    return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {
                        type: "password",
                        passwordType: "email"
                    }, n.handleSwitchLoginType = function (e) {
                        "email" !== e && "oversea" !== e ? n.setState({type: e}) : n.setState({
                            type: "password",
                            passwordType: e
                        })
                    }, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.nextUrl, n = e.isInSignPage, a = this.state, r = a.type,
                            i = a.passwordType;
                        return Object(c.d)(ze, {
                            type: r,
                            isInSignPage: n,
                            passwordType: i,
                            onChangeType: this.handleSwitchLoginType,
                            nextUrl: t
                        })
                    }
                }]), t
            }(l.Component), Me.propTypes = {nextUrl: R.a.string, isInSignPage: R.a.bool}, Re = De)) || Re, xe = n(1439),
            He = n(1824), Je = n(1440), qe = "/oauth/account_callback", Ke = {
                qqconn: "/oauth/redirect/login/qqconn?next=",
                sina: "/oauth/redirect/login/sina?next=",
                wechat: "/oauth/redirect/login/wechat?next="
            }, We = Object(ae.withRouter)((Pe = Fe = function (e) {
                function t() {
                    var e, n;
                    Object(a.a)(this, t);
                    for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                    return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).accountCallback = function (e) {
                        var t = n.props, a = t.onRegister, r = t.nextUrl, i = e.login, o = e.type, s = e.fullname;
                        i ? (Object(fe.b)(n.clickedServiceName), n.handleLogSocialLoginSuccess(), r ? location.href = r : location.reload()) : a({
                            bySocial: !0,
                            socialType: o,
                            fullname: s
                        })
                    }, n.handleBuildSocialAuthLink = function (e) {
                        n.clickedServiceName = e, n.handleLogSingleSocialButtonClick(e);
                        var t = Ke[e], a = "sina" !== e, r = Object(b.d)(), i = r.utm_source, o = r.utm_medium;
                        a ? (n.ready(), window.open("https://www.zhihu.com".concat(t).concat(qe).concat(i ? "&utm_source=".concat(i) : "", "&ref_source=").concat(o), "_blank", "top=200,left=400,width=600,height=550,directories=no,menubar=no,toolbar=no")) : location.href = "https://www.zhihu.com".concat(t).concat(qe, "&from=").concat(encodeURIComponent(n.parseNextInfoFromUrl()))
                    }, n.handleEntranceButtonClick = function (e) {
                        n.props.onEntranceButtonClick && n.props.onEntranceButtonClick(e), n.handleLogSocialLogin(), n.setState(function (e) {
                            return {socialButtonExpanded: !e.socialButtonExpanded}
                        })
                    }, n.parseNextInfoFromUrl = function () {
                        var e = n.props.router.location.query.next, t = "/";
                        if (e) try {
                            t = decodeURIComponent(e)
                        } catch (n) {
                            t = unescape(e)
                        }
                        return t
                    }, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount", value: function () {
                        if (document.referrer.startsWith("https://www.zhihu.com/oauth/callback/sina")) {
                            var e = W.a.get("atoken"), t = W.a.get("accountcallback");
                            if (e && t) {
                                var n = JSON.parse(decodeURIComponent(t));
                                if (!n) return;
                                var a = n.fullname, r = n.type;
                                (0, this.props.onRegister)({fullname: a, socialType: r})
                            }
                        }
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.unready()
                    }
                }, {
                    key: "ready", value: function () {
                        window.NWEB = {accountCallback: this.accountCallback}, this.domain = document.domain, document.domain = "zhihu.com"
                    }
                }, {
                    key: "unready", value: function () {
                        if (window.NWEB && "www.zhihu.com" === location.host) {
                            try {
                                document.domain = this.domain
                            } catch (e) {
                            }
                            delete window.NWEB
                        }
                    }
                }, {
                    key: "handleLogSocialLogin", value: function () {
                        g.default.trackEvent(this, {action: "Click", element: "Button", element_name: "SNSSignIn"})
                    }
                }, {
                    key: "handleLogSingleSocialButtonClick", value: function (e) {
                        ue(this, "SignIn", {type: le[e]})
                    }
                }, {
                    key: "handleLogSocialLoginSuccess", value: function () {
                        de(this, "SignIn", this.clickedServiceName)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return Object(c.d)("div", {className: "Login-socialLogin"}, Object(c.d)("span", null, "社交帐号登录"), Object(c.d)("span", {className: "Login-socialButtonGroup"}, Object(c.d)(v.c, {
                            className: "Login-socialButton",
                            preset: "plain",
                            onClick: function () {
                                return e.handleBuildSocialAuthLink("wechat")
                            }
                        }, Object(c.d)(xe.a, {
                            className: "Login-socialIcon",
                            fill: "#60c84d",
                            size: 20
                        }), "微信"), Object(c.d)(v.c, {
                            className: "Login-socialButton",
                            preset: "plain",
                            onClick: function () {
                                return e.handleBuildSocialAuthLink("qqconn")
                            }
                        }, Object(c.d)(He.a, {
                            className: "Login-socialIcon",
                            fill: "#50c8fd",
                            size: 20
                        }), "QQ"), Object(c.d)(v.c, {
                            className: "Login-socialButton",
                            preset: "plain",
                            onClick: function () {
                                return e.handleBuildSocialAuthLink("sina")
                            }
                        }, Object(c.d)(Je.a, {className: "Login-socialIcon", fill: "#fb6622", size: 20}), "微博")))
                    }
                }]), t
            }(l.Component), Fe.propTypes = {
                onRegister: R.a.func.isRequired,
                onEntranceButtonClick: R.a.func
            }, Ve = Pe)) || Ve, Ze = n(1718), Ye = n(1717), Ge = n.n(Ye),
            _e = {name: "vfpo4o", styles: "margin-right:.5em;"}, Xe = {name: "vfpo4o", styles: "margin-right:.5em;"},
            $e = function (e) {
                var t = e.isQRCodeShown, n = void 0 !== t && t, a = e.onQRCodeLinkClick, r = e.zaClickId,
                    i = Object(T.a)(e, ["isQRCodeShown", "onQRCodeLinkClick", "zaClickId"]);
                return Object(c.d)(p.d, Object(Q.default)({
                    px: "24px",
                    color: "GBL01A",
                    width: "400px",
                    height: "60px",
                    alignItems: "center"
                }, i), Object(c.d)(p.a, {flex: "1"}, Object(c.d)(p.g, {
                    href: "/org/signup",
                    color: "inherit",
                    "data-za-detail-view-id": r
                }, Object(c.d)(Ze.a, {size: 26, css: _e, center: !0}), "开通机构号")), Object(c.d)(p.a, {
                    height: "20px",
                    width: "1px",
                    bg: "GBK09C"
                }), Object(c.d)(p.a, {flex: "1", textAlign: "right"}, Object(c.d)(p.b, {
                    bg: "unset",
                    color: "inherit",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    padding: 0,
                    onClick: a
                }, n ? "关闭二维码" : Object(c.d)(u.a.Fragment, null, Object(c.d)(Ge.a, {
                    center: !0,
                    css: Xe
                }), "下载知乎 App"))))
            }, et = (n(1525), {name: "i6bazn", styles: "overflow:hidden;"}), tt = Object(f.b)()(Ue = function (e) {
                function t() {
                    var e, n;
                    Object(a.a)(this, t);
                    for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                    return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {
                        showHeader: !0,
                        showQrcode: !1,
                        fullname: "",
                        socialType: ""
                    }, n.changeSignType = function (e) {
                        n.props.onChangeSignType(e), n.handleSetShowHeader(!0)
                    }, n.handleSwitchToRegisterClick = function (e) {
                        n.props.isInSignPage && g.default.trackEvent(e.currentTarget, {id: 4950}), n.changeSignType("register")
                    }, n.handleSwitchToLoginClick = function (e) {
                        n.props.isInSignPage && g.default.trackEvent(e.currentTarget, {id: 4944}), n.changeSignType("login")
                    }, n.handleSetShowHeader = function (e) {
                        n.setState({showHeader: e})
                    }, n.handleSocialRegister = function (e) {
                        var t = e.fullname, a = e.socialType;
                        n.props.onChangeSignType("register"), n.setState({fullname: t, socialType: a, showHeader: !1})
                    }, n.handleResetRegister = function () {
                        n.props.onChangeSignType("login"), n.setState({fullname: "", socialType: "", showHeader: !0})
                    }, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this.props, t = e.nextUrl;
                        e.isLogin && (location.href = t || "/")
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state, n = t.fullname, a = t.socialType, r = t.showQrcode, i = this.props,
                            o = i.nextUrl, s = i.isInSignPage, l = i.signType, u = s ? p.c : p.a;
                        return Object(c.d)(u, {
                            bg: "background",
                            width: 400,
                            css: et
                        }, "login" === l ? Object(c.d)("div", {className: "SignContainer-content"}, Object(c.d)("div", {className: "SignContainer-inner"}, Object(c.d)(Le, {
                            nextUrl: o,
                            isInSignPage: s
                        }), Object(c.d)("div", {className: h()("SignFlowQRImage", {"SignFlowQRImage--isHidden": !r})}, Object(c.d)("div", null)))) : Object(c.d)(ne, {
                            socialType: a,
                            nextUrl: o,
                            defaultFullname: n,
                            onResetRegister: this.handleResetRegister
                        }), Object(c.d)(p.a, {
                            mx: "24px",
                            sx: {borderTop: "1px solid", borderColor: "GBK09A"}
                        }), Object(c.d)(We, {onRegister: this.handleSocialRegister}), Object(c.d)($e, {
                            zaClickId: s ? 4943 : 8270,
                            isQRCodeShown: r,
                            onQRCodeLinkClick: function (t) {
                                e.setState({showQrcode: !r}), s ? r && g.default.trackEvent(t.currentTarget, {id: 4945}) : g.default.trackEvent(t.currentTarget, {id: r ? 8272 : 8271})
                            },
                            bg: "GBK10A"
                        }))
                    }
                }]), t
            }(l.Component)) || Ue;
        t.a = tt
    }, 1824: function (e, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(16), o = function (e) {
            return r.a.createElement(i.a, e, r.a.createElement("path", {
                d: "M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z",
                fillRule: "evenodd"
            }))
        };
        o.defaultProps = {name: "QQ"}, t.a = o
    }, 2826: function (e, t, n) {
    }, 2827: function (e, t, n) {
    }, 2916: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(6), r = n(10), i = n(9), o = n(7), s = n(8), c = n(0), l = n(2), u = n(89), d = n.n(u), h = n(1816),
            p = n(15), g = n.n(p), f = (n(2826), function (e) {
                var t = e.style, n = e.className;
                return Object(c.d)("footer", {
                    className: g()("SignFlowHomepage-footer", n),
                    style: t
                }, Object(c.d)("div", {className: "ZhihuLinks"}, Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://zhuanlan.zhihu.com"
                }, "知乎专栏"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "/roundtable"
                }, "圆桌"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "/explore"
                }, "发现"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "/app"
                }, "移动应用"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "/contact"
                }, "联系我们"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://app.mokahr.com/apply/zhihu"
                }, "来知乎工作"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "/org/signup"
                }, "注册机构号")), Object(c.d)("div", {className: "ZhihuRights"}, Object(c.d)("span", null, "© ", (new Date).getFullYear(), " 知乎"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://tsm.miit.gov.cn/dxxzsp/"
                }, "京 ICP 证 110745 号"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "http://www.beian.miit.gov.cn"
                }, "京 ICP 备 13052560 号 - 1"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
                }, Object(c.d)("img", {src: "https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"}), "京公网安备 11010802010035 号"), Object(c.d)("a", {
                    href: "https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "出版物经营许可证")), Object(c.d)("div", {className: "ZhihuReports"}, Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://zhuanlan.zhihu.com/p/51068775"
                }, "侵权举报"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "http://www.12377.cn"
                }, "网上有害信息举报专区"), Object(c.d)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "/jubao"
                }, "儿童色情信息举报专区"), Object(c.d)("span", null, "违法和不良信息举报：010-82716601")))
            });
        n(2827);
        var m = function (e) {
            function t() {
                var e, n;
                Object(a.a)(this, t);
                for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).handleChangeSignType = function (e) {
                    var t = n.props, a = t.router, r = t.location, i = "login" === e ? "/signin" : "/signup";
                    a.replace(Object.assign({}, r, {pathname: i}))
                }, n
            }

            return Object(s.a)(t, e), Object(r.a)(t, [{
                key: "render", value: function () {
                    var e = this.props.location, t = e.pathname, n = e.query, a = (n = void 0 === n ? {} : n).next,
                        r = "/signin" === t ? "login" : "register";
                    return Object(c.d)("div", {className: "SignFlowHomepage"}, Object(c.d)(d.a, {
                        title: "有问题，上知乎",
                        titleTemplate: "知乎 - %s"
                    }), Object(c.d)("div", {className: "SignFlowHomepage-content"}, Object(c.d)("img", {
                        className: "SignFlowHomepage-logo",
                        src: "https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"
                    }), Object(c.d)(h.a, {
                        nextUrl: a,
                        signType: r,
                        onChangeSignType: this.handleChangeSignType,
                        isInSignPage: !0
                    })), Object(c.d)(f, null))
                }
            }]), t
        }(l.Component);
        t.default = m
    }, 817: function (e, t, n) {
        "use strict";
        var a = n(6), r = n(10), i = n(9), o = n(7), s = n(39), c = n(8), l = n(0), u = n(3), d = n.n(u), h = n(2),
            p = n(34), g = n(22), f = n(830), m = function (e) {
                function t() {
                    var e, n;
                    Object(a.a)(this, t);
                    for (var r = arguments.length, c = new Array(r), l = 0; l < r; l++) c[l] = arguments[l];
                    return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).trackCardShowTimer = null, n.handleIntersectionChange = function (e, t) {
                        if (e.isIntersecting) {
                            t.disconnect();
                            var a = n.props, r = a.view, i = void 0 === r ? {} : r, o = a.extra;
                            n.trackCardShowTimer = setTimeout(function () {
                                g.default.trackCardShow(Object(s.default)(n), i, o)
                            })
                        }
                    }, n
                }

                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.setModule()
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                        this.setModule()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        clearTimeout(this.trackCardShowTimer)
                    }
                }, {
                    key: "setModule", value: function () {
                        var e = this.props, t = e.module, n = e.index, a = e.isAd, r = e.moduleName, i = e.content,
                            o = e.list, s = e.card, c = e.attachedInfoBytes;
                        if (t) {
                            var l = Object(p.findDOMNode)(this);
                            l && g.default.setModule(l, {
                                module: t,
                                index: n,
                                is_ad: a,
                                module_name: r
                            }, function (e, t, n, a) {
                                return Object.assign({}, e && {card: {content: e}}, {}, t && {card: t}, {}, n && {list: n}, {}, a && {attached_info_bytes: a})
                            }(i, s, o, c))
                        }
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.visibleThreshold, n = e.trackCardShow, a = e.children;
                        return n ? Object(l.d)(f.a, {threshold: t, onChange: this.handleIntersectionChange}, a) : a
                    }
                }]), t
            }(h.Component);
        m.propTypes = {
            id: d.a.string,
            module: d.a.string,
            moduleName: d.a.string,
            index: d.a.string,
            isAd: d.a.bool,
            content: d.a.object,
            extra: d.a.object,
            trackCardShow: d.a.bool,
            attachedInfoBytes: d.a.string
        }, m.defaultProps = {
            id: null,
            module: null,
            index: null,
            isAd: !1,
            content: null,
            extra: null,
            attachedInfoBytes: null,
            trackCardShow: !1,
            visibleThreshold: 0
        };
        var A = m, C = n(71), b = n.n(C), v = function (e) {
            return function (t) {
                var n = function (n) {
                    function s() {
                        return Object(a.a)(this, s), Object(i.a)(this, Object(o.a)(s).apply(this, arguments))
                    }

                    return Object(c.a)(s, n), Object(r.a)(s, [{
                        key: "render", value: function () {
                            var n = "function" == typeof e ? e(this.props) : e;
                            return Object(l.d)(A, n, Object(l.d)(t, this.props))
                        }
                    }]), s
                }(h.Component);
                return b()(n, t)
            }
        };
        n.d(t, "a", function () {
            return A
        }), n.d(t, "b", function () {
            return v
        })
    }, 824: function (e, t, n) {
        "use strict";
        var a = n(4), r = n(31), i = n.n(r), o = n(35), s = n.n(o), c = (n(2), n(15)), l = n.n(c), u = (n(859), n(0)),
            d = function (e) {
                var t = e.className, n = e.duration, r = e.count, o = e.fill, c = e.childWidth, d = e.gap,
                    h = s()(e, ["className", "duration", "count", "fill", "childWidth", "gap"]), p = (c + d) * r - d;
                return Object(u.d)("div", i()({
                    className: l()("BounceLoading", t),
                    style: {width: p, height: 3 * c}
                }, h), function (e) {
                    return Object(a.a)(Array(e))
                }(r).map(function (e, t) {
                    var a = {
                        top: c,
                        left: (c + d) * t,
                        width: c,
                        height: c,
                        backgroundColor: o,
                        animationDuration: "".concat(n, "s"),
                        animationDelay: "".concat(-n / r / 2 * t, "s")
                    };
                    return Object(u.d)("span", {key: "circle-".concat(t), className: "BounceLoading-child", style: a})
                }))
            };
        d.defaultProps = {childWidth: 6, gap: 12, count: 4, duration: .8}, t.a = d
    }, 830: function (e, t, n) {
        "use strict";
        var a = n(6), r = n(10), i = n(9), o = n(7), s = n(8), c = n(3), l = n.n(c), u = n(2), d = n(34),
            h = (n(848), function (e) {
                function t() {
                    var e, n;
                    Object(a.a)(this, t);
                    for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                    return (n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).handleChange = function (e, t) {
                        var a = n.props, r = a.onObserve, i = a.onChange;
                        r && r(e), e.forEach(function (e) {
                            i && i(e, t)
                        })
                    }, n
                }

                return Object(s.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount", value: function () {
                        var e = Object(d.findDOMNode)(this);
                        e && (this.observer = this.createObserver(), this.observer.observe(e))
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.observer && (this.observer.disconnect(), this.observer = null)
                    }
                }, {
                    key: "createObserver", value: function () {
                        var e = this.props, t = e.root, n = e.rootMargin, a = e.threshold, r = e.trackVisibility,
                            i = e.delay;
                        return new window.IntersectionObserver(this.handleChange, {
                            root: t,
                            rootMargin: n,
                            threshold: a,
                            trackVisibility: r,
                            delay: i
                        })
                    }
                }, {
                    key: "render", value: function () {
                        return this.props.children
                    }
                }]), t
            }(u.Component));
        h.propTypes = {
            root: l.a.object,
            rootMargin: l.a.string,
            threshold: l.a.oneOfType([l.a.number, l.a.arrayOf(l.a.number)]),
            trackVisibility: l.a.bool,
            delay: l.a.number,
            onObserve: l.a.func,
            onChange: l.a.func
        }, t.a = h
    }, 848: function (e, t, n) {
        e.exports = n(49)(293)
    }, 859: function (e, t, n) {
    }, 877: function (e, t) {
        e.exports = function (e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
    }
}]);
//# sourceMappingURL=main.sign-page.c468a17b3d72a896109e.js.map