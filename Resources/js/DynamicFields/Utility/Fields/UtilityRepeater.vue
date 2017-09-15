<template>
    <div class="field_option field_option_repeater tr">
        <div class="col-md-3 label-txt td">
            <label for="field[{{ fieldId }}][min]">Min</label>
            <p class="text-muted">Minimum fields</p>
        </div>
        <div class="col-md-9 td">
            <input class="form-control" min="0" max="20" name="field[{{ fieldId }}][min]" type="number" v-model="field.min" id="field[{{ fieldId }}][min]">
        </div>
    </div>
    <div class="field_option field_option_repeater tr">
        <div class="col-md-3 label-txt td">
            <label for="field[{{ fieldId }}][max]">Max</label>
            <p class="text-muted">Maximum fields</p>
        </div>
        <div class="col-md-9 td">
            <input class="form-control" min="0" max="20" name="field[{{ fieldId }}][max]" type="number" v-model="field.max" id="field[{{ fieldId }}][max]">
        </div>
    </div>
    <div class="field_option field_option_repeater tr">
        <div class="col-md-3 label-txt td">
            <!--<h4>Repeater is going here</h4>-->
        </div>
        <div class="col-md-9 td">
            <div class="col-md-12 group-content">
                <div class="box box-body">
                    <input class="form-control slugify items-deleted" name="repeatField[delete]" type="hidden" value="">
                    <utility-fields :fields="field.children" :has-parent="field.unique_id" :has-parent-layout="hasParentLayout"></utility-fields>
                    <!--:has-parent="hasParent"-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        props : ['field', 'hasParent', 'hasParentLayout'],

        computed : {

            fieldId : function(){
                if(this.field.unique_id){
                    return this.field.unique_id;
                }
                return DynamicFields.GetUniqueId('field_');
            }

//            /*
//             * if it has new fields then it is time
//             * to let saving of fields know this
//             * when saving form
//             */
//            hasNewFields : function(){
//                //_.find(this.layout.fields, { addedNew : true })
//                //_.findWhere(this.layout.fields, { addedNew : true })
//                var isNew = this.$store.state.isNew;
//                var newFields = _.find(this.layout.fields, { addedNew : true });
//
//                //console.log('isNew',isNew,'newFields',newFields);
////                if(false === isNew && newFields != undefined){
////                    return true;
////                }
////
////                return false;
//                return false === isNew && newFields != undefined;
//            }
//        }
        },

        events : {
            'deleteSubField' : function(field){
                var that = this;
                if(this.field.children != undefined) {
                    that.field.children.$remove(field);
                }
            }
        }
    }
</script>
