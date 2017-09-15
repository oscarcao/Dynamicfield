<template>
    <div class='form-group field_infor'>
        <table class="table-field">
            <thead>
            <tr>
                <th class="col-md-3">Order</th>
                <th class="col-md-3">Label</th>
                <th class="col-md-3">Name</th>
                <th class="col-md-3">Type</th>
            </tr>
            </thead>
        </table>

        <!--v-sortable="{ handle: '.ui-sortable-handle', onEnd: onUpdate, animation: 150 }"-->
        <div class="field-data sortable" v-sortable="{ handle: '.another-field', filter: '.field_form_mask .field-label--actionsOnField', onEnd: onUpdate, onStart: onStart, animation: 150 }">
            <utility-field :field="field" :index-id="index" :has-parent-layout="hasParentLayout" :has-parent="hasParent" v-for="(index, field) in fields"></utility-field>
        </div>

        <!-- fields container all field clone-->
        <div class="table_footer">
            <a class="btn btn-primary btn-add-field" @click="appendField">
                <i class="fa fa-pencil"></i> + Add Field
            </a>
        </div>
    </div>
</template>

<script>
    export default {

        props : ['fields', 'hasParent', 'hasParentLayout'],

        data : function() {
            return {
                //fields : [],
                newField : {}
            };
        },

        events : {
            deleteField : function(field){
                this.fields.$remove(field);
            },

            'deleteSubFieldFlex' : function(field){
                var that = this;
                if(this.field.children != undefined) {
                    that.field.children.$remove(field);
                }
            }
        },

        computed : {
//            fieldsOld : function(){
//                return this.$store.state.fields;
//            }
        },

        methods : {

            /**
             * onStart()
             *
             * related to reordering flexible layout regions
             *
             * @return {Null}
             */
            onStart : function(evt){
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
            onUpdate : function(evt){
                var itemEl = evt.item;
                console.log('onUpdate', evt, itemEl);
                var vOldIndex = (evt.oldIndex);
                var vNewIndex = (evt.newIndex);
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
            appendField : function(e){
                //console.log('add field', this.fields);

                e.preventDefault();

                //if( ! this.newField ) return;

                //alert('adding a task');
                //alert(this.newTask);

                this.fields.push({
                    id              : this.fields.length + 1,
                    name            : '',
                    slug            : '',
                    instruction     : '',
                    type            : 'text',
                    unique_id       : DynamicFields.GetUniqueId('field_'),
                    required        : false,
                    default_value   : '',
                    placeholder     : '',
                    parent          : 0,
                    limit           : null,
                    order           : 0,
                    save            : true,
                    addedNew        : true,
                    max             : null,
                    min             : null,
                    choices         : '',
                    layout          : 'vertical',
                    children        : [],
                    layouts         : []
                });
                // TODO : currently have all fields in VUE with layout attached, in future workout better way to discern whether children or layouts

                //this.newField = {};
            }
        }
    };
</script>

<style>

</style>
