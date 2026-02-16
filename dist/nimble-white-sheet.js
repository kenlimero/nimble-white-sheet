var Ja = Object.defineProperty;
var Qa = (e) => {
  throw TypeError(e);
};
var Ei = (e, t, n) => t in e ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Ja(e, "name", { value: t, configurable: !0 });
var Fe = (e, t, n) => Ei(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Qa("Cannot " + n);
var b = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => t.has(e) ? Qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), Ee = (e, t, n) => (la(e, t, "access private method"), n);
const me = /* @__PURE__ */ Symbol(), Si = /* @__PURE__ */ Symbol("filename"), ki = "http://www.w3.org/1999/xhtml", Xa = globalThis.process?.env?.NODE_ENV, C = Xa && !Xa.toLowerCase().startsWith("prod");
var hr = Array.isArray, xi = Array.prototype.indexOf, Bt = Array.prototype.includes, Xn = Array.from, qt = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Ni = Object.getOwnPropertyDescriptors, Ti = Object.prototype, Ii = Array.prototype, br = Object.getPrototypeOf, Za = Object.isExtensible;
const ca = /* @__PURE__ */ r(() => {
}, "noop");
function Ai(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(Ai, "run_all");
function mr() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(mr, "deferred");
function gr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(gr, "to_array");
const pe = 2, ba = 4, Zn = 8, pr = 1 << 24, gt = 16, at = 32, Gt = 64, La = 128, Ke = 512, _e = 1024, ye = 2048, nt = 4096, Pe = 8192, St = 16384, Ha = 32768, fn = 65536, qn = 1 << 17, yr = 1 << 18, mn = 1 << 19, Ci = 1 << 20, bt = 1 << 25, At = 32768, ma = 1 << 21, $n = 1 << 22, kt = 1 << 23, tn = /* @__PURE__ */ Symbol("$state"), Mi = /* @__PURE__ */ Symbol(""), wr = /* @__PURE__ */ Symbol("proxy path");
var nn;
const Zt = new (nn = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(nn, "StaleReactionError"), nn)();
function Di(e) {
  if (C) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Di, "lifecycle_outside_component");
function Wi() {
  if (C) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Wi, "async_derived_orphan");
function $a() {
  if (C) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r($a, "bind_invalid_checkbox_value");
function Oi() {
  if (C) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Oi, "derived_references_self");
function Er(e, t, n) {
  if (C) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(Er, "each_key_duplicate");
function Li(e) {
  if (C) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Li, "effect_in_teardown");
function Hi() {
  if (C) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Hi, "effect_in_unowned_derived");
function Pi(e) {
  if (C) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Pi, "effect_orphan");
function Ri() {
  if (C) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Ri, "effect_update_depth_exceeded");
function Fi(e) {
  if (C) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Fi, "rune_outside_svelte");
function ji() {
  if (C) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(ji, "state_descriptors_fixed");
function zi() {
  if (C) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(zi, "state_prototype_fixed");
function Ui() {
  if (C) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Ui, "state_unsafe_mutation");
function Bi() {
  if (C) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(Bi, "svelte_boundary_reset_onerror");
var ea = "font-weight: bold", ta = "font-weight: normal";
function qi() {
  C ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, ea, ta) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(qi, "lifecycle_double_unmount");
function ua(e) {
  C ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, ea, ta) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(ua, "state_proxy_equality_mismatch");
function Ki() {
  C ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, ea, ta) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Ki, "state_proxy_unmount");
function Vi() {
  C ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", ea, ta) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(Vi, "svelte_boundary_reset_noop");
function Sr(e) {
  return e === this.v;
}
r(Sr, "equals");
function kr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(kr, "safe_not_equal");
function xr(e) {
  return !kr(e, this.v);
}
r(xr, "safe_equals");
let Gi = !1;
function rt(e, t) {
  return e.label = t, Nr(e.v, t), e;
}
r(rt, "tag");
function Nr(e, t) {
  return e?.[wr]?.(t), e;
}
r(Nr, "tag_proxy");
function Yi(e) {
  const t = new Error(), n = Ji();
  return n.length === 0 ? null : (n.unshift(`
`), qt(t, "stack", {
    value: n.join(`
`)
  }), qt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(Yi, "get_error");
function Ji() {
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
r(Ji, "get_stack");
let ge = null;
function dn(e) {
  ge = e;
}
r(dn, "set_component_context");
let Tn = null;
function Kn(e) {
  Tn = e;
}
r(Kn, "set_dev_stack");
let Wn = null;
function er(e) {
  Wn = e;
}
r(er, "set_dev_current_component_function");
function Rn(e, t) {
  return Qi("setContext").set(e, t), t;
}
r(Rn, "setContext");
function Se(e, t = !1, n) {
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
r(Se, "push");
function ke(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Vr(a);
  }
  return t.i = !0, ge = t.p, C && (Wn = ge?.function ?? null), /** @type {T} */
  {};
}
r(ke, "pop");
function Tr() {
  return !0;
}
r(Tr, "is_runes");
function Qi(e) {
  return ge === null && Di(e), ge.c ??= new Map(Xi(ge) || void 0);
}
r(Qi, "get_or_init_context_map");
function Xi(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
r(Xi, "get_parent_context");
let Wt = [];
function Ir() {
  var e = Wt;
  Wt = [], Ai(e);
}
r(Ir, "run_micro_tasks");
function xt(e) {
  if (Wt.length === 0 && !xn) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Ir();
    });
  }
  Wt.push(e);
}
r(xt, "queue_micro_task");
function Zi() {
  for (; Wt.length > 0; )
    Ir();
}
r(Zi, "flush_tasks");
const ga = /* @__PURE__ */ new WeakMap();
function Ar(e) {
  var t = ne;
  if (t === null)
    return $.f |= kt, e;
  if (C && e instanceof Error && !ga.has(e) && ga.set(e, $i(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw C && !t.parent && e instanceof Error && Cr(e), e;
    t.b.error(e);
  } else
    vn(e, t);
}
r(Ar, "handle_error");
function vn(e, t) {
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
  throw C && e instanceof Error && Cr(e), e;
}
r(vn, "invoke_error_boundary");
function $i(e, t) {
  const n = en(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = za ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[Si].split("/").pop()}`, i = i.p;
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
r($i, "get_adjustments");
function Cr(e) {
  const t = ga.get(e);
  t && (qt(e, "message", {
    value: t.message
  }), qt(e, "stack", {
    value: t.stack
  }));
}
r(Cr, "apply_adjustments");
const es = -7169;
function de(e, t) {
  e.f = e.f & es | t;
}
r(de, "set_signal_status");
function Pa(e) {
  (e.f & Ke) !== 0 || e.deps === null ? de(e, _e) : de(e, nt);
}
r(Pa, "update_derived_status");
function Mr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & pe) === 0 || (t.f & At) === 0 || (t.f ^= At, Mr(
        /** @type {Derived} */
        t.deps
      ));
}
r(Mr, "clear_marked");
function Dr(e, t, n) {
  (e.f & ye) !== 0 ? t.add(e) : (e.f & nt) !== 0 && n.add(e), Mr(e.deps), de(e, _e);
}
r(Dr, "defer_effect");
const Fn = /* @__PURE__ */ new Set();
let ie = null, pa = null, Xe = null, Te = [], na = null, ya = !1, xn = !1;
var an, rn, Lt, sn, An, Cn, Ht, _t, on, ft, wa, Ea, Wr;
const Yn = class Yn {
  constructor() {
    B(this, ft);
    Fe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Fe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Fe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    B(this, an, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, rn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    B(this, Lt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    B(this, sn, 0);
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
    B(this, Ht, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    B(this, _t, /* @__PURE__ */ new Map());
    Fe(this, "is_fork", !1);
    B(this, on, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, sn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, _t).has(t) || b(this, _t).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, _t).get(t);
    if (n) {
      b(this, _t).delete(t);
      for (var a of n.d)
        de(a, ye), Ze(a);
      for (a of n.m)
        de(a, nt), Ze(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Te = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      Ee(this, ft, wa).call(this, s, n, a);
    if (this.is_deferred()) {
      Ee(this, ft, Ea).call(this, a), Ee(this, ft, Ea).call(this, n);
      for (const [s, i] of b(this, _t))
        Pr(s, i);
    } else {
      for (const s of b(this, an)) s();
      b(this, an).clear(), b(this, Lt) === 0 && Ee(this, ft, Wr).call(this), pa = this, ie = null, tr(a), tr(n), pa = null, b(this, An)?.resolve();
    }
    Xe = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== me && !this.previous.has(t) && this.previous.set(t, n), (t.f & kt) === 0 && (this.current.set(t, t.v), Xe?.set(t, t.v));
  }
  activate() {
    ie = this, this.apply();
  }
  deactivate() {
    ie === this && (ie = null, Xe = null);
  }
  flush() {
    if (this.activate(), Te.length > 0) {
      if (Or(), ie !== null && ie !== this)
        return;
    } else b(this, Lt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, rn)) t(this);
    b(this, rn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    q(this, Lt, b(this, Lt) + 1), t && q(this, sn, b(this, sn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    q(this, Lt, b(this, Lt) - 1), t && q(this, sn, b(this, sn) - 1), !b(this, on) && (q(this, on, !0), xt(() => {
      q(this, on, !1), this.is_deferred() ? Te.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, Cn))
      b(this, Ht).delete(t), de(t, ye), Ze(t);
    for (const t of b(this, Ht))
      de(t, nt), Ze(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, an).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, rn).add(t);
  }
  settled() {
    return (b(this, An) ?? q(this, An, mr())).promise;
  }
  static ensure() {
    if (ie === null) {
      const t = ie = new Yn();
      Fn.add(ie), xn || xt(() => {
        ie === t && t.flush();
      });
    }
    return ie;
  }
  apply() {
  }
};
an = new WeakMap(), rn = new WeakMap(), Lt = new WeakMap(), sn = new WeakMap(), An = new WeakMap(), Cn = new WeakMap(), Ht = new WeakMap(), _t = new WeakMap(), on = new WeakMap(), ft = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= _e;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, u = (o & (at | Gt)) !== 0, l = u && (o & _e) !== 0, f = l || (o & Pe) !== 0 || b(this, _t).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= _e : i !== null && (o & (ba | Zn | pr)) !== 0 ? i.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : Ln(s) && ((o & gt) !== 0 && b(this, Ht).add(s), In(s));
      var d = s.first;
      if (d !== null) {
        s = d;
        continue;
      }
    }
    var v = s.parent;
    for (s = s.next; s === null && v !== null; )
      v === i && (i = null), s = v.next, v = v.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
Ea = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Dr(t[n], b(this, Cn), b(this, Ht));
}, "#defer_effects"), Wr = /* @__PURE__ */ r(function() {
  var s;
  if (Fn.size > 1) {
    this.previous.clear();
    var t = Xe, n = !0;
    for (const i of Fn) {
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
      const u = [...i.current.keys()].filter((l) => !this.current.has(l));
      if (u.length > 0) {
        var a = Te;
        Te = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Lr(d, u, l, f);
        if (Te.length > 0) {
          ie = i, i.apply();
          for (const d of Te)
            Ee(s = i, ft, wa).call(s, d, [], []);
          i.deactivate();
        }
        Te = a;
      }
    }
    ie = null, Xe = t;
  }
  this.committed = !0, Fn.delete(this);
}, "#commit"), r(Yn, "Batch");
let Nt = Yn;
function ts(e) {
  var t = xn;
  xn = !0;
  try {
    for (var n; ; ) {
      if (Zi(), Te.length === 0 && (ie?.flush(), Te.length === 0))
        return na = null, /** @type {T} */
        n;
      Or();
    }
  } finally {
    xn = t;
  }
}
r(ts, "flushSync");
function Or() {
  ya = !0;
  var e = C ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Te.length > 0; ) {
      var n = Nt.ensure();
      if (t++ > 1e3) {
        if (C) {
          var a = /* @__PURE__ */ new Map();
          for (const i of n.current.keys())
            for (const [o, u] of i.updated ?? []) {
              var s = a.get(o);
              s || (s = { error: u.error, count: 0 }, a.set(o, s)), s.count += u.count;
            }
          for (const i of a.values())
            i.error && console.error(i.error);
        }
        ns();
      }
      if (n.process(Te), Tt.clear(), C)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (Te = [], ya = !1, na = null, C)
      for (
        const i of
        /** @type {Set<Source>} */
        e
      )
        i.updated = null;
  }
}
r(Or, "flush_effects");
function ns() {
  try {
    Ri();
  } catch (e) {
    C && qt(e, "stack", { value: "" }), vn(e, na);
  }
}
r(ns, "infinite_loop_guard");
let dt = null;
function tr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (St | Pe)) === 0 && Ln(a) && (dt = /* @__PURE__ */ new Set(), In(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Xr(a) : a.fn = null), dt?.size > 0)) {
        Tt.clear();
        for (const s of dt) {
          if ((s.f & (St | Pe)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            dt.has(o) && (dt.delete(o), i.push(o)), o = o.parent;
          for (let u = i.length - 1; u >= 0; u--) {
            const l = i[u];
            (l.f & (St | Pe)) === 0 && In(l);
          }
        }
        dt.clear();
      }
    }
    dt = null;
  }
}
r(tr, "flush_queued_effects");
function Lr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & pe) !== 0 ? Lr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & ($n | gt)) !== 0 && (i & ye) === 0 && Hr(s, t, a) && (de(s, ye), Ze(
        /** @type {Effect} */
        s
      ));
    }
}
r(Lr, "mark_effects");
function Hr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Bt.call(t, s))
        return !0;
      if ((s.f & pe) !== 0 && Hr(
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
r(Hr, "depends_on");
function Ze(e) {
  for (var t = na = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === ne && (n & gt) !== 0 && (n & yr) === 0)
      return;
    if ((n & (Gt | at)) !== 0) {
      if ((n & _e) === 0) return;
      t.f ^= _e;
    }
  }
  Te.push(t);
}
r(Ze, "schedule_effect");
function Pr(e, t) {
  if (!((e.f & at) !== 0 && (e.f & _e) !== 0)) {
    (e.f & ye) !== 0 ? t.d.push(e) : (e.f & nt) !== 0 && t.m.push(e), de(e, _e);
    for (var n = e.first; n !== null; )
      Pr(n, t), n = n.next;
  }
}
r(Pr, "reset_branch");
function Rr(e) {
  let t = 0, n = Kt(0), a;
  return C && rt(n, "createSubscriber version"), () => {
    Ua() && (c(n), Gr(() => (t === 0 && (a = oi(() => e(() => Nn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, Nn(n));
      });
    })));
  };
}
r(Rr, "createSubscriber");
var as = fn | mn | La;
function rs(e, t, n) {
  new Sa(e, t, n);
}
r(rs, "boundary");
var ze, Oa, st, Pt, ot, Ue, Ne, lt, ht, yt, Rt, wt, ln, Ft, cn, un, ct, Jn, he, is, ss, ka, zn, Un, xa;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    B(this, he);
    /** @type {Boundary | null} */
    Fe(this, "parent");
    Fe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    B(this, ze);
    /** @type {TemplateNode | null} */
    B(this, Oa, null);
    /** @type {BoundaryProps} */
    B(this, st);
    /** @type {((anchor: Node) => void)} */
    B(this, Pt);
    /** @type {Effect} */
    B(this, ot);
    /** @type {Effect | null} */
    B(this, Ue, null);
    /** @type {Effect | null} */
    B(this, Ne, null);
    /** @type {Effect | null} */
    B(this, lt, null);
    /** @type {DocumentFragment | null} */
    B(this, ht, null);
    /** @type {TemplateNode | null} */
    B(this, yt, null);
    B(this, Rt, 0);
    B(this, wt, 0);
    B(this, ln, !1);
    B(this, Ft, !1);
    /** @type {Set<Effect>} */
    B(this, cn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    B(this, un, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    B(this, ct, null);
    B(this, Jn, Rr(() => (q(this, ct, Kt(b(this, Rt))), C && rt(b(this, ct), "$effect.pending()"), () => {
      q(this, ct, null);
    })));
    q(this, ze, t), q(this, st, n), q(this, Pt, a), this.parent = /** @type {Effect} */
    ne.b, this.is_pending = !!b(this, st).pending, q(this, ot, Ba(() => {
      ne.b = this;
      {
        var s = Ee(this, he, ka).call(this);
        try {
          q(this, Ue, Be(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, wt) > 0 ? Ee(this, he, Un).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, yt)?.remove();
      };
    }, as));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Dr(t, b(this, cn), b(this, un));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, st).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Ee(this, he, xa).call(this, t), q(this, Rt, b(this, Rt) + t), !(!b(this, ct) || b(this, ln)) && (q(this, ln, !0), xt(() => {
      q(this, ln, !1), b(this, ct) && hn(b(this, ct), b(this, Rt));
    }));
  }
  get_effect_pending() {
    return b(this, Jn).call(this), c(
      /** @type {Source<number>} */
      b(this, ct)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, st).onerror;
    let a = b(this, st).failed;
    if (b(this, Ft) || !n && !a)
      throw t;
    b(this, Ue) && (Ae(b(this, Ue)), q(this, Ue, null)), b(this, Ne) && (Ae(b(this, Ne)), q(this, Ne, null)), b(this, lt) && (Ae(b(this, lt)), q(this, lt, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Vi();
        return;
      }
      s = !0, i && Bi(), Nt.ensure(), q(this, Rt, 0), b(this, lt) !== null && zt(b(this, lt), () => {
        q(this, lt, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, Ue, Ee(this, he, zn).call(this, () => (q(this, Ft, !1), Be(() => b(this, Pt).call(this, b(this, ze)))))), b(this, wt) > 0 ? Ee(this, he, Un).call(this) : this.is_pending = !1;
    }, "reset");
    xt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (u) {
        vn(u, b(this, ot) && b(this, ot).parent);
      }
      a && q(this, lt, Ee(this, he, zn).call(this, () => {
        Nt.ensure(), q(this, Ft, !0);
        try {
          return Be(() => {
            a(
              b(this, ze),
              () => t,
              () => o
            );
          });
        } catch (u) {
          return vn(
            u,
            /** @type {Effect} */
            b(this, ot).parent
          ), null;
        } finally {
          q(this, Ft, !1);
        }
      }));
    });
  }
};
ze = new WeakMap(), Oa = new WeakMap(), st = new WeakMap(), Pt = new WeakMap(), ot = new WeakMap(), Ue = new WeakMap(), Ne = new WeakMap(), lt = new WeakMap(), ht = new WeakMap(), yt = new WeakMap(), Rt = new WeakMap(), wt = new WeakMap(), ln = new WeakMap(), Ft = new WeakMap(), cn = new WeakMap(), un = new WeakMap(), ct = new WeakMap(), Jn = new WeakMap(), he = new WeakSet(), is = /* @__PURE__ */ r(function() {
  try {
    q(this, Ue, Be(() => b(this, Pt).call(this, b(this, ze))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ss = /* @__PURE__ */ r(function() {
  const t = b(this, st).pending;
  t && (q(this, Ne, Be(() => t(b(this, ze)))), xt(() => {
    var n = Ee(this, he, ka).call(this);
    q(this, Ue, Ee(this, he, zn).call(this, () => (Nt.ensure(), Be(() => b(this, Pt).call(this, n))))), b(this, wt) > 0 ? Ee(this, he, Un).call(this) : (zt(
      /** @type {Effect} */
      b(this, Ne),
      () => {
        q(this, Ne, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ka = /* @__PURE__ */ r(function() {
  var t = b(this, ze);
  return this.is_pending && (q(this, yt, It()), b(this, ze).before(b(this, yt)), t = b(this, yt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
zn = /* @__PURE__ */ r(function(t) {
  var n = ne, a = $, s = ge;
  et(b(this, ot)), Ge(b(this, ot)), dn(b(this, ot).ctx);
  try {
    return t();
  } catch (i) {
    return Ar(i), null;
  } finally {
    et(n), Ge(a), dn(s);
  }
}, "#run"), Un = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, st).pending
  );
  b(this, Ue) !== null && (q(this, ht, document.createDocumentFragment()), b(this, ht).append(
    /** @type {TemplateNode} */
    b(this, yt)
  ), ei(b(this, Ue), b(this, ht))), b(this, Ne) === null && q(this, Ne, Be(() => t(b(this, ze))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xa = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Ee(n = this.parent, he, xa).call(n, t);
    return;
  }
  if (q(this, wt, b(this, wt) + t), b(this, wt) === 0) {
    this.is_pending = !1;
    for (const a of b(this, cn))
      de(a, ye), Ze(a);
    for (const a of b(this, un))
      de(a, nt), Ze(a);
    b(this, cn).clear(), b(this, un).clear(), b(this, Ne) && zt(b(this, Ne), () => {
      q(this, Ne, null);
    }), b(this, ht) && (b(this, ze).before(b(this, ht)), q(this, ht, null));
  }
}, "#update_pending_count"), r(Va, "Boundary");
let Sa = Va;
function os(e, t, n, a) {
  const s = Ra;
  var i = e.filter((_) => !_.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = ie, u = (
    /** @type {Effect} */
    ne
  ), l = ls(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (y) {
      (u.f & St) === 0 && vn(y, u);
    }
    o?.deactivate(), Na();
  }
  if (r(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function v() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ us(_))).then((_) => d([...t.map(s), ..._])).catch((_) => vn(_, u));
  }
  r(v, "run"), f ? f.then(v) : v();
}
r(os, "flatten");
function ls() {
  var e = ne, t = $, n = ge, a = ie;
  if (C)
    var s = Tn;
  return /* @__PURE__ */ r(function(o = !0) {
    et(e), Ge(t), dn(n), o && a?.activate(), C && Kn(s);
  }, "restore");
}
r(ls, "capture");
function Na() {
  et(null), Ge(null), dn(null), C && Kn(null);
}
r(Na, "unset_context");
const cs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = pe | ye, n = $ !== null && ($.f & pe) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return ne !== null && (ne.f |= mn), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: Sr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      me
    ),
    wv: 0,
    parent: n ?? ne,
    ac: null
  };
}
r(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function us(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ne
  );
  a === null && Wi();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Kt(
    /** @type {V} */
    me
  );
  C && (o.label = t);
  var u = !$, l = /* @__PURE__ */ new Map();
  return Ts(() => {
    var f = mr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === ie && d.committed && d.deactivate(), Na();
      });
    } catch (y) {
      f.reject(y), Na();
    }
    var d = (
      /** @type {Batch} */
      ie
    );
    if (u) {
      var v = s.is_rendered();
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject(Zt), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ r((y, w = void 0) => {
      if (d.activate(), w)
        w !== Zt && (o.f |= kt, hn(o, w));
      else {
        (o.f & kt) !== 0 && (o.f ^= kt), hn(o, y);
        for (const [T, p] of l) {
          if (l.delete(T), T === d) break;
          p.reject(Zt);
        }
      }
      u && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (y) => _(null, y || "unknown"));
  }), Kr(() => {
    for (const f of l.values())
      f.reject(Zt);
  }), C && (o.f |= $n), new Promise((f) => {
    function d(v) {
      function _() {
        v === i ? f(o) : d(i);
      }
      r(_, "go"), v.then(_, _);
    }
    r(d, "next"), d(i);
  });
}
r(us, "async_derived");
// @__NO_SIDE_EFFECTS__
function F(e) {
  const t = /* @__PURE__ */ Ra(e);
  return ti(t), t;
}
r(F, "user_derived");
// @__NO_SIDE_EFFECTS__
function fs(e) {
  const t = /* @__PURE__ */ Ra(e);
  return t.equals = xr, t;
}
r(fs, "derived_safe_equal");
function Ta(e) {
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
r(Ta, "destroy_derived_effects");
let fa = [];
function ds(e) {
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
r(ds, "get_derived_parent_effect");
function Fa(e) {
  var t, n = ne;
  if (et(ds(e)), C) {
    let a = _n;
    nr(/* @__PURE__ */ new Set());
    try {
      Bt.call(fa, e) && Oi(), fa.push(e), e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      et(n), nr(a), fa.pop();
    }
  } else
    try {
      e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      et(n);
    }
  return t;
}
r(Fa, "execute_derived");
function Fr(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = ai(), (!ie?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, _e);
    return;
  }
  Vt || (Xe !== null ? (Ua() || ie?.is_fork) && Xe.set(e, t) : Pa(e));
}
r(Fr, "update_derived");
let _n = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
function nr(e) {
  _n = e;
}
r(nr, "set_eager_effects");
let ja = !1;
function vs() {
  ja = !0;
}
r(vs, "set_eager_effects_deferred");
function Kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Sr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(Kt, "source");
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  const n = Kt(e);
  return ti(n), n;
}
r(Le, "state");
// @__NO_SIDE_EFFECTS__
function _s(e, t = !1, n = !0) {
  const a = Kt(e);
  return t || (a.equals = xr), a;
}
r(_s, "mutable_source");
function He(e, t, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || ($.f & qn) !== 0) && Tr() && ($.f & (pe | gt | $n | qn)) !== 0 && (Ve === null || !Bt.call(Ve, e)) && Ui();
  let a = n ? $t(t) : t;
  return C && Nr(
    a,
    /** @type {string} */
    e.label
  ), hn(e, a);
}
r(He, "set");
function hn(e, t) {
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
          const i = Yi("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      ne !== null && (e.set_during_effect = !0);
    }
    if ((e.f & pe) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ye) !== 0 && Fa(s), Pa(s);
    }
    e.wv = ai(), zr(e, ye), ne !== null && (ne.f & _e) !== 0 && (ne.f & (at | Gt)) === 0 && (je === null ? As([e]) : je.push(e)), !a.is_fork && _n.size > 0 && !ja && jr();
  }
  return t;
}
r(hn, "internal_set");
function jr() {
  ja = !1;
  for (const e of _n)
    (e.f & _e) !== 0 && de(e, nt), Ln(e) && In(e);
  _n.clear();
}
r(jr, "flush_eager_effects");
function Nn(e) {
  He(e, e.v + 1);
}
r(Nn, "increment");
function zr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (C && (o & qn) !== 0) {
        _n.add(i);
        continue;
      }
      var u = (o & ye) === 0;
      if (u && de(i, t), (o & pe) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        Xe?.delete(l), (o & At) === 0 && (o & Ke && (i.f |= At), zr(l, nt));
      } else u && ((o & gt) !== 0 && dt !== null && dt.add(
        /** @type {Effect} */
        i
      ), Ze(
        /** @type {Effect} */
        i
      ));
    }
}
r(zr, "mark_reactions");
const hs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function $t(e) {
  if (typeof e != "object" || e === null || tn in e)
    return e;
  const t = br(e);
  if (t !== Ti && t !== Ii)
    return e;
  var n = /* @__PURE__ */ new Map(), a = hr(e), s = /* @__PURE__ */ Le(0), i = Ut, o = /* @__PURE__ */ r((d) => {
    if (Ut === i)
      return d();
    var v = $, _ = Ut;
    Ge(null), sr(i);
    var y = d();
    return Ge(v), sr(_), y;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Le(
    /** @type {any[]} */
    e.length
  )), C && (e = /** @type {any} */
  ms(
    /** @type {any[]} */
    e
  )));
  var u = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, u = d, rt(s, `${u} version`);
      for (const [v, _] of n)
        rt(_, Dt(u, v));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && ji();
        var y = n.get(v);
        return y === void 0 ? y = o(() => {
          var w = /* @__PURE__ */ Le(_.value);
          return n.set(v, w), C && typeof v == "string" && rt(w, Dt(u, v)), w;
        }) : He(y, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const y = o(() => /* @__PURE__ */ Le(me));
            n.set(v, y), Nn(s), C && rt(y, Dt(u, v));
          }
        } else
          He(_, me), Nn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === tn)
          return e;
        if (C && v === wr)
          return f;
        var y = n.get(v), w = v in d;
        if (y === void 0 && (!w || en(d, v)?.writable) && (y = o(() => {
          var p = $t(w ? d[v] : me), W = /* @__PURE__ */ Le(p);
          return C && rt(W, Dt(u, v)), W;
        }), n.set(v, y)), y !== void 0) {
          var T = c(y);
          return T === me ? void 0 : T;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var y = n.get(v);
          y && (_.value = c(y));
        } else if (_ === void 0) {
          var w = n.get(v), T = w?.v;
          if (w !== void 0 && T !== me)
            return {
              enumerable: !0,
              configurable: !0,
              value: T,
              writable: !0
            };
        }
        return _;
      },
      has(d, v) {
        if (v === tn)
          return !0;
        var _ = n.get(v), y = _ !== void 0 && _.v !== me || Reflect.has(d, v);
        if (_ !== void 0 || ne !== null && (!y || en(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var T = y ? $t(d[v]) : me, p = /* @__PURE__ */ Le(T);
            return C && rt(p, Dt(u, v)), p;
          }), n.set(v, _));
          var w = c(_);
          if (w === me)
            return !1;
        }
        return y;
      },
      set(d, v, _, y) {
        var w = n.get(v), T = v in d;
        if (a && v === "length")
          for (var p = _; p < /** @type {Source<number>} */
          w.v; p += 1) {
            var W = n.get(p + "");
            W !== void 0 ? He(W, me) : p in d && (W = o(() => /* @__PURE__ */ Le(me)), n.set(p + "", W), C && rt(W, Dt(u, p)));
          }
        if (w === void 0)
          (!T || en(d, v)?.writable) && (w = o(() => /* @__PURE__ */ Le(void 0)), C && rt(w, Dt(u, v)), He(w, $t(_)), n.set(v, w));
        else {
          T = w.v !== me;
          var se = o(() => $t(_));
          He(w, se);
        }
        var S = Reflect.getOwnPropertyDescriptor(d, v);
        if (S?.set && S.set.call(y, _), !T) {
          if (a && typeof v == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(v);
            Number.isInteger(P) && P >= M.v && He(M, P + 1);
          }
          Nn(s);
        }
        return !0;
      },
      ownKeys(d) {
        c(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var T = n.get(w);
          return T === void 0 || T.v !== me;
        });
        for (var [_, y] of n)
          y.v !== me && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        zi();
      }
    }
  );
}
r($t, "proxy");
function Dt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : hs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(Dt, "get_label");
function da(e) {
  try {
    if (e !== null && typeof e == "object" && tn in e)
      return e[tn];
  } catch {
  }
  return e;
}
r(da, "get_proxied_value");
const bs = /* @__PURE__ */ new Set([
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
function ms(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return bs.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        vs();
        var o = s.apply(this, i);
        return jr(), o;
      } : s;
    }
  });
}
r(ms, "inspectable_array");
function gs() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(i, o) {
    const u = n.call(this, i, o);
    if (u === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (da(this[l]) === i) {
          ua("array.indexOf(...)");
          break;
        }
    }
    return u;
  }, e.lastIndexOf = function(i, o) {
    const u = a.call(this, i, o ?? this.length - 1);
    if (u === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (da(this[l]) === i) {
          ua("array.lastIndexOf(...)");
          break;
        }
    }
    return u;
  }, e.includes = function(i, o) {
    const u = s.call(this, i, o);
    if (!u) {
      for (let l = 0; l < this.length; l += 1)
        if (da(this[l]) === i) {
          ua("array.includes(...)");
          break;
        }
    }
    return u;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
r(gs, "init_array_prototype_warnings");
var ar, za, Ur, Br;
function ps() {
  if (ar === void 0) {
    ar = window, za = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ur = en(t, "firstChild").get, Br = en(t, "nextSibling").get, Za(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Za(n) && (n.__t = void 0), C && (e.__svelte_meta = null, gs());
  }
}
r(ps, "init_operations");
function It(e = "") {
  return document.createTextNode(e);
}
r(It, "create_text");
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return (
    /** @type {TemplateNode | null} */
    Ur.call(e)
  );
}
r(Et, "get_first_child");
// @__NO_SIDE_EFFECTS__
function On(e) {
  return (
    /** @type {TemplateNode | null} */
    Br.call(e)
  );
}
r(On, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ Et(e);
}
r(h, "child");
function mt(e, t = !1) {
  {
    var n = /* @__PURE__ */ Et(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ On(n) : n;
  }
}
r(mt, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ On(a);
  return a;
}
r(m, "sibling");
function ys(e) {
  e.textContent = "";
}
r(ys, "clear_text_content");
function qr() {
  return !1;
}
r(qr, "should_defer_append");
let rr = !1;
function ws() {
  rr || (rr = !0, document.addEventListener(
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
r(ws, "add_form_reset_listener");
function aa(e) {
  var t = $, n = ne;
  Ge(null), et(null);
  try {
    return e();
  } finally {
    Ge(t), et(n);
  }
}
r(aa, "without_reactive_context");
function Es(e, t, n, a = n) {
  e.addEventListener(t, () => aa(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), ws();
}
r(Es, "listen_to_event_and_reset_event");
function Ss(e) {
  ne === null && ($ === null && Pi(e), Hi()), Vt && Li(e);
}
r(Ss, "validate_effect");
function ks(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(ks, "push_effect");
function Ct(e, t, n) {
  var a = ne;
  if (C)
    for (; a !== null && (a.f & qn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Pe) !== 0 && (e |= Pe);
  var s = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | ye | Ke,
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
      throw Ae(s), u;
    }
  else t !== null && Ze(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & mn) === 0 && (i = i.first, (e & gt) !== 0 && (e & fn) !== 0 && i !== null && (i.f |= fn)), i !== null && (i.parent = a, a !== null && ks(i, a), $ !== null && ($.f & pe) !== 0 && (e & Gt) === 0)) {
    var o = (
      /** @type {Derived} */
      $
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Ct, "create_effect");
function Ua() {
  return $ !== null && !$e;
}
r(Ua, "effect_tracking");
function Kr(e) {
  const t = Ct(Zn, null, !1);
  return de(t, _e), t.teardown = e, t;
}
r(Kr, "teardown");
function xs(e) {
  Ss("$effect"), C && qt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ne.f
  ), n = !$ && (t & at) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      ge
    );
    (a.e ??= []).push(e);
  } else
    return Vr(e);
}
r(xs, "user_effect");
function Vr(e) {
  return Ct(ba | Ci, e, !1);
}
r(Vr, "create_user_effect");
function Ns(e) {
  Nt.ensure();
  const t = Ct(Gt | mn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? zt(t, () => {
      Ae(t), a(void 0);
    }) : (Ae(t), a(void 0));
  });
}
r(Ns, "component_root");
function Ts(e) {
  return Ct($n | mn, e, !0);
}
r(Ts, "async_effect");
function Gr(e, t = 0) {
  return Ct(Zn | t, e, !0);
}
r(Gr, "render_effect");
function K(e, t = [], n = [], a = []) {
  os(a, t, n, (s) => {
    Ct(Zn, () => e(...s.map(c)), !0);
  });
}
r(K, "template_effect");
function Ba(e, t = 0) {
  var n = Ct(gt | t, e, !0);
  return C && (n.dev_stack = Tn), n;
}
r(Ba, "block");
function Be(e) {
  return Ct(at | mn, e, !0);
}
r(Be, "branch");
function Yr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vt, a = $;
    ir(!0), Ge(null);
    try {
      t.call(null);
    } finally {
      ir(n), Ge(a);
    }
  }
}
r(Yr, "execute_effect_teardown");
function Jr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && aa(() => {
      s.abort(Zt);
    });
    var a = n.next;
    (n.f & Gt) !== 0 ? n.parent = null : Ae(n, t), n = a;
  }
}
r(Jr, "destroy_effect_children");
function Is(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & at) === 0 && Ae(t), t = n;
  }
}
r(Is, "destroy_block_effect_children");
function Ae(e, t = !0) {
  var n = !1;
  (t || (e.f & yr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Qr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Jr(e, t && !n), Vn(e, 0), de(e, St);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Yr(e);
  var s = e.parent;
  s !== null && s.first !== null && Xr(e), C && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Ae, "destroy_effect");
function Qr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ On(e);
    e.remove(), e = n;
  }
}
r(Qr, "remove_effect_dom");
function Xr(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(Xr, "unlink_effect");
function zt(e, t, n = !0) {
  var a = [];
  Zr(e, a, !0);
  var s = /* @__PURE__ */ r(() => {
    n && Ae(e), t && t();
  }, "fn"), i = a.length;
  if (i > 0) {
    var o = /* @__PURE__ */ r(() => --i || s(), "check");
    for (var u of a)
      u.out(o);
  } else
    s();
}
r(zt, "pause_effect");
function Zr(e, t, n) {
  if ((e.f & Pe) === 0) {
    e.f ^= Pe;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || n) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & fn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & at) !== 0 && (e.f & gt) !== 0;
      Zr(s, t, o ? n : !1), s = i;
    }
  }
}
r(Zr, "pause_children");
function qa(e) {
  $r(e, !0);
}
r(qa, "resume_effect");
function $r(e, t) {
  if ((e.f & Pe) !== 0) {
    e.f ^= Pe, (e.f & _e) === 0 && (de(e, ye), Ze(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & fn) !== 0 || (n.f & at) !== 0;
      $r(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r($r, "resume_children");
function ei(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ On(n);
      t.append(n), n = s;
    }
}
r(ei, "move_effect");
let Bn = !1, Vt = !1;
function ir(e) {
  Vt = e;
}
r(ir, "set_is_destroying_effect");
let $ = null, $e = !1;
function Ge(e) {
  $ = e;
}
r(Ge, "set_active_reaction");
let ne = null;
function et(e) {
  ne = e;
}
r(et, "set_active_effect");
let Ve = null;
function ti(e) {
  $ !== null && (Ve === null ? Ve = [e] : Ve.push(e));
}
r(ti, "push_reaction_value");
let Ie = null, We = 0, je = null;
function As(e) {
  je = e;
}
r(As, "set_untracked_writes");
let ni = 1, Ot = 0, Ut = Ot;
function sr(e) {
  Ut = e;
}
r(sr, "set_update_version");
function ai() {
  return ++ni;
}
r(ai, "increment_write_version");
function Ln(e) {
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if (t & pe && (e.f &= ~At), (t & nt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (Ln(
        /** @type {Derived} */
        i
      ) && Fr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && de(e, _e);
  }
  return !1;
}
r(Ln, "is_dirty");
function ri(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Ve !== null && Bt.call(Ve, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & pe) !== 0 ? ri(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? de(i, ye) : (i.f & _e) !== 0 && de(i, nt), Ze(
        /** @type {Effect} */
        i
      ));
    }
}
r(ri, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Ie, n = We, a = je, s = $, i = Ve, o = ge, u = $e, l = Ut, f = e.f;
  Ie = /** @type {null | Value[]} */
  null, We = 0, je = null, $ = (f & (at | Gt)) === 0 ? e : null, Ve = null, dn(e.ctx), $e = !1, Ut = ++Ot, e.ac !== null && (aa(() => {
    e.ac.abort(Zt);
  }), e.ac = null);
  try {
    e.f |= ma;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, y = ie?.is_fork;
    if (Ie !== null) {
      var w;
      if (y || Vn(e, We), _ !== null && We > 0)
        for (_.length = We + Ie.length, w = 0; w < Ie.length; w++)
          _[We + w] = Ie[w];
      else
        e.deps = _ = Ie;
      if (Ua() && (e.f & Ke) !== 0)
        for (w = We; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !y && _ !== null && We < _.length && (Vn(e, We), _.length = We);
    if (Tr() && je !== null && !$e && _ !== null && (e.f & (pe | nt | ye)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      je.length; w++)
        ri(
          je[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ot++, s.deps !== null)
        for (let T = 0; T < n; T += 1)
          s.deps[T].rv = Ot;
      if (t !== null)
        for (const T of t)
          T.rv = Ot;
      je !== null && (a === null ? a = je : a.push(.../** @type {Source[]} */
      je));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), v;
  } catch (T) {
    return Ar(T);
  } finally {
    e.f ^= ma, Ie = t, We = n, je = a, $ = s, Ve = i, dn(o), $e = u, Ut = l;
  }
}
r(Ia, "update_reaction");
function Cs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = xi.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ie === null || !Bt.call(Ie, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ke) !== 0 && (i.f ^= Ke, i.f &= ~At), Pa(i), Ta(i), Vn(i, 0);
  }
}
r(Cs, "remove_reaction");
function Vn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Cs(e, n[a]);
}
r(Vn, "remove_reactions");
function In(e) {
  var t = e.f;
  if ((t & St) === 0) {
    de(e, _e);
    var n = ne, a = Bn;
    if (ne = e, Bn = !0, C) {
      var s = Wn;
      er(e.component_function);
      var i = (
        /** @type {any} */
        Tn
      );
      Kn(e.dev_stack ?? Tn);
    }
    try {
      (t & (gt | pr)) !== 0 ? Is(e) : Jr(e), Yr(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ni;
      var u;
      C && Gi && (e.f & ye) !== 0 && e.deps;
    } finally {
      Bn = a, ne = n, C && (er(s), Kn(i));
    }
  }
}
r(In, "update_effect");
async function Ms() {
  await Promise.resolve(), ts();
}
r(Ms, "tick");
function c(e) {
  var t = e.f, n = (t & pe) !== 0;
  if ($ !== null && !$e) {
    var a = ne !== null && (ne.f & St) !== 0;
    if (!a && (Ve === null || !Bt.call(Ve, e))) {
      var s = $.deps;
      if (($.f & ma) !== 0)
        e.rv < Ot && (e.rv = Ot, Ie === null && s !== null && s[We] === e ? We++ : Ie === null ? Ie = [e] : Ie.push(e));
      else {
        ($.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : Bt.call(i, $) || i.push($);
      }
    }
  }
  if (C && cs.delete(e), Vt && Tt.has(e))
    return Tt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Vt) {
      var u = o.v;
      return ((o.f & _e) === 0 && o.reactions !== null || si(o)) && (u = Fa(o)), Tt.set(o, u), u;
    }
    var l = (o.f & Ke) === 0 && !$e && $ !== null && (Bn || ($.f & Ke) !== 0), f = o.deps === null;
    Ln(o) && (l && (o.f |= Ke), Fr(o)), l && !f && ii(o);
  }
  if (Xe?.has(e))
    return Xe.get(e);
  if ((e.f & kt) !== 0)
    throw e.v;
  return e.v;
}
r(c, "get");
function ii(e) {
  if (e.deps !== null) {
    e.f |= Ke;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & pe) !== 0 && (t.f & Ke) === 0 && ii(
        /** @type {Derived} */
        t
      );
  }
}
r(ii, "reconnect");
function si(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & pe) !== 0 && si(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(si, "depends_on_old_values");
function oi(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
r(oi, "untrack");
const li = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Ds(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || Sn.call(t, i), !i.cancelBubble)
      return aa(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Ds, "create_event");
function vt(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Ds(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Kr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(vt, "event");
function Ce(e) {
  for (var t = 0; t < e.length; t++)
    li.add(e[t]);
  for (var n of Aa)
    n(e);
}
r(Ce, "delegate");
let or = null;
function Sn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  or = e;
  var o = 0, u = or === e && e.__root;
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
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = $, v = ne;
    Ge(null), et(null);
    try {
      for (var _, y = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i["__" + a];
          T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && T.call(i, e);
        } catch (p) {
          _ ? y.push(p) : _ = p;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (_) {
        for (let p of y)
          queueMicrotask(() => {
            throw p;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ge(d), et(v);
    }
  }
}
r(Sn, "handle_event_propagation");
function ci(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(ci, "create_fragment_from_html");
function Gn(e, t) {
  var n = (
    /** @type {Effect} */
    ne
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Gn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ci(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
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
      Gn(u, l);
    } else
      Gn(o, o);
    return o;
  };
}
r(H, "from_html");
function va() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), Gn(t, n), e;
}
r(va, "comment");
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(O, "append");
const Ws = ["touchstart", "touchmove"];
function Os(e) {
  return Ws.includes(e);
}
r(Os, "is_passive_event");
function D(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(D, "set_text");
function Ls(e, t) {
  return Hs(e, t);
}
r(Ls, "mount");
const Qt = /* @__PURE__ */ new Map();
function Hs(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ps();
  var u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var y = v[_];
      if (!u.has(y)) {
        u.add(y);
        var w = Os(y);
        t.addEventListener(y, Sn, { passive: w });
        var T = Qt.get(y);
        T === void 0 ? (document.addEventListener(y, Sn, { passive: w }), Qt.set(y, 1)) : Qt.set(y, T + 1);
      }
    }
  }, "event_handle");
  l(Xn(li)), Aa.add(l);
  var f = void 0, d = Ns(() => {
    var v = n ?? t.appendChild(It());
    return rs(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (_) => {
        Se({});
        var y = (
          /** @type {ComponentContext} */
          ge
        );
        i && (y.c = i), s && (a.$$events = s), f = e(_, a) || {}, ke();
      }
    ), () => {
      for (var _ of u) {
        t.removeEventListener(_, Sn);
        var y = (
          /** @type {number} */
          Qt.get(_)
        );
        --y === 0 ? (document.removeEventListener(_, Sn), Qt.delete(_)) : Qt.set(_, y);
      }
      Aa.delete(l), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Ca.set(f, d), f;
}
r(Hs, "_mount");
let Ca = /* @__PURE__ */ new WeakMap();
function Ps(e, t) {
  const n = Ca.get(e);
  return n ? (Ca.delete(e), n(t)) : (C && (tn in e ? Ki() : qi()), Promise.resolve());
}
r(Ps, "unmount");
var Qe, ut, Oe, jt, Mn, Dn, Qn;
const Ga = class Ga {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Fe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    B(this, Qe, /* @__PURE__ */ new Map());
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
    B(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    B(this, jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    B(this, Mn, !0);
    B(this, Dn, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        ie
      );
      if (b(this, Qe).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, Qe).get(t)
        ), a = b(this, ut).get(n);
        if (a)
          qa(a), b(this, jt).delete(n);
        else {
          var s = b(this, Oe).get(n);
          s && (b(this, ut).set(n, s.effect), b(this, Oe).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of b(this, Qe)) {
          if (b(this, Qe).delete(i), i === t)
            break;
          const u = b(this, Oe).get(o);
          u && (Ae(u.effect), b(this, Oe).delete(o));
        }
        for (const [i, o] of b(this, ut)) {
          if (i === n || b(this, jt).has(i)) continue;
          const u = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, Qe).values()).includes(i)) {
              var f = document.createDocumentFragment();
              ei(o, f), f.append(It()), b(this, Oe).set(i, { effect: o, fragment: f });
            } else
              Ae(o);
            b(this, jt).delete(i), b(this, ut).delete(i);
          }, "on_destroy");
          b(this, Mn) || !a ? (b(this, jt).add(i), zt(o, u, !1)) : u();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    B(this, Qn, /* @__PURE__ */ r((t) => {
      b(this, Qe).delete(t);
      const n = Array.from(b(this, Qe).values());
      for (const [a, s] of b(this, Oe))
        n.includes(a) || (Ae(s.effect), b(this, Oe).delete(a));
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
      ie
    ), s = qr();
    if (n && !b(this, ut).has(t) && !b(this, Oe).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = It();
        i.append(o), b(this, Oe).set(t, {
          effect: Be(() => n(o)),
          fragment: i
        });
      } else
        b(this, ut).set(
          t,
          Be(() => n(this.anchor))
        );
    if (b(this, Qe).set(a, t), s) {
      for (const [u, l] of b(this, ut))
        u === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [u, l] of b(this, Oe))
        u === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, Dn)), a.ondiscard(b(this, Qn));
    } else
      b(this, Dn).call(this);
  }
};
Qe = new WeakMap(), ut = new WeakMap(), Oe = new WeakMap(), jt = new WeakMap(), Mn = new WeakMap(), Dn = new WeakMap(), Qn = new WeakMap(), r(Ga, "BranchManager");
let Ma = Ga;
if (C) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ r(() => {
          if (n !== void 0)
            return n;
          Fi(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var dl = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function te(e, t, n = !1) {
  var a = new Ma(e), s = n ? fn : 0;
  function i(o, u) {
    a.ensure(o, u);
  }
  r(i, "update_branch"), Ba(() => {
    var o = !1;
    t((u, l = !0) => {
      o = !0, i(l, u);
    }), o || i(!1, null);
  }, s);
}
r(te, "if_block");
function Ye(e, t) {
  return t;
}
r(Ye, "index");
function Rs(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, u = 0; u < s; u++) {
    let v = t[u];
    zt(
      v,
      () => {
        if (i) {
          if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Da(Xn(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
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
      ys(d), d.append(f), e.items.clear();
    }
    Da(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Rs, "pause_effects");
function Da(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ae(e[n], t);
}
r(Da, "destroy_effects");
var lr;
function Je(e, t, n, a, s, i = null) {
  var o = e, u = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(It());
  }
  var d = null, v = /* @__PURE__ */ fs(() => {
    var W = n();
    return hr(W) ? W : W == null ? [] : Xn(W);
  }), _, y = !0;
  function w() {
    p.fallback = d, Fs(p, _, o, t, a), d !== null && (_.length === 0 ? (d.f & bt) === 0 ? qa(d) : (d.f ^= bt, kn(d, null, o)) : zt(d, () => {
      d = null;
    }));
  }
  r(w, "commit");
  var T = Ba(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var W = _.length, se = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      ie
    ), M = qr(), P = 0; P < W; P += 1) {
      var g = _[P], E = a(g, P), x = y ? null : u.get(E);
      x ? (x.v && hn(x.v, g), x.i && hn(x.i, P), M && S.unskip_effect(x.e)) : (x = js(
        u,
        y ? o : lr ??= It(),
        g,
        E,
        P,
        s,
        t,
        n
      ), y || (x.e.f |= bt), u.set(E, x)), se.add(E);
    }
    if (W === 0 && i && !d && (y ? d = Be(() => i(o)) : (d = Be(() => i(lr ??= It())), d.f |= bt)), W > se.size && (C ? zs(_, a) : Er("", "", "")), !y)
      if (M) {
        for (const [A, R] of u)
          se.has(A) || S.skip_effect(R.e);
        S.oncommit(w), S.ondiscard(() => {
        });
      } else
        w();
    c(v);
  }), p = { effect: T, items: u, outrogroups: null, fallback: d };
  y = !1;
}
r(Je, "each");
function En(e) {
  for (; e !== null && (e.f & at) === 0; )
    e = e.next;
  return e;
}
r(En, "skip_to_branch");
function Fs(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, u = e.items, l = En(e.effect.first), f, d = null, v, _ = [], y = [], w, T, p, W;
  if (i)
    for (W = 0; W < o; W += 1)
      w = t[W], T = s(w, W), p = /** @type {EachItem} */
      u.get(T).e, (p.f & bt) === 0 && (p.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(p));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], T = s(w, W), p = /** @type {EachItem} */
    u.get(T).e, e.outrogroups !== null)
      for (const R of e.outrogroups)
        R.pending.delete(p), R.done.delete(p);
    if ((p.f & bt) !== 0)
      if (p.f ^= bt, p === l)
        kn(p, null, n);
      else {
        var se = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), pt(e, d, p), pt(e, p, se), kn(p, se, n), d = p, _ = [], y = [], l = En(d.next);
        continue;
      }
    if ((p.f & Pe) !== 0 && (qa(p), i && (p.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (f !== void 0 && f.has(p)) {
        if (_.length < y.length) {
          var S = y[0], M;
          d = S.prev;
          var P = _[0], g = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            kn(_[M], S, n);
          for (M = 0; M < y.length; M += 1)
            f.delete(y[M]);
          pt(e, P.prev, g.next), pt(e, d, P), pt(e, g, S), l = S, d = g, W -= 1, _ = [], y = [];
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
      R.pending.size === 0 && (Da(Xn(R.done)), e.outrogroups?.delete(R));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var E = [];
    if (f !== void 0)
      for (p of f)
        (p.f & Pe) === 0 && E.push(p);
    for (; l !== null; )
      (l.f & Pe) === 0 && l !== e.fallback && E.push(l), l = En(l.next);
    var x = E.length;
    if (x > 0) {
      var A = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < x; W += 1)
          E[W].nodes?.a?.measure();
        for (W = 0; W < x; W += 1)
          E[W].nodes?.a?.fix();
      }
      Rs(e, E, A);
    }
  }
  i && xt(() => {
    if (v !== void 0)
      for (p of v)
        p.nodes?.a?.apply();
  });
}
r(Fs, "reconcile");
function js(e, t, n, a, s, i, o, u) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ _s(n, !1, !1) : Kt(n) : null, f = (o & 2) !== 0 ? Kt(s) : null;
  return C && l && (l.trace = () => {
    u()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Be(() => (i(t, l ?? n, f ?? s, u), () => {
      e.delete(a);
    }))
  };
}
r(js, "create_item");
function kn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & bt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(kn, "move");
function pt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(pt, "link");
function zs(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), u = String(s);
      let l = String(i);
      l.startsWith("[object ") && (l = null), Er(o, u, l);
    }
    n.set(i, s);
  }
}
r(zs, "validate_each_keys");
function Us(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  K(() => {
    var u = (
      /** @type {Effect} */
      ne
    );
    if (o !== (o = t() ?? "") && (u.nodes !== null && (Qr(
      u.nodes.start,
      /** @type {TemplateNode} */
      u.nodes.end
    ), u.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = ci(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ Et(f)), Gn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Et(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ Et(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Et(f)
          );
      else
        i.before(f);
    }
  });
}
r(Us, "html");
const cr = [...` 	
\r\f \v\uFEFF`];
function Bs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var i = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var u = o + i;
          (o === 0 || cr.includes(a[o - 1])) && (u === a.length || cr.includes(a[u])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(u + 1) : o = u;
        }
  }
  return a === "" ? null : a;
}
r(Bs, "to_class");
function qs(e, t) {
  return e == null ? null : String(e);
}
r(qs, "to_style");
function tt(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var u = Bs(n, a, i);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var f = !!i[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return i;
}
r(tt, "set_class");
function jn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var i = qs(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
r(jn, "set_style");
const Ks = /* @__PURE__ */ Symbol("is custom element"), Vs = /* @__PURE__ */ Symbol("is html");
function qe(e, t) {
  var n = fi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(qe, "set_value");
function I(e, t, n, a) {
  var s = fi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Mi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(I, "set_attribute");
function fi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ks]: e.nodeName.includes("-"),
      [Vs]: e.namespaceURI === ki
    }
  );
}
r(fi, "get_attributes");
var ur = /* @__PURE__ */ new Map();
function Gs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ur.get(t);
  if (n) return n;
  ur.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = Ni(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = br(s);
  }
  return n;
}
r(Gs, "get_setters");
function di(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Es(e, "input", async (s) => {
    C && e.type === "checkbox" && $a();
    var i = s ? e.defaultValue : e.value;
    if (i = _a(e) ? ha(i) : i, n(i), ie !== null && a.add(ie), await Ms(), i !== (i = t())) {
      var o = e.selectionStart, u = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", u !== null) {
        var f = e.value.length;
        o === u && u === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(u, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  oi(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), ie !== null && a.add(ie)), Gr(() => {
    C && e.type === "checkbox" && $a();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        pa ?? ie
      );
      if (a.has(i))
        return;
    }
    _a(e) && s === ha(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(di, "bind_value");
function _a(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(_a, "is_numberlike_input");
function ha(e) {
  return e === "" ? null : +e;
}
r(ha, "to_number");
const Xt = [];
function Ys(e, t) {
  return {
    subscribe: Js(e, t).subscribe
  };
}
r(Ys, "readable");
function Js(e, t = ca) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(u) {
    if (kr(e, u) && (e = u, n)) {
      const l = !Xt.length;
      for (const f of a)
        f[1](), Xt.push(f, e);
      if (l) {
        for (let f = 0; f < Xt.length; f += 2)
          Xt[f][0](Xt[f + 1]);
        Xt.length = 0;
      }
    }
  }
  r(s, "set");
  function i(u) {
    s(u(
      /** @type {T} */
      e
    ));
  }
  r(i, "update");
  function o(u, l = ca) {
    const f = [u, l];
    return a.add(f), a.size === 1 && (n = t(s, i) || ca), u(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: i, subscribe: o };
}
r(Js, "writable");
function Qs(e) {
  var n, a, s;
  const i = class i extends e {
    constructor() {
      super(...arguments);
      B(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: v } = d;
          return v && l.push(v.toUpperCase()), l;
        },
        []
      ));
      B(this, a, /* @__PURE__ */ Le($t({})));
      B(this, s, {});
    }
    get $state() {
      return c(b(this, a));
    }
    set $state(l) {
      He(b(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && q(this, s, Ls(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Ps(b(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: d } = f;
      if (!d) return;
      const v = d;
      if (!b(this, n).includes(v.tagName)) return;
      const _ = v._getValue();
      this.document.update({ [v.name]: _ });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), Fe(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(Qs, "SvelteApplicationMixin");
const Xs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Xs);
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
r(k, "localize");
function bn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(bn, "format");
var Zs = /* @__PURE__ */ H("<span> </span>"), $s = /* @__PURE__ */ H('<span style="color: var(--nos-text-secondary, #888)">—</span>'), eo = /* @__PURE__ */ H('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function to(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((A) => t.actor.update({ img: A }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ F(() => {
    const A = Object.keys(t.hitDiceData.bySize);
    return A.length === 0 ? "—" : A.length === 1 ? `d${A[0]}` : A.map((R) => `d${R}`).join("/");
  });
  var i = eo(), o = h(i);
  o.__click = a;
  var u = h(o), l = m(o, 2), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: A }) => t.actor.update({ name: A.value });
  var _ = m(l, 2), y = h(_), w = h(y), T = m(y, 2), p = h(T);
  {
    var W = /* @__PURE__ */ r((A) => {
      var R = Zs(), j = h(R);
      K(() => D(j, t.metaData)), O(A, R);
    }, "consequent"), se = /* @__PURE__ */ r((A) => {
      var R = $s();
      O(A, R);
    }, "alternate");
    te(p, (A) => {
      t.metaData ? A(W) : A(se, !1);
    });
  }
  var S = m(p, 2);
  S.__click = () => t.actor.editMetadata();
  var M = m(_, 2), P = h(M), g = h(P), E = m(P, 2), x = h(E);
  K(
    (A, R, j, L, U) => {
      I(u, "src", c(n)), I(u, "alt", t.actor.reactive.name), D(d, A), qe(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, D(w, R), I(S, "aria-label", j), I(S, "data-tooltip", L), S.disabled = !t.editingEnabled, D(g, U), D(x, c(s));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), O(e, i), ke();
}
r(to, "HeaderRow");
Ce(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ka, "formatModifier");
var no = /* @__PURE__ */ H('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ao(e, t) {
  Se(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ F(() => k(n[t.abilityKey])), s = /* @__PURE__ */ F(() => bn("NWS.RollCheck", { name: c(a) })), i = /* @__PURE__ */ F(() => bn("NWS.RollSave", { name: c(a) }));
  var o = no(), u = h(o);
  let l;
  u.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(u, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), v = h(d), _ = m(f, 2), y = h(_);
  K(
    (w) => {
      l = tt(u, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), I(u, "data-tooltip", c(i)), I(u, "aria-label", c(i)), I(f, "data-tooltip", c(s)), I(f, "aria-label", c(s)), D(v, w), D(y, c(a));
    },
    [() => Ka(t.ability.mod)]
  ), O(e, o), ke();
}
r(ao, "AbilityBox");
Ce(["click"]);
var ro = /* @__PURE__ */ H('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), io = /* @__PURE__ */ H('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  Se(t, !0);
  var n = io(), a = h(n), s = h(a), i = m(a, 2);
  Je(i, 21, () => ({ length: t.wounds.max }), Ye, (o, u, l) => {
    var f = ro();
    let d;
    f.__click = () => t.toggleWounds(l + 1), K(
      (v, _) => {
        d = tt(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), I(f, "data-tooltip", v), I(f, "aria-label", _);
      },
      [
        () => bn("NWS.ToggleWound", { n: l + 1 }),
        () => bn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), K((o) => D(s, o), [() => k("NWS.Wounds")]), O(e, n), ke();
}
r(so, "WoundTracker");
Ce(["click"]);
var oo = /* @__PURE__ */ H('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ H('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ H('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ H('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function fo(e, t) {
  Se(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.movement);
  var l = uo(), f = h(l), d = h(f);
  Je(d, 17, () => n, Ye, (ce, Re) => {
    ao(ce, {
      get abilityKey() {
        return c(Re);
      },
      get ability() {
        return t.actor.reactive.system.abilities[c(Re)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[c(Re)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var v = m(d, 2);
  {
    var _ = /* @__PURE__ */ r((ce) => {
      var Re = oo(), wn = mt(Re);
      wn.__click = () => t.actor.configureSavingThrows();
      var Pn = m(wn, 2);
      Pn.__click = () => t.actor.configureAbilityScores(), K(
        (sa, oa) => {
          I(wn, "data-tooltip", sa), I(Pn, "data-tooltip", oa);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), O(ce, Re);
    }, "consequent");
    te(v, (ce) => {
      t.editingEnabled && ce(_);
    });
  }
  var y = m(f, 2), w = h(y), T = h(w), p = h(T), W = m(h(p), 2), se = h(W), S = m(W, 2), M = h(S), P = m(p, 2), g = m(h(P), 2), E = h(g), x = m(g, 2);
  x.__change = ({ target: ce }) => t.updateTempHP(Number(ce.value));
  var A = m(T, 2);
  let R;
  var j = h(A), L = h(j), U = h(L);
  {
    var J = /* @__PURE__ */ r((ce) => {
      var Re = lo();
      O(ce, Re);
    }, "consequent_1"), V = /* @__PURE__ */ r((ce) => {
      var Re = co();
      O(ce, Re);
    }, "alternate");
    te(U, (ce) => {
      t.isBloodied ? ce(J) : ce(V, !1);
    });
  }
  var ae = m(L, 2), X = h(ae), Y = m(ae, 2), G = h(Y);
  G.__change = ({ target: ce }) => t.updateCurrentHP(Number(ce.value));
  var oe = m(G, 4);
  oe.__change = ({ target: ce }) => t.updateMaxHP(Number(ce.value));
  var le = m(Y, 2);
  le.__click = () => t.actor.configureHitPoints();
  var re = m(j, 2), be = h(re), we = h(be), ee = m(be, 2), N = h(ee), z = m(ee, 2), Q = h(z);
  Q.__change = ({ target: ce }) => t.updateCurrentMana(Number(ce.value));
  var ue = m(Q, 4);
  ue.__change = ({ target: ce }) => t.updateMaxMana(Number(ce.value));
  var Z = m(A, 2);
  Z.__click = () => t.rollHitDice();
  var ve = m(h(Z), 2), gn = h(ve), Mt = m(ve, 2), Yt = h(Mt), fe = m(Mt, 2);
  fe.__click = (ce) => {
    ce.stopPropagation(), t.actor.configureHitDice();
  };
  var xe = m(Z, 2), Me = h(xe);
  Me.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var De = m(h(Me), 2), Jt = h(De), pn = m(De, 2), yn = h(pn), ra = m(Me, 2), Hn = m(h(ra), 2), vi = h(Hn), Ya = m(Hn, 2), _i = h(Ya), ia = m(Ya, 2);
  ia.__click = () => t.actor.configureMovement();
  var hi = m(y, 2);
  so(hi, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), K(
    (ce, Re, wn, Pn, sa, oa, bi, mi, gi, pi, yi, wi) => {
      D(se, ce), D(M, c(i).value), D(E, Re), qe(x, c(s).temp ?? 0), R = tt(A, 1, "nos-combat__pair", null, R, { "nos-hp--bloodied": t.isBloodied }), D(X, wn), qe(G, c(s).value), qe(oe, c(s).max), oe.disabled = !t.editingEnabled, I(le, "data-tooltip", Pn), le.disabled = !t.editingEnabled, jn(we, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), jn(ee, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(N, sa), qe(Q, t.mana?.current ?? 0), jn(Q, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), qe(ue, t.mana?.max || t.mana?.baseMax || 0), ue.disabled = !t.editingEnabled, jn(ue, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(gn, oa), D(Yt, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), I(fe, "data-tooltip", bi), fe.disabled = !t.editingEnabled, I(Me, "data-tooltip", mi), D(Jt, gi), D(yn, pi), D(vi, yi), D(_i, c(u).walk), I(ia, "data-tooltip", wi), ia.disabled = !t.editingEnabled;
    },
    [
      () => k("NWS.Armor"),
      () => k("NWS.TempHP"),
      () => k("NWS.HitPoints"),
      () => k("NWS.ConfigureHitPoints"),
      () => k("NWS.Mana"),
      () => k("NWS.HitDice"),
      () => k("NWS.ConfigureHitDice"),
      () => k("NWS.RollInitiative"),
      () => k("NWS.Initiative"),
      () => Ka(c(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), O(e, l), ke();
}
r(fo, "StatsRow");
Ce(["click", "change"]);
var vo = /* @__PURE__ */ H('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  Se(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ F(() => n[t.skillKey]), o = /* @__PURE__ */ F(() => k(a[c(i)])), u = /* @__PURE__ */ F(() => k(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = m(f, 2), _ = h(v), y = m(v, 2), w = h(y);
  K(
    (T, p) => {
      I(l, "data-tooltip", T), D(d, c(o)), D(_, p), D(w, c(u));
    },
    [
      () => bn("NWS.RollSkill", { name: c(u) }),
      () => Ka(t.skill.mod)
    ]
  ), O(e, l), ke();
}
r(_o, "SkillCell");
Ce(["click"]);
var ho = /* @__PURE__ */ H('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), bo = /* @__PURE__ */ H('<section class="nos-skills-row"><!> <!></section>');
function mo(e, t) {
  Se(t, !0);
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
  var a = bo(), s = h(a);
  Je(s, 17, () => n, Ye, (u, l) => {
    _o(u, {
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
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((u) => {
      var l = ho();
      l.__click = () => t.actor.configureSkills(), K((f) => I(l, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), O(u, l);
    }, "consequent");
    te(i, (u) => {
      t.editingEnabled && u(o);
    });
  }
  O(e, a), ke();
}
r(mo, "SkillsRow");
Ce(["click"]);
var go = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ H('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ H('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Co = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Mo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Do = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ H("<!> <!> <!> <!> <!>", 1);
function fr(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), i = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), u = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
  function l(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(l, "configureItem");
  function f(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(f, "deleteItem");
  function d(g, E) {
    const x = { type: "Item", uuid: E.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(x));
  }
  r(d, "onDragStart");
  var v = Oo(), _ = mt(v);
  {
    var y = /* @__PURE__ */ r((g) => {
      var E = Eo(), x = h(E);
      {
        var A = /* @__PURE__ */ r((L) => {
          var U = po(), J = h(U), V = h(J), ae = m(J, 2), X = h(ae), Y = m(X, 2);
          Y.__click = () => l(c(s).id);
          var G = h(Y), oe = m(Y, 2);
          {
            var le = /* @__PURE__ */ r((re) => {
              var be = go(), we = h(be);
              we.__click = () => l(c(s).id);
              var ee = m(we, 2);
              ee.__click = () => f(c(s).id), O(re, be);
            }, "consequent");
            te(oe, (re) => {
              t.editingEnabled && re(le);
            });
          }
          K(
            (re) => {
              D(V, re), I(X, "src", c(s).img), I(X, "alt", c(s).name), D(G, c(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), vt("dragstart", ae, (re) => d(re, c(s))), O(L, U);
        }, "consequent_1");
        te(x, (L) => {
          c(s) && L(A);
        });
      }
      var R = m(x, 2);
      {
        var j = /* @__PURE__ */ r((L) => {
          var U = wo(), J = h(U), V = h(J), ae = m(J, 2), X = h(ae), Y = m(X, 2);
          Y.__click = () => l(c(i).id);
          var G = h(Y), oe = m(Y, 2);
          {
            var le = /* @__PURE__ */ r((re) => {
              var be = yo(), we = h(be);
              we.__click = () => l(c(i).id);
              var ee = m(we, 2);
              ee.__click = () => f(c(i).id), O(re, be);
            }, "consequent_2");
            te(oe, (re) => {
              t.editingEnabled && re(le);
            });
          }
          K(
            (re) => {
              D(V, re), I(X, "src", c(i).img), I(X, "alt", c(i).name), D(G, c(i).name);
            },
            [() => k("NWS.Background")]
          ), vt("dragstart", ae, (re) => d(re, c(i))), O(L, U);
        }, "consequent_3");
        te(R, (L) => {
          c(i) && L(j);
        });
      }
      O(g, E);
    }, "consequent_4");
    te(_, (g) => {
      (c(s) || c(i)) && g(y);
    });
  }
  var w = m(_, 2);
  {
    var T = /* @__PURE__ */ r((g) => {
      var E = No(), x = h(E), A = h(x), R = m(x, 2), j = h(R), L = m(j, 2);
      L.__click = () => l(c(o).id);
      var U = h(L), J = m(L, 2);
      {
        var V = /* @__PURE__ */ r((Y) => {
          var G = So(), oe = h(G);
          oe.__click = () => l(c(o).id);
          var le = m(oe, 2);
          le.__click = () => f(c(o).id), O(Y, G);
        }, "consequent_5");
        te(J, (Y) => {
          t.editingEnabled && Y(V);
        });
      }
      var ae = m(R, 2);
      {
        var X = /* @__PURE__ */ r((Y) => {
          var G = xo(), oe = h(G), le = m(oe, 2);
          le.__click = () => l(c(u).id);
          var re = h(le), be = m(le, 2);
          {
            var we = /* @__PURE__ */ r((ee) => {
              var N = ko(), z = h(N);
              z.__click = () => l(c(u).id);
              var Q = m(z, 2);
              Q.__click = () => f(c(u).id), O(ee, N);
            }, "consequent_6");
            te(be, (ee) => {
              t.editingEnabled && ee(we);
            });
          }
          K(() => {
            I(oe, "src", c(u).img), I(oe, "alt", c(u).name), D(re, c(u).name);
          }), vt("dragstart", G, (ee) => d(ee, c(u))), O(Y, G);
        }, "consequent_7");
        te(ae, (Y) => {
          c(u) && Y(X);
        });
      }
      K(
        (Y, G) => {
          D(A, Y), I(j, "src", c(o).img), I(j, "alt", c(o).name), D(U, `${c(o).name ?? ""} (${G ?? ""} ${c(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), vt("dragstart", R, (Y) => d(Y, c(o))), O(g, E);
    }, "consequent_8");
    te(w, (g) => {
      c(o) && g(T);
    });
  }
  var p = m(w, 2);
  {
    var W = /* @__PURE__ */ r((g) => {
      var E = Ao(), x = h(E), A = h(x), R = m(x, 2);
      Je(R, 21, () => c(n), Ye, (j, L) => {
        var U = Io(), J = h(U), V = m(J, 2);
        V.__click = () => l(c(L).id);
        var ae = h(V), X = m(V, 2);
        {
          var Y = /* @__PURE__ */ r((G) => {
            var oe = To(), le = h(oe);
            le.__click = () => l(c(L).id);
            var re = m(le, 2);
            re.__click = () => f(c(L).id), O(G, oe);
          }, "consequent_9");
          te(X, (G) => {
            t.editingEnabled && G(Y);
          });
        }
        K(() => {
          I(J, "src", c(L).img), I(J, "alt", c(L).name), D(ae, c(L).name);
        }), vt("dragstart", U, (G) => d(G, c(L))), O(j, U);
      }), K((j) => D(A, j), [() => k("NWS.Features")]), O(g, E);
    }, "consequent_10");
    te(p, (g) => {
      c(n).length > 0 && g(W);
    });
  }
  var se = m(p, 2);
  {
    var S = /* @__PURE__ */ r((g) => {
      var E = Do(), x = h(E), A = h(x), R = m(x, 2);
      Je(R, 21, () => c(a), Ye, (j, L) => {
        var U = Mo(), J = h(U), V = m(J, 2);
        V.__click = () => l(c(L).id);
        var ae = h(V), X = m(V, 2);
        {
          var Y = /* @__PURE__ */ r((G) => {
            var oe = Co(), le = h(oe);
            le.__click = () => l(c(L).id);
            var re = m(le, 2);
            re.__click = () => f(c(L).id), O(G, oe);
          }, "consequent_11");
          te(X, (G) => {
            t.editingEnabled && G(Y);
          });
        }
        K(() => {
          I(J, "src", c(L).img), I(J, "alt", c(L).name), D(ae, c(L).name);
        }), vt("dragstart", U, (G) => d(G, c(L))), O(j, U);
      }), K((j) => D(A, j), [() => k("NWS.Boons")]), O(g, E);
    }, "consequent_12");
    te(se, (g) => {
      c(a).length > 0 && g(S);
    });
  }
  var M = m(se, 2);
  {
    var P = /* @__PURE__ */ r((g) => {
      var E = Wo(), x = h(E);
      K((A) => D(x, A), [() => k("NWS.DropFeaturesHere")]), O(g, E);
    }, "consequent_13");
    te(M, (g) => {
      !c(s) && !c(i) && !c(o) && c(n).length === 0 && c(a).length === 0 && g(P);
    });
  }
  O(e, v), ke();
}
r(fr, "FeaturesTab");
Ce(["click"]);
var Lo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ho = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Po = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ro = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ H('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ H('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ H('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function dr(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, M) => (S.sort ?? 0) - (M.sort ?? 0))), s = /* @__PURE__ */ F(() => c(n) ? c(a).filter((S) => S.name.toLowerCase().includes(c(n).toLowerCase())) : c(a)), i = /* @__PURE__ */ F(() => {
    const S = {};
    for (const M of c(s)) {
      const P = M.system?.tier ?? 0, g = M.system?.isUtility ?? !1, E = g ? "_utility" : `_tier_${P}`, x = g ? k("NWS.Utility") : bn("NWS.Tier", { n: P });
      S[E] ??= { label: x, spells: [] }, S[E].spells.push(M);
    }
    return Object.entries(S).sort(([M], [P]) => {
      if (M === "_utility") return 1;
      if (P === "_utility") return -1;
      const g = parseInt(M.replace("_tier_", "")), E = parseInt(P.replace("_tier_", ""));
      return g - E;
    });
  });
  function o(S) {
    t.actor.items.get(S)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function u(S) {
    t.actor.deleteEmbeddedDocuments("Item", [S]);
  }
  r(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  r(l, "createSpell");
  function f(S) {
    t.actor.activateItem(S);
  }
  r(f, "castSpell");
  function d(S, M) {
    const P = { type: "Item", uuid: M.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(P));
  }
  r(d, "onDragStart");
  var v = Uo(), _ = mt(v), y = m(h(_), 2), w = m(y, 2);
  {
    var T = /* @__PURE__ */ r((S) => {
      var M = Lo();
      M.__click = l;
      var P = m(h(M));
      K((g) => D(P, ` ${g ?? ""}`), [() => k("NWS.New")]), O(S, M);
    }, "consequent");
    te(w, (S) => {
      t.editingEnabled && S(T);
    });
  }
  var p = m(_, 2);
  Je(p, 17, () => c(i), Ye, (S, M) => {
    var P = /* @__PURE__ */ F(() => gr(c(M), 2));
    let g = /* @__PURE__ */ r(() => c(P)[1], "tier");
    var E = jo(), x = h(E), A = h(x), R = m(x, 2);
    Je(R, 21, () => g().spells, Ye, (j, L) => {
      var U = Fo(), J = h(U), V = m(J, 2);
      V.__click = () => f(c(L).id);
      var ae = h(V), X = m(ae);
      {
        var Y = /* @__PURE__ */ r((ee) => {
          var N = Ho();
          K((z) => I(N, "data-tooltip", z), [() => k("NWS.Concentration")]), O(ee, N);
        }, "consequent_1");
        te(X, (ee) => {
          c(L).system?.concentration && ee(Y);
        });
      }
      var G = m(X, 2);
      {
        var oe = /* @__PURE__ */ r((ee) => {
          var N = Po();
          K((z) => I(N, "data-tooltip", z), [() => k("NWS.Utility")]), O(ee, N);
        }, "consequent_2");
        te(G, (ee) => {
          c(L).system?.isUtility && ee(oe);
        });
      }
      var le = m(V, 2), re = h(le), be = m(le, 2);
      {
        var we = /* @__PURE__ */ r((ee) => {
          var N = Ro(), z = h(N);
          z.__click = () => o(c(L).id);
          var Q = m(z, 2);
          Q.__click = () => u(c(L).id), O(ee, N);
        }, "consequent_3");
        te(be, (ee) => {
          t.editingEnabled && ee(we);
        });
      }
      K(() => {
        I(J, "src", c(L).img), I(J, "alt", c(L).name), D(ae, `${c(L).name ?? ""} `), D(re, c(L).system?.activationCost ?? "");
      }), vt("dragstart", U, (ee) => d(ee, c(L))), O(j, U);
    }), K(() => D(A, g().label)), O(S, E);
  });
  var W = m(p, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var M = zo(), P = h(M);
      K((g) => D(P, g), [() => k("NWS.DropSpellsHere")]), O(S, M);
    }, "consequent_4");
    te(W, (S) => {
      c(a).length === 0 && S(se);
    });
  }
  K((S) => I(y, "placeholder", S), [() => k("NWS.SearchSpells")]), di(y, () => c(n), (S) => He(n, S)), O(e, v), ke();
}
r(dr, "SpellsTab");
Ce(["click"]);
var Bo = /* @__PURE__ */ H('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), qo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ko = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Go = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Yo = /* @__PURE__ */ H('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function vr(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ F(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "object").sort((g, E) => (g.sort ?? 0) - (E.sort ?? 0))), i = /* @__PURE__ */ F(() => c(n) ? c(s).filter((g) => g.name.toLowerCase().includes(c(n).toLowerCase())) : c(s));
  function o(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function u(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(l, "createObject");
  function f(g, E) {
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, Math.round(Number(E)))
    });
  }
  r(f, "updateCurrency");
  function d(g, E) {
    const x = c(a)[g]?.value ?? 0;
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, x + E)
    });
  }
  r(d, "adjustCurrency");
  function v(g, E) {
    t.actor.items.get(g)?.update({ "system.quantity": Number(E) });
  }
  r(v, "updateQuantity");
  function _(g, E) {
    const x = { type: "Item", uuid: E.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(x));
  }
  r(_, "onDragStart");
  var y = Yo(), w = mt(y);
  Je(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ye, (g, E) => {
    var x = /* @__PURE__ */ F(() => gr(E, 2));
    let A = /* @__PURE__ */ r(() => c(x)[0], "type"), R = /* @__PURE__ */ r(() => c(x)[1], "labelKey");
    var j = Bo(), L = h(j), U = h(L), J = m(L, 2);
    J.__click = () => d(A(), -1);
    var V = m(J, 2);
    V.__change = ({ target: X }) => f(A(), X.value);
    var ae = m(V, 2);
    ae.__click = () => d(A(), 1), K(
      (X, Y, G) => {
        I(L, "for", `currency-${A() ?? ""}`), D(U, X), I(J, "aria-label", `-1 ${Y ?? ""}`), I(V, "id", `currency-${A() ?? ""}`), qe(V, c(a)[A()]?.value ?? 0), I(ae, "aria-label", `+1 ${G ?? ""}`);
      },
      [
        () => k(R()),
        () => k(R()),
        () => k(R())
      ]
    ), O(g, j);
  });
  var T = m(w, 2), p = m(h(T), 2), W = m(p, 2);
  {
    var se = /* @__PURE__ */ r((g) => {
      var E = qo();
      E.__click = l;
      var x = m(h(E));
      K((A) => D(x, ` ${A ?? ""}`), [() => k("NWS.New")]), O(g, E);
    }, "consequent");
    te(W, (g) => {
      t.editingEnabled && g(se);
    });
  }
  var S = m(T, 2);
  Je(S, 21, () => c(i), Ye, (g, E) => {
    var x = Vo(), A = h(x), R = m(A, 2);
    R.__click = () => o(c(E).id);
    var j = h(R), L = m(R, 2);
    L.__change = ({ target: V }) => v(c(E).id, V.value);
    var U = m(L, 2);
    {
      var J = /* @__PURE__ */ r((V) => {
        var ae = Ko(), X = h(ae);
        X.__click = () => o(c(E).id);
        var Y = m(X, 2);
        Y.__click = () => u(c(E).id), O(V, ae);
      }, "consequent_1");
      te(U, (V) => {
        t.editingEnabled && V(J);
      });
    }
    K(() => {
      I(A, "src", c(E).img), I(A, "alt", c(E).name), D(j, c(E).name), qe(L, c(E).system?.quantity ?? 1);
    }), vt("dragstart", x, (V) => _(V, c(E))), O(g, x);
  });
  var M = m(S, 2);
  {
    var P = /* @__PURE__ */ r((g) => {
      var E = Go(), x = h(E);
      K((A) => D(x, A), [() => k("NWS.DropInventoryHere")]), O(g, E);
    }, "consequent_2");
    te(M, (g) => {
      c(s).length === 0 && g(P);
    });
  }
  K((g) => I(p, "placeholder", g), [() => k("NWS.SearchItems")]), di(p, () => c(n), (g) => He(n, g)), O(e, y), ke();
}
r(vr, "InventoryTab");
Ce(["click", "change"]);
var Jo = /* @__PURE__ */ H(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function _r(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.system.details), a = /* @__PURE__ */ F(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ F(() => [...c(a).languages ?? []].join(", ")), i = /* @__PURE__ */ F(() => [...c(a).armor ?? []].join(", ")), o = /* @__PURE__ */ F(() => (c(a).weapons ?? []).join(", "));
  var u = Jo(), l = h(u), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: ve }) => t.actor.update({ "system.details.age": ve.value });
  var _ = m(l, 2), y = h(_), w = h(y), T = m(y, 2);
  T.__change = ({ target: ve }) => t.actor.update({ "system.details.gender": ve.value });
  var p = m(_, 2), W = h(p), se = h(W), S = m(W, 2);
  S.__change = ({ target: ve }) => t.actor.update({ "system.details.height": ve.value });
  var M = m(p, 2), P = h(M), g = h(P), E = m(P, 2);
  E.__change = ({ target: ve }) => t.actor.update({ "system.details.weight": ve.value });
  var x = m(M, 2), A = h(x), R = h(A), j = m(A, 2), L = h(j), U = m(j, 2);
  U.__click = () => t.actor.configureLanguageProficiencies();
  var J = m(x, 2), V = h(J), ae = h(V), X = m(V, 2), Y = h(X), G = m(X, 2);
  G.__click = () => t.actor.configureArmorProficiencies();
  var oe = m(J, 2), le = h(oe), re = h(le), be = m(le, 2), we = h(be), ee = m(be, 2);
  ee.__click = () => t.actor.configureWeaponProficiencies();
  var N = m(oe, 2), z = h(N), Q = h(z), ue = m(z, 2), Z = h(ue);
  Us(Z, () => c(n).notes ?? ""), K(
    (ve, gn, Mt, Yt, fe, xe, Me, De, Jt, pn, yn, ra, Hn) => {
      D(d, ve), qe(v, c(n).age ?? ""), v.disabled = !t.editingEnabled, D(w, gn), qe(T, c(n).gender ?? ""), T.disabled = !t.editingEnabled, D(se, Mt), qe(S, c(n).height ?? ""), I(S, "placeholder", Yt), S.disabled = !t.editingEnabled, D(g, fe), qe(E, c(n).weight ?? ""), I(E, "placeholder", xe), E.disabled = !t.editingEnabled, D(R, Me), D(L, c(s) || "—"), I(U, "data-tooltip", De), U.disabled = !t.editingEnabled, D(ae, Jt), D(Y, c(i) || "—"), I(G, "data-tooltip", pn), G.disabled = !t.editingEnabled, D(re, yn), D(we, c(o) || "—"), I(ee, "data-tooltip", ra), ee.disabled = !t.editingEnabled, D(Q, Hn), I(ue, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), vt("blur", ue, ({ target: ve }) => t.actor.update({ "system.details.notes": ve.innerHTML })), O(e, u), ke();
}
r(_r, "BioTab");
Ce(["change", "click"]);
var Qo = /* @__PURE__ */ H('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Xo = /* @__PURE__ */ H('<div class="nos-slot nos-slot--empty"> </div>'), Zo = /* @__PURE__ */ H("<!> <!>", 1);
function $o(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((u) => u.type === "object" && u.system?.objectType === "weapon").sort((u, l) => (u.sort ?? 0) - (l.sort ?? 0)));
  var a = Zo(), s = mt(a);
  Je(s, 17, () => c(n), Ye, (u, l) => {
    var f = Qo(), d = h(f), v = m(d, 2);
    v.__click = () => t.actor.activateItem(c(l).id);
    var _ = h(v);
    K(() => {
      I(d, "src", c(l).img), I(d, "alt", c(l).name), I(v, "data-tooltip", c(l).name), D(_, c(l).name);
    }), O(u, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((u) => {
      var l = Xo(), f = h(l);
      K((d) => D(f, d), [() => k("NWS.NoWeapons")]), O(u, l);
    }, "consequent");
    te(i, (u) => {
      c(n).length === 0 && u(o);
    });
  }
  O(e, a), ke();
}
r($o, "InventorySlots");
Ce(["click"]);
var el = /* @__PURE__ */ H('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), tl = /* @__PURE__ */ H('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), nl = /* @__PURE__ */ H('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function al(e, t) {
  Se(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: fr
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: dr
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: vr
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: _r
    }
  ];
  let a = /* @__PURE__ */ Le("features"), s = /* @__PURE__ */ F(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ F(() => t.actor.reactive.system.inventory);
  var o = nl(), u = h(o);
  Je(u, 21, () => n, Ye, (S, M) => {
    var P = el();
    let g;
    P.__click = () => He(a, c(M).name, !0);
    var E = h(P), x = m(E);
    K(
      (A) => {
        g = tt(P, 1, "nos-tab-btn", null, g, { "nos-tab-btn--active": c(a) === c(M).name }), tt(E, 1, c(M).icon), D(x, ` ${A ?? ""}`);
      },
      [() => k(c(M).labelKey)]
    ), O(S, P);
  });
  var l = m(u, 2), f = h(l);
  {
    var d = /* @__PURE__ */ r((S) => {
      fr(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), v = /* @__PURE__ */ r((S) => {
      var M = va(), P = mt(M);
      {
        var g = /* @__PURE__ */ r((x) => {
          dr(x, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), E = /* @__PURE__ */ r((x) => {
          var A = va(), R = mt(A);
          {
            var j = /* @__PURE__ */ r((U) => {
              vr(U, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), L = /* @__PURE__ */ r((U) => {
              var J = va(), V = mt(J);
              {
                var ae = /* @__PURE__ */ r((X) => {
                  _r(X, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                te(
                  V,
                  (X) => {
                    c(a) === "bio" && X(ae);
                  },
                  !0
                );
              }
              O(U, J);
            }, "alternate");
            te(
              R,
              (U) => {
                c(a) === "inventory" ? U(j) : U(L, !1);
              },
              !0
            );
          }
          O(x, A);
        }, "alternate_1");
        te(
          P,
          (x) => {
            c(a) === "spells" ? x(g) : x(E, !1);
          },
          !0
        );
      }
      O(S, M);
    }, "alternate_2");
    te(f, (S) => {
      c(a) === "features" ? S(d) : S(v, !1);
    });
  }
  var _ = m(l, 2), y = h(_), w = h(y), T = m(_, 2), p = h(T);
  $o(p, {
    get actor() {
      return t.actor;
    }
  });
  var W = m(p, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var M = tl(), P = h(M);
      K(() => D(P, `${c(i).usedSlots ?? 0 ?? ""} / ${c(i).totalSlots ?? 0 ?? ""}`)), O(S, M);
    }, "consequent_4");
    te(W, (S) => {
      c(s) && S(se);
    });
  }
  K((S) => D(w, S), [() => k("NWS.Weapons")]), O(e, o), ke();
}
r(al, "ContentArea");
Ce(["click"]);
var rl = /* @__PURE__ */ H('<button type="button" role="menuitem"><i></i> <span> </span></button>'), il = /* @__PURE__ */ H('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"></div>', 1);
function sl(e, t) {
  Se(t, !0);
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
  r(a, "select");
  function s(l) {
    l.key === "Escape" && t.onclose();
  }
  r(s, "handleKeydown");
  var i = il(), o = mt(i);
  o.__click = function(...l) {
    t.onclose?.apply(this, l);
  }, o.__keydown = s;
  var u = m(o, 2);
  Je(u, 21, () => n, Ye, (l, f) => {
    var d = rl();
    let v;
    d.__click = () => a(c(f).value);
    var _ = h(d), y = m(_, 2), w = h(y);
    K(
      (T) => {
        v = tt(d, 1, "nos-color-scheme-menu__option", null, v, {
          "nos-color-scheme-menu__option--active": t.colorScheme === c(f).value
        }), tt(_, 1, `fa-solid ${c(f).icon ?? ""}`), D(w, T);
      },
      [() => k(c(f).label)]
    ), O(l, d);
  }), O(e, i), ke();
}
r(sl, "ColorSchemeMenu");
Ce(["click", "keydown"]);
var ol = /* @__PURE__ */ H('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function ll(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(!1);
  var a = ol(), s = h(a);
  let i;
  s.__click = function(...p) {
    t.toggleEditingEnabled?.apply(this, p);
  };
  var o = h(s), u = m(s, 2);
  u.__click = () => t.actor.triggerLevelUp();
  var l = m(u, 2);
  l.__click = () => t.actor.triggerLevelDown();
  var f = m(l, 2), d = h(f);
  let v;
  d.__click = () => He(n, !c(n));
  var _ = m(d, 2);
  {
    var y = /* @__PURE__ */ r((p) => {
      sl(p, {
        get colorScheme() {
          return t.colorScheme;
        },
        get setColorScheme() {
          return t.setColorScheme;
        },
        onclose: /* @__PURE__ */ r(() => He(n, !1), "onclose")
      });
    }, "consequent");
    te(_, (p) => {
      c(n) && p(y);
    });
  }
  var w = m(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var T = m(w, 2);
  T.__click = () => t.actor.triggerRest({ restType: "safe" }), K(
    (p, W, se, S, M, P, g, E, x, A, R, j) => {
      i = tt(s, 1, "nos-sidebar-btn", null, i, { "nos-sidebar-btn--active": t.editingEnabled }), I(s, "aria-pressed", t.editingEnabled), I(s, "aria-label", p), I(s, "data-tooltip", W), tt(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), I(u, "aria-label", se), I(u, "data-tooltip", S), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, I(l, "aria-label", M), I(l, "data-tooltip", P), l.disabled = t.actor.reactive.system.levelUpHistory.length === 0, v = tt(d, 1, "nos-sidebar-btn", null, v, { "nos-sidebar-btn--active": t.darkMode }), I(d, "aria-pressed", t.darkMode), I(d, "aria-label", g), I(d, "data-tooltip", E), I(d, "aria-expanded", c(n)), I(w, "aria-label", x), I(w, "data-tooltip", A), I(T, "aria-label", R), I(T, "data-tooltip", j);
    },
    [
      () => t.editingEnabled ? k("NWS.DisableEditing") : k("NWS.EnableEditing"),
      () => t.editingEnabled ? k("NWS.EditingEnabled") : k("NWS.EditingLocked"),
      () => k("NWS.LevelUp"),
      () => k("NWS.LevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.ColorScheme"),
      () => k("NWS.ColorScheme"),
      () => k("NWS.FieldRest"),
      () => k("NWS.FieldRest"),
      () => k("NWS.SafeRest"),
      () => k("NWS.SafeRest")
    ]
  ), O(e, a), ke();
}
r(ll, "SidebarControls");
Ce(["click"]);
var cl = /* @__PURE__ */ H('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ul(e, t) {
  Se(t, !0);
  const n = Rr((N) => {
    const z = {
      updateActor: Hooks.on("updateActor", (Q, ue, Z) => {
        Z.diff !== !1 && Q._id === t.actor.id && N();
      }),
      createItem: Hooks.on("createItem", (Q) => {
        Q?.actor?.id === t.actor.id && N();
      }),
      deleteItem: Hooks.on("deleteItem", (Q) => {
        Q?.actor?.id === t.actor.id && N();
      }),
      updateItem: Hooks.on("updateItem", (Q, ue, Z) => {
        Z.diff !== !1 && Q?.actor?.id === t.actor.id && N();
      })
    };
    return () => {
      Hooks.off("updateActor", z.updateActor), Hooks.off("createItem", z.createItem), Hooks.off("deleteItem", z.deleteItem), Hooks.off("updateItem", z.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(N, z) {
      if (z === "reactive")
        return n(), N;
      const Q = N[z];
      return typeof Q == "function" ? Q.bind(N) : Q;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(N, z) {
    return Math.clamp(0, Math.round(N / z * 100), 100);
  }
  r(u, "getHitPointPercentage");
  function l(N, z, Q, ue) {
    const Z = [];
    return Q && Z.push(`${Q.name} (${s[ue] ?? ue})`), N && (z ? Z.push(`${N.name} (${z.name}, ${N.system.classLevel})`) : Z.push(`${N.name} (${N.system.classLevel})`)), Z.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(N, z) {
    if (!z) return N;
    const Q = [4, 6, 8, 10, 12, 20], ue = Q.indexOf(N);
    return ue === -1 ? N : Q[Math.min(ue + z, Q.length - 1)];
  }
  r(f, "incrementDieSize");
  let d = /* @__PURE__ */ F(() => u(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(N) {
    a.update({ "system.attributes.hp.value": N });
  }
  r(v, "updateCurrentHP");
  function _(N) {
    a.update({ "system.attributes.hp.max": N });
  }
  r(_, "updateMaxHP");
  function y(N) {
    a.update({ "system.attributes.hp.temp": N });
  }
  r(y, "updateTempHP");
  let w = /* @__PURE__ */ F(() => a.reactive.system.resources.mana), T = /* @__PURE__ */ F(() => (c(w).max ?? 0) > 0 || (c(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((N) => N.type === "class" && N.system?.mana?.formula?.length));
  function p(N) {
    a.update({ "system.resources.mana.current": N });
  }
  r(p, "updateCurrentMana");
  function W(N) {
    const z = a.reactive.system.resources.mana, Q = z.baseMax ?? 0, Z = (z.max || Q) - Q, ve = Math.max(0, N - Z);
    a.update({ "system.resources.mana.baseMax": ve });
  }
  r(W, "updateMaxMana");
  let se = /* @__PURE__ */ F(() => {
    const N = a.reactive.system.attributes.hitDice, z = a.reactive.system.attributes.bonusHitDice ?? [], Q = a.reactive.items.filter((fe) => fe.type === "class"), ue = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, Z = {};
    for (const fe of Q) {
      const xe = fe.system.hitDieSize, Me = f(xe, ue), De = fe.system.classLevel;
      Z[Me] ??= { current: 0, total: 0 }, Z[Me].total += De, Z[Me].current = N[Me]?.current ?? 0;
    }
    const ve = Q.map((fe) => f(fe.system.hitDieSize, ue));
    for (const fe of z) {
      const xe = f(fe.size, ue);
      Z[xe] ??= { current: N[xe]?.current ?? 0, total: 0 }, Z[xe].total += fe.value, ve.includes(xe) || (Z[xe].current = N[xe]?.current ?? 0);
    }
    const gn = z.map((fe) => f(fe.size, ue));
    for (const [fe, xe] of Object.entries(N ?? {})) {
      const Me = Number(fe), De = f(Me, ue), Jt = xe?.bonus ?? 0;
      if (Jt > 0) {
        Z[De] ??= { current: 0, total: 0 }, Z[De].total += Jt;
        const pn = ve.includes(De), yn = gn.includes(De);
        !pn && !yn && (Z[De].current = N[De]?.current ?? 0);
      }
    }
    let Mt = 0, Yt = 0;
    for (const fe of Object.values(Z))
      Mt += fe.current, Yt += fe.total;
    return { bySize: Z, value: Mt, max: Yt };
  });
  async function S(N) {
    await a.updateCurrentHitDice(N);
  }
  r(S, "updateCurrentHitDice");
  async function M() {
    await a.rollHitDice();
  }
  r(M, "rollHitDice");
  async function P() {
    await a.editCurrentHitDice();
  }
  r(P, "editCurrentHitDice");
  let g = /* @__PURE__ */ F(() => a.reactive.items.find((N) => N.type === "class") ?? null), E = /* @__PURE__ */ F(() => {
    const N = a.reactive.items.find((Z) => Z.type === "class") ?? null, z = a.reactive.items.find((Z) => Z.type === "subclass") ?? null, Q = a.reactive.items.find((Z) => Z.type === "ancestry") ?? null, ue = a.reactive.system.attributes.sizeCategory;
    return l(N, z, Q, ue);
  }), x = /* @__PURE__ */ F(() => a.reactive.system.attributes.wounds);
  function A(N) {
    let z = N;
    N <= c(x).value && (z = N - 1), a.update({ "system.attributes.wounds.value": z });
  }
  r(A, "toggleWounds");
  let R = /* @__PURE__ */ F(() => a.reactive.flags.nimble), j = /* @__PURE__ */ F(() => c(R)?.editingEnabled ?? !0);
  const L = Ys(!1, (N) => (xs(() => N(c(j))), () => {
  }));
  async function U() {
    await a.setFlag("nimble", "editingEnabled", !c(j));
  }
  r(U, "toggleEditingEnabled");
  let J = /* @__PURE__ */ F(() => {
    const N = c(R)?.colorScheme;
    return N || (c(R)?.darkMode === !0 ? "dark" : "white");
  });
  async function V(N) {
    await a.setFlag("nimble", "colorScheme", N);
  }
  r(V, "setColorScheme");
  let ae = /* @__PURE__ */ F(() => c(J) === "dark"), X = /* @__PURE__ */ F(() => c(J) === "nimble");
  Rn("actor", a), Rn("document", a), Rn("application", t.sheet), Rn("editingEnabled", L);
  var Y = cl();
  let G;
  var oe = h(Y), le = h(oe);
  to(le, {
    get actor() {
      return a;
    },
    get metaData() {
      return c(E);
    },
    get editingEnabled() {
      return c(j);
    },
    get hitDiceData() {
      return c(se);
    }
  });
  var re = m(le, 2);
  fo(re, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(j);
    },
    get isBloodied() {
      return c(d);
    },
    get hitDiceData() {
      return c(se);
    },
    get hasMana() {
      return c(T);
    },
    get mana() {
      return c(w);
    },
    get wounds() {
      return c(x);
    },
    toggleWounds: A,
    updateCurrentHP: v,
    updateMaxHP: _,
    updateTempHP: y,
    updateCurrentMana: p,
    updateMaxMana: W,
    updateCurrentHitDice: S,
    rollHitDice: M,
    editCurrentHitDice: P
  });
  var be = m(re, 2);
  mo(be, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(j);
    }
  });
  var we = m(oe, 2);
  al(we, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(j);
    },
    get hasMana() {
      return c(T);
    },
    get mana() {
      return c(w);
    },
    updateCurrentMana: p,
    updateMaxMana: W
  });
  var ee = m(we, 2);
  ll(ee, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(j);
    },
    toggleEditingEnabled: U,
    get classItem() {
      return c(g);
    },
    get darkMode() {
      return c(ae);
    },
    get colorScheme() {
      return c(J);
    },
    setColorScheme: V
  }), K(() => G = tt(Y, 1, "nos-sheet", null, G, {
    "nos-sheet--dark": c(ae),
    "nos-sheet--nimble": c(X)
  })), O(e, Y), ke();
}
r(ul, "WhiteSheet");
const it = class it extends Qs(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = ul;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < it.MIN_WIDTH && (t.width = it.MIN_WIDTH), t.height !== void 0 && t.height < it.MIN_HEIGHT && (t.height = it.MIN_HEIGHT), super.setPosition(t);
  }
  async _prepareContext(t) {
    return { ...await super._prepareContext(t), actor: this._actor, sheet: this };
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
        const o = i, u = o.system?.parentClass, l = a.levels?.character ?? 0;
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
      s.push(i);
    }
    return s.length > 0 ? a.createEmbeddedDocuments("Item", s) : [];
  }
};
r(it, "WhiteCharacterSheet"), Fe(it, "MIN_WIDTH", 670), Fe(it, "MIN_HEIGHT", 400), Fe(it, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Wa = it;
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
