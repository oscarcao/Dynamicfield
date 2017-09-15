<template>
    <section class="cdf-flexWrapper">
        <article class="dcf-layoutBlocks__block">
            <header class="dcf-layoutBlocks__blockHeader">
                <h3 class="dcf-layoutBlocks__blockName" @click.prevent="showHideClick">Repeater - {{ fieldInfo.slug }}</h3>
                <span class="dcf-fieldsBlock__arrow" :class="{ 'dcf-fieldsBlock__arrow--up' : showLayout == true, 'dcf-fieldsBlock__arrow--down' : showLayout == false }"></span>
            </header>
            <section v-show="showLayout" class="dcf-layoutBlocks__region dcf-layoutBlocks__region--repeater">

                <div class="repeater-group tr tr--repeater">
                    <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>
                    <p class="helper-text helper-text--red" v-if="maxLimit">You have reached your max limit</p>
                    <input name="cdf[{{ fieldUniqueId }}][value]" id="cdf-{{ fieldUniqueId }}--hidden-repeater" v-model="repeaterRows" type="hidden">
                    <!--v-model="fieldInfo.slug"-->
                    <!--v-model="fieldInfo.slug"-->
                    <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldInfo.type" value="repeater" type="hidden">
                    <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
                    <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
                    <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="parentLayout" type="hidden">
                </div>

                <section class="table-repeater table" id="repeater_table_en_9">
                    <div class="thead--repeater">
                        <div class="th th--repeater" v-for="(index, field) in fieldInfo.children">
                            {{ field.name }}
                        </div>
                        <div class="th th--repeater th--row-actions">
                            
                        </div>
                        <!--</div>-->
                    </div>
                    <!--v-sortable="sortableOptions"-->
                    <div class=" tbody tbody--repeater" id="dcf-sortable--{{ fieldUniqueId }}" v-sortable="{ onStart: onStart, onEnd: onEnd }">
                        <div class="column column--repeater" data-repeater-id="{{ index }}" v-for="(index, row) in fieldInfo.rows">                            
                           <div class="column--repeaterCell clear" data--field-info-children-id="{{ f }}" v-for="(f, field) in row">
                                <entity-field :entity-field="field" :parent="fieldUniqueId" :index-id="f"></entity-field>
                            </div>

                            <div class="td td--repeaterField">
                                <a class="btn-move-it handle" title="move">
                                    <span class="glyphicon glyphicon-move"></span>
                                </a>
                                <a class="btn-delete" @click="deleteRow(fieldInfo.rows[index])" title="delete">
                                    <span class="glyphicon glyphicon-minus"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="tfoot tfoot--repeater" v-if="!maxLimit">
                        <div class="tr tr--repeater">
                            <div class="th th--repeater">
                                <a class="btn btn-primary btn-flat" @click="addRepeaterItem(fieldInfo.children,index)">Add Row</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    </section>
