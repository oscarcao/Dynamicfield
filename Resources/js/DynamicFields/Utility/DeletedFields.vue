<template>
    <div class="form-group form-group--hidden">
        <div class="form-group__field" v-for="field in deletedFields">
            <input name="cdf-deleted[{{ field.id }}][unique_id]" type="hidden" value="{{ field.unique_id }}">
            <input name="cdf-deleted[{{ field.id }}][parent]" type="hidden" value="{{ field.parent }}">
            <input name="cdf-deleted[{{ field.id }}][parent_layout]" type="hidden" value="{{ field.parent_layout }}">
            <input name="cdf-deleted[{{ field.id }}][id]" type="hidden" value="{{ field.id }}">
            <input name="cdf-deleted[{{ field.id }}][type]" type="hidden" value="{{ field.type }}">
            <input name="cdf-deleted[{{ field.id }}][slug]" type="hidden" value="{{ field.slug }}">
        </div>
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
