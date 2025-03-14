var ue = Object.defineProperty;
var J = (t) => {
  throw TypeError(t);
};
var be = (t, e, s) =>
  e in t
    ? ue(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (t[e] = s);
var I = (t, e, s) => be(t, typeof e != "symbol" ? e + "" : e, s),
  L = (t, e, s) => e.has(t) || J("Cannot " + s);
var o = (t, e, s) => (
    L(t, e, "read from private field"), s ? s.call(t) : e.get(t)
  ),
  b = (t, e, s) =>
    e.has(t)
      ? J("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, s),
  f = (t, e, s, n) => (
    L(t, e, "write to private field"), n ? n.call(t, s) : e.set(t, s), s
  ),
  r = (t, e, s) => (L(t, e, "access private method"), s);
var c = ((t) => (
    (t.SetupBackButton = "web_app_setup_back_button"),
    (t.SetupSettingsButton = "web_app_setup_settings_button"),
    (t.ReadTextFromClipboard = "web_app_read_text_from_clipboard"),
    (t.Expand = "web_app_expand"),
    (t.Ready = "web_app_ready"),
    (t.Close = "web_app_close"),
    (t.AddToHomeScreen = "web_app_add_to_home_screen"),
    (t.CheckHomeScreen = "web_app_check_home_screen"),
    (t.SetBackgroungColor = "web_app_set_background_color"),
    (t.SetHeaderColor = "web_app_set_header_color"),
    (t.setBottomBorColor = "web_app_set_bottom_bar_color"),
    (t.IframeClicked = "web_app_iframe_clicked"),
    (t.SetupClosingBehavior = "web_app_setup_closing_behavior"),
    (t.RequestContact = "web_app_request_phone"),
    (t.OpenLink = "web_app_open_link"),
    (t.SendData = "web_app_data_send"),
    (t.OpenScanQr = "web_app_open_scan_qr_popup"),
    (t.InvokeCustomMethod = "web_app_invoke_custom_method"),
    t
  ))(c || {}),
  a = ((t) => (
    (t.ClipboardTextReceived = "clipboardTextReceived"),
    (t.SettingsButtonPressed = "settingsButtonPressed"),
    (t.BackButtonPressed = "backButtonClicked"),
    (t.ContactRequestResult = "contactRequested"),
    (t.ReloadIframe = "reloadIframe"),
    (t.QrTextReceived = "qrTextReceived"),
    (t.ScanQrPopupClosed = "scanQrPopupClosed"),
    (t.CustomMethodInvoked = "customMethodInvoked"),
    (t.HomeScreenChecked = "homeScreenChecked"),
    (t.HomeScreenAdded = "homeScreenAdded"),
    (t.HomeScreenFailed = "homeScreenFailed"),
    t
  ))(a || {});
function fe(t) {
  const e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    s = e.length;
  let n = "";
  for (let h = 0; h < t; h++) n += e[Math.floor(Math.random() * s)];
  return n;
}
const j = (t) => Object.values(a).includes(t);
function me(t) {
  t += "";
  let e;
  if ((e = /^\s*#([0-9a-f]{6})\s*$/i.exec(t))) return "#" + e[1].toLowerCase();
  if ((e = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(t)))
    return ("#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]).toLowerCase();
  if (
    (e =
      /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(
        t
      ))
  ) {
    let s = parseInt(e[1]),
      n = parseInt(e[2]),
      h = parseInt(e[3]);
    const l = (s < 16 ? "0" : "") + s.toString(16),
      p = (n < 16 ? "0" : "") + n.toString(16),
      d = (h < 16 ? "0" : "") + h.toString(16);
    return "#" + l + p + d;
  }
  return !1;
}
function Ce(t) {
  if (window.Blob)
    try {
      return new Blob([t]).size;
    } catch {}
  for (var e = t.length, s = t.length - 1; s >= 0; s--) {
    var n = t.charCodeAt(s);
    n > 127 && n <= 2047 ? e++ : n > 2047 && n <= 65535 && (e += 2),
      n >= 56320 && n <= 57343 && s--;
  }
  return e;
}
const _e = (t) =>
  t
    .toLowerCase()
    .replace(/([-_][a-z])/g, (e) => e.toUpperCase().replace("_", ""));
function Q(t, e) {
  const s = t.replace(/^\s+|\s+$/g, "").split("."),
    n = e.replace(/^\s+|\s+$/g, "").split(".");
  let h = Math.max(s.length, n.length);
  for (let l = 0; l < h; l++) {
    const p = parseInt(n[l]) || 0,
      d = parseInt(s[l]) || 0;
    if (p != d) return p > d;
  }
  return !0;
}
const ge = (t) => {
  let e = _e(t);
  return t === "phone_requested" && (e = a.ContactRequestResult), e;
};
var w,
  O,
  u,
  _,
  S,
  P,
  v,
  x,
  R,
  C,
  A,
  B,
  i,
  z,
  G,
  X,
  D,
  m,
  K,
  Y,
  Z,
  y,
  T,
  V,
  ee,
  F,
  te,
  se,
  ie,
  oe,
  ne,
  re,
  ae,
  he;
class ke {
  constructor() {
    b(this, i);
    b(this, w, {});
    b(this, O, [
      "https://web.bale.ai",
      "https://beta.bale.ai",
      "https://maviz.bale.ai",
    ]);
    I(this, "WebApp", {});
    b(this, u, {});
    b(this, _, {});
    I(this, "receiveEvent");
    b(this, S, !1);
    b(this, P, !1);
    b(this, v, {});
    b(this, x, {});
    b(this, R, "");
    b(this, C, "1.0");
    b(this, A, !1);
    b(this, B, !1);
    I(this, "headerColor", {});
    r(this, i, z).call(this),
      r(this, i, X).call(this),
      r(this, i, G).call(this),
      this.exposeMethodsAndProperties();
  }
  sendEvent(e, s) {
    o(this, w).isWeb
      ? o(this, O).map((n) => {
          window.parent.postMessage(
            JSON.stringify({ eventType: e, eventData: s }),
            n
          );
        })
      : (s || (s = {}), BaleWebApp.postEvent(e, JSON.stringify(s)));
  }
  onEvent(e, s) {
    const n = o(this, _)[e];
    n && n.indexOf(s) === -1 ? n.push(s) : (o(this, _)[e] = [s]);
  }
  offEvent(e, s) {
    if (o(this, _)[e] === void 0) return;
    const n = o(this, _)[e].indexOf(s);
    n !== -1 && o(this, _)[e].splice(n, 1);
  }
  exposeMethodsAndProperties() {
    (this.WebApp.ready = r(this, i, K).bind(this)),
      (this.WebApp.expand = r(this, i, Y).bind(this)),
      (this.WebApp.close = r(this, i, Z).bind(this)),
      (this.WebApp.addToHomeScreen = r(this, i, y).bind(this)),
      (this.WebApp.checkHomeScreenStatus = r(this, i, T).bind(this)),
      (this.WebApp.SettingsButton = r(this, i, V).call(this)),
      (this.WebApp.onEvent = this.onEvent.bind(this.WebApp)),
      (this.WebApp.offEvent = this.offEvent.bind(this)),
      (this.WebApp.enableClosingConfirmation = r(this, i, te).bind(this)),
      (this.WebApp.disableClosingConfirmation = r(this, i, se).bind(this)),
      (this.WebApp.requestContact = r(this, i, ie).bind(this)),
      (this.WebApp.openLink = r(this, i, ne).bind(this)),
      (this.WebApp.setHeaderColor = r(this, i, oe).bind(this)),
      (this.WebApp.sendData = r(this, i, re).bind(this)),
      (this.WebApp.showScanQrPopup = r(this, i, ae).bind(this)),
      (this.WebApp.invokeCustomMethod = r(this, i, he).bind(this)),
      (this.WebApp.SettingsButton = r(this, i, V).call(this)),
      (this.WebApp.BackButton = r(this, i, ee).call(this)),
      Object.defineProperty(this.WebApp, "isClosingConfirmationEnabled", {
        get: () => o(this, S),
      }),
      (this.WebApp.themeParams = o(this, v)),
      (this.WebApp.initData = o(this, R)),
      (this.WebApp.initDataUnsafe = o(this, x)),
      (this.WebApp.version = o(this, C)),
      (this.WebApp.isIframe = o(this, w).isWeb),
      (this.WebApp.isDarkMode = o(this, A)),
      (this.WebApp.colorScheme = o(this, A) ? "dark" : "light");
  }
}
(w = new WeakMap()),
  (O = new WeakMap()),
  (u = new WeakMap()),
  (_ = new WeakMap()),
  (S = new WeakMap()),
  (P = new WeakMap()),
  (v = new WeakMap()),
  (x = new WeakMap()),
  (R = new WeakMap()),
  (C = new WeakMap()),
  (A = new WeakMap()),
  (B = new WeakMap()),
  (i = new WeakSet()),
  (z = function () {
    const e = window.location.hash.slice(1),
      s = new URLSearchParams(e),
      n = s.get("tgWebAppThemeParams"),
      h = s.get("tgWebAppPlatform"),
      l = s.get("tgWebAppVersion"),
      p = s.get("tgWebAppData"),
      d = n ? decodeURIComponent(n) : void 0,
      E = p ? decodeURIComponent(p) : void 0;
    (o(this, w).isWeb = h === "web"),
      d &&
        (f(this, v, JSON.parse(d)),
        Object.entries(o(this, v)).forEach((W) => {
          const g = W[0],
            k = W[1];
          document.documentElement.style.setProperty("--bale-" + g, k),
            g === "text_color" &&
              (k === "#091E42" && f(this, A, !1),
              k === "#DFE1E5" && f(this, A, !0));
        })),
      E &&
        new URLSearchParams(E).forEach((g, k) => {
          if (k === "user")
            try {
              g = JSON.parse(g);
            } catch {
              r(this, i, m).call(this).error("Failed to parse user data");
            }
          (o(this, x)[k] = g), f(this, R, p || "");
        }),
      l && f(this, C, l);
  }),
  (G = function () {
    o(this, w).isWeb &&
      window.addEventListener("load", () => {
        document.body.addEventListener("click", () => {
          this.sendEvent(c.IframeClicked);
        });
      });
  }),
  (X = function () {
    o(this, w).isWeb
      ? window.addEventListener("message", (e) => {
          if (e.source !== window.parent) {
            r(this, i, m)
              .call(this)
              .error("Event received from unknown source");
            return;
          }
          try {
            const s = JSON.parse(e.data);
            if (!j(s.eventType)) {
              r(this, i, m)
                .call(this)
                .error(s.eventType + " event is not supported");
              return;
            }
            r(this, i, D).call(this, s.eventType, s.eventData);
          } catch {
            r(this, i, m).call(this).error("Error in parsing JSON data");
          }
        })
      : (this.receiveEvent = (e, s) => {
          const n = ge(e);
          if (!j(n)) {
            r(this, i, m)
              .call(this)
              .error(e + " event is not supported");
            return;
          }
          r(this, i, D).call(this, n, s);
        });
  }),
  (D = function (e, s) {
    var n, h, l, p, d, E, W, g, k, q, $, N, U;
    if (!e) {
      r(this, i, m).call(this).error("sent data doesn't have required format.");
      return;
    }
    switch (
      ((n = o(this, _)[e]) != null &&
        n.length &&
        o(this, _)[e].forEach((H) => {
          H(s);
        }),
      e)
    ) {
      case a.ContactRequestResult:
        const H = s.status === "sent";
        (l = (h = o(this, u))[a.ContactRequestResult]) == null || l.call(h, H),
          f(this, P, !0);
        break;
      case a.ReloadIframe:
        window.location.reload();
        break;
      case a.HomeScreenChecked:
        const de = s.status || "unknown";
        (d = (p = o(this, u))[a.HomeScreenChecked]) == null ||
          d.call(p, { status: de });
        break;
      case a.QrTextReceived:
        f(this, B, !1),
          (W = (E = o(this, u))[a.QrTextReceived]) == null || W.call(E, s);
        break;
      case a.CustomMethodInvoked:
        const ce = s.req_id,
          M = a.CustomMethodInvoked + ce;
        if (!o(this, u)[M]) return;
        const pe = s.error ? s.error : void 0,
          le = s.result ? s.result : void 0;
        (k = (g = o(this, u))[M]) == null || k.call(g, pe, le),
          delete o(this, u)[M];
        return;
      case a.ScanQrPopupClosed:
        f(this, B, !1),
          ($ = (q = o(this, u))[a.ScanQrPopupClosed]) == null || $.call(q);
        break;
      default:
        (U = (N = o(this, u))[e]) == null || U.call(N);
        break;
    }
    delete o(this, u)[e];
  }),
  (m = function () {
    return {
      LOG_PREFIX: "[Bale Sdk]:",
      error(e) {
        console.error(`${this.LOG_PREFIX} ${e}`);
      },
      info(e) {
        console.log(`${this.LOG_PREFIX} ${e}`);
      },
    };
  }),
  (K = function () {
    this.sendEvent(c.Ready);
  }),
  (Y = function () {
    this.sendEvent(c.Expand);
  }),
  (Z = function () {
    this.sendEvent(c.Close);
  }),
  (y = function () {
    this.sendEvent(c.AddToHomeScreen);
  }),
  (T = function (e) {
    this.sendEvent(c.CheckHomeScreen), (o(this, u)[a.HomeScreenChecked] = e);
  }),
  (V = function () {
    let e = !1;
    const p = {
      onClick: (d) => {
        this.onEvent(a.SettingsButtonPressed, d);
      },
      offClick: (d) => {
        this.offEvent(a.SettingsButtonPressed, d);
      },
      show: () => {
        (e = !0), this.sendEvent(c.SetupSettingsButton, { is_visible: e });
      },
      hide: () => {
        (e = !1), this.sendEvent(c.SetupSettingsButton, { is_visible: e });
      },
    };
    return (
      Object.defineProperty(p, "isVisible", {
        get: function () {
          return e;
        },
        enumerable: !0,
      }),
      p
    );
  }),
  (ee = function () {
    let e = !1;
    const p = {
      onClick: (d) => {
        this.onEvent(a.BackButtonPressed, d);
      },
      offClick: (d) => {
        this.offEvent(a.BackButtonPressed, d);
      },
      show: () => {
        (e = !0), this.sendEvent(c.SetupBackButton, { is_visible: e });
      },
      hide: () => {
        (e = !1), this.sendEvent(c.SetupSettingsButton, { is_visible: e });
      },
    };
    return (
      Object.defineProperty(p, "isVisible", {
        get: function () {
          return e;
        },
        enumerable: !0,
      }),
      p
    );
  }),
  (F = function () {
    this.sendEvent(c.SetupClosingBehavior, o(this, S));
  }),
  (te = function () {
    f(this, S, !0), r(this, i, F).call(this);
  }),
  (se = function () {
    f(this, S, !1), r(this, i, F).call(this);
  }),
  (ie = function (e) {
    if (o(this, P)) {
      r(this, i, m).call(this).error("Contact is already requested");
      return;
    }
    this.sendEvent(c.RequestContact), (o(this, u)[a.ContactRequestResult] = e);
  }),
  (oe = function (e) {
    if (!Q("1.1", o(this, C))) {
      r(this, i, m)
        .call(this)
        .error("setHeaderColor is not supported in version " + o(this, C));
      return;
    }
    if (e === "bg_color" || e === "secondary_bg_color")
      this.headerColor = { color_key: e };
    else {
      const s = me(e);
      if (!s) {
        r(this, i, m).call(this).error("Header color format is invalid");
        return;
      }
      this.headerColor = { color: s };
    }
    this.sendEvent(c.SetHeaderColor, this.headerColor);
  }),
  (ne = function (e, s) {
    this.sendEvent(c.OpenLink, { try_instant_view: s.try_browser, url: e });
  }),
  (re = function (e) {
    if (!e || !e.length)
      throw (
        (console.error("Data is required", e), new Error("Data is invalid"))
      );
    if (Ce(e) > 4096)
      throw (
        (console.error("Data is too long", e), new Error("Data is invalid"))
      );
    this.sendEvent(c.SendData, { data: e });
  }),
  (ae = function (e, s) {
    var h;
    if (!Q("1.1", o(this, C))) {
      r(this, i, m)
        .call(this)
        .error("showScanQrPopup is not supported in version " + o(this, C));
      return;
    }
    if (o(this, B))
      throw (
        (console.error("Scan qrcode is already opened"),
        new Error("Scan qrcode is already opened"))
      );
    const n = (h = e.text) == null ? void 0 : h.trim();
    if (n && n.length > 64)
      throw (
        (console.error("Scan QR popup text is too long"),
        new Error("Scan QR popup text is too long"))
      );
    f(this, B, !0),
      this.sendEvent(c.OpenScanQr, { text: n }),
      (o(this, u)[a.ContactRequestResult] = s);
  }),
  (he = function (e, s, n) {
    if (!Q("1.1", o(this, C))) {
      r(this, i, m)
        .call(this)
        .error("invokeCustomMethod is not supported in version " + o(this, C));
      return;
    }
    const h = fe(6),
      l = { method: e, params: s || {}, req_id: h };
    (o(this, u)[a.CustomMethodInvoked + h] = n),
      this.sendEvent(c.InvokeCustomMethod, l);
  });
(function () {
  window.Bale = new ke();
})();
