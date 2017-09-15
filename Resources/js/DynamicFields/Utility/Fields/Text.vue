<template>
  <div class="field_option field_option_text tr">
      <div class="col-md-3 label-txt td">
          <label for="field[{{ fieldId }}][default_value]">Default Value</label>
          <p class="text-muted">Appears when creating a new page</p>
      </div>
      <div class="col-md-9 td">
          <input class="form-control slugify" placeholder="Default Value" name="field[{{ fieldId }}][default_value]" v-model="defaultValue" type="text" value="" id="field[{{ fieldId }}][default_value]">
      </div>
  </div>

  <div class="field_option field_option_text tr">
      <div class="col-md-3 label-txt td">
          <label for="field[{{ fieldId }}][placeholder]">Placeholder Text</label>
          <p class="text-muted">Appears within the input</p>
      </div>
      <div class="col-md-9 td">
          <input class="form-control slugify" placeholder="Placeholder Text" name="field[{{ fieldId }}][placeholder]" type="text" v-model="placeholder" id="field[{{ fieldId }}][placeholder]">
      </div>
  </div>

  <div class="field_option field_option_text tr">
      <div class="col-md-3 label-txt td">
          <label for="field[{{ fieldId }}][limit]">Character Limit</label>
          <p class="text-muted">Leave blank for no limit</p>
      </div>
      <div class="col-md-9 td">
          <input class="form-control slugify" placeholder="Character Limit" name="field[{{ fieldId }}][limit]" v-model="characterLimit" type="text" value="" id="field[{{ fieldId }}][limit]">
      </div>
  </div>
</template>

<script>

    export default {

        props : ['fieldItem'],

        computed : {
          defaultValue : function(){
            if(this.fieldItem.defaultValue){
              return this.fieldItem.defaultValue;
            }
            return '';
          },
          placeholder : function(){
            if(this.fieldItem.placeholder){
              return this.fieldItem.placeholder;
            }
            return '';
          },
          characterLimit : function(){
            if(this.fieldItem.characterLimit){
              return this.fieldItem.characterLimit;
            }
            return '';
          }
        }
    }
</script>
