<?php
use Modules\Dynamicfield\Library\Fields\GetFieldValue;

if (! function_exists('get_option')) {

    /* get_option()
    *
    * This function will return a custom option value for a specific option name/key
    *
    * @type	function
    * @since	1.0
    * @date	01/08/16
    *
    * @param	$dynamicFields (array) the array of fields
    * @param	$selector (string) the field name or key
    *
    * @return	(mixed)
    */
    function get_option($selector, $arrayIn = false) {

        $fields = (false === $arrayIn) ? $GLOBALS['dynamicFieldOptions'] : $arrayIn;

        if(is_null($fields)){
            return false;
        }

        if(!isset($fields[$selector])){
            return false;
        }

        return $fields[$selector];
    }
}

if (! function_exists('the_option')) {

    /*
    * the_option()
    *
    * This function is the same as echo get_option().
    *
    * @type	function
    * @since	1.0
    * @date	29/08/16
    *
    * @param	$selector (string) the field name or key
    * @param	$arrayIn (array) potential array to pass in
    *
    * @return
    */
    function the_option( $selector, $arrayIn = false ) {

        $value = get_option( $selector, $arrayIn );

        echo $value;
    }
}
if (! function_exists('get_field')) {

    /* get_field()
    *
    * This function will return a custom field value for a specific field name/key
    *
    * @type	function
    * @since	1.0
    * @date	01/08/16
    *
    * @param	$dynamicFields (array) the array of fields
    * @param	$selector (string) the field name or key
    * @param	$entityId (string) the specific entityId
    * @param	$entityType (string) the specific entityType
    *
    * @return	(mixed)
    */
    function get_field($selector, $arrayIn = false, $entityId = null, $entityType = null) {

        if(!is_null($entityId) && !is_null($entityType)) {
            return get_field_by_entity_id($selector, $entityId, $entityType);
        }
        //dd($dynamicfields[$selector]);
        $fields = (false === $arrayIn) ? $GLOBALS['dynamicFields'] : $arrayIn;

        if(is_null($fields)){
            return false;
        }

        if(!isset($fields[$selector])){
            return false;
        }

        return $fields[$selector];
    }
}

if (! function_exists('the_field')) {

    /*
    * the_field()
    *
    * This function is the same as echo get_field().
    *
    * @type	function
    * @since	1.0
    * @date	29/08/16
    *
    * @param	$dynamicFields (array) the array of fields
    * @param	$selector (string) the field name or key
    * @param	$entityId (string) the specific entityId
    * @param	$entityType (string) the specific entityType
    *
    * @return
    */
    function the_field( $selector, $arrayIn = false, $entityId = null, $entityType = null ) {

        $value = get_field( $selector, $arrayIn, $entityId, $entityType );

        echo $value;
    }
}
if (! function_exists('get_layout_from_field')) {

    /* get_layout_from_field()
    *
    * This function will return a custom field value for a specific field name/key
    *
    * @type	function
    * @since	1.0
    * @date	01/08/16
    *
    * @param	$selector (array) the array of fields
    * @param	$layout (array) the array of fields
    * @param	$arrayIn (string) array in
    * @param	$entityId (string) the specific entityId
    * @param	$entityType (string) the specific entityType
    *
    * @return	(mixed)
    */
    function get_layout_from_field($selector, $layout, $arrayIn = false, $entityId = null, $entityType = null)
    {
        $layoutsField = get_field($selector, $arrayIn, $entityId, $entityType);

        if(is_null($layoutsField) || empty($layoutsField)) {
            return null;
        }

        $field = array_filter($layoutsField,function($value) use ($layout) {
            if($value['dcf_fc_layout'] == $layout) {
                return $value[$layout];
            }
        });

        $field = array_collapse($field);

        //dd('$field',$field[$layout]);

        if(!isset($field[$layout])){
            return null;
        }

        return $field[$layout];
    }
}

