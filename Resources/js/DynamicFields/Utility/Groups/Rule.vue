<template>
    <tr data-id="rule_0">
        <td class="param">

            <select class="form-control drop-parameter" @change="changeLocationParameter(parameter)" v-model="parameter" name="location[group_132][rule_0][parameter]">
                <option value="type">Module</option>
                <option value="template">Page Template</option>
            </select>
        </td>
        <td class="operator">
            <select class="form-control" v-model="operator" name="location[group_132][rule_0][operator]">
                <option value="equal">is equal to</option>
                <option value="notequal">is not equal to</option>
            </select>
        </td>
        <td class="value" width="150">
            <select class="form-control" v-model="value" name="location[group_132][rule_0][value]">
                <option value="Modules\Page\Entities\Page">page</option>
                <option value="Modules\Post\Entities\Post">post</option>
                <option value="Modules\Swimtips\Entities\Video">video</option>
            </select>
        </td>
        <td class="action">
        </td>
    </tr>

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