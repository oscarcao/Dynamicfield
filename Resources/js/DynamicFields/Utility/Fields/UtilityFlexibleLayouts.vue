<template>
    <ul class="dynamicField-fc-meta">
        <div class="cdf-hidden">
            <input class="form-control slugify items-deleted" name="field[{{ hasParent }}][layouts][{{ indexId }}][key]" value="{{ layout.key }}" type="hidden" >
            <input class="form-control slugify items-deleted" name="field[{{ hasParent }}][layouts][{{ indexId }}][delete]" type="hidden" >
            <!--<input class="form-control slugify items-deleted" name="field[{{ hasParent }}][layouts][{{ indexId }}][has_new_fields]" type="hidden" value="true" v-if="hasNewFields">-->
            <!--<input class="form-control slugify items-deleted" name="field[{{ hasParent }}][layouts][{{ indexId }}][has_new_fields2]" type="hidden" value="true" v-if="hasNewFields">-->
        </div>


        <div class="form-group form-group--block">
            <label class="col-sm-2 control-label" for="field[{{ hasParent }}][layouts][{{ indexId }}][label]" style="padding: 0;">Label</label>
            <div class="col-sm-10">
                <input class="form-control slugify field-label" placeholder="Field Label" name="field[{{ hasParent }}][layouts][{{ indexId }}][label]" type="text"
                       v-model="layout.label"
                >
            </div>
        </div>

        <br>
        <div class="form-group form-group--block">
            <label class="col-sm-2 control-label" for="field[{{ hasParent }}][layouts][{{ indexId }}][name]" style="padding: 0;">Name</label>
            <div class="col-sm-10">
                <input class="form-control slugify field-label" placeholder="Field Label" name="field[{{ hasParent }}][layouts][{{ indexId }}][name]" type="text"
                       v-model="layout.name"
                       value="{{ layout.label | slugify }}"
                >
            </div>
        </div>

        <br>
        <div class="row info">
            <div class="form-group col-sm-4">
                <label class="col-sm-2 control-label" for="field[{{ hasParent }}][layouts][{{ indexId }}][display]]" style="padding: 0;">Display</label>
                <div class="col-sm-10">
                    <select class=" form-control" id="field[{{ hasParent }}][layouts][indexId][display]" name="field[{{ hasParent }}][layouts][{{ indexId }}][display]" v-model="layout.display">
                        <option value="table">Table</option>
                        <option value="block">Block</option>
                        <option value="row">Row</option>
                    </select>
                </div>
            </div>


            <div class="form-group col-sm-4">
                <label class="col-sm-2 control-label" for="field[{{ hasParent }}][layouts][{{ indexId }}][min]" style="padding: 0;">Min</label>
                <div class="col-sm-10">
                    <input class="form-control slugify field-label" placeholder="Field Label" name="field[{{ hasParent }}][layouts][{{ indexId }}][min]" min="0" max="10" v-model="layout.min" type="number" >
                </div>
            </div>

            <div class="form-group col-sm-4">
                <label class="col-sm-2 control-label" for="field[{{ hasParent }}][layouts][{{ indexId }}][max]" style="padding: 0;">Max</label>
                <div class="col-sm-10">
                    <input class="form-control slugify field-label" placeholder="Field Label" name="field[{{ hasParent }}][layouts][{{ indexId }}][max]" min="0" max="10" v-model="layout.max" type="number">
                </div>
            </div>
        </div><!-- row -->
    </ul>

</template>

<script>

    export default {

        props : ['layout', 'indexId', 'hasParent'],

//        computed : {
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
    }
</script>