if (! function_exists('get_field_by_entity_id')) {
    /*
    *  get_field_by_entity_id()
    *
    *  This function is will go and specifically get a field
    * Translation Value for a specific entity id
    * (entity = Post/Page).
    *
    *  @type	function
    *  @since	1.0.3
    *  @date	29/01/13
    *
    * @param	$selector (string) the field name or key
    * @param	$entityId (string) the specific entityId
    * @param	$entityType (string) the specific entityType
    *
    *  @return	string	$value
    */
    function get_field_by_entity_id($selector, $entityId, $entityType){
        return GetFieldValue::perform($selector, $entityId, $entityType);
    }
}

if (! function_exists('the_sub_field')) {

    /*
    *  get_sub_field()
    *
    *  This function is the same as echo get_sub_field
    *
    *  @type	function
    *  @since	1.0.3
    *  @date	29/01/13
    *
    *  @param	string	$field_name: the name of the field - 'sub_heading'
    *
    *  @return	string	$value
    */
    function the_sub_field($field_name)
    {
        // TODO : to stub out correctly
        return null;
        //dd('the_sub_field',$field_name);
        $value = get_sub_field($field_name);

        if(is_array($value))
        {
            $value = implode(', ',$value);
        }

        echo $value;
    }
}

if (! function_exists('get_sub_field')) {

    /*
    *  get_sub_field()
    *
    *  This function is used inside a 'has_sub_field' while loop to return a sub field value
    *
    *  @type	function
    *  @since	1.0.3
    *  @date	29/01/13
    *
    *  @param	string	$field_name: the name of the field - 'sub_heading'
    *
    *  @return	mixed	$value
    */

    function get_sub_field( $field_name ) {

        // no field?
        if( empty($GLOBALS['acf_field']) )
        {
            return false;
        }


        // vars
        $row = end( $GLOBALS['acf_field'] );


        // return value
        if( isset($row['value'][ $row['i'] ][ $field_name ]) )
        {
            return $row['value'][ $row['i'] ][ $field_name ];
        }


        // return false
        return false;
    }
}

if (! function_exists('have_rows')) {
    /*
    * have_rows
    *
    * This function will check if the field has rows within it
    * so for example, flexible layout or repeaters
    *
    * @type	function
    * @date	29/08/16
    * @since	1.0
    *
    * @param	$dynamicFields (array) the array of fields
    * @param	$selector (string) the field name or key
    */

    function have_rows( $selector ) {

        if(false === $field = get_field( $selector )){
            return false;
        }
        if(!is_array($field)){
            return false;
        }
        //dd($field);

        // vars
        $depth = 0;
        $row = array();
        $new_parent_loop = false;
        $new_child_loop = false;

        //return get_field($dynamicFields, $selector);
        //$GLOBALS['df_row'] = get_field( $selector );

        // empty?
        //if( empty($GLOBALS['dynamicFields']) )
        //dd($field);
        //if( empty($GLOBALS['df_rows']) )
        if( !isset($GLOBALS['df_rows']) )
        {
//            // reset
            //reset_rows( true );
//
//
//            // create a new loop
            $new_parent_loop = true;

            return false;
        }
        else
        {
            $GLOBALS['df_rows'] = $field;
            $GLOBALS['df_row']  = $field[0];
        }
        return true;
    }
}

if(! function_exists('reset_rows')){

    /*
    *  reset_rows
    *
    *  This function will find the current loop and unset it from the global array.
    *  To bo used when loop finishes or a break is used
    *
    *  @type	function
    *  @date	26/10/13
    *  @since	5.0.0
    *
    *  @param	$hard_reset (boolean) completely wipe the global variable, or just unset the active row
    *  @return	(boolean)
    */

    function reset_rows( $hard_reset = false ) {

        // completely destroy?
        if( $hard_reset )
        {
            $GLOBALS['df_row'] = array();
        }
        else
        {
            // vars
            $depth = count( $GLOBALS['df_row'] ) - 1;


            // remove
            unset( $GLOBALS['df_row'][$depth] );


            // refresh index
            $GLOBALS['df_row'] = array_values($GLOBALS['df_row']);
        }


        // return
        return true;


    }
}

