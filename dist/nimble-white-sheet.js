var Qa = Object.defineProperty;
var Xa = (e) => {
  throw TypeError(e);
};
var kr = (e, t, n) => t in e ? Qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t) => Qa(e, "name", { value: t, configurable: !0 });
var Re = (e, t, n) => kr(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Xa("Cannot " + n);
var m = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => t.has(e) ? Xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), Se = (e, t, n) => (la(e, t, "access private method"), n);
const me = /* @__PURE__ */ Symbol(), xr = /* @__PURE__ */ Symbol("filename"), Nr = "http://www.w3.org/1999/xhtml", Za = globalThis.process?.env?.NODE_ENV, C = Za && !Za.toLowerCase().startsWith("prod");
var mi = Array.isArray, Tr = Array.prototype.indexOf, qt = Array.prototype.includes, Qn = Array.from, Kt = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, Ir = Object.getOwnPropertyDescriptors, Ar = Object.prototype, Cr = Array.prototype, gi = Object.getPrototypeOf, $a = Object.isExtensible;
const ca = /* @__PURE__ */ i(() => {
}, "noop");
function Mr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
i(Mr, "run_all");
function pi() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
i(pi, "deferred");
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
const pe = 2, ba = 4, Xn = 8, wi = 1 << 24, gt = 16, nt = 32, Yt = 64, La = 128, qe = 512, he = 1024, ye = 2048, tt = 4096, He = 8192, St = 16384, Ha = 32768, dn = 65536, Bn = 1 << 17, Ei = 1 << 18, gn = 1 << 19, Dr = 1 << 20, bt = 1 << 25, At = 32768, ma = 1 << 21, Zn = 1 << 22, kt = 1 << 23, nn = /* @__PURE__ */ Symbol("$state"), Wr = /* @__PURE__ */ Symbol(""), Si = /* @__PURE__ */ Symbol("proxy path");
var an;
const $t = new (an = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, i(an, "StaleReactionError"), an)();
function Or(e) {
  if (C) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
i(Or, "lifecycle_outside_component");
function Lr() {
  if (C) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
i(Lr, "async_derived_orphan");
function ei() {
  if (C) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
i(ei, "bind_invalid_checkbox_value");
function Hr() {
  if (C) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
i(Hr, "derived_references_self");
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
function Pr(e) {
  if (C) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
i(Pr, "effect_in_teardown");
function Rr() {
  if (C) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
i(Rr, "effect_in_unowned_derived");
function Fr(e) {
  if (C) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
i(Fr, "effect_orphan");
function jr() {
  if (C) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
i(jr, "effect_update_depth_exceeded");
function zr(e) {
  if (C) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
i(zr, "rune_outside_svelte");
function Ur() {
  if (C) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
i(Ur, "state_descriptors_fixed");
function Br() {
  if (C) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
i(Br, "state_prototype_fixed");
function qr() {
  if (C) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
i(qr, "state_unsafe_mutation");
function Kr() {
  if (C) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
i(Kr, "svelte_boundary_reset_onerror");
var $n = "font-weight: bold", ea = "font-weight: normal";
function Vr() {
  C ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, $n, ea) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
i(Vr, "lifecycle_double_unmount");
function ua(e) {
  C ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, $n, ea) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
i(ua, "state_proxy_equality_mismatch");
function Gr() {
  C ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, $n, ea) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
i(Gr, "state_proxy_unmount");
function Yr() {
  C ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", $n, ea) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
i(Yr, "svelte_boundary_reset_noop");
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
let Jr = !1;
function it(e, t) {
  return e.label = t, Ii(e.v, t), e;
}
i(it, "tag");
function Ii(e, t) {
  return e?.[Si]?.(t), e;
}
i(Ii, "tag_proxy");
function Qr(e) {
  const t = new Error(), n = Xr();
  return n.length === 0 ? null : (n.unshift(`
`), Kt(t, "stack", {
    value: n.join(`
`)
  }), Kt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
i(Qr, "get_error");
function Xr() {
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
i(Xr, "get_stack");
let ge = null;
function vn(e) {
  ge = e;
}
i(vn, "set_component_context");
let Tn = null;
function qn(e) {
  Tn = e;
}
i(qn, "set_dev_stack");
let Wn = null;
function ti(e) {
  Wn = e;
}
i(ti, "set_dev_current_component_function");
function Pn(e, t) {
  return Zr("setContext").set(e, t), t;
}
i(Pn, "setContext");
function ke(e, t = !1, n) {
  ge = {
    p: ge,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, C && (ge.function = n, Wn = n);
}
i(ke, "push");
function xe(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Yi(a);
  }
  return t.i = !0, ge = t.p, C && (Wn = ge?.function ?? null), /** @type {T} */
  {};
}
i(xe, "pop");
function Ai() {
  return !0;
}
i(Ai, "is_runes");
function Zr(e) {
  return ge === null && Or(e), ge.c ??= new Map($r(ge) || void 0);
}
i(Zr, "get_or_init_context_map");
function $r(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
i($r, "get_parent_context");
let Ot = [];
function Ci() {
  var e = Ot;
  Ot = [], Mr(e);
}
i(Ci, "run_micro_tasks");
function xt(e) {
  if (Ot.length === 0 && !xn) {
    var t = Ot;
    queueMicrotask(() => {
      t === Ot && Ci();
    });
  }
  Ot.push(e);
}
i(xt, "queue_micro_task");
function es() {
  for (; Ot.length > 0; )
    Ci();
}
i(es, "flush_tasks");
const ga = /* @__PURE__ */ new WeakMap();
function Mi(e) {
  var t = ie;
  if (t === null)
    return $.f |= kt, e;
  if (C && e instanceof Error && !ga.has(e) && ga.set(e, ts(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw C && !t.parent && e instanceof Error && Di(e), e;
    t.b.error(e);
  } else
    _n(e, t);
}
i(Mi, "handle_error");
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
  throw C && e instanceof Error && Di(e), e;
}
i(_n, "invoke_error_boundary");
function ts(e, t) {
  const n = tn(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = za ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, r = t.ctx; r !== null; )
      s += `
${a}in ${r.function?.[xr].split("/").pop()}`, r = r.p;
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
i(ts, "get_adjustments");
function Di(e) {
  const t = ga.get(e);
  t && (Kt(e, "message", {
    value: t.message
  }), Kt(e, "stack", {
    value: t.stack
  }));
}
i(Di, "apply_adjustments");
const ns = -7169;
function de(e, t) {
  e.f = e.f & ns | t;
}
i(de, "set_signal_status");
function Pa(e) {
  (e.f & qe) !== 0 || e.deps === null ? de(e, he) : de(e, tt);
}
i(Pa, "update_derived_status");
function Wi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & pe) === 0 || (t.f & At) === 0 || (t.f ^= At, Wi(
        /** @type {Derived} */
        t.deps
      ));
}
i(Wi, "clear_marked");
function Oi(e, t, n) {
  (e.f & ye) !== 0 ? t.add(e) : (e.f & tt) !== 0 && n.add(e), Wi(e.deps), de(e, he);
}
i(Oi, "defer_effect");
const Rn = /* @__PURE__ */ new Set();
let se = null, pa = null, Qe = null, Ie = [], ta = null, ya = !1, xn = !1;
var rn, sn, Ht, on, An, Cn, Pt, _t, ln, ft, wa, Ea, Li;
const Gn = class Gn {
  constructor() {
    B(this, ft);
    Re(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Re(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Re(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    B(this, rn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, sn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    B(this, Ht, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    B(this, on, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    B(this, An, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    B(this, Cn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    B(this, Pt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    B(this, _t, /* @__PURE__ */ new Map());
    Re(this, "is_fork", !1);
    B(this, ln, !1);
  }
  is_deferred() {
    return this.is_fork || m(this, on) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    m(this, _t).has(t) || m(this, _t).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = m(this, _t).get(t);
    if (n) {
      m(this, _t).delete(t);
      for (var a of n.d)
        de(a, ye), Xe(a);
      for (a of n.m)
        de(a, tt), Xe(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Ie = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      Se(this, ft, wa).call(this, s, n, a);
    if (this.is_deferred()) {
      Se(this, ft, Ea).call(this, a), Se(this, ft, Ea).call(this, n);
      for (const [s, r] of m(this, _t))
        Fi(s, r);
    } else {
      for (const s of m(this, rn)) s();
      m(this, rn).clear(), m(this, Ht) === 0 && Se(this, ft, Li).call(this), pa = this, se = null, ni(a), ni(n), pa = null, m(this, An)?.resolve();
    }
    Qe = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== me && !this.previous.has(t) && this.previous.set(t, n), (t.f & kt) === 0 && (this.current.set(t, t.v), Qe?.set(t, t.v));
  }
  activate() {
    se = this, this.apply();
  }
  deactivate() {
    se === this && (se = null, Qe = null);
  }
  flush() {
    if (this.activate(), Ie.length > 0) {
      if (Hi(), se !== null && se !== this)
        return;
    } else m(this, Ht) === 0 && this.process([]);
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
    q(this, Ht, m(this, Ht) + 1), t && q(this, on, m(this, on) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    q(this, Ht, m(this, Ht) - 1), t && q(this, on, m(this, on) - 1), !m(this, ln) && (q(this, ln, !0), xt(() => {
      q(this, ln, !1), this.is_deferred() ? Ie.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of m(this, Cn))
      m(this, Pt).delete(t), de(t, ye), Xe(t);
    for (const t of m(this, Pt))
      de(t, tt), Xe(t);
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
    return (m(this, An) ?? q(this, An, pi())).promise;
  }
  static ensure() {
    if (se === null) {
      const t = se = new Gn();
      Rn.add(se), xn || xt(() => {
        se === t && t.flush();
      });
    }
    return se;
  }
  apply() {
  }
};
rn = new WeakMap(), sn = new WeakMap(), Ht = new WeakMap(), on = new WeakMap(), An = new WeakMap(), Cn = new WeakMap(), Pt = new WeakMap(), _t = new WeakMap(), ln = new WeakMap(), ft = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = /* @__PURE__ */ i(function(t, n, a) {
  t.f ^= he;
  for (var s = t.first, r = null; s !== null; ) {
    var o = s.f, u = (o & (nt | Yt)) !== 0, l = u && (o & he) !== 0, f = l || (o & He) !== 0 || m(this, _t).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= he : r !== null && (o & (ba | Xn | wi)) !== 0 ? r.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : Ln(s) && ((o & gt) !== 0 && m(this, Pt).add(s), In(s));
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
    Oi(t[n], m(this, Cn), m(this, Pt));
}, "#defer_effects"), Li = /* @__PURE__ */ i(function() {
  var s;
  if (Rn.size > 1) {
    this.previous.clear();
    var t = Qe, n = !0;
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
        var a = Ie;
        Ie = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Pi(d, u, l, f);
        if (Ie.length > 0) {
          se = r, r.apply();
          for (const d of Ie)
            Se(s = r, ft, wa).call(s, d, [], []);
          r.deactivate();
        }
        Ie = a;
      }
    }
    se = null, Qe = t;
  }
  this.committed = !0, Rn.delete(this);
}, "#commit"), i(Gn, "Batch");
let Nt = Gn;
function as(e) {
  var t = xn;
  xn = !0;
  try {
    for (var n; ; ) {
      if (es(), Ie.length === 0 && (se?.flush(), Ie.length === 0))
        return ta = null, /** @type {T} */
        n;
      Hi();
    }
  } finally {
    xn = t;
  }
}
i(as, "flushSync");
function Hi() {
  ya = !0;
  var e = C ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Ie.length > 0; ) {
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
        is();
      }
      if (n.process(Ie), Tt.clear(), C)
        for (const r of n.current.keys())
          e.add(r);
    }
  } finally {
    if (Ie = [], ya = !1, ta = null, C)
      for (
        const r of
        /** @type {Set<Source>} */
        e
      )
        r.updated = null;
  }
}
i(Hi, "flush_effects");
function is() {
  try {
    jr();
  } catch (e) {
    C && Kt(e, "stack", { value: "" }), _n(e, ta);
  }
}
i(is, "infinite_loop_guard");
let dt = null;
function ni(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (St | He)) === 0 && Ln(a) && (dt = /* @__PURE__ */ new Set(), In(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? $i(a) : a.fn = null), dt?.size > 0)) {
        Tt.clear();
        for (const s of dt) {
          if ((s.f & (St | He)) !== 0) continue;
          const r = [s];
          let o = s.parent;
          for (; o !== null; )
            dt.has(o) && (dt.delete(o), r.push(o)), o = o.parent;
          for (let u = r.length - 1; u >= 0; u--) {
            const l = r[u];
            (l.f & (St | He)) === 0 && In(l);
          }
        }
        dt.clear();
      }
    }
    dt = null;
  }
}
i(ni, "flush_queued_effects");
function Pi(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const r = s.f;
      (r & pe) !== 0 ? Pi(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (r & (Zn | gt)) !== 0 && (r & ye) === 0 && Ri(s, t, a) && (de(s, ye), Xe(
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
      if (qt.call(t, s))
        return !0;
      if ((s.f & pe) !== 0 && Ri(
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
function Xe(e) {
  for (var t = ta = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === ie && (n & gt) !== 0 && (n & Ei) === 0)
      return;
    if ((n & (Yt | nt)) !== 0) {
      if ((n & he) === 0) return;
      t.f ^= he;
    }
  }
  Ie.push(t);
}
i(Xe, "schedule_effect");
function Fi(e, t) {
  if (!((e.f & nt) !== 0 && (e.f & he) !== 0)) {
    (e.f & ye) !== 0 ? t.d.push(e) : (e.f & tt) !== 0 && t.m.push(e), de(e, he);
    for (var n = e.first; n !== null; )
      Fi(n, t), n = n.next;
  }
}
i(Fi, "reset_branch");
function ji(e) {
  let t = 0, n = Vt(0), a;
  return C && it(n, "createSubscriber version"), () => {
    Ua() && (c(n), Ji(() => (t === 0 && (a = cr(() => e(() => Nn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, Nn(n));
      });
    })));
  };
}
i(ji, "createSubscriber");
var rs = dn | gn | La;
function ss(e, t, n) {
  new Sa(e, t, n);
}
i(ss, "boundary");
var je, Oa, st, Rt, ot, ze, Te, lt, ht, yt, Ft, wt, cn, jt, un, fn, ct, Yn, be, os, ls, ka, jn, zn, xa;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    B(this, be);
    /** @type {Boundary | null} */
    Re(this, "parent");
    Re(this, "is_pending", !1);
    /** @type {TemplateNode} */
    B(this, je);
    /** @type {TemplateNode | null} */
    B(this, Oa, null);
    /** @type {BoundaryProps} */
    B(this, st);
    /** @type {((anchor: Node) => void)} */
    B(this, Rt);
    /** @type {Effect} */
    B(this, ot);
    /** @type {Effect | null} */
    B(this, ze, null);
    /** @type {Effect | null} */
    B(this, Te, null);
    /** @type {Effect | null} */
    B(this, lt, null);
    /** @type {DocumentFragment | null} */
    B(this, ht, null);
    /** @type {TemplateNode | null} */
    B(this, yt, null);
    B(this, Ft, 0);
    B(this, wt, 0);
    B(this, cn, !1);
    B(this, jt, !1);
    /** @type {Set<Effect>} */
    B(this, un, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    B(this, fn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    B(this, ct, null);
    B(this, Yn, ji(() => (q(this, ct, Vt(m(this, Ft))), C && it(m(this, ct), "$effect.pending()"), () => {
      q(this, ct, null);
    })));
    q(this, je, t), q(this, st, n), q(this, Rt, a), this.parent = /** @type {Effect} */
    ie.b, this.is_pending = !!m(this, st).pending, q(this, ot, Ba(() => {
      ie.b = this;
      {
        var s = Se(this, be, ka).call(this);
        try {
          q(this, ze, Ue(() => a(s)));
        } catch (r) {
          this.error(r);
        }
        m(this, wt) > 0 ? Se(this, be, zn).call(this) : this.is_pending = !1;
      }
      return () => {
        m(this, yt)?.remove();
      };
    }, rs));
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
    return !!m(this, st).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Se(this, be, xa).call(this, t), q(this, Ft, m(this, Ft) + t), !(!m(this, ct) || m(this, cn)) && (q(this, cn, !0), xt(() => {
      q(this, cn, !1), m(this, ct) && bn(m(this, ct), m(this, Ft));
    }));
  }
  get_effect_pending() {
    return m(this, Yn).call(this), c(
      /** @type {Source<number>} */
      m(this, ct)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = m(this, st).onerror;
    let a = m(this, st).failed;
    if (m(this, jt) || !n && !a)
      throw t;
    m(this, ze) && (Ce(m(this, ze)), q(this, ze, null)), m(this, Te) && (Ce(m(this, Te)), q(this, Te, null)), m(this, lt) && (Ce(m(this, lt)), q(this, lt, null));
    var s = !1, r = !1;
    const o = /* @__PURE__ */ i(() => {
      if (s) {
        Yr();
        return;
      }
      s = !0, r && Kr(), Nt.ensure(), q(this, Ft, 0), m(this, lt) !== null && Ut(m(this, lt), () => {
        q(this, lt, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, ze, Se(this, be, jn).call(this, () => (q(this, jt, !1), Ue(() => m(this, Rt).call(this, m(this, je)))))), m(this, wt) > 0 ? Se(this, be, zn).call(this) : this.is_pending = !1;
    }, "reset");
    xt(() => {
      try {
        r = !0, n?.(t, o), r = !1;
      } catch (u) {
        _n(u, m(this, ot) && m(this, ot).parent);
      }
      a && q(this, lt, Se(this, be, jn).call(this, () => {
        Nt.ensure(), q(this, jt, !0);
        try {
          return Ue(() => {
            a(
              m(this, je),
              () => t,
              () => o
            );
          });
        } catch (u) {
          return _n(
            u,
            /** @type {Effect} */
            m(this, ot).parent
          ), null;
        } finally {
          q(this, jt, !1);
        }
      }));
    });
  }
};
je = new WeakMap(), Oa = new WeakMap(), st = new WeakMap(), Rt = new WeakMap(), ot = new WeakMap(), ze = new WeakMap(), Te = new WeakMap(), lt = new WeakMap(), ht = new WeakMap(), yt = new WeakMap(), Ft = new WeakMap(), wt = new WeakMap(), cn = new WeakMap(), jt = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), ct = new WeakMap(), Yn = new WeakMap(), be = new WeakSet(), os = /* @__PURE__ */ i(function() {
  try {
    q(this, ze, Ue(() => m(this, Rt).call(this, m(this, je))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ls = /* @__PURE__ */ i(function() {
  const t = m(this, st).pending;
  t && (q(this, Te, Ue(() => t(m(this, je)))), xt(() => {
    var n = Se(this, be, ka).call(this);
    q(this, ze, Se(this, be, jn).call(this, () => (Nt.ensure(), Ue(() => m(this, Rt).call(this, n))))), m(this, wt) > 0 ? Se(this, be, zn).call(this) : (Ut(
      /** @type {Effect} */
      m(this, Te),
      () => {
        q(this, Te, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ka = /* @__PURE__ */ i(function() {
  var t = m(this, je);
  return this.is_pending && (q(this, yt, It()), m(this, je).before(m(this, yt)), t = m(this, yt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
jn = /* @__PURE__ */ i(function(t) {
  var n = ie, a = $, s = ge;
  $e(m(this, ot)), Ve(m(this, ot)), vn(m(this, ot).ctx);
  try {
    return t();
  } catch (r) {
    return Mi(r), null;
  } finally {
    $e(n), Ve(a), vn(s);
  }
}, "#run"), zn = /* @__PURE__ */ i(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    m(this, st).pending
  );
  m(this, ze) !== null && (q(this, ht, document.createDocumentFragment()), m(this, ht).append(
    /** @type {TemplateNode} */
    m(this, yt)
  ), nr(m(this, ze), m(this, ht))), m(this, Te) === null && q(this, Te, Ue(() => t(m(this, je))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xa = /* @__PURE__ */ i(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Se(n = this.parent, be, xa).call(n, t);
    return;
  }
  if (q(this, wt, m(this, wt) + t), m(this, wt) === 0) {
    this.is_pending = !1;
    for (const a of m(this, un))
      de(a, ye), Xe(a);
    for (const a of m(this, fn))
      de(a, tt), Xe(a);
    m(this, un).clear(), m(this, fn).clear(), m(this, Te) && Ut(m(this, Te), () => {
      q(this, Te, null);
    }), m(this, ht) && (m(this, je).before(m(this, ht)), q(this, ht, null));
  }
}, "#update_pending_count"), i(Va, "Boundary");
let Sa = Va;
function cs(e, t, n, a) {
  const s = Ra;
  var r = e.filter((_) => !_.settled);
  if (n.length === 0 && r.length === 0) {
    a(t.map(s));
    return;
  }
  var o = se, u = (
    /** @type {Effect} */
    ie
  ), l = us(), f = r.length === 1 ? r[0].promise : r.length > 1 ? Promise.all(r.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (y) {
      (u.f & St) === 0 && _n(y, u);
    }
    o?.deactivate(), Na();
  }
  if (i(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function v() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ ds(_))).then((_) => d([...t.map(s), ..._])).catch((_) => _n(_, u));
  }
  i(v, "run"), f ? f.then(v) : v();
}
i(cs, "flatten");
function us() {
  var e = ie, t = $, n = ge, a = se;
  if (C)
    var s = Tn;
  return /* @__PURE__ */ i(function(o = !0) {
    $e(e), Ve(t), vn(n), o && a?.activate(), C && qn(s);
  }, "restore");
}
i(us, "capture");
function Na() {
  $e(null), Ve(null), vn(null), C && qn(null);
}
i(Na, "unset_context");
const fs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = pe | ye, n = $ !== null && ($.f & pe) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return ie !== null && (ie.f |= gn), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: xi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      me
    ),
    wv: 0,
    parent: n ?? ie,
    ac: null
  };
}
i(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function ds(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ie
  );
  a === null && Lr();
  var s = (
    /** @type {Boundary} */
    a.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Vt(
    /** @type {V} */
    me
  );
  C && (o.label = t);
  var u = !$, l = /* @__PURE__ */ new Map();
  return As(() => {
    var f = pi();
    r = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === se && d.committed && d.deactivate(), Na();
      });
    } catch (y) {
      f.reject(y), Na();
    }
    var d = (
      /** @type {Batch} */
      se
    );
    if (u) {
      var v = s.is_rendered();
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject($t), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ i((y, w = void 0) => {
      if (d.activate(), w)
        w !== $t && (o.f |= kt, bn(o, w));
      else {
        (o.f & kt) !== 0 && (o.f ^= kt), bn(o, y);
        for (const [A, p] of l) {
          if (l.delete(A), A === d) break;
          p.reject($t);
        }
      }
      u && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (y) => _(null, y || "unknown"));
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
i(ds, "async_derived");
// @__NO_SIDE_EFFECTS__
function F(e) {
  const t = /* @__PURE__ */ Ra(e);
  return ar(t), t;
}
i(F, "user_derived");
// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = /* @__PURE__ */ Ra(e);
  return t.equals = Ti, t;
}
i(vs, "derived_safe_equal");
function Ta(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ce(
        /** @type {Effect} */
        t[n]
      );
  }
}
i(Ta, "destroy_derived_effects");
let fa = [];
function _s(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & pe) === 0)
      return (t.f & St) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
i(_s, "get_derived_parent_effect");
function Fa(e) {
  var t, n = ie;
  if ($e(_s(e)), C) {
    let a = hn;
    ai(/* @__PURE__ */ new Set());
    try {
      qt.call(fa, e) && Hr(), fa.push(e), e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      $e(n), ai(a), fa.pop();
    }
  } else
    try {
      e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      $e(n);
    }
  return t;
}
i(Fa, "execute_derived");
function zi(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = rr(), (!se?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, he);
    return;
  }
  Gt || (Qe !== null ? (Ua() || se?.is_fork) && Qe.set(e, t) : Pa(e));
}
i(zi, "update_derived");
let hn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
function ai(e) {
  hn = e;
}
i(ai, "set_eager_effects");
let ja = !1;
function hs() {
  ja = !0;
}
i(hs, "set_eager_effects_deferred");
function Vt(e, t) {
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
i(Vt, "source");
// @__NO_SIDE_EFFECTS__
function Oe(e, t) {
  const n = Vt(e);
  return ar(n), n;
}
i(Oe, "state");
// @__NO_SIDE_EFFECTS__
function bs(e, t = !1, n = !0) {
  const a = Vt(e);
  return t || (a.equals = Ti), a;
}
i(bs, "mutable_source");
function Le(e, t, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || ($.f & Bn) !== 0) && Ai() && ($.f & (pe | gt | Zn | Bn)) !== 0 && (Ke === null || !qt.call(Ke, e)) && qr();
  let a = n ? en(t) : t;
  return C && Ii(
    a,
    /** @type {string} */
    e.label
  ), bn(e, a);
}
i(Le, "set");
function bn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Gt ? Tt.set(e, t) : Tt.set(e, n), e.v = t;
    var a = Nt.ensure();
    if (a.capture(e, n), C) {
      if (ie !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const r = Qr("updated at");
          if (r !== null) {
            let o = e.updated.get(r.stack);
            o || (o = { error: r, count: 0 }, e.updated.set(r.stack, o)), o.count++;
          }
        }
      }
      ie !== null && (e.set_during_effect = !0);
    }
    if ((e.f & pe) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ye) !== 0 && Fa(s), Pa(s);
    }
    e.wv = rr(), Bi(e, ye), ie !== null && (ie.f & he) !== 0 && (ie.f & (nt | Yt)) === 0 && (Fe === null ? Ms([e]) : Fe.push(e)), !a.is_fork && hn.size > 0 && !ja && Ui();
  }
  return t;
}
i(bn, "internal_set");
function Ui() {
  ja = !1;
  for (const e of hn)
    (e.f & he) !== 0 && de(e, tt), Ln(e) && In(e);
  hn.clear();
}
i(Ui, "flush_eager_effects");
function Nn(e) {
  Le(e, e.v + 1);
}
i(Nn, "increment");
function Bi(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var r = n[s], o = r.f;
      if (C && (o & Bn) !== 0) {
        hn.add(r);
        continue;
      }
      var u = (o & ye) === 0;
      if (u && de(r, t), (o & pe) !== 0) {
        var l = (
          /** @type {Derived} */
          r
        );
        Qe?.delete(l), (o & At) === 0 && (o & qe && (r.f |= At), Bi(l, tt));
      } else u && ((o & gt) !== 0 && dt !== null && dt.add(
        /** @type {Effect} */
        r
      ), Xe(
        /** @type {Effect} */
        r
      ));
    }
}
i(Bi, "mark_reactions");
const ms = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function en(e) {
  if (typeof e != "object" || e === null || nn in e)
    return e;
  const t = gi(e);
  if (t !== Ar && t !== Cr)
    return e;
  var n = /* @__PURE__ */ new Map(), a = mi(e), s = /* @__PURE__ */ Oe(0), r = Bt, o = /* @__PURE__ */ i((d) => {
    if (Bt === r)
      return d();
    var v = $, _ = Bt;
    Ve(null), oi(r);
    var y = d();
    return Ve(v), oi(_), y;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Oe(
    /** @type {any[]} */
    e.length
  )), C && (e = /** @type {any} */
  ps(
    /** @type {any[]} */
    e
  )));
  var u = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, u = d, it(s, `${u} version`);
      for (const [v, _] of n)
        it(_, Wt(u, v));
      l = !1;
    }
  }
  return i(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Ur();
        var y = n.get(v);
        return y === void 0 ? y = o(() => {
          var w = /* @__PURE__ */ Oe(_.value);
          return n.set(v, w), C && typeof v == "string" && it(w, Wt(u, v)), w;
        }) : Le(y, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const y = o(() => /* @__PURE__ */ Oe(me));
            n.set(v, y), Nn(s), C && it(y, Wt(u, v));
          }
        } else
          Le(_, me), Nn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === nn)
          return e;
        if (C && v === Si)
          return f;
        var y = n.get(v), w = v in d;
        if (y === void 0 && (!w || tn(d, v)?.writable) && (y = o(() => {
          var p = en(w ? d[v] : me), W = /* @__PURE__ */ Oe(p);
          return C && it(W, Wt(u, v)), W;
        }), n.set(v, y)), y !== void 0) {
          var A = c(y);
          return A === me ? void 0 : A;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var y = n.get(v);
          y && (_.value = c(y));
        } else if (_ === void 0) {
          var w = n.get(v), A = w?.v;
          if (w !== void 0 && A !== me)
            return {
              enumerable: !0,
              configurable: !0,
              value: A,
              writable: !0
            };
        }
        return _;
      },
      has(d, v) {
        if (v === nn)
          return !0;
        var _ = n.get(v), y = _ !== void 0 && _.v !== me || Reflect.has(d, v);
        if (_ !== void 0 || ie !== null && (!y || tn(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var A = y ? en(d[v]) : me, p = /* @__PURE__ */ Oe(A);
            return C && it(p, Wt(u, v)), p;
          }), n.set(v, _));
          var w = c(_);
          if (w === me)
            return !1;
        }
        return y;
      },
      set(d, v, _, y) {
        var w = n.get(v), A = v in d;
        if (a && v === "length")
          for (var p = _; p < /** @type {Source<number>} */
          w.v; p += 1) {
            var W = n.get(p + "");
            W !== void 0 ? Le(W, me) : p in d && (W = o(() => /* @__PURE__ */ Oe(me)), n.set(p + "", W), C && it(W, Wt(u, p)));
          }
        if (w === void 0)
          (!A || tn(d, v)?.writable) && (w = o(() => /* @__PURE__ */ Oe(void 0)), C && it(w, Wt(u, v)), Le(w, en(_)), n.set(v, w));
        else {
          A = w.v !== me;
          var le = o(() => en(_));
          Le(w, le);
        }
        var E = Reflect.getOwnPropertyDescriptor(d, v);
        if (E?.set && E.set.call(y, _), !A) {
          if (a && typeof v == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(v);
            Number.isInteger(P) && P >= M.v && Le(M, P + 1);
          }
          Nn(s);
        }
        return !0;
      },
      ownKeys(d) {
        c(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var A = n.get(w);
          return A === void 0 || A.v !== me;
        });
        for (var [_, y] of n)
          y.v !== me && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        Br();
      }
    }
  );
}
i(en, "proxy");
function Wt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : ms.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
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
const gs = /* @__PURE__ */ new Set([
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
function ps(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return gs.has(
        /** @type {string} */
        n
      ) ? function(...r) {
        hs();
        var o = s.apply(this, r);
        return Ui(), o;
      } : s;
    }
  });
}
i(ps, "inspectable_array");
function ys() {
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
i(ys, "init_array_prototype_warnings");
var ii, za, qi, Ki;
function ws() {
  if (ii === void 0) {
    ii = window, za = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    qi = tn(t, "firstChild").get, Ki = tn(t, "nextSibling").get, $a(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $a(n) && (n.__t = void 0), C && (e.__svelte_meta = null, ys());
  }
}
i(ws, "init_operations");
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
function On(e) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(e)
  );
}
i(On, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ Et(e);
}
i(h, "child");
function mt(e, t = !1) {
  {
    var n = /* @__PURE__ */ Et(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ On(n) : n;
  }
}
i(mt, "first_child");
function b(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ On(a);
  return a;
}
i(b, "sibling");
function Es(e) {
  e.textContent = "";
}
i(Es, "clear_text_content");
function Vi() {
  return !1;
}
i(Vi, "should_defer_append");
let ri = !1;
function Ss() {
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
i(Ss, "add_form_reset_listener");
function na(e) {
  var t = $, n = ie;
  Ve(null), $e(null);
  try {
    return e();
  } finally {
    Ve(t), $e(n);
  }
}
i(na, "without_reactive_context");
function ks(e, t, n, a = n) {
  e.addEventListener(t, () => na(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), Ss();
}
i(ks, "listen_to_event_and_reset_event");
function xs(e) {
  ie === null && ($ === null && Fr(e), Rr()), Gt && Pr(e);
}
i(xs, "validate_effect");
function Ns(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
i(Ns, "push_effect");
function Ct(e, t, n) {
  var a = ie;
  if (C)
    for (; a !== null && (a.f & Bn) !== 0; )
      a = a.parent;
  a !== null && (a.f & He) !== 0 && (e |= He);
  var s = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | ye | qe,
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
      In(s), s.f |= Ha;
    } catch (u) {
      throw Ce(s), u;
    }
  else t !== null && Xe(s);
  var r = s;
  if (n && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  (r.f & gn) === 0 && (r = r.first, (e & gt) !== 0 && (e & dn) !== 0 && r !== null && (r.f |= dn)), r !== null && (r.parent = a, a !== null && Ns(r, a), $ !== null && ($.f & pe) !== 0 && (e & Yt) === 0)) {
    var o = (
      /** @type {Derived} */
      $
    );
    (o.effects ??= []).push(r);
  }
  return s;
}
i(Ct, "create_effect");
function Ua() {
  return $ !== null && !Ze;
}
i(Ua, "effect_tracking");
function Gi(e) {
  const t = Ct(Xn, null, !1);
  return de(t, he), t.teardown = e, t;
}
i(Gi, "teardown");
function Ts(e) {
  xs("$effect"), C && Kt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ie.f
  ), n = !$ && (t & nt) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      ge
    );
    (a.e ??= []).push(e);
  } else
    return Yi(e);
}
i(Ts, "user_effect");
function Yi(e) {
  return Ct(ba | Dr, e, !1);
}
i(Yi, "create_user_effect");
function Is(e) {
  Nt.ensure();
  const t = Ct(Yt | gn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Ut(t, () => {
      Ce(t), a(void 0);
    }) : (Ce(t), a(void 0));
  });
}
i(Is, "component_root");
function As(e) {
  return Ct(Zn | gn, e, !0);
}
i(As, "async_effect");
function Ji(e, t = 0) {
  return Ct(Xn | t, e, !0);
}
i(Ji, "render_effect");
function K(e, t = [], n = [], a = []) {
  cs(a, t, n, (s) => {
    Ct(Xn, () => e(...s.map(c)), !0);
  });
}
i(K, "template_effect");
function Ba(e, t = 0) {
  var n = Ct(gt | t, e, !0);
  return C && (n.dev_stack = Tn), n;
}
i(Ba, "block");
function Ue(e) {
  return Ct(nt | gn, e, !0);
}
i(Ue, "branch");
function Qi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Gt, a = $;
    si(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      si(n), Ve(a);
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
    (n.f & Yt) !== 0 ? n.parent = null : Ce(n, t), n = a;
  }
}
i(Xi, "destroy_effect_children");
function Cs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & nt) === 0 && Ce(t), t = n;
  }
}
i(Cs, "destroy_block_effect_children");
function Ce(e, t = !0) {
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
i(Ce, "destroy_effect");
function Zi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ On(e);
    e.remove(), e = n;
  }
}
i(Zi, "remove_effect_dom");
function $i(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
i($i, "unlink_effect");
function Ut(e, t, n = !0) {
  var a = [];
  er(e, a, !0);
  var s = /* @__PURE__ */ i(() => {
    n && Ce(e), t && t();
  }, "fn"), r = a.length;
  if (r > 0) {
    var o = /* @__PURE__ */ i(() => --r || s(), "check");
    for (var u of a)
      u.out(o);
  } else
    s();
}
i(Ut, "pause_effect");
function er(e, t, n) {
  if ((e.f & He) === 0) {
    e.f ^= He;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || n) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var r = s.next, o = (s.f & dn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & nt) !== 0 && (e.f & gt) !== 0;
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
  if ((e.f & He) !== 0) {
    e.f ^= He, (e.f & he) === 0 && (de(e, ye), Xe(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & dn) !== 0 || (n.f & nt) !== 0;
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
      var s = n === a ? null : /* @__PURE__ */ On(n);
      t.append(n), n = s;
    }
}
i(nr, "move_effect");
let Un = !1, Gt = !1;
function si(e) {
  Gt = e;
}
i(si, "set_is_destroying_effect");
let $ = null, Ze = !1;
function Ve(e) {
  $ = e;
}
i(Ve, "set_active_reaction");
let ie = null;
function $e(e) {
  ie = e;
}
i($e, "set_active_effect");
let Ke = null;
function ar(e) {
  $ !== null && (Ke === null ? Ke = [e] : Ke.push(e));
}
i(ar, "push_reaction_value");
let Ae = null, De = 0, Fe = null;
function Ms(e) {
  Fe = e;
}
i(Ms, "set_untracked_writes");
let ir = 1, Lt = 0, Bt = Lt;
function oi(e) {
  Bt = e;
}
i(oi, "set_update_version");
function rr() {
  return ++ir;
}
i(rr, "increment_write_version");
function Ln(e) {
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if (t & pe && (e.f &= ~At), (t & tt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var r = n[s];
      if (Ln(
        /** @type {Derived} */
        r
      ) && zi(
        /** @type {Derived} */
        r
      ), r.wv > e.wv)
        return !0;
    }
    (t & qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Qe === null && de(e, he);
  }
  return !1;
}
i(Ln, "is_dirty");
function sr(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Ke !== null && qt.call(Ke, e)))
    for (var s = 0; s < a.length; s++) {
      var r = a[s];
      (r.f & pe) !== 0 ? sr(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (n ? de(r, ye) : (r.f & he) !== 0 && de(r, tt), Xe(
        /** @type {Effect} */
        r
      ));
    }
}
i(sr, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Ae, n = De, a = Fe, s = $, r = Ke, o = ge, u = Ze, l = Bt, f = e.f;
  Ae = /** @type {null | Value[]} */
  null, De = 0, Fe = null, $ = (f & (nt | Yt)) === 0 ? e : null, Ke = null, vn(e.ctx), Ze = !1, Bt = ++Lt, e.ac !== null && (na(() => {
    e.ac.abort($t);
  }), e.ac = null);
  try {
    e.f |= ma;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, y = se?.is_fork;
    if (Ae !== null) {
      var w;
      if (y || Kn(e, De), _ !== null && De > 0)
        for (_.length = De + Ae.length, w = 0; w < Ae.length; w++)
          _[De + w] = Ae[w];
      else
        e.deps = _ = Ae;
      if (Ua() && (e.f & qe) !== 0)
        for (w = De; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !y && _ !== null && De < _.length && (Kn(e, De), _.length = De);
    if (Ai() && Fe !== null && !Ze && _ !== null && (e.f & (pe | tt | ye)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Fe.length; w++)
        sr(
          Fe[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Lt++, s.deps !== null)
        for (let A = 0; A < n; A += 1)
          s.deps[A].rv = Lt;
      if (t !== null)
        for (const A of t)
          A.rv = Lt;
      Fe !== null && (a === null ? a = Fe : a.push(.../** @type {Source[]} */
      Fe));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), v;
  } catch (A) {
    return Mi(A);
  } finally {
    e.f ^= ma, Ae = t, De = n, Fe = a, $ = s, Ke = r, vn(o), Ze = u, Bt = l;
  }
}
i(Ia, "update_reaction");
function Ds(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Tr.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ae === null || !qt.call(Ae, t))) {
    var r = (
      /** @type {Derived} */
      t
    );
    (r.f & qe) !== 0 && (r.f ^= qe, r.f &= ~At), Pa(r), Ta(r), Kn(r, 0);
  }
}
i(Ds, "remove_reaction");
function Kn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Ds(e, n[a]);
}
i(Kn, "remove_reactions");
function In(e) {
  var t = e.f;
  if ((t & St) === 0) {
    de(e, he);
    var n = ie, a = Un;
    if (ie = e, Un = !0, C) {
      var s = Wn;
      ti(e.component_function);
      var r = (
        /** @type {any} */
        Tn
      );
      qn(e.dev_stack ?? Tn);
    }
    try {
      (t & (gt | wi)) !== 0 ? Cs(e) : Xi(e), Qi(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ir;
      var u;
      C && Jr && (e.f & ye) !== 0 && e.deps;
    } finally {
      Un = a, ie = n, C && (ti(s), qn(r));
    }
  }
}
i(In, "update_effect");
async function Ws() {
  await Promise.resolve(), as();
}
i(Ws, "tick");
function c(e) {
  var t = e.f, n = (t & pe) !== 0;
  if ($ !== null && !Ze) {
    var a = ie !== null && (ie.f & St) !== 0;
    if (!a && (Ke === null || !qt.call(Ke, e))) {
      var s = $.deps;
      if (($.f & ma) !== 0)
        e.rv < Lt && (e.rv = Lt, Ae === null && s !== null && s[De] === e ? De++ : Ae === null ? Ae = [e] : Ae.push(e));
      else {
        ($.deps ??= []).push(e);
        var r = e.reactions;
        r === null ? e.reactions = [$] : qt.call(r, $) || r.push($);
      }
    }
  }
  if (C && fs.delete(e), Gt && Tt.has(e))
    return Tt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Gt) {
      var u = o.v;
      return ((o.f & he) === 0 && o.reactions !== null || lr(o)) && (u = Fa(o)), Tt.set(o, u), u;
    }
    var l = (o.f & qe) === 0 && !Ze && $ !== null && (Un || ($.f & qe) !== 0), f = o.deps === null;
    Ln(o) && (l && (o.f |= qe), zi(o)), l && !f && or(o);
  }
  if (Qe?.has(e))
    return Qe.get(e);
  if ((e.f & kt) !== 0)
    throw e.v;
  return e.v;
}
i(c, "get");
function or(e) {
  if (e.deps !== null) {
    e.f |= qe;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & pe) !== 0 && (t.f & qe) === 0 && or(
        /** @type {Derived} */
        t
      );
  }
}
i(or, "reconnect");
function lr(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & pe) !== 0 && lr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
i(lr, "depends_on_old_values");
function cr(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
i(cr, "untrack");
const ur = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Os(e, t, n, a = {}) {
  function s(r) {
    if (a.capture || Sn.call(t, r), !r.cancelBubble)
      return na(() => n?.call(this, r));
  }
  return i(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
i(Os, "create_event");
function vt(e, t, n, a, s) {
  var r = { capture: a, passive: s }, o = Os(e, t, n, r);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Gi(() => {
    t.removeEventListener(e, o, r);
  });
}
i(vt, "event");
function Me(e) {
  for (var t = 0; t < e.length; t++)
    ur.add(e[t]);
  for (var n of Aa)
    n(e);
}
i(Me, "delegate");
let li = null;
function Sn(e) {
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
    Kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || n;
      }
    });
    var d = $, v = ie;
    Ve(null), $e(null);
    try {
      for (var _, y = []; r !== null; ) {
        var w = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var A = r["__" + a];
          A != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === r) && A.call(r, e);
        } catch (p) {
          _ ? y.push(p) : _ = p;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        r = w;
      }
      if (_) {
        for (let p of y)
          queueMicrotask(() => {
            throw p;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ve(d), $e(v);
    }
  }
}
i(Sn, "handle_event_propagation");
function fr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
i(fr, "create_fragment_from_html");
function Vn(e, t) {
  var n = (
    /** @type {Effect} */
    ie
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
const Ls = ["touchstart", "touchmove"];
function Hs(e) {
  return Ls.includes(e);
}
i(Hs, "is_passive_event");
function D(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
i(D, "set_text");
function Ps(e, t) {
  return Rs(e, t);
}
i(Ps, "mount");
const Xt = /* @__PURE__ */ new Map();
function Rs(e, { target: t, anchor: n, props: a = {}, events: s, context: r, intro: o = !0 }) {
  ws();
  var u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ i((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var y = v[_];
      if (!u.has(y)) {
        u.add(y);
        var w = Hs(y);
        t.addEventListener(y, Sn, { passive: w });
        var A = Xt.get(y);
        A === void 0 ? (document.addEventListener(y, Sn, { passive: w }), Xt.set(y, 1)) : Xt.set(y, A + 1);
      }
    }
  }, "event_handle");
  l(Qn(ur)), Aa.add(l);
  var f = void 0, d = Is(() => {
    var v = n ?? t.appendChild(It());
    return ss(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ i(() => {
        }, "pending")
      },
      (_) => {
        ke({});
        var y = (
          /** @type {ComponentContext} */
          ge
        );
        r && (y.c = r), s && (a.$$events = s), f = e(_, a) || {}, xe();
      }
    ), () => {
      for (var _ of u) {
        t.removeEventListener(_, Sn);
        var y = (
          /** @type {number} */
          Xt.get(_)
        );
        --y === 0 ? (document.removeEventListener(_, Sn), Xt.delete(_)) : Xt.set(_, y);
      }
      Aa.delete(l), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Ca.set(f, d), f;
}
i(Rs, "_mount");
let Ca = /* @__PURE__ */ new WeakMap();
function Fs(e, t) {
  const n = Ca.get(e);
  return n ? (Ca.delete(e), n(t)) : (C && (nn in e ? Gr() : Vr()), Promise.resolve());
}
i(Fs, "unmount");
var Je, ut, We, zt, Mn, Dn, Jn;
const Ga = class Ga {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Re(this, "anchor");
    /** @type {Map<Batch, Key>} */
    B(this, Je, /* @__PURE__ */ new Map());
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
    B(this, ut, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    B(this, We, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    B(this, zt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    B(this, Mn, !0);
    B(this, Dn, /* @__PURE__ */ i(() => {
      var t = (
        /** @type {Batch} */
        se
      );
      if (m(this, Je).has(t)) {
        var n = (
          /** @type {Key} */
          m(this, Je).get(t)
        ), a = m(this, ut).get(n);
        if (a)
          qa(a), m(this, zt).delete(n);
        else {
          var s = m(this, We).get(n);
          s && (m(this, ut).set(n, s.effect), m(this, We).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [r, o] of m(this, Je)) {
          if (m(this, Je).delete(r), r === t)
            break;
          const u = m(this, We).get(o);
          u && (Ce(u.effect), m(this, We).delete(o));
        }
        for (const [r, o] of m(this, ut)) {
          if (r === n || m(this, zt).has(r)) continue;
          const u = /* @__PURE__ */ i(() => {
            if (Array.from(m(this, Je).values()).includes(r)) {
              var f = document.createDocumentFragment();
              nr(o, f), f.append(It()), m(this, We).set(r, { effect: o, fragment: f });
            } else
              Ce(o);
            m(this, zt).delete(r), m(this, ut).delete(r);
          }, "on_destroy");
          m(this, Mn) || !a ? (m(this, zt).add(r), Ut(o, u, !1)) : u();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    B(this, Jn, /* @__PURE__ */ i((t) => {
      m(this, Je).delete(t);
      const n = Array.from(m(this, Je).values());
      for (const [a, s] of m(this, We))
        n.includes(a) || (Ce(s.effect), m(this, We).delete(a));
    }, "#discard"));
    this.anchor = t, q(this, Mn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var a = (
      /** @type {Batch} */
      se
    ), s = Vi();
    if (n && !m(this, ut).has(t) && !m(this, We).has(t))
      if (s) {
        var r = document.createDocumentFragment(), o = It();
        r.append(o), m(this, We).set(t, {
          effect: Ue(() => n(o)),
          fragment: r
        });
      } else
        m(this, ut).set(
          t,
          Ue(() => n(this.anchor))
        );
    if (m(this, Je).set(a, t), s) {
      for (const [u, l] of m(this, ut))
        u === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [u, l] of m(this, We))
        u === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(m(this, Dn)), a.ondiscard(m(this, Jn));
    } else
      m(this, Dn).call(this);
  }
};
Je = new WeakMap(), ut = new WeakMap(), We = new WeakMap(), zt = new WeakMap(), Mn = new WeakMap(), Dn = new WeakMap(), Jn = new WeakMap(), i(Ga, "BranchManager");
let Ma = Ga;
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
          zr(t);
        }, "get"),
        set: /* @__PURE__ */ i((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var _l = e;
  i(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function ee(e, t, n = !1) {
  var a = new Ma(e), s = n ? dn : 0;
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
function Ge(e, t) {
  return t;
}
i(Ge, "index");
function js(e, t, n) {
  for (var a = [], s = t.length, r, o = t.length, u = 0; u < s; u++) {
    let v = t[u];
    Ut(
      v,
      () => {
        if (r) {
          if (r.pending.delete(v), r.done.add(v), r.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Da(Qn(r.done)), _.delete(r), _.size === 0 && (e.outrogroups = null);
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
      Es(d), d.append(f), e.items.clear();
    }
    Da(t, !l);
  } else
    r = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
}
i(js, "pause_effects");
function Da(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ce(e[n], t);
}
i(Da, "destroy_effects");
var ci;
function Ye(e, t, n, a, s, r = null) {
  var o = e, u = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(It());
  }
  var d = null, v = /* @__PURE__ */ vs(() => {
    var W = n();
    return mi(W) ? W : W == null ? [] : Qn(W);
  }), _, y = !0;
  function w() {
    p.fallback = d, zs(p, _, o, t, a), d !== null && (_.length === 0 ? (d.f & bt) === 0 ? qa(d) : (d.f ^= bt, kn(d, null, o)) : Ut(d, () => {
      d = null;
    }));
  }
  i(w, "commit");
  var A = Ba(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var W = _.length, le = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      se
    ), M = Vi(), P = 0; P < W; P += 1) {
      var T = _[P], g = a(T, P), k = y ? null : u.get(g);
      k ? (k.v && bn(k.v, T), k.i && bn(k.i, P), M && E.unskip_effect(k.e)) : (k = Us(
        u,
        y ? o : ci ??= It(),
        T,
        g,
        P,
        s,
        t,
        n
      ), y || (k.e.f |= bt), u.set(g, k)), le.add(g);
    }
    if (W === 0 && r && !d && (y ? d = Ue(() => r(o)) : (d = Ue(() => r(ci ??= It())), d.f |= bt)), W > le.size && (C ? Bs(_, a) : ki("", "", "")), !y)
      if (M) {
        for (const [I, R] of u)
          le.has(I) || E.skip_effect(R.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    c(v);
  }), p = { effect: A, items: u, outrogroups: null, fallback: d };
  y = !1;
}
i(Ye, "each");
function En(e) {
  for (; e !== null && (e.f & nt) === 0; )
    e = e.next;
  return e;
}
i(En, "skip_to_branch");
function zs(e, t, n, a, s) {
  var r = (a & 8) !== 0, o = t.length, u = e.items, l = En(e.effect.first), f, d = null, v, _ = [], y = [], w, A, p, W;
  if (r)
    for (W = 0; W < o; W += 1)
      w = t[W], A = s(w, W), p = /** @type {EachItem} */
      u.get(A).e, (p.f & bt) === 0 && (p.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(p));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], A = s(w, W), p = /** @type {EachItem} */
    u.get(A).e, e.outrogroups !== null)
      for (const R of e.outrogroups)
        R.pending.delete(p), R.done.delete(p);
    if ((p.f & bt) !== 0)
      if (p.f ^= bt, p === l)
        kn(p, null, n);
      else {
        var le = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), pt(e, d, p), pt(e, p, le), kn(p, le, n), d = p, _ = [], y = [], l = En(d.next);
        continue;
      }
    if ((p.f & He) !== 0 && (qa(p), r && (p.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (f !== void 0 && f.has(p)) {
        if (_.length < y.length) {
          var E = y[0], M;
          d = E.prev;
          var P = _[0], T = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            kn(_[M], E, n);
          for (M = 0; M < y.length; M += 1)
            f.delete(y[M]);
          pt(e, P.prev, T.next), pt(e, d, P), pt(e, T, E), l = E, d = T, W -= 1, _ = [], y = [];
        } else
          f.delete(p), kn(p, l, n), pt(e, p.prev, p.next), pt(e, p, d === null ? e.effect.first : d.next), pt(e, d, p), d = p;
        continue;
      }
      for (_ = [], y = []; l !== null && l !== p; )
        (f ??= /* @__PURE__ */ new Set()).add(l), y.push(l), l = En(l.next);
      if (l === null)
        continue;
    }
    (p.f & bt) === 0 && _.push(p), d = p, l = En(p.next);
  }
  if (e.outrogroups !== null) {
    for (const R of e.outrogroups)
      R.pending.size === 0 && (Da(Qn(R.done)), e.outrogroups?.delete(R));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var g = [];
    if (f !== void 0)
      for (p of f)
        (p.f & He) === 0 && g.push(p);
    for (; l !== null; )
      (l.f & He) === 0 && l !== e.fallback && g.push(l), l = En(l.next);
    var k = g.length;
    if (k > 0) {
      var I = (a & 4) !== 0 && o === 0 ? n : null;
      if (r) {
        for (W = 0; W < k; W += 1)
          g[W].nodes?.a?.measure();
        for (W = 0; W < k; W += 1)
          g[W].nodes?.a?.fix();
      }
      js(e, g, I);
    }
  }
  r && xt(() => {
    if (v !== void 0)
      for (p of v)
        p.nodes?.a?.apply();
  });
}
i(zs, "reconcile");
function Us(e, t, n, a, s, r, o, u) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ bs(n, !1, !1) : Vt(n) : null, f = (o & 2) !== 0 ? Vt(s) : null;
  return C && l && (l.trace = () => {
    u()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Ue(() => (r(t, l ?? n, f ?? s, u), () => {
      e.delete(a);
    }))
  };
}
i(Us, "create_item");
function kn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, r = t && (t.f & bt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(a)
      );
      if (r.before(a), a === s)
        return;
      a = o;
    }
}
i(kn, "move");
function pt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
i(pt, "link");
function Bs(e, t) {
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
i(Bs, "validate_each_keys");
function qs(e, t, n = !1, a = !1, s = !1) {
  var r = e, o = "";
  K(() => {
    var u = (
      /** @type {Effect} */
      ie
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
i(qs, "html");
const fi = [...` 	
\r\f \v\uFEFF`];
function Ks(e, t, n) {
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
i(Ks, "to_class");
function Vs(e, t) {
  return e == null ? null : String(e);
}
i(Vs, "to_style");
function et(e, t, n, a, s, r) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var u = Ks(n, a, r);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = n;
  } else if (r && s !== r)
    for (var l in r) {
      var f = !!r[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return r;
}
i(et, "set_class");
function Fn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var r = Vs(t);
    r == null ? e.removeAttribute("style") : e.style.cssText = r, e.__style = t;
  }
  return a;
}
i(Fn, "set_style");
const Gs = /* @__PURE__ */ Symbol("is custom element"), Ys = /* @__PURE__ */ Symbol("is html");
function Be(e, t) {
  var n = dr(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
i(Be, "set_value");
function N(e, t, n, a) {
  var s = dr(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Wr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Js(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
i(N, "set_attribute");
function dr(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Gs]: e.nodeName.includes("-"),
      [Ys]: e.namespaceURI === Nr
    }
  );
}
i(dr, "get_attributes");
var di = /* @__PURE__ */ new Map();
function Js(e) {
  var t = e.getAttribute("is") || e.nodeName, n = di.get(t);
  if (n) return n;
  di.set(t, n = []);
  for (var a, s = e, r = Element.prototype; r !== s; ) {
    a = Ir(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = gi(s);
  }
  return n;
}
i(Js, "get_setters");
function vr(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  ks(e, "input", async (s) => {
    C && e.type === "checkbox" && ei();
    var r = s ? e.defaultValue : e.value;
    if (r = _a(e) ? ha(r) : r, n(r), se !== null && a.add(se), await Ws(), r !== (r = t())) {
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
  cr(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), se !== null && a.add(se)), Ji(() => {
    C && e.type === "checkbox" && ei();
    var s = t();
    if (e === document.activeElement) {
      var r = (
        /** @type {Batch} */
        pa ?? se
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
function Qs(e, t) {
  return {
    subscribe: Xs(e, t).subscribe
  };
}
i(Qs, "readable");
function Xs(e, t = ca) {
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
i(Xs, "writable");
function Zs(e) {
  var n, a, s;
  const r = class r extends e {
    constructor() {
      super(...arguments);
      B(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: v } = d;
          return v && l.push(v.toUpperCase()), l;
        },
        []
      ));
      B(this, a, /* @__PURE__ */ Oe(en({})));
      B(this, s, {});
    }
    get $state() {
      return c(m(this, a));
    }
    set $state(l) {
      Le(m(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && q(this, s, Ps(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Fs(m(this, s), { outro: !0 });
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
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), i(r, "SvelteApplication"), Re(r, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = r;
  return t;
}
i(Zs, "SvelteApplicationMixin");
const $s = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add($s);
function x(e) {
  return game.i18n?.localize(e) ?? e;
}
i(x, "localize");
function mn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
i(mn, "format");
var eo = /* @__PURE__ */ H("<span> </span>"), to = /* @__PURE__ */ H('<span style="color: var(--nos-text-secondary, #888)">—</span>'), no = /* @__PURE__ */ H('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function ao(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ i((I) => t.actor.update({ img: I }), "callback")
    }).render(!0);
  }
  i(a, "pickPortrait");
  let s = /* @__PURE__ */ F(() => {
    const I = Object.keys(t.hitDiceData.bySize);
    return I.length === 0 ? "—" : I.length === 1 ? `d${I[0]}` : I.map((R) => `d${R}`).join("/");
  });
  var r = no(), o = h(r);
  o.__click = a;
  var u = h(o), l = b(o, 2), f = h(l), d = h(f), v = b(f, 2);
  v.__change = ({ target: I }) => t.actor.update({ name: I.value });
  var _ = b(l, 2), y = h(_), w = h(y), A = b(y, 2), p = h(A);
  {
    var W = /* @__PURE__ */ i((I) => {
      var R = eo(), G = h(R);
      K(() => D(G, t.metaData)), O(I, R);
    }, "consequent"), le = /* @__PURE__ */ i((I) => {
      var R = to();
      O(I, R);
    }, "alternate");
    ee(p, (I) => {
      t.metaData ? I(W) : I(le, !1);
    });
  }
  var E = b(p, 2);
  E.__click = () => t.actor.editMetadata();
  var M = b(_, 2), P = h(M), T = h(P), g = b(P, 2), k = h(g);
  K(
    (I, R, G, j, L) => {
      N(u, "src", c(n)), N(u, "alt", t.actor.reactive.name), D(d, I), Be(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, D(w, R), N(E, "aria-label", G), N(E, "data-tooltip", j), E.disabled = !t.editingEnabled, D(T, L), D(k, c(s));
    },
    [
      () => x("NWS.CharacterName"),
      () => x("NWS.AncestryClassLevel"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.HitDie")
    ]
  ), O(e, r), xe();
}
i(ao, "HeaderRow");
Me(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
i(Ka, "formatModifier");
var io = /* @__PURE__ */ H('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ro(e, t) {
  ke(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ F(() => x(n[t.abilityKey])), s = /* @__PURE__ */ F(() => mn("NWS.RollCheck", { name: c(a) })), r = /* @__PURE__ */ F(() => mn("NWS.RollSave", { name: c(a) }));
  var o = io(), u = h(o);
  let l;
  u.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = b(u, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), v = h(d), _ = b(f, 2), y = h(_);
  K(
    (w) => {
      l = et(u, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), N(u, "data-tooltip", c(r)), N(u, "aria-label", c(r)), N(f, "data-tooltip", c(s)), N(f, "aria-label", c(s)), D(v, w), D(y, c(a));
    },
    [() => Ka(t.ability.mod)]
  ), O(e, o), xe();
}
i(ro, "AbilityBox");
Me(["click"]);
var so = /* @__PURE__ */ H('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), oo = /* @__PURE__ */ H('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function lo(e, t) {
  ke(t, !0);
  var n = oo(), a = h(n), s = h(a), r = b(a, 2);
  Ye(r, 21, () => ({ length: t.wounds.max }), Ge, (o, u, l) => {
    var f = so();
    let d;
    f.__click = () => t.toggleWounds(l + 1), K(
      (v, _) => {
        d = et(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), N(f, "data-tooltip", v), N(f, "aria-label", _);
      },
      [
        () => mn("NWS.ToggleWound", { n: l + 1 }),
        () => mn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), K((o) => D(s, o), [() => x("NWS.Wounds")]), O(e, n), xe();
}
i(lo, "WoundTracker");
Me(["click"]);
var co = /* @__PURE__ */ H('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), uo = /* @__PURE__ */ H('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), fo = /* @__PURE__ */ H('<i class="fa-solid fa-heart"></i>'), vo = /* @__PURE__ */ H('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function _o(e, t) {
  ke(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.hp), r = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.movement);
  var l = vo(), f = h(l), d = h(f);
  Ye(d, 17, () => n, Ge, (ue, Pe) => {
    ro(ue, {
      get abilityKey() {
        return c(Pe);
      },
      get ability() {
        return t.actor.reactive.system.abilities[c(Pe)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[c(Pe)];
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
    var _ = /* @__PURE__ */ i((ue) => {
      var Pe = co(), wn = mt(Pe);
      wn.__click = () => t.actor.configureSavingThrows();
      var Hn = b(wn, 2);
      Hn.__click = () => t.actor.configureAbilityScores(), K(
        (sa, oa) => {
          N(wn, "data-tooltip", sa), N(Hn, "data-tooltip", oa);
        },
        [
          () => x("NWS.ConfigureSavingThrows"),
          () => x("NWS.ConfigureAbilityScores")
        ]
      ), O(ue, Pe);
    }, "consequent");
    ee(v, (ue) => {
      t.editingEnabled && ue(_);
    });
  }
  var y = b(f, 2), w = h(y), A = h(w), p = h(A), W = b(h(p), 2), le = h(W), E = b(W, 2), M = h(E), P = b(p, 2), T = b(h(P), 2), g = h(T), k = b(T, 2);
  k.__change = ({ target: ue }) => t.updateTempHP(Number(ue.value));
  var I = b(A, 2);
  let R;
  var G = h(I), j = h(G), L = h(j);
  {
    var V = /* @__PURE__ */ i((ue) => {
      var Pe = uo();
      O(ue, Pe);
    }, "consequent_1"), U = /* @__PURE__ */ i((ue) => {
      var Pe = fo();
      O(ue, Pe);
    }, "alternate");
    ee(L, (ue) => {
      t.isBloodied ? ue(V) : ue(U, !1);
    });
  }
  var te = b(j, 2), X = h(te), oe = b(te, 2), Y = h(oe);
  Y.__change = ({ target: ue }) => t.updateCurrentHP(Number(ue.value));
  var Q = b(Y, 4);
  Q.__change = ({ target: ue }) => t.updateMaxHP(Number(ue.value));
  var re = b(oe, 2);
  re.__click = () => t.actor.configureHitPoints();
  var fe = b(G, 2), ne = h(fe), we = h(ne), ae = b(ne, 2), S = h(ae), z = b(ae, 2), J = h(z);
  J.__change = ({ target: ue }) => t.updateCurrentMana(Number(ue.value));
  var ce = b(J, 4);
  ce.__change = ({ target: ue }) => t.updateMaxMana(Number(ue.value));
  var Z = b(z, 2);
  Z.__click = () => t.actor.configureMana();
  var ve = b(I, 2);
  ve.__click = () => t.rollHitDice();
  var Jt = b(h(ve), 2), Qt = h(Jt), Mt = b(Jt, 2), _e = h(Mt), Ee = b(Mt, 2);
  Ee.__click = (ue) => {
    ue.stopPropagation(), t.actor.configureHitDice();
  };
  var at = b(ve, 2), Ne = h(at);
  Ne.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Dt = b(h(Ne), 2), pn = h(Dt), yn = b(Dt, 2), aa = h(yn), ia = b(Ne, 2), Ya = b(h(ia), 2), _r = h(Ya), Ja = b(Ya, 2), hr = h(Ja), ra = b(Ja, 2);
  ra.__click = () => t.actor.configureMovement();
  var br = b(y, 2);
  lo(br, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), K(
    (ue, Pe, wn, Hn, sa, oa, mr, gr, pr, yr, wr, Er, Sr) => {
      D(le, ue), D(M, c(r).value), D(g, Pe), Be(k, c(s).temp ?? 0), R = et(I, 1, "nos-combat__pair", null, R, { "nos-hp--bloodied": t.isBloodied }), D(X, wn), Be(Y, c(s).value), Be(Q, c(s).max), Q.disabled = !t.editingEnabled, N(re, "data-tooltip", Hn), re.disabled = !t.editingEnabled, Fn(we, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Fn(ae, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(S, sa), Be(J, t.mana?.current ?? 0), Fn(J, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Be(ce, t.mana?.max || t.mana?.baseMax || 0), ce.disabled = !t.editingEnabled, Fn(ce, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), N(Z, "data-tooltip", oa), Z.disabled = !t.editingEnabled, D(Qt, mr), D(_e, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), N(Ee, "data-tooltip", gr), Ee.disabled = !t.editingEnabled, N(Ne, "data-tooltip", pr), D(pn, yr), D(aa, wr), D(_r, Er), D(hr, c(u).walk), N(ra, "data-tooltip", Sr), ra.disabled = !t.editingEnabled;
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
  ), O(e, l), xe();
}
i(_o, "StatsRow");
Me(["click", "change"]);
var ho = /* @__PURE__ */ H('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function bo(e, t) {
  ke(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let r = /* @__PURE__ */ F(() => n[t.skillKey]), o = /* @__PURE__ */ F(() => x(a[c(r)])), u = /* @__PURE__ */ F(() => x(s[t.skillKey]));
  var l = ho();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = b(f, 2), _ = h(v), y = b(v, 2), w = h(y);
  K(
    (A, p) => {
      N(l, "data-tooltip", A), D(d, c(o)), D(_, p), D(w, c(u));
    },
    [
      () => mn("NWS.RollSkill", { name: c(u) }),
      () => Ka(t.skill.mod)
    ]
  ), O(e, l), xe();
}
i(bo, "SkillCell");
Me(["click"]);
var mo = /* @__PURE__ */ H('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), go = /* @__PURE__ */ H('<section class="nos-skills-row"><!> <!></section>');
function po(e, t) {
  ke(t, !0);
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
  var a = go(), s = h(a);
  Ye(s, 17, () => n, Ge, (u, l) => {
    bo(u, {
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
      var l = mo();
      l.__click = () => t.actor.configureSkills(), K((f) => N(l, "data-tooltip", f), [() => x("NWS.ConfigureSkills")]), O(u, l);
    }, "consequent");
    ee(r, (u) => {
      t.editingEnabled && u(o);
    });
  }
  O(e, a), xe();
}
i(po, "SkillsRow");
Me(["click"]);
var yo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), So = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), ko = /* @__PURE__ */ H('<div class="nos-feature-row"><!> <!></div>'), xo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), No = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), To = /* @__PURE__ */ H('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Io = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Ao = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Co = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Mo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Do = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Wo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Oo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Lo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ho = /* @__PURE__ */ H("<!> <!> <!> <!> <!>", 1);
function vi(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), r = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), u = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
  function l(g) {
    t.actor.activateItem(g);
  }
  i(l, "useItem");
  function f(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  i(f, "configureItem");
  function d(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  i(d, "deleteItem");
  function v(g, k) {
    const I = { type: "Item", uuid: k.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(I));
  }
  i(v, "onDragStart");
  var _ = Ho(), y = mt(_);
  {
    var w = /* @__PURE__ */ i((g) => {
      var k = ko(), I = h(k);
      {
        var R = /* @__PURE__ */ i((L) => {
          var V = wo(), U = h(V), te = h(U), X = b(U, 2), oe = h(X), Y = b(oe, 2);
          Y.__click = () => f(c(s).id);
          var Q = h(Y), re = b(Y, 2);
          {
            var fe = /* @__PURE__ */ i((ne) => {
              var we = yo(), ae = h(we);
              ae.__click = () => f(c(s).id);
              var S = b(ae, 2);
              S.__click = () => d(c(s).id), O(ne, we);
            }, "consequent");
            ee(re, (ne) => {
              t.editingEnabled && ne(fe);
            });
          }
          K(
            (ne) => {
              D(te, ne), N(X, "data-tooltip", c(s).system?.description || ""), N(oe, "src", c(s).img), N(oe, "alt", c(s).name), D(Q, c(s).name);
            },
            [() => x("NWS.Ancestry")]
          ), vt("dragstart", X, (ne) => v(ne, c(s))), O(L, V);
        }, "consequent_1");
        ee(I, (L) => {
          c(s) && L(R);
        });
      }
      var G = b(I, 2);
      {
        var j = /* @__PURE__ */ i((L) => {
          var V = So(), U = h(V), te = h(U), X = b(U, 2), oe = h(X), Y = b(oe, 2);
          Y.__click = () => f(c(r).id);
          var Q = h(Y), re = b(Y, 2);
          {
            var fe = /* @__PURE__ */ i((ne) => {
              var we = Eo(), ae = h(we);
              ae.__click = () => f(c(r).id);
              var S = b(ae, 2);
              S.__click = () => d(c(r).id), O(ne, we);
            }, "consequent_2");
            ee(re, (ne) => {
              t.editingEnabled && ne(fe);
            });
          }
          K(
            (ne) => {
              D(te, ne), N(X, "data-tooltip", c(r).system?.description || ""), N(oe, "src", c(r).img), N(oe, "alt", c(r).name), D(Q, c(r).name);
            },
            [() => x("NWS.Background")]
          ), vt("dragstart", X, (ne) => v(ne, c(r))), O(L, V);
        }, "consequent_3");
        ee(G, (L) => {
          c(r) && L(j);
        });
      }
      O(g, k);
    }, "consequent_4");
    ee(y, (g) => {
      (c(s) || c(r)) && g(w);
    });
  }
  var A = b(y, 2);
  {
    var p = /* @__PURE__ */ i((g) => {
      var k = Io(), I = h(k), R = h(I), G = b(I, 2), j = h(G), L = b(j, 2);
      L.__click = () => f(c(o).id);
      var V = h(L), U = b(L, 2);
      {
        var te = /* @__PURE__ */ i((Y) => {
          var Q = xo(), re = h(Q);
          re.__click = () => f(c(o).id);
          var fe = b(re, 2);
          fe.__click = () => d(c(o).id), O(Y, Q);
        }, "consequent_5");
        ee(U, (Y) => {
          t.editingEnabled && Y(te);
        });
      }
      var X = b(G, 2);
      {
        var oe = /* @__PURE__ */ i((Y) => {
          var Q = To(), re = h(Q), fe = b(re, 2);
          fe.__click = () => f(c(u).id);
          var ne = h(fe), we = b(fe, 2);
          {
            var ae = /* @__PURE__ */ i((S) => {
              var z = No(), J = h(z);
              J.__click = () => f(c(u).id);
              var ce = b(J, 2);
              ce.__click = () => d(c(u).id), O(S, z);
            }, "consequent_6");
            ee(we, (S) => {
              t.editingEnabled && S(ae);
            });
          }
          K(() => {
            N(re, "src", c(u).img), N(re, "alt", c(u).name), D(ne, c(u).name);
          }), vt("dragstart", Q, (S) => v(S, c(u))), O(Y, Q);
        }, "consequent_7");
        ee(X, (Y) => {
          c(u) && Y(oe);
        });
      }
      K(
        (Y, Q) => {
          D(R, Y), N(j, "src", c(o).img), N(j, "alt", c(o).name), D(V, `${c(o).name ?? ""} (${Q ?? ""} ${c(o).system.classLevel ?? ""})`);
        },
        [() => x("NWS.Class"), () => x("NWS.Level")]
      ), vt("dragstart", G, (Y) => v(Y, c(o))), O(g, k);
    }, "consequent_8");
    ee(A, (g) => {
      c(o) && g(p);
    });
  }
  var W = b(A, 2);
  {
    var le = /* @__PURE__ */ i((g) => {
      var k = Mo(), I = h(k), R = h(I), G = b(I, 2);
      Ye(G, 21, () => c(n), Ge, (j, L) => {
        var V = Co(), U = h(V), te = b(U, 2);
        te.__click = () => l(c(L).id);
        var X = h(te), oe = b(te, 2);
        {
          var Y = /* @__PURE__ */ i((Q) => {
            var re = Ao(), fe = h(re);
            fe.__click = () => f(c(L).id);
            var ne = b(fe, 2);
            ne.__click = () => d(c(L).id), O(Q, re);
          }, "consequent_9");
          ee(oe, (Q) => {
            t.editingEnabled && Q(Y);
          });
        }
        K(() => {
          N(V, "data-tooltip", c(L).system?.description || ""), N(U, "src", c(L).img), N(U, "alt", c(L).name), D(X, c(L).name);
        }), vt("dragstart", V, (Q) => v(Q, c(L))), O(j, V);
      }), K((j) => D(R, j), [() => x("NWS.Features")]), O(g, k);
    }, "consequent_10");
    ee(W, (g) => {
      c(n).length > 0 && g(le);
    });
  }
  var E = b(W, 2);
  {
    var M = /* @__PURE__ */ i((g) => {
      var k = Oo(), I = h(k), R = h(I), G = b(I, 2);
      Ye(G, 21, () => c(a), Ge, (j, L) => {
        var V = Wo(), U = h(V), te = b(U, 2);
        te.__click = () => l(c(L).id);
        var X = h(te), oe = b(te, 2);
        {
          var Y = /* @__PURE__ */ i((Q) => {
            var re = Do(), fe = h(re);
            fe.__click = () => f(c(L).id);
            var ne = b(fe, 2);
            ne.__click = () => d(c(L).id), O(Q, re);
          }, "consequent_11");
          ee(oe, (Q) => {
            t.editingEnabled && Q(Y);
          });
        }
        K(() => {
          N(V, "data-tooltip", c(L).system?.description || ""), N(U, "src", c(L).img), N(U, "alt", c(L).name), D(X, c(L).name);
        }), vt("dragstart", V, (Q) => v(Q, c(L))), O(j, V);
      }), K((j) => D(R, j), [() => x("NWS.Boons")]), O(g, k);
    }, "consequent_12");
    ee(E, (g) => {
      c(a).length > 0 && g(M);
    });
  }
  var P = b(E, 2);
  {
    var T = /* @__PURE__ */ i((g) => {
      var k = Lo(), I = h(k);
      K((R) => D(I, R), [() => x("NWS.DropFeaturesHere")]), O(g, k);
    }, "consequent_13");
    ee(P, (g) => {
      !c(s) && !c(r) && !c(o) && c(n).length === 0 && c(a).length === 0 && g(T);
    });
  }
  O(e, _), xe();
}
i(vi, "FeaturesTab");
Me(["click"]);
var Po = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ro = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Fo = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), jo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), zo = /* @__PURE__ */ H('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), Uo = /* @__PURE__ */ H('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Bo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), qo = /* @__PURE__ */ H('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function _i(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ Oe(""), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, M) => E.name.localeCompare(M.name))), s = /* @__PURE__ */ F(() => c(n) ? c(a).filter((E) => E.name.toLowerCase().includes(c(n).toLowerCase())) : c(a)), r = /* @__PURE__ */ F(() => {
    const E = {};
    for (const M of c(s)) {
      const P = M.system?.tier ?? 0, T = M.system?.isUtility ?? !1, g = T ? "_utility" : `_tier_${P}`, k = T ? x("NWS.Utility") : mn("NWS.Tier", { n: P });
      E[g] ??= { label: k, spells: [] }, E[g].spells.push(M);
    }
    return Object.entries(E).sort(([M], [P]) => {
      if (M === "_utility") return 1;
      if (P === "_utility") return -1;
      const T = parseInt(M.replace("_tier_", "")), g = parseInt(P.replace("_tier_", ""));
      return T - g;
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
  function d(E, M) {
    const P = { type: "Item", uuid: M.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(P));
  }
  i(d, "onDragStart");
  var v = qo(), _ = mt(v), y = b(h(_), 2), w = b(y, 2);
  {
    var A = /* @__PURE__ */ i((E) => {
      var M = Po();
      M.__click = l;
      var P = b(h(M));
      K((T) => D(P, ` ${T ?? ""}`), [() => x("NWS.New")]), O(E, M);
    }, "consequent");
    ee(w, (E) => {
      t.editingEnabled && E(A);
    });
  }
  var p = b(_, 2);
  Ye(p, 17, () => c(r), Ge, (E, M) => {
    var P = /* @__PURE__ */ F(() => yi(c(M), 2));
    let T = /* @__PURE__ */ i(() => c(P)[1], "tier");
    var g = Uo(), k = h(g), I = h(k), R = b(k, 2);
    Ye(R, 21, () => T().spells, Ge, (G, j) => {
      var L = zo(), V = h(L), U = b(V, 2);
      U.__click = () => f(c(j).id);
      var te = h(U), X = b(te);
      {
        var oe = /* @__PURE__ */ i((ae) => {
          var S = Ro();
          K((z) => N(S, "data-tooltip", z), [() => x("NWS.Concentration")]), O(ae, S);
        }, "consequent_1");
        ee(X, (ae) => {
          c(j).system?.concentration && ae(oe);
        });
      }
      var Y = b(X, 2);
      {
        var Q = /* @__PURE__ */ i((ae) => {
          var S = Fo();
          K((z) => N(S, "data-tooltip", z), [() => x("NWS.Utility")]), O(ae, S);
        }, "consequent_2");
        ee(Y, (ae) => {
          c(j).system?.isUtility && ae(Q);
        });
      }
      var re = b(U, 2), fe = h(re), ne = b(re, 2);
      {
        var we = /* @__PURE__ */ i((ae) => {
          var S = jo(), z = h(S);
          z.__click = () => o(c(j).id);
          var J = b(z, 2);
          J.__click = () => u(c(j).id), O(ae, S);
        }, "consequent_3");
        ee(ne, (ae) => {
          t.editingEnabled && ae(we);
        });
      }
      K(() => {
        N(L, "data-tooltip", c(j).system?.description?.baseEffect || ""), N(V, "src", c(j).img), N(V, "alt", c(j).name), D(te, `${c(j).name ?? ""} `), D(fe, c(j).system?.activationCost ?? "");
      }), vt("dragstart", L, (ae) => d(ae, c(j))), O(G, L);
    }), K(() => D(I, T().label)), O(E, g);
  });
  var W = b(p, 2);
  {
    var le = /* @__PURE__ */ i((E) => {
      var M = Bo(), P = h(M);
      K((T) => D(P, T), [() => x("NWS.DropSpellsHere")]), O(E, M);
    }, "consequent_4");
    ee(W, (E) => {
      c(a).length === 0 && E(le);
    });
  }
  K((E) => N(y, "placeholder", E), [() => x("NWS.SearchSpells")]), vr(y, () => c(n), (E) => Le(n, E)), O(e, v), xe();
}
i(_i, "SpellsTab");
Me(["click"]);
var Ko = /* @__PURE__ */ H('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), Vo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Go = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Yo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Jo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Qo = /* @__PURE__ */ H('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function hi(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ Oe(""), a = /* @__PURE__ */ F(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((T) => T.type === "object").sort((T, g) => (T.sort ?? 0) - (g.sort ?? 0))), r = /* @__PURE__ */ F(() => c(n) ? c(s).filter((T) => T.name.toLowerCase().includes(c(n).toLowerCase())) : c(s));
  function o(T) {
    t.actor.items.get(T)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  function u(T) {
    t.actor.deleteEmbeddedDocuments("Item", [T]);
  }
  i(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  i(l, "createObject");
  function f(T, g) {
    t.actor.update({
      [`system.currency.${T}.value`]: Math.max(0, Math.round(Number(g)))
    });
  }
  i(f, "updateCurrency");
  function d(T, g) {
    const k = c(a)[T]?.value ?? 0;
    t.actor.update({
      [`system.currency.${T}.value`]: Math.max(0, k + g)
    });
  }
  i(d, "adjustCurrency");
  function v(T, g) {
    t.actor.items.get(T)?.update({ "system.quantity": Number(g) });
  }
  i(v, "updateQuantity");
  function _(T, g) {
    const k = { type: "Item", uuid: g.uuid };
    T.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  i(_, "onDragStart");
  var y = Qo(), w = mt(y);
  Ye(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ge, (T, g) => {
    var k = /* @__PURE__ */ F(() => yi(g, 2));
    let I = /* @__PURE__ */ i(() => c(k)[0], "type"), R = /* @__PURE__ */ i(() => c(k)[1], "labelKey");
    var G = Ko(), j = h(G), L = h(j), V = b(j, 2);
    V.__click = () => d(I(), -1);
    var U = b(V, 2);
    U.__change = ({ target: X }) => f(I(), X.value);
    var te = b(U, 2);
    te.__click = () => d(I(), 1), K(
      (X, oe, Y) => {
        N(j, "for", `currency-${I() ?? ""}`), D(L, X), N(V, "aria-label", `-1 ${oe ?? ""}`), N(U, "id", `currency-${I() ?? ""}`), Be(U, c(a)[I()]?.value ?? 0), N(te, "aria-label", `+1 ${Y ?? ""}`);
      },
      [
        () => x(R()),
        () => x(R()),
        () => x(R())
      ]
    ), O(T, G);
  });
  var A = b(w, 2), p = b(h(A), 2), W = b(p, 2);
  {
    var le = /* @__PURE__ */ i((T) => {
      var g = Vo();
      g.__click = l;
      var k = b(h(g));
      K((I) => D(k, ` ${I ?? ""}`), [() => x("NWS.New")]), O(T, g);
    }, "consequent");
    ee(W, (T) => {
      t.editingEnabled && T(le);
    });
  }
  var E = b(A, 2);
  Ye(E, 21, () => c(r), Ge, (T, g) => {
    var k = Yo(), I = h(k), R = b(I, 2);
    R.__click = () => o(c(g).id);
    var G = h(R), j = b(R, 2);
    j.__change = ({ target: U }) => v(c(g).id, U.value);
    var L = b(j, 2);
    {
      var V = /* @__PURE__ */ i((U) => {
        var te = Go(), X = h(te);
        X.__click = () => o(c(g).id);
        var oe = b(X, 2);
        oe.__click = () => u(c(g).id), O(U, te);
      }, "consequent_1");
      ee(L, (U) => {
        t.editingEnabled && U(V);
      });
    }
    K(() => {
      N(k, "data-tooltip", c(g).system?.description?.public || ""), N(I, "src", c(g).img), N(I, "alt", c(g).name), D(G, c(g).name), Be(j, c(g).system?.quantity ?? 1);
    }), vt("dragstart", k, (U) => _(U, c(g))), O(T, k);
  });
  var M = b(E, 2);
  {
    var P = /* @__PURE__ */ i((T) => {
      var g = Jo(), k = h(g);
      K((I) => D(k, I), [() => x("NWS.DropInventoryHere")]), O(T, g);
    }, "consequent_2");
    ee(M, (T) => {
      c(s).length === 0 && T(P);
    });
  }
  K((T) => N(p, "placeholder", T), [() => x("NWS.SearchItems")]), vr(p, () => c(n), (T) => Le(n, T)), O(e, y), xe();
}
i(hi, "InventoryTab");
Me(["click", "change"]);
var Xo = /* @__PURE__ */ H(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function bi(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.system.details), a = /* @__PURE__ */ F(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ F(() => [...c(a).languages ?? []].join(", ")), r = /* @__PURE__ */ F(() => [...c(a).armor ?? []].join(", ")), o = /* @__PURE__ */ F(() => (c(a).weapons ?? []).join(", "));
  var u = Xo(), l = h(u), f = h(l), d = h(f), v = b(f, 2);
  v.__change = ({ target: ve }) => t.actor.update({ "system.details.age": ve.value });
  var _ = b(l, 2), y = h(_), w = h(y), A = b(y, 2);
  A.__change = ({ target: ve }) => t.actor.update({ "system.details.gender": ve.value });
  var p = b(_, 2), W = h(p), le = h(W), E = b(W, 2);
  E.__change = ({ target: ve }) => t.actor.update({ "system.details.height": ve.value });
  var M = b(p, 2), P = h(M), T = h(P), g = b(P, 2);
  g.__change = ({ target: ve }) => t.actor.update({ "system.details.weight": ve.value });
  var k = b(M, 2), I = h(k), R = h(I), G = b(I, 2), j = h(G), L = b(G, 2);
  L.__click = () => t.actor.configureLanguageProficiencies();
  var V = b(k, 2), U = h(V), te = h(U), X = b(U, 2), oe = h(X), Y = b(X, 2);
  Y.__click = () => t.actor.configureArmorProficiencies();
  var Q = b(V, 2), re = h(Q), fe = h(re), ne = b(re, 2), we = h(ne), ae = b(ne, 2);
  ae.__click = () => t.actor.configureWeaponProficiencies();
  var S = b(Q, 2), z = h(S), J = h(z), ce = b(z, 2), Z = h(ce);
  qs(Z, () => c(n).notes ?? ""), K(
    (ve, Jt, Qt, Mt, _e, Ee, at, Ne, Dt, pn, yn, aa, ia) => {
      D(d, ve), Be(v, c(n).age ?? ""), v.disabled = !t.editingEnabled, D(w, Jt), Be(A, c(n).gender ?? ""), A.disabled = !t.editingEnabled, D(le, Qt), Be(E, c(n).height ?? ""), N(E, "placeholder", Mt), E.disabled = !t.editingEnabled, D(T, _e), Be(g, c(n).weight ?? ""), N(g, "placeholder", Ee), g.disabled = !t.editingEnabled, D(R, at), D(j, c(s) || "—"), N(L, "data-tooltip", Ne), L.disabled = !t.editingEnabled, D(te, Dt), D(oe, c(r) || "—"), N(Y, "data-tooltip", pn), Y.disabled = !t.editingEnabled, D(fe, yn), D(we, c(o) || "—"), N(ae, "data-tooltip", aa), ae.disabled = !t.editingEnabled, D(J, ia), N(ce, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), vt("blur", ce, ({ target: ve }) => t.actor.update({ "system.details.notes": ve.innerHTML })), O(e, u), xe();
}
i(bi, "BioTab");
Me(["change", "click"]);
var Zo = /* @__PURE__ */ H('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), $o = /* @__PURE__ */ H('<div class="nos-slot nos-slot--empty"> </div>'), el = /* @__PURE__ */ H("<!> <!>", 1);
function tl(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((u) => u.type === "object" && u.system?.objectType === "weapon").sort((u, l) => (u.sort ?? 0) - (l.sort ?? 0)));
  var a = el(), s = mt(a);
  Ye(s, 17, () => c(n), Ge, (u, l) => {
    var f = Zo(), d = h(f), v = b(d, 2);
    v.__click = () => t.actor.activateItem(c(l).id);
    var _ = h(v);
    K(() => {
      N(d, "src", c(l).img), N(d, "alt", c(l).name), N(v, "data-tooltip", c(l).system?.description?.public || c(l).name), D(_, c(l).name);
    }), O(u, f);
  });
  var r = b(s, 2);
  {
    var o = /* @__PURE__ */ i((u) => {
      var l = $o(), f = h(l);
      K((d) => D(f, d), [() => x("NWS.NoWeapons")]), O(u, l);
    }, "consequent");
    ee(r, (u) => {
      c(n).length === 0 && u(o);
    });
  }
  O(e, a), xe();
}
i(tl, "InventorySlots");
Me(["click"]);
var nl = /* @__PURE__ */ H('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), al = /* @__PURE__ */ H('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), il = /* @__PURE__ */ H('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function rl(e, t) {
  ke(t, !0);
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
  let a = /* @__PURE__ */ Oe("features"), s = /* @__PURE__ */ F(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), r = /* @__PURE__ */ F(() => t.actor.reactive.system.inventory);
  var o = il(), u = h(o);
  Ye(u, 21, () => n, Ge, (E, M) => {
    var P = nl();
    let T;
    P.__click = () => Le(a, c(M).name, !0);
    var g = h(P), k = b(g);
    K(
      (I) => {
        T = et(P, 1, "nos-tab-btn", null, T, { "nos-tab-btn--active": c(a) === c(M).name }), et(g, 1, c(M).icon), D(k, ` ${I ?? ""}`);
      },
      [() => x(c(M).labelKey)]
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
      var M = va(), P = mt(M);
      {
        var T = /* @__PURE__ */ i((k) => {
          _i(k, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), g = /* @__PURE__ */ i((k) => {
          var I = va(), R = mt(I);
          {
            var G = /* @__PURE__ */ i((L) => {
              hi(L, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), j = /* @__PURE__ */ i((L) => {
              var V = va(), U = mt(V);
              {
                var te = /* @__PURE__ */ i((X) => {
                  bi(X, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                ee(
                  U,
                  (X) => {
                    c(a) === "bio" && X(te);
                  },
                  !0
                );
              }
              O(L, V);
            }, "alternate");
            ee(
              R,
              (L) => {
                c(a) === "inventory" ? L(G) : L(j, !1);
              },
              !0
            );
          }
          O(k, I);
        }, "alternate_1");
        ee(
          P,
          (k) => {
            c(a) === "spells" ? k(T) : k(g, !1);
          },
          !0
        );
      }
      O(E, M);
    }, "alternate_2");
    ee(f, (E) => {
      c(a) === "features" ? E(d) : E(v, !1);
    });
  }
  var _ = b(l, 2), y = h(_), w = h(y), A = b(_, 2), p = h(A);
  tl(p, {
    get actor() {
      return t.actor;
    }
  });
  var W = b(p, 2);
  {
    var le = /* @__PURE__ */ i((E) => {
      var M = al(), P = h(M);
      K(() => D(P, `${c(r).usedSlots ?? 0 ?? ""} / ${c(r).totalSlots ?? 0 ?? ""}`)), O(E, M);
    }, "consequent_4");
    ee(W, (E) => {
      c(s) && E(le);
    });
  }
  K((E) => D(w, E), [() => x("NWS.Weapons")]), O(e, o), xe();
}
i(rl, "ContentArea");
Me(["click"]);
var sl = /* @__PURE__ */ H('<button type="button" role="menuitem"><i></i> <span> </span></button>'), ol = /* @__PURE__ */ H('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"></div>', 1);
function ll(e, t) {
  ke(t, !0);
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
  var r = ol(), o = mt(r);
  o.__click = function(...l) {
    t.onclose?.apply(this, l);
  }, o.__keydown = s;
  var u = b(o, 2);
  Ye(u, 21, () => n, Ge, (l, f) => {
    var d = sl();
    let v;
    d.__click = () => a(c(f).value);
    var _ = h(d), y = b(_, 2), w = h(y);
    K(
      (A) => {
        v = et(d, 1, "nos-color-scheme-menu__option", null, v, {
          "nos-color-scheme-menu__option--active": t.colorScheme === c(f).value
        }), et(_, 1, `fa-solid ${c(f).icon ?? ""}`), D(w, A);
      },
      [() => x(c(f).label)]
    ), O(l, d);
  }), O(e, r), xe();
}
i(ll, "ColorSchemeMenu");
Me(["click", "keydown"]);
var cl = /* @__PURE__ */ H('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function ul(e, t) {
  ke(t, !0);
  let n = /* @__PURE__ */ Oe(!1);
  var a = cl(), s = h(a);
  let r;
  s.__click = function(...p) {
    t.toggleEditingEnabled?.apply(this, p);
  };
  var o = h(s), u = b(s, 2);
  u.__click = () => t.actor.triggerLevelUp();
  var l = b(u, 2);
  l.__click = () => t.actor.triggerLevelDown();
  var f = b(l, 2), d = h(f);
  let v;
  d.__click = () => Le(n, !c(n));
  var _ = b(d, 2);
  {
    var y = /* @__PURE__ */ i((p) => {
      ll(p, {
        get colorScheme() {
          return t.colorScheme;
        },
        get setColorScheme() {
          return t.setColorScheme;
        },
        onclose: /* @__PURE__ */ i(() => Le(n, !1), "onclose")
      });
    }, "consequent");
    ee(_, (p) => {
      c(n) && p(y);
    });
  }
  var w = b(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var A = b(w, 2);
  A.__click = () => t.actor.triggerRest({ restType: "safe" }), K(
    (p, W, le, E, M, P, T, g, k, I, R, G) => {
      r = et(s, 1, "nos-sidebar-btn", null, r, { "nos-sidebar-btn--active": t.editingEnabled }), N(s, "aria-pressed", t.editingEnabled), N(s, "aria-label", p), N(s, "data-tooltip", W), et(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), N(u, "aria-label", le), N(u, "data-tooltip", E), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, N(l, "aria-label", M), N(l, "data-tooltip", P), l.disabled = t.actor.reactive.system.levelUpHistory.length === 0, v = et(d, 1, "nos-sidebar-btn", null, v, { "nos-sidebar-btn--active": t.darkMode }), N(d, "aria-pressed", t.darkMode), N(d, "aria-label", T), N(d, "data-tooltip", g), N(d, "aria-expanded", c(n)), N(w, "aria-label", k), N(w, "data-tooltip", I), N(A, "aria-label", R), N(A, "data-tooltip", G);
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
  ), O(e, a), xe();
}
i(ul, "SidebarControls");
Me(["click"]);
var fl = /* @__PURE__ */ H('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function dl(e, t) {
  ke(t, !0);
  const n = ji((S) => {
    const z = {
      updateActor: Hooks.on("updateActor", (J, ce, Z) => {
        Z.diff !== !1 && J._id === t.actor.id && S();
      }),
      createItem: Hooks.on("createItem", (J) => {
        J?.actor?.id === t.actor.id && S();
      }),
      deleteItem: Hooks.on("deleteItem", (J) => {
        J?.actor?.id === t.actor.id && S();
      }),
      updateItem: Hooks.on("updateItem", (J, ce, Z) => {
        Z.diff !== !1 && J?.actor?.id === t.actor.id && S();
      })
    };
    return () => {
      Hooks.off("updateActor", z.updateActor), Hooks.off("createItem", z.createItem), Hooks.off("deleteItem", z.deleteItem), Hooks.off("updateItem", z.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(S, z) {
      if (z === "reactive")
        return n(), S;
      const J = S[z];
      return typeof J == "function" ? J.bind(S) : J;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: r,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(S, z) {
    return Math.clamp(0, Math.round(S / z * 100), 100);
  }
  i(u, "getHitPointPercentage");
  function l(S, z, J, ce) {
    const Z = [];
    return J && Z.push(`${J.name} (${s[ce] ?? ce})`), S && (z ? Z.push(`${S.name} (${z.name}, ${S.system.classLevel})`) : Z.push(`${S.name} (${S.system.classLevel})`)), Z.filter(Boolean).join(" ⟡ ");
  }
  i(l, "prepareCharacterMetadata");
  function f(S, z) {
    if (!z) return S;
    const J = [4, 6, 8, 10, 12, 20], ce = J.indexOf(S);
    return ce === -1 ? S : J[Math.min(ce + z, J.length - 1)];
  }
  i(f, "incrementDieSize");
  let d = /* @__PURE__ */ F(() => u(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(S) {
    a.update({ "system.attributes.hp.value": S });
  }
  i(v, "updateCurrentHP");
  function _(S) {
    a.update({ "system.attributes.hp.max": S });
  }
  i(_, "updateMaxHP");
  function y(S) {
    a.update({ "system.attributes.hp.temp": S });
  }
  i(y, "updateTempHP");
  let w = /* @__PURE__ */ F(() => a.reactive.system.resources.mana), A = /* @__PURE__ */ F(() => (c(w).max ?? 0) > 0 || (c(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((S) => S.type === "class" && S.system?.mana?.formula?.length));
  function p(S) {
    a.update({ "system.resources.mana.current": S });
  }
  i(p, "updateCurrentMana");
  function W(S) {
    const z = a.reactive.system.resources.mana, J = z.baseMax ?? 0, Z = (z.max || J) - J, ve = Math.max(0, S - Z);
    a.update({ "system.resources.mana.baseMax": ve });
  }
  i(W, "updateMaxMana");
  let le = /* @__PURE__ */ F(() => {
    const S = a.reactive.system.attributes.hitDice, z = a.reactive.system.attributes.bonusHitDice ?? [], J = a.reactive.items.filter((_e) => _e.type === "class"), ce = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, Z = {};
    for (const _e of J) {
      const Ee = _e.system.hitDieSize, at = f(Ee, ce), Ne = _e.system.classLevel;
      Z[at] ??= { current: 0, total: 0 }, Z[at].total += Ne, Z[at].current = S[at]?.current ?? 0;
    }
    const ve = J.map((_e) => f(_e.system.hitDieSize, ce));
    for (const _e of z) {
      const Ee = f(_e.size, ce);
      Z[Ee] ??= { current: S[Ee]?.current ?? 0, total: 0 }, Z[Ee].total += _e.value, ve.includes(Ee) || (Z[Ee].current = S[Ee]?.current ?? 0);
    }
    const Jt = z.map((_e) => f(_e.size, ce));
    for (const [_e, Ee] of Object.entries(S ?? {})) {
      const at = Number(_e), Ne = f(at, ce), Dt = Ee?.bonus ?? 0;
      if (Dt > 0) {
        Z[Ne] ??= { current: 0, total: 0 }, Z[Ne].total += Dt;
        const pn = ve.includes(Ne), yn = Jt.includes(Ne);
        !pn && !yn && (Z[Ne].current = S[Ne]?.current ?? 0);
      }
    }
    let Qt = 0, Mt = 0;
    for (const _e of Object.values(Z))
      Qt += _e.current, Mt += _e.total;
    return { bySize: Z, value: Qt, max: Mt };
  });
  async function E(S) {
    await a.updateCurrentHitDice(S);
  }
  i(E, "updateCurrentHitDice");
  async function M() {
    await a.rollHitDice();
  }
  i(M, "rollHitDice");
  async function P() {
    await a.editCurrentHitDice();
  }
  i(P, "editCurrentHitDice");
  let T = /* @__PURE__ */ F(() => a.reactive.items.find((S) => S.type === "class") ?? null), g = /* @__PURE__ */ F(() => {
    const S = a.reactive.items.find((Z) => Z.type === "class") ?? null, z = a.reactive.items.find((Z) => Z.type === "subclass") ?? null, J = a.reactive.items.find((Z) => Z.type === "ancestry") ?? null, ce = a.reactive.system.attributes.sizeCategory;
    return l(S, z, J, ce);
  }), k = /* @__PURE__ */ F(() => a.reactive.system.attributes.wounds);
  function I(S) {
    let z = S;
    S <= c(k).value && (z = S - 1), a.update({ "system.attributes.wounds.value": z });
  }
  i(I, "toggleWounds");
  let R = /* @__PURE__ */ F(() => a.reactive.flags.nimble), G = /* @__PURE__ */ F(() => c(R)?.editingEnabled ?? !0);
  const j = Qs(!1, (S) => (Ts(() => S(c(G))), () => {
  }));
  async function L() {
    await a.setFlag("nimble", "editingEnabled", !c(G));
  }
  i(L, "toggleEditingEnabled");
  let V = /* @__PURE__ */ F(() => {
    const S = c(R)?.colorScheme;
    return S || (c(R)?.darkMode === !0 ? "dark" : "white");
  });
  async function U(S) {
    await a.setFlag("nimble", "colorScheme", S);
  }
  i(U, "setColorScheme");
  let te = /* @__PURE__ */ F(() => c(V) === "dark"), X = /* @__PURE__ */ F(() => c(V) === "nimble");
  Pn("actor", a), Pn("document", a), Pn("application", t.sheet), Pn("editingEnabled", j);
  var oe = fl();
  let Y;
  var Q = h(oe), re = h(Q);
  ao(re, {
    get actor() {
      return a;
    },
    get metaData() {
      return c(g);
    },
    get editingEnabled() {
      return c(G);
    },
    get hitDiceData() {
      return c(le);
    }
  });
  var fe = b(re, 2);
  _o(fe, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(G);
    },
    get isBloodied() {
      return c(d);
    },
    get hitDiceData() {
      return c(le);
    },
    get hasMana() {
      return c(A);
    },
    get mana() {
      return c(w);
    },
    get wounds() {
      return c(k);
    },
    toggleWounds: I,
    updateCurrentHP: v,
    updateMaxHP: _,
    updateTempHP: y,
    updateCurrentMana: p,
    updateMaxMana: W,
    updateCurrentHitDice: E,
    rollHitDice: M,
    editCurrentHitDice: P
  });
  var ne = b(fe, 2);
  po(ne, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(G);
    }
  });
  var we = b(Q, 2);
  rl(we, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(G);
    },
    get hasMana() {
      return c(A);
    },
    get mana() {
      return c(w);
    },
    updateCurrentMana: p,
    updateMaxMana: W
  });
  var ae = b(we, 2);
  ul(ae, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(G);
    },
    toggleEditingEnabled: L,
    get classItem() {
      return c(T);
    },
    get darkMode() {
      return c(te);
    },
    get colorScheme() {
      return c(V);
    },
    setColorScheme: U
  }), K(() => Y = et(oe, 1, "nos-sheet", null, Y, {
    "nos-sheet--dark": c(te),
    "nos-sheet--nimble": c(X)
  })), O(e, oe), xe();
}
i(dl, "WhiteSheet");
const rt = class rt extends Zs(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = dl;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < rt.MIN_WIDTH && (t.width = rt.MIN_WIDTH), t.height !== void 0 && t.height < rt.MIN_HEIGHT && (t.height = rt.MIN_HEIGHT), super.setPosition(t);
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
i(rt, "WhiteCharacterSheet"), Re(rt, "MIN_WIDTH", 670), Re(rt, "MIN_HEIGHT", 400), Re(rt, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Wa = rt;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-white-sheet",
    Wa,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Nimble White Sheet"
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
