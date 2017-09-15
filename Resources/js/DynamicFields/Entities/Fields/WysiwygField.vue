<template>
    <div class="form-group form-group--wysiwyg--{{ fieldUniqueId }}">
        <label for="cdf-{{ fieldUniqueId }}">{{ fieldInfo.name }}</label>
        <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
        <!--<vue-html5-editor  :content="textAreaValue" :height="500"></vue-html5-editor>-->
        <textarea id="cdf-{{ fieldUniqueId }}" cols="50" rows="4" class="cdf-wysiwyg cdf-wysiwyg--{{ theFieldUniqueId }}" name="cdf[{{ fieldUniqueId }}][value]" :required="isRequired" v-model="textAreaValue">
        </textarea>
        <!--ckeditor-->
        <!--fieldData.value-->

        <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="wysiwyg" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="parentLayout" type="hidden">
        <!--<input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="fieldInfo.parent_layout" type="hidden">-->
    </div>
</template>

<script>
    export default {
        props : ['fieldInfo','parentLayout', 'parent'],
        created : function(){
            var that = this;
            if(this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null){
                var UniqueId = DynamicFields.GetUniqueId('field_');
                that.fieldInfo.field_translation = {
                    field_id    : that.fieldInfo.unique_id,
                    unique_id   : UniqueId,
                    value       : ''
                };
            }
        },
        ready : function(){
            if(this.fieldInfo.field_translation){
                if(this.fieldInfo.field_translation.value != null) {
                    this.fieldData.value = this.fieldInfo.field_translation.value;
                }
            }


            var theFieldUniqueId = this.fieldUniqueId;

            /*
             * Find instance of our .cdf-wysiwyg and instantiate
             * a CKeditor on it
             */
            //if($('.cdf-wysiwyg--' + theFieldUniqueId).length > 0){
            if($('.form-group--wysiwyg--' + theFieldUniqueId ).length > 0){
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
                $('.form-group--wysiwyg--' + theFieldUniqueId ).find('.cdf-wysiwyg').each(function(i) {
                    var name = $(this).attr('name');
                    var id = $(this).attr('id');
                    if ($(this).hasClass('dynamic-editor')) {
                        if (!$(this).closest('tr').hasClass('repeater-template')) {
                            CKEDITOR.replace(id, DynamicFields.dynamicEditorConfig);
                        }
                    } else {
                        CKEDITOR.replace(name);
                    }

                    if (CKEDITOR.instances){
                        for (var i in CKEDITOR.instances) {
                            CKEDITOR.instances[i].on('change', function () {
                                CKEDITOR.instances[i].updateElement()
                            });
                        }
                    }
                });
            }
        },
        data : function() {
            return {
                fieldData : {
                    value : '',
                    type  : 'wysiwyg'
                }
            };
        },
        computed : {

            isRequired : function(){
                if(this.fieldInfo.required == 'true'){
                    return true;
                }
                return false;
            },

            parentId : function(){
                if(this.parent != undefined){
                    return this.parent;
                }
                return 0;
            },

            textAreaValue : function(){
                if(this.fieldInfo.field_translation.value != undefined) {
                    return this.fieldInfo.field_translation.value;
                }
                return this.fieldData.value;
            },
            /*
             * so we also need a unique id for the field,
             * whether new or current
             */
            fieldUniqueId : function(){
                if(this.fieldInfo.field_translation){
                    if(this.fieldInfo.field_translation.unique_id != undefined) {
                        return this.fieldInfo.field_translation.unique_id;
                    }
                }

                return DynamicFields.GetUniqueId('field_');
            }
        }
    };
</script>

<style>

</style>
