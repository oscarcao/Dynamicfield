<template>
    <div class="field_option field_option_repeater tr">
        <div class="col-md-3 label-txt td">
            <label>Layout</label>
            <p class="description acf-fl-actions">
                <!--<a data-name="dynamicField-fc-delete" title="Delete Layout" href="#" >Delete</a>-->
                <br>
                <a data-name="dynamicField-fc-add" title="Add New Layout" href="#" @click.prevent="addNewLayout">Add New</a>
            </p>
        </div>
        <div class="col-md-9 td">

            <section v-for="(index, layout) in layouts" track-by="$index" class="clear">
                <utility-flexible-layouts :has-parent="hasParent" :layout="layout" :index-id="index"></utility-flexible-layouts>
                <div class="col-md-12 group-content">
                    <div class="box box-body">
                        <input class="form-control slugify items-deleted" name="repeatField[delete]" type="hidden" value="">
                        <utility-fields :fields.sync="layout.fields" :has-parent-layout="layout.key" :has-parent="hasParent"></utility-fields>
                        <a href="#" class="btn btn-secondary pull-right" @click.prevent="deleteLayout(layout,hasParent,hasParentLayout)">Delete Layout</a>
                    </div>
                </div>
            </section>

            <br>
            <br>
            <a data-name="dynamicField-fc-add" class="btn btn-primary pull-right" title="Add New Layout" href="#" @click.prevent="addNewLayout">Add Layout</a>
        </div>
    </div>
</template>

<script>

    export default {

        props : ['field', 'hasParent'],

        ready : function(){
//            if(this.field.layouts){
//                this.layouts = this.field.layouts;
//            }
            //this.addNewLayout();
        },

        data : function() {
            return {
                //layouts   : [],
                //newLayout : {}
            };
        },

        computed : {
            layouts : function(){
                //console.log('layouts?',this.field);
                if(this.field.layouts){
                    return this.field.layouts;
                }

//                if(this.field.children){
//                    return this.field.children;
//                }

                return [];
            }
        },



        methods : {

            /**
             * addNewRegion()
             *
             * append a region
             *
             * @return {Null}
             */
            addNewLayout : function(){

                var uniqueKey = DynamicFields.GetUniqueId();

                //console.log('adding a new region', uniqueKey, this.field.layouts);

                //this.layouts.push({
                this.field.layouts.push({
                    key       : uniqueKey,
                    label     : '',
                    name      : '',
                    display   : 'table',
                    min       : '',
                    max       : '',
                    addedNew  : true,
                    unique_id : this.field.unique_id,

                    fields    : []
                });
            },

            deleteLayout : function(layout, hasParent, hasParentLayout){
                //console.log('delete this layout',layout);
                this.field.layouts.$remove(layout);
                if(layout.addedNew == undefined) {
                    layout.parentId     = hasParent;
                    layout.parentLayout = hasParentLayout;
                    this.$store.dispatch('updateDeletedLayouts',[layout]);
                    this.$dispatch('deleteFields', layout.fields);
                    //this.$store.dispatch('updateDeletedFields',deletedFields);
                }
            }
        }
    }
</script>
