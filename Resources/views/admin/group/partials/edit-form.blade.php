
			<?php
				$arrValue = config('asgard.dynamicfield.config.entity-type');
			?>
			<div class="box box-body">			
				<groups :fields="{{ json_encode($fields) }}" :group="{{ json_encode($group) }}"></groups>
				{{--<rules :entity-types="{{ json_encode($arrValue) }}" :locations="{{ json_encode($locations) }}" :group="{{ json_encode($group) }}"></rules>--}}

				<div class="box-body" id="location">
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
										@include('dynamicfield::admin.group.partials.location.rule',['locations'=>@$locations])
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				
				<div class="box-footer" style="margin-top: 20px;">
					<button type="submit" class="btn btn-primary btn-flat">{{ trans('core::core.button.update') }}</button>
				</div>
			</div>

