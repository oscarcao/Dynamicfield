<template>
    <div class="postbox" id="location">
        <h3 class="title"><span>Location</span></h3>
        <div class="inside">
            <table class="data-table table dataTable table-location">
                <tbody>
                <tr>
                    <td class="rule-des">
                        <label for="post_type">Rules</label>
                        <p class="description">Create a set of rules to determine which edit screens will use these advanced custom fields</p>
                    </td>
                    <td>
                        <div class="location-groups">
                            <input class="form-control" id="index_group" name="index_group" type="hidden" value="0">
                            <input class="form-control" id="index_item" name="index_item" type="hidden">
                            <input class="form-control" id="delete_group" name="group[delete_group]" type="hidden" value="0">
                            <input class="form-control" id="delete_item" name="group[delete_item]" type="hidden">
                            <div data-id="group_132" class="location-group">
                                <table class="data-table table dataTable" v-for="(index, group) in locations">
                                    <tbody>
                                        <rule v-for="(index,rule) in group.rule" :entity-types="entityTypes" :locations="locations" :group="group"></rule>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import updateFieldsData from './../../../Store/Actions';

    export default {

        props : ['locations', 'group', 'entityTypes'],

        ready : function(){
            //this.$store.dispatch('updateFieldsData',this.fields);
            if(1===0){

            }
        },

        data : function() {
            return {
                groupName : {
                    name : ''
                },
                defaults : {
                    id : 0,
                    rule : {
                        parameter: 'PAGE',
                        operator: '==========',
                        value: 'PAGE'
                    },
                    group_id : 0
                }
            };
        },

        computed : {

            results : {

            },

            theName : function() {
                if (this.group.name) {
                    return this.group.name;
                }
                return '';
            }
        },
        methods : {
            changeLocationParameter : function(obj,value){
                var tr = $(obj).closest('tr');
                var selected = $(obj).val();
                var dropName = $(obj).attr("name");
                var reqData = "selected=" + selected + "&value=" + value + "&dropName=" + dropName ;
                jQuery.ajax( {
                    url : "renderLocationDrop",
                    type : 'POST',
                    enctype : 'multipart/form-data',
                    datatype: 'json',
                    data : reqData +"&ajax=true",
                    success : function(responseData) {
                        var data = eval(responseData);
                        tr.find('td.value').html(data.html);
                    }
                });
            }
        }
    };
</script>