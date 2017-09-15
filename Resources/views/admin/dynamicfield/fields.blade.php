<script src="//cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.js"></script>
<?php

    // assign $entityType from template file;
    $entityDynamic = null;
    $arrType = config('asgard.dynamicfield.config.entity-type');

    //dd($entityType);
    if (isset($$entityType)) {
        $entityDynamic = $$entityType;
    }
    if (is_null($entityDynamic)) {
        foreach ($arrType as $modelClass=>$type) {
            if ($entityType == $type) {
                $entityDynamic = new $modelClass;
            }
        }
    }

    $lang = (isset($lang)) ? $lang : 'en';

    $dynamicFields = new Modules\Dynamicfield\Library\DynamicFieldsForEntity($entityDynamic, $lang);
    $fields = $dynamicFields->getFieldsForCurrentPage(Request::all());
    //dd($fields);
    $fields = json_encode($fields);
?>
<div id="make-bigger" class="btn btn-primary">
    Full Size
</div>
<div id="dynamicFields-app">
    <div id="advance_template_{!! $lang !!}">
        <entities :entities="{{ $fields }}"></entities>
    </div>
</div>

<script>
    if (typeof window.includeMedia === 'undefined') {
       /*
        * dynamicGlobalUrl is set in resource/views/group/edit.blade.php
        */
        var dynamicGlobalUrl = '{{ URL::to('/') . '/' . locale() }}' ;
        window.dynamicGlobalUrl = dynamicGlobalUrl;
        window.includeMediaSingle = function (mediaId) {
            $.ajax({
                type : 'POST',
                url  : '{{ route('admin.dynamicfield.media.linkMedia') }}',
                data : {
                    'mediaId': mediaId,
                    '_token': '{{ csrf_token() }}'
                },
                success: function (data) {
                    console.log(data, window.mediaPanel);
                    window.mediaPanel.find('input[type=hidden]').first().val(mediaId);

                    var html = '<img src="' + data.result.path + '" alt="" style="min-width:200px; max-width: 200px;"/>' +
                            '<a class="jsRemoveSimpleLink" href="#" data-id="' + data.result.imageableId + '">' +
                            '<i class="fa fa-times-circle removeIcon"></i>' +
                            '</a>';
                    window.zoneWrapper.append(html).fadeIn('slow', function() {
                        //toggleButton($(this));
                        $(this).html(html);
                    });
                }
            });
        };
    }

    /*
     * need more room for repeaters within repeaters
     * this helps us out
     */
    var $colMd10 = $('.content .row > .col-md-10');
    $('#make-bigger').on('click',function(){
        if( $colMd10.hasClass('col-md-10') ){
            $colMd10.removeClass('col-md-10');
            $colMd10.addClass('col-md-12');
        }else{
            $colMd10.removeClass('col-md-12');
            $colMd10.addClass('col-md-10');
        }
    });

    //if($('.jsThumbnailImageWrapper').length > 0){
        $('body').on('click','.jsThumbnailImageWrapper',function(){
            event.preventDefault();
            var imageValue = $(this).closest('.media');
            imageValue.find('input[type=hidden]').first().val("");
            $(this).fadeOut('slow').html('');
        });
    //}
</script>

