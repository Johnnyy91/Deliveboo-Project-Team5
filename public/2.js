(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OrderComponent',
  props: {
    cart: Array
  },
  data: function data() {
    return {
      //csrf token
      //  csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

      address: undefined,
      email: undefined
    };
  },
  methods: {
    clicked: function clicked() {
      console.log(this.email);
      console.log(this.address);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "pt-5 text-center"
  }, [_c("form", {
    attrs: {
      action: "",
      method: "post",
      enctype: "multipart/form-data"
    }
  }, [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email Client")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    attrs: {
      type: "email",
      id: "email",
      name: "email_client"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "address"
    }
  }, [_vm._v("Address Client")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.address,
      expression: "address"
    }],
    attrs: {
      type: "text",
      id: "address",
      name: "address_client"
    },
    domProps: {
      value: _vm.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.address = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "button",
      value: "Send"
    },
    on: {
      click: function click($event) {
        return _vm.clicked();
      }
    }
  }), _vm._v(" "), _c("h1", [_vm._v("Riepilogo ordine")]), _vm._v(" "), _vm._l(_vm.cart, function (link) {
    return _c("div", {
      key: link.id
    }, [_c("span", {
      staticClass: "link"
    }, [_vm._v(_vm._s(link.name))]), _vm._v(" "), _c("span", {
      staticClass: "count"
    }, [_vm._v("q." + _vm._s(link.count))]), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "price"
    }, [_vm._v("price" + _vm._s(link.count * link.price))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/OrderComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=template&id=082b38fa& */ "./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&");
/* harmony import */ var _OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OrderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderComponent.vue?vue&type=template&id=082b38fa& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);