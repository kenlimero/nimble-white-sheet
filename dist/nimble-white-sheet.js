var Qa = Object.defineProperty;
var Xa = (e) => {
  throw TypeError(e);
};
var Nr = (e, t, n) => t in e ? Qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t) => Qa(e, "name", { value: t, configurable: !0 });
var Pe = (e, t, n) => Nr(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Xa("Cannot " + n);
var m = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => t.has(e) ? Xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), ye = (e, t, n) => (la(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), Tr = /* @__PURE__ */ Symbol("filename"), Ir = "http://www.w3.org/1999/xhtml", Za = globalThis.process?.env?.NODE_ENV, A = Za && !Za.toLowerCase().startsWith("prod");
var mi = Array.isArray, Cr = Array.prototype.indexOf, Vt = Array.prototype.includes, Qn = Array.from, Gt = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, Ar = Object.getOwnPropertyDescriptors, Wr = Object.prototype, Dr = Array.prototype, gi = Object.getPrototypeOf, $a = Object.isExtensible;
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
const me = 2, ba = 4, Xn = 8, wi = 1 << 24, mt = 16, tt = 32, Qt = 64, La = 128, Ue = 512, ve = 1024, ge = 2048, et = 4096, Oe = 8192, Nt = 16384, Ha = 32768, dn = 65536, Bn = 1 << 17, Si = 1 << 18, gn = 1 << 19, Or = 1 << 20, ht = 1 << 25, Dt = 32768, ma = 1 << 21, Zn = 1 << 22, Tt = 1 << 23, nn = /* @__PURE__ */ Symbol("$state"), Lr = /* @__PURE__ */ Symbol(""), Ei = /* @__PURE__ */ Symbol("proxy path");
var an;
const $t = new (an = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, i(an, "StaleReactionError"), an)();
function Hr(e) {
  if (A) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
i(Hr, "lifecycle_outside_component");
function Pr() {
  if (A) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
i(Pr, "async_derived_orphan");
function ei() {
  if (A) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
i(ei, "bind_invalid_checkbox_value");
function Rr() {
  if (A) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
i(Rr, "derived_references_self");
function ki(e, t, n) {
  if (A) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
i(ki, "each_key_duplicate");
function Fr(e) {
  if (A) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
i(Fr, "effect_in_teardown");
function jr() {
  if (A) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
i(jr, "effect_in_unowned_derived");
function zr(e) {
  if (A) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
i(zr, "effect_orphan");
function Ur() {
  if (A) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
i(Ur, "effect_update_depth_exceeded");
function Br(e) {
  if (A) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
i(Br, "rune_outside_svelte");
function qr() {
  if (A) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
i(qr, "state_descriptors_fixed");
function Kr() {
  if (A) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
i(Kr, "state_prototype_fixed");
function Vr() {
  if (A) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
i(Vr, "state_unsafe_mutation");
function Gr() {
  if (A) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
i(Gr, "svelte_boundary_reset_onerror");
var $n = "font-weight: bold", ea = "font-weight: normal";
function Yr() {
  A ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, $n, ea) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
i(Yr, "lifecycle_double_unmount");
function ua(e) {
  A ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, $n, ea) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
i(ua, "state_proxy_equality_mismatch");
function Jr() {
  A ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, $n, ea) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
i(Jr, "state_proxy_unmount");
function Qr() {
  A ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", $n, ea) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
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
  return e?.[Ei]?.(t), e;
}
i(Ii, "tag_proxy");
function Zr(e) {
  const t = new Error(), n = $r();
  return n.length === 0 ? null : (n.unshift(`
`), Gt(t, "stack", {
    value: n.join(`
`)
  }), Gt(t, "name", {
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
let Dn = null;
function ti(e) {
  Dn = e;
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
  }, A && (be.function = n, Dn = n);
}
i(we, "push");
function Se(e) {
  var t = (
    /** @type {ComponentContext} */
    be
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Yi(a);
  }
  return t.i = !0, be = t.p, A && (Dn = be?.function ?? null), /** @type {T} */
  {};
}
i(Se, "pop");
function Ci() {
  return !0;
}
i(Ci, "is_runes");
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
let Ht = [];
function Ai() {
  var e = Ht;
  Ht = [], Mr(e);
}
i(Ai, "run_micro_tasks");
function It(e) {
  if (Ht.length === 0 && !kn) {
    var t = Ht;
    queueMicrotask(() => {
      t === Ht && Ai();
    });
  }
  Ht.push(e);
}
i(It, "queue_micro_task");
function ns() {
  for (; Ht.length > 0; )
    Ai();
}
i(ns, "flush_tasks");
const ga = /* @__PURE__ */ new WeakMap();
function Wi(e) {
  var t = ae;
  if (t === null)
    return Z.f |= Tt, e;
  if (A && e instanceof Error && !ga.has(e) && ga.set(e, as(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw A && !t.parent && e instanceof Error && Di(e), e;
    t.b.error(e);
  } else
    _n(e, t);
}
i(Wi, "handle_error");
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
  throw A && e instanceof Error && Di(e), e;
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
function Di(e) {
  const t = ga.get(e);
  t && (Gt(e, "message", {
    value: t.message
  }), Gt(e, "stack", {
    value: t.stack
  }));
}
i(Di, "apply_adjustments");
const is = -7169;
function de(e, t) {
  e.f = e.f & is | t;
}
i(de, "set_signal_status");
function Pa(e) {
  (e.f & Ue) !== 0 || e.deps === null ? de(e, ve) : de(e, et);
}
i(Pa, "update_derived_status");
function Mi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & Dt) === 0 || (t.f ^= Dt, Mi(
        /** @type {Derived} */
        t.deps
      ));
}
i(Mi, "clear_marked");
function Oi(e, t, n) {
  (e.f & ge) !== 0 ? t.add(e) : (e.f & et) !== 0 && n.add(e), Mi(e.deps), de(e, ve);
}
i(Oi, "defer_effect");
const Rn = /* @__PURE__ */ new Set();
let ie = null, pa = null, Je = null, Ne = [], ta = null, ya = !1, kn = !1;
var rn, sn, Rt, on, In, Cn, Ft, vt, ln, ut, wa, Sa, Li;
const Gn = class Gn {
  constructor() {
    B(this, ut);
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
    B(this, rn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, sn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    B(this, Rt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    B(this, on, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    B(this, In, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    B(this, Cn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    B(this, Ft, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    B(this, vt, /* @__PURE__ */ new Map());
    Pe(this, "is_fork", !1);
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
        de(a, ge), Qe(a);
      for (a of n.m)
        de(a, et), Qe(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Ne = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      ye(this, ut, wa).call(this, s, n, a);
    if (this.is_deferred()) {
      ye(this, ut, Sa).call(this, a), ye(this, ut, Sa).call(this, n);
      for (const [s, r] of m(this, vt))
        Fi(s, r);
    } else {
      for (const s of m(this, rn)) s();
      m(this, rn).clear(), m(this, Rt) === 0 && ye(this, ut, Li).call(this), pa = this, ie = null, ni(a), ni(n), pa = null, m(this, In)?.resolve();
    }
    Je = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & Tt) === 0 && (this.current.set(t, t.v), Je?.set(t, t.v));
  }
  activate() {
    ie = this, this.apply();
  }
  deactivate() {
    ie === this && (ie = null, Je = null);
  }
  flush() {
    if (this.activate(), Ne.length > 0) {
      if (Hi(), ie !== null && ie !== this)
        return;
    } else m(this, Rt) === 0 && this.process([]);
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
    q(this, Rt, m(this, Rt) + 1), t && q(this, on, m(this, on) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    q(this, Rt, m(this, Rt) - 1), t && q(this, on, m(this, on) - 1), !m(this, ln) && (q(this, ln, !0), It(() => {
      q(this, ln, !1), this.is_deferred() ? Ne.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of m(this, Cn))
      m(this, Ft).delete(t), de(t, ge), Qe(t);
    for (const t of m(this, Ft))
      de(t, et), Qe(t);
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
    return (m(this, In) ?? q(this, In, pi())).promise;
  }
  static ensure() {
    if (ie === null) {
      const t = ie = new Gn();
      Rn.add(ie), kn || It(() => {
        ie === t && t.flush();
      });
    }
    return ie;
  }
  apply() {
  }
};
rn = new WeakMap(), sn = new WeakMap(), Rt = new WeakMap(), on = new WeakMap(), In = new WeakMap(), Cn = new WeakMap(), Ft = new WeakMap(), vt = new WeakMap(), ln = new WeakMap(), ut = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = /* @__PURE__ */ i(function(t, n, a) {
  t.f ^= ve;
  for (var s = t.first, r = null; s !== null; ) {
    var o = s.f, u = (o & (tt | Qt)) !== 0, l = u && (o & ve) !== 0, f = l || (o & Oe) !== 0 || m(this, vt).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= ve : r !== null && (o & (ba | Xn | wi)) !== 0 ? r.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : On(s) && ((o & mt) !== 0 && m(this, Ft).add(s), Tn(s));
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
Sa = /* @__PURE__ */ i(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Oi(t[n], m(this, Cn), m(this, Ft));
}, "#defer_effects"), Li = /* @__PURE__ */ i(function() {
  var s;
  if (Rn.size > 1) {
    this.previous.clear();
    var t = Je, n = !0;
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
        var a = Ne;
        Ne = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Pi(d, u, l, f);
        if (Ne.length > 0) {
          ie = r, r.apply();
          for (const d of Ne)
            ye(s = r, ut, wa).call(s, d, [], []);
          r.deactivate();
        }
        Ne = a;
      }
    }
    ie = null, Je = t;
  }
  this.committed = !0, Rn.delete(this);
}, "#commit"), i(Gn, "Batch");
let Ct = Gn;
function rs(e) {
  var t = kn;
  kn = !0;
  try {
    for (var n; ; ) {
      if (ns(), Ne.length === 0 && (ie?.flush(), Ne.length === 0))
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
  var e = A ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Ne.length > 0; ) {
      var n = Ct.ensure();
      if (t++ > 1e3) {
        if (A) {
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
      if (n.process(Ne), At.clear(), A)
        for (const r of n.current.keys())
          e.add(r);
    }
  } finally {
    if (Ne = [], ya = !1, ta = null, A)
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
    A && Gt(e, "stack", { value: "" }), _n(e, ta);
  }
}
i(ss, "infinite_loop_guard");
let ft = null;
function ni(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (Nt | Oe)) === 0 && On(a) && (ft = /* @__PURE__ */ new Set(), Tn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? $i(a) : a.fn = null), ft?.size > 0)) {
        At.clear();
        for (const s of ft) {
          if ((s.f & (Nt | Oe)) !== 0) continue;
          const r = [s];
          let o = s.parent;
          for (; o !== null; )
            ft.has(o) && (ft.delete(o), r.push(o)), o = o.parent;
          for (let u = r.length - 1; u >= 0; u--) {
            const l = r[u];
            (l.f & (Nt | Oe)) === 0 && Tn(l);
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
      ) : (r & (Zn | mt)) !== 0 && (r & ge) === 0 && Ri(s, t, a) && (de(s, ge), Qe(
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
      if (Vt.call(t, s))
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
function Qe(e) {
  for (var t = ta = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === ae && (n & mt) !== 0 && (n & Si) === 0)
      return;
    if ((n & (Qt | tt)) !== 0) {
      if ((n & ve) === 0) return;
      t.f ^= ve;
    }
  }
  Ne.push(t);
}
i(Qe, "schedule_effect");
function Fi(e, t) {
  if (!((e.f & tt) !== 0 && (e.f & ve) !== 0)) {
    (e.f & ge) !== 0 ? t.d.push(e) : (e.f & et) !== 0 && t.m.push(e), de(e, ve);
    for (var n = e.first; n !== null; )
      Fi(n, t), n = n.next;
  }
}
i(Fi, "reset_branch");
function ji(e) {
  let t = 0, n = Yt(0), a;
  return A && nt(n, "createSubscriber version"), () => {
    Ua() && (c(n), Ji(() => (t === 0 && (a = cr(() => e(() => xn(n)))), t += 1, () => {
      It(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, xn(n));
      });
    })));
  };
}
i(ji, "createSubscriber");
var os = dn | gn | La;
function ls(e, t, n) {
  new Ea(e, t, n);
}
i(ls, "boundary");
var Fe, Oa, it, jt, rt, je, xe, st, _t, Et, zt, kt, cn, Ut, un, fn, ot, Yn, _e, cs, us, ka, jn, zn, xa;
const Va = class Va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    B(this, _e);
    /** @type {Boundary | null} */
    Pe(this, "parent");
    Pe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    B(this, Fe);
    /** @type {TemplateNode | null} */
    B(this, Oa, null);
    /** @type {BoundaryProps} */
    B(this, it);
    /** @type {((anchor: Node) => void)} */
    B(this, jt);
    /** @type {Effect} */
    B(this, rt);
    /** @type {Effect | null} */
    B(this, je, null);
    /** @type {Effect | null} */
    B(this, xe, null);
    /** @type {Effect | null} */
    B(this, st, null);
    /** @type {DocumentFragment | null} */
    B(this, _t, null);
    /** @type {TemplateNode | null} */
    B(this, Et, null);
    B(this, zt, 0);
    B(this, kt, 0);
    B(this, cn, !1);
    B(this, Ut, !1);
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
    B(this, ot, null);
    B(this, Yn, ji(() => (q(this, ot, Yt(m(this, zt))), A && nt(m(this, ot), "$effect.pending()"), () => {
      q(this, ot, null);
    })));
    q(this, Fe, t), q(this, it, n), q(this, jt, a), this.parent = /** @type {Effect} */
    ae.b, this.is_pending = !!m(this, it).pending, q(this, rt, Ba(() => {
      ae.b = this;
      {
        var s = ye(this, _e, ka).call(this);
        try {
          q(this, je, ze(() => a(s)));
        } catch (r) {
          this.error(r);
        }
        m(this, kt) > 0 ? ye(this, _e, zn).call(this) : this.is_pending = !1;
      }
      return () => {
        m(this, Et)?.remove();
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
    ye(this, _e, xa).call(this, t), q(this, zt, m(this, zt) + t), !(!m(this, ot) || m(this, cn)) && (q(this, cn, !0), It(() => {
      q(this, cn, !1), m(this, ot) && bn(m(this, ot), m(this, zt));
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
    if (m(this, Ut) || !n && !a)
      throw t;
    m(this, je) && (Ie(m(this, je)), q(this, je, null)), m(this, xe) && (Ie(m(this, xe)), q(this, xe, null)), m(this, st) && (Ie(m(this, st)), q(this, st, null));
    var s = !1, r = !1;
    const o = /* @__PURE__ */ i(() => {
      if (s) {
        Qr();
        return;
      }
      s = !0, r && Gr(), Ct.ensure(), q(this, zt, 0), m(this, st) !== null && qt(m(this, st), () => {
        q(this, st, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, je, ye(this, _e, jn).call(this, () => (q(this, Ut, !1), ze(() => m(this, jt).call(this, m(this, Fe)))))), m(this, kt) > 0 ? ye(this, _e, zn).call(this) : this.is_pending = !1;
    }, "reset");
    It(() => {
      try {
        r = !0, n?.(t, o), r = !1;
      } catch (u) {
        _n(u, m(this, rt) && m(this, rt).parent);
      }
      a && q(this, st, ye(this, _e, jn).call(this, () => {
        Ct.ensure(), q(this, Ut, !0);
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
          q(this, Ut, !1);
        }
      }));
    });
  }
};
Fe = new WeakMap(), Oa = new WeakMap(), it = new WeakMap(), jt = new WeakMap(), rt = new WeakMap(), je = new WeakMap(), xe = new WeakMap(), st = new WeakMap(), _t = new WeakMap(), Et = new WeakMap(), zt = new WeakMap(), kt = new WeakMap(), cn = new WeakMap(), Ut = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), ot = new WeakMap(), Yn = new WeakMap(), _e = new WeakSet(), cs = /* @__PURE__ */ i(function() {
  try {
    q(this, je, ze(() => m(this, jt).call(this, m(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), us = /* @__PURE__ */ i(function() {
  const t = m(this, it).pending;
  t && (q(this, xe, ze(() => t(m(this, Fe)))), It(() => {
    var n = ye(this, _e, ka).call(this);
    q(this, je, ye(this, _e, jn).call(this, () => (Ct.ensure(), ze(() => m(this, jt).call(this, n))))), m(this, kt) > 0 ? ye(this, _e, zn).call(this) : (qt(
      /** @type {Effect} */
      m(this, xe),
      () => {
        q(this, xe, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), ka = /* @__PURE__ */ i(function() {
  var t = m(this, Fe);
  return this.is_pending && (q(this, Et, Wt()), m(this, Fe).before(m(this, Et)), t = m(this, Et)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
jn = /* @__PURE__ */ i(function(t) {
  var n = ae, a = Z, s = be;
  Ze(m(this, rt)), qe(m(this, rt)), vn(m(this, rt).ctx);
  try {
    return t();
  } catch (r) {
    return Wi(r), null;
  } finally {
    Ze(n), qe(a), vn(s);
  }
}, "#run"), zn = /* @__PURE__ */ i(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    m(this, it).pending
  );
  m(this, je) !== null && (q(this, _t, document.createDocumentFragment()), m(this, _t).append(
    /** @type {TemplateNode} */
    m(this, Et)
  ), nr(m(this, je), m(this, _t))), m(this, xe) === null && q(this, xe, ze(() => t(m(this, Fe))));
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
  if (q(this, kt, m(this, kt) + t), m(this, kt) === 0) {
    this.is_pending = !1;
    for (const a of m(this, un))
      de(a, ge), Qe(a);
    for (const a of m(this, fn))
      de(a, et), Qe(a);
    m(this, un).clear(), m(this, fn).clear(), m(this, xe) && qt(m(this, xe), () => {
      q(this, xe, null);
    }), m(this, _t) && (m(this, Fe).before(m(this, _t)), q(this, _t, null));
  }
}, "#update_pending_count"), i(Va, "Boundary");
let Ea = Va;
function fs(e, t, n, a) {
  const s = Ra;
  var r = e.filter((_) => !_.settled);
  if (n.length === 0 && r.length === 0) {
    a(t.map(s));
    return;
  }
  var o = ie, u = (
    /** @type {Effect} */
    ae
  ), l = ds(), f = r.length === 1 ? r[0].promise : r.length > 1 ? Promise.all(r.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (p) {
      (u.f & Nt) === 0 && _n(p, u);
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
  var e = ae, t = Z, n = be, a = ie;
  if (A)
    var s = Nn;
  return /* @__PURE__ */ i(function(o = !0) {
    Ze(e), qe(t), vn(n), o && a?.activate(), A && qn(s);
  }, "restore");
}
i(ds, "capture");
function Na() {
  Ze(null), qe(null), vn(null), A && qn(null);
}
i(Na, "unset_context");
const vs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = me | ge, n = Z !== null && (Z.f & me) !== 0 ? (
    /** @type {Derived} */
    Z
  ) : null;
  return ae !== null && (ae.f |= gn), {
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
    parent: n ?? ae,
    ac: null
  };
}
i(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function _s(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ae
  );
  a === null && Pr();
  var s = (
    /** @type {Boundary} */
    a.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Yt(
    /** @type {V} */
    he
  );
  A && (o.label = t);
  var u = !Z, l = /* @__PURE__ */ new Map();
  return Ws(() => {
    var f = pi();
    r = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === ie && d.committed && d.deactivate(), Na();
      });
    } catch (p) {
      f.reject(p), Na();
    }
    var d = (
      /** @type {Batch} */
      ie
    );
    if (u) {
      var v = s.is_rendered();
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject($t), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ i((p, w = void 0) => {
      if (d.activate(), w)
        w !== $t && (o.f |= Tt, bn(o, w));
      else {
        (o.f & Tt) !== 0 && (o.f ^= Tt), bn(o, p);
        for (const [C, y] of l) {
          if (l.delete(C), C === d) break;
          y.reject($t);
        }
      }
      u && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (p) => _(null, p || "unknown"));
  }), Gi(() => {
    for (const f of l.values())
      f.reject($t);
  }), A && (o.f |= Zn), new Promise((f) => {
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
function j(e) {
  const t = /* @__PURE__ */ Ra(e);
  return ar(t), t;
}
i(j, "user_derived");
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
      Ie(
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
      return (t.f & Nt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
i(bs, "get_derived_parent_effect");
function Fa(e) {
  var t, n = ae;
  if (Ze(bs(e)), A) {
    let a = hn;
    ai(/* @__PURE__ */ new Set());
    try {
      Vt.call(fa, e) && Rr(), fa.push(e), e.f &= ~Dt, Ta(e), t = Ia(e);
    } finally {
      Ze(n), ai(a), fa.pop();
    }
  } else
    try {
      e.f &= ~Dt, Ta(e), t = Ia(e);
    } finally {
      Ze(n);
    }
  return t;
}
i(Fa, "execute_derived");
function zi(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = rr(), (!ie?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, ve);
    return;
  }
  Jt || (Je !== null ? (Ua() || ie?.is_fork) && Je.set(e, t) : Pa(e));
}
i(zi, "update_derived");
let hn = /* @__PURE__ */ new Set();
const At = /* @__PURE__ */ new Map();
function ai(e) {
  hn = e;
}
i(ai, "set_eager_effects");
let ja = !1;
function ms() {
  ja = !0;
}
i(ms, "set_eager_effects_deferred");
function Yt(e, t) {
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
i(Yt, "source");
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  const n = Yt(e);
  return ar(n), n;
}
i(De, "state");
// @__NO_SIDE_EFFECTS__
function gs(e, t = !1, n = !0) {
  const a = Yt(e);
  return t || (a.equals = Ti), a;
}
i(gs, "mutable_source");
function Me(e, t, n = !1) {
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xe || (Z.f & Bn) !== 0) && Ci() && (Z.f & (me | mt | Zn | Bn)) !== 0 && (Be === null || !Vt.call(Be, e)) && Vr();
  let a = n ? en(t) : t;
  return A && Ii(
    a,
    /** @type {string} */
    e.label
  ), bn(e, a);
}
i(Me, "set");
function bn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Jt ? At.set(e, t) : At.set(e, n), e.v = t;
    var a = Ct.ensure();
    if (a.capture(e, n), A) {
      if (ae !== null) {
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
      ae !== null && (e.set_during_effect = !0);
    }
    if ((e.f & me) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ge) !== 0 && Fa(s), Pa(s);
    }
    e.wv = rr(), Bi(e, ge), ae !== null && (ae.f & ve) !== 0 && (ae.f & (tt | Qt)) === 0 && (Re === null ? Ms([e]) : Re.push(e)), !a.is_fork && hn.size > 0 && !ja && Ui();
  }
  return t;
}
i(bn, "internal_set");
function Ui() {
  ja = !1;
  for (const e of hn)
    (e.f & ve) !== 0 && de(e, et), On(e) && Tn(e);
  hn.clear();
}
i(Ui, "flush_eager_effects");
function xn(e) {
  Me(e, e.v + 1);
}
i(xn, "increment");
function Bi(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var r = n[s], o = r.f;
      if (A && (o & Bn) !== 0) {
        hn.add(r);
        continue;
      }
      var u = (o & ge) === 0;
      if (u && de(r, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          r
        );
        Je?.delete(l), (o & Dt) === 0 && (o & Ue && (r.f |= Dt), Bi(l, et));
      } else u && ((o & mt) !== 0 && ft !== null && ft.add(
        /** @type {Effect} */
        r
      ), Qe(
        /** @type {Effect} */
        r
      ));
    }
}
i(Bi, "mark_reactions");
const ps = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function en(e) {
  if (typeof e != "object" || e === null || nn in e)
    return e;
  const t = gi(e);
  if (t !== Wr && t !== Dr)
    return e;
  var n = /* @__PURE__ */ new Map(), a = mi(e), s = /* @__PURE__ */ De(0), r = Kt, o = /* @__PURE__ */ i((d) => {
    if (Kt === r)
      return d();
    var v = Z, _ = Kt;
    qe(null), oi(r);
    var p = d();
    return qe(v), oi(_), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ De(
    /** @type {any[]} */
    e.length
  )), A && (e = /** @type {any} */
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
        nt(_, Lt(u, v));
      l = !1;
    }
  }
  return i(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && qr();
        var p = n.get(v);
        return p === void 0 ? p = o(() => {
          var w = /* @__PURE__ */ De(_.value);
          return n.set(v, w), A && typeof v == "string" && nt(w, Lt(u, v)), w;
        }) : Me(p, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const p = o(() => /* @__PURE__ */ De(he));
            n.set(v, p), xn(s), A && nt(p, Lt(u, v));
          }
        } else
          Me(_, he), xn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === nn)
          return e;
        if (A && v === Ei)
          return f;
        var p = n.get(v), w = v in d;
        if (p === void 0 && (!w || tn(d, v)?.writable) && (p = o(() => {
          var y = en(w ? d[v] : he), M = /* @__PURE__ */ De(y);
          return A && nt(M, Lt(u, v)), M;
        }), n.set(v, p)), p !== void 0) {
          var C = c(p);
          return C === he ? void 0 : C;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var p = n.get(v);
          p && (_.value = c(p));
        } else if (_ === void 0) {
          var w = n.get(v), C = w?.v;
          if (w !== void 0 && C !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: C,
              writable: !0
            };
        }
        return _;
      },
      has(d, v) {
        if (v === nn)
          return !0;
        var _ = n.get(v), p = _ !== void 0 && _.v !== he || Reflect.has(d, v);
        if (_ !== void 0 || ae !== null && (!p || tn(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var C = p ? en(d[v]) : he, y = /* @__PURE__ */ De(C);
            return A && nt(y, Lt(u, v)), y;
          }), n.set(v, _));
          var w = c(_);
          if (w === he)
            return !1;
        }
        return p;
      },
      set(d, v, _, p) {
        var w = n.get(v), C = v in d;
        if (a && v === "length")
          for (var y = _; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var M = n.get(y + "");
            M !== void 0 ? Me(M, he) : y in d && (M = o(() => /* @__PURE__ */ De(he)), n.set(y + "", M), A && nt(M, Lt(u, y)));
          }
        if (w === void 0)
          (!C || tn(d, v)?.writable) && (w = o(() => /* @__PURE__ */ De(void 0)), A && nt(w, Lt(u, v)), Me(w, en(_)), n.set(v, w));
        else {
          C = w.v !== he;
          var oe = o(() => en(_));
          Me(w, oe);
        }
        var S = Reflect.getOwnPropertyDescriptor(d, v);
        if (S?.set && S.set.call(p, _), !C) {
          if (a && typeof v == "string") {
            var D = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(v);
            Number.isInteger(R) && R >= D.v && Me(D, R + 1);
          }
          xn(s);
        }
        return !0;
      },
      ownKeys(d) {
        c(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var C = n.get(w);
          return C === void 0 || C.v !== he;
        });
        for (var [_, p] of n)
          p.v !== he && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        Kr();
      }
    }
  );
}
i(en, "proxy");
function Lt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : ps.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
i(Lt, "get_label");
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
function Ss() {
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
i(Ss, "init_array_prototype_warnings");
var ii, za, qi, Ki;
function Es() {
  if (ii === void 0) {
    ii = window, za = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    qi = tn(t, "firstChild").get, Ki = tn(t, "nextSibling").get, $a(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $a(n) && (n.__t = void 0), A && (e.__svelte_meta = null, Ss());
  }
}
i(Es, "init_operations");
function Wt(e = "") {
  return document.createTextNode(e);
}
i(Wt, "create_text");
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return (
    /** @type {TemplateNode | null} */
    qi.call(e)
  );
}
i(xt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(e)
  );
}
i(Mn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ xt(e);
}
i(h, "child");
function bt(e, t = !1) {
  {
    var n = /* @__PURE__ */ xt(e);
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
  var t = Z, n = ae;
  qe(null), Ze(null);
  try {
    return e();
  } finally {
    qe(t), Ze(n);
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
  ae === null && (Z === null && zr(e), jr()), Jt && Fr(e);
}
i(Ts, "validate_effect");
function Is(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
i(Is, "push_effect");
function Mt(e, t, n) {
  var a = ae;
  if (A)
    for (; a !== null && (a.f & Bn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Oe) !== 0 && (e |= Oe);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | ge | Ue,
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
      Tn(s), s.f |= Ha;
    } catch (u) {
      throw Ie(s), u;
    }
  else t !== null && Qe(s);
  var r = s;
  if (n && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  (r.f & gn) === 0 && (r = r.first, (e & mt) !== 0 && (e & dn) !== 0 && r !== null && (r.f |= dn)), r !== null && (r.parent = a, a !== null && Is(r, a), Z !== null && (Z.f & me) !== 0 && (e & Qt) === 0)) {
    var o = (
      /** @type {Derived} */
      Z
    );
    (o.effects ??= []).push(r);
  }
  return s;
}
i(Mt, "create_effect");
function Ua() {
  return Z !== null && !Xe;
}
i(Ua, "effect_tracking");
function Gi(e) {
  const t = Mt(Xn, null, !1);
  return de(t, ve), t.teardown = e, t;
}
i(Gi, "teardown");
function Cs(e) {
  Ts("$effect"), A && Gt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ae.f
  ), n = !Z && (t & tt) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return Yi(e);
}
i(Cs, "user_effect");
function Yi(e) {
  return Mt(ba | Or, e, !1);
}
i(Yi, "create_user_effect");
function As(e) {
  Ct.ensure();
  const t = Mt(Qt | gn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? qt(t, () => {
      Ie(t), a(void 0);
    }) : (Ie(t), a(void 0));
  });
}
i(As, "component_root");
function Ws(e) {
  return Mt(Zn | gn, e, !0);
}
i(Ws, "async_effect");
function Ji(e, t = 0) {
  return Mt(Xn | t, e, !0);
}
i(Ji, "render_effect");
function K(e, t = [], n = [], a = []) {
  fs(a, t, n, (s) => {
    Mt(Xn, () => e(...s.map(c)), !0);
  });
}
i(K, "template_effect");
function Ba(e, t = 0) {
  var n = Mt(mt | t, e, !0);
  return A && (n.dev_stack = Nn), n;
}
i(Ba, "block");
function ze(e) {
  return Mt(tt | gn, e, !0);
}
i(ze, "branch");
function Qi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Jt, a = Z;
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
    (n.f & Qt) !== 0 ? n.parent = null : Ie(n, t), n = a;
  }
}
i(Xi, "destroy_effect_children");
function Ds(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & tt) === 0 && Ie(t), t = n;
  }
}
i(Ds, "destroy_block_effect_children");
function Ie(e, t = !0) {
  var n = !1;
  (t || (e.f & Si) !== 0) && e.nodes !== null && e.nodes.end !== null && (Zi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Xi(e, t && !n), Kn(e, 0), de(e, Nt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const r of a)
      r.stop();
  Qi(e);
  var s = e.parent;
  s !== null && s.first !== null && $i(e), A && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
i(Ie, "destroy_effect");
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
function qt(e, t, n = !0) {
  var a = [];
  er(e, a, !0);
  var s = /* @__PURE__ */ i(() => {
    n && Ie(e), t && t();
  }, "fn"), r = a.length;
  if (r > 0) {
    var o = /* @__PURE__ */ i(() => --r || s(), "check");
    for (var u of a)
      u.out(o);
  } else
    s();
}
i(qt, "pause_effect");
function er(e, t, n) {
  if ((e.f & Oe) === 0) {
    e.f ^= Oe;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || n) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var r = s.next, o = (s.f & dn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & tt) !== 0 && (e.f & mt) !== 0;
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
  if ((e.f & Oe) !== 0) {
    e.f ^= Oe, (e.f & ve) === 0 && (de(e, ge), Qe(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & dn) !== 0 || (n.f & tt) !== 0;
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
let Un = !1, Jt = !1;
function si(e) {
  Jt = e;
}
i(si, "set_is_destroying_effect");
let Z = null, Xe = !1;
function qe(e) {
  Z = e;
}
i(qe, "set_active_reaction");
let ae = null;
function Ze(e) {
  ae = e;
}
i(Ze, "set_active_effect");
let Be = null;
function ar(e) {
  Z !== null && (Be === null ? Be = [e] : Be.push(e));
}
i(ar, "push_reaction_value");
let Te = null, Ae = 0, Re = null;
function Ms(e) {
  Re = e;
}
i(Ms, "set_untracked_writes");
let ir = 1, Pt = 0, Kt = Pt;
function oi(e) {
  Kt = e;
}
i(oi, "set_update_version");
function rr() {
  return ++ir;
}
i(rr, "increment_write_version");
function On(e) {
  var t = e.f;
  if ((t & ge) !== 0)
    return !0;
  if (t & me && (e.f &= ~Dt), (t & et) !== 0) {
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
    Je === null && de(e, ve);
  }
  return !1;
}
i(On, "is_dirty");
function sr(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Be !== null && Vt.call(Be, e)))
    for (var s = 0; s < a.length; s++) {
      var r = a[s];
      (r.f & me) !== 0 ? sr(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (n ? de(r, ge) : (r.f & ve) !== 0 && de(r, et), Qe(
        /** @type {Effect} */
        r
      ));
    }
}
i(sr, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Te, n = Ae, a = Re, s = Z, r = Be, o = be, u = Xe, l = Kt, f = e.f;
  Te = /** @type {null | Value[]} */
  null, Ae = 0, Re = null, Z = (f & (tt | Qt)) === 0 ? e : null, Be = null, vn(e.ctx), Xe = !1, Kt = ++Pt, e.ac !== null && (na(() => {
    e.ac.abort($t);
  }), e.ac = null);
  try {
    e.f |= ma;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, p = ie?.is_fork;
    if (Te !== null) {
      var w;
      if (p || Kn(e, Ae), _ !== null && Ae > 0)
        for (_.length = Ae + Te.length, w = 0; w < Te.length; w++)
          _[Ae + w] = Te[w];
      else
        e.deps = _ = Te;
      if (Ua() && (e.f & Ue) !== 0)
        for (w = Ae; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !p && _ !== null && Ae < _.length && (Kn(e, Ae), _.length = Ae);
    if (Ci() && Re !== null && !Xe && _ !== null && (e.f & (me | et | ge)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Re.length; w++)
        sr(
          Re[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Pt++, s.deps !== null)
        for (let C = 0; C < n; C += 1)
          s.deps[C].rv = Pt;
      if (t !== null)
        for (const C of t)
          C.rv = Pt;
      Re !== null && (a === null ? a = Re : a.push(.../** @type {Source[]} */
      Re));
    }
    return (e.f & Tt) !== 0 && (e.f ^= Tt), v;
  } catch (C) {
    return Wi(C);
  } finally {
    e.f ^= ma, Te = t, Ae = n, Re = a, Z = s, Be = r, vn(o), Xe = u, Kt = l;
  }
}
i(Ia, "update_reaction");
function Os(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Cr.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Te === null || !Vt.call(Te, t))) {
    var r = (
      /** @type {Derived} */
      t
    );
    (r.f & Ue) !== 0 && (r.f ^= Ue, r.f &= ~Dt), Pa(r), Ta(r), Kn(r, 0);
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
  if ((t & Nt) === 0) {
    de(e, ve);
    var n = ae, a = Un;
    if (ae = e, Un = !0, A) {
      var s = Dn;
      ti(e.component_function);
      var r = (
        /** @type {any} */
        Nn
      );
      qn(e.dev_stack ?? Nn);
    }
    try {
      (t & (mt | wi)) !== 0 ? Ds(e) : Xi(e), Qi(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ir;
      var u;
      A && Xr && (e.f & ge) !== 0 && e.deps;
    } finally {
      Un = a, ae = n, A && (ti(s), qn(r));
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
  if (Z !== null && !Xe) {
    var a = ae !== null && (ae.f & Nt) !== 0;
    if (!a && (Be === null || !Vt.call(Be, e))) {
      var s = Z.deps;
      if ((Z.f & ma) !== 0)
        e.rv < Pt && (e.rv = Pt, Te === null && s !== null && s[Ae] === e ? Ae++ : Te === null ? Te = [e] : Te.push(e));
      else {
        (Z.deps ??= []).push(e);
        var r = e.reactions;
        r === null ? e.reactions = [Z] : Vt.call(r, Z) || r.push(Z);
      }
    }
  }
  if (A && vs.delete(e), Jt && At.has(e))
    return At.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Jt) {
      var u = o.v;
      return ((o.f & ve) === 0 && o.reactions !== null || lr(o)) && (u = Fa(o)), At.set(o, u), u;
    }
    var l = (o.f & Ue) === 0 && !Xe && Z !== null && (Un || (Z.f & Ue) !== 0), f = o.deps === null;
    On(o) && (l && (o.f |= Ue), zi(o)), l && !f && or(o);
  }
  if (Je?.has(e))
    return Je.get(e);
  if ((e.f & Tt) !== 0)
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
    if (At.has(t) || (t.f & me) !== 0 && lr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
i(lr, "depends_on_old_values");
function cr(e) {
  var t = Xe;
  try {
    return Xe = !0, e();
  } finally {
    Xe = t;
  }
}
i(cr, "untrack");
const ur = /* @__PURE__ */ new Set(), Ca = /* @__PURE__ */ new Set();
function Hs(e, t, n, a = {}) {
  function s(r) {
    if (a.capture || Sn.call(t, r), !r.cancelBubble)
      return na(() => n?.call(this, r));
  }
  return i(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? It(() => {
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
function Ce(e) {
  for (var t = 0; t < e.length; t++)
    ur.add(e[t]);
  for (var n of Ca)
    n(e);
}
i(Ce, "delegate");
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
    Gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || n;
      }
    });
    var d = Z, v = ae;
    qe(null), Ze(null);
    try {
      for (var _, p = []; r !== null; ) {
        var w = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var C = r["__" + a];
          C != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === r) && C.call(r, e);
        } catch (y) {
          _ ? p.push(y) : _ = y;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        r = w;
      }
      if (_) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(d), Ze(v);
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
    ae
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
i(Vn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, r = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = fr(r ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ xt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || za ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(o)
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
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Wt();
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
function W(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
i(W, "set_text");
function Fs(e, t) {
  return js(e, t);
}
i(Fs, "mount");
const Xt = /* @__PURE__ */ new Map();
function js(e, { target: t, anchor: n, props: a = {}, events: s, context: r, intro: o = !0 }) {
  Es();
  var u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ i((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var p = v[_];
      if (!u.has(p)) {
        u.add(p);
        var w = Rs(p);
        t.addEventListener(p, Sn, { passive: w });
        var C = Xt.get(p);
        C === void 0 ? (document.addEventListener(p, Sn, { passive: w }), Xt.set(p, 1)) : Xt.set(p, C + 1);
      }
    }
  }, "event_handle");
  l(Qn(ur)), Ca.add(l);
  var f = void 0, d = As(() => {
    var v = n ?? t.appendChild(Wt());
    return ls(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ i(() => {
        }, "pending")
      },
      (_) => {
        we({});
        var p = (
          /** @type {ComponentContext} */
          be
        );
        r && (p.c = r), s && (a.$$events = s), f = e(_, a) || {}, Se();
      }
    ), () => {
      for (var _ of u) {
        t.removeEventListener(_, Sn);
        var p = (
          /** @type {number} */
          Xt.get(_)
        );
        --p === 0 ? (document.removeEventListener(_, Sn), Xt.delete(_)) : Xt.set(_, p);
      }
      Ca.delete(l), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Aa.set(f, d), f;
}
i(js, "_mount");
let Aa = /* @__PURE__ */ new WeakMap();
function zs(e, t) {
  const n = Aa.get(e);
  return n ? (Aa.delete(e), n(t)) : (A && (nn in e ? Jr() : Yr()), Promise.resolve());
}
i(zs, "unmount");
var Ye, lt, We, Bt, An, Wn, Jn;
const Ga = class Ga {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    B(this, Ye, /* @__PURE__ */ new Map());
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
    B(this, lt, /* @__PURE__ */ new Map());
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
    B(this, Bt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    B(this, An, !0);
    B(this, Wn, /* @__PURE__ */ i(() => {
      var t = (
        /** @type {Batch} */
        ie
      );
      if (m(this, Ye).has(t)) {
        var n = (
          /** @type {Key} */
          m(this, Ye).get(t)
        ), a = m(this, lt).get(n);
        if (a)
          qa(a), m(this, Bt).delete(n);
        else {
          var s = m(this, We).get(n);
          s && (m(this, lt).set(n, s.effect), m(this, We).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [r, o] of m(this, Ye)) {
          if (m(this, Ye).delete(r), r === t)
            break;
          const u = m(this, We).get(o);
          u && (Ie(u.effect), m(this, We).delete(o));
        }
        for (const [r, o] of m(this, lt)) {
          if (r === n || m(this, Bt).has(r)) continue;
          const u = /* @__PURE__ */ i(() => {
            if (Array.from(m(this, Ye).values()).includes(r)) {
              var f = document.createDocumentFragment();
              nr(o, f), f.append(Wt()), m(this, We).set(r, { effect: o, fragment: f });
            } else
              Ie(o);
            m(this, Bt).delete(r), m(this, lt).delete(r);
          }, "on_destroy");
          m(this, An) || !a ? (m(this, Bt).add(r), qt(o, u, !1)) : u();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    B(this, Jn, /* @__PURE__ */ i((t) => {
      m(this, Ye).delete(t);
      const n = Array.from(m(this, Ye).values());
      for (const [a, s] of m(this, We))
        n.includes(a) || (Ie(s.effect), m(this, We).delete(a));
    }, "#discard"));
    this.anchor = t, q(this, An, n);
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
    ), s = Vi();
    if (n && !m(this, lt).has(t) && !m(this, We).has(t))
      if (s) {
        var r = document.createDocumentFragment(), o = Wt();
        r.append(o), m(this, We).set(t, {
          effect: ze(() => n(o)),
          fragment: r
        });
      } else
        m(this, lt).set(
          t,
          ze(() => n(this.anchor))
        );
    if (m(this, Ye).set(a, t), s) {
      for (const [u, l] of m(this, lt))
        u === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [u, l] of m(this, We))
        u === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(m(this, Wn)), a.ondiscard(m(this, Jn));
    } else
      m(this, Wn).call(this);
  }
};
Ye = new WeakMap(), lt = new WeakMap(), We = new WeakMap(), Bt = new WeakMap(), An = new WeakMap(), Wn = new WeakMap(), Jn = new WeakMap(), i(Ga, "BranchManager");
let Wa = Ga;
if (A) {
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
function $(e, t, n = !1) {
  var a = new Wa(e), s = n ? dn : 0;
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
i($, "if_block");
function Ke(e, t) {
  return t;
}
i(Ke, "index");
function Us(e, t, n) {
  for (var a = [], s = t.length, r, o = t.length, u = 0; u < s; u++) {
    let v = t[u];
    qt(
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
      ks(d), d.append(f), e.items.clear();
    }
    Da(t, !l);
  } else
    r = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
}
i(Us, "pause_effects");
function Da(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ie(e[n], t);
}
i(Da, "destroy_effects");
var ci;
function Ve(e, t, n, a, s, r = null) {
  var o = e, u = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Wt());
  }
  var d = null, v = /* @__PURE__ */ hs(() => {
    var M = n();
    return mi(M) ? M : M == null ? [] : Qn(M);
  }), _, p = !0;
  function w() {
    y.fallback = d, Bs(y, _, o, t, a), d !== null && (_.length === 0 ? (d.f & ht) === 0 ? qa(d) : (d.f ^= ht, En(d, null, o)) : qt(d, () => {
      d = null;
    }));
  }
  i(w, "commit");
  var C = Ba(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var M = _.length, oe = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      ie
    ), D = Vi(), R = 0; R < M; R += 1) {
      var T = _[R], g = a(T, R), N = p ? null : u.get(g);
      N ? (N.v && bn(N.v, T), N.i && bn(N.i, R), D && S.unskip_effect(N.e)) : (N = qs(
        u,
        p ? o : ci ??= Wt(),
        T,
        g,
        R,
        s,
        t,
        n
      ), p || (N.e.f |= ht), u.set(g, N)), oe.add(g);
    }
    if (M === 0 && r && !d && (p ? d = ze(() => r(o)) : (d = ze(() => r(ci ??= Wt())), d.f |= ht)), M > oe.size && (A ? Ks(_, a) : ki("", "", "")), !p)
      if (D) {
        for (const [I, P] of u)
          oe.has(I) || S.skip_effect(P.e);
        S.oncommit(w), S.ondiscard(() => {
        });
      } else
        w();
    c(v);
  }), y = { effect: C, items: u, outrogroups: null, fallback: d };
  p = !1;
}
i(Ve, "each");
function wn(e) {
  for (; e !== null && (e.f & tt) === 0; )
    e = e.next;
  return e;
}
i(wn, "skip_to_branch");
function Bs(e, t, n, a, s) {
  var r = (a & 8) !== 0, o = t.length, u = e.items, l = wn(e.effect.first), f, d = null, v, _ = [], p = [], w, C, y, M;
  if (r)
    for (M = 0; M < o; M += 1)
      w = t[M], C = s(w, M), y = /** @type {EachItem} */
      u.get(C).e, (y.f & ht) === 0 && (y.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(y));
  for (M = 0; M < o; M += 1) {
    if (w = t[M], C = s(w, M), y = /** @type {EachItem} */
    u.get(C).e, e.outrogroups !== null)
      for (const P of e.outrogroups)
        P.pending.delete(y), P.done.delete(y);
    if ((y.f & ht) !== 0)
      if (y.f ^= ht, y === l)
        En(y, null, n);
      else {
        var oe = d ? d.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), St(e, d, y), St(e, y, oe), En(y, oe, n), d = y, _ = [], p = [], l = wn(d.next);
        continue;
      }
    if ((y.f & Oe) !== 0 && (qa(y), r && (y.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (_.length < p.length) {
          var S = p[0], D;
          d = S.prev;
          var R = _[0], T = _[_.length - 1];
          for (D = 0; D < _.length; D += 1)
            En(_[D], S, n);
          for (D = 0; D < p.length; D += 1)
            f.delete(p[D]);
          St(e, R.prev, T.next), St(e, d, R), St(e, T, S), l = S, d = T, M -= 1, _ = [], p = [];
        } else
          f.delete(y), En(y, l, n), St(e, y.prev, y.next), St(e, y, d === null ? e.effect.first : d.next), St(e, d, y), d = y;
        continue;
      }
      for (_ = [], p = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = wn(l.next);
      if (l === null)
        continue;
    }
    (y.f & ht) === 0 && _.push(y), d = y, l = wn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const P of e.outrogroups)
      P.pending.size === 0 && (Da(Qn(P.done)), e.outrogroups?.delete(P));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var g = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Oe) === 0 && g.push(y);
    for (; l !== null; )
      (l.f & Oe) === 0 && l !== e.fallback && g.push(l), l = wn(l.next);
    var N = g.length;
    if (N > 0) {
      var I = (a & 4) !== 0 && o === 0 ? n : null;
      if (r) {
        for (M = 0; M < N; M += 1)
          g[M].nodes?.a?.measure();
        for (M = 0; M < N; M += 1)
          g[M].nodes?.a?.fix();
      }
      Us(e, g, I);
    }
  }
  r && It(() => {
    if (v !== void 0)
      for (y of v)
        y.nodes?.a?.apply();
  });
}
i(Bs, "reconcile");
function qs(e, t, n, a, s, r, o, u) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ gs(n, !1, !1) : Yt(n) : null, f = (o & 2) !== 0 ? Yt(s) : null;
  return A && l && (l.trace = () => {
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
function En(e, t, n) {
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
i(En, "move");
function St(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
i(St, "link");
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
  K(() => {
    var u = (
      /** @type {Effect} */
      ae
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
      /* @__PURE__ */ xt(f)), Vn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ xt(f); )
          r.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ xt(f)
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
function $e(e, t, n, a, s, r) {
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
i($e, "set_class");
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
function x(e, t, n, a) {
  var s = dr(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Lr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
i(x, "set_attribute");
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
    a = Ar(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = gi(s);
  }
  return n;
}
i(Xs, "get_setters");
function vr(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Ns(e, "input", async (s) => {
    A && e.type === "checkbox" && ei();
    var r = s ? e.defaultValue : e.value;
    if (r = _a(e) ? ha(r) : r, n(r), ie !== null && a.add(ie), await Ls(), r !== (r = t())) {
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
  cr(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), ie !== null && a.add(ie)), Ji(() => {
    A && e.type === "checkbox" && ei();
    var s = t();
    if (e === document.activeElement) {
      var r = (
        /** @type {Batch} */
        pa ?? ie
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
      B(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: v } = d;
          return v && l.push(v.toUpperCase()), l;
        },
        []
      ));
      B(this, a, /* @__PURE__ */ De(en({})));
      B(this, s, {});
    }
    get $state() {
      return c(m(this, a));
    }
    set $state(l) {
      Me(m(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && q(this, s, Fs(this.root, { target: f, props: { ...l, state: this.$state } }));
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
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
i(k, "localize");
function mn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
i(mn, "format");
var no = /* @__PURE__ */ H("<span> </span>"), ao = /* @__PURE__ */ H('<span style="color: var(--nos-text-secondary, #888)">—</span>'), io = /* @__PURE__ */ H('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function ro(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ i((I) => t.actor.update({ img: I }), "callback")
    }).render(!0);
  }
  i(a, "pickPortrait");
  let s = /* @__PURE__ */ j(() => {
    const I = Object.keys(t.hitDiceData.bySize);
    return I.length === 0 ? "—" : I.length === 1 ? `d${I[0]}` : I.map((P) => `d${P}`).join("/");
  });
  var r = io(), o = h(r);
  o.__click = a;
  var u = h(o), l = b(o, 2), f = h(l), d = h(f), v = b(f, 2);
  v.__change = ({ target: I }) => t.actor.update({ name: I.value });
  var _ = b(l, 2), p = h(_), w = h(p), C = b(p, 2), y = h(C);
  {
    var M = /* @__PURE__ */ i((I) => {
      var P = no(), ee = h(P);
      K(() => W(ee, t.metaData)), O(I, P);
    }, "consequent"), oe = /* @__PURE__ */ i((I) => {
      var P = ao();
      O(I, P);
    }, "alternate");
    $(y, (I) => {
      t.metaData ? I(M) : I(oe, !1);
    });
  }
  var S = b(y, 2);
  S.__click = () => t.actor.editMetadata();
  var D = b(_, 2), R = h(D), T = h(R), g = b(R, 2), N = h(g);
  K(
    (I, P, ee, z, L) => {
      x(u, "src", c(n)), x(u, "alt", t.actor.reactive.name), W(d, I), ct(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, W(w, P), x(S, "aria-label", ee), x(S, "data-tooltip", z), S.disabled = !t.editingEnabled, W(T, L), W(N, c(s));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), O(e, r), Se();
}
i(ro, "HeaderRow");
Ce(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
i(Ka, "formatModifier");
var so = /* @__PURE__ */ H('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function oo(e, t) {
  we(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ j(() => k(n[t.abilityKey])), s = /* @__PURE__ */ j(() => mn("NWS.RollCheck", { name: c(a) })), r = /* @__PURE__ */ j(() => mn("NWS.RollSave", { name: c(a) }));
  var o = so(), u = h(o);
  let l;
  u.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = b(u, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), v = h(d), _ = b(f, 2), p = h(_);
  K(
    (w) => {
      l = $e(u, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), x(u, "data-tooltip", c(r)), x(u, "aria-label", c(r)), x(f, "data-tooltip", c(s)), x(f, "aria-label", c(s)), W(v, w), W(p, c(a));
    },
    [() => Ka(t.ability.mod)]
  ), O(e, o), Se();
}
i(oo, "AbilityBox");
Ce(["click"]);
var lo = /* @__PURE__ */ H('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), co = /* @__PURE__ */ H('<div class="nos-wounds"><button class="nos-wounds__label" type="button"> </button> <div class="nos-wounds__drops"></div></div>');
function uo(e, t) {
  we(t, !0);
  var n = co(), a = h(n);
  a.__click = function(...o) {
    t.resetWounds?.apply(this, o);
  };
  var s = h(a), r = b(a, 2);
  Ve(r, 21, () => ({ length: t.wounds.max }), Ke, (o, u, l) => {
    var f = lo();
    let d;
    f.__click = () => t.toggleWounds(l + 1), K(
      (v, _) => {
        d = $e(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), x(f, "data-tooltip", v), x(f, "aria-label", _);
      },
      [
        () => mn("NWS.ToggleWound", { n: l + 1 }),
        () => mn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), K(
    (o, u, l) => {
      x(a, "data-tooltip", o), x(a, "aria-label", u), W(s, l);
    },
    [
      () => k("NWS.ResetWounds"),
      () => k("NWS.ResetWounds"),
      () => k("NWS.Wounds")
    ]
  ), O(e, n), Se();
}
i(uo, "WoundTracker");
Ce(["click"]);
var fo = /* @__PURE__ */ H('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), vo = /* @__PURE__ */ H('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), _o = /* @__PURE__ */ H('<i class="fa-solid fa-heart"></i>'), ho = /* @__PURE__ */ H('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function bo(e, t) {
  we(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.hp), r = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ j(() => t.actor.reactive.system.attributes.movement);
  var l = ho(), f = h(l), d = h(f);
  Ve(d, 17, () => n, Ke, (ue, He) => {
    oo(ue, {
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
    var _ = /* @__PURE__ */ i((ue) => {
      var He = fo(), yn = bt(He);
      yn.__click = () => t.actor.configureSavingThrows();
      var Hn = b(yn, 2);
      Hn.__click = () => t.actor.configureAbilityScores(), K(
        (sa, oa) => {
          x(yn, "data-tooltip", sa), x(Hn, "data-tooltip", oa);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), O(ue, He);
    }, "consequent");
    $(v, (ue) => {
      t.editingEnabled && ue(_);
    });
  }
  var p = b(f, 2), w = h(p), C = h(w), y = h(C), M = b(h(y), 2), oe = h(M), S = b(M, 2), D = h(S), R = b(y, 2), T = b(h(R), 2), g = h(T), N = b(T, 2);
  N.__change = ({ target: ue }) => t.updateTempHP(Number(ue.value));
  var I = b(C, 2);
  let P;
  var ee = h(I), z = h(ee), L = h(z);
  {
    var Y = /* @__PURE__ */ i((ue) => {
      var He = vo();
      O(ue, He);
    }, "consequent_1"), U = /* @__PURE__ */ i((ue) => {
      var He = _o();
      O(ue, He);
    }, "alternate");
    $(L, (ue) => {
      t.isBloodied ? ue(Y) : ue(U, !1);
    });
  }
  var te = b(z, 2), Q = h(te), re = b(te, 2), V = h(re);
  V.__change = ({ target: ue }) => t.updateCurrentHP(Number(ue.value));
  var X = b(V, 4), se = h(X), le = b(re, 2);
  le.__click = () => t.actor.configureHitPoints();
  var ne = b(ee, 2), pe = h(ne), E = h(pe), F = b(pe, 2), G = h(F), ce = b(F, 2), J = h(ce);
  J.__change = ({ target: ue }) => t.updateCurrentMana(Number(ue.value));
  var Ot = b(J, 4), Ee = h(Ot), gt = b(ce, 2);
  gt.__click = () => t.actor.configureMana();
  var pt = b(I, 2);
  pt.__click = () => t.rollHitDice();
  var fe = b(h(pt), 2), ke = h(fe), Ge = b(fe, 2), Le = h(Ge), yt = b(Ge, 2);
  yt.__click = (ue) => {
    ue.stopPropagation(), t.actor.configureHitDice();
  };
  var pn = b(pt, 2), wt = h(pn);
  wt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Ln = b(h(wt), 2), aa = h(Ln), ia = b(Ln, 2), _r = h(ia), hr = b(wt, 2), Ya = b(h(hr), 2), br = h(Ya), Ja = b(Ya, 2), mr = h(Ja), ra = b(Ja, 2);
  ra.__click = () => t.actor.configureMovement();
  var gr = b(p, 2);
  uo(gr, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    },
    get resetWounds() {
      return t.resetWounds;
    }
  }), K(
    (ue, He, yn, Hn, sa, oa, pr, yr, wr, Sr, Er, kr, xr) => {
      W(oe, ue), W(D, c(r).value), W(g, He), ct(N, c(s).temp ?? 0), P = $e(I, 1, "nos-combat__pair", null, P, { "nos-hp--bloodied": t.isBloodied }), W(Q, yn), ct(V, c(s).value), W(se, c(s).max), x(le, "data-tooltip", Hn), le.disabled = !t.editingEnabled, Fn(E, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Fn(F, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), W(G, sa), ct(J, t.mana?.current ?? 0), Fn(J, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Fn(Ot, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), W(Ee, t.mana?.max || t.mana?.baseMax || 0), x(gt, "data-tooltip", oa), gt.disabled = !t.editingEnabled, W(ke, pr), W(Le, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), x(yt, "data-tooltip", yr), yt.disabled = !t.editingEnabled, x(wt, "data-tooltip", wr), W(aa, Sr), W(_r, Er), W(br, kr), W(mr, c(u).walk), x(ra, "data-tooltip", xr), ra.disabled = !t.editingEnabled;
    },
    [
      () => k("NWS.Armor"),
      () => k("NWS.TempHP"),
      () => k("NWS.HitPoints"),
      () => k("NWS.ConfigureHitPoints"),
      () => k("NWS.Mana"),
      () => k("NWS.ConfigureMana"),
      () => k("NWS.HitDice"),
      () => k("NWS.ConfigureHitDice"),
      () => k("NWS.RollInitiative"),
      () => k("NWS.Initiative"),
      () => Ka(c(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), O(e, l), Se();
}
i(bo, "StatsRow");
Ce(["click", "change"]);
var mo = /* @__PURE__ */ H('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function go(e, t) {
  we(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let r = /* @__PURE__ */ j(() => n[t.skillKey]), o = /* @__PURE__ */ j(() => k(a[c(r)])), u = /* @__PURE__ */ j(() => k(s[t.skillKey]));
  var l = mo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = b(f, 2), _ = h(v), p = b(v, 2), w = h(p);
  K(
    (C, y) => {
      x(l, "data-tooltip", C), W(d, c(o)), W(_, y), W(w, c(u));
    },
    [
      () => mn("NWS.RollSkill", { name: c(u) }),
      () => Ka(t.skill.mod)
    ]
  ), O(e, l), Se();
}
i(go, "SkillCell");
Ce(["click"]);
var po = /* @__PURE__ */ H('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), yo = /* @__PURE__ */ H('<section class="nos-skills-row"><!> <!></section>');
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
    go(u, {
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
      var l = po();
      l.__click = () => t.actor.configureSkills(), K((f) => x(l, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), O(u, l);
    }, "consequent");
    $(r, (u) => {
      t.editingEnabled && u(o);
    });
  }
  O(e, a), Se();
}
i(wo, "SkillsRow");
Ce(["click"]);
var So = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Eo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), ko = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), No = /* @__PURE__ */ H('<div class="nos-feature-row"><!> <!></div>'), To = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Co = /* @__PURE__ */ H('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Wo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Do = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Mo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Oo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Lo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ho = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Po = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ro = /* @__PURE__ */ H("<!> <!> <!> <!> <!>", 1);
function vi(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), r = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), u = /* @__PURE__ */ j(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
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
  function v(g, N) {
    const I = { type: "Item", uuid: N.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(I));
  }
  i(v, "onDragStart");
  var _ = Ro(), p = bt(_);
  {
    var w = /* @__PURE__ */ i((g) => {
      var N = No(), I = h(N);
      {
        var P = /* @__PURE__ */ i((L) => {
          var Y = Eo(), U = h(Y), te = h(U), Q = b(U, 2), re = h(Q), V = b(re, 2);
          V.__click = () => f(c(s).id);
          var X = h(V), se = b(V, 2);
          {
            var le = /* @__PURE__ */ i((ne) => {
              var pe = So(), E = h(pe);
              E.__click = () => f(c(s).id);
              var F = b(E, 2);
              F.__click = () => d(c(s).id), O(ne, pe);
            }, "consequent");
            $(se, (ne) => {
              t.editingEnabled && ne(le);
            });
          }
          K(
            (ne) => {
              W(te, ne), x(Q, "data-tooltip", c(s).system?.description || ""), x(re, "src", c(s).img), x(re, "alt", c(s).name), W(X, c(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), dt("dragstart", Q, (ne) => v(ne, c(s))), O(L, Y);
        }, "consequent_1");
        $(I, (L) => {
          c(s) && L(P);
        });
      }
      var ee = b(I, 2);
      {
        var z = /* @__PURE__ */ i((L) => {
          var Y = xo(), U = h(Y), te = h(U), Q = b(U, 2), re = h(Q), V = b(re, 2);
          V.__click = () => f(c(r).id);
          var X = h(V), se = b(V, 2);
          {
            var le = /* @__PURE__ */ i((ne) => {
              var pe = ko(), E = h(pe);
              E.__click = () => f(c(r).id);
              var F = b(E, 2);
              F.__click = () => d(c(r).id), O(ne, pe);
            }, "consequent_2");
            $(se, (ne) => {
              t.editingEnabled && ne(le);
            });
          }
          K(
            (ne) => {
              W(te, ne), x(Q, "data-tooltip", c(r).system?.description || ""), x(re, "src", c(r).img), x(re, "alt", c(r).name), W(X, c(r).name);
            },
            [() => k("NWS.Background")]
          ), dt("dragstart", Q, (ne) => v(ne, c(r))), O(L, Y);
        }, "consequent_3");
        $(ee, (L) => {
          c(r) && L(z);
        });
      }
      O(g, N);
    }, "consequent_4");
    $(p, (g) => {
      (c(s) || c(r)) && g(w);
    });
  }
  var C = b(p, 2);
  {
    var y = /* @__PURE__ */ i((g) => {
      var N = Ao(), I = h(N), P = h(I), ee = b(I, 2), z = h(ee), L = b(z, 2);
      L.__click = () => f(c(o).id);
      var Y = h(L), U = b(L, 2);
      {
        var te = /* @__PURE__ */ i((V) => {
          var X = To(), se = h(X);
          se.__click = () => f(c(o).id);
          var le = b(se, 2);
          le.__click = () => d(c(o).id), O(V, X);
        }, "consequent_5");
        $(U, (V) => {
          t.editingEnabled && V(te);
        });
      }
      var Q = b(ee, 2);
      {
        var re = /* @__PURE__ */ i((V) => {
          var X = Co(), se = h(X), le = b(se, 2);
          le.__click = () => f(c(u).id);
          var ne = h(le), pe = b(le, 2);
          {
            var E = /* @__PURE__ */ i((F) => {
              var G = Io(), ce = h(G);
              ce.__click = () => f(c(u).id);
              var J = b(ce, 2);
              J.__click = () => d(c(u).id), O(F, G);
            }, "consequent_6");
            $(pe, (F) => {
              t.editingEnabled && F(E);
            });
          }
          K(() => {
            x(se, "src", c(u).img), x(se, "alt", c(u).name), W(ne, c(u).name);
          }), dt("dragstart", X, (F) => v(F, c(u))), O(V, X);
        }, "consequent_7");
        $(Q, (V) => {
          c(u) && V(re);
        });
      }
      K(
        (V, X) => {
          W(P, V), x(z, "src", c(o).img), x(z, "alt", c(o).name), W(Y, `${c(o).name ?? ""} (${X ?? ""} ${c(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), dt("dragstart", ee, (V) => v(V, c(o))), O(g, N);
    }, "consequent_8");
    $(C, (g) => {
      c(o) && g(y);
    });
  }
  var M = b(C, 2);
  {
    var oe = /* @__PURE__ */ i((g) => {
      var N = Mo(), I = h(N), P = h(I), ee = b(I, 2);
      Ve(ee, 21, () => c(n), Ke, (z, L) => {
        var Y = Do(), U = h(Y), te = b(U, 2);
        te.__click = () => l(c(L).id);
        var Q = h(te), re = b(te, 2);
        {
          var V = /* @__PURE__ */ i((X) => {
            var se = Wo(), le = h(se);
            le.__click = () => f(c(L).id);
            var ne = b(le, 2);
            ne.__click = () => d(c(L).id), O(X, se);
          }, "consequent_9");
          $(re, (X) => {
            t.editingEnabled && X(V);
          });
        }
        K(() => {
          x(Y, "data-tooltip", c(L).system?.description || ""), x(U, "src", c(L).img), x(U, "alt", c(L).name), W(Q, c(L).name);
        }), dt("dragstart", Y, (X) => v(X, c(L))), O(z, Y);
      }), K((z) => W(P, z), [() => k("NWS.Features")]), O(g, N);
    }, "consequent_10");
    $(M, (g) => {
      c(n).length > 0 && g(oe);
    });
  }
  var S = b(M, 2);
  {
    var D = /* @__PURE__ */ i((g) => {
      var N = Ho(), I = h(N), P = h(I), ee = b(I, 2);
      Ve(ee, 21, () => c(a), Ke, (z, L) => {
        var Y = Lo(), U = h(Y), te = b(U, 2);
        te.__click = () => l(c(L).id);
        var Q = h(te), re = b(te, 2);
        {
          var V = /* @__PURE__ */ i((X) => {
            var se = Oo(), le = h(se);
            le.__click = () => f(c(L).id);
            var ne = b(le, 2);
            ne.__click = () => d(c(L).id), O(X, se);
          }, "consequent_11");
          $(re, (X) => {
            t.editingEnabled && X(V);
          });
        }
        K(() => {
          x(Y, "data-tooltip", c(L).system?.description || ""), x(U, "src", c(L).img), x(U, "alt", c(L).name), W(Q, c(L).name);
        }), dt("dragstart", Y, (X) => v(X, c(L))), O(z, Y);
      }), K((z) => W(P, z), [() => k("NWS.Boons")]), O(g, N);
    }, "consequent_12");
    $(S, (g) => {
      c(a).length > 0 && g(D);
    });
  }
  var R = b(S, 2);
  {
    var T = /* @__PURE__ */ i((g) => {
      var N = Po(), I = h(N);
      K((P) => W(I, P), [() => k("NWS.DropFeaturesHere")]), O(g, N);
    }, "consequent_13");
    $(R, (g) => {
      !c(s) && !c(r) && !c(o) && c(n).length === 0 && c(a).length === 0 && g(T);
    });
  }
  O(e, _), Se();
}
i(vi, "FeaturesTab");
Ce(["click"]);
var Fo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), jo = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), zo = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Uo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Bo = /* @__PURE__ */ H('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), qo = /* @__PURE__ */ H('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Ko = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Vo = /* @__PURE__ */ H('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function _i(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ De(""), a = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, D) => S.name.localeCompare(D.name))), s = /* @__PURE__ */ j(() => c(n) ? c(a).filter((S) => S.name.toLowerCase().includes(c(n).toLowerCase())) : c(a)), r = /* @__PURE__ */ j(() => {
    const S = {};
    for (const D of c(s)) {
      const R = D.system?.tier ?? 0, T = D.system?.isUtility ?? !1, g = T ? "_utility" : `_tier_${R}`, N = T ? k("NWS.Utility") : mn("NWS.Tier", { n: R });
      S[g] ??= { label: N, spells: [] }, S[g].spells.push(D);
    }
    return Object.entries(S).sort(([D], [R]) => {
      if (D === "_utility") return 1;
      if (R === "_utility") return -1;
      const T = parseInt(D.replace("_tier_", "")), g = parseInt(R.replace("_tier_", ""));
      return T - g;
    });
  });
  function o(S) {
    t.actor.items.get(S)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  function u(S) {
    t.actor.deleteEmbeddedDocuments("Item", [S]);
  }
  i(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  i(l, "createSpell");
  function f(S) {
    t.actor.activateItem(S);
  }
  i(f, "castSpell");
  function d(S, D) {
    const R = { type: "Item", uuid: D.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(R));
  }
  i(d, "onDragStart");
  var v = Vo(), _ = bt(v), p = b(h(_), 2), w = b(p, 2);
  {
    var C = /* @__PURE__ */ i((S) => {
      var D = Fo();
      D.__click = l;
      var R = b(h(D));
      K((T) => W(R, ` ${T ?? ""}`), [() => k("NWS.New")]), O(S, D);
    }, "consequent");
    $(w, (S) => {
      t.editingEnabled && S(C);
    });
  }
  var y = b(_, 2);
  Ve(y, 17, () => c(r), Ke, (S, D) => {
    var R = /* @__PURE__ */ j(() => yi(c(D), 2));
    let T = /* @__PURE__ */ i(() => c(R)[1], "tier");
    var g = qo(), N = h(g), I = h(N), P = b(N, 2);
    Ve(P, 21, () => T().spells, Ke, (ee, z) => {
      var L = Bo(), Y = h(L), U = b(Y, 2);
      U.__click = () => f(c(z).id);
      var te = h(U), Q = b(te);
      {
        var re = /* @__PURE__ */ i((E) => {
          var F = jo();
          K((G) => x(F, "data-tooltip", G), [() => k("NWS.Concentration")]), O(E, F);
        }, "consequent_1");
        $(Q, (E) => {
          c(z).system?.concentration && E(re);
        });
      }
      var V = b(Q, 2);
      {
        var X = /* @__PURE__ */ i((E) => {
          var F = zo();
          K((G) => x(F, "data-tooltip", G), [() => k("NWS.Utility")]), O(E, F);
        }, "consequent_2");
        $(V, (E) => {
          c(z).system?.isUtility && E(X);
        });
      }
      var se = b(U, 2), le = h(se), ne = b(se, 2);
      {
        var pe = /* @__PURE__ */ i((E) => {
          var F = Uo(), G = h(F);
          G.__click = () => o(c(z).id);
          var ce = b(G, 2);
          ce.__click = () => u(c(z).id), O(E, F);
        }, "consequent_3");
        $(ne, (E) => {
          t.editingEnabled && E(pe);
        });
      }
      K(() => {
        x(L, "data-tooltip", c(z).system?.description?.baseEffect || ""), x(Y, "src", c(z).img), x(Y, "alt", c(z).name), W(te, `${c(z).name ?? ""} `), W(le, c(z).system?.activationCost ?? "");
      }), dt("dragstart", L, (E) => d(E, c(z))), O(ee, L);
    }), K(() => W(I, T().label)), O(S, g);
  });
  var M = b(y, 2);
  {
    var oe = /* @__PURE__ */ i((S) => {
      var D = Ko(), R = h(D);
      K((T) => W(R, T), [() => k("NWS.DropSpellsHere")]), O(S, D);
    }, "consequent_4");
    $(M, (S) => {
      c(a).length === 0 && S(oe);
    });
  }
  K((S) => x(p, "placeholder", S), [() => k("NWS.SearchSpells")]), vr(p, () => c(n), (S) => Me(n, S)), O(e, v), Se();
}
i(_i, "SpellsTab");
Ce(["click"]);
var Go = /* @__PURE__ */ H('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), Yo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Jo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Qo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Xo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Zo = /* @__PURE__ */ H('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function hi(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ De(""), a = /* @__PURE__ */ j(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((T) => T.type === "object").sort((T, g) => (T.sort ?? 0) - (g.sort ?? 0))), r = /* @__PURE__ */ j(() => c(n) ? c(s).filter((T) => T.name.toLowerCase().includes(c(n).toLowerCase())) : c(s));
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
    const N = c(a)[T]?.value ?? 0;
    t.actor.update({
      [`system.currency.${T}.value`]: Math.max(0, N + g)
    });
  }
  i(d, "adjustCurrency");
  function v(T, g) {
    t.actor.items.get(T)?.update({ "system.quantity": Number(g) });
  }
  i(v, "updateQuantity");
  function _(T, g) {
    const N = { type: "Item", uuid: g.uuid };
    T.dataTransfer.setData("text/plain", JSON.stringify(N));
  }
  i(_, "onDragStart");
  var p = Zo(), w = bt(p);
  Ve(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ke, (T, g) => {
    var N = /* @__PURE__ */ j(() => yi(g, 2));
    let I = /* @__PURE__ */ i(() => c(N)[0], "type"), P = /* @__PURE__ */ i(() => c(N)[1], "labelKey");
    var ee = Go(), z = h(ee), L = h(z), Y = b(z, 2);
    Y.__click = () => d(I(), -1);
    var U = b(Y, 2);
    U.__change = ({ target: Q }) => f(I(), Q.value);
    var te = b(U, 2);
    te.__click = () => d(I(), 1), K(
      (Q, re, V) => {
        x(z, "for", `currency-${I() ?? ""}`), W(L, Q), x(Y, "aria-label", `-1 ${re ?? ""}`), x(U, "id", `currency-${I() ?? ""}`), ct(U, c(a)[I()]?.value ?? 0), x(te, "aria-label", `+1 ${V ?? ""}`);
      },
      [
        () => k(P()),
        () => k(P()),
        () => k(P())
      ]
    ), O(T, ee);
  });
  var C = b(w, 2), y = b(h(C), 2), M = b(y, 2);
  {
    var oe = /* @__PURE__ */ i((T) => {
      var g = Yo();
      g.__click = l;
      var N = b(h(g));
      K((I) => W(N, ` ${I ?? ""}`), [() => k("NWS.New")]), O(T, g);
    }, "consequent");
    $(M, (T) => {
      t.editingEnabled && T(oe);
    });
  }
  var S = b(C, 2);
  Ve(S, 21, () => c(r), Ke, (T, g) => {
    var N = Qo(), I = h(N), P = b(I, 2);
    P.__click = () => o(c(g).id);
    var ee = h(P), z = b(P, 2);
    z.__change = ({ target: U }) => v(c(g).id, U.value);
    var L = b(z, 2);
    {
      var Y = /* @__PURE__ */ i((U) => {
        var te = Jo(), Q = h(te);
        Q.__click = () => o(c(g).id);
        var re = b(Q, 2);
        re.__click = () => u(c(g).id), O(U, te);
      }, "consequent_1");
      $(L, (U) => {
        t.editingEnabled && U(Y);
      });
    }
    K(() => {
      x(N, "data-tooltip", c(g).system?.description?.public || ""), x(I, "src", c(g).img), x(I, "alt", c(g).name), W(ee, c(g).name), ct(z, c(g).system?.quantity ?? 1);
    }), dt("dragstart", N, (U) => _(U, c(g))), O(T, N);
  });
  var D = b(S, 2);
  {
    var R = /* @__PURE__ */ i((T) => {
      var g = Xo(), N = h(g);
      K((I) => W(N, I), [() => k("NWS.DropInventoryHere")]), O(T, g);
    }, "consequent_2");
    $(D, (T) => {
      c(s).length === 0 && T(R);
    });
  }
  K((T) => x(y, "placeholder", T), [() => k("NWS.SearchItems")]), vr(y, () => c(n), (T) => Me(n, T)), O(e, p), Se();
}
i(hi, "InventoryTab");
Ce(["click", "change"]);
var $o = /* @__PURE__ */ H('<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor"><!></div></div></div>');
function bi(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.system.details), a = /* @__PURE__ */ j(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ j(() => [...c(a).languages ?? []].join(", ")), r = /* @__PURE__ */ j(() => [...c(a).armor ?? []].join(", ")), o = /* @__PURE__ */ j(() => (c(a).weapons ?? []).join(", "));
  var u = $o(), l = h(u), f = h(l), d = h(f), v = b(f, 2);
  v.__change = ({ target: Ee }) => t.actor.update({ "system.details.age": Ee.value });
  var _ = b(l, 2), p = h(_), w = h(p), C = b(p, 2);
  C.__change = ({ target: Ee }) => t.actor.update({ "system.details.gender": Ee.value });
  var y = b(_, 2), M = h(y), oe = h(M), S = b(M, 2);
  S.__change = ({ target: Ee }) => t.actor.update({ "system.details.height": Ee.value });
  var D = b(y, 2), R = h(D), T = h(R), g = b(R, 2);
  g.__change = ({ target: Ee }) => t.actor.update({ "system.details.weight": Ee.value });
  var N = b(D, 2), I = h(N), P = h(I), ee = b(I, 2), z = h(ee), L = b(ee, 2);
  L.__click = () => t.actor.configureLanguageProficiencies();
  var Y = b(N, 2), U = h(Y), te = h(U), Q = b(U, 2), re = h(Q), V = b(Q, 2);
  V.__click = () => t.actor.configureArmorProficiencies();
  var X = b(Y, 2), se = h(X), le = h(se), ne = b(se, 2), pe = h(ne), E = b(ne, 2);
  E.__click = () => t.actor.configureWeaponProficiencies();
  var F = b(X, 2), G = h(F), ce = h(G), J = b(G, 2), Ot = h(J);
  Vs(Ot, () => c(n).notes ?? ""), K(
    (Ee, gt, pt, fe, ke, Ge, Le, yt, pn, wt, Ln, aa, ia) => {
      W(d, Ee), ct(v, c(n).age ?? ""), v.disabled = !t.editingEnabled, W(w, gt), ct(C, c(n).gender ?? ""), C.disabled = !t.editingEnabled, W(oe, pt), ct(S, c(n).height ?? ""), x(S, "placeholder", fe), S.disabled = !t.editingEnabled, W(T, ke), ct(g, c(n).weight ?? ""), x(g, "placeholder", Ge), g.disabled = !t.editingEnabled, W(P, Le), W(z, c(s) || "—"), x(L, "data-tooltip", yt), L.disabled = !t.editingEnabled, W(te, pn), W(re, c(r) || "—"), x(V, "data-tooltip", wt), V.disabled = !t.editingEnabled, W(le, Ln), W(pe, c(o) || "—"), x(E, "data-tooltip", aa), E.disabled = !t.editingEnabled, W(ce, ia), x(J, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), dt("blur", J, ({ target: Ee }) => t.actor.update({ "system.details.notes": Ee.innerHTML })), O(e, u), Se();
}
i(bi, "BioTab");
Ce(["change", "click"]);
var el = /* @__PURE__ */ H('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), tl = /* @__PURE__ */ H('<div class="nos-slot nos-slot--empty"> </div>'), nl = /* @__PURE__ */ H("<!> <!>", 1);
function al(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ j(() => t.actor.reactive.items.filter((u) => u.type === "object" && u.system?.objectType === "weapon").sort((u, l) => (u.sort ?? 0) - (l.sort ?? 0)));
  var a = nl(), s = bt(a);
  Ve(s, 17, () => c(n), Ke, (u, l) => {
    var f = el(), d = h(f), v = b(d, 2);
    v.__click = () => t.actor.activateItem(c(l).id);
    var _ = h(v);
    K(() => {
      x(d, "src", c(l).img), x(d, "alt", c(l).name), x(v, "data-tooltip", c(l).system?.description?.public || c(l).name), W(_, c(l).name);
    }), O(u, f);
  });
  var r = b(s, 2);
  {
    var o = /* @__PURE__ */ i((u) => {
      var l = tl(), f = h(l);
      K((d) => W(f, d), [() => k("NWS.NoWeapons")]), O(u, l);
    }, "consequent");
    $(r, (u) => {
      c(n).length === 0 && u(o);
    });
  }
  O(e, a), Se();
}
i(al, "InventorySlots");
Ce(["click"]);
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
  let a = /* @__PURE__ */ De("features"), s = /* @__PURE__ */ j(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), r = /* @__PURE__ */ j(() => t.actor.reactive.system.inventory);
  var o = sl(), u = h(o);
  Ve(u, 21, () => n, Ke, (S, D) => {
    var R = il();
    let T;
    R.__click = () => Me(a, c(D).name, !0);
    var g = h(R), N = b(g);
    K(
      (I) => {
        T = $e(R, 1, "nos-tab-btn", null, T, { "nos-tab-btn--active": c(a) === c(D).name }), $e(g, 1, c(D).icon), W(N, ` ${I ?? ""}`);
      },
      [() => k(c(D).labelKey)]
    ), O(S, R);
  });
  var l = b(u, 2), f = h(l);
  {
    var d = /* @__PURE__ */ i((S) => {
      vi(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), v = /* @__PURE__ */ i((S) => {
      var D = va(), R = bt(D);
      {
        var T = /* @__PURE__ */ i((N) => {
          _i(N, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), g = /* @__PURE__ */ i((N) => {
          var I = va(), P = bt(I);
          {
            var ee = /* @__PURE__ */ i((L) => {
              hi(L, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), z = /* @__PURE__ */ i((L) => {
              var Y = va(), U = bt(Y);
              {
                var te = /* @__PURE__ */ i((Q) => {
                  bi(Q, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                $(
                  U,
                  (Q) => {
                    c(a) === "bio" && Q(te);
                  },
                  !0
                );
              }
              O(L, Y);
            }, "alternate");
            $(
              P,
              (L) => {
                c(a) === "inventory" ? L(ee) : L(z, !1);
              },
              !0
            );
          }
          O(N, I);
        }, "alternate_1");
        $(
          R,
          (N) => {
            c(a) === "spells" ? N(T) : N(g, !1);
          },
          !0
        );
      }
      O(S, D);
    }, "alternate_2");
    $(f, (S) => {
      c(a) === "features" ? S(d) : S(v, !1);
    });
  }
  var _ = b(l, 2), p = h(_), w = h(p), C = b(_, 2), y = h(C);
  al(y, {
    get actor() {
      return t.actor;
    }
  });
  var M = b(y, 2);
  {
    var oe = /* @__PURE__ */ i((S) => {
      var D = rl(), R = h(D);
      K(() => W(R, `${c(r).usedSlots ?? 0 ?? ""} / ${c(r).totalSlots ?? 0 ?? ""}`)), O(S, D);
    }, "consequent_4");
    $(M, (S) => {
      c(s) && S(oe);
    });
  }
  K((S) => W(w, S), [() => k("NWS.Weapons")]), O(e, o), Se();
}
i(ol, "ContentArea");
Ce(["click"]);
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
    var _ = h(d), p = b(_, 2), w = h(p);
    K(
      (C) => {
        v = $e(d, 1, "nos-color-scheme-menu__option", null, v, {
          "nos-color-scheme-menu__option--active": t.colorScheme === c(f).value
        }), $e(_, 1, `fa-solid ${c(f).icon ?? ""}`), W(w, C);
      },
      [() => k(c(f).label)]
    ), O(l, d);
  }), O(e, r), Se();
}
i(ul, "ColorSchemeMenu");
Ce(["click", "keydown"]);
var fl = /* @__PURE__ */ H('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function dl(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ De(!1);
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
  d.__click = () => Me(n, !c(n));
  var _ = b(d, 2);
  {
    var p = /* @__PURE__ */ i((y) => {
      ul(y, {
        get colorScheme() {
          return t.colorScheme;
        },
        get setColorScheme() {
          return t.setColorScheme;
        },
        onclose: /* @__PURE__ */ i(() => Me(n, !1), "onclose")
      });
    }, "consequent");
    $(_, (y) => {
      c(n) && y(p);
    });
  }
  var w = b(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var C = b(w, 2);
  C.__click = () => t.actor.triggerRest({ restType: "safe" }), K(
    (y, M, oe, S, D, R, T, g, N, I, P, ee) => {
      r = $e(s, 1, "nos-sidebar-btn", null, r, { "nos-sidebar-btn--active": t.editingEnabled }), x(s, "aria-pressed", t.editingEnabled), x(s, "aria-label", y), x(s, "data-tooltip", M), $e(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), x(u, "aria-label", oe), x(u, "data-tooltip", S), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, x(l, "aria-label", D), x(l, "data-tooltip", R), l.disabled = t.actor.reactive.system.levelUpHistory.length === 0, v = $e(d, 1, "nos-sidebar-btn", null, v, { "nos-sidebar-btn--active": t.darkMode }), x(d, "aria-pressed", t.darkMode), x(d, "aria-label", T), x(d, "data-tooltip", g), x(d, "aria-expanded", c(n)), x(w, "aria-label", N), x(w, "data-tooltip", I), x(C, "aria-label", P), x(C, "data-tooltip", ee);
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
  ), O(e, a), Se();
}
i(dl, "SidebarControls");
Ce(["click"]);
var vl = /* @__PURE__ */ H('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function _l(e, t) {
  we(t, !0);
  const n = ji((E) => {
    const F = {
      updateActor: Hooks.on("updateActor", (G, ce, J) => {
        J.diff !== !1 && G._id === t.actor.id && E();
      }),
      createItem: Hooks.on("createItem", (G) => {
        G?.actor?.id === t.actor.id && E();
      }),
      deleteItem: Hooks.on("deleteItem", (G) => {
        G?.actor?.id === t.actor.id && E();
      }),
      updateItem: Hooks.on("updateItem", (G, ce, J) => {
        J.diff !== !1 && G?.actor?.id === t.actor.id && E();
      })
    };
    return () => {
      Hooks.off("updateActor", F.updateActor), Hooks.off("createItem", F.createItem), Hooks.off("deleteItem", F.deleteItem), Hooks.off("updateItem", F.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(E, F) {
      if (F === "reactive")
        return n(), E;
      const G = E[F];
      return typeof G == "function" ? G.bind(E) : G;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: r,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(E, F) {
    return Math.clamp(0, Math.round(E / F * 100), 100);
  }
  i(u, "getHitPointPercentage");
  function l(E, F, G, ce) {
    const J = [];
    return G && J.push(`${G.name} (${s[ce] ?? ce})`), E && (F ? J.push(`${E.name} (${F.name}, ${E.system.classLevel})`) : J.push(`${E.name} (${E.system.classLevel})`)), J.filter(Boolean).join(" ⟡ ");
  }
  i(l, "prepareCharacterMetadata");
  function f(E, F) {
    if (!F) return E;
    const G = [4, 6, 8, 10, 12, 20], ce = G.indexOf(E);
    return ce === -1 ? E : G[Math.min(ce + F, G.length - 1)];
  }
  i(f, "incrementDieSize");
  let d = /* @__PURE__ */ j(() => u(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(E) {
    a.update({ "system.attributes.hp.value": E });
  }
  i(v, "updateCurrentHP");
  function _(E) {
    a.update({ "system.attributes.hp.temp": E });
  }
  i(_, "updateTempHP");
  let p = /* @__PURE__ */ j(() => a.reactive.system.resources.mana), w = /* @__PURE__ */ j(() => (c(p).max ?? 0) > 0 || (c(p).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((E) => E.type === "class" && E.system?.mana?.formula?.length));
  function C(E) {
    a.update({ "system.resources.mana.current": E });
  }
  i(C, "updateCurrentMana");
  let y = /* @__PURE__ */ j(() => {
    const E = a.reactive.system.attributes.hitDice, F = a.reactive.system.attributes.bonusHitDice ?? [], G = a.reactive.items.filter((fe) => fe.type === "class"), ce = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, J = {};
    for (const fe of G) {
      const ke = fe.system.hitDieSize, Ge = f(ke, ce), Le = fe.system.classLevel;
      J[Ge] ??= { current: 0, total: 0 }, J[Ge].total += Le, J[Ge].current = E[Ge]?.current ?? 0;
    }
    const Ot = G.map((fe) => f(fe.system.hitDieSize, ce));
    for (const fe of F) {
      const ke = f(fe.size, ce);
      J[ke] ??= { current: E[ke]?.current ?? 0, total: 0 }, J[ke].total += fe.value, Ot.includes(ke) || (J[ke].current = E[ke]?.current ?? 0);
    }
    const Ee = F.map((fe) => f(fe.size, ce));
    for (const [fe, ke] of Object.entries(E ?? {})) {
      const Ge = Number(fe), Le = f(Ge, ce), yt = ke?.bonus ?? 0;
      if (yt > 0) {
        J[Le] ??= { current: 0, total: 0 }, J[Le].total += yt;
        const pn = Ot.includes(Le), wt = Ee.includes(Le);
        !pn && !wt && (J[Le].current = E[Le]?.current ?? 0);
      }
    }
    let gt = 0, pt = 0;
    for (const fe of Object.values(J))
      gt += fe.current, pt += fe.total;
    return { bySize: J, value: gt, max: pt };
  });
  async function M(E) {
    await a.updateCurrentHitDice(E);
  }
  i(M, "updateCurrentHitDice");
  async function oe() {
    await a.rollHitDice();
  }
  i(oe, "rollHitDice");
  async function S() {
    await a.editCurrentHitDice();
  }
  i(S, "editCurrentHitDice");
  let D = /* @__PURE__ */ j(() => a.reactive.items.find((E) => E.type === "class") ?? null), R = /* @__PURE__ */ j(() => {
    const E = a.reactive.items.find((J) => J.type === "class") ?? null, F = a.reactive.items.find((J) => J.type === "subclass") ?? null, G = a.reactive.items.find((J) => J.type === "ancestry") ?? null, ce = a.reactive.system.attributes.sizeCategory;
    return l(E, F, G, ce);
  }), T = /* @__PURE__ */ j(() => a.reactive.system.attributes.wounds);
  function g(E) {
    const F = E === c(T).value ? E - 1 : E;
    a.update({ "system.attributes.wounds.value": F });
  }
  i(g, "toggleWounds");
  function N() {
    a.update({ "system.attributes.wounds.value": 0 });
  }
  i(N, "resetWounds");
  let I = /* @__PURE__ */ j(() => a.reactive.flags.nimble), P = /* @__PURE__ */ j(() => c(I)?.editingEnabled ?? !0);
  const ee = Zs(!1, (E) => (Cs(() => E(c(P))), () => {
  }));
  async function z() {
    await a.setFlag("nimble", "editingEnabled", !c(P));
  }
  i(z, "toggleEditingEnabled");
  let L = /* @__PURE__ */ j(() => {
    const E = c(I)?.colorScheme;
    return E || (c(I)?.darkMode === !0 ? "dark" : "white");
  });
  async function Y(E) {
    await a.setFlag("nimble", "colorScheme", E);
  }
  i(Y, "setColorScheme");
  let U = /* @__PURE__ */ j(() => c(L) === "dark"), te = /* @__PURE__ */ j(() => c(L) === "nimble");
  Pn("actor", a), Pn("document", a), Pn("application", t.sheet), Pn("editingEnabled", ee);
  var Q = vl();
  let re;
  var V = h(Q), X = h(V);
  ro(X, {
    get actor() {
      return a;
    },
    get metaData() {
      return c(R);
    },
    get editingEnabled() {
      return c(P);
    },
    get hitDiceData() {
      return c(y);
    }
  });
  var se = b(X, 2);
  bo(se, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(P);
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
      return c(p);
    },
    get wounds() {
      return c(T);
    },
    toggleWounds: g,
    resetWounds: N,
    updateCurrentHP: v,
    updateTempHP: _,
    updateCurrentMana: C,
    updateCurrentHitDice: M,
    rollHitDice: oe,
    editCurrentHitDice: S
  });
  var le = b(se, 2);
  wo(le, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(P);
    }
  });
  var ne = b(V, 2);
  ol(ne, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(P);
    },
    get hasMana() {
      return c(w);
    },
    get mana() {
      return c(p);
    },
    updateCurrentMana: C
  });
  var pe = b(ne, 2);
  dl(pe, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(P);
    },
    toggleEditingEnabled: z,
    get classItem() {
      return c(D);
    },
    get darkMode() {
      return c(U);
    },
    get colorScheme() {
      return c(L);
    },
    setColorScheme: Y
  }), K(() => re = $e(Q, 1, "nos-sheet", null, re, {
    "nos-sheet--dark": c(U),
    "nos-sheet--nimble": c(te)
  })), O(e, Q), Se();
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
  form: { submitOnChange: !1 },
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