</template>
<script>
    export default {

        props : ['fieldInfo','indexId','parentLayout', 'parent'],

        ready : function(){

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
            if(this.fieldInfo.rows) {
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
                            slug : field.slug,
                            unique_id : field.unique_id
                        };
                        //console.log('findWhere',_.findWhere(row,fieldFind));
                        if(undefined == _.findWhere(row,fieldFind)) {
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

        data : function() {
            var that = this;
            return {
                sortableOptions: {
                    group       : DynamicFields.GetUniqueId('uniquely__'),
                    //handle      : '.column--repeater',
                    //handle      : '.btn-move-it',
                    //dragClass   : '.btn-move-it',
                    onEnd       : that.onUpdate,
                    onStart     : that.onStart,
                    animation   : 150,
                    store: {
                        /**
                         * Get the order of elements. Called once during initialization.
                         * @param   {Sortable}  sortable
                         * @returns {Array}
                         */
                        get: function (sortable) {
                            var order = localStorage.getItem(sortable.options.group.name);
                            return order ? order.split('|') : [];
                        },

                        /**
                         * Save the order of elements. Called onEnd (when the item is dropped).
                         * @param {Sortable}  sortable
                         */
                        set: function (sortable) {
                            var order = sortable.toArray();
                            localStorage.setItem(sortable.options.group.name, order.join('|'));
                        }
                    }
                },
                fieldsMeantToBeInRepeater : 0,
                showLayout : true,
                fieldData: {
                    value: '',
                    type: 'repeater'
                }
            }
        },

        computed : {

            maxLimit : function(){
                if(this.fieldInfo.max != undefined){
                    if(this.fieldInfo.max == ''){
                        return false;
                    }
                    if(this.fieldInfo.max != null){
                        if(this.fieldInfo.max == this.fieldInfo.rows.length){
                            return true;
                        }
                    }
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
             * the repeater rows in a format for saving to
             * the DB. We do not want all sub fields info
             * just the keys bits
             */
            repeaterRows : function(){
                return this.siftThroughAndReturnFieldsOnly();
            },

            /*
             * the fieldInfoChildren count
             */
            fieldInfoChildren : function() {
                if(this.fieldInfo.children != undefined) {

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
            fieldUniqueId : function(){
                if(this.fieldInfo.field_translation){
                    if(this.fieldInfo.field_translation.unique_id != undefined) {
                        return this.fieldInfo.field_translation.unique_id;
                    }
                }

                return DynamicFields.GetUniqueId('field_');
            }
        },

        methods : {

            /**
             * showHideClick()
             *
             * toggle the result
             *
             * @return showLayout
             */
            showHideClick : function(){
                return this.showLayout = !this.showLayout;
            },

            /**
             * onStart()
             *
             * related to reordering flexible layout regions
             *
             * @return {Null}
             */
            onStart : function(evt){
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
            onEnd : function(evt){
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
            onUpdate : function(evt){
                console.log('on end');

                //var vOldIndex = (evt.oldIndex - 1);
                //var vNewIndex = (evt.newIndex - 1);
                var vOldIndex = evt.oldIndex;
                var vNewIndex = evt.newIndex;
                var itemEl    = evt.item;
                console.log('onUpdate', evt, 'vOldIndex',vOldIndex,'vNewIndex',vNewIndex);

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
            changeArrayPositionOfRepeater : function(evt){
                var that = this;
                var vOldIndex = (evt.oldIndex - 1);
                var vNewIndex = (evt.newIndex - 1);
                console.log('evt',evt);
                //var vOldIndex = (evt.oldIndex);
                //var vNewIndex = (evt.newIndex);

                var newRepeaterOrder = that.fieldInfo.rows;

                console.log('vOldIndex', vOldIndex, 'vNewIndex', vNewIndex);
                var itemToMove  = newRepeaterOrder[vOldIndex];
                var itemToMove2 = newRepeaterOrder[vNewIndex];
                //this.fieldInfo.layoutBlocks.$remove(itemToMove);
                newRepeaterOrder[vOldIndex] = itemToMove2;
                newRepeaterOrder[vNewIndex] = itemToMove;

                console.log('finished?', itemToMove, itemToMove2);
                that.fieldInfo.rows = Object.assign({}, newRepeaterOrder);
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
            updateRepeaterValueInput : function(){
                var that  = this;
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
            siftThroughAndReturnFieldsOnly : function(){
                var that = this;
                var rowsToSave = [];

                if(undefined != this.fieldInfo.rows) {
                    //console.log('this.fieldInfo.rows',this.fieldInfo.rows);
                    if(this.fieldInfo.rows.length == 0){
                        return JSON.stringify(rowsToSave);
                    }

                    //var rowsCopy = Vue.util.extend({}, that.fieldInfo.rows);
                    var rowsCopy = DynamicFields.clone(that.fieldInfo.rows);
                    _.each(rowsCopy, function(row){
                        var newRow = [];
                        _.each(row, function(field){
                            var newField = {
                                unique_id   : field.unique_id,
                                field_translation  : {
                                    unique_id : field.field_translation.unique_id
                                }
                            };
                            newRow.push(newField);
                        });
                        rowsToSave.push(newRow);
                    });
                }
                return JSON.stringify(rowsToSave);
            },

            /**
             * addRepeaterItem()
             *
             * add a row to each children items repeater_field_translation
             *
             * @return {Null}
             */
            addRepeaterItem : function(childrenToAdd){
                //console.log('add me',this.fieldInfo);
                if(this.maxLimit == true){
                    return false;
                }

                var that = this;
                var fieldInfoLocal = this.fieldInfo;
                var newRow = [];

                // 1. loop through each child and add the new field
                _.each(childrenToAdd, function(field){
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

                if( -1 !==_.indexOf(['select','checkbox','radio'], blankField.type) ){
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
             * deleteRow()
             *
             * delete a row
             *
             * @param n
             *
             * @return {Null}
             */
            deleteRow : function(row,n){
                var that = this;
                //var n1 = (n + 1);
                var deletedFields = [];
                //var rowToDelete = this.fieldInfo.rows[n];
                //console.log('delete me - n',n, 'row',row, 'rowToDelete',rowToDelete);

                //this.fieldInfo.rows.$remove(rowToDelete);
//                this.fieldInfo.rows.splice(n,0);
//                this.$store.dispatch('updateDeletedFields',rowToDelete);

                _.each(row, function(field) {
                    if (field.rows != undefined) {
                        var returned = that.deleteRepeaterChildren(field.rows);
                    }
                    deletedFields.push(field);
                });

                that.$store.dispatch('updateDeletedFields',deletedFields);

                that.fieldInfo.rows.$remove(row);
                return false;
            }
        }
    };
</script>

<style>

</style>