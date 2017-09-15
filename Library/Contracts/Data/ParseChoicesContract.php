<?php
namespace Modules\Dynamicfield\Library\Contracts\Data;


interface ParseChoicesContract
{

    /*
    *  encode_choices
    *
    *  encode the choices
    *
    *  @type	function
    *  @date	1/09/2016
    *  @since	1.0.0
    *
    *  @param	$array  (array)
    *  @return	$string (string)
    */
    function encodeChoices( $array = array() );

    /*
    *  decode_choices
    *
    *  decode the choices
    *
    *  @type	function
    *  @date	1/09/2016
    *  @since	1.0.0
    *
    *  @param	$array  (array)
    *  @return	$string (string)
    */
    function decodeChoices( $string = '' );

    /*
    *  str_exists
    *
    *  This function will return true if a sub string is found
    *
    *  @type	function
    *  @date	1/09/2016
    *  @since	1.0.0
    *
    *  @param	$needle (string)
    *  @param	$haystack (string)
    *  @return	(boolean)
    */
    function stringExists( $needle, $haystack );


}