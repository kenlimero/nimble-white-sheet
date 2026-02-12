var Ga = Object.defineProperty;
var Ya = (e) => {
  throw TypeError(e);
};
var pi = (e, t, n) => t in e ? Ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Ga(e, "name", { value: t, configurable: !0 });
var Xe = (e, t, n) => pi(e, typeof t != "symbol" ? t + "" : t, n), oa = (e, t, n) => t.has(e) || Ya("Cannot " + n);
var b = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), V = (e, t, n) => t.has(e) ? Ya("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), G = (e, t, n, a) => (oa(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), pe = (e, t, n) => (oa(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), yi = /* @__PURE__ */ Symbol("filename"), wi = "http://www.w3.org/1999/xhtml", Ja = globalThis.process?.env?.NODE_ENV, A = Ja && !Ja.toLowerCase().startsWith("prod");
var vr = Array.isArray, Ei = Array.prototype.indexOf, Ht = Array.prototype.includes, Kn = Array.from, Ft = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, Si = Object.getOwnPropertyDescriptors, xi = Object.prototype, ki = Array.prototype, _r = Object.getPrototypeOf, Qa = Object.isExtensible;
const la = /* @__PURE__ */ r(() => {
}, "noop");
function Ni(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(Ni, "run_all");
function hr() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(hr, "deferred");
function Ti(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(Ti, "to_array");
const me = 2, ha = 4, Vn = 8, br = 1 << 24, dt = 16, Qe = 32, Bt = 64, Oa = 128, je = 512, ve = 1024, ge = 2048, Je = 4096, We = 8192, gt = 16384, La = 32768, on = 65536, Rn = 1 << 17, mr = 1 << 18, vn = 1 << 19, Ai = 1 << 20, ft = 1 << 25, kt = 32768, ba = 1 << 21, Gn = 1 << 22, pt = 1 << 23, Xt = /* @__PURE__ */ Symbol("$state"), Ci = /* @__PURE__ */ Symbol(""), gr = /* @__PURE__ */ Symbol("proxy path");
var Zt;
const Yt = new (Zt = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r(Zt, "StaleReactionError"), Zt)();
function Ii(e) {
  if (A) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
r(Ii, "lifecycle_outside_component");
function Di() {
  if (A) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Di, "async_derived_orphan");
function Xa() {
  if (A) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(Xa, "bind_invalid_checkbox_value");
function Mi() {
  if (A) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Mi, "derived_references_self");
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
function Wi(e) {
  if (A) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Wi, "effect_in_teardown");
function Oi() {
  if (A) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Oi, "effect_in_unowned_derived");
function Li(e) {
  if (A) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Li, "effect_orphan");
function Pi() {
  if (A) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Pi, "effect_update_depth_exceeded");
function Ri(e) {
  if (A) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Ri, "rune_outside_svelte");
function Hi() {
  if (A) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(Hi, "state_descriptors_fixed");
function Fi() {
  if (A) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(Fi, "state_prototype_fixed");
function ji() {
  if (A) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(ji, "state_unsafe_mutation");
function zi() {
  if (A) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(zi, "svelte_boundary_reset_onerror");
var Yn = "font-weight: bold", Jn = "font-weight: normal";
function Ui() {
  A ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Yn, Jn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(Ui, "lifecycle_double_unmount");
function ca(e) {
  A ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Yn, Jn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(ca, "state_proxy_equality_mismatch");
function Bi() {
  A ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Yn, Jn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Bi, "state_proxy_unmount");
function qi() {
  A ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Yn, Jn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(qi, "svelte_boundary_reset_noop");
function yr(e) {
  return e === this.v;
}
r(yr, "equals");
function wr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(wr, "safe_not_equal");
function Er(e) {
  return !wr(e, this.v);
}
r(Er, "safe_equals");
let Ki = !1;
function Ze(e, t) {
  return e.label = t, Sr(e.v, t), e;
}
r(Ze, "tag");
function Sr(e, t) {
  return e?.[gr]?.(t), e;
}
r(Sr, "tag_proxy");
function Vi(e) {
  const t = new Error(), n = Gi();
  return n.length === 0 ? null : (n.unshift(`
`), Ft(t, "stack", {
    value: n.join(`
`)
  }), Ft(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
r(Vi, "get_error");
function Gi() {
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
r(Gi, "get_stack");
let be = null;
function ln(e) {
  be = e;
}
r(ln, "set_component_context");
let yn = null;
function Hn(e) {
  yn = e;
}
r(Hn, "set_dev_stack");
let Nn = null;
function Za(e) {
  Nn = e;
}
r(Za, "set_dev_current_component_function");
function Mn(e, t) {
  return Yi("setContext").set(e, t), t;
}
r(Mn, "setContext");
function ye(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, A && (be.function = n, Nn = n);
}
r(ye, "push");
function we(e) {
  var t = (
    /** @type {ComponentContext} */
    be
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      Br(a);
  }
  return t.i = !0, be = t.p, A && (Nn = be?.function ?? null), /** @type {T} */
  {};
}
r(we, "pop");
function xr() {
  return !0;
}
r(xr, "is_runes");
function Yi(e) {
  return be === null && Ii(e), be.c ??= new Map(Ji(be) || void 0);
}
r(Yi, "get_or_init_context_map");
function Ji(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
r(Ji, "get_parent_context");
let At = [];
function kr() {
  var e = At;
  At = [], Ni(e);
}
r(kr, "run_micro_tasks");
function yt(e) {
  if (At.length === 0 && !gn) {
    var t = At;
    queueMicrotask(() => {
      t === At && kr();
    });
  }
  At.push(e);
}
r(yt, "queue_micro_task");
function Qi() {
  for (; At.length > 0; )
    kr();
}
r(Qi, "flush_tasks");
const ma = /* @__PURE__ */ new WeakMap();
function Nr(e) {
  var t = ne;
  if (t === null)
    return $.f |= pt, e;
  if (A && e instanceof Error && !ma.has(e) && ma.set(e, Xi(e, t)), (t.f & La) === 0) {
    if ((t.f & Oa) === 0)
      throw A && !t.parent && e instanceof Error && Tr(e), e;
    t.b.error(e);
  } else
    cn(e, t);
}
r(Nr, "handle_error");
function cn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Oa) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw A && e instanceof Error && Tr(e), e;
}
r(cn, "invoke_error_boundary");
function Xi(e, t) {
  const n = Qt(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = ja ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[yi].split("/").pop()}`, i = i.p;
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
r(Xi, "get_adjustments");
function Tr(e) {
  const t = ma.get(e);
  t && (Ft(e, "message", {
    value: t.message
  }), Ft(e, "stack", {
    value: t.stack
  }));
}
r(Tr, "apply_adjustments");
const Zi = -7169;
function fe(e, t) {
  e.f = e.f & Zi | t;
}
r(fe, "set_signal_status");
function Pa(e) {
  (e.f & je) !== 0 || e.deps === null ? fe(e, ve) : fe(e, Je);
}
r(Pa, "update_derived_status");
function Ar(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & kt) === 0 || (t.f ^= kt, Ar(
        /** @type {Derived} */
        t.deps
      ));
}
r(Ar, "clear_marked");
function Cr(e, t, n) {
  (e.f & ge) !== 0 ? t.add(e) : (e.f & Je) !== 0 && n.add(e), Ar(e.deps), fe(e, ve);
}
r(Cr, "defer_effect");
const Wn = /* @__PURE__ */ new Set();
let ie = null, ga = null, Ke = null, Ne = [], Qn = null, pa = !1, gn = !1;
var $t, en, It, tn, En, Sn, Dt, ct, nn, st, ya, wa, Ir;
const zn = class zn {
  constructor() {
    V(this, st);
    Xe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Xe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Xe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    V(this, $t, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    V(this, en, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    V(this, It, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    V(this, tn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    V(this, En, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    V(this, Sn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    V(this, Dt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    V(this, ct, /* @__PURE__ */ new Map());
    Xe(this, "is_fork", !1);
    V(this, nn, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, tn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, ct).has(t) || b(this, ct).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, ct).get(t);
    if (n) {
      b(this, ct).delete(t);
      for (var a of n.d)
        fe(a, ge), Ve(a);
      for (a of n.m)
        fe(a, Je), Ve(a);
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
      pe(this, st, ya).call(this, s, n, a);
    if (this.is_deferred()) {
      pe(this, st, wa).call(this, a), pe(this, st, wa).call(this, n);
      for (const [s, i] of b(this, ct))
        Or(s, i);
    } else {
      for (const s of b(this, $t)) s();
      b(this, $t).clear(), b(this, It) === 0 && pe(this, st, Ir).call(this), ga = this, ie = null, $a(a), $a(n), ga = null, b(this, En)?.resolve();
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
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & pt) === 0 && (this.current.set(t, t.v), Ke?.set(t, t.v));
  }
  activate() {
    ie = this, this.apply();
  }
  deactivate() {
    ie === this && (ie = null, Ke = null);
  }
  flush() {
    if (this.activate(), Ne.length > 0) {
      if (Dr(), ie !== null && ie !== this)
        return;
    } else b(this, It) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, en)) t(this);
    b(this, en).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    G(this, It, b(this, It) + 1), t && G(this, tn, b(this, tn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    G(this, It, b(this, It) - 1), t && G(this, tn, b(this, tn) - 1), !b(this, nn) && (G(this, nn, !0), yt(() => {
      G(this, nn, !1), this.is_deferred() ? Ne.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, Sn))
      b(this, Dt).delete(t), fe(t, ge), Ve(t);
    for (const t of b(this, Dt))
      fe(t, Je), Ve(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, $t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, en).add(t);
  }
  settled() {
    return (b(this, En) ?? G(this, En, hr())).promise;
  }
  static ensure() {
    if (ie === null) {
      const t = ie = new zn();
      Wn.add(ie), gn || yt(() => {
        ie === t && t.flush();
      });
    }
    return ie;
  }
  apply() {
  }
};
$t = new WeakMap(), en = new WeakMap(), It = new WeakMap(), tn = new WeakMap(), En = new WeakMap(), Sn = new WeakMap(), Dt = new WeakMap(), ct = new WeakMap(), nn = new WeakMap(), st = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ya = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= ve;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & (Qe | Bt)) !== 0, l = c && (o & ve) !== 0, f = l || (o & We) !== 0 || b(this, ct).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= ve : i !== null && (o & (ha | Vn | br)) !== 0 ? i.b.defer_effect(s) : (o & ha) !== 0 ? n.push(s) : An(s) && ((o & dt) !== 0 && b(this, Dt).add(s), wn(s));
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
wa = /* @__PURE__ */ r(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Cr(t[n], b(this, Sn), b(this, Dt));
}, "#defer_effects"), Ir = /* @__PURE__ */ r(function() {
  var s;
  if (Wn.size > 1) {
    this.previous.clear();
    var t = Ke, n = !0;
    for (const i of Wn) {
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
        var a = Ne;
        Ne = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Mr(d, c, l, f);
        if (Ne.length > 0) {
          ie = i, i.apply();
          for (const d of Ne)
            pe(s = i, st, ya).call(s, d, [], []);
          i.deactivate();
        }
        Ne = a;
      }
    }
    ie = null, Ke = t;
  }
  this.committed = !0, Wn.delete(this);
}, "#commit"), r(zn, "Batch");
let wt = zn;
function $i(e) {
  var t = gn;
  gn = !0;
  try {
    for (var n; ; ) {
      if (Qi(), Ne.length === 0 && (ie?.flush(), Ne.length === 0))
        return Qn = null, /** @type {T} */
        n;
      Dr();
    }
  } finally {
    gn = t;
  }
}
r($i, "flushSync");
function Dr() {
  pa = !0;
  var e = A ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; Ne.length > 0; ) {
      var n = wt.ensure();
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
        es();
      }
      if (n.process(Ne), Et.clear(), A)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (Ne = [], pa = !1, Qn = null, A)
      for (
        const i of
        /** @type {Set<Source>} */
        e
      )
        i.updated = null;
  }
}
r(Dr, "flush_effects");
function es() {
  try {
    Pi();
  } catch (e) {
    A && Ft(e, "stack", { value: "" }), cn(e, Qn);
  }
}
r(es, "infinite_loop_guard");
let ot = null;
function $a(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (gt | We)) === 0 && An(a) && (ot = /* @__PURE__ */ new Set(), wn(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Yr(a) : a.fn = null), ot?.size > 0)) {
        Et.clear();
        for (const s of ot) {
          if ((s.f & (gt | We)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            ot.has(o) && (ot.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (gt | We)) === 0 && wn(l);
          }
        }
        ot.clear();
      }
    }
    ot = null;
  }
}
r($a, "flush_queued_effects");
function Mr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & me) !== 0 ? Mr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (Gn | dt)) !== 0 && (i & ge) === 0 && Wr(s, t, a) && (fe(s, ge), Ve(
        /** @type {Effect} */
        s
      ));
    }
}
r(Mr, "mark_effects");
function Wr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ht.call(t, s))
        return !0;
      if ((s.f & me) !== 0 && Wr(
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
r(Wr, "depends_on");
function Ve(e) {
  for (var t = Qn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (pa && t === ne && (n & dt) !== 0 && (n & mr) === 0)
      return;
    if ((n & (Bt | Qe)) !== 0) {
      if ((n & ve) === 0) return;
      t.f ^= ve;
    }
  }
  Ne.push(t);
}
r(Ve, "schedule_effect");
function Or(e, t) {
  if (!((e.f & Qe) !== 0 && (e.f & ve) !== 0)) {
    (e.f & ge) !== 0 ? t.d.push(e) : (e.f & Je) !== 0 && t.m.push(e), fe(e, ve);
    for (var n = e.first; n !== null; )
      Or(n, t), n = n.next;
  }
}
r(Or, "reset_branch");
function Lr(e) {
  let t = 0, n = jt(0), a;
  return A && Ze(n, "createSubscriber version"), () => {
    za() && (u(n), qr(() => (t === 0 && (a = ri(() => e(() => pn(n)))), t += 1, () => {
      yt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, pn(n));
      });
    })));
  };
}
r(Lr, "createSubscriber");
var ts = on | vn | Oa;
function ns(e, t, n) {
  new Ea(e, t, n);
}
r(ns, "boundary");
var Pe, Wa, $e, Mt, et, Re, ke, tt, ut, ht, Wt, bt, an, Ot, rn, sn, nt, Un, _e, as, rs, Sa, On, Ln, xa;
const Ka = class Ka {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    V(this, _e);
    /** @type {Boundary | null} */
    Xe(this, "parent");
    Xe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, Pe);
    /** @type {TemplateNode | null} */
    V(this, Wa, null);
    /** @type {BoundaryProps} */
    V(this, $e);
    /** @type {((anchor: Node) => void)} */
    V(this, Mt);
    /** @type {Effect} */
    V(this, et);
    /** @type {Effect | null} */
    V(this, Re, null);
    /** @type {Effect | null} */
    V(this, ke, null);
    /** @type {Effect | null} */
    V(this, tt, null);
    /** @type {DocumentFragment | null} */
    V(this, ut, null);
    /** @type {TemplateNode | null} */
    V(this, ht, null);
    V(this, Wt, 0);
    V(this, bt, 0);
    V(this, an, !1);
    V(this, Ot, !1);
    /** @type {Set<Effect>} */
    V(this, rn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    V(this, sn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    V(this, nt, null);
    V(this, Un, Lr(() => (G(this, nt, jt(b(this, Wt))), A && Ze(b(this, nt), "$effect.pending()"), () => {
      G(this, nt, null);
    })));
    G(this, Pe, t), G(this, $e, n), G(this, Mt, a), this.parent = /** @type {Effect} */
    ne.b, this.is_pending = !!b(this, $e).pending, G(this, et, Ua(() => {
      ne.b = this;
      {
        var s = pe(this, _e, Sa).call(this);
        try {
          G(this, Re, Fe(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, bt) > 0 ? pe(this, _e, Ln).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, ht)?.remove();
      };
    }, ts));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Cr(t, b(this, rn), b(this, sn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, $e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    pe(this, _e, xa).call(this, t), G(this, Wt, b(this, Wt) + t), !(!b(this, nt) || b(this, an)) && (G(this, an, !0), yt(() => {
      G(this, an, !1), b(this, nt) && fn(b(this, nt), b(this, Wt));
    }));
  }
  get_effect_pending() {
    return b(this, Un).call(this), u(
      /** @type {Source<number>} */
      b(this, nt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, $e).onerror;
    let a = b(this, $e).failed;
    if (b(this, Ot) || !n && !a)
      throw t;
    b(this, Re) && (Ce(b(this, Re)), G(this, Re, null)), b(this, ke) && (Ce(b(this, ke)), G(this, ke, null)), b(this, tt) && (Ce(b(this, tt)), G(this, tt, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        qi();
        return;
      }
      s = !0, i && zi(), wt.ensure(), G(this, Wt, 0), b(this, tt) !== null && Pt(b(this, tt), () => {
        G(this, tt, null);
      }), this.is_pending = this.has_pending_snippet(), G(this, Re, pe(this, _e, On).call(this, () => (G(this, Ot, !1), Fe(() => b(this, Mt).call(this, b(this, Pe)))))), b(this, bt) > 0 ? pe(this, _e, Ln).call(this) : this.is_pending = !1;
    }, "reset");
    yt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        cn(c, b(this, et) && b(this, et).parent);
      }
      a && G(this, tt, pe(this, _e, On).call(this, () => {
        wt.ensure(), G(this, Ot, !0);
        try {
          return Fe(() => {
            a(
              b(this, Pe),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return cn(
            c,
            /** @type {Effect} */
            b(this, et).parent
          ), null;
        } finally {
          G(this, Ot, !1);
        }
      }));
    });
  }
};
Pe = new WeakMap(), Wa = new WeakMap(), $e = new WeakMap(), Mt = new WeakMap(), et = new WeakMap(), Re = new WeakMap(), ke = new WeakMap(), tt = new WeakMap(), ut = new WeakMap(), ht = new WeakMap(), Wt = new WeakMap(), bt = new WeakMap(), an = new WeakMap(), Ot = new WeakMap(), rn = new WeakMap(), sn = new WeakMap(), nt = new WeakMap(), Un = new WeakMap(), _e = new WeakSet(), as = /* @__PURE__ */ r(function() {
  try {
    G(this, Re, Fe(() => b(this, Mt).call(this, b(this, Pe))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), rs = /* @__PURE__ */ r(function() {
  const t = b(this, $e).pending;
  t && (G(this, ke, Fe(() => t(b(this, Pe)))), yt(() => {
    var n = pe(this, _e, Sa).call(this);
    G(this, Re, pe(this, _e, On).call(this, () => (wt.ensure(), Fe(() => b(this, Mt).call(this, n))))), b(this, bt) > 0 ? pe(this, _e, Ln).call(this) : (Pt(
      /** @type {Effect} */
      b(this, ke),
      () => {
        G(this, ke, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Sa = /* @__PURE__ */ r(function() {
  var t = b(this, Pe);
  return this.is_pending && (G(this, ht, St()), b(this, Pe).before(b(this, ht)), t = b(this, ht)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
On = /* @__PURE__ */ r(function(t) {
  var n = ne, a = $, s = be;
  Ye(b(this, et)), Ue(b(this, et)), ln(b(this, et).ctx);
  try {
    return t();
  } catch (i) {
    return Nr(i), null;
  } finally {
    Ye(n), Ue(a), ln(s);
  }
}, "#run"), Ln = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, $e).pending
  );
  b(this, Re) !== null && (G(this, ut, document.createDocumentFragment()), b(this, ut).append(
    /** @type {TemplateNode} */
    b(this, ht)
  ), Xr(b(this, Re), b(this, ut))), b(this, ke) === null && G(this, ke, Fe(() => t(b(this, Pe))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xa = /* @__PURE__ */ r(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && pe(n = this.parent, _e, xa).call(n, t);
    return;
  }
  if (G(this, bt, b(this, bt) + t), b(this, bt) === 0) {
    this.is_pending = !1;
    for (const a of b(this, rn))
      fe(a, ge), Ve(a);
    for (const a of b(this, sn))
      fe(a, Je), Ve(a);
    b(this, rn).clear(), b(this, sn).clear(), b(this, ke) && Pt(b(this, ke), () => {
      G(this, ke, null);
    }), b(this, ut) && (b(this, Pe).before(b(this, ut)), G(this, ut, null));
  }
}, "#update_pending_count"), r(Ka, "Boundary");
let Ea = Ka;
function is(e, t, n, a) {
  const s = Ra;
  var i = e.filter((_) => !_.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = ie, c = (
    /** @type {Effect} */
    ne
  ), l = ss(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (g) {
      (c.f & gt) === 0 && cn(g, c);
    }
    o?.deactivate(), ka();
  }
  if (r(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function v() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ ls(_))).then((_) => d([...t.map(s), ..._])).catch((_) => cn(_, c));
  }
  r(v, "run"), f ? f.then(v) : v();
}
r(is, "flatten");
function ss() {
  var e = ne, t = $, n = be, a = ie;
  if (A)
    var s = yn;
  return /* @__PURE__ */ r(function(o = !0) {
    Ye(e), Ue(t), ln(n), o && a?.activate(), A && Hn(s);
  }, "restore");
}
r(ss, "capture");
function ka() {
  Ye(null), Ue(null), ln(null), A && Hn(null);
}
r(ka, "unset_context");
const os = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  var t = me | ge, n = $ !== null && ($.f & me) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return ne !== null && (ne.f |= vn), {
    ctx: be,
    deps: null,
    effects: null,
    equals: yr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      he
    ),
    wv: 0,
    parent: n ?? ne,
    ac: null
  };
}
r(Ra, "derived");
// @__NO_SIDE_EFFECTS__
function ls(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ne
  );
  a === null && Di();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = jt(
    /** @type {V} */
    he
  );
  A && (o.label = t);
  var c = !$, l = /* @__PURE__ */ new Map();
  return ks(() => {
    var f = hr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === ie && d.committed && d.deactivate(), ka();
      });
    } catch (g) {
      f.reject(g), ka();
    }
    var d = (
      /** @type {Batch} */
      ie
    );
    if (c) {
      var v = s.is_rendered();
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject(Yt), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ r((g, w = void 0) => {
      if (d.activate(), w)
        w !== Yt && (o.f |= pt, fn(o, w));
      else {
        (o.f & pt) !== 0 && (o.f ^= pt), fn(o, g);
        for (const [N, p] of l) {
          if (l.delete(N), N === d) break;
          p.reject(Yt);
        }
      }
      c && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (g) => _(null, g || "unknown"));
  }), Ur(() => {
    for (const f of l.values())
      f.reject(Yt);
  }), A && (o.f |= Gn), new Promise((f) => {
    function d(v) {
      function _() {
        v === i ? f(o) : d(i);
      }
      r(_, "go"), v.then(_, _);
    }
    r(d, "next"), d(i);
  });
}
r(ls, "async_derived");
// @__NO_SIDE_EFFECTS__
function q(e) {
  const t = /* @__PURE__ */ Ra(e);
  return Zr(t), t;
}
r(q, "user_derived");
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ Ra(e);
  return t.equals = Er, t;
}
r(cs, "derived_safe_equal");
function Na(e) {
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
r(Na, "destroy_derived_effects");
let ua = [];
function us(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (t.f & gt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(us, "get_derived_parent_effect");
function Ha(e) {
  var t, n = ne;
  if (Ye(us(e)), A) {
    let a = un;
    er(/* @__PURE__ */ new Set());
    try {
      Ht.call(ua, e) && Mi(), ua.push(e), e.f &= ~kt, Na(e), t = Ta(e);
    } finally {
      Ye(n), er(a), ua.pop();
    }
  } else
    try {
      e.f &= ~kt, Na(e), t = Ta(e);
    } finally {
      Ye(n);
    }
  return t;
}
r(Ha, "execute_derived");
function Pr(e) {
  var t = Ha(e);
  if (!e.equals(t) && (e.wv = ei(), (!ie?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    fe(e, ve);
    return;
  }
  zt || (Ke !== null ? (za() || ie?.is_fork) && Ke.set(e, t) : Pa(e));
}
r(Pr, "update_derived");
let un = /* @__PURE__ */ new Set();
const Et = /* @__PURE__ */ new Map();
function er(e) {
  un = e;
}
r(er, "set_eager_effects");
let Fa = !1;
function fs() {
  Fa = !0;
}
r(fs, "set_eager_effects_deferred");
function jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(jt, "source");
// @__NO_SIDE_EFFECTS__
function He(e, t) {
  const n = jt(e);
  return Zr(n), n;
}
r(He, "state");
// @__NO_SIDE_EFFECTS__
function ds(e, t = !1, n = !0) {
  const a = jt(e);
  return t || (a.equals = Er), a;
}
r(ds, "mutable_source");
function qe(e, t, n = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ge || ($.f & Rn) !== 0) && xr() && ($.f & (me | dt | Gn | Rn)) !== 0 && (ze === null || !Ht.call(ze, e)) && ji();
  let a = n ? Jt(t) : t;
  return A && Sr(
    a,
    /** @type {string} */
    e.label
  ), fn(e, a);
}
r(qe, "set");
function fn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    zt ? Et.set(e, t) : Et.set(e, n), e.v = t;
    var a = wt.ensure();
    if (a.capture(e, n), A) {
      if (ne !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = Vi("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      ne !== null && (e.set_during_effect = !0);
    }
    if ((e.f & me) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ge) !== 0 && Ha(s), Pa(s);
    }
    e.wv = ei(), Hr(e, ge), ne !== null && (ne.f & ve) !== 0 && (ne.f & (Qe | Bt)) === 0 && (Le === null ? Ts([e]) : Le.push(e)), !a.is_fork && un.size > 0 && !Fa && Rr();
  }
  return t;
}
r(fn, "internal_set");
function Rr() {
  Fa = !1;
  for (const e of un)
    (e.f & ve) !== 0 && fe(e, Je), An(e) && wn(e);
  un.clear();
}
r(Rr, "flush_eager_effects");
function pn(e) {
  qe(e, e.v + 1);
}
r(pn, "increment");
function Hr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (A && (o & Rn) !== 0) {
        un.add(i);
        continue;
      }
      var c = (o & ge) === 0;
      if (c && fe(i, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        Ke?.delete(l), (o & kt) === 0 && (o & je && (i.f |= kt), Hr(l, Je));
      } else c && ((o & dt) !== 0 && ot !== null && ot.add(
        /** @type {Effect} */
        i
      ), Ve(
        /** @type {Effect} */
        i
      ));
    }
}
r(Hr, "mark_reactions");
const vs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Jt(e) {
  if (typeof e != "object" || e === null || Xt in e)
    return e;
  const t = _r(e);
  if (t !== xi && t !== ki)
    return e;
  var n = /* @__PURE__ */ new Map(), a = vr(e), s = /* @__PURE__ */ He(0), i = Rt, o = /* @__PURE__ */ r((d) => {
    if (Rt === i)
      return d();
    var v = $, _ = Rt;
    Ue(null), rr(i);
    var g = d();
    return Ue(v), rr(_), g;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ He(
    /** @type {any[]} */
    e.length
  )), A && (e = /** @type {any} */
  hs(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, c = d, Ze(s, `${c} version`);
      for (const [v, _] of n)
        Ze(_, Tt(c, v));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Hi();
        var g = n.get(v);
        return g === void 0 ? g = o(() => {
          var w = /* @__PURE__ */ He(_.value);
          return n.set(v, w), A && typeof v == "string" && Ze(w, Tt(c, v)), w;
        }) : qe(g, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const g = o(() => /* @__PURE__ */ He(he));
            n.set(v, g), pn(s), A && Ze(g, Tt(c, v));
          }
        } else
          qe(_, he), pn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === Xt)
          return e;
        if (A && v === gr)
          return f;
        var g = n.get(v), w = v in d;
        if (g === void 0 && (!w || Qt(d, v)?.writable) && (g = o(() => {
          var p = Jt(w ? d[v] : he), I = /* @__PURE__ */ He(p);
          return A && Ze(I, Tt(c, v)), I;
        }), n.set(v, g)), g !== void 0) {
          var N = u(g);
          return N === he ? void 0 : N;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var g = n.get(v);
          g && (_.value = u(g));
        } else if (_ === void 0) {
          var w = n.get(v), N = w?.v;
          if (w !== void 0 && N !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: N,
              writable: !0
            };
        }
        return _;
      },
      has(d, v) {
        if (v === Xt)
          return !0;
        var _ = n.get(v), g = _ !== void 0 && _.v !== he || Reflect.has(d, v);
        if (_ !== void 0 || ne !== null && (!g || Qt(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var N = g ? Jt(d[v]) : he, p = /* @__PURE__ */ He(N);
            return A && Ze(p, Tt(c, v)), p;
          }), n.set(v, _));
          var w = u(_);
          if (w === he)
            return !1;
        }
        return g;
      },
      set(d, v, _, g) {
        var w = n.get(v), N = v in d;
        if (a && v === "length")
          for (var p = _; p < /** @type {Source<number>} */
          w.v; p += 1) {
            var I = n.get(p + "");
            I !== void 0 ? qe(I, he) : p in d && (I = o(() => /* @__PURE__ */ He(he)), n.set(p + "", I), A && Ze(I, Tt(c, p)));
          }
        if (w === void 0)
          (!N || Qt(d, v)?.writable) && (w = o(() => /* @__PURE__ */ He(void 0)), A && Ze(w, Tt(c, v)), qe(w, Jt(_)), n.set(v, w));
        else {
          N = w.v !== he;
          var re = o(() => Jt(_));
          qe(w, re);
        }
        var E = Reflect.getOwnPropertyDescriptor(d, v);
        if (E?.set && E.set.call(g, _), !N) {
          if (a && typeof v == "string") {
            var D = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(v);
            Number.isInteger(F) && F >= D.v && qe(D, F + 1);
          }
          pn(s);
        }
        return !0;
      },
      ownKeys(d) {
        u(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var N = n.get(w);
          return N === void 0 || N.v !== he;
        });
        for (var [_, g] of n)
          g.v !== he && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        Fi();
      }
    }
  );
}
r(Jt, "proxy");
function Tt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : vs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(Tt, "get_label");
function fa(e) {
  try {
    if (e !== null && typeof e == "object" && Xt in e)
      return e[Xt];
  } catch {
  }
  return e;
}
r(fa, "get_proxied_value");
const _s = /* @__PURE__ */ new Set([
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
function hs(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var s = Reflect.get(t, n, a);
      return _s.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        fs();
        var o = s.apply(this, i);
        return Rr(), o;
      } : s;
    }
  });
}
r(hs, "inspectable_array");
function bs() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: s } = e;
  e.indexOf = function(i, o) {
    const c = n.call(this, i, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (fa(this[l]) === i) {
          ca("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(i, o) {
    const c = a.call(this, i, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (fa(this[l]) === i) {
          ca("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(i, o) {
    const c = s.call(this, i, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (fa(this[l]) === i) {
          ca("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = s;
  };
}
r(bs, "init_array_prototype_warnings");
var tr, ja, Fr, jr;
function ms() {
  if (tr === void 0) {
    tr = window, ja = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Fr = Qt(t, "firstChild").get, jr = Qt(t, "nextSibling").get, Qa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qa(n) && (n.__t = void 0), A && (e.__svelte_meta = null, bs());
  }
}
r(ms, "init_operations");
function St(e = "") {
  return document.createTextNode(e);
}
r(St, "create_text");
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return (
    /** @type {TemplateNode | null} */
    Fr.call(e)
  );
}
r(mt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return (
    /** @type {TemplateNode | null} */
    jr.call(e)
  );
}
r(Tn, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ mt(e);
}
r(h, "child");
function xt(e, t = !1) {
  {
    var n = /* @__PURE__ */ mt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Tn(n) : n;
  }
}
r(xt, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ Tn(a);
  return a;
}
r(m, "sibling");
function gs(e) {
  e.textContent = "";
}
r(gs, "clear_text_content");
function zr() {
  return !1;
}
r(zr, "should_defer_append");
let nr = !1;
function ps() {
  nr || (nr = !0, document.addEventListener(
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
r(ps, "add_form_reset_listener");
function Xn(e) {
  var t = $, n = ne;
  Ue(null), Ye(null);
  try {
    return e();
  } finally {
    Ue(t), Ye(n);
  }
}
r(Xn, "without_reactive_context");
function ys(e, t, n, a = n) {
  e.addEventListener(t, () => Xn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), a(!0);
  } : e.__on_r = () => a(!0), ps();
}
r(ys, "listen_to_event_and_reset_event");
function ws(e) {
  ne === null && ($ === null && Li(e), Oi()), zt && Wi(e);
}
r(ws, "validate_effect");
function Es(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(Es, "push_effect");
function Nt(e, t, n) {
  var a = ne;
  if (A)
    for (; a !== null && (a.f & Rn) !== 0; )
      a = a.parent;
  a !== null && (a.f & We) !== 0 && (e |= We);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | ge | je,
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
  if (A && (s.component_function = Nn), n)
    try {
      wn(s), s.f |= La;
    } catch (c) {
      throw Ce(s), c;
    }
  else t !== null && Ve(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & vn) === 0 && (i = i.first, (e & dt) !== 0 && (e & on) !== 0 && i !== null && (i.f |= on)), i !== null && (i.parent = a, a !== null && Es(i, a), $ !== null && ($.f & me) !== 0 && (e & Bt) === 0)) {
    var o = (
      /** @type {Derived} */
      $
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Nt, "create_effect");
function za() {
  return $ !== null && !Ge;
}
r(za, "effect_tracking");
function Ur(e) {
  const t = Nt(Vn, null, !1);
  return fe(t, ve), t.teardown = e, t;
}
r(Ur, "teardown");
function Ss(e) {
  ws("$effect"), A && Ft(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ne.f
  ), n = !$ && (t & Qe) !== 0 && (t & La) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return Br(e);
}
r(Ss, "user_effect");
function Br(e) {
  return Nt(ha | Ai, e, !1);
}
r(Br, "create_user_effect");
function xs(e) {
  wt.ensure();
  const t = Nt(Bt | vn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Pt(t, () => {
      Ce(t), a(void 0);
    }) : (Ce(t), a(void 0));
  });
}
r(xs, "component_root");
function ks(e) {
  return Nt(Gn | vn, e, !0);
}
r(ks, "async_effect");
function qr(e, t = 0) {
  return Nt(Vn | t, e, !0);
}
r(qr, "render_effect");
function Q(e, t = [], n = [], a = []) {
  is(a, t, n, (s) => {
    Nt(Vn, () => e(...s.map(u)), !0);
  });
}
r(Q, "template_effect");
function Ua(e, t = 0) {
  var n = Nt(dt | t, e, !0);
  return A && (n.dev_stack = yn), n;
}
r(Ua, "block");
function Fe(e) {
  return Nt(Qe | vn, e, !0);
}
r(Fe, "branch");
function Kr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = zt, a = $;
    ar(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      ar(n), Ue(a);
    }
  }
}
r(Kr, "execute_effect_teardown");
function Vr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Xn(() => {
      s.abort(Yt);
    });
    var a = n.next;
    (n.f & Bt) !== 0 ? n.parent = null : Ce(n, t), n = a;
  }
}
r(Vr, "destroy_effect_children");
function Ns(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Qe) === 0 && Ce(t), t = n;
  }
}
r(Ns, "destroy_block_effect_children");
function Ce(e, t = !0) {
  var n = !1;
  (t || (e.f & mr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Gr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Vr(e, t && !n), Fn(e, 0), fe(e, gt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Kr(e);
  var s = e.parent;
  s !== null && s.first !== null && Yr(e), A && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Ce, "destroy_effect");
function Gr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Tn(e);
    e.remove(), e = n;
  }
}
r(Gr, "remove_effect_dom");
function Yr(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(Yr, "unlink_effect");
function Pt(e, t, n = !0) {
  var a = [];
  Jr(e, a, !0);
  var s = /* @__PURE__ */ r(() => {
    n && Ce(e), t && t();
  }, "fn"), i = a.length;
  if (i > 0) {
    var o = /* @__PURE__ */ r(() => --i || s(), "check");
    for (var c of a)
      c.out(o);
  } else
    s();
}
r(Pt, "pause_effect");
function Jr(e, t, n) {
  if ((e.f & We) === 0) {
    e.f ^= We;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & on) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Qe) !== 0 && (e.f & dt) !== 0;
      Jr(s, t, o ? n : !1), s = i;
    }
  }
}
r(Jr, "pause_children");
function Ba(e) {
  Qr(e, !0);
}
r(Ba, "resume_effect");
function Qr(e, t) {
  if ((e.f & We) !== 0) {
    e.f ^= We, (e.f & ve) === 0 && (fe(e, ge), Ve(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & on) !== 0 || (n.f & Qe) !== 0;
      Qr(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r(Qr, "resume_children");
function Xr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ Tn(n);
      t.append(n), n = s;
    }
}
r(Xr, "move_effect");
let Pn = !1, zt = !1;
function ar(e) {
  zt = e;
}
r(ar, "set_is_destroying_effect");
let $ = null, Ge = !1;
function Ue(e) {
  $ = e;
}
r(Ue, "set_active_reaction");
let ne = null;
function Ye(e) {
  ne = e;
}
r(Ye, "set_active_effect");
let ze = null;
function Zr(e) {
  $ !== null && (ze === null ? ze = [e] : ze.push(e));
}
r(Zr, "push_reaction_value");
let Te = null, De = 0, Le = null;
function Ts(e) {
  Le = e;
}
r(Ts, "set_untracked_writes");
let $r = 1, Ct = 0, Rt = Ct;
function rr(e) {
  Rt = e;
}
r(rr, "set_update_version");
function ei() {
  return ++$r;
}
r(ei, "increment_write_version");
function An(e) {
  var t = e.f;
  if ((t & ge) !== 0)
    return !0;
  if (t & me && (e.f &= ~kt), (t & Je) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, s = 0; s < a; s++) {
      var i = n[s];
      if (An(
        /** @type {Derived} */
        i
      ) && Pr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & je) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && fe(e, ve);
  }
  return !1;
}
r(An, "is_dirty");
function ti(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(ze !== null && Ht.call(ze, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & me) !== 0 ? ti(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? fe(i, ge) : (i.f & ve) !== 0 && fe(i, Je), Ve(
        /** @type {Effect} */
        i
      ));
    }
}
r(ti, "schedule_possible_effect_self_invalidation");
function Ta(e) {
  var t = Te, n = De, a = Le, s = $, i = ze, o = be, c = Ge, l = Rt, f = e.f;
  Te = /** @type {null | Value[]} */
  null, De = 0, Le = null, $ = (f & (Qe | Bt)) === 0 ? e : null, ze = null, ln(e.ctx), Ge = !1, Rt = ++Ct, e.ac !== null && (Xn(() => {
    e.ac.abort(Yt);
  }), e.ac = null);
  try {
    e.f |= ba;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, g = ie?.is_fork;
    if (Te !== null) {
      var w;
      if (g || Fn(e, De), _ !== null && De > 0)
        for (_.length = De + Te.length, w = 0; w < Te.length; w++)
          _[De + w] = Te[w];
      else
        e.deps = _ = Te;
      if (za() && (e.f & je) !== 0)
        for (w = De; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !g && _ !== null && De < _.length && (Fn(e, De), _.length = De);
    if (xr() && Le !== null && !Ge && _ !== null && (e.f & (me | Je | ge)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Le.length; w++)
        ti(
          Le[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ct++, s.deps !== null)
        for (let N = 0; N < n; N += 1)
          s.deps[N].rv = Ct;
      if (t !== null)
        for (const N of t)
          N.rv = Ct;
      Le !== null && (a === null ? a = Le : a.push(.../** @type {Source[]} */
      Le));
    }
    return (e.f & pt) !== 0 && (e.f ^= pt), v;
  } catch (N) {
    return Nr(N);
  } finally {
    e.f ^= ba, Te = t, De = n, Le = a, $ = s, ze = i, ln(o), Ge = c, Rt = l;
  }
}
r(Ta, "update_reaction");
function As(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Ei.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Te === null || !Ht.call(Te, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & je) !== 0 && (i.f ^= je, i.f &= ~kt), Pa(i), Na(i), Fn(i, 0);
  }
}
r(As, "remove_reaction");
function Fn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      As(e, n[a]);
}
r(Fn, "remove_reactions");
function wn(e) {
  var t = e.f;
  if ((t & gt) === 0) {
    fe(e, ve);
    var n = ne, a = Pn;
    if (ne = e, Pn = !0, A) {
      var s = Nn;
      Za(e.component_function);
      var i = (
        /** @type {any} */
        yn
      );
      Hn(e.dev_stack ?? yn);
    }
    try {
      (t & (dt | br)) !== 0 ? Ns(e) : Vr(e), Kr(e);
      var o = Ta(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = $r;
      var c;
      A && Ki && (e.f & ge) !== 0 && e.deps;
    } finally {
      Pn = a, ne = n, A && (Za(s), Hn(i));
    }
  }
}
r(wn, "update_effect");
async function Cs() {
  await Promise.resolve(), $i();
}
r(Cs, "tick");
function u(e) {
  var t = e.f, n = (t & me) !== 0;
  if ($ !== null && !Ge) {
    var a = ne !== null && (ne.f & gt) !== 0;
    if (!a && (ze === null || !Ht.call(ze, e))) {
      var s = $.deps;
      if (($.f & ba) !== 0)
        e.rv < Ct && (e.rv = Ct, Te === null && s !== null && s[De] === e ? De++ : Te === null ? Te = [e] : Te.push(e));
      else {
        ($.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : Ht.call(i, $) || i.push($);
      }
    }
  }
  if (A && os.delete(e), zt && Et.has(e))
    return Et.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (zt) {
      var c = o.v;
      return ((o.f & ve) === 0 && o.reactions !== null || ai(o)) && (c = Ha(o)), Et.set(o, c), c;
    }
    var l = (o.f & je) === 0 && !Ge && $ !== null && (Pn || ($.f & je) !== 0), f = o.deps === null;
    An(o) && (l && (o.f |= je), Pr(o)), l && !f && ni(o);
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if ((e.f & pt) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function ni(e) {
  if (e.deps !== null) {
    e.f |= je;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & je) === 0 && ni(
        /** @type {Derived} */
        t
      );
  }
}
r(ni, "reconnect");
function ai(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Et.has(t) || (t.f & me) !== 0 && ai(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(ai, "depends_on_old_values");
function ri(e) {
  var t = Ge;
  try {
    return Ge = !0, e();
  } finally {
    Ge = t;
  }
}
r(ri, "untrack");
const ii = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Is(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || bn.call(t, i), !i.cancelBubble)
      return Xn(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? yt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Is, "create_event");
function lt(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Is(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ur(() => {
    t.removeEventListener(e, o, i);
  });
}
r(lt, "event");
function Ie(e) {
  for (var t = 0; t < e.length; t++)
    ii.add(e[t]);
  for (var n of Aa)
    n(e);
}
r(Ie, "delegate");
let ir = null;
function bn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  ir = e;
  var o = 0, c = ir === e && e.__root;
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
    Ft(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = $, v = ne;
    Ue(null), Ye(null);
    try {
      for (var _, g = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var N = i["__" + a];
          N != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && N.call(i, e);
        } catch (p) {
          _ ? g.push(p) : _ = p;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (_) {
        for (let p of g)
          queueMicrotask(() => {
            throw p;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ue(d), Ye(v);
    }
  }
}
r(bn, "handle_event_propagation");
function si(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(si, "create_fragment_from_html");
function jn(e, t) {
  var n = (
    /** @type {Effect} */
    ne
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(jn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = si(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ mt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || ja ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      jn(c, l);
    } else
      jn(o, o);
    return o;
  };
}
r(H, "from_html");
function da() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = St();
  return e.append(t, n), jn(t, n), e;
}
r(da, "comment");
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(O, "append");
const Ds = ["touchstart", "touchmove"];
function Ms(e) {
  return Ds.includes(e);
}
r(Ms, "is_passive_event");
function T(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(T, "set_text");
function Ws(e, t) {
  return Os(e, t);
}
r(Ws, "mount");
const Vt = /* @__PURE__ */ new Map();
function Os(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ms();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var g = v[_];
      if (!c.has(g)) {
        c.add(g);
        var w = Ms(g);
        t.addEventListener(g, bn, { passive: w });
        var N = Vt.get(g);
        N === void 0 ? (document.addEventListener(g, bn, { passive: w }), Vt.set(g, 1)) : Vt.set(g, N + 1);
      }
    }
  }, "event_handle");
  l(Kn(ii)), Aa.add(l);
  var f = void 0, d = xs(() => {
    var v = n ?? t.appendChild(St());
    return ns(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (_) => {
        ye({});
        var g = (
          /** @type {ComponentContext} */
          be
        );
        i && (g.c = i), s && (a.$$events = s), f = e(_, a) || {}, we();
      }
    ), () => {
      for (var _ of c) {
        t.removeEventListener(_, bn);
        var g = (
          /** @type {number} */
          Vt.get(_)
        );
        --g === 0 ? (document.removeEventListener(_, bn), Vt.delete(_)) : Vt.set(_, g);
      }
      Aa.delete(l), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Ca.set(f, d), f;
}
r(Os, "_mount");
let Ca = /* @__PURE__ */ new WeakMap();
function Ls(e, t) {
  const n = Ca.get(e);
  return n ? (Ca.delete(e), n(t)) : (A && (Xt in e ? Bi() : Ui()), Promise.resolve());
}
r(Ls, "unmount");
var Be, at, Me, Lt, xn, kn, Bn;
const Va = class Va {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Xe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    V(this, Be, /* @__PURE__ */ new Map());
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
    V(this, at, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    V(this, Me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    V(this, Lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    V(this, xn, !0);
    V(this, kn, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        ie
      );
      if (b(this, Be).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, Be).get(t)
        ), a = b(this, at).get(n);
        if (a)
          Ba(a), b(this, Lt).delete(n);
        else {
          var s = b(this, Me).get(n);
          s && (b(this, at).set(n, s.effect), b(this, Me).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of b(this, Be)) {
          if (b(this, Be).delete(i), i === t)
            break;
          const c = b(this, Me).get(o);
          c && (Ce(c.effect), b(this, Me).delete(o));
        }
        for (const [i, o] of b(this, at)) {
          if (i === n || b(this, Lt).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, Be).values()).includes(i)) {
              var f = document.createDocumentFragment();
              Xr(o, f), f.append(St()), b(this, Me).set(i, { effect: o, fragment: f });
            } else
              Ce(o);
            b(this, Lt).delete(i), b(this, at).delete(i);
          }, "on_destroy");
          b(this, xn) || !a ? (b(this, Lt).add(i), Pt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    V(this, Bn, /* @__PURE__ */ r((t) => {
      b(this, Be).delete(t);
      const n = Array.from(b(this, Be).values());
      for (const [a, s] of b(this, Me))
        n.includes(a) || (Ce(s.effect), b(this, Me).delete(a));
    }, "#discard"));
    this.anchor = t, G(this, xn, n);
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
    ), s = zr();
    if (n && !b(this, at).has(t) && !b(this, Me).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = St();
        i.append(o), b(this, Me).set(t, {
          effect: Fe(() => n(o)),
          fragment: i
        });
      } else
        b(this, at).set(
          t,
          Fe(() => n(this.anchor))
        );
    if (b(this, Be).set(a, t), s) {
      for (const [c, l] of b(this, at))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of b(this, Me))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, kn)), a.ondiscard(b(this, Bn));
    } else
      b(this, kn).call(this);
  }
};
Be = new WeakMap(), at = new WeakMap(), Me = new WeakMap(), Lt = new WeakMap(), xn = new WeakMap(), kn = new WeakMap(), Bn = new WeakMap(), r(Va, "BranchManager");
let Ia = Va;
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
          Ri(t);
        }, "get"),
        set: /* @__PURE__ */ r((a) => {
          n = a;
        }, "set")
      });
    }
  };
  var ll = e;
  r(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function te(e, t, n = !1) {
  var a = new Ia(e), s = n ? on : 0;
  function i(o, c) {
    a.ensure(o, c);
  }
  r(i, "update_branch"), Ua(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, i(l, c);
    }), o || i(!1, null);
  }, s);
}
r(te, "if_block");
function rt(e, t) {
  return t;
}
r(rt, "index");
function Ps(e, t, n) {
  for (var a = [], s = t.length, i, o = t.length, c = 0; c < s; c++) {
    let v = t[c];
    Pt(
      v,
      () => {
        if (i) {
          if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Da(Kn(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
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
      gs(d), d.append(f), e.items.clear();
    }
    Da(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Ps, "pause_effects");
function Da(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ce(e[n], t);
}
r(Da, "destroy_effects");
var sr;
function it(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(St());
  }
  var d = null, v = /* @__PURE__ */ cs(() => {
    var I = n();
    return vr(I) ? I : I == null ? [] : Kn(I);
  }), _, g = !0;
  function w() {
    p.fallback = d, Rs(p, _, o, t, a), d !== null && (_.length === 0 ? (d.f & ft) === 0 ? Ba(d) : (d.f ^= ft, mn(d, null, o)) : Pt(d, () => {
      d = null;
    }));
  }
  r(w, "commit");
  var N = Ua(() => {
    _ = /** @type {V[]} */
    u(v);
    for (var I = _.length, re = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      ie
    ), D = zr(), F = 0; F < I; F += 1) {
      var S = _[F], L = a(S, F), P = g ? null : c.get(L);
      P ? (P.v && fn(P.v, S), P.i && fn(P.i, F), D && E.unskip_effect(P.e)) : (P = Hs(
        c,
        g ? o : sr ??= St(),
        S,
        L,
        F,
        s,
        t,
        n
      ), g || (P.e.f |= ft), c.set(L, P)), re.add(L);
    }
    if (I === 0 && i && !d && (g ? d = Fe(() => i(o)) : (d = Fe(() => i(sr ??= St())), d.f |= ft)), I > re.size && (A ? Fs(_, a) : pr("", "", "")), !g)
      if (D) {
        for (const [j, K] of c)
          re.has(j) || E.skip_effect(K.e);
        E.oncommit(w), E.ondiscard(() => {
        });
      } else
        w();
    u(v);
  }), p = { effect: N, items: c, outrogroups: null, fallback: d };
  g = !1;
}
r(it, "each");
function hn(e) {
  for (; e !== null && (e.f & Qe) === 0; )
    e = e.next;
  return e;
}
r(hn, "skip_to_branch");
function Rs(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = hn(e.effect.first), f, d = null, v, _ = [], g = [], w, N, p, I;
  if (i)
    for (I = 0; I < o; I += 1)
      w = t[I], N = s(w, I), p = /** @type {EachItem} */
      c.get(N).e, (p.f & ft) === 0 && (p.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(p));
  for (I = 0; I < o; I += 1) {
    if (w = t[I], N = s(w, I), p = /** @type {EachItem} */
    c.get(N).e, e.outrogroups !== null)
      for (const K of e.outrogroups)
        K.pending.delete(p), K.done.delete(p);
    if ((p.f & ft) !== 0)
      if (p.f ^= ft, p === l)
        mn(p, null, n);
      else {
        var re = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), _t(e, d, p), _t(e, p, re), mn(p, re, n), d = p, _ = [], g = [], l = hn(d.next);
        continue;
      }
    if ((p.f & We) !== 0 && (Ba(p), i && (p.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (f !== void 0 && f.has(p)) {
        if (_.length < g.length) {
          var E = g[0], D;
          d = E.prev;
          var F = _[0], S = _[_.length - 1];
          for (D = 0; D < _.length; D += 1)
            mn(_[D], E, n);
          for (D = 0; D < g.length; D += 1)
            f.delete(g[D]);
          _t(e, F.prev, S.next), _t(e, d, F), _t(e, S, E), l = E, d = S, I -= 1, _ = [], g = [];
        } else
          f.delete(p), mn(p, l, n), _t(e, p.prev, p.next), _t(e, p, d === null ? e.effect.first : d.next), _t(e, d, p), d = p;
        continue;
      }
      for (_ = [], g = []; l !== null && l !== p; )
        (f ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = hn(l.next);
      if (l === null)
        continue;
    }
    (p.f & ft) === 0 && _.push(p), d = p, l = hn(p.next);
  }
  if (e.outrogroups !== null) {
    for (const K of e.outrogroups)
      K.pending.size === 0 && (Da(Kn(K.done)), e.outrogroups?.delete(K));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var L = [];
    if (f !== void 0)
      for (p of f)
        (p.f & We) === 0 && L.push(p);
    for (; l !== null; )
      (l.f & We) === 0 && l !== e.fallback && L.push(l), l = hn(l.next);
    var P = L.length;
    if (P > 0) {
      var j = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (I = 0; I < P; I += 1)
          L[I].nodes?.a?.measure();
        for (I = 0; I < P; I += 1)
          L[I].nodes?.a?.fix();
      }
      Ps(e, L, j);
    }
  }
  i && yt(() => {
    if (v !== void 0)
      for (p of v)
        p.nodes?.a?.apply();
  });
}
r(Rs, "reconcile");
function Hs(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ds(n, !1, !1) : jt(n) : null, f = (o & 2) !== 0 ? jt(s) : null;
  return A && l && (l.trace = () => {
    c()[f?.v ?? s];
  }), {
    v: l,
    i: f,
    e: Fe(() => (i(t, l ?? n, f ?? s, c), () => {
      e.delete(a);
    }))
  };
}
r(Hs, "create_item");
function mn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & ft) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tn(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(mn, "move");
function _t(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(_t, "link");
function Fs(e, t) {
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
r(Fs, "validate_each_keys");
function js(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  Q(() => {
    var c = (
      /** @type {Effect} */
      ne
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (Gr(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = si(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ mt(f)), jn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ mt(f); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ mt(f)
          );
      else
        i.before(f);
    }
  });
}
r(js, "html");
const or = [...` 	
\r\f \v\uFEFF`];
function zs(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        a = a ? a + " " + s : s;
      else if (a.length)
        for (var i = s.length, o = 0; (o = a.indexOf(s, o)) >= 0; ) {
          var c = o + i;
          (o === 0 || or.includes(a[o - 1])) && (c === a.length || or.includes(a[c])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(c + 1) : o = c;
        }
  }
  return a === "" ? null : a;
}
r(zs, "to_class");
function Ut(e, t, n, a, s, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = zs(n, a, i);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var f = !!i[l];
      (s == null || f !== !!s[l]) && e.classList.toggle(l, f);
    }
  return i;
}
r(Ut, "set_class");
const Us = /* @__PURE__ */ Symbol("is custom element"), Bs = /* @__PURE__ */ Symbol("is html");
function Ae(e, t) {
  var n = oi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(Ae, "set_value");
function M(e, t, n, a) {
  var s = oi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Ci] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && qs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(M, "set_attribute");
function oi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Us]: e.nodeName.includes("-"),
      [Bs]: e.namespaceURI === wi
    }
  );
}
r(oi, "get_attributes");
var lr = /* @__PURE__ */ new Map();
function qs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = lr.get(t);
  if (n) return n;
  lr.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = Si(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = _r(s);
  }
  return n;
}
r(qs, "get_setters");
function li(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  ys(e, "input", async (s) => {
    A && e.type === "checkbox" && Xa();
    var i = s ? e.defaultValue : e.value;
    if (i = va(e) ? _a(i) : i, n(i), ie !== null && a.add(ie), await Cs(), i !== (i = t())) {
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
  ri(t) == null && e.value && (n(va(e) ? _a(e.value) : e.value), ie !== null && a.add(ie)), qr(() => {
    A && e.type === "checkbox" && Xa();
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        ga ?? ie
      );
      if (a.has(i))
        return;
    }
    va(e) && s === _a(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
r(li, "bind_value");
function va(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(va, "is_numberlike_input");
function _a(e) {
  return e === "" ? null : +e;
}
r(_a, "to_number");
const Gt = [];
function Ks(e, t) {
  return {
    subscribe: Vs(e, t).subscribe
  };
}
r(Ks, "readable");
function Vs(e, t = la) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function s(c) {
    if (wr(e, c) && (e = c, n)) {
      const l = !Gt.length;
      for (const f of a)
        f[1](), Gt.push(f, e);
      if (l) {
        for (let f = 0; f < Gt.length; f += 2)
          Gt[f][0](Gt[f + 1]);
        Gt.length = 0;
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
  function o(c, l = la) {
    const f = [c, l];
    return a.add(f), a.size === 1 && (n = t(s, i) || la), c(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return r(o, "subscribe"), { set: s, update: i, subscribe: o };
}
r(Vs, "writable");
function Gs(e) {
  var n, a, s;
  const i = class i extends e {
    constructor() {
      super(...arguments);
      V(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const d = f, { tagName: v } = d;
          return v && l.push(v.toUpperCase()), l;
        },
        []
      ));
      V(this, a, /* @__PURE__ */ He(Jt({})));
      V(this, s, {});
    }
    get $state() {
      return u(b(this, a));
    }
    set $state(l) {
      qe(b(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, d) {
      Object.assign(this.$state, l.state), d.isFirstRender && G(this, s, Ws(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Ls(b(this, s), { outro: !0 });
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
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), Xe(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(Gs, "SvelteApplicationMixin");
const Ys = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ys);
function x(e) {
  return game.i18n?.localize(e) ?? e;
}
r(x, "localize");
function dn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(dn, "format");
var Js = /* @__PURE__ */ H("<span> </span>"), Qs = /* @__PURE__ */ H('<span style="color: var(--nos-text-secondary, #888)">—</span>'), Xs = /* @__PURE__ */ H('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function Zs(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.img);
  function a() {
    new FilePicker({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ r((j) => t.actor.update({ img: j }), "callback")
    }).render(!0);
  }
  r(a, "pickPortrait");
  let s = /* @__PURE__ */ q(() => {
    const j = Object.keys(t.hitDiceData.bySize);
    return j.length === 0 ? "—" : j.length === 1 ? `d${j[0]}` : j.map((K) => `d${K}`).join("/");
  });
  var i = Xs(), o = h(i);
  o.__click = a;
  var c = h(o), l = m(o, 2), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: j }) => t.actor.update({ name: j.value });
  var _ = m(l, 2), g = h(_), w = h(g), N = m(g, 2), p = h(N);
  {
    var I = /* @__PURE__ */ r((j) => {
      var K = Js(), Y = h(K);
      Q(() => T(Y, t.metaData)), O(j, K);
    }, "consequent"), re = /* @__PURE__ */ r((j) => {
      var K = Qs();
      O(j, K);
    }, "alternate");
    te(p, (j) => {
      t.metaData ? j(I) : j(re, !1);
    });
  }
  var E = m(p, 2);
  E.__click = () => t.actor.editMetadata();
  var D = m(_, 2), F = h(D), S = h(F), L = m(F, 2), P = h(L);
  Q(
    (j, K, Y, z, J) => {
      M(c, "src", u(n)), M(c, "alt", t.actor.reactive.name), T(d, j), Ae(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, T(w, K), M(E, "aria-label", Y), M(E, "data-tooltip", z), E.disabled = !t.editingEnabled, T(S, J), T(P, u(s));
    },
    [
      () => x("NWS.CharacterName"),
      () => x("NWS.AncestryClassLevel"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.EditMetadata"),
      () => x("NWS.HitDie")
    ]
  ), O(e, i), we();
}
r(Zs, "HeaderRow");
Ie(["click", "change"]);
function qa(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(qa, "formatModifier");
var $s = /* @__PURE__ */ H('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function eo(e, t) {
  ye(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ q(() => x(n[t.abilityKey])), s = /* @__PURE__ */ q(() => dn("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ q(() => dn("NWS.RollSave", { name: u(a) }));
  var o = $s(), c = h(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), v = h(d), _ = m(f, 2), g = h(_);
  Q(
    (w) => {
      l = Ut(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), M(c, "data-tooltip", u(i)), M(c, "aria-label", u(i)), M(f, "data-tooltip", u(s)), M(f, "aria-label", u(s)), T(v, w), T(g, u(a));
    },
    [() => qa(t.ability.mod)]
  ), O(e, o), we();
}
r(eo, "AbilityBox");
Ie(["click"]);
var to = /* @__PURE__ */ H('<div class="nos-resources__mana"><label> </label> <input type="number"/> <span class="nos-resources__separator">/</span> <input type="number"/></div>'), no = /* @__PURE__ */ H('<div class="nos-resources"><!></div>');
function ao(e, t) {
  ye(t, !0);
  var n = no(), a = h(n);
  {
    var s = /* @__PURE__ */ r((i) => {
      var o = to(), c = h(o), l = h(c), f = m(c, 2);
      f.__change = ({ target: v }) => t.updateCurrentMana(Number(v.value));
      var d = m(f, 4);
      d.__change = ({ target: v }) => t.updateMaxMana(Number(v.value)), Q(
        (v) => {
          T(l, v), Ae(f, t.mana.current), Ae(d, t.mana.max || t.mana.baseMax), d.disabled = !t.editingEnabled;
        },
        [() => x("NWS.Mana")]
      ), O(i, o);
    }, "consequent");
    te(a, (i) => {
      t.hasMana && i(s);
    });
  }
  O(e, n), we();
}
r(ao, "ClassResourceBar");
Ie(["change"]);
var ro = /* @__PURE__ */ H('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), io = /* @__PURE__ */ H('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  ye(t, !0);
  var n = io(), a = h(n), s = h(a), i = m(a, 2);
  it(i, 21, () => ({ length: t.wounds.max }), rt, (o, c, l) => {
    var f = ro();
    let d;
    f.__click = () => t.toggleWounds(l + 1), Q(
      (v, _) => {
        d = Ut(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), M(f, "data-tooltip", v), M(f, "aria-label", _);
      },
      [
        () => dn("NWS.ToggleWound", { n: l + 1 }),
        () => dn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), Q((o) => T(s, o), [() => x("NWS.Exhaustion")]), O(e, n), we();
}
r(so, "ExhaustionTracker");
Ie(["click"]);
var oo = /* @__PURE__ */ H('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ H('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ H('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ H('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-hp"><span class="nos-combat__sub"> </span> <div class="nos-hp__bar"><input class="nos-hp__max" type="number"/></div> <div class="nos-hp__bar"><input class="nos-hp__current" type="number"/></div> <span class="nos-combat__sub"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div> <!></div> <!></section>');
function fo(e, t) {
  ye(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ q(() => t.actor.reactive.system.attributes.movement);
  var l = uo(), f = h(l), d = h(f);
  it(d, 17, () => n, rt, (ue, Oe) => {
    eo(ue, {
      get abilityKey() {
        return u(Oe);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(Oe)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(Oe)];
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
      var Oe = oo(), _n = xt(Oe);
      _n.__click = () => t.actor.configureSavingThrows();
      var Dn = m(_n, 2);
      Dn.__click = () => t.actor.configureAbilityScores(), Q(
        (ia, sa) => {
          M(_n, "data-tooltip", ia), M(Dn, "data-tooltip", sa);
        },
        [
          () => x("NWS.ConfigureSavingThrows"),
          () => x("NWS.ConfigureAbilityScores")
        ]
      ), O(ue, Oe);
    }, "consequent");
    te(v, (ue) => {
      t.editingEnabled && ue(_);
    });
  }
  var g = m(f, 2), w = h(g), N = h(w), p = h(N), I = m(h(p), 2), re = h(I), E = m(I, 2), D = h(E), F = m(p, 2), S = m(h(F), 2), L = h(S), P = m(S, 2);
  P.__change = ({ target: ue }) => t.updateTempHP(Number(ue.value));
  var j = m(N, 2);
  let K;
  var Y = h(j), z = h(Y);
  {
    var J = /* @__PURE__ */ r((ue) => {
      var Oe = lo();
      O(ue, Oe);
    }, "consequent_1"), ee = /* @__PURE__ */ r((ue) => {
      var Oe = co();
      O(ue, Oe);
    }, "alternate");
    te(z, (ue) => {
      t.isBloodied ? ue(J) : ue(ee, !1);
    });
  }
  var ae = m(Y, 2), oe = h(ae), k = m(ae, 2), C = h(k), U = h(C), y = m(C, 2), R = h(y);
  R.__change = ({ target: ue }) => t.updateMaxHP(Number(ue.value));
  var W = m(y, 2), X = h(W);
  X.__change = ({ target: ue }) => t.updateCurrentHP(Number(ue.value));
  var B = m(W, 2), Z = h(B), se = m(k, 2);
  se.__click = () => t.actor.configureHitPoints();
  var ce = m(j, 2);
  ce.__click = () => t.rollHitDice();
  var Se = m(h(ce), 2), le = h(Se), Ee = m(Se, 2), de = h(Ee), xe = m(Ee, 2);
  xe.__click = (ue) => {
    ue.stopPropagation(), t.actor.configureHitDice();
  };
  var qt = m(ce, 2), vt = h(qt);
  vt.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Kt = m(h(vt), 2), Zn = h(Kt), $n = m(Kt, 2), ea = h($n), ta = m(vt, 2), Cn = m(h(ta), 2), na = h(Cn), In = m(Cn, 2), aa = h(In), ra = m(In, 2);
  ra.__click = () => t.actor.configureMovement();
  var ci = m(w, 2);
  ao(ci, {
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
  });
  var fi = m(g, 2);
  so(fi, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), Q(
    (ue, Oe, _n, Dn, ia, sa, di, vi, _i, hi, bi, mi, gi) => {
      T(re, ue), T(D, u(i).value), T(L, Oe), Ae(P, u(s).temp ?? 0), K = Ut(j, 1, "nos-combat__stat", null, K, { "nos-hp--bloodied": t.isBloodied }), T(oe, _n), T(U, Dn), Ae(R, u(s).max), R.disabled = !t.editingEnabled, Ae(X, u(s).value), T(Z, ia), M(se, "data-tooltip", sa), se.disabled = !t.editingEnabled, T(le, di), T(de, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), M(xe, "data-tooltip", vi), xe.disabled = !t.editingEnabled, M(vt, "data-tooltip", _i), T(Zn, hi), T(ea, bi), T(na, mi), T(aa, u(c).walk), M(ra, "data-tooltip", gi), ra.disabled = !t.editingEnabled;
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
      () => qa(u(o).mod),
      () => x("NWS.Speed"),
      () => x("NWS.ConfigureMovement")
    ]
  ), O(e, l), we();
}
r(fo, "StatsRow");
Ie(["click", "change"]);
var vo = /* @__PURE__ */ H('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  ye(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ q(() => n[t.skillKey]), o = /* @__PURE__ */ q(() => x(a[u(i)])), c = /* @__PURE__ */ q(() => x(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = m(f, 2), _ = h(v), g = m(v, 2), w = h(g);
  Q(
    (N, p) => {
      M(l, "data-tooltip", N), T(d, u(o)), T(_, p), T(w, u(c));
    },
    [
      () => dn("NWS.RollSkill", { name: u(c) }),
      () => qa(t.skill.mod)
    ]
  ), O(e, l), we();
}
r(_o, "SkillCell");
Ie(["click"]);
var ho = /* @__PURE__ */ H('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), bo = /* @__PURE__ */ H('<section class="nos-skills-row"><!> <!></section>');
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
  var a = bo(), s = h(a);
  it(s, 17, () => n, rt, (c, l) => {
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
      l.__click = () => t.actor.configureSkills(), Q((f) => M(l, "data-tooltip", f), [() => x("NWS.ConfigureSkills")]), O(c, l);
    }, "consequent");
    te(i, (c) => {
      t.editingEnabled && c(o);
    });
  }
  O(e, a), we();
}
r(mo, "SkillsRow");
Ie(["click"]);
var go = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ H('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ H('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Ao = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Co = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Io = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Do = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Mo = /* @__PURE__ */ H('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ H("<!> <!> <!> <!> <!>", 1);
function cr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((S) => S.type === "feature")), a = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((S) => S.type === "boon")), s = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "ancestry") ?? null), i = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "background") ?? null), o = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "class") ?? null), c = /* @__PURE__ */ q(() => t.actor.reactive.items.find((S) => S.type === "subclass") ?? null);
  function l(S) {
    t.actor.items.get(S)?.sheet?.render(!0);
  }
  r(l, "configureItem");
  function f(S) {
    t.actor.deleteEmbeddedDocuments("Item", [S]);
  }
  r(f, "deleteItem");
  function d(S, L) {
    const P = { type: "Item", uuid: L.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(P));
  }
  r(d, "onDragStart");
  var v = Oo(), _ = xt(v);
  {
    var g = /* @__PURE__ */ r((S) => {
      var L = Eo(), P = h(L);
      {
        var j = /* @__PURE__ */ r((z) => {
          var J = po(), ee = h(J), ae = h(ee), oe = m(ee, 2), k = h(oe), C = m(k, 2);
          C.__click = () => l(u(s).id);
          var U = h(C), y = m(C, 2);
          {
            var R = /* @__PURE__ */ r((W) => {
              var X = go(), B = h(X);
              B.__click = () => l(u(s).id);
              var Z = m(B, 2);
              Z.__click = () => f(u(s).id), O(W, X);
            }, "consequent");
            te(y, (W) => {
              t.editingEnabled && W(R);
            });
          }
          Q(
            (W) => {
              T(ae, W), M(k, "src", u(s).img), M(k, "alt", u(s).name), T(U, u(s).name);
            },
            [() => x("NWS.Ancestry")]
          ), lt("dragstart", oe, (W) => d(W, u(s))), O(z, J);
        }, "consequent_1");
        te(P, (z) => {
          u(s) && z(j);
        });
      }
      var K = m(P, 2);
      {
        var Y = /* @__PURE__ */ r((z) => {
          var J = wo(), ee = h(J), ae = h(ee), oe = m(ee, 2), k = h(oe), C = m(k, 2);
          C.__click = () => l(u(i).id);
          var U = h(C), y = m(C, 2);
          {
            var R = /* @__PURE__ */ r((W) => {
              var X = yo(), B = h(X);
              B.__click = () => l(u(i).id);
              var Z = m(B, 2);
              Z.__click = () => f(u(i).id), O(W, X);
            }, "consequent_2");
            te(y, (W) => {
              t.editingEnabled && W(R);
            });
          }
          Q(
            (W) => {
              T(ae, W), M(k, "src", u(i).img), M(k, "alt", u(i).name), T(U, u(i).name);
            },
            [() => x("NWS.Background")]
          ), lt("dragstart", oe, (W) => d(W, u(i))), O(z, J);
        }, "consequent_3");
        te(K, (z) => {
          u(i) && z(Y);
        });
      }
      O(S, L);
    }, "consequent_4");
    te(_, (S) => {
      (u(s) || u(i)) && S(g);
    });
  }
  var w = m(_, 2);
  {
    var N = /* @__PURE__ */ r((S) => {
      var L = No(), P = h(L), j = h(P), K = m(P, 2), Y = h(K), z = m(Y, 2);
      z.__click = () => l(u(o).id);
      var J = h(z), ee = m(z, 2);
      {
        var ae = /* @__PURE__ */ r((C) => {
          var U = So(), y = h(U);
          y.__click = () => l(u(o).id);
          var R = m(y, 2);
          R.__click = () => f(u(o).id), O(C, U);
        }, "consequent_5");
        te(ee, (C) => {
          t.editingEnabled && C(ae);
        });
      }
      var oe = m(K, 2);
      {
        var k = /* @__PURE__ */ r((C) => {
          var U = ko(), y = h(U), R = m(y, 2);
          R.__click = () => l(u(c).id);
          var W = h(R), X = m(R, 2);
          {
            var B = /* @__PURE__ */ r((Z) => {
              var se = xo(), ce = h(se);
              ce.__click = () => l(u(c).id);
              var Se = m(ce, 2);
              Se.__click = () => f(u(c).id), O(Z, se);
            }, "consequent_6");
            te(X, (Z) => {
              t.editingEnabled && Z(B);
            });
          }
          Q(() => {
            M(y, "src", u(c).img), M(y, "alt", u(c).name), T(W, u(c).name);
          }), lt("dragstart", U, (Z) => d(Z, u(c))), O(C, U);
        }, "consequent_7");
        te(oe, (C) => {
          u(c) && C(k);
        });
      }
      Q(
        (C, U) => {
          T(j, C), M(Y, "src", u(o).img), M(Y, "alt", u(o).name), T(J, `${u(o).name ?? ""} (${U ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => x("NWS.Class"), () => x("NWS.Level")]
      ), lt("dragstart", K, (C) => d(C, u(o))), O(S, L);
    }, "consequent_8");
    te(w, (S) => {
      u(o) && S(N);
    });
  }
  var p = m(w, 2);
  {
    var I = /* @__PURE__ */ r((S) => {
      var L = Co(), P = h(L), j = h(P), K = m(P, 2);
      it(K, 21, () => u(n), rt, (Y, z) => {
        var J = Ao(), ee = h(J), ae = m(ee, 2);
        ae.__click = () => l(u(z).id);
        var oe = h(ae), k = m(ae, 2);
        {
          var C = /* @__PURE__ */ r((U) => {
            var y = To(), R = h(y);
            R.__click = () => l(u(z).id);
            var W = m(R, 2);
            W.__click = () => f(u(z).id), O(U, y);
          }, "consequent_9");
          te(k, (U) => {
            t.editingEnabled && U(C);
          });
        }
        Q(() => {
          M(ee, "src", u(z).img), M(ee, "alt", u(z).name), T(oe, u(z).name);
        }), lt("dragstart", J, (U) => d(U, u(z))), O(Y, J);
      }), Q((Y) => T(j, Y), [() => x("NWS.Features")]), O(S, L);
    }, "consequent_10");
    te(p, (S) => {
      u(n).length > 0 && S(I);
    });
  }
  var re = m(p, 2);
  {
    var E = /* @__PURE__ */ r((S) => {
      var L = Mo(), P = h(L), j = h(P), K = m(P, 2);
      it(K, 21, () => u(a), rt, (Y, z) => {
        var J = Do(), ee = h(J), ae = m(ee, 2);
        ae.__click = () => l(u(z).id);
        var oe = h(ae), k = m(ae, 2);
        {
          var C = /* @__PURE__ */ r((U) => {
            var y = Io(), R = h(y);
            R.__click = () => l(u(z).id);
            var W = m(R, 2);
            W.__click = () => f(u(z).id), O(U, y);
          }, "consequent_11");
          te(k, (U) => {
            t.editingEnabled && U(C);
          });
        }
        Q(() => {
          M(ee, "src", u(z).img), M(ee, "alt", u(z).name), T(oe, u(z).name);
        }), lt("dragstart", J, (U) => d(U, u(z))), O(Y, J);
      }), Q((Y) => T(j, Y), [() => x("NWS.Boons")]), O(S, L);
    }, "consequent_12");
    te(re, (S) => {
      u(a).length > 0 && S(E);
    });
  }
  var D = m(re, 2);
  {
    var F = /* @__PURE__ */ r((S) => {
      var L = Wo(), P = h(L);
      Q((j) => T(P, j), [() => x("NWS.DropFeaturesHere")]), O(S, L);
    }, "consequent_13");
    te(D, (S) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && S(F);
    });
  }
  O(e, v), we();
}
r(cr, "FeaturesTab");
Ie(["click"]);
var Lo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Po = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Ro = /* @__PURE__ */ H('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ho = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ H('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ H('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ H('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function ur(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ He(""), a = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((E) => E.type === "spell").sort((E, D) => (E.sort ?? 0) - (D.sort ?? 0))), s = /* @__PURE__ */ q(() => u(n) ? u(a).filter((E) => E.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ q(() => {
    const E = {};
    for (const D of u(s)) {
      const F = D.system?.tier ?? 0, S = D.system?.isUtility ?? !1, L = S ? "_utility" : `_tier_${F}`, P = S ? x("NWS.Utility") : dn("NWS.Tier", { n: F });
      E[L] ??= { label: P, spells: [] }, E[L].spells.push(D);
    }
    return Object.entries(E).sort(([D], [F]) => {
      if (D === "_utility") return 1;
      if (F === "_utility") return -1;
      const S = parseInt(D.replace("_tier_", "")), L = parseInt(F.replace("_tier_", ""));
      return S - L;
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
  function d(E, D) {
    const F = { type: "Item", uuid: D.uuid };
    E.dataTransfer.setData("text/plain", JSON.stringify(F));
  }
  r(d, "onDragStart");
  var v = Uo(), _ = xt(v), g = m(h(_), 2), w = m(g, 2);
  {
    var N = /* @__PURE__ */ r((E) => {
      var D = Lo();
      D.__click = l;
      var F = m(h(D));
      Q((S) => T(F, ` ${S ?? ""}`), [() => x("NWS.New")]), O(E, D);
    }, "consequent");
    te(w, (E) => {
      t.editingEnabled && E(N);
    });
  }
  var p = m(_, 2);
  it(p, 17, () => u(i), rt, (E, D) => {
    var F = /* @__PURE__ */ q(() => Ti(u(D), 2));
    let S = /* @__PURE__ */ r(() => u(F)[1], "tier");
    var L = jo(), P = h(L), j = h(P), K = m(P, 2);
    it(K, 21, () => S().spells, rt, (Y, z) => {
      var J = Fo(), ee = h(J), ae = m(ee, 2);
      ae.__click = () => f(u(z).id);
      var oe = h(ae), k = m(oe);
      {
        var C = /* @__PURE__ */ r((Z) => {
          var se = Po();
          Q((ce) => M(se, "data-tooltip", ce), [() => x("NWS.Concentration")]), O(Z, se);
        }, "consequent_1");
        te(k, (Z) => {
          u(z).system?.concentration && Z(C);
        });
      }
      var U = m(k, 2);
      {
        var y = /* @__PURE__ */ r((Z) => {
          var se = Ro();
          Q((ce) => M(se, "data-tooltip", ce), [() => x("NWS.Utility")]), O(Z, se);
        }, "consequent_2");
        te(U, (Z) => {
          u(z).system?.isUtility && Z(y);
        });
      }
      var R = m(ae, 2), W = h(R), X = m(R, 2);
      {
        var B = /* @__PURE__ */ r((Z) => {
          var se = Ho(), ce = h(se);
          ce.__click = () => o(u(z).id);
          var Se = m(ce, 2);
          Se.__click = () => c(u(z).id), O(Z, se);
        }, "consequent_3");
        te(X, (Z) => {
          t.editingEnabled && Z(B);
        });
      }
      Q(() => {
        M(ee, "src", u(z).img), M(ee, "alt", u(z).name), T(oe, `${u(z).name ?? ""} `), T(W, u(z).system?.activationCost ?? "");
      }), lt("dragstart", J, (Z) => d(Z, u(z))), O(Y, J);
    }), Q(() => T(j, S().label)), O(E, L);
  });
  var I = m(p, 2);
  {
    var re = /* @__PURE__ */ r((E) => {
      var D = zo(), F = h(D);
      Q((S) => T(F, S), [() => x("NWS.DropSpellsHere")]), O(E, D);
    }, "consequent_4");
    te(I, (E) => {
      u(a).length === 0 && E(re);
    });
  }
  Q((E) => M(g, "placeholder", E), [() => x("NWS.SearchSpells")]), li(g, () => u(n), (E) => qe(n, E)), O(e, v), we();
}
r(ur, "SpellsTab");
Ie(["click"]);
var Bo = /* @__PURE__ */ H('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), qo = /* @__PURE__ */ H('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Ko = /* @__PURE__ */ H('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Vo = /* @__PURE__ */ H('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Go = /* @__PURE__ */ H('<div class="nos-currency"><div class="nos-currency__coin"><label> </label> <input type="number"/></div> <div class="nos-currency__coin"><label> </label> <input type="number"/></div> <div class="nos-currency__coin"><label> </label> <input type="number"/></div></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function fr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ He(""), a = /* @__PURE__ */ q(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((k) => k.type === "object").sort((k, C) => (k.sort ?? 0) - (C.sort ?? 0))), i = /* @__PURE__ */ q(() => u(n) ? u(s).filter((k) => k.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
  function o(k) {
    t.actor.items.get(k)?.sheet?.render(!0);
  }
  r(o, "configureItem");
  function c(k) {
    t.actor.deleteEmbeddedDocuments("Item", [k]);
  }
  r(c, "deleteItem");
  function l() {
    t.actor.createEmbeddedDocuments("Item", [{ name: "New Object", type: "object" }]);
  }
  r(l, "createObject");
  function f(k, C) {
    t.actor.update({ [`system.currency.${k}.value`]: Number(C) });
  }
  r(f, "updateCurrency");
  function d(k, C) {
    t.actor.items.get(k)?.update({ "system.quantity": Number(C) });
  }
  r(d, "updateQuantity");
  function v(k, C) {
    const U = { type: "Item", uuid: C.uuid };
    k.dataTransfer.setData("text/plain", JSON.stringify(U));
  }
  r(v, "onDragStart");
  var _ = Go(), g = xt(_), w = h(g), N = h(w), p = h(N), I = m(N, 2);
  I.__change = ({ target: k }) => f("gp", k.value);
  var re = m(w, 2), E = h(re), D = h(E), F = m(E, 2);
  F.__change = ({ target: k }) => f("sp", k.value);
  var S = m(re, 2), L = h(S), P = h(L), j = m(L, 2);
  j.__change = ({ target: k }) => f("cp", k.value);
  var K = m(g, 2), Y = m(h(K), 2), z = m(Y, 2);
  {
    var J = /* @__PURE__ */ r((k) => {
      var C = Bo();
      C.__click = l;
      var U = m(h(C));
      Q((y) => T(U, ` ${y ?? ""}`), [() => x("NWS.New")]), O(k, C);
    }, "consequent");
    te(z, (k) => {
      t.editingEnabled && k(J);
    });
  }
  var ee = m(K, 2);
  it(ee, 21, () => u(i), rt, (k, C) => {
    var U = Ko(), y = h(U), R = m(y, 2);
    R.__click = () => o(u(C).id);
    var W = h(R), X = m(R, 2);
    X.__change = ({ target: se }) => d(u(C).id, se.value);
    var B = m(X, 2);
    {
      var Z = /* @__PURE__ */ r((se) => {
        var ce = qo(), Se = h(ce);
        Se.__click = () => o(u(C).id);
        var le = m(Se, 2);
        le.__click = () => c(u(C).id), O(se, ce);
      }, "consequent_1");
      te(B, (se) => {
        t.editingEnabled && se(Z);
      });
    }
    Q(() => {
      M(y, "src", u(C).img), M(y, "alt", u(C).name), T(W, u(C).name), Ae(X, u(C).system?.quantity ?? 1);
    }), lt("dragstart", U, (se) => v(se, u(C))), O(k, U);
  });
  var ae = m(ee, 2);
  {
    var oe = /* @__PURE__ */ r((k) => {
      var C = Vo(), U = h(C);
      Q((y) => T(U, y), [() => x("NWS.DropInventoryHere")]), O(k, C);
    }, "consequent_2");
    te(ae, (k) => {
      u(s).length === 0 && k(oe);
    });
  }
  Q(
    (k, C, U, y) => {
      T(p, k), Ae(I, u(a).gp?.value ?? 0), T(D, C), Ae(F, u(a).sp?.value ?? 0), T(P, U), Ae(j, u(a).cp?.value ?? 0), M(Y, "placeholder", y);
    },
    [
      () => x("NWS.GP"),
      () => x("NWS.SP"),
      () => x("NWS.CP"),
      () => x("NWS.SearchItems")
    ]
  ), li(Y, () => u(n), (k) => qe(n, k)), O(e, _), we();
}
r(fr, "InventoryTab");
Ie(["change", "click"]);
var Yo = /* @__PURE__ */ H(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function dr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.system.details), a = /* @__PURE__ */ q(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ q(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ q(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ q(() => (u(a).weapons ?? []).join(", "));
  var c = Yo(), l = h(c), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: de }) => t.actor.update({ "system.details.age": de.value });
  var _ = m(l, 2), g = h(_), w = h(g), N = m(g, 2);
  N.__change = ({ target: de }) => t.actor.update({ "system.details.gender": de.value });
  var p = m(_, 2), I = h(p), re = h(I), E = m(I, 2);
  E.__change = ({ target: de }) => t.actor.update({ "system.details.height": de.value });
  var D = m(p, 2), F = h(D), S = h(F), L = m(F, 2);
  L.__change = ({ target: de }) => t.actor.update({ "system.details.weight": de.value });
  var P = m(D, 2), j = h(P), K = h(j), Y = m(j, 2), z = h(Y), J = m(Y, 2);
  J.__click = () => t.actor.configureLanguageProficiencies();
  var ee = m(P, 2), ae = h(ee), oe = h(ae), k = m(ae, 2), C = h(k), U = m(k, 2);
  U.__click = () => t.actor.configureArmorProficiencies();
  var y = m(ee, 2), R = h(y), W = h(R), X = m(R, 2), B = h(X), Z = m(X, 2);
  Z.__click = () => t.actor.configureWeaponProficiencies();
  var se = m(y, 2), ce = h(se), Se = h(ce), le = m(ce, 2), Ee = h(le);
  js(Ee, () => u(n).notes ?? ""), Q(
    (de, xe, qt, vt, Kt, Zn, $n, ea, ta, Cn, na, In, aa) => {
      T(d, de), Ae(v, u(n).age ?? ""), v.disabled = !t.editingEnabled, T(w, xe), Ae(N, u(n).gender ?? ""), N.disabled = !t.editingEnabled, T(re, qt), Ae(E, u(n).height ?? ""), M(E, "placeholder", vt), E.disabled = !t.editingEnabled, T(S, Kt), Ae(L, u(n).weight ?? ""), M(L, "placeholder", Zn), L.disabled = !t.editingEnabled, T(K, $n), T(z, u(s) || "—"), M(J, "data-tooltip", ea), J.disabled = !t.editingEnabled, T(oe, ta), T(C, u(i) || "—"), M(U, "data-tooltip", Cn), U.disabled = !t.editingEnabled, T(W, na), T(B, u(o) || "—"), M(Z, "data-tooltip", In), Z.disabled = !t.editingEnabled, T(Se, aa), M(le, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), lt("blur", le, ({ target: de }) => t.actor.update({ "system.details.notes": de.innerHTML })), O(e, c), we();
}
r(dr, "BioTab");
Ie(["change", "click"]);
var Jo = /* @__PURE__ */ H('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Qo = /* @__PURE__ */ H('<div class="nos-slot nos-slot--empty"> </div>'), Xo = /* @__PURE__ */ H("<!> <!>", 1);
function Zo(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ q(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = Xo(), s = xt(a);
  it(s, 17, () => u(n), rt, (c, l) => {
    var f = Jo(), d = h(f), v = m(d, 2);
    v.__click = () => t.actor.activateItem(u(l).id);
    var _ = h(v);
    Q(() => {
      M(d, "src", u(l).img), M(d, "alt", u(l).name), M(v, "data-tooltip", u(l).name), T(_, u(l).name);
    }), O(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = Qo(), f = h(l);
      Q((d) => T(f, d), [() => x("NWS.NoWeapons")]), O(c, l);
    }, "consequent");
    te(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  O(e, a), we();
}
r(Zo, "InventorySlots");
Ie(["click"]);
var $o = /* @__PURE__ */ H('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), el = /* @__PURE__ */ H('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), tl = /* @__PURE__ */ H('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function nl(e, t) {
  ye(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: cr
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: ur
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: fr
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: dr
    }
  ];
  let a = /* @__PURE__ */ He("features"), s = /* @__PURE__ */ q(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ q(() => t.actor.reactive.system.inventory);
  var o = tl(), c = h(o);
  it(c, 21, () => n, rt, (E, D) => {
    var F = $o();
    let S;
    F.__click = () => qe(a, u(D).name, !0);
    var L = h(F), P = m(L);
    Q(
      (j) => {
        S = Ut(F, 1, "nos-tab-btn", null, S, { "nos-tab-btn--active": u(a) === u(D).name }), Ut(L, 1, u(D).icon), T(P, ` ${j ?? ""}`);
      },
      [() => x(u(D).labelKey)]
    ), O(E, F);
  });
  var l = m(c, 2), f = h(l);
  {
    var d = /* @__PURE__ */ r((E) => {
      cr(E, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), v = /* @__PURE__ */ r((E) => {
      var D = da(), F = xt(D);
      {
        var S = /* @__PURE__ */ r((P) => {
          ur(P, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), L = /* @__PURE__ */ r((P) => {
          var j = da(), K = xt(j);
          {
            var Y = /* @__PURE__ */ r((J) => {
              fr(J, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), z = /* @__PURE__ */ r((J) => {
              var ee = da(), ae = xt(ee);
              {
                var oe = /* @__PURE__ */ r((k) => {
                  dr(k, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                te(
                  ae,
                  (k) => {
                    u(a) === "bio" && k(oe);
                  },
                  !0
                );
              }
              O(J, ee);
            }, "alternate");
            te(
              K,
              (J) => {
                u(a) === "inventory" ? J(Y) : J(z, !1);
              },
              !0
            );
          }
          O(P, j);
        }, "alternate_1");
        te(
          F,
          (P) => {
            u(a) === "spells" ? P(S) : P(L, !1);
          },
          !0
        );
      }
      O(E, D);
    }, "alternate_2");
    te(f, (E) => {
      u(a) === "features" ? E(d) : E(v, !1);
    });
  }
  var _ = m(l, 2), g = h(_), w = h(g), N = m(_, 2), p = h(N);
  Zo(p, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return t.editingEnabled;
    }
  });
  var I = m(p, 2);
  {
    var re = /* @__PURE__ */ r((E) => {
      var D = el(), F = h(D);
      Q(() => T(F, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), O(E, D);
    }, "consequent_4");
    te(I, (E) => {
      u(s) && E(re);
    });
  }
  Q((E) => T(w, E), [() => x("NWS.Weapons")]), O(e, o), we();
}
r(nl, "ContentArea");
Ie(["click"]);
var al = /* @__PURE__ */ H('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function rl(e, t) {
  ye(t, !0);
  var n = al(), a = h(n);
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
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), Q(
    (d, v, _, g, w, N, p, I, re, E) => {
      s = Ut(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), M(a, "aria-pressed", t.editingEnabled), M(a, "aria-label", d), M(a, "data-tooltip", v), Ut(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), M(o, "aria-label", _), M(o, "data-tooltip", g), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, M(c, "aria-label", w), M(c, "data-tooltip", N), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, M(l, "aria-label", p), M(l, "data-tooltip", I), M(f, "aria-label", re), M(f, "data-tooltip", E);
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
  ), O(e, n), we();
}
r(rl, "SidebarControls");
Ie(["click"]);
var il = /* @__PURE__ */ H('<div class="nos-sheet" style="position: relative;"><!> <!> <!> <!> <!> <span class="nos-logo">Nimble</span></div>');
function sl(e, t) {
  ye(t, !0);
  const n = Lr((y) => {
    const R = {
      updateActor: Hooks.on("updateActor", (W, X, B) => {
        B.diff !== !1 && W._id === t.actor.id && y();
      }),
      createItem: Hooks.on("createItem", (W) => {
        W?.actor?.id === t.actor.id && y();
      }),
      deleteItem: Hooks.on("deleteItem", (W) => {
        W?.actor?.id === t.actor.id && y();
      }),
      updateItem: Hooks.on("updateItem", (W, X, B) => {
        B.diff !== !1 && W?.actor?.id === t.actor.id && y();
      })
    };
    return () => {
      Hooks.off("updateActor", R.updateActor), Hooks.off("createItem", R.createItem), Hooks.off("deleteItem", R.deleteItem), Hooks.off("updateItem", R.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(y, R) {
      if (R === "reactive")
        return n(), y;
      const W = y[R];
      return typeof W == "function" ? W.bind(y) : W;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(y, R) {
    return Math.clamp(0, Math.round(y / R * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(y, R, W, X) {
    const B = [];
    return W && B.push(`${W.name} (${s[X] ?? X})`), y && (R ? B.push(`${y.name} (${R.name}, ${y.system.classLevel})`) : B.push(`${y.name} (${y.system.classLevel})`)), B.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(y, R) {
    if (!R) return y;
    const W = [4, 6, 8, 10, 12, 20], X = W.indexOf(y);
    return X === -1 ? y : W[Math.min(X + R, W.length - 1)];
  }
  r(f, "incrementDieSize");
  let d = /* @__PURE__ */ q(() => c(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(y) {
    a.update({ "system.attributes.hp.value": y });
  }
  r(v, "updateCurrentHP");
  function _(y) {
    a.update({ "system.attributes.hp.max": y });
  }
  r(_, "updateMaxHP");
  function g(y) {
    a.update({ "system.attributes.hp.temp": y });
  }
  r(g, "updateTempHP");
  let w = /* @__PURE__ */ q(() => a.reactive.system.resources.mana), N = /* @__PURE__ */ q(() => (u(w).max ?? 0) > 0 || (u(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((y) => y.type === "class" && y.system?.mana?.formula?.length));
  function p(y) {
    a.update({ "system.resources.mana.current": y });
  }
  r(p, "updateCurrentMana");
  function I(y) {
    const R = a.reactive.system.resources.mana, W = R.baseMax ?? 0, B = (R.max || W) - W, Z = Math.max(0, y - B);
    a.update({ "system.resources.mana.baseMax": Z });
  }
  r(I, "updateMaxMana");
  let re = /* @__PURE__ */ q(() => {
    const y = a.reactive.system.attributes.hitDice, R = a.reactive.system.attributes.bonusHitDice ?? [], W = a.reactive.items.filter((le) => le.type === "class"), X = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, B = {};
    for (const le of W) {
      const Ee = le.system.hitDieSize, de = f(Ee, X), xe = le.system.classLevel;
      B[de] ??= { current: 0, total: 0 }, B[de].total += xe, B[de].current = y[de]?.current ?? 0;
    }
    const Z = W.map((le) => f(le.system.hitDieSize, X));
    for (const le of R) {
      const Ee = f(le.size, X);
      B[Ee] ??= { current: y[Ee]?.current ?? 0, total: 0 }, B[Ee].total += le.value, Z.includes(Ee) || (B[Ee].current = y[Ee]?.current ?? 0);
    }
    const se = R.map((le) => f(le.size, X));
    for (const [le, Ee] of Object.entries(y ?? {})) {
      const de = Number(le), xe = f(de, X), qt = Ee?.bonus ?? 0;
      if (qt > 0) {
        B[xe] ??= { current: 0, total: 0 }, B[xe].total += qt;
        const vt = Z.includes(xe), Kt = se.includes(xe);
        !vt && !Kt && (B[xe].current = y[xe]?.current ?? 0);
      }
    }
    let ce = 0, Se = 0;
    for (const le of Object.values(B))
      ce += le.current, Se += le.total;
    return { bySize: B, value: ce, max: Se };
  });
  async function E(y) {
    await a.updateCurrentHitDice(y);
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
  let S = /* @__PURE__ */ q(() => a.reactive.items.find((y) => y.type === "class") ?? null), L = /* @__PURE__ */ q(() => {
    const y = a.reactive.items.find((B) => B.type === "class") ?? null, R = a.reactive.items.find((B) => B.type === "subclass") ?? null, W = a.reactive.items.find((B) => B.type === "ancestry") ?? null, X = a.reactive.system.attributes.sizeCategory;
    return l(y, R, W, X);
  }), P = /* @__PURE__ */ q(() => a.reactive.system.attributes.wounds);
  function j(y) {
    let R = y;
    y <= u(P).value && (R = y - 1), a.update({ "system.attributes.wounds.value": R });
  }
  r(j, "toggleWounds");
  let K = /* @__PURE__ */ q(() => a.reactive.flags.nimble), Y = /* @__PURE__ */ q(() => u(K)?.editingEnabled ?? !0);
  const z = Ks(!1, (y) => (Ss(() => y(u(Y))), () => {
  }));
  async function J() {
    await a.setFlag("nimble", "editingEnabled", !u(Y));
  }
  r(J, "toggleEditingEnabled"), Mn("actor", a), Mn("document", a), Mn("application", t.sheet), Mn("editingEnabled", z);
  var ee = il(), ae = h(ee);
  Zs(ae, {
    get actor() {
      return a;
    },
    get metaData() {
      return u(L);
    },
    get editingEnabled() {
      return u(Y);
    },
    get hitDiceData() {
      return u(re);
    }
  });
  var oe = m(ae, 2);
  fo(oe, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(Y);
    },
    get isBloodied() {
      return u(d);
    },
    get hitDiceData() {
      return u(re);
    },
    get hasMana() {
      return u(N);
    },
    get mana() {
      return u(w);
    },
    get wounds() {
      return u(P);
    },
    toggleWounds: j,
    updateCurrentHP: v,
    updateMaxHP: _,
    updateTempHP: g,
    updateCurrentMana: p,
    updateMaxMana: I,
    updateCurrentHitDice: E,
    rollHitDice: D,
    editCurrentHitDice: F
  });
  var k = m(oe, 2);
  mo(k, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(Y);
    }
  });
  var C = m(k, 2);
  nl(C, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(Y);
    },
    get hasMana() {
      return u(N);
    },
    get mana() {
      return u(w);
    },
    updateCurrentMana: p,
    updateMaxMana: I
  });
  var U = m(C, 2);
  rl(U, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(Y);
    },
    toggleEditingEnabled: J,
    get classItem() {
      return u(S);
    }
  }), O(e, ee), we();
}
r(sl, "WhiteSheet");
const qn = class qn extends Gs(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  props;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = sl;
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
        if (!Object.values(a.classes ?? {}).some((v) => v.identifier === c)) {
          const v = CONFIG.NIMBLE?.classes?.[c] ?? c;
          ui.notifications?.warn(`The subclass "${o.name}" requires the ${v} class.`);
          continue;
        }
        const d = a.items.find((v) => v.type === "subclass" && v.system?.parentClass === c);
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
r(qn, "WhiteCharacterSheet"), Xe(qn, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Ma = qn;
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
