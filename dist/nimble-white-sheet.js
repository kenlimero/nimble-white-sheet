var Ja = Object.defineProperty;
var Qa = (e) => {
  throw TypeError(e);
};
var Ei = (e, t, n) => t in e ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Ja(e, "name", { value: t, configurable: !0 });
var He = (e, t, n) => Ei(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Qa("Cannot " + n);
var h = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), q = (e, t, n) => t.has(e) ? Qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), K = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), ye = (e, t, n) => (la(e, t, "access private method"), n);
const be = /* @__PURE__ */ Symbol(), Si = /* @__PURE__ */ Symbol("filename"), ki = "http://www.w3.org/1999/xhtml", Xa = globalThis.process?.env?.NODE_ENV, A = Xa && !Xa.toLowerCase().startsWith("prod");
var hr = Array.isArray, xi = Array.prototype.indexOf, Bt = Array.prototype.includes, Jn = Array.from, qt = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Ni = Object.getOwnPropertyDescriptors, Ti = Object.prototype, Ii = Array.prototype, br = Object.getPrototypeOf, Za = Object.isExtensible;
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
const ge = 2, ba = 4, Qn = 8, pr = 1 << 24, mt = 16, tt = 32, Gt = 64, La = 128, Be = 512, de = 1024, pe = 2048, Ze = 4096, De = 8192, Et = 16384, Ha = 32768, fn = 65536, Un = 1 << 17, yr = 1 << 18, mn = 1 << 19, Mi = 1 << 20, ht = 1 << 25, At = 32768, ma = 1 << 21, Xn = 1 << 22, St = 1 << 23, tn = /* @__PURE__ */ Symbol("$state"), Di = /* @__PURE__ */ Symbol(""), wr = /* @__PURE__ */ Symbol("proxy path");
var nn;
const Zt = new (nn = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(nn, "StaleReactionError"), nn)();
function Ci(e) {
  if (A) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Ci, "lifecycle_outside_component");
function Wi() {
  if (A) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Wi, "async_derived_orphan");
