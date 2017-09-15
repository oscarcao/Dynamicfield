<template>
    <div class="col-md-12 entityField clear">
        <text-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'text'"></text-field>
        <link-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'link'"></link-field>
        <link-object-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'linkObject'"></link-object-field>
        <user-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'user'"></user-field>
        <url-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'url'"></url-field>
        <password-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'password'"></password-field>
        <email-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'email'"></email-field>
        <number-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'number'"></number-field>
        <date-picker-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'datepicker'"></date-picker-field>
        <textarea-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'textarea'"></textarea-field>
        <wysiwyg-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'wysiwyg'"></wysiwyg-field>
        <image-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'image'"></image-field>
        <radio-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'radio'"></radio-field>
        <checkbox-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'checkbox'"></checkbox-field>
        <select-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'select'"></select-field>
        <color-picker-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'colorPicker'"></color-picker-field>
        <area-of-focus-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" v-if="entityField.type == 'areaOfFocus'"></area-of-focus-field>
        <repeater-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" index-id="indexId" v-if="entityField.type == 'repeater'"></repeater-field>
        <flexible-content-field :field-info="entityField" :parent="parent" :parent-layout="parentLayoutId" index-id="indexId" v-if="entityField.type == 'flexiblecontent'"></flexible-content-field>
    </div>
</template>

<script>
    export default {

        props : ['entityField', 'indexId', 'parentLayout', 'parent'],

        ready : function(){
            //console.log('this.entityField',this.entityField);
        },

        computed : {
            parentLayoutId : function(){
                if(this.parentLayout == undefined){
                    return 0;
                }

                return this.parentLayout;
            }
        }
    };
</script>

<style>

</style>
