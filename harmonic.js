/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":10,"name":"NodebotsDay Porto Alegre","title":"NodebotsDay Porto Alegre","domain":"http://nodebotsday-poa.github.io","subtitle":"NodebotsDay Porto Alegre 25/7/15","author":"@nodebotsday-poa","description":"Um dia para aprender sobre hardware usando JavaScript","bio":"","theme":"harmonic-theme-default","preprocessor":false,"posts_permalink":":language/:year/:month/:title","pages_permalink":"pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"pt-br","languages":["pt-br"]},"mycustomdata":"wow","foo":"bar","baz":["a","b"]};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"pt-br":[{"layout":"post","title":"hello","date":"2015-07-13T02:15:17.468Z","comments":"true","published":"true","keywords":"","description":"","categories":[""],"content":"<h1 id=\"hello\">hello</h1>\n","file":"src/posts/hello.md","filename":"hello","link":"2015/07/hello","lang":"pt-br","default_lang":false}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return [{"layout":"page","title":"sobre","date":"2015-07-13T02:17:21.516Z","comments":"true","published":"true","keywords":"","description":"","categories":"","content":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>sobre - NodebotsDay Porto Alegre</title>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <link rel=\"stylesheet\" href=\"/css/main.css\">\n</head>\n<body>\n<nav class=\"social\">\n\n</nav>\n\t<article>\n\t\t<h1 id=\"sobre\">sobre</h1>\n\n\t</article>\n\n\t<footer class=\"bottom\">\n    <span class=\"licenses\">\n\n        <a href=\"https://twitter.com/nodebotspoa\">@nodebotspoa</a>\n        <a href=\"mailto:nodebotspoa@gmail.com\">nodebotspoa@gmail.com</a> <br />\n        website estático feito com <a href=\"https://github.com/es6rocks/harmonic/\">Harmonic</a>\n    </span>\n</footer>\n<script type=\"text/javascript\" src=\"/harmonic.js\"></script>\n<script type=\"text/javascript\" src=\"/js/main.js\"></script>\n\n\n</body>\n</html>\n","file":"src/posts/sobre.md","filename":"sobre","link":"/sobre.html"}];
        }
    }]);

    return Harmonic;
})();