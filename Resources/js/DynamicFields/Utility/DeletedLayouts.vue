<template>
    <div class="form-group form-group--hidden">
        <div class="form-group__field" v-for="layout in deletedLayouts">
            <input name="cdf-deletedLayout[{{ layout.key }}][key]" type="hidden" value="{{ layout.key }}">
            <input name="cdf-deletedLayout[{{ layout.key }}][name]" type="hidden" value="{{ layout.name }}">
            <input name="cdf-deletedLayout[{{ layout.key }}][parentId]" type="hidden" value="{{ layout.parentId }}">

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
            deletedLayouts : function(){
                return this.$store.state.deletedLayouts;
            }
        }
    };
</script>

<style>

</style>
