<?php 

if (!count($locations)) {
	$locations = [
			[
			// group_0
				'id' => 0,
			// rule_0
				'rule' => [
						[
								'parameter'       =>    'PAGE',
								'operator'        =>    '==========',
								'value'           =>    'PAGE',
						]
				],
				'group_id' => 0
			]
	];
}
?>
<?php 
    $group_index_id    	= 'index_group';
    $rule_index_id      = 'index_item';
    $rule_delete_id    	= 'delete_item';
    $group_delete_id    = 'delete_group';
    $group_delete_name  = 'group[delete_group]';
    $rule_delete_name   = 'group[delete_item]';
    $arrOperator        = [
			'equal' 	=> 'is equal to',
			'notequal'  => 'is not equal to'
	];
    /* $arrValue 			= Modules\Dynamicfield\Library\Enum\Rules\Type::getList(); */

    $arrValue            = config('asgard.dynamicfield.config.entity-type');
    $arrParameter        = [
			'type' 		=> 'Module',
			'template' 	=> 'Page Template'
	];
?>

<div class="location-groups">
{!! Form::hidden($group_index_id,0, ['class' => "form-control",'id'=>$group_index_id]) !!}
{!! Form::hidden($rule_index_id,null, ['class' => "form-control",'id'=>$rule_index_id]) !!}	
{!! Form::hidden($group_delete_id,0, ['class' => "form-control",'id'=>$group_delete_id,'name'=>$group_delete_name]) !!}	
{!! Form::hidden($rule_delete_id,null, ['class' => "form-control",'id'=>$rule_delete_id,'name'=>$rule_delete_name]) !!}	
<?php if (isset($locations)): ?>
	<?php $i = 1; foreach ($locations as $group_id => $group): ?>
		<?php $group_id = "group_" . $group_id; ?>
		<div data-id="{{ $group_id }}" class="location-group">
			<h4>Show this field group if</h4>
			<table class="data-table table dataTable">
				<tbody>
				<?php
					//dd($group);

					//dd($group['rule']);
					is_array($group['rule']) ? $group_rules = $group['rule'] : $group_rules = json_decode($group['rule']);
					
					//dd($group_rules);
                ?>
					<?php foreach ($group_rules as $rule_id => $rule):?>
					<?php $rule_id = "rule_" . $rule_id; ?>

				<?php
				$rule = (array) $rule;
				//dd($rule_id, $rule);
				?>
					<tr data-id="{{ $rule_id }}">
						<td class="param">
							<?php 
                            $parameter_name = 'location[%s][%s][parameter]';
                            $parameter_name = sprintf($parameter_name, $group_id, $rule_id);
                            $parameter_selected = $rule['parameter'];
                            //$value_selected = str_replace('\\', "\\\\", $rule['value']);
							$value_selected = $rule['value'];
                            ?>							
							{!! Form::select($parameter_name, $arrParameter,$parameter_selected, ['class' => "form-control drop-parameter","onChange"=>"changeLocationParameter(this,'$value_selected')"]) !!}
						</td>
						<td class="operator">
							<?php 
                                $operator_name = 'location[%s][%s][operator]';
                                $operator_name = sprintf($operator_name, $group_id, $rule_id);
                                $operator_selected = $rule['operator'];
                            ?>
							{!! Form::select($operator_name, $arrOperator,$operator_selected, ['class' => "form-control"]) !!}
						</td>
						<td class="value" width="150">
							<?php 
                                $value_name = 'location[%s][%s][value]';
                                $value_name = sprintf($value_name, $group_id, $rule_id);
                            ?>
							<?php if(isset($all_templates) && $parameter_selected === 'template'): ?>
								{!! Form::select($value_name, $all_templates, $value_selected, ['class' => "form-control"]) !!}
							<?php else : ?>
								{!! Form::select($value_name, $arrValue, $value_selected, ['class' => "form-control"]) !!}
							<?php endif; ?>
						</td>
						<td class="action">
							<a class="btn-add circle" onclick="location_add_rule(this)">
								<span class="glyphicon glyphicon-plus"></span>
							</a>
							<a class="btn-remove circle" onclick="location_remove(this)">
								<span class="glyphicon glyphicon-minus"></span>
							</a>
						</td>	
					</tr>
					<?php endforeach;?>
				</tbody>
			</table>
		</div>	
		<?php endforeach;?>
	<h4>or</h4>
	<a onclick="location_add_group(this,{{ $group_index_id }})" class="button location-add-group">Add rule group</a>
