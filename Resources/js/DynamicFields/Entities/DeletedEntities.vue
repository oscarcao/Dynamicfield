<template>
    <div class="form-group form-group--hidden">
        <input name="cdf-deleted[{{ field.field_translation.unique_id }}][field_id]" type="hidden" value="{{ field.field_translation.unique_id }}"
            v-for="field in deletedFields"
        >
    </div>
</template>

<script>
    export default {

        ready : function(){

        },
        data : function() {
            return {
            };
        },
        computed : {
            /*
             * so we also need a unique id for the field,
             * wether new or current
             */
            deletedFields : function(){
                return this.$store.state.deletedFields;
            }
        }
    };
</script>

<style>

</style>
