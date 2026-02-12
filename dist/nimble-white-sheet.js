var $a = Object.defineProperty;
var er = (e) => {
  throw TypeError(e);
};
var Si = (e, t, n) => t in e ? $a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => $a(e, "name", { value: t, configurable: !0 });
var Oe = (e, t, n) => Si(e, typeof t != "symbol" ? t + "" : t, n), da = (e, t, n) => t.has(e) || er("Cannot " + n);
var b = (e, t, n) => (da(e, t, "read from private field"), n ? n.call(e) : t.get(e)), V = (e, t, n) => t.has(e) ? er("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), G = (e, t, n, a) => (da(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), pe = (e, t, n) => (da(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), xi = /* @__PURE__ */ Symbol("filename"), ki = "http://www.w3.org/1999/xhtml", tr = globalThis.process?.env?.NODE_ENV, I = tr && !tr.toLowerCase().startsWith("prod");
var pr = Array.isArray, Ni = Array.prototype.indexOf, Ut = Array.prototype.includes, Zn = Array.from, Bt = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, Ti = Object.getOwnPropertyDescriptors, Ii = Object.prototype, Ai = Array.prototype, yr = Object.getPrototypeOf, nr = Object.isExtensible;
const va = /* @__PURE__ */ r(() => {
}, "noop");
function Ci(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(Ci, "run_all");
function wr() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(wr, "deferred");
function Er(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(Er, "to_array");
const me = 2, ya = 4, $n = 8, Sr = 1 << 24, vt = 16, $e = 32, Gt = 64, Fa = 128, ze = 512, ve = 1024, ge = 2048, Qe = 4096, Ce = 8192, yt = 16384, ja = 32768, vn = 65536, Kn = 1 << 17, xr = 1 << 18, pn = 1 << 19, Di = 1 << 20, dt = 1 << 25, Tt = 32768, wa = 1 << 21, ea = 1 << 22, wt = 1 << 23, an = /* @__PURE__ */ Symbol("$state"), Mi = /* @__PURE__ */ Symbol(""), kr = /* @__PURE__ */ Symbol("proxy path");
var rn;
const en = new (rn = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(rn, "StaleReactionError"), rn)();
function Wi(e) {
  if (I) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Wi, "lifecycle_outside_component");
function Oi() {
  if (I) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Oi, "async_derived_orphan");
function ar() {
  if (I) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(ar, "bind_invalid_checkbox_value");
function Li() {
  if (I) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Li, "derived_references_self");
function Nr(e, t, n) {
  if (I) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(Nr, "each_key_duplicate");
function Hi(e) {
  if (I) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Hi, "effect_in_teardown");
function Pi() {
  if (I) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Pi, "effect_in_unowned_derived");
function Ri(e) {
  if (I) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Ri, "effect_orphan");
function Fi() {
  if (I) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Fi, "effect_update_depth_exceeded");
function ji(e) {
  if (I) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(ji, "rune_outside_svelte");
function zi() {
  if (I) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(zi, "state_descriptors_fixed");
function Ui() {
  if (I) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(Ui, "state_prototype_fixed");
function Bi() {
  if (I) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Bi, "state_unsafe_mutation");
function qi() {
  if (I) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(qi, "svelte_boundary_reset_onerror");
var ta = "font-weight: bold", na = "font-weight: normal";
function Ki() {
  I ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, ta, na) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(Ki, "lifecycle_double_unmount");
function _a(e) {
  I ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, ta, na) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(_a, "state_proxy_equality_mismatch");
function Vi() {
  I ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, ta, na) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Vi, "state_proxy_unmount");
function Gi() {
  I ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", ta, na) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(Gi, "svelte_boundary_reset_noop");
function Tr(e) {
  return e === this.v;
}
r(Tr, "equals");
function Ir(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(Ir, "safe_not_equal");
function Ar(e) {
  return !Ir(e, this.v);
}
r(Ar, "safe_equals");
let Yi = !1;
function et(e, t) {
  return e.label = t, Cr(e.v, t), e;
}
r(et, "tag");
function Cr(e, t) {
  return e?.[kr]?.(t), e;
}
r(Cr, "tag_proxy");
function Ji(e) {
  const t = new Error(), n = Qi();
  return n.length === 0 ? null : (n.unshift(`
`), Bt(t, "stack", {
    value: n.join(`
`)
  }), Bt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(Ji, "get_error");
function Qi() {
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
r(Qi, "get_stack");
let be = null;
function _n(e) {
  be = e;
}
r(_n, "set_component_context");
let In = null;
function Vn(e) {
  In = e;
}
r(Vn, "set_dev_stack");
let On = null;
function rr(e) {
  On = e;
}
r(rr, "set_dev_current_component_function");
function Fn(e, t) {
  return Xi("setContext").set(e, t), t;
}
r(Fn, "setContext");
function we(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, I && (be.function = n, On = n);
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
      Qr(a);
  }
  return t.i = !0, be = t.p, I && (On = be?.function ?? null), /** @type {T} */
  {};
}
r(Ee, "pop");
function Dr() {
  return !0;
}
r(Dr, "is_runes");
function Xi(e) {
  return be === null && Wi(e), be.c ??= new Map(Zi(be) || void 0);
}
r(Xi, "get_or_init_context_map");
function Zi(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
r(Zi, "get_parent_context");
let Mt = [];
function Mr() {
  var e = Mt;
  Mt = [], Ci(e);
}
r(Mr, "run_micro_tasks");
function Et(e) {
  if (Mt.length === 0 && !Nn) {
    var t = Mt;
    queueMicrotask(() => {
      t === Mt && Mr();
    });
  }
  Mt.push(e);
}
r(Et, "queue_micro_task");
function $i() {
  for (; Mt.length > 0; )
    Mr();
}
r($i, "flush_tasks");
const Ea = /* @__PURE__ */ new WeakMap();
function Wr(e) {
  var t = ae;
  if (t === null)
    return ee.f |= wt, e;
  if (I && e instanceof Error && !Ea.has(e) && Ea.set(e, es(e, t)), (t.f & ja) === 0) {
    if ((t.f & Fa) === 0)
      throw I && !t.parent && e instanceof Error && Or(e), e;
    t.b.error(e);
  } else
    hn(e, t);
}
r(Wr, "handle_error");
function hn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fa) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw I && e instanceof Error && Or(e), e;
}
r(hn, "invoke_error_boundary");
function es(e, t) {
  const n = nn(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = Ka ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[xi].split("/").pop()}`, i = i.p;
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
r(es, "get_adjustments");
function Or(e) {
  const t = Ea.get(e);
  t && (Bt(e, "message", {
    value: t.message
  }), Bt(e, "stack", {
    value: t.stack
  }));
}
r(Or, "apply_adjustments");
const ts = -7169;
function ue(e, t) {
  e.f = e.f & ts | t;
}
r(ue, "set_signal_status");
function za(e) {
  (e.f & ze) !== 0 || e.deps === null ? ue(e, ve) : ue(e, Qe);
}
r(za, "update_derived_status");
function Lr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & Tt) === 0 || (t.f ^= Tt, Lr(
        /** @type {Derived} */
        t.deps
      ));
}
r(Lr, "clear_marked");
function Hr(e, t, n) {
  (e.f & ge) !== 0 ? t.add(e) : (e.f & Qe) !== 0 && n.add(e), Lr(e.deps), ue(e, ve);
}
r(Hr, "defer_effect");
const jn = /* @__PURE__ */ new Set();
let ie = null, Sa = null, Ve = null, ke = [], aa = null, xa = !1, Nn = !1;
var sn, on, Ot, ln, Cn, Dn, Lt, ut, cn, ot, ka, Na, Pr;
const Jn = class Jn {
  constructor() {
    V(this, ot);
    Oe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Oe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Oe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    V(this, sn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    V(this, on, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    V(this, Ot, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    V(this, ln, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    V(this, Cn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    V(this, Dn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    V(this, Lt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    V(this, ut, /* @__PURE__ */ new Map());
    Oe(this, "is_fork", !1);
    V(this, cn, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, ln) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, ut).has(t) || b(this, ut).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, ut).get(t);
    if (n) {
      b(this, ut).delete(t);
      for (var a of n.d)
        ue(a, ge), Ge(a);
      for (a of n.m)
        ue(a, Qe), Ge(a);
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
      pe(this, ot, ka).call(this, s, n, a);
    if (this.is_deferred()) {
      pe(this, ot, Na).call(this, a), pe(this, ot, Na).call(this, n);
      for (const [s, i] of b(this, ut))
        zr(s, i);
    } else {
      for (const s of b(this, sn)) s();
      b(this, sn).clear(), b(this, Ot) === 0 && pe(this, ot, Pr).call(this), Sa = this, ie = null, ir(a), ir(n), Sa = null, b(this, Cn)?.resolve();
    }
    Ve = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & wt) === 0 && (this.current.set(t, t.v), Ve?.set(t, t.v));
  }
  activate() {
    ie = this, this.apply();
  }
  deactivate() {
    ie === this && (ie = null, Ve = null);
  }
  flush() {
    if (this.activate(), ke.length > 0) {
      if (Rr(), ie !== null && ie !== this)
        return;
    } else b(this, Ot) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, on)) t(this);
    b(this, on).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    G(this, Ot, b(this, Ot) + 1), t && G(this, ln, b(this, ln) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    G(this, Ot, b(this, Ot) - 1), t && G(this, ln, b(this, ln) - 1), !b(this, cn) && (G(this, cn, !0), Et(() => {
      G(this, cn, !1), this.is_deferred() ? ke.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, Dn))
      b(this, Lt).delete(t), ue(t, ge), Ge(t);
    for (const t of b(this, Lt))
      ue(t, Qe), Ge(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, sn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, on).add(t);
  }
  settled() {
    return (b(this, Cn) ?? G(this, Cn, wr())).promise;
  }
  static ensure() {
    if (ie === null) {
      const t = ie = new Jn();
      jn.add(ie), Nn || Et(() => {
        ie === t && t.flush();
      });
    }
    return ie;
  }
  apply() {
  }
};
sn = new WeakMap(), on = new WeakMap(), Ot = new WeakMap(), ln = new WeakMap(), Cn = new WeakMap(), Dn = new WeakMap(), Lt = new WeakMap(), ut = new WeakMap(), cn = new WeakMap(), ot = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ka = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= ve;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & ($e | Gt)) !== 0, l = c && (o & ve) !== 0, f = l || (o & Ce) !== 0 || b(this, ut).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= ve : i !== null && (o & (ya | $n | Sr)) !== 0 ? i.b.defer_effect(s) : (o & ya) !== 0 ? n.push(s) : Hn(s) && ((o & vt) !== 0 && b(this, Lt).add(s), An(s));
      var d = s.first;
      if (d !== null) {
        s = d;
        continue;
      }
    }
    var _ = s.parent;
    for (s = s.next; s === null && _ !== null; )
      _ === i && (i = null), s = _.next, _ = _.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
Na = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Hr(t[n], b(this, Dn), b(this, Lt));
}, "#defer_effects"), Pr = /* @__PURE__ */ r(function() {
  var s;
  if (jn.size > 1) {
    this.previous.clear();
    var t = Ve, n = !0;
    for (const i of jn) {
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
        for (const d of o)
          Fr(d, c, l, f);
        if (ke.length > 0) {
          ie = i, i.apply();
          for (const d of ke)
            pe(s = i, ot, ka).call(s, d, [], []);
          i.deactivate();
        }
        ke = a;
      }
    }
    ie = null, Ve = t;
  }
  this.committed = !0, jn.delete(this);
}, "#commit"), r(Jn, "Batch");
let St = Jn;
function ns(e) {
  var t = Nn;
  Nn = !0;
  try {
    for (var n; ; ) {
      if ($i(), ke.length === 0 && (ie?.flush(), ke.length === 0))
        return aa = null, /** @type {T} */
        n;
      Rr();
    }
  } finally {
    Nn = t;
  }
}
r(ns, "flushSync");
function Rr() {
  xa = !0;
  var e = I ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; ke.length > 0; ) {
      var n = St.ensure();
      if (t++ > 1e3) {
        if (I) {
          var a = /* @__PURE__ */ new Map();
          for (const i of n.current.keys())
            for (const [o, c] of i.updated ?? []) {
              var s = a.get(o);
              s || (s = { error: c.error, count: 0 }, a.set(o, s)), s.count += c.count;
            }
          for (const i of a.values())
            i.error && console.error(i.error);
        }
        as();
      }
      if (n.process(ke), xt.clear(), I)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (ke = [], xa = !1, aa = null, I)
      for (
        const i of
        /** @type {Set<Source>} */
        e
      )
        i.updated = null;
  }
}
r(Rr, "flush_effects");
function as() {
  try {
    Fi();
  } catch (e) {
    I && Bt(e, "stack", { value: "" }), hn(e, aa);
  }
}
r(as, "infinite_loop_guard");
let lt = null;
function ir(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (yt | Ce)) === 0 && Hn(a) && (lt = /* @__PURE__ */ new Set(), An(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? ti(a) : a.fn = null), lt?.size > 0)) {
        xt.clear();
        for (const s of lt) {
          if ((s.f & (yt | Ce)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            lt.has(o) && (lt.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (yt | Ce)) === 0 && An(l);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
r(ir, "flush_queued_effects");
function Fr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & me) !== 0 ? Fr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (ea | vt)) !== 0 && (i & ge) === 0 && jr(s, t, a) && (ue(s, ge), Ge(
        /** @type {Effect} */
        s
      ));
    }
}
r(Fr, "mark_effects");
function jr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ut.call(t, s))
        return !0;
      if ((s.f & me) !== 0 && jr(
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
r(jr, "depends_on");
function Ge(e) {
  for (var t = aa = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (xa && t === ae && (n & vt) !== 0 && (n & xr) === 0)
      return;
    if ((n & (Gt | $e)) !== 0) {
      if ((n & ve) === 0) return;
      t.f ^= ve;
    }
  }
  ke.push(t);
}
r(Ge, "schedule_effect");
function zr(e, t) {
  if (!((e.f & $e) !== 0 && (e.f & ve) !== 0)) {
    (e.f & ge) !== 0 ? t.d.push(e) : (e.f & Qe) !== 0 && t.m.push(e), ue(e, ve);
    for (var n = e.first; n !== null; )
      zr(n, t), n = n.next;
  }
}
r(zr, "reset_branch");
function Ur(e) {
  let t = 0, n = qt(0), a;
  return I && et(n, "createSubscriber version"), () => {
    Va() && (u(n), Xr(() => (t === 0 && (a = di(() => e(() => Tn(n)))), t += 1, () => {
      Et(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, Tn(n));
      });
    })));
  };
}
r(Ur, "createSubscriber");
var rs = vn | pn | Fa;
function is(e, t, n) {
  new Ta(e, t, n);
}
r(is, "boundary");
var He, Ra, nt, Ht, at, Pe, xe, rt, ft, mt, Pt, gt, un, Rt, fn, dn, it, Qn, _e, ss, os, Ia, Un, Bn, Aa;
const Qa = class Qa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    V(this, _e);
    /** @type {Boundary | null} */
    Oe(this, "parent");
    Oe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, He);
    /** @type {TemplateNode | null} */
    V(this, Ra, null);
    /** @type {BoundaryProps} */
    V(this, nt);
    /** @type {((anchor: Node) => void)} */
    V(this, Ht);
    /** @type {Effect} */
    V(this, at);
    /** @type {Effect | null} */
    V(this, Pe, null);
    /** @type {Effect | null} */
    V(this, xe, null);
    /** @type {Effect | null} */
    V(this, rt, null);
    /** @type {DocumentFragment | null} */
    V(this, ft, null);
    /** @type {TemplateNode | null} */
    V(this, mt, null);
    V(this, Pt, 0);
    V(this, gt, 0);
    V(this, un, !1);
    V(this, Rt, !1);
    /** @type {Set<Effect>} */
    V(this, fn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    V(this, dn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    V(this, it, null);
    V(this, Qn, Ur(() => (G(this, it, qt(b(this, Pt))), I && et(b(this, it), "$effect.pending()"), () => {
      G(this, it, null);
    })));
    G(this, He, t), G(this, nt, n), G(this, Ht, a), this.parent = /** @type {Effect} */
    ae.b, this.is_pending = !!b(this, nt).pending, G(this, at, Ga(() => {
      ae.b = this;
      {
        var s = pe(this, _e, Ia).call(this);
        try {
          G(this, Pe, Fe(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, gt) > 0 ? pe(this, _e, Bn).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, mt)?.remove();
      };
    }, rs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Hr(t, b(this, fn), b(this, dn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, nt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    pe(this, _e, Aa).call(this, t), G(this, Pt, b(this, Pt) + t), !(!b(this, it) || b(this, un)) && (G(this, un, !0), Et(() => {
      G(this, un, !1), b(this, it) && mn(b(this, it), b(this, Pt));
    }));
  }
  get_effect_pending() {
    return b(this, Qn).call(this), u(
      /** @type {Source<number>} */
      b(this, it)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, nt).onerror;
    let a = b(this, nt).failed;
    if (b(this, Rt) || !n && !a)
      throw t;
    b(this, Pe) && (Te(b(this, Pe)), G(this, Pe, null)), b(this, xe) && (Te(b(this, xe)), G(this, xe, null)), b(this, rt) && (Te(b(this, rt)), G(this, rt, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Gi();
        return;
      }
      s = !0, i && qi(), St.ensure(), G(this, Pt, 0), b(this, rt) !== null && jt(b(this, rt), () => {
        G(this, rt, null);
      }), this.is_pending = this.has_pending_snippet(), G(this, Pe, pe(this, _e, Un).call(this, () => (G(this, Rt, !1), Fe(() => b(this, Ht).call(this, b(this, He)))))), b(this, gt) > 0 ? pe(this, _e, Bn).call(this) : this.is_pending = !1;
    }, "reset");
    Et(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        hn(c, b(this, at) && b(this, at).parent);
      }
      a && G(this, rt, pe(this, _e, Un).call(this, () => {
        St.ensure(), G(this, Rt, !0);
        try {
          return Fe(() => {
            a(
              b(this, He),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return hn(
            c,
            /** @type {Effect} */
            b(this, at).parent
          ), null;
        } finally {
          G(this, Rt, !1);
        }
      }));
    });
  }
};
He = new WeakMap(), Ra = new WeakMap(), nt = new WeakMap(), Ht = new WeakMap(), at = new WeakMap(), Pe = new WeakMap(), xe = new WeakMap(), rt = new WeakMap(), ft = new WeakMap(), mt = new WeakMap(), Pt = new WeakMap(), gt = new WeakMap(), un = new WeakMap(), Rt = new WeakMap(), fn = new WeakMap(), dn = new WeakMap(), it = new WeakMap(), Qn = new WeakMap(), _e = new WeakSet(), ss = /* @__PURE__ */ r(function() {
  try {
    G(this, Pe, Fe(() => b(this, Ht).call(this, b(this, He))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), os = /* @__PURE__ */ r(function() {
  const t = b(this, nt).pending;
  t && (G(this, xe, Fe(() => t(b(this, He)))), Et(() => {
    var n = pe(this, _e, Ia).call(this);
    G(this, Pe, pe(this, _e, Un).call(this, () => (St.ensure(), Fe(() => b(this, Ht).call(this, n))))), b(this, gt) > 0 ? pe(this, _e, Bn).call(this) : (jt(
      /** @type {Effect} */
      b(this, xe),
      () => {
        G(this, xe, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Ia = /* @__PURE__ */ r(function() {
  var t = b(this, He);
  return this.is_pending && (G(this, mt, kt()), b(this, He).before(b(this, mt)), t = b(this, mt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Un = /* @__PURE__ */ r(function(t) {
  var n = ae, a = ee, s = be;
  Je(b(this, at)), Be(b(this, at)), _n(b(this, at).ctx);
  try {
    return t();
  } catch (i) {
    return Wr(i), null;
  } finally {
    Je(n), Be(a), _n(s);
  }
}, "#run"), Bn = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, nt).pending
  );
  b(this, Pe) !== null && (G(this, ft, document.createDocumentFragment()), b(this, ft).append(
    /** @type {TemplateNode} */
    b(this, mt)
  ), ri(b(this, Pe), b(this, ft))), b(this, xe) === null && G(this, xe, Fe(() => t(b(this, He))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Aa = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && pe(n = this.parent, _e, Aa).call(n, t);
    return;
  }
  if (G(this, gt, b(this, gt) + t), b(this, gt) === 0) {
    this.is_pending = !1;
    for (const a of b(this, fn))
      ue(a, ge), Ge(a);
    for (const a of b(this, dn))
      ue(a, Qe), Ge(a);
    b(this, fn).clear(), b(this, dn).clear(), b(this, xe) && jt(b(this, xe), () => {
      G(this, xe, null);
    }), b(this, ft) && (b(this, He).before(b(this, ft)), G(this, ft, null));
  }
}, "#update_pending_count"), r(Qa, "Boundary");
let Ta = Qa;
function ls(e, t, n, a) {
  const s = Ua;
  var i = e.filter((v) => !v.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = ie, c = (
    /** @type {Effect} */
    ae
  ), l = cs(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function d(v) {
    l();
    try {
      a(v);
    } catch (p) {
      (c.f & yt) === 0 && hn(p, c);
    }
    o?.deactivate(), Ca();
  }
  if (r(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function _() {
    l(), Promise.all(n.map((v) => /* @__PURE__ */ fs(v))).then((v) => d([...t.map(s), ...v])).catch((v) => hn(v, c));
  }
  r(_, "run"), f ? f.then(_) : _();
}
r(ls, "flatten");
function cs() {
  var e = ae, t = ee, n = be, a = ie;
  if (I)
    var s = In;
  return /* @__PURE__ */ r(function(o = !0) {
    Je(e), Be(t), _n(n), o && a?.activate(), I && Vn(s);
  }, "restore");
}
r(cs, "capture");
function Ca() {
  Je(null), Be(null), _n(null), I && Vn(null);
}
r(Ca, "unset_context");
const us = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  var t = me | ge, n = ee !== null && (ee.f & me) !== 0 ? (
    /** @type {Derived} */
    ee
  ) : null;
  return ae !== null && (ae.f |= pn), {
    ctx: be,
    deps: null,
    effects: null,
    equals: Tr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      he
    ),
    wv: 0,
    parent: n ?? ae,
    ac: null
  };
}
r(Ua, "derived");
// @__NO_SIDE_EFFECTS__
function fs(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ae
  );
  a === null && Oi();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = qt(
    /** @type {V} */
    he
  );
  I && (o.label = t);
  var c = !ee, l = /* @__PURE__ */ new Map();
  return Is(() => {
    var f = wr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === ie && d.committed && d.deactivate(), Ca();
      });
    } catch (p) {
      f.reject(p), Ca();
    }
    var d = (
      /** @type {Batch} */
      ie
    );
    if (c) {
      var _ = s.is_rendered();
      s.update_pending_count(1), d.increment(_), l.get(d)?.reject(en), l.delete(d), l.set(d, f);
    }
    const v = /* @__PURE__ */ r((p, E = void 0) => {
      if (d.activate(), E)
        E !== en && (o.f |= wt, mn(o, E));
      else {
        (o.f & wt) !== 0 && (o.f ^= wt), mn(o, p);
        for (const [T, y] of l) {
          if (l.delete(T), T === d) break;
          y.reject(en);
        }
      }
      c && (s.update_pending_count(-1), d.decrement(_));
    }, "handler");
    f.promise.then(v, (p) => v(null, p || "unknown"));
  }), Jr(() => {
    for (const f of l.values())
      f.reject(en);
  }), I && (o.f |= ea), new Promise((f) => {
    function d(_) {
      function v() {
        _ === i ? f(o) : d(i);
      }
      r(v, "go"), _.then(v, v);
    }
    r(d, "next"), d(i);
  });
}
r(fs, "async_derived");
// @__NO_SIDE_EFFECTS__
function z(e) {
  const t = /* @__PURE__ */ Ua(e);
  return ii(t), t;
}
r(z, "user_derived");
// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = /* @__PURE__ */ Ua(e);
  return t.equals = Ar, t;
}
r(ds, "derived_safe_equal");
function Da(e) {
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
r(Da, "destroy_derived_effects");
let ha = [];
function vs(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (t.f & yt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(vs, "get_derived_parent_effect");
function Ba(e) {
  var t, n = ae;
  if (Je(vs(e)), I) {
    let a = bn;
    sr(/* @__PURE__ */ new Set());
    try {
      Ut.call(ha, e) && Li(), ha.push(e), e.f &= ~Tt, Da(e), t = Ma(e);
    } finally {
      Je(n), sr(a), ha.pop();
    }
  } else
    try {
      e.f &= ~Tt, Da(e), t = Ma(e);
    } finally {
      Je(n);
    }
  return t;
}
r(Ba, "execute_derived");
function Br(e) {
  var t = Ba(e);
  if (!e.equals(t) && (e.wv = oi(), (!ie?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ue(e, ve);
    return;
  }
  Kt || (Ve !== null ? (Va() || ie?.is_fork) && Ve.set(e, t) : za(e));
}
r(Br, "update_derived");
let bn = /* @__PURE__ */ new Set();
const xt = /* @__PURE__ */ new Map();
function sr(e) {
  bn = e;
}
r(sr, "set_eager_effects");
let qa = !1;
function _s() {
  qa = !0;
}
r(_s, "set_eager_effects_deferred");
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Tr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(qt, "source");
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  const n = qt(e);
  return ii(n), n;
}
r(Re, "state");
// @__NO_SIDE_EFFECTS__
function hs(e, t = !1, n = !0) {
  const a = qt(e);
  return t || (a.equals = Ar), a;
}
r(hs, "mutable_source");
function Ke(e, t, n = !1) {
  ee !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ye || (ee.f & Kn) !== 0) && Dr() && (ee.f & (me | vt | ea | Kn)) !== 0 && (Ue === null || !Ut.call(Ue, e)) && Bi();
  let a = n ? tn(t) : t;
  return I && Cr(
    a,
    /** @type {string} */
    e.label
  ), mn(e, a);
}
r(Ke, "set");
function mn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Kt ? xt.set(e, t) : xt.set(e, n), e.v = t;
    var a = St.ensure();
    if (a.capture(e, n), I) {
      if (ae !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = Ji("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      ae !== null && (e.set_during_effect = !0);
    }
    if ((e.f & me) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ge) !== 0 && Ba(s), za(s);
    }
    e.wv = oi(), Kr(e, ge), ae !== null && (ae.f & ve) !== 0 && (ae.f & ($e | Gt)) === 0 && (Le === null ? Cs([e]) : Le.push(e)), !a.is_fork && bn.size > 0 && !qa && qr();
  }
  return t;
}
r(mn, "internal_set");
function qr() {
  qa = !1;
  for (const e of bn)
    (e.f & ve) !== 0 && ue(e, Qe), Hn(e) && An(e);
  bn.clear();
}
r(qr, "flush_eager_effects");
function Tn(e) {
  Ke(e, e.v + 1);
}
r(Tn, "increment");
function Kr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (I && (o & Kn) !== 0) {
        bn.add(i);
        continue;
      }
      var c = (o & ge) === 0;
      if (c && ue(i, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        Ve?.delete(l), (o & Tt) === 0 && (o & ze && (i.f |= Tt), Kr(l, Qe));
      } else c && ((o & vt) !== 0 && lt !== null && lt.add(
        /** @type {Effect} */
        i
      ), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
r(Kr, "mark_reactions");
const bs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function tn(e) {
  if (typeof e != "object" || e === null || an in e)
    return e;
  const t = yr(e);
  if (t !== Ii && t !== Ai)
    return e;
  var n = /* @__PURE__ */ new Map(), a = pr(e), s = /* @__PURE__ */ Re(0), i = zt, o = /* @__PURE__ */ r((d) => {
    if (zt === i)
      return d();
    var _ = ee, v = zt;
    Be(null), ur(i);
    var p = d();
    return Be(_), ur(v), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Re(
    /** @type {any[]} */
    e.length
  )), I && (e = /** @type {any} */
  gs(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, c = d, et(s, `${c} version`);
      for (const [_, v] of n)
        et(v, Dt(c, _));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, _, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && zi();
        var p = n.get(_);
        return p === void 0 ? p = o(() => {
          var E = /* @__PURE__ */ Re(v.value);
          return n.set(_, E), I && typeof _ == "string" && et(E, Dt(c, _)), E;
        }) : Ke(p, v.value, !0), !0;
      },
      deleteProperty(d, _) {
        var v = n.get(_);
        if (v === void 0) {
          if (_ in d) {
            const p = o(() => /* @__PURE__ */ Re(he));
            n.set(_, p), Tn(s), I && et(p, Dt(c, _));
          }
        } else
          Ke(v, he), Tn(s);
        return !0;
      },
      get(d, _, v) {
        if (_ === an)
          return e;
        if (I && _ === kr)
          return f;
        var p = n.get(_), E = _ in d;
        if (p === void 0 && (!E || nn(d, _)?.writable) && (p = o(() => {
          var y = tn(E ? d[_] : he), W = /* @__PURE__ */ Re(y);
          return I && et(W, Dt(c, _)), W;
        }), n.set(_, p)), p !== void 0) {
          var T = u(p);
          return T === he ? void 0 : T;
        }
        return Reflect.get(d, _, v);
      },
      getOwnPropertyDescriptor(d, _) {
        var v = Reflect.getOwnPropertyDescriptor(d, _);
        if (v && "value" in v) {
          var p = n.get(_);
          p && (v.value = u(p));
        } else if (v === void 0) {
          var E = n.get(_), T = E?.v;
          if (E !== void 0 && T !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: T,
              writable: !0
            };
        }
        return v;
      },
      has(d, _) {
        if (_ === an)
          return !0;
        var v = n.get(_), p = v !== void 0 && v.v !== he || Reflect.has(d, _);
        if (v !== void 0 || ae !== null && (!p || nn(d, _)?.writable)) {
          v === void 0 && (v = o(() => {
            var T = p ? tn(d[_]) : he, y = /* @__PURE__ */ Re(T);
            return I && et(y, Dt(c, _)), y;
          }), n.set(_, v));
          var E = u(v);
          if (E === he)
            return !1;
        }
        return p;
      },
      set(d, _, v, p) {
        var E = n.get(_), T = _ in d;
        if (a && _ === "length")
          for (var y = v; y < /** @type {Source<number>} */
          E.v; y += 1) {
            var W = n.get(y + "");
            W !== void 0 ? Ke(W, he) : y in d && (W = o(() => /* @__PURE__ */ Re(he)), n.set(y + "", W), I && et(W, Dt(c, y)));
          }
        if (E === void 0)
          (!T || nn(d, _)?.writable) && (E = o(() => /* @__PURE__ */ Re(void 0)), I && et(E, Dt(c, _)), Ke(E, tn(v)), n.set(_, E));
        else {
          T = E.v !== he;
          var se = o(() => tn(v));
          Ke(E, se);
        }
        var S = Reflect.getOwnPropertyDescriptor(d, _);
        if (S?.set && S.set.call(p, v), !T) {
          if (a && typeof _ == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(_);
            Number.isInteger(F) && F >= M.v && Ke(M, F + 1);
          }
          Tn(s);
        }
        return !0;
      },
      ownKeys(d) {
        u(s);
        var _ = Reflect.ownKeys(d).filter((E) => {
          var T = n.get(E);
          return T === void 0 || T.v !== he;
        });
        for (var [v, p] of n)
          p.v !== he && !(v in d) && _.push(v);
        return _;
      },
      setPrototypeOf() {
        Ui();
      }
    }
  );
}
r(tn, "proxy");
function Dt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : bs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(Dt, "get_label");
function ba(e) {
  try {
    if (e !== null && typeof e == "object" && an in e)
      return e[an];
  } catch {
  }
  return e;
}
r(ba, "get_proxied_value");
const ms = /* @__PURE__ */ new Set([
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
function gs(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return ms.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        _s();
        var o = s.apply(this, i);
        return qr(), o;
      } : s;
    }
  });
}
r(gs, "inspectable_array");
function ps() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(i, o) {
    const c = n.call(this, i, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (ba(this[l]) === i) {
          _a("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(i, o) {
    const c = a.call(this, i, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (ba(this[l]) === i) {
          _a("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(i, o) {
    const c = s.call(this, i, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (ba(this[l]) === i) {
          _a("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
r(ps, "init_array_prototype_warnings");
var or, Ka, Vr, Gr;
function ys() {
  if (or === void 0) {
    or = window, Ka = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Vr = nn(t, "firstChild").get, Gr = nn(t, "nextSibling").get, nr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nr(n) && (n.__t = void 0), I && (e.__svelte_meta = null, ps());
  }
}
r(ys, "init_operations");
function kt(e = "") {
  return document.createTextNode(e);
}
r(kt, "create_text");
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return (
    /** @type {TemplateNode | null} */
    Vr.call(e)
  );
}
r(pt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  return (
    /** @type {TemplateNode | null} */
    Gr.call(e)
  );
}
r(Ln, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ pt(e);
}
r(h, "child");
function Nt(e, t = !1) {
  {
    var n = /* @__PURE__ */ pt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ln(n) : n;
  }
}
r(Nt, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ Ln(a);
  return a;
}
r(m, "sibling");
function ws(e) {
  e.textContent = "";
}
r(ws, "clear_text_content");
function Yr() {
  return !1;
}
r(Yr, "should_defer_append");
let lr = !1;
function Es() {
  lr || (lr = !0, document.addEventListener(
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
r(Es, "add_form_reset_listener");
function ra(e) {
  var t = ee, n = ae;
  Be(null), Je(null);
  try {
    return e();
  } finally {
    Be(t), Je(n);
  }
}
r(ra, "without_reactive_context");
function Ss(e, t, n, a = n) {
  e.addEventListener(t, () => ra(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), Es();
}
r(Ss, "listen_to_event_and_reset_event");
function xs(e) {
  ae === null && (ee === null && Ri(e), Pi()), Kt && Hi(e);
}
r(xs, "validate_effect");
function ks(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(ks, "push_effect");
function It(e, t, n) {
  var a = ae;
  if (I)
    for (; a !== null && (a.f & Kn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Ce) !== 0 && (e |= Ce);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | ge | ze,
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
  if (I && (s.component_function = On), n)
    try {
      An(s), s.f |= ja;
    } catch (c) {
      throw Te(s), c;
    }
  else t !== null && Ge(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & pn) === 0 && (i = i.first, (e & vt) !== 0 && (e & vn) !== 0 && i !== null && (i.f |= vn)), i !== null && (i.parent = a, a !== null && ks(i, a), ee !== null && (ee.f & me) !== 0 && (e & Gt) === 0)) {
    var o = (
      /** @type {Derived} */
      ee
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(It, "create_effect");
function Va() {
  return ee !== null && !Ye;
}
r(Va, "effect_tracking");
function Jr(e) {
  const t = It($n, null, !1);
  return ue(t, ve), t.teardown = e, t;
}
r(Jr, "teardown");
function Ns(e) {
  xs("$effect"), I && Bt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ae.f
  ), n = !ee && (t & $e) !== 0 && (t & ja) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return Qr(e);
}
r(Ns, "user_effect");
function Qr(e) {
  return It(ya | Di, e, !1);
}
r(Qr, "create_user_effect");
function Ts(e) {
  St.ensure();
  const t = It(Gt | pn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? jt(t, () => {
      Te(t), a(void 0);
    }) : (Te(t), a(void 0));
  });
}
r(Ts, "component_root");
function Is(e) {
  return It(ea | pn, e, !0);
}
r(Is, "async_effect");
function Xr(e, t = 0) {
  return It($n | t, e, !0);
}
r(Xr, "render_effect");
function Y(e, t = [], n = [], a = []) {
  ls(a, t, n, (s) => {
    It($n, () => e(...s.map(u)), !0);
  });
}
r(Y, "template_effect");
function Ga(e, t = 0) {
  var n = It(vt | t, e, !0);
  return I && (n.dev_stack = In), n;
}
r(Ga, "block");
function Fe(e) {
  return It($e | pn, e, !0);
}
r(Fe, "branch");
function Zr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Kt, a = ee;
    cr(!0), Be(null);
    try {
      t.call(null);
    } finally {
      cr(n), Be(a);
    }
  }
}
r(Zr, "execute_effect_teardown");
function $r(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ra(() => {
      s.abort(en);
    });
    var a = n.next;
    (n.f & Gt) !== 0 ? n.parent = null : Te(n, t), n = a;
  }
}
r($r, "destroy_effect_children");
function As(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & $e) === 0 && Te(t), t = n;
  }
}
r(As, "destroy_block_effect_children");
function Te(e, t = !0) {
  var n = !1;
  (t || (e.f & xr) !== 0) && e.nodes !== null && e.nodes.end !== null && (ei(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), $r(e, t && !n), Gn(e, 0), ue(e, yt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Zr(e);
  var s = e.parent;
  s !== null && s.first !== null && ti(e), I && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Te, "destroy_effect");
function ei(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ln(e);
    e.remove(), e = n;
  }
}
r(ei, "remove_effect_dom");
function ti(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(ti, "unlink_effect");
function jt(e, t, n = !0) {
  var a = [];
  ni(e, a, !0);
  var s = /* @__PURE__ */ r(() => {
    n && Te(e), t && t();
  }, "fn"), i = a.length;
  if (i > 0) {
    var o = /* @__PURE__ */ r(() => --i || s(), "check");
    for (var c of a)
      c.out(o);
  } else
    s();
}
r(jt, "pause_effect");
function ni(e, t, n) {
  if ((e.f & Ce) === 0) {
    e.f ^= Ce;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & vn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & $e) !== 0 && (e.f & vt) !== 0;
      ni(s, t, o ? n : !1), s = i;
    }
  }
}
r(ni, "pause_children");
function Ya(e) {
  ai(e, !0);
}
r(Ya, "resume_effect");
function ai(e, t) {
  if ((e.f & Ce) !== 0) {
    e.f ^= Ce, (e.f & ve) === 0 && (ue(e, ge), Ge(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & vn) !== 0 || (n.f & $e) !== 0;
      ai(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r(ai, "resume_children");
function ri(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ Ln(n);
      t.append(n), n = s;
    }
}
r(ri, "move_effect");
let qn = !1, Kt = !1;
function cr(e) {
  Kt = e;
}
r(cr, "set_is_destroying_effect");
let ee = null, Ye = !1;
function Be(e) {
  ee = e;
}
r(Be, "set_active_reaction");
let ae = null;
function Je(e) {
  ae = e;
}
r(Je, "set_active_effect");
let Ue = null;
function ii(e) {
  ee !== null && (Ue === null ? Ue = [e] : Ue.push(e));
}
r(ii, "push_reaction_value");
let Ne = null, Ie = 0, Le = null;
function Cs(e) {
  Le = e;
}
r(Cs, "set_untracked_writes");
let si = 1, Wt = 0, zt = Wt;
function ur(e) {
  zt = e;
}
r(ur, "set_update_version");
function oi() {
  return ++si;
}
r(oi, "increment_write_version");
function Hn(e) {
  var t = e.f;
  if ((t & ge) !== 0)
    return !0;
  if (t & me && (e.f &= ~Tt), (t & Qe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (Hn(
        /** @type {Derived} */
        i
      ) && Br(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ve === null && ue(e, ve);
  }
  return !1;
}
r(Hn, "is_dirty");
function li(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Ue !== null && Ut.call(Ue, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & me) !== 0 ? li(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ue(i, ge) : (i.f & ve) !== 0 && ue(i, Qe), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
r(li, "schedule_possible_effect_self_invalidation");
function Ma(e) {
  var t = Ne, n = Ie, a = Le, s = ee, i = Ue, o = be, c = Ye, l = zt, f = e.f;
  Ne = /** @type {null | Value[]} */
  null, Ie = 0, Le = null, ee = (f & ($e | Gt)) === 0 ? e : null, Ue = null, _n(e.ctx), Ye = !1, zt = ++Wt, e.ac !== null && (ra(() => {
    e.ac.abort(en);
  }), e.ac = null);
  try {
    e.f |= wa;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d(), v = e.deps, p = ie?.is_fork;
    if (Ne !== null) {
      var E;
      if (p || Gn(e, Ie), v !== null && Ie > 0)
        for (v.length = Ie + Ne.length, E = 0; E < Ne.length; E++)
          v[Ie + E] = Ne[E];
      else
        e.deps = v = Ne;
      if (Va() && (e.f & ze) !== 0)
        for (E = Ie; E < v.length; E++)
          (v[E].reactions ??= []).push(e);
    } else !p && v !== null && Ie < v.length && (Gn(e, Ie), v.length = Ie);
    if (Dr() && Le !== null && !Ye && v !== null && (e.f & (me | Qe | ge)) === 0)
      for (E = 0; E < /** @type {Source[]} */
      Le.length; E++)
        li(
          Le[E],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Wt++, s.deps !== null)
        for (let T = 0; T < n; T += 1)
          s.deps[T].rv = Wt;
      if (t !== null)
        for (const T of t)
          T.rv = Wt;
      Le !== null && (a === null ? a = Le : a.push(.../** @type {Source[]} */
      Le));
    }
    return (e.f & wt) !== 0 && (e.f ^= wt), _;
  } catch (T) {
    return Wr(T);
  } finally {
    e.f ^= wa, Ne = t, Ie = n, Le = a, ee = s, Ue = i, _n(o), Ye = c, zt = l;
  }
}
r(Ma, "update_reaction");
function Ds(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Ni.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Ut.call(Ne, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & ze) !== 0 && (i.f ^= ze, i.f &= ~Tt), za(i), Da(i), Gn(i, 0);
  }
}
r(Ds, "remove_reaction");
function Gn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Ds(e, n[a]);
}
r(Gn, "remove_reactions");
function An(e) {
  var t = e.f;
  if ((t & yt) === 0) {
    ue(e, ve);
    var n = ae, a = qn;
    if (ae = e, qn = !0, I) {
      var s = On;
      rr(e.component_function);
      var i = (
        /** @type {any} */
        In
      );
      Vn(e.dev_stack ?? In);
    }
    try {
      (t & (vt | Sr)) !== 0 ? As(e) : $r(e), Zr(e);
      var o = Ma(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = si;
      var c;
      I && Yi && (e.f & ge) !== 0 && e.deps;
    } finally {
      qn = a, ae = n, I && (rr(s), Vn(i));
    }
  }
}
r(An, "update_effect");
async function Ms() {
  await Promise.resolve(), ns();
}
r(Ms, "tick");
function u(e) {
  var t = e.f, n = (t & me) !== 0;
  if (ee !== null && !Ye) {
    var a = ae !== null && (ae.f & yt) !== 0;
    if (!a && (Ue === null || !Ut.call(Ue, e))) {
      var s = ee.deps;
      if ((ee.f & wa) !== 0)
        e.rv < Wt && (e.rv = Wt, Ne === null && s !== null && s[Ie] === e ? Ie++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        (ee.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ee] : Ut.call(i, ee) || i.push(ee);
      }
    }
  }
  if (I && us.delete(e), Kt && xt.has(e))
    return xt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Kt) {
      var c = o.v;
      return ((o.f & ve) === 0 && o.reactions !== null || fi(o)) && (c = Ba(o)), xt.set(o, c), c;
    }
    var l = (o.f & ze) === 0 && !Ye && ee !== null && (qn || (ee.f & ze) !== 0), f = o.deps === null;
    Hn(o) && (l && (o.f |= ze), Br(o)), l && !f && ci(o);
  }
  if (Ve?.has(e))
    return Ve.get(e);
  if ((e.f & wt) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function ci(e) {
  if (e.deps !== null) {
    e.f |= ze;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & ze) === 0 && ci(
        /** @type {Derived} */
        t
      );
  }
}
r(ci, "reconnect");
function fi(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (xt.has(t) || (t.f & me) !== 0 && fi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(fi, "depends_on_old_values");
function di(e) {
  var t = Ye;
  try {
    return Ye = !0, e();
  } finally {
    Ye = t;
  }
}
r(di, "untrack");
const vi = /* @__PURE__ */ new Set(), Wa = /* @__PURE__ */ new Set();
function Ws(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || xn.call(t, i), !i.cancelBubble)
      return ra(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Et(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Ws, "create_event");
function ct(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Ws(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Jr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(ct, "event");
function De(e) {
  for (var t = 0; t < e.length; t++)
    vi.add(e[t]);
  for (var n of Wa)
    n(e);
}
r(De, "delegate");
let fr = null;
function xn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  fr = e;
  var o = 0, c = fr === e && e.__root;
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
    Bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ee, _ = ae;
    Be(null), Je(null);
    try {
      for (var v, p = []; i !== null; ) {
        var E = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i["__" + a];
          T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && T.call(i, e);
        } catch (y) {
          v ? p.push(y) : v = y;
        }
        if (e.cancelBubble || E === t || E === null)
          break;
        i = E;
      }
      if (v) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Be(d), Je(_);
    }
  }
}
r(xn, "handle_event_propagation");
function _i(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(_i, "create_fragment_from_html");
function Yn(e, t) {
  var n = (
    /** @type {Effect} */
    ae
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Yn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = _i(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ pt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || Ka ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Yn(c, l);
    } else
      Yn(o, o);
    return o;
  };
}
r(P, "from_html");
function ma() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = kt();
  return e.append(t, n), Yn(t, n), e;
}
r(ma, "comment");
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(O, "append");
const Os = ["touchstart", "touchmove"];
function Ls(e) {
  return Os.includes(e);
}
r(Ls, "is_passive_event");
function D(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(D, "set_text");
function Hs(e, t) {
  return Ps(e, t);
}
r(Hs, "mount");
const Zt = /* @__PURE__ */ new Map();
function Ps(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ys();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((_) => {
    for (var v = 0; v < _.length; v++) {
      var p = _[v];
      if (!c.has(p)) {
        c.add(p);
        var E = Ls(p);
        t.addEventListener(p, xn, { passive: E });
        var T = Zt.get(p);
        T === void 0 ? (document.addEventListener(p, xn, { passive: E }), Zt.set(p, 1)) : Zt.set(p, T + 1);
      }
    }
  }, "event_handle");
  l(Zn(vi)), Wa.add(l);
  var f = void 0, d = Ts(() => {
    var _ = n ?? t.appendChild(kt());
    return is(
      /** @type {TemplateNode} */
      _,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (v) => {
        we({});
        var p = (
          /** @type {ComponentContext} */
          be
        );
        i && (p.c = i), s && (a.$$events = s), f = e(v, a) || {}, Ee();
      }
    ), () => {
      for (var v of c) {
        t.removeEventListener(v, xn);
        var p = (
          /** @type {number} */
          Zt.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, xn), Zt.delete(v)) : Zt.set(v, p);
      }
      Wa.delete(l), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Oa.set(f, d), f;
}
r(Ps, "_mount");
let Oa = /* @__PURE__ */ new WeakMap();
function Rs(e, t) {
  const n = Oa.get(e);
  return n ? (Oa.delete(e), n(t)) : (I && (an in e ? Vi() : Ki()), Promise.resolve());
}
r(Rs, "unmount");
var qe, st, Ae, Ft, Mn, Wn, Xn;
const Xa = class Xa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    V(this, qe, /* @__PURE__ */ new Map());
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
    V(this, st, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    V(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    V(this, Ft, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    V(this, Mn, !0);
    V(this, Wn, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        ie
      );
      if (b(this, qe).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, qe).get(t)
        ), a = b(this, st).get(n);
        if (a)
          Ya(a), b(this, Ft).delete(n);
        else {
          var s = b(this, Ae).get(n);
          s && (b(this, st).set(n, s.effect), b(this, Ae).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of b(this, qe)) {
          if (b(this, qe).delete(i), i === t)
            break;
          const c = b(this, Ae).get(o);
          c && (Te(c.effect), b(this, Ae).delete(o));
        }
        for (const [i, o] of b(this, st)) {
          if (i === n || b(this, Ft).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, qe).values()).includes(i)) {
              var f = document.createDocumentFragment();
              ri(o, f), f.append(kt()), b(this, Ae).set(i, { effect: o, fragment: f });
            } else
              Te(o);
            b(this, Ft).delete(i), b(this, st).delete(i);
          }, "on_destroy");
          b(this, Mn) || !a ? (b(this, Ft).add(i), jt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    V(this, Xn, /* @__PURE__ */ r((t) => {
      b(this, qe).delete(t);
      const n = Array.from(b(this, qe).values());
      for (const [a, s] of b(this, Ae))
        n.includes(a) || (Te(s.effect), b(this, Ae).delete(a));
    }, "#discard"));
    this.anchor = t, G(this, Mn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var a = (
      /** @type {Batch} */
      ie
    ), s = Yr();
    if (n && !b(this, st).has(t) && !b(this, Ae).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = kt();
        i.append(o), b(this, Ae).set(t, {
          effect: Fe(() => n(o)),
          fragment: i
        });
      } else
        b(this, st).set(
          t,
          Fe(() => n(this.anchor))
        );
    if (b(this, qe).set(a, t), s) {
      for (const [c, l] of b(this, st))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of b(this, Ae))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, Wn)), a.ondiscard(b(this, Xn));
    } else
      b(this, Wn).call(this);
  }
};
qe = new WeakMap(), st = new WeakMap(), Ae = new WeakMap(), Ft = new WeakMap(), Mn = new WeakMap(), Wn = new WeakMap(), Xn = new WeakMap(), r(Xa, "BranchManager");
let La = Xa;
if (I) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ r(() => {
          if (n !== void 0)
            return n;
          ji(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var fl = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function te(e, t, n = !1) {
  var a = new La(e), s = n ? vn : 0;
  function i(o, c) {
    a.ensure(o, c);
  }
  r(i, "update_branch"), Ga(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, i(l, c);
    }), o || i(!1, null);
  }, s);
}
r(te, "if_block");
function Xe(e, t) {
  return t;
}
r(Xe, "index");
function Fs(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, c = 0; c < s; c++) {
    let _ = t[c];
    jt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ha(Zn(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
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
      ws(d), d.append(f), e.items.clear();
    }
    Ha(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Fs, "pause_effects");
function Ha(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Te(e[n], t);
}
r(Ha, "destroy_effects");
var dr;
function Ze(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(kt());
  }
  var d = null, _ = /* @__PURE__ */ ds(() => {
    var W = n();
    return pr(W) ? W : W == null ? [] : Zn(W);
  }), v, p = !0;
  function E() {
    y.fallback = d, js(y, v, o, t, a), d !== null && (v.length === 0 ? (d.f & dt) === 0 ? Ya(d) : (d.f ^= dt, kn(d, null, o)) : jt(d, () => {
      d = null;
    }));
  }
  r(E, "commit");
  var T = Ga(() => {
    v = /** @type {V[]} */
    u(_);
    for (var W = v.length, se = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      ie
    ), M = Yr(), F = 0; F < W; F += 1) {
      var g = v[F], w = a(g, F), N = p ? null : c.get(w);
      N ? (N.v && mn(N.v, g), N.i && mn(N.i, F), M && S.unskip_effect(N.e)) : (N = zs(
        c,
        p ? o : dr ??= kt(),
        g,
        w,
        F,
        s,
        t,
        n
      ), p || (N.e.f |= dt), c.set(w, N)), se.add(w);
    }
    if (W === 0 && i && !d && (p ? d = Fe(() => i(o)) : (d = Fe(() => i(dr ??= kt())), d.f |= dt)), W > se.size && (I ? Us(v, a) : Nr("", "", "")), !p)
      if (M) {
        for (const [A, j] of c)
          se.has(A) || S.skip_effect(j.e);
        S.oncommit(E), S.ondiscard(() => {
        });
      } else
        E();
    u(_);
  }), y = { effect: T, items: c, outrogroups: null, fallback: d };
  p = !1;
}
r(Ze, "each");
function Sn(e) {
  for (; e !== null && (e.f & $e) === 0; )
    e = e.next;
  return e;
}
r(Sn, "skip_to_branch");
function js(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = Sn(e.effect.first), f, d = null, _, v = [], p = [], E, T, y, W;
  if (i)
    for (W = 0; W < o; W += 1)
      E = t[W], T = s(E, W), y = /** @type {EachItem} */
      c.get(T).e, (y.f & dt) === 0 && (y.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(y));
  for (W = 0; W < o; W += 1) {
    if (E = t[W], T = s(E, W), y = /** @type {EachItem} */
    c.get(T).e, e.outrogroups !== null)
      for (const j of e.outrogroups)
        j.pending.delete(y), j.done.delete(y);
    if ((y.f & dt) !== 0)
      if (y.f ^= dt, y === l)
        kn(y, null, n);
      else {
        var se = d ? d.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), bt(e, d, y), bt(e, y, se), kn(y, se, n), d = y, v = [], p = [], l = Sn(d.next);
        continue;
      }
    if ((y.f & Ce) !== 0 && (Ya(y), i && (y.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (v.length < p.length) {
          var S = p[0], M;
          d = S.prev;
          var F = v[0], g = v[v.length - 1];
          for (M = 0; M < v.length; M += 1)
            kn(v[M], S, n);
          for (M = 0; M < p.length; M += 1)
            f.delete(p[M]);
          bt(e, F.prev, g.next), bt(e, d, F), bt(e, g, S), l = S, d = g, W -= 1, v = [], p = [];
        } else
          f.delete(y), kn(y, l, n), bt(e, y.prev, y.next), bt(e, y, d === null ? e.effect.first : d.next), bt(e, d, y), d = y;
        continue;
      }
      for (v = [], p = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = Sn(l.next);
      if (l === null)
        continue;
    }
    (y.f & dt) === 0 && v.push(y), d = y, l = Sn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const j of e.outrogroups)
      j.pending.size === 0 && (Ha(Zn(j.done)), e.outrogroups?.delete(j));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var w = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Ce) === 0 && w.push(y);
    for (; l !== null; )
      (l.f & Ce) === 0 && l !== e.fallback && w.push(l), l = Sn(l.next);
    var N = w.length;
    if (N > 0) {
      var A = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < N; W += 1)
          w[W].nodes?.a?.measure();
        for (W = 0; W < N; W += 1)
          w[W].nodes?.a?.fix();
      }
      Fs(e, w, A);
    }
  }
  i && Et(() => {
    if (_ !== void 0)
      for (y of _)
        y.nodes?.a?.apply();
  });
}
r(js, "reconcile");
function zs(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ hs(n, !1, !1) : qt(n) : null, f = (o & 2) !== 0 ? qt(s) : null;
  return I && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Fe(() => (i(t, l ?? n, f ?? s, c), () => {
      e.delete(a);
    }))
  };
}
r(zs, "create_item");
function kn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & dt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ln(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(kn, "move");
function bt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(bt, "link");
function Us(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), c = String(s);
      let l = String(i);
      l.startsWith("[object ") && (l = null), Nr(o, c, l);
    }
    n.set(i, s);
  }
}
r(Us, "validate_each_keys");
function Bs(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  Y(() => {
    var c = (
      /** @type {Effect} */
      ae
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (ei(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = _i(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ pt(f)), Yn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ pt(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ pt(f)
          );
      else
        i.before(f);
    }
  });
}
r(Bs, "html");
const vr = [...` 	
\r\f \v\uFEFF`];
function qs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var i = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var c = o + i;
          (o === 0 || vr.includes(a[o - 1])) && (c === a.length || vr.includes(a[c])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(c + 1) : o = c;
        }
  }
  return a === "" ? null : a;
}
r(qs, "to_class");
function Ks(e, t) {
  return e == null ? null : String(e);
}
r(Ks, "to_style");
function Vt(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = qs(n, a, i);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var f = !!i[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return i;
}
r(Vt, "set_class");
function zn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var i = Ks(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
r(zn, "set_style");
const Vs = /* @__PURE__ */ Symbol("is custom element"), Gs = /* @__PURE__ */ Symbol("is html");
function je(e, t) {
  var n = hi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(je, "set_value");
function C(e, t, n, a) {
  var s = hi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Mi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ys(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(C, "set_attribute");
function hi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Vs]: e.nodeName.includes("-"),
      [Gs]: e.namespaceURI === ki
    }
  );
}
r(hi, "get_attributes");
var _r = /* @__PURE__ */ new Map();
function Ys(e) {
  var t = e.getAttribute("is") || e.nodeName, n = _r.get(t);
  if (n) return n;
  _r.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = Ti(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = yr(s);
  }
  return n;
}
r(Ys, "get_setters");
function bi(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Ss(e, "input", async (s) => {
    I && e.type === "checkbox" && ar();
    var i = s ? e.defaultValue : e.value;
    if (i = ga(e) ? pa(i) : i, n(i), ie !== null && a.add(ie), await Ms(), i !== (i = t())) {
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
  di(t) == null && e.value && (n(ga(e) ? pa(e.value) : e.value), ie !== null && a.add(ie)), Xr(() => {
    I && e.type === "checkbox" && ar();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Sa ?? ie
      );
      if (a.has(i))
        return;
    }
    ga(e) && s === pa(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(bi, "bind_value");
function ga(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(ga, "is_numberlike_input");
function pa(e) {
  return e === "" ? null : +e;
}
r(pa, "to_number");
const $t = [];
function Js(e, t) {
  return {
    subscribe: Qs(e, t).subscribe
  };
}
r(Js, "readable");
function Qs(e, t = va) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(c) {
    if (Ir(e, c) && (e = c, n)) {
      const l = !$t.length;
      for (const f of a)
        f[1](), $t.push(f, e);
      if (l) {
        for (let f = 0; f < $t.length; f += 2)
          $t[f][0]($t[f + 1]);
        $t.length = 0;
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
  function o(c, l = va) {
    const f = [c, l];
    return a.add(f), a.size === 1 && (n = t(s, i) || va), c(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: i, subscribe: o };
}
r(Qs, "writable");
function Xs(e) {
  var n, a, s;
  const i = class i extends e {
    constructor() {
      super(...arguments);
      V(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: _ } = d;
          return _ && l.push(_.toUpperCase()), l;
        },
        []
      ));
      V(this, a, /* @__PURE__ */ Re(tn({})));
      V(this, s, {});
    }
    get $state() {
      return u(b(this, a));
    }
    set $state(l) {
      Ke(b(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && G(this, s, Hs(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Rs(b(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: d } = f;
      if (!d) return;
      const _ = d;
      if (!b(this, n).includes(_.tagName)) return;
      const v = _._getValue();
      this.document.update({ [_.name]: v });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), Oe(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(Xs, "SvelteApplicationMixin");
const Zs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Zs);
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
r(k, "localize");
function gn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(gn, "format");
var $s = /* @__PURE__ */ P("<span> </span>"), eo = /* @__PURE__ */ P('<span style="color: var(--nos-text-secondary, #888)">—</span>'), to = /* @__PURE__ */ P('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function no(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((A) => t.actor.update({ img: A }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ z(() => {
    const A = Object.keys(t.hitDiceData.bySize);
    return A.length === 0 ? "—" : A.length === 1 ? `d${A[0]}` : A.map((j) => `d${j}`).join("/");
  });
  var i = to(), o = h(i);
  o.__click = a;
  var c = h(o), l = m(o, 2), f = h(l), d = h(f), _ = m(f, 2);
  _.__change = ({ target: A }) => t.actor.update({ name: A.value });
  var v = m(l, 2), p = h(v), E = h(p), T = m(p, 2), y = h(T);
  {
    var W = /* @__PURE__ */ r((A) => {
      var j = $s(), q = h(j);
      Y(() => D(q, t.metaData)), O(A, j);
    }, "consequent"), se = /* @__PURE__ */ r((A) => {
      var j = eo();
      O(A, j);
    }, "alternate");
    te(y, (A) => {
      t.metaData ? A(W) : A(se, !1);
    });
  }
  var S = m(y, 2);
  S.__click = () => t.actor.editMetadata();
  var M = m(v, 2), F = h(M), g = h(F), w = m(F, 2), N = h(w);
  Y(
    (A, j, q, L, K) => {
      C(c, "src", u(n)), C(c, "alt", t.actor.reactive.name), D(d, A), je(_, t.actor.reactive.name), _.disabled = !t.editingEnabled, D(E, j), C(S, "aria-label", q), C(S, "data-tooltip", L), S.disabled = !t.editingEnabled, D(g, K), D(N, u(s));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), O(e, i), Ee();
}
r(no, "HeaderRow");
De(["click", "change"]);
function Ja(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ja, "formatModifier");
var ao = /* @__PURE__ */ P('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ro(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ z(() => k(n[t.abilityKey])), s = /* @__PURE__ */ z(() => gn("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ z(() => gn("NWS.RollSave", { name: u(a) }));
  var o = ao(), c = h(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), _ = h(d), v = m(f, 2), p = h(v);
  Y(
    (E) => {
      l = Vt(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), C(c, "data-tooltip", u(i)), C(c, "aria-label", u(i)), C(f, "data-tooltip", u(s)), C(f, "aria-label", u(s)), D(_, E), D(p, u(a));
    },
    [() => Ja(t.ability.mod)]
  ), O(e, o), Ee();
}
r(ro, "AbilityBox");
De(["click"]);
var io = /* @__PURE__ */ P('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), so = /* @__PURE__ */ P('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function oo(e, t) {
  we(t, !0);
  var n = so(), a = h(n), s = h(a), i = m(a, 2);
  Ze(i, 21, () => ({ length: t.wounds.max }), Xe, (o, c, l) => {
    var f = io();
    let d;
    f.__click = () => t.toggleWounds(l + 1), Y(
      (_, v) => {
        d = Vt(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), C(f, "data-tooltip", _), C(f, "aria-label", v);
      },
      [
        () => gn("NWS.ToggleWound", { n: l + 1 }),
        () => gn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), Y((o) => D(s, o), [() => k("NWS.Wounds")]), O(e, n), Ee();
}
r(oo, "WoundTracker");
De(["click"]);
var lo = /* @__PURE__ */ P('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), co = /* @__PURE__ */ P('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), uo = /* @__PURE__ */ P('<i class="fa-solid fa-heart"></i>'), fo = /* @__PURE__ */ P('<div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div></div>'), vo = /* @__PURE__ */ P('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-hp"><span class="nos-combat__sub"> </span> <div class="nos-hp__bar"><input class="nos-hp__max" type="number"/></div> <div class="nos-hp__bar"><input class="nos-hp__current" type="number"/></div> <span class="nos-combat__sub"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <!></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function _o(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.movement);
  var l = vo(), f = h(l), d = h(f);
  Ze(d, 17, () => n, Xe, (oe, ye) => {
    ro(oe, {
      get abilityKey() {
        return u(ye);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(ye)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(ye)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var _ = m(d, 2);
  {
    var v = /* @__PURE__ */ r((oe) => {
      var ye = lo(), ht = Nt(ye);
      ht.__click = () => t.actor.configureSavingThrows();
      var Jt = m(ht, 2);
      Jt.__click = () => t.actor.configureAbilityScores(), Y(
        (At, En) => {
          C(ht, "data-tooltip", At), C(Jt, "data-tooltip", En);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), O(oe, ye);
    }, "consequent");
    te(_, (oe) => {
      t.editingEnabled && oe(v);
    });
  }
  var p = m(f, 2), E = h(p), T = h(E), y = h(T), W = m(h(y), 2), se = h(W), S = m(W, 2), M = h(S), F = m(y, 2), g = m(h(F), 2), w = h(g), N = m(g, 2);
  N.__change = ({ target: oe }) => t.updateTempHP(Number(oe.value));
  var A = m(T, 2);
  let j;
  var q = h(A), L = h(q);
  {
    var K = /* @__PURE__ */ r((oe) => {
      var ye = co();
      O(oe, ye);
    }, "consequent_1"), Q = /* @__PURE__ */ r((oe) => {
      var ye = uo();
      O(oe, ye);
    }, "alternate");
    te(L, (oe) => {
      t.isBloodied ? oe(K) : oe(Q, !1);
    });
  }
  var B = m(q, 2), re = h(B), X = m(B, 2), J = h(X), Z = h(J), x = m(J, 2), R = h(x);
  R.__change = ({ target: oe }) => t.updateMaxHP(Number(oe.value));
  var H = m(x, 2), ne = h(H);
  ne.__change = ({ target: oe }) => t.updateCurrentHP(Number(oe.value));
  var U = m(H, 2), $ = h(U), fe = m(X, 2);
  fe.__click = () => t.actor.configureHitPoints();
  var de = m(A, 2), Me = h(de);
  Me.__click = () => t.rollHitDice();
  var le = m(h(Me), 2), Se = h(le), ce = m(le, 2), We = h(ce), _t = m(ce, 2);
  _t.__click = (oe) => {
    oe.stopPropagation(), t.actor.configureHitDice();
  };
  var yn = m(Me, 2);
  {
    var wn = /* @__PURE__ */ r((oe) => {
      var ye = fo(), ht = h(ye), Jt = h(ht), At = m(ht, 2), En = h(At), fa = m(At, 2), Qt = h(fa);
      Qt.__change = ({ target: Ct }) => t.updateCurrentMana(Number(Ct.value));
      var Xt = m(Qt, 4);
      Xt.__change = ({ target: Ct }) => t.updateMaxMana(Number(Ct.value)), Y(
        (Ct) => {
          zn(Jt, `color: ${t.mana.color ?? "#6a5acd" ?? ""};`), zn(At, `color: ${t.mana.color ?? "#6a5acd" ?? ""};`), D(En, Ct), je(Qt, t.mana.current), zn(Qt, `color: ${t.mana.color ?? "#6a5acd" ?? ""};`), je(Xt, t.mana.max || t.mana.baseMax), Xt.disabled = !t.editingEnabled, zn(Xt, `color: ${t.mana.color ?? "#6a5acd" ?? ""};`);
        },
        [() => k("NWS.Mana")]
      ), O(oe, ye);
    }, "consequent_2");
    te(yn, (oe) => {
      t.hasMana && oe(wn);
    });
  }
  var ia = m(de, 2), Yt = h(ia);
  Yt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Pn = m(h(Yt), 2), sa = h(Pn), oa = m(Pn, 2), la = h(oa), ca = m(Yt, 2), Rn = m(h(ca), 2), mi = h(Rn), Za = m(Rn, 2), gi = h(Za), ua = m(Za, 2);
  ua.__click = () => t.actor.configureMovement();
  var pi = m(p, 2);
  oo(pi, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), Y(
    (oe, ye, ht, Jt, At, En, fa, Qt, Xt, Ct, yi, wi, Ei) => {
      D(se, oe), D(M, u(i).value), D(w, ye), je(N, u(s).temp ?? 0), j = Vt(A, 1, "nos-combat__stat", null, j, { "nos-hp--bloodied": t.isBloodied }), D(re, ht), D(Z, Jt), je(R, u(s).max), R.disabled = !t.editingEnabled, je(ne, u(s).value), D($, At), C(fe, "data-tooltip", En), fe.disabled = !t.editingEnabled, D(Se, fa), D(We, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), C(_t, "data-tooltip", Qt), _t.disabled = !t.editingEnabled, C(Yt, "data-tooltip", Xt), D(sa, Ct), D(la, yi), D(mi, wi), D(gi, u(c).walk), C(ua, "data-tooltip", Ei), ua.disabled = !t.editingEnabled;
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
      () => Ja(u(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), O(e, l), Ee();
}
r(_o, "StatsRow");
De(["click", "change"]);
var ho = /* @__PURE__ */ P('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function bo(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ z(() => n[t.skillKey]), o = /* @__PURE__ */ z(() => k(a[u(i)])), c = /* @__PURE__ */ z(() => k(s[t.skillKey]));
  var l = ho();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), _ = m(f, 2), v = h(_), p = m(_, 2), E = h(p);
  Y(
    (T, y) => {
      C(l, "data-tooltip", T), D(d, u(o)), D(v, y), D(E, u(c));
    },
    [
      () => gn("NWS.RollSkill", { name: u(c) }),
      () => Ja(t.skill.mod)
    ]
  ), O(e, l), Ee();
}
r(bo, "SkillCell");
De(["click"]);
var mo = /* @__PURE__ */ P('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), go = /* @__PURE__ */ P('<section class="nos-skills-row"><!> <!></section>');
function po(e, t) {
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
  var a = go(), s = h(a);
  Ze(s, 17, () => n, Xe, (c, l) => {
    bo(c, {
      get skillKey() {
        return u(l);
      },
      get skill() {
        return t.actor.reactive.system.skills[u(l)];
      },
      get actor() {
        return t.actor;
      }
    });
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = mo();
      l.__click = () => t.actor.configureSkills(), Y((f) => C(l, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), O(c, l);
    }, "consequent");
    te(i, (c) => {
      t.editingEnabled && c(o);
    });
  }
  O(e, a), Ee();
}
r(po, "SkillsRow");
De(["click"]);
var yo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), So = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), xo = /* @__PURE__ */ P('<div class="nos-feature-row"><!> <!></div>'), ko = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), No = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), To = /* @__PURE__ */ P('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Io = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Ao = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Co = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Do = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Mo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Wo = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Oo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Lo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ho = /* @__PURE__ */ P("<!> <!> <!> <!> <!>", 1);
function hr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ z(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), i = /* @__PURE__ */ z(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ z(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), c = /* @__PURE__ */ z(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
  function l(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(l, "configureItem");
  function f(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(f, "deleteItem");
  function d(g, w) {
    const N = { type: "Item", uuid: w.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(N));
  }
  r(d, "onDragStart");
  var _ = Ho(), v = Nt(_);
  {
    var p = /* @__PURE__ */ r((g) => {
      var w = xo(), N = h(w);
      {
        var A = /* @__PURE__ */ r((L) => {
          var K = wo(), Q = h(K), B = h(Q), re = m(Q, 2), X = h(re), J = m(X, 2);
          J.__click = () => l(u(s).id);
          var Z = h(J), x = m(J, 2);
          {
            var R = /* @__PURE__ */ r((H) => {
              var ne = yo(), U = h(ne);
              U.__click = () => l(u(s).id);
              var $ = m(U, 2);
              $.__click = () => f(u(s).id), O(H, ne);
            }, "consequent");
            te(x, (H) => {
              t.editingEnabled && H(R);
            });
          }
          Y(
            (H) => {
              D(B, H), C(X, "src", u(s).img), C(X, "alt", u(s).name), D(Z, u(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), ct("dragstart", re, (H) => d(H, u(s))), O(L, K);
        }, "consequent_1");
        te(N, (L) => {
          u(s) && L(A);
        });
      }
      var j = m(N, 2);
      {
        var q = /* @__PURE__ */ r((L) => {
          var K = So(), Q = h(K), B = h(Q), re = m(Q, 2), X = h(re), J = m(X, 2);
          J.__click = () => l(u(i).id);
          var Z = h(J), x = m(J, 2);
          {
            var R = /* @__PURE__ */ r((H) => {
              var ne = Eo(), U = h(ne);
              U.__click = () => l(u(i).id);
              var $ = m(U, 2);
              $.__click = () => f(u(i).id), O(H, ne);
            }, "consequent_2");
            te(x, (H) => {
              t.editingEnabled && H(R);
            });
          }
          Y(
            (H) => {
              D(B, H), C(X, "src", u(i).img), C(X, "alt", u(i).name), D(Z, u(i).name);
            },
            [() => k("NWS.Background")]
          ), ct("dragstart", re, (H) => d(H, u(i))), O(L, K);
        }, "consequent_3");
        te(j, (L) => {
          u(i) && L(q);
        });
      }
      O(g, w);
    }, "consequent_4");
    te(v, (g) => {
      (u(s) || u(i)) && g(p);
    });
  }
  var E = m(v, 2);
  {
    var T = /* @__PURE__ */ r((g) => {
      var w = Io(), N = h(w), A = h(N), j = m(N, 2), q = h(j), L = m(q, 2);
      L.__click = () => l(u(o).id);
      var K = h(L), Q = m(L, 2);
      {
        var B = /* @__PURE__ */ r((J) => {
          var Z = ko(), x = h(Z);
          x.__click = () => l(u(o).id);
          var R = m(x, 2);
          R.__click = () => f(u(o).id), O(J, Z);
        }, "consequent_5");
        te(Q, (J) => {
          t.editingEnabled && J(B);
        });
      }
      var re = m(j, 2);
      {
        var X = /* @__PURE__ */ r((J) => {
          var Z = To(), x = h(Z), R = m(x, 2);
          R.__click = () => l(u(c).id);
          var H = h(R), ne = m(R, 2);
          {
            var U = /* @__PURE__ */ r(($) => {
              var fe = No(), de = h(fe);
              de.__click = () => l(u(c).id);
              var Me = m(de, 2);
              Me.__click = () => f(u(c).id), O($, fe);
            }, "consequent_6");
            te(ne, ($) => {
              t.editingEnabled && $(U);
            });
          }
          Y(() => {
            C(x, "src", u(c).img), C(x, "alt", u(c).name), D(H, u(c).name);
          }), ct("dragstart", Z, ($) => d($, u(c))), O(J, Z);
        }, "consequent_7");
        te(re, (J) => {
          u(c) && J(X);
        });
      }
      Y(
        (J, Z) => {
          D(A, J), C(q, "src", u(o).img), C(q, "alt", u(o).name), D(K, `${u(o).name ?? ""} (${Z ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), ct("dragstart", j, (J) => d(J, u(o))), O(g, w);
    }, "consequent_8");
    te(E, (g) => {
      u(o) && g(T);
    });
  }
  var y = m(E, 2);
  {
    var W = /* @__PURE__ */ r((g) => {
      var w = Do(), N = h(w), A = h(N), j = m(N, 2);
      Ze(j, 21, () => u(n), Xe, (q, L) => {
        var K = Co(), Q = h(K), B = m(Q, 2);
        B.__click = () => l(u(L).id);
        var re = h(B), X = m(B, 2);
        {
          var J = /* @__PURE__ */ r((Z) => {
            var x = Ao(), R = h(x);
            R.__click = () => l(u(L).id);
            var H = m(R, 2);
            H.__click = () => f(u(L).id), O(Z, x);
          }, "consequent_9");
          te(X, (Z) => {
            t.editingEnabled && Z(J);
          });
        }
        Y(() => {
          C(Q, "src", u(L).img), C(Q, "alt", u(L).name), D(re, u(L).name);
        }), ct("dragstart", K, (Z) => d(Z, u(L))), O(q, K);
      }), Y((q) => D(A, q), [() => k("NWS.Features")]), O(g, w);
    }, "consequent_10");
    te(y, (g) => {
      u(n).length > 0 && g(W);
    });
  }
  var se = m(y, 2);
  {
    var S = /* @__PURE__ */ r((g) => {
      var w = Oo(), N = h(w), A = h(N), j = m(N, 2);
      Ze(j, 21, () => u(a), Xe, (q, L) => {
        var K = Wo(), Q = h(K), B = m(Q, 2);
        B.__click = () => l(u(L).id);
        var re = h(B), X = m(B, 2);
        {
          var J = /* @__PURE__ */ r((Z) => {
            var x = Mo(), R = h(x);
            R.__click = () => l(u(L).id);
            var H = m(R, 2);
            H.__click = () => f(u(L).id), O(Z, x);
          }, "consequent_11");
          te(X, (Z) => {
            t.editingEnabled && Z(J);
          });
        }
        Y(() => {
          C(Q, "src", u(L).img), C(Q, "alt", u(L).name), D(re, u(L).name);
        }), ct("dragstart", K, (Z) => d(Z, u(L))), O(q, K);
      }), Y((q) => D(A, q), [() => k("NWS.Boons")]), O(g, w);
    }, "consequent_12");
    te(se, (g) => {
      u(a).length > 0 && g(S);
    });
  }
  var M = m(se, 2);
  {
    var F = /* @__PURE__ */ r((g) => {
      var w = Lo(), N = h(w);
      Y((A) => D(N, A), [() => k("NWS.DropFeaturesHere")]), O(g, w);
    }, "consequent_13");
    te(M, (g) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && g(F);
    });
  }
  O(e, _), Ee();
}
r(hr, "FeaturesTab");
De(["click"]);
var Po = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ro = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Fo = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), jo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), zo = /* @__PURE__ */ P('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), Uo = /* @__PURE__ */ P('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Bo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), qo = /* @__PURE__ */ P('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function br(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Re(""), a = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, M) => (S.sort ?? 0) - (M.sort ?? 0))), s = /* @__PURE__ */ z(() => u(n) ? u(a).filter((S) => S.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ z(() => {
    const S = {};
    for (const M of u(s)) {
      const F = M.system?.tier ?? 0, g = M.system?.isUtility ?? !1, w = g ? "_utility" : `_tier_${F}`, N = g ? k("NWS.Utility") : gn("NWS.Tier", { n: F });
      S[w] ??= { label: N, spells: [] }, S[w].spells.push(M);
    }
    return Object.entries(S).sort(([M], [F]) => {
      if (M === "_utility") return 1;
      if (F === "_utility") return -1;
      const g = parseInt(M.replace("_tier_", "")), w = parseInt(F.replace("_tier_", ""));
      return g - w;
    });
  });
  function o(S) {
    t.actor.items.get(S)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(S) {
    t.actor.deleteEmbeddedDocuments("Item", [S]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  r(l, "createSpell");
  function f(S) {
    t.actor.activateItem(S);
  }
  r(f, "castSpell");
  function d(S, M) {
    const F = { type: "Item", uuid: M.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(F));
  }
  r(d, "onDragStart");
  var _ = qo(), v = Nt(_), p = m(h(v), 2), E = m(p, 2);
  {
    var T = /* @__PURE__ */ r((S) => {
      var M = Po();
      M.__click = l;
      var F = m(h(M));
      Y((g) => D(F, ` ${g ?? ""}`), [() => k("NWS.New")]), O(S, M);
    }, "consequent");
    te(E, (S) => {
      t.editingEnabled && S(T);
    });
  }
  var y = m(v, 2);
  Ze(y, 17, () => u(i), Xe, (S, M) => {
    var F = /* @__PURE__ */ z(() => Er(u(M), 2));
    let g = /* @__PURE__ */ r(() => u(F)[1], "tier");
    var w = Uo(), N = h(w), A = h(N), j = m(N, 2);
    Ze(j, 21, () => g().spells, Xe, (q, L) => {
      var K = zo(), Q = h(K), B = m(Q, 2);
      B.__click = () => f(u(L).id);
      var re = h(B), X = m(re);
      {
        var J = /* @__PURE__ */ r(($) => {
          var fe = Ro();
          Y((de) => C(fe, "data-tooltip", de), [() => k("NWS.Concentration")]), O($, fe);
        }, "consequent_1");
        te(X, ($) => {
          u(L).system?.concentration && $(J);
        });
      }
      var Z = m(X, 2);
      {
        var x = /* @__PURE__ */ r(($) => {
          var fe = Fo();
          Y((de) => C(fe, "data-tooltip", de), [() => k("NWS.Utility")]), O($, fe);
        }, "consequent_2");
        te(Z, ($) => {
          u(L).system?.isUtility && $(x);
        });
      }
      var R = m(B, 2), H = h(R), ne = m(R, 2);
      {
        var U = /* @__PURE__ */ r(($) => {
          var fe = jo(), de = h(fe);
          de.__click = () => o(u(L).id);
          var Me = m(de, 2);
          Me.__click = () => c(u(L).id), O($, fe);
        }, "consequent_3");
        te(ne, ($) => {
          t.editingEnabled && $(U);
        });
      }
      Y(() => {
        C(Q, "src", u(L).img), C(Q, "alt", u(L).name), D(re, `${u(L).name ?? ""} `), D(H, u(L).system?.activationCost ?? "");
      }), ct("dragstart", K, ($) => d($, u(L))), O(q, K);
    }), Y(() => D(A, g().label)), O(S, w);
  });
  var W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var M = Bo(), F = h(M);
      Y((g) => D(F, g), [() => k("NWS.DropSpellsHere")]), O(S, M);
    }, "consequent_4");
    te(W, (S) => {
      u(a).length === 0 && S(se);
    });
  }
  Y((S) => C(p, "placeholder", S), [() => k("NWS.SearchSpells")]), bi(p, () => u(n), (S) => Ke(n, S)), O(e, _), Ee();
}
r(br, "SpellsTab");
De(["click"]);
var Ko = /* @__PURE__ */ P('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), Vo = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Go = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Yo = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Jo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Qo = /* @__PURE__ */ P('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function mr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Re(""), a = /* @__PURE__ */ z(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((g) => g.type === "object").sort((g, w) => (g.sort ?? 0) - (w.sort ?? 0))), i = /* @__PURE__ */ z(() => u(n) ? u(s).filter((g) => g.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
  function o(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(l, "createObject");
  function f(g, w) {
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, Math.round(Number(w)))
    });
  }
  r(f, "updateCurrency");
  function d(g, w) {
    const N = u(a)[g]?.value ?? 0;
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, N + w)
    });
  }
  r(d, "adjustCurrency");
  function _(g, w) {
    t.actor.items.get(g)?.update({ "system.quantity": Number(w) });
  }
  r(_, "updateQuantity");
  function v(g, w) {
    const N = { type: "Item", uuid: w.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(N));
  }
  r(v, "onDragStart");
  var p = Qo(), E = Nt(p);
  Ze(E, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Xe, (g, w) => {
    var N = /* @__PURE__ */ z(() => Er(w, 2));
    let A = /* @__PURE__ */ r(() => u(N)[0], "type"), j = /* @__PURE__ */ r(() => u(N)[1], "labelKey");
    var q = Ko(), L = h(q), K = h(L), Q = m(L, 2);
    Q.__click = () => d(A(), -1);
    var B = m(Q, 2);
    B.__change = ({ target: X }) => f(A(), X.value);
    var re = m(B, 2);
    re.__click = () => d(A(), 1), Y(
      (X, J, Z) => {
        C(L, "for", `currency-${A() ?? ""}`), D(K, X), C(Q, "aria-label", `-1 ${J ?? ""}`), C(B, "id", `currency-${A() ?? ""}`), je(B, u(a)[A()]?.value ?? 0), C(re, "aria-label", `+1 ${Z ?? ""}`);
      },
      [
        () => k(j()),
        () => k(j()),
        () => k(j())
      ]
    ), O(g, q);
  });
  var T = m(E, 2), y = m(h(T), 2), W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((g) => {
      var w = Vo();
      w.__click = l;
      var N = m(h(w));
      Y((A) => D(N, ` ${A ?? ""}`), [() => k("NWS.New")]), O(g, w);
    }, "consequent");
    te(W, (g) => {
      t.editingEnabled && g(se);
    });
  }
  var S = m(T, 2);
  Ze(S, 21, () => u(i), Xe, (g, w) => {
    var N = Yo(), A = h(N), j = m(A, 2);
    j.__click = () => o(u(w).id);
    var q = h(j), L = m(j, 2);
    L.__change = ({ target: B }) => _(u(w).id, B.value);
    var K = m(L, 2);
    {
      var Q = /* @__PURE__ */ r((B) => {
        var re = Go(), X = h(re);
        X.__click = () => o(u(w).id);
        var J = m(X, 2);
        J.__click = () => c(u(w).id), O(B, re);
      }, "consequent_1");
      te(K, (B) => {
        t.editingEnabled && B(Q);
      });
    }
    Y(() => {
      C(A, "src", u(w).img), C(A, "alt", u(w).name), D(q, u(w).name), je(L, u(w).system?.quantity ?? 1);
    }), ct("dragstart", N, (B) => v(B, u(w))), O(g, N);
  });
  var M = m(S, 2);
  {
    var F = /* @__PURE__ */ r((g) => {
      var w = Jo(), N = h(w);
      Y((A) => D(N, A), [() => k("NWS.DropInventoryHere")]), O(g, w);
    }, "consequent_2");
    te(M, (g) => {
      u(s).length === 0 && g(F);
    });
  }
  Y((g) => C(y, "placeholder", g), [() => k("NWS.SearchItems")]), bi(y, () => u(n), (g) => Ke(n, g)), O(e, p), Ee();
}
r(mr, "InventoryTab");
De(["click", "change"]);
var Xo = /* @__PURE__ */ P(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function gr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.system.details), a = /* @__PURE__ */ z(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ z(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ z(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ z(() => (u(a).weapons ?? []).join(", "));
  var c = Xo(), l = h(c), f = h(l), d = h(f), _ = m(f, 2);
  _.__change = ({ target: ce }) => t.actor.update({ "system.details.age": ce.value });
  var v = m(l, 2), p = h(v), E = h(p), T = m(p, 2);
  T.__change = ({ target: ce }) => t.actor.update({ "system.details.gender": ce.value });
  var y = m(v, 2), W = h(y), se = h(W), S = m(W, 2);
  S.__change = ({ target: ce }) => t.actor.update({ "system.details.height": ce.value });
  var M = m(y, 2), F = h(M), g = h(F), w = m(F, 2);
  w.__change = ({ target: ce }) => t.actor.update({ "system.details.weight": ce.value });
  var N = m(M, 2), A = h(N), j = h(A), q = m(A, 2), L = h(q), K = m(q, 2);
  K.__click = () => t.actor.configureLanguageProficiencies();
  var Q = m(N, 2), B = h(Q), re = h(B), X = m(B, 2), J = h(X), Z = m(X, 2);
  Z.__click = () => t.actor.configureArmorProficiencies();
  var x = m(Q, 2), R = h(x), H = h(R), ne = m(R, 2), U = h(ne), $ = m(ne, 2);
  $.__click = () => t.actor.configureWeaponProficiencies();
  var fe = m(x, 2), de = h(fe), Me = h(de), le = m(de, 2), Se = h(le);
  Bs(Se, () => u(n).notes ?? ""), Y(
    (ce, We, _t, yn, wn, ia, Yt, Pn, sa, oa, la, ca, Rn) => {
      D(d, ce), je(_, u(n).age ?? ""), _.disabled = !t.editingEnabled, D(E, We), je(T, u(n).gender ?? ""), T.disabled = !t.editingEnabled, D(se, _t), je(S, u(n).height ?? ""), C(S, "placeholder", yn), S.disabled = !t.editingEnabled, D(g, wn), je(w, u(n).weight ?? ""), C(w, "placeholder", ia), w.disabled = !t.editingEnabled, D(j, Yt), D(L, u(s) || "—"), C(K, "data-tooltip", Pn), K.disabled = !t.editingEnabled, D(re, sa), D(J, u(i) || "—"), C(Z, "data-tooltip", oa), Z.disabled = !t.editingEnabled, D(H, la), D(U, u(o) || "—"), C($, "data-tooltip", ca), $.disabled = !t.editingEnabled, D(Me, Rn), C(le, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), ct("blur", le, ({ target: ce }) => t.actor.update({ "system.details.notes": ce.innerHTML })), O(e, c), Ee();
}
r(gr, "BioTab");
De(["change", "click"]);
var Zo = /* @__PURE__ */ P('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), $o = /* @__PURE__ */ P('<div class="nos-slot nos-slot--empty"> </div>'), el = /* @__PURE__ */ P("<!> <!>", 1);
function tl(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = el(), s = Nt(a);
  Ze(s, 17, () => u(n), Xe, (c, l) => {
    var f = Zo(), d = h(f), _ = m(d, 2);
    _.__click = () => t.actor.activateItem(u(l).id);
    var v = h(_);
    Y(() => {
      C(d, "src", u(l).img), C(d, "alt", u(l).name), C(_, "data-tooltip", u(l).name), D(v, u(l).name);
    }), O(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = $o(), f = h(l);
      Y((d) => D(f, d), [() => k("NWS.NoWeapons")]), O(c, l);
    }, "consequent");
    te(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  O(e, a), Ee();
}
r(tl, "InventorySlots");
De(["click"]);
var nl = /* @__PURE__ */ P('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), al = /* @__PURE__ */ P('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), rl = /* @__PURE__ */ P('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function il(e, t) {
  we(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: hr
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: br
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: mr
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: gr
    }
  ];
  let a = /* @__PURE__ */ Re("features"), s = /* @__PURE__ */ z(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ z(() => t.actor.reactive.system.inventory);
  var o = rl(), c = h(o);
  Ze(c, 21, () => n, Xe, (S, M) => {
    var F = nl();
    let g;
    F.__click = () => Ke(a, u(M).name, !0);
    var w = h(F), N = m(w);
    Y(
      (A) => {
        g = Vt(F, 1, "nos-tab-btn", null, g, { "nos-tab-btn--active": u(a) === u(M).name }), Vt(w, 1, u(M).icon), D(N, ` ${A ?? ""}`);
      },
      [() => k(u(M).labelKey)]
    ), O(S, F);
  });
  var l = m(c, 2), f = h(l);
  {
    var d = /* @__PURE__ */ r((S) => {
      hr(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), _ = /* @__PURE__ */ r((S) => {
      var M = ma(), F = Nt(M);
      {
        var g = /* @__PURE__ */ r((N) => {
          br(N, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), w = /* @__PURE__ */ r((N) => {
          var A = ma(), j = Nt(A);
          {
            var q = /* @__PURE__ */ r((K) => {
              mr(K, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), L = /* @__PURE__ */ r((K) => {
              var Q = ma(), B = Nt(Q);
              {
                var re = /* @__PURE__ */ r((X) => {
                  gr(X, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                te(
                  B,
                  (X) => {
                    u(a) === "bio" && X(re);
                  },
                  !0
                );
              }
              O(K, Q);
            }, "alternate");
            te(
              j,
              (K) => {
                u(a) === "inventory" ? K(q) : K(L, !1);
              },
              !0
            );
          }
          O(N, A);
        }, "alternate_1");
        te(
          F,
          (N) => {
            u(a) === "spells" ? N(g) : N(w, !1);
          },
          !0
        );
      }
      O(S, M);
    }, "alternate_2");
    te(f, (S) => {
      u(a) === "features" ? S(d) : S(_, !1);
    });
  }
  var v = m(l, 2), p = h(v), E = h(p), T = m(v, 2), y = h(T);
  tl(y, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return t.editingEnabled;
    }
  });
  var W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var M = al(), F = h(M);
      Y(() => D(F, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), O(S, M);
    }, "consequent_4");
    te(W, (S) => {
      u(s) && S(se);
    });
  }
  Y((S) => D(E, S), [() => k("NWS.Weapons")]), O(e, o), Ee();
}
r(il, "ContentArea");
De(["click"]);
var sl = /* @__PURE__ */ P('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function ol(e, t) {
  we(t, !0);
  var n = sl(), a = h(n);
  let s;
  a.__click = function(...d) {
    t.toggleEditingEnabled?.apply(this, d);
  };
  var i = h(a), o = m(a, 2);
  o.__click = () => t.actor.triggerLevelUp();
  var c = m(o, 2);
  c.__click = () => t.actor.triggerLevelDown();
  var l = m(c, 2);
  l.__click = () => t.actor.triggerRest({ restType: "field" });
  var f = m(l, 2);
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), Y(
    (d, _, v, p, E, T, y, W, se, S) => {
      s = Vt(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), C(a, "aria-pressed", t.editingEnabled), C(a, "aria-label", d), C(a, "data-tooltip", _), Vt(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), C(o, "aria-label", v), C(o, "data-tooltip", p), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, C(c, "aria-label", E), C(c, "data-tooltip", T), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, C(l, "aria-label", y), C(l, "data-tooltip", W), C(f, "aria-label", se), C(f, "data-tooltip", S);
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
  ), O(e, n), Ee();
}
r(ol, "SidebarControls");
De(["click"]);
var ll = /* @__PURE__ */ P('<div class="nos-sheet" style="position: relative;"><!> <!> <!> <!> <!> <span class="nos-logo">Nimble</span></div>');
function cl(e, t) {
  we(t, !0);
  const n = Ur((x) => {
    const R = {
      updateActor: Hooks.on("updateActor", (H, ne, U) => {
        U.diff !== !1 && H._id === t.actor.id && x();
      }),
      createItem: Hooks.on("createItem", (H) => {
        H?.actor?.id === t.actor.id && x();
      }),
      deleteItem: Hooks.on("deleteItem", (H) => {
        H?.actor?.id === t.actor.id && x();
      }),
      updateItem: Hooks.on("updateItem", (H, ne, U) => {
        U.diff !== !1 && H?.actor?.id === t.actor.id && x();
      })
    };
    return () => {
      Hooks.off("updateActor", R.updateActor), Hooks.off("createItem", R.createItem), Hooks.off("deleteItem", R.deleteItem), Hooks.off("updateItem", R.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(x, R) {
      if (R === "reactive")
        return n(), x;
      const H = x[R];
      return typeof H == "function" ? H.bind(x) : H;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(x, R) {
    return Math.clamp(0, Math.round(x / R * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(x, R, H, ne) {
    const U = [];
    return H && U.push(`${H.name} (${s[ne] ?? ne})`), x && (R ? U.push(`${x.name} (${R.name}, ${x.system.classLevel})`) : U.push(`${x.name} (${x.system.classLevel})`)), U.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(x, R) {
    if (!R) return x;
    const H = [4, 6, 8, 10, 12, 20], ne = H.indexOf(x);
    return ne === -1 ? x : H[Math.min(ne + R, H.length - 1)];
  }
  r(f, "incrementDieSize");
  let d = /* @__PURE__ */ z(() => c(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function _(x) {
    a.update({ "system.attributes.hp.value": x });
  }
  r(_, "updateCurrentHP");
  function v(x) {
    a.update({ "system.attributes.hp.max": x });
  }
  r(v, "updateMaxHP");
  function p(x) {
    a.update({ "system.attributes.hp.temp": x });
  }
  r(p, "updateTempHP");
  let E = /* @__PURE__ */ z(() => a.reactive.system.resources.mana), T = /* @__PURE__ */ z(() => (u(E).max ?? 0) > 0 || (u(E).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((x) => x.type === "class" && x.system?.mana?.formula?.length));
  function y(x) {
    a.update({ "system.resources.mana.current": x });
  }
  r(y, "updateCurrentMana");
  function W(x) {
    const R = a.reactive.system.resources.mana, H = R.baseMax ?? 0, U = (R.max || H) - H, $ = Math.max(0, x - U);
    a.update({ "system.resources.mana.baseMax": $ });
  }
  r(W, "updateMaxMana");
  let se = /* @__PURE__ */ z(() => {
    const x = a.reactive.system.attributes.hitDice, R = a.reactive.system.attributes.bonusHitDice ?? [], H = a.reactive.items.filter((le) => le.type === "class"), ne = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, U = {};
    for (const le of H) {
      const Se = le.system.hitDieSize, ce = f(Se, ne), We = le.system.classLevel;
      U[ce] ??= { current: 0, total: 0 }, U[ce].total += We, U[ce].current = x[ce]?.current ?? 0;
    }
    const $ = H.map((le) => f(le.system.hitDieSize, ne));
    for (const le of R) {
      const Se = f(le.size, ne);
      U[Se] ??= { current: x[Se]?.current ?? 0, total: 0 }, U[Se].total += le.value, $.includes(Se) || (U[Se].current = x[Se]?.current ?? 0);
    }
    const fe = R.map((le) => f(le.size, ne));
    for (const [le, Se] of Object.entries(x ?? {})) {
      const ce = Number(le), We = f(ce, ne), _t = Se?.bonus ?? 0;
      if (_t > 0) {
        U[We] ??= { current: 0, total: 0 }, U[We].total += _t;
        const yn = $.includes(We), wn = fe.includes(We);
        !yn && !wn && (U[We].current = x[We]?.current ?? 0);
      }
    }
    let de = 0, Me = 0;
    for (const le of Object.values(U))
      de += le.current, Me += le.total;
    return { bySize: U, value: de, max: Me };
  });
  async function S(x) {
    await a.updateCurrentHitDice(x);
  }
  r(S, "updateCurrentHitDice");
  async function M() {
    await a.rollHitDice();
  }
  r(M, "rollHitDice");
  async function F() {
    await a.editCurrentHitDice();
  }
  r(F, "editCurrentHitDice");
  let g = /* @__PURE__ */ z(() => a.reactive.items.find((x) => x.type === "class") ?? null), w = /* @__PURE__ */ z(() => {
    const x = a.reactive.items.find((U) => U.type === "class") ?? null, R = a.reactive.items.find((U) => U.type === "subclass") ?? null, H = a.reactive.items.find((U) => U.type === "ancestry") ?? null, ne = a.reactive.system.attributes.sizeCategory;
    return l(x, R, H, ne);
  }), N = /* @__PURE__ */ z(() => a.reactive.system.attributes.wounds);
  function A(x) {
    let R = x;
    x <= u(N).value && (R = x - 1), a.update({ "system.attributes.wounds.value": R });
  }
  r(A, "toggleWounds");
  let j = /* @__PURE__ */ z(() => a.reactive.flags.nimble), q = /* @__PURE__ */ z(() => u(j)?.editingEnabled ?? !0);
  const L = Js(!1, (x) => (Ns(() => x(u(q))), () => {
  }));
  async function K() {
    await a.setFlag("nimble", "editingEnabled", !u(q));
  }
  r(K, "toggleEditingEnabled"), Fn("actor", a), Fn("document", a), Fn("application", t.sheet), Fn("editingEnabled", L);
  var Q = ll(), B = h(Q);
  no(B, {
    get actor() {
      return a;
    },
    get metaData() {
      return u(w);
    },
    get editingEnabled() {
      return u(q);
    },
    get hitDiceData() {
      return u(se);
    }
  });
  var re = m(B, 2);
  _o(re, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    },
    get isBloodied() {
      return u(d);
    },
    get hitDiceData() {
      return u(se);
    },
    get hasMana() {
      return u(T);
    },
    get mana() {
      return u(E);
    },
    get wounds() {
      return u(N);
    },
    toggleWounds: A,
    updateCurrentHP: _,
    updateMaxHP: v,
    updateTempHP: p,
    updateCurrentMana: y,
    updateMaxMana: W,
    updateCurrentHitDice: S,
    rollHitDice: M,
    editCurrentHitDice: F
  });
  var X = m(re, 2);
  po(X, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    }
  });
  var J = m(X, 2);
  il(J, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    },
    get hasMana() {
      return u(T);
    },
    get mana() {
      return u(E);
    },
    updateCurrentMana: y,
    updateMaxMana: W
  });
  var Z = m(J, 2);
  ol(Z, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    },
    toggleEditingEnabled: K,
    get classItem() {
      return u(g);
    }
  }), O(e, Q), Ee();
}
r(cl, "WhiteSheet");
const tt = class tt extends Xs(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  props;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = cl;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document, this.props = { actor: this.document, sheet: this };
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < tt.MIN_WIDTH && (t.width = tt.MIN_WIDTH), t.height !== void 0 && t.height < tt.MIN_HEIGHT && (t.height = tt.MIN_HEIGHT), super.setPosition(t);
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
    return l.some((d) => d.type === "subclass") ? this._onDropSubclassCreate(l) : this._actor.createEmbeddedDocuments("Item", l);
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
        if (!Object.values(a.classes ?? {}).some((_) => _.identifier === c)) {
          const _ = CONFIG.NIMBLE?.classes?.[c] ?? c;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${_} class.`);
          continue;
        }
        const d = a.items.find((_) => _.type === "subclass" && _.system?.parentClass === c);
        if (d) {
          const _ = d.system?.identifier, v = o.system?.identifier;
          if (_ && v && _ === v) {
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
      s.push(i);
    }
    return s.length > 0 ? a.createEmbeddedDocuments("Item", s) : [];
  }
};
r(tt, "WhiteCharacterSheet"), Oe(tt, "MIN_WIDTH", 650), Oe(tt, "MIN_HEIGHT", 400), Oe(tt, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Pa = tt;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-white-sheet",
    Pa,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Nimble White Sheet"
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
