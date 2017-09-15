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
var VueResource  = require('vue-resource');
var Vuex         = require('vuex');
var Sortable     = require('vue-sortable');
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
var State     = require('./Store/Store');
var Mutations = require('./Store/Mutations');

//require('./Store/Actions');
import { one }  from './Store/Actions';

/*
 * Vuex to manage some global state
 * and mutations to use to change
 * the store
 */
var store = new Vuex.Store({
    state     : State,
    mutations : Mutations
});
export default store;

/*
 * import vue select
 */
import VueSelect from 'vue-select';

/*
 * import color picker
 */
//import { Sketch } from 'vue-color'
import { Chrome } from 'vue-color'

/*
 * just globally import our
 * components for now.
 *
 * first batch of components for Group fields page
 */
import Groups from './DynamicFields/Utility/Groups/Groups.vue';
import Options from './DynamicFields/Utility/Options/Options.vue';

import DeletedFields from './DynamicFields/Utility/DeletedFields.vue';
import DeletedLayouts from './DynamicFields/Utility/DeletedLayouts.vue';

import UtilityFields from './DynamicFields/Utility/UtilityFields.vue';
import UtilityField from './DynamicFields/Utility/UtilityField.vue';
import UtilityRepeater from './DynamicFields/Utility/Fields/UtilityRepeater.vue';
import UtilityFlexibleContent from './DynamicFields/Utility/Fields/UtilityFlexibleContent.vue';
import UtilityFlexibleLayouts from './DynamicFields/Utility/Fields/UtilityFlexibleLayouts.vue';


/*
 * Entity page Components
 */
import Entities from './DynamicFields/Entities/Entities.vue';
import EntityField from './DynamicFields/Entities/EntityField.vue';
import DeletedEntities from './DynamicFields/Entities/DeletedEntities.vue';

import TextField from './DynamicFields/Entities/Fields/TextField.vue';

import UrlField from './DynamicFields/Entities/Fields/UrlField.vue';
import PasswordField from './DynamicFields/Entities/Fields/PasswordField.vue';

import EmailField from './DynamicFields/Entities/Fields/EmailField.vue';
import NumberField from './DynamicFields/Entities/Fields/NumberField.vue';

import TextareaField from './DynamicFields/Entities/Fields/TextareaField.vue';
import WysiwygField from './DynamicFields/Entities/Fields/WysiwygField.vue';
import ImageField from './DynamicFields/Entities/Fields/ImageField.vue';

import LinkField from './DynamicFields/Entities/Fields/LinkField.vue';
import LinkObjectField from './DynamicFields/Entities/Fields/LinkObjectField.vue';
import UserField from './DynamicFields/Entities/Fields/UserField.vue';

import CheckboxField from './DynamicFields/Entities/Fields/CheckboxField.vue';
import RadioField from './DynamicFields/Entities/Fields/RadioField.vue';
import SelectField from './DynamicFields/Entities/Fields/SelectField.vue';

import DatePickerField from './DynamicFields/Entities/Fields/DatePicker.vue';
import ColorPickerField from './DynamicFields/Entities/Fields/ColorPickerField.vue';
import AreaOfFocusField from './DynamicFields/Entities/Fields/AreaOfFocusField.vue';

import RepeaterField from './DynamicFields/Entities/Fields/RepeaterField.vue';
import FlexibleContentField from './DynamicFields/Entities/Fields/FlexibleContentField.vue';
import FlexibleContentLayoutBlock from './DynamicFields/Entities/Fields/FlexibleContentLayoutBlock.vue';

/*
 * once imported attach all
 * components to vue globally
 */
Vue.component('v-select', VueSelect);
Vue.component('ColorPicker',Chrome);

Vue.component('Groups',Groups);
Vue.component('Options',Options);

Vue.component('DeletedFields',DeletedFields);
Vue.component('DeletedLayouts',DeletedLayouts);

Vue.component('UtilityFields',UtilityFields);
Vue.component('UtilityField',UtilityField);
Vue.component('UtilityRepeater',UtilityRepeater);
Vue.component('UtilityFlexibleContent',UtilityFlexibleContent);
Vue.component('UtilityFlexibleLayouts',UtilityFlexibleLayouts);

Vue.component('Entities',Entities);
Vue.component('EntityField',EntityField);
Vue.component('DeletedEntities',DeletedEntities);


Vue.component('TextField',TextField);
Vue.component('UrlField',UrlField);
Vue.component('PasswordField',PasswordField);
Vue.component('EmailField',EmailField);
Vue.component('NumberField',NumberField);
Vue.component('DatePickerField',DatePickerField);

Vue.component('TextareaField',TextareaField);
Vue.component('WysiwygField',WysiwygField);
Vue.component('ImageField',ImageField);

Vue.component('LinkField',LinkField);
Vue.component('LinkObjectField',LinkObjectField);
Vue.component('UserField',UserField);

Vue.component('CheckboxField',CheckboxField);
Vue.component('RadioField',RadioField);
Vue.component('SelectField',SelectField);

Vue.component('ColorPickerField',ColorPickerField);
Vue.component('AreaOfFocusField',AreaOfFocusField);

Vue.component('RepeaterField',RepeaterField);
Vue.component('FlexibleContentField',FlexibleContentField);
Vue.component('FlexibleContentLayoutBlock',FlexibleContentLayoutBlock);

/*
 * Vue filters to add
 */
import jsoninline from './Filters/jsoninline';
import slugify from './Filters/slugify';
Vue.filter('jsoninline',jsoninline);
Vue.filter('slugify',slugify);
/*
 * the global DynamicFields object
 */
var DynamicFields = {

};
import GetUniqueId from './Helpers/GetUniqueId';
DynamicFields.GetUniqueId = GetUniqueId;
var dynamicEditorConfig = {
    toolbar:
        [
            [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ],
            [ 'Link','Unlink','Image','Flash','Table','PageBreak','Iframe' ] ,
            [ 'NumberedList','BulletedList','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ],
            [ 'Maximize'],
            ['Format'],['Source']
        ],
    coreStyles_bold: { element : 'b', overrides : 'strong' },
    format_tags: 'p;h1;h2;h3;h4;h5;h6;pre'

};
DynamicFields.dynamicEditorConfig = dynamicEditorConfig;


/*
 * We can exploit the JSON library for a rather fast way of deep-cloning objects
 */
DynamicFields.clone = function(object){
    return (JSON.parse(JSON.stringify(object)));
};
/*
 * Global helper to destroy all the Ckeditors
 */
DynamicFields.destroyEditors = function(layoutIdName){
    $(layoutIdName).find('.cdf-wysiwyg').each(function(){
        var tagId = $(this).attr('id');
        CKEDITOR.instances[tagId].destroy();
    });
};

/*
 * Global helper to rebuild all the Ckeditors
 */
DynamicFields.rebuildEditors = function(layoutIdName){
    $(layoutIdName).find('.cdf-wysiwyg').each(function(){
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
document.addEventListener('DOMContentLoaded',function() {

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
    if (CKEDITOR.instances){
        for (var i in CKEDITOR.instances) {
            CKEDITOR.instances[i].on('change', function () {
                CKEDITOR.instances[i].updateElement()
            });
        }
    }
});
