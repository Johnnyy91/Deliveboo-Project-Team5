(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuComponent',
  data: function data() {
    return {
      dishes: [],
      cart: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    axios.get('/api/menu/' + this.$route.params.slug).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
      _this.dishes = data.results;
    });
  },
  methods: {
    addDish: function addDish(dish) {
      //some ritorna un booleano se nel primo par (array)
      var dishes_exist = this.cart.some(function (cart_dish) {
        return cart_dish.id == dish.id;
      });
      console.log(dishes_exist);
      if (!dishes_exist) {
        this.cart.push(dish);
        dish.count = 1;
        console.log('dish.count', dish.count);
      } else {
        var dish_index = this.cart.findIndex(function (cart_dish) {
          return cart_dish.id == dish.id;
        });
        var dish_selected = this.cart[dish_index];
        dish_selected.count++;
        this.cart.splice(dish_index, 1, dish_selected);

        // console.log('dish.count', dish.count);
        // console.log('dish.find', dish_find);
      }
    },
    removeDish: function removeDish(dish) {
      var dishes_exist = this.cart.some(function (cart_dish) {
        return cart_dish.id == dish.id;
      });
      if (dishes_exist) {
        var dish_index = this.cart.findIndex(function (cart_dish) {
          return cart_dish.id == dish.id;
        });
        dish.count = 0;
        this.cart.splice(dish_index, 1);
      }
    },
    formater: function formater(number) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(number);
    },
    totalPrice: function totalPrice() {
      var sum = 0;
      this.cart.forEach(function (dish) {
        sum += dish.price * dish.count;
      });
      return this.formater(sum);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text py-5 d-flex justify-content-between"
  }, [_c("div", [_c("router-link", {
    staticClass: "btn btn-danger mx-3",
    attrs: {
      to: "/restaurant"
    }
  }, [_vm._v("Ritorna alla Homepage")]), _vm._v(" "), _c("h1", {
    staticClass: "text-center"
  }, [_vm._v("MENU")]), _vm._v(" "), _vm._l(_vm.dishes, function (dish) {
    return _c("div", {
      key: dish.id,
      staticClass: "text-uppercase py-4"
    }, [_c("div", {
      staticClass: "dishes"
    }, [_c("div", {
      staticClass: "card pb-5 d-flex flex-row text-center justify-content-between"
    }, [_c("div", {
      staticClass: "text-area text-left"
    }, [_c("h2", [_vm._v(_vm._s(dish.name))]), _vm._v(" "), _c("img", {
      attrs: {
        src: "/storage/" + dish.img,
        alt: ""
      }
    }), _vm._v(" "), _c("h5", [_vm._v("Ingredienti:" + _vm._s(dish.ingredients))]), _vm._v(" "), _c("h4", {
      staticClass: "py-3"
    }, [_vm._v("Prezzo:" + _vm._s(dish.price))])]), _vm._v(" "), _c("div", {
      staticClass: "button-area d-flex my-5 py-5"
    }, [_c("label", {
      attrs: {
        "for": "food"
      }
    }, [_vm._v("Pezzi:")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "number",
        id: "food",
        name: "food",
        min: "1",
        max: "100"
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-info mx-5",
      on: {
        click: function click($event) {
          return _vm.addDish(dish);
        }
      }
    }, [_vm._v("\n                            Aggiungi\n                        ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger mx-5",
      on: {
        click: function click($event) {
          return _vm.removeDish(dish);
        }
      }
    }, [_vm._v("\n                            Rimuovi\n                        ")])])])])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "text-center pt-5"
  }, [_c("h1", {
    staticClass: "pb-2"
  }, [_vm._v("IL TUO CARRELLO")]), _vm._v(" "), _c("div", {
    staticClass: "card-container d-flex justify-content-center align-items-center"
  }, [_vm.cart.length == 0 ? _c("div", [_c("h1", [_vm._v("VUOTO")])]) : _c("div", [_vm._l(_vm.cart, function (dish) {
    return _c("div", {
      key: dish.id
    }, [_c("span", {
      staticClass: "dish"
    }, [_vm._v(_vm._s(dish.name))]), _vm._v(" "), _c("span", {
      staticClass: "count"
    }, [_vm._v("q." + _vm._s(dish.count))]), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "price"
    }, [_vm._v("price" + _vm._s(_vm.formater(dish.count * dish.price)))])]);
  }), _vm._v(" "), _c("div", [_vm._v("Totale:" + _vm._s(_vm.totalPrice()))])], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text[data-v-98f701fa] {\n  height: 100vh;\n}\nimg[data-v-98f701fa] {\n  height: 200px;\n  width: 300px;\n}\n.card[data-v-98f701fa] {\n  width: 500;\n  background-color: #f6f6f6;\n  margin: 20px 20px;\n}\nbutton[data-v-98f701fa] {\n  height: 50px;\n  width: 100px;\n}\ninput[data-v-98f701fa] {\n  height: 50px;\n  width: 100px;\n}\n.card-container[data-v-98f701fa] {\n  height: 400px;\n  background-color: #f6f6f6;\n  border: 3px solid rgb(29, 102, 0);\n  margin: 20px 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/MenuComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& */ "./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&");
/* harmony import */ var _MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& */ "./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "98f701fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);