var Ja = Object.defineProperty;
var Qa = (e) => {
  throw TypeError(e);
};
var Ei = (e, t, n) => t in e ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Ja(e, "name", { value: t, configurable: !0 });
var We = (e, t, n) => Ei(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Qa("Cannot " + n);
var h = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), V = (e, t, n) => t.has(e) ? Qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), G = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), pe = (e, t, n) => (la(e, t, "access private method"), n);
const _e = /* @__PURE__ */ Symbol(), Si = /* @__PURE__ */ Symbol("filename"), xi = "http://www.w3.org/1999/xhtml", Xa = globalThis.process?.env?.NODE_ENV, I = Xa && !Xa.toLowerCase().startsWith("prod");
var hr = Array.isArray, ki = Array.prototype.indexOf, jt = Array.prototype.includes, Yn = Array.from, zt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, Ni = Object.getOwnPropertyDescriptors, Ti = Object.prototype, Ii = Array.prototype, br = Object.getPrototypeOf, Za = Object.isExtensible;
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
const be = 2, ba = 4, Jn = 8, pr = 1 << 24, _t = 16, $e = 32, Kt = 64, La = 128, je = 512, de = 1024, me = 2048, Qe = 4096, Ce = 8192, pt = 16384, Ha = 32768, cn = 65536, zn = 1 << 17, yr = 1 << 18, hn = 1 << 19, Ci = 1 << 20, vt = 1 << 25, Nt = 32768, ma = 1 << 21, Qn = 1 << 22, yt = 1 << 23, $t = /* @__PURE__ */ Symbol("$state"), Di = /* @__PURE__ */ Symbol(""), wr = /* @__PURE__ */ Symbol("proxy path");
var en;
const Qt = new (en = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(en, "StaleReactionError"), en)();
function Mi(e) {
  if (I) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Mi, "lifecycle_outside_component");
function Wi() {
  if (I) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Wi, "async_derived_orphan");
