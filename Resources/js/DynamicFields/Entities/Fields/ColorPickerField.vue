<template>
    <div class="form-group">
        <label for="cdf-{{ fieldUniqueId }}">{{ fieldInfo.name }}</label>
        <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
        <input id="cdf-{{ fieldUniqueId }}" class="text form-control" name="cdf[{{ fieldUniqueId }}][value]" v-model="fieldData.value.hex" type="text" :required="isRequired" @click="openColorPicker">

        <div class="dcf-color-picker" v-if="showColorPicker">
            <span class="glyphicon glyphicon-remove dcf-color-picker__close" @click="showColorPicker = false;"></span>
            <div class="dcf-color-picker__pick">
                <color-picker :colors.sync="fieldData.value"></color-picker>
            </div>
        </div>

        <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="colorPicker" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="parentLayout" type="hidden">
        <!--<input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="fieldInfo.parent_layout" type="hidden">-->
    </div>
</template>gulp

<script>
    export default {
        props : ['fieldInfo','parentLayout','parent'],

        created : function(){
            var that = this;
            if(this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null){
                var UniqueId = DynamicFields.GetUniqueId('field_');
                that.fieldInfo.field_translation = {
                    field_id    : that.fieldInfo.unique_id,
                    unique_id   : UniqueId,
                    value       : { hex : '#194d33' }
                };
            }
        },
        ready : function(){
            if(this.fieldInfo.field_translation){
                if(this.fieldInfo.field_translation.value != null) {
                    this.fieldData.value = { hex : this.fieldInfo.field_translation.value };
                }
            }
        },

        data : function() {
            return {
                showColorPicker : false,
                fieldData : {
                    value : { hex : '#194d33' },
                    type  : 'colorPicker'
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
            /**
             * openColorPicker()
             *
             * toggle the result
             *
             * @return showColorPicker
             */
            openColorPicker : function(){
                return this.showColorPicker = !this.showColorPicker;
            }
        }
    };
</script>

<style>

</style>
