<template>
    <div class="another-field ui-sortable-handle"  :class="{ 'form-open' : isOpen }"  data-type="text" data-id="{{ fieldId }}" data-order-id="{{ indexId }}">
        <div class="field-meta" >
            <table class="table-field table">
                <tbody>
                  <tr>
                    <td class="field-order col-md-3">
                        <span class="circle">{{ indexId }}</span>
                        <input name="field[{{ fieldId }}][order]" type="hidden" value="3">
                    </td>
                    <td class="field-label field-label--actionsOnField col-md-3">
                        <a class="btn-toggle" @click="toggleVisibility">{{ field.name }}</a>
                        <div class="row-options">
                            <a class="btn-toggle" @click="toggleVisibility">Edit</a>
                            |
                            <a class="btn-toggle btn-delete-field" @click="deleteField(field)">Delete</a>
                        </div>
                    </td>
                    <td class="field-name col-md-3">
                        {{ field.slug }}
                    </td>
                    <td class="field-type col-md-3">
                        {{ field.type }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="field_form_mask" :class="{ 'is-hidden' : isOpen, 'is-hidden': !isOpen }">
            <div class="meta">
                <input class="input-ID" name="field[{{ fieldId }}][id]" v-model="field.id" type="hidden">
                <input class="input-key" name="field[{{ fieldId }}][key]" v-model="field.unique_id" type="hidden">
                <input class="input-parent" name="field[{{ fieldId }}][parent]" v-model="hasParent" type="hidden"> <!-- v-model="field.parent" -->
                <input class="input-save" name="field[{{ fieldId }}][parent_layout]" v-model="hasParentLayout" type="hidden">
                <input class="input-menu_order" name="field[{{ fieldId }}][order]" v-model="indexId" type="hidden">
                <input class="input-save" name="field[{{ fieldId }}][save]" v-model="field.save" type="hidden">
                <!--<input class="input-menu_order" name="field[{{ fieldId }}][order]" v-model="field.order" type="hidden">-->
                <!--<input class="input-save" name="field[{{ fieldId }}][new_flex_field]" v-model="newFlexField" v-if="false === true" type="hidden"> --> <!-- isANewField -->
            </div>

            <div class="field_form">
                <input class="form-control slugify field-label" name="field[{{ fieldId }}][id]" type="hidden" v-model="field.id">
                <section class="table-field table">
                      <div class="field-label tr">
                        <div class="col-md-3 label-txt td">
                            <label for="field[{{ fieldId }}][name]">Field Label</label>
                            <p class="text-muted">This is the name which will appear on the EDIT page</p>
                        </div>
                        <div class="col-md-9 td">
                            <input class="form-control slugify field-label" placeholder="Field Label" name="field[{{ fieldId }}][name]" type="text" v-model="field.name" id="field[{{ fieldId }}][name]">
                        </div>
                      </div>
                      <div class="field-name tr">
                          <div class="col-md-3 label-txt td">
                              <label for="field[{{ fieldId }}][slug]">Field Name</label>
                              <p class="text-muted">Single word, no spaces. Underscores and dashes allowed</p>
                          </div>
                          <div class="col-md-9 td">
                              <input class="form-control slugify field-name" placeholder="Field Name" name="field[{{ fieldId }}][slug]" type="text" value="{{ field.name | slugify }}" v-model="field.slug" id="field[{{ fieldId }}]][slug]">
                          </div>
                      </div>
                      <div class="tr">
                          <div class="col-md-3 label-txt td">
                              <label for="field[{{ fieldId }}][instruction]">Field Instructions</label>
                              <p class="text-muted">Instructions for authors. Shown when submitting data</p>
                          </div>
                          <div class="col-md-9 td">
                              <input class="form-control slugify field-label" placeholder="Field Instructions" name="field[{{ fieldId }}][instruction]" v-model="field.instruction" type="text" id="field[{{ fieldId }}][instruction]">
                          </div>
                      </div>
                      <div class="tr">
                          <div class="col-md-3 label-txt td">
                              <label for="field[{{ fieldId }}][type]">Type</label>
                              <p class="text-muted"></p>
                          </div>
                          <div class="col-md-9 td">
                              <select class="field-type form-control" v-model="field.type" id="field[{{ fieldId }}][type]" name="field[{{ fieldId }}][type]">
                                  <optgroup label="Basic">
                                      <option value="text">Text</option>
                                      <option value="textarea">TextArea</option>
                                      <option value="number">Number</option>
                                      <option value="email">E-mail</option>
                                      <option value="url">URL</option>
                                      <option value="password">Password</option>
                                  </optgroup>
                                  <optgroup label="Content">
                                      <option value="wysiwyg">Wysiwyg Editor</option>
                                      <!--<option value="file">File</option>-->
                                      <option value="image">Image</option>
                                  </optgroup>
                                  <optgroup label="Choice">
                                      <option value="checkbox">Checkbox</option>
                                      <option value="select">Select</option>
                                      <option value="radio">Radio</option>
                                  </optgroup>
                                  <optgroup label="Picker">
                                      <option value="datepicker">Datepicker</option>
                                      <option value="colorPicker">Color Picker</option>
                                  </optgroup>
                                  <optgroup label="Custom">
                                      <option value="areaOfFocus">Area Of Focus</option>
                                  </optgroup>
                                  <optgroup label="Relationship">
                                      <option value="linkObject">Link Object</option>
                                      <option value="link">Link</option>
                                      <option value="user">User</option>
                                  </optgroup>
                                  <optgroup label="Layout">
                                      <option value="repeater">Repeater</option>
                                      <option value="flexiblecontent" v-if="canShowFlexibleContentField">Flexible content</option>
                                  </optgroup>
                              </select>
                          </div>
                      </div>
                      <div class="tr">
                          <div class="col-md-3 label-txt td">
                              <label for="field[{{ fieldId }}][required]">Required?</label>
                              <p class="text-muted"></p>
                          </div>
                          <div class="col-md-9 td">
                              <input name="field[{{ fieldId }}][required]" type="radio" v-model="field.required"  value="true" id="field[{{ fieldId }}][required]"><label>Yes</label>
                              <input name="field[{{ fieldId }}][required]" type="radio" value="false" v-model="field.required" id="field[{{ fieldId }}][required]"><label>No</label>
                          </div>
                      </div>

                      <!-- Start of text block -->
                      <section v-if="field.type == 'text' || field.type == 'url' || field.type == 'password' || field.type == 'email' || field.type == 'datepicker' || field.type == 'areaOfFocus'"  class="tbody">
                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][default_value]">Default Value</label>
                                <p class="text-muted">Appears when creating a new page</p>
                            </div>
                            <div class="col-md-9 td">
                                <input class="form-control" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" v-model="field.default_value" type="text" id="field[{{ fieldId }}][default_value]">
                            </div>
                        </div>

                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][placeholder]">Placeholder Text</label>
                                <p class="text-muted">Appears within the input</p>
                            </div>
                            <div class="col-md-9 td">
                                <input class="form-control" placeholder="Placeholder Text" name="field[{{ fieldId }}][placeholder]" type="text" v-model="field.placeholder" id="field[{{ fieldId }}][placeholder]">
                            </div>
                        </div>

                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][limit]">Character Limit</label>
                                <p class="text-muted">Leave blank for no limit</p>
                            </div>
                            <div class="col-md-9 td">
                                <input class="form-control" placeholder="Character Limit" name="field[{{ fieldId }}][limit]" v-model="field.limit" type="number" id="field[{{ fieldId }}][limit]">
                            </div>
                        </div>
                      </section>
                      <!-- end of text block -->

                    <!-- Start of relationship blocks -->
                    <section v-if="field.type == 'linkObject' || field.type == 'link' || field.type == 'user'"  class="tbody">
                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][default_value]">Default Value</label>
                                <p class="text-muted">Appears when creating a new page</p>
                            </div>
                            <div class="col-md-9 td">
                                <input class="form-control" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" v-model="field.default_value" type="text" id="field[{{ fieldId }}][default_value]">
                            </div>
                        </div>

                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][multiple]">Select multiple values?</label>
                            </div>
                            <div class="col-md-9 td">
                                <label>
                                    <input class="form-control" name="field[{{ fieldId }}][multiple]" v-model="field.multiple" type="radio" value="yes" id="field[{{ fieldId }}][multiple]">
                                    Yes
                                </label>
                                <label>
                                    <input class="form-control" name="field[{{ fieldId }}][multiple]" v-model="field.multiple" type="radio" value="no" id="field[{{ fieldId }}][multiple]">
                                    No
                                </label>
                            </div>
                        </div>
                    </section>
                    <!-- end of text block -->


                    <!-- Start of checkbox block -->
                    <section v-if="field.type == 'checkbox' || field.type == 'select' || field.type == 'radio'" class="tbody">
                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][default_value]">Default Value</label>
                                <p class="text-muted">Enter each default value on a new line</p>
                            </div>
                            <div class="col-md-9 td">
                                <input class="form-control" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" v-model="field.default_value" type="text" value="" id="field[{{ fieldId }}][default_value]">
                            </div>
                        </div>

                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][choices]">Choices</label>
                                <p class="text-muted">
                                  Enter each choice on a new line.
                                  <br>
                                  For more control, you may specify both a value and label like this:
                                  <br>
                                  red : Red
                                </p>
                            </div>
                            <div class="col-md-9 td">
                                <textarea class="form-control" placeholder="Placeholder Text" rows="10" name="field[{{ fieldId }}][choices]" type="text" v-model="field.choices" id="field[{{ fieldId }}][choices]">
                                </textarea>
                            </div>
                        </div>

                        <div class="field_option field_option_text tr">
                            <div class="col-md-3 label-txt td">
                                <label for="field[{{ fieldId }}][layout]">Layout</label>
                            </div>
                            <div class="col-md-9 td">
                              <label>
                                <input class="form-control" name="field[{{ fieldId }}][layout]" v-model="field.layout" type="radio" value="vertical" id="field[{{ fieldId }}][layout]">
                                Vertical
                              </label>
                              <label>
                                <input class="form-control" name="field[{{ fieldId }}][layout]" v-model="field.layout" type="radio" value="horizontal" id="field[{{ fieldId }}][layout]">
                                Horizontal
                              </label>
                            </div>
                        </div>
                    </section>
                    <!-- end of text block -->


                      <!-- start of number block -->
                      <section v-if="field.type == 'number'"  class="tbody">
    			              <div class="field_option field_option_number tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][placeholder]">Placeholder Text</label>
                        		<p class="text-muted">Appears within the input</p>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control" placeholder="Placeholder Text" name="field[{{ fieldId }}][placeholder]" type="text" v-model="field.placeholder" id="field[{{ fieldId }}][placeholder]">
                        	</div>
                        </div>
                        <div class="field_option field_option_number tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][default_value]">Default Value</label>
                        		<p class="text-muted">Appears when creating a new page</p>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" type="number" v-model="field.default_value" id="field[{{ fieldId }}][default_value]">
                        	</div>
                        </div>
                        <div class="field_option field_option_number tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][min_value]">Minimum Value</label>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control" placeholder="Minimum Value" name="field[{{ fieldId }}][min_value]" type="number" v-model="field.min_value" id="field[{{ fieldId }}][min_value]">
                        	</div>
                        </div>
                        <div class="field_option field_option_number tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][max_value]">Maximum Value</label>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control slugify" placeholder="Maximum Value" name="field[{{ fieldId }}][max_value]" type="number" v-model="field.max_value" id="field[{{ fieldId }}][max_value]">
                        	</div>
                        </div>
                      </section>
                      <!-- end of number block -->

                      <!-- start of textarea block -->
                      <section v-if="field.type == 'textarea'"  class="tbody">
                        <div class="field_option field_option_textarea tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][default_value]">Default Value</label>
                        		<p class="text-muted">Appears when creating a new post</p>
                        	</div>
                        	<div class="col-md-9 td">
                        		<textarea class="form-control" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" cols="50" rows="10" id="field[{{ fieldId }}][default_value]" ></textarea>
                        	</div>
                        </div>
                        <div class="field_option field_option_textarea tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][placeholder]">Placeholder</label>
                        		<p class="text-muted">Appears when creating a new post</p>
                        	</div>
                        	<div class="col-md-9 td">
                        		<textarea class="form-control" placeholder="Placeholder Text" name="field[{{ fieldId }}][placeholder]" cols="50" rows="10" id="field[{{ fieldId }}][placeholder]"></textarea>
                        	</div>
                        </div>
                        <div class="field_option field_option_textarea tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][rows]">Rows</label>
                        		<p class="text-muted">Sets the textarea height</p>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control slugify" placeholder="Rows" name="field[{{ fieldId }}][rows]" type="number" value="" id="field[{{ fieldId }}][rows]">
                        	</div>
                        </div>
                      </section>
                      <!-- end of textarea block -->

                      <!-- start of wysiwyg block -->
                      <section v-if="field.type == 'wysiwyg'" class="tbody">
                        <div class="field_option field_option_wysiwyg tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][default_value]">Default Value</label>
                        		<p class="text-muted">Appears when creating a new page</p>
                        	</div>
                        	<div class="col-md-9 td">
                        		<textarea class="form-control slugify" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" cols="50" rows="10" id="field[{{ fieldId }}][default_value]" :disabled="field.type != 'wysiwyg'"></textarea>
                        	</div>
                        </div>
                        <div class="field_option field_option_wysiwyg tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][toolbar]">ToolBar</label>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control slugify" placeholder="ToolBar" name="field[{{ fieldId }}][toolbar]" type="text" value="basic" id="field[{{ fieldId }}][toolbar]" :disabled="field.type != 'wysiwyg'">
                        	</div>
                        </div>
                      </section>
                      <!-- end of wysiwyg block -->

                      <!-- start of file block -->
                      <section v-if="field.type == 'image' || field.type == 'file'"  class="tbody">
                        <div class="field_option field_option_file tr">
                        	<div class="col-md-3 label-txt td">
                        		<label for="field[{{ fieldId }}][file_type]">File type</label>
                        	</div>
                        	<div class="col-md-9 td">
                        		<input class="form-control slugify" placeholder="File type" name="field[{{ fieldId }}][file_type]" type="text" value="" id="field[{{ fieldId }}][file_type]">
                        	</div>
                        </div>
                      </section>
                      <!-- end of file block -->

                    <!-- start of repeater block -->
                    <utility-repeater :field="field" :has-parent="field.unique_id" v-if="field.type == 'repeater'"></utility-repeater>
                    <!-- end of repeater block -->

                    <!-- start of flexiblecontent block -->
                    <utility-flexible-content :field="field" :has-parent="field.unique_id" v-if="field.type == 'flexiblecontent'"></utility-flexible-content>
                    <!-- end of flexiblecontent block -->

                      <!-- field_save -->
                      <div class="field_save">
                          <div class="col-md-3 label-txt td"></div>
                          <div class="col-md-9 td">
                              <a class="btn btn-default btn-toggle" title="Close Field" @click="this.showFields = false;">Close Field</a>
                          </div>
                      </div>
                </section>
                <!-- field_option start - default with option type is text-->
            </div>
        </div>
    </div>
