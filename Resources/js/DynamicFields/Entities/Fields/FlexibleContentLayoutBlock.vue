<template>
    <section class="cdf-flexWrapper">
        <article id="dcf-layoutBlocks__block--{{ block.key }}" class="dcf-layoutBlocks__block dcf-layoutBlocks__block--{{ block.key }}" data-order="{{ index }}">
            <header class="dcf-layoutBlocks__blockHeader">
                <h3 class="dcf-layoutBlocks__blockName" @click.prevent="showHideClick(block)">{{ block.label }}</h3>
                <a href="#" class="dcf-layoutBlocks__delete" @click.prevent="deleteThisLayout(block)">
                    <i class="fa fa-times-circle removeIcon"></i>
                </a>
            </header>
            <!--<p>{{ block.display }}</p> showBlock(block) === true-->
            <!-- showLayout block.showFields -->
            <section v-show="showLayout" data-show="{{ block.showFields }}" class="dcf-layoutBlocks__region">
                <section v-if="block.display == 'block'" class="dcf-layoutBlocks__region dcf-layoutBlocks__region--block">
                    <div class="table dcf-layoutFields dcf-table dcf-input-table block-layout">
                        <section class="tbody">
                            <div class="tr">
                                <div class="td dcf-fields">
                                    <div class="dcf-field " v-for="(index,entityField) in in block.fields">
                                        <entity-field :entity-field="entityField" :parent="parent" :parent-layout="block.key" :index-id="index" ></entity-field>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section v-if="block.display == 'table'" class="dcf-layoutBlocks__region dcf-layoutBlocks__region--table">
                    <div class="table dcf-layoutFields dcf-table dcf-input-table row-layout">
                        <section class="tbody">
                            <div class="tr" v-for="(index,entityField) in in block.fields">
                                <div class="dcf-label">
                                    <label>{{ entityField.name }}</label>
                                </div>
                                <div class="dcf-input">
                                    <entity-field :entity-field="entityField" :parent-layout="block.key" :index-id="index" ></entity-field>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section  v-if="block.display == 'row'" class="dcf-layoutBlocks__region dcf-layoutBlocks__region--row">
                    <div class="table dcf-layoutFields dcf-table dcf-input-table row-layout">
                        <section class="tbody">
                            <div class="tr" v-for="(index,entityField) in in block.fields">
                                <div class="dcf-label">
                                    <label>{{ entityField.name }}</label>
                                </div>
                                <div class="dcf-input">
                                    <entity-field :entity-field="entityField" :parent-layout="block.key" :index-id="index" ></entity-field>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </section>

        </article>
    </section>
</template>
<script>
    export default {

        props : ['block', 'index', 'indexId'],

        compiled : function(){
            //this.loopCheckBlocksHaveShowProperty();
        },

        ready : function(){

//            if(this.fieldInfo.layoutBlocks == undefined){
//                this.fieldInfo.layoutBlocks = [];
//            }

//            this.loopCheckBlocksHaveShowProperty();
        },

        data : function() {
            return {
                showLayout : false
            }
        },

        computed : {


        },

        methods : {

            /**
             * showHideClick()
             *
             * toggle the result
             *
             * @return showLayout
             */
            showHideClick : function(block){
                block.showFields = !block.showFields;
                return this.showLayout = !this.showLayout;
            },

            /**
             * deleteThisLayout()
             *
             * delete a layout
             *
             * @param layout
             *
             * @return {Null}
             */
            deleteThisLayout : function(layout){
                //console.log('deleteThisLayout',this.$parent, layout);
                // we're just going to pass it up to parent component to sort out
                this.$dispatch('deleteTheLayout', layout);
            }

        }
    };
</script>

<style>

</style>