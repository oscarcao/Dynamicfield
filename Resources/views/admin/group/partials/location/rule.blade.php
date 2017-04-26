<?php 

if (!count($locations)) {
	$locations = [
			[
			// group_0
				'id' => 0,
			// rule_0
				'rule' => [['parameter'=>'PAGE','operator'=>'==========','value'=>    'PAGE']],
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
    /* $arrValue 			= Modules\Dynamicfield\Utility\Enum\Rules\Type::getList(); */

	
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
<?php if (isset($locations)): //dd($locations);?>
	<?php $i = 1; foreach ($locations as $group): ?>
		<?php $group_id = "group_" . $group['id']; ?>
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
							{!! Form::select($value_name, $arrValue, $value_selected, ['class' => "form-control"]) !!}
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
	
		
		
			
				
					
				
			
