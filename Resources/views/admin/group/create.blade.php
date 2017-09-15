@extends('layouts.master')

@section('content-header')
    <h1>
        {{ trans('dynamicfield::group.title.field_group') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{ route('dashboard.index') }}"><i class="fa fa-dashboard"></i> {{ trans('core::core.breadcrumb.home') }}</a></li>
        <li class="active">{{ trans('dynamicfield::group.title.field_group') }}</li>
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
        {!! Form::open([ 'route' => ['admin.dynamicfield.group.store']]) !!}
        <div class="row">
            <div class="col-md-12">
                @include('dynamicfield::admin.group.partials.edit-form', ['fields' => $fields,'group'=>$group])
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
