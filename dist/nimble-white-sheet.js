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
const pe = 2, ba = 4, Zn = 8, pr = 1 << 24, gt = 16, at = 32, Gt = 64, La = 128, Ke = 512, he = 1024, ye = 2048, nt = 4096, Pe = 8192, St = 16384, Ha = 32768, fn = 65536, qn = 1 << 17, yr = 1 << 18, mn = 1 << 19, Ci = 1 << 20, bt = 1 << 25, At = 32768, ma = 1 << 21, $n = 1 << 22, kt = 1 << 23, tn = /* @__PURE__ */ Symbol("$state"), Mi = /* @__PURE__ */ Symbol(""), wr = /* @__PURE__ */ Symbol("proxy path");
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
  var t = re;
  if (t === null)
    return Z.f |= kt, e;
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
function ve(e, t) {
  e.f = e.f & es | t;
}
r(ve, "set_signal_status");
function Pa(e) {
  (e.f & Ke) !== 0 || e.deps === null ? ve(e, he) : ve(e, nt);
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
  (e.f & ye) !== 0 ? t.add(e) : (e.f & nt) !== 0 && n.add(e), Mr(e.deps), ve(e, he);
}
r(Dr, "defer_effect");
const Fn = /* @__PURE__ */ new Set();
let se = null, pa = null, Xe = null, Te = [], na = null, ya = !1, xn = !1;
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
        ve(a, ye), Ze(a);
      for (a of n.m)
        ve(a, nt), Ze(a);
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
      b(this, an).clear(), b(this, Lt) === 0 && Ee(this, ft, Wr).call(this), pa = this, se = null, tr(a), tr(n), pa = null, b(this, An)?.resolve();
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
    se = this, this.apply();
  }
  deactivate() {
    se === this && (se = null, Xe = null);
  }
  flush() {
    if (this.activate(), Te.length > 0) {
      if (Or(), se !== null && se !== this)
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
      b(this, Ht).delete(t), ve(t, ye), Ze(t);
    for (const t of b(this, Ht))
      ve(t, nt), Ze(t);
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
    if (se === null) {
      const t = se = new Yn();
      Fn.add(se), xn || xt(() => {
        se === t && t.flush();
      });
    }
    return se;
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
  t.f ^= he;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, u = (o & (at | Gt)) !== 0, l = u && (o & he) !== 0, f = l || (o & Pe) !== 0 || b(this, _t).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= he : i !== null && (o & (ba | Zn | pr)) !== 0 ? i.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : Ln(s) && ((o & gt) !== 0 && b(this, Ht).add(s), In(s));
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
          se = i, i.apply();
          for (const d of Te)
            Ee(s = i, ft, wa).call(s, d, [], []);
          i.deactivate();
        }
        Te = a;
      }
    }
    se = null, Xe = t;
  }
  this.committed = !0, Fn.delete(this);
}, "#commit"), r(Yn, "Batch");
let Nt = Yn;
function ts(e) {
  var t = xn;
  xn = !0;
  try {
    for (var n; ; ) {
      if (Zi(), Te.length === 0 && (se?.flush(), Te.length === 0))
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
      ) : (i & ($n | gt)) !== 0 && (i & ye) === 0 && Hr(s, t, a) && (ve(s, ye), Ze(
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
    if (ya && t === re && (n & gt) !== 0 && (n & yr) === 0)
      return;
    if ((n & (Gt | at)) !== 0) {
      if ((n & he) === 0) return;
      t.f ^= he;
    }
  }
  Te.push(t);
}
r(Ze, "schedule_effect");
function Pr(e, t) {
  if (!((e.f & at) !== 0 && (e.f & he) !== 0)) {
    (e.f & ye) !== 0 ? t.d.push(e) : (e.f & nt) !== 0 && t.m.push(e), ve(e, he);
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
var ze, Oa, st, Pt, ot, Ue, Ne, lt, ht, yt, Rt, wt, ln, Ft, cn, un, ct, Jn, be, is, ss, ka, zn, Un, xa;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    B(this, be);
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
    re.b, this.is_pending = !!b(this, st).pending, q(this, ot, Ba(() => {
      re.b = this;
      {
        var s = Ee(this, be, ka).call(this);
        try {
          q(this, Ue, Be(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, wt) > 0 ? Ee(this, be, Un).call(this) : this.is_pending = !1;
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
    Ee(this, be, xa).call(this, t), q(this, Rt, b(this, Rt) + t), !(!b(this, ct) || b(this, ln)) && (q(this, ln, !0), xt(() => {
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
      }), this.is_pending = this.has_pending_snippet(), q(this, Ue, Ee(this, be, zn).call(this, () => (q(this, Ft, !1), Be(() => b(this, Pt).call(this, b(this, ze)))))), b(this, wt) > 0 ? Ee(this, be, Un).call(this) : this.is_pending = !1;
    }, "reset");
    xt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (u) {
        vn(u, b(this, ot) && b(this, ot).parent);
      }
      a && q(this, lt, Ee(this, be, zn).call(this, () => {
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
ze = new WeakMap(), Oa = new WeakMap(), st = new WeakMap(), Pt = new WeakMap(), ot = new WeakMap(), Ue = new WeakMap(), Ne = new WeakMap(), lt = new WeakMap(), ht = new WeakMap(), yt = new WeakMap(), Rt = new WeakMap(), wt = new WeakMap(), ln = new WeakMap(), Ft = new WeakMap(), cn = new WeakMap(), un = new WeakMap(), ct = new WeakMap(), Jn = new WeakMap(), be = new WeakSet(), is = /* @__PURE__ */ r(function() {
  try {
    q(this, Ue, Be(() => b(this, Pt).call(this, b(this, ze))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ss = /* @__PURE__ */ r(function() {
  const t = b(this, st).pending;
  t && (q(this, Ne, Be(() => t(b(this, ze)))), xt(() => {
    var n = Ee(this, be, ka).call(this);
    q(this, Ue, Ee(this, be, zn).call(this, () => (Nt.ensure(), Be(() => b(this, Pt).call(this, n))))), b(this, wt) > 0 ? Ee(this, be, Un).call(this) : (zt(
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
  var n = re, a = Z, s = ge;
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
    this.parent && Ee(n = this.parent, be, xa).call(n, t);
    return;
  }
  if (q(this, wt, b(this, wt) + t), b(this, wt) === 0) {
    this.is_pending = !1;
    for (const a of b(this, cn))
      ve(a, ye), Ze(a);
    for (const a of b(this, un))
      ve(a, nt), Ze(a);
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
  var o = se, u = (
    /** @type {Effect} */
    re
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
  var e = re, t = Z, n = ge, a = se;
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
  var t = pe | ye, n = Z !== null && (Z.f & pe) !== 0 ? (
    /** @type {Derived} */
    Z
  ) : null;
  return re !== null && (re.f |= mn), {
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
    parent: n ?? re,
    ac: null
  };
}
r(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function us(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    re
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
  var u = !Z, l = /* @__PURE__ */ new Map();
  return Ts(() => {
    var f = mr();
    i = f.promise;
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
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject(Zt), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ r((y, w = void 0) => {
      if (d.activate(), w)
        w !== Zt && (o.f |= kt, hn(o, w));
      else {
        (o.f & kt) !== 0 && (o.f ^= kt), hn(o, y);
        for (const [I, p] of l) {
          if (l.delete(I), I === d) break;
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
  var t, n = re;
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
  if (!e.equals(t) && (e.wv = ai(), (!se?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ve(e, he);
    return;
  }
  Vt || (Xe !== null ? (Ua() || se?.is_fork) && Xe.set(e, t) : Pa(e));
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
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || (Z.f & qn) !== 0) && Tr() && (Z.f & (pe | gt | $n | qn)) !== 0 && (Ve === null || !Bt.call(Ve, e)) && Ui();
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
      if (re !== null) {
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
      re !== null && (e.set_during_effect = !0);
    }
    if ((e.f & pe) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ye) !== 0 && Fa(s), Pa(s);
    }
    e.wv = ai(), zr(e, ye), re !== null && (re.f & he) !== 0 && (re.f & (at | Gt)) === 0 && (je === null ? As([e]) : je.push(e)), !a.is_fork && _n.size > 0 && !ja && jr();
  }
  return t;
}
r(hn, "internal_set");
function jr() {
  ja = !1;
  for (const e of _n)
    (e.f & he) !== 0 && ve(e, nt), Ln(e) && In(e);
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
      if (u && ve(i, t), (o & pe) !== 0) {
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
    var v = Z, _ = Ut;
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
          var I = c(y);
          return I === me ? void 0 : I;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var y = n.get(v);
          y && (_.value = c(y));
        } else if (_ === void 0) {
          var w = n.get(v), I = w?.v;
          if (w !== void 0 && I !== me)
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
        if (v === tn)
          return !0;
        var _ = n.get(v), y = _ !== void 0 && _.v !== me || Reflect.has(d, v);
        if (_ !== void 0 || re !== null && (!y || en(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var I = y ? $t(d[v]) : me, p = /* @__PURE__ */ Le(I);
            return C && rt(p, Dt(u, v)), p;
          }), n.set(v, _));
          var w = c(_);
          if (w === me)
            return !1;
        }
        return y;
      },
      set(d, v, _, y) {
        var w = n.get(v), I = v in d;
        if (a && v === "length")
          for (var p = _; p < /** @type {Source<number>} */
          w.v; p += 1) {
            var W = n.get(p + "");
            W !== void 0 ? He(W, me) : p in d && (W = o(() => /* @__PURE__ */ Le(me)), n.set(p + "", W), C && rt(W, Dt(u, p)));
          }
        if (w === void 0)
          (!I || en(d, v)?.writable) && (w = o(() => /* @__PURE__ */ Le(void 0)), C && rt(w, Dt(u, v)), He(w, $t(_)), n.set(v, w));
        else {
          I = w.v !== me;
          var le = o(() => $t(_));
          He(w, le);
        }
        var E = Reflect.getOwnPropertyDescriptor(d, v);
        if (E?.set && E.set.call(y, _), !I) {
          if (a && typeof v == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), H = Number(v);
            Number.isInteger(H) && H >= M.v && He(M, H + 1);
          }
          Nn(s);
        }
        return !0;
      },
      ownKeys(d) {
        c(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var I = n.get(w);
          return I === void 0 || I.v !== me;
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
  var t = Z, n = re;
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
  re === null && (Z === null && Pi(e), Hi()), Vt && Li(e);
}
r(Ss, "validate_effect");
function ks(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(ks, "push_effect");
function Ct(e, t, n) {
  var a = re;
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
  (i.f & mn) === 0 && (i = i.first, (e & gt) !== 0 && (e & fn) !== 0 && i !== null && (i.f |= fn)), i !== null && (i.parent = a, a !== null && ks(i, a), Z !== null && (Z.f & pe) !== 0 && (e & Gt) === 0)) {
    var o = (
      /** @type {Derived} */
      Z
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Ct, "create_effect");
function Ua() {
  return Z !== null && !$e;
}
r(Ua, "effect_tracking");
function Kr(e) {
  const t = Ct(Zn, null, !1);
  return ve(t, he), t.teardown = e, t;
}
r(Kr, "teardown");
function xs(e) {
  Ss("$effect"), C && qt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    re.f
  ), n = !Z && (t & at) !== 0 && (t & Ha) === 0;
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
    const n = Vt, a = Z;
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
  ), n = !0), Jr(e, t && !n), Vn(e, 0), ve(e, St);
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
    e.f ^= Pe, (e.f & he) === 0 && (ve(e, ye), Ze(e));
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
let Z = null, $e = !1;
function Ge(e) {
  Z = e;
}
r(Ge, "set_active_reaction");
let re = null;
function et(e) {
  re = e;
}
r(et, "set_active_effect");
let Ve = null;
function ti(e) {
  Z !== null && (Ve === null ? Ve = [e] : Ve.push(e));
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
    Xe === null && ve(e, he);
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
      ) : t === i && (n ? ve(i, ye) : (i.f & he) !== 0 && ve(i, nt), Ze(
        /** @type {Effect} */
        i
      ));
    }
}
r(ri, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Ie, n = We, a = je, s = Z, i = Ve, o = ge, u = $e, l = Ut, f = e.f;
  Ie = /** @type {null | Value[]} */
  null, We = 0, je = null, Z = (f & (at | Gt)) === 0 ? e : null, Ve = null, dn(e.ctx), $e = !1, Ut = ++Ot, e.ac !== null && (aa(() => {
    e.ac.abort(Zt);
  }), e.ac = null);
  try {
    e.f |= ma;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, y = se?.is_fork;
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
        for (let I = 0; I < n; I += 1)
          s.deps[I].rv = Ot;
      if (t !== null)
        for (const I of t)
          I.rv = Ot;
      je !== null && (a === null ? a = je : a.push(.../** @type {Source[]} */
      je));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), v;
  } catch (I) {
    return Ar(I);
  } finally {
    e.f ^= ma, Ie = t, We = n, je = a, Z = s, Ve = i, dn(o), $e = u, Ut = l;
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
    ve(e, he);
    var n = re, a = Bn;
    if (re = e, Bn = !0, C) {
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
      Bn = a, re = n, C && (er(s), Kn(i));
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
  if (Z !== null && !$e) {
    var a = re !== null && (re.f & St) !== 0;
    if (!a && (Ve === null || !Bt.call(Ve, e))) {
      var s = Z.deps;
      if ((Z.f & ma) !== 0)
        e.rv < Ot && (e.rv = Ot, Ie === null && s !== null && s[We] === e ? We++ : Ie === null ? Ie = [e] : Ie.push(e));
      else {
        (Z.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Z] : Bt.call(i, Z) || i.push(Z);
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
      return ((o.f & he) === 0 && o.reactions !== null || si(o)) && (u = Fa(o)), Tt.set(o, u), u;
    }
    var l = (o.f & Ke) === 0 && !$e && Z !== null && (Bn || (Z.f & Ke) !== 0), f = o.deps === null;
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
    var d = Z, v = re;
    Ge(null), et(null);
    try {
      for (var _, y = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var I = i["__" + a];
          I != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && I.call(i, e);
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
    re
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Gn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function L(e, t) {
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
r(L, "from_html");
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
        var I = Qt.get(y);
        I === void 0 ? (document.addEventListener(y, Sn, { passive: w }), Qt.set(y, 1)) : Qt.set(y, I + 1);
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
        se
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
      se
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
function $(e, t, n = !1) {
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
r($, "if_block");
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
  var I = Ba(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var W = _.length, le = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      se
    ), M = qr(), H = 0; H < W; H += 1) {
      var N = _[H], g = a(N, H), k = y ? null : u.get(g);
      k ? (k.v && hn(k.v, N), k.i && hn(k.i, H), M && E.unskip_effect(k.e)) : (k = js(
        u,
        y ? o : lr ??= It(),
        N,
        g,
        H,
        s,
        t,
        n
      ), y || (k.e.f |= bt), u.set(g, k)), le.add(g);
    }
    if (W === 0 && i && !d && (y ? d = Be(() => i(o)) : (d = Be(() => i(lr ??= It())), d.f |= bt)), W > le.size && (C ? zs(_, a) : Er("", "", "")), !y)
      if (M) {
        for (const [T, R] of u)
          le.has(T) || E.skip_effect(R.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    c(v);
  }), p = { effect: I, items: u, outrogroups: null, fallback: d };
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
  var i = (a & 8) !== 0, o = t.length, u = e.items, l = En(e.effect.first), f, d = null, v, _ = [], y = [], w, I, p, W;
  if (i)
    for (W = 0; W < o; W += 1)
      w = t[W], I = s(w, W), p = /** @type {EachItem} */
      u.get(I).e, (p.f & bt) === 0 && (p.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(p));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], I = s(w, W), p = /** @type {EachItem} */
    u.get(I).e, e.outrogroups !== null)
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
    if ((p.f & Pe) !== 0 && (qa(p), i && (p.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (f !== void 0 && f.has(p)) {
        if (_.length < y.length) {
          var E = y[0], M;
          d = E.prev;
          var H = _[0], N = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            kn(_[M], E, n);
          for (M = 0; M < y.length; M += 1)
            f.delete(y[M]);
          pt(e, H.prev, N.next), pt(e, d, H), pt(e, N, E), l = E, d = N, W -= 1, _ = [], y = [];
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
    var g = [];
    if (f !== void 0)
      for (p of f)
        (p.f & Pe) === 0 && g.push(p);
    for (; l !== null; )
      (l.f & Pe) === 0 && l !== e.fallback && g.push(l), l = En(l.next);
    var k = g.length;
    if (k > 0) {
      var T = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < k; W += 1)
          g[W].nodes?.a?.measure();
        for (W = 0; W < k; W += 1)
          g[W].nodes?.a?.fix();
      }
      Rs(e, g, T);
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
      re
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
function A(e, t, n, a) {
  var s = fi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Mi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(A, "set_attribute");
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
    if (i = _a(e) ? ha(i) : i, n(i), se !== null && a.add(se), await Ms(), i !== (i = t())) {
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
  oi(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), se !== null && a.add(se)), Gr(() => {
    C && e.type === "checkbox" && $a();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        pa ?? se
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
function x(e) {
  return game.i18n?.localize(e) ?? e;
}
r(x, "localize");
function bn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(bn, "format");
var Zs = /* @__PURE__ */ L("<span> </span>"), $s = /* @__PURE__ */ L('<span style="color: var(--nos-text-secondary, #888)">—</span>'), eo = /* @__PURE__ */ L('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function to(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((T) => t.actor.update({ img: T }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ F(() => {
    const T = Object.keys(t.hitDiceData.bySize);
    return T.length === 0 ? "—" : T.length === 1 ? `d${T[0]}` : T.map((R) => `d${R}`).join("/");
  });
  var i = eo(), o = h(i);
  o.__click = a;
  var u = h(o), l = m(o, 2), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: T }) => t.actor.update({ name: T.value });
  var _ = m(l, 2), y = h(_), w = h(y), I = m(y, 2), p = h(I);
  {
    var W = /* @__PURE__ */ r((T) => {
      var R = Zs(), V = h(R);
      K(() => D(V, t.metaData)), O(T, R);
    }, "consequent"), le = /* @__PURE__ */ r((T) => {
      var R = $s();
      O(T, R);
    }, "alternate");
    $(p, (T) => {
      t.metaData ? T(W) : T(le, !1);
    });
  }
  var E = m(p, 2);
  E.__click = () => t.actor.editMetadata();
  var M = m(_, 2), H = h(M), N = h(H), g = m(H, 2), k = h(g);
  K(
    (T, R, V, j, P) => {
      A(u, "src", c(n)), A(u, "alt", t.actor.reactive.name), D(d, T), qe(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, D(w, R), A(E, "aria-label", V), A(E, "data-tooltip", j), E.disabled = !t.editingEnabled, D(N, P), D(k, c(s));
    },
    [
      () => x("NWS.CharacterName"),
      () => x("NWS.AncestryClassLevel"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.HitDie")
    ]
  ), O(e, i), ke();
}
r(to, "HeaderRow");
Ce(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ka, "formatModifier");
var no = /* @__PURE__ */ L('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ao(e, t) {
  Se(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ F(() => x(n[t.abilityKey])), s = /* @__PURE__ */ F(() => bn("NWS.RollCheck", { name: c(a) })), i = /* @__PURE__ */ F(() => bn("NWS.RollSave", { name: c(a) }));
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
      }), A(u, "data-tooltip", c(i)), A(u, "aria-label", c(i)), A(f, "data-tooltip", c(s)), A(f, "aria-label", c(s)), D(v, w), D(y, c(a));
    },
    [() => Ka(t.ability.mod)]
  ), O(e, o), ke();
}
r(ao, "AbilityBox");
Ce(["click"]);
var ro = /* @__PURE__ */ L('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), io = /* @__PURE__ */ L('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  Se(t, !0);
  var n = io(), a = h(n), s = h(a), i = m(a, 2);
  Je(i, 21, () => ({ length: t.wounds.max }), Ye, (o, u, l) => {
    var f = ro();
    let d;
    f.__click = () => t.toggleWounds(l + 1), K(
      (v, _) => {
        d = tt(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), A(f, "data-tooltip", v), A(f, "aria-label", _);
      },
      [
        () => bn("NWS.ToggleWound", { n: l + 1 }),
        () => bn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), K((o) => D(s, o), [() => x("NWS.Wounds")]), O(e, n), ke();
}
r(so, "WoundTracker");
Ce(["click"]);
var oo = /* @__PURE__ */ L('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ L('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ L('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ L('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function fo(e, t) {
  Se(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.movement);
  var l = uo(), f = h(l), d = h(f);
  Je(d, 17, () => n, Ye, (ue, Re) => {
    ao(ue, {
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
    var _ = /* @__PURE__ */ r((ue) => {
      var Re = oo(), wn = mt(Re);
      wn.__click = () => t.actor.configureSavingThrows();
      var Pn = m(wn, 2);
      Pn.__click = () => t.actor.configureAbilityScores(), K(
        (sa, oa) => {
          A(wn, "data-tooltip", sa), A(Pn, "data-tooltip", oa);
        },
        [
          () => x("NWS.ConfigureSavingThrows"),
          () => x("NWS.ConfigureAbilityScores")
        ]
      ), O(ue, Re);
    }, "consequent");
    $(v, (ue) => {
      t.editingEnabled && ue(_);
    });
  }
  var y = m(f, 2), w = h(y), I = h(w), p = h(I), W = m(h(p), 2), le = h(W), E = m(W, 2), M = h(E), H = m(p, 2), N = m(h(H), 2), g = h(N), k = m(N, 2);
  k.__change = ({ target: ue }) => t.updateTempHP(Number(ue.value));
  var T = m(I, 2);
  let R;
  var V = h(T), j = h(V), P = h(j);
  {
    var J = /* @__PURE__ */ r((ue) => {
      var Re = lo();
      O(ue, Re);
    }, "consequent_1"), z = /* @__PURE__ */ r((ue) => {
      var Re = co();
      O(ue, Re);
    }, "alternate");
    $(P, (ue) => {
      t.isBloodied ? ue(J) : ue(z, !1);
    });
  }
  var ee = m(j, 2), te = h(ee), oe = m(ee, 2), G = h(oe);
  G.__change = ({ target: ue }) => t.updateCurrentHP(Number(ue.value));
  var Q = m(G, 4);
  Q.__change = ({ target: ue }) => t.updateMaxHP(Number(ue.value));
  var ie = m(oe, 2);
  ie.__click = () => t.actor.configureHitPoints();
  var fe = m(V, 2), ne = h(fe), we = h(ne), ae = m(ne, 2), S = h(ae), U = m(ae, 2), Y = h(U);
  Y.__change = ({ target: ue }) => t.updateCurrentMana(Number(ue.value));
  var ce = m(Y, 4);
  ce.__change = ({ target: ue }) => t.updateMaxMana(Number(ue.value));
  var X = m(T, 2);
  X.__click = () => t.rollHitDice();
  var _e = m(h(X), 2), gn = h(_e), Mt = m(_e, 2), Yt = h(Mt), de = m(Mt, 2);
  de.__click = (ue) => {
    ue.stopPropagation(), t.actor.configureHitDice();
  };
  var xe = m(X, 2), Me = h(xe);
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
    (ue, Re, wn, Pn, sa, oa, bi, mi, gi, pi, yi, wi) => {
      D(le, ue), D(M, c(i).value), D(g, Re), qe(k, c(s).temp ?? 0), R = tt(T, 1, "nos-combat__pair", null, R, { "nos-hp--bloodied": t.isBloodied }), D(te, wn), qe(G, c(s).value), qe(Q, c(s).max), Q.disabled = !t.editingEnabled, A(ie, "data-tooltip", Pn), ie.disabled = !t.editingEnabled, jn(we, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), jn(ae, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(S, sa), qe(Y, t.mana?.current ?? 0), jn(Y, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), qe(ce, t.mana?.max || t.mana?.baseMax || 0), ce.disabled = !t.editingEnabled, jn(ce, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(gn, oa), D(Yt, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), A(de, "data-tooltip", bi), de.disabled = !t.editingEnabled, A(Me, "data-tooltip", mi), D(Jt, gi), D(yn, pi), D(vi, yi), D(_i, c(u).walk), A(ia, "data-tooltip", wi), ia.disabled = !t.editingEnabled;
    },
    [
      () => x("NWS.Armor"),
      () => x("NWS.TempHP"),
      () => x("NWS.HitPoints"),
      () => x("NWS.ConfigureHitPoints"),
      () => x("NWS.Mana"),
      () => x("NWS.HitDice"),
      () => x("NWS.ConfigureHitDice"),
      () => x("NWS.RollInitiative"),
      () => x("NWS.Initiative"),
      () => Ka(c(o).mod),
      () => x("NWS.Speed"),
      () => x("NWS.ConfigureMovement")
    ]
  ), O(e, l), ke();
}
r(fo, "StatsRow");
Ce(["click", "change"]);
var vo = /* @__PURE__ */ L('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  Se(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ F(() => n[t.skillKey]), o = /* @__PURE__ */ F(() => x(a[c(i)])), u = /* @__PURE__ */ F(() => x(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = m(f, 2), _ = h(v), y = m(v, 2), w = h(y);
  K(
    (I, p) => {
      A(l, "data-tooltip", I), D(d, c(o)), D(_, p), D(w, c(u));
    },
    [
      () => bn("NWS.RollSkill", { name: c(u) }),
      () => Ka(t.skill.mod)
    ]
  ), O(e, l), ke();
}
r(_o, "SkillCell");
Ce(["click"]);
var ho = /* @__PURE__ */ L('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), bo = /* @__PURE__ */ L('<section class="nos-skills-row"><!> <!></section>');
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
      l.__click = () => t.actor.configureSkills(), K((f) => A(l, "data-tooltip", f), [() => x("NWS.ConfigureSkills")]), O(u, l);
    }, "consequent");
    $(i, (u) => {
      t.editingEnabled && u(o);
    });
  }
  O(e, a), ke();
}
r(mo, "SkillsRow");
Ce(["click"]);
var go = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ L('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ L('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ L('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ L('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ L('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ L('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ L('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Co = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Mo = /* @__PURE__ */ L('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Do = /* @__PURE__ */ L('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ L('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ L("<!> <!> <!> <!> <!>", 1);
function fr(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), i = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), u = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
  function l(g) {
    t.actor.activateItem(g);
  }
  r(l, "useItem");
  function f(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(f, "configureItem");
  function d(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(d, "deleteItem");
  function v(g, k) {
    const T = { type: "Item", uuid: k.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(T));
  }
  r(v, "onDragStart");
  var _ = Oo(), y = mt(_);
  {
    var w = /* @__PURE__ */ r((g) => {
      var k = Eo(), T = h(k);
      {
        var R = /* @__PURE__ */ r((P) => {
          var J = po(), z = h(J), ee = h(z), te = m(z, 2), oe = h(te), G = m(oe, 2);
          G.__click = () => f(c(s).id);
          var Q = h(G), ie = m(G, 2);
          {
            var fe = /* @__PURE__ */ r((ne) => {
              var we = go(), ae = h(we);
              ae.__click = () => f(c(s).id);
              var S = m(ae, 2);
              S.__click = () => d(c(s).id), O(ne, we);
            }, "consequent");
            $(ie, (ne) => {
              t.editingEnabled && ne(fe);
            });
          }
          K(
            (ne) => {
              D(ee, ne), A(oe, "src", c(s).img), A(oe, "alt", c(s).name), D(Q, c(s).name);
            },
            [() => x("NWS.Ancestry")]
          ), vt("dragstart", te, (ne) => v(ne, c(s))), O(P, J);
        }, "consequent_1");
        $(T, (P) => {
          c(s) && P(R);
        });
      }
      var V = m(T, 2);
      {
        var j = /* @__PURE__ */ r((P) => {
          var J = wo(), z = h(J), ee = h(z), te = m(z, 2), oe = h(te), G = m(oe, 2);
          G.__click = () => f(c(i).id);
          var Q = h(G), ie = m(G, 2);
          {
            var fe = /* @__PURE__ */ r((ne) => {
              var we = yo(), ae = h(we);
              ae.__click = () => f(c(i).id);
              var S = m(ae, 2);
              S.__click = () => d(c(i).id), O(ne, we);
            }, "consequent_2");
            $(ie, (ne) => {
              t.editingEnabled && ne(fe);
            });
          }
          K(
            (ne) => {
              D(ee, ne), A(oe, "src", c(i).img), A(oe, "alt", c(i).name), D(Q, c(i).name);
            },
            [() => x("NWS.Background")]
          ), vt("dragstart", te, (ne) => v(ne, c(i))), O(P, J);
        }, "consequent_3");
        $(V, (P) => {
          c(i) && P(j);
        });
      }
      O(g, k);
    }, "consequent_4");
    $(y, (g) => {
      (c(s) || c(i)) && g(w);
    });
  }
  var I = m(y, 2);
  {
    var p = /* @__PURE__ */ r((g) => {
      var k = No(), T = h(k), R = h(T), V = m(T, 2), j = h(V), P = m(j, 2);
      P.__click = () => f(c(o).id);
      var J = h(P), z = m(P, 2);
      {
        var ee = /* @__PURE__ */ r((G) => {
          var Q = So(), ie = h(Q);
          ie.__click = () => f(c(o).id);
          var fe = m(ie, 2);
          fe.__click = () => d(c(o).id), O(G, Q);
        }, "consequent_5");
        $(z, (G) => {
          t.editingEnabled && G(ee);
        });
      }
      var te = m(V, 2);
      {
        var oe = /* @__PURE__ */ r((G) => {
          var Q = xo(), ie = h(Q), fe = m(ie, 2);
          fe.__click = () => f(c(u).id);
          var ne = h(fe), we = m(fe, 2);
          {
            var ae = /* @__PURE__ */ r((S) => {
              var U = ko(), Y = h(U);
              Y.__click = () => f(c(u).id);
              var ce = m(Y, 2);
              ce.__click = () => d(c(u).id), O(S, U);
            }, "consequent_6");
            $(we, (S) => {
              t.editingEnabled && S(ae);
            });
          }
          K(() => {
            A(ie, "src", c(u).img), A(ie, "alt", c(u).name), D(ne, c(u).name);
          }), vt("dragstart", Q, (S) => v(S, c(u))), O(G, Q);
        }, "consequent_7");
        $(te, (G) => {
          c(u) && G(oe);
        });
      }
      K(
        (G, Q) => {
          D(R, G), A(j, "src", c(o).img), A(j, "alt", c(o).name), D(J, `${c(o).name ?? ""} (${Q ?? ""} ${c(o).system.classLevel ?? ""})`);
        },
        [() => x("NWS.Class"), () => x("NWS.Level")]
      ), vt("dragstart", V, (G) => v(G, c(o))), O(g, k);
    }, "consequent_8");
    $(I, (g) => {
      c(o) && g(p);
    });
  }
  var W = m(I, 2);
  {
    var le = /* @__PURE__ */ r((g) => {
      var k = Ao(), T = h(k), R = h(T), V = m(T, 2);
      Je(V, 21, () => c(n), Ye, (j, P) => {
        var J = Io(), z = h(J), ee = m(z, 2);
        ee.__click = () => l(c(P).id);
        var te = h(ee), oe = m(ee, 2);
        {
          var G = /* @__PURE__ */ r((Q) => {
            var ie = To(), fe = h(ie);
            fe.__click = () => f(c(P).id);
            var ne = m(fe, 2);
            ne.__click = () => d(c(P).id), O(Q, ie);
          }, "consequent_9");
          $(oe, (Q) => {
            t.editingEnabled && Q(G);
          });
        }
        K(() => {
          A(z, "src", c(P).img), A(z, "alt", c(P).name), D(te, c(P).name);
        }), vt("dragstart", J, (Q) => v(Q, c(P))), O(j, J);
      }), K((j) => D(R, j), [() => x("NWS.Features")]), O(g, k);
    }, "consequent_10");
    $(W, (g) => {
      c(n).length > 0 && g(le);
    });
  }
  var E = m(W, 2);
  {
    var M = /* @__PURE__ */ r((g) => {
      var k = Do(), T = h(k), R = h(T), V = m(T, 2);
      Je(V, 21, () => c(a), Ye, (j, P) => {
        var J = Mo(), z = h(J), ee = m(z, 2);
        ee.__click = () => l(c(P).id);
        var te = h(ee), oe = m(ee, 2);
        {
          var G = /* @__PURE__ */ r((Q) => {
            var ie = Co(), fe = h(ie);
            fe.__click = () => f(c(P).id);
            var ne = m(fe, 2);
            ne.__click = () => d(c(P).id), O(Q, ie);
          }, "consequent_11");
          $(oe, (Q) => {
            t.editingEnabled && Q(G);
          });
        }
        K(() => {
          A(z, "src", c(P).img), A(z, "alt", c(P).name), D(te, c(P).name);
        }), vt("dragstart", J, (Q) => v(Q, c(P))), O(j, J);
      }), K((j) => D(R, j), [() => x("NWS.Boons")]), O(g, k);
    }, "consequent_12");
    $(E, (g) => {
      c(a).length > 0 && g(M);
    });
  }
  var H = m(E, 2);
  {
    var N = /* @__PURE__ */ r((g) => {
      var k = Wo(), T = h(k);
      K((R) => D(T, R), [() => x("NWS.DropFeaturesHere")]), O(g, k);
    }, "consequent_13");
    $(H, (g) => {
      !c(s) && !c(i) && !c(o) && c(n).length === 0 && c(a).length === 0 && g(N);
    });
  }
  O(e, _), ke();
}
r(fr, "FeaturesTab");
Ce(["click"]);
var Lo = /* @__PURE__ */ L('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ho = /* @__PURE__ */ L('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Po = /* @__PURE__ */ L('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ro = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ L('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ L('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ L('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ L('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function dr(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, M) => (E.sort ?? 0) - (M.sort ?? 0))), s = /* @__PURE__ */ F(() => c(n) ? c(a).filter((E) => E.name.toLowerCase().includes(c(n).toLowerCase())) : c(a)), i = /* @__PURE__ */ F(() => {
    const E = {};
    for (const M of c(s)) {
      const H = M.system?.tier ?? 0, N = M.system?.isUtility ?? !1, g = N ? "_utility" : `_tier_${H}`, k = N ? x("NWS.Utility") : bn("NWS.Tier", { n: H });
      E[g] ??= { label: k, spells: [] }, E[g].spells.push(M);
    }
    return Object.entries(E).sort(([M], [H]) => {
      if (M === "_utility") return 1;
      if (H === "_utility") return -1;
      const N = parseInt(M.replace("_tier_", "")), g = parseInt(H.replace("_tier_", ""));
      return N - g;
    });
  });
  function o(E) {
    t.actor.items.get(E)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function u(E) {
    t.actor.deleteEmbeddedDocuments("Item", [E]);
  }
  r(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  r(l, "createSpell");
  function f(E) {
    t.actor.activateItem(E);
  }
  r(f, "castSpell");
  function d(E, M) {
    const H = { type: "Item", uuid: M.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(H));
  }
  r(d, "onDragStart");
  var v = Uo(), _ = mt(v), y = m(h(_), 2), w = m(y, 2);
  {
    var I = /* @__PURE__ */ r((E) => {
      var M = Lo();
      M.__click = l;
      var H = m(h(M));
      K((N) => D(H, ` ${N ?? ""}`), [() => x("NWS.New")]), O(E, M);
    }, "consequent");
    $(w, (E) => {
      t.editingEnabled && E(I);
    });
  }
  var p = m(_, 2);
  Je(p, 17, () => c(i), Ye, (E, M) => {
    var H = /* @__PURE__ */ F(() => gr(c(M), 2));
    let N = /* @__PURE__ */ r(() => c(H)[1], "tier");
    var g = jo(), k = h(g), T = h(k), R = m(k, 2);
    Je(R, 21, () => N().spells, Ye, (V, j) => {
      var P = Fo(), J = h(P), z = m(J, 2);
      z.__click = () => f(c(j).id);
      var ee = h(z), te = m(ee);
      {
        var oe = /* @__PURE__ */ r((ae) => {
          var S = Ho();
          K((U) => A(S, "data-tooltip", U), [() => x("NWS.Concentration")]), O(ae, S);
        }, "consequent_1");
        $(te, (ae) => {
          c(j).system?.concentration && ae(oe);
        });
      }
      var G = m(te, 2);
      {
        var Q = /* @__PURE__ */ r((ae) => {
          var S = Po();
          K((U) => A(S, "data-tooltip", U), [() => x("NWS.Utility")]), O(ae, S);
        }, "consequent_2");
        $(G, (ae) => {
          c(j).system?.isUtility && ae(Q);
        });
      }
      var ie = m(z, 2), fe = h(ie), ne = m(ie, 2);
      {
        var we = /* @__PURE__ */ r((ae) => {
          var S = Ro(), U = h(S);
          U.__click = () => o(c(j).id);
          var Y = m(U, 2);
          Y.__click = () => u(c(j).id), O(ae, S);
        }, "consequent_3");
        $(ne, (ae) => {
          t.editingEnabled && ae(we);
        });
      }
      K(() => {
        A(J, "src", c(j).img), A(J, "alt", c(j).name), D(ee, `${c(j).name ?? ""} `), D(fe, c(j).system?.activationCost ?? "");
      }), vt("dragstart", P, (ae) => d(ae, c(j))), O(V, P);
    }), K(() => D(T, N().label)), O(E, g);
  });
  var W = m(p, 2);
  {
    var le = /* @__PURE__ */ r((E) => {
      var M = zo(), H = h(M);
      K((N) => D(H, N), [() => x("NWS.DropSpellsHere")]), O(E, M);
    }, "consequent_4");
    $(W, (E) => {
      c(a).length === 0 && E(le);
    });
  }
  K((E) => A(y, "placeholder", E), [() => x("NWS.SearchSpells")]), di(y, () => c(n), (E) => He(n, E)), O(e, v), ke();
}
r(dr, "SpellsTab");
Ce(["click"]);
var Bo = /* @__PURE__ */ L('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), qo = /* @__PURE__ */ L('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ko = /* @__PURE__ */ L('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vo = /* @__PURE__ */ L('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Go = /* @__PURE__ */ L('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Yo = /* @__PURE__ */ L('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function vr(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ F(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((N) => N.type === "object").sort((N, g) => (N.sort ?? 0) - (g.sort ?? 0))), i = /* @__PURE__ */ F(() => c(n) ? c(s).filter((N) => N.name.toLowerCase().includes(c(n).toLowerCase())) : c(s));
  function o(N) {
    t.actor.items.get(N)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function u(N) {
    t.actor.deleteEmbeddedDocuments("Item", [N]);
  }
  r(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(l, "createObject");
  function f(N, g) {
    t.actor.update({
      [`system.currency.${N}.value`]: Math.max(0, Math.round(Number(g)))
    });
  }
  r(f, "updateCurrency");
  function d(N, g) {
    const k = c(a)[N]?.value ?? 0;
    t.actor.update({
      [`system.currency.${N}.value`]: Math.max(0, k + g)
    });
  }
  r(d, "adjustCurrency");
  function v(N, g) {
    t.actor.items.get(N)?.update({ "system.quantity": Number(g) });
  }
  r(v, "updateQuantity");
  function _(N, g) {
    const k = { type: "Item", uuid: g.uuid };
    N.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  r(_, "onDragStart");
  var y = Yo(), w = mt(y);
  Je(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ye, (N, g) => {
    var k = /* @__PURE__ */ F(() => gr(g, 2));
    let T = /* @__PURE__ */ r(() => c(k)[0], "type"), R = /* @__PURE__ */ r(() => c(k)[1], "labelKey");
    var V = Bo(), j = h(V), P = h(j), J = m(j, 2);
    J.__click = () => d(T(), -1);
    var z = m(J, 2);
    z.__change = ({ target: te }) => f(T(), te.value);
    var ee = m(z, 2);
    ee.__click = () => d(T(), 1), K(
      (te, oe, G) => {
        A(j, "for", `currency-${T() ?? ""}`), D(P, te), A(J, "aria-label", `-1 ${oe ?? ""}`), A(z, "id", `currency-${T() ?? ""}`), qe(z, c(a)[T()]?.value ?? 0), A(ee, "aria-label", `+1 ${G ?? ""}`);
      },
      [
        () => x(R()),
        () => x(R()),
        () => x(R())
      ]
    ), O(N, V);
  });
  var I = m(w, 2), p = m(h(I), 2), W = m(p, 2);
  {
    var le = /* @__PURE__ */ r((N) => {
      var g = qo();
      g.__click = l;
      var k = m(h(g));
      K((T) => D(k, ` ${T ?? ""}`), [() => x("NWS.New")]), O(N, g);
    }, "consequent");
    $(W, (N) => {
      t.editingEnabled && N(le);
    });
  }
  var E = m(I, 2);
  Je(E, 21, () => c(i), Ye, (N, g) => {
    var k = Vo(), T = h(k), R = m(T, 2);
    R.__click = () => o(c(g).id);
    var V = h(R), j = m(R, 2);
    j.__change = ({ target: z }) => v(c(g).id, z.value);
    var P = m(j, 2);
    {
      var J = /* @__PURE__ */ r((z) => {
        var ee = Ko(), te = h(ee);
        te.__click = () => o(c(g).id);
        var oe = m(te, 2);
        oe.__click = () => u(c(g).id), O(z, ee);
      }, "consequent_1");
      $(P, (z) => {
        t.editingEnabled && z(J);
      });
    }
    K(() => {
      A(T, "src", c(g).img), A(T, "alt", c(g).name), D(V, c(g).name), qe(j, c(g).system?.quantity ?? 1);
    }), vt("dragstart", k, (z) => _(z, c(g))), O(N, k);
  });
  var M = m(E, 2);
  {
    var H = /* @__PURE__ */ r((N) => {
      var g = Go(), k = h(g);
      K((T) => D(k, T), [() => x("NWS.DropInventoryHere")]), O(N, g);
    }, "consequent_2");
    $(M, (N) => {
      c(s).length === 0 && N(H);
    });
  }
  K((N) => A(p, "placeholder", N), [() => x("NWS.SearchItems")]), di(p, () => c(n), (N) => He(n, N)), O(e, y), ke();
}
r(vr, "InventoryTab");
Ce(["click", "change"]);
var Jo = /* @__PURE__ */ L(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
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
  v.__change = ({ target: _e }) => t.actor.update({ "system.details.age": _e.value });
  var _ = m(l, 2), y = h(_), w = h(y), I = m(y, 2);
  I.__change = ({ target: _e }) => t.actor.update({ "system.details.gender": _e.value });
  var p = m(_, 2), W = h(p), le = h(W), E = m(W, 2);
  E.__change = ({ target: _e }) => t.actor.update({ "system.details.height": _e.value });
  var M = m(p, 2), H = h(M), N = h(H), g = m(H, 2);
  g.__change = ({ target: _e }) => t.actor.update({ "system.details.weight": _e.value });
  var k = m(M, 2), T = h(k), R = h(T), V = m(T, 2), j = h(V), P = m(V, 2);
  P.__click = () => t.actor.configureLanguageProficiencies();
  var J = m(k, 2), z = h(J), ee = h(z), te = m(z, 2), oe = h(te), G = m(te, 2);
  G.__click = () => t.actor.configureArmorProficiencies();
  var Q = m(J, 2), ie = h(Q), fe = h(ie), ne = m(ie, 2), we = h(ne), ae = m(ne, 2);
  ae.__click = () => t.actor.configureWeaponProficiencies();
  var S = m(Q, 2), U = h(S), Y = h(U), ce = m(U, 2), X = h(ce);
  Us(X, () => c(n).notes ?? ""), K(
    (_e, gn, Mt, Yt, de, xe, Me, De, Jt, pn, yn, ra, Hn) => {
      D(d, _e), qe(v, c(n).age ?? ""), v.disabled = !t.editingEnabled, D(w, gn), qe(I, c(n).gender ?? ""), I.disabled = !t.editingEnabled, D(le, Mt), qe(E, c(n).height ?? ""), A(E, "placeholder", Yt), E.disabled = !t.editingEnabled, D(N, de), qe(g, c(n).weight ?? ""), A(g, "placeholder", xe), g.disabled = !t.editingEnabled, D(R, Me), D(j, c(s) || "—"), A(P, "data-tooltip", De), P.disabled = !t.editingEnabled, D(ee, Jt), D(oe, c(i) || "—"), A(G, "data-tooltip", pn), G.disabled = !t.editingEnabled, D(fe, yn), D(we, c(o) || "—"), A(ae, "data-tooltip", ra), ae.disabled = !t.editingEnabled, D(Y, Hn), A(ce, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), vt("blur", ce, ({ target: _e }) => t.actor.update({ "system.details.notes": _e.innerHTML })), O(e, u), ke();
}
r(_r, "BioTab");
Ce(["change", "click"]);
var Qo = /* @__PURE__ */ L('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Xo = /* @__PURE__ */ L('<div class="nos-slot nos-slot--empty"> </div>'), Zo = /* @__PURE__ */ L("<!> <!>", 1);
function $o(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((u) => u.type === "object" && u.system?.objectType === "weapon").sort((u, l) => (u.sort ?? 0) - (l.sort ?? 0)));
  var a = Zo(), s = mt(a);
  Je(s, 17, () => c(n), Ye, (u, l) => {
    var f = Qo(), d = h(f), v = m(d, 2);
    v.__click = () => t.actor.activateItem(c(l).id);
    var _ = h(v);
    K(() => {
      A(d, "src", c(l).img), A(d, "alt", c(l).name), A(v, "data-tooltip", c(l).name), D(_, c(l).name);
    }), O(u, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((u) => {
      var l = Xo(), f = h(l);
      K((d) => D(f, d), [() => x("NWS.NoWeapons")]), O(u, l);
    }, "consequent");
    $(i, (u) => {
      c(n).length === 0 && u(o);
    });
  }
  O(e, a), ke();
}
r($o, "InventorySlots");
Ce(["click"]);
var el = /* @__PURE__ */ L('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), tl = /* @__PURE__ */ L('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), nl = /* @__PURE__ */ L('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
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
  Je(u, 21, () => n, Ye, (E, M) => {
    var H = el();
    let N;
    H.__click = () => He(a, c(M).name, !0);
    var g = h(H), k = m(g);
    K(
      (T) => {
        N = tt(H, 1, "nos-tab-btn", null, N, { "nos-tab-btn--active": c(a) === c(M).name }), tt(g, 1, c(M).icon), D(k, ` ${T ?? ""}`);
      },
      [() => x(c(M).labelKey)]
    ), O(E, H);
  });
  var l = m(u, 2), f = h(l);
  {
    var d = /* @__PURE__ */ r((E) => {
      fr(E, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), v = /* @__PURE__ */ r((E) => {
      var M = va(), H = mt(M);
      {
        var N = /* @__PURE__ */ r((k) => {
          dr(k, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), g = /* @__PURE__ */ r((k) => {
          var T = va(), R = mt(T);
          {
            var V = /* @__PURE__ */ r((P) => {
              vr(P, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), j = /* @__PURE__ */ r((P) => {
              var J = va(), z = mt(J);
              {
                var ee = /* @__PURE__ */ r((te) => {
                  _r(te, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                $(
                  z,
                  (te) => {
                    c(a) === "bio" && te(ee);
                  },
                  !0
                );
              }
              O(P, J);
            }, "alternate");
            $(
              R,
              (P) => {
                c(a) === "inventory" ? P(V) : P(j, !1);
              },
              !0
            );
          }
          O(k, T);
        }, "alternate_1");
        $(
          H,
          (k) => {
            c(a) === "spells" ? k(N) : k(g, !1);
          },
          !0
        );
      }
      O(E, M);
    }, "alternate_2");
    $(f, (E) => {
      c(a) === "features" ? E(d) : E(v, !1);
    });
  }
  var _ = m(l, 2), y = h(_), w = h(y), I = m(_, 2), p = h(I);
  $o(p, {
    get actor() {
      return t.actor;
    }
  });
  var W = m(p, 2);
  {
    var le = /* @__PURE__ */ r((E) => {
      var M = tl(), H = h(M);
      K(() => D(H, `${c(i).usedSlots ?? 0 ?? ""} / ${c(i).totalSlots ?? 0 ?? ""}`)), O(E, M);
    }, "consequent_4");
    $(W, (E) => {
      c(s) && E(le);
    });
  }
  K((E) => D(w, E), [() => x("NWS.Weapons")]), O(e, o), ke();
}
r(al, "ContentArea");
Ce(["click"]);
var rl = /* @__PURE__ */ L('<button type="button" role="menuitem"><i></i> <span> </span></button>'), il = /* @__PURE__ */ L('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"></div>', 1);
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
      (I) => {
        v = tt(d, 1, "nos-color-scheme-menu__option", null, v, {
          "nos-color-scheme-menu__option--active": t.colorScheme === c(f).value
        }), tt(_, 1, `fa-solid ${c(f).icon ?? ""}`), D(w, I);
      },
      [() => x(c(f).label)]
    ), O(l, d);
  }), O(e, i), ke();
}
r(sl, "ColorSchemeMenu");
Ce(["click", "keydown"]);
var ol = /* @__PURE__ */ L('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
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
    $(_, (p) => {
      c(n) && p(y);
    });
  }
  var w = m(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var I = m(w, 2);
  I.__click = () => t.actor.triggerRest({ restType: "safe" }), K(
    (p, W, le, E, M, H, N, g, k, T, R, V) => {
      i = tt(s, 1, "nos-sidebar-btn", null, i, { "nos-sidebar-btn--active": t.editingEnabled }), A(s, "aria-pressed", t.editingEnabled), A(s, "aria-label", p), A(s, "data-tooltip", W), tt(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), A(u, "aria-label", le), A(u, "data-tooltip", E), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, A(l, "aria-label", M), A(l, "data-tooltip", H), l.disabled = t.actor.reactive.system.levelUpHistory.length === 0, v = tt(d, 1, "nos-sidebar-btn", null, v, { "nos-sidebar-btn--active": t.darkMode }), A(d, "aria-pressed", t.darkMode), A(d, "aria-label", N), A(d, "data-tooltip", g), A(d, "aria-expanded", c(n)), A(w, "aria-label", k), A(w, "data-tooltip", T), A(I, "aria-label", R), A(I, "data-tooltip", V);
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
  ), O(e, a), ke();
}
r(ll, "SidebarControls");
Ce(["click"]);
var cl = /* @__PURE__ */ L('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ul(e, t) {
  Se(t, !0);
  const n = Rr((S) => {
    const U = {
      updateActor: Hooks.on("updateActor", (Y, ce, X) => {
        X.diff !== !1 && Y._id === t.actor.id && S();
      }),
      createItem: Hooks.on("createItem", (Y) => {
        Y?.actor?.id === t.actor.id && S();
      }),
      deleteItem: Hooks.on("deleteItem", (Y) => {
        Y?.actor?.id === t.actor.id && S();
      }),
      updateItem: Hooks.on("updateItem", (Y, ce, X) => {
        X.diff !== !1 && Y?.actor?.id === t.actor.id && S();
      })
    };
    return () => {
      Hooks.off("updateActor", U.updateActor), Hooks.off("createItem", U.createItem), Hooks.off("deleteItem", U.deleteItem), Hooks.off("updateItem", U.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(S, U) {
      if (U === "reactive")
        return n(), S;
      const Y = S[U];
      return typeof Y == "function" ? Y.bind(S) : Y;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(S, U) {
    return Math.clamp(0, Math.round(S / U * 100), 100);
  }
  r(u, "getHitPointPercentage");
  function l(S, U, Y, ce) {
    const X = [];
    return Y && X.push(`${Y.name} (${s[ce] ?? ce})`), S && (U ? X.push(`${S.name} (${U.name}, ${S.system.classLevel})`) : X.push(`${S.name} (${S.system.classLevel})`)), X.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(S, U) {
    if (!U) return S;
    const Y = [4, 6, 8, 10, 12, 20], ce = Y.indexOf(S);
    return ce === -1 ? S : Y[Math.min(ce + U, Y.length - 1)];
  }
  r(f, "incrementDieSize");
  let d = /* @__PURE__ */ F(() => u(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(S) {
    a.update({ "system.attributes.hp.value": S });
  }
  r(v, "updateCurrentHP");
  function _(S) {
    a.update({ "system.attributes.hp.max": S });
  }
  r(_, "updateMaxHP");
  function y(S) {
    a.update({ "system.attributes.hp.temp": S });
  }
  r(y, "updateTempHP");
  let w = /* @__PURE__ */ F(() => a.reactive.system.resources.mana), I = /* @__PURE__ */ F(() => (c(w).max ?? 0) > 0 || (c(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((S) => S.type === "class" && S.system?.mana?.formula?.length));
  function p(S) {
    a.update({ "system.resources.mana.current": S });
  }
  r(p, "updateCurrentMana");
  function W(S) {
    const U = a.reactive.system.resources.mana, Y = U.baseMax ?? 0, X = (U.max || Y) - Y, _e = Math.max(0, S - X);
    a.update({ "system.resources.mana.baseMax": _e });
  }
  r(W, "updateMaxMana");
  let le = /* @__PURE__ */ F(() => {
    const S = a.reactive.system.attributes.hitDice, U = a.reactive.system.attributes.bonusHitDice ?? [], Y = a.reactive.items.filter((de) => de.type === "class"), ce = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, X = {};
    for (const de of Y) {
      const xe = de.system.hitDieSize, Me = f(xe, ce), De = de.system.classLevel;
      X[Me] ??= { current: 0, total: 0 }, X[Me].total += De, X[Me].current = S[Me]?.current ?? 0;
    }
    const _e = Y.map((de) => f(de.system.hitDieSize, ce));
    for (const de of U) {
      const xe = f(de.size, ce);
      X[xe] ??= { current: S[xe]?.current ?? 0, total: 0 }, X[xe].total += de.value, _e.includes(xe) || (X[xe].current = S[xe]?.current ?? 0);
    }
    const gn = U.map((de) => f(de.size, ce));
    for (const [de, xe] of Object.entries(S ?? {})) {
      const Me = Number(de), De = f(Me, ce), Jt = xe?.bonus ?? 0;
      if (Jt > 0) {
        X[De] ??= { current: 0, total: 0 }, X[De].total += Jt;
        const pn = _e.includes(De), yn = gn.includes(De);
        !pn && !yn && (X[De].current = S[De]?.current ?? 0);
      }
    }
    let Mt = 0, Yt = 0;
    for (const de of Object.values(X))
      Mt += de.current, Yt += de.total;
    return { bySize: X, value: Mt, max: Yt };
  });
  async function E(S) {
    await a.updateCurrentHitDice(S);
  }
  r(E, "updateCurrentHitDice");
  async function M() {
    await a.rollHitDice();
  }
  r(M, "rollHitDice");
  async function H() {
    await a.editCurrentHitDice();
  }
  r(H, "editCurrentHitDice");
  let N = /* @__PURE__ */ F(() => a.reactive.items.find((S) => S.type === "class") ?? null), g = /* @__PURE__ */ F(() => {
    const S = a.reactive.items.find((X) => X.type === "class") ?? null, U = a.reactive.items.find((X) => X.type === "subclass") ?? null, Y = a.reactive.items.find((X) => X.type === "ancestry") ?? null, ce = a.reactive.system.attributes.sizeCategory;
    return l(S, U, Y, ce);
  }), k = /* @__PURE__ */ F(() => a.reactive.system.attributes.wounds);
  function T(S) {
    let U = S;
    S <= c(k).value && (U = S - 1), a.update({ "system.attributes.wounds.value": U });
  }
  r(T, "toggleWounds");
  let R = /* @__PURE__ */ F(() => a.reactive.flags.nimble), V = /* @__PURE__ */ F(() => c(R)?.editingEnabled ?? !0);
  const j = Ys(!1, (S) => (xs(() => S(c(V))), () => {
  }));
  async function P() {
    await a.setFlag("nimble", "editingEnabled", !c(V));
  }
  r(P, "toggleEditingEnabled");
  let J = /* @__PURE__ */ F(() => {
    const S = c(R)?.colorScheme;
    return S || (c(R)?.darkMode === !0 ? "dark" : "white");
  });
  async function z(S) {
    await a.setFlag("nimble", "colorScheme", S);
  }
  r(z, "setColorScheme");
  let ee = /* @__PURE__ */ F(() => c(J) === "dark"), te = /* @__PURE__ */ F(() => c(J) === "nimble");
  Rn("actor", a), Rn("document", a), Rn("application", t.sheet), Rn("editingEnabled", j);
  var oe = cl();
  let G;
  var Q = h(oe), ie = h(Q);
  to(ie, {
    get actor() {
      return a;
    },
    get metaData() {
      return c(g);
    },
    get editingEnabled() {
      return c(V);
    },
    get hitDiceData() {
      return c(le);
    }
  });
  var fe = m(ie, 2);
  fo(fe, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(V);
    },
    get isBloodied() {
      return c(d);
    },
    get hitDiceData() {
      return c(le);
    },
    get hasMana() {
      return c(I);
    },
    get mana() {
      return c(w);
    },
    get wounds() {
      return c(k);
    },
    toggleWounds: T,
    updateCurrentHP: v,
    updateMaxHP: _,
    updateTempHP: y,
    updateCurrentMana: p,
    updateMaxMana: W,
    updateCurrentHitDice: E,
    rollHitDice: M,
    editCurrentHitDice: H
  });
  var ne = m(fe, 2);
  mo(ne, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(V);
    }
  });
  var we = m(Q, 2);
  al(we, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(V);
    },
    get hasMana() {
      return c(I);
    },
    get mana() {
      return c(w);
    },
    updateCurrentMana: p,
    updateMaxMana: W
  });
  var ae = m(we, 2);
  ll(ae, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(V);
    },
    toggleEditingEnabled: P,
    get classItem() {
      return c(N);
    },
    get darkMode() {
      return c(ee);
    },
    get colorScheme() {
      return c(J);
    },
    setColorScheme: z
  }), K(() => G = tt(oe, 1, "nos-sheet", null, G, {
    "nos-sheet--dark": c(ee),
    "nos-sheet--nimble": c(te)
  })), O(e, oe), ke();
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
