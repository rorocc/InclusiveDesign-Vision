"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "font-extrabold text-3xl mb-10 mt-3" }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var PageTitle = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var PageSection = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
var Image_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\ndiv[data-v-79ce7a6e] {\n        width: 600px;\n        height:400px;\n}\n")();
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "justify-center flex items-center ml-10 my-10 bg-rose-700-custom img-placeholder" }, _attrs))} data-v-79ce7a6e><p data-v-79ce7a6e>Image Placeholder</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Image.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Image = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-79ce7a6e"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mt-5" }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Paragraph.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Paragraph = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(PageSection, _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(PageTitle, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Welche Sehst\xF6rungen gibt es?`);
                } else {
                  return [
                    vue.createTextVNode("Welche Sehst\xF6rungen gibt es?")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!`);
                } else {
                  return [
                    vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!`);
                } else {
                  return [
                    vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Image, null, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!`);
                } else {
                  return [
                    vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(PageTitle, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Welche Sehst\xF6rungen gibt es?")
                ]),
                _: 1
              }),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!")
                ]),
                _: 1
              }),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!")
                ]),
                _: 1
              }),
              vue.createVNode(Image),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
