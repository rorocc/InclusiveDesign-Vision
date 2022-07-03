"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer$1 = require("@vue/server-renderer");
var vitePluginSsr = require("vite-plugin-ssr");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var Masthead_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.subject {\n        font-size:2em;\n        text-transform: uppercase;\n        font-weight: 100;\n        line-height: 1.2em;\n        letter-spacing: 0.3em;\n        margin-bottom:0.3em;\n}\n.title {\n        line-height: 1em;\n        font-size:5.5em;\n        font-weight: 900;\n}\n")();
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mx-10" }, _attrs))}><h2 class="subject">Inclusive Design</h2><h1 class="title">Sehst\xF6rungen</h1></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx2) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Masthead.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx2) : void 0;
};
var Masthead = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    const initThemeString = this.getThemeString();
    this.setString(initThemeString);
    this.setTheme(initUserTheme);
  },
  data() {
    return {
      userTheme: "light-theme",
      userThemeString: "Light"
    };
  },
  methods: {
    toggleTheme() {
      console.log(this.getTheme());
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
        this.setString("Dark");
      } else if (activeTheme === "dark-theme") {
        this.setTheme("high-contrast");
        this.setString("Hoher Kontrast");
      } else {
        this.setTheme("light-theme");
        this.setString("Light");
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
    getThemeString() {
      return localStorage.getItem("user-theme-string");
    },
    setString(string) {
      localStorage.setItem("user-theme-string", string);
      this.userThemeString = string;
    },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><button class="flex text-left items-center">`);
  if (this.userTheme === "light-theme") {
    _push(`<span class="material-icons-outlined toggleIcon mr-2">light_mode</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.userTheme === "dark-theme") {
    _push(`<span class="material-icons-outlined toggleIcon mr-2">dark_mode</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.userTheme === "high-contrast") {
    _push(`<span class="material-icons-outlined toggleIcon mr-2">contrast</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="toggleButtonCircle"><p>Farbeinstellung</p>`);
  if (this.userTheme === "light-theme") {
    _push(`<span>Hell</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.userTheme === "dark-theme") {
    _push(`<span>Dunkel</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.userTheme === "high-contrast") {
    _push(`<span>Hoher Kontrast</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></button></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx2) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColorToggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx2) : void 0;
};
var ColorToggle = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  mounted() {
    const initUserSize = this.getSize() || "normal-fontSize";
    this.setSize(initUserSize);
    const appTag = document.getElementById("app");
    appTag.classList.add(initUserSize);
  },
  data() {
    return {
      fontSize: "normal-fontSize"
    };
  },
  methods: {
    toggleTheme() {
      const activeSize = localStorage.getItem("user-fontSize");
      if (activeSize === "normal-fontSize") {
        this.setSize("medium-fontSize");
      } else if (activeSize === "medium-fontSize") {
        this.setSize("large-fontSize");
      } else {
        this.setSize("normal-fontSize");
      }
    },
    getSize() {
      return localStorage.getItem("user-fontSize");
    },
    setSize(size) {
      localStorage.setItem("user-fontSize", size);
      this.fontSize = size;
      const appTag = document.getElementById("app");
      appTag.classList.remove(...appTag.classList);
      appTag.classList.add(size);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><button class="flex text-left items-center"><span class="material-icons-outlined toggleIcon mr-2">format_size</span><div class="toggleButtonCircle"><p>Schriftgr\xF6\xDFe</p>`);
  if (this.fontSize === "normal-fontSize") {
    _push(`<span>Normal</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.fontSize === "medium-fontSize") {
    _push(`<span>Mittel</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.fontSize === "large-fontSize") {
    _push(`<span>Gro\xDF</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></button></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx2) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FontsizeToggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx2) : void 0;
};
var FontsizeToggle = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
var SwitchButton_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".switch-button-control {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.switch-button-control .switch-button {\n  height: 1.6em;\n  width: calc(1.6em * 2);\n  border: 2px solid var(--text-header-color);\n  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33);\n  border-radius: 1.6em;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.switch-button-control .switch-button .button {\n  height: calc(\n      1.6em - (2 * 2px)\n    );\n  width: calc(\n      1.6em - (2 * 2px)\n    );\n  border: 2px solid var(--text-header-color);\n  border-radius: calc(\n      1.6em - (2 * 2px)\n    );\n  background: var(--text-header-color);\n  transition: all 0.3s ease-in-out;\n}\n.switch-button-control .switch-button.enabled {\n  background-color: var(--text-header-color);\n  box-shadow: none;\n}\n.switch-button-control .switch-button.enabled .button {\n  background: var(--background-color-secondary);\n  transform: translateX(calc(calc( 1.6em - (2 * 2px) ) + (2 *2px)));\n}\n.switch-button-control .switch-button-label {\n  margin-left: 10px;\n}")();
const _sfc_main$2 = {
  template: "#switch-button",
  data() {
    return {
      isEnabled: false
    };
  },
  methods: {
    toggle() {
      this.isEnabled = !this.isEnabled;
      this.$emit("toggle", this.isEnabled);
    }
  },
  emits: ["toggle"],
  props: {
    color: {
      type: String,
      required: false,
      default: "#FFFFFF"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "switch-button-control mb-3" }, _attrs))}><div class="${serverRenderer.ssrRenderClass([{ enabled: $data.isEnabled }, "switch-button"])}" style="${serverRenderer.ssrRenderStyle({ "--color": $props.color })}"><div class="button"></div></div><div class="switch-button-label font-semibold">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx2) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SwitchButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx2) : void 0;
};
var SwitchButton = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
var Layout_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.fov-canvas {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n}\n.layout {\n    transition: filter 0.5s;\n}\n.layout.blurry {\n    filter: blur(1.25px);\n}\n")();
let mouseEvent;
const _sfc_main$1 = {
  data() {
    return {};
  },
  props: {
    blurry: Boolean,
    showReducedFov: Boolean
  },
  methods: {
    mousemove(event) {
      mouseEvent = event;
    }
  },
  mounted() {
    initCanvas(this.$refs.fovCanvas, this.$refs.layout);
  },
  watch: {
    showReducedFov(newB, oldB) {
      console.log(this.showReducedFov);
      if (newB) {
        startRendering();
      } else {
        stopRendering();
      }
    }
  }
};
let fovCanvas;
let ctx;
function initCanvas(fovCanvasRef, layoutRef) {
  console.log(fovCanvasRef);
  fovCanvas = fovCanvasRef;
  ctx = fovCanvas.getContext("2d");
}
let rendering = false;
function drawCircle(obj) {
  obj.ctx.beginPath();
  obj.ctx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI, false);
  if (obj.fill) {
    obj.ctx.fillStyle = obj.fill;
    obj.ctx.fill();
  }
  if (obj.stroke) {
    obj.ctx.lineWidth = obj.strokeWidth;
    obj.ctx.strokeStyle = obj.stroke;
    obj.ctx.stroke();
  }
}
function renderCanvas() {
  fovCanvas.height = fovCanvas.clientHeight;
  fovCanvas.width = fovCanvas.clientWidth;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, fovCanvas.width, fovCanvas.height);
  ctx.globalCompositeOperation = "destination-out";
  ctx.filter = "blur(20px)";
  if (mouseEvent) {
    drawCircle({
      ctx,
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,
      radius: fovCanvas.width / 4,
      fill: "black"
    });
  }
}
function startRendering() {
  rendering = true;
  renderLoop();
}
function stopRendering() {
  rendering = false;
}
function renderLoop() {
  renderCanvas();
  if (rendering) {
    requestAnimationFrame(renderLoop);
  } else {
    ctx.clearRect(0, 0, fovCanvas.width, fovCanvas.height);
  }
}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: ["layout z-50 text-base overflow-visible w-full", { blurry: $props.blurry }],
    ref: "layout"
  }, _attrs))}><canvas class="fov-canvas"></canvas>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx2) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx2) : void 0;
};
var Layout = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
var PageShell_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.layout {\n  transition: filter .5s;\n}\n.layout.blurry {\n  filter: blur(1.5px);\n}\n\n")();
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    const layoutBlurry = vue.ref(false);
    const showReducedFov = vue.ref(false);
    function setBlurry(isBlurry) {
      layoutBlurry.value = isBlurry;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(Layout, {
        blurry: layoutBlurry.value,
        showReducedFov: showReducedFov.value
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="h-full bg-rose-700-custom"${_scopeId}><div class="container mx-auto pt-20 pb-10"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(Masthead, null, null, _parent2, _scopeId));
            _push2(`</div></header><nav class="items-center justify-between flex-wrap bg-rose-700-custom p-6"${_scopeId}><div class="container mx-auto pl-10 flex items-center justify-between flex-wrap"${_scopeId}><div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"${_scopeId}><div class="flex"${_scopeId}><a href="#overview" class="block mt-4 lg:inline-block lg:mt-0 mr-4"${_scopeId}> Welche Sehbeeintr\xE4chtigungen gibt es? </a><a href="#usability" class="block mt-4 lg:inline-block lg:mt-0 mr-4"${_scopeId}> Usability &amp; Sehbeeintr\xE4chtigungen </a><a href="#simulation" class="block mt-4 lg:inline-block lg:mt-0"${_scopeId}> Simulation </a></div></div><div class="inline-flex space-x-5"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(FontsizeToggle, null, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(ColorToggle, null, null, _parent2, _scopeId));
            _push2(`</div></div></nav><div class="container mx-auto pl-20 py-10"${_scopeId}><div class="content max-w-prose"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              vue.createVNode("header", { class: "h-full bg-rose-700-custom" }, [
                vue.createVNode("div", { class: "container mx-auto pt-20 pb-10" }, [
                  vue.createVNode(Masthead)
                ])
              ]),
              vue.createVNode("nav", { class: "items-center justify-between flex-wrap bg-rose-700-custom p-6" }, [
                vue.createVNode("div", { class: "container mx-auto pl-10 flex items-center justify-between flex-wrap" }, [
                  vue.createVNode("div", { class: "w-full block flex-grow lg:flex lg:items-center lg:w-auto" }, [
                    vue.createVNode("div", { class: "flex" }, [
                      vue.createVNode("a", {
                        href: "#overview",
                        class: "block mt-4 lg:inline-block lg:mt-0 mr-4"
                      }, " Welche Sehbeeintr\xE4chtigungen gibt es? "),
                      vue.createVNode("a", {
                        href: "#usability",
                        class: "block mt-4 lg:inline-block lg:mt-0 mr-4"
                      }, " Usability & Sehbeeintr\xE4chtigungen "),
                      vue.createVNode("a", {
                        href: "#simulation",
                        class: "block mt-4 lg:inline-block lg:mt-0"
                      }, " Simulation ")
                    ])
                  ]),
                  vue.createVNode("div", { class: "inline-flex space-x-5" }, [
                    vue.createVNode(FontsizeToggle),
                    vue.createVNode(ColorToggle)
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "container mx-auto pl-20 py-10" }, [
                vue.createVNode("div", { class: "content max-w-prose" }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<footer class="w-full fixed bottom-0 pointer-events-none"><div class="container mx-auto"><div class="pointer-events-auto px-6 py-4 lg:w-96 md:w-96 sm:w-full h-auto bg-rose-700-custom simulator-content float-right shadow-xl"><h3 class="font-black text-xl mb-3">Simulator</h3><p class="mb-3 tracking-tight">Probiere Simulationen verschiedener Sehbeeintr\xE4chtigungen auf dieser Website aus</p><div>`);
      _push(serverRenderer.ssrRenderComponent(SwitchButton, {
        onToggle: ($event) => setBlurry($event)
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Verminderte Sehsch\xE4rfe`);
          } else {
            return [
              vue.createTextVNode("Verminderte Sehsch\xE4rfe")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(SwitchButton, {
        onToggle: ($event) => showReducedFov.value = !showReducedFov.value
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Verringertes Sichtfeld`);
          } else {
            return [
              vue.createTextVNode("Verringertes Sichtfeld")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx2) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx2) : void 0;
};
const key = Symbol();
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
var main = /* @__PURE__ */ (() => "/* dm-sans-400normal - latin */\n@font-face {\n  font-family: 'DM Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('DM Sans Regular '),\n    local('DM Sans-Regular'),\n    url('/assets/dm-sans-latin-400.951a3b8e.woff2') format('woff2'), \n    url('/assets/dm-sans-latin-400.1f9e55b7.woff') format('woff'); /* Modern Browsers */\n}\n/* dm-sans-400italic - latin */\n@font-face {\n  font-family: 'DM Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('DM Sans Regular italic'),\n    local('DM Sans-Regularitalic'),\n    url('/assets/dm-sans-latin-400italic.1dfb75f2.woff2') format('woff2'), \n    url('/assets/dm-sans-latin-400italic.2e053fe2.woff') format('woff'); /* Modern Browsers */\n}\n/* dm-sans-500normal - latin */\n@font-face {\n  font-family: 'DM Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 500;\n  src:\n    local('DM Sans Medium '),\n    local('DM Sans-Medium'),\n    url('/assets/dm-sans-latin-500.8d3411c9.woff2') format('woff2'), \n    url('/assets/dm-sans-latin-500.6839f2a3.woff') format('woff'); /* Modern Browsers */\n}\n/* dm-sans-500italic - latin */\n@font-face {\n  font-family: 'DM Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 500;\n  src:\n    local('DM Sans Medium italic'),\n    local('DM Sans-Mediumitalic'),\n    url('/assets/dm-sans-latin-500italic.0752eaf7.woff2') format('woff2'), \n    url('/assets/dm-sans-latin-500italic.5b283dd8.woff') format('woff'); /* Modern Browsers */\n}\n/* dm-sans-700normal - latin */\n@font-face {\n  font-family: 'DM Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 700;\n  src:\n    local('DM Sans Bold '),\n    local('DM Sans-Bold'),\n    url('/assets/dm-sans-latin-700.a8e5a0c3.woff2') format('woff2'), \n    url('/assets/dm-sans-latin-700.7460e67e.woff') format('woff'); /* Modern Browsers */\n}\n/* dm-sans-700italic - latin */\n@font-face {\n  font-family: 'DM Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 700;\n  src:\n    local('DM Sans Bold italic'),\n    local('DM Sans-Bolditalic'),\n    url('/assets/dm-sans-latin-700italic.c11c10ae.woff2') format('woff2'), \n    url('/assets/dm-sans-latin-700italic.8d0dcbc2.woff') format('woff'); /* Modern Browsers */\n}\n/* ! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: DM Sans, ui-sans-serif, system-ui; /* 4 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.z-50 {\n  z-index: 50;\n}\n.float-right {\n  float: right;\n}\n.my-10 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.ml-10 {\n  margin-left: 2.5rem;\n}\n.mb-20 {\n  margin-bottom: 5rem;\n}\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mr-4 {\n  margin-right: 1rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.h-full {\n  height: 100%;\n}\n.h-auto {\n  height: auto;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-prose {\n  max-width: 65ch;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-visible {\n  overflow: visible;\n}\n.border {\n  border-width: 1px;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.pt-20 {\n  padding-top: 5rem;\n}\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\n.pl-10 {\n  padding-left: 2.5rem;\n}\n.pl-20 {\n  padding-left: 5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-base {\n  font-size: 1.1rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-black {\n  font-weight: 900;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.opacity-80 {\n  opacity: 0.8;\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\nhtml{\n    width: 100%;\n    height: 100%;\n}\n/* Define styles for the default root window element */\n:root {\n    --background-color-primary: #ebebeb;\n    --background-color-secondary: #be123c;\n    --accent-color: #cacaca;\n    --text-primary-color: #222;\n    --element-size: 4rem;\n    --text-header-color: #ddd;\n    --text-hover-color: white;\n  }\n/* Define styles for the root window with dark - mode preference */\n:root.dark-theme {\n    --background-color-primary: #1e1e1e;\n    --background-color-secondary: #be123c;\n    --accent-color: #3f3f3f;\n    --text-primary-color: #ddd;\n      --text-header-color: #ddd;\n      --text-hover-color: white;\n  }\n/* Define styles for the root window with high contrast - mode preference */\n:root.high-contrast {\n        --background-color-primary: #000000;\n        --background-color-secondary: #E2CAD8;\n        --text-primary-color: #E2CAD8;\n        --text-header-color: #000000;\n        --text-hover-color: #2b2b2b;\n    }\n.normal-fontSize p, .normal-fontSize span, .normal-fontSize nav, .normal-fontSize a, .normal-fontSize .switch-button-label, {\n        font-size: medium;\n    }\n.normal-fontSize .toggleIcon{\n        font-size: 2rem;\n    }\n.medium-fontSize p, .medium-fontSize span, .medium-fontSize nav, .medium-fontSize a, .medium-fontSize .switch-button-label{\n        font-size: larger;\n    }\n.medium-fontSize .toggleIcon{\n        font-size: 4rem;\n    }\n.medium-fontSize h3{\n        font-size: x-large;\n    }\n.large-fontSize p, .large-fontSize span, .large-fontSize nav, .large-fontSize a, .large-fontSize .switch-button-label{\n        font-size: xx-large;\n    }\n.large-fontSize .toggleIcon{\n        font-size: 6rem;\n    }\n.large-fontSize h3{\n        font-size: xx-large;\n    }\n.large-fontSize .content h2{\n        font-size: xxx-large;\n    }\nhtml{\n      background-color: var(--background-color-primary);\n  }\n.bg-rose-700-custom{\n      background-color: var(--background-color-secondary);\n  }\n.content {\n    color: var(--text-primary-color);\n  }\nnav, span, .title, .subject, .simulator-content, .img-placeholder{\n      color: var(--text-header-color);\n  }\nnav a:hover{\n      color: var(--text-hover-color);\n  }\n.content h1:after{\n      position: absolute;\n      content: \"\";\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 8px;\n      border-radius: 2px;\n      background: var(--background-color-secondary);\n  }\n.content h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 800;\n      padding: 0 0 0 20px;\n      color: var(--text-primary-color);\n      position: relative;\n}\n.content h2 {\n  padding-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n}\n.content h3 {\n  padding-top: 0.5rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n}\n.content-block {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n@media (min-width: 640px) {\n  .sm\\:w-full {\n    width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:w-96 {\n    width: 24rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n  .lg\\:inline-block {\n    display: inline-block;\n  }\n  .lg\\:flex {\n    display: flex;\n  }\n  .lg\\:w-auto {\n    width: auto;\n  }\n  .lg\\:w-96 {\n    width: 24rem;\n  }\n  .lg\\:items-center {\n    align-items: center;\n  }\n}")();
function createApp(pageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = vue.defineComponent({
    render() {
      return vue.h(_sfc_main, {}, {
        default() {
          return vue.h(Page, pageProps || {});
        }
      });
    }
  });
  const app = vue.createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  return app;
}
var logoUrl = "/assets/logo.ebc0be7b.svg";
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const app = createApp(pageContext);
  const appHtml = await serverRenderer$1.renderToString(app);
  const { documentProps } = pageContext;
  const title = documentProps && documentProps.title || "Inclusive Design: Sehst\xF6rungen";
  const desc = documentProps && documentProps.description || "Gestaltungsempfehlungen f\xFCr barrierefreies Design bez\xFCglich Sehbeeintr\xE4chtigungen";
  const documentHtml = vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body class="h-full">
        <div id="app">${vitePluginSsr.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {}
  };
}
exports.passToClient = passToClient;
exports.render = render;
