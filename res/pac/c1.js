// * Created by jack on 14-4-30.
// http://localhost:8001/html/js/pac/chrome.pac.js
// 直接调用file协议，更为稳定，因为rawgit不会马上刷新

var port=8580;
// var port=8087;

var go = "PROXY 127.0.0.1:"+port;

var proxy_fg="PROXY 127.0.0.1:8080";
// var proxy_fg="PROXY 127.0.0.1:8580";
var proxy_go="PROXY 127.0.0.1:8087";
var proxy_ssh="SOCKS 127.0.0.1:1080";
var proxy_36="PROXY 10.110.67.174:8090";

var direct = "DIRECT";

var all="DIRECT;"+proxy_fg + ";"+proxy_go + ";"+proxy_ssh;
var block = "PROXY 0.0.0.0:0";
function FindProxyForURL(url, host) {
    var fg = [
        'groups.google.com*',
        // 这个也放在里面了，以区别于其他浏览器
        '*.google.com',
        '*.google.com.hk',
        '*.gstatic.com',
        '*.googlecode.com',
        'www.pegym.com',
        '*.appspot.com',
        '*.wordpress.com',
        '*googleusercontent.com',
        '*.googleapis.com',
        '*.facebook.com',
        'www.ntdtv.com',
        'www.aboluowang.com',
        's3.amazonaws.com',
        '*youtube.com',
        '*.gmail.com',
        '*.netflix.com',
        '*.w.org',
        '*mitbbs.com',
        '*.bloomberg.com',
//        '*sinovision.net',
        '*.twitter.com',
        'twitter.com',
        '*.blogspot.com',
        '*ytimg.com',
        '*google.ae',
        '*.gravatar.com',

        'gist.github.com',
        '*.gravatar.com',

        'instagram.com',
        's3.amazonaws.com',

        '*.blogspot.fr',
        '*.google.hk',

        '*.googleapis.com',

        '*.twimg.com',
        '*.wp.com',

        // 国外站
        '*.sis001.us',
        '*.dropbox.com',
        't.co',
        'bit.ly',

        '*.angularjstutorial.com',
        '*.angularjs.org',
        '*.blogger.com',

        'vimeo.com',
        '*.vimeocdn.com',
        'friendfeed.com',
        '*.mengstupiditis.com',
        'www.polymer-project.org',

        '*.sstatic.net',
        '*.speakerdeck.com',
        '*.golang.org',
        'golang.org',
        '*.chromium.org',
        '*.blogblog.com',
        '*.googlesource.com',
        '*.wireshark.org',
        '*.polymer-project.org',
        '*.docker.com'
        // '*.github.com'
    ];

    var go = [
        '*.chromium.org',
        '*.chrome.com',
        '*.slideshare.net'
    ];

    var db = [
        // '*.acm.org',
        // '*.engineeringvillage.com',
        // '*.webofknowledge.com'
    ];


    for (var i=0;i<db.length; i++) {
        if (shExpMatch(host, db[i])) {
            // return proxy_fg;
            return proxy_36;
        }
    }        

    for (var i=0;i<fg.length; i++) {
        if (shExpMatch(host, fg[i])) {
            return proxy_fg;
            // return proxy_go;
        }
    }

    for (var i=0;i<go.length; i++) {
        if (shExpMatch(host, go[i])) {
            return proxy_ssh;
        }
    }

//    alert('ok');
//    return direct;
    // return all;
    return direct;
}
