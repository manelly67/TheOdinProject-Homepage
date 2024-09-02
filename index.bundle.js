"use strict";
(self["webpackChunkportfolio_homepage"] = self["webpackChunkportfolio_homepage"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-large.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-large.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width:981px){
    .photoImg {
        width: 100%;
        object-fit: cover;
    }

    .textInPhoto{
        font-size: 5.6rem;
    }
    
    .themeButton{
        position: absolute;
        top: 3%;
        right: 3%;
        z-index: 1;
    }

    .page-container > header {
        width: 80%;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 2%;
        padding-bottom: 2%; 
        display: flex;
        flex-direction: row;
        justify-content: center;      
       }

    .page-container > main {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 1fr;  
       } 


    .content {
        justify-content: center;
    }

       .divIcons {
        display:flex;
        flex-direction: row;
        justify-content: center;
        gap:10px;
    }

    main > H2 {
        grid-row: 1/2;
        padding-left: 4%;
        font-size: 2.5rem;
    }

    .contentProject {
        grid-row: 2/3;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

    article {
        --defining-width: calc(0.82 * (100vw/3)) ;
        width: var(--defining-width);
        height: calc(var(--defining-width)*1.1);
        border-radius: 6px;
    }

    footer {
        --define-height-footer:calc(0.40*100vh);
        width: 100%;
        height: var(--define-height-footer);
       }

 }`, "",{"version":3,"sources":["webpack://./src/style-large.css"],"names":[],"mappings":"AAAA;IACI;QACI,WAAW;QACX,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;QACT,UAAU;IACd;;IAEA;QACI,UAAU;QACV,iBAAiB;QACjB,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,uBAAuB;OACxB;;IAEH;QACI,WAAW;QACX,YAAY;QACZ,aAAa;QACb,0BAA0B;QAC1B,6BAA6B;OAC9B;;;IAGH;QACI,uBAAuB;IAC3B;;OAEG;QACC,YAAY;QACZ,mBAAmB;QACnB,uBAAuB;QACvB,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,gBAAgB;QAChB,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,WAAW;QACX,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,eAAe;QACf,6BAA6B;MAC/B;;IAEF;QACI,yCAAyC;QACzC,4BAA4B;QAC5B,uCAAuC;QACvC,kBAAkB;IACtB;;IAEA;QACI,uCAAuC;QACvC,WAAW;QACX,mCAAmC;OACpC;;CAEN","sourcesContent":["@media screen and (min-width:981px){\r\n    .photoImg {\r\n        width: 100%;\r\n        object-fit: cover;\r\n    }\r\n\r\n    .textInPhoto{\r\n        font-size: 5.6rem;\r\n    }\r\n    \r\n    .themeButton{\r\n        position: absolute;\r\n        top: 3%;\r\n        right: 3%;\r\n        z-index: 1;\r\n    }\r\n\r\n    .page-container > header {\r\n        width: 80%;\r\n        padding-left: 10%;\r\n        padding-right: 10%;\r\n        padding-top: 2%;\r\n        padding-bottom: 2%; \r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;      \r\n       }\r\n\r\n    .page-container > main {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 100px 1fr;  \r\n       } \r\n\r\n\r\n    .content {\r\n        justify-content: center;\r\n    }\r\n\r\n       .divIcons {\r\n        display:flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        gap:10px;\r\n    }\r\n\r\n    main > H2 {\r\n        grid-row: 1/2;\r\n        padding-left: 4%;\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .contentProject {\r\n        grid-row: 2/3;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-evenly;\r\n      }\r\n\r\n    article {\r\n        --defining-width: calc(0.82 * (100vw/3)) ;\r\n        width: var(--defining-width);\r\n        height: calc(var(--defining-width)*1.1);\r\n        border-radius: 6px;\r\n    }\r\n\r\n    footer {\r\n        --define-height-footer:calc(0.40*100vh);\r\n        width: 100%;\r\n        height: var(--define-height-footer);\r\n       }\r\n\r\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-medium.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-medium.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width:621px) and (max-width:980px){
    .photoImg {
        width: 100%;
        object-fit: cover;
    }

    .textInPhoto{
     font-size: 5rem;
    }

    .themeButton{
        position: absolute;
        top: 2%;
        right: 2%;
        z-index: 1;
    }

    .page-container > header {
        width: 80%;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 2%;
        padding-bottom: 2%;
        display: flex;
        flex-direction: row;
        justify-content: center;
       }

       .divIcons {
        display:flex;
        flex-direction: row;
        justify-content: center;
        gap:10px;
      }

      .contentProject {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

      article {
        --defining-width: calc(0.70 * (100vw/2)) ;
        width: var(--defining-width);
        height: calc(var(--defining-width)*0.7);
        border-radius: 6px;
    }

    footer {
        --define-height-footer:calc(0.25*100vh);
        width: 100%;
        height: var(--define-height-footer);
       }
       

 }`, "",{"version":3,"sources":["webpack://./src/style-medium.css"],"names":[],"mappings":"AAAA;IACI;QACI,WAAW;QACX,iBAAiB;IACrB;;IAEA;KACC,eAAe;IAChB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;QACT,UAAU;IACd;;IAEA;QACI,UAAU;QACV,iBAAiB;QACjB,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,uBAAuB;OACxB;;OAEA;QACC,YAAY;QACZ,mBAAmB;QACnB,uBAAuB;QACvB,QAAQ;MACV;;MAEA;QACE,aAAa;QACb,mBAAmB;QACnB,eAAe;QACf,6BAA6B;MAC/B;;MAEA;QACE,yCAAyC;QACzC,4BAA4B;QAC5B,uCAAuC;QACvC,kBAAkB;IACtB;;IAEA;QACI,uCAAuC;QACvC,WAAW;QACX,mCAAmC;OACpC;;;CAGN","sourcesContent":["@media screen and (min-width:621px) and (max-width:980px){\r\n    .photoImg {\r\n        width: 100%;\r\n        object-fit: cover;\r\n    }\r\n\r\n    .textInPhoto{\r\n     font-size: 5rem;\r\n    }\r\n\r\n    .themeButton{\r\n        position: absolute;\r\n        top: 2%;\r\n        right: 2%;\r\n        z-index: 1;\r\n    }\r\n\r\n    .page-container > header {\r\n        width: 80%;\r\n        padding-left: 10%;\r\n        padding-right: 10%;\r\n        padding-top: 2%;\r\n        padding-bottom: 2%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n       }\r\n\r\n       .divIcons {\r\n        display:flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        gap:10px;\r\n      }\r\n\r\n      .contentProject {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-evenly;\r\n      }\r\n\r\n      article {\r\n        --defining-width: calc(0.70 * (100vw/2)) ;\r\n        width: var(--defining-width);\r\n        height: calc(var(--defining-width)*0.7);\r\n        border-radius: 6px;\r\n    }\r\n\r\n    footer {\r\n        --define-height-footer:calc(0.25*100vh);\r\n        width: 100%;\r\n        height: var(--define-height-footer);\r\n       }\r\n       \r\n\r\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* end of reset of style browser */`, "",{"version":3,"sources":["webpack://./src/style-reset.css"],"names":[],"mappings":";CACC;;;CAGA;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,kCAAkC","sourcesContent":["\r\n /* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video, input {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* end of reset of style browser */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
height: 100vh;
width: 100vw;
margin: auto;
}

.photoImg {
    width: 100%;
    object-fit: cover;
}

.iconImg {
    height: 30px;
    width: auto;
}

/* define background colors - starts*/
.light {
    --color-bg-first:#f3eded;
    --color-bg-header:#d9c9c8;
    --color-bg-section:white;
    --color-bg-article:#aa8c89;
    --color-bg-second:#d9c9c8;
    --color-base-text-title:#2d2322;
    --color-base-text:#584644;
}
.dark {
    --color-bg-first:#aa8c89;
    --color-bg-header:#aa8c89;
    --color-bg-section:#aa8c89;
    --color-bg-article:#d9c9c8;
    --color-bg-second:#aa8c89;
    --color-base-text-title:#f3eded;
    --color-base-text:#f3eded;
}

.bgDivFirst {
    background-color:var(--color-bg-first);
}

.bgDivFirst > div > header {
    background-color: var(--color-bg-header);
}

.bgDivFirst > div > header > section {
    background-color: var(--color-bg-section);
}

article {
    background-color: var(--color-bg-article);
}

.bgDivSecond {
    background-color: var(--color-bg-second);
}

/* define background colors end */

.page-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2.5fr;  
}

.page-container > header {
 width: 100%;
 margin-left: auto;
 margin-right: auto;
 padding-top: 2%;
 padding-bottom: 2%;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
}

.page-container > header > picture {
    position: relative;
}

.textInPhoto{
    position: absolute;
    transform: translate(20px, -100%);  /* translate X,Y */
    width: 80% ;
    color: #f9f7f7;
    font-size: 4rem;
}

.page-container > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;   
}

.content {                  /* aboutMe*/
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px;
    gap: 10px;

    position: relative;
}

h2 {
    padding-top: 1%;
    color: var(--color-base-text-title);
    font-size: 2rem;
}

.contentProject {                  /* my work*/
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px;
    gap: 10px;

    position: relative;
}

article {
    --defining-width: calc(0.70 * 100vw) ;
    width: var(--defining-width);
    height: calc(var(--defining-width)*0.7);
    border-radius: 6px;
}

article {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.70fr 0.10fr 0.20fr;
}

.text{
    flex-shrink: 1;
    padding: 5%;
    text-align: justify;
    color:  var(--color-base-text);
    font-size: 1rem;
}

.divIcons {
    display:flex;
    flex-direction: row;
    justify-content:flex-end;
    gap:10px;
    padding-bottom: 2%;
}

footer {
 --define-height-footer:calc(0.4*100vh);
 width: 100%;
 height: var(--define-height-footer);
}

/*buttons*/

.themeButton{
    position: absolute;
    top: 4%;
    right: 3%;
    z-index: 1;
    background-color:var(--color-bg-first);

    transition: transform 250ms ease-in-out;
}

.themeButton:hover{
    transform: scale(1.1);
    background-color: var(--color-bg-section);
}
.themeButton:active{
    transform: scale(1.1);
    background-color: var(--color-bg-article);
    color: var(--color-bg-section);
}

a {
  transition: transform 250ms ease-in-out; 
}

a:hover{
  transform: scale(1.05); 
}

.show {
 display: block;
}

.hide {
 display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,YAAY;AACZ,YAAY;AACZ;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,qCAAqC;AACrC;IACI,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,+BAA+B;IAC/B,yBAAyB;AAC7B;AACA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,0BAA0B;IAC1B,0BAA0B;IAC1B,yBAAyB;IACzB,+BAA+B;IAC/B,yBAAyB;AAC7B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,iCAAiC;;AAEjC;IACI,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;CACC,WAAW;CACX,iBAAiB;CACjB,kBAAkB;CAClB,eAAe;CACf,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC,GAAG,kBAAkB;IACtD,WAAW;IACX,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA,4BAA4B,WAAW;IACnC,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;;IAET,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,eAAe;AACnB;;AAEA,mCAAmC,WAAW;IAC1C,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;;IAET,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,4BAA4B;IAC5B,uCAAuC;IACvC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;CACC,sCAAsC;CACtC,WAAW;CACX,mCAAmC;AACpC;;AAEA,UAAU;;AAEV;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;IACV,sCAAsC;;IAEtC,uCAAuC;AAC3C;;AAEA;IACI,qBAAqB;IACrB,yCAAyC;AAC7C;AACA;IACI,qBAAqB;IACrB,yCAAyC;IACzC,8BAA8B;AAClC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd","sourcesContent":["body {\r\nheight: 100vh;\r\nwidth: 100vw;\r\nmargin: auto;\r\n}\r\n\r\n.photoImg {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.iconImg {\r\n    height: 30px;\r\n    width: auto;\r\n}\r\n\r\n/* define background colors - starts*/\r\n.light {\r\n    --color-bg-first:#f3eded;\r\n    --color-bg-header:#d9c9c8;\r\n    --color-bg-section:white;\r\n    --color-bg-article:#aa8c89;\r\n    --color-bg-second:#d9c9c8;\r\n    --color-base-text-title:#2d2322;\r\n    --color-base-text:#584644;\r\n}\r\n.dark {\r\n    --color-bg-first:#aa8c89;\r\n    --color-bg-header:#aa8c89;\r\n    --color-bg-section:#aa8c89;\r\n    --color-bg-article:#d9c9c8;\r\n    --color-bg-second:#aa8c89;\r\n    --color-base-text-title:#f3eded;\r\n    --color-base-text:#f3eded;\r\n}\r\n\r\n.bgDivFirst {\r\n    background-color:var(--color-bg-first);\r\n}\r\n\r\n.bgDivFirst > div > header {\r\n    background-color: var(--color-bg-header);\r\n}\r\n\r\n.bgDivFirst > div > header > section {\r\n    background-color: var(--color-bg-section);\r\n}\r\n\r\narticle {\r\n    background-color: var(--color-bg-article);\r\n}\r\n\r\n.bgDivSecond {\r\n    background-color: var(--color-bg-second);\r\n}\r\n\r\n/* define background colors end */\r\n\r\n.page-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2.5fr;  \r\n}\r\n\r\n.page-container > header {\r\n width: 100%;\r\n margin-left: auto;\r\n margin-right: auto;\r\n padding-top: 2%;\r\n padding-bottom: 2%;\r\n display: flex;\r\n flex-direction: column;\r\n align-items: center;\r\n gap: 10px;\r\n}\r\n\r\n.page-container > header > picture {\r\n    position: relative;\r\n}\r\n\r\n.textInPhoto{\r\n    position: absolute;\r\n    transform: translate(20px, -100%);  /* translate X,Y */\r\n    width: 80% ;\r\n    color: #f9f7f7;\r\n    font-size: 4rem;\r\n}\r\n\r\n.page-container > main {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;   \r\n}\r\n\r\n.content {                  /* aboutMe*/\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border-radius: 6px;\r\n    gap: 10px;\r\n\r\n    position: relative;\r\n}\r\n\r\nh2 {\r\n    padding-top: 1%;\r\n    color: var(--color-base-text-title);\r\n    font-size: 2rem;\r\n}\r\n\r\n.contentProject {                  /* my work*/\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border-radius: 6px;\r\n    gap: 10px;\r\n\r\n    position: relative;\r\n}\r\n\r\narticle {\r\n    --defining-width: calc(0.70 * 100vw) ;\r\n    width: var(--defining-width);\r\n    height: calc(var(--defining-width)*0.7);\r\n    border-radius: 6px;\r\n}\r\n\r\narticle {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 0.70fr 0.10fr 0.20fr;\r\n}\r\n\r\n.text{\r\n    flex-shrink: 1;\r\n    padding: 5%;\r\n    text-align: justify;\r\n    color:  var(--color-base-text);\r\n    font-size: 1rem;\r\n}\r\n\r\n.divIcons {\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content:flex-end;\r\n    gap:10px;\r\n    padding-bottom: 2%;\r\n}\r\n\r\nfooter {\r\n --define-height-footer:calc(0.4*100vh);\r\n width: 100%;\r\n height: var(--define-height-footer);\r\n}\r\n\r\n/*buttons*/\r\n\r\n.themeButton{\r\n    position: absolute;\r\n    top: 4%;\r\n    right: 3%;\r\n    z-index: 1;\r\n    background-color:var(--color-bg-first);\r\n\r\n    transition: transform 250ms ease-in-out;\r\n}\r\n\r\n.themeButton:hover{\r\n    transform: scale(1.1);\r\n    background-color: var(--color-bg-section);\r\n}\r\n.themeButton:active{\r\n    transform: scale(1.1);\r\n    background-color: var(--color-bg-article);\r\n    color: var(--color-bg-section);\r\n}\r\n\r\na {\r\n  transition: transform 250ms ease-in-out; \r\n}\r\n\r\na:hover{\r\n  transform: scale(1.05); \r\n}\r\n\r\n.show {\r\n display: block;\r\n}\r\n\r\n.hide {\r\n display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style-large.css":
/*!*****************************!*\
  !*** ./src/style-large.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-large.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-large.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style-medium.css":
/*!******************************!*\
  !*** ./src/style-medium.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-medium.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-medium.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style-reset.css":
/*!*****************************!*\
  !*** ./src/style-reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons-source.js":
/*!************************************!*\
  !*** ./src/assets/icons-source.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   github: () => (/* binding */ github),
/* harmony export */   linkedin: () => (/* binding */ linkedin)
/* harmony export */ });
/* ICONS */

const github='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
const linkedin='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg';


          


/***/ }),

