var Za = Object.defineProperty;
var $a = (e) => {
  throw TypeError(e);
};
var Ni = (e, t, n) => t in e ? Za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Za(e, "name", { value: t, configurable: !0 });
var Be = (e, t, n) => Ni(e, typeof t != "symbol" ? t + "" : t, n), fa = (e, t, n) => t.has(e) || $a("Cannot " + n);
var m = (e, t, n) => (fa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), U = (e, t, n) => t.has(e) ? $a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, a) => (fa(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), ke = (e, t, n) => (fa(e, t, "access private method"), n);
const pe = /* @__PURE__ */ Symbol(), Ci = /* @__PURE__ */ Symbol("filename"), Ti = "http://www.w3.org/1999/xhtml", er = globalThis.process?.env?.NODE_ENV, M = er && !er.toLowerCase().startsWith("prod");
var gr = Array.isArray, Wi = Array.prototype.indexOf, Vt = Array.prototype.includes, ea = Array.from, Yt = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, Ii = Object.getOwnPropertyDescriptors, Ai = Object.prototype, Di = Array.prototype, pr = Object.getPrototypeOf, tr = Object.isExtensible;
const da = /* @__PURE__ */ r(() => {
}, "noop");
function Mi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(Mi, "run_all");
function yr() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(yr, "deferred");
function wr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(wr, "to_array");
const we = 2, pa = 4, ta = 8, Sr = 1 << 24, wt = 16, it = 32, Xt = 64, Ha = 128, Ve = 512, he = 1024, Se = 2048, rt = 4096, Fe = 8192, Ct = 16384, Fa = 32768, hn = 65536, Vn = 1 << 17, kr = 1 << 18, wn = 1 << 19, Li = 1 << 20, pt = 1 << 25, Mt = 32768, ya = 1 << 21, na = 1 << 22, Tt = 1 << 23, sn = /* @__PURE__ */ Symbol("$state"), Oi = /* @__PURE__ */ Symbol(""), Er = /* @__PURE__ */ Symbol("proxy path");
var on;
const nn = new (on = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(on, "StaleReactionError"), on)();
function Pi(e) {
  if (M) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Pi, "lifecycle_outside_component");
function Ri() {
  if (M) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Ri, "async_derived_orphan");
function nr() {
  if (M) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(nr, "bind_invalid_checkbox_value");
function Hi() {
  if (M) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Hi, "derived_references_self");
function xr(e, t, n) {
  if (M) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(xr, "each_key_duplicate");
function Fi(e) {
  if (M) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Fi, "effect_in_teardown");
function ji() {
  if (M) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(ji, "effect_in_unowned_derived");
function zi(e) {
  if (M) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(zi, "effect_orphan");
function Bi() {
  if (M) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Bi, "effect_update_depth_exceeded");
function Ui(e) {
  if (M) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Ui, "rune_outside_svelte");
function qi() {
  if (M) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(qi, "state_descriptors_fixed");
function Gi() {
  if (M) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(Gi, "state_prototype_fixed");
function Ki() {
  if (M) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(Ki, "state_unsafe_mutation");
function Vi() {
  if (M) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(Vi, "svelte_boundary_reset_onerror");
var aa = "font-weight: bold", ra = "font-weight: normal";
function Yi() {
  M ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, aa, ra) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(Yi, "lifecycle_double_unmount");
function va(e) {
  M ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, aa, ra) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(va, "state_proxy_equality_mismatch");
function Ji() {
  M ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, aa, ra) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Ji, "state_proxy_unmount");
function Qi() {
  M ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", aa, ra) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(Qi, "svelte_boundary_reset_noop");
function Nr(e) {
  return e === this.v;
}
r(Nr, "equals");
function Cr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(Cr, "safe_not_equal");
function Tr(e) {
  return !Cr(e, this.v);
}
r(Tr, "safe_equals");
let Xi = !1;
function ot(e, t) {
  return e.label = t, Wr(e.v, t), e;
}
r(ot, "tag");
function Wr(e, t) {
  return e?.[Er]?.(t), e;
}
r(Wr, "tag_proxy");
function Zi(e) {
  const t = new Error(), n = $i();
  return n.length === 0 ? null : (n.unshift(`
`), Yt(t, "stack", {
    value: n.join(`
`)
  }), Yt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(Zi, "get_error");
function $i() {
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
r($i, "get_stack");
let ye = null;
function bn(e) {
  ye = e;
}
r(bn, "set_component_context");
let In = null;
function Yn(e) {
  In = e;
}
r(Yn, "set_dev_stack");
let Pn = null;
function ar(e) {
  Pn = e;
}
r(ar, "set_dev_current_component_function");
function Bn(e, t) {
  return es("setContext").set(e, t), t;
}
r(Bn, "setContext");
function Ee(e, t = !1, n) {
  ye = {
    p: ye,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, M && (ye.function = n, Pn = n);
}
r(Ee, "push");
function xe(e) {
  var t = (
    /** @type {ComponentContext} */
    ye
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Jr(a);
  }
  return t.i = !0, ye = t.p, M && (Pn = ye?.function ?? null), /** @type {T} */
  {};
}
r(xe, "pop");
function Ir() {
  return !0;
}
r(Ir, "is_runes");
function es(e) {
  return ye === null && Pi(e), ye.c ??= new Map(ts(ye) || void 0);
}
r(es, "get_or_init_context_map");
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
r(ts, "get_parent_context");
let Rt = [];
function Ar() {
  var e = Rt;
  Rt = [], Mi(e);
}
r(Ar, "run_micro_tasks");
function Wt(e) {
  if (Rt.length === 0 && !Tn) {
    var t = Rt;
    queueMicrotask(() => {
      t === Rt && Ar();
    });
  }
  Rt.push(e);
}
r(Wt, "queue_micro_task");
function ns() {
  for (; Rt.length > 0; )
    Ar();
}
r(ns, "flush_tasks");
const wa = /* @__PURE__ */ new WeakMap();
function Dr(e) {
  var t = ne;
  if (t === null)
    return J.f |= Tt, e;
  if (M && e instanceof Error && !wa.has(e) && wa.set(e, as(e, t)), (t.f & Fa) === 0) {
    if ((t.f & Ha) === 0)
      throw M && !t.parent && e instanceof Error && Mr(e), e;
    t.b.error(e);
  } else
    mn(e, t);
}
r(Dr, "handle_error");
function mn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ha) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw M && e instanceof Error && Mr(e), e;
}
r(mn, "invoke_error_boundary");
function as(e, t) {
  const n = rn(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = qa ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[Ci].split("/").pop()}`, i = i.p;
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
r(as, "get_adjustments");
function Mr(e) {
  const t = wa.get(e);
  t && (Yt(e, "message", {
    value: t.message
  }), Yt(e, "stack", {
    value: t.stack
  }));
}
r(Mr, "apply_adjustments");
const rs = -7169;
function ve(e, t) {
  e.f = e.f & rs | t;
}
r(ve, "set_signal_status");
function ja(e) {
  (e.f & Ve) !== 0 || e.deps === null ? ve(e, he) : ve(e, rt);
}
r(ja, "update_derived_status");
function Lr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & we) === 0 || (t.f & Mt) === 0 || (t.f ^= Mt, Lr(
        /** @type {Derived} */
        t.deps
      ));
}
r(Lr, "clear_marked");
function Or(e, t, n) {
  (e.f & Se) !== 0 ? t.add(e) : (e.f & rt) !== 0 && n.add(e), Lr(e.deps), ve(e, he);
}
r(Or, "defer_effect");
const Un = /* @__PURE__ */ new Set();
let se = null, Sa = null, Ze = null, Te = [], ia = null, ka = !1, Tn = !1;
var ln, cn, Ft, un, Dn, Mn, jt, mt, fn, _t, Ea, xa, Pr;
const Xn = class Xn {
  constructor() {
    U(this, _t);
    Be(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Be(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Be(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    U(this, ln, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    U(this, cn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    U(this, Ft, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    U(this, un, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    U(this, Dn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    U(this, Mn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    U(this, jt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    U(this, mt, /* @__PURE__ */ new Map());
    Be(this, "is_fork", !1);
    U(this, fn, !1);
  }
  is_deferred() {
    return this.is_fork || m(this, un) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    m(this, mt).has(t) || m(this, mt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = m(this, mt).get(t);
    if (n) {
      m(this, mt).delete(t);
      for (var a of n.d)
        ve(a, Se), $e(a);
      for (a of n.m)
        ve(a, rt), $e(a);
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
      ke(this, _t, Ea).call(this, s, n, a);
    if (this.is_deferred()) {
      ke(this, _t, xa).call(this, a), ke(this, _t, xa).call(this, n);
      for (const [s, i] of m(this, mt))
        jr(s, i);
    } else {
      for (const s of m(this, ln)) s();
      m(this, ln).clear(), m(this, Ft) === 0 && ke(this, _t, Pr).call(this), Sa = this, se = null, rr(a), rr(n), Sa = null, m(this, Dn)?.resolve();
    }
    Ze = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== pe && !this.previous.has(t) && this.previous.set(t, n), (t.f & Tt) === 0 && (this.current.set(t, t.v), Ze?.set(t, t.v));
  }
  activate() {
    se = this, this.apply();
  }
  deactivate() {
    se === this && (se = null, Ze = null);
  }
  flush() {
    if (this.activate(), Te.length > 0) {
      if (Rr(), se !== null && se !== this)
        return;
    } else m(this, Ft) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of m(this, cn)) t(this);
    m(this, cn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    q(this, Ft, m(this, Ft) + 1), t && q(this, un, m(this, un) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    q(this, Ft, m(this, Ft) - 1), t && q(this, un, m(this, un) - 1), !m(this, fn) && (q(this, fn, !0), Wt(() => {
      q(this, fn, !1), this.is_deferred() ? Te.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of m(this, Mn))
      m(this, jt).delete(t), ve(t, Se), $e(t);
    for (const t of m(this, jt))
      ve(t, rt), $e(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    m(this, ln).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    m(this, cn).add(t);
  }
  settled() {
    return (m(this, Dn) ?? q(this, Dn, yr())).promise;
  }
  static ensure() {
    if (se === null) {
      const t = se = new Xn();
      Un.add(se), Tn || Wt(() => {
        se === t && t.flush();
      });
    }
    return se;
  }
  apply() {
  }
};
ln = new WeakMap(), cn = new WeakMap(), Ft = new WeakMap(), un = new WeakMap(), Dn = new WeakMap(), Mn = new WeakMap(), jt = new WeakMap(), mt = new WeakMap(), fn = new WeakMap(), _t = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ea = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= he;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, u = (o & (it | Xt)) !== 0, c = u && (o & he) !== 0, f = c || (o & Fe) !== 0 || m(this, mt).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= he : i !== null && (o & (pa | ta | Sr)) !== 0 ? i.b.defer_effect(s) : (o & pa) !== 0 ? n.push(s) : Hn(s) && ((o & wt) !== 0 && m(this, jt).add(s), An(s));
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
xa = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Or(t[n], m(this, Mn), m(this, jt));
}, "#defer_effects"), Pr = /* @__PURE__ */ r(function() {
  var s;
  if (Un.size > 1) {
    this.previous.clear();
    var t = Ze, n = !0;
    for (const i of Un) {
      if (i === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [c, f] of this.current) {
        if (i.current.has(c))
          if (n && f !== i.current.get(c))
            i.current.set(c, f);
          else
            continue;
        o.push(c);
      }
      if (o.length === 0)
        continue;
      const u = [...i.current.keys()].filter((c) => !this.current.has(c));
      if (u.length > 0) {
        var a = Te;
        Te = [];
        const c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const v of o)
          Hr(v, u, c, f);
        if (Te.length > 0) {
          se = i, i.apply();
          for (const v of Te)
            ke(s = i, _t, Ea).call(s, v, [], []);
          i.deactivate();
        }
        Te = a;
      }
    }
    se = null, Ze = t;
  }
  this.committed = !0, Un.delete(this);
}, "#commit"), r(Xn, "Batch");
let It = Xn;
function is(e) {
  var t = Tn;
  Tn = !0;
  try {
    for (var n; ; ) {
      if (ns(), Te.length === 0 && (se?.flush(), Te.length === 0))
        return ia = null, /** @type {T} */
        n;
      Rr();
    }
  } finally {
    Tn = t;
  }
}
r(is, "flushSync");
function Rr() {
  ka = !0;
  var e = M ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Te.length > 0; ) {
      var n = It.ensure();
      if (t++ > 1e3) {
        if (M) {
          var a = /* @__PURE__ */ new Map();
          for (const i of n.current.keys())
            for (const [o, u] of i.updated ?? []) {
              var s = a.get(o);
              s || (s = { error: u.error, count: 0 }, a.set(o, s)), s.count += u.count;
            }
          for (const i of a.values())
            i.error && console.error(i.error);
        }
        ss();
      }
      if (n.process(Te), At.clear(), M)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (Te = [], ka = !1, ia = null, M)
      for (
        const i of
        /** @type {Set<Source>} */
        e
      )
        i.updated = null;
  }
}
r(Rr, "flush_effects");
function ss() {
  try {
    Bi();
  } catch (e) {
    M && Yt(e, "stack", { value: "" }), mn(e, ia);
  }
}
r(ss, "infinite_loop_guard");
let ht = null;
function rr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (Ct | Fe)) === 0 && Hn(a) && (ht = /* @__PURE__ */ new Set(), An(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? ei(a) : a.fn = null), ht?.size > 0)) {
        At.clear();
        for (const s of ht) {
          if ((s.f & (Ct | Fe)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            ht.has(o) && (ht.delete(o), i.push(o)), o = o.parent;
          for (let u = i.length - 1; u >= 0; u--) {
            const c = i[u];
            (c.f & (Ct | Fe)) === 0 && An(c);
          }
        }
        ht.clear();
      }
    }
    ht = null;
  }
}
r(rr, "flush_queued_effects");
function Hr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & we) !== 0 ? Hr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (na | wt)) !== 0 && (i & Se) === 0 && Fr(s, t, a) && (ve(s, Se), $e(
        /** @type {Effect} */
        s
      ));
    }
}
r(Hr, "mark_effects");
function Fr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Vt.call(t, s))
        return !0;
      if ((s.f & we) !== 0 && Fr(
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
r(Fr, "depends_on");
function $e(e) {
  for (var t = ia = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ka && t === ne && (n & wt) !== 0 && (n & kr) === 0)
      return;
    if ((n & (Xt | it)) !== 0) {
      if ((n & he) === 0) return;
      t.f ^= he;
    }
  }
  Te.push(t);
}
r($e, "schedule_effect");
function jr(e, t) {
  if (!((e.f & it) !== 0 && (e.f & he) !== 0)) {
    (e.f & Se) !== 0 ? t.d.push(e) : (e.f & rt) !== 0 && t.m.push(e), ve(e, he);
    for (var n = e.first; n !== null; )
      jr(n, t), n = n.next;
  }
}
r(jr, "reset_branch");
function zr(e) {
  let t = 0, n = Jt(0), a;
  return M && ot(n, "createSubscriber version"), () => {
    Ga() && (l(n), Qr(() => (t === 0 && (a = fi(() => e(() => Wn(n)))), t += 1, () => {
      Wt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, Wn(n));
      });
    })));
  };
}
r(zr, "createSubscriber");
var os = hn | wn | Ha;
function ls(e, t, n) {
  new Na(e, t, n);
}
r(ls, "boundary");
var qe, Ra, ct, zt, ut, Ge, Ce, ft, gt, Et, Bt, xt, dn, Ut, vn, _n, dt, Zn, be, cs, us, Ca, qn, Gn, Ta;
const Ja = class Ja {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    U(this, be);
    /** @type {Boundary | null} */
    Be(this, "parent");
    Be(this, "is_pending", !1);
    /** @type {TemplateNode} */
    U(this, qe);
    /** @type {TemplateNode | null} */
    U(this, Ra, null);
    /** @type {BoundaryProps} */
    U(this, ct);
    /** @type {((anchor: Node) => void)} */
    U(this, zt);
    /** @type {Effect} */
    U(this, ut);
    /** @type {Effect | null} */
    U(this, Ge, null);
    /** @type {Effect | null} */
    U(this, Ce, null);
    /** @type {Effect | null} */
    U(this, ft, null);
    /** @type {DocumentFragment | null} */
    U(this, gt, null);
    /** @type {TemplateNode | null} */
    U(this, Et, null);
    U(this, Bt, 0);
    U(this, xt, 0);
    U(this, dn, !1);
    U(this, Ut, !1);
    /** @type {Set<Effect>} */
    U(this, vn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    U(this, _n, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    U(this, dt, null);
    U(this, Zn, zr(() => (q(this, dt, Jt(m(this, Bt))), M && ot(m(this, dt), "$effect.pending()"), () => {
      q(this, dt, null);
    })));
    q(this, qe, t), q(this, ct, n), q(this, zt, a), this.parent = /** @type {Effect} */
    ne.b, this.is_pending = !!m(this, ct).pending, q(this, ut, Ka(() => {
      ne.b = this;
      {
        var s = ke(this, be, Ca).call(this);
        try {
          q(this, Ge, Ke(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        m(this, xt) > 0 ? ke(this, be, Gn).call(this) : this.is_pending = !1;
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
    Or(t, m(this, vn), m(this, _n));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!m(this, ct).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ke(this, be, Ta).call(this, t), q(this, Bt, m(this, Bt) + t), !(!m(this, dt) || m(this, dn)) && (q(this, dn, !0), Wt(() => {
      q(this, dn, !1), m(this, dt) && pn(m(this, dt), m(this, Bt));
    }));
  }
  get_effect_pending() {
    return m(this, Zn).call(this), l(
      /** @type {Source<number>} */
      m(this, dt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = m(this, ct).onerror;
    let a = m(this, ct).failed;
    if (m(this, Ut) || !n && !a)
      throw t;
    m(this, Ge) && (Ie(m(this, Ge)), q(this, Ge, null)), m(this, Ce) && (Ie(m(this, Ce)), q(this, Ce, null)), m(this, ft) && (Ie(m(this, ft)), q(this, ft, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        Qi();
        return;
      }
      s = !0, i && Vi(), It.ensure(), q(this, Bt, 0), m(this, ft) !== null && Gt(m(this, ft), () => {
        q(this, ft, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, Ge, ke(this, be, qn).call(this, () => (q(this, Ut, !1), Ke(() => m(this, zt).call(this, m(this, qe)))))), m(this, xt) > 0 ? ke(this, be, Gn).call(this) : this.is_pending = !1;
    }, "reset");
    Wt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (u) {
        mn(u, m(this, ut) && m(this, ut).parent);
      }
      a && q(this, ft, ke(this, be, qn).call(this, () => {
        It.ensure(), q(this, Ut, !0);
        try {
          return Ke(() => {
            a(
              m(this, qe),
              () => t,
              () => o
            );
          });
        } catch (u) {
          return mn(
            u,
            /** @type {Effect} */
            m(this, ut).parent
          ), null;
        } finally {
          q(this, Ut, !1);
        }
      }));
    });
  }
};
qe = new WeakMap(), Ra = new WeakMap(), ct = new WeakMap(), zt = new WeakMap(), ut = new WeakMap(), Ge = new WeakMap(), Ce = new WeakMap(), ft = new WeakMap(), gt = new WeakMap(), Et = new WeakMap(), Bt = new WeakMap(), xt = new WeakMap(), dn = new WeakMap(), Ut = new WeakMap(), vn = new WeakMap(), _n = new WeakMap(), dt = new WeakMap(), Zn = new WeakMap(), be = new WeakSet(), cs = /* @__PURE__ */ r(function() {
  try {
    q(this, Ge, Ke(() => m(this, zt).call(this, m(this, qe))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), us = /* @__PURE__ */ r(function() {
  const t = m(this, ct).pending;
  t && (q(this, Ce, Ke(() => t(m(this, qe)))), Wt(() => {
    var n = ke(this, be, Ca).call(this);
    q(this, Ge, ke(this, be, qn).call(this, () => (It.ensure(), Ke(() => m(this, zt).call(this, n))))), m(this, xt) > 0 ? ke(this, be, Gn).call(this) : (Gt(
      /** @type {Effect} */
      m(this, Ce),
      () => {
        q(this, Ce, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Ca = /* @__PURE__ */ r(function() {
  var t = m(this, qe);
  return this.is_pending && (q(this, Et, Dt()), m(this, qe).before(m(this, Et)), t = m(this, Et)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
qn = /* @__PURE__ */ r(function(t) {
  var n = ne, a = J, s = ye;
  nt(m(this, ut)), Je(m(this, ut)), bn(m(this, ut).ctx);
  try {
    return t();
  } catch (i) {
    return Dr(i), null;
  } finally {
    nt(n), Je(a), bn(s);
  }
}, "#run"), Gn = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    m(this, ct).pending
  );
  m(this, Ge) !== null && (q(this, gt, document.createDocumentFragment()), m(this, gt).append(
    /** @type {TemplateNode} */
    m(this, Et)
  ), ai(m(this, Ge), m(this, gt))), m(this, Ce) === null && q(this, Ce, Ke(() => t(m(this, qe))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Ta = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ke(n = this.parent, be, Ta).call(n, t);
    return;
  }
  if (q(this, xt, m(this, xt) + t), m(this, xt) === 0) {
    this.is_pending = !1;
    for (const a of m(this, vn))
      ve(a, Se), $e(a);
    for (const a of m(this, _n))
      ve(a, rt), $e(a);
    m(this, vn).clear(), m(this, _n).clear(), m(this, Ce) && Gt(m(this, Ce), () => {
      q(this, Ce, null);
    }), m(this, gt) && (m(this, qe).before(m(this, gt)), q(this, gt, null));
  }
}, "#update_pending_count"), r(Ja, "Boundary");
let Na = Ja;
function fs(e, t, n, a) {
  const s = za;
  var i = e.filter((d) => !d.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = se, u = (
    /** @type {Effect} */
    ne
  ), c = ds(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((d) => d.promise)) : null;
  function v(d) {
    c();
    try {
      a(d);
    } catch (p) {
      (u.f & Ct) === 0 && mn(p, u);
    }
    o?.deactivate(), Wa();
  }
  if (r(v, "finish"), n.length === 0) {
    f.then(() => v(t.map(s)));
    return;
  }
  function _() {
    c(), Promise.all(n.map((d) => /* @__PURE__ */ _s(d))).then((d) => v([...t.map(s), ...d])).catch((d) => mn(d, u));
  }
  r(_, "run"), f ? f.then(_) : _();
}
r(fs, "flatten");
function ds() {
  var e = ne, t = J, n = ye, a = se;
  if (M)
    var s = In;
  return /* @__PURE__ */ r(function(o = !0) {
    nt(e), Je(t), bn(n), o && a?.activate(), M && Yn(s);
  }, "restore");
}
r(ds, "capture");
function Wa() {
  nt(null), Je(null), bn(null), M && Yn(null);
}
r(Wa, "unset_context");
const vs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function za(e) {
  var t = we | Se, n = J !== null && (J.f & we) !== 0 ? (
    /** @type {Derived} */
    J
  ) : null;
  return ne !== null && (ne.f |= wn), {
    ctx: ye,
    deps: null,
    effects: null,
    equals: Nr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      pe
    ),
    wv: 0,
    parent: n ?? ne,
    ac: null
  };
}
r(za, "derived");
// @__NO_SIDE_EFFECTS__
function _s(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ne
  );
  a === null && Ri();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Jt(
    /** @type {V} */
    pe
  );
  M && (o.label = t);
  var u = !J, c = /* @__PURE__ */ new Map();
  return As(() => {
    var f = yr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        v === se && v.committed && v.deactivate(), Wa();
      });
    } catch (p) {
      f.reject(p), Wa();
    }
    var v = (
      /** @type {Batch} */
      se
    );
    if (u) {
      var _ = s.is_rendered();
      s.update_pending_count(1), v.increment(_), c.get(v)?.reject(nn), c.delete(v), c.set(v, f);
    }
    const d = /* @__PURE__ */ r((p, w = void 0) => {
      if (v.activate(), w)
        w !== nn && (o.f |= Tt, pn(o, w));
      else {
        (o.f & Tt) !== 0 && (o.f ^= Tt), pn(o, p);
        for (const [W, y] of c) {
          if (c.delete(W), W === v) break;
          y.reject(nn);
        }
      }
      u && (s.update_pending_count(-1), v.decrement(_));
    }, "handler");
    f.promise.then(d, (p) => d(null, p || "unknown"));
  }), Yr(() => {
    for (const f of c.values())
      f.reject(nn);
  }), M && (o.f |= na), new Promise((f) => {
    function v(_) {
      function d() {
        _ === i ? f(o) : v(i);
      }
      r(d, "go"), _.then(d, d);
    }
    r(v, "next"), v(i);
  });
}
r(_s, "async_derived");
// @__NO_SIDE_EFFECTS__
function F(e) {
  const t = /* @__PURE__ */ za(e);
  return ri(t), t;
}
r(F, "user_derived");
// @__NO_SIDE_EFFECTS__
function hs(e) {
  const t = /* @__PURE__ */ za(e);
  return t.equals = Tr, t;
}
r(hs, "derived_safe_equal");
function Ia(e) {
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
r(Ia, "destroy_derived_effects");
let _a = [];
function bs(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & we) === 0)
      return (t.f & Ct) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(bs, "get_derived_parent_effect");
function Ba(e) {
  var t, n = ne;
  if (nt(bs(e)), M) {
    let a = gn;
    ir(/* @__PURE__ */ new Set());
    try {
      Vt.call(_a, e) && Hi(), _a.push(e), e.f &= ~Mt, Ia(e), t = Aa(e);
    } finally {
      nt(n), ir(a), _a.pop();
    }
  } else
    try {
      e.f &= ~Mt, Ia(e), t = Aa(e);
    } finally {
      nt(n);
    }
  return t;
}
r(Ba, "execute_derived");
function Br(e) {
  var t = Ba(e);
  if (!e.equals(t) && (e.wv = si(), (!se?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ve(e, he);
    return;
  }
  Qt || (Ze !== null ? (Ga() || se?.is_fork) && Ze.set(e, t) : ja(e));
}
r(Br, "update_derived");
let gn = /* @__PURE__ */ new Set();
const At = /* @__PURE__ */ new Map();
function ir(e) {
  gn = e;
}
r(ir, "set_eager_effects");
let Ua = !1;
function ms() {
  Ua = !0;
}
r(ms, "set_eager_effects_deferred");
function Jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Nr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(Jt, "source");
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  const n = Jt(e);
  return ri(n), n;
}
r(Re, "state");
// @__NO_SIDE_EFFECTS__
function gs(e, t = !1, n = !0) {
  const a = Jt(e);
  return t || (a.equals = Tr), a;
}
r(gs, "mutable_source");
function He(e, t, n = !1) {
  J !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!et || (J.f & Vn) !== 0) && Ir() && (J.f & (we | wt | na | Vn)) !== 0 && (Ye === null || !Vt.call(Ye, e)) && Ki();
  let a = n ? an(t) : t;
  return M && Wr(
    a,
    /** @type {string} */
    e.label
  ), pn(e, a);
}
r(He, "set");
function pn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Qt ? At.set(e, t) : At.set(e, n), e.v = t;
    var a = It.ensure();
    if (a.capture(e, n), M) {
      if (ne !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = Zi("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      ne !== null && (e.set_during_effect = !0);
    }
    if ((e.f & we) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & Se) !== 0 && Ba(s), ja(s);
    }
    e.wv = si(), qr(e, Se), ne !== null && (ne.f & he) !== 0 && (ne.f & (it | Xt)) === 0 && (Ue === null ? Ms([e]) : Ue.push(e)), !a.is_fork && gn.size > 0 && !Ua && Ur();
  }
  return t;
}
r(pn, "internal_set");
function Ur() {
  Ua = !1;
  for (const e of gn)
    (e.f & he) !== 0 && ve(e, rt), Hn(e) && An(e);
  gn.clear();
}
r(Ur, "flush_eager_effects");
function Wn(e) {
  He(e, e.v + 1);
}
r(Wn, "increment");
function qr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (M && (o & Vn) !== 0) {
        gn.add(i);
        continue;
      }
      var u = (o & Se) === 0;
      if (u && ve(i, t), (o & we) !== 0) {
        var c = (
          /** @type {Derived} */
          i
        );
        Ze?.delete(c), (o & Mt) === 0 && (o & Ve && (i.f |= Mt), qr(c, rt));
      } else u && ((o & wt) !== 0 && ht !== null && ht.add(
        /** @type {Effect} */
        i
      ), $e(
        /** @type {Effect} */
        i
      ));
    }
}
r(qr, "mark_reactions");
const ps = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function an(e) {
  if (typeof e != "object" || e === null || sn in e)
    return e;
  const t = pr(e);
  if (t !== Ai && t !== Di)
    return e;
  var n = /* @__PURE__ */ new Map(), a = gr(e), s = /* @__PURE__ */ Re(0), i = Kt, o = /* @__PURE__ */ r((v) => {
    if (Kt === i)
      return v();
    var _ = J, d = Kt;
    Je(null), cr(i);
    var p = v();
    return Je(_), cr(d), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Re(
    /** @type {any[]} */
    e.length
  )), M && (e = /** @type {any} */
  ws(
    /** @type {any[]} */
    e
  )));
  var u = "";
  let c = !1;
  function f(v) {
    if (!c) {
      c = !0, u = v, ot(s, `${u} version`);
      for (const [_, d] of n)
        ot(d, Pt(u, _));
      c = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, _, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && qi();
        var p = n.get(_);
        return p === void 0 ? p = o(() => {
          var w = /* @__PURE__ */ Re(d.value);
          return n.set(_, w), M && typeof _ == "string" && ot(w, Pt(u, _)), w;
        }) : He(p, d.value, !0), !0;
      },
      deleteProperty(v, _) {
        var d = n.get(_);
        if (d === void 0) {
          if (_ in v) {
            const p = o(() => /* @__PURE__ */ Re(pe));
            n.set(_, p), Wn(s), M && ot(p, Pt(u, _));
          }
        } else
          He(d, pe), Wn(s);
        return !0;
      },
      get(v, _, d) {
        if (_ === sn)
          return e;
        if (M && _ === Er)
          return f;
        var p = n.get(_), w = _ in v;
        if (p === void 0 && (!w || rn(v, _)?.writable) && (p = o(() => {
          var y = an(w ? v[_] : pe), D = /* @__PURE__ */ Re(y);
          return M && ot(D, Pt(u, _)), D;
        }), n.set(_, p)), p !== void 0) {
          var W = l(p);
          return W === pe ? void 0 : W;
        }
        return Reflect.get(v, _, d);
      },
      getOwnPropertyDescriptor(v, _) {
        var d = Reflect.getOwnPropertyDescriptor(v, _);
        if (d && "value" in d) {
          var p = n.get(_);
          p && (d.value = l(p));
        } else if (d === void 0) {
          var w = n.get(_), W = w?.v;
          if (w !== void 0 && W !== pe)
            return {
              enumerable: !0,
              configurable: !0,
              value: W,
              writable: !0
            };
        }
        return d;
      },
      has(v, _) {
        if (_ === sn)
          return !0;
        var d = n.get(_), p = d !== void 0 && d.v !== pe || Reflect.has(v, _);
        if (d !== void 0 || ne !== null && (!p || rn(v, _)?.writable)) {
          d === void 0 && (d = o(() => {
            var W = p ? an(v[_]) : pe, y = /* @__PURE__ */ Re(W);
            return M && ot(y, Pt(u, _)), y;
          }), n.set(_, d));
          var w = l(d);
          if (w === pe)
            return !1;
        }
        return p;
      },
      set(v, _, d, p) {
        var w = n.get(_), W = _ in v;
        if (a && _ === "length")
          for (var y = d; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var D = n.get(y + "");
            D !== void 0 ? He(D, pe) : y in v && (D = o(() => /* @__PURE__ */ Re(pe)), n.set(y + "", D), M && ot(D, Pt(u, y)));
          }
        if (w === void 0)
          (!W || rn(v, _)?.writable) && (w = o(() => /* @__PURE__ */ Re(void 0)), M && ot(w, Pt(u, _)), He(w, an(d)), n.set(_, w));
        else {
          W = w.v !== pe;
          var ae = o(() => an(d));
          He(w, ae);
        }
        var S = Reflect.getOwnPropertyDescriptor(v, _);
        if (S?.set && S.set.call(p, d), !W) {
          if (a && typeof _ == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), H = Number(_);
            Number.isInteger(H) && H >= I.v && He(I, H + 1);
          }
          Wn(s);
        }
        return !0;
      },
      ownKeys(v) {
        l(s);
        var _ = Reflect.ownKeys(v).filter((w) => {
          var W = n.get(w);
          return W === void 0 || W.v !== pe;
        });
        for (var [d, p] of n)
          p.v !== pe && !(d in v) && _.push(d);
        return _;
      },
      setPrototypeOf() {
        Gi();
      }
    }
  );
}
r(an, "proxy");
function Pt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : ps.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(Pt, "get_label");
function ha(e) {
  try {
    if (e !== null && typeof e == "object" && sn in e)
      return e[sn];
  } catch {
  }
  return e;
}
r(ha, "get_proxied_value");
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
      ) ? function(...i) {
        ms();
        var o = s.apply(this, i);
        return Ur(), o;
      } : s;
    }
  });
}
r(ws, "inspectable_array");
function Ss() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(i, o) {
    const u = n.call(this, i, o);
    if (u === -1) {
      for (let c = o ?? 0; c < this.length; c += 1)
        if (ha(this[c]) === i) {
          va("array.indexOf(...)");
          break;
        }
    }
    return u;
  }, e.lastIndexOf = function(i, o) {
    const u = a.call(this, i, o ?? this.length - 1);
    if (u === -1) {
      for (let c = 0; c <= (o ?? this.length - 1); c += 1)
        if (ha(this[c]) === i) {
          va("array.lastIndexOf(...)");
          break;
        }
    }
    return u;
  }, e.includes = function(i, o) {
    const u = s.call(this, i, o);
    if (!u) {
      for (let c = 0; c < this.length; c += 1)
        if (ha(this[c]) === i) {
          va("array.includes(...)");
          break;
        }
    }
    return u;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
r(Ss, "init_array_prototype_warnings");
var sr, qa, Gr, Kr;
function ks() {
  if (sr === void 0) {
    sr = window, qa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Gr = rn(t, "firstChild").get, Kr = rn(t, "nextSibling").get, tr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), tr(n) && (n.__t = void 0), M && (e.__svelte_meta = null, Ss());
  }
}
r(ks, "init_operations");
function Dt(e = "") {
  return document.createTextNode(e);
}
r(Dt, "create_text");
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return (
    /** @type {TemplateNode | null} */
    Gr.call(e)
  );
}
r(Nt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return (
    /** @type {TemplateNode | null} */
    Kr.call(e)
  );
}
r(Rn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ Nt(e);
}
r(h, "child");
function yt(e, t = !1) {
  {
    var n = /* @__PURE__ */ Nt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Rn(n) : n;
  }
}
r(yt, "first_child");
function b(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ Rn(a);
  return a;
}
r(b, "sibling");
function Es(e) {
  e.textContent = "";
}
r(Es, "clear_text_content");
function Vr() {
  return !1;
}
r(Vr, "should_defer_append");
let or = !1;
function xs() {
  or || (or = !0, document.addEventListener(
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
r(xs, "add_form_reset_listener");
function sa(e) {
  var t = J, n = ne;
  Je(null), nt(null);
  try {
    return e();
  } finally {
    Je(t), nt(n);
  }
}
r(sa, "without_reactive_context");
function Ns(e, t, n, a = n) {
  e.addEventListener(t, () => sa(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), xs();
}
r(Ns, "listen_to_event_and_reset_event");
function Cs(e) {
  ne === null && (J === null && zi(e), ji()), Qt && Fi(e);
}
r(Cs, "validate_effect");
function Ts(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(Ts, "push_effect");
function Lt(e, t, n) {
  var a = ne;
  if (M)
    for (; a !== null && (a.f & Vn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Fe) !== 0 && (e |= Fe);
  var s = {
    ctx: ye,
    deps: null,
    nodes: null,
    f: e | Se | Ve,
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
  if (M && (s.component_function = Pn), n)
    try {
      An(s), s.f |= Fa;
    } catch (u) {
      throw Ie(s), u;
    }
  else t !== null && $e(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & wn) === 0 && (i = i.first, (e & wt) !== 0 && (e & hn) !== 0 && i !== null && (i.f |= hn)), i !== null && (i.parent = a, a !== null && Ts(i, a), J !== null && (J.f & we) !== 0 && (e & Xt) === 0)) {
    var o = (
      /** @type {Derived} */
      J
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Lt, "create_effect");
function Ga() {
  return J !== null && !et;
}
r(Ga, "effect_tracking");
function Yr(e) {
  const t = Lt(ta, null, !1);
  return ve(t, he), t.teardown = e, t;
}
r(Yr, "teardown");
function Ws(e) {
  Cs("$effect"), M && Yt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ne.f
  ), n = !J && (t & it) !== 0 && (t & Fa) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      ye
    );
    (a.e ??= []).push(e);
  } else
    return Jr(e);
}
r(Ws, "user_effect");
function Jr(e) {
  return Lt(pa | Li, e, !1);
}
r(Jr, "create_user_effect");
function Is(e) {
  It.ensure();
  const t = Lt(Xt | wn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Gt(t, () => {
      Ie(t), a(void 0);
    }) : (Ie(t), a(void 0));
  });
}
r(Is, "component_root");
function As(e) {
  return Lt(na | wn, e, !0);
}
r(As, "async_effect");
function Qr(e, t = 0) {
  return Lt(ta | t, e, !0);
}
r(Qr, "render_effect");
function B(e, t = [], n = [], a = []) {
  fs(a, t, n, (s) => {
    Lt(ta, () => e(...s.map(l)), !0);
  });
}
r(B, "template_effect");
function Ka(e, t = 0) {
  var n = Lt(wt | t, e, !0);
  return M && (n.dev_stack = In), n;
}
r(Ka, "block");
function Ke(e) {
  return Lt(it | wn, e, !0);
}
r(Ke, "branch");
function Xr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Qt, a = J;
    lr(!0), Je(null);
    try {
      t.call(null);
    } finally {
      lr(n), Je(a);
    }
  }
}
r(Xr, "execute_effect_teardown");
function Zr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && sa(() => {
      s.abort(nn);
    });
    var a = n.next;
    (n.f & Xt) !== 0 ? n.parent = null : Ie(n, t), n = a;
  }
}
r(Zr, "destroy_effect_children");
function Ds(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & it) === 0 && Ie(t), t = n;
  }
}
r(Ds, "destroy_block_effect_children");
function Ie(e, t = !0) {
  var n = !1;
  (t || (e.f & kr) !== 0) && e.nodes !== null && e.nodes.end !== null && ($r(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Zr(e, t && !n), Jn(e, 0), ve(e, Ct);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Xr(e);
  var s = e.parent;
  s !== null && s.first !== null && ei(e), M && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Ie, "destroy_effect");
function $r(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Rn(e);
    e.remove(), e = n;
  }
}
r($r, "remove_effect_dom");
function ei(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(ei, "unlink_effect");
function Gt(e, t, n = !0) {
  var a = [];
  ti(e, a, !0);
  var s = /* @__PURE__ */ r(() => {
    n && Ie(e), t && t();
  }, "fn"), i = a.length;
  if (i > 0) {
    var o = /* @__PURE__ */ r(() => --i || s(), "check");
    for (var u of a)
      u.out(o);
  } else
    s();
}
r(Gt, "pause_effect");
function ti(e, t, n) {
  if ((e.f & Fe) === 0) {
    e.f ^= Fe;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || n) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & hn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & it) !== 0 && (e.f & wt) !== 0;
      ti(s, t, o ? n : !1), s = i;
    }
  }
}
r(ti, "pause_children");
function Va(e) {
  ni(e, !0);
}
r(Va, "resume_effect");
function ni(e, t) {
  if ((e.f & Fe) !== 0) {
    e.f ^= Fe, (e.f & he) === 0 && (ve(e, Se), $e(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & hn) !== 0 || (n.f & it) !== 0;
      ni(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r(ni, "resume_children");
function ai(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ Rn(n);
      t.append(n), n = s;
    }
}
r(ai, "move_effect");
let Kn = !1, Qt = !1;
function lr(e) {
  Qt = e;
}
r(lr, "set_is_destroying_effect");
let J = null, et = !1;
function Je(e) {
  J = e;
}
r(Je, "set_active_reaction");
let ne = null;
function nt(e) {
  ne = e;
}
r(nt, "set_active_effect");
let Ye = null;
function ri(e) {
  J !== null && (Ye === null ? Ye = [e] : Ye.push(e));
}
r(ri, "push_reaction_value");
let We = null, Oe = 0, Ue = null;
function Ms(e) {
  Ue = e;
}
r(Ms, "set_untracked_writes");
let ii = 1, Ht = 0, Kt = Ht;
function cr(e) {
  Kt = e;
}
r(cr, "set_update_version");
function si() {
  return ++ii;
}
r(si, "increment_write_version");
function Hn(e) {
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if (t & we && (e.f &= ~Mt), (t & rt) !== 0) {
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
    (t & Ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ze === null && ve(e, he);
  }
  return !1;
}
r(Hn, "is_dirty");
function oi(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Ye !== null && Vt.call(Ye, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & we) !== 0 ? oi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ve(i, Se) : (i.f & he) !== 0 && ve(i, rt), $e(
        /** @type {Effect} */
        i
      ));
    }
}
r(oi, "schedule_possible_effect_self_invalidation");
function Aa(e) {
  var t = We, n = Oe, a = Ue, s = J, i = Ye, o = ye, u = et, c = Kt, f = e.f;
  We = /** @type {null | Value[]} */
  null, Oe = 0, Ue = null, J = (f & (it | Xt)) === 0 ? e : null, Ye = null, bn(e.ctx), et = !1, Kt = ++Ht, e.ac !== null && (sa(() => {
    e.ac.abort(nn);
  }), e.ac = null);
  try {
    e.f |= ya;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v(), d = e.deps, p = se?.is_fork;
    if (We !== null) {
      var w;
      if (p || Jn(e, Oe), d !== null && Oe > 0)
        for (d.length = Oe + We.length, w = 0; w < We.length; w++)
          d[Oe + w] = We[w];
      else
        e.deps = d = We;
      if (Ga() && (e.f & Ve) !== 0)
        for (w = Oe; w < d.length; w++)
          (d[w].reactions ??= []).push(e);
    } else !p && d !== null && Oe < d.length && (Jn(e, Oe), d.length = Oe);
    if (Ir() && Ue !== null && !et && d !== null && (e.f & (we | rt | Se)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Ue.length; w++)
        oi(
          Ue[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ht++, s.deps !== null)
        for (let W = 0; W < n; W += 1)
          s.deps[W].rv = Ht;
      if (t !== null)
        for (const W of t)
          W.rv = Ht;
      Ue !== null && (a === null ? a = Ue : a.push(.../** @type {Source[]} */
      Ue));
    }
    return (e.f & Tt) !== 0 && (e.f ^= Tt), _;
  } catch (W) {
    return Dr(W);
  } finally {
    e.f ^= ya, We = t, Oe = n, Ue = a, J = s, Ye = i, bn(o), et = u, Kt = c;
  }
}
r(Aa, "update_reaction");
function Ls(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Wi.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (We === null || !Vt.call(We, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ve) !== 0 && (i.f ^= Ve, i.f &= ~Mt), ja(i), Ia(i), Jn(i, 0);
  }
}
r(Ls, "remove_reaction");
function Jn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Ls(e, n[a]);
}
r(Jn, "remove_reactions");
function An(e) {
  var t = e.f;
  if ((t & Ct) === 0) {
    ve(e, he);
    var n = ne, a = Kn;
    if (ne = e, Kn = !0, M) {
      var s = Pn;
      ar(e.component_function);
      var i = (
        /** @type {any} */
        In
      );
      Yn(e.dev_stack ?? In);
    }
    try {
      (t & (wt | Sr)) !== 0 ? Ds(e) : Zr(e), Xr(e);
      var o = Aa(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ii;
      var u;
      M && Xi && (e.f & Se) !== 0 && e.deps;
    } finally {
      Kn = a, ne = n, M && (ar(s), Yn(i));
    }
  }
}
r(An, "update_effect");
async function Os() {
  await Promise.resolve(), is();
}
r(Os, "tick");
function l(e) {
  var t = e.f, n = (t & we) !== 0;
  if (J !== null && !et) {
    var a = ne !== null && (ne.f & Ct) !== 0;
    if (!a && (Ye === null || !Vt.call(Ye, e))) {
      var s = J.deps;
      if ((J.f & ya) !== 0)
        e.rv < Ht && (e.rv = Ht, We === null && s !== null && s[Oe] === e ? Oe++ : We === null ? We = [e] : We.push(e));
      else {
        (J.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [J] : Vt.call(i, J) || i.push(J);
      }
    }
  }
  if (M && vs.delete(e), Qt && At.has(e))
    return At.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Qt) {
      var u = o.v;
      return ((o.f & he) === 0 && o.reactions !== null || ci(o)) && (u = Ba(o)), At.set(o, u), u;
    }
    var c = (o.f & Ve) === 0 && !et && J !== null && (Kn || (J.f & Ve) !== 0), f = o.deps === null;
    Hn(o) && (c && (o.f |= Ve), Br(o)), c && !f && li(o);
  }
  if (Ze?.has(e))
    return Ze.get(e);
  if ((e.f & Tt) !== 0)
    throw e.v;
  return e.v;
}
r(l, "get");
function li(e) {
  if (e.deps !== null) {
    e.f |= Ve;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & we) !== 0 && (t.f & Ve) === 0 && li(
        /** @type {Derived} */
        t
      );
  }
}
r(li, "reconnect");
function ci(e) {
  if (e.v === pe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (At.has(t) || (t.f & we) !== 0 && ci(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(ci, "depends_on_old_values");
function fi(e) {
  var t = et;
  try {
    return et = !0, e();
  } finally {
    et = t;
  }
}
r(fi, "untrack");
const di = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set();
function Ps(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || xn.call(t, i), !i.cancelBubble)
      return sa(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Wt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Ps, "create_event");
function bt(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Ps(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Yr(() => {
    t.removeEventListener(e, o, i);
  });
}
r(bt, "event");
function Me(e) {
  for (var t = 0; t < e.length; t++)
    di.add(e[t]);
  for (var n of Da)
    n(e);
}
r(Me, "delegate");
let ur = null;
function xn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  ur = e;
  var o = 0, u = ur === e && e.__root;
  if (u) {
    var c = s.indexOf(u);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    c <= f && (o = c);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = J, _ = ne;
    Je(null), nt(null);
    try {
      for (var d, p = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var W = i["__" + a];
          W != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && W.call(i, e);
        } catch (y) {
          d ? p.push(y) : d = y;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (d) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Je(v), nt(_);
    }
  }
}
r(xn, "handle_event_propagation");
function vi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(vi, "create_fragment_from_html");
function Qn(e, t) {
  var n = (
    /** @type {Effect} */
    ne
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(Qn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = vi(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Nt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || qa ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(o)
      ), c = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Qn(u, c);
    } else
      Qn(o, o);
    return o;
  };
}
r(R, "from_html");
function ba() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dt();
  return e.append(t, n), Qn(t, n), e;
}
r(ba, "comment");
function L(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(L, "append");
const Rs = ["touchstart", "touchmove"];
function Hs(e) {
  return Rs.includes(e);
}
r(Hs, "is_passive_event");
function A(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(A, "set_text");
function Fs(e, t) {
  return js(e, t);
}
r(Fs, "mount");
const en = /* @__PURE__ */ new Map();
function js(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ks();
  var u = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ r((_) => {
    for (var d = 0; d < _.length; d++) {
      var p = _[d];
      if (!u.has(p)) {
        u.add(p);
        var w = Hs(p);
        t.addEventListener(p, xn, { passive: w });
        var W = en.get(p);
        W === void 0 ? (document.addEventListener(p, xn, { passive: w }), en.set(p, 1)) : en.set(p, W + 1);
      }
    }
  }, "event_handle");
  c(ea(di)), Da.add(c);
  var f = void 0, v = Is(() => {
    var _ = n ?? t.appendChild(Dt());
    return ls(
      /** @type {TemplateNode} */
      _,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (d) => {
        Ee({});
        var p = (
          /** @type {ComponentContext} */
          ye
        );
        i && (p.c = i), s && (a.$$events = s), f = e(d, a) || {}, xe();
      }
    ), () => {
      for (var d of u) {
        t.removeEventListener(d, xn);
        var p = (
          /** @type {number} */
          en.get(d)
        );
        --p === 0 ? (document.removeEventListener(d, xn), en.delete(d)) : en.set(d, p);
      }
      Da.delete(c), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Ma.set(f, v), f;
}
r(js, "_mount");
let Ma = /* @__PURE__ */ new WeakMap();
function zs(e, t) {
  const n = Ma.get(e);
  return n ? (Ma.delete(e), n(t)) : (M && (sn in e ? Ji() : Yi()), Promise.resolve());
}
r(zs, "unmount");
var Xe, vt, Pe, qt, Ln, On, $n;
const Qa = class Qa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Be(this, "anchor");
    /** @type {Map<Batch, Key>} */
    U(this, Xe, /* @__PURE__ */ new Map());
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
    U(this, vt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    U(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    U(this, qt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    U(this, Ln, !0);
    U(this, On, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        se
      );
      if (m(this, Xe).has(t)) {
        var n = (
          /** @type {Key} */
          m(this, Xe).get(t)
        ), a = m(this, vt).get(n);
        if (a)
          Va(a), m(this, qt).delete(n);
        else {
          var s = m(this, Pe).get(n);
          s && (m(this, vt).set(n, s.effect), m(this, Pe).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of m(this, Xe)) {
          if (m(this, Xe).delete(i), i === t)
            break;
          const u = m(this, Pe).get(o);
          u && (Ie(u.effect), m(this, Pe).delete(o));
        }
        for (const [i, o] of m(this, vt)) {
          if (i === n || m(this, qt).has(i)) continue;
          const u = /* @__PURE__ */ r(() => {
            if (Array.from(m(this, Xe).values()).includes(i)) {
              var f = document.createDocumentFragment();
              ai(o, f), f.append(Dt()), m(this, Pe).set(i, { effect: o, fragment: f });
            } else
              Ie(o);
            m(this, qt).delete(i), m(this, vt).delete(i);
          }, "on_destroy");
          m(this, Ln) || !a ? (m(this, qt).add(i), Gt(o, u, !1)) : u();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    U(this, $n, /* @__PURE__ */ r((t) => {
      m(this, Xe).delete(t);
      const n = Array.from(m(this, Xe).values());
      for (const [a, s] of m(this, Pe))
        n.includes(a) || (Ie(s.effect), m(this, Pe).delete(a));
    }, "#discard"));
    this.anchor = t, q(this, Ln, n);
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
    ), s = Vr();
    if (n && !m(this, vt).has(t) && !m(this, Pe).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = Dt();
        i.append(o), m(this, Pe).set(t, {
          effect: Ke(() => n(o)),
          fragment: i
        });
      } else
        m(this, vt).set(
          t,
          Ke(() => n(this.anchor))
        );
    if (m(this, Xe).set(a, t), s) {
      for (const [u, c] of m(this, vt))
        u === t ? a.unskip_effect(c) : a.skip_effect(c);
      for (const [u, c] of m(this, Pe))
        u === t ? a.unskip_effect(c.effect) : a.skip_effect(c.effect);
      a.oncommit(m(this, On)), a.ondiscard(m(this, $n));
    } else
      m(this, On).call(this);
  }
};
Xe = new WeakMap(), vt = new WeakMap(), Pe = new WeakMap(), qt = new WeakMap(), Ln = new WeakMap(), On = new WeakMap(), $n = new WeakMap(), r(Qa, "BranchManager");
let La = Qa;
if (M) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ r(() => {
          if (n !== void 0)
            return n;
          Ui(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var pl = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Y(e, t, n = !1) {
  var a = new La(e), s = n ? hn : 0;
  function i(o, u) {
    a.ensure(o, u);
  }
  r(i, "update_branch"), Ka(() => {
    var o = !1;
    t((u, c = !0) => {
      o = !0, i(c, u);
    }), o || i(!1, null);
  }, s);
}
r(Y, "if_block");
function Ae(e, t) {
  return t;
}
r(Ae, "index");
function Bs(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, u = 0; u < s; u++) {
    let _ = t[u];
    Gt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Oa(ea(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var c = a.length === 0 && n !== null;
    if (c) {
      var f = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        f.parentNode
      );
      Es(v), v.append(f), e.items.clear();
    }
    Oa(t, !c);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Bs, "pause_effects");
function Oa(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ie(e[n], t);
}
r(Oa, "destroy_effects");
var fr;
function De(e, t, n, a, s, i = null) {
  var o = e, u = /* @__PURE__ */ new Map(), c = (t & 4) !== 0;
  if (c) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Dt());
  }
  var v = null, _ = /* @__PURE__ */ hs(() => {
    var D = n();
    return gr(D) ? D : D == null ? [] : ea(D);
  }), d, p = !0;
  function w() {
    y.fallback = v, Us(y, d, o, t, a), v !== null && (d.length === 0 ? (v.f & pt) === 0 ? Va(v) : (v.f ^= pt, Nn(v, null, o)) : Gt(v, () => {
      v = null;
    }));
  }
  r(w, "commit");
  var W = Ka(() => {
    d = /** @type {V[]} */
    l(_);
    for (var D = d.length, ae = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      se
    ), I = Vr(), H = 0; H < D; H += 1) {
      var E = d[H], g = a(E, H), x = p ? null : u.get(g);
      x ? (x.v && pn(x.v, E), x.i && pn(x.i, H), I && S.unskip_effect(x.e)) : (x = qs(
        u,
        p ? o : fr ??= Dt(),
        E,
        g,
        H,
        s,
        t,
        n
      ), p || (x.e.f |= pt), u.set(g, x)), ae.add(g);
    }
    if (D === 0 && i && !v && (p ? v = Ke(() => i(o)) : (v = Ke(() => i(fr ??= Dt())), v.f |= pt)), D > ae.size && (M ? Gs(d, a) : xr("", "", "")), !p)
      if (I) {
        for (const [N, O] of u)
          ae.has(N) || S.skip_effect(O.e);
        S.oncommit(w), S.ondiscard(() => {
        });
      } else
        w();
    l(_);
  }), y = { effect: W, items: u, outrogroups: null, fallback: v };
  p = !1;
}
r(De, "each");
function En(e) {
  for (; e !== null && (e.f & it) === 0; )
    e = e.next;
  return e;
}
r(En, "skip_to_branch");
function Us(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, u = e.items, c = En(e.effect.first), f, v = null, _, d = [], p = [], w, W, y, D;
  if (i)
    for (D = 0; D < o; D += 1)
      w = t[D], W = s(w, D), y = /** @type {EachItem} */
      u.get(W).e, (y.f & pt) === 0 && (y.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(y));
  for (D = 0; D < o; D += 1) {
    if (w = t[D], W = s(w, D), y = /** @type {EachItem} */
    u.get(W).e, e.outrogroups !== null)
      for (const O of e.outrogroups)
        O.pending.delete(y), O.done.delete(y);
    if ((y.f & pt) !== 0)
      if (y.f ^= pt, y === c)
        Nn(y, null, n);
      else {
        var ae = v ? v.next : c;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), kt(e, v, y), kt(e, y, ae), Nn(y, ae, n), v = y, d = [], p = [], c = En(v.next);
        continue;
      }
    if ((y.f & Fe) !== 0 && (Va(y), i && (y.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(y))), y !== c) {
      if (f !== void 0 && f.has(y)) {
        if (d.length < p.length) {
          var S = p[0], I;
          v = S.prev;
          var H = d[0], E = d[d.length - 1];
          for (I = 0; I < d.length; I += 1)
            Nn(d[I], S, n);
          for (I = 0; I < p.length; I += 1)
            f.delete(p[I]);
          kt(e, H.prev, E.next), kt(e, v, H), kt(e, E, S), c = S, v = E, D -= 1, d = [], p = [];
        } else
          f.delete(y), Nn(y, c, n), kt(e, y.prev, y.next), kt(e, y, v === null ? e.effect.first : v.next), kt(e, v, y), v = y;
        continue;
      }
      for (d = [], p = []; c !== null && c !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = En(c.next);
      if (c === null)
        continue;
    }
    (y.f & pt) === 0 && d.push(y), v = y, c = En(y.next);
  }
  if (e.outrogroups !== null) {
    for (const O of e.outrogroups)
      O.pending.size === 0 && (Oa(ea(O.done)), e.outrogroups?.delete(O));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || f !== void 0) {
    var g = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Fe) === 0 && g.push(y);
    for (; c !== null; )
      (c.f & Fe) === 0 && c !== e.fallback && g.push(c), c = En(c.next);
    var x = g.length;
    if (x > 0) {
      var N = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (D = 0; D < x; D += 1)
          g[D].nodes?.a?.measure();
        for (D = 0; D < x; D += 1)
          g[D].nodes?.a?.fix();
      }
      Bs(e, g, N);
    }
  }
  i && Wt(() => {
    if (_ !== void 0)
      for (y of _)
        y.nodes?.a?.apply();
  });
}
r(Us, "reconcile");
function qs(e, t, n, a, s, i, o, u) {
  var c = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ gs(n, !1, !1) : Jt(n) : null, f = (o & 2) !== 0 ? Jt(s) : null;
  return M && c && (c.trace = () => {
    u()[f?.v ?? s];
  }), {
    v: c,
    i: f,
    e: Ke(() => (i(t, c ?? n, f ?? s, u), () => {
      e.delete(a);
    }))
  };
}
r(qs, "create_item");
function Nn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & pt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rn(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(Nn, "move");
function kt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(kt, "link");
function Gs(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), u = String(s);
      let c = String(i);
      c.startsWith("[object ") && (c = null), xr(o, u, c);
    }
    n.set(i, s);
  }
}
r(Gs, "validate_each_keys");
function Ks(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  B(() => {
    var u = (
      /** @type {Effect} */
      ne
    );
    if (o !== (o = t() ?? "") && (u.nodes !== null && ($r(
      u.nodes.start,
      /** @type {TemplateNode} */
      u.nodes.end
    ), u.nodes = null), o !== "")) {
      var c = o + "";
      n ? c = `<svg>${c}</svg>` : a && (c = `<math>${c}</math>`);
      var f = vi(c);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ Nt(f)), Qn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ Nt(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Nt(f)
          );
      else
        i.before(f);
    }
  });
}
r(Ks, "html");
const dr = [...` 	
\r\f \v\uFEFF`];
function Vs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var i = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var u = o + i;
          (o === 0 || dr.includes(a[o - 1])) && (u === a.length || dr.includes(a[u])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(u + 1) : o = u;
        }
  }
  return a === "" ? null : a;
}
r(Vs, "to_class");
function Ys(e, t) {
  return e == null ? null : String(e);
}
r(Ys, "to_style");
function at(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var u = Vs(n, a, i);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = n;
  } else if (i && s !== i)
    for (var c in i) {
      var f = !!i[c];
      (s == null || f !== !!s[c]) && e.classList.toggle(c, f);
    }
  return i;
}
r(at, "set_class");
function Cn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var i = Ys(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
r(Cn, "set_style");
const Js = /* @__PURE__ */ Symbol("is custom element"), Qs = /* @__PURE__ */ Symbol("is html");
function tt(e, t) {
  var n = _i(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(tt, "set_value");
function C(e, t, n, a) {
  var s = _i(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Oi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(C, "set_attribute");
function _i(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Js]: e.nodeName.includes("-"),
      [Qs]: e.namespaceURI === Ti
    }
  );
}
r(_i, "get_attributes");
var vr = /* @__PURE__ */ new Map();
function Xs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = vr.get(t);
  if (n) return n;
  vr.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = Ii(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = pr(s);
  }
  return n;
}
r(Xs, "get_setters");
function hi(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Ns(e, "input", async (s) => {
    M && e.type === "checkbox" && nr();
    var i = s ? e.defaultValue : e.value;
    if (i = ma(e) ? ga(i) : i, n(i), se !== null && a.add(se), await Os(), i !== (i = t())) {
      var o = e.selectionStart, u = e.selectionEnd, c = e.value.length;
      if (e.value = i ?? "", u !== null) {
        var f = e.value.length;
        o === u && u === c && f > c ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(u, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  fi(t) == null && e.value && (n(ma(e) ? ga(e.value) : e.value), se !== null && a.add(se)), Qr(() => {
    M && e.type === "checkbox" && nr();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Sa ?? se
      );
      if (a.has(i))
        return;
    }
    ma(e) && s === ga(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(hi, "bind_value");
function ma(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(ma, "is_numberlike_input");
function ga(e) {
  return e === "" ? null : +e;
}
r(ga, "to_number");
const tn = [];
function Zs(e, t) {
  return {
    subscribe: $s(e, t).subscribe
  };
}
r(Zs, "readable");
function $s(e, t = da) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(u) {
    if (Cr(e, u) && (e = u, n)) {
      const c = !tn.length;
      for (const f of a)
        f[1](), tn.push(f, e);
      if (c) {
        for (let f = 0; f < tn.length; f += 2)
          tn[f][0](tn[f + 1]);
        tn.length = 0;
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
  function o(u, c = da) {
    const f = [u, c];
    return a.add(f), a.size === 1 && (n = t(s, i) || da), u(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: i, subscribe: o };
}
r($s, "writable");
function eo(e) {
  var n, a, s;
  const i = class i extends e {
    constructor() {
      super(...arguments);
      U(this, n, Object.values(foundry.applications.elements).reduce(
        (c, f) => {
          const v = f, { tagName: _ } = v;
          return _ && c.push(_.toUpperCase()), c;
        },
        []
      ));
      U(this, a, /* @__PURE__ */ Re(an({})));
      U(this, s, {});
    }
    get $state() {
      return l(m(this, a));
    }
    set $state(c) {
      He(m(this, a), c, !0);
    }
    async _renderHTML(c) {
      return c;
    }
    _replaceHTML(c, f, v) {
      Object.assign(this.$state, c.state), v.isFirstRender && q(this, s, Fs(this.root, { target: f, props: { ...c, state: this.$state } }));
    }
    _onClose(c) {
      super._onClose(c), zs(m(this, s), { outro: !0 });
    }
    _onChangeForm(c, f) {
      if (super._onChangeForm(c, f), f.type !== "change" || !this.document) return;
      const { target: v } = f;
      if (!v) return;
      const _ = v;
      if (!m(this, n).includes(_.tagName)) return;
      const d = _._getValue();
      this.document.update({ [_.name]: d });
    }
    close(c) {
      return super.close(c);
    }
  };
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), Be(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(eo, "SvelteApplicationMixin");
const to = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(to);
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
r(k, "localize");
function yn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(yn, "format");
var no = /* @__PURE__ */ R("<span> </span>"), ao = /* @__PURE__ */ R('<span style="color: var(--nos-text-secondary, #888)">—</span>'), ro = /* @__PURE__ */ R('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function io(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((N) => t.actor.update({ img: N }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ F(() => {
    const N = Object.keys(t.hitDiceData.bySize);
    return N.length === 0 ? "—" : N.length === 1 ? `d${N[0]}` : N.map((O) => `d${O}`).join("/");
  });
  var i = ro(), o = h(i);
  o.__click = a;
  var u = h(o), c = b(o, 2), f = h(c), v = h(f), _ = b(f, 2);
  _.__change = ({ target: N }) => t.actor.update({ name: N.value });
  var d = b(c, 2), p = h(d), w = h(p), W = b(p, 2), y = h(W);
  {
    var D = /* @__PURE__ */ r((N) => {
      var O = no(), Z = h(O);
      B(() => A(Z, t.metaData)), L(N, O);
    }, "consequent"), ae = /* @__PURE__ */ r((N) => {
      var O = ao();
      L(N, O);
    }, "alternate");
    Y(y, (N) => {
      t.metaData ? N(D) : N(ae, !1);
    });
  }
  var S = b(y, 2);
  S.__click = () => t.actor.editMetadata();
  var I = b(d, 2), H = h(I), E = h(H), g = b(H, 2), x = h(g);
  B(
    (N, O, Z, j, P) => {
      C(u, "src", l(n)), C(u, "alt", t.actor.reactive.name), A(v, N), tt(_, t.actor.reactive.name), _.disabled = !t.editingEnabled, A(w, O), C(S, "aria-label", Z), C(S, "data-tooltip", j), S.disabled = !t.editingEnabled, A(E, P), A(x, l(s));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), L(e, i), xe();
}
r(io, "HeaderRow");
Me(["click", "change"]);
function Ya(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(Ya, "formatModifier");
var so = /* @__PURE__ */ R('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function oo(e, t) {
  Ee(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ F(() => k(n[t.abilityKey])), s = /* @__PURE__ */ F(() => yn("NWS.RollCheck", { name: l(a) })), i = /* @__PURE__ */ F(() => yn("NWS.RollSave", { name: l(a) }));
  var o = so(), u = h(o);
  let c;
  u.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = b(u, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var v = h(f), _ = h(v), d = b(f, 2), p = h(d);
  B(
    (w) => {
      c = at(u, 1, "nos-ability__roll", null, c, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), C(u, "data-tooltip", l(i)), C(u, "aria-label", l(i)), C(f, "data-tooltip", l(s)), C(f, "aria-label", l(s)), A(_, w), A(p, l(a));
    },
    [() => Ya(t.ability.mod)]
  ), L(e, o), xe();
}
r(oo, "AbilityBox");
Me(["click"]);
var lo = /* @__PURE__ */ R('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), co = /* @__PURE__ */ R('<div class="nos-wounds"><button class="nos-wounds__label" type="button"> </button> <div class="nos-wounds__drops"></div></div>');
function uo(e, t) {
  Ee(t, !0);
  var n = co(), a = h(n);
  a.__click = function(...o) {
    t.resetWounds?.apply(this, o);
  };
  var s = h(a), i = b(a, 2);
  De(i, 21, () => ({ length: t.wounds.max }), Ae, (o, u, c) => {
    var f = lo();
    let v;
    f.__click = () => t.toggleWounds(c + 1), B(
      (_, d) => {
        v = at(f, 1, "nos-wounds__drop", null, v, { "nos-wounds__drop--active": t.wounds.value > c }), C(f, "data-tooltip", _), C(f, "aria-label", d);
      },
      [
        () => yn("NWS.ToggleWound", { n: c + 1 }),
        () => yn("NWS.ToggleWound", { n: c + 1 })
      ]
    ), L(o, f);
  }), B(
    (o, u, c) => {
      C(a, "data-tooltip", o), C(a, "aria-label", u), A(s, c);
    },
    [
      () => k("NWS.ResetWounds"),
      () => k("NWS.ResetWounds"),
      () => k("NWS.Wounds")
    ]
  ), L(e, n), xe();
}
r(uo, "WoundTracker");
Me(["click"]);
var fo = /* @__PURE__ */ R('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), vo = /* @__PURE__ */ R('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), _o = /* @__PURE__ */ R('<i class="fa-solid fa-heart"></i>'), ho = /* @__PURE__ */ R('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function bo(e, t) {
  Ee(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.movement);
  var c = ho(), f = h(c), v = h(f);
  De(v, 17, () => n, Ae, (de, ze) => {
    oo(de, {
      get abilityKey() {
        return l(ze);
      },
      get ability() {
        return t.actor.reactive.system.abilities[l(ze)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[l(ze)];
      },
      get actor() {
        return t.actor;
      },
      get editingEnabled() {
        return t.editingEnabled;
      }
    });
  });
  var _ = b(v, 2);
  {
    var d = /* @__PURE__ */ r((de) => {
      var ze = fo(), kn = yt(ze);
      kn.__click = () => t.actor.configureSavingThrows();
      var zn = b(kn, 2);
      zn.__click = () => t.actor.configureAbilityScores(), B(
        (ca, ua) => {
          C(kn, "data-tooltip", ca), C(zn, "data-tooltip", ua);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), L(de, ze);
    }, "consequent");
    Y(_, (de) => {
      t.editingEnabled && de(d);
    });
  }
  var p = b(f, 2), w = h(p), W = h(w), y = h(W), D = b(h(y), 2), ae = h(D), S = b(D, 2), I = h(S), H = b(y, 2), E = b(h(H), 2), g = h(E), x = b(E, 2);
  x.__change = ({ target: de }) => t.updateTempHP(Number(de.value));
  var N = b(W, 2);
  let O;
  var Z = h(N), j = h(Z), P = h(j);
  {
    var K = /* @__PURE__ */ r((de) => {
      var ze = vo();
      L(de, ze);
    }, "consequent_1"), z = /* @__PURE__ */ r((de) => {
      var ze = _o();
      L(de, ze);
    }, "alternate");
    Y(P, (de) => {
      t.isBloodied ? de(K) : de(z, !1);
    });
  }
  var ee = b(j, 2), V = h(ee), oe = b(ee, 2), G = h(oe);
  G.__change = ({ target: de }) => t.updateCurrentHP(Number(de.value));
  var Q = b(G, 4), ce = h(Q), ue = b(oe, 2);
  ue.__click = () => t.actor.configureHitPoints();
  var X = b(Z, 2), me = h(X), re = h(me), le = b(me, 2), ge = h(le), Qe = b(le, 2), Le = h(Qe);
  Le.__change = ({ target: de }) => t.updateCurrentMana(Number(de.value));
  var Zt = b(Le, 4), T = h(Zt), $ = b(Qe, 2);
  $.__click = () => t.actor.configureMana();
  var te = b(N, 2);
  te.__click = () => t.rollHitDice();
  var _e = b(h(te), 2), ie = h(_e), Ot = b(_e, 2), Sn = h(Ot), St = b(Ot, 2);
  St.__click = (de) => {
    de.stopPropagation(), t.actor.configureHitDice();
  };
  var $t = b(te, 2), fe = h($t);
  fe.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Ne = b(h(fe), 2), st = h(Ne), je = b(Ne, 2), Fn = h(je), oa = b(fe, 2), jn = b(h(oa), 2), bi = h(jn), Xa = b(jn, 2), mi = h(Xa), la = b(Xa, 2);
  la.__click = () => t.actor.configureMovement();
  var gi = b(p, 2);
  uo(gi, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    },
    get resetWounds() {
      return t.resetWounds;
    }
  }), B(
    (de, ze, kn, zn, ca, ua, pi, yi, wi, Si, ki, Ei, xi) => {
      A(ae, de), A(I, l(i).value), A(g, ze), tt(x, l(s).temp ?? 0), O = at(N, 1, "nos-combat__pair", null, O, { "nos-hp--bloodied": t.isBloodied }), A(V, kn), tt(G, l(s).value), A(ce, l(s).max), C(ue, "data-tooltip", zn), ue.disabled = !t.editingEnabled, Cn(re, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Cn(le, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), A(ge, ca), tt(Le, t.mana?.current ?? 0), Cn(Le, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), Cn(Zt, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), A(T, t.mana?.max || t.mana?.baseMax || 0), C($, "data-tooltip", ua), $.disabled = !t.editingEnabled, A(ie, pi), A(Sn, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), C(St, "data-tooltip", yi), St.disabled = !t.editingEnabled, C(fe, "data-tooltip", wi), A(st, Si), A(Fn, ki), A(bi, Ei), A(mi, l(u).walk), C(la, "data-tooltip", xi), la.disabled = !t.editingEnabled;
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
      () => Ya(l(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), L(e, c), xe();
}
r(bo, "StatsRow");
Me(["click", "change"]);
var mo = /* @__PURE__ */ R('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function go(e, t) {
  Ee(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ F(() => n[t.skillKey]), o = /* @__PURE__ */ F(() => k(a[l(i)])), u = /* @__PURE__ */ F(() => k(s[t.skillKey]));
  var c = mo();
  c.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(c), v = h(f), _ = b(f, 2), d = h(_), p = b(_, 2), w = h(p);
  B(
    (W, y) => {
      C(c, "data-tooltip", W), A(v, l(o)), A(d, y), A(w, l(u));
    },
    [
      () => yn("NWS.RollSkill", { name: l(u) }),
      () => Ya(t.skill.mod)
    ]
  ), L(e, c), xe();
}
r(go, "SkillCell");
Me(["click"]);
var po = /* @__PURE__ */ R('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), yo = /* @__PURE__ */ R('<section class="nos-skills-row"><!> <!></section>');
function wo(e, t) {
  Ee(t, !0);
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
  De(s, 17, () => n, Ae, (u, c) => {
    go(u, {
      get skillKey() {
        return l(c);
      },
      get skill() {
        return t.actor.reactive.system.skills[l(c)];
      },
      get actor() {
        return t.actor;
      }
    });
  });
  var i = b(s, 2);
  {
    var o = /* @__PURE__ */ r((u) => {
      var c = po();
      c.__click = () => t.actor.configureSkills(), B((f) => C(c, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), L(u, c);
    }, "consequent");
    Y(i, (u) => {
      t.editingEnabled && u(o);
    });
  }
  L(e, a), xe();
}
r(wo, "SkillsRow");
Me(["click"]);
var So = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), No = /* @__PURE__ */ R('<div class="nos-feature-row"><!> <!></div>'), Co = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), To = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Wo = /* @__PURE__ */ R('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Io = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), Ao = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Do = /* @__PURE__ */ R('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Mo = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Lo = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Oo = /* @__PURE__ */ R('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Po = /* @__PURE__ */ R('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Ro = /* @__PURE__ */ R('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ho = /* @__PURE__ */ R("<!> <!> <!> <!> <!>", 1);
function _r(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "feature")), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((g) => g.type === "boon")), s = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "ancestry") ?? null), i = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "background") ?? null), o = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "class") ?? null), u = /* @__PURE__ */ F(() => t.actor.reactive.items.find((g) => g.type === "subclass") ?? null);
  function c(g) {
    t.actor.activateItem(g);
  }
  r(c, "useItem");
  function f(g) {
    t.actor.items.get(g)?.sheet?.render(!0);
  }
  r(f, "configureItem");
  function v(g) {
    t.actor.deleteEmbeddedDocuments("Item", [g]);
  }
  r(v, "deleteItem");
  function _(g, x) {
    const N = { type: "Item", uuid: x.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(N));
  }
  r(_, "onDragStart");
  var d = Ho(), p = yt(d);
  {
    var w = /* @__PURE__ */ r((g) => {
      var x = No(), N = h(x);
      {
        var O = /* @__PURE__ */ r((P) => {
          var K = ko(), z = h(K), ee = h(z), V = b(z, 2), oe = h(V), G = b(oe, 2);
          G.__click = () => f(l(s).id);
          var Q = h(G), ce = b(G, 2);
          {
            var ue = /* @__PURE__ */ r((X) => {
              var me = So(), re = h(me);
              re.__click = () => f(l(s).id);
              var le = b(re, 2);
              le.__click = () => v(l(s).id), L(X, me);
            }, "consequent");
            Y(ce, (X) => {
              t.editingEnabled && X(ue);
            });
          }
          B(
            (X) => {
              A(ee, X), C(V, "data-tooltip", l(s).system?.description || ""), C(oe, "src", l(s).img), C(oe, "alt", l(s).name), A(Q, l(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), bt("dragstart", V, (X) => _(X, l(s))), L(P, K);
        }, "consequent_1");
        Y(N, (P) => {
          l(s) && P(O);
        });
      }
      var Z = b(N, 2);
      {
        var j = /* @__PURE__ */ r((P) => {
          var K = xo(), z = h(K), ee = h(z), V = b(z, 2), oe = h(V), G = b(oe, 2);
          G.__click = () => f(l(i).id);
          var Q = h(G), ce = b(G, 2);
          {
            var ue = /* @__PURE__ */ r((X) => {
              var me = Eo(), re = h(me);
              re.__click = () => f(l(i).id);
              var le = b(re, 2);
              le.__click = () => v(l(i).id), L(X, me);
            }, "consequent_2");
            Y(ce, (X) => {
              t.editingEnabled && X(ue);
            });
          }
          B(
            (X) => {
              A(ee, X), C(V, "data-tooltip", l(i).system?.description || ""), C(oe, "src", l(i).img), C(oe, "alt", l(i).name), A(Q, l(i).name);
            },
            [() => k("NWS.Background")]
          ), bt("dragstart", V, (X) => _(X, l(i))), L(P, K);
        }, "consequent_3");
        Y(Z, (P) => {
          l(i) && P(j);
        });
      }
      L(g, x);
    }, "consequent_4");
    Y(p, (g) => {
      (l(s) || l(i)) && g(w);
    });
  }
  var W = b(p, 2);
  {
    var y = /* @__PURE__ */ r((g) => {
      var x = Io(), N = h(x), O = h(N), Z = b(N, 2), j = h(Z), P = b(j, 2);
      P.__click = () => f(l(o).id);
      var K = h(P), z = b(P, 2);
      {
        var ee = /* @__PURE__ */ r((G) => {
          var Q = Co(), ce = h(Q);
          ce.__click = () => f(l(o).id);
          var ue = b(ce, 2);
          ue.__click = () => v(l(o).id), L(G, Q);
        }, "consequent_5");
        Y(z, (G) => {
          t.editingEnabled && G(ee);
        });
      }
      var V = b(Z, 2);
      {
        var oe = /* @__PURE__ */ r((G) => {
          var Q = Wo(), ce = h(Q), ue = b(ce, 2);
          ue.__click = () => f(l(u).id);
          var X = h(ue), me = b(ue, 2);
          {
            var re = /* @__PURE__ */ r((le) => {
              var ge = To(), Qe = h(ge);
              Qe.__click = () => f(l(u).id);
              var Le = b(Qe, 2);
              Le.__click = () => v(l(u).id), L(le, ge);
            }, "consequent_6");
            Y(me, (le) => {
              t.editingEnabled && le(re);
            });
          }
          B(() => {
            C(ce, "src", l(u).img), C(ce, "alt", l(u).name), A(X, l(u).name);
          }), bt("dragstart", Q, (le) => _(le, l(u))), L(G, Q);
        }, "consequent_7");
        Y(V, (G) => {
          l(u) && G(oe);
        });
      }
      B(
        (G, Q) => {
          A(O, G), C(j, "src", l(o).img), C(j, "alt", l(o).name), A(K, `${l(o).name ?? ""} (${Q ?? ""} ${l(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), bt("dragstart", Z, (G) => _(G, l(o))), L(g, x);
    }, "consequent_8");
    Y(W, (g) => {
      l(o) && g(y);
    });
  }
  var D = b(W, 2);
  {
    var ae = /* @__PURE__ */ r((g) => {
      var x = Mo(), N = h(x), O = h(N), Z = b(N, 2);
      De(Z, 21, () => l(n), Ae, (j, P) => {
        var K = Do(), z = h(K), ee = b(z, 2);
        ee.__click = () => c(l(P).id);
        var V = h(ee), oe = b(ee, 2);
        {
          var G = /* @__PURE__ */ r((Q) => {
            var ce = Ao(), ue = h(ce);
            ue.__click = () => f(l(P).id);
            var X = b(ue, 2);
            X.__click = () => v(l(P).id), L(Q, ce);
          }, "consequent_9");
          Y(oe, (Q) => {
            t.editingEnabled && Q(G);
          });
        }
        B(() => {
          C(K, "data-tooltip", l(P).system?.description || ""), C(z, "src", l(P).img), C(z, "alt", l(P).name), A(V, l(P).name);
        }), bt("dragstart", K, (Q) => _(Q, l(P))), L(j, K);
      }), B((j) => A(O, j), [() => k("NWS.Features")]), L(g, x);
    }, "consequent_10");
    Y(D, (g) => {
      l(n).length > 0 && g(ae);
    });
  }
  var S = b(D, 2);
  {
    var I = /* @__PURE__ */ r((g) => {
      var x = Po(), N = h(x), O = h(N), Z = b(N, 2);
      De(Z, 21, () => l(a), Ae, (j, P) => {
        var K = Oo(), z = h(K), ee = b(z, 2);
        ee.__click = () => c(l(P).id);
        var V = h(ee), oe = b(ee, 2);
        {
          var G = /* @__PURE__ */ r((Q) => {
            var ce = Lo(), ue = h(ce);
            ue.__click = () => f(l(P).id);
            var X = b(ue, 2);
            X.__click = () => v(l(P).id), L(Q, ce);
          }, "consequent_11");
          Y(oe, (Q) => {
            t.editingEnabled && Q(G);
          });
        }
        B(() => {
          C(K, "data-tooltip", l(P).system?.description || ""), C(z, "src", l(P).img), C(z, "alt", l(P).name), A(V, l(P).name);
        }), bt("dragstart", K, (Q) => _(Q, l(P))), L(j, K);
      }), B((j) => A(O, j), [() => k("NWS.Boons")]), L(g, x);
    }, "consequent_12");
    Y(S, (g) => {
      l(a).length > 0 && g(I);
    });
  }
  var H = b(S, 2);
  {
    var E = /* @__PURE__ */ r((g) => {
      var x = Ro(), N = h(x);
      B((O) => A(N, O), [() => k("NWS.DropFeaturesHere")]), L(g, x);
    }, "consequent_13");
    Y(H, (g) => {
      !l(s) && !l(i) && !l(o) && l(n).length === 0 && l(a).length === 0 && g(E);
    });
  }
  L(e, d), xe();
}
r(_r, "FeaturesTab");
Me(["click"]);
var Fo = /* @__PURE__ */ R('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), jo = /* @__PURE__ */ R('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), zo = /* @__PURE__ */ R('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Bo = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Uo = /* @__PURE__ */ R('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), qo = /* @__PURE__ */ R('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Go = /* @__PURE__ */ R('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Ko = /* @__PURE__ */ R('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function hr(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ Re(""), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, I) => S.name.localeCompare(I.name))), s = /* @__PURE__ */ F(() => l(n) ? l(a).filter((S) => S.name.toLowerCase().includes(l(n).toLowerCase())) : l(a)), i = /* @__PURE__ */ F(() => {
    const S = {};
    for (const I of l(s)) {
      const H = I.system?.tier ?? 0, E = I.system?.isUtility ?? !1, g = E ? "_utility" : `_tier_${H}`, x = E ? k("NWS.Utility") : yn("NWS.Tier", { n: H });
      S[g] ??= { label: x, spells: [] }, S[g].spells.push(I);
    }
    return Object.entries(S).sort(([I], [H]) => {
      if (I === "_utility") return 1;
      if (H === "_utility") return -1;
      const E = parseInt(I.replace("_tier_", "")), g = parseInt(H.replace("_tier_", ""));
      return E - g;
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
  function c() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Spell", type: "spell" }]);
  }
  r(c, "createSpell");
  function f(S) {
    t.actor.activateItem(S);
  }
  r(f, "castSpell");
  function v(S, I) {
    const H = { type: "Item", uuid: I.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(H));
  }
  r(v, "onDragStart");
  var _ = Ko(), d = yt(_), p = b(h(d), 2), w = b(p, 2);
  {
    var W = /* @__PURE__ */ r((S) => {
      var I = Fo();
      I.__click = c;
      var H = b(h(I));
      B((E) => A(H, ` ${E ?? ""}`), [() => k("NWS.New")]), L(S, I);
    }, "consequent");
    Y(w, (S) => {
      t.editingEnabled && S(W);
    });
  }
  var y = b(d, 2);
  De(y, 17, () => l(i), Ae, (S, I) => {
    var H = /* @__PURE__ */ F(() => wr(l(I), 2));
    let E = /* @__PURE__ */ r(() => l(H)[1], "tier");
    var g = qo(), x = h(g), N = h(x), O = b(x, 2);
    De(O, 21, () => E().spells, Ae, (Z, j) => {
      var P = Uo(), K = h(P), z = b(K, 2);
      z.__click = () => f(l(j).id);
      var ee = h(z), V = b(ee);
      {
        var oe = /* @__PURE__ */ r((re) => {
          var le = jo();
          B((ge) => C(le, "data-tooltip", ge), [() => k("NWS.Concentration")]), L(re, le);
        }, "consequent_1");
        Y(V, (re) => {
          l(j).system?.concentration && re(oe);
        });
      }
      var G = b(V, 2);
      {
        var Q = /* @__PURE__ */ r((re) => {
          var le = zo();
          B((ge) => C(le, "data-tooltip", ge), [() => k("NWS.Utility")]), L(re, le);
        }, "consequent_2");
        Y(G, (re) => {
          l(j).system?.isUtility && re(Q);
        });
      }
      var ce = b(z, 2), ue = h(ce), X = b(ce, 2);
      {
        var me = /* @__PURE__ */ r((re) => {
          var le = Bo(), ge = h(le);
          ge.__click = () => o(l(j).id);
          var Qe = b(ge, 2);
          Qe.__click = () => u(l(j).id), L(re, le);
        }, "consequent_3");
        Y(X, (re) => {
          t.editingEnabled && re(me);
        });
      }
      B(() => {
        C(P, "data-tooltip", l(j).system?.description?.baseEffect || ""), C(K, "src", l(j).img), C(K, "alt", l(j).name), A(ee, `${l(j).name ?? ""} `), A(ue, l(j).system?.activationCost ?? "");
      }), bt("dragstart", P, (re) => v(re, l(j))), L(Z, P);
    }), B(() => A(N, E().label)), L(S, g);
  });
  var D = b(y, 2);
  {
    var ae = /* @__PURE__ */ r((S) => {
      var I = Go(), H = h(I);
      B((E) => A(H, E), [() => k("NWS.DropSpellsHere")]), L(S, I);
    }, "consequent_4");
    Y(D, (S) => {
      l(a).length === 0 && S(ae);
    });
  }
  B((S) => C(p, "placeholder", S), [() => k("NWS.SearchSpells")]), hi(p, () => l(n), (S) => He(n, S)), L(e, _), xe();
}
r(hr, "SpellsTab");
Me(["click"]);
var Vo = /* @__PURE__ */ R('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), Yo = /* @__PURE__ */ R('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Jo = /* @__PURE__ */ R('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Qo = /* @__PURE__ */ R('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Xo = /* @__PURE__ */ R('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Zo = /* @__PURE__ */ R('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function br(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ Re(""), a = /* @__PURE__ */ F(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((E) => E.type === "object").sort((E, g) => (E.sort ?? 0) - (g.sort ?? 0))), i = /* @__PURE__ */ F(() => l(n) ? l(s).filter((E) => E.name.toLowerCase().includes(l(n).toLowerCase())) : l(s));
  function o(E) {
    t.actor.items.get(E)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function u(E) {
    t.actor.deleteEmbeddedDocuments("Item", [E]);
  }
  r(u, "deleteItem");
  function c() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(c, "createObject");
  function f(E, g) {
    t.actor.update({
      [`system.currency.${E}.value`]: Math.max(0, Math.round(Number(g)))
    });
  }
  r(f, "updateCurrency");
  function v(E, g) {
    const x = l(a)[E]?.value ?? 0;
    t.actor.update({
      [`system.currency.${E}.value`]: Math.max(0, x + g)
    });
  }
  r(v, "adjustCurrency");
  function _(E, g) {
    t.actor.items.get(E)?.update({ "system.quantity": Number(g) });
  }
  r(_, "updateQuantity");
  function d(E, g) {
    const x = { type: "Item", uuid: g.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(x));
  }
  r(d, "onDragStart");
  var p = Zo(), w = yt(p);
  De(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ae, (E, g) => {
    var x = /* @__PURE__ */ F(() => wr(g, 2));
    let N = /* @__PURE__ */ r(() => l(x)[0], "type"), O = /* @__PURE__ */ r(() => l(x)[1], "labelKey");
    var Z = Vo(), j = h(Z), P = h(j), K = b(j, 2);
    K.__click = () => v(N(), -1);
    var z = b(K, 2);
    z.__change = ({ target: V }) => f(N(), V.value);
    var ee = b(z, 2);
    ee.__click = () => v(N(), 1), B(
      (V, oe, G) => {
        C(j, "for", `currency-${N() ?? ""}`), A(P, V), C(K, "aria-label", `-1 ${oe ?? ""}`), C(z, "id", `currency-${N() ?? ""}`), tt(z, l(a)[N()]?.value ?? 0), C(ee, "aria-label", `+1 ${G ?? ""}`);
      },
      [
        () => k(O()),
        () => k(O()),
        () => k(O())
      ]
    ), L(E, Z);
  });
  var W = b(w, 2), y = b(h(W), 2), D = b(y, 2);
  {
    var ae = /* @__PURE__ */ r((E) => {
      var g = Yo();
      g.__click = c;
      var x = b(h(g));
      B((N) => A(x, ` ${N ?? ""}`), [() => k("NWS.New")]), L(E, g);
    }, "consequent");
    Y(D, (E) => {
      t.editingEnabled && E(ae);
    });
  }
  var S = b(W, 2);
  De(S, 21, () => l(i), Ae, (E, g) => {
    var x = Qo(), N = h(x), O = b(N, 2);
    O.__click = () => o(l(g).id);
    var Z = h(O), j = b(O, 2);
    j.__change = ({ target: z }) => _(l(g).id, z.value);
    var P = b(j, 2);
    {
      var K = /* @__PURE__ */ r((z) => {
        var ee = Jo(), V = h(ee);
        V.__click = () => o(l(g).id);
        var oe = b(V, 2);
        oe.__click = () => u(l(g).id), L(z, ee);
      }, "consequent_1");
      Y(P, (z) => {
        t.editingEnabled && z(K);
      });
    }
    B(() => {
      C(x, "data-tooltip", l(g).system?.description?.public || ""), C(N, "src", l(g).img), C(N, "alt", l(g).name), A(Z, l(g).name), tt(j, l(g).system?.quantity ?? 1);
    }), bt("dragstart", x, (z) => d(z, l(g))), L(E, x);
  });
  var I = b(S, 2);
  {
    var H = /* @__PURE__ */ r((E) => {
      var g = Xo(), x = h(g);
      B((N) => A(x, N), [() => k("NWS.DropInventoryHere")]), L(E, g);
    }, "consequent_2");
    Y(I, (E) => {
      l(s).length === 0 && E(H);
    });
  }
  B((E) => C(y, "placeholder", E), [() => k("NWS.SearchItems")]), hi(y, () => l(n), (E) => He(n, E)), L(e, p), xe();
}
r(br, "InventoryTab");
Me(["click", "change"]);
var $o = /* @__PURE__ */ R('<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor"><!></div></div></div>');
function mr(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.system.details), a = /* @__PURE__ */ F(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ F(() => [...l(a).languages ?? []].join(", ")), i = /* @__PURE__ */ F(() => [...l(a).armor ?? []].join(", ")), o = /* @__PURE__ */ F(() => (l(a).weapons ?? []).join(", "));
  var u = $o(), c = h(u), f = h(c), v = h(f), _ = b(f, 2);
  _.__change = ({ target: T }) => t.actor.update({ "system.details.age": T.value });
  var d = b(c, 2), p = h(d), w = h(p), W = b(p, 2);
  W.__change = ({ target: T }) => t.actor.update({ "system.details.gender": T.value });
  var y = b(d, 2), D = h(y), ae = h(D), S = b(D, 2);
  S.__change = ({ target: T }) => t.actor.update({ "system.details.height": T.value });
  var I = b(y, 2), H = h(I), E = h(H), g = b(H, 2);
  g.__change = ({ target: T }) => t.actor.update({ "system.details.weight": T.value });
  var x = b(I, 2), N = h(x), O = h(N), Z = b(N, 2), j = h(Z), P = b(Z, 2);
  P.__click = () => t.actor.configureLanguageProficiencies();
  var K = b(x, 2), z = h(K), ee = h(z), V = b(z, 2), oe = h(V), G = b(V, 2);
  G.__click = () => t.actor.configureArmorProficiencies();
  var Q = b(K, 2), ce = h(Q), ue = h(ce), X = b(ce, 2), me = h(X), re = b(X, 2);
  re.__click = () => t.actor.configureWeaponProficiencies();
  var le = b(Q, 2), ge = h(le), Qe = h(ge), Le = b(ge, 2), Zt = h(Le);
  Ks(Zt, () => l(n).notes ?? ""), B(
    (T, $, te, _e, ie, Ot, Sn, St, $t, fe, Ne, st, je) => {
      A(v, T), tt(_, l(n).age ?? ""), _.disabled = !t.editingEnabled, A(w, $), tt(W, l(n).gender ?? ""), W.disabled = !t.editingEnabled, A(ae, te), tt(S, l(n).height ?? ""), C(S, "placeholder", _e), S.disabled = !t.editingEnabled, A(E, ie), tt(g, l(n).weight ?? ""), C(g, "placeholder", Ot), g.disabled = !t.editingEnabled, A(O, Sn), A(j, l(s) || "—"), C(P, "data-tooltip", St), P.disabled = !t.editingEnabled, A(ee, $t), A(oe, l(i) || "—"), C(G, "data-tooltip", fe), G.disabled = !t.editingEnabled, A(ue, Ne), A(me, l(o) || "—"), C(re, "data-tooltip", st), re.disabled = !t.editingEnabled, A(Qe, je), C(Le, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), bt("blur", Le, ({ target: T }) => t.actor.update({ "system.details.notes": T.innerHTML })), L(e, u), xe();
}
r(mr, "BioTab");
Me(["change", "click"]);
var el = /* @__PURE__ */ R('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), tl = /* @__PURE__ */ R('<div class="nos-slot nos-slot--empty"> </div>'), nl = /* @__PURE__ */ R("<!> <!>", 1);
function al(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((u) => u.type === "object" && u.system?.objectType === "weapon").sort((u, c) => (u.sort ?? 0) - (c.sort ?? 0)));
  var a = nl(), s = yt(a);
  De(s, 17, () => l(n), Ae, (u, c) => {
    var f = el(), v = h(f), _ = b(v, 2);
    _.__click = () => t.actor.activateItem(l(c).id);
    var d = h(_);
    B(() => {
      C(v, "src", l(c).img), C(v, "alt", l(c).name), C(_, "data-tooltip", l(c).system?.description?.public || l(c).name), A(d, l(c).name);
    }), L(u, f);
  });
  var i = b(s, 2);
  {
    var o = /* @__PURE__ */ r((u) => {
      var c = tl(), f = h(c);
      B((v) => A(f, v), [() => k("NWS.NoWeapons")]), L(u, c);
    }, "consequent");
    Y(i, (u) => {
      l(n).length === 0 && u(o);
    });
  }
  L(e, a), xe();
}
r(al, "InventorySlots");
Me(["click"]);
var rl = /* @__PURE__ */ R('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), il = /* @__PURE__ */ R('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), sl = /* @__PURE__ */ R('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function ol(e, t) {
  Ee(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: _r
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: hr
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: br
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: mr
    }
  ];
  let a = /* @__PURE__ */ Re("features"), s = /* @__PURE__ */ F(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ F(() => t.actor.reactive.system.inventory);
  var o = sl(), u = h(o);
  De(u, 21, () => n, Ae, (S, I) => {
    var H = rl();
    let E;
    H.__click = () => He(a, l(I).name, !0);
    var g = h(H), x = b(g);
    B(
      (N) => {
        E = at(H, 1, "nos-tab-btn", null, E, { "nos-tab-btn--active": l(a) === l(I).name }), at(g, 1, l(I).icon), A(x, ` ${N ?? ""}`);
      },
      [() => k(l(I).labelKey)]
    ), L(S, H);
  });
  var c = b(u, 2), f = h(c);
  {
    var v = /* @__PURE__ */ r((S) => {
      _r(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), _ = /* @__PURE__ */ r((S) => {
      var I = ba(), H = yt(I);
      {
        var E = /* @__PURE__ */ r((x) => {
          hr(x, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), g = /* @__PURE__ */ r((x) => {
          var N = ba(), O = yt(N);
          {
            var Z = /* @__PURE__ */ r((P) => {
              br(P, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), j = /* @__PURE__ */ r((P) => {
              var K = ba(), z = yt(K);
              {
                var ee = /* @__PURE__ */ r((V) => {
                  mr(V, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                Y(
                  z,
                  (V) => {
                    l(a) === "bio" && V(ee);
                  },
                  !0
                );
              }
              L(P, K);
            }, "alternate");
            Y(
              O,
              (P) => {
                l(a) === "inventory" ? P(Z) : P(j, !1);
              },
              !0
            );
          }
          L(x, N);
        }, "alternate_1");
        Y(
          H,
          (x) => {
            l(a) === "spells" ? x(E) : x(g, !1);
          },
          !0
        );
      }
      L(S, I);
    }, "alternate_2");
    Y(f, (S) => {
      l(a) === "features" ? S(v) : S(_, !1);
    });
  }
  var d = b(c, 2), p = h(d), w = h(p), W = b(d, 2), y = h(W);
  al(y, {
    get actor() {
      return t.actor;
    }
  });
  var D = b(y, 2);
  {
    var ae = /* @__PURE__ */ r((S) => {
      var I = il(), H = h(I);
      B(() => A(H, `${l(i).usedSlots ?? 0 ?? ""} / ${l(i).totalSlots ?? 0 ?? ""}`)), L(S, I);
    }, "consequent_4");
    Y(D, (S) => {
      l(s) && S(ae);
    });
  }
  B((S) => A(w, S), [() => k("NWS.Weapons")]), L(e, o), xe();
}
r(ol, "ContentArea");
Me(["click"]);
var ll = /* @__PURE__ */ R('<button type="button" role="menuitem"><i></i> <span> </span></button>'), cl = /* @__PURE__ */ R('<label class="nos-color-picker"><input type="color"/> <span> </span></label>'), ul = /* @__PURE__ */ R('<div class="nos-color-picker-group"><span class="nos-color-picker-group__label"> </span> <div class="nos-color-picker-group__colors"></div></div>'), fl = /* @__PURE__ */ R('<div class="nos-color-picker-panel"></div>'), dl = /* @__PURE__ */ R('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"><!> <!></div>', 1);
function vl(e, t) {
  Ee(t, !0);
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
  ], a = [
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
  function s(d) {
    t.setColorScheme(d), d !== "custom" && t.onclose();
  }
  r(s, "select");
  function i(d) {
    d.key === "Escape" && t.onclose();
  }
  r(i, "handleKeydown");
  var o = dl(), u = yt(o);
  u.__click = function(...d) {
    t.onclose?.apply(this, d);
  }, u.__keydown = i;
  var c = b(u, 2), f = h(c);
  De(f, 17, () => n, Ae, (d, p) => {
    var w = ll();
    let W;
    w.__click = () => s(l(p).value);
    var y = h(w), D = b(y, 2), ae = h(D);
    B(
      (S) => {
        W = at(w, 1, "nos-color-scheme-menu__option", null, W, {
          "nos-color-scheme-menu__option--active": t.colorScheme === l(p).value
        }), at(y, 1, `fa-solid ${l(p).icon ?? ""}`), A(ae, S);
      },
      [() => k(l(p).label)]
    ), L(d, w);
  });
  var v = b(f, 2);
  {
    var _ = /* @__PURE__ */ r((d) => {
      var p = fl();
      De(p, 21, () => a, Ae, (w, W) => {
        var y = ul(), D = h(y), ae = h(D), S = b(D, 2);
        De(S, 21, () => l(W).colors, Ae, (I, H) => {
          var E = cl(), g = h(E);
          g.__change = (O) => t.setCustomColor(l(H).key, O.target.value);
          var x = b(g, 2), N = h(x);
          B(
            (O) => {
              tt(g, t.customColors[l(H).key]), A(N, O);
            },
            [() => k(l(H).label)]
          ), L(I, E);
        }), B((I) => A(ae, I), [() => k(l(W).label)]), L(w, y);
      }), L(d, p);
    }, "consequent");
    Y(v, (d) => {
      t.colorScheme === "custom" && d(_);
    });
  }
  L(e, o), xe();
}
r(vl, "ColorSchemeMenu");
Me(["click", "keydown", "change"]);
var _l = /* @__PURE__ */ R('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function hl(e, t) {
  Ee(t, !0);
  let n = /* @__PURE__ */ Re(!1);
  var a = _l(), s = h(a);
  let i;
  s.__click = function(...y) {
    t.toggleEditingEnabled?.apply(this, y);
  };
  var o = h(s), u = b(s, 2);
  u.__click = () => t.actor.triggerLevelUp();
  var c = b(u, 2);
  c.__click = () => t.actor.triggerLevelDown();
  var f = b(c, 2), v = h(f);
  let _;
  v.__click = () => He(n, !l(n));
  var d = b(v, 2);
  {
    var p = /* @__PURE__ */ r((y) => {
      vl(y, {
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
        onclose: /* @__PURE__ */ r(() => He(n, !1), "onclose")
      });
    }, "consequent");
    Y(d, (y) => {
      l(n) && y(p);
    });
  }
  var w = b(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var W = b(w, 2);
  W.__click = () => t.actor.triggerRest({ restType: "safe" }), B(
    (y, D, ae, S, I, H, E, g, x, N, O, Z) => {
      i = at(s, 1, "nos-sidebar-btn", null, i, { "nos-sidebar-btn--active": t.editingEnabled }), C(s, "aria-pressed", t.editingEnabled), C(s, "aria-label", y), C(s, "data-tooltip", D), at(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), C(u, "aria-label", ae), C(u, "data-tooltip", S), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, C(c, "aria-label", I), C(c, "data-tooltip", H), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, _ = at(v, 1, "nos-sidebar-btn", null, _, { "nos-sidebar-btn--active": t.darkMode }), C(v, "aria-pressed", t.darkMode), C(v, "aria-label", E), C(v, "data-tooltip", g), C(v, "aria-expanded", l(n)), C(w, "aria-label", x), C(w, "data-tooltip", N), C(W, "aria-label", O), C(W, "data-tooltip", Z);
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
  ), L(e, a), xe();
}
r(hl, "SidebarControls");
Me(["click"]);
var bl = /* @__PURE__ */ R('<div><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ml(e, t) {
  Ee(t, !0);
  const n = zr((T) => {
    const $ = {
      updateActor: Hooks.on("updateActor", (te, _e, ie) => {
        ie.diff !== !1 && te._id === t.actor.id && T();
      }),
      createItem: Hooks.on("createItem", (te) => {
        te?.actor?.id === t.actor.id && T();
      }),
      deleteItem: Hooks.on("deleteItem", (te) => {
        te?.actor?.id === t.actor.id && T();
      }),
      updateItem: Hooks.on("updateItem", (te, _e, ie) => {
        ie.diff !== !1 && te?.actor?.id === t.actor.id && T();
      })
    };
    return () => {
      Hooks.off("updateActor", $.updateActor), Hooks.off("createItem", $.createItem), Hooks.off("deleteItem", $.deleteItem), Hooks.off("updateItem", $.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(T, $) {
      if ($ === "reactive")
        return n(), T;
      const te = T[$];
      return typeof te == "function" ? te.bind(T) : te;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(T, $) {
    return Math.clamp(0, Math.round(T / $ * 100), 100);
  }
  r(u, "getHitPointPercentage");
  function c(T, $, te, _e) {
    const ie = [];
    return te && ie.push(`${te.name} (${s[_e] ?? _e})`), T && ($ ? ie.push(`${T.name} (${$.name}, ${T.system.classLevel})`) : ie.push(`${T.name} (${T.system.classLevel})`)), ie.filter(Boolean).join(" ⟡ ");
  }
  r(c, "prepareCharacterMetadata");
  function f(T, $) {
    if (!$) return T;
    const te = [4, 6, 8, 10, 12, 20], _e = te.indexOf(T);
    return _e === -1 ? T : te[Math.min(_e + $, te.length - 1)];
  }
  r(f, "incrementDieSize");
  let v = /* @__PURE__ */ F(() => u(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function _(T) {
    a.update({ "system.attributes.hp.value": T });
  }
  r(_, "updateCurrentHP");
  function d(T) {
    a.update({ "system.attributes.hp.temp": T });
  }
  r(d, "updateTempHP");
  let p = /* @__PURE__ */ F(() => a.reactive.system.resources.mana), w = /* @__PURE__ */ F(() => (l(p).max ?? 0) > 0 || (l(p).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((T) => T.type === "class" && T.system?.mana?.formula?.length));
  function W(T) {
    a.update({ "system.resources.mana.current": T });
  }
  r(W, "updateCurrentMana");
  let y = /* @__PURE__ */ F(() => {
    const T = a.reactive.system.attributes.hitDice, $ = a.reactive.system.attributes.bonusHitDice ?? [], te = a.reactive.items.filter((fe) => fe.type === "class"), _e = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, ie = {};
    for (const fe of te) {
      const Ne = fe.system.hitDieSize, st = f(Ne, _e), je = fe.system.classLevel;
      ie[st] ??= { current: 0, total: 0 }, ie[st].total += je, ie[st].current = T[st]?.current ?? 0;
    }
    const Ot = te.map((fe) => f(fe.system.hitDieSize, _e));
    for (const fe of $) {
      const Ne = f(fe.size, _e);
      ie[Ne] ??= { current: T[Ne]?.current ?? 0, total: 0 }, ie[Ne].total += fe.value, Ot.includes(Ne) || (ie[Ne].current = T[Ne]?.current ?? 0);
    }
    const Sn = $.map((fe) => f(fe.size, _e));
    for (const [fe, Ne] of Object.entries(T ?? {})) {
      const st = Number(fe), je = f(st, _e), Fn = Ne?.bonus ?? 0;
      if (Fn > 0) {
        ie[je] ??= { current: 0, total: 0 }, ie[je].total += Fn;
        const oa = Ot.includes(je), jn = Sn.includes(je);
        !oa && !jn && (ie[je].current = T[je]?.current ?? 0);
      }
    }
    let St = 0, $t = 0;
    for (const fe of Object.values(ie))
      St += fe.current, $t += fe.total;
    return { bySize: ie, value: St, max: $t };
  });
  async function D(T) {
    await a.updateCurrentHitDice(T);
  }
  r(D, "updateCurrentHitDice");
  async function ae() {
    await a.rollHitDice();
  }
  r(ae, "rollHitDice");
  async function S() {
    await a.editCurrentHitDice();
  }
  r(S, "editCurrentHitDice");
  let I = /* @__PURE__ */ F(() => a.reactive.items.find((T) => T.type === "class") ?? null), H = /* @__PURE__ */ F(() => {
    const T = a.reactive.items.find((ie) => ie.type === "class") ?? null, $ = a.reactive.items.find((ie) => ie.type === "subclass") ?? null, te = a.reactive.items.find((ie) => ie.type === "ancestry") ?? null, _e = a.reactive.system.attributes.sizeCategory;
    return c(T, $, te, _e);
  }), E = /* @__PURE__ */ F(() => a.reactive.system.attributes.wounds);
  function g(T) {
    const $ = T === l(E).value ? T - 1 : T;
    a.update({ "system.attributes.wounds.value": $ });
  }
  r(g, "toggleWounds");
  function x() {
    a.update({ "system.attributes.wounds.value": 0 });
  }
  r(x, "resetWounds");
  let N = /* @__PURE__ */ F(() => a.reactive.flags.nimble), O = /* @__PURE__ */ F(() => l(N)?.editingEnabled ?? !0);
  const Z = Zs(!1, (T) => (Ws(() => T(l(O))), () => {
  }));
  async function j() {
    await a.setFlag("nimble", "editingEnabled", !l(O));
  }
  r(j, "toggleEditingEnabled");
  let P = /* @__PURE__ */ F(() => {
    const T = l(N)?.colorScheme;
    return T || (l(N)?.darkMode === !0 ? "dark" : "white");
  });
  async function K(T) {
    await a.setFlag("nimble", "colorScheme", T);
  }
  r(K, "setColorScheme");
  let z = /* @__PURE__ */ F(() => l(P) === "dark"), ee = /* @__PURE__ */ F(() => l(P) === "nimble"), V = /* @__PURE__ */ F(() => l(P) === "custom");
  const oe = {
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
  };
  let G = /* @__PURE__ */ F(() => {
    const T = l(N)?.customColors;
    return T ? { ...oe, ...T } : { ...oe };
  });
  async function Q(T, $) {
    const te = l(N)?.customColors ?? {};
    await a.setFlag("nimble", "customColors", { ...te, [T]: $ });
  }
  r(Q, "setCustomColor");
  const ce = {
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
  };
  let ue = /* @__PURE__ */ F(() => l(V) ? Object.entries(ce).map(([T, $]) => `${$}: ${l(G)[T]}`).join("; ") : "");
  Bn("actor", a), Bn("document", a), Bn("application", t.sheet), Bn("editingEnabled", Z);
  var X = bl();
  let me;
  var re = h(X), le = h(re);
  io(le, {
    get actor() {
      return a;
    },
    get metaData() {
      return l(H);
    },
    get editingEnabled() {
      return l(O);
    },
    get hitDiceData() {
      return l(y);
    }
  });
  var ge = b(le, 2);
  bo(ge, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return l(O);
    },
    get isBloodied() {
      return l(v);
    },
    get hitDiceData() {
      return l(y);
    },
    get hasMana() {
      return l(w);
    },
    get mana() {
      return l(p);
    },
    get wounds() {
      return l(E);
    },
    toggleWounds: g,
    resetWounds: x,
    updateCurrentHP: _,
    updateTempHP: d,
    updateCurrentMana: W,
    updateCurrentHitDice: D,
    rollHitDice: ae,
    editCurrentHitDice: S
  });
  var Qe = b(ge, 2);
  wo(Qe, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return l(O);
    }
  });
  var Le = b(re, 2);
  ol(Le, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return l(O);
    },
    get hasMana() {
      return l(w);
    },
    get mana() {
      return l(p);
    },
    updateCurrentMana: W
  });
  var Zt = b(Le, 2);
  hl(Zt, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return l(O);
    },
    toggleEditingEnabled: j,
    get classItem() {
      return l(I);
    },
    get darkMode() {
      return l(z);
    },
    get colorScheme() {
      return l(P);
    },
    setColorScheme: K,
    get customColors() {
      return l(G);
    },
    setCustomColor: Q
  }), B(() => {
    me = at(X, 1, "nos-sheet", null, me, {
      "nos-sheet--dark": l(z),
      "nos-sheet--nimble": l(ee),
      "nos-sheet--custom": l(V)
    }), Cn(X, `position: relative; ${l(ue) ?? ""}`);
  }), L(e, X), xe();
}
r(ml, "WhiteSheet");
const lt = class lt extends eo(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = ml;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < lt.MIN_WIDTH && (t.width = lt.MIN_WIDTH), t.height !== void 0 && t.height < lt.MIN_HEIGHT && (t.height = lt.MIN_HEIGHT), super.setPosition(t);
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
    const c = Array.isArray(o) ? o : [o];
    return c.some((v) => v.type === "subclass") ? this._onDropSubclassCreate(c) : this._actor.createEmbeddedDocuments("Item", c);
  }
  async _onDropSubclassCreate(t) {
    const n = Array.isArray(t) ? t : [t], a = this.document, s = [];
    for (const i of n) {
      if (i.type === "subclass") {
        const o = i, u = o.system?.parentClass, c = a.levels?.character ?? 0;
        if (c < 3) {
          ui.notifications?.warn(`You must be at least level 3 to select a subclass. You are currently level ${c}.`);
          continue;
        }
        if (!Object.values(a.classes ?? {}).some((_) => _.identifier === u)) {
          const _ = CONFIG.NIMBLE?.classes?.[u] ?? u;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${_} class.`);
          continue;
        }
        const v = a.items.find((_) => _.type === "subclass" && _.system?.parentClass === u);
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
r(lt, "WhiteCharacterSheet"), Be(lt, "MIN_WIDTH", 670), Be(lt, "MIN_HEIGHT", 400), Be(lt, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  form: { submitOnChange: !1 },
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Pa = lt;
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
