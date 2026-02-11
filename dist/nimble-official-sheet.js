var Ti = Object.defineProperty;
var Ii = (e) => {
  throw TypeError(e);
};
var za = (e, t, n) => t in e ? Ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Ti(e, "name", { value: t, configurable: !0 });
var qe = (e, t, n) => za(e, typeof t != "symbol" ? t + "" : t, n), zn = (e, t, n) => t.has(e) || Ii("Cannot " + n);
var b = (e, t, n) => (zn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), R = (e, t, n) => t.has(e) ? Ii("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), F = (e, t, n, i) => (zn(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), be = (e, t, n) => (zn(e, t, "access private method"), n);
const ue = /* @__PURE__ */ Symbol(), Ba = /* @__PURE__ */ Symbol("filename"), Ua = "http://www.w3.org/1999/xhtml", Mi = globalThis.process?.env?.NODE_ENV, A = Mi && !Mi.toLowerCase().startsWith("prod");
var Vi = Array.isArray, qa = Array.prototype.indexOf, It = Array.prototype.includes, Nn = Array.from, Mt = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, Va = Object.getOwnPropertyDescriptors, Wa = Object.prototype, Ya = Array.prototype, Wi = Object.getPrototypeOf, Di = Object.isExtensible;
const Bn = /* @__PURE__ */ r(() => {
}, "noop");
function Ka(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(Ka, "run_all");
function Yi() {
  var e, t, n = new Promise((i, s) => {
    e = i, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(Yi, "deferred");
function Ga(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const i of e)
    if (n.push(i), n.length === t) break;
  return n;
}
r(Ga, "to_array");
const de = 2, Kn = 4, On = 8, Ki = 1 << 24, it = 16, Ue = 32, Lt = 64, _i = 128, De = 512, oe = 1024, ve = 2048, Be = 4096, xe = 8192, ct = 16384, hi = 32768, Dt = 65536, xn = 1 << 17, Gi = 1 << 18, nn = 1 << 19, Xa = 1 << 20, nt = 1 << 25, _t = 32768, Gn = 1 << 21, Ln = 1 << 22, ut = 1 << 23, Ut = /* @__PURE__ */ Symbol("$state"), Qa = /* @__PURE__ */ Symbol(""), Xi = /* @__PURE__ */ Symbol("proxy path");
var qt;
const zt = new (qt = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(qt, "StaleReactionError"), qt)();
function Za(e) {
  if (A) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Za, "lifecycle_outside_component");
function Ja() {
  if (A) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Ja, "async_derived_orphan");
function Ni() {
  if (A) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(Ni, "bind_invalid_checkbox_value");
function $a() {
  if (A) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r($a, "derived_references_self");
function Qi(e, t, n) {
  if (A) {
    const i = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw i.name = "Svelte error", i;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(Qi, "each_key_duplicate");
function er(e) {
  if (A) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(er, "effect_in_teardown");
function tr() {
  if (A) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(tr, "effect_in_unowned_derived");
function nr(e) {
  if (A) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(nr, "effect_orphan");
function ir() {
  if (A) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(ir, "effect_update_depth_exceeded");
function ar(e) {
  if (A) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(ar, "rune_outside_svelte");
function rr() {
  if (A) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(rr, "state_descriptors_fixed");
function sr() {
  if (A) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(sr, "state_prototype_fixed");
function or() {
  if (A) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(or, "state_unsafe_mutation");
function lr() {
  if (A) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(lr, "svelte_boundary_reset_onerror");
var Pn = "font-weight: bold", Rn = "font-weight: normal";
function cr() {
  A ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Pn, Rn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(cr, "lifecycle_double_unmount");
function Un(e) {
  A ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Pn, Rn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(Un, "state_proxy_equality_mismatch");
function ur() {
  A ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Pn, Rn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(ur, "state_proxy_unmount");
function fr() {
  A ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Pn, Rn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(fr, "svelte_boundary_reset_noop");
function Zi(e) {
  return e === this.v;
}
r(Zi, "equals");
function Ji(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(Ji, "safe_not_equal");
function $i(e) {
  return !Ji(e, this.v);
}
r($i, "safe_equals");
let dr = !1;
function Ve(e, t) {
  return e.label = t, ea(e.v, t), e;
}
r(Ve, "tag");
function ea(e, t) {
  return e?.[Xi]?.(t), e;
}
r(ea, "tag_proxy");
function vr(e) {
  const t = new Error(), n = _r();
  return n.length === 0 ? null : (n.unshift(`
`), Mt(t, "stack", {
    value: n.join(`
`)
  }), Mt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(vr, "get_error");
function _r() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), i = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s], o = a.replaceAll("\\", "/");
    if (a.trim() !== "Error") {
      if (a.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || i.push(a);
    }
  }
  return i;
}
r(_r, "get_stack");
let fe = null;
function Zt(e) {
  fe = e;
}
r(Zt, "set_component_context");
let cn = null;
function Sn(e) {
  cn = e;
}
r(Sn, "set_dev_stack");
let hn = null;
function Oi(e) {
  hn = e;
}
r(Oi, "set_dev_current_component_function");
function gn(e, t) {
  return hr("setContext").set(e, t), t;
}
r(gn, "setContext");
function _e(e, t = !1, n) {
  fe = {
    p: fe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, A && (fe.function = n, hn = n);
}
r(_e, "push");
function he(e) {
  var t = (
    /** @type {ComponentContext} */
    fe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      ga(i);
  }
  return t.i = !0, fe = t.p, A && (hn = fe?.function ?? null), /** @type {T} */
  {};
}
r(he, "pop");
function ta() {
  return !0;
}
r(ta, "is_runes");
function hr(e) {
  return fe === null && Za(e), fe.c ??= new Map(br(fe) || void 0);
}
r(hr, "get_or_init_context_map");
function br(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
r(br, "get_parent_context");
let mt = [];
function na() {
  var e = mt;
  mt = [], Ka(e);
}
r(na, "run_micro_tasks");
function ft(e) {
  if (mt.length === 0 && !on) {
    var t = mt;
    queueMicrotask(() => {
      t === mt && na();
    });
  }
  mt.push(e);
}
r(ft, "queue_micro_task");
function mr() {
  for (; mt.length > 0; )
    na();
}
r(mr, "flush_tasks");
const Xn = /* @__PURE__ */ new WeakMap();
function ia(e) {
  var t = W;
  if (t === null)
    return B.f |= ut, e;
  if (A && e instanceof Error && !Xn.has(e) && Xn.set(e, pr(e, t)), (t.f & hi) === 0) {
    if ((t.f & _i) === 0)
      throw A && !t.parent && e instanceof Error && aa(e), e;
    t.b.error(e);
  } else
    Jt(e, t);
}
r(ia, "handle_error");
function Jt(e, t) {
  for (; t !== null; ) {
    if ((t.f & _i) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw A && e instanceof Error && aa(e), e;
}
r(Jt, "invoke_error_boundary");
function pr(e, t) {
  const n = Bt(e, "message");
  if (!(n && !n.configurable)) {
    for (var i = yi ? "  " : "	", s = `
${i}in ${t.fn?.name || "<unknown>"}`, a = t.ctx; a !== null; )
      s += `
${i}in ${a.function?.[Ba].split("/").pop()}`, a = a.p;
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
r(pr, "get_adjustments");
function aa(e) {
  const t = Xn.get(e);
  t && (Mt(e, "message", {
    value: t.message
  }), Mt(e, "stack", {
    value: t.stack
  }));
}
r(aa, "apply_adjustments");
const gr = -7169;
function ae(e, t) {
  e.f = e.f & gr | t;
}
r(ae, "set_signal_status");
function bi(e) {
  (e.f & De) !== 0 || e.deps === null ? ae(e, oe) : ae(e, Be);
}
r(bi, "update_derived_status");
function ra(e) {
  if (e !== null)
    for (const t of e)
      (t.f & de) === 0 || (t.f & _t) === 0 || (t.f ^= _t, ra(
        /** @type {Derived} */
        t.deps
      ));
}
r(ra, "clear_marked");
function sa(e, t, n) {
  (e.f & ve) !== 0 ? t.add(e) : (e.f & Be) !== 0 && n.add(e), ra(e.deps), ae(e, oe);
}
r(sa, "defer_effect");
const yn = /* @__PURE__ */ new Set();
let G = null, Qn = null, Fe = null, pe = [], Fn = null, Zn = !1, on = !1;
var Vt, Wt, yt, Yt, fn, dn, wt, et, Kt, Je, Jn, $n, oa;
const Tn = class Tn {
  constructor() {
    R(this, Je);
    qe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    qe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    qe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    R(this, Vt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Wt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    R(this, yt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    R(this, Yt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, fn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, dn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, wt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    R(this, et, /* @__PURE__ */ new Map());
    qe(this, "is_fork", !1);
    R(this, Kt, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, Yt) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, et).has(t) || b(this, et).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, et).get(t);
    if (n) {
      b(this, et).delete(t);
      for (var i of n.d)
        ae(i, ve), He(i);
      for (i of n.m)
        ae(i, Be), He(i);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    pe = [], this.apply();
    var n = [], i = [];
    for (const s of t)
      be(this, Je, Jn).call(this, s, n, i);
    if (this.is_deferred()) {
      be(this, Je, $n).call(this, i), be(this, Je, $n).call(this, n);
      for (const [s, a] of b(this, et))
        fa(s, a);
    } else {
      for (const s of b(this, Vt)) s();
      b(this, Vt).clear(), b(this, yt) === 0 && be(this, Je, oa).call(this), Qn = this, G = null, Li(i), Li(n), Qn = null, b(this, fn)?.resolve();
    }
    Fe = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== ue && !this.previous.has(t) && this.previous.set(t, n), (t.f & ut) === 0 && (this.current.set(t, t.v), Fe?.set(t, t.v));
  }
  activate() {
    G = this, this.apply();
  }
  deactivate() {
    G === this && (G = null, Fe = null);
  }
  flush() {
    if (this.activate(), pe.length > 0) {
      if (la(), G !== null && G !== this)
        return;
    } else b(this, yt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, Wt)) t(this);
    b(this, Wt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    F(this, yt, b(this, yt) + 1), t && F(this, Yt, b(this, Yt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    F(this, yt, b(this, yt) - 1), t && F(this, Yt, b(this, Yt) - 1), !b(this, Kt) && (F(this, Kt, !0), ft(() => {
      F(this, Kt, !1), this.is_deferred() ? pe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, dn))
      b(this, wt).delete(t), ae(t, ve), He(t);
    for (const t of b(this, wt))
      ae(t, Be), He(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, Vt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, Wt).add(t);
  }
  settled() {
    return (b(this, fn) ?? F(this, fn, Yi())).promise;
  }
  static ensure() {
    if (G === null) {
      const t = G = new Tn();
      yn.add(G), on || ft(() => {
        G === t && t.flush();
      });
    }
    return G;
  }
  apply() {
  }
};
Vt = new WeakMap(), Wt = new WeakMap(), yt = new WeakMap(), Yt = new WeakMap(), fn = new WeakMap(), dn = new WeakMap(), wt = new WeakMap(), et = new WeakMap(), Kt = new WeakMap(), Je = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Jn = /* @__PURE__ */ r(function(t, n, i) {
  t.f ^= oe;
  for (var s = t.first, a = null; s !== null; ) {
    var o = s.f, c = (o & (Ue | Lt)) !== 0, l = c && (o & oe) !== 0, f = l || (o & xe) !== 0 || b(this, et).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= oe : a !== null && (o & (Kn | On | Ki)) !== 0 ? a.b.defer_effect(s) : (o & Kn) !== 0 ? n.push(s) : pn(s) && ((o & it) !== 0 && b(this, wt).add(s), un(s));
      var v = s.first;
      if (v !== null) {
        s = v;
        continue;
      }
    }
    var d = s.parent;
    for (s = s.next; s === null && d !== null; )
      d === a && (a = null), s = d.next, d = d.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
$n = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    sa(t[n], b(this, dn), b(this, wt));
}, "#defer_effects"), oa = /* @__PURE__ */ r(function() {
  var s;
  if (yn.size > 1) {
    this.previous.clear();
    var t = Fe, n = !0;
    for (const a of yn) {
      if (a === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [l, f] of this.current) {
        if (a.current.has(l))
          if (n && f !== a.current.get(l))
            a.current.set(l, f);
          else
            continue;
        o.push(l);
      }
      if (o.length === 0)
        continue;
      const c = [...a.current.keys()].filter((l) => !this.current.has(l));
      if (c.length > 0) {
        var i = pe;
        pe = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const v of o)
          ca(v, c, l, f);
        if (pe.length > 0) {
          G = a, a.apply();
          for (const v of pe)
            be(s = a, Je, Jn).call(s, v, [], []);
          a.deactivate();
        }
        pe = i;
      }
    }
    G = null, Fe = t;
  }
  this.committed = !0, yn.delete(this);
}, "#commit"), r(Tn, "Batch");
let dt = Tn;
function yr(e) {
  var t = on;
  on = !0;
  try {
    for (var n; ; ) {
      if (mr(), pe.length === 0 && (G?.flush(), pe.length === 0))
        return Fn = null, /** @type {T} */
        n;
      la();
    }
  } finally {
    on = t;
  }
}
r(yr, "flushSync");
function la() {
  Zn = !0;
  var e = A ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; pe.length > 0; ) {
      var n = dt.ensure();
      if (t++ > 1e3) {
        if (A) {
          var i = /* @__PURE__ */ new Map();
          for (const a of n.current.keys())
            for (const [o, c] of a.updated ?? []) {
              var s = i.get(o);
              s || (s = { error: c.error, count: 0 }, i.set(o, s)), s.count += c.count;
            }
          for (const a of i.values())
            a.error && console.error(a.error);
        }
        wr();
      }
      if (n.process(pe), vt.clear(), A)
        for (const a of n.current.keys())
          e.add(a);
    }
  } finally {
    if (pe = [], Zn = !1, Fn = null, A)
      for (
        const a of
        /** @type {Set<Source>} */
        e
      )
        a.updated = null;
  }
}
r(la, "flush_effects");
function wr() {
  try {
    ir();
  } catch (e) {
    A && Mt(e, "stack", { value: "" }), Jt(e, Fn);
  }
}
r(wr, "infinite_loop_guard");
let $e = null;
function Li(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (ct | xe)) === 0 && pn(i) && ($e = /* @__PURE__ */ new Set(), un(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? xa(i) : i.fn = null), $e?.size > 0)) {
        vt.clear();
        for (const s of $e) {
          if ((s.f & (ct | xe)) !== 0) continue;
          const a = [s];
          let o = s.parent;
          for (; o !== null; )
            $e.has(o) && ($e.delete(o), a.push(o)), o = o.parent;
          for (let c = a.length - 1; c >= 0; c--) {
            const l = a[c];
            (l.f & (ct | xe)) === 0 && un(l);
          }
        }
        $e.clear();
      }
    }
    $e = null;
  }
}
r(Li, "flush_queued_effects");
function ca(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & de) !== 0 ? ca(
        /** @type {Derived} */
        s,
        t,
        n,
        i
      ) : (a & (Ln | it)) !== 0 && (a & ve) === 0 && ua(s, t, i) && (ae(s, ve), He(
        /** @type {Effect} */
        s
      ));
    }
}
r(ca, "mark_effects");
function ua(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (It.call(t, s))
        return !0;
      if ((s.f & de) !== 0 && ua(
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
r(ua, "depends_on");
function He(e) {
  for (var t = Fn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Zn && t === W && (n & it) !== 0 && (n & Gi) === 0)
      return;
    if ((n & (Lt | Ue)) !== 0) {
      if ((n & oe) === 0) return;
      t.f ^= oe;
    }
  }
  pe.push(t);
}
r(He, "schedule_effect");
function fa(e, t) {
  if (!((e.f & Ue) !== 0 && (e.f & oe) !== 0)) {
    (e.f & ve) !== 0 ? t.d.push(e) : (e.f & Be) !== 0 && t.m.push(e), ae(e, oe);
    for (var n = e.first; n !== null; )
      fa(n, t), n = n.next;
  }
}
r(fa, "reset_branch");
function Er(e) {
  let t = 0, n = Nt(0), i;
  return A && Ve(n, "createSubscriber version"), () => {
    wi() && (u(n), ya(() => (t === 0 && (i = La(() => e(() => ln(n)))), t += 1, () => {
      ft(() => {
        t -= 1, t === 0 && (i?.(), i = void 0, ln(n));
      });
    })));
  };
}
r(Er, "createSubscriber");
var kr = Dt | nn | _i;
function xr(e, t, n) {
  new ei(e, t, n);
}
r(xr, "boundary");
var Ce, vi, We, Et, Ye, Te, me, Ke, tt, st, kt, ot, Gt, xt, Xt, Qt, Ge, In, le, Sr, Ar, ti, wn, En, ni;
const Si = class Si {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    R(this, le);
    /** @type {Boundary | null} */
    qe(this, "parent");
    qe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    R(this, Ce);
    /** @type {TemplateNode | null} */
    R(this, vi, null);
    /** @type {BoundaryProps} */
    R(this, We);
    /** @type {((anchor: Node) => void)} */
    R(this, Et);
    /** @type {Effect} */
    R(this, Ye);
    /** @type {Effect | null} */
    R(this, Te, null);
    /** @type {Effect | null} */
    R(this, me, null);
    /** @type {Effect | null} */
    R(this, Ke, null);
    /** @type {DocumentFragment | null} */
    R(this, tt, null);
    /** @type {TemplateNode | null} */
    R(this, st, null);
    R(this, kt, 0);
    R(this, ot, 0);
    R(this, Gt, !1);
    R(this, xt, !1);
    /** @type {Set<Effect>} */
    R(this, Xt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    R(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, Ge, null);
    R(this, In, Er(() => (F(this, Ge, Nt(b(this, kt))), A && Ve(b(this, Ge), "$effect.pending()"), () => {
      F(this, Ge, null);
    })));
    F(this, Ce, t), F(this, We, n), F(this, Et, i), this.parent = /** @type {Effect} */
    W.b, this.is_pending = !!b(this, We).pending, F(this, Ye, jn(() => {
      W.b = this;
      {
        var s = be(this, le, ti).call(this);
        try {
          F(this, Te, Me(() => i(s)));
        } catch (a) {
          this.error(a);
        }
        b(this, ot) > 0 ? be(this, le, En).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, st)?.remove();
      };
    }, kr));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    sa(t, b(this, Xt), b(this, Qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, We).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    be(this, le, ni).call(this, t), F(this, kt, b(this, kt) + t), !(!b(this, Ge) || b(this, Gt)) && (F(this, Gt, !0), ft(() => {
      F(this, Gt, !1), b(this, Ge) && en(b(this, Ge), b(this, kt));
    }));
  }
  get_effect_pending() {
    return b(this, In).call(this), u(
      /** @type {Source<number>} */
      b(this, Ge)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, We).onerror;
    let i = b(this, We).failed;
    if (b(this, xt) || !n && !i)
      throw t;
    b(this, Te) && (ye(b(this, Te)), F(this, Te, null)), b(this, me) && (ye(b(this, me)), F(this, me, null)), b(this, Ke) && (ye(b(this, Ke)), F(this, Ke, null));
    var s = !1, a = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        fr();
        return;
      }
      s = !0, a && lr(), dt.ensure(), F(this, kt, 0), b(this, Ke) !== null && Ct(b(this, Ke), () => {
        F(this, Ke, null);
      }), this.is_pending = this.has_pending_snippet(), F(this, Te, be(this, le, wn).call(this, () => (F(this, xt, !1), Me(() => b(this, Et).call(this, b(this, Ce)))))), b(this, ot) > 0 ? be(this, le, En).call(this) : this.is_pending = !1;
    }, "reset");
    ft(() => {
      try {
        a = !0, n?.(t, o), a = !1;
      } catch (c) {
        Jt(c, b(this, Ye) && b(this, Ye).parent);
      }
      i && F(this, Ke, be(this, le, wn).call(this, () => {
        dt.ensure(), F(this, xt, !0);
        try {
          return Me(() => {
            i(
              b(this, Ce),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return Jt(
            c,
            /** @type {Effect} */
            b(this, Ye).parent
          ), null;
        } finally {
          F(this, xt, !1);
        }
      }));
    });
  }
};
Ce = new WeakMap(), vi = new WeakMap(), We = new WeakMap(), Et = new WeakMap(), Ye = new WeakMap(), Te = new WeakMap(), me = new WeakMap(), Ke = new WeakMap(), tt = new WeakMap(), st = new WeakMap(), kt = new WeakMap(), ot = new WeakMap(), Gt = new WeakMap(), xt = new WeakMap(), Xt = new WeakMap(), Qt = new WeakMap(), Ge = new WeakMap(), In = new WeakMap(), le = new WeakSet(), Sr = /* @__PURE__ */ r(function() {
  try {
    F(this, Te, Me(() => b(this, Et).call(this, b(this, Ce))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), Ar = /* @__PURE__ */ r(function() {
  const t = b(this, We).pending;
  t && (F(this, me, Me(() => t(b(this, Ce)))), ft(() => {
    var n = be(this, le, ti).call(this);
    F(this, Te, be(this, le, wn).call(this, () => (dt.ensure(), Me(() => b(this, Et).call(this, n))))), b(this, ot) > 0 ? be(this, le, En).call(this) : (Ct(
      /** @type {Effect} */
      b(this, me),
      () => {
        F(this, me, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ti = /* @__PURE__ */ r(function() {
  var t = b(this, Ce);
  return this.is_pending && (F(this, st, At()), b(this, Ce).before(b(this, st)), t = b(this, st)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
wn = /* @__PURE__ */ r(function(t) {
  var n = W, i = B, s = fe;
  ze(b(this, Ye)), Le(b(this, Ye)), Zt(b(this, Ye).ctx);
  try {
    return t();
  } catch (a) {
    return ia(a), null;
  } finally {
    ze(n), Le(i), Zt(s);
  }
}, "#run"), En = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, We).pending
  );
  b(this, Te) !== null && (F(this, tt, document.createDocumentFragment()), b(this, tt).append(
    /** @type {TemplateNode} */
    b(this, st)
  ), Ca(b(this, Te), b(this, tt))), b(this, me) === null && F(this, me, Me(() => t(b(this, Ce))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ni = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && be(n = this.parent, le, ni).call(n, t);
    return;
  }
  if (F(this, ot, b(this, ot) + t), b(this, ot) === 0) {
    this.is_pending = !1;
    for (const i of b(this, Xt))
      ae(i, ve), He(i);
    for (const i of b(this, Qt))
      ae(i, Be), He(i);
    b(this, Xt).clear(), b(this, Qt).clear(), b(this, me) && Ct(b(this, me), () => {
      F(this, me, null);
    }), b(this, tt) && (b(this, Ce).before(b(this, tt)), F(this, tt, null));
  }
}, "#update_pending_count"), r(Si, "Boundary");
let ei = Si;
function Cr(e, t, n, i) {
  const s = mi;
  var a = e.filter((h) => !h.settled);
  if (n.length === 0 && a.length === 0) {
    i(t.map(s));
    return;
  }
  var o = G, c = (
    /** @type {Effect} */
    W
  ), l = Tr(), f = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function v(h) {
    l();
    try {
      i(h);
    } catch (p) {
      (c.f & ct) === 0 && Jt(p, c);
    }
    o?.deactivate(), ii();
  }
  if (r(v, "finish"), n.length === 0) {
    f.then(() => v(t.map(s)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((h) => /* @__PURE__ */ Mr(h))).then((h) => v([...t.map(s), ...h])).catch((h) => Jt(h, c));
  }
  r(d, "run"), f ? f.then(d) : d();
}
r(Cr, "flatten");
function Tr() {
  var e = W, t = B, n = fe, i = G;
  if (A)
    var s = cn;
  return /* @__PURE__ */ r(function(o = !0) {
    ze(e), Le(t), Zt(n), o && i?.activate(), A && Sn(s);
  }, "restore");
}
r(Tr, "capture");
function ii() {
  ze(null), Le(null), Zt(null), A && Sn(null);
}
r(ii, "unset_context");
const Ir = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function mi(e) {
  var t = de | ve, n = B !== null && (B.f & de) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return W !== null && (W.f |= nn), {
    ctx: fe,
    deps: null,
    effects: null,
    equals: Zi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ue
    ),
    wv: 0,
    parent: n ?? W,
    ac: null
  };
}
r(mi, "derived");
// @__NO_SIDE_EFFECTS__
function Mr(e, t, n) {
  let i = (
    /** @type {Effect | null} */
    W
  );
  i === null && Ja();
  var s = (
    /** @type {Boundary} */
    i.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Nt(
    /** @type {V} */
    ue
  );
  A && (o.label = t);
  var c = !B, l = /* @__PURE__ */ new Map();
  return Kr(() => {
    var f = Yi();
    a = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        v === G && v.committed && v.deactivate(), ii();
      });
    } catch (p) {
      f.reject(p), ii();
    }
    var v = (
      /** @type {Batch} */
      G
    );
    if (c) {
      var d = s.is_rendered();
      s.update_pending_count(1), v.increment(d), l.get(v)?.reject(zt), l.delete(v), l.set(v, f);
    }
    const h = /* @__PURE__ */ r((p, y = void 0) => {
      if (v.activate(), y)
        y !== zt && (o.f |= ut, en(o, y));
      else {
        (o.f & ut) !== 0 && (o.f ^= ut), en(o, p);
        for (const [E, g] of l) {
          if (l.delete(E), E === v) break;
          g.reject(zt);
        }
      }
      c && (s.update_pending_count(-1), v.decrement(d));
    }, "handler");
    f.promise.then(h, (p) => h(null, p || "unknown"));
  }), pa(() => {
    for (const f of l.values())
      f.reject(zt);
  }), A && (o.f |= Ln), new Promise((f) => {
    function v(d) {
      function h() {
        d === a ? f(o) : v(a);
      }
      r(h, "go"), d.then(h, h);
    }
    r(v, "next"), v(a);
  });
}
r(Mr, "async_derived");
// @__NO_SIDE_EFFECTS__
function M(e) {
  const t = /* @__PURE__ */ mi(e);
  return Ta(t), t;
}
r(M, "user_derived");
// @__NO_SIDE_EFFECTS__
function Dr(e) {
  const t = /* @__PURE__ */ mi(e);
  return t.equals = $i, t;
}
r(Dr, "derived_safe_equal");
function ai(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ye(
        /** @type {Effect} */
        t[n]
      );
  }
}
r(ai, "destroy_derived_effects");
let qn = [];
function Nr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & de) === 0)
      return (t.f & ct) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(Nr, "get_derived_parent_effect");
function pi(e) {
  var t, n = W;
  if (ze(Nr(e)), A) {
    let i = $t;
    Pi(/* @__PURE__ */ new Set());
    try {
      It.call(qn, e) && $a(), qn.push(e), e.f &= ~_t, ai(e), t = ri(e);
    } finally {
      ze(n), Pi(i), qn.pop();
    }
  } else
    try {
      e.f &= ~_t, ai(e), t = ri(e);
    } finally {
      ze(n);
    }
  return t;
}
r(pi, "execute_derived");
function da(e) {
  var t = pi(e);
  if (!e.equals(t) && (e.wv = Ma(), (!G?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ae(e, oe);
    return;
  }
  Ot || (Fe !== null ? (wi() || G?.is_fork) && Fe.set(e, t) : bi(e));
}
r(da, "update_derived");
let $t = /* @__PURE__ */ new Set();
const vt = /* @__PURE__ */ new Map();
function Pi(e) {
  $t = e;
}
r(Pi, "set_eager_effects");
let gi = !1;
function Or() {
  gi = !0;
}
r(Or, "set_eager_effects_deferred");
function Nt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zi,
    rv: 0,
    wv: 0
  };
  return n;
}
r(Nt, "source");
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  const n = Nt(e);
  return Ta(n), n;
}
r(Ie, "state");
// @__NO_SIDE_EFFECTS__
function Lr(e, t = !1, n = !0) {
  const i = Nt(e);
  return t || (i.equals = $i), i;
}
r(Lr, "mutable_source");
function Re(e, t, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!je || (B.f & xn) !== 0) && ta() && (B.f & (de | it | Ln | xn)) !== 0 && (Ne === null || !It.call(Ne, e)) && or();
  let i = n ? pt(t) : t;
  return A && ea(
    i,
    /** @type {string} */
    e.label
  ), en(e, i);
}
r(Re, "set");
function en(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ot ? vt.set(e, t) : vt.set(e, n), e.v = t;
    var i = dt.ensure();
    if (i.capture(e, n), A) {
      if (W !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const a = vr("updated at");
          if (a !== null) {
            let o = e.updated.get(a.stack);
            o || (o = { error: a, count: 0 }, e.updated.set(a.stack, o)), o.count++;
          }
        }
      }
      W !== null && (e.set_during_effect = !0);
    }
    if ((e.f & de) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ve) !== 0 && pi(s), bi(s);
    }
    e.wv = Ma(), _a(e, ve), W !== null && (W.f & oe) !== 0 && (W.f & (Ue | Lt)) === 0 && (Ae === null ? Xr([e]) : Ae.push(e)), !i.is_fork && $t.size > 0 && !gi && va();
  }
  return t;
}
r(en, "internal_set");
function va() {
  gi = !1;
  for (const e of $t)
    (e.f & oe) !== 0 && ae(e, Be), pn(e) && un(e);
  $t.clear();
}
r(va, "flush_eager_effects");
function ln(e) {
  Re(e, e.v + 1);
}
r(ln, "increment");
function _a(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f;
      if (A && (o & xn) !== 0) {
        $t.add(a);
        continue;
      }
      var c = (o & ve) === 0;
      if (c && ae(a, t), (o & de) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        Fe?.delete(l), (o & _t) === 0 && (o & De && (a.f |= _t), _a(l, Be));
      } else c && ((o & it) !== 0 && $e !== null && $e.add(
        /** @type {Effect} */
        a
      ), He(
        /** @type {Effect} */
        a
      ));
    }
}
r(_a, "mark_reactions");
const Pr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function pt(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = Wi(e);
  if (t !== Wa && t !== Ya)
    return e;
  var n = /* @__PURE__ */ new Map(), i = Vi(e), s = /* @__PURE__ */ Ie(0), a = Tt, o = /* @__PURE__ */ r((v) => {
    if (Tt === a)
      return v();
    var d = B, h = Tt;
    Le(null), ji(a);
    var p = v();
    return Le(d), ji(h), p;
  }, "with_parent");
  i && (n.set("length", /* @__PURE__ */ Ie(
    /** @type {any[]} */
    e.length
  )), A && (e = /** @type {any} */
  Fr(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(v) {
    if (!l) {
      l = !0, c = v, Ve(s, `${c} version`);
      for (const [d, h] of n)
        Ve(h, bt(c, d));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, d, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && rr();
        var p = n.get(d);
        return p === void 0 ? p = o(() => {
          var y = /* @__PURE__ */ Ie(h.value);
          return n.set(d, y), A && typeof d == "string" && Ve(y, bt(c, d)), y;
        }) : Re(p, h.value, !0), !0;
      },
      deleteProperty(v, d) {
        var h = n.get(d);
        if (h === void 0) {
          if (d in v) {
            const p = o(() => /* @__PURE__ */ Ie(ue));
            n.set(d, p), ln(s), A && Ve(p, bt(c, d));
          }
        } else
          Re(h, ue), ln(s);
        return !0;
      },
      get(v, d, h) {
        if (d === Ut)
          return e;
        if (A && d === Xi)
          return f;
        var p = n.get(d), y = d in v;
        if (p === void 0 && (!y || Bt(v, d)?.writable) && (p = o(() => {
          var g = pt(y ? v[d] : ue), w = /* @__PURE__ */ Ie(g);
          return A && Ve(w, bt(c, d)), w;
        }), n.set(d, p)), p !== void 0) {
          var E = u(p);
          return E === ue ? void 0 : E;
        }
        return Reflect.get(v, d, h);
      },
      getOwnPropertyDescriptor(v, d) {
        var h = Reflect.getOwnPropertyDescriptor(v, d);
        if (h && "value" in h) {
          var p = n.get(d);
          p && (h.value = u(p));
        } else if (h === void 0) {
          var y = n.get(d), E = y?.v;
          if (y !== void 0 && E !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: E,
              writable: !0
            };
        }
        return h;
      },
      has(v, d) {
        if (d === Ut)
          return !0;
        var h = n.get(d), p = h !== void 0 && h.v !== ue || Reflect.has(v, d);
        if (h !== void 0 || W !== null && (!p || Bt(v, d)?.writable)) {
          h === void 0 && (h = o(() => {
            var E = p ? pt(v[d]) : ue, g = /* @__PURE__ */ Ie(E);
            return A && Ve(g, bt(c, d)), g;
          }), n.set(d, h));
          var y = u(h);
          if (y === ue)
            return !1;
        }
        return p;
      },
      set(v, d, h, p) {
        var y = n.get(d), E = d in v;
        if (i && d === "length")
          for (var g = h; g < /** @type {Source<number>} */
          y.v; g += 1) {
            var w = n.get(g + "");
            w !== void 0 ? Re(w, ue) : g in v && (w = o(() => /* @__PURE__ */ Ie(ue)), n.set(g + "", w), A && Ve(w, bt(c, g)));
          }
        if (y === void 0)
          (!E || Bt(v, d)?.writable) && (y = o(() => /* @__PURE__ */ Ie(void 0)), A && Ve(y, bt(c, d)), Re(y, pt(h)), n.set(d, y));
        else {
          E = y.v !== ue;
          var O = o(() => pt(h));
          Re(y, O);
        }
        var H = Reflect.getOwnPropertyDescriptor(v, d);
        if (H?.set && H.set.call(p, h), !E) {
          if (i && typeof d == "string") {
            var j = (
              /** @type {Source<number>} */
              n.get("length")
            ), U = Number(d);
            Number.isInteger(U) && U >= j.v && Re(j, U + 1);
          }
          ln(s);
        }
        return !0;
      },
      ownKeys(v) {
        u(s);
        var d = Reflect.ownKeys(v).filter((y) => {
          var E = n.get(y);
          return E === void 0 || E.v !== ue;
        });
        for (var [h, p] of n)
          p.v !== ue && !(h in v) && d.push(h);
        return d;
      },
      setPrototypeOf() {
        sr();
      }
    }
  );
}
r(pt, "proxy");
function bt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Pr.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(bt, "get_label");
function Vn(e) {
  try {
    if (e !== null && typeof e == "object" && Ut in e)
      return e[Ut];
  } catch {
  }
  return e;
}
r(Vn, "get_proxied_value");
const Rr = /* @__PURE__ */ new Set([
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
function Fr(e) {
  return new Proxy(e, {
    get(t, n, i) {
      var s = Reflect.get(t, n, i);
      return Rr.has(
        /** @type {string} */
        n
      ) ? function(...a) {
        Or();
        var o = s.apply(this, a);
        return va(), o;
      } : s;
    }
  });
}
r(Fr, "inspectable_array");
function Hr() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: i, includes: s } = e;
  e.indexOf = function(a, o) {
    const c = n.call(this, a, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (Vn(this[l]) === a) {
          Un("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(a, o) {
    const c = i.call(this, a, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (Vn(this[l]) === a) {
          Un("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(a, o) {
    const c = s.call(this, a, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (Vn(this[l]) === a) {
          Un("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = i, e.includes = s;
  };
}
r(Hr, "init_array_prototype_warnings");
var Ri, yi, ha, ba;
function jr() {
  if (Ri === void 0) {
    Ri = window, yi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ha = Bt(t, "firstChild").get, ba = Bt(t, "nextSibling").get, Di(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Di(n) && (n.__t = void 0), A && (e.__svelte_meta = null, Hr());
  }
}
r(jr, "init_operations");
function At(e = "") {
  return document.createTextNode(e);
}
r(At, "create_text");
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return (
    /** @type {TemplateNode | null} */
    ha.call(e)
  );
}
r(lt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return (
    /** @type {TemplateNode | null} */
    ba.call(e)
  );
}
r(bn, "get_next_sibling");
function m(e, t) {
  return /* @__PURE__ */ lt(e);
}
r(m, "child");
function mn(e, t = !1) {
  {
    var n = /* @__PURE__ */ lt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ bn(n) : n;
  }
}
r(mn, "first_child");
function _(e, t = 1, n = !1) {
  let i = e;
  for (; t--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ bn(i);
  return i;
}
r(_, "sibling");
function zr(e) {
  e.textContent = "";
}
r(zr, "clear_text_content");
function ma() {
  return !1;
}
r(ma, "should_defer_append");
let Fi = !1;
function Br() {
  Fi || (Fi = !0, document.addEventListener(
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
r(Br, "add_form_reset_listener");
function Hn(e) {
  var t = B, n = W;
  Le(null), ze(null);
  try {
    return e();
  } finally {
    Le(t), ze(n);
  }
}
r(Hn, "without_reactive_context");
function Ur(e, t, n, i = n) {
  e.addEventListener(t, () => Hn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), i(!0);
  } : e.__on_r = () => i(!0), Br();
}
r(Ur, "listen_to_event_and_reset_event");
function qr(e) {
  W === null && (B === null && nr(e), tr()), Ot && er(e);
}
r(qr, "validate_effect");
function Vr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(Vr, "push_effect");
function ht(e, t, n) {
  var i = W;
  if (A)
    for (; i !== null && (i.f & xn) !== 0; )
      i = i.parent;
  i !== null && (i.f & xe) !== 0 && (e |= xe);
  var s = {
    ctx: fe,
    deps: null,
    nodes: null,
    f: e | ve | De,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (A && (s.component_function = hn), n)
    try {
      un(s), s.f |= hi;
    } catch (c) {
      throw ye(s), c;
    }
  else t !== null && He(s);
  var a = s;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
  (a.f & nn) === 0 && (a = a.first, (e & it) !== 0 && (e & Dt) !== 0 && a !== null && (a.f |= Dt)), a !== null && (a.parent = i, i !== null && Vr(a, i), B !== null && (B.f & de) !== 0 && (e & Lt) === 0)) {
    var o = (
      /** @type {Derived} */
      B
    );
    (o.effects ??= []).push(a);
  }
  return s;
}
r(ht, "create_effect");
function wi() {
  return B !== null && !je;
}
r(wi, "effect_tracking");
function pa(e) {
  const t = ht(On, null, !1);
  return ae(t, oe), t.teardown = e, t;
}
r(pa, "teardown");
function Wr(e) {
  qr("$effect"), A && Mt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    W.f
  ), n = !B && (t & Ue) !== 0 && (t & hi) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      fe
    );
    (i.e ??= []).push(e);
  } else
    return ga(e);
}
r(Wr, "user_effect");
function ga(e) {
  return ht(Kn | Xa, e, !1);
}
r(ga, "create_user_effect");
function Yr(e) {
  dt.ensure();
  const t = ht(Lt | nn, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Ct(t, () => {
      ye(t), i(void 0);
    }) : (ye(t), i(void 0));
  });
}
r(Yr, "component_root");
function Kr(e) {
  return ht(Ln | nn, e, !0);
}
r(Kr, "async_effect");
function ya(e, t = 0) {
  return ht(On | t, e, !0);
}
r(ya, "render_effect");
function ne(e, t = [], n = [], i = []) {
  Cr(i, t, n, (s) => {
    ht(On, () => e(...s.map(u)), !0);
  });
}
r(ne, "template_effect");
function jn(e, t = 0) {
  var n = ht(it | t, e, !0);
  return A && (n.dev_stack = cn), n;
}
r(jn, "block");
function Me(e) {
  return ht(Ue | nn, e, !0);
}
r(Me, "branch");
function wa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ot, i = B;
    Hi(!0), Le(null);
    try {
      t.call(null);
    } finally {
      Hi(n), Le(i);
    }
  }
}
r(wa, "execute_effect_teardown");
function Ea(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Hn(() => {
      s.abort(zt);
    });
    var i = n.next;
    (n.f & Lt) !== 0 ? n.parent = null : ye(n, t), n = i;
  }
}
r(Ea, "destroy_effect_children");
function Gr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ue) === 0 && ye(t), t = n;
  }
}
r(Gr, "destroy_block_effect_children");
function ye(e, t = !0) {
  var n = !1;
  (t || (e.f & Gi) !== 0) && e.nodes !== null && e.nodes.end !== null && (ka(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Ea(e, t && !n), An(e, 0), ae(e, ct);
  var i = e.nodes && e.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  wa(e);
  var s = e.parent;
  s !== null && s.first !== null && xa(e), A && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(ye, "destroy_effect");
function ka(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ bn(e);
    e.remove(), e = n;
  }
}
r(ka, "remove_effect_dom");
function xa(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
r(xa, "unlink_effect");
function Ct(e, t, n = !0) {
  var i = [];
  Sa(e, i, !0);
  var s = /* @__PURE__ */ r(() => {
    n && ye(e), t && t();
  }, "fn"), a = i.length;
  if (a > 0) {
    var o = /* @__PURE__ */ r(() => --a || s(), "check");
    for (var c of i)
      c.out(o);
  } else
    s();
}
r(Ct, "pause_effect");
function Sa(e, t, n) {
  if ((e.f & xe) === 0) {
    e.f ^= xe;
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const c of i)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var a = s.next, o = (s.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Ue) !== 0 && (e.f & it) !== 0;
      Sa(s, t, o ? n : !1), s = a;
    }
  }
}
r(Sa, "pause_children");
function Ei(e) {
  Aa(e, !0);
}
r(Ei, "resume_effect");
function Aa(e, t) {
  if ((e.f & xe) !== 0) {
    e.f ^= xe, (e.f & oe) === 0 && (ae(e, ve), He(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & Dt) !== 0 || (n.f & Ue) !== 0;
      Aa(n, s ? t : !1), n = i;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
r(Aa, "resume_children");
function Ca(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end; n !== null; ) {
      var s = n === i ? null : /* @__PURE__ */ bn(n);
      t.append(n), n = s;
    }
}
r(Ca, "move_effect");
let kn = !1, Ot = !1;
function Hi(e) {
  Ot = e;
}
r(Hi, "set_is_destroying_effect");
let B = null, je = !1;
function Le(e) {
  B = e;
}
r(Le, "set_active_reaction");
let W = null;
function ze(e) {
  W = e;
}
r(ze, "set_active_effect");
let Ne = null;
function Ta(e) {
  B !== null && (Ne === null ? Ne = [e] : Ne.push(e));
}
r(Ta, "push_reaction_value");
let ge = null, Ee = 0, Ae = null;
function Xr(e) {
  Ae = e;
}
r(Xr, "set_untracked_writes");
let Ia = 1, gt = 0, Tt = gt;
function ji(e) {
  Tt = e;
}
r(ji, "set_update_version");
function Ma() {
  return ++Ia;
}
r(Ma, "increment_write_version");
function pn(e) {
  var t = e.f;
  if ((t & ve) !== 0)
    return !0;
  if (t & de && (e.f &= ~_t), (t & Be) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), i = n.length, s = 0; s < i; s++) {
      var a = n[s];
      if (pn(
        /** @type {Derived} */
        a
      ) && da(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & De) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Fe === null && ae(e, oe);
  }
  return !1;
}
r(pn, "is_dirty");
function Da(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !(Ne !== null && It.call(Ne, e)))
    for (var s = 0; s < i.length; s++) {
      var a = i[s];
      (a.f & de) !== 0 ? Da(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ae(a, ve) : (a.f & oe) !== 0 && ae(a, Be), He(
        /** @type {Effect} */
        a
      ));
    }
}
r(Da, "schedule_possible_effect_self_invalidation");
function ri(e) {
  var t = ge, n = Ee, i = Ae, s = B, a = Ne, o = fe, c = je, l = Tt, f = e.f;
  ge = /** @type {null | Value[]} */
  null, Ee = 0, Ae = null, B = (f & (Ue | Lt)) === 0 ? e : null, Ne = null, Zt(e.ctx), je = !1, Tt = ++gt, e.ac !== null && (Hn(() => {
    e.ac.abort(zt);
  }), e.ac = null);
  try {
    e.f |= Gn;
    var v = (
      /** @type {Function} */
      e.fn
    ), d = v(), h = e.deps, p = G?.is_fork;
    if (ge !== null) {
      var y;
      if (p || An(e, Ee), h !== null && Ee > 0)
        for (h.length = Ee + ge.length, y = 0; y < ge.length; y++)
          h[Ee + y] = ge[y];
      else
        e.deps = h = ge;
      if (wi() && (e.f & De) !== 0)
        for (y = Ee; y < h.length; y++)
          (h[y].reactions ??= []).push(e);
    } else !p && h !== null && Ee < h.length && (An(e, Ee), h.length = Ee);
    if (ta() && Ae !== null && !je && h !== null && (e.f & (de | Be | ve)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      Ae.length; y++)
        Da(
          Ae[y],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (gt++, s.deps !== null)
        for (let E = 0; E < n; E += 1)
          s.deps[E].rv = gt;
      if (t !== null)
        for (const E of t)
          E.rv = gt;
      Ae !== null && (i === null ? i = Ae : i.push(.../** @type {Source[]} */
      Ae));
    }
    return (e.f & ut) !== 0 && (e.f ^= ut), d;
  } catch (E) {
    return ia(E);
  } finally {
    e.f ^= Gn, ge = t, Ee = n, Ae = i, B = s, Ne = a, Zt(o), je = c, Tt = l;
  }
}
r(ri, "update_reaction");
function Qr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = qa.call(n, e);
    if (i !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[i] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & de) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ge === null || !It.call(ge, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & De) !== 0 && (a.f ^= De, a.f &= ~_t), bi(a), ai(a), An(a, 0);
  }
}
r(Qr, "remove_reaction");
function An(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      Qr(e, n[i]);
}
r(An, "remove_reactions");
function un(e) {
  var t = e.f;
  if ((t & ct) === 0) {
    ae(e, oe);
    var n = W, i = kn;
    if (W = e, kn = !0, A) {
      var s = hn;
      Oi(e.component_function);
      var a = (
        /** @type {any} */
        cn
      );
      Sn(e.dev_stack ?? cn);
    }
    try {
      (t & (it | Ki)) !== 0 ? Gr(e) : Ea(e), wa(e);
      var o = ri(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ia;
      var c;
      A && dr && (e.f & ve) !== 0 && e.deps;
    } finally {
      kn = i, W = n, A && (Oi(s), Sn(a));
    }
  }
}
r(un, "update_effect");
async function Zr() {
  await Promise.resolve(), yr();
}
r(Zr, "tick");
function u(e) {
  var t = e.f, n = (t & de) !== 0;
  if (B !== null && !je) {
    var i = W !== null && (W.f & ct) !== 0;
    if (!i && (Ne === null || !It.call(Ne, e))) {
      var s = B.deps;
      if ((B.f & Gn) !== 0)
        e.rv < gt && (e.rv = gt, ge === null && s !== null && s[Ee] === e ? Ee++ : ge === null ? ge = [e] : ge.push(e));
      else {
        (B.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [B] : It.call(a, B) || a.push(B);
      }
    }
  }
  if (A && Ir.delete(e), Ot && vt.has(e))
    return vt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Ot) {
      var c = o.v;
      return ((o.f & oe) === 0 && o.reactions !== null || Oa(o)) && (c = pi(o)), vt.set(o, c), c;
    }
    var l = (o.f & De) === 0 && !je && B !== null && (kn || (B.f & De) !== 0), f = o.deps === null;
    pn(o) && (l && (o.f |= De), da(o)), l && !f && Na(o);
  }
  if (Fe?.has(e))
    return Fe.get(e);
  if ((e.f & ut) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function Na(e) {
  if (e.deps !== null) {
    e.f |= De;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & de) !== 0 && (t.f & De) === 0 && Na(
        /** @type {Derived} */
        t
      );
  }
}
r(Na, "reconnect");
function Oa(e) {
  if (e.v === ue) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (vt.has(t) || (t.f & de) !== 0 && Oa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(Oa, "depends_on_old_values");
function La(e) {
  var t = je;
  try {
    return je = !0, e();
  } finally {
    je = t;
  }
}
r(La, "untrack");
const Pa = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set();
function Jr(e, t, n, i = {}) {
  function s(a) {
    if (i.capture || rn.call(t, a), !a.cancelBubble)
      return Hn(() => n?.call(this, a));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ft(() => {
    t.addEventListener(e, s, i);
  }) : t.addEventListener(e, s, i), s;
}
r(Jr, "create_event");
function $r(e, t, n, i, s) {
  var a = { capture: i, passive: s }, o = Jr(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && pa(() => {
    t.removeEventListener(e, o, a);
  });
}
r($r, "event");
function we(e) {
  for (var t = 0; t < e.length; t++)
    Pa.add(e[t]);
  for (var n of si)
    n(e);
}
r(we, "delegate");
let zi = null;
function rn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, s = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  zi = e;
  var o = 0, c = zi === e && e.__root;
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
  if (a = /** @type {Element} */
  s[o] || e.target, a !== t) {
    Mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var v = B, d = W;
    Le(null), ze(null);
    try {
      for (var h, p = []; a !== null; ) {
        var y = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var E = a["__" + i];
          E != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && E.call(a, e);
        } catch (g) {
          h ? p.push(g) : h = g;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        a = y;
      }
      if (h) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Le(v), ze(d);
    }
  }
}
r(rn, "handle_event_propagation");
function Ra(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(Ra, "create_fragment_from_html");
function oi(e, t) {
  var n = (
    /** @type {Effect} */
    W
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(oi, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  var n = (t & 1) !== 0, i = (t & 2) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Ra(a ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ lt(s)));
    var o = (
      /** @type {TemplateNode} */
      i || yi ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      oi(c, l);
    } else
      oi(o, o);
    return o;
  };
}
r(I, "from_html");
function T(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(T, "append");
const es = ["touchstart", "touchmove"];
function ts(e) {
  return es.includes(e);
}
r(ts, "is_passive_event");
function J(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(J, "set_text");
function ns(e, t) {
  return is(e, t);
}
r(ns, "mount");
const Ft = /* @__PURE__ */ new Map();
function is(e, { target: t, anchor: n, props: i = {}, events: s, context: a, intro: o = !0 }) {
  jr();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((d) => {
    for (var h = 0; h < d.length; h++) {
      var p = d[h];
      if (!c.has(p)) {
        c.add(p);
        var y = ts(p);
        t.addEventListener(p, rn, { passive: y });
        var E = Ft.get(p);
        E === void 0 ? (document.addEventListener(p, rn, { passive: y }), Ft.set(p, 1)) : Ft.set(p, E + 1);
      }
    }
  }, "event_handle");
  l(Nn(Pa)), si.add(l);
  var f = void 0, v = Yr(() => {
    var d = n ?? t.appendChild(At());
    return xr(
      /** @type {TemplateNode} */
      d,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (h) => {
        _e({});
        var p = (
          /** @type {ComponentContext} */
          fe
        );
        a && (p.c = a), s && (i.$$events = s), f = e(h, i) || {}, he();
      }
    ), () => {
      for (var h of c) {
        t.removeEventListener(h, rn);
        var p = (
          /** @type {number} */
          Ft.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, rn), Ft.delete(h)) : Ft.set(h, p);
      }
      si.delete(l), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return li.set(f, v), f;
}
r(is, "_mount");
let li = /* @__PURE__ */ new WeakMap();
function as(e, t) {
  const n = li.get(e);
  return n ? (li.delete(e), n(t)) : (A && (Ut in e ? ur() : cr()), Promise.resolve());
}
r(as, "unmount");
var Pe, Xe, ke, St, vn, _n, Mn;
const Ai = class Ai {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    qe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, Pe, /* @__PURE__ */ new Map());
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
    R(this, Xe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    R(this, ke, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, St, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, vn, !0);
    R(this, _n, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        G
      );
      if (b(this, Pe).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, Pe).get(t)
        ), i = b(this, Xe).get(n);
        if (i)
          Ei(i), b(this, St).delete(n);
        else {
          var s = b(this, ke).get(n);
          s && (b(this, Xe).set(n, s.effect), b(this, ke).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), i = s.effect);
        }
        for (const [a, o] of b(this, Pe)) {
          if (b(this, Pe).delete(a), a === t)
            break;
          const c = b(this, ke).get(o);
          c && (ye(c.effect), b(this, ke).delete(o));
        }
        for (const [a, o] of b(this, Xe)) {
          if (a === n || b(this, St).has(a)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, Pe).values()).includes(a)) {
              var f = document.createDocumentFragment();
              Ca(o, f), f.append(At()), b(this, ke).set(a, { effect: o, fragment: f });
            } else
              ye(o);
            b(this, St).delete(a), b(this, Xe).delete(a);
          }, "on_destroy");
          b(this, vn) || !i ? (b(this, St).add(a), Ct(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    R(this, Mn, /* @__PURE__ */ r((t) => {
      b(this, Pe).delete(t);
      const n = Array.from(b(this, Pe).values());
      for (const [i, s] of b(this, ke))
        n.includes(i) || (ye(s.effect), b(this, ke).delete(i));
    }, "#discard"));
    this.anchor = t, F(this, vn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var i = (
      /** @type {Batch} */
      G
    ), s = ma();
    if (n && !b(this, Xe).has(t) && !b(this, ke).has(t))
      if (s) {
        var a = document.createDocumentFragment(), o = At();
        a.append(o), b(this, ke).set(t, {
          effect: Me(() => n(o)),
          fragment: a
        });
      } else
        b(this, Xe).set(
          t,
          Me(() => n(this.anchor))
        );
    if (b(this, Pe).set(i, t), s) {
      for (const [c, l] of b(this, Xe))
        c === t ? i.unskip_effect(l) : i.skip_effect(l);
      for (const [c, l] of b(this, ke))
        c === t ? i.unskip_effect(l.effect) : i.skip_effect(l.effect);
      i.oncommit(b(this, _n)), i.ondiscard(b(this, Mn));
    } else
      b(this, _n).call(this);
  }
};
Pe = new WeakMap(), Xe = new WeakMap(), ke = new WeakMap(), St = new WeakMap(), vn = new WeakMap(), _n = new WeakMap(), Mn = new WeakMap(), r(Ai, "BranchManager");
let Cn = Ai;
if (A) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ r(() => {
          if (n !== void 0)
            return n;
          ar(t);
        }, "get"),
        set: /* @__PURE__ */ r((i) => {
          n = i;
        }, "set")
      });
    }
  };
  var jo = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Z(e, t, n = !1) {
  var i = new Cn(e), s = n ? Dt : 0;
  function a(o, c) {
    i.ensure(o, c);
  }
  r(a, "update_branch"), jn(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, a(l, c);
    }), o || a(!1, null);
  }, s);
}
r(Z, "if_block");
function Qe(e, t) {
  return t;
}
r(Qe, "index");
function rs(e, t, n) {
  for (var i = [], s = t.length, a, o = t.length, c = 0; c < s; c++) {
    let d = t[c];
    Ct(
      d,
      () => {
        if (a) {
          if (a.pending.delete(d), a.done.add(d), a.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ci(Nn(a.done)), h.delete(a), h.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = i.length === 0 && n !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        f.parentNode
      );
      zr(v), v.append(f), e.items.clear();
    }
    ci(t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
r(rs, "pause_effects");
function ci(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    ye(e[n], t);
}
r(ci, "destroy_effects");
var Bi;
function Ze(e, t, n, i, s, a = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(At());
  }
  var v = null, d = /* @__PURE__ */ Dr(() => {
    var w = n();
    return Vi(w) ? w : w == null ? [] : Nn(w);
  }), h, p = !0;
  function y() {
    g.fallback = v, ss(g, h, o, t, i), v !== null && (h.length === 0 ? (v.f & nt) === 0 ? Ei(v) : (v.f ^= nt, sn(v, null, o)) : Ct(v, () => {
      v = null;
    }));
  }
  r(y, "commit");
  var E = jn(() => {
    h = /** @type {V[]} */
    u(d);
    for (var w = h.length, O = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      G
    ), j = ma(), U = 0; U < w; U += 1) {
      var L = h[U], k = i(L, U), N = p ? null : c.get(k);
      N ? (N.v && en(N.v, L), N.i && en(N.i, U), j && H.unskip_effect(N.e)) : (N = os(
        c,
        p ? o : Bi ??= At(),
        L,
        k,
        U,
        s,
        t,
        n
      ), p || (N.e.f |= nt), c.set(k, N)), O.add(k);
    }
    if (w === 0 && a && !v && (p ? v = Me(() => a(o)) : (v = Me(() => a(Bi ??= At())), v.f |= nt)), w > O.size && (A ? ls(h, i) : Qi("", "", "")), !p)
      if (j) {
        for (const [z, x] of c)
          O.has(z) || H.skip_effect(x.e);
        H.oncommit(y), H.ondiscard(() => {
        });
      } else
        y();
    u(d);
  }), g = { effect: E, items: c, outrogroups: null, fallback: v };
  p = !1;
}
r(Ze, "each");
function an(e) {
  for (; e !== null && (e.f & Ue) === 0; )
    e = e.next;
  return e;
}
r(an, "skip_to_branch");
function ss(e, t, n, i, s) {
  var a = (i & 8) !== 0, o = t.length, c = e.items, l = an(e.effect.first), f, v = null, d, h = [], p = [], y, E, g, w;
  if (a)
    for (w = 0; w < o; w += 1)
      y = t[w], E = s(y, w), g = /** @type {EachItem} */
      c.get(E).e, (g.f & nt) === 0 && (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
  for (w = 0; w < o; w += 1) {
    if (y = t[w], E = s(y, w), g = /** @type {EachItem} */
    c.get(E).e, e.outrogroups !== null)
      for (const x of e.outrogroups)
        x.pending.delete(g), x.done.delete(g);
    if ((g.f & nt) !== 0)
      if (g.f ^= nt, g === l)
        sn(g, null, n);
      else {
        var O = v ? v.next : l;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), rt(e, v, g), rt(e, g, O), sn(g, O, n), v = g, h = [], p = [], l = an(v.next);
        continue;
      }
    if ((g.f & xe) !== 0 && (Ei(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g !== l) {
      if (f !== void 0 && f.has(g)) {
        if (h.length < p.length) {
          var H = p[0], j;
          v = H.prev;
          var U = h[0], L = h[h.length - 1];
          for (j = 0; j < h.length; j += 1)
            sn(h[j], H, n);
          for (j = 0; j < p.length; j += 1)
            f.delete(p[j]);
          rt(e, U.prev, L.next), rt(e, v, U), rt(e, L, H), l = H, v = L, w -= 1, h = [], p = [];
        } else
          f.delete(g), sn(g, l, n), rt(e, g.prev, g.next), rt(e, g, v === null ? e.effect.first : v.next), rt(e, v, g), v = g;
        continue;
      }
      for (h = [], p = []; l !== null && l !== g; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = an(l.next);
      if (l === null)
        continue;
    }
    (g.f & nt) === 0 && h.push(g), v = g, l = an(g.next);
  }
  if (e.outrogroups !== null) {
    for (const x of e.outrogroups)
      x.pending.size === 0 && (ci(Nn(x.done)), e.outrogroups?.delete(x));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var k = [];
    if (f !== void 0)
      for (g of f)
        (g.f & xe) === 0 && k.push(g);
    for (; l !== null; )
      (l.f & xe) === 0 && l !== e.fallback && k.push(l), l = an(l.next);
    var N = k.length;
    if (N > 0) {
      var z = (i & 4) !== 0 && o === 0 ? n : null;
      if (a) {
        for (w = 0; w < N; w += 1)
          k[w].nodes?.a?.measure();
        for (w = 0; w < N; w += 1)
          k[w].nodes?.a?.fix();
      }
      rs(e, k, z);
    }
  }
  a && ft(() => {
    if (d !== void 0)
      for (g of d)
        g.nodes?.a?.apply();
  });
}
r(ss, "reconcile");
function os(e, t, n, i, s, a, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ Lr(n, !1, !1) : Nt(n) : null, f = (o & 2) !== 0 ? Nt(s) : null;
  return A && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Me(() => (a(t, l ?? n, f ?? s, c), () => {
      e.delete(i);
    }))
  };
}
r(os, "create_item");
function sn(e, t, n) {
  if (e.nodes)
    for (var i = e.nodes.start, s = e.nodes.end, a = t && (t.f & nt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; i !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bn(i)
      );
      if (a.before(i), i === s)
        return;
      i = o;
    }
}
r(sn, "move");
function rt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(rt, "link");
function ls(e, t) {
  const n = /* @__PURE__ */ new Map(), i = e.length;
  for (let s = 0; s < i; s++) {
    const a = t(e[s], s);
    if (n.has(a)) {
      const o = String(n.get(a)), c = String(s);
      let l = String(a);
      l.startsWith("[object ") && (l = null), Qi(o, c, l);
    }
    n.set(a, s);
  }
}
r(ls, "validate_each_keys");
function cs(e, t, n = !1, i = !1, s = !1) {
  var a = e, o = "";
  ne(() => {
    var c = (
      /** @type {Effect} */
      W
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (ka(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : i && (l = `<math>${l}</math>`);
      var f = Ra(l);
      if ((n || i) && (f = /** @type {Element} */
      /* @__PURE__ */ lt(f)), oi(
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || i)
        for (; /* @__PURE__ */ lt(f); )
          a.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ lt(f)
          );
      else
        a.before(f);
    }
  });
}
r(cs, "html");
function us(e, t, n) {
  var i = new Cn(e);
  jn(() => {
    var s = t() ?? null;
    i.ensure(s, s && ((a) => n(a, s)));
  }, Dt);
}
r(us, "component");
const Ui = [...` 	
\r\f \v\uFEFF`];
function fs(e, t, n) {
  var i = e == null ? "" : "" + e;
  if (t && (i = i ? i + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        i = i ? i + " " + s : s;
      else if (i.length)
        for (var a = s.length, o = 0; (o = i.indexOf(s, o)) >= 0; ) {
          var c = o + a;
          (o === 0 || Ui.includes(i[o - 1])) && (c === i.length || Ui.includes(i[c])) ? i = (o === 0 ? "" : i.substring(0, o)) + i.substring(c + 1) : o = c;
        }
  }
  return i === "" ? null : i;
}
r(fs, "to_class");
function tn(e, t, n, i, s, a) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = fs(n, i, a);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (a && s !== a)
    for (var l in a) {
      var f = !!a[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return a;
}
r(tn, "set_class");
const ds = /* @__PURE__ */ Symbol("is custom element"), vs = /* @__PURE__ */ Symbol("is html");
function se(e, t) {
  var n = ki(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(se, "set_value");
function Ht(e, t) {
  var n = ki(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
r(Ht, "set_checked");
function Oe(e, t, n, i) {
  var s = ki(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Qa] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _s(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(Oe, "set_attribute");
function ki(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [ds]: e.nodeName.includes("-"),
      [vs]: e.namespaceURI === Ua
    }
  );
}
r(ki, "get_attributes");
var qi = /* @__PURE__ */ new Map();
function _s(e) {
  var t = e.getAttribute("is") || e.nodeName, n = qi.get(t);
  if (n) return n;
  qi.set(t, n = []);
  for (var i, s = e, a = Element.prototype; a !== s; ) {
    i = Va(s);
    for (var o in i)
      i[o].set && n.push(o);
    s = Wi(s);
  }
  return n;
}
r(_s, "get_setters");
function Fa(e, t, n = t) {
  var i = /* @__PURE__ */ new WeakSet();
  Ur(e, "input", async (s) => {
    A && e.type === "checkbox" && Ni();
    var a = s ? e.defaultValue : e.value;
    if (a = Wn(e) ? Yn(a) : a, n(a), G !== null && i.add(G), await Zr(), a !== (a = t())) {
      var o = e.selectionStart, c = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", c !== null) {
        var f = e.value.length;
        o === c && c === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(c, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  La(t) == null && e.value && (n(Wn(e) ? Yn(e.value) : e.value), G !== null && i.add(G)), ya(() => {
    A && e.type === "checkbox" && Ni();
    var s = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Qn ?? G
      );
      if (i.has(a))
        return;
    }
    Wn(e) && s === Yn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(Fa, "bind_value");
function Wn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(Wn, "is_numberlike_input");
function Yn(e) {
  return e === "" ? null : +e;
}
r(Yn, "to_number");
const jt = [];
function hs(e, t) {
  return {
    subscribe: bs(e, t).subscribe
  };
}
r(hs, "readable");
function bs(e, t = Bn) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function s(c) {
    if (Ji(e, c) && (e = c, n)) {
      const l = !jt.length;
      for (const f of i)
        f[1](), jt.push(f, e);
      if (l) {
        for (let f = 0; f < jt.length; f += 2)
          jt[f][0](jt[f + 1]);
        jt.length = 0;
      }
    }
  }
  r(s, "set");
  function a(c) {
    s(c(
      /** @type {T} */
      e
    ));
  }
  r(a, "update");
  function o(c, l = Bn) {
    const f = [c, l];
    return i.add(f), i.size === 1 && (n = t(s, a) || Bn), c(
      /** @type {T} */
      e
    ), () => {
      i.delete(f), i.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: a, subscribe: o };
}
r(bs, "writable");
function ms(e) {
  var n, i, s;
  const a = class a extends e {
    constructor() {
      super(...arguments);
      R(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const v = f, { tagName: d } = v;
          return d && l.push(d.toUpperCase()), l;
        },
        []
      ));
      R(this, i, /* @__PURE__ */ Ie(pt({})));
      R(this, s, {});
    }
    get $state() {
      return u(b(this, i));
    }
    set $state(l) {
      Re(b(this, i), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, v) {
      Object.assign(this.$state, l.state), v.isFirstRender && F(this, s, ns(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), as(b(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: v } = f;
      if (!v) return;
      const d = v;
      if (!b(this, n).includes(d.tagName)) return;
      const h = d._getValue();
      this.document.update({ [d.name]: h });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), i = new WeakMap(), s = new WeakMap(), r(a, "SvelteApplication"), qe(a, "DEFAULT_OPTIONS", { classes: ["nimble-official-sheet"] });
  let t = a;
  return t;
}
r(ms, "SvelteApplicationMixin");
const ps = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ps);
function fi(e) {
  return game.i18n?.localize(e) ?? e;
}
r(fi, "localize");
var gs = /* @__PURE__ */ I('<div class="nos-actions-diamond svelte-q63zhx" data-tooltip="Actions"><div class="nos-actions-diamond__label svelte-q63zhx">Actions</div> <svg viewBox="0 0 80 70" width="80" height="70" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="12" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><circle cx="48" cy="12" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><circle cx="24" cy="30" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><circle cx="40" cy="30" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><circle cx="56" cy="30" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><circle cx="32" cy="48" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><circle cx="48" cy="48" r="7" fill="none" stroke="#333" stroke-width="1.5"></circle><polygon points="40,2 74,35 40,68 6,35" fill="none" stroke="#333" stroke-width="1.5"></polygon></svg></div>');
function ys(e) {
  var t = gs();
  T(e, t);
}
r(ys, "ActionsDiamond");
var ws = /* @__PURE__ */ I("<span> </span>"), Es = /* @__PURE__ */ I('<span style="color: var(--nos-text-secondary, #888)">—</span>'), ks = /* @__PURE__ */ I('<header class="nos-header"><div class="nos-header__name"><label>Character Name</label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label>Ancestry, Class, & Level</label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button" aria-label="Edit" data-tooltip="Edit Metadata"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__actions"><!></div> <div class="nos-header__hw"><label>Height & Weight</label> <div class="nos-hw-fields"><input type="text" placeholder="Height"/> <input type="text" placeholder="Weight"/></div></div> <div class="nos-header__hitdie"><label>Hit Die</label> <span class="nos-hitdie-value"> </span></div></header>');
function xs(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.system.details), i = /* @__PURE__ */ M(() => {
    const L = Object.keys(t.hitDiceData.bySize);
    return L.length === 0 ? "—" : L.length === 1 ? `d${L[0]}` : L.map((k) => `d${k}`).join("/");
  });
  var s = ks(), a = m(s), o = _(m(a), 2);
  o.__change = ({ target: L }) => t.actor.update({ name: L.value });
  var c = _(a, 2), l = _(m(c), 2), f = m(l);
  {
    var v = /* @__PURE__ */ r((L) => {
      var k = ws(), N = m(k);
      ne(() => J(N, t.metaData)), T(L, k);
    }, "consequent"), d = /* @__PURE__ */ r((L) => {
      var k = Es();
      T(L, k);
    }, "alternate");
    Z(f, (L) => {
      t.metaData ? L(v) : L(d, !1);
    });
  }
  var h = _(f, 2);
  h.__click = () => t.actor.editMetadata();
  var p = _(c, 2), y = m(p);
  ys(y);
  var E = _(p, 2), g = _(m(E), 2), w = m(g);
  w.__change = ({ target: L }) => t.actor.update({ "system.details.height": L.value });
  var O = _(w, 2);
  O.__change = ({ target: L }) => t.actor.update({ "system.details.weight": L.value });
  var H = _(E, 2), j = _(m(H), 2), U = m(j);
  ne(() => {
    se(o, t.actor.reactive.name), o.disabled = !t.editingEnabled, h.disabled = !t.editingEnabled, se(w, u(n).height ?? ""), w.disabled = !t.editingEnabled, se(O, u(n).weight ?? ""), O.disabled = !t.editingEnabled, J(U, u(i));
  }), T(e, s), he();
}
r(xs, "HeaderRow");
we(["change", "click"]);
function xi(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(xi, "formatModifier");
var Ss = /* @__PURE__ */ I('<div class="nos-ability"><button class="nos-ability__roll nos-rollable svelte-1pv9y6b" type="button"><span class="nos-ability__value"> </span> <span class="nos-ability__label nos-pentagon"> </span></button> <button class="nos-icon-btn" type="button" aria-label="Configure Ability Scores" data-tooltip="Configure Ability Scores"><i class="fa-solid fa-gear"></i></button></div>');
function As(e, t) {
  _e(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ M(() => fi(n[t.abilityKey]));
  var s = Ss(), a = m(s);
  a.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var o = m(a), c = m(o), l = _(o, 2), f = m(l), v = _(a, 2);
  v.__click = () => t.actor.configureAbilityScores(), ne(
    (d) => {
      Oe(a, "data-tooltip", `Roll ${u(i) ?? ""} Check`), Oe(a, "aria-label", `Roll ${u(i) ?? ""} Check`), J(c, d), J(f, u(i)), v.disabled = !t.editingEnabled;
    },
    [() => xi(t.ability.mod)]
  ), T(e, s), he();
}
r(As, "AbilityBox");
we(["click"]);
var Cs = /* @__PURE__ */ I('<div class="nos-resources__mana"><label>Mana</label> <input type="number"/> <span class="nos-resources__separator">/</span> <input type="number"/></div>'), Ts = /* @__PURE__ */ I('<div class="nos-resources"><span class="nos-resources__label">Class Resources</span> <!></div>');
function Is(e, t) {
  _e(t, !0);
  var n = Ts(), i = _(m(n), 2);
  {
    var s = /* @__PURE__ */ r((a) => {
      var o = Cs(), c = _(m(o), 2);
      c.__change = ({ target: f }) => t.updateCurrentMana(Number(f.value));
      var l = _(c, 4);
      l.__change = ({ target: f }) => t.updateMaxMana(Number(f.value)), ne(() => {
        se(c, t.mana.current), se(l, t.mana.max || t.mana.baseMax), l.disabled = !t.editingEnabled;
      }), T(a, o);
    }, "consequent");
    Z(i, (a) => {
      t.hasMana && a(s);
    });
  }
  T(e, n), he();
}
r(Is, "ClassResourceBar");
we(["change"]);
var Ms = /* @__PURE__ */ I('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), Ds = /* @__PURE__ */ I('<i class="fa-solid fa-heart"></i>'), Ns = /* @__PURE__ */ I('<section class="nos-stats"><!> <div class="nos-combat"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label">Armor</span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label">Temp HP</span> <input class="nos-combat__input" type="number"/></div> <div><span class="nos-combat__icon"><!></span> <span class="nos-combat__label">Hit Points</span> <div class="nos-hp"><span class="nos-combat__sub">MAX</span> <div class="nos-hp__bar"><input class="nos-hp__max" type="number"/></div> <div class="nos-hp__bar"><input class="nos-hp__current" type="number"/></div> <span class="nos-combat__sub">CURRENT</span></div> <button class="nos-icon-btn" type="button" data-tooltip="Configure Hit Points"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label">Hit Dice</span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button" data-tooltip="Configure Hit Dice"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--clickable" data-tooltip="Roll Initiative"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label">Initiative</span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label">Speed</span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button" data-tooltip="Configure Movement"><i class="fa-solid fa-gear"></i></button></div></div> <!></section>');
function Os(e, t) {
  _e(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: i } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.hp), a = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.movement);
  var l = Ns(), f = m(l);
  Ze(f, 17, () => n, Qe, (q, ce) => {
    As(q, {
      get abilityKey() {
        return u(ce);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(ce)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var v = _(f, 2), d = m(v), h = _(m(d), 4), p = m(h), y = _(d, 2), E = _(m(y), 4);
  E.__change = ({ target: q }) => t.updateTempHP(Number(q.value));
  var g = _(y, 2);
  let w;
  var O = m(g), H = m(O);
  {
    var j = /* @__PURE__ */ r((q) => {
      var ce = Ms();
      T(q, ce);
    }, "consequent"), U = /* @__PURE__ */ r((q) => {
      var ce = Ds();
      T(q, ce);
    }, "alternate");
    Z(H, (q) => {
      t.isBloodied ? q(j) : q(U, !1);
    });
  }
  var L = _(O, 4), k = _(m(L), 2), N = m(k);
  N.__change = ({ target: q }) => t.updateMaxHP(Number(q.value));
  var z = _(k, 2), x = m(z);
  x.__change = ({ target: q }) => t.updateCurrentHP(Number(q.value));
  var C = _(L, 2);
  C.__click = () => t.actor.configureHitPoints();
  var X = _(g, 2);
  X.__click = () => t.rollHitDice();
  var Y = _(m(X), 4), Q = m(Y), ie = _(Y, 2);
  ie.__click = (q) => {
    q.stopPropagation(), t.actor.configureHitDice();
  };
  var V = _(X, 2);
  V.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var $ = _(m(V), 4), S = m($), P = _(V, 2), K = _(m(P), 4), ee = m(K), D = _(K, 2);
  D.__click = () => t.actor.configureMovement();
  var te = _(v, 2);
  Is(te, {
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
  }), ne(
    (q) => {
      J(p, u(a).value), se(E, u(s).temp ?? 0), w = tn(g, 1, "nos-combat__stat", null, w, { "nos-hp--bloodied": t.isBloodied }), se(N, u(s).max), N.disabled = !t.editingEnabled, se(x, u(s).value), C.disabled = !t.editingEnabled, J(Q, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), ie.disabled = !t.editingEnabled, J(S, q), J(ee, u(c).walk), D.disabled = !t.editingEnabled;
    },
    [() => xi(u(o).mod)]
  ), T(e, l), he();
}
r(Os, "StatsRow");
we(["change", "click"]);
var Ls = /* @__PURE__ */ I('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function Ps(e, t) {
  _e(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: i,
    skills: s
  } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ M(() => n[t.skillKey]), o = /* @__PURE__ */ M(() => fi(i[u(a)])), c = /* @__PURE__ */ M(() => fi(s[t.skillKey]));
  var l = Ls();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = m(l), v = m(f), d = _(f, 2), h = m(d), p = _(d, 2), y = m(p);
  ne(
    (E) => {
      Oe(l, "data-tooltip", `Roll ${u(c) ?? ""}`), J(v, u(o)), J(h, E), J(y, u(c));
    },
    [() => xi(t.skill.mod)]
  ), T(e, l), he();
}
r(Ps, "SkillCell");
we(["click"]);
var Rs = /* @__PURE__ */ I('<button type="button"></button>'), Fs = /* @__PURE__ */ I('<div class="nos-exhaustion"><span class="nos-exhaustion__label">Exhaustion</span> <div class="nos-exhaustion__diamonds"></div></div>');
function Hs(e, t) {
  _e(t, !0);
  var n = Fs(), i = _(m(n), 2);
  Ze(i, 21, () => ({ length: t.wounds.max }), Qe, (s, a, o) => {
    var c = Rs();
    let l;
    Oe(c, "data-tooltip", `Toggle Wound ${o + 1}`), Oe(c, "aria-label", `Toggle wound ${o + 1}`), c.__click = () => t.toggleWounds(o + 1), ne(() => l = tn(c, 1, "nos-diamond", null, l, { "nos-diamond--active": t.wounds.value > o })), T(s, c);
  }), T(e, n), he();
}
r(Hs, "ExhaustionTracker");
we(["click"]);
var js = /* @__PURE__ */ I('<section class="nos-skills-row"><!> <!></section>');
function zs(e, t) {
  _e(t, !0);
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
  var i = js(), s = m(i);
  Ze(s, 17, () => n, Qe, (o, c) => {
    Ps(o, {
      get skillKey() {
        return u(c);
      },
      get skill() {
        return t.actor.reactive.system.skills[u(c)];
      },
      get actor() {
        return t.actor;
      }
    });
  });
  var a = _(s, 2);
  Hs(a, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), T(e, i), he();
}
r(zs, "SkillsRow");
var Bs = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Us = /* @__PURE__ */ I('<div class="nos-feature-group"><h4 class="nos-feature-group__heading">Ancestry</h4> <div class="nos-item" draggable="true"><span class="nos-item__name"> </span> <!></div></div>'), qs = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vs = /* @__PURE__ */ I('<div class="nos-feature-group"><h4 class="nos-feature-group__heading">Background</h4> <div class="nos-item" draggable="true"><span class="nos-item__name"> </span> <!></div></div>'), Ws = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Ys = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Ks = /* @__PURE__ */ I('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><span class="nos-item__name"> </span> <!></div>'), Gs = /* @__PURE__ */ I('<div class="nos-feature-group"><h4 class="nos-feature-group__heading">Class</h4> <div class="nos-item" draggable="true"><span class="nos-item__name"> </span> <!></div> <!></div>'), Xs = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Qs = /* @__PURE__ */ I('<div class="nos-item" draggable="true"><span class="nos-item__name"> </span> <!></div>'), Zs = /* @__PURE__ */ I('<div class="nos-feature-group"><h4 class="nos-feature-group__heading">Features</h4> <!></div>'), Js = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), $s = /* @__PURE__ */ I('<div class="nos-item" draggable="true"><span class="nos-item__name"> </span> <!></div>'), eo = /* @__PURE__ */ I('<div class="nos-feature-group"><h4 class="nos-feature-group__heading">Boons</h4> <!></div>'), to = /* @__PURE__ */ I('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">Drop features, ancestry, background, or class items here.</p>'), no = /* @__PURE__ */ I("<!> <!> <!> <!> <!> <!>", 1);
function io(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((k) => k.type === "feature")), i = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((k) => k.type === "boon")), s = /* @__PURE__ */ M(() => t.actor.reactive.items.find((k) => k.type === "ancestry") ?? null), a = /* @__PURE__ */ M(() => t.actor.reactive.items.find((k) => k.type === "background") ?? null), o = /* @__PURE__ */ M(() => t.actor.reactive.items.find((k) => k.type === "class") ?? null), c = /* @__PURE__ */ M(() => t.actor.reactive.items.find((k) => k.type === "subclass") ?? null);
  function l(k) {
    t.actor.items.get(k)?.sheet?.render(!0);
  }
  r(l, "configureItem");
  function f(k) {
    t.actor.deleteEmbeddedDocuments("Item", [k]);
  }
  r(f, "deleteItem");
  var v = no(), d = mn(v);
  {
    var h = /* @__PURE__ */ r((k) => {
      var N = Us(), z = _(m(N), 2), x = m(z);
      x.__click = () => l(u(s).id);
      var C = m(x), X = _(x, 2);
      {
        var Y = /* @__PURE__ */ r((Q) => {
          var ie = Bs(), V = m(ie);
          V.__click = () => l(u(s).id);
          var $ = _(V, 2);
          $.__click = () => f(u(s).id), T(Q, ie);
        }, "consequent");
        Z(X, (Q) => {
          t.editingEnabled && Q(Y);
        });
      }
      ne(() => J(C, u(s).name)), T(k, N);
    }, "consequent_1");
    Z(d, (k) => {
      u(s) && k(h);
    });
  }
  var p = _(d, 2);
  {
    var y = /* @__PURE__ */ r((k) => {
      var N = Vs(), z = _(m(N), 2), x = m(z);
      x.__click = () => l(u(a).id);
      var C = m(x), X = _(x, 2);
      {
        var Y = /* @__PURE__ */ r((Q) => {
          var ie = qs(), V = m(ie);
          V.__click = () => l(u(a).id);
          var $ = _(V, 2);
          $.__click = () => f(u(a).id), T(Q, ie);
        }, "consequent_2");
        Z(X, (Q) => {
          t.editingEnabled && Q(Y);
        });
      }
      ne(() => J(C, u(a).name)), T(k, N);
    }, "consequent_3");
    Z(p, (k) => {
      u(a) && k(y);
    });
  }
  var E = _(p, 2);
  {
    var g = /* @__PURE__ */ r((k) => {
      var N = Gs(), z = _(m(N), 2), x = m(z);
      x.__click = () => l(u(o).id);
      var C = m(x), X = _(x, 2);
      {
        var Y = /* @__PURE__ */ r((V) => {
          var $ = Ws(), S = m($);
          S.__click = () => l(u(o).id);
          var P = _(S, 2);
          P.__click = () => f(u(o).id), T(V, $);
        }, "consequent_4");
        Z(X, (V) => {
          t.editingEnabled && V(Y);
        });
      }
      var Q = _(z, 2);
      {
        var ie = /* @__PURE__ */ r((V) => {
          var $ = Ks(), S = m($);
          S.__click = () => l(u(c).id);
          var P = m(S), K = _(S, 2);
          {
            var ee = /* @__PURE__ */ r((D) => {
              var te = Ys(), q = m(te);
              q.__click = () => l(u(c).id);
              var ce = _(q, 2);
              ce.__click = () => f(u(c).id), T(D, te);
            }, "consequent_5");
            Z(K, (D) => {
              t.editingEnabled && D(ee);
            });
          }
          ne(() => J(P, u(c).name)), T(V, $);
        }, "consequent_6");
        Z(Q, (V) => {
          u(c) && V(ie);
        });
      }
      ne(() => J(C, `${u(o).name ?? ""} (Level ${u(o).system.classLevel ?? ""})`)), T(k, N);
    }, "consequent_7");
    Z(E, (k) => {
      u(o) && k(g);
    });
  }
  var w = _(E, 2);
  {
    var O = /* @__PURE__ */ r((k) => {
      var N = Zs(), z = _(m(N), 2);
      Ze(z, 17, () => u(n), Qe, (x, C) => {
        var X = Qs(), Y = m(X);
        Y.__click = () => l(u(C).id);
        var Q = m(Y), ie = _(Y, 2);
        {
          var V = /* @__PURE__ */ r(($) => {
            var S = Xs(), P = m(S);
            P.__click = () => l(u(C).id);
            var K = _(P, 2);
            K.__click = () => f(u(C).id), T($, S);
          }, "consequent_8");
          Z(ie, ($) => {
            t.editingEnabled && $(V);
          });
        }
        ne(() => J(Q, u(C).name)), T(x, X);
      }), T(k, N);
    }, "consequent_9");
    Z(w, (k) => {
      u(n).length > 0 && k(O);
    });
  }
  var H = _(w, 2);
  {
    var j = /* @__PURE__ */ r((k) => {
      var N = eo(), z = _(m(N), 2);
      Ze(z, 17, () => u(i), Qe, (x, C) => {
        var X = $s(), Y = m(X);
        Y.__click = () => l(u(C).id);
        var Q = m(Y), ie = _(Y, 2);
        {
          var V = /* @__PURE__ */ r(($) => {
            var S = Js(), P = m(S);
            P.__click = () => l(u(C).id);
            var K = _(P, 2);
            K.__click = () => f(u(C).id), T($, S);
          }, "consequent_10");
          Z(ie, ($) => {
            t.editingEnabled && $(V);
          });
        }
        ne(() => J(Q, u(C).name)), T(x, X);
      }), T(k, N);
    }, "consequent_11");
    Z(H, (k) => {
      u(i).length > 0 && k(j);
    });
  }
  var U = _(H, 2);
  {
    var L = /* @__PURE__ */ r((k) => {
      var N = to();
      T(k, N);
    }, "consequent_12");
    Z(U, (k) => {
      !u(s) && !u(a) && !u(o) && u(n).length === 0 && u(i).length === 0 && k(L);
    });
  }
  T(e, v), he();
}
r(io, "FeaturesTab");
we(["click"]);
var ao = /* @__PURE__ */ I('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> New</button>'), ro = /* @__PURE__ */ I('<span style="color: #888; font-size: 0.7rem;" data-tooltip="Concentration">[C]</span>'), so = /* @__PURE__ */ I('<span style="color: #888; font-size: 0.7rem;" data-tooltip="Utility">[U]</span>'), oo = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), lo = /* @__PURE__ */ I('<div class="nos-item" draggable="true"><span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), co = /* @__PURE__ */ I('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <!></div>'), uo = /* @__PURE__ */ I('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">Drop spell items here.</p>'), fo = /* @__PURE__ */ I('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text" placeholder="Search spells..."/> <!></div> <!> <!>', 1);
function vo(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ Ie(""), i = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((w) => w.type === "spell").sort((w, O) => (w.sort ?? 0) - (O.sort ?? 0))), s = /* @__PURE__ */ M(() => u(n) ? u(i).filter((w) => w.name.toLowerCase().includes(u(n).toLowerCase())) : u(i)), a = /* @__PURE__ */ M(() => {
    const w = {};
    for (const O of u(s)) {
      const H = O.system?.tier ?? 0, U = O.system?.isUtility ?? !1 ? "Utility" : `Tier ${H}`;
      w[U] ??= [], w[U].push(O);
    }
    return w;
  });
  function o(w) {
    t.actor.items.get(w)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(w) {
    t.actor.deleteEmbeddedDocuments("Item", [w]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  r(l, "createSpell");
  var f = fo(), v = mn(f), d = _(m(v), 2), h = _(d, 2);
  {
    var p = /* @__PURE__ */ r((w) => {
      var O = ao();
      O.__click = l, T(w, O);
    }, "consequent");
    Z(h, (w) => {
      t.editingEnabled && w(p);
    });
  }
  var y = _(v, 2);
  Ze(y, 17, () => Object.entries(u(a)), Qe, (w, O) => {
    var H = /* @__PURE__ */ M(() => Ga(u(O), 2));
    let j = /* @__PURE__ */ r(() => u(H)[0], "tierName"), U = /* @__PURE__ */ r(() => u(H)[1], "spells");
    var L = co(), k = m(L), N = m(k), z = _(k, 2);
    Ze(z, 17, U, Qe, (x, C) => {
      var X = lo(), Y = m(X);
      Y.__click = () => o(u(C).id);
      var Q = m(Y), ie = _(Q);
      {
        var V = /* @__PURE__ */ r((te) => {
          var q = ro();
          T(te, q);
        }, "consequent_1");
        Z(ie, (te) => {
          u(C).system?.concentration && te(V);
        });
      }
      var $ = _(ie, 2);
      {
        var S = /* @__PURE__ */ r((te) => {
          var q = so();
          T(te, q);
        }, "consequent_2");
        Z($, (te) => {
          u(C).system?.isUtility && te(S);
        });
      }
      var P = _(Y, 2), K = m(P), ee = _(P, 2);
      {
        var D = /* @__PURE__ */ r((te) => {
          var q = oo(), ce = m(q);
          ce.__click = () => o(u(C).id);
          var Pt = _(ce, 2);
          Pt.__click = () => c(u(C).id), T(te, q);
        }, "consequent_3");
        Z(ee, (te) => {
          t.editingEnabled && te(D);
        });
      }
      ne(() => {
        J(Q, `${u(C).name ?? ""} `), J(K, u(C).system?.activationCost ?? "");
      }), T(x, X);
    }), ne(() => J(N, j())), T(w, L);
  });
  var E = _(y, 2);
  {
    var g = /* @__PURE__ */ r((w) => {
      var O = uo();
      T(w, O);
    }, "consequent_4");
    Z(E, (w) => {
      u(i).length === 0 && w(g);
    });
  }
  Fa(d, () => u(n), (w) => Re(n, w)), T(e, f), he();
}
r(vo, "SpellsTab");
we(["click"]);
var _o = /* @__PURE__ */ I('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> New</button>'), ho = /* @__PURE__ */ I('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), bo = /* @__PURE__ */ I('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), mo = /* @__PURE__ */ I('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">Drop inventory items here.</p>'), po = /* @__PURE__ */ I('<div class="nos-currency"><div class="nos-currency__coin"><label>GP</label> <input type="number"/></div> <div class="nos-currency__coin"><label>SP</label> <input type="number"/></div> <div class="nos-currency__coin"><label>CP</label> <input type="number"/></div></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text" placeholder="Search items..."/> <!></div> <!> <!>', 1);
function go(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ Ie(""), i = /* @__PURE__ */ M(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((x) => x.type === "object").sort((x, C) => (x.sort ?? 0) - (C.sort ?? 0))), a = /* @__PURE__ */ M(() => u(n) ? u(s).filter((x) => x.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
  function o(x) {
    t.actor.items.get(x)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(x) {
    t.actor.deleteEmbeddedDocuments("Item", [x]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(l, "createObject");
  function f(x, C) {
    t.actor.update({ [`system.currency.${x}.value`]: Number(C) });
  }
  r(f, "updateCurrency");
  function v(x, C) {
    t.actor.items.get(x)?.update({ "system.quantity": Number(C) });
  }
  r(v, "updateQuantity");
  var d = po(), h = mn(d), p = m(h), y = _(m(p), 2);
  y.__change = ({ target: x }) => f("gp", x.value);
  var E = _(p, 2), g = _(m(E), 2);
  g.__change = ({ target: x }) => f("sp", x.value);
  var w = _(E, 2), O = _(m(w), 2);
  O.__change = ({ target: x }) => f("cp", x.value);
  var H = _(h, 2), j = _(m(H), 2), U = _(j, 2);
  {
    var L = /* @__PURE__ */ r((x) => {
      var C = _o();
      C.__click = l, T(x, C);
    }, "consequent");
    Z(U, (x) => {
      t.editingEnabled && x(L);
    });
  }
  var k = _(H, 2);
  Ze(k, 17, () => u(a), Qe, (x, C) => {
    var X = bo(), Y = m(X), Q = _(Y, 2);
    Q.__click = () => o(u(C).id);
    var ie = m(Q), V = _(Q, 2);
    V.__change = ({ target: P }) => v(u(C).id, P.value);
    var $ = _(V, 2);
    {
      var S = /* @__PURE__ */ r((P) => {
        var K = ho(), ee = m(K);
        ee.__click = () => o(u(C).id);
        var D = _(ee, 2);
        D.__click = () => c(u(C).id), T(P, K);
      }, "consequent_1");
      Z($, (P) => {
        t.editingEnabled && P(S);
      });
    }
    ne(() => {
      Oe(Y, "src", u(C).img), Oe(Y, "alt", u(C).name), J(ie, u(C).name), se(V, u(C).system?.quantity ?? 1);
    }), T(x, X);
  });
  var N = _(k, 2);
  {
    var z = /* @__PURE__ */ r((x) => {
      var C = mo();
      T(x, C);
    }, "consequent_2");
    Z(N, (x) => {
      u(s).length === 0 && x(z);
    });
  }
  ne(() => {
    se(y, u(i).gp?.value ?? 0), se(g, u(i).sp?.value ?? 0), se(O, u(i).cp?.value ?? 0);
  }), Fa(j, () => u(n), (x) => Re(n, x)), T(e, d), he();
}
r(go, "InventoryTab");
we(["change", "click"]);
var yo = /* @__PURE__ */ I(`<div class="nos-bio"><div class="nos-bio__field"><label>Age</label> <input type="text"/></div> <div class="nos-bio__field"><label>Gender</label> <input type="text"/></div> <div class="nos-bio__field"><label>Languages</label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" data-tooltip="Configure Languages" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label>Armor Proficiencies</label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" data-tooltip="Configure Armor Proficiencies" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label>Weapon Proficiencies</label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" data-tooltip="Configure Weapon Proficiencies" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label>Notes</label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function wo(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.system.details), i = /* @__PURE__ */ M(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ M(() => [...u(i).languages ?? []].join(", ")), a = /* @__PURE__ */ M(() => [...u(i).armor ?? []].join(", ")), o = /* @__PURE__ */ M(() => (u(i).weapons ?? []).join(", "));
  var c = yo(), l = m(c), f = _(m(l), 2);
  f.__change = ({ target: C }) => t.actor.update({ "system.details.age": C.value });
  var v = _(l, 2), d = _(m(v), 2);
  d.__change = ({ target: C }) => t.actor.update({ "system.details.gender": C.value });
  var h = _(v, 2), p = _(m(h), 2), y = m(p), E = _(p, 2);
  E.__click = () => t.actor.configureLanguageProficiencies();
  var g = _(h, 2), w = _(m(g), 2), O = m(w), H = _(w, 2);
  H.__click = () => t.actor.configureArmorProficiencies();
  var j = _(g, 2), U = _(m(j), 2), L = m(U), k = _(U, 2);
  k.__click = () => t.actor.configureWeaponProficiencies();
  var N = _(j, 2), z = _(m(N), 2), x = m(z);
  cs(x, () => u(n).notes ?? ""), ne(() => {
    se(f, u(n).age ?? ""), f.disabled = !t.editingEnabled, se(d, u(n).gender ?? ""), d.disabled = !t.editingEnabled, J(y, u(s) || "—"), E.disabled = !t.editingEnabled, J(O, u(a) || "—"), H.disabled = !t.editingEnabled, J(L, u(o) || "—"), k.disabled = !t.editingEnabled, Oe(z, "contenteditable", t.editingEnabled ? "true" : "false");
  }), $r("blur", z, ({ target: C }) => t.actor.update({ "system.details.notes": C.innerHTML })), T(e, c), he();
}
r(wo, "BioTab");
we(["change", "click"]);
var Eo = /* @__PURE__ */ I('<div class="nos-settings__row"><label>Include Currency Bulk</label> <input type="checkbox"/></div> <div class="nos-settings__row"><label>Bonus Inventory Slots</label> <input type="number"/></div>', 1), ko = /* @__PURE__ */ I('<div class="nos-settings"><div class="nos-settings__group"><h3>Actor Image</h3> <div class="nos-settings__row"><label>X-Offset (px)</label> <input type="number"/></div> <div class="nos-settings__row"><label>Y-Offset (px)</label> <input type="number"/></div> <div class="nos-settings__row"><label>Scale (%)</label> <input type="number"/></div></div> <div class="nos-settings__group"><h3>Embedded Documents</h3> <div class="nos-settings__row"><label>Execute Item Macros on Activation</label> <input type="checkbox"/></div> <div class="nos-settings__row"><label>Show Embedded Document Images</label> <input type="checkbox"/></div></div> <div class="nos-settings__group"><h3>Inventory</h3> <div class="nos-settings__row"><label>Track Inventory Slots</label> <input type="checkbox"/></div> <!></div> <div class="nos-settings__group"><h3>Skills</h3> <div class="nos-settings__row"><label>Use Two-Column Skills View</label> <input type="checkbox"/></div> <div class="nos-settings__row"><label>Show Passive Skill Scores</label> <input type="checkbox"/></div></div></div>');
function xo(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.flags?.nimble ?? {}), i = /* @__PURE__ */ M(() => u(n).trackInventorySlots ?? !1), s = /* @__PURE__ */ M(() => u(n).includeCurrencyBulk ?? !1), a = /* @__PURE__ */ M(() => t.actor.reactive.system.inventory?.bonusSlots ?? 0), o = /* @__PURE__ */ M(() => u(n).showEmbeddedDocumentImages ?? !1), c = /* @__PURE__ */ M(() => u(n).executeItemMacros ?? !1), l = /* @__PURE__ */ M(() => u(n).compactSkillsView ?? !1), f = /* @__PURE__ */ M(() => u(n).showPassiveSkillScores ?? !1), v = /* @__PURE__ */ M(() => u(n).actorImageXOffset ?? 0), d = /* @__PURE__ */ M(() => u(n).actorImageYOffset ?? 0), h = /* @__PURE__ */ M(() => u(n).actorImageScale ?? 100);
  function p(D, te) {
    t.actor.setFlag("nimble", D, te);
  }
  r(p, "setFlag");
  function y(D) {
    t.actor.update({ "system.inventory.bonusSlots": Number(D) });
  }
  r(y, "updateBonusSlots");
  var E = ko(), g = m(E), w = _(m(g), 2), O = _(m(w), 2);
  O.__change = ({ target: D }) => p("actorImageXOffset", Number(D.value));
  var H = _(w, 2), j = _(m(H), 2);
  j.__change = ({ target: D }) => p("actorImageYOffset", Number(D.value));
  var U = _(H, 2), L = _(m(U), 2);
  L.__change = ({ target: D }) => p("actorImageScale", Number(D.value));
  var k = _(g, 2), N = _(m(k), 2), z = _(m(N), 2);
  z.__change = () => p("executeItemMacros", !u(c));
  var x = _(N, 2), C = _(m(x), 2);
  C.__change = () => p("showEmbeddedDocumentImages", !u(o));
  var X = _(k, 2), Y = _(m(X), 2), Q = _(m(Y), 2);
  Q.__change = () => p("trackInventorySlots", !u(i));
  var ie = _(Y, 2);
  {
    var V = /* @__PURE__ */ r((D) => {
      var te = Eo(), q = mn(te), ce = _(m(q), 2);
      ce.__change = () => p("includeCurrencyBulk", !u(s));
      var Pt = _(q, 2), re = _(m(Pt), 2);
      re.__change = ({ target: Se }) => y(Se.value), ne(() => {
        Ht(ce, u(s)), se(re, u(a)), re.disabled = !t.editingEnabled;
      }), T(D, te);
    }, "consequent");
    Z(ie, (D) => {
      u(i) && D(V);
    });
  }
  var $ = _(X, 2), S = _(m($), 2), P = _(m(S), 2);
  P.__change = () => p("compactSkillsView", !u(l));
  var K = _(S, 2), ee = _(m(K), 2);
  ee.__change = () => p("showPassiveSkillScores", !u(f)), ne(() => {
    se(O, u(v)), se(j, u(d)), se(L, u(h)), Ht(z, u(c)), Ht(C, u(o)), Ht(Q, u(i)), Ht(P, u(l)), Ht(ee, u(f));
  }), T(e, E), he();
}
r(xo, "SettingsTab");
we(["change"]);
var So = /* @__PURE__ */ I('<span style="color: #888;"> </span>'), Ao = /* @__PURE__ */ I('<div class="nos-slot" draggable="true"><span class="nos-slot__name" style="flex: 1; cursor: pointer;"> <!></span></div>'), Co = /* @__PURE__ */ I('<div class="nos-slot nos-slot--empty">No items</div>'), To = /* @__PURE__ */ I("<!> <!>", 1);
function Io(e, t) {
  _e(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((c) => c.type === "object").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var i = To(), s = mn(i);
  Ze(s, 17, () => u(n), Qe, (c, l) => {
    var f = Ao(), v = m(f);
    v.__click = () => t.actor.activateItem(u(l).id);
    var d = m(v), h = _(d);
    {
      var p = /* @__PURE__ */ r((y) => {
        var E = So(), g = m(E);
        ne(() => J(g, `x${u(l).system.quantity ?? ""}`)), T(y, E);
      }, "consequent");
      Z(h, (y) => {
        (u(l).system?.quantity ?? 1) > 1 && y(p);
      });
    }
    ne(() => {
      Oe(v, "data-tooltip", u(l).name), J(d, `${u(l).name ?? ""} `);
    }), T(c, f);
  });
  var a = _(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = Co();
      T(c, l);
    }, "consequent_1");
    Z(a, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  T(e, i), he();
}
r(Io, "InventorySlots");
we(["click"]);
var Mo = /* @__PURE__ */ I('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), Do = /* @__PURE__ */ I('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), No = /* @__PURE__ */ I('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span>Inventory Slots</span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function Oo(e, t) {
  _e(t, !0);
  const n = [
    {
      name: "features",
      label: "Features",
      icon: "fa-solid fa-table-list",
      component: io
    },
    {
      name: "spells",
      label: "Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: vo
    },
    {
      name: "inventory",
      label: "Inventory",
      icon: "fa-solid fa-box-open",
      component: go
    },
    {
      name: "bio",
      label: "Bio",
      icon: "fa-solid fa-file-lines",
      component: wo
    },
    {
      name: "settings",
      label: "Settings",
      icon: "fa-solid fa-cog",
      component: xo
    }
  ];
  let i = /* @__PURE__ */ Ie(pt(n[0])), s = /* @__PURE__ */ M(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), a = /* @__PURE__ */ M(() => t.actor.reactive.system.inventory);
  var o = No(), c = m(o);
  Ze(c, 21, () => n, Qe, (y, E) => {
    var g = Mo();
    let w;
    g.__click = () => Re(i, u(E), !0);
    var O = m(g), H = _(O);
    ne(() => {
      w = tn(g, 1, "nos-tab-btn", null, w, {
        "nos-tab-btn--active": u(i).name === u(E).name
      }), tn(O, 1, u(E).icon), J(H, ` ${u(E).label ?? ""}`);
    }), T(y, g);
  });
  var l = _(c, 2), f = m(l);
  us(f, () => u(i).component, (y, E) => {
    E(y, {
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var v = _(l, 4), d = m(v);
  Io(d, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return t.editingEnabled;
    }
  });
  var h = _(d, 2);
  {
    var p = /* @__PURE__ */ r((y) => {
      var E = Do(), g = m(E);
      ne(() => J(g, `${u(a).usedSlots ?? 0 ?? ""} / ${u(a).totalSlots ?? 0 ?? ""}`)), T(y, E);
    }, "consequent");
    Z(h, (y) => {
      u(s) && y(p);
    });
  }
  T(e, o), he();
}
r(Oo, "ContentArea");
we(["click"]);
var Lo = /* @__PURE__ */ I('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button" aria-label="Level Up" data-tooltip="Level Up"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button" aria-label="Revert Last Level Up" data-tooltip="Revert Last Level Up"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button" aria-label="Field Rest" data-tooltip="Field Rest"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button" aria-label="Safe Rest" data-tooltip="Safe Rest"><i class="fa-solid fa-moon"></i></button></aside>');
function Po(e, t) {
  _e(t, !0);
  var n = Lo(), i = m(n);
  let s;
  i.__click = function(...v) {
    t.toggleEditingEnabled?.apply(this, v);
  };
  var a = m(i), o = _(i, 2);
  o.__click = () => t.actor.triggerLevelUp();
  var c = _(o, 2);
  c.__click = () => t.actor.triggerLevelDown();
  var l = _(c, 2);
  l.__click = () => t.actor.triggerRest({ restType: "field" });
  var f = _(l, 2);
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), ne(() => {
    s = tn(i, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), Oe(i, "aria-pressed", t.editingEnabled), Oe(i, "aria-label", t.editingEnabled ? "Disable editing" : "Enable editing"), Oe(i, "data-tooltip", t.editingEnabled ? "Editing Enabled" : "Editing Locked"), tn(a, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, c.disabled = t.actor.reactive.system.levelUpHistory.length === 0;
  }), T(e, n), he();
}
r(Po, "SidebarControls");
we(["click"]);
var Ro = /* @__PURE__ */ I('<div class="nos-sheet" style="position: relative;"><!> <!> <!> <!> <!> <span class="nos-logo">Nimble</span></div>');
function Fo(e, t) {
  _e(t, !0);
  const {
    sizeCategories: n,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: s
  } = CONFIG.NIMBLE;
  function a(S, P) {
    return Math.clamp(0, Math.round(S / P * 100), 100);
  }
  r(a, "getHitPointPercentage");
  function o(S, P, K, ee) {
    const D = [];
    return K && D.push(`${K.name} (${n[ee] ?? ee})`), S && (P ? D.push(`${S.name} (${P.name}, ${S.system.classLevel})`) : D.push(`${S.name} (${S.system.classLevel})`)), D.filter(Boolean).join(" ⟡ ");
  }
  r(o, "prepareCharacterMetadata");
  function c(S, P) {
    if (!P) return S;
    const K = [4, 6, 8, 10, 12, 20], ee = K.indexOf(S);
    return ee === -1 ? S : K[Math.min(ee + P, K.length - 1)];
  }
  r(c, "incrementDieSize");
  let l = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.wounds);
  function f(S) {
    let P = S;
    S <= u(l).value && (P = S - 1), t.actor.update({ "system.attributes.wounds.value": P });
  }
  r(f, "toggleWounds");
  let v = /* @__PURE__ */ M(() => a(t.actor.reactive.system.attributes.hp.value, t.actor.reactive.system.attributes.hp.max) <= 50);
  function d(S) {
    t.actor.update({ "system.attributes.hp.value": S });
  }
  r(d, "updateCurrentHP");
  function h(S) {
    t.actor.update({ "system.attributes.hp.max": S });
  }
  r(h, "updateMaxHP");
  function p(S) {
    t.actor.update({ "system.attributes.hp.temp": S });
  }
  r(p, "updateTempHP");
  let y = /* @__PURE__ */ M(() => t.actor.reactive.system.resources.mana), E = /* @__PURE__ */ M(() => (u(y).max ?? 0) > 0 || (u(y).baseMax ?? 0) > 0 ? !0 : t.actor.reactive.items.some((S) => S.type === "class" && S.system?.mana?.formula?.length));
  function g(S) {
    t.actor.update({ "system.resources.mana.current": S });
  }
  r(g, "updateCurrentMana");
  function w(S) {
    const P = t.actor.reactive.system.resources.mana, K = P.baseMax ?? 0, D = (P.max || K) - K, te = Math.max(0, S - D);
    t.actor.update({ "system.resources.mana.baseMax": te });
  }
  r(w, "updateMaxMana");
  let O = /* @__PURE__ */ M(() => {
    const S = t.actor.reactive.system.attributes.hitDice, P = t.actor.reactive.system.attributes.bonusHitDice ?? [], K = t.actor.reactive.items.filter((re) => re.type === "class"), ee = t.actor.reactive.system.attributes.hitDiceSizeBonus ?? 0, D = {};
    for (const re of K) {
      const Se = re.system.hitDieSize, Rt = c(Se, ee), at = re.system.classLevel;
      D[Rt] ??= { current: 0, total: 0 }, D[Rt].total += at, D[Rt].current = S[Rt]?.current ?? 0;
    }
    const te = K.map((re) => c(re.system.hitDieSize, ee));
    for (const re of P) {
      const Se = c(re.size, ee);
      D[Se] ??= { current: S[Se]?.current ?? 0, total: 0 }, D[Se].total += re.value, te.includes(Se) || (D[Se].current = S[Se]?.current ?? 0);
    }
    const q = P.map((re) => c(re.size, ee));
    for (const [re, Se] of Object.entries(S ?? {})) {
      const Rt = Number(re), at = c(Rt, ee), Ci = Se?.bonus ?? 0;
      if (Ci > 0) {
        D[at] ??= { current: 0, total: 0 }, D[at].total += Ci;
        const Ha = te.includes(at), ja = q.includes(at);
        !Ha && !ja && (D[at].current = S[at]?.current ?? 0);
      }
    }
    let ce = 0, Pt = 0;
    for (const re of Object.values(D))
      ce += re.current, Pt += re.total;
    return { bySize: D, value: ce, max: Pt };
  });
  async function H(S) {
    await t.actor.updateCurrentHitDice(S);
  }
  r(H, "updateCurrentHitDice");
  async function j() {
    await t.actor.rollHitDice();
  }
  r(j, "rollHitDice");
  async function U() {
    await t.actor.editCurrentHitDice();
  }
  r(U, "editCurrentHitDice");
  let L = /* @__PURE__ */ M(() => t.actor.reactive.items.find((S) => S.type === "class") ?? null), k = /* @__PURE__ */ M(() => {
    const S = t.actor.reactive.items.find((D) => D.type === "class") ?? null, P = t.actor.reactive.items.find((D) => D.type === "subclass") ?? null, K = t.actor.reactive.items.find((D) => D.type === "ancestry") ?? null, ee = t.actor.reactive.system.attributes.sizeCategory;
    return o(S, P, K, ee);
  }), N = /* @__PURE__ */ M(() => t.actor.reactive.flags.nimble), z = /* @__PURE__ */ M(() => u(N)?.editingEnabled ?? !0);
  const x = hs(!1, (S) => (Wr(() => S(u(z))), () => {
  }));
  async function C() {
    await t.actor.setFlag("nimble", "editingEnabled", !u(z));
  }
  r(C, "toggleEditingEnabled"), gn("actor", t.actor), gn("document", t.actor), gn("application", t.sheet), gn("editingEnabled", x);
  var X = Ro(), Y = m(X);
  xs(Y, {
    get actor() {
      return t.actor;
    },
    get metaData() {
      return u(k);
    },
    get editingEnabled() {
      return u(z);
    },
    get hitDiceData() {
      return u(O);
    }
  });
  var Q = _(Y, 2);
  Os(Q, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return u(z);
    },
    get isBloodied() {
      return u(v);
    },
    get hitDiceData() {
      return u(O);
    },
    get hasMana() {
      return u(E);
    },
    get mana() {
      return u(y);
    },
    updateCurrentHP: d,
    updateMaxHP: h,
    updateTempHP: p,
    updateCurrentMana: g,
    updateMaxMana: w,
    updateCurrentHitDice: H,
    rollHitDice: j,
    editCurrentHitDice: U
  });
  var ie = _(Q, 2);
  zs(ie, {
    get actor() {
      return t.actor;
    },
    get wounds() {
      return u(l);
    },
    toggleWounds: f
  });
  var V = _(ie, 2);
  Oo(V, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return u(z);
    },
    get hasMana() {
      return u(E);
    },
    get mana() {
      return u(y);
    },
    updateCurrentMana: g,
    updateMaxMana: w
  });
  var $ = _(V, 2);
  Po($, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return u(z);
    },
    toggleEditingEnabled: C,
    get classItem() {
      return u(L);
    }
  }), T(e, X), he();
}
r(Fo, "OfficialSheet");
const Dn = class Dn extends ms(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  props;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = Fo;
    const i = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = i ?? t.document, this.props = { actor: this.document, sheet: this };
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
    const i = this.document;
    if (Hooks.call("dropActorSheetData", i, this, n) === !1 || !this.document.isOwner) return !1;
    const a = await Item.implementation.fromDropData(n);
    if (!a) return !1;
    const o = a.toObject();
    if (o.id = a.id, a.uuid && !o.uuid && (o.uuid = a.uuid), !!this._actor.items.has(a.id ?? ""))
      return this._onSortItem(t, o);
    const l = Array.isArray(o) ? o : [o];
    return l.some((v) => v.type === "subclass") ? this._onDropSubclassCreate(l) : this._actor.createEmbeddedDocuments("Item", l);
  }
  async _onDropSubclassCreate(t) {
    const n = Array.isArray(t) ? t : [t], i = this.document, s = [];
    for (const a of n) {
      if (a.type === "subclass") {
        const o = a, c = o.system?.parentClass, l = i.levels?.character ?? 0;
        if (l < 3) {
          ui.notifications?.warn(`You must be at least level 3 to select a subclass. You are currently level ${l}.`);
          continue;
        }
        if (!Object.values(i.classes ?? {}).some((d) => d.identifier === c)) {
          const d = CONFIG.NIMBLE?.classes?.[c] ?? c;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${d} class.`);
          continue;
        }
        const v = i.items.find((d) => d.type === "subclass" && d.system?.parentClass === c);
        if (v) {
          const d = v.system?.identifier, h = o.system?.identifier;
          if (d && h && d === h) {
            ui.notifications?.warn(`You already have the "${v.name}" subclass.`);
            continue;
          }
          if (!await foundry.applications.api.DialogV2.confirm({
            content: `<p>You already have the <strong>${v.name}</strong> subclass.<br />Do you want to replace it with <strong>${o.name}</strong>?</p>`,
            rejectClose: !1,
            modal: !0
          })) continue;
          await i.deleteEmbeddedDocuments("Item", [v.id]);
        }
      }
      s.push(a);
    }
    return s.length > 0 ? i.createEmbeddedDocuments("Item", s) : [];
  }
};
r(Dn, "OfficialCharacterSheet"), qe(Dn, "DEFAULT_OPTIONS", {
  classes: ["nimble-official-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 920, height: 750 }
});
let di = Dn;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-official-sheet",
    di,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Official Nimble Sheet"
    }
  );
});
//# sourceMappingURL=nimble-official-sheet.js.map