function $a() {
  if (A) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r($a, "bind_invalid_checkbox_value");
function Oi() {
  if (A) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Oi, "derived_references_self");
function Er(e, t, n) {
  if (A) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(Er, "each_key_duplicate");
function Li(e) {
  if (A) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Li, "effect_in_teardown");
function Hi() {
  if (A) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Hi, "effect_in_unowned_derived");
function Pi(e) {
  if (A) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Pi, "effect_orphan");
function Ri() {
  if (A) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Ri, "effect_update_depth_exceeded");
function Fi(e) {
  if (A) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Fi, "rune_outside_svelte");
function ji() {
  if (A) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(ji, "state_descriptors_fixed");
function zi() {
  if (A) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(zi, "state_prototype_fixed");
function Ui() {
  if (A) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Ui, "state_unsafe_mutation");
function Bi() {
  if (A) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(Bi, "svelte_boundary_reset_onerror");
var Zn = "font-weight: bold", $n = "font-weight: normal";
function qi() {
  A ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Zn, $n) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(qi, "lifecycle_double_unmount");
function ua(e) {
  A ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Zn, $n) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(ua, "state_proxy_equality_mismatch");
function Ki() {
  A ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Zn, $n) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Ki, "state_proxy_unmount");
function Vi() {
  A ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Zn, $n) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
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
function nt(e, t) {
  return e.label = t, Nr(e.v, t), e;
}
r(nt, "tag");
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
let me = null;
function dn(e) {
  me = e;
}
r(dn, "set_component_context");
let xn = null;
function Bn(e) {
  xn = e;
}
r(Bn, "set_dev_stack");
let Dn = null;
function er(e) {
  Dn = e;
}
r(er, "set_dev_current_component_function");
function Hn(e, t) {
  return Qi("setContext").set(e, t), t;
}
r(Hn, "setContext");
function we(e, t = !1, n) {
  me = {
    p: me,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, A && (me.function = n, Dn = n);
}
r(we, "push");
function Ee(e) {
  var t = (
    /** @type {ComponentContext} */
    me
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Vr(a);
  }
  return t.i = !0, me = t.p, A && (Dn = me?.function ?? null), /** @type {T} */
  {};
}
r(Ee, "pop");
function Tr() {
  return !0;
}
r(Tr, "is_runes");
function Qi(e) {
  return me === null && Ci(e), me.c ??= new Map(Xi(me) || void 0);
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
function kt(e) {
  if (Wt.length === 0 && !Sn) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Ir();
    });
  }
  Wt.push(e);
}
r(kt, "queue_micro_task");
function Zi() {
  for (; Wt.length > 0; )
    Ir();
}
r(Zi, "flush_tasks");
const ga = /* @__PURE__ */ new WeakMap();
function Ar(e) {
  var t = ae;
  if (t === null)
    return $.f |= St, e;
  if (A && e instanceof Error && !ga.has(e) && ga.set(e, $i(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw A && !t.parent && e instanceof Error && Mr(e), e;
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
  throw A && e instanceof Error && Mr(e), e;
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
function Mr(e) {
  const t = ga.get(e);
  t && (qt(e, "message", {
    value: t.message
  }), qt(e, "stack", {
    value: t.stack
  }));
}
r(Mr, "apply_adjustments");
const es = -7169;
function fe(e, t) {
  e.f = e.f & es | t;
}
r(fe, "set_signal_status");
function Pa(e) {
  (e.f & Be) !== 0 || e.deps === null ? fe(e, de) : fe(e, Ze);
}
r(Pa, "update_derived_status");
function Dr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & At) === 0 || (t.f ^= At, Dr(
        /** @type {Derived} */
        t.deps
      ));
}
r(Dr, "clear_marked");
function Cr(e, t, n) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & Ze) !== 0 && n.add(e), Dr(e.deps), fe(e, de);
}
r(Cr, "defer_effect");
const Pn = /* @__PURE__ */ new Set();
let ie = null, pa = null, Ye = null, xe = [], ea = null, ya = !1, Sn = !1;
var an, rn, Lt, sn, Tn, In, Ht, vt, on, ct, wa, Ea, Wr;
const Vn = class Vn {
  constructor() {
    q(this, ct);
    He(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    He(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    He(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    q(this, an, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, rn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, Lt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    q(this, sn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, Tn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, In, /* @__PURE__ */ new Set());
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
    He(this, "is_fork", !1);
    q(this, on, !1);
  }
  is_deferred() {
    return this.is_fork || h(this, sn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    h(this, vt).has(t) || h(this, vt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = h(this, vt).get(t);
    if (n) {
      h(this, vt).delete(t);
      for (var a of n.d)
        fe(a, pe), Je(a);
      for (a of n.m)
        fe(a, Ze), Je(a);
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
      ye(this, ct, wa).call(this, s, n, a);
    if (this.is_deferred()) {
      ye(this, ct, Ea).call(this, a), ye(this, ct, Ea).call(this, n);
      for (const [s, i] of h(this, vt))
        Pr(s, i);
    } else {
      for (const s of h(this, an)) s();
      h(this, an).clear(), h(this, Lt) === 0 && ye(this, ct, Wr).call(this), pa = this, ie = null, tr(a), tr(n), pa = null, h(this, Tn)?.resolve();
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
    n !== be && !this.previous.has(t) && this.previous.set(t, n), (t.f & St) === 0 && (this.current.set(t, t.v), Ye?.set(t, t.v));
  }
  activate() {
    ie = this, this.apply();
  }
  deactivate() {
    ie === this && (ie = null, Ye = null);
  }
  flush() {
    if (this.activate(), xe.length > 0) {
      if (Or(), ie !== null && ie !== this)
        return;
    } else h(this, Lt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of h(this, rn)) t(this);
    h(this, rn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    K(this, Lt, h(this, Lt) + 1), t && K(this, sn, h(this, sn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    K(this, Lt, h(this, Lt) - 1), t && K(this, sn, h(this, sn) - 1), !h(this, on) && (K(this, on, !0), kt(() => {
      K(this, on, !1), this.is_deferred() ? xe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of h(this, In))
      h(this, Ht).delete(t), fe(t, pe), Je(t);
    for (const t of h(this, Ht))
      fe(t, Ze), Je(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    h(this, an).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    h(this, rn).add(t);
  }
  settled() {
    return (h(this, Tn) ?? K(this, Tn, mr())).promise;
  }
  static ensure() {
    if (ie === null) {
      const t = ie = new Vn();
      Pn.add(ie), Sn || kt(() => {
        ie === t && t.flush();
      });
    }
    return ie;
  }
  apply() {
  }
};
an = new WeakMap(), rn = new WeakMap(), Lt = new WeakMap(), sn = new WeakMap(), Tn = new WeakMap(), In = new WeakMap(), Ht = new WeakMap(), vt = new WeakMap(), on = new WeakMap(), ct = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= de;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & (tt | Gt)) !== 0, l = c && (o & de) !== 0, f = l || (o & De) !== 0 || h(this, vt).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= de : i !== null && (o & (ba | Qn | pr)) !== 0 ? i.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : Wn(s) && ((o & mt) !== 0 && h(this, Ht).add(s), Nn(s));
      var v = s.first;
      if (v !== null) {
        s = v;
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
    Cr(t[n], h(this, In), h(this, Ht));
}, "#defer_effects"), Wr = /* @__PURE__ */ r(function() {
  var s;
  if (Pn.size > 1) {
    this.previous.clear();
    var t = Ye, n = !0;
    for (const i of Pn) {
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
          Lr(v, c, l, f);
        if (xe.length > 0) {
          ie = i, i.apply();
          for (const v of xe)
            ye(s = i, ct, wa).call(s, v, [], []);
          i.deactivate();
        }
        xe = a;
      }
    }
    ie = null, Ye = t;
  }
  this.committed = !0, Pn.delete(this);
}, "#commit"), r(Vn, "Batch");
let xt = Vn;
function ts(e) {
  var t = Sn;
  Sn = !0;
  try {
    for (var n; ; ) {
      if (Zi(), xe.length === 0 && (ie?.flush(), xe.length === 0))
        return ea = null, /** @type {T} */
        n;
      Or();
    }
  } finally {
    Sn = t;
  }
}
r(ts, "flushSync");
function Or() {
  ya = !0;
  var e = A ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; xe.length > 0; ) {
      var n = xt.ensure();
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
        ns();
      }
      if (n.process(xe), Nt.clear(), A)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (xe = [], ya = !1, ea = null, A)
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
    A && qt(e, "stack", { value: "" }), vn(e, ea);
  }
}
r(ns, "infinite_loop_guard");
let ft = null;
function tr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (Et | De)) === 0 && Wn(a) && (ft = /* @__PURE__ */ new Set(), Nn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Xr(a) : a.fn = null), ft?.size > 0)) {
        Nt.clear();
        for (const s of ft) {
          if ((s.f & (Et | De)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            ft.has(o) && (ft.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (Et | De)) === 0 && Nn(l);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
r(tr, "flush_queued_effects");
function Lr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & ge) !== 0 ? Lr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (Xn | mt)) !== 0 && (i & pe) === 0 && Hr(s, t, a) && (fe(s, pe), Je(
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
      if ((s.f & ge) !== 0 && Hr(
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
function Je(e) {
  for (var t = ea = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === ae && (n & mt) !== 0 && (n & yr) === 0)
      return;
    if ((n & (Gt | tt)) !== 0) {
      if ((n & de) === 0) return;
      t.f ^= de;
    }
  }
  xe.push(t);
}
r(Je, "schedule_effect");
function Pr(e, t) {
  if (!((e.f & tt) !== 0 && (e.f & de) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & Ze) !== 0 && t.m.push(e), fe(e, de);
    for (var n = e.first; n !== null; )
      Pr(n, t), n = n.next;
  }
}
r(Pr, "reset_branch");
function Rr(e) {
  let t = 0, n = Kt(0), a;
  return A && nt(n, "createSubscriber version"), () => {
    Ua() && (u(n), Gr(() => (t === 0 && (a = oi(() => e(() => kn(n)))), t += 1, () => {
      kt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, kn(n));
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
var Re, Oa, rt, Pt, it, Fe, ke, st, _t, pt, Rt, yt, ln, Ft, cn, un, ot, Gn, ve, is, ss, ka, Fn, jn, xa;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    q(this, ve);
    /** @type {Boundary | null} */
    He(this, "parent");
    He(this, "is_pending", !1);
    /** @type {TemplateNode} */
    q(this, Re);
    /** @type {TemplateNode | null} */
    q(this, Oa, null);
    /** @type {BoundaryProps} */
    q(this, rt);
    /** @type {((anchor: Node) => void)} */
    q(this, Pt);
    /** @type {Effect} */
    q(this, it);
    /** @type {Effect | null} */
    q(this, Fe, null);
    /** @type {Effect | null} */
    q(this, ke, null);
    /** @type {Effect | null} */
    q(this, st, null);
    /** @type {DocumentFragment | null} */
    q(this, _t, null);
    /** @type {TemplateNode | null} */
    q(this, pt, null);
    q(this, Rt, 0);
    q(this, yt, 0);
    q(this, ln, !1);
    q(this, Ft, !1);
    /** @type {Set<Effect>} */
    q(this, cn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, un, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, ot, null);
    q(this, Gn, Rr(() => (K(this, ot, Kt(h(this, Rt))), A && nt(h(this, ot), "$effect.pending()"), () => {
      K(this, ot, null);
    })));
    K(this, Re, t), K(this, rt, n), K(this, Pt, a), this.parent = /** @type {Effect} */
    ae.b, this.is_pending = !!h(this, rt).pending, K(this, it, Ba(() => {
      ae.b = this;
      {
        var s = ye(this, ve, ka).call(this);
        try {
          K(this, Fe, ze(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        h(this, yt) > 0 ? ye(this, ve, jn).call(this) : this.is_pending = !1;
      }
      return () => {
        h(this, pt)?.remove();
      };
    }, as));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Cr(t, h(this, cn), h(this, un));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!h(this, rt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ye(this, ve, xa).call(this, t), K(this, Rt, h(this, Rt) + t), !(!h(this, ot) || h(this, ln)) && (K(this, ln, !0), kt(() => {
      K(this, ln, !1), h(this, ot) && hn(h(this, ot), h(this, Rt));
    }));
  }
  get_effect_pending() {
    return h(this, Gn).call(this), u(
      /** @type {Source<number>} */
      h(this, ot)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = h(this, rt).onerror;
    let a = h(this, rt).failed;
    if (h(this, Ft) || !n && !a)
      throw t;
    h(this, Fe) && (Te(h(this, Fe)), K(this, Fe, null)), h(this, ke) && (Te(h(this, ke)), K(this, ke, null)), h(this, st) && (Te(h(this, st)), K(this, st, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Vi();
        return;
      }
      s = !0, i && Bi(), xt.ensure(), K(this, Rt, 0), h(this, st) !== null && zt(h(this, st), () => {
        K(this, st, null);
      }), this.is_pending = this.has_pending_snippet(), K(this, Fe, ye(this, ve, Fn).call(this, () => (K(this, Ft, !1), ze(() => h(this, Pt).call(this, h(this, Re)))))), h(this, yt) > 0 ? ye(this, ve, jn).call(this) : this.is_pending = !1;
    }, "reset");
    kt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        vn(c, h(this, it) && h(this, it).parent);
      }
      a && K(this, st, ye(this, ve, Fn).call(this, () => {
        xt.ensure(), K(this, Ft, !0);
        try {
          return ze(() => {
            a(
              h(this, Re),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return vn(
            c,
            /** @type {Effect} */
            h(this, it).parent
          ), null;
        } finally {
          K(this, Ft, !1);
        }
      }));
    });
  }
};
Re = new WeakMap(), Oa = new WeakMap(), rt = new WeakMap(), Pt = new WeakMap(), it = new WeakMap(), Fe = new WeakMap(), ke = new WeakMap(), st = new WeakMap(), _t = new WeakMap(), pt = new WeakMap(), Rt = new WeakMap(), yt = new WeakMap(), ln = new WeakMap(), Ft = new WeakMap(), cn = new WeakMap(), un = new WeakMap(), ot = new WeakMap(), Gn = new WeakMap(), ve = new WeakSet(), is = /* @__PURE__ */ r(function() {
  try {
    K(this, Fe, ze(() => h(this, Pt).call(this, h(this, Re))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ss = /* @__PURE__ */ r(function() {
  const t = h(this, rt).pending;
  t && (K(this, ke, ze(() => t(h(this, Re)))), kt(() => {
    var n = ye(this, ve, ka).call(this);
    K(this, Fe, ye(this, ve, Fn).call(this, () => (xt.ensure(), ze(() => h(this, Pt).call(this, n))))), h(this, yt) > 0 ? ye(this, ve, jn).call(this) : (zt(
      /** @type {Effect} */
      h(this, ke),
      () => {
        K(this, ke, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ka = /* @__PURE__ */ r(function() {
  var t = h(this, Re);
  return this.is_pending && (K(this, pt, Tt()), h(this, Re).before(h(this, pt)), t = h(this, pt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Fn = /* @__PURE__ */ r(function(t) {
  var n = ae, a = $, s = me;
  Xe(h(this, it)), Ke(h(this, it)), dn(h(this, it).ctx);
  try {
    return t();
  } catch (i) {
    return Ar(i), null;
  } finally {
    Xe(n), Ke(a), dn(s);
  }
}, "#run"), jn = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    h(this, rt).pending
  );
  h(this, Fe) !== null && (K(this, _t, document.createDocumentFragment()), h(this, _t).append(
    /** @type {TemplateNode} */
    h(this, pt)
  ), ei(h(this, Fe), h(this, _t))), h(this, ke) === null && K(this, ke, ze(() => t(h(this, Re))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xa = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ye(n = this.parent, ve, xa).call(n, t);
    return;
  }
  if (K(this, yt, h(this, yt) + t), h(this, yt) === 0) {
    this.is_pending = !1;
    for (const a of h(this, cn))
      fe(a, pe), Je(a);
    for (const a of h(this, un))
      fe(a, Ze), Je(a);
    h(this, cn).clear(), h(this, un).clear(), h(this, ke) && zt(h(this, ke), () => {
      K(this, ke, null);
    }), h(this, _t) && (h(this, Re).before(h(this, _t)), K(this, _t, null));
  }
}, "#update_pending_count"), r(Va, "Boundary");
let Sa = Va;
function os(e, t, n, a) {
  const s = Ra;
  var i = e.filter((d) => !d.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = ie, c = (
    /** @type {Effect} */
    ae
  ), l = ls(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((d) => d.promise)) : null;
  function v(d) {
    l();
    try {
      a(d);
    } catch (p) {
      (c.f & Et) === 0 && vn(p, c);
    }
    o?.deactivate(), Na();
  }
  if (r(v, "finish"), n.length === 0) {
    f.then(() => v(t.map(s)));
    return;
  }
  function _() {
    l(), Promise.all(n.map((d) => /* @__PURE__ */ us(d))).then((d) => v([...t.map(s), ...d])).catch((d) => vn(d, c));
  }
  r(_, "run"), f ? f.then(_) : _();
}
r(os, "flatten");
function ls() {
  var e = ae, t = $, n = me, a = ie;
  if (A)
    var s = xn;
  return /* @__PURE__ */ r(function(o = !0) {
    Xe(e), Ke(t), dn(n), o && a?.activate(), A && Bn(s);
  }, "restore");
}
r(ls, "capture");
function Na() {
  Xe(null), Ke(null), dn(null), A && Bn(null);
}
r(Na, "unset_context");
const cs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = ge | pe, n = $ !== null && ($.f & ge) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return ae !== null && (ae.f |= mn), {
    ctx: me,
    deps: null,
    effects: null,
    equals: Sr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      be
    ),
    wv: 0,
    parent: n ?? ae,
    ac: null
  };
}
r(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function us(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ae
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
    be
  );
  A && (o.label = t);
  var c = !$, l = /* @__PURE__ */ new Map();
  return Ts(() => {
    var f = mr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        v === ie && v.committed && v.deactivate(), Na();
      });
    } catch (p) {
      f.reject(p), Na();
    }
    var v = (
      /** @type {Batch} */
      ie
    );
    if (c) {
      var _ = s.is_rendered();
      s.update_pending_count(1), v.increment(_), l.get(v)?.reject(Zt), l.delete(v), l.set(v, f);
    }
    const d = /* @__PURE__ */ r((p, E = void 0) => {
      if (v.activate(), E)
        E !== Zt && (o.f |= St, hn(o, E));
      else {
        (o.f & St) !== 0 && (o.f ^= St), hn(o, p);
        for (const [I, y] of l) {
          if (l.delete(I), I === v) break;
          y.reject(Zt);
        }
      }
      c && (s.update_pending_count(-1), v.decrement(_));
    }, "handler");
    f.promise.then(d, (p) => d(null, p || "unknown"));
  }), Kr(() => {
    for (const f of l.values())
      f.reject(Zt);
  }), A && (o.f |= Xn), new Promise((f) => {
    function v(_) {
      function d() {
        _ === i ? f(o) : v(i);
      }
      r(d, "go"), _.then(d, d);
    }
    r(v, "next"), v(i);
  });
}
r(us, "async_derived");
// @__NO_SIDE_EFFECTS__
function j(e) {
  const t = /* @__PURE__ */ Ra(e);
  return ti(t), t;
}
r(j, "user_derived");
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
      Te(
        /** @type {Effect} */
        t[n]
      );
  }
}
r(Ta, "destroy_derived_effects");
let fa = [];
function ds(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ge) === 0)
      return (t.f & Et) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(ds, "get_derived_parent_effect");
function Fa(e) {
  var t, n = ae;
  if (Xe(ds(e)), A) {
    let a = _n;
    nr(/* @__PURE__ */ new Set());
    try {
      Bt.call(fa, e) && Oi(), fa.push(e), e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      Xe(n), nr(a), fa.pop();
    }
  } else
    try {
      e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      Xe(n);
    }
  return t;
}
r(Fa, "execute_derived");
function Fr(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = ai(), (!ie?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    fe(e, de);
    return;
  }
  Vt || (Ye !== null ? (Ua() || ie?.is_fork) && Ye.set(e, t) : Pa(e));
}
r(Fr, "update_derived");
let _n = /* @__PURE__ */ new Set();
const Nt = /* @__PURE__ */ new Map();
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
function je(e, t) {
  const n = Kt(e);
  return ti(n), n;
}
r(je, "state");
// @__NO_SIDE_EFFECTS__
function _s(e, t = !1, n = !0) {
  const a = Kt(e);
  return t || (a.equals = xr), a;
}
r(_s, "mutable_source");
function Ge(e, t, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Qe || ($.f & Un) !== 0) && Tr() && ($.f & (ge | mt | Xn | Un)) !== 0 && (qe === null || !Bt.call(qe, e)) && Ui();
  let a = n ? $t(t) : t;
  return A && Nr(
    a,
    /** @type {string} */
    e.label
  ), hn(e, a);
}
r(Ge, "set");
function hn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vt ? Nt.set(e, t) : Nt.set(e, n), e.v = t;
    var a = xt.ensure();
    if (a.capture(e, n), A) {
      if (ae !== null) {
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
      ae !== null && (e.set_during_effect = !0);
    }
    if ((e.f & ge) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && Fa(s), Pa(s);
    }
    e.wv = ai(), zr(e, pe), ae !== null && (ae.f & de) !== 0 && (ae.f & (tt | Gt)) === 0 && (Pe === null ? As([e]) : Pe.push(e)), !a.is_fork && _n.size > 0 && !ja && jr();
  }
  return t;
}
r(hn, "internal_set");
function jr() {
  ja = !1;
  for (const e of _n)
    (e.f & de) !== 0 && fe(e, Ze), Wn(e) && Nn(e);
  _n.clear();
}
r(jr, "flush_eager_effects");
function kn(e) {
  Ge(e, e.v + 1);
}
r(kn, "increment");
function zr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (A && (o & Un) !== 0) {
        _n.add(i);
        continue;
      }
      var c = (o & pe) === 0;
      if (c && fe(i, t), (o & ge) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        Ye?.delete(l), (o & At) === 0 && (o & Be && (i.f |= At), zr(l, Ze));
      } else c && ((o & mt) !== 0 && ft !== null && ft.add(
        /** @type {Effect} */
        i
      ), Je(
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
  var n = /* @__PURE__ */ new Map(), a = hr(e), s = /* @__PURE__ */ je(0), i = Ut, o = /* @__PURE__ */ r((v) => {
    if (Ut === i)
      return v();
    var _ = $, d = Ut;
    Ke(null), sr(i);
    var p = v();
    return Ke(_), sr(d), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ je(
    /** @type {any[]} */
    e.length
  )), A && (e = /** @type {any} */
  ms(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(v) {
    if (!l) {
      l = !0, c = v, nt(s, `${c} version`);
      for (const [_, d] of n)
        nt(d, Ct(c, _));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, _, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ji();
        var p = n.get(_);
        return p === void 0 ? p = o(() => {
          var E = /* @__PURE__ */ je(d.value);
          return n.set(_, E), A && typeof _ == "string" && nt(E, Ct(c, _)), E;
        }) : Ge(p, d.value, !0), !0;
      },
      deleteProperty(v, _) {
        var d = n.get(_);
        if (d === void 0) {
          if (_ in v) {
            const p = o(() => /* @__PURE__ */ je(be));
            n.set(_, p), kn(s), A && nt(p, Ct(c, _));
          }
        } else
          Ge(d, be), kn(s);
        return !0;
      },
      get(v, _, d) {
        if (_ === tn)
          return e;
        if (A && _ === wr)
          return f;
        var p = n.get(_), E = _ in v;
        if (p === void 0 && (!E || en(v, _)?.writable) && (p = o(() => {
          var y = $t(E ? v[_] : be), W = /* @__PURE__ */ je(y);
          return A && nt(W, Ct(c, _)), W;
        }), n.set(_, p)), p !== void 0) {
          var I = u(p);
          return I === be ? void 0 : I;
        }
        return Reflect.get(v, _, d);
      },
      getOwnPropertyDescriptor(v, _) {
        var d = Reflect.getOwnPropertyDescriptor(v, _);
        if (d && "value" in d) {
          var p = n.get(_);
          p && (d.value = u(p));
        } else if (d === void 0) {
          var E = n.get(_), I = E?.v;
          if (E !== void 0 && I !== be)
            return {
              enumerable: !0,
              configurable: !0,
              value: I,
              writable: !0
            };
        }
        return d;
      },
      has(v, _) {
        if (_ === tn)
          return !0;
        var d = n.get(_), p = d !== void 0 && d.v !== be || Reflect.has(v, _);
        if (d !== void 0 || ae !== null && (!p || en(v, _)?.writable)) {
          d === void 0 && (d = o(() => {
            var I = p ? $t(v[_]) : be, y = /* @__PURE__ */ je(I);
            return A && nt(y, Ct(c, _)), y;
          }), n.set(_, d));
          var E = u(d);
          if (E === be)
            return !1;
        }
        return p;
      },
      set(v, _, d, p) {
        var E = n.get(_), I = _ in v;
        if (a && _ === "length")
          for (var y = d; y < /** @type {Source<number>} */
          E.v; y += 1) {
            var W = n.get(y + "");
            W !== void 0 ? Ge(W, be) : y in v && (W = o(() => /* @__PURE__ */ je(be)), n.set(y + "", W), A && nt(W, Ct(c, y)));
          }
        if (E === void 0)
          (!I || en(v, _)?.writable) && (E = o(() => /* @__PURE__ */ je(void 0)), A && nt(E, Ct(c, _)), Ge(E, $t(d)), n.set(_, E));
        else {
          I = E.v !== be;
          var se = o(() => $t(d));
          Ge(E, se);
        }
        var S = Reflect.getOwnPropertyDescriptor(v, _);
        if (S?.set && S.set.call(p, d), !I) {
          if (a && typeof _ == "string") {
            var D = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(_);
            Number.isInteger(R) && R >= D.v && Ge(D, R + 1);
          }
          kn(s);
        }
        return !0;
      },
      ownKeys(v) {
        u(s);
        var _ = Reflect.ownKeys(v).filter((E) => {
          var I = n.get(E);
          return I === void 0 || I.v !== be;
        });
        for (var [d, p] of n)
          p.v !== be && !(d in v) && _.push(d);
        return _;
      },
      setPrototypeOf() {
        zi();
      }
    }
  );
}
r($t, "proxy");
function Ct(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : hs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(Ct, "get_label");
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
    Ur = en(t, "firstChild").get, Br = en(t, "nextSibling").get, Za(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Za(n) && (n.__t = void 0), A && (e.__svelte_meta = null, gs());
  }
}
r(ps, "init_operations");
function Tt(e = "") {
  return document.createTextNode(e);
}
r(Tt, "create_text");
// @__NO_SIDE_EFFECTS__
function wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ur.call(e)
  );
}
r(wt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return (
    /** @type {TemplateNode | null} */
    Br.call(e)
  );
}
r(Cn, "get_next_sibling");
function b(e, t) {
  return /* @__PURE__ */ wt(e);
}
r(b, "child");
function It(e, t = !1) {
  {
    var n = /* @__PURE__ */ wt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Cn(n) : n;
  }
}
r(It, "first_child");
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
function ta(e) {
  var t = $, n = ae;
  Ke(null), Xe(null);
  try {
    return e();
  } finally {
    Ke(t), Xe(n);
  }
}
r(ta, "without_reactive_context");
function Es(e, t, n, a = n) {
  e.addEventListener(t, () => ta(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), ws();
}
r(Es, "listen_to_event_and_reset_event");
function Ss(e) {
  ae === null && ($ === null && Pi(e), Hi()), Vt && Li(e);
}
r(Ss, "validate_effect");
function ks(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(ks, "push_effect");
function Mt(e, t, n) {
  var a = ae;
  if (A)
    for (; a !== null && (a.f & Un) !== 0; )
      a = a.parent;
  a !== null && (a.f & De) !== 0 && (e |= De);
  var s = {
    ctx: me,
    deps: null,
    nodes: null,
    f: e | pe | Be,
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
  if (A && (s.component_function = Dn), n)
    try {
      Nn(s), s.f |= Ha;
    } catch (c) {
      throw Te(s), c;
    }
  else t !== null && Je(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & mn) === 0 && (i = i.first, (e & mt) !== 0 && (e & fn) !== 0 && i !== null && (i.f |= fn)), i !== null && (i.parent = a, a !== null && ks(i, a), $ !== null && ($.f & ge) !== 0 && (e & Gt) === 0)) {
    var o = (
      /** @type {Derived} */
      $
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Mt, "create_effect");
function Ua() {
  return $ !== null && !Qe;
}
r(Ua, "effect_tracking");
function Kr(e) {
  const t = Mt(Qn, null, !1);
  return fe(t, de), t.teardown = e, t;
}
r(Kr, "teardown");
function xs(e) {
  Ss("$effect"), A && qt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ae.f
  ), n = !$ && (t & tt) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      me
    );
    (a.e ??= []).push(e);
  } else
    return Vr(e);
}
r(xs, "user_effect");
function Vr(e) {
  return Mt(ba | Mi, e, !1);
}
r(Vr, "create_user_effect");
function Ns(e) {
  xt.ensure();
  const t = Mt(Gt | mn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? zt(t, () => {
      Te(t), a(void 0);
    }) : (Te(t), a(void 0));
  });
}
r(Ns, "component_root");
function Ts(e) {
  return Mt(Xn | mn, e, !0);
}
r(Ts, "async_effect");
function Gr(e, t = 0) {
  return Mt(Qn | t, e, !0);
}
r(Gr, "render_effect");
function J(e, t = [], n = [], a = []) {
  os(a, t, n, (s) => {
    Mt(Qn, () => e(...s.map(u)), !0);
  });
}
r(J, "template_effect");
function Ba(e, t = 0) {
  var n = Mt(mt | t, e, !0);
  return A && (n.dev_stack = xn), n;
}
r(Ba, "block");
function ze(e) {
  return Mt(tt | mn, e, !0);
}
r(ze, "branch");
function Yr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vt, a = $;
    ir(!0), Ke(null);
    try {
      t.call(null);
    } finally {
      ir(n), Ke(a);
    }
  }
}
r(Yr, "execute_effect_teardown");
function Jr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ta(() => {
      s.abort(Zt);
    });
    var a = n.next;
    (n.f & Gt) !== 0 ? n.parent = null : Te(n, t), n = a;
  }
}
r(Jr, "destroy_effect_children");
function Is(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & tt) === 0 && Te(t), t = n;
  }
}
r(Is, "destroy_block_effect_children");
function Te(e, t = !0) {
  var n = !1;
  (t || (e.f & yr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Qr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Jr(e, t && !n), qn(e, 0), fe(e, Et);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Yr(e);
  var s = e.parent;
  s !== null && s.first !== null && Xr(e), A && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Te, "destroy_effect");
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
function zt(e, t, n = !0) {
  var a = [];
  Zr(e, a, !0);
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
r(zt, "pause_effect");
function Zr(e, t, n) {
  if ((e.f & De) === 0) {
    e.f ^= De;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & fn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & tt) !== 0 && (e.f & mt) !== 0;
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
  if ((e.f & De) !== 0) {
    e.f ^= De, (e.f & de) === 0 && (fe(e, pe), Je(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & fn) !== 0 || (n.f & tt) !== 0;
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
let zn = !1, Vt = !1;
function ir(e) {
  Vt = e;
}
r(ir, "set_is_destroying_effect");
let $ = null, Qe = !1;
function Ke(e) {
  $ = e;
}
r(Ke, "set_active_reaction");
let ae = null;
function Xe(e) {
  ae = e;
}
r(Xe, "set_active_effect");
let qe = null;
function ti(e) {
  $ !== null && (qe === null ? qe = [e] : qe.push(e));
}
r(ti, "push_reaction_value");
let Ne = null, Ae = 0, Pe = null;
function As(e) {
  Pe = e;
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
function Wn(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & ge && (e.f &= ~At), (t & Ze) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (Wn(
        /** @type {Derived} */
        i
      ) && Fr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Be) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ye === null && fe(e, de);
  }
  return !1;
}
r(Wn, "is_dirty");
function ri(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(qe !== null && Bt.call(qe, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & ge) !== 0 ? ri(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? fe(i, pe) : (i.f & de) !== 0 && fe(i, Ze), Je(
        /** @type {Effect} */
        i
      ));
    }
}
r(ri, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Ne, n = Ae, a = Pe, s = $, i = qe, o = me, c = Qe, l = Ut, f = e.f;
  Ne = /** @type {null | Value[]} */
  null, Ae = 0, Pe = null, $ = (f & (tt | Gt)) === 0 ? e : null, qe = null, dn(e.ctx), Qe = !1, Ut = ++Ot, e.ac !== null && (ta(() => {
    e.ac.abort(Zt);
  }), e.ac = null);
  try {
    e.f |= ma;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v(), d = e.deps, p = ie?.is_fork;
    if (Ne !== null) {
      var E;
      if (p || qn(e, Ae), d !== null && Ae > 0)
        for (d.length = Ae + Ne.length, E = 0; E < Ne.length; E++)
          d[Ae + E] = Ne[E];
      else
        e.deps = d = Ne;
      if (Ua() && (e.f & Be) !== 0)
        for (E = Ae; E < d.length; E++)
          (d[E].reactions ??= []).push(e);
    } else !p && d !== null && Ae < d.length && (qn(e, Ae), d.length = Ae);
    if (Tr() && Pe !== null && !Qe && d !== null && (e.f & (ge | Ze | pe)) === 0)
      for (E = 0; E < /** @type {Source[]} */
      Pe.length; E++)
        ri(
          Pe[E],
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
      Pe !== null && (a === null ? a = Pe : a.push(.../** @type {Source[]} */
      Pe));
    }
    return (e.f & St) !== 0 && (e.f ^= St), _;
  } catch (I) {
    return Ar(I);
  } finally {
    e.f ^= ma, Ne = t, Ae = n, Pe = a, $ = s, qe = i, dn(o), Qe = c, Ut = l;
  }
}
r(Ia, "update_reaction");
function Ms(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = xi.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Bt.call(Ne, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Be) !== 0 && (i.f ^= Be, i.f &= ~At), Pa(i), Ta(i), qn(i, 0);
  }
}
r(Ms, "remove_reaction");
function qn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Ms(e, n[a]);
}
r(qn, "remove_reactions");
function Nn(e) {
  var t = e.f;
  if ((t & Et) === 0) {
    fe(e, de);
    var n = ae, a = zn;
    if (ae = e, zn = !0, A) {
      var s = Dn;
      er(e.component_function);
      var i = (
        /** @type {any} */
        xn
      );
      Bn(e.dev_stack ?? xn);
    }
    try {
      (t & (mt | pr)) !== 0 ? Is(e) : Jr(e), Yr(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ni;
      var c;
      A && Gi && (e.f & pe) !== 0 && e.deps;
    } finally {
      zn = a, ae = n, A && (er(s), Bn(i));
    }
  }
}
r(Nn, "update_effect");
async function Ds() {
  await Promise.resolve(), ts();
}
r(Ds, "tick");
function u(e) {
  var t = e.f, n = (t & ge) !== 0;
  if ($ !== null && !Qe) {
    var a = ae !== null && (ae.f & Et) !== 0;
    if (!a && (qe === null || !Bt.call(qe, e))) {
      var s = $.deps;
      if (($.f & ma) !== 0)
        e.rv < Ot && (e.rv = Ot, Ne === null && s !== null && s[Ae] === e ? Ae++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        ($.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : Bt.call(i, $) || i.push($);
      }
    }
  }
  if (A && cs.delete(e), Vt && Nt.has(e))
    return Nt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Vt) {
      var c = o.v;
      return ((o.f & de) === 0 && o.reactions !== null || si(o)) && (c = Fa(o)), Nt.set(o, c), c;
    }
    var l = (o.f & Be) === 0 && !Qe && $ !== null && (zn || ($.f & Be) !== 0), f = o.deps === null;
    Wn(o) && (l && (o.f |= Be), Fr(o)), l && !f && ii(o);
  }
  if (Ye?.has(e))
    return Ye.get(e);
  if ((e.f & St) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function ii(e) {
  if (e.deps !== null) {
    e.f |= Be;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ge) !== 0 && (t.f & Be) === 0 && ii(
        /** @type {Derived} */
        t
      );
  }
}
r(ii, "reconnect");
function si(e) {
  if (e.v === be) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Nt.has(t) || (t.f & ge) !== 0 && si(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(si, "depends_on_old_values");
function oi(e) {
  var t = Qe;
  try {
    return Qe = !0, e();
  } finally {
    Qe = t;
  }
}
r(oi, "untrack");
const li = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Cs(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || wn.call(t, i), !i.cancelBubble)
      return ta(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? kt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Cs, "create_event");
function dt(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Cs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Kr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(dt, "event");
function Ce(e) {
  for (var t = 0; t < e.length; t++)
    li.add(e[t]);
  for (var n of Aa)
    n(e);
}
r(Ce, "delegate");
let or = null;
function wn(e) {
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
    qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = $, _ = ae;
    Ke(null), Xe(null);
    try {
      for (var d, p = []; i !== null; ) {
        var E = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var I = i["__" + a];
          I != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && I.call(i, e);
        } catch (y) {
          d ? p.push(y) : d = y;
        }
        if (e.cancelBubble || E === t || E === null)
          break;
        i = E;
      }
      if (d) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ke(v), Xe(_);
    }
  }
}
r(wn, "handle_event_propagation");
function ci(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(ci, "create_fragment_from_html");
function Kn(e, t) {
  var n = (
    /** @type {Effect} */
    ae
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Kn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ci(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ wt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || za ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Kn(c, l);
    } else
      Kn(o, o);
    return o;
  };
}
r(P, "from_html");
function va() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Tt();
  return e.append(t, n), Kn(t, n), e;
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
function C(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(C, "set_text");
function Ls(e, t) {
  return Hs(e, t);
}
r(Ls, "mount");
const Qt = /* @__PURE__ */ new Map();
function Hs(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ps();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((_) => {
    for (var d = 0; d < _.length; d++) {
      var p = _[d];
      if (!c.has(p)) {
        c.add(p);
        var E = Os(p);
        t.addEventListener(p, wn, { passive: E });
        var I = Qt.get(p);
        I === void 0 ? (document.addEventListener(p, wn, { passive: E }), Qt.set(p, 1)) : Qt.set(p, I + 1);
      }
    }
  }, "event_handle");
  l(Jn(li)), Aa.add(l);
  var f = void 0, v = Ns(() => {
    var _ = n ?? t.appendChild(Tt());
    return rs(
      /** @type {TemplateNode} */
      _,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (d) => {
        we({});
        var p = (
          /** @type {ComponentContext} */
          me
        );
        i && (p.c = i), s && (a.$$events = s), f = e(d, a) || {}, Ee();
      }
    ), () => {
      for (var d of c) {
        t.removeEventListener(d, wn);
        var p = (
          /** @type {number} */
          Qt.get(d)
        );
        --p === 0 ? (document.removeEventListener(d, wn), Qt.delete(d)) : Qt.set(d, p);
      }
      Aa.delete(l), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Ma.set(f, v), f;
}
r(Hs, "_mount");
let Ma = /* @__PURE__ */ new WeakMap();
function Ps(e, t) {
  const n = Ma.get(e);
  return n ? (Ma.delete(e), n(t)) : (A && (tn in e ? Ki() : qi()), Promise.resolve());
}
r(Ps, "unmount");
var Ve, lt, Me, jt, An, Mn, Yn;
const Ga = class Ga {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    He(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, Ve, /* @__PURE__ */ new Map());
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
    q(this, Me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    q(this, jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, An, !0);
    q(this, Mn, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        ie
      );
      if (h(this, Ve).has(t)) {
        var n = (
          /** @type {Key} */
          h(this, Ve).get(t)
        ), a = h(this, lt).get(n);
        if (a)
          qa(a), h(this, jt).delete(n);
        else {
          var s = h(this, Me).get(n);
          s && (h(this, lt).set(n, s.effect), h(this, Me).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of h(this, Ve)) {
          if (h(this, Ve).delete(i), i === t)
            break;
          const c = h(this, Me).get(o);
          c && (Te(c.effect), h(this, Me).delete(o));
        }
        for (const [i, o] of h(this, lt)) {
          if (i === n || h(this, jt).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(h(this, Ve).values()).includes(i)) {
              var f = document.createDocumentFragment();
              ei(o, f), f.append(Tt()), h(this, Me).set(i, { effect: o, fragment: f });
            } else
              Te(o);
            h(this, jt).delete(i), h(this, lt).delete(i);
          }, "on_destroy");
          h(this, An) || !a ? (h(this, jt).add(i), zt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    q(this, Yn, /* @__PURE__ */ r((t) => {
      h(this, Ve).delete(t);
      const n = Array.from(h(this, Ve).values());
      for (const [a, s] of h(this, Me))
        n.includes(a) || (Te(s.effect), h(this, Me).delete(a));
    }, "#discard"));
    this.anchor = t, K(this, An, n);
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
    if (n && !h(this, lt).has(t) && !h(this, Me).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = Tt();
        i.append(o), h(this, Me).set(t, {
          effect: ze(() => n(o)),
          fragment: i
        });
      } else
        h(this, lt).set(
          t,
          ze(() => n(this.anchor))
        );
    if (h(this, Ve).set(a, t), s) {
      for (const [c, l] of h(this, lt))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of h(this, Me))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(h(this, Mn)), a.ondiscard(h(this, Yn));
    } else
      h(this, Mn).call(this);
  }
};
Ve = new WeakMap(), lt = new WeakMap(), Me = new WeakMap(), jt = new WeakMap(), An = new WeakMap(), Mn = new WeakMap(), Yn = new WeakMap(), r(Ga, "BranchManager");
let Da = Ga;
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
  var a = new Da(e), s = n ? fn : 0;
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
function $e(e, t) {
  return t;
}
r($e, "index");
function Rs(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, c = 0; c < s; c++) {
    let _ = t[c];
    zt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ca(Jn(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
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
      ys(v), v.append(f), e.items.clear();
    }
    Ca(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Rs, "pause_effects");
function Ca(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Te(e[n], t);
}
r(Ca, "destroy_effects");
var lr;
function et(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Tt());
  }
  var v = null, _ = /* @__PURE__ */ fs(() => {
    var W = n();
    return hr(W) ? W : W == null ? [] : Jn(W);
  }), d, p = !0;
  function E() {
    y.fallback = v, Fs(y, d, o, t, a), v !== null && (d.length === 0 ? (v.f & ht) === 0 ? qa(v) : (v.f ^= ht, En(v, null, o)) : zt(v, () => {
      v = null;
    }));
  }
  r(E, "commit");
  var I = Ba(() => {
    d = /** @type {V[]} */
    u(_);
    for (var W = d.length, se = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      ie
    ), D = qr(), R = 0; R < W; R += 1) {
      var g = d[R], w = a(g, R), x = p ? null : c.get(w);
      x ? (x.v && hn(x.v, g), x.i && hn(x.i, R), D && S.unskip_effect(x.e)) : (x = js(
        c,
        p ? o : lr ??= Tt(),
        g,
        w,
        R,
        s,
        t,
        n
      ), p || (x.e.f |= ht), c.set(w, x)), se.add(w);
    }
    if (W === 0 && i && !v && (p ? v = ze(() => i(o)) : (v = ze(() => i(lr ??= Tt())), v.f |= ht)), W > se.size && (A ? zs(d, a) : Er("", "", "")), !p)
      if (D) {
        for (const [M, F] of c)
          se.has(M) || S.skip_effect(F.e);
        S.oncommit(E), S.ondiscard(() => {
        });
      } else
        E();
    u(_);
  }), y = { effect: I, items: c, outrogroups: null, fallback: v };
  p = !1;
}
r(et, "each");
function yn(e) {
  for (; e !== null && (e.f & tt) === 0; )
    e = e.next;
  return e;
}
r(yn, "skip_to_branch");
function Fs(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = yn(e.effect.first), f, v = null, _, d = [], p = [], E, I, y, W;
  if (i)
    for (W = 0; W < o; W += 1)
      E = t[W], I = s(E, W), y = /** @type {EachItem} */
      c.get(I).e, (y.f & ht) === 0 && (y.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(y));
  for (W = 0; W < o; W += 1) {
    if (E = t[W], I = s(E, W), y = /** @type {EachItem} */
    c.get(I).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(y), F.done.delete(y);
    if ((y.f & ht) !== 0)
      if (y.f ^= ht, y === l)
        En(y, null, n);
      else {
        var se = v ? v.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), gt(e, v, y), gt(e, y, se), En(y, se, n), v = y, d = [], p = [], l = yn(v.next);
        continue;
      }
    if ((y.f & De) !== 0 && (qa(y), i && (y.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (d.length < p.length) {
          var S = p[0], D;
          v = S.prev;
          var R = d[0], g = d[d.length - 1];
          for (D = 0; D < d.length; D += 1)
            En(d[D], S, n);
          for (D = 0; D < p.length; D += 1)
            f.delete(p[D]);
          gt(e, R.prev, g.next), gt(e, v, R), gt(e, g, S), l = S, v = g, W -= 1, d = [], p = [];
        } else
          f.delete(y), En(y, l, n), gt(e, y.prev, y.next), gt(e, y, v === null ? e.effect.first : v.next), gt(e, v, y), v = y;
        continue;
      }
      for (d = [], p = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = yn(l.next);
      if (l === null)
        continue;
    }
    (y.f & ht) === 0 && d.push(y), v = y, l = yn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (Ca(Jn(F.done)), e.outrogroups?.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var w = [];
    if (f !== void 0)
      for (y of f)
        (y.f & De) === 0 && w.push(y);
    for (; l !== null; )
      (l.f & De) === 0 && l !== e.fallback && w.push(l), l = yn(l.next);
    var x = w.length;
    if (x > 0) {
      var M = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < x; W += 1)
          w[W].nodes?.a?.measure();
        for (W = 0; W < x; W += 1)
          w[W].nodes?.a?.fix();
      }
      Rs(e, w, M);
    }
  }
  i && kt(() => {
    if (_ !== void 0)
      for (y of _)
        y.nodes?.a?.apply();
  });
}
r(Fs, "reconcile");
function js(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ _s(n, !1, !1) : Kt(n) : null, f = (o & 2) !== 0 ? Kt(s) : null;
  return A && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: ze(() => (i(t, l ?? n, f ?? s, c), () => {
      e.delete(a);
    }))
  };
}
r(js, "create_item");
function En(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & ht) === 0 ? (
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
r(En, "move");
function gt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(gt, "link");
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
      ae
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
      /* @__PURE__ */ wt(f)), Kn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ wt(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ wt(f)
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
function bt(e, t, n, a, s, i) {
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
r(bt, "set_class");
function Rn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var i = qs(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
r(Rn, "set_style");
const Ks = /* @__PURE__ */ Symbol("is custom element"), Vs = /* @__PURE__ */ Symbol("is html");
function Ue(e, t) {
  var n = fi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(Ue, "set_value");
function T(e, t, n, a) {
  var s = fi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Di] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(T, "set_attribute");
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
    A && e.type === "checkbox" && $a();
    var i = s ? e.defaultValue : e.value;
    if (i = _a(e) ? ha(i) : i, n(i), ie !== null && a.add(ie), await Ds(), i !== (i = t())) {
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
  oi(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), ie !== null && a.add(ie)), Gr(() => {
    A && e.type === "checkbox" && $a();
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
  function s(c) {
    if (kr(e, c) && (e = c, n)) {
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
      q(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const v = f, { tagName: _ } = v;
          return _ && l.push(_.toUpperCase()), l;
        },
        []
      ));
      q(this, a, /* @__PURE__ */ je($t({})));
      q(this, s, {});
    }
    get $state() {
      return u(h(this, a));
    }
    set $state(l) {
      Ge(h(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, v) {
      Object.assign(this.$state, l.state), v.isFirstRender && K(this, s, Ls(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Ps(h(this, s), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change" || !this.document) return;
      const { target: v } = f;
      if (!v) return;
      const _ = v;
      if (!h(this, n).includes(_.tagName)) return;
      const d = _._getValue();
      this.document.update({ [_.name]: d });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), He(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
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
var Zs = /* @__PURE__ */ P("<span> </span>"), $s = /* @__PURE__ */ P('<span style="color: var(--nos-text-secondary, #888)">—</span>'), eo = /* @__PURE__ */ P('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function to(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((M) => t.actor.update({ img: M }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ j(() => {
    const M = Object.keys(t.hitDiceData.bySize);
    return M.length === 0 ? "—" : M.length === 1 ? `d${M[0]}` : M.map((F) => `d${F}`).join("/");
  });
  var i = eo(), o = b(i);
  o.__click = a;
  var c = b(o), l = m(o, 2), f = b(l), v = b(f), _ = m(f, 2);
  _.__change = ({ target: M }) => t.actor.update({ name: M.value });
  var d = m(l, 2), p = b(d), E = b(p), I = m(p, 2), y = b(I);
  {
    var W = /* @__PURE__ */ r((M) => {
      var F = Zs(), U = b(F);
      J(() => C(U, t.metaData)), H(M, F);
    }, "consequent"), se = /* @__PURE__ */ r((M) => {
      var F = $s();
      H(M, F);
    }, "alternate");
    ee(y, (M) => {
      t.metaData ? M(W) : M(se, !1);
    });
  }
  var S = m(y, 2);
  S.__click = () => t.actor.editMetadata();
  var D = m(d, 2), R = b(D), g = b(R), w = m(R, 2), x = b(w);
  J(
    (M, F, U, L, B) => {
      T(c, "src", u(n)), T(c, "alt", t.actor.reactive.name), C(v, M), Ue(_, t.actor.reactive.name), _.disabled = !t.editingEnabled, C(E, F), T(S, "aria-label", U), T(S, "data-tooltip", L), S.disabled = !t.editingEnabled, C(g, B), C(x, u(s));
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
r(to, "HeaderRow");
Ce(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ka, "formatModifier");
var no = /* @__PURE__ */ P('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ao(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ j(() => k(n[t.abilityKey])), s = /* @__PURE__ */ j(() => bn("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ j(() => bn("NWS.RollSave", { name: u(a) }));
  var o = no(), c = b(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var v = b(f), _ = b(v), d = m(f, 2), p = b(d);
  J(
    (E) => {
      l = bt(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), T(c, "data-tooltip", u(i)), T(c, "aria-label", u(i)), T(f, "data-tooltip", u(s)), T(f, "aria-label", u(s)), C(_, E), C(p, u(a));
    },
    [() => Ka(t.ability.mod)]
  ), H(e, o), Ee();
}
r(ao, "AbilityBox");
Ce(["click"]);
var ro = /* @__PURE__ */ P('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), io = /* @__PURE__ */ P('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  we(t, !0);
  var n = io(), a = b(n), s = b(a), i = m(a, 2);
  et(i, 21, () => ({ length: t.wounds.max }), $e, (o, c, l) => {
    var f = ro();
    let v;
    f.__click = () => t.toggleWounds(l + 1), J(
      (_, d) => {
        v = bt(f, 1, "nos-wounds__drop", null, v, { "nos-wounds__drop--active": t.wounds.value > l }), T(f, "data-tooltip", _), T(f, "aria-label", d);
      },
      [
        () => bn("NWS.ToggleWound", { n: l + 1 }),
        () => bn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), H(o, f);
  }), J((o) => C(s, o), [() => k("NWS.Wounds")]), H(e, n), Ee();
}
r(so, "WoundTracker");
Ce(["click"]);
var oo = /* @__PURE__ */ P('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ P('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ P('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ P('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function fo(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.movement);
  var l = uo(), f = b(l), v = b(f);
  et(v, 17, () => n, $e, (ce, Le) => {
    ao(ce, {
      get abilityKey() {
        return u(Le);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(Le)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(Le)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var _ = m(v, 2);
  {
    var d = /* @__PURE__ */ r((ce) => {
      var Le = oo(), pn = It(Le);
      pn.__click = () => t.actor.configureSavingThrows();
      var Ln = m(pn, 2);
      Ln.__click = () => t.actor.configureAbilityScores(), J(
        (sa, oa) => {
          T(pn, "data-tooltip", sa), T(Ln, "data-tooltip", oa);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), H(ce, Le);
    }, "consequent");
    ee(_, (ce) => {
      t.editingEnabled && ce(d);
    });
  }
  var p = m(f, 2), E = b(p), I = b(E), y = b(I), W = m(b(y), 2), se = b(W), S = m(W, 2), D = b(S), R = m(y, 2), g = m(b(R), 2), w = b(g), x = m(g, 2);
  x.__change = ({ target: ce }) => t.updateTempHP(Number(ce.value));
  var M = m(I, 2);
  let F;
  var U = b(M), L = b(U), B = b(L);
  {
    var Q = /* @__PURE__ */ r((ce) => {
      var Le = lo();
      H(ce, Le);
    }, "consequent_1"), V = /* @__PURE__ */ r((ce) => {
      var Le = co();
      H(ce, Le);
    }, "alternate");
    ee(B, (ce) => {
      t.isBloodied ? ce(Q) : ce(V, !1);
    });
  }
  var te = m(L, 2), Z = b(te), X = m(te, 2), G = b(X);
  G.__change = ({ target: ce }) => t.updateCurrentHP(Number(ce.value));
  var oe = m(G, 4);
  oe.__change = ({ target: ce }) => t.updateMaxHP(Number(ce.value));
  var le = m(X, 2);
  le.__click = () => t.actor.configureHitPoints();
  var re = m(U, 2), _e = b(re), N = b(_e), O = m(_e, 2), z = b(O), ne = m(O, 2), Y = b(ne);
  Y.__change = ({ target: ce }) => t.updateCurrentMana(Number(ce.value));
  var Ie = m(Y, 4);
  Ie.__change = ({ target: ce }) => t.updateMaxMana(Number(ce.value));
  var Dt = m(M, 2);
  Dt.__click = () => t.rollHitDice();
  var he = m(b(Dt), 2), Yt = b(he), ue = m(he, 2), Se = b(ue), We = m(ue, 2);
  We.__click = (ce) => {
    ce.stopPropagation(), t.actor.configureHitDice();
  };
  var Oe = m(Dt, 2), ut = b(Oe);
  ut.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Jt = m(b(ut), 2), gn = b(Jt), na = m(Jt, 2), aa = b(na), ra = m(ut, 2), On = m(b(ra), 2), vi = b(On), Ya = m(On, 2), _i = b(Ya), ia = m(Ya, 2);
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
    (ce, Le, pn, Ln, sa, oa, bi, mi, gi, pi, yi, wi) => {
      C(se, ce), C(D, u(i).value), C(w, Le), Ue(x, u(s).temp ?? 0), F = bt(M, 1, "nos-combat__pair", null, F, { "nos-hp--bloodied": t.isBloodied }), C(Z, pn), Ue(G, u(s).value), Ue(oe, u(s).max), oe.disabled = !t.editingEnabled, T(le, "data-tooltip", Ln), le.disabled = !t.editingEnabled, Rn(N, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Rn(O, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), C(z, sa), Ue(Y, t.mana?.current ?? 0), Rn(Y, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Ue(Ie, t.mana?.max || t.mana?.baseMax || 0), Ie.disabled = !t.editingEnabled, Rn(Ie, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), C(Yt, oa), C(Se, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), T(We, "data-tooltip", bi), We.disabled = !t.editingEnabled, T(ut, "data-tooltip", mi), C(gn, gi), C(aa, pi), C(vi, yi), C(_i, u(c).walk), T(ia, "data-tooltip", wi), ia.disabled = !t.editingEnabled;
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
      () => Ka(u(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), H(e, l), Ee();
}
r(fo, "StatsRow");
Ce(["click", "change"]);
var vo = /* @__PURE__ */ P('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ j(() => n[t.skillKey]), o = /* @__PURE__ */ j(() => k(a[u(i)])), c = /* @__PURE__ */ j(() => k(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = b(l), v = b(f), _ = m(f, 2), d = b(_), p = m(_, 2), E = b(p);
  J(
    (I, y) => {
      T(l, "data-tooltip", I), C(v, u(o)), C(d, y), C(E, u(c));
    },
    [
      () => bn("NWS.RollSkill", { name: u(c) }),
      () => Ka(t.skill.mod)
    ]
  ), H(e, l), Ee();
}
r(_o, "SkillCell");
Ce(["click"]);
var ho = /* @__PURE__ */ P('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), bo = /* @__PURE__ */ P('<section class="nos-skills-row"><!> <!></section>');
function mo(e, t) {
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
  var a = bo(), s = b(a);
  et(s, 17, () => n, $e, (c, l) => {
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
      l.__click = () => t.actor.configureSkills(), J((f) => T(l, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), H(c, l);
    }, "consequent");
    ee(i, (c) => {
      t.editingEnabled && c(o);
    });
  }
  H(e, a), Ee();
}
r(mo, "SkillsRow");
Ce(["click"]);
var go = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ P('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ P('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Mo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Do = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Co = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ P("<!> <!> <!> <!> <!>", 1);
function fr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), i = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), c = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
  function l(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(l, "configureItem");
  function f(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(f, "deleteItem");
  function v(g, w) {
    const x = { type: "Item", uuid: w.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(x));
  }
  r(v, "onDragStart");
  var _ = Oo(), d = It(_);
  {
    var p = /* @__PURE__ */ r((g) => {
      var w = Eo(), x = b(w);
      {
        var M = /* @__PURE__ */ r((L) => {
          var B = po(), Q = b(B), V = b(Q), te = m(Q, 2), Z = b(te), X = m(Z, 2);
          X.__click = () => l(u(s).id);
          var G = b(X), oe = m(X, 2);
          {
            var le = /* @__PURE__ */ r((re) => {
              var _e = go(), N = b(_e);
              N.__click = () => l(u(s).id);
              var O = m(N, 2);
              O.__click = () => f(u(s).id), H(re, _e);
            }, "consequent");
            ee(oe, (re) => {
              t.editingEnabled && re(le);
            });
          }
          J(
            (re) => {
              C(V, re), T(Z, "src", u(s).img), T(Z, "alt", u(s).name), C(G, u(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), dt("dragstart", te, (re) => v(re, u(s))), H(L, B);
        }, "consequent_1");
        ee(x, (L) => {
          u(s) && L(M);
        });
      }
      var F = m(x, 2);
      {
        var U = /* @__PURE__ */ r((L) => {
          var B = wo(), Q = b(B), V = b(Q), te = m(Q, 2), Z = b(te), X = m(Z, 2);
          X.__click = () => l(u(i).id);
          var G = b(X), oe = m(X, 2);
          {
            var le = /* @__PURE__ */ r((re) => {
              var _e = yo(), N = b(_e);
              N.__click = () => l(u(i).id);
              var O = m(N, 2);
              O.__click = () => f(u(i).id), H(re, _e);
            }, "consequent_2");
            ee(oe, (re) => {
              t.editingEnabled && re(le);
            });
          }
          J(
            (re) => {
              C(V, re), T(Z, "src", u(i).img), T(Z, "alt", u(i).name), C(G, u(i).name);
            },
            [() => k("NWS.Background")]
          ), dt("dragstart", te, (re) => v(re, u(i))), H(L, B);
        }, "consequent_3");
        ee(F, (L) => {
          u(i) && L(U);
        });
      }
      H(g, w);
    }, "consequent_4");
    ee(d, (g) => {
      (u(s) || u(i)) && g(p);
    });
  }
  var E = m(d, 2);
  {
    var I = /* @__PURE__ */ r((g) => {
      var w = No(), x = b(w), M = b(x), F = m(x, 2), U = b(F), L = m(U, 2);
      L.__click = () => l(u(o).id);
      var B = b(L), Q = m(L, 2);
      {
        var V = /* @__PURE__ */ r((X) => {
          var G = So(), oe = b(G);
          oe.__click = () => l(u(o).id);
          var le = m(oe, 2);
          le.__click = () => f(u(o).id), H(X, G);
        }, "consequent_5");
        ee(Q, (X) => {
          t.editingEnabled && X(V);
        });
      }
      var te = m(F, 2);
      {
        var Z = /* @__PURE__ */ r((X) => {
          var G = xo(), oe = b(G), le = m(oe, 2);
          le.__click = () => l(u(c).id);
          var re = b(le), _e = m(le, 2);
          {
            var N = /* @__PURE__ */ r((O) => {
              var z = ko(), ne = b(z);
              ne.__click = () => l(u(c).id);
              var Y = m(ne, 2);
              Y.__click = () => f(u(c).id), H(O, z);
            }, "consequent_6");
            ee(_e, (O) => {
              t.editingEnabled && O(N);
            });
          }
          J(() => {
            T(oe, "src", u(c).img), T(oe, "alt", u(c).name), C(re, u(c).name);
          }), dt("dragstart", G, (O) => v(O, u(c))), H(X, G);
        }, "consequent_7");
        ee(te, (X) => {
          u(c) && X(Z);
        });
      }
      J(
        (X, G) => {
          C(M, X), T(U, "src", u(o).img), T(U, "alt", u(o).name), C(B, `${u(o).name ?? ""} (${G ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), dt("dragstart", F, (X) => v(X, u(o))), H(g, w);
    }, "consequent_8");
    ee(E, (g) => {
      u(o) && g(I);
    });
  }
  var y = m(E, 2);
  {
    var W = /* @__PURE__ */ r((g) => {
      var w = Ao(), x = b(w), M = b(x), F = m(x, 2);
      et(F, 21, () => u(n), $e, (U, L) => {
        var B = Io(), Q = b(B), V = m(Q, 2);
        V.__click = () => l(u(L).id);
        var te = b(V), Z = m(V, 2);
        {
          var X = /* @__PURE__ */ r((G) => {
            var oe = To(), le = b(oe);
            le.__click = () => l(u(L).id);
            var re = m(le, 2);
            re.__click = () => f(u(L).id), H(G, oe);
          }, "consequent_9");
          ee(Z, (G) => {
            t.editingEnabled && G(X);
          });
        }
        J(() => {
          T(Q, "src", u(L).img), T(Q, "alt", u(L).name), C(te, u(L).name);
        }), dt("dragstart", B, (G) => v(G, u(L))), H(U, B);
      }), J((U) => C(M, U), [() => k("NWS.Features")]), H(g, w);
    }, "consequent_10");
    ee(y, (g) => {
      u(n).length > 0 && g(W);
    });
  }
  var se = m(y, 2);
  {
    var S = /* @__PURE__ */ r((g) => {
      var w = Co(), x = b(w), M = b(x), F = m(x, 2);
      et(F, 21, () => u(a), $e, (U, L) => {
        var B = Do(), Q = b(B), V = m(Q, 2);
        V.__click = () => l(u(L).id);
        var te = b(V), Z = m(V, 2);
        {
          var X = /* @__PURE__ */ r((G) => {
            var oe = Mo(), le = b(oe);
            le.__click = () => l(u(L).id);
            var re = m(le, 2);
            re.__click = () => f(u(L).id), H(G, oe);
          }, "consequent_11");
          ee(Z, (G) => {
            t.editingEnabled && G(X);
          });
        }
        J(() => {
          T(Q, "src", u(L).img), T(Q, "alt", u(L).name), C(te, u(L).name);
        }), dt("dragstart", B, (G) => v(G, u(L))), H(U, B);
      }), J((U) => C(M, U), [() => k("NWS.Boons")]), H(g, w);
    }, "consequent_12");
    ee(se, (g) => {
      u(a).length > 0 && g(S);
    });
  }
  var D = m(se, 2);
  {
    var R = /* @__PURE__ */ r((g) => {
      var w = Wo(), x = b(w);
      J((M) => C(x, M), [() => k("NWS.DropFeaturesHere")]), H(g, w);
    }, "consequent_13");
    ee(D, (g) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && g(R);
    });
  }
  H(e, _), Ee();
}
r(fr, "FeaturesTab");
Ce(["click"]);
var Lo = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ho = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Po = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ro = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ P('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ P('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ P('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function dr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ je(""), a = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, D) => (S.sort ?? 0) - (D.sort ?? 0))), s = /* @__PURE__ */ j(() => u(n) ? u(a).filter((S) => S.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ j(() => {
    const S = {};
    for (const D of u(s)) {
      const R = D.system?.tier ?? 0, g = D.system?.isUtility ?? !1, w = g ? "_utility" : `_tier_${R}`, x = g ? k("NWS.Utility") : bn("NWS.Tier", { n: R });
      S[w] ??= { label: x, spells: [] }, S[w].spells.push(D);
    }
    return Object.entries(S).sort(([D], [R]) => {
      if (D === "_utility") return 1;
      if (R === "_utility") return -1;
      const g = parseInt(D.replace("_tier_", "")), w = parseInt(R.replace("_tier_", ""));
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
  function v(S, D) {
    const R = { type: "Item", uuid: D.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(R));
  }
  r(v, "onDragStart");
  var _ = Uo(), d = It(_), p = m(b(d), 2), E = m(p, 2);
  {
    var I = /* @__PURE__ */ r((S) => {
      var D = Lo();
      D.__click = l;
      var R = m(b(D));
      J((g) => C(R, ` ${g ?? ""}`), [() => k("NWS.New")]), H(S, D);
    }, "consequent");
    ee(E, (S) => {
      t.editingEnabled && S(I);
    });
  }
  var y = m(d, 2);
  et(y, 17, () => u(i), $e, (S, D) => {
    var R = /* @__PURE__ */ j(() => gr(u(D), 2));
    let g = /* @__PURE__ */ r(() => u(R)[1], "tier");
    var w = jo(), x = b(w), M = b(x), F = m(x, 2);
    et(F, 21, () => g().spells, $e, (U, L) => {
      var B = Fo(), Q = b(B), V = m(Q, 2);
      V.__click = () => f(u(L).id);
      var te = b(V), Z = m(te);
      {
        var X = /* @__PURE__ */ r((O) => {
          var z = Ho();
          J((ne) => T(z, "data-tooltip", ne), [() => k("NWS.Concentration")]), H(O, z);
        }, "consequent_1");
        ee(Z, (O) => {
          u(L).system?.concentration && O(X);
        });
      }
      var G = m(Z, 2);
      {
        var oe = /* @__PURE__ */ r((O) => {
          var z = Po();
          J((ne) => T(z, "data-tooltip", ne), [() => k("NWS.Utility")]), H(O, z);
        }, "consequent_2");
        ee(G, (O) => {
          u(L).system?.isUtility && O(oe);
        });
      }
      var le = m(V, 2), re = b(le), _e = m(le, 2);
      {
        var N = /* @__PURE__ */ r((O) => {
          var z = Ro(), ne = b(z);
          ne.__click = () => o(u(L).id);
          var Y = m(ne, 2);
          Y.__click = () => c(u(L).id), H(O, z);
        }, "consequent_3");
        ee(_e, (O) => {
          t.editingEnabled && O(N);
        });
      }
      J(() => {
        T(Q, "src", u(L).img), T(Q, "alt", u(L).name), C(te, `${u(L).name ?? ""} `), C(re, u(L).system?.activationCost ?? "");
      }), dt("dragstart", B, (O) => v(O, u(L))), H(U, B);
    }), J(() => C(M, g().label)), H(S, w);
  });
  var W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var D = zo(), R = b(D);
      J((g) => C(R, g), [() => k("NWS.DropSpellsHere")]), H(S, D);
    }, "consequent_4");
    ee(W, (S) => {
      u(a).length === 0 && S(se);
    });
  }
  J((S) => T(p, "placeholder", S), [() => k("NWS.SearchSpells")]), di(p, () => u(n), (S) => Ge(n, S)), H(e, _), Ee();
}
r(dr, "SpellsTab");
Ce(["click"]);
var Bo = /* @__PURE__ */ P('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), qo = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ko = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vo = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Go = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Yo = /* @__PURE__ */ P('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function vr(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ je(""), a = /* @__PURE__ */ j(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((g) => g.type === "object").sort((g, w) => (g.sort ?? 0) - (w.sort ?? 0))), i = /* @__PURE__ */ j(() => u(n) ? u(s).filter((g) => g.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
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
  function v(g, w) {
    const x = u(a)[g]?.value ?? 0;
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, x + w)
    });
  }
  r(v, "adjustCurrency");
  function _(g, w) {
    t.actor.items.get(g)?.update({ "system.quantity": Number(w) });
  }
  r(_, "updateQuantity");
  function d(g, w) {
    const x = { type: "Item", uuid: w.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(x));
  }
  r(d, "onDragStart");
  var p = Yo(), E = It(p);
  et(E, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], $e, (g, w) => {
    var x = /* @__PURE__ */ j(() => gr(w, 2));
    let M = /* @__PURE__ */ r(() => u(x)[0], "type"), F = /* @__PURE__ */ r(() => u(x)[1], "labelKey");
    var U = Bo(), L = b(U), B = b(L), Q = m(L, 2);
    Q.__click = () => v(M(), -1);
    var V = m(Q, 2);
    V.__change = ({ target: Z }) => f(M(), Z.value);
    var te = m(V, 2);
    te.__click = () => v(M(), 1), J(
      (Z, X, G) => {
        T(L, "for", `currency-${M() ?? ""}`), C(B, Z), T(Q, "aria-label", `-1 ${X ?? ""}`), T(V, "id", `currency-${M() ?? ""}`), Ue(V, u(a)[M()]?.value ?? 0), T(te, "aria-label", `+1 ${G ?? ""}`);
      },
      [
        () => k(F()),
        () => k(F()),
        () => k(F())
      ]
    ), H(g, U);
  });
  var I = m(E, 2), y = m(b(I), 2), W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((g) => {
      var w = qo();
      w.__click = l;
      var x = m(b(w));
      J((M) => C(x, ` ${M ?? ""}`), [() => k("NWS.New")]), H(g, w);
    }, "consequent");
    ee(W, (g) => {
      t.editingEnabled && g(se);
    });
  }
  var S = m(I, 2);
  et(S, 21, () => u(i), $e, (g, w) => {
    var x = Vo(), M = b(x), F = m(M, 2);
    F.__click = () => o(u(w).id);
    var U = b(F), L = m(F, 2);
    L.__change = ({ target: V }) => _(u(w).id, V.value);
    var B = m(L, 2);
    {
      var Q = /* @__PURE__ */ r((V) => {
        var te = Ko(), Z = b(te);
        Z.__click = () => o(u(w).id);
        var X = m(Z, 2);
        X.__click = () => c(u(w).id), H(V, te);
      }, "consequent_1");
      ee(B, (V) => {
        t.editingEnabled && V(Q);
      });
    }
    J(() => {
      T(M, "src", u(w).img), T(M, "alt", u(w).name), C(U, u(w).name), Ue(L, u(w).system?.quantity ?? 1);
    }), dt("dragstart", x, (V) => d(V, u(w))), H(g, x);
  });
  var D = m(S, 2);
  {
    var R = /* @__PURE__ */ r((g) => {
      var w = Go(), x = b(w);
      J((M) => C(x, M), [() => k("NWS.DropInventoryHere")]), H(g, w);
    }, "consequent_2");
    ee(D, (g) => {
      u(s).length === 0 && g(R);
    });
  }
  J((g) => T(y, "placeholder", g), [() => k("NWS.SearchItems")]), di(y, () => u(n), (g) => Ge(n, g)), H(e, p), Ee();
}
r(vr, "InventoryTab");
Ce(["click", "change"]);
var Jo = /* @__PURE__ */ P(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function _r(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.system.details), a = /* @__PURE__ */ j(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ j(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ j(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ j(() => (u(a).weapons ?? []).join(", "));
  var c = Jo(), l = b(c), f = b(l), v = b(f), _ = m(f, 2);
  _.__change = ({ target: he }) => t.actor.update({ "system.details.age": he.value });
  var d = m(l, 2), p = b(d), E = b(p), I = m(p, 2);
  I.__change = ({ target: he }) => t.actor.update({ "system.details.gender": he.value });
  var y = m(d, 2), W = b(y), se = b(W), S = m(W, 2);
  S.__change = ({ target: he }) => t.actor.update({ "system.details.height": he.value });
  var D = m(y, 2), R = b(D), g = b(R), w = m(R, 2);
  w.__change = ({ target: he }) => t.actor.update({ "system.details.weight": he.value });
  var x = m(D, 2), M = b(x), F = b(M), U = m(M, 2), L = b(U), B = m(U, 2);
  B.__click = () => t.actor.configureLanguageProficiencies();
  var Q = m(x, 2), V = b(Q), te = b(V), Z = m(V, 2), X = b(Z), G = m(Z, 2);
  G.__click = () => t.actor.configureArmorProficiencies();
  var oe = m(Q, 2), le = b(oe), re = b(le), _e = m(le, 2), N = b(_e), O = m(_e, 2);
  O.__click = () => t.actor.configureWeaponProficiencies();
  var z = m(oe, 2), ne = b(z), Y = b(ne), Ie = m(ne, 2), Dt = b(Ie);
  Us(Dt, () => u(n).notes ?? ""), J(
    (he, Yt, ue, Se, We, Oe, ut, Jt, gn, na, aa, ra, On) => {
      C(v, he), Ue(_, u(n).age ?? ""), _.disabled = !t.editingEnabled, C(E, Yt), Ue(I, u(n).gender ?? ""), I.disabled = !t.editingEnabled, C(se, ue), Ue(S, u(n).height ?? ""), T(S, "placeholder", Se), S.disabled = !t.editingEnabled, C(g, We), Ue(w, u(n).weight ?? ""), T(w, "placeholder", Oe), w.disabled = !t.editingEnabled, C(F, ut), C(L, u(s) || "—"), T(B, "data-tooltip", Jt), B.disabled = !t.editingEnabled, C(te, gn), C(X, u(i) || "—"), T(G, "data-tooltip", na), G.disabled = !t.editingEnabled, C(re, aa), C(N, u(o) || "—"), T(O, "data-tooltip", ra), O.disabled = !t.editingEnabled, C(Y, On), T(Ie, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), dt("blur", Ie, ({ target: he }) => t.actor.update({ "system.details.notes": he.innerHTML })), H(e, c), Ee();
}
r(_r, "BioTab");
Ce(["change", "click"]);
var Qo = /* @__PURE__ */ P('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Xo = /* @__PURE__ */ P('<div class="nos-slot nos-slot--empty"> </div>'), Zo = /* @__PURE__ */ P("<!> <!>", 1);
function $o(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = Zo(), s = It(a);
  et(s, 17, () => u(n), $e, (c, l) => {
    var f = Qo(), v = b(f), _ = m(v, 2);
    _.__click = () => t.actor.activateItem(u(l).id);
    var d = b(_);
    J(() => {
      T(v, "src", u(l).img), T(v, "alt", u(l).name), T(_, "data-tooltip", u(l).name), C(d, u(l).name);
    }), H(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = Xo(), f = b(l);
      J((v) => C(f, v), [() => k("NWS.NoWeapons")]), H(c, l);
    }, "consequent");
    ee(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  H(e, a), Ee();
}
r($o, "InventorySlots");
Ce(["click"]);
var el = /* @__PURE__ */ P('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), tl = /* @__PURE__ */ P('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), nl = /* @__PURE__ */ P('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function al(e, t) {
  we(t, !0);
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
  let a = /* @__PURE__ */ je("features"), s = /* @__PURE__ */ j(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ j(() => t.actor.reactive.system.inventory);
  var o = nl(), c = b(o);
  et(c, 21, () => n, $e, (S, D) => {
    var R = el();
    let g;
    R.__click = () => Ge(a, u(D).name, !0);
    var w = b(R), x = m(w);
    J(
      (M) => {
        g = bt(R, 1, "nos-tab-btn", null, g, { "nos-tab-btn--active": u(a) === u(D).name }), bt(w, 1, u(D).icon), C(x, ` ${M ?? ""}`);
      },
      [() => k(u(D).labelKey)]
    ), H(S, R);
  });
  var l = m(c, 2), f = b(l);
  {
    var v = /* @__PURE__ */ r((S) => {
      fr(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), _ = /* @__PURE__ */ r((S) => {
      var D = va(), R = It(D);
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
        }, "consequent_1"), w = /* @__PURE__ */ r((x) => {
          var M = va(), F = It(M);
          {
            var U = /* @__PURE__ */ r((B) => {
              vr(B, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), L = /* @__PURE__ */ r((B) => {
              var Q = va(), V = It(Q);
              {
                var te = /* @__PURE__ */ r((Z) => {
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
                  V,
                  (Z) => {
                    u(a) === "bio" && Z(te);
                  },
                  !0
                );
              }
              H(B, Q);
            }, "alternate");
            ee(
              F,
              (B) => {
                u(a) === "inventory" ? B(U) : B(L, !1);
              },
              !0
            );
          }
          H(x, M);
        }, "alternate_1");
        ee(
          R,
          (x) => {
            u(a) === "spells" ? x(g) : x(w, !1);
          },
          !0
        );
      }
      H(S, D);
    }, "alternate_2");
    ee(f, (S) => {
      u(a) === "features" ? S(v) : S(_, !1);
    });
  }
  var d = m(l, 2), p = b(d), E = b(p), I = m(d, 2), y = b(I);
  $o(y, {
    get actor() {
      return t.actor;
    }
  });
  var W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var D = tl(), R = b(D);
      J(() => C(R, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), H(S, D);
    }, "consequent_4");
    ee(W, (S) => {
      u(s) && S(se);
    });
  }
  J((S) => C(E, S), [() => k("NWS.Weapons")]), H(e, o), Ee();
}
r(al, "ContentArea");
Ce(["click"]);
var rl = /* @__PURE__ */ P('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button type="button"><i class="fa-solid fa-circle-half-stroke"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function il(e, t) {
  we(t, !0);
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
  let f;
  l.__click = function(...d) {
    t.toggleDarkMode?.apply(this, d);
  };
  var v = m(l, 2);
  v.__click = () => t.actor.triggerRest({ restType: "field" });
  var _ = m(v, 2);
  _.__click = () => t.actor.triggerRest({ restType: "safe" }), J(
    (d, p, E, I, y, W, se, S, D, R, g, w) => {
      s = bt(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), T(a, "aria-pressed", t.editingEnabled), T(a, "aria-label", d), T(a, "data-tooltip", p), bt(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), T(o, "aria-label", E), T(o, "data-tooltip", I), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, T(c, "aria-label", y), T(c, "data-tooltip", W), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, f = bt(l, 1, "nos-sidebar-btn", null, f, { "nos-sidebar-btn--active": t.darkMode }), T(l, "aria-pressed", t.darkMode), T(l, "aria-label", se), T(l, "data-tooltip", S), T(v, "aria-label", D), T(v, "data-tooltip", R), T(_, "aria-label", g), T(_, "data-tooltip", w);
    },
    [
      () => t.editingEnabled ? k("NWS.DisableEditing") : k("NWS.EnableEditing"),
      () => t.editingEnabled ? k("NWS.EditingEnabled") : k("NWS.EditingLocked"),
      () => k("NWS.LevelUp"),
      () => k("NWS.LevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.DarkMode"),
      () => k("NWS.DarkMode"),
      () => k("NWS.FieldRest"),
      () => k("NWS.FieldRest"),
      () => k("NWS.SafeRest"),
      () => k("NWS.SafeRest")
    ]
  ), H(e, n), Ee();
}
r(il, "SidebarControls");
Ce(["click"]);
var sl = /* @__PURE__ */ P('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ol(e, t) {
  we(t, !0);
  const n = Rr((N) => {
    const O = {
      updateActor: Hooks.on("updateActor", (z, ne, Y) => {
        Y.diff !== !1 && z._id === t.actor.id && N();
      }),
      createItem: Hooks.on("createItem", (z) => {
        z?.actor?.id === t.actor.id && N();
      }),
      deleteItem: Hooks.on("deleteItem", (z) => {
        z?.actor?.id === t.actor.id && N();
      }),
      updateItem: Hooks.on("updateItem", (z, ne, Y) => {
        Y.diff !== !1 && z?.actor?.id === t.actor.id && N();
      })
    };
    return () => {
      Hooks.off("updateActor", O.updateActor), Hooks.off("createItem", O.createItem), Hooks.off("deleteItem", O.deleteItem), Hooks.off("updateItem", O.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(N, O) {
      if (O === "reactive")
        return n(), N;
      const z = N[O];
      return typeof z == "function" ? z.bind(N) : z;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(N, O) {
    return Math.clamp(0, Math.round(N / O * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(N, O, z, ne) {
    const Y = [];
    return z && Y.push(`${z.name} (${s[ne] ?? ne})`), N && (O ? Y.push(`${N.name} (${O.name}, ${N.system.classLevel})`) : Y.push(`${N.name} (${N.system.classLevel})`)), Y.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(N, O) {
    if (!O) return N;
    const z = [4, 6, 8, 10, 12, 20], ne = z.indexOf(N);
    return ne === -1 ? N : z[Math.min(ne + O, z.length - 1)];
  }
  r(f, "incrementDieSize");
  let v = /* @__PURE__ */ j(() => c(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function _(N) {
    a.update({ "system.attributes.hp.value": N });
  }
  r(_, "updateCurrentHP");
  function d(N) {
    a.update({ "system.attributes.hp.max": N });
  }
  r(d, "updateMaxHP");
  function p(N) {
    a.update({ "system.attributes.hp.temp": N });
  }
  r(p, "updateTempHP");
  let E = /* @__PURE__ */ j(() => a.reactive.system.resources.mana), I = /* @__PURE__ */ j(() => (u(E).max ?? 0) > 0 || (u(E).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((N) => N.type === "class" && N.system?.mana?.formula?.length));
  function y(N) {
    a.update({ "system.resources.mana.current": N });
  }
  r(y, "updateCurrentMana");
  function W(N) {
    const O = a.reactive.system.resources.mana, z = O.baseMax ?? 0, Y = (O.max || z) - z, Ie = Math.max(0, N - Y);
    a.update({ "system.resources.mana.baseMax": Ie });
  }
  r(W, "updateMaxMana");
  let se = /* @__PURE__ */ j(() => {
    const N = a.reactive.system.attributes.hitDice, O = a.reactive.system.attributes.bonusHitDice ?? [], z = a.reactive.items.filter((ue) => ue.type === "class"), ne = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, Y = {};
    for (const ue of z) {
      const Se = ue.system.hitDieSize, We = f(Se, ne), Oe = ue.system.classLevel;
      Y[We] ??= { current: 0, total: 0 }, Y[We].total += Oe, Y[We].current = N[We]?.current ?? 0;
    }
    const Ie = z.map((ue) => f(ue.system.hitDieSize, ne));
    for (const ue of O) {
      const Se = f(ue.size, ne);
      Y[Se] ??= { current: N[Se]?.current ?? 0, total: 0 }, Y[Se].total += ue.value, Ie.includes(Se) || (Y[Se].current = N[Se]?.current ?? 0);
    }
    const Dt = O.map((ue) => f(ue.size, ne));
    for (const [ue, Se] of Object.entries(N ?? {})) {
      const We = Number(ue), Oe = f(We, ne), ut = Se?.bonus ?? 0;
      if (ut > 0) {
        Y[Oe] ??= { current: 0, total: 0 }, Y[Oe].total += ut;
        const Jt = Ie.includes(Oe), gn = Dt.includes(Oe);
        !Jt && !gn && (Y[Oe].current = N[Oe]?.current ?? 0);
      }
    }
    let he = 0, Yt = 0;
    for (const ue of Object.values(Y))
      he += ue.current, Yt += ue.total;
    return { bySize: Y, value: he, max: Yt };
  });
  async function S(N) {
    await a.updateCurrentHitDice(N);
  }
  r(S, "updateCurrentHitDice");
  async function D() {
    await a.rollHitDice();
  }
  r(D, "rollHitDice");
  async function R() {
    await a.editCurrentHitDice();
  }
  r(R, "editCurrentHitDice");
  let g = /* @__PURE__ */ j(() => a.reactive.items.find((N) => N.type === "class") ?? null), w = /* @__PURE__ */ j(() => {
    const N = a.reactive.items.find((Y) => Y.type === "class") ?? null, O = a.reactive.items.find((Y) => Y.type === "subclass") ?? null, z = a.reactive.items.find((Y) => Y.type === "ancestry") ?? null, ne = a.reactive.system.attributes.sizeCategory;
    return l(N, O, z, ne);
  }), x = /* @__PURE__ */ j(() => a.reactive.system.attributes.wounds);
  function M(N) {
    let O = N;
    N <= u(x).value && (O = N - 1), a.update({ "system.attributes.wounds.value": O });
  }
  r(M, "toggleWounds");
  let F = /* @__PURE__ */ j(() => a.reactive.flags.nimble), U = /* @__PURE__ */ j(() => u(F)?.editingEnabled ?? !0);
  const L = Ys(!1, (N) => (xs(() => N(u(U))), () => {
  }));
  async function B() {
    await a.setFlag("nimble", "editingEnabled", !u(U));
  }
  r(B, "toggleEditingEnabled");
  let Q = /* @__PURE__ */ j(() => u(F)?.darkMode ?? !1);
  async function V() {
    await a.setFlag("nimble", "darkMode", !u(Q));
  }
  r(V, "toggleDarkMode"), Hn("actor", a), Hn("document", a), Hn("application", t.sheet), Hn("editingEnabled", L);
  var te = sl();
  let Z;
  var X = b(te), G = b(X);
  to(G, {
    get actor() {
      return a;
    },
    get metaData() {
      return u(w);
    },
    get editingEnabled() {
      return u(U);
    },
    get hitDiceData() {
      return u(se);
    }
  });
  var oe = m(G, 2);
  fo(oe, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(U);
    },
    get isBloodied() {
      return u(v);
    },
    get hitDiceData() {
      return u(se);
    },
    get hasMana() {
      return u(I);
    },
    get mana() {
      return u(E);
    },
    get wounds() {
      return u(x);
    },
    toggleWounds: M,
    updateCurrentHP: _,
    updateMaxHP: d,
    updateTempHP: p,
    updateCurrentMana: y,
    updateMaxMana: W,
    updateCurrentHitDice: S,
    rollHitDice: D,
    editCurrentHitDice: R
  });
  var le = m(oe, 2);
  mo(le, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(U);
    }
  });
  var re = m(X, 2);
  al(re, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(U);
    },
    get hasMana() {
      return u(I);
    },
    get mana() {
      return u(E);
    },
    updateCurrentMana: y,
    updateMaxMana: W
  });
  var _e = m(re, 2);
  il(_e, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(U);
    },
    toggleEditingEnabled: B,
    get classItem() {
      return u(g);
    },
    get darkMode() {
      return u(Q);
    },
    toggleDarkMode: V
  }), J(() => Z = bt(te, 1, "nos-sheet", null, Z, { "nos-sheet--dark": u(Q) })), H(e, te), Ee();
}
r(ol, "WhiteSheet");
const at = class at extends Qs(foundry.applications.sheets.ActorSheetV2) {
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
    return t.width !== void 0 && t.width < at.MIN_WIDTH && (t.width = at.MIN_WIDTH), t.height !== void 0 && t.height < at.MIN_HEIGHT && (t.height = at.MIN_HEIGHT), super.setPosition(t);
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
        if (!Object.values(a.classes ?? {}).some((_) => _.identifier === c)) {
          const _ = CONFIG.NIMBLE?.classes?.[c] ?? c;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${_} class.`);
          continue;
        }
        const v = a.items.find((_) => _.type === "subclass" && _.system?.parentClass === c);
        if (v) {
          const _ = v.system?.identifier, d = o.system?.identifier;
          if (_ && d && _ === d) {
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
r(at, "WhiteCharacterSheet"), He(at, "MIN_WIDTH", 670), He(at, "MIN_HEIGHT", 400), He(at, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Wa = at;
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
