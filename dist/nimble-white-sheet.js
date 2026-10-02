var aa = Object.defineProperty;
var ia = (e) => {
  throw TypeError(e);
};
var Hi = (e, t, n) => t in e ? aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t) => aa(e, "name", { value: t, configurable: !0 });
var De = (e, t, n) => Hi(e, typeof t != "symbol" ? t + "" : t, n), gr = (e, t, n) => t.has(e) || ia("Cannot " + n);
var b = (e, t, n) => (gr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), U = (e, t, n) => t.has(e) ? ia("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), z = (e, t, n, a) => (gr(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), fe = (e, t, n) => (gr(e, t, "access private method"), n);
const se = /* @__PURE__ */ Symbol(), Ri = /* @__PURE__ */ Symbol("filename"), Pi = "http://www.w3.org/1999/xhtml", sa = globalThis.process?.env?.NODE_ENV, T = sa && !sa.toLowerCase().startsWith("prod");
var Na = Array.isArray, Fi = Array.prototype.indexOf, Vt = Array.prototype.includes, nr = Array.from, Yt = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, ji = Object.getOwnPropertyDescriptors, Ui = Object.prototype, zi = Array.prototype, Ca = Object.getPrototypeOf, oa = Object.isExtensible;
const qn = /* @__PURE__ */ i(() => {
}, "noop");
function Bi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
i(Bi, "run_all");
function Ta() {
  var e, t, n = new Promise((a, r) => {
    e = a, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
i(Ta, "deferred");
function Wa(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const a of e)
    if (n.push(a), n.length === t) break;
  return n;
}
i(Wa, "to_array");
const oe = 2, xr = 4, rr = 8, Aa = 1 << 24, bt = 16, Xe = 32, Jt = 64, Br = 128, Fe = 512, ae = 1024, le = 2048, Qe = 4096, Te = 8192, xt = 16384, Kr = 32768, Zt = 65536, Zn = 1 << 17, Ia = 1 << 18, wn = 1 << 19, Ki = 1 << 20, _t = 1 << 25, At = 32768, Nr = 1 << 21, ar = 1 << 22, Nt = 1 << 23, on = /* @__PURE__ */ Symbol("$state"), qi = /* @__PURE__ */ Symbol(""), Ma = /* @__PURE__ */ Symbol("proxy path");
var cn;
const rn = new (cn = class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}, i(cn, "StaleReactionError"), cn)();
function qr(e) {
  if (T) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
i(qr, "lifecycle_outside_component");
function Gi() {
  if (T) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
i(Gi, "async_derived_orphan");
function la() {
  if (T) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
i(la, "bind_invalid_checkbox_value");
function Vi() {
  if (T) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
i(Vi, "derived_references_self");
function Da(e, t, n) {
  if (T) {
    const a = new Error(`each_key_duplicate
${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    throw a.name = "Svelte error", a;
  } else
    throw new Error("https://svelte.dev/e/each_key_duplicate");
}
i(Da, "each_key_duplicate");
function Yi(e) {
  if (T) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
i(Yi, "effect_in_teardown");
function Zi() {
  if (T) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
i(Zi, "effect_in_unowned_derived");
function Qi(e) {
  if (T) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
i(Qi, "effect_orphan");
function Xi() {
  if (T) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
i(Xi, "effect_update_depth_exceeded");
function Ji() {
  if (T) {
    const e = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
i(Ji, "invalid_snippet");
function $i(e) {
  if (T) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
i($i, "rune_outside_svelte");
function es() {
  if (T) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
i(es, "state_descriptors_fixed");
function ts() {
  if (T) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
i(ts, "state_prototype_fixed");
function ns() {
  if (T) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
i(ns, "state_unsafe_mutation");
function rs() {
  if (T) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
i(rs, "svelte_boundary_reset_onerror");
var ir = "font-weight: bold", sr = "font-weight: normal";
function as() {
  T ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, ir, sr) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
i(as, "lifecycle_double_unmount");
function pr(e) {
  T ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, ir, sr) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
i(pr, "state_proxy_equality_mismatch");
function is() {
  T ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, ir, sr) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
i(is, "state_proxy_unmount");
function ss() {
  T ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", ir, sr) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
i(ss, "svelte_boundary_reset_noop");
function La(e) {
  return e === this.v;
}
i(La, "equals");
function Oa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
i(Oa, "safe_not_equal");
function Ha(e) {
  return !Oa(e, this.v);
}
i(Ha, "safe_equals");
let os = !1;
function $e(e, t) {
  return e.label = t, Ra(e.v, t), e;
}
i($e, "tag");
function Ra(e, t) {
  return e?.[Ma]?.(t), e;
}
i(Ra, "tag_proxy");
function ls(e) {
  const t = new Error(), n = cs();
  return n.length === 0 ? null : (n.unshift(`
`), Yt(t, "stack", {
    value: n.join(`
`)
  }), Yt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
i(ls, "get_error");
function cs() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), a = [];
  for (let r = 0; r < n.length; r++) {
    const s = n[r], o = s.replaceAll("\\", "/");
    if (s.trim() !== "Error") {
      if (s.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || a.push(s);
    }
  }
  return a;
}
i(cs, "get_stack");
let ne = null;
function mn(e) {
  ne = e;
}
i(mn, "set_component_context");
let An = null;
function Qn(e) {
  An = e;
}
i(Qn, "set_dev_stack");
let Rn = null;
function ca(e) {
  Rn = e;
}
i(ca, "set_dev_current_component_function");
function Bn(e, t) {
  return us("setContext").set(e, t), t;
}
i(Bn, "setContext");
function ce(e, t = !1, n) {
  ne = {
    p: ne,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, T && (ne.function = n, Rn = n);
}
i(ce, "push");
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      ai(a);
  }
  return t.i = !0, ne = t.p, T && (Rn = ne?.function ?? null), /** @type {T} */
  {};
}
i(ue, "pop");
function Pa() {
  return !0;
}
i(Pa, "is_runes");
function us(e) {
  return ne === null && qr(e), ne.c ??= new Map(fs(ne) || void 0);
}
i(us, "get_or_init_context_map");
function fs(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
i(fs, "get_parent_context");
let Ht = [];
function Fa() {
  var e = Ht;
  Ht = [], Bi(e);
}
i(Fa, "run_micro_tasks");
function Ct(e) {
  if (Ht.length === 0 && !Cn) {
    var t = Ht;
    queueMicrotask(() => {
      t === Ht && Fa();
    });
  }
  Ht.push(e);
}
i(Ct, "queue_micro_task");
function ds() {
  for (; Ht.length > 0; )
    Fa();
}
i(ds, "flush_tasks");
const Cr = /* @__PURE__ */ new WeakMap();
function ja(e) {
  var t = q;
  if (t === null)
    return B.f |= Nt, e;
  if (T && e instanceof Error && !Cr.has(e) && Cr.set(e, vs(e, t)), (t.f & Kr) === 0) {
    if ((t.f & Br) === 0)
      throw T && !t.parent && e instanceof Error && Ua(e), e;
    t.b.error(e);
  } else
    gn(e, t);
}
i(ja, "handle_error");
function gn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Br) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw T && e instanceof Error && Ua(e), e;
}
i(gn, "invoke_error_boundary");
function vs(e, t) {
  const n = sn(e, "message");
  if (!(n && !n.configurable)) {
    for (var a = Qr ? "  " : "	", r = `
${a}in ${t.fn?.name || "<unknown>"}`, s = t.ctx; s !== null; )
      r += `
${a}in ${s.function?.[Ri].split("/").pop()}`, s = s.p;
    return {
      message: e.message + `
${r}
`,
      stack: e.stack?.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
i(vs, "get_adjustments");
function Ua(e) {
  const t = Cr.get(e);
  t && (Yt(e, "message", {
    value: t.message
  }), Yt(e, "stack", {
    value: t.stack
  }));
}
i(Ua, "apply_adjustments");
const _s = -7169;
function ee(e, t) {
  e.f = e.f & _s | t;
}
i(ee, "set_signal_status");
function Gr(e) {
  (e.f & Fe) !== 0 || e.deps === null ? ee(e, ae) : ee(e, Qe);
}
i(Gr, "update_derived_status");
function za(e) {
  if (e !== null)
    for (const t of e)
      (t.f & oe) === 0 || (t.f & At) === 0 || (t.f ^= At, za(
        /** @type {Derived} */
        t.deps
      ));
}
i(za, "clear_marked");
function Ba(e, t, n) {
  (e.f & le) !== 0 ? t.add(e) : (e.f & Qe) !== 0 && n.add(e), za(e.deps), ee(e, ae);
}
i(Ba, "defer_effect");
const Kn = /* @__PURE__ */ new Set();
let G = null, Tr = null, qe = null, me = [], or = null, Wr = !1, Cn = !1;
var un, fn, Ft, dn, Dn, Ln, jt, dt, vn, st, Ar, Ir, Ka;
const $n = class $n {
  constructor() {
    U(this, st);
    De(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    De(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    De(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    U(this, un, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    U(this, fn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    U(this, Ft, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    U(this, dn, 0);
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
    U(this, Ln, /* @__PURE__ */ new Set());
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
    U(this, dt, /* @__PURE__ */ new Map());
    De(this, "is_fork", !1);
    U(this, vn, !1);
  }
  is_deferred() {
    return this.is_fork || b(this, dn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    b(this, dt).has(t) || b(this, dt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = b(this, dt).get(t);
    if (n) {
      b(this, dt).delete(t);
      for (var a of n.d)
        ee(a, le), Ge(a);
      for (a of n.m)
        ee(a, Qe), Ge(a);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    me = [], this.apply();
    var n = [], a = [];
    for (const r of t)
      fe(this, st, Ar).call(this, r, n, a);
    if (this.is_deferred()) {
      fe(this, st, Ir).call(this, a), fe(this, st, Ir).call(this, n);
      for (const [r, s] of b(this, dt))
        Ya(r, s);
    } else {
      for (const r of b(this, un)) r();
      b(this, un).clear(), b(this, Ft) === 0 && fe(this, st, Ka).call(this), Tr = this, G = null, ua(a), ua(n), Tr = null, b(this, Dn)?.resolve();
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
    n !== se && !this.previous.has(t) && this.previous.set(t, n), (t.f & Nt) === 0 && (this.current.set(t, t.v), qe?.set(t, t.v));
  }
  activate() {
    G = this, this.apply();
  }
  deactivate() {
    G === this && (G = null, qe = null);
  }
  flush() {
    if (this.activate(), me.length > 0) {
      if (qa(), G !== null && G !== this)
        return;
    } else b(this, Ft) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of b(this, fn)) t(this);
    b(this, fn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    z(this, Ft, b(this, Ft) + 1), t && z(this, dn, b(this, dn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    z(this, Ft, b(this, Ft) - 1), t && z(this, dn, b(this, dn) - 1), !b(this, vn) && (z(this, vn, !0), Ct(() => {
      z(this, vn, !1), this.is_deferred() ? me.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of b(this, Ln))
      b(this, jt).delete(t), ee(t, le), Ge(t);
    for (const t of b(this, jt))
      ee(t, Qe), Ge(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    b(this, un).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    b(this, fn).add(t);
  }
  settled() {
    return (b(this, Dn) ?? z(this, Dn, Ta())).promise;
  }
  static ensure() {
    if (G === null) {
      const t = G = new $n();
      Kn.add(G), Cn || Ct(() => {
        G === t && t.flush();
      });
    }
    return G;
  }
  apply() {
  }
};
un = new WeakMap(), fn = new WeakMap(), Ft = new WeakMap(), dn = new WeakMap(), Dn = new WeakMap(), Ln = new WeakMap(), jt = new WeakMap(), dt = new WeakMap(), vn = new WeakMap(), st = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ar = /* @__PURE__ */ i(function(t, n, a) {
  t.f ^= ae;
  for (var r = t.first, s = null; r !== null; ) {
    var o = r.f, c = (o & (Xe | Jt)) !== 0, l = c && (o & ae) !== 0, f = l || (o & Te) !== 0 || b(this, dt).has(r);
    if (!f && r.fn !== null) {
      c ? r.f ^= ae : s !== null && (o & (xr | rr | Aa)) !== 0 ? s.b.defer_effect(r) : (o & xr) !== 0 ? n.push(r) : Fn(r) && ((o & bt) !== 0 && b(this, jt).add(r), In(r));
      var _ = r.first;
      if (_ !== null) {
        r = _;
        continue;
      }
    }
    var h = r.parent;
    for (r = r.next; r === null && h !== null; )
      h === s && (s = null), r = h.next, h = h.parent;
  }
}, "#traverse_effect_tree"), /**
 * @param {Effect[]} effects
 */
Ir = /* @__PURE__ */ i(function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ba(t[n], b(this, Ln), b(this, jt));
}, "#defer_effects"), Ka = /* @__PURE__ */ i(function() {
  var r;
  if (Kn.size > 1) {
    this.previous.clear();
    var t = qe, n = !0;
    for (const s of Kn) {
      if (s === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [l, f] of this.current) {
        if (s.current.has(l))
          if (n && f !== s.current.get(l))
            s.current.set(l, f);
          else
            continue;
        o.push(l);
      }
      if (o.length === 0)
        continue;
      const c = [...s.current.keys()].filter((l) => !this.current.has(l));
      if (c.length > 0) {
        var a = me;
        me = [];
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const _ of o)
          Ga(_, c, l, f);
        if (me.length > 0) {
          G = s, s.apply();
          for (const _ of me)
            fe(r = s, st, Ar).call(r, _, [], []);
          s.deactivate();
        }
        me = a;
      }
    }
    G = null, qe = t;
  }
  this.committed = !0, Kn.delete(this);
}, "#commit"), i($n, "Batch");
let Tt = $n;
function hs(e) {
  var t = Cn;
  Cn = !0;
  try {
    for (var n; ; ) {
      if (ds(), me.length === 0 && (G?.flush(), me.length === 0))
        return or = null, /** @type {T} */
        n;
      qa();
    }
  } finally {
    Cn = t;
  }
}
i(hs, "flushSync");
function qa() {
  Wr = !0;
  var e = T ? /* @__PURE__ */ new Set() : null;
  try {
    for (var t = 0; me.length > 0; ) {
      var n = Tt.ensure();
      if (t++ > 1e3) {
        if (T) {
          var a = /* @__PURE__ */ new Map();
          for (const s of n.current.keys())
            for (const [o, c] of s.updated ?? []) {
              var r = a.get(o);
              r || (r = { error: c.error, count: 0 }, a.set(o, r)), r.count += c.count;
            }
          for (const s of a.values())
            s.error && console.error(s.error);
        }
        bs();
      }
      if (n.process(me), Wt.clear(), T)
        for (const s of n.current.keys())
          e.add(s);
    }
  } finally {
    if (me = [], Wr = !1, or = null, T)
      for (
        const s of
        /** @type {Set<Source>} */
        e
      )
        s.updated = null;
  }
}
i(qa, "flush_effects");
function bs() {
  try {
    Xi();
  } catch (e) {
    T && Yt(e, "stack", { value: "" }), gn(e, or);
  }
}
i(bs, "infinite_loop_guard");
let ft = null;
function ua(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if ((a.f & (xt | Te)) === 0 && Fn(a) && (ft = /* @__PURE__ */ new Set(), In(a), a.deps === null && a.first === null && a.nodes === null && (a.teardown === null && a.ac === null ? ci(a) : a.fn = null), ft?.size > 0)) {
        Wt.clear();
        for (const r of ft) {
          if ((r.f & (xt | Te)) !== 0) continue;
          const s = [r];
          let o = r.parent;
          for (; o !== null; )
            ft.has(o) && (ft.delete(o), s.push(o)), o = o.parent;
          for (let c = s.length - 1; c >= 0; c--) {
            const l = s[c];
            (l.f & (xt | Te)) === 0 && In(l);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
i(ua, "flush_queued_effects");
function Ga(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const s = r.f;
      (s & oe) !== 0 ? Ga(
        /** @type {Derived} */
        r,
        t,
        n,
        a
      ) : (s & (ar | bt)) !== 0 && (s & le) === 0 && Va(r, t, a) && (ee(r, le), Ge(
        /** @type {Effect} */
        r
      ));
    }
}
i(Ga, "mark_effects");
function Va(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (Vt.call(t, r))
        return !0;
      if ((r.f & oe) !== 0 && Va(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
i(Va, "depends_on");
function Ge(e) {
  for (var t = or = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Wr && t === q && (n & bt) !== 0 && (n & Ia) === 0)
      return;
    if ((n & (Jt | Xe)) !== 0) {
      if ((n & ae) === 0) return;
      t.f ^= ae;
    }
  }
  me.push(t);
}
i(Ge, "schedule_effect");
function Ya(e, t) {
  if (!((e.f & Xe) !== 0 && (e.f & ae) !== 0)) {
    (e.f & le) !== 0 ? t.d.push(e) : (e.f & Qe) !== 0 && t.m.push(e), ee(e, ae);
    for (var n = e.first; n !== null; )
      Ya(n, t), n = n.next;
  }
}
i(Ya, "reset_branch");
function Za(e) {
  let t = 0, n = Qt(0), a;
  return T && $e(n, "createSubscriber version"), () => {
    Xr() && (u(n), ii(() => (t === 0 && (a = ur(() => e(() => Tn(n)))), t += 1, () => {
      Ct(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, Tn(n));
      });
    })));
  };
}
i(Za, "createSubscriber");
var ms = Zt | wn | Br;
function gs(e, t, n) {
  new Mr(e, t, n);
}
i(gs, "boundary");
var Oe, zr, tt, Ut, nt, He, be, rt, vt, St, zt, Et, _n, Bt, hn, bn, at, er, ie, ps, ys, Dr, Gn, Vn, Lr;
const ta = class ta {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, a) {
    U(this, ie);
    /** @type {Boundary | null} */
    De(this, "parent");
    De(this, "is_pending", !1);
    /** @type {TemplateNode} */
    U(this, Oe);
    /** @type {TemplateNode | null} */
    U(this, zr, null);
    /** @type {BoundaryProps} */
    U(this, tt);
    /** @type {((anchor: Node) => void)} */
    U(this, Ut);
    /** @type {Effect} */
    U(this, nt);
    /** @type {Effect | null} */
    U(this, He, null);
    /** @type {Effect | null} */
    U(this, be, null);
    /** @type {Effect | null} */
    U(this, rt, null);
    /** @type {DocumentFragment | null} */
    U(this, vt, null);
    /** @type {TemplateNode | null} */
    U(this, St, null);
    U(this, zt, 0);
    U(this, Et, 0);
    U(this, _n, !1);
    U(this, Bt, !1);
    /** @type {Set<Effect>} */
    U(this, hn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    U(this, bn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    U(this, at, null);
    U(this, er, Za(() => (z(this, at, Qt(b(this, zt))), T && $e(b(this, at), "$effect.pending()"), () => {
      z(this, at, null);
    })));
    z(this, Oe, t), z(this, tt, n), z(this, Ut, a), this.parent = /** @type {Effect} */
    q.b, this.is_pending = !!b(this, tt).pending, z(this, nt, cr(() => {
      q.b = this;
      {
        var r = fe(this, ie, Dr).call(this);
        try {
          z(this, He, Re(() => a(r)));
        } catch (s) {
          this.error(s);
        }
        b(this, Et) > 0 ? fe(this, ie, Vn).call(this) : this.is_pending = !1;
      }
      return () => {
        b(this, St)?.remove();
      };
    }, ms));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ba(t, b(this, hn), b(this, bn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, tt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    fe(this, ie, Lr).call(this, t), z(this, zt, b(this, zt) + t), !(!b(this, at) || b(this, _n)) && (z(this, _n, !0), Ct(() => {
      z(this, _n, !1), b(this, at) && yn(b(this, at), b(this, zt));
    }));
  }
  get_effect_pending() {
    return b(this, er).call(this), u(
      /** @type {Source<number>} */
      b(this, at)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = b(this, tt).onerror;
    let a = b(this, tt).failed;
    if (b(this, Bt) || !n && !a)
      throw t;
    b(this, He) && (ye(b(this, He)), z(this, He, null)), b(this, be) && (ye(b(this, be)), z(this, be, null)), b(this, rt) && (ye(b(this, rt)), z(this, rt, null));
    var r = !1, s = !1;
    const o = /* @__PURE__ */ i(() => {
      if (r) {
        ss();
        return;
      }
      r = !0, s && rs(), Tt.ensure(), z(this, zt, 0), b(this, rt) !== null && qt(b(this, rt), () => {
        z(this, rt, null);
      }), this.is_pending = this.has_pending_snippet(), z(this, He, fe(this, ie, Gn).call(this, () => (z(this, Bt, !1), Re(() => b(this, Ut).call(this, b(this, Oe)))))), b(this, Et) > 0 ? fe(this, ie, Vn).call(this) : this.is_pending = !1;
    }, "reset");
    Ct(() => {
      try {
        s = !0, n?.(t, o), s = !1;
      } catch (c) {
        gn(c, b(this, nt) && b(this, nt).parent);
      }
      a && z(this, rt, fe(this, ie, Gn).call(this, () => {
        Tt.ensure(), z(this, Bt, !0);
        try {
          return Re(() => {
            a(
              b(this, Oe),
              () => t,
              () => o
            );
          });
        } catch (c) {
          return gn(
            c,
            /** @type {Effect} */
            b(this, nt).parent
          ), null;
        } finally {
          z(this, Bt, !1);
        }
      }));
    });
  }
};
Oe = new WeakMap(), zr = new WeakMap(), tt = new WeakMap(), Ut = new WeakMap(), nt = new WeakMap(), He = new WeakMap(), be = new WeakMap(), rt = new WeakMap(), vt = new WeakMap(), St = new WeakMap(), zt = new WeakMap(), Et = new WeakMap(), _n = new WeakMap(), Bt = new WeakMap(), hn = new WeakMap(), bn = new WeakMap(), at = new WeakMap(), er = new WeakMap(), ie = new WeakSet(), ps = /* @__PURE__ */ i(function() {
  try {
    z(this, He, Re(() => b(this, Ut).call(this, b(this, Oe))));
  } catch (t) {
    this.error(t);
  }
}, "#hydrate_resolved_content"), ys = /* @__PURE__ */ i(function() {
  const t = b(this, tt).pending;
  t && (z(this, be, Re(() => t(b(this, Oe)))), Ct(() => {
    var n = fe(this, ie, Dr).call(this);
    z(this, He, fe(this, ie, Gn).call(this, () => (Tt.ensure(), Re(() => b(this, Ut).call(this, n))))), b(this, Et) > 0 ? fe(this, ie, Vn).call(this) : (qt(
      /** @type {Effect} */
      b(this, be),
      () => {
        z(this, be, null);
      }
    ), this.is_pending = !1);
  }));
}, "#hydrate_pending_content"), Dr = /* @__PURE__ */ i(function() {
  var t = b(this, Oe);
  return this.is_pending && (z(this, St, ht()), b(this, Oe).before(b(this, St)), t = b(this, St)), t;
}, "#get_anchor"), /**
 * @param {() => Effect | null} fn
 */
Gn = /* @__PURE__ */ i(function(t) {
  var n = q, a = B, r = ne;
  Ze(b(this, nt)), ze(b(this, nt)), mn(b(this, nt).ctx);
  try {
    return t();
  } catch (s) {
    return ja(s), null;
  } finally {
    Ze(n), ze(a), mn(r);
  }
}, "#run"), Vn = /* @__PURE__ */ i(function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    b(this, tt).pending
  );
  b(this, He) !== null && (z(this, vt, document.createDocumentFragment()), b(this, vt).append(
    /** @type {TemplateNode} */
    b(this, St)
  ), vi(b(this, He), b(this, vt))), b(this, be) === null && z(this, be, Re(() => t(b(this, Oe))));
}, "#show_pending_snippet"), /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Lr = /* @__PURE__ */ i(function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && fe(n = this.parent, ie, Lr).call(n, t);
    return;
  }
  if (z(this, Et, b(this, Et) + t), b(this, Et) === 0) {
    this.is_pending = !1;
    for (const a of b(this, hn))
      ee(a, le), Ge(a);
    for (const a of b(this, bn))
      ee(a, Qe), Ge(a);
    b(this, hn).clear(), b(this, bn).clear(), b(this, be) && qt(b(this, be), () => {
      z(this, be, null);
    }), b(this, vt) && (b(this, Oe).before(b(this, vt)), z(this, vt, null));
  }
}, "#update_pending_count"), i(ta, "Boundary");
let Mr = ta;
function ws(e, t, n, a) {
  const r = Vr;
  var s = e.filter((v) => !v.settled);
  if (n.length === 0 && s.length === 0) {
    a(t.map(r));
    return;
  }
  var o = G, c = (
    /** @type {Effect} */
    q
  ), l = Ss(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function _(v) {
    l();
    try {
      a(v);
    } catch (p) {
      (c.f & xt) === 0 && gn(p, c);
    }
    o?.deactivate(), Or();
  }
  if (i(_, "finish"), n.length === 0) {
    f.then(() => _(t.map(r)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((v) => /* @__PURE__ */ ks(v))).then((v) => _([...t.map(r), ...v])).catch((v) => gn(v, c));
  }
  i(h, "run"), f ? f.then(h) : h();
}
i(ws, "flatten");
function Ss() {
  var e = q, t = B, n = ne, a = G;
  if (T)
    var r = An;
  return /* @__PURE__ */ i(function(o = !0) {
    Ze(e), ze(t), mn(n), o && a?.activate(), T && Qn(r);
  }, "restore");
}
i(Ss, "capture");
function Or() {
  Ze(null), ze(null), mn(null), T && Qn(null);
}
i(Or, "unset_context");
const Es = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = oe | le, n = B !== null && (B.f & oe) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return q !== null && (q.f |= wn), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: La,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      se
    ),
    wv: 0,
    parent: n ?? q,
    ac: null
  };
}
i(Vr, "derived");
// @__NO_SIDE_EFFECTS__
function ks(e, t, n) {
  let a = (
    /** @type {Effect | null} */
    q
  );
  a === null && Gi();
  var r = (
    /** @type {Boundary} */
    a.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Qt(
    /** @type {V} */
    se
  );
  T && (o.label = t);
  var c = !B, l = /* @__PURE__ */ new Map();
  return js(() => {
    var f = Ta();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        _ === G && _.committed && _.deactivate(), Or();
      });
    } catch (p) {
      f.reject(p), Or();
    }
    var _ = (
      /** @type {Batch} */
      G
    );
    if (c) {
      var h = r.is_rendered();
      r.update_pending_count(1), _.increment(h), l.get(_)?.reject(rn), l.delete(_), l.set(_, f);
    }
    const v = /* @__PURE__ */ i((p, w = void 0) => {
      if (_.activate(), w)
        w !== rn && (o.f |= Nt, yn(o, w));
      else {
        (o.f & Nt) !== 0 && (o.f ^= Nt), yn(o, p);
        for (const [S, d] of l) {
          if (l.delete(S), S === _) break;
          d.reject(rn);
        }
      }
      c && (r.update_pending_count(-1), _.decrement(h));
    }, "handler");
    f.promise.then(v, (p) => v(null, p || "unknown"));
  }), ni(() => {
    for (const f of l.values())
      f.reject(rn);
  }), T && (o.f |= ar), new Promise((f) => {
    function _(h) {
      function v() {
        h === s ? f(o) : _(s);
      }
      i(v, "go"), h.then(v, v);
    }
    i(_, "next"), _(s);
  });
}
i(ks, "async_derived");
// @__NO_SIDE_EFFECTS__
function M(e) {
  const t = /* @__PURE__ */ Vr(e);
  return _i(t), t;
}
i(M, "user_derived");
// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Vr(e);
  return t.equals = Ha, t;
}
i(xs, "derived_safe_equal");
function Hr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ye(
        /** @type {Effect} */
        t[n]
      );
  }
}
i(Hr, "destroy_derived_effects");
let yr = [];
function Ns(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & oe) === 0)
      return (t.f & xt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
i(Ns, "get_derived_parent_effect");
function Yr(e) {
  var t, n = q;
  if (Ze(Ns(e)), T) {
    let a = pn;
    fa(/* @__PURE__ */ new Set());
    try {
      Vt.call(yr, e) && Vi(), yr.push(e), e.f &= ~At, Hr(e), t = Rr(e);
    } finally {
      Ze(n), fa(a), yr.pop();
    }
  } else
    try {
      e.f &= ~At, Hr(e), t = Rr(e);
    } finally {
      Ze(n);
    }
  return t;
}
i(Yr, "execute_derived");
function Qa(e) {
  var t = Yr(e);
  if (!e.equals(t) && (e.wv = bi(), (!G?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    ee(e, ae);
    return;
  }
  Xt || (qe !== null ? (Xr() || G?.is_fork) && qe.set(e, t) : Gr(e));
}
i(Qa, "update_derived");
let pn = /* @__PURE__ */ new Set();
const Wt = /* @__PURE__ */ new Map();
function fa(e) {
  pn = e;
}
i(fa, "set_eager_effects");
let Zr = !1;
function Cs() {
  Zr = !0;
}
i(Cs, "set_eager_effects_deferred");
function Qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: La,
    rv: 0,
    wv: 0
  };
  return n;
}
i(Qt, "source");
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  const n = Qt(e);
  return _i(n), n;
}
i(ge, "state");
// @__NO_SIDE_EFFECTS__
function Ts(e, t = !1, n = !0) {
  const a = Qt(e);
  return t || (a.equals = Ha), a;
}
i(Ts, "mutable_source");
function _e(e, t, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ve || (B.f & Zn) !== 0) && Pa() && (B.f & (oe | bt | ar | Zn)) !== 0 && (je === null || !Vt.call(je, e)) && ns();
  let a = n ? Rt(t) : t;
  return T && Ra(
    a,
    /** @type {string} */
    e.label
  ), yn(e, a);
}
i(_e, "set");
function yn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Xt ? Wt.set(e, t) : Wt.set(e, n), e.v = t;
    var a = Tt.ensure();
    if (a.capture(e, n), T) {
      if (q !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const r = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: r }), r > 5) {
          const s = ls("updated at");
          if (s !== null) {
            let o = e.updated.get(s.stack);
            o || (o = { error: s, count: 0 }, e.updated.set(s.stack, o)), o.count++;
          }
        }
      }
      q !== null && (e.set_during_effect = !0);
    }
    if ((e.f & oe) !== 0) {
      const r = (
        /** @type {Derived} */
        e
      );
      (e.f & le) !== 0 && Yr(r), Gr(r);
    }
    e.wv = bi(), Ja(e, le), q !== null && (q.f & ae) !== 0 && (q.f & (Xe | Jt)) === 0 && (Le === null ? zs([e]) : Le.push(e)), !a.is_fork && pn.size > 0 && !Zr && Xa();
  }
  return t;
}
i(yn, "internal_set");
function Xa() {
  Zr = !1;
  for (const e of pn)
    (e.f & ae) !== 0 && ee(e, Qe), Fn(e) && In(e);
  pn.clear();
}
i(Xa, "flush_eager_effects");
function Tn(e) {
  _e(e, e.v + 1);
}
i(Tn, "increment");
function Ja(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, r = 0; r < a; r++) {
      var s = n[r], o = s.f;
      if (T && (o & Zn) !== 0) {
        pn.add(s);
        continue;
      }
      var c = (o & le) === 0;
      if (c && ee(s, t), (o & oe) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        qe?.delete(l), (o & At) === 0 && (o & Fe && (s.f |= At), Ja(l, Qe));
      } else c && ((o & bt) !== 0 && ft !== null && ft.add(
        /** @type {Effect} */
        s
      ), Ge(
        /** @type {Effect} */
        s
      ));
    }
}
i(Ja, "mark_reactions");
const Ws = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Rt(e) {
  if (typeof e != "object" || e === null || on in e)
    return e;
  const t = Ca(e);
  if (t !== Ui && t !== zi)
    return e;
  var n = /* @__PURE__ */ new Map(), a = Na(e), r = /* @__PURE__ */ ge(0), s = Gt, o = /* @__PURE__ */ i((_) => {
    if (Gt === s)
      return _();
    var h = B, v = Gt;
    ze(null), ha(s);
    var p = _();
    return ze(h), ha(v), p;
  }, "with_parent");
  a && (n.set("length", /* @__PURE__ */ ge(
    /** @type {any[]} */
    e.length
  )), T && (e = /** @type {any} */
  Is(
    /** @type {any[]} */
    e
  )));
  var c = "";
  let l = !1;
  function f(_) {
    if (!l) {
      l = !0, c = _, $e(r, `${c} version`);
      for (const [h, v] of n)
        $e(v, Lt(c, h));
      l = !1;
    }
  }
  return i(f, "update_path"), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(_, h, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && es();
        var p = n.get(h);
        return p === void 0 ? p = o(() => {
          var w = /* @__PURE__ */ ge(v.value);
          return n.set(h, w), T && typeof h == "string" && $e(w, Lt(c, h)), w;
        }) : _e(p, v.value, !0), !0;
      },
      deleteProperty(_, h) {
        var v = n.get(h);
        if (v === void 0) {
          if (h in _) {
            const p = o(() => /* @__PURE__ */ ge(se));
            n.set(h, p), Tn(r), T && $e(p, Lt(c, h));
          }
        } else
          _e(v, se), Tn(r);
        return !0;
      },
      get(_, h, v) {
        if (h === on)
          return e;
        if (T && h === Ma)
          return f;
        var p = n.get(h), w = h in _;
        if (p === void 0 && (!w || sn(_, h)?.writable) && (p = o(() => {
          var d = Rt(w ? _[h] : se), E = /* @__PURE__ */ ge(d);
          return T && $e(E, Lt(c, h)), E;
        }), n.set(h, p)), p !== void 0) {
          var S = u(p);
          return S === se ? void 0 : S;
        }
        return Reflect.get(_, h, v);
      },
      getOwnPropertyDescriptor(_, h) {
        var v = Reflect.getOwnPropertyDescriptor(_, h);
        if (v && "value" in v) {
          var p = n.get(h);
          p && (v.value = u(p));
        } else if (v === void 0) {
          var w = n.get(h), S = w?.v;
          if (w !== void 0 && S !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: S,
              writable: !0
            };
        }
        return v;
      },
      has(_, h) {
        if (h === on)
          return !0;
        var v = n.get(h), p = v !== void 0 && v.v !== se || Reflect.has(_, h);
        if (v !== void 0 || q !== null && (!p || sn(_, h)?.writable)) {
          v === void 0 && (v = o(() => {
            var S = p ? Rt(_[h]) : se, d = /* @__PURE__ */ ge(S);
            return T && $e(d, Lt(c, h)), d;
          }), n.set(h, v));
          var w = u(v);
          if (w === se)
            return !1;
        }
        return p;
      },
      set(_, h, v, p) {
        var w = n.get(h), S = h in _;
        if (a && h === "length")
          for (var d = v; d < /** @type {Source<number>} */
          w.v; d += 1) {
            var E = n.get(d + "");
            E !== void 0 ? _e(E, se) : d in _ && (E = o(() => /* @__PURE__ */ ge(se)), n.set(d + "", E), T && $e(E, Lt(c, d)));
          }
        if (w === void 0)
          (!S || sn(_, h)?.writable) && (w = o(() => /* @__PURE__ */ ge(void 0)), T && $e(w, Lt(c, h)), _e(w, Rt(v)), n.set(h, w));
        else {
          S = w.v !== se;
          var A = o(() => Rt(v));
          _e(w, A);
        }
        var y = Reflect.getOwnPropertyDescriptor(_, h);
        if (y?.set && y.set.call(p, v), !S) {
          if (a && typeof h == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(h);
            Number.isInteger(C) && C >= x.v && _e(x, C + 1);
          }
          Tn(r);
        }
        return !0;
      },
      ownKeys(_) {
        u(r);
        var h = Reflect.ownKeys(_).filter((w) => {
          var S = n.get(w);
          return S === void 0 || S.v !== se;
        });
        for (var [v, p] of n)
          p.v !== se && !(v in _) && h.push(v);
        return h;
      },
      setPrototypeOf() {
        ts();
      }
    }
  );
}
i(Rt, "proxy");
function Lt(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Ws.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
i(Lt, "get_label");
function wr(e) {
  try {
    if (e !== null && typeof e == "object" && on in e)
      return e[on];
  } catch {
  }
  return e;
}
i(wr, "get_proxied_value");
const As = /* @__PURE__ */ new Set([
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
function Is(e) {
  return new Proxy(e, {
    get(t, n, a) {
      var r = Reflect.get(t, n, a);
      return As.has(
        /** @type {string} */
        n
      ) ? function(...s) {
        Cs();
        var o = r.apply(this, s);
        return Xa(), o;
      } : r;
    }
  });
}
i(Is, "inspectable_array");
function Ms() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: a, includes: r } = e;
  e.indexOf = function(s, o) {
    const c = n.call(this, s, o);
    if (c === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (wr(this[l]) === s) {
          pr("array.indexOf(...)");
          break;
        }
    }
    return c;
  }, e.lastIndexOf = function(s, o) {
    const c = a.call(this, s, o ?? this.length - 1);
    if (c === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (wr(this[l]) === s) {
          pr("array.lastIndexOf(...)");
          break;
        }
    }
    return c;
  }, e.includes = function(s, o) {
    const c = r.call(this, s, o);
    if (!c) {
      for (let l = 0; l < this.length; l += 1)
        if (wr(this[l]) === s) {
          pr("array.includes(...)");
          break;
        }
    }
    return c;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = a, e.includes = r;
  };
}
i(Ms, "init_array_prototype_warnings");
var da, Qr, $a, ei;
function Ds() {
  if (da === void 0) {
    da = window, Qr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $a = sn(t, "firstChild").get, ei = sn(t, "nextSibling").get, oa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), oa(n) && (n.__t = void 0), T && (e.__svelte_meta = null, Ms());
  }
}
i(Ds, "init_operations");
function ht(e = "") {
  return document.createTextNode(e);
}
i(ht, "create_text");
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return (
    /** @type {TemplateNode | null} */
    $a.call(e)
  );
}
i(kt, "get_first_child");
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  return (
    /** @type {TemplateNode | null} */
    ei.call(e)
  );
}
i(Pn, "get_next_sibling");
function m(e, t) {
  return /* @__PURE__ */ kt(e);
}
i(m, "child");
function We(e, t = !1) {
  {
    var n = /* @__PURE__ */ kt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Pn(n) : n;
  }
}
i(We, "first_child");
function g(e, t = 1, n = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ Pn(a);
  return a;
}
i(g, "sibling");
function Ls(e) {
  e.textContent = "";
}
i(Ls, "clear_text_content");
function ti() {
  return !1;
}
i(ti, "should_defer_append");
let va = !1;
function Os() {
  va || (va = !0, document.addEventListener(
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
i(Os, "add_form_reset_listener");
function lr(e) {
  var t = B, n = q;
  ze(null), Ze(null);
  try {
    return e();
  } finally {
    ze(t), Ze(n);
  }
}
i(lr, "without_reactive_context");
function Hs(e, t, n, a = n) {
  e.addEventListener(t, () => lr(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), a(!0);
  } : e.__on_r = () => a(!0), Os();
}
i(Hs, "listen_to_event_and_reset_event");
function Rs(e) {
  q === null && (B === null && Qi(e), Zi()), Xt && Yi(e);
}
i(Rs, "validate_effect");
function Ps(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
i(Ps, "push_effect");
function It(e, t, n) {
  var a = q;
  if (T)
    for (; a !== null && (a.f & Zn) !== 0; )
      a = a.parent;
  a !== null && (a.f & Te) !== 0 && (e |= Te);
  var r = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | le | Fe,
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
  if (T && (r.component_function = Rn), n)
    try {
      In(r), r.f |= Kr;
    } catch (c) {
      throw ye(r), c;
    }
  else t !== null && Ge(r);
  var s = r;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & wn) === 0 && (s = s.first, (e & bt) !== 0 && (e & Zt) !== 0 && s !== null && (s.f |= Zt)), s !== null && (s.parent = a, a !== null && Ps(s, a), B !== null && (B.f & oe) !== 0 && (e & Jt) === 0)) {
    var o = (
      /** @type {Derived} */
      B
    );
    (o.effects ??= []).push(s);
  }
  return r;
}
i(It, "create_effect");
function Xr() {
  return B !== null && !Ve;
}
i(Xr, "effect_tracking");
function ni(e) {
  const t = It(rr, null, !1);
  return ee(t, ae), t.teardown = e, t;
}
i(ni, "teardown");
function ri(e) {
  Rs("$effect"), T && Yt(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    q.f
  ), n = !B && (t & Xe) !== 0 && (t & Kr) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      ne
    );
    (a.e ??= []).push(e);
  } else
    return ai(e);
}
i(ri, "user_effect");
function ai(e) {
  return It(xr | Ki, e, !1);
}
i(ai, "create_user_effect");
function Fs(e) {
  Tt.ensure();
  const t = It(Jt | wn, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? qt(t, () => {
      ye(t), a(void 0);
    }) : (ye(t), a(void 0));
  });
}
i(Fs, "component_root");
function js(e) {
  return It(ar | wn, e, !0);
}
i(js, "async_effect");
function ii(e, t = 0) {
  return It(rr | t, e, !0);
}
i(ii, "render_effect");
function j(e, t = [], n = [], a = []) {
  ws(a, t, n, (r) => {
    It(rr, () => e(...r.map(u)), !0);
  });
}
i(j, "template_effect");
function cr(e, t = 0) {
  var n = It(bt | t, e, !0);
  return T && (n.dev_stack = An), n;
}
i(cr, "block");
function Re(e) {
  return It(Xe | wn, e, !0);
}
i(Re, "branch");
function si(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Xt, a = B;
    _a(!0), ze(null);
    try {
      t.call(null);
    } finally {
      _a(n), ze(a);
    }
  }
}
i(si, "execute_effect_teardown");
function oi(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && lr(() => {
      r.abort(rn);
    });
    var a = n.next;
    (n.f & Jt) !== 0 ? n.parent = null : ye(n, t), n = a;
  }
}
i(oi, "destroy_effect_children");
function Us(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Xe) === 0 && ye(t), t = n;
  }
}
i(Us, "destroy_block_effect_children");
function ye(e, t = !0) {
  var n = !1;
  (t || (e.f & Ia) !== 0) && e.nodes !== null && e.nodes.end !== null && (li(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), oi(e, t && !n), Xn(e, 0), ee(e, xt);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const s of a)
      s.stop();
  si(e);
  var r = e.parent;
  r !== null && r.first !== null && ci(e), T && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
i(ye, "destroy_effect");
function li(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Pn(e);
    e.remove(), e = n;
  }
}
i(li, "remove_effect_dom");
function ci(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
i(ci, "unlink_effect");
function qt(e, t, n = !0) {
  var a = [];
  fi(e, a, !0);
  var r = /* @__PURE__ */ i(() => {
    n && ye(e), t && t();
  }, "fn"), s = a.length;
  if (s > 0) {
    var o = /* @__PURE__ */ i(() => --s || r(), "check");
    for (var c of a)
      c.out(o);
  } else
    r();
}
i(qt, "pause_effect");
function fi(e, t, n) {
  if ((e.f & Te) === 0) {
    e.f ^= Te;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && t.push(c);
    for (var r = e.first; r !== null; ) {
      var s = r.next, o = (r.f & Zt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Xe) !== 0 && (e.f & bt) !== 0;
      fi(r, t, o ? n : !1), r = s;
    }
  }
}
i(fi, "pause_children");
function Jr(e) {
  di(e, !0);
}
i(Jr, "resume_effect");
function di(e, t) {
  if ((e.f & Te) !== 0) {
    e.f ^= Te, (e.f & ae) === 0 && (ee(e, le), Ge(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, r = (n.f & Zt) !== 0 || (n.f & Xe) !== 0;
      di(n, r ? t : !1), n = a;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
i(di, "resume_children");
function vi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
      var r = n === a ? null : /* @__PURE__ */ Pn(n);
      t.append(n), n = r;
    }
}
i(vi, "move_effect");
let Yn = !1, Xt = !1;
function _a(e) {
  Xt = e;
}
i(_a, "set_is_destroying_effect");
let B = null, Ve = !1;
function ze(e) {
  B = e;
}
i(ze, "set_active_reaction");
let q = null;
function Ze(e) {
  q = e;
}
i(Ze, "set_active_effect");
let je = null;
function _i(e) {
  B !== null && (je === null ? je = [e] : je.push(e));
}
i(_i, "push_reaction_value");
let pe = null, Ne = 0, Le = null;
function zs(e) {
  Le = e;
}
i(zs, "set_untracked_writes");
let hi = 1, Pt = 0, Gt = Pt;
function ha(e) {
  Gt = e;
}
i(ha, "set_update_version");
function bi() {
  return ++hi;
}
i(bi, "increment_write_version");
function Fn(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & oe && (e.f &= ~At), (t & Qe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), a = n.length, r = 0; r < a; r++) {
      var s = n[r];
      if (Fn(
        /** @type {Derived} */
        s
      ) && Qa(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    qe === null && ee(e, ae);
  }
  return !1;
}
i(Fn, "is_dirty");
function mi(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(je !== null && Vt.call(je, e)))
    for (var r = 0; r < a.length; r++) {
      var s = a[r];
      (s.f & oe) !== 0 ? mi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? ee(s, le) : (s.f & ae) !== 0 && ee(s, Qe), Ge(
        /** @type {Effect} */
        s
      ));
    }
}
i(mi, "schedule_possible_effect_self_invalidation");
function Rr(e) {
  var t = pe, n = Ne, a = Le, r = B, s = je, o = ne, c = Ve, l = Gt, f = e.f;
  pe = /** @type {null | Value[]} */
  null, Ne = 0, Le = null, B = (f & (Xe | Jt)) === 0 ? e : null, je = null, mn(e.ctx), Ve = !1, Gt = ++Pt, e.ac !== null && (lr(() => {
    e.ac.abort(rn);
  }), e.ac = null);
  try {
    e.f |= Nr;
    var _ = (
      /** @type {Function} */
      e.fn
    ), h = _(), v = e.deps, p = G?.is_fork;
    if (pe !== null) {
      var w;
      if (p || Xn(e, Ne), v !== null && Ne > 0)
        for (v.length = Ne + pe.length, w = 0; w < pe.length; w++)
          v[Ne + w] = pe[w];
      else
        e.deps = v = pe;
      if (Xr() && (e.f & Fe) !== 0)
        for (w = Ne; w < v.length; w++)
          (v[w].reactions ??= []).push(e);
    } else !p && v !== null && Ne < v.length && (Xn(e, Ne), v.length = Ne);
    if (Pa() && Le !== null && !Ve && v !== null && (e.f & (oe | Qe | le)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Le.length; w++)
        mi(
          Le[w],
          /** @type {Effect} */
          e
        );
    if (r !== null && r !== e) {
      if (Pt++, r.deps !== null)
        for (let S = 0; S < n; S += 1)
          r.deps[S].rv = Pt;
      if (t !== null)
        for (const S of t)
          S.rv = Pt;
      Le !== null && (a === null ? a = Le : a.push(.../** @type {Source[]} */
      Le));
    }
    return (e.f & Nt) !== 0 && (e.f ^= Nt), h;
  } catch (S) {
    return ja(S);
  } finally {
    e.f ^= Nr, pe = t, Ne = n, Le = a, B = r, je = s, mn(o), Ve = c, Gt = l;
  }
}
i(Rr, "update_reaction");
function Bs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Fi.call(n, e);
    if (a !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[a] = n[r], n.pop());
    }
  }
  if (n === null && (t.f & oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (pe === null || !Vt.call(pe, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Fe) !== 0 && (s.f ^= Fe, s.f &= ~At), Gr(s), Hr(s), Xn(s, 0);
  }
}
i(Bs, "remove_reaction");
function Xn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      Bs(e, n[a]);
}
i(Xn, "remove_reactions");
function In(e) {
  var t = e.f;
  if ((t & xt) === 0) {
    ee(e, ae);
    var n = q, a = Yn;
    if (q = e, Yn = !0, T) {
      var r = Rn;
      ca(e.component_function);
      var s = (
        /** @type {any} */
        An
      );
      Qn(e.dev_stack ?? An);
    }
    try {
      (t & (bt | Aa)) !== 0 ? Us(e) : oi(e), si(e);
      var o = Rr(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = hi;
      var c;
      T && os && (e.f & le) !== 0 && e.deps;
    } finally {
      Yn = a, q = n, T && (ca(r), Qn(s));
    }
  }
}
i(In, "update_effect");
async function Ks() {
  await Promise.resolve(), hs();
}
i(Ks, "tick");
function u(e) {
  var t = e.f, n = (t & oe) !== 0;
  if (B !== null && !Ve) {
    var a = q !== null && (q.f & xt) !== 0;
    if (!a && (je === null || !Vt.call(je, e))) {
      var r = B.deps;
      if ((B.f & Nr) !== 0)
        e.rv < Pt && (e.rv = Pt, pe === null && r !== null && r[Ne] === e ? Ne++ : pe === null ? pe = [e] : pe.push(e));
      else {
        (B.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [B] : Vt.call(s, B) || s.push(B);
      }
    }
  }
  if (T && Es.delete(e), Xt && Wt.has(e))
    return Wt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Xt) {
      var c = o.v;
      return ((o.f & ae) === 0 && o.reactions !== null || pi(o)) && (c = Yr(o)), Wt.set(o, c), c;
    }
    var l = (o.f & Fe) === 0 && !Ve && B !== null && (Yn || (B.f & Fe) !== 0), f = o.deps === null;
    Fn(o) && (l && (o.f |= Fe), Qa(o)), l && !f && gi(o);
  }
  if (qe?.has(e))
    return qe.get(e);
  if ((e.f & Nt) !== 0)
    throw e.v;
  return e.v;
}
i(u, "get");
function gi(e) {
  if (e.deps !== null) {
    e.f |= Fe;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & oe) !== 0 && (t.f & Fe) === 0 && gi(
        /** @type {Derived} */
        t
      );
  }
}
i(gi, "reconnect");
function pi(e) {
  if (e.v === se) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Wt.has(t) || (t.f & oe) !== 0 && pi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
i(pi, "depends_on_old_values");
function ur(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
i(ur, "untrack");
const yi = /* @__PURE__ */ new Set(), Pr = /* @__PURE__ */ new Set();
function qs(e, t, n, a = {}) {
  function r(s) {
    if (a.capture || xn.call(t, s), !s.cancelBubble)
      return lr(() => n?.call(this, s));
  }
  return i(r, "target_handler"), e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ct(() => {
    t.addEventListener(e, r, a);
  }) : t.addEventListener(e, r, a), r;
}
i(qs, "create_event");
function $r(e, t, n, a, r) {
  var s = { capture: a, passive: r }, o = qs(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ni(() => {
    t.removeEventListener(e, o, s);
  });
}
i($r, "event");
function Ee(e) {
  for (var t = 0; t < e.length; t++)
    yi.add(e[t]);
  for (var n of Pr)
    n(e);
}
i(Ee, "delegate");
let ba = null;
function xn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, r = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  ba = e;
  var o = 0, c = ba === e && e.__root;
  if (c) {
    var l = r.indexOf(c);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = r.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (s = /** @type {Element} */
  r[o] || e.target, s !== t) {
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var _ = B, h = q;
    ze(null), Ze(null);
    try {
      for (var v, p = []; s !== null; ) {
        var w = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var S = s["__" + a];
          S != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && S.call(s, e);
        } catch (d) {
          v ? p.push(d) : v = d;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        s = w;
      }
      if (v) {
        for (let d of p)
          queueMicrotask(() => {
            throw d;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ze(_), Ze(h);
    }
  }
}
i(xn, "handle_event_propagation");
function wi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
i(wi, "create_fragment_from_html");
function Mn(e, t) {
  var n = (
    /** @type {Effect} */
    q
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
i(Mn, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  var n = (t & 1) !== 0, a = (t & 2) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = wi(s ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ kt(r)));
    var o = (
      /** @type {TemplateNode} */
      a || Qr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Mn(c, l);
    } else
      Mn(o, o);
    return o;
  };
}
i(F, "from_html");
function Si(e = "") {
  {
    var t = ht(e + "");
    return Mn(t, t), t;
  }
}
i(Si, "text");
function Wn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ht();
  return e.append(t, n), Mn(t, n), e;
}
i(Wn, "comment");
function R(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
i(R, "append");
const Gs = ["touchstart", "touchmove"];
function Vs(e) {
  return Gs.includes(e);
}
i(Vs, "is_passive_event");
function L(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
i(L, "set_text");
function Ys(e, t) {
  return Zs(e, t);
}
i(Ys, "mount");
const tn = /* @__PURE__ */ new Map();
function Zs(e, { target: t, anchor: n, props: a = {}, events: r, context: s, intro: o = !0 }) {
  Ds();
  var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ i((h) => {
    for (var v = 0; v < h.length; v++) {
      var p = h[v];
      if (!c.has(p)) {
        c.add(p);
        var w = Vs(p);
        t.addEventListener(p, xn, { passive: w });
        var S = tn.get(p);
        S === void 0 ? (document.addEventListener(p, xn, { passive: w }), tn.set(p, 1)) : tn.set(p, S + 1);
      }
    }
  }, "event_handle");
  l(nr(yi)), Pr.add(l);
  var f = void 0, _ = Fs(() => {
    var h = n ?? t.appendChild(ht());
    return gs(
      /** @type {TemplateNode} */
      h,
      {
        pending: /* @__PURE__ */ i(() => {
        }, "pending")
      },
      (v) => {
        ce({});
        var p = (
          /** @type {ComponentContext} */
          ne
        );
        s && (p.c = s), r && (a.$$events = r), f = e(v, a) || {}, ue();
      }
    ), () => {
      for (var v of c) {
        t.removeEventListener(v, xn);
        var p = (
          /** @type {number} */
          tn.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, xn), tn.delete(v)) : tn.set(v, p);
      }
      Pr.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Fr.set(f, _), f;
}
i(Zs, "_mount");
let Fr = /* @__PURE__ */ new WeakMap();
function Qs(e, t) {
  const n = Fr.get(e);
  return n ? (Fr.delete(e), n(t)) : (T && (on in e ? is() : as()), Promise.resolve());
}
i(Qs, "unmount");
var Ke, it, Ce, Kt, On, Hn, tr;
const na = class na {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    De(this, "anchor");
    /** @type {Map<Batch, Key>} */
    U(this, Ke, /* @__PURE__ */ new Map());
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
    U(this, it, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    U(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    U(this, Kt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    U(this, On, !0);
    U(this, Hn, /* @__PURE__ */ i(() => {
      var t = (
        /** @type {Batch} */
        G
      );
      if (b(this, Ke).has(t)) {
        var n = (
          /** @type {Key} */
          b(this, Ke).get(t)
        ), a = b(this, it).get(n);
        if (a)
          Jr(a), b(this, Kt).delete(n);
        else {
          var r = b(this, Ce).get(n);
          r && (b(this, it).set(n, r.effect), b(this, Ce).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), a = r.effect);
        }
        for (const [s, o] of b(this, Ke)) {
          if (b(this, Ke).delete(s), s === t)
            break;
          const c = b(this, Ce).get(o);
          c && (ye(c.effect), b(this, Ce).delete(o));
        }
        for (const [s, o] of b(this, it)) {
          if (s === n || b(this, Kt).has(s)) continue;
          const c = /* @__PURE__ */ i(() => {
            if (Array.from(b(this, Ke).values()).includes(s)) {
              var f = document.createDocumentFragment();
              vi(o, f), f.append(ht()), b(this, Ce).set(s, { effect: o, fragment: f });
            } else
              ye(o);
            b(this, Kt).delete(s), b(this, it).delete(s);
          }, "on_destroy");
          b(this, On) || !a ? (b(this, Kt).add(s), qt(o, c, !1)) : c();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    U(this, tr, /* @__PURE__ */ i((t) => {
      b(this, Ke).delete(t);
      const n = Array.from(b(this, Ke).values());
      for (const [a, r] of b(this, Ce))
        n.includes(a) || (ye(r.effect), b(this, Ce).delete(a));
    }, "#discard"));
    this.anchor = t, z(this, On, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var a = (
      /** @type {Batch} */
      G
    ), r = ti();
    if (n && !b(this, it).has(t) && !b(this, Ce).has(t))
      if (r) {
        var s = document.createDocumentFragment(), o = ht();
        s.append(o), b(this, Ce).set(t, {
          effect: Re(() => n(o)),
          fragment: s
        });
      } else
        b(this, it).set(
          t,
          Re(() => n(this.anchor))
        );
    if (b(this, Ke).set(a, t), r) {
      for (const [c, l] of b(this, it))
        c === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [c, l] of b(this, Ce))
        c === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(b(this, Hn)), a.ondiscard(b(this, tr));
    } else
      b(this, Hn).call(this);
  }
};
Ke = new WeakMap(), it = new WeakMap(), Ce = new WeakMap(), Kt = new WeakMap(), On = new WeakMap(), Hn = new WeakMap(), tr = new WeakMap(), i(na, "BranchManager");
let Jn = na;
function ma(e, t, ...n) {
  var a = new Jn(e);
  cr(() => {
    const r = t() ?? null;
    T && r == null && Ji(), a.ensure(r, r && ((s) => r(s, ...n)));
  }, Zt);
}
i(ma, "snippet");
if (T) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: /* @__PURE__ */ i(() => {
          if (n !== void 0)
            return n;
          $i(t);
        }, "get"),
        set: /* @__PURE__ */ i((a) => {
          n = a;
        }, "set")
      });
    }
  };
  i(e, "throw_rune_error"), e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Xs(e) {
  ne === null && qr("onMount"), ri(() => {
    const t = ur(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
i(Xs, "onMount");
function Js(e) {
  ne === null && qr("onDestroy"), Xs(() => () => ur(e));
}
i(Js, "onDestroy");
function V(e, t, n = !1) {
  var a = new Jn(e), r = n ? Zt : 0;
  function s(o, c) {
    a.ensure(o, c);
  }
  i(s, "update_branch"), cr(() => {
    var o = !1;
    t((c, l = !0) => {
      o = !0, s(l, c);
    }), o || s(!1, null);
  }, r);
}
i(V, "if_block");
function we(e, t) {
  return t;
}
i(we, "index");
function $s(e, t, n) {
  for (var a = [], r = t.length, s, o = t.length, c = 0; c < r; c++) {
    let h = t[c];
    qt(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            jr(nr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
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
      ), _ = (
        /** @type {Element} */
        f.parentNode
      );
      Ls(_), _.append(f), e.items.clear();
    }
    jr(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
i($s, "pause_effects");
function jr(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    ye(e[n], t);
}
i(jr, "destroy_effects");
var ga;
function Se(e, t, n, a, r, s = null) {
  var o = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(ht());
  }
  var _ = null, h = /* @__PURE__ */ xs(() => {
    var E = n();
    return Na(E) ? E : E == null ? [] : nr(E);
  }), v, p = !0;
  function w() {
    d.fallback = _, eo(d, v, o, t, a), _ !== null && (v.length === 0 ? (_.f & _t) === 0 ? Jr(_) : (_.f ^= _t, Nn(_, null, o)) : qt(_, () => {
      _ = null;
    }));
  }
  i(w, "commit");
  var S = cr(() => {
    v = /** @type {V[]} */
    u(h);
    for (var E = v.length, A = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      G
    ), x = ti(), C = 0; C < E; C += 1) {
      var W = v[C], O = a(W, C), I = p ? null : c.get(O);
      I ? (I.v && yn(I.v, W), I.i && yn(I.i, C), x && y.unskip_effect(I.e)) : (I = to(
        c,
        p ? o : ga ??= ht(),
        W,
        O,
        C,
        r,
        t,
        n
      ), p || (I.e.f |= _t), c.set(O, I)), A.add(O);
    }
    if (E === 0 && s && !_ && (p ? _ = Re(() => s(o)) : (_ = Re(() => s(ga ??= ht())), _.f |= _t)), E > A.size && (T ? no(v, a) : Da("", "", "")), !p)
      if (x) {
        for (const [H, P] of c)
          A.has(H) || y.skip_effect(P.e);
        y.oncommit(w), y.ondiscard(() => {
        });
      } else
        w();
    u(h);
  }), d = { effect: S, items: c, outrogroups: null, fallback: _ };
  p = !1;
}
i(Se, "each");
function En(e) {
  for (; e !== null && (e.f & Xe) === 0; )
    e = e.next;
  return e;
}
i(En, "skip_to_branch");
function eo(e, t, n, a, r) {
  var s = (a & 8) !== 0, o = t.length, c = e.items, l = En(e.effect.first), f, _ = null, h, v = [], p = [], w, S, d, E;
  if (s)
    for (E = 0; E < o; E += 1)
      w = t[E], S = r(w, E), d = /** @type {EachItem} */
      c.get(S).e, (d.f & _t) === 0 && (d.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(d));
  for (E = 0; E < o; E += 1) {
    if (w = t[E], S = r(w, E), d = /** @type {EachItem} */
    c.get(S).e, e.outrogroups !== null)
      for (const P of e.outrogroups)
        P.pending.delete(d), P.done.delete(d);
    if ((d.f & _t) !== 0)
      if (d.f ^= _t, d === l)
        Nn(d, null, n);
      else {
        var A = _ ? _.next : l;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), wt(e, _, d), wt(e, d, A), Nn(d, A, n), _ = d, v = [], p = [], l = En(_.next);
        continue;
      }
    if ((d.f & Te) !== 0 && (Jr(d), s && (d.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(d))), d !== l) {
      if (f !== void 0 && f.has(d)) {
        if (v.length < p.length) {
          var y = p[0], x;
          _ = y.prev;
          var C = v[0], W = v[v.length - 1];
          for (x = 0; x < v.length; x += 1)
            Nn(v[x], y, n);
          for (x = 0; x < p.length; x += 1)
            f.delete(p[x]);
          wt(e, C.prev, W.next), wt(e, _, C), wt(e, W, y), l = y, _ = W, E -= 1, v = [], p = [];
        } else
          f.delete(d), Nn(d, l, n), wt(e, d.prev, d.next), wt(e, d, _ === null ? e.effect.first : _.next), wt(e, _, d), _ = d;
        continue;
      }
      for (v = [], p = []; l !== null && l !== d; )
        (f ??= /* @__PURE__ */ new Set()).add(l), p.push(l), l = En(l.next);
      if (l === null)
        continue;
    }
    (d.f & _t) === 0 && v.push(d), _ = d, l = En(d.next);
  }
  if (e.outrogroups !== null) {
    for (const P of e.outrogroups)
      P.pending.size === 0 && (jr(nr(P.done)), e.outrogroups?.delete(P));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var O = [];
    if (f !== void 0)
      for (d of f)
        (d.f & Te) === 0 && O.push(d);
    for (; l !== null; )
      (l.f & Te) === 0 && l !== e.fallback && O.push(l), l = En(l.next);
    var I = O.length;
    if (I > 0) {
      var H = (a & 4) !== 0 && o === 0 ? n : null;
      if (s) {
        for (E = 0; E < I; E += 1)
          O[E].nodes?.a?.measure();
        for (E = 0; E < I; E += 1)
          O[E].nodes?.a?.fix();
      }
      $s(e, O, H);
    }
  }
  s && Ct(() => {
    if (h !== void 0)
      for (d of h)
        d.nodes?.a?.apply();
  });
}
i(eo, "reconcile");
function to(e, t, n, a, r, s, o, c) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ Ts(n, !1, !1) : Qt(n) : null, f = (o & 2) !== 0 ? Qt(r) : null;
  return T && l && (l.trace = () => {
    c()[f?.v ?? r];
  }), {
    v: l,
    i: f,
    e: Re(() => (s(t, l ?? n, f ?? r, c), () => {
      e.delete(a);
    }))
  };
}
i(to, "create_item");
function Nn(e, t, n) {
  if (e.nodes)
    for (var a = e.nodes.start, r = e.nodes.end, s = t && (t.f & _t) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; a !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pn(a)
      );
      if (s.before(a), a === r)
        return;
      a = o;
    }
}
i(Nn, "move");
function wt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
i(wt, "link");
function no(e, t) {
  const n = /* @__PURE__ */ new Map(), a = e.length;
  for (let r = 0; r < a; r++) {
    const s = t(e[r], r);
    if (n.has(s)) {
      const o = String(n.get(s)), c = String(r);
      let l = String(s);
      l.startsWith("[object ") && (l = null), Da(o, c, l);
    }
    n.set(s, r);
  }
}
i(no, "validate_each_keys");
function ro(e, t, n = !1, a = !1, r = !1) {
  var s = e, o = "";
  j(() => {
    var c = (
      /** @type {Effect} */
      q
    );
    if (o !== (o = t() ?? "") && (c.nodes !== null && (li(
      c.nodes.start,
      /** @type {TemplateNode} */
      c.nodes.end
    ), c.nodes = null), o !== "")) {
      var l = o + "";
      n ? l = `<svg>${l}</svg>` : a && (l = `<math>${l}</math>`);
      var f = wi(l);
      if ((n || a) && (f = /** @type {Element} */
      /* @__PURE__ */ kt(f)), Mn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || a)
        for (; /* @__PURE__ */ kt(f); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ kt(f)
          );
      else
        s.before(f);
    }
  });
}
i(ro, "html");
const pa = [...` 	
\r\f \v\uFEFF`];
function ao(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (t && (a = a ? a + " " + t : t), n) {
    for (var r in n)
      if (n[r])
        a = a ? a + " " + r : r;
      else if (a.length)
        for (var s = r.length, o = 0; (o = a.indexOf(r, o)) >= 0; ) {
          var c = o + s;
          (o === 0 || pa.includes(a[o - 1])) && (c === a.length || pa.includes(a[c])) ? a = (o === 0 ? "" : a.substring(0, o)) + a.substring(c + 1) : o = c;
        }
  }
  return a === "" ? null : a;
}
i(ao, "to_class");
function io(e, t) {
  return e == null ? null : String(e);
}
i(io, "to_style");
function Ue(e, t, n, a, r, s) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var c = ao(n, a, s);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (s && r !== s)
    for (var l in s) {
      var f = !!s[l];
      (r == null || f !== !!r[l]) && e.classList.toggle(l, f);
    }
  return s;
}
i(Ue, "set_class");
function an(e, t, n, a) {
  var r = e.__style;
  if (r !== t) {
    var s = io(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return a;
}
i(an, "set_style");
const so = /* @__PURE__ */ Symbol("is custom element"), oo = /* @__PURE__ */ Symbol("is html");
function Ye(e, t) {
  var n = Ei(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
i(Ye, "set_value");
function D(e, t, n, a) {
  var r = Ei(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[qi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && lo(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
i(D, "set_attribute");
function Ei(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [so]: e.nodeName.includes("-"),
      [oo]: e.namespaceURI === Pi
    }
  );
}
i(Ei, "get_attributes");
var ya = /* @__PURE__ */ new Map();
function lo(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ya.get(t);
  if (n) return n;
  ya.set(t, n = []);
  for (var a, r = e, s = Element.prototype; s !== r; ) {
    a = ji(r);
    for (var o in a)
      a[o].set && n.push(o);
    r = Ca(r);
  }
  return n;
}
i(lo, "get_setters");
function ki(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Hs(e, "input", async (r) => {
    T && e.type === "checkbox" && la();
    var s = r ? e.defaultValue : e.value;
    if (s = Sr(e) ? Er(s) : s, n(s), G !== null && a.add(G), await Ks(), s !== (s = t())) {
      var o = e.selectionStart, c = e.selectionEnd, l = e.value.length;
      if (e.value = s ?? "", c !== null) {
        var f = e.value.length;
        o === c && c === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(c, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ur(t) == null && e.value && (n(Sr(e) ? Er(e.value) : e.value), G !== null && a.add(G)), ii(() => {
    T && e.type === "checkbox" && la();
    var r = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Tr ?? G
      );
      if (a.has(s))
        return;
    }
    Sr(e) && r === Er(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
i(ki, "bind_value");
function Sr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
i(Sr, "is_numberlike_input");
function Er(e) {
  return e === "" ? null : +e;
}
i(Er, "to_number");
const nn = [];
function co(e, t) {
  return {
    subscribe: uo(e, t).subscribe
  };
}
i(co, "readable");
function uo(e, t = qn) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function r(c) {
    if (Oa(e, c) && (e = c, n)) {
      const l = !nn.length;
      for (const f of a)
        f[1](), nn.push(f, e);
      if (l) {
        for (let f = 0; f < nn.length; f += 2)
          nn[f][0](nn[f + 1]);
        nn.length = 0;
      }
    }
  }
  i(r, "set");
  function s(c) {
    r(c(
      /** @type {T} */
      e
    ));
  }
  i(s, "update");
  function o(c, l = qn) {
    const f = [c, l];
    return a.add(f), a.size === 1 && (n = t(r, s) || qn), c(
      /** @type {T} */
      e
    ), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return i(o, "subscribe"), { set: r, update: s, subscribe: o };
}
i(uo, "writable");
function wa(e, t, n, a) {
  var r = (
    /** @type {V} */
    a
  ), s = !0, o = /* @__PURE__ */ i(() => (s && (s = !1, r = /** @type {V} */
  a), r), "get_fallback"), c;
  c = /** @type {V} */
  e[t], c === void 0 && a !== void 0 && (c = o());
  var l;
  return l = /* @__PURE__ */ i(() => {
    var f = (
      /** @type {V} */
      e[t]
    );
    return f === void 0 ? o() : (s = !0, f);
  }, "getter"), l;
}
i(wa, "prop");
function fo(e) {
  var n, a, r;
  const s = class s extends e {
    constructor() {
      super(...arguments);
      U(this, n, Object.values(foundry.applications.elements).reduce(
        (l, f) => {
          const _ = f.tagName;
          return _ && l.push(_.toUpperCase()), l;
        },
        []
      ));
      U(this, a, /* @__PURE__ */ ge(Rt({})));
      U(this, r, {});
    }
    get $state() {
      return u(b(this, a));
    }
    set $state(l) {
      _e(b(this, a), l, !0);
    }
    async _renderHTML(l) {
      return l;
    }
    _replaceHTML(l, f, _) {
      Object.assign(this.$state, l.state), _.isFirstRender && z(this, r, Ys(this.root, { target: f, props: { ...l, state: this.$state } }));
    }
    _onClose(l) {
      super._onClose(l), Qs(b(this, r), { outro: !0 });
    }
    _onChangeForm(l, f) {
      if (super._onChangeForm(l, f), f.type !== "change") return;
      const _ = this;
      if (!_.document) return;
      const h = f.target;
      if (!h || !b(this, n).includes(h.tagName)) return;
      const v = h._getValue();
      _.document.update({ [h.name]: v });
    }
    close(l) {
      return super.close(l);
    }
  };
  n = new WeakMap(), a = new WeakMap(), r = new WeakMap(), i(s, "SvelteApplication"), De(s, "DEFAULT_OPTIONS", { classes: ["nimble-white-sheet"] });
  let t = s;
  return t;
}
i(fo, "SvelteApplicationMixin");
function k(e) {
  return game.i18n?.localize(e) ?? e;
}
i(k, "localize");
function Pe(e, t) {
  const n = Object.fromEntries(
    Object.entries(t).map(([a, r]) => [a, String(r)])
  );
  return game.i18n?.format(e, n) ?? e;
}
i(Pe, "format");
const vo = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(vo);
const xi = "nimble-white-sheet", ln = new URL(import.meta.url).pathname.match(/\/modules\/([^/]+)\//)?.[1] ?? xi, _o = {
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
}, ho = {
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
}, kr = [4, 6, 8, 10, 12, 20];
function kn(e, t) {
  if (!t) return e;
  const n = kr.indexOf(e);
  return n === -1 ? e : kr[Math.min(n + t, kr.length - 1)];
}
i(kn, "incrementDieSize");
function bo(e, t, n, a) {
  const r = {};
  for (const f of n) {
    const _ = kn(f.system.hitDieSize, a), h = f.system.classLevel;
    r[_] ??= { current: 0, total: 0 }, r[_].total += h, r[_].current = e[_]?.current ?? 0;
  }
  const s = n.map(
    (f) => kn(f.system.hitDieSize, a)
  );
  for (const f of t) {
    const _ = kn(f.size, a);
    r[_] ??= { current: e[_]?.current ?? 0, total: 0 }, r[_].total += f.value, s.includes(_) || (r[_].current = e[_]?.current ?? 0);
  }
  const o = t.map(
    (f) => kn(f.size, a)
  );
  for (const [f, _] of Object.entries(e ?? {})) {
    const h = kn(Number(f), a), v = _?.bonus ?? 0;
    v > 0 && (r[h] ??= { current: 0, total: 0 }, r[h].total += v, !s.includes(h) && !o.includes(h) && (r[h].current = e[h]?.current ?? 0));
  }
  let c = 0, l = 0;
  for (const f of Object.values(r))
    c += f.current, l += f.total;
  return { bySize: r, value: c, max: l };
}
i(bo, "computeHitDiceData");
var mo = /* @__PURE__ */ F("<span> </span>"), go = /* @__PURE__ */ F('<span class="nos-muted">—</span>'), po = /* @__PURE__ */ F('<header class="nos-header"><div class="nos-header__portrait"><img/></div> <div class="nos-header__name"><label> </label> <input type="text" autocomplete="off" spellcheck="false"/></div> <div class="nos-header__meta"><label> </label> <div class="nos-meta-text"><!> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-edit"></i></button></div></div> <div class="nos-header__hitdie"><label> </label> <span class="nos-header__hitdie-value"> </span></div></header>');
function yo(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.img);
  function a() {
    if (!t.editingEnabled) return;
    const H = game.modules?.get("vtta-tokenizer");
    if (H?.active) {
      H.api?.tokenizeActor(t.actor);
      return;
    }
    new foundry.applications.apps.FilePicker.implementation({
      type: "image",
      current: t.actor.img,
      callback: /* @__PURE__ */ i((P) => t.actor.update({ img: P }), "callback")
    }).render(!0);
  }
  i(a, "pickPortrait");
  let r = /* @__PURE__ */ M(() => {
    const H = Object.keys(t.hitDiceData.bySize);
    return H.length === 0 ? "—" : H.length === 1 ? `d${H[0]}` : H.map((P) => `d${P}`).join("/");
  });
  var s = po(), o = m(s);
  o.__click = a;
  var c = m(o), l = g(o, 2), f = m(l), _ = m(f), h = g(f, 2);
  h.__change = (H) => t.actor.update({ name: H.currentTarget.value });
  var v = g(l, 2), p = m(v), w = m(p), S = g(p, 2), d = m(S);
  {
    var E = /* @__PURE__ */ i((H) => {
      var P = mo(), K = m(P);
      j(() => L(K, t.metaData)), R(H, P);
    }, "consequent"), A = /* @__PURE__ */ i((H) => {
      var P = go();
      R(H, P);
    }, "alternate");
    V(d, (H) => {
      t.metaData ? H(E) : H(A, !1);
    });
  }
  var y = g(d, 2);
  y.__click = () => t.actor.editMetadata();
  var x = g(v, 2), C = m(x), W = m(C), O = g(C, 2), I = m(O);
  j(
    (H, P, K, Q, Z) => {
      an(o, `cursor: ${t.editingEnabled ? "pointer" : "default"}`), D(c, "src", u(n)), D(c, "alt", t.actor.reactive.name), L(_, H), Ye(h, t.actor.reactive.name), h.disabled = !t.editingEnabled, L(w, P), D(y, "aria-label", K), D(y, "data-tooltip", Q), y.disabled = !t.editingEnabled, L(W, Z), L(I, u(r));
    },
    [
      () => k("NWS.CharacterName"),
      () => k("NWS.AncestryClassLevel"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.EditMetadata"),
      () => k("NWS.HitDie")
    ]
  ), R(e, s), ue();
}
i(yo, "HeaderRow");
Ee(["click", "change"]);
function ea(e) {
  return e >= 0 ? `+${e}` : `−${Math.abs(e)}`;
}
i(ea, "formatModifier");
var wo = /* @__PURE__ */ F('<div class="nos-ability"><button type="button"><i class="fa-solid fa-dice-d20 nos-ability__d20"></i></button> <button class="nos-ability__box nos-rollable" type="button"><span class="nos-ability__value"> </span></button> <span class="nos-ability__name nos-banner"> </span></div>');
function So(e, t) {
  ce(t, !0);
  const { abilityScoreAbbreviations: n } = CONFIG.NIMBLE;
  let a = /* @__PURE__ */ M(() => k(n[t.abilityKey])), r = /* @__PURE__ */ M(() => Pe("NWS.RollCheck", { name: u(a) })), s = /* @__PURE__ */ M(() => Pe("NWS.RollSave", { name: u(a) }));
  var o = wo(), c = m(o);
  let l;
  c.__click = () => t.actor.rollSavingThrowToChat(t.abilityKey);
  var f = g(c, 2);
  f.__click = () => t.actor.rollAbilityCheckToChat(t.abilityKey);
  var _ = m(f), h = m(_), v = g(f, 2), p = m(v);
  j(
    (w) => {
      l = Ue(c, 1, "nos-ability__roll", null, l, {
        "nos-ability__roll--advantage": t.save.defaultRollMode > 0,
        "nos-ability__roll--disadvantage": t.save.defaultRollMode < 0
      }), D(c, "data-tooltip", u(s)), D(c, "aria-label", u(s)), D(f, "data-tooltip", u(r)), D(f, "aria-label", u(r)), L(h, w), L(p, u(a));
    },
    [() => ea(t.ability.mod)]
  ), R(e, o), ue();
}
i(So, "AbilityBox");
Ee(["click"]);
var Eo = /* @__PURE__ */ F('<button type="button"><i class="fa-solid fa-droplet"></i></button>'), ko = /* @__PURE__ */ F('<div class="nos-wounds"><button class="nos-wounds__label" type="button"> </button> <div class="nos-wounds__drops"></div></div>');
function xo(e, t) {
  ce(t, !0);
  var n = ko(), a = m(n);
  a.__click = function(...o) {
    t.resetWounds?.apply(this, o);
  };
  var r = m(a), s = g(a, 2);
  Se(s, 21, () => ({ length: t.wounds.max }), we, (o, c, l) => {
    var f = Eo();
    let _;
    f.__click = () => t.toggleWounds(l + 1), j(
      (h, v) => {
        _ = Ue(f, 1, "nos-wounds__drop", null, _, { "nos-wounds__drop--active": t.wounds.value > l }), D(f, "data-tooltip", h), D(f, "aria-label", v);
      },
      [
        () => Pe("NWS.ToggleWound", { n: l + 1 }),
        () => Pe("NWS.ToggleWound", { n: l + 1 })
      ]
    ), R(o, f);
  }), j(
    (o, c, l) => {
      D(a, "data-tooltip", o), D(a, "aria-label", c), L(r, l);
    },
    [
      () => k("NWS.ResetWounds"),
      () => k("NWS.ResetWounds"),
      () => k("NWS.Wounds")
    ]
  ), R(e, n), ue();
}
i(xo, "WoundTracker");
Ee(["click"]);
var No = /* @__PURE__ */ F('<button class="nos-icon-btn nos-abilities__config nos-abilities__config--saves" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities" type="button"><i class="fa-solid fa-gear"></i></button>', 1), Co = /* @__PURE__ */ F('<i class="fa-solid fa-heart-crack" style="color: var(--nos-danger, #b01b19);"></i>'), To = /* @__PURE__ */ F('<i class="fa-solid fa-heart"></i>'), Wo = /* @__PURE__ */ F('<section class="nos-stats"><div class="nos-abilities"><!> <!></div> <div class="nos-right-col"><div class="nos-combat"><div class="nos-combat__pair"><div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span> <span class="nos-combat__label"> </span> <input class="nos-combat__input" type="number"/></div></div> <div><div class="nos-combat__stat nos-combat__stat--hp"><span class="nos-combat__icon"><!></span> <span class="nos-combat__label"> </span> <div class="nos-combat__hp-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__stat nos-combat__stat--mana"><span class="nos-combat__icon"><i class="fa-solid fa-sparkles"></i></span> <span class="nos-combat__label"> </span> <div class="nos-combat__mana-inputs"><input class="nos-combat__input" type="number"/> <span class="nos-combat__sub">/</span> <span class="nos-combat__value"> </span></div> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div> <div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-combat__pair"><div class="nos-combat__stat nos-combat__stat--clickable"><span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span></div> <div class="nos-combat__stat"><span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span> <span class="nos-combat__label"> </span> <span class="nos-combat__value"> </span> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button></div></div></div></div> <!></section>');
function Ao(e, t) {
  ce(t, !0);
  const n = ["strength", "dexterity", "intelligence", "will"], { abilityScoreAbbreviations: a } = CONFIG.NIMBLE;
  let r = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.hp), s = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.armor), o = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.initiative), c = /* @__PURE__ */ M(() => t.actor.reactive.system.attributes.movement);
  var l = Wo(), f = m(l), _ = m(f);
  Se(_, 17, () => n, we, (J, Me) => {
    So(J, {
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
  var h = g(_, 2);
  {
    var v = /* @__PURE__ */ i((J) => {
      var Me = No(), Sn = We(Me);
      Sn.__click = () => t.actor.configureSavingThrows();
      var zn = g(Sn, 2);
      zn.__click = () => t.actor.configureAbilityScores(), j(
        (br, mr) => {
          D(Sn, "data-tooltip", br), D(zn, "data-tooltip", mr);
        },
        [
          () => k("NWS.ConfigureSavingThrows"),
          () => k("NWS.ConfigureAbilityScores")
        ]
      ), R(J, Me);
    }, "consequent");
    V(h, (J) => {
      t.editingEnabled && J(v);
    });
  }
  var p = g(f, 2), w = m(p), S = m(w), d = m(S), E = g(m(d), 2), A = m(E), y = g(E, 2), x = m(y), C = g(d, 2), W = g(m(C), 2), O = m(W), I = g(W, 2);
  I.__change = (J) => t.updateTempHP(Number(J.currentTarget.value));
  var H = g(S, 2);
  let P;
  var K = m(H), Q = m(K), Z = m(Q);
  {
    var $ = /* @__PURE__ */ i((J) => {
      var Me = Co();
      R(J, Me);
    }, "consequent_1"), Ae = /* @__PURE__ */ i((J) => {
      var Me = To();
      R(J, Me);
    }, "alternate");
    V(Z, (J) => {
      t.isBloodied ? J($) : J(Ae, !1);
    });
  }
  var de = g(Q, 2), Ie = m(de), Je = g(de, 2), ve = m(Je);
  ve.__change = (J) => t.updateCurrentHP(Number(J.currentTarget.value));
  var ke = g(ve, 4), he = m(ke), Be = g(Je, 2);
  Be.__click = () => t.actor.configureHitPoints();
  var Mt = g(K, 2), Dt = m(Mt), $t = m(Dt), mt = g(Dt, 2), gt = m(mt), ot = g(mt, 2), lt = m(ot);
  lt.__change = (J) => t.updateCurrentMana(Number(J.currentTarget.value));
  var pt = g(lt, 4), en = m(pt), ct = g(ot, 2);
  ct.__click = () => t.actor.configureMana();
  var yt = g(H, 2);
  yt.__click = () => t.rollHitDice();
  var te = g(m(yt), 2), N = m(te), Y = g(te, 2), X = m(Y), re = g(Y, 2);
  re.__click = (J) => {
    J.stopPropagation(), t.actor.configureHitDice();
  };
  var ut = g(yt, 2), xe = m(ut);
  xe.__click = () => t.actor.rollInitiative({ createCombatants: !0 });
  var jn = g(m(xe), 2), fr = m(jn), dr = g(jn, 2), vr = m(dr), _r = g(xe, 2), Un = g(m(_r), 2), Ni = m(Un), ra = g(Un, 2), Ci = m(ra), hr = g(ra, 2);
  hr.__click = () => t.actor.configureMovement();
  var Ti = g(p, 2);
  xo(Ti, {
    get wounds() {
      return t.wounds;
    },
    get toggleWounds() {
      return t.toggleWounds;
    },
    get resetWounds() {
      return t.resetWounds;
    }
  }), j(
    (J, Me, Sn, zn, br, mr, Wi, Ai, Ii, Mi, Di, Li, Oi) => {
      L(A, J), L(x, u(s).value), L(O, Me), Ye(I, u(r).temp ?? 0), P = Ue(H, 1, "nos-combat__pair", null, P, { "nos-hp--bloodied": t.isBloodied }), L(Ie, Sn), Ye(ve, u(r).value), L(he, u(r).max), D(Be, "data-tooltip", zn), Be.disabled = !t.editingEnabled, an($t, `color: ${t.mana?.color ?? "var(--nos-mana-color, #6a5acd)" ?? ""};`), an(mt, `color: ${t.mana?.color ?? "var(--nos-mana-color, #6a5acd)" ?? ""};`), L(gt, br), Ye(lt, t.mana?.current ?? 0), an(lt, `color: ${t.mana?.color ?? "var(--nos-mana-color, #6a5acd)" ?? ""};`), an(pt, `color: ${t.mana?.color ?? "var(--nos-mana-color, #6a5acd)" ?? ""};`), L(en, t.mana?.max || t.mana?.baseMax || 0), D(ct, "data-tooltip", mr), ct.disabled = !t.editingEnabled, L(N, Wi), L(X, `${t.hitDiceData.value ?? ""}/${t.hitDiceData.max ?? ""}`), D(re, "data-tooltip", Ai), re.disabled = !t.editingEnabled, D(xe, "data-tooltip", Ii), L(fr, Mi), L(vr, Di), L(Ni, Li), L(Ci, u(c).walk), D(hr, "data-tooltip", Oi), hr.disabled = !t.editingEnabled;
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
      () => ea(u(o).mod),
      () => k("NWS.Speed"),
      () => k("NWS.ConfigureMovement")
    ]
  ), R(e, l), ue();
}
i(Ao, "StatsRow");
Ee(["click", "change"]);
var Io = /* @__PURE__ */ F('<button class="nos-skill nos-rollable" type="button"><span class="nos-skill__ability"> </span> <span class="nos-skill__value"> </span> <span class="nos-skill__name nos-banner"> </span></button>');
function Mo(e, t) {
  ce(t, !0);
  const {
    defaultSkillAbilities: n,
    abilityScoreAbbreviations: a,
    skills: r
  } = CONFIG.NIMBLE;
  let s = /* @__PURE__ */ M(() => n[t.skillKey]), o = /* @__PURE__ */ M(() => k(a[u(s)])), c = /* @__PURE__ */ M(() => k(r[t.skillKey]));
  var l = Io();
  l.__click = () => t.actor.rollSkillCheckToChat(t.skillKey);
  var f = m(l), _ = m(f), h = g(f, 2), v = m(h), p = g(h, 2), w = m(p);
  j(
    (S, d) => {
      D(l, "data-tooltip", S), L(_, u(o)), L(v, d), L(w, u(c));
    },
    [
      () => Pe("NWS.RollSkill", { name: u(c) }),
      () => ea(t.skill.mod)
    ]
  ), R(e, l), ue();
}
i(Mo, "SkillCell");
Ee(["click"]);
var Do = /* @__PURE__ */ F('<button class="nos-icon-btn nos-skills-row__config" type="button"><i class="fa-solid fa-gear"></i></button>'), Lo = /* @__PURE__ */ F('<section class="nos-skills-row"><!> <!></section>');
function Oo(e, t) {
  ce(t, !0);
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
  var a = Lo(), r = m(a);
  Se(r, 17, () => n, we, (c, l) => {
    Mo(c, {
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
  var s = g(r, 2);
  {
    var o = /* @__PURE__ */ i((c) => {
      var l = Do();
      l.__click = () => t.actor.configureSkills(), j((f) => D(l, "data-tooltip", f), [() => k("NWS.ConfigureSkills")]), R(c, l);
    }, "consequent");
    V(s, (c) => {
      t.editingEnabled && c(o);
    });
  }
  R(e, a), ue();
}
i(Oo, "SkillsRow");
Ee(["click"]);
async function Ho(e, t) {
  const n = e.items.get(t);
  if (!(!n || !await foundry.applications.api.DialogV2.confirm({
    window: { title: Pe("NWS.DeleteItemTitle", { name: n.name }) },
    content: `<p>${Pe("NWS.DeleteItemContent", { name: foundry.utils.escapeHTML(n.name) })}</p>`,
    rejectClose: !1,
    modal: !0
  })))
    try {
      await e.deleteEmbeddedDocuments("Item", [t]);
    } catch (r) {
      console.error("nimble-white-sheet | Failed to delete item:", r), ui.notifications?.error(k("NWS.DeleteItemFailed"));
    }
}
i(Ho, "deleteItem");
var Ro = /* @__PURE__ */ F('<div class="nos-item__controls"><button class="nos-icon-btn" type="button"><i class="fa-solid fa-gear"></i></button> <button class="nos-icon-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>'), Po = /* @__PURE__ */ F('<div draggable="true"><img class="nos-item__img"/> <span class="nos-item__name"><!></span> <!> <!></div>');
function Ot(e, t) {
  ce(t, !0);
  let n = wa(t, "castable", 3, !1), a = wa(t, "indent", 3, !1);
  function r() {
    t.actor.items.get(t.item.id)?.sheet?.render(!0);
  }
  i(r, "configure");
  function s(d) {
    d.dataTransfer?.setData("text/plain", JSON.stringify({ type: "Item", uuid: t.item.uuid }));
  }
  i(s, "onDragStart");
  var o = Po();
  let c;
  var l = m(o), f = g(l, 2);
  f.__click = function(...d) {
    (t.onactivate ?? r)?.apply(this, d);
  };
  var _ = m(f);
  {
    var h = /* @__PURE__ */ i((d) => {
      var E = Wn(), A = We(E);
      ma(A, () => t.label), R(d, E);
    }, "consequent"), v = /* @__PURE__ */ i((d) => {
      var E = Si();
      j(() => L(E, t.item.name)), R(d, E);
    }, "alternate");
    V(_, (d) => {
      t.label ? d(h) : d(v, !1);
    });
  }
  var p = g(f, 2);
  ma(p, () => t.extra ?? qn);
  var w = g(p, 2);
  {
    var S = /* @__PURE__ */ i((d) => {
      var E = Ro(), A = m(E);
      A.__click = r;
      var y = g(A, 2);
      y.__click = () => Ho(t.actor, t.item.id), R(d, E);
    }, "consequent_1");
    V(w, (d) => {
      t.editingEnabled && d(S);
    });
  }
  j(() => {
    c = Ue(o, 1, "nos-item", null, c, {
      "nos-item--castable": n(),
      "nos-item--indent": a()
    }), D(o, "data-item-id", t.item.id), D(o, "data-tooltip", t.tooltip || void 0), D(l, "src", t.item.img), D(l, "alt", t.item.name);
  }), $r("dragstart", o, s), R(e, o), ue();
}
i(Ot, "ItemRow");
Ee(["click"]);
var Fo = /* @__PURE__ */ F('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <!></div>'), jo = /* @__PURE__ */ F('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <!></div>'), Uo = /* @__PURE__ */ F('<div class="nos-feature-row"><!> <!></div>'), zo = /* @__PURE__ */ F('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <!> <!></div>'), Bo = /* @__PURE__ */ F('<div class="nos-feature-group"><h4 class="nos-feature-group__heading"> </h4> <div class="nos-item-grid"></div></div>'), Ko = /* @__PURE__ */ F('<p class="nos-empty"> </p>'), qo = /* @__PURE__ */ F("<!> <!> <!> <!>", 1);
function Sa(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((d) => d.type === "feature")), a = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((d) => d.type === "boon")), r = /* @__PURE__ */ M(() => t.actor.reactive.items.find((d) => d.type === "ancestry") ?? null), s = /* @__PURE__ */ M(() => t.actor.reactive.items.find((d) => d.type === "background") ?? null), o = /* @__PURE__ */ M(() => t.actor.reactive.items.find((d) => d.type === "class") ?? null), c = /* @__PURE__ */ M(() => t.actor.reactive.items.find((d) => d.type === "subclass") ?? null);
  var l = qo(), f = We(l);
  {
    var _ = /* @__PURE__ */ i((d) => {
      var E = Uo(), A = m(E);
      {
        var y = /* @__PURE__ */ i((W) => {
          var O = Fo(), I = m(O), H = m(I), P = g(I, 2);
          {
            let K = /* @__PURE__ */ M(() => u(r).system?.description);
            Ot(P, {
              get actor() {
                return t.actor;
              },
              get item() {
                return u(r);
              },
              get editingEnabled() {
                return t.editingEnabled;
              },
              get tooltip() {
                return u(K);
              }
            });
          }
          j((K) => L(H, K), [() => k("NWS.Ancestry")]), R(W, O);
        }, "consequent");
        V(A, (W) => {
          u(r) && W(y);
        });
      }
      var x = g(A, 2);
      {
        var C = /* @__PURE__ */ i((W) => {
          var O = jo(), I = m(O), H = m(I), P = g(I, 2);
          {
            let K = /* @__PURE__ */ M(() => u(s).system?.description);
            Ot(P, {
              get actor() {
                return t.actor;
              },
              get item() {
                return u(s);
              },
              get editingEnabled() {
                return t.editingEnabled;
              },
              get tooltip() {
                return u(K);
              }
            });
          }
          j((K) => L(H, K), [() => k("NWS.Background")]), R(W, O);
        }, "consequent_1");
        V(x, (W) => {
          u(s) && W(C);
        });
      }
      R(d, E);
    }, "consequent_2");
    V(f, (d) => {
      (u(r) || u(s)) && d(_);
    });
  }
  var h = g(f, 2);
  {
    var v = /* @__PURE__ */ i((d) => {
      var E = zo(), A = m(E), y = m(A), x = g(A, 2);
      Ot(x, {
        get actor() {
          return t.actor;
        },
        get item() {
          return u(o);
        },
        get editingEnabled() {
          return t.editingEnabled;
        },
        label: /* @__PURE__ */ i((I) => {
          var H = Si();
          j((P) => L(H, `${u(o).name ?? ""} (${P ?? ""} ${u(o).system.classLevel ?? ""})`), [() => k("NWS.Level")]), R(I, H);
        }, "label"),
        $$slots: { label: !0 }
      });
      var C = g(x, 2);
      {
        var W = /* @__PURE__ */ i((O) => {
          Ot(O, {
            get actor() {
              return t.actor;
            },
            get item() {
              return u(c);
            },
            get editingEnabled() {
              return t.editingEnabled;
            },
            indent: !0
          });
        }, "consequent_3");
        V(C, (O) => {
          u(c) && O(W);
        });
      }
      j((O) => L(y, O), [() => k("NWS.Class")]), R(d, E);
    }, "consequent_4");
    V(h, (d) => {
      u(o) && d(v);
    });
  }
  var p = g(h, 2);
  Se(
    p,
    17,
    () => [
      { items: u(n), labelKey: "NWS.Features" },
      { items: u(a), labelKey: "NWS.Boons" }
    ],
    we,
    (d, E) => {
      var A = Wn(), y = We(A);
      {
        var x = /* @__PURE__ */ i((C) => {
          var W = Bo(), O = m(W), I = m(O), H = g(O, 2);
          Se(H, 21, () => u(E).items, we, (P, K) => {
            {
              let Q = /* @__PURE__ */ M(() => u(K).system?.description);
              Ot(P, {
                get actor() {
                  return t.actor;
                },
                get item() {
                  return u(K);
                },
                get editingEnabled() {
                  return t.editingEnabled;
                },
                get tooltip() {
                  return u(Q);
                },
                onactivate: /* @__PURE__ */ i(() => t.actor.activateItem(u(K).id), "onactivate")
              });
            }
          }), j((P) => L(I, P), [() => k(u(E).labelKey)]), R(C, W);
        }, "consequent_5");
        V(y, (C) => {
          u(E).items.length > 0 && C(x);
        });
      }
      R(d, A);
    }
  );
  var w = g(p, 2);
  {
    var S = /* @__PURE__ */ i((d) => {
      var E = Ko(), A = m(E);
      j((y) => L(A, y), [() => k("NWS.DropFeaturesHere")]), R(d, E);
    }, "consequent_6");
    V(w, (d) => {
      !u(r) && !u(s) && !u(o) && u(n).length === 0 && u(a).length === 0 && d(S);
    });
  }
  R(e, l), ue();
}
i(Sa, "FeaturesTab");
var Go = /* @__PURE__ */ F('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), Vo = /* @__PURE__ */ F('<span class="nos-tag">[C]</span>'), Yo = /* @__PURE__ */ F('<span class="nos-tag">[U]</span>'), Zo = /* @__PURE__ */ F(" <!> <!>", 1), Qo = /* @__PURE__ */ F('<span class="nos-item__meta"> </span>'), Xo = /* @__PURE__ */ F('<div class="nos-spell-tier"><h4 class="nos-spell-tier__heading"> </h4> <div class="nos-item-grid"></div></div>'), Jo = /* @__PURE__ */ F('<p class="nos-empty"> </p>'), $o = /* @__PURE__ */ F('<div class="nos-search"><i class="fa-solid fa-search nos-muted"></i> <input type="text"/> <!></div> <!> <!>', 1);
function Ea(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ ge(""), a = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((S) => S.type === "spell").sort((S, d) => S.name.localeCompare(d.name))), r = /* @__PURE__ */ M(() => u(n) ? u(a).filter((S) => S.name.toLowerCase().includes(u(n).toLowerCase())) : u(a)), s = /* @__PURE__ */ M(() => {
    const S = {};
    for (const d of u(r)) {
      const E = d.system?.tier ?? 0, A = d.system?.isUtility ?? !1, y = A ? "_utility" : `_tier_${E}`, x = A ? k("NWS.Utility") : Pe("NWS.Tier", { n: E });
      S[y] ??= { label: x, spells: [] }, S[y].spells.push(d);
    }
    return Object.entries(S).sort(([d], [E]) => d === "_utility" ? 1 : E === "_utility" ? -1 : Number.parseInt(d.replace("_tier_", "")) - Number.parseInt(E.replace("_tier_", "")));
  });
  async function o() {
    try {
      await t.actor.createEmbeddedDocuments("Item", [{ name: k("NWS.NewSpell"), type: "spell" }]);
    } catch (S) {
      console.error("nimble-white-sheet | Failed to create spell:", S);
    }
  }
  i(o, "createSpell");
  var c = $o(), l = We(c), f = g(m(l), 2), _ = g(f, 2);
  {
    var h = /* @__PURE__ */ i((S) => {
      var d = Go();
      d.__click = o;
      var E = g(m(d));
      j((A) => L(E, ` ${A ?? ""}`), [() => k("NWS.New")]), R(S, d);
    }, "consequent");
    V(_, (S) => {
      t.editingEnabled && S(h);
    });
  }
  var v = g(l, 2);
  Se(v, 17, () => u(s), we, (S, d) => {
    var E = /* @__PURE__ */ M(() => Wa(u(d), 2));
    let A = /* @__PURE__ */ i(() => u(E)[1], "tier");
    var y = Xo(), x = m(y), C = m(x), W = g(x, 2);
    Se(W, 21, () => A().spells, we, (O, I) => {
      {
        const H = /* @__PURE__ */ i((Q) => {
          var Z = Zo(), $ = We(Z), Ae = g($);
          {
            var de = /* @__PURE__ */ i((ve) => {
              var ke = Vo();
              j((he) => D(ke, "data-tooltip", he), [() => k("NWS.Concentration")]), R(ve, ke);
            }, "consequent_1");
            V(Ae, (ve) => {
              u(I).system?.concentration && ve(de);
            });
          }
          var Ie = g(Ae, 2);
          {
            var Je = /* @__PURE__ */ i((ve) => {
              var ke = Yo();
              j((he) => D(ke, "data-tooltip", he), [() => k("NWS.Utility")]), R(ve, ke);
            }, "consequent_2");
            V(Ie, (ve) => {
              u(I).system?.isUtility && ve(Je);
            });
          }
          j(() => L($, `${u(I).name ?? ""} `)), R(Q, Z);
        }, "label"), P = /* @__PURE__ */ i((Q) => {
          var Z = Qo(), $ = m(Z);
          j(() => L($, u(I).system?.activationCost ?? "")), R(Q, Z);
        }, "extra");
        let K = /* @__PURE__ */ M(() => u(I).system?.description?.baseEffect);
        Ot(O, {
          get actor() {
            return t.actor;
          },
          get item() {
            return u(I);
          },
          get editingEnabled() {
            return t.editingEnabled;
          },
          castable: !0,
          get tooltip() {
            return u(K);
          },
          onactivate: /* @__PURE__ */ i(() => t.actor.activateItem(u(I).id), "onactivate"),
          label: H,
          extra: P,
          $$slots: { label: !0, extra: !0 }
        });
      }
    }), j(() => L(C, A().label)), R(S, y);
  });
  var p = g(v, 2);
  {
    var w = /* @__PURE__ */ i((S) => {
      var d = Jo(), E = m(d);
      j((A) => L(E, A), [() => k("NWS.DropSpellsHere")]), R(S, d);
    }, "consequent_3");
    V(p, (S) => {
      u(a).length === 0 && S(w);
    });
  }
  j((S) => D(f, "placeholder", S), [() => k("NWS.SearchSpells")]), ki(f, () => u(n), (S) => _e(n, S)), R(e, c), ue();
}
i(Ea, "SpellsTab");
Ee(["click"]);
var el = /* @__PURE__ */ F('<div class="nos-currency__coin"><label> </label> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-minus"></i></button> <input type="number" min="0"/> <button class="nos-currency__btn" type="button"><i class="fa-solid fa-plus"></i></button></div>'), tl = /* @__PURE__ */ F('<button class="nos-tab-btn" type="button"><i class="fa-solid fa-plus"></i> </button>'), nl = /* @__PURE__ */ F('<input class="nos-item__qty" type="number" min="0"/>'), rl = /* @__PURE__ */ F('<p class="nos-empty"> </p>'), al = /* @__PURE__ */ F('<div class="nos-currency"></div> <div class="nos-search"><i class="fa-solid fa-search nos-muted"></i> <input type="text"/> <!></div> <div class="nos-item-grid"></div> <!>', 1);
function ka(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ ge(""), a = /* @__PURE__ */ M(() => t.actor.reactive.system.currency), r = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((y) => y.type === "object").sort((y, x) => (y.sort ?? 0) - (x.sort ?? 0))), s = /* @__PURE__ */ M(() => u(n) ? u(r).filter((y) => y.name.toLowerCase().includes(u(n).toLowerCase())) : u(r));
  async function o() {
    try {
      await t.actor.createEmbeddedDocuments("Item", [{ name: k("NWS.NewObject"), type: "object" }]);
    } catch (y) {
      console.error("nimble-white-sheet | Failed to create object:", y);
    }
  }
  i(o, "createObject");
  function c(y, x) {
    const C = Math.max(0, Math.round(Number(x)));
    Number.isNaN(C) || t.actor.update({ [`system.currency.${y}.value`]: C });
  }
  i(c, "updateCurrency");
  function l(y, x) {
    const C = u(a)[y]?.value ?? 0;
    t.actor.update({
      [`system.currency.${y}.value`]: Math.max(0, C + x)
    });
  }
  i(l, "adjustCurrency");
  function f(y, x) {
    const C = Number(x);
    if (Number.isNaN(C)) return;
    t.actor.items.get(y)?.update({ "system.quantity": C });
  }
  i(f, "updateQuantity");
  var _ = al(), h = We(_);
  Se(h, 20, () => [["gp", "NWS.GP"], ["sp", "NWS.SP"], ["cp", "NWS.CP"]], we, (y, x) => {
    var C = /* @__PURE__ */ M(() => Wa(x, 2));
    let W = /* @__PURE__ */ i(() => u(C)[0], "type"), O = /* @__PURE__ */ i(() => u(C)[1], "labelKey");
    var I = el(), H = m(I), P = m(H), K = g(H, 2);
    K.__click = () => l(W(), -1);
    var Q = g(K, 2);
    Q.__change = ($) => c(W(), $.currentTarget.value);
    var Z = g(Q, 2);
    Z.__click = () => l(W(), 1), j(
      ($, Ae, de) => {
        D(H, "for", `currency-${W() ?? ""}`), L(P, $), D(K, "aria-label", `-1 ${Ae ?? ""}`), D(Q, "id", `currency-${W() ?? ""}`), Ye(Q, u(a)[W()]?.value ?? 0), D(Z, "aria-label", `+1 ${de ?? ""}`);
      },
      [
        () => k(O()),
        () => k(O()),
        () => k(O())
      ]
    ), R(y, I);
  });
  var v = g(h, 2), p = g(m(v), 2), w = g(p, 2);
  {
    var S = /* @__PURE__ */ i((y) => {
      var x = tl();
      x.__click = o;
      var C = g(m(x));
      j((W) => L(C, ` ${W ?? ""}`), [() => k("NWS.New")]), R(y, x);
    }, "consequent");
    V(w, (y) => {
      t.editingEnabled && y(S);
    });
  }
  var d = g(v, 2);
  Se(d, 21, () => u(s), we, (y, x) => {
    {
      const C = /* @__PURE__ */ i((O) => {
        var I = nl();
        I.__change = (H) => f(u(x).id, H.currentTarget.value), j(() => Ye(I, u(x).system?.quantity ?? 1)), R(O, I);
      }, "extra");
      let W = /* @__PURE__ */ M(() => u(x).system?.description?.public);
      Ot(y, {
        get actor() {
          return t.actor;
        },
        get item() {
          return u(x);
        },
        get editingEnabled() {
          return t.editingEnabled;
        },
        get tooltip() {
          return u(W);
        },
        extra: C,
        $$slots: { extra: !0 }
      });
    }
  });
  var E = g(d, 2);
  {
    var A = /* @__PURE__ */ i((y) => {
      var x = rl(), C = m(x);
      j((W) => L(C, W), [() => k("NWS.DropInventoryHere")]), R(y, x);
    }, "consequent_1");
    V(E, (y) => {
      u(r).length === 0 && y(A);
    });
  }
  j((y) => D(p, "placeholder", y), [() => k("NWS.SearchItems")]), ki(p, () => u(n), (y) => _e(n, y)), R(e, _), ue();
}
i(ka, "InventoryTab");
Ee(["click", "change"]);
var il = /* @__PURE__ */ F('<div class="nos-bio"><div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <input type="text"/></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__field" style="grid-column: 1 / -1;"><label> </label> <span style="font-size: 0.833rem;"> </span> <button class="nos-icon-btn" type="button" style="opacity: 0.65;"><i class="fa-solid fa-gear"></i></button></div> <div class="nos-bio__notes"><label> </label> <div class="nos-bio__notes-editor"><!></div></div></div>');
function xa(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ M(() => t.actor.reactive.system.details), a = /* @__PURE__ */ M(() => t.actor.reactive.system.proficiencies), r = /* @__PURE__ */ M(() => [...u(a).languages ?? []].join(", ")), s = /* @__PURE__ */ M(() => [...u(a).armor ?? []].join(", ")), o = /* @__PURE__ */ M(() => (u(a).weapons ?? []).join(", "));
  function c(te, N) {
    t.actor.update({ [`system.details.${te}`]: N });
  }
  i(c, "updateDetail");
  let l = /* @__PURE__ */ M(() => foundry.utils.cleanHTML(u(n).notes ?? ""));
  function f(te) {
    const N = foundry.utils.cleanHTML(te);
    N !== u(l) && c("notes", N);
  }
  i(f, "updateNotes");
  var _ = il(), h = m(_), v = m(h), p = m(v), w = g(v, 2);
  w.__change = (te) => c("age", te.currentTarget.value);
  var S = g(h, 2), d = m(S), E = m(d), A = g(d, 2);
  A.__change = (te) => c("gender", te.currentTarget.value);
  var y = g(S, 2), x = m(y), C = m(x), W = g(x, 2);
  W.__change = (te) => c("height", te.currentTarget.value);
  var O = g(y, 2), I = m(O), H = m(I), P = g(I, 2);
  P.__change = (te) => c("weight", te.currentTarget.value);
  var K = g(O, 2), Q = m(K), Z = m(Q), $ = g(Q, 2), Ae = m($), de = g($, 2);
  de.__click = () => t.actor.configureLanguageProficiencies();
  var Ie = g(K, 2), Je = m(Ie), ve = m(Je), ke = g(Je, 2), he = m(ke), Be = g(ke, 2);
  Be.__click = () => t.actor.configureArmorProficiencies();
  var Mt = g(Ie, 2), Dt = m(Mt), $t = m(Dt), mt = g(Dt, 2), gt = m(mt), ot = g(mt, 2);
  ot.__click = () => t.actor.configureWeaponProficiencies();
  var lt = g(Mt, 2), pt = m(lt), en = m(pt), ct = g(pt, 2), yt = m(ct);
  ro(yt, () => u(l)), j(
    (te, N, Y, X, re, ut, xe, jn, fr, dr, vr, _r, Un) => {
      L(p, te), Ye(w, u(n).age ?? ""), w.disabled = !t.editingEnabled, L(E, N), Ye(A, u(n).gender ?? ""), A.disabled = !t.editingEnabled, L(C, Y), Ye(W, u(n).height ?? ""), D(W, "placeholder", X), W.disabled = !t.editingEnabled, L(H, re), Ye(P, u(n).weight ?? ""), D(P, "placeholder", ut), P.disabled = !t.editingEnabled, L(Z, xe), L(Ae, u(r) || "—"), D(de, "data-tooltip", jn), de.disabled = !t.editingEnabled, L(ve, fr), L(he, u(s) || "—"), D(Be, "data-tooltip", dr), Be.disabled = !t.editingEnabled, L($t, vr), L(gt, u(o) || "—"), D(ot, "data-tooltip", _r), ot.disabled = !t.editingEnabled, L(en, Un), D(ct, "contenteditable", t.editingEnabled ? "true" : "false");
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
  ), $r("blur", ct, (te) => f(te.currentTarget.innerHTML)), R(e, _), ue();
}
i(xa, "BioTab");
Ee(["change", "click"]);
var sl = /* @__PURE__ */ F('<div class="nos-slot" draggable="true"><img class="nos-slot__img"/> <span class="nos-slot__name"> </span></div>'), ol = /* @__PURE__ */ F('<div class="nos-slot nos-slot--empty"> </div>'), ll = /* @__PURE__ */ F("<!> <!>", 1);
function cl(e, t) {
  ce(t, !0);
  function n(l, f) {
    l.dataTransfer?.setData("text/plain", JSON.stringify({ type: "Item", uuid: f.uuid }));
  }
  i(n, "onDragStart");
  let a = /* @__PURE__ */ M(() => t.actor.reactive.items.filter((l) => l.type === "object" && l.system?.objectType === "weapon").sort((l, f) => (l.sort ?? 0) - (f.sort ?? 0)));
  var r = ll(), s = We(r);
  Se(s, 17, () => u(a), we, (l, f) => {
    var _ = sl(), h = m(_), v = g(h, 2);
    v.__click = () => t.actor.activateItem(u(f).id);
    var p = m(v);
    j(() => {
      D(_, "data-item-id", u(f).id), D(h, "src", u(f).img), D(h, "alt", u(f).name), D(v, "data-tooltip", u(f).system?.description?.public || u(f).name), L(p, u(f).name);
    }), $r("dragstart", _, (w) => n(w, u(f))), R(l, _);
  });
  var o = g(s, 2);
  {
    var c = /* @__PURE__ */ i((l) => {
      var f = ol(), _ = m(f);
      j((h) => L(_, h), [() => k("NWS.NoWeapons")]), R(l, f);
    }, "consequent");
    V(o, (l) => {
      u(a).length === 0 && l(c);
    });
  }
  R(e, r), ue();
}
i(cl, "InventorySlots");
Ee(["click"]);
var ul = /* @__PURE__ */ F('<button type="button"><i style="margin-right: 0.25rem;"></i> </button>'), fl = /* @__PURE__ */ F('<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid var(--nos-border-color);"> </div>'), dl = /* @__PURE__ */ F('<section class="nos-content"><nav class="nos-content__tabs"></nav> <div class="nos-content__body"><!></div> <div class="nos-content__sidebar-header"><span> </span></div> <div class="nos-content__sidebar"><!> <!></div></section>');
function vl(e, t) {
  ce(t, !0);
  const n = [
    {
      name: "features",
      labelKey: "NWS.Features",
      icon: "fa-solid fa-table-list",
      component: Sa
    },
    {
      name: "spells",
      labelKey: "NWS.Spells",
      icon: "fa-solid fa-wand-sparkles",
      component: Ea
    },
    {
      name: "inventory",
      labelKey: "NWS.Inventory",
      icon: "fa-solid fa-box-open",
      component: ka
    },
    {
      name: "bio",
      labelKey: "NWS.Bio",
      icon: "fa-solid fa-file-lines",
      component: xa
    }
  ];
  let a = /* @__PURE__ */ ge("features"), r = /* @__PURE__ */ M(() => t.actor.reactive.flags?.nimble?.trackInventorySlots ?? !1), s = /* @__PURE__ */ M(() => t.actor.reactive.system.inventory);
  var o = dl(), c = m(o);
  Se(c, 21, () => n, we, (y, x) => {
    var C = ul();
    let W;
    C.__click = () => _e(a, u(x).name, !0);
    var O = m(C), I = g(O);
    j(
      (H) => {
        W = Ue(C, 1, "nos-tab-btn", null, W, { "nos-tab-btn--active": u(a) === u(x).name }), Ue(O, 1, u(x).icon), L(I, ` ${H ?? ""}`);
      },
      [() => k(u(x).labelKey)]
    ), R(y, C);
  });
  var l = g(c, 2), f = m(l);
  {
    var _ = /* @__PURE__ */ i((y) => {
      Sa(y, {
        get actor() {
          return t.actor;
        },
        get editingEnabled() {
          return t.editingEnabled;
        }
      });
    }, "consequent"), h = /* @__PURE__ */ i((y) => {
      var x = Wn(), C = We(x);
      {
        var W = /* @__PURE__ */ i((I) => {
          Ea(I, {
            get actor() {
              return t.actor;
            },
            get editingEnabled() {
              return t.editingEnabled;
            }
          });
        }, "consequent_1"), O = /* @__PURE__ */ i((I) => {
          var H = Wn(), P = We(H);
          {
            var K = /* @__PURE__ */ i((Z) => {
              ka(Z, {
                get actor() {
                  return t.actor;
                },
                get editingEnabled() {
                  return t.editingEnabled;
                }
              });
            }, "consequent_2"), Q = /* @__PURE__ */ i((Z) => {
              var $ = Wn(), Ae = We($);
              {
                var de = /* @__PURE__ */ i((Ie) => {
                  xa(Ie, {
                    get actor() {
                      return t.actor;
                    },
                    get editingEnabled() {
                      return t.editingEnabled;
                    }
                  });
                }, "consequent_3");
                V(
                  Ae,
                  (Ie) => {
                    u(a) === "bio" && Ie(de);
                  },
                  !0
                );
              }
              R(Z, $);
            }, "alternate");
            V(
              P,
              (Z) => {
                u(a) === "inventory" ? Z(K) : Z(Q, !1);
              },
              !0
            );
          }
          R(I, H);
        }, "alternate_1");
        V(
          C,
          (I) => {
            u(a) === "spells" ? I(W) : I(O, !1);
          },
          !0
        );
      }
      R(y, x);
    }, "alternate_2");
    V(f, (y) => {
      u(a) === "features" ? y(_) : y(h, !1);
    });
  }
  var v = g(l, 2), p = m(v), w = m(p), S = g(v, 2), d = m(S);
  cl(d, {
    get actor() {
      return t.actor;
    }
  });
  var E = g(d, 2);
  {
    var A = /* @__PURE__ */ i((y) => {
      var x = fl(), C = m(x);
      j(() => L(C, `${u(s).usedSlots ?? 0 ?? ""} / ${u(s).totalSlots ?? 0 ?? ""}`)), R(y, x);
    }, "consequent_4");
    V(E, (y) => {
      u(r) && y(A);
    });
  }
  j((y) => L(w, y), [() => k("NWS.Weapons")]), R(e, o), ue();
}
i(vl, "ContentArea");
Ee(["click"]);
var _l = /* @__PURE__ */ F('<button type="button" role="menuitem"><i></i> <span> </span></button>'), hl = /* @__PURE__ */ F('<label class="nos-color-picker"><input type="color"/> <span> </span></label>'), bl = /* @__PURE__ */ F('<div class="nos-color-picker-group"><span class="nos-color-picker-group__label"> </span> <div class="nos-color-picker-group__colors"></div></div>'), ml = /* @__PURE__ */ F('<div class="nos-color-picker-panel"></div>'), gl = /* @__PURE__ */ F('<div class="nos-color-scheme-backdrop"></div> <div class="nos-color-scheme-menu" role="menu"><!> <!></div>', 1);
function pl(e, t) {
  ce(t, !0);
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
  function r(v) {
    t.setColorScheme(v), v !== "custom" && t.onclose();
  }
  i(r, "select");
  function s(v) {
    v.key === "Escape" && t.onclose();
  }
  i(s, "handleKeydown");
  var o = gl(), c = We(o);
  c.__click = function(...v) {
    t.onclose?.apply(this, v);
  }, c.__keydown = s;
  var l = g(c, 2), f = m(l);
  Se(f, 17, () => n, we, (v, p) => {
    var w = _l();
    let S;
    w.__click = () => r(u(p).value);
    var d = m(w), E = g(d, 2), A = m(E);
    j(
      (y) => {
        S = Ue(w, 1, "nos-color-scheme-menu__option", null, S, {
          "nos-color-scheme-menu__option--active": t.colorScheme === u(p).value
        }), Ue(d, 1, `fa-solid ${u(p).icon ?? ""}`), L(A, y);
      },
      [() => k(u(p).label)]
    ), R(v, w);
  });
  var _ = g(f, 2);
  {
    var h = /* @__PURE__ */ i((v) => {
      var p = ml();
      Se(p, 21, () => a, we, (w, S) => {
        var d = bl(), E = m(d), A = m(E), y = g(E, 2);
        Se(y, 21, () => u(S).colors, we, (x, C) => {
          var W = hl(), O = m(W);
          O.__input = (P) => t.setCustomColor(u(C).key, P.currentTarget.value);
          var I = g(O, 2), H = m(I);
          j(
            (P) => {
              Ye(O, t.customColors[u(C).key]), L(H, P);
            },
            [() => k(u(C).label)]
          ), R(x, W);
        }), j((x) => L(A, x), [() => k(u(S).label)]), R(w, d);
      }), R(v, p);
    }, "consequent");
    V(_, (v) => {
      t.colorScheme === "custom" && v(h);
    });
  }
  R(e, o), ue();
}
i(pl, "ColorSchemeMenu");
Ee(["click", "keydown", "input"]);
var yl = /* @__PURE__ */ F('<button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-arrow-up-right-dots"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-undo"></i></button>', 1), wl = /* @__PURE__ */ F('<aside class="nos-sidebar-controls"><button type="button"><i></i></button> <!> <div class="nos-color-scheme-wrapper"><button type="button" aria-haspopup="true"><i class="fa-solid fa-circle-half-stroke"></i></button> <!></div> <button class="nos-sidebar-btn" type="button"><i class="fa-regular fa-hourglass-half"></i></button> <button class="nos-sidebar-btn" type="button"><i class="fa-solid fa-moon"></i></button></aside>');
function Sl(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ ge(!1);
  var a = wl(), r = m(a);
  let s;
  r.__click = function(...d) {
    t.toggleEditingEnabled?.apply(this, d);
  };
  var o = m(r), c = g(r, 2);
  {
    var l = /* @__PURE__ */ i((d) => {
      var E = yl(), A = We(E);
      A.__click = () => t.actor.triggerLevelUp();
      var y = g(A, 2);
      y.__click = () => t.actor.triggerLevelDown(), j(
        (x, C, W, O) => {
          D(A, "aria-label", x), D(A, "data-tooltip", C), A.disabled = !t.classItem || t.classItem?.system?.classLevel >= 20, D(y, "aria-label", W), D(y, "data-tooltip", O), y.disabled = t.actor.reactive.system.levelUpHistory.length === 0;
        },
        [
          () => k("NWS.LevelUp"),
          () => k("NWS.LevelUp"),
          () => k("NWS.RevertLastLevelUp"),
          () => k("NWS.RevertLastLevelUp")
        ]
      ), R(d, E);
    }, "consequent");
    V(c, (d) => {
      t.editingEnabled && d(l);
    });
  }
  var f = g(c, 2), _ = m(f);
  let h;
  _.__click = () => _e(n, !u(n));
  var v = g(_, 2);
  {
    var p = /* @__PURE__ */ i((d) => {
      pl(d, {
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
        onclose: /* @__PURE__ */ i(() => _e(n, !1), "onclose")
      });
    }, "consequent_1");
    V(v, (d) => {
      u(n) && d(p);
    });
  }
  var w = g(f, 2);
  w.__click = () => t.actor.triggerRest({ restType: "field" });
  var S = g(w, 2);
  S.__click = () => t.actor.triggerRest({ restType: "safe" }), j(
    (d, E, A, y, x, C, W, O) => {
      s = Ue(r, 1, "nos-sidebar-btn", null, s, { "nos-sidebar-btn--active": t.editingEnabled }), D(r, "aria-pressed", t.editingEnabled), D(r, "aria-label", d), D(r, "data-tooltip", E), Ue(o, 1, `fa-solid ${t.editingEnabled ? "fa-pen" : "fa-lock"}`), h = Ue(_, 1, "nos-sidebar-btn", null, h, { "nos-sidebar-btn--active": t.darkMode }), D(_, "aria-pressed", t.darkMode), D(_, "aria-label", A), D(_, "data-tooltip", y), D(_, "aria-expanded", u(n)), D(w, "aria-label", x), D(w, "data-tooltip", C), D(S, "aria-label", W), D(S, "data-tooltip", O);
    },
    [
      () => t.editingEnabled ? k("NWS.DisableEditing") : k("NWS.EnableEditing"),
      () => t.editingEnabled ? k("NWS.EditingEnabled") : k("NWS.EditingLocked"),
      () => k("NWS.ColorScheme"),
      () => k("NWS.ColorScheme"),
      () => k("NWS.FieldRest"),
      () => k("NWS.FieldRest"),
      () => k("NWS.SafeRest"),
      () => k("NWS.SafeRest")
    ]
  ), R(e, a), ue();
}
i(Sl, "SidebarControls");
Ee(["click"]);
var El = /* @__PURE__ */ F('<div><div class="nos-top"><!> <!> <!></div> <!> <!> <span class="nos-logo">Nimble</span></div>');
function kl(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ i((N) => (N?.parent?.documentName === "Actor" ? N.parent : N?.parent?.parent)?.id, "effectActorId"), a = Za((N) => {
    const Y = /* @__PURE__ */ i((re) => {
      n(re) === t.actor.id && N();
    }, "onEffect"), X = {
      updateActor: Hooks.on("updateActor", (re, ut, xe) => {
        xe.diff !== !1 && re._id === t.actor.id && N();
      }),
      createItem: Hooks.on("createItem", (re) => {
        re?.actor?.id === t.actor.id && N();
      }),
      deleteItem: Hooks.on("deleteItem", (re) => {
        re?.actor?.id === t.actor.id && N();
      }),
      updateItem: Hooks.on("updateItem", (re, ut, xe) => {
        xe.diff !== !1 && re?.actor?.id === t.actor.id && N();
      }),
      createActiveEffect: Hooks.on("createActiveEffect", Y),
      updateActiveEffect: Hooks.on("updateActiveEffect", Y),
      deleteActiveEffect: Hooks.on("deleteActiveEffect", Y)
    };
    return () => {
      Hooks.off("updateActor", X.updateActor), Hooks.off("createItem", X.createItem), Hooks.off("deleteItem", X.deleteItem), Hooks.off("updateItem", X.updateItem), Hooks.off("createActiveEffect", X.createActiveEffect), Hooks.off("updateActiveEffect", X.updateActiveEffect), Hooks.off("deleteActiveEffect", X.deleteActiveEffect);
    };
  }), r = new Proxy(t.actor, {
    get(N, Y) {
      if (Y === "reactive")
        return a(), N;
      const X = N[Y];
      return typeof X == "function" ? X.bind(N) : X;
    }
  }), { sizeCategories: s } = CONFIG.NIMBLE;
  function o(N, Y) {
    return Y <= 0 ? 0 : Math.clamp(0, Math.round(N / Y * 100), 100);
  }
  i(o, "getHitPointPercentage");
  function c(N, Y, X, re) {
    const ut = [];
    if (X && ut.push(`${X.name} (${s[re] ?? re})`), N) {
      const xe = N.system.classLevel;
      ut.push(Y ? `${N.name} (${Y.name}, ${xe})` : `${N.name} (${xe})`);
    }
    return ut.join(" ⟡ ");
  }
  i(c, "prepareCharacterMetadata");
  let l = /* @__PURE__ */ M(() => r.reactive.items.find((N) => N.type === "class") ?? null), f = /* @__PURE__ */ M(() => r.reactive.items.find((N) => N.type === "subclass") ?? null), _ = /* @__PURE__ */ M(() => r.reactive.items.find((N) => N.type === "ancestry") ?? null), h = /* @__PURE__ */ M(() => o(r.reactive.system.attributes.hp.value, r.reactive.system.attributes.hp.max) <= 50);
  function v(N) {
    r.update({ "system.attributes.hp.value": N });
  }
  i(v, "updateCurrentHP");
  function p(N) {
    r.update({ "system.attributes.hp.temp": N });
  }
  i(p, "updateTempHP");
  let w = /* @__PURE__ */ M(() => r.reactive.system.resources.mana), S = /* @__PURE__ */ M(() => (u(w).max ?? 0) > 0 || (u(w).baseMax ?? 0) > 0 ? !0 : r.reactive.items.some((N) => N.type === "class" && N.system?.mana?.formula?.length));
  function d(N) {
    r.update({ "system.resources.mana.current": N });
  }
  i(d, "updateCurrentMana");
  let E = /* @__PURE__ */ M(() => {
    const N = r.reactive.system.attributes, Y = r.reactive.items.filter((X) => X.type === "class");
    return bo(N.hitDice, N.bonusHitDice ?? [], Y, N.hitDiceSizeBonus ?? 0);
  });
  async function A(N) {
    await r.updateCurrentHitDice(N);
  }
  i(A, "updateCurrentHitDice");
  async function y() {
    await r.rollHitDice();
  }
  i(y, "rollHitDice");
  async function x() {
    await r.editCurrentHitDice();
  }
  i(x, "editCurrentHitDice");
  let C = /* @__PURE__ */ M(() => {
    const N = r.reactive.system.attributes.sizeCategory;
    return c(u(l), u(f), u(_), N);
  }), W = /* @__PURE__ */ M(() => r.reactive.system.attributes.wounds);
  function O(N) {
    const Y = N === u(W).value ? N - 1 : N;
    r.update({ "system.attributes.wounds.value": Y });
  }
  i(O, "toggleWounds");
  function I() {
    r.update({ "system.attributes.wounds.value": 0 });
  }
  i(I, "resetWounds");
  let H = /* @__PURE__ */ M(() => r.reactive.flags.nimble), P = /* @__PURE__ */ M(() => u(H)?.editingEnabled ?? !0);
  const K = co(!1, (N) => (ri(() => N(u(P))), () => {
  }));
  async function Q() {
    await r.setFlag("nimble", "editingEnabled", !u(P));
  }
  i(Q, "toggleEditingEnabled");
  let Z = /* @__PURE__ */ M(() => r.reactive.flags[ln]), $ = /* @__PURE__ */ M(() => {
    const N = u(Z)?.colorScheme ?? u(H)?.colorScheme;
    return N || (u(H)?.darkMode === !0 ? "dark" : "nimble");
  });
  async function Ae(N) {
    await r.setFlag(ln, "colorScheme", N);
  }
  i(Ae, "setColorScheme");
  let de = /* @__PURE__ */ M(() => u($) === "dark"), Ie = /* @__PURE__ */ M(() => u($) === "nimble"), Je = /* @__PURE__ */ M(() => u($) === "custom");
  const ve = 300;
  let ke = /* @__PURE__ */ M(() => ({
    ...u(H)?.customColors,
    ...u(Z)?.customColors
  })), he = /* @__PURE__ */ ge(Rt({})), Be, Mt = /* @__PURE__ */ M(() => ({
    ..._o,
    ...u(ke),
    ...u(he)
  }));
  function Dt(N, Y) {
    _e(he, { ...u(he), [N]: Y }, !0), clearTimeout(Be), Be = setTimeout($t, ve);
  }
  i(Dt, "setCustomColor");
  async function $t() {
    const N = u(he);
    Object.keys(N).length !== 0 && (await r.setFlag(ln, "customColors", { ...u(ke), ...N }), _e(he, Object.fromEntries(Object.entries(u(he)).filter(([Y, X]) => N[Y] !== X)), !0));
  }
  i($t, "saveCustomColors"), Js(() => {
    clearTimeout(Be), $t();
  });
  let mt = /* @__PURE__ */ M(() => u(Je) ? Object.entries(ho).map(([N, Y]) => `${Y}: ${u(Mt)[N]}`).join("; ") : "");
  Bn("actor", r), Bn("document", r), Bn("application", t.sheet), Bn("editingEnabled", K);
  var gt = El();
  let ot;
  var lt = m(gt), pt = m(lt);
  yo(pt, {
    get actor() {
      return r;
    },
    get metaData() {
      return u(C);
    },
    get editingEnabled() {
      return u(P);
    },
    get hitDiceData() {
      return u(E);
    }
  });
  var en = g(pt, 2);
  Ao(en, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return u(P);
    },
    get isBloodied() {
      return u(h);
    },
    get hitDiceData() {
      return u(E);
    },
    get hasMana() {
      return u(S);
    },
    get mana() {
      return u(w);
    },
    get wounds() {
      return u(W);
    },
    toggleWounds: O,
    resetWounds: I,
    updateCurrentHP: v,
    updateTempHP: p,
    updateCurrentMana: d,
    updateCurrentHitDice: A,
    rollHitDice: y,
    editCurrentHitDice: x
  });
  var ct = g(en, 2);
  Oo(ct, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return u(P);
    }
  });
  var yt = g(lt, 2);
  vl(yt, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return u(P);
    },
    get hasMana() {
      return u(S);
    },
    get mana() {
      return u(w);
    },
    updateCurrentMana: d
  });
  var te = g(yt, 2);
  Sl(te, {
    get actor() {
      return r;
    },
    get editingEnabled() {
      return u(P);
    },
    toggleEditingEnabled: Q,
    get classItem() {
      return u(l);
    },
    get darkMode() {
      return u(de);
    },
    get colorScheme() {
      return u($);
    },
    setColorScheme: Ae,
    get customColors() {
      return u(Mt);
    },
    setCustomColor: Dt
  }), j(() => {
    ot = Ue(gt, 1, "nos-sheet", null, ot, {
      "nos-sheet--dark": u(de),
      "nos-sheet--nimble": u(Ie),
      "nos-sheet--custom": u(Je)
    }), an(gt, `position: relative; ${u(mt) ?? ""}`);
  }), R(e, gt), ue();
}
i(kl, "WhiteSheet");
const et = class et extends fo(foundry.applications.sheets.ActorSheetV2) {
  _actor;
  root;
  constructor(t, n = {}) {
    super(foundry.utils.mergeObject(n, { document: t.document })), this.root = kl;
    const a = t.document, r = a.isToken ? a.parent?.actor : t.document;
    this._actor = r ?? t.document;
  }
  get actor() {
    return this._actor;
  }
  // Foundry may call setPosition() without arguments: default to an empty object.
  setPosition(t = {}) {
    return typeof t.width == "number" && t.width < et.MIN_WIDTH && (t.width = et.MIN_WIDTH), typeof t.height == "number" && t.height < et.MIN_HEIGHT && (t.height = et.MIN_HEIGHT), super.setPosition(t);
  }
  async _prepareContext(t) {
    return { ...await super._prepareContext(t), actor: this._actor, sheet: this };
  }
  // Foundry v14 resolves the drop into an Item and fires the dropActorSheetData hook in _onDrop
  // before calling this. Same flow as the core implementation (owner check, reorder within the
  // actor, create with keepId), plus the Nimble rules for subclasses.
  async _onDropItem(t, n) {
    if (!this.document.isOwner) return null;
    if (n.parent?.uuid === this._actor.uuid)
      return (await this._onSortItem(t, n))?.length ? n : null;
    const a = !this._actor.items.has(n.id ?? ""), r = n.toObject();
    if (n.type === "subclass" && !await this._confirmSubclassDrop(r))
      return null;
    try {
      const [s] = await this._actor.createEmbeddedDocuments("Item", [r], { keepId: a });
      return s ?? null;
    } catch (s) {
      return console.error("nimble-white-sheet | Failed to create item:", s), ui.notifications?.error(k("NWS.ItemAddFailed")), null;
    }
  }
  /**
   * Check a dropped subclass against the Nimble rules (level 3+, matching class, one subclass per
   * class) and, when the actor already has another one, replace it after confirmation.
   * Resolves to whether the dropped subclass should be created.
   */
  async _confirmSubclassDrop(t) {
    const n = CONFIG.NIMBLE, a = t, r = a.system?.parentClass, s = this._actor.levels?.character ?? 0;
    if (s < 3)
      return ui.notifications?.warn(Pe("NWS.SubclassLevelRequired", { level: s })), !1;
    if (!Object.values(this._actor.classes ?? {}).some((h) => h.identifier === r)) {
      const h = n?.classes?.[r ?? ""] ?? r;
      return ui.notifications?.warn(Pe("NWS.SubclassClassRequired", { name: a.name ?? "", className: h ?? "" })), !1;
    }
    const c = this._actor.items.find((h) => h.type === "subclass" && h.system?.parentClass === r);
    if (!c) return !0;
    const l = c.system, f = a.system?.identifier;
    if (l?.identifier && f && l.identifier === f)
      return ui.notifications?.warn(Pe("NWS.SubclassAlreadyOwned", { name: c.name })), !1;
    if (!await foundry.applications.api.DialogV2.confirm({
      content: `<p>${Pe("NWS.SubclassReplace", {
        current: foundry.utils.escapeHTML(c.name),
        name: foundry.utils.escapeHTML(a.name ?? "")
      })}</p>`,
      rejectClose: !1,
      modal: !0
    })) return !1;
    try {
      return await this._actor.deleteEmbeddedDocuments("Item", [c.id]), !0;
    } catch (h) {
      return console.error("nimble-white-sheet | Failed to remove existing subclass:", h), ui.notifications?.error(k("NWS.SubclassRemoveFailed")), !1;
    }
  }
};
i(et, "WhiteCharacterSheet"), De(et, "MIN_WIDTH", 670), De(et, "MIN_HEIGHT", 400), De(et, "DEFAULT_OPTIONS", {
  classes: ["nimble-white-sheet"],
  form: { submitOnChange: !1 },
  window: { icon: "fa-solid fa-scroll", resizable: !0 },
  position: { width: 650, height: 750 }
});
let Ur = et;
Hooks.once("init", () => {
  foundry.documents.collections.Actors.registerSheet(
    ln,
    Ur,
    {
      types: ["character"],
      makeDefault: !1,
      label: ln === xi ? "Nimble White Sheet" : `Nimble White Sheet (${ln})`
    }
  );
});
//# sourceMappingURL=nimble-white-sheet.js.map
