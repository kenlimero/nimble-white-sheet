var Qa = Object.defineProperty;
var Xa = (e) => {
  throw TypeError(e);
};
var Nr = (e, t, n) => t in e ? Qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t) => Qa(e, "name", { value: t, configurable: !0 });
var Pe = (e, t, n) => Nr(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Xa("Cannot " + n);
var m = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), q = (e, t, n) => t.has(e) ? Xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), K = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), ye = (e, t, n) => (la(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), Tr = /* @__PURE__ */ Symbol("filename"), Ir = "http://www.w3.org/1999/xhtml", Za = globalThis.process?.env?.NODE_ENV, C = Za && !Za.toLowerCase().startsWith("prod");
var mi = Array.isArray, Ar = Array.prototype.indexOf, Bt = Array.prototype.includes, Qn = Array.from, qt = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, Cr = Object.getOwnPropertyDescriptors, Dr = Object.prototype, Wr = Array.prototype, pi = Object.getPrototypeOf, $a = Object.isExtensible;
const ca = /* @__PURE__ */ i(() => {
}, "noop");
function Mr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
i(Mr, "run_all");
function gi() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
i(gi, "deferred");
function yi(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
i(yi, "to_array");
const me = 2, ba = 4, Xn = 8, wi = 1 << 24, mt = 16, et = 32, Gt = 64, La = 128, Ue = 512, ve = 1024, pe = 2048, $e = 4096, Le = 8192, St = 16384, Ha = 32768, dn = 65536, Bn = 1 << 17, Ei = 1 << 18, pn = 1 << 19, Or = 1 << 20, ht = 1 << 25, At = 32768, ma = 1 << 21, Zn = 1 << 22, kt = 1 << 23, nn = /* @__PURE__ */ Symbol("$state"), Lr = /* @__PURE__ */ Symbol(""), Si = /* @__PURE__ */ Symbol("proxy path");
var an;
const $t = new (an = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, i(an, "StaleReactionError"), an)();
function Hr(e) {
  if (C) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
i(Hr, "lifecycle_outside_component");
function Pr() {
  if (C) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
i(Pr, "async_derived_orphan");
function ei() {
  if (C) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
i(ei, "bind_invalid_checkbox_value");
function Rr() {
  if (C) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
i(Rr, "derived_references_self");
function ki(e, t, n) {
  if (C) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
i(ki, "each_key_duplicate");
function Fr(e) {
  if (C) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
i(Fr, "effect_in_teardown");
function jr() {
  if (C) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
i(jr, "effect_in_unowned_derived");
function zr(e) {
  if (C) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
i(zr, "effect_orphan");
function Ur() {
  if (C) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
i(Ur, "effect_update_depth_exceeded");
function Br(e) {
  if (C) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
i(Br, "rune_outside_svelte");
function qr() {
  if (C) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
i(qr, "state_descriptors_fixed");
function Kr() {
  if (C) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
i(Kr, "state_prototype_fixed");
function Vr() {
  if (C) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
i(Vr, "state_unsafe_mutation");
function Gr() {
  if (C) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
i(Gr, "svelte_boundary_reset_onerror");
var $n = "font-weight: bold", ea = "font-weight: normal";
function Yr() {
  C ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, $n, ea) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
i(Yr, "lifecycle_double_unmount");
function ua(e) {
  C ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, $n, ea) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
i(ua, "state_proxy_equality_mismatch");
function Jr() {
  C ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, $n, ea) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
i(Jr, "state_proxy_unmount");
function Qr() {
  C ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", $n, ea) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
i(Qr, "svelte_boundary_reset_noop");
function xi(e) {
  return e === this.v;
}
i(xi, "equals");
function Ni(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
i(Ni, "safe_not_equal");
function Ti(e) {
  return !Ni(e, this.v);
}
i(Ti, "safe_equals");
let Xr = !1;
function nt(e, t) {
  return e.label = t, Ii(e.v, t), e;
}
i(nt, "tag");
function Ii(e, t) {
  return e?.[Si]?.(t), e;
}
i(Ii, "tag_proxy");
function Zr(e) {
  const t = new Error(), n = $r();
  return n.length === 0 ? null : (n.unshift(`
`), qt(t, "stack", {
    value: n.join(`
`)
  }), qt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
i(Zr, "get_error");
function $r() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), a = [];
  for (let s = 0; s < n.length; s++) {
    const r = n[s], o = r.replaceAll("\\", "/");
    if (r.trim() !== "Error") {
      if (r.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || a.push(r);
    }
  }
  return a;
}
i($r, "get_stack");
let be = null;
function vn(e) {
  be = e;
}
i(vn, "set_component_context");
let Nn = null;
function qn(e) {
  Nn = e;
}
i(qn, "set_dev_stack");
let Wn = null;
function ti(e) {
  Wn = e;
}
i(ti, "set_dev_current_component_function");
function Pn(e, t) {
  return es("setContext").set(e, t), t;
}
i(Pn, "setContext");
function we(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, C && (be.function = n, Wn = n);
}
i(we, "push");
function Ee(e) {
  var t = (
    /** @type {ComponentContext} */
    be
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Yi(a);
  }
  return t.i = !0, be = t.p, C && (Wn = be?.function ?? null), /** @type {T} */
  {};
}
i(Ee, "pop");
function Ai() {
  return !0;
}
i(Ai, "is_runes");
function es(e) {
  return be === null && Hr(e), be.c ??= new Map(ts(be) || void 0);
}
i(es, "get_or_init_context_map");
function ts(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
i(ts, "get_parent_context");
let Mt = [];
function Ci() {
  var e = Mt;
  Mt = [], Mr(e);
}
i(Ci, "run_micro_tasks");
function xt(e) {
  if (Mt.length === 0 && !kn) {
    var t = Mt;
    queueMicrotask(() => {
      t === Mt && Ci();
    });
  }
  Mt.push(e);
}
i(xt, "queue_micro_task");
function ns() {
  for (; Mt.length > 0; )
    Ci();
}
i(ns, "flush_tasks");
const pa = /* @__PURE__ */ new WeakMap();
function Di(e) {
  var t = ne;
  if (t === null)
    return Z.f |= kt, e;
  if (C && e instanceof Error && !pa.has(e) && pa.set(e, as(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw C && !t.parent && e instanceof Error && Wi(e), e;
    t.b.error(e);
  } else
    _n(e, t);
}
i(Di, "handle_error");
function _n(e, t) {
  for (; t !== null; ) {
    if ((t.f & La) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw C && e instanceof Error && Wi(e), e;
}
i(_n, "invoke_error_boundary");
function as(e, t) {
  const n = tn(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = za ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, r = t.ctx; r !== null; )
      s += `
${a}in ${r.function?.[Tr].split("/").pop()}`, r = r.p;
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
i(as, "get_adjustments");
function Wi(e) {
  const t = pa.get(e);
  t && (qt(e, "message", {
    value: t.message
  }), qt(e, "stack", {
    value: t.stack
  }));
}
i(Wi, "apply_adjustments");
const is = -7169;
function de(e, t) {
  e.f = e.f & is | t;
}
i(de, "set_signal_status");
function Pa(e) {
  (e.f & Ue) !== 0 || e.deps === null ? de(e, ve) : de(e, $e);
}
i(Pa, "update_derived_status");
function Mi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & At) === 0 || (t.f ^= At, Mi(
        /** @type {Derived} */
        t.deps
      ));
}
i(Mi, "clear_marked");
function Oi(e, t, n) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & $e) !== 0 && n.add(e), Mi(e.deps), de(e, ve);
}
i(Oi, "defer_effect");
const Rn = /* @__PURE__ */ new Set();
let re = null, ga = null, Ye = null, xe = [], ta = null, ya = !1, kn = !1;
var rn, sn, Lt, on, In, An, Ht, vt, ln, ut, wa, Ea, Li;
const Gn = class Gn {
  constructor() {
    q(this, ut);
    Pe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    q(this, rn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, sn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, Lt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    q(this, on, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, In, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, An, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    q(this, Ht, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    q(this, vt, /* @__PURE__ */ new Map());
    Pe(this, "is_fork", !1);
    q(this, ln, !1);
  }
  is_deferred() {
    return this.is_fork || m(this, on) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    m(this, vt).has(t) || m(this, vt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = m(this, vt).get(t);
    if (n) {
      m(this, vt).delete(t);
      for (var a of n.d)
        de(a, pe), Je(a);
      for (a of n.m)
        de(a, $e), Je(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    xe = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      ye(this, ut, wa).call(this, s, n, a);
    if (this.is_deferred()) {
      ye(this, ut, Ea).call(this, a), ye(this, ut, Ea).call(this, n);
      for (const [s, r] of m(this, vt))
        Fi(s, r);
    } else {
      for (const s of m(this, rn)) s();
      m(this, rn).clear(), m(this, Lt) === 0 && ye(this, ut, Li).call(this), ga = this, re = null, ni(a), ni(n), ga = null, m(this, In)?.resolve();
    }
    Ye = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & kt) === 0 && (this.current.set(t, t.v), Ye?.set(t, t.v));
  }
  activate() {
    re = this, this.apply();
  }
  deactivate() {
    re === this && (re = null, Ye = null);
  }
  flush() {
    if (this.activate(), xe.length > 0) {
      if (Hi(), re !== null && re !== this)
        return;
    } else m(this, Lt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of m(this, sn)) t(this);
    m(this, sn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    K(this, Lt, m(this, Lt) + 1), t && K(this, on, m(this, on) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    K(this, Lt, m(this, Lt) - 1), t && K(this, on, m(this, on) - 1), !m(this, ln) && (K(this, ln, !0), xt(() => {
      K(this, ln, !1), this.is_deferred() ? xe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of m(this, An))
      m(this, Ht).delete(t), de(t, pe), Je(t);
    for (const t of m(this, Ht))
      de(t, $e), Je(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    m(this, rn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    m(this, sn).add(t);
  }
  settled() {
    return (m(this, In) ?? K(this, In, gi())).promise;
  }
  static ensure() {
    if (re === null) {
      const t = re = new Gn();
      Rn.add(re), kn || xt(() => {
        re === t && t.flush();
      });
    }
    return re;
  }
  apply() {
  }
};
rn = new WeakMap(), sn = new WeakMap(), Lt = new WeakMap(), on = new WeakMap(), In = new WeakMap(), An = new WeakMap(), Ht = new WeakMap(), vt = new WeakMap(), ln = new WeakMap(), ut = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = /* @__PURE__ */ i(function(t, n, a) {
  t.f ^= ve;
  for (var s = t.first, r = null; s !== null; ) {
    var o = s.f, u = (o & (et | Gt)) !== 0, l = u && (o & ve) !== 0, f = l || (o & Le) !== 0 || m(this, vt).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= ve : r !== null && (o & (ba | Xn | wi)) !== 0 ? r.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : On(s) && ((o & mt) !== 0 && m(this, Ht).add(s), Tn(s));
      var d = s.first;
      if (d !== null) {
        s = d;
        continue;
      }
    }
    var v = s.parent;
    for (s = s.next; s === null && v !== null; )
      v === r && (r = null), s = v.next, v = v.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
Ea = /* @__PURE__ */ i(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Oi(t[n], m(this, An), m(this, Ht));
}, "#defer_effects"), Li = /* @__PURE__ */ i(function() {
  var s;
  if (Rn.size > 1) {
    this.previous.clear();
    var t = Ye, n = !0;
    for (const r of Rn) {
      if (r === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [l, f] of this.current) {
        if (r.current.has(l))
          if (n && f !== r.current.get(l))
            r.current.set(l, f);
          else
            continue;
        o.push(l);
      }
      if (o.length === 0)
        continue;
      const u = [...r.current.keys()].filter((l) => !this.current.has(l));
      if (u.length > 0) {
        var a = xe;
        xe = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Pi(d, u, l, f);
        if (xe.length > 0) {
          re = r, r.apply();
          for (const d of xe)
            ye(s = r, ut, wa).call(s, d, [], []);
          r.deactivate();
        }
        xe = a;
      }
    }
    re = null, Ye = t;
  }
  this.committed = !0, Rn.delete(this);
}, "#commit"), i(Gn, "Batch");
let Nt = Gn;
function rs(e) {
  var t = kn;
  kn = !0;
  try {
    for (var n; ; ) {
      if (ns(), xe.length === 0 && (re?.flush(), xe.length === 0))
        return ta = null, /** @type {T} */
        n;
      Hi();
    }
  } finally {
    kn = t;
  }
}
i(rs, "flushSync");
function Hi() {
  ya = !0;
  var e = C ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; xe.length > 0; ) {
      var n = Nt.ensure();
      if (t++ > 1e3) {
        if (C) {
          var a = /* @__PURE__ */ new Map();
          for (const r of n.current.keys())
            for (const [o, u] of r.updated ?? []) {
              var s = a.get(o);
              s || (s = { error: u.error, count: 0 }, a.set(o, s)), s.count += u.count;
            }
          for (const r of a.values())
            r.error && console.error(r.error);
        }
        ss();
      }
      if (n.process(xe), Tt.clear(), C)
        for (const r of n.current.keys())
          e.add(r);
    }
  } finally {
    if (xe = [], ya = !1, ta = null, C)
      for (
        const r of
        /** @type {Set<Source>} */
        e
      )
        r.updated = null;
  }
}
i(Hi, "flush_effects");
function ss() {
  try {
    Ur();
  } catch (e) {
    C && qt(e, "stack", { value: "" }), _n(e, ta);
  }
}
i(ss, "infinite_loop_guard");
let ft = null;
function ni(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (St | Le)) === 0 && On(a) && (ft = /* @__PURE__ */ new Set(), Tn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? $i(a) : a.fn = null), ft?.size > 0)) {
        Tt.clear();
        for (const s of ft) {
          if ((s.f & (St | Le)) !== 0) continue;
          const r = [s];
          let o = s.parent;
          for (; o !== null; )
            ft.has(o) && (ft.delete(o), r.push(o)), o = o.parent;
          for (let u = r.length - 1; u >= 0; u--) {
            const l = r[u];
            (l.f & (St | Le)) === 0 && Tn(l);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
i(ni, "flush_queued_effects");
function Pi(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const r = s.f;
      (r & me) !== 0 ? Pi(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (r & (Zn | mt)) !== 0 && (r & pe) === 0 && Ri(s, t, a) && (de(s, pe), Je(
        /** @type {Effect} */
        s
      ));
    }
}
i(Pi, "mark_effects");
function Ri(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Bt.call(t, s))
        return !0;
      if ((s.f & me) !== 0 && Ri(
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
i(Ri, "depends_on");
function Je(e) {
  for (var t = ta = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === ne && (n & mt) !== 0 && (n & Ei) === 0)
      return;
    if ((n & (Gt | et)) !== 0) {
      if ((n & ve) === 0) return;
      t.f ^= ve;
    }
  }
  xe.push(t);
}
i(Je, "schedule_effect");
function Fi(e, t) {
  if (!((e.f & et) !== 0 && (e.f & ve) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), de(e, ve);
    for (var n = e.first; n !== null; )
      Fi(n, t), n = n.next;
  }
}
i(Fi, "reset_branch");
function ji(e) {
  let t = 0, n = Kt(0), a;
  return C && nt(n, "createSubscriber version"), () => {
    Ua() && (c(n), Ji(() => (t === 0 && (a = cr(() => e(() => xn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, xn(n));
      });
    })));
  };
}
i(ji, "createSubscriber");
var os = dn | pn | La;
function ls(e, t, n) {
  new Sa(e, t, n);
}
i(ls, "boundary");
var Fe, Oa, it, Pt, rt, je, ke, st, _t, yt, Rt, wt, cn, Ft, un, fn, ot, Yn, _e, cs, us, ka, jn, zn, xa;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    q(this, _e);
    /** @type {Boundary | null} */
    Pe(this, "parent");
    Pe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    q(this, Fe);
    /** @type {TemplateNode | null} */
    q(this, Oa, null);
    /** @type {BoundaryProps} */
    q(this, it);
    /** @type {((anchor: Node) => void)} */
    q(this, Pt);
    /** @type {Effect} */
    q(this, rt);
    /** @type {Effect | null} */
    q(this, je, null);
    /** @type {Effect | null} */
    q(this, ke, null);
    /** @type {Effect | null} */
    q(this, st, null);
    /** @type {DocumentFragment | null} */
    q(this, _t, null);
    /** @type {TemplateNode | null} */
    q(this, yt, null);
    q(this, Rt, 0);
    q(this, wt, 0);
    q(this, cn, !1);
    q(this, Ft, !1);
    /** @type {Set<Effect>} */
    q(this, un, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, fn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, ot, null);
    q(this, Yn, ji(() => (K(this, ot, Kt(m(this, Rt))), C && nt(m(this, ot), "$effect.pending()"), () => {
      K(this, ot, null);
    })));
    K(this, Fe, t), K(this, it, n), K(this, Pt, a), this.parent = /** @type {Effect} */
    ne.b, this.is_pending = !!m(this, it).pending, K(this, rt, Ba(() => {
      ne.b = this;
      {
        var s = ye(this, _e, ka).call(this);
        try {
          K(this, je, ze(() => a(s)));
        } catch (r) {
          this.error(r);
        }
        m(this, wt) > 0 ? ye(this, _e, zn).call(this) : this.is_pending = !1;
      }
      return () => {
        m(this, yt)?.remove();
      };
    }, os));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Oi(t, m(this, un), m(this, fn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!m(this, it).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ye(this, _e, xa).call(this, t), K(this, Rt, m(this, Rt) + t), !(!m(this, ot) || m(this, cn)) && (K(this, cn, !0), xt(() => {
      K(this, cn, !1), m(this, ot) && bn(m(this, ot), m(this, Rt));
    }));
  }
  get_effect_pending() {
    return m(this, Yn).call(this), c(
      /** @type {Source<number>} */
      m(this, ot)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = m(this, it).onerror;
    let a = m(this, it).failed;
    if (m(this, Ft) || !n && !a)
      throw t;
    m(this, je) && (Te(m(this, je)), K(this, je, null)), m(this, ke) && (Te(m(this, ke)), K(this, ke, null)), m(this, st) && (Te(m(this, st)), K(this, st, null));
    var s = !1, r = !1;
    const o = /* @__PURE__ */ i(() => {
      if (s) {
        Qr();
        return;
      }
      s = !0, r && Gr(), Nt.ensure(), K(this, Rt, 0), m(this, st) !== null && zt(m(this, st), () => {
        K(this, st, null);
      }), this.is_pending = this.has_pending_snippet(), K(this, je, ye(this, _e, jn).call(this, () => (K(this, Ft, !1), ze(() => m(this, Pt).call(this, m(this, Fe)))))), m(this, wt) > 0 ? ye(this, _e, zn).call(this) : this.is_pending = !1;
    }, "reset");
    xt(() => {
      try {
        r = !0, n?.(t, o), r = !1;
      } catch (u) {
        _n(u, m(this, rt) && m(this, rt).parent);
      }
      a && K(this, st, ye(this, _e, jn).call(this, () => {
        Nt.ensure(), K(this, Ft, !0);
        try {
          return ze(() => {
            a(
              m(this, Fe),
              () => t,
              () => o
            );
          });
        } catch (u) {
          return _n(
            u,
            /** @type {Effect} */
            m(this, rt).parent
          ), null;
        } finally {
          K(this, Ft, !1);
        }
      }));
    });
  }
};
Fe = new WeakMap(), Oa = new WeakMap(), it = new WeakMap(), Pt = new WeakMap(), rt = new WeakMap(), je = new WeakMap(), ke = new WeakMap(), st = new WeakMap(), _t = new WeakMap(), yt = new WeakMap(), Rt = new WeakMap(), wt = new WeakMap(), cn = new WeakMap(), Ft = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), ot = new WeakMap(), Yn = new WeakMap(), _e = new WeakSet(), cs = /* @__PURE__ */ i(function() {
  try {
    K(this, je, ze(() => m(this, Pt).call(this, m(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), us = /* @__PURE__ */ i(function() {
  const t = m(this, it).pending;
  t && (K(this, ke, ze(() => t(m(this, Fe)))), xt(() => {
    var n = ye(this, _e, ka).call(this);
    K(this, je, ye(this, _e, jn).call(this, () => (Nt.ensure(), ze(() => m(this, Pt).call(this, n))))), m(this, wt) > 0 ? ye(this, _e, zn).call(this) : (zt(
      /** @type {Effect} */
      m(this, ke),
      () => {
        K(this, ke, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ka = /* @__PURE__ */ i(function() {
  var t = m(this, Fe);
  return this.is_pending && (K(this, yt, It()), m(this, Fe).before(m(this, yt)), t = m(this, yt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
jn = /* @__PURE__ */ i(function(t) {
  var n = ne, a = Z, s = be;
  Xe(m(this, rt)), qe(m(this, rt)), vn(m(this, rt).ctx);
  try {
    return t();
  } catch (r) {
    return Di(r), null;
  } finally {
    Xe(n), qe(a), vn(s);
  }
}, "#run"), zn = /* @__PURE__ */ i(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    m(this, it).pending
  );
  m(this, je) !== null && (K(this, _t, document.createDocumentFragment()), m(this, _t).append(
    /** @type {TemplateNode} */
    m(this, yt)
  ), nr(m(this, je), m(this, _t))), m(this, ke) === null && K(this, ke, ze(() => t(m(this, Fe))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xa = /* @__PURE__ */ i(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ye(n = this.parent, _e, xa).call(n, t);
    return;
  }
  if (K(this, wt, m(this, wt) + t), m(this, wt) === 0) {
    this.is_pending = !1;
    for (const a of m(this, un))
      de(a, pe), Je(a);
    for (const a of m(this, fn))
      de(a, $e), Je(a);
    m(this, un).clear(), m(this, fn).clear(), m(this, ke) && zt(m(this, ke), () => {
      K(this, ke, null);
    }), m(this, _t) && (m(this, Fe).before(m(this, _t)), K(this, _t, null));
  }
}, "#update_pending_count"), i(Va, "Boundary");
let Sa = Va;
function fs(e, t, n, a) {
  const s = Ra;
  var r = e.filter((_) => !_.settled);
  if (n.length === 0 && r.length === 0) {
    a(t.map(s));
    return;
  }
  var o = re, u = (
    /** @type {Effect} */
    ne
  ), l = ds(), f = r.length === 1 ? r[0].promise : r.length > 1 ? Promise.all(r.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (g) {
      (u.f & St) === 0 && _n(g, u);
    }
    o?.deactivate(), Na();
  }
  if (i(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function v() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ _s(_))).then((_) => d([...t.map(s), ..._])).catch((_) => _n(_, u));
  }
  i(v, "run"), f ? f.then(v) : v();
}
i(fs, "flatten");
function ds() {
  var e = ne, t = Z, n = be, a = re;
  if (C)
    var s = Nn;
  return /* @__PURE__ */ i(function(o = !0) {
    Xe(e), qe(t), vn(n), o && a?.activate(), C && qn(s);
  }, "restore");
}
i(ds, "capture");
function Na() {
  Xe(null), qe(null), vn(null), C && qn(null);
}
i(Na, "unset_context");
const vs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = me | pe, n = Z !== null && (Z.f & me) !== 0 ? (
    /** @type {Derived} */
    Z
  ) : null;
  return ne !== null && (ne.f |= pn), {
    ctx: be,
    deps: null,
    effects: null,
    equals: xi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      he
    ),
    wv: 0,
    parent: n ?? ne,
    ac: null
  };
}
i(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function _s(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ne
  );
  a === null && Pr();
  var s = (
    /** @type {Boundary} */
    a.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Kt(
    /** @type {V} */
    he
  );
  C && (o.label = t);
  var u = !Z, l = /* @__PURE__ */ new Map();
  return Ds(() => {
    var f = gi();
    r = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === re && d.committed && d.deactivate(), Na();
      });
    } catch (g) {
      f.reject(g), Na();
    }
    var d = (
      /** @type {Batch} */
      re
    );
    if (u) {
      var v = s.is_rendered();
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject($t), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ i((g, w = void 0) => {
      if (d.activate(), w)
        w !== $t && (o.f |= kt, bn(o, w));
      else {
        (o.f & kt) !== 0 && (o.f ^= kt), bn(o, g);
        for (const [I, y] of l) {
          if (l.delete(I), I === d) break;
          y.reject($t);
        }
      }
      u && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (g) => _(null, g || "unknown"));
  }), Gi(() => {
    for (const f of l.values())
      f.reject($t);
  }), C && (o.f |= Zn), new Promise((f) => {
    function d(v) {
      function _() {
        v === r ? f(o) : d(r);
      }
      i(_, "go"), v.then(_, _);
    }
    i(d, "next"), d(r);
  });
}
i(_s, "async_derived");
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = /* @__PURE__ */ Ra(e);
  return ar(t), t;
}
i(U, "user_derived");
// @__NO_SIDE_EFFECTS__
function hs(e) {
  const t = /* @__PURE__ */ Ra(e);
  return t.equals = Ti, t;
}
i(hs, "derived_safe_equal");
function Ta(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Te(
        /** @type {Effect} */
        t[n]
      );
  }
}
i(Ta, "destroy_derived_effects");
let fa = [];
function bs(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (t.f & St) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
i(bs, "get_derived_parent_effect");
function Fa(e) {
  var t, n = ne;
  if (Xe(bs(e)), C) {
    let a = hn;
    ai(/* @__PURE__ */ new Set());
    try {
      Bt.call(fa, e) && Rr(), fa.push(e), e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      Xe(n), ai(a), fa.pop();
    }
  } else
    try {
      e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      Xe(n);
    }
  return t;
}
i(Fa, "execute_derived");
function zi(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = rr(), (!re?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, ve);
    return;
  }
  Vt || (Ye !== null ? (Ua() || re?.is_fork) && Ye.set(e, t) : Pa(e));
}
i(zi, "update_derived");
let hn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
function ai(e) {
  hn = e;
}
i(ai, "set_eager_effects");
let ja = !1;
function ms() {
  ja = !0;
}
i(ms, "set_eager_effects_deferred");
function Kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: xi,
    rv: 0,
    wv: 0
  };
  return n;
}
i(Kt, "source");
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  const n = Kt(e);
  return ar(n), n;
}
i(Me, "state");
// @__NO_SIDE_EFFECTS__
function ps(e, t = !1, n = !0) {
  const a = Kt(e);
  return t || (a.equals = Ti), a;
}
i(ps, "mutable_source");
function Oe(e, t, n = !1) {
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Qe || (Z.f & Bn) !== 0) && Ai() && (Z.f & (me | mt | Zn | Bn)) !== 0 && (Be === null || !Bt.call(Be, e)) && Vr();
  let a = n ? en(t) : t;
  return C && Ii(
    a,
    /** @type {string} */
    e.label
  ), bn(e, a);
}
i(Oe, "set");
function bn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vt ? Tt.set(e, t) : Tt.set(e, n), e.v = t;
    var a = Nt.ensure();
    if (a.capture(e, n), C) {
      if (ne !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const r = Zr("updated at");
          if (r !== null) {
            let o = e.updated.get(r.stack);
            o || (o = { error: r, count: 0 }, e.updated.set(r.stack, o)), o.count++;
          }
        }
      }
      ne !== null && (e.set_during_effect = !0);
    }
    if ((e.f & me) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && Fa(s), Pa(s);
    }
    e.wv = rr(), Bi(e, pe), ne !== null && (ne.f & ve) !== 0 && (ne.f & (et | Gt)) === 0 && (Re === null ? Ms([e]) : Re.push(e)), !a.is_fork && hn.size > 0 && !ja && Ui();
  }
  return t;
}
i(bn, "internal_set");
function Ui() {
  ja = !1;
  for (const e of hn)
    (e.f & ve) !== 0 && de(e, $e), On(e) && Tn(e);
  hn.clear();
}
i(Ui, "flush_eager_effects");
function xn(e) {
  Oe(e, e.v + 1);
}
i(xn, "increment");
function Bi(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var r = n[s], o = r.f;
      if (C && (o & Bn) !== 0) {
        hn.add(r);
        continue;
      }
      var u = (o & pe) === 0;
      if (u && de(r, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          r
        );
        Ye?.delete(l), (o & At) === 0 && (o & Ue && (r.f |= At), Bi(l, $e));
      } else u && ((o & mt) !== 0 && ft !== null && ft.add(
        /** @type {Effect} */
        r
      ), Je(
        /** @type {Effect} */
        r
      ));
    }
}
i(Bi, "mark_reactions");
const gs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function en(e) {
  if (typeof e != "object" || e === null || nn in e)
    return e;
  const t = pi(e);
  if (t !== Dr && t !== Wr)
    return e;
  var n = /* @__PURE__ */ new Map(), a = mi(e), s = /* @__PURE__ */ Me(0), r = Ut, o = /* @__PURE__ */ i((d) => {
    if (Ut === r)
      return d();
    var v = Z, _ = Ut;
    qe(null), oi(r);
    var g = d();
    return qe(v), oi(_), g;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Me(
    /** @type {any[]} */
    e.length
  )), C && (e = /** @type {any} */
  ws(
    /** @type {any[]} */
    e
  )));
  var u = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, u = d, nt(s, `${u} version`);
      for (const [v, _] of n)
        nt(_, Wt(u, v));
      l = !1;
    }
  }
  return i(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && qr();
        var g = n.get(v);
        return g === void 0 ? g = o(() => {
          var w = /* @__PURE__ */ Me(_.value);
          return n.set(v, w), C && typeof v == "string" && nt(w, Wt(u, v)), w;
        }) : Oe(g, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const g = o(() => /* @__PURE__ */ Me(he));
            n.set(v, g), xn(s), C && nt(g, Wt(u, v));
          }
        } else
          Oe(_, he), xn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === nn)
          return e;
        if (C && v === Si)
          return f;
        var g = n.get(v), w = v in d;
        if (g === void 0 && (!w || tn(d, v)?.writable) && (g = o(() => {
          var y = en(w ? d[v] : he), M = /* @__PURE__ */ Me(y);
          return C && nt(M, Wt(u, v)), M;
        }), n.set(v, g)), g !== void 0) {
          var I = c(g);
          return I === he ? void 0 : I;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var g = n.get(v);
          g && (_.value = c(g));
        } else if (_ === void 0) {
          var w = n.get(v), I = w?.v;
          if (w !== void 0 && I !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: I,
              writable: !0
            };
        }
        return _;
      },
      has(d, v) {
        if (v === nn)
          return !0;
        var _ = n.get(v), g = _ !== void 0 && _.v !== he || Reflect.has(d, v);
        if (_ !== void 0 || ne !== null && (!g || tn(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var I = g ? en(d[v]) : he, y = /* @__PURE__ */ Me(I);
            return C && nt(y, Wt(u, v)), y;
          }), n.set(v, _));
          var w = c(_);
          if (w === he)
            return !1;
        }
        return g;
      },
      set(d, v, _, g) {
        var w = n.get(v), I = v in d;
        if (a && v === "length")
          for (var y = _; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var M = n.get(y + "");
            M !== void 0 ? Oe(M, he) : y in d && (M = o(() => /* @__PURE__ */ Me(he)), n.set(y + "", M), C && nt(M, Wt(u, y)));
          }
        if (w === void 0)
          (!I || tn(d, v)?.writable) && (w = o(() => /* @__PURE__ */ Me(void 0)), C && nt(w, Wt(u, v)), Oe(w, en(_)), n.set(v, w));
        else {
          I = w.v !== he;
          var oe = o(() => en(_));
          Oe(w, oe);
        }
        var E = Reflect.getOwnPropertyDescriptor(d, v);
        if (E?.set && E.set.call(g, _), !I) {
          if (a && typeof v == "string") {
            var W = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(v);
            Number.isInteger(P) && P >= W.v && Oe(W, P + 1);
          }
          xn(s);
        }
        return !0;
      },
      ownKeys(d) {
        c(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var I = n.get(w);
          return I === void 0 || I.v !== he;
        });
        for (var [_, g] of n)
          g.v !== he && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        Kr();
      }
    }
  );
}
i(en, "proxy");
function Wt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : gs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
i(Wt, "get_label");
function da(e) {
  try {
    if (e !== null && typeof e == "object" && nn in e)
      return e[nn];
  } catch {
  }
  return e;
}
i(da, "get_proxied_value");
const ys = /* @__PURE__ */ new Set([
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
function ws(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return ys.has(
        /** @type {string} */
        n
      ) ? function(...r) {
        ms();
        var o = s.apply(this, r);
        return Ui(), o;
      } : s;
    }
  });
}
i(ws, "inspectable_array");
function Es() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(r, o) {
    const u = n.call(this, r, o);
    if (u === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (da(this[l]) === r) {
          ua("array.indexOf(...)");
          break;
        }
    }
    return u;
  }, e.lastIndexOf = function(r, o) {
    const u = a.call(this, r, o ?? this.length - 1);
    if (u === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (da(this[l]) === r) {
          ua("array.lastIndexOf(...)");
          break;
        }
    }
    return u;
  }, e.includes = function(r, o) {
    const u = s.call(this, r, o);
    if (!u) {
      for (let l = 0; l < this.length; l += 1)
        if (da(this[l]) === r) {
          ua("array.includes(...)");
          break;
        }
    }
    return u;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
i(Es, "init_array_prototype_warnings");
var ii, za, qi, Ki;
function Ss() {
  if (ii === void 0) {
    ii = window, za = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    qi = tn(t, "firstChild").get, Ki = tn(t, "nextSibling").get, $a(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $a(n) && (n.__t = void 0), C && (e.__svelte_meta = null, Es());
  }
}
i(Ss, "init_operations");
function It(e = "") {
  return document.createTextNode(e);
}
i(It, "create_text");
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return (
    /** @type {TemplateNode | null} */
    qi.call(e)
  );
}
i(Et, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(e)
  );
}
i(Mn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ Et(e);
}
i(h, "child");
function bt(e, t = !1) {
  {
    var n = /* @__PURE__ */ Et(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Mn(n) : n;
  }
}
i(bt, "first_child");
function b(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ Mn(a);
  return a;
}
i(b, "sibling");
function ks(e) {
  e.textContent = "";
}
i(ks, "clear_text_content");
function Vi() {
  return !1;
}
i(Vi, "should_defer_append");
let ri = !1;
function xs() {
  ri || (ri = !0, document.addEventListener(
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
i(xs, "add_form_reset_listener");
function na(e) {
  var t = Z, n = ne;
  qe(null), Xe(null);
  try {
    return e();
  } finally {
    qe(t), Xe(n);
  }
}
i(na, "without_reactive_context");
function Ns(e, t, n, a = n) {
  e.addEventListener(t, () => na(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), xs();
}
i(Ns, "listen_to_event_and_reset_event");
function Ts(e) {
  ne === null && (Z === null && zr(e), jr()), Vt && Fr(e);
}
i(Ts, "validate_effect");
function Is(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
i(Is, "push_effect");
function Ct(e, t, n) {
  var a = ne;
  if (C)
    for (; a !== null && (a.f & Bn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Le) !== 0 && (e |= Le);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | pe | Ue,
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
  if (C && (s.component_function = Wn), n)
    try {
      Tn(s), s.f |= Ha;
    } catch (u) {
      throw Te(s), u;
    }
  else t !== null && Je(s);
  var r = s;
  if (n && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  (r.f & pn) === 0 && (r = r.first, (e & mt) !== 0 && (e & dn) !== 0 && r !== null && (r.f |= dn)), r !== null && (r.parent = a, a !== null && Is(r, a), Z !== null && (Z.f & me) !== 0 && (e & Gt) === 0)) {
    var o = (
      /** @type {Derived} */
      Z
    );
    (o.effects ??= []).push(r);
  }
  return s;
}
i(Ct, "create_effect");
function Ua() {
  return Z !== null && !Qe;
}
i(Ua, "effect_tracking");
function Gi(e) {
  const t = Ct(Xn, null, !1);
  return de(t, ve), t.teardown = e, t;
}
i(Gi, "teardown");
function As(e) {
  Ts("$effect"), C && qt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ne.f
  ), n = !Z && (t & et) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return Yi(e);
}
i(As, "user_effect");
function Yi(e) {
  return Ct(ba | Or, e, !1);
}
i(Yi, "create_user_effect");
function Cs(e) {
  Nt.ensure();
  const t = Ct(Gt | pn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? zt(t, () => {
      Te(t), a(void 0);
    }) : (Te(t), a(void 0));
  });
}
i(Cs, "component_root");
function Ds(e) {
  return Ct(Zn | pn, e, !0);
}
i(Ds, "async_effect");
function Ji(e, t = 0) {
  return Ct(Xn | t, e, !0);
}
i(Ji, "render_effect");
function V(e, t = [], n = [], a = []) {
  fs(a, t, n, (s) => {
    Ct(Xn, () => e(...s.map(c)), !0);
  });
}
i(V, "template_effect");
function Ba(e, t = 0) {
  var n = Ct(mt | t, e, !0);
  return C && (n.dev_stack = Nn), n;
}
i(Ba, "block");
function ze(e) {
  return Ct(et | pn, e, !0);
}
i(ze, "branch");
function Qi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vt, a = Z;
    si(!0), qe(null);
    try {
      t.call(null);
    } finally {
      si(n), qe(a);
    }
  }
}
i(Qi, "execute_effect_teardown");
function Xi(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && na(() => {
      s.abort($t);
    });
    var a = n.next;
    (n.f & Gt) !== 0 ? n.parent = null : Te(n, t), n = a;
  }
}
i(Xi, "destroy_effect_children");
function Ws(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & et) === 0 && Te(t), t = n;
  }
}
i(Ws, "destroy_block_effect_children");
function Te(e, t = !0) {
  var n = !1;
  (t || (e.f & Ei) !== 0) && e.nodes !== null && e.nodes.end !== null && (Zi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Xi(e, t && !n), Kn(e, 0), de(e, St);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const r of a)
      r.stop();
  Qi(e);
  var s = e.parent;
  s !== null && s.first !== null && $i(e), C && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
i(Te, "destroy_effect");
function Zi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Mn(e);
    e.remove(), e = n;
  }
}
i(Zi, "remove_effect_dom");
function $i(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
i($i, "unlink_effect");
function zt(e, t, n = !0) {
  var a = [];
  er(e, a, !0);
  var s = /* @__PURE__ */ i(() => {
    n && Te(e), t && t();
  }, "fn"), r = a.length;
  if (r > 0) {
    var o = /* @__PURE__ */ i(() => --r || s(), "check");
    for (var u of a)
      u.out(o);
  } else
    s();
}
i(zt, "pause_effect");
function er(e, t, n) {
  if ((e.f & Le) === 0) {
    e.f ^= Le;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || n) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var r = s.next, o = (s.f & dn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & et) !== 0 && (e.f & mt) !== 0;
      er(s, t, o ? n : !1), s = r;
    }
  }
}
i(er, "pause_children");
function qa(e) {
  tr(e, !0);
}
i(qa, "resume_effect");
function tr(e, t) {
  if ((e.f & Le) !== 0) {
    e.f ^= Le, (e.f & ve) === 0 && (de(e, pe), Je(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & dn) !== 0 || (n.f & et) !== 0;
      tr(n, s ? t : !1), n = a;
    }
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || t) && o.in();
  }
}
i(tr, "resume_children");
function nr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ Mn(n);
      t.append(n), n = s;
    }
}
i(nr, "move_effect");
let Un = !1, Vt = !1;
function si(e) {
  Vt = e;
}
i(si, "set_is_destroying_effect");
let Z = null, Qe = !1;
function qe(e) {
  Z = e;
}
i(qe, "set_active_reaction");
let ne = null;
function Xe(e) {
  ne = e;
}
i(Xe, "set_active_effect");
let Be = null;
function ar(e) {
  Z !== null && (Be === null ? Be = [e] : Be.push(e));
}
i(ar, "push_reaction_value");
let Ne = null, De = 0, Re = null;
function Ms(e) {
  Re = e;
}
i(Ms, "set_untracked_writes");
let ir = 1, Ot = 0, Ut = Ot;
function oi(e) {
  Ut = e;
}
i(oi, "set_update_version");
function rr() {
  return ++ir;
}
i(rr, "increment_write_version");
function On(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & me && (e.f &= ~At), (t & $e) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var r = n[s];
      if (On(
        /** @type {Derived} */
        r
      ) && zi(
        /** @type {Derived} */
        r
      ), r.wv > e.wv)
        return !0;
    }
    (t & Ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ye === null && de(e, ve);
  }
  return !1;
}
i(On, "is_dirty");
function sr(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Be !== null && Bt.call(Be, e)))
    for (var s = 0; s < a.length; s++) {
      var r = a[s];
      (r.f & me) !== 0 ? sr(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (n ? de(r, pe) : (r.f & ve) !== 0 && de(r, $e), Je(
        /** @type {Effect} */
        r
      ));
    }
}
i(sr, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Ne, n = De, a = Re, s = Z, r = Be, o = be, u = Qe, l = Ut, f = e.f;
  Ne = /** @type {null | Value[]} */
  null, De = 0, Re = null, Z = (f & (et | Gt)) === 0 ? e : null, Be = null, vn(e.ctx), Qe = !1, Ut = ++Ot, e.ac !== null && (na(() => {
    e.ac.abort($t);
  }), e.ac = null);
  try {
    e.f |= ma;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, g = re?.is_fork;
    if (Ne !== null) {
      var w;
      if (g || Kn(e, De), _ !== null && De > 0)
        for (_.length = De + Ne.length, w = 0; w < Ne.length; w++)
          _[De + w] = Ne[w];
      else
        e.deps = _ = Ne;
      if (Ua() && (e.f & Ue) !== 0)
        for (w = De; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !g && _ !== null && De < _.length && (Kn(e, De), _.length = De);
    if (Ai() && Re !== null && !Qe && _ !== null && (e.f & (me | $e | pe)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Re.length; w++)
        sr(
          Re[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ot++, s.deps !== null)
        for (let I = 0; I < n; I += 1)
          s.deps[I].rv = Ot;
      if (t !== null)
        for (const I of t)
          I.rv = Ot;
      Re !== null && (a === null ? a = Re : a.push(.../** @type {Source[]} */
      Re));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), v;
  } catch (I) {
    return Di(I);
  } finally {
    e.f ^= ma, Ne = t, De = n, Re = a, Z = s, Be = r, vn(o), Qe = u, Ut = l;
  }
}
i(Ia, "update_reaction");
function Os(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Ar.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Bt.call(Ne, t))) {
    var r = (
      /** @type {Derived} */
      t
    );
    (r.f & Ue) !== 0 && (r.f ^= Ue, r.f &= ~At), Pa(r), Ta(r), Kn(r, 0);
  }
}
i(Os, "remove_reaction");
function Kn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Os(e, n[a]);
}
i(Kn, "remove_reactions");
function Tn(e) {
  var t = e.f;
  if ((t & St) === 0) {
    de(e, ve);
    var n = ne, a = Un;
    if (ne = e, Un = !0, C) {
      var s = Wn;
      ti(e.component_function);
      var r = (
        /** @type {any} */
        Nn
      );
      qn(e.dev_stack ?? Nn);
    }
    try {
      (t & (mt | wi)) !== 0 ? Ws(e) : Xi(e), Qi(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ir;
      var u;
      C && Xr && (e.f & pe) !== 0 && e.deps;
    } finally {
      Un = a, ne = n, C && (ti(s), qn(r));
    }
  }
}
i(Tn, "update_effect");
async function Ls() {
  await Promise.resolve(), rs();
}
i(Ls, "tick");
function c(e) {
  var t = e.f, n = (t & me) !== 0;
  if (Z !== null && !Qe) {
    var a = ne !== null && (ne.f & St) !== 0;
    if (!a && (Be === null || !Bt.call(Be, e))) {
      var s = Z.deps;
      if ((Z.f & ma) !== 0)
        e.rv < Ot && (e.rv = Ot, Ne === null && s !== null && s[De] === e ? De++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        (Z.deps ??= []).push(e);
        var r = e.reactions;
        r === null ? e.reactions = [Z] : Bt.call(r, Z) || r.push(Z);
      }
    }
  }
  if (C && vs.delete(e), Vt && Tt.has(e))
    return Tt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Vt) {
      var u = o.v;
      return ((o.f & ve) === 0 && o.reactions !== null || lr(o)) && (u = Fa(o)), Tt.set(o, u), u;
    }
    var l = (o.f & Ue) === 0 && !Qe && Z !== null && (Un || (Z.f & Ue) !== 0), f = o.deps === null;
    On(o) && (l && (o.f |= Ue), zi(o)), l && !f && or(o);
  }
  if (Ye?.has(e))
    return Ye.get(e);
  if ((e.f & kt) !== 0)
    throw e.v;
  return e.v;
}
i(c, "get");
function or(e) {
  if (e.deps !== null) {
    e.f |= Ue;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & Ue) === 0 && or(
        /** @type {Derived} */
        t
      );
  }
}
i(or, "reconnect");
function lr(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & me) !== 0 && lr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
i(lr, "depends_on_old_values");
function cr(e) {
  var t = Qe;
  try {
    return Qe = !0, e();
  } finally {
    Qe = t;
  }
}
i(cr, "untrack");
const ur = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Hs(e, t, n, a = {}) {
  function s(r) {
    if (a.capture || En.call(t, r), !r.cancelBubble)
      return na(() => n?.call(this, r));
  }
  return i(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
i(Hs, "create_event");
function dt(e, t, n, a, s) {
  var r = { capture: a, passive: s }, o = Hs(e, t, n, r);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Gi(() => {
    t.removeEventListener(e, o, r);
  });
}
i(dt, "event");
function Ie(e) {
  for (var t = 0; t < e.length; t++)
    ur.add(e[t]);
  for (var n of Aa)
    n(e);
}
i(Ie, "delegate");
let li = null;
function En(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], r = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  li = e;
  var o = 0, u = li === e && e.__root;
  if (u) {
    var l = s.indexOf(u);
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
  if (r = /** @type {Element} */
  s[o] || e.target, r !== t) {
    qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || n;
      }
    });
    var d = Z, v = ne;
    qe(null), Xe(null);
    try {
      for (var _, g = []; r !== null; ) {
        var w = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var I = r["__" + a];
          I != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === r) && I.call(r, e);
        } catch (y) {
          _ ? g.push(y) : _ = y;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        r = w;
      }
      if (_) {
        for (let y of g)
          queueMicrotask(() => {
            throw y;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(d), Xe(v);
    }
  }
}
i(En, "handle_event_propagation");
function fr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
i(fr, "create_fragment_from_html");
function Vn(e, t) {
  var n = (
    /** @type {Effect} */
    ne
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
i(Vn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, r = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = fr(r ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Et(s)));
    var o = (
      /** @type {TemplateNode} */
      a || za ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Et(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Vn(u, l);
    } else
      Vn(o, o);
    return o;
  };
}
i(H, "from_html");
function va() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), Vn(t, n), e;
}
i(va, "comment");
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
i(O, "append");
const Ps = ["touchstart", "touchmove"];
function Rs(e) {
  return Ps.includes(e);
}
i(Rs, "is_passive_event");
function D(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
i(D, "set_text");
function Fs(e, t) {
  return js(e, t);
}
i(Fs, "mount");
const Xt = /* @__PURE__ */ new Map();
function js(e, { target: t, anchor: n, props: a = {}, events: s, context: r, intro: o = !0 }) {
  Ss();
  var u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ i((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var g = v[_];
      if (!u.has(g)) {
        u.add(g);
        var w = Rs(g);
        t.addEventListener(g, En, { passive: w });
        var I = Xt.get(g);
        I === void 0 ? (document.addEventListener(g, En, { passive: w }), Xt.set(g, 1)) : Xt.set(g, I + 1);
      }
    }
  }, "event_handle");
  l(Qn(ur)), Aa.add(l);
  var f = void 0, d = Cs(() => {
    var v = n ?? t.appendChild(It());
    return ls(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ i(() => {
        }, "pending")
      },
      (_) => {
        we({});
        var g = (
          /** @type {ComponentContext} */
          be
        );
        r && (g.c = r), s && (a.$$events = s), f = e(_, a) || {}, Ee();
      }
    ), () => {
      for (var _ of u) {
        t.removeEventListener(_, En);
        var g = (
          /** @type {number} */
          Xt.get(_)
        );
        --g === 0 ? (document.removeEventListener(_, En), Xt.delete(_)) : Xt.set(_, g);
      }
      Aa.delete(l), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Ca.set(f, d), f;
}
i(js, "_mount");
let Ca = /* @__PURE__ */ new WeakMap();
function zs(e, t) {
  const n = Ca.get(e);
  return n ? (Ca.delete(e), n(t)) : (C && (nn in e ? Jr() : Yr()), Promise.resolve());
}
i(zs, "unmount");
var Ge, lt, We, jt, Cn, Dn, Jn;
const Ga = class Ga {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, Ge, /* @__PURE__ */ new Map());
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
    q(this, lt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    q(this, We, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    q(this, jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, Cn, !0);
    q(this, Dn, /* @__PURE__ */ i(() => {
      var t = (
        /** @type {Batch} */
        re
      );
      if (m(this, Ge).has(t)) {
        var n = (
          /** @type {Key} */
          m(this, Ge).get(t)
        ), a = m(this, lt).get(n);
        if (a)
          qa(a), m(this, jt).delete(n);
        else {
          var s = m(this, We).get(n);
          s && (m(this, lt).set(n, s.effect), m(this, We).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [r, o] of m(this, Ge)) {
          if (m(this, Ge).delete(r), r === t)
            break;
          const u = m(this, We).get(o);
          u && (Te(u.effect), m(this, We).delete(o));
        }
        for (const [r, o] of m(this, lt)) {
          if (r === n || m(this, jt).has(r)) continue;
          const u = /* @__PURE__ */ i(() => {
            if (Array.from(m(this, Ge).values()).includes(r)) {
              var f = document.createDocumentFragment();
              nr(o, f), f.append(It()), m(this, We).set(r, { effect: o, fragment: f });
            } else
              Te(o);
            m(this, jt).delete(r), m(this, lt).delete(r);
          }, "on_destroy");
          m(this, Cn) || !a ? (m(this, jt).add(r), zt(o, u, !1)) : u();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    q(this, Jn, /* @__PURE__ */ i((t) => {
      m(this, Ge).delete(t);
      const n = Array.from(m(this, Ge).values());
      for (const [a, s] of m(this, We))
        n.includes(a) || (Te(s.effect), m(this, We).delete(a));
    }, "#discard"));
    this.anchor = t, K(this, Cn, n);
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
    ), s = Vi();
    if (n && !m(this, lt).has(t) && !m(this, We).has(t))
      if (s) {
        var r = document.createDocumentFragment(), o = It();
        r.append(o), m(this, We).set(t, {
          effect: ze(() => n(o)),
          fragment: r
        });
      } else
        m(this, lt).set(
          t,
          ze(() => n(this.anchor))
        );
    if (m(this, Ge).set(a, t), s) {
      for (const [u, l] of m(this, lt))
        u === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [u, l] of m(this, We))
        u === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(m(this, Dn)), a.ondiscard(m(this, Jn));
    } else
      m(this, Dn).call(this);
  }
};
Ge = new WeakMap(), lt = new WeakMap(), We = new WeakMap(), jt = new WeakMap(), Cn = new WeakMap(), Dn = new WeakMap(), Jn = new WeakMap(), i(Ga, "BranchManager");
let Da = Ga;
if (C) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ i(() => {
          if (n !== void 0)
            return n;
          Br(t);
        }, "get"),
        set: /* @__PURE__ */ i((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var bl = e;
  i(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function ee(e, t, n = !1) {
  var a = new Da(e), s = n ? dn : 0;
  function r(o, u) {
    a.ensure(o, u);
  }
  i(r, "update_branch"), Ba(() => {
    var o = !1;
    t((u, l = !0) => {
      o = !0, r(l, u);
    }), o || r(!1, null);
  }, s);
}
i(ee, "if_block");
function Ke(e, t) {
  return t;
}
i(Ke, "index");
function Us(e, t, n) {
  for (var a = [], s = t.length, r, o = t.length, u = 0; u < s; u++) {
    let v = t[u];
    zt(
      v,
      () => {
        if (r) {
          if (r.pending.delete(v), r.done.add(v), r.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Wa(Qn(r.done)), _.delete(r), _.size === 0 && (e.outrogroups = null);
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
      ), d = (
        /** @type {Element} */
        f.parentNode
      );
      ks(d), d.append(f), e.items.clear();
    }
    Wa(t, !l);
  } else
    r = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
}
i(Us, "pause_effects");
function Wa(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Te(e[n], t);
}
i(Wa, "destroy_effects");
var ci;
function Ve(e, t, n, a, s, r = null) {
  var o = e, u = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(It());
  }
  var d = null, v = /* @__PURE__ */ hs(() => {
    var M = n();
    return mi(M) ? M : M == null ? [] : Qn(M);
  }), _, g = !0;
  function w() {
    y.fallback = d, Bs(y, _, o, t, a), d !== null && (_.length === 0 ? (d.f & ht) === 0 ? qa(d) : (d.f ^= ht, Sn(d, null, o)) : zt(d, () => {
      d = null;
    }));
  }
  i(w, "commit");
  var I = Ba(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var M = _.length, oe = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      re
    ), W = Vi(), P = 0; P < M; P += 1) {
      var N = _[P], p = a(N, P), S = g ? null : u.get(p);
      S ? (S.v && bn(S.v, N), S.i && bn(S.i, P), W && E.unskip_effect(S.e)) : (S = qs(
        u,
        g ? o : ci ??= It(),
        N,
        p,
        P,
        s,
        t,
        n
      ), g || (S.e.f |= ht), u.set(p, S)), oe.add(p);
    }
    if (M === 0 && r && !d && (g ? d = ze(() => r(o)) : (d = ze(() => r(ci ??= It())), d.f |= ht)), M > oe.size && (C ? Ks(_, a) : ki("", "", "")), !g)
      if (W) {
        for (const [k, F] of u)
          oe.has(k) || E.skip_effect(F.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    c(v);
  }), y = { effect: I, items: u, outrogroups: null, fallback: d };
  g = !1;
}
i(Ve, "each");
function wn(e) {
  for (; e !== null && (e.f & et) === 0; )
    e = e.next;
  return e;
}
i(wn, "skip_to_branch");
function Bs(e, t, n, a, s) {
  var r = (a & 8) !== 0, o = t.length, u = e.items, l = wn(e.effect.first), f, d = null, v, _ = [], g = [], w, I, y, M;
  if (r)
    for (M = 0; M < o; M += 1)
      w = t[M], I = s(w, M), y = /** @type {EachItem} */
      u.get(I).e, (y.f & ht) === 0 && (y.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(y));
  for (M = 0; M < o; M += 1) {
    if (w = t[M], I = s(w, M), y = /** @type {EachItem} */
    u.get(I).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(y), F.done.delete(y);
    if ((y.f & ht) !== 0)
      if (y.f ^= ht, y === l)
        Sn(y, null, n);
      else {
        var oe = d ? d.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), gt(e, d, y), gt(e, y, oe), Sn(y, oe, n), d = y, _ = [], g = [], l = wn(d.next);
        continue;
      }
    if ((y.f & Le) !== 0 && (qa(y), r && (y.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (_.length < g.length) {
          var E = g[0], W;
          d = E.prev;
          var P = _[0], N = _[_.length - 1];
          for (W = 0; W < _.length; W += 1)
            Sn(_[W], E, n);
          for (W = 0; W < g.length; W += 1)
            f.delete(g[W]);
          gt(e, P.prev, N.next), gt(e, d, P), gt(e, N, E), l = E, d = N, M -= 1, _ = [], g = [];
        } else
          f.delete(y), Sn(y, l, n), gt(e, y.prev, y.next), gt(e, y, d === null ? e.effect.first : d.next), gt(e, d, y), d = y;
        continue;
      }
      for (_ = [], g = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = wn(l.next);
      if (l === null)
        continue;
    }
    (y.f & ht) === 0 && _.push(y), d = y, l = wn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (Wa(Qn(F.done)), e.outrogroups?.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var p = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Le) === 0 && p.push(y);
    for (; l !== null; )
      (l.f & Le) === 0 && l !== e.fallback && p.push(l), l = wn(l.next);
    var S = p.length;
    if (S > 0) {
      var k = (a & 4) !== 0 && o === 0 ? n : null;
      if (r) {
        for (M = 0; M < S; M += 1)
          p[M].nodes?.a?.measure();
        for (M = 0; M < S; M += 1)
          p[M].nodes?.a?.fix();
      }
      Us(e, p, k);
    }
  }
  r && xt(() => {
    if (v !== void 0)
      for (y of v)
        y.nodes?.a?.apply();
  });
}
i(Bs, "reconcile");
function qs(e, t, n, a, s, r, o, u) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ps(n, !1, !1) : Kt(n) : null, f = (o & 2) !== 0 ? Kt(s) : null;
  return C && l && (l.trace = () => {
    u()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: ze(() => (r(t, l ?? n, f ?? s, u), () => {
      e.delete(a);
    }))
  };
}
i(qs, "create_item");
function Sn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, r = t && (t.f & ht) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mn(a)
      );
      if (r.before(a), a === s)
        return;
      a = o;
    }
}
i(Sn, "move");
function gt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
i(gt, "link");
function Ks(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const r = t(e[s], s);
    if (n.has(r)) {
      const o = String(n.get(r)), u = String(s);
      let l = String(r);
      l.startsWith("[object ") && (l = null), ki(o, u, l);
    }
    n.set(r, s);
  }
}
i(Ks, "validate_each_keys");
function Vs(e, t, n = !1, a = !1, s = !1) {
  var r = e, o = "";
  V(() => {
    var u = (
      /** @type {Effect} */
      ne
    );
    if (o !== (o = t() ?? "") && (u.nodes !== null && (Zi(
      u.nodes.start,
      /** @type {TemplateNode} */
      u.nodes.end
    ), u.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = fr(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ Et(f)), Vn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Et(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ Et(f); )
          r.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Et(f)
          );
      else
        r.before(f);
    }
  });
}
i(Vs, "html");
const fi = [...` 	
\r\f \v\uFEFF`];
function Gs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var r = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var u = o + r;
          (o === 0 || fi.includes(a[o - 1])) && (u === a.length || fi.includes(a[u])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(u + 1) : o = u;
        }
  }
  return a === "" ? null : a;
}
i(Gs, "to_class");
function Ys(e, t) {
  return e == null ? null : String(e);
}
i(Ys, "to_style");
function Ze(e, t, n, a, s, r) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var u = Gs(n, a, r);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = n;
  } else if (r && s !== r)
    for (var l in r) {
      var f = !!r[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return r;
}
i(Ze, "set_class");
function Fn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var r = Ys(t);
    r == null ? e.removeAttribute("style") : e.style.cssText = r, e.__style = t;
  }
  return a;
}
i(Fn, "set_style");
const Js = /* @__PURE__ */ Symbol("is custom element"), Qs = /* @__PURE__ */ Symbol("is html");
function ct(e, t) {
  var n = dr(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
i(ct, "set_value");
function T(e, t, n, a) {
  var s = dr(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Lr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
i(T, "set_attribute");
function dr(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Js]: e.nodeName.includes("-"),
      [Qs]: e.namespaceURI === Ir
    }
  );
}
i(dr, "get_attributes");
var di = /* @__PURE__ */ new Map();
function Xs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = di.get(t);
  if (n) return n;
  di.set(t, n = []);
  for (var a, s = e, r = Element.prototype; r !== s; ) {
    a = Cr(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = pi(s);
  }
  return n;
}
i(Xs, "get_setters");
function vr(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Ns(e, "input", async (s) => {
    C && e.type === "checkbox" && ei();
    var r = s ? e.defaultValue : e.value;
    if (r = _a(e) ? ha(r) : r, n(r), re !== null && a.add(re), await Ls(), r !== (r = t())) {
      var o = e.selectionStart, u = e.selectionEnd, l = e.value.length;
      if (e.value = r ?? "", u !== null) {
        var f = e.value.length;
        o === u && u === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(u, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  cr(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), re !== null && a.add(re)), Ji(() => {
    C && e.type === "checkbox" && ei();
    var s = t();
    if (e === document.activeElement) {
      var r = (
        /** @type {Batch} */
        ga ?? re
      );
      if (a.has(r))
        return;
    }
    _a(e) && s === ha(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
i(vr, "bind_value");
function _a(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
i(_a, "is_numberlike_input");
function ha(e) {
  return e === "" ? null : +e;
}
i(ha, "to_number");
const Zt = [];
function Zs(e, t) {
  return {
    subscribe: $s(e, t).subscribe
  };
}
i(Zs, "readable");
function $s(e, t = ca) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(u) {
    if (Ni(e, u) && (e = u, n)) {
      const l = !Zt.length;
      for (const f of a)
        f[1](), Zt.push(f, e);
      if (l) {
        for (let f = 0; f < Zt.length; f += 2)
          Zt[f][0](Zt[f + 1]);
        Zt.length = 0;
      }
    }
  }
  i(s, "set");
  function r(u) {
    s(u(
      /** @type {T} */
      e
    ));
  }
  i(r, "update");
  function o(u, l = ca) {
    const f = [u, l];
    return a.add(f), a.size === 1 && (n = t(s, r) || ca), u(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return i(o, "subscribe"), { set: s, update: r, subscribe: o };
}
i($s, "writable");
function eo(e) {
  var n, a, s;
  const r = class r extends e {
    constructor() {
      super(...arguments);
      q(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: v } = d;
          return v && l.push(v.toUpperCase()), l;
        },
        []
      ));
      q(this, a, /* @__PURE__ */ Me(en({})));
      q(this, s, {});
    }
    get $state() {
      return c(m(this, a));
    }
    set $state(l) {
      Oe(m(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && K(this, s, Fs(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), zs(m(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: d } = f;
      if (!d) return;
      const v = d;
      if (!m(this, n).includes(v.tagName)) return;
      const _ = v._getValue();
      this.document.update({ [v.name]: _ });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), i(r, "SvelteApplication"), Pe(r, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = r;
  return t;
}
i(eo, "SvelteApplicationMixin");
const to = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(to);
function x(e) {
  return game.i18n?.localize(e) ?? e;
}
i(x, "localize");
function mn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
i(mn, "format");
var no = /* @__PURE__ */ H("<span> </span>"), ao = /* @__PURE__ */ H('<span style="color: var(--nos-text-secondary, #888)">—</span>'), io = /* @__PURE__ */ H('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function ro(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ U(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ i((k) => t.actor.update({ img: k }), "callback")
    }).render(!0);
  }
  i(a, "pickPortrait");
  let s = /* @__PURE__ */ U(() => {
    const k = Object.keys(t.hitDiceData.bySize);
    return k.length === 0 ? "—" : k.length === 1 ? `d${k[0]}` : k.map((F) => `d${F}`).join("/");
  });
  var r = io(), o = h(r);
  o.__click = a;
  var u = h(o), l = b(o, 2), f = h(l), d = h(f), v = b(f, 2);
  v.__change = ({ target: k }) => t.actor.update({ name: k.value });
  var _ = b(l, 2), g = h(_), w = h(g), I = b(g, 2), y = h(I);
  {
    var M = /* @__PURE__ */ i((k) => {
      var F = no(), te = h(F);
      V(() => D(te, t.metaData)), O(k, F);
    }, "consequent"), oe = /* @__PURE__ */ i((k) => {
      var F = ao();
      O(k, F);
    }, "alternate");
    ee(y, (k) => {
      t.metaData ? k(M) : k(oe, !1);
    });
  }
  var E = b(y, 2);
  E.__click = () => t.actor.editMetadata();
  var W = b(_, 2), P = h(W), N = h(P), p = b(P, 2), S = h(p);
  V(
    (k, F, te, z, L) => {
      T(u, "src", c(n)), T(u, "alt", t.actor.reactive.name), D(d, k), ct(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, D(w, F), T(E, "aria-label", te), T(E, "data-tooltip", z), E.disabled = !t.editingEnabled, D(N, L), D(S, c(s));
    },
    [
      () => x("NWS.CharacterName"),
      () => x("NWS.AncestryClassLevel"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.HitDie")
    ]
  ), O(e, r), Ee();
}
i(ro, "HeaderRow");
Ie(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
i(Ka, "formatModifier");
var so = /* @__PURE__ */ H('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function oo(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ U(() => x(n[t.abilityKey])), s = /* @__PURE__ */ U(() => mn("NWS.RollCheck", { name: c(a) })), r = /* @__PURE__ */ U(() => mn("NWS.RollSave", { name: c(a) }));
  var o = so(), u = h(o);
  let l;
  u.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = b(u, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), v = h(d), _ = b(f, 2), g = h(_);
  V(
    (w) => {
      l = Ze(u, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), T(u, "data-tooltip", c(r)), T(u, "aria-label", c(r)), T(f, "data-tooltip", c(s)), T(f, "aria-label", c(s)), D(v, w), D(g, c(a));
    },
    [() => Ka(t.ability.mod)]
  ), O(e, o), Ee();
}
i(oo, "AbilityBox");
Ie(["click"]);
var lo = /* @__PURE__ */ H('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), co = /* @__PURE__ */ H('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function uo(e, t) {
  we(t, !0);
  var n = co(), a = h(n), s = h(a), r = b(a, 2);
  Ve(r, 21, () => ({ length: t.wounds.max }), Ke, (o, u, l) => {
    var f = lo();
    let d;
    f.__click = () => t.toggleWounds(l + 1), V(
      (v, _) => {
        d = Ze(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), T(f, "data-tooltip", v), T(f, "aria-label", _);
      },
      [
        () => mn("NWS.ToggleWound", { n: l + 1 }),
        () => mn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), V((o) => D(s, o), [() => x("NWS.Wounds")]), O(e, n), Ee();
}
i(uo, "WoundTracker");
Ie(["click"]);
var fo = /* @__PURE__ */ H('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), vo = /* @__PURE__ */ H('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), _o = /* @__PURE__ */ H('<i class="fa-solid fa-heart"></i>'), ho = /* @__PURE__ */ H('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function bo(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ U(() => t.actor.reactive.system.attributes.hp), r = /* @__PURE__ */ U(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ U(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ U(() => t.actor.reactive.system.attributes.movement);
  var l = ho(), f = h(l), d = h(f);
  Ve(d, 17, () => n, Ke, (fe, He) => {
    oo(fe, {
      get abilityKey() {
        return c(He);
      },
      get ability() {
        return t.actor.reactive.system.abilities[c(He)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[c(He)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var v = b(d, 2);
  {
    var _ = /* @__PURE__ */ i((fe) => {
      var He = fo(), yn = bt(He);
      yn.__click = () => t.actor.configureSavingThrows();
      var Hn = b(yn, 2);
      Hn.__click = () => t.actor.configureAbilityScores(), V(
        (sa, oa) => {
          T(yn, "data-tooltip", sa), T(Hn, "data-tooltip", oa);
        },
        [
          () => x("NWS.ConfigureSavingThrows"),
          () => x("NWS.ConfigureAbilityScores")
        ]
      ), O(fe, He);
    }, "consequent");
    ee(v, (fe) => {
      t.editingEnabled && fe(_);
    });
  }
  var g = b(f, 2), w = h(g), I = h(w), y = h(I), M = b(h(y), 2), oe = h(M), E = b(M, 2), W = h(E), P = b(y, 2), N = b(h(P), 2), p = h(N), S = b(N, 2);
  S.__change = ({ target: fe }) => t.updateTempHP(Number(fe.value));
  var k = b(I, 2);
  let F;
  var te = h(k), z = h(te), L = h(z);
  {
    var G = /* @__PURE__ */ i((fe) => {
      var He = vo();
      O(fe, He);
    }, "consequent_1"), B = /* @__PURE__ */ i((fe) => {
      var He = _o();
      O(fe, He);
    }, "alternate");
    ee(L, (fe) => {
      t.isBloodied ? fe(G) : fe(B, !1);
    });
  }
  var $ = b(z, 2), Q = h($), se = b($, 2), Y = h(se);
  Y.__change = ({ target: fe }) => t.updateCurrentHP(Number(fe.value));
  var X = b(Y, 4), le = h(X), ce = b(se, 2);
  ce.__click = () => t.actor.configureHitPoints();
  var ae = b(te, 2), A = h(ae), R = h(A), j = b(A, 2), ie = h(j), J = b(j, 2), Ae = h(J);
  Ae.__change = ({ target: fe }) => t.updateCurrentMana(Number(fe.value));
  var Yt = b(Ae, 4), ge = h(Yt), pt = b(J, 2);
  pt.__click = () => t.actor.configureMana();
  var ue = b(k, 2);
  ue.__click = () => t.rollHitDice();
  var Se = b(h(ue), 2), tt = h(Se), Ce = b(Se, 2), Jt = h(Ce), Dt = b(Ce, 2);
  Dt.__click = (fe) => {
    fe.stopPropagation(), t.actor.configureHitDice();
  };
  var gn = b(ue, 2), Qt = h(gn);
  Qt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Ln = b(h(Qt), 2), aa = h(Ln), ia = b(Ln, 2), _r = h(ia), hr = b(Qt, 2), Ya = b(h(hr), 2), br = h(Ya), Ja = b(Ya, 2), mr = h(Ja), ra = b(Ja, 2);
  ra.__click = () => t.actor.configureMovement();
  var pr = b(g, 2);
  uo(pr, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), V(
    (fe, He, yn, Hn, sa, oa, gr, yr, wr, Er, Sr, kr, xr) => {
      D(oe, fe), D(W, c(r).value), D(p, He), ct(S, c(s).temp ?? 0), F = Ze(k, 1, "nos-combat__pair", null, F, { "nos-hp--bloodied": t.isBloodied }), D(Q, yn), ct(Y, c(s).value), D(le, c(s).max), T(ce, "data-tooltip", Hn), ce.disabled = !t.editingEnabled, Fn(R, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Fn(j, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(ie, sa), ct(Ae, t.mana?.current ?? 0), Fn(Ae, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Fn(Yt, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(ge, t.mana?.max || t.mana?.baseMax || 0), T(pt, "data-tooltip", oa), pt.disabled = !t.editingEnabled, D(tt, gr), D(Jt, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), T(Dt, "data-tooltip", yr), Dt.disabled = !t.editingEnabled, T(Qt, "data-tooltip", wr), D(aa, Er), D(_r, Sr), D(br, kr), D(mr, c(u).walk), T(ra, "data-tooltip", xr), ra.disabled = !t.editingEnabled;
    },
    [
      () => x("NWS.Armor"),
      () => x("NWS.TempHP"),
      () => x("NWS.HitPoints"),
      () => x("NWS.ConfigureHitPoints"),
      () => x("NWS.Mana"),
      () => x("NWS.ConfigureMana"),
      () => x("NWS.HitDice"),
      () => x("NWS.ConfigureHitDice"),
      () => x("NWS.RollInitiative"),
      () => x("NWS.Initiative"),
      () => Ka(c(o).mod),
      () => x("NWS.Speed"),
      () => x("NWS.ConfigureMovement")
    ]
  ), O(e, l), Ee();
}
i(bo, "StatsRow");
Ie(["click", "change"]);
var mo = /* @__PURE__ */ H('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function po(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let r = /* @__PURE__ */ U(() => n[t.skillKey]), o = /* @__PURE__ */ U(() => x(a[c(r)])), u = /* @__PURE__ */ U(() => x(s[t.skillKey]));
  var l = mo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = b(f, 2), _ = h(v), g = b(v, 2), w = h(g);
  V(
    (I, y) => {
      T(l, "data-tooltip", I), D(d, c(o)), D(_, y), D(w, c(u));
    },
    [
      () => mn("NWS.RollSkill", { name: c(u) }),
      () => Ka(t.skill.mod)
    ]
  ), O(e, l), Ee();
}
i(po, "SkillCell");
Ie(["click"]);
var go = /* @__PURE__ */ H('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), yo = /* @__PURE__ */ H('<section class="nos-skills-row"><!> <!></section>');
function wo(e, t) {
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
  var a = yo(), s = h(a);
  Ve(s, 17, () => n, Ke, (u, l) => {
    po(u, {
      get skillKey() {
        return c(l);
      },
      get skill() {
        return t.actor.reactive.system.skills[c(l)];
      },
      get actor() {
        return t.actor;
      }
    });
  });
  var r = b(s, 2);
  {
    var o = /* @__PURE__ */ i((u) => {
      var l = go();
      l.__click = () => t.actor.configureSkills(), V((f) => T(l, "data-tooltip", f), [() => x("NWS.ConfigureSkills")]), O(u, l);
    }, "consequent");
    ee(r, (u) => {
      t.editingEnabled && u(o);
    });
  }
  O(e, a), Ee();
}
i(wo, "SkillsRow");
Ie(["click"]);
var Eo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), So = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), ko = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), No = /* @__PURE__ */ H('<div class="nos-feature-row"><!> <!></div>'), To = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Ao = /* @__PURE__ */ H('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Co = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Do = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Wo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Mo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Oo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Lo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ho = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Po = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ro = /* @__PURE__ */ H("<!> <!> <!> <!> <!>", 1);
function vi(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ U(() => t.actor.reactive.items.filter((p) => p.type === "feature")), a = /* @__PURE__ */ U(() => t.actor.reactive.items.filter((p) => p.type === "boon")), s = /* @__PURE__ */ U(() => t.actor.reactive.items.find((p) => p.type === "ancestry") ?? null), r = /* @__PURE__ */ U(() => t.actor.reactive.items.find((p) => p.type === "background") ?? null), o = /* @__PURE__ */ U(() => t.actor.reactive.items.find((p) => p.type === "class") ?? null), u = /* @__PURE__ */ U(() => t.actor.reactive.items.find((p) => p.type === "subclass") ?? null);
  function l(p) {
    t.actor.activateItem(p);
  }
  i(l, "useItem");
  function f(p) {
    t.actor.items.get(p)?.sheet?.render(!0);
  }
  i(f, "configureItem");
  function d(p) {
    t.actor.deleteEmbeddedDocuments("Item", [p]);
  }
  i(d, "deleteItem");
  function v(p, S) {
    const k = { type: "Item", uuid: S.uuid };
    p.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  i(v, "onDragStart");
  var _ = Ro(), g = bt(_);
  {
    var w = /* @__PURE__ */ i((p) => {
      var S = No(), k = h(S);
      {
        var F = /* @__PURE__ */ i((L) => {
          var G = So(), B = h(G), $ = h(B), Q = b(B, 2), se = h(Q), Y = b(se, 2);
          Y.__click = () => f(c(s).id);
          var X = h(Y), le = b(Y, 2);
          {
            var ce = /* @__PURE__ */ i((ae) => {
              var A = Eo(), R = h(A);
              R.__click = () => f(c(s).id);
              var j = b(R, 2);
              j.__click = () => d(c(s).id), O(ae, A);
            }, "consequent");
            ee(le, (ae) => {
              t.editingEnabled && ae(ce);
            });
          }
          V(
            (ae) => {
              D($, ae), T(Q, "data-tooltip", c(s).system?.description || ""), T(se, "src", c(s).img), T(se, "alt", c(s).name), D(X, c(s).name);
            },
            [() => x("NWS.Ancestry")]
          ), dt("dragstart", Q, (ae) => v(ae, c(s))), O(L, G);
        }, "consequent_1");
        ee(k, (L) => {
          c(s) && L(F);
        });
      }
      var te = b(k, 2);
      {
        var z = /* @__PURE__ */ i((L) => {
          var G = xo(), B = h(G), $ = h(B), Q = b(B, 2), se = h(Q), Y = b(se, 2);
          Y.__click = () => f(c(r).id);
          var X = h(Y), le = b(Y, 2);
          {
            var ce = /* @__PURE__ */ i((ae) => {
              var A = ko(), R = h(A);
              R.__click = () => f(c(r).id);
              var j = b(R, 2);
              j.__click = () => d(c(r).id), O(ae, A);
            }, "consequent_2");
            ee(le, (ae) => {
              t.editingEnabled && ae(ce);
            });
          }
          V(
            (ae) => {
              D($, ae), T(Q, "data-tooltip", c(r).system?.description || ""), T(se, "src", c(r).img), T(se, "alt", c(r).name), D(X, c(r).name);
            },
            [() => x("NWS.Background")]
          ), dt("dragstart", Q, (ae) => v(ae, c(r))), O(L, G);
        }, "consequent_3");
        ee(te, (L) => {
          c(r) && L(z);
        });
      }
      O(p, S);
    }, "consequent_4");
    ee(g, (p) => {
      (c(s) || c(r)) && p(w);
    });
  }
  var I = b(g, 2);
  {
    var y = /* @__PURE__ */ i((p) => {
      var S = Co(), k = h(S), F = h(k), te = b(k, 2), z = h(te), L = b(z, 2);
      L.__click = () => f(c(o).id);
      var G = h(L), B = b(L, 2);
      {
        var $ = /* @__PURE__ */ i((Y) => {
          var X = To(), le = h(X);
          le.__click = () => f(c(o).id);
          var ce = b(le, 2);
          ce.__click = () => d(c(o).id), O(Y, X);
        }, "consequent_5");
        ee(B, (Y) => {
          t.editingEnabled && Y($);
        });
      }
      var Q = b(te, 2);
      {
        var se = /* @__PURE__ */ i((Y) => {
          var X = Ao(), le = h(X), ce = b(le, 2);
          ce.__click = () => f(c(u).id);
          var ae = h(ce), A = b(ce, 2);
          {
            var R = /* @__PURE__ */ i((j) => {
              var ie = Io(), J = h(ie);
              J.__click = () => f(c(u).id);
              var Ae = b(J, 2);
              Ae.__click = () => d(c(u).id), O(j, ie);
            }, "consequent_6");
            ee(A, (j) => {
              t.editingEnabled && j(R);
            });
          }
          V(() => {
            T(le, "src", c(u).img), T(le, "alt", c(u).name), D(ae, c(u).name);
          }), dt("dragstart", X, (j) => v(j, c(u))), O(Y, X);
        }, "consequent_7");
        ee(Q, (Y) => {
          c(u) && Y(se);
        });
      }
      V(
        (Y, X) => {
          D(F, Y), T(z, "src", c(o).img), T(z, "alt", c(o).name), D(G, `${c(o).name ?? ""} (${X ?? ""} ${c(o).system.classLevel ?? ""})`);
        },
        [() => x("NWS.Class"), () => x("NWS.Level")]
      ), dt("dragstart", te, (Y) => v(Y, c(o))), O(p, S);
    }, "consequent_8");
    ee(I, (p) => {
      c(o) && p(y);
    });
  }
  var M = b(I, 2);
  {
    var oe = /* @__PURE__ */ i((p) => {
      var S = Mo(), k = h(S), F = h(k), te = b(k, 2);
      Ve(te, 21, () => c(n), Ke, (z, L) => {
        var G = Wo(), B = h(G), $ = b(B, 2);
        $.__click = () => l(c(L).id);
        var Q = h($), se = b($, 2);
        {
          var Y = /* @__PURE__ */ i((X) => {
            var le = Do(), ce = h(le);
            ce.__click = () => f(c(L).id);
            var ae = b(ce, 2);
            ae.__click = () => d(c(L).id), O(X, le);
          }, "consequent_9");
          ee(se, (X) => {
            t.editingEnabled && X(Y);
          });
        }
        V(() => {
          T(G, "data-tooltip", c(L).system?.description || ""), T(B, "src", c(L).img), T(B, "alt", c(L).name), D(Q, c(L).name);
        }), dt("dragstart", G, (X) => v(X, c(L))), O(z, G);
      }), V((z) => D(F, z), [() => x("NWS.Features")]), O(p, S);
    }, "consequent_10");
    ee(M, (p) => {
      c(n).length > 0 && p(oe);
    });
  }
  var E = b(M, 2);
  {
    var W = /* @__PURE__ */ i((p) => {
      var S = Ho(), k = h(S), F = h(k), te = b(k, 2);
      Ve(te, 21, () => c(a), Ke, (z, L) => {
        var G = Lo(), B = h(G), $ = b(B, 2);
        $.__click = () => l(c(L).id);
        var Q = h($), se = b($, 2);
        {
          var Y = /* @__PURE__ */ i((X) => {
            var le = Oo(), ce = h(le);
            ce.__click = () => f(c(L).id);
            var ae = b(ce, 2);
            ae.__click = () => d(c(L).id), O(X, le);
          }, "consequent_11");
          ee(se, (X) => {
            t.editingEnabled && X(Y);
          });
        }
        V(() => {
          T(G, "data-tooltip", c(L).system?.description || ""), T(B, "src", c(L).img), T(B, "alt", c(L).name), D(Q, c(L).name);
        }), dt("dragstart", G, (X) => v(X, c(L))), O(z, G);
      }), V((z) => D(F, z), [() => x("NWS.Boons")]), O(p, S);
    }, "consequent_12");
    ee(E, (p) => {
      c(a).length > 0 && p(W);
    });
  }
  var P = b(E, 2);
  {
    var N = /* @__PURE__ */ i((p) => {
      var S = Po(), k = h(S);
      V((F) => D(k, F), [() => x("NWS.DropFeaturesHere")]), O(p, S);
    }, "consequent_13");
    ee(P, (p) => {
      !c(s) && !c(r) && !c(o) && c(n).length === 0 && c(a).length === 0 && p(N);
    });
  }
  O(e, _), Ee();
}
i(vi, "FeaturesTab");
Ie(["click"]);
var Fo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), jo = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), zo = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Uo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Bo = /* @__PURE__ */ H('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), qo = /* @__PURE__ */ H('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Ko = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Vo = /* @__PURE__ */ H('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function _i(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Me(""), a = /* @__PURE__ */ U(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, W) => E.name.localeCompare(W.name))), s = /* @__PURE__ */ U(() => c(n) ? c(a).filter((E) => E.name.toLowerCase().includes(c(n).toLowerCase())) : c(a)), r = /* @__PURE__ */ U(() => {
    const E = {};
    for (const W of c(s)) {
      const P = W.system?.tier ?? 0, N = W.system?.isUtility ?? !1, p = N ? "_utility" : `_tier_${P}`, S = N ? x("NWS.Utility") : mn("NWS.Tier", { n: P });
      E[p] ??= { label: S, spells: [] }, E[p].spells.push(W);
    }
    return Object.entries(E).sort(([W], [P]) => {
      if (W === "_utility") return 1;
      if (P === "_utility") return -1;
      const N = parseInt(W.replace("_tier_", "")), p = parseInt(P.replace("_tier_", ""));
      return N - p;
    });
  });
  function o(E) {
    t.actor.items.get(E)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  function u(E) {
    t.actor.deleteEmbeddedDocuments("Item", [E]);
  }
  i(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  i(l, "createSpell");
  function f(E) {
    t.actor.activateItem(E);
  }
  i(f, "castSpell");
  function d(E, W) {
    const P = { type: "Item", uuid: W.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(P));
  }
  i(d, "onDragStart");
  var v = Vo(), _ = bt(v), g = b(h(_), 2), w = b(g, 2);
  {
    var I = /* @__PURE__ */ i((E) => {
      var W = Fo();
      W.__click = l;
      var P = b(h(W));
      V((N) => D(P, ` ${N ?? ""}`), [() => x("NWS.New")]), O(E, W);
    }, "consequent");
    ee(w, (E) => {
      t.editingEnabled && E(I);
    });
  }
  var y = b(_, 2);
  Ve(y, 17, () => c(r), Ke, (E, W) => {
    var P = /* @__PURE__ */ U(() => yi(c(W), 2));
    let N = /* @__PURE__ */ i(() => c(P)[1], "tier");
    var p = qo(), S = h(p), k = h(S), F = b(S, 2);
    Ve(F, 21, () => N().spells, Ke, (te, z) => {
      var L = Bo(), G = h(L), B = b(G, 2);
      B.__click = () => f(c(z).id);
      var $ = h(B), Q = b($);
      {
        var se = /* @__PURE__ */ i((R) => {
          var j = jo();
          V((ie) => T(j, "data-tooltip", ie), [() => x("NWS.Concentration")]), O(R, j);
        }, "consequent_1");
        ee(Q, (R) => {
          c(z).system?.concentration && R(se);
        });
      }
      var Y = b(Q, 2);
      {
        var X = /* @__PURE__ */ i((R) => {
          var j = zo();
          V((ie) => T(j, "data-tooltip", ie), [() => x("NWS.Utility")]), O(R, j);
        }, "consequent_2");
        ee(Y, (R) => {
          c(z).system?.isUtility && R(X);
        });
      }
      var le = b(B, 2), ce = h(le), ae = b(le, 2);
      {
        var A = /* @__PURE__ */ i((R) => {
          var j = Uo(), ie = h(j);
          ie.__click = () => o(c(z).id);
          var J = b(ie, 2);
          J.__click = () => u(c(z).id), O(R, j);
        }, "consequent_3");
        ee(ae, (R) => {
          t.editingEnabled && R(A);
        });
      }
      V(() => {
        T(L, "data-tooltip", c(z).system?.description?.baseEffect || ""), T(G, "src", c(z).img), T(G, "alt", c(z).name), D($, `${c(z).name ?? ""} `), D(ce, c(z).system?.activationCost ?? "");
      }), dt("dragstart", L, (R) => d(R, c(z))), O(te, L);
    }), V(() => D(k, N().label)), O(E, p);
  });
  var M = b(y, 2);
  {
    var oe = /* @__PURE__ */ i((E) => {
      var W = Ko(), P = h(W);
      V((N) => D(P, N), [() => x("NWS.DropSpellsHere")]), O(E, W);
    }, "consequent_4");
    ee(M, (E) => {
      c(a).length === 0 && E(oe);
    });
  }
  V((E) => T(g, "placeholder", E), [() => x("NWS.SearchSpells")]), vr(g, () => c(n), (E) => Oe(n, E)), O(e, v), Ee();
}
i(_i, "SpellsTab");
Ie(["click"]);
var Go = /* @__PURE__ */ H('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), Yo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Jo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Qo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Xo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Zo = /* @__PURE__ */ H('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function hi(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Me(""), a = /* @__PURE__ */ U(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ U(() => t.actor.reactive.items.filter((N) => N.type === "object").sort((N, p) => (N.sort ?? 0) - (p.sort ?? 0))), r = /* @__PURE__ */ U(() => c(n) ? c(s).filter((N) => N.name.toLowerCase().includes(c(n).toLowerCase())) : c(s));
  function o(N) {
    t.actor.items.get(N)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  function u(N) {
    t.actor.deleteEmbeddedDocuments("Item", [N]);
  }
  i(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  i(l, "createObject");
  function f(N, p) {
    t.actor.update({
      [`system.currency.${N}.value`]: Math.max(0, Math.round(Number(p)))
    });
  }
  i(f, "updateCurrency");
  function d(N, p) {
    const S = c(a)[N]?.value ?? 0;
    t.actor.update({
      [`system.currency.${N}.value`]: Math.max(0, S + p)
    });
  }
  i(d, "adjustCurrency");
  function v(N, p) {
    t.actor.items.get(N)?.update({ "system.quantity": Number(p) });
  }
  i(v, "updateQuantity");
  function _(N, p) {
    const S = { type: "Item", uuid: p.uuid };
    N.dataTransfer.setData("text/plain", JSON.stringify(S));
  }
  i(_, "onDragStart");
  var g = Zo(), w = bt(g);
  Ve(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ke, (N, p) => {
    var S = /* @__PURE__ */ U(() => yi(p, 2));
    let k = /* @__PURE__ */ i(() => c(S)[0], "type"), F = /* @__PURE__ */ i(() => c(S)[1], "labelKey");
    var te = Go(), z = h(te), L = h(z), G = b(z, 2);
    G.__click = () => d(k(), -1);
    var B = b(G, 2);
    B.__change = ({ target: Q }) => f(k(), Q.value);
    var $ = b(B, 2);
    $.__click = () => d(k(), 1), V(
      (Q, se, Y) => {
        T(z, "for", `currency-${k() ?? ""}`), D(L, Q), T(G, "aria-label", `-1 ${se ?? ""}`), T(B, "id", `currency-${k() ?? ""}`), ct(B, c(a)[k()]?.value ?? 0), T($, "aria-label", `+1 ${Y ?? ""}`);
      },
      [
        () => x(F()),
        () => x(F()),
        () => x(F())
      ]
    ), O(N, te);
  });
  var I = b(w, 2), y = b(h(I), 2), M = b(y, 2);
  {
    var oe = /* @__PURE__ */ i((N) => {
      var p = Yo();
      p.__click = l;
      var S = b(h(p));
      V((k) => D(S, ` ${k ?? ""}`), [() => x("NWS.New")]), O(N, p);
    }, "consequent");
    ee(M, (N) => {
      t.editingEnabled && N(oe);
    });
  }
  var E = b(I, 2);
  Ve(E, 21, () => c(r), Ke, (N, p) => {
    var S = Qo(), k = h(S), F = b(k, 2);
    F.__click = () => o(c(p).id);
    var te = h(F), z = b(F, 2);
    z.__change = ({ target: B }) => v(c(p).id, B.value);
    var L = b(z, 2);
    {
      var G = /* @__PURE__ */ i((B) => {
        var $ = Jo(), Q = h($);
        Q.__click = () => o(c(p).id);
        var se = b(Q, 2);
        se.__click = () => u(c(p).id), O(B, $);
      }, "consequent_1");
      ee(L, (B) => {
        t.editingEnabled && B(G);
      });
    }
    V(() => {
      T(S, "data-tooltip", c(p).system?.description?.public || ""), T(k, "src", c(p).img), T(k, "alt", c(p).name), D(te, c(p).name), ct(z, c(p).system?.quantity ?? 1);
    }), dt("dragstart", S, (B) => _(B, c(p))), O(N, S);
  });
  var W = b(E, 2);
  {
    var P = /* @__PURE__ */ i((N) => {
      var p = Xo(), S = h(p);
      V((k) => D(S, k), [() => x("NWS.DropInventoryHere")]), O(N, p);
    }, "consequent_2");
    ee(W, (N) => {
      c(s).length === 0 && N(P);
    });
  }
  V((N) => T(y, "placeholder", N), [() => x("NWS.SearchItems")]), vr(y, () => c(n), (N) => Oe(n, N)), O(e, g), Ee();
}
i(hi, "InventoryTab");
Ie(["click", "change"]);
var $o = /* @__PURE__ */ H(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function bi(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ U(() => t.actor.reactive.system.details), a = /* @__PURE__ */ U(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ U(() => [...c(a).languages ?? []].join(", ")), r = /* @__PURE__ */ U(() => [...c(a).armor ?? []].join(", ")), o = /* @__PURE__ */ U(() => (c(a).weapons ?? []).join(", "));
  var u = $o(), l = h(u), f = h(l), d = h(f), v = b(f, 2);
  v.__change = ({ target: ge }) => t.actor.update({ "system.details.age": ge.value });
  var _ = b(l, 2), g = h(_), w = h(g), I = b(g, 2);
  I.__change = ({ target: ge }) => t.actor.update({ "system.details.gender": ge.value });
  var y = b(_, 2), M = h(y), oe = h(M), E = b(M, 2);
  E.__change = ({ target: ge }) => t.actor.update({ "system.details.height": ge.value });
  var W = b(y, 2), P = h(W), N = h(P), p = b(P, 2);
  p.__change = ({ target: ge }) => t.actor.update({ "system.details.weight": ge.value });
  var S = b(W, 2), k = h(S), F = h(k), te = b(k, 2), z = h(te), L = b(te, 2);
  L.__click = () => t.actor.configureLanguageProficiencies();
  var G = b(S, 2), B = h(G), $ = h(B), Q = b(B, 2), se = h(Q), Y = b(Q, 2);
  Y.__click = () => t.actor.configureArmorProficiencies();
  var X = b(G, 2), le = h(X), ce = h(le), ae = b(le, 2), A = h(ae), R = b(ae, 2);
  R.__click = () => t.actor.configureWeaponProficiencies();
  var j = b(X, 2), ie = h(j), J = h(ie), Ae = b(ie, 2), Yt = h(Ae);
  Vs(Yt, () => c(n).notes ?? ""), V(
    (ge, pt, ue, Se, tt, Ce, Jt, Dt, gn, Qt, Ln, aa, ia) => {
      D(d, ge), ct(v, c(n).age ?? ""), v.disabled = !t.editingEnabled, D(w, pt), ct(I, c(n).gender ?? ""), I.disabled = !t.editingEnabled, D(oe, ue), ct(E, c(n).height ?? ""), T(E, "placeholder", Se), E.disabled = !t.editingEnabled, D(N, tt), ct(p, c(n).weight ?? ""), T(p, "placeholder", Ce), p.disabled = !t.editingEnabled, D(F, Jt), D(z, c(s) || "—"), T(L, "data-tooltip", Dt), L.disabled = !t.editingEnabled, D($, gn), D(se, c(r) || "—"), T(Y, "data-tooltip", Qt), Y.disabled = !t.editingEnabled, D(ce, Ln), D(A, c(o) || "—"), T(R, "data-tooltip", aa), R.disabled = !t.editingEnabled, D(J, ia), T(Ae, "contenteditable", t.editingEnabled ? "true" : "false");
    },
    [
      () => x("NWS.Age"),
      () => x("NWS.Gender"),
      () => x("NWS.Height"),
      () => x("NWS.Height"),
      () => x("NWS.Weight"),
      () => x("NWS.Weight"),
      () => x("NWS.Languages"),
      () => x("NWS.ConfigureLanguages"),
      () => x("NWS.ArmorProficiencies"),
      () => x("NWS.ConfigureArmorProficiencies"),
      () => x("NWS.WeaponProficiencies"),
      () => x("NWS.ConfigureWeaponProficiencies"),
      () => x("NWS.Notes")
    ]
  ), dt("blur", Ae, ({ target: ge }) => t.actor.update({ "system.details.notes": ge.innerHTML })), O(e, u), Ee();
}
i(bi, "BioTab");
Ie(["change", "click"]);
var el = /* @__PURE__ */ H('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), tl = /* @__PURE__ */ H('<div class="nos-slot nos-slot--empty"> </div>'), nl = /* @__PURE__ */ H("<!> <!>", 1);
function al(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ U(() => t.actor.reactive.items.filter((u) => u.type === "object" && u.system?.objectType === "weapon").sort((u, l) => (u.sort ?? 0) - (l.sort ?? 0)));
  var a = nl(), s = bt(a);
  Ve(s, 17, () => c(n), Ke, (u, l) => {
    var f = el(), d = h(f), v = b(d, 2);
    v.__click = () => t.actor.activateItem(c(l).id);
    var _ = h(v);
    V(() => {
      T(d, "src", c(l).img), T(d, "alt", c(l).name), T(v, "data-tooltip", c(l).system?.description?.public || c(l).name), D(_, c(l).name);
    }), O(u, f);
  });
  var r = b(s, 2);
  {
    var o = /* @__PURE__ */ i((u) => {
      var l = tl(), f = h(l);
      V((d) => D(f, d), [() => x("NWS.NoWeapons")]), O(u, l);
    }, "consequent");
    ee(r, (u) => {
      c(n).length === 0 && u(o);
    });
  }
  O(e, a), Ee();
}
i(al, "InventorySlots");
Ie(["click"]);
var il = /* @__PURE__ */ H('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), rl = /* @__PURE__ */ H('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), sl = /* @__PURE__ */ H('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function ol(e, t) {
  we(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: vi
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: _i
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: hi
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: bi
    }
  ];
  let a = /* @__PURE__ */ Me("features"), s = /* @__PURE__ */ U(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), r = /* @__PURE__ */ U(() => t.actor.reactive.system.inventory);
  var o = sl(), u = h(o);
  Ve(u, 21, () => n, Ke, (E, W) => {
    var P = il();
    let N;
    P.__click = () => Oe(a, c(W).name, !0);
    var p = h(P), S = b(p);
    V(
      (k) => {
        N = Ze(P, 1, "nos-tab-btn", null, N, { "nos-tab-btn--active": c(a) === c(W).name }), Ze(p, 1, c(W).icon), D(S, ` ${k ?? ""}`);
      },
      [() => x(c(W).labelKey)]
    ), O(E, P);
  });
  var l = b(u, 2), f = h(l);
  {
    var d = /* @__PURE__ */ i((E) => {
      vi(E, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), v = /* @__PURE__ */ i((E) => {
      var W = va(), P = bt(W);
      {
        var N = /* @__PURE__ */ i((S) => {
          _i(S, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), p = /* @__PURE__ */ i((S) => {
          var k = va(), F = bt(k);
          {
            var te = /* @__PURE__ */ i((L) => {
              hi(L, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), z = /* @__PURE__ */ i((L) => {
              var G = va(), B = bt(G);
              {
                var $ = /* @__PURE__ */ i((Q) => {
                  bi(Q, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                ee(
                  B,
                  (Q) => {
                    c(a) === "bio" && Q($);
                  },
                  !0
                );
              }
              O(L, G);
            }, "alternate");
            ee(
              F,
              (L) => {
                c(a) === "inventory" ? L(te) : L(z, !1);
              },
              !0
            );
          }
          O(S, k);
        }, "alternate_1");
        ee(
          P,
          (S) => {
            c(a) === "spells" ? S(N) : S(p, !1);
          },
          !0
        );
      }
      O(E, W);
    }, "alternate_2");
    ee(f, (E) => {
      c(a) === "features" ? E(d) : E(v, !1);
    });
  }
  var _ = b(l, 2), g = h(_), w = h(g), I = b(_, 2), y = h(I);
  al(y, {
    get actor() {
      return t.actor;
    }
  });
  var M = b(y, 2);
  {
    var oe = /* @__PURE__ */ i((E) => {
      var W = rl(), P = h(W);
      V(() => D(P, `${c(r).usedSlots ?? 0 ?? ""} / ${c(r).totalSlots ?? 0 ?? ""}`)), O(E, W);
    }, "consequent_4");
    ee(M, (E) => {
      c(s) && E(oe);
    });
  }
  V((E) => D(w, E), [() => x("NWS.Weapons")]), O(e, o), Ee();
}
i(ol, "ContentArea");
Ie(["click"]);
var ll = /* @__PURE__ */ H('<button type="button" role="menuitem"><i></i> <span> </span></button>'), cl = /* @__PURE__ */ H('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"></div>', 1);
function ul(e, t) {
  we(t, !0);
  const n = [
    { value: "white", icon: "fa-sun", label: "NWS.ThemeWhite" },
    { value: "dark", icon: "fa-moon", label: "NWS.ThemeDark" },
    {
      value: "nimble",
      icon: "fa-dice-d20",
      label: "NWS.ThemeNimble"
    }
  ];
  function a(l) {
    t.setColorScheme(l), t.onclose();
  }
  i(a, "select");
  function s(l) {
    l.key === "Escape" && t.onclose();
  }
  i(s, "handleKeydown");
  var r = cl(), o = bt(r);
  o.__click = function(...l) {
    t.onclose?.apply(this, l);
  }, o.__keydown = s;
  var u = b(o, 2);
  Ve(u, 21, () => n, Ke, (l, f) => {
    var d = ll();
    let v;
    d.__click = () => a(c(f).value);
    var _ = h(d), g = b(_, 2), w = h(g);
    V(
      (I) => {
        v = Ze(d, 1, "nos-color-scheme-menu__option", null, v, {
          "nos-color-scheme-menu__option--active": t.colorScheme === c(f).value
        }), Ze(_, 1, `fa-solid ${c(f).icon ?? ""}`), D(w, I);
      },
      [() => x(c(f).label)]
    ), O(l, d);
  }), O(e, r), Ee();
}
i(ul, "ColorSchemeMenu");
Ie(["click", "keydown"]);
var fl = /* @__PURE__ */ H('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function dl(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Me(!1);
  var a = fl(), s = h(a);
  let r;
  s.__click = function(...y) {
    t.toggleEditingEnabled?.apply(this, y);
  };
  var o = h(s), u = b(s, 2);
  u.__click = () => t.actor.triggerLevelUp();
  var l = b(u, 2);
  l.__click = () => t.actor.triggerLevelDown();
  var f = b(l, 2), d = h(f);
  let v;
  d.__click = () => Oe(n, !c(n));
  var _ = b(d, 2);
  {
    var g = /* @__PURE__ */ i((y) => {
      ul(y, {
        get colorScheme() {
          return t.colorScheme;
        },
        get setColorScheme() {
          return t.setColorScheme;
        },
        onclose: /* @__PURE__ */ i(() => Oe(n, !1), "onclose")
      });
    }, "consequent");
    ee(_, (y) => {
      c(n) && y(g);
    });
  }
  var w = b(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var I = b(w, 2);
  I.__click = () => t.actor.triggerRest({ restType: "safe" }), V(
    (y, M, oe, E, W, P, N, p, S, k, F, te) => {
      r = Ze(s, 1, "nos-sidebar-btn", null, r, { "nos-sidebar-btn--active": t.editingEnabled }), T(s, "aria-pressed", t.editingEnabled), T(s, "aria-label", y), T(s, "data-tooltip", M), Ze(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), T(u, "aria-label", oe), T(u, "data-tooltip", E), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, T(l, "aria-label", W), T(l, "data-tooltip", P), l.disabled = t.actor.reactive.system.levelUpHistory.length === 0, v = Ze(d, 1, "nos-sidebar-btn", null, v, { "nos-sidebar-btn--active": t.darkMode }), T(d, "aria-pressed", t.darkMode), T(d, "aria-label", N), T(d, "data-tooltip", p), T(d, "aria-expanded", c(n)), T(w, "aria-label", S), T(w, "data-tooltip", k), T(I, "aria-label", F), T(I, "data-tooltip", te);
    },
    [
      () => t.editingEnabled ? x("NWS.DisableEditing") : x("NWS.EnableEditing"),
      () => t.editingEnabled ? x("NWS.EditingEnabled") : x("NWS.EditingLocked"),
      () => x("NWS.LevelUp"),
      () => x("NWS.LevelUp"),
      () => x("NWS.RevertLastLevelUp"),
      () => x("NWS.RevertLastLevelUp"),
      () => x("NWS.ColorScheme"),
      () => x("NWS.ColorScheme"),
      () => x("NWS.FieldRest"),
      () => x("NWS.FieldRest"),
      () => x("NWS.SafeRest"),
      () => x("NWS.SafeRest")
    ]
  ), O(e, a), Ee();
}
i(dl, "SidebarControls");
Ie(["click"]);
var vl = /* @__PURE__ */ H('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function _l(e, t) {
  we(t, !0);
  const n = ji((A) => {
    const R = {
      updateActor: Hooks.on("updateActor", (j, ie, J) => {
        J.diff !== !1 && j._id === t.actor.id && A();
      }),
      createItem: Hooks.on("createItem", (j) => {
        j?.actor?.id === t.actor.id && A();
      }),
      deleteItem: Hooks.on("deleteItem", (j) => {
        j?.actor?.id === t.actor.id && A();
      }),
      updateItem: Hooks.on("updateItem", (j, ie, J) => {
        J.diff !== !1 && j?.actor?.id === t.actor.id && A();
      })
    };
    return () => {
      Hooks.off("updateActor", R.updateActor), Hooks.off("createItem", R.createItem), Hooks.off("deleteItem", R.deleteItem), Hooks.off("updateItem", R.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(A, R) {
      if (R === "reactive")
        return n(), A;
      const j = A[R];
      return typeof j == "function" ? j.bind(A) : j;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: r,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(A, R) {
    return Math.clamp(0, Math.round(A / R * 100), 100);
  }
  i(u, "getHitPointPercentage");
  function l(A, R, j, ie) {
    const J = [];
    return j && J.push(`${j.name} (${s[ie] ?? ie})`), A && (R ? J.push(`${A.name} (${R.name}, ${A.system.classLevel})`) : J.push(`${A.name} (${A.system.classLevel})`)), J.filter(Boolean).join(" ⟡ ");
  }
  i(l, "prepareCharacterMetadata");
  function f(A, R) {
    if (!R) return A;
    const j = [4, 6, 8, 10, 12, 20], ie = j.indexOf(A);
    return ie === -1 ? A : j[Math.min(ie + R, j.length - 1)];
  }
  i(f, "incrementDieSize");
  let d = /* @__PURE__ */ U(() => u(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(A) {
    a.update({ "system.attributes.hp.value": A });
  }
  i(v, "updateCurrentHP");
  function _(A) {
    a.update({ "system.attributes.hp.temp": A });
  }
  i(_, "updateTempHP");
  let g = /* @__PURE__ */ U(() => a.reactive.system.resources.mana), w = /* @__PURE__ */ U(() => (c(g).max ?? 0) > 0 || (c(g).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((A) => A.type === "class" && A.system?.mana?.formula?.length));
  function I(A) {
    a.update({ "system.resources.mana.current": A });
  }
  i(I, "updateCurrentMana");
  let y = /* @__PURE__ */ U(() => {
    const A = a.reactive.system.attributes.hitDice, R = a.reactive.system.attributes.bonusHitDice ?? [], j = a.reactive.items.filter((ue) => ue.type === "class"), ie = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, J = {};
    for (const ue of j) {
      const Se = ue.system.hitDieSize, tt = f(Se, ie), Ce = ue.system.classLevel;
      J[tt] ??= { current: 0, total: 0 }, J[tt].total += Ce, J[tt].current = A[tt]?.current ?? 0;
    }
    const Ae = j.map((ue) => f(ue.system.hitDieSize, ie));
    for (const ue of R) {
      const Se = f(ue.size, ie);
      J[Se] ??= { current: A[Se]?.current ?? 0, total: 0 }, J[Se].total += ue.value, Ae.includes(Se) || (J[Se].current = A[Se]?.current ?? 0);
    }
    const Yt = R.map((ue) => f(ue.size, ie));
    for (const [ue, Se] of Object.entries(A ?? {})) {
      const tt = Number(ue), Ce = f(tt, ie), Jt = Se?.bonus ?? 0;
      if (Jt > 0) {
        J[Ce] ??= { current: 0, total: 0 }, J[Ce].total += Jt;
        const Dt = Ae.includes(Ce), gn = Yt.includes(Ce);
        !Dt && !gn && (J[Ce].current = A[Ce]?.current ?? 0);
      }
    }
    let ge = 0, pt = 0;
    for (const ue of Object.values(J))
      ge += ue.current, pt += ue.total;
    return { bySize: J, value: ge, max: pt };
  });
  async function M(A) {
    await a.updateCurrentHitDice(A);
  }
  i(M, "updateCurrentHitDice");
  async function oe() {
    await a.rollHitDice();
  }
  i(oe, "rollHitDice");
  async function E() {
    await a.editCurrentHitDice();
  }
  i(E, "editCurrentHitDice");
  let W = /* @__PURE__ */ U(() => a.reactive.items.find((A) => A.type === "class") ?? null), P = /* @__PURE__ */ U(() => {
    const A = a.reactive.items.find((J) => J.type === "class") ?? null, R = a.reactive.items.find((J) => J.type === "subclass") ?? null, j = a.reactive.items.find((J) => J.type === "ancestry") ?? null, ie = a.reactive.system.attributes.sizeCategory;
    return l(A, R, j, ie);
  }), N = /* @__PURE__ */ U(() => a.reactive.system.attributes.wounds);
  function p(A) {
    let R = A;
    A <= c(N).value && (R = A - 1), a.update({ "system.attributes.wounds.value": R });
  }
  i(p, "toggleWounds");
  let S = /* @__PURE__ */ U(() => a.reactive.flags.nimble), k = /* @__PURE__ */ U(() => c(S)?.editingEnabled ?? !0);
  const F = Zs(!1, (A) => (As(() => A(c(k))), () => {
  }));
  async function te() {
    await a.setFlag("nimble", "editingEnabled", !c(k));
  }
  i(te, "toggleEditingEnabled");
  let z = /* @__PURE__ */ U(() => {
    const A = c(S)?.colorScheme;
    return A || (c(S)?.darkMode === !0 ? "dark" : "white");
  });
  async function L(A) {
    await a.setFlag("nimble", "colorScheme", A);
  }
  i(L, "setColorScheme");
  let G = /* @__PURE__ */ U(() => c(z) === "dark"), B = /* @__PURE__ */ U(() => c(z) === "nimble");
  Pn("actor", a), Pn("document", a), Pn("application", t.sheet), Pn("editingEnabled", F);
  var $ = vl();
  let Q;
  var se = h($), Y = h(se);
  ro(Y, {
    get actor() {
      return a;
    },
    get metaData() {
      return c(P);
    },
    get editingEnabled() {
      return c(k);
    },
    get hitDiceData() {
      return c(y);
    }
  });
  var X = b(Y, 2);
  bo(X, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(k);
    },
    get isBloodied() {
      return c(d);
    },
    get hitDiceData() {
      return c(y);
    },
    get hasMana() {
      return c(w);
    },
    get mana() {
      return c(g);
    },
    get wounds() {
      return c(N);
    },
    toggleWounds: p,
    updateCurrentHP: v,
    updateTempHP: _,
    updateCurrentMana: I,
    updateCurrentHitDice: M,
    rollHitDice: oe,
    editCurrentHitDice: E
  });
  var le = b(X, 2);
  wo(le, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(k);
    }
  });
  var ce = b(se, 2);
  ol(ce, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(k);
    },
    get hasMana() {
      return c(w);
    },
    get mana() {
      return c(g);
    },
    updateCurrentMana: I
  });
  var ae = b(ce, 2);
  dl(ae, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(k);
    },
    toggleEditingEnabled: te,
    get classItem() {
      return c(W);
    },
    get darkMode() {
      return c(G);
    },
    get colorScheme() {
      return c(z);
    },
    setColorScheme: L
  }), V(() => Q = Ze($, 1, "nos-sheet", null, Q, {
    "nos-sheet--dark": c(G),
    "nos-sheet--nimble": c(B)
  })), O(e, $), Ee();
}
i(_l, "WhiteSheet");
const at = class at extends eo(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = _l;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < at.MIN_WIDTH && (t.width = at.MIN_WIDTH), t.height !== void 0 && t.height < at.MIN_HEIGHT && (t.height = at.MIN_HEIGHT), super.setPosition(t);
  }
  async _prepareContext(t) {
    return { ...await super._prepareContext(t), actor: this._actor, sheet: this };
  }
  async _onDropItem(t, n) {
    t.preventDefault(), t.stopPropagation();
    const a = this.document;
    if (Hooks.call("dropActorSheetData", a, this, n) === !1 || !this.document.isOwner) return !1;
    const r = await Item.implementation.fromDropData(n);
    if (!r) return !1;
    const o = r.toObject();
    if (o.id = r.id, r.uuid && !o.uuid && (o.uuid = r.uuid), !!this._actor.items.has(r.id ?? ""))
      return this._onSortItem(t, o);
    const l = Array.isArray(o) ? o : [o];
    return l.some((d) => d.type === "subclass") ? this._onDropSubclassCreate(l) : this._actor.createEmbeddedDocuments("Item", l);
  }
  async _onDropSubclassCreate(t) {
    const n = Array.isArray(t) ? t : [t], a = this.document, s = [];
    for (const r of n) {
      if (r.type === "subclass") {
        const o = r, u = o.system?.parentClass, l = a.levels?.character ?? 0;
        if (l < 3) {
          ui.notifications?.warn(`You must be at least level 3 to select a subclass. You are currently level ${l}.`);
          continue;
        }
        if (!Object.values(a.classes ?? {}).some((v) => v.identifier === u)) {
          const v = CONFIG.NIMBLE?.classes?.[u] ?? u;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${v} class.`);
          continue;
        }
        const d = a.items.find((v) => v.type === "subclass" && v.system?.parentClass === u);
        if (d) {
          const v = d.system?.identifier, _ = o.system?.identifier;
          if (v && _ && v === _) {
            ui.notifications?.warn(`You already have the "${d.name}" subclass.`);
            continue;
          }
          if (!await foundry.applications.api.DialogV2.confirm({
            content: `<p>You already have the <strong>${d.name}</strong> subclass.<br />Do you want to replace it with <strong>${o.name}</strong>?</p>`,
            rejectClose: !1,
            modal: !0
          })) continue;
          await a.deleteEmbeddedDocuments("Item", [d.id]);
        }
      }
      s.push(r);
    }
    return s.length > 0 ? a.createEmbeddedDocuments("Item", s) : [];
  }
};
i(at, "WhiteCharacterSheet"), Pe(at, "MIN_WIDTH", 670), Pe(at, "MIN_HEIGHT", 400), Pe(at, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Ma = at;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-white-sheet",
    Ma,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Nimble White Sheet"
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
