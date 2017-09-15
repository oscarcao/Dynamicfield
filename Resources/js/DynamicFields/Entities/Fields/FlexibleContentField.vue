<template>
    <section class="cdf-flexWrapper">
        <div class="cdf-label-flex cdf-{{ fieldUniqueId }}--flex">
            <label for="cdf-{{ fieldUniqueId }}--flexiblecontentblock">{{ fieldData.type }}</label>
            <p class="description">Flexible layout</p>
            <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
        </div>

        <div class="no-value-message" v-if="fieldInfo.layoutBlocks.length == 0">
            Click the "Add Row" button below to start creating your layout
        </div>

        <section class="dcf-layoutBlocks">
            <div class="dcf-layoutBlock-meta">
                <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="flexiblecontent" type="hidden">
                <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
                <input name="cdf[{{ fieldUniqueId }}][value]" id="cdf-{{ fieldUniqueId }}--hidden-flex" type="hidden" value="{{ theLayoutBlocks }}">
                <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
                <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="fieldInfo.parent_layout" type="hidden">
            </div>
            <!--  -->
            <section v-sortable="{ handle: '.cdf-flexWrapper', filter: '.dcf-layoutBlocks__delete .dcf-layoutBlocks__blockName', onEnd: onUpdate, onStart: onStart, animation: 150 }">
                <flexible-content-layout-block :index-id="indexId" :index="index" :block="block" v-for="(index, block) in fieldInfo.layoutBlocks"></flexible-content-layout-block>
            </section>
        </section>

        <div class="relative">
            <a class="btn btn-primary btn-flat" @click="addLayout">
                Add Row
            </a>
            <div class="acf-popup-box acf-box" v-if="showAddLayout == true">
                <div class="title">
                    <a href="#" @click.prevent="showAddLayout = false" class="acf-icon acf-close-popup"><i class="acf-sprite-delete "></i></a>
                </div>
                <div class="inner"></div>
                <ul class="acf-popupLayouts">
                    <li class="acf-popupLayouts__layout" v-for="layout in fieldInfo.layouts">
                        <a href="#" class="acf-popupLayouts__layoutClick" @click.prevent="addThisLayout(layout)">
                            {{ layout.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <br>

        </div>
    </section>
</template>
<script>
    export default {

        props : ['fieldInfo', 'indexId','parent'],

        compiled : function(){
            this.loopCheckBlocksHaveShowProperty();
        },

        ready : function(){
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
                        slug      : field.slug,
                        unique_id : field.unique_id
                    };
                    _.each(that.fieldInfo.layoutBlocks, function (lBlock) {
                        if(block.name == lBlock.name && block.label == lBlock.label) {
                            if (undefined == _.findWhere(lBlock.fields, fieldFind)) {
                                var newField = that.generateField(field);
                                lBlock.fields.push(newField);
                            }
                        }
                    });
                });
            });
        },

        data : function() {
            return {
                empty : false,
                showAddLayout : false,
                fieldData: {
                    value: '',
                    type: 'flexiblecontent'
                }
            }
        },

        events: {
            'deleteTheLayout': function (layout) {
                // `this` in event callbacks are automatically bound
                // to the instance that registered it
                console.log('deleteThisLayout in FlexibleContentField', layout);
                this.deleteThisLayout(layout);
            }
        },

        computed : {


            parentId : function(){
                if(this.parent != undefined){
                    return this.parent;
                }
                return 0;
            },

            /*
             * the layout blocks in a format for saving to
             * the DB. We do not want all sub fields info
             */
            theLayoutBlocks : function(){
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

            anyLayoutBlocks : function(){
                if(this.layoutBlocks == undefined){
                    return false;
                }
                if(this.layoutBlocks.length == 0){
                    return false;
                }
                return true;
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
             * loopCheckBlocksHaveShowProperty()
             *
             * loop through to see if a property is on it
             *
             * @return {Null}
             */
            loopCheckBlocksHaveShowProperty : function () {
                var that = this;
                _.each(this.fieldInfo.layoutBlocks, function(block){
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
            showBlock : function(block){
                if(undefined == block){
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
            showHideClick : function(block){

                if(undefined == block){
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
            onStart : function(evt){
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
            onUpdate : function(evt){
                var itemEl = evt.item;
                //console.log('onUpdate', evt, itemEl);
                var vOldIndex = (evt.oldIndex);
                var vNewIndex = (evt.newIndex);
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
            changeArrayPositionOfLayout : function(evt){
                var that = this;
                //var vOldIndex = (evt.oldIndex - 1);
                //var vNewIndex = (evt.newIndex - 1);
                var vOldIndex = (evt.oldIndex);
                var vNewIndex = (evt.newIndex);

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
            updateFlexibleInput : function(){
                var that  = this;
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
            siftThroughAndReturnOnlyLayouts : function(){
                var that = this;
                var value = [];
                if(undefined != this.fieldInfo.layoutBlocks) {
                    var blocks = Vue.util.extend({}, that.fieldInfo.layoutBlocks);

                    _.each(blocks, function(block){
                        var newBlock = {
                            delete          : block.delete,
                            display         : block.display,
                            key             : block.key,
                            label           : block.label,
                            layoutParentKey : block.layoutParentKey,
                            max             : block.max,
                            min             : block.min,
                            name            : block.name
                        };

                        value.push(newBlock);
                    });
                }
                return JSON.stringify(value);
            },

            /**
             * addLayout()
             *
             * add a layout
             *
             * @return {Null}
             */
            addLayout : function(){
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
            addThisLayout : function(layout){
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
                    layoutParentKey : layout.key,
                    key         : DynamicFields.GetUniqueId(),
                    delete      : layout.delete,
                    display     : layout.display,
                    label       : layout.label,
                    max         : layout.max,
                    min         : layout.min,
                    name        : layout.name,
                    fields      : [],
                    showFields  : true
                };
                //var newLayout = Vue.util.extend({},layout);

                //newLayout.layoutParentKey = layoutKey;
                var fieldsArray = [];
                _.each(layout.fields, function(field){
                   /*
                    * Create a shallow object copy with
                    * Object assign.
                    */
                    //console.log('layoyt.fields',field);
                    //var blankField = Object.assign({}, field);
                    //var blankField = Vue.util.extend({}, field);
                    var blankField = DynamicFields.clone(field);
                    if(blankField.rows != undefined){
                        blankField.rows = [];
                    }


                   /*
                    * again overwrite field_translation to
                    * guarantee new object and stop Vue
                    * tracking changes on original objects
                    */
                    blankField.field_translation = {
                        field_id    : field.unique_id,
                        unique_id   : DynamicFields.GetUniqueId('field_'),
                        value       : ''
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
            generateField : function(field){
                var that = this;
                var UniqueId = DynamicFields.GetUniqueId('field_');
                //console.log('field',UniqueId);
                var blankField = Vue.util.extend({}, field);
                //if(field.type != 'repeater') {

                var newField = {
                    //id              : this.fieldInfo.children.length + 1,
                    isNew           : true,
                    default_value   : '',
                    save            : true,
                    limit           : '',
                    placeholder     : '',
                    unique_id       : blankField.unique_id, // the fields unique_id is the reference
                    //parent          : DynamicFields.GetUniqueId('field_'),
                    parent          : that.fieldInfo.unique_id,
                    order           : blankField.order,
                    type            : blankField.type,
                    name            : blankField.name,
                    field_translation : {
                        field_id    : blankField.unique_id,
                        unique_id   : UniqueId,
                        value       : ''
                    }
                };


                if(blankField.type == 'repeater' && blankField.children != undefined){
                    newField.children   = Vue.util.extend({}, blankField.children);
                    newField.rows = [];
                }

                if( -1 !== _.indexOf(['select','checkbox','radio'], blankField.type) ){
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
            deleteRepeaterChildren : function(rows){
                var that = this;

                //console.log('deleteRepeaterChildren',children);

                var deletedRepeaterFields = [];

                _.each(rows, function(row) {
                    _.each(row, function(field) {
                        if(field.rows){
                            that.deleteRepeaterChildren(field.rows);
                        }
                        deletedRepeaterFields.push(field);
                    });
                });
                //console.log('deleteRepeaterChildren deletedRepeaterFields',deletedRepeaterFields);
                that.$store.dispatch('updateDeletedFields',deletedRepeaterFields);

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
            deleteThisLayout : function(layout){

                var that = this;

                //console.log('deleteThisLayout layout',layout, new Date());
                var deletedFields = [];

                _.each(layout.fields, function(field) {
                    if (field.rows != undefined){
                        var returned = that.deleteRepeaterChildren(field.rows);
                    }

                    deletedFields.push(field);

                    that.$store.dispatch('updateDeletedFields',deletedFields);
                });
                //this.$store.dispatch('updateDeletedFields',layout.fields);
                that.fieldInfo.layoutBlocks.$remove(layout);
                $('#dcf-layoutBlocks__block--' + layout.key).remove();
                that.updateFlexibleInput();

            }
        }
    };
</script>

<style>

</style>