/***/ "./src/assets/text-content.js":
/*!************************************!*\
  !*** ./src/assets/text-content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textContentAboutMe: () => (/* binding */ textContentAboutMe)
/* harmony export */ });
const textContentAboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const screenshotProject1 = new Image();
const screenshotProject2 = new Image();
const screenshotProject3 = new Image();
const screenshotProject4 = new Image();
const screenshotProject5 = new Image();
const screenshotProject6 = new Image();

const projectName1 = 'Project1 Name';
const projectDescription1 ='Short description of the project1. Just a couple sentences will do.';
const projectName2 = 'Project2 Name';
const projectDescription2 ='Short description of the project2. Just a couple sentences will do.';
const projectName3 = 'Project3 Name';
const projectDescription3 ='Short description of the project3. Just a couple sentences will do.';
const projectName4 = 'Project4 Name';
const projectDescription4 ='Short description of the project4. Just a couple sentences will do.';
const projectName5 = 'Project5 Name';
const projectDescription5 ='Short description of the project5. Just a couple sentences will do.';
const projectName6 = 'Project6 Name';
const projectDescription6 ='Short description of the project6. Just a couple sentences will do.';


          



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homepage: () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _assets_img_photo_small_size_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/photo-small-size.jpg */ "./src/assets/img/photo-small-size.jpg");
/* harmony import */ var _assets_img_photo_medium_size_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/photo-medium-size.jpg */ "./src/assets/img/photo-medium-size.jpg");
/* harmony import */ var _assets_img_photo_large_size_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/photo-large-size.jpg */ "./src/assets/img/photo-large-size.jpg");
/* harmony import */ var _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/theme-light-dark.png */ "./src/assets/img/theme-light-dark.png");
/* harmony import */ var _assets_text_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/text-content */ "./src/assets/text-content.js");
/* harmony import */ var _assets_icons_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons-source */ "./src/assets/icons-source.js");








