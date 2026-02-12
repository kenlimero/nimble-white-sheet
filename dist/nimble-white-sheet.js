var Ga = Object.defineProperty;
var Ya = (e) => {
  throw TypeError(e);
};
var yi = (e, t, n) => t in e ? Ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t) => Ga(e, "name", { value: t, configurable: !0 });
var We = (e, t, n) => yi(e, typeof t != "symbol" ? t + "" : t, n), oa = (e, t, n) => t.has(e) || Ya("Cannot " + n);
var b = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), V = (e, t, n) => t.has(e) ? Ya("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), G = (e, t, n, a) => (oa(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), pe = (e, t, n) => (oa(e, t, "access private method"), n);
const he = /* @__PURE__ */ Symbol(), wi = /* @__PURE__ */ Symbol("filename"), Ei = "http://www.w3.org/1999/xhtml", Ja = globalThis.process?.env?.NODE_ENV, I = Ja && !Ja.toLowerCase().startsWith("prod");
var vr = Array.isArray, Si = Array.prototype.indexOf, Ft = Array.prototype.includes, Kn = Array.from, jt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, xi = Object.getOwnPropertyDescriptors, ki = Object.prototype, Ni = Array.prototype, _r = Object.getPrototypeOf, Qa = Object.isExtensible;
const la = /* @__PURE__ */ r(() => {
}, "noop");
function Ti(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
r(Ti, "run_all");
function hr() {
  var e, t, n = new Promise((a, s) => {
    e = a, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
r(hr, "deferred");
function br(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
r(br, "to_array");
const me = 2, ha = 4, Vn = 8, mr = 1 << 24, vt = 16, $e = 32, qt = 64, Oa = 128, je = 512, ve = 1024, ge = 2048, Qe = 4096, Ce = 8192, pt = 16384, La = 32768, ln = 65536, Rn = 1 << 17, gr = 1 << 18, _n = 1 << 19, Ii = 1 << 20, dt = 1 << 25, Nt = 32768, ba = 1 << 21, Gn = 1 << 22, yt = 1 << 23, Zt = /* @__PURE__ */ Symbol("$state"), Ai = /* @__PURE__ */ Symbol(""), pr = /* @__PURE__ */ Symbol("proxy path");
var $t;
const Jt = new ($t = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, r($t, "StaleReactionError"), $t)();
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
function Ci() {
  if (I) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
r(Ci, "async_derived_orphan");
function Xa() {
  if (I) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
r(Xa, "bind_invalid_checkbox_value");
function Di() {
  if (I) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
r(Di, "derived_references_self");
function yr(e, t, n) {
  if (I) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
r(yr, "each_key_duplicate");
function Wi(e) {
  if (I) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
r(Wi, "effect_in_teardown");
function Oi() {
  if (I) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
r(Oi, "effect_in_unowned_derived");
function Li(e) {
  if (I) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
r(Li, "effect_orphan");
function Hi() {
  if (I) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
r(Hi, "effect_update_depth_exceeded");
function Pi(e) {
  if (I) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
r(Pi, "rune_outside_svelte");
function Ri() {
  if (I) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
r(Ri, "state_descriptors_fixed");
function Fi() {
  if (I) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
r(Fi, "state_prototype_fixed");
function ji() {
  if (I) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
r(ji, "state_unsafe_mutation");
function zi() {
  if (I) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
r(zi, "svelte_boundary_reset_onerror");
var Yn = "font-weight: bold", Jn = "font-weight: normal";
function Ui() {
  I ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Yn, Jn) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
r(Ui, "lifecycle_double_unmount");
function ca(e) {
  I ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Yn, Jn) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
r(ca, "state_proxy_equality_mismatch");
function Bi() {
  I ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Yn, Jn) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
r(Bi, "state_proxy_unmount");
function qi() {
  I ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Yn, Jn) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
r(qi, "svelte_boundary_reset_noop");
function wr(e) {
  return e === this.v;
}
r(wr, "equals");
function Er(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
r(Er, "safe_not_equal");
function Sr(e) {
  return !Er(e, this.v);
}
r(Sr, "safe_equals");
let Ki = !1;
function et(e, t) {
  return e.label = t, xr(e.v, t), e;
}
r(et, "tag");
function xr(e, t) {
  return e?.[pr]?.(t), e;
}
r(xr, "tag_proxy");
function Vi(e) {
  const t = new Error(), n = Gi();
  return n.length === 0 ? null : (n.unshift(`
`), jt(t, "stack", {
    value: n.join(`
`)
  }), jt(t, "name", {
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
function cn(e) {
  be = e;
}
r(cn, "set_component_context");
let wn = null;
function Fn(e) {
  wn = e;
}
r(Fn, "set_dev_stack");
let Tn = null;
function Za(e) {
  Tn = e;
}
r(Za, "set_dev_current_component_function");
function Wn(e, t) {
  return Yi("setContext").set(e, t), t;
}
r(Wn, "setContext");
function ye(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, I && (be.function = n, Tn = n);
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
      qr(a);
  }
  return t.i = !0, be = t.p, I && (Tn = be?.function ?? null), /** @type {T} */
  {};
}
r(we, "pop");
function kr() {
  return !0;
}
r(kr, "is_runes");
function Yi(e) {
  return be === null && Mi(e), be.c ??= new Map(Ji(be) || void 0);
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
function Nr() {
  var e = At;
  At = [], Ti(e);
}
r(Nr, "run_micro_tasks");
function wt(e) {
  if (At.length === 0 && !pn) {
    var t = At;
    queueMicrotask(() => {
      t === At && Nr();
    });
  }
  At.push(e);
}
r(wt, "queue_micro_task");
function Qi() {
  for (; At.length > 0; )
    Nr();
}
r(Qi, "flush_tasks");
const ma = /* @__PURE__ */ new WeakMap();
function Tr(e) {
  var t = ae;
  if (t === null)
    return ee.f |= yt, e;
  if (I && e instanceof Error && !ma.has(e) && ma.set(e, Xi(e, t)), (t.f & La) === 0) {
    if ((t.f & Oa) === 0)
      throw I && !t.parent && e instanceof Error && Ir(e), e;
    t.b.error(e);
  } else
    un(e, t);
}
r(Tr, "handle_error");
function un(e, t) {
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
  throw I && e instanceof Error && Ir(e), e;
}
r(un, "invoke_error_boundary");
function Xi(e, t) {
  const n = Xt(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = ja ? "  " : "	", s = `
${a}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${a}in ${i.function?.[wi].split("/").pop()}`, i = i.p;
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
function Ir(e) {
  const t = ma.get(e);
  t && (jt(e, "message", {
    value: t.message
  }), jt(e, "stack", {
    value: t.stack
  }));
}
r(Ir, "apply_adjustments");
const Zi = -7169;
function ce(e, t) {
  e.f = e.f & Zi | t;
}
r(ce, "set_signal_status");
function Ha(e) {
  (e.f & je) !== 0 || e.deps === null ? ce(e, ve) : ce(e, Qe);
}
r(Ha, "update_derived_status");
function Ar(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & Nt) === 0 || (t.f ^= Nt, Ar(
        /** @type {Derived} */
        t.deps
      ));
}
r(Ar, "clear_marked");
function Mr(e, t, n) {
  (e.f & ge) !== 0 ? t.add(e) : (e.f & Qe) !== 0 && n.add(e), Ar(e.deps), ce(e, ve);
}
r(Mr, "defer_effect");
const On = /* @__PURE__ */ new Set();
let ie = null, ga = null, Ve = null, ke = [], Qn = null, pa = !1, pn = !1;
var en, tn, Ct, nn, Sn, xn, Dt, ut, an, ot, ya, wa, Cr;
const Un = class Un {
  constructor() {
    V(this, ot);
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
    V(this, en, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    V(this, tn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    V(this, Ct, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    V(this, nn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    V(this, Sn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    V(this, xn, /* @__PURE__ */ new Set());
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
    V(this, ut, /* @__PURE__ */ new Map());
    We(this, "is_fork", !1);
    V(this, an, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, nn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, ut).has(t) || b(this, ut).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, ut).get(t);
    if (n) {
      b(this, ut).delete(t);
      for (var a of n.d)
        ce(a, ge), Ge(a);
      for (a of n.m)
        ce(a, Qe), Ge(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    ke = [], this.apply();
    var n = [], a = [];
    for (const s of t)
      pe(this, ot, ya).call(this, s, n, a);
    if (this.is_deferred()) {
      pe(this, ot, wa).call(this, a), pe(this, ot, wa).call(this, n);
      for (const [s, i] of b(this, ut))
        Lr(s, i);
    } else {
      for (const s of b(this, en)) s();
      b(this, en).clear(), b(this, Ct) === 0 && pe(this, ot, Cr).call(this), ga = this, ie = null, $a(a), $a(n), ga = null, b(this, Sn)?.resolve();
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
    n !== he && !this.previous.has(t) && this.previous.set(t, n), (t.f & yt) === 0 && (this.current.set(t, t.v), Ve?.set(t, t.v));
  }
  activate() {
    ie = this, this.apply();
  }
  deactivate() {
    ie === this && (ie = null, Ve = null);
  }
  flush() {
    if (this.activate(), ke.length > 0) {
      if (Dr(), ie !== null && ie !== this)
        return;
    } else b(this, Ct) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, tn)) t(this);
    b(this, tn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    G(this, Ct, b(this, Ct) + 1), t && G(this, nn, b(this, nn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    G(this, Ct, b(this, Ct) - 1), t && G(this, nn, b(this, nn) - 1), !b(this, an) && (G(this, an, !0), wt(() => {
      G(this, an, !1), this.is_deferred() ? ke.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, xn))
      b(this, Dt).delete(t), ce(t, ge), Ge(t);
    for (const t of b(this, Dt))
      ce(t, Qe), Ge(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, en).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, tn).add(t);
  }
  settled() {
    return (b(this, Sn) ?? G(this, Sn, hr())).promise;
  }
  static ensure() {
    if (ie === null) {
      const t = ie = new Un();
      On.add(ie), pn || wt(() => {
        ie === t && t.flush();
      });
    }
    return ie;
  }
  apply() {
  }
};
en = new WeakMap(), tn = new WeakMap(), Ct = new WeakMap(), nn = new WeakMap(), Sn = new WeakMap(), xn = new WeakMap(), Dt = new WeakMap(), ut = new WeakMap(), an = new WeakMap(), ot = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ya = /* @__PURE__ */ r(function(t, n, a) {
  t.f ^= ve;
  for (var s = t.first, i = null; s !== null; ) {
    var o = s.f, c = (o & ($e | qt)) !== 0, l = c && (o & ve) !== 0, f = l || (o & Ce) !== 0 || b(this, ut).has(s);
    if (!f && s.fn !== null) {
      c ? s.f ^= ve : i !== null && (o & (ha | Vn | mr)) !== 0 ? i.b.defer_effect(s) : (o & ha) !== 0 ? n.push(s) : An(s) && ((o & vt) !== 0 && b(this, Dt).add(s), En(s));
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
    Mr(t[n], b(this, xn), b(this, Dt));
}, "#defer_effects"), Cr = /* @__PURE__ */ r(function() {
  var s;
  if (On.size > 1) {
    this.previous.clear();
    var t = Ve, n = !0;
    for (const i of On) {
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
        var a = ke;
        ke = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const d of o)
          Wr(d, c, l, f);
        if (ke.length > 0) {
          ie = i, i.apply();
          for (const d of ke)
            pe(s = i, ot, ya).call(s, d, [], []);
          i.deactivate();
        }
        ke = a;
      }
    }
    ie = null, Ve = t;
  }
  this.committed = !0, On.delete(this);
}, "#commit"), r(Un, "Batch");
let Et = Un;
function $i(e) {
  var t = pn;
  pn = !0;
  try {
    for (var n; ; ) {
      if (Qi(), ke.length === 0 && (ie?.flush(), ke.length === 0))
        return Qn = null, /** @type {T} */
        n;
      Dr();
    }
  } finally {
    pn = t;
  }
}
r($i, "flushSync");
function Dr() {
  pa = !0;
  var e = I ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; ke.length > 0; ) {
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
        es();
      }
      if (n.process(ke), St.clear(), I)
        for (const i of n.current.keys())
          e.add(i);
    }
  } finally {
    if (ke = [], pa = !1, Qn = null, I)
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
    Hi();
  } catch (e) {
    I && jt(e, "stack", { value: "" }), un(e, Qn);
  }
}
r(es, "infinite_loop_guard");
let lt = null;
function $a(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (pt | Ce)) === 0 && An(a) && (lt = /* @__PURE__ */ new Set(), En(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? Jr(a) : a.fn = null), lt?.size > 0)) {
        St.clear();
        for (const s of lt) {
          if ((s.f & (pt | Ce)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            lt.has(o) && (lt.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (pt | Ce)) === 0 && En(l);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
r($a, "flush_queued_effects");
function Wr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & me) !== 0 ? Wr(
        /** @type {Derived} */
        s,
        t,
        n,
        a
      ) : (i & (Gn | vt)) !== 0 && (i & ge) === 0 && Or(s, t, a) && (ce(s, ge), Ge(
        /** @type {Effect} */
        s
      ));
    }
}
r(Wr, "mark_effects");
function Or(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ft.call(t, s))
        return !0;
      if ((s.f & me) !== 0 && Or(
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
r(Or, "depends_on");
function Ge(e) {
  for (var t = Qn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (pa && t === ae && (n & vt) !== 0 && (n & gr) === 0)
      return;
    if ((n & (qt | $e)) !== 0) {
      if ((n & ve) === 0) return;
      t.f ^= ve;
    }
  }
  ke.push(t);
}
r(Ge, "schedule_effect");
function Lr(e, t) {
  if (!((e.f & $e) !== 0 && (e.f & ve) !== 0)) {
    (e.f & ge) !== 0 ? t.d.push(e) : (e.f & Qe) !== 0 && t.m.push(e), ce(e, ve);
    for (var n = e.first; n !== null; )
      Lr(n, t), n = n.next;
  }
}
r(Lr, "reset_branch");
function Hr(e) {
  let t = 0, n = zt(0), a;
  return I && et(n, "createSubscriber version"), () => {
    za() && (u(n), Kr(() => (t === 0 && (a = ii(() => e(() => yn(n)))), t += 1, () => {
      wt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, yn(n));
      });
    })));
  };
}
r(Hr, "createSubscriber");
var ts = ln | _n | Oa;
function ns(e, t, n) {
  new Ea(e, t, n);
}
r(ns, "boundary");
var Le, Wa, nt, Wt, at, He, xe, rt, ft, bt, Ot, mt, rn, Lt, sn, on, it, Bn, _e, as, rs, Sa, Ln, Hn, xa;
const Ka = class Ka {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    V(this, _e);
    /** @type {Boundary | null} */
    We(this, "parent");
    We(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, Le);
    /** @type {TemplateNode | null} */
    V(this, Wa, null);
    /** @type {BoundaryProps} */
    V(this, nt);
    /** @type {((anchor: Node) => void)} */
    V(this, Wt);
    /** @type {Effect} */
    V(this, at);
    /** @type {Effect | null} */
    V(this, He, null);
    /** @type {Effect | null} */
    V(this, xe, null);
    /** @type {Effect | null} */
    V(this, rt, null);
    /** @type {DocumentFragment | null} */
    V(this, ft, null);
    /** @type {TemplateNode | null} */
    V(this, bt, null);
    V(this, Ot, 0);
    V(this, mt, 0);
    V(this, rn, !1);
    V(this, Lt, !1);
    /** @type {Set<Effect>} */
    V(this, sn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    V(this, on, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    V(this, it, null);
    V(this, Bn, Hr(() => (G(this, it, zt(b(this, Ot))), I && et(b(this, it), "$effect.pending()"), () => {
      G(this, it, null);
    })));
    G(this, Le, t), G(this, nt, n), G(this, Wt, a), this.parent = /** @type {Effect} */
    ae.b, this.is_pending = !!b(this, nt).pending, G(this, at, Ua(() => {
      ae.b = this;
      {
        var s = pe(this, _e, Sa).call(this);
        try {
          G(this, He, Re(() => a(s)));
        } catch (i) {
          this.error(i);
        }
        b(this, mt) > 0 ? pe(this, _e, Hn).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, bt)?.remove();
      };
    }, ts));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Mr(t, b(this, sn), b(this, on));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, nt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    pe(this, _e, xa).call(this, t), G(this, Ot, b(this, Ot) + t), !(!b(this, it) || b(this, rn)) && (G(this, rn, !0), wt(() => {
      G(this, rn, !1), b(this, it) && dn(b(this, it), b(this, Ot));
    }));
  }
  get_effect_pending() {
    return b(this, Bn).call(this), u(
      /** @type {Source<number>} */
      b(this, it)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, nt).onerror;
    let a = b(this, nt).failed;
    if (b(this, Lt) || !n && !a)
      throw t;
    b(this, He) && (Te(b(this, He)), G(this, He, null)), b(this, xe) && (Te(b(this, xe)), G(this, xe, null)), b(this, rt) && (Te(b(this, rt)), G(this, rt, null));
    var s = !1, i = !1;
    const o = /* @__PURE__ */ r(() => {
      if (s) {
        qi();
        return;
      }
      s = !0, i && zi(), Et.ensure(), G(this, Ot, 0), b(this, rt) !== null && Pt(b(this, rt), () => {
        G(this, rt, null);
      }), this.is_pending = this.has_pending_snippet(), G(this, He, pe(this, _e, Ln).call(this, () => (G(this, Lt, !1), Re(() => b(this, Wt).call(this, b(this, Le)))))), b(this, mt) > 0 ? pe(this, _e, Hn).call(this) : this.is_pending = !1;
    }, "reset");
    wt(() => {
      try {
        i = !0, n?.(t, o), i = !1;
      } catch (c) {
        un(c, b(this, at) && b(this, at).parent);
      }
      a && G(this, rt, pe(this, _e, Ln).call(this, () => {
        Et.ensure(), G(this, Lt, !0);
        try {
          return Re(() => {
            a(
              b(this, Le),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return un(
            c,
            /** @type {Effect} */
            b(this, at).parent
          ), null;
        } finally {
          G(this, Lt, !1);
        }
      }));
    });
  }
};
Le = new WeakMap(), Wa = new WeakMap(), nt = new WeakMap(), Wt = new WeakMap(), at = new WeakMap(), He = new WeakMap(), xe = new WeakMap(), rt = new WeakMap(), ft = new WeakMap(), bt = new WeakMap(), Ot = new WeakMap(), mt = new WeakMap(), rn = new WeakMap(), Lt = new WeakMap(), sn = new WeakMap(), on = new WeakMap(), it = new WeakMap(), Bn = new WeakMap(), _e = new WeakSet(), as = /* @__PURE__ */ r(function() {
  try {
    G(this, He, Re(() => b(this, Wt).call(this, b(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), rs = /* @__PURE__ */ r(function() {
  const t = b(this, nt).pending;
  t && (G(this, xe, Re(() => t(b(this, Le)))), wt(() => {
    var n = pe(this, _e, Sa).call(this);
    G(this, He, pe(this, _e, Ln).call(this, () => (Et.ensure(), Re(() => b(this, Wt).call(this, n))))), b(this, mt) > 0 ? pe(this, _e, Hn).call(this) : (Pt(
      /** @type {Effect} */
      b(this, xe),
      () => {
        G(this, xe, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Sa = /* @__PURE__ */ r(function() {
  var t = b(this, Le);
  return this.is_pending && (G(this, bt, xt()), b(this, Le).before(b(this, bt)), t = b(this, bt)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Ln = /* @__PURE__ */ r(function(t) {
  var n = ae, a = ee, s = be;
  Je(b(this, at)), Ue(b(this, at)), cn(b(this, at).ctx);
  try {
    return t();
  } catch (i) {
    return Tr(i), null;
  } finally {
    Je(n), Ue(a), cn(s);
  }
}, "#run"), Hn = /* @__PURE__ */ r(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, nt).pending
  );
  b(this, He) !== null && (G(this, ft, document.createDocumentFragment()), b(this, ft).append(
    /** @type {TemplateNode} */
    b(this, bt)
  ), Zr(b(this, He), b(this, ft))), b(this, xe) === null && G(this, xe, Re(() => t(b(this, Le))));
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
  if (G(this, mt, b(this, mt) + t), b(this, mt) === 0) {
    this.is_pending = !1;
    for (const a of b(this, sn))
      ce(a, ge), Ge(a);
    for (const a of b(this, on))
      ce(a, Qe), Ge(a);
    b(this, sn).clear(), b(this, on).clear(), b(this, xe) && Pt(b(this, xe), () => {
      G(this, xe, null);
    }), b(this, ft) && (b(this, Le).before(b(this, ft)), G(this, ft, null));
  }
}, "#update_pending_count"), r(Ka, "Boundary");
let Ea = Ka;
function is(e, t, n, a) {
  const s = Pa;
  var i = e.filter((_) => !_.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(s));
    return;
  }
  var o = ie, c = (
    /** @type {Effect} */
    ae
  ), l = ss(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function d(_) {
    l();
    try {
      a(_);
    } catch (p) {
      (c.f & pt) === 0 && un(p, c);
    }
    o?.deactivate(), ka();
  }
  if (r(d, "finish"), n.length === 0) {
    f.then(() => d(t.map(s)));
    return;
  }
  function v() {
    l(), Promise.all(n.map((_) => /* @__PURE__ */ ls(_))).then((_) => d([...t.map(s), ..._])).catch((_) => un(_, c));
  }
  r(v, "run"), f ? f.then(v) : v();
}
r(is, "flatten");
function ss() {
  var e = ae, t = ee, n = be, a = ie;
  if (I)
    var s = wn;
  return /* @__PURE__ */ r(function(o = !0) {
    Je(e), Ue(t), cn(n), o && a?.activate(), I && Fn(s);
  }, "restore");
}
r(ss, "capture");
function ka() {
  Je(null), Ue(null), cn(null), I && Fn(null);
}
r(ka, "unset_context");
const os = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  var t = me | ge, n = ee !== null && (ee.f & me) !== 0 ? (
    /** @type {Derived} */
    ee
  ) : null;
  return ae !== null && (ae.f |= _n), {
    ctx: be,
    deps: null,
    effects: null,
    equals: wr,
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
r(Pa, "derived");
// @__NO_SIDE_EFFECTS__
function ls(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    ae
  );
  a === null && Ci();
  var s = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = zt(
    /** @type {V} */
    he
  );
  I && (o.label = t);
  var c = !ee, l = /* @__PURE__ */ new Map();
  return ks(() => {
    var f = hr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        d === ie && d.committed && d.deactivate(), ka();
      });
    } catch (p) {
      f.reject(p), ka();
    }
    var d = (
      /** @type {Batch} */
      ie
    );
    if (c) {
      var v = s.is_rendered();
      s.update_pending_count(1), d.increment(v), l.get(d)?.reject(Jt), l.delete(d), l.set(d, f);
    }
    const _ = /* @__PURE__ */ r((p, w = void 0) => {
      if (d.activate(), w)
        w !== Jt && (o.f |= yt, dn(o, w));
      else {
        (o.f & yt) !== 0 && (o.f ^= yt), dn(o, p);
        for (const [T, y] of l) {
          if (l.delete(T), T === d) break;
          y.reject(Jt);
        }
      }
      c && (s.update_pending_count(-1), d.decrement(v));
    }, "handler");
    f.promise.then(_, (p) => _(null, p || "unknown"));
  }), Br(() => {
    for (const f of l.values())
      f.reject(Jt);
  }), I && (o.f |= Gn), new Promise((f) => {
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
function z(e) {
  const t = /* @__PURE__ */ Pa(e);
  return $r(t), t;
}
r(z, "user_derived");
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ Pa(e);
  return t.equals = Sr, t;
}
r(cs, "derived_safe_equal");
function Na(e) {
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
r(Na, "destroy_derived_effects");
let ua = [];
function us(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (t.f & pt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
r(us, "get_derived_parent_effect");
function Ra(e) {
  var t, n = ae;
  if (Je(us(e)), I) {
    let a = fn;
    er(/* @__PURE__ */ new Set());
    try {
      Ft.call(ua, e) && Di(), ua.push(e), e.f &= ~Nt, Na(e), t = Ta(e);
    } finally {
      Je(n), er(a), ua.pop();
    }
  } else
    try {
      e.f &= ~Nt, Na(e), t = Ta(e);
    } finally {
      Je(n);
    }
  return t;
}
r(Ra, "execute_derived");
function Pr(e) {
  var t = Ra(e);
  if (!e.equals(t) && (e.wv = ti(), (!ie?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ce(e, ve);
    return;
  }
  Ut || (Ve !== null ? (za() || ie?.is_fork) && Ve.set(e, t) : Ha(e));
}
r(Pr, "update_derived");
let fn = /* @__PURE__ */ new Set();
const St = /* @__PURE__ */ new Map();
function er(e) {
  fn = e;
}
r(er, "set_eager_effects");
let Fa = !1;
function fs() {
  Fa = !0;
}
r(fs, "set_eager_effects_deferred");
function zt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wr,
    rv: 0,
    wv: 0
  };
  return n;
}
r(zt, "source");
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const n = zt(e);
  return $r(n), n;
}
r(Pe, "state");
// @__NO_SIDE_EFFECTS__
function ds(e, t = !1, n = !0) {
  const a = zt(e);
  return t || (a.equals = Sr), a;
}
r(ds, "mutable_source");
function Ke(e, t, n = !1) {
  ee !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ye || (ee.f & Rn) !== 0) && kr() && (ee.f & (me | vt | Gn | Rn)) !== 0 && (ze === null || !Ft.call(ze, e)) && ji();
  let a = n ? Qt(t) : t;
  return I && xr(
    a,
    /** @type {string} */
    e.label
  ), dn(e, a);
}
r(Ke, "set");
function dn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ut ? St.set(e, t) : St.set(e, n), e.v = t;
    var a = Et.ensure();
    if (a.capture(e, n), I) {
      if (ae !== null) {
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
      ae !== null && (e.set_during_effect = !0);
    }
    if ((e.f & me) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ge) !== 0 && Ra(s), Ha(s);
    }
    e.wv = ti(), Fr(e, ge), ae !== null && (ae.f & ve) !== 0 && (ae.f & ($e | qt)) === 0 && (Oe === null ? Ts([e]) : Oe.push(e)), !a.is_fork && fn.size > 0 && !Fa && Rr();
  }
  return t;
}
r(dn, "internal_set");
function Rr() {
  Fa = !1;
  for (const e of fn)
    (e.f & ve) !== 0 && ce(e, Qe), An(e) && En(e);
  fn.clear();
}
r(Rr, "flush_eager_effects");
function yn(e) {
  Ke(e, e.v + 1);
}
r(yn, "increment");
function Fr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var i = n[s], o = i.f;
      if (I && (o & Rn) !== 0) {
        fn.add(i);
        continue;
      }
      var c = (o & ge) === 0;
      if (c && ce(i, t), (o & me) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        Ve?.delete(l), (o & Nt) === 0 && (o & je && (i.f |= Nt), Fr(l, Qe));
      } else c && ((o & vt) !== 0 && lt !== null && lt.add(
        /** @type {Effect} */
        i
      ), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
r(Fr, "mark_reactions");
const vs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Qt(e) {
  if (typeof e != "object" || e === null || Zt in e)
    return e;
  const t = _r(e);
  if (t !== ki && t !== Ni)
    return e;
  var n = /* @__PURE__ */ new Map(), a = vr(e), s = /* @__PURE__ */ Pe(0), i = Rt, o = /* @__PURE__ */ r((d) => {
    if (Rt === i)
      return d();
    var v = ee, _ = Rt;
    Ue(null), rr(i);
    var p = d();
    return Ue(v), rr(_), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ Pe(
    /** @type {any[]} */
    e.length
  )), I && (e = /** @type {any} */
  hs(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(d) {
    if (!l) {
      l = !0, c = d, et(s, `${c} version`);
      for (const [v, _] of n)
        et(_, It(c, v));
      l = !1;
    }
  }
  return r(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, v, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Ri();
        var p = n.get(v);
        return p === void 0 ? p = o(() => {
          var w = /* @__PURE__ */ Pe(_.value);
          return n.set(v, w), I && typeof v == "string" && et(w, It(c, v)), w;
        }) : Ke(p, _.value, !0), !0;
      },
      deleteProperty(d, v) {
        var _ = n.get(v);
        if (_ === void 0) {
          if (v in d) {
            const p = o(() => /* @__PURE__ */ Pe(he));
            n.set(v, p), yn(s), I && et(p, It(c, v));
          }
        } else
          Ke(_, he), yn(s);
        return !0;
      },
      get(d, v, _) {
        if (v === Zt)
          return e;
        if (I && v === pr)
          return f;
        var p = n.get(v), w = v in d;
        if (p === void 0 && (!w || Xt(d, v)?.writable) && (p = o(() => {
          var y = Qt(w ? d[v] : he), W = /* @__PURE__ */ Pe(y);
          return I && et(W, It(c, v)), W;
        }), n.set(v, p)), p !== void 0) {
          var T = u(p);
          return T === he ? void 0 : T;
        }
        return Reflect.get(d, v, _);
      },
      getOwnPropertyDescriptor(d, v) {
        var _ = Reflect.getOwnPropertyDescriptor(d, v);
        if (_ && "value" in _) {
          var p = n.get(v);
          p && (_.value = u(p));
        } else if (_ === void 0) {
          var w = n.get(v), T = w?.v;
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
      has(d, v) {
        if (v === Zt)
          return !0;
        var _ = n.get(v), p = _ !== void 0 && _.v !== he || Reflect.has(d, v);
        if (_ !== void 0 || ae !== null && (!p || Xt(d, v)?.writable)) {
          _ === void 0 && (_ = o(() => {
            var T = p ? Qt(d[v]) : he, y = /* @__PURE__ */ Pe(T);
            return I && et(y, It(c, v)), y;
          }), n.set(v, _));
          var w = u(_);
          if (w === he)
            return !1;
        }
        return p;
      },
      set(d, v, _, p) {
        var w = n.get(v), T = v in d;
        if (a && v === "length")
          for (var y = _; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var W = n.get(y + "");
            W !== void 0 ? Ke(W, he) : y in d && (W = o(() => /* @__PURE__ */ Pe(he)), n.set(y + "", W), I && et(W, It(c, y)));
          }
        if (w === void 0)
          (!T || Xt(d, v)?.writable) && (w = o(() => /* @__PURE__ */ Pe(void 0)), I && et(w, It(c, v)), Ke(w, Qt(_)), n.set(v, w));
        else {
          T = w.v !== he;
          var se = o(() => Qt(_));
          Ke(w, se);
        }
        var S = Reflect.getOwnPropertyDescriptor(d, v);
        if (S?.set && S.set.call(p, _), !T) {
          if (a && typeof v == "string") {
            var D = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(v);
            Number.isInteger(F) && F >= D.v && Ke(D, F + 1);
          }
          yn(s);
        }
        return !0;
      },
      ownKeys(d) {
        u(s);
        var v = Reflect.ownKeys(d).filter((w) => {
          var T = n.get(w);
          return T === void 0 || T.v !== he;
        });
        for (var [_, p] of n)
          p.v !== he && !(_ in d) && v.push(_);
        return v;
      },
      setPrototypeOf() {
        Fi();
      }
    }
  );
}
r(Qt, "proxy");
function It(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : vs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
r(It, "get_label");
function fa(e) {
  try {
    if (e !== null && typeof e == "object" && Zt in e)
      return e[Zt];
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
var tr, ja, jr, zr;
function ms() {
  if (tr === void 0) {
    tr = window, ja = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    jr = Xt(t, "firstChild").get, zr = Xt(t, "nextSibling").get, Qa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qa(n) && (n.__t = void 0), I && (e.__svelte_meta = null, bs());
  }
}
r(ms, "init_operations");
function xt(e = "") {
  return document.createTextNode(e);
}
r(xt, "create_text");
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return (
    /** @type {TemplateNode | null} */
    jr.call(e)
  );
}
r(gt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function In(e) {
  return (
    /** @type {TemplateNode | null} */
    zr.call(e)
  );
}
r(In, "get_next_sibling");
function h(e, t) {
  return /* @__PURE__ */ gt(e);
}
r(h, "child");
function kt(e, t = !1) {
  {
    var n = /* @__PURE__ */ gt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
  }
}
r(kt, "first_child");
function m(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ In(a);
  return a;
}
r(m, "sibling");
function gs(e) {
  e.textContent = "";
}
r(gs, "clear_text_content");
function Ur() {
  return !1;
}
r(Ur, "should_defer_append");
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
  var t = ee, n = ae;
  Ue(null), Je(null);
  try {
    return e();
  } finally {
    Ue(t), Je(n);
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
  ae === null && (ee === null && Li(e), Oi()), Ut && Wi(e);
}
r(ws, "validate_effect");
function Es(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
r(Es, "push_effect");
function Tt(e, t, n) {
  var a = ae;
  if (I)
    for (; a !== null && (a.f & Rn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Ce) !== 0 && (e |= Ce);
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
  if (I && (s.component_function = Tn), n)
    try {
      En(s), s.f |= La;
    } catch (c) {
      throw Te(s), c;
    }
  else t !== null && Ge(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & _n) === 0 && (i = i.first, (e & vt) !== 0 && (e & ln) !== 0 && i !== null && (i.f |= ln)), i !== null && (i.parent = a, a !== null && Es(i, a), ee !== null && (ee.f & me) !== 0 && (e & qt) === 0)) {
    var o = (
      /** @type {Derived} */
      ee
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
r(Tt, "create_effect");
function za() {
  return ee !== null && !Ye;
}
r(za, "effect_tracking");
function Br(e) {
  const t = Tt(Vn, null, !1);
  return ce(t, ve), t.teardown = e, t;
}
r(Br, "teardown");
function Ss(e) {
  ws("$effect"), I && jt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    ae.f
  ), n = !ee && (t & $e) !== 0 && (t & La) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      be
    );
    (a.e ??= []).push(e);
  } else
    return qr(e);
}
r(Ss, "user_effect");
function qr(e) {
  return Tt(ha | Ii, e, !1);
}
r(qr, "create_user_effect");
function xs(e) {
  Et.ensure();
  const t = Tt(qt | _n, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? Pt(t, () => {
      Te(t), a(void 0);
    }) : (Te(t), a(void 0));
  });
}
r(xs, "component_root");
function ks(e) {
  return Tt(Gn | _n, e, !0);
}
r(ks, "async_effect");
function Kr(e, t = 0) {
  return Tt(Vn | t, e, !0);
}
r(Kr, "render_effect");
function Y(e, t = [], n = [], a = []) {
  is(a, t, n, (s) => {
    Tt(Vn, () => e(...s.map(u)), !0);
  });
}
r(Y, "template_effect");
function Ua(e, t = 0) {
  var n = Tt(vt | t, e, !0);
  return I && (n.dev_stack = wn), n;
}
r(Ua, "block");
function Re(e) {
  return Tt($e | _n, e, !0);
}
r(Re, "branch");
function Vr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ut, a = ee;
    ar(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      ar(n), Ue(a);
    }
  }
}
r(Vr, "execute_effect_teardown");
function Gr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Xn(() => {
      s.abort(Jt);
    });
    var a = n.next;
    (n.f & qt) !== 0 ? n.parent = null : Te(n, t), n = a;
  }
}
r(Gr, "destroy_effect_children");
function Ns(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & $e) === 0 && Te(t), t = n;
  }
}
r(Ns, "destroy_block_effect_children");
function Te(e, t = !0) {
  var n = !1;
  (t || (e.f & gr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Yr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Gr(e, t && !n), jn(e, 0), ce(e, pt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Vr(e);
  var s = e.parent;
  s !== null && s.first !== null && Jr(e), I && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
r(Te, "destroy_effect");
function Yr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ In(e);
    e.remove(), e = n;
  }
}
r(Yr, "remove_effect_dom");
function Jr(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
r(Jr, "unlink_effect");
function Pt(e, t, n = !0) {
  var a = [];
  Qr(e, a, !0);
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
r(Pt, "pause_effect");
function Qr(e, t, n) {
  if ((e.f & Ce) === 0) {
    e.f ^= Ce;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & ln) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & $e) !== 0 && (e.f & vt) !== 0;
      Qr(s, t, o ? n : !1), s = i;
    }
  }
}
r(Qr, "pause_children");
function Ba(e) {
  Xr(e, !0);
}
r(Ba, "resume_effect");
function Xr(e, t) {
  if ((e.f & Ce) !== 0) {
    e.f ^= Ce, (e.f & ve) === 0 && (ce(e, ge), Ge(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & ln) !== 0 || (n.f & $e) !== 0;
      Xr(n, s ? t : !1), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
r(Xr, "resume_children");
function Zr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var s = n === a ? null : /* @__PURE__ */ In(n);
      t.append(n), n = s;
    }
}
r(Zr, "move_effect");
let Pn = !1, Ut = !1;
function ar(e) {
  Ut = e;
}
r(ar, "set_is_destroying_effect");
let ee = null, Ye = !1;
function Ue(e) {
  ee = e;
}
r(Ue, "set_active_reaction");
let ae = null;
function Je(e) {
  ae = e;
}
r(Je, "set_active_effect");
let ze = null;
function $r(e) {
  ee !== null && (ze === null ? ze = [e] : ze.push(e));
}
r($r, "push_reaction_value");
let Ne = null, Ae = 0, Oe = null;
function Ts(e) {
  Oe = e;
}
r(Ts, "set_untracked_writes");
let ei = 1, Mt = 0, Rt = Mt;
function rr(e) {
  Rt = e;
}
r(rr, "set_update_version");
function ti() {
  return ++ei;
}
r(ti, "increment_write_version");
function An(e) {
  var t = e.f;
  if ((t & ge) !== 0)
    return !0;
  if (t & me && (e.f &= ~Nt), (t & Qe) !== 0) {
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
    Ve === null && ce(e, ve);
  }
  return !1;
}
r(An, "is_dirty");
function ni(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(ze !== null && Ft.call(ze, e)))
    for (var s = 0; s < a.length; s++) {
      var i = a[s];
      (i.f & me) !== 0 ? ni(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ce(i, ge) : (i.f & ve) !== 0 && ce(i, Qe), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
r(ni, "schedule_possible_effect_self_invalidation");
function Ta(e) {
  var t = Ne, n = Ae, a = Oe, s = ee, i = ze, o = be, c = Ye, l = Rt, f = e.f;
  Ne = /** @type {null | Value[]} */
  null, Ae = 0, Oe = null, ee = (f & ($e | qt)) === 0 ? e : null, ze = null, cn(e.ctx), Ye = !1, Rt = ++Mt, e.ac !== null && (Xn(() => {
    e.ac.abort(Jt);
  }), e.ac = null);
  try {
    e.f |= ba;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), _ = e.deps, p = ie?.is_fork;
    if (Ne !== null) {
      var w;
      if (p || jn(e, Ae), _ !== null && Ae > 0)
        for (_.length = Ae + Ne.length, w = 0; w < Ne.length; w++)
          _[Ae + w] = Ne[w];
      else
        e.deps = _ = Ne;
      if (za() && (e.f & je) !== 0)
        for (w = Ae; w < _.length; w++)
          (_[w].reactions ??= []).push(e);
    } else !p && _ !== null && Ae < _.length && (jn(e, Ae), _.length = Ae);
    if (kr() && Oe !== null && !Ye && _ !== null && (e.f & (me | Qe | ge)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Oe.length; w++)
        ni(
          Oe[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Mt++, s.deps !== null)
        for (let T = 0; T < n; T += 1)
          s.deps[T].rv = Mt;
      if (t !== null)
        for (const T of t)
          T.rv = Mt;
      Oe !== null && (a === null ? a = Oe : a.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & yt) !== 0 && (e.f ^= yt), v;
  } catch (T) {
    return Tr(T);
  } finally {
    e.f ^= ba, Ne = t, Ae = n, Oe = a, ee = s, ze = i, cn(o), Ye = c, Rt = l;
  }
}
r(Ta, "update_reaction");
function Is(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Si.call(n, e);
    if (a !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[a] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Ft.call(Ne, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & je) !== 0 && (i.f ^= je, i.f &= ~Nt), Ha(i), Na(i), jn(i, 0);
  }
}
r(Is, "remove_reaction");
function jn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Is(e, n[a]);
}
r(jn, "remove_reactions");
function En(e) {
  var t = e.f;
  if ((t & pt) === 0) {
    ce(e, ve);
    var n = ae, a = Pn;
    if (ae = e, Pn = !0, I) {
      var s = Tn;
      Za(e.component_function);
      var i = (
        /** @type {any} */
        wn
      );
      Fn(e.dev_stack ?? wn);
    }
    try {
      (t & (vt | mr)) !== 0 ? Ns(e) : Gr(e), Vr(e);
      var o = Ta(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ei;
      var c;
      I && Ki && (e.f & ge) !== 0 && e.deps;
    } finally {
      Pn = a, ae = n, I && (Za(s), Fn(i));
    }
  }
}
r(En, "update_effect");
async function As() {
  await Promise.resolve(), $i();
}
r(As, "tick");
function u(e) {
  var t = e.f, n = (t & me) !== 0;
  if (ee !== null && !Ye) {
    var a = ae !== null && (ae.f & pt) !== 0;
    if (!a && (ze === null || !Ft.call(ze, e))) {
      var s = ee.deps;
      if ((ee.f & ba) !== 0)
        e.rv < Mt && (e.rv = Mt, Ne === null && s !== null && s[Ae] === e ? Ae++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        (ee.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ee] : Ft.call(i, ee) || i.push(ee);
      }
    }
  }
  if (I && os.delete(e), Ut && St.has(e))
    return St.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Ut) {
      var c = o.v;
      return ((o.f & ve) === 0 && o.reactions !== null || ri(o)) && (c = Ra(o)), St.set(o, c), c;
    }
    var l = (o.f & je) === 0 && !Ye && ee !== null && (Pn || (ee.f & je) !== 0), f = o.deps === null;
    An(o) && (l && (o.f |= je), Pr(o)), l && !f && ai(o);
  }
  if (Ve?.has(e))
    return Ve.get(e);
  if ((e.f & yt) !== 0)
    throw e.v;
  return e.v;
}
r(u, "get");
function ai(e) {
  if (e.deps !== null) {
    e.f |= je;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & je) === 0 && ai(
        /** @type {Derived} */
        t
      );
  }
}
r(ai, "reconnect");
function ri(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (St.has(t) || (t.f & me) !== 0 && ri(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
r(ri, "depends_on_old_values");
function ii(e) {
  var t = Ye;
  try {
    return Ye = !0, e();
  } finally {
    Ye = t;
  }
}
r(ii, "untrack");
const si = /* @__PURE__ */ new Set(), Ia = /* @__PURE__ */ new Set();
function Ms(e, t, n, a = {}) {
  function s(i) {
    if (a.capture || mn.call(t, i), !i.cancelBubble)
      return Xn(() => n?.call(this, i));
  }
  return r(s, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wt(() => {
    t.addEventListener(e, s, a);
  }) : t.addEventListener(e, s, a), s;
}
r(Ms, "create_event");
function ct(e, t, n, a, s) {
  var i = { capture: a, passive: s }, o = Ms(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Br(() => {
    t.removeEventListener(e, o, i);
  });
}
r(ct, "event");
function Ie(e) {
  for (var t = 0; t < e.length; t++)
    si.add(e[t]);
  for (var n of Ia)
    n(e);
}
r(Ie, "delegate");
let ir = null;
function mn(e) {
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
    jt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ee, v = ae;
    Ue(null), Je(null);
    try {
      for (var _, p = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i["__" + a];
          T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && T.call(i, e);
        } catch (y) {
          _ ? p.push(y) : _ = y;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (_) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ue(d), Je(v);
    }
  }
}
r(mn, "handle_event_propagation");
function oi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
r(oi, "create_fragment_from_html");
function zn(e, t) {
  var n = (
    /** @type {Effect} */
    ae
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
r(zn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = oi(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ gt(s)));
    var o = (
      /** @type {TemplateNode} */
      a || ja ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      zn(c, l);
    } else
      zn(o, o);
    return o;
  };
}
r(P, "from_html");
function da() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = xt();
  return e.append(t, n), zn(t, n), e;
}
r(da, "comment");
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
r(O, "append");
const Cs = ["touchstart", "touchmove"];
function Ds(e) {
  return Cs.includes(e);
}
r(Ds, "is_passive_event");
function C(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
r(C, "set_text");
function Ws(e, t) {
  return Os(e, t);
}
r(Ws, "mount");
const Gt = /* @__PURE__ */ new Map();
function Os(e, { target: t, anchor: n, props: a = {}, events: s, context: i, intro: o = !0 }) {
  ms();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ r((v) => {
    for (var _ = 0; _ < v.length; _++) {
      var p = v[_];
      if (!c.has(p)) {
        c.add(p);
        var w = Ds(p);
        t.addEventListener(p, mn, { passive: w });
        var T = Gt.get(p);
        T === void 0 ? (document.addEventListener(p, mn, { passive: w }), Gt.set(p, 1)) : Gt.set(p, T + 1);
      }
    }
  }, "event_handle");
  l(Kn(si)), Ia.add(l);
  var f = void 0, d = xs(() => {
    var v = n ?? t.appendChild(xt());
    return ns(
      /** @type {TemplateNode} */
      v,
      {
        pending: /* @__PURE__ */ r(() => {
        }, "pending")
      },
      (_) => {
        ye({});
        var p = (
          /** @type {ComponentContext} */
          be
        );
        i && (p.c = i), s && (a.$$events = s), f = e(_, a) || {}, we();
      }
    ), () => {
      for (var _ of c) {
        t.removeEventListener(_, mn);
        var p = (
          /** @type {number} */
          Gt.get(_)
        );
        --p === 0 ? (document.removeEventListener(_, mn), Gt.delete(_)) : Gt.set(_, p);
      }
      Ia.delete(l), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Aa.set(f, d), f;
}
r(Os, "_mount");
let Aa = /* @__PURE__ */ new WeakMap();
function Ls(e, t) {
  const n = Aa.get(e);
  return n ? (Aa.delete(e), n(t)) : (I && (Zt in e ? Bi() : Ui()), Promise.resolve());
}
r(Ls, "unmount");
var qe, st, Me, Ht, kn, Nn, qn;
const Va = class Va {
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
    V(this, st, /* @__PURE__ */ new Map());
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
    V(this, Ht, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    V(this, kn, !0);
    V(this, Nn, /* @__PURE__ */ r(() => {
      var t = (
        /** @type {Batch} */
        ie
      );
      if (b(this, qe).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, qe).get(t)
        ), a = b(this, st).get(n);
        if (a)
          Ba(a), b(this, Ht).delete(n);
        else {
          var s = b(this, Me).get(n);
          s && (b(this, st).set(n, s.effect), b(this, Me).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), a = s.effect);
        }
        for (const [i, o] of b(this, qe)) {
          if (b(this, qe).delete(i), i === t)
            break;
          const c = b(this, Me).get(o);
          c && (Te(c.effect), b(this, Me).delete(o));
        }
        for (const [i, o] of b(this, st)) {
          if (i === n || b(this, Ht).has(i)) continue;
          const c = /* @__PURE__ */ r(() => {
            if (Array.from(b(this, qe).values()).includes(i)) {
              var f = document.createDocumentFragment();
              Zr(o, f), f.append(xt()), b(this, Me).set(i, { effect: o, fragment: f });
            } else
              Te(o);
            b(this, Ht).delete(i), b(this, st).delete(i);
          }, "on_destroy");
          b(this, kn) || !a ? (b(this, Ht).add(i), Pt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    V(this, qn, /* @__PURE__ */ r((t) => {
      b(this, qe).delete(t);
      const n = Array.from(b(this, qe).values());
      for (const [a, s] of b(this, Me))
        n.includes(a) || (Te(s.effect), b(this, Me).delete(a));
    }, "#discard"));
    this.anchor = t, G(this, kn, n);
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
    ), s = Ur();
    if (n && !b(this, st).has(t) && !b(this, Me).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = xt();
        i.append(o), b(this, Me).set(t, {
          effect: Re(() => n(o)),
          fragment: i
        });
      } else
        b(this, st).set(
          t,
          Re(() => n(this.anchor))
        );
    if (b(this, qe).set(a, t), s) {
      for (const [c, l] of b(this, st))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of b(this, Me))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, Nn)), a.ondiscard(b(this, qn));
    } else
      b(this, Nn).call(this);
  }
};
qe = new WeakMap(), st = new WeakMap(), Me = new WeakMap(), Ht = new WeakMap(), kn = new WeakMap(), Nn = new WeakMap(), qn = new WeakMap(), r(Va, "BranchManager");
let Ma = Va;
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
          Pi(t);
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
function te(e, t, n = !1) {
  var a = new Ma(e), s = n ? ln : 0;
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
function Xe(e, t) {
  return t;
}
r(Xe, "index");
function Hs(e, t, n) {
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
            Ca(Kn(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
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
    Ca(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
r(Hs, "pause_effects");
function Ca(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Te(e[n], t);
}
r(Ca, "destroy_effects");
var sr;
function Ze(e, t, n, a, s, i = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(xt());
  }
  var d = null, v = /* @__PURE__ */ cs(() => {
    var W = n();
    return vr(W) ? W : W == null ? [] : Kn(W);
  }), _, p = !0;
  function w() {
    y.fallback = d, Ps(y, _, o, t, a), d !== null && (_.length === 0 ? (d.f & dt) === 0 ? Ba(d) : (d.f ^= dt, gn(d, null, o)) : Pt(d, () => {
      d = null;
    }));
  }
  r(w, "commit");
  var T = Ua(() => {
    _ = /** @type {V[]} */
    u(v);
    for (var W = _.length, se = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      ie
    ), D = Ur(), F = 0; F < W; F += 1) {
      var g = _[F], E = a(g, F), N = p ? null : c.get(E);
      N ? (N.v && dn(N.v, g), N.i && dn(N.i, F), D && S.unskip_effect(N.e)) : (N = Rs(
        c,
        p ? o : sr ??= xt(),
        g,
        E,
        F,
        s,
        t,
        n
      ), p || (N.e.f |= dt), c.set(E, N)), se.add(E);
    }
    if (W === 0 && i && !d && (p ? d = Re(() => i(o)) : (d = Re(() => i(sr ??= xt())), d.f |= dt)), W > se.size && (I ? Fs(_, a) : yr("", "", "")), !p)
      if (D) {
        for (const [A, j] of c)
          se.has(A) || S.skip_effect(j.e);
        S.oncommit(w), S.ondiscard(() => {
        });
      } else
        w();
    u(v);
  }), y = { effect: T, items: c, outrogroups: null, fallback: d };
  p = !1;
}
r(Ze, "each");
function bn(e) {
  for (; e !== null && (e.f & $e) === 0; )
    e = e.next;
  return e;
}
r(bn, "skip_to_branch");
function Ps(e, t, n, a, s) {
  var i = (a & 8) !== 0, o = t.length, c = e.items, l = bn(e.effect.first), f, d = null, v, _ = [], p = [], w, T, y, W;
  if (i)
    for (W = 0; W < o; W += 1)
      w = t[W], T = s(w, W), y = /** @type {EachItem} */
      c.get(T).e, (y.f & dt) === 0 && (y.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(y));
  for (W = 0; W < o; W += 1) {
    if (w = t[W], T = s(w, W), y = /** @type {EachItem} */
    c.get(T).e, e.outrogroups !== null)
      for (const j of e.outrogroups)
        j.pending.delete(y), j.done.delete(y);
    if ((y.f & dt) !== 0)
      if (y.f ^= dt, y === l)
        gn(y, null, n);
      else {
        var se = d ? d.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), ht(e, d, y), ht(e, y, se), gn(y, se, n), d = y, _ = [], p = [], l = bn(d.next);
        continue;
      }
    if ((y.f & Ce) !== 0 && (Ba(y), i && (y.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (_.length < p.length) {
          var S = p[0], D;
          d = S.prev;
          var F = _[0], g = _[_.length - 1];
          for (D = 0; D < _.length; D += 1)
            gn(_[D], S, n);
          for (D = 0; D < p.length; D += 1)
            f.delete(p[D]);
          ht(e, F.prev, g.next), ht(e, d, F), ht(e, g, S), l = S, d = g, W -= 1, _ = [], p = [];
        } else
          f.delete(y), gn(y, l, n), ht(e, y.prev, y.next), ht(e, y, d === null ? e.effect.first : d.next), ht(e, d, y), d = y;
        continue;
      }
      for (_ = [], p = []; l !== null && l !== y; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = bn(l.next);
      if (l === null)
        continue;
    }
    (y.f & dt) === 0 && _.push(y), d = y, l = bn(y.next);
  }
  if (e.outrogroups !== null) {
    for (const j of e.outrogroups)
      j.pending.size === 0 && (Ca(Kn(j.done)), e.outrogroups?.delete(j));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var E = [];
    if (f !== void 0)
      for (y of f)
        (y.f & Ce) === 0 && E.push(y);
    for (; l !== null; )
      (l.f & Ce) === 0 && l !== e.fallback && E.push(l), l = bn(l.next);
    var N = E.length;
    if (N > 0) {
      var A = (a & 4) !== 0 && o === 0 ? n : null;
      if (i) {
        for (W = 0; W < N; W += 1)
          E[W].nodes?.a?.measure();
        for (W = 0; W < N; W += 1)
          E[W].nodes?.a?.fix();
      }
      Hs(e, E, A);
    }
  }
  i && wt(() => {
    if (v !== void 0)
      for (y of v)
        y.nodes?.a?.apply();
  });
}
r(Ps, "reconcile");
function Rs(e, t, n, a, s, i, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ds(n, !1, !1) : zt(n) : null, f = (o & 2) !== 0 ? zt(s) : null;
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
r(Rs, "create_item");
function gn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, s = e.nodes.end, i = t && (t.f & dt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ In(a)
      );
      if (i.before(a), a === s)
        return;
      a = o;
    }
}
r(gn, "move");
function ht(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
r(ht, "link");
function Fs(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let s = 0; s < a; s++) {
    const i = t(e[s], s);
    if (n.has(i)) {
      const o = String(n.get(i)), c = String(s);
      let l = String(i);
      l.startsWith("[object ") && (l = null), yr(o, c, l);
    }
    n.set(i, s);
  }
}
r(Fs, "validate_each_keys");
function js(e, t, n = !1, a = !1, s = !1) {
  var i = e, o = "";
  Y(() => {
    var c = (
      /** @type {Effect} */
      ae
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (Yr(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = oi(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ gt(f)), zn(
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
function Bt(e, t, n, a, s, i) {
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
r(Bt, "set_class");
const Us = /* @__PURE__ */ Symbol("is custom element"), Bs = /* @__PURE__ */ Symbol("is html");
function Fe(e, t) {
  var n = li(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
r(Fe, "set_value");
function M(e, t, n, a) {
  var s = li(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Ai] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && qs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
r(M, "set_attribute");
function li(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Us]: e.nodeName.includes("-"),
      [Bs]: e.namespaceURI === Ei
    }
  );
}
r(li, "get_attributes");
var lr = /* @__PURE__ */ new Map();
function qs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = lr.get(t);
  if (n) return n;
  lr.set(t, n = []);
  for (var a, s = e, i = Element.prototype; i !== s; ) {
    a = xi(s);
    for (var o in a)
      a[o].set && n.push(o);
    s = _r(s);
  }
  return n;
}
r(qs, "get_setters");
function ci(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  ys(e, "input", async (s) => {
    I && e.type === "checkbox" && Xa();
    var i = s ? e.defaultValue : e.value;
    if (i = va(e) ? _a(i) : i, n(i), ie !== null && a.add(ie), await As(), i !== (i = t())) {
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
  ii(t) == null && e.value && (n(va(e) ? _a(e.value) : e.value), ie !== null && a.add(ie)), Kr(() => {
    I && e.type === "checkbox" && Xa();
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
r(ci, "bind_value");
function va(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
r(va, "is_numberlike_input");
function _a(e) {
  return e === "" ? null : +e;
}
r(_a, "to_number");
const Yt = [];
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
    if (Er(e, c) && (e = c, n)) {
      const l = !Yt.length;
      for (const f of a)
        f[1](), Yt.push(f, e);
      if (l) {
        for (let f = 0; f < Yt.length; f += 2)
          Yt[f][0](Yt[f + 1]);
        Yt.length = 0;
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
      V(this, a, /* @__PURE__ */ Pe(Qt({})));
      V(this, s, {});
    }
    get $state() {
      return u(b(this, a));
    }
    set $state(l) {
      Ke(b(this, a), l, !0);
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
  n = new WeakMap(), a = new WeakMap(), s = new WeakMap(), r(i, "SvelteApplication"), We(i, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = i;
  return t;
}
r(Gs, "SvelteApplicationMixin");
const Ys = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ys);
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
r(k, "localize");
function vn(e, t) {
  return game.i18n?.format(e, t) ?? e;
}
r(vn, "format");
var Js = /* @__PURE__ */ P("<span> </span>"), Qs = /* @__PURE__ */ P('<span style="color: var(--nos-text-secondary, #888)">—</span>'), Xs = /* @__PURE__ */ P('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function Zs(e, t) {
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
  var i = Xs(), o = h(i);
  o.__click = a;
  var c = h(o), l = m(o, 2), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: A }) => t.actor.update({ name: A.value });
  var _ = m(l, 2), p = h(_), w = h(p), T = m(p, 2), y = h(T);
  {
    var W = /* @__PURE__ */ r((A) => {
      var j = Js(), q = h(j);
      Y(() => C(q, t.metaData)), O(A, j);
    }, "consequent"), se = /* @__PURE__ */ r((A) => {
      var j = Qs();
      O(A, j);
    }, "alternate");
    te(y, (A) => {
      t.metaData ? A(W) : A(se, !1);
    });
  }
  var S = m(y, 2);
  S.__click = () => t.actor.editMetadata();
  var D = m(_, 2), F = h(D), g = h(F), E = m(F, 2), N = h(E);
  Y(
    (A, j, q, L, K) => {
      M(c, "src", u(n)), M(c, "alt", t.actor.reactive.name), C(d, A), Fe(v, t.actor.reactive.name), v.disabled = !t.editingEnabled, C(w, j), M(S, "aria-label", q), M(S, "data-tooltip", L), S.disabled = !t.editingEnabled, C(g, K), C(N, u(s));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), O(e, i), we();
}
r(Zs, "HeaderRow");
Ie(["click", "change"]);
function qa(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
r(qa, "formatModifier");
var $s = /* @__PURE__ */ P('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function eo(e, t) {
  ye(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ z(() => k(n[t.abilityKey])), s = /* @__PURE__ */ z(() => vn("NWS.RollCheck", { name: u(a) })), i = /* @__PURE__ */ z(() => vn("NWS.RollSave", { name: u(a) }));
  var o = $s(), c = h(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = m(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var d = h(f), v = h(d), _ = m(f, 2), p = h(_);
  Y(
    (w) => {
      l = Bt(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), M(c, "data-tooltip", u(i)), M(c, "aria-label", u(i)), M(f, "data-tooltip", u(s)), M(f, "aria-label", u(s)), C(v, w), C(p, u(a));
    },
    [() => qa(t.ability.mod)]
  ), O(e, o), we();
}
r(eo, "AbilityBox");
Ie(["click"]);
var to = /* @__PURE__ */ P('<div class="nos-resources__mana"><label> </label> <input type="number"/> <span class="nos-resources__separator">/</span> <input type="number"/></div>'), no = /* @__PURE__ */ P('<div class="nos-resources"><!></div>');
function ao(e, t) {
  ye(t, !0);
  var n = no(), a = h(n);
  {
    var s = /* @__PURE__ */ r((i) => {
      var o = to(), c = h(o), l = h(c), f = m(c, 2);
      f.__change = ({ target: v }) => t.updateCurrentMana(Number(v.value));
      var d = m(f, 4);
      d.__change = ({ target: v }) => t.updateMaxMana(Number(v.value)), Y(
        (v) => {
          C(l, v), Fe(f, t.mana.current), Fe(d, t.mana.max || t.mana.baseMax), d.disabled = !t.editingEnabled;
        },
        [() => k("NWS.Mana")]
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
var ro = /* @__PURE__ */ P('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), io = /* @__PURE__ */ P('<div class="nos-wounds"><span class="nos-wounds__label"> </span> <div class="nos-wounds__drops"></div></div>');
function so(e, t) {
  ye(t, !0);
  var n = io(), a = h(n), s = h(a), i = m(a, 2);
  Ze(i, 21, () => ({ length: t.wounds.max }), Xe, (o, c, l) => {
    var f = ro();
    let d;
    f.__click = () => t.toggleWounds(l + 1), Y(
      (v, _) => {
        d = Bt(f, 1, "nos-wounds__drop", null, d, { "nos-wounds__drop--active": t.wounds.value > l }), M(f, "data-tooltip", v), M(f, "aria-label", _);
      },
      [
        () => vn("NWS.ToggleWound", { n: l + 1 }),
        () => vn("NWS.ToggleWound", { n: l + 1 })
      ]
    ), O(o, f);
  }), Y((o) => C(s, o), [() => k("NWS.Wounds")]), O(e, n), we();
}
r(so, "WoundTracker");
Ie(["click"]);
var oo = /* @__PURE__ */ P('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), lo = /* @__PURE__ */ P('<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>'), co = /* @__PURE__ */ P('<i class="fa-solid fa-heart"></i>'), uo = /* @__PURE__ */ P('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-hp"><span class="nos-combat__sub"> </span> <div class="nos-hp__bar"><input class="nos-hp__max" type="number"/></div> <div class="nos-hp__bar"><input class="nos-hp__current" type="number"/></div> <span class="nos-combat__sub"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div> <!></div> <!></section>');
function fo(e, t) {
  ye(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.hp), i = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ z(() => t.actor.reactive.system.attributes.movement);
  var l = uo(), f = h(l), d = h(f);
  Ze(d, 17, () => n, Xe, (le, De) => {
    eo(le, {
      get abilityKey() {
        return u(De);
      },
      get ability() {
        return t.actor.reactive.system.abilities[u(De)];
      },
      get save() {
        return t.actor.reactive.system.savingThrows[u(De)];
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
    var _ = /* @__PURE__ */ r((le) => {
      var De = oo(), hn = kt(De);
      hn.__click = () => t.actor.configureSavingThrows();
      var Dn = m(hn, 2);
      Dn.__click = () => t.actor.configureAbilityScores(), Y(
        (ia, sa) => {
          M(hn, "data-tooltip", ia), M(Dn, "data-tooltip", sa);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), O(le, De);
    }, "consequent");
    te(v, (le) => {
      t.editingEnabled && le(_);
    });
  }
  var p = m(f, 2), w = h(p), T = h(w), y = h(T), W = m(h(y), 2), se = h(W), S = m(W, 2), D = h(S), F = m(y, 2), g = m(h(F), 2), E = h(g), N = m(g, 2);
  N.__change = ({ target: le }) => t.updateTempHP(Number(le.value));
  var A = m(T, 2);
  let j;
  var q = h(A), L = h(q);
  {
    var K = /* @__PURE__ */ r((le) => {
      var De = lo();
      O(le, De);
    }, "consequent_1"), Q = /* @__PURE__ */ r((le) => {
      var De = co();
      O(le, De);
    }, "alternate");
    te(L, (le) => {
      t.isBloodied ? le(K) : le(Q, !1);
    });
  }
  var B = m(q, 2), re = h(B), X = m(B, 2), J = h(X), Z = h(J), x = m(J, 2), R = h(x);
  R.__change = ({ target: le }) => t.updateMaxHP(Number(le.value));
  var H = m(x, 2), ne = h(H);
  ne.__change = ({ target: le }) => t.updateCurrentHP(Number(le.value));
  var U = m(H, 2), $ = h(U), fe = m(X, 2);
  fe.__click = () => t.actor.configureHitPoints();
  var de = m(A, 2);
  de.__click = () => t.rollHitDice();
  var Be = m(h(de), 2), oe = h(Be), Ee = m(Be, 2), ue = h(Ee), Se = m(Ee, 2);
  Se.__click = (le) => {
    le.stopPropagation(), t.actor.configureHitDice();
  };
  var Kt = m(de, 2), _t = h(Kt);
  _t.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var Vt = m(h(_t), 2), Zn = h(Vt), $n = m(Vt, 2), ea = h($n), ta = m(_t, 2), Mn = m(h(ta), 2), na = h(Mn), Cn = m(Mn, 2), aa = h(Cn), ra = m(Cn, 2);
  ra.__click = () => t.actor.configureMovement();
  var fi = m(w, 2);
  ao(fi, {
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
  var di = m(p, 2);
  so(di, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    }
  }), Y(
    (le, De, hn, Dn, ia, sa, vi, _i, hi, bi, mi, gi, pi) => {
      C(se, le), C(D, u(i).value), C(E, De), Fe(N, u(s).temp ?? 0), j = Bt(A, 1, "nos-combat__stat", null, j, { "nos-hp--bloodied": t.isBloodied }), C(re, hn), C(Z, Dn), Fe(R, u(s).max), R.disabled = !t.editingEnabled, Fe(ne, u(s).value), C($, ia), M(fe, "data-tooltip", sa), fe.disabled = !t.editingEnabled, C(oe, vi), C(ue, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), M(Se, "data-tooltip", _i), Se.disabled = !t.editingEnabled, M(_t, "data-tooltip", hi), C(Zn, bi), C(ea, mi), C(na, gi), C(aa, u(c).walk), M(ra, "data-tooltip", pi), ra.disabled = !t.editingEnabled;
    },
    [
      () => k("NWS.Armor"),
      () => k("NWS.TempHP"),
      () => k("NWS.HitPoints"),
      () => k("NWS.Max"),
      () => k("NWS.Current"),
      () => k("NWS.ConfigureHitPoints"),
      () => k("NWS.HitDice"),
      () => k("NWS.ConfigureHitDice"),
      () => k("NWS.RollInitiative"),
      () => k("NWS.Initiative"),
      () => qa(u(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), O(e, l), we();
}
r(fo, "StatsRow");
Ie(["click", "change"]);
var vo = /* @__PURE__ */ P('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function _o(e, t) {
  ye(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: s
  } = CONFIG.NIMBLE;
  let i = /* @__PURE__ */ z(() => n[t.skillKey]), o = /* @__PURE__ */ z(() => k(a[u(i)])), c = /* @__PURE__ */ z(() => k(s[t.skillKey]));
  var l = vo();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = h(l), d = h(f), v = m(f, 2), _ = h(v), p = m(v, 2), w = h(p);
  Y(
    (T, y) => {
      M(l, "data-tooltip", T), C(d, u(o)), C(_, y), C(w, u(c));
    },
    [
      () => vn("NWS.RollSkill", { name: u(c) }),
      () => qa(t.skill.mod)
    ]
  ), O(e, l), we();
}
r(_o, "SkillCell");
Ie(["click"]);
var ho = /* @__PURE__ */ P('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), bo = /* @__PURE__ */ P('<section class="nos-skills-row"><!> <!></section>');
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
      l.__click = () => t.actor.configureSkills(), Y((f) => M(l, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), O(c, l);
    }, "consequent");
    te(i, (c) => {
      t.editingEnabled && c(o);
    });
  }
  O(e, a), we();
}
r(mo, "SkillsRow");
Ie(["click"]);
var go = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), po = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), yo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), wo = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div></div>'), Eo = /* @__PURE__ */ P('<div class="nos-feature-row"><!> <!></div>'), So = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), xo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), ko = /* @__PURE__ */ P('<div class="nos-item" style="margin-left: 1rem;" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), No = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div> <!></div>'), To = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Io = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Ao = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Mo = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Co = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <!></div>'), Do = /* @__PURE__ */ P('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Wo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Oo = /* @__PURE__ */ P("<!> <!> <!> <!> <!>", 1);
function cr(e, t) {
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
  function d(g, E) {
    const N = { type: "Item", uuid: E.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(N));
  }
  r(d, "onDragStart");
  var v = Oo(), _ = kt(v);
  {
    var p = /* @__PURE__ */ r((g) => {
      var E = Eo(), N = h(E);
      {
        var A = /* @__PURE__ */ r((L) => {
          var K = po(), Q = h(K), B = h(Q), re = m(Q, 2), X = h(re), J = m(X, 2);
          J.__click = () => l(u(s).id);
          var Z = h(J), x = m(J, 2);
          {
            var R = /* @__PURE__ */ r((H) => {
              var ne = go(), U = h(ne);
              U.__click = () => l(u(s).id);
              var $ = m(U, 2);
              $.__click = () => f(u(s).id), O(H, ne);
            }, "consequent");
            te(x, (H) => {
              t.editingEnabled && H(R);
            });
          }
          Y(
            (H) => {
              C(B, H), M(X, "src", u(s).img), M(X, "alt", u(s).name), C(Z, u(s).name);
            },
            [() => k("NWS.Ancestry")]
          ), ct("dragstart", re, (H) => d(H, u(s))), O(L, K);
        }, "consequent_1");
        te(N, (L) => {
          u(s) && L(A);
        });
      }
      var j = m(N, 2);
      {
        var q = /* @__PURE__ */ r((L) => {
          var K = wo(), Q = h(K), B = h(Q), re = m(Q, 2), X = h(re), J = m(X, 2);
          J.__click = () => l(u(i).id);
          var Z = h(J), x = m(J, 2);
          {
            var R = /* @__PURE__ */ r((H) => {
              var ne = yo(), U = h(ne);
              U.__click = () => l(u(i).id);
              var $ = m(U, 2);
              $.__click = () => f(u(i).id), O(H, ne);
            }, "consequent_2");
            te(x, (H) => {
              t.editingEnabled && H(R);
            });
          }
          Y(
            (H) => {
              C(B, H), M(X, "src", u(i).img), M(X, "alt", u(i).name), C(Z, u(i).name);
            },
            [() => k("NWS.Background")]
          ), ct("dragstart", re, (H) => d(H, u(i))), O(L, K);
        }, "consequent_3");
        te(j, (L) => {
          u(i) && L(q);
        });
      }
      O(g, E);
    }, "consequent_4");
    te(_, (g) => {
      (u(s) || u(i)) && g(p);
    });
  }
  var w = m(_, 2);
  {
    var T = /* @__PURE__ */ r((g) => {
      var E = No(), N = h(E), A = h(N), j = m(N, 2), q = h(j), L = m(q, 2);
      L.__click = () => l(u(o).id);
      var K = h(L), Q = m(L, 2);
      {
        var B = /* @__PURE__ */ r((J) => {
          var Z = So(), x = h(Z);
          x.__click = () => l(u(o).id);
          var R = m(x, 2);
          R.__click = () => f(u(o).id), O(J, Z);
        }, "consequent_5");
        te(Q, (J) => {
          t.editingEnabled && J(B);
        });
      }
      var re = m(j, 2);
      {
        var X = /* @__PURE__ */ r((J) => {
          var Z = ko(), x = h(Z), R = m(x, 2);
          R.__click = () => l(u(c).id);
          var H = h(R), ne = m(R, 2);
          {
            var U = /* @__PURE__ */ r(($) => {
              var fe = xo(), de = h(fe);
              de.__click = () => l(u(c).id);
              var Be = m(de, 2);
              Be.__click = () => f(u(c).id), O($, fe);
            }, "consequent_6");
            te(ne, ($) => {
              t.editingEnabled && $(U);
            });
          }
          Y(() => {
            M(x, "src", u(c).img), M(x, "alt", u(c).name), C(H, u(c).name);
          }), ct("dragstart", Z, ($) => d($, u(c))), O(J, Z);
        }, "consequent_7");
        te(re, (J) => {
          u(c) && J(X);
        });
      }
      Y(
        (J, Z) => {
          C(A, J), M(q, "src", u(o).img), M(q, "alt", u(o).name), C(K, `${u(o).name ?? ""} (${Z ?? ""} ${u(o).system.classLevel ?? ""})`);
        },
        [() => k("NWS.Class"), () => k("NWS.Level")]
      ), ct("dragstart", j, (J) => d(J, u(o))), O(g, E);
    }, "consequent_8");
    te(w, (g) => {
      u(o) && g(T);
    });
  }
  var y = m(w, 2);
  {
    var W = /* @__PURE__ */ r((g) => {
      var E = Ao(), N = h(E), A = h(N), j = m(N, 2);
      Ze(j, 21, () => u(n), Xe, (q, L) => {
        var K = Io(), Q = h(K), B = m(Q, 2);
        B.__click = () => l(u(L).id);
        var re = h(B), X = m(B, 2);
        {
          var J = /* @__PURE__ */ r((Z) => {
            var x = To(), R = h(x);
            R.__click = () => l(u(L).id);
            var H = m(R, 2);
            H.__click = () => f(u(L).id), O(Z, x);
          }, "consequent_9");
          te(X, (Z) => {
            t.editingEnabled && Z(J);
          });
        }
        Y(() => {
          M(Q, "src", u(L).img), M(Q, "alt", u(L).name), C(re, u(L).name);
        }), ct("dragstart", K, (Z) => d(Z, u(L))), O(q, K);
      }), Y((q) => C(A, q), [() => k("NWS.Features")]), O(g, E);
    }, "consequent_10");
    te(y, (g) => {
      u(n).length > 0 && g(W);
    });
  }
  var se = m(y, 2);
  {
    var S = /* @__PURE__ */ r((g) => {
      var E = Do(), N = h(E), A = h(N), j = m(N, 2);
      Ze(j, 21, () => u(a), Xe, (q, L) => {
        var K = Co(), Q = h(K), B = m(Q, 2);
        B.__click = () => l(u(L).id);
        var re = h(B), X = m(B, 2);
        {
          var J = /* @__PURE__ */ r((Z) => {
            var x = Mo(), R = h(x);
            R.__click = () => l(u(L).id);
            var H = m(R, 2);
            H.__click = () => f(u(L).id), O(Z, x);
          }, "consequent_11");
          te(X, (Z) => {
            t.editingEnabled && Z(J);
          });
        }
        Y(() => {
          M(Q, "src", u(L).img), M(Q, "alt", u(L).name), C(re, u(L).name);
        }), ct("dragstart", K, (Z) => d(Z, u(L))), O(q, K);
      }), Y((q) => C(A, q), [() => k("NWS.Boons")]), O(g, E);
    }, "consequent_12");
    te(se, (g) => {
      u(a).length > 0 && g(S);
    });
  }
  var D = m(se, 2);
  {
    var F = /* @__PURE__ */ r((g) => {
      var E = Wo(), N = h(E);
      Y((A) => C(N, A), [() => k("NWS.DropFeaturesHere")]), O(g, E);
    }, "consequent_13");
    te(D, (g) => {
      !u(s) && !u(i) && !u(o) && u(n).length === 0 && u(a).length === 0 && g(F);
    });
  }
  O(e, v), we();
}
r(cr, "FeaturesTab");
Ie(["click"]);
var Lo = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ho = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[C]</span>'), Po = /* @__PURE__ */ P('<span style="color: #888; font-size: 0.7rem;">[U]</span>'), Ro = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Fo = /* @__PURE__ */ P('<div class="nos-item nos-item--castable" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> <!> <!></span> <span class="nos-item__meta"> </span> <!></div>'), jo = /* @__PURE__ */ P('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), zo = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Uo = /* @__PURE__ */ P('<div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <!> <!>', 1);
function ur(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ Pe(""), a = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, D) => (S.sort ?? 0) - (D.sort ?? 0))), s = /* @__PURE__ */ z(() => u(n) ? u(a).filter((S) => S.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), i = /* @__PURE__ */ z(() => {
    const S = {};
    for (const D of u(s)) {
      const F = D.system?.tier ?? 0, g = D.system?.isUtility ?? !1, E = g ? "_utility" : `_tier_${F}`, N = g ? k("NWS.Utility") : vn("NWS.Tier", { n: F });
      S[E] ??= { label: N, spells: [] }, S[E].spells.push(D);
    }
    return Object.entries(S).sort(([D], [F]) => {
      if (D === "_utility") return 1;
      if (F === "_utility") return -1;
      const g = parseInt(D.replace("_tier_", "")), E = parseInt(F.replace("_tier_", ""));
      return g - E;
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
  function d(S, D) {
    const F = { type: "Item", uuid: D.uuid };
    S.dataTransfer.setData("text/plain", JSON.stringify(F));
  }
  r(d, "onDragStart");
  var v = Uo(), _ = kt(v), p = m(h(_), 2), w = m(p, 2);
  {
    var T = /* @__PURE__ */ r((S) => {
      var D = Lo();
      D.__click = l;
      var F = m(h(D));
      Y((g) => C(F, ` ${g ?? ""}`), [() => k("NWS.New")]), O(S, D);
    }, "consequent");
    te(w, (S) => {
      t.editingEnabled && S(T);
    });
  }
  var y = m(_, 2);
  Ze(y, 17, () => u(i), Xe, (S, D) => {
    var F = /* @__PURE__ */ z(() => br(u(D), 2));
    let g = /* @__PURE__ */ r(() => u(F)[1], "tier");
    var E = jo(), N = h(E), A = h(N), j = m(N, 2);
    Ze(j, 21, () => g().spells, Xe, (q, L) => {
      var K = Fo(), Q = h(K), B = m(Q, 2);
      B.__click = () => f(u(L).id);
      var re = h(B), X = m(re);
      {
        var J = /* @__PURE__ */ r(($) => {
          var fe = Ho();
          Y((de) => M(fe, "data-tooltip", de), [() => k("NWS.Concentration")]), O($, fe);
        }, "consequent_1");
        te(X, ($) => {
          u(L).system?.concentration && $(J);
        });
      }
      var Z = m(X, 2);
      {
        var x = /* @__PURE__ */ r(($) => {
          var fe = Po();
          Y((de) => M(fe, "data-tooltip", de), [() => k("NWS.Utility")]), O($, fe);
        }, "consequent_2");
        te(Z, ($) => {
          u(L).system?.isUtility && $(x);
        });
      }
      var R = m(B, 2), H = h(R), ne = m(R, 2);
      {
        var U = /* @__PURE__ */ r(($) => {
          var fe = Ro(), de = h(fe);
          de.__click = () => o(u(L).id);
          var Be = m(de, 2);
          Be.__click = () => c(u(L).id), O($, fe);
        }, "consequent_3");
        te(ne, ($) => {
          t.editingEnabled && $(U);
        });
      }
      Y(() => {
        M(Q, "src", u(L).img), M(Q, "alt", u(L).name), C(re, `${u(L).name ?? ""} `), C(H, u(L).system?.activationCost ?? "");
      }), ct("dragstart", K, ($) => d($, u(L))), O(q, K);
    }), Y(() => C(A, g().label)), O(S, E);
  });
  var W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var D = zo(), F = h(D);
      Y((g) => C(F, g), [() => k("NWS.DropSpellsHere")]), O(S, D);
    }, "consequent_4");
    te(W, (S) => {
      u(a).length === 0 && S(se);
    });
  }
  Y((S) => M(p, "placeholder", S), [() => k("NWS.SearchSpells")]), ci(p, () => u(n), (S) => Ke(n, S)), O(e, v), we();
}
r(ur, "SpellsTab");
Ie(["click"]);
var Bo = /* @__PURE__ */ P('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), qo = /* @__PURE__ */ P('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Ko = /* @__PURE__ */ P('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Vo = /* @__PURE__ */ P('<div class="nos-item" draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"> </span> <input class="nos-item__qty" type="number" min="0"/> <!></div>'), Go = /* @__PURE__ */ P('<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;"> </p>'), Yo = /* @__PURE__ */ P('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search" style="color: #888;"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function fr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ Pe(""), a = /* @__PURE__ */ z(() => t.actor.reactive.system.currency), s = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((g) => g.type === "object").sort((g, E) => (g.sort ?? 0) - (E.sort ?? 0))), i = /* @__PURE__ */ z(() => u(n) ? u(s).filter((g) => g.name.toLowerCase().includes(u(n).toLowerCase())) : u(s));
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
  function f(g, E) {
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, Math.round(Number(E)))
    });
  }
  r(f, "updateCurrency");
  function d(g, E) {
    const N = u(a)[g]?.value ?? 0;
    t.actor.update({
      [`system.currency.${g}.value`]: Math.max(0, N + E)
    });
  }
  r(d, "adjustCurrency");
  function v(g, E) {
    t.actor.items.get(g)?.update({ "system.quantity": Number(E) });
  }
  r(v, "updateQuantity");
  function _(g, E) {
    const N = { type: "Item", uuid: E.uuid };
    g.dataTransfer.setData("text/plain", JSON.stringify(N));
  }
  r(_, "onDragStart");
  var p = Yo(), w = kt(p);
  Ze(w, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], Xe, (g, E) => {
    var N = /* @__PURE__ */ z(() => br(E, 2));
    let A = /* @__PURE__ */ r(() => u(N)[0], "type"), j = /* @__PURE__ */ r(() => u(N)[1], "labelKey");
    var q = Bo(), L = h(q), K = h(L), Q = m(L, 2);
    Q.__click = () => d(A(), -1);
    var B = m(Q, 2);
    B.__change = ({ target: X }) => f(A(), X.value);
    var re = m(B, 2);
    re.__click = () => d(A(), 1), Y(
      (X, J, Z) => {
        M(L, "for", `currency-${A() ?? ""}`), C(K, X), M(Q, "aria-label", `-1 ${J ?? ""}`), M(B, "id", `currency-${A() ?? ""}`), Fe(B, u(a)[A()]?.value ?? 0), M(re, "aria-label", `+1 ${Z ?? ""}`);
      },
      [
        () => k(j()),
        () => k(j()),
        () => k(j())
      ]
    ), O(g, q);
  });
  var T = m(w, 2), y = m(h(T), 2), W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((g) => {
      var E = qo();
      E.__click = l;
      var N = m(h(E));
      Y((A) => C(N, ` ${A ?? ""}`), [() => k("NWS.New")]), O(g, E);
    }, "consequent");
    te(W, (g) => {
      t.editingEnabled && g(se);
    });
  }
  var S = m(T, 2);
  Ze(S, 21, () => u(i), Xe, (g, E) => {
    var N = Vo(), A = h(N), j = m(A, 2);
    j.__click = () => o(u(E).id);
    var q = h(j), L = m(j, 2);
    L.__change = ({ target: B }) => v(u(E).id, B.value);
    var K = m(L, 2);
    {
      var Q = /* @__PURE__ */ r((B) => {
        var re = Ko(), X = h(re);
        X.__click = () => o(u(E).id);
        var J = m(X, 2);
        J.__click = () => c(u(E).id), O(B, re);
      }, "consequent_1");
      te(K, (B) => {
        t.editingEnabled && B(Q);
      });
    }
    Y(() => {
      M(A, "src", u(E).img), M(A, "alt", u(E).name), C(q, u(E).name), Fe(L, u(E).system?.quantity ?? 1);
    }), ct("dragstart", N, (B) => _(B, u(E))), O(g, N);
  });
  var D = m(S, 2);
  {
    var F = /* @__PURE__ */ r((g) => {
      var E = Go(), N = h(E);
      Y((A) => C(N, A), [() => k("NWS.DropInventoryHere")]), O(g, E);
    }, "consequent_2");
    te(D, (g) => {
      u(s).length === 0 && g(F);
    });
  }
  Y((g) => M(y, "placeholder", g), [() => k("NWS.SearchItems")]), ci(y, () => u(n), (g) => Ke(n, g)), O(e, p), we();
}
r(fr, "InventoryTab");
Ie(["click", "change"]);
var Jo = /* @__PURE__ */ P(`<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor" style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"><!></div></div></div>`);
function dr(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.system.details), a = /* @__PURE__ */ z(() => t.actor.reactive.system.proficiencies), s = /* @__PURE__ */ z(() => [...u(a).languages ?? []].join(", ")), i = /* @__PURE__ */ z(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ z(() => (u(a).weapons ?? []).join(", "));
  var c = Jo(), l = h(c), f = h(l), d = h(f), v = m(f, 2);
  v.__change = ({ target: ue }) => t.actor.update({ "system.details.age": ue.value });
  var _ = m(l, 2), p = h(_), w = h(p), T = m(p, 2);
  T.__change = ({ target: ue }) => t.actor.update({ "system.details.gender": ue.value });
  var y = m(_, 2), W = h(y), se = h(W), S = m(W, 2);
  S.__change = ({ target: ue }) => t.actor.update({ "system.details.height": ue.value });
  var D = m(y, 2), F = h(D), g = h(F), E = m(F, 2);
  E.__change = ({ target: ue }) => t.actor.update({ "system.details.weight": ue.value });
  var N = m(D, 2), A = h(N), j = h(A), q = m(A, 2), L = h(q), K = m(q, 2);
  K.__click = () => t.actor.configureLanguageProficiencies();
  var Q = m(N, 2), B = h(Q), re = h(B), X = m(B, 2), J = h(X), Z = m(X, 2);
  Z.__click = () => t.actor.configureArmorProficiencies();
  var x = m(Q, 2), R = h(x), H = h(R), ne = m(R, 2), U = h(ne), $ = m(ne, 2);
  $.__click = () => t.actor.configureWeaponProficiencies();
  var fe = m(x, 2), de = h(fe), Be = h(de), oe = m(de, 2), Ee = h(oe);
  js(Ee, () => u(n).notes ?? ""), Y(
    (ue, Se, Kt, _t, Vt, Zn, $n, ea, ta, Mn, na, Cn, aa) => {
      C(d, ue), Fe(v, u(n).age ?? ""), v.disabled = !t.editingEnabled, C(w, Se), Fe(T, u(n).gender ?? ""), T.disabled = !t.editingEnabled, C(se, Kt), Fe(S, u(n).height ?? ""), M(S, "placeholder", _t), S.disabled = !t.editingEnabled, C(g, Vt), Fe(E, u(n).weight ?? ""), M(E, "placeholder", Zn), E.disabled = !t.editingEnabled, C(j, $n), C(L, u(s) || "—"), M(K, "data-tooltip", ea), K.disabled = !t.editingEnabled, C(re, ta), C(J, u(i) || "—"), M(Z, "data-tooltip", Mn), Z.disabled = !t.editingEnabled, C(H, na), C(U, u(o) || "—"), M($, "data-tooltip", Cn), $.disabled = !t.editingEnabled, C(Be, aa), M(oe, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), ct("blur", oe, ({ target: ue }) => t.actor.update({ "system.details.notes": ue.innerHTML })), O(e, c), we();
}
r(dr, "BioTab");
Ie(["change", "click"]);
var Qo = /* @__PURE__ */ P('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), Xo = /* @__PURE__ */ P('<div class="nos-slot nos-slot--empty"> </div>'), Zo = /* @__PURE__ */ P("<!> <!>", 1);
function $o(e, t) {
  ye(t, !0);
  let n = /* @__PURE__ */ z(() => t.actor.reactive.items.filter((c) => c.type === "object" && c.system?.objectType === "weapon").sort((c, l) => (c.sort ?? 0) - (l.sort ?? 0)));
  var a = Zo(), s = kt(a);
  Ze(s, 17, () => u(n), Xe, (c, l) => {
    var f = Qo(), d = h(f), v = m(d, 2);
    v.__click = () => t.actor.activateItem(u(l).id);
    var _ = h(v);
    Y(() => {
      M(d, "src", u(l).img), M(d, "alt", u(l).name), M(v, "data-tooltip", u(l).name), C(_, u(l).name);
    }), O(c, f);
  });
  var i = m(s, 2);
  {
    var o = /* @__PURE__ */ r((c) => {
      var l = Xo(), f = h(l);
      Y((d) => C(f, d), [() => k("NWS.NoWeapons")]), O(c, l);
    }, "consequent");
    te(i, (c) => {
      u(n).length === 0 && c(o);
    });
  }
  O(e, a), we();
}
r($o, "InventorySlots");
Ie(["click"]);
var el = /* @__PURE__ */ P('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), tl = /* @__PURE__ */ P('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;"> </div>'), nl = /* @__PURE__ */ P('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function al(e, t) {
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
  let a = /* @__PURE__ */ Pe("features"), s = /* @__PURE__ */ z(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), i = /* @__PURE__ */ z(() => t.actor.reactive.system.inventory);
  var o = nl(), c = h(o);
  Ze(c, 21, () => n, Xe, (S, D) => {
    var F = el();
    let g;
    F.__click = () => Ke(a, u(D).name, !0);
    var E = h(F), N = m(E);
    Y(
      (A) => {
        g = Bt(F, 1, "nos-tab-btn", null, g, { "nos-tab-btn--active": u(a) === u(D).name }), Bt(E, 1, u(D).icon), C(N, ` ${A ?? ""}`);
      },
      [() => k(u(D).labelKey)]
    ), O(S, F);
  });
  var l = m(c, 2), f = h(l);
  {
    var d = /* @__PURE__ */ r((S) => {
      cr(S, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), v = /* @__PURE__ */ r((S) => {
      var D = da(), F = kt(D);
      {
        var g = /* @__PURE__ */ r((N) => {
          ur(N, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), E = /* @__PURE__ */ r((N) => {
          var A = da(), j = kt(A);
          {
            var q = /* @__PURE__ */ r((K) => {
              fr(K, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), L = /* @__PURE__ */ r((K) => {
              var Q = da(), B = kt(Q);
              {
                var re = /* @__PURE__ */ r((X) => {
                  dr(X, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                te(
                  B,
                  (X) => {
                    u(a) === "bio" && X(re);
                  },
                  !0
                );
              }
              O(K, Q);
            }, "alternate");
            te(
              j,
              (K) => {
                u(a) === "inventory" ? K(q) : K(L, !1);
              },
              !0
            );
          }
          O(N, A);
        }, "alternate_1");
        te(
          F,
          (N) => {
            u(a) === "spells" ? N(g) : N(E, !1);
          },
          !0
        );
      }
      O(S, D);
    }, "alternate_2");
    te(f, (S) => {
      u(a) === "features" ? S(d) : S(v, !1);
    });
  }
  var _ = m(l, 2), p = h(_), w = h(p), T = m(_, 2), y = h(T);
  $o(y, {
    get actor() {
      return t.actor;
    },
    get editingEnabled() {
      return t.editingEnabled;
    }
  });
  var W = m(y, 2);
  {
    var se = /* @__PURE__ */ r((S) => {
      var D = tl(), F = h(D);
      Y(() => C(F, `${u(i).usedSlots ?? 0 ?? ""} / ${u(i).totalSlots ?? 0 ?? ""}`)), O(S, D);
    }, "consequent_4");
    te(W, (S) => {
      u(s) && S(se);
    });
  }
  Y((S) => C(w, S), [() => k("NWS.Weapons")]), O(e, o), we();
}
r(al, "ContentArea");
Ie(["click"]);
var rl = /* @__PURE__ */ P('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function il(e, t) {
  ye(t, !0);
  var n = rl(), a = h(n);
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
  f.__click = () => t.actor.triggerRest({ restType: "safe" }), Y(
    (d, v, _, p, w, T, y, W, se, S) => {
      s = Bt(a, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), M(a, "aria-pressed", t.editingEnabled), M(a, "aria-label", d), M(a, "data-tooltip", v), Bt(i, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), M(o, "aria-label", _), M(o, "data-tooltip", p), o.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, M(c, "aria-label", w), M(c, "data-tooltip", T), c.disabled = t.actor.reactive.system.levelUpHistory.length === 0, M(l, "aria-label", y), M(l, "data-tooltip", W), M(f, "aria-label", se), M(f, "data-tooltip", S);
    },
    [
      () => t.editingEnabled ? k("NWS.DisableEditing") : k("NWS.EnableEditing"),
      () => t.editingEnabled ? k("NWS.EditingEnabled") : k("NWS.EditingLocked"),
      () => k("NWS.LevelUp"),
      () => k("NWS.LevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.RevertLastLevelUp"),
      () => k("NWS.FieldRest"),
      () => k("NWS.FieldRest"),
      () => k("NWS.SafeRest"),
      () => k("NWS.SafeRest")
    ]
  ), O(e, n), we();
}
r(il, "SidebarControls");
Ie(["click"]);
var sl = /* @__PURE__ */ P('<div class="nos-sheet" style="position: relative;"><!> <!> <!> <!> <!> <span class="nos-logo">Nimble</span></div>');
function ol(e, t) {
  ye(t, !0);
  const n = Hr((x) => {
    const R = {
      updateActor: Hooks.on("updateActor", (H, ne, U) => {
        U.diff !== !1 && H._id === t.actor.id && x();
      }),
      createItem: Hooks.on("createItem", (H) => {
        H?.actor?.id === t.actor.id && x();
      }),
      deleteItem: Hooks.on("deleteItem", (H) => {
        H?.actor?.id === t.actor.id && x();
      }),
      updateItem: Hooks.on("updateItem", (H, ne, U) => {
        U.diff !== !1 && H?.actor?.id === t.actor.id && x();
      })
    };
    return () => {
      Hooks.off("updateActor", R.updateActor), Hooks.off("createItem", R.createItem), Hooks.off("deleteItem", R.deleteItem), Hooks.off("updateItem", R.updateItem);
    };
  }), a = new Proxy(t.actor, {
    get(x, R) {
      if (R === "reactive")
        return n(), x;
      const H = x[R];
      return typeof H == "function" ? H.bind(x) : H;
    }
  }), {
    sizeCategories: s,
    defaultSkillAbilities: i,
    abilityScoreAbbreviations: o
  } = CONFIG.NIMBLE;
  function c(x, R) {
    return Math.clamp(0, Math.round(x / R * 100), 100);
  }
  r(c, "getHitPointPercentage");
  function l(x, R, H, ne) {
    const U = [];
    return H && U.push(`${H.name} (${s[ne] ?? ne})`), x && (R ? U.push(`${x.name} (${R.name}, ${x.system.classLevel})`) : U.push(`${x.name} (${x.system.classLevel})`)), U.filter(Boolean).join(" ⟡ ");
  }
  r(l, "prepareCharacterMetadata");
  function f(x, R) {
    if (!R) return x;
    const H = [4, 6, 8, 10, 12, 20], ne = H.indexOf(x);
    return ne === -1 ? x : H[Math.min(ne + R, H.length - 1)];
  }
  r(f, "incrementDieSize");
  let d = /* @__PURE__ */ z(() => c(a.reactive.system.attributes.hp.value, a.reactive.system.attributes.hp.max) <= 50);
  function v(x) {
    a.update({ "system.attributes.hp.value": x });
  }
  r(v, "updateCurrentHP");
  function _(x) {
    a.update({ "system.attributes.hp.max": x });
  }
  r(_, "updateMaxHP");
  function p(x) {
    a.update({ "system.attributes.hp.temp": x });
  }
  r(p, "updateTempHP");
  let w = /* @__PURE__ */ z(() => a.reactive.system.resources.mana), T = /* @__PURE__ */ z(() => (u(w).max ?? 0) > 0 || (u(w).baseMax ?? 0) > 0 ? !0 : a.reactive.items.some((x) => x.type === "class" && x.system?.mana?.formula?.length));
  function y(x) {
    a.update({ "system.resources.mana.current": x });
  }
  r(y, "updateCurrentMana");
  function W(x) {
    const R = a.reactive.system.resources.mana, H = R.baseMax ?? 0, U = (R.max || H) - H, $ = Math.max(0, x - U);
    a.update({ "system.resources.mana.baseMax": $ });
  }
  r(W, "updateMaxMana");
  let se = /* @__PURE__ */ z(() => {
    const x = a.reactive.system.attributes.hitDice, R = a.reactive.system.attributes.bonusHitDice ?? [], H = a.reactive.items.filter((oe) => oe.type === "class"), ne = a.reactive.system.attributes.hitDiceSizeBonus ?? 0, U = {};
    for (const oe of H) {
      const Ee = oe.system.hitDieSize, ue = f(Ee, ne), Se = oe.system.classLevel;
      U[ue] ??= { current: 0, total: 0 }, U[ue].total += Se, U[ue].current = x[ue]?.current ?? 0;
    }
    const $ = H.map((oe) => f(oe.system.hitDieSize, ne));
    for (const oe of R) {
      const Ee = f(oe.size, ne);
      U[Ee] ??= { current: x[Ee]?.current ?? 0, total: 0 }, U[Ee].total += oe.value, $.includes(Ee) || (U[Ee].current = x[Ee]?.current ?? 0);
    }
    const fe = R.map((oe) => f(oe.size, ne));
    for (const [oe, Ee] of Object.entries(x ?? {})) {
      const ue = Number(oe), Se = f(ue, ne), Kt = Ee?.bonus ?? 0;
      if (Kt > 0) {
        U[Se] ??= { current: 0, total: 0 }, U[Se].total += Kt;
        const _t = $.includes(Se), Vt = fe.includes(Se);
        !_t && !Vt && (U[Se].current = x[Se]?.current ?? 0);
      }
    }
    let de = 0, Be = 0;
    for (const oe of Object.values(U))
      de += oe.current, Be += oe.total;
    return { bySize: U, value: de, max: Be };
  });
  async function S(x) {
    await a.updateCurrentHitDice(x);
  }
  r(S, "updateCurrentHitDice");
  async function D() {
    await a.rollHitDice();
  }
  r(D, "rollHitDice");
  async function F() {
    await a.editCurrentHitDice();
  }
  r(F, "editCurrentHitDice");
  let g = /* @__PURE__ */ z(() => a.reactive.items.find((x) => x.type === "class") ?? null), E = /* @__PURE__ */ z(() => {
    const x = a.reactive.items.find((U) => U.type === "class") ?? null, R = a.reactive.items.find((U) => U.type === "subclass") ?? null, H = a.reactive.items.find((U) => U.type === "ancestry") ?? null, ne = a.reactive.system.attributes.sizeCategory;
    return l(x, R, H, ne);
  }), N = /* @__PURE__ */ z(() => a.reactive.system.attributes.wounds);
  function A(x) {
    let R = x;
    x <= u(N).value && (R = x - 1), a.update({ "system.attributes.wounds.value": R });
  }
  r(A, "toggleWounds");
  let j = /* @__PURE__ */ z(() => a.reactive.flags.nimble), q = /* @__PURE__ */ z(() => u(j)?.editingEnabled ?? !0);
  const L = Ks(!1, (x) => (Ss(() => x(u(q))), () => {
  }));
  async function K() {
    await a.setFlag("nimble", "editingEnabled", !u(q));
  }
  r(K, "toggleEditingEnabled"), Wn("actor", a), Wn("document", a), Wn("application", t.sheet), Wn("editingEnabled", L);
  var Q = sl(), B = h(Q);
  Zs(B, {
    get actor() {
      return a;
    },
    get metaData() {
      return u(E);
    },
    get editingEnabled() {
      return u(q);
    },
    get hitDiceData() {
      return u(se);
    }
  });
  var re = m(B, 2);
  fo(re, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    },
    get isBloodied() {
      return u(d);
    },
    get hitDiceData() {
      return u(se);
    },
    get hasMana() {
      return u(T);
    },
    get mana() {
      return u(w);
    },
    get wounds() {
      return u(N);
    },
    toggleWounds: A,
    updateCurrentHP: v,
    updateMaxHP: _,
    updateTempHP: p,
    updateCurrentMana: y,
    updateMaxMana: W,
    updateCurrentHitDice: S,
    rollHitDice: D,
    editCurrentHitDice: F
  });
  var X = m(re, 2);
  mo(X, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    }
  });
  var J = m(X, 2);
  al(J, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
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
  var Z = m(J, 2);
  il(Z, {
    get actor() {
      return a;
    },
    get editingEnabled() {
      return u(q);
    },
    toggleEditingEnabled: K,
    get classItem() {
      return u(g);
    }
  }), O(e, Q), we();
}
r(ol, "WhiteSheet");
const tt = class tt extends Gs(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  props;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = ol;
    const a = t.document.isToken ? t.document.parent?.actor : t.document;
    this._actor = a ?? t.document, this.props = { actor: this.document, sheet: this };
  }
  get actor() {
    return this._actor;
  }
  setPosition(t) {
    return t.width !== void 0 && t.width < tt.MIN_WIDTH && (t.width = tt.MIN_WIDTH), t.height !== void 0 && t.height < tt.MIN_HEIGHT && (t.height = tt.MIN_HEIGHT), super.setPosition(t);
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
r(tt, "WhiteCharacterSheet"), We(tt, "MIN_WIDTH", 650), We(tt, "MIN_HEIGHT", 400), We(tt, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Da = tt;
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
