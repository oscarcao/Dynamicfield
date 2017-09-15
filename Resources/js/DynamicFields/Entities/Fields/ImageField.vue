<template>

    <div class="form-group">
        <label for="cdf-{{ fieldUniqueId }}">{{ fieldInfo.name }}</label>
        <div class="form-group">
            <div class="media">
                <p v-if="isRequired" class="helper-text helper-text--red">This is required</p>
                <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
                <div class="clearfix"></div>
                <input id="cdf-{{ fieldUniqueId }}" name="cdf[{{ fieldUniqueId }}][value]" v-model="fieldData.value" type="hidden">
                <a class="btn btn-primary btn-browse" @click="openCustomMediaWindow($event);">
                  <i class="fa fa-upload"></i>
                    Browse ...
                </a>
                <div class="clearfix"></div>
                <figure class="jsThumbnailImageWrapper customMedia">
                    <img :src="imageData.path" alt="image" v-if="imageData != null" style="max-width : 200px; min-width: 200px;" />
                    <a class="jsRemoveSimpleLink" href="#" data-id="{{ fieldData.value }}" v-if="imageData != null">
                        <i class="fa fa-times-circle removeIcon"></i>
                    </a>
                </figure>
            </div>
        </div>
        <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="image" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="parentLayout" type="hidden">
        <!--<input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="fieldInfo.parent_layout" type="hidden">-->
    </div>
</template>

<script>
    export default {
        props : ['fieldInfo', 'uniqueId', 'parentLayout', 'parent'],

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
        },
        data : function() {
            return {
                fieldData : {
                    value : '',
                    type  : 'image'
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

            imageData : function(){
                if(this.fieldInfo.field_translation) {
                    if(this.fieldInfo.field_translation.extra_data) {
                        return this.fieldInfo.field_translation.extra_data;
                    }
                }

                return null;
            },

            /*
             * so we also need a unique id for the field,
             * wether new or current
             */
            fieldUniqueId : function(){
                if(this.fieldInfo.field_translation){
                    //return this.fieldInfo.field_translation.field_id;
                    if(this.fieldInfo.field_translation.unique_id != undefined) {
                        return this.fieldInfo.field_translation.unique_id;
                    }
                }

                return DynamicFields.GetUniqueId('field_');
            }
        },

        methods : {
            openCustomMediaWindow : function (event) {
                //console.log(event);
                window.single = true;
                window.mediaPanel = $(event.currentTarget).closest('.media');
                window.zoneWrapper = $(event.currentTarget).siblings('.jsThumbnailImageWrapper');
                //window.open('http://asgard-dos/en/backend/media/media-grid/index', '_blank', 'menubar=no,status=no,toolbar=no,scrollbars=yes,height=500,width=1000');
                window.open(dynamicGlobalUrl + '/backend/media/media-grid/index', '_blank', 'menubar=no,status=no,toolbar=no,scrollbars=yes,height=500,width=1000');

            },

            removeSimpleLink : function(event){

                event.preventDefault();
                var imageValue = $(this).closest('.media');
                imageValue.find('input[type=hidden]').first().val("");

                //console.log('removeSimpleLink', imageValue, event, $(this));
                $(this).html('');
            }

        }
    };
</script>

<style>
    .jsThumbnailImageWrapper img {
        max-width: 100px !important;
        height: auto !important;
        float: left;
        width: 100% !important;
        min-width: initial !important;
    }
</style>
