@extends('layouts.master')

@section('content-header')
    <h1>
        {{ trans('dynamicfield::group.title.field_group') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{ route('dashboard.index') }}"><i class="fa fa-dashboard"></i> {{ trans('core::core.breadcrumb.home') }}</a></li>
        <li class="active">{{ trans('dynamicfield::dynamicfield.title.admin') }}</li>
    </ol>
    <script>
        var dynamicGlobalUrl = '{{ URL::to('/') . '/' . locale() }}' ;
        window.dynamicGlobalUrl = dynamicGlobalUrl;
    </script>
@stop
@section('content')
    <div class="row">
        <div class="col-xs-12">

            <div class="box box-primary">
                <div class="box-header">
                    <h1>{{ trans('dynamicfield::dynamicfield.title.admin') }}</h1>
                    <p>These are scripts to run if necessary</p>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <!-- /.box-body -->
                    <h3>Sync props</h3>
                    <p>
                        Sync Props is to sync <strong>parent_layout</strong> property from the data serialized array to the <strong>field_translations</strong> seperate <strong>parent_layout</strong> property
                        {!! Form::open([ 'route' => ['admin.dynamicfield.admin.updateProps'] ]) !!}
                        <div class="btn-group">
                            <button  class="btn btn-primary btn-flat" style="padding: 4px 10px;">
                                <i class="fa fa-pencil"></i> Sync Props
                            </button>
                        </div>
                        {!! Form::close() !!}
                    </p>


                    <h3>Migrate Repeaters &amp; Flexible Content</h3>
                    <p>
                        This is to run the migration/update of flexible content and repeater fields to the latest supported layout
                        {!! Form::open([ 'route' => ['admin.dynamicfield.admin.migrateOldToNew'] ]) !!}
                        <div class="btn-group">
                            <button  class="btn btn-primary btn-flat" style="padding: 4px 10px;">
                                <i class="fa fa-pencil"></i> Migrate
                            </button>
                        </div>
                        {!! Form::close() !!}
                    </p>


                    <h3>Migrate Wysiwyg</h3>
                    <p>
                        Some wysiwyg posts need updating
                    {!! Form::open([ 'route' => ['admin.dynamicfield.admin.migrateWysiwyg'] ]) !!}
                    <div class="btn-group">
                        <button  class="btn btn-primary btn-flat" style="padding: 4px 10px;">
                            <i class="fa fa-pencil"></i> Migrate
                        </button>
                    </div>
                    {!! Form::close() !!}
                    </p>

                    <h3>Migrate Empty Parent Layouts</h3>
                    <p>
                        Some old fields and field translations have not had parent_layout set to 0 but to an empty string, this must be recitifed
                    {!! Form::open([ 'route' => ['admin.dynamicfield.admin.updateEmptyParentLayouts'] ]) !!}
                    <div class="btn-group">
                        <button  class="btn btn-primary btn-flat" style="padding: 4px 10px;">
                            <i class="fa fa-pencil"></i> Migrate
                        </button>
                    </div>
                    {!! Form::close() !!}
                    </p>

                </div>
                <!-- /.box -->
            </div>

        </div>
    </div>
    <!-- dialogbox delete -->

@stop

@section('scripts')

@stop
