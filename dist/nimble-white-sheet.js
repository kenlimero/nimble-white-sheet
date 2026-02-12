var Va = Object.defineProperty;
var Ga = (e) => {
  throw TypeError(e);
};
var mi = (e, t, n) => t in e ? Va(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Va(e, "name", { value: t, configurable: !0 });
var Qe = (e, t, n) => mi(e, typeof t != "symbol" ? t + "" : t, n), sa = (e, t, n) => t.has(e) || Ga("Cannot " + n);
var b = (e, t, n) => (sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), K = (e, t, n) => t.has(e) ? Ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), V = (e, t, n, a) => (sa(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), ge = (e, t, n) => (sa(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), pi = /* @__PURE__ */ Symbol("filename"), gi = "http://www.w3.org/1999/xhtml", Ya = globalThis.process?.env?.NODE_ENV, A = Ya && !Ya.toLowerCase().startsWith("prod");
var dr = Array.isArray, yi = Array.prototype.indexOf, Rt = Array.prototype.includes, Kn = Array.from, Ht = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, wi = Object.getOwnPropertyDescriptors, Ei = Object.prototype, Si = Array.prototype, vr = Object.getPrototypeOf, Ja = Object.isExtensible;
const oa = /* @__PURE__ */ r(() => {
}, "noop");
function xi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(xi, "run_all");
function _r() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(_r, "deferred");
function ki(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(ki, "to_array");
const me = 2, _a = 4, Vn = 8, hr = 1 << 24, ft = 16, Je = 32, zt = 64, Wa = 128, Fe = 512, de = 1024, pe = 2048, Ye = 4096, Ie = 8192, mt = 16384, Oa = 32768, nn = 65536, Pn = 1 << 17, br = 1 << 18, cn = 1 << 19, Ni = 1 << 20, lt = 1 << 25, xt = 32768, ha = 1 << 21, Gn = 1 << 22, pt = 1 << 23, Gt = /* @__PURE__ */ Symbol("$state"), Ti = /* @__PURE__ */ Symbol(""), mr = /* @__PURE__ */ Symbol("proxy path");
var Yt;
const qt = new (Yt = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(Yt, "StaleReactionError"), Yt)();
function Ai(e) {
  if (A) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Ai, "lifecycle_outside_component");
function Ci() {
  if (A) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Ci, "async_derived_orphan");
function Qa() {
  if (A) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(Qa, "bind_invalid_checkbox_value");
function Ii() {
  if (A) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Ii, "derived_references_self");
function pr(e, t, n) {
  if (A) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(pr, "each_key_duplicate");
function Di(e) {
  if (A) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Di, "effect_in_teardown");
function Mi() {
  if (A) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Mi, "effect_in_unowned_derived");
function Wi(e) {
  if (A) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Wi, "effect_orphan");
function Oi() {
  if (A) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Oi, "effect_update_depth_exceeded");
function Li(e) {
  if (A) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Li, "rune_outside_svelte");
function Pi() {
  if (A) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(Pi, "state_descriptors_fixed");
function Ri() {
  if (A) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(Ri, "state_prototype_fixed");
function Hi() {
  if (A) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Hi, "state_unsafe_mutation");
function Fi() {
  if (A) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(Fi, "svelte_boundary_reset_onerror");
var Yn = "font-weight: bold", Jn = "font-weight: normal";
function ji() {
  A ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Yn, Jn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(ji, "lifecycle_double_unmount");
function la(e) {
  A ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Yn, Jn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(la, "state_proxy_equality_mismatch");
function zi() {
  A ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Yn, Jn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(zi, "state_proxy_unmount");
function Ui() {
  A ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Yn, Jn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(Ui, "svelte_boundary_reset_noop");
function gr(e) {
  return e === this.v;
}
r(gr, "equals");
function yr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(yr, "safe_not_equal");
function wr(e) {
  return !yr(e, this.v);
}
r(wr, "safe_equals");
let Bi = !1;
function Xe(e, t) {
  return e.label = t, Er(e.v, t), e;
}
r(Xe, "tag");
function Er(e, t) {
  return e?.[mr]?.(t), e;
}
r(Er, "tag_proxy");
function qi(e) {
  const t = new Error(), n = Ki();
  return n.length === 0 ? null : (n.unshift(`
`), Ht(t, "stack", {
    value: n.join(`
`)
  }), Ht(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(qi, "get_error");
function Ki() {
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
r(Ki, "get_stack");
let be = null;
function an(e) {
  be = e;
}
r(an, "set_component_context");
let pn = null;
function Rn(e) {
  pn = e;
}
r(Rn, "set_dev_stack");
let xn = null;
function Xa(e) {
  xn = e;
}
r(Xa, "set_dev_current_component_function");
function Dn(e, t) {
  return Vi("setContext").set(e, t), t;
}
r(Dn, "setContext");
function we(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, A && (be.function = n, xn = n);
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
      Ur(a);
  }
  return t.i = !0, be = t.p, A && (xn = be?.function ?? null), /** @type {T} */
  {};
}
r(Ee, "pop");
function Sr() {
  return !0;
}
r(Sr, "is_runes");
function Vi(e) {
  return be === null && Ai(e), be.c ??= new Map(Gi(be) || void 0);
}
r(Vi, "get_or_init_context_map");
function Gi(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
r(Gi, "get_parent_context");
let Tt = [];
function xr() {
  var e = Tt;
  Tt = [], xi(e);
}
r(xr, "run_micro_tasks");
function gt(e) {
  if (Tt.length === 0 && !bn) {
    var t = Tt;
    queueMicrotask(() => {
      t === Tt && xr();
    });
  }
  Tt.push(e);
}
r(gt, "queue_micro_task");
function Yi() {
  for (; Tt.length > 0; )
    xr();
}
r(Yi, "flush_tasks");
const ba = /* @__PURE__ */ new WeakMap();
function kr(e) {
  var t = te;
  if (t === null)
    return Z.f |= pt, e;
  if (A && e instanceof Error && !ba.has(e) && ba.set(e, Ji(e, t)), (t.f & Oa) === 0) {
    if ((t.f & Wa) === 0)
      throw A && !t.parent && e instanceof Error && Nr(e), e;
    t.b.error(e);
  } else
    rn(e, t);
}
r(kr, "handle_error");
function rn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Wa) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw A && e instanceof Error && Nr(e), e;
}
r(rn, "invoke_error_boundary");
function Ji(e, t) {
  const n = Vt(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = Fa ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[pi].split("/").pop()}`, i = i.p;
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
r(Ji, "get_adjustments");
function Nr(e) {
  const t = ba.get(e);
  t && (Ht(e, "message", {
    value: t.message
  }), Ht(e, "stack", {
    value: t.stack
  }));
}
r(Nr, "apply_adjustments");
const Qi = -7169;
function ue(e, t) {
  e.f = e.f & Qi | t;
}
r(ue, "set_signal_status");
function La(e) {
  (e.f & Fe) !== 0 || e.deps === null ? ue(e, de) : ue(e, Ye);
}
r(La, "update_derived_status");
function Tr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & xt) === 0 || (t.f ^= xt, Tr(
        /** @type {Derived} */
        t.deps
      ));
}
r(Tr, "clear_marked");
function Ar(e, t, n) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & Ye) !== 0 && n.add(e), Tr(e.deps), ue(e, de);
}
r(Ar, "defer_effect");
const Mn = /* @__PURE__ */ new Set();
let re = null, ma = null, qe = null, xe = [], Qn = null, pa = !1, bn = !1;
var Jt, Qt, Ct, Xt, yn, wn, It, st, Zt, at, ga, ya, Cr;
const zn = class zn {
  constructor() {
    K(this, at);
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
    K(this, Jt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    K(this, Qt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    K(this, Ct, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    K(this, Xt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    K(this, yn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    K(this, wn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    K(this, It, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    K(this, st, /* @__PURE__ */ new Map());
    Qe(this, "is_fork", !1);
    K(this, Zt, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, Xt) > 0;
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
        ue(a, pe), Ke(a);
      for (a of n.m)
        ue(a, Ye), Ke(a);
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
      ge(this, at, ga).call(this, s, n, a);
    if (this.is_deferred()) {
      ge(this, at, ya).call(this, a), ge(this, at, ya).call(this, n);
      for (const [s, i] of b(this, st))
        Wr(s, i);
    } else {
      for (const s of b(this, Jt)) s();
      b(this, Jt).clear(), b(this, Ct) === 0 && ge(this, at, Cr).call(this), ma = this, re = null, Za(a), Za(n), ma = null, b(this, yn)?.resolve();
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
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & pt) === 0 && (this.current.set(t, t.v), qe?.set(t, t.v));
  }
  activate() {
    re = this, this.apply();
  }
  deactivate() {
    re === this && (re = null, qe = null);
  }
  flush() {
    if (this.activate(), xe.length > 0) {
      if (Ir(), re !== null && re !== this)
        return;
    } else b(this, Ct) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, Qt)) t(this);
    b(this, Qt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    V(this, Ct, b(this, Ct) + 1), t && V(this, Xt, b(this, Xt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    V(this, Ct, b(this, Ct) - 1), t && V(this, Xt, b(this, Xt) - 1), !b(this, Zt) && (V(this, Zt, !0), gt(() => {
      V(this, Zt, !1), this.is_deferred() ? xe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, wn))
      b(this, It).delete(t), ue(t, pe), Ke(t);
    for (const t of b(this, It))
      ue(t, Ye), Ke(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, Jt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, Qt).add(t);
  }
  settled() {
    return (b(this, yn) ?? V(this, yn, _r())).promise;
  }
  static ensure() {
    if (re === null) {
      const t = re = new zn();
      Mn.add(re), bn || gt(() => {
        re === t && t.flush();
      });
    }
    return re;
  }
  apply() {
  }
};
Jt = new WeakMap(), Qt = new WeakMap(), Ct = new WeakMap(), Xt = new WeakMap(), yn = new WeakMap(), wn = new WeakMap(), It = new WeakMap(), st = new WeakMap(), Zt = new WeakMap(), at = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ga = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= de;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & (Je | zt)) !== 0, l = c && (o & de) !== 0, f = l || (o & Ie) !== 0 || b(this, st).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= de : i !== null && (o & (_a | Vn | hr)) !== 0 ? i.b.defer_effect(s) : (o & _a) !== 0 ? n.push(s) : Nn(s) && ((o & ft) !== 0 && b(this, It).add(s), gn(s));
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
ya = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ar(t[n], b(this, wn), b(this, It));
}, "#defer_effects"), Cr = /* @__PURE__ */ r(function() {
  var s;
  if (Mn.size > 1) {
    this.previous.clear();
    var t = qe, n = !0;
    for (const i of Mn) {
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
        var a = xe;
        xe = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const v of o)
          Dr(v, c, l, f);
        if (xe.length > 0) {
          re = i, i.apply();
          for (const v of xe)
            ge(s = i, at, ga).call(s, v, [], []);
          i.deactivate();
        }
        xe = a;
      }
    }
    re = null, qe = t;
  }
  this.committed = !0, Mn.delete(this);
}, "#commit"), r(zn, "Batch");
let yt = zn;
function Xi(e) {
  var t = bn;
  bn = !0;
  try {
    for (var n; ; ) {
      if (Yi(), xe.length === 0 && (re?.flush(), xe.length === 0))
        return Qn = null, /** @type {T} */
        n;
      Ir();
    }
  } finally {
    bn = t;
  }
}
r(Xi, "flushSync");
function Ir() {
  pa = !0;
  var e = A ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; xe.length > 0; ) {
      var n = yt.ensure();
      if (t++ > 1e3) {
        if (A) {
          var a = /* @__PURE__ */ new Map();
          for (const i of n.current.keys())
            for (const [o, c] of i.updated ?? []) {
              var s = a.get(o);
              s || (s = { error: c.error, count: 0 }, a.set(o, s)), s.count += c.count;
            }
          for (const i of a.values())
            i.error && console.error(i.error);
        }
        Zi();
      }
      if (n.process(xe), wt.clear(), A)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (xe = [], pa = !1, Qn = null, A)
      for (
        const i of
        /** @type {Set<Source>} */
        e
      )
        i.updated = null;
  }
}
r(Ir, "flush_effects");
function Zi() {
  try {
    Oi();
  } catch (e) {
    A && Ht(e, "stack", { value: "" }), rn(e, Qn);
  }
}
r(Zi, "infinite_loop_guard");
let rt = null;
function Za(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (mt | Ie)) === 0 && Nn(a) && (rt = /* @__PURE__ */ new Set(), gn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Gr(a) : a.fn = null), rt?.size > 0)) {
        wt.clear();
        for (const s of rt) {
          if ((s.f & (mt | Ie)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            rt.has(o) && (rt.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (mt | Ie)) === 0 && gn(l);
          }
        }
        rt.clear();
      }
    }
    rt = null;
  }
}
r(Za, "flush_queued_effects");
function Dr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & me) !== 0 ? Dr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (Gn | ft)) !== 0 && (i & pe) === 0 && Mr(s, t, a) && (ue(s, pe), Ke(
        /** @type {Effect} */
        s
      ));
    }
}
r(Dr, "mark_effects");
function Mr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Rt.call(t, s))
        return !0;
      if ((s.f & me) !== 0 && Mr(
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
r(Mr, "depends_on");
function Ke(e) {
  for (var t = Qn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (pa && t === te && (n & ft) !== 0 && (n & br) === 0)
      return;
    if ((n & (zt | Je)) !== 0) {
      if ((n & de) === 0) return;
      t.f ^= de;
    }
  }
  xe.push(t);
}
r(Ke, "schedule_effect");
function Wr(e, t) {
  if (!((e.f & Je) !== 0 && (e.f & de) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & Ye) !== 0 && t.m.push(e), ue(e, de);
    for (var n = e.first; n !== null; )
      Wr(n, t), n = n.next;
  }
}
r(Wr, "reset_branch");
function Or(e) {
  let t = 0, n = Ft(0), a;
  return A && Xe(n, "createSubscriber version"), () => {
    ja() && (u(n), Br(() => (t === 0 && (a = ai(() => e(() => mn(n)))), t += 1, () => {
      gt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, mn(n));
      });
    })));
  };
}
r(Or, "createSubscriber");
var $i = nn | cn | Wa;
function es(e, t, n) {
  new wa(e, t, n);
}
r(es, "boundary");
var Le, Ma, Ze, Dt, $e, Pe, Se, et, ot, _t, Mt, ht, $t, Wt, en, tn, tt, Un, ve, ts, ns, Ea, Wn, On, Sa;
const qa = class qa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    K(this, ve);
    /** @type {Boundary | null} */
    Qe(this, "parent");
    Qe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    K(this, Le);
    /** @type {TemplateNode | null} */
    K(this, Ma, null);
    /** @type {BoundaryProps} */
    K(this, Ze);
    /** @type {((anchor: Node) => void)} */
    K(this, Dt);
    /** @type {Effect} */
    K(this, $e);
    /** @type {Effect | null} */
    K(this, Pe, null);
    /** @type {Effect | null} */
    K(this, Se, null);
    /** @type {Effect | null} */
    K(this, et, null);
    /** @type {DocumentFragment | null} */
    K(this, ot, null);
    /** @type {TemplateNode | null} */
    K(this, _t, null);
    K(this, Mt, 0);
    K(this, ht, 0);
    K(this, $t, !1);
    K(this, Wt, !1);
    /** @type {Set<Effect>} */
    K(this, en, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    K(this, tn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    K(this, tt, null);
    K(this, Un, Or(() => (V(this, tt, Ft(b(this, Mt))), A && Xe(b(this, tt), "$effect.pending()"), () => {
      V(this, tt, null);
    })));
    V(this, Le, t), V(this, Ze, n), V(this, Dt, a), this.parent = /** @type {Effect} */
    te.b, this.is_pending = !!b(this, Ze).pending, V(this, $e, za(() => {
      te.b = this;
      {
        var s = ge(this, ve, Ea).call(this);
        try {
          V(this, Pe, He(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, ht) > 0 ? ge(this, ve, On).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, _t)?.remove();
      };
    }, $i));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ar(t, b(this, en), b(this, tn));
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
    ge(this, ve, Sa).call(this, t), V(this, Mt, b(this, Mt) + t), !(!b(this, tt) || b(this, $t)) && (V(this, $t, !0), gt(() => {
      V(this, $t, !1), b(this, tt) && on(b(this, tt), b(this, Mt));
    }));
  }
  get_effect_pending() {
    return b(this, Un).call(this), u(
      /** @type {Source<number>} */
      b(this, tt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, Ze).onerror;
    let a = b(this, Ze).failed;
    if (b(this, Wt) || !n && !a)
      throw t;
    b(this, Pe) && (Te(b(this, Pe)), V(this, Pe, null)), b(this, Se) && (Te(b(this, Se)), V(this, Se, null)), b(this, et) && (Te(b(this, et)), V(this, et, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Ui();
        return;
      }
      s = !0, i && Fi(), yt.ensure(), V(this, Mt, 0), b(this, et) !== null && Lt(b(this, et), () => {
        V(this, et, null);
      }), this.is_pending = this.has_pending_snippet(), V(this, Pe, ge(this, ve, Wn).call(this, () => (V(this, Wt, !1), He(() => b(this, Dt).call(this, b(this, Le)))))), b(this, ht) > 0 ? ge(this, ve, On).call(this) : this.is_pending = !1;
    }, "reset");
    gt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        rn(c, b(this, $e) && b(this, $e).parent);
      }
      a && V(this, et, ge(this, ve, Wn).call(this, () => {
        yt.ensure(), V(this, Wt, !0);
        try {
          return He(() => {
            a(
              b(this, Le),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return rn(
            c,
            /** @type {Effect} */
            b(this, $e).parent
          ), null;
        } finally {
          V(this, Wt, !1);
        }
      }));
    });
  }
};
Le = new WeakMap(), Ma = new WeakMap(), Ze = new WeakMap(), Dt = new WeakMap(), $e = new WeakMap(), Pe = new WeakMap(), Se = new WeakMap(), et = new WeakMap(), ot = new WeakMap(), _t = new WeakMap(), Mt = new WeakMap(), ht = new WeakMap(), $t = new WeakMap(), Wt = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), tt = new WeakMap(), Un = new WeakMap(), ve = new WeakSet(), ts = /* @__PURE__ */ r(function() {
  try {
    V(this, Pe, He(() => b(this, Dt).call(this, b(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ns = /* @__PURE__ */ r(function() {
  const t = b(this, Ze).pending;
  t && (V(this, Se, He(() => t(b(this, Le)))), gt(() => {
    var n = ge(this, ve, Ea).call(this);
    V(this, Pe, ge(this, ve, Wn).call(this, () => (yt.ensure(), He(() => b(this, Dt).call(this, n))))), b(this, ht) > 0 ? ge(this, ve, On).call(this) : (Lt(
      /** @type {Effect} */
      b(this, Se),
      () => {
        V(this, Se, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Ea = /* @__PURE__ */ r(function() {
  var t = b(this, Le);
  return this.is_pending && (V(this, _t, Et()), b(this, Le).before(b(this, _t)), t = b(this, _t)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Wn = /* @__PURE__ */ r(function(t) {
  var n = te, a = Z, s = be;
  Ge(b(this, $e)), ze(b(this, $e)), an(b(this, $e).ctx);
  try {
    return t();
  } catch (i) {
    return kr(i), null;
  } finally {
    Ge(n), ze(a), an(s);
  }
}, "#run"), On = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, Ze).pending
  );
  b(this, Pe) !== null && (V(this, ot, document.createDocumentFragment()), b(this, ot).append(
    /** @type {TemplateNode} */
    b(this, _t)
  ), Qr(b(this, Pe), b(this, ot))), b(this, Se) === null && V(this, Se, He(() => t(b(this, Le))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Sa = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ge(n = this.parent, ve, Sa).call(n, t);
    return;
  }
  if (V(this, ht, b(this, ht) + t), b(this, ht) === 0) {
    this.is_pending = !1;
    for (const a of b(this, en))
      ue(a, pe), Ke(a);
    for (const a of b(this, tn))
      ue(a, Ye), Ke(a);
    b(this, en).clear(), b(this, tn).clear(), b(this, Se) && Lt(b(this, Se), () => {
      V(this, Se, null);
    }), b(this, ot) && (b(this, Le).before(b(this, ot)), V(this, ot, null));
  }
}, "#update_pending_count"), r(qa, "Boundary");
let wa = qa;
function as(e, t, n, a) {
  const s = Pa;
  var i = e.filter((_) => !_.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = re, c = (
    /** @type {Effect} */
    te
  ), l = rs(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function v(_) {
    l();
    try {
      a(_);
    } catch (g) {
      (c.f & mt) === 0 && rn(g, c);
    }
    o?.deactivate(), xa();
  }
  if (r(v, "finish"), n.length === 0) {
    f.then(() => v(t.map(s)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ ss(_))).then((_) => v([...t.map(s), ..._])).catch((_) => rn(_, c));
  }
  r(d, "run"), f ? f.then(d) : d();
}
r(as, "flatten");
function rs() {
  var e = te, t = Z, n = be, a = re;
  if (A)
    var s = pn;
  return /* @__PURE__ */ r(function(o = !0) {
    Ge(e), ze(t), an(n), o && a?.activate(), A && Rn(s);
  }, "restore");
}
r(rs, "capture");
function xa() {
  Ge(null), ze(null), an(null), A && Rn(null);
}
r(xa, "unset_context");
const is = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  var t = me | pe, n = Z !== null && (Z.f & me) !== 0 ? (
    /** @type {Derived} */
    Z
  ) : null;
  return te !== null && (te.f |= cn), {
    ctx: be,
    deps: null,
    effects: null,
    equals: gr,
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
r(Pa, "derived");
// @__NO_SIDE_EFFECTS__
function ss(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    te
  );
  a === null && Ci();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Ft(
    /** @type {V} */
    he
  );
  A && (o.label = t);
  var c = !Z, l = /* @__PURE__ */ new Map();
  return Ss(() => {
    var f = _r();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        v === re && v.committed && v.deactivate(), xa();
      });
    } catch (g) {
      f.reject(g), xa();
    }
    var v = (
      /** @type {Batch} */
      re
    );
    if (c) {
      var d = s.is_rendered();
      s.update_pending_count(1), v.increment(d), l.get(v)?.reject(qt), l.delete(v), l.set(v, f);
    }
    const _ = /* @__PURE__ */ r((g, w = void 0) => {
      if (v.activate(), w)
        w !== qt && (o.f |= pt, on(o, w));
      else {
        (o.f & pt) !== 0 && (o.f ^= pt), on(o, g);
        for (const [T, y] of l) {
          if (l.delete(T), T === v) break;
          y.reject(qt);
        }
      }
      c && (s.update_pending_count(-1), v.decrement(d));
    }, "handler");
    f.promise.then(_, (g) => _(null, g || "unknown"));
  }), zr(() => {
    for (const f of l.values())
      f.reject(qt);
  }), A && (o.f |= Gn), new Promise((f) => {
    function v(d) {
      function _() {
        d === i ? f(o) : v(i);
      }
      r(_, "go"), d.then(_, _);
    }
    r(v, "next"), v(i);
  });
}
r(ss, "async_derived");
// @__NO_SIDE_EFFECTS__
function q(e) {
  const t = /* @__PURE__ */ Pa(e);
  return Xr(t), t;
}
r(q, "user_derived");
// @__NO_SIDE_EFFECTS__
function os(e) {
  const t = /* @__PURE__ */ Pa(e);
  return t.equals = wr, t;
}
r(os, "derived_safe_equal");
function ka(e) {
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
r(ka, "destroy_derived_effects");
let ca = [];
function ls(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (t.f & mt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(ls, "get_derived_parent_effect");
function Ra(e) {
  var t, n = te;
  if (Ge(ls(e)), A) {
    let a = sn;
    $a(/* @__PURE__ */ new Set());
    try {
      Rt.call(ca, e) && Ii(), ca.push(e), e.f &= ~xt, ka(e), t = Na(e);
    } finally {
      Ge(n), $a(a), ca.pop();
    }
  } else
    try {
      e.f &= ~xt, ka(e), t = Na(e);
    } finally {
      Ge(n);
    }
  return t;
}
r(Ra, "execute_derived");
function Lr(e) {
  var t = Ra(e);
  if (!e.equals(t) && (e.wv = $r(), (!re?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ue(e, de);
    return;
  }
  jt || (qe !== null ? (ja() || re?.is_fork) && qe.set(e, t) : La(e));
}
r(Lr, "update_derived");
let sn = /* @__PURE__ */ new Set();
const wt = /* @__PURE__ */ new Map();
function $a(e) {
  sn = e;
}
r($a, "set_eager_effects");
let Ha = !1;
function cs() {
  Ha = !0;
}
r(cs, "set_eager_effects_deferred");
function Ft(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: gr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(Ft, "source");
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  const n = Ft(e);
  return Xr(n), n;
}
r(Re, "state");
// @__NO_SIDE_EFFECTS__
function us(e, t = !1, n = !0) {
  const a = Ft(e);
  return t || (a.equals = wr), a;
}
r(us, "mutable_source");
function Be(e, t, n = !1) {
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ve || (Z.f & Pn) !== 0) && Sr() && (Z.f & (me | ft | Gn | Pn)) !== 0 && (je === null || !Rt.call(je, e)) && Hi();
  let a = n ? Kt(t) : t;
  return A && Er(
    a,
    /** @type {string} */
    e.label
  ), on(e, a);
}
r(Be, "set");
function on(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    jt ? wt.set(e, t) : wt.set(e, n), e.v = t;
    var a = yt.ensure();
    if (a.capture(e, n), A) {
      if (te !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = qi("updated at");
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
      (e.f & pe) !== 0 && Ra(s), La(s);
    }
    e.wv = $r(), Rr(e, pe), te !== null && (te.f & de) !== 0 && (te.f & (Je | zt)) === 0 && (Oe === null ? ks([e]) : Oe.push(e)), !a.is_fork && sn.size > 0 && !Ha && Pr();
  }
  return t;
}
r(on, "internal_set");
function Pr() {
  Ha = !1;
  for (const e of sn)
    (e.f & de) !== 0 && ue(e, Ye), Nn(e) && gn(e);
  sn.clear();
}
r(Pr, "flush_eager_effects");
function mn(e) {
  Be(e, e.v + 1);
}
r(mn, "increment");
function Rr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (A && (o & Pn) !== 0) {
        sn.add(i);
        continue;
      }
      var c = (o & pe) === 0;
      if (c && ue(i, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        qe?.delete(l), (o & xt) === 0 && (o & Fe && (i.f |= xt), Rr(l, Ye));
      } else c && ((o & ft) !== 0 && rt !== null && rt.add(
        /** @type {Effect} */
        i
      ), Ke(
        /** @type {Effect} */
        i
      ));
    }
}
r(Rr, "mark_reactions");
const fs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Kt(e) {
  if (typeof e != "object" || e === null || Gt in e)
    return e;
  const t = vr(e);
  if (t !== Ei && t !== Si)
    return e;
  var n = /* @__PURE__ */ new Map(), a = dr(e), s = /* @__PURE__ */ Re(0), i = Pt, o = /* @__PURE__ */ r((v) => {
    if (Pt === i)
      return v();
    var d = Z, _ = Pt;
    ze(null), ar(i);
    var g = v();
    return ze(d), ar(_), g;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Re(
    /** @type {any[]} */
    e.length
  )), A && (e = /** @type {any} */
  vs(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(v) {
    if (!l) {
      l = !0, c = v, Xe(s, `${c} version`);
      for (const [d, _] of n)
        Xe(_, Nt(c, d));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Pi();
        var g = n.get(d);
        return g === void 0 ? g = o(() => {
          var w = /* @__PURE__ */ Re(_.value);
          return n.set(d, w), A && typeof d == "string" && Xe(w, Nt(c, d)), w;
        }) : Be(g, _.value, !0), !0;
      },
      deleteProperty(v, d) {
        var _ = n.get(d);
        if (_ === void 0) {
          if (d in v) {
            const g = o(() => /* @__PURE__ */ Re(he));
            n.set(d, g), mn(s), A && Xe(g, Nt(c, d));
          }
        } else
          Be(_, he), mn(s);
        return !0;
      },
      get(v, d, _) {
        if (d === Gt)
          return e;
        if (A && d === mr)
          return f;
        var g = n.get(d), w = d in v;
        if (g === void 0 && (!w || Vt(v, d)?.writable) && (g = o(() => {
          var y = Kt(w ? v[d] : he), W = /* @__PURE__ */ Re(y);
          return A && Xe(W, Nt(c, d)), W;
        }), n.set(d, g)), g !== void 0) {
          var T = u(g);
          return T === he ? void 0 : T;
        }
        return Reflect.get(v, d, _);
      },
      getOwnPropertyDescriptor(v, d) {
        var _ = Reflect.getOwnPropertyDescriptor(v, d);
        if (_ && "value" in _) {
          var g = n.get(d);
          g && (_.value = u(g));
        } else if (_ === void 0) {
          var w = n.get(d), T = w?.v;
          if (w !== void 0 && T !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: T,
              writable: !0
            };
        }
        return _;
      },
      has(v, d) {
        if (d === Gt)
          return !0;
        var _ = n.get(d), g = _ !== void 0 && _.v !== he || Reflect.has(v, d);
        if (_ !== void 0 || te !== null && (!g || Vt(v, d)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var T = g ? Kt(v[d]) : he, y = /* @__PURE__ */ Re(T);
            return A && Xe(y, Nt(c, d)), y;
          }), n.set(d, _));
          var w = u(_);
          if (w === he)
            return !1;
        }
        return g;
      },
      set(v, d, _, g) {
        var w = n.get(d), T = d in v;
        if (a && d === "length")
          for (var y = _; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var W = n.get(y + "");
            W !== void 0 ? Be(W, he) : y in v && (W = o(() => /* @__PURE__ */ Re(he)), n.set(y + "", W), A && Xe(W, Nt(c, y)));
          }
        if (w === void 0)
          (!T || Vt(v, d)?.writable) && (w = o(() => /* @__PURE__ */ Re(void 0)), A && Xe(w, Nt(c, d)), Be(w, Kt(_)), n.set(d, w));
        else {
          T = w.v !== he;
          var ne = o(() => Kt(_));
          Be(w, ne);
        }
        var E = Reflect.getOwnPropertyDescriptor(v, d);
        if (E?.set && E.set.call(g, _), !T) {
          if (a && typeof d == "string") {
            var D = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(d);
            Number.isInteger(F) && F >= D.v && Be(D, F + 1);
          }
          mn(s);
        }
        return !0;
      },
      ownKeys(v) {
        u(s);
        var d = Reflect.ownKeys(v).filter((w) => {
          var T = n.get(w);
          return T === void 0 || T.v !== he;
        });
        for (var [_, g] of n)
          g.v !== he && !(_ in v) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Ri();
      }
    }
  );
}
r(Kt, "proxy");
function Nt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : fs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(Nt, "get_label");
function ua(e) {
  try {
    if (e !== null && typeof e == "object" && Gt in e)
      return e[Gt];
  } catch {
  }
  return e;
}
r(ua, "get_proxied_value");
const ds = /* @__PURE__ */ new Set([
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
function vs(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return ds.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        cs();
        var o = s.apply(this, i);
        return Pr(), o;
      } : s;
    }
  });
}
r(vs, "inspectable_array");
function _s() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(i, o) {
    const c = n.call(this, i, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (ua(this[l]) === i) {
          la("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(i, o) {
    const c = a.call(this, i, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (ua(this[l]) === i) {
          la("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(i, o) {
    const c = s.call(this, i, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (ua(this[l]) === i) {
          la("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
r(_s, "init_array_prototype_warnings");
var er, Fa, Hr, Fr;
function hs() {
  if (er === void 0) {
    er = window, Fa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Hr = Vt(t, "firstChild").get, Fr = Vt(t, "nextSibling").get, Ja(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ja(n) && (n.__t = void 0), A && (e.__svelte_meta = null, _s());
  }
}
r(hs, "init_operations");
function Et(e = "") {
  return document.createTextNode(e);
}
r(Et, "create_text");
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return (
    /** @type {TemplateNode | null} */
    Hr.call(e)
  );
}
r(bt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return (
    /** @type {TemplateNode | null} */
    Fr.call(e)
  );
}
r(kn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ bt(e);
}
r(h, "child");
function St(e, t = !1) {
  {
    var n = /* @__PURE__ */ bt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ kn(n) : n;
  }
}
r(St, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ kn(a);
  return a;
}
r(m, "sibling");
function bs(e) {
  e.textContent = "";
}
r(bs, "clear_text_content");
function jr() {
  return !1;
}
r(jr, "should_defer_append");
let tr = !1;
function ms() {
  tr || (tr = !0, document.addEventListener(
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
r(ms, "add_form_reset_listener");
function Xn(e) {
  var t = Z, n = te;
  ze(null), Ge(null);
  try {
    return e();
  } finally {
    ze(t), Ge(n);
  }
}
r(Xn, "without_reactive_context");
function ps(e, t, n, a = n) {
  e.addEventListener(t, () => Xn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), ms();
}
r(ps, "listen_to_event_and_reset_event");
function gs(e) {
  te === null && (Z === null && Wi(e), Mi()), jt && Di(e);
}
r(gs, "validate_effect");
function ys(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(ys, "push_effect");
function kt(e, t, n) {
  var a = te;
  if (A)
    for (; a !== null && (a.f & Pn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Ie) !== 0 && (e |= Ie);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | pe | Fe,
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
  if (A && (s.component_function = xn), n)
    try {
      gn(s), s.f |= Oa;
    } catch (c) {
      throw Te(s), c;
    }
  else t !== null && Ke(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & cn) === 0 && (i = i.first, (e & ft) !== 0 && (e & nn) !== 0 && i !== null && (i.f |= nn)), i !== null && (i.parent = a, a !== null && ys(i, a), Z !== null && (Z.f & me) !== 0 && (e & zt) === 0)) {
    var o = (
      /** @type {Derived} */
      Z
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(kt, "create_effect");
function ja() {
  return Z !== null && !Ve;
}
r(ja, "effect_tracking");
function zr(e) {
  const t = kt(Vn, null, !1);
  return ue(t, de), t.teardown = e, t;
}
r(zr, "teardown");
function ws(e) {
  gs("$effect"), A && Ht(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    te.f
  ), n = !Z && (t & Je) !== 0 && (t & Oa) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return Ur(e);
}
r(ws, "user_effect");
function Ur(e) {
  return kt(_a | Ni, e, !1);
}
r(Ur, "create_user_effect");
function Es(e) {
  yt.ensure();
  const t = kt(zt | cn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Lt(t, () => {
      Te(t), a(void 0);
    }) : (Te(t), a(void 0));
  });
}
r(Es, "component_root");
function Ss(e) {
  return kt(Gn | cn, e, !0);
}
r(Ss, "async_effect");
function Br(e, t = 0) {
  return kt(Vn | t, e, !0);
}
r(Br, "render_effect");
function J(e, t = [], n = [], a = []) {
  as(a, t, n, (s) => {
    kt(Vn, () => e(...s.map(u)), !0);
  });
}
r(J, "template_effect");
function za(e, t = 0) {
  var n = kt(ft | t, e, !0);
  return A && (n.dev_stack = pn), n;
}
r(za, "block");
function He(e) {
  return kt(Je | cn, e, !0);
}
r(He, "branch");
function qr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = jt, a = Z;
    nr(!0), ze(null);
    try {
      t.call(null);
    } finally {
      nr(n), ze(a);
    }
  }
}
r(qr, "execute_effect_teardown");
function Kr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Xn(() => {
      s.abort(qt);
    });
    var a = n.next;
    (n.f & zt) !== 0 ? n.parent = null : Te(n, t), n = a;
  }
}
r(Kr, "destroy_effect_children");
function xs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Je) === 0 && Te(t), t = n;
  }
}
r(xs, "destroy_block_effect_children");
function Te(e, t = !0) {
  var n = !1;
  (t || (e.f & br) !== 0) && e.nodes !== null && e.nodes.end !== null && (Vr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Kr(e, t && !n), Hn(e, 0), ue(e, mt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  qr(e);
  var s = e.parent;
  s !== null && s.first !== null && Gr(e), A && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Te, "destroy_effect");
function Vr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ kn(e);
    e.remove(), e = n;
  }
}
r(Vr, "remove_effect_dom");
function Gr(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(Gr, "unlink_effect");
function Lt(e, t, n = !0) {
  var a = [];
  Yr(e, a, !0);
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
r(Lt, "pause_effect");
function Yr(e, t, n) {
  if ((e.f & Ie) === 0) {
    e.f ^= Ie;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & nn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Je) !== 0 && (e.f & ft) !== 0;
      Yr(s, t, o ? n : !1), s = i;
    }
  }
}
r(Yr, "pause_children");
function Ua(e) {
  Jr(e, !0);
}
r(Ua, "resume_effect");
function Jr(e, t) {
  if ((e.f & Ie) !== 0) {
    e.f ^= Ie, (e.f & de) === 0 && (ue(e, pe), Ke(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & nn) !== 0 || (n.f & Je) !== 0;
      Jr(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r(Jr, "resume_children");
function Qr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ kn(n);
      t.append(n), n = s;
    }
}
r(Qr, "move_effect");
let Ln = !1, jt = !1;
function nr(e) {
  jt = e;
}
r(nr, "set_is_destroying_effect");
let Z = null, Ve = !1;
function ze(e) {
  Z = e;
}
r(ze, "set_active_reaction");
let te = null;
function Ge(e) {
  te = e;
}
r(Ge, "set_active_effect");
let je = null;
function Xr(e) {
  Z !== null && (je === null ? je = [e] : je.push(e));
}
r(Xr, "push_reaction_value");
let ke = null, Ae = 0, Oe = null;
function ks(e) {
  Oe = e;
}
r(ks, "set_untracked_writes");
let Zr = 1, At = 0, Pt = At;
function ar(e) {
  Pt = e;
}
r(ar, "set_update_version");
function $r() {
  return ++Zr;
}
r($r, "increment_write_version");
function Nn(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & me && (e.f &= ~xt), (t & Ye) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (Nn(
        /** @type {Derived} */
        i
      ) && Lr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    qe === null && ue(e, de);
  }
  return !1;
}
r(Nn, "is_dirty");
function ei(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(je !== null && Rt.call(je, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & me) !== 0 ? ei(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ue(i, pe) : (i.f & de) !== 0 && ue(i, Ye), Ke(
        /** @type {Effect} */
        i
      ));
    }
}
r(ei, "schedule_possible_effect_self_invalidation");
function Na(e) {
  var t = ke, n = Ae, a = Oe, s = Z, i = je, o = be, c = Ve, l = Pt, f = e.f;
  ke = /** @type {null | Value[]} */
  null, Ae = 0, Oe = null, Z = (f & (Je | zt)) === 0 ? e : null, je = null, an(e.ctx), Ve = !1, Pt = ++At, e.ac !== null && (Xn(() => {
    e.ac.abort(qt);
  }), e.ac = null);
  try {
    e.f |= ha;
    var v = (
      /** @type {Function} */
      e.fn
    ), d = v(), _ = e.deps, g = re?.is_fork;
    if (ke !== null) {
      var w;
      if (g || Hn(e, Ae), _ !== null && Ae > 0)
        for (_.length = Ae + ke.length, w = 0; w < ke.length; w++)
          _[Ae + w] = ke[w];
      else
        e.deps = _ = ke;
      if (ja() && (e.f & Fe) !== 0)
        for (w = Ae; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !g && _ !== null && Ae < _.length && (Hn(e, Ae), _.length = Ae);
    if (Sr() && Oe !== null && !Ve && _ !== null && (e.f & (me | Ye | pe)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Oe.length; w++)
        ei(
          Oe[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (At++, s.deps !== null)
        for (let T = 0; T < n; T += 1)
          s.deps[T].rv = At;
      if (t !== null)
        for (const T of t)
          T.rv = At;
      Oe !== null && (a === null ? a = Oe : a.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & pt) !== 0 && (e.f ^= pt), d;
  } catch (T) {
    return kr(T);
  } finally {
    e.f ^= ha, ke = t, Ae = n, Oe = a, Z = s, je = i, an(o), Ve = c, Pt = l;
  }
}
r(Na, "update_reaction");
function Ns(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = yi.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ke === null || !Rt.call(ke, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Fe) !== 0 && (i.f ^= Fe, i.f &= ~xt), La(i), ka(i), Hn(i, 0);
  }
}
r(Ns, "remove_reaction");
function Hn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Ns(e, n[a]);
}
r(Hn, "remove_reactions");
function gn(e) {
  var t = e.f;
  if ((t & mt) === 0) {
    ue(e, de);
    var n = te, a = Ln;
    if (te = e, Ln = !0, A) {
      var s = xn;
      Xa(e.component_function);
      var i = (
        /** @type {any} */
        pn
      );
      Rn(e.dev_stack ?? pn);
    }
    try {
      (t & (ft | hr)) !== 0 ? xs(e) : Kr(e), qr(e);
      var o = Na(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Zr;
      var c;
      A && Bi && (e.f & pe) !== 0 && e.deps;
    } finally {
      Ln = a, te = n, A && (Xa(s), Rn(i));
    }
  }
}
r(gn, "update_effect");
async function Ts() {
  await Promise.resolve(), Xi();
}
r(Ts, "tick");
function u(e) {
  var t = e.f, n = (t & me) !== 0;
  if (Z !== null && !Ve) {
    var a = te !== null && (te.f & mt) !== 0;
    if (!a && (je === null || !Rt.call(je, e))) {
      var s = Z.deps;
      if ((Z.f & ha) !== 0)
        e.rv < At && (e.rv = At, ke === null && s !== null && s[Ae] === e ? Ae++ : ke === null ? ke = [e] : ke.push(e));
      else {
        (Z.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Z] : Rt.call(i, Z) || i.push(Z);
      }
    }
  }
  if (A && is.delete(e), jt && wt.has(e))
    return wt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (jt) {
      var c = o.v;
      return ((o.f & de) === 0 && o.reactions !== null || ni(o)) && (c = Ra(o)), wt.set(o, c), c;
    }
    var l = (o.f & Fe) === 0 && !Ve && Z !== null && (Ln || (Z.f & Fe) !== 0), f = o.deps === null;
    Nn(o) && (l && (o.f |= Fe), Lr(o)), l && !f && ti(o);
  }
  if (qe?.has(e))
    return qe.get(e);
  if ((e.f & pt) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function ti(e) {
  if (e.deps !== null) {
    e.f |= Fe;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & Fe) === 0 && ti(
        /** @type {Derived} */
        t
      );
  }
}
r(ti, "reconnect");
function ni(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (wt.has(t) || (t.f & me) !== 0 && ni(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(ni, "depends_on_old_values");
function ai(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
r(ai, "untrack");
const ri = /* @__PURE__ */ new Set(), Ta = /* @__PURE__ */ new Set();
function As(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || _n.call(t, i), !i.cancelBubble)
      return Xn(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? gt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(As, "create_event");
function it(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = As(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && zr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(it, "event");
function De(e) {
  for (var t = 0; t < e.length; t++)
    ri.add(e[t]);
  for (var n of Ta)
    n(e);
}
r(De, "delegate");
let rr = null;
function _n(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  rr = e;
  var o = 0, c = rr === e && e.__root;
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
    Ht(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = Z, d = te;
    ze(null), Ge(null);
    try {
      for (var _, g = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i["__" + a];
          T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && T.call(i, e);
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
      e.__root = t, delete e.currentTarget, ze(v), Ge(d);
    }
  }
}
r(_n, "handle_event_propagation");
function ii(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(ii, "create_fragment_from_html");
function Fn(e, t) {
  var n = (
    /** @type {Effect} */
    te
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Fn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ii(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ bt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || Fa ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Fn(c, l);
    } else
      Fn(o, o);
    return o;
  };
}
r(j, "from_html");
function fa() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Et();
  return e.append(t, n), Fn(t, n), e;
}
r(fa, "comment");
function H(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(H, "append");
const Cs = ["touchstart", "touchmove"];
function Is(e) {
  return Cs.includes(e);
}
r(Is, "is_passive_event");
function I(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(I, "set_text");
function Ds(e, t) {
  return Ms(e, t);
}
r(Ds, "mount");
const Ut = /* @__PURE__ */ new Map();
function Ms(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  hs();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((d) => {
    for (var _ = 0; _ < d.length; _++) {
      var g = d[_];
      if (!c.has(g)) {
        c.add(g);
        var w = Is(g);
        t.addEventListener(g, _n, { passive: w });
        var T = Ut.get(g);
        T === void 0 ? (document.addEventListener(g, _n, { passive: w }), Ut.set(g, 1)) : Ut.set(g, T + 1);
      }
    }
  }, "event_handle");
  l(Kn(ri)), Ta.add(l);
  var f = void 0, v = Es(() => {
    var d = n ?? t.appendChild(Et());
    return es(
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
        t.removeEventListener(_, _n);
        var g = (
          /** @type {number} */
          Ut.get(_)
        );
        --g === 0 ? (document.removeEventListener(_, _n), Ut.delete(_)) : Ut.set(_, g);
      }
      Ta.delete(l), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return Aa.set(f, v), f;
}
r(Ms, "_mount");
let Aa = /* @__PURE__ */ new WeakMap();
function Ws(e, t) {
  const n = Aa.get(e);
  return n ? (Aa.delete(e), n(t)) : (A && (Gt in e ? zi() : ji()), Promise.resolve());
}
r(Ws, "unmount");
var Ue, nt, Ce, Ot, En, Sn, Bn;
const Ka = class Ka {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Qe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    K(this, Ue, /* @__PURE__ */ new Map());
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
    K(this, nt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    K(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    K(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    K(this, En, !0);
    K(this, Sn, /* @__PURE__ */ r(() => {
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
          Ua(a), b(this, Ot).delete(n);
        else {
          var s = b(this, Ce).get(n);
          s && (b(this, nt).set(n, s.effect), b(this, Ce).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of b(this, Ue)) {
          if (b(this, Ue).delete(i), i === t)
            break;
          const c = b(this, Ce).get(o);
          c && (Te(c.effect), b(this, Ce).delete(o));
        }
        for (const [i, o] of b(this, nt)) {
          if (i === n || b(this, Ot).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, Ue).values()).includes(i)) {
              var f = document.createDocumentFragment();
              Qr(o, f), f.append(Et()), b(this, Ce).set(i, { effect: o, fragment: f });
            } else
              Te(o);
            b(this, Ot).delete(i), b(this, nt).delete(i);
          }, "on_destroy");
          b(this, En) || !a ? (b(this, Ot).add(i), Lt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    K(this, Bn, /* @__PURE__ */ r((t) => {
      b(this, Ue).delete(t);
      const n = Array.from(b(this, Ue).values());
      for (const [a, s] of b(this, Ce))
        n.includes(a) || (Te(s.effect), b(this, Ce).delete(a));
    }, "#discard"));
    this.anchor = t, V(this, En, n);
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
    ), s = jr();
    if (n && !b(this, nt).has(t) && !b(this, Ce).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = Et();
        i.append(o), b(this, Ce).set(t, {
          effect: He(() => n(o)),
          fragment: i
        });
      } else
        b(this, nt).set(
          t,
          He(() => n(this.anchor))
        );
    if (b(this, Ue).set(a, t), s) {
      for (const [c, l] of b(this, nt))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of b(this, Ce))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, Sn)), a.ondiscard(b(this, Bn));
    } else
      b(this, Sn).call(this);
  }
};
Ue = new WeakMap(), nt = new WeakMap(), Ce = new WeakMap(), Ot = new WeakMap(), En = new WeakMap(), Sn = new WeakMap(), Bn = new WeakMap(), r(Ka, "BranchManager");
let Ca = Ka;
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
          Li(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var al = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function $(e, t, n = !1) {
  var a = new Ca(e), s = n ? nn : 0;
  function i(o, c) {
    a.ensure(o, c);
  }
  r(i, "update_branch"), za(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, i(l, c);
    }), o || i(!1, null);
  }, s);
}
r($, "if_block");
function ct(e, t) {
  return t;
}
r(ct, "index");
function Os(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, c = 0; c < s; c++) {
    let d = t[c];
    Lt(
      d,
      () => {
        if (i) {
          if (i.pending.delete(d), i.done.add(d), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ia(Kn(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
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
      bs(v), v.append(f), e.items.clear();
    }
    Ia(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Os, "pause_effects");
function Ia(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Te(e[n], t);
}
r(Ia, "destroy_effects");
var ir;
function ut(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Et());
  }
  var v = null, d = /* @__PURE__ */ os(() => {
    var W = n();
    return dr(W) ? W : W == null ? [] : Kn(W);
  }), _, g = !0;
  function w() {
    y.fallback = v, Ls(y, _, o, t, a), v !== null && (_.length === 0 ? (v.f & lt) === 0 ? Ua(v) : (v.f ^= lt, hn(v, null, o)) : Lt(v, () => {
      v = null;
    }));
  }
  r(w, "commit");
  var T = za(() => {
    _ = /** @type {V[]} */
    u(d);
    for (var W = _.length, ne = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      re
    ), D = jr(), F = 0; F < W; F += 1) {
      var S = _[F], O = a(S, F), L = g ? null : c.get(O);
      L ? (L.v && on(L.v, S), L.i && on(L.i, F), D && E.unskip_effect(L.e)) : (L = Ps(
        c,
        g ? o : ir ??= Et(),
        S,
        O,
        F,
        s,
        t,
        n
      ), g || (L.e.f |= lt), c.set(O, L)), ne.add(O);
    }
    if (W === 0 && i && !v && (g ? v = He(() => i(o)) : (v = He(() => i(ir ??= Et())), v.f |= lt)), W > ne.size && (A ? Rs(_, a) : pr("", "", "")), !g)
      if (D) {
        for (const [R, B] of c)
          ne.has(R) || E.skip_effect(B.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    u(d);
  }), y = { effect: T, items: c, outrogroups: null, fallback: v };
  g = !1;
}
r(ut, "each");
function vn(e) {
  for (; e !== null && (e.f & Je) === 0; )
    e = e.next;
  return e;
}
r(vn, "skip_to_branch");
function Ls(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = vn(e.effect.first), f, v = null, d, _ = [], g = [], w, T, y, W;
  if (i)
    for (W = 0; W < o; W += 1)
      w = t[W], T = s(w, W), y = /** @type {EachItem} */
      c.get(T).e, (y.f & lt) === 0 && (y.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(y));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], T = s(w, W), y = /** @type {EachItem} */
    c.get(T).e, e.outrogroups !== null)
      for (const B of e.outrogroups)
        B.pending.delete(y), B.done.delete(y);
    if ((y.f & lt) !== 0)
      if (y.f ^= lt, y === l)
        hn(y, null, n);
      else {
        var ne = v ? v.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), vt(e, v, y), vt(e, y, ne), hn(y, ne, n), v = y, _ = [], g = [], l = vn(v.next);
        continue;
      }
    if ((y.f & Ie) !== 0 && (Ua(y), i && (y.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (_.length < g.length) {
          var E = g[0], D;
          v = E.prev;
          var F = _[0], S = _[_.length - 1];
          for (D = 0; D < _.length; D += 1)
            hn(_[D], E, n);
          for (D = 0; D < g.length; D += 1)
            f.delete(g[D]);
          vt(e, F.prev, S.next), vt(e, v, F), vt(e, S, E), l = E, v = S, W -= 1, _ = [], g = [];
        } else
          f.delete(y), hn(y, l, n), vt(e, y.prev, y.next), vt(e, y, v === null ? e.effect.first : v.next), vt(e, v, y), v = y;
        continue;
      }
      for (_ = [], g = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = vn(l.next);
      if (l === null)
        continue;
    }
    (y.f & lt) === 0 && _.push(y), v = y, l = vn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const B of e.outrogroups)
      B.pending.size === 0 && (Ia(Kn(B.done)), e.outrogroups?.delete(B));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var O = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Ie) === 0 && O.push(y);
    for (; l !== null; )
      (l.f & Ie) === 0 && l !== e.fallback && O.push(l), l = vn(l.next);
    var L = O.length;
    if (L > 0) {
      var R = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < L; W += 1)
          O[W].nodes?.a?.measure();
        for (W = 0; W < L; W += 1)
          O[W].nodes?.a?.fix();
      }
      Os(e, O, R);
    }
  }
  i && gt(() => {
    if (d !== void 0)
      for (y of d)
        y.nodes?.a?.apply();
  });
}
r(Ls, "reconcile");
function Ps(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ us(n, !1, !1) : Ft(n) : null, f = (o & 2) !== 0 ? Ft(s) : null;
  return A && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: He(() => (i(t, l ?? n, f ?? s, c), () => {
      e.delete(a);
    }))
  };
}
r(Ps, "create_item");
function hn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & lt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kn(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(hn, "move");
function vt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(vt, "link");
function Rs(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), c = String(s);
      let l = String(i);
      l.startsWith("[object ") && (l = null), pr(o, c, l);
    }
    n.set(i, s);
  }
}
r(Rs, "validate_each_keys");
function Hs(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  J(() => {
    var c = (
      /** @type {Effect} */
      te
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (Vr(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = ii(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ bt(f)), Fn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ bt(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ bt(f)
          );
      else
        i.before(f);
    }
  });
}
r(Hs, "html");
const sr = [...` 	
\r\f \v\uFEFF`];
function Fs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var i = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var c = o + i;
          (o === 0 || sr.includes(a[o - 1])) && (c === a.length || sr.includes(a[c])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(c + 1) : o = c;
        }
  }
  return a === "" ? null : a;
}
r(Fs, "to_class");
function ln(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = Fs(n, a, i);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var f = !!i[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return i;
}
r(ln, "set_class");
const js = /* @__PURE__ */ Symbol("is custom element"), zs = /* @__PURE__ */ Symbol("is html");
function Ne(e, t) {
  var n = si(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(Ne, "set_value");
function P(e, t, n, a) {
  var s = si(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Ti] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Us(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(P, "set_attribute");
function si(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [js]: e.nodeName.includes("-"),
      [zs]: e.namespaceURI === gi
    }
  );
}
r(si, "get_attributes");
var or = /* @__PURE__ */ new Map();
function Us(e) {
  var t = e.getAttribute("is") || e.nodeName, n = or.get(t);
  if (n) return n;
  or.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = wi(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = vr(s);
  }
  return n;
}
r(Us, "get_setters");
function oi(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  ps(e, "input", async (s) => {
    A && e.type === "checkbox" && Qa();
    var i = s ? e.defaultValue : e.value;
    if (i = da(e) ? va(i) : i, n(i), re !== null && a.add(re), await Ts(), i !== (i = t())) {
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
  ai(t) == null && e.value && (n(da(e) ? va(e.value) : e.value), re !== null && a.add(re)), Br(() => {
    A && e.type === "checkbox" && Qa();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        ma ?? re
      );
      if (a.has(i))
        return;
    }
    da(e) && s === va(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(oi, "bind_value");
function da(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(da, "is_numberlike_input");
function va(e) {
  return e === "" ? null : +e;
}
r(va, "to_number");
const Bt = [];
function Bs(e, t) {
  return {
    subscribe: qs(e, t).subscribe
  };
}
r(Bs, "readable");
function qs(e, t = oa) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(c) {
    if (yr(e, c) && (e = c, n)) {
      const l = !Bt.length;
      for (const f of a)
        f[1](), Bt.push(f, e);
      if (l) {
        for (let f = 0; f < Bt.length; f += 2)
          Bt[f][0](Bt[f + 1]);
        Bt.length = 0;
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
  function o(c, l = oa) {
    const f = [c, l];
    return a.add(f), a.size === 1 && (n = t(s, i) || oa), c(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: i, subscribe: o };
}
r(qs, "writable");
function Ks(e) {
  var n, a, s;
  const i = class i extends e {
    constructor() {
      super(...arguments);
      K(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const v = f, { tagName: d } = v;
          return d && l.push(d.toUpperCase()), l;
        },
        []
      ));
      K(this, a, /* @__PURE__ */ Re(Kt({})));
      K(this, s, {});
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
      Object.assign(this.$state, l.state), v.isFirstRender && V(this, s, Ds(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Ws(b(this, s), { outro: !0 });
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
r(Ks, "SvelteApplicationMixin");
const Vs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Vs);
function x(e) {
  return game.i18n?.localize(e) ?? e;
}
r(x, "localize");
function jn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(jn, "format");
var Gs = /* @__PURE__ */ j("<span> </span>"), Ys = /* @__PURE__ */ j('<span style="color: var(--nos-text-secondary, #888)">—</span>'), Js = /* @__PURE__ */ j('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function Qs(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((R) => t.actor.update({ img: R }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ q(() => {
    const R = Object.keys(t.hitDiceData.bySize);
    return R.length === 0 ? "—" : R.length === 1 ? `d${R[0]}` : R.map((B) => `d${B}`).join("/");
  });
  var i = Js(), o = h(i);
  o.__click = a;
  var c = h(o), l = m(o, 2), f = h(l), v = h(f), d = m(f, 2);
  d.__change = ({ target: R }) => t.actor.update({ name: R.value });
  var _ = m(l, 2), g = h(_), w = h(g), T = m(g, 2), y = h(T);
  {
    var W = /* @__PURE__ */ r((R) => {
      var B = Gs(), ee = h(B);
      J(() => I(ee, t.metaData)), H(R, B);
    }, "consequent"), ne = /* @__PURE__ */ r((R) => {
      var B = Ys();
      H(R, B);
    }, "alternate");
    $(y, (R) => {
      t.metaData ? R(W) : R(ne, !1);
    });
  }
  var E = m(y, 2);
  E.__click = () => t.actor.editMetadata();
  var D = m(_, 2), F = h(D), S = h(F), O = m(F, 2), L = h(O);
  J(
    (R, B, ee, z, G) => {
      P(c, "src", u(n)), P(c, "alt", t.actor.reactive.name), I(v, R), Ne(d, t.actor.reactive.name), d.disabled = !t.editingEnabled, I(w, B), P(E, "aria-label", ee), P(E, "data-tooltip", z), E.disabled = !t.editingEnabled, I(S, G), I(L, u(s));
    },
    [
      () => x("NWS.CharacterName"),
      () => x("NWS.AncestryClassLevel"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.HitDie")
    ]
  ), H(e, i), Ee();
}
r(Qs, "HeaderRow");
De(["click", "change"]);
function Ba(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ba, "formatModifier");
var Xs = /* @__PURE__ */ j('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function Zs(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ q(() => x(n[t.abilityKey])), s = /* @__PURE__ */ q(() => jn("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ q(() => jn("NWS.RollSave", { name: u(a) }));
  var o = Xs(), c = h(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var v = h(f), d = h(v), _ = m(f, 2), g = h(_);
  J(
    (w) => {
      l = ln(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), P(c, "data-tooltip", u(i)), P(c, "aria-label", u(i)), P(f, "data-tooltip", u(s)), P(f, "aria-label", u(s)), I(d, w), I(g, u(a));
    },
    [() => Ba(t.ability.mod)]
  ), H(e, o), Ee();
}
r(Zs, "AbilityBox");
De(["click"]);
var $s = /* @__PURE__ */ j('<div class="nos-resources__mana"><label> </label> <input type="number"/> <span class="nos-resources__separator">/</span> <input type="number"/></div>'), eo = /* @__PURE__ */ j('<div class="nos-resources"><!></div>');
function to(e, t) {
  we(t, !0);
  var n = eo(), a = h(n);
  {
    var s = /* @__PURE__ */ r((i) => {
      var o = $s(), c = h(o), l = h(c), f = m(c, 2);
      f.__change = ({ target: d }) => t.updateCurrentMana(Number(d.value));
      var v = m(f, 4);
      v.__change = ({ target: d }) => t.updateMaxMana(Number(d.value)), J(
        (d) => {
          I(l, d), Ne(f, t.mana.current), Ne(v, t.mana.max || t.mana.baseMax), v.disabled = !t.editingEnabled;
        },
        [() => x("NWS.Mana")]
      ), H(i, o);
    }, "consequent");
    $(a, (i) => {
      t.hasMana && i(s);
    });
  }
  H(e, n), Ee();
}
r(to, "ClassResourceBar");
De(["change"]);
var no = /* @__PURE__ */ j('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), ao = /* @__PURE__ */ j('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), ro = /* @__PURE__ */ j('<i class="fa-solid fa-heart"></i>'), io = /* @__PURE__ */ j('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-hp"><span class="nos-combat__sub"> </span> <div class="nos-hp__bar"><input class="nos-hp__max" type="number"/></div> <div class="nos-hp__bar"><input class="nos-hp__current" type="number"/></div> <span class="nos-combat__sub"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div> <!></section>');
function so(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.movement);
  var l = io(), f = h(l), v = h(f);
  ut(v, 17, () => n, ct, (le, We) => {
    Zs(le, {
      get abilityKey() {
        return u(We);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(We)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(We)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var d = m(v, 2);
  {
    var _ = /* @__PURE__ */ r((le) => {
      var We = no(), dn = St(We);
      dn.__click = () => t.actor.configureSavingThrows();
      var In = m(dn, 2);
      In.__click = () => t.actor.configureAbilityScores(), J(
        (ra, ia) => {
          P(dn, "data-tooltip", ra), P(In, "data-tooltip", ia);
        },
        [
          () => x("NWS.ConfigureSavingThrows"),
          () => x("NWS.ConfigureAbilityScores")
        ]
      ), H(le, We);
    }, "consequent");
    $(d, (le) => {
      t.editingEnabled && le(_);
    });
  }
  var g = m(f, 2), w = h(g), T = h(w), y = m(h(T), 2), W = h(y), ne = m(y, 2), E = h(ne), D = m(T, 2), F = m(h(D), 2), S = h(F), O = m(F, 2);
  O.__change = ({ target: le }) => t.updateTempHP(Number(le.value));
  var L = m(w, 2);
  let R;
  var B = h(L), ee = h(B);
  {
    var z = /* @__PURE__ */ r((le) => {
      var We = ao();
      H(le, We);
    }, "consequent_1"), G = /* @__PURE__ */ r((le) => {
      var We = ro();
      H(le, We);
    }, "alternate");
    $(ee, (le) => {
      t.isBloodied ? le(z) : le(G, !1);
    });
  }
  var X = m(B, 2), ae = h(X), se = m(X, 2), N = h(se), p = h(N), k = m(N, 2), C = h(k);
  C.__change = ({ target: le }) => t.updateMaxHP(Number(le.value));
  var U = m(k, 2), M = h(U);
  M.__change = ({ target: le }) => t.updateCurrentHP(Number(le.value));
  var oe = m(U, 2), _e = h(oe), Y = m(se, 2);
  Y.__click = () => t.actor.configureHitPoints();
  var ie = m(L, 2);
  ie.__click = () => t.rollHitDice();
  var Q = m(h(ie), 2), ce = h(Q), ye = m(Q, 2), Me = h(ye), fe = m(ye, 2);
  fe.__click = (le) => {
    le.stopPropagation(), t.actor.configureHitDice();
  };
  var un = m(ie, 2), dt = h(un);
  dt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Tn = m(h(dt), 2), Zn = h(Tn), $n = m(Tn, 2), ea = h($n), ta = m(dt, 2), An = m(h(ta), 2), na = h(An), Cn = m(An, 2), aa = h(Cn), fn = m(Cn, 2);
  fn.__click = () => t.actor.configureMovement();
  var li = m(g, 2);
  to(li, {
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
  }), J(
    (le, We, dn, In, ra, ia, ci, fi, di, vi, _i, hi, bi) => {
      I(W, le), I(E, u(i).value), I(S, We), Ne(O, u(s).temp ?? 0), R = ln(L, 1, "nos-combat__stat", null, R, { "nos-hp--bloodied": t.isBloodied }), I(ae, dn), I(p, In), Ne(C, u(s).max), C.disabled = !t.editingEnabled, Ne(M, u(s).value), I(_e, ra), P(Y, "data-tooltip", ia), Y.disabled = !t.editingEnabled, I(ce, ci), I(Me, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), P(fe, "data-tooltip", fi), fe.disabled = !t.editingEnabled, P(dt, "data-tooltip", di), I(Zn, vi), I(ea, _i), I(na, hi), I(aa, u(c).walk), P(fn, "data-tooltip", bi), fn.disabled = !t.editingEnabled;
    },
    [
      () => x("NWS.Armor"),
      () => x("NWS.TempHP"),
      () => x("NWS.HitPoints"),
      () => x("NWS.Max"),
      () => x("NWS.Current"),
      () => x("NWS.ConfigureHitPoints"),
      () => x("NWS.HitDice"),
      () => x("NWS.ConfigureHitDice"),
      () => x("NWS.RollInitiative"),
      () => x("NWS.Initiative"),
      () => Ba(u(o).mod),
      () => x("NWS.Speed"),
      () => x("NWS.ConfigureMovement")
    ]
  ), H(e, l), Ee();
}
r(so, "StatsRow");
De(["click", "change"]);
var oo = /* @__PURE__ */ j('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function lo(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ q(() => n[t.skillKey]), o = /* @__PURE__ */ q(() => x(a[u(i)])), c = /* @__PURE__ */ q(() => x(s[t.skillKey]));
  var l = oo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), v = h(f), d = m(f, 2), _ = h(d), g = m(d, 2), w = h(g);
  J(
    (T, y) => {
      P(l, "data-tooltip", T), I(v, u(o)), I(_, y), I(w, u(c));
    },
    [
      () => jn("NWS.RollSkill", { name: u(c) }),
      () => Ba(t.skill.mod)
    ]
  ), H(e, l), Ee();
}
r(lo, "SkillCell");
De(["click"]);
var co = /* @__PURE__ */ j('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), uo = /* @__PURE__ */ j('<section class="nos-skills-row"><!> <!></section>');
function fo(e, t) {
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
  var a = uo(), s = h(a);
  ut(s, 17, () => n, ct, (c, l) => {
    lo(c, {
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
      var l = co();
      l.__click = () => t.actor.configureSkills(), J((f) => P(l, "data-tooltip", f), [() => x("NWS.ConfigureSkills")]), H(c, l);
    }, "consequent");
    $(i, (c) => {
      t.editingEnabled && c(o);
    });
  }
  H(e, a), Ee();
}
r(fo, "SkillsRow");
De(["click"]);
var vo = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), _o = /* @__PURE__ */ j('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), ho = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), bo = /* @__PURE__ */ j('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), mo = /* @__PURE__ */ j('<div class="nos-feature-row"><!> <!></div>'), po = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), go = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), yo = /* @__PURE__ */ j('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), wo = /* @__PURE__ */ j('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Eo = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), So = /* @__PURE__ */ j('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), xo = /* @__PURE__ */ j('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), ko = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), No = /* @__PURE__ */ j('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), To = /* @__PURE__ */ j('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Ao = /* @__PURE__ */ j('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Co = /* @__PURE__ */ j("<!> <!> <!> <!> <!>", 1);
function lr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((S) => S.type === "feature")), a = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((S) => S.type === "boon")), s = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "ancestry") ?? null), i = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "background") ?? null), o = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "class") ?? null), c = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "subclass") ?? null);
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
  var d = Co(), _ = St(d);
  {
    var g = /* @__PURE__ */ r((S) => {
      var O = mo(), L = h(O);
      {
        var R = /* @__PURE__ */ r((z) => {
          var G = _o(), X = h(G), ae = h(X), se = m(X, 2), N = h(se), p = m(N, 2);
          p.__click = () => l(u(s).id);
          var k = h(p), C = m(p, 2);
          {
            var U = /* @__PURE__ */ r((M) => {
              var oe = vo(), _e = h(oe);
              _e.__click = () => l(u(s).id);
              var Y = m(_e, 2);
              Y.__click = () => f(u(s).id), H(M, oe);
            }, "consequent");
            $(C, (M) => {
              t.editingEnabled && M(U);
            });
          }
          J(
            (M) => {
              I(ae, M), P(N, "src", u(s).img), P(N, "alt", u(s).name), I(k, u(s).name);
            },
            [() => x("NWS.Ancestry")]
          ), it("dragstart", se, (M) => v(M, u(s))), H(z, G);
        }, "consequent_1");
        $(L, (z) => {
          u(s) && z(R);
        });
      }
      var B = m(L, 2);
      {
        var ee = /* @__PURE__ */ r((z) => {
          var G = bo(), X = h(G), ae = h(X), se = m(X, 2), N = h(se), p = m(N, 2);
          p.__click = () => l(u(i).id);
          var k = h(p), C = m(p, 2);
          {
            var U = /* @__PURE__ */ r((M) => {
              var oe = ho(), _e = h(oe);
              _e.__click = () => l(u(i).id);
              var Y = m(_e, 2);
              Y.__click = () => f(u(i).id), H(M, oe);
            }, "consequent_2");
            $(C, (M) => {
              t.editingEnabled && M(U);
            });
          }
          J(
            (M) => {
              I(ae, M), P(N, "src", u(i).img), P(N, "alt", u(i).name), I(k, u(i).name);
            },
            [() => x("NWS.Background")]
          ), it("dragstart", se, (M) => v(M, u(i))), H(z, G);
        }, "consequent_3");
        $(B, (z) => {
          u(i) && z(ee);
        });
      }
      H(S, O);
    }, "consequent_4");
    $(_, (S) => {
      (u(s) || u(i)) && S(g);
    });
  }
  var w = m(_, 2);
  {
    var T = /* @__PURE__ */ r((S) => {
      var O = wo(), L = h(O), R = h(L), B = m(L, 2), ee = h(B), z = m(ee, 2);
      z.__click = () => l(u(o).id);
      var G = h(z), X = m(z, 2);
      {
        var ae = /* @__PURE__ */ r((p) => {
          var k = po(), C = h(k);
          C.__click = () => l(u(o).id);
          var U = m(C, 2);
          U.__click = () => f(u(o).id), H(p, k);
        }, "consequent_5");
        $(X, (p) => {
          t.editingEnabled && p(ae);
        });
      }
      var se = m(B, 2);
      {
        var N = /* @__PURE__ */ r((p) => {
          var k = yo(), C = h(k), U = m(C, 2);
          U.__click = () => l(u(c).id);
          var M = h(U), oe = m(U, 2);
          {
            var _e = /* @__PURE__ */ r((Y) => {
              var ie = go(), Q = h(ie);
              Q.__click = () => l(u(c).id);
              var ce = m(Q, 2);
              ce.__click = () => f(u(c).id), H(Y, ie);
            }, "consequent_6");
            $(oe, (Y) => {
              t.editingEnabled && Y(_e);
            });
          }
          J(() => {
            P(C, "src", u(c).img), P(C, "alt", u(c).name), I(M, u(c).name);
          }), it("dragstart", k, (Y) => v(Y, u(c))), H(p, k);
        }, "consequent_7");
        $(se, (p) => {
          u(c) && p(N);
        });
      }
      J(
        (p, k) => {
          I(R, p), P(ee, "src", u(o).img), P(ee, "alt", u(o).name), I(G, `${u(o).name ?? ""} (${k ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => x("NWS.Class"), () => x("NWS.Level")]
      ), it("dragstart", B, (p) => v(p, u(o))), H(S, O);
    }, "consequent_8");
    $(w, (S) => {
      u(o) && S(T);
    });
  }
  var y = m(w, 2);
  {
    var W = /* @__PURE__ */ r((S) => {
      var O = xo(), L = h(O), R = h(L), B = m(L, 2);
      ut(B, 21, () => u(n), ct, (ee, z) => {
        var G = So(), X = h(G), ae = m(X, 2);
        ae.__click = () => l(u(z).id);
        var se = h(ae), N = m(ae, 2);
        {
          var p = /* @__PURE__ */ r((k) => {
            var C = Eo(), U = h(C);
            U.__click = () => l(u(z).id);
            var M = m(U, 2);
            M.__click = () => f(u(z).id), H(k, C);
          }, "consequent_9");
          $(N, (k) => {
            t.editingEnabled && k(p);
          });
        }
        J(() => {
          P(X, "src", u(z).img), P(X, "alt", u(z).name), I(se, u(z).name);
        }), it("dragstart", G, (k) => v(k, u(z))), H(ee, G);
      }), J((ee) => I(R, ee), [() => x("NWS.Features")]), H(S, O);
    }, "consequent_10");
    $(y, (S) => {
      u(n).length > 0 && S(W);
    });
  }
  var ne = m(y, 2);
  {
    var E = /* @__PURE__ */ r((S) => {
      var O = To(), L = h(O), R = h(L), B = m(L, 2);
      ut(B, 21, () => u(a), ct, (ee, z) => {
        var G = No(), X = h(G), ae = m(X, 2);
        ae.__click = () => l(u(z).id);
        var se = h(ae), N = m(ae, 2);
        {
          var p = /* @__PURE__ */ r((k) => {
            var C = ko(), U = h(C);
            U.__click = () => l(u(z).id);
            var M = m(U, 2);
            M.__click = () => f(u(z).id), H(k, C);
          }, "consequent_11");
          $(N, (k) => {
            t.editingEnabled && k(p);
          });
        }
        J(() => {
          P(X, "src", u(z).img), P(X, "alt", u(z).name), I(se, u(z).name);
        }), it("dragstart", G, (k) => v(k, u(z))), H(ee, G);
      }), J((ee) => I(R, ee), [() => x("NWS.Boons")]), H(S, O);
    }, "consequent_12");
    $(ne, (S) => {
      u(a).length > 0 && S(E);
    });
  }
  var D = m(ne, 2);
  {
    var F = /* @__PURE__ */ r((S) => {
      var O = Ao(), L = h(O);
      J((R) => I(L, R), [() => x("NWS.DropFeaturesHere")]), H(S, O);
    }, "consequent_13");
    $(D, (S) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && S(F);
    });
  }
  H(e, d), Ee();
}
r(lr, "FeaturesTab");
De(["click"]);
var Io = /* @__PURE__ */ j('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Do = /* @__PURE__ */ j('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Mo = /* @__PURE__ */ j('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Wo = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Oo = /* @__PURE__ */ j('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), Lo = /* @__PURE__ */ j('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Po = /* @__PURE__ */ j('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ro = /* @__PURE__ */ j('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function cr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Re(""), a = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, D) => (E.sort ?? 0) - (D.sort ?? 0))), s = /* @__PURE__ */ q(() => u(n) ? u(a).filter((E) => E.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ q(() => {
    const E = {};
    for (const D of u(s)) {
      const F = D.system?.tier ?? 0, S = D.system?.isUtility ?? !1, O = S ? "_utility" : `_tier_${F}`, L = S ? x("NWS.Utility") : jn("NWS.Tier", { n: F });
      E[O] ??= { label: L, spells: [] }, E[O].spells.push(D);
    }
    return Object.entries(E).sort(([D], [F]) => {
      if (D === "_utility") return 1;
      if (F === "_utility") return -1;
      const S = parseInt(D.replace("_tier_", "")), O = parseInt(F.replace("_tier_", ""));
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
  function v(E, D) {
    const F = { type: "Item", uuid: D.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(F));
  }
  r(v, "onDragStart");
  var d = Ro(), _ = St(d), g = m(h(_), 2), w = m(g, 2);
  {
    var T = /* @__PURE__ */ r((E) => {
      var D = Io();
      D.__click = l;
      var F = m(h(D));
      J((S) => I(F, ` ${S ?? ""}`), [() => x("NWS.New")]), H(E, D);
    }, "consequent");
    $(w, (E) => {
      t.editingEnabled && E(T);
    });
  }
  var y = m(_, 2);
  ut(y, 17, () => u(i), ct, (E, D) => {
    var F = /* @__PURE__ */ q(() => ki(u(D), 2));
    let S = /* @__PURE__ */ r(() => u(F)[1], "tier");
    var O = Lo(), L = h(O), R = h(L), B = m(L, 2);
    ut(B, 21, () => S().spells, ct, (ee, z) => {
      var G = Oo(), X = h(G), ae = m(X, 2);
      ae.__click = () => f(u(z).id);
      var se = h(ae), N = m(se);
      {
        var p = /* @__PURE__ */ r((Y) => {
          var ie = Do();
          J((Q) => P(ie, "data-tooltip", Q), [() => x("NWS.Concentration")]), H(Y, ie);
        }, "consequent_1");
        $(N, (Y) => {
          u(z).system?.concentration && Y(p);
        });
      }
      var k = m(N, 2);
      {
        var C = /* @__PURE__ */ r((Y) => {
          var ie = Mo();
          J((Q) => P(ie, "data-tooltip", Q), [() => x("NWS.Utility")]), H(Y, ie);
        }, "consequent_2");
        $(k, (Y) => {
          u(z).system?.isUtility && Y(C);
        });
      }
      var U = m(ae, 2), M = h(U), oe = m(U, 2);
      {
        var _e = /* @__PURE__ */ r((Y) => {
          var ie = Wo(), Q = h(ie);
          Q.__click = () => o(u(z).id);
          var ce = m(Q, 2);
          ce.__click = () => c(u(z).id), H(Y, ie);
        }, "consequent_3");
        $(oe, (Y) => {
          t.editingEnabled && Y(_e);
        });
      }
      J(() => {
        P(X, "src", u(z).img), P(X, "alt", u(z).name), I(se, `${u(z).name ?? ""} `), I(M, u(z).system?.activationCost ?? "");
      }), it("dragstart", G, (Y) => v(Y, u(z))), H(ee, G);
    }), J(() => I(R, S().label)), H(E, O);
  });
  var W = m(y, 2);
  {
    var ne = /* @__PURE__ */ r((E) => {
      var D = Po(), F = h(D);
      J((S) => I(F, S), [() => x("NWS.DropSpellsHere")]), H(E, D);
    }, "consequent_4");
    $(W, (E) => {
      u(a).length === 0 && E(ne);
    });
  }
  J((E) => P(g, "placeholder", E), [() => x("NWS.SearchSpells")]), oi(g, () => u(n), (E) => Be(n, E)), H(e, d), Ee();
}
r(cr, "SpellsTab");
De(["click"]);
var Ho = /* @__PURE__ */ j('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Fo = /* @__PURE__ */ j('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), jo = /* @__PURE__ */ j('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), zo = /* @__PURE__ */ j('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ j('<div class="nos-currency"><div class="nos-currency__coin"><label> </label> <input type="number"/></div> <div class="nos-currency__coin"><label> </label> <input type="number"/></div> <div class="nos-currency__coin"><label> </label> <input type="number"/></div></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function ur(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Re(""), a = /* @__PURE__ */ q(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((N) => N.type === "object").sort((N, p) => (N.sort ?? 0) - (p.sort ?? 0))), i = /* @__PURE__ */ q(() => u(n) ? u(s).filter((N) => N.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
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
    const k = { type: "Item", uuid: p.uuid };
    N.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  r(d, "onDragStart");
  var _ = Uo(), g = St(_), w = h(g), T = h(w), y = h(T), W = m(T, 2);
  W.__change = ({ target: N }) => f("gp", N.value);
  var ne = m(w, 2), E = h(ne), D = h(E), F = m(E, 2);
  F.__change = ({ target: N }) => f("sp", N.value);
  var S = m(ne, 2), O = h(S), L = h(O), R = m(O, 2);
  R.__change = ({ target: N }) => f("cp", N.value);
  var B = m(g, 2), ee = m(h(B), 2), z = m(ee, 2);
  {
    var G = /* @__PURE__ */ r((N) => {
      var p = Ho();
      p.__click = l;
      var k = m(h(p));
      J((C) => I(k, ` ${C ?? ""}`), [() => x("NWS.New")]), H(N, p);
    }, "consequent");
    $(z, (N) => {
      t.editingEnabled && N(G);
    });
  }
  var X = m(B, 2);
  ut(X, 21, () => u(i), ct, (N, p) => {
    var k = jo(), C = h(k), U = m(C, 2);
    U.__click = () => o(u(p).id);
    var M = h(U), oe = m(U, 2);
    oe.__change = ({ target: ie }) => v(u(p).id, ie.value);
    var _e = m(oe, 2);
    {
      var Y = /* @__PURE__ */ r((ie) => {
        var Q = Fo(), ce = h(Q);
        ce.__click = () => o(u(p).id);
        var ye = m(ce, 2);
        ye.__click = () => c(u(p).id), H(ie, Q);
      }, "consequent_1");
      $(_e, (ie) => {
        t.editingEnabled && ie(Y);
      });
    }
    J(() => {
      P(C, "src", u(p).img), P(C, "alt", u(p).name), I(M, u(p).name), Ne(oe, u(p).system?.quantity ?? 1);
    }), it("dragstart", k, (ie) => d(ie, u(p))), H(N, k);
  });
  var ae = m(X, 2);
  {
    var se = /* @__PURE__ */ r((N) => {
      var p = zo(), k = h(p);
      J((C) => I(k, C), [() => x("NWS.DropInventoryHere")]), H(N, p);
    }, "consequent_2");
    $(ae, (N) => {
      u(s).length === 0 && N(se);
    });
  }
  J(
    (N, p, k, C) => {
      I(y, N), Ne(W, u(a).gp?.value ?? 0), I(D, p), Ne(F, u(a).sp?.value ?? 0), I(L, k), Ne(R, u(a).cp?.value ?? 0), P(ee, "placeholder", C);
    },
    [
      () => x("NWS.GP"),
      () => x("NWS.SP"),
      () => x("NWS.CP"),
      () => x("NWS.SearchItems")
    ]
  ), oi(ee, () => u(n), (N) => Be(n, N)), H(e, _), Ee();
}
r(ur, "InventoryTab");
De(["change", "click"]);
var Bo = /* @__PURE__ */ j(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function fr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.system.details), a = /* @__PURE__ */ q(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ q(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ q(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ q(() => (u(a).weapons ?? []).join(", "));
  var c = Bo(), l = h(c), f = h(l), v = h(f), d = m(f, 2);
  d.__change = ({ target: fe }) => t.actor.update({ "system.details.age": fe.value });
  var _ = m(l, 2), g = h(_), w = h(g), T = m(g, 2);
  T.__change = ({ target: fe }) => t.actor.update({ "system.details.gender": fe.value });
  var y = m(_, 2), W = h(y), ne = h(W), E = m(W, 2);
  E.__change = ({ target: fe }) => t.actor.update({ "system.details.height": fe.value });
  var D = m(y, 2), F = h(D), S = h(F), O = m(F, 2);
  O.__change = ({ target: fe }) => t.actor.update({ "system.details.weight": fe.value });
  var L = m(D, 2), R = h(L), B = h(R), ee = m(R, 2), z = h(ee), G = m(ee, 2);
  G.__click = () => t.actor.configureLanguageProficiencies();
  var X = m(L, 2), ae = h(X), se = h(ae), N = m(ae, 2), p = h(N), k = m(N, 2);
  k.__click = () => t.actor.configureArmorProficiencies();
  var C = m(X, 2), U = h(C), M = h(U), oe = m(U, 2), _e = h(oe), Y = m(oe, 2);
  Y.__click = () => t.actor.configureWeaponProficiencies();
  var ie = m(C, 2), Q = h(ie), ce = h(Q), ye = m(Q, 2), Me = h(ye);
  Hs(Me, () => u(n).notes ?? ""), J(
    (fe, un, dt, Tn, Zn, $n, ea, ta, An, na, Cn, aa, fn) => {
      I(v, fe), Ne(d, u(n).age ?? ""), d.disabled = !t.editingEnabled, I(w, un), Ne(T, u(n).gender ?? ""), T.disabled = !t.editingEnabled, I(ne, dt), Ne(E, u(n).height ?? ""), P(E, "placeholder", Tn), E.disabled = !t.editingEnabled, I(S, Zn), Ne(O, u(n).weight ?? ""), P(O, "placeholder", $n), O.disabled = !t.editingEnabled, I(B, ea), I(z, u(s) || "—"), P(G, "data-tooltip", ta), G.disabled = !t.editingEnabled, I(se, An), I(p, u(i) || "—"), P(k, "data-tooltip", na), k.disabled = !t.editingEnabled, I(M, Cn), I(_e, u(o) || "—"), P(Y, "data-tooltip", aa), Y.disabled = !t.editingEnabled, I(ce, fn), P(ye, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), it("blur", ye, ({ target: fe }) => t.actor.update({ "system.details.notes": fe.innerHTML })), H(e, c), Ee();
}
r(fr, "BioTab");
De(["change", "click"]);
var qo = /* @__PURE__ */ j('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Ko = /* @__PURE__ */ j('<div class="nos-slot nos-slot--empty"> </div>'), Vo = /* @__PURE__ */ j("<!> <!>", 1);
function Go(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = Vo(), s = St(a);
  ut(s, 17, () => u(n), ct, (c, l) => {
    var f = qo(), v = h(f), d = m(v, 2);
    d.__click = () => t.actor.activateItem(u(l).id);
    var _ = h(d);
    J(() => {
      P(v, "src", u(l).img), P(v, "alt", u(l).name), P(d, "data-tooltip", u(l).name), I(_, u(l).name);
    }), H(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = Ko(), f = h(l);
      J((v) => I(f, v), [() => x("NWS.NoWeapons")]), H(c, l);
    }, "consequent");
    $(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  H(e, a), Ee();
}
r(Go, "InventorySlots");
De(["click"]);
var Yo = /* @__PURE__ */ j('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), Jo = /* @__PURE__ */ j('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), Qo = /* @__PURE__ */ j('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function Xo(e, t) {
  we(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: lr
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: cr
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: ur
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: fr
    }
  ];
  let a = /* @__PURE__ */ Re("features"), s = /* @__PURE__ */ q(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ q(() => t.actor.reactive.system.inventory);
  var o = Qo(), c = h(o);
  ut(c, 21, () => n, ct, (E, D) => {
    var F = Yo();
    let S;
    F.__click = () => Be(a, u(D).name, !0);
    var O = h(F), L = m(O);
    J(
      (R) => {
        S = ln(F, 1, "nos-tab-btn", null, S, { "nos-tab-btn--active": u(a) === u(D).name }), ln(O, 1, u(D).icon), I(L, ` ${R ?? ""}`);
      },
      [() => x(u(D).labelKey)]
    ), H(E, F);
  });
  var l = m(c, 2), f = h(l);
  {
    var v = /* @__PURE__ */ r((E) => {
      lr(E, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), d = /* @__PURE__ */ r((E) => {
      var D = fa(), F = St(D);
      {
        var S = /* @__PURE__ */ r((L) => {
          cr(L, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), O = /* @__PURE__ */ r((L) => {
          var R = fa(), B = St(R);
          {
            var ee = /* @__PURE__ */ r((G) => {
              ur(G, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), z = /* @__PURE__ */ r((G) => {
              var X = fa(), ae = St(X);
              {
                var se = /* @__PURE__ */ r((N) => {
                  fr(N, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                $(
                  ae,
                  (N) => {
                    u(a) === "bio" && N(se);
                  },
                  !0
                );
              }
              H(G, X);
            }, "alternate");
            $(
              B,
              (G) => {
                u(a) === "inventory" ? G(ee) : G(z, !1);
              },
              !0
            );
          }
          H(L, R);
        }, "alternate_1");
        $(
          F,
          (L) => {
            u(a) === "spells" ? L(S) : L(O, !1);
          },
          !0
        );
      }
      H(E, D);
    }, "alternate_2");
    $(f, (E) => {
      u(a) === "features" ? E(v) : E(d, !1);
    });
  }
  var _ = m(l, 2), g = h(_), w = h(g), T = m(_, 2), y = h(T);
  Go(y, {
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
      var D = Jo(), F = h(D);
      J(() => I(F, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), H(E, D);
    }, "consequent_4");
    $(W, (E) => {
      u(s) && E(ne);
    });
  }
  J((E) => I(w, E), [() => x("NWS.Weapons")]), H(e, o), Ee();
}
r(Xo, "ContentArea");
De(["click"]);
var Zo = /* @__PURE__ */ j('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function $o(e, t) {
  we(t, !0);
  var n = Zo(), a = h(n);
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
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), J(
    (v, d, _, g, w, T, y, W, ne, E) => {
      s = ln(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), P(a, "aria-pressed", t.editingEnabled), P(a, "aria-label", v), P(a, "data-tooltip", d), ln(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), P(o, "aria-label", _), P(o, "data-tooltip", g), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, P(c, "aria-label", w), P(c, "data-tooltip", T), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, P(l, "aria-label", y), P(l, "data-tooltip", W), P(f, "aria-label", ne), P(f, "data-tooltip", E);
    },
    [
      () => t.editingEnabled ? x("NWS.DisableEditing") : x("NWS.EnableEditing"),
      () => t.editingEnabled ? x("NWS.EditingEnabled") : x("NWS.EditingLocked"),
      () => x("NWS.LevelUp"),
      () => x("NWS.LevelUp"),
      () => x("NWS.RevertLastLevelUp"),
      () => x("NWS.RevertLastLevelUp"),
      () => x("NWS.FieldRest"),
      () => x("NWS.FieldRest"),
      () => x("NWS.SafeRest"),
      () => x("NWS.SafeRest")
    ]
  ), H(e, n), Ee();
}
r($o, "SidebarControls");
De(["click"]);
var el = /* @__PURE__ */ j('<div class="nos-sheet" style="position: relative;"><!> <!> <!> <!> <!> <span class="nos-logo">Nimble</span></div>');
function tl(e, t) {
  we(t, !0);
  const n = Or((p) => {
    const k = {
      updateActor: Hooks.on("updateActor", (C, U, M) => {
        M.diff !== !1 && C._id === t.actor.id && p();
      }),
      createItem: Hooks.on("createItem", (C) => {
        C?.actor?.id === t.actor.id && p();
      }),
      deleteItem: Hooks.on("deleteItem", (C) => {
        C?.actor?.id === t.actor.id && p();
      }),
      updateItem: Hooks.on("updateItem", (C, U, M) => {
        M.diff !== !1 && C?.actor?.id === t.actor.id && p();
      })
    };
    return () => {
      Hooks.off("updateActor", k.updateActor), Hooks.off("createItem", k.createItem), Hooks.off("deleteItem", k.deleteItem), Hooks.off("updateItem", k.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(p, k) {
      if (k === "reactive")
        return n(), p;
      const C = p[k];
      return typeof C == "function" ? C.bind(p) : C;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(p, k) {
    return Math.clamp(0, Math.round(p / k * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(p, k, C, U) {
    const M = [];
    return C && M.push(`${C.name} (${s[U] ?? U})`), p && (k ? M.push(`${p.name} (${k.name}, ${p.system.classLevel})`) : M.push(`${p.name} (${p.system.classLevel})`)), M.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(p, k) {
    if (!k) return p;
    const C = [4, 6, 8, 10, 12, 20], U = C.indexOf(p);
    return U === -1 ? p : C[Math.min(U + k, C.length - 1)];
  }
  r(f, "incrementDieSize");
  let v = /* @__PURE__ */ q(() => c(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
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
  let w = /* @__PURE__ */ q(() => a.reactive.system.resources.mana), T = /* @__PURE__ */ q(() => (u(w).max ?? 0) > 0 || (u(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((p) => p.type === "class" && p.system?.mana?.formula?.length));
  function y(p) {
    a.update({ "system.resources.mana.current": p });
  }
  r(y, "updateCurrentMana");
  function W(p) {
    const k = a.reactive.system.resources.mana, C = k.baseMax ?? 0, M = (k.max || C) - C, oe = Math.max(0, p - M);
    a.update({ "system.resources.mana.baseMax": oe });
  }
  r(W, "updateMaxMana");
  let ne = /* @__PURE__ */ q(() => {
    const p = a.reactive.system.attributes.hitDice, k = a.reactive.system.attributes.bonusHitDice ?? [], C = a.reactive.items.filter((Q) => Q.type === "class"), U = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, M = {};
    for (const Q of C) {
      const ce = Q.system.hitDieSize, ye = f(ce, U), Me = Q.system.classLevel;
      M[ye] ??= { current: 0, total: 0 }, M[ye].total += Me, M[ye].current = p[ye]?.current ?? 0;
    }
    const oe = C.map((Q) => f(Q.system.hitDieSize, U));
    for (const Q of k) {
      const ce = f(Q.size, U);
      M[ce] ??= { current: p[ce]?.current ?? 0, total: 0 }, M[ce].total += Q.value, oe.includes(ce) || (M[ce].current = p[ce]?.current ?? 0);
    }
    const _e = k.map((Q) => f(Q.size, U));
    for (const [Q, ce] of Object.entries(p ?? {})) {
      const ye = Number(Q), Me = f(ye, U), fe = ce?.bonus ?? 0;
      if (fe > 0) {
        M[Me] ??= { current: 0, total: 0 }, M[Me].total += fe;
        const un = oe.includes(Me), dt = _e.includes(Me);
        !un && !dt && (M[Me].current = p[Me]?.current ?? 0);
      }
    }
    let Y = 0, ie = 0;
    for (const Q of Object.values(M))
      Y += Q.current, ie += Q.total;
    return { bySize: M, value: Y, max: ie };
  });
  async function E(p) {
    await a.updateCurrentHitDice(p);
  }
  r(E, "updateCurrentHitDice");
  async function D() {
    await a.rollHitDice();
  }
  r(D, "rollHitDice");
  async function F() {
    await a.editCurrentHitDice();
  }
  r(F, "editCurrentHitDice");
  let S = /* @__PURE__ */ q(() => a.reactive.items.find((p) => p.type === "class") ?? null), O = /* @__PURE__ */ q(() => {
    const p = a.reactive.items.find((M) => M.type === "class") ?? null, k = a.reactive.items.find((M) => M.type === "subclass") ?? null, C = a.reactive.items.find((M) => M.type === "ancestry") ?? null, U = a.reactive.system.attributes.sizeCategory;
    return l(p, k, C, U);
  }), L = /* @__PURE__ */ q(() => a.reactive.flags.nimble), R = /* @__PURE__ */ q(() => u(L)?.editingEnabled ?? !0);
  const B = Bs(!1, (p) => (ws(() => p(u(R))), () => {
  }));
  async function ee() {
    await a.setFlag("nimble", "editingEnabled", !u(R));
  }
  r(ee, "toggleEditingEnabled"), Dn("actor", a), Dn("document", a), Dn("application", t.sheet), Dn("editingEnabled", B);
  var z = el(), G = h(z);
  Qs(G, {
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
  var X = m(G, 2);
  so(X, {
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
      return u(T);
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
    rollHitDice: D,
    editCurrentHitDice: F
  });
  var ae = m(X, 2);
  fo(ae, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(R);
    }
  });
  var se = m(ae, 2);
  Xo(se, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(R);
    },
    get hasMana() {
      return u(T);
    },
    get mana() {
      return u(w);
    },
    updateCurrentMana: y,
    updateMaxMana: W
  });
  var N = m(se, 2);
  $o(N, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(R);
    },
    toggleEditingEnabled: ee,
    get classItem() {
      return u(S);
    }
  }), H(e, z), Ee();
}
r(tl, "WhiteSheet");
const qn = class qn extends Ks(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  props;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = tl;
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
r(qn, "WhiteCharacterSheet"), Qe(qn, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Da = qn;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-white-sheet",
    Da,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Nimble White Sheet"
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
