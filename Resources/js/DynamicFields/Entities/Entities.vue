<template>
    <section class="dcfEntities">
        <div class="group-content dcf-fieldsBlock" v-for="entityFields in entities">
            <header class="dcf-fieldsBlock__header" @click.prevent="showHideClick(entityFields)">
                <h2 class="dcf-fieldsBlock__name">{{ entityFields.name }}</h2>

                <span class="dcf-fieldsBlock__arrow" :class="{ 'dcf-fieldsBlock__arrow--up' : entityFields.show == true, 'dcf-fieldsBlock__arrow--down' : entityFields.show == false }"></span>
            </header>
            <!--@click.prevent="showHideClick(entityFields)"-->
            <div class="dcf-fieldsBlock__fields" v-show="entityFields.show == true">
                <entity-field :entity-field="entityField" :index-id="index" v-for="(index,entityField) in entityFields.fields"></entity-field>
            </div>
        </div>
        <deleted-entities></deleted-entities>
    </section>
</template>

<script>

    import updateFieldsData from './../../Store/Actions';

    export default {

        props : ['entities', 'indexId'],

        ready : function(){
            //console.log('this.entities',this.entities);

            //this.$store.dispatch('updateFieldsData',this.fields);
        },

        data : function() {
            return {
                name : ''
            };
        },

        computed : {

           /*
            * get the group name
            */
            groupName : function(){
//                if(this.entities.name != undefined){
//                    return this.entities.name;
//                }
                return 'Custom Fields';
            }
        },

        methods : {
            showHideClick : function(block){
                if(undefined == block){
                    return block.show = true;
                }

                return block.show = !block.show;
            }
        }
    };
</script>

<style>

</style>