function $a() {
  if (I) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r($a, "bind_invalid_checkbox_value");
function Oi() {
  if (I) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Oi, "derived_references_self");
function Er(e, t, n) {
  if (I) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(Er, "each_key_duplicate");
function Li(e) {
  if (I) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Li, "effect_in_teardown");
function Hi() {
  if (I) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Hi, "effect_in_unowned_derived");
function Pi(e) {
  if (I) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Pi, "effect_orphan");
function Ri() {
  if (I) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Ri, "effect_update_depth_exceeded");
function Fi(e) {
  if (I) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Fi, "rune_outside_svelte");
function ji() {
  if (I) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(ji, "state_descriptors_fixed");
function zi() {
  if (I) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(zi, "state_prototype_fixed");
function Ui() {
  if (I) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Ui, "state_unsafe_mutation");
function Bi() {
  if (I) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(Bi, "svelte_boundary_reset_onerror");
var Xn = "font-weight: bold", Zn = "font-weight: normal";
function qi() {
  I ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Xn, Zn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(qi, "lifecycle_double_unmount");
function ua(e) {
  I ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Xn, Zn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(ua, "state_proxy_equality_mismatch");
function Ki() {
  I ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Xn, Zn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Ki, "state_proxy_unmount");
function Vi() {
  I ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Xn, Zn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(Vi, "svelte_boundary_reset_noop");
function Sr(e) {
  return e === this.v;
}
r(Sr, "equals");
function xr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(xr, "safe_not_equal");
function kr(e) {
  return !xr(e, this.v);
}
r(kr, "safe_equals");
let Gi = !1;
function tt(e, t) {
  return e.label = t, Nr(e.v, t), e;
}
r(tt, "tag");
function Nr(e, t) {
  return e?.[wr]?.(t), e;
}
r(Nr, "tag_proxy");
function Yi(e) {
  const t = new Error(), n = Ji();
  return n.length === 0 ? null : (n.unshift(`
`), zt(t, "stack", {
    value: n.join(`
`)
  }), zt(t, "name", {
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
let he = null;
function un(e) {
  he = e;
}
r(un, "set_component_context");
let Sn = null;
function Un(e) {
  Sn = e;
}
r(Un, "set_dev_stack");
let An = null;
function er(e) {
  An = e;
}
r(er, "set_dev_current_component_function");
function Ln(e, t) {
  return Qi("setContext").set(e, t), t;
}
r(Ln, "setContext");
function ye(e, t = !1, n) {
  he = {
    p: he,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, I && (he.function = n, An = n);
}
r(ye, "push");
function we(e) {
  var t = (
    /** @type {ComponentContext} */
    he
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Vr(a);
  }
  return t.i = !0, he = t.p, I && (An = he?.function ?? null), /** @type {T} */
  {};
}
r(we, "pop");
function Tr() {
  return !0;
}
r(Tr, "is_runes");
function Qi(e) {
  return he === null && Mi(e), he.c ??= new Map(Xi(he) || void 0);
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
let Ct = [];
function Ir() {
  var e = Ct;
  Ct = [], Ai(e);
}
r(Ir, "run_micro_tasks");
function wt(e) {
  if (Ct.length === 0 && !wn) {
    var t = Ct;
    queueMicrotask(() => {
      t === Ct && Ir();
    });
  }
  Ct.push(e);
}
r(wt, "queue_micro_task");
function Zi() {
  for (; Ct.length > 0; )
    Ir();
}
r(Zi, "flush_tasks");
const ga = /* @__PURE__ */ new WeakMap();
function Ar(e) {
  var t = te;
  if (t === null)
    return $.f |= yt, e;
  if (I && e instanceof Error && !ga.has(e) && ga.set(e, $i(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw I && !t.parent && e instanceof Error && Cr(e), e;
    t.b.error(e);
  } else
    fn(e, t);
}
r(Ar, "handle_error");
function fn(e, t) {
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
  throw I && e instanceof Error && Cr(e), e;
}
r(fn, "invoke_error_boundary");
function $i(e, t) {
  const n = Zt(e, "message");
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
  t && (zt(e, "message", {
    value: t.message
  }), zt(e, "stack", {
    value: t.stack
  }));
}
r(Cr, "apply_adjustments");
const es = -7169;
function ue(e, t) {
  e.f = e.f & es | t;
}
r(ue, "set_signal_status");
function Pa(e) {
  (e.f & je) !== 0 || e.deps === null ? ue(e, de) : ue(e, Qe);
}
r(Pa, "update_derived_status");
function Dr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & be) === 0 || (t.f & Nt) === 0 || (t.f ^= Nt, Dr(
        /** @type {Derived} */
        t.deps
      ));
}
r(Dr, "clear_marked");
function Mr(e, t, n) {
  (e.f & me) !== 0 ? t.add(e) : (e.f & Qe) !== 0 && n.add(e), Dr(e.deps), ue(e, de);
}
r(Mr, "defer_effect");
const Hn = /* @__PURE__ */ new Set();
let re = null, pa = null, Ve = null, Se = [], $n = null, ya = !1, wn = !1;
var tn, nn, Mt, an, kn, Nn, Wt, ft, rn, lt, wa, Ea, Wr;
const Kn = class Kn {
  constructor() {
    V(this, lt);
    We(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    We(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    We(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    V(this, tn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    V(this, nn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    V(this, Mt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    V(this, an, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    V(this, kn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    V(this, Nn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    V(this, Wt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    V(this, ft, /* @__PURE__ */ new Map());
    We(this, "is_fork", !1);
    V(this, rn, !1);
  }
  is_deferred() {
    return this.is_fork || h(this, an) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    h(this, ft).has(t) || h(this, ft).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = h(this, ft).get(t);
    if (n) {
      h(this, ft).delete(t);
      for (var a of n.d)
        ue(a, me), Ge(a);
      for (a of n.m)
        ue(a, Qe), Ge(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Se = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      pe(this, lt, wa).call(this, s, n, a);
    if (this.is_deferred()) {
      pe(this, lt, Ea).call(this, a), pe(this, lt, Ea).call(this, n);
      for (const [s, i] of h(this, ft))
        Pr(s, i);
    } else {
      for (const s of h(this, tn)) s();
      h(this, tn).clear(), h(this, Mt) === 0 && pe(this, lt, Wr).call(this), pa = this, re = null, tr(a), tr(n), pa = null, h(this, kn)?.resolve();
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
    n !== _e && !this.previous.has(t) && this.previous.set(t, n), (t.f & yt) === 0 && (this.current.set(t, t.v), Ve?.set(t, t.v));
  }
  activate() {
    re = this, this.apply();
  }
  deactivate() {
    re === this && (re = null, Ve = null);
  }
  flush() {
    if (this.activate(), Se.length > 0) {
      if (Or(), re !== null && re !== this)
        return;
    } else h(this, Mt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of h(this, nn)) t(this);
    h(this, nn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    G(this, Mt, h(this, Mt) + 1), t && G(this, an, h(this, an) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    G(this, Mt, h(this, Mt) - 1), t && G(this, an, h(this, an) - 1), !h(this, rn) && (G(this, rn, !0), wt(() => {
      G(this, rn, !1), this.is_deferred() ? Se.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of h(this, Nn))
      h(this, Wt).delete(t), ue(t, me), Ge(t);
    for (const t of h(this, Wt))
      ue(t, Qe), Ge(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    h(this, tn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    h(this, nn).add(t);
  }
  settled() {
    return (h(this, kn) ?? G(this, kn, mr())).promise;
  }
  static ensure() {
    if (re === null) {
      const t = re = new Kn();
      Hn.add(re), wn || wt(() => {
        re === t && t.flush();
      });
    }
    return re;
  }
  apply() {
  }
};
tn = new WeakMap(), nn = new WeakMap(), Mt = new WeakMap(), an = new WeakMap(), kn = new WeakMap(), Nn = new WeakMap(), Wt = new WeakMap(), ft = new WeakMap(), rn = new WeakMap(), lt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= de;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & ($e | Kt)) !== 0, l = c && (o & de) !== 0, f = l || (o & Ce) !== 0 || h(this, ft).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= de : i !== null && (o & (ba | Jn | pr)) !== 0 ? i.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : Dn(s) && ((o & _t) !== 0 && h(this, Wt).add(s), xn(s));
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
Ea = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Mr(t[n], h(this, Nn), h(this, Wt));
}, "#defer_effects"), Wr = /* @__PURE__ */ r(function() {
  var s;
  if (Hn.size > 1) {
    this.previous.clear();
    var t = Ve, n = !0;
    for (const i of Hn) {
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
        var a = Se;
        Se = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Lr(d, c, l, f);
        if (Se.length > 0) {
          re = i, i.apply();
          for (const d of Se)
            pe(s = i, lt, wa).call(s, d, [], []);
          i.deactivate();
        }
        Se = a;
      }
    }
    re = null, Ve = t;
  }
  this.committed = !0, Hn.delete(this);
}, "#commit"), r(Kn, "Batch");
let Et = Kn;
function ts(e) {
  var t = wn;
  wn = !0;
  try {
    for (var n; ; ) {
      if (Zi(), Se.length === 0 && (re?.flush(), Se.length === 0))
        return $n = null, /** @type {T} */
        n;
      Or();
    }
  } finally {
    wn = t;
  }
}
r(ts, "flushSync");
function Or() {
  ya = !0;
  var e = I ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Se.length > 0; ) {
      var n = Et.ensure();
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
        ns();
      }
      if (n.process(Se), St.clear(), I)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (Se = [], ya = !1, $n = null, I)
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
    I && zt(e, "stack", { value: "" }), fn(e, $n);
  }
}
r(ns, "infinite_loop_guard");
let ct = null;
function tr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (pt | Ce)) === 0 && Dn(a) && (ct = /* @__PURE__ */ new Set(), xn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Xr(a) : a.fn = null), ct?.size > 0)) {
        St.clear();
        for (const s of ct) {
          if ((s.f & (pt | Ce)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            ct.has(o) && (ct.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (pt | Ce)) === 0 && xn(l);
          }
        }
        ct.clear();
      }
    }
    ct = null;
  }
}
r(tr, "flush_queued_effects");
function Lr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & be) !== 0 ? Lr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (Qn | _t)) !== 0 && (i & me) === 0 && Hr(s, t, a) && (ue(s, me), Ge(
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
      if (jt.call(t, s))
        return !0;
      if ((s.f & be) !== 0 && Hr(
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
function Ge(e) {
  for (var t = $n = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === te && (n & _t) !== 0 && (n & yr) === 0)
      return;
    if ((n & (Kt | $e)) !== 0) {
      if ((n & de) === 0) return;
      t.f ^= de;
    }
  }
  Se.push(t);
}
r(Ge, "schedule_effect");
function Pr(e, t) {
  if (!((e.f & $e) !== 0 && (e.f & de) !== 0)) {
    (e.f & me) !== 0 ? t.d.push(e) : (e.f & Qe) !== 0 && t.m.push(e), ue(e, de);
    for (var n = e.first; n !== null; )
      Pr(n, t), n = n.next;
  }
}
r(Pr, "reset_branch");
function Rr(e) {
  let t = 0, n = Ut(0), a;
  return I && tt(n, "createSubscriber version"), () => {
    Ua() && (u(n), Gr(() => (t === 0 && (a = oi(() => e(() => En(n)))), t += 1, () => {
      wt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, En(n));
      });
    })));
  };
}
r(Rr, "createSubscriber");
var as = cn | hn | La;
function rs(e, t, n) {
  new Sa(e, t, n);
}
r(rs, "boundary");
var Le, Oa, at, Ot, rt, He, Ee, it, dt, bt, Lt, mt, sn, Ht, on, ln, st, Vn, ve, is, ss, xa, Rn, Fn, ka;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    V(this, ve);
    /** @type {Boundary | null} */
    We(this, "parent");
    We(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, Le);
    /** @type {TemplateNode | null} */
    V(this, Oa, null);
    /** @type {BoundaryProps} */
    V(this, at);
    /** @type {((anchor: Node) => void)} */
    V(this, Ot);
    /** @type {Effect} */
    V(this, rt);
    /** @type {Effect | null} */
    V(this, He, null);
    /** @type {Effect | null} */
    V(this, Ee, null);
    /** @type {Effect | null} */
    V(this, it, null);
    /** @type {DocumentFragment | null} */
    V(this, dt, null);
    /** @type {TemplateNode | null} */
    V(this, bt, null);
    V(this, Lt, 0);
    V(this, mt, 0);
    V(this, sn, !1);
    V(this, Ht, !1);
    /** @type {Set<Effect>} */
    V(this, on, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    V(this, ln, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    V(this, st, null);
    V(this, Vn, Rr(() => (G(this, st, Ut(h(this, Lt))), I && tt(h(this, st), "$effect.pending()"), () => {
      G(this, st, null);
    })));
    G(this, Le, t), G(this, at, n), G(this, Ot, a), this.parent = /** @type {Effect} */
    te.b, this.is_pending = !!h(this, at).pending, G(this, rt, Ba(() => {
      te.b = this;
      {
        var s = pe(this, ve, xa).call(this);
        try {
          G(this, He, Re(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        h(this, mt) > 0 ? pe(this, ve, Fn).call(this) : this.is_pending = !1;
      }
      return () => {
        h(this, bt)?.remove();
      };
    }, as));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Mr(t, h(this, on), h(this, ln));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!h(this, at).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    pe(this, ve, ka).call(this, t), G(this, Lt, h(this, Lt) + t), !(!h(this, st) || h(this, sn)) && (G(this, sn, !0), wt(() => {
      G(this, sn, !1), h(this, st) && vn(h(this, st), h(this, Lt));
    }));
  }
  get_effect_pending() {
    return h(this, Vn).call(this), u(
      /** @type {Source<number>} */
      h(this, st)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = h(this, at).onerror;
    let a = h(this, at).failed;
    if (h(this, Ht) || !n && !a)
      throw t;
    h(this, He) && (ke(h(this, He)), G(this, He, null)), h(this, Ee) && (ke(h(this, Ee)), G(this, Ee, null)), h(this, it) && (ke(h(this, it)), G(this, it, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Vi();
        return;
      }
      s = !0, i && Bi(), Et.ensure(), G(this, Lt, 0), h(this, it) !== null && Rt(h(this, it), () => {
        G(this, it, null);
      }), this.is_pending = this.has_pending_snippet(), G(this, He, pe(this, ve, Rn).call(this, () => (G(this, Ht, !1), Re(() => h(this, Ot).call(this, h(this, Le)))))), h(this, mt) > 0 ? pe(this, ve, Fn).call(this) : this.is_pending = !1;
    }, "reset");
    wt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        fn(c, h(this, rt) && h(this, rt).parent);
      }
      a && G(this, it, pe(this, ve, Rn).call(this, () => {
        Et.ensure(), G(this, Ht, !0);
        try {
          return Re(() => {
            a(
              h(this, Le),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return fn(
            c,
            /** @type {Effect} */
            h(this, rt).parent
          ), null;
        } finally {
          G(this, Ht, !1);
        }
      }));
    });
  }
};
Le = new WeakMap(), Oa = new WeakMap(), at = new WeakMap(), Ot = new WeakMap(), rt = new WeakMap(), He = new WeakMap(), Ee = new WeakMap(), it = new WeakMap(), dt = new WeakMap(), bt = new WeakMap(), Lt = new WeakMap(), mt = new WeakMap(), sn = new WeakMap(), Ht = new WeakMap(), on = new WeakMap(), ln = new WeakMap(), st = new WeakMap(), Vn = new WeakMap(), ve = new WeakSet(), is = /* @__PURE__ */ r(function() {
  try {
    G(this, He, Re(() => h(this, Ot).call(this, h(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ss = /* @__PURE__ */ r(function() {
  const t = h(this, at).pending;
  t && (G(this, Ee, Re(() => t(h(this, Le)))), wt(() => {
    var n = pe(this, ve, xa).call(this);
    G(this, He, pe(this, ve, Rn).call(this, () => (Et.ensure(), Re(() => h(this, Ot).call(this, n))))), h(this, mt) > 0 ? pe(this, ve, Fn).call(this) : (Rt(
      /** @type {Effect} */
      h(this, Ee),
      () => {
        G(this, Ee, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), xa = /* @__PURE__ */ r(function() {
  var t = h(this, Le);
  return this.is_pending && (G(this, bt, xt()), h(this, Le).before(h(this, bt)), t = h(this, bt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Rn = /* @__PURE__ */ r(function(t) {
  var n = te, a = $, s = he;
  Je(h(this, rt)), Ue(h(this, rt)), un(h(this, rt).ctx);
  try {
    return t();
  } catch (i) {
    return Ar(i), null;
  } finally {
    Je(n), Ue(a), un(s);
  }
}, "#run"), Fn = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    h(this, at).pending
  );
  h(this, He) !== null && (G(this, dt, document.createDocumentFragment()), h(this, dt).append(
    /** @type {TemplateNode} */
    h(this, bt)
  ), ei(h(this, He), h(this, dt))), h(this, Ee) === null && G(this, Ee, Re(() => t(h(this, Le))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ka = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && pe(n = this.parent, ve, ka).call(n, t);
    return;
  }
  if (G(this, mt, h(this, mt) + t), h(this, mt) === 0) {
    this.is_pending = !1;
    for (const a of h(this, on))
      ue(a, me), Ge(a);
    for (const a of h(this, ln))
      ue(a, Qe), Ge(a);
    h(this, on).clear(), h(this, ln).clear(), h(this, Ee) && Rt(h(this, Ee), () => {
      G(this, Ee, null);
    }), h(this, dt) && (h(this, Le).before(h(this, dt)), G(this, dt, null));
  }
}, "#update_pending_count"), r(Va, "Boundary");
let Sa = Va;
function os(e, t, n, a) {
  const s = Ra;
  var i = e.filter((v) => !v.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = re, c = (
    /** @type {Effect} */
    te
  ), l = ls(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function d(v) {
    l();
    try {
      a(v);
    } catch (p) {
      (c.f & pt) === 0 && fn(p, c);
    }
    o?.deactivate(), Na();
  }
  if (r(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function _() {
    l(), Promise.all(n.map((v) => /* @__PURE__ */ us(v))).then((v) => d([...t.map(s), ...v])).catch((v) => fn(v, c));
  }
  r(_, "run"), f ? f.then(_) : _();
}
r(os, "flatten");
function ls() {
  var e = te, t = $, n = he, a = re;
  if (I)
    var s = Sn;
  return /* @__PURE__ */ r(function(o = !0) {
    Je(e), Ue(t), un(n), o && a?.activate(), I && Un(s);
  }, "restore");
}
r(ls, "capture");
function Na() {
  Je(null), Ue(null), un(null), I && Un(null);
}
r(Na, "unset_context");
const cs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = be | me, n = $ !== null && ($.f & be) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return te !== null && (te.f |= hn), {
    ctx: he,
    deps: null,
    effects: null,
    equals: Sr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      _e
    ),
    wv: 0,
    parent: n ?? te,
    ac: null
  };
}
r(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function us(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    te
  );
  a === null && Wi();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Ut(
    /** @type {V} */
    _e
  );
  I && (o.label = t);
  var c = !$, l = /* @__PURE__ */ new Map();
  return Ts(() => {
    var f = mr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === re && d.committed && d.deactivate(), Na();
      });
    } catch (p) {
      f.reject(p), Na();
    }
    var d = (
      /** @type {Batch} */
      re
    );
    if (c) {
      var _ = s.is_rendered();
      s.update_pending_count(1), d.increment(_), l.get(d)?.reject(Qt), l.delete(d), l.set(d, f);
    }
    const v = /* @__PURE__ */ r((p, E = void 0) => {
      if (d.activate(), E)
        E !== Qt && (o.f |= yt, vn(o, E));
      else {
        (o.f & yt) !== 0 && (o.f ^= yt), vn(o, p);
        for (const [T, y] of l) {
          if (l.delete(T), T === d) break;
          y.reject(Qt);
        }
      }
      c && (s.update_pending_count(-1), d.decrement(_));
    }, "handler");
    f.promise.then(v, (p) => v(null, p || "unknown"));
  }), Kr(() => {
    for (const f of l.values())
      f.reject(Qt);
  }), I && (o.f |= Qn), new Promise((f) => {
    function d(_) {
      function v() {
        _ === i ? f(o) : d(i);
      }
      r(v, "go"), _.then(v, v);
    }
    r(d, "next"), d(i);
  });
}
r(us, "async_derived");
// @__NO_SIDE_EFFECTS__
function z(e) {
  const t = /* @__PURE__ */ Ra(e);
  return ti(t), t;
}
r(z, "user_derived");
// @__NO_SIDE_EFFECTS__
function fs(e) {
  const t = /* @__PURE__ */ Ra(e);
  return t.equals = kr, t;
}
r(fs, "derived_safe_equal");
function Ta(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ke(
        /** @type {Effect} */
        t[n]
      );
  }
}
r(Ta, "destroy_derived_effects");
let fa = [];
function ds(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & be) === 0)
      return (t.f & pt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(ds, "get_derived_parent_effect");
function Fa(e) {
  var t, n = te;
  if (Je(ds(e)), I) {
    let a = dn;
    nr(/* @__PURE__ */ new Set());
    try {
      jt.call(fa, e) && Oi(), fa.push(e), e.f &= ~Nt, Ta(e), t = Ia(e);
    } finally {
      Je(n), nr(a), fa.pop();
    }
  } else
    try {
      e.f &= ~Nt, Ta(e), t = Ia(e);
    } finally {
      Je(n);
    }
  return t;
}
r(Fa, "execute_derived");
function Fr(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = ai(), (!re?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ue(e, de);
    return;
  }
  Bt || (Ve !== null ? (Ua() || re?.is_fork) && Ve.set(e, t) : Pa(e));
}
r(Fr, "update_derived");
let dn = /* @__PURE__ */ new Set();
const St = /* @__PURE__ */ new Map();
function nr(e) {
  dn = e;
}
r(nr, "set_eager_effects");
let ja = !1;
function vs() {
  ja = !0;
}
r(vs, "set_eager_effects_deferred");
function Ut(e, t) {
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
r(Ut, "source");
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const n = Ut(e);
  return ti(n), n;
}
r(Pe, "state");
// @__NO_SIDE_EFFECTS__
function _s(e, t = !1, n = !0) {
  const a = Ut(e);
  return t || (a.equals = kr), a;
}
r(_s, "mutable_source");
function Ke(e, t, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ye || ($.f & zn) !== 0) && Tr() && ($.f & (be | _t | Qn | zn)) !== 0 && (ze === null || !jt.call(ze, e)) && Ui();
  let a = n ? Xt(t) : t;
  return I && Nr(
    a,
    /** @type {string} */
    e.label
  ), vn(e, a);
}
r(Ke, "set");
function vn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Bt ? St.set(e, t) : St.set(e, n), e.v = t;
    var a = Et.ensure();
    if (a.capture(e, n), I) {
      if (te !== null) {
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
      te !== null && (e.set_during_effect = !0);
    }
    if ((e.f & be) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & me) !== 0 && Fa(s), Pa(s);
    }
    e.wv = ai(), zr(e, me), te !== null && (te.f & de) !== 0 && (te.f & ($e | Kt)) === 0 && (Oe === null ? As([e]) : Oe.push(e)), !a.is_fork && dn.size > 0 && !ja && jr();
  }
  return t;
}
r(vn, "internal_set");
function jr() {
  ja = !1;
  for (const e of dn)
    (e.f & de) !== 0 && ue(e, Qe), Dn(e) && xn(e);
  dn.clear();
}
r(jr, "flush_eager_effects");
function En(e) {
  Ke(e, e.v + 1);
}
r(En, "increment");
function zr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (I && (o & zn) !== 0) {
        dn.add(i);
        continue;
      }
      var c = (o & me) === 0;
      if (c && ue(i, t), (o & be) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        Ve?.delete(l), (o & Nt) === 0 && (o & je && (i.f |= Nt), zr(l, Qe));
      } else c && ((o & _t) !== 0 && ct !== null && ct.add(
        /** @type {Effect} */
        i
      ), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
r(zr, "mark_reactions");
const hs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Xt(e) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const t = br(e);
  if (t !== Ti && t !== Ii)
    return e;
  var n = /* @__PURE__ */ new Map(), a = hr(e), s = /* @__PURE__ */ Pe(0), i = Ft, o = /* @__PURE__ */ r((d) => {
    if (Ft === i)
      return d();
    var _ = $, v = Ft;
    Ue(null), sr(i);
    var p = d();
    return Ue(_), sr(v), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Pe(
    /** @type {any[]} */
    e.length
  )), I && (e = /** @type {any} */
  ms(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, c = d, tt(s, `${c} version`);
      for (const [_, v] of n)
        tt(v, At(c, _));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, _, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && ji();
        var p = n.get(_);
        return p === void 0 ? p = o(() => {
          var E = /* @__PURE__ */ Pe(v.value);
          return n.set(_, E), I && typeof _ == "string" && tt(E, At(c, _)), E;
        }) : Ke(p, v.value, !0), !0;
      },
      deleteProperty(d, _) {
        var v = n.get(_);
        if (v === void 0) {
          if (_ in d) {
            const p = o(() => /* @__PURE__ */ Pe(_e));
            n.set(_, p), En(s), I && tt(p, At(c, _));
          }
        } else
          Ke(v, _e), En(s);
        return !0;
      },
      get(d, _, v) {
        if (_ === $t)
          return e;
        if (I && _ === wr)
          return f;
        var p = n.get(_), E = _ in d;
        if (p === void 0 && (!E || Zt(d, _)?.writable) && (p = o(() => {
          var y = Xt(E ? d[_] : _e), O = /* @__PURE__ */ Pe(y);
          return I && tt(O, At(c, _)), O;
        }), n.set(_, p)), p !== void 0) {
          var T = u(p);
          return T === _e ? void 0 : T;
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
          if (E !== void 0 && T !== _e)
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
        if (_ === $t)
          return !0;
        var v = n.get(_), p = v !== void 0 && v.v !== _e || Reflect.has(d, _);
        if (v !== void 0 || te !== null && (!p || Zt(d, _)?.writable)) {
          v === void 0 && (v = o(() => {
            var T = p ? Xt(d[_]) : _e, y = /* @__PURE__ */ Pe(T);
            return I && tt(y, At(c, _)), y;
          }), n.set(_, v));
          var E = u(v);
          if (E === _e)
            return !1;
        }
        return p;
      },
      set(d, _, v, p) {
        var E = n.get(_), T = _ in d;
        if (a && _ === "length")
          for (var y = v; y < /** @type {Source<number>} */
          E.v; y += 1) {
            var O = n.get(y + "");
            O !== void 0 ? Ke(O, _e) : y in d && (O = o(() => /* @__PURE__ */ Pe(_e)), n.set(y + "", O), I && tt(O, At(c, y)));
          }
        if (E === void 0)
          (!T || Zt(d, _)?.writable) && (E = o(() => /* @__PURE__ */ Pe(void 0)), I && tt(E, At(c, _)), Ke(E, Xt(v)), n.set(_, E));
        else {
          T = E.v !== _e;
          var ie = o(() => Xt(v));
          Ke(E, ie);
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
          En(s);
        }
        return !0;
      },
      ownKeys(d) {
        u(s);
        var _ = Reflect.ownKeys(d).filter((E) => {
          var T = n.get(E);
          return T === void 0 || T.v !== _e;
        });
        for (var [v, p] of n)
          p.v !== _e && !(v in d) && _.push(v);
        return _;
      },
      setPrototypeOf() {
        zi();
      }
    }
  );
}
r(Xt, "proxy");
function At(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : hs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(At, "get_label");
function da(e) {
  try {
    if (e !== null && typeof e == "object" && $t in e)
      return e[$t];
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
    const c = n.call(this, i, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (da(this[l]) === i) {
          ua("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(i, o) {
    const c = a.call(this, i, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (da(this[l]) === i) {
          ua("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(i, o) {
    const c = s.call(this, i, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (da(this[l]) === i) {
          ua("array.includes(...)");
          break;
        }
    }
    return c;
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
    Ur = Zt(t, "firstChild").get, Br = Zt(t, "nextSibling").get, Za(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Za(n) && (n.__t = void 0), I && (e.__svelte_meta = null, gs());
  }
}
r(ps, "init_operations");
function xt(e = "") {
  return document.createTextNode(e);
}
r(xt, "create_text");
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ur.call(e)
  );
}
r(gt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return (
    /** @type {TemplateNode | null} */
    Br.call(e)
  );
}
r(Cn, "get_next_sibling");
function b(e, t) {
  return /* @__PURE__ */ gt(e);
}
r(b, "child");
function kt(e, t = !1) {
  {
    var n = /* @__PURE__ */ gt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Cn(n) : n;
  }
}
r(kt, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(a);
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
function ea(e) {
  var t = $, n = te;
  Ue(null), Je(null);
  try {
    return e();
  } finally {
    Ue(t), Je(n);
  }
}
r(ea, "without_reactive_context");
function Es(e, t, n, a = n) {
  e.addEventListener(t, () => ea(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), ws();
}
r(Es, "listen_to_event_and_reset_event");
function Ss(e) {
  te === null && ($ === null && Pi(e), Hi()), Bt && Li(e);
}
r(Ss, "validate_effect");
function xs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(xs, "push_effect");
function Tt(e, t, n) {
  var a = te;
  if (I)
    for (; a !== null && (a.f & zn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Ce) !== 0 && (e |= Ce);
  var s = {
    ctx: he,
    deps: null,
    nodes: null,
    f: e | me | je,
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
  if (I && (s.component_function = An), n)
    try {
      xn(s), s.f |= Ha;
    } catch (c) {
      throw ke(s), c;
    }
  else t !== null && Ge(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & hn) === 0 && (i = i.first, (e & _t) !== 0 && (e & cn) !== 0 && i !== null && (i.f |= cn)), i !== null && (i.parent = a, a !== null && xs(i, a), $ !== null && ($.f & be) !== 0 && (e & Kt) === 0)) {
    var o = (
      /** @type {Derived} */
      $
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Tt, "create_effect");
function Ua() {
  return $ !== null && !Ye;
}
r(Ua, "effect_tracking");
function Kr(e) {
  const t = Tt(Jn, null, !1);
  return ue(t, de), t.teardown = e, t;
}
r(Kr, "teardown");
function ks(e) {
  Ss("$effect"), I && zt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    te.f
  ), n = !$ && (t & $e) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      he
    );
    (a.e ??= []).push(e);
  } else
    return Vr(e);
}
r(ks, "user_effect");
function Vr(e) {
  return Tt(ba | Ci, e, !1);
}
r(Vr, "create_user_effect");
function Ns(e) {
  Et.ensure();
  const t = Tt(Kt | hn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Rt(t, () => {
      ke(t), a(void 0);
    }) : (ke(t), a(void 0));
  });
}
r(Ns, "component_root");
function Ts(e) {
  return Tt(Qn | hn, e, !0);
}
r(Ts, "async_effect");
function Gr(e, t = 0) {
  return Tt(Jn | t, e, !0);
}
r(Gr, "render_effect");
function J(e, t = [], n = [], a = []) {
  os(a, t, n, (s) => {
    Tt(Jn, () => e(...s.map(u)), !0);
  });
}
r(J, "template_effect");
function Ba(e, t = 0) {
  var n = Tt(_t | t, e, !0);
  return I && (n.dev_stack = Sn), n;
}
r(Ba, "block");
function Re(e) {
  return Tt($e | hn, e, !0);
}
r(Re, "branch");
function Yr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Bt, a = $;
    ir(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      ir(n), Ue(a);
    }
  }
}
r(Yr, "execute_effect_teardown");
function Jr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ea(() => {
      s.abort(Qt);
    });
    var a = n.next;
    (n.f & Kt) !== 0 ? n.parent = null : ke(n, t), n = a;
  }
}
r(Jr, "destroy_effect_children");
function Is(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & $e) === 0 && ke(t), t = n;
  }
}
r(Is, "destroy_block_effect_children");
function ke(e, t = !0) {
  var n = !1;
  (t || (e.f & yr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Qr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Jr(e, t && !n), Bn(e, 0), ue(e, pt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Yr(e);
  var s = e.parent;
  s !== null && s.first !== null && Xr(e), I && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(ke, "destroy_effect");
function Qr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Cn(e);
    e.remove(), e = n;
  }
}
r(Qr, "remove_effect_dom");
function Xr(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(Xr, "unlink_effect");
function Rt(e, t, n = !0) {
  var a = [];
  Zr(e, a, !0);
  var s = /* @__PURE__ */ r(() => {
    n && ke(e), t && t();
  }, "fn"), i = a.length;
  if (i > 0) {
    var o = /* @__PURE__ */ r(() => --i || s(), "check");
    for (var c of a)
      c.out(o);
  } else
    s();
}
r(Rt, "pause_effect");
function Zr(e, t, n) {
  if ((e.f & Ce) === 0) {
    e.f ^= Ce;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & cn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & $e) !== 0 && (e.f & _t) !== 0;
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
  if ((e.f & Ce) !== 0) {
    e.f ^= Ce, (e.f & de) === 0 && (ue(e, me), Ge(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & cn) !== 0 || (n.f & $e) !== 0;
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
      var s = n === a ? null : /* @__PURE__ */ Cn(n);
      t.append(n), n = s;
    }
}
r(ei, "move_effect");
let jn = !1, Bt = !1;
function ir(e) {
  Bt = e;
}
r(ir, "set_is_destroying_effect");
let $ = null, Ye = !1;
function Ue(e) {
  $ = e;
}
r(Ue, "set_active_reaction");
let te = null;
function Je(e) {
  te = e;
}
r(Je, "set_active_effect");
let ze = null;
function ti(e) {
  $ !== null && (ze === null ? ze = [e] : ze.push(e));
}
r(ti, "push_reaction_value");
let xe = null, Ie = 0, Oe = null;
function As(e) {
  Oe = e;
}
r(As, "set_untracked_writes");
let ni = 1, Dt = 0, Ft = Dt;
function sr(e) {
  Ft = e;
}
r(sr, "set_update_version");
function ai() {
  return ++ni;
}
r(ai, "increment_write_version");
function Dn(e) {
  var t = e.f;
  if ((t & me) !== 0)
    return !0;
  if (t & be && (e.f &= ~Nt), (t & Qe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (Dn(
        /** @type {Derived} */
        i
      ) && Fr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & je) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ve === null && ue(e, de);
  }
  return !1;
}
r(Dn, "is_dirty");
function ri(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(ze !== null && jt.call(ze, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & be) !== 0 ? ri(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ue(i, me) : (i.f & de) !== 0 && ue(i, Qe), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
r(ri, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = xe, n = Ie, a = Oe, s = $, i = ze, o = he, c = Ye, l = Ft, f = e.f;
  xe = /** @type {null | Value[]} */
  null, Ie = 0, Oe = null, $ = (f & ($e | Kt)) === 0 ? e : null, ze = null, un(e.ctx), Ye = !1, Ft = ++Dt, e.ac !== null && (ea(() => {
    e.ac.abort(Qt);
  }), e.ac = null);
  try {
    e.f |= ma;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d(), v = e.deps, p = re?.is_fork;
    if (xe !== null) {
      var E;
      if (p || Bn(e, Ie), v !== null && Ie > 0)
        for (v.length = Ie + xe.length, E = 0; E < xe.length; E++)
          v[Ie + E] = xe[E];
      else
        e.deps = v = xe;
      if (Ua() && (e.f & je) !== 0)
        for (E = Ie; E < v.length; E++)
          (v[E].reactions ??= []).push(e);
    } else !p && v !== null && Ie < v.length && (Bn(e, Ie), v.length = Ie);
    if (Tr() && Oe !== null && !Ye && v !== null && (e.f & (be | Qe | me)) === 0)
      for (E = 0; E < /** @type {Source[]} */
      Oe.length; E++)
        ri(
          Oe[E],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Dt++, s.deps !== null)
        for (let T = 0; T < n; T += 1)
          s.deps[T].rv = Dt;
      if (t !== null)
        for (const T of t)
          T.rv = Dt;
      Oe !== null && (a === null ? a = Oe : a.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & yt) !== 0 && (e.f ^= yt), _;
  } catch (T) {
    return Ar(T);
  } finally {
    e.f ^= ma, xe = t, Ie = n, Oe = a, $ = s, ze = i, un(o), Ye = c, Ft = l;
  }
}
r(Ia, "update_reaction");
function Cs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = ki.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xe === null || !jt.call(xe, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & je) !== 0 && (i.f ^= je, i.f &= ~Nt), Pa(i), Ta(i), Bn(i, 0);
  }
}
r(Cs, "remove_reaction");
function Bn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Cs(e, n[a]);
}
r(Bn, "remove_reactions");
function xn(e) {
  var t = e.f;
  if ((t & pt) === 0) {
    ue(e, de);
    var n = te, a = jn;
    if (te = e, jn = !0, I) {
      var s = An;
      er(e.component_function);
      var i = (
        /** @type {any} */
        Sn
      );
      Un(e.dev_stack ?? Sn);
    }
    try {
      (t & (_t | pr)) !== 0 ? Is(e) : Jr(e), Yr(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ni;
      var c;
      I && Gi && (e.f & me) !== 0 && e.deps;
    } finally {
      jn = a, te = n, I && (er(s), Un(i));
    }
  }
}
r(xn, "update_effect");
async function Ds() {
  await Promise.resolve(), ts();
}
r(Ds, "tick");
function u(e) {
  var t = e.f, n = (t & be) !== 0;
  if ($ !== null && !Ye) {
    var a = te !== null && (te.f & pt) !== 0;
    if (!a && (ze === null || !jt.call(ze, e))) {
      var s = $.deps;
      if (($.f & ma) !== 0)
        e.rv < Dt && (e.rv = Dt, xe === null && s !== null && s[Ie] === e ? Ie++ : xe === null ? xe = [e] : xe.push(e));
      else {
        ($.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : jt.call(i, $) || i.push($);
      }
    }
  }
  if (I && cs.delete(e), Bt && St.has(e))
    return St.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Bt) {
      var c = o.v;
      return ((o.f & de) === 0 && o.reactions !== null || si(o)) && (c = Fa(o)), St.set(o, c), c;
    }
    var l = (o.f & je) === 0 && !Ye && $ !== null && (jn || ($.f & je) !== 0), f = o.deps === null;
    Dn(o) && (l && (o.f |= je), Fr(o)), l && !f && ii(o);
  }
  if (Ve?.has(e))
    return Ve.get(e);
  if ((e.f & yt) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function ii(e) {
  if (e.deps !== null) {
    e.f |= je;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & be) !== 0 && (t.f & je) === 0 && ii(
        /** @type {Derived} */
        t
      );
  }
}
r(ii, "reconnect");
function si(e) {
  if (e.v === _e) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (St.has(t) || (t.f & be) !== 0 && si(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(si, "depends_on_old_values");
function oi(e) {
  var t = Ye;
  try {
    return Ye = !0, e();
  } finally {
    Ye = t;
  }
}
r(oi, "untrack");
const li = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Ms(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || pn.call(t, i), !i.cancelBubble)
      return ea(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Ms, "create_event");
function ut(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Ms(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Kr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(ut, "event");
function De(e) {
  for (var t = 0; t < e.length; t++)
    li.add(e[t]);
  for (var n of Aa)
    n(e);
}
r(De, "delegate");
let or = null;
function pn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  or = e;
  var o = 0, c = or === e && e.__root;
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
    zt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = $, _ = te;
    Ue(null), Je(null);
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
      e.__root = t, delete e.currentTarget, Ue(d), Je(_);
    }
  }
}
r(pn, "handle_event_propagation");
function ci(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(ci, "create_fragment_from_html");
function qn(e, t) {
  var n = (
    /** @type {Effect} */
    te
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(qn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ci(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ gt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || za ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      qn(c, l);
    } else
      qn(o, o);
    return o;
  };
}
r(R, "from_html");
function va() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = xt();
  return e.append(t, n), qn(t, n), e;
}
r(va, "comment");
function H(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(H, "append");
const Ws = ["touchstart", "touchmove"];
function Os(e) {
  return Ws.includes(e);
}
r(Os, "is_passive_event");
function W(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(W, "set_text");
function Ls(e, t) {
  return Hs(e, t);
}
r(Ls, "mount");
const Yt = /* @__PURE__ */ new Map();
function Hs(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ps();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((_) => {
    for (var v = 0; v < _.length; v++) {
      var p = _[v];
      if (!c.has(p)) {
        c.add(p);
        var E = Os(p);
        t.addEventListener(p, pn, { passive: E });
        var T = Yt.get(p);
        T === void 0 ? (document.addEventListener(p, pn, { passive: E }), Yt.set(p, 1)) : Yt.set(p, T + 1);
      }
    }
  }, "event_handle");
  l(Yn(li)), Aa.add(l);
  var f = void 0, d = Ns(() => {
    var _ = n ?? t.appendChild(xt());
    return rs(
      /** @type {TemplateNode} */
      _,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (v) => {
        ye({});
        var p = (
          /** @type {ComponentContext} */
          he
        );
        i && (p.c = i), s && (a.$$events = s), f = e(v, a) || {}, we();
      }
    ), () => {
      for (var v of c) {
        t.removeEventListener(v, pn);
        var p = (
          /** @type {number} */
          Yt.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, pn), Yt.delete(v)) : Yt.set(v, p);
      }
      Aa.delete(l), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Ca.set(f, d), f;
}
r(Hs, "_mount");
let Ca = /* @__PURE__ */ new WeakMap();
function Ps(e, t) {
  const n = Ca.get(e);
  return n ? (Ca.delete(e), n(t)) : (I && ($t in e ? Ki() : qi()), Promise.resolve());
}
r(Ps, "unmount");
var qe, ot, Ae, Pt, Tn, In, Gn;
const Ga = class Ga {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    We(this, "anchor");
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
    V(this, ot, /* @__PURE__ */ new Map());
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
    V(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    V(this, Tn, !0);
    V(this, In, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        re
      );
      if (h(this, qe).has(t)) {
        var n = (
          /** @type {Key} */
          h(this, qe).get(t)
        ), a = h(this, ot).get(n);
        if (a)
          qa(a), h(this, Pt).delete(n);
        else {
          var s = h(this, Ae).get(n);
          s && (h(this, ot).set(n, s.effect), h(this, Ae).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of h(this, qe)) {
          if (h(this, qe).delete(i), i === t)
            break;
          const c = h(this, Ae).get(o);
          c && (ke(c.effect), h(this, Ae).delete(o));
        }
        for (const [i, o] of h(this, ot)) {
          if (i === n || h(this, Pt).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(h(this, qe).values()).includes(i)) {
              var f = document.createDocumentFragment();
              ei(o, f), f.append(xt()), h(this, Ae).set(i, { effect: o, fragment: f });
            } else
              ke(o);
            h(this, Pt).delete(i), h(this, ot).delete(i);
          }, "on_destroy");
          h(this, Tn) || !a ? (h(this, Pt).add(i), Rt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    V(this, Gn, /* @__PURE__ */ r((t) => {
      h(this, qe).delete(t);
      const n = Array.from(h(this, qe).values());
      for (const [a, s] of h(this, Ae))
        n.includes(a) || (ke(s.effect), h(this, Ae).delete(a));
    }, "#discard"));
    this.anchor = t, G(this, Tn, n);
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
    ), s = qr();
    if (n && !h(this, ot).has(t) && !h(this, Ae).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = xt();
        i.append(o), h(this, Ae).set(t, {
          effect: Re(() => n(o)),
          fragment: i
        });
      } else
        h(this, ot).set(
          t,
          Re(() => n(this.anchor))
        );
    if (h(this, qe).set(a, t), s) {
      for (const [c, l] of h(this, ot))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of h(this, Ae))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(h(this, In)), a.ondiscard(h(this, Gn));
    } else
      h(this, In).call(this);
  }
};
qe = new WeakMap(), ot = new WeakMap(), Ae = new WeakMap(), Pt = new WeakMap(), Tn = new WeakMap(), In = new WeakMap(), Gn = new WeakMap(), r(Ga, "BranchManager");
let Da = Ga;
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
          Fi(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var cl = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function ee(e, t, n = !1) {
  var a = new Da(e), s = n ? cn : 0;
  function i(o, c) {
    a.ensure(o, c);
  }
  r(i, "update_branch"), Ba(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, i(l, c);
    }), o || i(!1, null);
  }, s);
}
r(ee, "if_block");
function Xe(e, t) {
  return t;
}
r(Xe, "index");
function Rs(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, c = 0; c < s; c++) {
    let _ = t[c];
    Rt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ma(Yn(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
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
    Ma(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Rs, "pause_effects");
function Ma(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    ke(e[n], t);
}
r(Ma, "destroy_effects");
var lr;
function Ze(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(xt());
  }
  var d = null, _ = /* @__PURE__ */ fs(() => {
    var O = n();
    return hr(O) ? O : O == null ? [] : Yn(O);
  }), v, p = !0;
  function E() {
    y.fallback = d, Fs(y, v, o, t, a), d !== null && (v.length === 0 ? (d.f & vt) === 0 ? qa(d) : (d.f ^= vt, yn(d, null, o)) : Rt(d, () => {
      d = null;
    }));
  }
  r(E, "commit");
  var T = Ba(() => {
    v = /** @type {V[]} */
    u(_);
    for (var O = v.length, ie = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      re
    ), M = qr(), F = 0; F < O; F += 1) {
      var g = v[F], w = a(g, F), k = p ? null : c.get(w);
      k ? (k.v && vn(k.v, g), k.i && vn(k.i, F), M && S.unskip_effect(k.e)) : (k = js(
        c,
        p ? o : lr ??= xt(),
        g,
        w,
        F,
        s,
        t,
        n
      ), p || (k.e.f |= vt), c.set(w, k)), ie.add(w);
    }
    if (O === 0 && i && !d && (p ? d = Re(() => i(o)) : (d = Re(() => i(lr ??= xt())), d.f |= vt)), O > ie.size && (I ? zs(v, a) : Er("", "", "")), !p)
      if (M) {
        for (const [A, j] of c)
          ie.has(A) || S.skip_effect(j.e);
        S.oncommit(E), S.ondiscard(() => {
        });
      } else
        E();
    u(_);
  }), y = { effect: T, items: c, outrogroups: null, fallback: d };
  p = !1;
}
r(Ze, "each");
function gn(e) {
  for (; e !== null && (e.f & $e) === 0; )
    e = e.next;
  return e;
}
r(gn, "skip_to_branch");
function Fs(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = gn(e.effect.first), f, d = null, _, v = [], p = [], E, T, y, O;
  if (i)
    for (O = 0; O < o; O += 1)
      E = t[O], T = s(E, O), y = /** @type {EachItem} */
      c.get(T).e, (y.f & vt) === 0 && (y.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(y));
  for (O = 0; O < o; O += 1) {
    if (E = t[O], T = s(E, O), y = /** @type {EachItem} */
    c.get(T).e, e.outrogroups !== null)
      for (const j of e.outrogroups)
        j.pending.delete(y), j.done.delete(y);
    if ((y.f & vt) !== 0)
      if (y.f ^= vt, y === l)
        yn(y, null, n);
      else {
        var ie = d ? d.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), ht(e, d, y), ht(e, y, ie), yn(y, ie, n), d = y, v = [], p = [], l = gn(d.next);
        continue;
      }
    if ((y.f & Ce) !== 0 && (qa(y), i && (y.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (v.length < p.length) {
          var S = p[0], M;
          d = S.prev;
          var F = v[0], g = v[v.length - 1];
          for (M = 0; M < v.length; M += 1)
            yn(v[M], S, n);
          for (M = 0; M < p.length; M += 1)
            f.delete(p[M]);
          ht(e, F.prev, g.next), ht(e, d, F), ht(e, g, S), l = S, d = g, O -= 1, v = [], p = [];
        } else
          f.delete(y), yn(y, l, n), ht(e, y.prev, y.next), ht(e, y, d === null ? e.effect.first : d.next), ht(e, d, y), d = y;
        continue;
      }
      for (v = [], p = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = gn(l.next);
      if (l === null)
        continue;
    }
    (y.f & vt) === 0 && v.push(y), d = y, l = gn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const j of e.outrogroups)
      j.pending.size === 0 && (Ma(Yn(j.done)), e.outrogroups?.delete(j));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var w = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Ce) === 0 && w.push(y);
    for (; l !== null; )
      (l.f & Ce) === 0 && l !== e.fallback && w.push(l), l = gn(l.next);
    var k = w.length;
    if (k > 0) {
      var A = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (O = 0; O < k; O += 1)
          w[O].nodes?.a?.measure();
        for (O = 0; O < k; O += 1)
          w[O].nodes?.a?.fix();
      }
      Rs(e, w, A);
    }
  }
  i && wt(() => {
    if (_ !== void 0)
      for (y of _)
        y.nodes?.a?.apply();
  });
}
r(Fs, "reconcile");
function js(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ _s(n, !1, !1) : Ut(n) : null, f = (o & 2) !== 0 ? Ut(s) : null;
  return I && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Re(() => (i(t, l ?? n, f ?? s, c), () => {
      e.delete(a);
    }))
  };
}
r(js, "create_item");
function yn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & vt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cn(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(yn, "move");
function ht(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(ht, "link");
function zs(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), c = String(s);
      let l = String(i);
      l.startsWith("[object ") && (l = null), Er(o, c, l);
    }
    n.set(i, s);
  }
}
r(zs, "validate_each_keys");
function Us(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  J(() => {
    var c = (
      /** @type {Effect} */
      te
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (Qr(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = ci(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ gt(f)), qn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ gt(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ gt(f)
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
          var c = o + i;
          (o === 0 || cr.includes(a[o - 1])) && (c === a.length || cr.includes(a[c])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(c + 1) : o = c;
        }
  }
  return a === "" ? null : a;
}
r(Bs, "to_class");
function qs(e, t) {
  return e == null ? null : String(e);
}
r(qs, "to_style");
function qt(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = Bs(n, a, i);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var f = !!i[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return i;
}
r(qt, "set_class");
function Pn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var i = qs(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
r(Pn, "set_style");
const Ks = /* @__PURE__ */ Symbol("is custom element"), Vs = /* @__PURE__ */ Symbol("is html");
function Fe(e, t) {
  var n = fi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(Fe, "set_value");
function C(e, t, n, a) {
  var s = fi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Di] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(C, "set_attribute");
function fi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ks]: e.nodeName.includes("-"),
      [Vs]: e.namespaceURI === xi
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
    I && e.type === "checkbox" && $a();
    var i = s ? e.defaultValue : e.value;
    if (i = _a(e) ? ha(i) : i, n(i), re !== null && a.add(re), await Ds(), i !== (i = t())) {
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
  oi(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), re !== null && a.add(re)), Gr(() => {
    I && e.type === "checkbox" && $a();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        pa ?? re
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
const Jt = [];
function Ys(e, t) {
  return {
    subscribe: Js(e, t).subscribe
  };
}
r(Ys, "readable");
function Js(e, t = ca) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(c) {
    if (xr(e, c) && (e = c, n)) {
      const l = !Jt.length;
      for (const f of a)
        f[1](), Jt.push(f, e);
      if (l) {
        for (let f = 0; f < Jt.length; f += 2)
          Jt[f][0](Jt[f + 1]);
        Jt.length = 0;
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
  function o(c, l = ca) {
    const f = [c, l];
    return a.add(f), a.size === 1 && (n = t(s, i) || ca), c(
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
      V(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: _ } = d;
          return _ && l.push(_.toUpperCase()), l;
        },
        []
      ));
      V(this, a, /* @__PURE__ */ Pe(Xt({})));
      V(this, s, {});
    }
    get $state() {
      return u(h(this, a));
    }
    set $state(l) {
      Ke(h(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && G(this, s, Ls(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Ps(h(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: d } = f;
      if (!d) return;
      const _ = d;
      if (!h(this, n).includes(_.tagName)) return;
      const v = _._getValue();
      this.document.update({ [_.name]: v });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), We(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(Qs, "SvelteApplicationMixin");
const Xs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Xs);
function N(e) {
  return game.i18n?.localize(e) ?? e;
}
r(N, "localize");
function _n(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(_n, "format");
var Zs = /* @__PURE__ */ R("<span> </span>"), $s = /* @__PURE__ */ R('<span style="color: var(--nos-text-secondary, #888)">—</span>'), eo = /* @__PURE__ */ R('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function to(e, t) {
  ye(t, !0);
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
  var i = eo(), o = b(i);
  o.__click = a;
  var c = b(o), l = m(o, 2), f = b(l), d = b(f), _ = m(f, 2);
  _.__change = ({ target: A }) => t.actor.update({ name: A.value });
  var v = m(l, 2), p = b(v), E = b(p), T = m(p, 2), y = b(T);
  {
    var O = /* @__PURE__ */ r((A) => {
      var j = Zs(), B = b(j);
      J(() => W(B, t.metaData)), H(A, j);
    }, "consequent"), ie = /* @__PURE__ */ r((A) => {
      var j = $s();
      H(A, j);
    }, "alternate");
    ee(y, (A) => {
      t.metaData ? A(O) : A(ie, !1);
    });
  }
  var S = m(y, 2);
  S.__click = () => t.actor.editMetadata();
  var M = m(v, 2), F = b(M), g = b(F), w = m(F, 2), k = b(w);
  J(
    (A, j, B, L, q) => {
      C(c, "src", u(n)), C(c, "alt", t.actor.reactive.name), W(d, A), Fe(_, t.actor.reactive.name), _.disabled = !t.editingEnabled, W(E, j), C(S, "aria-label", B), C(S, "data-tooltip", L), S.disabled = !t.editingEnabled, W(g, q), W(k, u(s));
    },
    [
      () => N("NWS.CharacterName"),
      () => N("NWS.AncestryClassLevel"),
      () => N("NWS.EditMetadata"),
      () => N("NWS.EditMetadata"),
      () => N("NWS.HitDie")
    ]
  ), H(e, i), we();
}
r(to, "HeaderRow");
De(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ka, "formatModifier");
var no = /* @__PURE__ */ R('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ao(e, t) {
  ye(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ z(() => N(n[t.abilityKey])), s = /* @__PURE__ */ z(() => _n("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ z(() => _n("NWS.RollSave", { name: u(a) }));
  var o = no(), c = b(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = b(f), _ = b(d), v = m(f, 2), p = b(v);
  J(
    (E) => {
      l = qt(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), C(c, "data-tooltip", u(i)), C(c, "aria-label", u(i)), C(f, "data-tooltip", u(s)), C(f, "aria-label", u(s)), W(_, E), W(p, u(a));
    },
    [() => Ka(t.ability.mod)]
  ), H(e, o), we();
}
r(ao, "AbilityBox");
De(["click"]);
var ro = /* @__PURE__ */ R('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), io = /* @__PURE__ */ R('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  ye(t, !0);
  var n = io(), a = b(n), s = b(a), i = m(a, 2);
  Ze(i, 21, () => ({ length: t.wounds.max }), Xe, (o, c, l) => {
    var f = ro();
    let d;
    f.__click = () => t.toggleWounds(l + 1), J(
      (_, v) => {
        d = qt(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), C(f, "data-tooltip", _), C(f, "aria-label", v);
      },
      [
        () => _n("NWS.ToggleWound", { n: l + 1 }),
        () => _n("NWS.ToggleWound", { n: l + 1 })
      ]
    ), H(o, f);
  }), J((o) => W(s, o), [() => N("NWS.Wounds")]), H(e, n), we();
}
r(so, "WoundTracker");
De(["click"]);
var oo = /* @__PURE__ */ R('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ R('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ R('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ R('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function fo(e, t) {
  ye(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.movement);
  var l = uo(), f = b(l), d = b(f);
  Ze(d, 17, () => n, Xe, (oe, Me) => {
    ao(oe, {
      get abilityKey() {
        return u(Me);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(Me)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(Me)];
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
      var Me = oo(), mn = kt(Me);
      mn.__click = () => t.actor.configureSavingThrows();
      var On = m(mn, 2);
      On.__click = () => t.actor.configureAbilityScores(), J(
        (sa, oa) => {
          C(mn, "data-tooltip", sa), C(On, "data-tooltip", oa);
        },
        [
          () => N("NWS.ConfigureSavingThrows"),
          () => N("NWS.ConfigureAbilityScores")
        ]
      ), H(oe, Me);
    }, "consequent");
    ee(_, (oe) => {
      t.editingEnabled && oe(v);
    });
  }
  var p = m(f, 2), E = b(p), T = b(E), y = b(T), O = m(b(y), 2), ie = b(O), S = m(O, 2), M = b(S), F = m(y, 2), g = m(b(F), 2), w = b(g), k = m(g, 2);
  k.__change = ({ target: oe }) => t.updateTempHP(Number(oe.value));
  var A = m(T, 2);
  let j;
  var B = b(A), L = b(B), q = b(L);
  {
    var Q = /* @__PURE__ */ r((oe) => {
      var Me = lo();
      H(oe, Me);
    }, "consequent_1"), K = /* @__PURE__ */ r((oe) => {
      var Me = co();
      H(oe, Me);
    }, "alternate");
    ee(q, (oe) => {
      t.isBloodied ? oe(Q) : oe(K, !1);
    });
  }
  var ne = m(L, 2), Z = b(ne), X = m(ne, 2), Y = b(X);
  Y.__change = ({ target: oe }) => t.updateCurrentHP(Number(oe.value));
  var se = m(Y, 4);
  se.__change = ({ target: oe }) => t.updateMaxHP(Number(oe.value));
  var x = m(X, 2);
  x.__click = () => t.actor.configureHitPoints();
  var P = m(B, 2), U = b(P), ae = b(U), D = m(U, 2), fe = b(D), ge = m(D, 2), Ne = b(ge);
  Ne.__change = ({ target: oe }) => t.updateCurrentMana(Number(oe.value));
  var Be = m(Ne, 4);
  Be.__change = ({ target: oe }) => t.updateMaxMana(Number(oe.value));
  var ce = m(A, 2);
  ce.__click = () => t.rollHitDice();
  var le = m(b(ce), 2), et = b(le), Te = m(le, 2), Vt = b(Te), It = m(Te, 2);
  It.__click = (oe) => {
    oe.stopPropagation(), t.actor.configureHitDice();
  };
  var bn = m(ce, 2), Gt = b(bn);
  Gt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Mn = m(b(Gt), 2), ta = b(Mn), na = m(Mn, 2), aa = b(na), ra = m(Gt, 2), Wn = m(b(ra), 2), vi = b(Wn), Ya = m(Wn, 2), _i = b(Ya), ia = m(Ya, 2);
  ia.__click = () => t.actor.configureMovement();
  var hi = m(p, 2);
  so(hi, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), J(
    (oe, Me, mn, On, sa, oa, bi, mi, gi, pi, yi, wi) => {
      W(ie, oe), W(M, u(i).value), W(w, Me), Fe(k, u(s).temp ?? 0), j = qt(A, 1, "nos-combat__pair", null, j, { "nos-hp--bloodied": t.isBloodied }), W(Z, mn), Fe(Y, u(s).value), Fe(se, u(s).max), se.disabled = !t.editingEnabled, C(x, "data-tooltip", On), x.disabled = !t.editingEnabled, Pn(ae, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Pn(D, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), W(fe, sa), Fe(Ne, t.mana?.current ?? 0), Pn(Ne, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Fe(Be, t.mana?.max || t.mana?.baseMax || 0), Be.disabled = !t.editingEnabled, Pn(Be, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), W(et, oa), W(Vt, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), C(It, "data-tooltip", bi), It.disabled = !t.editingEnabled, C(Gt, "data-tooltip", mi), W(ta, gi), W(aa, pi), W(vi, yi), W(_i, u(c).walk), C(ia, "data-tooltip", wi), ia.disabled = !t.editingEnabled;
    },
    [
      () => N("NWS.Armor"),
      () => N("NWS.TempHP"),
      () => N("NWS.HitPoints"),
      () => N("NWS.ConfigureHitPoints"),
      () => N("NWS.Mana"),
      () => N("NWS.HitDice"),
      () => N("NWS.ConfigureHitDice"),
      () => N("NWS.RollInitiative"),
      () => N("NWS.Initiative"),
      () => Ka(u(o).mod),
      () => N("NWS.Speed"),
      () => N("NWS.ConfigureMovement")
    ]
  ), H(e, l), we();
}
r(fo, "StatsRow");
De(["click", "change"]);
var vo = /* @__PURE__ */ R('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  ye(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ z(() => n[t.skillKey]), o = /* @__PURE__ */ z(() => N(a[u(i)])), c = /* @__PURE__ */ z(() => N(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = b(l), d = b(f), _ = m(f, 2), v = b(_), p = m(_, 2), E = b(p);
  J(
    (T, y) => {
      C(l, "data-tooltip", T), W(d, u(o)), W(v, y), W(E, u(c));
    },
    [
      () => _n("NWS.RollSkill", { name: u(c) }),
      () => Ka(t.skill.mod)
    ]
  ), H(e, l), we();
}
r(_o, "SkillCell");
De(["click"]);
var ho = /* @__PURE__ */ R('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), bo = /* @__PURE__ */ R('<section class="nos-skills-row"><!> <!></section>');
function mo(e, t) {
  ye(t, !0);
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
  var a = bo(), s = b(a);
  Ze(s, 17, () => n, Xe, (c, l) => {
    _o(c, {
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
      var l = ho();
      l.__click = () => t.actor.configureSkills(), J((f) => C(l, "data-tooltip", f), [() => N("NWS.ConfigureSkills")]), H(c, l);
    }, "consequent");
    ee(i, (c) => {
      t.editingEnabled && c(o);
    });
  }
  H(e, a), we();
}
r(mo, "SkillsRow");
De(["click"]);
var go = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ R('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ R('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ R('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Co = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Do = /* @__PURE__ */ R('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Mo = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ R('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ R("<!> <!> <!> <!> <!>", 1);
function fr(e, t) {
  ye(t, !0);
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
    const k = { type: "Item", uuid: w.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  r(d, "onDragStart");
  var _ = Oo(), v = kt(_);
  {
    var p = /* @__PURE__ */ r((g) => {
      var w = Eo(), k = b(w);
      {
        var A = /* @__PURE__ */ r((L) => {
          var q = po(), Q = b(q), K = b(Q), ne = m(Q, 2), Z = b(ne), X = m(Z, 2);
          X.__click = () => l(u(s).id);
          var Y = b(X), se = m(X, 2);
          {
            var x = /* @__PURE__ */ r((P) => {
              var U = go(), ae = b(U);
              ae.__click = () => l(u(s).id);
              var D = m(ae, 2);
              D.__click = () => f(u(s).id), H(P, U);
            }, "consequent");
            ee(se, (P) => {
              t.editingEnabled && P(x);
            });
          }
          J(
            (P) => {
              W(K, P), C(Z, "src", u(s).img), C(Z, "alt", u(s).name), W(Y, u(s).name);
            },
            [() => N("NWS.Ancestry")]
          ), ut("dragstart", ne, (P) => d(P, u(s))), H(L, q);
        }, "consequent_1");
        ee(k, (L) => {
          u(s) && L(A);
        });
      }
      var j = m(k, 2);
      {
        var B = /* @__PURE__ */ r((L) => {
          var q = wo(), Q = b(q), K = b(Q), ne = m(Q, 2), Z = b(ne), X = m(Z, 2);
          X.__click = () => l(u(i).id);
          var Y = b(X), se = m(X, 2);
          {
            var x = /* @__PURE__ */ r((P) => {
              var U = yo(), ae = b(U);
              ae.__click = () => l(u(i).id);
              var D = m(ae, 2);
              D.__click = () => f(u(i).id), H(P, U);
            }, "consequent_2");
            ee(se, (P) => {
              t.editingEnabled && P(x);
            });
          }
          J(
            (P) => {
              W(K, P), C(Z, "src", u(i).img), C(Z, "alt", u(i).name), W(Y, u(i).name);
            },
            [() => N("NWS.Background")]
          ), ut("dragstart", ne, (P) => d(P, u(i))), H(L, q);
        }, "consequent_3");
        ee(j, (L) => {
          u(i) && L(B);
        });
      }
      H(g, w);
    }, "consequent_4");
    ee(v, (g) => {
      (u(s) || u(i)) && g(p);
    });
  }
  var E = m(v, 2);
  {
    var T = /* @__PURE__ */ r((g) => {
      var w = No(), k = b(w), A = b(k), j = m(k, 2), B = b(j), L = m(B, 2);
      L.__click = () => l(u(o).id);
      var q = b(L), Q = m(L, 2);
      {
        var K = /* @__PURE__ */ r((X) => {
          var Y = So(), se = b(Y);
          se.__click = () => l(u(o).id);
          var x = m(se, 2);
          x.__click = () => f(u(o).id), H(X, Y);
        }, "consequent_5");
        ee(Q, (X) => {
          t.editingEnabled && X(K);
        });
      }
      var ne = m(j, 2);
      {
        var Z = /* @__PURE__ */ r((X) => {
          var Y = ko(), se = b(Y), x = m(se, 2);
          x.__click = () => l(u(c).id);
          var P = b(x), U = m(x, 2);
          {
            var ae = /* @__PURE__ */ r((D) => {
              var fe = xo(), ge = b(fe);
              ge.__click = () => l(u(c).id);
              var Ne = m(ge, 2);
              Ne.__click = () => f(u(c).id), H(D, fe);
            }, "consequent_6");
            ee(U, (D) => {
              t.editingEnabled && D(ae);
            });
          }
          J(() => {
            C(se, "src", u(c).img), C(se, "alt", u(c).name), W(P, u(c).name);
          }), ut("dragstart", Y, (D) => d(D, u(c))), H(X, Y);
        }, "consequent_7");
        ee(ne, (X) => {
          u(c) && X(Z);
        });
      }
      J(
        (X, Y) => {
          W(A, X), C(B, "src", u(o).img), C(B, "alt", u(o).name), W(q, `${u(o).name ?? ""} (${Y ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => N("NWS.Class"), () => N("NWS.Level")]
      ), ut("dragstart", j, (X) => d(X, u(o))), H(g, w);
    }, "consequent_8");
    ee(E, (g) => {
      u(o) && g(T);
    });
  }
  var y = m(E, 2);
  {
    var O = /* @__PURE__ */ r((g) => {
      var w = Ao(), k = b(w), A = b(k), j = m(k, 2);
      Ze(j, 21, () => u(n), Xe, (B, L) => {
        var q = Io(), Q = b(q), K = m(Q, 2);
        K.__click = () => l(u(L).id);
        var ne = b(K), Z = m(K, 2);
        {
          var X = /* @__PURE__ */ r((Y) => {
            var se = To(), x = b(se);
            x.__click = () => l(u(L).id);
            var P = m(x, 2);
            P.__click = () => f(u(L).id), H(Y, se);
          }, "consequent_9");
          ee(Z, (Y) => {
            t.editingEnabled && Y(X);
          });
        }
        J(() => {
          C(Q, "src", u(L).img), C(Q, "alt", u(L).name), W(ne, u(L).name);
        }), ut("dragstart", q, (Y) => d(Y, u(L))), H(B, q);
      }), J((B) => W(A, B), [() => N("NWS.Features")]), H(g, w);
    }, "consequent_10");
    ee(y, (g) => {
      u(n).length > 0 && g(O);
    });
  }
  var ie = m(y, 2);
  {
    var S = /* @__PURE__ */ r((g) => {
      var w = Mo(), k = b(w), A = b(k), j = m(k, 2);
      Ze(j, 21, () => u(a), Xe, (B, L) => {
        var q = Do(), Q = b(q), K = m(Q, 2);
        K.__click = () => l(u(L).id);
        var ne = b(K), Z = m(K, 2);
        {
          var X = /* @__PURE__ */ r((Y) => {
            var se = Co(), x = b(se);
            x.__click = () => l(u(L).id);
            var P = m(x, 2);
            P.__click = () => f(u(L).id), H(Y, se);
          }, "consequent_11");
          ee(Z, (Y) => {
            t.editingEnabled && Y(X);
          });
        }
        J(() => {
          C(Q, "src", u(L).img), C(Q, "alt", u(L).name), W(ne, u(L).name);
        }), ut("dragstart", q, (Y) => d(Y, u(L))), H(B, q);
      }), J((B) => W(A, B), [() => N("NWS.Boons")]), H(g, w);
    }, "consequent_12");
    ee(ie, (g) => {
      u(a).length > 0 && g(S);
    });
  }
  var M = m(ie, 2);
  {
    var F = /* @__PURE__ */ r((g) => {
      var w = Wo(), k = b(w);
      J((A) => W(k, A), [() => N("NWS.DropFeaturesHere")]), H(g, w);
    }, "consequent_13");
    ee(M, (g) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && g(F);
    });
  }
  H(e, _), we();
}
r(fr, "FeaturesTab");
De(["click"]);
var Lo = /* @__PURE__ */ R('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ho = /* @__PURE__ */ R('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Po = /* @__PURE__ */ R('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ro = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ R('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ R('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ R('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ R('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function dr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ Pe(""), a = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, M) => (S.sort ?? 0) - (M.sort ?? 0))), s = /* @__PURE__ */ z(() => u(n) ? u(a).filter((S) => S.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ z(() => {
    const S = {};
    for (const M of u(s)) {
      const F = M.system?.tier ?? 0, g = M.system?.isUtility ?? !1, w = g ? "_utility" : `_tier_${F}`, k = g ? N("NWS.Utility") : _n("NWS.Tier", { n: F });
      S[w] ??= { label: k, spells: [] }, S[w].spells.push(M);
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
  var _ = Uo(), v = kt(_), p = m(b(v), 2), E = m(p, 2);
  {
    var T = /* @__PURE__ */ r((S) => {
      var M = Lo();
      M.__click = l;
      var F = m(b(M));
      J((g) => W(F, ` ${g ?? ""}`), [() => N("NWS.New")]), H(S, M);
    }, "consequent");
    ee(E, (S) => {
      t.editingEnabled && S(T);
    });
  }
  var y = m(v, 2);
  Ze(y, 17, () => u(i), Xe, (S, M) => {
    var F = /* @__PURE__ */ z(() => gr(u(M), 2));
    let g = /* @__PURE__ */ r(() => u(F)[1], "tier");
    var w = jo(), k = b(w), A = b(k), j = m(k, 2);
    Ze(j, 21, () => g().spells, Xe, (B, L) => {
      var q = Fo(), Q = b(q), K = m(Q, 2);
      K.__click = () => f(u(L).id);
      var ne = b(K), Z = m(ne);
      {
        var X = /* @__PURE__ */ r((D) => {
          var fe = Ho();
          J((ge) => C(fe, "data-tooltip", ge), [() => N("NWS.Concentration")]), H(D, fe);
        }, "consequent_1");
        ee(Z, (D) => {
          u(L).system?.concentration && D(X);
        });
      }
      var Y = m(Z, 2);
      {
        var se = /* @__PURE__ */ r((D) => {
          var fe = Po();
          J((ge) => C(fe, "data-tooltip", ge), [() => N("NWS.Utility")]), H(D, fe);
        }, "consequent_2");
        ee(Y, (D) => {
          u(L).system?.isUtility && D(se);
        });
      }
      var x = m(K, 2), P = b(x), U = m(x, 2);
      {
        var ae = /* @__PURE__ */ r((D) => {
          var fe = Ro(), ge = b(fe);
          ge.__click = () => o(u(L).id);
          var Ne = m(ge, 2);
          Ne.__click = () => c(u(L).id), H(D, fe);
        }, "consequent_3");
        ee(U, (D) => {
          t.editingEnabled && D(ae);
        });
      }
      J(() => {
        C(Q, "src", u(L).img), C(Q, "alt", u(L).name), W(ne, `${u(L).name ?? ""} `), W(P, u(L).system?.activationCost ?? "");
      }), ut("dragstart", q, (D) => d(D, u(L))), H(B, q);
    }), J(() => W(A, g().label)), H(S, w);
  });
  var O = m(y, 2);
  {
    var ie = /* @__PURE__ */ r((S) => {
      var M = zo(), F = b(M);
      J((g) => W(F, g), [() => N("NWS.DropSpellsHere")]), H(S, M);
    }, "consequent_4");
    ee(O, (S) => {
      u(a).length === 0 && S(ie);
    });
  }
  J((S) => C(p, "placeholder", S), [() => N("NWS.SearchSpells")]), di(p, () => u(n), (S) => Ke(n, S)), H(e, _), we();
}
r(dr, "SpellsTab");
De(["click"]);
var Bo = /* @__PURE__ */ R('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), qo = /* @__PURE__ */ R('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ko = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vo = /* @__PURE__ */ R('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Go = /* @__PURE__ */ R('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Yo = /* @__PURE__ */ R('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function vr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ Pe(""), a = /* @__PURE__ */ z(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((g) => g.type === "object").sort((g, w) => (g.sort ?? 0) - (w.sort ?? 0))), i = /* @__PURE__ */ z(() => u(n) ? u(s).filter((g) => g.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
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
    const k = u(a)[g]?.value ?? 0;
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, k + w)
    });
  }
  r(d, "adjustCurrency");
  function _(g, w) {
    t.actor.items.get(g)?.update({ "system.quantity": Number(w) });
  }
  r(_, "updateQuantity");
  function v(g, w) {
    const k = { type: "Item", uuid: w.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  r(v, "onDragStart");
  var p = Yo(), E = kt(p);
  Ze(E, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Xe, (g, w) => {
    var k = /* @__PURE__ */ z(() => gr(w, 2));
    let A = /* @__PURE__ */ r(() => u(k)[0], "type"), j = /* @__PURE__ */ r(() => u(k)[1], "labelKey");
    var B = Bo(), L = b(B), q = b(L), Q = m(L, 2);
    Q.__click = () => d(A(), -1);
    var K = m(Q, 2);
    K.__change = ({ target: Z }) => f(A(), Z.value);
    var ne = m(K, 2);
    ne.__click = () => d(A(), 1), J(
      (Z, X, Y) => {
        C(L, "for", `currency-${A() ?? ""}`), W(q, Z), C(Q, "aria-label", `-1 ${X ?? ""}`), C(K, "id", `currency-${A() ?? ""}`), Fe(K, u(a)[A()]?.value ?? 0), C(ne, "aria-label", `+1 ${Y ?? ""}`);
      },
      [
        () => N(j()),
        () => N(j()),
        () => N(j())
      ]
    ), H(g, B);
  });
  var T = m(E, 2), y = m(b(T), 2), O = m(y, 2);
  {
    var ie = /* @__PURE__ */ r((g) => {
      var w = qo();
      w.__click = l;
      var k = m(b(w));
      J((A) => W(k, ` ${A ?? ""}`), [() => N("NWS.New")]), H(g, w);
    }, "consequent");
    ee(O, (g) => {
      t.editingEnabled && g(ie);
    });
  }
  var S = m(T, 2);
  Ze(S, 21, () => u(i), Xe, (g, w) => {
    var k = Vo(), A = b(k), j = m(A, 2);
    j.__click = () => o(u(w).id);
    var B = b(j), L = m(j, 2);
    L.__change = ({ target: K }) => _(u(w).id, K.value);
    var q = m(L, 2);
    {
      var Q = /* @__PURE__ */ r((K) => {
        var ne = Ko(), Z = b(ne);
        Z.__click = () => o(u(w).id);
        var X = m(Z, 2);
        X.__click = () => c(u(w).id), H(K, ne);
      }, "consequent_1");
      ee(q, (K) => {
        t.editingEnabled && K(Q);
      });
    }
    J(() => {
      C(A, "src", u(w).img), C(A, "alt", u(w).name), W(B, u(w).name), Fe(L, u(w).system?.quantity ?? 1);
    }), ut("dragstart", k, (K) => v(K, u(w))), H(g, k);
  });
  var M = m(S, 2);
  {
    var F = /* @__PURE__ */ r((g) => {
      var w = Go(), k = b(w);
      J((A) => W(k, A), [() => N("NWS.DropInventoryHere")]), H(g, w);
    }, "consequent_2");
    ee(M, (g) => {
      u(s).length === 0 && g(F);
    });
  }
  J((g) => C(y, "placeholder", g), [() => N("NWS.SearchItems")]), di(y, () => u(n), (g) => Ke(n, g)), H(e, p), we();
}
r(vr, "InventoryTab");
De(["click", "change"]);
var Jo = /* @__PURE__ */ R(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function _r(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.system.details), a = /* @__PURE__ */ z(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ z(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ z(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ z(() => (u(a).weapons ?? []).join(", "));
  var c = Jo(), l = b(c), f = b(l), d = b(f), _ = m(f, 2);
  _.__change = ({ target: le }) => t.actor.update({ "system.details.age": le.value });
  var v = m(l, 2), p = b(v), E = b(p), T = m(p, 2);
  T.__change = ({ target: le }) => t.actor.update({ "system.details.gender": le.value });
  var y = m(v, 2), O = b(y), ie = b(O), S = m(O, 2);
  S.__change = ({ target: le }) => t.actor.update({ "system.details.height": le.value });
  var M = m(y, 2), F = b(M), g = b(F), w = m(F, 2);
  w.__change = ({ target: le }) => t.actor.update({ "system.details.weight": le.value });
  var k = m(M, 2), A = b(k), j = b(A), B = m(A, 2), L = b(B), q = m(B, 2);
  q.__click = () => t.actor.configureLanguageProficiencies();
  var Q = m(k, 2), K = b(Q), ne = b(K), Z = m(K, 2), X = b(Z), Y = m(Z, 2);
  Y.__click = () => t.actor.configureArmorProficiencies();
  var se = m(Q, 2), x = b(se), P = b(x), U = m(x, 2), ae = b(U), D = m(U, 2);
  D.__click = () => t.actor.configureWeaponProficiencies();
  var fe = m(se, 2), ge = b(fe), Ne = b(ge), Be = m(ge, 2), ce = b(Be);
  Us(ce, () => u(n).notes ?? ""), J(
    (le, et, Te, Vt, It, bn, Gt, Mn, ta, na, aa, ra, Wn) => {
      W(d, le), Fe(_, u(n).age ?? ""), _.disabled = !t.editingEnabled, W(E, et), Fe(T, u(n).gender ?? ""), T.disabled = !t.editingEnabled, W(ie, Te), Fe(S, u(n).height ?? ""), C(S, "placeholder", Vt), S.disabled = !t.editingEnabled, W(g, It), Fe(w, u(n).weight ?? ""), C(w, "placeholder", bn), w.disabled = !t.editingEnabled, W(j, Gt), W(L, u(s) || "—"), C(q, "data-tooltip", Mn), q.disabled = !t.editingEnabled, W(ne, ta), W(X, u(i) || "—"), C(Y, "data-tooltip", na), Y.disabled = !t.editingEnabled, W(P, aa), W(ae, u(o) || "—"), C(D, "data-tooltip", ra), D.disabled = !t.editingEnabled, W(Ne, Wn), C(Be, "contenteditable", t.editingEnabled ? "true" : "false");
    },
    [
      () => N("NWS.Age"),
      () => N("NWS.Gender"),
      () => N("NWS.Height"),
      () => N("NWS.Height"),
      () => N("NWS.Weight"),
      () => N("NWS.Weight"),
      () => N("NWS.Languages"),
      () => N("NWS.ConfigureLanguages"),
      () => N("NWS.ArmorProficiencies"),
      () => N("NWS.ConfigureArmorProficiencies"),
      () => N("NWS.WeaponProficiencies"),
      () => N("NWS.ConfigureWeaponProficiencies"),
      () => N("NWS.Notes")
    ]
  ), ut("blur", Be, ({ target: le }) => t.actor.update({ "system.details.notes": le.innerHTML })), H(e, c), we();
}
r(_r, "BioTab");
De(["change", "click"]);
var Qo = /* @__PURE__ */ R('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Xo = /* @__PURE__ */ R('<div class="nos-slot nos-slot--empty"> </div>'), Zo = /* @__PURE__ */ R("<!> <!>", 1);
function $o(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = Zo(), s = kt(a);
  Ze(s, 17, () => u(n), Xe, (c, l) => {
    var f = Qo(), d = b(f), _ = m(d, 2);
    _.__click = () => t.actor.activateItem(u(l).id);
    var v = b(_);
    J(() => {
      C(d, "src", u(l).img), C(d, "alt", u(l).name), C(_, "data-tooltip", u(l).name), W(v, u(l).name);
    }), H(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = Xo(), f = b(l);
      J((d) => W(f, d), [() => N("NWS.NoWeapons")]), H(c, l);
    }, "consequent");
    ee(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  H(e, a), we();
}
r($o, "InventorySlots");
De(["click"]);
var el = /* @__PURE__ */ R('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), tl = /* @__PURE__ */ R('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), nl = /* @__PURE__ */ R('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function al(e, t) {
  ye(t, !0);
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
  let a = /* @__PURE__ */ Pe("features"), s = /* @__PURE__ */ z(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ z(() => t.actor.reactive.system.inventory);
  var o = nl(), c = b(o);
  Ze(c, 21, () => n, Xe, (S, M) => {
    var F = el();
    let g;
    F.__click = () => Ke(a, u(M).name, !0);
    var w = b(F), k = m(w);
    J(
      (A) => {
        g = qt(F, 1, "nos-tab-btn", null, g, { "nos-tab-btn--active": u(a) === u(M).name }), qt(w, 1, u(M).icon), W(k, ` ${A ?? ""}`);
      },
      [() => N(u(M).labelKey)]
    ), H(S, F);
  });
  var l = m(c, 2), f = b(l);
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
    }, "consequent"), _ = /* @__PURE__ */ r((S) => {
      var M = va(), F = kt(M);
      {
        var g = /* @__PURE__ */ r((k) => {
          dr(k, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), w = /* @__PURE__ */ r((k) => {
          var A = va(), j = kt(A);
          {
            var B = /* @__PURE__ */ r((q) => {
              vr(q, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), L = /* @__PURE__ */ r((q) => {
              var Q = va(), K = kt(Q);
              {
                var ne = /* @__PURE__ */ r((Z) => {
                  _r(Z, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                ee(
                  K,
                  (Z) => {
                    u(a) === "bio" && Z(ne);
                  },
                  !0
                );
              }
              H(q, Q);
            }, "alternate");
            ee(
              j,
              (q) => {
                u(a) === "inventory" ? q(B) : q(L, !1);
              },
              !0
            );
          }
          H(k, A);
        }, "alternate_1");
        ee(
          F,
          (k) => {
            u(a) === "spells" ? k(g) : k(w, !1);
          },
          !0
        );
      }
      H(S, M);
    }, "alternate_2");
    ee(f, (S) => {
      u(a) === "features" ? S(d) : S(_, !1);
    });
  }
  var v = m(l, 2), p = b(v), E = b(p), T = m(v, 2), y = b(T);
  $o(y, {
    get actor() {
      return t.actor;
    }
  });
  var O = m(y, 2);
  {
    var ie = /* @__PURE__ */ r((S) => {
      var M = tl(), F = b(M);
      J(() => W(F, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), H(S, M);
    }, "consequent_4");
    ee(O, (S) => {
      u(s) && S(ie);
    });
  }
  J((S) => W(E, S), [() => N("NWS.Weapons")]), H(e, o), we();
}
r(al, "ContentArea");
De(["click"]);
var rl = /* @__PURE__ */ R('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function il(e, t) {
  ye(t, !0);
  var n = rl(), a = b(n);
  let s;
  a.__click = function(...d) {
    t.toggleEditingEnabled?.apply(this, d);
  };
  var i = b(a), o = m(a, 2);
  o.__click = () => t.actor.triggerLevelUp();
  var c = m(o, 2);
  c.__click = () => t.actor.triggerLevelDown();
  var l = m(c, 2);
  l.__click = () => t.actor.triggerRest({ restType: "field" });
  var f = m(l, 2);
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), J(
    (d, _, v, p, E, T, y, O, ie, S) => {
      s = qt(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), C(a, "aria-pressed", t.editingEnabled), C(a, "aria-label", d), C(a, "data-tooltip", _), qt(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), C(o, "aria-label", v), C(o, "data-tooltip", p), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, C(c, "aria-label", E), C(c, "data-tooltip", T), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, C(l, "aria-label", y), C(l, "data-tooltip", O), C(f, "aria-label", ie), C(f, "data-tooltip", S);
    },
    [
      () => t.editingEnabled ? N("NWS.DisableEditing") : N("NWS.EnableEditing"),
      () => t.editingEnabled ? N("NWS.EditingEnabled") : N("NWS.EditingLocked"),
      () => N("NWS.LevelUp"),
      () => N("NWS.LevelUp"),
      () => N("NWS.RevertLastLevelUp"),
      () => N("NWS.RevertLastLevelUp"),
      () => N("NWS.FieldRest"),
      () => N("NWS.FieldRest"),
      () => N("NWS.SafeRest"),
      () => N("NWS.SafeRest")
    ]
  ), H(e, n), we();
}
r(il, "SidebarControls");
De(["click"]);
var sl = /* @__PURE__ */ R('<div class="nos-sheet" style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ol(e, t) {
  ye(t, !0);
  const n = Rr((x) => {
    const P = {
      updateActor: Hooks.on("updateActor", (U, ae, D) => {
        D.diff !== !1 && U._id === t.actor.id && x();
      }),
      createItem: Hooks.on("createItem", (U) => {
        U?.actor?.id === t.actor.id && x();
      }),
      deleteItem: Hooks.on("deleteItem", (U) => {
        U?.actor?.id === t.actor.id && x();
      }),
      updateItem: Hooks.on("updateItem", (U, ae, D) => {
        D.diff !== !1 && U?.actor?.id === t.actor.id && x();
      })
    };
    return () => {
      Hooks.off("updateActor", P.updateActor), Hooks.off("createItem", P.createItem), Hooks.off("deleteItem", P.deleteItem), Hooks.off("updateItem", P.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(x, P) {
      if (P === "reactive")
        return n(), x;
      const U = x[P];
      return typeof U == "function" ? U.bind(x) : U;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(x, P) {
    return Math.clamp(0, Math.round(x / P * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(x, P, U, ae) {
    const D = [];
    return U && D.push(`${U.name} (${s[ae] ?? ae})`), x && (P ? D.push(`${x.name} (${P.name}, ${x.system.classLevel})`) : D.push(`${x.name} (${x.system.classLevel})`)), D.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(x, P) {
    if (!P) return x;
    const U = [4, 6, 8, 10, 12, 20], ae = U.indexOf(x);
    return ae === -1 ? x : U[Math.min(ae + P, U.length - 1)];
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
  function O(x) {
    const P = a.reactive.system.resources.mana, U = P.baseMax ?? 0, D = (P.max || U) - U, fe = Math.max(0, x - D);
    a.update({ "system.resources.mana.baseMax": fe });
  }
  r(O, "updateMaxMana");
  let ie = /* @__PURE__ */ z(() => {
    const x = a.reactive.system.attributes.hitDice, P = a.reactive.system.attributes.bonusHitDice ?? [], U = a.reactive.items.filter((ce) => ce.type === "class"), ae = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, D = {};
    for (const ce of U) {
      const le = ce.system.hitDieSize, et = f(le, ae), Te = ce.system.classLevel;
      D[et] ??= { current: 0, total: 0 }, D[et].total += Te, D[et].current = x[et]?.current ?? 0;
    }
    const fe = U.map((ce) => f(ce.system.hitDieSize, ae));
    for (const ce of P) {
      const le = f(ce.size, ae);
      D[le] ??= { current: x[le]?.current ?? 0, total: 0 }, D[le].total += ce.value, fe.includes(le) || (D[le].current = x[le]?.current ?? 0);
    }
    const ge = P.map((ce) => f(ce.size, ae));
    for (const [ce, le] of Object.entries(x ?? {})) {
      const et = Number(ce), Te = f(et, ae), Vt = le?.bonus ?? 0;
      if (Vt > 0) {
        D[Te] ??= { current: 0, total: 0 }, D[Te].total += Vt;
        const It = fe.includes(Te), bn = ge.includes(Te);
        !It && !bn && (D[Te].current = x[Te]?.current ?? 0);
      }
    }
    let Ne = 0, Be = 0;
    for (const ce of Object.values(D))
      Ne += ce.current, Be += ce.total;
    return { bySize: D, value: Ne, max: Be };
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
    const x = a.reactive.items.find((D) => D.type === "class") ?? null, P = a.reactive.items.find((D) => D.type === "subclass") ?? null, U = a.reactive.items.find((D) => D.type === "ancestry") ?? null, ae = a.reactive.system.attributes.sizeCategory;
    return l(x, P, U, ae);
  }), k = /* @__PURE__ */ z(() => a.reactive.system.attributes.wounds);
  function A(x) {
    let P = x;
    x <= u(k).value && (P = x - 1), a.update({ "system.attributes.wounds.value": P });
  }
  r(A, "toggleWounds");
  let j = /* @__PURE__ */ z(() => a.reactive.flags.nimble), B = /* @__PURE__ */ z(() => u(j)?.editingEnabled ?? !0);
  const L = Ys(!1, (x) => (ks(() => x(u(B))), () => {
  }));
  async function q() {
    await a.setFlag("nimble", "editingEnabled", !u(B));
  }
  r(q, "toggleEditingEnabled"), Ln("actor", a), Ln("document", a), Ln("application", t.sheet), Ln("editingEnabled", L);
  var Q = sl(), K = b(Q), ne = b(K);
  to(ne, {
    get actor() {
      return a;
    },
    get metaData() {
      return u(w);
    },
    get editingEnabled() {
      return u(B);
    },
    get hitDiceData() {
      return u(ie);
    }
  });
  var Z = m(ne, 2);
  fo(Z, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(B);
    },
    get isBloodied() {
      return u(d);
    },
    get hitDiceData() {
      return u(ie);
    },
    get hasMana() {
      return u(T);
    },
    get mana() {
      return u(E);
    },
    get wounds() {
      return u(k);
    },
    toggleWounds: A,
    updateCurrentHP: _,
    updateMaxHP: v,
    updateTempHP: p,
    updateCurrentMana: y,
    updateMaxMana: O,
    updateCurrentHitDice: S,
    rollHitDice: M,
    editCurrentHitDice: F
  });
  var X = m(Z, 2);
  mo(X, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(B);
    }
  });
  var Y = m(K, 2);
  al(Y, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(B);
    },
    get hasMana() {
      return u(T);
    },
    get mana() {
      return u(E);
    },
    updateCurrentMana: y,
    updateMaxMana: O
  });
  var se = m(Y, 2);
  il(se, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(B);
    },
    toggleEditingEnabled: q,
    get classItem() {
      return u(g);
    }
  }), H(e, Q), we();
}
r(ol, "WhiteSheet");
const nt = class nt extends Qs(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = ol;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < nt.MIN_WIDTH && (t.width = nt.MIN_WIDTH), t.height !== void 0 && t.height < nt.MIN_HEIGHT && (t.height = nt.MIN_HEIGHT), super.setPosition(t);
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
r(nt, "WhiteCharacterSheet"), We(nt, "MIN_WIDTH", 670), We(nt, "MIN_HEIGHT", 400), We(nt, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Wa = nt;
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
