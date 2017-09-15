<template>
    <div class="groupFields-dcf">
        <div>
            <h2>{{ editOrNew }} Group Field</h2>

            <validator name="validation1">
                <div novalidate>
                    <input class="form-control slugify field-label" v-model="group.id" name="group[id]" type="hidden">
                    <div class="form-group">
                        <input class="form-control slugify" placeholder="Group Name" v-model="group.name" name="group[name]" type="text" v-validate:name="['required']">
                    </div>

                    <input class="form-control slugify fields-deleted" name="group[delete]" type="hidden" value="">
                    <input class="form-control slugify repeaters-deleted" name="group[delete_repeater]" type="hidden" value="">
                    <input class="form-control slugify flexiblecontent-deleted" name="group[delete_flexiblecontent]" type="hidden" value="">

                    <div class="errors">
                        <p v-if="$validation1.name.required">Required name.</p>
                    </div>

                    <utility-fields :fields="fields" :has-parent="0" :has-parent-layout="0"></utility-fields>
                    <deleted-fields></deleted-fields>
                    <deleted-layouts></deleted-layouts>

                    <div class="box-footer" v-if="$validation1.valid">
                        <button type="submit" class="btn btn-primary btn-flat">Update</button>
                    </div>
                </div>
            </validator>


        </div>
    </div>


</template>

<script>
    import updateFieldsData from './../../../Store/Actions';

    export default {

        props : ['fields','group'],

        ready : function(){
            this.$store.dispatch('updateFieldsData',this.fields);
        },

        data : function() {
            return {
                groupName : {
                    name : ''
                }
            };
        },

        computed : {

            theName : function(){
                if(this.group.name){
                    return this.group.name;
                }
                return '';
            },

            editOrNew : function() {
                var that = this;
                if(this.group.id){
                    that.$store.dispatch('updateIsNew',false);
                    return 'Edit';
                }

                that.$store.dispatch('updateIsNew',true);
                return 'Add New';
            }
        }
    };
</script>

<style>

</style>
