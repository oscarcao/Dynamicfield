<template>
    <div class="form-group">
        <label for="cdf-{{ fieldUniqueId }}">{{ fieldInfo.name }}</label>
        <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
        <input id="cdf-{{ fieldUniqueId }}" class="text form-control" name="cdf[{{ fieldUniqueId }}][value]"
               v-model="theValue" :placeholder="fieldInfo.placeholder" type="hidden" :required="isRequired"
        >
        <v-select id="cdf-{{ fieldUniqueId }}" name="cdf[{{ fieldUniqueId }}][value]"
                  :required="isRequired"
                  :value.sync="fieldData.value" :options="options"></v-select>

        <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="linkObject" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="parentLayout" type="hidden">
    </div>
</template>

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
                    value       : ''
                };
            }
        },
        ready : function(){
            if(this.fieldInfo.field_translation){
                if(this.fieldInfo.field_translation.value != null) {
                    if(this.fieldInfo.field_translation.value == '') {
                        this.fieldData.value = this.fieldInfo.field_translation.value;
                    }else{
                        this.fieldData.value = JSON.parse(this.fieldInfo.field_translation.value);
                    }
                }
            }
            this.getOptions();
        },
        data : function() {
            return {
                fieldData : {
                    value : '',
                    type  : 'linkObject'
                },
                selected : null,
                options: []
            };
        },
        computed : {

            theValue : function () {
                return JSON.stringify(this.fieldData.value);
            },

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
            getOptions : function(search, loading) {
                var that = this;
                this.$http.get('/backend/dynamicfield/api/collect-entities', {
                    //q: search
                }).then(function(resp) {
                    if(resp.data != undefined) {
                        that.options = resp.data;
                    }
                });
            }
        }
    };
</script>

<style>

</style>