function homepage(){

const root = document.documentElement;
root.setAttribute('id','root-element');
root.className='light';

const flashMessages = document.createElement('div');
flashMessages.setAttribute('id','flash-messages');

const themeButton = document.createElement('button');
themeButton.classList.add('themeButton');
const themeButtonImg = document.createElement('img');
const changeThemeImg = new Image();
changeThemeImg.src = _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_3__;
themeButtonImg.setAttribute('src', changeThemeImg.src);
themeButtonImg.setAttribute('alt','theme-light-dark');
themeButtonImg.classList.add('iconImg');
themeButton.setAttribute('style','border-radius: 30px;');
themeButton.addEventListener("click", () => {
    setTheme();
})

function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }


// background colors
const bgDivFirst = document.createElement('div');
bgDivFirst.classList.add('bgDivFirst');
const bgDivSecond = document.createElement('div');
bgDivSecond.classList.add('bgDivSecond');

const pageContainer = document.createElement('div');
pageContainer.classList.add('page-container');


// header
const header = document.createElement('header');
const textInPhoto = document.createElement('H1');
textInPhoto.textContent = 'My Portfolio';
textInPhoto.classList.add('textInPhoto');

const photoPicture = document.createElement('picture');
const sourceLarge = document.createElement('source');
const sourceMedium = document.createElement('source');
const photoImg = document.createElement('img');
const myLargeImg = new Image();
myLargeImg.src = _assets_img_photo_large_size_jpg__WEBPACK_IMPORTED_MODULE_2__;
sourceLarge.setAttribute('srcset', myLargeImg.src);
sourceLarge.setAttribute('media','(min-width: 981px)');
const myMediumImg = new Image();
myMediumImg.src = _assets_img_photo_medium_size_jpg__WEBPACK_IMPORTED_MODULE_1__;
sourceMedium.setAttribute('srcset', myMediumImg.src);
sourceMedium.setAttribute('media','(min-width:621px) and (max-width:980px)');
const mySmallImg = new Image();
mySmallImg.src = _assets_img_photo_small_size_jpg__WEBPACK_IMPORTED_MODULE_0__;
photoImg.setAttribute('src', mySmallImg.src);
photoImg.setAttribute('alt','');
photoImg.classList.add('photoImg');


