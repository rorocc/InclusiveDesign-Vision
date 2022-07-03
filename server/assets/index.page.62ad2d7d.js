"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mb-20" }, _attrs))}>`);
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
var Source_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\np[data-v-a60afd38], span[data-v-a60afd38], a[data-v-a60afd38]:hover{\n    color: var(--text-primary-color)\n}\n")();
const _sfc_main$2 = {
  name: "Source"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "inline-flex space-x-2 ml-3 my-2 opacity-80" }, _attrs))} data-v-a60afd38><span class="material-icons-outlined" data-v-a60afd38>link</span><p data-v-a60afd38>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Source.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Source = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a60afd38"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mt-2" }, _attrs))}>`);
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
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(PageSection, { id: "overview" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Welche Sehbeeintr\xE4chtigungen gibt es?</h1>`);
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
            _push2(`<h2${_scopeId}>Ametropie</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bei einer Ametropie hat das Auge ein Problem, durch die Form des Auges und/oder der Hornhaut das Licht auf der Retina zu fokussieren. Dadurch wird das Gesehene unscharf. Eine Ametropie kann in den folgenden verschiedenen Formen auftreten. `);
                } else {
                  return [
                    vue.createTextVNode("Bei einer Ametropie hat das Auge ein Problem, durch die Form des Auges und/oder der Hornhaut das Licht auf der Retina zu fokussieren. Dadurch wird das Gesehene unscharf. Eine Ametropie kann in den folgenden verschiedenen Formen auftreten. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ml-4"${_scopeId}><div class="content-block"${_scopeId}><h3${_scopeId}>Kurzsichtigkeit (Myopie)</h3>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bei einer Kurzsichtigkeit wird das Licht vom Auge vor der Retina fokussiert. Dadurch werden Objekte die weiter entfernt sind unscharf, w\xE4hrend Objekte die n\xE4her dran sind scharf gesehen werden. `);
                } else {
                  return [
                    vue.createTextVNode("Bei einer Kurzsichtigkeit wird das Licht vom Auge vor der Retina fokussiert. Dadurch werden Objekte die weiter entfernt sind unscharf, w\xE4hrend Objekte die n\xE4her dran sind scharf gesehen werden. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="content-block"${_scopeId}><h3${_scopeId}>Weitsichtigkeit (Hypermetropie)</h3>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bei der Weitsichtigkeit ist es andersrum. Objekte die weiter entfernt sind werden scharf gesehen, w\xE4hrend Objekte die nahe sind unscharf gesehen werden. `);
                } else {
                  return [
                    vue.createTextVNode("Bei der Weitsichtigkeit ist es andersrum. Objekte die weiter entfernt sind werden scharf gesehen, w\xE4hrend Objekte die nahe sind unscharf gesehen werden. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="content-block"${_scopeId}><h3${_scopeId}>Hornhautverkr\xFCmmung (Astigmatismus)</h3>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bei einer Hornhautverkr\xFCmmung werden die Lichtstrahlen, die von einem betrachtetem Objekt ausgehen nicht auf einem Punkt auf der Netzhaut geb\xFCndelt, sondern in einer Brennlinie. Dadurch k\xF6nnen Objekte unscharf werden, unabh\xE4ngig von der Entfernung `);
                } else {
                  return [
                    vue.createTextVNode("Bei einer Hornhautverkr\xFCmmung werden die Lichtstrahlen, die von einem betrachtetem Objekt ausgehen nicht auf einem Punkt auf der Netzhaut geb\xFCndelt, sondern in einer Brennlinie. Dadurch k\xF6nnen Objekte unscharf werden, unabh\xE4ngig von der Entfernung ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="content-block"${_scopeId}><h3${_scopeId}>Alterssichtigkeit (Presbyopie)</h3>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Die Alterssichtigkeit bezeichnet den altersbedingten Verlust der F\xE4higkeit das Sehen auf nahe Objekte zu fokussieren. `);
                } else {
                  return [
                    vue.createTextVNode("Die Alterssichtigkeit bezeichnet den altersbedingten Verlust der F\xE4higkeit das Sehen auf nahe Objekte zu fokussieren. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="content-block"${_scopeId}><h3${_scopeId}>Anisometrie</h3>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Haben das linke und das rechte Auge unterschiedliche Ametropien, spricht man von einer Anisometrie. Das hei\xDFt, dass bspw. das linke Auge kurzsichtig ist, w\xE4hrend das rechte Auge weitsichtig ist. `);
                } else {
                  return [
                    vue.createTextVNode("Haben das linke und das rechte Auge unterschiedliche Ametropien, spricht man von einer Anisometrie. Das hei\xDFt, dass bspw. das linke Auge kurzsichtig ist, w\xE4hrend das rechte Auge weitsichtig ist. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><h2${_scopeId}>Grauer Star (Katarakt)</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bei einem Grauen Star ist die Augenlinse getr\xFCbt. Dadurch kommt es zu verschwommenem Sehen und einer h\xF6heren Empfindlichkeit f\xFCr Blendungen. Dies kommt durch einen reduzierten Bildkontrast und Betroffene nehmen ihr Sichtfeld wie durch einen Nebel wahr.`);
                } else {
                  return [
                    vue.createTextVNode("Bei einem Grauen Star ist die Augenlinse getr\xFCbt. Dadurch kommt es zu verschwommenem Sehen und einer h\xF6heren Empfindlichkeit f\xFCr Blendungen. Dies kommt durch einen reduzierten Bildkontrast und Betroffene nehmen ihr Sichtfeld wie durch einen Nebel wahr.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Glaukom (Gr\xFCner Star)</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Der Begriff Glaukom fasst verschiedene Augenerkrankungen zusammen, die eine nicht umkehrbare Sch\xE4digung des Sehnervs bezeichnen. Bei Menschen mit einem Glaukom treten im Sichtfeld \u201Cblinde Flecken\u201D auf. Dabei beginnt der Ausfall meist am Randbereich des wahrgenommenem Bildes und verteilt sich im Verlauf der Erkrankung auf das gesamte Sichtfeld.`);
                } else {
                  return [
                    vue.createTextVNode("Der Begriff Glaukom fasst verschiedene Augenerkrankungen zusammen, die eine nicht umkehrbare Sch\xE4digung des Sehnervs bezeichnen. Bei Menschen mit einem Glaukom treten im Sichtfeld \u201Cblinde Flecken\u201D auf. Dabei beginnt der Ausfall meist am Randbereich des wahrgenommenem Bildes und verteilt sich im Verlauf der Erkrankung auf das gesamte Sichtfeld.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("h1", null, "Welche Sehbeeintr\xE4chtigungen gibt es?"),
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
              vue.createVNode("h2", null, "Ametropie"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Bei einer Ametropie hat das Auge ein Problem, durch die Form des Auges und/oder der Hornhaut das Licht auf der Retina zu fokussieren. Dadurch wird das Gesehene unscharf. Eine Ametropie kann in den folgenden verschiedenen Formen auftreten. ")
                ]),
                _: 1
              }),
              vue.createVNode("div", { class: "ml-4" }, [
                vue.createVNode("div", { class: "content-block" }, [
                  vue.createVNode("h3", null, "Kurzsichtigkeit (Myopie)"),
                  vue.createVNode(Paragraph, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Bei einer Kurzsichtigkeit wird das Licht vom Auge vor der Retina fokussiert. Dadurch werden Objekte die weiter entfernt sind unscharf, w\xE4hrend Objekte die n\xE4her dran sind scharf gesehen werden. ")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode("div", { class: "content-block" }, [
                  vue.createVNode("h3", null, "Weitsichtigkeit (Hypermetropie)"),
                  vue.createVNode(Paragraph, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Bei der Weitsichtigkeit ist es andersrum. Objekte die weiter entfernt sind werden scharf gesehen, w\xE4hrend Objekte die nahe sind unscharf gesehen werden. ")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode("div", { class: "content-block" }, [
                  vue.createVNode("h3", null, "Hornhautverkr\xFCmmung (Astigmatismus)"),
                  vue.createVNode(Paragraph, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Bei einer Hornhautverkr\xFCmmung werden die Lichtstrahlen, die von einem betrachtetem Objekt ausgehen nicht auf einem Punkt auf der Netzhaut geb\xFCndelt, sondern in einer Brennlinie. Dadurch k\xF6nnen Objekte unscharf werden, unabh\xE4ngig von der Entfernung ")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode("div", { class: "content-block" }, [
                  vue.createVNode("h3", null, "Alterssichtigkeit (Presbyopie)"),
                  vue.createVNode(Paragraph, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Die Alterssichtigkeit bezeichnet den altersbedingten Verlust der F\xE4higkeit das Sehen auf nahe Objekte zu fokussieren. ")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode("div", { class: "content-block" }, [
                  vue.createVNode("h3", null, "Anisometrie"),
                  vue.createVNode(Paragraph, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Haben das linke und das rechte Auge unterschiedliche Ametropien, spricht man von einer Anisometrie. Das hei\xDFt, dass bspw. das linke Auge kurzsichtig ist, w\xE4hrend das rechte Auge weitsichtig ist. ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              vue.createVNode("h2", null, "Grauer Star (Katarakt)"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Bei einem Grauen Star ist die Augenlinse getr\xFCbt. Dadurch kommt es zu verschwommenem Sehen und einer h\xF6heren Empfindlichkeit f\xFCr Blendungen. Dies kommt durch einen reduzierten Bildkontrast und Betroffene nehmen ihr Sichtfeld wie durch einen Nebel wahr.")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Glaukom (Gr\xFCner Star)"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Der Begriff Glaukom fasst verschiedene Augenerkrankungen zusammen, die eine nicht umkehrbare Sch\xE4digung des Sehnervs bezeichnen. Bei Menschen mit einem Glaukom treten im Sichtfeld \u201Cblinde Flecken\u201D auf. Dabei beginnt der Ausfall meist am Randbereich des wahrgenommenem Bildes und verteilt sich im Verlauf der Erkrankung auf das gesamte Sichtfeld.")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(PageSection, { id: "usability" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Usability &amp; Sehbeeintr\xE4chtigungen</h1>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Die Bed\xFCrfnisse von Nutzenden mit Sehst\xF6rungen unterscheiden sich individuell, abh\xE4ngig von der Art der Einschr\xE4nkung und der Schwere der Einschr\xE4nkung. Um darauf eingehen zu k\xF6nnen, kann man diese Bed\xFCrfnisse in verschiedene Kategorien einteilen. Um Webseiten und Software so barrierefrei wie m\xF6glich zu gestalten sollte den Nutzenden erm\xF6glicht werden, eigene Einstellungen in eben diesen Kategorien treffen zu k\xF6nnen um ihr Nutzungserlebnis nach eigenen W\xFCnschen anpassen zu k\xF6nnen. `);
                } else {
                  return [
                    vue.createTextVNode("Die Bed\xFCrfnisse von Nutzenden mit Sehst\xF6rungen unterscheiden sich individuell, abh\xE4ngig von der Art der Einschr\xE4nkung und der Schwere der Einschr\xE4nkung. Um darauf eingehen zu k\xF6nnen, kann man diese Bed\xFCrfnisse in verschiedene Kategorien einteilen. Um Webseiten und Software so barrierefrei wie m\xF6glich zu gestalten sollte den Nutzenden erm\xF6glicht werden, eigene Einstellungen in eben diesen Kategorien treffen zu k\xF6nnen um ihr Nutzungserlebnis nach eigenen W\xFCnschen anpassen zu k\xF6nnen. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Helligkeit &amp; Farbe</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Helles Licht eines Bildschirmes oder von anderen Quellen erschwert es einigen Menschen mit schlechter Sicht Texte zu lesen und kann auch Schmerzen verursachen. Dies kann durch eine Einstellungsm\xF6glichkeit der Helligkeit vermieden werden. Auch Hintergrund- und Schriftfarbe zur Anpassung des Kontrastes spielen eine wichtige Rolle f\xFCr die Lesbarkeit. Hierbei k\xF6nnen die optimalen Bedingungen f\xFCr die Lesbarkeit stark zwischen individuellen Menschen unterscheiden, weswegen eine breite M\xF6glichkeit an Einstellungen hilft. Weiterhin k\xF6nnen durch Farbsinnst\xF6rungen Einschr\xE4nkungen beim Betrachten entstehen, weswegen es f\xFCr eine Barrierefreiheit wichtig ist, nicht auf Farben zur\xFCckzugreifen um verschiedene Elemente zu unterscheiden. `);
                } else {
                  return [
                    vue.createTextVNode("Helles Licht eines Bildschirmes oder von anderen Quellen erschwert es einigen Menschen mit schlechter Sicht Texte zu lesen und kann auch Schmerzen verursachen. Dies kann durch eine Einstellungsm\xF6glichkeit der Helligkeit vermieden werden. Auch Hintergrund- und Schriftfarbe zur Anpassung des Kontrastes spielen eine wichtige Rolle f\xFCr die Lesbarkeit. Hierbei k\xF6nnen die optimalen Bedingungen f\xFCr die Lesbarkeit stark zwischen individuellen Menschen unterscheiden, weswegen eine breite M\xF6glichkeit an Einstellungen hilft. Weiterhin k\xF6nnen durch Farbsinnst\xF6rungen Einschr\xE4nkungen beim Betrachten entstehen, weswegen es f\xFCr eine Barrierefreiheit wichtig ist, nicht auf Farben zur\xFCckzugreifen um verschiedene Elemente zu unterscheiden. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Wahrnehmung</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bei der Wahrnehmung geht um das Erkennen von einzelnen Zeichen und Symbolen. Dabei k\xF6nnen verschiedene Elemente verwendet werden, um Text und Anzeigen f\xFCr Nutzende lesbarer zu gestalten. Dies kann durch das freie Einstellen von Schriftgr\xF6\xDFe, dem Schriftfont, dem Schriftstil (z.B. fett oder unterstrichen) oder von Gro\xDF- und Kleinschreibung erm\xF6glicht werden. `);
                } else {
                  return [
                    vue.createTextVNode("Bei der Wahrnehmung geht um das Erkennen von einzelnen Zeichen und Symbolen. Dabei k\xF6nnen verschiedene Elemente verwendet werden, um Text und Anzeigen f\xFCr Nutzende lesbarer zu gestalten. Dies kann durch das freie Einstellen von Schriftgr\xF6\xDFe, dem Schriftfont, dem Schriftstil (z.B. fett oder unterstrichen) oder von Gro\xDF- und Kleinschreibung erm\xF6glicht werden. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Text- und Zeilenabstand zum Lesen</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mithilfe von variabel einstellbaren Abst\xE4nden zwischen Zeilen, Buchstaben und W\xF6rtern k\xF6nnen Texte lesbarer gestaltet werden. Auch eine freie Einstellung der B\xFCndigkeit kann dabei unterst\xFCtzen. Weiterhin ist f\xFCr einige Menschen schwierig Buchstaben zu unterscheiden wenn diese nah am Rand sind. Durch frei einstellbare Seitenr\xE4nder und/oder einstellbare Umrandungen um einzelne Textbl\xF6cke zu unterscheiden kann die Lesbarkeit weiterhin gesteigert werden. `);
                } else {
                  return [
                    vue.createTextVNode("Mithilfe von variabel einstellbaren Abst\xE4nden zwischen Zeilen, Buchstaben und W\xF6rtern k\xF6nnen Texte lesbarer gestaltet werden. Auch eine freie Einstellung der B\xFCndigkeit kann dabei unterst\xFCtzen. Weiterhin ist f\xFCr einige Menschen schwierig Buchstaben zu unterscheiden wenn diese nah am Rand sind. Durch frei einstellbare Seitenr\xE4nder und/oder einstellbare Umrandungen um einzelne Textbl\xF6cke zu unterscheiden kann die Lesbarkeit weiterhin gesteigert werden. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Steuern von individuellen Elementen</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Durch das Ver\xE4ndern von Schriftgr\xF6\xDFe kann es dazu kommen, dass gewisse Elemente wie bspw. \xDCberschriften zu gro\xDF werden um den eigentlichen Text gut lesen zu k\xF6nnen. Weiterhin pr\xE4ferieren einige Menschen es, den Haupttext gr\xF6\xDFer einzustellen als \xDCberschriften oder haben einen Stil gefunden, mit dem sie pers\xF6nlich die beste Lesbarkeit haben. Deswegen kann es helfen, Nutzenden zu erlauben einzelne Elemente wie eben \xDCberschriften, Text oder Listen individuell anzupassen. `);
                } else {
                  return [
                    vue.createTextVNode("Durch das Ver\xE4ndern von Schriftgr\xF6\xDFe kann es dazu kommen, dass gewisse Elemente wie bspw. \xDCberschriften zu gro\xDF werden um den eigentlichen Text gut lesen zu k\xF6nnen. Weiterhin pr\xE4ferieren einige Menschen es, den Haupttext gr\xF6\xDFer einzustellen als \xDCberschriften oder haben einen Stil gefunden, mit dem sie pers\xF6nlich die beste Lesbarkeit haben. Deswegen kann es helfen, Nutzenden zu erlauben einzelne Elemente wie eben \xDCberschriften, Text oder Listen individuell anzupassen. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Betrachtungsfeld und N\xE4he</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Durch das Vergr\xF6\xDFern von Text \xE4ndert sich auch der Bereich der im Sichtfeld ist. Wenn der Fokuspunkt dabei nicht der gleiche bleibt wie vor dem Ver\xE4ndern kann es f\xFCr einige Menschen schwierig sein, diesen Punkt wiederzufinden. Deswegen sollte der Fokuspunkt bei Anpassungen wie Zoomen oder Formatieren der gleiche bleiben. Menschen mit einem limitierten Sichtfeld haben wenige Elemente zur gleichen Zeit in ihrem Sichtfeld. Wenn zusammengeh\xF6rende Informationen oder Feedback nach Aktionen nicht in der N\xE4he zueinander sind, kann es schwierig werden diese wahrzunehmen. `);
                } else {
                  return [
                    vue.createTextVNode("Durch das Vergr\xF6\xDFern von Text \xE4ndert sich auch der Bereich der im Sichtfeld ist. Wenn der Fokuspunkt dabei nicht der gleiche bleibt wie vor dem Ver\xE4ndern kann es f\xFCr einige Menschen schwierig sein, diesen Punkt wiederzufinden. Deswegen sollte der Fokuspunkt bei Anpassungen wie Zoomen oder Formatieren der gleiche bleiben. Menschen mit einem limitierten Sichtfeld haben wenige Elemente zur gleichen Zeit in ihrem Sichtfeld. Wenn zusammengeh\xF6rende Informationen oder Feedback nach Aktionen nicht in der N\xE4he zueinander sind, kann es schwierig werden diese wahrzunehmen. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2${_scopeId}>Einstellungsm\xF6glichkeiten richtig einbinden</h2>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Durch das Ver\xE4ndern von bspw. Gr\xF6\xDFe oder Zeilenabstand kann es passieren, dass Elemente aus dem Sichtfeld verschwinden oder auch \xDCberlappen und unlesbar werden. Deswegen ist es wichtig, eine Gr\xF6\xDFenanpassung so zu gestalten, dass alle Elemente in der richtigen Form bleiben und keine Interface-Elemente versteckt werden, die der Nutzende sehen sollte. Da es weiterhin f\xFCr einige Nutzende schwierig ist, Text auf einem Bildschirm zu lesen sollte es erm\xF6glicht werden, den Text jederzeit druckbar zu machen und auch die individuellen Einstellungen die getroffen worden sind zu ber\xFCcksichtigen. Die meisten Betriebssysteme oder Browser erm\xF6glichen Nutzenden es, Standarteinstellungen nach ihrer pers\xF6nlichen Pr\xE4ferenz zu treffen. Diese sollten von einer barrierefreien Website automatisch \xFCbernommen werden k\xF6nnen. `);
                } else {
                  return [
                    vue.createTextVNode("Durch das Ver\xE4ndern von bspw. Gr\xF6\xDFe oder Zeilenabstand kann es passieren, dass Elemente aus dem Sichtfeld verschwinden oder auch \xDCberlappen und unlesbar werden. Deswegen ist es wichtig, eine Gr\xF6\xDFenanpassung so zu gestalten, dass alle Elemente in der richtigen Form bleiben und keine Interface-Elemente versteckt werden, die der Nutzende sehen sollte. Da es weiterhin f\xFCr einige Nutzende schwierig ist, Text auf einem Bildschirm zu lesen sollte es erm\xF6glicht werden, den Text jederzeit druckbar zu machen und auch die individuellen Einstellungen die getroffen worden sind zu ber\xFCcksichtigen. Die meisten Betriebssysteme oder Browser erm\xF6glichen Nutzenden es, Standarteinstellungen nach ihrer pers\xF6nlichen Pr\xE4ferenz zu treffen. Diese sollten von einer barrierefreien Website automatisch \xFCbernommen werden k\xF6nnen. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("h1", null, "Usability & Sehbeeintr\xE4chtigungen"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Die Bed\xFCrfnisse von Nutzenden mit Sehst\xF6rungen unterscheiden sich individuell, abh\xE4ngig von der Art der Einschr\xE4nkung und der Schwere der Einschr\xE4nkung. Um darauf eingehen zu k\xF6nnen, kann man diese Bed\xFCrfnisse in verschiedene Kategorien einteilen. Um Webseiten und Software so barrierefrei wie m\xF6glich zu gestalten sollte den Nutzenden erm\xF6glicht werden, eigene Einstellungen in eben diesen Kategorien treffen zu k\xF6nnen um ihr Nutzungserlebnis nach eigenen W\xFCnschen anpassen zu k\xF6nnen. ")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Helligkeit & Farbe"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Helles Licht eines Bildschirmes oder von anderen Quellen erschwert es einigen Menschen mit schlechter Sicht Texte zu lesen und kann auch Schmerzen verursachen. Dies kann durch eine Einstellungsm\xF6glichkeit der Helligkeit vermieden werden. Auch Hintergrund- und Schriftfarbe zur Anpassung des Kontrastes spielen eine wichtige Rolle f\xFCr die Lesbarkeit. Hierbei k\xF6nnen die optimalen Bedingungen f\xFCr die Lesbarkeit stark zwischen individuellen Menschen unterscheiden, weswegen eine breite M\xF6glichkeit an Einstellungen hilft. Weiterhin k\xF6nnen durch Farbsinnst\xF6rungen Einschr\xE4nkungen beim Betrachten entstehen, weswegen es f\xFCr eine Barrierefreiheit wichtig ist, nicht auf Farben zur\xFCckzugreifen um verschiedene Elemente zu unterscheiden. ")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Wahrnehmung"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Bei der Wahrnehmung geht um das Erkennen von einzelnen Zeichen und Symbolen. Dabei k\xF6nnen verschiedene Elemente verwendet werden, um Text und Anzeigen f\xFCr Nutzende lesbarer zu gestalten. Dies kann durch das freie Einstellen von Schriftgr\xF6\xDFe, dem Schriftfont, dem Schriftstil (z.B. fett oder unterstrichen) oder von Gro\xDF- und Kleinschreibung erm\xF6glicht werden. ")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Text- und Zeilenabstand zum Lesen"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Mithilfe von variabel einstellbaren Abst\xE4nden zwischen Zeilen, Buchstaben und W\xF6rtern k\xF6nnen Texte lesbarer gestaltet werden. Auch eine freie Einstellung der B\xFCndigkeit kann dabei unterst\xFCtzen. Weiterhin ist f\xFCr einige Menschen schwierig Buchstaben zu unterscheiden wenn diese nah am Rand sind. Durch frei einstellbare Seitenr\xE4nder und/oder einstellbare Umrandungen um einzelne Textbl\xF6cke zu unterscheiden kann die Lesbarkeit weiterhin gesteigert werden. ")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Steuern von individuellen Elementen"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Durch das Ver\xE4ndern von Schriftgr\xF6\xDFe kann es dazu kommen, dass gewisse Elemente wie bspw. \xDCberschriften zu gro\xDF werden um den eigentlichen Text gut lesen zu k\xF6nnen. Weiterhin pr\xE4ferieren einige Menschen es, den Haupttext gr\xF6\xDFer einzustellen als \xDCberschriften oder haben einen Stil gefunden, mit dem sie pers\xF6nlich die beste Lesbarkeit haben. Deswegen kann es helfen, Nutzenden zu erlauben einzelne Elemente wie eben \xDCberschriften, Text oder Listen individuell anzupassen. ")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Betrachtungsfeld und N\xE4he"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Durch das Vergr\xF6\xDFern von Text \xE4ndert sich auch der Bereich der im Sichtfeld ist. Wenn der Fokuspunkt dabei nicht der gleiche bleibt wie vor dem Ver\xE4ndern kann es f\xFCr einige Menschen schwierig sein, diesen Punkt wiederzufinden. Deswegen sollte der Fokuspunkt bei Anpassungen wie Zoomen oder Formatieren der gleiche bleiben. Menschen mit einem limitierten Sichtfeld haben wenige Elemente zur gleichen Zeit in ihrem Sichtfeld. Wenn zusammengeh\xF6rende Informationen oder Feedback nach Aktionen nicht in der N\xE4he zueinander sind, kann es schwierig werden diese wahrzunehmen. ")
                ]),
                _: 1
              }),
              vue.createVNode("h2", null, "Einstellungsm\xF6glichkeiten richtig einbinden"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Durch das Ver\xE4ndern von bspw. Gr\xF6\xDFe oder Zeilenabstand kann es passieren, dass Elemente aus dem Sichtfeld verschwinden oder auch \xDCberlappen und unlesbar werden. Deswegen ist es wichtig, eine Gr\xF6\xDFenanpassung so zu gestalten, dass alle Elemente in der richtigen Form bleiben und keine Interface-Elemente versteckt werden, die der Nutzende sehen sollte. Da es weiterhin f\xFCr einige Nutzende schwierig ist, Text auf einem Bildschirm zu lesen sollte es erm\xF6glicht werden, den Text jederzeit druckbar zu machen und auch die individuellen Einstellungen die getroffen worden sind zu ber\xFCcksichtigen. Die meisten Betriebssysteme oder Browser erm\xF6glichen Nutzenden es, Standarteinstellungen nach ihrer pers\xF6nlichen Pr\xE4ferenz zu treffen. Diese sollten von einer barrierefreien Website automatisch \xFCbernommen werden k\xF6nnen. ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(PageSection, { id: "simulation" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Simulation</h1>`);
          } else {
            return [
              vue.createVNode("h1", null, "Simulation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(PageSection, { id: "sources" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Mehr zum Thema?</h1>`);
            _push2(serverRenderer.ssrRenderComponent(Paragraph, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hier finden Sie unsere Quellen und weitere Informationen zu Sehbeeintr\xE4chtigungen.`);
                } else {
                  return [
                    vue.createTextVNode("Hier finden Sie unsere Quellen und weitere Informationen zu Sehbeeintr\xE4chtigungen.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Source, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://www.w3.org/TR/low-vision-needs/"${_scopeId2}>W3.org - Accessibility Requirements for People with Low Vision</a>`);
                } else {
                  return [
                    vue.createVNode("a", { href: "https://www.w3.org/TR/low-vision-needs/" }, "W3.org - Accessibility Requirements for People with Low Vision")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Source, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://uxdesign.cc/web-accessibility-for-visual-impairment-a8ee4bb3aef8"${_scopeId2}>uxdesign.cc - Web accessibility for visual impairments</a>`);
                } else {
                  return [
                    vue.createVNode("a", { href: "https://uxdesign.cc/web-accessibility-for-visual-impairment-a8ee4bb3aef8" }, "uxdesign.cc - Web accessibility for visual impairments")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("h1", null, "Mehr zum Thema?"),
              vue.createVNode(Paragraph, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Hier finden Sie unsere Quellen und weitere Informationen zu Sehbeeintr\xE4chtigungen.")
                ]),
                _: 1
              }),
              vue.createVNode(Source, null, {
                default: vue.withCtx(() => [
                  vue.createVNode("a", { href: "https://www.w3.org/TR/low-vision-needs/" }, "W3.org - Accessibility Requirements for People with Low Vision")
                ]),
                _: 1
              }),
              vue.createVNode(Source, null, {
                default: vue.withCtx(() => [
                  vue.createVNode("a", { href: "https://uxdesign.cc/web-accessibility-for-visual-impairment-a8ee4bb3aef8" }, "uxdesign.cc - Web accessibility for visual impairments")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
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
