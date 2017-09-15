<?php
namespace Modules\Dynamicfield\Library\Data;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;

trait ParseChoices {

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
    function encodeChoices( $array = array() ) {

        // bail early if not array
        if( !is_array($array) )
        {
            return $array;
        }

        // vars
        $string = '';

        if( !empty($array) ) {

            foreach( $array as $k => $v ) {

                if( $k !== $v ) {

                    $array[ $k ] = $k . ' : ' . $v;

                }

            }

            $string = implode("\n", $array);

        }


        // return
        return $string;

    }

    /*
    *  decodeChoices
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
    function decodeChoices( $string = '' ) {

        // validate
        if( is_numeric($string) ) {

            // force array on single numeric values
            return array( $string );

        } elseif( !is_string($string) ) {

            // bail early if not a a string
            return $string;

        }


        // vars
        $array = array();


        // explode
        $lines = explode("\n", $string);


        // key => value
        foreach( $lines as $line ) {

            // vars
            $k = trim($line);
            $v = trim($line);


            // look for ' : '
            if( $this->stringExists(' : ', $line) ) {

                $line = explode(' : ', $line);

                $k = trim($line[0]);
                $v = trim($line[1]);

            }


            // append
            $array[ $k ] = $v;

        }


        // return
        return $array;

    }


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
    function stringExists( $needle, $haystack ) {

        // return true if $haystack contains the $needle
        if( is_string($haystack) && strpos($haystack, $needle) !== false ) {

            return true;

        }


        // return
        return false;
    }

}