<?php endif; ?>
</div>

<?php 
	$templateStr = '';
	foreach ($all_templates as $templateKey => $templateName) {
		$templateStr .= '<option value="' . $templateKey . '">' . $templateName . '</option>';
	}
	$moduleStr = '';
	foreach ($arrValue as $moduleKey => $moduleName) {
		$moduleStr .= '<option value="' . $moduleKey . '">' . $moduleName . '</option>';
	}
?>

<script>
	var dynamicfields = dynamicfields || {};
	if (typeof dynamicfields.locations === 'undefined') {
		dynamicfields.locations = {};
	}

	dynamicfields.locations.rules = {};
	dynamicfields.locations.rules.templateOptions = '{!! $templateStr !!}';
	dynamicfields.locations.rules.moduleOptions =  '{!! $moduleStr !!}';

	function setDDtoModuleOptions ($control) {
		var $dropdown = $control.find('td.value select');
		
		$dropdown.empty();
		$dropdown.append(dynamicfields.locations.rules.moduleOptions);
	}

	function location_add_group(o){
		// vars
		var parent = $(o).closest('div');
		var $group = parent.find('.location-group:last'),
			$group2 = $group.clone(),
			old_id = $group2.attr('data-id'),
			new_id = $("#index_group").val();
			new_id++;
		var new_index = "group_-" + new_id;	
		// update names
		$group2.find('[name]').each(function(){
			var name = $(this).attr('name');
			$(this).attr('name', name.replace(old_id, new_index) );
			
		});
		
		// set drop down to module options
		setDDtoModuleOptions($group2);

		// update data-i
		$group2.attr( 'data-id', new_index );
		$("#index_group").val(new_id);
		// update h4
		$group2.find('h4').text( "or" );
		// remove all tr's except the first one
		$group2.find('tr:not(:first)').remove();
		// add tr
		$group.after( $group2 );
	}
	function location_add_rule(o){
		// vars
		var $tr = $(o).closest('tr');
		var $tr2 = $tr.clone(),
			old_id = $tr2.attr('data-id'),
			new_id = $("#index_item").val();
			new_id++;
		// update names
		var new_index = "rule_-" + new_id;
		$tr2.find('[name]').each(function(){
			var name = $(this).attr('name');
			$(this).attr('name', name.replace(old_id, new_index) );
		});
		
		// set drop down to module options
		setDDtoModuleOptions($tr2);

		$("#index_item").val(new_id);
		// update data-i
		$tr2.attr( 'data-id', new_index );
		// add tr
		$tr.after( $tr2 );
	}
	function location_remove(o){
		// vars
		var is_remove = true;
		var $tr = $(o).closest('tr');
		var count_group = $(".location-groups").find('.location-group').length;
		if(count_group == 1){
			var count_item = $(".location-group").find('tr').length;
			if(count_item == 1){
				is_remove = false;
			}
		}
		var siblings = $tr.siblings('tr').length;
		if(is_remove){
			if( siblings == 0 )
			{
				// remove group
				$group = $tr.closest('.location-group');
				updateDeleteLocation($group,"delete_group");
				$group.remove();
			}
			else
			{
				// remove item
				updateDeleteLocation($tr,"delete_item");
				$tr.remove();
			}
		}
	}

	function updateDeleteLocation(obj,deleteName){
		var data_id = obj.attr("data-id");
		if(data_id !="" ){
			var _delete_Id  = '#' + deleteName;
			var strItems = $(_delete_Id).val();
			if(strItems!="") strItems+= ",";
			strItems	+= data_id;
			$(_delete_Id).val(strItems);
		}
	}

	function changeLocationParameter(obj,value){
		var $dropdown = $(obj).closest('tr').find('td.value select');
		
		$dropdown.empty();

		if ($(obj).find(':selected').val() === 'type') {
			$dropdown.append(dynamicfields.locations.rules.moduleOptions);
		}
		else {
			$dropdown.append(dynamicfields.locations.rules.templateOptions);
		}
		
		//var selected = $(obj).val();
		//var dropName = $(obj).attr("name");
		//var reqData = "selected=" + selected + "&value=" + value + "&dropName=" + dropName ;
		// jQuery.ajax( {
		// 	url : "renderLocationDrop",
		// 	type : 'GET',
		// 	dataType: 'html',
		// 	data : reqData +"&ajax=true",
		// 	success : function(responseData) {
		// 		//var data = eval(responseData);
		// 		tr.find('td.value').html(responseData);
		// 	}
		// });
	}
</script>