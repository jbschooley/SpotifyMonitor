// ==UserScript==
// @name         Spotify CSS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes Spotify look nice on a 7 inch monitor
// @author       Jacob Schooley / bitzero.tech
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @grant        none
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}

(function() {
    'use strict';

    waitForKeyElements('body', e => {
        //addGlobalStyle('.miniButton:hover,.miniplayer .miniButton{filter:grayscale(0%)}.miniButton,.miniplayer .miniButton:hover{filter:grayscale(100%)}.miniButton{height:32px;transform:scale(.5);transition:.5s}.miniButton:hover{transform:scale(.6);cursor:pointer}.maxed .miniButton{pointer-events:none!important;filter:grayscale(100%) hue-rotate(100);position:relative;filter:grayscale(100%) brightness(.5)!important}.miniplayer .now-playing-bar,body.miniplayer>#main>div>div.Root__top-container>div.Root__now-playing-bar>footer>div:first-child{position:fixed;top:0;left:0;width:100vw;height:100vh!important;flex-direction:column!important;align-items:center;justify-content:space-around!important;z-index:1005!important;background:#121212!important}body.miniplayer>#main>div>div.Root__top-container>div.Root__now-playing-bar>footer>div:first-child>div{width:100vw;max-width:100vw;display:flex;justify-content:center}body.miniplayer>#main>div>div.Root__top-container>div.Root__now-playing-bar>footer>div:first-child>div>div{max-width:100vw}.connect-device-list-container,.miniplayer .connect-device-list-content{position:fixed!important;top:25px!important;left:0!important;width:100vw;height:calc(100vh - 25px);background:#282828;box-sizing:border-box;max-height:unset!important;transform:unset!important}.miniplayer .connect-header,.miniplayer .connect-title,.miniplayer div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--episodes,.miniplayer div.now-playing__pip-toggle{height:0;width:0;overflow:hidden}.miniplayer .connect-header{position:fixed}.miniplayer .ExtraControls,.miniplayer .now-playing{display:flex!important;justify-content:center!important}body.miniplayer>#main>div>div.Root__top-container>div.Root__now-playing-bar>footer>div>div.b51affc9f26a5c8f65a387abdd375bef-scss>div{transform:unset!important}body.miniplayer button[data-testid=pip-toggle-button]{display:none}body.miniplayer>#miniplayer-overlay{display:block!important}#miniplayer-overlay{display:none;z-index:100;transition-property:left,top,width,height;transition-duration:.5s;transition-timing-function:ease-in-out}');
        e.addClass("miniplayer");
        addGlobalStyle('div#onetrust-consent-sdk {display: none;}')
    })

    waitForKeyElements('body.miniplayer >#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)', e => {
        console.log('adding style');
        addGlobalStyle('body.miniplayer >#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1){flex-direction: row; flex-wrap: wrap; padding: 0;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(1) > div{width: 100%;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(1){max-width: 85vw;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(1) > div:nth-child(1){width: 100%;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(1) > div:nth-child(1) > div:nth-child(1){transform: translateX(0px);}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar .cover-art{width: 105px; height: 105px;;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(1) > div:nth-child(1) > div:nth-child(2){width: 100%;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(2){width: auto;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1)> div:nth-child(3){width: auto;}');

        // wrap title (max 3 lines)
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1){--trans-x:0px; white-space: normal; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;padding-right: 0px;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1){-webkit-mask-image: none; mask-image: none;}');

        addGlobalStyle('body.miniplayer button[data-testid="lyrics-button"]{display: none;}');
        addGlobalStyle('body.miniplayer button[aria-label="Expand"]{display: none;}');
        addGlobalStyle('body.miniplayer button[aria-label="Full screen"]{display: none;}');
        addGlobalStyle('body.miniplayer > #main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div:nth-child(1) .encore-bright-accent-set {display: none;}');
    }, true);

    function changeAlbumArt() {
        setTimeout(function () {
            try{
                if ($('.cover-art-image')[0].src.includes('ab67616d00004851')) {
                    $('.cover-art-image')[0].src = $('.cover-art-image')[0].src.replace('ab67616d00004851', 'ab67616d0000b273')
                }
            } catch(e) {}
            changeAlbumArt();
        }, 100);
    };
    changeAlbumArt();
})();