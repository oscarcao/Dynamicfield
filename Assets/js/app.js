(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    ready: function ready() {},
    data: function data() {
        return {};
    },
    computed: {
        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        deletedFields: function deletedFields() {
            return this.$store.state.deletedFields;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group form-group--hidden\">\n    <input name=\"cdf-deleted[{{ field.field_translation.unique_id }}][field_id]\" type=\"hidden\" value=\"{{ field.field_translation.unique_id }}\" v-for=\"field in deletedFields\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-89036ac6", module.exports)
  } else {
    hotAPI.update("_v-89036ac6", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],2:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Actions = require('./../../Store/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    props: ['entities', 'indexId'],

    ready: function ready() {
        //console.log('this.entities',this.entities);

        //this.$store.dispatch('updateFieldsData',this.fields);
    },

    data: function data() {
        return {
            name: ''
        };
    },

    computed: {

        /*
         * get the group name
         */
        groupName: function groupName() {
            //                if(this.entities.name != undefined){
            //                    return this.entities.name;
            //                }
            return 'Custom Fields';
        }
    },

    methods: {
        showHideClick: function showHideClick(block) {
            if (undefined == block) {
                return block.show = true;
            }

            return block.show = !block.show;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<section class=\"dcfEntities\">\n    <div class=\"group-content dcf-fieldsBlock\" v-for=\"entityFields in entities\">\n        <header class=\"dcf-fieldsBlock__header\" @click.prevent=\"showHideClick(entityFields)\">\n            <h2 class=\"dcf-fieldsBlock__name\">{{ entityFields.name }}</h2>\n\n            <span class=\"dcf-fieldsBlock__arrow\" :class=\"{ 'dcf-fieldsBlock__arrow--up' : entityFields.show == true, 'dcf-fieldsBlock__arrow--down' : entityFields.show == false }\"></span>\n        </header>\n        <!--@click.prevent=\"showHideClick(entityFields)\"-->\n        <div class=\"dcf-fieldsBlock__fields\" v-show=\"entityFields.show == true\">\n            <entity-field :entity-field=\"entityField\" :index-id=\"index\" v-for=\"(index,entityField) in entityFields.fields\"></entity-field>\n        </div>\n    </div>\n    <deleted-entities></deleted-entities>\n</section>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-df5ab3a4", module.exports)
  } else {
    hotAPI.update("_v-df5ab3a4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./../../Store/Actions":36,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],3:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: ['entityField', 'indexId', 'parentLayout', 'parent'],

    ready: function ready() {
        //console.log('this.entityField',this.entityField);
    },

    computed: {
        parentLayoutId: function parentLayoutId() {
            if (this.parentLayout == undefined) {
                return 0;
            }

            return this.parentLayout;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"col-md-12 entityField clear\">\n    <text-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'text'\"></text-field>\n    <link-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'link'\"></link-field>\n    <link-object-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'linkObject'\"></link-object-field>\n    <user-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'user'\"></user-field>\n    <url-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'url'\"></url-field>\n    <password-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'password'\"></password-field>\n    <email-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'email'\"></email-field>\n    <number-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'number'\"></number-field>\n    <date-picker-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'datepicker'\"></date-picker-field>\n    <textarea-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'textarea'\"></textarea-field>\n    <wysiwyg-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'wysiwyg'\"></wysiwyg-field>\n    <image-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'image'\"></image-field>\n    <radio-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'radio'\"></radio-field>\n    <checkbox-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'checkbox'\"></checkbox-field>\n    <select-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'select'\"></select-field>\n    <color-picker-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'colorPicker'\"></color-picker-field>\n    <area-of-focus-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" v-if=\"entityField.type == 'areaOfFocus'\"></area-of-focus-field>\n    <repeater-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" index-id=\"indexId\" v-if=\"entityField.type == 'repeater'\"></repeater-field>\n    <flexible-content-field :field-info=\"entityField\" :parent=\"parent\" :parent-layout=\"parentLayoutId\" index-id=\"indexId\" v-if=\"entityField.type == 'flexiblecontent'\"></flexible-content-field>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-e24c3d0c", module.exports)
  } else {
    hotAPI.update("_v-e24c3d0c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],4:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n.area-of-focus {\n  float: left;\n  width: 100%;\n  max-width: 700px;\n}\n\n.c-areaOfFocus__diagram {\n  overflow: hidden;\n}\n\n.c-areaOfFocus__figureGradient {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height : 0;\n  width : 0;\n}\n\n.c-areaOfFocus__figure {\n  width: 50%;\n  float: left;\n  padding-left: 6px;\n  padding-left: 0.375rem;\n  padding-right: 6px;\n  padding-right: 0.375rem;\n}\n\n@media screen and (min-width: 77rem) {\n  .c-areaOfFocus__figure {\n    padding-left: 24px;\n    padding-left: 1.5rem;\n    padding-right: 24px;\n    padding-right: 1.5rem;\n  }\n  .c-areaOfFocus__figure:after {\n    content: '';\n    display: block;\n    width: 60%;\n    height: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    background-image: radial-gradient(ellipse closest-side at center, rgba(50, 50, 50, 0.2) 40%, transparent);\n    margin-top: 12px;\n    margin-top: 0.75rem;\n  }\n}\n\n.c-areaOfFocus__bodyPart {\n  fill: #929ba9;\n  cursor : pointer;\n}\n\n.c-areaOfFocus__gradientStroke {\n  fill: none !important;\n  stroke: #fb4904 !important;\n  stroke-width: 2px !important;\n}\n\n.c-areaOfFocus__gradientFill {\n  fill: url(#figureGradient) !important;\n  stroke: none !important;\n}\n\n.c-areaOfFocus__bodyPart:hover,\n.c-areaOfFocus__gradientFill:hover,\n.c-areaOfFocus__gradientStroke:hover {\n  /*fill: #ee3224;*/\n  fill: #000000 !important;\n  stroke: #fb4904 !important;\n}\n\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {

        var that = this;
        if (this.fieldInfo.field_translation != undefined) {
            if (this.fieldInfo.field_translation.value != '') {
                this.fieldData.value = this.fieldInfo.field_translation.value;
                this.$els.svgcode.innerHTML = this.fieldInfo.field_translation.value;
            } else {
                this.updateFieldValue();
            }
        }

        $('.area-of-focus--' + this.fieldUniqueId).find('.c-areaOfFocus__bodyPart').on('click', function () {
            if (this.classList.contains('c-areaOfFocus__gradientStroke')) {
                this.classList.remove('c-areaOfFocus__gradientStroke');
                this.classList.add('c-areaOfFocus__gradientFill');
                //this.fill = "url(#figureGradient)";
                that.updateFieldValue();
                return;
            }

            if (this.classList.contains('c-areaOfFocus__gradientFill')) {
                this.classList.remove('c-areaOfFocus__gradientFill');
                //this.fill = "";
                that.updateFieldValue();
                return;
            }

            if (!this.classList.contains('c-areaOfFocus__gradientFill') && !this.classList.contains('c-areaOfFocus__gradientStroke')) {
                this.classList.add('c-areaOfFocus__gradientStroke');
                //this.fill = "";
                that.updateFieldValue();
                return;
            }
        });
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'areaOfFocus'
            }
        };
    },
    computed: {
        svgValue: function svgValue() {
            return this.$els.svgcode.innerHTML;
        },

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {

        updateFieldValue: function updateFieldValue() {
            this.fieldData.value = this.$els.svgcode.innerHTML;
        }

    }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n\n\n    <section class=\"area-of-focus area-of-focus--{{ fieldUniqueId }}\">\n      <div class=\"c-areaOfFocus__diagram\" v-el:svgcode=\"\">\n  \t\t\t<svg version=\"1.1\" class=\"c-areaOfFocus__figureGradient\" viewBox=\"0 0 0 0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  \t\t\t\t<defs>\n  \t\t\t\t\t<linearGradient id=\"figureGradient\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\">\n  \t\t\t\t\t\t<stop offset=\"0%\" stop-color=\"rgb(238,106,13)\" stop-opacity=\"1\"></stop>\n  \t\t\t\t\t\t<stop offset=\"100%\" stop-color=\"rgb(245,6,27)\" stop-opacity=\"1\"></stop>\n  \t\t\t\t\t</linearGradient>\n  \t\t\t\t</defs>\n  \t\t\t</svg>\n  \t\t\t<div class=\"c-areaOfFocus__figure c-areaOfFocus__figureFront\">\n  \t\t\t\t<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" xml:space=\"preserve\" viewBox=\"66 -182.6 221.5 454.6\">\n  \t\t\t\t\t<path id=\"Head\" class=\"c-areaOfFocus__bodyPart\" d=\"M182.3-124.8h-11.2c-7.7,0-14-6.2-14-14l-2.2-28.2c0-8.6,7-15.6,15.6-15.6h12.5c8.6,0,15.6,7,15.6,15.6\n  \t\t\t\t\tl-2.2,28.2C196.4-131.1,190-124.8,182.3-124.8z\"></path>\n  \t\t\t\t\t<path id=\"Neck\" class=\"c-areaOfFocus__bodyPart\" d=\"M184.5-109.8h-15.6c-1.4,0-2.6-1.2-2.6-2.6v-2.6c0-1.4,1.2-2.6,2.6-2.6h15.6c1.4,0,2.6,1.2,2.6,2.6v2.6\n  \t\t\t\t\tC187.1-111,186-109.8,184.5-109.8z\"></path>\n  \t\t\t\t\t<path id=\"Pecs\" class=\"c-areaOfFocus__bodyPart\" d=\"M190.5-104.9c-4.5,2.6-23.5,2.3-27.6,0c-4.5-2.6-11-7.1-15.6-3.2s-15.6,24.7,4.2,37.7\n  \t\t\t\t\tc6,3.9,15.1,5.8,15.1,5.8c1.4,0.3,3-0.5,3.6-1.8c0,0,2.3-5.1,6.5-5.1s6.5,5.1,6.5,5.1c0.6,1.3,2.2,2.1,3.6,1.8c0,0,9.1-1.9,15.1-5.8\n  \t\t\t\t\tc19.8-13,8.7-33.8,4.2-37.7C201.6-112.1,195.1-107.5,190.5-104.9z\"></path>\n  \t\t\t\t\t<path id=\"RightShoulder\" class=\"c-areaOfFocus__bodyPart\" d=\"M119.7-78.9h5.5c3.6,0,7.3-2.9,8.2-6.3c0,0,6-21.8-5.1-21.8c-7.2,0-15.6,5.1-20.1,17.1\n  \t\t\t\t\tc-2.5,6.6-2.2,11.6-2.2,11.6c0.3,3.5,2.7,4.7,5.6,2.6C111.8-75.6,115.8-78.9,119.7-78.9z\"></path>\n  \t\t\t\t\t<path id=\"LeftShoulder\" class=\"c-areaOfFocus__bodyPart\" d=\"M233.9-78.9h-5.5c-3.6,0-7.3-2.9-8.2-6.3c0,0-6-21.8,5.1-21.8c7.2,0,15.6,5.1,20.1,17.1\n  \t\t\t\t\tc2.5,6.6,2.2,11.6,2.2,11.6c-0.3,3.5-2.7,4.7-5.6,2.6C241.8-75.6,237.6-78.9,233.9-78.9z\"></path>\n  \t\t\t\t\t<ellipse id=\"RightBicep\" transform=\"matrix(0.9375 0.3479 -0.3479 0.9375 -11.0949 -43.259)\" class=\"c-areaOfFocus__bodyPart\" cx=\"114.9\" cy=\"-52.5\" rx=\"10.3\" ry=\"22.9\"></ellipse>\n  \t\t\t\t\t<ellipse id=\"LeftBicep\" transform=\"matrix(-0.9375 0.3479 -0.3479 -0.9375 443.4167 -184.6101)\" class=\"c-areaOfFocus__bodyPart\" cx=\"238.3\" cy=\"-52.5\" rx=\"10.3\" ry=\"22.9\"></ellipse>\n  \t\t\t\t\t<circle id=\"RightElbow\" class=\"c-areaOfFocus__bodyPart\" cx=\"98.7\" cy=\"-24.9\" r=\"4.4\"></circle>\n  \t\t\t\t\t<circle id=\"LeftElbow\" class=\"c-areaOfFocus__bodyPart\" cx=\"254.9\" cy=\"-24.9\" r=\"4.4\"></circle>\n  \t\t\t\t\t<ellipse id=\"RightForearm\" transform=\"matrix(0.9375 0.3479 -0.3479 0.9375 7.2428 -35.7256)\" class=\"c-areaOfFocus__bodyPart\" cx=\"103.1\" cy=\"2.3\" rx=\"8.1\" ry=\"29.6\"></ellipse>\n  \t\t\t\t\t<ellipse id=\"LeftForearm\" transform=\"matrix(-0.9375 0.3479 -0.3479 -0.9375 485.9817 -82.5383)\" class=\"c-areaOfFocus__bodyPart\" cx=\"250.4\" cy=\"2.4\" rx=\"8.1\" ry=\"29.6\"></ellipse>\n  \t\t\t\t\t<circle id=\"RightWrist\" class=\"c-areaOfFocus__bodyPart\" cx=\"99.3\" cy=\"35.6\" r=\"3.8\"></circle>\n  \t\t\t\t\t<circle id=\"LeftWrist\" class=\"c-areaOfFocus__bodyPart\" cx=\"254.1\" cy=\"35.6\" r=\"3.8\"></circle>\n  \t\t\t\t\t<path id=\"RightHand\" class=\"c-areaOfFocus__bodyPart\" d=\"M86.9,58.2l5.9-14.3c1.2-2.9,0.1-6.5-2.5-8.1l-4.2-2.6c0,0-0.1,0-0.1-0.1c-0.4-0.3-0.9-0.5-1.6-0.7\n  \t\t\t\t\tc-0.5-0.1-1-0.1-1.4-0.1c-2.1-0.1-4.8,0.3-7.8,1.2c-5.7,1.7-10,4.4-9.5,6.1c0.4,1.6,4.6,1.8,9.5,0.7l-7.2,12.6\n  \t\t\t\t\tc-1.7,2.6-0.5,5.3,2.3,6.3l9.1,2.6C82.4,62.6,85.8,61.1,86.9,58.2z\"></path>\n  \t\t\t\t\t<path id=\"LeftHand\" class=\"c-areaOfFocus__bodyPart\" d=\"M266.5,58.2l-5.9-14.3c-1.2-2.9-0.1-6.5,2.5-8.1l4.2-2.6c0,0,0.1,0,0.1-0.1c0.4-0.3,0.9-0.5,1.6-0.7\n  \t\t\t\t\tc0.5-0.1,1-0.1,1.4-0.1c2.1-0.1,4.8,0.3,7.8,1.2c5.7,1.7,10,4.4,9.5,6.1c-0.4,1.6-4.6,1.8-9.5,0.7l7.2,12.6c1.7,2.6,0.5,5.3-2.3,6.3\n  \t\t\t\t\tl-9.1,2.6C271,62.6,267.8,61.1,266.5,58.2z\"></path>\n  \t\t\t\t\t<path id=\"Abs\" class=\"c-areaOfFocus__bodyPart\" d=\"M189.1-58.2c-0.3,0.1-5.8,1-11.4,1c-5.6,0-11.2-0.9-11.4-1c-1-0.3-10.5-2.3-17.3-6.8\n  \t\t\t\t\tc-5.3-3.5-7-4.7-8.8-1.7c-2.4,4-1.9,7.4,0,11.4c6.8,16.9,10.5,35.5,10.5,54.7c0,14.7,11.7,26.5,26.3,26.5\n  \t\t\t\t\tc14.4,0,26.3-11.7,26.3-26.3c0-19.6,3.8-38.1,10.5-55c1.9-4,2.1-6.4,0.6-10.4c-0.7-1.8-3.4-2.3-7.8,0.7\n  \t\t\t\t\tC199.6-60.6,190.1-58.4,189.1-58.2z\"></path>\n  \t\t\t\t\t<path id=\"RightQuad\" class=\"c-areaOfFocus__bodyPart\" d=\"M163.8,129.8c-4,0-6-8.3-6-8.3c-4.9-0.3-16.6-16.8-19-39.8c-2.5-23.8,4-58.5,4-58.5\n  \t\t\t\t\tc0.4-5.1,4-7,8-4l15.1,11.3c4.1,2.9,7.5,9.5,7.5,14.6C173.4,45,174.4,129.8,163.8,129.8z\"></path>\n  \t\t\t\t\t<path id=\"LeftQuad\" class=\"c-areaOfFocus__bodyPart \" d=\"M195.8,121.5c4.9-0.3,16.6-16.8,19-39.8c2.5-23.8-4-58.5-4-58.5c-0.4-5.1-4-7-8-4l-15.1,11.3\n  \t\t\t\t\tc-4.1,2.9-7.5,9.5-7.5,14.6c0,0-1,84.8,9.6,84.8C193.8,129.8,195.8,121.5,195.8,121.5z\"></path>\n  \t\t\t\t\t<path id=\"RightShin\" class=\"c-areaOfFocus__bodyPart\" d=\"M161.1,142.3c0-0.3,0-0.5-0.1-0.8c-0.8-6.8-4-12-7-11.7s-4.9,6.1-4.2,13v0.4\n  \t\t\t\t\tc-3.4,6.8-4.5,20-2.9,35.1c2.5,21.2,10,37.6,16.9,36.8s10.4-18.5,7.9-39.6C170.1,160.7,165.8,148.3,161.1,142.3z\"></path>\n  \t\t\t\t\t<path id=\"LeftShin\" class=\"c-areaOfFocus__bodyPart\" d=\"M192.3,142.3c0-0.3,0-0.5,0.1-0.8c0.8-6.8,4-12,7-11.7s4.9,6.1,4.2,13v0.4\n  \t\t\t\t\tc3.4,6.8,4.5,20,2.9,35.1c-2.5,21.2-10,37.6-16.9,36.8s-10.4-18.5-7.9-39.6C183.3,160.7,187.6,148.3,192.3,142.3z\"></path>\n  \t\t\t\t\t<path id=\"RightFoot\" class=\"c-areaOfFocus__bodyPart\" d=\"M170.7,268.4c0,2.9-2.1,4.3-4.8,3.1l-10.7-4.7c-2.6-1.2-4.4-4.4-3.9-7.3l5.7-34.7\n  \t\t\t\t\tc0.5-2.9,3.2-5.1,6.1-5.1h2.3c2.9,0,5.2,2.3,5.2,5.2L170.7,268.4L170.7,268.4z\"></path>\n  \t\t\t\t\t<path id=\"LeftFoot\" class=\"c-areaOfFocus__bodyPart\" d=\"M187.6,271.5l10.7-4.7c2.6-1.2,4.4-4.4,3.9-7.3l-5.7-34.7c-0.5-2.9-3.2-5.1-6.1-5.1h-2.3\n  \t\t\t\t\tc-2.9,0-5.2,2.3-5.2,5.2v43.4C182.7,271.3,184.8,272.7,187.6,271.5z\"></path>\n  \t\t\t\t</svg>\n  \t\t\t</div>\n  \t\t\t<div class=\"c-areaOfFocus__figure c-areaOfFocus__figureBack\">\n  \t\t\t\t<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" xml:space=\"preserve\" viewBox=\"67.7 -182.5 221.5 454.6\">\n  \t\t\t\t\t<title>TAFigure_MasterFront Copy</title>\n  \t\t\t\t\t<desc>Created with Sketch.</desc>\n  \t\t\t\t\t<path id=\"Head\" class=\"c-areaOfFocus__bodyPart\" d=\"M184.8-182.5h-12.5c-8.6,0-15.6,7-15.6,15.6l2.2,28.3c0,7.6,6.1,13.8,13.7,13.9\n  \tc0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1c7.4-0.4,13.3-6.5,13.3-13.9l2.2-28.3C200.4-175.4,193.4-182.5,184.8-182.5\n  \tL184.8-182.5z\"></path>\n  \t\t\t\t\t<path id=\"LeftTrap\" class=\"c-areaOfFocus__bodyPart\" d=\"M167.7-117.2c-12.2-0.4-19.8,4.7-19.8,16.2s11.9,31,26.2,31.4c0,0,1.7-15.9,1.7-25.4\n  \tC175.9-116.7,170.4-117.1,167.7-117.2L167.7-117.2z\"></path>\n  \t\t\t\t\t<path id=\"RightTrap\" class=\"c-areaOfFocus__bodyPart\" d=\"M189.3-117.2c12.2-0.4,19.8,4.7,19.8,16.2s-11.9,31-26.2,31.4c0,0-1.7-15.9-1.7-25.4\n  \tC181.1-116.7,186.7-117.1,189.3-117.2L189.3-117.2z\"></path>\n  \t\t\t\t\t<path id=\"LeftShoulder\" class=\"c-areaOfFocus__bodyPart\" d=\"M121.4-78.8h5.5c3.6,0,7.3-2.9,8.2-6.3c0,0,6-21.8-5.1-21.8c-7.2,0-15.6,5.1-20.1,17.1\n  \tc-2.5,6.6-2.2,11.6-2.2,11.6c0.3,3.5,2.7,4.7,5.6,2.6C113.5-75.5,117.6-78.8,121.4-78.8z\"></path>\n  \t\t\t\t\t<path id=\"RightShoulder\" class=\"c-areaOfFocus__bodyPart\" d=\"M235.6-78.8h-5.5c-3.6,0-7.3-2.9-8.2-6.3c0,0-6-21.8,5.1-21.8c7.2,0,15.6,5.1,20.1,17.1\n  \tc2.5,6.6,2.2,11.6,2.2,11.6c-0.3,3.5-2.7,4.7-5.6,2.6C243.5-75.5,239.4-78.8,235.6-78.8z\"></path>\n  \t\t\t\t\t<ellipse id=\"LeftTricep\" transform=\"matrix(-0.3479 0.9375 -0.9375 -0.3479 108.0982 -179.951)\" class=\"c-areaOfFocus__bodyPart\" cx=\"116.6\" cy=\"-52.4\" rx=\"22.9\" ry=\"10.3\"></ellipse>\n  \t\t\t\t\t<ellipse id=\"RightTricep\" transform=\"matrix(-0.3479 -0.9375 0.9375 -0.3479 372.6888 154.4846)\" class=\"c-areaOfFocus__bodyPart\" cx=\"240.1\" cy=\"-52.4\" rx=\"22.9\" ry=\"10.3\"></ellipse>\n  \t\t\t\t\t<circle id=\"LeftElbow\" class=\"c-areaOfFocus__bodyPart\" cx=\"100.4\" cy=\"-24.8\" r=\"4.4\"></circle>\n  \t\t\t\t\t<circle id=\"RightElbow\" class=\"c-areaOfFocus__bodyPart\" cx=\"256.6\" cy=\"-24.8\" r=\"4.4\"></circle>\n  \t\t\t\t\t<ellipse id=\"LeftForearm\" transform=\"matrix(-0.3479 0.9375 -0.9375 -0.3479 143.5949 -95.0889)\" class=\"c-areaOfFocus__bodyPart\" cx=\"104.9\" cy=\"2.4\" rx=\"29.6\" ry=\"8.1\"></ellipse>\n  \t\t\t\t\t<ellipse id=\"RightForearm\" transform=\"matrix(-0.3479 -0.9375 0.9375 -0.3479 337.6069 239.657)\" class=\"c-areaOfFocus__bodyPart\" cx=\"252.1\" cy=\"2.4\" rx=\"29.6\" ry=\"8.1\"></ellipse>\n  \t\t\t\t\t<circle id=\"LeftWrist\" class=\"c-areaOfFocus__bodyPart\" cx=\"101.1\" cy=\"35.7\" r=\"3.8\"></circle>\n  \t\t\t\t\t<circle id=\"RightWrist\" class=\"c-areaOfFocus__bodyPart\" cx=\"255.9\" cy=\"35.7\" r=\"3.8\"></circle>\n  \t\t\t\t\t<path id=\"LeftHand\" class=\"c-areaOfFocus__bodyPart\" d=\"M88.7,58.3l5.9-14.3c1.2-2.9,0.1-6.5-2.5-8.1l-4.2-2.6c0,0-0.1,0-0.1-0.1c-0.4-0.3-0.9-0.5-1.6-0.7\n  \tc-0.5-0.1-1-0.1-1.4-0.1c-2.1-0.1-4.8,0.3-7.8,1.2c-5.7,1.7-10,4.4-9.5,6.1c0.4,1.6,4.6,1.8,9.5,0.7l-7.2,12.6\n  \tc-1.7,2.6-0.5,5.3,2.3,6.3l9.1,2.6C84.2,62.7,87.5,61.2,88.7,58.3z\"></path>\n  \t\t\t\t\t<path id=\"RightHand\" class=\"c-areaOfFocus__bodyPart\" d=\"M268.3,58.3l-5.9-14.3c-1.2-2.9-0.1-6.5,2.5-8.1l4.2-2.6c0,0,0.1,0,0.1-0.1c0.4-0.3,0.9-0.5,1.6-0.7\n  \tc0.5-0.1,1-0.1,1.4-0.1c2.1-0.1,4.8,0.3,7.8,1.2c5.7,1.7,10,4.4,9.5,6.1c-0.4,1.6-4.6,1.8-9.5,0.7l7.2,12.6c1.7,2.6,0.5,5.3-2.3,6.3\n  \tl-9.1,2.6C272.8,62.7,269.5,61.2,268.3,58.3z\"></path>\n  \t\t\t\t\t<path id=\"Back\" class=\"c-areaOfFocus__bodyPart\" d=\"M212.4-82.6c-2.9,0-5.2,2.3-5.2,5.2c0,7.3-16.9,14.9-28.7,14.9c-11.8,0-28.7-7.6-28.7-14.9\n  \tc0-2.9-2.3-5.2-5.2-5.2c-2.3,0-4.3,1.6-4.9,3.6c0,0-1,3.4-1,7.7c0,4.8,1.2,9.4,3.1,13.4c6.8,16.9,10.5,31.9,10.5,51.3\n  \tc0,0.1-0.1,19.5,26.2,22c26.4-2.3,26.2-21.9,26.2-22c0-19.4,3.8-34.4,10.5-51.3c1.9-4,3.1-8.6,3.1-13.4c0-4.2-0.9-7.7-1-7.7\n  \tC216.7-81,214.8-82.6,212.4-82.6z\"></path>\n  \t\t\t\t\t<path id=\"LeftLat\" class=\"c-areaOfFocus__bodyPart\" d=\"M144.6-83c-2.3,0-4.3,1.6-4.9,3.6c0,0-1,3.4-1,7.6c0,4.8,1.2,9.3,3.1,13.3c6.7,16.8,10.5,31.7,10.5,51\n  \tc0,0-2.2-27.4,14.4-33.9c5-1.9,7.1-15.3-7.9-21.9c-9.6-4.1-8.9-14.6-8.9-14.6C149.8-80.6,147.5-83,144.6-83z\"></path>\n  \t\t\t\t\t<path id=\"RightLat\" class=\"c-areaOfFocus__bodyPart\" d=\"M207.3-77.8c0-2.8,2.3-5.2,5.2-5.2c2.3,0,4.3,1.6,4.9,3.6c0,0,1,3.4,1,7.6c0,4.8-1.2,9.3-3.1,13.3\n  \tc-6.7,16.8-10.5,31.7-10.5,51c0,0,2.2-27.4-14.4-33.9c-5-1.9-7.1-15.3,7.9-21.9C207.9-67.3,207.3-77.8,207.3-77.8z\"></path>\n  \t\t\t\t\t<path id=\"LeftLowerBack\" class=\"c-areaOfFocus__bodyPart\" d=\"M160.7-13.4c0,11.7,6,21.4,14,23.8c0.1-2.5,0.1-5,0.1-7.6c0-14.6-1-28.1-3-38.7\n  \tC165.4-32.5,160.7-23.7,160.7-13.4z\"></path>\n  \t\t\t\t\t<path id=\"RightLowerBack\" class=\"c-areaOfFocus__bodyPart\" d=\"M195.8-13.4c0,11.7-6,21.4-14,23.8c-0.1-2.5-0.1-5-0.1-7.6c0-14.6,1-28.1,3-38.7\n  \tC191.1-32.5,195.8-23.7,195.8-13.4z\"></path>\n  \t\t\t\t\t<path id=\"Glutes\" class=\"c-areaOfFocus__bodyPart\" d=\"M193.2,19.3c-9,4-19.2,4-29.5,0c-5-2-11.9-8.2-16.7-4.7c-4.8,3.5-16.7,22,4.6,33.6\n  \tc6.4,3.5,16.2,5.2,16.2,5.2c1.4,0.3,3.3-0.5,3.9-1.6c0,0,2.5-4.6,6.9-4.6c4.4,0,6.9,4.6,6.9,4.6c0.7,1.2,2.3,1.8,3.9,1.6\n  \tc0,0,9.8-1.8,16.2-5.2c21-11.6,9.1-30.1,4.3-33.6S198.2,17.1,193.2,19.3z\"></path>\n  \t\t\t\t\t<path id=\"LeftHamstring\" class=\"c-areaOfFocus__bodyPart\" d=\"M166.5,129.6c-4,0-6-8.3-6-8.3c-4.9-0.3-16.6-16.8-19-39.8c-2.5-23.8,1.4-28.3,2.9-28.4\n  \tc13.6-1.2,20,11.5,20,11.5c8,0,10.5,5.4,10.5,10.5C174.9,75.1,177.1,129.6,166.5,129.6z\"></path>\n  \t\t\t\t\t<path id=\"RightHamstring\" class=\"c-areaOfFocus__bodyPart\" d=\"M190.5,129.6c4,0,6-8.3,6-8.3c4.9-0.3,16.6-16.8,19-39.8c2.5-23.8-1.4-28.3-2.9-28.4\n  \tc-13.6-1.2-20,11.5-20,11.5c-8,0-10.5,5.4-10.5,10.5C182.1,75.1,179.9,129.6,190.5,129.6z\"></path>\n  \t\t\t\t\t<path id=\"LeftCalf\" class=\"c-areaOfFocus__bodyPart\" d=\"M173.9,175.4c-1.7-14.7-6-27.2-10.7-33.2c0-0.3,0-0.5-0.1-0.8c-0.8-6.8-4-12-7-11.7c-3,0.3-5,6.1-4.2,13v0.4\n  \tc-3.4,6.8-4.6,20.1-2.9,35.2c2.5,21.2,10,37.7,16.9,36.9C172.9,214.4,176.4,196.7,173.9,175.4z\"></path>\n  \t\t\t\t\t<path id=\"RightCalf\" class=\"c-areaOfFocus__bodyPart\" d=\"M183.6,175.4c1.7-14.7,6-27.2,10.7-33.2c0-0.3,0-0.5,0.1-0.8c0.8-6.8,4-12,7-11.7c3,0.3,5,6.1,4.2,13v0.4\n  \tc3.4,6.8,4.6,20.1,2.9,35.2c-2.5,21.2-10,37.7-16.9,36.9C184.6,214.4,181.1,196.7,183.6,175.4z\"></path>\n  \t\t\t\t\t<path id=\"LeftFoot\" class=\"c-areaOfFocus__bodyPart\" d=\"M172.2,268.6c0,2.9-2.1,4.3-4.8,3.1l-10.7-4.7c-2.6-1.2-4.4-4.4-3.9-7.3l5.7-34.8c0.5-2.9,3.3-5.1,6.1-5.1h2.3\n  \tc2.9,0,5.2,2.3,5.2,5.2V268.6z\"></path>\n  \t\t\t\t\t<path id=\"RightFoot\" class=\"c-areaOfFocus__bodyPart\" d=\"M185.3,268.6c0,2.9,2.1,4.3,4.8,3.1l10.7-4.7c2.6-1.2,4.4-4.4,3.9-7.3L199,225c-0.5-2.9-3.3-5.1-6.1-5.1h-2.3\n  \tc-2.9,0-5.2,2.3-5.2,5.2V268.6z\"></path>\n  \t\t\t\t</svg>\n  \t\t\t</div>\n          <style>\n              .c-areaOfFocus__gradientFill {\n                  fill: url(#figureGradient);\n                  stroke: none !important;\n              }\n          </style>\n  \t\t</div>\n    </section>\n\n\n    <textarea id=\"cdf-{{ fieldUniqueId }}\" class=\"form-control form-control--hidden\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :required=\"isRequired\" rows=\"{{ rowsAmount }}\">        </textarea>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"areaOfFocus\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n.area-of-focus {\n  float: left;\n  width: 100%;\n  max-width: 700px;\n}\n\n.c-areaOfFocus__diagram {\n  overflow: hidden;\n}\n\n.c-areaOfFocus__figureGradient {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height : 0;\n  width : 0;\n}\n\n.c-areaOfFocus__figure {\n  width: 50%;\n  float: left;\n  padding-left: 6px;\n  padding-left: 0.375rem;\n  padding-right: 6px;\n  padding-right: 0.375rem;\n}\n\n@media screen and (min-width: 77rem) {\n  .c-areaOfFocus__figure {\n    padding-left: 24px;\n    padding-left: 1.5rem;\n    padding-right: 24px;\n    padding-right: 1.5rem;\n  }\n  .c-areaOfFocus__figure:after {\n    content: '';\n    display: block;\n    width: 60%;\n    height: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    background-image: radial-gradient(ellipse closest-side at center, rgba(50, 50, 50, 0.2) 40%, transparent);\n    margin-top: 12px;\n    margin-top: 0.75rem;\n  }\n}\n\n.c-areaOfFocus__bodyPart {\n  fill: #929ba9;\n  cursor : pointer;\n}\n\n.c-areaOfFocus__gradientStroke {\n  fill: none !important;\n  stroke: #fb4904 !important;\n  stroke-width: 2px !important;\n}\n\n.c-areaOfFocus__gradientFill {\n  fill: url(#figureGradient) !important;\n  stroke: none !important;\n}\n\n.c-areaOfFocus__bodyPart:hover,\n.c-areaOfFocus__gradientFill:hover,\n.c-areaOfFocus__gradientStroke:hover {\n  /*fill: #ee3224;*/\n  fill: #000000 !important;\n  stroke: #fb4904 !important;\n}\n\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-21aad1bf", module.exports)
  } else {
    hotAPI.update("_v-21aad1bf", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],5:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: [],
                type: 'text'
            }
        };
    },
    computed: {

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        theValue: function theValue() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.value) {
                    return this.fieldInfo.field_translation.value;
                }
            }
        },
        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <!--<input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" type=\"text\">-->\n    <ul class=\"dcf-checkbox-list dcf-bl\">\n        <li class=\"dcf-bl__li\" v-for=\"(key, value) in fieldInfo.choices\">\n            <label class=\"dcf-bl__label\">\n                <input class=\"form-control form-control--inline\" name=\"cdf[{{ fieldUniqueId }}][value][]\" v-model=\"fieldData.value\" type=\"checkbox\" value=\"{{ key }}\" id=\"cdf[{{ fieldUniqueId }}][value]\">\n                {{ value }}\n            </label>\n        </li>\n    </ul>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"checkbox\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-49564e24", module.exports)
  } else {
    hotAPI.update("_v-49564e24", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],6:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],

    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: { hex: '#194d33' }
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = { hex: this.fieldInfo.field_translation.value };
            }
        }
    },

    data: function data() {
        return {
            showColorPicker: false,
            fieldData: {
                value: { hex: '#194d33' },
                type: 'colorPicker'
            }
        };
    },

    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {

            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {
        /**
         * openColorPicker()
         *
         * toggle the result
         *
         * @return showColorPicker
         */
        openColorPicker: function openColorPicker() {
            return this.showColorPicker = !this.showColorPicker;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value.hex\" type=\"text\" :required=\"isRequired\" @click=\"openColorPicker\">\n\n    <div class=\"dcf-color-picker\" v-if=\"showColorPicker\">\n        <span class=\"glyphicon glyphicon-remove dcf-color-picker__close\" @click=\"showColorPicker = false;\"></span>\n        <div class=\"dcf-color-picker__pick\">\n            <color-picker :colors.sync=\"fieldData.value\"></color-picker>\n        </div>\n    </div>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"colorPicker\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1d73b082", module.exports)
  } else {
    hotAPI.update("_v-1d73b082", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],7:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'datepicker'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :placeholder=\"fieldInfo.placeholder\" type=\"date\" :required=\"isRequired\">\n    <input v-if=\"1===0\" id=\"en_10_value\" class=\"text form-control\" name=\"en[fields][10][value]\" type=\"datepicker\" value=\"\">\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"text\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-38354ff5", module.exports)
  } else {
    hotAPI.update("_v-38354ff5", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],8:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'email'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :placeholder=\"fieldInfo.placeholder\" :required=\"isRequired\" type=\"email\">\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"text\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-8d532852", module.exports)
  } else {
    hotAPI.update("_v-8d532852", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],9:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    props: ['fieldInfo', 'indexId', 'parent'],

    compiled: function compiled() {
        this.loopCheckBlocksHaveShowProperty();
    },

    ready: function ready() {
        /*
         * So we need to check if a new field has potentially
         * been added to the any of the layouts.
         *
         * If so then loop through layoutBlocks, find the missing swine
         * and add him in
         *
         */
        // 1. loop through the layoutBlock

        // 2. check if each field in the block is already in children

        // 3. if not then add it
        var that = this;

        //that.fieldInfo.layoutBlocks
        _.each(that.fieldInfo.layouts, function (block) {
            _.each(block.fields, function (field) {
                var fieldFind = {
                    slug: field.slug,
                    unique_id: field.unique_id
                };
                _.each(that.fieldInfo.layoutBlocks, function (lBlock) {
                    if (block.name == lBlock.name && block.label == lBlock.label) {
                        if (undefined == _.findWhere(lBlock.fields, fieldFind)) {
                            var newField = that.generateField(field);
                            lBlock.fields.push(newField);
                        }
                    }
                });
            });
        });
    },

    data: function data() {
        return {
            empty: false,
            showAddLayout: false,
            fieldData: {
                value: '',
                type: 'flexiblecontent'
            }
        };
    },

    events: {
        'deleteTheLayout': function deleteTheLayout(layout) {
            // `this` in event callbacks are automatically bound
            // to the instance that registered it
            console.log('deleteThisLayout in FlexibleContentField', layout);
            this.deleteThisLayout(layout);
        }
    },

    computed: {

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * the layout blocks in a format for saving to
         * the DB. We do not want all sub fields info
         */
        theLayoutBlocks: function theLayoutBlocks() {
            //                var that = this;
            //                var value = [];
            //                if(undefined != this.fieldInfo.layoutBlocks) {
            //                    var blocks = Vue.util.extend({}, that.fieldInfo.layoutBlocks);
            //
            //                    _.each(blocks, function(block){
            //                        var newBlock = {
            //                            delete          : block.delete,
            //                            display         : block.display,
            //                            key             : block.key,
            //                            label           : block.label,
            //                            layoutParentKey : block.layoutParentKey,
            //                            max             : block.max,
            //                            min             : block.min,
            //                            name            : block.name
            //                        };
            //
            //                        value.push(newBlock);
            //                    });
            //                }
            //                return JSON.stringify(value);
            return this.siftThroughAndReturnOnlyLayouts();
        },

        anyLayoutBlocks: function anyLayoutBlocks() {
            if (this.layoutBlocks == undefined) {
                return false;
            }
            if (this.layoutBlocks.length == 0) {
                return false;
            }
            return true;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {

        /**
         * loopCheckBlocksHaveShowProperty()
         *
         * loop through to see if a property is on it
         *
         * @return {Null}
         */
        loopCheckBlocksHaveShowProperty: function loopCheckBlocksHaveShowProperty() {
            var that = this;
            _.each(this.fieldInfo.layoutBlocks, function (block) {
                that.showBlock(block);
            });
        },

        /**
         * showBlock()
         *
         * show the block
         *
         * @return {Null}
         */
        showBlock: function showBlock(block) {
            if (undefined == block) {
                return block.showFields = true;
            }

            return block.showFields = !block.showFields;
        },

        /**
         * showHideClick()
         *
         * show hide the click
         *
         * @return {Null}
         */
        showHideClick: function showHideClick(block) {

            if (undefined == block) {
                return block.showFields = true;
            }

            return block.showFields = !block.showFields;
        },

        /**
         * onStart()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onStart: function onStart(evt) {
            //console.log('onStart', evt.item.firstElementChild, evt.item.firstElementChild.id);
            //dcf-layoutBlocks__block--
            DynamicFields.destroyEditors('#' + evt.item.firstElementChild.id);
        },

        /**
         * onUpdate()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onUpdate: function onUpdate(evt) {
            var itemEl = evt.item;
            //console.log('onUpdate', evt, itemEl);
            var vOldIndex = evt.oldIndex;
            var vNewIndex = evt.newIndex;
            //this.changeArrayPositionOfLayout(evt);
            this.fieldInfo.layoutBlocks.splice(vNewIndex, 0, this.fieldInfo.layoutBlocks.splice(vOldIndex, 1)[0]);
            DynamicFields.rebuildEditors('#' + evt.item.firstElementChild.id);
            return true;
        },

        /**
         * changeArrayPositionOfLayout()
         *
         * update location of item in layoutBlocks array
         *
         * @return {Null}
         */
        changeArrayPositionOfLayout: function changeArrayPositionOfLayout(evt) {
            var that = this;
            //var vOldIndex = (evt.oldIndex - 1);
            //var vNewIndex = (evt.newIndex - 1);
            var vOldIndex = evt.oldIndex;
            var vNewIndex = evt.newIndex;

            var newLayoutBlocksOrder = this.fieldInfo.layoutBlocks;

            //console.log('vOldIndex', vOldIndex, 'vNewIndex', vNewIndex);
            var itemToMove = newLayoutBlocksOrder[vOldIndex];
            var itemToMove2 = newLayoutBlocksOrder[vNewIndex];
            //this.fieldInfo.layoutBlocks.$remove(itemToMove);
            newLayoutBlocksOrder[vOldIndex] = itemToMove2;
            newLayoutBlocksOrder[vNewIndex] = itemToMove;

            //console.log('finished?', itemToMove, itemToMove2);
            //that.fieldInfo.layoutBlock = Object.assign({}, newLayoutBlocksOrder);
            that.fieldInfo.layoutBlock = DynamicFields.clone(newLayoutBlocksOrder);

            that.updateFlexibleInput();
            //console.log('finished?', input);
            return true;
        },

        /*
         *  updateFlexibleInput
         *
         *  updateFlexibleInput field to be saved to db
         */
        updateFlexibleInput: function updateFlexibleInput() {
            var that = this;
            var input = $('#cdf-' + that.fieldUniqueId + '--hidden-flex');
            var value = that.siftThroughAndReturnOnlyLayouts();
            input.val(value);
            input.trigger('change');
        },

        /*
         *  siftThroughAndReturnOnlyLayouts
         *
         *  sifts through layouts and removes fields and keeps as one
         *  level deep for save to DB
         *
         *  this is used in
         */
        siftThroughAndReturnOnlyLayouts: function siftThroughAndReturnOnlyLayouts() {
            var that = this;
            var value = [];
            if (undefined != this.fieldInfo.layoutBlocks) {
                var blocks = Vue.util.extend({}, that.fieldInfo.layoutBlocks);

                _.each(blocks, function (block) {
                    var newBlock = {
                        delete: block.delete,
                        display: block.display,
                        key: block.key,
                        label: block.label,
                        layoutParentKey: block.layoutParentKey,
                        max: block.max,
                        min: block.min,
                        name: block.name
                    };

                    value.push(newBlock);
                });
            }
            return (0, _stringify2.default)(value);
        },

        /**
         * addLayout()
         *
         * add a layout
         *
         * @return {Null}
         */
        addLayout: function addLayout() {
            this.showAddLayout = !this.showAddLayout;
        },

        /**
         * addThisLayout()
         *
         * add a layout
         *
         * @param layout
         *
         * @return {Null}
         */
        addThisLayout: function addThisLayout(layout) {
            //console.log('addThisLayout layout',layout);

            this.showAddLayout = false;

            //let localLayout =  DynamicFields.clone(layout);

            /*
             * we have created an object from scratch
             * We originally used Vue.util.extend but
             * found it was keeping Vue's reactivity
             * of changes (objects were being edited that we did not want edited).
             *
             * So we can guarantee a new object this way:
             */
            var newLayout = {
                layoutParentKey: layout.key,
                key: DynamicFields.GetUniqueId(),
                delete: layout.delete,
                display: layout.display,
                label: layout.label,
                max: layout.max,
                min: layout.min,
                name: layout.name,
                fields: [],
                showFields: true
            };
            //var newLayout = Vue.util.extend({},layout);

            //newLayout.layoutParentKey = layoutKey;
            var fieldsArray = [];
            _.each(layout.fields, function (field) {
                /*
                 * Create a shallow object copy with
                 * Object assign.
                 */
                //console.log('layoyt.fields',field);
                //var blankField = Object.assign({}, field);
                //var blankField = Vue.util.extend({}, field);
                var blankField = DynamicFields.clone(field);
                if (blankField.rows != undefined) {
                    blankField.rows = [];
                }

                /*
                 * again overwrite field_translation to
                 * guarantee new object and stop Vue
                 * tracking changes on original objects
                 */
                blankField.field_translation = {
                    field_id: field.unique_id,
                    unique_id: DynamicFields.GetUniqueId('field_'),
                    value: ''
                    //value       : field.slug
                };
                fieldsArray.push(blankField);
            });
            newLayout.fields = fieldsArray;

            //newLayout.key = DynamicFields.GetUniqueId();
            //console.log('addThisLayout newLayout',newLayout);
            //var copy3 = Object.assign({}, newLayout);
            newLayout = DynamicFields.clone(newLayout);
            //console.log('newLayout',copy3);
            this.fieldInfo.layoutBlocks.push(newLayout);
        },

        /**
         * generateField()
         *
         * generate a new field
         *
         * @return {Null}
         */
        generateField: function generateField(field) {
            var that = this;
            var UniqueId = DynamicFields.GetUniqueId('field_');
            //console.log('field',UniqueId);
            var blankField = Vue.util.extend({}, field);
            //if(field.type != 'repeater') {

            var newField = {
                //id              : this.fieldInfo.children.length + 1,
                isNew: true,
                default_value: '',
                save: true,
                limit: '',
                placeholder: '',
                unique_id: blankField.unique_id, // the fields unique_id is the reference
                //parent          : DynamicFields.GetUniqueId('field_'),
                parent: that.fieldInfo.unique_id,
                order: blankField.order,
                type: blankField.type,
                name: blankField.name,
                field_translation: {
                    field_id: blankField.unique_id,
                    unique_id: UniqueId,
                    value: ''
                }
            };

            if (blankField.type == 'repeater' && blankField.children != undefined) {
                newField.children = Vue.util.extend({}, blankField.children);
                newField.rows = [];
            }

            if (-1 !== _.indexOf(['select', 'checkbox', 'radio'], blankField.type)) {
                newField.choices = blankField.choices;
            }

            return newField;
        },

        /**
         * deleteRepeaterChildren()
         *
         * delete a layout
         *
         * @param rows
         *
         * @return {Null}
         */
        deleteRepeaterChildren: function deleteRepeaterChildren(rows) {
            var that = this;

            //console.log('deleteRepeaterChildren',children);

            var deletedRepeaterFields = [];

            _.each(rows, function (row) {
                _.each(row, function (field) {
                    if (field.rows) {
                        that.deleteRepeaterChildren(field.rows);
                    }
                    deletedRepeaterFields.push(field);
                });
            });
            //console.log('deleteRepeaterChildren deletedRepeaterFields',deletedRepeaterFields);
            that.$store.dispatch('updateDeletedFields', deletedRepeaterFields);

            return true;
        },

        /**
         * deleteThisLayout()
         *
         * delete a layout
         *
         * @param layout
         *
         * @return {Null}
         */
        deleteThisLayout: function deleteThisLayout(layout) {

            var that = this;

            //console.log('deleteThisLayout layout',layout, new Date());
            var deletedFields = [];

            _.each(layout.fields, function (field) {
                if (field.rows != undefined) {
                    var returned = that.deleteRepeaterChildren(field.rows);
                }

                deletedFields.push(field);

                that.$store.dispatch('updateDeletedFields', deletedFields);
            });
            //this.$store.dispatch('updateDeletedFields',layout.fields);
            that.fieldInfo.layoutBlocks.$remove(layout);
            $('#dcf-layoutBlocks__block--' + layout.key).remove();
            that.updateFlexibleInput();
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<section class=\"cdf-flexWrapper\">\n    <div class=\"cdf-label-flex cdf-{{ fieldUniqueId }}--flex\">\n        <label for=\"cdf-{{ fieldUniqueId }}--flexiblecontentblock\">{{ fieldData.type }}</label>\n        <p class=\"description\">Flexible layout</p>\n        <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    </div>\n\n    <div class=\"no-value-message\" v-if=\"fieldInfo.layoutBlocks.length == 0\">\n        Click the \"Add Row\" button below to start creating your layout\n    </div>\n\n    <section class=\"dcf-layoutBlocks\">\n        <div class=\"dcf-layoutBlock-meta\">\n            <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"flexiblecontent\" type=\"hidden\">\n            <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n            <input name=\"cdf[{{ fieldUniqueId }}][value]\" id=\"cdf-{{ fieldUniqueId }}--hidden-flex\" type=\"hidden\" value=\"{{ theLayoutBlocks }}\">\n            <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n            <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">\n        </div>\n        <!--  -->\n        <section v-sortable=\"{ handle: '.cdf-flexWrapper', filter: '.dcf-layoutBlocks__delete .dcf-layoutBlocks__blockName', onEnd: onUpdate, onStart: onStart, animation: 150 }\">\n            <flexible-content-layout-block :index-id=\"indexId\" :index=\"index\" :block=\"block\" v-for=\"(index, block) in fieldInfo.layoutBlocks\"></flexible-content-layout-block>\n        </section>\n    </section>\n\n    <div class=\"relative\">\n        <a class=\"btn btn-primary btn-flat\" @click=\"addLayout\">\n            Add Row\n        </a>\n        <div class=\"acf-popup-box acf-box\" v-if=\"showAddLayout == true\">\n            <div class=\"title\">\n                <a href=\"#\" @click.prevent=\"showAddLayout = false\" class=\"acf-icon acf-close-popup\"><i class=\"acf-sprite-delete \"></i></a>\n            </div>\n            <div class=\"inner\"></div>\n            <ul class=\"acf-popupLayouts\">\n                <li class=\"acf-popupLayouts__layout\" v-for=\"layout in fieldInfo.layouts\">\n                    <a href=\"#\" class=\"acf-popupLayouts__layoutClick\" @click.prevent=\"addThisLayout(layout)\">\n                        {{ layout.label }}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <br>\n\n    \n</section>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-526de045", module.exports)
  } else {
    hotAPI.update("_v-526de045", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"babel-runtime/core-js/json/stringify":42,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],10:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: ['block', 'index', 'indexId'],

    compiled: function compiled() {
        //this.loopCheckBlocksHaveShowProperty();
    },

    ready: function ready() {

        //            if(this.fieldInfo.layoutBlocks == undefined){
        //                this.fieldInfo.layoutBlocks = [];
        //            }

        //            this.loopCheckBlocksHaveShowProperty();
    },

    data: function data() {
        return {
            showLayout: false
        };
    },

    computed: {},

    methods: {

        /**
         * showHideClick()
         *
         * toggle the result
         *
         * @return showLayout
         */
        showHideClick: function showHideClick(block) {
            block.showFields = !block.showFields;
            return this.showLayout = !this.showLayout;
        },

        /**
         * deleteThisLayout()
         *
         * delete a layout
         *
         * @param layout
         *
         * @return {Null}
         */
        deleteThisLayout: function deleteThisLayout(layout) {
            //console.log('deleteThisLayout',this.$parent, layout);
            // we're just going to pass it up to parent component to sort out
            this.$dispatch('deleteTheLayout', layout);
        }

    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<section class=\"cdf-flexWrapper\">\n    <article id=\"dcf-layoutBlocks__block--{{ block.key }}\" class=\"dcf-layoutBlocks__block dcf-layoutBlocks__block--{{ block.key }}\" data-order=\"{{ index }}\">\n        <header class=\"dcf-layoutBlocks__blockHeader\">\n            <h3 class=\"dcf-layoutBlocks__blockName\" @click.prevent=\"showHideClick(block)\">{{ block.label }}</h3>\n            <a href=\"#\" class=\"dcf-layoutBlocks__delete\" @click.prevent=\"deleteThisLayout(block)\">\n                <i class=\"fa fa-times-circle removeIcon\"></i>\n            </a>\n        </header>\n        <!--<p>{{ block.display }}</p> showBlock(block) === true-->\n        <!-- showLayout block.showFields -->\n        <section v-show=\"showLayout\" data-show=\"{{ block.showFields }}\" class=\"dcf-layoutBlocks__region\">\n            <section v-if=\"block.display == 'block'\" class=\"dcf-layoutBlocks__region dcf-layoutBlocks__region--block\">\n                <div class=\"table dcf-layoutFields dcf-table dcf-input-table block-layout\">\n                    <section class=\"tbody\">\n                        <div class=\"tr\">\n                            <div class=\"td dcf-fields\">\n                                <div class=\"dcf-field \" v-for=\"(index,entityField) in in block.fields\">\n                                    <entity-field :entity-field=\"entityField\" :parent=\"parent\" :parent-layout=\"block.key\" :index-id=\"index\"></entity-field>\n                                </div>\n\n                            </div>\n                        </div>\n                    </section>\n                </div>\n            </section>\n\n            <section v-if=\"block.display == 'table'\" class=\"dcf-layoutBlocks__region dcf-layoutBlocks__region--table\">\n                <div class=\"table dcf-layoutFields dcf-table dcf-input-table row-layout\">\n                    <section class=\"tbody\">\n                        <div class=\"tr\" v-for=\"(index,entityField) in in block.fields\">\n                            <div class=\"dcf-label\">\n                                <label>{{ entityField.name }}</label>\n                            </div>\n                            <div class=\"dcf-input\">\n                                <entity-field :entity-field=\"entityField\" :parent-layout=\"block.key\" :index-id=\"index\"></entity-field>\n                            </div>\n                        </div>\n                    </section>\n                </div>\n            </section>\n\n            <section v-if=\"block.display == 'row'\" class=\"dcf-layoutBlocks__region dcf-layoutBlocks__region--row\">\n                <div class=\"table dcf-layoutFields dcf-table dcf-input-table row-layout\">\n                    <section class=\"tbody\">\n                        <div class=\"tr\" v-for=\"(index,entityField) in in block.fields\">\n                            <div class=\"dcf-label\">\n                                <label>{{ entityField.name }}</label>\n                            </div>\n                            <div class=\"dcf-input\">\n                                <entity-field :entity-field=\"entityField\" :parent-layout=\"block.key\" :index-id=\"index\"></entity-field>\n                            </div>\n                        </div>\n                    </section>\n                </div>\n            </section>\n        </section>\n\n    </article>\n</section>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3277c40e", module.exports)
  } else {
    hotAPI.update("_v-3277c40e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],11:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.jsThumbnailImageWrapper img {\n    max-width: 100px !important;\n    height: auto !important;\n    float: left;\n    width: 100% !important;\n    min-width: initial !important;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'uniqueId', 'parentLayout', 'parent'],

    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },

    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'image'
            }
        };
    },

    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        imageData: function imageData() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.extra_data) {
                    return this.fieldInfo.field_translation.extra_data;
                }
            }

            return null;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {
        openCustomMediaWindow: function openCustomMediaWindow(event) {
            //console.log(event);
            window.single = true;
            window.mediaPanel = $(event.currentTarget).closest('.media');
            window.zoneWrapper = $(event.currentTarget).siblings('.jsThumbnailImageWrapper');
            //window.open('http://asgard-dos/en/backend/media/media-grid/index', '_blank', 'menubar=no,status=no,toolbar=no,scrollbars=yes,height=500,width=1000');
            window.open(dynamicGlobalUrl + '/backend/media/media-grid/index', '_blank', 'menubar=no,status=no,toolbar=no,scrollbars=yes,height=500,width=1000');
        },

        removeSimpleLink: function removeSimpleLink(event) {

            event.preventDefault();
            var imageValue = $(this).closest('.media');
            imageValue.find('input[type=hidden]').first().val("");

            //console.log('removeSimpleLink', imageValue, event, $(this));
            $(this).html('');
        }

    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <div class=\"form-group\">\n        <div class=\"media\">\n            <p v-if=\"isRequired\" class=\"helper-text helper-text--red\">This is required</p>\n            <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n            <div class=\"clearfix\"></div>\n            <input id=\"cdf-{{ fieldUniqueId }}\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" type=\"hidden\">\n            <a class=\"btn btn-primary btn-browse\" @click=\"openCustomMediaWindow($event);\">\n              <i class=\"fa fa-upload\"></i>\n                Browse ...\n            </a>\n            <div class=\"clearfix\"></div>\n            <figure class=\"jsThumbnailImageWrapper customMedia\">\n                <img :src=\"imageData.path\" alt=\"image\" v-if=\"imageData != null\" style=\"max-width : 200px; min-width: 200px;\">\n                <a class=\"jsRemoveSimpleLink\" href=\"#\" data-id=\"{{ fieldData.value }}\" v-if=\"imageData != null\">\n                    <i class=\"fa fa-times-circle removeIcon\"></i>\n                </a>\n            </figure>\n        </div>\n    </div>\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"image\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.jsThumbnailImageWrapper img {\n    max-width: 100px !important;\n    height: auto !important;\n    float: left;\n    width: 100% !important;\n    min-width: initial !important;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-690214f8", module.exports)
  } else {
    hotAPI.update("_v-690214f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],12:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.hide-it-slightsly {\n    /*opacity: 0;*/\n    position: absolute;\n    left : -100%;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                if (this.fieldInfo.field_translation.value == '') {
                    this.fieldData.value = this.fieldInfo.field_translation.value;
                } else {

                    try {
                        this.fieldData.value = JSON.parse(this.fieldInfo.field_translation.value);
                        this.internalLink = JSON.parse(this.fieldInfo.field_translation.value);
                        this.linkType = 'internal';
                    } catch (e) {
                        this.fieldData.value = this.fieldInfo.field_translation.value;
                        this.externalLink = this.fieldInfo.field_translation.value;
                        this.linkType = 'external';
                    }
                }
            }
        }
        this.getOptions();

        this.checkType();
    },
    data: function data() {
        return {
            internalLink: '',
            externalLink: '',
            linkType: 'internal',
            fieldData: {
                value: '',
                type: 'link'
            },
            selected: null,
            options: []
        };
    },
    computed: {

        //            internalLinkValue : function(){
        //                if(this.linkType == 'internal'){
        //                    return this.internalLink;
        //                }
        //                return '';
        //            },
        //            externalLinkValue : function(){
        //                if(this.linkType == 'external'){
        //                    return this.externalLink;
        //                }
        //                return '';
        //            },

        theValue: function theValue() {
            if (this.linkType == 'external') {
                return this.externalLink;
            }
            if (this.linkType == 'internal') {
                return (0, _stringify2.default)(this.internalLink);
            }
            return '';
        },

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {

        updateExternal: function updateExternal() {},

        updateInternal: function updateInternal() {
            //this.internalLink
        },

        changeLinkType: function changeLinkType() {
            if (this.fieldType == 'external') {
                this.fieldData.value = this.externalLink;
            }
            if (this.fieldType == 'internal') {
                this.fieldData.value = this.internalLink;
            }
        },

        checkType: function checkType() {},
        getOptions: function getOptions(search, loading) {
            var that = this;
            this.$http.get('/backend/dynamicfield/api/collect-entities', {
                //q: search
            }).then(function (resp) {
                if (resp.data != undefined) {
                    that.options = resp.data;
                }
            });
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }} - {{ linkType }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"theValue\" :placeholder=\"fieldInfo.placeholder\" type=\"hidden\" :required=\"isRequired\">\n    <!--:class=\"{ 'hide-it-slightsly' : linkType == 'internal' }\"-->\n    <input v-show=\"linkType == 'external'\" id=\"cdf-{{ fieldUniqueId }}--external\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][externalLink]\" v-model=\"externalLink\" type=\"name\" @change=\"updateExternal\">\n    <v-select v-show=\"linkType == 'internal'\" @change=\"updateInternal\" id=\"cdf-{{ fieldUniqueId }}--internal\" name=\"cdf[{{ fieldUniqueId }}][internalLink]\" :value.sync=\"internalLink\" :options=\"options\"></v-select>\n\n    <select v-model=\"linkType\" @change=\"changeLinkType\" id=\"cdf-{{ fieldUniqueId }}--select-to-choose\">\n        <option value=\"external\">External</option>\n        <option value=\"internal\">Internal</option>\n    </select>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"link\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.hide-it-slightsly {\n    /*opacity: 0;*/\n    position: absolute;\n    left : -100%;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-8c754bd2", module.exports)
  } else {
    hotAPI.update("_v-8c754bd2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"babel-runtime/core-js/json/stringify":42,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],13:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                if (this.fieldInfo.field_translation.value == '') {
                    this.fieldData.value = this.fieldInfo.field_translation.value;
                } else {
                    this.fieldData.value = JSON.parse(this.fieldInfo.field_translation.value);
                }
            }
        }
        this.getOptions();
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'linkObject'
            },
            selected: null,
            options: []
        };
    },
    computed: {

        theValue: function theValue() {
            return (0, _stringify2.default)(this.fieldData.value);
        },

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {
        getOptions: function getOptions(search, loading) {
            var that = this;
            this.$http.get('/backend/dynamicfield/api/collect-entities', {
                //q: search
            }).then(function (resp) {
                if (resp.data != undefined) {
                    that.options = resp.data;
                }
            });
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"theValue\" :placeholder=\"fieldInfo.placeholder\" type=\"hidden\" :required=\"isRequired\">\n    <v-select id=\"cdf-{{ fieldUniqueId }}\" name=\"cdf[{{ fieldUniqueId }}][value]\" :required=\"isRequired\" :value.sync=\"fieldData.value\" :options=\"options\"></v-select>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"linkObject\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-08d8d450", module.exports)
  } else {
    hotAPI.update("_v-08d8d450", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"babel-runtime/core-js/json/stringify":42,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],14:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'number'
            }
        };
    },
    computed: {

        hasMinValue: function hasMinValue() {
            if (this.fieldInfo.min_value != undefined) {
                if (this.fieldInfo.min_value != '') {
                    return this.fieldInfo.min_value;
                }
            }
            return 0;
        },

        hasMaxValue: function hasMaxValue() {
            if (this.fieldInfo.max_value != undefined) {
                if (this.fieldInfo.max_value != '') {
                    return this.fieldInfo.max_value;
                }
            }
            return 99;
        },

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" :min=\"hasMinValue\" :max=\"hasMaxValue\" v-model=\"fieldData.value\" type=\"number\" :required=\"isRequired\">\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"number\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-f7bf4830", module.exports)
  } else {
    hotAPI.update("_v-f7bf4830", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],15:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'password'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :required=\"isRequired\" type=\"password\">\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"text\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0bef6d16", module.exports)
  } else {
    hotAPI.update("_v-0bef6d16", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],16:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'text'
            }
        };
    },
    computed: {

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        theValue: function theValue() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.value) {
                    return this.fieldInfo.field_translation.value;
                }
            }
        },
        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <!--<input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" type=\"text\">-->\n    <ul class=\"dcf-checkbox-list dcf-bl\">\n        <li class=\"dcf-bl__li\" v-for=\"(key, value) in fieldInfo.choices\">\n            <label class=\"dcf-bl__label\">\n                <input class=\"form-control form-control--inline\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldInfo.field_translation.value\" type=\"radio\" value=\"{{ key }}\" id=\"cdf[{{ fieldUniqueId }}][value]\">\n                {{ value }}\n            </label>\n        </li>\n    </ul>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"checkbox\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1132c350", module.exports)
  } else {
    hotAPI.update("_v-1132c350", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],17:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    props: ['fieldInfo', 'indexId', 'parentLayout', 'parent'],

    ready: function ready() {

        var that = this;

        //console.log('this.fieldInfo',this.fieldInfo);
        /*
         * So we need to check if a new field has potentially
         * been added to the repeater.
         *
         * If so then loop through and find the first field and
         * the length of field values
         *
         * then loop through the others and any that have 0
         * field values then add empty field values to the field
         *
         */
        if (this.fieldInfo.rows) {
            var fieldInfoChildren = this.fieldInfo.children.length;
            var fieldsMeantToBeInRepeater = fieldInfoChildren;
            //var fieldsMeantToBeInRepeater = 0;
            var fieldInfoLocal = this.fieldInfo;

            // 1. loop through the rows

            // 2. check if each field in the row is already in children

            // 3. if not then add it
            _.each(that.fieldInfo.rows, function (row) {

                _.each(that.fieldInfo.children, function (field) {
                    var fieldFind = {
                        slug: field.slug,
                        unique_id: field.unique_id
                    };
                    //console.log('findWhere',_.findWhere(row,fieldFind));
                    if (undefined == _.findWhere(row, fieldFind)) {
                        var newField = that.generateField(field);
                        row.push(newField);
                    }
                });
            });

            //                var el = document.getElementById('dcf-sortable--' + this.fieldUniqueId);
            //                var sortable = Sortable.create(el,this.sortableOptions);
            //
            //                console.log('sortable',sortable, 'el',el);
        }
    },

    data: function data() {
        var that = this;
        return {
            sortableOptions: {
                group: DynamicFields.GetUniqueId('uniquely__'),
                //handle      : '.column--repeater',
                //handle      : '.btn-move-it',
                //dragClass   : '.btn-move-it',
                onEnd: that.onUpdate,
                onStart: that.onStart,
                animation: 150,
                store: {
                    /**
                     * Get the order of elements. Called once during initialization.
                     * @param   {Sortable}  sortable
                     * @returns {Array}
                     */
                    get: function get(sortable) {
                        var order = localStorage.getItem(sortable.options.group.name);
                        return order ? order.split('|') : [];
                    },

                    /**
                     * Save the order of elements. Called onEnd (when the item is dropped).
                     * @param {Sortable}  sortable
                     */
                    set: function set(sortable) {
                        var order = sortable.toArray();
                        localStorage.setItem(sortable.options.group.name, order.join('|'));
                    }
                }
            },
            fieldsMeantToBeInRepeater: 0,
            showLayout: true,
            fieldData: {
                value: '',
                type: 'repeater'
            }
        };
    },

    computed: {

        maxLimit: function maxLimit() {
            if (this.fieldInfo.max != undefined) {
                if (this.fieldInfo.max == '') {
                    return false;
                }
                if (this.fieldInfo.max != null) {
                    if (this.fieldInfo.max == this.fieldInfo.rows.length) {
                        return true;
                    }
                }
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * the repeater rows in a format for saving to
         * the DB. We do not want all sub fields info
         * just the keys bits
         */
        repeaterRows: function repeaterRows() {
            return this.siftThroughAndReturnFieldsOnly();
        },

        /*
         * the fieldInfoChildren count
         */
        fieldInfoChildren: function fieldInfoChildren() {
            if (this.fieldInfo.children != undefined) {

                if (this.fieldInfo.children.length == 0) {
                    return 0;
                }
                return this.fieldInfo.children.length;
            }

            return 0;
            //return this.fieldInfo.children.length;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {

        /**
         * showHideClick()
         *
         * toggle the result
         *
         * @return showLayout
         */
        showHideClick: function showHideClick() {
            return this.showLayout = !this.showLayout;
        },

        /**
         * onStart()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onStart: function onStart(evt) {
            //console.log('on start');

            if ($(evt.item).find('.cdf-wysiwyg').length > 1) {
                DynamicFields.destroyEditors(evt.item);
            }

            //return true;
        },

        /**
         * onEnd()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onEnd: function onEnd(evt) {
            //console.log('on end');
            var vOldIndex = evt.oldIndex;
            var vNewIndex = evt.newIndex;

            this.fieldInfo.rows.splice(vNewIndex, 0, this.fieldInfo.rows.splice(vOldIndex, 1)[0]);

            if ($(evt.item).find('.cdf-wysiwyg').length > 1) {
                DynamicFields.rebuildEditors(evt.item);
            }

            //return true;
        },

        /**
         * onUpdate()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onUpdate: function onUpdate(evt) {
            console.log('on end');

            //var vOldIndex = (evt.oldIndex - 1);
            //var vNewIndex = (evt.newIndex - 1);
            var vOldIndex = evt.oldIndex;
            var vNewIndex = evt.newIndex;
            var itemEl = evt.item;
            console.log('onUpdate', evt, 'vOldIndex', vOldIndex, 'vNewIndex', vNewIndex);

            //this.changeArrayPositionOfRepeater(evt);

            this.fieldInfo.rows.splice(vNewIndex, 0, this.fieldInfo.rows.splice(vOldIndex, 1)[0]);
            DynamicFields.rebuildEditors('#' + evt.item.firstElementChild.id);

            //this.updateRepeaterValueInput();
            //return true;
        },

        /**
         * changeArrayPositionOfRepeater()
         *
         * update location of item in layoutBlocks array
         *
         * @return {Null}
         */
        changeArrayPositionOfRepeater: function changeArrayPositionOfRepeater(evt) {
            var that = this;
            var vOldIndex = evt.oldIndex - 1;
            var vNewIndex = evt.newIndex - 1;
            console.log('evt', evt);
            //var vOldIndex = (evt.oldIndex);
            //var vNewIndex = (evt.newIndex);

            var newRepeaterOrder = that.fieldInfo.rows;

            console.log('vOldIndex', vOldIndex, 'vNewIndex', vNewIndex);
            var itemToMove = newRepeaterOrder[vOldIndex];
            var itemToMove2 = newRepeaterOrder[vNewIndex];
            //this.fieldInfo.layoutBlocks.$remove(itemToMove);
            newRepeaterOrder[vOldIndex] = itemToMove2;
            newRepeaterOrder[vNewIndex] = itemToMove;

            console.log('finished?', itemToMove, itemToMove2);
            that.fieldInfo.rows = (0, _assign2.default)({}, newRepeaterOrder);
            //that.fieldInfo.rows = DynamicFields.clone(newRepeaterOrder);

            that.updateRepeaterValueInput();
            //console.log('finished?', input);
            return true;
        },

        /*
         *  updateRepeaterValueInput
         *
         *  updateRepeaterValueInput field to be saved to db
         */
        updateRepeaterValueInput: function updateRepeaterValueInput() {
            var that = this;
            var input = $('#cdf-' + that.fieldUniqueId + '--hidden-repeater');
            var value = that.siftThroughAndReturnFieldsOnly();
            input.val(value);
            input.trigger('change');
        },

        /*
         *  siftThroughAndReturnFieldsOnly
         *
         *  sifts through rows and removes extra data and keeps as one
         *  level deep for save to DB
         *
         */
        siftThroughAndReturnFieldsOnly: function siftThroughAndReturnFieldsOnly() {
            var that = this;
            var rowsToSave = [];

            if (undefined != this.fieldInfo.rows) {
                //console.log('this.fieldInfo.rows',this.fieldInfo.rows);
                if (this.fieldInfo.rows.length == 0) {
                    return (0, _stringify2.default)(rowsToSave);
                }

                //var rowsCopy = Vue.util.extend({}, that.fieldInfo.rows);
                var rowsCopy = DynamicFields.clone(that.fieldInfo.rows);
                _.each(rowsCopy, function (row) {
                    var newRow = [];
                    _.each(row, function (field) {
                        var newField = {
                            unique_id: field.unique_id,
                            field_translation: {
                                unique_id: field.field_translation.unique_id
                            }
                        };
                        newRow.push(newField);
                    });
                    rowsToSave.push(newRow);
                });
            }
            return (0, _stringify2.default)(rowsToSave);
        },

        /**
         * addRepeaterItem()
         *
         * add a row to each children items repeater_field_translation
         *
         * @return {Null}
         */
        addRepeaterItem: function addRepeaterItem(childrenToAdd) {
            //console.log('add me',this.fieldInfo);
            if (this.maxLimit == true) {
                return false;
            }

            var that = this;
            var fieldInfoLocal = this.fieldInfo;
            var newRow = [];

            // 1. loop through each child and add the new field
            _.each(childrenToAdd, function (field) {
                var newField = that.generateField(field);
                newRow.push(newField);
                //}
            });

            this.fieldInfo.rows.push(newRow);

            that.fieldsMeantToBeInRepeater++;
        },

        /**
         * generateField()
         *
         * generate a new field
         *
         * @return {Null}
         */
        generateField: function generateField(field) {
            var that = this;
            var UniqueId = DynamicFields.GetUniqueId('field_');
            //console.log('field',UniqueId);
            var blankField = Vue.util.extend({}, field);
            //if(field.type != 'repeater') {

            var newField = {
                //id              : this.fieldInfo.children.length + 1,
                isNew: true,
                default_value: '',
                save: true,
                limit: '',
                placeholder: '',
                unique_id: blankField.unique_id, // the fields unique_id is the reference
                //parent          : DynamicFields.GetUniqueId('field_'),
                parent: that.fieldInfo.unique_id,
                order: blankField.order,
                type: blankField.type,
                name: blankField.name,
                field_translation: {
                    field_id: blankField.unique_id,
                    unique_id: UniqueId,
                    value: ''
                }
            };

            if (blankField.type == 'repeater' && blankField.children != undefined) {
                newField.children = Vue.util.extend({}, blankField.children);
                newField.rows = [];
            }

            if (-1 !== _.indexOf(['select', 'checkbox', 'radio'], blankField.type)) {
                newField.choices = blankField.choices;
            }

            return newField;
        },

        /**
         * deleteRepeaterChildren()
         *
         * delete a layout
         *
         * @param rows
         *
         * @return {Null}
         */
        deleteRepeaterChildren: function deleteRepeaterChildren(rows) {
            var that = this;

            //console.log('deleteRepeaterChildren',children);

            var deletedRepeaterFields = [];

            _.each(rows, function (row) {
                _.each(row, function (field) {
                    if (field.rows) {
                        that.deleteRepeaterChildren(field.rows);
                    }
                    deletedRepeaterFields.push(field);
                });
            });
            //console.log('deleteRepeaterChildren deletedRepeaterFields',deletedRepeaterFields);
            that.$store.dispatch('updateDeletedFields', deletedRepeaterFields);

            return true;
        },

        /**
         * deleteRow()
         *
         * delete a row
         *
         * @param n
         *
         * @return {Null}
         */
        deleteRow: function deleteRow(row, n) {
            var that = this;
            //var n1 = (n + 1);
            var deletedFields = [];
            //var rowToDelete = this.fieldInfo.rows[n];
            //console.log('delete me - n',n, 'row',row, 'rowToDelete',rowToDelete);

            //this.fieldInfo.rows.$remove(rowToDelete);
            //                this.fieldInfo.rows.splice(n,0);
            //                this.$store.dispatch('updateDeletedFields',rowToDelete);

            _.each(row, function (field) {
                if (field.rows != undefined) {
                    var returned = that.deleteRepeaterChildren(field.rows);
                }
                deletedFields.push(field);
            });

            that.$store.dispatch('updateDeletedFields', deletedFields);

            that.fieldInfo.rows.$remove(row);
            return false;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<section class=\"cdf-flexWrapper\">\n    <article class=\"dcf-layoutBlocks__block\">\n        <header class=\"dcf-layoutBlocks__blockHeader\">\n            <h3 class=\"dcf-layoutBlocks__blockName\" @click.prevent=\"showHideClick\">Repeater - {{ fieldInfo.slug }}</h3>\n            <span class=\"dcf-fieldsBlock__arrow\" :class=\"{ 'dcf-fieldsBlock__arrow--up' : showLayout == true, 'dcf-fieldsBlock__arrow--down' : showLayout == false }\"></span>\n        </header>\n        <section v-show=\"showLayout\" class=\"dcf-layoutBlocks__region dcf-layoutBlocks__region--repeater\">\n\n            <div class=\"repeater-group tr tr--repeater\">\n                <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n                <p class=\"helper-text helper-text--red\" v-if=\"maxLimit\">You have reached your max limit</p>\n                <input name=\"cdf[{{ fieldUniqueId }}][value]\" id=\"cdf-{{ fieldUniqueId }}--hidden-repeater\" v-model=\"repeaterRows\" type=\"hidden\">\n                <!--v-model=\"fieldInfo.slug\"-->\n                <!--v-model=\"fieldInfo.slug\"-->\n                <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldInfo.type\" value=\"repeater\" type=\"hidden\">\n                <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n                <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n                <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n            </div>\n\n            <section class=\"table-repeater table\" id=\"repeater_table_en_9\">\n                <div class=\"thead--repeater\">\n                    <div class=\"th th--repeater\" v-for=\"(index, field) in fieldInfo.children\">\n                        {{ field.name }}\n                    </div>\n                    <div class=\"th th--repeater th--row-actions\">\n                        \n                    </div>\n                    <!--</div>-->\n                </div>\n                <!--v-sortable=\"sortableOptions\"-->\n                <div class=\" tbody tbody--repeater\" id=\"dcf-sortable--{{ fieldUniqueId }}\" v-sortable=\"{ onStart: onStart, onEnd: onEnd }\">\n                    <div class=\"column column--repeater\" data-repeater-id=\"{{ index }}\" v-for=\"(index, row) in fieldInfo.rows\">                            \n                       <div class=\"column--repeaterCell clear\" data--field-info-children-id=\"{{ f }}\" v-for=\"(f, field) in row\">\n                            <entity-field :entity-field=\"field\" :parent=\"fieldUniqueId\" :index-id=\"f\"></entity-field>\n                        </div>\n\n                        <div class=\"td td--repeaterField\">\n                            <a class=\"btn-move-it handle\" title=\"move\">\n                                <span class=\"glyphicon glyphicon-move\"></span>\n                            </a>\n                            <a class=\"btn-delete\" @click=\"deleteRow(fieldInfo.rows[index])\" title=\"delete\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tfoot tfoot--repeater\" v-if=\"!maxLimit\">\n                    <div class=\"tr tr--repeater\">\n                        <div class=\"th th--repeater\">\n                            <a class=\"btn btn-primary btn-flat\" @click=\"addRepeaterItem(fieldInfo.children,index)\">Add Row</a>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </section>\n</article></section>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3f7422c9", module.exports)
  } else {
    hotAPI.update("_v-3f7422c9", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"babel-runtime/core-js/json/stringify":42,"babel-runtime/core-js/object/assign":43,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],18:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'select'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <select class=\"form-control form-control--select\" v-model=\"fieldData.value\" name=\"cdf[{{ fieldUniqueId }}][value]\" id=\"cdf[{{ fieldUniqueId }}][value]\" :required=\"isRequired\">\n        <option class=\"dcf-bl__li\" v-for=\"(key, value) in fieldInfo.choices\" v-bind:value=\"value\">\n                {{ key }}\n        </option>\n    </select>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"select\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0ee83b95", module.exports)
  } else {
    hotAPI.update("_v-0ee83b95", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],19:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'text'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :placeholder=\"fieldInfo.placeholder\" type=\"text\" :required=\"isRequired\">\n    <input v-if=\"1===0\" id=\"en_10_value\" class=\"text form-control\" name=\"en[fields][10][value]\" type=\"text\" value=\"\">\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"text\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-769aee44", module.exports)
  } else {
    hotAPI.update("_v-769aee44", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],20:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'textarea'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * we need rows amount
         */
        rowsAmount: function rowsAmount() {
            if (this.fieldInfo.rows != undefined) {
                if (this.fieldInfo.rows == 0) {
                    return 2;
                }
                return this.fieldInfo.rows;
            }

            return 2;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <textarea id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :required=\"isRequired\" rows=\"{{ rowsAmount }}\">        </textarea>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"text\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-b9439952", module.exports)
  } else {
    hotAPI.update("_v-b9439952", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],21:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'url'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"fieldData.value\" :placeholder=\"fieldInfo.placeholder\" :required=\"isRequired\" type=\"url\" pattern=\"https?://.+\">\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"text\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-629bbba4", module.exports)
  } else {
    hotAPI.update("_v-629bbba4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],22:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                if (this.fieldInfo.field_translation.value == '') {
                    this.fieldData.value = this.fieldInfo.field_translation.value;
                } else {
                    this.fieldData.value = JSON.parse(this.fieldInfo.field_translation.value);
                }
            }
        }
        this.getOptions();
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'user'
            },
            selected: null,
            options: []
        };
    },
    computed: {

        theValue: function theValue() {
            return (0, _stringify2.default)(this.fieldData.value);
        },

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                //return this.fieldInfo.field_translation.field_id;
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    },

    methods: {
        getOptions: function getOptions(search, loading) {
            var that = this;
            this.$http.get('/backend/dynamicfield/api/collect-users', {
                //q: search
            }).then(function (resp) {
                that.options = resp.data;
            });
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <input id=\"cdf-{{ fieldUniqueId }}\" class=\"text form-control\" name=\"cdf[{{ fieldUniqueId }}][value]\" v-model=\"theValue\" :placeholder=\"fieldInfo.placeholder\" type=\"hidden\" :required=\"isRequired\">\n    <v-select id=\"cdf-{{ fieldUniqueId }}\" name=\"cdf[{{ fieldUniqueId }}][value]\" :required=\"isRequired\" :value.sync=\"fieldData.value\" :options=\"options\"></v-select>\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"user\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-496e4d34", module.exports)
  } else {
    hotAPI.update("_v-496e4d34", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"babel-runtime/core-js/json/stringify":42,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],23:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['fieldInfo', 'parentLayout', 'parent'],
    created: function created() {
        var that = this;
        if (this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null) {
            var UniqueId = DynamicFields.GetUniqueId('field_');
            that.fieldInfo.field_translation = {
                field_id: that.fieldInfo.unique_id,
                unique_id: UniqueId,
                value: ''
            };
        }
    },
    ready: function ready() {
        if (this.fieldInfo.field_translation) {
            if (this.fieldInfo.field_translation.value != null) {
                this.fieldData.value = this.fieldInfo.field_translation.value;
            }
        }

        var theFieldUniqueId = this.fieldUniqueId;

        /*
         * Find instance of our .cdf-wysiwyg and instantiate
         * a CKeditor on it
         */
        //if($('.cdf-wysiwyg--' + theFieldUniqueId).length > 0){
        if ($('.form-group--wysiwyg--' + theFieldUniqueId).length > 0) {
            //                tinymce.init({
            //                    //selector: '.ckeditor.cdf-wysiwyg-tinymce'  // change this value according to your HTML
            //                    selector : 'textarea',
            //                    setup: function (editor) {
            //                        editor.on('change', function () {
            //                            tinymce.triggerSave();
            //                        });
            //                    }
            //                    //mode : "specific_textareas",
            //                    //editor_selector : '.form-group--wysiwyg--' + theFieldUniqueId + ' .ckeditor.cdf-wysiwyg-tinymce',
            //                });
            //$('#cdf-' + theFieldUniqueId ).summernote();

            //return;
            //$('.cdf-wysiwyg--' + theFieldUniqueId).each(function(i) {
            $('.form-group--wysiwyg--' + theFieldUniqueId).find('.cdf-wysiwyg').each(function (i) {
                var name = $(this).attr('name');
                var id = $(this).attr('id');
                if ($(this).hasClass('dynamic-editor')) {
                    if (!$(this).closest('tr').hasClass('repeater-template')) {
                        CKEDITOR.replace(id, DynamicFields.dynamicEditorConfig);
                    }
                } else {
                    CKEDITOR.replace(name);
                }

                if (CKEDITOR.instances) {
                    for (var i in CKEDITOR.instances) {
                        CKEDITOR.instances[i].on('change', function () {
                            CKEDITOR.instances[i].updateElement();
                        });
                    }
                }
            });
        }
    },
    data: function data() {
        return {
            fieldData: {
                value: '',
                type: 'wysiwyg'
            }
        };
    },
    computed: {

        isRequired: function isRequired() {
            if (this.fieldInfo.required == 'true') {
                return true;
            }
            return false;
        },

        parentId: function parentId() {
            if (this.parent != undefined) {
                return this.parent;
            }
            return 0;
        },

        textAreaValue: function textAreaValue() {
            if (this.fieldInfo.field_translation.value != undefined) {
                return this.fieldInfo.field_translation.value;
            }
            return this.fieldData.value;
        },
        /*
         * so we also need a unique id for the field,
         * whether new or current
         */
        fieldUniqueId: function fieldUniqueId() {
            if (this.fieldInfo.field_translation) {
                if (this.fieldInfo.field_translation.unique_id != undefined) {
                    return this.fieldInfo.field_translation.unique_id;
                }
            }

            return DynamicFields.GetUniqueId('field_');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group form-group--wysiwyg--{{ fieldUniqueId }}\">\n    <label for=\"cdf-{{ fieldUniqueId }}\">{{ fieldInfo.name }}</label>\n    <p class=\"text-muted\" v-if=\"fieldInfo.instruction != ''\" v-text=\"fieldInfo.instruction\"></p>\n    <!--<vue-html5-editor  :content=\"textAreaValue\" :height=\"500\"></vue-html5-editor>-->\n    <textarea id=\"cdf-{{ fieldUniqueId }}\" cols=\"50\" rows=\"4\" class=\"cdf-wysiwyg cdf-wysiwyg--{{ theFieldUniqueId }}\" name=\"cdf[{{ fieldUniqueId }}][value]\" :required=\"isRequired\" v-model=\"textAreaValue\">        </textarea>\n    <!--ckeditor-->\n    <!--fieldData.value-->\n\n    <input name=\"cdf[{{ fieldUniqueId }}][type]\" v-model=\"fieldData.type\" value=\"wysiwyg\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][field_id]\" v-model=\"fieldInfo.unique_id\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent]\" v-model=\"parentId\" type=\"hidden\">\n    <input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"parentLayout\" type=\"hidden\">\n    <!--<input name=\"cdf[{{ fieldUniqueId }}][parent_layout]\" v-model=\"fieldInfo.parent_layout\" type=\"hidden\">-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-38d48446", module.exports)
  } else {
    hotAPI.update("_v-38d48446", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],24:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    ready: function ready() {},
    data: function data() {
        return {};
    },
    computed: {
        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        deletedFields: function deletedFields() {
            return this.$store.state.deletedFields;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group form-group--hidden\">\n    <div class=\"form-group__field\" v-for=\"field in deletedFields\">\n        <input name=\"cdf-deleted[{{ field.id }}][unique_id]\" type=\"hidden\" value=\"{{ field.unique_id }}\">\n        <input name=\"cdf-deleted[{{ field.id }}][parent]\" type=\"hidden\" value=\"{{ field.parent }}\">\n        <input name=\"cdf-deleted[{{ field.id }}][parent_layout]\" type=\"hidden\" value=\"{{ field.parent_layout }}\">\n        <input name=\"cdf-deleted[{{ field.id }}][id]\" type=\"hidden\" value=\"{{ field.id }}\">\n        <input name=\"cdf-deleted[{{ field.id }}][type]\" type=\"hidden\" value=\"{{ field.type }}\">\n        <input name=\"cdf-deleted[{{ field.id }}][slug]\" type=\"hidden\" value=\"{{ field.slug }}\">\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-cf2fae24", module.exports)
  } else {
    hotAPI.update("_v-cf2fae24", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],25:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    ready: function ready() {},
    data: function data() {
        return {};
    },
    computed: {
        /*
         * so we also need a unique id for the field,
         * wether new or current
         */
        deletedLayouts: function deletedLayouts() {
            return this.$store.state.deletedLayouts;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group form-group--hidden\">\n    <div class=\"form-group__field\" v-for=\"layout in deletedLayouts\">\n        <input name=\"cdf-deletedLayout[{{ layout.key }}][key]\" type=\"hidden\" value=\"{{ layout.key }}\">\n        <input name=\"cdf-deletedLayout[{{ layout.key }}][name]\" type=\"hidden\" value=\"{{ layout.name }}\">\n        <input name=\"cdf-deletedLayout[{{ layout.key }}][parentId]\" type=\"hidden\" value=\"{{ layout.parentId }}\">\n\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-b5578fb8", module.exports)
  } else {
    hotAPI.update("_v-b5578fb8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: ['field', 'hasParent'],

    ready: function ready() {
        //            if(this.field.layouts){
        //                this.layouts = this.field.layouts;
        //            }
        //this.addNewLayout();
    },

    data: function data() {
        return {
            //layouts   : [],
            //newLayout : {}
        };
    },

    computed: {
        layouts: function layouts() {
            //console.log('layouts?',this.field);
            if (this.field.layouts) {
                return this.field.layouts;
            }

            //                if(this.field.children){
            //                    return this.field.children;
            //                }

            return [];
        }
    },

    methods: {

        /**
         * addNewRegion()
         *
         * append a region
         *
         * @return {Null}
         */
        addNewLayout: function addNewLayout() {

            var uniqueKey = DynamicFields.GetUniqueId();

            //console.log('adding a new region', uniqueKey, this.field.layouts);

            //this.layouts.push({
            this.field.layouts.push({
                key: uniqueKey,
                label: '',
                name: '',
                display: 'table',
                min: '',
                max: '',
                addedNew: true,
                unique_id: this.field.unique_id,

                fields: []
            });
        },

        deleteLayout: function deleteLayout(layout, hasParent, hasParentLayout) {
            //console.log('delete this layout',layout);
            this.field.layouts.$remove(layout);
            if (layout.addedNew == undefined) {
                layout.parentId = hasParent;
                layout.parentLayout = hasParentLayout;
                this.$store.dispatch('updateDeletedLayouts', [layout]);
                this.$dispatch('deleteFields', layout.fields);
                //this.$store.dispatch('updateDeletedFields',deletedFields);
            }
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"field_option field_option_repeater tr\">\n    <div class=\"col-md-3 label-txt td\">\n        <label>Layout</label>\n        <p class=\"description acf-fl-actions\">\n            <!--<a data-name=\"dynamicField-fc-delete\" title=\"Delete Layout\" href=\"#\" >Delete</a>-->\n            <br>\n            <a data-name=\"dynamicField-fc-add\" title=\"Add New Layout\" href=\"#\" @click.prevent=\"addNewLayout\">Add New</a>\n        </p>\n    </div>\n    <div class=\"col-md-9 td\">\n\n        <section v-for=\"(index, layout) in layouts\" track-by=\"$index\" class=\"clear\">\n            <utility-flexible-layouts :has-parent=\"hasParent\" :layout=\"layout\" :index-id=\"index\"></utility-flexible-layouts>\n            <div class=\"col-md-12 group-content\">\n                <div class=\"box box-body\">\n                    <input class=\"form-control slugify items-deleted\" name=\"repeatField[delete]\" type=\"hidden\" value=\"\">\n                    <utility-fields :fields.sync=\"layout.fields\" :has-parent-layout=\"layout.key\" :has-parent=\"hasParent\"></utility-fields>\n                    <a href=\"#\" class=\"btn btn-secondary pull-right\" @click.prevent=\"deleteLayout(layout,hasParent,hasParentLayout)\">Delete Layout</a>\n                </div>\n            </div>\n        </section>\n\n        <br>\n        <br>\n        <a data-name=\"dynamicField-fc-add\" class=\"btn btn-primary pull-right\" title=\"Add New Layout\" href=\"#\" @click.prevent=\"addNewLayout\">Add Layout</a>\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-65a2d914", module.exports)
  } else {
    hotAPI.update("_v-65a2d914", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: ['layout', 'indexId', 'hasParent']

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<ul class=\"dynamicField-fc-meta\">\n    <div class=\"cdf-hidden\">\n        <input class=\"form-control slugify items-deleted\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][key]\" value=\"{{ layout.key }}\" type=\"hidden\">\n        <input class=\"form-control slugify items-deleted\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][delete]\" type=\"hidden\">\n        <!--<input class=\"form-control slugify items-deleted\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][has_new_fields]\" type=\"hidden\" value=\"true\" v-if=\"hasNewFields\">-->\n        <!--<input class=\"form-control slugify items-deleted\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][has_new_fields2]\" type=\"hidden\" value=\"true\" v-if=\"hasNewFields\">-->\n    </div>\n\n\n    <div class=\"form-group form-group--block\">\n        <label class=\"col-sm-2 control-label\" for=\"field[{{ hasParent }}][layouts][{{ indexId }}][label]\" style=\"padding: 0;\">Label</label>\n        <div class=\"col-sm-10\">\n            <input class=\"form-control slugify field-label\" placeholder=\"Field Label\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][label]\" type=\"text\" v-model=\"layout.label\">\n        </div>\n    </div>\n\n    <br>\n    <div class=\"form-group form-group--block\">\n        <label class=\"col-sm-2 control-label\" for=\"field[{{ hasParent }}][layouts][{{ indexId }}][name]\" style=\"padding: 0;\">Name</label>\n        <div class=\"col-sm-10\">\n            <input class=\"form-control slugify field-label\" placeholder=\"Field Label\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][name]\" type=\"text\" v-model=\"layout.name\" value=\"{{ layout.label | slugify }}\">\n        </div>\n    </div>\n\n    <br>\n    <div class=\"row info\">\n        <div class=\"form-group col-sm-4\">\n            <label class=\"col-sm-2 control-label\" for=\"field[{{ hasParent }}][layouts][{{ indexId }}][display]]\" style=\"padding: 0;\">Display</label>\n            <div class=\"col-sm-10\">\n                <select class=\" form-control\" id=\"field[{{ hasParent }}][layouts][indexId][display]\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][display]\" v-model=\"layout.display\">\n                    <option value=\"table\">Table</option>\n                    <option value=\"block\">Block</option>\n                    <option value=\"row\">Row</option>\n                </select>\n            </div>\n        </div>\n\n\n        <div class=\"form-group col-sm-4\">\n            <label class=\"col-sm-2 control-label\" for=\"field[{{ hasParent }}][layouts][{{ indexId }}][min]\" style=\"padding: 0;\">Min</label>\n            <div class=\"col-sm-10\">\n                <input class=\"form-control slugify field-label\" placeholder=\"Field Label\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][min]\" min=\"0\" max=\"10\" v-model=\"layout.min\" type=\"number\">\n            </div>\n        </div>\n\n        <div class=\"form-group col-sm-4\">\n            <label class=\"col-sm-2 control-label\" for=\"field[{{ hasParent }}][layouts][{{ indexId }}][max]\" style=\"padding: 0;\">Max</label>\n            <div class=\"col-sm-10\">\n                <input class=\"form-control slugify field-label\" placeholder=\"Field Label\" name=\"field[{{ hasParent }}][layouts][{{ indexId }}][max]\" min=\"0\" max=\"10\" v-model=\"layout.max\" type=\"number\">\n            </div>\n        </div>\n    </div><!-- row -->\n</ul>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1472f1b8", module.exports)
  } else {
    hotAPI.update("_v-1472f1b8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: ['field', 'hasParent', 'hasParentLayout'],

    computed: {

        fieldId: function fieldId() {
            if (this.field.unique_id) {
                return this.field.unique_id;
            }
            return DynamicFields.GetUniqueId('field_');
        }

        //            /*
        //             * if it has new fields then it is time
        //             * to let saving of fields know this
        //             * when saving form
        //             */
        //            hasNewFields : function(){
        //                //_.find(this.layout.fields, { addedNew : true })
        //                //_.findWhere(this.layout.fields, { addedNew : true })
        //                var isNew = this.$store.state.isNew;
        //                var newFields = _.find(this.layout.fields, { addedNew : true });
        //
        //                //console.log('isNew',isNew,'newFields',newFields);
        ////                if(false === isNew && newFields != undefined){
        ////                    return true;
        ////                }
        ////
        ////                return false;
        //                return false === isNew && newFields != undefined;
        //            }
        //        }
    },

    events: {
        'deleteSubField': function deleteSubField(field) {
            var that = this;
            if (this.field.children != undefined) {
                that.field.children.$remove(field);
            }
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"field_option field_option_repeater tr\">\n    <div class=\"col-md-3 label-txt td\">\n        <label for=\"field[{{ fieldId }}][min]\">Min</label>\n        <p class=\"text-muted\">Minimum fields</p>\n    </div>\n    <div class=\"col-md-9 td\">\n        <input class=\"form-control\" min=\"0\" max=\"20\" name=\"field[{{ fieldId }}][min]\" type=\"number\" v-model=\"field.min\" id=\"field[{{ fieldId }}][min]\">\n    </div>\n</div>\n<div class=\"field_option field_option_repeater tr\">\n    <div class=\"col-md-3 label-txt td\">\n        <label for=\"field[{{ fieldId }}][max]\">Max</label>\n        <p class=\"text-muted\">Maximum fields</p>\n    </div>\n    <div class=\"col-md-9 td\">\n        <input class=\"form-control\" min=\"0\" max=\"20\" name=\"field[{{ fieldId }}][max]\" type=\"number\" v-model=\"field.max\" id=\"field[{{ fieldId }}][max]\">\n    </div>\n</div>\n<div class=\"field_option field_option_repeater tr\">\n    <div class=\"col-md-3 label-txt td\">\n        <!--<h4>Repeater is going here</h4>-->\n    </div>\n    <div class=\"col-md-9 td\">\n        <div class=\"col-md-12 group-content\">\n            <div class=\"box box-body\">\n                <input class=\"form-control slugify items-deleted\" name=\"repeatField[delete]\" type=\"hidden\" value=\"\">\n                <utility-fields :fields=\"field.children\" :has-parent=\"field.unique_id\" :has-parent-layout=\"hasParentLayout\"></utility-fields>\n                <!--:has-parent=\"hasParent\"-->\n            </div>\n        </div>\n    </div>\n</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-657eea92", module.exports)
  } else {
    hotAPI.update("_v-657eea92", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112}],29:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Actions = require('./../../../Store/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    props: ['fields', 'group'],

    ready: function ready() {
        this.$store.dispatch('updateFieldsData', this.fields);
    },

    data: function data() {
        return {
            groupName: {
                name: ''
            }
        };
    },

    computed: {

        theName: function theName() {
            if (this.group.name) {
                return this.group.name;
            }
            return '';
        },

        editOrNew: function editOrNew() {
            var that = this;
            if (this.group.id) {
                that.$store.dispatch('updateIsNew', false);
                return 'Edit';
            }

            that.$store.dispatch('updateIsNew', true);
            return 'Add New';
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"groupFields-dcf\">\n    <div>\n        <h2>{{ editOrNew }} Group Field</h2>\n\n        <validator name=\"validation1\">\n            <div novalidate=\"\">\n                <input class=\"form-control slugify field-label\" v-model=\"group.id\" name=\"group[id]\" type=\"hidden\">\n                <div class=\"form-group\">\n                    <input class=\"form-control slugify\" placeholder=\"Group Name\" v-model=\"group.name\" name=\"group[name]\" type=\"text\" v-validate:name=\"['required']\">\n                </div>\n\n                <input class=\"form-control slugify fields-deleted\" name=\"group[delete]\" type=\"hidden\" value=\"\">\n                <input class=\"form-control slugify repeaters-deleted\" name=\"group[delete_repeater]\" type=\"hidden\" value=\"\">\n                <input class=\"form-control slugify flexiblecontent-deleted\" name=\"group[delete_flexiblecontent]\" type=\"hidden\" value=\"\">\n\n                <div class=\"errors\">\n                    <p v-if=\"$validation1.name.required\">Required name.</p>\n                </div>\n\n                <utility-fields :fields=\"fields\" :has-parent=\"0\" :has-parent-layout=\"0\"></utility-fields>\n                <deleted-fields></deleted-fields>\n                <deleted-layouts></deleted-layouts>\n\n                <div class=\"box-footer\" v-if=\"$validation1.valid\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-flat\">Update</button>\n                </div>\n            </div>\n        </validator>\n\n\n    </div>\n</div>\n\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-329e24cb", module.exports)
  } else {
    hotAPI.update("_v-329e24cb", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./../../../Store/Actions":36,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],30:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Actions = require('./../../../Store/Actions');

exports.default = {

    props: ['fields'],

    ready: function ready() {
        this.$store.dispatch('updateFieldsData', this.fields);
        this.$store.dispatch('showFlexibleContentField', false);
    },

    data: function data() {
        return {
            name: ''
        };
    },

    computed: {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"col-md-110 groupFields-dcf\">\n    <div class=\"box box-body\">\n        <h2>Option Fields</h2>\n\n        <utility-fields :fields=\"fields\" :has-parent=\"0\" :has-parent-layout=\"0\"></utility-fields>\n        <deleted-fields></deleted-fields>\n        <deleted-layouts></deleted-layouts>\n\n        <button type=\"submit\" class=\"btn btn-primary btn-flat\">Update</button>\n    </div>\n</div>\n\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-e398eb6e", module.exports)
  } else {
    hotAPI.update("_v-e398eb6e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./../../../Store/Actions":36,"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],31:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


//import text from './Fields/Text.vue';

exports.default = {

    props: ['field', 'hasParent', 'hasParentLayout', 'indexId'],
    //        props : {
    //            field : 'String',
    //            indexId : 'Number',
    //            hasParent : {
    //                //type : ['String', 'Boolean'],
    //                type    : 'String',
    //                default : 'false'
    //            },
    //            hasParentLayout : {
    //                type    : 'String',
    //                default : 'false'
    //            }
    //        },

    ready: function ready() {
        if (this.field.children == undefined) {
            this.field.children = [];
        }
        if (this.field.layouts == undefined) {
            this.field.layouts = [];
        }
    },

    data: function data() {
        return {
            showFields: false
        };
    },

    components: {
        //text : require('./Fields/Text')
        //text : text
    },

    computed: {

        showFlexibleContentField: function showFlexibleContentField() {
            return this.$store.state.showFlexibleContentField;
        },

        canShowFlexibleContentField: function canShowFlexibleContentField() {

            if (this.showFlexibleContentField === false) {
                return false;
            }
            if (this.hasParentLayout == 0) {
                return true;
            }

            return false;
        },

        isANewField: function isANewField() {
            if (this.hasParentLayout != 0 && this.field.addedNew != undefined) {
                if (this.field.addedNew == true) {
                    return true;
                }
            }

            return false;
        },

        fieldId: function fieldId() {
            if (this.field.unique_id) {
                return this.field.unique_id;
            }
            return DynamicFields.GetUniqueId('field_');
        },

        currentTypeView: function currentTypeView() {
            return this.field.type;
        },

        isOpen: function isOpen() {
            //                if(this.field.addedNew){
            //                    return this.field.addedNew;
            //                }

            return this.showFields;
        }

    },

    events: {
        'deleteFields': function deleteFields(fields) {
            var that = this;
            _.each(fields, function (field) {
                that.deleteField(field);
            });
        }
    },

    methods: {
        /**
         * toggleVisibility()
         *
         * toggle a visibility
         *
         * @return {Null}
         */
        toggleVisibility: function toggleVisibility() {
            this.showFields = !this.showFields;
        },

        /**
         * loopDeleteRepeaterFields()
         *
         * delete a field
         *
         * @param fields
         *
         * @return {Null}
         */
        loopDeleteRepeaterFields: function loopDeleteRepeaterFields(fields) {
            var deletedFields = [];

            var that = this;

            _.each(fields, function (field) {
                deletedFields.push(field);
                if (field.children) {
                    that.loopDeleteRepeaterFields(field.children);
                }
            });

            this.$store.dispatch('updateDeletedFields', deletedFields);
        },

        loopDeleteFlexibleContentFields: function loopDeleteFlexibleContentFields(layouts) {},

        /**
         * deleteField()
         *
         * delete a field. Add it to the deletedFields array in global store
         * Also check if repeater or flexible content and loop through
         * and get the sub fields
         *
         * @param field
         *
         * @return {Null}
         */
        deleteField: function deleteField(field) {
            var that = this;

            //console.log('deleteField',field);
            var deletedFields = [];

            deletedFields.push(field);

            /*
             * if it has children then it is a repeater
             */
            if (field.children && field.addedNew == undefined) {
                //console.log('time to loop this');
                this.loopDeleteRepeaterFields(field.children);
            }

            /*
             * if it has layouts then it is a flexible content
             */
            if (field.layouts && field.addedNew == undefined) {
                //console.log('time to loop this');
                //this.loopDeleteFlexibleContentFields(field.layouts);
                _.each(field.layouts, function (layout) {
                    //deletedFields.push(field);
                    _.each(layout.fields, function (field) {
                        //deletedFields.push(field);
                        that.deleteField(field);
                        //that.$store.dispatch('updateDeletedFields',[field]);
                    });
                });
            }

            /*
             * we do not wish to add new fields created
             * to the delete fields array
             */
            if (field.addedNew == undefined) {
                this.$store.dispatch('updateDeletedFields', deletedFields);
            }
            this.$store.dispatch('removeFromFields', field);

            this.$dispatch('deleteSubField', field);
            this.$dispatch('deleteField', field);
        }
    }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"another-field ui-sortable-handle\" :class=\"{ 'form-open' : isOpen }\" data-type=\"text\" data-id=\"{{ fieldId }}\" data-order-id=\"{{ indexId }}\">\n    <div class=\"field-meta\">\n        <table class=\"table-field table\">\n            <tbody>\n              <tr>\n                <td class=\"field-order col-md-3\">\n                    <span class=\"circle\">{{ indexId }}</span>\n                    <input name=\"field[{{ fieldId }}][order]\" type=\"hidden\" value=\"3\">\n                </td>\n                <td class=\"field-label field-label--actionsOnField col-md-3\">\n                    <a class=\"btn-toggle\" @click=\"toggleVisibility\">{{ field.name }}</a>\n                    <div class=\"row-options\">\n                        <a class=\"btn-toggle\" @click=\"toggleVisibility\">Edit</a>\n                        |\n                        <a class=\"btn-toggle btn-delete-field\" @click=\"deleteField(field)\">Delete</a>\n                    </div>\n                </td>\n                <td class=\"field-name col-md-3\">\n                    {{ field.slug }}\n                </td>\n                <td class=\"field-type col-md-3\">\n                    {{ field.type }}\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"field_form_mask\" :class=\"{ 'is-hidden' : isOpen, 'is-hidden': !isOpen }\">\n        <div class=\"meta\">\n            <input class=\"input-ID\" name=\"field[{{ fieldId }}][id]\" v-model=\"field.id\" type=\"hidden\">\n            <input class=\"input-key\" name=\"field[{{ fieldId }}][key]\" v-model=\"field.unique_id\" type=\"hidden\">\n            <input class=\"input-parent\" name=\"field[{{ fieldId }}][parent]\" v-model=\"hasParent\" type=\"hidden\"> <!-- v-model=\"field.parent\" -->\n            <input class=\"input-save\" name=\"field[{{ fieldId }}][parent_layout]\" v-model=\"hasParentLayout\" type=\"hidden\">\n            <input class=\"input-menu_order\" name=\"field[{{ fieldId }}][order]\" v-model=\"indexId\" type=\"hidden\">\n            <input class=\"input-save\" name=\"field[{{ fieldId }}][save]\" v-model=\"field.save\" type=\"hidden\">\n            <!--<input class=\"input-menu_order\" name=\"field[{{ fieldId }}][order]\" v-model=\"field.order\" type=\"hidden\">-->\n            <!--<input class=\"input-save\" name=\"field[{{ fieldId }}][new_flex_field]\" v-model=\"newFlexField\" v-if=\"false === true\" type=\"hidden\"> --> <!-- isANewField -->\n        </div>\n\n        <div class=\"field_form\">\n            <input class=\"form-control slugify field-label\" name=\"field[{{ fieldId }}][id]\" type=\"hidden\" v-model=\"field.id\">\n            <section class=\"table-field table\">\n                  <div class=\"field-label tr\">\n                    <div class=\"col-md-3 label-txt td\">\n                        <label for=\"field[{{ fieldId }}][name]\">Field Label</label>\n                        <p class=\"text-muted\">This is the name which will appear on the EDIT page</p>\n                    </div>\n                    <div class=\"col-md-9 td\">\n                        <input class=\"form-control slugify field-label\" placeholder=\"Field Label\" name=\"field[{{ fieldId }}][name]\" type=\"text\" v-model=\"field.name\" id=\"field[{{ fieldId }}][name]\">\n                    </div>\n                  </div>\n                  <div class=\"field-name tr\">\n                      <div class=\"col-md-3 label-txt td\">\n                          <label for=\"field[{{ fieldId }}][slug]\">Field Name</label>\n                          <p class=\"text-muted\">Single word, no spaces. Underscores and dashes allowed</p>\n                      </div>\n                      <div class=\"col-md-9 td\">\n                          <input class=\"form-control slugify field-name\" placeholder=\"Field Name\" name=\"field[{{ fieldId }}][slug]\" type=\"text\" value=\"{{ field.name | slugify }}\" v-model=\"field.slug\" id=\"field[{{ fieldId }}]][slug]\">\n                      </div>\n                  </div>\n                  <div class=\"tr\">\n                      <div class=\"col-md-3 label-txt td\">\n                          <label for=\"field[{{ fieldId }}][instruction]\">Field Instructions</label>\n                          <p class=\"text-muted\">Instructions for authors. Shown when submitting data</p>\n                      </div>\n                      <div class=\"col-md-9 td\">\n                          <input class=\"form-control slugify field-label\" placeholder=\"Field Instructions\" name=\"field[{{ fieldId }}][instruction]\" v-model=\"field.instruction\" type=\"text\" id=\"field[{{ fieldId }}][instruction]\">\n                      </div>\n                  </div>\n                  <div class=\"tr\">\n                      <div class=\"col-md-3 label-txt td\">\n                          <label for=\"field[{{ fieldId }}][type]\">Type</label>\n                          <p class=\"text-muted\"></p>\n                      </div>\n                      <div class=\"col-md-9 td\">\n                          <select class=\"field-type form-control\" v-model=\"field.type\" id=\"field[{{ fieldId }}][type]\" name=\"field[{{ fieldId }}][type]\">\n                              <optgroup label=\"Basic\">\n                                  <option value=\"text\">Text</option>\n                                  <option value=\"textarea\">TextArea</option>\n                                  <option value=\"number\">Number</option>\n                                  <option value=\"email\">E-mail</option>\n                                  <option value=\"url\">URL</option>\n                                  <option value=\"password\">Password</option>\n                              </optgroup>\n                              <optgroup label=\"Content\">\n                                  <option value=\"wysiwyg\">Wysiwyg Editor</option>\n                                  <!--<option value=\"file\">File</option>-->\n                                  <option value=\"image\">Image</option>\n                              </optgroup>\n                              <optgroup label=\"Choice\">\n                                  <option value=\"checkbox\">Checkbox</option>\n                                  <option value=\"select\">Select</option>\n                                  <option value=\"radio\">Radio</option>\n                              </optgroup>\n                              <optgroup label=\"Picker\">\n                                  <option value=\"datepicker\">Datepicker</option>\n                                  <option value=\"colorPicker\">Color Picker</option>\n                              </optgroup>\n                              <optgroup label=\"Custom\">\n                                  <option value=\"areaOfFocus\">Area Of Focus</option>\n                              </optgroup>\n                              <optgroup label=\"Relationship\">\n                                  <option value=\"linkObject\">Link Object</option>\n                                  <option value=\"link\">Link</option>\n                                  <option value=\"user\">User</option>\n                              </optgroup>\n                              <optgroup label=\"Layout\">\n                                  <option value=\"repeater\">Repeater</option>\n                                  <option value=\"flexiblecontent\" v-if=\"canShowFlexibleContentField\">Flexible content</option>\n                              </optgroup>\n                          </select>\n                      </div>\n                  </div>\n                  <div class=\"tr\">\n                      <div class=\"col-md-3 label-txt td\">\n                          <label for=\"field[{{ fieldId }}][required]\">Required?</label>\n                          <p class=\"text-muted\"></p>\n                      </div>\n                      <div class=\"col-md-9 td\">\n                          <input name=\"field[{{ fieldId }}][required]\" type=\"radio\" v-model=\"field.required\" value=\"true\" id=\"field[{{ fieldId }}][required]\"><label>Yes</label>\n                          <input name=\"field[{{ fieldId }}][required]\" type=\"radio\" value=\"false\" v-model=\"field.required\" id=\"field[{{ fieldId }}][required]\"><label>No</label>\n                      </div>\n                  </div>\n\n                  <!-- Start of text block -->\n                  <section v-if=\"field.type == 'text' || field.type == 'url' || field.type == 'password' || field.type == 'email' || field.type == 'datepicker' || field.type == 'areaOfFocus'\" class=\"tbody\">\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][default_value]\">Default Value</label>\n                            <p class=\"text-muted\">Appears when creating a new page</p>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <input class=\"form-control\" placeholder=\"Default Value\" name=\"field[{{ fieldId }}][default_value]\" v-model=\"field.default_value\" type=\"text\" id=\"field[{{ fieldId }}][default_value]\">\n                        </div>\n                    </div>\n\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][placeholder]\">Placeholder Text</label>\n                            <p class=\"text-muted\">Appears within the input</p>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <input class=\"form-control\" placeholder=\"Placeholder Text\" name=\"field[{{ fieldId }}][placeholder]\" type=\"text\" v-model=\"field.placeholder\" id=\"field[{{ fieldId }}][placeholder]\">\n                        </div>\n                    </div>\n\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][limit]\">Character Limit</label>\n                            <p class=\"text-muted\">Leave blank for no limit</p>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <input class=\"form-control\" placeholder=\"Character Limit\" name=\"field[{{ fieldId }}][limit]\" v-model=\"field.limit\" type=\"number\" id=\"field[{{ fieldId }}][limit]\">\n                        </div>\n                    </div>\n                  </section>\n                  <!-- end of text block -->\n\n                <!-- Start of relationship blocks -->\n                <section v-if=\"field.type == 'linkObject' || field.type == 'link' || field.type == 'user'\" class=\"tbody\">\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][default_value]\">Default Value</label>\n                            <p class=\"text-muted\">Appears when creating a new page</p>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <input class=\"form-control\" placeholder=\"Default Value\" name=\"field[{{ fieldId }}][default_value]\" v-model=\"field.default_value\" type=\"text\" id=\"field[{{ fieldId }}][default_value]\">\n                        </div>\n                    </div>\n\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][multiple]\">Select multiple values?</label>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <label>\n                                <input class=\"form-control\" name=\"field[{{ fieldId }}][multiple]\" v-model=\"field.multiple\" type=\"radio\" value=\"yes\" id=\"field[{{ fieldId }}][multiple]\">\n                                Yes\n                            </label>\n                            <label>\n                                <input class=\"form-control\" name=\"field[{{ fieldId }}][multiple]\" v-model=\"field.multiple\" type=\"radio\" value=\"no\" id=\"field[{{ fieldId }}][multiple]\">\n                                No\n                            </label>\n                        </div>\n                    </div>\n                </section>\n                <!-- end of text block -->\n\n\n                <!-- Start of checkbox block -->\n                <section v-if=\"field.type == 'checkbox' || field.type == 'select' || field.type == 'radio'\" class=\"tbody\">\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][default_value]\">Default Value</label>\n                            <p class=\"text-muted\">Enter each default value on a new line</p>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <input class=\"form-control\" placeholder=\"Default Value\" name=\"field[{{ fieldId }}][default_value]\" v-model=\"field.default_value\" type=\"text\" value=\"\" id=\"field[{{ fieldId }}][default_value]\">\n                        </div>\n                    </div>\n\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][choices]\">Choices</label>\n                            <p class=\"text-muted\">\n                              Enter each choice on a new line.\n                              <br>\n                              For more control, you may specify both a value and label like this:\n                              <br>\n                              red : Red\n                            </p>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                            <textarea class=\"form-control\" placeholder=\"Placeholder Text\" rows=\"10\" name=\"field[{{ fieldId }}][choices]\" type=\"text\" v-model=\"field.choices\" id=\"field[{{ fieldId }}][choices]\">                                </textarea>\n                        </div>\n                    </div>\n\n                    <div class=\"field_option field_option_text tr\">\n                        <div class=\"col-md-3 label-txt td\">\n                            <label for=\"field[{{ fieldId }}][layout]\">Layout</label>\n                        </div>\n                        <div class=\"col-md-9 td\">\n                          <label>\n                            <input class=\"form-control\" name=\"field[{{ fieldId }}][layout]\" v-model=\"field.layout\" type=\"radio\" value=\"vertical\" id=\"field[{{ fieldId }}][layout]\">\n                            Vertical\n                          </label>\n                          <label>\n                            <input class=\"form-control\" name=\"field[{{ fieldId }}][layout]\" v-model=\"field.layout\" type=\"radio\" value=\"horizontal\" id=\"field[{{ fieldId }}][layout]\">\n                            Horizontal\n                          </label>\n                        </div>\n                    </div>\n                </section>\n                <!-- end of text block -->\n\n\n                  <!-- start of number block -->\n                  <section v-if=\"field.type == 'number'\" class=\"tbody\">\n\t\t\t              <div class=\"field_option field_option_number tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][placeholder]\">Placeholder Text</label>\n                    \t\t<p class=\"text-muted\">Appears within the input</p>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control\" placeholder=\"Placeholder Text\" name=\"field[{{ fieldId }}][placeholder]\" type=\"text\" v-model=\"field.placeholder\" id=\"field[{{ fieldId }}][placeholder]\">\n                    \t</div>\n                    </div>\n                    <div class=\"field_option field_option_number tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][default_value]\">Default Value</label>\n                    \t\t<p class=\"text-muted\">Appears when creating a new page</p>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control\" placeholder=\"Default Value\" name=\"field[{{ fieldId }}][default_value]\" type=\"number\" v-model=\"field.default_value\" id=\"field[{{ fieldId }}][default_value]\">\n                    \t</div>\n                    </div>\n                    <div class=\"field_option field_option_number tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][min_value]\">Minimum Value</label>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control\" placeholder=\"Minimum Value\" name=\"field[{{ fieldId }}][min_value]\" type=\"number\" v-model=\"field.min_value\" id=\"field[{{ fieldId }}][min_value]\">\n                    \t</div>\n                    </div>\n                    <div class=\"field_option field_option_number tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][max_value]\">Maximum Value</label>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control slugify\" placeholder=\"Maximum Value\" name=\"field[{{ fieldId }}][max_value]\" type=\"number\" v-model=\"field.max_value\" id=\"field[{{ fieldId }}][max_value]\">\n                    \t</div>\n                    </div>\n                  </section>\n                  <!-- end of number block -->\n\n                  <!-- start of textarea block -->\n                  <section v-if=\"field.type == 'textarea'\" class=\"tbody\">\n                    <div class=\"field_option field_option_textarea tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][default_value]\">Default Value</label>\n                    \t\t<p class=\"text-muted\">Appears when creating a new post</p>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<textarea class=\"form-control\" placeholder=\"Default Value\" name=\"field[{{ fieldId }}][default_value]\" cols=\"50\" rows=\"10\" id=\"field[{{ fieldId }}][default_value]\"></textarea>\n                    \t</div>\n                    </div>\n                    <div class=\"field_option field_option_textarea tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][placeholder]\">Placeholder</label>\n                    \t\t<p class=\"text-muted\">Appears when creating a new post</p>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<textarea class=\"form-control\" placeholder=\"Placeholder Text\" name=\"field[{{ fieldId }}][placeholder]\" cols=\"50\" rows=\"10\" id=\"field[{{ fieldId }}][placeholder]\"></textarea>\n                    \t</div>\n                    </div>\n                    <div class=\"field_option field_option_textarea tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][rows]\">Rows</label>\n                    \t\t<p class=\"text-muted\">Sets the textarea height</p>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control slugify\" placeholder=\"Rows\" name=\"field[{{ fieldId }}][rows]\" type=\"number\" value=\"\" id=\"field[{{ fieldId }}][rows]\">\n                    \t</div>\n                    </div>\n                  </section>\n                  <!-- end of textarea block -->\n\n                  <!-- start of wysiwyg block -->\n                  <section v-if=\"field.type == 'wysiwyg'\" class=\"tbody\">\n                    <div class=\"field_option field_option_wysiwyg tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][default_value]\">Default Value</label>\n                    \t\t<p class=\"text-muted\">Appears when creating a new page</p>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<textarea class=\"form-control slugify\" placeholder=\"Default Value\" name=\"field[{{ fieldId }}][default_value]\" cols=\"50\" rows=\"10\" id=\"field[{{ fieldId }}][default_value]\" :disabled=\"field.type != 'wysiwyg'\"></textarea>\n                    \t</div>\n                    </div>\n                    <div class=\"field_option field_option_wysiwyg tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][toolbar]\">ToolBar</label>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control slugify\" placeholder=\"ToolBar\" name=\"field[{{ fieldId }}][toolbar]\" type=\"text\" value=\"basic\" id=\"field[{{ fieldId }}][toolbar]\" :disabled=\"field.type != 'wysiwyg'\">\n                    \t</div>\n                    </div>\n                  </section>\n                  <!-- end of wysiwyg block -->\n\n                  <!-- start of file block -->\n                  <section v-if=\"field.type == 'image' || field.type == 'file'\" class=\"tbody\">\n                    <div class=\"field_option field_option_file tr\">\n                    \t<div class=\"col-md-3 label-txt td\">\n                    \t\t<label for=\"field[{{ fieldId }}][file_type]\">File type</label>\n                    \t</div>\n                    \t<div class=\"col-md-9 td\">\n                    \t\t<input class=\"form-control slugify\" placeholder=\"File type\" name=\"field[{{ fieldId }}][file_type]\" type=\"text\" value=\"\" id=\"field[{{ fieldId }}][file_type]\">\n                    \t</div>\n                    </div>\n                  </section>\n                  <!-- end of file block -->\n\n                <!-- start of repeater block -->\n                <utility-repeater :field=\"field\" :has-parent=\"field.unique_id\" v-if=\"field.type == 'repeater'\"></utility-repeater>\n                <!-- end of repeater block -->\n\n                <!-- start of flexiblecontent block -->\n                <utility-flexible-content :field=\"field\" :has-parent=\"field.unique_id\" v-if=\"field.type == 'flexiblecontent'\"></utility-flexible-content>\n                <!-- end of flexiblecontent block -->\n\n                  <!-- field_save -->\n                  <div class=\"field_save\">\n                      <div class=\"col-md-3 label-txt td\"></div>\n                      <div class=\"col-md-9 td\">\n                          <a class=\"btn btn-default btn-toggle\" title=\"Close Field\" @click=\"this.showFields = false;\">Close Field</a>\n                      </div>\n                  </div>\n            </section>\n            <!-- field_option start - default with option type is text-->\n        </div>\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-584f3ee2", module.exports)
  } else {
    hotAPI.update("_v-584f3ee2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],32:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: ['fields', 'hasParent', 'hasParentLayout'],

    data: function data() {
        return {
            //fields : [],
            newField: {}
        };
    },

    events: {
        deleteField: function deleteField(field) {
            this.fields.$remove(field);
        },

        'deleteSubFieldFlex': function deleteSubFieldFlex(field) {
            var that = this;
            if (this.field.children != undefined) {
                that.field.children.$remove(field);
            }
        }
    },

    computed: {
        //            fieldsOld : function(){
        //                return this.$store.state.fields;
        //            }
    },

    methods: {

        /**
         * onStart()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onStart: function onStart(evt) {
            console.log('onStart', evt.item.firstElementChild, evt.item.firstElementChild.id);
            //dcf-layoutBlocks__block--
            //DynamicFields.destroyEditors('#' + evt.item.firstElementChild.id);
        },

        /**
         * onUpdate()
         *
         * related to reordering flexible layout regions
         *
         * @return {Null}
         */
        onUpdate: function onUpdate(evt) {
            var itemEl = evt.item;
            console.log('onUpdate', evt, itemEl);
            var vOldIndex = evt.oldIndex;
            var vNewIndex = evt.newIndex;
            //this.changeArrayPositionOfLayout(evt);
            this.fields.splice(vNewIndex, 0, this.fields.splice(vOldIndex, 1)[0]);
            return true;
        },

        /**
         * appendField()
         *
         * append a field
         *
         * @return {Null}
         */
        appendField: function appendField(e) {
            //console.log('add field', this.fields);

            e.preventDefault();

            //if( ! this.newField ) return;

            //alert('adding a task');
            //alert(this.newTask);

            this.fields.push({
                id: this.fields.length + 1,
                name: '',
                slug: '',
                instruction: '',
                type: 'text',
                unique_id: DynamicFields.GetUniqueId('field_'),
                required: false,
                default_value: '',
                placeholder: '',
                parent: 0,
                limit: null,
                order: 0,
                save: true,
                addedNew: true,
                max: null,
                min: null,
                choices: '',
                layout: 'vertical',
                children: [],
                layouts: []
            });
            // TODO : currently have all fields in VUE with layout attached, in future workout better way to discern whether children or layouts

            //this.newField = {};
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group field_infor\">\n    <table class=\"table-field\">\n        <thead>\n        <tr>\n            <th class=\"col-md-3\">Order</th>\n            <th class=\"col-md-3\">Label</th>\n            <th class=\"col-md-3\">Name</th>\n            <th class=\"col-md-3\">Type</th>\n        </tr>\n        </thead>\n    </table>\n\n    <!--v-sortable=\"{ handle: '.ui-sortable-handle', onEnd: onUpdate, animation: 150 }\"-->\n    <div class=\"field-data sortable\" v-sortable=\"{ handle: '.another-field', filter: '.field_form_mask .field-label--actionsOnField', onEnd: onUpdate, onStart: onStart, animation: 150 }\">\n        <utility-field :field=\"field\" :index-id=\"index\" :has-parent-layout=\"hasParentLayout\" :has-parent=\"hasParent\" v-for=\"(index, field) in fields\"></utility-field>\n    </div>\n\n    <!-- fields container all field clone-->\n    <div class=\"table_footer\">\n        <a class=\"btn btn-primary btn-add-field\" @click=\"appendField\">\n            <i class=\"fa fa-pencil\"></i> + Add Field\n        </a>\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-957782fe", module.exports)
  } else {
    hotAPI.update("_v-957782fe", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":117,"vue-hot-reload-api":112,"vueify/lib/insert-css":118}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // model -> view
    // formats the value when updating the input element.
    read: function read(value) {
        console.log('jsoninline read', value);
        return JSON.stringify(value);
    },
    // view -> model
    // formats the value when writing to the data.
    write: function write(value, oldVal) {
        console.log('jsoninline write', value, oldVal);
        return JSON.stringify(value);
    }
};

},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    return value.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

;

},{}],35:[function(require,module,exports){
'use strict';

/*
 *  GetUniqueId
 *
 *  This function will return a unique string ID
 *
 *  @type	function
 *  @date	8/09/2014
 *  @since	5.0.0
 *
 *  @param	prefix (string)
 *  @param	more_entropy (boolean)
 *  @return	(string)
 */

module.exports = function (prefix, more_entropy) {

    //function GetUniqueId(prefix, more_entropy){

    // + original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // + revised by: Kankrelune (http://www.webfaktory.info/)
    // % note 1: Uses an internal counter (in php_js global) to avoid collision
    // * example 1: uniqid();
    // * returns 1: 'a30285b160c14'
    // * example 2: uniqid('foo');
    // * returns 2: 'fooa30285b1cd361'
    // * example 3: uniqid('bar', true);
    // * returns 3: 'bara20285b23dfd1.31879087'
    if (typeof prefix === 'undefined') {
        prefix = "";
    }

    var retId;
    var formatSeed = function formatSeed(seed, reqWidth) {
        seed = parseInt(seed, 10).toString(16); // to hex str
        if (reqWidth < seed.length) {
            // so long we split
            return seed.slice(seed.length - reqWidth);
        }
        if (reqWidth > seed.length) {
            // so short we pad
            return Array(1 + (reqWidth - seed.length)).join('0') + seed;
        }
        return seed;
    };

    // BEGIN REDUNDANT
    if (!this.php_js) {
        this.php_js = {};
    }
    // END REDUNDANT
    if (!this.php_js.uniqidSeed) {
        // init seed with big random int
        this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    this.php_js.uniqidSeed++;

    retId = prefix; // start with prefix, add current milliseconds hex string
    retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
    retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
    if (more_entropy) {
        // for more entropy we add a float lower to 10
        retId += (Math.random() * 10).toFixed(8).toString();
    }

    return retId;
};

},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increment = increment;
exports.incrementBy = incrementBy;
exports.updateFieldsData = updateFieldsData;
exports.removeFromFields = removeFromFields;
exports.updateDeletedFields = updateDeletedFields;
exports.updateDeletedLayouts = updateDeletedLayouts;
exports.updateIsNew = updateIsNew;
exports.showFlexibleContentField = showFlexibleContentField;
function increment(store) {
    store.dispatch('INCREMENT');
}

// an action with additional arguments
// with ES2015 argument destructuring
function incrementBy(_ref, amount) {
    var dispatch = _ref.dispatch;

    dispatch('INCREMENT', amount);
}

/**
 * updateFieldsData()
 *
 * save the object data from the server to the store
 *
 * @param {Object} data
 *
 * @return {Null}
 */
function updateFieldsData(store, data) {
    //console.log('data ', data);
    store.dispatch('updateFieldsData', data);
}

/**
 * removeFromFields()
 *
 * save the object data from the server to the store
 *
 * @param {Object} data
 *
 * @return {Null}
 */
function removeFromFields(store, data) {
    //console.log('data ', data);
    store.dispatch('removeFromFields', data);
}

/**
 * updateDeletedFields()
 *
 * delete these fields
 *
 * @param {Object} data
 *
 * @return {Null}
 */
function updateDeletedFields(store, data) {
    //console.log('updateDeletedFields ', data);
    store.dispatch('updateDeletedFields', data);
}

/**
 * updateDeletedLayouts()
 *
 * delete these layouts
 *
 * @param {Object} data
 *
 * @return {Null}
 */
function updateDeletedLayouts(store, data) {
    //console.log('updateDeletedLayouts ', data);
    store.dispatch('updateDeletedLayouts', data);
}

/**
 * updateIsNew()
 *
 * udpate is new property
 *
 * @param {Object} data
 *
 * @return {Null}
 */
function updateIsNew(store, data) {
    store.dispatch('updateIsNew', data);
}

/**
 * showFlexibleContentField()
 *
 * @param {Object} data
 *
 * @return {Null}
 */
function showFlexibleContentField(store, data) {
    store.dispatch('showFlexibleContentField', data);
}

},{}],37:[function(require,module,exports){
"use strict";

/*
 * the god damn mutations to change the stores state
 */
module.exports = {

    /**
     * INCREMENT()
     *
     * add to the count
     *
     * @param {Object} state
     *
     * @return {Null}
     */
    INCREMENT: function INCREMENT(state) {
        state.count++;
    },

    /**
     * updateFieldsData()
     *
     * update fields data
     *
     * @param {Object} state
     * @param {Object} fields
     *
     * @return {Null}
     */
    updateFieldsData: function updateFieldsData(state, fields) {
        //console.log('fields mutation', fields);
        state.fields = fields;
    },


    /**
     * updateDeletedFields()
     *
     * update deleted fields data
     *
     * @param {Object} state
     * @param {Object} fields
     *
     * @return {Null}
     */
    updateDeletedFields: function updateDeletedFields(state, fields) {
        //console.log('updateDeletedFields ', fields);
        _.each(fields, function (field) {
            var result = _.findWhere(state.deletedFields, field);
            //console.log('result????',result, fields, field);
            if (undefined === result) {
                state.deletedFields.push(field);
            }
        });
    },


    /**
     * updateDeletedLayouts()
     *
     * update deleted fields data
     *
     * @param {Object} state
     * @param {Object} layouts
     *
     * @return {Null}
     */
    updateDeletedLayouts: function updateDeletedLayouts(state, layouts) {
        //console.log('updateDeletedLayouts ', layouts);
        _.each(layouts, function (layout) {
            var result = _.findWhere(state.deletedLayouts, layout);
            //console.log('result????',result);
            if (undefined === result) {
                state.deletedLayouts.push(layout);
            }
        });
    },


    /**
     * removeFromFields()
     *
     * remove a field from fields
     *
     * @param {Object} state
     * @param {Object} field
     *
     * @return {Null}
     */
    removeFromFields: function removeFromFields(state, field) {
        state.fields.$remove(field);
    },


    /**
     * updateIsNew()
     *
     * update the isNew property
     *
     * @param {Object} state
     * @param {Object} value
     *
     * @return {Null}
     */
    updateIsNew: function updateIsNew(state, value) {
        state.isNew = value;
    },


    /**
     * showFlexibleContentField()
     *
     * show flexible content field
     *
     * @param {Object} state
     * @param {Object} value
     *
     * @return {Null}
     */
    showFlexibleContentField: function showFlexibleContentField(state, value) {
        state.showFlexibleContentField = value;
    }
};

},{}],38:[function(require,module,exports){
"use strict";

/*
 * the god damn store to manage data and state
 */
module.exports = {
    count: 0,
    fields: [],
    deletedFields: [],
    deletedLayouts: [],
    isNew: false,
    showFlexibleContentField: true
};

},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Actions = require('./Store/Actions');

var _vueSelect = require('vue-select');

var _vueSelect2 = _interopRequireDefault(_vueSelect);

var _vueColor = require('vue-color');

var _Groups = require('./DynamicFields/Utility/Groups/Groups.vue');

var _Groups2 = _interopRequireDefault(_Groups);

var _Options = require('./DynamicFields/Utility/Options/Options.vue');

var _Options2 = _interopRequireDefault(_Options);

var _DeletedFields = require('./DynamicFields/Utility/DeletedFields.vue');

var _DeletedFields2 = _interopRequireDefault(_DeletedFields);

var _DeletedLayouts = require('./DynamicFields/Utility/DeletedLayouts.vue');

var _DeletedLayouts2 = _interopRequireDefault(_DeletedLayouts);

var _UtilityFields = require('./DynamicFields/Utility/UtilityFields.vue');

var _UtilityFields2 = _interopRequireDefault(_UtilityFields);

var _UtilityField = require('./DynamicFields/Utility/UtilityField.vue');

var _UtilityField2 = _interopRequireDefault(_UtilityField);

var _UtilityRepeater = require('./DynamicFields/Utility/Fields/UtilityRepeater.vue');

var _UtilityRepeater2 = _interopRequireDefault(_UtilityRepeater);

var _UtilityFlexibleContent = require('./DynamicFields/Utility/Fields/UtilityFlexibleContent.vue');

var _UtilityFlexibleContent2 = _interopRequireDefault(_UtilityFlexibleContent);

var _UtilityFlexibleLayouts = require('./DynamicFields/Utility/Fields/UtilityFlexibleLayouts.vue');

var _UtilityFlexibleLayouts2 = _interopRequireDefault(_UtilityFlexibleLayouts);

var _Entities = require('./DynamicFields/Entities/Entities.vue');

var _Entities2 = _interopRequireDefault(_Entities);

var _EntityField = require('./DynamicFields/Entities/EntityField.vue');

var _EntityField2 = _interopRequireDefault(_EntityField);

var _DeletedEntities = require('./DynamicFields/Entities/DeletedEntities.vue');

var _DeletedEntities2 = _interopRequireDefault(_DeletedEntities);

var _TextField = require('./DynamicFields/Entities/Fields/TextField.vue');

var _TextField2 = _interopRequireDefault(_TextField);

var _UrlField = require('./DynamicFields/Entities/Fields/UrlField.vue');

var _UrlField2 = _interopRequireDefault(_UrlField);

var _PasswordField = require('./DynamicFields/Entities/Fields/PasswordField.vue');

var _PasswordField2 = _interopRequireDefault(_PasswordField);

var _EmailField = require('./DynamicFields/Entities/Fields/EmailField.vue');

var _EmailField2 = _interopRequireDefault(_EmailField);

var _NumberField = require('./DynamicFields/Entities/Fields/NumberField.vue');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _TextareaField = require('./DynamicFields/Entities/Fields/TextareaField.vue');

var _TextareaField2 = _interopRequireDefault(_TextareaField);

var _WysiwygField = require('./DynamicFields/Entities/Fields/WysiwygField.vue');

var _WysiwygField2 = _interopRequireDefault(_WysiwygField);

var _ImageField = require('./DynamicFields/Entities/Fields/ImageField.vue');

var _ImageField2 = _interopRequireDefault(_ImageField);

var _LinkField = require('./DynamicFields/Entities/Fields/LinkField.vue');

var _LinkField2 = _interopRequireDefault(_LinkField);

var _LinkObjectField = require('./DynamicFields/Entities/Fields/LinkObjectField.vue');

var _LinkObjectField2 = _interopRequireDefault(_LinkObjectField);

var _UserField = require('./DynamicFields/Entities/Fields/UserField.vue');

var _UserField2 = _interopRequireDefault(_UserField);

var _CheckboxField = require('./DynamicFields/Entities/Fields/CheckboxField.vue');

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

var _RadioField = require('./DynamicFields/Entities/Fields/RadioField.vue');

var _RadioField2 = _interopRequireDefault(_RadioField);

var _SelectField = require('./DynamicFields/Entities/Fields/SelectField.vue');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _DatePicker = require('./DynamicFields/Entities/Fields/DatePicker.vue');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _ColorPickerField = require('./DynamicFields/Entities/Fields/ColorPickerField.vue');

var _ColorPickerField2 = _interopRequireDefault(_ColorPickerField);

var _AreaOfFocusField = require('./DynamicFields/Entities/Fields/AreaOfFocusField.vue');

var _AreaOfFocusField2 = _interopRequireDefault(_AreaOfFocusField);

var _RepeaterField = require('./DynamicFields/Entities/Fields/RepeaterField.vue');

var _RepeaterField2 = _interopRequireDefault(_RepeaterField);

var _FlexibleContentField = require('./DynamicFields/Entities/Fields/FlexibleContentField.vue');

var _FlexibleContentField2 = _interopRequireDefault(_FlexibleContentField);

var _FlexibleContentLayoutBlock = require('./DynamicFields/Entities/Fields/FlexibleContentLayoutBlock.vue');

var _FlexibleContentLayoutBlock2 = _interopRequireDefault(_FlexibleContentLayoutBlock);

var _jsoninline = require('./Filters/jsoninline');

var _jsoninline2 = _interopRequireDefault(_jsoninline);

var _slugify = require('./Filters/slugify');

var _slugify2 = _interopRequireDefault(_slugify);

var _GetUniqueId = require('./Helpers/GetUniqueId');

var _GetUniqueId2 = _interopRequireDefault(_GetUniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Load Vue.js.
 *
 * then attach globally
 */
var Vue = require('Vue');
window.Vue = Vue;

/*
 * load validator, resource and vuex and attach to vue
 */
var VueValidator = require('vue-validator');
var VueResource = require('vue-resource');
var Vuex = require('vuex');
var Sortable = require('vue-sortable');
//var editor       = require("vue-html5-editor");

Vue.use(VueValidator);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Sortable);
//Vue.use(Editor,{
//    //global component name
//    name: "vue-html5-editor"
//});

require('vue-color');
// require('tinymce');


window.Sortable = require('sortablejs');
/*
 * Load Underscore.js, used for map / reduce on arrays.
 */
window._ = require('underscore');
/*
 * Load jQuery and Bootstrap jQuery, used for front-end interaction.
 */
//window.$ = window.jQuery = require('jquery');
var State = require('./Store/Store');
var Mutations = require('./Store/Mutations');

//require('./Store/Actions');


/*
 * Vuex to manage some global state
 * and mutations to use to change
 * the store
 */
var store = new Vuex.Store({
  state: State,
  mutations: Mutations
});
exports.default = store;

/*
 * import vue select
 */


/*
 * import color picker
 */
//import { Sketch } from 'vue-color'


/*
 * just globally import our
 * components for now.
 *
 * first batch of components for Group fields page
 */


/*
 * Entity page Components
 */

/*
 * once imported attach all
 * components to vue globally
 */
Vue.component('v-select', _vueSelect2.default);
Vue.component('ColorPicker', _vueColor.Chrome);

Vue.component('Groups', _Groups2.default);
Vue.component('Options', _Options2.default);

Vue.component('DeletedFields', _DeletedFields2.default);
Vue.component('DeletedLayouts', _DeletedLayouts2.default);

Vue.component('UtilityFields', _UtilityFields2.default);
Vue.component('UtilityField', _UtilityField2.default);
Vue.component('UtilityRepeater', _UtilityRepeater2.default);
Vue.component('UtilityFlexibleContent', _UtilityFlexibleContent2.default);
Vue.component('UtilityFlexibleLayouts', _UtilityFlexibleLayouts2.default);

Vue.component('Entities', _Entities2.default);
Vue.component('EntityField', _EntityField2.default);
Vue.component('DeletedEntities', _DeletedEntities2.default);

Vue.component('TextField', _TextField2.default);
Vue.component('UrlField', _UrlField2.default);
Vue.component('PasswordField', _PasswordField2.default);
Vue.component('EmailField', _EmailField2.default);
Vue.component('NumberField', _NumberField2.default);
Vue.component('DatePickerField', _DatePicker2.default);

Vue.component('TextareaField', _TextareaField2.default);
Vue.component('WysiwygField', _WysiwygField2.default);
Vue.component('ImageField', _ImageField2.default);

Vue.component('LinkField', _LinkField2.default);
Vue.component('LinkObjectField', _LinkObjectField2.default);
Vue.component('UserField', _UserField2.default);

Vue.component('CheckboxField', _CheckboxField2.default);
Vue.component('RadioField', _RadioField2.default);
Vue.component('SelectField', _SelectField2.default);

Vue.component('ColorPickerField', _ColorPickerField2.default);
Vue.component('AreaOfFocusField', _AreaOfFocusField2.default);

Vue.component('RepeaterField', _RepeaterField2.default);
Vue.component('FlexibleContentField', _FlexibleContentField2.default);
Vue.component('FlexibleContentLayoutBlock', _FlexibleContentLayoutBlock2.default);

/*
 * Vue filters to add
 */

Vue.filter('jsoninline', _jsoninline2.default);
Vue.filter('slugify', _slugify2.default);
/*
 * the global DynamicFields object
 */
var DynamicFields = {};

DynamicFields.GetUniqueId = _GetUniqueId2.default;
var dynamicEditorConfig = {
  toolbar: [['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'], ['Link', 'Unlink', 'Image', 'Flash', 'Table', 'PageBreak', 'Iframe'], ['NumberedList', 'BulletedList', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['Maximize'], ['Format'], ['Source']],
  coreStyles_bold: { element: 'b', overrides: 'strong' },
  format_tags: 'p;h1;h2;h3;h4;h5;h6;pre'

};
DynamicFields.dynamicEditorConfig = dynamicEditorConfig;

/*
 * We can exploit the JSON library for a rather fast way of deep-cloning objects
 */
DynamicFields.clone = function (object) {
  return JSON.parse(JSON.stringify(object));
};
/*
 * Global helper to destroy all the Ckeditors
 */
DynamicFields.destroyEditors = function (layoutIdName) {
  $(layoutIdName).find('.cdf-wysiwyg').each(function () {
    var tagId = $(this).attr('id');
    CKEDITOR.instances[tagId].destroy();
  });
};

/*
 * Global helper to rebuild all the Ckeditors
 */
DynamicFields.rebuildEditors = function (layoutIdName) {
  $(layoutIdName).find('.cdf-wysiwyg').each(function () {
    var tagId = $(this).attr('id');
    CKEDITOR.replace(tagId, DynamicFields.dynamicEditorConfig);
    //$(this).next('.cloned').remove();
  });
};

window.DynamicFields = DynamicFields;

/*
 * below is stuff I needed to add from old Js to help
 * with loading wysiwyg editor
 */
////////////////////////////////////////
// Add the event listeners /////////////
//$(document).ready(function () {
document.addEventListener('DOMContentLoaded', function () {

  /*
   * our main call that binds to app element
   * then instantiates our main Vue instance
   *
   * we then have all our components loaded so
   * they can work withing page.
   *
   * Check
   * - Dynamicfield/Resources/Views/admin/group/edit
   * - Dynamicfield/Resources/Views/admin/dynamicfield/fields
   *
   */
  if ($('#dynamicFields-app').length > 0) {
    var App = new Vue(require('./dynamicFields'));
  }

  /*
   * Find instance of our .cdf-wysiwyg and instantiate
   * a CKeditor on it
   */
  if (CKEDITOR.instances) {
    for (var i in CKEDITOR.instances) {
      CKEDITOR.instances[i].on('change', function () {
        CKEDITOR.instances[i].updateElement();
      });
    }
  }
});

},{"./DynamicFields/Entities/DeletedEntities.vue":1,"./DynamicFields/Entities/Entities.vue":2,"./DynamicFields/Entities/EntityField.vue":3,"./DynamicFields/Entities/Fields/AreaOfFocusField.vue":4,"./DynamicFields/Entities/Fields/CheckboxField.vue":5,"./DynamicFields/Entities/Fields/ColorPickerField.vue":6,"./DynamicFields/Entities/Fields/DatePicker.vue":7,"./DynamicFields/Entities/Fields/EmailField.vue":8,"./DynamicFields/Entities/Fields/FlexibleContentField.vue":9,"./DynamicFields/Entities/Fields/FlexibleContentLayoutBlock.vue":10,"./DynamicFields/Entities/Fields/ImageField.vue":11,"./DynamicFields/Entities/Fields/LinkField.vue":12,"./DynamicFields/Entities/Fields/LinkObjectField.vue":13,"./DynamicFields/Entities/Fields/NumberField.vue":14,"./DynamicFields/Entities/Fields/PasswordField.vue":15,"./DynamicFields/Entities/Fields/RadioField.vue":16,"./DynamicFields/Entities/Fields/RepeaterField.vue":17,"./DynamicFields/Entities/Fields/SelectField.vue":18,"./DynamicFields/Entities/Fields/TextField.vue":19,"./DynamicFields/Entities/Fields/TextareaField.vue":20,"./DynamicFields/Entities/Fields/UrlField.vue":21,"./DynamicFields/Entities/Fields/UserField.vue":22,"./DynamicFields/Entities/Fields/WysiwygField.vue":23,"./DynamicFields/Utility/DeletedFields.vue":24,"./DynamicFields/Utility/DeletedLayouts.vue":25,"./DynamicFields/Utility/Fields/UtilityFlexibleContent.vue":26,"./DynamicFields/Utility/Fields/UtilityFlexibleLayouts.vue":27,"./DynamicFields/Utility/Fields/UtilityRepeater.vue":28,"./DynamicFields/Utility/Groups/Groups.vue":29,"./DynamicFields/Utility/Options/Options.vue":30,"./DynamicFields/Utility/UtilityField.vue":31,"./DynamicFields/Utility/UtilityFields.vue":32,"./Filters/jsoninline":33,"./Filters/slugify":34,"./Helpers/GetUniqueId":35,"./Store/Actions":36,"./Store/Mutations":37,"./Store/Store":38,"./dynamicFields":40,"Vue":41,"sortablejs":109,"underscore":110,"vue-color":111,"vue-resource":113,"vue-select":114,"vue-sortable":115,"vue-validator":116,"vuex":119}],40:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export the Spark application.
 */
module.exports = {
    el: '#dynamicFields-app',

    store: _app2.default,

    components: {
        //Groups : Groups,
        //GroupFields : GroupFields
    },

    /*
     * Bootstrap the application. Load the initial data.
     */
    ready: function ready() {},

    data: {}
};
//var Groups = require('./DynamicFields/Groups/Groups.vue');
//var GroupFields = require('./DynamicFields/Groups/GroupFields.vue');

},{"./app":39}],41:[function(require,module,exports){
(function (process){
/*!
 * Vue.js v1.0.28
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delimited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([^-])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/* istanbul ignore next */
function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc = undefined;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var noop = function noop() {};
    timerFunc = function () {
      p.then(nextTickHandler);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) setTimeout(noop);
    };
  } else if (typeof MutationObserver !== 'undefined') {
    // use MutationObserver where native Promise is not available,
    // e.g. IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = setTimeout;
  }

  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var len;
var index;
var chr;
var state;
var startState = 0;
var filterState = 1;
var filterNameState = 2;
var filterArgState = 3;

var doubleChr = 0x22;
var singleChr = 0x27;
var pipeChr = 0x7C;
var escapeChr = 0x5C;
var spaceChr = 0x20;

var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

function peek() {
  return str.charCodeAt(index + 1);
}

function next() {
  return str.charCodeAt(++index);
}

function eof() {
  return index >= len;
}

function eatSpace() {
  while (peek() === spaceChr) {
    next();
  }
}

function isStringStart(chr) {
  return chr === doubleChr || chr === singleChr;
}

function isExpStart(chr) {
  return expStartChr[chr];
}

function isExpEnd(start, chr) {
  return expChrPair[start] === chr;
}

function parseString() {
  var stringQuote = next();
  var chr;
  while (!eof()) {
    chr = next();
    // escape char
    if (chr === escapeChr) {
      next();
    } else if (chr === stringQuote) {
      break;
    }
  }
}

function parseSpecialExp(chr) {
  var inExp = 0;
  var startChr = chr;

  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
      continue;
    }

    if (startChr === chr) {
      inExp++;
    }
    if (isExpEnd(startChr, chr)) {
      inExp--;
    }

    next();

    if (inExp === 0) {
      break;
    }
  }
}

/**
 * syntax:
 * expression | filterName  [arg  arg [| filterName arg arg]]
 */

function parseExpression() {
  var start = index;
  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
    } else if (isExpStart(chr)) {
      parseSpecialExp(chr);
    } else if (chr === pipeChr) {
      next();
      chr = peek();
      if (chr === pipeChr) {
        next();
      } else {
        if (state === startState || state === filterArgState) {
          state = filterState;
        }
        break;
      }
    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
      eatSpace();
      break;
    } else {
      if (state === filterState) {
        state = filterNameState;
      }
      next();
    }
  }

  return str.slice(start + 1, index) || null;
}

function parseFilterList() {
  var filters = [];
  while (!eof()) {
    filters.push(parseFilter());
  }
  return filters;
}

function parseFilter() {
  var filter = {};
  var args;

  state = filterState;
  filter.name = parseExpression().trim();

  state = filterArgState;
  args = parseFilterArguments();

  if (args.length) {
    filter.args = args;
  }
  return filter;
}

function parseFilterArguments() {
  var args = [];
  while (!eof() && state !== filterState) {
    var arg = parseExpression();
    if (!arg) {
      break;
    }
    args.push(processFilterArg(arg));
  }

  return args;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  dir = {};
  len = str.length;
  index = -1;
  chr = '';
  state = startState;

  var filters;

  if (str.indexOf('|') < 0) {
    dir.expression = str.trim();
  } else {
    dir.expression = parseExpression().trim();
    filters = parseFilterList();
    if (filters.length) {
      dir.filters = filters;
    }
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if (process.env.NODE_ENV !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIOS: isIOS,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to register itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression$1(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression$1(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression$1(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression$1,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression$1(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
    }

    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new instance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.get();
      if (isArray(model)) {
        var val = self.getValue();
        var i = indexOf(model, val);
        if (el.checked) {
          if (i < 0) {
            self.set(model.concat(val));
          }
        } else if (i > -1) {
          self.set(model.slice(0, i).concat(model.slice(i + 1)));
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// logic control
// two-way binding
// event handling
// attributes
// ref & el
// cloak
// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var propsData = vm.$options.propsData;
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
      // has propsData
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  sortDirectives(dirs);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * sort directives by priority (stable sort)
 *
 * @param {Array} dirs
 */
function sortDirectives(dirs) {
  if (dirs.length === 0) return;

  var groupedMap = {};
  var i, j, k, l;
  var index = 0;
  var priorities = [];
  for (i = 0, j = dirs.length; i < j; i++) {
    var dir = dirs[i];
    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
    var array = groupedMap[priority];
    if (!array) {
      array = groupedMap[priority] = [];
      priorities.push(priority);
    }
    array.push(dir);
  }

  priorities.sort(function (a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
  });
  for (i = 0, j = priorities.length; i < j; i++) {
    var group = groupedMap[priorities[i]];
    for (k = 0, l = group.length; k < l; k++) {
      dirs[index++] = group[k];
    }
  }
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;

      var componentName = options.el.tagName.toLowerCase();
      if (componentName === 'component' && options.name) {
        componentName += ':' + options.name;
      }

      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    // a textarea which has v-pre attr should skip complie.
    if (getAttr(el, 'v-pre') !== null) {
      return skip;
    }
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for, v-if and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    if (!replacer) {
      return frag;
    }
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression$1(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression$1(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression$1(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Order filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.28';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'))
},{"_process":108}],42:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":56}],43:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":57}],44:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":58}],45:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":59}],46:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":60}],47:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":61}],48:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-names"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-names":62}],49:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-symbols"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-symbols":63}],50:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":64}],51:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/is-extensible"), __esModule: true };
},{"core-js/library/fn/object/is-extensible":65}],52:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":66}],53:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/prevent-extensions"), __esModule: true };
},{"core-js/library/fn/object/prevent-extensions":67}],54:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":68}],55:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

exports["default"] = function (obj) {
  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/symbol":54}],56:[function(require,module,exports){
var core = require('../../modules/$.core');
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};
},{"../../modules/$.core":72}],57:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":72,"../../modules/es6.object.assign":99}],58:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":86}],59:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":86}],60:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":86}],61:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":86,"../../modules/es6.object.get-own-property-descriptor":100}],62:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-names');
module.exports = function getOwnPropertyNames(it){
  return $.getNames(it);
};
},{"../../modules/$":86,"../../modules/es6.object.get-own-property-names":101}],63:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$.core').Object.getOwnPropertySymbols;
},{"../../modules/$.core":72,"../../modules/es6.symbol":107}],64:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":72,"../../modules/es6.object.get-prototype-of":102}],65:[function(require,module,exports){
require('../../modules/es6.object.is-extensible');
module.exports = require('../../modules/$.core').Object.isExtensible;
},{"../../modules/$.core":72,"../../modules/es6.object.is-extensible":103}],66:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":72,"../../modules/es6.object.keys":104}],67:[function(require,module,exports){
require('../../modules/es6.object.prevent-extensions');
module.exports = require('../../modules/$.core').Object.preventExtensions;
},{"../../modules/$.core":72,"../../modules/es6.object.prevent-extensions":105}],68:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":72,"../../modules/es6.object.to-string":106,"../../modules/es6.symbol":107}],69:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],70:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":85}],71:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],72:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],73:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":69}],74:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],75:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":78}],76:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":86}],77:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":72,"./$.ctx":73,"./$.global":80}],78:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],79:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":86,"./$.to-iobject":95}],80:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],81:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],82:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":86,"./$.descriptors":75,"./$.property-desc":91}],83:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":71}],84:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":71}],85:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],86:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],87:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":86,"./$.to-iobject":95}],88:[function(require,module,exports){
module.exports = true;
},{}],89:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":86,"./$.fails":78,"./$.iobject":83,"./$.to-object":96}],90:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":72,"./$.export":77,"./$.fails":78}],91:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],92:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":82}],93:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":86,"./$.has":81,"./$.wks":98}],94:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":80}],95:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":74,"./$.iobject":83}],96:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":74}],97:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],98:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":80,"./$.shared":94,"./$.uid":97}],99:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":77,"./$.object-assign":89}],100:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":90,"./$.to-iobject":95}],101:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./$.object-sap')('getOwnPropertyNames', function(){
  return require('./$.get-names').get;
});
},{"./$.get-names":79,"./$.object-sap":90}],102:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":90,"./$.to-object":96}],103:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
},{"./$.is-object":85,"./$.object-sap":90}],104:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":90,"./$.to-object":96}],105:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
  };
});
},{"./$.is-object":85,"./$.object-sap":90}],106:[function(require,module,exports){

},{}],107:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":86,"./$.an-object":70,"./$.descriptors":75,"./$.enum-keys":76,"./$.export":77,"./$.fails":78,"./$.get-names":79,"./$.global":80,"./$.has":81,"./$.is-array":84,"./$.keyof":87,"./$.library":88,"./$.property-desc":91,"./$.redefine":92,"./$.set-to-string-tag":93,"./$.shared":94,"./$.to-iobject":95,"./$.uid":97,"./$.wks":98}],108:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],109:[function(require,module,exports){
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window == "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,

		supportDraggable = !!('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/Trident.*rv[ :]?11\./)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;


	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0}
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		_on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && evt.path[0] || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (type === 'mousedown' && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}


			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'transform';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'pointercancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					_on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {					
					// Timeout neccessary for IE9					
					setTimeout(function () {
						document.selection.empty();
					});					
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
					parent = target,
					i = touchDragOverListeners.length;

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var dataTransfer = evt.dataTransfer,
				options = this.options;

			this._offUpEvents();

			if (activeGroup.checkPull(this, this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, this.options.chosenClass, false);

				rootEl.insertBefore(cloneEl, dragEl);
				_dispatchEvent(this, rootEl, 'clone', dragEl);
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', this._onTouchMove);
					_on(document, 'touchend', this._onDrop);
					_on(document, 'touchcancel', this._onDrop);
					_on(document, 'pointermove', this._onTouchMove);
					_on(document, 'pointerup', this._onDrop);
				} else {
					// Old brwoser
					_on(document, 'mousemove', this._onTouchMove);
					_on(document, 'mouseup', this._onDrop);
				}

				this._loopId = setInterval(this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(this, dataTransfer, dragEl);
				}

				_on(document, 'drop', this);
				setTimeout(this._dragStarted, 0);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (target = _ghostIsLast(el, evt))
				) {
					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt),
						after = false
					;

					if (moveVector !== false) {
						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}
						else if (floating) {
							var elTop = dragEl.offsetTop,
								tgTop = target.offsetTop;

							if (elTop === tgTop) {
								after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
							}
							else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
								after = (evt.clientY - targetRect.top) / height > 0.5;
							} else {
								after = tgTop > elTop;
							}
						} else if (!isMovingBetweenSortable) {
							after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
						}

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (
			(evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.right + rect.width) > 5)
		) && lastEl;
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		return $
			? $(el).clone(true)[0]
			: (Polymer && Polymer.dom
				? Polymer.dom(el).cloneNode(true)
				: el.cloneNode(true)
			);
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	// Fixed #973: 
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				captureMode = {
					capture: false,
					passive: false
				};
			}
		}));
	} catch (err) {}

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.5.1';
	return Sortable;
});

},{}],110:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],111:[function(require,module,exports){
!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueColor=o():e.VueColor=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=t(49),a=r(i),n=t(50),s=r(n),l=t(53),c=r(l),d=t(54),h=r(d),u=t(51),f=r(u),p=t(52),_=r(p),v=t(48),g=r(v),b={version:"1.0.26",Compact:a["default"],Material:s["default"],Slider:c["default"],Swatches:h["default"],Photoshop:f["default"],Sketch:_["default"],Chrome:g["default"]};e.exports=b},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<o.length;i++){var n=o[i];"number"==typeof n[0]&&r[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],i=h[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(l(r.parts[a],o))}else{for(var n=[],a=0;a<r.parts.length;a++)n.push(l(r.parts[a],o));h[r.id]={id:r.id,refs:1,parts:n}}}}function i(e){for(var o=[],t={},r=0;r<e.length;r++){var i=e[r],a=i[0],n=i[1],s=i[2],l=i[3],c={css:n,media:s,sourceMap:l};t[a]?t[a].parts.push(c):o.push(t[a]={id:a,parts:[c]})}return o}function a(e,o){var t=p(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function n(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",a(e,o),o}function l(e,o){var t,r,i;if(o.singleton){var a=v++;t=_||(_=s(o)),r=c.bind(null,t,a,!1),i=c.bind(null,t,a,!0)}else t=s(o),r=d.bind(null,t),i=function(){n(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else i()}}function c(e,o,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,i);else{var a=document.createTextNode(i),n=e.childNodes;n[o]&&e.removeChild(n[o]),n.length?e.insertBefore(a,n[o]):e.appendChild(a)}}function d(e,o){var t=o.css,r=o.media,i=o.sourceMap;if(r&&e.setAttribute("media",r),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h={},u=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},f=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=u(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=f()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=i(e);return r(t,o),function(e){for(var a=[],n=0;n<t.length;n++){var s=t[n],l=h[s.id];l.refs--,a.push(l)}if(e){var c=i(e);r(c,o)}for(var n=0;n<a.length;n++){var l=a[n];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete h[l.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,o){e.a&&e.a>1&&(e.a=1);var t=e.hex?(0,n["default"])(e.hex):(0,n["default"])(e),r=t.toHsl(),i=t.toHsv();return 0===r.s&&(r.h=o||0,i.h=o||0),{hsl:r,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:i,oldHue:e.h||o||r.h,source:e.source,a:e.a}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(35),n=r(a);o["default"]={props:{colors:Object},created:function(){this.colors=i(this.colors)},methods:{colorChange:function(e,o){this.colors=i(e,o)},isValidHex:function(e){return(0,n["default"])(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,r=0,i=0;i<o.length;i++){var a=o[i];e[a]&&(t++,isNaN(e[a])||r++)}if(t===r)return e}}}},function(e,o,t){var r,i;t(65),r=t(17),i=t(45),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(66),r=t(18),i=t(46),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(63),r=t(15),i=t(43),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(67),r=t(19),i=t(47),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=t(7),c=r(l),d=t(5),h=r(d),u=t(6),f=r(u);o["default"]={name:"Chrome",mixins:[a["default"]],props:{},components:{saturation:c["default"],hue:h["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o["default"]={name:"Compact",mixins:[a["default"]],props:{},components:{"ed-in":s["default"]},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:l}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(4),a=r(i),n=t(3),s=r(n);o["default"]={name:"Material",mixins:[s["default"]],props:{},data:function(){return{}},components:{"ed-in":a["default"]},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=t(7),c=r(l),d=t(5),h=r(d),u=t(6),f=r(u);o["default"]={name:"Photoshop",mixins:[a["default"]],props:{head:{type:String,"default":"Color Picker"}},components:{saturation:c["default"],hue:h["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$dispatch("ok")},handleCancel:function(){this.$dispatch("cancel")}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=t(7),c=r(l),d=t(5),h=r(d),u=t(6),f=r(u),p=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o["default"]={name:"Sketch",mixins:[a["default"]],components:{saturation:c["default"],hue:h["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{presetColors:p}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(5),s=r(n);o["default"]={name:"Slider",mixins:[a["default"]],props:{direction:String},components:{hue:s["default"]},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(34),a=r(i),n=t(3),s=r(n),l=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],c=["900","700","500","300","100"],d=function(){var e=[];return l.forEach(function(o){var t=[];c.forEach(function(e){t.push(a["default"][o][e].toUpperCase())}),e.push(t)}),e}();o["default"]={name:"Swatches",mixins:[s["default"]],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:d}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(55),a=r(i);o["default"]={name:"Alpha",props:{colors:Object,onChange:Function},components:{checkboard:a["default"]},computed:{gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r=this.$els.container,i=r.clientWidth,a=(e.pageX||e.touches[0].pageX)-(r.getBoundingClientRect().left+window.pageXOffset);t=a<0?0:a>i?1:Math.round(100*a/i)/100,this.colors.a!==t&&this.onChange({h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*t;var i=r.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,r.width,r.height),i.fillStyle=o,i.fillRect(0,0,t,t),i.translate(t,t),i.fillRect(0,0,t,t),r.toDataURL()):null}function r(e,o,r){var a=e+","+o+","+r;if(i[a])return i[a];var n=t(e,o,r);return i[a]=n,n}Object.defineProperty(o,"__esModule",{value:!0});var i={};o["default"]={name:"Checkboard",props:{size:{type:[Number|String],"default":8},white:{type:String,"default":"#fff"},grey:{type:String,"default":"#e6e6e6"}},computed:{bgStyle:function(){return"url("+r(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"editableInput",props:{label:String,val:[String|Number],onChange:Function,max:Number,arrowOffset:{type:Number,"default":1}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{handleChange:function(e){var o={};o[this.label]=this.val,this.onChange(o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var r=this.arrowOffset||1;38===e.keyCode&&(this.val=t+r,e.preventDefault()),40===e.keyCode&&(this.val=t-r,e.preventDefault()),this.handleChange()}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"Hue",props:{colors:Object,onChange:Function,direction:{type:String,"default":"horizontal"}},computed:{directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r,i=this.$els.container,a=i.clientWidth,n=i.clientHeight,s=(e.pageX||e.touches[0].pageX)-(i.getBoundingClientRect().left+window.pageXOffset),l=(e.pageY||e.touches[0].pageY)-(i.getBoundingClientRect().top+window.pageYOffset);"vertical"===this.direction?(l<0?t=359:l>n?t=0:(r=-(100*l/n)+100,t=360*r/100),this.colors.hsl.h!==t&&this.onChange({h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(s<0?t=0:s>a?t=359:(r=100*s/a,t=360*r/100),this.colors.hsl.h!==t&&this.onChange({h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(32),a=r(i);o["default"]={name:"Saturation",props:{colors:Object,onChange:Function},computed:{bgColor:function(){return"hsl("+this.colors.hsl.h+",100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,a["default"])(function(e,o){e(o)},50),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$els.container,r=t.clientWidth,i=t.clientHeight,a=(e.pageX||e.touches[0].pageX)-(t.getBoundingClientRect().left+window.pageXOffset),n=(e.pageY||e.touches[0].pageY)-(t.getBoundingClientRect().top+window.pageYOffset);a<0?a=0:a>r?a=r:n<0?n=0:n>i&&(n=i);var s=100*a/r,l=-(100*n/i)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:s,v:l,a:this.colors.hsl.a,source:"rgb"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo}.vue-color__chrome__controls{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-color__chrome__color-wrap{width:32px}.vue-color__chrome__active-color{margin-top:6px;width:16px;height:16px;border-radius:8px;position:relative;overflow:hidden}.vue-color__chrome__sliders{-webkit-box-flex:1;-ms-flex:1;flex:1}.vue-color__chrome__sliders .vue-color__c-alpha__gradient,.vue-color__chrome__sliders .vue-color__c-hue{border-radius:2px}.vue-color__chrome__sliders .vue-color__c-alpha__picker,.vue-color__chrome__sliders .vue-color__c-hue__picker{width:12px;height:12px;border-radius:6px;-webkit-transform:translate(-6px,-2px);transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__chrome__fields-wrap{padding-top:16px;display:-webkit-box;display:-ms-flexbox;display:flex}.vue-color__chrome__fields{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:-6px;-webkit-box-flex:1;-ms-flex:1;flex:1}.vue-color__chrome__field{padding-left:6px;width:100%}.vue-color__chrome__toggle-btn{width:32px;text-align:right;position:relative}.vue-color__chrome__icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vue-color__chrome__icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vue-color__chrome__hue-wrap{margin-bottom:8px}.vue-color__chrome__alpha-wrap,.vue-color__chrome__hue-wrap{position:relative;height:10px}.vue-color__chrome__chrome-body{padding:16px 16px 12px}.vue-color__chrome__saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vue-color__chrome__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-color__chrome__fields .vue-color__editable-input__input{font-size:11px;color:#333;width:100%;border-rradius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vue-color__chrome__fields .vue-color__editable-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__compact__colors{overflow:hidden;padding:0;margin:0}.vue-color__compact__color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vue-color__compact__color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vue-color__compact__color-item--white .vue-color__compact__dot{background:#000}.vue-color__compact__dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}.vue-color__compact__fields{display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:6px;padding-right:5px;position:relative}.vue-color__compact__fields .vue-color__editable-input__input{width:70%;padding-left:30%;background:none;font-size:12px;color:#333;height:16px}.vue-color__compact__fields .vue-color__editable-input__label{position:absolute;top:3px;left:0;line-height:16px;text-transform:uppercase;font-size:12px;color:#999}.vue-color__compact__pick-color{position:absolute;top:6px;left:5px;height:9px;width:9px}.vue-color__compact__col-3{-webkit-box-flex:1;-ms-flex:1;flex:1}.vue_color__compact__col-hex{-webkit-box-flex:2;-ms-flex:2;flex:2}.vue_color__compact__col-hex .vue-color__editable-input__input{width:80%;padding-left:20%}.vue_color__compact__col-hex .vue-color__editable-input__label{display:none}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__material .vue-color__editable-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vue-color__material .vue-color__editable-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vue-color__material__hex{border-bottom-width:2px;border-bottom-style:solid}.vue-color__material__split{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:-10px;padding-top:11px}.vue-color__material__third{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:10px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.vue-colors__photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vue-colors__photoshop__head{background-image:-webkit-linear-gradient(top,#f0f0f0,#d4d4d4);background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vue-colors__photoshop__body{padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex}.vue-colors__photoshop__saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vue-colors__photoshop__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-colors__photoshop__hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vue-colors__photoshop__hue-pointer{position:relative}.vue-colors__photoshop__hue-pointer--left,.vue-colors__photoshop__hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vue-colors__photoshop__hue-pointer--left:after,.vue-colors__photoshop__hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;-webkit-transform:translate(-8px,-5px);transform:translate(-8px,-5px)}.vue-colors__photoshop__hue-pointer--left{-webkit-transform:translate(-13px,-4px);transform:translate(-13px,-4px)}.vue-colors__photoshop__hue-pointer--right{-webkit-transform:translate(20px,-4px) rotate(180deg);transform:translate(20px,-4px) rotate(180deg)}.vue-colors__photoshop__controls{width:180px;margin-left:10px;display:-webkit-box;display:-ms-flexbox;display:flex}.vue-colors__photoshop__actions{margin-left:20px;-webkit-box-flex:1;-ms-flex:1;flex:1}.vue-colors__photoshop__ac-btn{cursor:pointer;background-image:-webkit-linear-gradient(top,#fff,#e6e6e6);background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vue-colors__photoshop__previews{width:60px}.vue-colors__photoshop__previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vue-colors__photoshop__previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vue-colors__photoshop__previews__label{font-size:14px;color:#000;text-align:center}.vue-colors__photoshop__fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vue-colors__photoshop__fields .vue-color__editable-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vue-colors__photoshop__fields .vue-color__editable-input__label{top:0;left:0;width:34px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vue-colors__photoshop__fields__divider{height:5px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-color__sketch__saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vue-color__sketch__controls{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-color__sketch__sliders{padding:4px 0;-webkit-box-flex:1;-ms-flex:1;flex:1}.vue-color__sketch__sliders .vue-color__c-alpha__gradient,.vue-color__sketch__sliders .vue-color__c-hue{border-radius:2px}.vue-color__sketch__hue-wrap{position:relative;height:10px}.vue-color__sketch__alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vue-color__sketch__color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vue-color__sketch__active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vue-color__sketch__field{display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:4px}.vue-color__sketch__field .vue-color__editable-input__input{width:80%;padding:4px 10% 3px;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:11px}.vue-color__sketch__field .vue-color__editable-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vue-color__sketch__field--single{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:6px}.vue-color__sketch__field--double{-webkit-box-flex:2;-ms-flex:2;flex:2}.vue-color__sketch__presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vue-color__sketch__presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__slider{position:relative;width:410px}.vue-color__slider__hue-warp{height:12px;position:relative}.vue-color__slider__hue-warp .vue-color__c-hue__picker{width:14px;height:14px;border-radius:6px;-webkit-transform:translate(-7px,-2px);transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__slider__swatches{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:20px}.vue-color__slider__swatch{margin-right:1px;-webkit-box-flex:1;-ms-flex:1;flex:1;width:20%}.vue-color__slider__swatch:first-child{margin-right:1px}.vue-color__slider__swatch:first-child .vue-color__slider__swatch-picker{border-radius:2px 0 0 2px}.vue-color__slider__swatch:last-child{margin-right:0}.vue-color__slider__swatch:last-child .vue-color__slider__swatch-picker{border-radius:0 2px 2px 0}.vue-color__slider__swatch-picker{cursor:pointer;height:12px}.vue-color__slider__swatch-picker--active{-webkit-transform:scaleY(1.8);transform:scaleY(1.8);border-radius:3.6px/2px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__swatches__box{padding:16px 0 6px 16px;overflow:hidden}.vue-color__swatches__color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vue-color__swatches__color-it{width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vue-color__swatches__pick{fill:#fff;margin-left:8px;display:block}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-alpha,.vue-color__c-alpha__checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__checkboard-wrap{overflow:hidden}.vue-color__c-alpha__gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vue-color__c-alpha__pointer{z-index:2;position:absolute}.vue-color__c-alpha__picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;-webkit-transform:translateX(-2px);transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__editable-input{position:relative}.vue-color__editable-input__input{padding:0;border:0;outline:none}.vue-color__editable-input__label{text-transform:capitalize}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vue-color__c-hue--horizontal{background:-webkit-linear-gradient(left,red,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue--vertical{background:-webkit-linear-gradient(bottom,red,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue__container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vue-color__c-hue__pointer{z-index:2;position:absolute}.vue-color__c-hue__picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;-webkit-transform:translateX(-2px);transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__saturation,.vue-color__saturation--black,.vue-color__saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vue-color__saturation--white{background:-webkit-linear-gradient(left,#fff,hsla(0,0%,100%,0));background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vue-color__saturation--black{background:-webkit-linear-gradient(bottom,#000,transparent);background:linear-gradient(0deg,#000,transparent)}.vue-color__saturation--pointer{cursor:pointer;position:absolute}.vue-color__saturation--circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}",""])},function(e,o,t){function r(e,o,t){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError(n);return i(t)&&(r="leading"in t?!!t.leading:r,s="trailing"in t?!!t.trailing:s),a(e,o,{leading:r,maxWait:o,trailing:s})}function i(e){
var o=typeof e;return!!e&&("object"==o||"function"==o)}var a=t(33),n="Expected a function";e.exports=r},function(e,o){function t(e,o,t){function r(o){var t=_,r=v;return _=v=void 0,C=o,b=e.apply(r,t)}function a(e){return C=e,x=setTimeout(d,o),A?r(e):b}function n(e){var t=e-k,r=e-C,i=o-t;return M?w(i,g-r):i}function c(e){var t=e-k,r=e-C;return!k||t>=o||t<0||M&&r>=g}function d(){var e=y();return c(e)?h(e):void(x=setTimeout(d,n(e)))}function h(e){return clearTimeout(x),x=void 0,F&&_?r(e):(_=v=void 0,b)}function u(){void 0!==x&&clearTimeout(x),k=C=0,_=v=x=void 0}function f(){return void 0===x?b:h(y())}function p(){var e=y(),t=c(e);if(_=arguments,v=this,k=e,t){if(void 0===x)return a(k);if(M)return clearTimeout(x),x=setTimeout(d,o),r(k)}return void 0===x&&(x=setTimeout(d,o)),b}var _,v,g,b,x,k=0,C=0,A=!1,M=!1,F=!0;if("function"!=typeof e)throw new TypeError(l);return o=s(o)||0,i(t)&&(A=!!t.leading,M="maxWait"in t,g=M?m(s(t.maxWait)||0,o):g,F="trailing"in t?!!t.trailing:F),p.cancel=u,p.flush=f,p}function r(e){var o=i(e)?x.call(e):"";return o==d||o==h}function i(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}function a(e){return!!e&&"object"==typeof e}function n(e){return"symbol"==typeof e||a(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(n(e))return c;if(i(e)){var o=r(e.valueOf)?e.valueOf():e;e=i(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var t=_.test(e);return t||v.test(e)?g(e.slice(2),t?2:8):p.test(e)?c:+e}var l="Expected a function",c=NaN,d="[object Function]",h="[object GeneratorFunction]",u="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt,b=Object.prototype,x=b.toString,m=Math.max,w=Math.min,y=Date.now;e.exports=t},function(e,o,t){var r,i,a;!function(t,n){i=[],r=n,a="function"==typeof r?r.apply(o,i):r,!(void 0!==a&&(e.exports=a))}(this,function(){return{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},white:"#ffffff",black:"#000000"}})},function(e,o,t){var r;!function(i){function a(e,o){if(e=e?e:"",o=o||{},e instanceof a)return e;if(!(this instanceof a))return new a(e,o);var t=n(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=V(100*this._a)/100,this._format=o.format||t.format,this._gradientType=o.gradientType,this._r<1&&(this._r=V(this._r)),this._g<1&&(this._g=V(this._g)),this._b<1&&(this._b=V(this._b)),this._ok=t.ok,this._tc_id=X++}function n(e){var o={r:0,g:0,b:0},t=1,r=null,i=null,a=null,n=!1,l=!1;return"string"==typeof e&&(e=N(e)),"object"==typeof e&&(T(e.r)&&T(e.g)&&T(e.b)?(o=s(e.r,e.g,e.b),n=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):T(e.h)&&T(e.s)&&T(e.v)?(r=D(e.s),i=D(e.v),o=h(e.h,r,i),n=!0,l="hsv"):T(e.h)&&T(e.s)&&T(e.l)&&(r=D(e.s),a=D(e.l),o=c(e.h,r,a),n=!0,l="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=L(t),{ok:n,format:e.format||l,r:q(255,Y(o.r,0)),g:q(255,Y(o.g,0)),b:q(255,Y(o.b,0)),a:t}}function s(e,o,t){return{r:255*E(e,255),g:255*E(o,255),b:255*E(t,255)}}function l(e,o,t){e=E(e,255),o=E(o,255),t=E(t,255);var r,i,a=Y(e,o,t),n=q(e,o,t),s=(a+n)/2;if(a==n)r=i=0;else{var l=a-n;switch(i=s>.5?l/(2-a-n):l/(a+n),a){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:i,l:s}}function c(e,o,t){function r(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(o-e)*t:t<.5?o:t<2/3?e+(o-e)*(2/3-t)*6:e}var i,a,n;if(e=E(e,360),o=E(o,100),t=E(t,100),0===o)i=a=n=t;else{var s=t<.5?t*(1+o):t+o-t*o,l=2*t-s;i=r(l,s,e+1/3),a=r(l,s,e),n=r(l,s,e-1/3)}return{r:255*i,g:255*a,b:255*n}}function d(e,o,t){e=E(e,255),o=E(o,255),t=E(t,255);var r,i,a=Y(e,o,t),n=q(e,o,t),s=a,l=a-n;if(i=0===a?0:l/a,a==n)r=0;else{switch(a){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:i,v:s}}function h(e,o,t){e=6*E(e,360),o=E(o,100),t=E(t,100);var r=i.floor(e),a=e-r,n=t*(1-o),s=t*(1-a*o),l=t*(1-(1-a)*o),c=r%6,d=[t,s,n,n,l,t][c],h=[l,t,t,s,n,n][c],u=[n,n,l,t,t,s][c];return{r:255*d,g:255*h,b:255*u}}function u(e,o,t,r){var i=[z(V(e).toString(16)),z(V(o).toString(16)),z(V(t).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function f(e,o,t,r,i){var a=[z(V(e).toString(16)),z(V(o).toString(16)),z(V(t).toString(16)),z(B(r))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function p(e,o,t,r){var i=[z(B(r)),z(V(e).toString(16)),z(V(o).toString(16)),z(V(t).toString(16))];return i.join("")}function _(e,o){o=0===o?0:o||10;var t=a(e).toHsl();return t.s-=o/100,t.s=H(t.s),a(t)}function v(e,o){o=0===o?0:o||10;var t=a(e).toHsl();return t.s+=o/100,t.s=H(t.s),a(t)}function g(e){return a(e).desaturate(100)}function b(e,o){o=0===o?0:o||10;var t=a(e).toHsl();return t.l+=o/100,t.l=H(t.l),a(t)}function x(e,o){o=0===o?0:o||10;var t=a(e).toRgb();return t.r=Y(0,q(255,t.r-V(255*-(o/100)))),t.g=Y(0,q(255,t.g-V(255*-(o/100)))),t.b=Y(0,q(255,t.b-V(255*-(o/100)))),a(t)}function m(e,o){o=0===o?0:o||10;var t=a(e).toHsl();return t.l-=o/100,t.l=H(t.l),a(t)}function w(e,o){var t=a(e).toHsl(),r=(t.h+o)%360;return t.h=r<0?360+r:r,a(t)}function y(e){var o=a(e).toHsl();return o.h=(o.h+180)%360,a(o)}function k(e){var o=a(e).toHsl(),t=o.h;return[a(e),a({h:(t+120)%360,s:o.s,l:o.l}),a({h:(t+240)%360,s:o.s,l:o.l})]}function C(e){var o=a(e).toHsl(),t=o.h;return[a(e),a({h:(t+90)%360,s:o.s,l:o.l}),a({h:(t+180)%360,s:o.s,l:o.l}),a({h:(t+270)%360,s:o.s,l:o.l})]}function A(e){var o=a(e).toHsl(),t=o.h;return[a(e),a({h:(t+72)%360,s:o.s,l:o.l}),a({h:(t+216)%360,s:o.s,l:o.l})]}function M(e,o,t){o=o||6,t=t||30;var r=a(e).toHsl(),i=360/t,n=[a(e)];for(r.h=(r.h-(i*o>>1)+720)%360;--o;)r.h=(r.h+i)%360,n.push(a(r));return n}function F(e,o){o=o||6;for(var t=a(e).toHsv(),r=t.h,i=t.s,n=t.v,s=[],l=1/o;o--;)s.push(a({h:r,s:i,v:n})),n=(n+l)%1;return s}function S(e){var o={};for(var t in e)e.hasOwnProperty(t)&&(o[e[t]]=t);return o}function L(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,o){O(e)&&(e="100%");var t=j(e);return e=q(o,Y(0,parseFloat(e))),t&&(e=parseInt(e*o,10)/100),i.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function H(e){return q(1,Y(0,e))}function R(e){return parseInt(e,16)}function O(e){return"string"==typeof e&&e.indexOf(".")!=-1&&1===parseFloat(e)}function j(e){return"string"==typeof e&&e.indexOf("%")!=-1}function z(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function B(e){return i.round(255*parseFloat(e)).toString(16)}function P(e){return R(e)/255}function T(e){return!!Z.CSS_UNIT.exec(e)}function N(e){e=e.replace(U,"").replace($,"").toLowerCase();var o=!1;if(W[e])e=W[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Z.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=Z.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Z.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=Z.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Z.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=Z.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Z.hex8.exec(e))?{r:R(t[1]),g:R(t[2]),b:R(t[3]),a:P(t[4]),format:o?"name":"hex8"}:(t=Z.hex6.exec(e))?{r:R(t[1]),g:R(t[2]),b:R(t[3]),format:o?"name":"hex"}:(t=Z.hex4.exec(e))?{r:R(t[1]+""+t[1]),g:R(t[2]+""+t[2]),b:R(t[3]+""+t[3]),a:P(t[4]+""+t[4]),format:o?"name":"hex8"}:!!(t=Z.hex3.exec(e))&&{r:R(t[1]+""+t[1]),g:R(t[2]+""+t[2]),b:R(t[3]+""+t[3]),format:o?"name":"hex"}}function I(e){var o,t;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==t&&"large"!==t&&(t="small"),{level:o,size:t}}var U=/^\s+/,$=/\s+$/,X=0,V=i.round,q=i.min,Y=i.max,G=i.random;a.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,o,t,r,a,n,s=this.toRgb();return e=s.r/255,o=s.g/255,t=s.b/255,r=e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4),a=o<=.03928?o/12.92:i.pow((o+.055)/1.055,2.4),n=t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4),.2126*r+.7152*a+.0722*n},setAlpha:function(e){return this._a=L(e),this._roundA=V(100*this._a)/100,this},toHsv:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=d(this._r,this._g,this._b),o=V(360*e.h),t=V(100*e.s),r=V(100*e.v);return 1==this._a?"hsv("+o+", "+t+"%, "+r+"%)":"hsva("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),o=V(360*e.h),t=V(100*e.s),r=V(100*e.l);return 1==this._a?"hsl("+o+", "+t+"%, "+r+"%)":"hsla("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return u(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:V(this._r),g:V(this._g),b:V(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+V(this._r)+", "+V(this._g)+", "+V(this._b)+")":"rgba("+V(this._r)+", "+V(this._g)+", "+V(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:V(100*E(this._r,255))+"%",g:V(100*E(this._g,255))+"%",b:V(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+V(100*E(this._r,255))+"%, "+V(100*E(this._g,255))+"%, "+V(100*E(this._b,255))+"%)":"rgba("+V(100*E(this._r,255))+"%, "+V(100*E(this._g,255))+"%, "+V(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(K[u(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var o="#"+p(this._r,this._g,this._b,this._a),t=o,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=a(e);t="#"+p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+t+")"},toString:function(e){var o=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0,i=!o&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e);return i?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"hex4"===e&&(t=this.toHex8String(!0)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return a(this.toString())},_applyModification:function(e,o){var t=e.apply(null,[this].concat([].slice.call(o)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(m,arguments)},desaturate:function(){return this._applyModification(_,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(M,arguments)},complement:function(){return this._applyCombination(y,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(A,arguments)},triad:function(){return this._applyCombination(k,arguments)},tetrad:function(){return this._applyCombination(C,arguments)}},a.fromRatio=function(e,o){if("object"==typeof e){var t={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?t[r]=e[r]:t[r]=D(e[r]));e=t}return a(e,o)},a.equals=function(e,o){return!(!e||!o)&&a(e).toRgbString()==a(o).toRgbString()},a.random=function(){return a.fromRatio({r:G(),g:G(),b:G()})},a.mix=function(e,o,t){t=0===t?0:t||50;var r=a(e).toRgb(),i=a(o).toRgb(),n=t/100,s={r:(i.r-r.r)*n+r.r,g:(i.g-r.g)*n+r.g,b:(i.b-r.b)*n+r.b,a:(i.a-r.a)*n+r.a};return a(s)},a.readability=function(e,o){var t=a(e),r=a(o);return(i.max(t.getLuminance(),r.getLuminance())+.05)/(i.min(t.getLuminance(),r.getLuminance())+.05)},a.isReadable=function(e,o,t){var r,i,n=a.readability(e,o);switch(i=!1,r=I(t),r.level+r.size){case"AAsmall":case"AAAlarge":i=n>=4.5;break;case"AAlarge":i=n>=3;break;case"AAAsmall":i=n>=7}return i},a.mostReadable=function(e,o,t){var r,i,n,s,l=null,c=0;t=t||{},i=t.includeFallbackColors,n=t.level,s=t.size;for(var d=0;d<o.length;d++)r=a.readability(e,o[d]),r>c&&(c=r,l=a(o[d]));return a.isReadable(e,l,{level:n,size:s})||!i?l:(t.includeFallbackColors=!1,a.mostReadable(e,["#fff","#000"],t))};var W=a.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=a.hexNames=S(W),Z=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",t="(?:"+o+")|(?:"+e+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=a:(r=function(){return a}.call(o,t,o,e),!(void 0!==r&&(e.exports=r)))}(Math)},function(e,o){e.exports=' <div class=vue-color__chrome> <div class=vue-color__chrome__saturation-wrap> <saturation :colors.sync=colors :on-change=childChange></saturation> </div> <div class=vue-color__chrome__chrome-body> <div class=vue-color__chrome__controls> <div class=vue-color__chrome__color-wrap> <div class=vue-color__chrome__active-color :style="{background: activeColor}"></div> </div> <div class=vue-color__chrome__sliders> <div class=vue-color__chrome__hue-wrap> <hue :colors.sync=colors :on-change=childChange></hue> </div> <div class=vue-color__chrome__alpha-wrap> <alpha :colors.sync=colors :on-change=childChange></alpha> </div> </div> </div> <div class=vue-color__chrome__fields-wrap> <div class=vue-color__chrome__fields v-show="fieldsIndex === 0"> <div class=vue-color__chrome__field> <ed-in label=hex :val.sync=colors.hex :on-change=inputChange></ed-in> </div> </div> <div class=vue-color__chrome__fields v-show="fieldsIndex === 1"> <div class=vue-color__chrome__field> <ed-in label=r :val.sync=colors.rgba.r :on-change=inputChange></ed-in> </div> <div class=vue-color__chrome__field> <ed-in label=g :val.sync=colors.rgba.g :on-change=inputChange></ed-in> </div> <div class=vue-color__chrome__field> <ed-in label=b :val.sync=colors.rgba.b :on-change=inputChange></ed-in> </div> <div class=vue-color__chrome__field> <ed-in label=a :val.sync=colors.a :arrow-offset=0.01 :max=1 :on-change=inputChange></ed-in> </div> </div> <div class=vue-color__chrome__fields v-show="fieldsIndex === 2"> <div class=vue-color__chrome__field> <ed-in label=h :val.sync=colors.hsl.h :on-change=inputChange></ed-in> </div> <div class=vue-color__chrome__field> <ed-in label=s :val.sync=colors.hsl.s :on-change=inputChange></ed-in> </div> <div class=vue-color__chrome__field> <ed-in label=l :val.sync=colors.hsl.l :on-change=inputChange></ed-in> </div> <div class=vue-color__chrome__field> <ed-in label=a :val.sync=colors.a :arrow-offset=0.01 :max=1 :on-change=inputChange></ed-in> </div> </div> <div class=vue-color__chrome__toggle-btn @click=toggleViews> <div class=vue-color__chrome__icon> <svg style="width:24px; height:24px" viewBox="0 0 24 24" @mouseover=showHighlight @mouseenter=showHighlight @mouseout=hideHighlight> <path fill=#333 d=M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z /> </svg> </div> <div class=vue-color__chrome__icon-highlight v-show=highlight></div> </div> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-color__compact> <ul class=vue-color__compact__colors> <li class=vue-color__compact__color-item v-for="c in defaultColors" @click=handlerClick(c) :class="{\'vue-color__compact__color-item--white\': c === \'#FFFFFF\' }" :style="{background: c}"> <div class=vue-color__compact__dot v-show="c === pick"></div> </li> </ul> <div class=vue-color__compact__fields> <div class=vue-color__compact__pick-color :style="{background: pick}"></div> <div class=vue_color__compact__col-hex> <ed-in label=vue-color__compact__hex :val.sync=colors.hex :style="{ borderColor: colors.hex }" :on-change=onChange></ed-in> </div> <div class=vue-color__compact__col-3> <ed-in label=r :val.sync=colors.rgba.r :on-change=onChange></ed-in> </div> <div class=vue-color__compact__col-3> <ed-in label=g :val.sync=colors.rgba.g :on-change=onChange></ed-in> </div> <div class=vue-color__compact__col-3> <ed-in label=b :val.sync=colors.rgba.b :on-change=onChange></ed-in> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-color__material> <ed-in class=vue-color__material__hex label=hex :val.sync=colors.hex :style="{ borderColor: colors.hex }" :on-change=onChange></ed-in> <div class=vue-color__material__split> <div class=vue-color__material__third> <ed-in label=r :val.sync=colors.rgba.r :on-change=onChange></ed-in> </div> <div class=vue-color__material__third> <ed-in label=g :val.sync=colors.rgba.g :on-change=onChange></ed-in> </div> <div class=vue-color__material__third> <ed-in label=b :val.sync=colors.rgba.b :on-change=onChange></ed-in> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-colors__photoshop> <div class=vue-colors__photoshop__head>{{head}}</div> <div class=vue-colors__photoshop__body> <div class=vue-colors__photoshop__saturation-wrap> <saturation :colors.sync=colors :on-change=childChange></saturation> </div> <div class=vue-colors__photoshop__hue-wrap> <hue :colors.sync=colors :on-change=childChange direction=vertical> <div class=vue-colors__photoshop__hue-pointer> <i class=vue-colors__photoshop__hue-pointer--left></i><i class=vue-colors__photoshop__hue-pointer--right></i> </div> </hue> </div> <div class=vue-colors__photoshop__controls> <div class=vue-colors__photoshop__previews> <div class=vue-colors__photoshop__previews__label>new</div> <div class=vue-colors__photoshop__previews__swatches> <div class=vue-colors__photoshop__previews__pr-color :style="{background: colors.hex}"></div> <div class=vue-colors__photoshop__previews__pr-color :style="{background: currentColor}"></div> </div> <div class=vue-colors__photoshop__previews__label>current</div> </div> <div class=vue-colors__photoshop__actions> <div class=vue-colors__photoshop__ac-btn @click=handleAccept>OK</div> <div class=vue-colors__photoshop__ac-btn @click=handleCancel>Cancel</div> <div class=vue-colors__photoshop__fields> <ed-in label=h :val.sync=colors.hsl.h :on-change=inputChange></ed-in> <ed-in label=s :val.sync=colors.hsl.s :on-change=inputChange></ed-in> <ed-in label=v :val.sync=colors.hsl.l :on-change=inputChange></ed-in> <div class=vue-colors__photoshop__fields__divider></div> <ed-in label=r :val.sync=colors.rgba.r :on-change=inputChange></ed-in> <ed-in label=g :val.sync=colors.rgba.g :on-change=inputChange></ed-in> <ed-in label=b :val.sync=colors.rgba.b :on-change=inputChange></ed-in> <div class=vue-colors__photoshop__fields__divider></div> <ed-in label=# class=vue-colors__photoshop__fields__hex :val.sync=colors.hex :on-change=inputChange></ed-in> </div> </div> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-color__sketch> <div class=vue-color__sketch__saturation-wrap> <saturation :colors.sync=colors :on-change=childChange></saturation> </div> <div class=vue-color__sketch__controls> <div class=vue-color__sketch__sliders> <div class=vue-color__sketch__hue-wrap> <hue :colors.sync=colors :on-change=childChange></hue> </div> <div class=vue-color__sketch__alpha-wrap> <alpha :colors.sync=colors :on-change=childChange></alpha> </div> </div> <div class=vue-color__sketch__color-wrap> <div class=vue-color__sketch__active-color :style="{background: activeColor}"></div> </div> </div> <div class=vue-color__sketch__field> <div class=vue-color__sketch__field--double> <ed-in label=hex :val.sync=colors.hex :on-change=inputChange></ed-in> </div> <div class=vue-color__sketch__field--single> <ed-in label=r :val.sync=colors.rgba.r :on-change=inputChange></ed-in> </div> <div class=vue-color__sketch__field--single> <ed-in label=g :val.sync=colors.rgba.g :on-change=inputChange></ed-in> </div> <div class=vue-color__sketch__field--single> <ed-in label=b :val.sync=colors.rgba.b :on-change=inputChange></ed-in> </div> <div class=vue-color__sketch__field--single> <ed-in label=a :val.sync=colors.a :arrow-offset=0.01 :max=1 :on-change=inputChange></ed-in> </div> </div> <div class=vue-color__sketch__presets> <div class=vue-color__sketch__presets-color v-for="c in presetColors" :style="{background: c}" @click=handlePreset(c)> </div> </div> </div> '},function(e,o){e.exports=" <div class=vue-color__slider> <div class=vue-color__slider__hue-warp> <hue :colors.sync=colors :on-change=hueChange></hue> </div> <div class=vue-color__slider__swatches> <div class=vue-color__slider__swatch v-for=\"offset in swatches\" data-index={{$index}} @click=\"handleSwClick($index, offset)\"> <div class=vue-color__slider__swatch-picker :class=\"{'vue-color__slider__swatch-picker--active': offset == activeOffset}\" :style=\"{background: 'hsl(' + colors.hsl.h + ', 50%, ' + (offset * 100) + '%)'}\"></div> </div> </div> </div> "},function(e,o){e.exports=' <div class=vue-color__swatches data-pick={{pick}}> <div class=vue-color__swatches__box> <div class=vue-color__swatches__color-group v-for="group in defaultColors"> <div class=vue-color__swatches__color-it v-for="c in group" data-color={{c}} @click=handlerClick(c) :style="{background: c}"> <div class=vue-color__swatches__pick v-show="c == pick"> <svg style="width: 24px; height:24px" viewBox="0 0 24 24"> <path d=M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z /> </svg> </div> </div> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-color__c-alpha> <div class=vue-color__c-alpha__checkboard-wrap> <checkboard></checkboard> </div> <div class=vue-color__c-alpha__gradient :style="{background: gradientColor}"></div> <div class=vue-color__c-alpha__container v-el:container @mousedown=handleMouseDown @touchmove=handleChange @touchstart=handleChange> <div class=vue-color__c-alpha__pointer :style="{left: colors.a * 100 + \'%\'}"> <slot><div class=vue-color__c-alpha__picker></div></slot> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-color__c-checkerboard :style="{background:  bgStyle}"></div> '},function(e,o){e.exports=' <div class=vue-color__editable-input> <input class=vue-color__editable-input__input v-model="val | maxFilter" @keydown=handleKeyDown @input=handleChange> <span class=vue-color__editable-input__label @mousedown=handleMouseDown>{{label}}</span> </div> '},function(e,o){e.exports=' <div :class="[\'vue-color__c-hue\', directionClass]"> <div class=vue-color__c-hue__container v-el:container @mousedown=handleMouseDown @touchmove=handleChange @touchstart=handleChange> <div class=vue-color__c-hue__pointer :style="{top: pointerTop, left: pointerLeft}"> <slot><div class=vue-color__c-hue__picker></div></slot> </div> </div> </div> '},function(e,o){e.exports=' <div class=vue-color__saturation :style="{background: bgColor}" v-el:container @mousedown=handleMouseDown> <div class=vue-color__saturation--white></div> <div class=vue-color__saturation--black></div> <div class=vue-color__saturation--pointer :style="{top: pointerTop, left: pointerLeft}"> <slot><div class=vue-color__saturation--circle></div></slot> </div> </div> '},function(e,o,t){var r,i;t(56),r=t(8),i=t(36),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(57),r=t(9),i=t(37),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(58),r=t(10),i=t(38),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(59),r=t(11),i=t(39),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(60),r=t(12),i=t(40),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(61),r=t(13),i=t(41),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(62),r=t(14),i=t(42),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),
i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r,i;t(64),r=t(16),i=t(44),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,o,t){var r=t(20);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(21);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(22);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(23);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(24);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(25);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(26);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(27);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(28);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(29);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(30);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(31);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)}])});
},{}],112:[function(require,module,exports){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  var match = id.match(/[^\/]+\.vue$/)
  return match ? match[0] : id
}

},{}],113:[function(require,module,exports){
/*!
 * vue-resource v0.9.3
 * https://github.com/vuejs/vue-resource
 * Released under the MIT License.
 */

'use strict';

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$2(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$2.reject = function (r) {
    return new Promise$2(function (resolve, reject) {
        reject(r);
    });
};

Promise$2.resolve = function (x) {
    return new Promise$2(function (resolve, reject) {
        resolve(x);
    });
};

Promise$2.all = function all(iterable) {
    return new Promise$2(function (resolve, reject) {
        var count = 0,
            result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$2.race = function race(iterable) {
    return new Promise$2(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$2.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$2.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;
                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$2(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

var PromiseObj = window.Promise || Promise$2;

function Promise$1(executor, context) {

    if (executor instanceof PromiseObj) {
        this.promise = executor;
    } else {
        this.promise = new PromiseObj(executor.bind(context));
    }

    this.context = context;
}

Promise$1.all = function (iterable, context) {
    return new Promise$1(PromiseObj.all(iterable), context);
};

Promise$1.resolve = function (value, context) {
    return new Promise$1(PromiseObj.resolve(value), context);
};

Promise$1.reject = function (reason, context) {
    return new Promise$1(PromiseObj.reject(reason), context);
};

Promise$1.race = function (iterable, context) {
    return new Promise$1(PromiseObj.race(iterable), context);
};

var p = Promise$1.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new Promise$1(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new Promise$1(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return PromiseObj.reject(reason);
    });
};

var debug = false;
var util = {};
var array = [];
function Util (Vue) {
    util = Vue.util;
    debug = Vue.config.debug || !Vue.config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return util.nextTick(cb, ctx);
}

function trim(str) {
    return str.replace(/^\s*|\s*$/g, '');
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isBoolean(val) {
    return val === true || val === false;
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = Promise$1.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
}

function each(obj, iterator) {

    var i, key;

    if (typeof obj.length == 'number') {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }
    });

    return target;
}

function _assign(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

function root (options, next) {

    var url = next(options);

    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
        url = options.root + '/' + url;
    }

    return url;
}

function query (options, next) {

    var urlParams = Object.keys(Url.options.params),
        query = {},
        url = next(options);

    each(options.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url),
        expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'],
        variables = [];

    return {
        vars: variables,
        expand: function (context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null,
                        values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }
                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key],
        result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

function template (options) {

    var variables = [],
        url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

var ie = document.documentMode;
var el = document.createElement('a');

function Url(url, params) {

    var self = this || {},
        options = url,
        transform;

    if (isString(url)) {
        options = { url: url, params: params };
    }

    options = merge({}, Url.options, self.$options, options);

    Url.transforms.forEach(function (handler) {
        transform = factory(handler, transform, self.$vm);
    });

    return transform(options);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transforms = [template, query, root];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [],
        escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    if (ie) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options) {
        return handler.call(vm, options, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj),
        plain = isPlainObject(obj),
        hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

function xdrClient (request) {
    return new Promise$1(function (resolve) {

        var xdr = new XDomainRequest(),
            handler = function (event) {

            var response = request.respondWith(xdr.responseText, {
                status: xdr.status,
                statusText: xdr.statusText
            });

            resolve(response);
        };

        request.abort = function () {
            return xdr.abort();
        };

        xdr.open(request.method, request.getUrl(), true);
        xdr.timeout = 0;
        xdr.onload = handler;
        xdr.onerror = handler;
        xdr.ontimeout = function () {};
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

var ORIGIN_URL = Url.parse(location.href);
var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

function cors (request, next) {

    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
        request.crossOrigin = true;
    }

    if (request.crossOrigin) {

        if (!SUPPORTS_CORS) {
            request.client = xdrClient;
        }

        delete request.emulateHTTP;
    }

    next();
}

function crossOrigin(request) {

    var requestUrl = Url.parse(Url(request));

    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
}

function body (request, next) {

    if (request.emulateJSON && isPlainObject(request.body)) {
        request.body = Url.params(request.body);
        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (isFormData(request.body)) {
        delete request.headers['Content-Type'];
    }

    if (isPlainObject(request.body)) {
        request.body = JSON.stringify(request.body);
    }

    next(function (response) {

        var contentType = response.headers['Content-Type'];

        if (isString(contentType) && contentType.indexOf('application/json') === 0) {

            try {
                response.data = response.json();
            } catch (e) {
                response.data = null;
            }
        } else {
            response.data = response.text();
        }
    });
}

function jsonpClient (request) {
    return new Promise$1(function (resolve) {

        var name = request.jsonp || 'callback',
            callback = '_jsonp' + Math.random().toString(36).substr(2),
            body = null,
            handler,
            script;

        handler = function (event) {

            var status = 0;

            if (event.type === 'load' && body !== null) {
                status = 200;
            } else if (event.type === 'error') {
                status = 404;
            }

            resolve(request.respondWith(body, { status: status }));

            delete window[callback];
            document.body.removeChild(script);
        };

        request.params[name] = callback;

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

function jsonp (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next(function (response) {

        if (request.method == 'JSONP') {
            response.data = response.json();
        }
    });
}

function before (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
}

/**
 * HTTP method override Interceptor.
 */

function method (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers['X-HTTP-Method-Override'] = request.method;
        request.method = 'POST';
    }

    next();
}

function header (request, next) {

    request.method = request.method.toUpperCase();
    request.headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[request.method.toLowerCase()], request.headers);

    next();
}

/**
 * Timeout Interceptor.
 */

function timeout (request, next) {

    var timeout;

    if (request.timeout) {
        timeout = setTimeout(function () {
            request.abort();
        }, request.timeout);
    }

    next(function (response) {

        clearTimeout(timeout);
    });
}

function xhrClient (request) {
    return new Promise$1(function (resolve) {

        var xhr = new XMLHttpRequest(),
            handler = function (event) {

            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText),
                headers: parseHeaders(xhr.getAllResponseHeaders())
            });

            resolve(response);
        };

        request.abort = function () {
            return xhr.abort();
        };

        xhr.open(request.method, request.getUrl(), true);
        xhr.timeout = 0;
        xhr.onload = handler;
        xhr.onerror = handler;

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        if (request.credentials === true) {
            xhr.withCredentials = true;
        }

        each(request.headers || {}, function (value, header) {
            xhr.setRequestHeader(header, value);
        });

        xhr.send(request.getBody());
    });
}

function parseHeaders(str) {

    var headers = {},
        value,
        name,
        i;

    each(trim(str).split('\n'), function (row) {

        i = row.indexOf(':');
        name = trim(row.slice(0, i));
        value = trim(row.slice(i + 1));

        if (headers[name]) {

            if (isArray(headers[name])) {
                headers[name].push(value);
            } else {
                headers[name] = [headers[name], value];
            }
        } else {

            headers[name] = value;
        }
    });

    return headers;
}

function Client (context) {

    var reqHandlers = [sendRequest],
        resHandlers = [],
        handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new Promise$1(function (resolve) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);
                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        });
                    });

                    when(response, resolve);

                    return;
                }

                exec();
            }

            exec();
        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request, resolve) {

    var client = request.client || xhrClient;

    resolve(client(request));
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * HTTP Response.
 */

var Response = function () {
    function Response(body, _ref) {
        var url = _ref.url;
        var headers = _ref.headers;
        var status = _ref.status;
        var statusText = _ref.statusText;
        classCallCheck(this, Response);


        this.url = url;
        this.body = body;
        this.headers = headers || {};
        this.status = status || 0;
        this.statusText = statusText || '';
        this.ok = status >= 200 && status < 300;
    }

    Response.prototype.text = function text() {
        return this.body;
    };

    Response.prototype.blob = function blob() {
        return new Blob([this.body]);
    };

    Response.prototype.json = function json() {
        return JSON.parse(this.body);
    };

    return Response;
}();

var Request = function () {
    function Request(options) {
        classCallCheck(this, Request);


        this.method = 'GET';
        this.body = null;
        this.params = {};
        this.headers = {};

        assign(this, options);
    }

    Request.prototype.getUrl = function getUrl() {
        return Url(this);
    };

    Request.prototype.getBody = function getBody() {
        return this.body;
    };

    Request.prototype.respondWith = function respondWith(body, options) {
        return new Response(body, assign(options || {}, { url: this.getUrl() }));
    };

    return Request;
}();

/**
 * Service for sending network requests.
 */

var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

function Http(options) {

    var self = this || {},
        client = Client(self.$vm);

    defaults(options || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {
        client.use(handler);
    });

    return client(new Request(options)).then(function (response) {

        return response.ok ? response : Promise$1.reject(response);
    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return Promise$1.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    custom: CUSTOM_HEADERS,
    common: COMMON_HEADERS
};

Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

    Http[method] = function (url, options) {
        return this(assign(options || {}, { url: url, method: method }));
    };
});

['post', 'put', 'patch'].forEach(function (method) {

    Http[method] = function (url, body, options) {
        return this(assign(options || {}, { url: url, method: method, body: body }));
    };
});

function Resource(url, params, actions, options) {

    var self = this || {},
        resource = {};

    actions = assign({}, Resource.actions, actions);

    each(actions, function (action, name) {

        action = merge({ url: url, params: params || {} }, options, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options = assign({}, action),
        params = {},
        body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
    }

    options.body = body;
    options.params = assign({}, options.params, params);

    return options;
}

Resource.actions = {

    get: { method: 'GET' },
    save: { method: 'POST' },
    query: { method: 'GET' },
    update: { method: 'PUT' },
    remove: { method: 'DELETE' },
    delete: { method: 'DELETE' }

};

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = Promise$1;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function () {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function () {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function () {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function () {
                var _this = this;

                return function (executor) {
                    return new Vue.Promise(executor, _this);
                };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

module.exports = plugin;
},{}],114:[function(require,module,exports){
"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperties = require("babel-runtime/core-js/object/define-properties");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _preventExtensions = require("babel-runtime/core-js/object/prevent-extensions");

var _preventExtensions2 = _interopRequireDefault(_preventExtensions);

var _isExtensible = require("babel-runtime/core-js/object/is-extensible");

var _isExtensible2 = _interopRequireDefault(_isExtensible);

var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) ? exports.VueSelect = e() : t.VueSelect = e();
}(undefined, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
    }var n = {};return e.m = t, e.c = n, e.p = "/", e(0);
  }([function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.mixins = e.VueSelect = void 0;var o = n(85),
        i = r(o),
        s = n(41),
        u = r(s);e["default"] = i["default"], e.VueSelect = i["default"], e.mixins = u["default"];
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
  }, function (t, e, n) {
    t.exports = !n(9)(function () {
      return 7 != Object.defineProperty({}, "a", { get: function get() {
          return 7;
        } }).a;
    });
  }, function (t, e) {
    var n = {}.hasOwnProperty;t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var r = n(11),
        o = n(33),
        i = n(25),
        s = _defineProperty2.default;e.f = n(2) ? _defineProperty2.default : function (t, e, n) {
      if (r(t), e = i(e, !0), r(n), o) try {
        return s(t, e, n);
      } catch (u) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    var r = n(59),
        o = n(16);t.exports = function (t) {
      return r(o(t));
    };
  }, function (t, e) {
    var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    var r = n(4),
        o = n(14);t.exports = n(2) ? function (t, e, n) {
      return r.f(t, e, o(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    var r = n(23)("wks"),
        o = n(15),
        i = n(1).Symbol,
        s = "function" == typeof i,
        u = t.exports = function (t) {
      return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t));
    };u.store = r;
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var r = n(38),
        o = n(17);t.exports = _keys2.default || function (t) {
      return r(t, o);
    };
  }, function (t, e, n) {
    var r = n(13);t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");return t;
    };
  }, function (t, e, n) {
    var r = n(1),
        o = n(6),
        i = n(56),
        s = n(7),
        u = "prototype",
        a = function a(t, e, n) {
      var c,
          l,
          f,
          p = t & a.F,
          d = t & a.G,
          h = t & a.S,
          v = t & a.P,
          y = t & a.B,
          b = t & a.W,
          g = d ? o : o[e] || (o[e] = {}),
          m = g[u],
          x = d ? r : h ? r[e] : (r[e] || {})[u];d && (n = e);for (c in n) {
        l = !p && x && void 0 !== x[c], l && c in g || (f = l ? x[c] : n[c], g[c] = d && "function" != typeof x[c] ? n[c] : y && l ? i(f, r) : b && x[c] == f ? function (t) {
          var e = function e(_e, n, r) {
            if (this instanceof t) {
              switch (arguments.length) {case 0:
                  return new t();case 1:
                  return new t(_e);case 2:
                  return new t(_e, n);}return new t(_e, n, r);
            }return t.apply(this, arguments);
          };return e[u] = t[u], e;
        }(f) : v && "function" == typeof f ? i(Function.call, f) : f, v && ((g.virtual || (g.virtual = {}))[c] = f, t & a.R && m && !m[c] && s(m, c, f)));
      }
    };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) ? null !== t : "function" == typeof t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  }, function (t, e) {
    var n = 0,
        r = Math.random();t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e) {
    t.exports = {};
  }, function (t, e) {
    t.exports = !0;
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e, n) {
    var r = n(4).f,
        o = n(3),
        i = n(8)("toStringTag");t.exports = function (t, e, n) {
      t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e });
    };
  }, function (t, e, n) {
    var r = n(23)("keys"),
        o = n(15);t.exports = function (t) {
      return r[t] || (r[t] = o(t));
    };
  }, function (t, e, n) {
    var r = n(1),
        o = "__core-js_shared__",
        i = r[o] || (r[o] = {});t.exports = function (t) {
      return i[t] || (i[t] = {});
    };
  }, function (t, e) {
    var n = Math.ceil,
        r = Math.floor;t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function (t, e, n) {
    var r = n(13);t.exports = function (t, e) {
      if (!r(t)) return t;var n, o;if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var r = n(1),
        o = n(6),
        i = n(19),
        s = n(27),
        u = n(4).f;t.exports = function (t) {
      var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});"_" == t.charAt(0) || t in e || u(e, t, { value: s.f(t) });
    };
  }, function (t, e, n) {
    e.f = n(8);
  }, function (t, e) {
    "use strict";
    t.exports = { props: { loading: { type: Boolean, "default": !1 }, onSearch: { type: Function, "default": !1 }, debounce: { type: Number, "default": 0 } }, watch: { search: function search() {
          this.search.length > 0 && this.onSearch && this.onSearch(this.search, this.toggleLoading);
        } }, methods: { toggleLoading: function toggleLoading() {
          var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];return null == t ? this.loading = !this.loading : this.loading = t;
        } } };
  }, function (t, e) {
    "use strict";
    t.exports = { watch: { typeAheadPointer: function typeAheadPointer() {
          this.maybeAdjustScroll();
        } }, methods: { maybeAdjustScroll: function maybeAdjustScroll() {
          var t = this.pixelsToPointerTop(),
              e = this.pixelsToPointerBottom();return t <= this.viewport().top ? this.scrollTo(t) : e >= this.viewport().bottom ? this.scrollTo(this.viewport().top + this.pointerHeight()) : void 0;
        }, pixelsToPointerTop: function n() {
          for (var n = 0, t = 0; t < this.typeAheadPointer; t++) {
            n += this.$els.dropdownMenu.children[t].offsetHeight;
          }return n;
        }, pixelsToPointerBottom: function pixelsToPointerBottom() {
          return this.pixelsToPointerTop() + this.pointerHeight();
        }, pointerHeight: function pointerHeight() {
          var t = this.$els.dropdownMenu.children[this.typeAheadPointer];return t ? t.offsetHeight : 0;
        }, viewport: function viewport() {
          return { top: this.$els.dropdownMenu.scrollTop, bottom: this.$els.dropdownMenu.offsetHeight + this.$els.dropdownMenu.scrollTop };
        }, scrollTo: function scrollTo(t) {
          return this.$els.dropdownMenu.scrollTop = t;
        } } };
  }, function (t, e) {
    "use strict";
    t.exports = { data: function data() {
        return { typeAheadPointer: -1 };
      }, watch: { filteredOptions: function filteredOptions() {
          this.typeAheadPointer = 0;
        } }, methods: { typeAheadUp: function typeAheadUp() {
          this.typeAheadPointer > 0 && (this.typeAheadPointer--, this.maybeAdjustScroll && this.maybeAdjustScroll());
        }, typeAheadDown: function typeAheadDown() {
          this.typeAheadPointer < this.filteredOptions.length - 1 && (this.typeAheadPointer++, this.maybeAdjustScroll && this.maybeAdjustScroll());
        }, typeAheadSelect: function typeAheadSelect() {
          this.filteredOptions[this.typeAheadPointer] ? this.select(this.filteredOptions[this.typeAheadPointer]) : this.taggable && this.search.length && this.select(this.search), this.clearSearchOnSelect && (this.search = "");
        } } };
  }, function (t, e) {
    var n = {}.toString;t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, n) {
    var r = n(13),
        o = n(1).document,
        i = r(o) && r(o.createElement);t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  }, function (t, e, n) {
    t.exports = !n(2) && !n(9)(function () {
      return 7 != Object.defineProperty(n(32)("div"), "a", { get: function get() {
          return 7;
        } }).a;
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(19),
        o = n(12),
        i = n(39),
        s = n(7),
        u = n(3),
        a = n(18),
        c = n(61),
        l = n(21),
        f = n(68),
        p = n(8)("iterator"),
        d = !([].keys && "next" in [].keys()),
        h = "@@iterator",
        v = "keys",
        y = "values",
        b = function b() {
      return this;
    };t.exports = function (t, e, n, g, m, x, w) {
      c(n, e, g);var S,
          O,
          _,
          j = function j(t) {
        if (!d && t in E) return E[t];switch (t) {case v:
            return function () {
              return new n(this, t);
            };case y:
            return function () {
              return new n(this, t);
            };}return function () {
          return new n(this, t);
        };
      },
          A = e + " Iterator",
          P = m == y,
          k = !1,
          E = t.prototype,
          M = E[p] || E[h] || m && E[m],
          T = M || j(m),
          C = m ? P ? j("entries") : T : void 0,
          $ = "Array" == e ? E.entries || M : M;if ($ && (_ = f($.call(new t())), _ !== Object.prototype && (l(_, A, !0), r || u(_, p) || s(_, p, b))), P && M && M.name !== y && (k = !0, T = function T() {
        return M.call(this);
      }), r && !w || !d && !k && E[p] || s(E, p, T), a[e] = T, a[A] = b, m) if (S = { values: P ? T : j(y), keys: x ? T : j(v), entries: C }, w) for (O in S) {
        O in E || i(E, O, S[O]);
      } else o(o.P + o.F * (d || k), e, S);return S;
    };
  }, function (t, e, n) {
    var r = n(11),
        o = n(65),
        i = n(17),
        s = n(22)("IE_PROTO"),
        u = function u() {},
        a = "prototype",
        _c = function c() {
      var t,
          e = n(32)("iframe"),
          r = i.length,
          o = ">";for (e.style.display = "none", n(58).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + o), t.close(), _c = t.F; r--;) {
        delete _c[a][i[r]];
      }return _c();
    };t.exports = _create2.default || function (t, e) {
      var n;return null !== t ? (u[a] = r(t), n = new u(), u[a] = null, n[s] = t) : n = _c(), void 0 === e ? n : o(n, e);
    };
  }, function (t, e, n) {
    var r = n(38),
        o = n(17).concat("length", "prototype");e.f = _getOwnPropertyNames2.default || function (t) {
      return r(t, o);
    };
  }, function (t, e) {
    e.f = _getOwnPropertySymbols2.default;
  }, function (t, e, n) {
    var r = n(3),
        o = n(5),
        i = n(55)(!1),
        s = n(22)("IE_PROTO");t.exports = function (t, e) {
      var n,
          u = o(t),
          a = 0,
          c = [];for (n in u) {
        n != s && r(u, n) && c.push(n);
      }for (; e.length > a;) {
        r(u, n = e[a++]) && (~i(c, n) || c.push(n));
      }return c;
    };
  }, function (t, e, n) {
    t.exports = n(7);
  }, function (t, e, n) {
    var r = n(16);t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(28),
        i = r(o),
        s = n(30),
        u = r(s),
        a = n(29),
        c = r(a);e["default"] = { ajax: i["default"], pointer: u["default"], pointerScroll: c["default"] };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(44),
        i = r(o),
        s = n(47),
        u = r(s),
        a = n(48),
        c = r(a),
        l = n(29),
        f = r(l),
        p = n(30),
        d = r(p),
        h = n(28),
        v = r(h);e["default"] = { mixins: [f["default"], d["default"], v["default"]], props: { value: { "default": null }, options: { type: Array, "default": function _default() {
            return [];
          } }, maxHeight: { type: String, "default": "400px" }, searchable: { type: Boolean, "default": !0 }, multiple: { type: Boolean, "default": !1 }, placeholder: { type: String, "default": "" }, transition: { type: String, "default": "expand" }, clearSearchOnSelect: { type: Boolean, "default": !0 }, label: { type: String, "default": "label" }, getOptionLabel: { type: Function, "default": function _default(t) {
            return "object" === ("undefined" == typeof t ? "undefined" : (0, c["default"])(t)) && this.label && t[this.label] ? t[this.label] : t;
          } }, onChange: Function, taggable: { type: Boolean, "default": !1 }, pushTags: { type: Boolean, "default": !1 }, createOption: { type: Function, "default": function _default(t) {
            return "object" === (0, c["default"])(this.options[0]) ? (0, u["default"])({}, this.label, t) : t;
          } }, resetOnOptionsChange: { type: Boolean, "default": !1 } }, data: function data() {
        return { search: "", open: !1 };
      }, watch: { value: function value(t, e) {
          this.multiple ? this.onChange ? this.onChange(t) : null : this.onChange && t !== e ? this.onChange(t) : null;
        }, options: function options() {
          !this.taggable && this.resetOnOptionsChange && this.$set("value", this.multiple ? [] : null);
        }, multiple: function multiple(t) {
          this.$set("value", t ? [] : null);
        } }, methods: { select: function select(t) {
          this.isOptionSelected(t) ? this.deselect(t) : (this.taggable && !this.optionExists(t) && (t = this.createOption(t), this.pushTags && this.options.push(t)), this.multiple ? this.value ? this.value.push(t) : this.$set("value", [t]) : this.value = t), this.onAfterSelect(t);
        }, deselect: function deselect(t) {
          var e = this;if (this.multiple) {
            var n = -1;this.value.forEach(function (r) {
              (r === t || "object" === ("undefined" == typeof r ? "undefined" : (0, c["default"])(r)) && r[e.label] === t[e.label]) && (n = r);
            }), this.value.$remove(n);
          } else this.value = null;
        }, onAfterSelect: function onAfterSelect(t) {
          this.multiple || (this.open = !this.open, this.$els.search.blur()), this.clearSearchOnSelect && (this.search = "");
        }, toggleDropdown: function toggleDropdown(t) {
          t.target !== this.$els.openIndicator && t.target !== this.$els.search && t.target !== this.$els.toggle && t.target !== this.$el || (this.open ? this.$els.search.blur() : (this.open = !0, this.$els.search.focus()));
        }, isOptionSelected: function isOptionSelected(t) {
          var e = this;if (this.multiple && this.value) {
            var n = !1;return this.value.forEach(function (r) {
              "object" === ("undefined" == typeof r ? "undefined" : (0, c["default"])(r)) && r[e.label] === t[e.label] ? n = !0 : r === t && (n = !0);
            }), n;
          }return this.value === t;
        }, onEscape: function onEscape() {
          this.search.length ? this.search = "" : this.$els.search.blur();
        }, maybeDeleteValue: function maybeDeleteValue() {
          if (!this.$els.search.value.length && this.value) return this.multiple ? this.value.pop() : this.$set("value", null);
        }, optionExists: function optionExists(t) {
          var e = this,
              n = !1;return this.options.forEach(function (r) {
            "object" === ("undefined" == typeof r ? "undefined" : (0, c["default"])(r)) && r[e.label] === t ? n = !0 : r === t && (n = !0);
          }), n;
        } }, computed: { dropdownClasses: function dropdownClasses() {
          return { open: this.open, searchable: this.searchable, loading: this.loading };
        }, searchPlaceholder: function searchPlaceholder() {
          if (this.isValueEmpty && this.placeholder) return this.placeholder;
        }, filteredOptions: function filteredOptions() {
          var t = this.$options.filters.filterBy(this.options, this.search);return this.taggable && this.search.length && !this.optionExists(this.search) && t.unshift(this.search), t;
        }, isValueEmpty: function isValueEmpty() {
          return !this.value || ("object" === (0, c["default"])(this.value) ? !(0, i["default"])(this.value).length : !this.value.length);
        }, valueAsArray: function valueAsArray() {
          return this.multiple ? this.value : this.value ? [this.value] : [];
        } } };
  }, function (t, e, n) {
    t.exports = { "default": n(49), __esModule: !0 };
  }, function (t, e, n) {
    t.exports = { "default": n(50), __esModule: !0 };
  }, function (t, e, n) {
    t.exports = { "default": n(51), __esModule: !0 };
  }, function (t, e, n) {
    t.exports = { "default": n(52), __esModule: !0 };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }e.__esModule = !0;var o = n(43),
        i = r(o);e["default"] = function (t, e, n) {
      return e in t ? (0, i["default"])(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }e.__esModule = !0;var o = n(46),
        i = r(o),
        s = n(45),
        u = r(s),
        a = "function" == typeof u["default"] && "symbol" == (0, _typeof3.default)(i["default"]) ? function (t) {
      return typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);
    } : function (t) {
      return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);
    };e["default"] = "function" == typeof u["default"] && "symbol" === a(i["default"]) ? function (t) {
      return "undefined" == typeof t ? "undefined" : a(t);
    } : function (t) {
      return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : a(t);
    };
  }, function (t, e, n) {
    n(74);var r = n(6).Object;t.exports = function (t, e, n) {
      return r.defineProperty(t, e, n);
    };
  }, function (t, e, n) {
    n(75), t.exports = n(6).Object.keys;
  }, function (t, e, n) {
    n(78), n(76), n(79), n(80), t.exports = n(6).Symbol;
  }, function (t, e, n) {
    n(77), n(81), t.exports = n(27).f("iterator");
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
    };
  }, function (t, e) {
    t.exports = function () {};
  }, function (t, e, n) {
    var r = n(5),
        o = n(72),
        i = n(71);t.exports = function (t) {
      return function (e, n, s) {
        var u,
            a = r(e),
            c = o(a.length),
            l = i(s, c);if (t && n != n) {
          for (; c > l;) {
            if (u = a[l++], u != u) return !0;
          }
        } else for (; c > l; l++) {
          if ((t || l in a) && a[l] === n) return t || l || 0;
        }return !t && -1;
      };
    };
  }, function (t, e, n) {
    var r = n(53);t.exports = function (t, e, n) {
      if (r(t), void 0 === e) return t;switch (n) {case 1:
          return function (n) {
            return t.call(e, n);
          };case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };}return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e, n) {
    var r = n(10),
        o = n(37),
        i = n(20);t.exports = function (t) {
      var e = r(t),
          n = o.f;if (n) for (var s, u = n(t), a = i.f, c = 0; u.length > c;) {
        a.call(t, s = u[c++]) && e.push(s);
      }return e;
    };
  }, function (t, e, n) {
    t.exports = n(1).document && document.documentElement;
  }, function (t, e, n) {
    var r = n(31);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function (t, e, n) {
    var r = n(31);t.exports = Array.isArray || function (t) {
      return "Array" == r(t);
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(35),
        o = n(14),
        i = n(21),
        s = {};n(7)(s, n(8)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = r(s, { next: o(1, n) }), i(t, e + " Iterator");
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return { value: e, done: !!t };
    };
  }, function (t, e, n) {
    var r = n(10),
        o = n(5);t.exports = function (t, e) {
      for (var n, i = o(t), s = r(i), u = s.length, a = 0; u > a;) {
        if (i[n = s[a++]] === e) return n;
      }
    };
  }, function (t, e, n) {
    var r = n(15)("meta"),
        o = n(13),
        i = n(3),
        s = n(4).f,
        u = 0,
        a = _isExtensible2.default || function () {
      return !0;
    },
        c = !n(9)(function () {
      return a((0, _preventExtensions2.default)({}));
    }),
        l = function l(t) {
      s(t, r, { value: { i: "O" + ++u, w: {} } });
    },
        f = function f(t, e) {
      if (!o(t)) return "symbol" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) ? t : ("string" == typeof t ? "S" : "P") + t;if (!i(t, r)) {
        if (!a(t)) return "F";if (!e) return "E";l(t);
      }return t[r].i;
    },
        p = function p(t, e) {
      if (!i(t, r)) {
        if (!a(t)) return !0;if (!e) return !1;l(t);
      }return t[r].w;
    },
        d = function d(t) {
      return c && h.NEED && a(t) && !i(t, r) && l(t), t;
    },
        h = t.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: p, onFreeze: d };
  }, function (t, e, n) {
    var r = n(4),
        o = n(11),
        i = n(10);t.exports = n(2) ? _defineProperties2.default : function (t, e) {
      o(t);for (var n, s = i(e), u = s.length, a = 0; u > a;) {
        r.f(t, n = s[a++], e[n]);
      }return t;
    };
  }, function (t, e, n) {
    var r = n(20),
        o = n(14),
        i = n(5),
        s = n(25),
        u = n(3),
        a = n(33),
        c = _getOwnPropertyDescriptor2.default;e.f = n(2) ? c : function (t, e) {
      if (t = i(t), e = s(e, !0), a) try {
        return c(t, e);
      } catch (n) {}if (u(t, e)) return o(!r.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    var r = n(5),
        o = n(36).f,
        i = {}.toString,
        s = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) && window && _getOwnPropertyNames2.default ? (0, _getOwnPropertyNames2.default)(window) : [],
        u = function u(t) {
      try {
        return o(t);
      } catch (e) {
        return s.slice();
      }
    };t.exports.f = function (t) {
      return s && "[object Window]" == i.call(t) ? u(t) : o(r(t));
    };
  }, function (t, e, n) {
    var r = n(3),
        o = n(40),
        i = n(22)("IE_PROTO"),
        s = Object.prototype;t.exports = _getPrototypeOf2.default || function (t) {
      return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
  }, function (t, e, n) {
    var r = n(12),
        o = n(6),
        i = n(9);t.exports = function (t, e) {
      var n = (o.Object || {})[t] || Object[t],
          s = {};s[t] = e(n), r(r.S + r.F * i(function () {
        n(1);
      }), "Object", s);
    };
  }, function (t, e, n) {
    var r = n(24),
        o = n(16);t.exports = function (t) {
      return function (e, n) {
        var i,
            s,
            u = String(o(e)),
            a = r(n),
            c = u.length;return a < 0 || a >= c ? t ? "" : void 0 : (i = u.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === c || (s = u.charCodeAt(a + 1)) < 56320 || s > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : (i - 55296 << 10) + (s - 56320) + 65536);
      };
    };
  }, function (t, e, n) {
    var r = n(24),
        o = Math.max,
        i = Math.min;t.exports = function (t, e) {
      return t = r(t), t < 0 ? o(t + e, 0) : i(t, e);
    };
  }, function (t, e, n) {
    var r = n(24),
        o = Math.min;t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(54),
        o = n(62),
        i = n(18),
        s = n(5);t.exports = n(34)(Array, "Array", function (t, e) {
      this._t = s(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]);
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
  }, function (t, e, n) {
    var r = n(12);r(r.S + r.F * !n(2), "Object", { defineProperty: n(4).f });
  }, function (t, e, n) {
    var r = n(40),
        o = n(10);n(69)("keys", function () {
      return function (t) {
        return o(r(t));
      };
    });
  }, function (t, e) {}, function (t, e, n) {
    "use strict";
    var r = n(70)(!0);n(34)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          e = this._t,
          n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 });
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(1),
        o = n(3),
        i = n(2),
        s = n(12),
        u = n(39),
        a = n(64).KEY,
        c = n(9),
        l = n(23),
        f = n(21),
        p = n(15),
        d = n(8),
        h = n(27),
        v = n(26),
        y = n(63),
        b = n(57),
        g = n(60),
        m = n(11),
        x = n(5),
        w = n(25),
        S = n(14),
        O = n(35),
        _ = n(67),
        j = n(66),
        A = n(4),
        P = n(10),
        k = j.f,
        E = A.f,
        M = _.f,
        _T = r.Symbol,
        C = r.JSON,
        $ = C && C.stringify,
        F = "prototype",
        N = d("_hidden"),
        B = d("toPrimitive"),
        I = {}.propertyIsEnumerable,
        L = l("symbol-registry"),
        z = l("symbols"),
        D = l("op-symbols"),
        V = Object[F],
        R = "function" == typeof _T,
        H = r.QObject,
        U = !H || !H[F] || !H[F].findChild,
        W = i && c(function () {
      return 7 != O(E({}, "a", { get: function get() {
          return E(this, "a", { value: 7 }).a;
        } })).a;
    }) ? function (t, e, n) {
      var r = k(V, e);r && delete V[e], E(t, e, n), r && t !== V && E(V, e, r);
    } : E,
        J = function J(t) {
      var e = z[t] = O(_T[F]);return e._k = t, e;
    },
        G = R && "symbol" == (0, _typeof3.default)(_T.iterator) ? function (t) {
      return "symbol" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t));
    } : function (t) {
      return t instanceof _T;
    },
        K = function K(t, e, n) {
      return t === V && K(D, e, n), m(t), e = w(e, !0), m(n), o(z, e) ? (n.enumerable ? (o(t, N) && t[N][e] && (t[N][e] = !1), n = O(n, { enumerable: S(0, !1) })) : (o(t, N) || E(t, N, S(1, {})), t[N][e] = !0), W(t, e, n)) : E(t, e, n);
    },
        Y = function Y(t, e) {
      m(t);for (var n, r = b(e = x(e)), o = 0, i = r.length; i > o;) {
        K(t, n = r[o++], e[n]);
      }return t;
    },
        Z = function Z(t, e) {
      return void 0 === e ? O(t) : Y(O(t), e);
    },
        Q = function Q(t) {
      var e = I.call(this, t = w(t, !0));return !(this === V && o(z, t) && !o(D, t)) && (!(e || !o(this, t) || !o(z, t) || o(this, N) && this[N][t]) || e);
    },
        q = function q(t, e) {
      if (t = x(t), e = w(e, !0), t !== V || !o(z, e) || o(D, e)) {
        var n = k(t, e);return !n || !o(z, e) || o(t, N) && t[N][e] || (n.enumerable = !0), n;
      }
    },
        X = function X(t) {
      for (var e, n = M(x(t)), r = [], i = 0; n.length > i;) {
        o(z, e = n[i++]) || e == N || e == a || r.push(e);
      }return r;
    },
        tt = function tt(t) {
      for (var e, n = t === V, r = M(n ? D : x(t)), i = [], s = 0; r.length > s;) {
        !o(z, e = r[s++]) || n && !o(V, e) || i.push(z[e]);
      }return i;
    };R || (_T = function T() {
      if (this instanceof _T) throw TypeError("Symbol is not a constructor!");var t = p(arguments.length > 0 ? arguments[0] : void 0),
          e = function e(n) {
        this === V && e.call(D, n), o(this, N) && o(this[N], t) && (this[N][t] = !1), W(this, t, S(1, n));
      };return i && U && W(V, t, { configurable: !0, set: e }), J(t);
    }, u(_T[F], "toString", function () {
      return this._k;
    }), j.f = q, A.f = K, n(36).f = _.f = X, n(20).f = Q, n(37).f = tt, i && !n(19) && u(V, "propertyIsEnumerable", Q, !0), h.f = function (t) {
      return J(d(t));
    }), s(s.G + s.W + s.F * !R, { Symbol: _T });for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
      d(et[nt++]);
    }for (var et = P(d.store), nt = 0; et.length > nt;) {
      v(et[nt++]);
    }s(s.S + s.F * !R, "Symbol", { "for": function _for(t) {
        return o(L, t += "") ? L[t] : L[t] = _T(t);
      }, keyFor: function keyFor(t) {
        if (G(t)) return y(L, t);throw TypeError(t + " is not a symbol!");
      }, useSetter: function useSetter() {
        U = !0;
      }, useSimple: function useSimple() {
        U = !1;
      } }), s(s.S + s.F * !R, "Object", { create: Z, defineProperty: K, defineProperties: Y, getOwnPropertyDescriptor: q, getOwnPropertyNames: X, getOwnPropertySymbols: tt }), C && s(s.S + s.F * (!R || c(function () {
      var t = _T();return "[null]" != $([t]) || "{}" != $({ a: t }) || "{}" != $(Object(t));
    })), "JSON", { stringify: function stringify(t) {
        if (void 0 !== t && !G(t)) {
          for (var e, n, r = [t], o = 1; arguments.length > o;) {
            r.push(arguments[o++]);
          }return e = r[1], "function" == typeof e && (n = e), !n && g(e) || (e = function e(t, _e2) {
            if (n && (_e2 = n.call(this, t, _e2)), !G(_e2)) return _e2;
          }), r[1] = e, $.apply(C, r);
        }
      } }), _T[F][B] || n(7)(_T[F], B, _T[F].valueOf), f(_T, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
  }, function (t, e, n) {
    n(26)("asyncIterator");
  }, function (t, e, n) {
    n(26)("observable");
  }, function (t, e, n) {
    n(73);for (var r = n(1), o = n(7), i = n(18), s = n(8)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; a < 5; a++) {
      var c = u[a],
          l = r[c],
          f = l && l.prototype;f && !f[s] && o(f, s, c), i[c] = i.Array;
    }
  }, function (t, e, n) {
    e = t.exports = n(83)(), e.push([t.id, ".v-select{position:relative}.v-select .open-indicator{position:absolute;bottom:6px;right:10px;display:inline-block;cursor:pointer;pointer-events:all;-webkit-transition:all .15s cubic-bezier(1,-.115,.975,.855);transition:all .15s cubic-bezier(1,-.115,.975,.855);-webkit-transition-timing-function:cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855);opacity:1;-webkit-transition:opacity .1s;transition:opacity .1s}.v-select.loading .open-indicator{opacity:0}.v-select .open-indicator:before{border-color:rgba(60,60,60,.5);border-style:solid;border-width:.25em .25em 0 0;content:'';display:inline-block;height:10px;width:10px;vertical-align:top;-webkit-transform:rotate(133deg);transform:rotate(133deg);-webkit-transition:all .15s cubic-bezier(1,-.115,.975,.855);transition:all .15s cubic-bezier(1,-.115,.975,.855);-webkit-transition-timing-function:cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.v-select.open .open-indicator{bottom:1px}.v-select.open .open-indicator:before{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.v-select .dropdown-toggle{display:block;padding:0;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.v-select.searchable .dropdown-toggle{cursor:text}.v-select.open .dropdown-toggle{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0}.v-select>.dropdown-menu{margin:0;width:100%;overflow-y:scroll;border-top:none;border-top-left-radius:0;border-top-right-radius:0}.v-select .selected-tag{color:#333;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;height:26px;margin:4px 1px 0 3px;padding:0 .25em;float:left;line-height:1.7em}.v-select .selected-tag .close{float:none;margin-right:0;font-size:20px}.v-select input[type=search],.v-select input[type=search]:focus{display:inline-block;border:none;outline:none;margin:0;padding:0 .5em;width:10em;max-width:100%;background:none;position:relative;box-shadow:none;float:left;clear:none}.v-select input[type=search]:disabled,.v-select li a{cursor:pointer}.v-select .active a{background:rgba(50,50,50,.1);color:#333}.v-select .highlight a,.v-select li:hover>a{background:#f0f0f0;color:#333}.v-select .spinner{opacity:0;position:absolute;top:5px;right:10px;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid hsla(0,0%,39%,.1);border-right:.9em solid hsla(0,0%,39%,.1);border-bottom:.9em solid hsla(0,0%,39%,.1);border-left:.9em solid rgba(60,60,60,.45);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s infinite linear;animation:vSelectSpinner 1.1s infinite linear;-webkit-transition:opacity .1s;transition:opacity .1s}.v-select.loading .spinner{opacity:1}.v-select .spinner,.v-select .spinner:after{border-radius:50%;width:5em;height:5em}@-webkit-keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
  }, function (t, e) {
    t.exports = function () {
      var t = [];return t.toString = function () {
        for (var t = [], e = 0; e < this.length; e++) {
          var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
        }return t.join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];"number" == typeof i && (r[i] = !0);
        }for (o = 0; o < e.length; o++) {
          var s = e[o];"number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
        }
      }, t;
    };
  }, function (t, e) {
    t.exports = ' <div class="dropdown v-select" :class=dropdownClasses> <div v-el:toggle @mousedown.prevent=toggleDropdown class="dropdown-toggle clearfix" type=button> <span class=form-control v-if="!searchable && isValueEmpty"> {{ placeholder }} </span> <span class=selected-tag v-for="option in valueAsArray" track-by=$index> {{ getOptionLabel(option) }} <button v-if=multiple @click=select(option) type=button class=close> <span aria-hidden=true>&times;</span> </button> </span> <input v-el:search :debounce=debounce v-model=search v-show=searchable @keydown.delete=maybeDeleteValue @keyup.esc=onEscape @keydown.up.prevent=typeAheadUp @keydown.down.prevent=typeAheadDown @keyup.enter.prevent=typeAheadSelect @blur="open = false" @focus="open = true" type=search class=form-control :placeholder=searchPlaceholder :style="{ width: isValueEmpty ? \'100%\' : \'auto\' }"> <i v-el:open-indicator role=presentation class=open-indicator></i> <slot name=spinner> <div class=spinner v-show="onSearch && loading">Loading...</div> </slot> </div> <ul v-el:dropdown-menu v-show=open :transition=transition class=dropdown-menu :style="{ \'max-height\': maxHeight }"> <li v-for="option in filteredOptions" track-by=$index :class="{ active: isOptionSelected(option), highlight: $index === typeAheadPointer }" @mouseover="typeAheadPointer = $index"> <a @mousedown.prevent=select(option)> {{ getOptionLabel(option) }} </a> </li> <li transition=fade v-if=!filteredOptions.length class=divider></li> <li transition=fade v-if=!filteredOptions.length class=text-center> <slot name=no-options>Sorry, no matching options.</slot> </li> </ul> </div> ';
  }, function (t, e, n) {
    var r, o;n(87), r = n(42), o = n(84), t.exports = r || {}, t.exports.__esModule && (t.exports = t.exports["default"]), o && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = o);
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = f[r.id];if (o) {
          o.refs++;for (var i = 0; i < o.parts.length; i++) {
            o.parts[i](r.parts[i]);
          }for (; i < r.parts.length; i++) {
            o.parts.push(a(r.parts[i], e));
          }
        } else {
          for (var s = [], i = 0; i < r.parts.length; i++) {
            s.push(a(r.parts[i], e));
          }f[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }function o(t) {
      for (var e = [], n = {}, r = 0; r < t.length; r++) {
        var o = t[r],
            i = o[0],
            s = o[1],
            u = o[2],
            a = o[3],
            c = { css: s, media: u, sourceMap: a };n[i] ? n[i].parts.push(c) : e.push(n[i] = { id: i, parts: [c] });
      }return e;
    }function i(t, e) {
      var n = h(),
          r = b[b.length - 1];if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), b.push(e);else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
      }
    }function s(t) {
      t.parentNode.removeChild(t);var e = b.indexOf(t);e >= 0 && b.splice(e, 1);
    }function u(t) {
      var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
    }function a(t, e) {
      var n, r, o;if (e.singleton) {
        var i = y++;n = v || (v = u(e)), r = c.bind(null, n, i, !1), o = c.bind(null, n, i, !0);
      } else n = u(e), r = l.bind(null, n), o = function o() {
        s(n);
      };return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;r(t = e);
        } else o();
      };
    }function c(t, e, n, r) {
      var o = n ? "" : r.css;if (t.styleSheet) t.styleSheet.cssText = g(e, o);else {
        var i = document.createTextNode(o),
            s = t.childNodes;s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i);
      }
    }function l(t, e) {
      var n = e.css,
          r = e.media,
          o = e.sourceMap;if (r && t.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent((0, _stringify2.default)(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;else {
        for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }t.appendChild(document.createTextNode(n));
      }
    }var f = {},
        p = function p(t) {
      var e;return function () {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
      };
    },
        d = p(function () {
      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
      );
    }),
        h = p(function () {
      return document.head || document.getElementsByTagName("head")[0];
    }),
        v = null,
        y = 0,
        b = [];t.exports = function (t, e) {
      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = d()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = o(t);return r(n, e), function (t) {
        for (var i = [], s = 0; s < n.length; s++) {
          var u = n[s],
              a = f[u.id];a.refs--, i.push(a);
        }if (t) {
          var c = o(t);r(c, e);
        }for (var s = 0; s < i.length; s++) {
          var a = i[s];if (0 === a.refs) {
            for (var l = 0; l < a.parts.length; l++) {
              a.parts[l]();
            }delete f[a.id];
          }
        }
      };
    };var g = function () {
      var t = [];return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n");
      };
    }();
  }, function (t, e, n) {
    var r = n(82);"string" == typeof r && (r = [[t.id, r, ""]]);n(86)(r, {});r.locals && (t.exports = r.locals);
  }]);
});

},{"babel-runtime/core-js/json/stringify":42,"babel-runtime/core-js/object/create":44,"babel-runtime/core-js/object/define-properties":45,"babel-runtime/core-js/object/define-property":46,"babel-runtime/core-js/object/get-own-property-descriptor":47,"babel-runtime/core-js/object/get-own-property-names":48,"babel-runtime/core-js/object/get-own-property-symbols":49,"babel-runtime/core-js/object/get-prototype-of":50,"babel-runtime/core-js/object/is-extensible":51,"babel-runtime/core-js/object/keys":52,"babel-runtime/core-js/object/prevent-extensions":53,"babel-runtime/helpers/typeof":55}],115:[function(require,module,exports){
;(function () {

  var vSortable = {}
  var Sortable = typeof require === 'function'
      ? require('sortablejs')
      : window.Sortable

  if (!Sortable) {
    throw new Error('[vue-sortable] cannot locate Sortable.js.')
  }

  // exposed global options
  vSortable.config = {}

  vSortable.install = function (Vue) {
    Vue.directive('sortable', function (options) {
      options = options || {}

      var sortable = new Sortable(this.el, options)

      if (this.arg && !this.vm.sortable) {
        this.vm.sortable = {}
      }

      //  Throw an error if the given ID is not unique
      if (this.arg && this.vm.sortable[this.arg]) {
        console.warn('[vue-sortable] cannot set already defined sortable id: \'' + this.arg + '\'')
      } else if( this.arg ) {
        this.vm.sortable[this.arg] = sortable
      }
    })
  }

  if (typeof exports == "object") {
    module.exports = vSortable
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return vSortable
    })
  } else if (window.Vue) {
    window.vSortable = vSortable
    Vue.use(vSortable)
  }

})()

},{"sortablejs":109}],116:[function(require,module,exports){
(function (process){
/*!
 * vue-validator v2.1.7
 * (c) 2016 kazuya kawaguchi
 * Released under the MIT License.
 */
'use strict';

var babelHelpers = {};
babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers;
/**
 * Utilties
 */

// export default for holding the Vue reference
var exports$1 = {};
/**
 * warn
 *
 * @param {String} msg
 * @param {Error} [err]
 *
 */

function warn(msg, err) {
  if (window.console) {
    console.warn('[vue-validator] ' + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}

/**
 * empty
 *
 * @param {Array|Object} target
 * @return {Boolean}
 */

function empty(target) {
  if (target === null || target === undefined) {
    return true;
  }

  if (Array.isArray(target)) {
    if (target.length > 0) {
      return false;
    }
    if (target.length === 0) {
      return true;
    }
  } else if (exports$1.Vue.util.isPlainObject(target)) {
    for (var key in target) {
      if (exports$1.Vue.util.hasOwn(target, key)) {
        return false;
      }
    }
  }

  return true;
}

/**
 * each
 *
 * @param {Array|Object} target
 * @param {Function} iterator
 * @param {Object} [context]
 */

function each(target, iterator, context) {
  if (Array.isArray(target)) {
    for (var i = 0; i < target.length; i++) {
      iterator.call(context || target[i], target[i], i);
    }
  } else if (exports$1.Vue.util.isPlainObject(target)) {
    var hasOwn = exports$1.Vue.util.hasOwn;
    for (var key in target) {
      if (hasOwn(target, key)) {
        iterator.call(context || target[key], target[key], key);
      }
    }
  }
}

/**
 * pull
 *
 * @param {Array} arr
 * @param {Object} item
 * @return {Object|null}
 */

function pull(arr, item) {
  var index = exports$1.Vue.util.indexOf(arr, item);
  return ~index ? arr.splice(index, 1) : null;
}

/**
 * trigger
 *
 * @param {Element} el
 * @param {String} event
 * @param {Object} [args]
 */

function trigger(el, event, args) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(event, true, false);

  if (args) {
    for (var prop in args) {
      e[prop] = args[prop];
    }
  }

  // Due to Firefox bug, events fired on disabled
  // non-attached form controls can throw errors
  try {
    el.dispatchEvent(e);
  } catch (e) {}
}

/**
 * Forgiving check for a promise
 *
 * @param {Object} p
 * @return {Boolean}
 */

function isPromise(p) {
  return p && typeof p.then === 'function';
}

/**
 * Togging classes
 *
 * @param {Element} el
 * @param {String} key
 * @param {Function} fn
 */

function toggleClasses(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }

  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

/**
 * Fundamental validate functions
 */

/**
 * required
 *
 * This function validate whether the value has been filled out.
 *
 * @param {*} val
 * @return {Boolean}
 */

function required(val) {
  if (Array.isArray(val)) {
    if (val.length !== 0) {
      var valid = true;
      for (var i = 0, l = val.length; i < l; i++) {
        valid = required(val[i]);
        if (!valid) {
          break;
        }
      }
      return valid;
    } else {
      return false;
    }
  } else if (typeof val === 'number' || typeof val === 'function') {
    return true;
  } else if (typeof val === 'boolean') {
    return val;
  } else if (typeof val === 'string') {
    return val.length > 0;
  } else if (val !== null && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object') {
    return Object.keys(val).length > 0;
  } else if (val === null || val === undefined) {
    return false;
  }
}

/**
 * pattern
 *
 * This function validate whether the value matches the regex pattern
 *
 * @param val
 * @param {String} pat
 * @return {Boolean}
 */

function pattern(val, pat) {
  if (typeof pat !== 'string') {
    return false;
  }

  var match = pat.match(new RegExp('^/(.*?)/([gimy]*)$'));
  if (!match) {
    return false;
  }

  return new RegExp(match[1], match[2]).test(val);
}

/**
 * minlength
 *
 * This function validate whether the minimum length.
 *
 * @param {String|Array} val
 * @param {String|Number} min
 * @return {Boolean}
 */

function minlength(val, min) {
  if (typeof val === 'string') {
    return isInteger(min, 10) && val.length >= parseInt(min, 10);
  } else if (Array.isArray(val)) {
    return val.length >= parseInt(min, 10);
  } else {
    return false;
  }
}

/**
 * maxlength
 *
 * This function validate whether the maximum length.
 *
 * @param {String|Array} val
 * @param {String|Number} max
 * @return {Boolean}
 */

function maxlength(val, max) {
  if (typeof val === 'string') {
    return isInteger(max, 10) && val.length <= parseInt(max, 10);
  } else if (Array.isArray(val)) {
    return val.length <= parseInt(max, 10);
  } else {
    return false;
  }
}

/**
 * min
 *
 * This function validate whether the minimum value of the numberable value.
 *
 * @param {*} val
 * @param {*} arg minimum
 * @return {Boolean}
 */

function min(val, arg) {
  return !isNaN(+val) && !isNaN(+arg) && +val >= +arg;
}

/**
 * max
 *
 * This function validate whether the maximum value of the numberable value.
 *
 * @param {*} val
 * @param {*} arg maximum
 * @return {Boolean}
 */

function max(val, arg) {
  return !isNaN(+val) && !isNaN(+arg) && +val <= +arg;
}

/**
 * isInteger
 *
 * This function check whether the value of the string is integer.
 *
 * @param {String} val
 * @return {Boolean}
 * @private
 */

function isInteger(val) {
  return (/^(-?[1-9]\d*|0)$/.test(val)
  );
}

var validators = Object.freeze({
  required: required,
  pattern: pattern,
  minlength: minlength,
  maxlength: maxlength,
  min: min,
  max: max
});

function Asset (Vue) {
  var extend = Vue.util.extend;

  // set global validators asset
  var assets = Object.create(null);
  extend(assets, validators);
  Vue.options.validators = assets;

  // set option merge strategy
  var strats = Vue.config.optionMergeStrategies;
  if (strats) {
    strats.validators = function (parent, child) {
      if (!child) {
        return parent;
      }
      if (!parent) {
        return child;
      }
      var ret = Object.create(null);
      extend(ret, parent);
      for (var key in child) {
        ret[key] = child[key];
      }
      return ret;
    };
  }

  /**
   * Register or retrieve a global validator definition.
   *
   * @param {String} id
   * @param {Function} definition
   */

  Vue.validator = function (id, definition) {
    if (!definition) {
      return Vue.options['validators'][id];
    } else {
      Vue.options['validators'][id] = definition;
    }
  };
}

function Override (Vue) {
  // override _init
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    if (!this._validatorMaps) {
      this._validatorMaps = Object.create(null);
    }
    init.call(this, options);
  };

  // override _destroy
  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    destroy.apply(this, arguments);
    this._validatorMaps = null;
  };
}

var VALIDATE_UPDATE = '__vue-validator-validate-update__';
var PRIORITY_VALIDATE = 4096;
var PRIORITY_VALIDATE_CLASS = 32;
var REGEX_FILTER = /[^|]\|[^|]/;
var REGEX_VALIDATE_DIRECTIVE = /^v-validate(?:$|:(.*)$)/;
var REGEX_EVENT = /^v-on:|^@/;

var classId = 0; // ID for validation class


function ValidateClass (Vue) {
  var vIf = Vue.directive('if');
  var FragmentFactory = Vue.FragmentFactory;
  var _Vue$util = Vue.util;
  var toArray = _Vue$util.toArray;
  var replace = _Vue$util.replace;
  var createAnchor = _Vue$util.createAnchor;

  /**
   * `v-validate-class` directive
   */

  Vue.directive('validate-class', {
    terminal: true,
    priority: vIf.priority + PRIORITY_VALIDATE_CLASS,

    bind: function bind() {
      var _this = this;

      var id = String(classId++);
      this.setClassIds(this.el, id);

      this.vm.$on(VALIDATE_UPDATE, this.cb = function (classIds, validation, results) {
        if (classIds.indexOf(id) > -1) {
          validation.updateClasses(results, _this.frag.node);
        }
      });

      this.setupFragment();
    },
    unbind: function unbind() {
      this.vm.$off(VALIDATE_UPDATE, this.cb);
      this.teardownFragment();
    },
    setClassIds: function setClassIds(el, id) {
      var childNodes = toArray(el.childNodes);
      for (var i = 0, l = childNodes.length; i < l; i++) {
        var element = childNodes[i];
        if (element.nodeType === 1) {
          var hasAttrs = element.hasAttributes();
          var attrs = hasAttrs && toArray(element.attributes);
          for (var k = 0, _l = attrs.length; k < _l; k++) {
            var attr = attrs[k];
            if (attr.name.match(REGEX_VALIDATE_DIRECTIVE)) {
              var existingId = element.getAttribute(VALIDATE_UPDATE);
              var value = existingId ? existingId + ',' + id : id;
              element.setAttribute(VALIDATE_UPDATE, value);
            }
          }
        }

        if (element.hasChildNodes()) {
          this.setClassIds(element, id);
        }
      }
    },
    setupFragment: function setupFragment() {
      this.anchor = createAnchor('v-validate-class');
      replace(this.el, this.anchor);

      this.factory = new FragmentFactory(this.vm, this.el);
      this.frag = this.factory.create(this._host, this._scope, this._frag);
      this.frag.before(this.anchor);
    },
    teardownFragment: function teardownFragment() {
      if (this.frag) {
        this.frag.remove();
        this.frag = null;
        this.factory = null;
      }

      replace(this.anchor, this.el);
      this.anchor = null;
    }
  });
}

function Validate (Vue) {
  var FragmentFactory = Vue.FragmentFactory;
  var parseDirective = Vue.parsers.directive.parseDirective;
  var _Vue$util = Vue.util;
  var inBrowser = _Vue$util.inBrowser;
  var bind = _Vue$util.bind;
  var on = _Vue$util.on;
  var off = _Vue$util.off;
  var createAnchor = _Vue$util.createAnchor;
  var replace = _Vue$util.replace;
  var camelize = _Vue$util.camelize;
  var isPlainObject = _Vue$util.isPlainObject;

  // Test for IE10/11 textarea placeholder clone bug

  function checkTextareaCloneBug() {
    if (inBrowser) {
      var t = document.createElement('textarea');
      t.placeholder = 't';
      return t.cloneNode(true).value === 't';
    } else {
      return false;
    }
  }
  var hasTextareaCloneBug = checkTextareaCloneBug();

  /**
   * `v-validate` directive
   */

  Vue.directive('validate', {
    deep: true,
    terminal: true,
    priority: PRIORITY_VALIDATE,
    params: ['group', 'field', 'detect-blur', 'detect-change', 'initial', 'classes'],

    paramWatchers: {
      detectBlur: function detectBlur(val, old) {
        if (this._invalid) {
          return;
        }
        this.validation.detectBlur = this.isDetectBlur(val);
        this.validator.validate(this.field);
      },
      detectChange: function detectChange(val, old) {
        if (this._invalid) {
          return;
        }
        this.validation.detectChange = this.isDetectChange(val);
        this.validator.validate(this.field);
      }
    },

    bind: function bind() {
      var el = this.el;

      if (process.env.NODE_ENV !== 'production' && el.__vue__) {
        warn('v-validate="' + this.expression + '" cannot be used on an instance root element.');
        this._invalid = true;
        return;
      }

      if (process.env.NODE_ENV !== 'production' && (el.hasAttribute('v-if') || el.hasAttribute('v-for'))) {
        warn('v-validate cannot be used `v-if` or `v-for` build-in terminal directive ' + 'on an element. these is wrapped with `<template>` or other tags: ' + '(e.g. <validator name="validator">' + '<template v-if="hidden">' + '<input type="text" v-validate:field1="[\'required\']">' + '</template>' + '</validator>).');
        this._invalid = true;
        return;
      }

      if (process.env.NODE_ENV !== 'production' && !(this.arg || this.params.field)) {
        warn('you need specify field name for v-validate directive.');
        this._invalid = true;
        return;
      }

      var validatorName = this.vm.$options._validator;
      if (process.env.NODE_ENV !== 'production' && !validatorName) {
        warn('you need to wrap the elements to be validated in a <validator> element: ' + '(e.g. <validator name="validator">' + '<input type="text" v-validate:field1="[\'required\']">' + '</validator>).');
        this._invalid = true;
        return;
      }

      var raw = el.getAttribute('v-model');

      var _parseModelRaw = this.parseModelRaw(raw);

      var model = _parseModelRaw.model;
      var filters = _parseModelRaw.filters;

      this.model = model;

      this.setupFragment();
      this.setupValidate(validatorName, model, filters);
      this.listen();
    },
    update: function update(value, old) {
      if (!value || this._invalid) {
        return;
      }

      if (isPlainObject(value) || old && isPlainObject(old)) {
        this.handleObject(value, old, this.params.initial);
      } else if (Array.isArray(value) || old && Array.isArray(old)) {
        this.handleArray(value, old, this.params.initial);
      }

      var options = { field: this.field };
      if (this.frag) {
        options.el = this.frag.node;
      }
      this.validator.validate(options);
    },
    unbind: function unbind() {
      if (this._invalid) {
        return;
      }

      this.unlisten();
      this.teardownValidate();
      this.teardownFragment();

      this.model = null;
    },
    parseModelRaw: function parseModelRaw(raw) {
      if (REGEX_FILTER.test(raw)) {
        var parsed = parseDirective(raw);
        return { model: parsed.expression, filters: parsed.filters };
      } else {
        return { model: raw };
      }
    },
    setupValidate: function setupValidate(name, model, filters) {
      var params = this.params;
      var validator = this.validator = this.vm._validatorMaps[name];

      this.field = camelize(this.arg ? this.arg : params.field);

      this.validation = validator.manageValidation(this.field, model, this.vm, this.getElementFrom(this.frag), this._scope, filters, params.initial, this.isDetectBlur(params.detectBlur), this.isDetectChange(params.detectChange));

      isPlainObject(params.classes) && this.validation.setValidationClasses(params.classes);

      params.group && validator.addGroupValidation(params.group, this.field);
    },
    listen: function listen() {
      var model = this.model;
      var validation = this.validation;
      var el = this.getElementFrom(this.frag);

      this.onBlur = bind(validation.listener, validation);
      on(el, 'blur', this.onBlur);
      if ((el.type === 'radio' || el.tagName === 'SELECT') && !model) {
        this.onChange = bind(validation.listener, validation);
        on(el, 'change', this.onChange);
      } else if (el.type === 'checkbox') {
        if (!model) {
          this.onChange = bind(validation.listener, validation);
          on(el, 'change', this.onChange);
        } else {
          this.onClick = bind(validation.listener, validation);
          on(el, 'click', this.onClick);
        }
      } else {
        if (!model) {
          this.onInput = bind(validation.listener, validation);
          on(el, 'input', this.onInput);
        }
      }
    },
    unlisten: function unlisten() {
      var el = this.getElementFrom(this.frag);

      if (this.onInput) {
        off(el, 'input', this.onInput);
        this.onInput = null;
      }

      if (this.onClick) {
        off(el, 'click', this.onClick);
        this.onClick = null;
      }

      if (this.onChange) {
        off(el, 'change', this.onChange);
        this.onChange = null;
      }

      if (this.onBlur) {
        off(el, 'blur', this.onBlur);
        this.onBlur = null;
      }
    },
    teardownValidate: function teardownValidate() {
      if (this.validator && this.validation) {
        var el = this.getElementFrom(this.frag);

        this.params.group && this.validator.removeGroupValidation(this.params.group, this.field);

        this.validator.unmanageValidation(this.field, el);

        this.validator = null;
        this.validation = null;
        this.field = null;
      }
    },
    setupFragment: function setupFragment() {
      this.anchor = createAnchor('v-validate');
      replace(this.el, this.anchor);

      this.factory = new FragmentFactory(this.vm, this.shimNode(this.el));
      this.frag = this.factory.create(this._host, this._scope, this._frag);
      this.frag.before(this.anchor);
    },
    teardownFragment: function teardownFragment() {
      if (this.frag) {
        this.frag.remove();
        this.frag = null;
        this.factory = null;
      }

      replace(this.anchor, this.el);
      this.anchor = null;
    },
    handleArray: function handleArray(value, old, initial) {
      var _this = this;

      old && this.validation.resetValidation();

      each(value, function (val) {
        _this.validation.setValidation(val, undefined, undefined, initial);
      });
    },
    handleObject: function handleObject(value, old, initial) {
      var _this2 = this;

      old && this.validation.resetValidation();

      each(value, function (val, key) {
        if (isPlainObject(val)) {
          if ('rule' in val) {
            var msg = 'message' in val ? val.message : null;
            var init = 'initial' in val ? val.initial : null;
            _this2.validation.setValidation(key, val.rule, msg, init || initial);
          }
        } else {
          _this2.validation.setValidation(key, val, undefined, initial);
        }
      });
    },
    isDetectBlur: function isDetectBlur(detectBlur) {
      return detectBlur === undefined || detectBlur === 'on' || detectBlur === true;
    },
    isDetectChange: function isDetectChange(detectChange) {
      return detectChange === undefined || detectChange === 'on' || detectChange === true;
    },
    isInitialNoopValidation: function isInitialNoopValidation(initial) {
      return initial === 'off' || initial === false;
    },
    shimNode: function shimNode(node) {
      var ret = node;
      if (hasTextareaCloneBug) {
        if (node.tagName === 'TEXTAREA') {
          ret = node.cloneNode(true);
          ret.value = node.value;
          var i = ret.childNodes.length;
          while (i--) {
            ret.removeChild(ret.childNodes[i]);
          }
        }
      }
      return ret;
    },
    getElementFrom: function getElementFrom(frag) {
      return frag.single ? frag.node : frag.node.nextSibling;
    }
  });
}

/**
 * BaseValidation class
 */

var BaseValidation = function () {
  function BaseValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
    babelHelpers.classCallCheck(this, BaseValidation);

    this.field = field;
    this.touched = false;
    this.dirty = false;
    this.modified = false;

    this._modified = false;
    this._model = model;
    this._filters = filters;
    this._validator = validator;
    this._vm = vm;
    this._el = el;
    this._forScope = scope;
    this._init = this._getValue(el);
    this._validators = {};
    this._detectBlur = detectBlur;
    this._detectChange = detectChange;
    this._classes = {};
  }

  BaseValidation.prototype.manageElement = function manageElement(el, initial) {
    var _this = this;

    var scope = this._getScope();
    var model = this._model;

    this._initial = initial;

    var classIds = el.getAttribute(VALIDATE_UPDATE);
    if (classIds) {
      el.removeAttribute(VALIDATE_UPDATE);
      this._classIds = classIds.split(',');
    }

    if (model) {
      el.value = this._evalModel(model, this._filters);
      this._unwatch = scope.$watch(model, function (val, old) {
        if (val !== old) {
          if (_this.guardValidate(el, 'input')) {
            return;
          }

          _this.handleValidate(el, { noopable: _this._initial });
          if (_this._initial) {
            _this._initial = null;
          }
        }
      }, { deep: true });
    }
  };

  BaseValidation.prototype.unmanageElement = function unmanageElement(el) {
    this._unwatch && this._unwatch();
  };

  BaseValidation.prototype.resetValidation = function resetValidation() {
    var _this2 = this;

    var keys = Object.keys(this._validators);
    each(keys, function (key, index) {
      _this2._validators[key] = null;
      delete _this2._validators[key];
    });
  };

  BaseValidation.prototype.resetValidationNoopable = function resetValidationNoopable() {
    each(this._validators, function (descriptor, key) {
      if (descriptor.initial && !descriptor._isNoopable) {
        descriptor._isNoopable = true;
      }
    });
  };

  BaseValidation.prototype.setValidation = function setValidation(name, arg, msg, initial) {
    var validator = this._validators[name];
    if (!validator) {
      validator = this._validators[name] = {};
      validator.name = name;
    }

    validator.arg = arg;
    if (msg) {
      validator.msg = msg;
    }

    if (initial) {
      validator.initial = initial;
      validator._isNoopable = true;
    }
  };

  BaseValidation.prototype.setValidationClasses = function setValidationClasses(classes) {
    var _this3 = this;

    each(classes, function (value, key) {
      _this3._classes[key] = value;
    });
  };

  BaseValidation.prototype.willUpdateFlags = function willUpdateFlags() {
    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    touched && this.willUpdateTouched(this._el, 'blur');
    this.willUpdateDirty(this._el);
    this.willUpdateModified(this._el);
  };

  BaseValidation.prototype.willUpdateTouched = function willUpdateTouched(el, type) {
    if (type && type === 'blur') {
      this.touched = true;
      this._fireEvent(el, 'touched');
    }
  };

  BaseValidation.prototype.willUpdateDirty = function willUpdateDirty(el) {
    if (!this.dirty && this._checkModified(el)) {
      this.dirty = true;
      this._fireEvent(el, 'dirty');
    }
  };

  BaseValidation.prototype.willUpdateModified = function willUpdateModified(el) {
    this.modified = this._checkModified(el);
    if (this._modified !== this.modified) {
      this._fireEvent(el, 'modified', { modified: this.modified });
      this._modified = this.modified;
    }
  };

  BaseValidation.prototype.listener = function listener(e) {
    if (this.guardValidate(e.target, e.type)) {
      return;
    }

    this.handleValidate(e.target, { type: e.type });
  };

  BaseValidation.prototype.handleValidate = function handleValidate(el) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? null : _ref$type;
    var _ref$noopable = _ref.noopable;
    var noopable = _ref$noopable === undefined ? false : _ref$noopable;

    this.willUpdateTouched(el, type);
    this.willUpdateDirty(el);
    this.willUpdateModified(el);

    this._validator.validate({ field: this.field, el: el, noopable: noopable });
  };

  BaseValidation.prototype.validate = function validate(cb) {
    var _this4 = this;

    var noopable = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var el = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var _ = exports$1.Vue.util;

    var results = {};
    var errors = [];
    var valid = true;

    this._runValidators(function (descriptor, name, done) {
      var asset = _this4._resolveValidator(name);
      var validator = null;
      var msg = null;

      if (_.isPlainObject(asset)) {
        if (asset.check && typeof asset.check === 'function') {
          validator = asset.check;
        }
        if (asset.message) {
          msg = asset.message;
        }
      } else if (typeof asset === 'function') {
        validator = asset;
      }

      if (descriptor.msg) {
        msg = descriptor.msg;
      }

      if (noopable) {
        results[name] = false;
        return done();
      }

      if (descriptor._isNoopable) {
        results[name] = false;
        descriptor._isNoopable = null;
        return done();
      }

      if (validator) {
        var value = _this4._getValue(_this4._el);
        _this4._invokeValidator(_this4._vm, validator, value, descriptor.arg, function (ret, err) {
          if (!ret) {
            valid = false;
            if (err) {
              // async error message
              errors.push({ validator: name, message: err });
              results[name] = err;
            } else if (msg) {
              var error = { validator: name };
              error.message = typeof msg === 'function' ? msg.call(_this4._vm, _this4.field, descriptor.arg) : msg;
              errors.push(error);
              results[name] = error.message;
            } else {
              results[name] = !ret;
            }
          } else {
            results[name] = !ret;
          }

          done();
        });
      } else {
        done();
      }
    }, function () {
      // finished
      _this4._fireEvent(_this4._el, valid ? 'valid' : 'invalid');

      var props = {
        valid: valid,
        invalid: !valid,
        touched: _this4.touched,
        untouched: !_this4.touched,
        dirty: _this4.dirty,
        pristine: !_this4.dirty,
        modified: _this4.modified
      };
      if (!empty(errors)) {
        props.errors = errors;
      }
      _.extend(results, props);

      _this4.willUpdateClasses(results, el);

      cb(results);
    });
  };

  BaseValidation.prototype.resetFlags = function resetFlags() {
    this.touched = false;
    this.dirty = false;
    this.modified = false;
    this._modified = false;
  };

  BaseValidation.prototype.reset = function reset() {
    this.resetValidationNoopable();
    this.resetFlags();
    this._init = this._getValue(this._el);
  };

  BaseValidation.prototype.willUpdateClasses = function willUpdateClasses(results) {
    var _this5 = this;

    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (this._checkClassIds(el)) {
      (function () {
        var classIds = _this5._getClassIds(el);
        _this5.vm.$nextTick(function () {
          _this5.vm.$emit(VALIDATE_UPDATE, classIds, _this5, results);
        });
      })();
    } else {
      this.updateClasses(results);
    }
  };

  BaseValidation.prototype.updateClasses = function updateClasses(results) {
    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    this._updateClasses(el || this._el, results);
  };

  BaseValidation.prototype.guardValidate = function guardValidate(el, type) {
    if (type && type === 'blur' && !this.detectBlur) {
      return true;
    }

    if (type && type === 'input' && !this.detectChange) {
      return true;
    }

    if (type && type === 'change' && !this.detectChange) {
      return true;
    }

    if (type && type === 'click' && !this.detectChange) {
      return true;
    }

    return false;
  };

  BaseValidation.prototype._getValue = function _getValue(el) {
    return el.value;
  };

  BaseValidation.prototype._getScope = function _getScope() {
    return this._forScope || this._vm;
  };

  BaseValidation.prototype._getClassIds = function _getClassIds(el) {
    return this._classIds;
  };

  BaseValidation.prototype._checkModified = function _checkModified(target) {
    return this._init !== this._getValue(target);
  };

  BaseValidation.prototype._checkClassIds = function _checkClassIds(el) {
    return this._getClassIds(el);
  };

  BaseValidation.prototype._fireEvent = function _fireEvent(el, type, args) {
    trigger(el, type, args);
  };

  BaseValidation.prototype._evalModel = function _evalModel(model, filters) {
    var scope = this._getScope();

    var val = null;
    if (filters) {
      val = scope.$get(model);
      return filters ? this._applyFilters(val, null, filters) : val;
    } else {
      val = scope.$get(model);
      return val === undefined || val === null ? '' : val;
    }
  };

  BaseValidation.prototype._updateClasses = function _updateClasses(el, results) {
    this._toggleValid(el, results.valid);
    this._toggleTouched(el, results.touched);
    this._togglePristine(el, results.pristine);
    this._toggleModfied(el, results.modified);
  };

  BaseValidation.prototype._toggleValid = function _toggleValid(el, valid) {
    var _util$Vue$util = exports$1.Vue.util;
    var addClass = _util$Vue$util.addClass;
    var removeClass = _util$Vue$util.removeClass;

    var validClass = this._classes.valid || 'valid';
    var invalidClass = this._classes.invalid || 'invalid';

    if (valid) {
      toggleClasses(el, validClass, addClass);
      toggleClasses(el, invalidClass, removeClass);
    } else {
      toggleClasses(el, validClass, removeClass);
      toggleClasses(el, invalidClass, addClass);
    }
  };

  BaseValidation.prototype._toggleTouched = function _toggleTouched(el, touched) {
    var _util$Vue$util2 = exports$1.Vue.util;
    var addClass = _util$Vue$util2.addClass;
    var removeClass = _util$Vue$util2.removeClass;

    var touchedClass = this._classes.touched || 'touched';
    var untouchedClass = this._classes.untouched || 'untouched';

    if (touched) {
      toggleClasses(el, touchedClass, addClass);
      toggleClasses(el, untouchedClass, removeClass);
    } else {
      toggleClasses(el, touchedClass, removeClass);
      toggleClasses(el, untouchedClass, addClass);
    }
  };

  BaseValidation.prototype._togglePristine = function _togglePristine(el, pristine) {
    var _util$Vue$util3 = exports$1.Vue.util;
    var addClass = _util$Vue$util3.addClass;
    var removeClass = _util$Vue$util3.removeClass;

    var pristineClass = this._classes.pristine || 'pristine';
    var dirtyClass = this._classes.dirty || 'dirty';

    if (pristine) {
      toggleClasses(el, pristineClass, addClass);
      toggleClasses(el, dirtyClass, removeClass);
    } else {
      toggleClasses(el, pristineClass, removeClass);
      toggleClasses(el, dirtyClass, addClass);
    }
  };

  BaseValidation.prototype._toggleModfied = function _toggleModfied(el, modified) {
    var _util$Vue$util4 = exports$1.Vue.util;
    var addClass = _util$Vue$util4.addClass;
    var removeClass = _util$Vue$util4.removeClass;

    var modifiedClass = this._classes.modified || 'modified';

    if (modified) {
      toggleClasses(el, modifiedClass, addClass);
    } else {
      toggleClasses(el, modifiedClass, removeClass);
    }
  };

  BaseValidation.prototype._applyFilters = function _applyFilters(value, oldValue, filters, write) {
    var resolveAsset = exports$1.Vue.util.resolveAsset;
    var scope = this._getScope();

    var filter = void 0,
        fn = void 0,
        args = void 0,
        arg = void 0,
        offset = void 0,
        i = void 0,
        l = void 0,
        j = void 0,
        k = void 0;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[i];
      fn = resolveAsset(this._vm.$options, 'filters', filter.name);
      if (!fn) {
        continue;
      }

      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') {
        continue;
      }

      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? scope.$get(arg.value) : arg.value;
        }
      }

      value = fn.apply(this._vm, args);
    }

    return value;
  };

  BaseValidation.prototype._runValidators = function _runValidators(fn, cb) {
    var validators = this._validators;
    var length = Object.keys(validators).length;

    var count = 0;
    each(validators, function (descriptor, name) {
      fn(descriptor, name, function () {
        ++count;
        count >= length && cb();
      });
    });
  };

  BaseValidation.prototype._invokeValidator = function _invokeValidator(vm, validator, val, arg, cb) {
    var future = validator.call(this, val, arg);
    if (typeof future === 'function') {
      // function 
      future(function () {
        // resolve
        cb(true);
      }, function (msg) {
        // reject
        cb(false, msg);
      });
    } else if (isPromise(future)) {
      // promise
      future.then(function () {
        // resolve
        cb(true);
      }, function (msg) {
        // reject
        cb(false, msg);
      }).catch(function (err) {
        cb(false, err.message);
      });
    } else {
      // sync
      cb(future);
    }
  };

  BaseValidation.prototype._resolveValidator = function _resolveValidator(name) {
    var resolveAsset = exports$1.Vue.util.resolveAsset;
    return resolveAsset(this._vm.$options, 'validators', name);
  };

  babelHelpers.createClass(BaseValidation, [{
    key: 'vm',
    get: function get() {
      return this._vm;
    }
  }, {
    key: 'el',
    get: function get() {
      return this._el;
    }
  }, {
    key: 'detectChange',
    get: function get() {
      return this._detectChange;
    },
    set: function set(val) {
      this._detectChange = val;
    }
  }, {
    key: 'detectBlur',
    get: function get() {
      return this._detectBlur;
    },
    set: function set(val) {
      this._detectBlur = val;
    }
  }]);
  return BaseValidation;
}();

/**
 * CheckboxValidation class
 */

var CheckboxValidation = function (_BaseValidation) {
  babelHelpers.inherits(CheckboxValidation, _BaseValidation);

  function CheckboxValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
    babelHelpers.classCallCheck(this, CheckboxValidation);

    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

    _this._inits = [];
    return _this;
  }

  CheckboxValidation.prototype.manageElement = function manageElement(el, initial) {
    var _this2 = this;

    var scope = this._getScope();
    var item = this._addItem(el, initial);

    var model = item.model = this._model;
    if (model) {
      var value = this._evalModel(model, this._filters);
      if (Array.isArray(value)) {
        this._setChecked(value, item.el);
        item.unwatch = scope.$watch(model, function (val, old) {
          if (val !== old) {
            if (_this2.guardValidate(item.el, 'change')) {
              return;
            }

            _this2.handleValidate(item.el, { noopable: item.initial });
            if (item.initial) {
              item.initial = null;
            }
          }
        });
      } else {
        el.checked = value || false;
        this._init = el.checked;
        item.init = el.checked;
        item.value = el.value;
        item.unwatch = scope.$watch(model, function (val, old) {
          if (val !== old) {
            if (_this2.guardValidate(el, 'change')) {
              return;
            }

            _this2.handleValidate(el, { noopable: item.initial });
            if (item.initial) {
              item.initial = null;
            }
          }
        });
      }
    } else {
      var options = { field: this.field, noopable: initial };
      if (this._checkClassIds(el)) {
        options.el = el;
      }
      this._validator.validate(options);
    }
  };

  CheckboxValidation.prototype.unmanageElement = function unmanageElement(el) {
    var found = -1;
    each(this._inits, function (item, index) {
      if (item.el === el) {
        found = index;
        if (item.unwatch && item.model) {
          item.unwatch();
          item.unwatch = null;
          item.model = null;
        }
      }
    });
    if (found === -1) {
      return;
    }

    this._inits.splice(found, 1);
    this._validator.validate({ field: this.field });
  };

  CheckboxValidation.prototype.willUpdateFlags = function willUpdateFlags() {
    var _this3 = this;

    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    each(this._inits, function (item, index) {
      touched && _this3.willUpdateTouched(item.el, 'blur');
      _this3.willUpdateDirty(item.el);
      _this3.willUpdateModified(item.el);
    });
  };

  CheckboxValidation.prototype.reset = function reset() {
    this.resetValidationNoopable();
    this.resetFlags();
    each(this._inits, function (item, index) {
      item.init = item.el.checked;
      item.value = item.el.value;
    });
  };

  CheckboxValidation.prototype.updateClasses = function updateClasses(results) {
    var _this4 = this;

    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (el) {
      // for another element
      this._updateClasses(el, results);
    } else {
      each(this._inits, function (item, index) {
        _this4._updateClasses(item.el, results);
      });
    }
  };

  CheckboxValidation.prototype._addItem = function _addItem(el, initial) {
    var item = {
      el: el,
      init: el.checked,
      value: el.value,
      initial: initial
    };

    var classIds = el.getAttribute(VALIDATE_UPDATE);
    if (classIds) {
      el.removeAttribute(VALIDATE_UPDATE);
      item.classIds = classIds.split(',');
    }

    this._inits.push(item);
    return item;
  };

  CheckboxValidation.prototype._setChecked = function _setChecked(values, el) {
    for (var i = 0, l = values.length; i < l; i++) {
      var value = values[i];
      if (!el.disabled && el.value === value && !el.checked) {
        el.checked = true;
      }
    }
  };

  CheckboxValidation.prototype._getValue = function _getValue(el) {
    var _this5 = this;

    if (!this._inits || this._inits.length === 0) {
      return el.checked;
    } else {
      var _ret = function () {
        var vals = [];
        each(_this5._inits, function (item, index) {
          item.el.checked && vals.push(item.el.value);
        });
        return {
          v: vals
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
    }
  };

  CheckboxValidation.prototype._getClassIds = function _getClassIds(el) {
    var classIds = void 0;
    each(this._inits, function (item, index) {
      if (item.el === el) {
        classIds = item.classIds;
      }
    });
    return classIds;
  };

  CheckboxValidation.prototype._checkModified = function _checkModified(target) {
    var _this6 = this;

    if (this._inits.length === 0) {
      return this._init !== target.checked;
    } else {
      var _ret2 = function () {
        var modified = false;
        each(_this6._inits, function (item, index) {
          if (!modified) {
            modified = item.init !== item.el.checked;
          }
        });
        return {
          v: modified
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
    }
  };

  return CheckboxValidation;
}(BaseValidation);

/**
 * RadioValidation class
 */

var RadioValidation = function (_BaseValidation) {
  babelHelpers.inherits(RadioValidation, _BaseValidation);

  function RadioValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
    babelHelpers.classCallCheck(this, RadioValidation);

    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

    _this._inits = [];
    return _this;
  }

  RadioValidation.prototype.manageElement = function manageElement(el, initial) {
    var _this2 = this;

    var scope = this._getScope();
    var item = this._addItem(el, initial);

    var model = item.model = this._model;
    if (model) {
      var value = this._evalModel(model, this._filters);
      this._setChecked(value, el, item);
      item.unwatch = scope.$watch(model, function (val, old) {
        if (val !== old) {
          if (_this2.guardValidate(item.el, 'change')) {
            return;
          }

          _this2.handleValidate(el, { noopable: item.initial });
          if (item.initial) {
            item.initial = null;
          }
        }
      });
    } else {
      var options = { field: this.field, noopable: initial };
      if (this._checkClassIds(el)) {
        options.el = el;
      }
      this._validator.validate(options);
    }
  };

  RadioValidation.prototype.unmanageElement = function unmanageElement(el) {
    var found = -1;
    each(this._inits, function (item, index) {
      if (item.el === el) {
        found = index;
      }
    });
    if (found === -1) {
      return;
    }

    this._inits.splice(found, 1);
    this._validator.validate({ field: this.field });
  };

  RadioValidation.prototype.willUpdateFlags = function willUpdateFlags() {
    var _this3 = this;

    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    each(this._inits, function (item, index) {
      touched && _this3.willUpdateTouched(item.el, 'blur');
      _this3.willUpdateDirty(item.el);
      _this3.willUpdateModified(item.el);
    });
  };

  RadioValidation.prototype.reset = function reset() {
    this.resetValidationNoopable();
    this.resetFlags();
    each(this._inits, function (item, index) {
      item.init = item.el.checked;
      item.value = item.el.value;
    });
  };

  RadioValidation.prototype.updateClasses = function updateClasses(results) {
    var _this4 = this;

    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (el) {
      // for another element
      this._updateClasses(el, results);
    } else {
      each(this._inits, function (item, index) {
        _this4._updateClasses(item.el, results);
      });
    }
  };

  RadioValidation.prototype._addItem = function _addItem(el, initial) {
    var item = {
      el: el,
      init: el.checked,
      value: el.value,
      initial: initial
    };

    var classIds = el.getAttribute(VALIDATE_UPDATE);
    if (classIds) {
      el.removeAttribute(VALIDATE_UPDATE);
      item.classIds = classIds.split(',');
    }

    this._inits.push(item);
    return item;
  };

  RadioValidation.prototype._setChecked = function _setChecked(value, el, item) {
    if (el.value === value) {
      el.checked = true;
      this._init = el.checked;
      item.init = el.checked;
      item.value = value;
    }
  };

  RadioValidation.prototype._getValue = function _getValue(el) {
    var _this5 = this;

    if (!this._inits || this._inits.length === 0) {
      return el.checked;
    } else {
      var _ret = function () {
        var vals = [];
        each(_this5._inits, function (item, index) {
          item.el.checked && vals.push(item.el.value);
        });
        return {
          v: vals
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
    }
  };

  RadioValidation.prototype._getClassIds = function _getClassIds(el) {
    var classIds = void 0;
    each(this._inits, function (item, index) {
      if (item.el === el) {
        classIds = item.classIds;
      }
    });
    return classIds;
  };

  RadioValidation.prototype._checkModified = function _checkModified(target) {
    var _this6 = this;

    if (this._inits.length === 0) {
      return this._init !== target.checked;
    } else {
      var _ret2 = function () {
        var modified = false;
        each(_this6._inits, function (item, index) {
          if (!modified) {
            modified = item.init !== item.el.checked;
          }
        });
        return {
          v: modified
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
    }
  };

  return RadioValidation;
}(BaseValidation);

/**
 * SelectValidation class
 */

var SelectValidation = function (_BaseValidation) {
  babelHelpers.inherits(SelectValidation, _BaseValidation);

  function SelectValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
    babelHelpers.classCallCheck(this, SelectValidation);

    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

    _this._multiple = _this._el.hasAttribute('multiple');
    return _this;
  }

  SelectValidation.prototype.manageElement = function manageElement(el, initial) {
    var _this2 = this;

    var scope = this._getScope();
    var model = this._model;

    this._initial = initial;

    var classIds = el.getAttribute(VALIDATE_UPDATE);
    if (classIds) {
      el.removeAttribute(VALIDATE_UPDATE);
      this._classIds = classIds.split(',');
    }

    if (model) {
      var value = this._evalModel(model, this._filters);
      var values = !Array.isArray(value) ? [value] : value;
      this._setOption(values, el);
      this._unwatch = scope.$watch(model, function (val, old) {
        var values1 = !Array.isArray(val) ? [val] : val;
        var values2 = !Array.isArray(old) ? [old] : old;
        if (values1.slice().sort().toString() !== values2.slice().sort().toString()) {
          if (_this2.guardValidate(el, 'change')) {
            return;
          }

          _this2.handleValidate(el, { noopable: _this2._initial });
          if (_this2._initial) {
            _this2._initial = null;
          }
        }
      });
    }
  };

  SelectValidation.prototype.unmanageElement = function unmanageElement(el) {
    this._unwatch && this._unwatch();
  };

  SelectValidation.prototype._getValue = function _getValue(el) {
    var ret = [];

    for (var i = 0, l = el.options.length; i < l; i++) {
      var option = el.options[i];
      if (!option.disabled && option.selected) {
        ret.push(option.value);
      }
    }

    return ret;
  };

  SelectValidation.prototype._setOption = function _setOption(values, el) {
    for (var i = 0, l = values.length; i < l; i++) {
      var value = values[i];
      for (var j = 0, m = el.options.length; j < m; j++) {
        var option = el.options[j];
        if (!option.disabled && option.value === value && (!option.hasAttribute('selected') || !option.selected)) {
          option.selected = true;
        }
      }
    }
  };

  SelectValidation.prototype._checkModified = function _checkModified(target) {
    var values = this._getValue(target).slice().sort();
    if (this._init.length !== values.length) {
      return true;
    } else {
      var inits = this._init.slice().sort();
      return inits.toString() !== values.toString();
    }
  };

  return SelectValidation;
}(BaseValidation);

/**
 * Validator class
 */

var Validator$1 = function () {
  function Validator(name, dir, groups, classes) {
    var _this = this;

    babelHelpers.classCallCheck(this, Validator);

    this.name = name;

    this._scope = {};
    this._dir = dir;
    this._validations = {};
    this._checkboxValidations = {};
    this._radioValidations = {};
    this._groups = groups;
    this._groupValidations = {};
    this._events = {};
    this._modified = false;
    this._classes = classes;

    each(groups, function (group) {
      _this._groupValidations[group] = [];
    });
  }

  Validator.prototype.enableReactive = function enableReactive() {
    var vm = this._dir.vm;

    // define the validation scope
    exports$1.Vue.util.defineReactive(vm, this.name, this._scope);
    vm._validatorMaps[this.name] = this;

    // define the validation resetting meta method to vue instance
    this._defineResetValidation();

    // define the validate manually meta method to vue instance
    this._defineValidate();

    // define manually the validation errors
    this._defineSetValidationErrors();
  };

  Validator.prototype.disableReactive = function disableReactive() {
    var vm = this._dir.vm;
    vm.$setValidationErrors = null;
    delete vm['$setValidationErrors'];
    vm.$validate = null;
    delete vm['$validate'];
    vm.$resetValidation = null;
    delete vm['$resetValidation'];
    vm._validatorMaps[this.name] = null;
    delete vm._validatorMaps[this.name];
    vm[this.name] = null;
    delete vm[this.name];
  };

  Validator.prototype.registerEvents = function registerEvents() {
    var isSimplePath = exports$1.Vue.parsers.expression.isSimplePath;

    var attrs = this._dir.el.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var event = attrs[i].name;
      if (REGEX_EVENT.test(event)) {
        var value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        event = event.replace(REGEX_EVENT, '');
        this._events[this._getEventName(event)] = this._dir.vm.$eval(value, true);
      }
    }
  };

  Validator.prototype.unregisterEvents = function unregisterEvents() {
    var _this2 = this;

    each(this._events, function (handler, event) {
      _this2._events[event] = null;
      delete _this2._events[event];
    });
  };

  Validator.prototype.manageValidation = function manageValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
    var validation = null;

    if (el.tagName === 'SELECT') {
      validation = this._manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
    } else if (el.type === 'checkbox') {
      validation = this._manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
    } else if (el.type === 'radio') {
      validation = this._manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
    } else {
      validation = this._manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
    }

    validation.setValidationClasses(this._classes);

    return validation;
  };

  Validator.prototype.unmanageValidation = function unmanageValidation(field, el) {
    if (el.type === 'checkbox') {
      this._unmanageCheckboxValidation(field, el);
    } else if (el.type === 'radio') {
      this._unmanageRadioValidation(field, el);
    } else if (el.tagName === 'SELECT') {
      this._unmanageSelectValidation(field, el);
    } else {
      this._unmanageBaseValidation(field, el);
    }
  };

  Validator.prototype.addGroupValidation = function addGroupValidation(group, field) {
    var indexOf = exports$1.Vue.util.indexOf;

    var validation = this._getValidationFrom(field);
    var validations = this._groupValidations[group];

    validations && !~indexOf(validations, validation) && validations.push(validation);
  };

  Validator.prototype.removeGroupValidation = function removeGroupValidation(group, field) {
    var validation = this._getValidationFrom(field);
    var validations = this._groupValidations[group];

    validations && pull(validations, validation);
  };

  Validator.prototype.validate = function validate() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$el = _ref.el;
    var el = _ref$el === undefined ? null : _ref$el;
    var _ref$field = _ref.field;
    var field = _ref$field === undefined ? null : _ref$field;
    var _ref$touched = _ref.touched;
    var touched = _ref$touched === undefined ? false : _ref$touched;
    var _ref$noopable = _ref.noopable;
    var noopable = _ref$noopable === undefined ? false : _ref$noopable;
    var _ref$cb = _ref.cb;
    var cb = _ref$cb === undefined ? null : _ref$cb;

    if (!field) {
      // all
      each(this.validations, function (validation, key) {
        validation.willUpdateFlags(touched);
      });
      this._validates(cb);
    } else {
      // each field
      this._validate(field, touched, noopable, el, cb);
    }
  };

  Validator.prototype.setupScope = function setupScope() {
    var _this3 = this;

    this._defineProperties(function () {
      return _this3.validations;
    }, function () {
      return _this3._scope;
    });

    each(this._groups, function (name) {
      var validations = _this3._groupValidations[name];
      var group = {};
      exports$1.Vue.set(_this3._scope, name, group);
      _this3._defineProperties(function () {
        return validations;
      }, function () {
        return group;
      });
    });
  };

  Validator.prototype.waitFor = function waitFor(cb) {
    var method = '$activateValidator';
    var vm = this._dir.vm;

    vm[method] = function () {
      cb();
      vm[method] = null;
    };
  };

  Validator.prototype._defineResetValidation = function _defineResetValidation() {
    var _this4 = this;

    this._dir.vm.$resetValidation = function (cb) {
      _this4._resetValidation(cb);
    };
  };

  Validator.prototype._defineValidate = function _defineValidate() {
    var _this5 = this;

    this._dir.vm.$validate = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var field = null;
      var touched = false;
      var cb = null;

      each(args, function (arg, index) {
        if (typeof arg === 'string') {
          field = arg;
        } else if (typeof arg === 'boolean') {
          touched = arg;
        } else if (typeof arg === 'function') {
          cb = arg;
        }
      });

      _this5.validate({ field: field, touched: touched, cb: cb });
    };
  };

  Validator.prototype._defineSetValidationErrors = function _defineSetValidationErrors() {
    var _this6 = this;

    this._dir.vm.$setValidationErrors = function (errors) {
      _this6._setValidationErrors(errors);
    };
  };

  Validator.prototype._validate = function _validate(field) {
    var touched = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var noopable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var _this7 = this;

    var el = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    var cb = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

    var scope = this._scope;

    var validation = this._getValidationFrom(field);
    if (validation) {
      validation.willUpdateFlags(touched);
      validation.validate(function (results) {
        exports$1.Vue.set(scope, field, results);
        _this7._fireEvents();
        cb && cb();
      }, noopable, el);
    }
  };

  Validator.prototype._validates = function _validates(cb) {
    var _this8 = this;

    var scope = this._scope;

    this._runValidates(function (validation, key, done) {
      validation.validate(function (results) {
        exports$1.Vue.set(scope, key, results);
        done();
      });
    }, function () {
      // finished
      _this8._fireEvents();
      cb && cb();
    });
  };

  Validator.prototype._getValidationFrom = function _getValidationFrom(field) {
    return this._validations[field] || this._checkboxValidations[field] && this._checkboxValidations[field].validation || this._radioValidations[field] && this._radioValidations[field].validation;
  };

  Validator.prototype._resetValidation = function _resetValidation(cb) {
    each(this.validations, function (validation, key) {
      validation.reset();
    });
    this._validates(cb);
  };

  Validator.prototype._setValidationErrors = function _setValidationErrors(errors) {
    var _this9 = this;

    var extend = exports$1.Vue.util.extend;

    // make tempolaly errors

    var temp = {};
    each(errors, function (error, index) {
      if (!temp[error.field]) {
        temp[error.field] = [];
      }
      temp[error.field].push(error);
    });

    // set errors
    each(temp, function (values, field) {
      var results = _this9._scope[field];
      var newResults = {};

      each(values, function (error) {
        if (error.validator) {
          results[error.validator] = error.message;
        }
      });

      results.valid = false;
      results.invalid = true;
      results.errors = values;
      extend(newResults, results);

      var validation = _this9._getValidationFrom(field);
      validation.willUpdateClasses(newResults, validation.el);

      exports$1.Vue.set(_this9._scope, field, newResults);
    });
  };

  Validator.prototype._manageBaseValidation = function _manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
    var validation = this._validations[field] = new BaseValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
    validation.manageElement(el, initial);
    return validation;
  };

  Validator.prototype._unmanageBaseValidation = function _unmanageBaseValidation(field, el) {
    var validation = this._validations[field];
    if (validation) {
      validation.unmanageElement(el);
      exports$1.Vue.delete(this._scope, field);
      this._validations[field] = null;
      delete this._validations[field];
    }
  };

  Validator.prototype._manageCheckboxValidation = function _manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
    var validationSet = this._checkboxValidations[field];
    if (!validationSet) {
      var validation = new CheckboxValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
      validationSet = { validation: validation, elements: 0 };
      this._checkboxValidations[field] = validationSet;
    }

    validationSet.elements++;
    validationSet.validation.manageElement(el, initial);
    return validationSet.validation;
  };

  Validator.prototype._unmanageCheckboxValidation = function _unmanageCheckboxValidation(field, el) {
    var validationSet = this._checkboxValidations[field];
    if (validationSet) {
      validationSet.elements--;
      validationSet.validation.unmanageElement(el);
      if (validationSet.elements === 0) {
        exports$1.Vue.delete(this._scope, field);
        this._checkboxValidations[field] = null;
        delete this._checkboxValidations[field];
      }
    }
  };

  Validator.prototype._manageRadioValidation = function _manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
    var validationSet = this._radioValidations[field];
    if (!validationSet) {
      var validation = new RadioValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
      validationSet = { validation: validation, elements: 0 };
      this._radioValidations[field] = validationSet;
    }

    validationSet.elements++;
    validationSet.validation.manageElement(el, initial);
    return validationSet.validation;
  };

  Validator.prototype._unmanageRadioValidation = function _unmanageRadioValidation(field, el) {
    var validationSet = this._radioValidations[field];
    if (validationSet) {
      validationSet.elements--;
      validationSet.validation.unmanageElement(el);
      if (validationSet.elements === 0) {
        exports$1.Vue.delete(this._scope, field);
        this._radioValidations[field] = null;
        delete this._radioValidations[field];
      }
    }
  };

  Validator.prototype._manageSelectValidation = function _manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
    var validation = this._validations[field] = new SelectValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
    validation.manageElement(el, initial);
    return validation;
  };

  Validator.prototype._unmanageSelectValidation = function _unmanageSelectValidation(field, el) {
    var validation = this._validations[field];
    if (validation) {
      validation.unmanageElement(el);
      exports$1.Vue.delete(this._scope, field);
      this._validations[field] = null;
      delete this._validations[field];
    }
  };

  Validator.prototype._fireEvent = function _fireEvent(type) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var handler = this._events[this._getEventName(type)];
    handler && this._dir.vm.$nextTick(function () {
      handler.apply(null, args);
    });
  };

  Validator.prototype._fireEvents = function _fireEvents() {
    var scope = this._scope;

    scope.touched && this._fireEvent('touched');
    scope.dirty && this._fireEvent('dirty');

    if (this._modified !== scope.modified) {
      this._fireEvent('modified', scope.modified);
      this._modified = scope.modified;
    }

    var valid = scope.valid;
    this._fireEvent(valid ? 'valid' : 'invalid');
  };

  Validator.prototype._getEventName = function _getEventName(type) {
    return this.name + ':' + type;
  };

  Validator.prototype._defineProperties = function _defineProperties(validationsGetter, targetGetter) {
    var _this10 = this;

    var bind = exports$1.Vue.util.bind;

    each({
      valid: { fn: this._defineValid, arg: validationsGetter },
      invalid: { fn: this._defineInvalid, arg: targetGetter },
      touched: { fn: this._defineTouched, arg: validationsGetter },
      untouched: { fn: this._defineUntouched, arg: targetGetter },
      modified: { fn: this._defineModified, arg: validationsGetter },
      dirty: { fn: this._defineDirty, arg: validationsGetter },
      pristine: { fn: this._definePristine, arg: targetGetter },
      errors: { fn: this._defineErrors, arg: validationsGetter }
    }, function (descriptor, name) {
      Object.defineProperty(targetGetter(), name, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return bind(descriptor.fn, _this10)(descriptor.arg);
        }
      });
    });
  };

  Validator.prototype._runValidates = function _runValidates(fn, cb) {
    var length = Object.keys(this.validations).length;

    var count = 0;
    each(this.validations, function (validation, key) {
      fn(validation, key, function () {
        ++count;
        count >= length && cb();
      });
    });
  };

  Validator.prototype._walkValidations = function _walkValidations(validations, property, condition) {
    var _this11 = this;

    var hasOwn = exports$1.Vue.util.hasOwn;
    var ret = condition;

    each(validations, function (validation, key) {
      if (ret === !condition) {
        return;
      }
      if (hasOwn(_this11._scope, validation.field)) {
        var target = _this11._scope[validation.field];
        if (target && target[property] === !condition) {
          ret = !condition;
        }
      }
    });

    return ret;
  };

  Validator.prototype._defineValid = function _defineValid(validationsGetter) {
    return this._walkValidations(validationsGetter(), 'valid', true);
  };

  Validator.prototype._defineInvalid = function _defineInvalid(scopeGetter) {
    return !scopeGetter().valid;
  };

  Validator.prototype._defineTouched = function _defineTouched(validationsGetter) {
    return this._walkValidations(validationsGetter(), 'touched', false);
  };

  Validator.prototype._defineUntouched = function _defineUntouched(scopeGetter) {
    return !scopeGetter().touched;
  };

  Validator.prototype._defineModified = function _defineModified(validationsGetter) {
    return this._walkValidations(validationsGetter(), 'modified', false);
  };

  Validator.prototype._defineDirty = function _defineDirty(validationsGetter) {
    return this._walkValidations(validationsGetter(), 'dirty', false);
  };

  Validator.prototype._definePristine = function _definePristine(scopeGetter) {
    return !scopeGetter().dirty;
  };

  Validator.prototype._defineErrors = function _defineErrors(validationsGetter) {
    var _this12 = this;

    var hasOwn = exports$1.Vue.util.hasOwn;
    var isPlainObject = exports$1.Vue.util.isPlainObject;
    var errors = [];

    each(validationsGetter(), function (validation, key) {
      if (hasOwn(_this12._scope, validation.field)) {
        var target = _this12._scope[validation.field];
        if (target && !empty(target.errors)) {
          each(target.errors, function (err, index) {
            var error = { field: validation.field };
            if (isPlainObject(err)) {
              if (err.validator) {
                error.validator = err.validator;
              }
              error.message = err.message;
            } else if (typeof err === 'string') {
              error.message = err;
            }
            errors.push(error);
          });
        }
      }
    });

    return empty(errors) ? undefined : errors.sort(function (a, b) {
      return a.field < b.field ? -1 : 1;
    });
  };

  babelHelpers.createClass(Validator, [{
    key: 'validations',
    get: function get() {
      var extend = exports$1.Vue.util.extend;

      var ret = {};
      extend(ret, this._validations);

      each(this._checkboxValidations, function (dataset, key) {
        ret[key] = dataset.validation;
      });

      each(this._radioValidations, function (dataset, key) {
        ret[key] = dataset.validation;
      });

      return ret;
    }
  }]);
  return Validator;
}();

function Validator (Vue) {
  var FragmentFactory = Vue.FragmentFactory;
  var vIf = Vue.directive('if');
  var _Vue$util = Vue.util;
  var isArray = _Vue$util.isArray;
  var isPlainObject = _Vue$util.isPlainObject;
  var createAnchor = _Vue$util.createAnchor;
  var replace = _Vue$util.replace;
  var extend = _Vue$util.extend;
  var camelize = _Vue$util.camelize;

  /**
   * `validator` element directive
   */

  Vue.elementDirective('validator', {
    params: ['name', 'groups', 'lazy', 'classes'],

    bind: function bind() {
      var params = this.params;

      if (process.env.NODE_ENV !== 'production' && !params.name) {
        warn('validator element requires a \'name\' attribute: ' + '(e.g. <validator name="validator1">...</validator>)');
        return;
      }

      this.validatorName = '$' + camelize(params.name);
      if (!this.vm._validatorMaps) {
        throw new Error('Invalid validator management error');
      }

      var classes = {};
      if (isPlainObject(this.params.classes)) {
        classes = this.params.classes;
      }

      this.setupValidator(classes);
      this.setupFragment(params.lazy);
    },
    unbind: function unbind() {
      this.teardownFragment();
      this.teardownValidator();
    },
    getGroups: function getGroups() {
      var params = this.params;
      var groups = [];

      if (params.groups) {
        if (isArray(params.groups)) {
          groups = params.groups;
        } else if (!isPlainObject(params.groups) && typeof params.groups === 'string') {
          groups.push(params.groups);
        }
      }

      return groups;
    },
    setupValidator: function setupValidator(classes) {
      var validator = this.validator = new Validator$1(this.validatorName, this, this.getGroups(), classes);
      validator.enableReactive();
      validator.setupScope();
      validator.registerEvents();
    },
    teardownValidator: function teardownValidator() {
      this.validator.unregisterEvents();
      this.validator.disableReactive();

      if (this.validatorName) {
        this.validatorName = null;
        this.validator = null;
      }
    },
    setupFragment: function setupFragment(lazy) {
      var _this = this;

      var vm = this.vm;

      this.validator.waitFor(function () {
        _this.anchor = createAnchor('vue-validator');
        replace(_this.el, _this.anchor);
        extend(vm.$options, { _validator: _this.validatorName });
        _this.factory = new FragmentFactory(vm, _this.el.innerHTML);
        vIf.insert.call(_this);
      });

      !lazy && vm.$activateValidator();
    },
    teardownFragment: function teardownFragment() {
      vIf.unbind.call(this);
    }
  });
}

function ValidatorError (Vue) {
  /**
   * ValidatorError component
   */

  var error = {
    name: 'validator-error',

    props: {
      field: {
        type: String,
        required: true
      },
      validator: {
        type: String
      },
      message: {
        type: String,
        required: true
      },
      partial: {
        type: String,
        default: 'validator-error-default'
      }
    },

    template: '<div><partial :name="partial"></partial></div>',

    partials: {}
  };

  // only use ValidatorError component
  error.partials['validator-error-default'] = '<p>{{field}}: {{message}}</p>';

  return error;
}

function Errors (Vue) {
  var _ = Vue.util;
  var error = ValidatorError(Vue); // import ValidatorError component

  /**
   * ValidatorErrors component
   */

  var errors = {
    name: 'validator-errors',

    props: {
      validation: {
        type: Object,
        required: true
      },
      group: {
        type: String,
        default: null
      },
      field: {
        type: String,
        default: null
      },
      component: {
        type: String,
        default: 'validator-error'
      }
    },

    computed: {
      errors: function errors() {
        var _this = this;

        if (this.group !== null) {
          return this.validation[this.group].errors;
        } else if (this.field !== null) {
          var target = this.validation[this.field];
          if (!target.errors) {
            return;
          }

          return target.errors.map(function (error) {
            var err = { field: _this.field };
            if (_.isPlainObject(error)) {
              if (error.validator) {
                err.validator = error.validator;
              }
              err.message = error.message;
            } else if (typeof error === 'string') {
              err.message = error;
            }
            return err;
          });
        } else {
          return this.validation.errors;
        }
      }
    },

    template: '<template v-for="error in errors">' + '<component :is="component" :partial="partial" :field="error.field" :validator="error.validator" :message="error.message">' + '</component>' + '</template>',

    components: {}
  };

  // define 'partial' prop
  errors.props['partial'] = error.props['partial'];

  // only use ValidatorErrors component
  errors.components[error.name] = error;

  // install ValidatorErrors component
  Vue.component(errors.name, errors);

  return errors;
}

/**
 * plugin
 *
 * @param {Function} Vue
 * @param {Object} options
 */

function plugin(Vue) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (plugin.installed) {
    warn('already installed.');
    return;
  }

  exports$1.Vue = Vue;
  Asset(Vue);
  Errors(Vue);

  Override(Vue);
  Validator(Vue);
  ValidateClass(Vue);
  Validate(Vue);
}

plugin.version = '2.1.7';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
}).call(this,require('_process'))
},{"_process":108}],117:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"_process":108,"dup":41}],118:[function(require,module,exports){
var inserted = exports.cache = {}

exports.insert = function (css) {
  if (inserted[css]) return
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return elem
}

},{}],119:[function(require,module,exports){
/*!
 * Vuex v0.8.2
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * Merge an array of objects into one.
   *
   * @param {Array<Object>} arr
   * @return {Object}
   */

  function mergeObjects(arr) {
    return arr.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var existing = prev[key];
        if (existing) {
          // allow multiple mutation objects to contain duplicate
          // handlers for the same mutation type
          if (Array.isArray(existing)) {
            existing.push(obj[key]);
          } else {
            prev[key] = [prev[key], obj[key]];
          }
        } else {
          prev[key] = obj[key];
        }
      });
      return prev;
    }, {});
  }

  /**
   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
   *
   * @param {*} obj
   * @return {*}
   */

  function deepClone(obj) {
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
      var cloned = {};
      var keys = Object.keys(obj);
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        cloned[key] = deepClone(obj[key]);
      }
      return cloned;
    } else {
      return obj;
    }
  }

  /**
   * Hacks to get access to Vue internals.
   * Maybe we should expose these...
   */

  var Watcher = void 0;
  function getWatcher(vm) {
    if (!Watcher) {
      var noop = function noop() {};
      var unwatch = vm.$watch(noop, noop);
      Watcher = vm._watchers[0].constructor;
      unwatch();
    }
    return Watcher;
  }

  var Dep = void 0;
  function getDep(vm) {
    if (!Dep) {
      Dep = vm._data.__ob__.dep.constructor;
    }
    return Dep;
  }

  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  var devtoolMiddleware = {
    onInit: function onInit(state, store) {
      if (!hook) return;
      hook.emit('vuex:init', store);
      hook.on('vuex:travel-to-state', function (targetState) {
        store._dispatching = true;
        store._vm.state = targetState;
        store._dispatching = false;
      });
    },
    onMutation: function onMutation(mutation, state) {
      if (!hook) return;
      hook.emit('vuex:mutation', mutation, state);
    }
  };

  function override (Vue) {
    var version = Number(Vue.version.split('.')[0]);

    if (version >= 2) {
      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
    } else {
      (function () {
        // override init and inject vuex init procedure
        // for 1.x backwards compatibility.
        var _init = Vue.prototype._init;
        Vue.prototype._init = function () {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
          _init.call(this, options);
        };
      })();
    }

    /**
     * Vuex init hook, injected into each instances init hooks list.
     */

    function vuexInit() {
      var options = this.$options;
      var store = options.store;
      var vuex = options.vuex;
      // store injection

      if (store) {
        this.$store = store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
      // vuex option handling
      if (vuex) {
        if (!this.$store) {
          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
        }
        var state = vuex.state;
        var actions = vuex.actions;
        var getters = vuex.getters;
        // handle deprecated state option

        if (state && !getters) {
          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
          getters = state;
        }
        // getters
        if (getters) {
          options.computed = options.computed || {};
          for (var key in getters) {
            defineVuexGetter(this, key, getters[key]);
          }
        }
        // actions
        if (actions) {
          options.methods = options.methods || {};
          for (var _key in actions) {
            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
          }
        }
      }
    }

    /**
     * Setter for all getter properties.
     */

    function setter() {
      throw new Error('vuex getter properties are read-only.');
    }

    /**
     * Define a Vuex getter on an instance.
     *
     * @param {Vue} vm
     * @param {String} key
     * @param {Function} getter
     */

    function defineVuexGetter(vm, key, getter) {
      if (typeof getter !== 'function') {
        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
      } else {
        Object.defineProperty(vm, key, {
          enumerable: true,
          configurable: true,
          get: makeComputedGetter(vm.$store, getter),
          set: setter
        });
      }
    }

    /**
     * Make a computed getter, using the same caching mechanism of computed
     * properties. In addition, it is cached on the raw getter function using
     * the store's unique cache id. This makes the same getter shared
     * across all components use the same underlying watcher, and makes
     * the getter evaluated only once during every flush.
     *
     * @param {Store} store
     * @param {Function} getter
     */

    function makeComputedGetter(store, getter) {
      var id = store._getterCacheId;

      // cached
      if (getter[id]) {
        return getter[id];
      }
      var vm = store._vm;
      var Watcher = getWatcher(vm);
      var Dep = getDep(vm);
      var watcher = new Watcher(vm, function (vm) {
        return getter(vm.state);
      }, null, { lazy: true });
      var computedGetter = function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      };
      getter[id] = computedGetter;
      return computedGetter;
    }

    /**
     * Make a bound-to-store version of a raw action function.
     *
     * @param {Store} store
     * @param {Function} action
     * @param {String} key
     */

    function makeBoundAction(store, action, key) {
      if (typeof action !== 'function') {
        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
      }
      return function vuexBoundAction() {
        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return action.call.apply(action, [this, store].concat(args));
      };
    }

    // option merging
    var merge = Vue.config.optionMergeStrategies.computed;
    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
      if (!toVal) return fromVal;
      if (!fromVal) return toVal;
      return {
        getters: merge(toVal.getters, fromVal.getters),
        state: merge(toVal.state, fromVal.state),
        actions: merge(toVal.actions, fromVal.actions)
      };
    };
  }

  var Vue = void 0;
  var uid = 0;

  var Store = function () {

    /**
     * @param {Object} options
     *        - {Object} state
     *        - {Object} actions
     *        - {Object} mutations
     *        - {Array} middlewares
     *        - {Boolean} strict
     */

    function Store() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$state = _ref.state;
      var state = _ref$state === undefined ? {} : _ref$state;
      var _ref$mutations = _ref.mutations;
      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
      var _ref$modules = _ref.modules;
      var modules = _ref$modules === undefined ? {} : _ref$modules;
      var _ref$middlewares = _ref.middlewares;
      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
      var _ref$strict = _ref.strict;
      var strict = _ref$strict === undefined ? false : _ref$strict;
      classCallCheck(this, Store);

      this._getterCacheId = 'vuex_store_' + uid++;
      this._dispatching = false;
      this._rootMutations = this._mutations = mutations;
      this._modules = modules;
      // bind dispatch to self
      var dispatch = this.dispatch;
      this.dispatch = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        dispatch.apply(_this, args);
      };
      // use a Vue instance to store the state tree
      // suppress warnings just in case the user has added
      // some funky global mixins
      if (!Vue) {
        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
      }
      var silent = Vue.config.silent;
      Vue.config.silent = true;
      this._vm = new Vue({
        data: {
          state: state
        }
      });
      Vue.config.silent = silent;
      this._setupModuleState(state, modules);
      this._setupModuleMutations(modules);
      this._setupMiddlewares(middlewares, state);
      // add extra warnings in strict mode
      if (strict) {
        this._setupMutationCheck();
      }
    }

    /**
     * Getter for the entire state tree.
     * Read only.
     *
     * @return {Object}
     */

    createClass(Store, [{
      key: 'dispatch',


      /**
       * Dispatch an action.
       *
       * @param {String} type
       */

      value: function dispatch(type) {
        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          payload[_key2 - 1] = arguments[_key2];
        }

        var silent = false;
        // compatibility for object actions, e.g. FSA
        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
          payload = [type.payload];
          if (type.silent) silent = true;
          type = type.type;
        }
        var mutation = this._mutations[type];
        var state = this.state;
        if (mutation) {
          this._dispatching = true;
          // apply the mutation
          if (Array.isArray(mutation)) {
            mutation.forEach(function (m) {
              return m.apply(undefined, [state].concat(toConsumableArray(payload)));
            });
          } else {
            mutation.apply(undefined, [state].concat(toConsumableArray(payload)));
          }
          this._dispatching = false;
          if (!silent) this._applyMiddlewares(type, payload);
        } else {
          console.warn('[vuex] Unknown mutation: ' + type);
        }
      }

      /**
       * Watch state changes on the store.
       * Same API as Vue's $watch, except when watching a function,
       * the function gets the state as the first argument.
       *
       * @param {Function} fn
       * @param {Function} cb
       * @param {Object} [options]
       */

    }, {
      key: 'watch',
      value: function watch(fn, cb, options) {
        var _this2 = this;

        if (typeof fn !== 'function') {
          console.error('Vuex store.watch only accepts function.');
          return;
        }
        return this._vm.$watch(function () {
          return fn(_this2.state);
        }, cb, options);
      }

      /**
       * Hot update mutations & modules.
       *
       * @param {Object} options
       *        - {Object} [mutations]
       *        - {Object} [modules]
       */

    }, {
      key: 'hotUpdate',
      value: function hotUpdate() {
        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var mutations = _ref2.mutations;
        var modules = _ref2.modules;

        this._rootMutations = this._mutations = mutations || this._rootMutations;
        this._setupModuleMutations(modules || this._modules);
      }

      /**
       * Attach sub state tree of each module to the root tree.
       *
       * @param {Object} state
       * @param {Object} modules
       */

    }, {
      key: '_setupModuleState',
      value: function _setupModuleState(state, modules) {
        Object.keys(modules).forEach(function (key) {
          Vue.set(state, key, modules[key].state || {});
        });
      }

      /**
       * Bind mutations for each module to its sub tree and
       * merge them all into one final mutations map.
       *
       * @param {Object} updatedModules
       */

    }, {
      key: '_setupModuleMutations',
      value: function _setupModuleMutations(updatedModules) {
        var modules = this._modules;
        var allMutations = [this._rootMutations];
        Object.keys(updatedModules).forEach(function (key) {
          modules[key] = updatedModules[key];
        });
        Object.keys(modules).forEach(function (key) {
          var module = modules[key];
          if (!module || !module.mutations) return;
          // bind mutations to sub state tree
          var mutations = {};
          Object.keys(module.mutations).forEach(function (name) {
            var original = module.mutations[name];
            mutations[name] = function (state) {
              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
              }

              original.apply(undefined, [state[key]].concat(args));
            };
          });
          allMutations.push(mutations);
        });
        this._mutations = mergeObjects(allMutations);
      }

      /**
       * Setup mutation check: if the vuex instance's state is mutated
       * outside of a mutation handler, we throw en error. This effectively
       * enforces all mutations to the state to be trackable and hot-reloadble.
       * However, this comes at a run time cost since we are doing a deep
       * watch on the entire state tree, so it is only enalbed with the
       * strict option is set to true.
       */

    }, {
      key: '_setupMutationCheck',
      value: function _setupMutationCheck() {
        var _this3 = this;

        var Watcher = getWatcher(this._vm);
        /* eslint-disable no-new */
        new Watcher(this._vm, 'state', function () {
          if (!_this3._dispatching) {
            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
          }
        }, { deep: true, sync: true });
        /* eslint-enable no-new */
      }

      /**
       * Setup the middlewares. The devtools middleware is always
       * included, since it does nothing if no devtool is detected.
       *
       * A middleware can demand the state it receives to be
       * "snapshots", i.e. deep clones of the actual state tree.
       *
       * @param {Array} middlewares
       * @param {Object} state
       */

    }, {
      key: '_setupMiddlewares',
      value: function _setupMiddlewares(middlewares, state) {
        var _this4 = this;

        this._middlewares = [devtoolMiddleware].concat(middlewares);
        this._needSnapshots = middlewares.some(function (m) {
          return m.snapshot;
        });
        if (this._needSnapshots) {
          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
        }
        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
        // call init hooks
        this._middlewares.forEach(function (m) {
          if (m.onInit) {
            m.onInit(m.snapshot ? initialSnapshot : state, _this4);
          }
        });
      }

      /**
       * Apply the middlewares on a given mutation.
       *
       * @param {String} type
       * @param {Array} payload
       */

    }, {
      key: '_applyMiddlewares',
      value: function _applyMiddlewares(type, payload) {
        var _this5 = this;

        var state = this.state;
        var prevSnapshot = this._prevSnapshot;
        var snapshot = void 0,
            clonedPayload = void 0;
        if (this._needSnapshots) {
          snapshot = this._prevSnapshot = deepClone(state);
          clonedPayload = deepClone(payload);
        }
        this._middlewares.forEach(function (m) {
          if (m.onMutation) {
            if (m.snapshot) {
              m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this5);
            } else {
              m.onMutation({ type: type, payload: payload }, state, _this5);
            }
          }
        });
      }
    }, {
      key: 'state',
      get: function get() {
        return this._vm.state;
      },
      set: function set(v) {
        throw new Error('[vuex] Vuex root state is read only.');
      }
    }]);
    return Store;
  }();

  function install(_Vue) {
    if (Vue) {
      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
      return;
    }
    Vue = _Vue;
    override(Vue);
  }

  // auto install in dist mode
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = {
    Store: Store,
    install: install
  };

  return index;

}));
},{}]},{},[39]);

//# sourceMappingURL=app.js.map
