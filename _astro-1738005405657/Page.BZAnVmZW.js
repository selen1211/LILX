import {u as ft, v as ma, w as Re, T as ra, a as Ue, s as Oo, b as $c, c as Zd, r as dl} from "./scrollToSection.CNgy7Ie5.js";
import {i as zc, r as T, c as u, _ as oe, d as re, o as xe, a as Zt, b as m, e as y, f as P, t as te, g as x, n as Ot, h as J, F as pe, j as Me, k as st, w as le, l as $e, m as mt, p as $, q as Le, s as et, u as dt, v as ne, x as ze, y as ye, z as mn, A as Kd, B as _s, C as ws, D as je, E as sa, G as la, H as uo, I as xr, J as Ka, K as qt, L as V, M as Zc, N as xn, O as Qd, P as Xd, Q as Kc, R as Qc, S as Yi, T as Vn, U as ea, V as ml, W as Jd, X as em, Y as tm} from "./_plugin-vue_export-helper.DYk1-nld.js";
import {B as Wi, S as gn, a as am, M as Ur, b as Wa, D as nm, c as Qa, d as fr, E as Oa, e as Pn, f as Xc, g as Jc, Z as rm, h as om, i as im, P as eu, j as tu, C as mi, k as sm, A as lm, l as cm, m as um, n as ks, o as au, I as gl, p as gi, q as dm, r as mm, s as gm, t as pl, u as Fr, v as jr, w as pi, x as nu, y as pm, z as vm, F as hm, G as fm, H as vl, J as ru, K as hl, L as ym, N as bm, O as _m, Q as qi, R as ou, T as wm, U as km, V as Sm, W as fl, X as Cm, Y as ar, _ as yl, $ as Tm, a0 as Im, a1 as Pm, a2 as Em, a3 as iu, a4 as Do, a5 as Dm, a6 as Am, a7 as Mm, a8 as Om, a9 as xm, aa as bl, ab as Bm} from "./siteModulesConstants.BHqRCOJy.js";
/* empty css                        */
import {g as Lm, a as xo, s as $i, b as Rm, i as Nm, c as ei, d as Hm, e as ir, f as su} from "./googleTagManager.BlNj7Ekm.js";
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var _l;
(function(t) {
    t.pop = "pop",
    t.push = "push"
}
)(_l || (_l = {}));
var wl;
(function(t) {
    t.back = "back",
    t.forward = "forward",
    t.unknown = ""
}
)(wl || (wl = {}));
var kl;
(function(t) {
    t[t.aborted = 4] = "aborted",
    t[t.cancelled = 8] = "cancelled",
    t[t.duplicated = 16] = "duplicated"
}
)(kl || (kl = {}));
const Vm = Symbol("")
  , Um = Symbol("");
function Fm() {
    return zc(Vm)
}
function lu() {
    return zc(Um)
}
var Xe;
(function(t) {
    t.assertEqual = r => r;
    function n(r) {}
    t.assertIs = n;
    function a(r) {
        throw new Error
    }
    t.assertNever = a,
    t.arrayToEnum = r => {
        const o = {};
        for (const i of r)
            o[i] = i;
        return o
    }
    ,
    t.getValidEnumValues = r => {
        const o = t.objectKeys(r).filter(s => typeof r[r[s]] != "number")
          , i = {};
        for (const s of o)
            i[s] = r[s];
        return t.objectValues(i)
    }
    ,
    t.objectValues = r => t.objectKeys(r).map(function(o) {
        return r[o]
    }),
    t.objectKeys = typeof Object.keys == "function" ? r => Object.keys(r) : r => {
        const o = [];
        for (const i in r)
            Object.prototype.hasOwnProperty.call(r, i) && o.push(i);
        return o
    }
    ,
    t.find = (r, o) => {
        for (const i of r)
            if (o(i))
                return i
    }
    ,
    t.isInteger = typeof Number.isInteger == "function" ? r => Number.isInteger(r) : r => typeof r == "number" && isFinite(r) && Math.floor(r) === r;
    function e(r, o=" | ") {
        return r.map(i => typeof i == "string" ? `'${i}'` : i).join(o)
    }
    t.joinValues = e,
    t.jsonStringifyReplacer = (r, o) => typeof o == "bigint" ? o.toString() : o
}
)(Xe || (Xe = {}));
var zi;
(function(t) {
    t.mergeShapes = (n, a) => ({
        ...n,
        ...a
    })
}
)(zi || (zi = {}));
const _e = Xe.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , $a = t => {
    switch (typeof t) {
    case "undefined":
        return _e.undefined;
    case "string":
        return _e.string;
    case "number":
        return isNaN(t) ? _e.nan : _e.number;
    case "boolean":
        return _e.boolean;
    case "function":
        return _e.function;
    case "bigint":
        return _e.bigint;
    case "symbol":
        return _e.symbol;
    case "object":
        return Array.isArray(t) ? _e.array : t === null ? _e.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? _e.promise : typeof Map < "u" && t instanceof Map ? _e.map : typeof Set < "u" && t instanceof Set ? _e.set : typeof Date < "u" && t instanceof Date ? _e.date : _e.object;
    default:
        return _e.unknown
    }
}
  , ce = Xe.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , jm = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class ia extends Error {
    get errors() {
        return this.issues
    }
    constructor(n) {
        super(),
        this.issues = [],
        this.addIssue = e => {
            this.issues = [...this.issues, e]
        }
        ,
        this.addIssues = (e=[]) => {
            this.issues = [...this.issues, ...e]
        }
        ;
        const a = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, a) : this.__proto__ = a,
        this.name = "ZodError",
        this.issues = n
    }
    format(n) {
        const a = n || function(o) {
            return o.message
        }
          , e = {
            _errors: []
        }
          , r = o => {
            for (const i of o.issues)
                if (i.code === "invalid_union")
                    i.unionErrors.map(r);
                else if (i.code === "invalid_return_type")
                    r(i.returnTypeError);
                else if (i.code === "invalid_arguments")
                    r(i.argumentsError);
                else if (i.path.length === 0)
                    e._errors.push(a(i));
                else {
                    let s = e
                      , l = 0;
                    for (; l < i.path.length; ) {
                        const d = i.path[l];
                        l === i.path.length - 1 ? (s[d] = s[d] || {
                            _errors: []
                        },
                        s[d]._errors.push(a(i))) : s[d] = s[d] || {
                            _errors: []
                        },
                        s = s[d],
                        l++
                    }
                }
        }
        ;
        return r(this),
        e
    }
    static assert(n) {
        if (!(n instanceof ia))
            throw new Error(`Not a ZodError: ${n}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Xe.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(n=a => a.message) {
        const a = {}
          , e = [];
        for (const r of this.issues)
            r.path.length > 0 ? (a[r.path[0]] = a[r.path[0]] || [],
            a[r.path[0]].push(n(r))) : e.push(n(r));
        return {
            formErrors: e,
            fieldErrors: a
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
ia.create = t => new ia(t);
const sr = (t, n) => {
    let a;
    switch (t.code) {
    case ce.invalid_type:
        t.received === _e.undefined ? a = "Required" : a = `Expected ${t.expected}, received ${t.received}`;
        break;
    case ce.invalid_literal:
        a = `Invalid literal value, expected ${JSON.stringify(t.expected, Xe.jsonStringifyReplacer)}`;
        break;
    case ce.unrecognized_keys:
        a = `Unrecognized key(s) in object: ${Xe.joinValues(t.keys, ", ")}`;
        break;
    case ce.invalid_union:
        a = "Invalid input";
        break;
    case ce.invalid_union_discriminator:
        a = `Invalid discriminator value. Expected ${Xe.joinValues(t.options)}`;
        break;
    case ce.invalid_enum_value:
        a = `Invalid enum value. Expected ${Xe.joinValues(t.options)}, received '${t.received}'`;
        break;
    case ce.invalid_arguments:
        a = "Invalid function arguments";
        break;
    case ce.invalid_return_type:
        a = "Invalid function return type";
        break;
    case ce.invalid_date:
        a = "Invalid date";
        break;
    case ce.invalid_string:
        typeof t.validation == "object" ? "includes"in t.validation ? (a = `Invalid input: must include "${t.validation.includes}"`,
        typeof t.validation.position == "number" && (a = `${a} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? a = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? a = `Invalid input: must end with "${t.validation.endsWith}"` : Xe.assertNever(t.validation) : t.validation !== "regex" ? a = `Invalid ${t.validation}` : a = "Invalid";
        break;
    case ce.too_small:
        t.type === "array" ? a = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? a = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? a = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? a = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : a = "Invalid input";
        break;
    case ce.too_big:
        t.type === "array" ? a = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? a = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? a = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? a = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? a = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : a = "Invalid input";
        break;
    case ce.custom:
        a = "Invalid input";
        break;
    case ce.invalid_intersection_types:
        a = "Intersection results could not be merged";
        break;
    case ce.not_multiple_of:
        a = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case ce.not_finite:
        a = "Number must be finite";
        break;
    default:
        a = n.defaultError,
        Xe.assertNever(t)
    }
    return {
        message: a
    }
}
;
let cu = sr;
function Gm(t) {
    cu = t
}
function Bo() {
    return cu
}
const Lo = t => {
    const {data: n, path: a, errorMaps: e, issueData: r} = t
      , o = [...a, ...r.path || []]
      , i = {
        ...r,
        path: o
    };
    if (r.message !== void 0)
        return {
            ...r,
            path: o,
            message: r.message
        };
    let s = "";
    const l = e.filter(d => !!d).slice().reverse();
    for (const d of l)
        s = d(i, {
            data: n,
            defaultError: s
        }).message;
    return {
        ...r,
        path: o,
        message: s
    }
}
  , Ym = [];
function he(t, n) {
    const a = Bo()
      , e = Lo({
        issueData: n,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, a, a === sr ? void 0 : sr].filter(r => !!r)
    });
    t.common.issues.push(e)
}
class Kt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(n, a) {
        const e = [];
        for (const r of a) {
            if (r.status === "aborted")
                return Fe;
            r.status === "dirty" && n.dirty(),
            e.push(r.value)
        }
        return {
            status: n.value,
            value: e
        }
    }
    static async mergeObjectAsync(n, a) {
        const e = [];
        for (const r of a) {
            const o = await r.key
              , i = await r.value;
            e.push({
                key: o,
                value: i
            })
        }
        return Kt.mergeObjectSync(n, e)
    }
    static mergeObjectSync(n, a) {
        const e = {};
        for (const r of a) {
            const {key: o, value: i} = r;
            if (o.status === "aborted" || i.status === "aborted")
                return Fe;
            o.status === "dirty" && n.dirty(),
            i.status === "dirty" && n.dirty(),
            o.value !== "__proto__" && (typeof i.value < "u" || r.alwaysSet) && (e[o.value] = i.value)
        }
        return {
            status: n.value,
            value: e
        }
    }
}
const Fe = Object.freeze({
    status: "aborted"
})
  , Xn = t => ({
    status: "dirty",
    value: t
})
  , aa = t => ({
    status: "valid",
    value: t
})
  , Zi = t => t.status === "aborted"
  , Ki = t => t.status === "dirty"
  , Bn = t => t.status === "valid"
  , Gr = t => typeof Promise < "u" && t instanceof Promise;
function Ro(t, n, a, e) {
    if (typeof n == "function" ? t !== n || !e : !n.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n.get(t)
}
function uu(t, n, a, e, r) {
    if (typeof n == "function" ? t !== n || !r : !n.has(t))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n.set(t, a),
    a
}
var De;
(function(t) {
    t.errToObj = n => typeof n == "string" ? {
        message: n
    } : n || {},
    t.toString = n => typeof n == "string" ? n : n?.message
}
)(De || (De = {}));
var Ar, Mr;
class Ha {
    constructor(n, a, e, r) {
        this._cachedPath = [],
        this.parent = n,
        this.data = a,
        this._path = e,
        this._key = r
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const Sl = (t, n) => {
    if (Bn(n))
        return {
            success: !0,
            data: n.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const a = new ia(t.common.issues);
            return this._error = a,
            this._error
        }
    }
}
;
function Ge(t) {
    if (!t)
        return {};
    const {errorMap: n, invalid_type_error: a, required_error: e, description: r} = t;
    if (n && (a || e))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return n ? {
        errorMap: n,
        description: r
    } : {
        errorMap: (i, s) => {
            var l, d;
            const {message: p} = t;
            return i.code === "invalid_enum_value" ? {
                message: p ?? s.defaultError
            } : typeof s.data > "u" ? {
                message: (l = p ?? e) !== null && l !== void 0 ? l : s.defaultError
            } : i.code !== "invalid_type" ? {
                message: s.defaultError
            } : {
                message: (d = p ?? a) !== null && d !== void 0 ? d : s.defaultError
            }
        }
        ,
        description: r
    }
}
class Ye {
    get description() {
        return this._def.description
    }
    _getType(n) {
        return $a(n.data)
    }
    _getOrReturnCtx(n, a) {
        return a || {
            common: n.parent.common,
            data: n.data,
            parsedType: $a(n.data),
            schemaErrorMap: this._def.errorMap,
            path: n.path,
            parent: n.parent
        }
    }
    _processInputParams(n) {
        return {
            status: new Kt,
            ctx: {
                common: n.parent.common,
                data: n.data,
                parsedType: $a(n.data),
                schemaErrorMap: this._def.errorMap,
                path: n.path,
                parent: n.parent
            }
        }
    }
    _parseSync(n) {
        const a = this._parse(n);
        if (Gr(a))
            throw new Error("Synchronous parse encountered promise.");
        return a
    }
    _parseAsync(n) {
        const a = this._parse(n);
        return Promise.resolve(a)
    }
    parse(n, a) {
        const e = this.safeParse(n, a);
        if (e.success)
            return e.data;
        throw e.error
    }
    safeParse(n, a) {
        var e;
        const r = {
            common: {
                issues: [],
                async: (e = a?.async) !== null && e !== void 0 ? e : !1,
                contextualErrorMap: a?.errorMap
            },
            path: a?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: $a(n)
        }
          , o = this._parseSync({
            data: n,
            path: r.path,
            parent: r
        });
        return Sl(r, o)
    }
    "~validate"(n) {
        var a, e;
        const r = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: $a(n)
        };
        if (!this["~standard"].async)
            try {
                const o = this._parseSync({
                    data: n,
                    path: [],
                    parent: r
                });
                return Bn(o) ? {
                    value: o.value
                } : {
                    issues: r.common.issues
                }
            } catch (o) {
                !((e = (a = o?.message) === null || a === void 0 ? void 0 : a.toLowerCase()) === null || e === void 0) && e.includes("encountered") && (this["~standard"].async = !0),
                r.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: n,
            path: [],
            parent: r
        }).then(o => Bn(o) ? {
            value: o.value
        } : {
            issues: r.common.issues
        })
    }
    async parseAsync(n, a) {
        const e = await this.safeParseAsync(n, a);
        if (e.success)
            return e.data;
        throw e.error
    }
    async safeParseAsync(n, a) {
        const e = {
            common: {
                issues: [],
                contextualErrorMap: a?.errorMap,
                async: !0
            },
            path: a?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: $a(n)
        }
          , r = this._parse({
            data: n,
            path: e.path,
            parent: e
        })
          , o = await (Gr(r) ? r : Promise.resolve(r));
        return Sl(e, o)
    }
    refine(n, a) {
        const e = r => typeof a == "string" || typeof a > "u" ? {
            message: a
        } : typeof a == "function" ? a(r) : a;
        return this._refinement( (r, o) => {
            const i = n(r)
              , s = () => o.addIssue({
                code: ce.custom,
                ...e(r)
            });
            return typeof Promise < "u" && i instanceof Promise ? i.then(l => l ? !0 : (s(),
            !1)) : i ? !0 : (s(),
            !1)
        }
        )
    }
    refinement(n, a) {
        return this._refinement( (e, r) => n(e) ? !0 : (r.addIssue(typeof a == "function" ? a(e, r) : a),
        !1))
    }
    _refinement(n) {
        return new Ia({
            schema: this,
            typeName: Ve.ZodEffects,
            effect: {
                type: "refinement",
                refinement: n
            }
        })
    }
    superRefine(n) {
        return this._refinement(n)
    }
    constructor(n) {
        this.spa = this.safeParseAsync,
        this._def = n,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: a => this["~validate"](a)
        }
    }
    optional() {
        return Ra.create(this, this._def)
    }
    nullable() {
        return fn.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return ka.create(this)
    }
    promise() {
        return cr.create(this, this._def)
    }
    or(n) {
        return $r.create([this, n], this._def)
    }
    and(n) {
        return zr.create(this, n, this._def)
    }
    transform(n) {
        return new Ia({
            ...Ge(this._def),
            schema: this,
            typeName: Ve.ZodEffects,
            effect: {
                type: "transform",
                transform: n
            }
        })
    }
    default(n) {
        const a = typeof n == "function" ? n : () => n;
        return new Jr({
            ...Ge(this._def),
            innerType: this,
            defaultValue: a,
            typeName: Ve.ZodDefault
        })
    }
    brand() {
        return new Ss({
            typeName: Ve.ZodBranded,
            type: this,
            ...Ge(this._def)
        })
    }
    catch(n) {
        const a = typeof n == "function" ? n : () => n;
        return new eo({
            ...Ge(this._def),
            innerType: this,
            catchValue: a,
            typeName: Ve.ZodCatch
        })
    }
    describe(n) {
        const a = this.constructor;
        return new a({
            ...this._def,
            description: n
        })
    }
    pipe(n) {
        return mo.create(this, n)
    }
    readonly() {
        return to.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Wm = /^c[^\s-]{8,}$/i
  , qm = /^[0-9a-z]+$/
  , $m = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , zm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , Zm = /^[a-z0-9_-]{21}$/i
  , Km = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , Qm = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Xm = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Jm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let vi;
const eg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , tg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , ag = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , ng = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , rg = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , og = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , du = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , ig = new RegExp(`^${du}$`);
function mu(t) {
    let n = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? n = `${n}\\.\\d{${t.precision}}` : t.precision == null && (n = `${n}(\\.\\d+)?`),
    n
}
function sg(t) {
    return new RegExp(`^${mu(t)}$`)
}
function gu(t) {
    let n = `${du}T${mu(t)}`;
    const a = [];
    return a.push(t.local ? "Z?" : "Z"),
    t.offset && a.push("([+-]\\d{2}:?\\d{2})"),
    n = `${n}(${a.join("|")})`,
    new RegExp(`^${n}$`)
}
function lg(t, n) {
    return !!((n === "v4" || !n) && eg.test(t) || (n === "v6" || !n) && ag.test(t))
}
function cg(t, n) {
    if (!Km.test(t))
        return !1;
    try {
        const [a] = t.split(".")
          , e = a.replace(/-/g, "+").replace(/_/g, "/").padEnd(a.length + (4 - a.length % 4) % 4, "=")
          , r = JSON.parse(atob(e));
        return !(typeof r != "object" || r === null || !r.typ || !r.alg || n && r.alg !== n)
    } catch {
        return !1
    }
}
function ug(t, n) {
    return !!((n === "v4" || !n) && tg.test(t) || (n === "v6" || !n) && ng.test(t))
}
class wa extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = String(n.data)),
        this._getType(n) !== _e.string) {
            const o = this._getOrReturnCtx(n);
            return he(o, {
                code: ce.invalid_type,
                expected: _e.string,
                received: o.parsedType
            }),
            Fe
        }
        const e = new Kt;
        let r;
        for (const o of this._def.checks)
            if (o.kind === "min")
                n.data.length < o.value && (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.too_small,
                    minimum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "max")
                n.data.length > o.value && (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.too_big,
                    maximum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "length") {
                const i = n.data.length > o.value
                  , s = n.data.length < o.value;
                (i || s) && (r = this._getOrReturnCtx(n, r),
                i ? he(r, {
                    code: ce.too_big,
                    maximum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: o.message
                }) : s && he(r, {
                    code: ce.too_small,
                    minimum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: o.message
                }),
                e.dirty())
            } else if (o.kind === "email")
                Xm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "email",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "emoji")
                vi || (vi = new RegExp(Jm,"u")),
                vi.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "emoji",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "uuid")
                zm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "uuid",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "nanoid")
                Zm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "nanoid",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "cuid")
                Wm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "cuid",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "cuid2")
                qm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "cuid2",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "ulid")
                $m.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "ulid",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "url")
                try {
                    new URL(n.data)
                } catch {
                    r = this._getOrReturnCtx(n, r),
                    he(r, {
                        validation: "url",
                        code: ce.invalid_string,
                        message: o.message
                    }),
                    e.dirty()
                }
            else
                o.kind === "regex" ? (o.regex.lastIndex = 0,
                o.regex.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "regex",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty())) : o.kind === "trim" ? n.data = n.data.trim() : o.kind === "includes" ? n.data.includes(o.value, o.position) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.invalid_string,
                    validation: {
                        includes: o.value,
                        position: o.position
                    },
                    message: o.message
                }),
                e.dirty()) : o.kind === "toLowerCase" ? n.data = n.data.toLowerCase() : o.kind === "toUpperCase" ? n.data = n.data.toUpperCase() : o.kind === "startsWith" ? n.data.startsWith(o.value) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.invalid_string,
                    validation: {
                        startsWith: o.value
                    },
                    message: o.message
                }),
                e.dirty()) : o.kind === "endsWith" ? n.data.endsWith(o.value) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.invalid_string,
                    validation: {
                        endsWith: o.value
                    },
                    message: o.message
                }),
                e.dirty()) : o.kind === "datetime" ? gu(o).test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.invalid_string,
                    validation: "datetime",
                    message: o.message
                }),
                e.dirty()) : o.kind === "date" ? ig.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.invalid_string,
                    validation: "date",
                    message: o.message
                }),
                e.dirty()) : o.kind === "time" ? sg(o).test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    code: ce.invalid_string,
                    validation: "time",
                    message: o.message
                }),
                e.dirty()) : o.kind === "duration" ? Qm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "duration",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "ip" ? lg(n.data, o.version) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "ip",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "jwt" ? cg(n.data, o.alg) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "jwt",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "cidr" ? ug(n.data, o.version) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "cidr",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "base64" ? rg.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "base64",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "base64url" ? og.test(n.data) || (r = this._getOrReturnCtx(n, r),
                he(r, {
                    validation: "base64url",
                    code: ce.invalid_string,
                    message: o.message
                }),
                e.dirty()) : Xe.assertNever(o);
        return {
            status: e.value,
            value: n.data
        }
    }
    _regex(n, a, e) {
        return this.refinement(r => n.test(r), {
            validation: a,
            code: ce.invalid_string,
            ...De.errToObj(e)
        })
    }
    _addCheck(n) {
        return new wa({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    email(n) {
        return this._addCheck({
            kind: "email",
            ...De.errToObj(n)
        })
    }
    url(n) {
        return this._addCheck({
            kind: "url",
            ...De.errToObj(n)
        })
    }
    emoji(n) {
        return this._addCheck({
            kind: "emoji",
            ...De.errToObj(n)
        })
    }
    uuid(n) {
        return this._addCheck({
            kind: "uuid",
            ...De.errToObj(n)
        })
    }
    nanoid(n) {
        return this._addCheck({
            kind: "nanoid",
            ...De.errToObj(n)
        })
    }
    cuid(n) {
        return this._addCheck({
            kind: "cuid",
            ...De.errToObj(n)
        })
    }
    cuid2(n) {
        return this._addCheck({
            kind: "cuid2",
            ...De.errToObj(n)
        })
    }
    ulid(n) {
        return this._addCheck({
            kind: "ulid",
            ...De.errToObj(n)
        })
    }
    base64(n) {
        return this._addCheck({
            kind: "base64",
            ...De.errToObj(n)
        })
    }
    base64url(n) {
        return this._addCheck({
            kind: "base64url",
            ...De.errToObj(n)
        })
    }
    jwt(n) {
        return this._addCheck({
            kind: "jwt",
            ...De.errToObj(n)
        })
    }
    ip(n) {
        return this._addCheck({
            kind: "ip",
            ...De.errToObj(n)
        })
    }
    cidr(n) {
        return this._addCheck({
            kind: "cidr",
            ...De.errToObj(n)
        })
    }
    datetime(n) {
        var a, e;
        return typeof n == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: n
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof n?.precision > "u" ? null : n?.precision,
            offset: (a = n?.offset) !== null && a !== void 0 ? a : !1,
            local: (e = n?.local) !== null && e !== void 0 ? e : !1,
            ...De.errToObj(n?.message)
        })
    }
    date(n) {
        return this._addCheck({
            kind: "date",
            message: n
        })
    }
    time(n) {
        return typeof n == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: n
        }) : this._addCheck({
            kind: "time",
            precision: typeof n?.precision > "u" ? null : n?.precision,
            ...De.errToObj(n?.message)
        })
    }
    duration(n) {
        return this._addCheck({
            kind: "duration",
            ...De.errToObj(n)
        })
    }
    regex(n, a) {
        return this._addCheck({
            kind: "regex",
            regex: n,
            ...De.errToObj(a)
        })
    }
    includes(n, a) {
        return this._addCheck({
            kind: "includes",
            value: n,
            position: a?.position,
            ...De.errToObj(a?.message)
        })
    }
    startsWith(n, a) {
        return this._addCheck({
            kind: "startsWith",
            value: n,
            ...De.errToObj(a)
        })
    }
    endsWith(n, a) {
        return this._addCheck({
            kind: "endsWith",
            value: n,
            ...De.errToObj(a)
        })
    }
    min(n, a) {
        return this._addCheck({
            kind: "min",
            value: n,
            ...De.errToObj(a)
        })
    }
    max(n, a) {
        return this._addCheck({
            kind: "max",
            value: n,
            ...De.errToObj(a)
        })
    }
    length(n, a) {
        return this._addCheck({
            kind: "length",
            value: n,
            ...De.errToObj(a)
        })
    }
    nonempty(n) {
        return this.min(1, De.errToObj(n))
    }
    trim() {
        return new wa({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new wa({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new wa({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(n => n.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(n => n.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(n => n.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(n => n.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(n => n.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(n => n.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(n => n.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(n => n.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(n => n.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(n => n.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(n => n.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(n => n.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(n => n.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(n => n.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(n => n.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(n => n.kind === "base64url")
    }
    get minLength() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n
    }
    get maxLength() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n
    }
}
wa.create = t => {
    var n;
    return new wa({
        checks: [],
        typeName: Ve.ZodString,
        coerce: (n = t?.coerce) !== null && n !== void 0 ? n : !1,
        ...Ge(t)
    })
}
;
function dg(t, n) {
    const a = (t.toString().split(".")[1] || "").length
      , e = (n.toString().split(".")[1] || "").length
      , r = a > e ? a : e
      , o = parseInt(t.toFixed(r).replace(".", ""))
      , i = parseInt(n.toFixed(r).replace(".", ""));
    return o % i / Math.pow(10, r)
}
class pn extends Ye {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(n) {
        if (this._def.coerce && (n.data = Number(n.data)),
        this._getType(n) !== _e.number) {
            const o = this._getOrReturnCtx(n);
            return he(o, {
                code: ce.invalid_type,
                expected: _e.number,
                received: o.parsedType
            }),
            Fe
        }
        let e;
        const r = new Kt;
        for (const o of this._def.checks)
            o.kind === "int" ? Xe.isInteger(n.data) || (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.invalid_type,
                expected: "integer",
                received: "float",
                message: o.message
            }),
            r.dirty()) : o.kind === "min" ? (o.inclusive ? n.data < o.value : n.data <= o.value) && (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.too_small,
                minimum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message
            }),
            r.dirty()) : o.kind === "max" ? (o.inclusive ? n.data > o.value : n.data >= o.value) && (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.too_big,
                maximum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message
            }),
            r.dirty()) : o.kind === "multipleOf" ? dg(n.data, o.value) !== 0 && (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.not_multiple_of,
                multipleOf: o.value,
                message: o.message
            }),
            r.dirty()) : o.kind === "finite" ? Number.isFinite(n.data) || (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.not_finite,
                message: o.message
            }),
            r.dirty()) : Xe.assertNever(o);
        return {
            status: r.value,
            value: n.data
        }
    }
    gte(n, a) {
        return this.setLimit("min", n, !0, De.toString(a))
    }
    gt(n, a) {
        return this.setLimit("min", n, !1, De.toString(a))
    }
    lte(n, a) {
        return this.setLimit("max", n, !0, De.toString(a))
    }
    lt(n, a) {
        return this.setLimit("max", n, !1, De.toString(a))
    }
    setLimit(n, a, e, r) {
        return new pn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: a,
                inclusive: e,
                message: De.toString(r)
            }]
        })
    }
    _addCheck(n) {
        return new pn({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    int(n) {
        return this._addCheck({
            kind: "int",
            message: De.toString(n)
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: De.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: De.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: De.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: De.toString(n)
        })
    }
    multipleOf(n, a) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: De.toString(a)
        })
    }
    finite(n) {
        return this._addCheck({
            kind: "finite",
            message: De.toString(n)
        })
    }
    safe(n) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: De.toString(n)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: De.toString(n)
        })
    }
    get minValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n
    }
    get isInt() {
        return !!this._def.checks.find(n => n.kind === "int" || n.kind === "multipleOf" && Xe.isInteger(n.value))
    }
    get isFinite() {
        let n = null
          , a = null;
        for (const e of this._def.checks) {
            if (e.kind === "finite" || e.kind === "int" || e.kind === "multipleOf")
                return !0;
            e.kind === "min" ? (a === null || e.value > a) && (a = e.value) : e.kind === "max" && (n === null || e.value < n) && (n = e.value)
        }
        return Number.isFinite(a) && Number.isFinite(n)
    }
}
pn.create = t => new pn({
    checks: [],
    typeName: Ve.ZodNumber,
    coerce: t?.coerce || !1,
    ...Ge(t)
});
class vn extends Ye {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(n) {
        if (this._def.coerce)
            try {
                n.data = BigInt(n.data)
            } catch {
                return this._getInvalidInput(n)
            }
        if (this._getType(n) !== _e.bigint)
            return this._getInvalidInput(n);
        let e;
        const r = new Kt;
        for (const o of this._def.checks)
            o.kind === "min" ? (o.inclusive ? n.data < o.value : n.data <= o.value) && (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.too_small,
                type: "bigint",
                minimum: o.value,
                inclusive: o.inclusive,
                message: o.message
            }),
            r.dirty()) : o.kind === "max" ? (o.inclusive ? n.data > o.value : n.data >= o.value) && (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.too_big,
                type: "bigint",
                maximum: o.value,
                inclusive: o.inclusive,
                message: o.message
            }),
            r.dirty()) : o.kind === "multipleOf" ? n.data % o.value !== BigInt(0) && (e = this._getOrReturnCtx(n, e),
            he(e, {
                code: ce.not_multiple_of,
                multipleOf: o.value,
                message: o.message
            }),
            r.dirty()) : Xe.assertNever(o);
        return {
            status: r.value,
            value: n.data
        }
    }
    _getInvalidInput(n) {
        const a = this._getOrReturnCtx(n);
        return he(a, {
            code: ce.invalid_type,
            expected: _e.bigint,
            received: a.parsedType
        }),
        Fe
    }
    gte(n, a) {
        return this.setLimit("min", n, !0, De.toString(a))
    }
    gt(n, a) {
        return this.setLimit("min", n, !1, De.toString(a))
    }
    lte(n, a) {
        return this.setLimit("max", n, !0, De.toString(a))
    }
    lt(n, a) {
        return this.setLimit("max", n, !1, De.toString(a))
    }
    setLimit(n, a, e, r) {
        return new vn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: a,
                inclusive: e,
                message: De.toString(r)
            }]
        })
    }
    _addCheck(n) {
        return new vn({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: De.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: De.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: De.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: De.toString(n)
        })
    }
    multipleOf(n, a) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: De.toString(a)
        })
    }
    get minValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n
    }
}
vn.create = t => {
    var n;
    return new vn({
        checks: [],
        typeName: Ve.ZodBigInt,
        coerce: (n = t?.coerce) !== null && n !== void 0 ? n : !1,
        ...Ge(t)
    })
}
;
class Yr extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = !!n.data),
        this._getType(n) !== _e.boolean) {
            const e = this._getOrReturnCtx(n);
            return he(e, {
                code: ce.invalid_type,
                expected: _e.boolean,
                received: e.parsedType
            }),
            Fe
        }
        return aa(n.data)
    }
}
Yr.create = t => new Yr({
    typeName: Ve.ZodBoolean,
    coerce: t?.coerce || !1,
    ...Ge(t)
});
class Ln extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = new Date(n.data)),
        this._getType(n) !== _e.date) {
            const o = this._getOrReturnCtx(n);
            return he(o, {
                code: ce.invalid_type,
                expected: _e.date,
                received: o.parsedType
            }),
            Fe
        }
        if (isNaN(n.data.getTime())) {
            const o = this._getOrReturnCtx(n);
            return he(o, {
                code: ce.invalid_date
            }),
            Fe
        }
        const e = new Kt;
        let r;
        for (const o of this._def.checks)
            o.kind === "min" ? n.data.getTime() < o.value && (r = this._getOrReturnCtx(n, r),
            he(r, {
                code: ce.too_small,
                message: o.message,
                inclusive: !0,
                exact: !1,
                minimum: o.value,
                type: "date"
            }),
            e.dirty()) : o.kind === "max" ? n.data.getTime() > o.value && (r = this._getOrReturnCtx(n, r),
            he(r, {
                code: ce.too_big,
                message: o.message,
                inclusive: !0,
                exact: !1,
                maximum: o.value,
                type: "date"
            }),
            e.dirty()) : Xe.assertNever(o);
        return {
            status: e.value,
            value: new Date(n.data.getTime())
        }
    }
    _addCheck(n) {
        return new Ln({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    min(n, a) {
        return this._addCheck({
            kind: "min",
            value: n.getTime(),
            message: De.toString(a)
        })
    }
    max(n, a) {
        return this._addCheck({
            kind: "max",
            value: n.getTime(),
            message: De.toString(a)
        })
    }
    get minDate() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n != null ? new Date(n) : null
    }
    get maxDate() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n != null ? new Date(n) : null
    }
}
Ln.create = t => new Ln({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: Ve.ZodDate,
    ...Ge(t)
});
class No extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.symbol) {
            const e = this._getOrReturnCtx(n);
            return he(e, {
                code: ce.invalid_type,
                expected: _e.symbol,
                received: e.parsedType
            }),
            Fe
        }
        return aa(n.data)
    }
}
No.create = t => new No({
    typeName: Ve.ZodSymbol,
    ...Ge(t)
});
class Wr extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.undefined) {
            const e = this._getOrReturnCtx(n);
            return he(e, {
                code: ce.invalid_type,
                expected: _e.undefined,
                received: e.parsedType
            }),
            Fe
        }
        return aa(n.data)
    }
}
Wr.create = t => new Wr({
    typeName: Ve.ZodUndefined,
    ...Ge(t)
});
class qr extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.null) {
            const e = this._getOrReturnCtx(n);
            return he(e, {
                code: ce.invalid_type,
                expected: _e.null,
                received: e.parsedType
            }),
            Fe
        }
        return aa(n.data)
    }
}
qr.create = t => new qr({
    typeName: Ve.ZodNull,
    ...Ge(t)
});
class lr extends Ye {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(n) {
        return aa(n.data)
    }
}
lr.create = t => new lr({
    typeName: Ve.ZodAny,
    ...Ge(t)
});
class Dn extends Ye {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(n) {
        return aa(n.data)
    }
}
Dn.create = t => new Dn({
    typeName: Ve.ZodUnknown,
    ...Ge(t)
});
class Xa extends Ye {
    _parse(n) {
        const a = this._getOrReturnCtx(n);
        return he(a, {
            code: ce.invalid_type,
            expected: _e.never,
            received: a.parsedType
        }),
        Fe
    }
}
Xa.create = t => new Xa({
    typeName: Ve.ZodNever,
    ...Ge(t)
});
class Ho extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.undefined) {
            const e = this._getOrReturnCtx(n);
            return he(e, {
                code: ce.invalid_type,
                expected: _e.void,
                received: e.parsedType
            }),
            Fe
        }
        return aa(n.data)
    }
}
Ho.create = t => new Ho({
    typeName: Ve.ZodVoid,
    ...Ge(t)
});
class ka extends Ye {
    _parse(n) {
        const {ctx: a, status: e} = this._processInputParams(n)
          , r = this._def;
        if (a.parsedType !== _e.array)
            return he(a, {
                code: ce.invalid_type,
                expected: _e.array,
                received: a.parsedType
            }),
            Fe;
        if (r.exactLength !== null) {
            const i = a.data.length > r.exactLength.value
              , s = a.data.length < r.exactLength.value;
            (i || s) && (he(a, {
                code: i ? ce.too_big : ce.too_small,
                minimum: s ? r.exactLength.value : void 0,
                maximum: i ? r.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message
            }),
            e.dirty())
        }
        if (r.minLength !== null && a.data.length < r.minLength.value && (he(a, {
            code: ce.too_small,
            minimum: r.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: r.minLength.message
        }),
        e.dirty()),
        r.maxLength !== null && a.data.length > r.maxLength.value && (he(a, {
            code: ce.too_big,
            maximum: r.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: r.maxLength.message
        }),
        e.dirty()),
        a.common.async)
            return Promise.all([...a.data].map( (i, s) => r.type._parseAsync(new Ha(a,i,a.path,s)))).then(i => Kt.mergeArray(e, i));
        const o = [...a.data].map( (i, s) => r.type._parseSync(new Ha(a,i,a.path,s)));
        return Kt.mergeArray(e, o)
    }
    get element() {
        return this._def.type
    }
    min(n, a) {
        return new ka({
            ...this._def,
            minLength: {
                value: n,
                message: De.toString(a)
            }
        })
    }
    max(n, a) {
        return new ka({
            ...this._def,
            maxLength: {
                value: n,
                message: De.toString(a)
            }
        })
    }
    length(n, a) {
        return new ka({
            ...this._def,
            exactLength: {
                value: n,
                message: De.toString(a)
            }
        })
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
ka.create = (t, n) => new ka({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ve.ZodArray,
    ...Ge(n)
});
function Kn(t) {
    if (t instanceof St) {
        const n = {};
        for (const a in t.shape) {
            const e = t.shape[a];
            n[a] = Ra.create(Kn(e))
        }
        return new St({
            ...t._def,
            shape: () => n
        })
    } else
        return t instanceof ka ? new ka({
            ...t._def,
            type: Kn(t.element)
        }) : t instanceof Ra ? Ra.create(Kn(t.unwrap())) : t instanceof fn ? fn.create(Kn(t.unwrap())) : t instanceof Va ? Va.create(t.items.map(n => Kn(n))) : t
}
class St extends Ye {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const n = this._def.shape()
          , a = Xe.objectKeys(n);
        return this._cached = {
            shape: n,
            keys: a
        }
    }
    _parse(n) {
        if (this._getType(n) !== _e.object) {
            const d = this._getOrReturnCtx(n);
            return he(d, {
                code: ce.invalid_type,
                expected: _e.object,
                received: d.parsedType
            }),
            Fe
        }
        const {status: e, ctx: r} = this._processInputParams(n)
          , {shape: o, keys: i} = this._getCached()
          , s = [];
        if (!(this._def.catchall instanceof Xa && this._def.unknownKeys === "strip"))
            for (const d in r.data)
                i.includes(d) || s.push(d);
        const l = [];
        for (const d of i) {
            const p = o[d]
              , g = r.data[d];
            l.push({
                key: {
                    status: "valid",
                    value: d
                },
                value: p._parse(new Ha(r,g,r.path,d)),
                alwaysSet: d in r.data
            })
        }
        if (this._def.catchall instanceof Xa) {
            const d = this._def.unknownKeys;
            if (d === "passthrough")
                for (const p of s)
                    l.push({
                        key: {
                            status: "valid",
                            value: p
                        },
                        value: {
                            status: "valid",
                            value: r.data[p]
                        }
                    });
            else if (d === "strict")
                s.length > 0 && (he(r, {
                    code: ce.unrecognized_keys,
                    keys: s
                }),
                e.dirty());
            else if (d !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const d = this._def.catchall;
            for (const p of s) {
                const g = r.data[p];
                l.push({
                    key: {
                        status: "valid",
                        value: p
                    },
                    value: d._parse(new Ha(r,g,r.path,p)),
                    alwaysSet: p in r.data
                })
            }
        }
        return r.common.async ? Promise.resolve().then(async () => {
            const d = [];
            for (const p of l) {
                const g = await p.key
                  , h = await p.value;
                d.push({
                    key: g,
                    value: h,
                    alwaysSet: p.alwaysSet
                })
            }
            return d
        }
        ).then(d => Kt.mergeObjectSync(e, d)) : Kt.mergeObjectSync(e, l)
    }
    get shape() {
        return this._def.shape()
    }
    strict(n) {
        return De.errToObj,
        new St({
            ...this._def,
            unknownKeys: "strict",
            ...n !== void 0 ? {
                errorMap: (a, e) => {
                    var r, o, i, s;
                    const l = (i = (o = (r = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(r, a, e).message) !== null && i !== void 0 ? i : e.defaultError;
                    return a.code === "unrecognized_keys" ? {
                        message: (s = De.errToObj(n).message) !== null && s !== void 0 ? s : l
                    } : {
                        message: l
                    }
                }
            } : {}
        })
    }
    strip() {
        return new St({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new St({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(n) {
        return new St({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...n
            })
        })
    }
    merge(n) {
        return new St({
            unknownKeys: n._def.unknownKeys,
            catchall: n._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...n._def.shape()
            }),
            typeName: Ve.ZodObject
        })
    }
    setKey(n, a) {
        return this.augment({
            [n]: a
        })
    }
    catchall(n) {
        return new St({
            ...this._def,
            catchall: n
        })
    }
    pick(n) {
        const a = {};
        return Xe.objectKeys(n).forEach(e => {
            n[e] && this.shape[e] && (a[e] = this.shape[e])
        }
        ),
        new St({
            ...this._def,
            shape: () => a
        })
    }
    omit(n) {
        const a = {};
        return Xe.objectKeys(this.shape).forEach(e => {
            n[e] || (a[e] = this.shape[e])
        }
        ),
        new St({
            ...this._def,
            shape: () => a
        })
    }
    deepPartial() {
        return Kn(this)
    }
    partial(n) {
        const a = {};
        return Xe.objectKeys(this.shape).forEach(e => {
            const r = this.shape[e];
            n && !n[e] ? a[e] = r : a[e] = r.optional()
        }
        ),
        new St({
            ...this._def,
            shape: () => a
        })
    }
    required(n) {
        const a = {};
        return Xe.objectKeys(this.shape).forEach(e => {
            if (n && !n[e])
                a[e] = this.shape[e];
            else {
                let o = this.shape[e];
                for (; o instanceof Ra; )
                    o = o._def.innerType;
                a[e] = o
            }
        }
        ),
        new St({
            ...this._def,
            shape: () => a
        })
    }
    keyof() {
        return pu(Xe.objectKeys(this.shape))
    }
}
St.create = (t, n) => new St({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Xa.create(),
    typeName: Ve.ZodObject,
    ...Ge(n)
});
St.strictCreate = (t, n) => new St({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Xa.create(),
    typeName: Ve.ZodObject,
    ...Ge(n)
});
St.lazycreate = (t, n) => new St({
    shape: t,
    unknownKeys: "strip",
    catchall: Xa.create(),
    typeName: Ve.ZodObject,
    ...Ge(n)
});
class $r extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n)
          , e = this._def.options;
        function r(o) {
            for (const s of o)
                if (s.result.status === "valid")
                    return s.result;
            for (const s of o)
                if (s.result.status === "dirty")
                    return a.common.issues.push(...s.ctx.common.issues),
                    s.result;
            const i = o.map(s => new ia(s.ctx.common.issues));
            return he(a, {
                code: ce.invalid_union,
                unionErrors: i
            }),
            Fe
        }
        if (a.common.async)
            return Promise.all(e.map(async o => {
                const i = {
                    ...a,
                    common: {
                        ...a.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await o._parseAsync({
                        data: a.data,
                        path: a.path,
                        parent: i
                    }),
                    ctx: i
                }
            }
            )).then(r);
        {
            let o;
            const i = [];
            for (const l of e) {
                const d = {
                    ...a,
                    common: {
                        ...a.common,
                        issues: []
                    },
                    parent: null
                }
                  , p = l._parseSync({
                    data: a.data,
                    path: a.path,
                    parent: d
                });
                if (p.status === "valid")
                    return p;
                p.status === "dirty" && !o && (o = {
                    result: p,
                    ctx: d
                }),
                d.common.issues.length && i.push(d.common.issues)
            }
            if (o)
                return a.common.issues.push(...o.ctx.common.issues),
                o.result;
            const s = i.map(l => new ia(l));
            return he(a, {
                code: ce.invalid_union,
                unionErrors: s
            }),
            Fe
        }
    }
    get options() {
        return this._def.options
    }
}
$r.create = (t, n) => new $r({
    options: t,
    typeName: Ve.ZodUnion,
    ...Ge(n)
});
const qa = t => t instanceof Kr ? qa(t.schema) : t instanceof Ia ? qa(t.innerType()) : t instanceof Qr ? [t.value] : t instanceof hn ? t.options : t instanceof Xr ? Xe.objectValues(t.enum) : t instanceof Jr ? qa(t._def.innerType) : t instanceof Wr ? [void 0] : t instanceof qr ? [null] : t instanceof Ra ? [void 0, ...qa(t.unwrap())] : t instanceof fn ? [null, ...qa(t.unwrap())] : t instanceof Ss || t instanceof to ? qa(t.unwrap()) : t instanceof eo ? qa(t._def.innerType) : [];
class ti extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        if (a.parsedType !== _e.object)
            return he(a, {
                code: ce.invalid_type,
                expected: _e.object,
                received: a.parsedType
            }),
            Fe;
        const e = this.discriminator
          , r = a.data[e]
          , o = this.optionsMap.get(r);
        return o ? a.common.async ? o._parseAsync({
            data: a.data,
            path: a.path,
            parent: a
        }) : o._parseSync({
            data: a.data,
            path: a.path,
            parent: a
        }) : (he(a, {
            code: ce.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [e]
        }),
        Fe)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(n, a, e) {
        const r = new Map;
        for (const o of a) {
            const i = qa(o.shape[n]);
            if (!i.length)
                throw new Error(`A discriminator value for key \`${n}\` could not be extracted from all schema options`);
            for (const s of i) {
                if (r.has(s))
                    throw new Error(`Discriminator property ${String(n)} has duplicate value ${String(s)}`);
                r.set(s, o)
            }
        }
        return new ti({
            typeName: Ve.ZodDiscriminatedUnion,
            discriminator: n,
            options: a,
            optionsMap: r,
            ...Ge(e)
        })
    }
}
function Qi(t, n) {
    const a = $a(t)
      , e = $a(n);
    if (t === n)
        return {
            valid: !0,
            data: t
        };
    if (a === _e.object && e === _e.object) {
        const r = Xe.objectKeys(n)
          , o = Xe.objectKeys(t).filter(s => r.indexOf(s) !== -1)
          , i = {
            ...t,
            ...n
        };
        for (const s of o) {
            const l = Qi(t[s], n[s]);
            if (!l.valid)
                return {
                    valid: !1
                };
            i[s] = l.data
        }
        return {
            valid: !0,
            data: i
        }
    } else if (a === _e.array && e === _e.array) {
        if (t.length !== n.length)
            return {
                valid: !1
            };
        const r = [];
        for (let o = 0; o < t.length; o++) {
            const i = t[o]
              , s = n[o]
              , l = Qi(i, s);
            if (!l.valid)
                return {
                    valid: !1
                };
            r.push(l.data)
        }
        return {
            valid: !0,
            data: r
        }
    } else
        return a === _e.date && e === _e.date && +t == +n ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class zr extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n)
          , r = (o, i) => {
            if (Zi(o) || Zi(i))
                return Fe;
            const s = Qi(o.value, i.value);
            return s.valid ? ((Ki(o) || Ki(i)) && a.dirty(),
            {
                status: a.value,
                value: s.data
            }) : (he(e, {
                code: ce.invalid_intersection_types
            }),
            Fe)
        }
        ;
        return e.common.async ? Promise.all([this._def.left._parseAsync({
            data: e.data,
            path: e.path,
            parent: e
        }), this._def.right._parseAsync({
            data: e.data,
            path: e.path,
            parent: e
        })]).then( ([o,i]) => r(o, i)) : r(this._def.left._parseSync({
            data: e.data,
            path: e.path,
            parent: e
        }), this._def.right._parseSync({
            data: e.data,
            path: e.path,
            parent: e
        }))
    }
}
zr.create = (t, n, a) => new zr({
    left: t,
    right: n,
    typeName: Ve.ZodIntersection,
    ...Ge(a)
});
class Va extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.array)
            return he(e, {
                code: ce.invalid_type,
                expected: _e.array,
                received: e.parsedType
            }),
            Fe;
        if (e.data.length < this._def.items.length)
            return he(e, {
                code: ce.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            Fe;
        !this._def.rest && e.data.length > this._def.items.length && (he(e, {
            code: ce.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        a.dirty());
        const o = [...e.data].map( (i, s) => {
            const l = this._def.items[s] || this._def.rest;
            return l ? l._parse(new Ha(e,i,e.path,s)) : null
        }
        ).filter(i => !!i);
        return e.common.async ? Promise.all(o).then(i => Kt.mergeArray(a, i)) : Kt.mergeArray(a, o)
    }
    get items() {
        return this._def.items
    }
    rest(n) {
        return new Va({
            ...this._def,
            rest: n
        })
    }
}
Va.create = (t, n) => {
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Va({
        items: t,
        typeName: Ve.ZodTuple,
        rest: null,
        ...Ge(n)
    })
}
;
class Zr extends Ye {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.object)
            return he(e, {
                code: ce.invalid_type,
                expected: _e.object,
                received: e.parsedType
            }),
            Fe;
        const r = []
          , o = this._def.keyType
          , i = this._def.valueType;
        for (const s in e.data)
            r.push({
                key: o._parse(new Ha(e,s,e.path,s)),
                value: i._parse(new Ha(e,e.data[s],e.path,s)),
                alwaysSet: s in e.data
            });
        return e.common.async ? Kt.mergeObjectAsync(a, r) : Kt.mergeObjectSync(a, r)
    }
    get element() {
        return this._def.valueType
    }
    static create(n, a, e) {
        return a instanceof Ye ? new Zr({
            keyType: n,
            valueType: a,
            typeName: Ve.ZodRecord,
            ...Ge(e)
        }) : new Zr({
            keyType: wa.create(),
            valueType: n,
            typeName: Ve.ZodRecord,
            ...Ge(a)
        })
    }
}
class Vo extends Ye {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.map)
            return he(e, {
                code: ce.invalid_type,
                expected: _e.map,
                received: e.parsedType
            }),
            Fe;
        const r = this._def.keyType
          , o = this._def.valueType
          , i = [...e.data.entries()].map( ([s,l], d) => ({
            key: r._parse(new Ha(e,s,e.path,[d, "key"])),
            value: o._parse(new Ha(e,l,e.path,[d, "value"]))
        }));
        if (e.common.async) {
            const s = new Map;
            return Promise.resolve().then(async () => {
                for (const l of i) {
                    const d = await l.key
                      , p = await l.value;
                    if (d.status === "aborted" || p.status === "aborted")
                        return Fe;
                    (d.status === "dirty" || p.status === "dirty") && a.dirty(),
                    s.set(d.value, p.value)
                }
                return {
                    status: a.value,
                    value: s
                }
            }
            )
        } else {
            const s = new Map;
            for (const l of i) {
                const d = l.key
                  , p = l.value;
                if (d.status === "aborted" || p.status === "aborted")
                    return Fe;
                (d.status === "dirty" || p.status === "dirty") && a.dirty(),
                s.set(d.value, p.value)
            }
            return {
                status: a.value,
                value: s
            }
        }
    }
}
Vo.create = (t, n, a) => new Vo({
    valueType: n,
    keyType: t,
    typeName: Ve.ZodMap,
    ...Ge(a)
});
class Rn extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.set)
            return he(e, {
                code: ce.invalid_type,
                expected: _e.set,
                received: e.parsedType
            }),
            Fe;
        const r = this._def;
        r.minSize !== null && e.data.size < r.minSize.value && (he(e, {
            code: ce.too_small,
            minimum: r.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: r.minSize.message
        }),
        a.dirty()),
        r.maxSize !== null && e.data.size > r.maxSize.value && (he(e, {
            code: ce.too_big,
            maximum: r.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: r.maxSize.message
        }),
        a.dirty());
        const o = this._def.valueType;
        function i(l) {
            const d = new Set;
            for (const p of l) {
                if (p.status === "aborted")
                    return Fe;
                p.status === "dirty" && a.dirty(),
                d.add(p.value)
            }
            return {
                status: a.value,
                value: d
            }
        }
        const s = [...e.data.values()].map( (l, d) => o._parse(new Ha(e,l,e.path,d)));
        return e.common.async ? Promise.all(s).then(l => i(l)) : i(s)
    }
    min(n, a) {
        return new Rn({
            ...this._def,
            minSize: {
                value: n,
                message: De.toString(a)
            }
        })
    }
    max(n, a) {
        return new Rn({
            ...this._def,
            maxSize: {
                value: n,
                message: De.toString(a)
            }
        })
    }
    size(n, a) {
        return this.min(n, a).max(n, a)
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
Rn.create = (t, n) => new Rn({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: Ve.ZodSet,
    ...Ge(n)
});
class nr extends Ye {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        if (a.parsedType !== _e.function)
            return he(a, {
                code: ce.invalid_type,
                expected: _e.function,
                received: a.parsedType
            }),
            Fe;
        function e(s, l) {
            return Lo({
                data: s,
                path: a.path,
                errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, Bo(), sr].filter(d => !!d),
                issueData: {
                    code: ce.invalid_arguments,
                    argumentsError: l
                }
            })
        }
        function r(s, l) {
            return Lo({
                data: s,
                path: a.path,
                errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, Bo(), sr].filter(d => !!d),
                issueData: {
                    code: ce.invalid_return_type,
                    returnTypeError: l
                }
            })
        }
        const o = {
            errorMap: a.common.contextualErrorMap
        }
          , i = a.data;
        if (this._def.returns instanceof cr) {
            const s = this;
            return aa(async function(...l) {
                const d = new ia([])
                  , p = await s._def.args.parseAsync(l, o).catch(f => {
                    throw d.addIssue(e(l, f)),
                    d
                }
                )
                  , g = await Reflect.apply(i, this, p);
                return await s._def.returns._def.type.parseAsync(g, o).catch(f => {
                    throw d.addIssue(r(g, f)),
                    d
                }
                )
            })
        } else {
            const s = this;
            return aa(function(...l) {
                const d = s._def.args.safeParse(l, o);
                if (!d.success)
                    throw new ia([e(l, d.error)]);
                const p = Reflect.apply(i, this, d.data)
                  , g = s._def.returns.safeParse(p, o);
                if (!g.success)
                    throw new ia([r(p, g.error)]);
                return g.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...n) {
        return new nr({
            ...this._def,
            args: Va.create(n).rest(Dn.create())
        })
    }
    returns(n) {
        return new nr({
            ...this._def,
            returns: n
        })
    }
    implement(n) {
        return this.parse(n)
    }
    strictImplement(n) {
        return this.parse(n)
    }
    static create(n, a, e) {
        return new nr({
            args: n || Va.create([]).rest(Dn.create()),
            returns: a || Dn.create(),
            typeName: Ve.ZodFunction,
            ...Ge(e)
        })
    }
}
class Kr extends Ye {
    get schema() {
        return this._def.getter()
    }
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        return this._def.getter()._parse({
            data: a.data,
            path: a.path,
            parent: a
        })
    }
}
Kr.create = (t, n) => new Kr({
    getter: t,
    typeName: Ve.ZodLazy,
    ...Ge(n)
});
class Qr extends Ye {
    _parse(n) {
        if (n.data !== this._def.value) {
            const a = this._getOrReturnCtx(n);
            return he(a, {
                received: a.data,
                code: ce.invalid_literal,
                expected: this._def.value
            }),
            Fe
        }
        return {
            status: "valid",
            value: n.data
        }
    }
    get value() {
        return this._def.value
    }
}
Qr.create = (t, n) => new Qr({
    value: t,
    typeName: Ve.ZodLiteral,
    ...Ge(n)
});
function pu(t, n) {
    return new hn({
        values: t,
        typeName: Ve.ZodEnum,
        ...Ge(n)
    })
}
class hn extends Ye {
    constructor() {
        super(...arguments),
        Ar.set(this, void 0)
    }
    _parse(n) {
        if (typeof n.data != "string") {
            const a = this._getOrReturnCtx(n)
              , e = this._def.values;
            return he(a, {
                expected: Xe.joinValues(e),
                received: a.parsedType,
                code: ce.invalid_type
            }),
            Fe
        }
        if (Ro(this, Ar) || uu(this, Ar, new Set(this._def.values)),
        !Ro(this, Ar).has(n.data)) {
            const a = this._getOrReturnCtx(n)
              , e = this._def.values;
            return he(a, {
                received: a.data,
                code: ce.invalid_enum_value,
                options: e
            }),
            Fe
        }
        return aa(n.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const n = {};
        for (const a of this._def.values)
            n[a] = a;
        return n
    }
    get Values() {
        const n = {};
        for (const a of this._def.values)
            n[a] = a;
        return n
    }
    get Enum() {
        const n = {};
        for (const a of this._def.values)
            n[a] = a;
        return n
    }
    extract(n, a=this._def) {
        return hn.create(n, {
            ...this._def,
            ...a
        })
    }
    exclude(n, a=this._def) {
        return hn.create(this.options.filter(e => !n.includes(e)), {
            ...this._def,
            ...a
        })
    }
}
Ar = new WeakMap;
hn.create = pu;
class Xr extends Ye {
    constructor() {
        super(...arguments),
        Mr.set(this, void 0)
    }
    _parse(n) {
        const a = Xe.getValidEnumValues(this._def.values)
          , e = this._getOrReturnCtx(n);
        if (e.parsedType !== _e.string && e.parsedType !== _e.number) {
            const r = Xe.objectValues(a);
            return he(e, {
                expected: Xe.joinValues(r),
                received: e.parsedType,
                code: ce.invalid_type
            }),
            Fe
        }
        if (Ro(this, Mr) || uu(this, Mr, new Set(Xe.getValidEnumValues(this._def.values))),
        !Ro(this, Mr).has(n.data)) {
            const r = Xe.objectValues(a);
            return he(e, {
                received: e.data,
                code: ce.invalid_enum_value,
                options: r
            }),
            Fe
        }
        return aa(n.data)
    }
    get enum() {
        return this._def.values
    }
}
Mr = new WeakMap;
Xr.create = (t, n) => new Xr({
    values: t,
    typeName: Ve.ZodNativeEnum,
    ...Ge(n)
});
class cr extends Ye {
    unwrap() {
        return this._def.type
    }
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        if (a.parsedType !== _e.promise && a.common.async === !1)
            return he(a, {
                code: ce.invalid_type,
                expected: _e.promise,
                received: a.parsedType
            }),
            Fe;
        const e = a.parsedType === _e.promise ? a.data : Promise.resolve(a.data);
        return aa(e.then(r => this._def.type.parseAsync(r, {
            path: a.path,
            errorMap: a.common.contextualErrorMap
        })))
    }
}
cr.create = (t, n) => new cr({
    type: t,
    typeName: Ve.ZodPromise,
    ...Ge(n)
});
class Ia extends Ye {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Ve.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n)
          , r = this._def.effect || null
          , o = {
            addIssue: i => {
                he(e, i),
                i.fatal ? a.abort() : a.dirty()
            }
            ,
            get path() {
                return e.path
            }
        };
        if (o.addIssue = o.addIssue.bind(o),
        r.type === "preprocess") {
            const i = r.transform(e.data, o);
            if (e.common.async)
                return Promise.resolve(i).then(async s => {
                    if (a.value === "aborted")
                        return Fe;
                    const l = await this._def.schema._parseAsync({
                        data: s,
                        path: e.path,
                        parent: e
                    });
                    return l.status === "aborted" ? Fe : l.status === "dirty" || a.value === "dirty" ? Xn(l.value) : l
                }
                );
            {
                if (a.value === "aborted")
                    return Fe;
                const s = this._def.schema._parseSync({
                    data: i,
                    path: e.path,
                    parent: e
                });
                return s.status === "aborted" ? Fe : s.status === "dirty" || a.value === "dirty" ? Xn(s.value) : s
            }
        }
        if (r.type === "refinement") {
            const i = s => {
                const l = r.refinement(s, o);
                if (e.common.async)
                    return Promise.resolve(l);
                if (l instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return s
            }
            ;
            if (e.common.async === !1) {
                const s = this._def.schema._parseSync({
                    data: e.data,
                    path: e.path,
                    parent: e
                });
                return s.status === "aborted" ? Fe : (s.status === "dirty" && a.dirty(),
                i(s.value),
                {
                    status: a.value,
                    value: s.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: e.data,
                    path: e.path,
                    parent: e
                }).then(s => s.status === "aborted" ? Fe : (s.status === "dirty" && a.dirty(),
                i(s.value).then( () => ({
                    status: a.value,
                    value: s.value
                }))))
        }
        if (r.type === "transform")
            if (e.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: e.data,
                    path: e.path,
                    parent: e
                });
                if (!Bn(i))
                    return i;
                const s = r.transform(i.value, o);
                if (s instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: a.value,
                    value: s
                }
            } else
                return this._def.schema._parseAsync({
                    data: e.data,
                    path: e.path,
                    parent: e
                }).then(i => Bn(i) ? Promise.resolve(r.transform(i.value, o)).then(s => ({
                    status: a.value,
                    value: s
                })) : i);
        Xe.assertNever(r)
    }
}
Ia.create = (t, n, a) => new Ia({
    schema: t,
    typeName: Ve.ZodEffects,
    effect: n,
    ...Ge(a)
});
Ia.createWithPreprocess = (t, n, a) => new Ia({
    schema: n,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: Ve.ZodEffects,
    ...Ge(a)
});
class Ra extends Ye {
    _parse(n) {
        return this._getType(n) === _e.undefined ? aa(void 0) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
Ra.create = (t, n) => new Ra({
    innerType: t,
    typeName: Ve.ZodOptional,
    ...Ge(n)
});
class fn extends Ye {
    _parse(n) {
        return this._getType(n) === _e.null ? aa(null) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
fn.create = (t, n) => new fn({
    innerType: t,
    typeName: Ve.ZodNullable,
    ...Ge(n)
});
class Jr extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        let e = a.data;
        return a.parsedType === _e.undefined && (e = this._def.defaultValue()),
        this._def.innerType._parse({
            data: e,
            path: a.path,
            parent: a
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Jr.create = (t, n) => new Jr({
    innerType: t,
    typeName: Ve.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...Ge(n)
});
class eo extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n)
          , e = {
            ...a,
            common: {
                ...a.common,
                issues: []
            }
        }
          , r = this._def.innerType._parse({
            data: e.data,
            path: e.path,
            parent: {
                ...e
            }
        });
        return Gr(r) ? r.then(o => ({
            status: "valid",
            value: o.status === "valid" ? o.value : this._def.catchValue({
                get error() {
                    return new ia(e.common.issues)
                },
                input: e.data
            })
        })) : {
            status: "valid",
            value: r.status === "valid" ? r.value : this._def.catchValue({
                get error() {
                    return new ia(e.common.issues)
                },
                input: e.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
eo.create = (t, n) => new eo({
    innerType: t,
    typeName: Ve.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...Ge(n)
});
class Uo extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.nan) {
            const e = this._getOrReturnCtx(n);
            return he(e, {
                code: ce.invalid_type,
                expected: _e.nan,
                received: e.parsedType
            }),
            Fe
        }
        return {
            status: "valid",
            value: n.data
        }
    }
}
Uo.create = t => new Uo({
    typeName: Ve.ZodNaN,
    ...Ge(t)
});
const mg = Symbol("zod_brand");
class Ss extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n)
          , e = a.data;
        return this._def.type._parse({
            data: e,
            path: a.path,
            parent: a
        })
    }
    unwrap() {
        return this._def.type
    }
}
class mo extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.common.async)
            return (async () => {
                const o = await this._def.in._parseAsync({
                    data: e.data,
                    path: e.path,
                    parent: e
                });
                return o.status === "aborted" ? Fe : o.status === "dirty" ? (a.dirty(),
                Xn(o.value)) : this._def.out._parseAsync({
                    data: o.value,
                    path: e.path,
                    parent: e
                })
            }
            )();
        {
            const r = this._def.in._parseSync({
                data: e.data,
                path: e.path,
                parent: e
            });
            return r.status === "aborted" ? Fe : r.status === "dirty" ? (a.dirty(),
            {
                status: "dirty",
                value: r.value
            }) : this._def.out._parseSync({
                data: r.value,
                path: e.path,
                parent: e
            })
        }
    }
    static create(n, a) {
        return new mo({
            in: n,
            out: a,
            typeName: Ve.ZodPipeline
        })
    }
}
class to extends Ye {
    _parse(n) {
        const a = this._def.innerType._parse(n)
          , e = r => (Bn(r) && (r.value = Object.freeze(r.value)),
        r);
        return Gr(a) ? a.then(r => e(r)) : e(a)
    }
    unwrap() {
        return this._def.innerType
    }
}
to.create = (t, n) => new to({
    innerType: t,
    typeName: Ve.ZodReadonly,
    ...Ge(n)
});
function vu(t, n={}, a) {
    return t ? lr.create().superRefine( (e, r) => {
        var o, i;
        if (!t(e)) {
            const s = typeof n == "function" ? n(e) : typeof n == "string" ? {
                message: n
            } : n
              , l = (i = (o = s.fatal) !== null && o !== void 0 ? o : a) !== null && i !== void 0 ? i : !0
              , d = typeof s == "string" ? {
                message: s
            } : s;
            r.addIssue({
                code: "custom",
                ...d,
                fatal: l
            })
        }
    }
    ) : lr.create()
}
const gg = {
    object: St.lazycreate
};
var Ve;
(function(t) {
    t.ZodString = "ZodString",
    t.ZodNumber = "ZodNumber",
    t.ZodNaN = "ZodNaN",
    t.ZodBigInt = "ZodBigInt",
    t.ZodBoolean = "ZodBoolean",
    t.ZodDate = "ZodDate",
    t.ZodSymbol = "ZodSymbol",
    t.ZodUndefined = "ZodUndefined",
    t.ZodNull = "ZodNull",
    t.ZodAny = "ZodAny",
    t.ZodUnknown = "ZodUnknown",
    t.ZodNever = "ZodNever",
    t.ZodVoid = "ZodVoid",
    t.ZodArray = "ZodArray",
    t.ZodObject = "ZodObject",
    t.ZodUnion = "ZodUnion",
    t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    t.ZodIntersection = "ZodIntersection",
    t.ZodTuple = "ZodTuple",
    t.ZodRecord = "ZodRecord",
    t.ZodMap = "ZodMap",
    t.ZodSet = "ZodSet",
    t.ZodFunction = "ZodFunction",
    t.ZodLazy = "ZodLazy",
    t.ZodLiteral = "ZodLiteral",
    t.ZodEnum = "ZodEnum",
    t.ZodEffects = "ZodEffects",
    t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional",
    t.ZodNullable = "ZodNullable",
    t.ZodDefault = "ZodDefault",
    t.ZodCatch = "ZodCatch",
    t.ZodPromise = "ZodPromise",
    t.ZodBranded = "ZodBranded",
    t.ZodPipeline = "ZodPipeline",
    t.ZodReadonly = "ZodReadonly"
}
)(Ve || (Ve = {}));
const pg = (t, n={
    message: `Input not instance of ${t.name}`
}) => vu(a => a instanceof t, n)
  , hu = wa.create
  , fu = pn.create
  , vg = Uo.create
  , hg = vn.create
  , yu = Yr.create
  , fg = Ln.create
  , yg = No.create
  , bg = Wr.create
  , _g = qr.create
  , wg = lr.create
  , kg = Dn.create
  , Sg = Xa.create
  , Cg = Ho.create
  , Tg = ka.create
  , Ig = St.create
  , Pg = St.strictCreate
  , Eg = $r.create
  , Dg = ti.create
  , Ag = zr.create
  , Mg = Va.create
  , Og = Zr.create
  , xg = Vo.create
  , Bg = Rn.create
  , Lg = nr.create
  , Rg = Kr.create
  , Ng = Qr.create
  , Hg = hn.create
  , Vg = Xr.create
  , Ug = cr.create
  , Cl = Ia.create
  , Fg = Ra.create
  , jg = fn.create
  , Gg = Ia.createWithPreprocess
  , Yg = mo.create
  , Wg = () => hu().optional()
  , qg = () => fu().optional()
  , $g = () => yu().optional()
  , zg = {
    string: t => wa.create({
        ...t,
        coerce: !0
    }),
    number: t => pn.create({
        ...t,
        coerce: !0
    }),
    boolean: t => Yr.create({
        ...t,
        coerce: !0
    }),
    bigint: t => vn.create({
        ...t,
        coerce: !0
    }),
    date: t => Ln.create({
        ...t,
        coerce: !0
    })
}
  , Zg = Fe;
var c = Object.freeze({
    __proto__: null,
    defaultErrorMap: sr,
    setErrorMap: Gm,
    getErrorMap: Bo,
    makeIssue: Lo,
    EMPTY_PATH: Ym,
    addIssueToContext: he,
    ParseStatus: Kt,
    INVALID: Fe,
    DIRTY: Xn,
    OK: aa,
    isAborted: Zi,
    isDirty: Ki,
    isValid: Bn,
    isAsync: Gr,
    get util() {
        return Xe
    },
    get objectUtil() {
        return zi
    },
    ZodParsedType: _e,
    getParsedType: $a,
    ZodType: Ye,
    datetimeRegex: gu,
    ZodString: wa,
    ZodNumber: pn,
    ZodBigInt: vn,
    ZodBoolean: Yr,
    ZodDate: Ln,
    ZodSymbol: No,
    ZodUndefined: Wr,
    ZodNull: qr,
    ZodAny: lr,
    ZodUnknown: Dn,
    ZodNever: Xa,
    ZodVoid: Ho,
    ZodArray: ka,
    ZodObject: St,
    ZodUnion: $r,
    ZodDiscriminatedUnion: ti,
    ZodIntersection: zr,
    ZodTuple: Va,
    ZodRecord: Zr,
    ZodMap: Vo,
    ZodSet: Rn,
    ZodFunction: nr,
    ZodLazy: Kr,
    ZodLiteral: Qr,
    ZodEnum: hn,
    ZodNativeEnum: Xr,
    ZodPromise: cr,
    ZodEffects: Ia,
    ZodTransformer: Ia,
    ZodOptional: Ra,
    ZodNullable: fn,
    ZodDefault: Jr,
    ZodCatch: eo,
    ZodNaN: Uo,
    BRAND: mg,
    ZodBranded: Ss,
    ZodPipeline: mo,
    ZodReadonly: to,
    custom: vu,
    Schema: Ye,
    ZodSchema: Ye,
    late: gg,
    get ZodFirstPartyTypeKind() {
        return Ve
    },
    coerce: zg,
    any: wg,
    array: Tg,
    bigint: hg,
    boolean: yu,
    date: fg,
    discriminatedUnion: Dg,
    effect: Cl,
    enum: Hg,
    function: Lg,
    instanceof: pg,
    intersection: Ag,
    lazy: Rg,
    literal: Ng,
    map: xg,
    nan: vg,
    nativeEnum: Vg,
    never: Sg,
    null: _g,
    nullable: jg,
    number: fu,
    object: Ig,
    oboolean: $g,
    onumber: qg,
    optional: Fg,
    ostring: Wg,
    pipeline: Yg,
    preprocess: Gg,
    promise: Ug,
    record: Og,
    set: Bg,
    strictObject: Pg,
    string: hu,
    symbol: yg,
    transformer: Cl,
    tuple: Mg,
    undefined: bg,
    union: Eg,
    unknown: kg,
    void: Cg,
    NEVER: Zg,
    ZodIssueCode: ce,
    quotelessJson: jm,
    ZodError: ia
});
const Kg = c.union([c.literal("left"), c.literal("right"), c.literal("center"), c.literal("justify"), c.literal("start"), c.literal("end"), c.literal("match-parent")])
  , Qg = c.union([c.literal("stretch"), c.literal("center"), c.literal("flex-start"), c.literal("flex-end"), c.literal("baseline"), c.literal("initial"), c.literal("inherit")])
  , bu = c.union([c.literal("flex-start"), c.literal("flex-end"), c.literal("center"), c.literal("space-between"), c.literal("space-around"), c.literal("space-evenly"), c.literal("initial"), c.literal("inherit")])
  , _u = c.union([c.literal("alternate"), c.literal("author"), c.literal("bookmark"), c.literal("external"), c.literal("help"), c.literal("license"), c.literal("next"), c.literal("nofollow"), c.literal("noopener"), c.literal("noreferrer"), c.literal("prev"), c.literal("search"), c.literal("tag")])
  , Xg = c.union([c.literal("row"), c.literal("row-reverse"), c.literal("column"), c.literal("column-reverse")])
  , Jg = c.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
  , ep = c.string().regex(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)
  , tp = c.string().regex(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d(\.\d+)?|1(\.0+)?)\)$/)
  , ct = c.union([Jg, ep, tp])
  , Fo = c.string().regex(/^\d+px$/)
  , ja = c.object({
    styles: c.object({
        align: Qg,
        justify: bu,
        text: Kg,
        "m-element-margin": c.string().regex(/^\d+px \d+px \d+px \d+px$/),
        "z-index": c.number(),
        "grid-row": c.string(),
        "grid-column": c.string(),
        "m-grid-row": c.string(),
        "m-grid-column": c.string()
    })
})
  , yn = c.object({
    top: c.number(),
    left: c.number(),
    width: c.number(),
    height: c.number(),
    fontSize: c.number().optional()
})
  , wu = c.object({
    name: c.string(),
    type: c.string()
})
  , ap = c.object({
    svg: c.string(),
    icon: c.string(),
    link: c.string().optional(),
    url: c.string().optional()
})
  , np = c.union([c.literal("GridGallery"), c.literal("GridTextBox"), c.literal("GridShape"), c.literal("GridImage"), c.literal("GridButton"), c.literal("GridMap"), c.literal("GridVideo"), c.literal("GridInstagramFeed"), c.literal("GridSocialIcons"), c.literal("GridForm"), c.literal("GridEmbed"), c.literal("GridStripeButton"), c.literal("GridEcommerceButton"), c.literal("SearchBar")])
  , va = c.object({
    type: np,
    initialElementId: c.string(),
    mobile: yn,
    desktop: yn,
    animation: wu.optional(),
    settings: ja,
    aiData: c.record(c.unknown()).and(c.object({
        type: c.string().optional()
    })).optional()
})
  , rp = c.union([c.literal("external"), c.literal("download"), c.literal("anchored-section"), c.literal("email"), c.literal("phone"), c.literal("page")])
  , Cs = va.extend({
    href: c.string(),
    rel: _u,
    target: c.union([c.literal("_blank"), c.literal("_self"), c.literal("_parent"), c.literal("_top")]),
    content: c.string(),
    linkType: rp,
    fontColor: ct,
    fontWeight: c.number(),
    borderColor: ct,
    borderWidth: c.number(),
    borderRadius: c.number(),
    fontColorHover: ct,
    backgroundColor: ct,
    borderColorHover: ct,
    backgroundColorHover: ct,
    settings: ja.and(c.object({
        type: c.string(),
        isFormButton: c.boolean().optional()
    })),
    linkedPageId: c.string().optional()
})
  , op = Cs.extend({
    type: c.literal("GridStripeButton"),
    priceId: c.string(),
    paymentType: c.string()
})
  , ip = Cs.extend({
    type: c.literal("GridEcommerceButton"),
    productId: c.string(),
    productVariantId: c.string()
})
  , sp = va.extend({
    type: c.literal("GridMap"),
    settings: ja.and(c.object({
        src: c.string()
    }))
})
  , lp = va.extend({
    type: c.literal("GridVideo"),
    settings: ja.and(c.object({
        jpg: c.string(),
        src: c.string(),
        webp: c.string(),
        provider: c.union([c.literal("youtube"), c.literal("vimeo")]),
        initialSrc: c.string()
    }))
})
  , cp = va.extend({
    type: c.literal("GridTextBox"),
    content: c.string()
})
  , up = va.extend({
    type: c.literal("GridShape"),
    svg: c.string(),
    color: ct,
    shape: c.string()
})
  , dp = va.extend({
    type: c.literal("GridImage"),
    rel: _u,
    href: c.string(),
    mobile: yn.and(c.object({
        borderRadius: c.string()
    })),
    desktop: yn.and(c.object({
        borderRadius: c.string()
    })),
    settings: ja.and(c.object({
        alt: c.string(),
        path: c.string(),
        origin: c.string(),
        clickAction: c.string()
    }))
})
  , mp = va.extend({
    type: c.literal("GridInstagramFeed"),
    settings: ja.and(c.object({
        username: c.string().optional(),
        apiVersion: c.union([c.literal("instagram_basic_display"), c.literal("instagram_api_with_instagram_login")]).optional(),
        "item-gap": Fo,
        "m-item-gap": Fo,
        "items-per-row": c.number(),
        "m-items-per-row": c.number()
    })),
    "item-count": c.number()
})
  , gp = va.extend({
    type: c.literal("GridSocialIcons"),
    useBrandColors: c.boolean(),
    links: c.array(ap),
    settings: ja.and(c.object({
        "icon-size": Fo,
        "icon-color": ct,
        "icon-spacing": bu,
        "icon-direction": Xg,
        "icon-color-hover": ct,
        "space-between-icons": Fo
    }))
})
  , pp = va.extend({
    type: c.literal("GridGallery"),
    images: c.array(c.object({
        alt: c.string(),
        path: c.string(),
        origin: c.union([c.literal("assets"), c.literal("unsplash"), c.literal("other")])
    })),
    desktop: yn.and(c.object({
        columnGap: c.number(),
        columnCount: c.number()
    })),
    mobile: yn.and(c.object({
        columnGap: c.number(),
        columnCount: c.number()
    })),
    settings: ja.and(c.object({
        layout: c.string(),
        imageClickAction: c.union([c.literal("lightbox"), c.literal("none")])
    }))
})
  , vp = va.extend({
    type: c.literal("GridEmbed"),
    content: c.string(),
    settings: ja.and(c.object({
        styles: c.object({
            height: c.number(),
            heightMobile: c.number().optional()
        })
    }))
})
  , hp = va.extend({
    type: c.literal("SearchBar"),
    placeholderText: c.string(),
    noResultsText: c.string(),
    fillColor: ct,
    fillColorHover: ct,
    resultItemHoverColor: ct,
    textAndIconColor: ct,
    textAndIconColorHover: ct,
    borderColor: ct,
    borderColorHover: ct,
    borderRadius: c.number(),
    fontFamily: c.string()
})
  , ku = Cs.extend({
    type: c.literal("GridButton")
})
  , Aa = c.object({
    "font-family": c.string(),
    "font-size": c.string(),
    "m-font-size": c.string(),
    "font-style": c.string(),
    "font-weight": c.union([c.literal(100), c.literal(200), c.literal(300), c.literal(400), c.literal(500), c.literal(600), c.literal(700), c.literal(800), c.literal(900), c.literal("100"), c.literal("200"), c.literal("300"), c.literal("400"), c.literal("500"), c.literal("600"), c.literal("700"), c.literal("800"), c.literal("900"), c.literal("normal"), c.literal("bold")]),
    "line-height": c.string(),
    "text-decoration": c.string(),
    "text-transform": c.string(),
    "letter-spacing": c.union([c.string(), c.number()]),
    color: c.string().optional(),
    "color-hover": c.string().optional()
})
  , Tl = c.object({
    "padding-y": c.string(),
    "m-padding-y": c.string(),
    "padding-x": c.string(),
    "m-padding-x": c.string(),
    "font-family": c.string(),
    "font-size": c.string(),
    "m-font-size": c.string(),
    "font-style": c.string(),
    "font-weight": c.union([c.literal(100), c.literal(200), c.literal(300), c.literal(400), c.literal(500), c.literal(600), c.literal(700), c.literal(800), c.literal(900)]),
    "line-height": c.string(),
    "text-decoration": c.string(),
    "text-transform": c.string(),
    "letter-spacing": c.string(),
    "background-color-null": c.string(),
    "background-color-null-hover": c.string(),
    "border-null": c.string(),
    "border-null-hover": c.string(),
    "border-radius": c.number(),
    "box-shadow-null": c.string(),
    "box-shadow-null-hover": c.string(),
    "box-shadow-x": c.string(),
    "box-shadow-x-hover": c.string(),
    "box-shadow-blur": c.string(),
    "box-shadow-blur-hover": c.string(),
    "box-shadow-spread": c.string(),
    "box-shadow-spread-hover": c.string(),
    "box-shadow-y": c.string(),
    "box-shadow-y-hover": c.string(),
    "box-shadow-color": c.string(),
    "box-shadow-color-hover": c.string(),
    "transition-duration": c.string(),
    "transition-timing-function": c.string()
})
  , fp = c.union([c.literal("BlockSlideshow"), c.literal("BlockGrid"), c.literal("BlockNavigation"), c.literal("BlockBlogList"), c.literal("BlockBlogHeader"), c.literal("BlockEcommerceProduct"), c.literal("BlockEcommerceModal"), c.literal("BlockEcommerceProductList"), c.literal("BlockLayout"), c.literal("BlockImageSlideshow"), c.literal("BlockStickyBar")])
  , yp = c.union([c.literal("path"), c.literal("origin"), c.literal("color"), c.literal("gradient"), c.literal("image"), c.literal("video")])
  , bp = c.object({
    angle: c.number().min(0).max(360),
    isAnimated: c.boolean(),
    colors: c.array(c.object({
        value: c.string()
    }))
})
  , _p = c.record(c.unknown()).and(c.object({
    translations: c.record(c.string()),
    lang: c.string().optional()
}))
  , wp = c.object({
    id: c.string(),
    seo_settings: c.object({
        title: c.string().optional(),
        noindex: c.boolean().optional(),
        keywords: c.array(c.string()).optional(),
        description: c.string().optional(),
        focusKeyword: c.string().optional(),
        ogImageOrigin: c.string().optional(),
        ogImagePath: c.string().optional(),
        ogImageAlt: c.string().optional(),
        slug: c.string().optional()
    })
});
c.union([c.literal(""), c.literal("order=ASC&sort_by=price"), c.literal("order=DESC&sort_by=price"), c.literal("order=DESC&sort_by=created_at")]);
const kp = c.object({
    styles: c.record(c.unknown()).optional(),
    categories: c.array(c.string()).optional(),
    logoSvg: c.string().optional()
})
  , Sp = c.union([c.literal(""), c.literal("order=ASC&sort_by=price"), c.literal("order=DESC&sort_by=price"), c.literal("order=DESC&sort_by=created_at"), c.literal("order=ASC&sort_by=collection_order")])
  , Cp = c.object({
    type: fp,
    settings: kp.and(c.record(c.unknown())),
    slot: c.string().optional(),
    background: c.record(c.unknown()).and(c.object({
        path: c.string().optional().nullable(),
        origin: c.string().optional().nullable(),
        color: c.string().optional(),
        gradient: bp.optional(),
        current: yp.optional(),
        "overlay-opacity": c.string().optional(),
        alt: c.string().optional(),
        video: c.object({
            videoSrc: c.string(),
            videoThumbnailSrc: c.string()
        }).optional()
    })).optional(),
    components: c.array(c.string()).optional(),
    zindexes: c.array(c.string()).optional(),
    desktop: c.record(c.unknown()).and(c.object({
        minHeight: c.number().optional()
    })).optional(),
    mobile: c.record(c.unknown()).and(c.object({
        minHeight: c.number().optional()
    })).optional(),
    initialBlockId: c.string().optional(),
    locale: c.string().optional(),
    shouldSnapToGuides: c.boolean().optional(),
    shouldSnapToElements: c.boolean().optional(),
    snapRowGap: c.number().optional(),
    snapRowHeight: c.number().optional(),
    isMobileAutoPositioningEnabled: c.boolean().optional(),
    isQuantityPickerEnabled: c.boolean().optional(),
    attachment: c.union([c.literal("unset"), c.literal("fixed")]).optional(),
    htmlId: c.string().optional(),
    isButtonEnabled: c.boolean().optional(),
    buttonDisplay: c.string().optional(),
    aiData: c.record(c.unknown()).and(c.object({
        type: c.string().optional()
    })).optional(),
    items: c.array(c.object({
        type: c.string(),
        content: c.string(),
        styles: c.record(c.unknown())
    })).optional(),
    productSorting: c.object({
        enabled: c.boolean(),
        textColor: c.string(),
        sortingOptions: c.array(c.object({
            id: c.string(),
            value: Sp,
            label: c.string(),
            isEnabled: c.boolean()
        }))
    }).optional(),
    productIds: c.array(c.string()).optional(),
    productCategoryId: c.string().optional(),
    isCategoryListEnabled: c.boolean().optional(),
    isFullWidth: c.boolean().optional(),
    isTotalProductCountShown: c.boolean().optional(),
    columnCount: c.number().optional(),
    productsPerPage: c.number().optional(),
    scrollBehaviour: c.union([c.literal("pagination"), c.literal("scroll")]).optional(),
    animation: wu.optional()
})
  , Tp = c.object({
    noindex: c.boolean().optional(),
    title: c.string().optional(),
    password: c.string().optional(),
    ogImageAlt: c.string().optional().nullable(),
    ogImagePath: c.string().optional().nullable(),
    ogImageOrigin: c.string().optional().nullable(),
    passwordDesign: c.string().optional(),
    passwordBackText: c.string().optional(),
    passwordButtonText: c.string().optional(),
    passwordHeadingText: c.string().optional(),
    passwordSubheadingText: c.string().optional(),
    passwordPlaceholderText: c.string().optional()
})
  , Ip = c.object({
    type: c.string().optional(),
    locale: c.string().optional(),
    initialPageId: c.string().optional(),
    name: c.string().optional(),
    slug: c.string().optional(),
    date: c.string().optional(),
    isDraft: c.boolean().optional(),
    isScheduled: c.boolean().optional(),
    categories: c.array(c.string()).optional(),
    coverImageAlt: c.string().optional().nullable(),
    coverImagePath: c.string().optional(),
    coverImageOrigin: c.string().optional(),
    minutesToRead: c.string().optional(),
    meta: Tp.optional(),
    footerSlotIsHidden: c.boolean().optional(),
    pageId: c.string().optional(),
    blocks: c.array(c.string()).optional(),
    productId: c.union([c.string(), c.number()]).optional()
})
  , Pp = c.union([c.literal("Link"), c.literal("Page"), c.literal("Folder"), c.literal("Homepage")])
  , Ep = c.object({
    linkType: Pp.optional(),
    locale: c.string().optional(),
    href: c.string().optional(),
    name: c.string().optional(),
    target: c.string().optional(),
    rel: c.string().optional(),
    innerLinkType: c.string().optional(),
    innerLinkPageId: c.string().optional(),
    subItems: c.array(c.unknown()).optional(),
    navItemId: c.string().optional(),
    linkedPageId: c.string().optional(),
    isHidden: c.boolean().optional()
})
  , Dp = c.record(Ip)
  , Ap = c.record(Cp)
  , Mp = va.extend({
    type: c.literal("GridForm"),
    formId: c.string(),
    mobile: yn.and(c.object({
        inputTextSize: c.number(),
        labelTextSize: c.number(),
        submitButtonFontSize: c.number(),
        formElementsVerticalSpacing: c.number()
    })),
    desktop: yn.and(c.object({
        inputTextSize: c.number(),
        labelTextSize: c.number(),
        submitButtonFontSize: c.number(),
        formElementsVerticalSpacing: c.number()
    })),
    settings: ja.and(c.object({
        theme: c.string(),
        schema: c.array(c.object({
            id: c.string(),
            svg: c.string(),
            name: c.string(),
            type: c.string(),
            fieldType: c.string(),
            inputLabel: c.string(),
            validation: c.array(c.array(c.string())),
            placeholder: c.string(),
            validationType: c.string(),
            "validation-messages": c.object({
                email: c.string(),
                required: c.string()
            })
        })),
        styles: c.object({
            formSpacing: c.string()
        }),
        successMessage: c.string()
    })),
    formPadding: c.number(),
    inputFillColor: ct,
    inputTextColor: ct,
    labelTextColor: ct,
    formBorderWidth: c.number(),
    innerBackground: c.object({
        color: ct,
        image: c.string(),
        current: c.string()
    }),
    formBorderRadius: c.number(),
    inputBorderColor: ct,
    inputBorderWidth: c.number(),
    submitButtonData: ku,
    inputBorderRadius: c.number(),
    formBackgroundColor: c.string(),
    inputFillColorHover: ct,
    inputTextColorHover: ct,
    inputBorderColorHover: ct,
    submitButtonFontColor: ct,
    submitButtonBorderColor: ct,
    submitButtonBorderRadius: c.number(),
    submitButtonFontColorHover: ct,
    submitButtonBackgroundColor: ct,
    submitButtonBorderColorHover: ct,
    submitButtonBackgroundColorHover: ct
})
  , Op = c.union([ku, op, ip, sp, lp, cp, up, dp, mp, gp, pp, vp, hp, Mp])
  , xp = c.record(Op)
  , Bp = c.object({
    googleAdsIds: c.array(c.string()).optional(),
    GAId: c.string().optional(),
    shouldAddWWWPrefixToDomain: c.boolean(),
    version: c.number(),
    template: c.string(),
    isFirstLoad: c.boolean().optional(),
    ecommerceStoreId: c.string().optional(),
    demoEcommerceStoreId: c.string().optional(),
    customMeta: c.string().optional(),
    customBodyElements: c.string().optional(),
    customHeadElements: c.string().optional(),
    typographyStylesId: c.string().optional(),
    colorSetId: c.string().optional(),
    buttonSetId: c.string().optional(),
    facebookPixel: c.string().optional(),
    googleAdSense: c.string().optional(),
    googleAdMob: c.string().optional(),
    googleTagManager: c.string().optional(),
    googleAnalytics: c.string().optional(),
    hotjar: c.string().optional(),
    metaTitle: c.string().optional(),
    metaDescription: c.string().optional(),
    ogImagePath: c.string().optional().nullable(),
    ogImageOrigin: c.string().optional().nullable(),
    ogImageAlt: c.string().optional().nullable(),
    faviconPath: c.string().optional(),
    faviconOrigin: c.string().optional(),
    curatedTemplate: c.object({
        link: c.string().optional(),
        author: c.string().optional()
    }).optional(),
    stripePublicApiKey: c.string().optional(),
    whatsAppNumber: c.string().optional(),
    whatsAppMessage: c.string().optional(),
    isCookieBarEnabled: c.boolean().optional(),
    jivoChat: c.string().optional(),
    qa: c.boolean().optional(),
    ecommerceType: c.string().optional(),
    defaultLocale: c.string().optional(),
    isLayout: c.boolean(),
    migrationToLayoutModifications: c.object({
        splitSlideshows: c.record(c.any()).optional(),
        imageObjectFitRemoved: c.boolean().optional(),
        unsnappedElementSections: c.record(c.any()).optional()
    }).optional(),
    isPrivateModeActive: c.boolean(),
    aiWebsiteType: c.string().optional(),
    isCustomCodeDisabled: c.boolean().optional(),
    payseraVerificationCode: c.string().optional(),
    isExistingStoreWithDynamicTemplate: c.boolean().optional()
})
  , Lp = c.object({
    h1: Aa,
    h2: Aa,
    h3: Aa,
    h4: Aa,
    h5: Aa,
    h6: Aa,
    "body-small": Aa,
    body: Aa,
    "body-large": Aa,
    "nav-link": Aa,
    font: c.object({
        primary: c.string(),
        secondary: c.string()
    }),
    "grid-button-primary": Tl,
    "grid-button-secondary": Tl
})
  , Rp = c.record(c.object({
    token: c.string()
}))
  , Np = c.object({
    metaTitle: c.string().optional(),
    name: c.string().optional(),
    homePageId: c.string(),
    pages: Dp,
    blocks: Ap,
    elements: xp,
    metaHtmlLanguage: c.string().optional(),
    nav: c.array(Ep),
    isNavHidden: c.boolean(),
    locale: c.string(),
    cookieBannerAcceptText: c.string().optional(),
    cookieBannerDeclineText: c.string().optional(),
    cookieBannerDisclaimer: c.string().optional(),
    blogReadingTimeText: c.string().optional(),
    orderPosition: c.number().optional()
})
  , Hp = c.object({
    name: c.string()
})
  , Vp = c.record(Hp)
  , Up = c.record(c.unknown())
  , Fp = c.record(c.unknown())
  , jp = c.object({
    family: c.string(),
    type: c.string(),
    weights: c.array(c.union([c.string(), c.number()])).optional()
})
  , Gp = c.object({
    hasChangedLogo: c.boolean().optional()
})
  , Yp = c.record(Np);
c.object({
    country: c.string(),
    flagPath: c.string(),
    href: c.string(),
    isHidden: c.boolean(),
    locale: c.string(),
    name: c.string()
});
c.object({
    country_code: c.string(),
    provinces: c.array(c.string())
});
c.object({
    builderCompletedSteps: Gp.optional(),
    meta: Bp,
    domain: c.string().optional().nullable(),
    freeDomain: c.string().optional(),
    blogCategories: Vp,
    languages: Yp,
    styles: Lp,
    forms: Rp,
    navigationBlock: Up.optional(),
    user: Fp.optional(),
    siteId: c.string().optional(),
    fonts: c.array(jp).optional(),
    ecommerceShoppingCart: _p.optional(),
    ecommerceSeoChanges: c.array(wp).optional()
});
const Xi = {
    EXTERNAL: "external",
    DOWNLOAD: "download",
    ANCHORED_SECTION: "anchored-section",
    EMAIL: "email",
    PHONE: "phone",
    PAGE: "page"
}
  , Wp = (t, n) => {
    const a = []
      , e = t.length;
    let r = 0;
    for (; r < e; )
        a.push(t.slice(r, r + n)),
        r += n;
    return a
}
  , Yt = "https://api-ecommerce.hostinger.com/store"
  , Lt = {
    async getStoreProducts(t, n={}) {
        const {sort: a, offset: e, limit: r, collectionId: o, toDate: i} = n
          , s = new URLSearchParams(a);
        return typeof e == "number" && r && (s.set("offset", e.toString()),
        s.set("limit", r.toString())),
        o && s.set("collection_ids[]", o),
        i && s.set("to_date", i),
        await (await fetch(`${Yt}/${t}/products?${s.toString()}`)).json()
    },
    async getStoreProductsByIds(t, n) {
        const e = Wp(n || [], 1)?.map(async i => {
            const s = new URLSearchParams;
            return i.forEach(d => s.append("ids[]", d)),
            (await fetch(`${Yt}/${t}/products?${s.toString()}`)).json()
        }
        );
        return (await Promise.allSettled(e)).filter(i => i.status === "fulfilled").map(i => i.value).flatMap( ({products: i}) => i)
    },
    async getStoreProductSeo(t) {
        return await (await fetch(`${Yt}/${t}/products/seo-settings`)).json()
    },
    async getProductByIdOrSlug({storeId: t, productId: n, slug: a}) {
        return (await (await fetch(`${Yt}/${t}/products/${n || a}${a ? "?field=slug" : ""}`)).json()).product
    },
    async getVariantsQuantity(t, n) {
        const a = n.map(o => `product_ids[]=${o}`).join("&");
        return (await (await fetch(`${Yt}/${t}/variants?fields=inventory_quantity&${a}`)).json()).variants
    },
    async getCheckoutUrl({items: t, successUrl: n, cancelUrl: a, checkoutUrl: e, locale: r, storeId: o}) {
        const i = await fetch(`${Yt}/${o}/checkout`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "omit",
            body: JSON.stringify({
                items: t,
                successUrl: n,
                cancelUrl: a,
                checkoutUrl: e,
                locale: r,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            })
        })
          , s = await i.json();
        if (i.ok)
            return s.url;
        throw s
    },
    async getTimeSlots(t, n) {
        const a = await fetch(`${Yt}/time-slots`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "omit",
            body: JSON.stringify({
                booking_event_id: t,
                time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                date: n
            })
        })
          , e = await a.json();
        if (a.ok)
            return e.slots;
        throw e
    },
    async getAvailability({bookingId: t, fromDate: n, toDate: a}) {
        const e = await fetch(`${Yt}/availability`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "omit",
            body: JSON.stringify({
                booking_event_id: t,
                time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                from_date: n,
                to_date: a
            })
        })
          , r = await e.json();
        if (e.ok)
            return r.disabled_dates;
        throw r
    },
    async getCategories(t) {
        return await (await fetch(`${Yt}/${t}/collections`)).json()
    },
    async getStoreSettings(t) {
        const n = await fetch(`${Yt}/${t}/settings`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "omit"
        })
          , a = await n.json();
        if (n.ok)
            return a;
        throw a
    },
    async getStoreRegions(t) {
        return (await (await fetch(`${Yt}/${t}/regions`)).json()).regions.map(e => ({
            id: e.id,
            countries: e.countries.map(r => ({
                countryCode: r.iso_2,
                provinces: r.provinces.map(o => o.iso_2)
            }))
        }))
    },
    async getCartShippingOptions(t) {
        return (await (await fetch(`${Yt}/shipping-options/${t}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })).json()).shipping_options.map(e => ({
            id: e.id,
            displayName: e.name,
            provider: e.provider_id,
            amount: e.amount || 0
        }))
    },
    async getCart(t) {
        return (await (await fetch(`${Yt}/carts/${t}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })).json()).cart
    },
    async updateCart(t, n) {
        return (await (await fetch(`${Yt}/carts/${t}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                billing_address: {
                    address_1: n.billingAddress.line1,
                    city: n.billingAddress.city,
                    name: n.billingAddress.name,
                    phone: n.billingAddress.phone,
                    postal_code: n.billingAddress.postal_code,
                    country_code: n.billingAddress.country,
                    province_code: n.billingAddress.state
                },
                shipping_address: {
                    address_1: n.shippingAddress.line1,
                    city: n.shippingAddress.city,
                    name: n.shippingAddress.name,
                    phone: n.shippingAddress.phone,
                    postal_code: n.shippingAddress.postal_code,
                    country_code: n.shippingAddress.country,
                    province_code: n.shippingAddress.state
                },
                region_id: n.regionId
            })
        })).json()).cart
    },
    async initiatePaymentSession(t) {
        return (await (await fetch(`${Yt}/carts/${t}/payment-session`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                express_checkout: !0
            })
        })).json()).cart
    },
    async createCart({items: t, successUrl: n, cancelUrl: a, locale: e, storeId: r}) {
        return (await (await fetch(`${Yt}/carts`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                store_id: r,
                items: t,
                success_url: n,
                cancel_url: a,
                time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                locale: e
            })
        })).json()).cart
    }
}
  , Ts = "https://cdn.zyrosite.com/cdn-builder-placeholders"
  , Ht = `${Ts}/ecommerce-product`
  , wt = `${Ts}/instagram`
  , qp = `${Ts}/password-page`;
var rt = (t => (t.PHYSICAL = "physical",
t.DIGITAL = "digital",
t.DONATION = "donation",
t.BOOKING = "booking",
t.SERVICE = "service",
t))(rt || {});
const hi = {
    DPD: "dpd",
    OMNIVA: "omniva",
    LP_EXPRESS: "lp-express",
    MANUAL: "manual"
};
var Jn = (t => (t.DEFAULT = "default",
t.PRICE_LTH = "priceLTH",
t.PRICE_HTL = "priceHTL",
t.MOST_RECENT = "mostRecent",
t))(Jn || {})
  , da = (t => (t.CONTAIN = "contain",
t.COVER = "cover",
t.LANDSCAPE = "landscape",
t.PORTRAIT = "portrait",
t))(da || {})
  , on = (t => (t.NO_EFFECT = "no_effect",
t.ZOOM = "zoom",
t.SWAP_IMAGE = "swap_image",
t))(on || {})
  , ln = (t => (t.PAGINATION = "pagination",
t.SCROLL = "scroll",
t))(ln || {});
const ba = {
    id: -1,
    title: "Product name",
    subtitle: null,
    description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
    images: [],
    options: [],
    product_collections: [],
    ribbon_text: null,
    site_product_selection: null,
    type: {
        value: rt.PHYSICAL
    },
    thumbnail: null,
    variants: [{
        id: "",
        manage_inventory: !1,
        prices: [{
            amount: 0,
            currency_code: "USD",
            sale_amount: null,
            currency: {
                code: "USD",
                decimal_digits: 2,
                template: "$$1",
                name: "US Dollar",
                symbol: "$",
                symbol_native: "$",
                name_plural: "US dollars",
                rounding: 0,
                min_amount: 0
            }
        }],
        options: []
    }],
    seo_settings: {},
    purchasable: !0,
    additional_info: []
};
({
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
},
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
}),
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
},
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
},
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
},
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
},
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
},
{
    ...ba,
    images: `${Ht}`,
    thumbnail: `${Ht}`
};
const Ji = "hours"
  , Il = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available"
}
  , $p = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5"
  , es = "shopping-cart-items"
  , zp = 864e5
  , Su = "site_product_selection"
  , Is = "lowest_price_first"
  , er = 250
  , Zp = {
    [Jn.DEFAULT]: "",
    [Jn.PRICE_LTH]: "order=ASC&sort_by=price",
    [Jn.PRICE_HTL]: "order=DESC&sort_by=price",
    [Jn.MOST_RECENT]: "order=DESC&sort_by=created_at"
};
var Br = (t => (t.IMAGE = "image",
t.VIDEO = "video",
t))(Br || {});
const Ps = [rt.BOOKING, rt.DIGITAL]
  , Kp = "https://js.stripe.com/v3/"
  , Qp = [hi.DPD, hi.LP_EXPRESS, hi.OMNIVA]
  , Cn = t => t?.ecommerceStoreId ?? t?.demoEcommerceStoreId ?? $p
  , Pl = T(null)
  , ht = T({})
  , El = T(!1)
  , Dl = T([])
  , _t = () => {
    const t = u( () => ht.value.pages || {})
      , n = u( () => ht.value.blocks)
      , a = u( () => Object.fromEntries(Object.entries(n.value).filter( ([,{type: M}]) => M === Wi)))
      , e = u( () => ht.value.elements)
      , r = u( () => ht.value.nav)
      , o = u( () => ht.value.homePageId)
      , i = u( () => ht.value.isNavHidden)
      , s = u( () => ht.value.cookieBannerAcceptText)
      , l = u( () => ht.value.cookieBannerDisclaimer)
      , d = u( () => ht.value.cookieBannerDeclineText)
      , p = u( () => ht.value.blogReadingTimeText)
      , g = u( () => ht.value.meta)
      , h = u( () => ht.value.metaTitle)
      , f = u( () => ht.value.forms)
      , _ = u( () => ht.value.styles)
      , A = u( () => ht.value.domain)
      , E = u( () => ht.value.siteId)
      , w = u( () => Cn(ht.value.meta))
      , k = u( () => ht.value.ecommerceShoppingCart)
      , O = u( () => ht.value.isDynamicProductPageEnabled)
      , I = u( () => ht.value.blogCategories)
      , R = u( () => ht.value.languageSwitcherLanguages)
      , Y = u( () => ht.value.currentPageId)
      , G = u( () => t.value[Y.value])
      , X = u( () => ht.value.currentLocale)
      , q = u( () => ht.value.languageKeys)
      , D = u( () => g.value.googleAdsIds && g.value.googleAdsIds.length)
      , j = async M => {
        try {
            const W = await Lt.getStoreProductSeo(M);
            Dl.value = W.products
        } catch (W) {
            console.error(W)
        }
    }
      , z = M => {
        Pl.value = M
    }
      , ee = M => {
        ht.value = M
    }
      , F = M => {
        El.value = M
    }
      , S = ({pageId: M}) => {
        if (!t.value[M])
            return null;
        const W = t.value[M].slug;
        return [gn, g.value.defaultLocale].includes(X.value) ? o.value === M ? "/" : `/${W}` : o.value === M ? `/${X.value}` : `/${X.value}/${W}`
    }
    ;
    return {
        website: Pl,
        pageData: ht,
        pages: t,
        blocks: n,
        ecommerceProductListBlocks: a,
        elements: e,
        nav: r,
        homePageId: o,
        isNavHidden: i,
        cookieBannerAcceptText: s,
        cookieBannerDisclaimer: l,
        cookieBannerDeclineText: d,
        blogReadingTimeText: p,
        meta: g,
        metaTitle: h,
        forms: f,
        styles: _,
        domain: A,
        siteId: E,
        ecommerceStoreId: w,
        ecommerceShoppingCart: k,
        blogCategories: I,
        languageSwitcherLanguages: R,
        currentPageId: Y,
        currentLocale: X,
        languageKeys: q,
        currentPageData: G,
        setWebsite: z,
        setPageData: ee,
        getPagePathFromId: S,
        getButtonHref: ({isFormButton: M, linkedPageId: W, linkType: b, href: v}) => M ? null : v || b === Xi.PAGE && W && S({
            pageId: W
        }) || v,
        setIsSiteEngine: F,
        isSiteEngine: El,
        fetchProductSeo: j,
        productSeo: Dl,
        isDynamicProductPageEnabled: O,
        hasGoogleAdsApp: D
    }
}
  , Al = T(!0)
  , Cu = () => {
    const t = n => {
        Al.value = n
    }
    ;
    return {
        hasUserScrolled: u( () => !Al.value),
        setIntersectingState: t
    }
}
  , Xp = re({
    __name: "StickyTrigger",
    setup(t, {expose: n}) {
        n();
        const a = {
            threshold: 1
        }
          , e = T(null)
          , r = T(null)
          , {setIntersectingState: o} = Cu();
        xe( () => {
            r.value = new IntersectionObserver( ([{isIntersecting: s}]) => {
                o(s)
            }
            ,a),
            e.value && r.value.observe(e.value)
        }
        ),
        Zt( () => {
            r.value?.disconnect()
        }
        );
        const i = {
            OBSERVER_OPTIONS: a,
            stickyTriggerRef: e,
            observer: r,
            setIntersectingState: o
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , Jp = {
    ref: "stickyTriggerRef",
    class: "sticky-trigger"
};
function ev(t, n, a, e, r, o) {
    return m(),
    y("div", Jp, null, 512)
}
const tv = oe(Xp, [["render", ev]])
  , Ml = 1600
  , Ol = 1224
  , xl = 12
  , Bl = 1224
  , Ja = 1920
  , av = (t, n) => {
    const [a,e,r,o] = n.split("/").map(Number.parseFloat)
      , {styles: i} = t.settings ?? {}
      , s = Number.parseFloat(i?.["row-size"]) ?? 48
      , l = Number.parseFloat(i?.["column-gap"]) ?? 24
      , d = Number.parseFloat(i?.["row-gap"]) ?? 16
      , p = (Ol - (xl - 1) * l) / xl
      , g = (Ja - Ml) / 2 + l
      , h = (Ml - Ol) / 2 - l;
    let f = Ja;
    const _ = r - a
      , A = _ * s + (_ - 1) * d;
    return e !== 1 && (f -= g),
    o !== 17 && (f -= g),
    e > 2 && (f -= h),
    o < 16 && (f -= h),
    e > 3 && (f -= (e - 3) * (p + l)),
    o < 15 && (f -= (15 - o) * (p + l)),
    o - e === 1 && (f = p),
    {
        width: f,
        height: A
    }
}
  , Ll = t => Object.prototype.toString.call(t) === "[object Object]"
  , ao = t => {
    const n = t.split(" ")
      , a = n.length;
    if (a < 1 || a > 4)
        throw new Error(`Cannot parse ${a} sides`);
    return ( (r, o=r, i=r, s=o) => ({
        top: r,
        right: o,
        bottom: i,
        left: s
    }))(...n)
}
  , nv = ["padding", "m-padding", "block-padding"]
  , rv = ["border-radius"]
  , ga = (t, n="") => Ll(t) ? Object.entries(t).reduce( (a, [e,r]) => {
    const o = n ? `${n}-${e}` : `--${e}`;
    if (Ll(r))
        return {
            ...a,
            ...ga(r, o)
        };
    const i = nv.includes(e) ? Object.entries(ao(r)).reduce( (s, [l,d]) => ({
        ...s,
        [`${o}-${l}`]: d,
        [o]: r
    }), {}) : {
        [o]: r
    };
    return {
        ...a,
        ...rv.includes(e) ? {
            [o]: `${r}px`
        } : i
    }
}
, {}) : {}
  , Tu = (t, n, a) => !t || !n ? null : t === "assets" ? `https://assets.zyrosite.com/${a}/${n}` : t === "unsplash" ? `https://images.unsplash.com/${n}` : n
  , ov = t => typeof t != "string" ? "" : t.charAt(0).toUpperCase() + t.slice(1)
  , rr = t => {
    const n = t.split(/[/\\]/).pop()
      , a = n.lastIndexOf(".");
    return n === "" || a < 1 ? "" : n.slice(a + 1).toLowerCase()
}
  , iv = [am, "https://assets.zyrosite.space", "https://assets.zyrosite.com", "https://cdn.zyrosite.com"]
  , sv = "https://images.unsplash.com"
  , lv = "cdn-cgi/image"
  , Es = [{
    width: 360,
    height: 640
}]
  , Ds = [1, 2, 2.625, 3]
  , cv = [{
    width: 1440
}, {
    width: 1920
}]
  , As = [1, 2]
  , Ms = 16
  , jo = (t, n=Ms) => [`(min-width: ${Ur}px) ${t}px`, `calc(100vw - ${n * 2}px)`].join(", ")
  , uv = (t, n, a={}) => {
    const e = a.fit || (a.shouldContain ? "scale-down" : "crop")
      , r = ["format=auto", a.width && `w=${a.width}`, a.height && `h=${a.height}`, `fit=${e}`, a.isLossless && "q=100", a.format && `f=${a.format}`, a.trim && `trim=${a.trim}`, a.quality && !a.isLossless && `q=${a.quality}`].filter(i => !!i).join(",");
    let[,o] = n.split(t);
    for (; o.startsWith("/"); )
        o = o.replace("/", "");
    return `${t}/${lv}/${r}/${o}`
}
  , dv = (t, n={}) => {
    const a = new URL(t);
    return a.searchParams.set("auto", n.format || "format"),
    a.searchParams.set("fit", n.shouldContain ? "clip" : "crop"),
    n.width && a.searchParams.set("w", n.width),
    n.height && a.searchParams.set("h", n.height),
    n.isLossless && a.searchParams.set("q", 100),
    a.href
}
  , It = (t, n, a, e={}) => {
    const r = Tu(t, n, a);
    if (!r)
        return null;
    if (rr(r) === "svg" || rr(r) === "ico" || rr(r) === "gif")
        return r;
    const o = iv.find(i => r.includes(i));
    return o ? uv(o, r, e) : r.includes(sv) ? dv(r, e) : r
}
  , en = (t, n, a, e={}) => {
    const r = cv.map(s => As.map(l => {
        const d = Math.round(s.width * l);
        return `${It(t, n, a, {
            ...e,
            width: d
        })} ${d}w`
    }
    )).join(",");
    return `${Es.map(s => Ds.map(l => {
        const d = Math.round(s.width * l)
          , p = {
            ...e,
            width: d
        };
        return e.isMobileFullScreen && (p.height = Math.round(s.height * l)),
        `${It(t, n, a, p)} ${d}w`
    }
    )).join(",")},${r}`
}
  , En = (t, n, a, e={}) => {
    if (!e.width)
        return en(t, n, a, e);
    const r = As.map(l => {
        const d = Math.round(e.width * l)
          , p = Math.round(e.height * l);
        return `${It(t, n, a, {
            ...e,
            width: d,
            height: p
        })} ${d}w`
    }
    ).join(",")
      , o = (e.mobilePadding ?? Ms) * 2;
    return `${Es.map(l => {
        const d = l.width - o;
        return Ds.map(p => {
            const g = e.width / e.height
              , h = Math.round(d * p)
              , f = Math.round(h / g);
            return `${It(t, n, a, {
                ...e,
                width: h,
                height: f
            })} ${h}w`
        }
        ).join(",")
    }
    ).join(",")},${r}`
}
  , mv = (t, n, a, e={}) => {
    if (!e.width)
        return en(t, n, a, e);
    const r = As.map(s => {
        const l = Math.round(e.width * s)
          , d = Math.round(e.height * s);
        return `${It(t, n, a, {
            ...e,
            width: l,
            height: d
        })} ${l}w`
    }
    ).join(",")
      , o = (e.mobilePadding ?? Ms) * 2;
    return `${Es.map(s => {
        const l = Math.round((s.width - o + e.columnGap) / e.columnCount - e.columnGap);
        return Ds.map(d => {
            const p = Math.round(l * d)
              , g = Math.round(l * d);
            return `${It(t, n, a, {
                ...e,
                width: g,
                height: !e.isMasonryLayout && g
            })} ${p}w`
        }
        ).join(",")
    }
    ).join(",")},${r}`
}
  , gv = t => {
    if (!t.toSorted)
        return t;
    const {withPositions: n, reorderedLanguages: a} = t.reduce( (e, r) => (Number.isInteger(r.orderPosition) && r.orderPosition >= 0 ? e.withPositions.push(r) : e.reorderedLanguages.push(r),
    e), {
        withPositions: [],
        reorderedLanguages: []
    });
    return n.toSorted( (e, r) => e.orderPosition - r.orderPosition).forEach(e => {
        a.splice(e.orderPosition, 0, e)
    }
    ),
    a
}
  , pv = (t, n=!1) => {
    const a = T("z-cookies-consent")
      , e = T("1")
      , r = u( () => !!e.value)
      , o = u( () => e.value === "1")
      , i = u( () => e.value !== "0");
    return xe( () => {
        const d = Lm(window.location.hostname);
        a.value = `z-cookies-consent-${d}`,
        e.value = xo(a.value)
    }
    ),
    {
        acceptCookies: () => {
            $i(a.value, 1, 365),
            e.value = "1",
            !n && Rm({
                siteMeta: t,
                areCookiesAllowed: i.value
            })
        }
        ,
        declineCookies: () => {
            $i(a.value, 0, 1),
            e.value = "0"
        }
        ,
        hasUserConsentedCookieBanner: r,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i
    }
}
  , vv = re({
    __name: "CookieBanner",
    props: {
        disclaimer: {
            type: String,
            required: !0
        },
        acceptText: {
            type: String,
            default: "Accept"
        },
        declineText: {
            type: String,
            default: "Decline"
        },
        siteMeta: {
            type: Object,
            required: !0
        },
        isPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {acceptCookies: e, declineCookies: r, hasUserConsentedCookieBanner: o} = pv(a.siteMeta, a.isPreviewMode)
          , i = {
            props: a,
            acceptCookies: e,
            declineCookies: r,
            hasUserConsentedCookieBanner: o,
            get isAppPrerendering() {
                return Nm
            }
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , hv = {
    key: 0,
    class: "cookie-banner"
}
  , fv = {
    class: "cookie-banner__frame"
}
  , yv = {
    class: "cookie-banner__text"
}
  , bv = {
    class: "cookie-banner__controls"
};
function _v(t, n, a, e, r, o) {
    return !e.isAppPrerendering && !e.hasUserConsentedCookieBanner ? (m(),
    y("div", hv, [P("div", fv, [P("p", yv, te(a.disclaimer), 1), P("div", bv, [P("button", {
        class: "control-button primary",
        onClick: n[0] || (n[0] = (...i) => e.acceptCookies && e.acceptCookies(...i))
    }, te(a.acceptText), 1), P("button", {
        class: "control-button",
        onClick: n[1] || (n[1] = (...i) => e.declineCookies && e.declineCookies(...i))
    }, te(a.declineText), 1)])])])) : x("", !0)
}
const wv = oe(vv, [["render", _v]])
  , kv = t => {
    const n = t.colors.map(a => a.value).join(", ");
    return `linear-gradient(${t.angle}deg, ${n})`
}
  , Sv = re({
    __name: "BlockBackground",
    props: {
        type: {
            default: Wa.COLOR
        },
        alt: {},
        overlayOpacity: {},
        src: {},
        srcset: {},
        isEager: {
            type: Boolean
        },
        gradient: {},
        color: {},
        isFixed: {
            type: Boolean
        },
        isMobile: {
            type: Boolean,
            default: !1
        },
        isOpacityDisabled: {
            type: Boolean,
            default: !1
        },
        videoPoster: {}
    },
    setup(t, {expose: n}) {
        n(),
        ft(g => ({
            "2acd084c": o.value,
            "6a072896": i.value.xStart,
            "6bbc0135": i.value.yStart,
            c01d2be2: i.value.xEnd,
            e8e6c9f8: l.value
        }));
        const a = t
          , e = u( () => a.type === Wa.VIDEO)
          , r = u( () => a.type === Wa.IMAGE)
          , o = u( () => a.type === Wa.GRADIENT && a.gradient ? kv(a.gradient) : a.isOpacityDisabled ? a.type === Wa.COLOR ? a.color : "rgb(255, 255, 255)" : a.type === Wa.COLOR ? a.color : "transparent")
          , i = u( () => {
            const h = ((a.gradient?.angle || 0) + 90) * Math.PI / 180
              , f = `${Math.round(50 - 50 * Math.cos(h))}%`
              , _ = `${Math.round(50 - 50 * Math.sin(h))}%`
              , A = `${Math.round(50 + 50 * Math.cos(h))}%`
              , E = `${Math.round(50 + 50 * Math.sin(h))}%`;
            return {
                xStart: f,
                yStart: _,
                xEnd: A,
                yEnd: E
            }
        }
        )
          , s = u( () => [Wa.IMAGE, Wa.VIDEO].includes(a.type) && !a.isOpacityDisabled && a.overlayOpacity)
          , l = u( () => {
            const g = a.overlayOpacity ? a.overlayOpacity : 0;
            return s.value && !a.isOpacityDisabled && g
        }
        )
          , d = T(null);
        xe( () => {
            Ot( () => {
                d.value?.classList.add("transition-with-bg")
            }
            )
        }
        );
        const p = {
            props: a,
            isVideoBackground: e,
            isImageBackground: r,
            backgroundColor: o,
            gradientBackgroundPosition: i,
            isBackgroundOverlayShown: s,
            backgroundOverlayOpacity: l,
            blockBackgroundRef: d,
            get BACKGROUND_TYPES() {
                return Wa
            }
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , Cv = ["alt", "src", "srcset", "loading"]
  , Tv = ["src", "poster"];
function Iv(t, n, a, e, r, o) {
    return m(),
    y("div", {
        ref: "blockBackgroundRef",
        class: J(["block-background", {
            "block-background--fixed": a.isFixed,
            "block-background--animated-gradient": a.type === e.BACKGROUND_TYPES.GRADIENT && a.gradient?.isAnimated
        }])
    }, [e.isImageBackground ? (m(),
    y("img", {
        key: a.src,
        alt: a.alt,
        src: a.src,
        srcset: a.srcset,
        width: "100vw",
        sizes: "(max-width: 500px) 800px, 100vw",
        loading: a.isEager ? "eager" : "lazy",
        class: J(["block-background__image", {
            "block-background__image--fixed": a.isFixed
        }])
    }, null, 10, Cv)) : x("", !0), e.isVideoBackground ? (m(),
    y("video", {
        key: a.src,
        src: a.src,
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        class: J(["block-background__image", {
            "block-background__video--fixed": a.isFixed
        }]),
        poster: a.videoPoster
    }, null, 10, Tv)) : x("", !0), e.isBackgroundOverlayShown ? (m(),
    y("div", {
        key: 2,
        class: J(["block-background__overlay", {
            "block-background__overlay--fixed": a.isFixed
        }])
    }, null, 2)) : x("", !0)], 2)
}
const Os = oe(Sv, [["render", Iv]])
  , Pv = re({
    props: {
        categories: {
            type: Array,
            default: () => []
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        getCategoryNameById(t) {
            return this.blogCategories[t]?.name?.toUpperCase()
        }
    }
})
  , Ev = {
    class: "categories"
}
  , Dv = ["onClick"];
function Av(t, n, a, e, r, o) {
    return m(),
    y("p", Ev, [(m(!0),
    y(pe, null, Me(t.categories, (i, s) => (m(),
    y("span", {
        key: i,
        class: "categories__item",
        onClick: l => t.$emit("filter-category", t.categories[s])
    }, te(t.getCategoryNameById(i)), 9, Dv))), 128))])
}
const Iu = oe(Pv, [["render", Av], ["__scopeId", "data-v-17a7aef3"]])
  , Mv = re({
    __name: "BlockBlogListItemMeta",
    props: {
        authorName: {
            type: String,
            default: ""
        },
        minutesAmount: {
            type: String,
            default: "0"
        },
        blogReadingTimeText: {
            type: String,
            default: ""
        },
        date: {
            type: String,
            default: ""
        },
        showAvatar: {
            type: Boolean,
            default: !0
        },
        showName: {
            type: Boolean,
            default: !0
        },
        showDate: {
            type: Boolean,
            default: !0
        },
        showMinutes: {
            type: Boolean,
            default: !0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = {
            get DEFAULT_MIN_READ_TEXT() {
                return nm
            }
        };
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , Ov = {
    class: "blog-list-item-meta"
}
  , xv = {
    class: "font-secondary"
}
  , Bv = {
    class: "blog-list-item-meta__author-name"
}
  , Lv = {
    class: "blog-list-item-meta__subtitle"
}
  , Rv = {
    key: 0
}
  , Nv = {
    key: 1
};
function Hv(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", Ov, [P("div", xv, [le((m(),
    y("p", Bv, [$e(te(a.authorName), 1)])), [[ma, a.showName], [i, "blog-author"]]), le(P("p", Lv, [a.showDate && a.date ? (m(),
    y("span", Rv, te(a.date), 1)) : x("", !0), a.showMinutes ? (m(),
    y("span", Nv, te(`${a.minutesAmount} ${a.blogReadingTimeText || e.DEFAULT_MIN_READ_TEXT}`), 1)) : x("", !0)], 512), [[ma, a.showDate || a.showMinutes]])])])
}
const Pu = oe(Mv, [["render", Hv], ["__scopeId", "data-v-d92226f1"]])
  , Eu = t => new Date(t).toLocaleDateString("en-US")
  , xs = re({
    name: "BlockBlogHeader",
    components: {
        BlockBlogListItemMeta: Pu,
        BlockBlogListItemCategories: Iu
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        currentBlogPage: {
            type: Object,
            required: !0
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        },
        blogReadingTimeText: {
            type: [String, void 0],
            default: void 0
        }
    },
    setup(t) {
        const a = u( () => `${t.data.settings.blogTitleFontSize || 32}px`);
        return {
            getFormattedNumericDate: Eu,
            DATA_ATTRIBUTE_ANIMATION_ROLE: Qa,
            DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: fr,
            blogTitleTextSize: a
        }
    },
    computed: {
        categories() {
            return this.currentBlogPage?.categories ?? []
        },
        meta() {
            return this.currentBlogPage?.meta ?? {}
        },
        authorName() {
            return this.meta?.authorName
        },
        shownItems() {
            return this.data?.settings?.shownItems ?? {}
        },
        areCategoriesShown() {
            return this.shownItems.categories && this.categories.length
        }
    }
})
  , Rl = () => {
    ft(t => ({
        "0327e7ea": t.blogTitleTextSize
    }))
}
  , Nl = xs.setup;
xs.setup = Nl ? (t, n) => (Rl(),
Nl(t, n)) : Rl;
const Vv = {
    class: "block-blog-header__content"
}
  , Uv = {
    class: "font-primary block-blog-header__title"
}
  , Fv = {
    key: 0,
    class: "font-secondary block-blog-header__description"
};
function jv(t, n, a, e, r, o) {
    const i = mt("BlockBlogListItemCategories")
      , s = mt("BlockBlogListItemMeta")
      , l = st("qa");
    return le((m(),
    y("div", dt({
        class: "block-blog-header",
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: t.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT
    }), [P("div", Vv, [le((m(),
    y("h1", Uv, [$e(te(t.meta.title), 1)])), [[l, "blog-label-posttitle"]]), t.shownItems.description ? le((m(),
    y("p", Fv, [$e(te(t.meta.description), 1)])), [[l, "blog-label-postdescription"]]) : x("", !0), t.areCategoriesShown ? le((m(),
    $(i, {
        key: 1,
        class: "font-secondary",
        categories: t.categories,
        "blog-categories": t.blogCategories
    }, null, 8, ["categories", "blog-categories"])), [[l, "blog-label-category"]]) : x("", !0), Le(s, et({
        authorName: t.authorName,
        minutesAmount: t.currentBlogPage.minutesToRead,
        date: t.getFormattedNumericDate(t.currentBlogPage.date),
        showAvatar: t.shownItems.avatar,
        showName: t.shownItems.authorFullName,
        showDate: t.shownItems.date,
        showMinutes: t.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": t.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])])], 16)), [[l, "blog-postinformation"]])
}
const Gv = oe(xs, [["render", jv], ["__scopeId", "data-v-c599b443"]])
  , ts = T(!1)
  , Hl = T(null)
  , Go = ({blockId: t}) => ({
    isSearchOpenedInCurrentBlock: u( () => Hl.value === t && ts.value),
    toggleSearchDropdown: e => {
        Hl.value = t,
        ts.value = e
    }
})
  , Lr = 16
  , Ua = 1224
  , Fa = 360
  , Du = Fa - Lr * 2
  , Vl = 16
  , Yv = re({
    __name: "BlockLayoutWrapper",
    props: {
        isMobileLegacy: {
            type: Boolean,
            default: !1
        },
        isBlockResponsive: {
            type: Boolean,
            default: !1
        },
        isForcedOnTop: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(l => ({
            c467b54c: o.value,
            "2c660f9c": r.value,
            "6ced7b1e": e.value,
            "1f9bbfe2": i.value
        }));
        const a = t
          , e = u( () => a.isBlockResponsive && !a.isInPreviewMode ? `0 ${Lr * 100 / Fa}vw` : `0 ${Lr}px`)
          , r = u( () => `${Fa}px`)
          , o = u( () => `${Ua}px`)
          , i = u( () => `0 ${Lr}px`)
          , s = {
            props: a,
            mobileBlockPaddingCSSVar: e,
            mobileMaxWidthCSSVar: r,
            maxWidthCSSVar: o,
            tabletBlockPaddingCSSVar: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function Wv(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["block-layout", {
            "block-layout--legacy": a.isMobileLegacy,
            "block-layout--layout": !a.isMobileLegacy,
            "block-layout--forcedOnTop": a.isForcedOnTop
        }])
    }, [ne(t.$slots, "default")], 2)
}
const qv = oe(Yv, [["render", Wv]])
  , Ul = ({blockElements: t, elementPositionKey: n}) => t?.length ? Math.max(...t.map(a => a[n].top + a[n].height)) : 0
  , $v = [Xc, Jc]
  , zv = ({lowestElementBottom: t, sectionMinHeight: n}) => {
    const e = t >= n ? 0 : n - t;
    return t ? `${e}px` : "1fr"
}
  , Yo = ({blockElementsWithPosition: t}) => {
    try {
        const n = t.flatMap( ({position: e}) => [e.top, e.height + e.top]);
        return [...new Set([0, ...n])].sort( (e, r) => e - r)
    } catch (n) {
        console.error(n)
    }
}
  , as = ({rowTopsUniqueSorted: t, columnsLeftUniqueSorted: n, elementPosition: a}) => {
    const {top: e, left: r, width: o, height: i} = a
      , s = t.indexOf(e) + 1
      , l = t.indexOf(e + i) + 1
      , d = n.indexOf(r) + 1
      , p = n.indexOf(r + o) + 1;
    return {
        rowStart: s,
        rowEnd: l,
        columnStart: d,
        columnEnd: p
    }
}
  , Wo = ({blockElementsWithPosition: t, blockWidth: n}) => {
    const a = t.flatMap( ({position: r}) => [r.left, r.width + r.left]);
    return [...new Set([0, ...a, n])].sort( (r, o) => r - o)
}
  , no = ({blockElements: t, elementPositionKey: n}) => t.map(a => ({
    ...a,
    position: a[n]
}))
  , Fl = ({blockElements: t, elementPositionKey: n, buildResponsiveGrid: a}) => {
    const e = n === Oa ? Du : Ua
      , r = no({
        blockElements: t,
        elementPositionKey: n
    });
    return Wo({
        blockElementsWithPosition: r,
        blockWidth: e
    }).map( (l, d, p) => d === 0 ? l : l - p[d - 1]).filter(l => l !== 0).map(l => a ? `${l / e * 100}%` : `${l}px`).join(" ")
}
  , Zv = ({gridRows: t}) => t.filter(n => n !== 0)
  , Kv = ({gridRows: t}) => t.map(n => `${n}px`)
  , Qv = ({gridRows: t}) => t.map(n => `minmax(${n}px, auto)`)
  , Xv = ({gridRows: t, responsiveRows: n, isMobile: a}) => t.map( (e, r) => n.includes(r + 1) ? "auto" : `${e * 100 / (a ? Fa : Ua)}vw`)
  , fi = ({gridRows: t, lastRowHeight: n}) => `${t.join(" ")} ${n}`
  , wo = ({blockElements: t, elementPositionKey: n, buildResponsiveGrid: a, responsiveRows: e, lowestElementBottom: r, sectionMinHeight: o}) => {
    const i = n === Oa
      , s = no({
        blockElements: t,
        elementPositionKey: n
    })
      , d = Yo({
        blockElementsWithPosition: s
    }).map( (f, _, A) => _ === 0 ? f : f - A[_ - 1])
      , p = zv({
        lowestElementBottom: r,
        sectionMinHeight: o
    })
      , g = Zv({
        gridRows: d
    });
    if (!a) {
        const f = Kv({
            gridRows: g
        });
        return fi({
            gridRows: f,
            lastRowHeight: p
        })
    }
    if (!e) {
        const f = Qv({
            gridRows: g
        });
        return fi({
            gridRows: f,
            lastRowHeight: p
        })
    }
    const h = Xv({
        gridRows: g,
        responsiveRows: e,
        isMobile: i
    });
    return fi({
        gridRows: h,
        lastRowHeight: p
    })
}
  , jl = ({blockElements: t, elementPositionKey: n}) => {
    const a = no({
        blockElements: t,
        elementPositionKey: n
    })
      , e = Yo({
        blockElementsWithPosition: a
    })
      , r = Wo({
        blockElementsWithPosition: a,
        blockWidth: n === Oa ? Du : Ua
    });
    return t.filter(o => !$v.includes(o.type)).reduce( (o, i) => {
        const {rowEnd: s, rowStart: l} = as({
            rowTopsUniqueSorted: e,
            columnsLeftUniqueSorted: r,
            elementPosition: i[n]
        })
          , d = s > l ? s - l : 1
          , p = [...new Array(d).keys()].map( (g, h) => l + h);
        return o.some(g => p.includes(g)) ? o : [...o, s - 1]
    }
    , [])
}
  , Jv = (t, n) => {
    const a = no({
        blockElements: t,
        elementPositionKey: Pn
    })
      , e = Yo({
        blockElementsWithPosition: a
    })
      , r = Wo({
        blockElementsWithPosition: a,
        blockWidth: Ua
    })
      , o = no({
        blockElements: t,
        elementPositionKey: Oa
    })
      , i = Yo({
        blockElementsWithPosition: o
    })
      , s = Wo({
        blockElementsWithPosition: o,
        blockWidth: Ua
    });
    return t.map(l => {
        const {rowStart: d, rowEnd: p, columnStart: g, columnEnd: h} = as({
            rowTopsUniqueSorted: e,
            columnsLeftUniqueSorted: r,
            elementPosition: l.desktop
        })
          , {rowStart: f, rowEnd: _, columnStart: A, columnEnd: E} = as({
            rowTopsUniqueSorted: i,
            columnsLeftUniqueSorted: s,
            elementPosition: l.mobile
        });
        return {
            ...l,
            settings: {
                ...l.settings,
                styles: {
                    ...l.settings?.styles || {},
                    "z-index": n.indexOf(l.elementId) + 1,
                    "grid-row": `${d}/${p}`,
                    "grid-column": `${g}/${h}`,
                    "m-grid-row": `${f}/${_}`,
                    "m-grid-column": `${A}/${E}`
                }
            }
        }
    }
    )
}
  , ns = ({blockData: t, siteElements: n, shouldBuildResponsive: a=!0}={}) => {
    const e = T(a)
      , r = u( () => t.value.components.map(I => ({
        ...n.value[I],
        elementId: I
    })))
      , o = u( () => r?.value?.length ? Ul({
        blockElements: r.value,
        elementPositionKey: Oa
    }) : null)
      , i = u( () => r?.value?.length ? Ul({
        blockElements: r.value,
        elementPositionKey: Pn
    }) : null)
      , s = u( () => t.value.mobile?.minHeight && o.value ? "auto" : `${t.value.mobile?.minHeight || Vl}px`)
      , l = u( () => t.value.desktop?.minHeight && i.value ? "auto" : `${t.value.desktop?.minHeight}px`)
      , d = u( () => t.value.components.some(I => !n.value[I].mobile))
      , p = u( () => wo({
        blockElements: r.value,
        elementPositionKey: Pn,
        buildResponsiveGrid: e.value
    }))
      , g = u( () => Fl({
        blockElements: r.value,
        elementPositionKey: Pn,
        buildResponsiveGrid: e.value
    }))
      , h = u( () => Fl({
        blockElements: r.value,
        elementPositionKey: Oa,
        buildResponsiveGrid: e.value
    }))
      , f = u( () => jl({
        blockElements: r.value,
        elementPositionKey: Oa
    }))
      , _ = u( () => wo({
        blockElements: r.value,
        elementPositionKey: Oa,
        buildResponsiveGrid: e.value,
        responsiveRows: f.value,
        lowestElementBottom: o.value,
        sectionMinHeight: t.value.mobile?.minHeight
    }))
      , A = u( () => wo({
        blockElements: r.value,
        elementPositionKey: Oa,
        buildResponsiveGrid: e.value
    }))
      , E = u( () => jl({
        blockElements: r.value,
        elementPositionKey: Pn
    }))
      , w = u( () => wo({
        blockElements: r.value,
        elementPositionKey: Pn,
        buildResponsiveGrid: e.value,
        responsiveRows: E.value,
        lowestElementBottom: i.value,
        sectionMinHeight: t.value.desktop?.minHeight
    }))
      , k = u( () => Jv(r.value, t.value.zindexes))
      , O = u( () => ({
        "--m-grid-template-rows": _.value,
        "--t-grid-template-rows": A.value,
        "--small-desktop-grid-template-rows": w.value,
        "--grid-template-rows": p.value,
        "--m-grid-template-columns": h.value,
        "--grid-template-columns": g.value,
        "--m-block-min-height": s.value,
        "--t-block-min-height": `${t.value.mobile?.minHeight || Vl}px`,
        "--small-desktop-block-min-height": l.value,
        "--block-min-height": `${t.value.desktop.minHeight}px`
    }));
    return {
        blockElements: r,
        layoutElements: k,
        buildResponsiveGrid: e,
        layoutCSSVars: O,
        isMobileLegacy: d
    }
}
  , eh = re({
    name: "LayoutElementWrapper",
    props: {
        elementData: {
            type: Object,
            required: !0
        },
        isForcedOnTop: {
            type: Boolean,
            default: !1
        },
        isMobileLegacy: {
            type: Boolean,
            default: !1
        },
        isMobileView: {
            type: Boolean,
            default: !1
        }
    },
    computed: {
        settings() {
            return this.elementData.settings
        },
        styles() {
            return this.settings.styles
        },
        innerBackgroundValue() {
            const {innerBackground: t} = this.elementData;
            if (!t)
                return {};
            const n = t[t.current];
            return t.current !== "image" ? {
                "--gridItemInnerBackground": n
            } : {
                "--gridItemInnerBackground": `url(${n})`,
                "--gridItemInnerBackgroundOverlayOpacity": "overlay-opacity"in t ? t["overlay-opacity"] : null
            }
        },
        isHiddenDesktop() {
            return this.elementData.desktop.isHidden
        },
        isHiddenMobile() {
            return this.elementData.mobile.isHidden
        },
        computedStyles() {
            return {
                ...ga(this.styles),
                ...this.innerBackgroundValue,
                ...this.isHiddenDesktop && !this.isMobileView && {
                    "--hidden-element-z-index": 0
                },
                ...this.isHiddenMobile && this.isMobileView && {
                    "--m-hidden-element-z-index": 0
                },
                ...this.isForcedOnTop && {
                    "--z-index": rm
                }
            }
        }
    }
});
function th(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["layout-element", {
            "layout-element--legacy": t.isMobileLegacy,
            "layout-element--layout": !t.isMobileLegacy
        }]),
        style: ze(t.computedStyles)
    }, [ne(t.$slots, "default")], 6)
}
const ah = oe(eh, [["render", th]])
  , nh = re({
    __name: "GridButton",
    props: {
        tagName: {
            default: "a"
        },
        href: {
            default: null
        },
        target: {
            default: null
        },
        rel: {
            default: null
        },
        type: {
            default: "primary"
        },
        buttonType: {
            default: null
        },
        content: {
            default: ""
        },
        isDisabled: {
            type: Boolean,
            default: !1
        },
        isLoading: {
            type: Boolean,
            default: !1
        },
        fontSizeMobile: {
            default: null
        },
        fontSizeDesktop: {
            default: null
        },
        fontFamily: {
            default: null
        },
        fontWeight: {
            default: null
        },
        borderWidth: {
            default: null
        },
        borderRadius: {
            default: null
        },
        backgroundColor: {
            default: null
        },
        fontColor: {
            default: null
        },
        borderColor: {
            default: null
        },
        backgroundColorHover: {
            default: null
        },
        fontColorHover: {
            default: null
        },
        borderColorHover: {
            default: null
        },
        mobileElementWidth: {
            default: 0
        },
        mobileElementHeight: {
            default: 0
        },
        isInBuilder: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["click", "drag", "dragstart"],
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = u( () => `${a.mobileElementWidth * 100 / Fa}vw`)
          , r = u( () => `${a.mobileElementHeight * 100 / Fa}vw`)
          , o = u( () => ({
            "--font-size-mobile": a.fontSizeMobile ? `${a.fontSizeMobile}px` : null,
            "--font-size-desktop": a.fontSizeDesktop ? `${a.fontSizeDesktop}px` : null,
            "--font-family": a.fontFamily,
            "--font-weight": a.fontWeight,
            "--border-radius": a.borderRadius === 0 || a.borderRadius ? `${a.borderRadius}px` : null,
            "--border-width": a.borderWidth === 0 || a.borderWidth ? `${a.borderWidth}px` : "0px",
            "--background-color": a.backgroundColor,
            "--font-color": a.fontColor,
            "--border-color": a.borderColor || "rgb(26, 26, 26)",
            "--background-color-hover": a.backgroundColorHover,
            "--font-color-hover": a.fontColorHover,
            "--border-color-hover": a.borderColorHover,
            "--m-height": a.isInBuilder ? "100%" : r.value,
            "--m-width": a.isInBuilder ? "100%" : e.value
        }))
          , i = u( () => ({
            "grid-button--empty": !a.content,
            [`grid-button--${a.type}`]: a.type,
            loading: a.isLoading
        }))
          , s = {
            props: a,
            mobileWidthCSSVar: e,
            mobileHeightCSSVar: r,
            buttonCSSVars: o,
            computedClass: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function rh(t, n, a, e, r, o) {
    return m(),
    $(mn(a.tagName), {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: J(["grid-button", e.computedClass]),
        "aria-hidden": a.isLoading,
        style: ze(e.buttonCSSVars),
        onClick: n[0] || (n[0] = i => t.$emit("click", i)),
        onDrag: n[1] || (n[1] = i => t.$emit("drag", i)),
        onDragstart: n[2] || (n[2] = i => t.$emit("dragstart", i))
    }, {
        default: ye( () => [$e(te(a.content), 1)]),
        _: 1
    }, 40, ["type", "name", "href", "disabled", "target", "rel", "class", "aria-hidden", "style"])
}
const Un = oe(nh, [["render", rh], ["__scopeId", "data-v-4a176f12"]])
  , ro = (t, {href: n}={}) => ({
    href: n,
    type: u( () => t.data.settings?.type),
    fontSizeMobile: u( () => t.data.mobile?.fontSize),
    fontSizeDesktop: u( () => t.data.desktop?.fontSize),
    fontFamily: u( () => t.data.fontFamily),
    fontWeight: u( () => t.data.fontWeight),
    borderWidth: u( () => t.data.borderWidth),
    borderRadius: u( () => t.data.borderRadius),
    backgroundColor: u( () => t.data.backgroundColor),
    fontColor: u( () => t.data.fontColor),
    borderColor: u( () => t.data.borderColor),
    backgroundColorHover: u( () => t.data.backgroundColorHover),
    fontColorHover: u( () => t.data.fontColorHover),
    borderColorHover: u( () => t.data.borderColorHover),
    buttonType: u( () => t.data.settings.isFormButton ? "submit" : null),
    tagName: u( () => t.data.settings.isFormButton ? "button" : "a"),
    target: u( () => t.data.target),
    rel: u( () => t.data.rel),
    content: u( () => t.data.content),
    mobileElementWidth: u( () => t.data.mobile.width),
    mobileElementHeight: u( () => t.data.mobile.height)
})
  , oh = {
    __name: "GridButtonProviderUser",
    props: {
        data: {
            type: Object,
            required: !0
        },
        currentLocale: {
            type: String,
            required: !0
        },
        mobileElementWidth: {
            type: Number,
            default: null
        },
        mobileElementHeight: {
            type: Number,
            default: null
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {getButtonHref: e} = _t()
          , {tagName: r, href: o, target: i, rel: s, type: l, buttonType: d, content: p, fontSizeMobile: g, fontSizeDesktop: h, fontFamily: f, fontWeight: _, borderWidth: A, borderRadius: E, backgroundColor: w, fontColor: k, borderColor: O, backgroundColorHover: I, fontColorHover: R, borderColorHover: Y} = ro(a, {
            href: u( () => e({
                isFormButton: a.data.settings.isFormButton,
                linkedPageId: a.data.linkedPageId,
                linkType: a.data.linkType,
                href: a.data.href
            }))
        })
          , G = {
            props: a,
            getButtonHref: e,
            tagName: r,
            href: o,
            target: i,
            rel: s,
            type: l,
            buttonType: d,
            content: p,
            fontSizeMobile: g,
            fontSizeDesktop: h,
            fontFamily: f,
            fontWeight: _,
            borderWidth: A,
            borderRadius: E,
            backgroundColor: w,
            fontColor: k,
            borderColor: O,
            backgroundColorHover: I,
            fontColorHover: R,
            borderColorHover: Y,
            computed: u,
            get useSiteGlobal() {
                return _t
            },
            GridButton: Un,
            get useGridButton() {
                return ro
            }
        };
        return Object.defineProperty(G, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        G
    }
};
function ih(t, n, a, e, r, o) {
    return m(),
    $(e.GridButton, {
        "tag-name": e.tagName,
        href: e.href,
        target: e.target,
        rel: e.rel,
        type: e.type,
        "button-type": e.buttonType,
        content: e.content,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-width": e.borderWidth,
        "border-radius": e.borderRadius,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight
    }, null, 8, ["tag-name", "href", "target", "rel", "type", "button-type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const sh = oe(oh, [["render", ih]])
  , lh = t => {
    const n = u( () => t.data.settings?.productId)
      , a = u( () => t.data.settings?.productVariantId);
    return {
        productId: n,
        productVariantId: a
    }
}
  , yi = T("")
  , Gl = T({})
  , Yl = T("")
  , Pa = () => ({
    openEcommerceModal: e => {
        yi.value = e
    }
    ,
    closeEcommerceModal: () => {
        yi.value = null
    }
    ,
    openEcommerceModalName: yi,
    productPreviewData: Gl,
    quickPreviewProductId: Yl,
    setProductPreviewData: (e, r) => {
        Gl.value = e,
        Yl.value = r
    }
})
  , Wl = t => t.variants.reduce( (n, a) => {
    const e = n.prices[0]?.sale_amount || n.prices[0]?.amount
      , r = a.prices[0]?.sale_amount || a.prices[0]?.amount;
    return e < r ? n : a
}
)
  , oo = (t, n) => {
    const a = "id"in t ? t.id : t.custom_field_id
      , e = "id"in n ? n.id : n.custom_field_id;
    return a === e && t.value === n.value
}
  , rs = t => Ps.includes(t.type.value) && !t.variants[0].prices[0].amount
  , ch = () => new Promise(t => {
    setTimeout( () => {
        const n = window.localStorage.getItem(es);
        if (!n)
            return t([]);
        const a = JSON.parse(n);
        return a.payload.length ? Date.now() > a.expiry ? (window.localStorage.removeItem(es),
        t([])) : t(a.payload) : t([])
    }
    , 0)
}
)
  , uh = (t, n) => t.find(a => {
    const e = a.variant_id === n.variants[0].id;
    if (a.custom_field_values?.length) {
        const r = a.custom_field_values.some(o => n.custom_field_values?.some(i => oo(o, i)));
        return e && r
    }
    return e
}
)
  , Au = t => t.map(n => {
    const {custom_fields: a, ...e} = n;
    return a?.length ? {
        ...e,
        custom_field_values: a.map(r => ({
            custom_field_id: r.id,
            value: r.value || ""
        }))
    } : e
}
)
  , Mu = t => t.reduce( (n, a) => uh(n, a) ? n.map(r => {
    const o = r.variant_id === a.variants[0].id
      , i = r.custom_field_values?.every(s => a.custom_field_values?.some(l => l.custom_field_id === s.custom_field_id && l.value === s.value)) ?? !0;
    return o && i ? {
        variant_id: r.variant_id,
        quantity: r.quantity + 1,
        custom_field_values: r.custom_field_values
    } : r
}
) : [...n, {
    custom_field_values: a.custom_field_values,
    variant_id: a.variants[0].id,
    quantity: 1,
    time_slot: a.variants[0].booking_event?.time_slot,
    time_zone: a.variants[0].booking_event?.time_zone
}], [])
  , qo = t => {
    const n = t.some(o => o.type.value === rt.DIGITAL)
      , a = t.some(o => o.type.value === rt.DONATION)
      , e = t.some(o => o.type.value === rt.BOOKING);
    let r = "";
    return e ? r = `&product=${rt.BOOKING}` : a ? r = `&product=${rt.DONATION}` : n && (r = `&product=${rt.DIGITAL}`),
    `${window.location.origin}?open-modal=EcommerceCheckoutSuccess${r}`
}
  , go = () => {
    const {openEcommerceModal: t} = Pa()
      , {meta: n, ecommerceShoppingCart: a, isSiteEngine: e, hasGoogleAdsApp: r} = _t();
    let o = "";
    const i = T("");
    xe( () => {
        o = n.value?.ecommerceStoreId,
        i.value = `${window.location.origin}${window.location.pathname}`
    }
    );
    async function s(d) {
        const p = Au(d)
          , g = Mu(p)
          , h = a.value?.lang || "en";
        let f = await Lt.getCheckoutUrl({
            items: g,
            cancelUrl: i.value,
            successUrl: qo(p),
            ...!e.value && {
                checkoutUrl: `${window.location.origin}/checkout`
            },
            locale: h,
            storeId: o
        });
        return f = new URL(f),
        f.searchParams.set("lang", h),
        f.toString()
    }
    async function l(d) {
        if (!o) {
            t("EcommerceCheckoutFailed");
            return
        }
        try {
            r.value && ei("begin_checkout", Hm(d));
            const p = await s(d);
            window.location.assign(p)
        } catch (p) {
            p.code === Il.INSUFFICIENT_INVENTORY ? t("EcommerceOutOfStock") : p.code === Il.BOOKING_UNAVAILABLE ? t("EcommerceBookingUnavailable") : t("EcommerceCheckoutFailed")
        }
    }
    return {
        initiateCheckout: l,
        storeId: o,
        cancelUrl: i,
        getSuccessUrl: qo,
        createCheckoutUrl: s
    }
}
  , bi = T([])
  , wn = T([])
  , kr = T([])
  , ql = T(null)
  , $l = T(!1)
  , zl = T(!1)
  , Zl = T({})
  , ko = T({})
  , Kl = T(!1)
  , dh = T(!1)
  , Ql = T("")
  , Xl = T("")
  , an = T({})
  , Wn = T(!1)
  , _i = T([])
  , wi = T(!1)
  , mh = (t, n) => t.find(a => {
    const e = a.product.variants[0].id === n.variants[0].id;
    if (a.product.custom_fields?.length) {
        const r = a.product.custom_fields.some(o => n.custom_fields?.some(i => oo(o, i)));
        return e && r
    }
    return e
}
)
  , Ea = ({blockId: t}={
    blockId: "global"
}) => {
    const {meta: n, pages: a, ecommerceProductListBlocks: e, ecommerceShoppingCart: r} = _t()
      , o = u( () => n.value[om] === im)
      , i = u( () => !!n.value?.ecommerceStoreId)
      , s = u( () => Zl.value[t || ""] ?? !1)
      , l = u( () => ko.value[t || ""] ?? !1)
      , d = u( () => Object.keys(e.value).every(b => ko.value[b] ?? !1))
      , p = u( () => wn.value.reduce( (b, v) => mh(b, v) ? b.map(B => {
        const K = B.product.variants[0].id === v.variants[0].id
          , Z = B.product.custom_fields?.length ? B.product.custom_fields?.some(H => v.custom_fields?.some(C => oo(H, C))) : !0;
        return K && Z ? {
            ...B,
            quantity: B.quantity + 1
        } : B
    }
    ) : [...b, {
        product: v,
        quantity: 1
    }], []))
      , g = u( () => {
        const v = wn.value.filter(B => rs(B)).map(B => B.id).filter( (B, K, Z) => Z.indexOf(B) === K);
        return wn.value.reduce( (B, K) => v.includes(K.id) ? B : B + 1, 0) + v.length
    }
    )
      , h = (b, v) => {
        if (!b || !v || wn.value.length >= er)
            return !1;
        const L = b?.variants?.find(B => B.id === v);
        if (!L)
            return !1;
        if (L.manage_inventory) {
            const K = p.value.find(H => H.product.id === b.id && H.product.variants.some(C => C.id === L.id))?.quantity || 0
              , Z = kr.value.find(H => H.id === v)?.inventory_quantity;
            return K < Z
        }
        return !0
    }
      , f = u( () => Object.values(a.value).filter(b => b.type === eu))
      , _ = u( () => Object.values(a.value).find(b => b.type === tu))
      , A = b => {
        t && (Zl.value[t] = b)
    }
      , E = b => {
        t && (ko.value[t] = b)
    }
      , w = b => {
        Kl.value = b
    }
      , k = b => {
        zl.value = b
    }
      , O = b => {
        bi.value = b
    }
      , I = b => {
        $l.value = b
    }
      , R = b => {
        wn.value = b || [];
        const v = {
            payload: b,
            expiry: Date.now() + zp
        };
        window.localStorage.setItem(es, JSON.stringify(v))
    }
      , Y = b => {
        ql.value = b
    }
      , G = b => {
        const v = kr.value.filter(L => b.findIndex(B => B.id === L.id) === -1);
        kr.value = [...v, ...b]
    }
      , X = ({cartItems: b, products: v}) => (b || wn.value).reduce( (L, B) => {
        const K = v.find(Se => Se.id === B.id)
          , Z = K?.variants.find(Se => B.variants.some(ve => Se.id === ve.id))
          , H = B?.custom_fields?.find(Se => B.custom_fields.some(ve => Se.id === ve.id && Se.value === ve.value))
          , C = L.reduce( (Se, ve) => {
            const Q = ve.variants.some(Ee => Ee.id === Z?.id)
              , ie = K?.custom_fields?.length ? ve.custom_fields?.every(Ee => oo(Ee, H)) : !0;
            return Q && ie ? Se + 1 : Se
        }
        , 0)
          , me = kr.value.find(Se => Se.id === Z?.id)?.inventory_quantity
          , ke = !Z?.manage_inventory || C < me
          , ue = K?.type.value === rt.BOOKING ? {
            ...B.variants[0].booking_event,
            time_slot: B.variants[0].booking_event.time_slot,
            date: B.variants[0].booking_event.date
        } : null;
        return K && Z && ke && H ? [...L, {
            ...K,
            custom_fields: B.custom_fields,
            variants: [{
                ...Z,
                booking_event: ue
            }]
        }] : K && Z && ke ? [...L, {
            ...K,
            variants: [{
                ...Z,
                booking_event: ue
            }]
        }] : L
    }
    , [])
      , q = async b => {
        const v = Cn(n.value);
        if (!v || !b)
            return;
        const L = b.map( ({id: B}) => B);
        try {
            const B = await Lt.getVariantsQuantity(v, L);
            G(B)
        } catch (B) {
            console.error(B)
        }
    }
    ;
    return {
        shoppingCartItems: wn,
        selectedBookingProduct: ql,
        variantsQuantity: kr,
        isShoppingCartOpen: $l,
        isCheckoutLoading: zl,
        isLoading: s,
        isLoaded: l,
        isProductPageLoaded: dh,
        isStoreTypeZyro: o,
        isEcommerceStoreCreated: i,
        quantifiedCartItemsList: p,
        canAddToCart: h,
        legacyProductPages: f,
        setIsLoading: A,
        setIsLoaded: E,
        setIsCheckoutLoading: k,
        setCategories: O,
        setShoppingCartOpen: I,
        setShoppingCartItems: R,
        setSelectedBookingProduct: Y,
        setVariantsQuantity: G,
        fetchCartProducts: async () => {
            const b = Cn(n.value);
            if (!b)
                return;
            const v = await ch();
            R(v);
            const L = v.map( ({id: K}) => String(K))
              , B = [...new Set(L)];
            if (!B.length) {
                l.value || E(!0);
                return
            }
            try {
                const K = await Lt.getStoreProductsByIds(b, B);
                await q(K);
                const Z = X({
                    cartItems: v,
                    products: K
                });
                R(Z)
            } catch (K) {
                console.error(K);
                return
            } finally {
                A(!1),
                E(!0)
            }
        }
        ,
        updateVariantsQuantity: q,
        refreshCartItems: X,
        fetchCategories: async (b, v) => {
            if (!v || bi.value.length)
                return [];
            try {
                return await Lt.getCategories(b)
            } catch (L) {
                return console.error(L),
                []
            }
        }
        ,
        categories: bi,
        setIsCategoriesLoaded: w,
        isCategoriesLoaded: Kl,
        shoppingCartItemCount: g,
        getProductsByIds: async b => {
            const v = Cn(n.value);
            if (!v)
                return [];
            try {
                return await Lt.getStoreProductsByIds(v, b)
            } catch (L) {
                return console.error(L),
                []
            } finally {
                A(!1),
                E(!0)
            }
        }
        ,
        dynamicPageTemplateData: _,
        ecommerceProductListBlocks: e,
        areAllEcommerceProductListBlocksLoaded: d,
        isLoadedValues: ko,
        getStoreSettingsData: async () => {
            const b = Cn(n.value);
            try {
                const v = await Lt.getStoreSettings(b);
                Ql.value = v.stripe_public_key || "",
                Xl.value = v.stripe_account_id || ""
            } catch (v) {
                console.error(v)
            }
        }
        ,
        stripePublicKey: Ql,
        stripeAccountId: Xl,
        cartData: an,
        getCartData: async () => {
            const b = xo(mi);
            if (!(Object.keys(an.value || {}).length || !b || Wn.value)) {
                Wn.value = !0;
                try {
                    an.value = await Lt.getCart(b)
                } catch (v) {
                    console.error("Error fetching cart data:", v)
                } finally {
                    Wn.value = !1
                }
            }
        }
        ,
        updateCartData: async ({regionId: b, shippingAddress: v, billingAddress: L}) => {
            try {
                an.value = await Lt.updateCart(an.value.id, {
                    shippingAddress: v,
                    billingAddress: L,
                    regionId: b
                })
            } catch (B) {
                console.error("Error fetching cart data:", B)
            }
        }
        ,
        setCartData: b => {
            an.value = b
        }
        ,
        createCart: async b => {
            const v = Cn(n.value)
              , L = xo(mi);
            if (!v || Wn.value || L?.length)
                return;
            Wn.value = !0;
            const B = Au(b)
              , K = Mu(B);
            try {
                an.value = await Lt.createCart({
                    storeId: v,
                    items: K,
                    successUrl: qo(b),
                    cancelUrl: `${window.location.origin}${window.location.pathname}`,
                    locale: r.value?.lang || "en"
                }),
                $i(mi, an.value.id, 30)
            } catch (Z) {
                console.error(Z)
            } finally {
                Wn.value = !1
            }
        }
        ,
        getStoreShippingRegions: async () => {
            const b = Cn(n.value);
            if (!(!b || _i.value?.length || wi.value)) {
                wi.value = !0;
                try {
                    _i.value = await Lt.getStoreRegions(b)
                } catch (v) {
                    console.error(v)
                } finally {
                    wi.value = !1
                }
            }
        }
        ,
        regions: _i
    }
}
  , gh = re({
    __name: "GridEcommerceButtonProviderUser",
    props: {
        data: {},
        isCartVisible: {
            type: Boolean
        },
        mobileElementWidth: {},
        mobileElementHeight: {},
        isInPreviewMode: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {getButtonHref: e, ecommerceStoreId: r} = _t()
          , {canAddToCart: o, isShoppingCartOpen: i, shoppingCartItems: s, setShoppingCartOpen: l, setShoppingCartItems: d, setSelectedBookingProduct: p, updateVariantsQuantity: g} = Ea()
          , {initiateCheckout: h} = go()
          , {openEcommerceModal: f} = Pa()
          , {content: _, type: A, fontSizeMobile: E, fontSizeDesktop: w, fontFamily: k, fontWeight: O, borderRadius: I, backgroundColor: R, fontColor: Y, borderColor: G, borderWidth: X, backgroundColorHover: q, fontColorHover: D, borderColorHover: j} = ro(a, {
            href: u( () => e({
                isFormButton: a.data.settings?.isFormButton,
                linkedPageId: a.data.linkedPageId,
                linkType: a.data.linkType,
                href: a.data.href
            }))
        })
          , {productId: z, productVariantId: ee} = lh(a)
          , F = T({})
          , S = T(!1)
          , N = u( () => !o(F.value, ee.value))
          , M = () => {
            i.value || l(!0)
        }
          , W = async () => {
            if (F.value?.type?.value === rt.BOOKING) {
                p(F.value),
                f("EcommerceBookingEventSelect");
                return
            }
            if (ir() || a.isInPreviewMode) {
                f("EcommerceMessageButtonDisabled");
                return
            }
            const v = F.value?.variants.find(B => B.id === ee.value)
              , L = {
                ...F.value,
                variants: [v]
            };
            a.isCartVisible ? (d([...s.value, L]),
            M()) : (S.value = !0,
            await h([L]).then( () => {
                S.value = !1
            }
            ))
        }
        ;
        xe(async () => {
            z.value !== -1 && (F.value = await Lt.getProductByIdOrSlug({
                storeId: r.value,
                productId: z.value
            }),
            g([F.value]))
        }
        );
        const b = {
            props: a,
            getButtonHref: e,
            ecommerceStoreId: r,
            canAddToCart: o,
            isShoppingCartOpen: i,
            shoppingCartItems: s,
            setShoppingCartOpen: l,
            setShoppingCartItems: d,
            setSelectedBookingProduct: p,
            updateVariantsQuantity: g,
            initiateCheckout: h,
            openEcommerceModal: f,
            content: _,
            type: A,
            fontSizeMobile: E,
            fontSizeDesktop: w,
            fontFamily: k,
            fontWeight: O,
            borderRadius: I,
            backgroundColor: R,
            fontColor: Y,
            borderColor: G,
            borderWidth: X,
            backgroundColorHover: q,
            fontColorHover: D,
            borderColorHover: j,
            productId: z,
            productVariantId: ee,
            product: F,
            isLoading: S,
            isAddToCartDisabled: N,
            manageCartOpenState: M,
            handleClick: W,
            GridButton: Un
        };
        return Object.defineProperty(b, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        b
    }
});
function ph(t, n, a, e, r, o) {
    const i = st("qa");
    return le((m(),
    $(e.GridButton, {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight,
        onClick: e.handleClick
    }, null, 8, ["content", "type", "is-disabled", "is-loading", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-radius", "border-width", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])), [[i, "button-ecommerce-checkout"]])
}
const vh = oe(gh, [["render", ph]])
  , hh = re({
    __name: "GridEmbed",
    props: {
        srcdoc: {
            default: ""
        },
        shouldRender: {
            type: Boolean,
            default: !1
        },
        isSandBoxed: {
            type: Boolean
        },
        id: {}
    },
    emits: ["iframe-height-updated"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(p => ({
            "235e916e": s.value
        }));
        const e = t
          , r = a
          , o = T()
          , i = T(0)
          , s = u( () => i.value ? `${i.value}px` : "auto")
          , l = p => {
            p.data.action === "iframeHeightUpdated" && e.id === p.data.id && i.value !== p.data.height && (i.value = p.data.height,
            r("iframe-height-updated", i.value))
        }
        ;
        xe( () => {
            window.addEventListener("message", l)
        }
        ),
        Kd( () => {
            window.removeEventListener("message", l)
        }
        );
        const d = {
            props: e,
            emit: r,
            gridEmbedIframeRef: o,
            height: i,
            heightStyle: s,
            heightUpdateEventListener: l
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
})
  , fh = ["id"]
  , yh = ["srcdoc"];
function bh(t, n, a, e, r, o) {
    const i = st("qa");
    return le((m(),
    y("div", {
        id: a.id,
        class: "grid-embed"
    }, [a.shouldRender ? le((m(),
    y("iframe", et({
        key: 0,
        ref: "gridEmbedIframeRef",
        class: "grid-embed__iframe",
        srcdoc: a.srcdoc,
        title: "custom code element"
    }, {
        ...a.isSandBoxed && {
            sandbox: "allow-scripts"
        }
    }), null, 16, yh)), [[i, "builder-gridelement-gridembed-iframe"]]) : x("", !0)], 8, fh)), [[i, "builder-gridelement-gridembed"]])
}
const _h = oe(hh, [["render", bh], ["__scopeId", "data-v-0b938be5"]])
  , wh = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`
  , kh = t => `
<script>
	const heightObserver = new ResizeObserver(([{ contentRect }]) => {
		window.parent.postMessage({ action: 'iframeHeightUpdated', height: contentRect.height, id: '${t}' }, '*');
	});

	heightObserver.observe(document.documentElement);
<\/script>
`
  , Sh = (t, n) => {
    const a = document.createElement("div");
    a.innerHTML = t;
    const e = [...a.children].reduce( (r, o) => o.tagName === "STYLE" ? {
        ...r,
        styles: `${r.styles} ${o.outerHTML}`
    } : o.tagName === "SCRIPT" ? {
        ...r,
        scripts: `${r.scripts} ${o.outerHTML}`
    } : {
        ...r,
        html: `${r.html} ${o.outerHTML}`
    }, {
        styles: wh,
        scripts: kh(n),
        html: ""
    });
    return `<!DOCTYPE html>
	<head>${e.styles}</head>
	<body>${e.html}${e.scripts}</body>
</html>`
}
  , Ch = "500px"
  , Ou = (t, n=Ch) => {
    const a = T(!1)
      , e = T(null);
    try {
        xe( () => {
            e.value = new IntersectionObserver( ([{isIntersecting: o}]) => {
                o && (a.value = !0,
                e.value?.disconnect())
            }
            ,{
                threshold: 0,
                rootMargin: n
            })
        }
        );
        const r = _s( () => {
            if (t.value && e.value) {
                const o = t.value.$el ?? t.value;
                e.value.observe(o),
                r()
            }
        }
        );
        Zt( () => e.value?.disconnect())
    } catch (r) {
        console.error(r)
    }
    return {
        isObserved: a
    }
}
  , Th = re({
    __name: "GridEmbedProviderUser",
    props: {
        data: {},
        id: {},
        isInPreviewMode: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = T(null)
          , {isObserved: r} = Ou(e)
          , o = T();
        xe( () => {
            o.value = Sh(a.data.content ?? "", a.id)
        }
        );
        const i = {
            props: a,
            gridEmbedRef: e,
            isObserved: r,
            srcdoc: o,
            GridEmbed: _h
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
});
function Ih(t, n, a, e, r, o) {
    return m(),
    $(e.GridEmbed, {
        id: a.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        "is-sand-boxed": a.isInPreviewMode,
        height: a.data.settings?.styles.height,
        "height-mobile": a.data.settings?.styles.heightMobile
    }, null, 8, ["id", "should-render", "srcdoc", "is-sand-boxed", "height", "height-mobile"])
}
const Ph = oe(Th, [["render", Ih]])
  , Eh = /^[\p{L}\p{N}+._&-]{1,80}@[\p{L}\p{N}.-]{1,80}\.[A-Za-z]{1,15}$/u
  , Dh = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/
  , Ah = /^\d+$/
  , ki = ({value: t="", validation: n, validationMessages: a, name: e}) => {
    const r = [];
    return n.includes("required") && !t.replace(/ /g, "") && r.push({
        message: a.required,
        name: e
    }),
    t.replace(/ /g, "") && (n.includes("email") && !Eh.test(t) && r.push({
        message: a.email,
        name: e
    }),
    n.includes("phone") && !Dh.test(t) && r.push({
        message: a.phone,
        name: e
    })),
    r
}
  , Mh = re({
    props: {
        id: {
            type: String,
            default: null
        },
        modelValue: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        isRequired: {
            type: Boolean,
            default: !1
        },
        isRequiredAsteriskVisible: {
            type: Boolean,
            default: !0
        },
        isInteractive: {
            type: Boolean,
            default: !0
        },
        areErrorsShown: {
            type: Boolean,
            default: !1
        },
        validationErrors: {
            type: Array,
            required: !1,
            default: () => []
        },
        theme: {
            type: String,
            required: !0
        },
        tag: {
            type: String,
            default: "input",
            validator: t => ["textarea", "input"].includes(t)
        }
    },
    emits: ["update:model-value"],
    data() {
        return {
            gridInputValue: ""
        }
    },
    computed: {
        computedClasses() {
            return [{
                "input__component--error": this.validationErrors.length && this.areErrorsShown
            }, {
                "input__component--textarea": this.tag === "textarea"
            }, {
                "input__component--read-only": !this.isInteractive
            }, `input__component--${this.theme}`]
        }
    }
})
  , Oh = ["placeholder", "value", "readonly", "tabindex"]
  , xh = ["placeholder", "value", "readonly", "tabindex"]
  , Bh = {
    key: 2
};
function Lh(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["input", `input--${t.theme}`])
    }, [P("label", {
        class: J(["input__label", `input__label--${t.theme}`])
    }, te(t.label) + te(t.isRequired && t.isRequiredAsteriskVisible ? "*" : ""), 3), t.tag === "input" ? (m(),
    y("input", {
        key: 0,
        placeholder: t.placeholder,
        type: "text",
        class: J(["input__component", t.computedClasses]),
        value: t.modelValue,
        readonly: !t.isInteractive,
        tabindex: t.isInteractive ? 0 : -1,
        onInput: n[0] || (n[0] = i => t.$emit("update:model-value", i.target.value)),
        onClick: n[1] || (n[1] = Re( () => {}
        , ["prevent"])),
        onDragstart: n[2] || (n[2] = Re( () => {}
        , ["prevent"])),
        onDrag: n[3] || (n[3] = Re( () => {}
        , ["prevent"]))
    }, null, 42, Oh)) : x("", !0), t.tag === "textarea" ? (m(),
    y("textarea", {
        key: 1,
        placeholder: t.placeholder,
        type: "text",
        class: J(["input__component", t.computedClasses]),
        value: t.modelValue,
        readonly: !t.isInteractive,
        tabindex: t.isInteractive ? 0 : -1,
        onInput: n[4] || (n[4] = i => t.$emit("update:model-value", i.target.value)),
        onClick: n[5] || (n[5] = Re( () => {}
        , ["prevent"])),
        onDragstart: n[6] || (n[6] = Re( () => {}
        , ["prevent"])),
        onDrag: n[7] || (n[7] = Re( () => {}
        , ["prevent"]))
    }, null, 42, xh)) : x("", !0), t.validationErrors.length && t.areErrorsShown ? (m(),
    y("div", Bh, [(m(!0),
    y(pe, null, Me(t.validationErrors, i => (m(),
    y("p", {
        key: i,
        class: "input__error-message text-body-2"
    }, te(i), 1))), 128))])) : x("", !0)], 2)
}
const Rh = oe(Mh, [["render", Lh], ["__scopeId", "data-v-96d5b5e0"]])
  , Nh = re({
    name: "GridSelectInput",
    props: {
        name: {
            type: String,
            required: !0
        },
        id: {
            type: String,
            required: !0
        },
        tag: {
            type: String,
            required: !0
        },
        selectedOptions: {
            type: Array,
            required: !0
        },
        isInteractive: {
            type: Boolean,
            default: !0
        },
        theme: {
            type: String,
            required: !0
        },
        isSelected: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["select-option", "remove-selection", "add-selection"],
    computed: {
        labelClasses() {
            return [{
                "input__label--read-only": !this.isInteractive
            }, `select-input--${this.theme}`]
        },
        inputClasses() {
            return [{
                "input__component--read-only": !this.isInteractive
            }]
        }
    },
    methods: {
        selectOption() {
            if (!this.isInteractive)
                return;
            const t = {
                id: this.id,
                value: this.name
            };
            this.tag !== "checkbox" ? this.$emit("select-option", t) : this.isSelected ? this.$emit("remove-selection", t) : this.$emit("add-selection", t)
        }
    }
})
  , Hh = ["for"]
  , Vh = ["id", "type", "checked", "tabindex"];
function Uh(t, n, a, e, r, o) {
    return m(),
    y("label", {
        class: J(["select-input", t.labelClasses]),
        for: t.id
    }, [(m(),
    y("input", {
        id: t.id,
        key: t.isSelected,
        type: t.tag,
        class: J(["select-input__input", t.inputClasses]),
        checked: t.isSelected,
        tabindex: t.isInteractive ? 0 : -1,
        onInput: n[0] || (n[0] = Re( (...i) => t.selectOption && t.selectOption(...i), ["stop"])),
        onDragstart: n[1] || (n[1] = Re( () => {}
        , ["prevent"])),
        onDrag: n[2] || (n[2] = Re( () => {}
        , ["prevent"]))
    }, null, 42, Vh)), $e(" " + te(t.name), 1)], 10, Hh)
}
const Fh = oe(Nh, [["render", Uh], ["__scopeId", "data-v-3b89e969"]])
  , jh = re({
    name: "GridSelectInputsWrapper",
    components: {
        GridSelectInput: Fh
    },
    props: {
        label: {
            type: String,
            default: null
        },
        isRequired: {
            type: Boolean,
            default: !1
        },
        isTextArea: {
            type: Boolean,
            default: !1
        },
        isInteractive: {
            type: Boolean,
            default: !0
        },
        areErrorsShown: {
            type: Boolean,
            default: !1
        },
        validationErrors: {
            type: Array,
            required: !1,
            default: () => []
        },
        theme: {
            type: String,
            required: !0
        },
        tag: {
            type: String,
            required: !0,
            validator: t => ["radio", "checkbox"].includes(t)
        },
        options: {
            type: Array,
            required: !0
        }
    },
    emits: ["input"],
    data() {
        return {
            selectedOptions: []
        }
    },
    watch: {
        selectedOptions() {
            const t = this.selectedOptions.map( ({value: n}) => n).toString();
            this.$emit("input", t)
        }
    },
    methods: {
        isSelected(t) {
            return this.selectedOptions.some( ({id: n}) => n === t)
        },
        removeSelection(t) {
            const n = this.selectedOptions.filter(a => a.id !== t.id);
            this.selectedOptions = n
        },
        addSelection(t) {
            this.selectedOptions = [...this.selectedOptions, t]
        },
        selectOption(t) {
            this.selectedOptions = [t]
        }
    }
})
  , Gh = {
    key: 0
};
function Yh(t, n, a, e, r, o) {
    const i = mt("GridSelectInput");
    return m(),
    y("div", {
        class: J(["input", `input--${t.theme}`])
    }, [P("label", {
        class: J(["input__label input__label--read-only", [`input__label--${t.theme}`]])
    }, te(t.label) + te(t.isRequired ? "*" : ""), 3), (m(!0),
    y(pe, null, Me(t.options, s => (m(),
    y("div", {
        key: s.id,
        class: "input__options"
    }, [Le(i, {
        id: s.id,
        name: s.value,
        tag: t.tag,
        "is-selected": t.isSelected(s.id),
        theme: t.theme,
        "is-interactive": t.isInteractive,
        "selected-options": t.selectedOptions,
        onRemoveSelection: t.removeSelection,
        onAddSelection: t.addSelection,
        onSelectOption: t.selectOption
    }, null, 8, ["id", "name", "tag", "is-selected", "theme", "is-interactive", "selected-options", "onRemoveSelection", "onAddSelection", "onSelectOption"])]))), 128)), t.validationErrors.length && t.areErrorsShown ? (m(),
    y("div", Gh, [(m(!0),
    y(pe, null, Me(t.validationErrors, s => (m(),
    y("p", {
        key: s,
        class: "input__error-message text-body-2"
    }, te(s), 1))), 128))])) : x("", !0)], 2)
}
const Wh = oe(jh, [["render", Yh], ["__scopeId", "data-v-49afb3bf"]])
  , qh = {
    __name: "GridForm",
    props: {
        id: {
            type: String,
            required: !0
        },
        settings: {
            type: Object,
            required: !0
        },
        submitButtonData: {
            type: Object,
            required: !0
        },
        formId: {
            type: String,
            default: null
        },
        isError: {
            type: Boolean,
            default: !1
        },
        showSuccessMessage: {
            type: Boolean,
            default: !1
        },
        isUserSite: {
            type: Boolean,
            default: !1
        },
        theme: {
            type: String,
            validator: t => ["dark", "light"].includes(t),
            default: "light"
        },
        formJustify: {
            type: String,
            default: null
        },
        formButtonJustifySelf: {
            type: String,
            default: null
        },
        mobileFormButtonJustifySelf: {
            type: String,
            default: null
        },
        formBackgroundColor: {
            type: String,
            default: null
        },
        formBorderWidth: {
            type: String,
            default: null
        },
        formBorderColor: {
            type: String,
            default: null
        },
        formBorderRadius: {
            type: String,
            default: null
        },
        formPadding: {
            type: String,
            default: null
        },
        submitButtonBackgroundColor: {
            type: String,
            default: null
        },
        submitButtonBackgroundColorHover: {
            type: String,
            default: null
        },
        submitButtonFontColor: {
            type: String,
            default: null
        },
        submitButtonFontColorHover: {
            type: String,
            default: null
        },
        submitButtonBorderColor: {
            type: String,
            default: null
        },
        submitButtonBorderColorHover: {
            type: String,
            default: null
        },
        submitButtonFontFamily: {
            type: String,
            default: null
        },
        submitButtonFontWeight: {
            type: Number,
            default: null
        },
        submitButtonFontSizeMobile: {
            type: Number,
            default: null
        },
        submitButtonFontSizeDesktop: {
            type: Number,
            default: null
        },
        submitButtonBorderWidth: {
            type: Number,
            default: null
        },
        submitButtonBorderRadius: {
            type: Number,
            default: null
        },
        inputFillColor: {
            type: String,
            default: null
        },
        inputFillColorHover: {
            type: String,
            default: null
        },
        formFontFamily: {
            type: String,
            default: null
        },
        formFontWeight: {
            type: Number,
            default: null
        },
        labelTextColor: {
            type: String,
            default: null
        },
        labelTextSize: {
            type: Number,
            default: null
        },
        mobileLabelTextSize: {
            type: Number,
            default: null
        },
        inputTextColor: {
            type: String,
            default: null
        },
        inputTextColorHover: {
            type: String,
            default: null
        },
        inputTextSize: {
            type: Number,
            default: null
        },
        mobileInputTextSize: {
            type: Number,
            default: null
        },
        inputBorderColor: {
            type: String,
            default: null
        },
        inputBorderColorHover: {
            type: String,
            default: null
        },
        inputBorderWidth: {
            type: Number,
            default: null
        },
        inputBorderRadius: {
            type: Number,
            default: null
        },
        elementsVerticalSpacing: {
            type: Number,
            default: null
        },
        mobileElementsVerticalSpacing: {
            type: Number,
            default: null
        }
    },
    emits: ["on-submit"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = T([])
          , i = T({})
          , s = T({})
          , l = T(!1)
          , d = u( () => e.settings.schema.reduce( (E, w) => ({
            ...E,
            [w.name]: {
                validation: w.validation.flat(),
                validationMessages: w["validation-messages"]
            }
        }), {}))
          , p = u( () => {
            const E = Number.isInteger(e.elementsVerticalSpacing) ? `${e.elementsVerticalSpacing}px` : null
              , w = Number.isInteger(e.mobileElementsVerticalSpacing) ? `${e.mobileElementsVerticalSpacing}px` : null;
            return {
                "--form-flex": e.formJustify ? null : "0 1 100%",
                "--form-button-justify-self": e.formButtonJustifySelf,
                "--m-form-button-justify-self": e.mobileFormButtonJustifySelf,
                "--form-background-color": e.formBackgroundColor,
                "--form-border-width": `${e.formBorderWidth}px`,
                "--form-border-color": e.formBorderColor,
                "--form-border-radius": `${e.formBorderRadius}px`,
                "--form-padding": e.formPadding ? `${e.formPadding}px` : null,
                "--form-font-family": e.formFontFamily,
                "--form-font-weight": e.formFontWeight,
                "--input-fill-color": e.inputFillColor,
                "--input-fill-color--hover": e.inputFillColorHover || e.inputFillColor,
                "--label-text-color": e.labelTextColor,
                "--label-text-size": e.labelTextSize ? `${e.labelTextSize}px` : null,
                "--m-label-text-size": e.mobileLabelTextSize ? `${e.mobileLabelTextSize}px` : null,
                "--input-text-color": e.inputTextColor,
                "--input-text-color--hover": e.inputTextColorHover || e.inputTextColor,
                "--input-text-size": e.inputTextSize ? `${e.inputTextSize}px` : null,
                "--m-input-text-size": e.mobileInputTextSize ? `${e.mobileInputTextSize}px` : null,
                "--input-height": e.inputTextSize ? "auto" : "48px",
                "--input-border-color": e.inputBorderColor,
                "--input-border-color--hover": e.inputBorderColorHover || e.inputBorderColor,
                "--input-border-width": e.inputBorderWidth ? `${e.inputBorderWidth}px` : null,
                "--input-border-radius": e.inputBorderRadius ? `${e.inputBorderRadius}px` : null,
                "--form-elements-vertical-spacing": E,
                "--m-form-elements-vertical-spacing": w,
                "--form-spacing": "var(--formSpacing)",
                "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
                "--grid-item-inner-background": "var(--gridItemInnerBackground)"
            }
        }
        )
          , g = () => e.settings.schema.flatMap( ({name: E}) => {
            const w = ki({
                value: s.value[E]?.value,
                ...d.value[E],
                name: E
            })
              , k = w.map( ({message: O}) => O);
            return i.value = {
                ...i.value,
                [E]: k
            },
            w
        }
        )
          , h = (E, w) => {
            i.value = {
                ...i.value,
                [E]: ki({
                    value: w,
                    ...d.value[E],
                    name: E
                }).map( ({message: k}) => k)
            },
            s.value = {
                ...s.value,
                [E]: {
                    value: w,
                    type: e.settings.schema.find( ({name: k}) => k === E).validationType || "text"
                }
            }
        }
          , f = () => {
            s.value = Object.fromEntries(Object.entries(s.value).map( ([E,{value: w, type: k}]) => [E, {
                value: w.trim(),
                type: k
            }]))
        }
          , A = {
            props: e,
            emit: r,
            formInputs: o,
            validationErrors: i,
            formValues: s,
            areErrorsVisible: l,
            validationRules: d,
            formCSSVars: p,
            validateForm: g,
            updateField: h,
            trimFormValues: f,
            handleSubmit: () => {
                f();
                const E = g();
                if (l.value = E.length > 0,
                !l.value) {
                    r("on-submit", s.value);
                    return
                }
                const w = o.value.find( ({id: k}) => k === E[0].name);
                w && w.$el.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
            ,
            computed: u,
            ref: T,
            get validateInput() {
                return ki
            },
            GridButton: Un,
            GridInput: Rh,
            GridSelectInputsWrapper: Wh
        };
        return Object.defineProperty(A, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        A
    }
}
  , $h = ["id"]
  , zh = ["name"];
function Zh(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", {
        id: a.id,
        class: J(["form", {
            "form--single-field": a.settings.type === "singleField"
        }]),
        style: ze(e.formCSSVars)
    }, [P("form", {
        class: J(["form__control", {
            "form__control--invisible": a.showSuccessMessage || a.isError
        }]),
        name: a.formId,
        onSubmit: Re(e.handleSubmit, ["prevent"])
    }, [(m(!0),
    y(pe, null, Me(a.settings.schema, s => (m(),
    y(pe, {
        key: s.id
    }, [s.type === "GridInput" ? le((m(),
    $(e.GridInput, {
        key: 0,
        id: s.name,
        ref_for: !0,
        ref: "formInputs",
        theme: a.theme,
        tag: s.tag,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": e.validationRules[s.name].validation.includes("required"),
        "is-required-asterisk-visible": a.settings.schema.length > 1,
        "validation-errors": e.validationErrors[s.name],
        "are-errors-shown": e.areErrorsVisible,
        "is-interactive": a.isUserSite,
        "model-value": e.formValues[s.name]?.value,
        "onUpdate:modelValue": l => e.updateField(s.name, l)
    }, null, 8, ["id", "theme", "tag", "placeholder", "label", "is-required", "is-required-asterisk-visible", "validation-errors", "are-errors-shown", "is-interactive", "model-value", "onUpdate:modelValue"])), [[i, `form-field-${s.inputLabel}`]]) : x("", !0), s.type === "GridSelectInput" ? le((m(),
    $(e.GridSelectInputsWrapper, {
        key: 1,
        theme: a.theme,
        tag: s.tag,
        options: s.options,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": e.validationRules[s.name].validation.includes("required"),
        "validation-errors": e.validationErrors[s.name],
        "are-errors-shown": e.areErrorsVisible,
        "is-interactive": a.isUserSite,
        onInput: l => e.updateField(s.name, l)
    }, null, 8, ["theme", "tag", "options", "placeholder", "label", "is-required", "validation-errors", "are-errors-shown", "is-interactive", "onInput"])), [[i, `form-field-${s.inputLabel}`]]) : x("", !0)], 64))), 128)), le(Le(e.GridButton, {
        content: a.submitButtonData.content,
        type: a.submitButtonData.settings.type,
        "background-color": a.submitButtonBackgroundColor,
        "background-color-hover": a.submitButtonBackgroundColorHover,
        "font-color": a.submitButtonFontColor,
        "font-color-hover": a.submitButtonFontColorHover,
        "border-color": a.submitButtonBorderColor,
        "border-color-hover": a.submitButtonBorderColorHover,
        "font-family": a.submitButtonFontFamily,
        "font-weight": a.submitButtonFontWeight,
        "font-size-mobile": a.submitButtonFontSizeMobile,
        "font-size-desktop": a.submitButtonFontSizeDesktop,
        "border-width": a.submitButtonBorderWidth,
        "border-radius": a.submitButtonBorderRadius,
        class: "form__button",
        "button-type": "submit",
        "tag-name": "button"
    }, null, 8, ["content", "type", "background-color", "background-color-hover", "font-color", "font-color-hover", "border-color", "border-color-hover", "font-family", "font-weight", "font-size-mobile", "font-size-desktop", "border-width", "border-radius"]), [[i, "form-button-submit"]])], 42, zh), ne(t.$slots, "default", {}, void 0, !0)], 14, $h)
}
const Kh = oe(qh, [["render", Zh], ["__scopeId", "data-v-882afdaf"]])
  , Qh = re({
    __name: "ZyroLoader",
    props: {
        color: {
            default: "var(--color-dark)"
        },
        secondaryColor: {
            default: "transparent"
        },
        size: {
            default: "40px"
        },
        weight: {
            default: "4px"
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(e => ({
            "42b67250": e.size,
            "75767d07": e.weight,
            "1338e6f4": e.color,
            "3bb5d1de": e.secondaryColor
        }));
        const a = {};
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , Xh = {
    class: "loader"
}
  , Jh = ws('<div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div>', 5)
  , ef = [Jh];
function tf(t, n, a, e, r, o) {
    return m(),
    y("div", Xh, ef)
}
const Bs = oe(Qh, [["render", tf], ["__scopeId", "data-v-bc3d69bf"]])
  , af = "light"
  , nf = 200
  , rf = {
    SHOW_MESSAGE: "showMessage",
    LINK_TO_PAGE: "linkToPage"
}
  , of = re({
    __name: "PostSubmitElement",
    props: {
        successMessage: {
            default: ""
        },
        isError: {
            type: Boolean,
            default: !1
        },
        isLoading: {
            type: Boolean,
            default: !1
        },
        showSuccessMessage: {
            type: Boolean,
            default: !1
        },
        theme: {
            default: af
        },
        hasBorderWidth: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = T(null)
          , r = u( () => ({
            "--submit-element-border": a.hasBorderWidth ? "" : "var(--color-gray)"
        }));
        je(e, () => {
            e.value && e.value.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
        );
        const o = {
            props: a,
            postSubmitRef: e,
            submitElementCSSVars: r,
            ZyroLoader: Bs
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , xu = t => (sa("data-v-f643cf2b"),
t = t(),
la(),
t)
  , sf = {
    key: 1,
    class: "success-message__heading"
}
  , lf = {
    key: 0
}
  , cf = {
    key: 2
}
  , uf = xu( () => P("div", {
    class: "submit-message__heading"
}, " Something went wrong ", -1))
  , df = xu( () => P("div", null, " Please try again later ", -1))
  , mf = [uf, df];
function gf(t, n, a, e, r, o) {
    return a.isLoading || a.showSuccessMessage || a.isError ? (m(),
    y("div", {
        key: 0,
        ref: "postSubmitRef",
        class: J(["submit-message", `submit-message--${a.theme}`]),
        style: ze(e.submitElementCSSVars)
    }, [a.isLoading ? (m(),
    $(e.ZyroLoader, {
        key: 0,
        color: "var(--grid-button-primary-background-color)"
    })) : a.showSuccessMessage && !a.isError ? (m(),
    y("div", sf, [$e(te(a.successMessage) + " ", 1), a.isInPreviewMode ? (m(),
    y("div", lf, " Note: Forms submitted in preview mode won't appear in Form submissions. ")) : x("", !0)])) : x("", !0), a.isError && !a.isLoading ? (m(),
    y("div", cf, mf)) : x("", !0)], 6)) : x("", !0)
}
const pf = oe(of, [["render", gf], ["__scopeId", "data-v-f643cf2b"]])
  , vf = re({
    components: {
        GridForm: Kh,
        PostSubmitElement: pf
    },
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup() {
        const {meta: t, forms: n, getPagePathFromId: a, hasGoogleAdsApp: e} = _t();
        return {
            meta: t,
            forms: n,
            getPagePathFromId: a,
            hasGoogleAdsApp: e
        }
    },
    data() {
        return {
            isLoading: !1,
            showSuccessMessage: !1,
            isError: !1
        }
    },
    methods: {
        async saveData({token: t, model: n, elementId: a}) {
            await fetch(`https://builder-backend.hostinger.com/u1/data/v3/post/${t}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                credentials: "omit",
                mode: "cors",
                body: JSON.stringify({
                    elementId: a,
                    formData: n
                })
            }).then(e => {
                if (!e.ok)
                    throw new Error(e.statusText);
                return e
            }
            )
        },
        async onSubmit(t) {
            if (this.meta.isDemoTemplate || this.isInPreviewMode) {
                this.showSuccessMessage = !0;
                return
            }
            this.isLoading = !0;
            let n = !1;
            setTimeout( () => {
                n = !0,
                this.isLoading = !(this.showSuccessMessage || this.isError)
            }
            , nf);
            try {
                await this.saveData({
                    token: this.forms[this.data.formId].token,
                    model: Object.fromEntries(Object.entries(t).map( ([o,i]) => [o, i])),
                    elementId: this.data.elementId
                }),
                this.hasGoogleAdsApp && ei("contact"),
                this.showSuccessMessage = !0;
                const {submitAction: a} = this.data.settings;
                if (!a || a.id === rf.SHOW_MESSAGE)
                    return;
                const {pageId: e} = this.data.settings.submitRedirectPage
                  , r = this.getPagePathFromId({
                    pageId: e
                });
                this.$router.push({
                    path: r
                })
            } catch (a) {
                console.error(a),
                this.isError = !0
            } finally {
                n && (this.isLoading = !1)
            }
        }
    }
});
function hf(t, n, a, e, r, o) {
    const i = mt("PostSubmitElement")
      , s = mt("GridForm");
    return m(),
    $(s, {
        id: t.id,
        "form-id": t.data.formId,
        settings: t.data.settings,
        "submit-button-data": t.data.submitButtonData,
        "submit-button-background-color": t.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover": t.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": t.data.submitButtonFontColor,
        "submit-button-font-color-hover": t.data.submitButtonFontColorHover,
        "submit-button-border-color": t.data.submitButtonBorderColor,
        "submit-button-border-color-hover": t.data.submitButtonBorderColorHover,
        "submit-button-font-family": t.data.submitButtonFontFamily,
        "submit-button-font-weight": t.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": t.data.mobile?.submitButtonFontSize,
        "submit-button-font-size-desktop": t.data.desktop?.submitButtonFontSize,
        "submit-button-border-width": t.data.submitButtonBorderWidth,
        "submit-button-border-radius": t.data.submitButtonBorderRadius,
        "show-success-message": t.showSuccessMessage,
        "is-error": t.isError,
        "is-user-site": !0,
        theme: t.data.settings.theme,
        "form-justify": t.data.settings.styles.justify,
        "form-button-justify-self": t.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self": t.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": t.data.formBackgroundColor,
        "form-border-width": t.data.formBorderWidth,
        "form-border-color": t.data.formBorderColor,
        "form-border-radius": t.data.formBorderRadius,
        "form-padding": t.data.formPadding,
        "input-fill-color": t.data.inputFillColor,
        "input-fill-color-hover": t.data.inputFillColorHover,
        "form-font-family": t.data.formFontFamily,
        "form-font-weight": t.data.formFontWeight,
        "label-text-color": t.data.labelTextColor,
        "label-text-size": t.data.desktop?.labelTextSize,
        "mobile-label-text-size": t.data.mobile?.labelTextSize,
        "input-text-color": t.data.inputTextColor,
        "input-text-color-hover": t.data.inputTextColorHover,
        "input-text-size": t.data.desktop?.inputTextSize,
        "mobile-input-text-size": t.data.mobile?.inputTextSize,
        "input-border-color": t.data.inputBorderColor,
        "input-border-color-hover": t.data.inputBorderColorHover,
        "input-border-width": t.data.inputBorderWidth,
        "input-border-radius": t.data.inputBorderRadius,
        "elements-vertical-spacing": t.data.desktop?.formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing": t.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: t.onSubmit
    }, {
        default: ye( () => [Le(i, {
            "show-success-message": t.showSuccessMessage,
            "success-message": t.data.settings.successMessage,
            "is-loading": t.isLoading,
            "is-error": t.isError,
            theme: t.data.settings.theme,
            "has-border-width": t.data.formBorderWidth !== 0,
            "is-in-preview-mode": t.isInPreviewMode
        }, null, 8, ["show-success-message", "success-message", "is-loading", "is-error", "theme", "has-border-width", "is-in-preview-mode"])]),
        _: 1
    }, 8, ["id", "form-id", "settings", "submit-button-data", "submit-button-background-color", "submit-button-background-color-hover", "submit-button-font-color", "submit-button-font-color-hover", "submit-button-border-color", "submit-button-border-color-hover", "submit-button-font-family", "submit-button-font-weight", "submit-button-font-size-mobile", "submit-button-font-size-desktop", "submit-button-border-width", "submit-button-border-radius", "show-success-message", "is-error", "theme", "form-justify", "form-button-justify-self", "mobile-form-button-justify-self", "form-background-color", "form-border-width", "form-border-color", "form-border-radius", "form-padding", "input-fill-color", "input-fill-color-hover", "form-font-family", "form-font-weight", "label-text-color", "label-text-size", "mobile-label-text-size", "input-text-color", "input-text-color-hover", "input-text-size", "mobile-input-text-size", "input-border-color", "input-border-color-hover", "input-border-width", "input-border-radius", "elements-vertical-spacing", "mobile-elements-vertical-spacing", "onOnSubmit"])
}
const ff = oe(vf, [["render", hf]])
  , yf = re({
    __name: "GridImage",
    props: {
        src: {},
        alt: {},
        href: {
            default: null
        },
        preventDrag: {
            type: Boolean
        },
        sizes: {},
        srcset: {},
        tagName: {
            default: sm
        },
        target: {
            default: null
        },
        rel: {
            default: null
        },
        isLightboxEnabled: {
            type: Boolean
        },
        isUnstyled: {
            type: Boolean
        },
        resetMobilePosition: {
            type: Boolean,
            default: !0
        },
        elementWidth: {
            default: 0
        },
        elementHeight: {
            default: 0
        },
        mobileBorderRadius: {
            default: 0
        },
        desktopBorderRadius: {
            default: 0
        },
        cropCssVars: {
            default: null
        },
        isOverflowVisible: {
            type: Boolean
        },
        isEager: {
            type: Boolean
        },
        isMobileImage: {
            type: Boolean
        },
        isInBuilder: {
            type: Boolean
        },
        isSvg: {
            type: Boolean
        },
        shapeMaskSource: {
            default: null
        },
        isInPreviewMode: {
            type: Boolean
        },
        overlayOpacity: {
            default: 0
        }
    },
    emits: ["image-load", "image-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(O => ({
            e850387c: _.value,
            "02ba89d0": E.value,
            "5a5dc38a": f.value,
            "27d941ce": g.value,
            "1214e07c": h.value,
            f5ac7700: A.value,
            "96f62728": l.value,
            "57d4fd89": d.value
        }));
        const e = t
          , r = a
          , o = T(null)
          , i = T(!1)
          , s = u( () => e.elementHeight !== null && e.elementHeight > 0 && e.isMobileImage)
          , l = u( () => e.isInBuilder ? "100%" : e.isInPreviewMode ? `${e.elementWidth}px` : s.value ? `${e.elementWidth * 100 / Fa}vw` : "100%")
          , d = u( () => e.isInBuilder ? "auto" : e.isInPreviewMode ? `${e.elementHeight}px` : s.value ? `${e.elementHeight * 100 / Fa}vw` : "auto")
          , p = u( () => ({
            "--overflow": e.isOverflowVisible ? "visible" : null,
            ...e.cropCssVars
        }))
          , g = u( () => e.isInBuilder ? "100%" : `${e.elementWidth * 100 / Ua}vw`)
          , h = u( () => e.isInBuilder ? "100%" : `${e.elementHeight * 100 / Ua}vw`)
          , f = u( () => e.overlayOpacity ? `rgba(0, 0, 0, ${e.overlayOpacity / 100})` : null)
          , _ = u( () => e.shapeMaskSource ? null : e.desktopBorderRadius ? e.desktopBorderRadius : e.mobileBorderRadius ? e.mobileBorderRadius : null)
          , A = u( () => e.shapeMaskSource ? null : e.mobileBorderRadius ? e.mobileBorderRadius : e.desktopBorderRadius ? e.desktopBorderRadius : null)
          , E = u( () => e.shapeMaskSource && `url('${e.shapeMaskSource}')`)
          , w = () => {
            r("image-load"),
            i.value = !0
        }
        ;
        xe( () => {
            if (o.value) {
                if (o.value?.complete) {
                    w();
                    return
                }
                o.value.addEventListener("load", w)
            }
        }
        ),
        uo( () => {
            o.value && o.value.removeEventListener("load", w)
        }
        );
        const k = {
            props: e,
            emit: r,
            imageRef: o,
            isLoaded: i,
            isMobileLayoutImage: s,
            mobileWidthCSSVar: l,
            mobileHeightCSSVar: d,
            imageCSSVars: p,
            smallDesktopWidthCSSVar: g,
            smallDesktopHeightCSSVar: h,
            overlayOpacityCSSVar: f,
            desktopBorderRadiusCSSVar: _,
            mobileBorderRadiusCSSVar: A,
            shapeMaskSourceCssVar: E,
            handleImageLoadEvent: w,
            get ANCHOR_TAG() {
                return lm
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE() {
                return Qa
            },
            get DATA_ATTRIBUTE_SELECTOR() {
                return cm
            },
            get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
                return um
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
                return ks
            }
        };
        return Object.defineProperty(k, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        k
    }
})
  , bf = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function _f(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    $(mn(a.tagName), dt({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: e.imageCSSVars,
        class: ["image", {
            "image--zoom": a.isLightboxEnabled,
            "image--grid": !a.isUnstyled,
            "image--unstyled": a.isUnstyled,
            "image--link": a.tagName === e.ANCHOR_TAG,
            loaded: e.isLoaded
        }],
        [e.DATA_ATTRIBUTE_SELECTOR || ""]: e.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = s => t.$emit("image-click", s))
    }), {
        default: ye( () => [le(P("img", et({
            ref: "imageRef",
            alt: a.alt,
            src: a.src,
            srcset: a.srcset,
            sizes: a.sizes,
            height: a.elementHeight,
            width: a.elementWidth,
            loading: a.isEager ? "eager" : "lazy",
            class: {
                "image__image--unstyled": a.isUnstyled,
                "image__image--cropped": !!a.cropCssVars,
                image__image: !a.isUnstyled,
                "image__image--reset-m-position": a.resetMobilePosition,
                "image__image--svg": a.isSvg
            }
        }, xr({
            drag: a.preventDrag ? s => s.preventDefault() : () => null,
            dragstart: a.preventDrag ? s => s.preventDefault() : () => null
        }, !0)), null, 16, bf), [[i, "builder-gridelement-gridimage"]]), ne(t.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 16, ["href", "target", "rel", "title", "style", "class"])
}
const Bu = oe(yf, [["render", _f], ["__scopeId", "data-v-585f264b"]])
  , wf = re({
    __name: "GridGalleryList",
    props: {
        images: {},
        isMasonryLayout: {
            type: Boolean
        },
        loadImages: {
            type: Boolean,
            default: !0
        },
        isLightboxEnabled: {
            type: Boolean
        },
        columnCount: {},
        mobileColumnCount: {},
        columnGap: {},
        mobileColumnGap: {}
    },
    emits: ["image-click", "image-load"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(l => ({
            94303370: e.columnCount,
            "367c8df5": o.value,
            "22c915f4": e.mobileColumnCount,
            "319e939a": i.value
        }));
        const e = t
          , r = a
          , o = u( () => `${e.columnGap}px`)
          , i = u( () => `${e.mobileColumnGap}px`)
          , s = {
            props: e,
            emit: r,
            columnGapPx: o,
            mobileColumnGapPx: i,
            GridImage: Bu
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function kf(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J({
            "gallery-list-masonry": e.props.isMasonryLayout,
            "gallery-list-grid": !e.props.isMasonryLayout
        })
    }, [(m(!0),
    y(pe, null, Me(a.images, (i, s) => (m(),
    y("div", {
        key: `${s}${i.src}`,
        class: J({
            "gallery-list-masonry__image-wrapper": e.props.isMasonryLayout,
            "gallery-list-grid__image-wrapper": !e.props.isMasonryLayout
        })
    }, [(m(),
    $(e.GridImage, {
        key: `${s}${i.src}`,
        class: J({
            "gallery-list-masonry__image": e.props.isMasonryLayout,
            "gallery-list-grid__image": !e.props.isMasonryLayout
        }),
        alt: i.alt,
        src: e.props.loadImages ? i.src : "",
        srcset: i.srcset,
        sizes: i.sizes,
        "element-width": i.width,
        "element-height": i.height,
        "is-lightbox-enabled": e.props.isLightboxEnabled,
        "reset-mobile-position": !1,
        "prevent-drag": "",
        "is-eager": "",
        "is-unstyled": e.props.isMasonryLayout,
        onImageClick: l => e.emit("image-click", a.images, s),
        onImageLoad: n[0] || (n[0] = l => e.emit("image-load"))
    }, null, 8, ["class", "alt", "src", "srcset", "sizes", "element-width", "element-height", "is-lightbox-enabled", "is-unstyled", "onImageClick"]))], 2))), 128))], 2)
}
const Sf = oe(wf, [["render", kf]])
  , Cf = re({
    __name: "GridGallery",
    props: {
        columnCount: {},
        columnGap: {},
        mobileColumnCount: {},
        mobileColumnGap: {},
        gridImages: {},
        isLightboxEnabled: {
            type: Boolean,
            default: !1
        },
        isMasonryLayout: {
            type: Boolean,
            default: !1
        },
        loadImages: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["image-click", "image-load"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = {
            "image-click": (p, g) => r("image-click", p, g),
            "image-load": () => r("image-load")
        }
          , i = p => e.gridImages.reduce( (g, h, f) => g.map( (_, A) => A === f % p ? [..._, h] : _), Array(p).fill([])).flat()
          , s = u( () => i(e.columnCount))
          , l = u( () => i(e.mobileColumnCount))
          , d = {
            props: e,
            emit: r,
            galleryListListeners: o,
            getMasonryImages: i,
            masonryImages: s,
            masonryImagesMobile: l,
            GalleryList: Sf
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
})
  , Tf = {
    class: "grid-gallery"
};
function If(t, n, a, e, r, o) {
    return m(),
    y("div", Tf, [a.isMasonryLayout ? (m(),
    y(pe, {
        key: 0
    }, [Le(e.GalleryList, et({
        class: "grid-gallery-masonry--desktop"
    }, {
        images: e.masonryImages,
        ...e.props
    }, xr(e.galleryListListeners)), null, 16), Le(e.GalleryList, et({
        class: "grid-gallery-masonry--mobile"
    }, {
        images: e.masonryImagesMobile,
        ...e.props
    }, xr(e.galleryListListeners)), null, 16)], 64)) : (m(),
    $(e.GalleryList, et({
        key: 1
    }, {
        images: e.props.gridImages,
        ...e.props
    }, xr(e.galleryListListeners)), null, 16))])
}
const Pf = oe(Cf, [["render", If], ["__scopeId", "data-v-6ebbc3c6"]])
  , Ef = t => {
    const n = u( () => t.data.images.length > 0)
      , a = u( () => Number.parseInt(t.data.desktop.columnCount || 1, 10))
      , e = u( () => Number.parseInt(t.data.desktop.columnGap || 0, 10))
      , r = u( () => Number.parseInt(t.data.mobile.columnCount || 1, 10))
      , o = u( () => Number.parseInt(t.data.mobile.columnGap || 0, 10))
      , i = u( () => t.data.settings.layout === "masonry");
    return {
        hasGridImages: n,
        columnCount: a,
        columnGap: e,
        isMasonryLayout: i,
        mobileColumnCount: r,
        mobileColumnGap: o
    }
}
  , Tt = {
    Backspace: "Backspace",
    ShiftLeft: "ShiftLeft",
    Escape: "Escape",
    Space: "Space",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Delete: "Delete",
    KeyX: "KeyX",
    KeyC: "KeyC",
    KeyD: "KeyD",
    KeyY: "KeyY",
    KeyZ: "KeyZ",
    OSLeft: "OSLeft",
    NumLockSlash: "NumLockSlash",
    KeySlash: "Slash",
    Enter: "Enter",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight"
}
  , Df = {
    8: Tt.Backspace,
    16: Tt.ShiftLeft,
    27: Tt.Escape,
    32: Tt.Space,
    37: Tt.ArrowLeft,
    38: Tt.ArrowUp,
    39: Tt.ArrowRight,
    40: Tt.ArrowDown,
    46: Tt.Delete,
    67: Tt.KeyC,
    68: Tt.KeyD,
    88: Tt.KeyX,
    89: Tt.KeyY,
    90: Tt.KeyZ,
    91: Tt.OSLeft,
    111: Tt.NumLockSlash,
    191: Tt.KeySlash,
    219: Tt.BracketLeft,
    221: Tt.BracketRight
}
  , Si = t => {
    let n;
    return t ? t.code !== void 0 ? n = t.code === "MetaLeft" ? "OSLeft" : t.code : t.keyCode !== void 0 && (n = Df[t.keyCode]) : n = void 0,
    n
}
  , kn = T([])
  , Sn = T(null)
  , ur = () => {
    const t = lu()
      , n = u( () => t?.name === au)
      , a = u( () => kn.value.length > 0)
      , e = u( () => kn.value.length > 1)
      , r = u( () => kn.value.length - 1)
      , o = u( () => Sn.value === kn.value.length - 1)
      , i = u( () => Sn.value === 0)
      , s = u( () => kn.value[Sn.value])
      , l = E => {
        Sn.value = E
    }
      , d = E => {
        kn.value = Array.isArray(E) ? E : [E]
    }
      , p = () => i.value ? l(r.value) : l(Sn.value - 1)
      , g = () => o.value ? l(0) : l(Sn.value + 1)
      , h = () => {
        d([]),
        l(null)
    }
      , f = () => {
        e.value || h()
    }
      , _ = (E, w=0) => {
        n.value || (d(E),
        l(w))
    }
      , A = E => {
        Si(E) === Tt.ArrowRight && g(),
        Si(E) === Tt.ArrowLeft && p(),
        Si(E) === Tt.Escape && h()
    }
    ;
    return {
        lightboxImages: u( () => kn.value),
        currentLightboxImageIndex: u( () => Sn.value),
        currentLightboxImage: s,
        lastImageIndex: r,
        isFirstImage: i,
        isLastImage: o,
        isLightboxOpen: a,
        isImageGalleryMode: e,
        setLightboxImages: d,
        setCurrentLightboxImageIndex: l,
        goToNextImage: g,
        goToPreviousImage: p,
        handleLightboxNav: A,
        closeLightbox: h,
        addImagesToLightbox: _,
        onLightboxClickOutside: f
    }
}
  , Af = "lightbox"
  , Mf = re({
    name: "GridGalleryProviderUser",
    components: {
        GridGallery: Pf
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        mobileBlockPadding: {
            type: String,
            default: "0px"
        },
        elementWidth: {
            type: Number,
            default: null
        },
        elementHeight: {
            type: Number,
            default: null
        }
    },
    emits: ["image-load"],
    setup(t) {
        const {siteId: n} = _t()
          , {columnCount: a, columnGap: e, isMasonryLayout: r, mobileColumnCount: o, mobileColumnGap: i} = Ef(t)
          , {addImagesToLightbox: s} = ur()
          , l = u( () => {
            const {right: k} = ao(t.mobileBlockPadding ?? "");
            return Number.parseInt(k, 10) || 0
        }
        )
          , d = T(!1)
          , p = () => {
            d.value = window.matchMedia(`(max-width: ${Ur}px)`).matches
        }
        ;
        xe( () => {
            p(),
            window.addEventListener("resize", p)
        }
        ),
        uo( () => {
            window.removeEventListener("resize", p)
        }
        );
        const g = u( () => d.value ? o.value : a.value)
          , h = u( () => Math.ceil((e.value + t.elementWidth) / g.value) - e.value)
          , f = u( () => !r.value && h.value)
          , _ = u( () => [`(min-width: ${Ur}px) ${h.value}px`, `${100 / g.value}vw`].join(", "))
          , A = u( () => t.data.images.map(k => {
            const O = u( () => It(k.origin, k.path, n.value, {
                width: h.value,
                height: f.value
            }))
              , I = u( () => mv(k.origin, k.path, n.value, {
                width: h.value,
                height: f.value,
                columnCount: g.value,
                columnGap: e.value,
                mobilePadding: l.value,
                isMasonryLayout: r.value
            }));
            return {
                ...k,
                src: O.value,
                srcset: I.value,
                sizes: _.value,
                width: h.value,
                height: f.value
            }
        }
        ))
          , E = u( () => t.data.settings.imageClickAction === Af);
        return {
            gridImages: A,
            isLightboxEnabled: E,
            handleGalleryImageClick: (k, O) => {
                if (E.value) {
                    const I = k.map(R => ({
                        alt: R.alt,
                        src: Tu(R.origin, R.path, n.value)
                    }));
                    s(I, O)
                }
            }
            ,
            columnCount: a,
            columnGap: e,
            isMasonryLayout: r,
            mobileColumnCount: o,
            mobileColumnGap: i
        }
    }
});
function Of(t, n, a, e, r, o) {
    const i = mt("GridGallery");
    return m(),
    $(i, {
        "grid-images": t.gridImages,
        "is-lightbox-enabled": t.isLightboxEnabled,
        "column-count": t.columnCount,
        "column-gap": t.columnGap,
        "mobile-column-count": t.mobileColumnCount,
        "mobile-column-gap": t.mobileColumnGap,
        "is-masonry-layout": t.isMasonryLayout,
        onImageClick: t.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = s => t.$emit("image-load"))
    }, null, 8, ["grid-images", "is-lightbox-enabled", "column-count", "column-gap", "mobile-column-count", "mobile-column-gap", "is-masonry-layout", "onImageClick"])
}
const xf = oe(Mf, [["render", Of]])
  , Bf = (t, n, a) => Math.min(Math.max(t, n), a)
  , Jl = 1920
  , ec = ({isAspectRatioBiggerThanContainer: t, scale: n, containerHeight: a, containerWidth: e, naturalImageHeight: r, naturalImageWidth: o}) => {
    if (t) {
        const i = a / r;
        return Math.round(o * i * n)
    }
    return Math.round(e * n)
}
  , tc = ({isAspectRatioBiggerThanContainer: t, scale: n, containerHeight: a, containerWidth: e, naturalImageHeight: r, naturalImageWidth: o}) => {
    if (!t) {
        const i = e / o;
        return Math.round(r * i * n)
    }
    return Math.round(a * n)
}
  , So = ({offsetInPx: t, imageSize: n, containerSize: a, offsetInPercent: e}) => {
    if (!t)
        return e;
    const r = (n - a) / 100;
    return Bf(e + t / r, 0, 100)
}
  , Co = ({imageSize: t, containerSize: n, offset: a}) => (n - t) * (a / 100)
  , ac = ({prefix: t, left: n, top: a, scale: e, isAspectRatioLargerThanContainer: r}) => ({
    [`--${t}-left`]: `${n}px`,
    [`--${t}-top`]: `${a}px`,
    [`--${t}-scale`]: e,
    [`--${t}-width`]: r ? "auto" : "100%",
    [`--${t}-height`]: r ? "100%" : "auto"
})
  , nc = ({left: t, top: n, imageWidth: a, imageHeight: e, containerWidth: r, containerHeight: o}) => ({
    left: Math.round(Math.abs(t)),
    top: Math.round(Math.abs(n)),
    right: Math.round(a - r - Math.abs(t)),
    bottom: Math.round(e - o - Math.abs(n)),
    imageWidth: a,
    imageHeight: e
})
  , Lf = (t, n) => {
    if (t > Jl) {
        const a = Jl / t;
        return {
            width: Math.round(t * a),
            height: Math.round(n * a)
        }
    }
    return {
        width: t,
        height: n
    }
}
  , rc = (t, {dragDeltaYPosition: n, dragDeltaXPosition: a, href: e}={}) => {
    const r = u( () => Lf(t.data.fullResolutionWidth, t.data.fullResolutionHeight))
      , o = u( () => r.value.width)
      , i = u( () => r.value.height)
      , s = () => o.value / i.value
      , l = u( () => t.data.desktop?.crop)
      , d = u( () => t.renderedPosition || t.data.desktop)
      , p = u( () => d.value.width)
      , g = u( () => d.value.height)
      , h = u( () => p.value / g.value)
      , f = u( () => s() > h.value)
      , _ = u( () => ec({
        isAspectRatioBiggerThanContainer: f.value,
        scale: l.value.scale,
        containerHeight: g.value,
        containerWidth: p.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , A = u( () => tc({
        isAspectRatioBiggerThanContainer: f.value,
        scale: l.value.scale,
        containerHeight: g.value,
        containerWidth: p.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , E = u( () => So({
        offsetInPx: -n?.value,
        imageSize: A.value,
        containerSize: g.value,
        offsetInPercent: l.value.top
    }))
      , w = u( () => Co({
        imageSize: A.value,
        containerSize: g.value,
        offset: E.value
    }))
      , k = u( () => So({
        offsetInPx: -a?.value,
        imageSize: _.value,
        containerSize: p.value,
        offsetInPercent: l.value.left
    }))
      , O = u( () => Co({
        imageSize: _.value,
        containerSize: p.value,
        offset: k.value
    }))
      , I = u( () => nc({
        left: O.value,
        top: w.value,
        imageWidth: _.value,
        imageHeight: A.value,
        containerWidth: p.value,
        containerHeight: g.value
    }))
      , R = u( () => t.data.mobile.crop || l.value)
      , Y = u( () => t.renderedPosition || t.data.mobile)
      , G = u( () => Y.value.width)
      , X = u( () => Y.value.height)
      , q = u( () => G.value / X.value)
      , D = u( () => s() > q.value)
      , j = u( () => ec({
        isAspectRatioBiggerThanContainer: D.value,
        scale: R.value.scale,
        containerHeight: X.value,
        containerWidth: G.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , z = u( () => tc({
        isAspectRatioBiggerThanContainer: D.value,
        scale: R.value.scale,
        containerHeight: X.value,
        containerWidth: G.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , ee = u( () => So({
        offsetInPx: -n?.value,
        imageSize: z.value,
        containerSize: X.value,
        offsetInPercent: R.value.top
    }))
      , F = u( () => Co({
        imageSize: z.value,
        containerSize: X.value,
        offset: ee.value
    }))
      , S = u( () => So({
        offsetInPx: -a?.value,
        imageSize: j.value,
        containerSize: G.value,
        offsetInPercent: R.value.left
    }))
      , N = u( () => Co({
        imageSize: j.value,
        containerSize: G.value,
        offset: S.value
    }))
      , M = u( () => nc({
        left: N.value,
        top: F.value,
        imageWidth: j.value,
        imageHeight: z.value,
        containerWidth: G.value,
        containerHeight: X.value
    }))
      , W = u( () => {
        const v = !["svg", "ico", "gif"].includes(rr(t.data.settings.path));
        if (!l.value || !o.value || !i.value || !v)
            return null;
        const L = ac({
            prefix: "desktop",
            left: O.value,
            top: w.value,
            scale: l.value.scale,
            isAspectRatioLargerThanContainer: f.value
        })
          , B = ac({
            prefix: "mobile",
            left: N.value,
            top: F.value,
            scale: R.value.scale,
            isAspectRatioLargerThanContainer: D.value
        });
        return {
            ...L,
            ...B
        }
    }
    )
      , b = u( () => {
        const {right: v} = ao(t.data?.settings?.styles?.["m-block-padding"] ?? "")
          , L = v ? Number.parseInt(v, 10) : null;
        return jo(t.data.desktop.width, L)
    }
    );
    return {
        href: e,
        cropCSSVars: W,
        desktopCropParams: I,
        mobileCropParams: M,
        desktopTop: w,
        desktopLeft: O,
        mobileLeft: N,
        mobileTop: F,
        desktopTopPercentWithOffset: E,
        desktopLeftPercentWithOffset: k,
        sizes: b
    }
}
  , Rf = {
    __name: "GridImageProviderUser",
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        mobileBlockPadding: {
            type: String,
            default: "0px"
        },
        elementWidth: {
            type: Number,
            default: null
        },
        elementHeight: {
            type: Number,
            default: null
        },
        mobileElementWidth: {
            type: Number,
            default: null
        },
        mobileElementHeight: {
            type: Number,
            default: null
        },
        resetMobilePosition: {
            type: Boolean,
            default: !0
        },
        currentLocale: {
            type: String,
            required: !0
        },
        mobileBorderRadius: {
            type: [Number, String],
            default: 0
        },
        desktopBorderRadius: {
            type: [Number, String],
            default: 0
        },
        shapeMaskSource: {
            type: String,
            default: null
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        overlayOpacity: {
            type: Number,
            default: 0
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(ee => ({
            "0860cbd8": R.value,
            bfff275c: Y.value
        }));
        const a = t
          , {addImagesToLightbox: e} = ur()
          , {siteId: r, getPagePathFromId: o} = _t()
          , {sizes: i, cropCSSVars: s, desktopCropParams: l, mobileCropParams: d, href: p} = rc(a, {
            href: u( () => a.data.linkType === Xi.PAGE && o({
                pageId: a.data.linkedPageId
            }) || a.data.href)
        })
          , g = ee => {
            const {fullResolutionWidth: F, fullResolutionHeight: S} = a.data
              , {left: N, top: M, right: W, bottom: b, imageWidth: v, imageHeight: L} = ee
              , B = N / v
              , K = M / L
              , Z = W / v
              , H = b / L;
            return {
                left: F * B,
                top: S * K,
                right: F * Z,
                bottom: S * H
            }
        }
          , h = ee => {
            const {top: F, right: S, bottom: N, left: M} = g(ee);
            return `${F};${S};${N};${M}`
        }
          , f = u( () => [a.data.settings.origin, a.data.settings.path, r.value])
          , _ = u( () => s.value ? It(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: !1,
            trim: h(l.value)
        }) : It(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: a.data.settings.styles["object-fit"] === "contain"
        }))
          , A = u( () => rr(a.data.settings.path) === "svg")
          , E = u( () => a.mobileElementWidth && a.mobileElementHeight)
          , w = u( () => !a.mobileElementHeight || a.mobileElementHeight < 0 ? _.value : s.value ? It(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            shouldContain: !1,
            trim: h(d.value)
        }) : It(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            shouldContain: !1
        }))
          , k = u( () => s.value ? En(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: !1,
            mobilePadding: 0,
            trim: h(l.value)
        }) : En(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: a.data.settings.styles["object-fit"] === "contain"
        }))
          , O = u( () => !a.mobileElementHeight || a.mobileElementHeight < 0 ? k.value : s.value ? En(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            shouldContain: !1,
            mobilePadding: 0,
            trim: h(d.value)
        }) : En(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            mobilePadding: 0,
            shouldContain: !1
        }))
          , I = () => {
            a.data.settings.clickAction === gi && e({
                src: It(a.data.settings.origin, a.data.settings.path, r.value),
                srcset: en(a.data.settings.origin, a.data.settings.path, r.value),
                alt: a.data.settings.alt
            })
        }
          , R = u( () => `${a.elementHeight}px`)
          , Y = u( () => `${a.mobileElementHeight}px`)
          , G = u( () => a.data.settings.alt)
          , X = u( () => a.data.settings.clickAction === gl ? "a" : "div")
          , q = u( () => a.data.target)
          , D = u( () => a.data.rel)
          , j = u( () => a.data.settings.clickAction === gi)
          , z = {
            props: a,
            addImagesToLightbox: e,
            siteId: r,
            getPagePathFromId: o,
            sizes: i,
            cropCSSVars: s,
            desktopCropParams: l,
            mobileCropParams: d,
            href: p,
            calculateFullResolutionTrim: g,
            constructTrimParamForCloudflare: h,
            imagePathParams: f,
            src: _,
            isSvg: A,
            isMobileLayout: E,
            mobileSrc: w,
            srcset: k,
            mobileSrcset: O,
            handleImageClick: I,
            elementHeightCssVar: R,
            mobileElementHeightCssVar: Y,
            alt: G,
            tagName: X,
            target: q,
            rel: D,
            isLightboxEnabled: j,
            computed: u,
            GridImage: Bu,
            get useLightbox() {
                return ur
            },
            get IMAGE_CLICK_ACTION_LINK() {
                return gl
            },
            get IMAGE_CLICK_ACTION_LIGHTBOX() {
                return gi
            },
            get getOptimizedSrc() {
                return It
            },
            get getGridItemSrcset() {
                return En
            },
            get getFullWidthSrcset() {
                return en
            },
            get useGridImage() {
                return rc
            },
            get getExtension() {
                return rr
            },
            get useSiteGlobal() {
                return _t
            },
            get LINK_TYPE() {
                return Xi
            }
        };
        return Object.defineProperty(z, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        z
    }
}
  , Nf = ["id"];
function Hf(t, n, a, e, r, o) {
    return m(),
    y("div", {
        id: a.id,
        class: J(["image-wrapper", {
            "image-wrapper--layout": e.isMobileLayout
        }])
    }, [Le(e.GridImage, {
        class: "image-wrapper--desktop",
        alt: e.alt,
        href: e.href,
        sizes: e.sizes,
        src: e.src,
        srcset: e.srcset,
        "tag-name": e.tagName,
        target: e.target,
        rel: e.rel,
        "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "element-height": a.elementHeight,
        "element-width": a.elementWidth,
        "shape-mask-source": a.shapeMaskSource,
        "reset-mobile-position": a.resetMobilePosition,
        "mobile-border-radius": a.mobileBorderRadius,
        "desktop-border-radius": a.desktopBorderRadius,
        "is-in-preview-mode": a.isInPreviewMode,
        "overlay-opacity": a.overlayOpacity,
        onImageClick: e.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "is-in-preview-mode", "overlay-opacity"]), e.isMobileLayout ? (m(),
    $(e.GridImage, {
        key: 0,
        "is-mobile-image": !0,
        class: "image-wrapper--mobile",
        alt: e.alt,
        href: e.href,
        sizes: e.sizes,
        src: e.mobileSrc,
        srcset: e.mobileSrcset,
        "tag-name": e.tagName,
        "is-svg": e.isSvg,
        target: e.target,
        rel: e.rel,
        "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "element-height": a.mobileElementHeight,
        "element-width": a.mobileElementWidth,
        "shape-mask-source": a.shapeMaskSource,
        "reset-mobile-position": a.resetMobilePosition,
        "mobile-border-radius": a.mobileBorderRadius,
        "desktop-border-radius": a.desktopBorderRadius,
        "overlay-opacity": a.overlayOpacity,
        "is-in-preview-mode": a.isInPreviewMode,
        onImageClick: e.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "is-svg", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "overlay-opacity", "is-in-preview-mode"])) : x("", !0)], 10, Nf)
}
const Vf = oe(Rf, [["render", Hf], ["__scopeId", "data-v-f3eaee1e"]])
  , Uf = re({
    props: {
        src: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        poster: {
            type: String,
            default: null
        }
    },
    emits: ["media-load"]
})
  , Ff = ["src", "poster"]
  , jf = ["src", "alt"];
function Gf(t, n, a, e, r, o) {
    return t.src.includes("video") || t.src.includes(".mp4") ? (m(),
    y("video", {
        key: 0,
        src: t.src,
        poster: t.poster,
        class: "media-item",
        controls: "",
        onProgressOnce: n[0] || (n[0] = i => t.$emit("media-load"))
    }, null, 40, Ff)) : (m(),
    y("img", {
        key: 1,
        src: t.src,
        alt: t.alt,
        class: "media-item",
        onLoad: n[1] || (n[1] = i => t.$emit("media-load"))
    }, null, 40, jf))
}
const Yf = oe(Uf, [["render", Gf], ["__scopeId", "data-v-a7175d28"]])
  , Wf = re({
    components: {
        GridInstagramFeedMediaItemFigure: Yf
    },
    props: {
        src: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        href: {
            type: String,
            default: null
        },
        poster: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            DATA_ATTRIBUTE_ANIMATION_ROLE: Qa,
            DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: ks,
            isLoaded: !1
        }
    }
})
  , qf = ["href"]
  , $f = {
    key: 1
}
  , zf = {
    key: 2,
    class: "placeholder"
};
function Zf(t, n, a, e, r, o) {
    const i = mt("GridInstagramFeedMediaItemFigure");
    return m(),
    y("div", dt({
        class: ["media-wrapper", {
            loaded: t.isLoaded
        }],
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: t.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE
    }), [t.src && t.href ? (m(),
    y("a", {
        key: 0,
        title: "Open instagram page of this image",
        href: t.href,
        rel: "noopener",
        target: "_blank"
    }, [Le(i, {
        src: t.src,
        alt: t.alt,
        poster: t.poster,
        onMediaLoad: n[0] || (n[0] = s => t.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])], 8, qf)) : t.src && !t.href ? (m(),
    y("div", $f, [Le(i, {
        src: t.src,
        alt: t.alt,
        poster: t.poster,
        onMediaLoad: n[1] || (n[1] = s => t.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])])) : (m(),
    y("div", zf))], 16)
}
const Kf = oe(Wf, [["render", Zf], ["__scopeId", "data-v-1ae00c6d"]])
  , Qf = re({
    components: {
        GridInstagramFeedMediaItem: Kf
    },
    props: {
        id: {
            type: String,
            required: !0
        },
        media: {
            type: Array,
            default: () => []
        }
    }
})
  , Xf = ["id"];
function Jf(t, n, a, e, r, o) {
    const i = mt("GridInstagramFeedMediaItem");
    return m(),
    y("div", {
        id: t.id,
        class: "instagram-feed"
    }, [(m(!0),
    y(pe, null, Me(t.media, s => (m(),
    $(i, {
        key: s.src,
        src: s.src,
        href: s.href,
        alt: s.alt,
        poster: s.poster
    }, null, 8, ["src", "href", "alt", "poster"]))), 128))], 8, Xf)
}
const ey = oe(Qf, [["render", Jf]])
  , oc = [{
    alt: "Workstation",
    id: "qc2YaEHSYsc",
    src: `${wt}/workstation.jpg`
}, {
    alt: "Waterfall between rocks",
    id: "ifnzcFXUmH0",
    src: `${wt}/waterfall-between-rocks.jpg`
}, {
    alt: "Trees with snow",
    id: "J2vryWaTqlB",
    src: `${wt}/trees-with-snow.png`
}, {
    alt: "Tree buds",
    id: "ZzmFPZuw7S1",
    src: `${wt}/tree-buds.jpg`
}, {
    alt: "Tiger drinking water",
    id: "k37Jfax7a6k",
    src: `${wt}/tiger-drinking-water.jpg`
}, {
    alt: "Tall well preserved buildings",
    id: "gTNSQDsXWp7",
    src: `${wt}/tall-well-preserved-buildings.jpg`
}, {
    alt: "Sunny beautiful wall",
    id: "QEdmdqjqcMf",
    src: `${wt}/sunny-beautiful-wall.jpg`
}, {
    alt: "Stereo gear",
    id: "iUXujDl2onh",
    src: `${wt}/stereo-gear.jpg`
}, {
    alt: "Rooftop oasis",
    id: "LWHjQE4HOv7",
    src: `${wt}/rooftop-oasis.jpg`
}, {
    alt: "Rocky beach",
    id: "o4qz1QOQcpJ",
    src: `${wt}/rocky-beach.jpg`
}, {
    alt: "Photographer holding camera",
    id: "VAHQ4wGABhK",
    src: `${wt}/photographer-holding-camera.jpg`
}, {
    alt: "Koi fishes",
    id: "zg35JVHQ4wG",
    src: `${wt}/koi-fishes.jpg`
}, {
    alt: "Human head artificially created",
    id: "zg35JVl8GY2",
    src: `${wt}/human-head-artificially-created.jpg`
}, {
    alt: "Horse eating grass",
    id: "dBwJoATZJBH",
    src: `${wt}/horse-eating-grass.jpg`
}, {
    alt: "Fluffy decoration in water",
    id: "HR21NDsphkV",
    src: `${wt}/fluffy-docoration-in-water.jpg`
}, {
    alt: "Elk looking at camera",
    id: "oLq0J4X2h2P",
    src: `${wt}/elk-looking-at-camera.jpg`
}, {
    alt: "Dog running in snow",
    id: "dbULY2RIxXc",
    src: `${wt}/dog-running-in-snow.jpg`
}, {
    alt: "Clean workspace",
    id: "WRmXHA1JA8H",
    src: `${wt}/clean-workspace.jpg`
}, {
    alt: "Cinematic food shot",
    id: "YgbHW4EtzbY",
    src: `${wt}/cinematic-food-shot.jpg`
}, {
    alt: "Christmas houses",
    id: "Eyoj1y8hvYz",
    src: `${wt}/christmas-houses.jpg`
}, {
    alt: "Bird sitting on branch",
    id: "yQKxjLtI8eg",
    src: `${wt}/bird-sitting-on-branch.jpg`
}, {
    alt: "Beautiful entry to private property",
    id: "1StnvFtqFjR",
    src: `${wt}/beautiful-entry-to-private-property.jpg`
}, {
    alt: "African animals",
    id: "nPjqWNmfFf0",
    src: `${wt}/african-animals.jpg`
}, {
    alt: "Workspace",
    id: "7gsm5H6lHSH",
    src: `${wt}/workspace.jpg`
}]
  , ty = "https://graph.instagram.com/me/media"
  , ay = ["id", "permalink", "caption", "media_url", "thumbnail_url"]
  , ny = {
    INSTAGRAM_BASIC_DISPLAY: "instagram_basic_display",
    INSTAGRAM_API_WITH_INSTAGRAM_LOGIN: "instagram_api_with_instagram_login"
}
  , ry = ({elementId: t, elementData: n, siteId: a, getInstagramTokenHandler: e, getInstagramFeedHandler: r, cleanupCallback: o}) => {
    const i = u( () => n.value.settings["item-count"])
      , s = T(null)
      , l = T([])
      , d = u( () => n.value.settings.apiVersion === ny.INSTAGRAM_API_WITH_INSTAGRAM_LOGIN)
      , p = u( () => l.value.length > 0 ? l.value.filter( ({src: f}) => typeof f < "u").slice(0, i.value) : new Array(i.value).fill({}))
      , g = async () => {
        if (d.value)
            return r({
                siteId: a,
                elementId: t.value
            });
        const f = new URL(ty);
        f.searchParams.set("fields", ay.join(",")),
        f.searchParams.set("access_token", s.value);
        const _ = await fetch(f.toString());
        return _.ok ? (await _.json()).data : Promise.reject(new Error("Failed to fetch Instagram media"))
    }
    ;
    return {
        media: p,
        init: async () => {
            try {
                d.value || (s.value = await e({
                    siteId: a,
                    elementId: t.value
                }))
            } catch {
                l.value = oc;
                return
            }
            try {
                const f = await g();
                l.value = f.map(_ => ({
                    id: _.id,
                    src: _.media_url,
                    alt: _.caption,
                    href: _.permalink,
                    poster: _.thumbnail_url
                }))
            } catch (f) {
                throw l.value = oc,
                o && o(),
                f
            }
        }
        ,
        itemGap: u( () => n.value.settings.styles["item-gap"]),
        isNewInstagramApi: d
    }
}
  , oy = re({
    components: {
        GridInstagramFeed: ey
    },
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        }
    },
    emits: ["media-loaded"],
    setup(t, n) {
        const {siteId: a} = _t()
          , e = u( () => t.id)
          , r = u( () => t.data)
          , o = async ({siteId: l, elementId: d}) => (await (await fetch(`https://builder-backend.hostinger.com/u1/instagram/token/${l}/${d}`)).json()).accessToken
          , {media: i, init: s} = ry({
            elementId: e,
            elementData: r,
            siteId: a.value,
            getInstagramTokenHandler: o,
            getInstagramFeedHandler: async ({siteId: l, elementId: d}) => (await fetch(`https://builder-backend.hostinger.com/u1/instagram/feed/${l}/${d}`)).json()
        });
        return xe( () => {
            s()
        }
        ),
        je(i, async l => {
            l?.length && (await Ot(),
            n.emit("media-loaded"))
        }
        , {
            immediate: !1
        }),
        {
            media: i
        }
    }
});
function iy(t, n, a, e, r, o) {
    const i = mt("GridInstagramFeed");
    return m(),
    $(i, {
        id: t.id,
        media: t.media
    }, null, 8, ["id", "media"])
}
const sy = oe(oy, [["render", iy]])
  , ly = re({
    __name: "GridMap",
    props: {
        isIframeLoaded: {
            type: Boolean
        },
        shouldRender: {
            type: Boolean,
            default: !0
        },
        src: {}
    },
    setup(t, {expose: n}) {
        n();
        const e = {
            props: t
        };
        return Object.defineProperty(e, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        e
    }
})
  , cy = ["src"]
  , uy = {
    "data-qa": "grid-map-pin",
    class: "grid-map__pin"
};
function dy(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["grid-map", {
            "grid-map--loading": !a.isIframeLoaded
        }])
    }, [P("iframe", {
        ref: "iframeRef",
        class: "grid-map__frame",
        "data-qa": "grid-map-iframe",
        width: "100%",
        height: "100%",
        src: e.props.shouldRender ? e.props.src : ""
    }, null, 8, cy), le(P("div", uy, null, 512), [[ma, !a.isIframeLoaded]])], 2)
}
const my = oe(ly, [["render", dy], ["__scopeId", "data-v-d752c768"]])
  , gy = (t, n) => {
    try {
        const {isObserved: a} = Ou(n)
          , e = T(!1)
          , r = Ka({
            src: u( () => t.data.settings?.src),
            shouldRender: u( () => a.value),
            isIframeLoaded: u( () => e.value)
        })
          , o = _s( () => {
            const i = n.value?.$refs;
            i && (i.iframeRef.addEventListener("load", () => {
                e.value = !0
            }
            ),
            o())
        }
        );
        return {
            composedProps: r
        }
    } catch (a) {
        console.error(a)
    }
}
  , py = re({
    name: "GridMapProviderUser",
    components: {
        GridMap: my
    },
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const n = T(null)
          , {composedProps: a} = gy(t, n);
        return {
            mapRef: n,
            composedProps: a
        }
    }
});
function vy(t, n, a, e, r, o) {
    const i = mt("GridMap");
    return m(),
    $(i, et({
        ref: "mapRef"
    }, t.composedProps), null, 16)
}
const hy = oe(py, [["render", vy]])
  , fy = re({
    __name: "GridSocialIcons",
    props: {
        links: {
            default: () => []
        },
        preventLinks: {
            type: Boolean,
            default: !1
        },
        direction: {
            default: "row"
        },
        directionMobile: {
            default: null
        },
        preventSpacing: {
            type: Boolean,
            default: !1
        },
        fullHeight: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = u( () => ["social-icons", `social-icons--${a.direction}`])
          , r = u( () => ({
            "--m-icon-direction": a.directionMobile || a.direction,
            "--icon-padding-vertical": a.direction === "column" ? "var(--space-between-icons)" : "0",
            "--icon-padding-horizontal": a.direction === "row" ? "var(--space-between-icons)" : "0",
            ...a.fullHeight && {
                height: "100%"
            },
            ...a.preventSpacing && {
                "--space-between-icons": "0px"
            },
            ...a.directionMobile && {
                "--m-icon-padding-vertical": a.directionMobile === "column" ? "var(--space-between-icons)" : "0",
                "--m-icon-padding-horizontal": a.directionMobile === "row" ? "var(--space-between-icons)" : "0"
            }
        }))
          , o = {
            props: a,
            computedClass: e,
            computedStyles: r,
            get capitalizeFirstLetter() {
                return ov
            }
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , yy = ["href", "title", "innerHTML"];
function by(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(e.computedClass),
        style: ze(e.computedStyles)
    }, [(m(!0),
    y(pe, null, Me(a.links, ({link: i, icon: s, svg: l}) => (m(),
    y("a", et({
        key: i,
        href: i,
        target: "_blank",
        rel: "noopener",
        title: `Go to ${e.capitalizeFirstLetter(s)} page`,
        class: "social-icons__link"
    }, xr({
        dragstart: a.preventLinks ? d => d.preventDefault() : () => null,
        click: a.preventLinks ? d => d.preventDefault() : () => null
    }, !0), {
        innerHTML: l
    }), null, 16, yy))), 128))], 6)
}
const Lu = oe(fy, [["render", by], ["__scopeId", "data-v-17c99e7b"]])
  , _y = t => {
    const n = u( () => t.data.settings.styles);
    return Ka({
        links: u( () => t.data.links),
        direction: u( () => n.value["icon-direction"]),
        directionMobile: u( () => n.value["m-icon-direction"]),
        fullHeight: u( () => !n.value.justify),
        preventSpacing: u( () => n.value["icon-spacing"] !== "center" || n.value["icon-direction"] === "column" ? !n.value.justify : !n.value.align)
    })
}
  , wy = re({
    components: {
        GridSocialIcons: Lu
    },
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t, n) {
        return {
            composedProps: _y(t)
        }
    }
});
function ky(t, n, a, e, r, o) {
    const i = mt("GridSocialIcons");
    return m(),
    $(i, dt(qt(t.composedProps)), null, 16)
}
const Sy = oe(wy, [["render", ky]])
  , Cy = T(null)
  , Ty = t => {
    const n = u( () => t.data.settings?.priceId || "")
      , a = u( () => t.data.settings?.paymentType || "payment");
    return {
        stripeInstance: Cy,
        priceId: n,
        paymentType: a
    }
}
  , Iy = "https://js.stripe.com/v3"
  , Py = re({
    name: "GridStripeButtonProviderUser",
    components: {
        GridButton: Un
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        successPageSlug: {
            type: String,
            required: !0
        },
        cancellationPageSlug: {
            type: String,
            required: !0
        },
        stripePublicApiKey: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const {getButtonHref: n} = _t()
          , {content: a, type: e} = ro(t, {
            href: u( () => n({
                isFormButton: t.data.settings.isFormButton,
                linkedPageId: t.data.linkedPageId,
                linkType: t.data.linkType,
                href: t.data.href
            }))
        })
          , {stripeInstance: r, priceId: o, paymentType: i} = Ty(t)
          , s = T(!1)
          , l = () => new Promise( (p, g) => {
            if (!!(r.value && window.Stripe)) {
                p();
                return
            }
            const f = document.createElement("script");
            f.addEventListener("load", () => {
                window.Stripe && (r.value = window.Stripe(t.stripePublicApiKey),
                p())
            }
            ),
            f.addEventListener("error", () => {
                g()
            }
            ),
            f.src = Iy,
            document.head.appendChild(f)
        }
        );
        return {
            content: a,
            type: e,
            isLoadingStripeScript: s,
            handleClick: async () => {
                o.value && (s.value = !0,
                await l(),
                s.value = !1,
                r.value.redirectToCheckout({
                    lineItems: [{
                        price: o.value,
                        quantity: 1
                    }],
                    mode: i.value,
                    successUrl: `${window.location.origin}/${t.successPageSlug}`,
                    cancelUrl: `${window.location.origin}/${t.cancellationPageSlug}`
                }).then(p => {
                    p.error && console.error(p.error.message)
                }
                ))
            }
        }
    }
});
function Ey(t, n, a, e, r, o) {
    const i = mt("GridButton")
      , s = st("qa");
    return le((m(),
    $(i, {
        "tag-name": "button",
        content: t.content,
        type: t.type,
        "is-disabled": t.isLoadingStripeScript,
        onClick: t.handleClick
    }, null, 8, ["content", "type", "is-disabled", "onClick"])), [[s, "button-stripe-checkout"]])
}
const Dy = oe(Py, [["render", Ey]])
  , Ay = {
    __name: "GridTextBox",
    props: {
        textAlign: {
            type: String,
            default: null
        },
        textAlignMobile: {
            type: String,
            default: null
        },
        backgroundColor: {
            type: String,
            default: null
        },
        content: {
            type: String,
            default: null
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(s => ({
            e4116cd0: r.value,
            "5142e07a": e.value,
            dc01974c: o.value
        }));
        const a = t
          , e = u( () => a.backgroundColor)
          , r = u( () => a.textAlign === "justify" ? "normal" : "break-spaces")
          , o = u( () => a.textAlignMobile && a.textAlignMobile === "justify" ? "normal" : r.value)
          , i = {
            props: a,
            backgroundColor: e,
            whiteSpace: r,
            whiteSpaceMobile: o,
            computed: u
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
}
  , My = ["innerHTML"]
  , Oy = {
    key: 1,
    class: "text-box"
};
function xy(t, n, a, e, r, o) {
    return a.content ? (m(),
    y("div", {
        key: 0,
        class: "text-box",
        innerHTML: a.content
    }, null, 8, My)) : (m(),
    y("div", Oy, [ne(t.$slots, "default")]))
}
const Ru = oe(Ay, [["render", xy]])
  , By = {
    __name: "GridTextBoxProviderUser",
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = {
            GridTextBox: Ru
        };
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
};
function Ly(t, n, a, e, r, o) {
    return m(),
    $(e.GridTextBox, {
        "text-align": a.data.settings.styles.text,
        "text-align-mobile": a.data.settings.styles["m-text"],
        "background-color": a.data.backgroundColor,
        content: a.data.content
    }, null, 8, ["text-align", "text-align-mobile", "background-color", "content"])
}
const Ry = oe(By, [["render", Ly]])
  , ta = {
    YOUTUBE: "youtube",
    VIMEO: "vimeo"
}
  , po = "0"
  , $o = "1"
  , Ny = po
  , Hy = po
  , Vy = $o
  , Uy = po
  , Fy = po
  , jy = $o
  , Gy = /t=\d+/g
  , Wt = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: {
        [ta.YOUTUBE]: "mute",
        [ta.VIMEO]: "muted"
    },
    TIME: "t",
    START: "start"
}
  , Yy = {
    [ta.YOUTUBE]: "https://www.youtube.com/embed/",
    [ta.VIMEO]: "https://player.vimeo.com/video/"
}
  , os = {
    [ta.YOUTUBE]: /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [ta.VIMEO]: /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/
}
  , Wy = "https://vimeo.com/api/oembed.json?url=https://vimeo.com"
  , qy = re({
    __name: "GridVideo",
    props: {
        renderIframe: {
            type: Boolean
        },
        renderPicture: {
            type: Boolean,
            default: !0
        },
        src: {},
        provider: {
            default: ta.YOUTUBE
        },
        jpg: {
            default: ""
        },
        webp: {
            default: ""
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(i => ({
            "127083ae": r.value
        }));
        const a = t
          , e = T(!1)
          , r = u( () => e.value ? "transparent" : "var(--color-dark)")
          , o = {
            props: a,
            isIframeLoaded: e,
            backgroundColor: r
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , $y = {
    class: "video"
}
  , zy = ["src"]
  , Zy = ["srcset"]
  , Ky = ["src"];
function Qy(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", $y, [e.props.renderIframe ? le((m(),
    y("iframe", {
        key: 0,
        src: e.props.src,
        class: "video__frame",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "",
        width: "100%",
        height: "100%",
        onLoad: n[0] || (n[0] = s => e.isIframeLoaded = !0)
    }, null, 40, zy)), [[i, "builder-element-video-iframe"]]) : e.props.renderPicture && (e.props.jpg || e.props.webp) ? (m(),
    y(pe, {
        key: 1
    }, [le((m(),
    y("picture", null, [P("source", {
        type: "image/webp",
        srcset: e.props.webp
    }, null, 8, Zy), le(P("img", {
        referrerpolicy: "origin",
        class: "video__placeholder",
        height: "100%",
        width: "100%",
        src: e.props.jpg
    }, null, 8, Ky), [[i, "builder-gridelement-gridvideo"]])])), [[i, "builder-element-video-picture"]]), le(P("button", {
        type: "button",
        class: J(`video__play video__play--${e.props.provider}`)
    }, null, 2), [[i, "builder-element-video-button"]])], 64)) : x("", !0)])
}
const Xy = oe(qy, [["render", Qy], ["__scopeId", "data-v-1ed13e03"]])
  , ic = {
    jpg: "https://i.ytimg.com/vi/hqdefault.jpg",
    webp: "https://i.ytimg.com/vi_webp/hqdefault.webp"
}
  , Jy = async t => {
    const n = await fetch(`${Wy}/${t}`);
    if (!n.ok)
        return ic;
    const a = await n.json();
    if (!a.thumbnail_url)
        return ic;
    const e = a.thumbnail_url.replace("_295x166", "_720");
    return {
        jpg: e.replace(".webp", ".jpg"),
        webp: e.replace(".jpg", ".webp")
    }
}
  , eb = async (t, n) => {
    switch (t) {
    case ta.YOUTUBE:
        return {
            jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
            webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`
        };
    case ta.VIMEO:
        return Jy(n);
    default:
        return {
            jpg: null,
            webp: null
        }
    }
}
  , Nu = (t, n, a, e) => {
    const r = n === ta.VIMEO ? t.split("/")[1] : null
      , o = n === ta.VIMEO ? t.split("/")[0] : t
      , i = e.match(Gy)
      , s = n === ta.YOUTUBE && i ? {
        [Wt.START]: i[0].slice(2) ?? 0
    } : {}
      , l = Wt.MUTE[n]
      , d = new URLSearchParams({
        [Wt.ALBUM]: r,
        [Wt.PLAYLIST]: o,
        [Wt.AUTOPLAY]: a?.[Wt.AUTOPLAY] ?? Ny,
        [Wt.CONTROLS]: a?.[Wt.CONTROLS] ?? Vy,
        [Wt.LOOP]: a?.[Wt.LOOP] ?? Hy,
        [Wt.AUTOPAUSE]: Uy,
        [Wt.PLAYSINLINE]: jy,
        [l]: Fy,
        ...s
    }).toString();
    return `${Yy[n]}${o}?${d}`
}
  , tb = async (t, n) => {
    const a = Object.entries(os).find( ([,p]) => t?.match(p))
      , e = a && a.length === 2;
    if (!e)
        return {
            url: t,
            isUrlValid: !1
        };
    const [r,o] = a
      , i = t.match(o)
      , s = [i[1], i[2]].join("")
      , {jpg: l, webp: d} = await eb(r, s);
    return {
        src: Nu(s, r, n, t),
        isUrlValid: e,
        jpg: l,
        webp: d,
        provider: r,
        id: s
    }
}
  , ab = t => {
    const n = Ka({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null
    })
      , a = Ka({
        src: u( () => n.src ?? t.data.settings.src),
        provider: u( () => n.provider ?? t.data.settings.provider),
        width: u( () => n.width ?? t.data.settings.width),
        height: u( () => n.height ?? t.data.settings.height),
        webp: u( () => n.webp ?? t.data.settings.webp),
        jpg: u( () => n.jpg ?? t.data.settings.jpg)
    });
    _s( () => {
        (t.data.settings.src !== a.src || !t.data.settings.jpg) && tb(t.data.settings.src).then(d => {
            Object.entries(d).forEach( ([p,g]) => {
                n[p] = g
            }
            )
        }
        )
    }
    );
    const e = T(null)
      , r = u( () => t.data.settings.src?.includes(`${[Wt.AUTOPLAY]}=${$o}`) ?? !1)
      , o = u( () => {
        const d = Wt.MUTE[a.provider];
        return r.value ? a.src.replace(`${[d]}=${po}`, `${[d]}=${$o}`) : a.src
    }
    )
      , i = T(!1)
      , s = T(!1);
    return {
        composedProps: a,
        composedSource: o,
        init: () => {
            const d = new IntersectionObserver( ([{isIntersecting: p}]) => {
                p && (r.value ? i.value = !0 : s.value = !0,
                d.disconnect())
            }
            ,{
                threshold: 0
            });
            d.observe(e.value.$el),
            i.value = !0
        }
        ,
        renderIframe: i,
        renderPicture: s,
        videoRef: e
    }
}
  , nb = re({
    name: "GridVideoProviderUser",
    components: {
        GridVideo: Xy
    },
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const {composedProps: n, composedSource: a, init: e, videoRef: r, renderIframe: o, renderPicture: i} = ab(t);
        return xe( () => {
            e()
        }
        ),
        {
            videoRef: r,
            composedProps: n,
            composedSource: a,
            renderIframe: o,
            renderPicture: i
        }
    }
});
function rb(t, n, a, e, r, o) {
    const i = mt("GridVideo");
    return m(),
    $(i, et({
        ref: "videoRef"
    }, t.composedProps, {
        src: t.composedSource,
        "render-iframe": t.renderIframe,
        "render-picture": t.renderPicture,
        onClickOnce: n[0] || (n[0] = s => t.renderIframe = !0)
    }), null, 16, ["src", "render-iframe", "render-picture"])
}
const ob = oe(nb, [["render", rb]])
  , ib = re({
    __name: "GridShape",
    props: {
        svg: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = {};
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , sb = ["innerHTML"];
function lb(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "grid-shape",
        innerHTML: a.svg
    }, null, 8, sb)
}
const cb = oe(ib, [["render", lb]])
  , ub = re({
    name: "GridShapeProviderUser",
    components: {
        GridShape: cb
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    computed: {
        cssVars() {
            const t = this.data.mobile.height * 100 / Fa
              , n = this.data.desktop.height * 100 / Ua;
            return {
                "--shape-height": `${this.data.desktop.height}px`,
                "--m-shape-height": this.isInPreviewMode ? `${this.data.mobile.height}px` : `${t}vw`,
                "--t-shape-height": `${this.data.mobile.height}px`,
                "--small-desktop-shape-height": `${n}vw`,
                "--shape-color": `${this.data.color}`
            }
        }
    }
});
function db(t, n, a, e, r, o) {
    const i = mt("GridShape");
    return m(),
    $(i, {
        svg: t.data.svg,
        style: ze(t.cssVars)
    }, null, 8, ["svg", "style"])
}
const mb = oe(ub, [["render", db]])
  , gb = re({
    __name: "ProductMediaElement",
    props: {
        mediaType: {
            default: Br.IMAGE
        },
        alt: {},
        src: {},
        isEager: {
            type: Boolean,
            default: !1
        },
        objectFit: {
            default: "cover"
        },
        imageRatio: {},
        width: {
            default: 0
        },
        height: {
            default: 0
        },
        enableSrcset: {
            type: Boolean,
            default: !1
        },
        imageOrigin: {
            default: "other"
        },
        isLossless: {
            type: Boolean,
            default: !1
        },
        siteId: {
            default: ""
        },
        secondaryImageSrc: {},
        isVideoAutoplayDisabled: {
            type: Boolean
        },
        isVideoDisabled: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = T(a.src)
          , r = T()
          , o = T(!1)
          , i = u( () => a.enableSrcset ? jo(a.width) : void 0)
          , s = f => {
            const _ = f.match(os[ta.YOUTUBE])?.[1];
            return Nu(_, ta.YOUTUBE, {
                [Wt.AUTOPLAY]: 1,
                [Wt.CONTROLS]: 1
            }, f)
        }
          , l = f => a.mediaType === Br.VIDEO ? `https://i.ytimg.com/vi_webp/${f.match(os[ta.YOUTUBE])?.[1]}/hqdefault.webp` : f
          , d = f => {
            const _ = l(f);
            return It(a.imageOrigin, _, a.siteId, {
                width: a.width,
                height: a.height,
                shouldContain: a.objectFit === "contain",
                isLossless: a.isLossless
            })
        }
          , p = f => {
            if (!a.enableSrcset)
                return;
            const _ = l(f);
            return En(a.imageOrigin, _, a.siteId, {
                width: a.width,
                height: a.height,
                shouldContain: a.objectFit === "contain",
                isLossless: a.isLossless
            })
        }
          , g = () => {
            if (!a.secondaryImageSrc)
                return;
            const f = new Image
              , _ = p(a.secondaryImageSrc);
            f.src = d(a.secondaryImageSrc),
            _ && (f.srcset = _)
        }
        ;
        je( () => a.imageRatio, (f, _) => {
            f !== _ && (e.value = d(a.src),
            r.value = p(a.src))
        }
        ),
        je( () => a.src, () => {
            e.value = d(a.src),
            r.value = p(a.src)
        }
        ),
        je( () => a.secondaryImageSrc, () => {
            g()
        }
        ),
        xe( () => {
            e.value = d(a.src),
            r.value = p(a.src),
            g()
        }
        );
        const h = {
            props: a,
            imageUrl: e,
            srcset: r,
            isLoaded: o,
            sizes: i,
            getVideoUrl: s,
            getMediaImageUrl: l,
            getOptimizedImageUrl: d,
            getSrcSet: p,
            preloadSecondaryImage: g,
            get EcommerceProductMediaType() {
                return Br
            }
        };
        return Object.defineProperty(h, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        h
    }
})
  , pb = ["src"]
  , vb = ["loading", "src", "alt", "srcset", "sizes"];
function hb(t, n, a, e, r, o) {
    return m(),
    $(ra, {
        appear: "",
        name: "fade",
        mode: "out-in"
    }, {
        default: ye( () => [!a.isVideoDisabled && a.mediaType === e.EcommerceProductMediaType.VIDEO && !a.isVideoAutoplayDisabled ? (m(),
        y("iframe", {
            key: 0,
            src: e.getVideoUrl(a.src),
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: "",
            width: 140,
            height: 140
        }, null, 8, pb)) : (m(),
        y("img", et({
            key: 1
        }, t.$attrs, {
            loading: a.isEager ? "eager" : "lazy",
            src: e.imageUrl,
            alt: a.alt,
            srcset: e.srcset,
            sizes: e.sizes,
            class: ["ecommerce-product-image", {
                "ecommerce-product-image--loading": !e.isLoaded
            }],
            onLoad: n[0] || (n[0] = i => e.isLoaded = !0),
            onError: n[1] || (n[1] = i => e.isLoaded = !0)
        }), null, 16, vb))]),
        _: 1
    })
}
const ai = oe(gb, [["render", hb]]);
function ni(t) {
    return Kc() ? (Qc(t),
    !0) : !1
}
function or(t) {
    return typeof t == "function" ? t() : V(t)
}
const Ls = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fb = t => t != null
  , yb = Object.prototype.toString
  , bb = t => yb.call(t) === "[object Object]"
  , Rr = () => {}
  , is = _b();
function _b() {
    var t, n;
    return Ls && ((t = window?.navigator) == null ? void 0 : t.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent))
}
function wb(t) {
    return Zc()
}
function kb(...t) {
    if (t.length !== 1)
        return xn(...t);
    const n = t[0];
    return typeof n == "function" ? Qd(Xd( () => ({
        get: n,
        set: Rr
    }))) : T(n)
}
function Hu(t, n=!0, a) {
    wb() ? xe(t, a) : n ? t() : Ot(t)
}
function na(t) {
    var n;
    const a = or(t);
    return (n = a?.$el) != null ? n : a
}
const vo = Ls ? window : void 0
  , Sb = Ls ? window.document : void 0;
function An(...t) {
    let n, a, e, r;
    if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a,e,r] = t,
    n = vo) : [n,a,e,r] = t,
    !n)
        return Rr;
    Array.isArray(a) || (a = [a]),
    Array.isArray(e) || (e = [e]);
    const o = []
      , i = () => {
        o.forEach(p => p()),
        o.length = 0
    }
      , s = (p, g, h, f) => (p.addEventListener(g, h, f),
    () => p.removeEventListener(g, h, f))
      , l = je( () => [na(n), or(r)], ([p,g]) => {
        if (i(),
        !p)
            return;
        const h = bb(g) ? {
            ...g
        } : g;
        o.push(...a.flatMap(f => e.map(_ => s(p, f, _, h))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , d = () => {
        l(),
        i()
    }
    ;
    return ni(d),
    d
}
let sc = !1;
function ri(t, n, a={}) {
    const {window: e=vo, ignore: r=[], capture: o=!0, detectIframe: i=!1} = a;
    if (!e)
        return Rr;
    is && !sc && (sc = !0,
    Array.from(e.document.body.children).forEach(h => h.addEventListener("click", Rr)),
    e.document.documentElement.addEventListener("click", Rr));
    let s = !0;
    const l = h => r.some(f => {
        if (typeof f == "string")
            return Array.from(e.document.querySelectorAll(f)).some(_ => _ === h.target || h.composedPath().includes(_));
        {
            const _ = na(f);
            return _ && (h.target === _ || h.composedPath().includes(_))
        }
    }
    )
      , p = [An(e, "click", h => {
        const f = na(t);
        if (!(!f || f === h.target || h.composedPath().includes(f))) {
            if (h.detail === 0 && (s = !l(h)),
            !s) {
                s = !0;
                return
            }
            n(h)
        }
    }
    , {
        passive: !0,
        capture: o
    }), An(e, "pointerdown", h => {
        const f = na(t);
        s = !l(h) && !!(f && !h.composedPath().includes(f))
    }
    , {
        passive: !0
    }), i && An(e, "blur", h => {
        setTimeout( () => {
            var f;
            const _ = na(t);
            ((f = e.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !_?.contains(e.document.activeElement) && n(h)
        }
        , 0)
    }
    )].filter(Boolean);
    return () => p.forEach(h => h())
}
function Cb() {
    const t = T(!1)
      , n = Zc();
    return n && xe( () => {
        t.value = !0
    }
    , n),
    t
}
function Vu(t) {
    const n = Cb();
    return u( () => (n.value,
    !!t()))
}
function Tb(t, n, a={}) {
    const {window: e=vo, ...r} = a;
    let o;
    const i = Vu( () => e && "MutationObserver"in e)
      , s = () => {
        o && (o.disconnect(),
        o = void 0)
    }
      , l = u( () => {
        const h = or(t)
          , f = (Array.isArray(h) ? h : [h]).map(na).filter(fb);
        return new Set(f)
    }
    )
      , d = je( () => l.value, h => {
        s(),
        i.value && e && h.size && (o = new MutationObserver(n),
        h.forEach(f => o.observe(f, r)))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , p = () => o?.takeRecords()
      , g = () => {
        s(),
        d()
    }
    ;
    return ni(g),
    {
        isSupported: i,
        stop: g,
        takeRecords: p
    }
}
function Ib(t={}) {
    const {document: n=Sb} = t;
    if (!n)
        return T("visible");
    const a = T(n.visibilityState);
    return An(n, "visibilitychange", () => {
        a.value = n.visibilityState
    }
    ),
    a
}
function Uu(t, n, a={}) {
    const {window: e=vo, ...r} = a;
    let o;
    const i = Vu( () => e && "ResizeObserver"in e)
      , s = () => {
        o && (o.disconnect(),
        o = void 0)
    }
      , l = u( () => Array.isArray(t) ? t.map(g => na(g)) : [na(t)])
      , d = je(l, g => {
        if (s(),
        i.value && e) {
            o = new ResizeObserver(n);
            for (const h of g)
                h && o.observe(h, r)
        }
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , p = () => {
        s(),
        d()
    }
    ;
    return ni(p),
    {
        isSupported: i,
        stop: p
    }
}
function Pb(t, n={}) {
    const {reset: a=!0, windowResize: e=!0, windowScroll: r=!0, immediate: o=!0} = n
      , i = T(0)
      , s = T(0)
      , l = T(0)
      , d = T(0)
      , p = T(0)
      , g = T(0)
      , h = T(0)
      , f = T(0);
    function _() {
        const A = na(t);
        if (!A) {
            a && (i.value = 0,
            s.value = 0,
            l.value = 0,
            d.value = 0,
            p.value = 0,
            g.value = 0,
            h.value = 0,
            f.value = 0);
            return
        }
        const E = A.getBoundingClientRect();
        i.value = E.height,
        s.value = E.bottom,
        l.value = E.left,
        d.value = E.right,
        p.value = E.top,
        g.value = E.width,
        h.value = E.x,
        f.value = E.y
    }
    return Uu(t, _),
    je( () => na(t), A => !A && _()),
    Tb(t, _, {
        attributeFilter: ["style", "class"]
    }),
    r && An("scroll", _, {
        capture: !0,
        passive: !0
    }),
    e && An("resize", _, {
        passive: !0
    }),
    Hu( () => {
        o && _()
    }
    ),
    {
        height: i,
        bottom: s,
        left: l,
        right: d,
        top: p,
        width: g,
        x: h,
        y: f,
        update: _
    }
}
function Eb(t, n={
    width: 0,
    height: 0
}, a={}) {
    const {window: e=vo, box: r="content-box"} = a
      , o = u( () => {
        var g, h;
        return (h = (g = na(t)) == null ? void 0 : g.namespaceURI) == null ? void 0 : h.includes("svg")
    }
    )
      , i = T(n.width)
      , s = T(n.height)
      , {stop: l} = Uu(t, ([g]) => {
        const h = r === "border-box" ? g.borderBoxSize : r === "content-box" ? g.contentBoxSize : g.devicePixelContentBoxSize;
        if (e && o.value) {
            const f = na(t);
            if (f) {
                const _ = e.getComputedStyle(f);
                i.value = Number.parseFloat(_.width),
                s.value = Number.parseFloat(_.height)
            }
        } else if (h) {
            const f = Array.isArray(h) ? h : [h];
            i.value = f.reduce( (_, {inlineSize: A}) => _ + A, 0),
            s.value = f.reduce( (_, {blockSize: A}) => _ + A, 0)
        } else
            i.value = g.contentRect.width,
            s.value = g.contentRect.height
    }
    , a);
    Hu( () => {
        const g = na(t);
        g && (i.value = "offsetWidth"in g ? g.offsetWidth : n.width,
        s.value = "offsetHeight"in g ? g.offsetHeight : n.height)
    }
    );
    const d = je( () => na(t), g => {
        i.value = g ? n.width : 0,
        s.value = g ? n.height : 0
    }
    );
    function p() {
        l(),
        d()
    }
    return {
        width: i,
        height: s,
        stop: p
    }
}
function Ci(t) {
    return typeof Window < "u" && t instanceof Window ? t.document.documentElement : typeof Document < "u" && t instanceof Document ? t.documentElement : t
}
function Fu(t) {
    const n = window.getComputedStyle(t);
    if (n.overflowX === "scroll" || n.overflowY === "scroll" || n.overflowX === "auto" && t.clientWidth < t.scrollWidth || n.overflowY === "auto" && t.clientHeight < t.scrollHeight)
        return !0;
    {
        const a = t.parentNode;
        return !a || a.tagName === "BODY" ? !1 : Fu(a)
    }
}
function Db(t) {
    const n = t || window.event
      , a = n.target;
    return Fu(a) ? !1 : n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(),
    !1)
}
const To = new WeakMap;
function ju(t, n=!1) {
    const a = T(n);
    let e = null;
    je(kb(t), i => {
        const s = Ci(or(i));
        if (s) {
            const l = s;
            To.get(l) || To.set(l, l.style.overflow),
            a.value && (l.style.overflow = "hidden")
        }
    }
    , {
        immediate: !0
    });
    const r = () => {
        const i = Ci(or(t));
        !i || a.value || (is && (e = An(i, "touchmove", s => {
            Db(s)
        }
        , {
            passive: !1
        })),
        i.style.overflow = "hidden",
        a.value = !0)
    }
      , o = () => {
        var i;
        const s = Ci(or(t));
        !s || !a.value || (is && e?.(),
        s.style.overflow = (i = To.get(s)) != null ? i : "",
        To.delete(s),
        a.value = !1)
    }
    ;
    return ni(o),
    u({
        get() {
            return a.value
        },
        set(i) {
            i ? r() : o()
        }
    })
}
const lc = 45
  , Ab = re({
    __name: "SiteElementSearchBar",
    props: {
        placeholderText: {},
        noResultsText: {},
        fillColor: {},
        fillColorHover: {},
        textAndIconColor: {},
        textAndIconColorHover: {},
        resultItemHoverColor: {},
        fontFamily: {},
        borderColor: {},
        borderColorHover: {},
        borderRadius: {},
        translations: {},
        siteId: {},
        searchTerm: {
            default: ""
        },
        results: {
            default: null
        },
        isLoading: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:search-term", "is-dropdown-open"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(k => ({
            "267fbace": k.fontFamily,
            f40754b4: k.textAndIconColor,
            "02e01b36": k.textAndIconColorHover,
            "53b91c91": h.value,
            a5727d5e: k.borderColor,
            "20c4e4da": k.fillColor,
            d7a57b2a: k.borderColorHover,
            "42d4ec82": k.fillColorHover,
            "4bcb8afd": k.resultItemHoverColor,
            "47e68280": e
        }));
        const e = `${lc}px`
          , r = a
          , o = t
          , i = T(null)
          , s = T(!1)
          , l = T([])
          , d = T(-1)
          , p = u( () => o.isLoading)
          , g = u( () => o.results)
          , h = u( () => `${o.borderRadius}px`)
          , f = () => {
            o.results && d.value < o.results.length - 1 && (d.value += 1)
        }
          , _ = () => {
            d.value > 0 && (d.value -= 1)
        }
          , A = () => {
            const k = l.value[d.value];
            if (!k)
                return;
            const O = new MouseEvent("click",{
                bubbles: !0,
                cancelable: !0,
                view: window
            });
            k.dispatchEvent(O)
        }
          , E = () => {
            s.value = !1,
            r("update:search-term", ""),
            d.value = -1
        }
        ;
        je([g, p], () => {
            s.value = !!g.value || p.value,
            r("is-dropdown-open", s.value)
        }
        ),
        xe( () => {
            ri(i, () => {
                E()
            }
            )
        }
        );
        const w = {
            IMAGE_DIMENSIONS_PX: lc,
            IMAGE_DIMENSIONS_PX_STRING: e,
            emit: r,
            props: o,
            searchBarRef: i,
            isSearchResultDropdownVisible: s,
            itemLinksRefs: l,
            highlightedItemIndex: d,
            isLoading: p,
            results: g,
            borderRadiusInPx: h,
            highlightNextItem: f,
            highlightPreviousItem: _,
            redirectToHighlightedItem: A,
            dropdownCloseHandler: E,
            ZyroLoader: Bs,
            ProductMediaElement: ai
        };
        return Object.defineProperty(w, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        w
    }
})
  , Mb = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox"
}
  , Ob = {
    class: "site-element-search-bar__input-wrapper"
}
  , xb = ["placeholder", "value", "onKeydown"]
  , Bb = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown"
}
  , Lb = {
    key: 1,
    class: "site-element-search-bar__dropdown-no-results"
}
  , Rb = ["area-selected"]
  , Nb = ["href", "onMouseover", "onFocus", "onKeydown"]
  , Hb = {
    class: "search-result-item__content"
}
  , Vb = {
    class: "search-result-item__title"
}
  , Ub = {
    class: "search-result-item__price"
}
  , Fb = {
    key: 0
}
  , jb = {
    key: 0
}
  , Gb = {
    key: 0,
    class: "search-result-item__sale-price"
}
  , Yb = {
    key: 1
};
function Wb(t, n, a, e, r, o) {
    return m(),
    y("div", Mb, [P("div", Ob, [P("input", {
        class: "site-element-search-bar__input",
        placeholder: e.props.placeholderText,
        value: e.props.searchTerm,
        onInput: n[0] || (n[0] = i => e.emit("update:search-term", i.target.value)),
        onKeydown: [Ue(Re(e.highlightNextItem, ["prevent"]), ["down"]), Ue(Re(e.highlightPreviousItem, ["prevent"]), ["up"]), Ue(e.redirectToHighlightedItem, ["enter"])]
    }, null, 40, xb), e.isSearchResultDropdownVisible ? (m(),
    y("div", {
        key: 0,
        class: "site-element-search-bar__dropdown-close",
        onClick: e.dropdownCloseHandler
    })) : x("", !0)]), e.isSearchResultDropdownVisible ? (m(),
    y("ul", Bb, [e.props.isLoading ? (m(),
    $(e.ZyroLoader, {
        key: 0,
        size: "30px",
        color: e.props.textAndIconColorHover,
        class: "site-element-search-bar__loader"
    }, null, 8, ["color"])) : !e.props.results || e.props.results.length === 0 ? (m(),
    y("p", Lb, te(a.noResultsText), 1)) : (m(!0),
    y(pe, {
        key: 2
    }, Me(e.props.results, (i, s) => (m(),
    y("li", {
        key: i.id,
        role: "option",
        "area-selected": s === e.highlightedItemIndex
    }, [P("a", {
        ref_for: !0,
        ref: "itemLinksRefs",
        href: i.href,
        class: J(["search-result-item", {
            "search-result-item--highlighted": s === e.highlightedItemIndex
        }]),
        onMouseover: l => e.highlightedItemIndex = s,
        onFocus: l => e.highlightedItemIndex = s,
        onKeydown: Ue(Re(e.redirectToHighlightedItem, ["prevent"]), ["enter"])
    }, [i.thumbnail ? (m(),
    $(e.ProductMediaElement, {
        key: 0,
        src: i.thumbnail,
        alt: i.title,
        class: "search-result-item__image",
        width: e.IMAGE_DIMENSIONS_PX,
        height: e.IMAGE_DIMENSIONS_PX,
        "site-id": e.props.siteId,
        "enable-srcset": ""
    }, null, 8, ["src", "alt", "site-id"])) : x("", !0), P("div", Hb, [P("h3", Vb, te(i.title), 1), P("p", Ub, [i.isInStock ? (m(),
    y("span", Fb, [i.price?.length ? (m(),
    y("span", jb, [i.oldPrice ? (m(),
    y("span", Gb, te(i.oldPrice), 1)) : x("", !0), $e(" " + te(i.price), 1)])) : x("", !0)])) : (m(),
    y("span", Yb, te(a.translations.soldOut), 1))])])], 42, Nb)], 8, Rb))), 128))])) : x("", !0)], 512)
}
const Gu = oe(Ab, [["render", Wb]])
  , qb = {
    6: 18,
    5: 15,
    4: 12,
    3: 9,
    2: 6,
    1: 3
}
  , $b = t => t?.variants[0].booking_event?.length_unit === Ji;
function ss(t) {
    return t?.variants[0].booking_event?.length || 0
}
const Rs = (t, n) => {
    const a = e => Math.round(e * 100) / 100;
    return $b(t) ? `${a(ss(t) / 1e3 / 60 / 60)} ${n.hourShort}` : `${a(ss(t) / 1e3 / 60)} ${n.minuteShort}`
}
  , Nr = t => t[Su] !== Is ? !1 : !t.variants.every( (n, a, e) => {
    const r = e[0]?.prices?.[0] ?? e[0]
      , o = n?.prices?.[0] ?? n
      , i = r.sale_amount ?? r.amount
      , s = o.sale_amount ?? o.amount;
    return i === s
}
)
  , Or = ({variantsQuantity: t, variantId: n}) => t.find(a => a.id === n)?.inventory_quantity || 0
  , Yu = ({product: t, variantsQuantity: n}) => t.variants.reduce( (a, e) => a + Or({
    variantsQuantity: n,
    variantId: e.id
}), 0)
  , zb = ({product: t, variantsQuantity: n}) => t.variants[0].manage_inventory ? Yu({
    product: t,
    variantsQuantity: n
}) > 0 : !0
  , Zb = ({variants: t}) => t.reduce( (n, a) => (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a)
  , Kb = async () => {
    if (document.getElementById("stripejs"))
        await new Promise(t => {
            document.getElementById("stripejs")?.addEventListener("load", () => t())
        }
        );
    else {
        const t = document.createElement("script");
        t.setAttribute("src", Kp),
        t.setAttribute("id", "stripejs"),
        document.head.appendChild(t),
        await new Promise( (n, a) => {
            t.addEventListener("load", () => n()),
            t.addEventListener("error", () => a(new Error("Failed to load Stripe.js")))
        }
        )
    }
}
;
function bn({amount: t, currency: n, isPriceDisplayedWithCurrency: a=!0}) {
    if (!n)
        return a ? "€0.00" : "0.00";
    const e = Number(t) || 0
      , o = Number(e / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
    return a ? n.template.replace("$1", o) : o
}
const Qb = "https://builder-backend.hostinger.com/public"
  , Xb = async ({query: t, indices: n, pageSize: a=5, storeId: e}) => {
    if (!t)
        return [];
    const r = await fetch(`${Qb}/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: t,
            indices: n,
            storeId: e,
            pageSize: a
        })
    })
      , {results: o} = await r.json();
    return o.products.hits
}
  , Jb = (t, n) => {
    let a;
    return function() {
        const r = () => Reflect.apply(t, this, arguments);
        clearTimeout(a),
        a = setTimeout(r, n)
    }
}
  , e_ = 400
  , t_ = ({result: t, ecommerceTranslations: n}) => {
    const a = t.site_product_selection === Is ? Zb({
        variants: t.variants
    }) : t.variants[0]
      , {amount: e, sale_amount: r, currency_decimal_digits: o, currency_template: i, manage_inventory: s} = a
      , l = {
        decimal_digits: o,
        template: i
    }
      , d = `/product-redirect/${t.id}`
      , p = e && Nr(t) ? `${n.from} ` : ""
      , g = e ? `${p}${bn({
        amount: r || e,
        currency: l
    })}` : ""
      , h = r ? bn({
        amount: e,
        currency: l
    }) : null
      , f = !s || !!e && zb({
        product: t,
        variantsQuantity: t.variants
    });
    return {
        id: t.id,
        thumbnail: t.thumbnail,
        title: t.title,
        href: d,
        price: g,
        oldPrice: h,
        isInStock: f
    }
}
  , Wu = () => {
    const {meta: t, ecommerceShoppingCart: n} = _t()
      , a = T(!1)
      , e = T("")
      , r = T(null)
      , o = u( () => t.value.ecommerceStoreId)
      , i = u( () => n.value?.translations || {})
      , s = u( () => r.value ? r.value.map(p => t_({
        result: p,
        ecommerceTranslations: i.value
    })) : null)
      , l = Jb(async () => {
        a.value = !0,
        e.value && o.value ? r.value = await Xb({
            query: e.value,
            indices: [dm],
            storeId: o.value
        }) : r.value = null,
        a.value = !1
    }
    , e_);
    return {
        updateSearchTerm: ({newValue: p}) => {
            e.value = p,
            l()
        }
        ,
        searchHandler: l,
        isSearchResultsLoading: a,
        searchTerm: e,
        searchResults: r,
        formattedSearchResults: s
    }
}
  , a_ = re({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
        data: {
            type: Object,
            required: !0
        },
        blockId: {
            type: String,
            required: !0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {siteId: e, ecommerceShoppingCart: r} = _t()
          , {isSearchResultsLoading: o, searchTerm: i, formattedSearchResults: s, updateSearchTerm: l} = Wu()
          , d = u( () => r.value?.translations || {})
          , {toggleSearchDropdown: p} = Go({
            blockId: a.blockId
        })
          , g = {
            props: a,
            siteId: e,
            ecommerceShoppingCart: r,
            isSearchResultsLoading: o,
            searchTerm: i,
            formattedSearchResults: s,
            updateSearchTerm: l,
            ecommerceTranslations: d,
            toggleSearchDropdown: p,
            SiteElementSearchBar: Gu
        };
        return Object.defineProperty(g, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        g
    }
});
function n_(t, n, a, e, r, o) {
    return m(),
    $(e.SiteElementSearchBar, {
        "placeholder-text": e.props.data.placeholderText,
        "no-results-text": e.props.data.noResultsText,
        "fill-color": e.props.data.fillColor,
        "fill-color-hover": e.props.data.fillColorHover,
        "text-and-icon-color": e.props.data.textAndIconColor,
        "text-and-icon-color-hover": e.props.data.textAndIconColorHover,
        "font-family": e.props.data.fontFamily,
        "border-color": e.props.data.borderColor,
        "border-color-hover": e.props.data.borderColorHover,
        "border-radius": e.props.data.borderRadius,
        "is-loading": e.isSearchResultsLoading,
        "result-item-hover-color": e.props.data.resultItemHoverColor,
        results: e.formattedSearchResults,
        "search-term": e.searchTerm,
        "site-id": e.siteId,
        translations: e.ecommerceTranslations,
        "onUpdate:searchTerm": n[0] || (n[0] = i => e.updateSearchTerm({
            newValue: i
        })),
        onIsDropdownOpen: e.toggleSearchDropdown
    }, null, 8, ["placeholder-text", "no-results-text", "fill-color", "fill-color-hover", "text-and-icon-color", "text-and-icon-color-hover", "font-family", "border-color", "border-color-hover", "border-radius", "is-loading", "result-item-hover-color", "results", "search-term", "site-id", "translations", "onIsDropdownOpen"])
}
const r_ = oe(a_, [["render", n_]])
  , Sr = T(!1)
  , Cr = T(!1)
  , Ti = T("")
  , Ii = T("")
  , qn = T(null)
  , Pi = T(!1)
  , $n = T(null)
  , dr = ({elementData: t, data: n, elementId: a, blockId: e}={}) => {
    const r = T(null)
      , o = T(null)
      , i = T(null)
      , s = t || n || {}
      , l = w => `transition transition--${w}`
      , d = u( () => {
        const w = a && mm.includes(s.type)
          , k = !a && !gm.includes(s.type);
        if (w || k)
            return "";
        const O = l(s.animation?.name);
        return pl.includes(s.type) ? `${O} transition--root-hidden` : O
    }
    )
      , p = u( () => {
        const w = qn.value && a === qn.value
          , k = $n.value && e === $n.value;
        return !Sr.value || qn.value && !w || $n.value && !k ? "" : Ti.value
    }
    )
      , g = u( () => Cr.value ? Fr : null)
      , h = async w => {
        w.forEach( ({target: k, isIntersecting: O}) => {
            if (!O) {
                k.removeAttribute(jr);
                return
            }
            i.value?.unobserve(k),
            k.setAttribute(jr, Fr)
        }
        )
    }
      , f = ({root: w=null}={}) => {
        s.animation?.name && (i.value = new IntersectionObserver(h,{
            threshold: 0,
            root: w
        }))
    }
      , _ = async w => {
        if (s.animation?.name)
            if (await Ot(),
            pl.includes(s.type)) {
                const k = w?.querySelectorAll(`[${Qa}="${ks}"]`)
                  , O = w?.querySelectorAll(`[${Qa}="${fr}"]`);
                [...k, ...O].forEach(R => i.value?.observe(R))
            } else
                i.value?.observe(w)
    }
      , A = () => {
        r.value && o.value && (window.clearTimeout(r.value),
        window.clearTimeout(o.value)),
        Sr.value = !1,
        Cr.value = !1
    }
      , E = ({animation: w, id: k=null, block: O=null}) => {
        A(),
        w !== "none" && ($n.value = O,
        qn.value = k,
        Ii.value = w,
        Sr.value = !0,
        Ti.value = l(Ii.value),
        r.value = setTimeout( () => {
            Cr.value = !0
        }
        , 500),
        o.value = setTimeout( () => {
            Sr.value = !1,
            Cr.value = !1,
            qn.value = null,
            $n.value = null
        }
        , 2e3))
    }
    ;
    return je(Pi, async w => {
        w && (await Ot(),
        Pi.value = !1)
    }
    ),
    {
        intersectionObserver: i,
        animationClass: d,
        animationInEditorClass: Ti,
        animationInEditorComponentId: qn,
        animationInEditorBlockId: $n,
        isAnimationDisplayedInEditor: Sr,
        isAnimationDisplayedInEditorActive: Cr,
        animationInEditorName: Ii,
        addIntersectionObserver: f,
        observe: _,
        displayAnimationInEditor: E,
        shouldMountAnimationsInPreview: Pi,
        customAnimationClass: p,
        animationAttributeStateValue: g,
        addTransition: h
    }
}
  , o_ = {
    __name: "LayoutElementProviderUser",
    props: {
        elementId: {
            type: String,
            required: !0
        },
        blockId: {
            type: String,
            required: !0
        },
        elementData: {
            type: Object,
            required: !0
        },
        overrideWidth: {
            type: Number,
            default: null
        },
        overrideHeight: {
            type: Number,
            default: null
        },
        isMobileLegacy: {
            type: Boolean,
            default: !1
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        siteLanguagePages: {
            type: Object,
            required: !0
        },
        stripePublicApiKey: {
            type: String,
            default: ""
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(k => ({
            "5b7a317c": f.value,
            "1b164342": _.value
        }));
        const a = t
          , e = T(null)
          , {intersectionObserver: r, animationClass: o, addIntersectionObserver: i, observe: s} = dr({
            elementData: a.elementData,
            elementId: a.elementId
        })
          , l = u( () => Object.values(a.siteLanguagePages)[0])
          , d = u( () => a.elementData.mobile?.isHidden || !1)
          , p = u( () => a.elementData.desktop?.isHidden || !1)
          , g = u( () => a.elementData.type !== pi ? "" : (a.siteLanguagePages[a.elementData.settings?.successPageId] || l.value).slug)
          , h = u( () => a.elementData.type !== pi ? "" : (a.siteLanguagePages[a.elementData.settings?.cancellationPageId] || l.value).slug)
          , f = u( () => `${a.elementData.desktop.height}px`)
          , _ = u( () => `${a.elementData.mobile.height}px`)
          , A = async () => {
            await s(e.value?.$el)
        }
          , E = async () => {
            const O = [vl, hl].includes(a.elementData.type)
              , R = e.value?.$el.getBoundingClientRect().height > window.innerHeight
              , Y = !O && R && e.value ? e.value.$el.parentElement : null;
            i({
                root: Y
            }),
            O || await A()
        }
        ;
        xe(async () => {
            await E()
        }
        ),
        Zt( () => r.value?.disconnect());
        const w = {
            props: a,
            elementRef: e,
            intersectionObserver: r,
            animationClass: o,
            addIntersectionObserver: i,
            observe: s,
            firstLanguagePage: l,
            isMobileElementHidden: d,
            isDesktopElementHidden: p,
            stripeSuccessPageSlug: g,
            stripeCancellationPageSlug: h,
            elementHeightDesktop: f,
            elementHeightMobile: _,
            observeElement: A,
            initiateAnimations: E,
            get ELEMENT_TYPE_BUTTON() {
                return nu
            },
            get ELEMENT_TYPE_STRIPE_BUTTON() {
                return pi
            },
            get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
                return pm
            },
            get ELEMENT_TYPE_MAP() {
                return Xc
            },
            get ELEMENT_TYPE_VIDEO() {
                return Jc
            },
            get ELEMENT_TYPE_IMAGE() {
                return vm
            },
            get ELEMENT_TYPE_TEXT_BOX() {
                return hm
            },
            get ELEMENT_TYPE_FORM() {
                return fm
            },
            get ELEMENT_TYPE_INSTAGRAM_FEED() {
                return vl
            },
            get ELEMENT_TYPE_SOCIAL_ICONS() {
                return ru
            },
            get ELEMENT_TYPE_GALLERY() {
                return hl
            },
            get ELEMENT_TYPE_EMBED() {
                return ym
            },
            get ELEMENT_TYPE_SHAPE() {
                return bm
            },
            get ELEMENT_TYPE_SEARCH_BAR() {
                return _m
            },
            LayoutElementWrapper: ah,
            GridButtonProviderUser: sh,
            GridEcommerceButtonProviderUser: vh,
            GridEmbedProviderUser: Ph,
            GridFormProviderUser: ff,
            GridGalleryProviderUser: xf,
            GridImageProviderUser: Vf,
            GridInstagramFeedProviderUser: sy,
            GridMapProviderUser: hy,
            GridSocialIconsProviderUser: Sy,
            GridStripeButtonProviderUser: Dy,
            GridTextBoxProviderUser: Ry,
            GridVideoProviderUser: ob,
            GridShapeProviderUser: mb,
            SiteElementSearchBarProviderSiteEngine: r_,
            get useSiteEngineAnimations() {
                return dr
            },
            computed: u,
            onMounted: xe,
            onBeforeUnmount: Zt,
            ref: T,
            get isSearchDropdownOpen() {
                return ts
            }
        };
        return Object.defineProperty(w, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        w
    }
};
function i_(t, n, a, e, r, o) {
    const i = st("qa");
    return le((m(),
    $(e.LayoutElementWrapper, {
        ref: "elementRef",
        class: J(["layout-element", [{
            "layout-element--desktop-element-hidden": e.isDesktopElementHidden,
            "layout-element--mobile-element-hidden": e.isMobileElementHidden
        }, e.animationClass]]),
        "element-data": a.elementData,
        "is-forced-on-top": e.isSearchDropdownOpen && a.elementData.type === e.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": a.isMobileLegacy
    }, {
        default: ye( () => [a.elementData.type === e.ELEMENT_TYPE_BUTTON ? le((m(),
        $(e.GridButtonProviderUser, {
            key: 0,
            id: a.elementId,
            data: a.elementData,
            "current-locale": a.currentLocale,
            "mobile-element-width": a.elementData.mobile.width,
            "mobile-element-height": a.elementData.mobile.height,
            class: "layout-element__component layout-element__component--GridButton"
        }, null, 8, ["id", "data", "current-locale", "mobile-element-width", "mobile-element-height"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_STRIPE_BUTTON ? le((m(),
        $(e.GridStripeButtonProviderUser, {
            key: 1,
            id: a.elementId,
            data: a.elementData,
            "success-page-slug": e.stripeSuccessPageSlug,
            "cancellation-page-slug": e.stripeCancellationPageSlug,
            "stripe-public-api-key": a.stripePublicApiKey,
            class: "layout-element__component layout-element__component--GridStripeButton"
        }, null, 8, ["id", "data", "success-page-slug", "cancellation-page-slug", "stripe-public-api-key"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_ECOMMERCE_BUTTON ? le((m(),
        $(e.GridEcommerceButtonProviderUser, {
            key: 2,
            id: a.elementId,
            data: a.elementData,
            "is-cart-visible": a.isCartVisible,
            "mobile-element-width": a.elementData.mobile.width,
            "mobile-element-height": a.elementData.mobile.height,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridEcommerceButton"
        }, null, 8, ["id", "data", "is-cart-visible", "mobile-element-width", "mobile-element-height", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_FORM ? le((m(),
        $(e.GridFormProviderUser, {
            key: 3,
            id: a.elementId,
            data: a.elementData,
            "current-locale": a.currentLocale,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridForm"
        }, null, 8, ["id", "data", "current-locale", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_VIDEO ? le((m(),
        $(e.GridVideoProviderUser, {
            key: 4,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridVideo"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_TEXT_BOX ? le((m(),
        $(e.GridTextBoxProviderUser, {
            key: 5,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridTextBox"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_MAP ? le((m(),
        $(e.GridMapProviderUser, {
            key: 6,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridMap"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_SOCIAL_ICONS ? le((m(),
        $(e.GridSocialIconsProviderUser, {
            key: 7,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridSocialIcons"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_GALLERY ? le((m(),
        $(e.GridGalleryProviderUser, {
            key: 8,
            id: a.elementId,
            data: a.elementData,
            "element-width": a.elementData.desktop.width,
            "element-height": a.elementData.desktop.height,
            class: "layout-element__component layout-element__component--GridGallery",
            onImageLoad: e.observeElement
        }, null, 8, ["id", "data", "element-width", "element-height"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_IMAGE ? le((m(),
        $(e.GridImageProviderUser, {
            key: 9,
            id: a.elementId,
            lcp: a.lcp,
            data: a.elementData,
            "mobile-element-width": a.elementData.mobile.width,
            "mobile-element-height": a.elementData.mobile.height,
            "element-width": a.elementData.desktop.width,
            "element-height": a.elementData.desktop.height,
            "reset-mobile-position": a.isMobileLegacy,
            "current-locale": a.currentLocale,
            "mobile-border-radius": a.elementData.mobile.borderRadius,
            "desktop-border-radius": a.elementData.desktop.borderRadius,
            "shape-mask-source": a.elementData.shapeMaskSource,
            "overlay-opacity": a.elementData.overlayOpacity,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridImage"
        }, null, 8, ["id", "lcp", "data", "mobile-element-width", "mobile-element-height", "element-width", "element-height", "reset-mobile-position", "current-locale", "mobile-border-radius", "desktop-border-radius", "shape-mask-source", "overlay-opacity", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_INSTAGRAM_FEED ? le((m(),
        $(e.GridInstagramFeedProviderUser, {
            key: 10,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridInstagramFeed",
            onMediaLoaded: e.observeElement
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_EMBED ? le((m(),
        $(e.GridEmbedProviderUser, {
            key: 11,
            id: a.elementId,
            data: a.elementData,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridEmbed"
        }, null, 8, ["id", "data", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_SHAPE ? le((m(),
        $(e.GridShapeProviderUser, {
            key: 12,
            id: a.elementId,
            data: a.elementData,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridShape"
        }, null, 8, ["id", "data", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_SEARCH_BAR ? le((m(),
        $(e.SiteElementSearchBarProviderSiteEngine, {
            key: 13,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component",
            "block-id": a.blockId
        }, null, 8, ["id", "data", "block-id"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), ne(t.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 8, ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"])), [[i, `layout-element-wrapper:${a.elementId}`]])
}
const s_ = oe(o_, [["render", i_], ["__scopeId", "data-v-5567603e"]])
  , l_ = {
    __name: "BlockLayoutProviderUser",
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        components: {
            type: Object,
            default: () => ({})
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        siteLanguagePages: {
            type: Object,
            required: !0
        },
        stripePublicApiKey: {
            type: String,
            default: ""
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {isSearchOpenedInCurrentBlock: e} = Go({
            blockId: a.blockId
        })
          , {components: r} = Yi(a)
          , o = u( () => a.data)
          , {layoutElements: i, layoutCSSVars: s, isMobileLegacy: l} = ns({
            blockData: o,
            siteElements: r,
            shouldBuildResponsive: !a.isInPreviewMode
        })
          , d = {
            props: a,
            isSearchOpenedInCurrentBlock: e,
            siteElements: r,
            blockData: o,
            layoutElements: i,
            layoutCSSVars: s,
            isMobileLegacy: l,
            toRefs: Yi,
            computed: u,
            get useSearchElementDropdown() {
                return Go
            },
            BlockLayoutWrapper: qv,
            get useBlockLayout() {
                return ns
            },
            LayoutElementProviderUser: s_
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
};
function c_(t, n, a, e, r, o) {
    return m(),
    $(e.BlockLayoutWrapper, {
        ref: "blockLayout",
        style: ze(e.layoutCSSVars),
        "is-mobile-legacy": e.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": e.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, {
        default: ye( () => [(m(!0),
        y(pe, null, Me(e.layoutElements, i => (m(),
        $(e.LayoutElementProviderUser, {
            key: i.elementId,
            "is-mobile-legacy": e.isMobileLegacy,
            "element-id": i.elementId,
            "element-data": i,
            lcp: a.lcp,
            "is-cart-visible": a.isCartVisible,
            "current-locale": a.currentLocale,
            "site-language-pages": a.siteLanguagePages,
            "stripe-public-api-key": a.stripePublicApiKey,
            "block-id": a.blockId,
            "is-in-preview-mode": e.props.isInPreviewMode
        }, null, 8, ["is-mobile-legacy", "element-id", "element-data", "lcp", "is-cart-visible", "current-locale", "site-language-pages", "stripe-public-api-key", "block-id", "is-in-preview-mode"]))), 128))]),
        _: 1
    }, 8, ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"])
}
const u_ = oe(l_, [["render", c_]])
  , d_ = re({
    __name: "ZyroPagination",
    props: {
        currentPage: {},
        pageCount: {},
        color: {
            default: null
        }
    },
    emits: ["change-page"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = u( () => ({
            "--button-color": e.color
        }))
          , i = u( () => {
            if (5 > e.pageCount)
                return [...new Array(e.pageCount + 1).keys()].slice(1);
            const d = 4 / 2
              , p = Array.from({
                length: 4
            }).fill(0);
            if (e.currentPage <= d + 1) {
                p[0] = 1;
                const h = p.map( (f, _) => p[0] + _);
                return h.push(e.pageCount),
                h
            }
            if (e.currentPage >= e.pageCount - d + 1) {
                const h = p.map( (f, _) => e.pageCount - _);
                return h.reverse().unshift(1),
                h
            }
            p[0] = e.currentPage - d + 1;
            const g = p.map( (h, f) => p[0] + f);
            return g.unshift(1),
            g[g.length - 1] = e.pageCount,
            g
        }
        )
          , s = {
            props: e,
            emit: r,
            computedStyle: o,
            paginationTriggersList: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
})
  , qu = t => (sa("data-v-b1b387fa"),
t = t(),
la(),
t)
  , m_ = ["disabled"]
  , g_ = qu( () => P("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M7 1L1 7L7 13",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , p_ = [g_]
  , v_ = ["data-testId", "disabled", "onClick"]
  , h_ = ["disabled"]
  , f_ = qu( () => P("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M1 13L7 7L1 1",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , y_ = [f_];
function b_(t, n, a, e, r, o) {
    return a.pageCount > 1 ? (m(),
    y("div", {
        key: 0,
        class: "pagination",
        style: ze(e.computedStyle)
    }, [P("button", {
        disabled: a.currentPage === 1,
        class: "pagination__button",
        "data-testId": "button-previous",
        onClick: n[0] || (n[0] = i => e.emit("change-page", Math.max(1, a.currentPage - 1)))
    }, p_, 8, m_), (m(!0),
    y(pe, null, Me(e.paginationTriggersList, i => (m(),
    y("button", {
        key: `${i}-trigger`,
        class: J(["pagination__button pagination__trigger", {
            "pagination__trigger--current": i === a.currentPage
        }]),
        "data-testId": `button-${i}`,
        disabled: a.currentPage === i,
        onClick: s => e.emit("change-page", i)
    }, te(i), 11, v_))), 128)), P("button", {
        disabled: a.currentPage === a.pageCount,
        class: "pagination__button",
        "data-testId": "button-next",
        onClick: n[1] || (n[1] = i => e.emit("change-page", Math.min(a.pageCount, a.currentPage + 1)))
    }, y_, 8, h_)], 4)) : x("", !0)
}
const $u = oe(d_, [["render", b_], ["__scopeId", "data-v-b1b387fa"]])
  , ls = 1800
  , __ = 1080
  , cc = 100
  , w_ = {
    __name: "BlockBlogListItem",
    props: {
        post: {
            type: Object,
            default: () => ({})
        },
        authorName: {
            type: String,
            default: null
        },
        shownItems: {
            type: Object,
            default: () => ({
                authorFullName: !0,
                coverImage: !0,
                title: !0,
                description: !0,
                date: !0,
                categories: !0,
                avatar: !0,
                minutesToRead: !0
            })
        },
        coverObjectFit: {
            type: String,
            default: "cover"
        },
        cursor: {
            type: String,
            default: "pointer"
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        },
        isAnimationActive: {
            type: Boolean,
            default: !1
        },
        blogReadingTimeText: {
            type: [String, void 0],
            default: void 0
        },
        blogTitleTextSize: {
            type: Number,
            default: 24
        }
    },
    emits: ["post-click", "filter-category"],
    setup(t, {expose: n}) {
        n(),
        ft(g => ({
            "9f566116": r.value
        }));
        const a = t
          , e = T()
          , r = u( () => `${a.blogTitleTextSize}px`)
          , o = u( () => a.post?.coverImageAlt ?? "")
          , i = u( () => jo(ls, null))
          , s = u( () => a.post?.categories ?? [])
          , l = u( () => !!a.shownItems.coverImage && (a.post?.coverImageSrc || a.post?.coverImageSrcset))
          , d = u( () => {
            const g = e.value?.getBoundingClientRect();
            if (!g || !window || !document)
                return !0;
            const {top: h} = g
              , {innerHeight: f} = window
              , {clientHeight: _} = document.documentElement;
            return h <= (f || _) + cc
        }
        )
          , p = {
            props: a,
            VERTICAL_VIEWPORT_OFFSET: cc,
            coverImageContainerRef: e,
            blogTitleTextSize: r,
            coverImageAlt: o,
            sizes: i,
            categories: s,
            isCoverImageShown: l,
            isElementInViewport: d,
            BlockBlogListItemCategories: Iu,
            BlockBlogListItemMeta: Pu,
            get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
                return ls
            },
            get getFormattedNumericDate() {
                return Eu
            },
            get getGridItemSizes() {
                return jo
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE() {
                return Qa
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
                return fr
            },
            get DATA_ATTRIBUTE_ANIMATION_STATE() {
                return jr
            },
            get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
                return Fr
            },
            computed: u,
            ref: T
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
}
  , k_ = ["href"]
  , S_ = {
    class: "block-blog-list-item__cover-image-wrapper"
}
  , C_ = ["alt", "src", "srcset", "sizes", "loading"]
  , T_ = ["href"];
function I_(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", dt({
        class: "block-blog-list-item",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: a.isAnimationActive ? e.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE : null
    }), [ne(t.$slots, "block-blog-list-item-overlay", {}, void 0, !0), e.isCoverImageShown ? le((m(),
    y("a", {
        key: 0,
        ref: "coverImageContainerRef",
        href: a.post.slug,
        class: "block-blog-list-item__cover-image-container",
        onClick: n[0] || (n[0] = Re(s => t.$emit("post-click"), ["prevent"]))
    }, [P("div", S_, [P("img", {
        class: "block-blog-list-item__cover-image",
        alt: e.coverImageAlt,
        src: a.post.coverImageSrc,
        srcset: a.post.coverImageSrcset,
        sizes: e.sizes,
        loading: e.isElementInViewport ? void 0 : "lazy"
    }, null, 8, C_)])], 8, k_)), [[i, "blog-list-item-image"]]) : x("", !0), le(Le(e.BlockBlogListItemCategories, {
        class: "font-secondary",
        categories: e.categories,
        "blog-categories": a.blogCategories,
        onFilterCategory: n[1] || (n[1] = s => t.$emit("filter-category", s))
    }, null, 8, ["categories", "blog-categories"]), [[ma, a.shownItems.categories && e.categories.length]]), P("a", {
        class: "block-blog-list-item__content",
        href: a.post.slug,
        onClick: n[2] || (n[2] = Re(s => t.$emit("post-click"), ["prevent"]))
    }, [le(P("h3", {
        class: "font-primary block-blog-list-item__title"
    }, te(a.post.meta.title), 513), [[ma, a.shownItems.title]]), le(P("p", {
        class: "block-blog-list-item__description font-secondary"
    }, te(a.post.meta.description), 513), [[ma, a.shownItems.description]]), Le(e.BlockBlogListItemMeta, et({
        authorName: a.authorName,
        minutesAmount: a.post.minutesToRead,
        date: e.getFormattedNumericDate(a.post.date),
        showAvatar: a.shownItems.avatar,
        showName: a.shownItems.authorFullName,
        showDate: a.shownItems.date,
        showMinutes: a.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": a.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])], 8, T_)], 16)
}
const P_ = oe(w_, [["render", I_], ["__scopeId", "data-v-cf99ac1e"]])
  , E_ = "Show all posts"
  , uc = 46
  , dc = 24
  , D_ = {
    __name: "BlockBlogList",
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        posts: {
            type: Object,
            default: () => ({})
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        },
        blogReadingTimeText: {
            type: [String, void 0],
            default: void 0
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["post-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(O => ({
            "76b1e704": d.value,
            "482abca0": l.value
        }));
        const e = t
          , r = a
          , o = T(0)
          , i = T(null)
          , s = T(!1)
          , l = u( () => Number.parseInt(e.data.settings.postColumnCount, 10))
          , d = u( () => `${uc}px`)
          , p = u( () => e.data.settings.blogTitleFontSize || dc)
          , g = u( () => {
            const {categories: O, showAllPosts: I, showWithoutCategories: R} = e.data.settings
              , Y = I ? e.posts : Object.fromEntries(Object.entries(e.posts).filter( ([,G]) => {
                const X = O.some(D => G.categories.includes(D));
                return R && G.categories.length === 0 || X
            }
            ));
            return i.value ? Object.fromEntries(Object.entries(Y).filter( ([,G]) => G.categories.includes(i.value))) : Y
        }
        )
          , h = u( () => {
            const O = new Date().setHours(0, 0, 0, 0);
            return Object.fromEntries(Object.entries(g.value).filter( ([,I]) => {
                if (I?.isScheduled) {
                    const R = new Date(I.date).setHours(0, 0, 0, 0);
                    return R && O >= R && !I.isDraft
                }
                return !I.isDraft
            }
            ))
        }
        )
          , f = u( () => Object.values(h.value).sort( (O, I) => Date.parse(I.date) - Date.parse(O.date)))
          , _ = u( () => f.value.slice((o.value > 0 ? o.value - 1 : 0) * e.data.settings.postsPerPage, o.value * e.data.settings.postsPerPage))
          , A = u( () => Math.ceil(Object.keys(h.value).length / e.data.settings.postsPerPage))
          , E = () => {
            const O = new URLSearchParams(window.location.search)
              , I = Number.parseInt(O.get("page"), 10) || 1;
            I !== o.value && (o.value = I)
        }
          , w = O => {
            o.value = O,
            s.value = !0;
            const I = new URL(window.location);
            I.searchParams.set("page", o.value),
            window.history.pushState(null, "", I.toString()),
            Oo({
                linkToSection: `#${e.blockId}`,
                isPreviewMode: e.isInPreviewMode
            })
        }
        ;
        je(_, O => {
            O.length === 0 && o.value > 1 && (o.value -= 1)
        }
        ),
        je(i, () => {
            s.value = !0
        }
        ),
        xe( () => {
            e.isInPreviewMode && setTimeout( () => {
                s.value = !0
            }
            , 100);
            const O = new URLSearchParams(window.location.search)
              , I = Number.parseInt(O.get("page"), 10) || 1;
            o.value !== I && (o.value = I),
            window.addEventListener("popstate", () => {
                E()
            }
            )
        }
        ),
        Zt( () => {
            window.removeEventListener("popstate", E)
        }
        );
        const k = {
            SHOW_ALL_POSTS_LABEL: E_,
            BLOG_LIST_PADDING_X: uc,
            props: e,
            emit: r,
            currentPage: o,
            filteredCategoryId: i,
            isAnimationActive: s,
            postColumnCount: l,
            blogListPaddingXCssVar: d,
            BLOG_TITLE_FONT_SIZE_FALLBACK: dc,
            blogTitleTextSize: p,
            postsToRender: g,
            activePostsToRender: h,
            sortedPosts: f,
            currentPageItems: _,
            pageCount: A,
            handleBrowserNavigationPageChange: E,
            setCurrentPage: w,
            get scrollToSection() {
                return Oo
            },
            ZyroPagination: $u,
            BlockBlogListItem: P_,
            ref: T,
            onMounted: xe,
            onBeforeUnmount: Zt,
            computed: u,
            watch: je
        };
        return Object.defineProperty(k, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        k
    }
}
  , A_ = ["id"]
  , M_ = {
    key: 0,
    class: "block-blog-list__filter"
}
  , O_ = {
    key: 2,
    class: "block-blog-list__empty-block"
};
function x_(t, n, a, e, r, o) {
    const i = st("qa");
    return le((m(),
    y("div", {
        id: a.blockId,
        ref: "blogList",
        class: "block-blog-list"
    }, [e.filteredCategoryId ? (m(),
    y("div", M_, [$e(te(a.blogCategories[e.filteredCategoryId].name) + " ", 1), P("button", {
        class: "block-blog-list__filter-button",
        onClick: n[0] || (n[0] = s => e.filteredCategoryId = null)
    }, te(e.SHOW_ALL_POSTS_LABEL))])) : x("", !0), e.currentPageItems.length ? (m(),
    y("div", {
        key: 1,
        class: J(["block-blog-list__list", {
            "block-blog-list__list--one-col": e.postColumnCount === 1
        }])
    }, [(m(!0),
    y(pe, null, Me(e.currentPageItems, (s, l) => le((m(),
    $(e.BlockBlogListItem, {
        key: `post-${l}`,
        post: s,
        "author-name": s.meta.authorName,
        "cover-object-fit": a.data.settings.styles["cover-object-fit"],
        "shown-items": a.data.settings.shownItems,
        "blog-categories": a.blogCategories,
        "is-animation-active": e.isAnimationActive,
        "blog-reading-time-text": a.blogReadingTimeText,
        "blog-title-text-size": e.blogTitleTextSize,
        onFilterCategory: n[1] || (n[1] = d => e.filteredCategoryId = d),
        onPostClick: d => e.emit("post-click", s)
    }, {
        "block-blog-list-item-overlay": ye( () => [ne(t.$slots, "block-blog-list-overlay", {
            post: s
        }, void 0, !0)]),
        _: 2
    }, 1032, ["post", "author-name", "cover-object-fit", "shown-items", "blog-categories", "is-animation-active", "blog-reading-time-text", "blog-title-text-size", "onPostClick"])), [[i, "blog-list-item"]])), 128))], 2)) : (m(),
    y("div", O_, [ne(t.$slots, "block-blog-list-empty-block", {}, void 0, !0)])), Le(e.ZyroPagination, {
        class: "block-blog-list__pagination",
        "current-page": e.currentPage,
        "page-count": e.pageCount,
        onChangePage: e.setCurrentPage
    }, null, 8, ["current-page", "page-count"])], 8, A_)), [[i, "builder-section-blog"]])
}
const B_ = oe(D_, [["render", x_], ["__scopeId", "data-v-91ca82a4"]])
  , L_ = re({
    name: "BlockBlogListProviderUser",
    components: {
        BlockBlogList: B_
    },
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        currentLocale: {
            type: String,
            default: gn
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup() {
        const {blogReadingTimeText: t, siteId: n, pages: a, blogCategories: e, meta: r} = _t();
        return {
            blogReadingTimeText: t,
            siteId: n,
            pages: a,
            blogCategories: e,
            meta: r
        }
    },
    computed: {
        publishedBlogPages() {
            return Object.fromEntries(Object.entries(this.pages).filter( ([,t]) => t.type === qi && !t.isDraft))
        },
        blogPosts() {
            const t = this.currentLocale === this.meta.defaultLocale;
            return Object.fromEntries(Object.entries(this.publishedBlogPages).map( ([n,a]) => {
                const e = En(a.coverImageOrigin, a.coverImagePath, this.siteId, {
                    width: ls,
                    height: __
                });
                return [n, {
                    id: n,
                    ...a,
                    coverImageSrcset: e,
                    slug: `/${t ? "" : `${this.currentLocale}/`}${a.slug}`
                }]
            }
            ))
        }
    }
});
function R_(t, n, a, e, r, o) {
    const i = mt("BlockBlogList");
    return m(),
    $(i, {
        data: t.data,
        "block-id": t.blockId,
        posts: t.blogPosts,
        "blog-categories": t.blogCategories,
        "blog-reading-time-text": t.blogReadingTimeText,
        "is-in-preview-mode": t.isInPreviewMode
    }, null, 8, ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text", "is-in-preview-mode"])
}
const N_ = oe(L_, [["render", R_]])
  , Ns = re({
    props: {
        columnCount: {
            type: Number,
            default: 3
        },
        imageRatio: {
            type: String,
            default: "original"
        },
        isCategoryListEnabled: {
            type: Boolean,
            default: !1
        },
        isFullWidth: {
            type: Boolean,
            default: !1
        }
    }
})
  , mc = () => {
    ft(t => ({
        "1bed821c": t.columnCount
    }))
}
  , gc = Ns.setup;
Ns.setup = gc ? (t, n) => (mc(),
gc(t, n)) : mc;
const zu = t => (sa("data-v-4ad892a8"),
t = t(),
la(),
t)
  , H_ = {
    key: 0,
    class: "skeleton-loader__categories"
}
  , V_ = {
    class: "skeleton-loader__wrapper"
}
  , U_ = {
    key: 0,
    class: "skeleton-loader__category"
}
  , F_ = {
    class: "skeleton-loader__list"
}
  , j_ = zu( () => P("div", {
    class: "skeleton-loader__text"
}, null, -1))
  , G_ = zu( () => P("div", {
    class: "skeleton-loader__text"
}, null, -1));
function Y_(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["skeleton-loader", {
            "skeleton-loader--full-width": t.isFullWidth
        }])
    }, [t.isCategoryListEnabled ? (m(),
    y("div", H_)) : x("", !0), P("div", V_, [t.isCategoryListEnabled ? (m(),
    y("div", U_)) : x("", !0), P("div", F_, [(m(!0),
    y(pe, null, Me(t.columnCount, i => (m(),
    y("div", {
        key: i,
        class: "skeleton-loader__item"
    }, [P("div", {
        class: J(["skeleton-loader__image-placeholder", `skeleton-loader__image-placeholder--${t.imageRatio}`])
    }, null, 2), j_, G_]))), 128))])])], 2)
}
const W_ = oe(Ns, [["render", Y_], ["__scopeId", "data-v-4ad892a8"]])
  , q_ = re({
    props: {
        textColorVars: {
            type: Object,
            default: () => ({})
        },
        emptyPageMessage: {
            type: String,
            required: !0
        }
    },
    computed: {
        computedStyles() {
            return {
                ...ga(this.textColorVars)
            }
        }
    }
})
  , $_ = P("svg", {
    class: "product-list-empty-state__icon",
    width: "41",
    height: "40",
    viewBox: "0 0 41 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), P("path", {
    d: "M5.5 10H35.5",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), P("path", {
    d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1);
function z_(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "product-list-empty-state",
        style: ze(t.computedStyles)
    }, [$_, P("h6", null, te(t.emptyPageMessage), 1)], 4)
}
const Z_ = oe(q_, [["render", z_]])
  , K_ = {
    props: {
        text: {
            type: String,
            default: ""
        },
        ribbonStyle: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        computedStyles() {
            return {
                ...ga(this.ribbonStyle)
            }
        }
    }
}
  , Q_ = {
    class: "ecommerce-product-ribbon__text"
};
function X_(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "ecommerce-product-ribbon",
        style: ze(o.computedStyles)
    }, [P("p", Q_, te(a.text), 1)], 4)
}
const J_ = oe(K_, [["render", X_]])
  , e0 = re({
    __name: "ProductListItem",
    props: {
        id: {},
        imageUrl: {},
        secondaryImage: {},
        title: {},
        price: {
            default: null
        },
        textAlign: {
            default: "left"
        },
        isEager: {
            type: Boolean,
            default: !1
        },
        imageWidth: {},
        imageHeight: {},
        duration: {},
        productType: {
            default: rt.PHYSICAL
        },
        translations: {
            default: () => ({})
        },
        isStoreQuantityTracked: {
            type: Boolean
        },
        quantity: {},
        isButtonEnabled: {
            type: Boolean,
            default: !1
        },
        buttonDisplay: {
            default: ""
        },
        buttonText: {
            default: ""
        },
        buttonStyle: {
            default: () => ({})
        },
        buttonType: {
            default: "primary"
        },
        buttonBorderWidth: {
            default: 0
        },
        isPriceRangeShown: {
            type: Boolean
        },
        ribbon: {
            default: ""
        },
        ribbonStyle: {
            default: () => ({})
        },
        siteId: {
            default: ""
        },
        isPurchasable: {
            type: Boolean
        },
        imageRatio: {
            default: da.COVER
        },
        imageHoverEffect: {},
        imageBorderRadius: {},
        isMobileView: {
            type: Boolean
        },
        isButtonFullWidth: {
            type: Boolean
        },
        isCartVisible: {
            type: Boolean,
            default: !0
        },
        isAddToCartDisabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["button-click"],
    setup(t, {expose: n}) {
        n(),
        ft(q => ({
            "020dccbc": Y.value,
            "3c7ccb35": w.value
        }));
        const a = {
            [Qa]: fr
        }
          , e = `${Ht}/placeholder.png`
          , r = t
          , o = T()
          , i = T(!1)
          , s = u( () => r.imageHoverEffect === on.SWAP_IMAGE && r.secondaryImage?.url ? r.secondaryImage?.url : null)
          , l = u( () => !r.isStoreQuantityTracked || r.quantity > 0)
          , d = u( () => r.productType === rt.BOOKING)
          , p = u( () => Ps.includes(r.productType))
          , g = u( () => p.value && !r.price?.amount)
          , h = u( () => r.productType === rt.DIGITAL && !r.price?.amount)
          , f = u( () => r.buttonText ? r.buttonText : d.value ? r.translations?.bookNow || "Book now" : h.value && !r.isCartVisible ? r.translations?.download || "Download" : r.translations?.addToBag || "Add to bag")
          , _ = u( () => ({
            normal: r.buttonStyle[`grid-button-${r.buttonType}-border-color`],
            hover: r.buttonStyle[`grid-button-${r.buttonType}-border-color-hover`]
        }))
          , A = u( () => ({
            normal: r.buttonStyle[`grid-button-${r.buttonType}-background-color`],
            hover: r.buttonStyle[`grid-button-${r.buttonType}-background-color-hover`]
        }))
          , E = u( () => ({
            ...ga(r.buttonStyle)
        }))
          , w = u( () => r.imageRatio === da.CONTAIN ? "contain" : "cover")
          , k = u( () => r.secondaryImage?.url && i.value && r.imageHoverEffect === on.SWAP_IMAGE)
          , O = u( () => k.value ? r.secondaryImage?.url || "" : r.imageUrl || e)
          , I = u( () => k.value ? r.secondaryImage?.type : Br.IMAGE)
          , R = u( () => r.imageHoverEffect === on.ZOOM && i.value)
          , Y = u( () => r.imageRatio === da.CONTAIN ? "0%" : r.imageBorderRadius)
          , G = u( () => g.value ? r.translations?.free || "Free" : bn({
            amount: r.price?.amount,
            currency: r.price?.currency
        }));
        je( () => r.imageHoverEffect, q => {
            r.isMobileView || (clearTimeout(o.value),
            q === on.SWAP_IMAGE ? (i.value = !0,
            o.value = setTimeout( () => {
                i.value = !1
            }
            , 1e3)) : q === on.ZOOM ? (i.value = !0,
            o.value = setTimeout( () => {
                i.value = !1
            }
            , 1e3)) : i.value = !1)
        }
        );
        const X = {
            CUSTOM_ATTRIBUTES: a,
            PRODUCT_PLACEHOLDER_IMAGE: e,
            props: r,
            animationTimeout: o,
            isProductHovered: i,
            secondaryImageSrc: s,
            isInStock: l,
            isProductTypeBooking: d,
            isFreeTypeProduct: p,
            isFreeTypeProductFree: g,
            isFreeDigitalProduct: h,
            blockButtonText: f,
            buttonBorderColor: _,
            buttonBackgroundColor: A,
            computedStyles: E,
            objectFit: w,
            isSecodaryImageShown: k,
            imageSrc: O,
            mediaType: I,
            isImageZoomedIn: R,
            imageBorderRadius: Y,
            formattedPrice: G,
            GridButton: Un,
            get EcommerceProductType() {
                return rt
            },
            get ImageHoverEffect() {
                return on
            },
            get formatPrice() {
                return bn
            },
            ProductMediaElement: ai,
            ProductRibbon: J_
        };
        return Object.defineProperty(X, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        X
    }
})
  , t0 = {
    class: "product-list-item__details"
}
  , a0 = {
    class: "product-list-item__title"
}
  , n0 = {
    key: 0,
    class: "product-list-item__price-range"
}
  , r0 = {
    key: 0,
    class: "product-list-item__price-content"
}
  , o0 = {
    key: 1,
    class: "product-list-item__duration"
}
  , i0 = {
    key: 1,
    class: "product-list-item__text"
};
function s0(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", et({
        class: ["product-list-item", `product-list-item--${a.textAlign}`],
        style: e.computedStyles
    }, e.CUSTOM_ATTRIBUTES), [P("div", {
        class: "product-list-item__content",
        onMouseenter: n[0] || (n[0] = s => e.isProductHovered = !a.isMobileView),
        onMouseleave: n[1] || (n[1] = s => e.isProductHovered = !1)
    }, [a.ribbon ? (m(),
    $(e.ProductRibbon, {
        key: 0,
        text: a.ribbon,
        "ribbon-style": a.ribbonStyle
    }, null, 8, ["text", "ribbon-style"])) : x("", !0), le((m(),
    y("div", {
        class: J(`
					product-list-item__image-wrapper
					product-list-item__image-wrapper--${a.imageRatio}
					${a.imageHoverEffect === e.ImageHoverEffect.NO_EFFECT ? "product-list-item__image-wrapper--bg-animation" : ""}
				`)
    }, [Le(e.ProductMediaElement, {
        src: e.imageSrc,
        "secondary-image-src": e.secondaryImageSrc,
        "media-type": e.mediaType,
        alt: a.title,
        class: J(`
						product-list-item__image
						product-list-item__image ${e.isImageZoomedIn ? "product-list-item__image--zoomed-in" : ""}
						${a.imageHoverEffect === e.ImageHoverEffect.ZOOM ? "product-list-item__image--zoom-animation" : ""}
					`),
        "is-eager": a.isEager,
        width: a.imageWidth,
        height: a.imageHeight,
        "site-id": a.siteId,
        "object-fit": e.objectFit,
        "image-ratio": a.imageRatio,
        "enable-srcset": "",
        "is-video-disabled": "",
        "is-lossless": !0
    }, null, 8, ["src", "secondary-image-src", "media-type", "alt", "class", "is-eager", "width", "height", "site-id", "object-fit", "image-ratio"])], 2)), [[i, "product-list-section-item-image"]]), P("div", t0, [le((m(),
    y("h6", a0, [$e(te(a.title), 1)])), [[i, "product-list-section-item-title"]]), a.price ? le((m(),
    y("div", {
        key: 0,
        class: J(["product-list-item__price-wrapper", {
            "product-list-item__price-wrapper--with-booking": a.productType === e.EcommerceProductType.BOOKING
        }])
    }, [e.isInStock ? (m(),
    y(pe, {
        key: 0
    }, [P("p", null, [a.isPriceRangeShown && !a.price.sale_amount ? (m(),
    y("span", n0, te(a.translations.from), 1)) : x("", !0), P("span", {
        class: J({
            "product-list-item__price": a.price.sale_amount,
            "product-list-item__booking-price": a.productType === e.EcommerceProductType.BOOKING
        })
    }, te(e.formattedPrice), 3)]), a.price.sale_amount ? (m(),
    y("p", r0, [a.isPriceRangeShown ? (m(),
    y(pe, {
        key: 0
    }, [$e(te(a.translations.from), 1)], 64)) : x("", !0), $e(" " + te(e.formatPrice({
        amount: a.price.sale_amount,
        currency: a.price.currency
    })), 1)])) : x("", !0), a.productType === e.EcommerceProductType.BOOKING ? (m(),
    y("p", o0, te(a.duration), 1)) : x("", !0)], 64)) : (m(),
    y("p", i0, te(a.translations.soldOut), 1))], 2)), [[i, "product-list-section-item-price"]]) : x("", !0)])], 32), a.isButtonEnabled && a.isPurchasable ? (m(),
    y("div", {
        key: 0,
        class: J(["product-list-item__button-wrapper", {
            "product-list-item__button-wrapper--hidden": !e.isInStock,
            "product-list-item__button-wrapper--with-hover": a.buttonDisplay === "hover"
        }]),
        onClick: n[3] || (n[3] = Re( () => {}
        , ["prevent", "stop"]))
    }, [le(Le(e.GridButton, {
        type: a.buttonType,
        content: e.blockButtonText,
        class: J(["product-list-item__button", [`product-list-item__button--${a.buttonType}`, {
            "product-list-item__button--full-width": a.isButtonFullWidth
        }]]),
        "tag-name": "button",
        disabled: a.isAddToCartDisabled,
        "border-width": a.buttonBorderWidth,
        "border-color": e.buttonBorderColor.normal,
        "border-color-hover": e.buttonBorderColor.hover,
        "background-color": e.buttonBackgroundColor.normal,
        "background-color-hover": e.buttonBackgroundColor.hover,
        onClick: n[2] || (n[2] = s => t.$emit("button-click"))
    }, null, 8, ["type", "content", "class", "disabled", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [[i, "productlistsection-btn-addtobag"]])], 2)) : x("", !0)], 16)
}
const l0 = oe(e0, [["render", s0], ["__scopeId", "data-v-97b06111"]])
  , c0 = re({
    __name: "ProductSortDropdown",
    props: {
        productSorting: {},
        sorting: {},
        translations: {}
    },
    emits: ["sort-changed"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = u( () => ({
            color: e.productSorting.textColor || "#000"
        }))
          , i = {
            props: e,
            emit: r,
            computedSelectStyles: o
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , u0 = {
    class: "product-list-sorting"
}
  , d0 = {
    class: "product-list-sorting__select-wrapper"
}
  , m0 = ["value"]
  , g0 = ["value"];
function p0(t, n, a, e, r, o) {
    return m(),
    y("div", u0, [P("label", {
        for: "sorting-options",
        style: ze(e.computedSelectStyles),
        class: "product-list-sorting__label"
    }, te(a.translations.sortBy) + ": ", 5), P("div", d0, [P("select", {
        id: "sorting-options",
        class: "product-list-sorting__select",
        value: e.props.sorting,
        style: ze(e.computedSelectStyles),
        onChange: n[0] || (n[0] = i => e.emit("sort-changed", i))
    }, [(m(!0),
    y(pe, null, Me(a.productSorting.sortingOptions, i => (m(),
    y("option", {
        key: i.id,
        value: i.value
    }, te(a.translations[i.id]), 9, g0))), 128))], 44, m0)])])
}
const v0 = oe(c0, [["render", p0], ["__scopeId", "data-v-b7b2b138"]])
  , Zu = t => {
    const n = new URL(window.location.href);
    return t ? n.searchParams.set("category", t) : n.searchParams.delete("category"),
    n.href
}
  , h0 = re({
    __name: "CategoryList",
    props: {
        categories: {},
        currentCategoryId: {
            default: ""
        },
        translations: {},
        isMobileView: {
            type: Boolean,
            default: !1
        },
        isLinkDisabled: {
            type: Boolean,
            default: !1
        },
        defaultCategory: {},
        blockId: {}
    },
    emits: ["category-click"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = lu()
          , i = T({})
          , s = g => e.isLinkDisabled ? o.fullPath : Zu(g)
          , l = g => {
            r("category-click", g),
            Oo({
                linkToSection: `#${e.blockId}`
            })
        }
          , d = () => {
            i.value = e.categories?.reduce( (g, h) => (g[h.id] = s(h.id),
            g), {}) || {},
            i.value.all = s("")
        }
        ;
        xe( () => {
            d()
        }
        );
        const p = {
            props: e,
            emit: r,
            route: o,
            categoryUrls: i,
            getCategoryUrl: s,
            handleCategoryClick: l,
            setCategoryUrls: d,
            get DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK() {
                return ou
            }
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , f0 = {
    class: "category-list"
}
  , y0 = {
    class: "category-list__title"
}
  , b0 = {
    class: "category-list__list"
}
  , _0 = ["href"]
  , w0 = ["href", "onClick"]
  , k0 = {
    class: "category-list__slot"
};
function S0(t, n, a, e, r, o) {
    return m(),
    y("div", f0, [P("h2", y0, te(a.translations.browseBy), 1), P("ul", b0, [P("li", null, [P("a", dt({
        class: ["category-list__link text-body", {
            "text-body-small": a.isMobileView,
            active: !a.currentCategoryId
        }],
        href: e.categoryUrls.all,
        [e.DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK || ""]: !0,
        onClick: n[0] || (n[0] = Re(i => e.handleCategoryClick(""), ["prevent"]))
    }), te(a.defaultCategory.title), 17, _0)]), (m(!0),
    y(pe, null, Me(a.categories, i => (m(),
    y("li", {
        key: i.id
    }, [P("a", dt({
        class: ["category-list__link text-body", {
            "text-body-small": a.isMobileView,
            active: a.currentCategoryId === i.id
        }],
        href: e.categoryUrls[i.id],
        [e.DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK || ""]: !0,
        onClick: Re(s => e.handleCategoryClick(i.id), ["prevent"])
    }), te(i.title), 17, w0)]))), 128))]), P("div", k0, [ne(t.$slots, "mobile", {}, void 0, !0)])])
}
const C0 = oe(h0, [["render", S0], ["__scopeId", "data-v-a4084316"]])
  , T0 = re({
    __name: "ProductListPagination",
    props: {
        blockId: {},
        isLoading: {
            type: Boolean,
            default: !1
        },
        scrollBehaviour: {
            default: ln.PAGINATION
        },
        currentPage: {},
        pageCount: {}
    },
    emits: ["page-changed", "set-is-animation-active"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = T(null)
          , i = T(null)
          , s = async h => {
            r("set-is-animation-active", !1),
            r("page-changed", h),
            await Ot(),
            r("set-is-animation-active", !0);
            const f = document.getElementById(e.blockId)
              , _ = f?.getBoundingClientRect();
            _ && _.top >= 0 && _.bottom <= window.innerHeight || f?.scrollIntoView({
                behavior: "smooth"
            })
        }
          , l = async h => {
            !h || e.currentPage >= e.pageCount || r("page-changed", e.currentPage + 1)
        }
          , d = () => {
            o.value.observe(i.value)
        }
          , p = () => {
            o.value = new IntersectionObserver( ([{isIntersecting: h}]) => {
                l(h)
            }
            ,{
                threshold: 1
            }),
            i.value && d()
        }
        ;
        xe( () => {
            p()
        }
        ),
        je( () => e.isLoading, async h => {
            await Ot(),
            h ? o.value?.disconnect() : d()
        }
        ),
        je( () => e.scrollBehaviour, async h => {
            await Ot(),
            h === ln.PAGINATION ? o.value?.disconnect() : d()
        }
        );
        const g = {
            props: e,
            emit: r,
            scrollObserver: o,
            infiniteScrollTriggerRef: i,
            handlePageChange: s,
            handleIntersect: l,
            observeScroll: d,
            addScrollIntersectionObserver: p,
            ZyroPagination: $u,
            get EcommerceProductListScrollBehaviour() {
                return ln
            }
        };
        return Object.defineProperty(g, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        g
    }
})
  , I0 = {
    ref: "infiniteScrollTriggerRef",
    class: "infinite-scroll-trigger"
}
  , P0 = {
    key: 0,
    class: "loader"
}
  , E0 = ws('<div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div>', 5)
  , D0 = [E0];
function A0(t, n, a, e, r, o) {
    return m(),
    y("div", null, [a.scrollBehaviour === e.EcommerceProductListScrollBehaviour.PAGINATION ? (m(),
    $(e.ZyroPagination, {
        key: 0,
        "current-page": a.currentPage,
        "page-count": a.pageCount,
        class: "product-list-pagination",
        color: "var(--body-color)",
        onChangePage: n[0] || (n[0] = i => e.handlePageChange(i))
    }, null, 8, ["current-page", "page-count"])) : (m(),
    y(pe, {
        key: 1
    }, [P("div", I0, null, 512), a.isLoading ? (m(),
    y("div", P0, D0)) : x("", !0)], 64))])
}
const M0 = oe(T0, [["render", A0], ["__scopeId", "data-v-b4554d16"]])
  , pc = 200
  , O0 = re({
    __name: "BlockEcommerceProductList",
    props: {
        blockId: {},
        pageCount: {},
        currentPage: {},
        products: {},
        totalProductCount: {},
        legacyProductPages: {
            default: () => ({})
        },
        blockStyle: {
            default: () => ({})
        },
        textColorVars: {
            default: () => ({})
        },
        isProductListShown: {
            type: Boolean,
            default: !0
        },
        isLoading: {
            type: Boolean
        },
        isCategoriesLoaded: {
            type: Boolean
        },
        isEager: {
            type: Boolean
        },
        columnCount: {},
        translations: {},
        productCategoryId: {
            default: ""
        },
        isButtonEnabled: {
            type: Boolean
        },
        buttonDisplay: {
            default: ""
        },
        buttonText: {
            default: ""
        },
        buttonStyle: {
            default: () => ({})
        },
        buttonType: {
            default: "primary"
        },
        buttonBorderWidth: {
            default: 0
        },
        ribbonStyle: {
            default: () => ({})
        },
        isProductListItemLinkDisabled: {
            type: Boolean
        },
        siteId: {},
        variantsQuantity: {},
        productSorting: {
            default: () => ({
                enabled: !1
            })
        },
        productSearch: {
            default: () => ({
                isEnabled: !1,
                placeholderText: "",
                noResultsText: ""
            })
        },
        sorting: {
            default: Zp[Jn.DEFAULT]
        },
        imageRatio: {
            default: da.COVER
        },
        categories: {},
        isCategoryListEnabled: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            default: "var(--color-light)"
        },
        isMobileView: {
            type: Boolean,
            default: !1
        },
        imageHoverEffect: {
            default: on.NO_EFFECT
        },
        isCategoryItemLinkDisabled: {
            type: Boolean
        },
        isFullWidth: {
            type: Boolean
        },
        isTotalProductCountShown: {
            type: Boolean
        },
        columnGap: {
            default: 24
        },
        rowGap: {
            default: void 0
        },
        isListCentered: {
            type: Boolean
        },
        isButtonFullWidth: {
            type: Boolean
        },
        scrollBehaviour: {},
        isCartVisible: {
            type: Boolean,
            default: !0
        },
        canAddToCart: {
            type: Function,
            default: () => !0
        },
        isDynamicProductPageEnabled: {
            type: Boolean,
            default: !1
        },
        isSearchResultsLoading: {
            type: Boolean,
            default: !1
        },
        searchResults: {
            default: null
        },
        searchTerm: {
            default: ""
        }
    },
    emits: ["product-click", "button-click", "page-changed", "sort-changed", "category-click", "is-dropdown-open", "update:search-term"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(C => ({
            e835abea: S.value,
            "4298969b": ee.value.width,
            "7818d661": f.value,
            "4135a398": I.value,
            befd7f74: R.value,
            d3640e98: w.value
        }));
        const e = t
          , r = a
          , o = xn( () => e.isMobileView)
          , i = T(!1)
          , s = T(null)
          , l = T(null)
          , d = T(0)
          , p = T(null)
          , {height: g} = Eb(l)
          , h = u( () => o.value ? 1 : 3)
          , f = u( () => e.columnCount || h.value)
          , _ = u( () => ({
            [jr]: i.value ? Fr : null
        }))
          , A = u( () => e.translations.onlineStoreNoProducts || "No publicly visible products")
          , E = u( () => e.blockStyle?.textAlign)
          , w = u( () => {
            const C = (f.value - 1) * e.columnGap
              , me = e.isCategoryListEnabled ? pc : 0
              , ke = d.value || typeof window < "u" && window?.innerWidth || Bl
              , Se = (e.isFullWidth ? ke : Bl) - C - me;
            return Math.floor(Se / f.value)
        }
        )
          , k = u( () => e.imageRatio === da.LANDSCAPE ? {
            width: 16,
            height: 9
        } : e.imageRatio === da.PORTRAIT ? {
            width: 4,
            height: 5
        } : {
            width: 1,
            height: 1
        })
          , O = u( () => {
            const C = w.value * k.value.height / k.value.width;
            return Math.floor(C)
        }
        )
          , I = u( () => `${e.columnGap}px`)
          , R = u( () => `${e.rowGap ?? e.columnGap}px`)
          , Y = u( () => ({
            id: "",
            title: e.translations.allProducts || "All products"
        }))
          , G = u( () => e.categories?.find( ({id: me}) => me === e.productCategoryId)?.title || Y.value.title)
          , X = u( () => ga(e.textColorVars))
          , q = u( () => e.totalProductCount > 1 ? `${e.totalProductCount} ${e.translations.products || "products"}` : `${e.totalProductCount} ${e.translations.product || "product"}`)
          , D = u( () => e.isListCentered && e.products.length === 1)
          , j = u( () => e.productSorting.enabled && e.productSorting.sortingOptions?.length)
          , z = u( () => e.productSearch.isEnabled)
          , ee = u( () => ({
            fillColor: e.productSearch.fillColor || "rgb(255, 255, 255)",
            textAndIconColor: e.productSearch.textAndIconColor || "rgba(0, 0, 0)",
            borderColor: e.productSearch.borderColor || "rgb(218, 220, 224)",
            borderRadius: e.productSearch.borderRadius || 4,
            inputAlignment: e.productSearch.inputAlignment || "center",
            width: `${e.productSearch.width || 250}px`,
            resultItemHoverColor: e.productSearch.resultItemHoverColor || "rgba(0, 0, 0, 0.06)"
        }))
          , F = u( () => e.scrollBehaviour !== ln.PAGINATION ? e.isLoading && e.currentPage === 1 : e.isLoading)
          , S = u( () => g.value ? `${g.value}px` : "auto")
          , N = u( () => e.productSearch.noResultsText || e.translations?.searchNoResultsText || "No results found")
          , M = u( () => e.productSearch.placeholderText || e.translations?.searchPlaceholderText || "Search products")
          , W = C => {
            if (e.isProductListItemLinkDisabled)
                return;
            const me = C.seo_settings?.slug;
            return me ? `${window.location.origin}/${me}` : window.location.href
        }
          , b = C => Nr(C) ? Wl(C).prices[0] : C.variants[0].prices[0]
          , v = C => Nr(C) && Wl(C).image_url || C.thumbnail
          , L = C => C.images?.[1] || C.media?.[1] || {}
          , B = () => {
            s.value && p.value.observe(s.value)
        }
          , K = C => C.type.value === rt.BOOKING ? C.variants[0].id : C.variants.find( ({id: me}) => {
            const ke = e.variantsQuantity.find(ue => ue.id === me);
            return ke && ke.inventory_quantity > 0
        }
        )?.id || C.variants[0].id
          , Z = () => {
            p.value = new ResizeObserver(C => {
                const {width: me} = C[0].contentRect;
                d.value = me
            }
            ),
            e.isFullWidth && B()
        }
        ;
        je( () => e.isFullWidth, C => {
            C ? B() : p.value?.disconnect()
        }
        ),
        xe( () => {
            Z()
        }
        );
        const H = {
            MAX_WIDTH_CATEGORY_LIST: pc,
            props: e,
            emit: r,
            isMobileView: o,
            isAnimationActive: i,
            blockProductListRef: s,
            productListContentContainerRef: l,
            blockListWidth: d,
            resizeObserver: p,
            productListHeightRef: g,
            columnCountDefaultValue: h,
            columnCountValue: f,
            customAttributes: _,
            emptyPageMessage: A,
            textAlign: E,
            imageWidth: w,
            imageAspectRatioValues: k,
            imageHeight: O,
            columnGapSize: I,
            rowGapSize: R,
            defaultCategory: Y,
            currentCategoryTitle: G,
            computedStyles: X,
            productCountText: q,
            isSingleColumnCentered: D,
            isSortingShown: j,
            isProductSearchEnabled: z,
            computedProductSearchStyles: ee,
            isSkeletonLoaderShown: F,
            productListHeight: S,
            searchNoResultText: N,
            searchPlaceholderText: M,
            getItemProductPageUrl: W,
            getSmallestProductPrice: b,
            getProductImage: v,
            getSecondaryProductImage: L,
            observeList: B,
            getProductVariantId: K,
            addBlockResizeObserver: Z,
            ListSkeletonLoader: W_,
            ProductListEmptyState: Z_,
            ProductListItem: l0,
            ProductSortDropdown: v0,
            CategoryList: C0,
            ProductListPagination: M0,
            SiteElementSearchBar: Gu,
            get getFormattedBookingDuration() {
                return Rs
            },
            get isProductPriceRangeShown() {
                return Nr
            },
            get getFullProductQuantity() {
                return Yu
            }
        };
        return Object.defineProperty(H, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        H
    }
})
  , x0 = ["id"]
  , B0 = {
    ref: "productListContentContainerRef",
    class: "block-product-list__content-container"
}
  , L0 = {
    key: 0,
    class: "block-product-list__category"
}
  , R0 = {
    key: 2,
    style: {
        width: "100%"
    }
}
  , N0 = {
    ref: "productList",
    class: "product-list"
}
  , H0 = {
    key: 0,
    class: "product-list__header"
}
  , V0 = {
    key: 0,
    class: "product-list__header-item"
}
  , U0 = {
    class: "product-list__header-item"
}
  , F0 = {
    key: 0,
    class: "product-list__total-count"
}
  , j0 = ["href"]
  , G0 = {
    key: 3,
    class: "block-product-list__empty-state"
};
function Y0(t, n, a, e, r, o) {
    return m(),
    y("div", {
        id: a.blockId,
        ref: "blockProductListRef",
        style: ze(e.computedStyles),
        class: J(["block-product-list", {
            "block-product-list--with-categories": a.isCategoryListEnabled
        }])
    }, [P("div", {
        class: J(["block-product-list__wrapper", {
            "block-product-list__wrapper--full-width": a.isFullWidth
        }])
    }, [a.isCategoriesLoaded && a.isCategoryListEnabled ? (m(),
    $(e.CategoryList, {
        key: 0,
        class: "category-list",
        translations: a.translations,
        categories: a.categories,
        "current-category-id": a.productCategoryId,
        "is-mobile-view": e.isMobileView,
        "default-category": e.defaultCategory,
        "is-link-disabled": a.isCategoryItemLinkDisabled,
        "block-id": a.blockId,
        onCategoryClick: n[1] || (n[1] = i => e.emit("category-click", i))
    }, {
        mobile: ye( () => [!a.isTotalProductCountShown && e.isSortingShown ? (m(),
        $(e.ProductSortDropdown, {
            key: 0,
            "product-sorting": a.productSorting,
            sorting: a.sorting,
            translations: a.translations,
            class: "product-list__sort",
            onSortChanged: n[0] || (n[0] = i => e.emit("sort-changed", i))
        }, null, 8, ["product-sorting", "sorting", "translations"])) : x("", !0)]),
        _: 1
    }, 8, ["translations", "categories", "current-category-id", "is-mobile-view", "default-category", "is-link-disabled", "block-id"])) : x("", !0), P("div", B0, [a.isCategoryListEnabled && a.isCategoriesLoaded ? (m(),
    y("h3", L0, te(e.currentCategoryTitle), 1)) : x("", !0), e.isSkeletonLoaderShown ? (m(),
    $(e.ListSkeletonLoader, {
        key: 1,
        "column-count": e.columnCountValue,
        "image-ratio": a.imageRatio,
        "is-category-list-enabled": a.isCategoryListEnabled && !a.isCategoriesLoaded,
        "is-full-width": a.isFullWidth
    }, null, 8, ["column-count", "image-ratio", "is-category-list-enabled", "is-full-width"])) : a.isProductListShown ? (m(),
    y("div", R0, [P("div", N0, [a.isTotalProductCountShown || e.isSortingShown || e.isProductSearchEnabled ? (m(),
    y("div", H0, [e.isProductSearchEnabled ? (m(),
    y("div", V0, [Le(e.SiteElementSearchBar, {
        class: J(["product-list__search", `product-list__search--${e.computedProductSearchStyles.inputAlignment}`]),
        "placeholder-text": e.searchPlaceholderText,
        "no-results-text": e.searchNoResultText,
        "fill-color": e.computedProductSearchStyles.fillColor,
        "fill-color-hover": e.computedProductSearchStyles.fillColor,
        "text-and-icon-color": e.computedProductSearchStyles.textAndIconColor,
        "text-and-icon-color-hover": e.computedProductSearchStyles.textAndIconColor,
        "result-item-hover-color": e.computedProductSearchStyles.resultItemHoverColor,
        "font-family": "var(--font-primary)",
        "border-color": e.computedProductSearchStyles.borderColor,
        "border-color-hover": e.computedProductSearchStyles.borderColor,
        "border-radius": e.computedProductSearchStyles.borderRadius,
        translations: e.props.translations,
        "site-id": a.siteId,
        results: a.searchResults,
        "is-loading": a.isSearchResultsLoading,
        "search-term": e.props.searchTerm,
        onIsDropdownOpen: n[2] || (n[2] = i => e.emit("is-dropdown-open", i)),
        "onUpdate:searchTerm": n[3] || (n[3] = i => e.emit("update:search-term", i))
    }, null, 8, ["class", "placeholder-text", "no-results-text", "fill-color", "fill-color-hover", "text-and-icon-color", "text-and-icon-color-hover", "result-item-hover-color", "border-color", "border-color-hover", "border-radius", "translations", "site-id", "results", "is-loading", "search-term"])])) : x("", !0), P("div", U0, [a.isTotalProductCountShown ? (m(),
    y("p", F0, te(e.productCountText), 1)) : x("", !0), e.isSortingShown ? (m(),
    $(e.ProductSortDropdown, {
        key: 1,
        "product-sorting": a.productSorting,
        sorting: a.sorting,
        translations: a.translations,
        class: J(["product-list__sort", {
            "product-list__sort--hidden-mobile": !a.isTotalProductCountShown && a.isCategoryListEnabled
        }]),
        onSortChanged: n[4] || (n[4] = i => e.emit("sort-changed", i))
    }, null, 8, ["product-sorting", "sorting", "translations", "class"])) : x("", !0)])])) : x("", !0), P("div", {
        class: J(["product-list__content", {
            "product-list__content--single-column": e.isSingleColumnCentered
        }])
    }, [(m(!0),
    y(pe, null, Me(a.products, (i, s) => (m(),
    y("a", {
        key: `product-${s}-${i.id}`,
        href: e.getItemProductPageUrl(i),
        class: "product-list__link"
    }, [Le(e.ProductListItem, et(e.customAttributes, {
        id: i.id,
        products: a.products,
        "image-url": e.getProductImage(i),
        "secondary-image": e.getSecondaryProductImage(i),
        title: i.title,
        ribbon: i.ribbon_text,
        price: e.getSmallestProductPrice(i),
        "text-align": e.textAlign,
        "is-eager": a.isEager && s === 0,
        duration: e.getFormattedBookingDuration(i, a.translations),
        "image-width": e.imageWidth,
        "image-height": e.imageHeight,
        "image-ratio": a.imageRatio,
        "image-hover-effect": a.imageHoverEffect,
        "image-border-radius": a.blockStyle?.imageBorderRadius,
        "is-store-quantity-tracked": i.variants[0].manage_inventory,
        "is-price-range-shown": e.isProductPriceRangeShown(i),
        quantity: e.getFullProductQuantity({
            product: i,
            variantsQuantity: a.variantsQuantity
        }),
        "product-type": i.type.value,
        translations: a.translations,
        "is-mobile-view": e.isMobileView,
        "is-button-enabled": a.isButtonEnabled,
        "button-display": a.buttonDisplay,
        "button-text": a.buttonText,
        "button-style": a.buttonStyle,
        "button-type": a.buttonType,
        "button-border-width": a.buttonBorderWidth,
        "ribbon-style": a.ribbonStyle,
        "is-purchasable": i.purchasable ?? !0,
        "is-button-full-width": a.isButtonFullWidth,
        "site-id": a.siteId,
        "is-cart-visible": a.isCartVisible,
        "is-add-to-cart-disabled": !a.canAddToCart(i, e.getProductVariantId(i)),
        onClick: l => t.$emit("product-click", i),
        onButtonClick: l => t.$emit("button-click", i)
    }), null, 16, ["id", "products", "image-url", "secondary-image", "title", "ribbon", "price", "text-align", "is-eager", "duration", "image-width", "image-height", "image-ratio", "image-hover-effect", "image-border-radius", "is-store-quantity-tracked", "is-price-range-shown", "quantity", "product-type", "translations", "is-mobile-view", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "ribbon-style", "is-purchasable", "is-button-full-width", "site-id", "is-cart-visible", "is-add-to-cart-disabled", "onClick", "onButtonClick"])], 8, j0))), 128))], 2), Le(e.ProductListPagination, {
        "block-id": a.blockId,
        "is-loading": a.isLoading,
        "scroll-behaviour": a.scrollBehaviour,
        "current-page": a.currentPage,
        "page-count": a.pageCount,
        onSetIsAnimationActive: n[5] || (n[5] = i => e.isAnimationActive = i),
        onPageChanged: n[6] || (n[6] = i => e.emit("page-changed", i))
    }, null, 8, ["block-id", "is-loading", "scroll-behaviour", "current-page", "page-count"])], 512)])) : (m(),
    y("div", G0, [Le(e.ProductListEmptyState, {
        "text-color-vars": a.textColorVars,
        "empty-page-message": e.emptyPageMessage
    }, null, 8, ["text-color-vars", "empty-page-message"])]))], 512)], 2)], 14, x0)
}
const W0 = oe(O0, [["render", Y0], ["__scopeId", "data-v-70e014e1"]])
  , q0 = t => {
    const n = u( () => t.isMobileView ? "mobile" : "desktop")
      , a = u( () => t.data.settings?.styles)
      , e = u( () => t.data.settings?.imageHoverEffect)
      , r = u( () => t.data.textColorVars)
      , o = u( () => t.data[n.value]?.columnCount)
      , i = u( () => t.data[n.value]?.columnGap)
      , s = u( () => t.data[n.value]?.rowGap)
      , l = u( () => t.data.productCategoryId)
      , d = u( () => t.data.isButtonEnabled ?? !1)
      , p = u( () => t.data.buttonDisplay)
      , g = u( () => t.data.buttonText)
      , h = u( () => t.data.buttonStyle)
      , f = u( () => t.data.buttonType)
      , _ = u( () => t.data.buttonBorderWidth)
      , A = u( () => t.data.ribbonStyle)
      , E = u( () => t.data.imageRatio)
      , w = u( () => t.data.background.color)
      , k = u( () => t.data.isCategoryListEnabled)
      , O = u( () => t.data.isFullWidth)
      , I = u( () => t.data.isTotalProductCountShown)
      , R = u( () => t.data.isListCentered)
      , Y = u( () => t.data.isButtonFullWidth)
      , G = u( () => ({
        ...t.data.productSorting,
        sortingOptions: t.data.productSorting?.sortingOptions?.filter(j => j.isEnabled)
    }))
      , X = u( () => t.data.productSearch)
      , q = u( () => t.data.productsPerPage || qb[o.value || 2])
      , D = u( () => t.data.scrollBehaviour || ln.PAGINATION);
    return {
        textColorVars: r,
        blockStyle: a,
        imageHoverEffect: e,
        columnCount: o,
        productsPerPage: q,
        productCategoryId: l,
        isButtonEnabled: d,
        buttonDisplay: p,
        buttonText: g,
        buttonStyle: h,
        buttonType: f,
        buttonBorderWidth: _,
        ribbonStyle: A,
        imageRatio: E,
        backgroundColor: w,
        isCategoryListEnabled: k,
        productSorting: G,
        productSearch: X,
        isFullWidth: O,
        isTotalProductCountShown: I,
        columnGap: i,
        rowGap: s,
        isListCentered: R,
        isButtonFullWidth: Y,
        scrollBehaviour: D
    }
}
  , $0 = re({
    __name: "BlockEcommerceProductListProviderUser",
    props: {
        blockId: {},
        data: {},
        lcp: {},
        ecommerceTranslations: {},
        currentLocale: {
            default: gn
        },
        blocks: {
            default: () => ({})
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        isMobileView: {
            type: Boolean,
            default: !1
        },
        isDynamicProductPageEnabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {siteId: e, ecommerceStoreId: r, hasGoogleAdsApp: o, pageData: i} = _t()
          , {isLoading: s, legacyProductPages: l, isShoppingCartOpen: d, shoppingCartItems: p, categories: g, fetchCategories: h, setCategories: f, setIsLoading: _, setIsLoaded: A, isCategoriesLoaded: E, setShoppingCartOpen: w, setShoppingCartItems: k, setIsCheckoutLoading: O, setSelectedBookingProduct: I, setVariantsQuantity: R, setIsCategoriesLoaded: Y, canAddToCart: G, dynamicPageTemplateData: X} = Ea({
            blockId: a.blockId
        })
          , {openEcommerceModal: q, closeEcommerceModal: D, setProductPreviewData: j} = Pa()
          , {initiateCheckout: z} = go()
          , {toggleSearchDropdown: ee} = Go({
            blockId: a.blockId
        })
          , {blockStyle: F, textColorVars: S, columnCount: N, productsPerPage: M, productCategoryId: W, isButtonEnabled: b, buttonDisplay: v, buttonText: L, buttonStyle: B, buttonType: K, buttonBorderWidth: Z, ribbonStyle: H, imageRatio: C, productSorting: me, productSearch: ke, backgroundColor: ue, isCategoryListEnabled: Se, imageHoverEffect: ve, isFullWidth: Q, isTotalProductCountShown: ie, columnGap: Ee, rowGap: ge, isButtonFullWidth: Pe, isListCentered: ot, scrollBehaviour: xt} = q0(a)
          , {isSearchResultsLoading: Mt, searchTerm: ca, formattedSearchResults: Qt, updateSearchTerm: ua} = Wu()
          , gt = T(1)
          , Te = T([])
          , We = T(0)
          , Qe = T(W.value)
          , pt = T([])
          , U = T(a.data.productSorting?.enabled && a.data.productSorting?.sortingOptions?.find( ({isEnabled: nt}) => nt)?.value || "")
          , ae = T(!1)
          , Ie = u( () => Math.ceil(We.value / M.value))
          , He = u( () => a.isMobileView ? a.data.mobile?.isHidden : a.data.desktop?.isHidden)
          , fe = async ({sort: nt, page: Nt, categoryId: Gt=Qe.value, toDate: ha=i.value.buildDate ? new Date(Number.parseInt(i.value.buildDate, 10)).toISOString() : void 0}) => {
            if (r.value) {
                A(!1),
                _(!0);
                try {
                    const fa = xt.value === ln.PAGINATION ? (Nt - 1) * M.value : 0
                      , Gn = xt.value === ln.PAGINATION ? M.value : Nt * M.value
                      , qd = (await Promise.allSettled([h(r.value, Se.value), Lt.getStoreProducts(r.value, {
                        offset: fa,
                        limit: Gn,
                        collectionId: Gt,
                        sort: !nt && Gt ? "order=ASC&sort_by=collection_order" : nt,
                        toDate: ha
                    })])).map(Yn => Yn.status === "fulfilled" ? Yn.value : {})
                      , [cl,di] = qd
                      , $d = di.products.map( ({id: Yn}) => Yn)
                      , ul = await Lt.getVariantsQuantity(r.value, $d);
                    cl.collections?.length && f(cl.collections.sort( (Yn, zd) => Yn.title.localeCompare(zd.title))),
                    Te.value = di.products,
                    We.value = di.count,
                    pt.value = ul,
                    R(ul)
                } catch (fa) {
                    console.error(fa)
                } finally {
                    _(!1),
                    A(!0),
                    Y(!0)
                }
            }
        }
          , vt = T(!1)
          , kt = u( () => `store-page-${a.blockId}`)
          , de = u( () => !!Te.value?.length)
          , Be = u( () => s.value || !vt.value)
          , Ae = nt => {
            gt.value = nt,
            fe({
                page: nt,
                sort: U.value,
                categoryId: Qe.value
            })
        }
          , Bt = nt => {
            const Nt = nt.target.value;
            U.value = Nt,
            fe({
                sort: Nt,
                page: gt.value,
                categoryId: Qe.value
            })
        }
          , jt = (nt, Nt) => {
            if (gt.value = 1,
            Qe.value = nt,
            !a.isInPreviewMode) {
                const Gt = Zu(nt);
                window.history.pushState({}, "", Gt)
            }
            fe({
                sort: U.value,
                page: Nt || gt.value,
                categoryId: Qe.value
            })
        }
          , Ya = nt => {
            Qe.value !== nt && jt(nt)
        }
          , _r = async nt => {
            if (a.isInPreviewMode) {
                q("EcommerceMessageButtonDisabled");
                return
            }
            const Nt = nt.custom_fields?.some(ha => ha.is_required);
            if (nt.options.length || Nt) {
                const ha = Object.values(l.value).find(tn => tn.productId === nt.id)
                  , fa = Object.keys(a.blocks).filter(tn => a.blocks[tn].type === "BlockEcommerceProduct")
                  , Gn = a.isDynamicProductPageEnabled ? fa.find(tn => X.value?.blocks?.includes(tn)) : fa.find(tn => ha?.blocks?.includes(tn));
                if (!Gn) {
                    if (!ha) {
                        window.location.assign("/");
                        return
                    }
                    window.location.assign(`/${nt.seo_settings.slug}`);
                    return
                }
                j(a.blocks[Gn], nt.id),
                q("EcommerceProductPreview");
                return
            }
            const Gt = [{
                ...nt,
                variants: [nt.variants[0]]
            }];
            if (await D(),
            nt.type.value === rt.BOOKING) {
                I(nt),
                q("EcommerceBookingEventSelect");
                return
            }
            if (nt.type.value === rt.DIGITAL && p.value.some(fa => fa.id === nt.id)) {
                w(!0);
                return
            }
            if (a.isCartVisible) {
                if (k([...p.value, ...Gt]),
                o.value && ei("add_to_cart", su(Gt[0])),
                d.value)
                    return;
                w(!0)
            } else
                O(!0),
                await z(Gt).then( () => {
                    O(!1)
                }
                )
        }
          , jn = () => {
            const Nt = new URLSearchParams(window.location.search).get(kt.value) || "1"
              , Gt = Number.parseInt(Nt, 10);
            Gt !== gt.value && (gt.value = Gt)
        }
          , bo = () => {
            const Nt = new URLSearchParams(window.location.search).get("category");
            Nt === Qe.value || !Nt || (Qe.value = Nt,
            fe({
                sort: U.value,
                page: gt.value,
                categoryId: Nt || ""
            }))
        }
          , wr = () => {
            jn(),
            bo()
        }
          , _o = () => {
            if (typeof window > "u")
                return;
            const nt = new URLSearchParams(window.location.search)
              , Nt = nt.get(kt.value) || "1"
              , Gt = Number.parseInt(Nt, 10)
              , ha = nt.get("category")
              , fa = Gt !== gt.value;
            if (fa && !ha)
                gt.value = Gt,
                Ae(Gt);
            else if (ha) {
                const Gn = fa ? Gt : gt.value;
                jt(ha, Gn)
            } else
                fe({
                    sort: U.value,
                    page: gt.value,
                    categoryId: Qe.value
                });
            ae.value = !0
        }
        ;
        xe( () => {
            vt.value = !0,
            window.addEventListener("popstate", () => {
                wr()
            }
            )
        }
        ),
        Zt( () => {
            window.removeEventListener("popstate", wr)
        }
        ),
        je(He, async () => {
            await Ot(),
            !He.value && !ae.value && _o()
        }
        , {
            immediate: !0
        });
        const ll = {
            props: a,
            siteId: e,
            ecommerceStoreId: r,
            hasGoogleAdsApp: o,
            pageData: i,
            isEcommerceLoading: s,
            legacyProductPages: l,
            isShoppingCartOpen: d,
            shoppingCartItems: p,
            categories: g,
            fetchCategories: h,
            setCategories: f,
            setIsLoading: _,
            setIsLoaded: A,
            isCategoriesLoaded: E,
            setShoppingCartOpen: w,
            setShoppingCartItems: k,
            setIsCheckoutLoading: O,
            setSelectedBookingProduct: I,
            setVariantsQuantity: R,
            setIsCategoriesLoaded: Y,
            canAddToCart: G,
            dynamicPageTemplateData: X,
            openEcommerceModal: q,
            closeEcommerceModal: D,
            setProductPreviewData: j,
            initiateCheckout: z,
            toggleSearchDropdown: ee,
            blockStyle: F,
            textColorVars: S,
            columnCount: N,
            productsPerPage: M,
            productCategoryId: W,
            isButtonEnabled: b,
            buttonDisplay: v,
            buttonText: L,
            buttonStyle: B,
            buttonType: K,
            buttonBorderWidth: Z,
            ribbonStyle: H,
            imageRatio: C,
            productSorting: me,
            productSearch: ke,
            backgroundColor: ue,
            isCategoryListEnabled: Se,
            imageHoverEffect: ve,
            isFullWidth: Q,
            isTotalProductCountShown: ie,
            columnGap: Ee,
            rowGap: ge,
            isButtonFullWidth: Pe,
            isListCentered: ot,
            scrollBehaviour: xt,
            isSearchResultsLoading: Mt,
            searchTerm: ca,
            formattedSearchResults: Qt,
            updateSearchTerm: ua,
            currentPage: gt,
            products: Te,
            totalProductCount: We,
            currentCategoryId: Qe,
            variantsQuantity: pt,
            sorting: U,
            isInitialDataFetched: ae,
            pageCount: Ie,
            isBlockHidden: He,
            fetchListProducts: fe,
            isClientLoaded: vt,
            blockStorePageQuery: kt,
            isProductListShown: de,
            isLoading: Be,
            handlePageChange: Ae,
            handleSortChange: Bt,
            handleCategoryChange: jt,
            handleCategoryClick: Ya,
            handleButtonClick: _r,
            handleBrowserNavigationPageChange: jn,
            handleBrowserNavigationCategoryChange: bo,
            handleWindowPopState: wr,
            getInitialData: _o,
            BlockEcommerceProductList: W0
        };
        return Object.defineProperty(ll, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        ll
    }
});
function z0(t, n, a, e, r, o) {
    return m(),
    $(e.BlockEcommerceProductList, {
        "block-id": a.blockId,
        "block-style": e.blockStyle,
        "text-color-vars": e.textColorVars,
        "is-product-list-shown": e.isProductListShown,
        "products-per-page": e.productsPerPage,
        "column-count": e.columnCount,
        "page-count": e.pageCount,
        "total-product-count": e.totalProductCount,
        "current-page": e.currentPage,
        "legacy-product-pages": e.legacyProductPages,
        "product-category-id": e.currentCategoryId,
        "is-button-enabled": e.isButtonEnabled,
        "button-display": e.buttonDisplay,
        "button-text": e.buttonText,
        "button-style": e.buttonStyle,
        "button-type": e.buttonType,
        "button-border-width": e.buttonBorderWidth,
        "is-loading": e.isLoading,
        "is-categories-loaded": e.isCategoriesLoaded,
        "ribbon-style": e.ribbonStyle,
        products: e.products,
        translations: a.ecommerceTranslations,
        "image-ratio": e.imageRatio,
        "image-hover-effect": e.imageHoverEffect,
        "is-eager": a.lcp.type === "block-ecommerce-product-list" && a.lcp.id === a.blockId,
        "site-id": e.siteId,
        "variants-quantity": e.variantsQuantity,
        "product-sorting": e.productSorting,
        "product-search": e.productSearch,
        "search-term": e.searchTerm,
        sorting: e.sorting,
        "background-color": e.backgroundColor,
        "is-category-list-enabled": e.isCategoryListEnabled,
        categories: e.categories,
        "is-full-width": e.isFullWidth,
        "is-total-product-count-shown": e.isTotalProductCountShown,
        "column-gap": e.columnGap,
        "row-gap": e.rowGap,
        "is-category-item-link-disabled": a.isInPreviewMode,
        "is-button-full-width": e.isButtonFullWidth,
        "is-list-centered": e.isListCentered,
        "is-mobile-view": a.isMobileView,
        "scroll-behaviour": e.scrollBehaviour,
        "is-cart-visible": a.isCartVisible,
        "can-add-to-cart": e.canAddToCart,
        "is-dynamic-product-page-enabled": a.isDynamicProductPageEnabled,
        "is-search-results-loading": e.isSearchResultsLoading,
        "search-results": e.formattedSearchResults,
        onPageChanged: e.handlePageChange,
        onSortChanged: e.handleSortChange,
        onButtonClick: e.handleButtonClick,
        onCategoryClick: e.handleCategoryClick,
        onIsDropdownOpen: e.toggleSearchDropdown,
        "onUpdate:searchTerm": n[0] || (n[0] = i => e.updateSearchTerm({
            newValue: i
        }))
    }, null, 8, ["block-id", "block-style", "text-color-vars", "is-product-list-shown", "products-per-page", "column-count", "page-count", "total-product-count", "current-page", "legacy-product-pages", "product-category-id", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "is-loading", "is-categories-loaded", "ribbon-style", "products", "translations", "image-ratio", "image-hover-effect", "is-eager", "site-id", "variants-quantity", "product-sorting", "product-search", "search-term", "sorting", "background-color", "is-category-list-enabled", "categories", "is-full-width", "is-total-product-count-shown", "column-gap", "row-gap", "is-category-item-link-disabled", "is-button-full-width", "is-list-centered", "is-mobile-view", "scroll-behaviour", "is-cart-visible", "can-add-to-cart", "is-dynamic-product-page-enabled", "is-search-results-loading", "search-results", "onIsDropdownOpen"])
}
const Z0 = oe($0, [["render", z0]])
  , Ku = ({move: t={
    swipe: !1,
    drag: !1
}, onMoveLeft: n= () => {}
, onMoveRight: a= () => {}
, onMoveUp: e= () => {}
, onMoveDown: r= () => {}
}) => {
    let o = null
      , i = null;
    const s = t.swipe && t.drag
      , l = t.swipe || t.drag;
    function d(E) {
        return E.touches
    }
    function p(E) {
        const w = d(E)[0];
        o = w.clientX,
        i = w.clientY
    }
    function g(E) {
        const w = new Image;
        w.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
        E.dataTransfer.setDragImage(w, 0, 0),
        o = E.clientX,
        i = E.clientY
    }
    const h = (E, w) => {
        Math.abs(E) > Math.abs(w) ? E > 0 ? n() : a() : w > 0 ? e() : r(),
        o = null,
        i = null
    }
      , f = E => {
        if (!o || !i)
            return;
        const w = E.touches[0].clientX
          , k = E.touches[0].clientY
          , O = o - w
          , I = i - k;
        h(O, I)
    }
      , _ = E => {
        if (!o || !i)
            return;
        const w = o - E.clientX
          , k = i - E.clientY;
        h(w, k)
    }
    ;
    return {
        enableMoveEvents: (E=!0, w=null) => {
            const k = w === null ? document : w
              , O = E ? "addEventListener" : "removeEventListener";
            if (s)
                k[O]("touchstart", p, !1),
                k[O]("touchmove", f, !1),
                k[O]("dragstart", g, !1),
                k[O]("drag", _, !1);
            else if (l) {
                const I = t.swipe ? p : g
                  , R = t.swipe ? f : _;
                k[O](t.swipe ? "touchstart" : "dragstart", I, !1),
                k[O](t.swipe ? "touchmove" : "drag", R, !1)
            }
        }
    }
}
  , K0 = re({
    __name: "Carousel",
    props: {
        mediaItems: {},
        productTitle: {},
        arrowsColor: {
            default: "unset"
        },
        navigationThumbnailArrowsColor: {
            default: "unset"
        },
        galleryPlacement: {
            default: "left"
        },
        imageRatio: {
            default: "unset"
        },
        imageBorderRadius: {
            default: "unset"
        },
        isEager: {
            type: Boolean,
            default: !1
        },
        variantImage: {
            default: null
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        isVariantImagePreselected: {
            type: Boolean,
            default: !1
        },
        siteId: {
            default: ""
        }
    },
    emits: ["image-click"],
    setup(t, {expose: n}) {
        n();
        const a = `${Ht}/placeholder.png`
          , e = t
          , r = {
            url: a,
            type: "image"
        }
          , o = T()
          , i = T(0)
          , s = T("")
          , l = T(0)
          , d = T(0)
          , p = xn( () => e.mediaItems.length ? e.mediaItems : [r])
          , g = u( () => e.galleryPlacement === "left")
          , h = u( () => {
            let M = 0;
            switch (!0) {
            case i.value < (g.value ? 920 : 900):
                M = 4;
                break;
            case i.value < (g.value ? 1060 : 1020):
                M = 5;
                break;
            case i.value < (g.value ? 1250 : 1160):
                M = 6;
                break;
            case i.value < (g.value ? 1400 : 1320):
                M = 7;
                break;
            default:
                M = g.value ? 7 : 8
            }
            return d.value !== 0 && d.value + M < e.mediaItems.length ? M - 1 : M
        }
        )
          , f = u( () => e.mediaItems.slice(d.value, d.value + h.value))
          , _ = u( () => f.value.some(M => M.url === e.mediaItems[l.value].url))
          , A = u( () => e.mediaItems.length > 1)
          , E = u( () => A.value && !e.isQuickPreview)
          , w = u( () => e.mediaItems.length < h.value ? !1 : d.value + h.value < e.mediaItems.length)
          , k = u( () => {
            switch (e.imageRatio) {
            case da.COVER:
            case da.LANDSCAPE:
            case da.PORTRAIT:
                return "cover";
            default:
                return "contain"
            }
        }
        )
          , O = u( () => e.isQuickPreview ? wm : km)
          , I = u( () => {
            const M = g.value ? Sm : O.value;
            switch (e.imageRatio) {
            case da.LANDSCAPE:
                return M * .75;
            case da.PORTRAIT:
                return M * 1.333;
            default:
                return
            }
        }
        )
          , R = u( () => ({
            "--image-max-width": `${O.value}px`,
            "--image-max-width-small": `${fl}px`,
            "--image-object-fit": k.value,
            "--image-border-radius": k.value === "cover" ? e.imageBorderRadius : 0,
            "--arrow-color": e.arrowsColor,
            "--thumbnail-arrow-color": e.navigationThumbnailArrowsColor
        }))
          , Y = () => {
            e.mediaItems.length - l.value < h.value ? d.value = e.mediaItems.length - h.value : d.value = l.value
        }
          , G = () => {
            i.value = window.innerWidth,
            h.value < e.mediaItems.length && Y()
        }
          , X = M => f.value[M].url === e.mediaItems[l.value].url
          , q = M => {
            l.value = e.mediaItems.findIndex(W => W.url === f.value[M].url)
        }
          , D = () => {
            s.value = "right",
            l.value = l.value === e.mediaItems.length - 1 ? 0 : l.value + 1,
            _.value || (d.value + h.value === e.mediaItems.length ? d.value = 0 : (Y(),
            h.value !== f.value.length && Y()))
        }
          , j = () => {
            s.value = "left",
            l.value = l.value === 0 ? e.mediaItems.length - 1 : l.value - 1,
            _.value || (d.value === 0 ? d.value = e.mediaItems.length - h.value : Y())
        }
          , z = () => {
            const M = h.value;
            d.value += 1;
            const W = h.value;
            M !== W && w.value && z()
        }
          , ee = () => {
            d.value -= 1
        }
          , F = M => {
            if (!A.value)
                return;
            const {enableMoveEvents: W} = Ku({
                move: {
                    drag: !1,
                    swipe: !0
                },
                onMoveLeft: D,
                onMoveRight: j
            });
            W(M, o.value)
        }
          , S = () => {
            const M = e.mediaItems.findIndex(W => W.url === e.variantImage);
            M > -1 && (l.value = M)
        }
        ;
        je( () => e.variantImage, () => {
            S(),
            _.value || Y()
        }
        ),
        xe( () => {
            i.value = window.innerWidth,
            window.addEventListener("resize", G),
            e.isVariantImagePreselected && S(),
            F(!0)
        }
        ),
        Zt( () => {
            window.removeEventListener("resize", G),
            F(!1)
        }
        );
        const N = {
            PRODUCT_PLACEHOLDER_IMAGE: a,
            props: e,
            placeholderImageData: r,
            carouselRef: o,
            windowWidth: i,
            slideDirection: s,
            currentIndex: l,
            imageListStartIndex: d,
            mediaItems: p,
            isGalleryLeft: g,
            imagePreviewAmount: h,
            thumbnails: f,
            isThumbnailVisible: _,
            isMoreThanOneImage: A,
            isArrowsShown: E,
            isRightImageArrowShown: w,
            objectFit: k,
            imageMaxWidth: O,
            imageMaxHeight: I,
            carouselStyle: R,
            presetThumbnailPosition: Y,
            resizeEventHandler: G,
            isImageMatch: X,
            handleThumbnailClick: q,
            goToNextSlide: D,
            goToPreviousSlide: j,
            moveImageListRight: z,
            moveImageListLeft: ee,
            enableCarouselMoveEvents: F,
            setVariantImage: S,
            ProductMediaElement: ai,
            get PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX() {
                return fl
            }
        };
        return Object.defineProperty(N, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        N
    }
})
  , Q0 = P("span", {
    class: "product-carousel__arrow product-carousel__arrow--left"
}, null, -1)
  , X0 = [Q0]
  , J0 = P("span", {
    class: "product-carousel__arrow product-carousel__arrow--right"
}, null, -1)
  , ew = [J0]
  , tw = ["onClick"]
  , aw = {
    class: "product-carousel__dots-wrapper"
}
  , nw = ["onClick"];
function rw(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", {
        class: J(["product-carousel", {
            "product-carousel--left": e.isGalleryLeft
        }]),
        style: ze(e.carouselStyle)
    }, [P("div", {
        ref: "carouselRef",
        class: J(`
				product-carousel__image-wrapper
				product-carousel__image-wrapper--${a.imageRatio}${e.isGalleryLeft ? "-left" : ""}
			`)
    }, [e.isArrowsShown ? (m(),
    y(pe, {
        key: 0
    }, [le((m(),
    y("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--left",
        onClick: e.goToPreviousSlide
    }, X0)), [[i, "product-carousel-button-prev"]]), le((m(),
    y("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--right",
        onClick: e.goToNextSlide
    }, ew)), [[i, "product-carousel-button-next"]])], 64)) : x("", !0), Le(ra, {
        name: `slide-${e.slideDirection}`,
        mode: "out-in",
        class: "product-carousel__image-content"
    }, {
        default: ye( () => [(m(),
        $(e.ProductMediaElement, {
            key: e.mediaItems[e.currentIndex].url,
            src: e.mediaItems[e.currentIndex].url,
            "media-type": e.mediaItems[e.currentIndex].type,
            alt: a.productTitle,
            class: "product-carousel__image product-carousel__main-image",
            "is-eager": a.isEager,
            "object-fit": e.objectFit,
            width: e.imageMaxWidth,
            height: e.imageMaxHeight,
            "enable-srcset": "",
            onClick: n[0] || (n[0] = s => t.$emit("image-click", e.currentIndex))
        }, null, 8, ["src", "media-type", "alt", "is-eager", "object-fit", "width", "height"]))]),
        _: 1
    }, 8, ["name"])], 2), e.isMoreThanOneImage ? (m(),
    y(pe, {
        key: 0
    }, [a.isQuickPreview ? x("", !0) : (m(),
    y("div", {
        key: 0,
        class: J(["product-carousel__image-list", {
            "product-carousel__image-list-left": e.isGalleryLeft
        }])
    }, [e.imageListStartIndex !== 0 ? le((m(),
    y("button", {
        key: 0,
        class: J(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--left": !e.isGalleryLeft,
            "product-carousel__image-arrow--top": e.isGalleryLeft
        }]),
        onClick: e.moveImageListLeft
    }, null, 2)), [[i, "product-carousel-image-button-left"]]) : x("", !0), P("div", {
        class: J({
            "product-carousel__image-list-element-wrapper-left": e.isGalleryLeft
        })
    }, [(m(!0),
    y(pe, null, Me(e.thumbnails, (s, l) => (m(),
    y("button", {
        key: `image-${l}-${s.url}`,
        class: J(["product-carousel__image-list-element", {
            "product-carousel__image-list-element--active": e.isImageMatch(l)
        }]),
        onClick: d => e.handleThumbnailClick(l)
    }, [Le(e.ProductMediaElement, {
        src: s.url,
        alt: a.productTitle,
        "media-type": s.type,
        class: "product-carousel__image",
        "is-eager": a.isEager,
        "object-fit": a.imageRatio,
        "is-video-autoplay-disabled": "",
        "site-id": a.siteId,
        width: e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
        height: e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX
    }, null, 8, ["src", "alt", "media-type", "is-eager", "object-fit", "site-id", "width", "height"])], 10, tw))), 128))], 2), e.isRightImageArrowShown ? le((m(),
    y("button", {
        key: 1,
        class: J(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--right": !e.isGalleryLeft,
            "product-carousel__image-arrow--bottom": e.isGalleryLeft
        }]),
        onClick: e.moveImageListRight
    }, null, 2)), [[i, "product-carousel-image-button-right"]]) : x("", !0)], 2)), P("div", aw, [(m(!0),
    y(pe, null, Me(e.mediaItems, (s, l) => (m(),
    y("button", {
        key: `image-dot-${l}`,
        class: "product-carousel__dot-button",
        onClick: d => e.currentIndex = l
    }, [P("span", {
        class: J(["product-carousel__dot", {
            "product-carousel__dot--active": l === e.currentIndex
        }])
    }, null, 2)], 8, nw))), 128))])], 64)) : x("", !0)], 6)
}
const ow = oe(K0, [["render", rw]])
  , iw = re({
    __name: "OptionSelect",
    props: {
        title: {},
        labelKey: {
            default: "value"
        },
        options: {
            default: () => ({})
        },
        value: {
            default: ""
        }
    },
    emits: ["set-value"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = a
          , o = {
            emit: e,
            updateSelectedValue: i => {
                const s = i.target?.value;
                e("set-value", s)
            }
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , sw = {
    class: "option-select"
}
  , lw = ["for"]
  , cw = {
    class: "option-select__select-wrapper"
}
  , uw = ["id", "value"]
  , dw = ["value"];
function mw(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", sw, [P("label", {
        for: `option-${a.title}`,
        class: "option-select__label"
    }, te(a.title), 9, lw), P("div", cw, [le((m(),
    y("select", {
        id: `option-${a.title}`,
        value: a.value,
        class: "option-select__select",
        onChange: n[0] || (n[0] = s => e.updateSelectedValue(s))
    }, [(m(!0),
    y(pe, null, Me(a.options, (s, l) => (m(),
    y("option", {
        key: `option-${l}`,
        value: s.id
    }, te(s[a.labelKey]), 9, dw))), 128))], 40, uw)), [[i, "product-section-select-button"]])])])
}
const gw = oe(iw, [["render", mw], ["__scopeId", "data-v-9731672d"]])
  , pw = {
    props: {
        imageBorderRadius: {
            type: String,
            default: "0"
        },
        textAlign: {
            type: String,
            default: ""
        }
    },
    computed: {
        computedStyles() {
            return {
                "--image-border-radius": this.imageBorderRadius
            }
        }
    }
}
  , Qu = t => (sa("data-v-13b9db75"),
t = t(),
la(),
t)
  , vw = Qu( () => P("div", {
    class: "skeleton-loader__image"
}, null, -1))
  , hw = Qu( () => P("div", {
    class: "skeleton-loader__title skeleton-loader__text"
}, null, -1));
function fw(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "skeleton-loader",
        style: ze(o.computedStyles)
    }, [vw, P("div", {
        class: J(["skeleton-loader__wrapper", {
            "skeleton-loader__wrapper--center": a.textAlign === "center"
        }])
    }, [hw, (m(),
    y(pe, null, Me(10, i => P("div", {
        key: i,
        class: "skeleton-loader__text"
    })), 64))], 2)], 4)
}
const yw = oe(pw, [["render", fw], ["__scopeId", "data-v-13b9db75"]])
  , bw = re({
    name: "QuantityPicker",
    props: {
        qaSelector: {
            type: String,
            default: ""
        },
        isStockAvailable: {
            type: Boolean,
            default: !0
        },
        quantity: {
            type: Number,
            required: !0
        },
        size: {
            type: Number,
            default: 48
        },
        fontSize: {
            type: Number,
            default: 16
        },
        isCartStyle: {
            type: Boolean,
            default: !1
        },
        isInputDisabled: {
            type: Boolean,
            default: !1
        },
        isLimitReached: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["quantity-change"],
    data() {
        return {
            inputValue: this.quantity
        }
    },
    computed: {
        computedStyles() {
            return {
                "--size": `${this.size}px`,
                "--font-size": `${this.fontSize}px`
            }
        },
        isIncreaseDisabled() {
            return !this.isStockAvailable || this.isLimitReached
        }
    },
    watch: {
        quantity(t) {
            this.inputValue = t
        }
    },
    methods: {
        handleQuantityInput(t) {
            const n = t.target?.value;
            if (n.match(Ah))
                this.$emit("quantity-change", Number(t.target.value));
            else if (n === "")
                return;
            this.inputValue = this.quantity
        },
        handleEmptyInput(t) {
            t.target?.value === "" && (this.$emit("quantity-change", 1),
            this.inputValue = 1)
        }
    }
})
  , _w = ["disabled"]
  , ww = ["disabled"];
function kw(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("span", {
        class: J(["quantity-picker", {
            "quantity-picker--cart-style": t.isCartStyle
        }]),
        style: ze(t.computedStyles)
    }, [le((m(),
    y("button", {
        class: J(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": t.isCartStyle
        }]),
        onClick: n[0] || (n[0] = s => t.$emit("quantity-change", t.quantity - 1))
    }, [$e(" - ")], 2)), [[i, `${t.qaSelector}-btn-decrease`]]), le(P("input", {
        "onUpdate:modelValue": n[1] || (n[1] = s => t.inputValue = s),
        disabled: t.isInputDisabled,
        class: J(["quantity-picker__amount", {
            "quantity-picker__amount--borderless": t.isCartStyle
        }]),
        onInput: n[2] || (n[2] = (...s) => t.handleQuantityInput && t.handleQuantityInput(...s)),
        onBlur: n[3] || (n[3] = (...s) => t.handleEmptyInput && t.handleEmptyInput(...s))
    }, null, 42, _w), [[$c, t.inputValue], [i, `${t.qaSelector}-text-qty`]]), le((m(),
    y("button", {
        class: J(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": t.isCartStyle
        }]),
        disabled: t.isIncreaseDisabled,
        onClick: n[4] || (n[4] = s => t.$emit("quantity-change", t.quantity + 1))
    }, [$e(" + ")], 10, ww)), [[i, `${t.qaSelector}-btn-increaseq`]])], 6)
}
const Xu = oe(bw, [["render", kw], ["__scopeId", "data-v-bab50c5a"]])
  , Sw = re({
    __name: "AdditionalInfoSections",
    props: {
        productDescription: {},
        data: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = T(0)
          , e = T({})
          , s = {
            activeTab: a,
            infoButtonRef: e,
            setActiveTab: l => {
                if (a.value === l) {
                    a.value = -1;
                    return
                }
                a.value = l,
                setTimeout( () => {
                    e.value[l].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
                , 200)
            }
            ,
            unsetHeightForTransition: l => {
                l.style.height = "0"
            }
            ,
            setScrollHeightForTransition: l => {
                l.style.height = `${l.scrollHeight}px`,
                setTimeout( () => {
                    l.style.height = ""
                }
                , 200)
            }
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
})
  , Cw = {
    class: "additional-info-sections"
}
  , Tw = ["id"]
  , Iw = ["aria-expanded", "aria-controls", "onClick"]
  , Pw = {
    class: "additional-info-sections__item-title"
}
  , Ew = ["id", "innerHTML"];
function Dw(t, n, a, e, r, o) {
    return m(),
    y("section", Cw, [(m(!0),
    y(pe, null, Me(a.data, (i, s) => (m(),
    y("div", {
        id: i.id,
        key: i.id,
        class: "additional-info-sections__item"
    }, [P("button", {
        ref_for: !0,
        ref: l => e.infoButtonRef[s] = l,
        class: "additional-info-sections__button",
        "aria-expanded": e.activeTab === s,
        "aria-controls": `additional-info-${i.id}`,
        onClick: l => e.setActiveTab(s)
    }, [P("h2", Pw, te(i.title), 1), P("span", {
        class: J(["additional-info-sections__icon", {
            "additional-info-sections__icon--active": e.activeTab === s
        }])
    }, null, 2)], 8, Iw), Le(ra, {
        name: "accordion",
        onEnter: e.setScrollHeightForTransition,
        onBeforeEnter: e.unsetHeightForTransition,
        onBeforeLeave: e.setScrollHeightForTransition,
        onLeave: e.unsetHeightForTransition
    }, {
        default: ye( () => [le(P("p", {
            id: `additional-info-${i.id}`,
            class: "additional-info-sections__item-description",
            innerHTML: i.description
        }, null, 8, Ew), [[ma, e.activeTab === s]])]),
        _: 2
    }, 1024)], 8, Tw))), 128))])
}
const Aw = oe(Sw, [["render", Dw], ["__scopeId", "data-v-013f5865"]])
  , vc = 700
  , Mw = re({
    __name: "CustomField",
    props: {
        customField: {
            default: () => ({})
        },
        translations: {
            default: () => ({})
        },
        isButtonClicked: {
            type: Boolean
        }
    },
    emits: ["update:modelValue"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = T(!1)
          , i = T("")
          , s = u( () => {
            const g = [];
            return o.value && (e.customField.is_required && !i.value && g.push(e.translations.textIsRequired),
            i.value?.length > vc && g.push(e.translations.textIsTooLong)),
            g
        }
        )
          , l = u( () => e.customField.title.toLowerCase().replace(/\s/g, "-"))
          , d = g => {
            o.value = !0,
            i.value = g.target.value,
            r("update:modelValue", {
                message: i.value,
                errors: s.value.length
            })
        }
        ;
        xe( () => {
            i.value = e.customField.value || ""
        }
        ),
        je( () => e.isButtonClicked, g => {
            g && !o.value && (o.value = !0)
        }
        );
        const p = {
            MESSAGE_MAX_LENTH: vc,
            props: e,
            emit: r,
            isInputDirty: o,
            message: i,
            errorMessages: s,
            fieldId: l,
            handleInputChange: d
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , Ow = {
    class: "custom-field"
}
  , xw = ["for"]
  , Bw = ["id", "value"];
function Lw(t, n, a, e, r, o) {
    return m(),
    y("div", Ow, [P("label", {
        for: e.fieldId
    }, te(a.customField.title), 9, xw), P("input", {
        id: e.fieldId,
        class: "custom-field__input",
        value: e.message,
        onInput: e.handleInputChange
    }, null, 40, Bw), P("div", {
        class: J(["custom-field__error", {
            "custom-field__error--visible": e.errorMessages.length > 0
        }])
    }, te(e.errorMessages[0] || ""), 3)])
}
const Rw = oe(Mw, [["render", Lw], ["__scopeId", "data-v-a502439a"]])
  , Ao = t => [tu, eu].includes(t)
  , Ju = () => xo(Cm) === "1"
  , Nw = (t, n) => {
    if (n && "address"in t)
        return {
            shippingAddress: t.address,
            shippingCountryCode: t.address.country?.toLowerCase(),
            shippingStateCode: t.address.state ? `${t.address.country.toLowerCase()}-${t.address.state.toLowerCase()}` : void 0,
            shippingName: t.name
        };
    const a = t;
    if (!n || !a.shippingAddress)
        return {};
    const e = a.shippingAddress.address
      , r = e.country?.toLowerCase()
      , o = e.state ? `${r}-${e.state?.toLowerCase()}` : void 0
      , i = a.shippingAddress.name;
    return {
        shippingAddress: e,
        shippingCountryCode: r,
        shippingStateCode: o,
        shippingName: i
    }
}
  , Hw = (t, n) => {
    if (n && !("billingDetails"in t))
        return {
            billingAddress: t.address,
            billingCountryCode: t.address.country?.toLowerCase(),
            billingStateCode: t.address.state ? `${t.address.country?.toLowerCase()}-${t.address.state.toLowerCase()}` : void 0,
            billingName: t.name
        };
    const a = t.billingDetails.address
      , e = a.country.toLowerCase()
      , r = a.state ? `${e}-${a.state.toLowerCase()}` : void 0;
    return {
        billingAddress: a,
        billingCountryCode: e,
        billingStateCode: r,
        billingName: t.billingDetails.name
    }
}
  , Vw = ({isProductPhysical: t, updateCartData: n, currencyCode: a, productPrice: e}) => {
    const r = T(null)
      , o = T(null)
      , i = T(null)
      , s = T(null)
      , l = T([])
      , d = T(null)
      , p = T()
      , g = u( () => e.value + (d.value?.amount || 0))
      , h = k => {
        d.value = k
    }
      , f = async k => {
        if (!(!t.value || !k))
            try {
                const O = await Lt.getCartShippingOptions(k);
                l.value = O.filter(I => !Qp.includes(I.provider)),
                [d.value] = l.value
            } catch (O) {
                console.error(O)
            }
    }
      , _ = ({price: k}) => {
        o.value?.update({
            amount: k
        })
    }
    ;
    return {
        expressCheckoutElement: s,
        elements: o,
        stripe: r,
        totalPriceAmount: g,
        shippingRates: l,
        selectedRegion: p,
        getShippingRates: f,
        handleAddressChangeEvent: async (k, O, I) => {
            const {shippingAddress: R, shippingCountryCode: Y, shippingStateCode: G, shippingName: X} = Nw(k, t.value);
            if (t.value && (p.value = O?.find(S => S.countries.find(N => {
                const M = N.countryCode === Y;
                if (N.provinces?.length) {
                    const W = N.provinces.find(b => b === G);
                    return !!M && !!W
                }
                return !!M
            }
            )),
            !p.value)) {
                "reject"in k ? k.reject() : k.paymentFailed({
                    reason: "invalid_shipping_address"
                });
                return
            }
            const {billingAddress: q, billingCountryCode: D, billingStateCode: j, billingName: z} = Hw(k, t.value)
              , ee = {
                ...R,
                country: Y,
                state: G,
                name: X,
                line1: `${R?.line1} ${R?.line2}`
            }
              , F = {
                ...q,
                country: D,
                state: j,
                name: z,
                line1: q ? `${q.line1} ${q.line2}` : void 0
            };
            try {
                await n?.({
                    shippingAddress: ee,
                    billingAddress: F,
                    regionId: p.value?.id
                }),
                await f(I)
            } catch {
                "reject"in k ? k.reject() : k.paymentFailed({
                    reason: "invalid_shipping_address"
                })
            }
        }
        ,
        selectedShippingRate: d,
        setSelectedShippingRate: h,
        handleShippingRateChange: k => {
            d.value = k.shippingRate,
            _({
                price: g.value
            })
        }
        ,
        setupStripeElements: async (k, O) => {
            try {
                if (await Kb(),
                r.value = Stripe(O),
                o.value = r.value.elements({
                    mode: "payment",
                    currency: a.value,
                    amount: g.value,
                    onBehalfOf: k
                }),
                s.value = o.value.create("expressCheckout", {
                    layout: {
                        maxColumns: 1,
                        maxRows: 3
                    }
                }),
                !i.value)
                    return;
                s.value.mount(i.value)
            } catch (I) {
                console.error("Error setting up Stripe:", I)
            }
        }
        ,
        updateStripeElement: _
    }
}
  , Uw = re({
    __name: "ExpressCheckoutElement",
    props: {
        isInEditor: {
            type: Boolean
        },
        isAddToBagEnabled: {
            type: Boolean
        },
        priceData: {},
        regions: {},
        isPhysical: {
            type: Boolean
        },
        products: {},
        updateCartData: {},
        cartId: {},
        storeId: {},
        stripePublicKey: {
            default: "pk_test_51IQCaMJXmF8zaJiQl5EyZDxgAvrStAfM9P2DvXcI3jlJWjsMW78MA9tcE61dzQ7oqwoIo0Hxmd0xMfdUBqbSvNgx00Pu9WmOib"
        },
        stripeAccountId: {
            default: "acct_1PmymdR2CwnEMzeD"
        }
    },
    emits: ["set-cart-data", "create-cart", "button-click", "get-regions"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = T("")
          , i = T(!1)
          , s = u( () => e.priceData.sale_amount || e.priceData.amount)
          , {stripe: l, expressCheckoutElement: d, elements: p, shippingRates: g, getShippingRates: h, handleAddressChangeEvent: f, handleShippingRateChange: _, setupStripeElements: A, updateStripeElement: E, totalPriceAmount: w} = Vw({
            productPrice: s,
            isProductPhysical: u( () => e.isPhysical),
            updateCartData: e.updateCartData,
            currencyCode: u( () => e.priceData.currency.code.toLowerCase())
        })
          , k = u( () => e.isInEditor || !e.isAddToBagEnabled)
          , O = u( () => e.regions?.flatMap( ({countries: q}) => q.map(D => D.countryCode.toUpperCase())) || [])
          , I = u( () => ({
            shippingAddressRequired: e.isPhysical,
            ...e.isPhysical ? {
                allowedShippingCountries: O.value
            } : {},
            shippingRates: g.value
        }))
          , R = async q => {
            try {
                const D = await Lt.initiatePaymentSession(e.cartId);
                r("set-cart-data", D)
            } catch (D) {
                console.error(D),
                q.paymentFailed({
                    reason: "fail"
                })
            }
        }
          , Y = async () => {
            d.value.on("click", q => {
                e.isAddToBagEnabled && q.resolve(I.value)
            }
            ),
            d.value.on("shippingaddresschange", async q => {
                await f(q, e.regions),
                q.resolve({
                    shippingRates: g.value
                })
            }
            ),
            d.value.on("shippingratechange", q => {
                _(q),
                q.resolve()
            }
            ),
            d.value.on("confirm", async q => {
                await f(q, e.regions),
                await R(q),
                l.value?.confirmPayment({
                    elements: p.value,
                    confirmParams: {
                        return_url: o.value
                    }
                }).then(D => {
                    D.error && window.history.pushState({}, "", `${window.location.pathname}?open-modal=EcommerceCheckoutFailed`)
                }
                )
            }
            )
        }
          , G = async () => {
            if (await A(e.stripeAccountId, e.stripePublicKey),
            i.value = !0,
            !e.isInEditor) {
                if (o.value = qo(e.products),
                r("get-regions"),
                !e.cartId) {
                    r("create-cart");
                    return
                }
                h(e.cartId),
                Y()
            }
        }
        ;
        xe( () => {
            G()
        }
        ),
        je( () => e.cartId, (q, D) => {
            i.value && q && !D && (h(e.cartId),
            Y())
        }
        ),
        je(s, async (q, D) => {
            q !== D && q && (await Ot(),
            E({
                price: w.value
            }))
        }
        );
        const X = {
            props: e,
            emit: r,
            successUrl: o,
            isLoaded: i,
            productPrice: s,
            stripe: l,
            expressCheckoutElement: d,
            elements: p,
            shippingRates: g,
            getShippingRates: h,
            handleAddressChangeEvent: f,
            handleShippingRateChange: _,
            setupStripeElements: A,
            updateStripeElement: E,
            totalPriceAmount: w,
            isClickDisabled: k,
            allowedRegionCodeList: O,
            elementOptions: I,
            initialisePaymentSession: R,
            resolveStripeActions: Y,
            initiateExpressCheckout: G
        };
        return Object.defineProperty(X, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        X
    }
});
function Fw(t, n, a, e, r, o) {
    return m(),
    y("div", null, [P("div", {
        ref: "expressCheckoutElementContainer",
        class: J(["express-checkout-element", {
            "express-checkout-element--disabled": e.isClickDisabled
        }]),
        onClick: n[0] || (n[0] = i => t.$emit("button-click"))
    }, null, 2)])
}
const jw = oe(Uw, [["render", Fw], ["__scopeId", "data-v-9b06121a"]])
  , Ei = 5
  , Tr = 1
  , Gw = re({
    __name: "BlockEcommerceProduct",
    props: {
        blockId: {},
        productData: {},
        blockStyle: {
            default: () => ({})
        },
        textColorVars: {
            default: () => ({})
        },
        blockButtonText: {
            default: ""
        },
        blockButtonStyle: {
            default: () => ({})
        },
        blockButtonType: {
            default: "primary"
        },
        blockButtonBorderWidth: {
            default: 0
        },
        navigationArrowsColor: {
            default: ""
        },
        navigationThumbnailArrowsColor: {
            default: ""
        },
        galleryPlacement: {
            default: ""
        },
        imageRatio: {
            default: "cover"
        },
        imageBorderRadius: {
            default: "0%"
        },
        isLoading: {
            type: Boolean,
            default: !1
        },
        isCheckoutLoading: {
            type: Boolean,
            default: !1
        },
        canAddToCart: {
            type: Function,
            default: () => !0
        },
        isEager: {
            type: Boolean,
            default: !1
        },
        translations: {},
        quantifiedCartItemsList: {
            default: () => []
        },
        isQuantityPickerEnabled: {
            type: Boolean
        },
        legacyProductPages: {
            default: () => ({})
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        isCartVisible: {
            type: Boolean
        },
        siteId: {},
        shoppingCartItems: {
            default: () => []
        },
        variantsQuantity: {},
        currentPageType: {
            default: "default"
        },
        isMobileView: {
            type: Boolean
        },
        isExpressCheckoutEnabled: {
            type: Boolean
        },
        cartId: {},
        successUrl: {},
        updateCartData: {},
        stripePublicKey: {},
        stripeAccountId: {},
        storeId: {},
        isInEditor: {
            type: Boolean
        },
        regions: {}
    },
    emits: ["buy-button-click", "click-more", "image-click", "open-cart", "set-cart-data", "express-checkout-click", "get-regions", "create-cart"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = {
            [Qa]: fr
        }
          , r = [rt.BOOKING, rt.DIGITAL]
          , o = t
          , i = a
          , s = T(1)
          , l = T("")
          , d = T(!1)
          , p = T(!1)
          , g = T(ba)
          , h = T(!0)
          , f = u( () => Ao(o.currentPageType))
          , _ = u( () => ({
            normal: o.blockButtonStyle[`grid-button-${o.blockButtonType}-background-color`],
            hover: o.blockButtonStyle[`grid-button-${o.blockButtonType}-background-color-hover`]
        }))
          , A = u( () => ({
            hover: o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color-hover`],
            normal: o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color`]
        }))
          , E = u( () => o.blockStyle?.textAlign)
          , w = u( () => o.productData)
          , k = u( () => w.value.options.length ? w.value.options.map(Te => ({
            ...Te.values.filter( (We, Qe, pt) => pt.findIndex(U => U.value === We.value) === Qe)
        })) : [])
          , O = u( () => g.value?.variants[0])
          , I = u( () => o.productData.purchasable === void 0 || o.productData.purchasable)
          , R = Te => {
            const We = O.value?.options.find(Qe => Qe.option_id === k.value[Te][0].option_id);
            return Object.values(k.value[Te]).find(Qe => We?.value === Qe.value)?.id
        }
          , Y = u( () => g.value.id ? O.value?.prices[0] : w.value?.variants[0].prices[0])
          , G = u( () => o.quantifiedCartItemsList.find(Te => Te.product.variants[0].id === O.value?.id)?.quantity || 0)
          , X = u( () => o.isCartVisible ? s.value + G.value : s.value)
          , q = u( () => O.value?.manage_inventory ? X.value < Or({
            variantsQuantity: o.variantsQuantity,
            variantId: O.value?.id
        }) : !0)
          , D = u( () => ({
            ...ga({
                ...o.textColorVars,
                ...o.blockButtonStyle
            })
        }))
          , j = u( () => !w.value?.options.length || w.value?.options.length && g.value)
          , z = u( () => w.value?.type.value === rt.BOOKING)
          , ee = u( () => Ps.includes(w.value?.type.value))
          , F = u( () => !o.canAddToCart(o.productData, g.value?.variants[0].id))
          , S = u( () => ee.value && !Y.value?.amount)
          , N = u( () => w.value?.type.value === rt.DIGITAL && !Y.value?.amount)
          , M = u( () => o.blockButtonText ? o.blockButtonText : z.value ? o.translations?.bookNow || "Book now" : N.value && !o.isCartVisible ? o.translations?.download || "Download" : o.translations?.addToBag || "Add to bag")
          , W = u( () => S.value ? o.translations?.free || "Free" : bn({
            amount: Y.value?.amount,
            currency: Y.value?.currency
        }))
          , b = u( () => w.value?.variants[0].booking_event?.location)
          , v = u( () => Rs(w.value, o.translations))
          , L = u( () => O.value?.manage_inventory && Or({
            variantsQuantity: o.variantsQuantity,
            variantId: O.value?.id
        }) === 0)
          , B = u( () => !!O.value?.manage_inventory)
          , K = u( () => {
            const Te = Or({
                variantsQuantity: o.variantsQuantity,
                variantId: O.value?.id
            });
            return L.value || G.value === Te ? o.translations.outOfStock : `${Te <= Ei ? Te : `${Ei}+`} ${o.translations.inStock} `
        }
        )
          , Z = u( () => [...w.value?.additional_info || []].sort( (Te, We) => Te.order - We.order))
          , H = u( () => w.value?.description && !o.isQuickPreview)
          , C = u( () => Z.value && !o.isQuickPreview)
          , me = u( () => Z.value.length && o.isMobileView)
          , ke = u( () => w.value?.images || w.value?.media || [])
          , ue = u( () => w.value?.custom_fields || [])
          , Se = u( () => o.isQuantityPickerEnabled && !S.value)
          , ve = u( () => !r.includes(w.value?.type.value) && Se.value && I.value)
          , Q = u( () => w.value?.type.value === rt.PHYSICAL)
          , ie = u( () => `${window.location.origin}/${w.value.seo_settings.slug}`)
          , Ee = Te => ({
            ...w.value,
            variants: [Te]
        })
          , ge = () => {
            if (!w.value)
                return ba;
            if (w.value[Su] === Is) {
                const We = w.value.variants.reduce( (U, ae) => {
                    const Ie = U.prices[0]?.sale_amount || U.prices[0]?.amount
                      , He = ae.prices[0]?.sale_amount || ae.prices[0]?.amount;
                    return Ie <= He ? U : ae
                }
                )
                  , Qe = k.value.map(U => Object.values(U).find(ae => We.options.some(Ie => Ie.value === ae.value)) || {})
                  , pt = {
                    ...We,
                    options: [...Qe]
                };
                return Ee(pt)
            }
            const Te = w.value.variants.find(We => We.options.every(Qe => k.value.some(pt => pt[0].value === Qe.value)));
            return Ee(Te || w.value.variants[0])
        }
          , Pe = () => {
            if (p.value = !0,
            !h.value)
                return;
            const Te = new Array(s.value).fill(g.value);
            if (Te[0].type.value === rt.DIGITAL && o.shoppingCartItems.some(pt => pt.id === Te[0].id)) {
                i("open-cart");
                return
            }
            s.value = Tr,
            i("buy-button-click", Te)
        }
          , ot = () => {
            p.value = !0,
            i("express-checkout-click")
        }
          , xt = Te => {
            s.value = Tr;
            const We = w.value.options.map(ae => ae.values.find(Ie => Ie.id === Te)).find(ae => ae) || {}
              , pt = [...O.value?.options.filter(ae => ae.option_id !== We.option_id), We]
              , U = w.value.variants.find(ae => ae.options.every(Ie => pt.some(He => He.value === Ie.value && He.option_id === Ie.option_id)));
            U && (g.value = Ee(U))
        }
          , Mt = Te => {
            const We = O.value?.manage_inventory;
            if (d.value = o.shoppingCartItems.length + Te >= er,
            We) {
                const Qe = Or({
                    variantsQuantity: o.variantsQuantity,
                    variantId: O.value?.id
                });
                if (G.value + Te > Qe || d.value) {
                    const pt = Math.min(Qe - G.value, er - o.shoppingCartItems.length);
                    s.value = pt;
                    return
                }
            } else if (d.value) {
                s.value = er - o.shoppingCartItems.length;
                return
            }
            if (Te <= 0) {
                s.value = Tr;
                return
            }
            s.value = Te
        }
          , ca = (Te, We) => {
            h.value = Te.errors === 0,
            h.value && (g.value = {
                ...g.value,
                custom_fields: ue.value.map( (Qe, pt) => pt !== We ? Qe : {
                    ...Qe,
                    value: Te.message
                })
            },
            o.isExpressCheckoutEnabled && !o.cartId && i("create-cart", g.value))
        }
          , Qt = () => {
            g.value = ge(),
            h.value = !o.productData?.custom_fields?.some(Te => Te.is_required && !Te.value)
        }
          , ua = () => {
            h.value && i("create-cart")
        }
        ;
        xe( () => {
            w.value && Qt()
        }
        ),
        je(w, (Te, We) => {
            JSON.stringify(Te) !== JSON.stringify(We) && Qt()
        }
        ),
        je(g, (Te, We) => {
            We?.id === -1 && !Te?.site_product_selection || JSON.stringify(Te) !== JSON.stringify(We) && Te?.variants[0].image_url && (l.value = Te.variants[0].image_url)
        }
        ),
        je( () => o.shoppingCartItems, Te => {
            const We = Te?.length || 0;
            s.value = Tr,
            d.value = We + s.value >= er
        }
        , {
            immediate: !0
        });
        const gt = {
            MAX_STOCK_AMOUNT_TO_SHOW: Ei,
            DEFAULT_PICKER_VALUE: Tr,
            CUSTOM_ATTRIBUTES: e,
            PRODUCT_TYPES_WITHOUT_QUANTITY_PICKER: r,
            props: o,
            emit: i,
            selectedQuantity: s,
            variantImage: l,
            isLimitReached: d,
            isButtonClicked: p,
            selectedVariant: g,
            isAddToBagEnabled: h,
            isBlockInProductPage: f,
            buttonBackgroundColor: _,
            buttonBorderColor: A,
            textAlign: E,
            productData: w,
            uniqueOptionSelections: k,
            selectedValueVariant: O,
            isPurchasable: I,
            selectedOption: R,
            priceData: Y,
            quantityInCart: G,
            totalQuantitySelected: X,
            isStockAvailable: q,
            computedStyles: D,
            isPriceShown: j,
            isProductTypeBooking: z,
            isFreeTypeProduct: ee,
            isAddToCartDisabled: F,
            isFreeTypeProductFree: S,
            isFreeDigitalProduct: N,
            buttonText: M,
            formattedPrice: W,
            location: b,
            formattedBookingDuration: v,
            isOutOfStock: L,
            isStockInfoShown: B,
            stockInfoText: K,
            productAdditionalInfo: Z,
            isDescriptionVisible: H,
            isAdditionalInfoVisible: C,
            isDescriptionShownOnMobileWithAdditionalSections: me,
            productImages: ke,
            customFields: ue,
            isQuantityPickerShown: Se,
            isQuantityPickerVisible: ve,
            isPhysical: Q,
            productPageUrl: ie,
            getProductWithSelectedVariant: Ee,
            getInitiallySelectedVariant: ge,
            handleButtonClick: Pe,
            handleExpressCheckoutButtonClick: ot,
            handleVariantOptionChange: xt,
            handleQuantityChange: Mt,
            handleCustomFieldUpdate: ca,
            setInitialProductData: Qt,
            handleCreateCart: ua,
            Carousel: ow,
            OptionSelect: gw,
            GridButton: Un,
            get formatPrice() {
                return bn
            },
            get isProductPriceRangeShown() {
                return Nr
            },
            ProductSkeletonLoader: yw,
            QuantityPicker: Xu,
            AdditionalInfoSections: Aw,
            CustomField: Rw,
            ExpressCheckoutElement: jw
        };
        return Object.defineProperty(gt, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        gt
    }
})
  , Yw = ["id"]
  , Ww = {
    class: "block-product__image-content-wrapper"
}
  , qw = ["innerHTML"]
  , $w = {
    class: "block-product__content-wrapper"
}
  , zw = {
    class: "block-product__price-data-wrapper"
}
  , Zw = {
    class: "block-product__additional-info"
}
  , Kw = {
    key: 0,
    class: "block-product__price body-large"
}
  , Qw = {
    key: 1,
    class: "block-product__duration body-large"
}
  , Xw = {
    key: 2,
    class: "block-product__location"
}
  , Jw = {
    key: 3,
    class: "block-product__input-field-wrapper"
}
  , ek = {
    key: 4,
    class: "block-product__input-field-wrapper"
}
  , tk = {
    key: 0,
    class: "block-product__stock-text"
}
  , ak = {
    key: 0,
    class: "block-product__button-wrapper"
}
  , nk = ["innerHTML"]
  , rk = ["href"];
function ok(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", et({
        id: a.blockId,
        class: "block-product-wrapper"
    }, e.CUSTOM_ATTRIBUTES), [a.isLoading ? (m(),
    $(e.ProductSkeletonLoader, {
        key: 0,
        "image-border-radius": a.imageBorderRadius,
        "text-align": e.textAlign
    }, null, 8, ["image-border-radius", "text-align"])) : (m(),
    y("div", {
        key: 1,
        class: J(["block-product", {
            "block-product--centered": e.textAlign === "center",
            "block-product--in-preview": a.isQuickPreview
        }]),
        style: ze(e.computedStyles)
    }, [P("div", Ww, [Le(e.Carousel, {
        "media-items": e.productImages,
        "product-title": e.productData.title,
        "arrows-color": a.navigationArrowsColor,
        "navigation-thumbnail-arrows-color": a.navigationThumbnailArrowsColor,
        "gallery-placement": a.galleryPlacement,
        "image-ratio": a.imageRatio,
        "image-border-radius": a.imageBorderRadius,
        "is-eager": a.isEager,
        "site-id": a.siteId,
        "variant-image": e.variantImage,
        "is-quick-preview": a.isQuickPreview,
        "is-variant-image-preselected": e.isProductPriceRangeShown(e.productData),
        onImageClick: n[0] || (n[0] = s => t.$emit("image-click", s))
    }, null, 8, ["media-items", "product-title", "arrows-color", "navigation-thumbnail-arrows-color", "gallery-placement", "image-ratio", "image-border-radius", "is-eager", "site-id", "variant-image", "is-quick-preview", "is-variant-image-preselected"]), e.isDescriptionVisible && e.productAdditionalInfo.length && !a.isMobileView ? (m(),
    y("p", {
        key: 0,
        class: "block-product__description block-product__description--under-image",
        innerHTML: e.productData.description
    }, null, 8, qw)) : x("", !0)]), P("div", $w, [P("div", zw, [le((m(),
    $(mn(e.isBlockInProductPage ? "h1" : "h2"), {
        class: "block-product__title"
    }, {
        default: ye( () => [$e(te(e.productData.title), 1)]),
        _: 1
    })), [[i, "builder-product-section-title"]]), !a.isQuickPreview && e.productData.subtitle ? (m(),
    $(mn(e.isBlockInProductPage ? "h2" : "h3"), {
        key: 0,
        class: "block-product__subtitle"
    }, {
        default: ye( () => [$e(te(e.productData.subtitle), 1)]),
        _: 1
    })) : x("", !0), Object.keys(e.priceData || {})?.length ? (m(),
    y("p", {
        key: 1,
        class: J(["block-product__price-wrapper", {
            "block-product__price-wrapper--with-duration": e.isProductTypeBooking
        }])
    }, [e.isPriceShown ? (m(),
    y("span", {
        key: 0,
        class: J(["block-product__price body-large", {
            "block-product__price--sale": e.priceData.sale_amount
        }])
    }, te(e.formattedPrice), 3)) : x("", !0), P("span", Zw, [e.priceData.sale_amount && e.isPriceShown ? (m(),
    y("span", Kw, te(e.formatPrice({
        amount: e.priceData.sale_amount,
        currency: e.priceData.currency
    })), 1)) : x("", !0), e.isProductTypeBooking ? (m(),
    y("span", Qw, te(e.formattedBookingDuration), 1)) : x("", !0)])], 2)) : x("", !0), e.isProductTypeBooking ? (m(),
    y("p", Xw, te(e.location), 1)) : x("", !0), e.productData.options.length ? (m(),
    y("div", Jw, [(m(!0),
    y(pe, null, Me(e.productData.options, (s, l) => (m(),
    $(e.OptionSelect, {
        key: `option-${l}`,
        value: e.selectedOption(l),
        options: e.uniqueOptionSelections[l],
        title: s.title,
        class: J(["block-product__input-field", {
            "block-product__input-field--centered": e.textAlign === "center"
        }]),
        "label-key": "value",
        onSetValue: n[1] || (n[1] = d => e.handleVariantOptionChange(d))
    }, null, 8, ["value", "options", "title", "class"]))), 128))])) : x("", !0), e.customFields.length ? (m(),
    y("div", ek, [(m(!0),
    y(pe, null, Me(e.customFields, (s, l) => (m(),
    $(e.CustomField, {
        key: `custom-field-${l}`,
        class: J(["block-product__input-field", {
            "block-product__input-field--centered": e.textAlign === "center"
        }]),
        "custom-field": s,
        translations: a.translations,
        "is-button-clicked": e.isButtonClicked,
        "onUpdate:modelValue": d => e.handleCustomFieldUpdate(d, l)
    }, null, 8, ["class", "custom-field", "translations", "is-button-clicked", "onUpdate:modelValue"]))), 128))])) : x("", !0), e.isQuantityPickerVisible ? (m(),
    y("div", {
        key: 5,
        class: J(["block-product__quantity-wrapper", {
            "block-product__quantity-wrapper--disabled": e.isOutOfStock || e.isAddToCartDisabled
        }])
    }, [Le(e.QuantityPicker, {
        "qa-selector": "productpage",
        quantity: e.selectedQuantity,
        "is-limit-reached": e.isLimitReached,
        "is-stock-available": e.isStockAvailable,
        onQuantityChange: e.handleQuantityChange
    }, null, 8, ["quantity", "is-limit-reached", "is-stock-available"]), e.isStockInfoShown ? (m(),
    y("p", tk, te(e.stockInfoText), 1)) : x("", !0)], 2)) : x("", !0)]), e.isPurchasable ? (m(),
    y("div", ak, [le(Le(e.GridButton, {
        type: a.blockButtonType,
        content: e.buttonText,
        class: J(["block-product__button", [`block-product__button--${a.blockButtonType}`, {
            "block-product__button--fixed-width": a.isExpressCheckoutEnabled
        }]]),
        "is-loading": a.isCheckoutLoading,
        "tag-name": "button",
        disabled: e.isAddToCartDisabled,
        "border-width": a.blockButtonBorderWidth,
        "border-color": e.buttonBorderColor.normal,
        "border-color-hover": e.buttonBorderColor.hover,
        "background-color": e.buttonBackgroundColor.normal,
        "background-color-hover": e.buttonBackgroundColor.hover,
        onClick: e.handleButtonClick
    }, null, 8, ["type", "content", "class", "is-loading", "disabled", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [[i, "productsection-btn-addtobag"]]), a.isExpressCheckoutEnabled ? (m(),
    $(e.ExpressCheckoutElement, {
        key: 0,
        "price-data": e.priceData,
        "is-physical": e.isPhysical,
        products: [e.productData],
        "update-cart-data": a.updateCartData,
        "success-url": a.successUrl,
        "cart-id": a.cartId,
        "stripe-public-key": a.stripePublicKey,
        "stripe-account-id": a.stripeAccountId,
        "store-id": a.storeId,
        "is-in-editor": a.isInEditor,
        "is-add-to-bag-enabled": e.isAddToBagEnabled,
        regions: a.regions,
        onSetCartData: n[2] || (n[2] = s => t.$emit("set-cart-data", s)),
        onGetRegions: n[3] || (n[3] = s => t.$emit("get-regions")),
        onCreateCart: e.handleCreateCart,
        onButtonClick: e.handleExpressCheckoutButtonClick
    }, null, 8, ["price-data", "is-physical", "products", "update-cart-data", "success-url", "cart-id", "stripe-public-key", "stripe-account-id", "store-id", "is-in-editor", "is-add-to-bag-enabled", "regions"])) : x("", !0)])) : x("", !0), e.isDescriptionVisible && (e.isDescriptionShownOnMobileWithAdditionalSections || !e.productAdditionalInfo.length) ? le((m(),
    y("p", {
        key: 1,
        class: "block-product__description",
        innerHTML: e.productData.description
    }, null, 8, nk)), [[i, "builder-product-section-description"]]) : x("", !0), e.isAdditionalInfoVisible ? (m(),
    $(e.AdditionalInfoSections, {
        key: 2,
        data: e.productAdditionalInfo,
        "product-description": e.productData.description
    }, null, 8, ["data", "product-description"])) : a.isQuickPreview ? (m(),
    y("a", {
        key: 3,
        href: e.productPageUrl,
        class: "block-product__link body-small"
    }, te(a.translations.moreDetails), 9, rk)) : x("", !0)])], 6))], 16, Yw)
}
const ik = oe(Gw, [["render", ok]])
  , sk = t => {
    const n = u( () => t.quickPreviewProductId || t.data.product.id)
      , a = u( () => t.data.settings?.styles)
      , e = u( () => t.data.textColorVars)
      , r = u( () => t.data.buttonText)
      , o = u( () => t.data.buttonStyle)
      , i = u( () => t.data.buttonType)
      , s = u( () => t.data.buttonBorderWidth)
      , l = u( () => t.data.navigationArrowsColor)
      , d = u( () => t.data.navigationThumbnailArrowsColor)
      , p = u( () => t.data.galleryPlacement)
      , g = u( () => t.data.imageRatio)
      , h = u( () => t.data.imageBorderRadius)
      , f = u( () => t.data.isQuantityPickerEnabled ?? !0);
    return {
        productId: n,
        blockStyle: a,
        blockButtonText: r,
        blockButtonStyle: o,
        blockButtonType: i,
        blockButtonBorderWidth: s,
        textColorVars: e,
        imageBorderRadius: h,
        navigationArrowsColor: l,
        navigationThumbnailArrowsColor: d,
        galleryPlacement: p,
        imageRatio: g,
        isQuantityPickerEnabled: f
    }
}
  , lk = (t, n) => {
    const a = document.head.getElementsByTagName("script")
      , e = Array.from(a).find(l => l.type === "application/ld+json" && !!l.textContent?.includes("https://schema.org/"));
    if (!e || !e.textContent)
        return;
    const r = JSON.parse(e.textContent)
      , o = t.variants.length > 1
      , i = t.variants[0].manage_inventory ? !!n[0].inventory_quantity : !0;
    if (r.offers["@type"] === "AggregateOffer" && o && (r.offers.offerCount = t.variants.length),
    !o && i)
        return;
    o ? delete r.offers.availability : r.offers.availability = "https://schema.org/OutOfStock",
    e.textContent = JSON.stringify(r),
    document.head.removeChild(e);
    const s = document.createElement("script");
    s.type = "application/ld+json",
    s.textContent = JSON.stringify(r),
    document.head.appendChild(s)
}
  , ck = re({
    __name: "BlockEcommerceProductProviderUser",
    props: {
        blockId: {
            default: ""
        },
        data: {},
        lcp: {
            default: () => ({})
        },
        ecommerceTranslations: {
            default: () => ({})
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        legacyProductPages: {
            default: () => []
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        currentPageType: {
            default: "default"
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        isMobileView: {
            type: Boolean
        },
        quickPreviewProductId: {},
        currentPreviewProductPageId: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {siteId: e, ecommerceStoreId: r, hasGoogleAdsApp: o} = _t()
          , {quantifiedCartItemsList: i, canAddToCart: s, isShoppingCartOpen: l, shoppingCartItems: d, variantsQuantity: p, isCheckoutLoading: g, setShoppingCartOpen: h, setShoppingCartItems: f, setIsCheckoutLoading: _, setSelectedBookingProduct: A, updateVariantsQuantity: E, cartData: w, updateCartData: k, setCartData: O, createCart: I, getStoreShippingRegions: R, regions: Y} = Ea()
          , {openEcommerceModal: G, closeEcommerceModal: X} = Pa()
          , {initiateCheckout: q} = go()
          , {addImagesToLightbox: D} = ur()
          , {productId: j, blockStyle: z, blockButtonText: ee, blockButtonStyle: F, blockButtonType: S, blockButtonBorderWidth: N, textColorVars: M, imageBorderRadius: W, navigationArrowsColor: b, navigationThumbnailArrowsColor: v, galleryPlacement: L, imageRatio: B, isQuantityPickerEnabled: K} = sk(a)
          , Z = T(!0)
          , H = T(null)
          , C = T(ba)
          , me = T(!1)
          , ke = () => {
            setTimeout( () => {
                H.value = Fr
            }
            , 100)
        }
          , ue = () => {
            l.value || h(!0)
        }
          , Se = Pe => {
            const xt = (C.value.images || C.value.media || []).map(Mt => ({
                alt: C.value.title,
                src: Mt.url
            }));
            D(xt, Pe)
        }
          , ve = async Pe => {
            if (await X(),
            C.value.type.value === rt.BOOKING) {
                A(Pe[0]),
                G("EcommerceBookingEventSelect");
                return
            }
            if (ir() || a.isInPreviewMode) {
                G("EcommerceMessageButtonDisabled");
                return
            }
            a.isCartVisible ? (f([...d.value, ...Pe]),
            o.value && ei("add_to_cart", su(Pe[0])),
            ue()) : (_(!0),
            await q(Pe),
            _(!1))
        }
          , Q = async () => {
            const Pe = {
                storeId: r.value
            };
            Z.value = !0;
            try {
                if (Ao(a.currentPageType) && !a.isQuickPreview && !a.isInPreviewMode)
                    Pe.slug = window?.location?.pathname?.split("/")?.[1] || "";
                else if (Ao(a.currentPageType) && a.isInPreviewMode && a.currentPreviewProductPageId)
                    Pe.productId = a.currentPreviewProductPageId;
                else if (j.value !== -1)
                    Pe.productId = j.value;
                else
                    return;
                const ot = await Lt.getProductByIdOrSlug(Pe);
                await E([ot]),
                ot && (C.value = ot)
            } catch (ot) {
                console.error(ot)
            } finally {
                Z.value = !1
            }
        }
          , ie = async () => {
            ke(),
            await Q()
        }
          , Ee = Pe => {
            I([Pe || C.value])
        }
        ;
        xe( () => {
            me.value = Ju(),
            ie()
        }
        ),
        Zt( () => {
            X()
        }
        ),
        Ao(a.currentPageType) && (je( () => a.currentPreviewProductPageId, (Pe, ot) => {
            Pe !== ot && ie()
        }
        ),
        je(C, () => {
            C.value && lk(C.value, p.value)
        }
        ));
        const ge = {
            props: a,
            siteId: e,
            ecommerceStoreId: r,
            hasGoogleAdsApp: o,
            quantifiedCartItemsList: i,
            canAddToCart: s,
            isShoppingCartOpen: l,
            shoppingCartItems: d,
            variantsQuantity: p,
            isCheckoutLoading: g,
            setShoppingCartOpen: h,
            setShoppingCartItems: f,
            setIsCheckoutLoading: _,
            setSelectedBookingProduct: A,
            updateVariantsQuantity: E,
            cartData: w,
            updateCartData: k,
            setCartData: O,
            createCart: I,
            getStoreShippingRegions: R,
            regions: Y,
            openEcommerceModal: G,
            closeEcommerceModal: X,
            initiateCheckout: q,
            addImagesToLightbox: D,
            productId: j,
            blockStyle: z,
            blockButtonText: ee,
            blockButtonStyle: F,
            blockButtonType: S,
            blockButtonBorderWidth: N,
            textColorVars: M,
            imageBorderRadius: W,
            navigationArrowsColor: b,
            navigationThumbnailArrowsColor: v,
            galleryPlacement: L,
            imageRatio: B,
            isQuantityPickerEnabled: K,
            isLoading: Z,
            animationState: H,
            product: C,
            isExpressCheckoutEnabled: me,
            setAnimationState: ke,
            manageCartOpenState: ue,
            handleImageClick: Se,
            handleBuyButtonClick: ve,
            fetchProductData: Q,
            initiateProduct: ie,
            handleCreateCart: Ee,
            get DATA_ATTRIBUTE_ANIMATION_STATE() {
                return jr
            },
            BlockEcommerceProduct: ik
        };
        return Object.defineProperty(ge, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        ge
    }
});
function uk(t, n, a, e, r, o) {
    return m(),
    $(e.BlockEcommerceProduct, dt({
        "block-id": a.blockId,
        "block-style": e.blockStyle,
        "block-button-text": e.blockButtonText,
        "block-button-style": e.blockButtonStyle,
        "block-button-type": e.blockButtonType,
        "block-button-border-width": e.blockButtonBorderWidth,
        "text-color-vars": e.textColorVars,
        "image-border-radius": e.imageBorderRadius,
        "navigation-arrows-color": e.navigationArrowsColor,
        "navigation-thumbnail-arrows-color": e.navigationThumbnailArrowsColor,
        "gallery-placement": e.galleryPlacement,
        "image-ratio": e.imageRatio,
        "is-quantity-picker-enabled": e.isQuantityPickerEnabled,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        "is-checkout-loading": e.isCheckoutLoading,
        "legacy-product-pages": a.legacyProductPages,
        "is-quick-preview": a.isQuickPreview,
        "current-page-type": a.currentPageType,
        "is-mobile-view": a.isMobileView,
        "product-data": e.product,
        "can-add-to-cart": e.canAddToCart,
        "is-loading": e.isLoading,
        translations: a.ecommerceTranslations,
        "is-cart-visible": a.isCartVisible,
        "is-eager": a.lcp.type === "block-ecommerce-product" && a.lcp.id === a.blockId,
        [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: e.animationState,
        "site-id": e.siteId,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        "is-express-checkout-enabled": e.isExpressCheckoutEnabled,
        "cart-id": e.cartData?.id,
        "update-cart-data": e.updateCartData,
        "store-id": e.ecommerceStoreId,
        regions: e.regions,
        onSetCartData: e.setCartData,
        onCreateCart: e.handleCreateCart,
        onBuyButtonClick: e.handleBuyButtonClick,
        onImageClick: e.handleImageClick,
        onOpenCart: e.manageCartOpenState,
        onGetRegions: e.getStoreShippingRegions
    }), null, 16, ["block-id", "block-style", "block-button-text", "block-button-style", "block-button-type", "block-button-border-width", "text-color-vars", "image-border-radius", "navigation-arrows-color", "navigation-thumbnail-arrows-color", "gallery-placement", "image-ratio", "is-quantity-picker-enabled", "quantified-cart-items-list", "is-checkout-loading", "legacy-product-pages", "is-quick-preview", "current-page-type", "is-mobile-view", "product-data", "can-add-to-cart", "is-loading", "translations", "is-cart-visible", "is-eager", "site-id", "shopping-cart-items", "variants-quantity", "is-express-checkout-enabled", "cart-id", "update-cart-data", "store-id", "regions", "onSetCartData", "onGetRegions"])
}
const ed = oe(ck, [["render", uk]])
  , dk = T({})
  , cs = "forward"
  , hc = "backward"
  , mk = ({isAutoplayEnabled: t, isLoopEnabled: n, autoplayInterval: a, isTransitioning: e, slides: r}={}) => {
    const o = T(0)
      , i = T("")
      , s = T(null)
      , l = u( () => r.value.length)
      , d = u( () => o.value === r.value.length - 1)
      , p = u( () => o.value === 0)
      , g = u( () => (!d.value || n.value) && l.value > 1 && !e.value)
      , h = u( () => (!p.value || n.value) && l.value > 1 && !e.value)
      , f = () => {
        if (g.value) {
            if (i.value = cs,
            n.value && d.value) {
                o.value = 0;
                return
            }
            o.value += 1
        }
    }
      , _ = () => {
        if (h.value) {
            if (i.value = hc,
            n.value && p.value) {
                o.value = r.value.length - 1;
                return
            }
            o.value -= 1
        }
    }
      , A = O => {
        i.value = O > o.value ? cs : hc,
        o.value = O
    }
      , E = () => {
        s.value = setInterval( () => {
            !n.value && d.value || f()
        }
        , a.value * 1e3)
    }
      , w = () => {
        s.value && (clearInterval(s.value),
        s.value = null)
    }
      , k = () => {
        w(),
        t.value && E()
    }
    ;
    return t && (t.value && E(),
    je(t, () => {
        t.value ? E() : w()
    }
    ),
    je(Ib(), O => {
        O === "visible" ? E() : w()
    }
    )),
    a && je(a, () => {
        k()
    }
    ),
    {
        slideshowRefs: dk,
        slideToNext: f,
        slideToPrevious: _,
        slideTo: A,
        slideDirection: i,
        slideCount: l,
        currentSlideIndex: o,
        slides: r,
        isLoopEnabled: n,
        isAutoplayEnabled: t,
        autoplayInterval: a,
        resetAutoplayInterval: k,
        setAutoplayInterval: E,
        clearAutoplayInterval: w,
        canSlideToNext: g,
        canSlideToPrevious: h
    }
}
  , Hs = re({
    props: {
        slides: {
            type: Array,
            required: !0
        },
        isLoopEnabled: {
            type: Boolean,
            default: !1
        },
        currentSlideIndex: {
            type: Number,
            default: 0
        },
        slideDirection: {
            type: String,
            default: cs
        },
        arrowColor: {
            type: String,
            default: "rgb(255, 255, 255)"
        },
        dotColor: {
            type: String,
            default: "rgb(255, 255, 255)"
        },
        isNextButtonDisabled: {
            type: Boolean,
            default: !1
        },
        isPreviousButtonDisabled: {
            type: Boolean,
            default: !1
        },
        isNavigationArrowsVisible: {
            type: Boolean,
            default: !0
        },
        isNavigationDotsVisible: {
            type: Boolean,
            default: !0
        },
        isTransitioning: {
            type: Boolean,
            default: !1
        },
        desktopMinHeight: {
            type: Number,
            required: !0
        },
        mobileMinHeight: {
            type: Number,
            required: !0
        },
        websiteId: {
            type: String,
            default: ""
        }
    },
    emits: ["transition-start", "transition-end", "next-slide", "previous-slide", "dot-click"],
    setup() {
        return {
            FULL_WIDTH: Ja,
            getOptimizedSrc: It
        }
    },
    computed: {
        isNextSlideButtonVisible() {
            if (this.isLoopEnabled)
                return this.isNavigationArrowsVisible;
            const t = this.currentSlideIndex === this.slides.length - 1;
            return this.isNavigationArrowsVisible && !t
        },
        isPreviousSlideButtonVisible() {
            if (this.isLoopEnabled)
                return this.isNavigationArrowsVisible;
            const t = this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
            return this.isNavigationArrowsVisible && !t
        }
    }
})
  , fc = () => {
    ft(t => ({
        fd06db1c: t.desktopMinHeight,
        "1f7ca1af": t.arrowColor,
        "56d289af": t.dotColor,
        "3b9747e2": t.mobileMinHeight
    }))
}
  , yc = Hs.setup;
Hs.setup = yc ? (t, n) => (fc(),
yc(t, n)) : fc;
const td = t => (sa("data-v-f3299b46"),
t = t(),
la(),
t)
  , gk = {
    class: "slideshow"
}
  , pk = ["alt", "src"]
  , vk = ["disabled"]
  , hk = td( () => P("svg", {
    width: "14",
    height: "26",
    viewBox: "0 0 14 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M1 25L13 13L1 1",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , fk = [hk]
  , yk = ["disabled"]
  , bk = td( () => P("svg", {
    width: "14",
    height: "26",
    viewBox: "0 0 14 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M1 25L13 13L1 1",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , _k = [bk]
  , wk = {
    key: 2,
    class: "slideshow__dots"
}
  , kk = ["onClick"];
function Sk(t, n, a, e, r, o) {
    return m(),
    y("div", gk, [Le(Zd, {
        name: `slide-${t.slideDirection}`,
        onLeave: n[0] || (n[0] = i => t.$emit("transition-start")),
        onAfterLeave: n[1] || (n[1] = i => t.$emit("transition-end"))
    }, {
        default: ye( () => [(m(!0),
        y(pe, null, Me(t.slides, (i, s) => le((m(),
        y("img", {
            key: `${i.path}-${s}`,
            alt: i.alt || "",
            class: "slide",
            src: t.getOptimizedSrc(i.origin, i.path, t.websiteId, {
                width: t.FULL_WIDTH
            })
        }, null, 8, pk)), [[ma, t.currentSlideIndex === s]])), 128))]),
        _: 1
    }, 8, ["name"]), t.isNextSlideButtonVisible ? (m(),
    y("button", {
        key: 0,
        class: J(["slideshow-nav-button slideshow-nav-button--right", {
            "is-transitioning": t.isTransitioning
        }]),
        disabled: t.isNextButtonDisabled,
        onClick: n[2] || (n[2] = i => t.$emit("next-slide"))
    }, fk, 10, vk)) : x("", !0), t.isPreviousSlideButtonVisible ? (m(),
    y("button", {
        key: 1,
        class: J(["slideshow-nav-button slideshow-nav-button--left", {
            "is-transitioning": t.isTransitioning
        }]),
        disabled: t.isPreviousButtonDisabled,
        onClick: n[3] || (n[3] = i => t.$emit("previous-slide"))
    }, _k, 10, yk)) : x("", !0), t.isNavigationDotsVisible ? (m(),
    y("div", wk, [(m(!0),
    y(pe, null, Me(t.slides, (i, s) => (m(),
    y("button", {
        key: `${i.path}-${s}`,
        class: J(["dot", {
            "dot--current": t.currentSlideIndex === s
        }]),
        onClick: l => t.$emit("dot-click", s)
    }, null, 10, kk))), 128))])) : x("", !0)])
}
const Ck = oe(Hs, [["render", Sk], ["__scopeId", "data-v-f3299b46"]])
  , Tk = re({
    components: {
        BlockImageSlideshow: Ck
    },
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            default: () => ({})
        },
        websiteId: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const {data: n} = Yi(t)
          , a = T(!1)
          , e = u( () => `${n.value.desktop.minHeight}px`)
          , r = u( () => `${n.value.mobile.minHeight}px`)
          , o = u( () => n.value.settings.styles.navigationDotsColor)
          , i = u( () => n.value.settings.styles.navigationArrowsColor)
          , s = u( () => n.value.slides)
          , l = u( () => n.value.isLoopEnabled)
          , d = u( () => n.value.isAutoplayEnabled)
          , p = u( () => n.value.autoplayInterval)
          , g = u( () => n.value.isNavigationDotsVisible)
          , h = u( () => n.value.isNavigationArrowsVisible)
          , f = u( () => n.value.desktop.minHeight)
          , _ = u( () => n.value.mobile.minHeight)
          , {slideDirection: A, currentSlideIndex: E, canSlideToNext: w, canSlideToPrevious: k, slideToNext: O, slideToPrevious: I, slideTo: R, resetAutoplayInterval: Y, clearAutoplayInterval: G} = mk({
            isAutoplayEnabled: d,
            isLoopEnabled: l,
            autoplayInterval: p,
            isTransitioning: a,
            slides: s
        });
        return {
            canSlideToNext: w,
            canSlideToPrevious: k,
            desktopHeight: e,
            mobileHeight: r,
            slides: s,
            currentSlideIndex: E,
            slideDirection: A,
            isLoopEnabled: l,
            isTransitioning: a,
            resetAutoplayInterval: Y,
            dotColor: o,
            arrowColor: i,
            isNavigationDotsVisible: g,
            isNavigationArrowsVisible: h,
            clearAutoplayInterval: G,
            slideToNext: O,
            slideToPrevious: I,
            slideTo: R,
            desktopMinHeight: f,
            mobileMinHeight: _
        }
    }
});
function Ik(t, n, a, e, r, o) {
    const i = mt("BlockImageSlideshow");
    return m(),
    $(i, {
        slides: t.slides,
        "is-loop-enabled": t.isLoopEnabled,
        "current-slide-index": t.currentSlideIndex,
        "slide-direction": t.slideDirection,
        "dot-color": t.dotColor,
        "is-navigation-arrows-visible": t.isNavigationArrowsVisible,
        "is-navigation-dots-visible": t.isNavigationDotsVisible,
        "arrow-color": t.arrowColor,
        "is-next-button-disabled": !t.canSlideToNext,
        "is-previous-button-disabled": !t.canSlideToPrevious,
        "desktop-min-height": t.desktopMinHeight,
        "mobile-min-height": t.mobileMinHeight,
        "website-id": t.websiteId,
        onTransitionStart: n[0] || (n[0] = s => t.isTransitioning = !0),
        onTransitionEnd: n[1] || (n[1] = s => t.isTransitioning = !1),
        onMouseenter: t.clearAutoplayInterval,
        onMouseleave: t.resetAutoplayInterval,
        onNextSlide: t.slideToNext,
        onPreviousSlide: t.slideToPrevious,
        onDotClick: t.slideTo
    }, null, 8, ["slides", "is-loop-enabled", "current-slide-index", "slide-direction", "dot-color", "is-navigation-arrows-visible", "is-navigation-dots-visible", "arrow-color", "is-next-button-disabled", "is-previous-button-disabled", "desktop-min-height", "mobile-min-height", "website-id", "onMouseenter", "onMouseleave", "onNextSlide", "onPreviousSlide", "onDotClick"])
}
const Pk = oe(Tk, [["render", Ik]])
  , bc = 360
  , Ek = {
    __name: "BlockUser",
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        currentLocale: {
            type: String,
            default: gn
        },
        style: {
            type: Object,
            default: () => ({})
        },
        ecommerceTranslations: {
            type: Object,
            default: () => ({})
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        pageId: {
            type: String,
            required: !0
        },
        currentPageType: {
            type: String,
            default: "default"
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        screenWidth: {
            type: Number,
            default: 0
        },
        isFirstVisibleDesktopBlock: {
            type: Boolean,
            default: !1
        },
        isFirstVisibleMobileBlock: {
            type: Boolean,
            default: !1
        },
        isSiteEngine: {
            type: Boolean,
            default: !1
        },
        isDynamicProductPageEnabled: {
            type: Boolean,
            default: !1
        },
        currentPreviewProductPageId: {
            type: String,
            default: ""
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = T(null)
          , {legacyProductPages: r, isLoaded: o} = Ea({
            blockId: a.id
        })
          , {blocks: i, elements: s, pages: l, siteId: d, blogReadingTimeText: p, blogCategories: g, siteId: h, meta: f} = _t()
          , {addIntersectionObserver: _, observe: A, intersectionObserver: E, animationClass: w} = dr({
            data: a.data
        })
          , k = u( () => a.currentLocale)
          , O = u( () => a.screenWidth <= ar)
          , I = u( () => a.screenWidth <= Ur)
          , R = u( () => a.data.desktop?.isHidden ? a.isInPreviewMode ? a.screenWidth > ar : !0 : !1)
          , Y = u( () => a.data.mobile?.isHidden ? a.isInPreviewMode ? O.value : !0 : !1)
          , G = u( () => ({
            ...a.style,
            ...ga(a.data?.settings?.styles)
        }))
          , X = u( () => {
            if (!a.data?.settings?.styles["m-block-padding"])
                return !1;
            const {top: M, bottom: W} = ao(a.data.settings.styles["m-block-padding"]);
            return Number.parseInt(M, 10) + Number.parseInt(W, 10) > bc
        }
        )
          , q = u( () => a.data.background?.current === "video" ? a.data.background.video.videoSrc : It(a.data.background.origin, a.data.background.path, h.value, {
            width: Ja
        }))
          , D = u( () => en(a.data.background.origin, a.data.background.path, h.value, {
            isMobileFullScreen: X.value
        }))
          , j = u( () => a.data.slot === "footer")
          , z = u( () => {
            if (a.data.type !== yl)
                return null;
            const [,M] = Object.entries(l.value).find( ([W,b]) => b.type === qi && W === a.pageId);
            return M
        }
        )
          , ee = u( () => f.value.stripePublicApiKey)
          , F = u( () => a.data.type === Wi)
          , S = async () => {
            _(),
            (!F.value || o.value) && await A(e.value)
        }
        ;
        xe(async () => {
            await S()
        }
        ),
        Zt( () => E.value?.disconnect()),
        je([k, o], async ([M,W], [b]) => {
            (W || M !== b) && F.value && await A(e.value)
        }
        );
        const N = {
            MOBILE_FULL_HEIGT_THRESHOLD: bc,
            props: a,
            blockRef: e,
            legacyProductPages: r,
            isEcommerceProductsLoaded: o,
            siteBlocks: i,
            siteElements: s,
            siteLanguagePages: l,
            websiteId: d,
            blogReadingTimeText: p,
            blogCategories: g,
            siteId: h,
            meta: f,
            addIntersectionObserver: _,
            observe: A,
            intersectionObserver: E,
            animationClass: w,
            currentSiteLocale: k,
            isMobile: O,
            isLayoutMobile: I,
            isDesktopBlockHidden: R,
            isMobileBlockHidden: Y,
            computedStyles: G,
            isMobileFullScreen: X,
            backgroundSrc: q,
            backgroundSrcSet: D,
            isBlockFooter: j,
            currentBlogPage: z,
            stripePublicApiKey: ee,
            isEcommerceBlock: F,
            initiateAnimations: S,
            computed: u,
            onMounted: xe,
            onBeforeUnmount: Zt,
            ref: T,
            watch: je,
            BlockBackground: Os,
            BlockBlogHeader: Gv,
            get PAGE_TYPE_BLOG() {
                return qi
            },
            get SYSTEM_LOCALE() {
                return gn
            },
            get BLOCK_TYPE_LAYOUT() {
                return Tm
            },
            get BLOCK_TYPE_BLOG_HEADER() {
                return yl
            },
            get BLOCK_TYPE_BLOG_LIST() {
                return Im
            },
            get BLOCK_TYPE_IMAGE_SLIDESHOW() {
                return Pm
            },
            get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
                return Em
            },
            get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
                return Wi
            },
            get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
                return ar
            },
            get MEDIA_MOBILE_BREAKPOINT() {
                return Ur
            },
            get FULL_WIDTH() {
                return Ja
            },
            get getFullWidthSrcset() {
                return en
            },
            get getOptimizedSrc() {
                return It
            },
            get useSiteGlobal() {
                return _t
            },
            get objectToCssVariables() {
                return ga
            },
            get parseCSSSides() {
                return ao
            },
            BlockLayoutProviderUser: u_,
            BlockBlogListProviderUser: N_,
            BlockEcommerceProductListProviderUser: Z0,
            BlockEcommerceProductProviderUser: ed,
            BlockImageSlideshowProviderUser: Pk,
            get useSiteEngineAnimations() {
                return dr
            },
            get useEcommerceGlobal() {
                return Ea
            }
        };
        return Object.defineProperty(N, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        N
    }
}
  , Dk = ["id"];
function Ak(t, n, a, e, r, o) {
    return m(),
    y("section", {
        id: a.id,
        ref: "blockRef",
        class: J(["block", [e.animationClass, {
            "block--footer": e.isBlockFooter,
            "block--desktop-hidden": e.isDesktopBlockHidden,
            "block--mobile-hidden": e.isMobileBlockHidden,
            "block--desktop-first-visible": a.isFirstVisibleDesktopBlock,
            "block--mobile-first-visible": a.isFirstVisibleMobileBlock
        }]]),
        style: ze(e.computedStyles)
    }, [a.data.background ? (m(),
    $(e.BlockBackground, {
        key: 0,
        "overlay-opacity": a.data.background["overlay-opacity"],
        type: a.data.background.current,
        color: a.data.background.color,
        gradient: a.data.background.gradient,
        src: e.backgroundSrc,
        srcset: e.backgroundSrcSet,
        "is-eager": a.lcp.type === "block-background" && a.lcp.id === a.id,
        "is-fixed": a.data.attachment === "fixed",
        alt: a.data.background && a.data.background.alt,
        "is-mobile": e.isMobile,
        "video-poster": a.data.background?.video?.videoThumbnailSrc
    }, null, 8, ["overlay-opacity", "type", "color", "gradient", "src", "srcset", "is-eager", "is-fixed", "alt", "is-mobile", "video-poster"])) : x("", !0), a.data.type === e.BLOCK_TYPE_LAYOUT ? (m(),
    $(e.BlockLayoutProviderUser, {
        key: 1,
        lcp: a.lcp,
        data: a.data,
        "block-id": a.id,
        components: e.siteElements,
        "current-locale": a.currentLocale,
        "is-cart-visible": a.isCartVisible,
        "site-language-pages": e.siteLanguagePages,
        "stripe-public-api-key": e.stripePublicApiKey,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, null, 8, ["lcp", "data", "block-id", "components", "current-locale", "is-cart-visible", "site-language-pages", "stripe-public-api-key", "is-in-preview-mode"])) : x("", !0), a.data.type === e.BLOCK_TYPE_BLOG_HEADER ? (m(),
    $(e.BlockBlogHeader, {
        key: 2,
        data: a.data,
        "current-blog-page": e.currentBlogPage,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText
    }, null, 8, ["data", "current-blog-page", "blog-categories", "blog-reading-time-text"])) : x("", !0), a.data.type === e.BLOCK_TYPE_BLOG_LIST ? (m(),
    $(e.BlockBlogListProviderUser, {
        key: 3,
        data: a.data,
        "block-id": a.id,
        "current-locale": a.currentLocale,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, null, 8, ["data", "block-id", "current-locale", "is-in-preview-mode"])) : x("", !0), a.data.type === e.BLOCK_TYPE_IMAGE_SLIDESHOW ? (m(),
    $(e.BlockImageSlideshowProviderUser, {
        key: 4,
        data: a.data,
        "block-id": a.id,
        "website-id": e.websiteId
    }, null, 8, ["data", "block-id", "website-id"])) : x("", !0), a.data.type === e.BLOCK_TYPE_ECOMMERCE_PRODUCT ? (m(),
    $(e.BlockEcommerceProductProviderUser, {
        key: 5,
        lcp: a.lcp,
        data: a.data,
        "block-id": a.id,
        "legacy-product-pages": e.legacyProductPages,
        "is-cart-visible": a.isCartVisible,
        "ecommerce-translations": a.ecommerceTranslations,
        "current-page-type": a.currentPageType,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-mobile-view": e.isLayoutMobile,
        "is-site-engine": e.props.isSiteEngine,
        "current-preview-product-page-id": a.currentPreviewProductPageId
    }, null, 8, ["lcp", "data", "block-id", "legacy-product-pages", "is-cart-visible", "ecommerce-translations", "current-page-type", "is-in-preview-mode", "is-mobile-view", "is-site-engine", "current-preview-product-page-id"])) : x("", !0), a.data.type === e.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST ? (m(),
    $(e.BlockEcommerceProductListProviderUser, {
        key: 6,
        lcp: a.lcp,
        data: a.data,
        "block-id": a.id,
        blocks: e.siteBlocks,
        "current-locale": a.currentLocale,
        "is-cart-visible": a.isCartVisible,
        "ecommerce-translations": a.ecommerceTranslations,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-mobile-view": e.isLayoutMobile,
        "is-site-engine": e.props.isSiteEngine,
        "is-dynamic-product-page-enabled": a.isDynamicProductPageEnabled
    }, null, 8, ["lcp", "data", "block-id", "blocks", "current-locale", "is-cart-visible", "ecommerce-translations", "is-in-preview-mode", "is-mobile-view", "is-site-engine", "is-dynamic-product-page-enabled"])) : x("", !0)], 14, Dk)
}
const Mk = oe(Ek, [["render", Ak], ["__scopeId", "data-v-19c33b65"]])
  , Ok = re({
    __name: "BlockStickyBarLayout",
    props: {
        blockStyles: {}
    },
    setup(t, {expose: n}) {
        n(),
        ft(l => ({
            "16a0e642": r.value,
            d9a2834e: V(iu),
            ab06013e: e.value,
            "550975b2": o.value
        }));
        const a = t
          , e = u( () => `${Fa}px`)
          , r = u( () => `${Ua}px`)
          , o = u( () => `0 ${Lr}px`)
          , i = u( () => ga(a.blockStyles))
          , s = {
            props: a,
            mobileMaxWidthCSSVar: e,
            maxWidthCSSVar: r,
            tabletBlockPaddingCSSVar: o,
            computedStyles: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function xk(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "block-sticky-bar-layout",
        style: ze(e.computedStyles)
    }, [ne(t.$slots, "default", {}, void 0, !0)], 4)
}
const Bk = oe(Ok, [["render", xk], ["__scopeId", "data-v-c5b36853"]])
  , Lk = re({
    __name: "BlockStickyBarProviderUser",
    props: {
        data: {},
        components: {},
        isInPreviewMode: {
            type: Boolean
        },
        lcp: {},
        screenWidth: {
            default: 0
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(R => ({
            b0d8ca1a: V(iu)
        }));
        const a = {
            [Qa]: fr
        }
          , e = t
          , {siteId: r} = _t()
          , {layoutCSSVars: o} = ns({
            blockData: u( () => e.data),
            siteElements: u( () => e.components),
            shouldBuildResponsive: !e.isInPreviewMode
        })
          , {addIntersectionObserver: i, observe: s, intersectionObserver: l, animationClass: d} = dr({
            data: e.data,
            blockId: Do
        })
          , p = T(null)
          , g = u( () => e.data.background?.origin || null)
          , h = u( () => e.data.background?.path || null)
          , f = u( () => e.screenWidth <= ar)
          , _ = u( () => e.data.desktop?.isHidden ? e.isInPreviewMode ? e.screenWidth > ar : !0 : !1)
          , A = u( () => e.data.mobile?.isHidden ? e.isInPreviewMode ? f.value : !0 : !1)
          , E = u( () => It(g.value, h.value, r.value, {
            width: Ja
        }))
          , w = u( () => en(g.value, h.value, r.value, {
            isMobileFullScreen: !1
        }))
          , k = u( () => e.data.attachment === "fixed")
          , O = async () => {
            i(),
            p.value && await s(p.value)
        }
        ;
        xe(async () => {
            await O()
        }
        ),
        Zt( () => l.value?.disconnect());
        const I = {
            CUSTOM_ATTRIBUTES: a,
            props: e,
            siteId: r,
            layoutCSSVars: o,
            addIntersectionObserver: i,
            observe: s,
            intersectionObserver: l,
            animationClass: d,
            blockRef: p,
            backgroundOrigin: g,
            backgroundPath: h,
            isMobile: f,
            isDesktopBlockHidden: _,
            isMobileBlockHidden: A,
            backgroundSrc: E,
            backgroundSrcSet: w,
            isBlockBackgroundFixed: k,
            initiateAnimations: O,
            BlockBackground: Os,
            BlockStickyBarLayout: Bk,
            GridTextBox: Ru
        };
        return Object.defineProperty(I, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        I
    }
});
function Rk(t, n, a, e, r, o) {
    return m(),
    y("section", {
        ref: "blockRef",
        class: J(["block-sticky-bar", [{
            "block-sticky-bar--desktop-hidden": e.isDesktopBlockHidden,
            "block-sticky-bar--mobile-hidden": e.isMobileBlockHidden
        }]])
    }, [a.data.background ? (m(),
    $(e.BlockBackground, {
        key: 0,
        class: "block-sticky-bar__background",
        "overlay-opacity": a.data.background["overlay-opacity"],
        type: a.data.background.current,
        gradient: a.data.background.gradient,
        color: a.data.background.color,
        src: e.backgroundSrc,
        srcset: e.backgroundSrcSet,
        "is-fixed": e.isBlockBackgroundFixed,
        alt: a.data.background && a.data.background.alt
    }, null, 8, ["overlay-opacity", "type", "gradient", "color", "src", "srcset", "is-fixed", "alt"])) : x("", !0), Le(e.BlockStickyBarLayout, {
        "block-styles": a.data.settings.styles,
        style: ze(e.layoutCSSVars),
        class: J(e.animationClass)
    }, {
        default: ye( () => [(m(!0),
        y(pe, null, Me(a.data.items, (i, s) => (m(),
        $(e.GridTextBox, et({
            key: `sticky-element-${s}`,
            class: "block-sticky-bar__element",
            "text-align": "flex-start",
            "text-align-mobile": "flex-start",
            content: i.content
        }, e.CUSTOM_ATTRIBUTES), null, 16, ["content"]))), 128))]),
        _: 1
    }, 8, ["block-styles", "style", "class"])], 2)
}
const Nk = oe(Lk, [["render", Rk], ["__scopeId", "data-v-a94e2aa2"]])
  , Hk = "https://builder-backend.hostinger.com/u1/sites"
  , Vk = {
    verifyPagePassword: async ({siteId: t, pageId: n, locale: a, password: e}) => fetch(`${Hk}/verify-page-password`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            siteId: t,
            pageId: n,
            language: a,
            password: e
        })
    })
}
  , Uk = {
    src: "/_astro-1738005405657/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg"
}
  , Fk = re({
    __name: "PasswordPage",
    props: {
        siteId: {},
        pageId: {},
        locale: {},
        currentPageData: {},
        isCurrentPageHomepage: {
            type: Boolean,
            default: !1
        },
        inPreviewMode: {
            type: Boolean,
            default: !1
        },
        defaultLocale: {},
        homepageName: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {pageData: e, setPageData: r} = _t()
          , o = T(!1)
          , i = T("")
          , s = T("")
          , l = u( () => a.currentPageData?.meta?.passwordDesign ?? "")
          , d = u( () => a.currentPageData?.meta?.passwordHeadingText ?? "Guest Area")
          , p = u( () => a.currentPageData?.meta?.passwordSubheadingText ?? "Please enter the password to access the page")
          , g = u( () => a.currentPageData?.meta?.passwordButtonText ?? "Enter")
          , h = u( () => a.currentPageData?.meta?.passwordPlaceholderText ?? "Type password")
          , f = u( () => a.currentPageData?.meta?.passwordBackText ?? "Back to")
          , _ = u( () => l.value === Dm)
          , A = u( () => l.value === Am)
          , E = async () => {
            if (i.value) {
                o.value = !0;
                try {
                    const I = await Vk.verifyPagePassword({
                        siteId: a.siteId,
                        pageId: a.pageId,
                        locale: a.locale,
                        password: i.value
                    });
                    if (I.ok) {
                        const {pageData: R} = await I.json();
                        r({
                            ...e.value,
                            pages: {
                                ...e.value.pages,
                                ...R.pages
                            },
                            blocks: {
                                ...e.value.blocks,
                                ...R.blocks
                            },
                            elements: {
                                ...e.value.elements,
                                ...R.elements
                            }
                        });
                        return
                    }
                    I.status === 401 ? s.value = "Please enter the correct password" : I.status === 429 ? s.value = "Too many attempts. Please try again later" : s.value = "An error occurred. Please try again later"
                } catch {
                    s.value = "An error occurred. Please try again later"
                } finally {
                    o.value = !1
                }
            }
        }
          , w = u( () => a.locale && a.locale !== a.defaultLocale ? `/${a.locale}` : "/")
          , k = u( () => !a.inPreviewMode && !a.isCurrentPageHomepage);
        xe( () => {
            document.body.style.overflow = "hidden"
        }
        ),
        Zt( () => {
            document.body.style.overflow = ""
        }
        );
        const O = {
            props: a,
            pageData: e,
            setPageData: r,
            isLoading: o,
            password: i,
            errorMessage: s,
            passwordPageStyle: l,
            passwordPageHeading: d,
            passwordPageSubheading: p,
            passwordPageButtonText: g,
            passwordPlaceholder: h,
            passwordBackText: f,
            isCalmTheme: _,
            isPopularTheme: A,
            handleUnlockSubmit: E,
            homepageLink: w,
            isHomepageLinkShown: k,
            get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
                return qp
            },
            ZyroLoader: Bs
        };
        return Object.defineProperty(O, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        O
    }
})
  , jk = t => (sa("data-v-827bb7d1"),
t = t(),
la(),
t)
  , Gk = {
    key: 0,
    class: "password-page__background-wave-wrapper"
}
  , Yk = jk( () => P("div", {
    class: "password-page__background-wave"
}, null, -1))
  , Wk = [Yk]
  , qk = ["src"]
  , $k = {
    key: 0,
    class: "password-page__icon-lock",
    src: Uk
}
  , zk = {
    class: "password-page__heading"
}
  , Zk = {
    for: "password",
    class: "password-page__label"
}
  , Kk = ["placeholder"]
  , Qk = {
    key: 1,
    class: "password-page__error-message"
}
  , Xk = ["disabled"]
  , Jk = {
    key: 1
}
  , e1 = {
    key: 2,
    class: "password-page__homepage-link"
}
  , t1 = ["href"];
function a1(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("main", {
        class: J(["password-page", {
            "password-page--calm": e.isCalmTheme,
            "password-page--popular": e.isPopularTheme
        }])
    }, [e.isCalmTheme ? le((m(),
    y("div", Gk, Wk)), [[i, "password-page-background-calm"]]) : x("", !0), e.isPopularTheme ? le((m(),
    y("img", {
        key: 1,
        class: "password-page__background-image",
        src: `${e.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`
    }, null, 8, qk)), [[i, "password-page-background-popular"]]) : x("", !0), P("form", {
        class: "password-page__form",
        onSubmit: Re(e.handleUnlockSubmit, ["prevent"])
    }, [e.isCalmTheme ? (m(),
    y("img", $k)) : x("", !0), le((m(),
    y("h1", zk, [$e(te(e.passwordPageHeading), 1)])), [[i, "password-page-heading"]]), le((m(),
    y("label", Zk, [$e(te(e.passwordPageSubheading), 1)])), [[i, "password-page-subheading"]]), le(P("input", {
        id: "password",
        "onUpdate:modelValue": n[0] || (n[0] = s => e.password = s),
        type: "password",
        autocomplete: "off",
        autocapitalize: "off",
        autocorrect: "off",
        name: "password",
        placeholder: e.passwordPlaceholder,
        required: "",
        class: J(["password-page__input", {
            "password-page__input--error": e.errorMessage
        }]),
        onBlur: n[1] || (n[1] = s => e.errorMessage = "")
    }, null, 42, Kk), [[$c, e.password], [i, "password-page-placeholder"]]), e.errorMessage ? (m(),
    y("p", Qk, te(e.errorMessage), 1)) : x("", !0), le((m(),
    y("button", {
        class: "password-page__button",
        disabled: e.isLoading,
        type: "submit"
    }, [e.isLoading ? (m(),
    $(e.ZyroLoader, {
        key: 0,
        size: "24px"
    })) : (m(),
    y("span", Jk, te(e.passwordPageButtonText), 1))], 8, Xk)), [[i, "password-page-button"]]), e.isHomepageLinkShown ? le((m(),
    y("p", e1, [$e(te(e.passwordBackText) + " ", 1), P("a", {
        href: e.homepageLink,
        class: "password-page__homepage-link-text"
    }, te(a.homepageName), 9, t1)])), [[i, "password-page-footer"]]) : x("", !0)], 32)], 2)
}
const n1 = oe(Fk, [["render", a1], ["__scopeId", "data-v-827bb7d1"]])
  , r1 = {}
  , o1 = ws('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>', 1)
  , i1 = [o1];
function s1(t, n) {
    return m(),
    y("button", {
        class: "delete-button",
        onClick: n[0] || (n[0] = a => t.$emit("handle-button-click"))
    }, i1)
}
const l1 = oe(r1, [["render", s1], ["__scopeId", "data-v-334df6f8"]])
  , c1 = {}
  , u1 = t => (sa("data-v-76122c3e"),
t = t(),
la(),
t)
  , d1 = {
    class: "close-button"
}
  , m1 = u1( () => P("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M12 4L4 12",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), P("path", {
    d: "M4 4L12 12",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , g1 = [m1];
function p1(t, n) {
    return m(),
    y("button", d1, g1)
}
const Vs = oe(c1, [["render", p1], ["__scopeId", "data-v-76122c3e"]])
  , v1 = re({
    name: "Drawer",
    components: {
        CloseButton: Vs
    },
    props: {
        placement: {
            type: String,
            default: "right",
            validator: t => ["right", "left"].includes(t)
        },
        width: {
            type: String,
            default: "350px"
        },
        alwaysShowCloseButton: {
            type: Boolean,
            default: !0
        },
        isOpen: {
            type: Boolean,
            default: !1
        },
        topPositionMobile: {
            type: String,
            default: "0px"
        },
        isMobile: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["close-drawer"],
    setup(t, n) {
        const a = T(null);
        return xe( () => {
            ri(a, () => {
                t.isMobile || n.emit("close-drawer")
            }
            )
        }
        ),
        {
            siteDrawerRef: a
        }
    },
    computed: {
        computedStyles() {
            return {
                "--sidebar-width": this.width,
                "--sidebar-top-mobile": this.topPositionMobile
            }
        }
    },
    methods: {
        closeDrawer() {
            this.$emit("close-drawer")
        }
    }
})
  , h1 = {
    class: "site-drawer__content"
};
function f1(t, n, a, e, r, o) {
    const i = mt("CloseButton")
      , s = st("qa");
    return m(),
    y("div", null, [t.isOpen && !t.isMobile ? (m(),
    y("div", {
        key: 0,
        class: J(["site-drawer-overlay", {
            "site-drawer-overlay--open": t.isOpen
        }]),
        onTouchend: n[0] || (n[0] = Re( () => {}
        , ["stop", "prevent"]))
    }, null, 34)) : x("", !0), Le(ra, {
        name: t.placement === "right" ? "drawer-slide-right" : "drawer-slide-left"
    }, {
        default: ye( () => [t.isOpen ? (m(),
        y("aside", {
            key: 0,
            ref: "siteDrawerRef",
            class: J([{
                "site-drawer--left": t.placement === "left",
                "site-drawer--right": t.placement === "right"
            }, "site-drawer"]),
            style: ze(t.computedStyles)
        }, [P("div", h1, [le((m(),
        y("span", {
            class: J(["site-drawer__close-button", {
                "site-drawer__close-button--hide-mobile": !t.alwaysShowCloseButton
            }]),
            onClick: n[1] || (n[1] = (...l) => t.closeDrawer && t.closeDrawer(...l))
        }, [Le(i)], 2)), [[s, "builder-sitedrawer-btn-close"]]), ne(t.$slots, "default", {}, void 0, !0)])], 6)) : x("", !0)]),
        _: 3
    }, 8, ["name"])])
}
const y1 = oe(v1, [["render", f1], ["__scopeId", "data-v-3c448ca7"]])
  , _c = 90
  , b1 = re({
    __name: "EcommerceShoppingCart",
    props: {
        stickyBarHeight: {
            default: 0
        },
        isLoading: {
            type: Boolean
        },
        isShoppingCartOpen: {
            type: Boolean
        },
        translations: {
            default: () => ({})
        },
        language: {},
        isHeaderSticky: {
            type: Boolean
        },
        isNavHidden: {
            type: Boolean,
            default: !1
        },
        siteId: {
            default: ""
        },
        quantifiedCartItemsList: {
            default: () => []
        },
        shoppingCartItems: {
            default: () => []
        },
        variantsQuantity: {
            default: () => []
        },
        isMobile: {
            type: Boolean
        }
    },
    emits: ["close-shopping-cart", "checkout-button-click", "set-shopping-cart-items"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = T(!1)
          , i = T("0px")
          , s = T(null)
          , l = T(!0)
          , d = T(0)
          , p = u( () => e.quantifiedCartItemsList.reduce( (S, N) => S + (N.product?.variants[0]?.prices[0]?.sale_amount || N.product?.variants[0]?.prices[0]?.amount || 0) * N.quantity, 0))
          , g = u( () => e.quantifiedCartItemsList[0]?.product?.variants[0]?.prices[0]?.currency)
          , h = u( () => ({
            "--image-width": `${_c}px`
        }))
          , f = u( () => e.shoppingCartItems.length >= er)
          , _ = S => {
            if (S.product.variants[0].manage_inventory) {
                const M = e.variantsQuantity.find(W => W.id === S.product.variants[0].id)?.inventory_quantity || 0;
                return S.quantity < M
            }
            return !0
        }
          , A = S => {
            r("set-shopping-cart-items", [...e.shoppingCartItems, S.product])
        }
          , E = S => {
            const N = [...e.shoppingCartItems]
              , M = e.shoppingCartItems.filter(b => b.variants[0].id === S.product.variants[0].id)
              , W = e.shoppingCartItems.lastIndexOf(M[M.length - 1]);
            N.splice(W, 1),
            r("set-shopping-cart-items", N)
        }
          , w = (S, N) => {
            if (S > N.quantity) {
                A(N);
                return
            }
            E(N)
        }
          , k = S => {
            const N = e.shoppingCartItems.reduce( (M, W) => {
                const b = W.variants[0].id === S.variants[0].id
                  , v = S.custom_fields?.every(L => W.custom_fields?.some(B => oo(B, L)));
                return b && v ? M : [...M, W]
            }
            , []);
            r("set-shopping-cart-items", N)
        }
          , O = () => {
            r("close-shopping-cart")
        }
          , I = () => {
            const S = Number(d.value) + e.stickyBarHeight;
            o.value = e.isHeaderSticky || (e.isNavHidden ? !1 : window.scrollY <= S * .4)
        }
          , R = () => {
            const S = d.value + e.stickyBarHeight
              , N = e.isHeaderSticky ? S : S - window.scrollY;
            i.value = `${o.value ? Math.floor(N) - 1 : 0}px`
        }
          , Y = () => {
            I(),
            R()
        }
          , G = () => {
            d.value = document.querySelector(".block-header")?.clientHeight || 0
        }
          , X = S => new Date(S.product?.variants[0]?.booking_event?.date).toLocaleDateString(e.language) || null
          , q = S => {
            const N = new Date(S.product?.variants[0]?.booking_event?.time_slot)
              , M = N.getTime()
              , W = new Date(M + ss(S.product))
              , b = N.toLocaleTimeString(e.language, {
                hour: "2-digit",
                minute: "2-digit"
            })
              , v = W.toLocaleTimeString(e.language, {
                hour: "2-digit",
                minute: "2-digit"
            });
            return `${b} - ${v}`
        }
          , D = S => S.product?.type.value === rt.BOOKING
          , j = S => S.product?.type.value === rt.DIGITAL
          , z = S => S.product.variants[0].image_url || S.product.thumbnail
          , ee = S => rs(S.product) ? e.translations.free || "Free" : bn({
            amount: S.product.variants[0].prices[0].amount,
            currency: S.product.variants[0].prices[0].currency
        });
        je( () => e.isShoppingCartOpen, S => {
            document.documentElement.style.overflow = S ? "hidden" : "auto"
        }
        ),
        je(d, () => {
            Y()
        }
        ),
        xe( () => {
            const S = document.querySelector(".block-header");
            S && (s.value = new ResizeObserver( () => {
                G()
            }
            ),
            s.value.observe(S)),
            window.addEventListener("scroll", Y)
        }
        ),
        Zt( () => {
            s.value?.disconnect(),
            window.removeEventListener("scroll", Y)
        }
        );
        const F = {
            IMAGE_WIDTH_PX: _c,
            props: e,
            emits: r,
            isHeaderVisible: o,
            topPositionMobile: i,
            resizeObserver: s,
            isCustomFieldValid: l,
            headerHeight: d,
            totalPrice: p,
            currencyCode: g,
            computedStyle: h,
            isLimitReached: f,
            isStockAvailable: _,
            increaseQuantity: A,
            decreaseQuantity: E,
            handleQuantityChange: w,
            removeProduct: k,
            closeShoppingCart: O,
            setHeaderVisibility: I,
            setTopPositionMobile: R,
            setHeaderVisibilityValues: Y,
            setHeaderHeight: G,
            getFormattedSelectedDate: X,
            getFormattedTime: q,
            getIsProductTypeBooking: D,
            getIsProductTypeDigital: j,
            getProductImage: z,
            getProductPrice: ee,
            DeleteButton: l1,
            Drawer: y1,
            get formatPrice() {
                return bn
            },
            ProductMediaElement: ai,
            QuantityPicker: Xu,
            get getFormattedBookingDuration() {
                return Rs
            },
            get getIsFreeProductTypeFree() {
                return rs
            }
        };
        return Object.defineProperty(F, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        F
    }
})
  , ad = t => (sa("data-v-2cca3641"),
t = t(),
la(),
t)
  , _1 = {
    class: "cart"
}
  , w1 = {
    class: "cart__content"
}
  , k1 = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin"
}
  , S1 = {
    key: 1,
    class: "cart__content-title"
}
  , C1 = {
    class: "cart__list"
}
  , T1 = {
    class: "cart__title"
}
  , I1 = {
    key: 0,
    class: "cart__text"
}
  , P1 = {
    key: 1,
    class: "cart__text cart__sale-price"
}
  , E1 = {
    class: "cart__text cart__duration"
}
  , D1 = {
    class: "cart__time-wrapper"
}
  , A1 = ad( () => P("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "cart__time-icon"
}, [P("path", {
    d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
    fill: "currentColor"
})], -1))
  , M1 = {
    class: "cart__text cart__text--lighter"
}
  , O1 = {
    class: "cart__time-wrapper"
}
  , x1 = ad( () => P("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "cart__time-icon"
}, [P("path", {
    d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
    fill: "currentColor"
})], -1))
  , B1 = {
    class: "cart__text cart__text--lighter"
}
  , L1 = {
    key: 3,
    class: "cart__quantity"
}
  , R1 = {
    class: "cart__quantity-title"
}
  , N1 = {
    key: 0,
    class: "cart__footer"
}
  , H1 = {
    class: "cart__title cart__title--with-slot"
}
  , V1 = ["disabled"];
function U1(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    $(e.Drawer, {
        "is-open": a.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: ze(e.computedStyle),
        "is-mobile": a.isMobile,
        class: "cart-drawer",
        onCloseDrawer: e.closeShoppingCart
    }, {
        default: ye( () => [P("div", _1, [P("div", w1, [a.quantifiedCartItemsList.length ? (m(),
        y("p", S1, te(a.translations.shoppingBag), 1)) : le((m(),
        y("p", k1, [$e(te(a.translations.shoppingBagEmpty), 1)])), [[i, "shoppingcart-text-emptystate"]]), P("ul", C1, [(m(!0),
        y(pe, null, Me(a.quantifiedCartItemsList, s => (m(),
        y("li", {
            key: s.product.variants[0].id,
            class: "cart__list-item"
        }, [s.product.thumbnail ? (m(),
        $(e.ProductMediaElement, {
            key: 0,
            src: e.getProductImage(s),
            alt: s.product.title,
            class: "cart__list-item-image",
            width: e.IMAGE_WIDTH_PX,
            height: e.IMAGE_WIDTH_PX,
            "site-id": a.siteId,
            "enable-srcset": ""
        }, null, 8, ["src", "alt", "site-id"])) : x("", !0), P("div", null, [le((m(),
        y("p", T1, [$e(te(s.product.title), 1)])), [[i, "shoppingcart-text-product"]]), s.product.options.length ? le((m(),
        y("p", I1, [$e(te(s.product.variants[0].title), 1)])), [[i, "shoppingcart-text-variant"]]) : x("", !0), le((m(),
        y("p", {
            class: J(["cart__text cart__price", {
                "cart__price--strikethrough": s.product.variants[0].prices[0].sale_amount
            }])
        }, [$e(te(e.getProductPrice(s)), 1)], 2)), [[i, "shoppingcart-text-price"]]), s.product.variants[0].prices[0].sale_amount ? le((m(),
        y("p", P1, [$e(te(e.formatPrice({
            amount: s.product.variants[0].prices[0].sale_amount,
            currency: s.product.variants[0].prices[0].currency
        })), 1)])), [[i, "shoppingcart-text-saleprice"]]) : x("", !0), e.getIsProductTypeBooking(s) ? (m(),
        y(pe, {
            key: 2
        }, [le((m(),
        y("p", E1, [$e(te(e.getFormattedBookingDuration(s.product, a.translations)), 1)])), [[i, "shoppingcart-text-duration"]]), P("div", D1, [A1, P("p", M1, te(e.getFormattedSelectedDate(s)), 1)]), P("div", O1, [x1, P("p", B1, te(e.getFormattedTime(s)), 1)])], 64)) : !e.getIsFreeProductTypeFree(s.product) && !e.getIsProductTypeDigital(s) ? (m(),
        y("p", L1, [P("span", R1, te(a.translations.quantityShort) + ": ", 1), Le(e.QuantityPicker, {
            "qa-selector": "shoppingcart",
            "is-cart-style": "",
            size: 26,
            "font-size": 14,
            quantity: s.quantity,
            "is-input-disabled": "",
            "is-limit-reached": e.isLimitReached,
            "is-stock-available": e.isStockAvailable(s),
            onQuantityChange: l => e.handleQuantityChange(l, s)
        }, null, 8, ["quantity", "is-limit-reached", "is-stock-available", "onQuantityChange"])])) : x("", !0), s.product.custom_fields?.length ? (m(!0),
        y(pe, {
            key: 4
        }, Me(s.product.custom_fields, (l, d) => (m(),
        y("div", {
            key: `${l.id}-${d}`,
            class: "cart__text cart__custom-field"
        }, [P("p", null, te(l.title), 1), P("p", null, te(l.value), 1)]))), 128)) : x("", !0)]), le(Le(e.DeleteButton, {
            class: "cart__remove-button",
            onHandleButtonClick: l => e.removeProduct(s.product)
        }, null, 8, ["onHandleButtonClick"]), [[i, "shoppingcart-btn-delete"]])]))), 128))])]), a.quantifiedCartItemsList.length ? (m(),
        y("div", N1, [le((m(),
        y("p", H1, [$e(te(a.translations.subtotal) + ": ", 1), P("span", null, te(e.formatPrice({
            amount: e.totalPrice,
            currency: e.currencyCode
        })), 1)])), [[i, "shoppingcart-text-subtotal"]]), le((m(),
        y("button", {
            class: J(["cart__text cart__checkout-button", {
                loading: a.isLoading
            }]),
            disabled: !e.isCustomFieldValid,
            onClick: n[0] || (n[0] = s => t.$emit("checkout-button-click"))
        }, [$e(te(a.translations.checkout), 1)], 10, V1)), [[i, "shoppingcart-btn-checkout"]])])) : x("", !0)])]),
        _: 1
    }, 8, ["is-open", "top-position-mobile", "style", "is-mobile"])
}
const F1 = oe(b1, [["render", U1], ["__scopeId", "data-v-2cca3641"]])
  , j1 = re({
    __name: "EcommerceShoppingCartProviderUser",
    props: {
        stickyBarHeight: {
            default: 0
        },
        ecommerceTranslations: {},
        language: {},
        isHeaderSticky: {
            type: Boolean,
            default: !1
        },
        isNavHidden: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        isMobile: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {siteId: e} = _t()
          , {quantifiedCartItemsList: r, isShoppingCartOpen: o, isCheckoutLoading: i, shoppingCartItems: s, variantsQuantity: l, fetchCartProducts: d, setShoppingCartOpen: p, setShoppingCartItems: g, setIsCheckoutLoading: h} = Ea()
          , {openEcommerceModal: f} = Pa()
          , {initiateCheckout: _} = go()
          , A = async () => {
            await d()
        }
          , E = async () => {
            if (ir() || a.isInPreviewMode) {
                f("EcommerceMessageButtonDisabled");
                return
            }
            i.value || (h(!0),
            await _(s.value).then( () => {
                p(!1),
                h(!1)
            }
            ))
        }
        ;
        xe(async () => {
            await A()
        }
        );
        const w = {
            props: a,
            siteId: e,
            quantifiedCartItemsList: r,
            isShoppingCartOpen: o,
            isCheckoutLoading: i,
            shoppingCartItems: s,
            variantsQuantity: l,
            fetchCartProducts: d,
            setShoppingCartOpen: p,
            setShoppingCartItems: g,
            setIsCheckoutLoading: h,
            openEcommerceModal: f,
            initiateCheckout: _,
            loadProducts: A,
            initCheckout: E,
            EcommerceShoppingCart: F1
        };
        return Object.defineProperty(w, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        w
    }
});
function G1(t, n, a, e, r, o) {
    const i = st("qa");
    return le((m(),
    $(e.EcommerceShoppingCart, {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "sticky-bar-height": a.stickyBarHeight,
        "is-header-sticky": a.isHeaderSticky,
        "is-nav-hidden": a.isNavHidden,
        translations: a.ecommerceTranslations,
        language: a.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        "is-mobile": a.isMobile,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = s => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems
    }, null, 8, ["is-shopping-cart-open", "is-loading", "sticky-bar-height", "is-header-sticky", "is-nav-hidden", "translations", "language", "site-id", "quantified-cart-items-list", "shopping-cart-items", "variants-quantity", "is-mobile", "onSetShoppingCartItems"])), [[i, "user-section-zyroecommerceshoppingcart"]])
}
const Y1 = oe(j1, [["render", G1]])
  , W1 = re({
    components: {
        CloseButton: Vs
    },
    props: {
        backgroundColor: {
            type: String,
            default: "var(--color-light)"
        },
        padding: {
            type: String,
            default: "16px"
        },
        width: {
            type: String,
            default: "auto"
        },
        maxWidth: {
            type: String,
            default: "unset"
        },
        overflow: {
            type: String,
            default: "unset"
        },
        height: {
            type: String,
            default: "auto"
        },
        mobileHeight: {
            type: String,
            default: ""
        }
    },
    setup() {
        const {closeEcommerceModal: t} = Pa();
        return {
            closeEcommerceModal: t
        }
    },
    computed: {
        modalStyle() {
            return {
                "--modal-background-color": this.backgroundColor,
                "--padding": this.padding,
                "--width": this.width,
                "--max-width": this.maxWidth,
                "--overflow": this.overflow,
                "--height": this.height,
                "--mobile-height": this.mobileHeight || this.height
            }
        }
    },
    mounted() {
        this.$refs.modal?.focus()
    },
    methods: {
        handleCloseModalAction() {
            this.closeEcommerceModal();
            const t = new URLSearchParams(window.location.search);
            if (!t.get("open-modal"))
                return;
            t.delete("open-modal"),
            t.delete("product");
            const n = t.toString();
            n && window.history.pushState(null, null, `?${n}`)
        }
    }
})
  , q1 = {
    class: "modal-wrapper"
};
function $1(t, n, a, e, r, o) {
    const i = mt("CloseButton");
    return m(),
    $(ra, {
        name: "fade"
    }, {
        default: ye( () => [P("div", q1, [P("div", {
            tabindex: "-1",
            class: "modal-backdrop",
            onClick: n[0] || (n[0] = (...s) => t.handleCloseModalAction && t.handleCloseModalAction(...s))
        }), P("div", {
            ref: "modal",
            style: ze(t.modalStyle),
            class: "modal",
            tabindex: "0",
            "aria-modal": "true",
            onKeydown: n[1] || (n[1] = Ue( (...s) => t.handleCloseModalAction && t.handleCloseModalAction(...s), ["esc"]))
        }, [Le(i, {
            class: "modal__close-button",
            onClick: t.handleCloseModalAction
        }, null, 8, ["onClick"]), ne(t.$slots, "default", {}, void 0, !0)], 36)])]),
        _: 3
    })
}
const yr = oe(W1, [["render", $1], ["__scopeId", "data-v-35831679"]])
  , z1 = {
    __name: "EcommerceProductPreview",
    props: {
        translations: {
            type: Object,
            default: () => {}
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {productPreviewData: e, quickPreviewProductId: r} = Pa()
          , {siteId: o} = _t()
          , {legacyProductPages: i} = Ea()
          , s = u( () => It(e.value.background.origin, e.value.background.path, o.value, {
            width: Ja
        }))
          , l = u( () => en(e.value.background.origin, e.value.background.path, o.value, {
            isMobileFullScreen: !1
        }))
          , d = {
            props: a,
            productPreviewData: e,
            quickPreviewProductId: r,
            siteId: o,
            legacyProductPages: i,
            backgroundSrc: s,
            backgroundSrcSet: l,
            BlockBackground: Os,
            ModalLayout: yr,
            BlockEcommerceProductProviderUser: ed,
            computed: u,
            get useEcommerceModal() {
                return Pa
            },
            get getFullWidthSrcset() {
                return en
            },
            get getOptimizedSrc() {
                return It
            },
            get FULL_WIDTH() {
                return Ja
            },
            get useEcommerceGlobal() {
                return Ea
            },
            get useSiteGlobal() {
                return _t
            }
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
}
  , Z1 = {
    class: "ecommerce-product-preview__content-wrapper"
};
function K1(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    $(e.ModalLayout, {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview"
    }, {
        default: ye( () => [le((m(),
        y("div", Z1, [e.productPreviewData.background ? (m(),
        $(e.BlockBackground, {
            key: 0,
            "overlay-opacity": e.productPreviewData.background["overlay-opacity"],
            type: e.productPreviewData.background.current,
            color: e.productPreviewData.background.color,
            gradient: e.productPreviewData.background.gradient,
            src: e.backgroundSrc,
            srcset: e.backgroundSrcSet,
            "is-fixed": e.productPreviewData.attachment === "fixed",
            alt: e.productPreviewData.background && e.productPreviewData.background.alt,
            "video-poster": e.productPreviewData.background.video?.videoThumbnailSrc,
            class: "ecommerce-product-preview__background"
        }, null, 8, ["overlay-opacity", "type", "color", "gradient", "src", "srcset", "is-fixed", "alt", "video-poster"])) : x("", !0), Le(e.BlockEcommerceProductProviderUser, {
            class: "ecommerce-product-preview__content",
            "is-quick-preview": a.isQuickPreview,
            data: e.productPreviewData,
            "quick-preview-product-id": e.quickPreviewProductId,
            "legacy-product-pages": e.legacyProductPages,
            "is-cart-visible": a.isCartVisible,
            "ecommerce-translations": a.translations
        }, null, 8, ["is-quick-preview", "data", "quick-preview-product-id", "legacy-product-pages", "is-cart-visible", "ecommerce-translations"])])), [[i, "productpreview-modal"]])]),
        _: 1
    }, 512)
}
const Q1 = oe(z1, [["render", K1], ["__scopeId", "data-v-fac2fb64"]]);
function pa(t) {
    "@babel/helpers - typeof";
    return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ,
    pa(t)
}
function Ne(t) {
    if (t === null || t === !0 || t === !1)
        return NaN;
    var n = Number(t);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n)
}
function Ce(t, n) {
    if (n.length < t)
        throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + n.length + " present")
}
function Oe(t) {
    Ce(1, arguments);
    var n = Object.prototype.toString.call(t);
    return t instanceof Date || pa(t) === "object" && n === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || n === "[object Number]" ? new Date(t) : ((typeof t == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),
    console.warn(new Error().stack)),
    new Date(NaN))
}
function za(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    return isNaN(e) ? new Date(NaN) : (e && a.setDate(a.getDate() + e),
    a)
}
function Sa(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    if (isNaN(e))
        return new Date(NaN);
    if (!e)
        return a;
    var r = a.getDate()
      , o = new Date(a.getTime());
    o.setMonth(a.getMonth() + e + 1, 0);
    var i = o.getDate();
    return r >= i ? o : (a.setFullYear(o.getFullYear(), o.getMonth(), r),
    a)
}
function nd(t, n) {
    if (Ce(2, arguments),
    !n || pa(n) !== "object")
        return new Date(NaN);
    var a = n.years ? Ne(n.years) : 0
      , e = n.months ? Ne(n.months) : 0
      , r = n.weeks ? Ne(n.weeks) : 0
      , o = n.days ? Ne(n.days) : 0
      , i = n.hours ? Ne(n.hours) : 0
      , s = n.minutes ? Ne(n.minutes) : 0
      , l = n.seconds ? Ne(n.seconds) : 0
      , d = Oe(t)
      , p = e || a ? Sa(d, e + a * 12) : d
      , g = o || r ? za(p, o + r * 7) : p
      , h = s + i * 60
      , f = l + h * 60
      , _ = f * 1e3
      , A = new Date(g.getTime() + _);
    return A
}
function X1(t, n) {
    Ce(2, arguments);
    var a = Oe(t).getTime()
      , e = Ne(n);
    return new Date(a + e)
}
var J1 = {};
function Ga() {
    return J1
}
function Nn(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Ga()
      , g = Ne((a = (e = (r = (o = n?.weekStartsOn) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : p.weekStartsOn) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = Oe(t)
      , f = h.getDay()
      , _ = (f < g ? 7 : 0) + f - g;
    return h.setDate(h.getDate() - _),
    h.setHours(0, 0, 0, 0),
    h
}
function zo(t) {
    return Ce(1, arguments),
    Nn(t, {
        weekStartsOn: 1
    })
}
function eS(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getFullYear()
      , e = new Date(0);
    e.setFullYear(a + 1, 0, 4),
    e.setHours(0, 0, 0, 0);
    var r = zo(e)
      , o = new Date(0);
    o.setFullYear(a, 0, 4),
    o.setHours(0, 0, 0, 0);
    var i = zo(o);
    return n.getTime() >= r.getTime() ? a + 1 : n.getTime() >= i.getTime() ? a : a - 1
}
function tS(t) {
    Ce(1, arguments);
    var n = eS(t)
      , a = new Date(0);
    a.setFullYear(n, 0, 4),
    a.setHours(0, 0, 0, 0);
    var e = zo(a);
    return e
}
function Zo(t) {
    var n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    t.getTime() - n.getTime()
}
function wc(t) {
    Ce(1, arguments);
    var n = Oe(t);
    return n.setHours(0, 0, 0, 0),
    n
}
var aS = 864e5;
function nS(t, n) {
    Ce(2, arguments);
    var a = wc(t)
      , e = wc(n)
      , r = a.getTime() - Zo(a)
      , o = e.getTime() - Zo(e);
    return Math.round((r - o) / aS)
}
function rS(t, n) {
    Ce(2, arguments);
    var a = Ne(n)
      , e = a * 3;
    return Sa(t, e)
}
function Us(t, n) {
    Ce(2, arguments);
    var a = Ne(n);
    return Sa(t, a * 12)
}
var Fs = 6e4
  , js = 36e5
  , oS = 1e3;
function rd(t) {
    return Ce(1, arguments),
    t instanceof Date || pa(t) === "object" && Object.prototype.toString.call(t) === "[object Date]"
}
function Hr(t) {
    if (Ce(1, arguments),
    !rd(t) && typeof t != "number")
        return !1;
    var n = Oe(t);
    return !isNaN(Number(n))
}
function kc(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = Math.floor(n.getMonth() / 3) + 1;
    return a
}
function od(t, n) {
    var a;
    Ce(1, arguments);
    var e = t || {}
      , r = Oe(e.start)
      , o = Oe(e.end)
      , i = o.getTime();
    if (!(r.getTime() <= i))
        throw new RangeError("Invalid interval");
    var s = []
      , l = r;
    l.setHours(0, 0, 0, 0);
    var d = Number((a = void 0) !== null && a !== void 0 ? a : 1);
    if (d < 1 || isNaN(d))
        throw new RangeError("`options.step` must be a number greater than 1");
    for (; l.getTime() <= i; )
        s.push(Oe(l)),
        l.setDate(l.getDate() + d),
        l.setHours(0, 0, 0, 0);
    return s
}
function io(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getMonth()
      , e = a - a % 3;
    return n.setMonth(e, 1),
    n.setHours(0, 0, 0, 0),
    n
}
function iS(t) {
    Ce(1, arguments);
    var n = t || {}
      , a = Oe(n.start)
      , e = Oe(n.end)
      , r = e.getTime();
    if (!(a.getTime() <= r))
        throw new RangeError("Invalid interval");
    var o = io(a)
      , i = io(e);
    r = i.getTime();
    for (var s = [], l = o; l.getTime() <= r; )
        s.push(Oe(l)),
        l = rS(l, 1);
    return s
}
function sS(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getFullYear();
    return n.setFullYear(a + 1, 0, 0),
    n.setHours(23, 59, 59, 999),
    n
}
function lS(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = new Date(0);
    return a.setFullYear(n.getFullYear(), 0, 1),
    a.setHours(0, 0, 0, 0),
    a
}
function cS(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Ga()
      , g = Ne((a = (e = (r = (o = n?.weekStartsOn) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : p.weekStartsOn) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = Oe(t)
      , f = h.getDay()
      , _ = (f < g ? -7 : 0) + 6 - (f - g);
    return h.setDate(h.getDate() + _),
    h.setHours(23, 59, 59, 999),
    h
}
function Sc(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getMonth()
      , e = a - a % 3 + 3;
    return n.setMonth(e, 0),
    n.setHours(23, 59, 59, 999),
    n
}
function id(t, n) {
    Ce(2, arguments);
    var a = Ne(n);
    return X1(t, -a)
}
var uS = 864e5;
function dS(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getTime();
    n.setUTCMonth(0, 1),
    n.setUTCHours(0, 0, 0, 0);
    var e = n.getTime()
      , r = a - e;
    return Math.floor(r / uS) + 1
}
function mr(t) {
    Ce(1, arguments);
    var n = 1
      , a = Oe(t)
      , e = a.getUTCDay()
      , r = (e < n ? 7 : 0) + e - n;
    return a.setUTCDate(a.getUTCDate() - r),
    a.setUTCHours(0, 0, 0, 0),
    a
}
function sd(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getUTCFullYear()
      , e = new Date(0);
    e.setUTCFullYear(a + 1, 0, 4),
    e.setUTCHours(0, 0, 0, 0);
    var r = mr(e)
      , o = new Date(0);
    o.setUTCFullYear(a, 0, 4),
    o.setUTCHours(0, 0, 0, 0);
    var i = mr(o);
    return n.getTime() >= r.getTime() ? a + 1 : n.getTime() >= i.getTime() ? a : a - 1
}
function mS(t) {
    Ce(1, arguments);
    var n = sd(t)
      , a = new Date(0);
    a.setUTCFullYear(n, 0, 4),
    a.setUTCHours(0, 0, 0, 0);
    var e = mr(a);
    return e
}
var gS = 6048e5;
function ld(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = mr(n).getTime() - mS(n).getTime();
    return Math.round(a / gS) + 1
}
function Hn(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Ga()
      , g = Ne((a = (e = (r = (o = n?.weekStartsOn) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : p.weekStartsOn) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = Oe(t)
      , f = h.getUTCDay()
      , _ = (f < g ? 7 : 0) + f - g;
    return h.setUTCDate(h.getUTCDate() - _),
    h.setUTCHours(0, 0, 0, 0),
    h
}
function Gs(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Oe(t)
      , g = p.getUTCFullYear()
      , h = Ga()
      , f = Ne((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : h.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = h.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
    if (!(f >= 1 && f <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var _ = new Date(0);
    _.setUTCFullYear(g + 1, 0, f),
    _.setUTCHours(0, 0, 0, 0);
    var A = Hn(_, n)
      , E = new Date(0);
    E.setUTCFullYear(g, 0, f),
    E.setUTCHours(0, 0, 0, 0);
    var w = Hn(E, n);
    return p.getTime() >= A.getTime() ? g + 1 : p.getTime() >= w.getTime() ? g : g - 1
}
function pS(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Ga()
      , g = Ne((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : p.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1)
      , h = Gs(t, n)
      , f = new Date(0);
    f.setUTCFullYear(h, 0, g),
    f.setUTCHours(0, 0, 0, 0);
    var _ = Hn(f, n);
    return _
}
var vS = 6048e5;
function cd(t, n) {
    Ce(1, arguments);
    var a = Oe(t)
      , e = Hn(a, n).getTime() - pS(a, n).getTime();
    return Math.round(e / vS) + 1
}
function ut(t, n) {
    for (var a = t < 0 ? "-" : "", e = Math.abs(t).toString(); e.length < n; )
        e = "0" + e;
    return a + e
}
var nn = {
    y: function(n, a) {
        var e = n.getUTCFullYear()
          , r = e > 0 ? e : 1 - e;
        return ut(a === "yy" ? r % 100 : r, a.length)
    },
    M: function(n, a) {
        var e = n.getUTCMonth();
        return a === "M" ? String(e + 1) : ut(e + 1, 2)
    },
    d: function(n, a) {
        return ut(n.getUTCDate(), a.length)
    },
    a: function(n, a) {
        var e = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (a) {
        case "a":
        case "aa":
            return e.toUpperCase();
        case "aaa":
            return e;
        case "aaaaa":
            return e[0];
        case "aaaa":
        default:
            return e === "am" ? "a.m." : "p.m."
        }
    },
    h: function(n, a) {
        return ut(n.getUTCHours() % 12 || 12, a.length)
    },
    H: function(n, a) {
        return ut(n.getUTCHours(), a.length)
    },
    m: function(n, a) {
        return ut(n.getUTCMinutes(), a.length)
    },
    s: function(n, a) {
        return ut(n.getUTCSeconds(), a.length)
    },
    S: function(n, a) {
        var e = a.length
          , r = n.getUTCMilliseconds()
          , o = Math.floor(r * Math.pow(10, e - 3));
        return ut(o, a.length)
    }
}
  , zn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , hS = {
    G: function(n, a, e) {
        var r = n.getUTCFullYear() > 0 ? 1 : 0;
        switch (a) {
        case "G":
        case "GG":
        case "GGG":
            return e.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return e.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return e.era(r, {
                width: "wide"
            })
        }
    },
    y: function(n, a, e) {
        if (a === "yo") {
            var r = n.getUTCFullYear()
              , o = r > 0 ? r : 1 - r;
            return e.ordinalNumber(o, {
                unit: "year"
            })
        }
        return nn.y(n, a)
    },
    Y: function(n, a, e, r) {
        var o = Gs(n, r)
          , i = o > 0 ? o : 1 - o;
        if (a === "YY") {
            var s = i % 100;
            return ut(s, 2)
        }
        return a === "Yo" ? e.ordinalNumber(i, {
            unit: "year"
        }) : ut(i, a.length)
    },
    R: function(n, a) {
        var e = sd(n);
        return ut(e, a.length)
    },
    u: function(n, a) {
        var e = n.getUTCFullYear();
        return ut(e, a.length)
    },
    Q: function(n, a, e) {
        var r = Math.ceil((n.getUTCMonth() + 1) / 3);
        switch (a) {
        case "Q":
            return String(r);
        case "QQ":
            return ut(r, 2);
        case "Qo":
            return e.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return e.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return e.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return e.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(n, a, e) {
        var r = Math.ceil((n.getUTCMonth() + 1) / 3);
        switch (a) {
        case "q":
            return String(r);
        case "qq":
            return ut(r, 2);
        case "qo":
            return e.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return e.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return e.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return e.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(n, a, e) {
        var r = n.getUTCMonth();
        switch (a) {
        case "M":
        case "MM":
            return nn.M(n, a);
        case "Mo":
            return e.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return e.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return e.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return e.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(n, a, e) {
        var r = n.getUTCMonth();
        switch (a) {
        case "L":
            return String(r + 1);
        case "LL":
            return ut(r + 1, 2);
        case "Lo":
            return e.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return e.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return e.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return e.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(n, a, e, r) {
        var o = cd(n, r);
        return a === "wo" ? e.ordinalNumber(o, {
            unit: "week"
        }) : ut(o, a.length)
    },
    I: function(n, a, e) {
        var r = ld(n);
        return a === "Io" ? e.ordinalNumber(r, {
            unit: "week"
        }) : ut(r, a.length)
    },
    d: function(n, a, e) {
        return a === "do" ? e.ordinalNumber(n.getUTCDate(), {
            unit: "date"
        }) : nn.d(n, a)
    },
    D: function(n, a, e) {
        var r = dS(n);
        return a === "Do" ? e.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : ut(r, a.length)
    },
    E: function(n, a, e) {
        var r = n.getUTCDay();
        switch (a) {
        case "E":
        case "EE":
        case "EEE":
            return e.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return e.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return e.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return e.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(n, a, e, r) {
        var o = n.getUTCDay()
          , i = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (a) {
        case "e":
            return String(i);
        case "ee":
            return ut(i, 2);
        case "eo":
            return e.ordinalNumber(i, {
                unit: "day"
            });
        case "eee":
            return e.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return e.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return e.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return e.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(n, a, e, r) {
        var o = n.getUTCDay()
          , i = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (a) {
        case "c":
            return String(i);
        case "cc":
            return ut(i, a.length);
        case "co":
            return e.ordinalNumber(i, {
                unit: "day"
            });
        case "ccc":
            return e.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return e.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return e.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return e.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(n, a, e) {
        var r = n.getUTCDay()
          , o = r === 0 ? 7 : r;
        switch (a) {
        case "i":
            return String(o);
        case "ii":
            return ut(o, a.length);
        case "io":
            return e.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return e.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return e.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return e.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return e.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(n, a, e) {
        var r = n.getUTCHours()
          , o = r / 12 >= 1 ? "pm" : "am";
        switch (a) {
        case "a":
        case "aa":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return e.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return e.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(n, a, e) {
        var r = n.getUTCHours(), o;
        switch (r === 12 ? o = zn.noon : r === 0 ? o = zn.midnight : o = r / 12 >= 1 ? "pm" : "am",
        a) {
        case "b":
        case "bb":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return e.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return e.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(n, a, e) {
        var r = n.getUTCHours(), o;
        switch (r >= 17 ? o = zn.evening : r >= 12 ? o = zn.afternoon : r >= 4 ? o = zn.morning : o = zn.night,
        a) {
        case "B":
        case "BB":
        case "BBB":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return e.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return e.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(n, a, e) {
        if (a === "ho") {
            var r = n.getUTCHours() % 12;
            return r === 0 && (r = 12),
            e.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return nn.h(n, a)
    },
    H: function(n, a, e) {
        return a === "Ho" ? e.ordinalNumber(n.getUTCHours(), {
            unit: "hour"
        }) : nn.H(n, a)
    },
    K: function(n, a, e) {
        var r = n.getUTCHours() % 12;
        return a === "Ko" ? e.ordinalNumber(r, {
            unit: "hour"
        }) : ut(r, a.length)
    },
    k: function(n, a, e) {
        var r = n.getUTCHours();
        return r === 0 && (r = 24),
        a === "ko" ? e.ordinalNumber(r, {
            unit: "hour"
        }) : ut(r, a.length)
    },
    m: function(n, a, e) {
        return a === "mo" ? e.ordinalNumber(n.getUTCMinutes(), {
            unit: "minute"
        }) : nn.m(n, a)
    },
    s: function(n, a, e) {
        return a === "so" ? e.ordinalNumber(n.getUTCSeconds(), {
            unit: "second"
        }) : nn.s(n, a)
    },
    S: function(n, a) {
        return nn.S(n, a)
    },
    X: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        if (i === 0)
            return "Z";
        switch (a) {
        case "X":
            return Tc(i);
        case "XXXX":
        case "XX":
            return Tn(i);
        case "XXXXX":
        case "XXX":
        default:
            return Tn(i, ":")
        }
    },
    x: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        switch (a) {
        case "x":
            return Tc(i);
        case "xxxx":
        case "xx":
            return Tn(i);
        case "xxxxx":
        case "xxx":
        default:
            return Tn(i, ":")
        }
    },
    O: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        switch (a) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + Cc(i, ":");
        case "OOOO":
        default:
            return "GMT" + Tn(i, ":")
        }
    },
    z: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        switch (a) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + Cc(i, ":");
        case "zzzz":
        default:
            return "GMT" + Tn(i, ":")
        }
    },
    t: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = Math.floor(o.getTime() / 1e3);
        return ut(i, a.length)
    },
    T: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTime();
        return ut(i, a.length)
    }
};
function Cc(t, n) {
    var a = t > 0 ? "-" : "+"
      , e = Math.abs(t)
      , r = Math.floor(e / 60)
      , o = e % 60;
    if (o === 0)
        return a + String(r);
    var i = n;
    return a + String(r) + i + ut(o, 2)
}
function Tc(t, n) {
    if (t % 60 === 0) {
        var a = t > 0 ? "-" : "+";
        return a + ut(Math.abs(t) / 60, 2)
    }
    return Tn(t, n)
}
function Tn(t, n) {
    var a = n || ""
      , e = t > 0 ? "-" : "+"
      , r = Math.abs(t)
      , o = ut(Math.floor(r / 60), 2)
      , i = ut(r % 60, 2);
    return e + o + a + i
}
var Ic = function(n, a) {
    switch (n) {
    case "P":
        return a.date({
            width: "short"
        });
    case "PP":
        return a.date({
            width: "medium"
        });
    case "PPP":
        return a.date({
            width: "long"
        });
    case "PPPP":
    default:
        return a.date({
            width: "full"
        })
    }
}
  , ud = function(n, a) {
    switch (n) {
    case "p":
        return a.time({
            width: "short"
        });
    case "pp":
        return a.time({
            width: "medium"
        });
    case "ppp":
        return a.time({
            width: "long"
        });
    case "pppp":
    default:
        return a.time({
            width: "full"
        })
    }
}
  , fS = function(n, a) {
    var e = n.match(/(P+)(p+)?/) || []
      , r = e[1]
      , o = e[2];
    if (!o)
        return Ic(n, a);
    var i;
    switch (r) {
    case "P":
        i = a.dateTime({
            width: "short"
        });
        break;
    case "PP":
        i = a.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        i = a.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        i = a.dateTime({
            width: "full"
        });
        break
    }
    return i.replace("{{date}}", Ic(r, a)).replace("{{time}}", ud(o, a))
}
  , us = {
    p: ud,
    P: fS
}
  , yS = ["D", "DD"]
  , bS = ["YY", "YYYY"];
function dd(t) {
    return yS.indexOf(t) !== -1
}
function md(t) {
    return bS.indexOf(t) !== -1
}
function Ko(t, n, a) {
    if (t === "YYYY")
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "YY")
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "D")
        throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "DD")
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var _S = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , wS = function(n, a, e) {
    var r, o = _S[n];
    return typeof o == "string" ? r = o : a === 1 ? r = o.one : r = o.other.replace("{{count}}", a.toString()),
    e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r
};
function Di(t) {
    return function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , a = n.width ? String(n.width) : t.defaultWidth
          , e = t.formats[a] || t.formats[t.defaultWidth];
        return e
    }
}
var kS = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , SS = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , CS = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , TS = {
    date: Di({
        formats: kS,
        defaultWidth: "full"
    }),
    time: Di({
        formats: SS,
        defaultWidth: "full"
    }),
    dateTime: Di({
        formats: CS,
        defaultWidth: "full"
    })
}
  , IS = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , PS = function(n, a, e, r) {
    return IS[n]
};
function Ir(t) {
    return function(n, a) {
        var e = a != null && a.context ? String(a.context) : "standalone", r;
        if (e === "formatting" && t.formattingValues) {
            var o = t.defaultFormattingWidth || t.defaultWidth
              , i = a != null && a.width ? String(a.width) : o;
            r = t.formattingValues[i] || t.formattingValues[o]
        } else {
            var s = t.defaultWidth
              , l = a != null && a.width ? String(a.width) : t.defaultWidth;
            r = t.values[l] || t.values[s]
        }
        var d = t.argumentCallback ? t.argumentCallback(n) : n;
        return r[d]
    }
}
var ES = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , DS = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , AS = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , MS = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , OS = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , xS = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , BS = function(n, a) {
    var e = Number(n)
      , r = e % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return e + "st";
        case 2:
            return e + "nd";
        case 3:
            return e + "rd"
        }
    return e + "th"
}
  , LS = {
    ordinalNumber: BS,
    era: Ir({
        values: ES,
        defaultWidth: "wide"
    }),
    quarter: Ir({
        values: DS,
        defaultWidth: "wide",
        argumentCallback: function(n) {
            return n - 1
        }
    }),
    month: Ir({
        values: AS,
        defaultWidth: "wide"
    }),
    day: Ir({
        values: MS,
        defaultWidth: "wide"
    }),
    dayPeriod: Ir({
        values: OS,
        defaultWidth: "wide",
        formattingValues: xS,
        defaultFormattingWidth: "wide"
    })
};
function Pr(t) {
    return function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , e = a.width
          , r = e && t.matchPatterns[e] || t.matchPatterns[t.defaultMatchWidth]
          , o = n.match(r);
        if (!o)
            return null;
        var i = o[0], s = e && t.parsePatterns[e] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(s) ? NS(s, function(g) {
            return g.test(i)
        }) : RS(s, function(g) {
            return g.test(i)
        }), d;
        d = t.valueCallback ? t.valueCallback(l) : l,
        d = a.valueCallback ? a.valueCallback(d) : d;
        var p = n.slice(i.length);
        return {
            value: d,
            rest: p
        }
    }
}
function RS(t, n) {
    for (var a in t)
        if (t.hasOwnProperty(a) && n(t[a]))
            return a
}
function NS(t, n) {
    for (var a = 0; a < t.length; a++)
        if (n(t[a]))
            return a
}
function HS(t) {
    return function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , e = n.match(t.matchPattern);
        if (!e)
            return null;
        var r = e[0]
          , o = n.match(t.parsePattern);
        if (!o)
            return null;
        var i = t.valueCallback ? t.valueCallback(o[0]) : o[0];
        i = a.valueCallback ? a.valueCallback(i) : i;
        var s = n.slice(r.length);
        return {
            value: i,
            rest: s
        }
    }
}
var VS = /^(\d+)(th|st|nd|rd)?/i
  , US = /\d+/i
  , FS = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , jS = {
    any: [/^b/i, /^(a|c)/i]
}
  , GS = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , YS = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , WS = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , qS = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , $S = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , zS = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , ZS = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , KS = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , QS = {
    ordinalNumber: HS({
        matchPattern: VS,
        parsePattern: US,
        valueCallback: function(n) {
            return parseInt(n, 10)
        }
    }),
    era: Pr({
        matchPatterns: FS,
        defaultMatchWidth: "wide",
        parsePatterns: jS,
        defaultParseWidth: "any"
    }),
    quarter: Pr({
        matchPatterns: GS,
        defaultMatchWidth: "wide",
        parsePatterns: YS,
        defaultParseWidth: "any",
        valueCallback: function(n) {
            return n + 1
        }
    }),
    month: Pr({
        matchPatterns: WS,
        defaultMatchWidth: "wide",
        parsePatterns: qS,
        defaultParseWidth: "any"
    }),
    day: Pr({
        matchPatterns: $S,
        defaultMatchWidth: "wide",
        parsePatterns: zS,
        defaultParseWidth: "any"
    }),
    dayPeriod: Pr({
        matchPatterns: ZS,
        defaultMatchWidth: "any",
        parsePatterns: KS,
        defaultParseWidth: "any"
    })
}
  , gd = {
    code: "en-US",
    formatDistance: wS,
    formatLong: TS,
    formatRelative: PS,
    localize: LS,
    match: QS,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
}
  , XS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , JS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , eC = /^'([^]*?)'?$/
  , tC = /''/g
  , aC = /[a-zA-Z]/;
function cn(t, n, a) {
    var e, r, o, i, s, l, d, p, g, h, f, _, A, E, w, k, O, I;
    Ce(2, arguments);
    var R = String(n)
      , Y = Ga()
      , G = (e = (r = a?.locale) !== null && r !== void 0 ? r : Y.locale) !== null && e !== void 0 ? e : gd
      , X = Ne((o = (i = (s = (l = a?.firstWeekContainsDate) !== null && l !== void 0 ? l : a == null || (d = a.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && s !== void 0 ? s : Y.firstWeekContainsDate) !== null && i !== void 0 ? i : (g = Y.locale) === null || g === void 0 || (h = g.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
    if (!(X >= 1 && X <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var q = Ne((f = (_ = (A = (E = a?.weekStartsOn) !== null && E !== void 0 ? E : a == null || (w = a.locale) === null || w === void 0 || (k = w.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && A !== void 0 ? A : Y.weekStartsOn) !== null && _ !== void 0 ? _ : (O = Y.locale) === null || O === void 0 || (I = O.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && f !== void 0 ? f : 0);
    if (!(q >= 0 && q <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!G.localize)
        throw new RangeError("locale must contain localize property");
    if (!G.formatLong)
        throw new RangeError("locale must contain formatLong property");
    var D = Oe(t);
    if (!Hr(D))
        throw new RangeError("Invalid time value");
    var j = Zo(D)
      , z = id(D, j)
      , ee = {
        firstWeekContainsDate: X,
        weekStartsOn: q,
        locale: G,
        _originalDate: D
    }
      , F = R.match(JS).map(function(S) {
        var N = S[0];
        if (N === "p" || N === "P") {
            var M = us[N];
            return M(S, G.formatLong)
        }
        return S
    }).join("").match(XS).map(function(S) {
        if (S === "''")
            return "'";
        var N = S[0];
        if (N === "'")
            return nC(S);
        var M = hS[N];
        if (M)
            return !(a != null && a.useAdditionalWeekYearTokens) && md(S) && Ko(S, n, String(t)),
            !(a != null && a.useAdditionalDayOfYearTokens) && dd(S) && Ko(S, n, String(t)),
            M(z, S, G.localize, ee);
        if (N.match(aC))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + N + "`");
        return S
    }).join("");
    return F
}
function nC(t) {
    var n = t.match(eC);
    return n ? n[1].replace(tC, "'") : t
}
function rC(t, n) {
    if (t == null)
        throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    return t
}
function oC(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getDay();
    return a
}
function iC(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getFullYear()
      , e = n.getMonth()
      , r = new Date(0);
    return r.setFullYear(a, e + 1, 0),
    r.setHours(0, 0, 0, 0),
    r.getDate()
}
function Ca(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getHours();
    return a
}
var sC = 6048e5;
function lC(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = zo(n).getTime() - tS(n).getTime();
    return Math.round(a / sC) + 1
}
function Na(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getMinutes();
    return a
}
function Je(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getMonth();
    return a
}
function gr(t) {
    Ce(1, arguments);
    var n = Oe(t)
      , a = n.getSeconds();
    return a
}
function cC(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Oe(t)
      , g = p.getFullYear()
      , h = Ga()
      , f = Ne((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : h.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = h.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
    if (!(f >= 1 && f <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var _ = new Date(0);
    _.setFullYear(g + 1, 0, f),
    _.setHours(0, 0, 0, 0);
    var A = Nn(_, n)
      , E = new Date(0);
    E.setFullYear(g, 0, f),
    E.setHours(0, 0, 0, 0);
    var w = Nn(E, n);
    return p.getTime() >= A.getTime() ? g + 1 : p.getTime() >= w.getTime() ? g : g - 1
}
function uC(t, n) {
    var a, e, r, o, i, s, l, d;
    Ce(1, arguments);
    var p = Ga()
      , g = Ne((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : p.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1)
      , h = cC(t, n)
      , f = new Date(0);
    f.setFullYear(h, 0, g),
    f.setHours(0, 0, 0, 0);
    var _ = Nn(f, n);
    return _
}
var dC = 6048e5;
function mC(t, n) {
    Ce(1, arguments);
    var a = Oe(t)
      , e = Nn(a, n).getTime() - uC(a, n).getTime();
    return Math.round(e / dC) + 1
}
function qe(t) {
    return Ce(1, arguments),
    Oe(t).getFullYear()
}
function so(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Oe(n);
    return a.getTime() > e.getTime()
}
function lo(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Oe(n);
    return a.getTime() < e.getTime()
}
function tr(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Oe(n);
    return a.getTime() === e.getTime()
}
function Pc(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var a = 0, e = new Array(n); a < n; a++)
        e[a] = t[a];
    return e
}
function gC(t, n) {
    if (t) {
        if (typeof t == "string")
            return Pc(t, n);
        var a = Object.prototype.toString.call(t).slice(8, -1);
        if (a === "Object" && t.constructor && (a = t.constructor.name),
        a === "Map" || a === "Set")
            return Array.from(t);
        if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
            return Pc(t, n)
    }
}
function Ec(t, n) {
    var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!a) {
        if (Array.isArray(t) || (a = gC(t)) || n) {
            a && (t = a);
            var e = 0
              , r = function() {};
            return {
                s: r,
                n: function() {
                    return e >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[e++]
                    }
                },
                e: function(d) {
                    throw d
                },
                f: r
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var o = !0, i = !1, s;
    return {
        s: function() {
            a = a.call(t)
        },
        n: function() {
            var d = a.next();
            return o = d.done,
            d
        },
        e: function(d) {
            i = !0,
            s = d
        },
        f: function() {
            try {
                !o && a.return != null && a.return()
            } finally {
                if (i)
                    throw s
            }
        }
    }
}
function we(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function ds(t, n) {
    return ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
        return e.__proto__ = r,
        e
    }
    ,
    ds(t, n)
}
function tt(t, n) {
    if (typeof n != "function" && n !== null)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    n && ds(t, n)
}
function Qo(t) {
    return Qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a)
    }
    ,
    Qo(t)
}
function pd() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (pd = function() {
        return !!t
    }
    )()
}
function pC(t, n) {
    if (n && (pa(n) === "object" || typeof n == "function"))
        return n;
    if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return we(t)
}
function at(t) {
    var n = pd();
    return function() {
        var e = Qo(t), r;
        if (n) {
            var o = Qo(this).constructor;
            r = Reflect.construct(e, arguments, o)
        } else
            r = e.apply(this, arguments);
        return pC(this, r)
    }
}
function Ze(t, n) {
    if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function")
}
function vC(t, n) {
    if (pa(t) != "object" || !t)
        return t;
    var a = t[Symbol.toPrimitive];
    if (a !== void 0) {
        var e = a.call(t, n || "default");
        if (pa(e) != "object")
            return e;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(t)
}
function vd(t) {
    var n = vC(t, "string");
    return pa(n) == "symbol" ? n : String(n)
}
function hC(t, n) {
    for (var a = 0; a < n.length; a++) {
        var e = n[a];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(t, vd(e.key), e)
    }
}
function Ke(t, n, a) {
    return n && hC(t.prototype, n),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function be(t, n, a) {
    return n = vd(n),
    n in t ? Object.defineProperty(t, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = a,
    t
}
var fC = 10
  , hd = function() {
    function t() {
        Ze(this, t),
        be(this, "priority", void 0),
        be(this, "subPriority", 0)
    }
    return Ke(t, [{
        key: "validate",
        value: function(a, e) {
            return !0
        }
    }]),
    t
}()
  , yC = function(t) {
    tt(a, t);
    var n = at(a);
    function a(e, r, o, i, s) {
        var l;
        return Ze(this, a),
        l = n.call(this),
        l.value = e,
        l.validateValue = r,
        l.setValue = o,
        l.priority = i,
        s && (l.subPriority = s),
        l
    }
    return Ke(a, [{
        key: "validate",
        value: function(r, o) {
            return this.validateValue(r, this.value, o)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return this.setValue(r, o, this.value, i)
        }
    }]),
    a
}(hd)
  , bC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", fC),
        be(we(e), "subPriority", -1),
        e
    }
    return Ke(a, [{
        key: "set",
        value: function(r, o) {
            if (o.timestampIsSet)
                return r;
            var i = new Date(0);
            return i.setFullYear(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()),
            i.setHours(r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()),
            i
        }
    }]),
    a
}(hd)
  , lt = function() {
    function t() {
        Ze(this, t),
        be(this, "incompatibleTokens", void 0),
        be(this, "priority", void 0),
        be(this, "subPriority", void 0)
    }
    return Ke(t, [{
        key: "run",
        value: function(a, e, r, o) {
            var i = this.parse(a, e, r, o);
            return i ? {
                setter: new yC(i.value,this.validate,this.set,this.priority,this.subPriority),
                rest: i.rest
            } : null
        }
    }, {
        key: "validate",
        value: function(a, e, r) {
            return !0
        }
    }]),
    t
}()
  , _C = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 140),
        be(we(e), "incompatibleTokens", ["R", "u", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "G":
            case "GG":
            case "GGG":
                return i.era(r, {
                    width: "abbreviated"
                }) || i.era(r, {
                    width: "narrow"
                });
            case "GGGGG":
                return i.era(r, {
                    width: "narrow"
                });
            case "GGGG":
            default:
                return i.era(r, {
                    width: "wide"
                }) || i.era(r, {
                    width: "abbreviated"
                }) || i.era(r, {
                    width: "narrow"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return o.era = i,
            r.setUTCFullYear(i, 0, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , Et = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
}
  , xa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Dt(t, n) {
    return t && {
        value: n(t.value),
        rest: t.rest
    }
}
function Ct(t, n) {
    var a = n.match(t);
    return a ? {
        value: parseInt(a[0], 10),
        rest: n.slice(a[0].length)
    } : null
}
function Ba(t, n) {
    var a = n.match(t);
    if (!a)
        return null;
    if (a[0] === "Z")
        return {
            value: 0,
            rest: n.slice(1)
        };
    var e = a[1] === "+" ? 1 : -1
      , r = a[2] ? parseInt(a[2], 10) : 0
      , o = a[3] ? parseInt(a[3], 10) : 0
      , i = a[5] ? parseInt(a[5], 10) : 0;
    return {
        value: e * (r * js + o * Fs + i * oS),
        rest: n.slice(a[0].length)
    }
}
function fd(t) {
    return Ct(Et.anyDigitsSigned, t)
}
function Pt(t, n) {
    switch (t) {
    case 1:
        return Ct(Et.singleDigit, n);
    case 2:
        return Ct(Et.twoDigits, n);
    case 3:
        return Ct(Et.threeDigits, n);
    case 4:
        return Ct(Et.fourDigits, n);
    default:
        return Ct(new RegExp("^\\d{1," + t + "}"), n)
    }
}
function Xo(t, n) {
    switch (t) {
    case 1:
        return Ct(Et.singleDigitSigned, n);
    case 2:
        return Ct(Et.twoDigitsSigned, n);
    case 3:
        return Ct(Et.threeDigitsSigned, n);
    case 4:
        return Ct(Et.fourDigitsSigned, n);
    default:
        return Ct(new RegExp("^-?\\d{1," + t + "}"), n)
    }
}
function Ys(t) {
    switch (t) {
    case "morning":
        return 4;
    case "evening":
        return 17;
    case "pm":
    case "noon":
    case "afternoon":
        return 12;
    case "am":
    case "midnight":
    case "night":
    default:
        return 0
    }
}
function yd(t, n) {
    var a = n > 0, e = a ? n : 1 - n, r;
    if (e <= 50)
        r = t || 100;
    else {
        var o = e + 50
          , i = Math.floor(o / 100) * 100
          , s = t >= o % 100;
        r = t + i - (s ? 100 : 0)
    }
    return a ? r : 1 - r
}
function bd(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}
var wC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return {
                    year: d,
                    isTwoDigitYear: o === "yy"
                }
            };
            switch (o) {
            case "y":
                return Dt(Pt(4, r), s);
            case "yo":
                return Dt(i.ordinalNumber(r, {
                    unit: "year"
                }), s);
            default:
                return Dt(Pt(o.length, r), s)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o.isTwoDigitYear || o.year > 0
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = r.getUTCFullYear();
            if (i.isTwoDigitYear) {
                var l = yd(i.year, s);
                return r.setUTCFullYear(l, 0, 1),
                r.setUTCHours(0, 0, 0, 0),
                r
            }
            var d = !("era"in o) || o.era === 1 ? i.year : 1 - i.year;
            return r.setUTCFullYear(d, 0, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , kC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return {
                    year: d,
                    isTwoDigitYear: o === "YY"
                }
            };
            switch (o) {
            case "Y":
                return Dt(Pt(4, r), s);
            case "Yo":
                return Dt(i.ordinalNumber(r, {
                    unit: "year"
                }), s);
            default:
                return Dt(Pt(o.length, r), s)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o.isTwoDigitYear || o.year > 0
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            var l = Gs(r, s);
            if (i.isTwoDigitYear) {
                var d = yd(i.year, l);
                return r.setUTCFullYear(d, 0, s.firstWeekContainsDate),
                r.setUTCHours(0, 0, 0, 0),
                Hn(r, s)
            }
            var p = !("era"in o) || o.era === 1 ? i.year : 1 - i.year;
            return r.setUTCFullYear(p, 0, s.firstWeekContainsDate),
            r.setUTCHours(0, 0, 0, 0),
            Hn(r, s)
        }
    }]),
    a
}(lt)
  , SC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            return Xo(o === "R" ? 4 : o.length, r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = new Date(0);
            return s.setUTCFullYear(i, 0, 4),
            s.setUTCHours(0, 0, 0, 0),
            mr(s)
        }
    }]),
    a
}(lt)
  , CC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            return Xo(o === "u" ? 4 : o.length, r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCFullYear(i, 0, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , TC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 120),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "Q":
            case "QQ":
                return Pt(o.length, r);
            case "Qo":
                return i.ordinalNumber(r, {
                    unit: "quarter"
                });
            case "QQQ":
                return i.quarter(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "QQQQQ":
                return i.quarter(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "QQQQ":
            default:
                return i.quarter(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.quarter(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 4
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth((i - 1) * 3, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , IC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 120),
        be(we(e), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "q":
            case "qq":
                return Pt(o.length, r);
            case "qo":
                return i.ordinalNumber(r, {
                    unit: "quarter"
                });
            case "qqq":
                return i.quarter(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "qqqqq":
                return i.quarter(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "qqqq":
            default:
                return i.quarter(r, {
                    width: "wide",
                    context: "standalone"
                }) || i.quarter(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "standalone"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 4
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth((i - 1) * 3, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , PC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]),
        be(we(e), "priority", 110),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return d - 1
            };
            switch (o) {
            case "M":
                return Dt(Ct(Et.month, r), s);
            case "MM":
                return Dt(Pt(2, r), s);
            case "Mo":
                return Dt(i.ordinalNumber(r, {
                    unit: "month"
                }), s);
            case "MMM":
                return i.month(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.month(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "MMMMM":
                return i.month(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "MMMM":
            default:
                return i.month(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.month(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.month(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 11
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth(i, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , EC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 110),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return d - 1
            };
            switch (o) {
            case "L":
                return Dt(Ct(Et.month, r), s);
            case "LL":
                return Dt(Pt(2, r), s);
            case "Lo":
                return Dt(i.ordinalNumber(r, {
                    unit: "month"
                }), s);
            case "LLL":
                return i.month(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.month(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "LLLLL":
                return i.month(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "LLLL":
            default:
                return i.month(r, {
                    width: "wide",
                    context: "standalone"
                }) || i.month(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.month(r, {
                    width: "narrow",
                    context: "standalone"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 11
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth(i, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt);
function DC(t, n, a) {
    Ce(2, arguments);
    var e = Oe(t)
      , r = Ne(n)
      , o = cd(e, a) - r;
    return e.setUTCDate(e.getUTCDate() - o * 7),
    e
}
var AC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 100),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "w":
                return Ct(Et.week, r);
            case "wo":
                return i.ordinalNumber(r, {
                    unit: "week"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 53
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return Hn(DC(r, i, s), s)
        }
    }]),
    a
}(lt);
function MC(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n)
      , r = ld(a) - e;
    return a.setUTCDate(a.getUTCDate() - r * 7),
    a
}
var OC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 100),
        be(we(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "I":
                return Ct(Et.week, r);
            case "Io":
                return i.ordinalNumber(r, {
                    unit: "week"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 53
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return mr(MC(r, i))
        }
    }]),
    a
}(lt)
  , xC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , BC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , LC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "subPriority", 1),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "d":
                return Ct(Et.date, r);
            case "do":
                return i.ordinalNumber(r, {
                    unit: "date"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            var i = r.getUTCFullYear()
              , s = bd(i)
              , l = r.getUTCMonth();
            return s ? o >= 1 && o <= BC[l] : o >= 1 && o <= xC[l]
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCDate(i),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , RC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "subpriority", 1),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "D":
            case "DD":
                return Ct(Et.dayOfYear, r);
            case "Do":
                return i.ordinalNumber(r, {
                    unit: "date"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            var i = r.getUTCFullYear()
              , s = bd(i);
            return s ? o >= 1 && o <= 366 : o >= 1 && o <= 365
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth(0, i),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt);
function Ws(t, n, a) {
    var e, r, o, i, s, l, d, p;
    Ce(2, arguments);
    var g = Ga()
      , h = Ne((e = (r = (o = (i = a?.weekStartsOn) !== null && i !== void 0 ? i : a == null || (s = a.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : g.weekStartsOn) !== null && r !== void 0 ? r : (d = g.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && e !== void 0 ? e : 0);
    if (!(h >= 0 && h <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = Oe(t)
      , _ = Ne(n)
      , A = f.getUTCDay()
      , E = _ % 7
      , w = (E + 7) % 7
      , k = (w < h ? 7 : 0) + _ - A;
    return f.setUTCDate(f.getUTCDate() + k),
    f
}
var NC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "E":
            case "EE":
            case "EEE":
                return i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEE":
                return i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEEE":
                return i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEE":
            default:
                return i.day(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 6
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return r = Ws(r, i, s),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , HC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i, s) {
            var l = function(p) {
                var g = Math.floor((p - 1) / 7) * 7;
                return (p + s.weekStartsOn + 6) % 7 + g
            };
            switch (o) {
            case "e":
            case "ee":
                return Dt(Pt(o.length, r), l);
            case "eo":
                return Dt(i.ordinalNumber(r, {
                    unit: "day"
                }), l);
            case "eee":
                return i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeee":
                return i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeeee":
                return i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeee":
            default:
                return i.day(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 6
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return r = Ws(r, i, s),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , VC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i, s) {
            var l = function(p) {
                var g = Math.floor((p - 1) / 7) * 7;
                return (p + s.weekStartsOn + 6) % 7 + g
            };
            switch (o) {
            case "c":
            case "cc":
                return Dt(Pt(o.length, r), l);
            case "co":
                return Dt(i.ordinalNumber(r, {
                    unit: "day"
                }), l);
            case "ccc":
                return i.day(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.day(r, {
                    width: "short",
                    context: "standalone"
                }) || i.day(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "ccccc":
                return i.day(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccccc":
                return i.day(r, {
                    width: "short",
                    context: "standalone"
                }) || i.day(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccc":
            default:
                return i.day(r, {
                    width: "wide",
                    context: "standalone"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.day(r, {
                    width: "short",
                    context: "standalone"
                }) || i.day(r, {
                    width: "narrow",
                    context: "standalone"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 6
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return r = Ws(r, i, s),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt);
function UC(t, n) {
    Ce(2, arguments);
    var a = Ne(n);
    a % 7 === 0 && (a = a - 7);
    var e = 1
      , r = Oe(t)
      , o = r.getUTCDay()
      , i = a % 7
      , s = (i + 7) % 7
      , l = (s < e ? 7 : 0) + a - o;
    return r.setUTCDate(r.getUTCDate() + l),
    r
}
var FC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return d === 0 ? 7 : d
            };
            switch (o) {
            case "i":
            case "ii":
                return Pt(o.length, r);
            case "io":
                return i.ordinalNumber(r, {
                    unit: "day"
                });
            case "iii":
                return Dt(i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s);
            case "iiiii":
                return Dt(i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s);
            case "iiiiii":
                return Dt(i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s);
            case "iiii":
            default:
                return Dt(i.day(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 7
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r = UC(r, i),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , jC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 80),
        be(we(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "a":
            case "aa":
            case "aaa":
                return i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaaa":
                return i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return i.dayPeriod(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(Ys(i), 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , GC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 80),
        be(we(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "b":
            case "bb":
            case "bbb":
                return i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbbb":
                return i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return i.dayPeriod(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(Ys(i), 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , YC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 80),
        be(we(e), "incompatibleTokens", ["a", "b", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "B":
            case "BB":
            case "BBB":
                return i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBBB":
                return i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return i.dayPeriod(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(Ys(i), 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , WC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "h":
                return Ct(Et.hour12h, r);
            case "ho":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 12
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = r.getUTCHours() >= 12;
            return s && i < 12 ? r.setUTCHours(i + 12, 0, 0, 0) : !s && i === 12 ? r.setUTCHours(0, 0, 0, 0) : r.setUTCHours(i, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , qC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "H":
                return Ct(Et.hour23h, r);
            case "Ho":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 23
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(i, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , $C = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "K":
                return Ct(Et.hour11h, r);
            case "Ko":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 11
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = r.getUTCHours() >= 12;
            return s && i < 12 ? r.setUTCHours(i + 12, 0, 0, 0) : r.setUTCHours(i, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , zC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "k":
                return Ct(Et.hour24h, r);
            case "ko":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 24
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = i <= 24 ? i % 24 : i;
            return r.setUTCHours(s, 0, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , ZC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 60),
        be(we(e), "incompatibleTokens", ["t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "m":
                return Ct(Et.minute, r);
            case "mo":
                return i.ordinalNumber(r, {
                    unit: "minute"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 59
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMinutes(i, 0, 0),
            r
        }
    }]),
    a
}(lt)
  , KC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 50),
        be(we(e), "incompatibleTokens", ["t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "s":
                return Ct(Et.second, r);
            case "so":
                return i.ordinalNumber(r, {
                    unit: "second"
                });
            default:
                return Pt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 59
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCSeconds(i, 0),
            r
        }
    }]),
    a
}(lt)
  , QC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 30),
        be(we(e), "incompatibleTokens", ["t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            var i = function(l) {
                return Math.floor(l * Math.pow(10, -o.length + 3))
            };
            return Dt(Pt(o.length, r), i)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMilliseconds(i),
            r
        }
    }]),
    a
}(lt)
  , XC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 10),
        be(we(e), "incompatibleTokens", ["t", "T", "x"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            switch (o) {
            case "X":
                return Ba(xa.basicOptionalMinutes, r);
            case "XX":
                return Ba(xa.basic, r);
            case "XXXX":
                return Ba(xa.basicOptionalSeconds, r);
            case "XXXXX":
                return Ba(xa.extendedOptionalSeconds, r);
            case "XXX":
            default:
                return Ba(xa.extended, r)
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return o.timestampIsSet ? r : new Date(r.getTime() - i)
        }
    }]),
    a
}(lt)
  , JC = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 10),
        be(we(e), "incompatibleTokens", ["t", "T", "X"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            switch (o) {
            case "x":
                return Ba(xa.basicOptionalMinutes, r);
            case "xx":
                return Ba(xa.basic, r);
            case "xxxx":
                return Ba(xa.basicOptionalSeconds, r);
            case "xxxxx":
                return Ba(xa.extendedOptionalSeconds, r);
            case "xxx":
            default:
                return Ba(xa.extended, r)
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return o.timestampIsSet ? r : new Date(r.getTime() - i)
        }
    }]),
    a
}(lt)
  , eT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 40),
        be(we(e), "incompatibleTokens", "*"),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r) {
            return fd(r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return [new Date(i * 1e3), {
                timestampIsSet: !0
            }]
        }
    }]),
    a
}(lt)
  , tT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 20),
        be(we(e), "incompatibleTokens", "*"),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r) {
            return fd(r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return [new Date(i), {
                timestampIsSet: !0
            }]
        }
    }]),
    a
}(lt)
  , aT = {
    G: new _C,
    y: new wC,
    Y: new kC,
    R: new SC,
    u: new CC,
    Q: new TC,
    q: new IC,
    M: new PC,
    L: new EC,
    w: new AC,
    I: new OC,
    d: new LC,
    D: new RC,
    E: new NC,
    e: new HC,
    c: new VC,
    i: new FC,
    a: new jC,
    b: new GC,
    B: new YC,
    h: new WC,
    H: new qC,
    K: new $C,
    k: new zC,
    m: new ZC,
    s: new KC,
    S: new QC,
    X: new XC,
    x: new JC,
    t: new eT,
    T: new tT
}
  , nT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , rT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , oT = /^'([^]*?)'?$/
  , iT = /''/g
  , sT = /\S/
  , lT = /[a-zA-Z]/;
function ms(t, n, a, e) {
    var r, o, i, s, l, d, p, g, h, f, _, A, E, w;
    Ce(3, arguments);
    var k = String(t)
      , O = String(n)
      , I = Ga()
      , R = (r = (o = void 0) !== null && o !== void 0 ? o : I.locale) !== null && r !== void 0 ? r : gd;
    if (!R.match)
        throw new RangeError("locale must contain match property");
    var Y = Ne((i = (s = (l = (d = void 0) !== null && d !== void 0 ? d : void 0) !== null && l !== void 0 ? l : I.firstWeekContainsDate) !== null && s !== void 0 ? s : (p = I.locale) === null || p === void 0 || (g = p.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(Y >= 1 && Y <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var G = Ne((h = (f = (_ = (A = void 0) !== null && A !== void 0 ? A : void 0) !== null && _ !== void 0 ? _ : I.weekStartsOn) !== null && f !== void 0 ? f : (E = I.locale) === null || E === void 0 || (w = E.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && h !== void 0 ? h : 0);
    if (!(G >= 0 && G <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (O === "")
        return k === "" ? Oe(a) : new Date(NaN);
    var X = {
        firstWeekContainsDate: Y,
        weekStartsOn: G,
        locale: R
    }, q = [new bC], D = O.match(rT).map(function(Z) {
        var H = Z[0];
        if (H in us) {
            var C = us[H];
            return C(Z, R.formatLong)
        }
        return Z
    }).join("").match(nT), j = [], z = Ec(D), ee;
    try {
        var F = function() {
            var H = ee.value;
            !(e != null && e.useAdditionalWeekYearTokens) && md(H) && Ko(H, O, t),
            !(e != null && e.useAdditionalDayOfYearTokens) && dd(H) && Ko(H, O, t);
            var C = H[0]
              , me = aT[C];
            if (me) {
                var ke = me.incompatibleTokens;
                if (Array.isArray(ke)) {
                    var ue = j.find(function(ve) {
                        return ke.includes(ve.token) || ve.token === C
                    });
                    if (ue)
                        throw new RangeError("The format string mustn't contain `".concat(ue.fullToken, "` and `").concat(H, "` at the same time"))
                } else if (me.incompatibleTokens === "*" && j.length > 0)
                    throw new RangeError("The format string mustn't contain `".concat(H, "` and any other token at the same time"));
                j.push({
                    token: C,
                    fullToken: H
                });
                var Se = me.run(k, H, R.match, X);
                if (!Se)
                    return {
                        v: new Date(NaN)
                    };
                q.push(Se.setter),
                k = Se.rest
            } else {
                if (C.match(lT))
                    throw new RangeError("Format string contains an unescaped latin alphabet character `" + C + "`");
                if (H === "''" ? H = "'" : C === "'" && (H = cT(H)),
                k.indexOf(H) === 0)
                    k = k.slice(H.length);
                else
                    return {
                        v: new Date(NaN)
                    }
            }
        };
        for (z.s(); !(ee = z.n()).done; ) {
            var S = F();
            if (pa(S) === "object")
                return S.v
        }
    } catch (Z) {
        z.e(Z)
    } finally {
        z.f()
    }
    if (k.length > 0 && sT.test(k))
        return new Date(NaN);
    var N = q.map(function(Z) {
        return Z.priority
    }).sort(function(Z, H) {
        return H - Z
    }).filter(function(Z, H, C) {
        return C.indexOf(Z) === H
    }).map(function(Z) {
        return q.filter(function(H) {
            return H.priority === Z
        }).sort(function(H, C) {
            return C.subPriority - H.subPriority
        })
    }).map(function(Z) {
        return Z[0]
    })
      , M = Oe(a);
    if (isNaN(M.getTime()))
        return new Date(NaN);
    var W = id(M, Zo(M)), b = {}, v = Ec(N), L;
    try {
        for (v.s(); !(L = v.n()).done; ) {
            var B = L.value;
            if (!B.validate(W, X))
                return new Date(NaN);
            var K = B.set(W, b, X);
            Array.isArray(K) ? (W = K[0],
            rC(b, K[1])) : W = K
        }
    } catch (Z) {
        v.e(Z)
    } finally {
        v.f()
    }
    return W
}
function cT(t) {
    return t.match(oT)[1].replace(iT, "'")
}
function Dc(t, n) {
    Ce(2, arguments);
    var a = io(t)
      , e = io(n);
    return a.getTime() === e.getTime()
}
function uT(t, n) {
    Ce(2, arguments);
    var a = Ne(n);
    return za(t, -a)
}
function dT(t, n) {
    var a;
    Ce(1, arguments);
    var e = Ne((a = void 0) !== null && a !== void 0 ? a : 2);
    if (e !== 2 && e !== 1 && e !== 0)
        throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]"))
        return new Date(NaN);
    var r = vT(t), o;
    if (r.date) {
        var i = hT(r.date, e);
        o = fT(i.restDateString, i.year)
    }
    if (!o || isNaN(o.getTime()))
        return new Date(NaN);
    var s = o.getTime(), l = 0, d;
    if (r.time && (l = yT(r.time),
    isNaN(l)))
        return new Date(NaN);
    if (r.timezone) {
        if (d = bT(r.timezone),
        isNaN(d))
            return new Date(NaN)
    } else {
        var p = new Date(s + l)
          , g = new Date(0);
        return g.setFullYear(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()),
        g.setHours(p.getUTCHours(), p.getUTCMinutes(), p.getUTCSeconds(), p.getUTCMilliseconds()),
        g
    }
    return new Date(s + l + d)
}
var Io = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
}
  , mT = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/
  , gT = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/
  , pT = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function vT(t) {
    var n = {}, a = t.split(Io.dateTimeDelimiter), e;
    if (a.length > 2)
        return n;
    if (/:/.test(a[0]) ? e = a[0] : (n.date = a[0],
    e = a[1],
    Io.timeZoneDelimiter.test(n.date) && (n.date = t.split(Io.timeZoneDelimiter)[0],
    e = t.substr(n.date.length, t.length))),
    e) {
        var r = Io.timezone.exec(e);
        r ? (n.time = e.replace(r[1], ""),
        n.timezone = r[1]) : n.time = e
    }
    return n
}
function hT(t, n) {
    var a = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)")
      , e = t.match(a);
    if (!e)
        return {
            year: NaN,
            restDateString: ""
        };
    var r = e[1] ? parseInt(e[1]) : null
      , o = e[2] ? parseInt(e[2]) : null;
    return {
        year: o === null ? r : o * 100,
        restDateString: t.slice((e[1] || e[2]).length)
    }
}
function fT(t, n) {
    if (n === null)
        return new Date(NaN);
    var a = t.match(mT);
    if (!a)
        return new Date(NaN);
    var e = !!a[4]
      , r = Er(a[1])
      , o = Er(a[2]) - 1
      , i = Er(a[3])
      , s = Er(a[4])
      , l = Er(a[5]) - 1;
    if (e)
        return CT(n, s, l) ? _T(n, s, l) : new Date(NaN);
    var d = new Date(0);
    return !kT(n, o, i) || !ST(n, r) ? new Date(NaN) : (d.setUTCFullYear(n, o, Math.max(r, i)),
    d)
}
function Er(t) {
    return t ? parseInt(t) : 1
}
function yT(t) {
    var n = t.match(gT);
    if (!n)
        return NaN;
    var a = Ai(n[1])
      , e = Ai(n[2])
      , r = Ai(n[3]);
    return TT(a, e, r) ? a * js + e * Fs + r * 1e3 : NaN
}
function Ai(t) {
    return t && parseFloat(t.replace(",", ".")) || 0
}
function bT(t) {
    if (t === "Z")
        return 0;
    var n = t.match(pT);
    if (!n)
        return 0;
    var a = n[1] === "+" ? -1 : 1
      , e = parseInt(n[2])
      , r = n[3] && parseInt(n[3]) || 0;
    return IT(e, r) ? a * (e * js + r * Fs) : NaN
}
function _T(t, n, a) {
    var e = new Date(0);
    e.setUTCFullYear(t, 0, 4);
    var r = e.getUTCDay() || 7
      , o = (n - 1) * 7 + a + 1 - r;
    return e.setUTCDate(e.getUTCDate() + o),
    e
}
var wT = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function _d(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}
function kT(t, n, a) {
    return n >= 0 && n <= 11 && a >= 1 && a <= (wT[n] || (_d(t) ? 29 : 28))
}
function ST(t, n) {
    return n >= 1 && n <= (_d(t) ? 366 : 365)
}
function CT(t, n, a) {
    return n >= 1 && n <= 53 && a >= 0 && a <= 6
}
function TT(t, n, a) {
    return t === 24 ? n === 0 && a === 0 : a >= 0 && a < 60 && n >= 0 && n < 60 && t >= 0 && t < 25
}
function IT(t, n) {
    return n >= 0 && n <= 59
}
function wd(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n)
      , r = a.getFullYear()
      , o = a.getDate()
      , i = new Date(0);
    i.setFullYear(r, e, 15),
    i.setHours(0, 0, 0, 0);
    var s = iC(i);
    return a.setMonth(e, Math.min(o, s)),
    a
}
function bt(t, n) {
    if (Ce(2, arguments),
    pa(n) !== "object" || n === null)
        throw new RangeError("values parameter must be an object");
    var a = Oe(t);
    return isNaN(a.getTime()) ? new Date(NaN) : (n.year != null && a.setFullYear(n.year),
    n.month != null && (a = wd(a, n.month)),
    n.date != null && a.setDate(Ne(n.date)),
    n.hours != null && a.setHours(Ne(n.hours)),
    n.minutes != null && a.setMinutes(Ne(n.minutes)),
    n.seconds != null && a.setSeconds(Ne(n.seconds)),
    n.milliseconds != null && a.setMilliseconds(Ne(n.milliseconds)),
    a)
}
function kd(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    return a.setHours(e),
    a
}
function qs(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    return a.setMilliseconds(e),
    a
}
function Sd(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    return a.setMinutes(e),
    a
}
function $s(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    return a.setSeconds(e),
    a
}
function La(t, n) {
    Ce(2, arguments);
    var a = Oe(t)
      , e = Ne(n);
    return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(e),
    a)
}
function pr(t, n) {
    Ce(2, arguments);
    var a = Ne(n);
    return Sa(t, -a)
}
function PT(t, n) {
    if (Ce(2, arguments),
    !n || pa(n) !== "object")
        return new Date(NaN);
    var a = n.years ? Ne(n.years) : 0
      , e = n.months ? Ne(n.months) : 0
      , r = n.weeks ? Ne(n.weeks) : 0
      , o = n.days ? Ne(n.days) : 0
      , i = n.hours ? Ne(n.hours) : 0
      , s = n.minutes ? Ne(n.minutes) : 0
      , l = n.seconds ? Ne(n.seconds) : 0
      , d = pr(t, e + a * 12)
      , p = uT(d, o + r * 7)
      , g = s + i * 60
      , h = l + g * 60
      , f = h * 1e3
      , _ = new Date(p.getTime() - f);
    return _
}
function Cd(t, n) {
    Ce(2, arguments);
    var a = Ne(n);
    return Us(t, -a)
}
function br() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
    }), P("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), P("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), P("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
    })])
}
br.compatConfig = {
    MODE: 3
};
function Td() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
    }), P("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })])
}
Td.compatConfig = {
    MODE: 3
};
function zs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })])
}
zs.compatConfig = {
    MODE: 3
};
function Zs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
    })])
}
Zs.compatConfig = {
    MODE: 3
};
function Ks() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
    }), P("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    })])
}
Ks.compatConfig = {
    MODE: 3
};
function Qs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })])
}
Qs.compatConfig = {
    MODE: 3
};
function Xs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [P("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })])
}
Xs.compatConfig = {
    MODE: 3
};
function Js(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Id = {
    exports: {}
};
(function(t) {
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    t.exports = n,
    t.exports.__esModule = !0,
    t.exports.default = t.exports
}
)(Id);
var ET = Id.exports
  , gs = {
    exports: {}
};
(function(t, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = a;
    function a(e) {
        if (e === null || e === !0 || e === !1)
            return NaN;
        var r = Number(e);
        return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r)
    }
    t.exports = n.default
}
)(gs, gs.exports);
var DT = gs.exports;
const AT = Js(DT);
var ps = {
    exports: {}
};
(function(t, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = a;
    function a(e) {
        var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        return r.setUTCFullYear(e.getFullYear()),
        e.getTime() - r.getTime()
    }
    t.exports = n.default
}
)(ps, ps.exports);
var MT = ps.exports;
const Ac = Js(MT);
function OT(t, n) {
    var a = RT(n);
    return a.formatToParts ? BT(a, t) : LT(a, t)
}
var xT = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function BT(t, n) {
    try {
        for (var a = t.formatToParts(n), e = [], r = 0; r < a.length; r++) {
            var o = xT[a[r].type];
            o >= 0 && (e[o] = parseInt(a[r].value, 10))
        }
        return e
    } catch (i) {
        if (i instanceof RangeError)
            return [NaN];
        throw i
    }
}
function LT(t, n) {
    var a = t.format(n).replace(/\u200E/g, "")
      , e = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
    return [e[3], e[1], e[2], e[4], e[5], e[6]]
}
var Mi = {};
function RT(t) {
    if (!Mi[t]) {
        var n = new Intl.DateTimeFormat("en-US",{
            hour12: !1,
            timeZone: "America/New_York",
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(new Date("2014-06-25T04:00:00.123Z"))
          , a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
        Mi[t] = a ? new Intl.DateTimeFormat("en-US",{
            hour12: !1,
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US",{
            hourCycle: "h23",
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }
    return Mi[t]
}
function el(t, n, a, e, r, o, i) {
    var s = new Date(0);
    return s.setUTCFullYear(t, n, a),
    s.setUTCHours(e, r, o, i),
    s
}
var Mc = 36e5
  , NT = 6e4
  , Oi = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function tl(t, n, a) {
    var e, r;
    if (t === "" || (e = Oi.timezoneZ.exec(t),
    e))
        return 0;
    var o;
    if (e = Oi.timezoneHH.exec(t),
    e)
        return o = parseInt(e[1], 10),
        Oc(o) ? -(o * Mc) : NaN;
    if (e = Oi.timezoneHHMM.exec(t),
    e) {
        o = parseInt(e[1], 10);
        var i = parseInt(e[2], 10);
        return Oc(o, i) ? (r = Math.abs(o) * Mc + i * NT,
        o > 0 ? -r : r) : NaN
    }
    if (UT(t)) {
        n = new Date(n || Date.now());
        var s = a ? n : HT(n)
          , l = vs(s, t)
          , d = a ? l : VT(n, l, t);
        return -d
    }
    return NaN
}
function HT(t) {
    return el(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
}
function vs(t, n) {
    var a = OT(t, n)
      , e = el(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime()
      , r = t.getTime()
      , o = r % 1e3;
    return r -= o >= 0 ? o : 1e3 + o,
    e - r
}
function VT(t, n, a) {
    var e = t.getTime()
      , r = e - n
      , o = vs(new Date(r), a);
    if (n === o)
        return n;
    r -= o - n;
    var i = vs(new Date(r), a);
    return o === i ? o : Math.max(o, i)
}
function Oc(t, n) {
    return -23 <= t && t <= 23 && (n == null || 0 <= n && n <= 59)
}
var xc = {};
function UT(t) {
    if (xc[t])
        return !0;
    try {
        return new Intl.DateTimeFormat(void 0,{
            timeZone: t
        }),
        xc[t] = !0,
        !0
    } catch {
        return !1
    }
}
var Pd = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/
  , xi = 36e5
  , Bc = 6e4
  , FT = 2
  , Jt = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: Pd
};
function hs(t, n) {
    if (arguments.length < 1)
        throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (t === null)
        return new Date(NaN);
    var a = n || {}
      , e = a.additionalDigits == null ? FT : AT(a.additionalDigits);
    if (e !== 2 && e !== 1 && e !== 0)
        throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]")
        return new Date(t.getTime());
    if (typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]")
        return new Date(t);
    if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]"))
        return new Date(NaN);
    var r = jT(t)
      , o = GT(r.date, e)
      , i = o.year
      , s = o.restDateString
      , l = YT(s, i);
    if (isNaN(l))
        return new Date(NaN);
    if (l) {
        var d = l.getTime(), p = 0, g;
        if (r.time && (p = WT(r.time),
        isNaN(p)))
            return new Date(NaN);
        if (r.timeZone || a.timeZone) {
            if (g = tl(r.timeZone || a.timeZone, new Date(d + p)),
            isNaN(g))
                return new Date(NaN)
        } else
            g = Ac(new Date(d + p)),
            g = Ac(new Date(d + p + g));
        return new Date(d + p + g)
    } else
        return new Date(NaN)
}
function jT(t) {
    var n = {}, a = Jt.dateTimePattern.exec(t), e;
    if (a ? (n.date = a[1],
    e = a[3]) : (a = Jt.datePattern.exec(t),
    a ? (n.date = a[1],
    e = a[2]) : (n.date = null,
    e = t)),
    e) {
        var r = Jt.timeZone.exec(e);
        r ? (n.time = e.replace(r[1], ""),
        n.timeZone = r[1].trim()) : n.time = e
    }
    return n
}
function GT(t, n) {
    var a = Jt.YYY[n], e = Jt.YYYYY[n], r;
    if (r = Jt.YYYY.exec(t) || e.exec(t),
    r) {
        var o = r[1];
        return {
            year: parseInt(o, 10),
            restDateString: t.slice(o.length)
        }
    }
    if (r = Jt.YY.exec(t) || a.exec(t),
    r) {
        var i = r[1];
        return {
            year: parseInt(i, 10) * 100,
            restDateString: t.slice(i.length)
        }
    }
    return {
        year: null
    }
}
function YT(t, n) {
    if (n === null)
        return null;
    var a, e, r, o;
    if (t.length === 0)
        return e = new Date(0),
        e.setUTCFullYear(n),
        e;
    if (a = Jt.MM.exec(t),
    a)
        return e = new Date(0),
        r = parseInt(a[1], 10) - 1,
        Rc(n, r) ? (e.setUTCFullYear(n, r),
        e) : new Date(NaN);
    if (a = Jt.DDD.exec(t),
    a) {
        e = new Date(0);
        var i = parseInt(a[1], 10);
        return zT(n, i) ? (e.setUTCFullYear(n, 0, i),
        e) : new Date(NaN)
    }
    if (a = Jt.MMDD.exec(t),
    a) {
        e = new Date(0),
        r = parseInt(a[1], 10) - 1;
        var s = parseInt(a[2], 10);
        return Rc(n, r, s) ? (e.setUTCFullYear(n, r, s),
        e) : new Date(NaN)
    }
    if (a = Jt.Www.exec(t),
    a)
        return o = parseInt(a[1], 10) - 1,
        Nc(n, o) ? Lc(n, o) : new Date(NaN);
    if (a = Jt.WwwD.exec(t),
    a) {
        o = parseInt(a[1], 10) - 1;
        var l = parseInt(a[2], 10) - 1;
        return Nc(n, o, l) ? Lc(n, o, l) : new Date(NaN)
    }
    return null
}
function WT(t) {
    var n, a, e;
    if (n = Jt.HH.exec(t),
    n)
        return a = parseFloat(n[1].replace(",", ".")),
        Bi(a) ? a % 24 * xi : NaN;
    if (n = Jt.HHMM.exec(t),
    n)
        return a = parseInt(n[1], 10),
        e = parseFloat(n[2].replace(",", ".")),
        Bi(a, e) ? a % 24 * xi + e * Bc : NaN;
    if (n = Jt.HHMMSS.exec(t),
    n) {
        a = parseInt(n[1], 10),
        e = parseInt(n[2], 10);
        var r = parseFloat(n[3].replace(",", "."));
        return Bi(a, e, r) ? a % 24 * xi + e * Bc + r * 1e3 : NaN
    }
    return null
}
function Lc(t, n, a) {
    n = n || 0,
    a = a || 0;
    var e = new Date(0);
    e.setUTCFullYear(t, 0, 4);
    var r = e.getUTCDay() || 7
      , o = n * 7 + a + 1 - r;
    return e.setUTCDate(e.getUTCDate() + o),
    e
}
var qT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , $T = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ed(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}
function Rc(t, n, a) {
    if (n < 0 || n > 11)
        return !1;
    if (a != null) {
        if (a < 1)
            return !1;
        var e = Ed(t);
        if (e && a > $T[n] || !e && a > qT[n])
            return !1
    }
    return !0
}
function zT(t, n) {
    if (n < 1)
        return !1;
    var a = Ed(t);
    return !(a && n > 366 || !a && n > 365)
}
function Nc(t, n, a) {
    return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6))
}
function Bi(t, n, a) {
    return !(t != null && (t < 0 || t >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60))
}
var fs = {
    exports: {}
}
  , ys = {
    exports: {}
};
(function(t, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = a;
    function a(e, r) {
        if (e == null)
            throw new TypeError("assign requires that input parameter not be null or undefined");
        for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        return e
    }
    t.exports = n.default
}
)(ys, ys.exports);
var ZT = ys.exports;
(function(t, n) {
    var a = ET.default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = r;
    var e = a(ZT);
    function r(o) {
        return (0,
        e.default)({}, o)
    }
    t.exports = n.default
}
)(fs, fs.exports);
var KT = fs.exports;
const QT = Js(KT);
function XT(t, n, a) {
    var e = hs(t, a)
      , r = tl(n, e, !0)
      , o = new Date(e.getTime() - r)
      , i = new Date(0);
    return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()),
    i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()),
    i
}
function JT(t, n, a) {
    if (typeof t == "string" && !t.match(Pd)) {
        var e = QT(a);
        return e.timeZone = n,
        hs(t, e)
    }
    var r = hs(t, a)
      , o = el(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()).getTime()
      , i = tl(n, new Date(o));
    return new Date(o + i)
}
function Hc(t) {
    return n => new Intl.DateTimeFormat(t,{
        weekday: "short",
        timeZone: "UTC"
    }).format(new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2)
}
function eI(t) {
    return n => cn(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", {
        locale: t
    })
}
const tI = (t, n, a) => {
    const e = [1, 2, 3, 4, 5, 6, 7];
    let r;
    if (t !== null)
        try {
            r = e.map(eI(t))
        } catch {
            r = e.map(Hc(n))
        }
    else
        r = e.map(Hc(n));
    const o = r.slice(0, a)
      , i = r.slice(a + 1, r.length);
    return [r[a]].concat(...i).concat(...o)
}
  , al = (t, n) => {
    const a = [];
    for (let e = +t[0]; e <= +t[1]; e++)
        a.push({
            value: +e,
            text: `${e}`
        });
    return n ? a.reverse() : a
}
  , Dd = (t, n, a) => {
    const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(o => {
        const i = o < 10 ? `0${o}` : o;
        return new Date(`2017-${i}-01T00:00:00+00:00`)
    }
    );
    if (t !== null)
        try {
            const o = a === "long" ? "MMMM" : "MMM";
            return e.map( (i, s) => {
                const l = cn(i, o, {
                    locale: t
                });
                return {
                    text: l.charAt(0).toUpperCase() + l.substring(1),
                    value: s
                }
            }
            )
        } catch {}
    const r = new Intl.DateTimeFormat(n,{
        month: a,
        timeZone: "UTC"
    });
    return e.map( (o, i) => {
        const s = r.format(o);
        return {
            text: s.charAt(0).toUpperCase() + s.substring(1),
            value: i
        }
    }
    )
}
  , aI = t => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][t]
  , Rt = t => {
    const n = V(t);
    return n != null && n.$el ? n?.$el : n
}
  , nI = t => Object.assign({
    type: "dot"
}, t)
  , Ad = t => Array.isArray(t) ? !!t[0] && !!t[1] : !1
  , Jo = {
    prop: t => `"${t}" prop must be enabled!`,
    dateArr: t => `You need to use array as "model-value" binding in order to support "${t}"`
}
  , Vt = t => t
  , Vc = t => t === 0 ? t : !t || isNaN(+t) ? null : +t
  , Uc = t => t === null
  , rI = t => {
    if (t)
        return [...t.querySelectorAll("input, button, select, textarea, a[href]")][0]
}
  , oI = t => {
    const n = []
      , a = e => e.filter(r => r);
    for (let e = 0; e < t.length; e += 3) {
        const r = [t[e], t[e + 1], t[e + 2]];
        n.push(a(r))
    }
    return n
}
  , co = (t, n, a) => {
    const e = a != null
      , r = n != null;
    if (!e && !r)
        return !1;
    const o = +a
      , i = +n;
    return e && r ? +t > o || +t < i : e ? +t > o : r ? +t < i : !1
}
  , vr = (t, n) => oI(t).map(a => a.map(e => {
    const {active: r, disabled: o, isBetween: i, highlighted: s} = n(e);
    return {
        ...e,
        active: r,
        disabled: o,
        className: {
            dp__overlay_cell_active: r,
            dp__overlay_cell: !r,
            dp__overlay_cell_disabled: o,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: o && r,
            dp__cell_in_between: i,
            "dp--highlighted": s
        }
    }
}
))
  , un = (t, n, a=!1) => {
    t && n.allowStopPropagation && (a && t.stopImmediatePropagation(),
    t.stopPropagation())
}
  , iI = () => ["a[href]", "area[href]", "input:not([disabled]):not([type='hidden'])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "[tabindex]:not([tabindex='-1'])", "[data-datepicker-instance]"].join(", ");
function sI(t, n) {
    let a = [...document.querySelectorAll(iI())];
    a = a.filter(r => !t.contains(r) || r.hasAttribute("data-datepicker-instance"));
    const e = a.indexOf(t);
    if (e >= 0 && (n ? e - 1 >= 0 : e + 1 <= a.length))
        return a[e + (n ? -1 : 1)]
}
const lI = (t, n) => {
    let a;
    return function(...e) {
        clearTimeout(a),
        a = setTimeout( () => {
            t(...e)
        }
        , n)
    }
}
  , Fc = (t, n, a, e, r) => {
    const o = ms(t, n.slice(0, t.length), new Date);
    return Hr(o) && rd(o) ? e || r ? o : bt(o, {
        hours: +a.hours,
        minutes: +a?.minutes,
        seconds: +a?.seconds,
        milliseconds: 0
    }) : null
}
  , cI = (t, n, a, e, r) => {
    const o = Array.isArray(a) ? a[0] : a;
    if (typeof n == "string")
        return Fc(t, n, o, e, r);
    if (Array.isArray(n)) {
        let i = null;
        for (const s of n)
            if (i = Fc(t, s, o, e, r),
            i)
                break;
        return i
    }
    return typeof n == "function" ? n(t) : null
}
  , se = t => t ? new Date(t) : new Date
  , uI = (t, n, a) => {
    if (n) {
        const r = (t.getMonth() + 1).toString().padStart(2, "0")
          , o = t.getDate().toString().padStart(2, "0")
          , i = t.getHours().toString().padStart(2, "0")
          , s = t.getMinutes().toString().padStart(2, "0")
          , l = a ? t.getSeconds().toString().padStart(2, "0") : "00";
        return `${t.getFullYear()}-${r}-${o}T${i}:${s}:${l}.000Z`
    }
    const e = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
    return new Date(e).toISOString()
}
  , zt = t => {
    let n = se(JSON.parse(JSON.stringify(t)));
    return n = kd(n, 0),
    n = Sd(n, 0),
    n = $s(n, 0),
    n = qs(n, 0),
    n
}
  , dn = (t, n, a, e) => {
    let r = t ? se(t) : se();
    return (n || n === 0) && (r = kd(r, +n)),
    (a || a === 0) && (r = Sd(r, +a)),
    (e || e === 0) && (r = $s(r, +e)),
    qs(r, 0)
}
  , Ft = (t, n) => !t || !n ? !1 : lo(zt(t), zt(n))
  , it = (t, n) => !t || !n ? !1 : tr(zt(t), zt(n))
  , $t = (t, n) => !t || !n ? !1 : so(zt(t), zt(n))
  , oi = (t, n, a) => t != null && t[0] && t != null && t[1] ? $t(a, t[0]) && Ft(a, t[1]) : t != null && t[0] && n ? $t(a, t[0]) && Ft(a, n) || Ft(a, t[0]) && $t(a, n) : !1
  , _a = t => {
    const n = bt(new Date(t), {
        date: 1
    });
    return zt(n)
}
  , Li = (t, n, a) => n && (a || a === 0) ? Object.fromEntries(["hours", "minutes", "seconds"].map(e => e === n ? [e, a] : [e, isNaN(+t[e]) ? void 0 : +t[e]])) : {
    hours: isNaN(+t.hours) ? void 0 : +t.hours,
    minutes: isNaN(+t.minutes) ? void 0 : +t.minutes,
    seconds: isNaN(+t.seconds) ? void 0 : +t.seconds
}
  , Mn = t => ({
    hours: Ca(t),
    minutes: Na(t),
    seconds: gr(t)
})
  , Md = (t, n) => {
    if (n) {
        const a = qe(se(n));
        if (a > t)
            return 12;
        if (a === t)
            return Je(se(n))
    }
}
  , Od = (t, n) => {
    if (n) {
        const a = qe(se(n));
        return a < t ? -1 : a === t ? Je(se(n)) : void 0
    }
}
  , hr = t => {
    if (t)
        return qe(se(t))
}
  , Ta = (t, n) => n ? XT(t, n) : t
  , xd = (t, n) => n ? JT(t, n) : t
  , dI = t => t instanceof Date ? t : dT(t)
  , Bd = (t, n) => {
    const a = $t(t, n) ? n : t
      , e = $t(n, t) ? n : t;
    return od({
        start: a,
        end: e
    })
}
  , mI = t => {
    const n = Sa(t, 1);
    return {
        month: Je(n),
        year: qe(n)
    }
}
  , Mo = (t, n, a) => {
    const e = Nn(Ta(t, n), {
        weekStartsOn: +a
    })
      , r = cS(Ta(t, n), {
        weekStartsOn: +a
    });
    return [e, r]
}
  , Ld = (t, n) => {
    const a = {
        hours: Ca(se()),
        minutes: Na(se()),
        seconds: n ? gr(se()) : 0
    };
    return Object.assign(a, t)
}
  , sn = (t, n, a) => [bt(se(t), {
    date: 1
}), bt(se(), {
    month: n,
    year: a,
    date: 1
})]
  , Za = (t, n, a) => {
    let e = t ? se(t) : se();
    return (n || n === 0) && (e = wd(e, n)),
    a && (e = La(e, a)),
    e
}
  , Rd = (t, n, a, e, r) => {
    if (!e || r && !n || !r && !a)
        return !1;
    const o = r ? Sa(t, 1) : pr(t, 1)
      , i = [Je(o), qe(o)];
    return r ? !pI(...i, n) : !gI(...i, a)
}
  , gI = (t, n, a) => Ft(...sn(a, t, n)) || it(...sn(a, t, n))
  , pI = (t, n, a) => $t(...sn(a, t, n)) || it(...sn(a, t, n))
  , Nd = (t, n, a, e, r, o, i) => {
    if (typeof n == "function" && !i)
        return n(t);
    const s = a ? {
        locale: a
    } : void 0;
    return Array.isArray(t) ? `${cn(t[0], o, s)}${r && !t[1] ? "" : e}${t[1] ? cn(t[1], o, s) : ""}` : cn(t, o, s)
}
  , Zn = t => {
    if (t)
        return null;
    throw new Error(Jo.prop("partial-range"))
}
  , Po = (t, n) => {
    if (n)
        return t();
    throw new Error(Jo.prop("range"))
}
  , bs = t => Array.isArray(t) ? Hr(t[0]) && (t[1] ? Hr(t[1]) : !0) : t ? Hr(t) : !1
  , vI = (t, n) => bt(n ?? se(), {
    hours: +t.hours || 0,
    minutes: +t.minutes || 0,
    seconds: +t.seconds || 0
})
  , Ri = (t, n, a, e) => {
    if (!t)
        return !0;
    if (e) {
        const r = a === "max" ? lo(t, n) : so(t, n)
          , o = {
            seconds: 0,
            milliseconds: 0
        };
        return r || tr(bt(t, o), bt(n, o))
    }
    return a === "max" ? t.getTime() <= n.getTime() : t.getTime() >= n.getTime()
}
  , Ni = (t, n, a) => t ? vI(t, n) : se(a ?? n)
  , jc = (t, n, a, e, r) => {
    if (Array.isArray(e)) {
        const i = Ni(t, e[0], n)
          , s = Ni(t, e[1], n);
        return Ri(e[0], i, a, !!n) && Ri(e[1], s, a, !!n) && r
    }
    const o = Ni(t, e, n);
    return Ri(e, o, a, !!n) && r
}
  , Hi = t => bt(se(), Mn(t))
  , hI = (t, n) => Array.isArray(t) ? t.map(a => se(a)).filter(a => qe(se(a)) === n).map(a => Je(a)) : []
  , Hd = (t, n, a) => typeof t == "function" ? t({
    month: n,
    year: a
}) : !!t.months.find(e => e.month === n && e.year === a)
  , nl = (t, n) => typeof t == "function" ? t(n) : t.years.includes(n)
  , Dr = Ka({
    menuFocused: !1,
    shiftKeyInMenu: !1
})
  , Vd = () => {
    const t = a => {
        Dr.menuFocused = a
    }
      , n = a => {
        Dr.shiftKeyInMenu !== a && (Dr.shiftKeyInMenu = a)
    }
    ;
    return {
        control: u( () => ({
            shiftKeyInMenu: Dr.shiftKeyInMenu,
            menuFocused: Dr.menuFocused
        })),
        setMenuFocused: t,
        setShiftKey: n
    }
}
  , yt = Ka({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: {
        0: [],
        1: []
    },
    monthPicker: []
})
  , Vi = T(null)
  , Eo = T(!1)
  , Ui = T(!1)
  , Fi = T(!1)
  , ji = T(!1)
  , Xt = T(0)
  , Ut = T(0)
  , _n = () => {
    const t = u( () => Eo.value ? [...yt.selectionGrid, yt.actionRow].filter(g => g.length) : Ui.value ? [...yt.timePicker[0], ...yt.timePicker[1], ji.value ? [] : [Vi.value], yt.actionRow].filter(g => g.length) : Fi.value ? [...yt.monthPicker, yt.actionRow] : [yt.monthYear, ...yt.calendar, yt.time, yt.actionRow].filter(g => g.length))
      , n = g => {
        Xt.value = g ? Xt.value + 1 : Xt.value - 1;
        let h = null;
        t.value[Ut.value] && (h = t.value[Ut.value][Xt.value]),
        h || (Xt.value = g ? Xt.value - 1 : Xt.value + 1)
    }
      , a = g => {
        Ut.value === 0 && !g || Ut.value === t.value.length && g || (Ut.value = g ? Ut.value + 1 : Ut.value - 1,
        t.value[Ut.value] ? t.value[Ut.value] && !t.value[Ut.value][Xt.value] && Xt.value !== 0 && (Xt.value = t.value[Ut.value].length - 1) : Ut.value = g ? Ut.value - 1 : Ut.value + 1)
    }
      , e = g => {
        let h = null;
        t.value[Ut.value] && (h = t.value[Ut.value][Xt.value]),
        h ? h.focus({
            preventScroll: !Eo.value
        }) : Xt.value = g ? Xt.value - 1 : Xt.value + 1
    }
      , r = () => {
        n(!0),
        e(!0)
    }
      , o = () => {
        n(!1),
        e(!1)
    }
      , i = () => {
        a(!1),
        e(!0)
    }
      , s = () => {
        a(!0),
        e(!0)
    }
      , l = (g, h) => {
        yt[h] = g
    }
      , d = (g, h) => {
        yt[h] = g
    }
      , p = () => {
        Xt.value = 0,
        Ut.value = 0
    }
    ;
    return {
        buildMatrix: l,
        buildMultiLevelMatrix: d,
        setTimePickerBackRef: g => {
            Vi.value = g
        }
        ,
        setSelectionGrid: g => {
            Eo.value = g,
            p(),
            g || (yt.selectionGrid = [])
        }
        ,
        setTimePicker: (g, h=!1) => {
            Ui.value = g,
            ji.value = h,
            p(),
            g || (yt.timePicker[0] = [],
            yt.timePicker[1] = [])
        }
        ,
        setTimePickerElements: (g, h=0) => {
            yt.timePicker[h] = g
        }
        ,
        arrowRight: r,
        arrowLeft: o,
        arrowUp: i,
        arrowDown: s,
        clearArrowNav: () => {
            yt.monthYear = [],
            yt.calendar = [],
            yt.time = [],
            yt.actionRow = [],
            yt.selectionGrid = [],
            yt.timePicker[0] = [],
            yt.timePicker[1] = [],
            Eo.value = !1,
            Ui.value = !1,
            ji.value = !1,
            Fi.value = !1,
            p(),
            Vi.value = null
        }
        ,
        setMonthPicker: g => {
            Fi.value = g,
            p()
        }
        ,
        refSets: yt
    }
}
  , Gc = t => ({
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down",
    ...t ?? {}
})
  , fI = t => ({
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: n => `Increment ${n}`,
    decrementValue: n => `Decrement ${n}`,
    openTpOverlay: n => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    nextYear: "Next year",
    prevYear: "Previous year",
    day: () => "",
    ...t ?? {}
})
  , Yc = t => t ? typeof t == "boolean" ? t ? 2 : 0 : +t >= 2 ? +t : 2 : 0
  , yI = t => {
    const n = typeof t == "object" && t
      , a = {
        static: !0,
        solo: !1
    };
    if (!t)
        return {
            ...a,
            count: Yc(!1)
        };
    const e = n ? t : {}
      , r = n ? e.count ?? !0 : t
      , o = Yc(r);
    return Object.assign(a, e, {
        count: o
    })
}
  , bI = (t, n, a) => t || (typeof a == "string" ? a : n)
  , _I = t => typeof t == "boolean" ? t ? Gc({}) : !1 : Gc(t)
  , wI = t => {
    const n = {
        enterSubmit: !0,
        tabSubmit: !0,
        openMenu: !0,
        selectOnFocus: !1,
        rangeSeparator: " - "
    };
    return typeof t == "object" ? {
        ...n,
        ...t ?? {},
        enabled: !0
    } : {
        ...n,
        enabled: t
    }
}
  , kI = t => ({
    months: [],
    years: [],
    times: {
        hours: [],
        minutes: [],
        seconds: []
    },
    ...t ?? {}
})
  , SI = t => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...t ?? {}
})
  , CI = t => {
    const n = {
        input: !1
    };
    return typeof t == "object" ? {
        ...n,
        ...t ?? {},
        enabled: !0
    } : {
        enabled: t,
        ...n
    }
}
  , TI = t => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...t ?? {}
})
  , II = (t, n, a) => {
    const e = {
        dates: Array.isArray(t) ? t.map(r => se(r)) : [],
        years: [],
        months: [],
        quarters: [],
        weeks: [],
        weekdays: n,
        options: {
            highlightDisabled: a
        }
    };
    return typeof t == "function" ? t : {
        ...e,
        ...t ?? {}
    }
}
  , PI = t => typeof t == "object" ? {
    type: t.type,
    hideOnOffsetDates: t.hideOnOffsetDates ?? !1
} : {
    type: t,
    hideOnOffsetDates: !1
}
  , At = t => {
    const n = () => {
        const w = t.enableSeconds ? ":ss" : "";
        return t.is24 ? `HH:mm${w}` : `hh:mm${w} aa`
    }
      , a = () => t.format ? t.format : t.monthPicker ? "MM/yyyy" : t.timePicker ? n() : t.weekPicker ? "MM/dd/yyyy" : t.yearPicker ? "yyyy" : t.quarterPicker ? "QQQ/yyyy" : t.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy"
      , e = w => Ld(w, t.enableSeconds)
      , r = () => t.range ? t.startTime && Array.isArray(t.startTime) ? [e(t.startTime[0]), e(t.startTime[1])] : null : t.startTime && !Array.isArray(t.startTime) ? e(t.startTime) : null
      , o = u( () => yI(t.multiCalendars))
      , i = u( () => r())
      , s = u( () => fI(t.ariaLabels))
      , l = u( () => kI(t.filters))
      , d = u( () => _I(t.transitions))
      , p = u( () => SI(t.actionRow))
      , g = u( () => bI(t.previewFormat, t.format, a()))
      , h = u( () => wI(t.textInput))
      , f = u( () => CI(t.inline))
      , _ = u( () => TI(t.config))
      , A = u( () => II(t.highlight, t.highlightWeekDays, t.highlightDisabledDays))
      , E = u( () => PI(t.weekNumbers));
    return {
        defaultedTransitions: d,
        defaultedMultiCalendars: o,
        defaultedStartTime: i,
        defaultedAriaLabels: s,
        defaultedFilters: l,
        defaultedActionRow: p,
        defaultedPreviewFormat: g,
        defaultedTextInput: h,
        defaultedInline: f,
        defaultedConfig: _,
        defaultedHighlight: A,
        defaultedWeekNumbers: E,
        getDefaultPattern: a,
        getDefaultStartTime: r
    }
}
  , EI = (t, n, a) => {
    const e = T()
      , {defaultedTextInput: r, getDefaultPattern: o} = At(n)
      , i = T("")
      , s = xn(n, "format");
    je(e, () => {
        t("internal-model-change", e.value)
    }
    ),
    je(s, () => {
        F()
    }
    );
    const l = v => xd(v, n.timezone)
      , d = v => Ta(v, n.timezone)
      , p = (v, L, B=!1) => Nd(v, n.format, n.formatLocale, r.value.rangeSeparator, n.modelAuto, L ?? o(), B)
      , g = v => v ? n.modelType ? N(v) : {
        hours: Ca(v),
        minutes: Na(v),
        seconds: n.enableSeconds ? gr(v) : 0
    } : null
      , h = v => n.modelType ? N(v) : {
        month: Je(v),
        year: qe(v)
    }
      , f = v => Array.isArray(v) ? n.multiDates ? v.map(L => _(L, La(se(), L))) : Po( () => [La(se(), v[0]), v[1] ? La(se(), v[1]) : Zn(n.partialRange)], n.range) : La(se(), +v)
      , _ = (v, L) => (typeof v == "string" || typeof v == "number") && n.modelType ? S(v) : L
      , A = v => Array.isArray(v) ? [_(v[0], dn(null, +v[0].hours, +v[0].minutes, v[0].seconds)), _(v[1], dn(null, +v[1].hours, +v[1].minutes, v[1].seconds))] : _(v, dn(null, v.hours, v.minutes, v.seconds))
      , E = v => Array.isArray(v) ? n.multiDates ? v.map(L => _(L, Za(null, +L.month, +L.year))) : Po( () => [_(v[0], Za(null, +v[0].month, +v[0].year)), _(v[1], v[1] ? Za(null, +v[1].month, +v[1].year) : Zn(n.partialRange))], n.range) : _(v, Za(null, +v.month, +v.year))
      , w = v => {
        if (Array.isArray(v))
            return v.map(L => S(L));
        throw new Error(Jo.dateArr("multi-dates"))
    }
      , k = v => {
        if (Array.isArray(v))
            return [se(v[0]), se(v[1])];
        throw new Error(Jo.dateArr("week-picker"))
    }
      , O = v => n.modelAuto ? Array.isArray(v) ? [S(v[0]), S(v[1])] : n.autoApply ? [S(v)] : [S(v), null] : Array.isArray(v) ? Po( () => [S(v[0]), v[1] ? S(v[1]) : Zn(n.partialRange)], n.range) : S(v)
      , I = () => {
        Array.isArray(e.value) && n.range && e.value.length === 1 && e.value.push(Zn(n.partialRange))
    }
      , R = () => {
        const v = e.value;
        return [N(v[0]), v[1] ? N(v[1]) : Zn(n.partialRange)]
    }
      , Y = () => e.value[1] ? R() : N(Vt(e.value[0]))
      , G = () => (e.value || []).map(v => N(v))
      , X = () => (I(),
    n.modelAuto ? Y() : n.multiDates ? G() : Array.isArray(e.value) ? Po( () => R(), n.range) : N(Vt(e.value)))
      , q = v => !v || Array.isArray(v) && !v.length ? null : n.timePicker ? A(Vt(v)) : n.monthPicker ? E(Vt(v)) : n.yearPicker ? f(Vt(v)) : n.multiDates ? w(Vt(v)) : n.weekPicker ? k(Vt(v)) : O(Vt(v))
      , D = v => {
        const L = q(v);
        bs(Vt(L)) ? (e.value = Vt(L),
        F()) : (e.value = null,
        i.value = "")
    }
      , j = () => {
        const v = L => cn(L, r.value.format);
        return `${v(e.value[0])} ${r.value.rangeSeparator} ${e.value[1] ? v(e.value[1]) : ""}`
    }
      , z = () => a.value && e.value ? Array.isArray(e.value) ? j() : cn(e.value, r.value.format) : p(e.value)
      , ee = () => e.value ? n.multiDates ? e.value.map(v => p(v)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? z() : p(e.value) : ""
      , F = () => {
        !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? i.value = ee() : i.value = n.format(e.value)
    }
      , S = v => {
        if (n.utc) {
            const L = new Date(v);
            return n.utc === "preserve" ? new Date(L.getTime() + L.getTimezoneOffset() * 6e4) : L
        }
        return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? d(new Date(v)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? ms(v, o(), new Date) : d(ms(v, n.modelType, new Date)) : d(new Date(v))
    }
      , N = v => v ? n.utc ? uI(v, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +l(v) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? p(l(v)) : p(l(v), n.modelType, !0) : l(v) : ""
      , M = (v, L=!1) => {
        if (t("update:model-value", v),
        n.emitTimezone && L) {
            const B = Array.isArray(v) ? v.map(K => Ta(Vt(K)), n.emitTimezone) : Ta(Vt(v), n.emitTimezone);
            t("update:model-timezone-value", B)
        }
    }
      , W = v => Array.isArray(e.value) ? n.multiDates ? e.value.map(L => v(L)) : [v(e.value[0]), e.value[1] ? v(e.value[1]) : Zn(n.partialRange)] : v(Vt(e.value))
      , b = v => M(Vt(W(v)));
    return {
        inputValue: i,
        internalModelValue: e,
        checkBeforeEmit: () => e.value ? n.range ? n.partialRange ? e.value.length >= 1 : e.value.length === 2 : !!e.value : !1,
        parseExternalModelValue: D,
        formatInputValue: F,
        emitModelValue: () => (F(),
        n.monthPicker ? b(h) : n.timePicker ? b(g) : n.yearPicker ? b(qe) : n.weekPicker ? M(e.value.map(v => N(v)), !0) : M(X(), !0))
    }
}
  , DI = (t, n) => {
    const {defaultedFilters: a} = At(t)
      , {validateMonthYearInRange: e} = Fn(t)
      , r = (d, p) => {
        let g = d;
        return a.value.months.includes(Je(g)) ? (g = p ? Sa(d, 1) : pr(d, 1),
        r(g, p)) : g
    }
      , o = (d, p) => {
        let g = d;
        return a.value.years.includes(qe(g)) ? (g = p ? Us(d, 1) : Cd(d, 1),
        o(g, p)) : g
    }
      , i = (d, p=!1) => {
        const g = bt(new Date, {
            month: t.month,
            year: t.year
        });
        let h = d ? Sa(g, 1) : pr(g, 1);
        t.disableYearSelect && (h = La(h, t.year));
        let f = Je(h)
          , _ = qe(h);
        a.value.months.includes(f) && (h = r(h, d),
        f = Je(h),
        _ = qe(h)),
        a.value.years.includes(_) && (h = o(h, d),
        _ = qe(h)),
        e(f, _, d, t.preventMinMaxNavigation) && s(f, _, p)
    }
      , s = (d, p, g) => {
        n("update-month-year", {
            month: d,
            year: p,
            fromNav: g
        })
    }
      , l = u( () => d => Rd(bt(new Date, {
        month: t.month,
        year: t.year
    }), t.maxDate, t.minDate, t.preventMinMaxNavigation, d));
    return {
        handleMonthYearChange: i,
        isDisabled: l,
        updateMonthYear: s
    }
}
;
var Qn = (t => (t.center = "center",
t.left = "left",
t.right = "right",
t))(Qn || {})
  , ya = (t => (t.month = "month",
t.year = "year",
t))(ya || {})
  , In = (t => (t.top = "top",
t.bottom = "bottom",
t))(In || {})
  , On = (t => (t.header = "header",
t.calendar = "calendar",
t.timePicker = "timePicker",
t))(On || {})
  , Ma = (t => (t.month = "month",
t.year = "year",
t.calendar = "calendar",
t.time = "time",
t.minutes = "minutes",
t.hours = "hours",
t.seconds = "seconds",
t))(Ma || {});
const AI = ({menuRef: t, menuRefInner: n, inputRef: a, pickerWrapperRef: e, inline: r, emit: o, props: i, slots: s}) => {
    const l = T({})
      , d = T(!1)
      , p = T({
        top: "0",
        left: "0"
    })
      , g = T(!1)
      , h = xn(i, "teleportCenter");
    je(h, () => {
        p.value = JSON.parse(JSON.stringify({})),
        I()
    }
    );
    const f = S => {
        if (i.teleport) {
            const N = S.getBoundingClientRect();
            return {
                left: N.left + window.scrollX,
                top: N.top + window.scrollY
            }
        }
        return {
            top: 0,
            left: 0
        }
    }
      , _ = (S, N) => {
        p.value.left = `${S + N - l.value.width}px`
    }
      , A = S => {
        p.value.left = `${S}px`
    }
      , E = (S, N) => {
        i.position === Qn.left && A(S),
        i.position === Qn.right && _(S, N),
        i.position === Qn.center && (p.value.left = `${S + N / 2 - l.value.width / 2}px`)
    }
      , w = S => {
        const {width: N, height: M} = S.getBoundingClientRect()
          , {top: W, left: b} = i.altPosition ? i.altPosition(S) : f(S);
        return {
            top: +W,
            left: +b,
            width: N,
            height: M
        }
    }
      , k = () => {
        p.value.left = "50%",
        p.value.top = "50%",
        p.value.transform = "translate(-50%, -50%)",
        p.value.position = "fixed",
        delete p.value.opacity
    }
      , O = () => {
        const S = Rt(a)
          , {top: N, left: M, transform: W} = i.altPosition(S);
        p.value = {
            top: `${N}px`,
            left: `${M}px`,
            transform: W ?? ""
        }
    }
      , I = (S=!0) => {
        var N;
        if (!r.value.enabled) {
            if (h.value)
                return k();
            if (i.altPosition !== null)
                return O();
            if (S) {
                const M = i.teleport ? (N = n.value) == null ? void 0 : N.$el : t.value;
                M && (l.value = M.getBoundingClientRect()),
                o("recalculate-position")
            }
            return j()
        }
    }
      , R = ({inputEl: S, left: N, width: M}) => {
        window.screen.width > 768 && !d.value && E(N, M),
        X(S)
    }
      , Y = S => {
        const {top: N, left: M, height: W, width: b} = w(S);
        p.value.top = `${W + N + +i.offset}px`,
        g.value = !1,
        d.value || (p.value.left = `${M + b / 2 - l.value.width / 2}px`),
        R({
            inputEl: S,
            left: M,
            width: b
        })
    }
      , G = S => {
        const {top: N, left: M, width: W} = w(S);
        p.value.top = `${N - +i.offset - l.value.height}px`,
        g.value = !0,
        R({
            inputEl: S,
            left: M,
            width: W
        })
    }
      , X = S => {
        if (i.autoPosition) {
            const {left: N, width: M} = w(S)
              , {left: W, right: b} = l.value;
            if (!d.value) {
                if (Math.abs(W) !== Math.abs(b)) {
                    if (W <= 0)
                        return d.value = !0,
                        A(N);
                    if (b >= document.documentElement.clientWidth)
                        return d.value = !0,
                        _(N, M)
                }
                return E(N, M)
            }
        }
    }
      , q = () => {
        const S = Rt(a);
        if (S) {
            const {height: N} = l.value
              , {top: M, height: W} = S.getBoundingClientRect()
              , b = window.innerHeight - M - W
              , v = M;
            return N <= b ? In.bottom : N > b && N <= v ? In.top : b >= v ? In.bottom : In.top
        }
        return In.bottom
    }
      , D = S => q() === In.bottom ? Y(S) : G(S)
      , j = () => {
        const S = Rt(a);
        if (S)
            return i.autoPosition ? D(S) : Y(S)
    }
      , z = function(S) {
        if (S) {
            const N = S.scrollHeight > S.clientHeight
              , M = window.getComputedStyle(S).overflowY.indexOf("hidden") !== -1;
            return N && !M
        }
        return !0
    }
      , ee = function(S) {
        return !S || S === document.body || S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : z(S) ? S : ee(S.parentNode)
    }
      , F = S => {
        if (S)
            switch (i.position) {
            case Qn.left:
                return {
                    left: 0,
                    transform: "translateX(0)"
                };
            case Qn.right:
                return {
                    left: `${S.width}px`,
                    transform: "translateX(-100%)"
                };
            default:
                return {
                    left: `${S.width / 2}px`,
                    transform: "translateX(-50%)"
                }
            }
        return {}
    }
    ;
    return {
        openOnTop: g,
        menuStyle: p,
        xCorrect: d,
        setMenuPosition: I,
        getScrollableParent: ee,
        shadowRender: (S, N) => {
            var M, W, b;
            const v = document.createElement("div")
              , L = (M = Rt(a)) == null ? void 0 : M.getBoundingClientRect();
            v.setAttribute("id", "dp--temp-container");
            const B = (W = e.value) != null && W.clientWidth ? e.value : document.body;
            B.append(v);
            const K = F(L)
              , Z = em(S, {
                ...N,
                shadow: !0,
                style: {
                    opacity: 0,
                    position: "absolute",
                    ...K
                }
            }, Object.fromEntries(Object.keys(s).filter(H => ["right-sidebar", "left-sidebar"].includes(H)).map(H => [H, s[H]])));
            dl(Z, v),
            l.value = (b = Z.el) == null ? void 0 : b.getBoundingClientRect(),
            dl(null, v),
            B.removeChild(v)
        }
    }
}
  , rn = [{
    name: "clock-icon",
    use: ["time", "calendar", "shared"]
}, {
    name: "arrow-left",
    use: ["month-year", "calendar", "shared", "year-mode"]
}, {
    name: "arrow-right",
    use: ["month-year", "calendar", "shared", "year-mode"]
}, {
    name: "arrow-up",
    use: ["time", "calendar", "month-year", "shared"]
}, {
    name: "arrow-down",
    use: ["time", "calendar", "month-year", "shared"]
}, {
    name: "calendar-icon",
    use: ["month-year", "time", "calendar", "shared", "year-mode"]
}, {
    name: "day",
    use: ["calendar", "shared"]
}, {
    name: "month-overlay-value",
    use: ["calendar", "month-year", "shared"]
}, {
    name: "year-overlay-value",
    use: ["calendar", "month-year", "shared", "year-mode"]
}, {
    name: "year-overlay",
    use: ["month-year", "shared"]
}, {
    name: "month-overlay",
    use: ["month-year", "shared"]
}, {
    name: "month-overlay-header",
    use: ["month-year", "shared"]
}, {
    name: "year-overlay-header",
    use: ["month-year", "shared"]
}, {
    name: "hours-overlay-value",
    use: ["calendar", "time", "shared"]
}, {
    name: "minutes-overlay-value",
    use: ["calendar", "time", "shared"]
}, {
    name: "seconds-overlay-value",
    use: ["calendar", "time", "shared"]
}, {
    name: "hours",
    use: ["calendar", "time", "shared"]
}, {
    name: "minutes",
    use: ["calendar", "time", "shared"]
}, {
    name: "month",
    use: ["calendar", "month-year", "shared"]
}, {
    name: "year",
    use: ["calendar", "month-year", "shared", "year-mode"]
}, {
    name: "action-buttons",
    use: ["action"]
}, {
    name: "action-preview",
    use: ["action"]
}, {
    name: "calendar-header",
    use: ["calendar", "shared"]
}, {
    name: "marker-tooltip",
    use: ["calendar", "shared"]
}, {
    name: "action-extra",
    use: ["menu"]
}, {
    name: "time-picker-overlay",
    use: ["calendar", "time", "shared"]
}, {
    name: "am-pm-button",
    use: ["calendar", "time", "shared"]
}, {
    name: "left-sidebar",
    use: ["menu"]
}, {
    name: "right-sidebar",
    use: ["menu"]
}, {
    name: "month-year",
    use: ["month-year", "shared"]
}, {
    name: "time-picker",
    use: ["menu", "shared"]
}, {
    name: "action-row",
    use: ["action"]
}, {
    name: "marker",
    use: ["calendar", "shared"]
}, {
    name: "quarter",
    use: ["shared"]
}]
  , MI = [{
    name: "trigger"
}, {
    name: "input-icon"
}, {
    name: "clear-icon"
}, {
    name: "dp-input"
}]
  , OI = {
    all: () => rn,
    monthYear: () => rn.filter(t => t.use.includes("month-year")),
    input: () => MI,
    timePicker: () => rn.filter(t => t.use.includes("time")),
    action: () => rn.filter(t => t.use.includes("action")),
    calendar: () => rn.filter(t => t.use.includes("calendar")),
    menu: () => rn.filter(t => t.use.includes("menu")),
    shared: () => rn.filter(t => t.use.includes("shared")),
    yearMode: () => rn.filter(t => t.use.includes("year-mode"))
}
  , oa = (t, n, a) => {
    const e = [];
    return OI[n]().forEach(r => {
        t[r.name] && e.push(r.name)
    }
    ),
    a != null && a.length && a.forEach(r => {
        r.slot && e.push(r.slot)
    }
    ),
    e
}
  , ho = t => {
    const n = u( () => e => t.value ? e ? t.value.open : t.value.close : "")
      , a = u( () => e => t.value ? e ? t.value.menuAppearTop : t.value.menuAppearBottom : "");
    return {
        transitionName: n,
        showTransition: !!t.value,
        menuTransition: a
    }
}
  , fo = (t, n) => {
    const a = se(Ta(new Date, t.timezone))
      , e = T([{
        month: Je(a),
        year: qe(a)
    }])
      , r = Ka({
        hours: t.range ? [Ca(a), Ca(a)] : Ca(a),
        minutes: t.range ? [Na(a), Na(a)] : Na(a),
        seconds: t.range ? [0, 0] : 0
    })
      , o = u({
        get: () => t.internalModelValue,
        set: l => {
            !t.readonly && !t.disabled && n("update:internal-model-value", l)
        }
    })
      , i = u( () => l => e.value[l] ? e.value[l].month : 0)
      , s = u( () => l => e.value[l] ? e.value[l].year : 0);
    return {
        calendars: e,
        time: r,
        modelValue: o,
        month: i,
        year: s
    }
}
  , xI = (t, n) => {
    const {defaultedMultiCalendars: a, defaultedHighlight: e} = At(n)
      , {isDisabled: r, matchDate: o} = Fn(n)
      , i = T(null)
      , s = T(se(Ta(new Date, n.timezone)))
      , l = b => {
        !b.current && n.hideOffsetDates || (i.value = b.value)
    }
      , d = () => {
        i.value = null
    }
      , p = b => Array.isArray(t.value) && n.range && t.value[0] && i.value ? b ? $t(i.value, t.value[0]) : Ft(i.value, t.value[0]) : !0
      , g = (b, v) => {
        const L = () => t.value ? v ? t.value[0] || null : t.value[1] : null
          , B = t.value && Array.isArray(t.value) ? L() : null;
        return it(se(b.value), B)
    }
      , h = b => {
        const v = Array.isArray(t.value) ? t.value[0] : null;
        return b ? !Ft(i.value ?? null, v) : !0
    }
      , f = (b, v=!0) => (n.range || n.weekPicker) && Array.isArray(t.value) && t.value.length === 2 ? n.hideOffsetDates && !b.current ? !1 : it(se(b.value), t.value[v ? 0 : 1]) : n.range ? g(b, v) && h(v) || it(b.value, Array.isArray(t.value) ? t.value[0] : null) && p(v) : !1
      , _ = (b, v, L) => Array.isArray(t.value) && t.value[0] && t.value.length === 1 ? b ? !1 : L ? $t(t.value[0], v.value) : Ft(t.value[0], v.value) : !1
      , A = b => !t.value || n.hideOffsetDates && !b.current ? !1 : n.range ? n.modelAuto && Array.isArray(t.value) ? it(b.value, t.value[0] ? t.value[0] : s.value) : !1 : n.multiDates && Array.isArray(t.value) ? t.value.some(v => it(v, b.value)) : it(b.value, t.value ? t.value : s.value)
      , E = b => {
        if (n.autoRange || n.weekPicker) {
            if (i.value) {
                if (n.hideOffsetDates && !b.current)
                    return !1;
                const v = za(i.value, +n.autoRange)
                  , L = Mo(se(i.value), n.timezone, n.weekStart);
                return n.weekPicker ? it(L[1], se(b.value)) : it(v, se(b.value))
            }
            return !1
        }
        return !1
    }
      , w = b => {
        if (n.autoRange || n.weekPicker) {
            if (i.value) {
                const v = za(i.value, +n.autoRange);
                if (n.hideOffsetDates && !b.current)
                    return !1;
                const L = Mo(se(i.value), n.timezone, n.weekStart);
                return n.weekPicker ? $t(b.value, L[0]) && Ft(b.value, L[1]) : $t(b.value, i.value) && Ft(b.value, v)
            }
            return !1
        }
        return !1
    }
      , k = b => {
        if (n.autoRange || n.weekPicker) {
            if (i.value) {
                if (n.hideOffsetDates && !b.current)
                    return !1;
                const v = Mo(se(i.value), n.timezone, n.weekStart);
                return n.weekPicker ? it(v[0], b.value) : it(i.value, b.value)
            }
            return !1
        }
        return !1
    }
      , O = b => oi(t.value, i.value, b.value)
      , I = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1
      , R = () => n.modelAuto ? Ad(n.internalModelValue) : !0
      , Y = b => {
        if (Array.isArray(t.value) && t.value.length || n.weekPicker)
            return !1;
        const v = n.range ? !f(b) && !f(b, !1) : !0;
        return !r(b.value) && !A(b) && !(!b.current && n.hideOffsetDates) && v
    }
      , G = b => n.range ? n.modelAuto ? I() && A(b) : !1 : A(b)
      , X = b => {
        var v;
        return e.value ? typeof e.value == "function" ? e.value(b.value) : o(b.value, (v = n.arrMapValues) != null && v.highlightedDates ? n.arrMapValues.highlightedDates : e.value.dates) : !1
    }
      , q = b => {
        const v = r(b.value);
        return v && (typeof e.value == "function" ? !e.value(b.value, v) : !e.value.options.highlightDisabled)
    }
      , D = b => {
        var v;
        return typeof e.value == "function" ? e.value(b.value) : (v = e.value.weekdays) == null ? void 0 : v.includes(b.value.getDay())
    }
      , j = b => (n.range || n.weekPicker) && (!(a.value.count > 0) || b.current) && R() && !(!b.current && n.hideOffsetDates) && !A(b) ? O(b) : !1
      , z = b => {
        const {isRangeStart: v, isRangeEnd: L} = S(b)
          , B = n.range ? v || L : !1;
        return {
            dp__cell_offset: !b.current,
            dp__pointer: !n.disabled && !(!b.current && n.hideOffsetDates) && !r(b.value),
            dp__cell_disabled: r(b.value),
            dp__cell_highlight: !q(b) && (X(b) || D(b)) && !G(b) && !B && !k(b) && !(j(b) && n.weekPicker) && !L,
            dp__cell_highlight_active: !q(b) && (X(b) || D(b)) && G(b),
            dp__today: !n.noToday && it(b.value, s.value) && b.current
        }
    }
      , ee = b => ({
        dp__active_date: G(b),
        dp__date_hover: Y(b)
    })
      , F = b => ({
        ...N(b),
        ...M(b),
        dp__range_between_week: j(b) && n.weekPicker
    })
      , S = b => {
        const v = a.value.count > 0 ? b.current && f(b) && R() : f(b) && R()
          , L = a.value.count > 0 ? b.current && f(b, !1) && R() : f(b, !1) && R();
        return {
            isRangeStart: v,
            isRangeEnd: L
        }
    }
      , N = b => {
        const {isRangeStart: v, isRangeEnd: L} = S(b);
        return {
            dp__range_start: v,
            dp__range_end: L,
            dp__range_between: j(b) && !n.weekPicker,
            dp__date_hover_start: _(Y(b), b, !0),
            dp__date_hover_end: _(Y(b), b, !1)
        }
    }
      , M = b => ({
        ...N(b),
        dp__cell_auto_range: w(b),
        dp__cell_auto_range_start: k(b),
        dp__cell_auto_range_end: E(b)
    })
      , W = b => n.range ? n.autoRange ? M(b) : n.modelAuto ? {
        ...ee(b),
        ...N(b)
    } : N(b) : n.weekPicker ? F(b) : ee(b);
    return {
        setHoverDate: l,
        clearHoverDate: d,
        getDayClassData: b => n.hideOffsetDates && !b.current ? {} : {
            ...z(b),
            ...W(b),
            [n.dayClass ? n.dayClass(b.value) : ""]: !0,
            [n.calendarCellClassName]: !!n.calendarCellClassName
        }
    }
}
  , Fn = t => {
    const {defaultedFilters: n, defaultedHighlight: a} = At(t)
      , e = () => {
        if (t.timezone)
            return t.timezone;
        if (t.utc)
            return "UTC"
    }
      , r = D => {
        const j = zt(o(se(D))).toISOString()
          , [z] = j.split("T");
        return z
    }
      , o = D => t.utc === "preserve" ? xd(D, e()) : Ta(D, e())
      , i = D => {
        var j;
        const z = t.maxDate ? $t(D, o(se(t.maxDate))) : !1
          , ee = t.minDate ? Ft(D, o(se(t.minDate))) : !1
          , F = p(o(D), (j = t.arrMapValues) != null && j.disabledDates ? t.arrMapValues.disabledDates : t.disabledDates)
          , S = n.value.months.map(v => +v).includes(Je(D))
          , N = t.disabledWeekDays.length ? t.disabledWeekDays.some(v => +v === oC(D)) : !1
          , M = h(D)
          , W = qe(D)
          , b = W < +t.yearRange[0] || W > +t.yearRange[1];
        return !(z || ee || F || S || b || N || M)
    }
      , s = (D, j) => Ft(...sn(t.minDate, D, j)) || it(...sn(t.minDate, D, j))
      , l = (D, j) => $t(...sn(t.maxDate, D, j)) || it(...sn(t.maxDate, D, j))
      , d = (D, j, z) => {
        let ee = !1;
        return t.maxDate && z && l(D, j) && (ee = !0),
        t.minDate && !z && s(D, j) && (ee = !0),
        ee
    }
      , p = (D, j) => D ? j instanceof Map ? !!j.get(r(D)) : Array.isArray(j) ? j.some(z => it(o(se(z)), D)) : j ? j(se(JSON.parse(JSON.stringify(D)))) : !1 : !0
      , g = (D, j, z, ee) => {
        let F = !1;
        return ee ? t.minDate && t.maxDate ? F = d(D, j, z) : (t.minDate && s(D, j) || t.maxDate && l(D, j)) && (F = !0) : F = !0,
        F
    }
      , h = D => {
        var j, z, ee, F, S;
        return Array.isArray(t.allowedDates) && !((j = t.allowedDates) != null && j.length) ? !0 : (z = t.arrMapValues) != null && z.allowedDates ? !p(D, (ee = t.arrMapValues) == null ? void 0 : ee.allowedDates) : (F = t.allowedDates) != null && F.length ? !((S = t.allowedDates) != null && S.some(N => it(zt(N), o(zt(D))))) : !1
    }
      , f = D => !i(D)
      , _ = D => t.noDisabledRange ? !od({
        start: D[0],
        end: D[1]
    }).some(j => f(j)) : !0
      , A = (D, j, z=0) => {
        if (Array.isArray(j) && j[z]) {
            const ee = nS(D, j[z])
              , F = Bd(j[z], D)
              , S = F.length === 1 ? 0 : F.filter(M => f(M)).length
              , N = Math.abs(ee) - S;
            if (t.minRange && t.maxRange)
                return N >= +t.minRange && N <= +t.maxRange;
            if (t.minRange)
                return N >= +t.minRange;
            if (t.maxRange)
                return N <= +t.maxRange
        }
        return !0
    }
      , E = D => new Map(D.map(j => [r(j), !0]))
      , w = D => Array.isArray(D) && D.length > 0
      , k = () => {
        const D = {
            disabledDates: null,
            allowedDates: null,
            highlightedDates: null
        };
        return w(t.allowedDates) && (D.allowedDates = E(t.allowedDates)),
        typeof a.value != "function" && w(a.value.dates) && (D.highlightedDates = E(a.value.dates)),
        w(t.disabledDates) && (D.disabledDates = E(t.disabledDates)),
        D
    }
      , O = () => !t.enableTimePicker || t.monthPicker || t.yearPicker || t.ignoreTimeValidation
      , I = D => Array.isArray(D) ? [D[0] ? Hi(D[0]) : null, D[1] ? Hi(D[1]) : null] : Hi(D)
      , R = (D, j, z) => D.find(ee => +ee.hours === Ca(j) && ee.minutes === "*" ? !0 : +ee.minutes === Na(j) && +ee.hours === Ca(j)) && z
      , Y = (D, j, z) => {
        const [ee,F] = D
          , [S,N] = j;
        return !R(ee, S, z) && !R(F, N, z) && z
    }
      , G = (D, j) => {
        const z = Array.isArray(j) ? j : [j];
        return Array.isArray(t.disabledTimes) ? Array.isArray(t.disabledTimes[0]) ? Y(t.disabledTimes, z, D) : !z.some(ee => R(t.disabledTimes, ee, D)) : D
    }
      , X = (D, j) => {
        const z = Array.isArray(j) ? [Mn(j[0]), j[1] ? Mn(j[1]) : void 0] : Mn(j)
          , ee = !t.disabledTimes(z);
        return D && ee
    }
      , q = (D, j) => t.disabledTimes ? Array.isArray(t.disabledTimes) ? G(j, D) : X(j, D) : j;
    return {
        isDisabled: f,
        validateDate: i,
        validateMonthYearInRange: g,
        isDateRangeAllowed: _,
        checkMinMaxRange: A,
        matchDate: p,
        mapDatesArrToMap: k,
        isValidTime: D => {
            let j = !0;
            if (!D || O())
                return !0;
            const z = !t.minDate && !t.maxDate ? I(D) : D;
            return (t.maxTime || t.maxDate) && (j = jc(t.maxTime, t.maxDate, "max", Vt(z), j)),
            (t.minTime || t.minDate) && (j = jc(t.minTime, t.minDate, "min", Vt(z), j)),
            q(D, j)
        }
    }
}
  , ii = () => {
    const t = u( () => (e, r) => e?.includes(r))
      , n = u( () => (e, r) => e.count ? e.solo ? !0 : r === 0 : !0)
      , a = u( () => (e, r) => e.count ? e.solo ? !0 : r === e.count - 1 : !0);
    return {
        hideNavigationButtons: t,
        showLeftIcon: n,
        showRightIcon: a
    }
}
  , BI = (t, n, a) => {
    const e = T(0)
      , r = Ka({
        [On.timePicker]: !t.enableTimePicker || t.timePicker || t.monthPicker,
        [On.calendar]: !1,
        [On.header]: !1
    })
      , o = u( () => t.monthPicker)
      , i = g => {
        var h;
        if ((h = t.flow) != null && h.length) {
            if (!g && o.value)
                return p();
            r[g] = !0,
            Object.keys(r).filter(f => !r[f]).length || p()
        }
    }
      , s = () => {
        var g;
        (g = t.flow) != null && g.length && e.value !== -1 && (e.value += 1,
        n("flow-step", e.value),
        p())
    }
      , l = () => {
        e.value = -1
    }
      , d = (g, h, ...f) => {
        t.flow[e.value] === g && a.value && a.value[h](...f)
    }
      , p = () => {
        d(Ma.month, "toggleMonthPicker", !0),
        d(Ma.year, "toggleYearPicker", !0),
        d(Ma.calendar, "toggleTimePicker", !1, !0),
        d(Ma.time, "toggleTimePicker", !0, !0);
        const g = t.flow[e.value];
        (g === Ma.hours || g === Ma.minutes || g === Ma.seconds) && d(g, "toggleTimePicker", !0, !0, g)
    }
    ;
    return {
        childMount: i,
        updateFlowStep: s,
        resetFlow: l,
        flowStep: e
    }
}
  , si = {
    multiCalendars: {
        type: [Boolean, Number, String, Object],
        default: void 0
    },
    modelValue: {
        type: [String, Date, Array, Object, Number],
        default: null
    },
    modelType: {
        type: String,
        default: null
    },
    position: {
        type: String,
        default: "center"
    },
    dark: {
        type: Boolean,
        default: !1
    },
    format: {
        type: [String, Function],
        default: () => null
    },
    autoPosition: {
        type: Boolean,
        default: !0
    },
    altPosition: {
        type: Function,
        default: null
    },
    transitions: {
        type: [Boolean, Object],
        default: !0
    },
    formatLocale: {
        type: Object,
        default: null
    },
    utc: {
        type: [Boolean, String],
        default: !1
    },
    ariaLabels: {
        type: Object,
        default: () => ({})
    },
    offset: {
        type: [Number, String],
        default: 10
    },
    hideNavigation: {
        type: Array,
        default: () => []
    },
    timezone: {
        type: String,
        default: null
    },
    emitTimezone: {
        type: String,
        default: null
    },
    vertical: {
        type: Boolean,
        default: !1
    },
    disableMonthYearSelect: {
        type: Boolean,
        default: !1
    },
    disableYearSelect: {
        type: Boolean,
        default: !1
    },
    menuClassName: {
        type: String,
        default: null
    },
    dayClass: {
        type: Function,
        default: null
    },
    yearRange: {
        type: Array,
        default: () => [1900, 2100]
    },
    calendarCellClassName: {
        type: String,
        default: null
    },
    enableTimePicker: {
        type: Boolean,
        default: !0
    },
    autoApply: {
        type: Boolean,
        default: !1
    },
    disabledDates: {
        type: [Array, Function],
        default: () => []
    },
    monthNameFormat: {
        type: String,
        default: "short"
    },
    startDate: {
        type: [Date, String],
        default: null
    },
    startTime: {
        type: [Object, Array],
        default: null
    },
    hideOffsetDates: {
        type: Boolean,
        default: !1
    },
    autoRange: {
        type: [Number, String],
        default: null
    },
    noToday: {
        type: Boolean,
        default: !1
    },
    disabledWeekDays: {
        type: Array,
        default: () => []
    },
    allowedDates: {
        type: Array,
        default: null
    },
    nowButtonLabel: {
        type: String,
        default: "Now"
    },
    markers: {
        type: Array,
        default: () => []
    },
    escClose: {
        type: Boolean,
        default: !0
    },
    spaceConfirm: {
        type: Boolean,
        default: !0
    },
    monthChangeOnArrows: {
        type: Boolean,
        default: !0
    },
    presetDates: {
        type: Array,
        default: () => []
    },
    flow: {
        type: Array,
        default: () => []
    },
    partialFlow: {
        type: Boolean,
        default: !1
    },
    preventMinMaxNavigation: {
        type: Boolean,
        default: !1
    },
    minRange: {
        type: [Number, String],
        default: null
    },
    maxRange: {
        type: [Number, String],
        default: null
    },
    multiDatesLimit: {
        type: [Number, String],
        default: null
    },
    reverseYears: {
        type: Boolean,
        default: !1
    },
    weekPicker: {
        type: Boolean,
        default: !1
    },
    filters: {
        type: Object,
        default: () => ({})
    },
    arrowNavigation: {
        type: Boolean,
        default: !1
    },
    disableTimeRangeValidation: {
        type: Boolean,
        default: !1
    },
    highlight: {
        type: [Array, Function, Object],
        default: null
    },
    highlightWeekDays: {
        type: Array,
        default: null
    },
    highlightDisabledDays: {
        type: Boolean,
        default: !1
    },
    teleport: {
        type: [String, Boolean, Object],
        default: null
    },
    teleportCenter: {
        type: Boolean,
        default: !1
    },
    locale: {
        type: String,
        default: "en-Us"
    },
    weekNumName: {
        type: String,
        default: "W"
    },
    weekStart: {
        type: [Number, String],
        default: 1
    },
    weekNumbers: {
        type: [String, Function, Object],
        default: null
    },
    calendarClassName: {
        type: String,
        default: null
    },
    monthChangeOnScroll: {
        type: [Boolean, String],
        default: !0
    },
    dayNames: {
        type: [Function, Array],
        default: null
    },
    monthPicker: {
        type: Boolean,
        default: !1
    },
    customProps: {
        type: Object,
        default: null
    },
    yearPicker: {
        type: Boolean,
        default: !1
    },
    modelAuto: {
        type: Boolean,
        default: !1
    },
    selectText: {
        type: String,
        default: "Select"
    },
    cancelText: {
        type: String,
        default: "Cancel"
    },
    previewFormat: {
        type: [String, Function],
        default: () => ""
    },
    multiDates: {
        type: Boolean,
        default: !1
    },
    partialRange: {
        type: Boolean,
        default: !0
    },
    ignoreTimeValidation: {
        type: Boolean,
        default: !1
    },
    minDate: {
        type: [Date, String],
        default: null
    },
    maxDate: {
        type: [Date, String],
        default: null
    },
    minTime: {
        type: Object,
        default: null
    },
    maxTime: {
        type: Object,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: ""
    },
    hideInputIcon: {
        type: Boolean,
        default: !1
    },
    clearable: {
        type: Boolean,
        default: !0
    },
    state: {
        type: Boolean,
        default: null
    },
    required: {
        type: Boolean,
        default: !1
    },
    autocomplete: {
        type: String,
        default: "off"
    },
    inputClassName: {
        type: String,
        default: null
    },
    fixedStart: {
        type: Boolean,
        default: !1
    },
    fixedEnd: {
        type: Boolean,
        default: !1
    },
    timePicker: {
        type: Boolean,
        default: !1
    },
    enableSeconds: {
        type: Boolean,
        default: !1
    },
    is24: {
        type: Boolean,
        default: !0
    },
    noHoursOverlay: {
        type: Boolean,
        default: !1
    },
    noMinutesOverlay: {
        type: Boolean,
        default: !1
    },
    noSecondsOverlay: {
        type: Boolean,
        default: !1
    },
    hoursGridIncrement: {
        type: [String, Number],
        default: 1
    },
    minutesGridIncrement: {
        type: [String, Number],
        default: 5
    },
    secondsGridIncrement: {
        type: [String, Number],
        default: 5
    },
    hoursIncrement: {
        type: [Number, String],
        default: 1
    },
    minutesIncrement: {
        type: [Number, String],
        default: 1
    },
    secondsIncrement: {
        type: [Number, String],
        default: 1
    },
    range: {
        type: Boolean,
        default: !1
    },
    uid: {
        type: String,
        default: null
    },
    disabled: {
        type: Boolean,
        default: !1
    },
    readonly: {
        type: Boolean,
        default: !1
    },
    inline: {
        type: [Boolean, Object],
        default: !1
    },
    textInput: {
        type: [Boolean, Object],
        default: !1
    },
    noDisabledRange: {
        type: Boolean,
        default: !1
    },
    sixWeeks: {
        type: [Boolean, String],
        default: !1
    },
    actionRow: {
        type: Object,
        default: () => ({})
    },
    focusStartDate: {
        type: Boolean,
        default: !1
    },
    disabledTimes: {
        type: [Function, Array],
        default: void 0
    },
    showLastInRange: {
        type: Boolean,
        default: !0
    },
    timePickerInline: {
        type: Boolean,
        default: !1
    },
    calendar: {
        type: Function,
        default: null
    },
    config: {
        type: Object,
        default: void 0
    },
    quarterPicker: {
        type: Boolean,
        default: !1
    },
    yearFirst: {
        type: Boolean,
        default: !1
    }
}
  , Da = {
    ...si,
    shadow: {
        type: Boolean,
        default: !1
    },
    flowStep: {
        type: Number,
        default: 0
    },
    internalModelValue: {
        type: [Date, Array],
        default: null
    },
    arrMapValues: {
        type: Object,
        default: () => ({})
    },
    noOverlayFocus: {
        type: Boolean,
        default: !1
    }
}
  , LI = {
    key: 1,
    class: "dp__input_wrap"
}
  , RI = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"]
  , NI = {
    key: 2,
    class: "dp__clear_icon"
}
  , HI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DatepickerInput",
    props: {
        isMenuOpen: {
            type: Boolean,
            default: !1
        },
        inputValue: {
            type: String,
            default: ""
        },
        ...si
    },
    emits: ["clear", "open", "update:input-value", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus-prev", "focus", "blur", "real-blur"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {defaultedTextInput: o, defaultedAriaLabels: i, defaultedInline: s, defaultedConfig: l, getDefaultPattern: d, getDefaultStartTime: p} = At(r)
          , {checkMinMaxRange: g} = Fn(r)
          , h = T()
          , f = T(null)
          , _ = T(!1)
          , A = T(!1)
          , E = u( () => ({
            dp__pointer: !r.disabled && !r.readonly && !o.value.enabled,
            dp__disabled: r.disabled,
            dp__input_readonly: !o.value.enabled,
            dp__input: !0,
            dp__input_icon_pad: !r.hideInputIcon,
            dp__input_valid: !!r.state,
            dp__input_invalid: r.state === !1,
            dp__input_focus: _.value || r.isMenuOpen,
            dp__input_reg: !o.value.enabled,
            [r.inputClassName]: !!r.inputClassName
        }))
          , w = () => {
            e("set-input-date", null),
            r.autoApply && (e("set-empty-date"),
            h.value = null)
        }
          , k = F => {
            const S = p();
            return cI(F, o.value.format ?? d(), S ?? Ld({}, r.enableSeconds), r.inputValue, A.value)
        }
          , O = F => {
            const {rangeSeparator: S} = o.value
              , [N,M] = F.split(`${S}`);
            if (N) {
                const W = k(N.trim())
                  , b = M ? k(M.trim()) : null
                  , v = W && b ? [W, b] : [W];
                g(b, v, 0) && (h.value = W ? v : null)
            }
        }
          , I = () => {
            A.value = !0
        }
          , R = F => {
            if (r.range)
                O(F);
            else if (r.multiDates) {
                const S = F.split(";");
                h.value = S.map(N => k(N.trim())).filter(N => N)
            } else
                h.value = k(F)
        }
          , Y = F => {
            var S;
            const N = typeof F == "string" ? F : (S = F.target) == null ? void 0 : S.value;
            N !== "" ? (o.value.openMenu && !r.isMenuOpen && e("open"),
            R(N),
            e("set-input-date", h.value)) : w(),
            A.value = !1,
            e("update:input-value", N)
        }
          , G = F => {
            o.value.enabled ? (R(F.target.value),
            o.value.enterSubmit && bs(h.value) && r.inputValue !== "" ? (e("set-input-date", h.value, !0),
            h.value = null) : o.value.enterSubmit && r.inputValue === "" && (h.value = null,
            e("clear"))) : D(F)
        }
          , X = F => {
            o.value.enabled && o.value.tabSubmit && R(F.target.value),
            o.value.tabSubmit && bs(h.value) && r.inputValue !== "" ? (e("set-input-date", h.value, !0, !0),
            h.value = null) : o.value.tabSubmit && r.inputValue === "" && (h.value = null,
            e("clear", !0))
        }
          , q = () => {
            var F;
            _.value = !0,
            e("focus"),
            o.value.enabled && o.value.selectOnFocus && ((F = f.value) == null || F.select())
        }
          , D = F => {
            F.preventDefault(),
            un(F, l.value, !0),
            o.value.enabled && o.value.openMenu && !s.value.input && !r.isMenuOpen ? e("open") : o.value.enabled || e("toggle")
        }
          , j = () => {
            e("real-blur"),
            _.value = !1,
            (!r.isMenuOpen || s.value.enabled && s.value.input) && e("blur"),
            r.autoApply && o.value.enabled && h.value && !r.isMenuOpen && (e("set-input-date", h.value),
            e("select-date"),
            h.value = null)
        }
          , z = F => {
            un(F, l.value, !0),
            e("clear")
        }
          , ee = F => {
            if (!o.value.enabled) {
                if (F.code === "Tab")
                    return;
                F.preventDefault()
            }
        }
        ;
        return n({
            focusInput: () => {
                var F;
                (F = f.value) == null || F.focus({
                    preventScroll: !0
                })
            }
            ,
            setParsedDate: F => {
                h.value = F
            }
        }),
        (F, S) => {
            var N;
            return m(),
            y("div", {
                onClick: D
            }, [F.$slots.trigger && !F.$slots["dp-input"] && !V(s).enabled ? ne(F.$slots, "trigger", {
                key: 0
            }) : x("", !0), !F.$slots.trigger && (!V(s).enabled || V(s).input) ? (m(),
            y("div", LI, [F.$slots["dp-input"] && !F.$slots.trigger && !V(s).enabled ? ne(F.$slots, "dp-input", {
                key: 0,
                value: t.inputValue,
                isMenuOpen: t.isMenuOpen,
                onInput: Y,
                onEnter: G,
                onTab: X,
                onClear: z,
                onBlur: j,
                onKeypress: ee,
                onPaste: I,
                openMenu: () => F.$emit("open"),
                closeMenu: () => F.$emit("close"),
                toggleMenu: () => F.$emit("toggle")
            }) : x("", !0), F.$slots["dp-input"] ? x("", !0) : (m(),
            y("input", {
                key: 1,
                id: F.uid ? `dp-input-${F.uid}` : void 0,
                ref_key: "inputRef",
                ref: f,
                name: F.name,
                class: J(E.value),
                inputmode: V(o).enabled ? "text" : "none",
                placeholder: F.placeholder,
                disabled: F.disabled,
                readonly: F.readonly,
                required: F.required,
                value: t.inputValue,
                autocomplete: F.autocomplete,
                "aria-label": (N = V(i)) == null ? void 0 : N.input,
                "aria-disabled": F.disabled || void 0,
                "aria-invalid": F.state === !1 ? !0 : void 0,
                onInput: Y,
                onKeydown: [Ue(G, ["enter"]), Ue(X, ["tab"]), ee],
                onBlur: j,
                onFocus: q,
                onKeypress: ee,
                onPaste: I
            }, null, 42, RI)), P("div", {
                onClick: S[2] || (S[2] = M => e("toggle"))
            }, [F.$slots["input-icon"] && !F.hideInputIcon ? (m(),
            y("span", {
                key: 0,
                class: "dp__input_icon",
                onClick: S[0] || (S[0] = M => e("toggle"))
            }, [ne(F.$slots, "input-icon")])) : x("", !0), !F.$slots["input-icon"] && !F.hideInputIcon && !F.$slots["dp-input"] ? (m(),
            $(V(br), {
                key: 1,
                class: "dp__input_icon dp__input_icons",
                onClick: S[1] || (S[1] = M => e("toggle"))
            })) : x("", !0)]), F.$slots["clear-icon"] && t.inputValue && F.clearable && !F.disabled && !F.readonly ? (m(),
            y("span", NI, [ne(F.$slots, "clear-icon", {
                clear: z
            })])) : x("", !0), F.clearable && !F.$slots["clear-icon"] && t.inputValue && !F.disabled && !F.readonly ? (m(),
            $(V(Td), {
                key: 3,
                class: "dp__clear_icon dp__input_icons",
                onClick: S[3] || (S[3] = Re(M => z(M), ["prevent"]))
            })) : x("", !0)])) : x("", !0)])
        }
    }
})
  , VI = ["title"]
  , UI = {
    class: "dp__action_buttons"
}
  , FI = ["disabled"]
  , jI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "ActionRow",
    props: {
        menuMount: {
            type: Boolean,
            default: !1
        },
        calendarWidth: {
            type: Number,
            default: 0
        },
        ...Da
    },
    emits: ["close-picker", "select-date", "select-now", "invalid-select"],
    setup(t, {emit: n}) {
        const a = n
          , e = t
          , {defaultedActionRow: r, defaultedPreviewFormat: o, defaultedMultiCalendars: i, defaultedTextInput: s, defaultedInline: l, getDefaultPattern: d} = At(e)
          , {isValidTime: p} = Fn(e)
          , {buildMatrix: g} = _n()
          , h = T(null)
          , f = T(null);
        xe( () => {
            e.arrowNavigation && g([Rt(h), Rt(f)], "actionRow")
        }
        );
        const _ = u( () => e.range && !e.partialRange && e.internalModelValue ? e.internalModelValue.length === 2 : !0)
          , A = u( () => !E.value || !w.value || !_.value)
          , E = u( () => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : p(e.internalModelValue))
          , w = u( () => e.monthPicker ? e.range && Array.isArray(e.internalModelValue) ? !e.internalModelValue.filter(D => !X(D)).length : X(e.internalModelValue) : !0)
          , k = () => {
            const D = o.value;
            return e.timePicker || e.monthPicker,
            D(Vt(e.internalModelValue))
        }
          , O = () => {
            const D = e.internalModelValue;
            return i.value.count > 0 ? `${I(D[0])} - ${I(D[1])}` : [I(D[0]), I(D[1])]
        }
          , I = D => Nd(D, o.value, e.formatLocale, s.value.rangeSeparator, e.modelAuto, d())
          , R = u( () => !e.internalModelValue || !e.menuMount ? "" : typeof o.value == "string" ? Array.isArray(e.internalModelValue) ? e.internalModelValue.length === 2 && e.internalModelValue[1] ? O() : e.multiDates ? e.internalModelValue.map(D => `${I(D)}`) : e.modelAuto ? `${I(e.internalModelValue[0])}` : `${I(e.internalModelValue[0])} -` : I(e.internalModelValue) : k())
          , Y = () => e.multiDates ? "; " : " - "
          , G = u( () => Array.isArray(R.value) ? R.value.join(Y()) : R.value)
          , X = D => {
            if (!e.monthPicker)
                return !0;
            let j = !0;
            const z = se(_a(D));
            if (e.minDate && e.maxDate) {
                const ee = se(_a(e.minDate))
                  , F = se(_a(e.maxDate));
                return $t(z, ee) && Ft(z, F) || it(z, ee) || it(z, F)
            }
            if (e.minDate) {
                const ee = se(_a(e.minDate));
                j = $t(z, ee) || it(z, ee)
            }
            if (e.maxDate) {
                const ee = se(_a(e.maxDate));
                j = Ft(z, ee) || it(z, ee)
            }
            return j
        }
          , q = () => {
            E.value && w.value && _.value ? a("select-date") : a("invalid-select")
        }
        ;
        return (D, j) => (m(),
        y("div", {
            class: "dp__action_row",
            style: ze(t.calendarWidth ? {
                width: `${t.calendarWidth}px`
            } : {})
        }, [D.$slots["action-row"] ? ne(D.$slots, "action-row", dt(et({
            key: 0
        }, {
            internalModelValue: D.internalModelValue,
            disabled: A.value,
            selectDate: () => D.$emit("select-date"),
            closePicker: () => D.$emit("close-picker")
        }))) : (m(),
        y(pe, {
            key: 1
        }, [V(r).showPreview ? (m(),
        y("div", {
            key: 0,
            class: "dp__selection_preview",
            title: G.value
        }, [D.$slots["action-preview"] ? ne(D.$slots, "action-preview", {
            key: 0,
            value: D.internalModelValue
        }) : x("", !0), D.$slots["action-preview"] ? x("", !0) : (m(),
        y(pe, {
            key: 1
        }, [$e(te(G.value), 1)], 64))], 8, VI)) : x("", !0), P("div", UI, [D.$slots["action-buttons"] ? ne(D.$slots, "action-buttons", {
            key: 0,
            value: D.internalModelValue
        }) : x("", !0), D.$slots["action-buttons"] ? x("", !0) : (m(),
        y(pe, {
            key: 1
        }, [!V(l).enabled && V(r).showCancel ? (m(),
        y("button", {
            key: 0,
            ref_key: "cancelButtonRef",
            ref: h,
            type: "button",
            class: "dp__action_button dp__action_cancel",
            onClick: j[0] || (j[0] = z => D.$emit("close-picker")),
            onKeydown: [j[1] || (j[1] = Ue(z => D.$emit("close-picker"), ["enter"])), j[2] || (j[2] = Ue(z => D.$emit("close-picker"), ["space"]))]
        }, te(D.cancelText), 545)) : x("", !0), V(r).showNow ? (m(),
        y("button", {
            key: 1,
            ref_key: "cancelButtonRef",
            ref: h,
            type: "button",
            class: "dp__action_button dp__action_cancel",
            onClick: j[3] || (j[3] = z => D.$emit("select-now")),
            onKeydown: [j[4] || (j[4] = Ue(z => D.$emit("select-now"), ["enter"])), j[5] || (j[5] = Ue(z => D.$emit("select-now"), ["space"]))]
        }, te(D.nowButtonLabel), 545)) : x("", !0), V(r).showSelect ? (m(),
        y("button", {
            key: 2,
            ref_key: "selectButtonRef",
            ref: f,
            type: "button",
            class: "dp__action_button dp__action_select",
            disabled: A.value,
            onKeydown: [Ue(q, ["enter"]), Ue(q, ["space"])],
            onClick: q
        }, te(D.selectText), 41, FI)) : x("", !0)], 64))])], 64))], 4))
    }
})
  , GI = ["onKeydown"]
  , YI = {
    class: "dp__selection_grid_header"
}
  , WI = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"]
  , qI = ["aria-label"]
  , yo = re({
    __name: "SelectionOverlay",
    props: {
        items: {},
        type: {},
        isLast: {
            type: Boolean
        },
        arrowNavigation: {
            type: Boolean
        },
        skipButtonRef: {
            type: Boolean
        },
        headerRefs: {},
        hideNavigation: {},
        escClose: {
            type: Boolean
        },
        useRelative: {
            type: Boolean
        },
        height: {},
        textInput: {
            type: [Boolean, Object]
        },
        config: {},
        noOverlayFocus: {
            type: Boolean
        },
        focusValue: {}
    },
    emits: ["selected", "toggle", "reset-flow", "hover-value"],
    setup(t, {expose: n, emit: a}) {
        const {setSelectionGrid: e, buildMultiLevelMatrix: r, setMonthPicker: o} = _n()
          , i = a
          , s = t
          , {defaultedAriaLabels: l, defaultedTextInput: d, defaultedConfig: p} = At(s)
          , {hideNavigationButtons: g} = ii()
          , h = T(!1)
          , f = T(null)
          , _ = T(null)
          , A = T([])
          , E = T()
          , w = T(null)
          , k = T(0)
          , O = T(null);
        tm( () => {
            f.value = null
        }
        ),
        xe( () => {
            Ot().then( () => j()),
            s.noOverlayFocus || R(),
            I(!0)
        }
        ),
        uo( () => I(!1));
        const I = b => {
            var v;
            s.arrowNavigation && ((v = s.headerRefs) != null && v.length ? o(b) : e(b))
        }
          , R = () => {
            var b;
            const v = Rt(_);
            v && (d.value.enabled || (f.value ? (b = f.value) == null || b.focus({
                preventScroll: !0
            }) : v.focus({
                preventScroll: !0
            })),
            h.value = v.clientHeight < v.scrollHeight)
        }
          , Y = u( () => ({
            dp__overlay: !0,
            "dp--overlay-absolute": !s.useRelative,
            "dp--overlay-relative": s.useRelative
        }))
          , G = u( () => s.useRelative ? {
            height: `${s.height}px`,
            width: "260px"
        } : void 0)
          , X = u( () => ({
            dp__overlay_col: !0
        }))
          , q = u( () => ({
            dp__btn: !0,
            dp__button: !0,
            dp__overlay_action: !0,
            dp__over_action_scroll: h.value,
            dp__button_bottom: s.isLast
        }))
          , D = u( () => {
            var b, v;
            return {
                dp__overlay_container: !0,
                dp__container_flex: ((b = s.items) == null ? void 0 : b.length) <= 6,
                dp__container_block: ((v = s.items) == null ? void 0 : v.length) > 6
            }
        }
        );
        je( () => s.items, () => j(), {
            deep: !0
        });
        const j = () => {
            Ot().then( () => {
                const b = Rt(f)
                  , v = Rt(_)
                  , L = Rt(w)
                  , B = Rt(O)
                  , K = L ? L.getBoundingClientRect().height : 0;
                v && (v.getBoundingClientRect().height ? k.value = v.getBoundingClientRect().height - K : k.value = p.value.modeHeight - K),
                b && B && (B.scrollTop = b.offsetTop - B.offsetTop - (k.value / 2 - b.getBoundingClientRect().height) - K)
            }
            )
        }
          , z = b => {
            b.disabled || i("selected", b.value)
        }
          , ee = () => {
            i("toggle"),
            i("reset-flow")
        }
          , F = () => {
            s.escClose && ee()
        }
          , S = (b, v, L, B) => {
            b && ((v.active || v.value === s.focusValue) && (f.value = b),
            s.arrowNavigation && (Array.isArray(A.value[L]) ? A.value[L][B] = b : A.value[L] = [b],
            N()))
        }
          , N = () => {
            var b, v;
            const L = (b = s.headerRefs) != null && b.length ? [s.headerRefs].concat(A.value) : A.value.concat([s.skipButtonRef ? [] : [w.value]]);
            r(Vt(L), (v = s.headerRefs) != null && v.length ? "monthPicker" : "selectionGrid")
        }
          , M = b => {
            s.arrowNavigation || un(b, p.value, !0)
        }
          , W = b => {
            E.value = b,
            i("hover-value", b)
        }
        ;
        return n({
            focusGrid: R
        }),
        (b, v) => {
            var L;
            return m(),
            y("div", {
                ref_key: "gridWrapRef",
                ref: _,
                class: J(Y.value),
                style: ze(G.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [Ue(Re(F, ["prevent"]), ["esc"]), v[0] || (v[0] = Ue(Re(B => M(B), ["prevent"]), ["left"])), v[1] || (v[1] = Ue(Re(B => M(B), ["prevent"]), ["up"])), v[2] || (v[2] = Ue(Re(B => M(B), ["prevent"]), ["down"])), v[3] || (v[3] = Ue(Re(B => M(B), ["prevent"]), ["right"]))]
            }, [P("div", {
                ref_key: "containerRef",
                ref: O,
                class: J(D.value),
                role: "grid",
                style: ze({
                    height: `${k.value}px`
                })
            }, [P("div", YI, [ne(b.$slots, "header")]), b.$slots.overlay ? ne(b.$slots, "overlay", {
                key: 0
            }) : (m(!0),
            y(pe, {
                key: 1
            }, Me(b.items, (B, K) => (m(),
            y("div", {
                key: K,
                class: J(["dp__overlay_row", {
                    dp__flex_row: b.items.length >= 3
                }]),
                role: "row"
            }, [(m(!0),
            y(pe, null, Me(B, (Z, H) => (m(),
            y("div", {
                key: Z.value,
                ref_for: !0,
                ref: C => S(C, Z, K, H),
                role: "gridcell",
                class: J(X.value),
                "aria-selected": Z.active,
                "aria-disabled": Z.disabled || void 0,
                tabindex: "0",
                onClick: C => z(Z),
                onKeydown: [Ue(Re(C => z(Z), ["prevent"]), ["enter"]), Ue(Re(C => z(Z), ["prevent"]), ["space"])],
                onMouseover: C => W(Z.value)
            }, [P("div", {
                class: J(Z.className)
            }, [b.$slots.item ? ne(b.$slots, "item", {
                key: 0,
                item: Z
            }) : x("", !0), b.$slots.item ? x("", !0) : (m(),
            y(pe, {
                key: 1
            }, [$e(te(Z.text), 1)], 64))], 2)], 42, WI))), 128))], 2))), 128))], 6), b.$slots["button-icon"] ? le((m(),
            y("button", {
                key: 0,
                ref_key: "toggleButton",
                ref: w,
                type: "button",
                "aria-label": (L = V(l)) == null ? void 0 : L.toggleOverlay,
                class: J(q.value),
                tabindex: "0",
                onClick: ee,
                onKeydown: [Ue(ee, ["enter"]), Ue(ee, ["tab"])]
            }, [ne(b.$slots, "button-icon")], 42, qI)), [[ma, !V(g)(b.hideNavigation, b.type)]]) : x("", !0)], 46, GI)
        }
    }
})
  , li = re({
    __name: "InstanceWrap",
    props: {
        multiCalendars: {},
        stretch: {
            type: Boolean
        }
    },
    setup(t) {
        const n = t
          , a = u( () => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0])
          , e = u( () => ({
            dp__instance_calendar: n.multiCalendars > 0
        }));
        return (r, o) => (m(),
        y("div", {
            class: J({
                dp__menu_inner: !r.stretch,
                "dp--menu--inner-stretched": r.stretch,
                dp__flex_display: r.multiCalendars > 0
            })
        }, [(m(!0),
        y(pe, null, Me(a.value, (i, s) => (m(),
        y("div", {
            key: i,
            class: J(e.value)
        }, [ne(r.$slots, "default", {
            instance: i,
            index: s
        })], 2))), 128))], 2))
    }
})
  , $I = ["aria-label", "aria-disabled"]
  , Vr = re({
    compatConfig: {
        MODE: 3
    },
    __name: "ArrowBtn",
    props: {
        ariaLabel: {},
        disabled: {
            type: Boolean
        }
    },
    emits: ["activate", "set-ref"],
    setup(t, {emit: n}) {
        const a = n
          , e = T(null);
        return xe( () => a("set-ref", e)),
        (r, o) => (m(),
        y("button", {
            ref_key: "elRef",
            ref: e,
            type: "button",
            class: "dp__btn dp--arrow-btn-nav",
            tabindex: "0",
            "aria-label": r.ariaLabel,
            "aria-disabled": r.disabled || void 0,
            onClick: o[0] || (o[0] = i => r.$emit("activate")),
            onKeydown: [o[1] || (o[1] = Ue(Re(i => r.$emit("activate"), ["prevent"]), ["enter"])), o[2] || (o[2] = Ue(Re(i => r.$emit("activate"), ["prevent"]), ["space"]))]
        }, [P("span", {
            class: J(["dp__inner_nav", {
                dp__inner_nav_disabled: r.disabled
            }])
        }, [ne(r.$slots, "default")], 2)], 40, $I))
    }
})
  , zI = {
    class: "dp--year-mode-picker"
}
  , ZI = ["aria-label"]
  , Ud = re({
    __name: "YearModePicker",
    props: {
        ...Da,
        showYearPicker: {
            type: Boolean,
            default: !1
        },
        items: {
            type: Array,
            default: () => []
        },
        instance: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        isDisabled: {
            type: Function,
            default: () => !1
        }
    },
    emits: ["toggle-year-picker", "year-select", "handle-year"],
    setup(t, {emit: n}) {
        const a = n
          , e = t
          , {showRightIcon: r, showLeftIcon: o} = ii()
          , {defaultedConfig: i, defaultedMultiCalendars: s, defaultedAriaLabels: l, defaultedTransitions: d} = At(e)
          , {showTransition: p, transitionName: g} = ho(d)
          , h = (A=!1, E) => {
            a("toggle-year-picker", {
                flow: A,
                show: E
            })
        }
          , f = A => {
            a("year-select", A)
        }
          , _ = (A=!1) => {
            a("handle-year", A)
        }
        ;
        return (A, E) => {
            var w, k, O;
            return m(),
            y("div", zI, [V(o)(V(s), t.instance) ? (m(),
            $(Vr, {
                key: 0,
                ref: "mpPrevIconRef",
                "aria-label": (w = V(l)) == null ? void 0 : w.prevYear,
                disabled: t.isDisabled(!1),
                onActivate: E[0] || (E[0] = I => _(!1))
            }, {
                default: ye( () => [A.$slots["arrow-left"] ? ne(A.$slots, "arrow-left", {
                    key: 0
                }) : x("", !0), A.$slots["arrow-left"] ? x("", !0) : (m(),
                $(V(zs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), P("button", {
                ref: "mpYearButtonRef",
                class: "dp__btn dp--year-select",
                type: "button",
                "aria-label": (k = V(l)) == null ? void 0 : k.openYearsOverlay,
                onClick: E[1] || (E[1] = () => h(!1)),
                onKeydown: E[2] || (E[2] = Ue( () => h(!1), ["enter"]))
            }, [A.$slots.year ? ne(A.$slots, "year", {
                key: 0,
                year: t.year
            }) : x("", !0), A.$slots.year ? x("", !0) : (m(),
            y(pe, {
                key: 1
            }, [$e(te(t.year), 1)], 64))], 40, ZI), V(r)(V(s), t.instance) ? (m(),
            $(Vr, {
                key: 1,
                ref: "mpNextIconRef",
                "aria-label": (O = V(l)) == null ? void 0 : O.nextYear,
                disabled: t.isDisabled(!0),
                onActivate: E[3] || (E[3] = I => _(!0))
            }, {
                default: ye( () => [A.$slots["arrow-right"] ? ne(A.$slots, "arrow-right", {
                    key: 0
                }) : x("", !0), A.$slots["arrow-right"] ? x("", !0) : (m(),
                $(V(Zs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), Le(ra, {
                name: V(g)(t.showYearPicker),
                css: V(p)
            }, {
                default: ye( () => [t.showYearPicker ? (m(),
                $(yo, {
                    key: 0,
                    items: t.items,
                    "text-input": A.textInput,
                    "esc-close": A.escClose,
                    config: A.config,
                    "is-last": A.autoApply && !V(i).keepActionRow,
                    "hide-navigation": A.hideNavigation,
                    type: "year",
                    onToggle: h,
                    onSelected: E[4] || (E[4] = I => f(I))
                }, ea({
                    "button-icon": ye( () => [A.$slots["calendar-icon"] ? ne(A.$slots, "calendar-icon", {
                        key: 0
                    }) : x("", !0), A.$slots["calendar-icon"] ? x("", !0) : (m(),
                    $(V(br), {
                        key: 1
                    }))]),
                    _: 2
                }, [A.$slots["year-overlay-value"] ? {
                    name: "item",
                    fn: ye( ({item: I}) => [ne(A.$slots, "year-overlay-value", {
                        text: I.text,
                        value: I.value
                    })]),
                    key: "0"
                } : void 0]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation"])) : x("", !0)]),
                _: 3
            }, 8, ["name", "css"])])
        }
    }
})
  , rl = (t, n, a) => {
    if (n.value && Array.isArray(n.value))
        if (n.value.some(e => it(t, e))) {
            const e = n.value.filter(r => !it(r, t));
            n.value = e.length ? e : null
        } else
            (a && +a > n.value.length || !a) && n.value.push(t);
    else
        n.value = [t]
}
  , ol = (t, n, a) => {
    let e = t.value ? t.value.slice() : [];
    return e.length === 2 && e[1] !== null && (e = []),
    e.length ? Ft(n, e[0]) ? (e.unshift(n),
    a("range-start", e[0]),
    a("range-start", e[1])) : (e[1] = n,
    a("range-end", n)) : (e = [n],
    a("range-start", n)),
    t.value = e,
    e
}
  , ci = (t, n, a, e) => {
    t[0] && t[1] && a && n("auto-apply"),
    t[0] && !t[1] && e && a && n("auto-apply")
}
  , Fd = t => {
    Array.isArray(t.value) && t.value.length <= 2 && t.range ? t.modelValue.value = t.value.map(n => Ta(se(n), t.timezone)) : Array.isArray(t.value) || (t.modelValue.value = Ta(se(t.value), t.timezone))
}
  , jd = ({multiCalendars: t, highlight: n, calendars: a, modelValue: e, props: r, year: o, month: i, emit: s}) => {
    const l = u( () => al(r.yearRange, r.reverseYears))
      , d = T([!1])
      , p = u( () => (I, R) => {
        const Y = bt(_a(new Date), {
            month: i.value(I),
            year: o.value(I)
        });
        return Rd(Y, r.maxDate, r.minDate, r.preventMinMaxNavigation, R)
    }
    )
      , g = () => {
        for (let I = 0; I < t.value.count; I++)
            if (I === 0)
                a.value[I] = a.value[0];
            else {
                const R = bt(se(), a.value[I - 1]);
                a.value[I] = {
                    month: Je(R),
                    year: qe(Us(R, 1))
                }
            }
    }
      , h = I => {
        if (!I)
            return g();
        const R = bt(se(), a.value[I]);
        return a.value[0].year = qe(Cd(R, t.value.count - 1)),
        g()
    }
      , f = I => r.focusStartDate ? I[0] : I[1] ? I[1] : I[0]
      , _ = () => {
        if (e.value) {
            const I = Array.isArray(e.value) ? f(e.value) : e.value;
            a.value[0] = {
                month: Je(I),
                year: qe(I)
            }
        }
    }
    ;
    xe( () => {
        _(),
        t.value.count && g()
    }
    );
    const A = (I, R) => {
        a.value[R].year = I,
        t.value.count && !t.value.solo && h(R)
    }
      , E = u( () => I => vr(l.value, R => {
        const Y = o.value(I) === R.value
          , G = co(R.value, hr(r.minDate), hr(r.maxDate))
          , X = nl(n.value, R.value);
        return {
            active: Y,
            disabled: G,
            highlighted: X
        }
    }
    ))
      , w = (I, R) => {
        A(I, R),
        O(R)
    }
      , k = (I, R=!1) => {
        if (!p.value(I, R)) {
            const Y = R ? o.value(I) + 1 : o.value(I) - 1;
            A(Y, I)
        }
    }
      , O = (I, R=!1, Y) => {
        R || s("reset-flow"),
        Y !== void 0 ? d.value[I] = Y : d.value[I] = !d.value[I],
        d.value || s("overlay-closed")
    }
    ;
    return {
        isDisabled: p,
        groupedYears: E,
        showYearPicker: d,
        selectYear: A,
        toggleYearPicker: O,
        handleYearSelect: w,
        handleYear: k
    }
}
  , KI = (t, n) => {
    const {defaultedMultiCalendars: a, defaultedAriaLabels: e, defaultedTransitions: r, defaultedConfig: o, defaultedHighlight: i} = At(t)
      , {modelValue: s, year: l, month: d, calendars: p} = fo(t, n)
      , g = u( () => Dd(t.formatLocale, t.locale, t.monthNameFormat))
      , h = T(null)
      , {selectYear: f, groupedYears: _, showYearPicker: A, toggleYearPicker: E, handleYearSelect: w, handleYear: k, isDisabled: O} = jd({
        modelValue: s,
        multiCalendars: a,
        highlight: i,
        calendars: p,
        year: l,
        month: d,
        props: t,
        emit: n
    });
    xe( () => {
        t.startDate && (s.value && t.focusStartDate || !s.value) && f(qe(se(t.startDate)), 0)
    }
    );
    const I = M => M ? {
        month: Je(M),
        year: qe(M)
    } : {
        month: null,
        year: null
    }
      , R = () => s.value ? Array.isArray(s.value) ? s.value.map(M => I(M)) : I(s.value) : I()
      , Y = (M, W) => {
        const b = p.value[M]
          , v = R();
        return Array.isArray(v) ? v.some(L => L.year === b?.year && L.month === W) : b?.year === v.year && W === v.month
    }
      , G = (M, W, b) => {
        var v, L;
        const B = R();
        return Array.isArray(B) ? l.value(W) === ((v = B[b]) == null ? void 0 : v.year) && M === ((L = B[b]) == null ? void 0 : L.month) : !1
    }
      , X = (M, W) => {
        if (t.range) {
            const b = R();
            if (Array.isArray(s.value) && Array.isArray(b)) {
                const v = G(M, W, 0) || G(M, W, 1)
                  , L = Za(_a(se()), M, l.value(W));
                return oi(s.value, h.value, L) && !v
            }
            return !1
        }
        return !1
    }
      , q = u( () => M => vr(g.value, W => {
        const b = Y(M, W.value)
          , v = co(W.value, Md(l.value(M), t.minDate), Od(l.value(M), t.maxDate)) || hI(t.disabledDates, l.value(M)).includes(W.value)
          , L = X(W.value, M)
          , B = Hd(i.value, W.value, l.value(M));
        return {
            active: b,
            disabled: v,
            isBetween: L,
            highlighted: B
        }
    }
    ))
      , D = (M, W) => Za(_a(se()), M, l.value(W))
      , j = (M, W) => {
        const b = s.value ? s.value : _a(new Date);
        s.value = Za(b, M, l.value(W)),
        n("auto-apply")
    }
      , z = (M, W) => {
        const b = ol(s, D(M, W), n);
        ci(b, n, t.autoApply, t.modelAuto)
    }
      , ee = (M, W) => {
        rl(D(M, W), s, t.multiDatesLimit),
        n("auto-apply", !0)
    }
      , F = (M, W) => (p.value[W].month = M,
    N(W, p.value[W].year, M),
    t.multiDates ? ee(M, W) : t.range ? z(M, W) : j(M, W))
      , S = (M, W) => {
        f(M, W),
        N(W, M, null)
    }
      , N = (M, W, b) => {
        let v = b;
        if (!v && v !== 0) {
            const L = R();
            v = Array.isArray(L) ? L[M].month : L.month
        }
        n("update-month-year", {
            instance: M,
            year: W,
            month: v
        })
    }
    ;
    return {
        groupedMonths: q,
        groupedYears: _,
        year: l,
        isDisabled: O,
        defaultedMultiCalendars: a,
        defaultedAriaLabels: e,
        defaultedTransitions: r,
        defaultedConfig: o,
        showYearPicker: A,
        modelValue: s,
        presetDate: (M, W) => {
            Fd({
                value: M,
                modelValue: s,
                range: t.range,
                timezone: W ? void 0 : t.timezone
            }),
            n("auto-apply")
        }
        ,
        setHoverDate: (M, W) => {
            h.value = D(M, W)
        }
        ,
        selectMonth: F,
        selectYear: S,
        toggleYearPicker: E,
        handleYearSelect: w,
        handleYear: k,
        getModelMonthYear: R
    }
}
  , QI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "MonthPicker",
    props: {
        ...Da
    },
    emits: ["update:internal-model-value", "overlay-closed", "reset-flow", "range-start", "range-end", "auto-apply", "update-month-year", "mount"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = Vn()
          , o = oa(r, "yearMode")
          , i = t;
        xe( () => {
            i.shadow || e("mount", null)
        }
        );
        const {groupedMonths: s, groupedYears: l, year: d, isDisabled: p, defaultedMultiCalendars: g, defaultedConfig: h, showYearPicker: f, modelValue: _, presetDate: A, setHoverDate: E, selectMonth: w, selectYear: k, toggleYearPicker: O, handleYearSelect: I, handleYear: R, getModelMonthYear: Y} = KI(i, e);
        return n({
            getSidebarProps: () => ({
                modelValue: _,
                year: d,
                getModelMonthYear: Y,
                selectMonth: w,
                selectYear: k,
                handleYear: R
            }),
            presetDate: A,
            toggleYearPicker: G => O(0, G)
        }),
        (G, X) => (m(),
        $(li, {
            "multi-calendars": V(g).count,
            stretch: ""
        }, {
            default: ye( ({instance: q}) => [G.$slots["month-year"] ? ne(G.$slots, "month-year", dt(et({
                key: 0
            }, {
                year: V(d),
                months: V(s)(q),
                years: V(l)(q),
                selectMonth: V(w),
                selectYear: V(k),
                instance: q
            }))) : (m(),
            $(yo, {
                key: 1,
                items: V(s)(q),
                "arrow-navigation": G.arrowNavigation,
                "is-last": G.autoApply && !V(h).keepActionRow,
                "esc-close": G.escClose,
                height: V(h).modeHeight,
                config: G.config,
                "no-overlay-focus": !!(G.noOverlayFocus || G.textInput),
                "use-relative": "",
                type: "month",
                onSelected: D => V(w)(D, q),
                onHoverValue: D => V(E)(D, q)
            }, {
                header: ye( () => [Le(Ud, et(G.$props, {
                    items: V(l)(q),
                    instance: q,
                    "show-year-picker": V(f)[q],
                    year: V(d)(q),
                    "is-disabled": D => V(p)(q, D),
                    onHandleYear: D => V(R)(q, D),
                    onYearSelect: D => V(I)(D, q),
                    onToggleYearPicker: D => V(O)(q, D?.flow, D?.show)
                }), ea({
                    _: 2
                }, [Me(V(o), (D, j) => ({
                    name: D,
                    fn: ye(z => [ne(G.$slots, D, dt(qt(z)))])
                }))]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]),
                _: 2
            }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))]),
            _: 3
        }, 8, ["multi-calendars"]))
    }
})
  , XI = (t, n) => {
    const {modelValue: a} = fo(t, n)
      , e = T(null)
      , {defaultedHighlight: r, defaultedFilters: o} = At(t)
      , i = T();
    xe( () => {
        t.startDate && (a.value && t.focusStartDate || !a.value) && (i.value = qe(se(t.startDate)))
    }
    );
    const s = g => Array.isArray(a.value) ? a.value.some(h => qe(h) === g) : a.value ? qe(a.value) === g : !1
      , l = g => t.range && Array.isArray(a.value) ? oi(a.value, e.value, p(g)) : !1
      , d = u( () => vr(al(t.yearRange, t.reverseYears), g => {
        const h = s(g.value)
          , f = co(g.value, hr(t.minDate), hr(t.maxDate)) || o.value.years.includes(g.value)
          , _ = l(g.value) && !h
          , A = nl(r.value, g.value);
        return {
            active: h,
            disabled: f,
            isBetween: _,
            highlighted: A
        }
    }
    ))
      , p = g => La(_a(new Date), g);
    return {
        groupedYears: d,
        modelValue: a,
        focusYear: i,
        setHoverValue: g => {
            e.value = La(_a(new Date), g)
        }
        ,
        selectYear: g => {
            var h;
            if (t.multiDates)
                return a.value ? Array.isArray(a.value) && (((h = a.value) == null ? void 0 : h.map(f => qe(f))).includes(g) ? a.value = a.value.filter(f => qe(f) !== g) : a.value.push(La(zt(se()), g))) : a.value = [La(zt(se()), g)],
                n("auto-apply", !0);
            if (t.range) {
                const f = ol(a, p(g), n);
                return ci(f, n, t.autoApply, t.modelAuto)
            }
            a.value = p(g),
            n("auto-apply")
        }
    }
}
  , JI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "YearPicker",
    props: {
        ...Da
    },
    emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {groupedYears: o, modelValue: i, focusYear: s, selectYear: l, setHoverValue: d} = XI(r, e)
          , {defaultedConfig: p} = At(r);
        return n({
            getSidebarProps: () => ({
                modelValue: i,
                selectYear: l
            })
        }),
        (g, h) => (m(),
        y("div", null, [g.$slots["month-year"] ? ne(g.$slots, "month-year", dt(et({
            key: 0
        }, {
            years: V(o),
            selectYear: V(l)
        }))) : (m(),
        $(yo, {
            key: 1,
            items: V(o),
            "is-last": g.autoApply && !V(p).keepActionRow,
            height: V(p).modeHeight,
            config: g.config,
            "no-overlay-focus": !!(g.noOverlayFocus || g.textInput),
            "focus-value": V(s),
            type: "year",
            "use-relative": "",
            onSelected: V(l),
            onHoverValue: V(d)
        }, ea({
            _: 2
        }, [g.$slots["year-overlay-value"] ? {
            name: "item",
            fn: ye( ({item: f}) => [ne(g.$slots, "year-overlay-value", {
                text: f.text,
                value: f.value
            })]),
            key: "0"
        } : void 0]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))]))
    }
})
  , eP = {
    key: 0,
    class: "dp__time_input"
}
  , tP = ["aria-label", "onKeydown", "onClick"]
  , aP = P("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_l"
}, null, -1)
  , nP = P("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_r"
}, null, -1)
  , rP = ["aria-label", "disabled", "onKeydown", "onClick"]
  , oP = ["aria-label", "onKeydown", "onClick"]
  , iP = P("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_l"
}, null, -1)
  , sP = P("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_r"
}, null, -1)
  , lP = {
    key: 0
}
  , cP = ["aria-label", "onKeydown"]
  , uP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "TimeInput",
    props: {
        hours: {
            type: Number,
            default: 0
        },
        minutes: {
            type: Number,
            default: 0
        },
        seconds: {
            type: Number,
            default: 0
        },
        closeTimePickerBtn: {
            type: Object,
            default: null
        },
        order: {
            type: Number,
            default: 0
        },
        disabledTimesConfig: {
            type: Function,
            default: null
        },
        validateTime: {
            type: Function,
            default: () => !1
        },
        ...Da
    },
    emits: ["set-hours", "set-minutes", "update:hours", "update:minutes", "update:seconds", "reset-flow", "mounted", "overlay-closed", "am-pm-change"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {setTimePickerElements: o, setTimePickerBackRef: i} = _n()
          , {defaultedAriaLabels: s, defaultedTransitions: l, defaultedFilters: d, defaultedConfig: p} = At(r)
          , {transitionName: g, showTransition: h} = ho(l)
          , f = Ka({
            hours: !1,
            minutes: !1,
            seconds: !1
        })
          , _ = T("AM")
          , A = T(null)
          , E = T([]);
        xe( () => {
            e("mounted")
        }
        );
        const w = C => bt(new Date, {
            hours: C.hours,
            minutes: C.minutes,
            seconds: r.enableSeconds ? C.seconds : 0,
            milliseconds: 0
        })
          , k = u( () => C => F(C, r[C]) || I(C, r[C]))
          , O = u( () => ({
            hours: r.hours,
            minutes: r.minutes,
            seconds: r.seconds
        }))
          , I = (C, me) => r.range && !r.disableTimeRangeValidation ? !r.validateTime(C, me) : !1
          , R = (C, me) => {
            if (r.range && !r.disableTimeRangeValidation) {
                const ke = me ? +r[`${C}Increment`] : -+r[`${C}Increment`]
                  , ue = r[C] + ke;
                return !r.validateTime(C, ue)
            }
            return !1
        }
          , Y = u( () => C => !N(+r[C] + +r[`${C}Increment`], C) || R(C, !0))
          , G = u( () => C => !N(+r[C] - +r[`${C}Increment`], C) || R(C, !1))
          , X = (C, me) => nd(bt(se(), C), me)
          , q = (C, me) => PT(bt(se(), C), me)
          , D = u( () => ({
            dp__time_col: !0,
            dp__time_col_block: !r.timePickerInline,
            dp__time_col_reg_block: !r.enableSeconds && r.is24 && !r.timePickerInline,
            dp__time_col_reg_inline: !r.enableSeconds && r.is24 && r.timePickerInline,
            dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
            dp__time_col_sec: r.enableSeconds && r.is24,
            dp__time_col_sec_with_button: r.enableSeconds && !r.is24
        }))
          , j = u( () => {
            const C = [{
                type: "hours"
            }, {
                type: "",
                separator: !0
            }, {
                type: "minutes"
            }];
            return r.enableSeconds ? C.concat([{
                type: "",
                separator: !0
            }, {
                type: "seconds"
            }]) : C
        }
        )
          , z = u( () => j.value.filter(C => !C.separator))
          , ee = u( () => C => {
            if (C === "hours") {
                const me = L(+r.hours);
                return {
                    text: me < 10 ? `0${me}` : `${me}`,
                    value: me
                }
            }
            return {
                text: r[C] < 10 ? `0${r[C]}` : `${r[C]}`,
                value: r[C]
            }
        }
        )
          , F = (C, me) => {
            var ke;
            if (!r.disabledTimesConfig)
                return !1;
            const ue = r.disabledTimesConfig(r.order, C === "hours" ? me : void 0);
            return ue[C] ? !!((ke = ue[C]) != null && ke.includes(me)) : !0
        }
          , S = C => {
            const me = r.is24 ? 24 : 12
              , ke = C === "hours" ? me : 60
              , ue = +r[`${C}GridIncrement`]
              , Se = C === "hours" && !r.is24 ? ue : 0
              , ve = [];
            for (let Q = Se; Q < ke; Q += ue)
                ve.push({
                    value: Q,
                    text: Q < 10 ? `0${Q}` : `${Q}`
                });
            return C === "hours" && !r.is24 && ve.push({
                value: 0,
                text: "12"
            }),
            vr(ve, Q => ({
                active: !1,
                disabled: d.value.times[C].includes(Q.value) || !N(Q.value, C) || F(C, Q.value) || I(C, Q.value)
            }))
        }
          , N = (C, me) => {
            const ke = r.minTime ? w(Li(r.minTime)) : null
              , ue = r.maxTime ? w(Li(r.maxTime)) : null
              , Se = w(Li(O.value, me, C));
            return ke && ue ? (lo(Se, ue) || tr(Se, ue)) && (so(Se, ke) || tr(Se, ke)) : ke ? so(Se, ke) || tr(Se, ke) : ue ? lo(Se, ue) || tr(Se, ue) : !0
        }
          , M = C => r[`no${C[0].toUpperCase() + C.slice(1)}Overlay`]
          , W = C => {
            M(C) || (f[C] = !f[C],
            f[C] || e("overlay-closed"))
        }
          , b = C => C === "hours" ? Ca : C === "minutes" ? Na : gr
          , v = (C, me=!0) => {
            const ke = me ? X : q
              , ue = me ? +r[`${C}Increment`] : -+r[`${C}Increment`];
            N(+r[C] + ue, C) && e(`update:${C}`, b(C)(ke({
                [C]: +r[C]
            }, {
                [C]: +r[`${C}Increment`]
            })))
        }
          , L = C => r.is24 ? C : (C >= 12 ? _.value = "PM" : _.value = "AM",
        aI(C))
          , B = () => {
            _.value === "PM" ? (_.value = "AM",
            e("update:hours", r.hours - 12)) : (_.value = "PM",
            e("update:hours", r.hours + 12)),
            e("am-pm-change", _.value)
        }
          , K = C => {
            f[C] = !0
        }
          , Z = (C, me, ke) => {
            if (C && r.arrowNavigation) {
                Array.isArray(E.value[me]) ? E.value[me][ke] = C : E.value[me] = [C];
                const ue = E.value.reduce( (Se, ve) => ve.map( (Q, ie) => [...Se[ie] || [], ve[ie]]), []);
                i(r.closeTimePickerBtn),
                A.value && (ue[1] = ue[1].concat(A.value)),
                o(ue, r.order)
            }
        }
          , H = (C, me) => (W(C),
        C === "hours" && !r.is24 ? e(`update:${C}`, _.value === "PM" ? me + 12 : me) : e(`update:${C}`, me));
        return n({
            openChildCmp: K
        }),
        (C, me) => {
            var ke;
            return C.disabled ? x("", !0) : (m(),
            y("div", eP, [(m(!0),
            y(pe, null, Me(j.value, (ue, Se) => {
                var ve, Q, ie;
                return m(),
                y("div", {
                    key: Se,
                    class: J(D.value)
                }, [ue.separator ? (m(),
                y(pe, {
                    key: 0
                }, [$e(" : ")], 64)) : (m(),
                y(pe, {
                    key: 1
                }, [P("button", {
                    ref_for: !0,
                    ref: Ee => Z(Ee, Se, 0),
                    type: "button",
                    class: J({
                        dp__btn: !0,
                        dp__inc_dec_button: !C.timePickerInline,
                        dp__inc_dec_button_inline: C.timePickerInline,
                        dp__tp_inline_btn_top: C.timePickerInline,
                        dp__inc_dec_button_disabled: Y.value(ue.type)
                    }),
                    "aria-label": (ve = V(s)) == null ? void 0 : ve.incrementValue(ue.type),
                    tabindex: "0",
                    onKeydown: [Ue(Re(Ee => v(ue.type), ["prevent"]), ["enter"]), Ue(Re(Ee => v(ue.type), ["prevent"]), ["space"])],
                    onClick: Ee => v(ue.type)
                }, [r.timePickerInline ? (m(),
                y(pe, {
                    key: 1
                }, [aP, nP], 64)) : (m(),
                y(pe, {
                    key: 0
                }, [C.$slots["arrow-up"] ? ne(C.$slots, "arrow-up", {
                    key: 0
                }) : x("", !0), C.$slots["arrow-up"] ? x("", !0) : (m(),
                $(V(Qs), {
                    key: 1
                }))], 64))], 42, tP), P("button", {
                    ref_for: !0,
                    ref: Ee => Z(Ee, Se, 1),
                    type: "button",
                    "aria-label": (Q = V(s)) == null ? void 0 : Q.openTpOverlay(ue.type),
                    class: J({
                        dp__time_display: !0,
                        dp__time_display_block: !C.timePickerInline,
                        dp__time_display_inline: C.timePickerInline,
                        "dp--time-invalid": k.value(ue.type),
                        "dp--time-overlay-btn": !k.value(ue.type)
                    }),
                    disabled: M(ue.type),
                    tabindex: "0",
                    onKeydown: [Ue(Re(Ee => W(ue.type), ["prevent"]), ["enter"]), Ue(Re(Ee => W(ue.type), ["prevent"]), ["space"])],
                    onClick: Ee => W(ue.type)
                }, [C.$slots[ue.type] ? ne(C.$slots, ue.type, {
                    key: 0,
                    text: ee.value(ue.type).text,
                    value: ee.value(ue.type).value
                }) : x("", !0), C.$slots[ue.type] ? x("", !0) : (m(),
                y(pe, {
                    key: 1
                }, [$e(te(ee.value(ue.type).text), 1)], 64))], 42, rP), P("button", {
                    ref_for: !0,
                    ref: Ee => Z(Ee, Se, 2),
                    type: "button",
                    class: J({
                        dp__btn: !0,
                        dp__inc_dec_button: !C.timePickerInline,
                        dp__inc_dec_button_inline: C.timePickerInline,
                        dp__tp_inline_btn_bottom: C.timePickerInline,
                        dp__inc_dec_button_disabled: G.value(ue.type)
                    }),
                    "aria-label": (ie = V(s)) == null ? void 0 : ie.decrementValue(ue.type),
                    tabindex: "0",
                    onKeydown: [Ue(Re(Ee => v(ue.type, !1), ["prevent"]), ["enter"]), Ue(Re(Ee => v(ue.type, !1), ["prevent"]), ["space"])],
                    onClick: Ee => v(ue.type, !1)
                }, [r.timePickerInline ? (m(),
                y(pe, {
                    key: 1
                }, [iP, sP], 64)) : (m(),
                y(pe, {
                    key: 0
                }, [C.$slots["arrow-down"] ? ne(C.$slots, "arrow-down", {
                    key: 0
                }) : x("", !0), C.$slots["arrow-down"] ? x("", !0) : (m(),
                $(V(Xs), {
                    key: 1
                }))], 64))], 42, oP)], 64))], 2)
            }
            ), 128)), C.is24 ? x("", !0) : (m(),
            y("div", lP, [C.$slots["am-pm-button"] ? ne(C.$slots, "am-pm-button", {
                key: 0,
                toggle: B,
                value: _.value
            }) : x("", !0), C.$slots["am-pm-button"] ? x("", !0) : (m(),
            y("button", {
                key: 1,
                ref_key: "amPmButton",
                ref: A,
                type: "button",
                class: "dp__pm_am_button",
                role: "button",
                "aria-label": (ke = V(s)) == null ? void 0 : ke.amPmButton,
                tabindex: "0",
                onClick: B,
                onKeydown: [Ue(Re(B, ["prevent"]), ["enter"]), Ue(Re(B, ["prevent"]), ["space"])]
            }, te(_.value), 41, cP))])), (m(!0),
            y(pe, null, Me(z.value, (ue, Se) => (m(),
            $(ra, {
                key: Se,
                name: V(g)(f[ue.type]),
                css: V(h)
            }, {
                default: ye( () => [f[ue.type] ? (m(),
                $(yo, {
                    key: 0,
                    items: S(ue.type),
                    "is-last": C.autoApply && !V(p).keepActionRow,
                    "esc-close": C.escClose,
                    type: ue.type,
                    "text-input": C.textInput,
                    config: C.config,
                    "arrow-navigation": C.arrowNavigation,
                    onSelected: ve => H(ue.type, ve),
                    onToggle: ve => W(ue.type),
                    onResetFlow: me[0] || (me[0] = ve => C.$emit("reset-flow"))
                }, ea({
                    "button-icon": ye( () => [C.$slots["clock-icon"] ? ne(C.$slots, "clock-icon", {
                        key: 0
                    }) : x("", !0), C.$slots["clock-icon"] ? x("", !0) : (m(),
                    $(mn(C.timePickerInline ? V(br) : V(Ks)), {
                        key: 1
                    }))]),
                    _: 2
                }, [C.$slots[`${ue.type}-overlay-value`] ? {
                    name: "item",
                    fn: ye( ({item: ve}) => [ne(C.$slots, `${ue.type}-overlay-value`, {
                        text: ve.text,
                        value: ve.value
                    })]),
                    key: "0"
                } : void 0]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : x("", !0)]),
                _: 2
            }, 1032, ["name", "css"]))), 128))]))
        }
    }
})
  , dP = {
    class: "dp--tp-wrap"
}
  , mP = ["aria-label", "tabindex"]
  , gP = ["tabindex"]
  , pP = ["aria-label"]
  , Gd = re({
    compatConfig: {
        MODE: 3
    },
    __name: "TimePicker",
    props: {
        hours: {
            type: [Number, Array],
            default: 0
        },
        minutes: {
            type: [Number, Array],
            default: 0
        },
        seconds: {
            type: [Number, Array],
            default: 0
        },
        disabledTimesConfig: {
            type: Function,
            default: null
        },
        validateTime: {
            type: Function,
            default: () => !1
        },
        ...Da
    },
    emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow", "overlay-opened", "overlay-closed", "am-pm-change"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {buildMatrix: o, setTimePicker: i} = _n()
          , s = Vn()
          , {defaultedTransitions: l, defaultedAriaLabels: d, defaultedTextInput: p, defaultedConfig: g} = At(r)
          , {transitionName: h, showTransition: f} = ho(l)
          , {hideNavigationButtons: _} = ii()
          , A = T(null)
          , E = T(null)
          , w = T([])
          , k = T(null);
        xe( () => {
            e("mount"),
            !r.timePicker && r.arrowNavigation ? o([Rt(A.value)], "time") : i(!0, r.timePicker)
        }
        );
        const O = u( () => r.range && r.modelAuto ? Ad(r.internalModelValue) : !0)
          , I = T(!1)
          , R = S => ({
            hours: Array.isArray(r.hours) ? r.hours[S] : r.hours,
            minutes: Array.isArray(r.minutes) ? r.minutes[S] : r.minutes,
            seconds: Array.isArray(r.seconds) ? r.seconds[S] : r.seconds
        })
          , Y = u( () => {
            const S = [];
            if (r.range)
                for (let N = 0; N < 2; N++)
                    S.push(R(N));
            else
                S.push(R(0));
            return S
        }
        )
          , G = (S, N=!1, M="") => {
            N || e("reset-flow"),
            I.value = S,
            e(S ? "overlay-opened" : "overlay-closed"),
            r.arrowNavigation && i(S),
            Ot( () => {
                M !== "" && w.value[0] && w.value[0].openChildCmp(M)
            }
            )
        }
          , X = u( () => ({
            dp__btn: !0,
            dp__button: !0,
            dp__button_bottom: r.autoApply && !g.value.keepActionRow
        }))
          , q = oa(s, "timePicker")
          , D = (S, N, M) => r.range ? N === 0 ? [S, Y.value[1][M]] : [Y.value[0][M], S] : S
          , j = S => {
            e("update:hours", S)
        }
          , z = S => {
            e("update:minutes", S)
        }
          , ee = S => {
            e("update:seconds", S)
        }
          , F = () => {
            if (k.value && !p.value.enabled && !r.noOverlayFocus) {
                const S = rI(k.value);
                S && S.focus({
                    preventScroll: !0
                })
            }
        }
        ;
        return n({
            toggleTimePicker: G
        }),
        (S, N) => {
            var M;
            return m(),
            y("div", dP, [!S.timePicker && !S.timePickerInline ? le((m(),
            y("button", {
                key: 0,
                ref_key: "openTimePickerBtn",
                ref: A,
                type: "button",
                class: J(X.value),
                "aria-label": (M = V(d)) == null ? void 0 : M.openTimePicker,
                tabindex: S.noOverlayFocus ? void 0 : 0,
                onKeydown: [N[0] || (N[0] = Ue(W => G(!0), ["enter"])), N[1] || (N[1] = Ue(W => G(!0), ["space"]))],
                onClick: N[2] || (N[2] = W => G(!0))
            }, [S.$slots["clock-icon"] ? ne(S.$slots, "clock-icon", {
                key: 0
            }) : x("", !0), S.$slots["clock-icon"] ? x("", !0) : (m(),
            $(V(Ks), {
                key: 1
            }))], 42, mP)), [[ma, !V(_)(S.hideNavigation, "time")]]) : x("", !0), Le(ra, {
                name: V(h)(I.value),
                css: V(f) && !S.timePickerInline
            }, {
                default: ye( () => {
                    var W;
                    return [I.value || S.timePicker || S.timePickerInline ? (m(),
                    y("div", {
                        key: 0,
                        ref_key: "overlayRef",
                        ref: k,
                        class: J({
                            dp__overlay: !S.timePickerInline,
                            "dp--overlay-absolute": !r.timePicker && !S.timePickerInline,
                            "dp--overlay-relative": r.timePicker
                        }),
                        style: ze(S.timePicker ? {
                            height: `${V(g).modeHeight}px`
                        } : void 0),
                        tabindex: S.timePickerInline ? void 0 : 0
                    }, [P("div", {
                        class: J(S.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
                        style: {
                            display: "flex"
                        }
                    }, [S.$slots["time-picker-overlay"] ? ne(S.$slots, "time-picker-overlay", {
                        key: 0,
                        hours: t.hours,
                        minutes: t.minutes,
                        seconds: t.seconds,
                        setHours: j,
                        setMinutes: z,
                        setSeconds: ee
                    }) : x("", !0), S.$slots["time-picker-overlay"] ? x("", !0) : (m(),
                    y("div", {
                        key: 1,
                        class: J(S.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                    }, [(m(!0),
                    y(pe, null, Me(Y.value, (b, v) => le((m(),
                    $(uP, et({
                        key: v
                    }, {
                        ...S.$props,
                        order: v,
                        hours: b.hours,
                        minutes: b.minutes,
                        seconds: b.seconds,
                        closeTimePickerBtn: E.value,
                        disabledTimesConfig: t.disabledTimesConfig,
                        disabled: v === 0 ? S.fixedStart : S.fixedEnd
                    }, {
                        ref_for: !0,
                        ref_key: "timeInputRefs",
                        ref: w,
                        "validate-time": (L, B) => t.validateTime(L, D(B, v, L)),
                        "onUpdate:hours": L => j(D(L, v, "hours")),
                        "onUpdate:minutes": L => z(D(L, v, "minutes")),
                        "onUpdate:seconds": L => ee(D(L, v, "seconds")),
                        onMounted: F,
                        onOverlayClosed: F,
                        onAmPmChange: N[3] || (N[3] = L => S.$emit("am-pm-change", L))
                    }), ea({
                        _: 2
                    }, [Me(V(q), (L, B) => ({
                        name: L,
                        fn: ye(K => [ne(S.$slots, L, dt(qt(K)))])
                    }))]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [[ma, v === 0 ? !0 : O.value]])), 128))], 2)), !S.timePicker && !S.timePickerInline ? le((m(),
                    y("button", {
                        key: 2,
                        ref_key: "closeTimePickerBtn",
                        ref: E,
                        type: "button",
                        class: J(X.value),
                        "aria-label": (W = V(d)) == null ? void 0 : W.closeTimePicker,
                        tabindex: "0",
                        onKeydown: [N[4] || (N[4] = Ue(b => G(!1), ["enter"])), N[5] || (N[5] = Ue(b => G(!1), ["space"]))],
                        onClick: N[6] || (N[6] = b => G(!1))
                    }, [S.$slots["calendar-icon"] ? ne(S.$slots, "calendar-icon", {
                        key: 0
                    }) : x("", !0), S.$slots["calendar-icon"] ? x("", !0) : (m(),
                    $(V(br), {
                        key: 1
                    }))], 42, pP)), [[ma, !V(_)(S.hideNavigation, "time")]]) : x("", !0)], 2)], 14, gP)) : x("", !0)]
                }
                ),
                _: 3
            }, 8, ["name", "css"])])
        }
    }
})
  , Yd = (t, n, a, e) => {
    const r = (w, k) => Array.isArray(n[w]) ? n[w][k] : n[w]
      , o = w => t.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[w] : n.seconds : 0
      , i = (w, k) => w ? k !== void 0 ? dn(w, r("hours", k), r("minutes", k), o(k)) : dn(w, n.hours, n.minutes, o()) : $s(se(), o(k))
      , s = (w, k) => {
        n[w] = k
    }
      , l = (w, k) => {
        const O = Object.fromEntries(Object.keys(n).map(I => I === w ? [I, k] : [I, n[I]].slice()));
        if (t.range && !t.disableTimeRangeValidation) {
            const I = Y => a.value ? dn(a.value[Y], O.hours[Y], O.minutes[Y], O.seconds[Y]) : null
              , R = Y => qs(a.value[Y], 0);
            return !(it(I(0), I(1)) && (so(I(0), R(1)) || lo(I(1), R(0))))
        }
        return !0
    }
      , d = (w, k) => {
        l(w, k) && (s(w, k),
        e && e())
    }
      , p = w => {
        d("hours", w)
    }
      , g = w => {
        d("minutes", w)
    }
      , h = w => {
        d("seconds", w)
    }
      , f = (w, k, O, I) => {
        k && p(w),
        !k && !O && g(w),
        O && h(w),
        a.value && I(a.value)
    }
      , _ = w => {
        if (w) {
            const k = Array.isArray(w)
              , O = k ? [+w[0].hours, +w[1].hours] : +w.hours
              , I = k ? [+w[0].minutes, +w[1].minutes] : +w.minutes
              , R = k ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
            s("hours", O),
            s("minutes", I),
            t.enableSeconds && s("seconds", R)
        }
    }
      , A = (w, k) => {
        const O = {
            hours: Array.isArray(n.hours) ? n.hours[w] : n.hours,
            disabledArr: []
        };
        return (k || k === 0) && (O.hours = k),
        Array.isArray(t.disabledTimes) && (O.disabledArr = t.range && Array.isArray(t.disabledTimes[w]) ? t.disabledTimes[w] : t.disabledTimes),
        O
    }
      , E = u( () => (w, k) => {
        var O;
        if (Array.isArray(t.disabledTimes)) {
            const {disabledArr: I, hours: R} = A(w, k)
              , Y = I.filter(G => +G.hours === R);
            return ((O = Y[0]) == null ? void 0 : O.minutes) === "*" ? {
                hours: [R],
                minutes: void 0,
                seconds: void 0
            } : {
                hours: [],
                minutes: Y?.map(G => +G.minutes) ?? [],
                seconds: Y?.map(G => G.seconds ? +G.seconds : void 0) ?? []
            }
        }
        return {
            hours: [],
            minutes: [],
            seconds: []
        }
    }
    );
    return {
        setTime: s,
        updateHours: p,
        updateMinutes: g,
        updateSeconds: h,
        getSetDateTime: i,
        updateTimeValues: f,
        getSecondsValue: o,
        assignStartTime: _,
        validateTime: l,
        disabledTimesConfig: E
    }
}
  , vP = (t, n) => {
    const {modelValue: a, time: e} = fo(t, n)
      , {defaultedStartTime: r} = At(t)
      , {updateTimeValues: o, getSetDateTime: i, setTime: s, assignStartTime: l, disabledTimesConfig: d, validateTime: p} = Yd(t, e, a)
      , g = k => {
        const {hours: O, minutes: I, seconds: R} = k;
        return {
            hours: +O,
            minutes: +I,
            seconds: R ? +R : 0
        }
    }
      , h = () => {
        if (t.startTime) {
            if (Array.isArray(t.startTime)) {
                const O = g(t.startTime[0])
                  , I = g(t.startTime[1]);
                return [bt(se(), O), bt(se(), I)]
            }
            const k = g(t.startTime);
            return bt(se(), k)
        }
        return t.range ? [null, null] : null
    }
      , f = () => {
        if (t.range) {
            const [k,O] = h();
            a.value = [i(k, 0), i(O, 1)]
        } else
            a.value = i(h())
    }
      , _ = k => Array.isArray(k) ? [Mn(se(k[0])), Mn(se(k[1]))] : [Mn(k ?? se())]
      , A = (k, O, I) => {
        s("hours", k),
        s("minutes", O),
        s("seconds", t.enableSeconds ? I : 0)
    }
      , E = () => {
        const [k,O] = _(a.value);
        return t.range ? A([k.hours, O.hours], [k.minutes, O.minutes], [k.seconds, O.minutes]) : A(k.hours, k.minutes, k.seconds)
    }
    ;
    xe( () => {
        if (!t.shadow)
            return l(r.value),
            a.value ? E() : f()
    }
    );
    const w = () => {
        Array.isArray(a.value) ? a.value = a.value.map( (k, O) => k && i(k, O)) : a.value = i(a.value),
        n("time-update")
    }
    ;
    return {
        modelValue: a,
        time: e,
        disabledTimesConfig: d,
        updateTime: (k, O=!0, I=!1) => {
            o(k, O, I, w)
        }
        ,
        validateTime: p
    }
}
  , hP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "TimePickerSolo",
    props: {
        ...Da
    },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = Vn()
          , i = oa(o, "timePicker")
          , {time: s, modelValue: l, disabledTimesConfig: d, updateTime: p, validateTime: g} = vP(r, e);
        return n({
            getSidebarProps: () => ({
                modelValue: l,
                time: s,
                updateTime: p
            })
        }),
        (h, f) => (m(),
        $(li, {
            "multi-calendars": 0,
            stretch: ""
        }, {
            default: ye( () => [Le(Gd, et(h.$props, {
                hours: V(s).hours,
                minutes: V(s).minutes,
                seconds: V(s).seconds,
                "internal-model-value": h.internalModelValue,
                "disabled-times-config": V(d),
                "validate-time": V(g),
                "onUpdate:hours": f[0] || (f[0] = _ => V(p)(_)),
                "onUpdate:minutes": f[1] || (f[1] = _ => V(p)(_, !1)),
                "onUpdate:seconds": f[2] || (f[2] = _ => V(p)(_, !1, !0)),
                onAmPmChange: f[3] || (f[3] = _ => h.$emit("am-pm-change", _))
            }), ea({
                _: 2
            }, [Me(V(i), (_, A) => ({
                name: _,
                fn: ye(E => [ne(h.$slots, _, dt(qt(E)))])
            }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])]),
            _: 3
        }))
    }
})
  , fP = {
    class: "dp__month_year_row"
}
  , yP = ["aria-label", "onClick", "onKeydown"]
  , bP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DpHeader",
    props: {
        month: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        instance: {
            type: Number,
            default: 0
        },
        years: {
            type: Array,
            default: () => []
        },
        months: {
            type: Array,
            default: () => []
        },
        ...Da
    },
    emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {defaultedTransitions: o, defaultedAriaLabels: i, defaultedMultiCalendars: s, defaultedFilters: l, defaultedConfig: d, defaultedHighlight: p} = At(r)
          , {transitionName: g, showTransition: h} = ho(o)
          , {buildMatrix: f} = _n()
          , {handleMonthYearChange: _, isDisabled: A, updateMonthYear: E} = DI(r, e)
          , {showLeftIcon: w, showRightIcon: k} = ii()
          , O = T(!1)
          , I = T(!1)
          , R = T([null, null, null, null]);
        xe( () => {
            e("mount")
        }
        );
        const Y = v => ({
            get: () => r[v],
            set: L => {
                const B = v === ya.month ? ya.year : ya.month;
                e("update-month-year", {
                    [v]: L,
                    [B]: r[B]
                }),
                v === ya.month ? F(!0) : S(!0)
            }
        })
          , G = u(Y(ya.month))
          , X = u(Y(ya.year))
          , q = u( () => v => ({
            month: r.month,
            year: r.year,
            items: v === ya.month ? r.months : r.years,
            instance: r.instance,
            updateMonthYear: E,
            toggle: v === ya.month ? F : S
        }))
          , D = u( () => r.months.find(L => L.value === r.month) || {
            text: "",
            value: 0
        })
          , j = u( () => vr(r.months, v => {
            const L = r.month === v.value
              , B = co(v.value, Md(r.year, r.minDate), Od(r.year, r.maxDate)) || l.value.months.includes(v.value)
              , K = Hd(p.value, v.value, r.year);
            return {
                active: L,
                disabled: B,
                highlighted: K
            }
        }
        ))
          , z = u( () => vr(r.years, v => {
            const L = r.year === v.value
              , B = co(v.value, hr(r.minDate), hr(r.maxDate)) || l.value.years.includes(v.value)
              , K = nl(p.value, v.value);
            return {
                active: L,
                disabled: B,
                highlighted: K
            }
        }
        ))
          , ee = (v, L) => {
            L !== void 0 ? v.value = L : v.value = !v.value,
            v.value || e("overlay-closed")
        }
          , F = (v=!1, L) => {
            N(v),
            ee(O, L)
        }
          , S = (v=!1, L) => {
            N(v),
            ee(I, L)
        }
          , N = v => {
            v || e("reset-flow")
        }
          , M = (v, L) => {
            r.arrowNavigation && (R.value[L] = Rt(v),
            f(R.value, "monthYear"))
        }
          , W = u( () => {
            var v, L;
            return [{
                type: ya.month,
                index: 1,
                toggle: F,
                modelValue: G.value,
                updateModelValue: B => G.value = B,
                text: D.value.text,
                showSelectionGrid: O.value,
                items: j.value,
                ariaLabel: (v = i.value) == null ? void 0 : v.openMonthsOverlay
            }, {
                type: ya.year,
                index: 2,
                toggle: S,
                modelValue: X.value,
                updateModelValue: B => X.value = B,
                text: r.year,
                showSelectionGrid: I.value,
                items: z.value,
                ariaLabel: (L = i.value) == null ? void 0 : L.openYearsOverlay
            }]
        }
        )
          , b = u( () => r.disableYearSelect ? [W.value[0]] : r.yearFirst ? [...W.value].reverse() : W.value);
        return n({
            toggleMonthPicker: F,
            toggleYearPicker: S,
            handleMonthYearChange: _
        }),
        (v, L) => {
            var B, K, Z;
            return m(),
            y("div", fP, [v.$slots["month-year"] ? ne(v.$slots, "month-year", dt(et({
                key: 0
            }, {
                month: t.month,
                year: t.year,
                months: t.months,
                years: t.years,
                updateMonthYear: V(E),
                handleMonthYearChange: V(_),
                instance: t.instance
            }))) : (m(),
            y(pe, {
                key: 1
            }, [V(w)(V(s), t.instance) && !v.vertical ? (m(),
            $(Vr, {
                key: 0,
                "aria-label": (B = V(i)) == null ? void 0 : B.prevMonth,
                disabled: V(A)(!1),
                onActivate: L[0] || (L[0] = H => V(_)(!1, !0)),
                onSetRef: L[1] || (L[1] = H => M(H, 0))
            }, {
                default: ye( () => [v.$slots["arrow-left"] ? ne(v.$slots, "arrow-left", {
                    key: 0
                }) : x("", !0), v.$slots["arrow-left"] ? x("", !0) : (m(),
                $(V(zs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), P("div", {
                class: J(["dp__month_year_wrap", {
                    dp__year_disable_select: v.disableYearSelect
                }])
            }, [(m(!0),
            y(pe, null, Me(b.value, (H, C) => (m(),
            y(pe, {
                key: H.type
            }, [P("button", {
                ref_for: !0,
                ref: me => M(me, C + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": H.ariaLabel,
                onClick: H.toggle,
                onKeydown: [Ue(Re(H.toggle, ["prevent"]), ["enter"]), Ue(Re(H.toggle, ["prevent"]), ["space"])]
            }, [v.$slots[H.type] ? ne(v.$slots, H.type, {
                key: 0,
                text: H.text,
                value: r[H.type]
            }) : x("", !0), v.$slots[H.type] ? x("", !0) : (m(),
            y(pe, {
                key: 1
            }, [$e(te(H.text), 1)], 64))], 40, yP), Le(ra, {
                name: V(g)(H.showSelectionGrid),
                css: V(h)
            }, {
                default: ye( () => [H.showSelectionGrid ? (m(),
                $(yo, {
                    key: 0,
                    items: H.items,
                    "arrow-navigation": v.arrowNavigation,
                    "hide-navigation": v.hideNavigation,
                    "is-last": v.autoApply && !V(d).keepActionRow,
                    "skip-button-ref": !1,
                    config: v.config,
                    type: H.type,
                    "header-refs": [],
                    "esc-close": v.escClose,
                    "text-input": v.textInput,
                    onSelected: H.updateModelValue,
                    onToggle: H.toggle
                }, ea({
                    "button-icon": ye( () => [v.$slots["calendar-icon"] ? ne(v.$slots, "calendar-icon", {
                        key: 0
                    }) : x("", !0), v.$slots["calendar-icon"] ? x("", !0) : (m(),
                    $(V(br), {
                        key: 1
                    }))]),
                    _: 2
                }, [v.$slots[`${H.type}-overlay-value`] ? {
                    name: "item",
                    fn: ye( ({item: me}) => [ne(v.$slots, `${H.type}-overlay-value`, {
                        text: me.text,
                        value: me.value
                    })]),
                    key: "0"
                } : void 0, v.$slots[`${H.type}-overlay`] ? {
                    name: "overlay",
                    fn: ye( () => [ne(v.$slots, `${H.type}-overlay`, dt(qt(q.value(H.type))))]),
                    key: "1"
                } : void 0, v.$slots[`${H.type}-overlay-header`] ? {
                    name: "header",
                    fn: ye( () => [ne(v.$slots, `${H.type}-overlay-header`, {
                        toggle: H.toggle
                    })]),
                    key: "2"
                } : void 0]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : x("", !0)]),
                _: 2
            }, 1032, ["name", "css"])], 64))), 128))], 2), V(w)(V(s), t.instance) && v.vertical ? (m(),
            $(Vr, {
                key: 1,
                "aria-label": (K = V(i)) == null ? void 0 : K.prevMonth,
                disabled: V(A)(!1),
                onActivate: L[2] || (L[2] = H => V(_)(!1, !0))
            }, {
                default: ye( () => [v.$slots["arrow-up"] ? ne(v.$slots, "arrow-up", {
                    key: 0
                }) : x("", !0), v.$slots["arrow-up"] ? x("", !0) : (m(),
                $(V(Qs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), V(k)(V(s), t.instance) ? (m(),
            $(Vr, {
                key: 2,
                ref: "rightIcon",
                disabled: V(A)(!0),
                "aria-label": (Z = V(i)) == null ? void 0 : Z.nextMonth,
                onActivate: L[3] || (L[3] = H => V(_)(!0, !0)),
                onSetRef: L[4] || (L[4] = H => M(H, v.disableYearSelect ? 2 : 3))
            }, {
                default: ye( () => [v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? ne(v.$slots, v.vertical ? "arrow-down" : "arrow-right", {
                    key: 0
                }) : x("", !0), v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? x("", !0) : (m(),
                $(mn(v.vertical ? V(Xs) : V(Zs)), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["disabled", "aria-label"])) : x("", !0)], 64))])
        }
    }
})
  , _P = ["aria-label"]
  , wP = {
    class: "dp__calendar_header",
    role: "row"
}
  , kP = {
    key: 0,
    class: "dp__calendar_header_item",
    role: "gridcell"
}
  , SP = P("div", {
    class: "dp__calendar_header_separator"
}, null, -1)
  , CP = ["aria-label"]
  , TP = {
    key: 0,
    role: "gridcell",
    class: "dp__calendar_item dp__week_num"
}
  , IP = {
    class: "dp__cell_inner"
}
  , PP = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"]
  , EP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DpCalendar",
    props: {
        mappedDates: {
            type: Array,
            default: () => []
        },
        instance: {
            type: Number,
            default: 0
        },
        month: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        ...Da
    },
    emits: ["select-date", "set-hover-date", "handle-scroll", "mount", "handle-swipe", "handle-space", "tooltip-open", "tooltip-close"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {buildMultiLevelMatrix: o} = _n()
          , {defaultedTransitions: i, defaultedConfig: s, defaultedAriaLabels: l, defaultedMultiCalendars: d, defaultedWeekNumbers: p} = At(r)
          , g = T(null)
          , h = T({
            bottom: "",
            left: "",
            transform: ""
        })
          , f = T([])
          , _ = T(null)
          , A = T(!0)
          , E = T("")
          , w = T({
            startX: 0,
            endX: 0,
            startY: 0,
            endY: 0
        })
          , k = T([])
          , O = T({
            left: "50%"
        })
          , I = u( () => r.calendar ? r.calendar(r.mappedDates) : r.mappedDates)
          , R = u( () => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : tI(r.formatLocale, r.locale, +r.weekStart));
        xe( () => {
            e("mount", {
                cmp: "calendar",
                refs: f
            }),
            s.value.noSwipe || _.value && (_.value.addEventListener("touchstart", S, {
                passive: !1
            }),
            _.value.addEventListener("touchend", N, {
                passive: !1
            }),
            _.value.addEventListener("touchmove", M, {
                passive: !1
            })),
            r.monthChangeOnScroll && _.value && _.value.addEventListener("wheel", v, {
                passive: !1
            })
        }
        );
        const Y = H => H ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous"
          , G = (H, C) => {
            if (r.transitions) {
                const me = zt(Za(se(), r.month, r.year));
                E.value = $t(zt(Za(se(), H, C)), me) ? i.value[Y(!0)] : i.value[Y(!1)],
                A.value = !1,
                Ot( () => {
                    A.value = !0
                }
                )
            }
        }
          , X = u( () => ({
            [r.calendarClassName]: !!r.calendarClassName
        }))
          , q = u( () => H => {
            const C = nI(H);
            return {
                dp__marker_dot: C.type === "dot",
                dp__marker_line: C.type === "line"
            }
        }
        )
          , D = u( () => H => it(H, g.value))
          , j = u( () => ({
            dp__calendar: !0,
            dp__calendar_next: d.value.count > 0 && r.instance !== 0
        }))
          , z = u( () => H => r.hideOffsetDates ? H.current : !0)
          , ee = async (H, C, me) => {
            var ke, ue;
            if (e("set-hover-date", H),
            (ue = (ke = H.marker) == null ? void 0 : ke.tooltip) != null && ue.length) {
                const Se = Rt(f.value[C][me]);
                if (Se) {
                    const {width: ve, height: Q} = Se.getBoundingClientRect();
                    g.value = H.value;
                    let ie = {
                        left: `${ve / 2}px`
                    }
                      , Ee = -50;
                    if (await Ot(),
                    k.value[0]) {
                        const {left: ge, width: Pe} = k.value[0].getBoundingClientRect();
                        ge < 0 && (ie = {
                            left: "0"
                        },
                        Ee = 0,
                        O.value.left = `${ve / 2}px`),
                        window.innerWidth < ge + Pe && (ie = {
                            right: "0"
                        },
                        Ee = 0,
                        O.value.left = `${Pe - ve / 2}px`)
                    }
                    h.value = {
                        bottom: `${Q}px`,
                        ...ie,
                        transform: `translateX(${Ee}%)`
                    },
                    e("tooltip-open", H.marker)
                }
            }
        }
          , F = H => {
            g.value && (g.value = null,
            h.value = JSON.parse(JSON.stringify({
                bottom: "",
                left: "",
                transform: ""
            })),
            e("tooltip-close", H.marker))
        }
          , S = H => {
            w.value.startX = H.changedTouches[0].screenX,
            w.value.startY = H.changedTouches[0].screenY
        }
          , N = H => {
            w.value.endX = H.changedTouches[0].screenX,
            w.value.endY = H.changedTouches[0].screenY,
            W()
        }
          , M = H => {
            r.vertical && !r.inline && H.preventDefault()
        }
          , W = () => {
            const H = r.vertical ? "Y" : "X";
            Math.abs(w.value[`start${H}`] - w.value[`end${H}`]) > 10 && e("handle-swipe", w.value[`start${H}`] > w.value[`end${H}`] ? "right" : "left")
        }
          , b = (H, C, me) => {
            H && (Array.isArray(f.value[C]) ? f.value[C][me] = H : f.value[C] = [H]),
            r.arrowNavigation && o(f.value, "calendar")
        }
          , v = H => {
            r.monthChangeOnScroll && (H.preventDefault(),
            e("handle-scroll", H))
        }
          , L = H => p.value.type === "local" ? mC(H.value, {
            weekStartsOn: +r.weekStart
        }) : p.value.type === "iso" ? lC(H.value) : typeof p.value.type == "function" ? p.value.type(H.value) : ""
          , B = H => {
            const C = H[0];
            return p.value.hideOnOffsetDates ? H.some(me => me.current) ? L(C) : "" : L(C)
        }
          , K = (H, C) => {
            un(H, s.value),
            e("select-date", C)
        }
          , Z = H => {
            un(H, s.value)
        }
        ;
        return n({
            triggerTransition: G
        }),
        (H, C) => {
            var me;
            return m(),
            y("div", {
                class: J(j.value)
            }, [P("div", {
                ref_key: "calendarWrapRef",
                ref: _,
                role: "grid",
                class: J(X.value),
                "aria-label": (me = V(l)) == null ? void 0 : me.calendarWrap
            }, [(m(),
            y(pe, {
                key: 0
            }, [P("div", wP, [H.weekNumbers ? (m(),
            y("div", kP, te(H.weekNumName), 1)) : x("", !0), (m(!0),
            y(pe, null, Me(R.value, (ke, ue) => (m(),
            y("div", {
                key: ue,
                class: "dp__calendar_header_item",
                role: "gridcell"
            }, [H.$slots["calendar-header"] ? ne(H.$slots, "calendar-header", {
                key: 0,
                day: ke,
                index: ue
            }) : x("", !0), H.$slots["calendar-header"] ? x("", !0) : (m(),
            y(pe, {
                key: 1
            }, [$e(te(ke), 1)], 64))]))), 128))]), SP, Le(ra, {
                name: E.value,
                css: !!H.transitions
            }, {
                default: ye( () => {
                    var ke;
                    return [A.value ? (m(),
                    y("div", {
                        key: 0,
                        class: "dp__calendar",
                        role: "rowgroup",
                        "aria-label": ((ke = V(l)) == null ? void 0 : ke.calendarDays) || void 0
                    }, [(m(!0),
                    y(pe, null, Me(I.value, (ue, Se) => (m(),
                    y("div", {
                        key: Se,
                        class: "dp__calendar_row",
                        role: "row"
                    }, [H.weekNumbers ? (m(),
                    y("div", TP, [P("div", IP, te(B(ue.days)), 1)])) : x("", !0), (m(!0),
                    y(pe, null, Me(ue.days, (ve, Q) => {
                        var ie, Ee, ge;
                        return m(),
                        y("div", {
                            id: ve.value.toISOString().split("T")[0],
                            ref_for: !0,
                            ref: Pe => b(Pe, Se, Q),
                            key: Q + Se,
                            role: "gridcell",
                            class: "dp__calendar_item",
                            "aria-selected": ve.classData.dp__active_date || ve.classData.dp__range_start || ve.classData.dp__range_start,
                            "aria-disabled": ve.classData.dp__cell_disabled || void 0,
                            "aria-label": (Ee = (ie = V(l)) == null ? void 0 : ie.day) == null ? void 0 : Ee.call(ie, ve),
                            tabindex: "0",
                            onClick: Re(Pe => K(Pe, ve), ["prevent"]),
                            onKeydown: [Ue(Pe => H.$emit("select-date", ve), ["enter"]), Ue(Pe => H.$emit("handle-space", ve), ["space"])],
                            onMouseenter: Pe => ee(ve, Se, Q),
                            onMouseleave: Pe => F(ve)
                        }, [P("div", {
                            class: J(["dp__cell_inner", ve.classData])
                        }, [H.$slots.day && z.value(ve) ? ne(H.$slots, "day", {
                            key: 0,
                            day: +ve.text,
                            date: ve.value
                        }) : x("", !0), H.$slots.day ? x("", !0) : (m(),
                        y(pe, {
                            key: 1
                        }, [$e(te(ve.text), 1)], 64)), ve.marker && z.value(ve) ? (m(),
                        y(pe, {
                            key: 2
                        }, [H.$slots.marker ? ne(H.$slots, "marker", {
                            key: 0,
                            marker: ve.marker,
                            day: +ve.text,
                            date: ve.value
                        }) : (m(),
                        y("div", {
                            key: 1,
                            class: J(q.value(ve.marker)),
                            style: ze(ve.marker.color ? {
                                backgroundColor: ve.marker.color
                            } : {})
                        }, null, 6))], 64)) : x("", !0), D.value(ve.value) ? (m(),
                        y("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: k,
                            class: "dp__marker_tooltip",
                            style: ze(h.value)
                        }, [(ge = ve.marker) != null && ge.tooltip ? (m(),
                        y("div", {
                            key: 0,
                            class: "dp__tooltip_content",
                            onClick: Z
                        }, [(m(!0),
                        y(pe, null, Me(ve.marker.tooltip, (Pe, ot) => (m(),
                        y("div", {
                            key: ot,
                            class: "dp__tooltip_text"
                        }, [H.$slots["marker-tooltip"] ? ne(H.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: Pe,
                            day: ve.value
                        }) : x("", !0), H.$slots["marker-tooltip"] ? x("", !0) : (m(),
                        y(pe, {
                            key: 1
                        }, [P("div", {
                            class: "dp__tooltip_mark",
                            style: ze(Pe.color ? {
                                backgroundColor: Pe.color
                            } : {})
                        }, null, 4), P("div", null, te(Pe.text), 1)], 64))]))), 128)), P("div", {
                            class: "dp__arrow_bottom_tp",
                            style: ze(O.value)
                        }, null, 4)])) : x("", !0)], 4)) : x("", !0)], 2)], 40, PP)
                    }
                    ), 128))]))), 128))], 8, CP)) : x("", !0)]
                }
                ),
                _: 3
            }, 8, ["name", "css"])], 64))], 10, _P)], 2)
        }
    }
})
  , Wc = t => Array.isArray(t)
  , DP = (t, n, a, e) => {
    const r = T([])
      , {modelValue: o, calendars: i, time: s} = fo(t, n)
      , {defaultedMultiCalendars: l, defaultedStartTime: d} = At(t)
      , {validateMonthYearInRange: p, isDisabled: g, isDateRangeAllowed: h, checkMinMaxRange: f} = Fn(t)
      , {updateTimeValues: _, getSetDateTime: A, setTime: E, assignStartTime: w, validateTime: k, disabledTimesConfig: O} = Yd(t, s, o, e)
      , I = u( () => U => i.value[U] ? i.value[U].month : 0)
      , R = u( () => U => i.value[U] ? i.value[U].year : 0)
      , Y = (U, ae, Ie) => {
        var He, fe;
        i.value[U] || (i.value[U] = {
            month: 0,
            year: 0
        }),
        i.value[U].month = Uc(ae) ? (He = i.value[U]) == null ? void 0 : He.month : ae,
        i.value[U].year = Uc(Ie) ? (fe = i.value[U]) == null ? void 0 : fe.year : Ie
    }
      , G = () => {
        t.autoApply && n("select-date")
    }
    ;
    je(o, (U, ae) => {
        JSON.stringify(U) !== JSON.stringify(ae) && D()
    }
    ),
    xe( () => {
        t.shadow || (o.value || (v(),
        d.value && w(d.value)),
        D(!0),
        t.focusStartDate && t.startDate && v())
    }
    );
    const X = u( () => {
        var U;
        return (U = t.flow) != null && U.length && !t.partialFlow ? t.flowStep === t.flow.length : !0
    }
    )
      , q = () => {
        t.autoApply && X.value && n("auto-apply", t.partialFlow)
    }
      , D = (U=!1) => {
        if (o.value)
            return Array.isArray(o.value) ? (r.value = o.value,
            N(U)) : z(o.value, U);
        if (l.value.count && U && !t.startDate)
            return j(se(), U)
    }
      , j = (U, ae=!1) => {
        if ((!l.value.count || !l.value.static || ae) && Y(0, Je(U), qe(U)),
        l.value.count && (!l.value.solo || !o.value))
            for (let Ie = 1; Ie < l.value.count; Ie++) {
                const He = bt(se(), {
                    month: I.value(Ie - 1),
                    year: R.value(Ie - 1)
                })
                  , fe = nd(He, {
                    months: 1
                });
                i.value[Ie] = {
                    month: Je(fe),
                    year: qe(fe)
                }
            }
    }
      , z = (U, ae) => {
        j(U),
        E("hours", Ca(U)),
        E("minutes", Na(U)),
        E("seconds", gr(U)),
        l.value.count && ae && b()
    }
      , ee = U => {
        if (l.value.count) {
            if (l.value.solo)
                return 0;
            const ae = Je(U[0])
              , Ie = Je(U[1]);
            return Math.abs(Ie - ae) < l.value.count ? 0 : 1
        }
        return 1
    }
      , F = (U, ae) => {
        U[1] && t.showLastInRange ? j(U[ee(U)], ae) : j(U[0], ae);
        const Ie = (He, fe) => [He(U[0]), U[1] ? He(U[1]) : s[fe][1]];
        E("hours", Ie(Ca, "hours")),
        E("minutes", Ie(Na, "minutes")),
        E("seconds", Ie(gr, "seconds"))
    }
      , S = (U, ae) => {
        if ((t.range || t.weekPicker) && !t.multiDates)
            return F(U, ae);
        if (t.multiDates && ae) {
            const Ie = U[U.length - 1];
            return z(Ie, ae)
        }
    }
      , N = U => {
        const ae = o.value;
        S(ae, U),
        l.value.count && l.value.solo && b()
    }
      , M = (U, ae) => {
        const Ie = bt(se(), {
            month: I.value(ae),
            year: R.value(ae)
        })
          , He = U < 0 ? Sa(Ie, 1) : pr(Ie, 1);
        p(Je(He), qe(He), U < 0, t.preventMinMaxNavigation) && (Y(ae, Je(He), qe(He)),
        n("update-month-year", {
            instance: ae,
            month: Je(He),
            year: qe(He)
        }),
        l.value.count && !l.value.solo && W(ae),
        a())
    }
      , W = U => {
        for (let ae = U - 1; ae >= 0; ae--) {
            const Ie = pr(bt(se(), {
                month: I.value(ae + 1),
                year: R.value(ae + 1)
            }), 1);
            Y(ae, Je(Ie), qe(Ie))
        }
        for (let ae = U + 1; ae <= l.value.count - 1; ae++) {
            const Ie = Sa(bt(se(), {
                month: I.value(ae - 1),
                year: R.value(ae - 1)
            }), 1);
            Y(ae, Je(Ie), qe(Ie))
        }
    }
      , b = () => {
        if (Array.isArray(o.value) && o.value.length === 2) {
            const U = se(se(o.value[1] ? o.value[1] : Sa(o.value[0], 1)))
              , [ae,Ie] = [Je(o.value[0]), qe(o.value[0])]
              , [He,fe] = [Je(o.value[1]), qe(o.value[1])];
            (ae !== He || ae === He && Ie !== fe) && l.value.solo && Y(1, Je(U), qe(U))
        } else
            o.value && !Array.isArray(o.value) && (Y(0, Je(o.value), qe(o.value)),
            j(se()))
    }
      , v = () => {
        t.startDate && (Y(0, Je(se(t.startDate)), qe(se(t.startDate))),
        l.value.count && W(0))
    }
      , L = lI( (U, ae) => {
        t.monthChangeOnScroll && M(t.monthChangeOnScroll !== "inverse" ? -U.deltaY : U.deltaY, ae)
    }
    , 50)
      , B = (U, ae, Ie=!1) => {
        t.monthChangeOnArrows && t.vertical === Ie && K(U, ae)
    }
      , K = (U, ae) => {
        M(U === "right" ? -1 : 1, ae)
    }
      , Z = U => t.markers.find(ae => it(dI(U.value), Ta(se(ae.date), t.timezone)))
      , H = (U, ae) => {
        switch (t.sixWeeks === !0 ? "append" : t.sixWeeks) {
        case "prepend":
            return [!0, !1];
        case "center":
            return [U == 0, !0];
        case "fair":
            return [U == 0 || ae > U, !0];
        case "append":
            return [!1, !1];
        default:
            return [!1, !1]
        }
    }
      , C = (U, ae, Ie, He) => {
        if (t.sixWeeks && U.length < 6) {
            const fe = 6 - U.length
              , vt = (ae.getDay() + 7 - He) % 7
              , kt = 6 - (Ie.getDay() + 7 - He) % 7
              , [de,Be] = H(vt, kt);
            for (let Ae = 1; Ae <= fe; Ae++)
                if (Be ? !!(Ae % 2) == de : de) {
                    const Bt = U[0].days[0]
                      , jt = me(za(Bt.value, -7), Je(ae));
                    U.unshift({
                        days: jt
                    })
                } else {
                    const Bt = U[U.length - 1]
                      , jt = Bt.days[Bt.days.length - 1]
                      , Ya = me(za(jt.value, 1), Je(ae));
                    U.push({
                        days: Ya
                    })
                }
        }
        return U
    }
      , me = (U, ae) => {
        const Ie = se(U)
          , He = [];
        for (let fe = 0; fe < 7; fe++) {
            const vt = za(Ie, fe)
              , kt = Je(vt) !== ae;
            He.push({
                text: t.hideOffsetDates && kt ? "" : vt.getDate(),
                value: vt,
                current: !kt,
                classData: {}
            })
        }
        return He
    }
      , ke = (U, ae) => {
        const Ie = []
          , He = new Date(ae,U)
          , fe = new Date(ae,U + 1,0)
          , vt = t.weekStart
          , kt = Nn(He, {
            weekStartsOn: vt
        })
          , de = Be => {
            const Ae = me(Be, U);
            if (Ie.push({
                days: Ae
            }),
            !Ie[Ie.length - 1].days.some(Bt => it(zt(Bt.value), zt(fe)))) {
                const Bt = za(Be, 7);
                de(Bt)
            }
        }
        ;
        return de(kt),
        C(Ie, He, fe, vt)
    }
      , ue = U => (o.value = Mo(se(U.value), t.timezone, t.weekStart),
    n("date-update", U.value),
    q())
      , Se = U => {
        const ae = dn(se(U.value), s.hours, s.minutes, xt());
        n("date-update", ae),
        t.multiDates ? rl(ae, o, t.multiDatesLimit) : o.value = ae,
        e(),
        Ot().then( () => {
            q()
        }
        )
    }
      , ve = U => t.noDisabledRange ? Bd(r.value[0], U).some(ae => g(ae)) : !1
      , Q = () => {
        r.value = o.value ? o.value.slice() : [],
        r.value.length === 2 && !(t.fixedStart || t.fixedEnd) && (r.value = [])
    }
      , ie = (U, ae) => {
        const Ie = [se(U.value), za(se(U.value), +t.autoRange)];
        h(Ie) ? (ae && Ee(U.value),
        r.value = Ie) : n("invalid-date", U.value)
    }
      , Ee = U => {
        const ae = Je(se(U))
          , Ie = qe(se(U));
        if (Y(0, ae, Ie),
        l.value.count > 0)
            for (let He = 1; He < l.value.count; He++) {
                const fe = mI(bt(se(U), {
                    year: I.value(He - 1),
                    month: R.value(He - 1)
                }));
                Y(He, fe.month, fe.year)
            }
    }
      , ge = U => Array.isArray(o.value) && o.value.length === 2 ? t.fixedStart && ($t(U, o.value[0]) || it(U, o.value[0])) ? [o.value[0], U] : t.fixedEnd && (Ft(U, o.value[1]) || it(U, o.value[1])) ? [U, o.value[1]] : (n("invalid-fixed-range", U),
    o.value) : []
      , Pe = U => {
        if (ve(U.value) || !f(U.value, o.value, t.fixedStart ? 0 : 1))
            return n("invalid-date", U.value);
        r.value = ge(se(U.value))
    }
      , ot = (U, ae) => {
        if (Q(),
        t.autoRange)
            return ie(U, ae);
        if (t.fixedStart || t.fixedEnd)
            return Pe(U);
        r.value[0] ? f(se(U.value), o.value) && !ve(U.value) ? Ft(se(U.value), se(r.value[0])) ? (r.value.unshift(se(U.value)),
        n("range-end", r.value[0])) : (r.value[1] = se(U.value),
        n("range-end", r.value[1])) : (t.autoApply && n("auto-apply-invalid", U.value),
        n("invalid-date", U.value)) : (r.value[0] = se(U.value),
        n("range-start", r.value[0]))
    }
      , xt = (U=!0) => t.enableSeconds ? Array.isArray(s.seconds) ? U ? s.seconds[0] : s.seconds[1] : s.seconds : 0
      , Mt = U => {
        r.value[U] = dn(r.value[U], s.hours[U], s.minutes[U], xt(U !== 1))
    }
      , ca = () => {
        var U, ae;
        r.value[0] && r.value[1] && +((U = r.value) == null ? void 0 : U[0]) > +((ae = r.value) == null ? void 0 : ae[1]) && (r.value.reverse(),
        n("range-start", r.value[0]),
        n("range-end", r.value[1]))
    }
      , Qt = () => {
        r.value.length && (r.value[0] && !r.value[1] ? Mt(0) : (Mt(0),
        Mt(1),
        e()),
        ca(),
        o.value = r.value.slice(),
        ci(r.value, n, t.autoApply, t.modelAuto))
    }
      , ua = (U, ae=!1) => {
        if (g(U.value) || !U.current && t.hideOffsetDates)
            return n("invalid-date", U.value);
        if (t.weekPicker)
            return ue(U);
        if (!t.range)
            return Se(U);
        Wc(s.hours) && Wc(s.minutes) && !t.multiDates && (ot(U, ae),
        Qt())
    }
      , gt = (U, ae) => {
        var Ie;
        Y(U, ae.month, ae.year),
        l.value.count && !l.value.solo && W(U),
        n("update-month-year", {
            instance: U,
            month: ae.month,
            year: ae.year
        }),
        a(l.value.solo ? U : void 0);
        const He = (Ie = t.flow) != null && Ie.length ? t.flow[t.flowStep] : void 0;
        !ae.fromNav && (He === Ma.month || He === Ma.year) && e()
    }
      , Te = (U, ae) => {
        Fd({
            value: U,
            modelValue: o,
            range: t.range,
            timezone: ae ? void 0 : t.timezone
        }),
        G(),
        t.multiCalendars && Ot().then( () => D(!0))
    }
      , We = () => {
        t.range ? o.value && Array.isArray(o.value) && o.value[0] ? o.value = Ft(se(), o.value[0]) ? [se(), o.value[0]] : [o.value[0], se()] : o.value = [se()] : o.value = se(),
        G()
    }
      , Qe = () => {
        if (Array.isArray(o.value))
            if (t.multiDates) {
                const U = pt();
                o.value[o.value.length - 1] = A(U)
            } else
                o.value = o.value.map( (U, ae) => U && A(U, ae));
        else
            o.value = A(o.value);
        n("time-update")
    }
      , pt = () => Array.isArray(o.value) && o.value.length ? o.value[o.value.length - 1] : null;
    return {
        calendars: i,
        modelValue: o,
        month: I,
        year: R,
        time: s,
        disabledTimesConfig: O,
        validateTime: k,
        getCalendarDays: ke,
        getMarker: Z,
        handleScroll: L,
        handleSwipe: K,
        handleArrow: B,
        selectDate: ua,
        updateMonthYear: gt,
        presetDate: Te,
        selectCurrentDate: We,
        updateTime: (U, ae=!0, Ie=!1) => {
            _(U, ae, Ie, Qe)
        }
    }
}
  , AP = {
    key: 0
}
  , MP = re({
    __name: "DatePicker",
    props: {
        ...Da
    },
    emits: ["tooltip-open", "tooltip-close", "mount", "update:internal-model-value", "update-flow-step", "reset-flow", "auto-apply", "focus-menu", "select-date", "range-start", "range-end", "invalid-fixed-range", "time-update", "am-pm-change", "time-picker-open", "time-picker-close", "recalculate-position", "update-month-year", "auto-apply-invalid", "date-update", "invalid-date"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {calendars: o, month: i, year: s, modelValue: l, time: d, disabledTimesConfig: p, validateTime: g, getCalendarDays: h, getMarker: f, handleArrow: _, handleScroll: A, handleSwipe: E, selectDate: w, updateMonthYear: k, presetDate: O, selectCurrentDate: I, updateTime: R} = DP(r, e, b, v)
          , Y = Vn()
          , {setHoverDate: G, getDayClassData: X, clearHoverDate: q} = xI(l, r)
          , {defaultedMultiCalendars: D} = At(r)
          , j = T([])
          , z = T([])
          , ee = T(null)
          , F = oa(Y, "calendar")
          , S = oa(Y, "monthYear")
          , N = oa(Y, "timePicker")
          , M = B => {
            r.shadow || e("mount", B)
        }
        ;
        je(o, () => {
            r.shadow || setTimeout( () => {
                e("recalculate-position")
            }
            , 0)
        }
        , {
            deep: !0
        });
        const W = u( () => B => h(i.value(B), s.value(B)).map(K => ({
            ...K,
            days: K.days.map(Z => (Z.marker = f(Z),
            Z.classData = X(Z),
            Z))
        })));
        function b(B) {
            var K;
            B || B === 0 ? (K = z.value[B]) == null || K.triggerTransition(i.value(B), s.value(B)) : z.value.forEach( (Z, H) => Z.triggerTransition(i.value(H), s.value(H)))
        }
        function v() {
            e("update-flow-step")
        }
        const L = (B, K=!1) => {
            w(B, K),
            r.spaceConfirm && e("select-date")
        }
        ;
        return n({
            clearHoverDate: q,
            presetDate: O,
            selectCurrentDate: I,
            toggleMonthPicker: (B, K, Z=0) => {
                var H;
                (H = j.value[Z]) == null || H.toggleMonthPicker(B, K)
            }
            ,
            toggleYearPicker: (B, K, Z=0) => {
                var H;
                (H = j.value[Z]) == null || H.toggleYearPicker(B, K)
            }
            ,
            toggleTimePicker: (B, K, Z) => {
                var H;
                (H = ee.value) == null || H.toggleTimePicker(B, K, Z)
            }
            ,
            handleArrow: _,
            updateMonthYear: k,
            getSidebarProps: () => ({
                modelValue: l,
                month: i,
                year: s,
                time: d,
                updateTime: R,
                updateMonthYear: k,
                selectDate: w,
                presetDate: O
            })
        }),
        (B, K) => (m(),
        y(pe, null, [Le(li, {
            "multi-calendars": V(D).count
        }, {
            default: ye( ({instance: Z, index: H}) => [B.disableMonthYearSelect ? x("", !0) : (m(),
            $(bP, et({
                key: 0,
                ref: C => {
                    C && (j.value[H] = C)
                }
                ,
                months: V(Dd)(B.formatLocale, B.locale, B.monthNameFormat),
                years: V(al)(B.yearRange, B.reverseYears),
                month: V(i)(Z),
                year: V(s)(Z),
                instance: Z
            }, B.$props, {
                onMount: K[0] || (K[0] = C => M(V(On).header)),
                onResetFlow: K[1] || (K[1] = C => B.$emit("reset-flow")),
                onUpdateMonthYear: C => V(k)(Z, C),
                onOverlayClosed: K[2] || (K[2] = C => B.$emit("focus-menu"))
            }), ea({
                _: 2
            }, [Me(V(S), (C, me) => ({
                name: C,
                fn: ye(ke => [ne(B.$slots, C, dt(qt(ke)))])
            }))]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])), Le(EP, et({
                ref: C => {
                    C && (z.value[H] = C)
                }
                ,
                "mapped-dates": W.value(Z),
                month: V(i)(Z),
                year: V(s)(Z),
                instance: Z
            }, B.$props, {
                onSelectDate: C => V(w)(C, Z !== 1),
                onHandleSpace: C => L(C, Z !== 1),
                onSetHoverDate: K[3] || (K[3] = C => V(G)(C)),
                onHandleScroll: C => V(A)(C, Z),
                onHandleSwipe: C => V(E)(C, Z),
                onMount: K[4] || (K[4] = C => M(V(On).calendar)),
                onResetFlow: K[5] || (K[5] = C => B.$emit("reset-flow")),
                onTooltipOpen: K[6] || (K[6] = C => B.$emit("tooltip-open", C)),
                onTooltipClose: K[7] || (K[7] = C => B.$emit("tooltip-close", C))
            }), ea({
                _: 2
            }, [Me(V(F), (C, me) => ({
                name: C,
                fn: ye(ke => [ne(B.$slots, C, dt(qt({
                    ...ke
                })))])
            }))]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])]),
            _: 3
        }, 8, ["multi-calendars"]), B.enableTimePicker ? (m(),
        y("div", AP, [B.$slots["time-picker"] ? ne(B.$slots, "time-picker", dt(et({
            key: 0
        }, {
            time: V(d),
            updateTime: V(R)
        }))) : (m(),
        $(Gd, et({
            key: 1,
            ref_key: "timePickerRef",
            ref: ee
        }, B.$props, {
            hours: V(d).hours,
            minutes: V(d).minutes,
            seconds: V(d).seconds,
            "internal-model-value": B.internalModelValue,
            "disabled-times-config": V(p),
            "validate-time": V(g),
            onMount: K[8] || (K[8] = Z => M(V(On).timePicker)),
            "onUpdate:hours": K[9] || (K[9] = Z => V(R)(Z)),
            "onUpdate:minutes": K[10] || (K[10] = Z => V(R)(Z, !1)),
            "onUpdate:seconds": K[11] || (K[11] = Z => V(R)(Z, !1, !0)),
            onResetFlow: K[12] || (K[12] = Z => B.$emit("reset-flow")),
            onOverlayClosed: K[13] || (K[13] = Z => B.$emit("time-picker-close")),
            onOverlayOpened: K[14] || (K[14] = Z => B.$emit("time-picker-open", Z)),
            onAmPmChange: K[15] || (K[15] = Z => B.$emit("am-pm-change", Z))
        }), ea({
            _: 2
        }, [Me(V(N), (Z, H) => ({
            name: Z,
            fn: ye(C => [ne(B.$slots, Z, dt(qt(C)))])
        }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))])) : x("", !0)], 64))
    }
})
  , OP = (t, n) => {
    const a = T()
      , {defaultedMultiCalendars: e, defaultedConfig: r, defaultedHighlight: o} = At(t)
      , {modelValue: i, year: s, month: l, calendars: d} = fo(t, n)
      , {isDisabled: p} = Fn(t)
      , {selectYear: g, groupedYears: h, showYearPicker: f, isDisabled: _, toggleYearPicker: A, handleYearSelect: E, handleYear: w} = jd({
        modelValue: i,
        multiCalendars: e,
        highlight: o,
        calendars: d,
        month: l,
        year: s,
        props: t,
        emit: n
    })
      , k = (q, D) => [q, D].map(j => cn(j, "MMMM", {
        locale: t.formatLocale
    })).join("-")
      , O = u( () => q => i.value ? Array.isArray(i.value) ? i.value.some(D => Dc(q, D)) : Dc(i.value, q) : !1)
      , I = q => {
        if (t.range) {
            if (Array.isArray(i.value)) {
                const D = it(q, i.value[0]) || it(q, i.value[1]);
                return oi(i.value, a.value, q) && !D
            }
            return !1
        }
        return !1
    }
      , R = u( () => q => {
        const D = bt(new Date, {
            year: s.value(q)
        });
        return iS({
            start: lS(D),
            end: sS(D)
        }).map(j => {
            const z = io(j)
              , ee = Sc(j)
              , F = p(j)
              , S = I(z)
              , N = typeof o.value == "function" ? o.value({
                quarter: kc(z),
                year: qe(z)
            }) : !!o.value.quarters.find(M => M.quarter === kc(z) && M.year === qe(z));
            return {
                text: k(z, ee),
                value: z,
                active: O.value(z),
                highlighted: N,
                disabled: F,
                isBetween: S
            }
        }
        )
    }
    )
      , Y = q => {
        rl(q, i, t.multiDatesLimit),
        n("auto-apply", !0)
    }
      , G = q => {
        const D = ol(i, q, n);
        ci(D, n, t.autoApply, t.modelAuto)
    }
      , X = q => {
        i.value = q,
        n("auto-apply")
    }
    ;
    return {
        defaultedConfig: r,
        defaultedMultiCalendars: e,
        groupedYears: h,
        year: s,
        isDisabled: _,
        quarters: R,
        showYearPicker: f,
        modelValue: i,
        setHoverDate: q => {
            a.value = q
        }
        ,
        selectYear: g,
        selectQuarter: (q, D, j) => {
            if (!j)
                return d.value[D].month = Je(Sc(q)),
                t.multiDates ? Y(q) : t.range ? G(q) : X(q)
        }
        ,
        toggleYearPicker: A,
        handleYearSelect: E,
        handleYear: w
    }
}
  , xP = {
    class: "dp--quarter-items"
}
  , BP = ["disabled", "onClick", "onMouseover"]
  , LP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "QuarterPicker",
    props: {
        ...Da
    },
    emits: ["update:internal-model-value", "reset-flow", "overlay-closed", "auto-apply", "range-start", "range-end"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = Vn()
          , i = oa(o, "yearMode")
          , {defaultedMultiCalendars: s, defaultedConfig: l, groupedYears: d, year: p, isDisabled: g, quarters: h, modelValue: f, showYearPicker: _, setHoverDate: A, selectQuarter: E, toggleYearPicker: w, handleYearSelect: k, handleYear: O} = OP(r, e);
        return n({
            getSidebarProps: () => ({
                modelValue: f,
                year: p,
                selectQuarter: E,
                handleYearSelect: k,
                handleYear: O
            })
        }),
        (I, R) => (m(),
        $(li, {
            "multi-calendars": V(s).count,
            stretch: ""
        }, {
            default: ye( ({instance: Y}) => [P("div", {
                class: "dp-quarter-picker-wrap",
                style: ze({
                    minHeight: `${V(l).modeHeight}px`
                })
            }, [P("div", null, [Le(Ud, et(I.$props, {
                items: V(d)(Y),
                instance: Y,
                "show-year-picker": V(_)[Y],
                year: V(p)(Y),
                "is-disabled": G => V(g)(Y, G),
                onHandleYear: G => V(O)(Y, G),
                onYearSelect: G => V(k)(G, Y),
                onToggleYearPicker: G => V(w)(Y, G?.flow, G?.show)
            }), ea({
                _: 2
            }, [Me(V(i), (G, X) => ({
                name: G,
                fn: ye(q => [ne(I.$slots, G, dt(qt(q)))])
            }))]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]), P("div", xP, [(m(!0),
            y(pe, null, Me(V(h)(Y), (G, X) => (m(),
            y("div", {
                key: X
            }, [P("button", {
                type: "button",
                class: J(["dp--qr-btn", {
                    "dp--qr-btn-active": G.active,
                    "dp--qr-btn-between": G.isBetween,
                    "dp--qr-btn-disabled": G.disabled,
                    "dp--highlighted": G.highlighted
                }]),
                disabled: G.disabled,
                onClick: q => V(E)(G.value, Y, G.disabled),
                onMouseover: q => V(A)(G.value)
            }, [I.$slots.quarter ? ne(I.$slots, "quarter", {
                key: 0,
                value: G.value,
                text: G.text
            }) : (m(),
            y(pe, {
                key: 1
            }, [$e(te(G.text), 1)], 64))], 42, BP)]))), 128))])], 4)]),
            _: 3
        }, 8, ["multi-calendars"]))
    }
})
  , RP = ["id"]
  , NP = {
    key: 0,
    class: "dp__sidebar_left"
}
  , HP = {
    key: 1,
    class: "dp--preset-dates"
}
  , VP = ["onClick", "onKeydown"]
  , UP = {
    key: 2,
    class: "dp__sidebar_right"
}
  , FP = {
    key: 3,
    class: "dp__action_extra"
}
  , qc = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DatepickerMenu",
    props: {
        ...si,
        shadow: {
            type: Boolean,
            default: !1
        },
        openOnTop: {
            type: Boolean,
            default: !1
        },
        internalModelValue: {
            type: [Date, Array],
            default: null
        },
        arrMapValues: {
            type: Object,
            default: () => ({})
        },
        noOverlayFocus: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["close-picker", "select-date", "auto-apply", "time-update", "flow-step", "update-month-year", "invalid-select", "update:internal-model-value", "recalculate-position", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "auto-apply-invalid", "date-update", "invalid-date"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = u( () => {
            const {openOnTop: Q, ...ie} = r;
            return {
                ...ie,
                flowStep: X.value,
                noOverlayFocus: r.noOverlayFocus
            }
        }
        )
          , {setMenuFocused: i, setShiftKey: s, control: l} = Vd()
          , d = Vn()
          , {defaultedTextInput: p, defaultedInline: g, defaultedConfig: h} = At(r)
          , f = T(null)
          , _ = T(0)
          , A = T(null)
          , E = T(null)
          , w = T(!1)
          , k = T(null);
        xe( () => {
            if (!r.shadow) {
                w.value = !0,
                O(),
                window.addEventListener("resize", O);
                const Q = Rt(A);
                if (Q && !p.value.enabled && !g.value.enabled && (i(!0),
                ee()),
                Q) {
                    const ie = Ee => {
                        h.value.allowPreventDefault && Ee.preventDefault(),
                        un(Ee, h.value, !0)
                    }
                    ;
                    Q.addEventListener("pointerdown", ie),
                    Q.addEventListener("mousedown", ie)
                }
            }
        }
        ),
        uo( () => {
            window.removeEventListener("resize", O)
        }
        );
        const O = () => {
            const Q = Rt(E);
            Q && (_.value = Q.getBoundingClientRect().width)
        }
          , {arrowRight: I, arrowLeft: R, arrowDown: Y, arrowUp: G} = _n()
          , {flowStep: X, updateFlowStep: q, childMount: D, resetFlow: j} = BI(r, e, k)
          , z = u( () => r.monthPicker ? QI : r.yearPicker ? JI : r.timePicker ? hP : r.quarterPicker ? LP : MP)
          , ee = () => {
            const Q = Rt(A);
            Q && Q.focus({
                preventScroll: !0
            })
        }
          , F = u( () => {
            var Q;
            return ((Q = k.value) == null ? void 0 : Q.getSidebarProps()) || {}
        }
        )
          , S = () => {
            r.openOnTop && e("recalculate-position")
        }
          , N = oa(d, "action")
          , M = u( () => r.monthPicker || r.yearPicker ? oa(d, "monthYear") : r.timePicker ? oa(d, "timePicker") : oa(d, "shared"))
          , W = u( () => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")
          , b = u( () => ({
            dp__menu_disabled: r.disabled,
            dp__menu_readonly: r.readonly
        }))
          , v = u( () => ({
            dp__menu: !0,
            dp__menu_index: !g.value.enabled,
            dp__relative: g.value.enabled,
            [r.menuClassName]: !!r.menuClassName
        }))
          , L = Q => {
            un(Q, h.value, !0)
        }
          , B = () => {
            r.escClose && e("close-picker")
        }
          , K = Q => {
            if (r.arrowNavigation) {
                if (Q === "up")
                    return G();
                if (Q === "down")
                    return Y();
                if (Q === "left")
                    return R();
                if (Q === "right")
                    return I()
            } else
                Q === "left" || Q === "up" ? ke("handleArrow", "left", 0, Q === "up") : ke("handleArrow", "right", 0, Q === "down")
        }
          , Z = Q => {
            s(Q.shiftKey),
            !r.disableMonthYearSelect && Q.code === "Tab" && Q.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (Q.preventDefault(),
            un(Q, h.value, !0),
            e("close-picker"))
        }
          , H = () => {
            ee(),
            e("time-picker-close")
        }
          , C = Q => {
            var ie, Ee, ge;
            (ie = k.value) == null || ie.toggleTimePicker(!1, !1),
            (Ee = k.value) == null || Ee.toggleMonthPicker(!1, !1, Q),
            (ge = k.value) == null || ge.toggleYearPicker(!1, !1, Q)
        }
          , me = (Q, ie=0) => {
            var Ee, ge, Pe;
            return Q === "month" ? (Ee = k.value) == null ? void 0 : Ee.toggleMonthPicker(!1, !0, ie) : Q === "year" ? (ge = k.value) == null ? void 0 : ge.toggleYearPicker(!1, !0, ie) : Q === "time" ? (Pe = k.value) == null ? void 0 : Pe.toggleTimePicker(!0, !1) : C(ie)
        }
          , ke = (Q, ...ie) => {
            var Ee, ge;
            (Ee = k.value) != null && Ee[Q] && ((ge = k.value) == null || ge[Q](...ie))
        }
          , ue = () => {
            ke("selectCurrentDate")
        }
          , Se = (Q, ie) => {
            ke("presetDate", Q, ie)
        }
          , ve = () => {
            ke("clearHoverDate")
        }
        ;
        return n({
            updateMonthYear: (Q, ie) => {
                ke("updateMonthYear", Q, ie)
            }
            ,
            switchView: me
        }),
        (Q, ie) => {
            var Ee;
            return m(),
            y("div", {
                id: Q.uid ? `dp-menu-${Q.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: A,
                tabindex: "0",
                role: "dialog",
                class: J(v.value),
                onMouseleave: ve,
                onClick: L,
                onKeydown: [Ue(B, ["esc"]), ie[18] || (ie[18] = Ue(Re(ge => K("left"), ["prevent"]), ["left"])), ie[19] || (ie[19] = Ue(Re(ge => K("up"), ["prevent"]), ["up"])), ie[20] || (ie[20] = Ue(Re(ge => K("down"), ["prevent"]), ["down"])), ie[21] || (ie[21] = Ue(Re(ge => K("right"), ["prevent"]), ["right"])), Z]
            }, [(Q.disabled || Q.readonly) && V(g).enabled ? (m(),
            y("div", {
                key: 0,
                class: J(b.value)
            }, null, 2)) : x("", !0), !V(g).enabled && !Q.teleportCenter ? (m(),
            y("div", {
                key: 1,
                class: J(W.value)
            }, null, 2)) : x("", !0), P("div", {
                ref_key: "innerMenuRef",
                ref: E,
                class: J({
                    dp__menu_content_wrapper: ((Ee = Q.presetDates) == null ? void 0 : Ee.length) || !!Q.$slots["left-sidebar"] || !!Q.$slots["right-sidebar"]
                }),
                style: ze({
                    "--dp-menu-width": `${_.value}px`
                })
            }, [Q.$slots["left-sidebar"] ? (m(),
            y("div", NP, [ne(Q.$slots, "left-sidebar", dt(qt(F.value)))])) : x("", !0), Q.presetDates.length ? (m(),
            y("div", HP, [(m(!0),
            y(pe, null, Me(Q.presetDates, (ge, Pe) => (m(),
            y(pe, {
                key: Pe
            }, [ge.slot ? ne(Q.$slots, ge.slot, {
                key: 0,
                presetDate: Se,
                label: ge.label,
                value: ge.value
            }) : (m(),
            y("button", {
                key: 1,
                type: "button",
                style: ze(ge.style || {}),
                class: "dp__btn dp--preset-range",
                onClick: Re(ot => Se(ge.value, ge.noTz), ["prevent"]),
                onKeydown: [Ue(Re(ot => Se(ge.value, ge.noTz), ["prevent"]), ["enter"]), Ue(Re(ot => Se(ge.value, ge.noTz), ["prevent"]), ["space"])]
            }, te(ge.label), 45, VP))], 64))), 128))])) : x("", !0), P("div", {
                ref_key: "calendarWrapperRef",
                ref: f,
                class: "dp__instance_calendar",
                role: "document"
            }, [(m(),
            $(mn(z.value), et({
                ref_key: "dynCmpRef",
                ref: k
            }, o.value, {
                "flow-step": V(X),
                onMount: V(D),
                onUpdateFlowStep: V(q),
                onResetFlow: V(j),
                onFocusMenu: ee,
                onSelectDate: ie[0] || (ie[0] = ge => Q.$emit("select-date")),
                onDateUpdate: ie[1] || (ie[1] = ge => Q.$emit("date-update", ge)),
                onTooltipOpen: ie[2] || (ie[2] = ge => Q.$emit("tooltip-open", ge)),
                onTooltipClose: ie[3] || (ie[3] = ge => Q.$emit("tooltip-close", ge)),
                onAutoApply: ie[4] || (ie[4] = ge => Q.$emit("auto-apply", ge)),
                onRangeStart: ie[5] || (ie[5] = ge => Q.$emit("range-start", ge)),
                onRangeEnd: ie[6] || (ie[6] = ge => Q.$emit("range-end", ge)),
                onInvalidFixedRange: ie[7] || (ie[7] = ge => Q.$emit("invalid-fixed-range", ge)),
                onTimeUpdate: ie[8] || (ie[8] = ge => Q.$emit("time-update")),
                onAmPmChange: ie[9] || (ie[9] = ge => Q.$emit("am-pm-change", ge)),
                onTimePickerOpen: ie[10] || (ie[10] = ge => Q.$emit("time-picker-open", ge)),
                onTimePickerClose: H,
                onRecalculatePosition: S,
                onUpdateMonthYear: ie[11] || (ie[11] = ge => Q.$emit("update-month-year", ge)),
                onAutoApplyInvalid: ie[12] || (ie[12] = ge => Q.$emit("auto-apply-invalid", ge)),
                onInvalidDate: ie[13] || (ie[13] = ge => Q.$emit("invalid-date", ge)),
                "onUpdate:internalModelValue": ie[14] || (ie[14] = ge => Q.$emit("update:internal-model-value", ge))
            }), ea({
                _: 2
            }, [Me(M.value, (ge, Pe) => ({
                name: ge,
                fn: ye(ot => [ne(Q.$slots, ge, dt(qt({
                    ...ot
                })))])
            }))]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))], 512), Q.$slots["right-sidebar"] ? (m(),
            y("div", UP, [ne(Q.$slots, "right-sidebar", dt(qt(F.value)))])) : x("", !0), Q.$slots["action-extra"] ? (m(),
            y("div", FP, [Q.$slots["action-extra"] ? ne(Q.$slots, "action-extra", {
                key: 0,
                selectCurrentDate: ue
            }) : x("", !0)])) : x("", !0)], 6), !Q.autoApply || V(h).keepActionRow ? (m(),
            $(jI, et({
                key: 2,
                "menu-mount": w.value
            }, o.value, {
                "calendar-width": _.value,
                onClosePicker: ie[15] || (ie[15] = ge => Q.$emit("close-picker")),
                onSelectDate: ie[16] || (ie[16] = ge => Q.$emit("select-date")),
                onInvalidSelect: ie[17] || (ie[17] = ge => Q.$emit("invalid-select")),
                onSelectNow: ue
            }), ea({
                _: 2
            }, [Me(V(N), (ge, Pe) => ({
                name: ge,
                fn: ye(ot => [ne(Q.$slots, ge, dt(qt({
                    ...ot
                })))])
            }))]), 1040, ["menu-mount", "calendar-width"])) : x("", !0)], 42, RP)
        }
    }
})
  , jP = typeof window < "u" ? window : void 0
  , Gi = () => {}
  , GP = t => Kc() ? (Qc(t),
!0) : !1
  , YP = (t, n, a, e) => {
    if (!t)
        return Gi;
    let r = Gi;
    const o = je( () => V(t), s => {
        r(),
        s && (s.addEventListener(n, a, e),
        r = () => {
            s.removeEventListener(n, a, e),
            r = Gi
        }
        )
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , i = () => {
        o(),
        r()
    }
    ;
    return GP(i),
    i
}
  , WP = (t, n, a, e={}) => {
    const {window: r=jP, event: o="pointerdown"} = e;
    return r ? YP(r, o, i => {
        const s = Rt(t)
          , l = Rt(n);
        !s || !l || s === i.target || i.composedPath().includes(s) || i.composedPath().includes(l) || a(i)
    }
    , {
        passive: !0
    }) : void 0
}
  , qP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "VueDatePicker",
    props: {
        ...si
    },
    emits: ["update:model-value", "update:model-timezone-value", "text-submit", "closed", "cleared", "open", "focus", "blur", "internal-model-change", "recalculate-position", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "date-update", "invalid-date"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = Vn()
          , i = T(!1)
          , s = xn(r, "modelValue")
          , l = xn(r, "timezone")
          , d = T(null)
          , p = T(null)
          , g = T(null)
          , h = T(!1)
          , f = T(null)
          , _ = T(!1)
          , A = T(!1)
          , {setMenuFocused: E, setShiftKey: w} = Vd()
          , {clearArrowNav: k} = _n()
          , {mapDatesArrToMap: O, validateDate: I, isValidTime: R} = Fn(r)
          , {defaultedTransitions: Y, defaultedTextInput: G, defaultedInline: X, defaultedConfig: q} = At(r)
          , {menuTransition: D, showTransition: j} = ho(Y);
        xe( () => {
            K(r.modelValue),
            Ot().then( () => {
                if (!X.value.enabled) {
                    const de = b(f.value);
                    de?.addEventListener("scroll", Q),
                    window?.addEventListener("resize", ie)
                }
            }
            ),
            X.value.enabled && (i.value = !0),
            window?.addEventListener("keyup", Ee),
            window?.addEventListener("keydown", ge)
        }
        );
        const z = u( () => O());
        uo( () => {
            if (!X.value.enabled) {
                const de = b(f.value);
                de?.removeEventListener("scroll", Q),
                window?.removeEventListener("resize", ie)
            }
            window?.removeEventListener("keyup", Ee),
            window?.removeEventListener("keydown", ge)
        }
        );
        const ee = oa(o, "all", r.presetDates)
          , F = oa(o, "input");
        je([s, l], () => {
            K(s.value)
        }
        , {
            deep: !0
        });
        const {openOnTop: S, menuStyle: N, xCorrect: M, setMenuPosition: W, getScrollableParent: b, shadowRender: v} = AI({
            menuRef: d,
            menuRefInner: p,
            inputRef: g,
            pickerWrapperRef: f,
            inline: X,
            emit: e,
            props: r,
            slots: o
        })
          , {inputValue: L, internalModelValue: B, parseExternalModelValue: K, emitModelValue: Z, formatInputValue: H, checkBeforeEmit: C} = EI(e, r, h)
          , me = u( () => ({
            dp__main: !0,
            dp__theme_dark: r.dark,
            dp__theme_light: !r.dark,
            dp__flex_display: X.value.enabled,
            dp__flex_display_with_input: X.value.input
        }))
          , ke = u( () => r.dark ? "dp__theme_dark" : "dp__theme_light")
          , ue = u( () => ({
            to: typeof r.teleport == "boolean" ? "body" : r.teleport,
            disabled: !r.teleport || X.value.enabled
        }))
          , Se = u( () => ({
            class: "dp__outer_menu_wrap"
        }))
          , ve = u( () => X.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker))
          , Q = () => {
            i.value && (q.value.closeOnScroll ? Te() : W())
        }
          , ie = () => {
            i.value && W()
        }
          , Ee = de => {
            de.key === "Tab" && !X.value.enabled && !r.teleport && q.value.tabOutClosesMenu && (f.value.contains(document.activeElement) || Te()),
            A.value = de.shiftKey
        }
          , ge = de => {
            A.value = de.shiftKey
        }
          , Pe = () => {
            !r.disabled && !r.readonly && (v(qc, r),
            W(!1),
            i.value = !0,
            i.value && e("open"),
            i.value || gt(),
            K(r.modelValue))
        }
          , ot = () => {
            var de;
            L.value = "",
            gt(),
            (de = g.value) == null || de.setParsedDate(null),
            e("update:model-value", null),
            e("update:model-timezone-value", null),
            e("cleared"),
            q.value.closeOnClearValue && Te()
        }
          , xt = () => {
            const de = B.value;
            return !de || !Array.isArray(de) && I(de) ? !0 : Array.isArray(de) ? r.multiDates || de.length === 2 && I(de[0]) && I(de[1]) ? !0 : r.partialRange && !r.timePicker ? I(de[0]) : !1 : !1
        }
          , Mt = () => {
            C() && xt() ? (Z(),
            Te()) : e("invalid-select", B.value)
        }
          , ca = de => {
            Qt(),
            Z(),
            q.value.closeOnAutoApply && !de && Te()
        }
          , Qt = () => {
            g.value && G.value.enabled && g.value.setParsedDate(B.value)
        }
          , ua = (de=!1) => {
            r.autoApply && R(B.value) && xt() && (r.range && Array.isArray(B.value) ? (r.partialRange || B.value.length === 2) && ca(de) : ca(de))
        }
          , gt = () => {
            G.value.enabled || (B.value = null)
        }
          , Te = () => {
            X.value.enabled || (i.value && (i.value = !1,
            M.value = !1,
            E(!1),
            w(!1),
            k(),
            e("closed"),
            L.value && K(s.value)),
            gt(),
            e("blur"))
        }
          , We = (de, Be, Ae=!1) => {
            if (!de) {
                B.value = null;
                return
            }
            const Bt = Array.isArray(de) ? !de.some(Ya => !I(Ya)) : I(de)
              , jt = R(de);
            Bt && jt && (B.value = de,
            Be && (_.value = Ae,
            Mt(),
            e("text-submit")))
        }
          , Qe = () => {
            r.autoApply && R(B.value) && Z(),
            Qt()
        }
          , pt = () => i.value ? Te() : Pe()
          , U = de => {
            B.value = de
        }
          , ae = () => {
            G.value.enabled && (h.value = !0,
            H()),
            e("focus")
        }
          , Ie = () => {
            if (G.value.enabled && (h.value = !1,
            K(r.modelValue),
            _.value)) {
                const de = sI(f.value, A.value);
                de?.focus()
            }
            e("blur")
        }
          , He = de => {
            p.value && p.value.updateMonthYear(0, {
                month: Vc(de.month),
                year: Vc(de.year)
            })
        }
          , fe = de => {
            K(de ?? r.modelValue)
        }
          , vt = (de, Be) => {
            var Ae;
            (Ae = p.value) == null || Ae.switchView(de, Be)
        }
          , kt = de => q.value.onClickOutside ? q.value.onClickOutside(de) : Te();
        return WP(d, g, () => kt(xt)),
        n({
            closeMenu: Te,
            selectDate: Mt,
            clearValue: ot,
            openMenu: Pe,
            onScroll: Q,
            formatInputValue: H,
            updateInternalModelValue: U,
            setMonthYear: He,
            parseModel: fe,
            switchView: vt,
            toggleMenu: pt
        }),
        (de, Be) => (m(),
        y("div", {
            ref_key: "pickerWrapperRef",
            ref: f,
            class: J(me.value),
            "data-datepicker-instance": ""
        }, [Le(HI, et({
            ref_key: "inputRef",
            ref: g,
            "input-value": V(L),
            "onUpdate:inputValue": Be[0] || (Be[0] = Ae => ml(L) ? L.value = Ae : null),
            "is-menu-open": i.value
        }, de.$props, {
            onClear: ot,
            onOpen: Pe,
            onSetInputDate: We,
            onSetEmptyDate: V(Z),
            onSelectDate: Mt,
            onToggle: pt,
            onClose: Te,
            onFocus: ae,
            onBlur: Ie,
            onRealBlur: Be[1] || (Be[1] = Ae => h.value = !1)
        }), ea({
            _: 2
        }, [Me(V(F), (Ae, Bt) => ({
            name: Ae,
            fn: ye(jt => [ne(de.$slots, Ae, dt(qt(jt)))])
        }))]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]), Le(Jd, dt(qt(ue.value)), {
            default: ye( () => [Le(ra, {
                name: V(D)(V(S)),
                css: V(j) && !V(X).enabled
            }, {
                default: ye( () => [i.value ? (m(),
                y("div", et({
                    key: 0,
                    ref_key: "dpWrapMenuRef",
                    ref: d
                }, Se.value, {
                    class: {
                        "dp--menu-wrapper": !V(X).enabled
                    },
                    style: V(X).enabled ? void 0 : V(N)
                }), [Le(qc, et({
                    ref_key: "dpMenuRef",
                    ref: p
                }, de.$props, {
                    "internal-model-value": V(B),
                    "onUpdate:internalModelValue": Be[2] || (Be[2] = Ae => ml(B) ? B.value = Ae : null),
                    class: {
                        [ke.value]: !0,
                        "dp--menu-wrapper": de.teleport
                    },
                    "open-on-top": V(S),
                    "arr-map-values": z.value,
                    "no-overlay-focus": ve.value,
                    onClosePicker: Te,
                    onSelectDate: Mt,
                    onAutoApply: ua,
                    onTimeUpdate: Qe,
                    onFlowStep: Be[3] || (Be[3] = Ae => de.$emit("flow-step", Ae)),
                    onUpdateMonthYear: Be[4] || (Be[4] = Ae => de.$emit("update-month-year", Ae)),
                    onInvalidSelect: Be[5] || (Be[5] = Ae => de.$emit("invalid-select", V(B))),
                    onAutoApplyInvalid: Be[6] || (Be[6] = Ae => de.$emit("invalid-select", Ae)),
                    onInvalidFixedRange: Be[7] || (Be[7] = Ae => de.$emit("invalid-fixed-range", Ae)),
                    onRecalculatePosition: V(W),
                    onTooltipOpen: Be[8] || (Be[8] = Ae => de.$emit("tooltip-open", Ae)),
                    onTooltipClose: Be[9] || (Be[9] = Ae => de.$emit("tooltip-close", Ae)),
                    onTimePickerOpen: Be[10] || (Be[10] = Ae => de.$emit("time-picker-open", Ae)),
                    onTimePickerClose: Be[11] || (Be[11] = Ae => de.$emit("time-picker-close", Ae)),
                    onAmPmChange: Be[12] || (Be[12] = Ae => de.$emit("am-pm-change", Ae)),
                    onRangeStart: Be[13] || (Be[13] = Ae => de.$emit("range-start", Ae)),
                    onRangeEnd: Be[14] || (Be[14] = Ae => de.$emit("range-end", Ae)),
                    onDateUpdate: Be[15] || (Be[15] = Ae => de.$emit("date-update", Ae)),
                    onInvalidDate: Be[16] || (Be[16] = Ae => de.$emit("invalid-date", Ae))
                }), ea({
                    _: 2
                }, [Me(V(ee), (Ae, Bt) => ({
                    name: Ae,
                    fn: ye(jt => [ne(de.$slots, Ae, dt(qt({
                        ...jt
                    })))])
                }))]), 1040, ["internal-model-value", "class", "open-on-top", "arr-map-values", "no-overlay-focus", "onRecalculatePosition"])], 16)) : x("", !0)]),
                _: 3
            }, 8, ["name", "css"])]),
            _: 3
        }, 16)], 2))
    }
})
  , il = ( () => {
    const t = qP;
    return t.install = n => {
        n.component("Vue3DatePicker", t)
    }
    ,
    t
}
)()
  , $P = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: il
}, Symbol.toStringTag, {
    value: "Module"
}));
Object.entries($P).forEach( ([t,n]) => {
    t !== "default" && (il[t] = n)
}
);
const zP = {
    props: {
        month: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        customProps: {
            type: Object,
            default: null
        }
    },
    emits: ["update-month-year"],
    computed: {
        getLanguage() {
            return this.customProps.language === "br" ? "pt-BR" : this.customProps.language
        },
        calendarTitle() {
            return new Date(this.year,this.month).toLocaleDateString(this.getLanguage, {
                year: "numeric",
                month: "long"
            })
        }
    },
    methods: {
        onNextClick() {
            let t = this.month
              , n = this.year;
            this.month === 11 ? (t = 0,
            n = this.year + 1) : t += 1,
            this.updateDate(t, n)
        },
        onPreviousClick() {
            let t = this.month
              , n = this.year;
            this.month === 0 ? (t = 11,
            n = this.year - 1) : t -= 1,
            this.updateDate(t, n)
        },
        updateDate(t, n) {
            this.$emit("update-month-year", {
                instance: 0,
                month: t,
                year: n
            })
        }
    }
}
  , Wd = t => (sa("data-v-707c7e3f"),
t = t(),
la(),
t)
  , ZP = {
    class: "date-picker-header"
}
  , KP = Wd( () => P("div", {
    class: "date-picker-header__arrow"
}, [P("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M12.5 5L7.5 10L12.5 15",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})])], -1))
  , QP = [KP]
  , XP = Wd( () => P("div", {
    class: "date-picker-header__arrow date-picker-header__arrow--next"
}, [P("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M12.5 5L7.5 10L12.5 15",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})])], -1))
  , JP = [XP];
function eE(t, n, a, e, r, o) {
    return m(),
    y("div", ZP, [P("button", {
        class: "date-picker-header__button",
        onClick: n[0] || (n[0] = (...i) => o.onPreviousClick && o.onPreviousClick(...i))
    }, QP), $e(" " + te(o.calendarTitle) + " ", 1), P("button", {
        class: "date-picker-header__button",
        onClick: n[1] || (n[1] = (...i) => o.onNextClick && o.onNextClick(...i))
    }, JP)])
}
const tE = oe(zP, [["render", eE], ["__scopeId", "data-v-707c7e3f"]])
  , aE = re({
    components: {
        ModalLayout: yr,
        DatePicker: il
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        },
        language: {
            type: String,
            default: "en"
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t) {
        const {isStoreTypeZyro: n, products: a, selectedBookingProduct: e, shoppingCartItems: r, setSelectedBookingProduct: o} = Ea()
          , {openEcommerceModal: i} = Pa()
          , {initiateCheckout: s} = go()
          , l = u( () => tE);
        return {
            initiateCheckout: s,
            openEcommerceModal: i,
            datePickerHeader: l,
            isStoreTypeZyro: n,
            products: a,
            selectedBookingProduct: e,
            shoppingCartItems: r,
            setSelectedBookingProduct: o
        }
    },
    data() {
        return {
            isTimeSelected: !1,
            selectedTimeSlot: null,
            selectedDate: new Date,
            timeSlots: [],
            isSlotsLoading: !1,
            isCalendarLoading: !1,
            isCheckoutLoading: !1,
            disabledDates: []
        }
    },
    computed: {
        isModalEnabled() {
            return this.isStoreTypeZyro && !!this.selectedBookingProduct
        },
        bookingEvent() {
            return this.selectedBookingProduct?.variants[0].booking_event
        },
        title() {
            return this.selectedBookingProduct?.title
        },
        location() {
            return this.bookingEvent?.location
        },
        duration() {
            return this.bookingEvent?.length || null
        },
        durationUnit() {
            return this.bookingEvent?.length_unit
        },
        aggregatedDuration() {
            const t = this.durationUnit === Ji ? this.duration / 1e3 / 60 / 60 : this.duration / 1e3 / 60
              , n = this.durationUnit === Ji ? this.translations.hourShort : this.translations.minuteShort;
            return `${t} ${n}`
        },
        eventStartDate() {
            return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null
        },
        eventEndDate() {
            if (!this.selectedTimeSlot)
                return null;
            const n = this.eventStartDate.getTime() + this.duration;
            return new Date(n)
        },
        calculatedTime() {
            if (!this.selectedTimeSlot)
                return "--:--";
            const t = this.getVisibleDate(this.eventStartDate)
              , n = this.getVisibleDate(this.eventEndDate);
            return `${t} - ${n}`
        },
        dayNames() {
            const t = []
              , n = new Date;
            n.setDate(n.getDate() - n.getDay());
            for (let a = 0; a < 7; a += 1)
                n.setDate(n.getDate() + 1),
                t.push(new Date(n).toLocaleDateString(this.getLanguage, {
                    weekday: "short"
                }));
            return t
        },
        formattedSelectedDate() {
            const t = this.selectedDate?.toLocaleDateString(this.language);
            if (this.eventStartDate?.toDateString() !== this.eventEndDate?.toDateString()) {
                const n = this.eventEndDate.toLocaleDateString(this.language);
                return `${t} - ${n}`
            }
            return t
        },
        selectedMonthAndWeekday() {
            if (!this.selectedDate)
                return null;
            const t = this.selectedDate?.toLocaleDateString(this.getLanguage, {
                month: "long",
                day: "numeric"
            });
            return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
                weekday: "long"
            })}, ${t}`
        },
        getLanguage() {
            switch (this.language) {
            case "br":
                return "pt-BR";
            case "ar":
                return "es-AR";
            default:
                return this.language
            }
        }
    },
    watch: {
        async selectedDate() {
            this.selectedTimeSlot = null,
            this.isTimeSelected = !1,
            await this.loadTimeSlots()
        }
    },
    async mounted() {
        this.isModalEnabled && this.setDefaultData()
    },
    methods: {
        closeEcommerceModal() {
            this.setSelectedBookingProduct(null),
            this.$refs.modal.handleCloseModalAction()
        },
        async setDefaultData() {
            if (await this.loadAvailability(),
            this.disabledDates.some(t => t.toDateString() === this.selectedDate.toDateString())) {
                const n = this.getAllDaysInCurrentMonth().filter(a => !this.disabledDates.some(e => e.toDateString() === a.toDateString())).sort( (a, e) => new Date(a.date) - new Date(e.date));
                this.selectedDate = n.shift()
            }
            await this.loadTimeSlots()
        },
        async handleSubmit() {
            if (ir() || this.isInPreviewMode) {
                this.openEcommerceModal("EcommerceMessageButtonDisabled");
                return
            }
            this.isCheckoutLoading = !0;
            const t = {
                ...this.selectedBookingProduct
            }
              , {timeZone: n} = Intl.DateTimeFormat().resolvedOptions();
            t.variants[0].booking_event = {
                ...t.variants[0].booking_event,
                time_slot: this.selectedTimeSlot,
                time_zone: n,
                length: t.variants[0].booking_event.length,
                length_unit: t.variants[0].booking_event.length_unit,
                date: this.selectedDate
            },
            await this.initiateCheckout([t]),
            this.isCheckoutLoading = !1,
            this.closeEcommerceModal()
        },
        selectTimeSlot(t) {
            this.isTimeSelected = !0,
            this.selectedTimeSlot = t
        },
        async loadTimeSlots() {
            this.isSlotsLoading = !0;
            const t = new Intl.DateTimeFormat("lt").format(this.selectedDate);
            this.timeSlots = await Lt.getTimeSlots(this.bookingEvent.id, t).then(n => (this.isSlotsLoading = !1,
            n))
        },
        async loadAvailability({data: t={}}={}) {
            this.isCalendarLoading = !0;
            const n = Object.keys(t).length ? new Date(t.year,t.month) : this.selectedDate
              , a = new Date(n.getFullYear(),n.getMonth() + 1,0);
            this.disabledDates = await Lt.getAvailability({
                bookingId: this.bookingEvent.id,
                fromDate: new Intl.DateTimeFormat("lt").format(n),
                toDate: new Intl.DateTimeFormat("lt").format(a)
            }).then(e => (this.isCalendarLoading = !1,
            e.map(r => {
                const o = r.split("-");
                return new Date(o[0],o[1] - 1,o[2])
            }
            )))
        },
        getAllDaysInCurrentMonth() {
            const t = new Date().getMonth()
              , n = new Date(new Date().getFullYear(),t,new Date().getDate())
              , a = [];
            for (; n.getMonth() === t; )
                a.push(new Date(n)),
                n.setDate(n.getDate() + 1);
            return a
        },
        getVisibleDate(t) {
            return t.toLocaleTimeString(this.getLanguage, {
                hour: "2-digit",
                minute: "2-digit"
            })
        }
    }
})
  , nE = {
    class: "ecommerce-booking-modal"
}
  , rE = {
    class: "ecommerce-booking-modal__content"
}
  , oE = {
    class: "ecommerce-booking-modal__info"
}
  , iE = {
    class: "ecommerce-booking-modal__title"
}
  , sE = {
    class: "ecommerce-booking-modal__icons"
}
  , lE = {
    class: "ecommerce-booking-modal__text-wrapper"
}
  , cE = P("div", {
    class: "ecommerce-booking-modal__icon"
}, [P("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
    fill: "#474B4F"
})])], -1)
  , uE = {
    class: "ecommerce-booking-modal__text"
}
  , dE = {
    class: "ecommerce-booking-modal__text-wrapper"
}
  , mE = P("div", {
    class: "ecommerce-booking-modal__icon"
}, [P("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
    fill: "#474B4F"
})])], -1)
  , gE = {
    class: "ecommerce-booking-modal__text"
}
  , pE = {
    class: "ecommerce-booking-modal__text-wrapper"
}
  , vE = P("div", {
    class: "ecommerce-booking-modal__icon"
}, [P("svg", {
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
    fill: "#474B4F"
})])], -1)
  , hE = {
    class: "ecommerce-booking-modal__text"
}
  , fE = {
    class: "ecommerce-booking-modal__availability"
}
  , yE = {
    class: "ecommerce-booking-modal__time-title"
}
  , bE = {
    class: "ecommerce-booking-modal__calendar-wrapper"
}
  , _E = {
    class: "ecommerce-booking-modal__time-wrapper"
}
  , wE = {
    class: "ecommerce-booking-modal__selected-day"
}
  , kE = {
    class: "ecommerce-booking-modal__time-slot-wrapper"
}
  , SE = {
    key: 0,
    class: "ecommerce-booking-modal__time-slot-loader"
}
  , CE = ["onClick"]
  , TE = {
    class: "ecommerce-booking-modal__buttons"
}
  , IE = ["disabled"];
function PE(t, n, a, e, r, o) {
    const i = mt("DatePicker")
      , s = mt("ModalLayout")
      , l = st("qa");
    return t.isModalEnabled ? (m(),
    $(s, {
        key: 0,
        ref: "modal",
        padding: "0",
        "max-width": "1048px",
        "mobile-height": "100%",
        width: "100vw",
        "background-color": "transparent"
    }, {
        default: ye( () => [P("div", nE, [P("div", rE, [P("div", oE, [P("p", iE, te(t.title), 1), P("div", sE, [le((m(),
        y("div", lE, [cE, P("p", uE, te(t.formattedSelectedDate), 1)])), [[l, "ecommerce-booking-modal-date"]]), le((m(),
        y("div", dE, [mE, P("p", gE, te(t.calculatedTime) + " (" + te(t.aggregatedDuration) + ") ", 1)])), [[l, "ecommerce-booking-modal-duration-time"]])]), le((m(),
        y("div", pE, [vE, P("p", hE, te(t.location), 1)])), [[l, "ecommerce-booking-modal-location"]])]), P("div", fE, [P("p", yE, te(t.translations.selectDateAndTime), 1), P("div", bE, [Le(i, {
            modelValue: t.selectedDate,
            "onUpdate:modelValue": n[0] || (n[0] = d => t.selectedDate = d),
            inline: "",
            "hide-offset-dates": "",
            "auto-apply": "",
            class: J(["ecommerce-booking-modal-calendar", {
                "ecommerce-booking-modal-calendar--loading": t.isCalendarLoading
            }]),
            "disabled-dates": t.disabledDates,
            "min-date": new Date,
            locale: t.getLanguage,
            "no-swipe": "",
            "month-change-on-scroll": !1,
            "enable-time-picker": !1,
            "custom-props": {
                language: t.getLanguage
            },
            "month-year-component": t.datePickerHeader,
            onUpdateMonthYear: n[1] || (n[1] = d => t.loadAvailability({
                data: d
            }))
        }, {
            "calendar-header": ye( ({index: d}) => [P("div", null, te(t.dayNames[d]), 1)]),
            _: 1
        }, 8, ["modelValue", "class", "disabled-dates", "min-date", "locale", "custom-props", "month-year-component"]), P("div", _E, [P("div", null, [P("p", wE, te(t.selectedMonthAndWeekday), 1)]), P("div", kE, [t.isSlotsLoading ? (m(),
        y("div", SE)) : (m(!0),
        y(pe, {
            key: 1
        }, Me(t.timeSlots, (d, p) => le((m(),
        y("button", {
            key: `time-${p}`,
            class: J(["ecommerce-booking-modal__time-slot", {
                "ecommerce-booking-modal__time-slot--active": t.selectedTimeSlot === d
            }]),
            onClick: g => t.selectTimeSlot(d)
        }, [$e(te(t.getVisibleDate(new Date(d))), 1)], 10, CE)), [[l, "ecommerce-booking-modal-time-slot"]])), 128))])])])])]), P("div", TE, [P("button", {
            class: "ecommerce-booking-modal__button",
            onClick: n[2] || (n[2] = (...d) => t.closeEcommerceModal && t.closeEcommerceModal(...d))
        }, te(t.translations.cancel), 1), le((m(),
        y("button", {
            class: J(["ecommerce-booking-modal__button ecommerce-booking-modal__button--save", {
                loading: t.isCheckoutLoading
            }]),
            disabled: !t.isTimeSelected,
            onClick: n[3] || (n[3] = (...d) => t.handleSubmit && t.handleSubmit(...d))
        }, [$e(te(t.translations.book), 1)], 10, IE)), [[l, "commerce-booking-modal-button-save"]])])])]),
        _: 1
    }, 512)) : x("", !0)
}
const EE = oe(aE, [["render", PE]])
  , DE = re({
    name: "EcommerceModalContent",
    props: {
        title: {
            type: String,
            required: !0
        },
        text: {
            type: String,
            required: !0
        },
        buttonText: {
            type: String,
            required: !0
        },
        qaSelector: {
            type: String,
            default: "success"
        }
    },
    emits: ["handle-close"]
})
  , AE = {
    class: "payment-info"
}
  , ME = {
    class: "payment-info__content"
}
  , OE = {
    class: "payment-info__title"
}
  , xE = {
    class: "payment-info__text body-large"
};
function BE(t, n, a, e, r, o) {
    const i = st("qa");
    return le((m(),
    y("div", AE, [P("div", ME, [P("h5", OE, te(t.title), 1), P("p", xE, te(t.text), 1), P("button", {
        class: "payment-info__button",
        type: "primary",
        onClick: n[0] || (n[0] = s => t.$emit("handle-close"))
    }, te(t.buttonText), 1)])])), [[i, `ecommerce-modal-checkout-${t.qaSelector}`]])
}
const ui = oe(DE, [["render", BE], ["__scopeId", "data-v-98b20e5c"]])
  , LE = re({
    components: {
        ModalLayout: yr,
        ModalContent: ui
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    }
});
function RE(t, n, a, e, r, o) {
    const i = mt("ModalContent")
      , s = mt("ModalLayout");
    return m(),
    $(s, {
        ref: "modal"
    }, {
        default: ye( () => [Le(i, {
            "qa-selector": "booking-unavailable",
            title: t.translations.checkoutModalBookingUnavailable,
            text: t.translations.checkoutModalChooseDifferentTime,
            "button-text": t.translations.gotIt,
            onHandleClose: n[0] || (n[0] = l => t.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const NE = oe(LE, [["render", RE]])
  , HE = re({
    components: {
        ModalLayout: yr,
        ModalContent: ui
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    }
});
function VE(t, n, a, e, r, o) {
    const i = mt("ModalContent")
      , s = mt("ModalLayout");
    return m(),
    $(s, {
        ref: "modal"
    }, {
        default: ye( () => [Le(i, {
            "qa-selector": "failed",
            title: t.translations.checkoutModalCantAcceptOrders,
            text: t.translations.checkoutModalPleaseContact,
            "button-text": t.translations.close,
            onHandleClose: n[0] || (n[0] = l => t.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const UE = oe(HE, [["render", VE]])
  , FE = re({
    __name: "EcommerceCheckoutSuccess",
    props: {
        translations: {
            default: () => ({})
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {isEcommerceStoreCreated: e, setShoppingCartItems: r} = Ea()
          , o = T({
            title: a.translations.checkoutModalThanksForOrder,
            text: a.translations.checkoutModalOrderReceived,
            buttonText: a.translations.gotIt,
            modalType: "success-order"
        })
          , i = T(null);
        xe( () => {
            const d = new URLSearchParams(window.location.search).get("product");
            d !== rt.BOOKING && r([]),
            d === rt.BOOKING ? o.value = {
                ...o.value,
                text: a.translations.checkoutModalSuccessfullyBooked,
                modalType: "success-orderbooking"
            } : d === rt.DONATION ? o.value = {
                ...o.value,
                title: a.translations.checkoutModalThanksForDonation,
                text: a.translations.checkoutModalDonationReceived,
                modalType: "success-orderdonation"
            } : d === rt.DIGITAL && (o.value = {
                ...o.value,
                text: a.translations.checkoutModalDigitalProductEmail,
                modalType: "success-orderdigital"
            })
        }
        );
        const s = {
            props: a,
            isEcommerceStoreCreated: e,
            setShoppingCartItems: r,
            modalContent: o,
            modalRef: i,
            ModalContent: ui,
            ModalLayout: yr
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function jE(t, n, a, e, r, o) {
    return e.isEcommerceStoreCreated ? (m(),
    $(e.ModalLayout, {
        key: 0,
        ref: "modalRef"
    }, {
        default: ye( () => [Le(e.ModalContent, {
            title: e.modalContent.title,
            text: e.modalContent.text,
            "button-text": e.modalContent.buttonText,
            "qa-selector": e.modalContent.modalType,
            onHandleClose: n[0] || (n[0] = i => e.modalRef.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text", "qa-selector"])]),
        _: 1
    }, 512)) : x("", !0)
}
const GE = oe(FE, [["render", jE]])
  , YE = re({
    components: {
        CloseButton: Vs
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    },
    setup() {
        const {closeEcommerceModal: t} = Pa()
          , n = setTimeout( () => {
            t()
        }
        , 6e3);
        return Zt( () => {
            clearTimeout(n)
        }
        ),
        {
            closeEcommerceModal: t
        }
    }
})
  , WE = t => (sa("data-v-2b2551b7"),
t = t(),
la(),
t)
  , qE = {
    class: "notification"
}
  , $E = WE( () => P("svg", {
    class: "notification__icon",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), P("path", {
    d: "M12.01 16L12.01 12",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), P("path", {
    d: "M12.01 8L12 8",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , zE = {
    class: "notification__content"
};
function ZE(t, n, a, e, r, o) {
    const i = mt("CloseButton")
      , s = st("qa");
    return m(),
    $(ra, {
        name: "fade"
    }, {
        default: ye( () => [le((m(),
        y("div", qE, [$E, P("p", zE, te(t.translations.checkoutModalDisabledPreview), 1), Le(i, {
            class: "notification__close",
            title: "Close",
            onClick: n[0] || (n[0] = l => t.closeEcommerceModal())
        })])), [[s, "builder-message-ecommercedisabled"]])]),
        _: 1
    })
}
const KE = oe(YE, [["render", ZE], ["__scopeId", "data-v-2b2551b7"]])
  , QE = re({
    components: {
        ModalLayout: yr,
        ModalContent: ui
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    }
});
function XE(t, n, a, e, r, o) {
    const i = mt("ModalContent")
      , s = mt("ModalLayout");
    return m(),
    $(s, {
        ref: "modal"
    }, {
        default: ye( () => [Le(i, {
            "qa-selector": "outofstock",
            title: t.translations.checkoutModalOutOfStock,
            text: t.translations.checkoutModalTryOrChoose,
            "button-text": t.translations.gotIt,
            onHandleClose: n[0] || (n[0] = l => t.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const JE = oe(QE, [["render", XE]])
  , eD = "open-modal"
  , tD = re({
    components: {
        EcommerceProductPreview: Q1,
        EcommerceBookingEventSelect: EE,
        EcommerceBookingUnavailable: NE,
        EcommerceCheckoutFailed: UE,
        EcommerceCheckoutSuccess: GE,
        EcommerceMessageButtonDisabled: KE,
        EcommerceOutOfStock: JE
    },
    props: {
        ecommerceTranslations: {
            type: Object,
            default: () => ({})
        },
        language: {
            type: String,
            default: "en"
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup() {
        const {openEcommerceModal: t, closeEcommerceModal: n, openEcommerceModalName: a} = Pa();
        return xe( () => {
            const r = new URLSearchParams(window.location.search).get(eD);
            r && t(r)
        }
        ),
        {
            openEcommerceModal: t,
            closeEcommerceModal: n,
            openEcommerceModalName: a
        }
    }
});
function aD(t, n, a, e, r, o) {
    return t.openEcommerceModalName ? (m(),
    $(mn(t.openEcommerceModalName), {
        key: 0,
        translations: t.ecommerceTranslations,
        language: t.language,
        "current-locale": t.currentLocale,
        "is-cart-visible": t.isCartVisible,
        "is-in-preview-mode": t.isInPreviewMode,
        "is-quick-preview": ""
    }, null, 8, ["translations", "language", "current-locale", "is-cart-visible", "is-in-preview-mode"])) : x("", !0)
}
const nD = oe(tD, [["render", aD]])
  , rD = re({
    __name: "Flag",
    props: {
        alt: {},
        src: {
            default: void 0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = {};
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , oD = {
    class: "flag"
}
  , iD = ["src", "alt"]
  , sD = P("div", {
    class: "flag__shadow"
}, null, -1);
function lD(t, n, a, e, r, o) {
    return m(),
    y("div", oD, [P("img", {
        class: "flag__img",
        src: a.src,
        alt: a.alt
    }, null, 8, iD), sD])
}
const cD = oe(rD, [["render", lD]])
  , uD = re({
    __name: "LanguageSwitcher",
    props: {
        languages: {},
        currentLocale: {}
    },
    setup(t, {expose: n}) {
        n(),
        ft(f => ({
            35108948: s.value.visibility,
            "34359e71": s.value.height,
            "45cadb2e": s.value.iconTransform
        }));
        const a = {
            CLOSED: "closed",
            OPEN: "open"
        }
          , e = {
            HIDDEN: "hidden",
            VISIBLE: "visible"
        }
          , r = {
            state: a.CLOSED,
            visibility: e.HIDDEN,
            height: "0",
            iconTransform: "none"
        }
          , o = {
            state: a.OPEN,
            visibility: e.VISIBLE,
            height: "auto",
            iconTransform: "rotate(180deg)"
        }
          , i = t
          , s = T({
            ...r
        })
          , l = T(null)
          , d = async () => {
            s.value = {
                ...s.value.state === a.CLOSED ? o : r
            },
            await Ot(),
            l.value?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            })
        }
          , p = u( () => {
            const f = i.languages.filter( ({isHidden: _}) => !_).map(_ => ({
                ..._,
                src: `${Mm}/${_.flagPath}`,
                alt: `${_.locale} flag`
            }));
            return gv(f)
        }
        )
          , g = u( () => p.value.find( ({locale: f}) => f === i.currentLocale))
          , h = {
            DROPDOWN_STATES: a,
            DROPDOWN_VISIBILITY: e,
            initialDropdownStyles: r,
            openDropdownStyles: o,
            props: i,
            dropdownStyles: s,
            languageSwitcherRef: l,
            toggleDropdown: d,
            languageSwitcherLanguages: p,
            selectedLanguage: g,
            Flag: cD
        };
        return Object.defineProperty(h, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        h
    }
})
  , dD = {
    ref: "languageSwitcherRef",
    class: "language-switcher",
    tabindex: "0"
}
  , mD = {
    key: 1,
    class: "language-switcher__locale"
}
  , gD = P("svg", {
    class: "language-switcher__icon",
    width: "10",
    height: "7",
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
    fill: "currentColor"
})], -1)
  , pD = {
    class: "language-switcher__dropdown-area"
}
  , vD = {
    class: "language-switcher__dropdown"
}
  , hD = ["href"];
function fD(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", dD, [le((m(),
    y("div", {
        class: "language-switcher__button",
        onClick: e.toggleDropdown
    }, [e.selectedLanguage?.country ? le((m(),
    $(e.Flag, {
        key: 0,
        class: "language-switcher__flag",
        src: e.selectedLanguage.src,
        alt: e.selectedLanguage.alt
    }, null, 8, ["src", "alt"])), [[i, `navigation-selected-language-${e.selectedLanguage.name}`]]) : (m(),
    y("div", mD, te(e.selectedLanguage?.locale), 1)), gD])), [[i, "navigation-language-switcher"]]), P("div", pD, [P("ul", vD, [(m(!0),
    y(pe, null, Me(e.languageSwitcherLanguages, s => le((m(),
    y("li", {
        key: s.locale,
        class: "language-switcher__dropdown-item"
    }, [P("a", {
        href: s.href,
        class: J(["language-switcher__dropdown-link", {
            "--current": s.locale === a.currentLocale
        }])
    }, [s.country ? (m(),
    $(e.Flag, {
        key: 0,
        class: "language-switcher__dropdown-flag",
        src: s.src,
        alt: s.alt
    }, null, 8, ["src", "alt"])) : x("", !0), $e(" " + te(s.name), 1)], 10, hD)])), [[i, `navigation-language-switcher-${s.locale}`]])), 128))])])], 512)
}
const yD = oe(uD, [["render", fD]])
  , bD = re({
    __name: "ZyroHamburger",
    props: {
        title: {
            type: String,
            default: "Menu"
        },
        isOpen: {
            type: Boolean,
            required: !0
        },
        color: {
            type: String,
            default: "var(--nav-link-text-color)"
        }
    },
    setup(t, {expose: n}) {
        n(),
        ft(o => ({
            "165ebbac": e.value
        }));
        const a = t
          , e = u( () => a.color)
          , r = {
            props: a,
            burgerColor: e
        };
        return Object.defineProperty(r, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        r
    }
})
  , sl = t => (sa("data-v-ccf9b649"),
t = t(),
la(),
t)
  , _D = ["title"]
  , wD = sl( () => P("span", {
    class: "burger__bun"
}, null, -1))
  , kD = sl( () => P("span", {
    class: "burger__meat"
}, null, -1))
  , SD = sl( () => P("span", {
    class: "burger__bun"
}, null, -1))
  , CD = [wD, kD, SD];
function TD(t, n, a, e, r, o) {
    return m(),
    y("button", {
        type: "button",
        class: J(["burger", {
            "burger--open": a.isOpen
        }]),
        title: a.title
    }, CD, 10, _D)
}
const ID = oe(bD, [["render", TD], ["__scopeId", "data-v-ccf9b649"]])
  , PD = re({
    name: "BlockHeaderBackground",
    props: {
        type: {
            type: String,
            default: "color"
        },
        imageUrl: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: ""
        },
        isTransparent: {
            type: Boolean,
            default: !1
        },
        overlayOpacity: {
            type: Number,
            default: 0
        }
    },
    computed: {
        backgroundImage() {
            return this.type === "image" && this.imageUrl
        },
        backgroundColor() {
            return this.type === "color" ? this.color : "transparent"
        },
        backgroundCSSVars() {
            return {
                "--background-color": this.isTransparent ? "transparent" : this.backgroundColor,
                ...!!this.backgroundImage && {
                    "--background-image": `url(${this.backgroundImage})`
                },
                ...!!this.overlayOpacity && {
                    "--overlay-opacity": this.overlayOpacity
                }
            }
        }
    }
});
function ED(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["background", {
            "background--with-image": t.backgroundImage
        }]),
        style: ze(t.backgroundCSSVars)
    }, null, 6)
}
const DD = oe(PD, [["render", ED]])
  , AD = re({
    __name: "BlockHeaderCart",
    props: {
        cartIconSize: {},
        cartText: {},
        itemsInCart: {}
    },
    emits: ["cart-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ft(s => ({
            "9936818a": o.value
        }));
        const e = t
          , r = a
          , o = u( () => e.cartIconSize)
          , i = {
            props: e,
            emit: r,
            cartIconSize: o
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , MD = t => (sa("data-v-e7b040a0"),
t = t(),
la(),
t)
  , OD = {
    class: "block-header-cart-wrapper"
}
  , xD = {
    class: "block-header-cart"
}
  , BD = {
    class: "block-header-cart__icon-container"
}
  , LD = {
    class: "block-header-cart__icon-wrapper"
}
  , RD = MD( () => P("svg", {
    width: "19",
    height: "24",
    viewBox: "0 0 19 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "block-header-cart__icon"
}, [P("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
    fill: "currentColor"
})], -1))
  , ND = {
    key: 0,
    class: "block-header-cart__item-amount"
}
  , HD = {
    key: 0,
    class: "block-header-cart__cart-text"
};
function VD(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", OD, [P("span", xD, [le((m(),
    y("button", {
        class: "block-header-cart__button",
        title: "Go to cart",
        onClick: n[0] || (n[0] = s => e.emit("cart-click"))
    }, [P("div", BD, [P("div", LD, [RD, a.itemsInCart ? (m(),
    y("div", ND, te(a.itemsInCart), 1)) : x("", !0)]), a.cartText?.length ? (m(),
    y("span", HD, te(a.cartText), 1)) : x("", !0)])])), [[i, "header-btn-shoppingbag"]])])])
}
const UD = oe(AD, [["render", VD], ["__scopeId", "data-v-e7b040a0"]])
  , FD = re({
    __name: "BlockHeaderItemContent",
    props: {
        item: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = u( () => `${a.item.isCurrent ? "navigationblock-page-active-" : "navigationblock-page-"}${a.item.name}`)
          , r = {
            props: a,
            linkDataQa: e
        };
        return Object.defineProperty(r, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        r
    }
})
  , jD = t => (sa("data-v-5a96fcab"),
t = t(),
la(),
t)
  , GD = ["target", "rel", "href", "textContent"]
  , YD = ["textContent"]
  , WD = {
    key: 2,
    class: "item-content__icon-container-wrapper"
}
  , qD = jD( () => P("span", {
    class: "item-content__icon-container"
}, [P("svg", {
    class: "item-content__icon",
    width: "10",
    height: "7",
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [P("path", {
    d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
    fill: "currentColor"
})])], -1))
  , $D = [qD];
function zD(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("div", {
        class: J(["item-content-wrapper", {
            "item-content-wrapper--active": a.item.isCurrent
        }])
    }, [a.item.href ? le((m(),
    y("a", {
        key: 0,
        class: "item-content",
        target: a.item.target,
        rel: a.item.rel,
        href: a.item.href,
        textContent: te(a.item.name)
    }, null, 8, GD)), [[i, e.linkDataQa]]) : le((m(),
    y("span", {
        key: 1,
        class: "item-content",
        textContent: te(a.item.name)
    }, null, 8, YD)), [[i, e.linkDataQa]]), a.item.hasDropdown ? (m(),
    y("div", WD, $D)) : x("", !0)], 2)
}
const ZD = oe(FD, [["render", zD], ["__scopeId", "data-v-5a96fcab"]])
  , KD = re({
    __name: "BlockHeaderItem",
    props: {
        item: {},
        areDropdownsHidden: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const e = {
            props: t,
            BlockHeaderItemContent: ZD
        };
        return Object.defineProperty(e, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        e
    }
})
  , QD = {
    class: "block-header-item"
}
  , XD = {
    class: "block-header-item__label"
}
  , JD = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger"
}
  , eA = {
    key: 1,
    class: "block-header-item__dropdown-area"
}
  , tA = {
    class: "block-header-item__dropdown"
};
function aA(t, n, a, e, r, o) {
    const i = mt("BlockHeaderItem", !0)
      , s = st("qa");
    return m(),
    y("li", QD, [P("label", XD, [!e.props.areDropdownsHidden && e.props.item.hasDropdown ? (m(),
    y("input", JD)) : x("", !0), le(Le(e.BlockHeaderItemContent, {
        item: a.item,
        class: "block-header-item__item",
        "aria-haspopup": a.item.hasDropdown
    }, null, 8, ["item", "aria-haspopup"]), [[s, `navigation-item-${a.item.name}`]]), !e.props.areDropdownsHidden && e.props.item.hasDropdown ? (m(),
    y("div", eA, [P("ul", tA, [(m(!0),
    y(pe, null, Me(e.props.item.subItems, l => (m(),
    $(i, {
        key: l.id,
        item: l
    }, null, 8, ["item"]))), 128))])])) : x("", !0)])])
}
const nA = oe(KD, [["render", aA], ["__scopeId", "data-v-6773ab13"]])
  , rA = re({
    __name: "BlockHeaderLogo",
    props: {
        logoSrc: {},
        logoSvg: {},
        href: {},
        height: {},
        heightMobile: {},
        maxWidth: {},
        maxWidthMobile: {},
        siteName: {}
    },
    setup(t, {expose: n}) {
        n(),
        ft(d => ({
            "12ae7940": i.value,
            "2951b4ed": r.value,
            "31149d1f": s.value,
            "509fe624": o.value
        }));
        const a = t
          , e = u( () => a.siteName ? `${a.siteName} logo` : "")
          , r = u( () => `${a.height}px`)
          , o = u( () => `${a.heightMobile}px`)
          , i = u( () => a.maxWidth)
          , s = u( () => a.maxWidthMobile || i.value)
          , l = {
            props: a,
            logoAltTag: e,
            height: r,
            mHeight: o,
            width: i,
            mWidth: s
        };
        return Object.defineProperty(l, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        l
    }
})
  , oA = ["href"]
  , iA = ["innerHTML"]
  , sA = ["src", "alt"];
function lA(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("a", {
        class: "block-header-logo",
        href: e.props.href ?? ""
    }, [e.props.logoSvg ? (m(),
    y("div", {
        key: 0,
        class: "block-header-logo__image",
        innerHTML: e.props.logoSvg
    }, null, 8, iA)) : e.props.logoSrc ? le((m(),
    y("img", {
        key: 1,
        class: "block-header-logo__image",
        src: e.props.logoSrc,
        alt: e.logoAltTag
    }, null, 8, sA)), [[i, "builder-siteheader-img-logo"]]) : x("", !0)], 8, oA)
}
const cA = oe(rA, [["render", lA], ["__scopeId", "data-v-7d84e8d8"]])
  , uA = re({
    __name: "BlockHeaderLayout",
    props: {
        layout: {},
        mobileLayout: {},
        isLogoVisible: {
            type: Boolean
        },
        isLanguageSwitcherVisible: {
            type: Boolean
        },
        areSocialIconLinksVisible: {
            type: Boolean
        },
        isCartVisible: {
            type: Boolean
        },
        isButtonVisible: {
            type: Boolean
        },
        isMobileMenuDropdownOpen: {
            type: Boolean
        },
        isMobileMenuDropdownFullScreen: {
            type: Boolean
        },
        mobileLinksAlignment: {}
    },
    setup(t, {expose: n}) {
        n(),
        ft(g => ({
            "627588a4": d.value,
            "7d9c8432": s.value
        }));
        const a = t
          , e = T(null)
          , r = T(null)
          , o = T(0)
          , i = ju(r)
          , s = u( () => `${o.value}px`)
          , l = u( () => [a.isLanguageSwitcherVisible, a.areSocialIconLinksVisible, a.isCartVisible, a.isButtonVisible].filter(Boolean).length)
          , d = u( () => `${a.isLogoVisible ? "min-content" : ""} auto ${l.value > 0 ? `repeat(${l.value}, min-content)` : ""}`);
        xe( () => {
            r.value = document.body,
            o.value = document.querySelector(".block-sticky-bar")?.clientHeight ?? 0
        }
        ),
        je( () => a.isMobileMenuDropdownOpen, g => {
            g ? (e?.value && (e.value.scrollTop = 0),
            i.value = !0) : i.value = !1
        }
        );
        const p = {
            props: a,
            dropdownRef: e,
            bodyElement: r,
            stickyBarHeight: o,
            isBodyScrollLocked: i,
            stickyBarHeightPx: s,
            visibleNonCenteredRightElementsCount: l,
            nonCenteredLayoutColumns: d,
            get BLOCK_HEADER_LAYOUTS() {
                return Om
            }
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , dA = {
    key: 1,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-3"
}
  , mA = {
    class: "block-header-layout-desktop__right-side"
}
  , gA = {
    key: 2,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-4"
}
  , pA = {
    class: "block-header-layout-desktop__right-side"
}
  , vA = {
    key: 3,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-5"
}
  , hA = {
    class: "block-header-layout-desktop__right-side"
};
function fA(t, n, a, e, r, o) {
    return m(),
    y(pe, null, [e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_1 || e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_2 ? (m(),
    y("div", {
        key: 0,
        class: J(`block-header-layout-desktop block-header-layout-desktop--${e.props.layout}`)
    }, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "nav", {}, void 0, !0), ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)], 2)) : e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_3 ? (m(),
    y("div", dA, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "nav", {}, void 0, !0), P("div", mA, [ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)])])) : e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_4 ? (m(),
    y("div", gA, [ne(t.$slots, "nav", {}, void 0, !0), ne(t.$slots, "logo", {}, void 0, !0), P("div", pA, [ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)])])) : e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_5 ? (m(),
    y("div", vA, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "nav", {}, void 0, !0), P("div", hA, [ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)])])) : x("", !0), P("div", {
        class: J(["block-header-layout-mobile", `block-header-layout-mobile--${e.props.mobileLayout}`])
    }, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "hamburger-menu", {}, void 0, !0), P("div", {
        ref: "dropdownRef",
        class: J(["block-header-layout-mobile__dropdown", [`block-header-layout-mobile__dropdown--link-align-${e.props.mobileLinksAlignment}`, {
            "block-header-layout-mobile__dropdown--open": e.props.isMobileMenuDropdownOpen
        }, {
            "block-header-layout-mobile__dropdown--full-screen": e.props.isMobileMenuDropdownFullScreen
        }]])
    }, [ne(t.$slots, "nav", {}, void 0, !0), ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)], 2)], 2)], 64)
}
const yA = oe(uA, [["render", fA], ["__scopeId", "data-v-2f044965"]])
  , bA = re({
    __name: "BlockHeaderButton",
    props: {
        elementId: {},
        data: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {getButtonHref: e} = _t()
          , {tagName: r, href: o, target: i, rel: s, type: l, content: d, fontSizeMobile: p, fontSizeDesktop: g, fontFamily: h, fontWeight: f, borderWidth: _, borderRadius: A, backgroundColor: E, fontColor: w, borderColor: k, backgroundColorHover: O, fontColorHover: I, borderColorHover: R, mobileElementWidth: Y, mobileElementHeight: G} = ro(a, {
            href: u( () => e({
                isFormButton: !1,
                linkedPageId: a.data.linkedPageId,
                linkType: a.data.linkType,
                href: a.data.href
            }))
        })
          , X = {
            props: a,
            getButtonHref: e,
            tagName: r,
            href: o,
            target: i,
            rel: s,
            type: l,
            content: d,
            fontSizeMobile: p,
            fontSizeDesktop: g,
            fontFamily: h,
            fontWeight: f,
            borderWidth: _,
            borderRadius: A,
            backgroundColor: E,
            fontColor: w,
            borderColor: k,
            backgroundColorHover: O,
            fontColorHover: I,
            borderColorHover: R,
            mobileElementWidth: Y,
            mobileElementHeight: G,
            GridButton: Un
        };
        return Object.defineProperty(X, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        X
    }
});
function _A(t, n, a, e, r, o) {
    return m(),
    $(e.GridButton, {
        "data-element-ref": a.elementId,
        "tag-name": e.tagName,
        href: e.href,
        target: e.target,
        rel: e.rel,
        type: e.type,
        content: e.content,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-width": e.borderWidth,
        "border-radius": e.borderRadius,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: n[0] || (n[0] = Re( () => {}
        , ["prevent"])),
        onDrag: n[1] || (n[1] = Re( () => {}
        , ["prevent"])),
        onDragstart: n[2] || (n[2] = Re( () => {}
        , ["prevent"]))
    }, null, 8, ["data-element-ref", "tag-name", "href", "target", "rel", "type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const wA = oe(bA, [["render", _A]])
  , kA = re({
    __name: "BlockHeader",
    props: {
        siteName: {
            default: ""
        },
        headerLayout: {},
        mHeaderLayout: {},
        languageSwitcherLanguages: {},
        items: {},
        logoHref: {
            default: ""
        },
        logoSrc: {
            default: ""
        },
        logoSvg: {
            default: ""
        },
        backgroundImageUrl: {},
        isOpen: {
            type: Boolean,
            default: !1
        },
        isSticky: {
            type: Boolean
        },
        isTransparent: {
            type: Boolean
        },
        isLogoVisible: {
            type: Boolean,
            default: !1
        },
        isCartVisible: {
            type: Boolean
        },
        isLanguageSwitcherVisible: {
            type: Boolean
        },
        currentLocale: {
            default: ""
        },
        backgroundColor: {
            default: ""
        },
        navLinkTextColor: {
            default: ""
        },
        navLinkTextColorHover: {
            default: ""
        },
        cartText: {
            default: ""
        },
        itemsInCart: {
            default: 0
        },
        areDropdownsHidden: {
            type: Boolean
        },
        background: {},
        cartIconSize: {},
        logoMaxWidth: {},
        heightMobile: {},
        logoHeight: {},
        logoHeightMobile: {},
        logoMaxWidthMobile: {},
        fontFamily: {
            default: ""
        },
        fontWeight: {
            default: 400
        },
        socialIconsLinks: {
            default: () => []
        },
        socialIconsStyles: {
            default: () => ({})
        },
        buttonElementId: {
            default: ""
        },
        buttonElementData: {
            default: () => ({})
        },
        isMobileMenuDropdownFullScreen: {
            type: Boolean,
            default: !1
        },
        mobileLinksAlignment: {}
    },
    emits: ["toggle-visibility", "cart-click", "logo-click", "button-click", "navigation-click", "social-icons-click", "language-switcher-click"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , {hasUserScrolled: o} = Cu()
          , i = T(null)
          , s = u( () => e.socialIconsLinks.length > 0)
          , l = u( () => !!Object.keys(e.buttonElementData).length)
          , d = u( () => o.value && e.isSticky)
          , p = u( () => e.isSticky && !o.value || !e.isSticky)
          , g = u( () => e.isTransparent && p.value && !e.isOpen)
          , h = u( () => ({
            ...e.fontFamily && {
                "--nav-link-font-family": e.fontFamily
            },
            ...e.fontWeight && {
                "--nav-link-font-weight": e.fontWeight
            },
            "--nav-link-text-color": e.navLinkTextColor || "var(--nav-link-color)",
            "--nav-link-text-color-hover": e.navLinkTextColorHover || "var(--nav-link-color-hover)",
            "--header-height-mobile": `${e.heightMobile}px`,
            ...s.value && {
                "--space-between-icons": "16px",
                "--icon-color": e.socialIconsStyles["icon-color"],
                "--icon-size": e.socialIconsStyles["icon-size"],
                "--icon-color-hover": e.socialIconsStyles["icon-color-hover"]
            }
        }));
        xe( () => {
            ri(i, () => {
                e.isOpen && r("toggle-visibility")
            }
            )
        }
        );
        const f = {
            props: e,
            emit: r,
            hasUserScrolled: o,
            headerRef: i,
            isSocialIconsLinksVisible: s,
            isButtonVisible: l,
            isWithShadow: d,
            shouldForceTransparency: p,
            isCurrentlyTransparent: g,
            computedStyles: h,
            LanguageSwitcher: yD,
            ZyroHamburger: ID,
            BlockHeaderBackground: DD,
            BlockHeaderCart: UD,
            BlockHeaderItem: nA,
            BlockHeaderLogo: cA,
            BlockHeaderLayout: yA,
            get BLOCK_HEADER_CLASS() {
                return xm
            },
            GridSocialIcons: Lu,
            BlockHeaderButton: wA
        };
        return Object.defineProperty(f, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        f
    }
})
  , SA = {
    class: "block-header__nav-links"
};
function CA(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    y("header", {
        ref: "headerRef",
        class: J({
            [e.BLOCK_HEADER_CLASS]: !0,
            "block-header--with-shadow": e.isWithShadow
        }),
        style: ze(e.computedStyles)
    }, [e.props.background ? (m(),
    $(e.BlockHeaderBackground, {
        key: 0,
        type: e.props.background.current,
        "image-url": e.props.backgroundImageUrl,
        color: e.props.background.color,
        "overlay-opacity": Number(e.props.background["overlay-opacity"]),
        "is-transparent": e.isCurrentlyTransparent
    }, null, 8, ["type", "image-url", "color", "overlay-opacity", "is-transparent"])) : x("", !0), Le(e.BlockHeaderLayout, {
        layout: e.props.headerLayout,
        "mobile-layout": e.props.mHeaderLayout,
        "is-logo-visible": e.props.isLogoVisible,
        "is-language-switcher-visible": e.props.isLanguageSwitcherVisible,
        "are-social-icon-links-visible": e.isSocialIconsLinksVisible,
        "is-cart-visible": e.props.isCartVisible,
        "is-button-visible": e.isButtonVisible,
        "is-mobile-menu-dropdown-open": e.props.isOpen,
        "is-mobile-menu-dropdown-full-screen": e.props.isMobileMenuDropdownFullScreen,
        "mobile-links-alignment": e.props.mobileLinksAlignment
    }, {
        "hamburger-menu": ye( () => [e.props.items.length || e.props.isLanguageSwitcherVisible ? le((m(),
        $(e.ZyroHamburger, {
            key: 0,
            class: "block-header__hamburger-menu",
            "is-open": e.props.isOpen,
            onClick: n[0] || (n[0] = Re(s => t.$emit("toggle-visibility"), ["stop"]))
        }, null, 8, ["is-open"])), [[i, "builder-siteheader-btn-hamburger"]]) : x("", !0)]),
        logo: ye( () => [e.props.isLogoVisible ? (m(),
        $(e.BlockHeaderLogo, {
            key: 0,
            class: "block-header__logo",
            "logo-src": e.props.logoSrc,
            "logo-svg": e.props.logoSvg,
            href: e.props.logoHref,
            "site-name": e.props.siteName,
            "max-width": e.props.logoMaxWidth,
            "max-width-mobile": e.props.logoMaxWidthMobile,
            height: e.props.logoHeight,
            "height-mobile": e.props.logoHeightMobile,
            onClick: n[1] || (n[1] = s => t.$emit("logo-click"))
        }, null, 8, ["logo-src", "logo-svg", "href", "site-name", "max-width", "max-width-mobile", "height", "height-mobile"])) : x("", !0)]),
        nav: ye( () => [P("nav", {
            class: "block-header__nav",
            onClick: n[2] || (n[2] = s => e.emit("navigation-click"))
        }, [le((m(),
        y("ul", SA, [(m(!0),
        y(pe, null, Me(e.props.items, s => (m(),
        $(e.BlockHeaderItem, {
            key: s.id,
            item: s,
            "are-dropdowns-hidden": e.props.areDropdownsHidden
        }, null, 8, ["item", "are-dropdowns-hidden"]))), 128))])), [[i, "builder-siteheader-emptyspace"]])])]),
        "social-icons": ye( () => [e.props.socialIconsLinks.length ? (m(),
        $(e.GridSocialIcons, {
            key: 0,
            class: "block-header__social-icons",
            links: e.props.socialIconsLinks
        }, null, 8, ["links"])) : x("", !0)]),
        "language-switcher": ye( () => [e.props.isLanguageSwitcherVisible ? (m(),
        $(e.LanguageSwitcher, {
            key: 0,
            class: J(["block-header__language-switcher", {
                "mouse-disabled": e.props.areDropdownsHidden
            }]),
            languages: e.props.languageSwitcherLanguages,
            "current-locale": e.props.currentLocale
        }, null, 8, ["class", "languages", "current-locale"])) : x("", !0)]),
        cart: ye( () => [e.props.isCartVisible ? (m(),
        $(e.BlockHeaderCart, {
            key: 0,
            class: "block-header__cart",
            "cart-text": e.props.cartText,
            "items-in-cart": e.props.itemsInCart,
            "cart-icon-size": e.props.cartIconSize,
            onCartClick: n[3] || (n[3] = s => t.$emit("cart-click"))
        }, null, 8, ["cart-text", "items-in-cart", "cart-icon-size"])) : x("", !0)]),
        button: ye( () => [e.isButtonVisible && e.props.buttonElementId ? (m(),
        $(e.BlockHeaderButton, {
            key: 0,
            class: "block-header__button",
            "element-id": e.props.buttonElementId,
            data: e.props.buttonElementData
        }, null, 8, ["element-id", "data"])) : x("", !0)]),
        _: 1
    }, 8, ["layout", "mobile-layout", "is-logo-visible", "is-language-switcher-visible", "are-social-icon-links-visible", "is-cart-visible", "is-button-visible", "is-mobile-menu-dropdown-open", "is-mobile-menu-dropdown-full-screen", "mobile-links-alignment"])], 6)
}
const TA = oe(kA, [["render", CA], ["__scopeId", "data-v-6a1ef1e7"]])
  , IA = t => {
    const a = t.current === "image" ? `url(${t[t.current]})` : t[t.current];
    return {
        [`--background-${t.current}`]: a
    }
}
  , PA = ({siteId: t, meta: n, blocks: a, nav: e, pages: r, elements: o, languageMetaTitle: i, languageSwitcherLanguages: s, currentLocale: l, currentPageId: d, shoppingCartItemCount: p, isOpen: g, getPagePathFromId: h}) => {
    const {defaultLocale: f} = n
      , {background: _, settings: A, fontWeight: E, fontFamily: w, navLinkTextColor: k, navLinkTextColorHover: O, mobile: I, desktop: R} = a.header
      , {imageOrigin: Y, imagePath: G} = _
      , {cartText: X, isCartVisible: q, isLanguageSwitcherHidden: D, isSticky: j, logoPlacement: z, navigationPlacement: ee, showLogo: F, styles: S, logoImageOrigin: N, logoImagePath: M, logoSvg: W, headerLayout: b, mHeaderLayout: v, isMobileMenuDropdownFullScreen: L, mobileLinksAlignment: B} = A
      , K = {
        ...ga(S),
        ...IA(_)
    }
      , Z = () => {
        const Pe = Number.parseInt(S["logo-width"], 10);
        return It(N, M, t, {
            width: Pe * 2,
            quality: 95
        })
    }
      , H = () => It(Y, G, t, {
        width: Ja
    })
      , C = Pe => {
        const {navItemId: ot, linkType: xt, linkedPageId: Mt, isHidden: ca, rel: Qt, href: ua, target: gt, name: Te, subItems: We=[]} = Pe;
        return {
            navItemId: ot,
            hasDropdown: !!We.length,
            isCurrent: d === Mt,
            subItems: We.map(C),
            target: gt,
            name: xt === bl ? r[Mt]?.name : Te,
            isHidden: ca,
            rel: Qt,
            href: xt === bl ? h({
                pageId: Mt
            }) : ua,
            locale: l
        }
    }
      , me = e.filter( ({isHidden: Pe}) => !Pe).map(C)
      , ke = q && n.ecommerceType === "zyro"
      , ue = !!s.length && !D && l !== gn
      , Se = i ?? n.metaTitle
      , ve = a.header.components.find(Pe => o[Pe].type === ru)
      , Q = o[ve]?.links || []
      , ie = o[ve]?.settings?.styles || {}
      , Ee = a.header.components.find(Pe => o[Pe].type === nu)
      , ge = o[Ee];
    return {
        background: _,
        backgroundColor: _.color,
        backgroundImageUrl: H(),
        backgroundColorContrast: S.contrastBackgroundColor,
        cartText: X,
        cartIconSize: S.cartIconSize,
        currentLocale: l,
        height: R.height,
        heightMobile: I.height,
        fontFamily: w,
        navLinkTextColor: k,
        navLinkTextColorHover: O,
        fontWeight: E,
        isTransparent: _.isTransparent,
        items: me,
        isCartVisible: ke,
        itemsInCart: p,
        isSticky: j,
        isLanguageSwitcherVisible: ue,
        isLogoVisible: F,
        isOpen: g,
        languageSwitcherLanguages: s,
        logoHeight: R.logoHeight,
        logoHeightMobile: I.logoHeight,
        logoHref: l !== f && l !== gn ? `/${l}` : "/",
        logoMaxWidth: S["logo-width"],
        logoMaxWidthMobile: S["m-logo-width"],
        logoPlacement: z,
        logoPlacementMobile: A["m-logoPlacement"] || z,
        logoSrc: Z(),
        logoSvg: W,
        style: K,
        siteName: Se,
        socialIconsLinks: Q,
        socialIconsStyles: ie,
        buttonElementId: Ee,
        buttonElementData: ge,
        navigationPlacement: ee,
        navigationPlacementMobile: A["m-navigationPlacement"] || ee,
        headerLayout: b,
        mHeaderLayout: v,
        isMobileMenuDropdownFullScreen: L,
        mobileLinksAlignment: B
    }
}
  , EA = re({
    __name: "Lightbox",
    setup(t, {expose: n}) {
        n();
        const {currentLightboxImageIndex: a, currentLightboxImage: e, closeLightbox: r, isLightboxOpen: o, isImageGalleryMode: i, handleLightboxNav: s, goToNextImage: l, goToPreviousImage: d} = ur()
          , p = T(null)
          , g = T(null)
          , h = ju(p, !0)
          , {enableMoveEvents: f} = Ku({
            move: {
                drag: !0,
                swipe: !0
            },
            onMoveLeft: l,
            onMoveRight: d
        });
        xe(async () => {
            p.value = document.body,
            ri(g, A => {
                A.target.matches("[data-lightbox-button],[data-lightbox-nav]") || r()
            }
            ),
            f(),
            window.document.addEventListener("keydown", s)
        }
        ),
        Zt( () => {
            h.value = !1,
            r(),
            f(!1),
            document.removeEventListener("keydown", s)
        }
        );
        const _ = {
            currentLightboxImageIndex: a,
            currentLightboxImage: e,
            closeLightbox: r,
            isLightboxOpen: o,
            isImageGalleryMode: i,
            handleLightboxNav: s,
            goToNextImage: l,
            goToPreviousImage: d,
            bodyElement: p,
            lightboxRef: g,
            isBodyScrollLocked: h,
            enableMoveEvents: f
        };
        return Object.defineProperty(_, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        _
    }
})
  , DA = {
    key: 0,
    class: "lightbox",
    role: "dialog",
    "aria-modal": "true"
}
  , AA = {
    class: "lightbox__container"
}
  , MA = P("button", {
    class: "lightbox__button lightbox__button--nav lightbox__button--prev",
    "data-lightbox-button": ""
}, null, -1)
  , OA = [MA]
  , xA = ["src", "alt"]
  , BA = P("button", {
    "data-lightbox-button": "",
    class: "lightbox__button lightbox__button--nav lightbox__button--next"
}, null, -1)
  , LA = [BA];
function RA(t, n, a, e, r, o) {
    const i = st("qa");
    return m(),
    $(ra, {
        name: "fade",
        appear: ""
    }, {
        default: ye( () => [e.isLightboxOpen ? le((m(),
        y("div", DA, [P("button", {
            class: "lightbox__button lightbox__button--close",
            title: "close-ligthbox-button",
            "data-lightbox-button": "",
            onClick: n[0] || (n[0] = (...s) => e.closeLightbox && e.closeLightbox(...s))
        }), P("div", AA, [P("div", {
            class: J(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: n[1] || (n[1] = (...s) => e.goToPreviousImage && e.goToPreviousImage(...s))
        }, OA, 2), Le(ra, {
            name: "fade",
            mode: "out-in"
        }, {
            default: ye( () => [(m(),
            y("img", {
                key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                ref: "lightboxRef",
                class: J(["lightbox__image", {
                    "lightbox__image--multiple": e.isImageGalleryMode,
                    "lightbox__image--single": !e.isImageGalleryMode
                }]),
                src: e.currentLightboxImage.src,
                alt: e.currentLightboxImage.alt
            }, null, 10, xA))]),
            _: 1
        }), P("div", {
            class: J(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: n[2] || (n[2] = (...s) => e.goToNextImage && e.goToNextImage(...s))
        }, LA, 2)])])), [[i, "lightbox"]]) : x("", !0)]),
        _: 1
    })
}
const NA = oe(EA, [["render", RA]])
  , HA = re({
    __name: "Page",
    props: {
        pageData: {},
        isInPreviewMode: {
            type: Boolean
        },
        isPreviewMobileView: {
            type: Boolean
        },
        currentPreviewProductPageId: {}
    },
    setup(t, {expose: n}) {
        n(),
        ft(fe => ({
            "593c7bbe": ot.value
        }));
        const a = t
          , {pages: e, blocks: r, elements: o, nav: i, meta: s, metaTitle: l, ecommerceShoppingCart: d, cookieBannerDisclaimer: p, cookieBannerAcceptText: g, cookieBannerDeclineText: h, currentLocale: f, languageSwitcherLanguages: _, siteId: A, homePageId: E, styles: w, isNavHidden: k, currentPageId: O, currentPageData: I, getPagePathFromId: R, setPageData: Y, isDynamicProductPageEnabled: G} = _t()
          , {isStoreTypeZyro: X, shoppingCartItemCount: q, setShoppingCartOpen: D, areAllEcommerceProductListBlocksLoaded: j, isShoppingCartOpen: z, getStoreSettingsData: ee, getCartData: F} = Ea()
          , {isLightboxOpen: S} = ur()
          , N = Fm()
          , {shouldMountAnimationsInPreview: M} = dr()
          , W = T(!1)
          , b = T(null)
          , v = T(0)
          , {width: L} = Pb(b)
          , B = u( () => L.value <= ar)
          , K = u( () => I.value.type)
          , Z = u( () => K.value === Bm)
          , H = u( () => ga(w.value))
          , C = u( () => !k.value && !Z.value)
          , me = u( () => r.value[Do] && !Z.value)
          , ke = u( () => O.value === E.value)
          , ue = u( () => e.value?.[E.value]?.name ?? "")
          , Se = u( () => r.value.header.settings.isSticky)
          , ve = u( () => !I.value?.meta?.password || a.isInPreviewMode)
          , Q = u( () => {
            if (!I.value || I.value.footerSlotIsHidden || Z.value)
                return [];
            const fe = Object.keys(r.value).find(vt => r.value[vt].slot === "footer");
            return fe ? [fe] : []
        }
        )
          , ie = u( () => I.value ? [...I.value.blocks.filter(fe => fe !== Do), ...Q.value] : [])
          , Ee = u( () => PA({
            siteId: A.value,
            meta: s.value,
            blocks: r.value,
            nav: i.value,
            pages: e.value,
            elements: o.value,
            languageMetaTitle: l.value,
            currentLocale: f.value,
            currentPageId: O.value,
            shoppingCartItemCount: q.value,
            languageSwitcherLanguages: _.value,
            getPagePathFromId: ({pageId: fe}) => R({
                pageId: fe
            }),
            isOpen: W.value
        }))
          , ge = u( () => Ee.value.height)
          , Pe = u( () => Ee.value.heightMobile)
          , ot = u( () => `${Pe.value + v.value}px`)
          , xt = u( () => s.value.defaultLocale ?? gn)
          , Mt = u( () => X.value ? d.value?.translations ?? {} : {})
          , ca = u( () => X.value ? d.value?.lang ?? "en" : null)
          , Qt = u( () => ie.value.find(fe => !r.value[fe][Pn]?.isHidden))
          , ua = u( () => ie.value.find(fe => !r.value[fe][Oa]?.isHidden))
          , gt = u( () => {
            const {isTransparent: fe} = r.value.header.background ?? {};
            if (fe && C.value && Pe.value)
                return `${Pe.value}px`
        }
        )
          , Te = u( () => {
            const {isTransparent: fe} = r.value.header.background ?? {};
            if (fe && C.value && ge.value)
                return `${ge.value}px`
        }
        )
          , We = fe => ({
            ...Qt.value === fe && {
                "--header-height": Te.value
            },
            ...ua.value === fe && {
                "--header-height-mobile": gt.value
            }
        })
          , Qe = u( () => {
            const [fe] = I.value?.blocks ?? [];
            if (r.value?.[fe]?.background?.current === "image")
                return {
                    type: "block-background",
                    id: fe
                };
            if (r.value?.[fe]?.type === "BlockBlogList")
                return {
                    type: "block-blog-list",
                    id: fe
                };
            if (r.value?.[fe]?.type === "BlockEcommerceProduct")
                return {
                    type: "block-ecommerce-product",
                    id: fe
                };
            if (r.value?.[fe]?.type === "BlockEcommerceProductList")
                return {
                    type: "block-ecommerce-product-list",
                    id: fe
                };
            const kt = ie.value.filter(de => (r?.value?.[de]?.components?.length ?? 0) > 0).flatMap(de => (r?.value?.[de]?.components ?? []).map(Be => ({
                blockId: de,
                elementId: Be
            }))).filter( ({elementId: de}) => o.value[de]?.type === "GridImage").map( ({blockId: de, elementId: Be}) => {
                const Ae = o.value[Be]
                  , Bt = Ae.mobile ?? Ae.desktop
                  , {width: jt, height: Ya} = Bt ?? av(r.value[de], Ae.settings.styles.position);
                return {
                    elementId: Be,
                    imageRatio: Ya / jt
                }
            }
            )[0];
            return kt ? {
                type: "grid-image",
                id: kt?.elementId
            } : {}
        }
        )
          , pt = async ({hash: fe, isPreviewMode: vt}) => {
            j.value || await new Promise(kt => {
                const de = setInterval( () => {
                    j.value && (clearInterval(de),
                    kt(null))
                }
                , 50)
            }
            ),
            await Ot(),
            fe || window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            }),
            Oo({
                linkToSection: fe,
                isPreviewMode: vt
            })
        }
          , U = fe => {
            const {target: vt, href: kt} = fe
              , Be = vt === "_blank" || ir() || a.isInPreviewMode ? "_blank" : "_self";
            window.open(kt, Be)
        }
          , ae = async fe => {
            if (!fe.target)
                return;
            const vt = fe.target.closest("a");
            if (!vt)
                return;
            const {href: kt, pathname: de, origin: Be, hash: Ae, target: Bt} = vt;
            if (!kt || vt.hasAttribute(ou))
                return;
            if (fe.preventDefault(),
            window.location.origin !== Be) {
                U(vt);
                return
            }
            const Ya = window.location.pathname === de
              , _r = Bt === "_blank"
              , jn = kt.replace(Be, "")
              , bo = `${window.location.pathname}${window.location.search}${window.location.hash}`
              , wr = u( () => N?.currentRoute?.value.name === au);
            if (Ya && !_r && pt({
                hash: Ae,
                isPreviewMode: a.isInPreviewMode
            }),
            _r && !a.isInPreviewMode && !ir())
                window.open(kt, Bt);
            else if (_r && a.isInPreviewMode || bo !== jn) {
                if (a.isInPreviewMode || wr.value) {
                    const _o = jn.split("#")[0];
                    await N.push(_o)
                } else
                    window.location.assign(jn);
                Ae && pt({
                    hash: Ae,
                    isPreviewMode: a.isInPreviewMode
                }),
                W.value = !1
            }
        }
          , Ie = () => {
            const fe = Ju();
            X.value && fe && (ee(),
            F())
        }
        ;
        je( () => a.pageData, fe => {
            Y(fe)
        }
        , {
            immediate: !0
        }),
        je( () => a.pageData, async () => {
            a.isInPreviewMode && (M.value = !0)
        }
        ),
        xe( () => {
            Ie(),
            v.value = document.querySelector(".block-sticky-bar")?.clientHeight ?? 0;
            const {hash: fe} = window.location;
            fe && pt({
                hash: fe,
                isPreviewMode: a.isInPreviewMode
            })
        }
        );
        const He = {
            props: a,
            pages: e,
            blocks: r,
            elements: o,
            nav: i,
            meta: s,
            metaTitle: l,
            ecommerceShoppingCart: d,
            cookieBannerDisclaimer: p,
            cookieBannerAcceptText: g,
            cookieBannerDeclineText: h,
            currentLocale: f,
            languageSwitcherLanguages: _,
            siteId: A,
            homePageId: E,
            styles: w,
            isNavHidden: k,
            currentPageId: O,
            currentPage: I,
            getPagePathFromId: R,
            setPageData: Y,
            isDynamicProductPageEnabled: G,
            isStoreTypeZyro: X,
            shoppingCartItemCount: q,
            setShoppingCartOpen: D,
            areAllEcommerceProductListBlocksLoaded: j,
            isShoppingCartOpen: z,
            getStoreSettingsData: ee,
            getCartData: F,
            isLightboxOpen: S,
            router: N,
            shouldMountAnimationsInPreview: M,
            isNavOpen: W,
            blockListRef: b,
            stickyBarHeight: v,
            screenWidth: L,
            isMobile: B,
            currentPageType: K,
            isCurrentPagePrivate: Z,
            pageCSSVars: H,
            isHeaderVisible: C,
            isStickyBarVisible: me,
            isCurrentPageHomepage: ke,
            homepageName: ue,
            isHeaderSettingsSticky: Se,
            shouldRenderPage: ve,
            pageBlocksSlotFooter: Q,
            currentPageBlocks: ie,
            headerProps: Ee,
            headerHeight: ge,
            headerHeightMobile: Pe,
            topBarHeightMobilePx: ot,
            defaultLocale: xt,
            ecommerceTranslations: Mt,
            language: ca,
            firstVisibleDesktopBlockId: Qt,
            firstVisibleMobileBlockId: ua,
            visibleMobileHeaderHeight: gt,
            visibleDesktopHeaderHeight: Te,
            getHeaderHeightStyles: We,
            lcp: Qe,
            scrollToHash: pt,
            redirectToThirdPartyLink: U,
            handleGlobalClick: ae,
            getEcommerceData: Ie,
            StickyTrigger: tv,
            CookieBanner: wv,
            BlockUser: Mk,
            BlockStickyBarProviderUser: Nk,
            PasswordPage: n1,
            EcommerceShoppingCartProviderUser: Y1,
            EcommerceModalRoot: nD,
            BlockHeader: TA,
            Lightbox: NA,
            get BLOCK_STICKY_BAR_ID() {
                return Do
            }
        };
        return Object.defineProperty(He, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        He
    }
})
  , VA = {
    ref: "blockListRef",
    class: "blocks"
};
function UA(t, n, a, e, r, o) {
    return m(),
    y(pe, null, [e.shouldRenderPage ? (m(),
    y("main", {
        key: 0,
        style: ze(e.pageCSSVars),
        class: "page",
        onClick: e.handleGlobalClick
    }, [e.isHeaderSettingsSticky ? (m(),
    $(e.StickyTrigger, {
        key: 0
    })) : x("", !0), !e.isHeaderSettingsSticky && e.isStickyBarVisible ? (m(),
    $(e.BlockStickyBarProviderUser, {
        key: 1,
        "data-block-id": e.BLOCK_STICKY_BAR_ID,
        data: e.blocks[e.BLOCK_STICKY_BAR_ID],
        components: e.elements,
        lcp: e.lcp
    }, null, 8, ["data-block-id", "data", "components", "lcp"])) : x("", !0), P("div", {
        class: J(["top-blocks", {
            "top-blocks--sticky": e.headerProps.isSticky,
            "top-blocks--preview-mode": e.props.isInPreviewMode
        }])
    }, [e.isHeaderSettingsSticky && e.isStickyBarVisible ? (m(),
    $(e.BlockStickyBarProviderUser, {
        key: 0,
        "data-block-id": e.BLOCK_STICKY_BAR_ID,
        data: e.blocks[e.BLOCK_STICKY_BAR_ID],
        components: e.elements,
        lcp: e.lcp
    }, null, 8, ["data-block-id", "data", "components", "lcp"])) : x("", !0), e.isHeaderVisible ? (m(),
    $(e.BlockHeader, et({
        key: 1
    }, e.headerProps, {
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-preview-mobile-view": a.isPreviewMobileView,
        "block-sticky-bar": e.blocks[e.BLOCK_STICKY_BAR_ID],
        onToggleVisibility: n[0] || (n[0] = i => e.isNavOpen = !e.isNavOpen),
        onCartClick: n[1] || (n[1] = i => e.setShoppingCartOpen(!e.isShoppingCartOpen))
    }), null, 16, ["is-in-preview-mode", "is-preview-mobile-view", "block-sticky-bar"])) : x("", !0)], 2), P("div", VA, [(m(!0),
    y(pe, null, Me(e.currentPageBlocks, i => (m(),
    $(e.BlockUser, {
        id: e.blocks[i].htmlId || i,
        key: `${e.currentPageId}-${i}`,
        data: e.blocks[i],
        blocks: e.blocks,
        lcp: e.lcp,
        "page-id": e.currentPageId,
        "ecommerce-translations": e.ecommerceTranslations,
        "current-page-type": e.currentPageType,
        components: e.elements,
        "screen-width": e.screenWidth,
        style: ze(e.getHeaderHeightStyles(i)),
        "current-locale": e.currentLocale,
        "is-cart-visible": e.headerProps.isCartVisible,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-first-visible-desktop-block": e.firstVisibleDesktopBlockId === i,
        "is-first-visible-mobile-block": e.firstVisibleMobileBlockId === i,
        "is-dynamic-product-page-enabled": e.isDynamicProductPageEnabled,
        "current-preview-product-page-id": a.currentPreviewProductPageId
    }, null, 8, ["id", "data", "blocks", "lcp", "page-id", "ecommerce-translations", "current-page-type", "components", "screen-width", "style", "current-locale", "is-cart-visible", "is-in-preview-mode", "is-first-visible-desktop-block", "is-first-visible-mobile-block", "is-dynamic-product-page-enabled", "current-preview-product-page-id"]))), 128))], 512), e.meta.isCookieBarEnabled && !e.isCurrentPagePrivate ? (m(),
    $(e.CookieBanner, {
        key: 2,
        disclaimer: e.cookieBannerDisclaimer || "",
        "accept-text": e.cookieBannerAcceptText,
        "decline-text": e.cookieBannerDeclineText,
        "site-meta": e.meta
    }, null, 8, ["disclaimer", "accept-text", "decline-text", "site-meta"])) : x("", !0), e.headerProps.isCartVisible ? (m(),
    $(e.EcommerceShoppingCartProviderUser, {
        key: 3,
        "ecommerce-translations": e.ecommerceTranslations,
        language: e.language,
        "sticky-bar-height": e.stickyBarHeight,
        "is-header-sticky": e.headerProps.isSticky,
        "is-nav-hidden": !e.isHeaderVisible,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-mobile": e.isMobile
    }, null, 8, ["ecommerce-translations", "language", "sticky-bar-height", "is-header-sticky", "is-nav-hidden", "is-in-preview-mode", "is-mobile"])) : x("", !0), Le(e.EcommerceModalRoot, {
        "ecommerce-translations": e.ecommerceTranslations,
        language: e.language,
        "current-locale": e.currentLocale,
        "is-cart-visible": e.headerProps.isCartVisible,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, null, 8, ["ecommerce-translations", "language", "current-locale", "is-cart-visible", "is-in-preview-mode"])], 4)) : (m(),
    $(e.PasswordPage, {
        key: 1,
        "site-id": e.siteId,
        "page-id": e.currentPageId,
        locale: e.currentLocale,
        "default-locale": e.defaultLocale,
        "in-preview-mode": a.isInPreviewMode,
        "current-page-data": e.currentPage,
        "homepage-name": e.homepageName,
        "is-current-page-homepage": e.isCurrentPageHomepage
    }, null, 8, ["site-id", "page-id", "locale", "default-locale", "in-preview-mode", "current-page-data", "homepage-name", "is-current-page-homepage"])), e.isLightboxOpen ? (m(),
    $(e.Lightbox, {
        key: 2
    })) : x("", !0)], 64)
}
const qA = oe(HA, [["render", UA]]);
export {qA as default};