</template>


<script>
//import text from './Fields/Text.vue';

    export default {

        props : ['field', 'hasParent', 'hasParentLayout', 'indexId'],
//        props : {
//            field : 'String',
//            indexId : 'Number',
//            hasParent : {
//                //type : ['String', 'Boolean'],
//                type    : 'String',
//                default : 'false'
//            },
//            hasParentLayout : {
//                type    : 'String',
//                default : 'false'
//            }
//        },

        ready : function(){
            if(this.field.children == undefined){
                this.field.children = [];
            }
            if(this.field.layouts == undefined){
                this.field.layouts = [];
            }
        },

        data : function() {
            return {
                showFields : false
            };
        },

        components : {
            //text : require('./Fields/Text')
            //text : text
        },

        computed : {

            showFlexibleContentField : function(){
                return this.$store.state.showFlexibleContentField;
            },

            canShowFlexibleContentField : function(){

                if(this.showFlexibleContentField === false){
                    return false;
                }
                if(this.hasParentLayout == 0){
                    return true;
                }

                return false;
            },

            isANewField : function(){
                if(this.hasParentLayout != 0 && this.field.addedNew != undefined){
                    if(this.field.addedNew == true){
                        return true;
                    }
                }

                return false;
            },

            fieldId : function(){
                if(this.field.unique_id){
                  return this.field.unique_id;
                }
                return DynamicFields.GetUniqueId('field_');
            },

            currentTypeView : function(){
              return this.field.type;
            },

            isOpen : function(){
//                if(this.field.addedNew){
//                    return this.field.addedNew;
//                }

                return this.showFields;
            }


        },

        events : {
            'deleteFields' : function(fields){
                var that = this;
                _.each(fields, function(field){
                    that.deleteField(field);
                });
            }
        },

        methods : {
            /**
             * toggleVisibility()
             *
             * toggle a visibility
             *
             * @return {Null}
             */
            toggleVisibility : function(){
                this.showFields = !this.showFields;
            },

            /**
             * loopDeleteRepeaterFields()
             *
             * delete a field
             *
             * @param fields
             *
             * @return {Null}
             */
            loopDeleteRepeaterFields : function(fields){
                var deletedFields = [];

                var that = this;

                _.each(fields, function(field){
                    deletedFields.push(field);
                    if(field.children){
                        that.loopDeleteRepeaterFields(field.children);
                    }
                });

                this.$store.dispatch('updateDeletedFields', deletedFields);

            },

            loopDeleteFlexibleContentFields : function(layouts){

            },

            /**
             * deleteField()
             *
             * delete a field. Add it to the deletedFields array in global store
             * Also check if repeater or flexible content and loop through
             * and get the sub fields
             *
             * @param field
             *
             * @return {Null}
             */
            deleteField : function(field){
                var that = this;

                //console.log('deleteField',field);
                var deletedFields = [];

                deletedFields.push(field);

               /*
                * if it has children then it is a repeater
                */
                if(field.children && field.addedNew == undefined){
                    //console.log('time to loop this');
                    this.loopDeleteRepeaterFields(field.children);
                }

                /*
                 * if it has layouts then it is a flexible content
                 */
                if(field.layouts && field.addedNew == undefined){
                    //console.log('time to loop this');
                    //this.loopDeleteFlexibleContentFields(field.layouts);
                    _.each(field.layouts, function(layout){
                        //deletedFields.push(field);
                        _.each(layout.fields, function(field){
                            //deletedFields.push(field);
                            that.deleteField(field);
                            //that.$store.dispatch('updateDeletedFields',[field]);
                        });
                    });
                }

                /*
                 * we do not wish to add new fields created
                 * to the delete fields array
                 */
                if(field.addedNew == undefined) {
                    this.$store.dispatch('updateDeletedFields',deletedFields);
                }
                this.$store.dispatch('removeFromFields', field);

                this.$dispatch('deleteSubField', field);
                this.$dispatch('deleteField',field);
            }
        }


    };
</script>

<style>

</style>
