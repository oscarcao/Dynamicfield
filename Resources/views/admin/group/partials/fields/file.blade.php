<tr class="field_option field_option_file">
	<td class="col-md-3 label-txt">
		{!! Form::label("field[$index][file_type]", trans('dynamicfield::field.form.file_type')) !!}
	</td>
	<td class="col-md-9">
		{!! Form::text("field[$index][file_type]", $options["file_type"], ['class' => 'form-control slugify', 'placeholder' => trans('dynamicfield::field.form.file_type')]) !!}
	</td>
</tr>
