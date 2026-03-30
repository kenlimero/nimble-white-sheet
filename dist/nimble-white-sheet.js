var $r = Object.defineProperty;
var ea = (e) => {
  throw TypeError(e);
};
var Ii = (e, t, n) => t in e ? $r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t) => $r(e, "name", { value: t, configurable: !0 });
var Re = (e, t, n) => Ii(e, typeof t != "symbol" ? t + "" : t, n), ur = (e, t, n) => t.has(e) || ea("Cannot " + n);
var m = (e, t, n) => (ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => t.has(e) ? ea("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, r) => (ur(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ye = (e, t, n) => (ur(e, t, "access private method"), n);
const be = /* @__PURE__ */ Symbol(), Wi = /* @__PURE__ */ Symbol("filename"), Ai = "http://www.w3.org/1999/xhtml", ta = globalThis.process?.env?.NODE_ENV, D = ta && !ta.toLowerCase().startsWith("prod");
var ya = Array.isArray, Mi = Array.prototype.indexOf, jt = Array.prototype.includes, Yn = Array.from, zt = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, Di = Object.getOwnPropertyDescriptors, Li = Object.prototype, Oi = Array.prototype, wa = Object.getPrototypeOf, na = Object.isExtensible;
const fr = /* @__PURE__ */ i(() => {
}, "noop");
function Pi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
i(Pi, "run_all");
function Sa() {
  var e, t, n = new Promise((r, a) => {
    e = r, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
i(Sa, "deferred");
function ka(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
i(ka, "to_array");
const ge = 2, pr = 4, Zn = 8, Ea = 1 << 24, ht = 16, $e = 32, qt = 64, Fr = 128, Ue = 512, _e = 1024, pe = 2048, Xe = 4096, Oe = 8192, wt = 16384, Hr = 32768, ln = 65536, zn = 1 << 17, xa = 1 << 18, _n = 1 << 19, Ri = 1 << 20, _t = 1 << 25, Ct = 32768, yr = 1 << 21, Jn = 1 << 22, St = 1 << 23, Xt = /* @__PURE__ */ Symbol("$state"), Fi = /* @__PURE__ */ Symbol(""), Na = /* @__PURE__ */ Symbol("proxy path");
var $t;
const Yt = new ($t = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, i($t, "StaleReactionError"), $t)();
function Hi(e) {
  if (D) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
i(Hi, "lifecycle_outside_component");
function ji() {
  if (D) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
i(ji, "async_derived_orphan");
function ra() {
  if (D) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
i(ra, "bind_invalid_checkbox_value");
function zi() {
  if (D) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
i(zi, "derived_references_self");
function Ca(e, t, n) {
  if (D) {
    const r = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
i(Ca, "each_key_duplicate");
function Ui(e) {
  if (D) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
i(Ui, "effect_in_teardown");
function Bi() {
  if (D) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
i(Bi, "effect_in_unowned_derived");
function qi(e) {
  if (D) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
i(qi, "effect_orphan");
function Gi() {
  if (D) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
i(Gi, "effect_update_depth_exceeded");
function Ki(e) {
  if (D) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
i(Ki, "rune_outside_svelte");
function Vi() {
  if (D) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
i(Vi, "state_descriptors_fixed");
function Yi() {
  if (D) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
i(Yi, "state_prototype_fixed");
function Zi() {
  if (D) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
i(Zi, "state_unsafe_mutation");
function Ji() {
  if (D) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
i(Ji, "svelte_boundary_reset_onerror");
var Qn = "font-weight: bold", Xn = "font-weight: normal";
function Qi() {
  D ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Qn, Xn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
i(Qi, "lifecycle_double_unmount");
function dr(e) {
  D ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Qn, Xn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
i(dr, "state_proxy_equality_mismatch");
function Xi() {
  D ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Qn, Xn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
i(Xi, "state_proxy_unmount");
function $i() {
  D ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Qn, Xn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
i($i, "svelte_boundary_reset_noop");
function Ta(e) {
  return e === this.v;
}
i(Ta, "equals");
function Ia(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
i(Ia, "safe_not_equal");
function Wa(e) {
  return !Ia(e, this.v);
}
i(Wa, "safe_equals");
let es = !1;
function tt(e, t) {
  return e.label = t, Aa(e.v, t), e;
}
i(tt, "tag");
function Aa(e, t) {
  return e?.[Na]?.(t), e;
}
i(Aa, "tag_proxy");
function ts(e) {
  const t = new Error(), n = ns();
  return n.length === 0 ? null : (n.unshift(`
`), zt(t, "stack", {
    value: n.join(`
`)
  }), zt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
i(ts, "get_error");
function ns() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), r = [];
  for (let a = 0; a < n.length; a++) {
    const s = n[a], o = s.replaceAll("\\", "/");
    if (s.trim() !== "Error") {
      if (s.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || r.push(s);
    }
  }
  return r;
}
i(ns, "get_stack");
let me = null;
function cn(e) {
  me = e;
}
i(cn, "set_component_context");
let kn = null;
function Un(e) {
  kn = e;
}
i(Un, "set_dev_stack");
let In = null;
function aa(e) {
  In = e;
}
i(aa, "set_dev_current_component_function");
function Pn(e, t) {
  return rs("setContext").set(e, t), t;
}
i(Pn, "setContext");
function we(e, t = !1, n) {
  me = {
    p: me,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, D && (me.function = n, In = n);
}
i(we, "push");
function Se(e) {
  var t = (
    /** @type {ComponentContext} */
    me
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Qa(r);
  }
  return t.i = !0, me = t.p, D && (In = me?.function ?? null), /** @type {T} */
  {};
}
i(Se, "pop");
function Ma() {
  return !0;
}
i(Ma, "is_runes");
function rs(e) {
  return me === null && Hi(e), me.c ??= new Map(as(me) || void 0);
}
i(rs, "get_or_init_context_map");
function as(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
i(as, "get_parent_context");
let Wt = [];
function Da() {
  var e = Wt;
  Wt = [], Pi(e);
}
i(Da, "run_micro_tasks");
function kt(e) {
  if (Wt.length === 0 && !wn) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Da();
    });
  }
  Wt.push(e);
}
i(kt, "queue_micro_task");
function is() {
  for (; Wt.length > 0; )
    Da();
}
i(is, "flush_tasks");
const wr = /* @__PURE__ */ new WeakMap();
function La(e) {
  var t = $;
  if (t === null)
    return Q.f |= St, e;
  if (D && e instanceof Error && !wr.has(e) && wr.set(e, ss(e, t)), (t.f & Hr) === 0) {
    if ((t.f & Fr) === 0)
      throw D && !t.parent && e instanceof Error && Oa(e), e;
    t.b.error(e);
  } else
    un(e, t);
}
i(La, "handle_error");
function un(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fr) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw D && e instanceof Error && Oa(e), e;
}
i(un, "invoke_error_boundary");
function ss(e, t) {
  const n = Qt(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = qr ? "  " : "	", a = `
${r}in ${t.fn?.name || "<unknown>"}`, s = t.ctx; s !== null; )
      a += `
${r}in ${s.function?.[Wi].split("/").pop()}`, s = s.p;
    return {
      message: e.message + `
${a}
`,
      stack: e.stack?.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
i(ss, "get_adjustments");
function Oa(e) {
  const t = wr.get(e);
  t && (zt(e, "message", {
    value: t.message
  }), zt(e, "stack", {
    value: t.stack
  }));
}
i(Oa, "apply_adjustments");
const os = -7169;
function de(e, t) {
  e.f = e.f & os | t;
}
i(de, "set_signal_status");
function jr(e) {
  (e.f & Ue) !== 0 || e.deps === null ? de(e, _e) : de(e, Xe);
}
i(jr, "update_derived_status");
function Pa(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & Ct) === 0 || (t.f ^= Ct, Pa(
        /** @type {Derived} */
        t.deps
      ));
}
i(Pa, "clear_marked");
function Ra(e, t, n) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & Xe) !== 0 && n.add(e), Pa(e.deps), de(e, _e);
}
i(Ra, "defer_effect");
const Rn = /* @__PURE__ */ new Set();
let ae = null, Sr = null, Ke = null, xe = [], $n = null, kr = !1, wn = !1;
var en, tn, Mt, nn, xn, Nn, Dt, dt, rn, ct, Er, xr, Fa;
const Gn = class Gn {
  constructor() {
    B(this, ct);
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
    B(this, en, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, tn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    B(this, Mt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    B(this, nn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    B(this, xn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    B(this, Nn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    B(this, Dt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    B(this, dt, /* @__PURE__ */ new Map());
    Re(this, "is_fork", !1);
    B(this, rn, !1);
  }
  is_deferred() {
    return this.is_fork || m(this, nn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    m(this, dt).has(t) || m(this, dt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = m(this, dt).get(t);
    if (n) {
      m(this, dt).delete(t);
      for (var r of n.d)
        de(r, pe), Ve(r);
      for (r of n.m)
        de(r, Xe), Ve(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    xe = [], this.apply();
    var n = [], r = [];
    for (const a of t)
      ye(this, ct, Er).call(this, a, n, r);
    if (this.is_deferred()) {
      ye(this, ct, xr).call(this, r), ye(this, ct, xr).call(this, n);
      for (const [a, s] of m(this, dt))
        Ua(a, s);
    } else {
      for (const a of m(this, en)) a();
      m(this, en).clear(), m(this, Mt) === 0 && ye(this, ct, Fa).call(this), Sr = this, ae = null, ia(r), ia(n), Sr = null, m(this, xn)?.resolve();
    }
    Ke = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== be && !this.previous.has(t) && this.previous.set(t, n), (t.f & St) === 0 && (this.current.set(t, t.v), Ke?.set(t, t.v));
  }
  activate() {
    ae = this, this.apply();
  }
  deactivate() {
    ae === this && (ae = null, Ke = null);
  }
  flush() {
    if (this.activate(), xe.length > 0) {
      if (Ha(), ae !== null && ae !== this)
        return;
    } else m(this, Mt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of m(this, tn)) t(this);
    m(this, tn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    q(this, Mt, m(this, Mt) + 1), t && q(this, nn, m(this, nn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    q(this, Mt, m(this, Mt) - 1), t && q(this, nn, m(this, nn) - 1), !m(this, rn) && (q(this, rn, !0), kt(() => {
      q(this, rn, !1), this.is_deferred() ? xe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of m(this, Nn))
      m(this, Dt).delete(t), de(t, pe), Ve(t);
    for (const t of m(this, Dt))
      de(t, Xe), Ve(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    m(this, en).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    m(this, tn).add(t);
  }
  settled() {
    return (m(this, xn) ?? q(this, xn, Sa())).promise;
  }
  static ensure() {
    if (ae === null) {
      const t = ae = new Gn();
      Rn.add(ae), wn || kt(() => {
        ae === t && t.flush();
      });
    }
    return ae;
  }
  apply() {
  }
};
en = new WeakMap(), tn = new WeakMap(), Mt = new WeakMap(), nn = new WeakMap(), xn = new WeakMap(), Nn = new WeakMap(), Dt = new WeakMap(), dt = new WeakMap(), rn = new WeakMap(), ct = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Er = /* @__PURE__ */ i(function(t, n, r) {
  t.f ^= _e;
  for (var a = t.first, s = null; a !== null; ) {
    var o = a.f, c = (o & ($e | qt)) !== 0, u = c && (o & _e) !== 0, f = u || (o & Oe) !== 0 || m(this, dt).has(a);
    if (!f && a.fn !== null) {
      c ? a.f ^= _e : s !== null && (o & (pr | Zn | Ea)) !== 0 ? s.b.defer_effect(a) : (o & pr) !== 0 ? n.push(a) : An(a) && ((o & ht) !== 0 && m(this, Dt).add(a), En(a));
      var d = a.first;
      if (d !== null) {
        a = d;
        continue;
      }
    }
    var _ = a.parent;
    for (a = a.next; a === null && _ !== null; )
      _ === s && (s = null), a = _.next, _ = _.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
xr = /* @__PURE__ */ i(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ra(t[n], m(this, Nn), m(this, Dt));
}, "#defer_effects"), Fa = /* @__PURE__ */ i(function() {
  var a;
  if (Rn.size > 1) {
    this.previous.clear();
    var t = Ke, n = !0;
    for (const s of Rn) {
      if (s === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [u, f] of this.current) {
        if (s.current.has(u))
          if (n && f !== s.current.get(u))
            s.current.set(u, f);
          else
            continue;
        o.push(u);
      }
      if (o.length === 0)
        continue;
      const c = [...s.current.keys()].filter((u) => !this.current.has(u));
      if (c.length > 0) {
        var r = xe;
        xe = [];
        const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          ja(d, c, u, f);
        if (xe.length > 0) {
          ae = s, s.apply();
          for (const d of xe)
            ye(a = s, ct, Er).call(a, d, [], []);
          s.deactivate();
        }
        xe = r;
      }
    }
    ae = null, Ke = t;
  }
  this.committed = !0, Rn.delete(this);
}, "#commit"), i(Gn, "Batch");
let Et = Gn;
function ls(e) {
  var t = wn;
  wn = !0;
  try {
    for (var n; ; ) {
      if (is(), xe.length === 0 && (ae?.flush(), xe.length === 0))
        return $n = null, /** @type {T} */
        n;
      Ha();
    }
  } finally {
    wn = t;
  }
}
i(ls, "flushSync");
function Ha() {
  kr = !0;
  var e = D ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; xe.length > 0; ) {
      var n = Et.ensure();
      if (t++ > 1e3) {
        if (D) {
          var r = /* @__PURE__ */ new Map();
          for (const s of n.current.keys())
            for (const [o, c] of s.updated ?? []) {
              var a = r.get(o);
              a || (a = { error: c.error, count: 0 }, r.set(o, a)), a.count += c.count;
            }
          for (const s of r.values())
            s.error && console.error(s.error);
        }
        cs();
      }
      if (n.process(xe), xt.clear(), D)
        for (const s of n.current.keys())
          e.add(s);
    }
  } finally {
    if (xe = [], kr = !1, $n = null, D)
      for (
        const s of
        /** @type {Set<Source>} */
        e
      )
        s.updated = null;
  }
}
i(Ha, "flush_effects");
function cs() {
  try {
    Gi();
  } catch (e) {
    D && zt(e, "stack", { value: "" }), un(e, $n);
  }
}
i(cs, "infinite_loop_guard");
let ut = null;
function ia(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (wt | Oe)) === 0 && An(r) && (ut = /* @__PURE__ */ new Set(), En(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ni(r) : r.fn = null), ut?.size > 0)) {
        xt.clear();
        for (const a of ut) {
          if ((a.f & (wt | Oe)) !== 0) continue;
          const s = [a];
          let o = a.parent;
          for (; o !== null; )
            ut.has(o) && (ut.delete(o), s.push(o)), o = o.parent;
          for (let c = s.length - 1; c >= 0; c--) {
            const u = s[c];
            (u.f & (wt | Oe)) === 0 && En(u);
          }
        }
        ut.clear();
      }
    }
    ut = null;
  }
}
i(ia, "flush_queued_effects");
function ja(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const s = a.f;
      (s & ge) !== 0 ? ja(
        /** @type {Derived} */
        a,
        t,
        n,
        r
      ) : (s & (Jn | ht)) !== 0 && (s & pe) === 0 && za(a, t, r) && (de(a, pe), Ve(
        /** @type {Effect} */
        a
      ));
    }
}
i(ja, "mark_effects");
function za(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (jt.call(t, a))
        return !0;
      if ((a.f & ge) !== 0 && za(
        /** @type {Derived} */
        a,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
i(za, "depends_on");
function Ve(e) {
  for (var t = $n = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (kr && t === $ && (n & ht) !== 0 && (n & xa) === 0)
      return;
    if ((n & (qt | $e)) !== 0) {
      if ((n & _e) === 0) return;
      t.f ^= _e;
    }
  }
  xe.push(t);
}
i(Ve, "schedule_effect");
function Ua(e, t) {
  if (!((e.f & $e) !== 0 && (e.f & _e) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & Xe) !== 0 && t.m.push(e), de(e, _e);
    for (var n = e.first; n !== null; )
      Ua(n, t), n = n.next;
  }
}
i(Ua, "reset_branch");
function Ba(e) {
  let t = 0, n = Ut(0), r;
  return D && tt(n, "createSubscriber version"), () => {
    Gr() && (l(n), Xa(() => (t === 0 && (r = vi(() => e(() => Sn(n)))), t += 1, () => {
      kt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Sn(n));
      });
    })));
  };
}
i(Ba, "createSubscriber");
var us = ln | _n | Fr;
function fs(e, t, n) {
  new Nr(e, t, n);
}
i(fs, "boundary");
var He, Rr, rt, Lt, at, je, Ee, it, vt, gt, Ot, pt, an, Pt, sn, on, st, Kn, he, ds, vs, Cr, Fn, Hn, Tr;
const Zr = class Zr {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    B(this, he);
    /** @type {Boundary | null} */
    Re(this, "parent");
    Re(this, "is_pending", !1);
    /** @type {TemplateNode} */
    B(this, He);
    /** @type {TemplateNode | null} */
    B(this, Rr, null);
    /** @type {BoundaryProps} */
    B(this, rt);
    /** @type {((anchor: Node) => void)} */
    B(this, Lt);
    /** @type {Effect} */
    B(this, at);
    /** @type {Effect | null} */
    B(this, je, null);
    /** @type {Effect | null} */
    B(this, Ee, null);
    /** @type {Effect | null} */
    B(this, it, null);
    /** @type {DocumentFragment | null} */
    B(this, vt, null);
    /** @type {TemplateNode | null} */
    B(this, gt, null);
    B(this, Ot, 0);
    B(this, pt, 0);
    B(this, an, !1);
    B(this, Pt, !1);
    /** @type {Set<Effect>} */
    B(this, sn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    B(this, on, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    B(this, st, null);
    B(this, Kn, Ba(() => (q(this, st, Ut(m(this, Ot))), D && tt(m(this, st), "$effect.pending()"), () => {
      q(this, st, null);
    })));
    q(this, He, t), q(this, rt, n), q(this, Lt, r), this.parent = /** @type {Effect} */
    $.b, this.is_pending = !!m(this, rt).pending, q(this, at, Kr(() => {
      $.b = this;
      {
        var a = ye(this, he, Cr).call(this);
        try {
          q(this, je, ze(() => r(a)));
        } catch (s) {
          this.error(s);
        }
        m(this, pt) > 0 ? ye(this, he, Hn).call(this) : this.is_pending = !1;
      }
      return () => {
        m(this, gt)?.remove();
      };
    }, us));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ra(t, m(this, sn), m(this, on));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!m(this, rt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ye(this, he, Tr).call(this, t), q(this, Ot, m(this, Ot) + t), !(!m(this, st) || m(this, an)) && (q(this, an, !0), kt(() => {
      q(this, an, !1), m(this, st) && dn(m(this, st), m(this, Ot));
    }));
  }
  get_effect_pending() {
    return m(this, Kn).call(this), l(
      /** @type {Source<number>} */
      m(this, st)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = m(this, rt).onerror;
    let r = m(this, rt).failed;
    if (m(this, Pt) || !n && !r)
      throw t;
    m(this, je) && (Ce(m(this, je)), q(this, je, null)), m(this, Ee) && (Ce(m(this, Ee)), q(this, Ee, null)), m(this, it) && (Ce(m(this, it)), q(this, it, null));
    var a = !1, s = !1;
    const o = /* @__PURE__ */ i(() => {
      if (a) {
        $i();
        return;
      }
      a = !0, s && Ji(), Et.ensure(), q(this, Ot, 0), m(this, it) !== null && Ft(m(this, it), () => {
        q(this, it, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, je, ye(this, he, Fn).call(this, () => (q(this, Pt, !1), ze(() => m(this, Lt).call(this, m(this, He)))))), m(this, pt) > 0 ? ye(this, he, Hn).call(this) : this.is_pending = !1;
    }, "reset");
    kt(() => {
      try {
        s = !0, n?.(t, o), s = !1;
      } catch (c) {
        un(c, m(this, at) && m(this, at).parent);
      }
      r && q(this, it, ye(this, he, Fn).call(this, () => {
        Et.ensure(), q(this, Pt, !0);
        try {
          return ze(() => {
            r(
              m(this, He),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return un(
            c,
            /** @type {Effect} */
            m(this, at).parent
          ), null;
        } finally {
          q(this, Pt, !1);
        }
      }));
    });
  }
};
He = new WeakMap(), Rr = new WeakMap(), rt = new WeakMap(), Lt = new WeakMap(), at = new WeakMap(), je = new WeakMap(), Ee = new WeakMap(), it = new WeakMap(), vt = new WeakMap(), gt = new WeakMap(), Ot = new WeakMap(), pt = new WeakMap(), an = new WeakMap(), Pt = new WeakMap(), sn = new WeakMap(), on = new WeakMap(), st = new WeakMap(), Kn = new WeakMap(), he = new WeakSet(), ds = /* @__PURE__ */ i(function() {
  try {
    q(this, je, ze(() => m(this, Lt).call(this, m(this, He))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), vs = /* @__PURE__ */ i(function() {
  const t = m(this, rt).pending;
  t && (q(this, Ee, ze(() => t(m(this, He)))), kt(() => {
    var n = ye(this, he, Cr).call(this);
    q(this, je, ye(this, he, Fn).call(this, () => (Et.ensure(), ze(() => m(this, Lt).call(this, n))))), m(this, pt) > 0 ? ye(this, he, Hn).call(this) : (Ft(
      /** @type {Effect} */
      m(this, Ee),
      () => {
        q(this, Ee, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Cr = /* @__PURE__ */ i(function() {
  var t = m(this, He);
  return this.is_pending && (q(this, gt, Nt()), m(this, He).before(m(this, gt)), t = m(this, gt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Fn = /* @__PURE__ */ i(function(t) {
  var n = $, r = Q, a = me;
  Je(m(this, at)), qe(m(this, at)), cn(m(this, at).ctx);
  try {
    return t();
  } catch (s) {
    return La(s), null;
  } finally {
    Je(n), qe(r), cn(a);
  }
}, "#run"), Hn = /* @__PURE__ */ i(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    m(this, rt).pending
  );
  m(this, je) !== null && (q(this, vt, document.createDocumentFragment()), m(this, vt).append(
    /** @type {TemplateNode} */
    m(this, gt)
  ), ii(m(this, je), m(this, vt))), m(this, Ee) === null && q(this, Ee, ze(() => t(m(this, He))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Tr = /* @__PURE__ */ i(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ye(n = this.parent, he, Tr).call(n, t);
    return;
  }
  if (q(this, pt, m(this, pt) + t), m(this, pt) === 0) {
    this.is_pending = !1;
    for (const r of m(this, sn))
      de(r, pe), Ve(r);
    for (const r of m(this, on))
      de(r, Xe), Ve(r);
    m(this, sn).clear(), m(this, on).clear(), m(this, Ee) && Ft(m(this, Ee), () => {
      q(this, Ee, null);
    }), m(this, vt) && (m(this, He).before(m(this, vt)), q(this, vt, null));
  }
}, "#update_pending_count"), i(Zr, "Boundary");
let Nr = Zr;
function _s(e, t, n, r) {
  const a = zr;
  var s = e.filter((v) => !v.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(a));
    return;
  }
  var o = ae, c = (
    /** @type {Effect} */
    $
  ), u = hs(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function d(v) {
    u();
    try {
      r(v);
    } catch (y) {
      (c.f & wt) === 0 && un(y, c);
    }
    o?.deactivate(), Ir();
  }
  if (i(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(a)));
    return;
  }
  function _() {
    u(), Promise.all(n.map((v) => /* @__PURE__ */ ms(v))).then((v) => d([...t.map(a), ...v])).catch((v) => un(v, c));
  }
  i(_, "run"), f ? f.then(_) : _();
}
i(_s, "flatten");
function hs() {
  var e = $, t = Q, n = me, r = ae;
  if (D)
    var a = kn;
  return /* @__PURE__ */ i(function(o = !0) {
    Je(e), qe(t), cn(n), o && r?.activate(), D && Un(a);
  }, "restore");
}
i(hs, "capture");
function Ir() {
  Je(null), qe(null), cn(null), D && Un(null);
}
i(Ir, "unset_context");
const bs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function zr(e) {
  var t = ge | pe, n = Q !== null && (Q.f & ge) !== 0 ? (
    /** @type {Derived} */
    Q
  ) : null;
  return $ !== null && ($.f |= _n), {
    ctx: me,
    deps: null,
    effects: null,
    equals: Ta,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      be
    ),
    wv: 0,
    parent: n ?? $,
    ac: null
  };
}
i(zr, "derived");
// @__NO_SIDE_EFFECTS__
function ms(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    $
  );
  r === null && ji();
  var a = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Ut(
    /** @type {V} */
    be
  );
  D && (o.label = t);
  var c = !Q, u = /* @__PURE__ */ new Map();
  return Ls(() => {
    var f = Sa();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === ae && d.committed && d.deactivate(), Ir();
      });
    } catch (y) {
      f.reject(y), Ir();
    }
    var d = (
      /** @type {Batch} */
      ae
    );
    if (c) {
      var _ = a.is_rendered();
      a.update_pending_count(1), d.increment(_), u.get(d)?.reject(Yt), u.delete(d), u.set(d, f);
    }
    const v = /* @__PURE__ */ i((y, w = void 0) => {
      if (d.activate(), w)
        w !== Yt && (o.f |= St, dn(o, w));
      else {
        (o.f & St) !== 0 && (o.f ^= St), dn(o, y);
        for (const [I, g] of u) {
          if (u.delete(I), I === d) break;
          g.reject(Yt);
        }
      }
      c && (a.update_pending_count(-1), d.decrement(_));
    }, "handler");
    f.promise.then(v, (y) => v(null, y || "unknown"));
  }), Ja(() => {
    for (const f of u.values())
      f.reject(Yt);
  }), D && (o.f |= Jn), new Promise((f) => {
    function d(_) {
      function v() {
        _ === s ? f(o) : d(s);
      }
      i(v, "go"), _.then(v, v);
    }
    i(d, "next"), d(s);
  });
}
i(ms, "async_derived");
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = /* @__PURE__ */ zr(e);
  return si(t), t;
}
i(H, "user_derived");
// @__NO_SIDE_EFFECTS__
function gs(e) {
  const t = /* @__PURE__ */ zr(e);
  return t.equals = Wa, t;
}
i(gs, "derived_safe_equal");
function Wr(e) {
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
i(Wr, "destroy_derived_effects");
let vr = [];
function ps(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ge) === 0)
      return (t.f & wt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
i(ps, "get_derived_parent_effect");
function Ur(e) {
  var t, n = $;
  if (Je(ps(e)), D) {
    let r = fn;
    sa(/* @__PURE__ */ new Set());
    try {
      jt.call(vr, e) && zi(), vr.push(e), e.f &= ~Ct, Wr(e), t = Ar(e);
    } finally {
      Je(n), sa(r), vr.pop();
    }
  } else
    try {
      e.f &= ~Ct, Wr(e), t = Ar(e);
    } finally {
      Je(n);
    }
  return t;
}
i(Ur, "execute_derived");
function qa(e) {
  var t = Ur(e);
  if (!e.equals(t) && (e.wv = li(), (!ae?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, _e);
    return;
  }
  Bt || (Ke !== null ? (Gr() || ae?.is_fork) && Ke.set(e, t) : jr(e));
}
i(qa, "update_derived");
let fn = /* @__PURE__ */ new Set();
const xt = /* @__PURE__ */ new Map();
function sa(e) {
  fn = e;
}
i(sa, "set_eager_effects");
let Br = !1;
function ys() {
  Br = !0;
}
i(ys, "set_eager_effects_deferred");
function Ut(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ta,
    rv: 0,
    wv: 0
  };
  return n;
}
i(Ut, "source");
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  const n = Ut(e);
  return si(n), n;
}
i(De, "state");
// @__NO_SIDE_EFFECTS__
function ws(e, t = !1, n = !0) {
  const r = Ut(e);
  return t || (r.equals = Wa), r;
}
i(ws, "mutable_source");
function Le(e, t, n = !1) {
  Q !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ye || (Q.f & zn) !== 0) && Ma() && (Q.f & (ge | ht | Jn | zn)) !== 0 && (Be === null || !jt.call(Be, e)) && Zi();
  let r = n ? Zt(t) : t;
  return D && Aa(
    r,
    /** @type {string} */
    e.label
  ), dn(e, r);
}
i(Le, "set");
function dn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Bt ? xt.set(e, t) : xt.set(e, n), e.v = t;
    var r = Et.ensure();
    if (r.capture(e, n), D) {
      if ($ !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const a = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: a }), a > 5) {
          const s = ts("updated at");
          if (s !== null) {
            let o = e.updated.get(s.stack);
            o || (o = { error: s, count: 0 }, e.updated.set(s.stack, o)), o.count++;
          }
        }
      }
      $ !== null && (e.set_during_effect = !0);
    }
    if ((e.f & ge) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && Ur(a), jr(a);
    }
    e.wv = li(), Ka(e, pe), $ !== null && ($.f & _e) !== 0 && ($.f & ($e | qt)) === 0 && (Fe === null ? Ps([e]) : Fe.push(e)), !r.is_fork && fn.size > 0 && !Br && Ga();
  }
  return t;
}
i(dn, "internal_set");
function Ga() {
  Br = !1;
  for (const e of fn)
    (e.f & _e) !== 0 && de(e, Xe), An(e) && En(e);
  fn.clear();
}
i(Ga, "flush_eager_effects");
function Sn(e) {
  Le(e, e.v + 1);
}
i(Sn, "increment");
function Ka(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, a = 0; a < r; a++) {
      var s = n[a], o = s.f;
      if (D && (o & zn) !== 0) {
        fn.add(s);
        continue;
      }
      var c = (o & pe) === 0;
      if (c && de(s, t), (o & ge) !== 0) {
        var u = (
          /** @type {Derived} */
          s
        );
        Ke?.delete(u), (o & Ct) === 0 && (o & Ue && (s.f |= Ct), Ka(u, Xe));
      } else c && ((o & ht) !== 0 && ut !== null && ut.add(
        /** @type {Effect} */
        s
      ), Ve(
        /** @type {Effect} */
        s
      ));
    }
}
i(Ka, "mark_reactions");
const Ss = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Zt(e) {
  if (typeof e != "object" || e === null || Xt in e)
    return e;
  const t = wa(e);
  if (t !== Li && t !== Oi)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ya(e), a = /* @__PURE__ */ De(0), s = Ht, o = /* @__PURE__ */ i((d) => {
    if (Ht === s)
      return d();
    var _ = Q, v = Ht;
    qe(null), ua(s);
    var y = d();
    return qe(_), ua(v), y;
  }, "with_parent");
  r && (n.set("length", /* @__PURE__ */ De(
    /** @type {any[]} */
    e.length
  )), D && (e = /** @type {any} */
  Es(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let u = !1;
  function f(d) {
    if (!u) {
      u = !0, c = d, tt(a, `${c} version`);
      for (const [_, v] of n)
        tt(v, It(c, _));
      u = !1;
    }
  }
  return i(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, _, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Vi();
        var y = n.get(_);
        return y === void 0 ? y = o(() => {
          var w = /* @__PURE__ */ De(v.value);
          return n.set(_, w), D && typeof _ == "string" && tt(w, It(c, _)), w;
        }) : Le(y, v.value, !0), !0;
      },
      deleteProperty(d, _) {
        var v = n.get(_);
        if (v === void 0) {
          if (_ in d) {
            const y = o(() => /* @__PURE__ */ De(be));
            n.set(_, y), Sn(a), D && tt(y, It(c, _));
          }
        } else
          Le(v, be), Sn(a);
        return !0;
      },
      get(d, _, v) {
        if (_ === Xt)
          return e;
        if (D && _ === Na)
          return f;
        var y = n.get(_), w = _ in d;
        if (y === void 0 && (!w || Qt(d, _)?.writable) && (y = o(() => {
          var g = Zt(w ? d[_] : be), A = /* @__PURE__ */ De(g);
          return D && tt(A, It(c, _)), A;
        }), n.set(_, y)), y !== void 0) {
          var I = l(y);
          return I === be ? void 0 : I;
        }
        return Reflect.get(d, _, v);
      },
      getOwnPropertyDescriptor(d, _) {
        var v = Reflect.getOwnPropertyDescriptor(d, _);
        if (v && "value" in v) {
          var y = n.get(_);
          y && (v.value = l(y));
        } else if (v === void 0) {
          var w = n.get(_), I = w?.v;
          if (w !== void 0 && I !== be)
            return {
              enumerable: !0,
              configurable: !0,
              value: I,
              writable: !0
            };
        }
        return v;
      },
      has(d, _) {
        if (_ === Xt)
          return !0;
        var v = n.get(_), y = v !== void 0 && v.v !== be || Reflect.has(d, _);
        if (v !== void 0 || $ !== null && (!y || Qt(d, _)?.writable)) {
          v === void 0 && (v = o(() => {
            var I = y ? Zt(d[_]) : be, g = /* @__PURE__ */ De(I);
            return D && tt(g, It(c, _)), g;
          }), n.set(_, v));
          var w = l(v);
          if (w === be)
            return !1;
        }
        return y;
      },
      set(d, _, v, y) {
        var w = n.get(_), I = _ in d;
        if (r && _ === "length")
          for (var g = v; g < /** @type {Source<number>} */
          w.v; g += 1) {
            var A = n.get(g + "");
            A !== void 0 ? Le(A, be) : g in d && (A = o(() => /* @__PURE__ */ De(be)), n.set(g + "", A), D && tt(A, It(c, g)));
          }
        if (w === void 0)
          (!I || Qt(d, _)?.writable) && (w = o(() => /* @__PURE__ */ De(void 0)), D && tt(w, It(c, _)), Le(w, Zt(v)), n.set(_, w));
        else {
          I = w.v !== be;
          var K = o(() => Zt(v));
          Le(w, K);
        }
        var S = Reflect.getOwnPropertyDescriptor(d, _);
        if (S?.set && S.set.call(y, v), !I) {
          if (r && typeof _ == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(_);
            Number.isInteger(O) && O >= T.v && Le(T, O + 1);
          }
          Sn(a);
        }
        return !0;
      },
      ownKeys(d) {
        l(a);
        var _ = Reflect.ownKeys(d).filter((w) => {
          var I = n.get(w);
          return I === void 0 || I.v !== be;
        });
        for (var [v, y] of n)
          y.v !== be && !(v in d) && _.push(v);
        return _;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
i(Zt, "proxy");
function It(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Ss.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
i(It, "get_label");
function _r(e) {
  try {
    if (e !== null && typeof e == "object" && Xt in e)
      return e[Xt];
  } catch {
  }
  return e;
}
i(_r, "get_proxied_value");
const ks = /* @__PURE__ */ new Set([
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
function Es(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var a = Reflect.get(t, n, r);
      return ks.has(
        /** @type {string} */
        n
      ) ? function(...s) {
        ys();
        var o = a.apply(this, s);
        return Ga(), o;
      } : a;
    }
  });
}
i(Es, "inspectable_array");
function xs() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: a } = e;
  e.indexOf = function(s, o) {
    const c = n.call(this, s, o);
    if (c === -1) {
      for (let u = o ?? 0; u < this.length; u += 1)
        if (_r(this[u]) === s) {
          dr("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(s, o) {
    const c = r.call(this, s, o ?? this.length - 1);
    if (c === -1) {
      for (let u = 0; u <= (o ?? this.length - 1); u += 1)
        if (_r(this[u]) === s) {
          dr("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(s, o) {
    const c = a.call(this, s, o);
    if (!c) {
      for (let u = 0; u < this.length; u += 1)
        if (_r(this[u]) === s) {
          dr("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = a;
  };
}
i(xs, "init_array_prototype_warnings");
var oa, qr, Va, Ya;
function Ns() {
  if (oa === void 0) {
    oa = window, qr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Va = Qt(t, "firstChild").get, Ya = Qt(t, "nextSibling").get, na(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), na(n) && (n.__t = void 0), D && (e.__svelte_meta = null, xs());
  }
}
i(Ns, "init_operations");
function Nt(e = "") {
  return document.createTextNode(e);
}
i(Nt, "create_text");
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Va.call(e)
  );
}
i(yt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ya.call(e)
  );
}
i(Wn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ yt(e);
}
i(h, "child");
function lt(e, t = !1) {
  {
    var n = /* @__PURE__ */ yt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Wn(n) : n;
  }
}
i(lt, "first_child");
function b(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Wn(r);
  return r;
}
i(b, "sibling");
function Cs(e) {
  e.textContent = "";
}
i(Cs, "clear_text_content");
function Za() {
  return !1;
}
i(Za, "should_defer_append");
let la = !1;
function Ts() {
  la || (la = !0, document.addEventListener(
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
i(Ts, "add_form_reset_listener");
function er(e) {
  var t = Q, n = $;
  qe(null), Je(null);
  try {
    return e();
  } finally {
    qe(t), Je(n);
  }
}
i(er, "without_reactive_context");
function Is(e, t, n, r = n) {
  e.addEventListener(t, () => er(n));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), r(!0);
  } : e.__on_r = () => r(!0), Ts();
}
i(Is, "listen_to_event_and_reset_event");
function Ws(e) {
  $ === null && (Q === null && qi(e), Bi()), Bt && Ui(e);
}
i(Ws, "validate_effect");
function As(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
i(As, "push_effect");
function Tt(e, t, n) {
  var r = $;
  if (D)
    for (; r !== null && (r.f & zn) !== 0; )
      r = r.parent;
  r !== null && (r.f & Oe) !== 0 && (e |= Oe);
  var a = {
    ctx: me,
    deps: null,
    nodes: null,
    f: e | pe | Ue,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (D && (a.component_function = In), n)
    try {
      En(a), a.f |= Hr;
    } catch (c) {
      throw Ce(a), c;
    }
  else t !== null && Ve(a);
  var s = a;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & _n) === 0 && (s = s.first, (e & ht) !== 0 && (e & ln) !== 0 && s !== null && (s.f |= ln)), s !== null && (s.parent = r, r !== null && As(s, r), Q !== null && (Q.f & ge) !== 0 && (e & qt) === 0)) {
    var o = (
      /** @type {Derived} */
      Q
    );
    (o.effects ??= []).push(s);
  }
  return a;
}
i(Tt, "create_effect");
function Gr() {
  return Q !== null && !Ye;
}
i(Gr, "effect_tracking");
function Ja(e) {
  const t = Tt(Zn, null, !1);
  return de(t, _e), t.teardown = e, t;
}
i(Ja, "teardown");
function Ms(e) {
  Ws("$effect"), D && zt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    $.f
  ), n = !Q && (t & $e) !== 0 && (t & Hr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      me
    );
    (r.e ??= []).push(e);
  } else
    return Qa(e);
}
i(Ms, "user_effect");
function Qa(e) {
  return Tt(pr | Ri, e, !1);
}
i(Qa, "create_user_effect");
function Ds(e) {
  Et.ensure();
  const t = Tt(qt | _n, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ft(t, () => {
      Ce(t), r(void 0);
    }) : (Ce(t), r(void 0));
  });
}
i(Ds, "component_root");
function Ls(e) {
  return Tt(Jn | _n, e, !0);
}
i(Ls, "async_effect");
function Xa(e, t = 0) {
  return Tt(Zn | t, e, !0);
}
i(Xa, "render_effect");
function z(e, t = [], n = [], r = []) {
  _s(r, t, n, (a) => {
    Tt(Zn, () => e(...a.map(l)), !0);
  });
}
i(z, "template_effect");
function Kr(e, t = 0) {
  var n = Tt(ht | t, e, !0);
  return D && (n.dev_stack = kn), n;
}
i(Kr, "block");
function ze(e) {
  return Tt($e | _n, e, !0);
}
i(ze, "branch");
function $a(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Bt, r = Q;
    ca(!0), qe(null);
    try {
      t.call(null);
    } finally {
      ca(n), qe(r);
    }
  }
}
i($a, "execute_effect_teardown");
function ei(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && er(() => {
      a.abort(Yt);
    });
    var r = n.next;
    (n.f & qt) !== 0 ? n.parent = null : Ce(n, t), n = r;
  }
}
i(ei, "destroy_effect_children");
function Os(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & $e) === 0 && Ce(t), t = n;
  }
}
i(Os, "destroy_block_effect_children");
function Ce(e, t = !0) {
  var n = !1;
  (t || (e.f & xa) !== 0) && e.nodes !== null && e.nodes.end !== null && (ti(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), ei(e, t && !n), Bn(e, 0), de(e, wt);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  $a(e);
  var a = e.parent;
  a !== null && a.first !== null && ni(e), D && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
i(Ce, "destroy_effect");
function ti(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Wn(e);
    e.remove(), e = n;
  }
}
i(ti, "remove_effect_dom");
function ni(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
i(ni, "unlink_effect");
function Ft(e, t, n = !0) {
  var r = [];
  ri(e, r, !0);
  var a = /* @__PURE__ */ i(() => {
    n && Ce(e), t && t();
  }, "fn"), s = r.length;
  if (s > 0) {
    var o = /* @__PURE__ */ i(() => --s || a(), "check");
    for (var c of r)
      c.out(o);
  } else
    a();
}
i(Ft, "pause_effect");
function ri(e, t, n) {
  if ((e.f & Oe) === 0) {
    e.f ^= Oe;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const c of r)
        (c.is_global || n) && t.push(c);
    for (var a = e.first; a !== null; ) {
      var s = a.next, o = (a.f & ln) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (a.f & $e) !== 0 && (e.f & ht) !== 0;
      ri(a, t, o ? n : !1), a = s;
    }
  }
}
i(ri, "pause_children");
function Vr(e) {
  ai(e, !0);
}
i(Vr, "resume_effect");
function ai(e, t) {
  if ((e.f & Oe) !== 0) {
    e.f ^= Oe, (e.f & _e) === 0 && (de(e, pe), Ve(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & ln) !== 0 || (n.f & $e) !== 0;
      ai(n, a ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
i(ai, "resume_children");
function ii(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var a = n === r ? null : /* @__PURE__ */ Wn(n);
      t.append(n), n = a;
    }
}
i(ii, "move_effect");
let jn = !1, Bt = !1;
function ca(e) {
  Bt = e;
}
i(ca, "set_is_destroying_effect");
let Q = null, Ye = !1;
function qe(e) {
  Q = e;
}
i(qe, "set_active_reaction");
let $ = null;
function Je(e) {
  $ = e;
}
i(Je, "set_active_effect");
let Be = null;
function si(e) {
  Q !== null && (Be === null ? Be = [e] : Be.push(e));
}
i(si, "push_reaction_value");
let Ne = null, Ae = 0, Fe = null;
function Ps(e) {
  Fe = e;
}
i(Ps, "set_untracked_writes");
let oi = 1, At = 0, Ht = At;
function ua(e) {
  Ht = e;
}
i(ua, "set_update_version");
function li() {
  return ++oi;
}
i(li, "increment_write_version");
function An(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & ge && (e.f &= ~Ct), (t & Xe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, a = 0; a < r; a++) {
      var s = n[a];
      if (An(
        /** @type {Derived} */
        s
      ) && qa(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && de(e, _e);
  }
  return !1;
}
i(An, "is_dirty");
function ci(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Be !== null && jt.call(Be, e)))
    for (var a = 0; a < r.length; a++) {
      var s = r[a];
      (s.f & ge) !== 0 ? ci(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? de(s, pe) : (s.f & _e) !== 0 && de(s, Xe), Ve(
        /** @type {Effect} */
        s
      ));
    }
}
i(ci, "schedule_possible_effect_self_invalidation");
function Ar(e) {
  var t = Ne, n = Ae, r = Fe, a = Q, s = Be, o = me, c = Ye, u = Ht, f = e.f;
  Ne = /** @type {null | Value[]} */
  null, Ae = 0, Fe = null, Q = (f & ($e | qt)) === 0 ? e : null, Be = null, cn(e.ctx), Ye = !1, Ht = ++At, e.ac !== null && (er(() => {
    e.ac.abort(Yt);
  }), e.ac = null);
  try {
    e.f |= yr;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d(), v = e.deps, y = ae?.is_fork;
    if (Ne !== null) {
      var w;
      if (y || Bn(e, Ae), v !== null && Ae > 0)
        for (v.length = Ae + Ne.length, w = 0; w < Ne.length; w++)
          v[Ae + w] = Ne[w];
      else
        e.deps = v = Ne;
      if (Gr() && (e.f & Ue) !== 0)
        for (w = Ae; w < v.length; w++)
          (v[w].reactions ??= []).push(e);
    } else !y && v !== null && Ae < v.length && (Bn(e, Ae), v.length = Ae);
    if (Ma() && Fe !== null && !Ye && v !== null && (e.f & (ge | Xe | pe)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Fe.length; w++)
        ci(
          Fe[w],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (At++, a.deps !== null)
        for (let I = 0; I < n; I += 1)
          a.deps[I].rv = At;
      if (t !== null)
        for (const I of t)
          I.rv = At;
      Fe !== null && (r === null ? r = Fe : r.push(.../** @type {Source[]} */
      Fe));
    }
    return (e.f & St) !== 0 && (e.f ^= St), _;
  } catch (I) {
    return La(I);
  } finally {
    e.f ^= yr, Ne = t, Ae = n, Fe = r, Q = a, Be = s, cn(o), Ye = c, Ht = u;
  }
}
i(Ar, "update_reaction");
function Rs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Mi.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  if (n === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !jt.call(Ne, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ue) !== 0 && (s.f ^= Ue, s.f &= ~Ct), jr(s), Wr(s), Bn(s, 0);
  }
}
i(Rs, "remove_reaction");
function Bn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Rs(e, n[r]);
}
i(Bn, "remove_reactions");
function En(e) {
  var t = e.f;
  if ((t & wt) === 0) {
    de(e, _e);
    var n = $, r = jn;
    if ($ = e, jn = !0, D) {
      var a = In;
      aa(e.component_function);
      var s = (
        /** @type {any} */
        kn
      );
      Un(e.dev_stack ?? kn);
    }
    try {
      (t & (ht | Ea)) !== 0 ? Os(e) : ei(e), $a(e);
      var o = Ar(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = oi;
      var c;
      D && es && (e.f & pe) !== 0 && e.deps;
    } finally {
      jn = r, $ = n, D && (aa(a), Un(s));
    }
  }
}
i(En, "update_effect");
async function Fs() {
  await Promise.resolve(), ls();
}
i(Fs, "tick");
function l(e) {
  var t = e.f, n = (t & ge) !== 0;
  if (Q !== null && !Ye) {
    var r = $ !== null && ($.f & wt) !== 0;
    if (!r && (Be === null || !jt.call(Be, e))) {
      var a = Q.deps;
      if ((Q.f & yr) !== 0)
        e.rv < At && (e.rv = At, Ne === null && a !== null && a[Ae] === e ? Ae++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        (Q.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [Q] : jt.call(s, Q) || s.push(Q);
      }
    }
  }
  if (D && bs.delete(e), Bt && xt.has(e))
    return xt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Bt) {
      var c = o.v;
      return ((o.f & _e) === 0 && o.reactions !== null || di(o)) && (c = Ur(o)), xt.set(o, c), c;
    }
    var u = (o.f & Ue) === 0 && !Ye && Q !== null && (jn || (Q.f & Ue) !== 0), f = o.deps === null;
    An(o) && (u && (o.f |= Ue), qa(o)), u && !f && fi(o);
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if ((e.f & St) !== 0)
    throw e.v;
  return e.v;
}
i(l, "get");
function fi(e) {
  if (e.deps !== null) {
    e.f |= Ue;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ge) !== 0 && (t.f & Ue) === 0 && fi(
        /** @type {Derived} */
        t
      );
  }
}
i(fi, "reconnect");
function di(e) {
  if (e.v === be) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (xt.has(t) || (t.f & ge) !== 0 && di(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
i(di, "depends_on_old_values");
function vi(e) {
  var t = Ye;
  try {
    return Ye = !0, e();
  } finally {
    Ye = t;
  }
}
i(vi, "untrack");
const _i = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Set();
function Hs(e, t, n, r = {}) {
  function a(s) {
    if (r.capture || pn.call(t, s), !s.cancelBubble)
      return er(() => n?.call(this, s));
  }
  return i(a, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? kt(() => {
    t.addEventListener(e, a, r);
  }) : t.addEventListener(e, a, r), a;
}
i(Hs, "create_event");
function ft(e, t, n, r, a) {
  var s = { capture: r, passive: a }, o = Hs(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ja(() => {
    t.removeEventListener(e, o, s);
  });
}
i(ft, "event");
function We(e) {
  for (var t = 0; t < e.length; t++)
    _i.add(e[t]);
  for (var n of Mr)
    n(e);
}
i(We, "delegate");
let fa = null;
function pn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, a = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  fa = e;
  var o = 0, c = fa === e && e.__root;
  if (c) {
    var u = a.indexOf(c);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = a.indexOf(t);
    if (f === -1)
      return;
    u <= f && (o = u);
  }
  if (s = /** @type {Element} */
  a[o] || e.target, s !== t) {
    zt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = Q, _ = $;
    qe(null), Je(null);
    try {
      for (var v, y = []; s !== null; ) {
        var w = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var I = s["__" + r];
          I != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && I.call(s, e);
        } catch (g) {
          v ? y.push(g) : v = g;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        s = w;
      }
      if (v) {
        for (let g of y)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(d), Je(_);
    }
  }
}
i(pn, "handle_event_propagation");
function hi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
i(hi, "create_fragment_from_html");
function qn(e, t) {
  var n = (
    /** @type {Effect} */
    $
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
i(qn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, a, s = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = hi(s ? e : "<!>" + e), n || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ yt(a)));
    var o = (
      /** @type {TemplateNode} */
      r || qr ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      qn(c, u);
    } else
      qn(o, o);
    return o;
  };
}
i(P, "from_html");
function hr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Nt();
  return e.append(t, n), qn(t, n), e;
}
i(hr, "comment");
function L(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
i(L, "append");
const js = ["touchstart", "touchmove"];
function zs(e) {
  return js.includes(e);
}
i(zs, "is_passive_event");
function M(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
i(M, "set_text");
function Us(e, t) {
  return Bs(e, t);
}
i(Us, "mount");
const Kt = /* @__PURE__ */ new Map();
function Bs(e, { target: t, anchor: n, props: r = {}, events: a, context: s, intro: o = !0 }) {
  Ns();
  var c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ i((_) => {
    for (var v = 0; v < _.length; v++) {
      var y = _[v];
      if (!c.has(y)) {
        c.add(y);
        var w = zs(y);
        t.addEventListener(y, pn, { passive: w });
        var I = Kt.get(y);
        I === void 0 ? (document.addEventListener(y, pn, { passive: w }), Kt.set(y, 1)) : Kt.set(y, I + 1);
      }
    }
  }, "event_handle");
  u(Yn(_i)), Mr.add(u);
  var f = void 0, d = Ds(() => {
    var _ = n ?? t.appendChild(Nt());
    return fs(
      /** @type {TemplateNode} */
      _,
      {
        pending: /* @__PURE__ */ i(() => {
        }, "pending")
      },
      (v) => {
        we({});
        var y = (
          /** @type {ComponentContext} */
          me
        );
        s && (y.c = s), a && (r.$$events = a), f = e(v, r) || {}, Se();
      }
    ), () => {
      for (var v of c) {
        t.removeEventListener(v, pn);
        var y = (
          /** @type {number} */
          Kt.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, pn), Kt.delete(v)) : Kt.set(v, y);
      }
      Mr.delete(u), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Dr.set(f, d), f;
}
i(Bs, "_mount");
let Dr = /* @__PURE__ */ new WeakMap();
function qs(e, t) {
  const n = Dr.get(e);
  return n ? (Dr.delete(e), n(t)) : (D && (Xt in e ? Xi() : Qi()), Promise.resolve());
}
i(qs, "unmount");
var Ge, ot, Me, Rt, Cn, Tn, Vn;
const Jr = class Jr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Re(this, "anchor");
    /** @type {Map<Batch, Key>} */
    B(this, Ge, /* @__PURE__ */ new Map());
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
    B(this, ot, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    B(this, Me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    B(this, Rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    B(this, Cn, !0);
    B(this, Tn, /* @__PURE__ */ i(() => {
      var t = (
        /** @type {Batch} */
        ae
      );
      if (m(this, Ge).has(t)) {
        var n = (
          /** @type {Key} */
          m(this, Ge).get(t)
        ), r = m(this, ot).get(n);
        if (r)
          Vr(r), m(this, Rt).delete(n);
        else {
          var a = m(this, Me).get(n);
          a && (m(this, ot).set(n, a.effect), m(this, Me).delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), r = a.effect);
        }
        for (const [s, o] of m(this, Ge)) {
          if (m(this, Ge).delete(s), s === t)
            break;
          const c = m(this, Me).get(o);
          c && (Ce(c.effect), m(this, Me).delete(o));
        }
        for (const [s, o] of m(this, ot)) {
          if (s === n || m(this, Rt).has(s)) continue;
          const c = /* @__PURE__ */ i(() => {
            if (Array.from(m(this, Ge).values()).includes(s)) {
              var f = document.createDocumentFragment();
              ii(o, f), f.append(Nt()), m(this, Me).set(s, { effect: o, fragment: f });
            } else
              Ce(o);
            m(this, Rt).delete(s), m(this, ot).delete(s);
          }, "on_destroy");
          m(this, Cn) || !r ? (m(this, Rt).add(s), Ft(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    B(this, Vn, /* @__PURE__ */ i((t) => {
      m(this, Ge).delete(t);
      const n = Array.from(m(this, Ge).values());
      for (const [r, a] of m(this, Me))
        n.includes(r) || (Ce(a.effect), m(this, Me).delete(r));
    }, "#discard"));
    this.anchor = t, q(this, Cn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      ae
    ), a = Za();
    if (n && !m(this, ot).has(t) && !m(this, Me).has(t))
      if (a) {
        var s = document.createDocumentFragment(), o = Nt();
        s.append(o), m(this, Me).set(t, {
          effect: ze(() => n(o)),
          fragment: s
        });
      } else
        m(this, ot).set(
          t,
          ze(() => n(this.anchor))
        );
    if (m(this, Ge).set(r, t), a) {
      for (const [c, u] of m(this, ot))
        c === t ? r.unskip_effect(u) : r.skip_effect(u);
      for (const [c, u] of m(this, Me))
        c === t ? r.unskip_effect(u.effect) : r.skip_effect(u.effect);
      r.oncommit(m(this, Tn)), r.ondiscard(m(this, Vn));
    } else
      m(this, Tn).call(this);
  }
};
Ge = new WeakMap(), ot = new WeakMap(), Me = new WeakMap(), Rt = new WeakMap(), Cn = new WeakMap(), Tn = new WeakMap(), Vn = new WeakMap(), i(Jr, "BranchManager");
let Lr = Jr;
if (D) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ i(() => {
          if (n !== void 0)
            return n;
          Ki(t);
        }, "get"),
        set: /* @__PURE__ */ i((r) => {
          n = r;
        }, "set")
      });
    }
  };
  var xl = e;
  i(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Z(e, t, n = !1) {
  var r = new Lr(e), a = n ? ln : 0;
  function s(o, c) {
    r.ensure(o, c);
  }
  i(s, "update_branch"), Kr(() => {
    var o = !1;
    t((c, u = !0) => {
      o = !0, s(u, c);
    }), o || s(!1, null);
  }, a);
}
i(Z, "if_block");
function Te(e, t) {
  return t;
}
i(Te, "index");
function Gs(e, t, n) {
  for (var r = [], a = t.length, s, o = t.length, c = 0; c < a; c++) {
    let _ = t[c];
    Ft(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Or(Yn(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var u = r.length === 0 && n !== null;
    if (u) {
      var f = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        f.parentNode
      );
      Cs(d), d.append(f), e.items.clear();
    }
    Or(t, !u);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
i(Gs, "pause_effects");
function Or(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ce(e[n], t);
}
i(Or, "destroy_effects");
var da;
function Ie(e, t, n, r, a, s = null) {
  var o = e, c = /* @__PURE__ */ new Map(), u = (t & 4) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Nt());
  }
  var d = null, _ = /* @__PURE__ */ gs(() => {
    var A = n();
    return ya(A) ? A : A == null ? [] : Yn(A);
  }), v, y = !0;
  function w() {
    g.fallback = d, Ks(g, v, o, t, r), d !== null && (v.length === 0 ? (d.f & _t) === 0 ? Vr(d) : (d.f ^= _t, yn(d, null, o)) : Ft(d, () => {
      d = null;
    }));
  }
  i(w, "commit");
  var I = Kr(() => {
    v = /** @type {V[]} */
    l(_);
    for (var A = v.length, K = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      ae
    ), T = Za(), O = 0; O < A; O += 1) {
      var E = v[O], p = r(E, O), k = y ? null : c.get(p);
      k ? (k.v && dn(k.v, E), k.i && dn(k.i, O), T && S.unskip_effect(k.e)) : (k = Vs(
        c,
        y ? o : da ??= Nt(),
        E,
        p,
        O,
        a,
        t,
        n
      ), y || (k.e.f |= _t), c.set(p, k)), K.add(p);
    }
    if (A === 0 && s && !d && (y ? d = ze(() => s(o)) : (d = ze(() => s(da ??= Nt())), d.f |= _t)), A > K.size && (D ? Ys(v, r) : Ca("", "", "")), !y)
      if (T) {
        for (const [x, R] of c)
          K.has(x) || S.skip_effect(R.e);
        S.oncommit(w), S.ondiscard(() => {
        });
      } else
        w();
    l(_);
  }), g = { effect: I, items: c, outrogroups: null, fallback: d };
  y = !1;
}
i(Ie, "each");
function mn(e) {
  for (; e !== null && (e.f & $e) === 0; )
    e = e.next;
  return e;
}
i(mn, "skip_to_branch");
function Ks(e, t, n, r, a) {
  var s = (r & 8) !== 0, o = t.length, c = e.items, u = mn(e.effect.first), f, d = null, _, v = [], y = [], w, I, g, A;
  if (s)
    for (A = 0; A < o; A += 1)
      w = t[A], I = a(w, A), g = /** @type {EachItem} */
      c.get(I).e, (g.f & _t) === 0 && (g.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(g));
  for (A = 0; A < o; A += 1) {
    if (w = t[A], I = a(w, A), g = /** @type {EachItem} */
    c.get(I).e, e.outrogroups !== null)
      for (const R of e.outrogroups)
        R.pending.delete(g), R.done.delete(g);
    if ((g.f & _t) !== 0)
      if (g.f ^= _t, g === u)
        yn(g, null, n);
      else {
        var K = d ? d.next : u;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), mt(e, d, g), mt(e, g, K), yn(g, K, n), d = g, v = [], y = [], u = mn(d.next);
        continue;
      }
    if ((g.f & Oe) !== 0 && (Vr(g), s && (g.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(g))), g !== u) {
      if (f !== void 0 && f.has(g)) {
        if (v.length < y.length) {
          var S = y[0], T;
          d = S.prev;
          var O = v[0], E = v[v.length - 1];
          for (T = 0; T < v.length; T += 1)
            yn(v[T], S, n);
          for (T = 0; T < y.length; T += 1)
            f.delete(y[T]);
          mt(e, O.prev, E.next), mt(e, d, O), mt(e, E, S), u = S, d = E, A -= 1, v = [], y = [];
        } else
          f.delete(g), yn(g, u, n), mt(e, g.prev, g.next), mt(e, g, d === null ? e.effect.first : d.next), mt(e, d, g), d = g;
        continue;
      }
      for (v = [], y = []; u !== null && u !== g; )
        (f ??= /* @__PURE__ */ new Set()).add(u), y.push(u), u = mn(u.next);
      if (u === null)
        continue;
    }
    (g.f & _t) === 0 && v.push(g), d = g, u = mn(g.next);
  }
  if (e.outrogroups !== null) {
    for (const R of e.outrogroups)
      R.pending.size === 0 && (Or(Yn(R.done)), e.outrogroups?.delete(R));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (u !== null || f !== void 0) {
    var p = [];
    if (f !== void 0)
      for (g of f)
        (g.f & Oe) === 0 && p.push(g);
    for (; u !== null; )
      (u.f & Oe) === 0 && u !== e.fallback && p.push(u), u = mn(u.next);
    var k = p.length;
    if (k > 0) {
      var x = (r & 4) !== 0 && o === 0 ? n : null;
      if (s) {
        for (A = 0; A < k; A += 1)
          p[A].nodes?.a?.measure();
        for (A = 0; A < k; A += 1)
          p[A].nodes?.a?.fix();
      }
      Gs(e, p, x);
    }
  }
  s && kt(() => {
    if (_ !== void 0)
      for (g of _)
        g.nodes?.a?.apply();
  });
}
i(Ks, "reconcile");
function Vs(e, t, n, r, a, s, o, c) {
  var u = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ws(n, !1, !1) : Ut(n) : null, f = (o & 2) !== 0 ? Ut(a) : null;
  return D && u && (u.trace = () => {
    c()[f?.v ?? a];
  }), {
    v: u,
    i: f,
    e: ze(() => (s(t, u ?? n, f ?? a, c), () => {
      e.delete(r);
    }))
  };
}
i(Vs, "create_item");
function yn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, a = e.nodes.end, s = t && (t.f & _t) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wn(r)
      );
      if (s.before(r), r === a)
        return;
      r = o;
    }
}
i(yn, "move");
function mt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
i(mt, "link");
function Ys(e, t) {
  const n = /* @__PURE__ */ new Map(), r = e.length;
  for (let a = 0; a < r; a++) {
    const s = t(e[a], a);
    if (n.has(s)) {
      const o = String(n.get(s)), c = String(a);
      let u = String(s);
      u.startsWith("[object ") && (u = null), Ca(o, c, u);
    }
    n.set(s, a);
  }
}
i(Ys, "validate_each_keys");
function Zs(e, t, n = !1, r = !1, a = !1) {
  var s = e, o = "";
  z(() => {
    var c = (
      /** @type {Effect} */
      $
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (ti(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var u = o + "";
      n ? u = `<svg>${u}</svg>` : r && (u = `<math>${u}</math>`);
      var f = hi(u);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ yt(f)), qn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ yt(f); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ yt(f)
          );
      else
        s.before(f);
    }
  });
}
i(Zs, "html");
const va = [...` 	
\r\f \v\uFEFF`];
function Js(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var a in n)
      if (n[a])
        r = r ? r + " " + a : a;
      else if (r.length)
        for (var s = a.length, o = 0; (o = r.indexOf(a, o)) >= 0; ) {
          var c = o + s;
          (o === 0 || va.includes(r[o - 1])) && (c === r.length || va.includes(r[c])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(c + 1) : o = c;
        }
  }
  return r === "" ? null : r;
}
i(Js, "to_class");
function Qs(e, t) {
  return e == null ? null : String(e);
}
i(Qs, "to_style");
function Qe(e, t, n, r, a, s) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = Js(n, r, s);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (s && a !== s)
    for (var u in s) {
      var f = !!s[u];
      (a == null || f !== !!a[u]) && e.classList.toggle(u, f);
    }
  return s;
}
i(Qe, "set_class");
function Jt(e, t, n, r) {
  var a = e.__style;
  if (a !== t) {
    var s = Qs(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return r;
}
i(Jt, "set_style");
const Xs = /* @__PURE__ */ Symbol("is custom element"), $s = /* @__PURE__ */ Symbol("is html");
function Ze(e, t) {
  var n = bi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
i(Ze, "set_value");
function C(e, t, n, r) {
  var a = bi(e);
  a[t] !== (a[t] = n) && (t === "loading" && (e[Fi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && eo(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
i(C, "set_attribute");
function bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Xs]: e.nodeName.includes("-"),
      [$s]: e.namespaceURI === Ai
    }
  );
}
i(bi, "get_attributes");
var _a = /* @__PURE__ */ new Map();
function eo(e) {
  var t = e.getAttribute("is") || e.nodeName, n = _a.get(t);
  if (n) return n;
  _a.set(t, n = []);
  for (var r, a = e, s = Element.prototype; s !== a; ) {
    r = Di(a);
    for (var o in r)
      r[o].set && n.push(o);
    a = wa(a);
  }
  return n;
}
i(eo, "get_setters");
function mi(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Is(e, "input", async (a) => {
    D && e.type === "checkbox" && ra();
    var s = a ? e.defaultValue : e.value;
    if (s = br(e) ? mr(s) : s, n(s), ae !== null && r.add(ae), await Fs(), s !== (s = t())) {
      var o = e.selectionStart, c = e.selectionEnd, u = e.value.length;
      if (e.value = s ?? "", c !== null) {
        var f = e.value.length;
        o === c && c === u && f > u ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(c, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  vi(t) == null && e.value && (n(br(e) ? mr(e.value) : e.value), ae !== null && r.add(ae)), Xa(() => {
    D && e.type === "checkbox" && ra();
    var a = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Sr ?? ae
      );
      if (r.has(s))
        return;
    }
    br(e) && a === mr(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
i(mi, "bind_value");
function br(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
i(br, "is_numberlike_input");
function mr(e) {
  return e === "" ? null : +e;
}
i(mr, "to_number");
const Vt = [];
function to(e, t) {
  return {
    subscribe: no(e, t).subscribe
  };
}
i(to, "readable");
function no(e, t = fr) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(c) {
    if (Ia(e, c) && (e = c, n)) {
      const u = !Vt.length;
      for (const f of r)
        f[1](), Vt.push(f, e);
      if (u) {
        for (let f = 0; f < Vt.length; f += 2)
          Vt[f][0](Vt[f + 1]);
        Vt.length = 0;
      }
    }
  }
  i(a, "set");
  function s(c) {
    a(c(
      /** @type {T} */
      e
    ));
  }
  i(s, "update");
  function o(c, u = fr) {
    const f = [c, u];
    return r.add(f), r.size === 1 && (n = t(a, s) || fr), c(
      /** @type {T} */
      e
    ), () => {
      r.delete(f), r.size === 0 && n && (n(), n = null);
    };
  }
  return i(o, "subscribe"), { set: a, update: s, subscribe: o };
}
i(no, "writable");
function ro(e) {
  var n, r, a;
  const s = class s extends e {
    constructor() {
      super(...arguments);
      B(this, n, Object.values(foundry.applications.elements).reduce(
        (u, f) => {
          const d = f.tagName;
          return d && u.push(d.toUpperCase()), u;
        },
        []
      ));
      B(this, r, /* @__PURE__ */ De(Zt({})));
      B(this, a, {});
    }
    get $state() {
      return l(m(this, r));
    }
    set $state(u) {
      Le(m(this, r), u, !0);
    }
    async _renderHTML(u) {
      return u;
    }
    _replaceHTML(u, f, d) {
      Object.assign(this.$state, u.state), d.isFirstRender && q(this, a, Us(this.root, { target: f, props: { ...u, state: this.$state } }));
    }
    _onClose(u) {
      super._onClose(u), qs(m(this, a), { outro: !0 });
    }
    _onChangeForm(u, f) {
      if (super._onChangeForm(u, f), f.type !== "change") return;
      const d = this;
      if (!d.document) return;
      const _ = f.target;
      if (!_ || !m(this, n).includes(_.tagName)) return;
      const v = _._getValue();
      d.document.update({ [_.name]: v });
    }
    close(u) {
      return super.close(u);
    }
  };
  n = new WeakMap(), r = new WeakMap(), a = new WeakMap(), i(s, "SvelteApplication"), Re(s, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = s;
  return t;
}
i(ro, "SvelteApplicationMixin");
const ao = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ao);
function N(e) {
  return game.i18n?.localize(e) ?? e;
}
i(N, "localize");
function vn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
i(vn, "format");
const ha = {
  bgPrimary: "#fafafa",
  bgSecondary: "#f0f0f0",
  bgInput: "#ffffff",
  textPrimary: "#222222",
  textSecondary: "#555555",
  textLabel: "#ffffff",
  borderColor: "#333333",
  borderLight: "#888888",
  accent: "#444444",
  highlight: "#c2dbf4",
  labelBg: "#333333",
  labelText: "#ffffff",
  danger: "#b01b19",
  success: "#3b8a57",
  manaColor: "#3d7ab8"
}, io = {
  bgPrimary: "--nos-bg-primary",
  bgSecondary: "--nos-bg-secondary",
  bgInput: "--nos-bg-input",
  textPrimary: "--nos-text-primary",
  textSecondary: "--nos-text-secondary",
  textLabel: "--nos-text-label",
  borderColor: "--nos-border-color",
  borderLight: "--nos-border-light",
  accent: "--nos-accent",
  highlight: "--nos-highlight",
  labelBg: "--nos-label-bg",
  labelText: "--nos-label-text",
  danger: "--nos-danger",
  success: "--nos-success",
  manaColor: "--nos-mana-color"
}, gr = [4, 6, 8, 10, 12, 20];
function gn(e, t) {
  if (!t) return e;
  const n = gr.indexOf(e);
  return n === -1 ? e : gr[Math.min(n + t, gr.length - 1)];
}
i(gn, "incrementDieSize");
function so(e, t, n, r) {
  const a = {};
  for (const f of n) {
    const d = gn(f.system.hitDieSize, r), _ = f.system.classLevel;
    a[d] ??= { current: 0, total: 0 }, a[d].total += _, a[d].current = e[d]?.current ?? 0;
  }
  const s = n.map(
    (f) => gn(f.system.hitDieSize, r)
  );
  for (const f of t) {
    const d = gn(f.size, r);
    a[d] ??= { current: e[d]?.current ?? 0, total: 0 }, a[d].total += f.value, s.includes(d) || (a[d].current = e[d]?.current ?? 0);
  }
  const o = t.map(
    (f) => gn(f.size, r)
  );
  for (const [f, d] of Object.entries(e ?? {})) {
    const _ = gn(Number(f), r), v = d?.bonus ?? 0;
    v > 0 && (a[_] ??= { current: 0, total: 0 }, a[_].total += v, !s.includes(_) && !o.includes(_) && (a[_].current = e[_]?.current ?? 0));
  }
  let c = 0, u = 0;
  for (const f of Object.values(a))
    c += f.current, u += f.total;
  return { bySize: a, value: c, max: u };
}
i(so, "computeHitDiceData");
var oo = /* @__PURE__ */ P("<span> </span>"), lo = /* @__PURE__ */ P('<span style="color: var(--nos-text-secondary, #888)">—</span>'), co = /* @__PURE__ */ P('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function uo(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ H(() => t.actor.reactive.img);
  function r() {
    if (!t.editingEnabled) return;
    const x = game.modules.get("vtta-tokenizer");
    if (x?.active) {
      x.api?.tokenizeActor(t.actor);
      return;
    }
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ i((R) => t.actor.update({ img: R }), "callback")
    }).render(!0);
  }
  i(r, "pickPortrait");
  let a = /* @__PURE__ */ H(() => {
    const x = Object.keys(t.hitDiceData.bySize);
    return x.length === 0 ? "—" : x.length === 1 ? `d${x[0]}` : x.map((R) => `d${R}`).join("/");
  });
  var s = co(), o = h(s);
  o.__click = r;
  var c = h(o), u = b(o, 2), f = h(u), d = h(f), _ = b(f, 2);
  _.__change = ({ target: x }) => t.actor.update({ name: x.value });
  var v = b(u, 2), y = h(v), w = h(y), I = b(y, 2), g = h(I);
  {
    var A = /* @__PURE__ */ i((x) => {
      var R = oo(), ne = h(R);
      z(() => M(ne, t.metaData)), L(x, R);
    }, "consequent"), K = /* @__PURE__ */ i((x) => {
      var R = lo();
      L(x, R);
    }, "alternate");
    Z(g, (x) => {
      t.metaData ? x(A) : x(K, !1);
    });
  }
  var S = b(g, 2);
  S.__click = () => t.actor.editMetadata();
  var T = b(v, 2), O = h(T), E = h(O), p = b(O, 2), k = h(p);
  z(
    (x, R, ne, j, F) => {
      Jt(o, `cursor: ${t.editingEnabled ? "pointer" : "default"}`), C(c, "src", l(n)), C(c, "alt", t.actor.reactive.name), M(d, x), Ze(_, t.actor.reactive.name), _.disabled = !t.editingEnabled, M(w, R), C(S, "aria-label", ne), C(S, "data-tooltip", j), S.disabled = !t.editingEnabled, M(E, F), M(k, l(a));
    },
    [
      () => N("NWS.CharacterName"),
      () => N("NWS.AncestryClassLevel"),
      () => N("NWS.EditMetadata"),
      () => N("NWS.EditMetadata"),
      () => N("NWS.HitDie")
    ]
  ), L(e, s), Se();
}
i(uo, "HeaderRow");
We(["click", "change"]);
function Yr(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
i(Yr, "formatModifier");
var fo = /* @__PURE__ */ P('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function vo(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let r = /* @__PURE__ */ H(() => N(n[t.abilityKey])), a = /* @__PURE__ */ H(() => vn("NWS.RollCheck", { name: l(r) })), s = /* @__PURE__ */ H(() => vn("NWS.RollSave", { name: l(r) }));
  var o = fo(), c = h(o);
  let u;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = b(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), _ = h(d), v = b(f, 2), y = h(v);
  z(
    (w) => {
      u = Qe(c, 1, "nos-ability__roll", null, u, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), C(c, "data-tooltip", l(s)), C(c, "aria-label", l(s)), C(f, "data-tooltip", l(a)), C(f, "aria-label", l(a)), M(_, w), M(y, l(r));
    },
    [() => Yr(t.ability.mod)]
  ), L(e, o), Se();
}
i(vo, "AbilityBox");
We(["click"]);
var _o = /* @__PURE__ */ P('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), ho = /* @__PURE__ */ P('<div class="nos-wounds"><button class="nos-wounds__label" type="button"> </button> <div class="nos-wounds__drops"></div></div>');
function bo(e, t) {
  we(t, !0);
  var n = ho(), r = h(n);
  r.__click = function(...o) {
    t.resetWounds?.apply(this, o);
  };
  var a = h(r), s = b(r, 2);
  Ie(s, 21, () => ({ length: t.wounds.max }), Te, (o, c, u) => {
    var f = _o();
    let d;
    f.__click = () => t.toggleWounds(u + 1), z(
      (_, v) => {
        d = Qe(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > u }), C(f, "data-tooltip", _), C(f, "aria-label", v);
      },
      [
        () => vn("NWS.ToggleWound", { n: u + 1 }),
        () => vn("NWS.ToggleWound", { n: u + 1 })
      ]
    ), L(o, f);
  }), z(
    (o, c, u) => {
      C(r, "data-tooltip", o), C(r, "aria-label", c), M(a, u);
    },
    [
      () => N("NWS.ResetWounds"),
      () => N("NWS.ResetWounds"),
      () => N("NWS.Wounds")
    ]
  ), L(e, n), Se();
}
i(bo, "WoundTracker");
We(["click"]);
var mo = /* @__PURE__ */ P('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), go = /* @__PURE__ */ P('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), po = /* @__PURE__ */ P('<i class="fa-solid fa-heart"></i>'), yo = /* @__PURE__ */ P('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function wo(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: r } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ H(() => t.actor.reactive.system.attributes.hp), s = /* @__PURE__ */ H(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ H(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ H(() => t.actor.reactive.system.attributes.movement);
  var u = yo(), f = h(u), d = h(f);
  Ie(d, 17, () => n, Te, (fe, Pe) => {
    vo(fe, {
      get abilityKey() {
        return l(Pe);
      },
      get ability() {
        return t.actor.reactive.system.abilities[l(Pe)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[l(Pe)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var _ = b(d, 2);
  {
    var v = /* @__PURE__ */ i((fe) => {
      var Pe = mo(), bn = lt(Pe);
      bn.__click = () => t.actor.configureSavingThrows();
      var On = b(bn, 2);
      On.__click = () => t.actor.configureAbilityScores(), z(
        (lr, cr) => {
          C(bn, "data-tooltip", lr), C(On, "data-tooltip", cr);
        },
        [
          () => N("NWS.ConfigureSavingThrows"),
          () => N("NWS.ConfigureAbilityScores")
        ]
      ), L(fe, Pe);
    }, "consequent");
    Z(_, (fe) => {
      t.editingEnabled && fe(v);
    });
  }
  var y = b(f, 2), w = h(y), I = h(w), g = h(I), A = b(h(g), 2), K = h(A), S = b(A, 2), T = h(S), O = b(g, 2), E = b(h(O), 2), p = h(E), k = b(E, 2);
  k.__change = ({ target: fe }) => t.updateTempHP(Number(fe.value));
  var x = b(I, 2);
  let R;
  var ne = h(x), j = h(ne), F = h(j);
  {
    var G = /* @__PURE__ */ i((fe) => {
      var Pe = go();
      L(fe, Pe);
    }, "consequent_1"), U = /* @__PURE__ */ i((fe) => {
      var Pe = po();
      L(fe, Pe);
    }, "alternate");
    Z(F, (fe) => {
      t.isBloodied ? fe(G) : fe(U, !1);
    });
  }
  var X = b(j, 2), J = h(X), ie = b(X, 2), Y = h(ie);
  Y.__change = ({ target: fe }) => t.updateCurrentHP(Number(fe.value));
  var V = b(Y, 4), se = h(V), oe = b(ie, 2);
  oe.__click = () => t.actor.configureHitPoints();
  var ee = b(ne, 2), ve = h(ee), le = h(ve), re = b(ve, 2), ke = h(re), W = b(re, 2), te = h(W);
  te.__change = ({ target: fe }) => t.updateCurrentMana(Number(fe.value));
  var ce = b(te, 4), bt = h(ce), ue = b(W, 2);
  ue.__click = () => t.actor.configureMana();
  var et = b(x, 2);
  et.__click = () => t.rollHitDice();
  var Mn = b(h(et), 2), tr = h(Mn), Dn = b(Mn, 2), nr = h(Dn), hn = b(Dn, 2);
  hn.__click = (fe) => {
    fe.stopPropagation(), t.actor.configureHitDice();
  };
  var rr = b(et, 2), Gt = h(rr);
  Gt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Ln = b(h(Gt), 2), ar = h(Ln), ir = b(Ln, 2), sr = h(ir), gi = b(Gt, 2), Qr = b(h(gi), 2), pi = h(Qr), Xr = b(Qr, 2), yi = h(Xr), or = b(Xr, 2);
  or.__click = () => t.actor.configureMovement();
  var wi = b(y, 2);
  bo(wi, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    },
    get resetWounds() {
      return t.resetWounds;
    }
  }), z(
    (fe, Pe, bn, On, lr, cr, Si, ki, Ei, xi, Ni, Ci, Ti) => {
      M(K, fe), M(T, l(s).value), M(p, Pe), Ze(k, l(a).temp ?? 0), R = Qe(x, 1, "nos-combat__pair", null, R, { "nos-hp--bloodied": t.isBloodied }), M(J, bn), Ze(Y, l(a).value), M(se, l(a).max), C(oe, "data-tooltip", On), oe.disabled = !t.editingEnabled, Jt(le, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Jt(re, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), M(ke, lr), Ze(te, t.mana?.current ?? 0), Jt(te, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Jt(ce, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), M(bt, t.mana?.max || t.mana?.baseMax || 0), C(ue, "data-tooltip", cr), ue.disabled = !t.editingEnabled, M(tr, Si), M(nr, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), C(hn, "data-tooltip", ki), hn.disabled = !t.editingEnabled, C(Gt, "data-tooltip", Ei), M(ar, xi), M(sr, Ni), M(pi, Ci), M(yi, l(c).walk), C(or, "data-tooltip", Ti), or.disabled = !t.editingEnabled;
    },
    [
      () => N("NWS.Armor"),
      () => N("NWS.TempHP"),
      () => N("NWS.HitPoints"),
      () => N("NWS.ConfigureHitPoints"),
      () => N("NWS.Mana"),
      () => N("NWS.ConfigureMana"),
      () => N("NWS.HitDice"),
      () => N("NWS.ConfigureHitDice"),
      () => N("NWS.RollInitiative"),
      () => N("NWS.Initiative"),
      () => Yr(l(o).mod),
      () => N("NWS.Speed"),
      () => N("NWS.ConfigureMovement")
    ]
  ), L(e, u), Se();
}
i(wo, "StatsRow");
We(["click", "change"]);
var So = /* @__PURE__ */ P('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function ko(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: r,
    skills: a
  } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ H(() => n[t.skillKey]), o = /* @__PURE__ */ H(() => N(r[l(s)])), c = /* @__PURE__ */ H(() => N(a[t.skillKey]));
  var u = So();
  u.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(u), d = h(f), _ = b(f, 2), v = h(_), y = b(_, 2), w = h(y);
  z(
    (I, g) => {
      C(u, "data-tooltip", I), M(d, l(o)), M(v, g), M(w, l(c));
    },
    [
      () => vn("NWS.RollSkill", { name: l(c) }),
      () => Yr(t.skill.mod)
    ]
  ), L(e, u), Se();
}
i(ko, "SkillCell");
We(["click"]);
var Eo = /* @__PURE__ */ P('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), xo = /* @__PURE__ */ P('<section class="nos-skills-row"><!> <!></section>');
function No(e, t) {
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
  var r = xo(), a = h(r);
  Ie(a, 17, () => n, Te, (c, u) => {
    ko(c, {
      get skillKey() {
        return l(u);
      },
      get skill() {
        return t.actor.reactive.system.skills[l(u)];
      },
      get actor() {
        return t.actor;
      }
    });
  });
  var s = b(a, 2);
  {
    var o = /* @__PURE__ */ i((c) => {
      var u = Eo();
      u.__click = () => t.actor.configureSkills(), z((f) => C(u, "data-tooltip", f), [() => N("NWS.ConfigureSkills")]), L(c, u);
    }, "consequent");
    Z(s, (c) => {
      t.editingEnabled && c(o);
    });
  }
  L(e, r), Se();
}
i(No, "SkillsRow");
We(["click"]);
var Co = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), To = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Io = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Wo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Ao = /* @__PURE__ */ P('<div class="nos-feature-row"><!> <!></div>'), Mo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Do = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Lo = /* @__PURE__ */ P('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Oo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Po = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Ro = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Fo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Ho = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), jo = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), zo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Uo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Bo = /* @__PURE__ */ P("<!> <!> <!> <!> <!>", 1);
function ba(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ H(() => t.actor.reactive.items.filter((p) => p.type === "feature")), r = /* @__PURE__ */ H(() => t.actor.reactive.items.filter((p) => p.type === "boon")), a = /* @__PURE__ */ H(() => t.actor.reactive.items.find((p) => p.type === "ancestry") ?? null), s = /* @__PURE__ */ H(() => t.actor.reactive.items.find((p) => p.type === "background") ?? null), o = /* @__PURE__ */ H(() => t.actor.reactive.items.find((p) => p.type === "class") ?? null), c = /* @__PURE__ */ H(() => t.actor.reactive.items.find((p) => p.type === "subclass") ?? null);
  function u(p) {
    t.actor.activateItem(p);
  }
  i(u, "useItem");
  function f(p) {
    t.actor.items.get(p)?.sheet?.render(!0);
  }
  i(f, "configureItem");
  async function d(p) {
    try {
      await t.actor.deleteEmbeddedDocuments("Item", [p]);
    } catch (k) {
      console.error("nimble-white-sheet | Failed to delete item:", k);
    }
  }
  i(d, "deleteItem");
  function _(p, k) {
    const x = { type: "Item", uuid: k.uuid };
    p.dataTransfer?.setData("text/plain", JSON.stringify(x));
  }
  i(_, "onDragStart");
  var v = Bo(), y = lt(v);
  {
    var w = /* @__PURE__ */ i((p) => {
      var k = Ao(), x = h(k);
      {
        var R = /* @__PURE__ */ i((F) => {
          var G = To(), U = h(G), X = h(U), J = b(U, 2), ie = h(J), Y = b(ie, 2);
          Y.__click = () => f(l(a).id);
          var V = h(Y), se = b(Y, 2);
          {
            var oe = /* @__PURE__ */ i((ee) => {
              var ve = Co(), le = h(ve);
              le.__click = () => f(l(a).id);
              var re = b(le, 2);
              re.__click = () => d(l(a).id), L(ee, ve);
            }, "consequent");
            Z(se, (ee) => {
              t.editingEnabled && ee(oe);
            });
          }
          z(
            (ee) => {
              M(X, ee), C(J, "data-tooltip", l(a).system?.description || ""), C(ie, "src", l(a).img), C(ie, "alt", l(a).name), M(V, l(a).name);
            },
            [() => N("NWS.Ancestry")]
          ), ft("dragstart", J, (ee) => _(ee, l(a))), L(F, G);
        }, "consequent_1");
        Z(x, (F) => {
          l(a) && F(R);
        });
      }
      var ne = b(x, 2);
      {
        var j = /* @__PURE__ */ i((F) => {
          var G = Wo(), U = h(G), X = h(U), J = b(U, 2), ie = h(J), Y = b(ie, 2);
          Y.__click = () => f(l(s).id);
          var V = h(Y), se = b(Y, 2);
          {
            var oe = /* @__PURE__ */ i((ee) => {
              var ve = Io(), le = h(ve);
              le.__click = () => f(l(s).id);
              var re = b(le, 2);
              re.__click = () => d(l(s).id), L(ee, ve);
            }, "consequent_2");
            Z(se, (ee) => {
              t.editingEnabled && ee(oe);
            });
          }
          z(
            (ee) => {
              M(X, ee), C(J, "data-tooltip", l(s).system?.description || ""), C(ie, "src", l(s).img), C(ie, "alt", l(s).name), M(V, l(s).name);
            },
            [() => N("NWS.Background")]
          ), ft("dragstart", J, (ee) => _(ee, l(s))), L(F, G);
        }, "consequent_3");
        Z(ne, (F) => {
          l(s) && F(j);
        });
      }
      L(p, k);
    }, "consequent_4");
    Z(y, (p) => {
      (l(a) || l(s)) && p(w);
    });
  }
  var I = b(y, 2);
  {
    var g = /* @__PURE__ */ i((p) => {
      var k = Oo(), x = h(k), R = h(x), ne = b(x, 2), j = h(ne), F = b(j, 2);
      F.__click = () => f(l(o).id);
      var G = h(F), U = b(F, 2);
      {
        var X = /* @__PURE__ */ i((Y) => {
          var V = Mo(), se = h(V);
          se.__click = () => f(l(o).id);
          var oe = b(se, 2);
          oe.__click = () => d(l(o).id), L(Y, V);
        }, "consequent_5");
        Z(U, (Y) => {
          t.editingEnabled && Y(X);
        });
      }
      var J = b(ne, 2);
      {
        var ie = /* @__PURE__ */ i((Y) => {
          var V = Lo(), se = h(V), oe = b(se, 2);
          oe.__click = () => f(l(c).id);
          var ee = h(oe), ve = b(oe, 2);
          {
            var le = /* @__PURE__ */ i((re) => {
              var ke = Do(), W = h(ke);
              W.__click = () => f(l(c).id);
              var te = b(W, 2);
              te.__click = () => d(l(c).id), L(re, ke);
            }, "consequent_6");
            Z(ve, (re) => {
              t.editingEnabled && re(le);
            });
          }
          z(() => {
            C(se, "src", l(c).img), C(se, "alt", l(c).name), M(ee, l(c).name);
          }), ft("dragstart", V, (re) => _(re, l(c))), L(Y, V);
        }, "consequent_7");
        Z(J, (Y) => {
          l(c) && Y(ie);
        });
      }
      z(
        (Y, V) => {
          M(R, Y), C(j, "src", l(o).img), C(j, "alt", l(o).name), M(G, `${l(o).name ?? ""} (${V ?? ""} ${l(o).system.classLevel ?? ""})`);
        },
        [() => N("NWS.Class"), () => N("NWS.Level")]
      ), ft("dragstart", ne, (Y) => _(Y, l(o))), L(p, k);
    }, "consequent_8");
    Z(I, (p) => {
      l(o) && p(g);
    });
  }
  var A = b(I, 2);
  {
    var K = /* @__PURE__ */ i((p) => {
      var k = Fo(), x = h(k), R = h(x), ne = b(x, 2);
      Ie(ne, 21, () => l(n), Te, (j, F) => {
        var G = Ro(), U = h(G), X = b(U, 2);
        X.__click = () => u(l(F).id);
        var J = h(X), ie = b(X, 2);
        {
          var Y = /* @__PURE__ */ i((V) => {
            var se = Po(), oe = h(se);
            oe.__click = () => f(l(F).id);
            var ee = b(oe, 2);
            ee.__click = () => d(l(F).id), L(V, se);
          }, "consequent_9");
          Z(ie, (V) => {
            t.editingEnabled && V(Y);
          });
        }
        z(() => {
          C(G, "data-tooltip", l(F).system?.description || ""), C(U, "src", l(F).img), C(U, "alt", l(F).name), M(J, l(F).name);
        }), ft("dragstart", G, (V) => _(V, l(F))), L(j, G);
      }), z((j) => M(R, j), [() => N("NWS.Features")]), L(p, k);
    }, "consequent_10");
    Z(A, (p) => {
      l(n).length > 0 && p(K);
    });
  }
  var S = b(A, 2);
  {
    var T = /* @__PURE__ */ i((p) => {
      var k = zo(), x = h(k), R = h(x), ne = b(x, 2);
      Ie(ne, 21, () => l(r), Te, (j, F) => {
        var G = jo(), U = h(G), X = b(U, 2);
        X.__click = () => u(l(F).id);
        var J = h(X), ie = b(X, 2);
        {
          var Y = /* @__PURE__ */ i((V) => {
            var se = Ho(), oe = h(se);
            oe.__click = () => f(l(F).id);
            var ee = b(oe, 2);
            ee.__click = () => d(l(F).id), L(V, se);
          }, "consequent_11");
          Z(ie, (V) => {
            t.editingEnabled && V(Y);
          });
        }
        z(() => {
          C(G, "data-tooltip", l(F).system?.description || ""), C(U, "src", l(F).img), C(U, "alt", l(F).name), M(J, l(F).name);
        }), ft("dragstart", G, (V) => _(V, l(F))), L(j, G);
      }), z((j) => M(R, j), [() => N("NWS.Boons")]), L(p, k);
    }, "consequent_12");
    Z(S, (p) => {
      l(r).length > 0 && p(T);
    });
  }
  var O = b(S, 2);
  {
    var E = /* @__PURE__ */ i((p) => {
      var k = Uo(), x = h(k);
      z((R) => M(x, R), [() => N("NWS.DropFeaturesHere")]), L(p, k);
    }, "consequent_13");
    Z(O, (p) => {
      !l(a) && !l(s) && !l(o) && l(n).length === 0 && l(r).length === 0 && p(E);
    });
  }
  L(e, v), Se();
}
i(ba, "FeaturesTab");
We(["click"]);
var qo = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Go = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Ko = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Vo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Yo = /* @__PURE__ */ P('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), Zo = /* @__PURE__ */ P('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Jo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Qo = /* @__PURE__ */ P('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function ma(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ De(""), r = /* @__PURE__ */ H(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, T) => S.name.localeCompare(T.name))), a = /* @__PURE__ */ H(() => l(n) ? l(r).filter((S) => S.name.toLowerCase().includes(l(n).toLowerCase())) : l(r)), s = /* @__PURE__ */ H(() => {
    const S = {};
    for (const T of l(a)) {
      const O = T.system?.tier ?? 0, E = T.system?.isUtility ?? !1, p = E ? "_utility" : `_tier_${O}`, k = E ? N("NWS.Utility") : vn("NWS.Tier", { n: O });
      S[p] ??= { label: k, spells: [] }, S[p].spells.push(T);
    }
    return Object.entries(S).sort(([T], [O]) => T === "_utility" ? 1 : O === "_utility" ? -1 : Number.parseInt(T.replace("_tier_", "")) - Number.parseInt(O.replace("_tier_", "")));
  });
  function o(S) {
    t.actor.items.get(S)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  async function c(S) {
    try {
      await t.actor.deleteEmbeddedDocuments("Item", [S]);
    } catch (T) {
      console.error("nimble-white-sheet | Failed to delete spell:", T);
    }
  }
  i(c, "deleteItem");
  async function u() {
    try {
      await t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
    } catch (S) {
      console.error("nimble-white-sheet | Failed to create spell:", S);
    }
  }
  i(u, "createSpell");
  function f(S) {
    t.actor.activateItem(S);
  }
  i(f, "castSpell");
  function d(S, T) {
    const O = { type: "Item", uuid: T.uuid };
    S.dataTransfer?.setData("text/plain", JSON.stringify(O));
  }
  i(d, "onDragStart");
  var _ = Qo(), v = lt(_), y = b(h(v), 2), w = b(y, 2);
  {
    var I = /* @__PURE__ */ i((S) => {
      var T = qo();
      T.__click = u;
      var O = b(h(T));
      z((E) => M(O, ` ${E ?? ""}`), [() => N("NWS.New")]), L(S, T);
    }, "consequent");
    Z(w, (S) => {
      t.editingEnabled && S(I);
    });
  }
  var g = b(v, 2);
  Ie(g, 17, () => l(s), Te, (S, T) => {
    var O = /* @__PURE__ */ H(() => ka(l(T), 2));
    let E = /* @__PURE__ */ i(() => l(O)[1], "tier");
    var p = Zo(), k = h(p), x = h(k), R = b(k, 2);
    Ie(R, 21, () => E().spells, Te, (ne, j) => {
      var F = Yo(), G = h(F), U = b(G, 2);
      U.__click = () => f(l(j).id);
      var X = h(U), J = b(X);
      {
        var ie = /* @__PURE__ */ i((le) => {
          var re = Go();
          z((ke) => C(re, "data-tooltip", ke), [() => N("NWS.Concentration")]), L(le, re);
        }, "consequent_1");
        Z(J, (le) => {
          l(j).system?.concentration && le(ie);
        });
      }
      var Y = b(J, 2);
      {
        var V = /* @__PURE__ */ i((le) => {
          var re = Ko();
          z((ke) => C(re, "data-tooltip", ke), [() => N("NWS.Utility")]), L(le, re);
        }, "consequent_2");
        Z(Y, (le) => {
          l(j).system?.isUtility && le(V);
        });
      }
      var se = b(U, 2), oe = h(se), ee = b(se, 2);
      {
        var ve = /* @__PURE__ */ i((le) => {
          var re = Vo(), ke = h(re);
          ke.__click = () => o(l(j).id);
          var W = b(ke, 2);
          W.__click = () => c(l(j).id), L(le, re);
        }, "consequent_3");
        Z(ee, (le) => {
          t.editingEnabled && le(ve);
        });
      }
      z(() => {
        C(F, "data-tooltip", l(j).system?.description?.baseEffect || ""), C(G, "src", l(j).img), C(G, "alt", l(j).name), M(X, `${l(j).name ?? ""} `), M(oe, l(j).system?.activationCost ?? "");
      }), ft("dragstart", F, (le) => d(le, l(j))), L(ne, F);
    }), z(() => M(x, E().label)), L(S, p);
  });
  var A = b(g, 2);
  {
    var K = /* @__PURE__ */ i((S) => {
      var T = Jo(), O = h(T);
      z((E) => M(O, E), [() => N("NWS.DropSpellsHere")]), L(S, T);
    }, "consequent_4");
    Z(A, (S) => {
      l(r).length === 0 && S(K);
    });
  }
  z((S) => C(y, "placeholder", S), [() => N("NWS.SearchSpells")]), mi(y, () => l(n), (S) => Le(n, S)), L(e, _), Se();
}
i(ma, "SpellsTab");
We(["click"]);
var Xo = /* @__PURE__ */ P('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), $o = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), el = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), tl = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), nl = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), rl = /* @__PURE__ */ P('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function ga(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ De(""), r = /* @__PURE__ */ H(() => t.actor.reactive.system.currency), a = /* @__PURE__ */ H(() => t.actor.reactive.items.filter((E) => E.type === "object").sort((E, p) => (E.sort ?? 0) - (p.sort ?? 0))), s = /* @__PURE__ */ H(() => l(n) ? l(a).filter((E) => E.name.toLowerCase().includes(l(n).toLowerCase())) : l(a));
  function o(E) {
    t.actor.items.get(E)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  async function c(E) {
    try {
      await t.actor.deleteEmbeddedDocuments("Item", [E]);
    } catch (p) {
      console.error("nimble-white-sheet | Failed to delete item:", p);
    }
  }
  i(c, "deleteItem");
  async function u() {
    try {
      await t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
    } catch (E) {
      console.error("nimble-white-sheet | Failed to create object:", E);
    }
  }
  i(u, "createObject");
  function f(E, p) {
    const k = Math.max(0, Math.round(Number(p)));
    Number.isNaN(k) || t.actor.update({ [`system.currency.${E}.value`]: k });
  }
  i(f, "updateCurrency");
  function d(E, p) {
    const k = l(r)[E]?.value ?? 0;
    t.actor.update({
      [`system.currency.${E}.value`]: Math.max(0, k + p)
    });
  }
  i(d, "adjustCurrency");
  function _(E, p) {
    const k = Number(p);
    if (Number.isNaN(k)) return;
    t.actor.items.get(E)?.update({ "system.quantity": k });
  }
  i(_, "updateQuantity");
  function v(E, p) {
    const k = { type: "Item", uuid: p.uuid };
    E.dataTransfer?.setData("text/plain", JSON.stringify(k));
  }
  i(v, "onDragStart");
  var y = rl(), w = lt(y);
  Ie(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Te, (E, p) => {
    var k = /* @__PURE__ */ H(() => ka(p, 2));
    let x = /* @__PURE__ */ i(() => l(k)[0], "type"), R = /* @__PURE__ */ i(() => l(k)[1], "labelKey");
    var ne = Xo(), j = h(ne), F = h(j), G = b(j, 2);
    G.__click = () => d(x(), -1);
    var U = b(G, 2);
    U.__change = ({ target: J }) => f(x(), J.value);
    var X = b(U, 2);
    X.__click = () => d(x(), 1), z(
      (J, ie, Y) => {
        C(j, "for", `currency-${x() ?? ""}`), M(F, J), C(G, "aria-label", `-1 ${ie ?? ""}`), C(U, "id", `currency-${x() ?? ""}`), Ze(U, l(r)[x()]?.value ?? 0), C(X, "aria-label", `+1 ${Y ?? ""}`);
      },
      [
        () => N(R()),
        () => N(R()),
        () => N(R())
      ]
    ), L(E, ne);
  });
  var I = b(w, 2), g = b(h(I), 2), A = b(g, 2);
  {
    var K = /* @__PURE__ */ i((E) => {
      var p = $o();
      p.__click = u;
      var k = b(h(p));
      z((x) => M(k, ` ${x ?? ""}`), [() => N("NWS.New")]), L(E, p);
    }, "consequent");
    Z(A, (E) => {
      t.editingEnabled && E(K);
    });
  }
  var S = b(I, 2);
  Ie(S, 21, () => l(s), Te, (E, p) => {
    var k = tl(), x = h(k), R = b(x, 2);
    R.__click = () => o(l(p).id);
    var ne = h(R), j = b(R, 2);
    j.__change = ({ target: U }) => _(l(p).id, U.value);
    var F = b(j, 2);
    {
      var G = /* @__PURE__ */ i((U) => {
        var X = el(), J = h(X);
        J.__click = () => o(l(p).id);
        var ie = b(J, 2);
        ie.__click = () => c(l(p).id), L(U, X);
      }, "consequent_1");
      Z(F, (U) => {
        t.editingEnabled && U(G);
      });
    }
    z(() => {
      C(k, "data-tooltip", l(p).system?.description?.public || ""), C(x, "src", l(p).img), C(x, "alt", l(p).name), M(ne, l(p).name), Ze(j, l(p).system?.quantity ?? 1);
    }), ft("dragstart", k, (U) => v(U, l(p))), L(E, k);
  });
  var T = b(S, 2);
  {
    var O = /* @__PURE__ */ i((E) => {
      var p = nl(), k = h(p);
      z((x) => M(k, x), [() => N("NWS.DropInventoryHere")]), L(E, p);
    }, "consequent_2");
    Z(T, (E) => {
      l(a).length === 0 && E(O);
    });
  }
  z((E) => C(g, "placeholder", E), [() => N("NWS.SearchItems")]), mi(g, () => l(n), (E) => Le(n, E)), L(e, y), Se();
}
i(ga, "InventoryTab");
We(["click", "change"]);
var al = /* @__PURE__ */ P('<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor"><!></div></div></div>');
function pa(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ H(() => t.actor.reactive.system.details), r = /* @__PURE__ */ H(() => t.actor.reactive.system.proficiencies), a = /* @__PURE__ */ H(() => [...l(r).languages ?? []].join(", ")), s = /* @__PURE__ */ H(() => [...l(r).armor ?? []].join(", ")), o = /* @__PURE__ */ H(() => (l(r).weapons ?? []).join(", "));
  function c(ue, et) {
    t.actor.update({ [`system.details.${ue}`]: et });
  }
  i(c, "updateDetail");
  var u = al(), f = h(u), d = h(f), _ = h(d), v = b(d, 2);
  v.__change = ({ target: ue }) => c("age", ue.value);
  var y = b(f, 2), w = h(y), I = h(w), g = b(w, 2);
  g.__change = ({ target: ue }) => c("gender", ue.value);
  var A = b(y, 2), K = h(A), S = h(K), T = b(K, 2);
  T.__change = ({ target: ue }) => c("height", ue.value);
  var O = b(A, 2), E = h(O), p = h(E), k = b(E, 2);
  k.__change = ({ target: ue }) => c("weight", ue.value);
  var x = b(O, 2), R = h(x), ne = h(R), j = b(R, 2), F = h(j), G = b(j, 2);
  G.__click = () => t.actor.configureLanguageProficiencies();
  var U = b(x, 2), X = h(U), J = h(X), ie = b(X, 2), Y = h(ie), V = b(ie, 2);
  V.__click = () => t.actor.configureArmorProficiencies();
  var se = b(U, 2), oe = h(se), ee = h(oe), ve = b(oe, 2), le = h(ve), re = b(ve, 2);
  re.__click = () => t.actor.configureWeaponProficiencies();
  var ke = b(se, 2), W = h(ke), te = h(W), ce = b(W, 2), bt = h(ce);
  Zs(bt, () => l(n).notes ?? ""), z(
    (ue, et, Mn, tr, Dn, nr, hn, rr, Gt, Ln, ar, ir, sr) => {
      M(_, ue), Ze(v, l(n).age ?? ""), v.disabled = !t.editingEnabled, M(I, et), Ze(g, l(n).gender ?? ""), g.disabled = !t.editingEnabled, M(S, Mn), Ze(T, l(n).height ?? ""), C(T, "placeholder", tr), T.disabled = !t.editingEnabled, M(p, Dn), Ze(k, l(n).weight ?? ""), C(k, "placeholder", nr), k.disabled = !t.editingEnabled, M(ne, hn), M(F, l(a) || "—"), C(G, "data-tooltip", rr), G.disabled = !t.editingEnabled, M(J, Gt), M(Y, l(s) || "—"), C(V, "data-tooltip", Ln), V.disabled = !t.editingEnabled, M(ee, ar), M(le, l(o) || "—"), C(re, "data-tooltip", ir), re.disabled = !t.editingEnabled, M(te, sr), C(ce, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), ft("blur", ce, ({ target: ue }) => c("notes", ue.innerHTML)), L(e, u), Se();
}
i(pa, "BioTab");
We(["change", "click"]);
var il = /* @__PURE__ */ P('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), sl = /* @__PURE__ */ P('<div class="nos-slot nos-slot--empty"> </div>'), ol = /* @__PURE__ */ P("<!> <!>", 1);
function ll(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ H(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, u) => (c.sort ?? 0) - (u.sort ?? 0)));
  var r = ol(), a = lt(r);
  Ie(a, 17, () => l(n), Te, (c, u) => {
    var f = il(), d = h(f), _ = b(d, 2);
    _.__click = () => t.actor.activateItem(l(u).id);
    var v = h(_);
    z(() => {
      C(d, "src", l(u).img), C(d, "alt", l(u).name), C(_, "data-tooltip", l(u).system?.description?.public || l(u).name), M(v, l(u).name);
    }), L(c, f);
  });
  var s = b(a, 2);
  {
    var o = /* @__PURE__ */ i((c) => {
      var u = sl(), f = h(u);
      z((d) => M(f, d), [() => N("NWS.NoWeapons")]), L(c, u);
    }, "consequent");
    Z(s, (c) => {
      l(n).length === 0 && c(o);
    });
  }
  L(e, r), Se();
}
i(ll, "InventorySlots");
We(["click"]);
var cl = /* @__PURE__ */ P('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), ul = /* @__PURE__ */ P('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), fl = /* @__PURE__ */ P('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function dl(e, t) {
  we(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: ba
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: ma
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: ga
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: pa
    }
  ];
  let r = /* @__PURE__ */ De("features"), a = /* @__PURE__ */ H(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), s = /* @__PURE__ */ H(() => t.actor.reactive.system.inventory);
  var o = fl(), c = h(o);
  Ie(c, 21, () => n, Te, (S, T) => {
    var O = cl();
    let E;
    O.__click = () => Le(r, l(T).name, !0);
    var p = h(O), k = b(p);
    z(
      (x) => {
        E = Qe(O, 1, "nos-tab-btn", null, E, { "nos-tab-btn--active": l(r) === l(T).name }), Qe(p, 1, l(T).icon), M(k, ` ${x ?? ""}`);
      },
      [() => N(l(T).labelKey)]
    ), L(S, O);
  });
  var u = b(c, 2), f = h(u);
  {
    var d = /* @__PURE__ */ i((S) => {
      ba(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), _ = /* @__PURE__ */ i((S) => {
      var T = hr(), O = lt(T);
      {
        var E = /* @__PURE__ */ i((k) => {
          ma(k, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), p = /* @__PURE__ */ i((k) => {
          var x = hr(), R = lt(x);
          {
            var ne = /* @__PURE__ */ i((F) => {
              ga(F, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), j = /* @__PURE__ */ i((F) => {
              var G = hr(), U = lt(G);
              {
                var X = /* @__PURE__ */ i((J) => {
                  pa(J, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                Z(
                  U,
                  (J) => {
                    l(r) === "bio" && J(X);
                  },
                  !0
                );
              }
              L(F, G);
            }, "alternate");
            Z(
              R,
              (F) => {
                l(r) === "inventory" ? F(ne) : F(j, !1);
              },
              !0
            );
          }
          L(k, x);
        }, "alternate_1");
        Z(
          O,
          (k) => {
            l(r) === "spells" ? k(E) : k(p, !1);
          },
          !0
        );
      }
      L(S, T);
    }, "alternate_2");
    Z(f, (S) => {
      l(r) === "features" ? S(d) : S(_, !1);
    });
  }
  var v = b(u, 2), y = h(v), w = h(y), I = b(v, 2), g = h(I);
  ll(g, {
    get actor() {
      return t.actor;
    }
  });
  var A = b(g, 2);
  {
    var K = /* @__PURE__ */ i((S) => {
      var T = ul(), O = h(T);
      z(() => M(O, `${l(s).usedSlots ?? 0 ?? ""} / ${l(s).totalSlots ?? 0 ?? ""}`)), L(S, T);
    }, "consequent_4");
    Z(A, (S) => {
      l(a) && S(K);
    });
  }
  z((S) => M(w, S), [() => N("NWS.Weapons")]), L(e, o), Se();
}
i(dl, "ContentArea");
We(["click"]);
var vl = /* @__PURE__ */ P('<button type="button" role="menuitem"><i></i> <span> </span></button>'), _l = /* @__PURE__ */ P('<label class="nos-color-picker"><input type="color"/> <span> </span></label>'), hl = /* @__PURE__ */ P('<div class="nos-color-picker-group"><span class="nos-color-picker-group__label"> </span> <div class="nos-color-picker-group__colors"></div></div>'), bl = /* @__PURE__ */ P('<div class="nos-color-picker-panel"></div>'), ml = /* @__PURE__ */ P('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"><!> <!></div>', 1);
function gl(e, t) {
  we(t, !0);
  const n = [
    { value: "white", icon: "fa-sun", label: "NWS.ThemeWhite" },
    { value: "dark", icon: "fa-moon", label: "NWS.ThemeDark" },
    {
      value: "nimble",
      icon: "fa-dice-d20",
      label: "NWS.ThemeNimble"
    },
    {
      value: "custom",
      icon: "fa-palette",
      label: "NWS.ThemeCustom"
    }
  ], r = [
    {
      label: "NWS.ColorGroupBackgrounds",
      colors: [
        { key: "bgPrimary", label: "NWS.ColorBgPrimary" },
        { key: "bgSecondary", label: "NWS.ColorBgSecondary" },
        { key: "bgInput", label: "NWS.ColorBgInput" }
      ]
    },
    {
      label: "NWS.ColorGroupTexts",
      colors: [
        { key: "textPrimary", label: "NWS.ColorTextPrimary" },
        { key: "textSecondary", label: "NWS.ColorTextSecondary" },
        { key: "textLabel", label: "NWS.ColorTextLabel" }
      ]
    },
    {
      label: "NWS.ColorGroupBorders",
      colors: [
        { key: "borderColor", label: "NWS.ColorBorderColor" },
        { key: "borderLight", label: "NWS.ColorBorderLight" }
      ]
    },
    {
      label: "NWS.ColorGroupAccents",
      colors: [
        { key: "accent", label: "NWS.ColorAccent" },
        { key: "highlight", label: "NWS.ColorHighlight" },
        { key: "labelBg", label: "NWS.ColorLabelBg" },
        { key: "labelText", label: "NWS.ColorLabelText" }
      ]
    },
    {
      label: "NWS.ColorGroupStatus",
      colors: [
        { key: "danger", label: "NWS.ColorDanger" },
        { key: "success", label: "NWS.ColorSuccess" },
        { key: "manaColor", label: "NWS.ColorMana" }
      ]
    }
  ];
  function a(v) {
    t.setColorScheme(v), v !== "custom" && t.onclose();
  }
  i(a, "select");
  function s(v) {
    v.key === "Escape" && t.onclose();
  }
  i(s, "handleKeydown");
  var o = ml(), c = lt(o);
  c.__click = function(...v) {
    t.onclose?.apply(this, v);
  }, c.__keydown = s;
  var u = b(c, 2), f = h(u);
  Ie(f, 17, () => n, Te, (v, y) => {
    var w = vl();
    let I;
    w.__click = () => a(l(y).value);
    var g = h(w), A = b(g, 2), K = h(A);
    z(
      (S) => {
        I = Qe(w, 1, "nos-color-scheme-menu__option", null, I, {
          "nos-color-scheme-menu__option--active": t.colorScheme === l(y).value
        }), Qe(g, 1, `fa-solid ${l(y).icon ?? ""}`), M(K, S);
      },
      [() => N(l(y).label)]
    ), L(v, w);
  });
  var d = b(f, 2);
  {
    var _ = /* @__PURE__ */ i((v) => {
      var y = bl();
      Ie(y, 21, () => r, Te, (w, I) => {
        var g = hl(), A = h(g), K = h(A), S = b(A, 2);
        Ie(S, 21, () => l(I).colors, Te, (T, O) => {
          var E = _l(), p = h(E);
          p.__input = (R) => t.setCustomColor(l(O).key, R.target.value);
          var k = b(p, 2), x = h(k);
          z(
            (R) => {
              Ze(p, t.customColors[l(O).key]), M(x, R);
            },
            [() => N(l(O).label)]
          ), L(T, E);
        }), z((T) => M(K, T), [() => N(l(I).label)]), L(w, g);
      }), L(v, y);
    }, "consequent");
    Z(d, (v) => {
      t.colorScheme === "custom" && v(_);
    });
  }
  L(e, o), Se();
}
i(gl, "ColorSchemeMenu");
We(["click", "keydown", "input"]);
var pl = /* @__PURE__ */ P('<button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button>', 1), yl = /* @__PURE__ */ P('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <!> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function wl(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ De(!1);
  var r = yl(), a = h(r);
  let s;
  a.__click = function(...g) {
    t.toggleEditingEnabled?.apply(this, g);
  };
  var o = h(a), c = b(a, 2);
  {
    var u = /* @__PURE__ */ i((g) => {
      var A = pl(), K = lt(A);
      K.__click = () => t.actor.triggerLevelUp();
      var S = b(K, 2);
      S.__click = () => t.actor.triggerLevelDown(), z(
        (T, O, E, p) => {
          C(K, "aria-label", T), C(K, "data-tooltip", O), K.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, C(S, "aria-label", E), C(S, "data-tooltip", p), S.disabled = t.actor.reactive.system.levelUpHistory.length === 0;
        },
        [
          () => N("NWS.LevelUp"),
          () => N("NWS.LevelUp"),
          () => N("NWS.RevertLastLevelUp"),
          () => N("NWS.RevertLastLevelUp")
        ]
      ), L(g, A);
    }, "consequent");
    Z(c, (g) => {
      t.editingEnabled && g(u);
    });
  }
  var f = b(c, 2), d = h(f);
  let _;
  d.__click = () => Le(n, !l(n));
  var v = b(d, 2);
  {
    var y = /* @__PURE__ */ i((g) => {
      gl(g, {
        get colorScheme() {
          return t.colorScheme;
        },
        get setColorScheme() {
          return t.setColorScheme;
        },
        get customColors() {
          return t.customColors;
        },
        get setCustomColor() {
          return t.setCustomColor;
        },
        onclose: /* @__PURE__ */ i(() => Le(n, !1), "onclose")
      });
    }, "consequent_1");
    Z(v, (g) => {
      l(n) && g(y);
    });
  }
  var w = b(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var I = b(w, 2);
  I.__click = () => t.actor.triggerRest({ restType: "safe" }), z(
    (g, A, K, S, T, O, E, p) => {
      s = Qe(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), C(a, "aria-pressed", t.editingEnabled), C(a, "aria-label", g), C(a, "data-tooltip", A), Qe(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), _ = Qe(d, 1, "nos-sidebar-btn", null, _, { "nos-sidebar-btn--active": t.darkMode }), C(d, "aria-pressed", t.darkMode), C(d, "aria-label", K), C(d, "data-tooltip", S), C(d, "aria-expanded", l(n)), C(w, "aria-label", T), C(w, "data-tooltip", O), C(I, "aria-label", E), C(I, "data-tooltip", p);
    },
    [
      () => t.editingEnabled ? N("NWS.DisableEditing") : N("NWS.EnableEditing"),
      () => t.editingEnabled ? N("NWS.EditingEnabled") : N("NWS.EditingLocked"),
      () => N("NWS.ColorScheme"),
      () => N("NWS.ColorScheme"),
      () => N("NWS.FieldRest"),
      () => N("NWS.FieldRest"),
      () => N("NWS.SafeRest"),
      () => N("NWS.SafeRest")
    ]
  ), L(e, r), Se();
}
i(wl, "SidebarControls");
We(["click"]);
var Sl = /* @__PURE__ */ P('<div><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function kl(e, t) {
  we(t, !0);
  const n = Ba((W) => {
    const te = {
      updateActor: Hooks.on("updateActor", (ce, bt, ue) => {
        ue.diff !== !1 && ce._id === t.actor.id && W();
      }),
      createItem: Hooks.on("createItem", (ce) => {
        ce?.actor?.id === t.actor.id && W();
      }),
      deleteItem: Hooks.on("deleteItem", (ce) => {
        ce?.actor?.id === t.actor.id && W();
      }),
      updateItem: Hooks.on("updateItem", (ce, bt, ue) => {
        ue.diff !== !1 && ce?.actor?.id === t.actor.id && W();
      })
    };
    return () => {
      Hooks.off("updateActor", te.updateActor), Hooks.off("createItem", te.createItem), Hooks.off("deleteItem", te.deleteItem), Hooks.off("updateItem", te.updateItem);
    };
  }), r = new Proxy(t.actor, {
    get(W, te) {
      if (te === "reactive")
        return n(), W;
      const ce = W[te];
      return typeof ce == "function" ? ce.bind(W) : ce;
    }
  }), { sizeCategories: a } = CONFIG.NIMBLE;
  function s(W, te) {
    return te <= 0 ? 0 : Math.clamp(0, Math.round(W / te * 100), 100);
  }
  i(s, "getHitPointPercentage");
  function o(W, te, ce, bt) {
    const ue = [];
    if (ce && ue.push(`${ce.name} (${a[bt] ?? bt})`), W) {
      const et = W.system.classLevel;
      ue.push(te ? `${W.name} (${te.name}, ${et})` : `${W.name} (${et})`);
    }
    return ue.join(" ⟡ ");
  }
  i(o, "prepareCharacterMetadata");
  let c = /* @__PURE__ */ H(() => r.reactive.items.find((W) => W.type === "class") ?? null), u = /* @__PURE__ */ H(() => r.reactive.items.find((W) => W.type === "subclass") ?? null), f = /* @__PURE__ */ H(() => r.reactive.items.find((W) => W.type === "ancestry") ?? null), d = /* @__PURE__ */ H(() => s(r.reactive.system.attributes.hp.value, r.reactive.system.attributes.hp.max) <= 50);
  function _(W) {
    r.update({ "system.attributes.hp.value": W });
  }
  i(_, "updateCurrentHP");
  function v(W) {
    r.update({ "system.attributes.hp.temp": W });
  }
  i(v, "updateTempHP");
  let y = /* @__PURE__ */ H(() => r.reactive.system.resources.mana), w = /* @__PURE__ */ H(() => (l(y).max ?? 0) > 0 || (l(y).baseMax ?? 0) > 0 ? !0 : r.reactive.items.some((W) => W.type === "class" && W.system?.mana?.formula?.length));
  function I(W) {
    r.update({ "system.resources.mana.current": W });
  }
  i(I, "updateCurrentMana");
  let g = /* @__PURE__ */ H(() => {
    const W = r.reactive.system.attributes, te = r.reactive.items.filter((ce) => ce.type === "class");
    return so(W.hitDice, W.bonusHitDice ?? [], te, W.hitDiceSizeBonus ?? 0);
  });
  async function A(W) {
    await r.updateCurrentHitDice(W);
  }
  i(A, "updateCurrentHitDice");
  async function K() {
    await r.rollHitDice();
  }
  i(K, "rollHitDice");
  async function S() {
    await r.editCurrentHitDice();
  }
  i(S, "editCurrentHitDice");
  let T = /* @__PURE__ */ H(() => {
    const W = r.reactive.system.attributes.sizeCategory;
    return o(l(c), l(u), l(f), W);
  }), O = /* @__PURE__ */ H(() => r.reactive.system.attributes.wounds);
  function E(W) {
    const te = W === l(O).value ? W - 1 : W;
    r.update({ "system.attributes.wounds.value": te });
  }
  i(E, "toggleWounds");
  function p() {
    r.update({ "system.attributes.wounds.value": 0 });
  }
  i(p, "resetWounds");
  let k = /* @__PURE__ */ H(() => r.reactive.flags.nimble), x = /* @__PURE__ */ H(() => l(k)?.editingEnabled ?? !0);
  const R = to(!1, (W) => (Ms(() => W(l(x))), () => {
  }));
  async function ne() {
    await r.setFlag("nimble", "editingEnabled", !l(x));
  }
  i(ne, "toggleEditingEnabled");
  let j = /* @__PURE__ */ H(() => {
    const W = l(k)?.colorScheme;
    return W || (l(k)?.darkMode === !0 ? "dark" : "nimble");
  });
  async function F(W) {
    await r.setFlag("nimble", "colorScheme", W);
  }
  i(F, "setColorScheme");
  let G = /* @__PURE__ */ H(() => l(j) === "dark"), U = /* @__PURE__ */ H(() => l(j) === "nimble"), X = /* @__PURE__ */ H(() => l(j) === "custom"), J = /* @__PURE__ */ H(() => {
    const W = l(k)?.customColors;
    return W ? { ...ha, ...W } : { ...ha };
  });
  async function ie(W, te) {
    const ce = l(k)?.customColors ?? {};
    await r.setFlag("nimble", "customColors", { ...ce, [W]: te });
  }
  i(ie, "setCustomColor");
  let Y = /* @__PURE__ */ H(() => l(X) ? Object.entries(io).map(([W, te]) => `${te}: ${l(J)[W]}`).join("; ") : "");
  Pn("actor", r), Pn("document", r), Pn("application", t.sheet), Pn("editingEnabled", R);
  var V = Sl();
  let se;
  var oe = h(V), ee = h(oe);
  uo(ee, {
    get actor() {
      return r;
    },
    get metaData() {
      return l(T);
    },
    get editingEnabled() {
      return l(x);
    },
    get hitDiceData() {
      return l(g);
    }
  });
  var ve = b(ee, 2);
  wo(ve, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return l(x);
    },
    get isBloodied() {
      return l(d);
    },
    get hitDiceData() {
      return l(g);
    },
    get hasMana() {
      return l(w);
    },
    get mana() {
      return l(y);
    },
    get wounds() {
      return l(O);
    },
    toggleWounds: E,
    resetWounds: p,
    updateCurrentHP: _,
    updateTempHP: v,
    updateCurrentMana: I,
    updateCurrentHitDice: A,
    rollHitDice: K,
    editCurrentHitDice: S
  });
  var le = b(ve, 2);
  No(le, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return l(x);
    }
  });
  var re = b(oe, 2);
  dl(re, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return l(x);
    },
    get hasMana() {
      return l(w);
    },
    get mana() {
      return l(y);
    },
    updateCurrentMana: I
  });
  var ke = b(re, 2);
  wl(ke, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return l(x);
    },
    toggleEditingEnabled: ne,
    get classItem() {
      return l(c);
    },
    get darkMode() {
      return l(G);
    },
    get colorScheme() {
      return l(j);
    },
    setColorScheme: F,
    get customColors() {
      return l(J);
    },
    setCustomColor: ie
  }), z(() => {
    se = Qe(V, 1, "nos-sheet", null, se, {
      "nos-sheet--dark": l(G),
      "nos-sheet--nimble": l(U),
      "nos-sheet--custom": l(X)
    }), Jt(V, `position: relative; ${l(Y) ?? ""}`);
  }), L(e, V), Se();
}
i(kl, "WhiteSheet");
const nt = class nt extends ro(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = kl;
    const r = t.document, a = r.isToken ? r.parent?.actor : t.document;
    this._actor = a ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t ? (t.width !== void 0 && t.width < nt.MIN_WIDTH && (t.width = nt.MIN_WIDTH), t.height !== void 0 && t.height < nt.MIN_HEIGHT && (t.height = nt.MIN_HEIGHT), super.setPosition(t)) : super.setPosition(t);
  }
  async _prepareContext(t) {
    return { ...await super._prepareContext(t), actor: this._actor, sheet: this };
  }
  async _onDropItem(t, n) {
    if (t.preventDefault(), t.stopPropagation(), Hooks.call("dropActorSheetData", this.document, this, n) === !1 || !this.document.isOwner) return !1;
    let a;
    try {
      a = await Item.implementation.fromDropData(n);
    } catch (f) {
      return console.error("nimble-white-sheet | Failed to resolve dropped item:", f), ui.notifications?.error("Failed to resolve the dropped item."), !1;
    }
    if (!a) return !1;
    const s = a.toObject();
    if (s.id = a.id, a.uuid && !s.uuid && (s.uuid = a.uuid), !!this._actor.items.has(a.id ?? ""))
      return this._onSortItem(t, s);
    const c = Array.isArray(s) ? s : [s], u = c.some((f) => f.type === "subclass");
    try {
      return u ? await this._onDropSubclassCreate(c) : await this._actor.createEmbeddedDocuments("Item", c);
    } catch (f) {
      return console.error("nimble-white-sheet | Failed to create item(s):", f), ui.notifications?.error("Failed to add the item to this character."), [];
    }
  }
  async _onDropSubclassCreate(t) {
    const n = Array.isArray(t) ? t : [t], r = CONFIG.NIMBLE, a = [];
    for (const s of n) {
      if (s.type !== "subclass") {
        a.push(s);
        continue;
      }
      const o = s, c = o.system?.parentClass, u = this._actor.levels?.character ?? 0;
      if (u < 3) {
        ui.notifications?.warn(`You must be at least level 3 to select a subclass. You are currently level ${u}.`);
        continue;
      }
      if (!Object.values(this._actor.classes ?? {}).some((_) => _.identifier === c)) {
        const _ = r?.classes?.[c ?? ""] ?? c;
        ui.notifications?.warn(`The subclass "${o.name}" requires the ${_} class.`);
        continue;
      }
      const d = this._actor.items.find((_) => _.type === "subclass" && _.system?.parentClass === c);
      if (d) {
        const _ = d.system, v = o.system?.identifier;
        if (_?.identifier && v && _.identifier === v) {
          ui.notifications?.warn(`You already have the "${d.name}" subclass.`);
          continue;
        }
        if (!await foundry.applications.api.DialogV2.confirm({
          content: `<p>You already have the <strong>${d.name}</strong> subclass.<br />Do you want to replace it with <strong>${o.name}</strong>?</p>`,
          rejectClose: !1,
          modal: !0
        })) continue;
        try {
          await this._actor.deleteEmbeddedDocuments("Item", [d.id]);
        } catch (w) {
          console.error("nimble-white-sheet | Failed to remove existing subclass:", w), ui.notifications?.error("Failed to remove the existing subclass.");
          continue;
        }
      }
      a.push(s);
    }
    if (a.length === 0) return [];
    try {
      return await this._actor.createEmbeddedDocuments("Item", a);
    } catch (s) {
      return console.error("nimble-white-sheet | Failed to create subclass item(s):", s), ui.notifications?.error("Failed to add the subclass to this character."), [];
    }
  }
};
i(nt, "WhiteCharacterSheet"), Re(nt, "MIN_WIDTH", 670), Re(nt, "MIN_HEIGHT", 400), Re(nt, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  form: { submitOnChange: !1 },
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Pr = nt;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    "nimble-white-sheet",
    Pr,
    {
      types: ["character"],
      makeDefault: !1,
      label: "Nimble White Sheet"
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