const aboutMe = document.createElement('section');
const aboutMeHeading = document.createElement('H2');
const aboutMeText = document.createElement('p');
const aboutMeIcons = document.createElement('div');
const githubLink = document.createElement('a');
const githubIcon = document.createElement('img');
const linkedinLink = document.createElement('a');
const linkedinIcon = document.createElement('img');
aboutMe.classList.add('content');
aboutMeHeading.textContent = 'About me';
aboutMeText.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_4__.textContentAboutMe;
aboutMeText.classList.add('text');
aboutMeIcons.classList.add('divIcons');
githubLink.setAttribute('href','https://github.com/manelly67');
githubLink.setAttribute('target','_blank');
const githubImg = new Image();
githubImg.src = _assets_icons_source__WEBPACK_IMPORTED_MODULE_5__.github;
linkedinLink.setAttribute('href','https://www.linkedin.com/in/marianellylopez');
linkedinLink.setAttribute('target','_blank');
const linkedinImg = new Image();
linkedinImg.src = _assets_icons_source__WEBPACK_IMPORTED_MODULE_5__.linkedin;
githubIcon.setAttribute('src', githubImg.src);
githubIcon.setAttribute('alt', 'Github');
githubIcon.classList.add('iconImg');
linkedinIcon.setAttribute('src', linkedinImg.src);
linkedinIcon.setAttribute('alt','Linkedin');
linkedinIcon.classList.add('iconImg');

// projects content
const main = document.createElement('main');
const contentHeading = document.createElement('H2');
const content = document.createElement('section');
content.classList.add('contentProject');

contentHeading.textContent = 'My work';
const amountOfProjects = 6;
for (let i = 0; i < amountOfProjects; i++) {
    const project = document.createElement('article');
    project.setAttribute('id', `project${i+1}`);
    content.appendChild(project);
}




// footer
const footer = document.createElement('footer');



document.body.appendChild(flashMessages);
document.body.appendChild(themeButton);
document.body.appendChild(bgDivFirst);
document.body.appendChild(bgDivSecond);

themeButton.appendChild(themeButtonImg);
bgDivFirst.appendChild(pageContainer);
bgDivSecond.appendChild(footer);
pageContainer.appendChild(header);
pageContainer.appendChild(main);
header.appendChild(photoPicture);
header.appendChild(aboutMe);
photoPicture.appendChild(sourceLarge);
photoPicture.appendChild(sourceMedium);
photoPicture.appendChild(photoImg);
photoPicture.appendChild(textInPhoto);
aboutMe.appendChild(aboutMeHeading);
aboutMe.appendChild(aboutMeText);
aboutMe.appendChild(aboutMeIcons);
aboutMeIcons.appendChild(githubLink);
githubLink.appendChild(githubIcon);
aboutMeIcons.appendChild(linkedinLink);
linkedinLink.appendChild(linkedinIcon);

main.appendChild(contentHeading);
main.appendChild(content);



}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-reset.css */ "./src/style-reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_large_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-large.css */ "./src/style-large.css");
/* harmony import */ var _style_medium_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-medium.css */ "./src/style-medium.css");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");







(0,_homepage_js__WEBPACK_IMPORTED_MODULE_4__.homepage)();

/***/ }),

/***/ "./src/assets/img/photo-large-size.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/photo-large-size.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8365f8a2d5c4efba6839.jpg";

/***/ }),

/***/ "./src/assets/img/photo-medium-size.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/photo-medium-size.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3800dca3d768cdad8de.jpg";

/***/ }),

/***/ "./src/assets/img/photo-small-size.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/photo-small-size.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8642d570ecb580c0ff9d.jpg";

/***/ }),