if (! function_exists('the_row')) {
    /*
    *  the_row()
    *
    *  This function will progress the global repeater or flexible content value 1 row
    *
    *  @type	function
    *  @since	3.0.6
    *  @date	29/01/13
    *
    *  @return	$value - string containing the layout
    */

    function the_row( $format = null )
    {
        // vars
        $depth = count($GLOBALS['df_rows']) - 1;

        //dd($depth, $GLOBALS['df_row'], $GLOBALS['df_rows']);
        // increase i of current row
        //$GLOBALS['df_row'][ $depth ]['i']++;
        $GLOBALS['df_row'] = $GLOBALS['df_rows'][ $depth ]++;

        array_shift($GLOBALS['df_rows']);


        // return
        return get_row( $format );

    }
}

if (! function_exists('get_row')) {
    function get_row($format = false)
    {

        // vars
        $row = acf_get_row();

        //dd('get_row',$row,$GLOBALS['df_row'],$GLOBALS['df_rows']);


        // bail early if no row
        if (!$row) {

            return false;

        }


        // get value
        //$value = $row['value'][$row['i']];
        //dd('get_row',$row);
        //$value = $row;

        // return
        return $row;

    }
}

if (! function_exists('acf_get_row')) {
    function acf_get_row()
    {

        // check and return row
        if (!empty($GLOBALS['df_row'])) {

            return end($GLOBALS['df_row']);
            //return $GLOBALS['df_row'];

        }


        // return
        return false;

    }
}

if (! function_exists('get_row_layout')) {
    /*
    *  get_row_layout()
    *
    *  This function will return a string representation of the current row layout within a 'has_sub_field' loop
    *
    *  @type	function
    *  @since	3.0.6
    *  @date	29/01/13
    *
    *  @return	$value - string containing the layout
    */

    function get_row_layout( $arrayIn = false )
    {
        if( false === $arrayIn ){
            return null;
        }

        //dd($arrayIn);
        // vars
        //$value = get_sub_field('acf_fc_layout');
        if(isset($arrayIn['dcf_fc_layout'])){
            return $arrayIn['dcf_fc_layout'];
        }


        return null;
        //return $value;
    }
}


if (! function_exists('get_video_id')) {
    /*
    *  get_video_id()
    *
    *  This function will return the video id
    *
    *  @type	function
    *  @since	1.0.0
    *  @date	29/01/16
    *
    *  @return	$value - string containing the layout
    */
    function get_video_id( $url )
    {
        $pattern =
            '%^# Match any youtube URL
            (?:https?://)?  # Optional scheme. Either http or https
            (?:www\.)?      # Optional www subdomain
            (?:             # Group host alternatives
              youtu\.be/    # Either youtu.be,
            | youtube\.com  # or youtube.com
              (?:           # Group path alternatives
                /embed/     # Either /embed/
              | /v/         # or /v/
              | .*v=        # or /watch\?v=
              )             # End path alternatives.
            )               # End host alternatives.
            ([\w-]{10,12})  # Allow 10-12 for 11 char youtube id.
            ($|&).*         # if additional parameters are also in query string after video id.
            $%x';
        $result = preg_match($pattern, trim($url), $matches);
        if ( false !== $result ) {
            return $matches[1];
        }
        return null;
    }
}


if (! function_exists('get_all_fields')) {

    /*
    *  get_all_fields()
    *
    *  This function will return all the fields
     * attached to the page
    *
    *  @type	function
    *  @since	1.0.0
    *  @date	29/01/16
    *
    *  @return	$fields - array of all fields
    */
    function get_all_fields()
    {
        if(!isset($GLOBALS['dynamicFields'])){
            return null;
        }

        if(is_null($GLOBALS['dynamicFields'])){
            return null;
        }

        return $GLOBALS['dynamicFields'];
    }
}

