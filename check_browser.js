/*global $, jQuery, alert, console, window, document, angular, navigator*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-11-22 11:47:41
 * @version $Id$
 */

function browser() {
    var agent = navigator.userAgent;
    if (agent.search("MSIE 7") > 0) {
        return 'IE7';
    }
    if (agent.search("MSIE 8") > 0) {
        return 'IE8';
    }
    if (agent.search("MSIE 9") > 0) {
        return 'IE9';
    }
    if (agent.search("MSIE 10") > 0) {
        return 'IE10';
    }
    if (agent.search("like Gecko") > 0) {
        return 'IE11';
    }
    if (agent.search("MSIE") > 0) {
        return 'IE';
    }
    if (agent.search("OPR") > 0) {
        return 'Opera';
    }
    if (agent.search("Opera") > 0) {
        return 'Opera';
    }
    if (agent.search("Firefox") > 0) {
        return 'Firefox';
    }
    if (agent.search("Chrome") > 0) {
        return 'Chrome';
    }
    if (agent.search("Safari") > 0) {
        return 'Safari';
    }
    return 'unknown browser';
}