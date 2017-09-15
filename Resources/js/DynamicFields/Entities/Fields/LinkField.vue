<template>
    <div class="form-group">
        <label for="cdf-{{ fieldUniqueId }}">{{ fieldInfo.name }} - {{ linkType }}</label>
        <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
        <input id="cdf-{{ fieldUniqueId }}" class="text form-control" name="cdf[{{ fieldUniqueId }}][value]"
               v-model="theValue" :placeholder="fieldInfo.placeholder" type="hidden" :required="isRequired"
        >
        <!--:class="{ 'hide-it-slightsly' : linkType == 'internal' }"-->
        <input v-show="linkType == 'external'" id="cdf-{{ fieldUniqueId }}--external" class="text form-control" name="cdf[{{ fieldUniqueId }}][externalLink]"
               v-model="externalLink" type="name" @change="updateExternal"
        >
        <v-select v-show="linkType == 'internal'" @change="updateInternal" id="cdf-{{ fieldUniqueId }}--internal" name="cdf[{{ fieldUniqueId }}][internalLink]"
                  :value.sync="internalLink" :options="options" ></v-select>

        <select v-model="linkType" @change="changeLinkType" id="cdf-{{ fieldUniqueId }}--select-to-choose">
            <option value="external">External</option>
            <option value="internal">Internal</option>
        </select>

        <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="link" type="hidden">
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

                        try {
                            this.fieldData.value = JSON.parse(this.fieldInfo.field_translation.value);
                            this.internalLink    = JSON.parse(this.fieldInfo.field_translation.value);
                            this.linkType        = 'internal';
                        }
                        catch(e) {
                            this.fieldData.value = this.fieldInfo.field_translation.value;
                            this.externalLink    = this.fieldInfo.field_translation.value;
                            this.linkType        = 'external';
                        }

                    }
                }
            }
            this.getOptions();

            this.checkType();
        },
        data : function() {
            return {
                internalLink : '',
                externalLink : '',
                linkType  : 'internal',
                fieldData : {
                    value : '',
                    type  : 'link'
                },
                selected : null,
                options: []
            };
        },
        computed : {

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

            theValue : function () {
                if(this.linkType == 'external'){
                    return this.externalLink;
                }
                if(this.linkType == 'internal'){
                    return JSON.stringify(this.internalLink);
                }
                return '';
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

            updateExternal : function(){

            },

            updateInternal : function(){
                //this.internalLink
            },

            changeLinkType : function(){
                if(this.fieldType == 'external'){
                    this.fieldData.value = this.externalLink;
                }
                if(this.fieldType == 'internal'){
                    this.fieldData.value = this.internalLink;
                }

            },

            checkType : function(){

            },
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
    .hide-it-slightsly {
        /*opacity: 0;*/
        position: absolute;
        left : -100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
</style>