/***/ "./src/assets/img/theme-light-dark.png":
/*!*********************************************!*\
  !*** ./src/assets/img/theme-light-dark.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78efed175126a9e644ae.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvRUFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBLHlDQUF5QyxJQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekoyQjtBQUNOO0FBQ007QUFDQztBQUM1QjtBQUN5QztBQUN6QztBQUNBLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vc3JjL3N0eWxlLWxhcmdlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9zcmMvc3R5bGUtbWVkaXVtLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9zcmMvc3R5bGUtcmVzZXQuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9zcmMvc3R5bGUtbGFyZ2UuY3NzP2NmNDYiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vc3JjL3N0eWxlLW1lZGl1bS5jc3M/NjQxNyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9zcmMvc3R5bGUtcmVzZXQuY3NzPzhiNTgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy9pY29ucy1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy90ZXh0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWhvbWVwYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5ODFweCl7XHJcbiAgICAucGhvdG9JbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0SW5QaG90b3tcclxuICAgICAgICBmb250LXNpemU6IDUuNnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRoZW1lQnV0dG9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMlO1xyXG4gICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyJTsgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICAgIFxyXG4gICAgICAgfVxyXG5cclxuICAgIC5wYWdlLWNvbnRhaW5lciA+IG1haW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyOyAgXHJcbiAgICAgICB9IFxyXG5cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgICAgLmRpdkljb25zIHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBnYXA6MTBweDtcclxuICAgIH1cclxuXHJcbiAgICBtYWluID4gSDIge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudFByb2plY3Qge1xyXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuODIgKiAoMTAwdncvMykpIDtcclxuICAgICAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkqMS4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOmNhbGMoMC40MCoxMDB2aCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XHJcbiAgICAgICB9XHJcblxyXG4gfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLWxhcmdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7T0FDeEI7O0lBRUg7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIsNkJBQTZCO09BQzlCOzs7SUFHSDtRQUNJLHVCQUF1QjtJQUMzQjs7T0FFRztRQUNDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsNkJBQTZCO01BQy9COztJQUVGO1FBQ0kseUNBQXlDO1FBQ3pDLDRCQUE0QjtRQUM1Qix1Q0FBdUM7UUFDdkMsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksdUNBQXVDO1FBQ3ZDLFdBQVc7UUFDWCxtQ0FBbUM7T0FDcEM7O0NBRU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5ODFweCl7XFxyXFxuICAgIC5waG90b0ltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0SW5QaG90b3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNS42cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAudGhlbWVCdXR0b257XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMlO1xcclxcbiAgICAgICAgcmlnaHQ6IDMlO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGFnZS1jb250YWluZXIgPiBoZWFkZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlOyBcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgICAgXFxyXFxuICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLnBhZ2UtY29udGFpbmVyID4gbWFpbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyOyAgXFxyXFxuICAgICAgIH0gXFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgIC5kaXZJY29ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6MTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluID4gSDIge1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudFByb2plY3Qge1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIGFydGljbGUge1xcclxcbiAgICAgICAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjgyICogKDEwMHZ3LzMpKSA7XFxyXFxuICAgICAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSoxLjEpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvb3RlciB7XFxyXFxuICAgICAgICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOmNhbGMoMC40MCoxMDB2aCk7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xcclxcbiAgICAgICB9XFxyXFxuXFxyXFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjIxcHgpIGFuZCAobWF4LXdpZHRoOjk4MHB4KXtcclxuICAgIC5waG90b0ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRJblBob3Rve1xyXG4gICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGhlbWVCdXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAuZGl2SWNvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDoxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudFByb2plY3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFydGljbGUge1xyXG4gICAgICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43MCAqICgxMDB2dy8yKSkgO1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSowLjcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6Y2FsYygwLjI1KjEwMHZoKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1tZWRpdW0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBO0tBQ0MsZUFBZTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7T0FDeEI7O09BRUE7UUFDQyxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixRQUFRO01BQ1Y7O01BRUE7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZiw2QkFBNkI7TUFDL0I7O01BRUE7UUFDRSx5Q0FBeUM7UUFDekMsNEJBQTRCO1FBQzVCLHVDQUF1QztRQUN2QyxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSx1Q0FBdUM7UUFDdkMsV0FBVztRQUNYLG1DQUFtQztPQUNwQzs7O0NBR05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MjFweCkgYW5kIChtYXgtd2lkdGg6OTgwcHgpe1xcclxcbiAgICAucGhvdG9JbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dEluUGhvdG97XFxyXFxuICAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoZW1lQnV0dG9ue1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAyJTtcXHJcXG4gICAgICAgIHJpZ2h0OiAyJTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyJTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgLmRpdkljb25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDoxMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuY29udGVudFByb2plY3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgYXJ0aWNsZSB7XFxyXFxuICAgICAgICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuNzAgKiAoMTAwdncvMikpIDtcXHJcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpKjAuNyk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZm9vdGVyIHtcXHJcXG4gICAgICAgIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6Y2FsYygwLjI1KjEwMHZoKTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XFxyXFxuICAgICAgIH1cXHJcXG4gICAgICAgXFxyXFxuXFxyXFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxyXG4gLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKiBlbmQgb2YgcmVzZXQgb2Ygc3R5bGUgYnJvd3NlciAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0NBQ0M7OztDQUdBOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxrQ0FBa0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGlucHV0IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuaGVpZ2h0OiAxMDB2aDtcclxud2lkdGg6IDEwMHZ3O1xyXG5tYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5waG90b0ltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uaWNvbkltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLyogZGVmaW5lIGJhY2tncm91bmQgY29sb3JzIC0gc3RhcnRzKi9cclxuLmxpZ2h0IHtcclxuICAgIC0tY29sb3ItYmctZmlyc3Q6I2YzZWRlZDtcclxuICAgIC0tY29sb3ItYmctaGVhZGVyOiNkOWM5Yzg7XHJcbiAgICAtLWNvbG9yLWJnLXNlY3Rpb246d2hpdGU7XHJcbiAgICAtLWNvbG9yLWJnLWFydGljbGU6I2FhOGM4OTtcclxuICAgIC0tY29sb3ItYmctc2Vjb25kOiNkOWM5Yzg7XHJcbiAgICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTojMmQyMzIyO1xyXG4gICAgLS1jb2xvci1iYXNlLXRleHQ6IzU4NDY0NDtcclxufVxyXG4uZGFyayB7XHJcbiAgICAtLWNvbG9yLWJnLWZpcnN0OiNhYThjODk7XHJcbiAgICAtLWNvbG9yLWJnLWhlYWRlcjojYWE4Yzg5O1xyXG4gICAgLS1jb2xvci1iZy1zZWN0aW9uOiNhYThjODk7XHJcbiAgICAtLWNvbG9yLWJnLWFydGljbGU6I2Q5YzljODtcclxuICAgIC0tY29sb3ItYmctc2Vjb25kOiNhYThjODk7XHJcbiAgICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTojZjNlZGVkO1xyXG4gICAgLS1jb2xvci1iYXNlLXRleHQ6I2YzZWRlZDtcclxufVxyXG5cclxuLmJnRGl2Rmlyc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1iZy1maXJzdCk7XHJcbn1cclxuXHJcbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWhlYWRlcik7XHJcbn1cclxuXHJcbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyID4gc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hcnRpY2xlKTtcclxufVxyXG5cclxuLmJnRGl2U2Vjb25kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZCk7XHJcbn1cclxuXHJcbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyBlbmQgKi9cclxuXHJcbi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyLjVmcjsgIFxyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIgPiBoZWFkZXIge1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBtYXJnaW4tbGVmdDogYXV0bztcclxuIG1hcmdpbi1yaWdodDogYXV0bztcclxuIHBhZGRpbmctdG9wOiAyJTtcclxuIHBhZGRpbmctYm90dG9tOiAyJTtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIGdhcDogMTBweDtcclxufVxyXG5cclxuLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyID4gcGljdHVyZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZXh0SW5QaG90b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0xMDAlKTsgIC8qIHRyYW5zbGF0ZSBYLFkgKi9cclxuICAgIHdpZHRoOiA4MCUgO1xyXG4gICAgY29sb3I6ICNmOWY3Zjc7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lciA+IG1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcclxufVxyXG5cclxuLmNvbnRlbnQgeyAgICAgICAgICAgICAgICAgIC8qIGFib3V0TWUqL1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtdGl0bGUpO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uY29udGVudFByb2plY3QgeyAgICAgICAgICAgICAgICAgIC8qIG15IHdvcmsqL1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gICAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjcwICogMTAwdncpIDtcclxuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpKjAuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjcwZnIgMC4xMGZyIDAuMjBmcjtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBmbGV4LXNocmluazogMTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGNvbG9yOiAgdmFyKC0tY29sb3ItYmFzZS10ZXh0KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmRpdkljb25zIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICBnYXA6MTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6Y2FsYygwLjQqMTAwdmgpO1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcclxufVxyXG5cclxuLypidXR0b25zKi9cclxuXHJcbi50aGVtZUJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNCU7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1iZy1maXJzdCk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udGhlbWVCdXR0b246aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcclxufVxyXG4udGhlbWVCdXR0b246YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDsgXHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgXHJcbn1cclxuXHJcbi5zaG93IHtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiBkaXNwbGF5OiBub25lO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWixZQUFZO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQSxxQ0FBcUM7QUFDckM7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUMsR0FBRyxrQkFBa0I7SUFDdEQsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQSw0QkFBNEIsV0FBVztJQUNuQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQSxtQ0FBbUMsV0FBVztJQUMxQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLFdBQVc7Q0FDWCxtQ0FBbUM7QUFDcEM7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixzQ0FBc0M7O0lBRXRDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbmhlaWdodDogMTAwdmg7XFxyXFxud2lkdGg6IDEwMHZ3O1xcclxcbm1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvSW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbkltZyB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyAtIHN0YXJ0cyovXFxyXFxuLmxpZ2h0IHtcXHJcXG4gICAgLS1jb2xvci1iZy1maXJzdDojZjNlZGVkO1xcclxcbiAgICAtLWNvbG9yLWJnLWhlYWRlcjojZDljOWM4O1xcclxcbiAgICAtLWNvbG9yLWJnLXNlY3Rpb246d2hpdGU7XFxyXFxuICAgIC0tY29sb3ItYmctYXJ0aWNsZTojYWE4Yzg5O1xcclxcbiAgICAtLWNvbG9yLWJnLXNlY29uZDojZDljOWM4O1xcclxcbiAgICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTojMmQyMzIyO1xcclxcbiAgICAtLWNvbG9yLWJhc2UtdGV4dDojNTg0NjQ0O1xcclxcbn1cXHJcXG4uZGFyayB7XFxyXFxuICAgIC0tY29sb3ItYmctZmlyc3Q6I2FhOGM4OTtcXHJcXG4gICAgLS1jb2xvci1iZy1oZWFkZXI6I2FhOGM4OTtcXHJcXG4gICAgLS1jb2xvci1iZy1zZWN0aW9uOiNhYThjODk7XFxyXFxuICAgIC0tY29sb3ItYmctYXJ0aWNsZTojZDljOWM4O1xcclxcbiAgICAtLWNvbG9yLWJnLXNlY29uZDojYWE4Yzg5O1xcclxcbiAgICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTojZjNlZGVkO1xcclxcbiAgICAtLWNvbG9yLWJhc2UtdGV4dDojZjNlZGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYmdEaXZGaXJzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItYmctZmlyc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWhlYWRlcik7XFxyXFxufVxcclxcblxcclxcbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyID4gc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY3Rpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XFxyXFxufVxcclxcblxcclxcbi5iZ0RpdlNlY29uZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZCk7XFxyXFxufVxcclxcblxcclxcbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyBlbmQgKi9cXHJcXG5cXHJcXG4ucGFnZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMi41ZnI7ICBcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcXHJcXG4gd2lkdGg6IDEwMCU7XFxyXFxuIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuIHBhZGRpbmctdG9wOiAyJTtcXHJcXG4gcGFkZGluZy1ib3R0b206IDIlO1xcclxcbiBkaXNwbGF5OiBmbGV4O1xcclxcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciA+IHBpY3R1cmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0SW5QaG90b3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMTAwJSk7ICAvKiB0cmFuc2xhdGUgWCxZICovXFxyXFxuICAgIHdpZHRoOiA4MCUgO1xcclxcbiAgICBjb2xvcjogI2Y5ZjdmNztcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250YWluZXIgPiBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7ICAgICAgICAgICAgICAgICAgLyogYWJvdXRNZSovXFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtdGl0bGUpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50UHJvamVjdCB7ICAgICAgICAgICAgICAgICAgLyogbXkgd29yayovXFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43MCAqIDEwMHZ3KSA7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkqMC43KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC43MGZyIDAuMTBmciAwLjIwZnI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0e1xcclxcbiAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tY29sb3ItYmFzZS10ZXh0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2SWNvbnMge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOjEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjpjYWxjKDAuNCoxMDB2aCk7XFxyXFxuIHdpZHRoOiAxMDAlO1xcclxcbiBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLypidXR0b25zKi9cXHJcXG5cXHJcXG4udGhlbWVCdXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0JTtcXHJcXG4gICAgcmlnaHQ6IDMlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWJnLWZpcnN0KTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWVCdXR0b246aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XFxyXFxufVxcclxcbi50aGVtZUJ1dHRvbjphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7IFxcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgXFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbGFyZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbGFyZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLW1lZGl1bS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1tZWRpdW0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXJlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIElDT05TICovXHJcblxyXG5jb25zdCBnaXRodWI9J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Zyc7XHJcbmNvbnN0IGxpbmtlZGluPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbGlua2VkaW4vbGlua2VkaW4tb3JpZ2luYWwuc3ZnJztcclxuXHJcblxyXG4gICAgICAgICAgXHJcbmV4cG9ydCB7Z2l0aHViLGxpbmtlZGlufTsiLCJjb25zdCB0ZXh0Q29udGVudEFib3V0TWUgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLic7XHJcblxyXG5jb25zdCBzY3JlZW5zaG90UHJvamVjdDEgPSBuZXcgSW1hZ2UoKTtcclxuY29uc3Qgc2NyZWVuc2hvdFByb2plY3QyID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IHNjcmVlbnNob3RQcm9qZWN0MyA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBzY3JlZW5zaG90UHJvamVjdDQgPSBuZXcgSW1hZ2UoKTtcclxuY29uc3Qgc2NyZWVuc2hvdFByb2plY3Q1ID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IHNjcmVlbnNob3RQcm9qZWN0NiA9IG5ldyBJbWFnZSgpO1xyXG5cclxuY29uc3QgcHJvamVjdE5hbWUxID0gJ1Byb2plY3QxIE5hbWUnO1xyXG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb24xID0nU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QxLiBKdXN0IGEgY291cGxlIHNlbnRlbmNlcyB3aWxsIGRvLic7XHJcbmNvbnN0IHByb2plY3ROYW1lMiA9ICdQcm9qZWN0MiBOYW1lJztcclxuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uMiA9J1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0Mi4gSnVzdCBhIGNvdXBsZSBzZW50ZW5jZXMgd2lsbCBkby4nO1xyXG5jb25zdCBwcm9qZWN0TmFtZTMgPSAnUHJvamVjdDMgTmFtZSc7XHJcbmNvbnN0IHByb2plY3REZXNjcmlwdGlvbjMgPSdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdDMuIEp1c3QgYSBjb3VwbGUgc2VudGVuY2VzIHdpbGwgZG8uJztcclxuY29uc3QgcHJvamVjdE5hbWU0ID0gJ1Byb2plY3Q0IE5hbWUnO1xyXG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb240ID0nU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3Q0LiBKdXN0IGEgY291cGxlIHNlbnRlbmNlcyB3aWxsIGRvLic7XHJcbmNvbnN0IHByb2plY3ROYW1lNSA9ICdQcm9qZWN0NSBOYW1lJztcclxuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uNSA9J1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0NS4gSnVzdCBhIGNvdXBsZSBzZW50ZW5jZXMgd2lsbCBkby4nO1xyXG5jb25zdCBwcm9qZWN0TmFtZTYgPSAnUHJvamVjdDYgTmFtZSc7XHJcbmNvbnN0IHByb2plY3REZXNjcmlwdGlvbjYgPSdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdDYuIEp1c3QgYSBjb3VwbGUgc2VudGVuY2VzIHdpbGwgZG8uJztcclxuXHJcblxyXG4gICAgICAgICAgXHJcbmV4cG9ydCB7dGV4dENvbnRlbnRBYm91dE1lfTtcclxuIiwiaW1wb3J0IGltYWdlU21hbGwgZnJvbSAnLi9hc3NldHMvaW1nL3Bob3RvLXNtYWxsLXNpemUuanBnJztcclxuaW1wb3J0IGltYWdlTWVkaXVtIGZyb20gJy4vYXNzZXRzL2ltZy9waG90by1tZWRpdW0tc2l6ZS5qcGcnO1xyXG5pbXBvcnQgaW1hZ2VMYXJnZSBmcm9tICcuL2Fzc2V0cy9pbWcvcGhvdG8tbGFyZ2Utc2l6ZS5qcGcnO1xyXG5pbXBvcnQgY2hhbmdlVGhlbWUgZnJvbSAnLi9hc3NldHMvaW1nL3RoZW1lLWxpZ2h0LWRhcmsucG5nJztcclxuaW1wb3J0IHsgdGV4dENvbnRlbnRBYm91dE1lIH0gZnJvbSAnLi9hc3NldHMvdGV4dC1jb250ZW50JztcclxuaW1wb3J0IHsgZ2l0aHViLGxpbmtlZGluIH0gZnJvbSAnLi9hc3NldHMvaWNvbnMtc291cmNlJztcclxuXHJcblxyXG5mdW5jdGlvbiBob21lcGFnZSgpe1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxucm9vdC5zZXRBdHRyaWJ1dGUoJ2lkJywncm9vdC1lbGVtZW50Jyk7XHJcbnJvb3QuY2xhc3NOYW1lPSdsaWdodCc7XHJcblxyXG5jb25zdCBmbGFzaE1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZsYXNoTWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsJ2ZsYXNoLW1lc3NhZ2VzJyk7XHJcblxyXG5jb25zdCB0aGVtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG50aGVtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0aGVtZUJ1dHRvbicpO1xyXG5jb25zdCB0aGVtZUJ1dHRvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jb25zdCBjaGFuZ2VUaGVtZUltZyA9IG5ldyBJbWFnZSgpO1xyXG5jaGFuZ2VUaGVtZUltZy5zcmMgPSBjaGFuZ2VUaGVtZTtcclxudGhlbWVCdXR0b25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBjaGFuZ2VUaGVtZUltZy5zcmMpO1xyXG50aGVtZUJ1dHRvbkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsJ3RoZW1lLWxpZ2h0LWRhcmsnKTtcclxudGhlbWVCdXR0b25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbkltZycpO1xyXG50aGVtZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYm9yZGVyLXJhZGl1czogMzBweDsnKTtcclxudGhlbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNldFRoZW1lKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcclxuICAgIGNvbnN0IG5ld1RoZW1lID0gcm9vdC5jbGFzc05hbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XHJcbiAgICByb290LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xyXG4gIH1cclxuXHJcblxyXG4vLyBiYWNrZ3JvdW5kIGNvbG9yc1xyXG5jb25zdCBiZ0RpdkZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmJnRGl2Rmlyc3QuY2xhc3NMaXN0LmFkZCgnYmdEaXZGaXJzdCcpO1xyXG5jb25zdCBiZ0RpdlNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5iZ0RpdlNlY29uZC5jbGFzc0xpc3QuYWRkKCdiZ0RpdlNlY29uZCcpO1xyXG5cclxuY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGFpbmVyJyk7XHJcblxyXG5cclxuLy8gaGVhZGVyXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5jb25zdCB0ZXh0SW5QaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0gxJyk7XHJcbnRleHRJblBob3RvLnRleHRDb250ZW50ID0gJ015IFBvcnRmb2xpbyc7XHJcbnRleHRJblBob3RvLmNsYXNzTGlzdC5hZGQoJ3RleHRJblBob3RvJyk7XHJcblxyXG5jb25zdCBwaG90b1BpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IHNvdXJjZUxhcmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XHJcbmNvbnN0IHNvdXJjZU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xyXG5jb25zdCBwaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jb25zdCBteUxhcmdlSW1nID0gbmV3IEltYWdlKCk7XHJcbm15TGFyZ2VJbWcuc3JjID0gaW1hZ2VMYXJnZTtcclxuc291cmNlTGFyZ2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBteUxhcmdlSW1nLnNyYyk7XHJcbnNvdXJjZUxhcmdlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCcobWluLXdpZHRoOiA5ODFweCknKTtcclxuY29uc3QgbXlNZWRpdW1JbWcgPSBuZXcgSW1hZ2UoKTtcclxubXlNZWRpdW1JbWcuc3JjID0gaW1hZ2VNZWRpdW07XHJcbnNvdXJjZU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIG15TWVkaXVtSW1nLnNyYyk7XHJcbnNvdXJjZU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywnKG1pbi13aWR0aDo2MjFweCkgYW5kIChtYXgtd2lkdGg6OTgwcHgpJyk7XHJcbmNvbnN0IG15U21hbGxJbWcgPSBuZXcgSW1hZ2UoKTtcclxubXlTbWFsbEltZy5zcmMgPSBpbWFnZVNtYWxsO1xyXG5waG90b0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIG15U21hbGxJbWcuc3JjKTtcclxucGhvdG9JbWcuc2V0QXR0cmlidXRlKCdhbHQnLCcnKTtcclxucGhvdG9JbWcuY2xhc3NMaXN0LmFkZCgncGhvdG9JbWcnKTtcclxuXHJcblxyXG5jb25zdCBhYm91dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5jb25zdCBhYm91dE1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0gyJyk7XHJcbmNvbnN0IGFib3V0TWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBhYm91dE1lSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jb25zdCBsaW5rZWRpbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbmNvbnN0IGxpbmtlZGluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5hYm91dE1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuYWJvdXRNZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgbWUnO1xyXG5hYm91dE1lVGV4dC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50QWJvdXRNZTtcclxuYWJvdXRNZVRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xyXG5hYm91dE1lSWNvbnMuY2xhc3NMaXN0LmFkZCgnZGl2SWNvbnMnKTtcclxuZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCdodHRwczovL2dpdGh1Yi5jb20vbWFuZWxseTY3Jyk7XHJcbmdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCdfYmxhbmsnKTtcclxuY29uc3QgZ2l0aHViSW1nID0gbmV3IEltYWdlKCk7XHJcbmdpdGh1YkltZy5zcmMgPSBnaXRodWI7XHJcbmxpbmtlZGluTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbWFyaWFuZWxseWxvcGV6Jyk7XHJcbmxpbmtlZGluTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsJ19ibGFuaycpO1xyXG5jb25zdCBsaW5rZWRpbkltZyA9IG5ldyBJbWFnZSgpO1xyXG5saW5rZWRpbkltZy5zcmMgPSBsaW5rZWRpbjtcclxuZ2l0aHViSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdpdGh1YkltZy5zcmMpO1xyXG5naXRodWJJY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0dpdGh1YicpO1xyXG5naXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25JbWcnKTtcclxubGlua2VkaW5JY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgbGlua2VkaW5JbWcuc3JjKTtcclxubGlua2VkaW5JY29uLnNldEF0dHJpYnV0ZSgnYWx0JywnTGlua2VkaW4nKTtcclxubGlua2VkaW5JY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25JbWcnKTtcclxuXHJcbi8vIHByb2plY3RzIGNvbnRlbnRcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuY29uc3QgY29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRQcm9qZWN0Jyk7XHJcblxyXG5jb250ZW50SGVhZGluZy50ZXh0Q29udGVudCA9ICdNeSB3b3JrJztcclxuY29uc3QgYW1vdW50T2ZQcm9qZWN0cyA9IDY7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50T2ZQcm9qZWN0czsgaSsrKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3Qke2krMX1gKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIGZvb3RlclxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmbGFzaE1lc3NhZ2VzKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGVtZUJ1dHRvbik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdEaXZGaXJzdCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdEaXZTZWNvbmQpO1xyXG5cclxudGhlbWVCdXR0b24uYXBwZW5kQ2hpbGQodGhlbWVCdXR0b25JbWcpO1xyXG5iZ0RpdkZpcnN0LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xyXG5iZ0RpdlNlY29uZC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChwaG90b1BpY3R1cmUpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZSk7XHJcbnBob3RvUGljdHVyZS5hcHBlbmRDaGlsZChzb3VyY2VMYXJnZSk7XHJcbnBob3RvUGljdHVyZS5hcHBlbmRDaGlsZChzb3VyY2VNZWRpdW0pO1xyXG5waG90b1BpY3R1cmUuYXBwZW5kQ2hpbGQocGhvdG9JbWcpO1xyXG5waG90b1BpY3R1cmUuYXBwZW5kQ2hpbGQodGV4dEluUGhvdG8pO1xyXG5hYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVIZWFkaW5nKTtcclxuYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lVGV4dCk7XHJcbmFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZUljb25zKTtcclxuYWJvdXRNZUljb25zLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xyXG5naXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xyXG5hYm91dE1lSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkaW5MaW5rKTtcclxubGlua2VkaW5MaW5rLmFwcGVuZENoaWxkKGxpbmtlZGluSWNvbik7XHJcblxyXG5tYWluLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkaW5nKTtcclxubWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge2hvbWVwYWdlfTsiLCJpbXBvcnQgJy4vc3R5bGUtcmVzZXQuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS1sYXJnZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUtbWVkaXVtLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBob21lcGFnZSB9IGZyb20gJy4vaG9tZXBhZ2UuanMnO1xyXG5cclxuaG9tZXBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=