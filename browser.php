<?php
/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-02-10 13:48:58
 * @version $Id$
 */

    function browser($value='')
    {
        $agent = $_SERVER['HTTP_USER_AGENT'];
        if (strpos($agent, 'OPR') > 0) {
            return 'Opera';
        }
        if (strpos($agent, 'Opera') > 0) {
            return 'Opera';
        }
        if (strpos($agent, 'Firefox') > 0) {
            return 'Firefox';
        }
        if (strpos($agent, 'Chrome') > 0) {
            return 'Chrome';
        }
        if (strpos($agent, 'Safari') > 0) {
            return 'Safari';
        }
        if (strpos($agent, 'MSIE 7') > 0) {
            return 'IE7';
        }
        if (strpos($agent, 'MSIE 8') > 0) {
            return 'IE8';
        }
        if (strpos($agent, 'MSIE 9') > 0) {
            return 'IE9';
        }
        if (strpos($agent, 'MSIE 10') > 0) {
            return 'IE10';
        }
        if (strpos($agent, 'like Gecko') > 0) {
            return 'IE11';
        }
        if (strpos($agent, 'Edge') > 0) {
            return 'Edge';
        }
        if (strpos($agent, 'MSIE') > 0) {
            return 'IE';
        }

        return 'unknown browser';
    }
    // echo "Browser : ". browser();
?>
