@extends('layouts.master')

@section('content-header')
    <h1>
        {{ trans('dynamicfield::dynamicfield.title.optionvalues') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{ route('dashboard.index') }}"><i class="fa fa-dashboard"></i> {{ trans('core::core.breadcrumb.home') }}</a></li>
        <li class="active">{{ trans('dynamicfield::dynamicfield.title.optionvalues') }}</li>
    </ol>

    <script>
        var dynamicGlobalUrl = '{{ URL::to('/') . '/' . locale() }}' ;
        window.dynamicGlobalUrl = dynamicGlobalUrl;
    </script>
@stop

@section('styles')
    {!! Theme::script('js/vendor/ckeditor/ckeditor.js') !!}

    <link href="{{{ Module::asset('dynamicfield:css/jquery-ui.min.css') }}}" rel="stylesheet" type="text/css" />
    <link href="{{{ Module::asset('dynamicfield:css/styles.css') }}}" rel="stylesheet" type="text/css" />
@stop

@section('content')
    <section id="dynamicFields-app">
        {!! Form::open([ 'route' => ['admin.dynamicfield.optionvalues.store']]) !!}
        <div class="row">
            <div class="col-md-12">
                <div class="nav-tabs-custom">
                    <div class="tab-content">
                        <div class="tab-pane active">
                            <div class="box-body">
                                    <div id="advance_template_{!! locale() !!}">
                                        <entities :entities="{{ json_encode($entities) }}"></entities>
                                    </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary btn-flat" name="button" value="index" >
                                    <i class="fa fa-angle-left"></i>
                                    {{ trans('core::core.button.update and back') }}
                                </button>
                                <button type="submit" class="btn btn-primary btn-flat">
                                    {{ trans('core::core.button.update') }}
                                </button>
                                <button class="btn btn-default btn-flat" name="button" type="reset">{{ trans('core::core.button.reset') }}</button>
                                <a class="btn btn-danger pull-right btn-flat" href="{{ URL::route('admin.page.page.index')}}"><i class="fa fa-times"></i> {{ trans('core::core.button.cancel') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {!! Form::close() !!}
    </section>
@stop

@section('footer')
    <a data-toggle="modal" data-target="#keyboardShortcutsModal"><i class="fa fa-keyboard-o"></i></a> &nbsp;
@stop
@section('shortcuts')
    <dl class="dl-horizontal">
        <dt><code>b</code></dt>
        <dd>{{ trans('core::core.back to index') }}</dd>
    </dl>
@stop

@section('scripts')
    <script src="{{{ Module::asset('dynamicfield:js/jquery-ui.min.js') }}}"></script>
    <script src="{{{ Module::asset('dynamicfield:js/app.js') }}}"></script>
@stop
