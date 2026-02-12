var ja = Object.defineProperty;
var za = (e) => {
  throw TypeError(e);
};
var _i = (e, t, n) => t in e ? ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => ja(e, "name", { value: t, configurable: !0 });
var Qe = (e, t, n) => _i(e, typeof t != "symbol" ? t + "" : t, n), ea = (e, t, n) => t.has(e) || za("Cannot " + n);
var b = (e, t, n) => (ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), V = (e, t, n) => t.has(e) ? za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), G = (e, t, n, a) => (ea(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), ge = (e, t, n) => (ea(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), hi = /* @__PURE__ */ Symbol("filename"), bi = "http://www.w3.org/1999/xhtml", Ua = globalThis.process?.env?.NODE_ENV, T = Ua && !Ua.toLowerCase().startsWith("prod");
var sr = Array.isArray, mi = Array.prototype.indexOf, Pt = Array.prototype.includes, Un = Array.from, Rt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, pi = Object.getOwnPropertyDescriptors, gi = Object.prototype, yi = Array.prototype, or = Object.getPrototypeOf, Ba = Object.isExtensible;
const ta = /* @__PURE__ */ r(() => {
}, "noop");
function wi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(wi, "run_all");
function lr() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(lr, "deferred");
function Ei(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(Ei, "to_array");
const me = 2, la = 4, Bn = 8, cr = 1 << 24, ft = 16, Je = 32, jt = 64, Ta = 128, Re = 512, de = 1024, pe = 2048, Ye = 4096, De = 8192, bt = 16384, Aa = 32768, tn = 65536, Wn = 1 << 17, ur = 1 << 18, ln = 1 << 19, Si = 1 << 20, lt = 1 << 25, Et = 32768, ca = 1 << 21, qn = 1 << 22, mt = 1 << 23, Vt = /* @__PURE__ */ Symbol("$state"), xi = /* @__PURE__ */ Symbol(""), fr = /* @__PURE__ */ Symbol("proxy path");
var Gt;
const Bt = new (Gt = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(Gt, "StaleReactionError"), Gt)();
function ki(e) {
  if (T) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(ki, "lifecycle_outside_component");
function Ni() {
  if (T) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Ni, "async_derived_orphan");
function qa() {
  if (T) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(qa, "bind_invalid_checkbox_value");
function Ti() {
  if (T) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Ti, "derived_references_self");
function dr(e, t, n) {
  if (T) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(dr, "each_key_duplicate");
function Ai(e) {
  if (T) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Ai, "effect_in_teardown");
function Ii() {
  if (T) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Ii, "effect_in_unowned_derived");
function Ci(e) {
  if (T) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Ci, "effect_orphan");
function Di() {
  if (T) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Di, "effect_update_depth_exceeded");
function Mi(e) {
  if (T) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Mi, "rune_outside_svelte");
function Wi() {
  if (T) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(Wi, "state_descriptors_fixed");
function Oi() {
  if (T) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(Oi, "state_prototype_fixed");
function Li() {
  if (T) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Li, "state_unsafe_mutation");
function Pi() {
  if (T) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(Pi, "svelte_boundary_reset_onerror");
var Kn = "font-weight: bold", Vn = "font-weight: normal";
function Ri() {
  T ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Kn, Vn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(Ri, "lifecycle_double_unmount");
function na(e) {
  T ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Kn, Vn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(na, "state_proxy_equality_mismatch");
function Hi() {
  T ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Kn, Vn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Hi, "state_proxy_unmount");
function Fi() {
  T ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Kn, Vn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(Fi, "svelte_boundary_reset_noop");
function vr(e) {
  return e === this.v;
}
r(vr, "equals");
function _r(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(_r, "safe_not_equal");
function hr(e) {
  return !_r(e, this.v);
}
r(hr, "safe_equals");
let ji = !1;
function Xe(e, t) {
  return e.label = t, br(e.v, t), e;
}
r(Xe, "tag");
function br(e, t) {
  return e?.[fr]?.(t), e;
}
r(br, "tag_proxy");
function zi(e) {
  const t = new Error(), n = Ui();
  return n.length === 0 ? null : (n.unshift(`
`), Rt(t, "stack", {
    value: n.join(`
`)
  }), Rt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(zi, "get_error");
function Ui() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), a = [];
  for (let s = 0; s < n.length; s++) {
    const i = n[s], o = i.replaceAll("\\", "/");
    if (i.trim() !== "Error") {
      if (i.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || a.push(i);
    }
  }
  return a;
}
r(Ui, "get_stack");
let be = null;
function nn(e) {
  be = e;
}
r(nn, "set_component_context");
let mn = null;
function On(e) {
  mn = e;
}
r(On, "set_dev_stack");
let Sn = null;
function Ka(e) {
  Sn = e;
}
r(Ka, "set_dev_current_component_function");
function An(e, t) {
  return Bi("setContext").set(e, t), t;
}
r(An, "setContext");
function we(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, T && (be.function = n, Sn = n);
}
r(we, "push");
function Ee(e) {
  var t = (
    /** @type {ComponentContext} */
    be
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Pr(a);
  }
  return t.i = !0, be = t.p, T && (Sn = be?.function ?? null), /** @type {T} */
  {};
}
r(Ee, "pop");
function mr() {
  return !0;
}
r(mr, "is_runes");
function Bi(e) {
  return be === null && ki(e), be.c ??= new Map(qi(be) || void 0);
}
r(Bi, "get_or_init_context_map");
function qi(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
r(qi, "get_parent_context");
let kt = [];
function pr() {
  var e = kt;
  kt = [], wi(e);
}
r(pr, "run_micro_tasks");
function pt(e) {
  if (kt.length === 0 && !hn) {
    var t = kt;
    queueMicrotask(() => {
      t === kt && pr();
    });
  }
  kt.push(e);
}
r(pt, "queue_micro_task");
function Ki() {
  for (; kt.length > 0; )
    pr();
}
r(Ki, "flush_tasks");
const ua = /* @__PURE__ */ new WeakMap();
function gr(e) {
  var t = te;
  if (t === null)
    return Z.f |= mt, e;
  if (T && e instanceof Error && !ua.has(e) && ua.set(e, Vi(e, t)), (t.f & Aa) === 0) {
    if ((t.f & Ta) === 0)
      throw T && !t.parent && e instanceof Error && yr(e), e;
    t.b.error(e);
  } else
    an(e, t);
}
r(gr, "handle_error");
function an(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ta) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw T && e instanceof Error && yr(e), e;
}
r(an, "invoke_error_boundary");
function Vi(e, t) {
  const n = Kt(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = Wa ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[hi].split("/").pop()}`, i = i.p;
    return {
      message: e.message + `
${s}
`,
      stack: e.stack?.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
r(Vi, "get_adjustments");
function yr(e) {
  const t = ua.get(e);
  t && (Rt(e, "message", {
    value: t.message
  }), Rt(e, "stack", {
    value: t.stack
  }));
}
r(yr, "apply_adjustments");
const Gi = -7169;
function ce(e, t) {
  e.f = e.f & Gi | t;
}
r(ce, "set_signal_status");
function Ia(e) {
  (e.f & Re) !== 0 || e.deps === null ? ce(e, de) : ce(e, Ye);
}
r(Ia, "update_derived_status");
function wr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & Et) === 0 || (t.f ^= Et, wr(
        /** @type {Derived} */
        t.deps
      ));
}
r(wr, "clear_marked");
function Er(e, t, n) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & Ye) !== 0 && n.add(e), wr(e.deps), ce(e, de);
}
r(Er, "defer_effect");
const In = /* @__PURE__ */ new Set();
let re = null, fa = null, qe = null, ke = [], Gn = null, da = !1, hn = !1;
var Yt, Jt, Tt, Qt, gn, yn, At, st, Xt, at, va, _a, Sr;
const Hn = class Hn {
  constructor() {
    V(this, at);
    Qe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Qe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Qe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    V(this, Yt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    V(this, Jt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    V(this, Tt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    V(this, Qt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    V(this, gn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    V(this, yn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    V(this, At, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    V(this, st, /* @__PURE__ */ new Map());
    Qe(this, "is_fork", !1);
    V(this, Xt, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, Qt) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, st).has(t) || b(this, st).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, st).get(t);
    if (n) {
      b(this, st).delete(t);
      for (var a of n.d)
        ce(a, pe), Ke(a);
      for (a of n.m)
        ce(a, Ye), Ke(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    ke = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      ge(this, at, va).call(this, s, n, a);
    if (this.is_deferred()) {
      ge(this, at, _a).call(this, a), ge(this, at, _a).call(this, n);
      for (const [s, i] of b(this, st))
        Tr(s, i);
    } else {
      for (const s of b(this, Yt)) s();
      b(this, Yt).clear(), b(this, Tt) === 0 && ge(this, at, Sr).call(this), fa = this, re = null, Va(a), Va(n), fa = null, b(this, gn)?.resolve();
    }
    qe = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & mt) === 0 && (this.current.set(t, t.v), qe?.set(t, t.v));
  }
  activate() {
    re = this, this.apply();
  }
  deactivate() {
    re === this && (re = null, qe = null);
  }
  flush() {
    if (this.activate(), ke.length > 0) {
      if (xr(), re !== null && re !== this)
        return;
    } else b(this, Tt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, Jt)) t(this);
    b(this, Jt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    G(this, Tt, b(this, Tt) + 1), t && G(this, Qt, b(this, Qt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    G(this, Tt, b(this, Tt) - 1), t && G(this, Qt, b(this, Qt) - 1), !b(this, Xt) && (G(this, Xt, !0), pt(() => {
      G(this, Xt, !1), this.is_deferred() ? ke.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, yn))
      b(this, At).delete(t), ce(t, pe), Ke(t);
    for (const t of b(this, At))
      ce(t, Ye), Ke(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, Yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, Jt).add(t);
  }
  settled() {
    return (b(this, gn) ?? G(this, gn, lr())).promise;
  }
  static ensure() {
    if (re === null) {
      const t = re = new Hn();
      In.add(re), hn || pt(() => {
        re === t && t.flush();
      });
    }
    return re;
  }
  apply() {
  }
};
Yt = new WeakMap(), Jt = new WeakMap(), Tt = new WeakMap(), Qt = new WeakMap(), gn = new WeakMap(), yn = new WeakMap(), At = new WeakMap(), st = new WeakMap(), Xt = new WeakMap(), at = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
va = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= de;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & (Je | jt)) !== 0, l = c && (o & de) !== 0, f = l || (o & De) !== 0 || b(this, st).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= de : i !== null && (o & (la | Bn | cr)) !== 0 ? i.b.defer_effect(s) : (o & la) !== 0 ? n.push(s) : kn(s) && ((o & ft) !== 0 && b(this, At).add(s), pn(s));
      var v = s.first;
      if (v !== null) {
        s = v;
        continue;
      }
    }
    var d = s.parent;
    for (s = s.next; s === null && d !== null; )
      d === i && (i = null), s = d.next, d = d.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
_a = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Er(t[n], b(this, yn), b(this, At));
}, "#defer_effects"), Sr = /* @__PURE__ */ r(function() {
  var s;
  if (In.size > 1) {
    this.previous.clear();
    var t = qe, n = !0;
    for (const i of In) {
      if (i === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [l, f] of this.current) {
        if (i.current.has(l))
          if (n && f !== i.current.get(l))
            i.current.set(l, f);
          else
            continue;
        o.push(l);
      }
      if (o.length === 0)
        continue;
      const c = [...i.current.keys()].filter((l) => !this.current.has(l));
      if (c.length > 0) {
        var a = ke;
        ke = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const v of o)
          kr(v, c, l, f);
        if (ke.length > 0) {
          re = i, i.apply();
          for (const v of ke)
            ge(s = i, at, va).call(s, v, [], []);
          i.deactivate();
        }
        ke = a;
      }
    }
    re = null, qe = t;
  }
  this.committed = !0, In.delete(this);
}, "#commit"), r(Hn, "Batch");
let gt = Hn;
function Yi(e) {
  var t = hn;
  hn = !0;
  try {
    for (var n; ; ) {
      if (Ki(), ke.length === 0 && (re?.flush(), ke.length === 0))
        return Gn = null, /** @type {T} */
        n;
      xr();
    }
  } finally {
    hn = t;
  }
}
r(Yi, "flushSync");
function xr() {
  da = !0;
  var e = T ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; ke.length > 0; ) {
      var n = gt.ensure();
      if (t++ > 1e3) {
        if (T) {
          var a = /* @__PURE__ */ new Map();
          for (const i of n.current.keys())
            for (const [o, c] of i.updated ?? []) {
              var s = a.get(o);
              s || (s = { error: c.error, count: 0 }, a.set(o, s)), s.count += c.count;
            }
          for (const i of a.values())
            i.error && console.error(i.error);
        }
        Ji();
      }
      if (n.process(ke), yt.clear(), T)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (ke = [], da = !1, Gn = null, T)
      for (
        const i of
        /** @type {Set<Source>} */
        e
      )
        i.updated = null;
  }
}
r(xr, "flush_effects");
function Ji() {
  try {
    Di();
  } catch (e) {
    T && Rt(e, "stack", { value: "" }), an(e, Gn);
  }
}
r(Ji, "infinite_loop_guard");
let rt = null;
function Va(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (bt | De)) === 0 && kn(a) && (rt = /* @__PURE__ */ new Set(), pn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? zr(a) : a.fn = null), rt?.size > 0)) {
        yt.clear();
        for (const s of rt) {
          if ((s.f & (bt | De)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            rt.has(o) && (rt.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (bt | De)) === 0 && pn(l);
          }
        }
        rt.clear();
      }
    }
    rt = null;
  }
}
r(Va, "flush_queued_effects");
function kr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & me) !== 0 ? kr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (qn | ft)) !== 0 && (i & pe) === 0 && Nr(s, t, a) && (ce(s, pe), Ke(
        /** @type {Effect} */
        s
      ));
    }
}
r(kr, "mark_effects");
function Nr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Pt.call(t, s))
        return !0;
      if ((s.f & me) !== 0 && Nr(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
r(Nr, "depends_on");
function Ke(e) {
  for (var t = Gn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (da && t === te && (n & ft) !== 0 && (n & ur) === 0)
      return;
    if ((n & (jt | Je)) !== 0) {
      if ((n & de) === 0) return;
      t.f ^= de;
    }
  }
  ke.push(t);
}
r(Ke, "schedule_effect");
function Tr(e, t) {
  if (!((e.f & Je) !== 0 && (e.f & de) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & Ye) !== 0 && t.m.push(e), ce(e, de);
    for (var n = e.first; n !== null; )
      Tr(n, t), n = n.next;
  }
}
r(Tr, "reset_branch");
function Ar(e) {
  let t = 0, n = Ht(0), a;
  return T && Xe(n, "createSubscriber version"), () => {
    Oa() && (u(n), Rr(() => (t === 0 && (a = Xr(() => e(() => bn(n)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, bn(n));
      });
    })));
  };
}
r(Ar, "createSubscriber");
var Qi = tn | ln | Ta;
function Xi(e, t, n) {
  new ha(e, t, n);
}
r(Xi, "boundary");
var We, Na, Ze, It, $e, Oe, xe, et, ot, vt, Ct, _t, Zt, Dt, $t, en, tt, Fn, ve, Zi, $i, ba, Cn, Dn, ma;
const Ha = class Ha {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    V(this, ve);
    /** @type {Boundary | null} */
    Qe(this, "parent");
    Qe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, We);
    /** @type {TemplateNode | null} */
    V(this, Na, null);
    /** @type {BoundaryProps} */
    V(this, Ze);
    /** @type {((anchor: Node) => void)} */
    V(this, It);
    /** @type {Effect} */
    V(this, $e);
    /** @type {Effect | null} */
    V(this, Oe, null);
    /** @type {Effect | null} */
    V(this, xe, null);
    /** @type {Effect | null} */
    V(this, et, null);
    /** @type {DocumentFragment | null} */
    V(this, ot, null);
    /** @type {TemplateNode | null} */
    V(this, vt, null);
    V(this, Ct, 0);
    V(this, _t, 0);
    V(this, Zt, !1);
    V(this, Dt, !1);
    /** @type {Set<Effect>} */
    V(this, $t, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    V(this, en, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    V(this, tt, null);
    V(this, Fn, Ar(() => (G(this, tt, Ht(b(this, Ct))), T && Xe(b(this, tt), "$effect.pending()"), () => {
      G(this, tt, null);
    })));
    G(this, We, t), G(this, Ze, n), G(this, It, a), this.parent = /** @type {Effect} */
    te.b, this.is_pending = !!b(this, Ze).pending, G(this, $e, La(() => {
      te.b = this;
      {
        var s = ge(this, ve, ba).call(this);
        try {
          G(this, Oe, Pe(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, _t) > 0 ? ge(this, ve, Dn).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, vt)?.remove();
      };
    }, Qi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Er(t, b(this, $t), b(this, en));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, Ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ge(this, ve, ma).call(this, t), G(this, Ct, b(this, Ct) + t), !(!b(this, tt) || b(this, Zt)) && (G(this, Zt, !0), pt(() => {
      G(this, Zt, !1), b(this, tt) && sn(b(this, tt), b(this, Ct));
    }));
  }
  get_effect_pending() {
    return b(this, Fn).call(this), u(
      /** @type {Source<number>} */
      b(this, tt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, Ze).onerror;
    let a = b(this, Ze).failed;
    if (b(this, Dt) || !n && !a)
      throw t;
    b(this, Oe) && (Ae(b(this, Oe)), G(this, Oe, null)), b(this, xe) && (Ae(b(this, xe)), G(this, xe, null)), b(this, et) && (Ae(b(this, et)), G(this, et, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Fi();
        return;
      }
      s = !0, i && Pi(), gt.ensure(), G(this, Ct, 0), b(this, et) !== null && Ot(b(this, et), () => {
        G(this, et, null);
      }), this.is_pending = this.has_pending_snippet(), G(this, Oe, ge(this, ve, Cn).call(this, () => (G(this, Dt, !1), Pe(() => b(this, It).call(this, b(this, We)))))), b(this, _t) > 0 ? ge(this, ve, Dn).call(this) : this.is_pending = !1;
    }, "reset");
    pt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        an(c, b(this, $e) && b(this, $e).parent);
      }
      a && G(this, et, ge(this, ve, Cn).call(this, () => {
        gt.ensure(), G(this, Dt, !0);
        try {
          return Pe(() => {
            a(
              b(this, We),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return an(
            c,
            /** @type {Effect} */
            b(this, $e).parent
          ), null;
        } finally {
          G(this, Dt, !1);
        }
      }));
    });
  }
};
We = new WeakMap(), Na = new WeakMap(), Ze = new WeakMap(), It = new WeakMap(), $e = new WeakMap(), Oe = new WeakMap(), xe = new WeakMap(), et = new WeakMap(), ot = new WeakMap(), vt = new WeakMap(), Ct = new WeakMap(), _t = new WeakMap(), Zt = new WeakMap(), Dt = new WeakMap(), $t = new WeakMap(), en = new WeakMap(), tt = new WeakMap(), Fn = new WeakMap(), ve = new WeakSet(), Zi = /* @__PURE__ */ r(function() {
  try {
    G(this, Oe, Pe(() => b(this, It).call(this, b(this, We))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), $i = /* @__PURE__ */ r(function() {
  const t = b(this, Ze).pending;
  t && (G(this, xe, Pe(() => t(b(this, We)))), pt(() => {
    var n = ge(this, ve, ba).call(this);
    G(this, Oe, ge(this, ve, Cn).call(this, () => (gt.ensure(), Pe(() => b(this, It).call(this, n))))), b(this, _t) > 0 ? ge(this, ve, Dn).call(this) : (Ot(
      /** @type {Effect} */
      b(this, xe),
      () => {
        G(this, xe, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ba = /* @__PURE__ */ r(function() {
  var t = b(this, We);
  return this.is_pending && (G(this, vt, wt()), b(this, We).before(b(this, vt)), t = b(this, vt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Cn = /* @__PURE__ */ r(function(t) {
  var n = te, a = Z, s = be;
  Ge(b(this, $e)), Fe(b(this, $e)), nn(b(this, $e).ctx);
  try {
    return t();
  } catch (i) {
    return gr(i), null;
  } finally {
    Ge(n), Fe(a), nn(s);
  }
}, "#run"), Dn = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, Ze).pending
  );
  b(this, Oe) !== null && (G(this, ot, document.createDocumentFragment()), b(this, ot).append(
    /** @type {TemplateNode} */
    b(this, vt)
  ), qr(b(this, Oe), b(this, ot))), b(this, xe) === null && G(this, xe, Pe(() => t(b(this, We))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ma = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ge(n = this.parent, ve, ma).call(n, t);
    return;
  }
  if (G(this, _t, b(this, _t) + t), b(this, _t) === 0) {
    this.is_pending = !1;
    for (const a of b(this, $t))
      ce(a, pe), Ke(a);
    for (const a of b(this, en))
      ce(a, Ye), Ke(a);
    b(this, $t).clear(), b(this, en).clear(), b(this, xe) && Ot(b(this, xe), () => {
      G(this, xe, null);
    }), b(this, ot) && (b(this, We).before(b(this, ot)), G(this, ot, null));
  }
}, "#update_pending_count"), r(Ha, "Boundary");
let ha = Ha;
function es(e, t, n, a) {
  const s = Ca;
  var i = e.filter((_) => !_.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = re, c = (
    /** @type {Effect} */
    te
  ), l = ts(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function v(_) {
    l();
    try {
      a(_);
    } catch (g) {
      (c.f & bt) === 0 && an(g, c);
    }
    o?.deactivate(), pa();
  }
  if (r(v, "finish"), n.length === 0) {
    f.then(() => v(t.map(s)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ as(_))).then((_) => v([...t.map(s), ..._])).catch((_) => an(_, c));
  }
  r(d, "run"), f ? f.then(d) : d();
}
r(es, "flatten");
function ts() {
  var e = te, t = Z, n = be, a = re;
  if (T)
    var s = mn;
  return /* @__PURE__ */ r(function(o = !0) {
    Ge(e), Fe(t), nn(n), o && a?.activate(), T && On(s);
  }, "restore");
}
r(ts, "capture");
function pa() {
  Ge(null), Fe(null), nn(null), T && On(null);
}
r(pa, "unset_context");
const ns = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ca(e) {
  var t = me | pe, n = Z !== null && (Z.f & me) !== 0 ? (
    /** @type {Derived} */
    Z
  ) : null;
  return te !== null && (te.f |= ln), {
    ctx: be,
    deps: null,
    effects: null,
    equals: vr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      he
    ),
    wv: 0,
    parent: n ?? te,
    ac: null
  };
}
r(Ca, "derived");
// @__NO_SIDE_EFFECTS__
function as(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    te
  );
  a === null && Ni();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Ht(
    /** @type {V} */
    he
  );
  T && (o.label = t);
  var c = !Z, l = /* @__PURE__ */ new Map();
  return ys(() => {
    var f = lr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        v === re && v.committed && v.deactivate(), pa();
      });
    } catch (g) {
      f.reject(g), pa();
    }
    var v = (
      /** @type {Batch} */
      re
    );
    if (c) {
      var d = s.is_rendered();
      s.update_pending_count(1), v.increment(d), l.get(v)?.reject(Bt), l.delete(v), l.set(v, f);
    }
    const _ = /* @__PURE__ */ r((g, w = void 0) => {
      if (v.activate(), w)
        w !== Bt && (o.f |= mt, sn(o, w));
      else {
        (o.f & mt) !== 0 && (o.f ^= mt), sn(o, g);
        for (const [A, y] of l) {
          if (l.delete(A), A === v) break;
          y.reject(Bt);
        }
      }
      c && (s.update_pending_count(-1), v.decrement(d));
    }, "handler");
    f.promise.then(_, (g) => _(null, g || "unknown"));
  }), Lr(() => {
    for (const f of l.values())
      f.reject(Bt);
  }), T && (o.f |= qn), new Promise((f) => {
    function v(d) {
      function _() {
        d === i ? f(o) : v(i);
      }
      r(_, "go"), d.then(_, _);
    }
    r(v, "next"), v(i);
  });
}
r(as, "async_derived");
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = /* @__PURE__ */ Ca(e);
  return Kr(t), t;
}
r(B, "user_derived");
// @__NO_SIDE_EFFECTS__
function rs(e) {
  const t = /* @__PURE__ */ Ca(e);
  return t.equals = hr, t;
}
r(rs, "derived_safe_equal");
function ga(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ae(
        /** @type {Effect} */
        t[n]
      );
  }
}
r(ga, "destroy_derived_effects");
let aa = [];
function is(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (t.f & bt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(is, "get_derived_parent_effect");
function Da(e) {
  var t, n = te;
  if (Ge(is(e)), T) {
    let a = rn;
    Ga(/* @__PURE__ */ new Set());
    try {
      Pt.call(aa, e) && Ti(), aa.push(e), e.f &= ~Et, ga(e), t = ya(e);
    } finally {
      Ge(n), Ga(a), aa.pop();
    }
  } else
    try {
      e.f &= ~Et, ga(e), t = ya(e);
    } finally {
      Ge(n);
    }
  return t;
}
r(Da, "execute_derived");
function Ir(e) {
  var t = Da(e);
  if (!e.equals(t) && (e.wv = Gr(), (!re?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ce(e, de);
    return;
  }
  Ft || (qe !== null ? (Oa() || re?.is_fork) && qe.set(e, t) : Ia(e));
}
r(Ir, "update_derived");
let rn = /* @__PURE__ */ new Set();
const yt = /* @__PURE__ */ new Map();
function Ga(e) {
  rn = e;
}
r(Ga, "set_eager_effects");
let Ma = !1;
function ss() {
  Ma = !0;
}
r(ss, "set_eager_effects_deferred");
function Ht(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: vr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(Ht, "source");
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  const n = Ht(e);
  return Kr(n), n;
}
r(Le, "state");
// @__NO_SIDE_EFFECTS__
function os(e, t = !1, n = !0) {
  const a = Ht(e);
  return t || (a.equals = hr), a;
}
r(os, "mutable_source");
function Be(e, t, n = !1) {
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ve || (Z.f & Wn) !== 0) && mr() && (Z.f & (me | ft | qn | Wn)) !== 0 && (He === null || !Pt.call(He, e)) && Li();
  let a = n ? qt(t) : t;
  return T && br(
    a,
    /** @type {string} */
    e.label
  ), sn(e, a);
}
r(Be, "set");
function sn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ft ? yt.set(e, t) : yt.set(e, n), e.v = t;
    var a = gt.ensure();
    if (a.capture(e, n), T) {
      if (te !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = zi("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      te !== null && (e.set_during_effect = !0);
    }
    if ((e.f & me) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && Da(s), Ia(s);
    }
    e.wv = Gr(), Dr(e, pe), te !== null && (te.f & de) !== 0 && (te.f & (Je | jt)) === 0 && (Me === null ? Es([e]) : Me.push(e)), !a.is_fork && rn.size > 0 && !Ma && Cr();
  }
  return t;
}
r(sn, "internal_set");
function Cr() {
  Ma = !1;
  for (const e of rn)
    (e.f & de) !== 0 && ce(e, Ye), kn(e) && pn(e);
  rn.clear();
}
r(Cr, "flush_eager_effects");
function bn(e) {
  Be(e, e.v + 1);
}
r(bn, "increment");
function Dr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (T && (o & Wn) !== 0) {
        rn.add(i);
        continue;
      }
      var c = (o & pe) === 0;
      if (c && ce(i, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        qe?.delete(l), (o & Et) === 0 && (o & Re && (i.f |= Et), Dr(l, Ye));
      } else c && ((o & ft) !== 0 && rt !== null && rt.add(
        /** @type {Effect} */
        i
      ), Ke(
        /** @type {Effect} */
        i
      ));
    }
}
r(Dr, "mark_reactions");
const ls = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function qt(e) {
  if (typeof e != "object" || e === null || Vt in e)
    return e;
  const t = or(e);
  if (t !== gi && t !== yi)
    return e;
  var n = /* @__PURE__ */ new Map(), a = sr(e), s = /* @__PURE__ */ Le(0), i = Lt, o = /* @__PURE__ */ r((v) => {
    if (Lt === i)
      return v();
    var d = Z, _ = Lt;
    Fe(null), Xa(i);
    var g = v();
    return Fe(d), Xa(_), g;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Le(
    /** @type {any[]} */
    e.length
  )), T && (e = /** @type {any} */
  us(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(v) {
    if (!l) {
      l = !0, c = v, Xe(s, `${c} version`);
      for (const [d, _] of n)
        Xe(_, xt(c, d));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Wi();
        var g = n.get(d);
        return g === void 0 ? g = o(() => {
          var w = /* @__PURE__ */ Le(_.value);
          return n.set(d, w), T && typeof d == "string" && Xe(w, xt(c, d)), w;
        }) : Be(g, _.value, !0), !0;
      },
      deleteProperty(v, d) {
        var _ = n.get(d);
        if (_ === void 0) {
          if (d in v) {
            const g = o(() => /* @__PURE__ */ Le(he));
            n.set(d, g), bn(s), T && Xe(g, xt(c, d));
          }
        } else
          Be(_, he), bn(s);
        return !0;
      },
      get(v, d, _) {
        if (d === Vt)
          return e;
        if (T && d === fr)
          return f;
        var g = n.get(d), w = d in v;
        if (g === void 0 && (!w || Kt(v, d)?.writable) && (g = o(() => {
          var y = qt(w ? v[d] : he), W = /* @__PURE__ */ Le(y);
          return T && Xe(W, xt(c, d)), W;
        }), n.set(d, g)), g !== void 0) {
          var A = u(g);
          return A === he ? void 0 : A;
        }
        return Reflect.get(v, d, _);
      },
      getOwnPropertyDescriptor(v, d) {
        var _ = Reflect.getOwnPropertyDescriptor(v, d);
        if (_ && "value" in _) {
          var g = n.get(d);
          g && (_.value = u(g));
        } else if (_ === void 0) {
          var w = n.get(d), A = w?.v;
          if (w !== void 0 && A !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: A,
              writable: !0
            };
        }
        return _;
      },
      has(v, d) {
        if (d === Vt)
          return !0;
        var _ = n.get(d), g = _ !== void 0 && _.v !== he || Reflect.has(v, d);
        if (_ !== void 0 || te !== null && (!g || Kt(v, d)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var A = g ? qt(v[d]) : he, y = /* @__PURE__ */ Le(A);
            return T && Xe(y, xt(c, d)), y;
          }), n.set(d, _));
          var w = u(_);
          if (w === he)
            return !1;
        }
        return g;
      },
      set(v, d, _, g) {
        var w = n.get(d), A = d in v;
        if (a && d === "length")
          for (var y = _; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var W = n.get(y + "");
            W !== void 0 ? Be(W, he) : y in v && (W = o(() => /* @__PURE__ */ Le(he)), n.set(y + "", W), T && Xe(W, xt(c, y)));
          }
        if (w === void 0)
          (!A || Kt(v, d)?.writable) && (w = o(() => /* @__PURE__ */ Le(void 0)), T && Xe(w, xt(c, d)), Be(w, qt(_)), n.set(d, w));
        else {
          A = w.v !== he;
          var ne = o(() => qt(_));
          Be(w, ne);
        }
        var E = Reflect.getOwnPropertyDescriptor(v, d);
        if (E?.set && E.set.call(g, _), !A) {
          if (a && typeof d == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(d);
            Number.isInteger(P) && P >= C.v && Be(C, P + 1);
          }
          bn(s);
        }
        return !0;
      },
      ownKeys(v) {
        u(s);
        var d = Reflect.ownKeys(v).filter((w) => {
          var A = n.get(w);
          return A === void 0 || A.v !== he;
        });
        for (var [_, g] of n)
          g.v !== he && !(_ in v) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Oi();
      }
    }
  );
}
r(qt, "proxy");
function xt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : ls.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(xt, "get_label");
function ra(e) {
  try {
    if (e !== null && typeof e == "object" && Vt in e)
      return e[Vt];
  } catch {
  }
  return e;
}
r(ra, "get_proxied_value");
const cs = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function us(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return cs.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        ss();
        var o = s.apply(this, i);
        return Cr(), o;
      } : s;
    }
  });
}
r(us, "inspectable_array");
function fs() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(i, o) {
    const c = n.call(this, i, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (ra(this[l]) === i) {
          na("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(i, o) {
    const c = a.call(this, i, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (ra(this[l]) === i) {
          na("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(i, o) {
    const c = s.call(this, i, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (ra(this[l]) === i) {
          na("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
r(fs, "init_array_prototype_warnings");
var Ya, Wa, Mr, Wr;
function ds() {
  if (Ya === void 0) {
    Ya = window, Wa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Mr = Kt(t, "firstChild").get, Wr = Kt(t, "nextSibling").get, Ba(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ba(n) && (n.__t = void 0), T && (e.__svelte_meta = null, fs());
  }
}
r(ds, "init_operations");
function wt(e = "") {
  return document.createTextNode(e);
}
r(wt, "create_text");
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return (
    /** @type {TemplateNode | null} */
    Mr.call(e)
  );
}
r(ht, "get_first_child");
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return (
    /** @type {TemplateNode | null} */
    Wr.call(e)
  );
}
r(xn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ ht(e);
}
r(h, "child");
function Wt(e, t = !1) {
  {
    var n = /* @__PURE__ */ ht(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ xn(n) : n;
  }
}
r(Wt, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ xn(a);
  return a;
}
r(m, "sibling");
function vs(e) {
  e.textContent = "";
}
r(vs, "clear_text_content");
function Or() {
  return !1;
}
r(Or, "should_defer_append");
let Ja = !1;
function _s() {
  Ja || (Ja = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
r(_s, "add_form_reset_listener");
function Yn(e) {
  var t = Z, n = te;
  Fe(null), Ge(null);
  try {
    return e();
  } finally {
    Fe(t), Ge(n);
  }
}
r(Yn, "without_reactive_context");
function hs(e, t, n, a = n) {
  e.addEventListener(t, () => Yn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), _s();
}
r(hs, "listen_to_event_and_reset_event");
function bs(e) {
  te === null && (Z === null && Ci(e), Ii()), Ft && Ai(e);
}
r(bs, "validate_effect");
function ms(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(ms, "push_effect");
function St(e, t, n) {
  var a = te;
  if (T)
    for (; a !== null && (a.f & Wn) !== 0; )
      a = a.parent;
  a !== null && (a.f & De) !== 0 && (e |= De);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | pe | Re,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (T && (s.component_function = Sn), n)
    try {
      pn(s), s.f |= Aa;
    } catch (c) {
      throw Ae(s), c;
    }
  else t !== null && Ke(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & ln) === 0 && (i = i.first, (e & ft) !== 0 && (e & tn) !== 0 && i !== null && (i.f |= tn)), i !== null && (i.parent = a, a !== null && ms(i, a), Z !== null && (Z.f & me) !== 0 && (e & jt) === 0)) {
    var o = (
      /** @type {Derived} */
      Z
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(St, "create_effect");
function Oa() {
  return Z !== null && !Ve;
}
r(Oa, "effect_tracking");
function Lr(e) {
  const t = St(Bn, null, !1);
  return ce(t, de), t.teardown = e, t;
}
r(Lr, "teardown");
function ps(e) {
  bs("$effect"), T && Rt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    te.f
  ), n = !Z && (t & Je) !== 0 && (t & Aa) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return Pr(e);
}
r(ps, "user_effect");
function Pr(e) {
  return St(la | Si, e, !1);
}
r(Pr, "create_user_effect");
function gs(e) {
  gt.ensure();
  const t = St(jt | ln, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Ot(t, () => {
      Ae(t), a(void 0);
    }) : (Ae(t), a(void 0));
  });
}
r(gs, "component_root");
function ys(e) {
  return St(qn | ln, e, !0);
}
r(ys, "async_effect");
function Rr(e, t = 0) {
  return St(Bn | t, e, !0);
}
r(Rr, "render_effect");
function X(e, t = [], n = [], a = []) {
  es(a, t, n, (s) => {
    St(Bn, () => e(...s.map(u)), !0);
  });
}
r(X, "template_effect");
function La(e, t = 0) {
  var n = St(ft | t, e, !0);
  return T && (n.dev_stack = mn), n;
}
r(La, "block");
function Pe(e) {
  return St(Je | ln, e, !0);
}
r(Pe, "branch");
function Hr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ft, a = Z;
    Qa(!0), Fe(null);
    try {
      t.call(null);
    } finally {
      Qa(n), Fe(a);
    }
  }
}
r(Hr, "execute_effect_teardown");
function Fr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Yn(() => {
      s.abort(Bt);
    });
    var a = n.next;
    (n.f & jt) !== 0 ? n.parent = null : Ae(n, t), n = a;
  }
}
r(Fr, "destroy_effect_children");
function ws(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Je) === 0 && Ae(t), t = n;
  }
}
r(ws, "destroy_block_effect_children");
function Ae(e, t = !0) {
  var n = !1;
  (t || (e.f & ur) !== 0) && e.nodes !== null && e.nodes.end !== null && (jr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Fr(e, t && !n), Ln(e, 0), ce(e, bt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Hr(e);
  var s = e.parent;
  s !== null && s.first !== null && zr(e), T && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Ae, "destroy_effect");
function jr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ xn(e);
    e.remove(), e = n;
  }
}
r(jr, "remove_effect_dom");
function zr(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(zr, "unlink_effect");
function Ot(e, t, n = !0) {
  var a = [];
  Ur(e, a, !0);
  var s = /* @__PURE__ */ r(() => {
    n && Ae(e), t && t();
  }, "fn"), i = a.length;
  if (i > 0) {
    var o = /* @__PURE__ */ r(() => --i || s(), "check");
    for (var c of a)
      c.out(o);
  } else
    s();
}
r(Ot, "pause_effect");
function Ur(e, t, n) {
  if ((e.f & De) === 0) {
    e.f ^= De;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & tn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Je) !== 0 && (e.f & ft) !== 0;
      Ur(s, t, o ? n : !1), s = i;
    }
  }
}
r(Ur, "pause_children");
function Pa(e) {
  Br(e, !0);
}
r(Pa, "resume_effect");
function Br(e, t) {
  if ((e.f & De) !== 0) {
    e.f ^= De, (e.f & de) === 0 && (ce(e, pe), Ke(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & tn) !== 0 || (n.f & Je) !== 0;
      Br(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r(Br, "resume_children");
function qr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ xn(n);
      t.append(n), n = s;
    }
}
r(qr, "move_effect");
let Mn = !1, Ft = !1;
function Qa(e) {
  Ft = e;
}
r(Qa, "set_is_destroying_effect");
let Z = null, Ve = !1;
function Fe(e) {
  Z = e;
}
r(Fe, "set_active_reaction");
let te = null;
function Ge(e) {
  te = e;
}
r(Ge, "set_active_effect");
let He = null;
function Kr(e) {
  Z !== null && (He === null ? He = [e] : He.push(e));
}
r(Kr, "push_reaction_value");
let Ne = null, Ie = 0, Me = null;
function Es(e) {
  Me = e;
}
r(Es, "set_untracked_writes");
let Vr = 1, Nt = 0, Lt = Nt;
function Xa(e) {
  Lt = e;
}
r(Xa, "set_update_version");
function Gr() {
  return ++Vr;
}
r(Gr, "increment_write_version");
function kn(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & me && (e.f &= ~Et), (t & Ye) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (kn(
        /** @type {Derived} */
        i
      ) && Ir(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Re) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    qe === null && ce(e, de);
  }
  return !1;
}
r(kn, "is_dirty");
function Yr(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(He !== null && Pt.call(He, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & me) !== 0 ? Yr(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ce(i, pe) : (i.f & de) !== 0 && ce(i, Ye), Ke(
        /** @type {Effect} */
        i
      ));
    }
}
r(Yr, "schedule_possible_effect_self_invalidation");
function ya(e) {
  var t = Ne, n = Ie, a = Me, s = Z, i = He, o = be, c = Ve, l = Lt, f = e.f;
  Ne = /** @type {null | Value[]} */
  null, Ie = 0, Me = null, Z = (f & (Je | jt)) === 0 ? e : null, He = null, nn(e.ctx), Ve = !1, Lt = ++Nt, e.ac !== null && (Yn(() => {
    e.ac.abort(Bt);
  }), e.ac = null);
  try {
    e.f |= ca;
    var v = (
      /** @type {Function} */
      e.fn
    ), d = v(), _ = e.deps, g = re?.is_fork;
    if (Ne !== null) {
      var w;
      if (g || Ln(e, Ie), _ !== null && Ie > 0)
        for (_.length = Ie + Ne.length, w = 0; w < Ne.length; w++)
          _[Ie + w] = Ne[w];
      else
        e.deps = _ = Ne;
      if (Oa() && (e.f & Re) !== 0)
        for (w = Ie; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !g && _ !== null && Ie < _.length && (Ln(e, Ie), _.length = Ie);
    if (mr() && Me !== null && !Ve && _ !== null && (e.f & (me | Ye | pe)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Me.length; w++)
        Yr(
          Me[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Nt++, s.deps !== null)
        for (let A = 0; A < n; A += 1)
          s.deps[A].rv = Nt;
      if (t !== null)
        for (const A of t)
          A.rv = Nt;
      Me !== null && (a === null ? a = Me : a.push(.../** @type {Source[]} */
      Me));
    }
    return (e.f & mt) !== 0 && (e.f ^= mt), d;
  } catch (A) {
    return gr(A);
  } finally {
    e.f ^= ca, Ne = t, Ie = n, Me = a, Z = s, He = i, nn(o), Ve = c, Lt = l;
  }
}
r(ya, "update_reaction");
function Ss(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = mi.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Pt.call(Ne, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Re) !== 0 && (i.f ^= Re, i.f &= ~Et), Ia(i), ga(i), Ln(i, 0);
  }
}
r(Ss, "remove_reaction");
function Ln(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Ss(e, n[a]);
}
r(Ln, "remove_reactions");
function pn(e) {
  var t = e.f;
  if ((t & bt) === 0) {
    ce(e, de);
    var n = te, a = Mn;
    if (te = e, Mn = !0, T) {
      var s = Sn;
      Ka(e.component_function);
      var i = (
        /** @type {any} */
        mn
      );
      On(e.dev_stack ?? mn);
    }
    try {
      (t & (ft | cr)) !== 0 ? ws(e) : Fr(e), Hr(e);
      var o = ya(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Vr;
      var c;
      T && ji && (e.f & pe) !== 0 && e.deps;
    } finally {
      Mn = a, te = n, T && (Ka(s), On(i));
    }
  }
}
r(pn, "update_effect");
async function xs() {
  await Promise.resolve(), Yi();
}
r(xs, "tick");
function u(e) {
  var t = e.f, n = (t & me) !== 0;
  if (Z !== null && !Ve) {
    var a = te !== null && (te.f & bt) !== 0;
    if (!a && (He === null || !Pt.call(He, e))) {
      var s = Z.deps;
      if ((Z.f & ca) !== 0)
        e.rv < Nt && (e.rv = Nt, Ne === null && s !== null && s[Ie] === e ? Ie++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        (Z.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Z] : Pt.call(i, Z) || i.push(Z);
      }
    }
  }
  if (T && ns.delete(e), Ft && yt.has(e))
    return yt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Ft) {
      var c = o.v;
      return ((o.f & de) === 0 && o.reactions !== null || Qr(o)) && (c = Da(o)), yt.set(o, c), c;
    }
    var l = (o.f & Re) === 0 && !Ve && Z !== null && (Mn || (Z.f & Re) !== 0), f = o.deps === null;
    kn(o) && (l && (o.f |= Re), Ir(o)), l && !f && Jr(o);
  }
  if (qe?.has(e))
    return qe.get(e);
  if ((e.f & mt) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function Jr(e) {
  if (e.deps !== null) {
    e.f |= Re;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & Re) === 0 && Jr(
        /** @type {Derived} */
        t
      );
  }
}
r(Jr, "reconnect");
function Qr(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (yt.has(t) || (t.f & me) !== 0 && Qr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(Qr, "depends_on_old_values");
function Xr(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
r(Xr, "untrack");
const Zr = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function ks(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || vn.call(t, i), !i.cancelBubble)
      return Yn(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(ks, "create_event");
function it(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = ks(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Lr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(it, "event");
function je(e) {
  for (var t = 0; t < e.length; t++)
    Zr.add(e[t]);
  for (var n of wa)
    n(e);
}
r(je, "delegate");
let Za = null;
function vn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Za = e;
  var o = 0, c = Za === e && e.__root;
  if (c) {
    var l = s.indexOf(c);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    Rt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = Z, d = te;
    Fe(null), Ge(null);
    try {
      for (var _, g = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var A = i["__" + a];
          A != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && A.call(i, e);
        } catch (y) {
          _ ? g.push(y) : _ = y;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (_) {
        for (let y of g)
          queueMicrotask(() => {
            throw y;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Fe(v), Ge(d);
    }
  }
}
r(vn, "handle_event_propagation");
function $r(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r($r, "create_fragment_from_html");
function Pn(e, t) {
  var n = (
    /** @type {Effect} */
    te
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Pn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = $r(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ ht(s)));
    var o = (
      /** @type {TemplateNode} */
      a || Wa ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Pn(c, l);
    } else
      Pn(o, o);
    return o;
  };
}
r(z, "from_html");
function ia() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = wt();
  return e.append(t, n), Pn(t, n), e;
}
r(ia, "comment");
function H(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(H, "append");
const Ns = ["touchstart", "touchmove"];
function Ts(e) {
  return Ns.includes(e);
}
r(Ts, "is_passive_event");
function I(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(I, "set_text");
function As(e, t) {
  return Is(e, t);
}
r(As, "mount");
const zt = /* @__PURE__ */ new Map();
function Is(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ds();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((d) => {
    for (var _ = 0; _ < d.length; _++) {
      var g = d[_];
      if (!c.has(g)) {
        c.add(g);
        var w = Ts(g);
        t.addEventListener(g, vn, { passive: w });
        var A = zt.get(g);
        A === void 0 ? (document.addEventListener(g, vn, { passive: w }), zt.set(g, 1)) : zt.set(g, A + 1);
      }
    }
  }, "event_handle");
  l(Un(Zr)), wa.add(l);
  var f = void 0, v = gs(() => {
    var d = n ?? t.appendChild(wt());
    return Xi(
      /** @type {TemplateNode} */
      d,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (_) => {
        we({});
        var g = (
          /** @type {ComponentContext} */
          be
        );
        i && (g.c = i), s && (a.$$events = s), f = e(_, a) || {}, Ee();
      }
    ), () => {
      for (var _ of c) {
        t.removeEventListener(_, vn);
        var g = (
          /** @type {number} */
          zt.get(_)
        );
        --g === 0 ? (document.removeEventListener(_, vn), zt.delete(_)) : zt.set(_, g);
      }
      wa.delete(l), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return Ea.set(f, v), f;
}
r(Is, "_mount");
let Ea = /* @__PURE__ */ new WeakMap();
function Cs(e, t) {
  const n = Ea.get(e);
  return n ? (Ea.delete(e), n(t)) : (T && (Vt in e ? Hi() : Ri()), Promise.resolve());
}
r(Cs, "unmount");
var Ue, nt, Ce, Mt, wn, En, jn;
const Fa = class Fa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Qe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    V(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    V(this, nt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    V(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    V(this, Mt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    V(this, wn, !0);
    V(this, En, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        re
      );
      if (b(this, Ue).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, Ue).get(t)
        ), a = b(this, nt).get(n);
        if (a)
          Pa(a), b(this, Mt).delete(n);
        else {
          var s = b(this, Ce).get(n);
          s && (b(this, nt).set(n, s.effect), b(this, Ce).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of b(this, Ue)) {
          if (b(this, Ue).delete(i), i === t)
            break;
          const c = b(this, Ce).get(o);
          c && (Ae(c.effect), b(this, Ce).delete(o));
        }
        for (const [i, o] of b(this, nt)) {
          if (i === n || b(this, Mt).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, Ue).values()).includes(i)) {
              var f = document.createDocumentFragment();
              qr(o, f), f.append(wt()), b(this, Ce).set(i, { effect: o, fragment: f });
            } else
              Ae(o);
            b(this, Mt).delete(i), b(this, nt).delete(i);
          }, "on_destroy");
          b(this, wn) || !a ? (b(this, Mt).add(i), Ot(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    V(this, jn, /* @__PURE__ */ r((t) => {
      b(this, Ue).delete(t);
      const n = Array.from(b(this, Ue).values());
      for (const [a, s] of b(this, Ce))
        n.includes(a) || (Ae(s.effect), b(this, Ce).delete(a));
    }, "#discard"));
    this.anchor = t, G(this, wn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var a = (
      /** @type {Batch} */
      re
    ), s = Or();
    if (n && !b(this, nt).has(t) && !b(this, Ce).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = wt();
        i.append(o), b(this, Ce).set(t, {
          effect: Pe(() => n(o)),
          fragment: i
        });
      } else
        b(this, nt).set(
          t,
          Pe(() => n(this.anchor))
        );
    if (b(this, Ue).set(a, t), s) {
      for (const [c, l] of b(this, nt))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of b(this, Ce))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, En)), a.ondiscard(b(this, jn));
    } else
      b(this, En).call(this);
  }
};
Ue = new WeakMap(), nt = new WeakMap(), Ce = new WeakMap(), Mt = new WeakMap(), wn = new WeakMap(), En = new WeakMap(), jn = new WeakMap(), r(Fa, "BranchManager");
let Sa = Fa;
if (T) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ r(() => {
          if (n !== void 0)
            return n;
          Mi(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var Zo = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function ee(e, t, n = !1) {
  var a = new Sa(e), s = n ? tn : 0;
  function i(o, c) {
    a.ensure(o, c);
  }
  r(i, "update_branch"), La(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, i(l, c);
    }), o || i(!1, null);
  }, s);
}
r(ee, "if_block");
function ct(e, t) {
  return t;
}
r(ct, "index");
function Ds(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, c = 0; c < s; c++) {
    let d = t[c];
    Ot(
      d,
      () => {
        if (i) {
          if (i.pending.delete(d), i.done.add(d), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            xa(Un(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = a.length === 0 && n !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        f.parentNode
      );
      vs(v), v.append(f), e.items.clear();
    }
    xa(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Ds, "pause_effects");
function xa(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ae(e[n], t);
}
r(xa, "destroy_effects");
var $a;
function ut(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(wt());
  }
  var v = null, d = /* @__PURE__ */ rs(() => {
    var W = n();
    return sr(W) ? W : W == null ? [] : Un(W);
  }), _, g = !0;
  function w() {
    y.fallback = v, Ms(y, _, o, t, a), v !== null && (_.length === 0 ? (v.f & lt) === 0 ? Pa(v) : (v.f ^= lt, _n(v, null, o)) : Ot(v, () => {
      v = null;
    }));
  }
  r(w, "commit");
  var A = La(() => {
    _ = /** @type {V[]} */
    u(d);
    for (var W = _.length, ne = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      re
    ), C = Or(), P = 0; P < W; P += 1) {
      var S = _[P], O = a(S, P), L = g ? null : c.get(O);
      L ? (L.v && sn(L.v, S), L.i && sn(L.i, P), C && E.unskip_effect(L.e)) : (L = Ws(
        c,
        g ? o : $a ??= wt(),
        S,
        O,
        P,
        s,
        t,
        n
      ), g || (L.e.f |= lt), c.set(O, L)), ne.add(O);
    }
    if (W === 0 && i && !v && (g ? v = Pe(() => i(o)) : (v = Pe(() => i($a ??= wt())), v.f |= lt)), W > ne.size && (T ? Os(_, a) : dr("", "", "")), !g)
      if (C) {
        for (const [R, q] of c)
          ne.has(R) || E.skip_effect(q.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    u(d);
  }), y = { effect: A, items: c, outrogroups: null, fallback: v };
  g = !1;
}
r(ut, "each");
function dn(e) {
  for (; e !== null && (e.f & Je) === 0; )
    e = e.next;
  return e;
}
r(dn, "skip_to_branch");
function Ms(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = dn(e.effect.first), f, v = null, d, _ = [], g = [], w, A, y, W;
  if (i)
    for (W = 0; W < o; W += 1)
      w = t[W], A = s(w, W), y = /** @type {EachItem} */
      c.get(A).e, (y.f & lt) === 0 && (y.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(y));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], A = s(w, W), y = /** @type {EachItem} */
    c.get(A).e, e.outrogroups !== null)
      for (const q of e.outrogroups)
        q.pending.delete(y), q.done.delete(y);
    if ((y.f & lt) !== 0)
      if (y.f ^= lt, y === l)
        _n(y, null, n);
      else {
        var ne = v ? v.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), dt(e, v, y), dt(e, y, ne), _n(y, ne, n), v = y, _ = [], g = [], l = dn(v.next);
        continue;
      }
    if ((y.f & De) !== 0 && (Pa(y), i && (y.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (_.length < g.length) {
          var E = g[0], C;
          v = E.prev;
          var P = _[0], S = _[_.length - 1];
          for (C = 0; C < _.length; C += 1)
            _n(_[C], E, n);
          for (C = 0; C < g.length; C += 1)
            f.delete(g[C]);
          dt(e, P.prev, S.next), dt(e, v, P), dt(e, S, E), l = E, v = S, W -= 1, _ = [], g = [];
        } else
          f.delete(y), _n(y, l, n), dt(e, y.prev, y.next), dt(e, y, v === null ? e.effect.first : v.next), dt(e, v, y), v = y;
        continue;
      }
      for (_ = [], g = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = dn(l.next);
      if (l === null)
        continue;
    }
    (y.f & lt) === 0 && _.push(y), v = y, l = dn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const q of e.outrogroups)
      q.pending.size === 0 && (xa(Un(q.done)), e.outrogroups?.delete(q));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var O = [];
    if (f !== void 0)
      for (y of f)
        (y.f & De) === 0 && O.push(y);
    for (; l !== null; )
      (l.f & De) === 0 && l !== e.fallback && O.push(l), l = dn(l.next);
    var L = O.length;
    if (L > 0) {
      var R = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < L; W += 1)
          O[W].nodes?.a?.measure();
        for (W = 0; W < L; W += 1)
          O[W].nodes?.a?.fix();
      }
      Ds(e, O, R);
    }
  }
  i && pt(() => {
    if (d !== void 0)
      for (y of d)
        y.nodes?.a?.apply();
  });
}
r(Ms, "reconcile");
function Ws(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ os(n, !1, !1) : Ht(n) : null, f = (o & 2) !== 0 ? Ht(s) : null;
  return T && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Pe(() => (i(t, l ?? n, f ?? s, c), () => {
      e.delete(a);
    }))
  };
}
r(Ws, "create_item");
function _n(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & lt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xn(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(_n, "move");
function dt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(dt, "link");
function Os(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), c = String(s);
      let l = String(i);
      l.startsWith("[object ") && (l = null), dr(o, c, l);
    }
    n.set(i, s);
  }
}
r(Os, "validate_each_keys");
function Ls(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  X(() => {
    var c = (
      /** @type {Effect} */
      te
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (jr(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = $r(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ ht(f)), Pn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ ht(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ ht(f)
          );
      else
        i.before(f);
    }
  });
}
r(Ls, "html");
const er = [...` 	
\r\f \v\uFEFF`];
function Ps(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var i = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var c = o + i;
          (o === 0 || er.includes(a[o - 1])) && (c === a.length || er.includes(a[c])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(c + 1) : o = c;
        }
  }
  return a === "" ? null : a;
}
r(Ps, "to_class");
function on(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = Ps(n, a, i);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var f = !!i[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return i;
}
r(on, "set_class");
const Rs = /* @__PURE__ */ Symbol("is custom element"), Hs = /* @__PURE__ */ Symbol("is html");
function Te(e, t) {
  var n = ei(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(Te, "set_value");
function F(e, t, n, a) {
  var s = ei(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[xi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Fs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(F, "set_attribute");
function ei(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Rs]: e.nodeName.includes("-"),
      [Hs]: e.namespaceURI === bi
    }
  );
}
r(ei, "get_attributes");
var tr = /* @__PURE__ */ new Map();
function Fs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = tr.get(t);
  if (n) return n;
  tr.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = pi(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = or(s);
  }
  return n;
}
r(Fs, "get_setters");
function ti(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  hs(e, "input", async (s) => {
    T && e.type === "checkbox" && qa();
    var i = s ? e.defaultValue : e.value;
    if (i = sa(e) ? oa(i) : i, n(i), re !== null && a.add(re), await xs(), i !== (i = t())) {
      var o = e.selectionStart, c = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", c !== null) {
        var f = e.value.length;
        o === c && c === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(c, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xr(t) == null && e.value && (n(sa(e) ? oa(e.value) : e.value), re !== null && a.add(re)), Rr(() => {
    T && e.type === "checkbox" && qa();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        fa ?? re
      );
      if (a.has(i))
        return;
    }
    sa(e) && s === oa(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(ti, "bind_value");
function sa(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(sa, "is_numberlike_input");
function oa(e) {
  return e === "" ? null : +e;
}
r(oa, "to_number");
const Ut = [];
function js(e, t) {
  return {
    subscribe: zs(e, t).subscribe
  };
}
r(js, "readable");
function zs(e, t = ta) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(c) {
    if (_r(e, c) && (e = c, n)) {
      const l = !Ut.length;
      for (const f of a)
        f[1](), Ut.push(f, e);
      if (l) {
        for (let f = 0; f < Ut.length; f += 2)
          Ut[f][0](Ut[f + 1]);
        Ut.length = 0;
      }
    }
  }
  r(s, "set");
  function i(c) {
    s(c(
      /** @type {T} */
      e
    ));
  }
  r(i, "update");
  function o(c, l = ta) {
    const f = [c, l];
    return a.add(f), a.size === 1 && (n = t(s, i) || ta), c(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: i, subscribe: o };
}
r(zs, "writable");
function Us(e) {
  var n, a, s;
  const i = class i extends e {
    constructor() {
      super(...arguments);
      V(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const v = f, { tagName: d } = v;
          return d && l.push(d.toUpperCase()), l;
        },
        []
      ));
      V(this, a, /* @__PURE__ */ Le(qt({})));
      V(this, s, {});
    }
    get $state() {
      return u(b(this, a));
    }
    set $state(l) {
      Be(b(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, v) {
      Object.assign(this.$state, l.state), v.isFirstRender && G(this, s, As(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Cs(b(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: v } = f;
      if (!v) return;
      const d = v;
      if (!b(this, n).includes(d.tagName)) return;
      const _ = d._getValue();
      this.document.update({ [d.name]: _ });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), Qe(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(Us, "SvelteApplicationMixin");
const Bs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Bs);
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
r(k, "localize");
function Rn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(Rn, "format");
var qs = /* @__PURE__ */ z("<span> </span>"), Ks = /* @__PURE__ */ z('<span style="color: var(--nos-text-secondary, #888)">—</span>'), Vs = /* @__PURE__ */ z('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function Gs(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ B(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((R) => t.actor.update({ img: R }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ B(() => {
    const R = Object.keys(t.hitDiceData.bySize);
    return R.length === 0 ? "—" : R.length === 1 ? `d${R[0]}` : R.map((q) => `d${q}`).join("/");
  });
  var i = Vs(), o = h(i);
  o.__click = a;
  var c = h(o), l = m(o, 2), f = h(l), v = h(f), d = m(f, 2);
  d.__change = ({ target: R }) => t.actor.update({ name: R.value });
  var _ = m(l, 2), g = h(_), w = h(g), A = m(g, 2), y = h(A);
  {
    var W = /* @__PURE__ */ r((R) => {
      var q = qs(), $ = h(q);
      X(() => I($, t.metaData)), H(R, q);
    }, "consequent"), ne = /* @__PURE__ */ r((R) => {
      var q = Ks();
      H(R, q);
    }, "alternate");
    ee(y, (R) => {
      t.metaData ? R(W) : R(ne, !1);
    });
  }
  var E = m(y, 2);
  E.__click = () => t.actor.editMetadata();
  var C = m(_, 2), P = h(C), S = h(P), O = m(P, 2), L = h(O);
  X(
    (R, q, $, j, K) => {
      F(c, "src", u(n)), F(c, "alt", t.actor.reactive.name), I(v, R), Te(d, t.actor.reactive.name), d.disabled = !t.editingEnabled, I(w, q), F(E, "aria-label", $), F(E, "data-tooltip", j), E.disabled = !t.editingEnabled, I(S, K), I(L, u(s));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), H(e, i), Ee();
}
r(Gs, "HeaderRow");
je(["click", "change"]);
function Ra(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ra, "formatModifier");
var Ys = /* @__PURE__ */ z('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function Js(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ B(() => k(n[t.abilityKey])), s = /* @__PURE__ */ B(() => Rn("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ B(() => Rn("NWS.RollSave", { name: u(a) }));
  var o = Ys(), c = h(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var v = h(f), d = h(v), _ = m(f, 2), g = h(_);
  X(
    (w) => {
      l = on(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), F(c, "data-tooltip", u(i)), F(c, "aria-label", u(i)), F(f, "data-tooltip", u(s)), F(f, "aria-label", u(s)), I(d, w), I(g, u(a));
    },
    [() => Ra(t.ability.mod)]
  ), H(e, o), Ee();
}
r(Js, "AbilityBox");
je(["click"]);
var Qs = /* @__PURE__ */ z('<div class="nos-resources__mana"><label> </label> <input type="number"/> <span class="nos-resources__separator">/</span> <input type="number"/></div>'), Xs = /* @__PURE__ */ z('<div class="nos-resources"><!></div>');
function Zs(e, t) {
  we(t, !0);
  var n = Xs(), a = h(n);
  {
    var s = /* @__PURE__ */ r((i) => {
      var o = Qs(), c = h(o), l = h(c), f = m(c, 2);
      f.__change = ({ target: d }) => t.updateCurrentMana(Number(d.value));
      var v = m(f, 4);
      v.__change = ({ target: d }) => t.updateMaxMana(Number(d.value)), X(
        (d) => {
          I(l, d), Te(f, t.mana.current), Te(v, t.mana.max || t.mana.baseMax), v.disabled = !t.editingEnabled;
        },
        [() => k("NWS.Mana")]
      ), H(i, o);
    }, "consequent");
    ee(a, (i) => {
      t.hasMana && i(s);
    });
  }
  H(e, n), Ee();
}
r(Zs, "ClassResourceBar");
je(["change"]);
var $s = /* @__PURE__ */ z('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), eo = /* @__PURE__ */ z('<i class="fa-solid fa-heart"></i>'), to = /* @__PURE__ */ z('<section class="nos-stats"><div class="nos-abilities"></div> <div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-hp"><span class="nos-combat__sub"> </span> <div class="nos-hp__bar"><input class="nos-hp__max" type="number"/></div> <div class="nos-hp__bar"><input class="nos-hp__current" type="number"/></div> <span class="nos-combat__sub"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div> <!></section>');
function no(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ B(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ B(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ B(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ B(() => t.actor.reactive.system.attributes.movement);
  var l = to(), f = h(l);
  ut(f, 21, () => n, ct, (ue, ze) => {
    Js(ue, {
      get abilityKey() {
        return u(ze);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(ze)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(ze)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var v = m(f, 2), d = h(v), _ = h(d), g = m(h(_), 2), w = h(g), A = m(g, 2), y = h(A), W = m(_, 2), ne = m(h(W), 2), E = h(ne), C = m(ne, 2);
  C.__change = ({ target: ue }) => t.updateTempHP(Number(ue.value));
  var P = m(d, 2);
  let S;
  var O = h(P), L = h(O);
  {
    var R = /* @__PURE__ */ r((ue) => {
      var ze = $s();
      H(ue, ze);
    }, "consequent"), q = /* @__PURE__ */ r((ue) => {
      var ze = eo();
      H(ue, ze);
    }, "alternate");
    ee(L, (ue) => {
      t.isBloodied ? ue(R) : ue(q, !1);
    });
  }
  var $ = m(O, 2), j = h($), K = m($, 2), Y = h(K), ae = h(Y), se = m(Y, 2), N = h(se);
  N.__change = ({ target: ue }) => t.updateMaxHP(Number(ue.value));
  var p = m(se, 2), x = h(p);
  x.__change = ({ target: ue }) => t.updateCurrentHP(Number(ue.value));
  var D = m(p, 2), U = h(D), M = m(K, 2);
  M.__click = () => t.actor.configureHitPoints();
  var oe = m(P, 2);
  oe.__click = () => t.rollHitDice();
  var fe = m(h(oe), 2), J = h(fe), ie = m(fe, 2), Q = h(ie), le = m(ie, 2);
  le.__click = (ue) => {
    ue.stopPropagation(), t.actor.configureHitDice();
  };
  var Se = m(oe, 2), ye = h(Se);
  ye.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var _e = m(h(ye), 2), cn = h(_e), un = m(_e, 2), Jn = h(un), Qn = m(ye, 2), Nn = m(h(Qn), 2), Xn = h(Nn), Tn = m(Nn, 2), Zn = h(Tn), fn = m(Tn, 2);
  fn.__click = () => t.actor.configureMovement();
  var $n = m(v, 2);
  Zs($n, {
    get hasMana() {
      return t.hasMana;
    },
    get mana() {
      return t.mana;
    },
    get updateCurrentMana() {
      return t.updateCurrentMana;
    },
    get updateMaxMana() {
      return t.updateMaxMana;
    },
    get editingEnabled() {
      return t.editingEnabled;
    }
  }), X(
    (ue, ze, ni, ai, ri, ii, si, oi, li, ci, fi, di, vi) => {
      I(w, ue), I(y, u(i).value), I(E, ze), Te(C, u(s).temp ?? 0), S = on(P, 1, "nos-combat__stat", null, S, { "nos-hp--bloodied": t.isBloodied }), I(j, ni), I(ae, ai), Te(N, u(s).max), N.disabled = !t.editingEnabled, Te(x, u(s).value), I(U, ri), F(M, "data-tooltip", ii), M.disabled = !t.editingEnabled, I(J, si), I(Q, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), F(le, "data-tooltip", oi), le.disabled = !t.editingEnabled, F(ye, "data-tooltip", li), I(cn, ci), I(Jn, fi), I(Xn, di), I(Zn, u(c).walk), F(fn, "data-tooltip", vi), fn.disabled = !t.editingEnabled;
    },
    [
      () => k("NWS.Armor"),
      () => k("NWS.TempHP"),
      () => k("NWS.HitPoints"),
      () => k("NWS.Max"),
      () => k("NWS.Current"),
      () => k("NWS.ConfigureHitPoints"),
      () => k("NWS.HitDice"),
      () => k("NWS.ConfigureHitDice"),
      () => k("NWS.RollInitiative"),
      () => k("NWS.Initiative"),
      () => Ra(u(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), H(e, l), Ee();
}
r(no, "StatsRow");
je(["change", "click"]);
var ao = /* @__PURE__ */ z('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function ro(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ B(() => n[t.skillKey]), o = /* @__PURE__ */ B(() => k(a[u(i)])), c = /* @__PURE__ */ B(() => k(s[t.skillKey]));
  var l = ao();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), v = h(f), d = m(f, 2), _ = h(d), g = m(d, 2), w = h(g);
  X(
    (A, y) => {
      F(l, "data-tooltip", A), I(v, u(o)), I(_, y), I(w, u(c));
    },
    [
      () => Rn("NWS.RollSkill", { name: u(c) }),
      () => Ra(t.skill.mod)
    ]
  ), H(e, l), Ee();
}
r(ro, "SkillCell");
je(["click"]);
var io = /* @__PURE__ */ z('<section class="nos-skills-row"></section>');
function so(e, t) {
  we(t, !0);
  const n = [
    "arcana",
    "examination",
    "finesse",
    "influence",
    "insight",
    "lore",
    "might",
    "naturecraft",
    "perception",
    "stealth"
  ];
  var a = io();
  ut(a, 21, () => n, ct, (s, i) => {
    ro(s, {
      get skillKey() {
        return u(i);
      },
      get skill() {
        return t.actor.reactive.system.skills[u(i)];
      },
      get actor() {
        return t.actor;
      }
    });
  }), H(e, a), Ee();
}
r(so, "SkillsRow");
var oo = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), lo = /* @__PURE__ */ z('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), co = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), uo = /* @__PURE__ */ z('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), fo = /* @__PURE__ */ z('<div class="nos-feature-row"><!> <!></div>'), vo = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), _o = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ho = /* @__PURE__ */ z('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), bo = /* @__PURE__ */ z('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), mo = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ z('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), go = /* @__PURE__ */ z('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), yo = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ z('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Eo = /* @__PURE__ */ z('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), So = /* @__PURE__ */ z('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), xo = /* @__PURE__ */ z("<!> <!> <!> <!> <!>", 1);
function nr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ B(() => t.actor.reactive.items.filter((S) => S.type === "feature")), a = /* @__PURE__ */ B(() => t.actor.reactive.items.filter((S) => S.type === "boon")), s = /* @__PURE__ */ B(() => t.actor.reactive.items.find((S) => S.type === "ancestry") ?? null), i = /* @__PURE__ */ B(() => t.actor.reactive.items.find((S) => S.type === "background") ?? null), o = /* @__PURE__ */ B(() => t.actor.reactive.items.find((S) => S.type === "class") ?? null), c = /* @__PURE__ */ B(() => t.actor.reactive.items.find((S) => S.type === "subclass") ?? null);
  function l(S) {
    t.actor.items.get(S)?.sheet?.render(!0);
  }
  r(l, "configureItem");
  function f(S) {
    t.actor.deleteEmbeddedDocuments("Item", [S]);
  }
  r(f, "deleteItem");
  function v(S, O) {
    const L = { type: "Item", uuid: O.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(L));
  }
  r(v, "onDragStart");
  var d = xo(), _ = Wt(d);
  {
    var g = /* @__PURE__ */ r((S) => {
      var O = fo(), L = h(O);
      {
        var R = /* @__PURE__ */ r((j) => {
          var K = lo(), Y = h(K), ae = h(Y), se = m(Y, 2), N = h(se), p = m(N, 2);
          p.__click = () => l(u(s).id);
          var x = h(p), D = m(p, 2);
          {
            var U = /* @__PURE__ */ r((M) => {
              var oe = oo(), fe = h(oe);
              fe.__click = () => l(u(s).id);
              var J = m(fe, 2);
              J.__click = () => f(u(s).id), H(M, oe);
            }, "consequent");
            ee(D, (M) => {
              t.editingEnabled && M(U);
            });
          }
          X(
            (M) => {
              I(ae, M), F(N, "src", u(s).img), F(N, "alt", u(s).name), I(x, u(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), it("dragstart", se, (M) => v(M, u(s))), H(j, K);
        }, "consequent_1");
        ee(L, (j) => {
          u(s) && j(R);
        });
      }
      var q = m(L, 2);
      {
        var $ = /* @__PURE__ */ r((j) => {
          var K = uo(), Y = h(K), ae = h(Y), se = m(Y, 2), N = h(se), p = m(N, 2);
          p.__click = () => l(u(i).id);
          var x = h(p), D = m(p, 2);
          {
            var U = /* @__PURE__ */ r((M) => {
              var oe = co(), fe = h(oe);
              fe.__click = () => l(u(i).id);
              var J = m(fe, 2);
              J.__click = () => f(u(i).id), H(M, oe);
            }, "consequent_2");
            ee(D, (M) => {
              t.editingEnabled && M(U);
            });
          }
          X(
            (M) => {
              I(ae, M), F(N, "src", u(i).img), F(N, "alt", u(i).name), I(x, u(i).name);
            },
            [() => k("NWS.Background")]
          ), it("dragstart", se, (M) => v(M, u(i))), H(j, K);
        }, "consequent_3");
        ee(q, (j) => {
          u(i) && j($);
        });
      }
      H(S, O);
    }, "consequent_4");
    ee(_, (S) => {
      (u(s) || u(i)) && S(g);
    });
  }
  var w = m(_, 2);
  {
    var A = /* @__PURE__ */ r((S) => {
      var O = bo(), L = h(O), R = h(L), q = m(L, 2), $ = h(q), j = m($, 2);
      j.__click = () => l(u(o).id);
      var K = h(j), Y = m(j, 2);
      {
        var ae = /* @__PURE__ */ r((p) => {
          var x = vo(), D = h(x);
          D.__click = () => l(u(o).id);
          var U = m(D, 2);
          U.__click = () => f(u(o).id), H(p, x);
        }, "consequent_5");
        ee(Y, (p) => {
          t.editingEnabled && p(ae);
        });
      }
      var se = m(q, 2);
      {
        var N = /* @__PURE__ */ r((p) => {
          var x = ho(), D = h(x), U = m(D, 2);
          U.__click = () => l(u(c).id);
          var M = h(U), oe = m(U, 2);
          {
            var fe = /* @__PURE__ */ r((J) => {
              var ie = _o(), Q = h(ie);
              Q.__click = () => l(u(c).id);
              var le = m(Q, 2);
              le.__click = () => f(u(c).id), H(J, ie);
            }, "consequent_6");
            ee(oe, (J) => {
              t.editingEnabled && J(fe);
            });
          }
          X(() => {
            F(D, "src", u(c).img), F(D, "alt", u(c).name), I(M, u(c).name);
          }), it("dragstart", x, (J) => v(J, u(c))), H(p, x);
        }, "consequent_7");
        ee(se, (p) => {
          u(c) && p(N);
        });
      }
      X(
        (p, x) => {
          I(R, p), F($, "src", u(o).img), F($, "alt", u(o).name), I(K, `${u(o).name ?? ""} (${x ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), it("dragstart", q, (p) => v(p, u(o))), H(S, O);
    }, "consequent_8");
    ee(w, (S) => {
      u(o) && S(A);
    });
  }
  var y = m(w, 2);
  {
    var W = /* @__PURE__ */ r((S) => {
      var O = go(), L = h(O), R = h(L), q = m(L, 2);
      ut(q, 21, () => u(n), ct, ($, j) => {
        var K = po(), Y = h(K), ae = m(Y, 2);
        ae.__click = () => l(u(j).id);
        var se = h(ae), N = m(ae, 2);
        {
          var p = /* @__PURE__ */ r((x) => {
            var D = mo(), U = h(D);
            U.__click = () => l(u(j).id);
            var M = m(U, 2);
            M.__click = () => f(u(j).id), H(x, D);
          }, "consequent_9");
          ee(N, (x) => {
            t.editingEnabled && x(p);
          });
        }
        X(() => {
          F(Y, "src", u(j).img), F(Y, "alt", u(j).name), I(se, u(j).name);
        }), it("dragstart", K, (x) => v(x, u(j))), H($, K);
      }), X(($) => I(R, $), [() => k("NWS.Features")]), H(S, O);
    }, "consequent_10");
    ee(y, (S) => {
      u(n).length > 0 && S(W);
    });
  }
  var ne = m(y, 2);
  {
    var E = /* @__PURE__ */ r((S) => {
      var O = Eo(), L = h(O), R = h(L), q = m(L, 2);
      ut(q, 21, () => u(a), ct, ($, j) => {
        var K = wo(), Y = h(K), ae = m(Y, 2);
        ae.__click = () => l(u(j).id);
        var se = h(ae), N = m(ae, 2);
        {
          var p = /* @__PURE__ */ r((x) => {
            var D = yo(), U = h(D);
            U.__click = () => l(u(j).id);
            var M = m(U, 2);
            M.__click = () => f(u(j).id), H(x, D);
          }, "consequent_11");
          ee(N, (x) => {
            t.editingEnabled && x(p);
          });
        }
        X(() => {
          F(Y, "src", u(j).img), F(Y, "alt", u(j).name), I(se, u(j).name);
        }), it("dragstart", K, (x) => v(x, u(j))), H($, K);
      }), X(($) => I(R, $), [() => k("NWS.Boons")]), H(S, O);
    }, "consequent_12");
    ee(ne, (S) => {
      u(a).length > 0 && S(E);
    });
  }
  var C = m(ne, 2);
  {
    var P = /* @__PURE__ */ r((S) => {
      var O = So(), L = h(O);
      X((R) => I(L, R), [() => k("NWS.DropFeaturesHere")]), H(S, O);
    }, "consequent_13");
    ee(C, (S) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && S(P);
    });
  }
  H(e, d), Ee();
}
r(nr, "FeaturesTab");
je(["click"]);
var ko = /* @__PURE__ */ z('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), No = /* @__PURE__ */ z('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), To = /* @__PURE__ */ z('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ao = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ z('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), Co = /* @__PURE__ */ z('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Do = /* @__PURE__ */ z('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Mo = /* @__PURE__ */ z('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function ar(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ B(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, C) => (E.sort ?? 0) - (C.sort ?? 0))), s = /* @__PURE__ */ B(() => u(n) ? u(a).filter((E) => E.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ B(() => {
    const E = {};
    for (const C of u(s)) {
      const P = C.system?.tier ?? 0, S = C.system?.isUtility ?? !1, O = S ? "_utility" : `_tier_${P}`, L = S ? k("NWS.Utility") : Rn("NWS.Tier", { n: P });
      E[O] ??= { label: L, spells: [] }, E[O].spells.push(C);
    }
    return Object.entries(E).sort(([C], [P]) => {
      if (C === "_utility") return 1;
      if (P === "_utility") return -1;
      const S = parseInt(C.replace("_tier_", "")), O = parseInt(P.replace("_tier_", ""));
      return S - O;
    });
  });
  function o(E) {
    t.actor.items.get(E)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(E) {
    t.actor.deleteEmbeddedDocuments("Item", [E]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  r(l, "createSpell");
  function f(E) {
    t.actor.activateItem(E);
  }
  r(f, "castSpell");
  function v(E, C) {
    const P = { type: "Item", uuid: C.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(P));
  }
  r(v, "onDragStart");
  var d = Mo(), _ = Wt(d), g = m(h(_), 2), w = m(g, 2);
  {
    var A = /* @__PURE__ */ r((E) => {
      var C = ko();
      C.__click = l;
      var P = m(h(C));
      X((S) => I(P, ` ${S ?? ""}`), [() => k("NWS.New")]), H(E, C);
    }, "consequent");
    ee(w, (E) => {
      t.editingEnabled && E(A);
    });
  }
  var y = m(_, 2);
  ut(y, 17, () => u(i), ct, (E, C) => {
    var P = /* @__PURE__ */ B(() => Ei(u(C), 2));
    let S = /* @__PURE__ */ r(() => u(P)[1], "tier");
    var O = Co(), L = h(O), R = h(L), q = m(L, 2);
    ut(q, 21, () => S().spells, ct, ($, j) => {
      var K = Io(), Y = h(K), ae = m(Y, 2);
      ae.__click = () => f(u(j).id);
      var se = h(ae), N = m(se);
      {
        var p = /* @__PURE__ */ r((J) => {
          var ie = No();
          X((Q) => F(ie, "data-tooltip", Q), [() => k("NWS.Concentration")]), H(J, ie);
        }, "consequent_1");
        ee(N, (J) => {
          u(j).system?.concentration && J(p);
        });
      }
      var x = m(N, 2);
      {
        var D = /* @__PURE__ */ r((J) => {
          var ie = To();
          X((Q) => F(ie, "data-tooltip", Q), [() => k("NWS.Utility")]), H(J, ie);
        }, "consequent_2");
        ee(x, (J) => {
          u(j).system?.isUtility && J(D);
        });
      }
      var U = m(ae, 2), M = h(U), oe = m(U, 2);
      {
        var fe = /* @__PURE__ */ r((J) => {
          var ie = Ao(), Q = h(ie);
          Q.__click = () => o(u(j).id);
          var le = m(Q, 2);
          le.__click = () => c(u(j).id), H(J, ie);
        }, "consequent_3");
        ee(oe, (J) => {
          t.editingEnabled && J(fe);
        });
      }
      X(() => {
        F(Y, "src", u(j).img), F(Y, "alt", u(j).name), I(se, `${u(j).name ?? ""} `), I(M, u(j).system?.activationCost ?? "");
      }), it("dragstart", K, (J) => v(J, u(j))), H($, K);
    }), X(() => I(R, S().label)), H(E, O);
  });
  var W = m(y, 2);
  {
    var ne = /* @__PURE__ */ r((E) => {
      var C = Do(), P = h(C);
      X((S) => I(P, S), [() => k("NWS.DropSpellsHere")]), H(E, C);
    }, "consequent_4");
    ee(W, (E) => {
      u(a).length === 0 && E(ne);
    });
  }
  X((E) => F(g, "placeholder", E), [() => k("NWS.SearchSpells")]), ti(g, () => u(n), (E) => Be(n, E)), H(e, d), Ee();
}
r(ar, "SpellsTab");
je(["click"]);
var Wo = /* @__PURE__ */ z('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Oo = /* @__PURE__ */ z('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Lo = /* @__PURE__ */ z('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Po = /* @__PURE__ */ z('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ro = /* @__PURE__ */ z('<div class="nos-currency"><div class="nos-currency__coin"><label> </label> <input type="number"/></div> <div class="nos-currency__coin"><label> </label> <input type="number"/></div> <div class="nos-currency__coin"><label> </label> <input type="number"/></div></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function rr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ B(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ B(() => t.actor.reactive.items.filter((N) => N.type === "object").sort((N, p) => (N.sort ?? 0) - (p.sort ?? 0))), i = /* @__PURE__ */ B(() => u(n) ? u(s).filter((N) => N.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
  function o(N) {
    t.actor.items.get(N)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(N) {
    t.actor.deleteEmbeddedDocuments("Item", [N]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(l, "createObject");
  function f(N, p) {
    t.actor.update({ [`system.currency.${N}.value`]: Number(p) });
  }
  r(f, "updateCurrency");
  function v(N, p) {
    t.actor.items.get(N)?.update({ "system.quantity": Number(p) });
  }
  r(v, "updateQuantity");
  function d(N, p) {
    const x = { type: "Item", uuid: p.uuid };
    N.dataTransfer.setData("text/plain", JSON.stringify(x));
  }
  r(d, "onDragStart");
  var _ = Ro(), g = Wt(_), w = h(g), A = h(w), y = h(A), W = m(A, 2);
  W.__change = ({ target: N }) => f("gp", N.value);
  var ne = m(w, 2), E = h(ne), C = h(E), P = m(E, 2);
  P.__change = ({ target: N }) => f("sp", N.value);
  var S = m(ne, 2), O = h(S), L = h(O), R = m(O, 2);
  R.__change = ({ target: N }) => f("cp", N.value);
  var q = m(g, 2), $ = m(h(q), 2), j = m($, 2);
  {
    var K = /* @__PURE__ */ r((N) => {
      var p = Wo();
      p.__click = l;
      var x = m(h(p));
      X((D) => I(x, ` ${D ?? ""}`), [() => k("NWS.New")]), H(N, p);
    }, "consequent");
    ee(j, (N) => {
      t.editingEnabled && N(K);
    });
  }
  var Y = m(q, 2);
  ut(Y, 21, () => u(i), ct, (N, p) => {
    var x = Lo(), D = h(x), U = m(D, 2);
    U.__click = () => o(u(p).id);
    var M = h(U), oe = m(U, 2);
    oe.__change = ({ target: ie }) => v(u(p).id, ie.value);
    var fe = m(oe, 2);
    {
      var J = /* @__PURE__ */ r((ie) => {
        var Q = Oo(), le = h(Q);
        le.__click = () => o(u(p).id);
        var Se = m(le, 2);
        Se.__click = () => c(u(p).id), H(ie, Q);
      }, "consequent_1");
      ee(fe, (ie) => {
        t.editingEnabled && ie(J);
      });
    }
    X(() => {
      F(D, "src", u(p).img), F(D, "alt", u(p).name), I(M, u(p).name), Te(oe, u(p).system?.quantity ?? 1);
    }), it("dragstart", x, (ie) => d(ie, u(p))), H(N, x);
  });
  var ae = m(Y, 2);
  {
    var se = /* @__PURE__ */ r((N) => {
      var p = Po(), x = h(p);
      X((D) => I(x, D), [() => k("NWS.DropInventoryHere")]), H(N, p);
    }, "consequent_2");
    ee(ae, (N) => {
      u(s).length === 0 && N(se);
    });
  }
  X(
    (N, p, x, D) => {
      I(y, N), Te(W, u(a).gp?.value ?? 0), I(C, p), Te(P, u(a).sp?.value ?? 0), I(L, x), Te(R, u(a).cp?.value ?? 0), F($, "placeholder", D);
    },
    [
      () => k("NWS.GP"),
      () => k("NWS.SP"),
      () => k("NWS.CP"),
      () => k("NWS.SearchItems")
    ]
  ), ti($, () => u(n), (N) => Be(n, N)), H(e, _), Ee();
}
r(rr, "InventoryTab");
je(["change", "click"]);
var Ho = /* @__PURE__ */ z(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function ir(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ B(() => t.actor.reactive.system.details), a = /* @__PURE__ */ B(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ B(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ B(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ B(() => (u(a).weapons ?? []).join(", "));
  var c = Ho(), l = h(c), f = h(l), v = h(f), d = m(f, 2);
  d.__change = ({ target: _e }) => t.actor.update({ "system.details.age": _e.value });
  var _ = m(l, 2), g = h(_), w = h(g), A = m(g, 2);
  A.__change = ({ target: _e }) => t.actor.update({ "system.details.gender": _e.value });
  var y = m(_, 2), W = h(y), ne = h(W), E = m(W, 2);
  E.__change = ({ target: _e }) => t.actor.update({ "system.details.height": _e.value });
  var C = m(y, 2), P = h(C), S = h(P), O = m(P, 2);
  O.__change = ({ target: _e }) => t.actor.update({ "system.details.weight": _e.value });
  var L = m(C, 2), R = h(L), q = h(R), $ = m(R, 2), j = h($), K = m($, 2);
  K.__click = () => t.actor.configureLanguageProficiencies();
  var Y = m(L, 2), ae = h(Y), se = h(ae), N = m(ae, 2), p = h(N), x = m(N, 2);
  x.__click = () => t.actor.configureArmorProficiencies();
  var D = m(Y, 2), U = h(D), M = h(U), oe = m(U, 2), fe = h(oe), J = m(oe, 2);
  J.__click = () => t.actor.configureWeaponProficiencies();
  var ie = m(D, 2), Q = h(ie), le = h(Q), Se = m(Q, 2), ye = h(Se);
  Ls(ye, () => u(n).notes ?? ""), X(
    (_e, cn, un, Jn, Qn, Nn, Xn, Tn, Zn, fn, $n, ue, ze) => {
      I(v, _e), Te(d, u(n).age ?? ""), d.disabled = !t.editingEnabled, I(w, cn), Te(A, u(n).gender ?? ""), A.disabled = !t.editingEnabled, I(ne, un), Te(E, u(n).height ?? ""), F(E, "placeholder", Jn), E.disabled = !t.editingEnabled, I(S, Qn), Te(O, u(n).weight ?? ""), F(O, "placeholder", Nn), O.disabled = !t.editingEnabled, I(q, Xn), I(j, u(s) || "—"), F(K, "data-tooltip", Tn), K.disabled = !t.editingEnabled, I(se, Zn), I(p, u(i) || "—"), F(x, "data-tooltip", fn), x.disabled = !t.editingEnabled, I(M, $n), I(fe, u(o) || "—"), F(J, "data-tooltip", ue), J.disabled = !t.editingEnabled, I(le, ze), F(Se, "contenteditable", t.editingEnabled ? "true" : "false");
    },
    [
      () => k("NWS.Age"),
      () => k("NWS.Gender"),
      () => k("NWS.Height"),
      () => k("NWS.Height"),
      () => k("NWS.Weight"),
      () => k("NWS.Weight"),
      () => k("NWS.Languages"),
      () => k("NWS.ConfigureLanguages"),
      () => k("NWS.ArmorProficiencies"),
      () => k("NWS.ConfigureArmorProficiencies"),
      () => k("NWS.WeaponProficiencies"),
      () => k("NWS.ConfigureWeaponProficiencies"),
      () => k("NWS.Notes")
    ]
  ), it("blur", Se, ({ target: _e }) => t.actor.update({ "system.details.notes": _e.innerHTML })), H(e, c), Ee();
}
r(ir, "BioTab");
je(["change", "click"]);
var Fo = /* @__PURE__ */ z('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), jo = /* @__PURE__ */ z('<div class="nos-slot nos-slot--empty"> </div>'), zo = /* @__PURE__ */ z("<!> <!>", 1);
function Uo(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ B(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = zo(), s = Wt(a);
  ut(s, 17, () => u(n), ct, (c, l) => {
    var f = Fo(), v = h(f), d = m(v, 2);
    d.__click = () => t.actor.activateItem(u(l).id);
    var _ = h(d);
    X(() => {
      F(v, "src", u(l).img), F(v, "alt", u(l).name), F(d, "data-tooltip", u(l).name), I(_, u(l).name);
    }), H(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = jo(), f = h(l);
      X((v) => I(f, v), [() => k("NWS.NoWeapons")]), H(c, l);
    }, "consequent");
    ee(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  H(e, a), Ee();
}
r(Uo, "InventorySlots");
je(["click"]);
var Bo = /* @__PURE__ */ z('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), qo = /* @__PURE__ */ z('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), Ko = /* @__PURE__ */ z('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function Vo(e, t) {
  we(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: nr
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: ar
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: rr
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: ir
    }
  ];
  let a = /* @__PURE__ */ Le("features"), s = /* @__PURE__ */ B(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ B(() => t.actor.reactive.system.inventory);
  var o = Ko(), c = h(o);
  ut(c, 21, () => n, ct, (E, C) => {
    var P = Bo();
    let S;
    P.__click = () => Be(a, u(C).name, !0);
    var O = h(P), L = m(O);
    X(
      (R) => {
        S = on(P, 1, "nos-tab-btn", null, S, { "nos-tab-btn--active": u(a) === u(C).name }), on(O, 1, u(C).icon), I(L, ` ${R ?? ""}`);
      },
      [() => k(u(C).labelKey)]
    ), H(E, P);
  });
  var l = m(c, 2), f = h(l);
  {
    var v = /* @__PURE__ */ r((E) => {
      nr(E, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), d = /* @__PURE__ */ r((E) => {
      var C = ia(), P = Wt(C);
      {
        var S = /* @__PURE__ */ r((L) => {
          ar(L, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), O = /* @__PURE__ */ r((L) => {
          var R = ia(), q = Wt(R);
          {
            var $ = /* @__PURE__ */ r((K) => {
              rr(K, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), j = /* @__PURE__ */ r((K) => {
              var Y = ia(), ae = Wt(Y);
              {
                var se = /* @__PURE__ */ r((N) => {
                  ir(N, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                ee(
                  ae,
                  (N) => {
                    u(a) === "bio" && N(se);
                  },
                  !0
                );
              }
              H(K, Y);
            }, "alternate");
            ee(
              q,
              (K) => {
                u(a) === "inventory" ? K($) : K(j, !1);
              },
              !0
            );
          }
          H(L, R);
        }, "alternate_1");
        ee(
          P,
          (L) => {
            u(a) === "spells" ? L(S) : L(O, !1);
          },
          !0
        );
      }
      H(E, C);
    }, "alternate_2");
    ee(f, (E) => {
      u(a) === "features" ? E(v) : E(d, !1);
    });
  }
  var _ = m(l, 2), g = h(_), w = h(g), A = m(_, 2), y = h(A);
  Uo(y, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return t.editingEnabled;
    }
  });
  var W = m(y, 2);
  {
    var ne = /* @__PURE__ */ r((E) => {
      var C = qo(), P = h(C);
      X(() => I(P, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), H(E, C);
    }, "consequent_4");
    ee(W, (E) => {
      u(s) && E(ne);
    });
  }
  X((E) => I(w, E), [() => k("NWS.Weapons")]), H(e, o), Ee();
}
r(Vo, "ContentArea");
je(["click"]);
var Go = /* @__PURE__ */ z('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function Yo(e, t) {
  we(t, !0);
  var n = Go(), a = h(n);
  let s;
  a.__click = function(...v) {
    t.toggleEditingEnabled?.apply(this, v);
  };
  var i = h(a), o = m(a, 2);
  o.__click = () => t.actor.triggerLevelUp();
  var c = m(o, 2);
  c.__click = () => t.actor.triggerLevelDown();
  var l = m(c, 2);
  l.__click = () => t.actor.triggerRest({ restType: "field" });
  var f = m(l, 2);
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), X(
    (v, d, _, g, w, A, y, W, ne, E) => {
      s = on(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), F(a, "aria-pressed", t.editingEnabled), F(a, "aria-label", v), F(a, "data-tooltip", d), on(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), F(o, "aria-label", _), F(o, "data-tooltip", g), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, F(c, "aria-label", w), F(c, "data-tooltip", A), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, F(l, "aria-label", y), F(l, "data-tooltip", W), F(f, "aria-label", ne), F(f, "data-tooltip", E);
    },
    [
      () => t.editingEnabled ? k("NWS.DisableEditing") : k("NWS.EnableEditing"),
      () => t.editingEnabled ? k("NWS.EditingEnabled") : k("NWS.EditingLocked"),
      () => k("NWS.LevelUp"),
      () => k("NWS.LevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.FieldRest"),
      () => k("NWS.FieldRest"),
      () => k("NWS.SafeRest"),
      () => k("NWS.SafeRest")
    ]
  ), H(e, n), Ee();
}
r(Yo, "SidebarControls");
je(["click"]);
var Jo = /* @__PURE__ */ z('<div class="nos-sheet" style="position: relative;"><!> <!> <!> <!> <!> <span class="nos-logo">Nimble</span></div>');
function Qo(e, t) {
  we(t, !0);
  const n = Ar((p) => {
    const x = {
      updateActor: Hooks.on("updateActor", (D, U, M) => {
        M.diff !== !1 && D._id === t.actor.id && p();
      }),
      createItem: Hooks.on("createItem", (D) => {
        D?.actor?.id === t.actor.id && p();
      }),
      deleteItem: Hooks.on("deleteItem", (D) => {
        D?.actor?.id === t.actor.id && p();
      }),
      updateItem: Hooks.on("updateItem", (D, U, M) => {
        M.diff !== !1 && D?.actor?.id === t.actor.id && p();
      })
    };
    return () => {
      Hooks.off("updateActor", x.updateActor), Hooks.off("createItem", x.createItem), Hooks.off("deleteItem", x.deleteItem), Hooks.off("updateItem", x.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(p, x) {
      if (x === "reactive")
        return n(), p;
      const D = p[x];
      return typeof D == "function" ? D.bind(p) : D;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(p, x) {
    return Math.clamp(0, Math.round(p / x * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(p, x, D, U) {
    const M = [];
    return D && M.push(`${D.name} (${s[U] ?? U})`), p && (x ? M.push(`${p.name} (${x.name}, ${p.system.classLevel})`) : M.push(`${p.name} (${p.system.classLevel})`)), M.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(p, x) {
    if (!x) return p;
    const D = [4, 6, 8, 10, 12, 20], U = D.indexOf(p);
    return U === -1 ? p : D[Math.min(U + x, D.length - 1)];
  }
  r(f, "incrementDieSize");
  let v = /* @__PURE__ */ B(() => c(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function d(p) {
    a.update({ "system.attributes.hp.value": p });
  }
  r(d, "updateCurrentHP");
  function _(p) {
    a.update({ "system.attributes.hp.max": p });
  }
  r(_, "updateMaxHP");
  function g(p) {
    a.update({ "system.attributes.hp.temp": p });
  }
  r(g, "updateTempHP");
  let w = /* @__PURE__ */ B(() => a.reactive.system.resources.mana), A = /* @__PURE__ */ B(() => (u(w).max ?? 0) > 0 || (u(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((p) => p.type === "class" && p.system?.mana?.formula?.length));
  function y(p) {
    a.update({ "system.resources.mana.current": p });
  }
  r(y, "updateCurrentMana");
  function W(p) {
    const x = a.reactive.system.resources.mana, D = x.baseMax ?? 0, M = (x.max || D) - D, oe = Math.max(0, p - M);
    a.update({ "system.resources.mana.baseMax": oe });
  }
  r(W, "updateMaxMana");
  let ne = /* @__PURE__ */ B(() => {
    const p = a.reactive.system.attributes.hitDice, x = a.reactive.system.attributes.bonusHitDice ?? [], D = a.reactive.items.filter((Q) => Q.type === "class"), U = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, M = {};
    for (const Q of D) {
      const le = Q.system.hitDieSize, Se = f(le, U), ye = Q.system.classLevel;
      M[Se] ??= { current: 0, total: 0 }, M[Se].total += ye, M[Se].current = p[Se]?.current ?? 0;
    }
    const oe = D.map((Q) => f(Q.system.hitDieSize, U));
    for (const Q of x) {
      const le = f(Q.size, U);
      M[le] ??= { current: p[le]?.current ?? 0, total: 0 }, M[le].total += Q.value, oe.includes(le) || (M[le].current = p[le]?.current ?? 0);
    }
    const fe = x.map((Q) => f(Q.size, U));
    for (const [Q, le] of Object.entries(p ?? {})) {
      const Se = Number(Q), ye = f(Se, U), _e = le?.bonus ?? 0;
      if (_e > 0) {
        M[ye] ??= { current: 0, total: 0 }, M[ye].total += _e;
        const cn = oe.includes(ye), un = fe.includes(ye);
        !cn && !un && (M[ye].current = p[ye]?.current ?? 0);
      }
    }
    let J = 0, ie = 0;
    for (const Q of Object.values(M))
      J += Q.current, ie += Q.total;
    return { bySize: M, value: J, max: ie };
  });
  async function E(p) {
    await a.updateCurrentHitDice(p);
  }
  r(E, "updateCurrentHitDice");
  async function C() {
    await a.rollHitDice();
  }
  r(C, "rollHitDice");
  async function P() {
    await a.editCurrentHitDice();
  }
  r(P, "editCurrentHitDice");
  let S = /* @__PURE__ */ B(() => a.reactive.items.find((p) => p.type === "class") ?? null), O = /* @__PURE__ */ B(() => {
    const p = a.reactive.items.find((M) => M.type === "class") ?? null, x = a.reactive.items.find((M) => M.type === "subclass") ?? null, D = a.reactive.items.find((M) => M.type === "ancestry") ?? null, U = a.reactive.system.attributes.sizeCategory;
    return l(p, x, D, U);
  }), L = /* @__PURE__ */ B(() => a.reactive.flags.nimble), R = /* @__PURE__ */ B(() => u(L)?.editingEnabled ?? !0);
  const q = js(!1, (p) => (ps(() => p(u(R))), () => {
  }));
  async function $() {
    await a.setFlag("nimble", "editingEnabled", !u(R));
  }
  r($, "toggleEditingEnabled"), An("actor", a), An("document", a), An("application", t.sheet), An("editingEnabled", q);
  var j = Jo(), K = h(j);
  Gs(K, {
    get actor() {
      return a;
    },
    get metaData() {
      return u(O);
    },
    get editingEnabled() {
      return u(R);
    },
    get hitDiceData() {
      return u(ne);
    }
  });
  var Y = m(K, 2);
  no(Y, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(R);
    },
    get isBloodied() {
      return u(v);
    },
    get hitDiceData() {
      return u(ne);
    },
    get hasMana() {
      return u(A);
    },
    get mana() {
      return u(w);
    },
    updateCurrentHP: d,
    updateMaxHP: _,
    updateTempHP: g,
    updateCurrentMana: y,
    updateMaxMana: W,
    updateCurrentHitDice: E,
    rollHitDice: C,
    editCurrentHitDice: P
  });
  var ae = m(Y, 2);
  so(ae, {
    get actor() {
      return a;
    }
  });
  var se = m(ae, 2);
  Vo(se, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(R);
    },
    get hasMana() {
      return u(A);
    },
    get mana() {
      return u(w);
    },
    updateCurrentMana: y,
    updateMaxMana: W
  });
  var N = m(se, 2);
  Yo(N, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(R);
    },
    toggleEditingEnabled: $,
    get classItem() {
      return u(S);
    }
  }), H(e, j), Ee();
}
r(Qo, "WhiteSheet");
const zn = class zn extends Us(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  props;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = Qo;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document, this.props = { actor: this.document, sheet: this };
  }
  get actor() {
    return this._actor;
  }
  async _prepareContext(t) {
    return { ...await super._prepareContext(t), actor: this._actor, sheet: this };
  }
  _attachFrameListeners() {
    super._attachFrameListeners();
  }
  async _onDropItem(t, n) {
    t.preventDefault(), t.stopPropagation();
    const a = this.document;
    if (Hooks.call("dropActorSheetData", a, this, n) === !1 || !this.document.isOwner) return !1;
    const i = await Item.implementation.fromDropData(n);
    if (!i) return !1;
    const o = i.toObject();
    if (o.id = i.id, i.uuid && !o.uuid && (o.uuid = i.uuid), !!this._actor.items.has(i.id ?? ""))
      return this._onSortItem(t, o);
    const l = Array.isArray(o) ? o : [o];
    return l.some((v) => v.type === "subclass") ? this._onDropSubclassCreate(l) : this._actor.createEmbeddedDocuments("Item", l);
  }
  async _onDropSubclassCreate(t) {
    const n = Array.isArray(t) ? t : [t], a = this.document, s = [];
    for (const i of n) {
      if (i.type === "subclass") {
        const o = i, c = o.system?.parentClass, l = a.levels?.character ?? 0;
        if (l < 3) {
          ui.notifications?.warn(`You must be at least level 3 to select a subclass. You are currently level ${l}.`);
          continue;
        }
        if (!Object.values(a.classes ?? {}).some((d) => d.identifier === c)) {
          const d = CONFIG.NIMBLE?.classes?.[c] ?? c;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${d} class.`);
          continue;
        }
        const v = a.items.find((d) => d.type === "subclass" && d.system?.parentClass === c);
        if (v) {
          const d = v.system?.identifier, _ = o.system?.identifier;
          if (d && _ && d === _) {
            ui.notifications?.warn(`You already have the "${v.name}" subclass.`);
            continue;
          }
          if (!await foundry.applications.api.DialogV2.confirm({
            content: `<p>You already have the <strong>${v.name}</strong> subclass.<br />Do you want to replace it with <strong>${o.name}</strong>?</p>`,
            rejectClose: !1,
            modal: !0
          })) continue;
          await a.deleteEmbeddedDocuments("Item", [v.id]);
        }
      }
      s.push(i);
    }
    return s.length > 0 ? a.createEmbeddedDocuments("Item", s) : [];
  }
};
r(zn, "WhiteCharacterSheet"), Qe(zn, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let ka = zn;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-white-sheet",
    ka,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Nimble White Sheet"
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
