<template>
    <div class="col-md-110 groupFields-dcf">
        <div class="box box-body">
            <h2>Option Fields</h2>

            <utility-fields :fields="fields" :has-parent="0" :has-parent-layout="0"></utility-fields>
            <deleted-fields></deleted-fields>
            <deleted-layouts></deleted-layouts>

            <button type="submit" class="btn btn-primary btn-flat">Update</button>
        </div>
    </div>


</template>

<script>
    import { updateFieldsData, showFlexibleContentField } from './../../../Store/Actions';

    export default {

        props : ['fields'],

        ready : function(){
            this.$store.dispatch('updateFieldsData',this.fields);
            this.$store.dispatch('showFlexibleContentField',false);
        },

        data : function() {
            return {
                name : ''
            };
        },

        computed : {

        }
    };
</script>

<style>
</style>
