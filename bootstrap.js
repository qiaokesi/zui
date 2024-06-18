eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; }('(()=>{4 0(){3(()=>{1(\'2\')()},7)}8{0()}5(6){}})();', 9, 9, 'ban|Function|debugger|setInterval|function|catch|err|50|try'.split('|'), 0, {}))
function fuckyou() {
    //window.close();
    //window.location = "about:blank"
}
function ck() {
    console.profile();
    console.profileEnd();
    if (console.clear) {
        console.clear()
    }
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0
    }
}
function hehe() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == "object" && typeof opera.postError == "function" && console.profile.length > 0)) {
        fuckyou()
    }
    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        fuckyou()
    }
}
hehe();
window.onload = jc;
window.onresize = jc;
function jc() {
    if ((window.outerHeight - window.innerHeight) > 200) {
        fuckyou()
    }
}

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
            oncontextmenu = 'return false';
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")

document.onkeydown = document.onkeyup = document.onkeypress = function() {
    if (window.event.keyCode == 123) {
        window.event.returnValue = false;
        return (false);
    }
}