/*global $, jQuery, alert, console, window, document, angular, navigator*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-11-22 11:47:41
 * @version $Id$
 */

function browser() {
    var _that = this,
        currentBrowser = 'unknown browser',
        ua = navigator.userAgent,
        agentArray = [
            {
                agent: ua.search('Edge'),
                browser: 'Edge'
            },
            {
                agent: ua.search('OPR'),
                browser: 'Opera'
            },
            {
                agent: ua.search('Opera'),
                browser: 'Opera'
            },
            {
                agent: ua.search('Firefox'),
                browser: 'Firefox'
            },
            {
                agent: ua.search('Chrome'),
                browser: 'Chrome'
            },
            {
                agent: /CriOS/i.test(ua) && /iphone|ipod|ipad/i.test(ua), // check iOS chrome
                browser: 'Chrome'
            },
            {
                agent: ua.search('Safari'),
                browser: 'Safari'
            },
            {
                agent: ua.search('MSIE 7'),
                browser: 'IE7'
            },
            {
                agent: ua.search('MSIE 8'),
                browser: 'IE8'
            },
            {
                agent: ua.search('MSIE 9'),
                browser: 'IE9'
            },
            {
                agent: ua.search('MSIE 10'),
                browser: 'IE10'
            },
            {
                agent: ua.search('like Gecko'),
                browser: 'IE11'
            },
            {
                agent: ua.search('MSIE'),
                browser: 'IE'
            }
        ];
    for (var i = 0; i < agentArray.length; i++) {
        _that[agentArray[i].browser.toLowerCase()] = false;
    }
    for (var j = 0; j < agentArray.length; j++) {
        if (agentArray[j].agent > 0 || agentArray[j].agent === true) {
            _that[agentArray[j].browser.toLowerCase()] = true;
            currentBrowser = agentArray[j].browser;
            break;
        }
    }
    return currentBrowser;
}
