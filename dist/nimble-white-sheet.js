var Ja = Object.defineProperty;
var Qa = (e) => {
  throw TypeError(e);
};
var Er = (e, t, n) => t in e ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t) => Ja(e, "name", { value: t, configurable: !0 });
var Fe = (e, t, n) => Er(e, typeof t != "symbol" ? t + "" : t, n), la = (e, t, n) => t.has(e) || Qa("Cannot " + n);
var b = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => t.has(e) ? Qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, a) => (la(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), Ee = (e, t, n) => (la(e, t, "access private method"), n);
const me = /* @__PURE__ */ Symbol(), Sr = /* @__PURE__ */ Symbol("filename"), kr = "http://www.w3.org/1999/xhtml", Xa = globalThis.process?.env?.NODE_ENV, C = Xa && !Xa.toLowerCase().startsWith("prod");
var bi = Array.isArray, xr = Array.prototype.indexOf, Bt = Array.prototype.includes, Xn = Array.from, qt = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Nr = Object.getOwnPropertyDescriptors, Tr = Object.prototype, Ir = Array.prototype, mi = Object.getPrototypeOf, Za = Object.isExtensible;
const ca = /* @__PURE__ */ i(() => {
}, "noop");
function Ar(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
i(Ar, "run_all");
function pi() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
i(pi, "deferred");
function gi(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
i(gi, "to_array");
const ge = 2, ba = 4, Zn = 8, yi = 1 << 24, pt = 16, at = 32, Gt = 64, La = 128, Ke = 512, he = 1024, ye = 2048, nt = 4096, Pe = 8192, St = 16384, Ha = 32768, fn = 65536, qn = 1 << 17, wi = 1 << 18, mn = 1 << 19, Cr = 1 << 20, bt = 1 << 25, At = 32768, ma = 1 << 21, $n = 1 << 22, kt = 1 << 23, tn = /* @__PURE__ */ Symbol("$state"), Mr = /* @__PURE__ */ Symbol(""), Ei = /* @__PURE__ */ Symbol("proxy path");
var nn;
const Zt = new (nn = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, i(nn, "StaleReactionError"), nn)();
function Dr(e) {
  if (C) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
i(Dr, "lifecycle_outside_component");
function Wr() {
  if (C) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
i(Wr, "async_derived_orphan");
function $a() {
  if (C) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
i($a, "bind_invalid_checkbox_value");
function Or() {
  if (C) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
i(Or, "derived_references_self");
function Si(e, t, n) {
  if (C) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
i(Si, "each_key_duplicate");
function Lr(e) {
  if (C) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
i(Lr, "effect_in_teardown");
function Hr() {
  if (C) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
i(Hr, "effect_in_unowned_derived");
function Pr(e) {
  if (C) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
i(Pr, "effect_orphan");
function Rr() {
  if (C) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
i(Rr, "effect_update_depth_exceeded");
function Fr(e) {
  if (C) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
i(Fr, "rune_outside_svelte");
function jr() {
  if (C) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
i(jr, "state_descriptors_fixed");
function zr() {
  if (C) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
i(zr, "state_prototype_fixed");
function Ur() {
  if (C) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
i(Ur, "state_unsafe_mutation");
function Br() {
  if (C) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
i(Br, "svelte_boundary_reset_onerror");
var ea = "font-weight: bold", ta = "font-weight: normal";
function qr() {
  C ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, ea, ta) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
i(qr, "lifecycle_double_unmount");
function ua(e) {
  C ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, ea, ta) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
i(ua, "state_proxy_equality_mismatch");
function Kr() {
  C ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, ea, ta) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
i(Kr, "state_proxy_unmount");
function Vr() {
  C ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", ea, ta) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
i(Vr, "svelte_boundary_reset_noop");
function ki(e) {
  return e === this.v;
}
i(ki, "equals");
function xi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
i(xi, "safe_not_equal");
function Ni(e) {
  return !xi(e, this.v);
}
i(Ni, "safe_equals");
let Gr = !1;
function it(e, t) {
  return e.label = t, Ti(e.v, t), e;
}
i(it, "tag");
function Ti(e, t) {
  return e?.[Ei]?.(t), e;
}
i(Ti, "tag_proxy");
function Yr(e) {
  const t = new Error(), n = Jr();
  return n.length === 0 ? null : (n.unshift(`
`), qt(t, "stack", {
    value: n.join(`
`)
  }), qt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
i(Yr, "get_error");
function Jr() {
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
i(Jr, "get_stack");
let pe = null;
function dn(e) {
  pe = e;
}
i(dn, "set_component_context");
let Tn = null;
function Kn(e) {
  Tn = e;
}
i(Kn, "set_dev_stack");
let Wn = null;
function ei(e) {
  Wn = e;
}
i(ei, "set_dev_current_component_function");
function Rn(e, t) {
  return Qr("setContext").set(e, t), t;
}
i(Rn, "setContext");
function Se(e, t = !1, n) {
  pe = {
    p: pe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, C && (pe.function = n, Wn = n);
}
i(Se, "push");
function ke(e) {
  var t = (
    /** @type {ComponentContext} */
    pe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Gi(a);
  }
  return t.i = !0, pe = t.p, C && (Wn = pe?.function ?? null), /** @type {T} */
  {};
}
i(ke, "pop");
function Ii() {
  return !0;
}
i(Ii, "is_runes");
function Qr(e) {
  return pe === null && Dr(e), pe.c ??= new Map(Xr(pe) || void 0);
}
i(Qr, "get_or_init_context_map");
function Xr(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
i(Xr, "get_parent_context");
let Wt = [];
function Ai() {
  var e = Wt;
  Wt = [], Ar(e);
}
i(Ai, "run_micro_tasks");
function xt(e) {
  if (Wt.length === 0 && !xn) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Ai();
    });
  }
  Wt.push(e);
}
i(xt, "queue_micro_task");
function Zr() {
  for (; Wt.length > 0; )
    Ai();
}
i(Zr, "flush_tasks");
const pa = /* @__PURE__ */ new WeakMap();
function Ci(e) {
  var t = ie;
  if (t === null)
    return $.f |= kt, e;
  if (C && e instanceof Error && !pa.has(e) && pa.set(e, $r(e, t)), (t.f & Ha) === 0) {
    if ((t.f & La) === 0)
      throw C && !t.parent && e instanceof Error && Mi(e), e;
    t.b.error(e);
  } else
    vn(e, t);
}
i(Ci, "handle_error");
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
  throw C && e instanceof Error && Mi(e), e;
}
i(vn, "invoke_error_boundary");
function $r(e, t) {
  const n = en(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = za ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, r = t.ctx; r !== null; )
      s += `
${a}in ${r.function?.[Sr].split("/").pop()}`, r = r.p;
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
i($r, "get_adjustments");
function Mi(e) {
  const t = pa.get(e);
  t && (qt(e, "message", {
    value: t.message
  }), qt(e, "stack", {
    value: t.stack
  }));
}
i(Mi, "apply_adjustments");
const es = -7169;
function ve(e, t) {
  e.f = e.f & es | t;
}
i(ve, "set_signal_status");
function Pa(e) {
  (e.f & Ke) !== 0 || e.deps === null ? ve(e, he) : ve(e, nt);
}
i(Pa, "update_derived_status");
function Di(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & At) === 0 || (t.f ^= At, Di(
        /** @type {Derived} */
        t.deps
      ));
}
i(Di, "clear_marked");
function Wi(e, t, n) {
  (e.f & ye) !== 0 ? t.add(e) : (e.f & nt) !== 0 && n.add(e), Di(e.deps), ve(e, he);
}
i(Wi, "defer_effect");
const Fn = /* @__PURE__ */ new Set();
let se = null, ga = null, Xe = null, Te = [], na = null, ya = !1, xn = !1;
var an, rn, Lt, sn, An, Cn, Ht, _t, on, ft, wa, Ea, Oi;
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
      for (const [s, r] of b(this, _t))
        Ri(s, r);
    } else {
      for (const s of b(this, an)) s();
      b(this, an).clear(), b(this, Lt) === 0 && Ee(this, ft, Oi).call(this), ga = this, se = null, ti(a), ti(n), ga = null, b(this, An)?.resolve();
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
      if (Li(), se !== null && se !== this)
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
    return (b(this, An) ?? q(this, An, pi())).promise;
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
wa = /* @__PURE__ */ i(function(t, n, a) {
  t.f ^= he;
  for (var s = t.first, r = null; s !== null; ) {
    var o = s.f, u = (o & (at | Gt)) !== 0, l = u && (o & he) !== 0, f = l || (o & Pe) !== 0 || b(this, _t).has(s);
    if (!f && s.fn !== null) {
      u ? s.f ^= he : r !== null && (o & (ba | Zn | yi)) !== 0 ? r.b.defer_effect(s) : (o & ba) !== 0 ? n.push(s) : Ln(s) && ((o & pt) !== 0 && b(this, Ht).add(s), In(s));
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
    Wi(t[n], b(this, Cn), b(this, Ht));
}, "#defer_effects"), Oi = /* @__PURE__ */ i(function() {
  var s;
  if (Fn.size > 1) {
    this.previous.clear();
    var t = Xe, n = !0;
    for (const r of Fn) {
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
        var a = Te;
        Te = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Hi(d, u, l, f);
        if (Te.length > 0) {
          se = r, r.apply();
          for (const d of Te)
            Ee(s = r, ft, wa).call(s, d, [], []);
          r.deactivate();
        }
        Te = a;
      }
    }
    se = null, Xe = t;
  }
  this.committed = !0, Fn.delete(this);
}, "#commit"), i(Yn, "Batch");
let Nt = Yn;
function ts(e) {
  var t = xn;
  xn = !0;
  try {
    for (var n; ; ) {
      if (Zr(), Te.length === 0 && (se?.flush(), Te.length === 0))
        return na = null, /** @type {T} */
        n;
      Li();
    }
  } finally {
    xn = t;
  }
}
i(ts, "flushSync");
function Li() {
  ya = !0;
  var e = C ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Te.length > 0; ) {
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
        ns();
      }
      if (n.process(Te), Tt.clear(), C)
        for (const r of n.current.keys())
          e.add(r);
    }
  } finally {
    if (Te = [], ya = !1, na = null, C)
      for (
        const r of
        /** @type {Set<Source>} */
        e
      )
        r.updated = null;
  }
}
i(Li, "flush_effects");
function ns() {
  try {
    Rr();
  } catch (e) {
    C && qt(e, "stack", { value: "" }), vn(e, na);
  }
}
i(ns, "infinite_loop_guard");
let dt = null;
function ti(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (St | Pe)) === 0 && Ln(a) && (dt = /* @__PURE__ */ new Set(), In(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Zi(a) : a.fn = null), dt?.size > 0)) {
        Tt.clear();
        for (const s of dt) {
          if ((s.f & (St | Pe)) !== 0) continue;
          const r = [s];
          let o = s.parent;
          for (; o !== null; )
            dt.has(o) && (dt.delete(o), r.push(o)), o = o.parent;
          for (let u = r.length - 1; u >= 0; u--) {
            const l = r[u];
            (l.f & (St | Pe)) === 0 && In(l);
          }
        }
        dt.clear();
      }
    }
    dt = null;
  }
}
i(ti, "flush_queued_effects");
function Hi(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const r = s.f;
      (r & ge) !== 0 ? Hi(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (r & ($n | pt)) !== 0 && (r & ye) === 0 && Pi(s, t, a) && (ve(s, ye), Ze(
        /** @type {Effect} */
        s
      ));
    }
}
i(Hi, "mark_effects");
function Pi(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Bt.call(t, s))
        return !0;
      if ((s.f & ge) !== 0 && Pi(
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
i(Pi, "depends_on");
function Ze(e) {
  for (var t = na = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ya && t === ie && (n & pt) !== 0 && (n & wi) === 0)
      return;
    if ((n & (Gt | at)) !== 0) {
      if ((n & he) === 0) return;
      t.f ^= he;
    }
  }
  Te.push(t);
}
i(Ze, "schedule_effect");
function Ri(e, t) {
  if (!((e.f & at) !== 0 && (e.f & he) !== 0)) {
    (e.f & ye) !== 0 ? t.d.push(e) : (e.f & nt) !== 0 && t.m.push(e), ve(e, he);
    for (var n = e.first; n !== null; )
      Ri(n, t), n = n.next;
  }
}
i(Ri, "reset_branch");
function Fi(e) {
  let t = 0, n = Kt(0), a;
  return C && it(n, "createSubscriber version"), () => {
    Ua() && (c(n), Yi(() => (t === 0 && (a = lr(() => e(() => Nn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, Nn(n));
      });
    })));
  };
}
i(Fi, "createSubscriber");
var as = fn | mn | La;
function is(e, t, n) {
  new Sa(e, t, n);
}
i(is, "boundary");
var ze, Oa, st, Pt, ot, Ue, Ne, lt, ht, yt, Rt, wt, ln, Ft, cn, un, ct, Jn, be, rs, ss, ka, zn, Un, xa;
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
    B(this, Jn, Fi(() => (q(this, ct, Kt(b(this, Rt))), C && it(b(this, ct), "$effect.pending()"), () => {
      q(this, ct, null);
    })));
    q(this, ze, t), q(this, st, n), q(this, Pt, a), this.parent = /** @type {Effect} */
    ie.b, this.is_pending = !!b(this, st).pending, q(this, ot, Ba(() => {
      ie.b = this;
      {
        var s = Ee(this, be, ka).call(this);
        try {
          q(this, Ue, Be(() => a(s)));
        } catch (r) {
          this.error(r);
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
    Wi(t, b(this, cn), b(this, un));
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
    var s = !1, r = !1;
    const o = /* @__PURE__ */ i(() => {
      if (s) {
        Vr();
        return;
      }
      s = !0, r && Br(), Nt.ensure(), q(this, Rt, 0), b(this, lt) !== null && zt(b(this, lt), () => {
        q(this, lt, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, Ue, Ee(this, be, zn).call(this, () => (q(this, Ft, !1), Be(() => b(this, Pt).call(this, b(this, ze)))))), b(this, wt) > 0 ? Ee(this, be, Un).call(this) : this.is_pending = !1;
    }, "reset");
    xt(() => {
      try {
        r = !0, n?.(t, o), r = !1;
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
ze = new WeakMap(), Oa = new WeakMap(), st = new WeakMap(), Pt = new WeakMap(), ot = new WeakMap(), Ue = new WeakMap(), Ne = new WeakMap(), lt = new WeakMap(), ht = new WeakMap(), yt = new WeakMap(), Rt = new WeakMap(), wt = new WeakMap(), ln = new WeakMap(), Ft = new WeakMap(), cn = new WeakMap(), un = new WeakMap(), ct = new WeakMap(), Jn = new WeakMap(), be = new WeakSet(), rs = /* @__PURE__ */ i(function() {
  try {
    q(this, Ue, Be(() => b(this, Pt).call(this, b(this, ze))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ss = /* @__PURE__ */ i(function() {
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
}, "#hydrate_pending_content"), ka = /* @__PURE__ */ i(function() {
  var t = b(this, ze);
  return this.is_pending && (q(this, yt, It()), b(this, ze).before(b(this, yt)), t = b(this, yt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
zn = /* @__PURE__ */ i(function(t) {
  var n = ie, a = $, s = pe;
  et(b(this, ot)), Ge(b(this, ot)), dn(b(this, ot).ctx);
  try {
    return t();
  } catch (r) {
    return Ci(r), null;
  } finally {
    et(n), Ge(a), dn(s);
  }
}, "#run"), Un = /* @__PURE__ */ i(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, st).pending
  );
  b(this, Ue) !== null && (q(this, ht, document.createDocumentFragment()), b(this, ht).append(
    /** @type {TemplateNode} */
    b(this, yt)
  ), tr(b(this, Ue), b(this, ht))), b(this, Ne) === null && q(this, Ne, Be(() => t(b(this, ze))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xa = /* @__PURE__ */ i(function(t) {
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
}, "#update_pending_count"), i(Va, "Boundary");
let Sa = Va;
function os(e, t, n, a) {
  const s = Ra;
  var r = e.filter((_) => !_.settled);
  if (n.length === 0 && r.length === 0) {
    a(t.map(s));
    return;
  }
  var o = se, u = (
    /** @type {Effect} */
    ie
  ), l = ls(), f = r.length === 1 ? r[0].promise : r.length > 1 ? Promise.all(r.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (y) {
      (u.f & St) === 0 && vn(y, u);
    }
    o?.deactivate(), Na();
  }
  if (i(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function v() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ us(_))).then((_) => d([...t.map(s), ..._])).catch((_) => vn(_, u));
  }
  i(v, "run"), f ? f.then(v) : v();
}
i(os, "flatten");
function ls() {
  var e = ie, t = $, n = pe, a = se;
  if (C)
    var s = Tn;
  return /* @__PURE__ */ i(function(o = !0) {
    et(e), Ge(t), dn(n), o && a?.activate(), C && Kn(s);
  }, "restore");
}
i(ls, "capture");
function Na() {
  et(null), Ge(null), dn(null), C && Kn(null);
}
i(Na, "unset_context");
const cs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = ge | ye, n = $ !== null && ($.f & ge) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return ie !== null && (ie.f |= mn), {
    ctx: pe,
    deps: null,
    effects: null,
    equals: ki,
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
function us(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ie
  );
  a === null && Wr();
  var s = (
    /** @type {Boundary} */
    a.b
  ), r = (
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
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject(Zt), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ i((y, w = void 0) => {
      if (d.activate(), w)
        w !== Zt && (o.f |= kt, hn(o, w));
      else {
        (o.f & kt) !== 0 && (o.f ^= kt), hn(o, y);
        for (const [A, g] of l) {
          if (l.delete(A), A === d) break;
          g.reject(Zt);
        }
      }
      u && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (y) => _(null, y || "unknown"));
  }), Vi(() => {
    for (const f of l.values())
      f.reject(Zt);
  }), C && (o.f |= $n), new Promise((f) => {
    function d(v) {
      function _() {
        v === r ? f(o) : d(r);
      }
      i(_, "go"), v.then(_, _);
    }
    i(d, "next"), d(r);
  });
}
i(us, "async_derived");
// @__NO_SIDE_EFFECTS__
function F(e) {
  const t = /* @__PURE__ */ Ra(e);
  return nr(t), t;
}
i(F, "user_derived");
// @__NO_SIDE_EFFECTS__
function fs(e) {
  const t = /* @__PURE__ */ Ra(e);
  return t.equals = Ni, t;
}
i(fs, "derived_safe_equal");
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
i(Ta, "destroy_derived_effects");
let fa = [];
function ds(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ge) === 0)
      return (t.f & St) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
i(ds, "get_derived_parent_effect");
function Fa(e) {
  var t, n = ie;
  if (et(ds(e)), C) {
    let a = _n;
    ni(/* @__PURE__ */ new Set());
    try {
      Bt.call(fa, e) && Or(), fa.push(e), e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      et(n), ni(a), fa.pop();
    }
  } else
    try {
      e.f &= ~At, Ta(e), t = Ia(e);
    } finally {
      et(n);
    }
  return t;
}
i(Fa, "execute_derived");
function ji(e) {
  var t = Fa(e);
  if (!e.equals(t) && (e.wv = ir(), (!se?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ve(e, he);
    return;
  }
  Vt || (Xe !== null ? (Ua() || se?.is_fork) && Xe.set(e, t) : Pa(e));
}
i(ji, "update_derived");
let _n = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
function ni(e) {
  _n = e;
}
i(ni, "set_eager_effects");
let ja = !1;
function vs() {
  ja = !0;
}
i(vs, "set_eager_effects_deferred");
function Kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ki,
    rv: 0,
    wv: 0
  };
  return n;
}
i(Kt, "source");
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  const n = Kt(e);
  return nr(n), n;
}
i(Le, "state");
// @__NO_SIDE_EFFECTS__
function _s(e, t = !1, n = !0) {
  const a = Kt(e);
  return t || (a.equals = Ni), a;
}
i(_s, "mutable_source");
function He(e, t, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || ($.f & qn) !== 0) && Ii() && ($.f & (ge | pt | $n | qn)) !== 0 && (Ve === null || !Bt.call(Ve, e)) && Ur();
  let a = n ? $t(t) : t;
  return C && Ti(
    a,
    /** @type {string} */
    e.label
  ), hn(e, a);
}
i(He, "set");
function hn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vt ? Tt.set(e, t) : Tt.set(e, n), e.v = t;
    var a = Nt.ensure();
    if (a.capture(e, n), C) {
      if (ie !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const r = Yr("updated at");
          if (r !== null) {
            let o = e.updated.get(r.stack);
            o || (o = { error: r, count: 0 }, e.updated.set(r.stack, o)), o.count++;
          }
        }
      }
      ie !== null && (e.set_during_effect = !0);
    }
    if ((e.f & ge) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ye) !== 0 && Fa(s), Pa(s);
    }
    e.wv = ir(), Ui(e, ye), ie !== null && (ie.f & he) !== 0 && (ie.f & (at | Gt)) === 0 && (je === null ? As([e]) : je.push(e)), !a.is_fork && _n.size > 0 && !ja && zi();
  }
  return t;
}
i(hn, "internal_set");
function zi() {
  ja = !1;
  for (const e of _n)
    (e.f & he) !== 0 && ve(e, nt), Ln(e) && In(e);
  _n.clear();
}
i(zi, "flush_eager_effects");
function Nn(e) {
  He(e, e.v + 1);
}
i(Nn, "increment");
function Ui(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var r = n[s], o = r.f;
      if (C && (o & qn) !== 0) {
        _n.add(r);
        continue;
      }
      var u = (o & ye) === 0;
      if (u && ve(r, t), (o & ge) !== 0) {
        var l = (
          /** @type {Derived} */
          r
        );
        Xe?.delete(l), (o & At) === 0 && (o & Ke && (r.f |= At), Ui(l, nt));
      } else u && ((o & pt) !== 0 && dt !== null && dt.add(
        /** @type {Effect} */
        r
      ), Ze(
        /** @type {Effect} */
        r
      ));
    }
}
i(Ui, "mark_reactions");
const hs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function $t(e) {
  if (typeof e != "object" || e === null || tn in e)
    return e;
  const t = mi(e);
  if (t !== Tr && t !== Ir)
    return e;
  var n = /* @__PURE__ */ new Map(), a = bi(e), s = /* @__PURE__ */ Le(0), r = Ut, o = /* @__PURE__ */ i((d) => {
    if (Ut === r)
      return d();
    var v = $, _ = Ut;
    Ge(null), si(r);
    var y = d();
    return Ge(v), si(_), y;
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
      l = !0, u = d, it(s, `${u} version`);
      for (const [v, _] of n)
        it(_, Dt(u, v));
      l = !1;
    }
  }
  return i(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && jr();
        var y = n.get(v);
        return y === void 0 ? y = o(() => {
          var w = /* @__PURE__ */ Le(_.value);
          return n.set(v, w), C && typeof v == "string" && it(w, Dt(u, v)), w;
        }) : He(y, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const y = o(() => /* @__PURE__ */ Le(me));
            n.set(v, y), Nn(s), C && it(y, Dt(u, v));
          }
        } else
          He(_, me), Nn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === tn)
          return e;
        if (C && v === Ei)
          return f;
        var y = n.get(v), w = v in d;
        if (y === void 0 && (!w || en(d, v)?.writable) && (y = o(() => {
          var g = $t(w ? d[v] : me), W = /* @__PURE__ */ Le(g);
          return C && it(W, Dt(u, v)), W;
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
        if (v === tn)
          return !0;
        var _ = n.get(v), y = _ !== void 0 && _.v !== me || Reflect.has(d, v);
        if (_ !== void 0 || ie !== null && (!y || en(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var A = y ? $t(d[v]) : me, g = /* @__PURE__ */ Le(A);
            return C && it(g, Dt(u, v)), g;
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
          for (var g = _; g < /** @type {Source<number>} */
          w.v; g += 1) {
            var W = n.get(g + "");
            W !== void 0 ? He(W, me) : g in d && (W = o(() => /* @__PURE__ */ Le(me)), n.set(g + "", W), C && it(W, Dt(u, g)));
          }
        if (w === void 0)
          (!A || en(d, v)?.writable) && (w = o(() => /* @__PURE__ */ Le(void 0)), C && it(w, Dt(u, v)), He(w, $t(_)), n.set(v, w));
        else {
          A = w.v !== me;
          var le = o(() => $t(_));
          He(w, le);
        }
        var E = Reflect.getOwnPropertyDescriptor(d, v);
        if (E?.set && E.set.call(y, _), !A) {
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
          var A = n.get(w);
          return A === void 0 || A.v !== me;
        });
        for (var [_, y] of n)
          y.v !== me && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        zr();
      }
    }
  );
}
i($t, "proxy");
function Dt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : hs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
i(Dt, "get_label");
function da(e) {
  try {
    if (e !== null && typeof e == "object" && tn in e)
      return e[tn];
  } catch {
  }
  return e;
}
i(da, "get_proxied_value");
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
      ) ? function(...r) {
        vs();
        var o = s.apply(this, r);
        return zi(), o;
      } : s;
    }
  });
}
i(ms, "inspectable_array");
function ps() {
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
i(ps, "init_array_prototype_warnings");
var ai, za, Bi, qi;
function gs() {
  if (ai === void 0) {
    ai = window, za = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Bi = en(t, "firstChild").get, qi = en(t, "nextSibling").get, Za(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Za(n) && (n.__t = void 0), C && (e.__svelte_meta = null, ps());
  }
}
i(gs, "init_operations");
function It(e = "") {
  return document.createTextNode(e);
}
i(It, "create_text");
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return (
    /** @type {TemplateNode | null} */
    Bi.call(e)
  );
}
i(Et, "get_first_child");
// @__NO_SIDE_EFFECTS__
function On(e) {
  return (
    /** @type {TemplateNode | null} */
    qi.call(e)
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
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ On(a);
  return a;
}
i(m, "sibling");
function ys(e) {
  e.textContent = "";
}
i(ys, "clear_text_content");
function Ki() {
  return !1;
}
i(Ki, "should_defer_append");
let ii = !1;
function ws() {
  ii || (ii = !0, document.addEventListener(
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
i(ws, "add_form_reset_listener");
function aa(e) {
  var t = $, n = ie;
  Ge(null), et(null);
  try {
    return e();
  } finally {
    Ge(t), et(n);
  }
}
i(aa, "without_reactive_context");
function Es(e, t, n, a = n) {
  e.addEventListener(t, () => aa(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), ws();
}
i(Es, "listen_to_event_and_reset_event");
function Ss(e) {
  ie === null && ($ === null && Pr(e), Hr()), Vt && Lr(e);
}
i(Ss, "validate_effect");
function ks(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
i(ks, "push_effect");
function Ct(e, t, n) {
  var a = ie;
  if (C)
    for (; a !== null && (a.f & qn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Pe) !== 0 && (e |= Pe);
  var s = {
    ctx: pe,
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
  var r = s;
  if (n && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  (r.f & mn) === 0 && (r = r.first, (e & pt) !== 0 && (e & fn) !== 0 && r !== null && (r.f |= fn)), r !== null && (r.parent = a, a !== null && ks(r, a), $ !== null && ($.f & ge) !== 0 && (e & Gt) === 0)) {
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
  return $ !== null && !$e;
}
i(Ua, "effect_tracking");
function Vi(e) {
  const t = Ct(Zn, null, !1);
  return ve(t, he), t.teardown = e, t;
}
i(Vi, "teardown");
function xs(e) {
  Ss("$effect"), C && qt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ie.f
  ), n = !$ && (t & at) !== 0 && (t & Ha) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      pe
    );
    (a.e ??= []).push(e);
  } else
    return Gi(e);
}
i(xs, "user_effect");
function Gi(e) {
  return Ct(ba | Cr, e, !1);
}
i(Gi, "create_user_effect");
function Ns(e) {
  Nt.ensure();
  const t = Ct(Gt | mn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? zt(t, () => {
      Ae(t), a(void 0);
    }) : (Ae(t), a(void 0));
  });
}
i(Ns, "component_root");
function Ts(e) {
  return Ct($n | mn, e, !0);
}
i(Ts, "async_effect");
function Yi(e, t = 0) {
  return Ct(Zn | t, e, !0);
}
i(Yi, "render_effect");
function K(e, t = [], n = [], a = []) {
  os(a, t, n, (s) => {
    Ct(Zn, () => e(...s.map(c)), !0);
  });
}
i(K, "template_effect");
function Ba(e, t = 0) {
  var n = Ct(pt | t, e, !0);
  return C && (n.dev_stack = Tn), n;
}
i(Ba, "block");
function Be(e) {
  return Ct(at | mn, e, !0);
}
i(Be, "branch");
function Ji(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vt, a = $;
    ri(!0), Ge(null);
    try {
      t.call(null);
    } finally {
      ri(n), Ge(a);
    }
  }
}
i(Ji, "execute_effect_teardown");
function Qi(e, t = !1) {
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
i(Qi, "destroy_effect_children");
function Is(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & at) === 0 && Ae(t), t = n;
  }
}
i(Is, "destroy_block_effect_children");
function Ae(e, t = !0) {
  var n = !1;
  (t || (e.f & wi) !== 0) && e.nodes !== null && e.nodes.end !== null && (Xi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Qi(e, t && !n), Vn(e, 0), ve(e, St);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const r of a)
      r.stop();
  Ji(e);
  var s = e.parent;
  s !== null && s.first !== null && Zi(e), C && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
i(Ae, "destroy_effect");
function Xi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ On(e);
    e.remove(), e = n;
  }
}
i(Xi, "remove_effect_dom");
function Zi(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
i(Zi, "unlink_effect");
function zt(e, t, n = !0) {
  var a = [];
  $i(e, a, !0);
  var s = /* @__PURE__ */ i(() => {
    n && Ae(e), t && t();
  }, "fn"), r = a.length;
  if (r > 0) {
    var o = /* @__PURE__ */ i(() => --r || s(), "check");
    for (var u of a)
      u.out(o);
  } else
    s();
}
i(zt, "pause_effect");
function $i(e, t, n) {
  if ((e.f & Pe) === 0) {
    e.f ^= Pe;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || n) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var r = s.next, o = (s.f & fn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & at) !== 0 && (e.f & pt) !== 0;
      $i(s, t, o ? n : !1), s = r;
    }
  }
}
i($i, "pause_children");
function qa(e) {
  er(e, !0);
}
i(qa, "resume_effect");
function er(e, t) {
  if ((e.f & Pe) !== 0) {
    e.f ^= Pe, (e.f & he) === 0 && (ve(e, ye), Ze(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & fn) !== 0 || (n.f & at) !== 0;
      er(n, s ? t : !1), n = a;
    }
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || t) && o.in();
  }
}
i(er, "resume_children");
function tr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ On(n);
      t.append(n), n = s;
    }
}
i(tr, "move_effect");
let Bn = !1, Vt = !1;
function ri(e) {
  Vt = e;
}
i(ri, "set_is_destroying_effect");
let $ = null, $e = !1;
function Ge(e) {
  $ = e;
}
i(Ge, "set_active_reaction");
let ie = null;
function et(e) {
  ie = e;
}
i(et, "set_active_effect");
let Ve = null;
function nr(e) {
  $ !== null && (Ve === null ? Ve = [e] : Ve.push(e));
}
i(nr, "push_reaction_value");
let Ie = null, We = 0, je = null;
function As(e) {
  je = e;
}
i(As, "set_untracked_writes");
let ar = 1, Ot = 0, Ut = Ot;
function si(e) {
  Ut = e;
}
i(si, "set_update_version");
function ir() {
  return ++ar;
}
i(ir, "increment_write_version");
function Ln(e) {
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if (t & ge && (e.f &= ~At), (t & nt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var r = n[s];
      if (Ln(
        /** @type {Derived} */
        r
      ) && ji(
        /** @type {Derived} */
        r
      ), r.wv > e.wv)
        return !0;
    }
    (t & Ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && ve(e, he);
  }
  return !1;
}
i(Ln, "is_dirty");
function rr(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(Ve !== null && Bt.call(Ve, e)))
    for (var s = 0; s < a.length; s++) {
      var r = a[s];
      (r.f & ge) !== 0 ? rr(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (n ? ve(r, ye) : (r.f & he) !== 0 && ve(r, nt), Ze(
        /** @type {Effect} */
        r
      ));
    }
}
i(rr, "schedule_possible_effect_self_invalidation");
function Ia(e) {
  var t = Ie, n = We, a = je, s = $, r = Ve, o = pe, u = $e, l = Ut, f = e.f;
  Ie = /** @type {null | Value[]} */
  null, We = 0, je = null, $ = (f & (at | Gt)) === 0 ? e : null, Ve = null, dn(e.ctx), $e = !1, Ut = ++Ot, e.ac !== null && (aa(() => {
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
    if (Ii() && je !== null && !$e && _ !== null && (e.f & (ge | nt | ye)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      je.length; w++)
        rr(
          je[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ot++, s.deps !== null)
        for (let A = 0; A < n; A += 1)
          s.deps[A].rv = Ot;
      if (t !== null)
        for (const A of t)
          A.rv = Ot;
      je !== null && (a === null ? a = je : a.push(.../** @type {Source[]} */
      je));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), v;
  } catch (A) {
    return Ci(A);
  } finally {
    e.f ^= ma, Ie = t, We = n, je = a, $ = s, Ve = r, dn(o), $e = u, Ut = l;
  }
}
i(Ia, "update_reaction");
function Cs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = xr.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ie === null || !Bt.call(Ie, t))) {
    var r = (
      /** @type {Derived} */
      t
    );
    (r.f & Ke) !== 0 && (r.f ^= Ke, r.f &= ~At), Pa(r), Ta(r), Vn(r, 0);
  }
}
i(Cs, "remove_reaction");
function Vn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Cs(e, n[a]);
}
i(Vn, "remove_reactions");
function In(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ve(e, he);
    var n = ie, a = Bn;
    if (ie = e, Bn = !0, C) {
      var s = Wn;
      ei(e.component_function);
      var r = (
        /** @type {any} */
        Tn
      );
      Kn(e.dev_stack ?? Tn);
    }
    try {
      (t & (pt | yi)) !== 0 ? Is(e) : Qi(e), Ji(e);
      var o = Ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ar;
      var u;
      C && Gr && (e.f & ye) !== 0 && e.deps;
    } finally {
      Bn = a, ie = n, C && (ei(s), Kn(r));
    }
  }
}
i(In, "update_effect");
async function Ms() {
  await Promise.resolve(), ts();
}
i(Ms, "tick");
function c(e) {
  var t = e.f, n = (t & ge) !== 0;
  if ($ !== null && !$e) {
    var a = ie !== null && (ie.f & St) !== 0;
    if (!a && (Ve === null || !Bt.call(Ve, e))) {
      var s = $.deps;
      if (($.f & ma) !== 0)
        e.rv < Ot && (e.rv = Ot, Ie === null && s !== null && s[We] === e ? We++ : Ie === null ? Ie = [e] : Ie.push(e));
      else {
        ($.deps ??= []).push(e);
        var r = e.reactions;
        r === null ? e.reactions = [$] : Bt.call(r, $) || r.push($);
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
      return ((o.f & he) === 0 && o.reactions !== null || or(o)) && (u = Fa(o)), Tt.set(o, u), u;
    }
    var l = (o.f & Ke) === 0 && !$e && $ !== null && (Bn || ($.f & Ke) !== 0), f = o.deps === null;
    Ln(o) && (l && (o.f |= Ke), ji(o)), l && !f && sr(o);
  }
  if (Xe?.has(e))
    return Xe.get(e);
  if ((e.f & kt) !== 0)
    throw e.v;
  return e.v;
}
i(c, "get");
function sr(e) {
  if (e.deps !== null) {
    e.f |= Ke;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ge) !== 0 && (t.f & Ke) === 0 && sr(
        /** @type {Derived} */
        t
      );
  }
}
i(sr, "reconnect");
function or(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & ge) !== 0 && or(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
i(or, "depends_on_old_values");
function lr(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
i(lr, "untrack");
const cr = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Ds(e, t, n, a = {}) {
  function s(r) {
    if (a.capture || Sn.call(t, r), !r.cancelBubble)
      return aa(() => n?.call(this, r));
  }
  return i(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
i(Ds, "create_event");
function vt(e, t, n, a, s) {
  var r = { capture: a, passive: s }, o = Ds(e, t, n, r);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Vi(() => {
    t.removeEventListener(e, o, r);
  });
}
i(vt, "event");
function Ce(e) {
  for (var t = 0; t < e.length; t++)
    cr.add(e[t]);
  for (var n of Aa)
    n(e);
}
i(Ce, "delegate");
let oi = null;
function Sn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], r = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  oi = e;
  var o = 0, u = oi === e && e.__root;
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
    qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || n;
      }
    });
    var d = $, v = ie;
    Ge(null), et(null);
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
        } catch (g) {
          _ ? y.push(g) : _ = g;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        r = w;
      }
      if (_) {
        for (let g of y)
          queueMicrotask(() => {
            throw g;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ge(d), et(v);
    }
  }
}
i(Sn, "handle_event_propagation");
function ur(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
i(ur, "create_fragment_from_html");
function Gn(e, t) {
  var n = (
    /** @type {Effect} */
    ie
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
i(Gn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, r = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ur(r ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
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
i(H, "from_html");
function va() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), Gn(t, n), e;
}
i(va, "comment");
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
i(O, "append");
const Ws = ["touchstart", "touchmove"];
function Os(e) {
  return Ws.includes(e);
}
i(Os, "is_passive_event");
function D(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
i(D, "set_text");
function Ls(e, t) {
  return Hs(e, t);
}
i(Ls, "mount");
const Qt = /* @__PURE__ */ new Map();
function Hs(e, { target: t, anchor: n, props: a = {}, events: s, context: r, intro: o = !0 }) {
  gs();
  var u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ i((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var y = v[_];
      if (!u.has(y)) {
        u.add(y);
        var w = Os(y);
        t.addEventListener(y, Sn, { passive: w });
        var A = Qt.get(y);
        A === void 0 ? (document.addEventListener(y, Sn, { passive: w }), Qt.set(y, 1)) : Qt.set(y, A + 1);
      }
    }
  }, "event_handle");
  l(Xn(cr)), Aa.add(l);
  var f = void 0, d = Ns(() => {
    var v = n ?? t.appendChild(It());
    return is(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ i(() => {
        }, "pending")
      },
      (_) => {
        Se({});
        var y = (
          /** @type {ComponentContext} */
          pe
        );
        r && (y.c = r), s && (a.$$events = s), f = e(_, a) || {}, ke();
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
i(Hs, "_mount");
let Ca = /* @__PURE__ */ new WeakMap();
function Ps(e, t) {
  const n = Ca.get(e);
  return n ? (Ca.delete(e), n(t)) : (C && (tn in e ? Kr() : qr()), Promise.resolve());
}
i(Ps, "unmount");
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
    B(this, Dn, /* @__PURE__ */ i(() => {
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
        for (const [r, o] of b(this, Qe)) {
          if (b(this, Qe).delete(r), r === t)
            break;
          const u = b(this, Oe).get(o);
          u && (Ae(u.effect), b(this, Oe).delete(o));
        }
        for (const [r, o] of b(this, ut)) {
          if (r === n || b(this, jt).has(r)) continue;
          const u = /* @__PURE__ */ i(() => {
            if (Array.from(b(this, Qe).values()).includes(r)) {
              var f = document.createDocumentFragment();
              tr(o, f), f.append(It()), b(this, Oe).set(r, { effect: o, fragment: f });
            } else
              Ae(o);
            b(this, jt).delete(r), b(this, ut).delete(r);
          }, "on_destroy");
          b(this, Mn) || !a ? (b(this, jt).add(r), zt(o, u, !1)) : u();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    B(this, Qn, /* @__PURE__ */ i((t) => {
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
    ), s = Ki();
    if (n && !b(this, ut).has(t) && !b(this, Oe).has(t))
      if (s) {
        var r = document.createDocumentFragment(), o = It();
        r.append(o), b(this, Oe).set(t, {
          effect: Be(() => n(o)),
          fragment: r
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
Qe = new WeakMap(), ut = new WeakMap(), Oe = new WeakMap(), jt = new WeakMap(), Mn = new WeakMap(), Dn = new WeakMap(), Qn = new WeakMap(), i(Ga, "BranchManager");
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
          Fr(t);
        }, "get"),
        set: /* @__PURE__ */ i((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var dl = e;
  i(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function ee(e, t, n = !1) {
  var a = new Ma(e), s = n ? fn : 0;
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
function Ye(e, t) {
  return t;
}
i(Ye, "index");
function Rs(e, t, n) {
  for (var a = [], s = t.length, r, o = t.length, u = 0; u < s; u++) {
    let v = t[u];
    zt(
      v,
      () => {
        if (r) {
          if (r.pending.delete(v), r.done.add(v), r.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Da(Xn(r.done)), _.delete(r), _.size === 0 && (e.outrogroups = null);
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
    r = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
}
i(Rs, "pause_effects");
function Da(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ae(e[n], t);
}
i(Da, "destroy_effects");
var li;
function Je(e, t, n, a, s, r = null) {
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
    return bi(W) ? W : W == null ? [] : Xn(W);
  }), _, y = !0;
  function w() {
    g.fallback = d, Fs(g, _, o, t, a), d !== null && (_.length === 0 ? (d.f & bt) === 0 ? qa(d) : (d.f ^= bt, kn(d, null, o)) : zt(d, () => {
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
    ), M = Ki(), P = 0; P < W; P += 1) {
      var N = _[P], p = a(N, P), k = y ? null : u.get(p);
      k ? (k.v && hn(k.v, N), k.i && hn(k.i, P), M && E.unskip_effect(k.e)) : (k = js(
        u,
        y ? o : li ??= It(),
        N,
        p,
        P,
        s,
        t,
        n
      ), y || (k.e.f |= bt), u.set(p, k)), le.add(p);
    }
    if (W === 0 && r && !d && (y ? d = Be(() => r(o)) : (d = Be(() => r(li ??= It())), d.f |= bt)), W > le.size && (C ? zs(_, a) : Si("", "", "")), !y)
      if (M) {
        for (const [I, R] of u)
          le.has(I) || E.skip_effect(R.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    c(v);
  }), g = { effect: A, items: u, outrogroups: null, fallback: d };
  y = !1;
}
i(Je, "each");
function En(e) {
  for (; e !== null && (e.f & at) === 0; )
    e = e.next;
  return e;
}
i(En, "skip_to_branch");
function Fs(e, t, n, a, s) {
  var r = (a & 8) !== 0, o = t.length, u = e.items, l = En(e.effect.first), f, d = null, v, _ = [], y = [], w, A, g, W;
  if (r)
    for (W = 0; W < o; W += 1)
      w = t[W], A = s(w, W), g = /** @type {EachItem} */
      u.get(A).e, (g.f & bt) === 0 && (g.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(g));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], A = s(w, W), g = /** @type {EachItem} */
    u.get(A).e, e.outrogroups !== null)
      for (const R of e.outrogroups)
        R.pending.delete(g), R.done.delete(g);
    if ((g.f & bt) !== 0)
      if (g.f ^= bt, g === l)
        kn(g, null, n);
      else {
        var le = d ? d.next : l;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), gt(e, d, g), gt(e, g, le), kn(g, le, n), d = g, _ = [], y = [], l = En(d.next);
        continue;
      }
    if ((g.f & Pe) !== 0 && (qa(g), r && (g.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(g))), g !== l) {
      if (f !== void 0 && f.has(g)) {
        if (_.length < y.length) {
          var E = y[0], M;
          d = E.prev;
          var P = _[0], N = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            kn(_[M], E, n);
          for (M = 0; M < y.length; M += 1)
            f.delete(y[M]);
          gt(e, P.prev, N.next), gt(e, d, P), gt(e, N, E), l = E, d = N, W -= 1, _ = [], y = [];
        } else
          f.delete(g), kn(g, l, n), gt(e, g.prev, g.next), gt(e, g, d === null ? e.effect.first : d.next), gt(e, d, g), d = g;
        continue;
      }
      for (_ = [], y = []; l !== null && l !== g; )
        (f ??= /* @__PURE__ */ new Set()).add(l), y.push(l), l = En(l.next);
      if (l === null)
        continue;
    }
    (g.f & bt) === 0 && _.push(g), d = g, l = En(g.next);
  }
  if (e.outrogroups !== null) {
    for (const R of e.outrogroups)
      R.pending.size === 0 && (Da(Xn(R.done)), e.outrogroups?.delete(R));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var p = [];
    if (f !== void 0)
      for (g of f)
        (g.f & Pe) === 0 && p.push(g);
    for (; l !== null; )
      (l.f & Pe) === 0 && l !== e.fallback && p.push(l), l = En(l.next);
    var k = p.length;
    if (k > 0) {
      var I = (a & 4) !== 0 && o === 0 ? n : null;
      if (r) {
        for (W = 0; W < k; W += 1)
          p[W].nodes?.a?.measure();
        for (W = 0; W < k; W += 1)
          p[W].nodes?.a?.fix();
      }
      Rs(e, p, I);
    }
  }
  r && xt(() => {
    if (v !== void 0)
      for (g of v)
        g.nodes?.a?.apply();
  });
}
i(Fs, "reconcile");
function js(e, t, n, a, s, r, o, u) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ _s(n, !1, !1) : Kt(n) : null, f = (o & 2) !== 0 ? Kt(s) : null;
  return C && l && (l.trace = () => {
    u()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Be(() => (r(t, l ?? n, f ?? s, u), () => {
      e.delete(a);
    }))
  };
}
i(js, "create_item");
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
function gt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
i(gt, "link");
function zs(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const r = t(e[s], s);
    if (n.has(r)) {
      const o = String(n.get(r)), u = String(s);
      let l = String(r);
      l.startsWith("[object ") && (l = null), Si(o, u, l);
    }
    n.set(r, s);
  }
}
i(zs, "validate_each_keys");
function Us(e, t, n = !1, a = !1, s = !1) {
  var r = e, o = "";
  K(() => {
    var u = (
      /** @type {Effect} */
      ie
    );
    if (o !== (o = t() ?? "") && (u.nodes !== null && (Xi(
      u.nodes.start,
      /** @type {TemplateNode} */
      u.nodes.end
    ), u.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = ur(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ Et(f)), Gn(
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
i(Us, "html");
const ci = [...` 	
\r\f \v\uFEFF`];
function Bs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var r = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var u = o + r;
          (o === 0 || ci.includes(a[o - 1])) && (u === a.length || ci.includes(a[u])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(u + 1) : o = u;
        }
  }
  return a === "" ? null : a;
}
i(Bs, "to_class");
function qs(e, t) {
  return e == null ? null : String(e);
}
i(qs, "to_style");
function tt(e, t, n, a, s, r) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var u = Bs(n, a, r);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = n;
  } else if (r && s !== r)
    for (var l in r) {
      var f = !!r[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return r;
}
i(tt, "set_class");
function jn(e, t, n, a) {
  var s = e.__style;
  if (s !== t) {
    var r = qs(t);
    r == null ? e.removeAttribute("style") : e.style.cssText = r, e.__style = t;
  }
  return a;
}
i(jn, "set_style");
const Ks = /* @__PURE__ */ Symbol("is custom element"), Vs = /* @__PURE__ */ Symbol("is html");
function qe(e, t) {
  var n = fr(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
i(qe, "set_value");
function T(e, t, n, a) {
  var s = fr(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Mr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
i(T, "set_attribute");
function fr(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ks]: e.nodeName.includes("-"),
      [Vs]: e.namespaceURI === kr
    }
  );
}
i(fr, "get_attributes");
var fi = /* @__PURE__ */ new Map();
function Gs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = fi.get(t);
  if (n) return n;
  fi.set(t, n = []);
  for (var a, s = e, r = Element.prototype; r !== s; ) {
    a = Nr(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = mi(s);
  }
  return n;
}
i(Gs, "get_setters");
function dr(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Es(e, "input", async (s) => {
    C && e.type === "checkbox" && $a();
    var r = s ? e.defaultValue : e.value;
    if (r = _a(e) ? ha(r) : r, n(r), se !== null && a.add(se), await Ms(), r !== (r = t())) {
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
  lr(t) == null && e.value && (n(_a(e) ? ha(e.value) : e.value), se !== null && a.add(se)), Yi(() => {
    C && e.type === "checkbox" && $a();
    var s = t();
    if (e === document.activeElement) {
      var r = (
        /** @type {Batch} */
        ga ?? se
      );
      if (a.has(r))
        return;
    }
    _a(e) && s === ha(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
i(dr, "bind_value");
function _a(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
i(_a, "is_numberlike_input");
function ha(e) {
  return e === "" ? null : +e;
}
i(ha, "to_number");
const Xt = [];
function Ys(e, t) {
  return {
    subscribe: Js(e, t).subscribe
  };
}
i(Ys, "readable");
function Js(e, t = ca) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(u) {
    if (xi(e, u) && (e = u, n)) {
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
i(Js, "writable");
function Qs(e) {
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
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), i(r, "SvelteApplication"), Fe(r, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = r;
  return t;
}
i(Qs, "SvelteApplicationMixin");
const Xs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Xs);
function x(e) {
  return game.i18n?.localize(e) ?? e;
}
i(x, "localize");
function bn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
i(bn, "format");
var Zs = /* @__PURE__ */ H("<span> </span>"), $s = /* @__PURE__ */ H('<span style="color: var(--nos-text-secondary, #888)">—</span>'), eo = /* @__PURE__ */ H('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function to(e, t) {
  Se(t, !0);
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
  var r = eo(), o = h(r);
  o.__click = a;
  var u = h(o), l = m(o, 2), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: I }) => t.actor.update({ name: I.value });
  var _ = m(l, 2), y = h(_), w = h(y), A = m(y, 2), g = h(A);
  {
    var W = /* @__PURE__ */ i((I) => {
      var R = Zs(), G = h(R);
      K(() => D(G, t.metaData)), O(I, R);
    }, "consequent"), le = /* @__PURE__ */ i((I) => {
      var R = $s();
      O(I, R);
    }, "alternate");
    ee(g, (I) => {
      t.metaData ? I(W) : I(le, !1);
    });
  }
  var E = m(g, 2);
  E.__click = () => t.actor.editMetadata();
  var M = m(_, 2), P = h(M), N = h(P), p = m(P, 2), k = h(p);
  K(
    (I, R, G, j, L) => {
      T(u, "src", c(n)), T(u, "alt", t.actor.reactive.name), D(d, I), qe(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, D(w, R), T(E, "aria-label", G), T(E, "data-tooltip", j), E.disabled = !t.editingEnabled, D(N, L), D(k, c(s));
    },
    [
      () => x("NWS.CharacterName"),
      () => x("NWS.AncestryClassLevel"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.HitDie")
    ]
  ), O(e, r), ke();
}
i(to, "HeaderRow");
Ce(["click", "change"]);
function Ka(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
i(Ka, "formatModifier");
var no = /* @__PURE__ */ H('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function ao(e, t) {
  Se(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ F(() => x(n[t.abilityKey])), s = /* @__PURE__ */ F(() => bn("NWS.RollCheck", { name: c(a) })), r = /* @__PURE__ */ F(() => bn("NWS.RollSave", { name: c(a) }));
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
      }), T(u, "data-tooltip", c(r)), T(u, "aria-label", c(r)), T(f, "data-tooltip", c(s)), T(f, "aria-label", c(s)), D(v, w), D(y, c(a));
    },
    [() => Ka(t.ability.mod)]
  ), O(e, o), ke();
}
i(ao, "AbilityBox");
Ce(["click"]);
var io = /* @__PURE__ */ H('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), ro = /* @__PURE__ */ H('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  Se(t, !0);
  var n = ro(), a = h(n), s = h(a), r = m(a, 2);
  Je(r, 21, () => ({ length: t.wounds.max }), Ye, (o, u, l) => {
    var f = io();
    let d;
    f.__click = () => t.toggleWounds(l + 1), K(
      (v, _) => {
        d = tt(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), T(f, "data-tooltip", v), T(f, "aria-label", _);
      },
      [
        () => bn("NWS.ToggleWound", { n: l + 1 }),
        () => bn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), K((o) => D(s, o), [() => x("NWS.Wounds")]), O(e, n), ke();
}
i(so, "WoundTracker");
Ce(["click"]);
var oo = /* @__PURE__ */ H('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ H('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ H('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ H('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <input class="nos-combat__input" type="number"/></div></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function fo(e, t) {
  Se(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.hp), r = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.initiative), u = /* @__PURE__ */ F(() => t.actor.reactive.system.attributes.movement);
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
    var _ = /* @__PURE__ */ i((ue) => {
      var Re = oo(), wn = mt(Re);
      wn.__click = () => t.actor.configureSavingThrows();
      var Pn = m(wn, 2);
      Pn.__click = () => t.actor.configureAbilityScores(), K(
        (sa, oa) => {
          T(wn, "data-tooltip", sa), T(Pn, "data-tooltip", oa);
        },
        [
          () => x("NWS.ConfigureSavingThrows"),
          () => x("NWS.ConfigureAbilityScores")
        ]
      ), O(ue, Re);
    }, "consequent");
    ee(v, (ue) => {
      t.editingEnabled && ue(_);
    });
  }
  var y = m(f, 2), w = h(y), A = h(w), g = h(A), W = m(h(g), 2), le = h(W), E = m(W, 2), M = h(E), P = m(g, 2), N = m(h(P), 2), p = h(N), k = m(N, 2);
  k.__change = ({ target: ue }) => t.updateTempHP(Number(ue.value));
  var I = m(A, 2);
  let R;
  var G = h(I), j = h(G), L = h(j);
  {
    var V = /* @__PURE__ */ i((ue) => {
      var Re = lo();
      O(ue, Re);
    }, "consequent_1"), z = /* @__PURE__ */ i((ue) => {
      var Re = co();
      O(ue, Re);
    }, "alternate");
    ee(L, (ue) => {
      t.isBloodied ? ue(V) : ue(z, !1);
    });
  }
  var te = m(j, 2), X = h(te), oe = m(te, 2), Y = h(oe);
  Y.__change = ({ target: ue }) => t.updateCurrentHP(Number(ue.value));
  var Q = m(Y, 4);
  Q.__change = ({ target: ue }) => t.updateMaxHP(Number(ue.value));
  var re = m(oe, 2);
  re.__click = () => t.actor.configureHitPoints();
  var fe = m(G, 2), ne = h(fe), we = h(ne), ae = m(ne, 2), S = h(ae), U = m(ae, 2), J = h(U);
  J.__change = ({ target: ue }) => t.updateCurrentMana(Number(ue.value));
  var ce = m(J, 4);
  ce.__change = ({ target: ue }) => t.updateMaxMana(Number(ue.value));
  var Z = m(I, 2);
  Z.__click = () => t.rollHitDice();
  var _e = m(h(Z), 2), pn = h(_e), Mt = m(_e, 2), Yt = h(Mt), de = m(Mt, 2);
  de.__click = (ue) => {
    ue.stopPropagation(), t.actor.configureHitDice();
  };
  var xe = m(Z, 2), Me = h(xe);
  Me.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var De = m(h(Me), 2), Jt = h(De), gn = m(De, 2), yn = h(gn), ia = m(Me, 2), Hn = m(h(ia), 2), vr = h(Hn), Ya = m(Hn, 2), _r = h(Ya), ra = m(Ya, 2);
  ra.__click = () => t.actor.configureMovement();
  var hr = m(y, 2);
  so(hr, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), K(
    (ue, Re, wn, Pn, sa, oa, br, mr, pr, gr, yr, wr) => {
      D(le, ue), D(M, c(r).value), D(p, Re), qe(k, c(s).temp ?? 0), R = tt(I, 1, "nos-combat__pair", null, R, { "nos-hp--bloodied": t.isBloodied }), D(X, wn), qe(Y, c(s).value), qe(Q, c(s).max), Q.disabled = !t.editingEnabled, T(re, "data-tooltip", Pn), re.disabled = !t.editingEnabled, jn(we, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), jn(ae, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(S, sa), qe(J, t.mana?.current ?? 0), jn(J, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), qe(ce, t.mana?.max || t.mana?.baseMax || 0), ce.disabled = !t.editingEnabled, jn(ce, `color: ${t.mana?.color ?? "#6a5acd" ?? ""};`), D(pn, oa), D(Yt, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), T(de, "data-tooltip", br), de.disabled = !t.editingEnabled, T(Me, "data-tooltip", mr), D(Jt, pr), D(yn, gr), D(vr, yr), D(_r, c(u).walk), T(ra, "data-tooltip", wr), ra.disabled = !t.editingEnabled;
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
i(fo, "StatsRow");
Ce(["click", "change"]);
var vo = /* @__PURE__ */ H('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  Se(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let r = /* @__PURE__ */ F(() => n[t.skillKey]), o = /* @__PURE__ */ F(() => x(a[c(r)])), u = /* @__PURE__ */ F(() => x(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = m(f, 2), _ = h(v), y = m(v, 2), w = h(y);
  K(
    (A, g) => {
      T(l, "data-tooltip", A), D(d, c(o)), D(_, g), D(w, c(u));
    },
    [
      () => bn("NWS.RollSkill", { name: c(u) }),
      () => Ka(t.skill.mod)
    ]
  ), O(e, l), ke();
}
i(_o, "SkillCell");
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
  var r = m(s, 2);
  {
    var o = /* @__PURE__ */ i((u) => {
      var l = ho();
      l.__click = () => t.actor.configureSkills(), K((f) => T(l, "data-tooltip", f), [() => x("NWS.ConfigureSkills")]), O(u, l);
    }, "consequent");
    ee(r, (u) => {
      t.editingEnabled && u(o);
    });
  }
  O(e, a), ke();
}
i(mo, "SkillsRow");
Ce(["click"]);
var po = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), go = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ H('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ H('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Co = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Mo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Do = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ H("<!> <!> <!> <!> <!>", 1);
function di(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((p) => p.type === "feature")), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((p) => p.type === "boon")), s = /* @__PURE__ */ F(() => t.actor.reactive.items.find((p) => p.type === "ancestry") ?? null), r = /* @__PURE__ */ F(() => t.actor.reactive.items.find((p) => p.type === "background") ?? null), o = /* @__PURE__ */ F(() => t.actor.reactive.items.find((p) => p.type === "class") ?? null), u = /* @__PURE__ */ F(() => t.actor.reactive.items.find((p) => p.type === "subclass") ?? null);
  function l(p) {
    t.actor.activateItem(p);
  }
  i(l, "useItem");
  function f(p) {
    t.actor.items.get(p)?.sheet?.render(!0);
  }
  i(f, "configureItem");
  function d(p) {
    t.actor.deleteEmbeddedDocuments("Item", [p]);
  }
  i(d, "deleteItem");
  function v(p, k) {
    const I = { type: "Item", uuid: k.uuid };
    p.dataTransfer.setData("text/plain", JSON.stringify(I));
  }
  i(v, "onDragStart");
  var _ = Oo(), y = mt(_);
  {
    var w = /* @__PURE__ */ i((p) => {
      var k = Eo(), I = h(k);
      {
        var R = /* @__PURE__ */ i((L) => {
          var V = go(), z = h(V), te = h(z), X = m(z, 2), oe = h(X), Y = m(oe, 2);
          Y.__click = () => f(c(s).id);
          var Q = h(Y), re = m(Y, 2);
          {
            var fe = /* @__PURE__ */ i((ne) => {
              var we = po(), ae = h(we);
              ae.__click = () => f(c(s).id);
              var S = m(ae, 2);
              S.__click = () => d(c(s).id), O(ne, we);
            }, "consequent");
            ee(re, (ne) => {
              t.editingEnabled && ne(fe);
            });
          }
          K(
            (ne) => {
              D(te, ne), T(X, "data-tooltip", c(s).system?.description || ""), T(oe, "src", c(s).img), T(oe, "alt", c(s).name), D(Q, c(s).name);
            },
            [() => x("NWS.Ancestry")]
          ), vt("dragstart", X, (ne) => v(ne, c(s))), O(L, V);
        }, "consequent_1");
        ee(I, (L) => {
          c(s) && L(R);
        });
      }
      var G = m(I, 2);
      {
        var j = /* @__PURE__ */ i((L) => {
          var V = wo(), z = h(V), te = h(z), X = m(z, 2), oe = h(X), Y = m(oe, 2);
          Y.__click = () => f(c(r).id);
          var Q = h(Y), re = m(Y, 2);
          {
            var fe = /* @__PURE__ */ i((ne) => {
              var we = yo(), ae = h(we);
              ae.__click = () => f(c(r).id);
              var S = m(ae, 2);
              S.__click = () => d(c(r).id), O(ne, we);
            }, "consequent_2");
            ee(re, (ne) => {
              t.editingEnabled && ne(fe);
            });
          }
          K(
            (ne) => {
              D(te, ne), T(X, "data-tooltip", c(r).system?.description || ""), T(oe, "src", c(r).img), T(oe, "alt", c(r).name), D(Q, c(r).name);
            },
            [() => x("NWS.Background")]
          ), vt("dragstart", X, (ne) => v(ne, c(r))), O(L, V);
        }, "consequent_3");
        ee(G, (L) => {
          c(r) && L(j);
        });
      }
      O(p, k);
    }, "consequent_4");
    ee(y, (p) => {
      (c(s) || c(r)) && p(w);
    });
  }
  var A = m(y, 2);
  {
    var g = /* @__PURE__ */ i((p) => {
      var k = No(), I = h(k), R = h(I), G = m(I, 2), j = h(G), L = m(j, 2);
      L.__click = () => f(c(o).id);
      var V = h(L), z = m(L, 2);
      {
        var te = /* @__PURE__ */ i((Y) => {
          var Q = So(), re = h(Q);
          re.__click = () => f(c(o).id);
          var fe = m(re, 2);
          fe.__click = () => d(c(o).id), O(Y, Q);
        }, "consequent_5");
        ee(z, (Y) => {
          t.editingEnabled && Y(te);
        });
      }
      var X = m(G, 2);
      {
        var oe = /* @__PURE__ */ i((Y) => {
          var Q = xo(), re = h(Q), fe = m(re, 2);
          fe.__click = () => f(c(u).id);
          var ne = h(fe), we = m(fe, 2);
          {
            var ae = /* @__PURE__ */ i((S) => {
              var U = ko(), J = h(U);
              J.__click = () => f(c(u).id);
              var ce = m(J, 2);
              ce.__click = () => d(c(u).id), O(S, U);
            }, "consequent_6");
            ee(we, (S) => {
              t.editingEnabled && S(ae);
            });
          }
          K(() => {
            T(re, "src", c(u).img), T(re, "alt", c(u).name), D(ne, c(u).name);
          }), vt("dragstart", Q, (S) => v(S, c(u))), O(Y, Q);
        }, "consequent_7");
        ee(X, (Y) => {
          c(u) && Y(oe);
        });
      }
      K(
        (Y, Q) => {
          D(R, Y), T(j, "src", c(o).img), T(j, "alt", c(o).name), D(V, `${c(o).name ?? ""} (${Q ?? ""} ${c(o).system.classLevel ?? ""})`);
        },
        [() => x("NWS.Class"), () => x("NWS.Level")]
      ), vt("dragstart", G, (Y) => v(Y, c(o))), O(p, k);
    }, "consequent_8");
    ee(A, (p) => {
      c(o) && p(g);
    });
  }
  var W = m(A, 2);
  {
    var le = /* @__PURE__ */ i((p) => {
      var k = Ao(), I = h(k), R = h(I), G = m(I, 2);
      Je(G, 21, () => c(n), Ye, (j, L) => {
        var V = Io(), z = h(V), te = m(z, 2);
        te.__click = () => l(c(L).id);
        var X = h(te), oe = m(te, 2);
        {
          var Y = /* @__PURE__ */ i((Q) => {
            var re = To(), fe = h(re);
            fe.__click = () => f(c(L).id);
            var ne = m(fe, 2);
            ne.__click = () => d(c(L).id), O(Q, re);
          }, "consequent_9");
          ee(oe, (Q) => {
            t.editingEnabled && Q(Y);
          });
        }
        K(() => {
          T(V, "data-tooltip", c(L).system?.description || ""), T(z, "src", c(L).img), T(z, "alt", c(L).name), D(X, c(L).name);
        }), vt("dragstart", V, (Q) => v(Q, c(L))), O(j, V);
      }), K((j) => D(R, j), [() => x("NWS.Features")]), O(p, k);
    }, "consequent_10");
    ee(W, (p) => {
      c(n).length > 0 && p(le);
    });
  }
  var E = m(W, 2);
  {
    var M = /* @__PURE__ */ i((p) => {
      var k = Do(), I = h(k), R = h(I), G = m(I, 2);
      Je(G, 21, () => c(a), Ye, (j, L) => {
        var V = Mo(), z = h(V), te = m(z, 2);
        te.__click = () => l(c(L).id);
        var X = h(te), oe = m(te, 2);
        {
          var Y = /* @__PURE__ */ i((Q) => {
            var re = Co(), fe = h(re);
            fe.__click = () => f(c(L).id);
            var ne = m(fe, 2);
            ne.__click = () => d(c(L).id), O(Q, re);
          }, "consequent_11");
          ee(oe, (Q) => {
            t.editingEnabled && Q(Y);
          });
        }
        K(() => {
          T(V, "data-tooltip", c(L).system?.description || ""), T(z, "src", c(L).img), T(z, "alt", c(L).name), D(X, c(L).name);
        }), vt("dragstart", V, (Q) => v(Q, c(L))), O(j, V);
      }), K((j) => D(R, j), [() => x("NWS.Boons")]), O(p, k);
    }, "consequent_12");
    ee(E, (p) => {
      c(a).length > 0 && p(M);
    });
  }
  var P = m(E, 2);
  {
    var N = /* @__PURE__ */ i((p) => {
      var k = Wo(), I = h(k);
      K((R) => D(I, R), [() => x("NWS.DropFeaturesHere")]), O(p, k);
    }, "consequent_13");
    ee(P, (p) => {
      !c(s) && !c(r) && !c(o) && c(n).length === 0 && c(a).length === 0 && p(N);
    });
  }
  O(e, _), ke();
}
i(di, "FeaturesTab");
Ce(["click"]);
var Lo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ho = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Po = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ro = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ H('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ H('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ H('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function vi(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, M) => (E.sort ?? 0) - (M.sort ?? 0))), s = /* @__PURE__ */ F(() => c(n) ? c(a).filter((E) => E.name.toLowerCase().includes(c(n).toLowerCase())) : c(a)), r = /* @__PURE__ */ F(() => {
    const E = {};
    for (const M of c(s)) {
      const P = M.system?.tier ?? 0, N = M.system?.isUtility ?? !1, p = N ? "_utility" : `_tier_${P}`, k = N ? x("NWS.Utility") : bn("NWS.Tier", { n: P });
      E[p] ??= { label: k, spells: [] }, E[p].spells.push(M);
    }
    return Object.entries(E).sort(([M], [P]) => {
      if (M === "_utility") return 1;
      if (P === "_utility") return -1;
      const N = parseInt(M.replace("_tier_", "")), p = parseInt(P.replace("_tier_", ""));
      return N - p;
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
  var v = Uo(), _ = mt(v), y = m(h(_), 2), w = m(y, 2);
  {
    var A = /* @__PURE__ */ i((E) => {
      var M = Lo();
      M.__click = l;
      var P = m(h(M));
      K((N) => D(P, ` ${N ?? ""}`), [() => x("NWS.New")]), O(E, M);
    }, "consequent");
    ee(w, (E) => {
      t.editingEnabled && E(A);
    });
  }
  var g = m(_, 2);
  Je(g, 17, () => c(r), Ye, (E, M) => {
    var P = /* @__PURE__ */ F(() => gi(c(M), 2));
    let N = /* @__PURE__ */ i(() => c(P)[1], "tier");
    var p = jo(), k = h(p), I = h(k), R = m(k, 2);
    Je(R, 21, () => N().spells, Ye, (G, j) => {
      var L = Fo(), V = h(L), z = m(V, 2);
      z.__click = () => f(c(j).id);
      var te = h(z), X = m(te);
      {
        var oe = /* @__PURE__ */ i((ae) => {
          var S = Ho();
          K((U) => T(S, "data-tooltip", U), [() => x("NWS.Concentration")]), O(ae, S);
        }, "consequent_1");
        ee(X, (ae) => {
          c(j).system?.concentration && ae(oe);
        });
      }
      var Y = m(X, 2);
      {
        var Q = /* @__PURE__ */ i((ae) => {
          var S = Po();
          K((U) => T(S, "data-tooltip", U), [() => x("NWS.Utility")]), O(ae, S);
        }, "consequent_2");
        ee(Y, (ae) => {
          c(j).system?.isUtility && ae(Q);
        });
      }
      var re = m(z, 2), fe = h(re), ne = m(re, 2);
      {
        var we = /* @__PURE__ */ i((ae) => {
          var S = Ro(), U = h(S);
          U.__click = () => o(c(j).id);
          var J = m(U, 2);
          J.__click = () => u(c(j).id), O(ae, S);
        }, "consequent_3");
        ee(ne, (ae) => {
          t.editingEnabled && ae(we);
        });
      }
      K(() => {
        T(L, "data-tooltip", c(j).system?.description?.baseEffect || ""), T(V, "src", c(j).img), T(V, "alt", c(j).name), D(te, `${c(j).name ?? ""} `), D(fe, c(j).system?.activationCost ?? "");
      }), vt("dragstart", L, (ae) => d(ae, c(j))), O(G, L);
    }), K(() => D(I, N().label)), O(E, p);
  });
  var W = m(g, 2);
  {
    var le = /* @__PURE__ */ i((E) => {
      var M = zo(), P = h(M);
      K((N) => D(P, N), [() => x("NWS.DropSpellsHere")]), O(E, M);
    }, "consequent_4");
    ee(W, (E) => {
      c(a).length === 0 && E(le);
    });
  }
  K((E) => T(y, "placeholder", E), [() => x("NWS.SearchSpells")]), dr(y, () => c(n), (E) => He(n, E)), O(e, v), ke();
}
i(vi, "SpellsTab");
Ce(["click"]);
var Bo = /* @__PURE__ */ H('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), qo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ko = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vo = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Go = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Yo = /* @__PURE__ */ H('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function _i(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(""), a = /* @__PURE__ */ F(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ F(() => t.actor.reactive.items.filter((N) => N.type === "object").sort((N, p) => (N.sort ?? 0) - (p.sort ?? 0))), r = /* @__PURE__ */ F(() => c(n) ? c(s).filter((N) => N.name.toLowerCase().includes(c(n).toLowerCase())) : c(s));
  function o(N) {
    t.actor.items.get(N)?.sheet?.render(!0);
  }
  i(o, "configureItem");
  function u(N) {
    t.actor.deleteEmbeddedDocuments("Item", [N]);
  }
  i(u, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  i(l, "createObject");
  function f(N, p) {
    t.actor.update({
      [`system.currency.${N}.value`]: Math.max(0, Math.round(Number(p)))
    });
  }
  i(f, "updateCurrency");
  function d(N, p) {
    const k = c(a)[N]?.value ?? 0;
    t.actor.update({
      [`system.currency.${N}.value`]: Math.max(0, k + p)
    });
  }
  i(d, "adjustCurrency");
  function v(N, p) {
    t.actor.items.get(N)?.update({ "system.quantity": Number(p) });
  }
  i(v, "updateQuantity");
  function _(N, p) {
    const k = { type: "Item", uuid: p.uuid };
    N.dataTransfer.setData("text/plain", JSON.stringify(k));
  }
  i(_, "onDragStart");
  var y = Yo(), w = mt(y);
  Je(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Ye, (N, p) => {
    var k = /* @__PURE__ */ F(() => gi(p, 2));
    let I = /* @__PURE__ */ i(() => c(k)[0], "type"), R = /* @__PURE__ */ i(() => c(k)[1], "labelKey");
    var G = Bo(), j = h(G), L = h(j), V = m(j, 2);
    V.__click = () => d(I(), -1);
    var z = m(V, 2);
    z.__change = ({ target: X }) => f(I(), X.value);
    var te = m(z, 2);
    te.__click = () => d(I(), 1), K(
      (X, oe, Y) => {
        T(j, "for", `currency-${I() ?? ""}`), D(L, X), T(V, "aria-label", `-1 ${oe ?? ""}`), T(z, "id", `currency-${I() ?? ""}`), qe(z, c(a)[I()]?.value ?? 0), T(te, "aria-label", `+1 ${Y ?? ""}`);
      },
      [
        () => x(R()),
        () => x(R()),
        () => x(R())
      ]
    ), O(N, G);
  });
  var A = m(w, 2), g = m(h(A), 2), W = m(g, 2);
  {
    var le = /* @__PURE__ */ i((N) => {
      var p = qo();
      p.__click = l;
      var k = m(h(p));
      K((I) => D(k, ` ${I ?? ""}`), [() => x("NWS.New")]), O(N, p);
    }, "consequent");
    ee(W, (N) => {
      t.editingEnabled && N(le);
    });
  }
  var E = m(A, 2);
  Je(E, 21, () => c(r), Ye, (N, p) => {
    var k = Vo(), I = h(k), R = m(I, 2);
    R.__click = () => o(c(p).id);
    var G = h(R), j = m(R, 2);
    j.__change = ({ target: z }) => v(c(p).id, z.value);
    var L = m(j, 2);
    {
      var V = /* @__PURE__ */ i((z) => {
        var te = Ko(), X = h(te);
        X.__click = () => o(c(p).id);
        var oe = m(X, 2);
        oe.__click = () => u(c(p).id), O(z, te);
      }, "consequent_1");
      ee(L, (z) => {
        t.editingEnabled && z(V);
      });
    }
    K(() => {
      T(k, "data-tooltip", c(p).system?.description?.public || ""), T(I, "src", c(p).img), T(I, "alt", c(p).name), D(G, c(p).name), qe(j, c(p).system?.quantity ?? 1);
    }), vt("dragstart", k, (z) => _(z, c(p))), O(N, k);
  });
  var M = m(E, 2);
  {
    var P = /* @__PURE__ */ i((N) => {
      var p = Go(), k = h(p);
      K((I) => D(k, I), [() => x("NWS.DropInventoryHere")]), O(N, p);
    }, "consequent_2");
    ee(M, (N) => {
      c(s).length === 0 && N(P);
    });
  }
  K((N) => T(g, "placeholder", N), [() => x("NWS.SearchItems")]), dr(g, () => c(n), (N) => He(n, N)), O(e, y), ke();
}
i(_i, "InventoryTab");
Ce(["click", "change"]);
var Jo = /* @__PURE__ */ H(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function hi(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ F(() => t.actor.reactive.system.details), a = /* @__PURE__ */ F(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ F(() => [...c(a).languages ?? []].join(", ")), r = /* @__PURE__ */ F(() => [...c(a).armor ?? []].join(", ")), o = /* @__PURE__ */ F(() => (c(a).weapons ?? []).join(", "));
  var u = Jo(), l = h(u), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: _e }) => t.actor.update({ "system.details.age": _e.value });
  var _ = m(l, 2), y = h(_), w = h(y), A = m(y, 2);
  A.__change = ({ target: _e }) => t.actor.update({ "system.details.gender": _e.value });
  var g = m(_, 2), W = h(g), le = h(W), E = m(W, 2);
  E.__change = ({ target: _e }) => t.actor.update({ "system.details.height": _e.value });
  var M = m(g, 2), P = h(M), N = h(P), p = m(P, 2);
  p.__change = ({ target: _e }) => t.actor.update({ "system.details.weight": _e.value });
  var k = m(M, 2), I = h(k), R = h(I), G = m(I, 2), j = h(G), L = m(G, 2);
  L.__click = () => t.actor.configureLanguageProficiencies();
  var V = m(k, 2), z = h(V), te = h(z), X = m(z, 2), oe = h(X), Y = m(X, 2);
  Y.__click = () => t.actor.configureArmorProficiencies();
  var Q = m(V, 2), re = h(Q), fe = h(re), ne = m(re, 2), we = h(ne), ae = m(ne, 2);
  ae.__click = () => t.actor.configureWeaponProficiencies();
  var S = m(Q, 2), U = h(S), J = h(U), ce = m(U, 2), Z = h(ce);
  Us(Z, () => c(n).notes ?? ""), K(
    (_e, pn, Mt, Yt, de, xe, Me, De, Jt, gn, yn, ia, Hn) => {
      D(d, _e), qe(v, c(n).age ?? ""), v.disabled = !t.editingEnabled, D(w, pn), qe(A, c(n).gender ?? ""), A.disabled = !t.editingEnabled, D(le, Mt), qe(E, c(n).height ?? ""), T(E, "placeholder", Yt), E.disabled = !t.editingEnabled, D(N, de), qe(p, c(n).weight ?? ""), T(p, "placeholder", xe), p.disabled = !t.editingEnabled, D(R, Me), D(j, c(s) || "—"), T(L, "data-tooltip", De), L.disabled = !t.editingEnabled, D(te, Jt), D(oe, c(r) || "—"), T(Y, "data-tooltip", gn), Y.disabled = !t.editingEnabled, D(fe, yn), D(we, c(o) || "—"), T(ae, "data-tooltip", ia), ae.disabled = !t.editingEnabled, D(J, Hn), T(ce, "contenteditable", t.editingEnabled ? "true" : "false");
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
i(hi, "BioTab");
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
      T(d, "src", c(l).img), T(d, "alt", c(l).name), T(v, "data-tooltip", c(l).system?.description?.public || c(l).name), D(_, c(l).name);
    }), O(u, f);
  });
  var r = m(s, 2);
  {
    var o = /* @__PURE__ */ i((u) => {
      var l = Xo(), f = h(l);
      K((d) => D(f, d), [() => x("NWS.NoWeapons")]), O(u, l);
    }, "consequent");
    ee(r, (u) => {
      c(n).length === 0 && u(o);
    });
  }
  O(e, a), ke();
}
i($o, "InventorySlots");
Ce(["click"]);
var el = /* @__PURE__ */ H('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), tl = /* @__PURE__ */ H('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), nl = /* @__PURE__ */ H('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function al(e, t) {
  Se(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: di
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: vi
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: _i
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: hi
    }
  ];
  let a = /* @__PURE__ */ Le("features"), s = /* @__PURE__ */ F(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), r = /* @__PURE__ */ F(() => t.actor.reactive.system.inventory);
  var o = nl(), u = h(o);
  Je(u, 21, () => n, Ye, (E, M) => {
    var P = el();
    let N;
    P.__click = () => He(a, c(M).name, !0);
    var p = h(P), k = m(p);
    K(
      (I) => {
        N = tt(P, 1, "nos-tab-btn", null, N, { "nos-tab-btn--active": c(a) === c(M).name }), tt(p, 1, c(M).icon), D(k, ` ${I ?? ""}`);
      },
      [() => x(c(M).labelKey)]
    ), O(E, P);
  });
  var l = m(u, 2), f = h(l);
  {
    var d = /* @__PURE__ */ i((E) => {
      di(E, {
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
        var N = /* @__PURE__ */ i((k) => {
          vi(k, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), p = /* @__PURE__ */ i((k) => {
          var I = va(), R = mt(I);
          {
            var G = /* @__PURE__ */ i((L) => {
              _i(L, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), j = /* @__PURE__ */ i((L) => {
              var V = va(), z = mt(V);
              {
                var te = /* @__PURE__ */ i((X) => {
                  hi(X, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                ee(
                  z,
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
            c(a) === "spells" ? k(N) : k(p, !1);
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
  var _ = m(l, 2), y = h(_), w = h(y), A = m(_, 2), g = h(A);
  $o(g, {
    get actor() {
      return t.actor;
    }
  });
  var W = m(g, 2);
  {
    var le = /* @__PURE__ */ i((E) => {
      var M = tl(), P = h(M);
      K(() => D(P, `${c(r).usedSlots ?? 0 ?? ""} / ${c(r).totalSlots ?? 0 ?? ""}`)), O(E, M);
    }, "consequent_4");
    ee(W, (E) => {
      c(s) && E(le);
    });
  }
  K((E) => D(w, E), [() => x("NWS.Weapons")]), O(e, o), ke();
}
i(al, "ContentArea");
Ce(["click"]);
var il = /* @__PURE__ */ H('<button type="button" role="menuitem"><i></i> <span> </span></button>'), rl = /* @__PURE__ */ H('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"></div>', 1);
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
  i(a, "select");
  function s(l) {
    l.key === "Escape" && t.onclose();
  }
  i(s, "handleKeydown");
  var r = rl(), o = mt(r);
  o.__click = function(...l) {
    t.onclose?.apply(this, l);
  }, o.__keydown = s;
  var u = m(o, 2);
  Je(u, 21, () => n, Ye, (l, f) => {
    var d = il();
    let v;
    d.__click = () => a(c(f).value);
    var _ = h(d), y = m(_, 2), w = h(y);
    K(
      (A) => {
        v = tt(d, 1, "nos-color-scheme-menu__option", null, v, {
          "nos-color-scheme-menu__option--active": t.colorScheme === c(f).value
        }), tt(_, 1, `fa-solid ${c(f).icon ?? ""}`), D(w, A);
      },
      [() => x(c(f).label)]
    ), O(l, d);
  }), O(e, r), ke();
}
i(sl, "ColorSchemeMenu");
Ce(["click", "keydown"]);
var ol = /* @__PURE__ */ H('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function ll(e, t) {
  Se(t, !0);
  let n = /* @__PURE__ */ Le(!1);
  var a = ol(), s = h(a);
  let r;
  s.__click = function(...g) {
    t.toggleEditingEnabled?.apply(this, g);
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
    var y = /* @__PURE__ */ i((g) => {
      sl(g, {
        get colorScheme() {
          return t.colorScheme;
        },
        get setColorScheme() {
          return t.setColorScheme;
        },
        onclose: /* @__PURE__ */ i(() => He(n, !1), "onclose")
      });
    }, "consequent");
    ee(_, (g) => {
      c(n) && g(y);
    });
  }
  var w = m(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var A = m(w, 2);
  A.__click = () => t.actor.triggerRest({ restType: "safe" }), K(
    (g, W, le, E, M, P, N, p, k, I, R, G) => {
      r = tt(s, 1, "nos-sidebar-btn", null, r, { "nos-sidebar-btn--active": t.editingEnabled }), T(s, "aria-pressed", t.editingEnabled), T(s, "aria-label", g), T(s, "data-tooltip", W), tt(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), T(u, "aria-label", le), T(u, "data-tooltip", E), u.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, T(l, "aria-label", M), T(l, "data-tooltip", P), l.disabled = t.actor.reactive.system.levelUpHistory.length === 0, v = tt(d, 1, "nos-sidebar-btn", null, v, { "nos-sidebar-btn--active": t.darkMode }), T(d, "aria-pressed", t.darkMode), T(d, "aria-label", N), T(d, "data-tooltip", p), T(d, "aria-expanded", c(n)), T(w, "aria-label", k), T(w, "data-tooltip", I), T(A, "aria-label", R), T(A, "data-tooltip", G);
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
i(ll, "SidebarControls");
Ce(["click"]);
var cl = /* @__PURE__ */ H('<div style="position: relative;"><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ul(e, t) {
  Se(t, !0);
  const n = Fi((S) => {
    const U = {
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
      Hooks.off("updateActor", U.updateActor), Hooks.off("createItem", U.createItem), Hooks.off("deleteItem", U.deleteItem), Hooks.off("updateItem", U.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(S, U) {
      if (U === "reactive")
        return n(), S;
      const J = S[U];
      return typeof J == "function" ? J.bind(S) : J;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: r,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function u(S, U) {
    return Math.clamp(0, Math.round(S / U * 100), 100);
  }
  i(u, "getHitPointPercentage");
  function l(S, U, J, ce) {
    const Z = [];
    return J && Z.push(`${J.name} (${s[ce] ?? ce})`), S && (U ? Z.push(`${S.name} (${U.name}, ${S.system.classLevel})`) : Z.push(`${S.name} (${S.system.classLevel})`)), Z.filter(Boolean).join(" ⟡ ");
  }
  i(l, "prepareCharacterMetadata");
  function f(S, U) {
    if (!U) return S;
    const J = [4, 6, 8, 10, 12, 20], ce = J.indexOf(S);
    return ce === -1 ? S : J[Math.min(ce + U, J.length - 1)];
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
  function g(S) {
    a.update({ "system.resources.mana.current": S });
  }
  i(g, "updateCurrentMana");
  function W(S) {
    const U = a.reactive.system.resources.mana, J = U.baseMax ?? 0, Z = (U.max || J) - J, _e = Math.max(0, S - Z);
    a.update({ "system.resources.mana.baseMax": _e });
  }
  i(W, "updateMaxMana");
  let le = /* @__PURE__ */ F(() => {
    const S = a.reactive.system.attributes.hitDice, U = a.reactive.system.attributes.bonusHitDice ?? [], J = a.reactive.items.filter((de) => de.type === "class"), ce = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, Z = {};
    for (const de of J) {
      const xe = de.system.hitDieSize, Me = f(xe, ce), De = de.system.classLevel;
      Z[Me] ??= { current: 0, total: 0 }, Z[Me].total += De, Z[Me].current = S[Me]?.current ?? 0;
    }
    const _e = J.map((de) => f(de.system.hitDieSize, ce));
    for (const de of U) {
      const xe = f(de.size, ce);
      Z[xe] ??= { current: S[xe]?.current ?? 0, total: 0 }, Z[xe].total += de.value, _e.includes(xe) || (Z[xe].current = S[xe]?.current ?? 0);
    }
    const pn = U.map((de) => f(de.size, ce));
    for (const [de, xe] of Object.entries(S ?? {})) {
      const Me = Number(de), De = f(Me, ce), Jt = xe?.bonus ?? 0;
      if (Jt > 0) {
        Z[De] ??= { current: 0, total: 0 }, Z[De].total += Jt;
        const gn = _e.includes(De), yn = pn.includes(De);
        !gn && !yn && (Z[De].current = S[De]?.current ?? 0);
      }
    }
    let Mt = 0, Yt = 0;
    for (const de of Object.values(Z))
      Mt += de.current, Yt += de.total;
    return { bySize: Z, value: Mt, max: Yt };
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
  let N = /* @__PURE__ */ F(() => a.reactive.items.find((S) => S.type === "class") ?? null), p = /* @__PURE__ */ F(() => {
    const S = a.reactive.items.find((Z) => Z.type === "class") ?? null, U = a.reactive.items.find((Z) => Z.type === "subclass") ?? null, J = a.reactive.items.find((Z) => Z.type === "ancestry") ?? null, ce = a.reactive.system.attributes.sizeCategory;
    return l(S, U, J, ce);
  }), k = /* @__PURE__ */ F(() => a.reactive.system.attributes.wounds);
  function I(S) {
    let U = S;
    S <= c(k).value && (U = S - 1), a.update({ "system.attributes.wounds.value": U });
  }
  i(I, "toggleWounds");
  let R = /* @__PURE__ */ F(() => a.reactive.flags.nimble), G = /* @__PURE__ */ F(() => c(R)?.editingEnabled ?? !0);
  const j = Ys(!1, (S) => (xs(() => S(c(G))), () => {
  }));
  async function L() {
    await a.setFlag("nimble", "editingEnabled", !c(G));
  }
  i(L, "toggleEditingEnabled");
  let V = /* @__PURE__ */ F(() => {
    const S = c(R)?.colorScheme;
    return S || (c(R)?.darkMode === !0 ? "dark" : "white");
  });
  async function z(S) {
    await a.setFlag("nimble", "colorScheme", S);
  }
  i(z, "setColorScheme");
  let te = /* @__PURE__ */ F(() => c(V) === "dark"), X = /* @__PURE__ */ F(() => c(V) === "nimble");
  Rn("actor", a), Rn("document", a), Rn("application", t.sheet), Rn("editingEnabled", j);
  var oe = cl();
  let Y;
  var Q = h(oe), re = h(Q);
  to(re, {
    get actor() {
      return a;
    },
    get metaData() {
      return c(p);
    },
    get editingEnabled() {
      return c(G);
    },
    get hitDiceData() {
      return c(le);
    }
  });
  var fe = m(re, 2);
  fo(fe, {
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
    updateCurrentMana: g,
    updateMaxMana: W,
    updateCurrentHitDice: E,
    rollHitDice: M,
    editCurrentHitDice: P
  });
  var ne = m(fe, 2);
  mo(ne, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(G);
    }
  });
  var we = m(Q, 2);
  al(we, {
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
    updateCurrentMana: g,
    updateMaxMana: W
  });
  var ae = m(we, 2);
  ll(ae, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return c(G);
    },
    toggleEditingEnabled: L,
    get classItem() {
      return c(N);
    },
    get darkMode() {
      return c(te);
    },
    get colorScheme() {
      return c(V);
    },
    setColorScheme: z
  }), K(() => Y = tt(oe, 1, "nos-sheet", null, Y, {
    "nos-sheet--dark": c(te),
    "nos-sheet--nimble": c(X)
  })), O(e, oe), ke();
}
i(ul, "WhiteSheet");
const rt = class rt extends Qs(foundry.applications.sheets.ActorSheetV2) {
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
i(rt, "WhiteCharacterSheet"), Fe(rt, "MIN_WIDTH", 670), Fe(rt, "MIN_HEIGHT", 400), Fe(rt, "DEFAULT_OPTIONS", {
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
